import { app as Lt } from "../../scripts/app.js";
import { defineComponent as ne, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Me, createBlock as I, resolveDynamicComponent as Rs, normalizeClass as pe, withCtx as l, toDisplayString as a, createVNode as y, createTextVNode as g, computed as O, Fragment as W, renderList as ae, normalizeStyle as Pt, ref as h, onMounted as je, watch as St, Teleport as Ze, withModifiers as Ve, Transition as xo, createSlots as Vt, withKeys as xt, reactive as bs, onUnmounted as Ms, readonly as So, unref as Re, withDirectives as Ue, vModelText as Ft, vModelRadio as zt, vModelCheckbox as hs, nextTick as Io, vModelSelect as Et, vModelDynamic as Eo, TransitionGroup as Po, createApp as Ts, h as Ds } from "vue";
const Ro = { class: "panel-layout" }, Mo = {
  key: 0,
  class: "panel-layout-header"
}, To = {
  key: 1,
  class: "panel-layout-search"
}, Do = { class: "panel-layout-content" }, Lo = {
  key: 2,
  class: "panel-layout-footer"
}, zo = /* @__PURE__ */ ne({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", Ro, [
      c.$slots.header ? (s(), o("div", Mo, [
        Me(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", To, [
        Me(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Do, [
        Me(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", Lo, [
        Me(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), le = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, f] of c)
    n[i] = f;
  return n;
}, nt = /* @__PURE__ */ le(zo, [["__scopeId", "data-v-21565df9"]]), Uo = {
  key: 0,
  class: "panel-title-prefix"
}, No = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Oo = /* @__PURE__ */ ne({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), I(Rs(`h${t.level}`), {
      class: pe(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", Uo, a(t.prefix), 1)) : (s(), o("span", No)),
        Me(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ao = /* @__PURE__ */ le(Oo, [["__scopeId", "data-v-c3875efc"]]), Bo = ["title"], Fo = ["width", "height"], Vo = /* @__PURE__ */ ne({
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
      ])], 8, Fo))
    ], 8, Bo));
  }
}), to = /* @__PURE__ */ le(Vo, [["__scopeId", "data-v-6fc7f16d"]]), Wo = { class: "header-left" }, Go = {
  key: 0,
  class: "header-actions"
}, jo = /* @__PURE__ */ ne({
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
      class: pe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Wo, [
        y(Ao, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            g(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), I(to, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Go, [
        Me(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ le(jo, [["__scopeId", "data-v-55a62cd6"]]), Ho = {
  key: 0,
  class: "section-title-count"
}, Ko = {
  key: 1,
  class: "section-title-icon"
}, qo = /* @__PURE__ */ ne({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), I(Rs(`h${t.level}`), {
      class: pe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Me(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ho, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", Ko, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vt = /* @__PURE__ */ le(qo, [["__scopeId", "data-v-559361eb"]]), Yo = { class: "status-grid" }, Jo = { class: "status-grid__columns" }, Xo = { class: "status-grid__column" }, Qo = { class: "status-grid__title" }, Zo = { class: "status-grid__column status-grid__column--right" }, en = { class: "status-grid__title" }, tn = {
  key: 0,
  class: "status-grid__footer"
}, sn = /* @__PURE__ */ ne({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Yo, [
      e("div", Jo, [
        e("div", Xo, [
          e("h4", Qo, a(t.leftTitle), 1),
          Me(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Zo, [
          e("h4", en, a(t.rightTitle), 1),
          Me(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", tn, [
        Me(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), on = /* @__PURE__ */ le(sn, [["__scopeId", "data-v-73b7ba3f"]]), nn = {
  key: 0,
  class: "status-item__icon"
}, an = {
  key: 1,
  class: "status-item__count"
}, ln = { class: "status-item__label" }, rn = /* @__PURE__ */ ne({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = O(() => `status-item--${c.variant}`);
    return (i, f) => (s(), o("div", {
      class: pe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", nn, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", an, a(t.count), 1)) : r("", !0),
      e("span", ln, a(t.label), 1)
    ], 2));
  }
}), $t = /* @__PURE__ */ le(rn, [["__scopeId", "data-v-6f929183"]]), dn = { class: "issue-card__header" }, cn = { class: "issue-card__icon" }, un = { class: "issue-card__title" }, mn = {
  key: 0,
  class: "issue-card__content"
}, vn = {
  key: 0,
  class: "issue-card__description"
}, fn = {
  key: 1,
  class: "issue-card__items"
}, pn = {
  key: 2,
  class: "issue-card__actions"
}, gn = /* @__PURE__ */ ne({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = O(() => `issue-card--${c.severity}`);
    return (i, f) => (s(), o("div", {
      class: pe(["issue-card", n.value])
    }, [
      e("div", dn, [
        e("span", cn, a(t.icon), 1),
        e("h4", un, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", mn, [
        t.description ? (s(), o("p", vn, a(t.description), 1)) : r("", !0),
        Me(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", fn, [
        (s(!0), o(W, null, ae(t.items, (v, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(v), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (s(), o("div", pn, [
        Me(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ le(gn, [["__scopeId", "data-v-df6aa348"]]), hn = ["type", "disabled"], yn = {
  key: 0,
  class: "spinner"
}, wn = /* @__PURE__ */ ne({
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
      class: pe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", yn)) : r("", !0),
      t.loading ? r("", !0) : Me(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, hn));
  }
}), te = /* @__PURE__ */ le(wn, [["__scopeId", "data-v-772abe47"]]), kn = { class: "empty-state" }, bn = {
  key: 0,
  class: "empty-icon"
}, _n = { class: "empty-message" }, $n = /* @__PURE__ */ ne({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", kn, [
      t.icon ? (s(), o("div", bn, a(t.icon), 1)) : r("", !0),
      e("p", _n, a(t.message), 1),
      t.actionLabel ? (s(), I(te, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("action"))
      }, {
        default: l(() => [
          g(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), kt = /* @__PURE__ */ le($n, [["__scopeId", "data-v-4466284f"]]), Cn = /* @__PURE__ */ ne({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: pe(["detail-label"]),
      style: Pt({ minWidth: t.minWidth })
    }, [
      Me(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ps = /* @__PURE__ */ le(Cn, [["__scopeId", "data-v-75e9eeb8"]]), xn = /* @__PURE__ */ ne({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: pe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Me(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ss = /* @__PURE__ */ le(xn, [["__scopeId", "data-v-2f186e4c"]]), Sn = { class: "detail-row" }, In = /* @__PURE__ */ ne({
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
    return (c, n) => (s(), o("div", Sn, [
      y(ps, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          g(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), I(Ss, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          g(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Me(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ge = /* @__PURE__ */ le(In, [["__scopeId", "data-v-ef15664a"]]), En = { class: "modal-header" }, Pn = { class: "modal-body" }, Rn = { class: "status-section" }, Mn = {
  key: 0,
  class: "status-section"
}, Tn = { class: "section-header-row" }, Dn = {
  key: 0,
  class: "workflow-group"
}, Ln = { class: "workflow-group-header" }, zn = { class: "workflow-group-title" }, Un = { class: "workflow-list" }, Nn = { class: "workflow-name" }, On = { class: "workflow-issue" }, An = {
  key: 1,
  class: "workflow-group"
}, Bn = { class: "workflow-group-header" }, Fn = { class: "workflow-group-title" }, Vn = { class: "workflow-list" }, Wn = { class: "workflow-name" }, Gn = { class: "workflow-issue" }, jn = {
  key: 2,
  class: "workflow-group"
}, Hn = { class: "workflow-group-header" }, Kn = { class: "workflow-group-title" }, qn = { class: "workflow-list" }, Yn = { class: "workflow-name" }, Jn = {
  key: 3,
  class: "workflow-group"
}, Xn = { class: "workflow-group-header" }, Qn = { class: "workflow-group-title" }, Zn = { class: "workflow-list" }, ea = { class: "workflow-name" }, ta = {
  key: 4,
  class: "workflow-group"
}, sa = { class: "workflow-group-header" }, oa = { class: "workflow-group-title" }, na = { class: "workflow-list" }, aa = { class: "workflow-name" }, la = {
  key: 5,
  class: "workflow-group"
}, ia = { class: "workflow-group-title" }, ra = { class: "expand-icon" }, da = {
  key: 0,
  class: "workflow-list"
}, ca = { class: "workflow-name" }, ua = {
  key: 1,
  class: "status-section"
}, ma = {
  key: 0,
  class: "change-group"
}, va = { class: "change-group-header" }, fa = { class: "change-group-title" }, pa = { class: "change-list" }, ga = { class: "node-name" }, ha = {
  key: 0,
  class: "dev-badge"
}, ya = {
  key: 1,
  class: "change-group"
}, wa = { class: "change-group-header" }, ka = { class: "change-group-title" }, ba = { class: "change-list" }, _a = { class: "node-name" }, $a = {
  key: 0,
  class: "dev-badge"
}, Ca = {
  key: 2,
  class: "change-group"
}, xa = { class: "change-list" }, Sa = { class: "change-item" }, Ia = { class: "node-name" }, Ea = {
  key: 3,
  class: "change-group"
}, Pa = {
  key: 2,
  class: "status-section"
}, Ra = { class: "section-header-row" }, Ma = {
  key: 0,
  class: "drift-item"
}, Ta = { class: "drift-list" }, Da = {
  key: 0,
  class: "drift-list-more"
}, La = {
  key: 1,
  class: "drift-item"
}, za = { class: "drift-list" }, Ua = {
  key: 0,
  class: "drift-list-more"
}, Na = {
  key: 2,
  class: "drift-item"
}, Oa = { class: "drift-list" }, Aa = { class: "version-actual" }, Ba = { class: "version-expected" }, Fa = {
  key: 0,
  class: "drift-list-more"
}, Va = {
  key: 3,
  class: "drift-item"
}, Wa = { class: "repair-action" }, Ga = {
  key: 3,
  class: "status-section"
}, ja = { class: "info-box" }, Ha = { class: "drift-list" }, Ka = {
  key: 0,
  class: "drift-list-more"
}, qa = {
  key: 4,
  class: "status-section"
}, Ya = { class: "warning-box" }, Ja = {
  key: 5,
  class: "empty-state-inline"
}, Xa = { class: "modal-actions" }, Qa = /* @__PURE__ */ ne({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = h(!1);
    je(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), St(() => c.show, (_, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", _);
    }, { immediate: !0 });
    const i = O(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : T.filter(
        (R) => R.status === "broken" && R.sync_state === "synced"
      )) || [];
    }), f = O(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : T.filter(
        (R) => R.status === "broken" && R.sync_state !== "synced"
      )) || [];
    }), v = O(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.synced) == null ? void 0 : T.filter((R) => {
        var C, B, S;
        const $ = (S = (B = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : S.find((M) => M.name === R);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = O(() => {
      var _, b, T, R, $;
      return (_ = c.status) != null && _.workflows ? (((b = c.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((T = c.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((R = c.status.workflows.deleted) == null ? void 0 : R.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), m = O(() => {
      var b, T, R;
      const _ = (b = c.status) == null ? void 0 : b.git_changes;
      return _ ? (((T = _.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((R = _.nodes_removed) == null ? void 0 : R.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), d = O(() => {
      var _, b, T, R, $, C;
      return !u.value && !m.value && ((b = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : b.is_synced) && (((T = c.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((C = ($ = (R = c.status) == null ? void 0 : R.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), p = O(() => {
      var b, T;
      const _ = (T = (b = c.status) == null ? void 0 : b.git_changes) == null ? void 0 : T.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function w(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function k(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, b) => {
      var T, R, $, C, B, S, M, Q, F, j, x, D, A, de, ee, Y, re, X, N, z, E, ce;
      return s(), I(Ze, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[7] || (b[7] = (se) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[6] || (b[6] = Ve(() => {
            }, ["stop"]))
          }, [
            e("div", En, [
              b[8] || (b[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (se) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", Pn, [
              e("div", Rn, [
                y(vt, { level: "4" }, {
                  default: l(() => [...b[9] || (b[9] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                y(Ge, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", Mn, [
                e("div", Tn, [
                  y(vt, { level: "4" }, {
                    default: l(() => [...b[10] || (b[10] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[1] || (b[1] = (se) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", Dn, [
                  e("div", Ln, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", zn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", Un, [
                    (s(!0), o(W, null, ae(i.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", Nn, a(se.name), 1),
                      e("span", On, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                f.value.length ? (s(), o("div", An, [
                  e("div", Bn, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Fn, "BROKEN (UNCOMMITTED) (" + a(f.value.length) + ")", 1)
                  ]),
                  e("div", Vn, [
                    (s(!0), o(W, null, ae(f.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", Wn, a(se.name), 1),
                      e("span", Gn, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (R = (T = t.status.workflows) == null ? void 0 : T.new) != null && R.length ? (s(), o("div", jn, [
                  e("div", Hn, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Kn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", qn, [
                    (s(!0), o(W, null, ae(t.status.workflows.new, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Yn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (C = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (s(), o("div", Jn, [
                  e("div", Xn, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Qn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Zn, [
                    (s(!0), o(W, null, ae(t.status.workflows.modified, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", ea, a(se), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (S = (B = t.status.workflows) == null ? void 0 : B.deleted) != null && S.length ? (s(), o("div", ta, [
                  e("div", sa, [
                    b[15] || (b[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", oa, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", na, [
                    (s(!0), o(W, null, ae(t.status.workflows.deleted, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", aa, a(se), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                v.value.length ? (s(), o("div", la, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (se) => n.value = !n.value)
                  }, [
                    b[16] || (b[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ia, "SYNCED (" + a(v.value.length) + ")", 1),
                    e("span", ra, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", da, [
                    (s(!0), o(W, null, ae(v.value, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", ca, a(se), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              m.value ? (s(), o("div", ua, [
                y(vt, { level: "4" }, {
                  default: l(() => [...b[17] || (b[17] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (Q = (M = t.status.git_changes) == null ? void 0 : M.nodes_added) != null && Q.length ? (s(), o("div", ma, [
                  e("div", va, [
                    b[18] || (b[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", fa, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", pa, [
                    (s(!0), o(W, null, ae(t.status.git_changes.nodes_added, (se) => (s(), o("div", {
                      key: w(se),
                      class: "change-item"
                    }, [
                      e("span", ga, a(w(se)), 1),
                      k(se) ? (s(), o("span", ha, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (j = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && j.length ? (s(), o("div", ya, [
                  e("div", wa, [
                    b[19] || (b[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ka, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", ba, [
                    (s(!0), o(W, null, ae(t.status.git_changes.nodes_removed, (se) => (s(), o("div", {
                      key: w(se),
                      class: "change-item"
                    }, [
                      e("span", _a, a(w(se)), 1),
                      k(se) ? (s(), o("span", $a, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (x = t.status.git_changes) != null && x.workflow_changes ? (s(), o("div", Ca, [
                  b[20] || (b[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", xa, [
                    e("div", Sa, [
                      e("span", Ia, a(p.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (D = t.status.git_changes) != null && D.has_other_changes ? (s(), o("div", Ea, [...b[21] || (b[21] = [
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
              (A = t.status.comparison) != null && A.is_synced ? r("", !0) : (s(), o("div", Pa, [
                e("div", Ra, [
                  y(vt, { level: "4" }, {
                    default: l(() => [...b[22] || (b[22] = [
                      g("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[3] || (b[3] = (se) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                b[26] || (b[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (ee = (de = t.status.comparison) == null ? void 0 : de.missing_nodes) != null && ee.length ? (s(), o("div", Ma, [
                  y(Ge, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Ta, [
                    (s(!0), o(W, null, ae(t.status.comparison.missing_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Da, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (re = (Y = t.status.comparison) == null ? void 0 : Y.extra_nodes) != null && re.length ? (s(), o("div", La, [
                  y(Ge, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", za, [
                    (s(!0), o(W, null, ae(t.status.comparison.extra_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Ua, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (N = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && N.length ? (s(), o("div", Na, [
                  y(Ge, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", Oa, [
                    (s(!0), o(W, null, ae(t.status.comparison.version_mismatches.slice(0, 10), (se) => (s(), o("div", {
                      key: se.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      g(a(se.name) + ": ", 1),
                      e("span", Aa, a(se.actual), 1),
                      b[23] || (b[23] = g(" → ", -1)),
                      e("span", Ba, a(se.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Fa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((z = t.status.comparison) == null ? void 0 : z.packages_in_sync) === !1 ? (s(), o("div", Va, [
                  y(Ge, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Wa, [
                  y(te, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: b[4] || (b[4] = (se) => _.$emit("repair"))
                  }, {
                    default: l(() => [...b[24] || (b[24] = [
                      g(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  b[25] || (b[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ce = (E = t.status.comparison) == null ? void 0 : E.disabled_nodes) != null && ce.length ? (s(), o("div", Ga, [
                y(vt, { level: "4" }, {
                  default: l(() => [...b[27] || (b[27] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ja, [
                  b[28] || (b[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ha, [
                  (s(!0), o(W, null, ae(t.status.comparison.disabled_nodes.slice(0, 10), (se) => (s(), o("div", {
                    key: se,
                    class: "drift-list-item"
                  }, " • " + a(se), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ka, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", qa, [
                y(vt, { level: "4" }, {
                  default: l(() => [...b[29] || (b[29] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ya, [
                  b[30] || (b[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[31] || (b[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (s(), o("div", Ja, [...b[32] || (b[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", Xa, [
              y(te, {
                variant: "secondary",
                onClick: b[5] || (b[5] = (se) => _.$emit("close"))
              }, {
                default: l(() => [...b[33] || (b[33] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), Za = /* @__PURE__ */ le(Qa, [["__scopeId", "data-v-e2b37122"]]), el = { class: "health-section-header" }, tl = { class: "suggestions-content" }, sl = { class: "suggestions-text" }, ol = { style: { "margin-top": "var(--cg-space-3)" } }, nl = {
  key: 1,
  class: "no-issues-text"
}, al = /* @__PURE__ */ ne({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = h(!1), v = h(!1);
    function u() {
      f.value = !0;
    }
    function m() {
      f.value = !1, p("view-workflows");
    }
    function d() {
      f.value = !1, p("view-nodes");
    }
    const p = n, w = h(!1), k = h(!1);
    function _() {
      k.value = !0, p("repair-environment");
    }
    function b() {
      k.value = !1;
    }
    function T() {
      f.value = !1;
    }
    const R = O(() => {
      const X = i.status.workflows.analyzed || [], N = X.filter(
        (z) => z.unresolved_models_count > 0 || z.ambiguous_models_count > 0
      );
      return N.length === 0 && i.status.missing_models_count > 0 ? X.filter((z) => z.sync_state === "synced") : N;
    });
    function $() {
      const X = R.value;
      X.length !== 0 && (w.value = !0, p("repair-missing-models", X.map((N) => N.name)));
    }
    function C() {
      w.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: b, closeDetailModal: T });
    const B = O(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), S = O(() => i.status.has_changes), M = O(() => {
      const X = i.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), Q = O(() => i.status.has_changes || B.value), F = O(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), j = O(() => i.status.git_changes.has_other_changes), x = O(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter((N) => N.status === "broken")) || [];
    }), D = O(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), A = O(() => x.value.length > 0), de = O(() => A.value || D.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), ee = O(() => {
      const X = [];
      return i.status.workflows.new.length > 0 && X.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && X.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && X.push(`${i.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Y = O(() => {
      var z, E;
      const X = [], N = i.status.comparison;
      return (z = N.missing_nodes) != null && z.length && X.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (E = N.extra_nodes) != null && E.length && X.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), re = O(() => {
      var z, E;
      const X = [], N = i.status.comparison;
      return (z = N.extra_nodes) != null && z.length && (N.extra_nodes.slice(0, 3).forEach((ce) => {
        X.push(`Untracked: ${ce}`);
      }), N.extra_nodes.length > 3 && X.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (E = N.missing_nodes) != null && E.length && (N.missing_nodes.slice(0, 3).forEach((ce) => {
        X.push(`Missing: ${ce}`);
      }), N.missing_nodes.length > 3 && X.push(`...and ${N.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, N) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), I(ht, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              y(te, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (z) => X.$emit("start-setup"))
              }, {
                default: l(() => [...N[13] || (N[13] = [
                  g(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), I(ht, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              y(te, {
                variant: "primary",
                size: "sm",
                onClick: N[1] || (N[1] = (z) => X.$emit("view-environments"))
              }, {
                default: l(() => [...N[14] || (N[14] = [
                  g(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), I(ht, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              y(te, {
                variant: "primary",
                size: "sm",
                onClick: N[2] || (N[2] = (z) => X.$emit("create-environment"))
              }, {
                default: l(() => [...N[15] || (N[15] = [
                  g(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[4] || (N[4] = (z) => v.value = !0),
            onMouseleave: N[5] || (N[5] = (z) => v.value = !1)
          }, [
            e("div", el, [
              y(vt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...N[16] || (N[16] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              y(xo, { name: "fade" }, {
                default: l(() => [
                  v.value ? (s(), I(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: l(() => [...N[17] || (N[17] = [
                      g(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            y(on, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Vt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), I($t, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), I($t, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), I($t, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                y($t, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: B.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), I($t, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), I($t, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), I($t, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                j.value ? (s(), I($t, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                S.value && !M.value && !j.value ? (s(), I($t, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                S.value ? r("", !0) : (s(), I($t, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              Q.value ? {
                name: "footer",
                fn: l(() => [
                  N[19] || (N[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", tl, [
                    e("span", sl, a(ee.value), 1),
                    y(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (z) => X.$emit("commit-changes"))
                    }, {
                      default: l(() => [...N[18] || (N[18] = [
                        g(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), I(ht, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              y(te, {
                variant: "primary",
                size: "sm",
                onClick: N[6] || (N[6] = (z) => X.$emit("create-branch"))
              }, {
                default: l(() => [...N[20] || (N[20] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", ol, [
            y(vt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...N[21] || (N[21] = [
                g(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            de.value ? (s(), o(W, { key: 0 }, [
              x.value.length > 0 ? (s(), I(ht, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${x.value.length} workflow${x.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: x.value.map((z) => `${z.name} — ${z.issue_summary}`)
              }, {
                actions: l(() => [
                  y(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (z) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[22] || (N[22] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              D.value.length > 0 ? (s(), I(ht, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${D.value.length} workflow${D.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: D.value.map((z) => `${z.name} — ${z.models_needing_path_sync_count} model path${z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  y(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[8] || (N[8] = (z) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[23] || (N[23] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !A.value ? (s(), I(ht, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  y(te, {
                    variant: "primary",
                    size: "sm",
                    disabled: w.value,
                    onClick: $
                  }, {
                    default: l(() => [
                      g(a(w.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  y(te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[9] || (N[9] = (z) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[24] || (N[24] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), I(ht, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Y.value,
                items: re.value
              }, {
                actions: l(() => [
                  y(te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...N[25] || (N[25] = [
                      g(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  y(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[10] || (N[10] = (z) => X.$emit("view-nodes"))
                  }, {
                    default: l(() => [...N[26] || (N[26] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), I(ht, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  y(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[11] || (N[11] = (z) => X.$emit("view-nodes"))
                  }, {
                    default: l(() => [...N[27] || (N[27] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : Q.value ? (s(), o("span", nl, "No issues")) : (s(), I(kt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      y(Za, {
        show: f.value,
        status: t.status,
        "is-repairing": k.value,
        onClose: N[12] || (N[12] = (z) => f.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: d,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), ll = /* @__PURE__ */ le(al, [["__scopeId", "data-v-55fcd77f"]]), il = ["type", "value", "placeholder", "disabled"], rl = /* @__PURE__ */ ne({
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
    const i = t, f = n, v = h(null);
    function u(m) {
      const d = m.target.value;
      f("update:modelValue", d);
    }
    return je(() => {
      i.autoFocus && v.value && v.value.focus();
    }), c({
      focus: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.blur();
      }
    }), (m, d) => (s(), o("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: pe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = xt((p) => m.$emit("enter"), ["enter"])),
        d[1] || (d[1] = xt((p) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (p) => m.$emit("focus")),
      onBlur: d[3] || (d[3] = (p) => m.$emit("blur"))
    }, null, 42, il));
  }
}), ys = /* @__PURE__ */ le(rl, [["__scopeId", "data-v-0380d08f"]]), dl = { class: "branch-create-form" }, cl = { class: "form-actions" }, ul = /* @__PURE__ */ ne({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = h(""), f = O(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      f.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (m, d) => (s(), o("div", dl, [
      y(ys, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (p) => i.value = p),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", cl, [
        y(te, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: v
        }, {
          default: l(() => [...d[1] || (d[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        y(te, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: l(() => [...d[2] || (d[2] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ml = /* @__PURE__ */ le(ul, [["__scopeId", "data-v-7c500394"]]), vl = { class: "branch-list-item__indicator" }, fl = { class: "branch-list-item__name" }, pl = {
  key: 0,
  class: "branch-list-item__actions"
}, gl = {
  key: 0,
  class: "branch-list-item__current-label"
}, hl = /* @__PURE__ */ ne({
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
      class: pe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", vl, a(t.isCurrent ? "●" : "○"), 1),
      e("span", fl, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", pl, [
        Me(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", gl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), yl = /* @__PURE__ */ le(hl, [["__scopeId", "data-v-c6581a24"]]), wl = {
  key: 2,
  class: "branch-list"
}, kl = /* @__PURE__ */ ne({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = h(!1);
    function f(u) {
      n("create", u), v();
    }
    function v() {
      i.value = !1;
    }
    return (u, m) => (s(), I(nt, null, {
      header: l(() => [
        y(at, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? r("", !0) : (s(), I(te, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (d) => i.value = !0)
            }, {
              default: l(() => [...m[1] || (m[1] = [
                g(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), I(ml, {
          key: 0,
          onCreate: f,
          onCancel: v
        })) : r("", !0),
        t.branches.length === 0 ? (s(), I(kt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", wl, [
          (s(!0), o(W, null, ae(t.branches, (d) => (s(), I(yl, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: l(() => [
              d.is_current ? r("", !0) : (s(), I(te, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (p) => u.$emit("delete", d.name)
              }, {
                default: l(() => [...m[2] || (m[2] = [
                  g(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? r("", !0) : (s(), I(te, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (p) => u.$emit("switch", d.name)
              }, {
                default: l(() => [...m[3] || (m[3] = [
                  g(" Switch ", -1)
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
}), bl = /* @__PURE__ */ le(kl, [["__scopeId", "data-v-86784ddd"]]), _l = { class: "commit-list" }, $l = /* @__PURE__ */ ne({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", _l, [
      Me(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Cl = /* @__PURE__ */ le($l, [["__scopeId", "data-v-8c5ee761"]]), xl = { class: "commit-hash" }, Sl = /* @__PURE__ */ ne({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = O(() => c.hash.slice(0, c.length));
    return (i, f) => (s(), o("span", xl, a(n.value), 1));
  }
}), so = /* @__PURE__ */ le(Sl, [["__scopeId", "data-v-7c333cc6"]]), Il = { class: "commit-message" }, El = { class: "commit-date" }, Pl = /* @__PURE__ */ ne({
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
    function f() {
      n.clickable && i("click");
    }
    return (v, u) => (s(), o("div", {
      class: pe(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      y(so, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Il, a(t.message), 1),
      e("span", El, a(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Ve(() => {
        }, ["stop"]))
      }, [
        Me(v.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Rl = /* @__PURE__ */ le(Pl, [["__scopeId", "data-v-dd7c621b"]]), Ml = /* @__PURE__ */ ne({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), I(nt, null, {
      header: l(() => [
        y(at, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), I(kt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), I(Cl, { key: 1 }, {
          default: l(() => [
            (s(!0), o(W, null, ae(t.commits, (i) => (s(), I(Rl, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => c.$emit("select", i)
            }, {
              actions: l(() => [
                y(te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => c.$emit("checkout", i),
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
}), Tl = /* @__PURE__ */ le(Ml, [["__scopeId", "data-v-981c3c64"]]), $C = bs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const CC = [
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
], xC = {
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
}, Dl = [
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
], SC = [
  ...Dl,
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
function as() {
  return !1;
}
function Ye() {
  const t = h(!1), c = h(null);
  async function n(H, me) {
    var G;
    if (!((G = window.app) != null && G.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi(H, me);
    if (!Ce.ok) {
      const U = await Ce.json().catch(() => ({}));
      throw new Error(U.error || U.message || `Request failed: ${Ce.status}`);
    }
    return Ce.json();
  }
  async function i(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(H, me = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: me })
    });
  }
  async function v(H = 10, me = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${me}`);
  }
  async function u(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function m() {
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
  async function p(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H, force: !0 })
    });
  }
  async function w() {
    return n("/v2/comfygit/branches");
  }
  async function k(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function _(H, me = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: me })
    });
  }
  async function b(H, me = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: me })
    });
  }
  async function T(H, me = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: me })
    });
  }
  async function R(H, me = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: me })
    });
  }
  async function $() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const H = await i();
        return [{
          name: H.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + H.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: H.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: H.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function C(H, me) {
    const Ce = { target_env: H };
    return me && (Ce.workspace_path = me), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ce)
    });
  }
  async function B() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function S(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function M() {
    return n("/v2/workspace/environments/create_status");
  }
  async function Q(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function F(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function j(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const me = await i(H), Ce = [];
      return me.workflows.new.forEach((G) => {
        Ce.push({ name: G, status: "new", missing_nodes: 0, missing_models: 0, path: G });
      }), me.workflows.modified.forEach((G) => {
        Ce.push({ name: G, status: "modified", missing_nodes: 0, missing_models: 0, path: G });
      }), me.workflows.synced.forEach((G) => {
        Ce.push({ name: G, status: "synced", missing_nodes: 0, missing_models: 0, path: G });
      }), Ce;
    }
  }
  async function x(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function D(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function A(H, me, Ce) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: me, install_models: Ce })
    });
  }
  async function de(H, me, Ce) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: me, importance: Ce })
    });
  }
  async function ee() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Y() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function re(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function X(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function N(H, me) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: me })
    });
  }
  async function z(H, me) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: me })
    });
  }
  async function E(H) {
    return n(`/v2/workspace/models/${H}`, {
      method: "DELETE"
    });
  }
  async function ce(H) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function se() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ke() {
    return n("/v2/workspace/models/directory");
  }
  async function Se(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function Te(H) {
    try {
      const me = H ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(H)}` : "/v2/comfygit/config";
      return n(me);
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
  async function Ne(H, me) {
    const Ce = me ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(me)}` : "/v2/comfygit/config";
    return n(Ce, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ue(H, me) {
    try {
      const Ce = new URLSearchParams();
      return H && Ce.append("level", H), me && Ce.append("lines", me.toString()), n(`/v2/comfygit/debug/logs?${Ce}`);
    } catch {
      return [];
    }
  }
  async function he(H, me) {
    try {
      const Ce = new URLSearchParams();
      return H && Ce.append("level", H), me && Ce.append("lines", me.toString()), n(`/v2/workspace/debug/logs?${Ce}`);
    } catch {
      return [];
    }
  }
  async function Ie() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Z() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function ie(H) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function ge() {
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
  async function Oe(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function Xe(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function st(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function Ee(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Fe() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Qe(H, me) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: me })
    });
  }
  async function qe(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function it(H, me, Ce) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: me, push_url: Ce })
    });
  }
  async function _e(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function He(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function De(H = "skip", me = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: me
      })
    });
  }
  async function et(H, me) {
    const Ce = me ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(me)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n(Ce);
  }
  async function ze(H, me = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: me.modelStrategy || "skip",
        force: me.force || !1,
        resolutions: me.resolutions
      })
    });
  }
  async function fe(H, me) {
    const Ce = me ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(me)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n(Ce);
  }
  async function K(H, me = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: me.force || !1 })
    });
  }
  async function q(H, me) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: me })
    });
  }
  async function P(H) {
    const me = {
      success: 0,
      failed: []
    };
    for (const Ce of H)
      try {
        await D(Ce), me.success++;
      } catch (G) {
        me.failed.push({
          name: Ce,
          error: G instanceof Error ? G.message : "Unknown error"
        });
      }
    return me;
  }
  async function V(H) {
    var G;
    const me = new FormData();
    if (me.append("file", H), !((G = window.app) != null && G.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: me
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ce.ok) {
      const U = await Ce.json().catch(() => ({}));
      throw new Error(U.error || `Preview failed: ${Ce.status}`);
    }
    return Ce.json();
  }
  async function oe(H) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(H)}`
    );
  }
  async function be(H, me, Ce, G) {
    var Pe;
    const U = new FormData();
    if (U.append("file", H), U.append("name", me), U.append("model_strategy", Ce), U.append("torch_backend", G), !((Pe = window.app) != null && Pe.api))
      throw new Error("ComfyUI API not available");
    const ye = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: U
    });
    if (!ye.ok) {
      const Ae = await ye.json().catch(() => ({}));
      throw new Error(Ae.message || Ae.error || `Import failed: ${ye.status}`);
    }
    return ye.json();
  }
  async function We() {
    return n("/v2/workspace/import/status");
  }
  async function ft(H) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: H })
    });
  }
  async function tt(H, me, Ce, G) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: H,
        name: me,
        model_strategy: Ce,
        torch_backend: G
      })
    });
  }
  async function dt() {
    return n("/v2/setup/status");
  }
  async function ct(H) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Tt() {
    return n("/v2/setup/initialize_status");
  }
  async function Jt(H) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ut() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function Xt() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Ut(H, me) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: H, save_key: me })
    });
  }
  async function Qt() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Zt(H) {
    const me = H ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(H)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(me);
  }
  async function es(H) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Nt() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function Wt(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function pt(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/stop`, {
      method: "POST"
    });
  }
  async function ts(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/start`, {
      method: "POST"
    });
  }
  async function ss(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/status`);
  }
  async function os(H) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function Gt(H = !1) {
    return n(H ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function ns() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: f,
    getHistory: v,
    exportEnv: u,
    validateExport: m,
    validateDeploy: d,
    exportEnvWithForce: p,
    // Git Operations
    getBranches: w,
    getCommitDetail: k,
    checkout: _,
    createBranch: b,
    switchBranch: T,
    deleteBranch: R,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: C,
    getSwitchProgress: B,
    createEnvironment: S,
    getCreateProgress: M,
    getComfyUIReleases: Q,
    deleteEnvironment: F,
    // Workflow Management
    getWorkflows: j,
    getWorkflowDetails: x,
    resolveWorkflow: D,
    installWorkflowDeps: A,
    setModelImportance: de,
    // Model Management
    getEnvironmentModels: ee,
    getWorkspaceModels: Y,
    getModelDetails: re,
    openFileLocation: X,
    addModelSource: N,
    removeModelSource: z,
    deleteModel: E,
    downloadModel: ce,
    scanWorkspaceModels: se,
    getModelsDirectory: ke,
    setModelsDirectory: Se,
    // Settings
    getConfig: Te,
    updateConfig: Ne,
    // Debug/Logs
    getEnvironmentLogs: ue,
    getWorkspaceLogs: he,
    getEnvironmentLogPath: Ie,
    getWorkspaceLogPath: Z,
    openFile: ie,
    // Node Management
    getNodes: ge,
    trackNodeAsDev: Oe,
    installNode: Xe,
    updateNode: st,
    uninstallNode: Ee,
    // Git Remotes
    getRemotes: Fe,
    addRemote: Qe,
    removeRemote: qe,
    updateRemoteUrl: it,
    fetchRemote: _e,
    getRemoteSyncStatus: He,
    // Push/Pull
    getPullPreview: et,
    pullFromRemote: ze,
    getPushPreview: fe,
    pushToRemote: K,
    validateMerge: q,
    // Environment Sync
    syncEnvironmentManually: De,
    // Workflow Repair
    repairWorkflowModels: P,
    // Import Operations
    previewTarballImport: V,
    previewGitImport: ft,
    validateEnvironmentName: oe,
    executeImport: be,
    executeGitImport: tt,
    getImportProgress: We,
    // First-Time Setup
    getSetupStatus: dt,
    initializeWorkspace: ct,
    getInitializeProgress: Tt,
    validatePath: Jt,
    // Deploy Operations
    getDeploySummary: ut,
    getDataCenters: Xt,
    testRunPodConnection: Ut,
    getNetworkVolumes: Qt,
    getRunPodGpuTypes: Zt,
    deployToRunPod: es,
    getRunPodPods: Nt,
    terminateRunPodPod: Wt,
    stopRunPodPod: pt,
    startRunPodPod: ts,
    getDeploymentStatus: ss,
    exportDeployPackage: os,
    getStoredRunPodKey: Gt,
    clearRunPodKey: ns
  };
}
async function ls(t, c = {}, n = 5e3) {
  const i = new AbortController(), f = setTimeout(() => i.abort(), n);
  try {
    const v = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(f), v;
  } catch (v) {
    throw clearTimeout(f), v.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : v;
  }
}
function oo() {
  const t = h(null);
  async function c() {
    try {
      const u = await ls(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (u.ok)
        return (await u.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await ls(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Health check failed");
      return await u.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await ls(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Failed to get status");
      return await u.json();
    } catch {
      return null;
    }
  }
  async function f() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await ls(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await ls(
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
    restart: f,
    kill: v
  };
}
const Ll = { class: "base-modal-header" }, zl = {
  key: 0,
  class: "base-modal-title"
}, Ul = { class: "base-modal-body" }, Nl = {
  key: 0,
  class: "base-modal-loading"
}, Ol = {
  key: 1,
  class: "base-modal-error"
}, Al = {
  key: 0,
  class: "base-modal-footer"
}, Bl = /* @__PURE__ */ ne({
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
    function f() {
      n.closeOnOverlayClick && i("close");
    }
    function v(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return je(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), Ms(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (u, m) => (s(), I(Ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: pe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Ve(() => {
          }, ["stop"]))
        }, [
          e("div", Ll, [
            Me(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", zl, a(t.title), 1)) : r("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (d) => u.$emit("close"))
            }, [...m[2] || (m[2] = [
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
          e("div", Ul, [
            t.loading ? (s(), o("div", Nl, "Loading...")) : t.error ? (s(), o("div", Ol, a(t.error), 1)) : Me(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Al, [
            Me(u.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), lt = /* @__PURE__ */ le(Bl, [["__scopeId", "data-v-8dab1081"]]), Fl = ["type", "disabled"], Vl = {
  key: 0,
  class: "spinner"
}, Wl = /* @__PURE__ */ ne({
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
      class: pe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Vl)) : r("", !0),
      Me(c.$slots, "default", {}, void 0, !0)
    ], 10, Fl));
  }
}), we = /* @__PURE__ */ le(Wl, [["__scopeId", "data-v-f3452606"]]), Gl = {
  key: 0,
  class: "base-title-count"
}, jl = /* @__PURE__ */ ne({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), I(Rs(`h${t.level}`), {
      class: pe(["base-title", t.variant])
    }, {
      default: l(() => [
        Me(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Gl, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cs = /* @__PURE__ */ le(jl, [["__scopeId", "data-v-5a01561d"]]), Hl = ["value", "disabled"], Kl = {
  key: 0,
  value: "",
  disabled: ""
}, ql = ["value"], Yl = {
  key: 0,
  class: "base-select-error"
}, Jl = /* @__PURE__ */ ne({
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
    return (i, f) => (s(), o("div", {
      class: pe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: pe(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (v) => i.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", Kl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(W, null, ae(t.options, (v) => (s(), o("option", {
          key: c(v),
          value: c(v)
        }, a(n(v)), 9, ql))), 128))
      ], 42, Hl),
      t.error ? (s(), o("span", Yl, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), Xl = /* @__PURE__ */ le(Jl, [["__scopeId", "data-v-7436d745"]]), Ql = { class: "popover-header" }, Zl = { class: "popover-title" }, ei = { class: "popover-content" }, ti = {
  key: 0,
  class: "popover-actions"
}, si = /* @__PURE__ */ ne({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), I(Ze, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Pt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Ve(() => {
          }, ["stop"]))
        }, [
          e("div", Ql, [
            e("h4", Zl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", ei, [
            Me(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", ti, [
            Me(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), bt = /* @__PURE__ */ le(si, [["__scopeId", "data-v-42815ace"]]), oi = { class: "detail-section" }, ni = {
  key: 0,
  class: "empty-message"
}, ai = { class: "model-header" }, li = { class: "model-name" }, ii = { class: "model-details" }, ri = { class: "model-row" }, di = { class: "model-row" }, ci = { class: "label" }, ui = {
  key: 0,
  class: "model-row model-row-nodes"
}, mi = { class: "node-list" }, vi = ["onClick"], fi = {
  key: 1,
  class: "model-row"
}, pi = { class: "value" }, gi = {
  key: 2,
  class: "model-row"
}, hi = { class: "value error" }, yi = {
  key: 0,
  class: "model-actions"
}, wi = { class: "detail-section" }, ki = {
  key: 0,
  class: "empty-message"
}, bi = { class: "node-name" }, _i = {
  key: 0,
  class: "node-version"
}, $i = /* @__PURE__ */ ne({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: f, setModelImportance: v, openFileLocation: u } = Ye(), m = h(null), d = h(!1), p = h(null), w = h(!1), k = h({}), _ = h(!1), b = h(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function R(x) {
      switch (x) {
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
    function $(x) {
      switch (x) {
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
    function C(x) {
      if (!x.loaded_by || x.loaded_by.length === 0) return [];
      const D = x.hash || x.filename;
      return b.value.has(D) ? x.loaded_by : x.loaded_by.slice(0, 3);
    }
    function B(x) {
      return b.value.has(x);
    }
    function S(x) {
      b.value.has(x) ? b.value.delete(x) : b.value.add(x), b.value = new Set(b.value);
    }
    async function M() {
      d.value = !0, p.value = null;
      try {
        m.value = await f(n.workflowName);
      } catch (x) {
        p.value = x instanceof Error ? x.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function Q(x, D) {
      k.value[x] = D, w.value = !0;
    }
    async function F(x) {
      try {
        await u(x);
      } catch (D) {
        p.value = D instanceof Error ? D.message : "Failed to open file location";
      }
    }
    async function j() {
      if (!w.value) {
        i("close");
        return;
      }
      d.value = !0, p.value = null;
      try {
        for (const [x, D] of Object.entries(k.value))
          await v(n.workflowName, x, D);
        i("refresh"), i("close");
      } catch (x) {
        p.value = x instanceof Error ? x.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return je(M), (x, D) => (s(), o(W, null, [
      y(lt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: p.value || void 0,
        onClose: D[4] || (D[4] = (A) => i("close"))
      }, {
        body: l(() => [
          m.value ? (s(), o(W, { key: 0 }, [
            e("section", oi, [
              y(cs, { variant: "section" }, {
                default: l(() => [
                  g("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", ni, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ae(m.value.models, (A) => {
                var de;
                return s(), o("div", {
                  key: A.hash || A.filename,
                  class: "model-card"
                }, [
                  e("div", ai, [
                    D[6] || (D[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", li, a(A.filename), 1)
                  ]),
                  e("div", ii, [
                    e("div", ri, [
                      D[7] || (D[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: pe(["value", R(A.status)])
                      }, a($(A.status)), 3)
                    ]),
                    e("div", di, [
                      e("span", ci, [
                        D[8] || (D[8] = g(" Importance: ", -1)),
                        y(to, {
                          size: 14,
                          title: "About importance levels",
                          onClick: D[0] || (D[0] = (ee) => _.value = !0)
                        })
                      ]),
                      y(Xl, {
                        "model-value": k.value[A.filename] || A.importance,
                        options: T,
                        "onUpdate:modelValue": (ee) => Q(A.filename, ee)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    A.loaded_by && A.loaded_by.length > 0 ? (s(), o("div", ui, [
                      D[9] || (D[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", mi, [
                        (s(!0), o(W, null, ae(C(A), (ee, Y) => (s(), o("div", {
                          key: `${ee.node_id}-${Y}`,
                          class: "node-reference"
                        }, a(ee.node_type) + " (Node #" + a(ee.node_id) + ") ", 1))), 128)),
                        A.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ee) => S(A.hash || A.filename)
                        }, a(B(A.hash || A.filename) ? "▼ Show less" : `▶ View all (${A.loaded_by.length})`), 9, vi)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    A.size_mb ? (s(), o("div", fi, [
                      D[10] || (D[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", pi, a(A.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    A.has_category_mismatch ? (s(), o("div", gi, [
                      D[13] || (D[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", hi, [
                        D[11] || (D[11] = g(" In ", -1)),
                        e("code", null, a(A.actual_category) + "/", 1),
                        D[12] || (D[12] = g(" but loader needs ", -1)),
                        e("code", null, a((de = A.expected_categories) == null ? void 0 : de[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  A.status !== "available" ? (s(), o("div", yi, [
                    A.status === "downloadable" ? (s(), I(we, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: D[1] || (D[1] = (ee) => i("resolve"))
                    }, {
                      default: l(() => [...D[14] || (D[14] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    })) : A.status === "category_mismatch" && A.file_path ? (s(), I(we, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => F(A.file_path)
                    }, {
                      default: l(() => [...D[15] || (D[15] = [
                        g(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : A.status !== "path_mismatch" ? (s(), I(we, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: D[2] || (D[2] = (ee) => i("resolve"))
                    }, {
                      default: l(() => [...D[16] || (D[16] = [
                        g(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", wi, [
              y(cs, { variant: "section" }, {
                default: l(() => [
                  g("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", ki, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ae(m.value.nodes, (A) => (s(), o("div", {
                key: A.name,
                class: "node-item"
              }, [
                e("span", {
                  class: pe(["node-status", A.status === "installed" ? "installed" : "missing"])
                }, a(A.status === "installed" ? "✓" : "✕"), 3),
                e("span", bi, a(A.name), 1),
                A.version ? (s(), o("span", _i, "v" + a(A.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: l(() => [
          y(we, {
            variant: "secondary",
            onClick: D[3] || (D[3] = (A) => i("close"))
          }, {
            default: l(() => [...D[17] || (D[17] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (s(), I(we, {
            key: 0,
            variant: "primary",
            onClick: j
          }, {
            default: l(() => [...D[18] || (D[18] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      y(bt, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: D[5] || (D[5] = (A) => _.value = !1)
      }, {
        content: l(() => [...D[19] || (D[19] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              g(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              g(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              g(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ci = /* @__PURE__ */ le($i, [["__scopeId", "data-v-668728e6"]]), Le = bs({
  items: [],
  status: "idle"
});
let Ct = null;
function no() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _s(t) {
  return Le.items.find((c) => c.id === t);
}
async function Kt() {
  if (Le.status === "downloading") return;
  const t = Le.items.find((c) => c.status === "queued");
  if (!t) {
    Le.status = "idle";
    return;
  }
  Le.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await xi(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Le.status = "idle", Kt();
  }
}
async function xi(t) {
  return new Promise((c, n) => {
    Ct && (Ct.close(), Ct = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Ct = f;
    let v = Date.now(), u = 0, m = !1;
    f.onmessage = (d) => {
      try {
        const p = JSON.parse(d.data);
        switch (p.type) {
          case "progress":
            t.downloaded = p.downloaded || 0, t.size = p.total || t.size;
            const w = Date.now(), k = (w - v) / 1e3;
            if (k > 0.5) {
              const _ = t.downloaded - u;
              if (t.speed = _ / k, v = w, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const b = t.size - t.downloaded;
                t.eta = b / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, f.close(), Ct = null, c();
            break;
          case "error":
            m = !0, f.close(), Ct = null, n(new Error(p.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Ct = null, m || n(new Error("Connection lost"));
    };
  });
}
async function Si() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Le.items.some((f) => f.url === n.url && f.filename === n.filename))
        continue;
      const i = {
        id: no(),
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
      Le.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function vs() {
  function t($) {
    for (const C of $) {
      if (Le.items.some(
        (M) => M.url === C.url && M.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(M.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const S = {
        id: no(),
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
      Le.items.push(S);
    }
    Le.status === "idle" && Kt();
  }
  async function c($) {
    const C = _s($);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ct && (Ct.close(), Ct = null), C.status = "failed", C.error = "Cancelled by user", Le.status = "idle", Kt();
      } else if (C.status === "queued") {
        const B = Le.items.findIndex((S) => S.id === $);
        B >= 0 && Le.items.splice(B, 1);
      }
    }
  }
  function n($) {
    const C = _s($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Le.status === "idle" && Kt());
  }
  function i($) {
    const C = _s($);
    !C || C.status !== "paused" || (C.status = "queued", Le.status === "idle" && Kt());
  }
  function f() {
    const $ = Le.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    Le.status === "idle" && Kt();
  }
  function v($) {
    const C = Le.items.findIndex((B) => B.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(Le.items[C].status) && Le.items.splice(C, 1);
  }
  function u() {
    Le.items = Le.items.filter(($) => $.status !== "completed");
  }
  function m() {
    Le.items = Le.items.filter(($) => $.status !== "failed");
  }
  const d = O(
    () => Le.items.find(($) => $.status === "downloading")
  ), p = O(
    () => Le.items.filter(($) => $.status === "queued")
  ), w = O(
    () => Le.items.filter(($) => $.status === "completed")
  ), k = O(
    () => Le.items.filter(($) => $.status === "failed")
  ), _ = O(
    () => Le.items.filter(($) => $.status === "paused")
  ), b = O(() => Le.items.length > 0), T = O(
    () => Le.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), R = O(
    () => Le.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: So(Le),
    // Computed
    currentDownload: d,
    queuedItems: p,
    completedItems: w,
    failedItems: k,
    pausedItems: _,
    hasItems: b,
    activeCount: T,
    hasPaused: R,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: v,
    clearCompleted: u,
    clearFailed: m,
    loadPendingDownloads: Si
  };
}
function ao() {
  const t = h(null), c = h(null), n = h([]), i = h([]), f = h(!1), v = h(null);
  async function u(B, S) {
    var Q;
    if (!((Q = window.app) != null && Q.api))
      throw new Error("ComfyUI API not available");
    const M = await window.app.api.fetchApi(B, S);
    if (!M.ok) {
      const F = await M.json().catch(() => ({})), j = F.error || F.message || `Request failed: ${M.status}`;
      throw new Error(j);
    }
    return M.json();
  }
  async function m(B) {
    f.value = !0, v.value = null;
    try {
      let S;
      return as() || (S = await u(
        `/v2/comfygit/workflow/${B}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = S, S;
    } catch (S) {
      const M = S instanceof Error ? S.message : "Unknown error occurred";
      throw v.value = M, S;
    } finally {
      f.value = !1;
    }
  }
  async function d(B, S, M, Q) {
    f.value = !0, v.value = null;
    try {
      let F;
      if (!as()) {
        const j = Object.fromEntries(S), x = Object.fromEntries(M), D = Q ? Array.from(Q) : [];
        F = await u(
          `/v2/comfygit/workflow/${B}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: j,
              model_choices: x,
              skipped_packages: D
            })
          }
        );
      }
      return c.value = F, F;
    } catch (F) {
      const j = F instanceof Error ? F.message : "Unknown error occurred";
      throw v.value = j, F;
    } finally {
      f.value = !1;
    }
  }
  async function p(B, S = 10) {
    f.value = !0, v.value = null;
    try {
      let M;
      return as() || (M = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: S })
        }
      )), n.value = M.results, M.results;
    } catch (M) {
      const Q = M instanceof Error ? M.message : "Unknown error occurred";
      throw v.value = Q, M;
    } finally {
      f.value = !1;
    }
  }
  async function w(B, S = 10) {
    f.value = !0, v.value = null;
    try {
      let M;
      return as() || (M = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: S })
        }
      )), i.value = M.results, M.results;
    } catch (M) {
      const Q = M instanceof Error ? M.message : "Unknown error occurred";
      throw v.value = Q, M;
    } finally {
      f.value = !1;
    }
  }
  const k = bs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    k.phase = "idle", k.currentFile = void 0, k.currentFileIndex = void 0, k.totalFiles = void 0, k.bytesDownloaded = void 0, k.bytesTotal = void 0, k.completedFiles = [], k.nodesToInstall = [], k.nodesInstalled = [], k.installError = void 0, k.needsRestart = void 0, k.error = void 0, k.nodeInstallProgress = void 0;
  }
  async function b(B) {
    k.phase = "installing", k.nodesInstalled = [], k.installError = void 0, k.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return as(), await T(B);
    } catch (S) {
      const M = S instanceof Error ? S.message : "Failed to install nodes";
      throw k.installError = M, S;
    }
  }
  async function T(B) {
    var M;
    const S = await u(
      `/v2/comfygit/workflow/${B}/install`,
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
      const Q = new Map(((M = S.failed) == null ? void 0 : M.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < k.nodesToInstall.length; F++) {
        const j = k.nodesToInstall[F], x = Q.get(j);
        k.nodeInstallProgress.completedNodes.push({
          node_id: j,
          success: !x,
          error: x
        });
      }
    }
    return k.nodesInstalled = S.nodes_installed, k.needsRestart = S.nodes_installed.length > 0, S.failed && S.failed.length > 0 && (k.installError = `${S.failed.length} package(s) failed to install`), S;
  }
  async function R(B, S, M) {
    _(), k.phase = "resolving", v.value = null;
    const Q = Object.fromEntries(S), F = Object.fromEntries(M);
    try {
      const j = await fetch(`/v2/comfygit/workflow/${B}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: Q,
          model_choices: F
        })
      });
      if (!j.ok)
        throw new Error(`Request failed: ${j.status}`);
      if (!j.body)
        throw new Error("No response body");
      const x = j.body.getReader(), D = new TextDecoder();
      let A = "";
      for (; ; ) {
        const { done: de, value: ee } = await x.read();
        if (de) break;
        A += D.decode(ee, { stream: !0 });
        const Y = A.split(`

`);
        A = Y.pop() || "";
        for (const re of Y) {
          if (!re.trim()) continue;
          const X = re.split(`
`);
          let N = "", z = "";
          for (const E of X)
            E.startsWith("event: ") ? N = E.slice(7) : E.startsWith("data: ") && (z = E.slice(6));
          if (z)
            try {
              const E = JSON.parse(z);
              $(N, E);
            } catch (E) {
              console.warn("Failed to parse SSE event:", E);
            }
        }
      }
    } catch (j) {
      const x = j instanceof Error ? j.message : "Unknown error occurred";
      throw v.value = x, k.error = x, k.phase = "error", j;
    }
  }
  function $(B, S) {
    switch (B) {
      case "batch_start":
        k.phase = "downloading", k.totalFiles = S.total;
        break;
      case "file_start":
        k.currentFile = S.filename, k.currentFileIndex = S.index, k.bytesDownloaded = 0, k.bytesTotal = void 0;
        break;
      case "file_progress":
        k.bytesDownloaded = S.downloaded, k.bytesTotal = S.total;
        break;
      case "file_complete":
        k.completedFiles.push({
          filename: S.filename,
          success: S.success,
          error: S.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        k.nodesToInstall = S.nodes_to_install || [], S.download_results && (k.completedFiles = S.download_results), k.phase = "complete";
        break;
      case "error":
        k.error = S.message, k.phase = "error", v.value = S.message;
        break;
    }
  }
  function C(B, S) {
    const { addToQueue: M } = vs(), Q = S.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: B,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return Q.length > 0 && M(Q), Q.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: f,
    error: v,
    progress: k,
    // Methods
    analyzeWorkflow: m,
    applyResolution: d,
    applyResolutionWithProgress: R,
    installNodes: b,
    searchNodes: p,
    searchModels: w,
    resetProgress: _,
    queueModelDownloads: C
  };
}
const Ii = { class: "resolution-stepper" }, Ei = { class: "stepper-header" }, Pi = ["onClick"], Ri = {
  key: 0,
  class: "step-icon"
}, Mi = {
  key: 1,
  class: "step-number"
}, Ti = { class: "step-label" }, Di = {
  key: 0,
  class: "step-connector"
}, Li = { class: "stepper-content" }, zi = /* @__PURE__ */ ne({
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
    function f(p) {
      var w;
      if ((w = n.stepStats) != null && w[p]) {
        const k = n.stepStats[p];
        return k.total > 0 && k.resolved === k.total;
      }
      return n.completedSteps.includes(p);
    }
    function v(p) {
      var w;
      if ((w = n.stepStats) != null && w[p]) {
        const k = n.stepStats[p];
        return k.resolved > 0 && k.resolved < k.total;
      }
      return !1;
    }
    function u(p) {
      return f(p) ? "state-complete" : v(p) ? "state-partial" : "state-pending";
    }
    function m(p) {
      return !1;
    }
    function d(p) {
      i("step-change", p);
    }
    return (p, w) => (s(), o("div", Ii, [
      e("div", Ei, [
        (s(!0), o(W, null, ae(t.steps, (k, _) => (s(), o("div", {
          key: k.id,
          class: pe(["step", {
            active: t.currentStep === k.id,
            completed: f(k.id),
            "in-progress": v(k.id),
            disabled: m(k.id)
          }]),
          onClick: (b) => d(k.id)
        }, [
          e("div", {
            class: pe(["step-indicator", u(k.id)])
          }, [
            f(k.id) ? (s(), o("span", Ri, "✓")) : (s(), o("span", Mi, a(_ + 1), 1))
          ], 2),
          e("div", Ti, a(k.label), 1),
          _ < t.steps.length - 1 ? (s(), o("div", Di)) : r("", !0)
        ], 10, Pi))), 128))
      ]),
      e("div", Li, [
        Me(p.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ui = /* @__PURE__ */ le(zi, [["__scopeId", "data-v-2a7b3af8"]]), Ni = /* @__PURE__ */ ne({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = O(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = O(() => `confidence-${n.value}`), f = O(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (v, u) => (s(), o("span", {
      class: pe(["confidence-badge", i.value, t.size])
    }, a(f.value), 3));
  }
}), ws = /* @__PURE__ */ le(Ni, [["__scopeId", "data-v-17ec4b80"]]), Oi = { class: "node-info" }, Ai = { class: "node-info-text" }, Bi = { class: "item-body" }, Fi = {
  key: 0,
  class: "resolved-state"
}, Vi = {
  key: 1,
  class: "multiple-options"
}, Wi = { class: "options-list" }, Gi = ["onClick"], ji = ["name", "value", "checked", "onChange"], Hi = { class: "option-content" }, Ki = { class: "option-header" }, qi = { class: "option-package-id" }, Yi = {
  key: 0,
  class: "option-title"
}, Ji = { class: "option-meta" }, Xi = {
  key: 0,
  class: "installed-badge"
}, Qi = { class: "action-buttons" }, Zi = {
  key: 2,
  class: "unresolved"
}, er = {
  key: 0,
  class: "searching-state"
}, tr = { class: "options-list" }, sr = ["onClick"], or = ["name", "value"], nr = { class: "option-content" }, ar = { class: "option-header" }, lr = { class: "option-package-id" }, ir = {
  key: 0,
  class: "option-description"
}, rr = { class: "option-meta" }, dr = {
  key: 0,
  class: "installed-badge"
}, cr = {
  key: 2,
  class: "unresolved-message"
}, ur = { class: "action-buttons" }, mr = /* @__PURE__ */ ne({
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
    function f(d, p = 80) {
      return d.length <= p ? d : d.slice(0, p - 3) + "...";
    }
    const v = O(() => !!n.choice);
    O(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), O(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.package_id;
    });
    const u = O(() => {
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
    function m(d) {
      i("option-selected", d);
    }
    return (d, p) => (s(), o("div", {
      class: pe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", Oi, [
        e("span", Ai, [
          p[7] || (p[7] = g("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: pe(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", Bi, [
        v.value ? (s(), o("div", Fi, [
          y(we, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => i("clear-choice"))
          }, {
            default: l(() => [...p[8] || (p[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Vi, [
          p[12] || (p[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Wi, [
            (s(!0), o(W, null, ae(t.options, (w, k) => (s(), o("label", {
              key: w.package_id,
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => m(k)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => m(k)
              }, null, 40, ji),
              e("div", Hi, [
                e("div", Ki, [
                  e("span", qi, a(w.package_id), 1),
                  y(ws, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (s(), o("div", Yi, a(w.title), 1)) : r("", !0),
                e("div", Ji, [
                  w.is_installed ? (s(), o("span", Xi, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, Gi))), 128))
          ]),
          e("div", Qi, [
            y(we, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => i("search"))
            }, {
              default: l(() => [...p[9] || (p[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            y(we, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => i("manual-entry"))
            }, {
              default: l(() => [...p[10] || (p[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            y(we, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...p[11] || (p[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Zi, [
          t.isSearching ? (s(), o("div", er, [...p[13] || (p[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            p[14] || (p[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", tr, [
              (s(!0), o(W, null, ae(t.searchResults.slice(0, 5), (w, k) => (s(), o("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", w)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: k
                }, null, 8, or),
                e("div", nr, [
                  e("div", ar, [
                    e("span", lr, a(w.package_id), 1),
                    y(ws, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (s(), o("div", ir, a(f(w.description)), 1)) : r("", !0),
                  e("div", rr, [
                    w.is_installed ? (s(), o("span", dr, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, sr))), 128))
            ])
          ], 64)) : (s(), o("div", cr, [...p[15] || (p[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", ur, [
            y(we, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => i("search"))
            }, {
              default: l(() => {
                var w;
                return [
                  g(a((w = t.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            y(we, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => i("manual-entry"))
            }, {
              default: l(() => [...p[16] || (p[16] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            y(we, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...p[17] || (p[17] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), vr = /* @__PURE__ */ le(mr, [["__scopeId", "data-v-c2997d1d"]]), fr = { class: "item-navigator" }, pr = { class: "nav-item-info" }, gr = ["title"], hr = { class: "nav-controls" }, yr = { class: "nav-arrows" }, wr = ["disabled"], kr = ["disabled"], br = { class: "nav-position" }, _r = /* @__PURE__ */ ne({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, f) => (s(), o("div", fr, [
      e("div", pr, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, gr)
      ]),
      e("div", hr, [
        e("div", yr, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (v) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, wr),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (v) => n("next")),
            title: "Next item"
          }, " → ", 8, kr)
        ]),
        e("span", br, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), lo = /* @__PURE__ */ le(_r, [["__scopeId", "data-v-74af7920"]]), $r = ["type", "value", "placeholder", "disabled"], Cr = {
  key: 0,
  class: "base-input-error"
}, xr = /* @__PURE__ */ ne({
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
      class: pe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: pe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = xt((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = xt((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, $r),
      t.error ? (s(), o("span", Cr, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ le(xr, [["__scopeId", "data-v-9ba02cdc"]]), Sr = { class: "node-resolution-step" }, Ir = {
  key: 0,
  class: "auto-resolved-section"
}, Er = { class: "section-header" }, Pr = { class: "stat-badge" }, Rr = { class: "resolved-packages-list" }, Mr = { class: "package-info" }, Tr = { class: "package-id" }, Dr = { class: "node-count" }, Lr = { class: "package-actions" }, zr = {
  key: 0,
  class: "status-badge install"
}, Ur = {
  key: 1,
  class: "status-badge skip"
}, Nr = ["onClick"], Or = {
  key: 1,
  class: "section-divider"
}, Ar = { class: "step-header" }, Br = { class: "stat-badge" }, Fr = {
  key: 1,
  class: "step-body"
}, Vr = {
  key: 3,
  class: "empty-state"
}, Wr = { class: "node-modal-body" }, Gr = { class: "node-search-results-container" }, jr = {
  key: 0,
  class: "node-search-results"
}, Hr = ["onClick"], Kr = { class: "node-result-header" }, qr = { class: "node-result-package-id" }, Yr = {
  key: 0,
  class: "node-result-description"
}, Jr = {
  key: 1,
  class: "node-empty-state"
}, Xr = {
  key: 2,
  class: "node-empty-state"
}, Qr = {
  key: 3,
  class: "node-empty-state"
}, Zr = { class: "node-manual-entry-modal" }, ed = { class: "node-modal-body" }, td = { class: "node-modal-actions" }, sd = /* @__PURE__ */ ne({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: f } = ao(), v = h(0), u = h(!1), m = h(!1), d = h(""), p = h(""), w = h([]), k = h(!1), _ = h(/* @__PURE__ */ new Map()), b = h(/* @__PURE__ */ new Set()), T = h(!1);
    function R() {
      T.value && z(), T.value = !1;
    }
    const $ = O(() => n.nodes[v.value]), C = O(() => n.nodes.filter((ue) => n.nodeChoices.has(ue.node_type)).length), B = O(() => $.value ? _.value.get($.value.node_type) || [] : []), S = O(() => $.value ? b.value.has($.value.node_type) : !1);
    St($, async (ue) => {
      var he;
      ue && ((he = ue.options) != null && he.length || _.value.has(ue.node_type) || b.value.has(ue.node_type) || n.nodeChoices.has(ue.node_type) || await M(ue.node_type));
    }, { immediate: !0 });
    async function M(ue) {
      b.value.add(ue);
      try {
        const he = await f(ue, 5);
        _.value.set(ue, he);
      } catch {
        _.value.set(ue, []);
      } finally {
        b.value.delete(ue);
      }
    }
    const Q = O(() => n.autoResolvedPackages.filter((ue) => !n.skippedPackages.has(ue.package_id)).length);
    function F(ue) {
      return n.skippedPackages.has(ue);
    }
    function j(ue) {
      i("package-skip", ue);
    }
    const x = O(() => {
      var he;
      if (!$.value) return "not-found";
      const ue = n.nodeChoices.get($.value.node_type);
      if (ue)
        switch (ue.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (he = $.value.options) != null && he.length ? "ambiguous" : "not-found";
    }), D = O(() => {
      var he;
      if (!$.value) return;
      const ue = n.nodeChoices.get($.value.node_type);
      if (ue)
        switch (ue.action) {
          case "install":
            return ue.package_id ? `→ ${ue.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (he = $.value.options) != null && he.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function A(ue) {
      ue >= 0 && ue < n.nodes.length && (v.value = ue);
    }
    function de() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function ee() {
      $.value && i("skip", $.value.node_type);
    }
    function Y(ue) {
      $.value && i("option-selected", $.value.node_type, ue);
    }
    function re() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function X() {
      $.value && (d.value = $.value.node_type, w.value = B.value, u.value = !0, ke(d.value));
    }
    function N() {
      p.value = "", m.value = !0;
    }
    function z() {
      u.value = !1, d.value = "", w.value = [];
    }
    function E() {
      m.value = !1, p.value = "";
    }
    let ce = null;
    function se() {
      ce && clearTimeout(ce), ce = setTimeout(() => {
        ke(d.value);
      }, 300);
    }
    async function ke(ue) {
      if (!ue.trim()) {
        w.value = [];
        return;
      }
      k.value = !0;
      try {
        w.value = await f(ue, 10);
      } catch {
        w.value = [];
      } finally {
        k.value = !1;
      }
    }
    function Se(ue) {
      $.value && (i("manual-entry", $.value.node_type, ue.package_id), z());
    }
    function Te(ue) {
      $.value && i("manual-entry", $.value.node_type, ue.package_id);
    }
    function Ne() {
      !$.value || !p.value.trim() || (i("manual-entry", $.value.node_type, p.value.trim()), E());
    }
    return (ue, he) => {
      var Ie, Z;
      return s(), o("div", Sr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Ir, [
          e("div", Er, [
            he[6] || (he[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Pr, a(Q.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Rr, [
            (s(!0), o(W, null, ae(t.autoResolvedPackages, (ie) => (s(), o("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Mr, [
                e("code", Tr, a(ie.package_id), 1),
                e("span", Dr, a(ie.node_types_count) + " node type" + a(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Lr, [
                F(ie.package_id) ? (s(), o("span", Ur, " SKIPPED ")) : (s(), o("span", zr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ge) => j(ie.package_id)
                }, a(F(ie.package_id) ? "Include" : "Skip"), 9, Nr)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Or)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", Ar, [
            he[7] || (he[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Br, a(C.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), I(lo, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: he[0] || (he[0] = (ie) => A(v.value - 1)),
            onNext: he[1] || (he[1] = (ie) => A(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Fr, [
            y(vr, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Ie = $.value.options) != null && Ie.length),
              options: $.value.options,
              choice: (Z = t.nodeChoices) == null ? void 0 : Z.get($.value.node_type),
              status: x.value,
              "status-label": D.value,
              "search-results": B.value,
              "is-searching": S.value,
              onMarkOptional: de,
              onSkip: ee,
              onManualEntry: N,
              onSearch: X,
              onOptionSelected: Y,
              onClearChoice: re,
              onSearchResultSelected: Te
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Vr, [...he[8] || (he[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), I(Ze, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: he[4] || (he[4] = Ve((ie) => T.value = !0, ["self"])),
            onMouseup: Ve(R, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: he[3] || (he[3] = (ie) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                he[9] || (he[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              e("div", Wr, [
                y(wt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": he[2] || (he[2] = (ie) => d.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                e("div", Gr, [
                  w.value.length > 0 ? (s(), o("div", jr, [
                    (s(!0), o(W, null, ae(w.value, (ie) => (s(), o("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (ge) => Se(ie)
                    }, [
                      e("div", Kr, [
                        e("code", qr, a(ie.package_id), 1),
                        ie.match_confidence ? (s(), I(ws, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      ie.description ? (s(), o("div", Yr, a(ie.description), 1)) : r("", !0)
                    ], 8, Hr))), 128))
                  ])) : k.value ? (s(), o("div", Jr, "Searching...")) : d.value ? (s(), o("div", Xr, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", Qr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), I(Ze, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Ve(E, ["self"])
          }, [
            e("div", Zr, [
              e("div", { class: "node-modal-header" }, [
                he[10] || (he[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", ed, [
                y(wt, {
                  modelValue: p.value,
                  "onUpdate:modelValue": he[5] || (he[5] = (ie) => p.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", td, [
                  y(we, {
                    variant: "secondary",
                    onClick: E
                  }, {
                    default: l(() => [...he[11] || (he[11] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  y(we, {
                    variant: "primary",
                    disabled: !p.value.trim(),
                    onClick: Ne
                  }, {
                    default: l(() => [...he[12] || (he[12] = [
                      g(" Add Package ", -1)
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
}), od = /* @__PURE__ */ le(sd, [["__scopeId", "data-v-281581bc"]]), nd = { class: "node-info" }, ad = { class: "node-info-text" }, ld = { class: "item-body" }, id = {
  key: 0,
  class: "resolved-state"
}, rd = {
  key: 1,
  class: "multiple-options"
}, dd = { class: "options-list" }, cd = ["onClick"], ud = ["name", "value", "checked", "onChange"], md = { class: "option-content" }, vd = { class: "option-header" }, fd = { class: "option-filename" }, pd = { class: "option-meta" }, gd = { class: "option-size" }, hd = { class: "option-category" }, yd = { class: "option-path" }, wd = { class: "action-buttons" }, kd = {
  key: 2,
  class: "unresolved"
}, bd = { class: "action-buttons" }, _d = /* @__PURE__ */ ne({
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
    const n = t, i = c, f = O(() => !!n.choice);
    O(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), O(() => {
      var d, p;
      return ((p = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : p.filename) || "selected";
    });
    const v = O(() => {
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
    function u(d) {
      i("option-selected", d);
    }
    function m(d) {
      if (!d) return "Unknown";
      const p = d / (1024 * 1024 * 1024);
      return p >= 1 ? `${p.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, p) => (s(), o("div", {
      class: pe(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", nd, [
        e("span", ad, [
          p[7] || (p[7] = g("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: pe(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", ld, [
        f.value ? (s(), o("div", id, [
          y(we, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => i("clear-choice"))
          }, {
            default: l(() => [...p[8] || (p[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", rd, [
          p[12] || (p[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", dd, [
            (s(!0), o(W, null, ae(t.options, (w, k) => (s(), o("label", {
              key: w.model.hash,
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => u(k)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => u(k)
              }, null, 40, ud),
              e("div", md, [
                e("div", vd, [
                  e("span", fd, a(w.model.filename), 1),
                  y(ws, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", pd, [
                  e("span", gd, a(m(w.model.size)), 1),
                  e("span", hd, a(w.model.category), 1)
                ]),
                e("div", yd, a(w.model.relative_path), 1)
              ])
            ], 10, cd))), 128))
          ]),
          e("div", wd, [
            y(we, {
              variant: "ghost",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => i("search"))
            }, {
              default: l(() => [...p[9] || (p[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            y(we, {
              variant: "ghost",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => i("download-url"))
            }, {
              default: l(() => [...p[10] || (p[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            y(we, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...p[11] || (p[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", kd, [
          p[16] || (p[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", bd, [
            y(we, {
              variant: "primary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => i("search"))
            }, {
              default: l(() => [...p[13] || (p[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            y(we, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => i("download-url"))
            }, {
              default: l(() => [...p[14] || (p[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            y(we, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...p[15] || (p[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), $d = /* @__PURE__ */ le(_d, [["__scopeId", "data-v-8a82fefa"]]), Cd = { class: "model-resolution-step" }, xd = { class: "step-header" }, Sd = { class: "step-info" }, Id = { class: "step-title" }, Ed = { class: "step-description" }, Pd = { class: "stat-badge" }, Rd = {
  key: 1,
  class: "step-body"
}, Md = {
  key: 2,
  class: "empty-state"
}, Td = { class: "model-search-modal" }, Dd = { class: "model-modal-body" }, Ld = {
  key: 0,
  class: "model-search-results"
}, zd = ["onClick"], Ud = { class: "model-result-header" }, Nd = { class: "model-result-filename" }, Od = { class: "model-result-meta" }, Ad = { class: "model-result-category" }, Bd = { class: "model-result-size" }, Fd = {
  key: 0,
  class: "model-result-path"
}, Vd = {
  key: 1,
  class: "model-no-results"
}, Wd = {
  key: 2,
  class: "model-searching"
}, Gd = { class: "model-download-url-modal" }, jd = { class: "model-modal-body" }, Hd = { class: "model-input-group" }, Kd = { class: "model-input-group" }, qd = { class: "model-modal-actions" }, Yd = /* @__PURE__ */ ne({
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
    function i(z) {
      var E;
      return z && ((E = n[z]) == null ? void 0 : E[0]) || null;
    }
    const f = t, v = c, u = h(0), m = h(!1), d = h(!1), p = h(""), w = h(""), k = h(""), _ = h([]), b = h(!1), T = O(() => f.models[u.value]), R = O(() => f.models.some((z) => z.is_download_intent)), $ = O(() => f.models.filter(
      (z) => f.modelChoices.has(z.filename) || z.is_download_intent
    ).length), C = O(() => {
      var E;
      if (!T.value) return "";
      const z = i((E = T.value.reference) == null ? void 0 : E.node_type);
      return z ? `${z}/${T.value.filename}` : "";
    }), B = O(() => {
      var E;
      if (!T.value) return "not-found";
      const z = f.modelChoices.get(T.value.filename);
      if (z)
        switch (z.action) {
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
      return T.value.is_download_intent ? "download" : (E = T.value.options) != null && E.length ? "ambiguous" : "not-found";
    }), S = O(() => {
      var E, ce;
      if (!T.value) return;
      const z = f.modelChoices.get(T.value.filename);
      if (z)
        switch (z.action) {
          case "select":
            return (E = z.selected_model) != null && E.filename ? `→ ${z.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return T.value.is_download_intent ? "Pending Download" : (ce = T.value.options) != null && ce.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function M(z) {
      z >= 0 && z < f.models.length && (u.value = z);
    }
    function Q() {
      T.value && v("mark-optional", T.value.filename);
    }
    function F() {
      T.value && v("skip", T.value.filename);
    }
    function j(z) {
      T.value && v("option-selected", T.value.filename, z);
    }
    function x() {
      T.value && v("clear-choice", T.value.filename);
    }
    function D() {
      T.value && (p.value = T.value.filename, m.value = !0);
    }
    function A() {
      T.value && (w.value = T.value.download_source || "", k.value = T.value.target_path || C.value, d.value = !0);
    }
    function de() {
      m.value = !1, p.value = "", _.value = [];
    }
    function ee() {
      d.value = !1, w.value = "", k.value = "";
    }
    function Y() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function re(z) {
      T.value && de();
    }
    function X() {
      !T.value || !w.value.trim() || (v("download-url", T.value.filename, w.value.trim(), k.value.trim() || void 0), ee());
    }
    function N(z) {
      if (!z) return "Unknown";
      const E = z / (1024 * 1024 * 1024);
      return E >= 1 ? `${E.toFixed(2)} GB` : `${(z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (z, E) => {
      var ce, se, ke;
      return s(), o("div", Cd, [
        e("div", xd, [
          e("div", Sd, [
            e("h3", Id, a(R.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Ed, a(R.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Pd, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), I(lo, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: E[0] || (E[0] = (Se) => M(u.value - 1)),
          onNext: E[1] || (E[1] = (Se) => M(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        T.value ? (s(), o("div", Rd, [
          y($d, {
            filename: T.value.filename,
            "node-type": ((ce = T.value.reference) == null ? void 0 : ce.node_type) || "Unknown",
            "has-multiple-options": !!((se = T.value.options) != null && se.length),
            options: T.value.options,
            choice: (ke = t.modelChoices) == null ? void 0 : ke.get(T.value.filename),
            status: B.value,
            "status-label": S.value,
            onMarkOptional: Q,
            onSkip: F,
            onDownloadUrl: A,
            onSearch: D,
            onOptionSelected: j,
            onClearChoice: x
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Md, [...E[5] || (E[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), I(Ze, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ve(de, ["self"])
          }, [
            e("div", Td, [
              e("div", { class: "model-modal-header" }, [
                E[6] || (E[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: de
                }, "✕")
              ]),
              e("div", Dd, [
                y(wt, {
                  modelValue: p.value,
                  "onUpdate:modelValue": E[2] || (E[2] = (Se) => p.value = Se),
                  placeholder: "Search by filename, category...",
                  onInput: Y
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", Ld, [
                  (s(!0), o(W, null, ae(_.value, (Se) => (s(), o("div", {
                    key: Se.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => re()
                  }, [
                    e("div", Ud, [
                      e("code", Nd, a(Se.filename), 1)
                    ]),
                    e("div", Od, [
                      e("span", Ad, a(Se.category), 1),
                      e("span", Bd, a(N(Se.size)), 1)
                    ]),
                    Se.relative_path ? (s(), o("div", Fd, a(Se.relative_path), 1)) : r("", !0)
                  ], 8, zd))), 128))
                ])) : p.value && !b.value ? (s(), o("div", Vd, ' No models found matching "' + a(p.value) + '" ', 1)) : r("", !0),
                b.value ? (s(), o("div", Wd, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), I(Ze, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ve(ee, ["self"])
          }, [
            e("div", Gd, [
              e("div", { class: "model-modal-header" }, [
                E[7] || (E[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              e("div", jd, [
                e("div", Hd, [
                  E[8] || (E[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  y(wt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": E[3] || (E[3] = (Se) => w.value = Se),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Kd, [
                  E[9] || (E[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  y(wt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": E[4] || (E[4] = (Se) => k.value = Se),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", qd, [
                  y(we, {
                    variant: "secondary",
                    onClick: ee
                  }, {
                    default: l(() => [...E[10] || (E[10] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  y(we, {
                    variant: "primary",
                    disabled: !w.value.trim() || !k.value.trim(),
                    onClick: X
                  }, {
                    default: l(() => [...E[11] || (E[11] = [
                      g(" Queue Download ", -1)
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
}), Jd = /* @__PURE__ */ le(Yd, [["__scopeId", "data-v-c6acbada"]]), Xd = { class: "applying-step" }, Qd = {
  key: 0,
  class: "phase-content"
}, Zd = {
  key: 1,
  class: "phase-content"
}, ec = { class: "phase-description" }, tc = { class: "overall-progress" }, sc = { class: "progress-bar" }, oc = { class: "progress-label" }, nc = { class: "install-list" }, ac = { class: "install-icon" }, lc = { key: 0 }, ic = {
  key: 1,
  class: "spinner"
}, rc = { key: 2 }, dc = { key: 3 }, cc = {
  key: 0,
  class: "install-error"
}, uc = {
  key: 2,
  class: "phase-content"
}, mc = { class: "phase-header" }, vc = { class: "phase-title" }, fc = { class: "completion-summary" }, pc = {
  key: 0,
  class: "summary-item success"
}, gc = { class: "summary-text" }, hc = {
  key: 1,
  class: "summary-item error"
}, yc = { class: "summary-text" }, wc = {
  key: 2,
  class: "failed-list"
}, kc = { class: "failed-node-id" }, bc = { class: "failed-error" }, _c = {
  key: 4,
  class: "summary-item success"
}, $c = {
  key: 5,
  class: "restart-prompt"
}, Cc = {
  key: 3,
  class: "phase-content error"
}, xc = { class: "error-message" }, Sc = /* @__PURE__ */ ne({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = O(() => {
      var p, w;
      const m = ((p = c.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const d = ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0;
      return Math.round(d / m * 100);
    }), i = O(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((d) => !d.success)) || [];
    }), f = O(() => i.value.length > 0);
    function v(m, d) {
      var w, k;
      const p = (w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.find((_) => _.node_id === m);
      return p ? p.success ? "complete" : "failed" : ((k = c.progress.nodeInstallProgress) == null ? void 0 : k.currentIndex) === d ? "installing" : "pending";
    }
    function u(m) {
      var d, p;
      return (p = (d = c.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((w) => w.node_id === m)) == null ? void 0 : p.error;
    }
    return (m, d) => {
      var p, w, k, _;
      return s(), o("div", Xd, [
        t.progress.phase === "resolving" ? (s(), o("div", Qd, [...d[2] || (d[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Zd, [
          d[3] || (d[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", ec, " Installing " + a((((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) ?? 0) + 1) + " of " + a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", tc, [
            e("div", sc, [
              e("div", {
                class: "progress-fill",
                style: Pt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", oc, a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", nc, [
            (s(!0), o(W, null, ae(t.progress.nodesToInstall, (b, T) => (s(), o("div", {
              key: b,
              class: pe(["install-item", v(b, T)])
            }, [
              e("span", ac, [
                v(b, T) === "pending" ? (s(), o("span", lc, "○")) : v(b, T) === "installing" ? (s(), o("span", ic, "◌")) : v(b, T) === "complete" ? (s(), o("span", rc, "✓")) : v(b, T) === "failed" ? (s(), o("span", dc, "✗")) : r("", !0)
              ]),
              e("code", null, a(b), 1),
              u(b) ? (s(), o("span", cc, a(u(b)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", uc, [
          e("div", mc, [
            e("span", {
              class: pe(["phase-icon", f.value ? "warning" : "success"])
            }, a(f.value ? "⚠" : "✓"), 3),
            e("h3", vc, a(f.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", fc, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", pc, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", gc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", hc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", yc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", wc, [
              (s(!0), o(W, null, ae(i.value, (b) => (s(), o("div", {
                key: b.node_id,
                class: "failed-item"
              }, [
                e("code", kc, a(b.node_id), 1),
                e("span", bc, a(b.error), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (b) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : r("", !0),
            f.value ? r("", !0) : (s(), o("div", _c, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", $c, [
              d[7] || (d[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (b) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : r("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Cc, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", xc, a(t.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), Ic = /* @__PURE__ */ le(Sc, [["__scopeId", "data-v-5efaae58"]]), Ec = {
  key: 0,
  class: "loading-state"
}, Pc = {
  key: 1,
  class: "wizard-content"
}, Rc = {
  key: 0,
  class: "step-content"
}, Mc = { class: "analysis-summary" }, Tc = { class: "analysis-header" }, Dc = { class: "summary-description" }, Lc = { class: "stats-grid" }, zc = { class: "stat-card" }, Uc = { class: "stat-items" }, Nc = {
  key: 0,
  class: "stat-item success"
}, Oc = { class: "stat-count" }, Ac = {
  key: 1,
  class: "stat-item info"
}, Bc = { class: "stat-count" }, Fc = {
  key: 2,
  class: "stat-item warning"
}, Vc = { class: "stat-count" }, Wc = {
  key: 3,
  class: "stat-item error"
}, Gc = { class: "stat-count" }, jc = { class: "stat-card" }, Hc = { class: "stat-items" }, Kc = { class: "stat-item success" }, qc = { class: "stat-count" }, Yc = {
  key: 0,
  class: "stat-item info"
}, Jc = { class: "stat-count" }, Xc = {
  key: 1,
  class: "stat-item warning"
}, Qc = { class: "stat-count" }, Zc = {
  key: 2,
  class: "stat-item warning"
}, eu = { class: "stat-count" }, tu = {
  key: 3,
  class: "stat-item error"
}, su = { class: "stat-count" }, ou = {
  key: 0,
  class: "status-message warning"
}, nu = { class: "status-text" }, au = {
  key: 1,
  class: "status-message info"
}, lu = { class: "status-text" }, iu = {
  key: 2,
  class: "status-message info"
}, ru = { class: "status-text" }, du = {
  key: 3,
  class: "status-message warning"
}, cu = { class: "status-text" }, uu = {
  key: 4,
  class: "status-message success"
}, mu = {
  key: 5,
  class: "category-mismatch-section"
}, vu = { class: "mismatch-list" }, fu = { class: "mismatch-path" }, pu = { class: "mismatch-target" }, gu = {
  key: 3,
  class: "step-content"
}, hu = { class: "review-summary" }, yu = { class: "review-stats" }, wu = { class: "review-stat" }, ku = { class: "stat-value" }, bu = { class: "review-stat" }, _u = { class: "stat-value" }, $u = { class: "review-stat" }, Cu = { class: "stat-value" }, xu = { class: "review-stat" }, Su = { class: "stat-value" }, Iu = {
  key: 0,
  class: "review-section"
}, Eu = { class: "section-title" }, Pu = { class: "review-items" }, Ru = { class: "item-name" }, Mu = { class: "item-choice" }, Tu = {
  key: 0,
  class: "choice-badge install"
}, Du = {
  key: 1,
  class: "choice-badge skip"
}, Lu = {
  key: 1,
  class: "review-section"
}, zu = { class: "section-title" }, Uu = { class: "review-items" }, Nu = { class: "item-name" }, Ou = { class: "item-choice" }, Au = {
  key: 0,
  class: "choice-badge install"
}, Bu = {
  key: 1,
  class: "choice-badge optional"
}, Fu = {
  key: 2,
  class: "choice-badge skip"
}, Vu = {
  key: 1,
  class: "choice-badge pending"
}, Wu = {
  key: 2,
  class: "review-section"
}, Gu = { class: "section-title" }, ju = { class: "review-items" }, Hu = { class: "item-name" }, Ku = { class: "item-choice" }, qu = {
  key: 0,
  class: "choice-badge install"
}, Yu = {
  key: 1,
  class: "choice-badge download"
}, Ju = {
  key: 2,
  class: "choice-badge optional"
}, Xu = {
  key: 3,
  class: "choice-badge skip"
}, Qu = {
  key: 4,
  class: "choice-badge skip"
}, Zu = {
  key: 1,
  class: "choice-badge download"
}, em = {
  key: 2,
  class: "choice-badge pending"
}, tm = {
  key: 3,
  class: "no-choices"
}, sm = /* @__PURE__ */ ne({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: f, applyResolution: v, installNodes: u, queueModelDownloads: m, progress: d, resetProgress: p } = ao(), { loadPendingDownloads: w } = vs(), { openFileLocation: k } = Ye(), _ = h(null), b = h(!1), T = h(!1), R = h(null), $ = h("analysis"), C = h([]), B = h(/* @__PURE__ */ new Map()), S = h(/* @__PURE__ */ new Map()), M = h(/* @__PURE__ */ new Set()), Q = O(() => {
      const q = [
        { id: "analysis", label: "Analysis" }
      ];
      return (j.value || A.value) && q.push({ id: "nodes", label: "Nodes" }), (x.value || D.value) && q.push({ id: "models", label: "Models" }), q.push({ id: "review", label: "Review" }), $.value === "applying" && q.push({ id: "applying", label: "Applying" }), q;
    }), F = O(() => _.value ? _.value.stats.needs_user_input : !1), j = O(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), x = O(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), D = O(() => _.value ? _.value.stats.download_intents > 0 : !1), A = O(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), de = O(() => _.value ? _.value.nodes.resolved.length : 0), ee = O(() => _.value ? _.value.models.resolved.filter((q) => q.has_category_mismatch) : []), Y = O(() => ee.value.length > 0), re = O(() => {
      if (!_.value) return [];
      const q = _.value.nodes.resolved.filter((V) => !V.is_installed), P = /* @__PURE__ */ new Set();
      return q.filter((V) => P.has(V.package.package_id) ? !1 : (P.add(V.package.package_id), !0));
    }), X = O(() => {
      if (!_.value) return [];
      const q = _.value.nodes.resolved.filter((V) => !V.is_installed), P = /* @__PURE__ */ new Map();
      for (const V of q) {
        const oe = P.get(V.package.package_id);
        oe ? oe.node_types_count++ : P.set(V.package.package_id, {
          package_id: V.package.package_id,
          title: V.package.title,
          node_types_count: 1
        });
      }
      return Array.from(P.values());
    }), N = O(() => re.value.filter((q) => !M.value.has(q.package.package_id))), z = O(() => _.value ? _.value.models.resolved.filter((q) => q.match_type === "download_intent").map((q) => ({
      filename: q.reference.widget_value,
      reference: q.reference,
      is_download_intent: !0,
      resolved_model: q.model,
      download_source: q.download_source,
      target_path: q.target_path
    })) : []), E = O(() => {
      if (!_.value) return [];
      const q = _.value.nodes.unresolved.map((V) => ({
        node_type: V.reference.node_type,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), P = _.value.nodes.ambiguous.map((V) => ({
        node_type: V.reference.node_type,
        has_multiple_options: !0,
        options: V.options.map((oe) => ({
          package_id: oe.package.package_id,
          title: oe.package.title,
          match_confidence: oe.match_confidence,
          match_type: oe.match_type,
          is_installed: oe.is_installed
        }))
      }));
      return [...q, ...P];
    }), ce = O(() => {
      if (!_.value) return [];
      const q = _.value.models.unresolved.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), P = _.value.models.ambiguous.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        has_multiple_options: !0,
        options: V.options.map((oe) => ({
          model: oe.model,
          match_confidence: oe.match_confidence,
          match_type: oe.match_type,
          has_download_source: oe.has_download_source
        }))
      }));
      return [...q, ...P];
    }), se = O(() => {
      const q = ce.value, P = z.value.map((V) => ({
        filename: V.filename,
        reference: V.reference,
        is_download_intent: !0,
        resolved_model: V.resolved_model,
        download_source: V.download_source,
        target_path: V.target_path,
        options: void 0
      }));
      return [...q, ...P];
    }), ke = O(() => {
      let q = N.value.length;
      for (const P of B.value.values())
        P.action === "install" && q++;
      for (const P of S.value.values())
        P.action === "select" && q++;
      return q;
    }), Se = O(() => {
      let q = 0;
      for (const P of S.value.values())
        P.action === "download" && q++;
      return q;
    }), Te = O(() => {
      let q = 0;
      for (const P of B.value.values())
        P.action === "optional" && q++;
      for (const P of S.value.values())
        P.action === "optional" && q++;
      return q;
    }), Ne = O(() => {
      let q = M.value.size;
      for (const P of B.value.values())
        P.action === "skip" && q++;
      for (const P of S.value.values())
        P.action === "skip" && q++;
      for (const P of E.value)
        B.value.has(P.node_type) || q++;
      for (const P of ce.value)
        S.value.has(P.filename) || q++;
      return q;
    }), ue = O(() => {
      const q = {};
      if (q.analysis = { resolved: 1, total: 1 }, j.value) {
        const P = E.value.length, V = E.value.filter(
          (oe) => B.value.has(oe.node_type)
        ).length;
        q.nodes = { resolved: V, total: P };
      }
      if (x.value || D.value) {
        const P = se.value.length, V = se.value.filter(
          (oe) => S.value.has(oe.filename) || oe.is_download_intent
        ).length;
        q.models = { resolved: V, total: P };
      }
      if (q.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const P = d.totalFiles || 1, V = d.completedFiles.length;
        q.applying = { resolved: V, total: P };
      }
      return q;
    });
    function he(q) {
      $.value = q;
    }
    function Ie() {
      const q = Q.value.findIndex((P) => P.id === $.value);
      q > 0 && ($.value = Q.value[q - 1].id);
    }
    function Z() {
      const q = Q.value.findIndex((P) => P.id === $.value);
      q < Q.value.length - 1 && ($.value = Q.value[q + 1].id);
    }
    async function ie() {
      b.value = !0, R.value = null;
      try {
        _.value = await f(n.workflowName);
      } catch (q) {
        R.value = q instanceof Error ? q.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function ge() {
      C.value.includes("analysis") || C.value.push("analysis"), j.value || A.value ? $.value = "nodes" : x.value || D.value ? $.value = "models" : $.value = "review";
    }
    function Oe(q) {
      B.value.set(q, { action: "optional" });
    }
    function Xe(q) {
      B.value.set(q, { action: "skip" });
    }
    function st(q, P) {
      var oe;
      const V = E.value.find((be) => be.node_type === q);
      (oe = V == null ? void 0 : V.options) != null && oe[P] && B.value.set(q, {
        action: "install",
        package_id: V.options[P].package_id
      });
    }
    function Ee(q, P) {
      B.value.set(q, {
        action: "install",
        package_id: P
      });
    }
    function Fe(q) {
      B.value.delete(q);
    }
    function Qe(q) {
      M.value.has(q) ? M.value.delete(q) : M.value.add(q);
    }
    function qe(q) {
      S.value.set(q, { action: "optional" });
    }
    function it(q) {
      S.value.set(q, { action: "skip" });
    }
    function _e(q, P) {
      var oe;
      const V = ce.value.find((be) => be.filename === q);
      (oe = V == null ? void 0 : V.options) != null && oe[P] && S.value.set(q, {
        action: "select",
        selected_model: V.options[P].model
      });
    }
    function He(q, P, V) {
      S.value.set(q, {
        action: "download",
        url: P,
        target_path: V
      });
    }
    function De(q) {
      S.value.delete(q);
    }
    async function et(q) {
      try {
        await k(q);
      } catch (P) {
        R.value = P instanceof Error ? P.message : "Failed to open file location";
      }
    }
    async function ze() {
      var q;
      T.value = !0, R.value = null, p(), d.phase = "resolving", $.value = "applying";
      try {
        const P = await v(n.workflowName, B.value, S.value, M.value);
        P.models_to_download && P.models_to_download.length > 0 && m(n.workflowName, P.models_to_download);
        const V = [
          ...P.nodes_to_install || [],
          ...N.value.map((be) => be.package.package_id)
        ];
        d.nodesToInstall = [...new Set(V)], d.nodesToInstall.length > 0 && await u(n.workflowName), d.phase = "complete", await w();
        const oe = d.installError || ((q = d.nodeInstallProgress) == null ? void 0 : q.completedNodes.some((be) => !be.success));
        !d.needsRestart && !oe && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (P) {
        R.value = P instanceof Error ? P.message : "Failed to apply resolution", d.error = R.value, d.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function fe() {
      i("refresh"), i("restart"), i("close");
    }
    async function K() {
      var P;
      const q = ((P = d.nodeInstallProgress) == null ? void 0 : P.completedNodes.filter((V) => !V.success).map((V) => V.node_id)) || [];
      if (q.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: q.length
        }, d.nodesToInstall = q, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(n.workflowName), d.phase = "complete";
        } catch (V) {
          d.error = V instanceof Error ? V.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return je(ie), (q, P) => (s(), I(lt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: b.value,
      error: R.value || void 0,
      "fixed-height": !0,
      onClose: P[1] || (P[1] = (V) => i("close"))
    }, {
      body: l(() => [
        b.value && !_.value ? (s(), o("div", Ec, [...P[2] || (P[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", Pc, [
          y(Ui, {
            steps: Q.value,
            "current-step": $.value,
            "completed-steps": C.value,
            "step-stats": ue.value,
            onStepChange: he
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", Rc, [
            e("div", Mc, [
              e("div", Tc, [
                P[3] || (P[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Dc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Lc, [
                e("div", zc, [
                  P[12] || (P[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Uc, [
                    de.value > 0 ? (s(), o("div", Nc, [
                      P[4] || (P[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Oc, a(de.value), 1),
                      P[5] || (P[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", Ac, [
                      P[6] || (P[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Bc, a(_.value.stats.packages_needing_installation), 1),
                      P[7] || (P[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", Fc, [
                      P[8] || (P[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Vc, a(_.value.nodes.ambiguous.length), 1),
                      P[9] || (P[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", Wc, [
                      P[10] || (P[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Gc, a(_.value.nodes.unresolved.length), 1),
                      P[11] || (P[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", jc, [
                  P[23] || (P[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Hc, [
                    e("div", Kc, [
                      P[13] || (P[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", qc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      P[14] || (P[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", Yc, [
                      P[15] || (P[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Jc, a(_.value.stats.download_intents), 1),
                      P[16] || (P[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    Y.value ? (s(), o("div", Xc, [
                      P[17] || (P[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Qc, a(ee.value.length), 1),
                      P[18] || (P[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", Zc, [
                      P[19] || (P[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", eu, a(_.value.models.ambiguous.length), 1),
                      P[20] || (P[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", tu, [
                      P[21] || (P[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", su, a(_.value.models.unresolved.length), 1),
                      P[22] || (P[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", ou, [
                P[24] || (P[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", nu, a(E.value.length + ce.value.length) + " items need your input", 1)
              ])) : A.value ? (s(), o("div", au, [
                P[25] || (P[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", lu, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(D.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : D.value ? (s(), o("div", iu, [
                P[26] || (P[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", ru, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : Y.value ? (s(), o("div", du, [
                P[27] || (P[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", cu, a(ee.value.length) + " model" + a(ee.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", uu, [...P[28] || (P[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Y.value ? (s(), o("div", mu, [
                P[31] || (P[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", vu, [
                  (s(!0), o(W, null, ae(ee.value, (V) => {
                    var oe, be;
                    return s(), o("div", {
                      key: V.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", fu, a(V.actual_category) + "/" + a((oe = V.model) == null ? void 0 : oe.filename), 1),
                      P[30] || (P[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", pu, a((be = V.expected_categories) == null ? void 0 : be[0]) + "/", 1),
                      V.file_path ? (s(), I(we, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (We) => et(V.file_path)
                      }, {
                        default: l(() => [...P[29] || (P[29] = [
                          g(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0)
                    ]);
                  }), 128))
                ])
              ])) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "nodes" ? (s(), I(od, {
            key: 1,
            nodes: E.value,
            "node-choices": B.value,
            "auto-resolved-packages": X.value,
            "skipped-packages": M.value,
            onMarkOptional: Oe,
            onSkip: Xe,
            onOptionSelected: st,
            onManualEntry: Ee,
            onClearChoice: Fe,
            onPackageSkip: Qe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), I(Jd, {
            key: 2,
            models: se.value,
            "model-choices": S.value,
            onMarkOptional: qe,
            onSkip: it,
            onOptionSelected: _e,
            onDownloadUrl: He,
            onClearChoice: De
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", gu, [
            e("div", hu, [
              P[36] || (P[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", yu, [
                e("div", wu, [
                  e("span", ku, a(ke.value), 1),
                  P[32] || (P[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", bu, [
                  e("span", _u, a(Se.value), 1),
                  P[33] || (P[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", $u, [
                  e("span", Cu, a(Te.value), 1),
                  P[34] || (P[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", xu, [
                  e("span", Su, a(Ne.value), 1),
                  P[35] || (P[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              X.value.length > 0 ? (s(), o("div", Iu, [
                e("h4", Eu, "Node Packages (" + a(X.value.length) + ")", 1),
                e("div", Pu, [
                  (s(!0), o(W, null, ae(X.value, (V) => (s(), o("div", {
                    key: V.package_id,
                    class: "review-item"
                  }, [
                    e("code", Ru, a(V.package_id), 1),
                    e("div", Mu, [
                      M.value.has(V.package_id) ? (s(), o("span", Du, "Skipped")) : (s(), o("span", Tu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              E.value.length > 0 ? (s(), o("div", Lu, [
                e("h4", zu, "Node Choices (" + a(E.value.length) + ")", 1),
                e("div", Uu, [
                  (s(!0), o(W, null, ae(E.value, (V) => {
                    var oe, be, We, ft;
                    return s(), o("div", {
                      key: V.node_type,
                      class: "review-item"
                    }, [
                      e("code", Nu, a(V.node_type), 1),
                      e("div", Ou, [
                        B.value.has(V.node_type) ? (s(), o(W, { key: 0 }, [
                          ((oe = B.value.get(V.node_type)) == null ? void 0 : oe.action) === "install" ? (s(), o("span", Au, a((be = B.value.get(V.node_type)) == null ? void 0 : be.package_id), 1)) : ((We = B.value.get(V.node_type)) == null ? void 0 : We.action) === "optional" ? (s(), o("span", Bu, " Optional ")) : ((ft = B.value.get(V.node_type)) == null ? void 0 : ft.action) === "skip" ? (s(), o("span", Fu, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", Vu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              se.value.length > 0 ? (s(), o("div", Wu, [
                e("h4", Gu, "Models (" + a(se.value.length) + ")", 1),
                e("div", ju, [
                  (s(!0), o(W, null, ae(se.value, (V) => {
                    var oe, be, We, ft, tt, dt, ct;
                    return s(), o("div", {
                      key: V.filename,
                      class: "review-item"
                    }, [
                      e("code", Hu, a(V.filename), 1),
                      e("div", Ku, [
                        S.value.has(V.filename) ? (s(), o(W, { key: 0 }, [
                          ((oe = S.value.get(V.filename)) == null ? void 0 : oe.action) === "select" ? (s(), o("span", qu, a((We = (be = S.value.get(V.filename)) == null ? void 0 : be.selected_model) == null ? void 0 : We.filename), 1)) : ((ft = S.value.get(V.filename)) == null ? void 0 : ft.action) === "download" ? (s(), o("span", Yu, " Download ")) : ((tt = S.value.get(V.filename)) == null ? void 0 : tt.action) === "optional" ? (s(), o("span", Ju, " Optional ")) : ((dt = S.value.get(V.filename)) == null ? void 0 : dt.action) === "skip" ? (s(), o("span", Xu, " Skip ")) : ((ct = S.value.get(V.filename)) == null ? void 0 : ct.action) === "cancel_download" ? (s(), o("span", Qu, " Cancel Download ")) : r("", !0)
                        ], 64)) : V.is_download_intent ? (s(), o("span", Zu, " Pending Download ")) : (s(), o("span", em, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              re.value.length === 0 && E.value.length === 0 && se.value.length === 0 ? (s(), o("div", tm, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), I(Ic, {
            key: 4,
            progress: Re(d),
            onRestart: fe,
            onRetryFailed: K
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), I(we, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: Ie
        }, {
          default: l(() => [...P[37] || (P[37] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        P[41] || (P[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Re(d).phase === "complete" || Re(d).phase === "error" ? (s(), I(we, {
          key: 1,
          variant: "secondary",
          onClick: P[0] || (P[0] = (V) => i("close"))
        }, {
          default: l(() => [
            g(a(Re(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), I(we, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: ge
        }, {
          default: l(() => [...P[38] || (P[38] = [
            g(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (s(), I(we, {
          key: 3,
          variant: "primary",
          onClick: Z
        }, {
          default: l(() => [
            g(a(x.value || D.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), I(we, {
          key: 4,
          variant: "primary",
          onClick: Z
        }, {
          default: l(() => [...P[39] || (P[39] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), I(we, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: ze
        }, {
          default: l(() => [...P[40] || (P[40] = [
            g(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), om = /* @__PURE__ */ le(sm, [["__scopeId", "data-v-6276cf1d"]]), nm = { class: "search-input-wrapper" }, am = ["value", "placeholder"], lm = /* @__PURE__ */ ne({
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
    const n = t, i = c, f = h(null);
    let v;
    function u(d) {
      const p = d.target.value;
      n.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        i("update:modelValue", p);
      }, n.debounce)) : i("update:modelValue", p);
    }
    function m() {
      var d;
      i("update:modelValue", ""), i("clear"), (d = f.value) == null || d.focus();
    }
    return je(() => {
      n.autoFocus && f.value && f.value.focus();
    }), (d, p) => (s(), o("div", nm, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: xt(m, ["escape"])
      }, null, 40, am),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), im = /* @__PURE__ */ le(lm, [["__scopeId", "data-v-266f857a"]]), rm = { class: "search-bar" }, dm = /* @__PURE__ */ ne({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", rm, [
      y(im, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Yt = /* @__PURE__ */ le(dm, [["__scopeId", "data-v-3d51bbfd"]]), cm = { class: "section-group" }, um = {
  key: 0,
  class: "section-content"
}, mm = /* @__PURE__ */ ne({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(n.initiallyExpanded);
    function v() {
      n.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (u, m) => (s(), o("section", cm, [
      y(vt, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: v
      }, {
        default: l(() => [
          g(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (s(), o("div", um, [
        Me(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ le(mm, [["__scopeId", "data-v-c48e33ed"]]), vm = { class: "item-header" }, fm = {
  key: 0,
  class: "item-icon"
}, pm = { class: "item-info" }, gm = {
  key: 0,
  class: "item-title"
}, hm = {
  key: 1,
  class: "item-subtitle"
}, ym = {
  key: 0,
  class: "item-details"
}, wm = {
  key: 1,
  class: "item-actions"
}, km = /* @__PURE__ */ ne({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = O(() => n.status ? `status-${n.status}` : "");
    return (f, v) => (s(), o("div", {
      class: pe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: v[0] || (v[0] = (u) => t.clickable && f.$emit("click"))
    }, [
      e("div", vm, [
        f.$slots.icon ? (s(), o("span", fm, [
          Me(f.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", pm, [
          f.$slots.title ? (s(), o("div", gm, [
            Me(f.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          f.$slots.subtitle ? (s(), o("div", hm, [
            Me(f.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      f.$slots.details ? (s(), o("div", ym, [
        Me(f.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      f.$slots.actions ? (s(), o("div", wm, [
        Me(f.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ le(km, [["__scopeId", "data-v-cc435e0e"]]), bm = { class: "loading-state" }, _m = { class: "loading-message" }, $m = /* @__PURE__ */ ne({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", bm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", _m, a(t.message), 1)
    ]));
  }
}), Rt = /* @__PURE__ */ le($m, [["__scopeId", "data-v-ad8436c9"]]), Cm = { class: "error-state" }, xm = { class: "error-message" }, Sm = /* @__PURE__ */ ne({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", Cm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", xm, a(t.message), 1),
      t.retry ? (s(), I(te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          g(" Retry ", -1)
        ])]),
        _: 1
      })) : r("", !0)
    ]));
  }
}), Mt = /* @__PURE__ */ le(Sm, [["__scopeId", "data-v-5397be48"]]), Im = /* @__PURE__ */ ne({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: f } = Ye();
    oo();
    const v = h([]), u = h(!1), m = h(null), d = h(""), p = h(!0), w = h(!1), k = h(!1), _ = h(!1), b = h(null), T = O(
      () => v.value.filter((N) => N.status === "broken")
    ), R = O(
      () => v.value.filter((N) => N.status === "new")
    ), $ = O(
      () => v.value.filter((N) => N.status === "modified")
    ), C = O(
      () => v.value.filter((N) => N.status === "synced")
    ), B = O(() => {
      if (!d.value.trim()) return v.value;
      const N = d.value.toLowerCase();
      return v.value.filter((z) => z.name.toLowerCase().includes(N));
    }), S = O(
      () => T.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), M = O(
      () => R.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), Q = O(
      () => $.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = O(
      () => C.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), j = O(
      () => w.value ? F.value : F.value.slice(0, 5)
    );
    async function x(N = !1) {
      u.value = !0, m.value = null;
      try {
        v.value = await f(N);
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: x });
    function D(N) {
      b.value = N, k.value = !0;
    }
    function A(N) {
      b.value = N, _.value = !0;
    }
    function de() {
      i("refresh");
    }
    async function ee() {
      _.value = !1, await x(!0);
    }
    async function Y() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(N) {
      const z = [];
      return N.missing_nodes > 0 && z.push(`${N.missing_nodes} missing node${N.missing_nodes > 1 ? "s" : ""}`), N.missing_models > 0 && z.push(`${N.missing_models} missing model${N.missing_models > 1 ? "s" : ""}`), N.models_with_category_mismatch && N.models_with_category_mismatch > 0 && z.push(`${N.models_with_category_mismatch} model${N.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), N.pending_downloads && N.pending_downloads > 0 && z.push(`${N.pending_downloads} pending download${N.pending_downloads > 1 ? "s" : ""}`), z.length > 0 ? z.join(", ") : "Has issues";
    }
    function X(N) {
      const z = N.sync_state === "new" ? "New" : N.sync_state === "modified" ? "Modified" : N.sync_state === "synced" ? "Synced" : N.sync_state;
      return N.has_path_sync_issues && N.models_needing_path_sync && N.models_needing_path_sync > 0 ? `${N.models_needing_path_sync} model path${N.models_needing_path_sync > 1 ? "s" : ""} need${N.models_needing_path_sync === 1 ? "s" : ""} sync` : z || "Unknown";
    }
    return je(x), (N, z) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          y(Yt, {
            modelValue: d.value,
            "onUpdate:modelValue": z[0] || (z[0] = (E) => d.value = E),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), I(Rt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), I(Mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            S.value.length ? (s(), I(Be, {
              key: 0,
              title: "BROKEN",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(S.value, (E) => (s(), I(ot, {
                  key: E.name,
                  status: "broken"
                }, {
                  icon: l(() => [...z[7] || (z[7] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(E.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(re(E)), 1)
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ce) => A(E.name)
                    }, {
                      default: l(() => [...z[8] || (z[8] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => D(E.name)
                    }, {
                      default: l(() => [...z[9] || (z[9] = [
                        g(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            M.value.length ? (s(), I(Be, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(M.value, (E) => (s(), I(ot, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    g(a(E.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    g(a(E.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(E)), 1)
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => D(E.name)
                    }, {
                      default: l(() => [...z[10] || (z[10] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            Q.value.length ? (s(), I(Be, {
              key: 2,
              title: "MODIFIED",
              count: Q.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(Q.value, (E) => (s(), I(ot, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...z[11] || (z[11] = [
                    g("⚡", -1)
                  ])]),
                  title: l(() => [
                    g(a(E.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(E)), 1)
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => D(E.name)
                    }, {
                      default: l(() => [...z[12] || (z[12] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            F.value.length ? (s(), I(Be, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": p.value,
              onToggle: z[2] || (z[2] = (E) => p.value = E)
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(j.value, (E) => (s(), I(ot, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    g(a(E.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    g(a(E.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(E)), 1)
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => D(E.name)
                    }, {
                      default: l(() => [...z[13] || (z[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && F.value.length > 5 ? (s(), I(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: z[1] || (z[1] = (E) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    g(" View all " + a(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            B.value.length ? r("", !0) : (s(), I(kt, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && b.value ? (s(), I(Ci, {
        key: 0,
        "workflow-name": b.value,
        onClose: z[3] || (z[3] = (E) => k.value = !1),
        onResolve: z[4] || (z[4] = (E) => A(b.value)),
        onRefresh: z[5] || (z[5] = (E) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      _.value && b.value ? (s(), I(om, {
        key: 1,
        "workflow-name": b.value,
        onClose: ee,
        onInstall: de,
        onRefresh: z[6] || (z[6] = (E) => i("refresh")),
        onRestart: Y
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Em = /* @__PURE__ */ le(Im, [["__scopeId", "data-v-fa3f076e"]]), Pm = /* @__PURE__ */ ne({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: pe(["summary-bar", t.variant])
    }, [
      Me(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), fs = /* @__PURE__ */ le(Pm, [["__scopeId", "data-v-ccb7816e"]]), Rm = {
  key: 0,
  class: "model-details"
}, Mm = { class: "detail-section" }, Tm = { class: "detail-row" }, Dm = { class: "detail-value mono" }, Lm = { class: "detail-row" }, zm = { class: "detail-value mono" }, Um = { class: "detail-row" }, Nm = { class: "detail-value mono" }, Om = { class: "detail-row" }, Am = { class: "detail-value" }, Bm = { class: "detail-row" }, Fm = { class: "detail-value" }, Vm = { class: "detail-row" }, Wm = { class: "detail-value" }, Gm = { class: "detail-section" }, jm = { class: "section-header" }, Hm = {
  key: 0,
  class: "locations-list"
}, Km = { class: "location-path mono" }, qm = {
  key: 0,
  class: "location-modified"
}, Ym = ["onClick"], Jm = {
  key: 1,
  class: "empty-state"
}, Xm = { class: "detail-section" }, Qm = { class: "section-header" }, Zm = {
  key: 0,
  class: "sources-list"
}, ev = { class: "source-type" }, tv = ["href"], sv = ["disabled", "onClick"], ov = {
  key: 1,
  class: "empty-state"
}, nv = { class: "add-source-form" }, av = ["disabled"], lv = {
  key: 2,
  class: "source-error"
}, iv = {
  key: 3,
  class: "source-success"
}, rv = /* @__PURE__ */ ne({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: f, removeModelSource: v, openFileLocation: u } = Ye(), m = h(null), d = h(!0), p = h(null), w = h(""), k = h(!1), _ = h(null), b = h(null), T = h(null), R = h(null);
    let $ = null;
    function C(x, D = "success", A = 2e3) {
      $ && clearTimeout($), R.value = { message: x, type: D }, $ = setTimeout(() => {
        R.value = null;
      }, A);
    }
    function B(x) {
      if (!x) return "Unknown";
      const D = 1024 * 1024 * 1024, A = 1024 * 1024;
      return x >= D ? `${(x / D).toFixed(1)} GB` : x >= A ? `${(x / A).toFixed(0)} MB` : `${(x / 1024).toFixed(0)} KB`;
    }
    function S(x) {
      navigator.clipboard.writeText(x), C("Copied to clipboard!");
    }
    async function M(x) {
      try {
        await u(x), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function Q() {
      if (!(!w.value.trim() || !m.value)) {
        k.value = !0, b.value = null, T.value = null;
        try {
          await f(m.value.hash, w.value.trim()), T.value = "Source added successfully!", w.value = "", await j();
        } catch (x) {
          b.value = x instanceof Error ? x.message : "Failed to add source";
        } finally {
          k.value = !1;
        }
      }
    }
    async function F(x) {
      if (m.value) {
        _.value = x, b.value = null, T.value = null;
        try {
          await v(m.value.hash, x), C("Source removed"), await j();
        } catch (D) {
          b.value = D instanceof Error ? D.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function j() {
      d.value = !0, p.value = null;
      try {
        m.value = await i(n.identifier);
      } catch (x) {
        p.value = x instanceof Error ? x.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return je(j), (x, D) => {
      var A;
      return s(), o(W, null, [
        y(lt, {
          title: `Model Details: ${((A = m.value) == null ? void 0 : A.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: p.value,
          onClose: D[5] || (D[5] = (de) => x.$emit("close"))
        }, {
          body: l(() => {
            var de, ee, Y, re;
            return [
              m.value ? (s(), o("div", Rm, [
                e("section", Mm, [
                  e("div", Tm, [
                    D[6] || (D[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Dm, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[0] || (D[0] = (X) => S(m.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Lm, [
                    D[7] || (D[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", zm, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[1] || (D[1] = (X) => S(m.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Um, [
                    D[8] || (D[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Nm, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[2] || (D[2] = (X) => S(m.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Om, [
                    D[9] || (D[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Am, a(B(m.value.size)), 1)
                  ]),
                  e("div", Bm, [
                    D[10] || (D[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Fm, a(m.value.category), 1)
                  ]),
                  e("div", Vm, [
                    D[11] || (D[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Wm, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Gm, [
                  e("h4", jm, "Locations (" + a(((de = m.value.locations) == null ? void 0 : de.length) || 0) + ")", 1),
                  (ee = m.value.locations) != null && ee.length ? (s(), o("div", Hm, [
                    (s(!0), o(W, null, ae(m.value.locations, (X, N) => (s(), o("div", {
                      key: N,
                      class: "location-item"
                    }, [
                      e("span", Km, a(X.path), 1),
                      X.modified ? (s(), o("span", qm, "Modified: " + a(X.modified), 1)) : r("", !0),
                      X.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (z) => M(X.path)
                      }, " Open File Location ", 8, Ym)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Jm, "No locations found"))
                ]),
                e("section", Xm, [
                  e("h4", Qm, "Download Sources (" + a(((Y = m.value.sources) == null ? void 0 : Y.length) || 0) + ")", 1),
                  (re = m.value.sources) != null && re.length ? (s(), o("div", Zm, [
                    (s(!0), o(W, null, ae(m.value.sources, (X, N) => (s(), o("div", {
                      key: N,
                      class: "source-item"
                    }, [
                      e("span", ev, a(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(X.url), 9, tv),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === X.url,
                        onClick: (z) => F(X.url)
                      }, a(_.value === X.url ? "..." : "×"), 9, sv)
                    ]))), 128))
                  ])) : (s(), o("div", ov, " No download sources configured ")),
                  e("div", nv, [
                    Ue(e("input", {
                      "onUpdate:modelValue": D[3] || (D[3] = (X) => w.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Ft, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || k.value,
                      onClick: Q
                    }, a(k.value ? "Adding..." : "Add Source"), 9, av)
                  ]),
                  b.value ? (s(), o("p", lv, a(b.value), 1)) : r("", !0),
                  T.value ? (s(), o("p", iv, a(T.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: D[4] || (D[4] = (de) => x.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), I(Ze, { to: "body" }, [
          R.value ? (s(), o("div", {
            key: 0,
            class: pe(["toast", R.value.type])
          }, a(R.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), Ls = /* @__PURE__ */ le(rv, [["__scopeId", "data-v-f15cbb56"]]), dv = /* @__PURE__ */ ne({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: f } = Ye(), v = h([]), u = h([]), m = h("production"), d = h(!1), p = h(null), w = h(""), k = h(!1), _ = h(null);
    function b() {
      k.value = !1, n("navigate", "model-index");
    }
    const T = O(
      () => v.value.reduce((j, x) => j + (x.size || 0), 0)
    ), R = O(() => {
      if (!w.value.trim()) return v.value;
      const j = w.value.toLowerCase();
      return v.value.filter((x) => x.filename.toLowerCase().includes(j));
    }), $ = O(() => {
      if (!w.value.trim()) return u.value;
      const j = w.value.toLowerCase();
      return u.value.filter((x) => x.filename.toLowerCase().includes(j));
    }), C = O(() => {
      const j = {};
      for (const D of R.value) {
        const A = D.type || "other";
        j[A] || (j[A] = []), j[A].push(D);
      }
      const x = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(j).sort(([D], [A]) => {
        const de = x.indexOf(D), ee = x.indexOf(A);
        return de >= 0 && ee >= 0 ? de - ee : de >= 0 ? -1 : ee >= 0 ? 1 : D.localeCompare(A);
      }).map(([D, A]) => ({ type: D, models: A }));
    });
    function B(j) {
      if (!j) return "Unknown";
      const x = j / (1024 * 1024);
      return x >= 1024 ? `${(x / 1024).toFixed(1)} GB` : `${x.toFixed(0)} MB`;
    }
    function S(j) {
      _.value = j.hash || j.filename;
    }
    function M(j) {
      n("navigate", "model-index");
    }
    function Q(j) {
      alert(`Download functionality not yet implemented for ${j}`);
    }
    async function F() {
      d.value = !0, p.value = null;
      try {
        const j = await i();
        v.value = j, u.value = [];
        const x = await f();
        m.value = x.environment || "production";
      } catch (j) {
        p.value = j instanceof Error ? j.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return je(F), (j, x) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (D) => k.value = !0)
          })
        ]),
        search: l(() => [
          y(Yt, {
            modelValue: w.value,
            "onUpdate:modelValue": x[1] || (x[1] = (D) => w.value = D),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), I(Rt, {
            key: 0,
            message: "Loading environment models..."
          })) : p.value ? (s(), I(Mt, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length ? (s(), I(fs, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(v.value.length) + " models • " + a(B(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ae(C.value, (D) => (s(), I(Be, {
              key: D.type,
              title: D.type.toUpperCase(),
              count: D.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(D.models, (A) => (s(), I(ot, {
                  key: A.hash || A.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...x[4] || (x[4] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(A.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(B(A.size)), 1)
                  ]),
                  details: l(() => [
                    y(Ge, {
                      label: "Used by:",
                      value: (A.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    y(Ge, {
                      label: "Path:",
                      value: A.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (de) => S(A)
                    }, {
                      default: l(() => [...x[5] || (x[5] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            $.value.length ? (s(), I(Be, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae($.value, (D) => (s(), I(ot, {
                  key: D.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...x[6] || (x[6] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(D.filename), 1)
                  ]),
                  subtitle: l(() => [...x[7] || (x[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var A;
                    return [
                      y(Ge, {
                        label: "Required by:",
                        value: ((A = D.workflow_names) == null ? void 0 : A.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    y(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Q(D.filename)
                    }, {
                      default: l(() => [...x[8] || (x[8] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => M(D.filename)
                    }, {
                      default: l(() => [...x[9] || (x[9] = [
                        g(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !R.value.length && !$.value.length ? (s(), I(kt, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      y(bt, {
        show: k.value,
        title: "About Environment Models",
        onClose: x[2] || (x[2] = (D) => k.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            x[10] || (x[10] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            x[11] || (x[11] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          y(te, {
            variant: "primary",
            onClick: b
          }, {
            default: l(() => [...x[12] || (x[12] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), I(Ls, {
        key: 0,
        identifier: _.value,
        onClose: x[3] || (x[3] = (D) => _.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), cv = /* @__PURE__ */ le(dv, [["__scopeId", "data-v-cb4f12b3"]]), uv = {
  key: 0,
  class: "indexing-progress"
}, mv = { class: "progress-info" }, vv = { class: "progress-label" }, fv = { class: "progress-count" }, pv = { class: "progress-bar" }, gv = { class: "modal-content" }, hv = { class: "modal-header" }, yv = { class: "modal-body" }, wv = { class: "input-group" }, kv = { class: "current-path" }, bv = { class: "input-group" }, _v = { class: "modal-footer" }, $v = { class: "modal-content" }, Cv = { class: "modal-header" }, xv = { class: "modal-body" }, Sv = { class: "input-group" }, Iv = { class: "input-group" }, Ev = { class: "modal-footer" }, Pv = /* @__PURE__ */ ne({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: f,
      setModelsDirectory: v
    } = Ye(), { addToQueue: u } = vs(), m = c, d = h([]), p = h(!1), w = h(!1), k = h(null), _ = h(""), b = h(!1), T = h(null), R = h(!1), $ = h(null), C = h(""), B = h(!1), S = h(!1), M = h(""), Q = h(""), F = h(null), j = O(
      () => d.value.reduce((z, E) => z + (E.size || 0), 0)
    ), x = O(() => {
      if (!_.value.trim()) return d.value;
      const z = _.value.toLowerCase();
      return d.value.filter((E) => {
        const ce = E, se = E.sha256 || ce.sha256_hash || "";
        return E.filename.toLowerCase().includes(z) || se.toLowerCase().includes(z);
      });
    }), D = O(() => {
      const z = {};
      for (const ce of x.value) {
        const se = ce.type || "other";
        z[se] || (z[se] = []), z[se].push(ce);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([ce], [se]) => {
        const ke = E.indexOf(ce), Se = E.indexOf(se);
        return ke >= 0 && Se >= 0 ? ke - Se : ke >= 0 ? -1 : Se >= 0 ? 1 : ce.localeCompare(se);
      }).map(([ce, se]) => ({ type: ce, models: se }));
    });
    function A(z) {
      if (!z) return "Unknown";
      const E = 1024 * 1024 * 1024, ce = 1024 * 1024;
      return z >= E ? `${(z / E).toFixed(1)} GB` : z >= ce ? `${(z / ce).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function de(z) {
      T.value = z.hash || z.filename;
    }
    async function ee() {
      w.value = !0, k.value = null;
      try {
        const z = await i();
        await X(), z.changes > 0 && console.log(`Scan complete: ${z.changes} changes detected`);
      } catch (z) {
        k.value = z instanceof Error ? z.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function Y() {
      if (C.value.trim()) {
        B.value = !0, k.value = null;
        try {
          const z = await v(C.value.trim());
          $.value = z.path, R.value = !1, C.value = "", await X(), console.log(`Directory changed: ${z.models_indexed} models indexed`), m("refresh");
        } catch (z) {
          k.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          B.value = !1;
        }
      }
    }
    function re() {
      if (!M.value.trim() || !Q.value.trim()) return;
      const z = Q.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: z,
        url: M.value.trim(),
        targetPath: Q.value.trim()
      }]), M.value = "", Q.value = "", S.value = !1;
    }
    async function X() {
      p.value = !0, k.value = null;
      try {
        d.value = await n();
      } catch (z) {
        k.value = z instanceof Error ? z.message : "Failed to load workspace models";
      } finally {
        p.value = !1;
      }
    }
    async function N() {
      try {
        const z = await f();
        $.value = z.path;
      } catch {
      }
    }
    return je(() => {
      X(), N();
    }), (z, E) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: E[2] || (E[2] = (ce) => b.value = !0)
          }, {
            actions: l(() => [
              y(te, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: ee
              }, {
                default: l(() => [
                  g(a(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              y(te, {
                variant: "primary",
                size: "sm",
                onClick: E[0] || (E[0] = (ce) => R.value = !0)
              }, {
                default: l(() => [...E[15] || (E[15] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              y(te, {
                variant: "primary",
                size: "sm",
                onClick: E[1] || (E[1] = (ce) => S.value = !0)
              }, {
                default: l(() => [...E[16] || (E[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  g(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          F.value ? (s(), o("div", uv, [
            e("div", mv, [
              e("span", vv, a(F.value.message), 1),
              e("span", fv, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", pv, [
              e("div", {
                class: "progress-fill",
                style: Pt({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          y(Yt, {
            modelValue: _.value,
            "onUpdate:modelValue": E[3] || (E[3] = (ce) => _.value = ce),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          p.value || F.value ? (s(), I(Rt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : k.value ? (s(), I(Mt, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.length ? (s(), I(fs, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(d.value.length) + " models • " + a(A(j.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ae(D.value, (ce) => (s(), I(Be, {
              key: ce.type,
              title: ce.type.toUpperCase(),
              count: ce.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(ce.models, (se) => (s(), I(ot, {
                  key: se.sha256 || se.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...E[17] || (E[17] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(se.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(A(se.size)), 1)
                  ]),
                  details: l(() => [
                    y(Ge, {
                      label: "Hash:",
                      value: se.hash ? se.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ke) => de(se)
                    }, {
                      default: l(() => [...E[18] || (E[18] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            x.value.length ? r("", !0) : (s(), I(kt, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y(bt, {
        show: b.value,
        title: "About Workspace Model Index",
        onClose: E[4] || (E[4] = (ce) => b.value = !1)
      }, {
        content: l(() => [...E[19] || (E[19] = [
          e("p", null, [
            g(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            g(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      T.value ? (s(), I(Ls, {
        key: 0,
        identifier: T.value,
        onClose: E[5] || (E[5] = (ce) => T.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), I(Ze, { to: "body" }, [
        R.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[9] || (E[9] = Ve((ce) => R.value = !1, ["self"]))
        }, [
          e("div", gv, [
            e("div", hv, [
              E[20] || (E[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[6] || (E[6] = (ce) => R.value = !1)
              }, "✕")
            ]),
            e("div", yv, [
              e("div", wv, [
                E[21] || (E[21] = e("label", null, "Current Directory", -1)),
                e("code", kv, a($.value || "Not set"), 1)
              ]),
              e("div", bv, [
                E[22] || (E[22] = e("label", null, "New Directory Path", -1)),
                y(wt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": E[7] || (E[7] = (ce) => C.value = ce),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              E[23] || (E[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", _v, [
              y(we, {
                variant: "secondary",
                onClick: E[8] || (E[8] = (ce) => R.value = !1)
              }, {
                default: l(() => [...E[24] || (E[24] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              y(we, {
                variant: "primary",
                disabled: !C.value.trim() || B.value,
                loading: B.value,
                onClick: Y
              }, {
                default: l(() => [
                  g(a(B.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), I(Ze, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[14] || (E[14] = Ve((ce) => S.value = !1, ["self"]))
        }, [
          e("div", $v, [
            e("div", Cv, [
              E[25] || (E[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[10] || (E[10] = (ce) => S.value = !1)
              }, "✕")
            ]),
            e("div", xv, [
              e("div", Sv, [
                E[26] || (E[26] = e("label", null, "Download URL", -1)),
                y(wt, {
                  modelValue: M.value,
                  "onUpdate:modelValue": E[11] || (E[11] = (ce) => M.value = ce),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Iv, [
                E[27] || (E[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                y(wt, {
                  modelValue: Q.value,
                  "onUpdate:modelValue": E[12] || (E[12] = (ce) => Q.value = ce),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              E[28] || (E[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Ev, [
              y(we, {
                variant: "secondary",
                onClick: E[13] || (E[13] = (ce) => S.value = !1)
              }, {
                default: l(() => [...E[29] || (E[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              y(we, {
                variant: "primary",
                disabled: !M.value.trim() || !Q.value.trim(),
                onClick: re
              }, {
                default: l(() => [...E[30] || (E[30] = [
                  g(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : r("", !0)
      ]))
    ], 64));
  }
}), Rv = /* @__PURE__ */ le(Pv, [["__scopeId", "data-v-73b78d84"]]), Mv = { class: "node-details" }, Tv = { class: "status-row" }, Dv = {
  key: 0,
  class: "detail-row"
}, Lv = { class: "value" }, zv = { class: "detail-row" }, Uv = { class: "value" }, Nv = {
  key: 1,
  class: "detail-row"
}, Ov = { class: "value mono" }, Av = {
  key: 2,
  class: "detail-row"
}, Bv = ["href"], Fv = {
  key: 3,
  class: "detail-row"
}, Vv = { class: "value mono small" }, Wv = { class: "detail-row" }, Gv = {
  key: 0,
  class: "value"
}, jv = {
  key: 1,
  class: "workflow-list"
}, Hv = /* @__PURE__ */ ne({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = O(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = O(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = O(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, d) => (s(), I(lt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (p) => i("close"))
    }, {
      body: l(() => [
        e("div", Mv, [
          e("div", Tv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: pe(["status-badge", f.value])
            }, a(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", Dv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Lv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : r("", !0),
          e("div", zv, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Uv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Nv, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Ov, a(t.node.registry_id), 1)
          ])) : r("", !0),
          t.node.repository ? (s(), o("div", Av, [
            d[7] || (d[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              g(a(t.node.repository) + " ", 1),
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
            ], 8, Bv)
          ])) : r("", !0),
          t.node.download_url ? (s(), o("div", Fv, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Vv, a(t.node.download_url), 1)
          ])) : r("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Wv, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Gv, " Not used in any workflows ")) : (s(), o("div", jv, [
              (s(!0), o(W, null, ae(t.node.used_in_workflows, (p) => (s(), o("span", {
                key: p,
                class: "workflow-tag"
              }, a(p), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        y(we, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (p) => i("close"))
        }, {
          default: l(() => [...d[11] || (d[11] = [
            g(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Kv = /* @__PURE__ */ le(Hv, [["__scopeId", "data-v-b342f626"]]), qv = { class: "dialog-message" }, Yv = {
  key: 0,
  class: "dialog-details"
}, Jv = {
  key: 1,
  class: "dialog-warning"
}, Xv = /* @__PURE__ */ ne({
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
    return (c, n) => (s(), I(lt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", qv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Yv, [
          (s(!0), o(W, null, ae(t.details, (i, f) => (s(), o("div", {
            key: f,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", Jv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        y(we, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            g(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), I(we, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            g(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        y(we, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
        }, {
          default: l(() => [
            g(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), io = /* @__PURE__ */ le(Xv, [["__scopeId", "data-v-3670b9f5"]]), Qv = { class: "mismatch-warning" }, Zv = { class: "version-mismatch" }, ef = { class: "version-actual" }, tf = { class: "version-expected" }, sf = { key: 0 }, of = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, nf = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, af = /* @__PURE__ */ ne({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: f, trackNodeAsDev: v, installNode: u, uninstallNode: m } = Ye(), d = h({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), p = h(!1), w = h(null), k = h(""), _ = h(!1), b = h(null), T = h(null), R = O(() => {
      if (!k.value.trim()) return d.value.nodes;
      const ee = k.value.toLowerCase();
      return d.value.nodes.filter(
        (Y) => {
          var re, X;
          return Y.name.toLowerCase().includes(ee) || ((re = Y.description) == null ? void 0 : re.toLowerCase().includes(ee)) || ((X = Y.repository) == null ? void 0 : X.toLowerCase().includes(ee));
        }
      );
    }), $ = O(
      () => R.value.filter((ee) => ee.installed && ee.tracked)
    ), C = O(
      () => R.value.filter((ee) => !ee.installed && ee.tracked)
    ), B = O(
      () => R.value.filter((ee) => ee.installed && !ee.tracked)
    );
    function S(ee) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ee] || ee;
    }
    const M = O(() => n.versionMismatches.length > 0);
    function Q(ee) {
      return !ee.used_in_workflows || ee.used_in_workflows.length === 0 ? "Not used in any workflows" : ee.used_in_workflows.length === 1 ? ee.used_in_workflows[0] : `${ee.used_in_workflows.length} workflows`;
    }
    function F(ee) {
      b.value = ee;
    }
    function j() {
      i("open-node-manager");
    }
    function x(ee) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${ee}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const Y = await v(ee);
            Y.status === "success" ? (i("toast", `✓ Node "${ee}" tracked as development`, "success"), await de()) : i("toast", `Failed to track node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error tracking node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function D(ee) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ee}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const Y = await m(ee);
            Y.status === "success" ? (i("toast", `✓ Node "${ee}" removed`, "success"), await de()) : i("toast", `Failed to remove node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error removing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function A(ee) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${ee}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const Y = await u(ee);
            Y.status === "success" ? (i("toast", `✓ Node "${ee}" installed`, "success"), await de()) : i("toast", `Failed to install node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error installing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function de() {
      p.value = !0, w.value = null;
      try {
        d.value = await f();
      } catch (ee) {
        w.value = ee instanceof Error ? ee.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return je(de), (ee, Y) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: Y[0] || (Y[0] = (re) => _.value = !0)
          }, {
            actions: l(() => [
              y(te, {
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: l(() => [...Y[7] || (Y[7] = [
                  g(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          y(Yt, {
            modelValue: k.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (re) => k.value = re),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          p.value ? (s(), I(Rt, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (s(), I(Mt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.total_count ? (s(), I(fs, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(a(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (s(), o(W, { key: 0 }, [
                  g(" • " + a(d.value.missing_count) + " missing", 1)
                ], 64)) : r("", !0),
                d.value.untracked_count ? (s(), o(W, { key: 1 }, [
                  g(" • " + a(d.value.untracked_count) + " untracked", 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            M.value ? (s(), I(Be, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Qv, [
                  Y[8] || (Y[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(W, null, ae(t.versionMismatches, (re) => (s(), I(ot, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: l(() => [...Y[9] || (Y[9] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(re.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Zv, [
                      e("span", ef, a(re.actual), 1),
                      Y[10] || (Y[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", tf, a(re.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "warning",
                      size: "sm",
                      onClick: Y[2] || (Y[2] = (X) => i("repair-environment"))
                    }, {
                      default: l(() => [...Y[11] || (Y[11] = [
                        g(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            B.value.length ? (s(), I(Be, {
              key: 2,
              title: "UNTRACKED",
              count: B.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(B.value, (re) => (s(), I(ot, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: l(() => [...Y[12] || (Y[12] = [
                    g("?", -1)
                  ])]),
                  title: l(() => [
                    g(a(re.name), 1)
                  ]),
                  subtitle: l(() => [...Y[13] || (Y[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    y(Ge, {
                      label: "Used by:",
                      value: Q(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(re)
                    }, {
                      default: l(() => [...Y[14] || (Y[14] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => x(re.name)
                    }, {
                      default: l(() => [...Y[15] || (Y[15] = [
                        g(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => D(re.name)
                    }, {
                      default: l(() => [...Y[16] || (Y[16] = [
                        g(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            $.value.length ? (s(), I(Be, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae($.value, (re) => (s(), I(ot, {
                  key: re.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    g(a(re.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    g(a(re.name), 1)
                  ]),
                  subtitle: l(() => [
                    re.version ? (s(), o("span", sf, a(re.source === "development" ? "" : "v") + a(re.version), 1)) : (s(), o("span", of, "version unknown")),
                    e("span", nf, " • " + a(S(re.source)), 1)
                  ]),
                  details: l(() => [
                    y(Ge, {
                      label: "Used by:",
                      value: Q(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(re)
                    }, {
                      default: l(() => [...Y[17] || (Y[17] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: j
                    }, {
                      default: l(() => [...Y[18] || (Y[18] = [
                        g(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            C.value.length ? (s(), I(Be, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(C.value, (re) => (s(), I(ot, {
                  key: re.name,
                  status: "missing"
                }, {
                  icon: l(() => [...Y[19] || (Y[19] = [
                    g("!", -1)
                  ])]),
                  title: l(() => [
                    g(a(re.name), 1)
                  ]),
                  subtitle: l(() => [...Y[20] || (Y[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    y(Ge, {
                      label: "Required by:",
                      value: Q(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(re)
                    }, {
                      default: l(() => [...Y[21] || (Y[21] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => A(re.name)
                    }, {
                      default: l(() => [...Y[22] || (Y[22] = [
                        g(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !$.value.length && !C.value.length && !B.value.length ? (s(), I(kt, {
              key: 5,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      y(bt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: Y[4] || (Y[4] = (re) => _.value = !1)
      }, {
        content: l(() => [...Y[23] || (Y[23] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            g(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            g(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            g(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: l(() => [
          y(te, {
            variant: "primary",
            onClick: Y[3] || (Y[3] = (re) => _.value = !1)
          }, {
            default: l(() => [...Y[24] || (Y[24] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), I(Kv, {
        key: 0,
        node: b.value,
        onClose: Y[5] || (Y[5] = (re) => b.value = null)
      }, null, 8, ["node"])) : r("", !0),
      T.value ? (s(), I(io, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: Y[6] || (Y[6] = (re) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), lf = /* @__PURE__ */ le(af, [["__scopeId", "data-v-1555a802"]]);
function ro(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const rf = { class: "remote-url-display" }, df = ["title"], cf = ["title"], uf = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, mf = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, vf = /* @__PURE__ */ ne({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = h(!1), i = O(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const v = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${v}...${u}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, u) => (s(), o("div", rf, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, df),
      e("button", {
        class: pe(["copy-btn", { copied: n.value }]),
        onClick: f,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", mf, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", uf, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, cf)
    ]));
  }
}), ff = /* @__PURE__ */ le(vf, [["__scopeId", "data-v-7768a58d"]]), pf = { class: "remote-title" }, gf = {
  key: 0,
  class: "default-badge"
}, hf = {
  key: 1,
  class: "sync-badge"
}, yf = {
  key: 0,
  class: "ahead"
}, wf = {
  key: 1,
  class: "behind"
}, kf = {
  key: 1,
  class: "synced"
}, bf = ["href"], _f = {
  key: 1,
  class: "remote-url-text"
}, $f = /* @__PURE__ */ ne({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = O(() => c.fetchingRemote === c.remote.name), i = O(() => c.remote.is_default), f = O(() => c.syncStatus && c.syncStatus.behind > 0), v = O(() => c.syncStatus && c.syncStatus.ahead > 0), u = O(() => c.remote.push_url !== c.remote.fetch_url), m = O(() => {
      const p = c.remote.fetch_url, w = p.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return w ? `https://${w[1]}/${w[2]}` : p.startsWith("https://") || p.startsWith("http://") ? p.replace(/\.git$/, "") : null;
    }), d = O(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (p, w) => (s(), I(ot, {
      status: i.value ? "synced" : void 0
    }, Vt({
      icon: l(() => [
        g(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", pf, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", gf, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", hf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", yf, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", wf, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", kf, "✓ synced"))
          ])) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        m.value ? (s(), o("a", {
          key: 0,
          href: m.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: w[0] || (w[0] = Ve(() => {
          }, ["stop"]))
        }, a(d.value), 9, bf)) : (s(), o("span", _f, a(d.value), 1))
      ]),
      actions: l(() => [
        y(te, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: w[1] || (w[1] = (k) => p.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...w[6] || (w[6] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        y(te, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[2] || (w[2] = (k) => p.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            g(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        y(te, {
          variant: v.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[3] || (w[3] = (k) => p.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        y(te, {
          variant: "secondary",
          size: "xs",
          onClick: w[4] || (w[4] = (k) => p.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...w[7] || (w[7] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (s(), I(te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: w[5] || (w[5] = (k) => p.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...w[8] || (w[8] = [
            g(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), I(Ge, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              y(ff, {
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
}), Cf = /* @__PURE__ */ le($f, [["__scopeId", "data-v-8310f3a8"]]), xf = ["for"], Sf = {
  key: 0,
  class: "base-form-field-required"
}, If = { class: "base-form-field-input" }, Ef = {
  key: 1,
  class: "base-form-field-error"
}, Pf = {
  key: 2,
  class: "base-form-field-hint"
}, Rf = /* @__PURE__ */ ne({
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
    const c = t, n = O(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, f) => (s(), o("div", {
      class: pe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        g(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Sf, "*")) : r("", !0)
      ], 8, xf)) : r("", !0),
      e("div", If, [
        Me(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Ef, a(t.error), 1)) : t.hint ? (s(), o("span", Pf, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), $s = /* @__PURE__ */ le(Rf, [["__scopeId", "data-v-9a1cf296"]]), Mf = { class: "remote-form" }, Tf = { class: "form-header" }, Df = { class: "form-body" }, Lf = {
  key: 0,
  class: "form-error"
}, zf = { class: "form-actions" }, Uf = /* @__PURE__ */ ne({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), v = h(!1), u = h(null);
    St(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      f.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = O(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!m.value || v.value)) {
        u.value = null, v.value = !0;
        try {
          i("submit", f.value);
        } catch (p) {
          u.value = p instanceof Error ? p.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (p, w) => (s(), o("div", Mf, [
      e("div", Tf, [
        y(vt, null, {
          default: l(() => [
            g(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Df, [
        y($s, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            y(wt, {
              modelValue: f.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (k) => f.value.name = k),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        y($s, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            y(wt, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (k) => f.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        y($s, { label: "Push URL (optional)" }, {
          default: l(() => [
            y(wt, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (k) => f.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", Lf, a(u.value), 1)) : r("", !0)
      ]),
      e("div", zf, [
        y(te, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: v.value,
          onClick: d
        }, {
          default: l(() => [
            g(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        y(te, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (k) => p.$emit("cancel"))
        }, {
          default: l(() => [...w[4] || (w[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Nf = /* @__PURE__ */ le(Uf, [["__scopeId", "data-v-56021b18"]]), Of = { class: "conflict-summary-box" }, Af = { class: "summary-header" }, Bf = { class: "summary-text" }, Ff = { key: 0 }, Vf = {
  key: 1,
  class: "all-resolved"
}, Wf = { class: "summary-progress" }, Gf = { class: "progress-bar" }, jf = { class: "progress-text" }, Hf = /* @__PURE__ */ ne({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = O(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, f) => (s(), o("div", Of, [
      e("div", Af, [
        f[0] || (f[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Bf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Ff, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Vf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Wf, [
        e("div", Gf, [
          e("div", {
            class: "progress-fill",
            style: Pt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", jf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Kf = /* @__PURE__ */ le(Hf, [["__scopeId", "data-v-4e9e6cc9"]]), qf = { class: "modal-header" }, Yf = { class: "modal-title" }, Jf = { class: "modal-body" }, Xf = {
  key: 0,
  class: "error-box"
}, Qf = {
  key: 0,
  class: "error-hint"
}, Zf = {
  key: 1,
  class: "loading-state"
}, ep = { class: "commit-summary" }, tp = {
  key: 0,
  class: "changes-section"
}, sp = {
  key: 0,
  class: "change-group",
  open: ""
}, op = { class: "change-count" }, np = { class: "change-list" }, ap = {
  key: 0,
  class: "conflict-badge"
}, lp = {
  key: 1,
  class: "change-group"
}, ip = { class: "change-count" }, rp = { class: "change-list" }, dp = {
  key: 2,
  class: "change-group"
}, cp = { class: "change-count" }, up = { class: "change-list" }, mp = {
  key: 2,
  class: "strategy-section"
}, vp = { class: "radio-group" }, fp = { class: "radio-option" }, pp = { class: "radio-option" }, gp = { class: "radio-option" }, hp = {
  key: 3,
  class: "up-to-date"
}, yp = { class: "modal-actions" }, Ys = "comfygit.pullModelStrategy", wp = /* @__PURE__ */ ne({
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
    const n = t, i = c, f = h(localStorage.getItem(Ys) || "skip");
    St(f, ($) => {
      localStorage.setItem(Ys, $);
    });
    const v = O(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = O(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), m = O(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = O(() => {
      var $;
      return u.value > 0 || m.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), p = O(() => n.preview && ro(n.preview) ? n.preview : null), w = O(() => {
      var $;
      return (($ = p.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), k = O(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), _ = O(
      () => w.value > 0 && k.value === w.value
    ), b = O(() => !(!n.preview || n.preview.has_uncommitted_changes || p.value && !_.value));
    function T($) {
      if (!p.value) return !1;
      const C = $.replace(/\.json$/, "");
      return p.value.workflow_conflicts.some((B) => B.name === C);
    }
    function R($) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: f.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var B, S;
      return s(), I(Ze, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (M) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Ve(() => {
            }, ["stop"]))
          }, [
            e("div", qf, [
              e("h3", Yf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (M) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", Jf, [
              t.error ? (s(), o("div", Xf, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  v.value ? (s(), o("p", Qf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : r("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Zf, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (B = t.preview) != null && B.has_uncommitted_changes ? (s(), o(W, { key: 2 }, [
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
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", ep, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  g(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", tp, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", sp, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", op, a(u.value) + " changes", 1)
                    ]),
                    e("div", np, [
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.added, (M) => (s(), o("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + a(M), 1))), 128)),
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.modified, (M) => (s(), o("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        g(" ~ " + a(M) + " ", 1),
                        T(M) ? (s(), o("span", ap, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.deleted, (M) => (s(), o("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + a(M), 1))), 128))
                    ])
                  ])) : r("", !0),
                  m.value > 0 ? (s(), o("details", lp, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", ip, a(m.value) + " to install", 1)
                    ]),
                    e("div", rp, [
                      (s(!0), o(W, null, ae(t.preview.changes.nodes.to_install, (M) => (s(), o("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + a(M), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", dp, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", cp, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", up, [
                      (s(!0), o(W, null, ae(t.preview.changes.models.referenced, (M) => (s(), o("div", {
                        key: M,
                        class: "change-item"
                      }, a(M), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                p.value ? (s(), I(Kf, {
                  key: 1,
                  "conflict-count": w.value,
                  "resolved-count": k.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", mp, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", vp, [
                    e("label", fp, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (M) => f.value = M),
                        value: "all"
                      }, null, 512), [
                        [zt, f.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", pp, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (M) => f.value = M),
                        value: "required"
                      }, null, 512), [
                        [zt, f.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", gp, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (M) => f.value = M),
                        value: "skip"
                      }, null, 512), [
                        [zt, f.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : r("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", hp, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : r("", !0)
              ], 64)) : r("", !0)
            ]),
            e("div", yp, [
              y(te, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (M) => $.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(W, { key: 0 }, [
                y(te, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (M) => R(!1))
                }, {
                  default: l(() => [...C[30] || (C[30] = [
                    g(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                y(te, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (M) => R(!0))
                }, {
                  default: l(() => [...C[31] || (C[31] = [
                    g(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (S = t.preview) != null && S.has_uncommitted_changes ? (s(), I(te, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (M) => R(!0))
              }, {
                default: l(() => [...C[32] || (C[32] = [
                  g(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(W, { key: 2 }, [
                p.value && !_.value ? (s(), I(te, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (M) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    g(" Resolve Conflicts (" + a(k.value) + "/" + a(w.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), I(te, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !b.value,
                  onClick: C[9] || (C[9] = (M) => R(!1))
                }, {
                  default: l(() => [...C[33] || (C[33] = [
                    g(" Pull Changes ", -1)
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
}), kp = /* @__PURE__ */ le(wp, [["__scopeId", "data-v-300c7b2f"]]), bp = { class: "modal-header" }, _p = { class: "modal-title" }, $p = { class: "modal-body" }, Cp = {
  key: 0,
  class: "loading-state"
}, xp = {
  key: 1,
  class: "warning-box"
}, Sp = {
  key: 0,
  class: "commits-section"
}, Ip = { class: "commit-list" }, Ep = { class: "commit-hash" }, Pp = { class: "commit-message" }, Rp = { class: "commit-date" }, Mp = { class: "force-option" }, Tp = { class: "checkbox-option" }, Dp = { class: "commit-summary" }, Lp = {
  key: 0,
  class: "commits-section"
}, zp = { class: "commit-list" }, Up = { class: "commit-hash" }, Np = { class: "commit-message" }, Op = { class: "commit-date" }, Ap = {
  key: 1,
  class: "up-to-date"
}, Bp = { class: "modal-actions" }, Fp = /* @__PURE__ */ ne({
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
    const n = c, i = h(!1);
    function f(v) {
      n("push", { force: v });
    }
    return (v, u) => {
      var m, d, p;
      return s(), I(Ze, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (w) => v.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Ve(() => {
            }, ["stop"]))
          }, [
            e("div", bp, [
              e("h3", _p, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (w) => v.$emit("close"))
              }, "✕")
            ]),
            e("div", $p, [
              t.loading ? (s(), o("div", Cp, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (s(), o("div", xp, [...u[9] || (u[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = t.preview) != null && d.remote_has_new_commits ? (s(), o(W, { key: 2 }, [
                u[13] || (u[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Sp, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Ip, [
                    (s(!0), o(W, null, ae(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Ep, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Pp, a(w.message), 1),
                      e("span", Rp, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", Mp, [
                  e("label", Tp, [
                    Ue(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (w) => i.value = w)
                    }, null, 512), [
                      [hs, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", Dp, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  g(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Lp, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", zp, [
                    (s(!0), o(W, null, ae(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Up, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Np, a(w.message), 1),
                      e("span", Op, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Ap, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", Bp, [
              y(te, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (w) => v.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (p = t.preview) != null && p.remote_has_new_commits ? (s(), o(W, { key: 0 }, [
                y(te, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (w) => v.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    g(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                y(te, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (w) => f(!0))
                }, {
                  default: l(() => [...u[19] || (u[19] = [
                    g(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), I(te, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (w) => f(!1))
              }, {
                default: l(() => [...u[20] || (u[20] = [
                  g(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : r("", !0)
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), Vp = /* @__PURE__ */ le(Fp, [["__scopeId", "data-v-bc6ded53"]]), Wp = { class: "resolution-choice-group" }, Gp = ["disabled"], jp = ["disabled"], Hp = /* @__PURE__ */ ne({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Wp, [
      e("button", {
        class: pe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Gp),
      e("button", {
        class: pe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, jp)
    ]));
  }
}), Kp = /* @__PURE__ */ le(Hp, [["__scopeId", "data-v-985715ed"]]), qp = { class: "conflict-header" }, Yp = { class: "conflict-info" }, Jp = { class: "workflow-name" }, Xp = { class: "conflict-description" }, Qp = {
  key: 0,
  class: "resolved-badge"
}, Zp = { class: "resolved-text" }, eg = { class: "conflict-hashes" }, tg = { class: "hash-item" }, sg = { class: "hash-item" }, og = { class: "conflict-actions" }, ng = /* @__PURE__ */ ne({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(n.resolution);
    St(() => n.resolution, (d) => {
      f.value = d;
    }), St(f, (d) => {
      d && i("resolve", d);
    });
    const v = O(() => f.value !== null), u = O(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = O(() => {
      switch (f.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, p) => {
      var w, k;
      return s(), o("div", {
        class: pe(["conflict-item", { resolved: v.value }])
      }, [
        e("div", qp, [
          p[2] || (p[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Yp, [
            e("code", Jp, a(t.conflict.name) + ".json", 1),
            e("div", Xp, a(u.value), 1)
          ]),
          v.value ? (s(), o("div", Qp, [
            p[1] || (p[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Zp, a(m.value), 1)
          ])) : r("", !0)
        ]),
        e("div", eg, [
          e("span", tg, [
            p[3] || (p[3] = g("Your: ", -1)),
            e("code", null, a(((w = t.conflict.base_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", sg, [
            p[4] || (p[4] = g("Theirs: ", -1)),
            e("code", null, a(((k = t.conflict.target_hash) == null ? void 0 : k.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", og, [
          y(Kp, {
            modelValue: f.value,
            "onUpdate:modelValue": p[0] || (p[0] = (_) => f.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), ag = /* @__PURE__ */ le(ng, [["__scopeId", "data-v-506d3bbf"]]), lg = { class: "resolution-content" }, ig = {
  key: 0,
  class: "error-box"
}, rg = { class: "resolution-header" }, dg = { class: "header-stats" }, cg = { class: "stat" }, ug = { class: "stat-value" }, mg = { class: "stat resolved" }, vg = { class: "stat-value" }, fg = {
  key: 0,
  class: "stat pending"
}, pg = { class: "stat-value" }, gg = { class: "conflicts-list" }, hg = {
  key: 1,
  class: "all-resolved-message"
}, yg = /* @__PURE__ */ ne({
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
    const n = t, i = c, f = O(() => n.resolutions.size), v = O(() => n.workflowConflicts.length - f.value), u = O(() => f.value === n.workflowConflicts.length), m = O(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(_) {
      const b = n.resolutions.get(_);
      return (b == null ? void 0 : b.resolution) ?? null;
    }
    function p(_, b) {
      i("resolve", _, b);
    }
    function w() {
      i("close");
    }
    function k() {
      i("apply");
    }
    return (_, b) => (s(), I(lt, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: w
    }, {
      body: l(() => [
        e("div", lg, [
          t.error ? (s(), o("div", ig, [
            b[1] || (b[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              b[0] || (b[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : r("", !0),
          e("div", rg, [
            e("div", dg, [
              e("div", cg, [
                e("span", ug, a(t.workflowConflicts.length), 1),
                b[2] || (b[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", mg, [
                e("span", vg, a(f.value), 1),
                b[3] || (b[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              v.value > 0 ? (s(), o("div", fg, [
                e("span", pg, a(v.value), 1),
                b[4] || (b[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : r("", !0)
            ]),
            b[5] || (b[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", gg, [
            (s(!0), o(W, null, ae(t.workflowConflicts, (T) => (s(), I(ag, {
              key: T.name,
              conflict: T,
              resolution: d(T.name),
              onResolve: (R) => p(T.name, R)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", hg, [
            b[6] || (b[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        y(we, {
          variant: "secondary",
          onClick: w
        }, {
          default: l(() => [...b[7] || (b[7] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b[8] || (b[8] = e("div", { class: "footer-spacer" }, null, -1)),
        y(we, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: k
        }, {
          default: l(() => [
            g(a(m.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), wg = /* @__PURE__ */ le(yg, [["__scopeId", "data-v-c58d150d"]]), kg = { class: "node-conflict-item" }, bg = { class: "node-header" }, _g = { class: "node-name" }, $g = { class: "node-id" }, Cg = { class: "version-comparison" }, xg = { class: "version yours" }, Sg = { class: "version theirs" }, Ig = { class: "chosen-version" }, Eg = { class: "chosen" }, Pg = { class: "chosen-reason" }, Rg = { class: "affected-workflows" }, Mg = { class: "wf-source" }, Tg = { class: "wf-version" }, Dg = /* @__PURE__ */ ne({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", kg, [
      e("div", bg, [
        e("code", _g, a(t.conflict.node_name), 1),
        e("span", $g, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Cg, [
        e("div", xg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Sg, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Ig, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Eg, a(t.conflict.chosen_version), 1),
        e("span", Pg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Rg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(W, null, ae(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Mg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Tg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Lg = /* @__PURE__ */ le(Dg, [["__scopeId", "data-v-8b626725"]]), zg = { class: "validation-content" }, Ug = {
  key: 0,
  class: "compatible-message"
}, Ng = { class: "conflicts-list" }, Og = {
  key: 2,
  class: "warnings-section"
}, Ag = /* @__PURE__ */ ne({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = O(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (v, u) => (s(), I(lt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (m) => i("cancel"))
    }, {
      body: l(() => [
        e("div", zg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Ug, [
            u[5] || (u[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              u[4] || (u[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(W, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Ng, [
              (s(!0), o(W, null, ae(t.validation.node_conflicts, (m) => (s(), I(Lg, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : r("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Og, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(W, null, ae(t.validation.warnings, (m, d) => (s(), o("li", { key: d }, a(m), 1))), 128))
            ])
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        y(we, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => i("cancel"))
        }, {
          default: l(() => [...u[9] || (u[9] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        y(we, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => i("goBack"))
        }, {
          default: l(() => [...u[10] || (u[10] = [
            g(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        y(we, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (m) => i("proceed"))
        }, {
          default: l(() => [
            g(a(f.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Bg = /* @__PURE__ */ le(Ag, [["__scopeId", "data-v-fefd26ed"]]), Fg = { key: 0 }, Vg = /* @__PURE__ */ ne({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: f,
      removeRemote: v,
      updateRemoteUrl: u,
      fetchRemote: m,
      getRemoteSyncStatus: d,
      getPullPreview: p,
      pullFromRemote: w,
      getPushPreview: k,
      pushToRemote: _,
      validateMerge: b
    } = Ye(), T = h([]), R = h(null), $ = h({}), C = h(!1), B = h(null), S = h(""), M = h(!1), Q = h(null), F = h(!1), j = h("add"), x = h({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = O(() => {
      if (!S.value.trim()) return T.value;
      const V = S.value.toLowerCase();
      return T.value.filter(
        (oe) => oe.name.toLowerCase().includes(V) || oe.fetch_url.toLowerCase().includes(V) || oe.push_url.toLowerCase().includes(V)
      );
    });
    async function A() {
      C.value = !0, B.value = null;
      try {
        const V = await i();
        T.value = V.remotes, R.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (oe) => {
            const be = await d(oe.name);
            be && ($.value[oe.name] = be);
          })
        );
      } catch (V) {
        B.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function de() {
      j.value = "add", x.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function ee(V) {
      const oe = T.value.find((be) => be.name === V);
      oe && (j.value = "edit", x.value = {
        name: oe.name,
        fetchUrl: oe.fetch_url,
        pushUrl: oe.push_url
      }, F.value = !0);
    }
    async function Y(V) {
      try {
        j.value === "add" ? await f(V.name, V.fetchUrl) : await u(V.name, V.fetchUrl, V.pushUrl || void 0), F.value = !1, await A();
      } catch (oe) {
        B.value = oe instanceof Error ? oe.message : "Operation failed";
      }
    }
    function re() {
      F.value = !1, x.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(V) {
      Q.value = V;
      try {
        await m(V);
        const oe = await d(V);
        oe && ($.value[V] = oe), n("toast", `✓ Fetched from ${V}`, "success");
      } catch (oe) {
        n("toast", oe instanceof Error ? oe.message : "Fetch failed", "error");
      } finally {
        Q.value = null;
      }
    }
    async function N(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await v(V), await A();
        } catch (oe) {
          B.value = oe instanceof Error ? oe.message : "Failed to remove remote";
        }
    }
    function z() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const E = h("idle"), ce = O(() => E.value === "pull_preview"), se = O(
      () => E.value === "resolving" || E.value === "validating"
    ), ke = O(
      () => E.value === "validation_review" || E.value === "executing"
    ), Se = h(!1), Te = h(null), Ne = h(!1), ue = h(null), he = h(!1), Ie = h(null), Z = h(null), ie = h(/* @__PURE__ */ new Map()), ge = h(null), Oe = h(null), Xe = O(() => Ie.value && ro(Ie.value) ? Ie.value : null);
    async function st(V) {
      ue.value = V, E.value = "pull_preview", he.value = !0, Ie.value = null, Z.value = null;
      try {
        Ie.value = await p(V);
      } catch (oe) {
        Z.value = oe instanceof Error ? oe.message : "Failed to load pull preview";
      } finally {
        he.value = !1;
      }
    }
    function Ee() {
      E.value = "idle", Ie.value = null, Z.value = null, ue.value = null;
    }
    async function Fe(V) {
      if (!ue.value) return;
      E.value = "executing", Z.value = null;
      const oe = ue.value;
      try {
        const be = await w(oe, V);
        if (be.rolled_back) {
          Z.value = `Pull failed and was rolled back: ${be.error || "Unknown error"}`, E.value = "pull_preview";
          return;
        }
        ze(), E.value = "idle", n("toast", `✓ Pulled from ${oe}`, "success"), await A();
      } catch (be) {
        Z.value = be instanceof Error ? be.message : "Pull failed", E.value = "pull_preview";
      }
    }
    function Qe() {
      Xe.value && (E.value = "resolving", Oe.value = null);
    }
    function qe(V, oe) {
      ie.value.set(V, { name: V, resolution: oe });
    }
    function it() {
      E.value = "pull_preview";
    }
    async function _e() {
      E.value = "validating", Oe.value = null;
      try {
        const V = Array.from(ie.value.values());
        ge.value = await b(ue.value, V), E.value = "validation_review";
      } catch (V) {
        Oe.value = V instanceof Error ? V.message : "Validation failed", E.value = "resolving";
      }
    }
    async function He() {
      E.value = "executing";
      const V = ue.value;
      try {
        const oe = Array.from(ie.value.values()), be = await w(V, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: oe
        });
        if (be.rolled_back) {
          Z.value = `Pull failed and was rolled back: ${be.error || "Unknown error"}`, E.value = "pull_preview";
          return;
        }
        ze(), E.value = "idle", n("toast", `✓ Pulled from ${V}`, "success"), await A();
      } catch (oe) {
        Z.value = oe instanceof Error ? oe.message : "Pull failed", E.value = "validation_review";
      }
    }
    function De() {
      E.value = "resolving";
    }
    function et() {
      ze(), E.value = "idle";
    }
    function ze() {
      ie.value.clear(), ge.value = null, Oe.value = null, Z.value = null, Ie.value = null, ue.value = null;
    }
    async function fe(V) {
      ue.value = V, Se.value = !0, he.value = !0, Te.value = null;
      try {
        Te.value = await k(V);
      } catch (oe) {
        B.value = oe instanceof Error ? oe.message : "Failed to load push preview";
      } finally {
        he.value = !1;
      }
    }
    function K() {
      Se.value = !1, Te.value = null, ue.value = null;
    }
    async function q(V) {
      if (!ue.value) return;
      Ne.value = !0;
      const oe = ue.value;
      try {
        await _(oe, V), K(), n("toast", `✓ Pushed to ${oe}`, "success"), await A();
      } catch (be) {
        n("toast", be instanceof Error ? be.message : "Push failed", "error");
      } finally {
        Ne.value = !1;
      }
    }
    function P() {
      const V = ue.value;
      K(), V && st(V);
    }
    return je(A), (V, oe) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (be) => M.value = !0)
          }, {
            actions: l(() => [
              F.value ? r("", !0) : (s(), I(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: de
              }, {
                default: l(() => [...oe[3] || (oe[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          F.value ? r("", !0) : (s(), I(Yt, {
            key: 0,
            modelValue: S.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (be) => S.value = be),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          C.value ? (s(), I(Rt, {
            key: 0,
            message: "Loading remotes..."
          })) : B.value ? (s(), I(Mt, {
            key: 1,
            message: B.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            F.value ? (s(), I(Nf, {
              key: 0,
              mode: j.value,
              "remote-name": x.value.name,
              "fetch-url": x.value.fetchUrl,
              "push-url": x.value.pushUrl,
              onSubmit: Y,
              onCancel: re
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            T.value.length && !F.value ? (s(), I(fs, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                R.value ? (s(), o("span", Fg, " • Tracking: " + a(R.value.remote) + "/" + a(R.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            D.value.length && !F.value ? (s(), I(Be, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(D.value, (be) => (s(), I(Cf, {
                  key: be.name,
                  remote: be,
                  "sync-status": $.value[be.name],
                  "fetching-remote": Q.value,
                  onFetch: X,
                  onEdit: ee,
                  onRemove: N,
                  onPull: st,
                  onPush: fe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !D.value.length && !F.value ? (s(), I(kt, {
              key: 3,
              icon: "🌐",
              message: S.value ? `No remotes match '${S.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                y(te, {
                  variant: "primary",
                  onClick: de
                }, {
                  default: l(() => [...oe[4] || (oe[4] = [
                    g(" Add Your First Remote ", -1)
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
      y(bt, {
        show: M.value,
        title: "About Git Remotes",
        onClose: oe[2] || (oe[2] = (be) => M.value = !1)
      }, {
        content: l(() => [...oe[5] || (oe[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            g(" The "),
            e("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          y(te, {
            variant: "link",
            onClick: z
          }, {
            default: l(() => [...oe[6] || (oe[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      y(kp, {
        show: ce.value,
        "remote-name": ue.value || "",
        preview: Ie.value,
        loading: he.value,
        pulling: E.value === "executing",
        error: Z.value,
        "conflict-resolutions": ie.value,
        onClose: Ee,
        onPull: Fe,
        onOpenConflictResolution: Qe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      y(Vp, {
        show: Se.value,
        "remote-name": ue.value || "",
        preview: Te.value,
        loading: he.value,
        pushing: Ne.value,
        onClose: K,
        onPush: q,
        onPullFirst: P
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      se.value && Xe.value ? (s(), I(wg, {
        key: 0,
        "workflow-conflicts": Xe.value.workflow_conflicts,
        resolutions: ie.value,
        "operation-type": "pull",
        validating: E.value === "validating",
        error: Oe.value,
        onClose: it,
        onResolve: qe,
        onApply: _e
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      ke.value && ge.value ? (s(), I(Bg, {
        key: 1,
        validation: ge.value,
        "operation-type": "pull",
        executing: E.value === "executing",
        onProceed: He,
        onGoBack: De,
        onCancel: et
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Wg = /* @__PURE__ */ le(Vg, [["__scopeId", "data-v-9ae3b76d"]]), Gg = { class: "setting-info" }, jg = { class: "setting-label" }, Hg = {
  key: 0,
  class: "required-marker"
}, Kg = {
  key: 0,
  class: "setting-description"
}, qg = { class: "setting-control" }, Yg = /* @__PURE__ */ ne({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: pe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Gg, [
        e("div", jg, [
          g(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Hg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", Kg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", qg, [
        Me(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Cs = /* @__PURE__ */ le(Yg, [["__scopeId", "data-v-cb5d236c"]]), Jg = { class: "toggle" }, Xg = ["checked", "disabled"], Qg = /* @__PURE__ */ ne({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Jg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Xg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Zg = /* @__PURE__ */ le(Qg, [["__scopeId", "data-v-71c0f550"]]), eh = { class: "workspace-settings-content" }, th = { class: "settings-section" }, sh = { class: "path-setting" }, oh = { class: "path-value" }, nh = { class: "path-setting" }, ah = { class: "path-value" }, lh = { class: "settings-section" }, ih = { class: "settings-section" }, rh = { class: "settings-section" }, dh = /* @__PURE__ */ ne({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = n, { getConfig: v, updateConfig: u } = Ye(), m = h(!1), d = h(null), p = h(null), w = h(null), k = h(null), _ = h(""), b = h(""), T = h(!1);
    function R(F) {
      return F.join(" ");
    }
    function $(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const C = O(() => {
      if (!k.value) return !1;
      const F = _.value !== (k.value.civitai_api_key || ""), j = b.value !== R(k.value.comfyui_extra_args || []);
      return F || j;
    });
    async function B() {
      m.value = !0, d.value = null;
      try {
        w.value = await v(i.workspacePath || void 0), k.value = { ...w.value }, _.value = w.value.civitai_api_key || "", b.value = R(w.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        T.value = F === "true";
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        m.value = !1;
      }
    }
    async function S() {
      var F, j;
      p.value = null;
      try {
        const x = {};
        _.value !== (((F = k.value) == null ? void 0 : F.civitai_api_key) || "") && (x.civitai_api_key = _.value || null), b.value !== R(((j = k.value) == null ? void 0 : j.comfyui_extra_args) || []) && (x.comfyui_extra_args = $(b.value)), await u(x, i.workspacePath || void 0), await B(), p.value = { type: "success", message: "Settings saved successfully" }, f("saved"), setTimeout(() => {
          p.value = null;
        }, 3e3);
      } catch (x) {
        const D = x instanceof Error ? x.message : "Failed to save settings";
        p.value = { type: "error", message: D }, f("error", D);
      }
    }
    function M() {
      k.value && (_.value = k.value.civitai_api_key || "", b.value = R(k.value.comfyui_extra_args || []), p.value = null);
    }
    function Q(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return c({
      saveSettings: S,
      resetSettings: M,
      hasChanges: C,
      loadSettings: B
    }), je(B), (F, j) => (s(), o("div", eh, [
      m.value ? (s(), I(Rt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), I(Mt, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: B
      }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
        y(Be, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var x, D;
            return [
              e("div", th, [
                e("div", sh, [
                  j[3] || (j[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  j[4] || (j[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", oh, a(((x = w.value) == null ? void 0 : x.workspace_path) || "Loading..."), 1)
                ]),
                e("div", nh, [
                  j[5] || (j[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  j[6] || (j[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", ah, a(((D = w.value) == null ? void 0 : D.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        y(Be, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", lh, [
              y(Cs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  y(ys, {
                    modelValue: _.value,
                    "onUpdate:modelValue": j[0] || (j[0] = (x) => _.value = x),
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
        y(Be, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", ih, [
              y(Cs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  y(ys, {
                    modelValue: b.value,
                    "onUpdate:modelValue": j[1] || (j[1] = (x) => b.value = x),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              j[7] || (j[7] = e("div", { class: "setting-hint" }, [
                g(" Common flags: "),
                e("code", null, "--lowvram"),
                g(", "),
                e("code", null, "--highvram"),
                g(", "),
                e("code", null, "--listen 0.0.0.0"),
                g(", "),
                e("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        y(Be, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", rh, [
              y(Cs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  y(Zg, {
                    modelValue: T.value,
                    "onUpdate:modelValue": [
                      j[2] || (j[2] = (x) => T.value = x),
                      Q
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        p.value ? (s(), I(fs, {
          key: 0,
          variant: (p.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: Pt({ color: p.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(p.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), co = /* @__PURE__ */ le(dh, [["__scopeId", "data-v-9f44552d"]]), ch = /* @__PURE__ */ ne({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = h(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, f) => (s(), I(nt, null, {
      header: l(() => [
        y(at, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var v, u;
            return [
              y(te, {
                variant: "primary",
                size: "sm",
                disabled: !((v = c.value) != null && v.hasChanges),
                onClick: f[0] || (f[0] = (m) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: l(() => [...f[2] || (f[2] = [
                  g(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), I(te, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: f[1] || (f[1] = (m) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: l(() => [...f[3] || (f[3] = [
                  g(" Reset ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: l(() => [
        y(co, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), uh = /* @__PURE__ */ ne({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = Ye(), f = h([]), v = h(!1), u = h(null), m = h(!1), d = h(null), p = h(null), w = h(!1), k = O(() => f.value.length === 0 ? [] : f.value.map((R) => ({
      text: `${R.timestamp} - ${R.name} - ${R.level} - ${R.func}:${R.line} - ${R.message}`,
      level: R.level
    })));
    async function _() {
      v.value = !0, u.value = null;
      try {
        f.value = await c(void 0, 500);
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load workspace logs";
      } finally {
        v.value = !1, setTimeout(() => {
          var R;
          (R = d.value) != null && R.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function b() {
      try {
        const R = await n();
        R.exists && (p.value = R.path);
      } catch {
      }
    }
    async function T() {
      if (p.value) {
        w.value = !0;
        try {
          await i(p.value);
        } catch (R) {
          console.error("Failed to open log file:", R);
        } finally {
          w.value = !1;
        }
      }
    }
    return je(() => {
      _(), b();
    }), (R, $) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => m.value = !0)
          }, {
            actions: l(() => [
              y(te, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !p.value || w.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(w.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              y(te, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: v.value
              }, {
                default: l(() => [
                  g(a(v.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          v.value ? (s(), I(Rt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), I(Mt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            f.value.length === 0 ? (s(), I(kt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: d,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ae(k.value, (C, B) => (s(), o("div", {
                key: B,
                class: pe(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      y(bt, {
        show: m.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (C) => m.value = !1)
      }, {
        content: l(() => [...$[3] || ($[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: l(() => [
          y(te, {
            variant: "primary",
            onClick: $[1] || ($[1] = (C) => m.value = !1)
          }, {
            default: l(() => [...$[4] || ($[4] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), mh = /* @__PURE__ */ le(uh, [["__scopeId", "data-v-7f05352a"]]), vh = /* @__PURE__ */ ne({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: f } = Ye(), v = h([]), u = h(!1), m = h(null), d = h(!1), p = h("production"), w = h(null), k = h(null), _ = h(!1), b = O(() => v.value.length === 0 ? [] : v.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function T() {
      u.value = !0, m.value = null;
      try {
        v.value = await c(void 0, 500);
        try {
          const C = await n();
          p.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        m.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var C;
          (C = w.value) != null && C.parentElement && (w.value.parentElement.scrollTop = w.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function R() {
      try {
        const C = await i();
        C.exists && (k.value = C.path);
      } catch {
      }
    }
    async function $() {
      if (k.value) {
        _.value = !0;
        try {
          await f(k.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          _.value = !1;
        }
      }
    }
    return je(() => {
      T(), R();
    }), (C, B) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (S) => d.value = !0)
          }, {
            actions: l(() => [
              y(te, {
                variant: "secondary",
                size: "sm",
                onClick: $,
                disabled: !k.value || _.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(_.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              y(te, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: u.value
              }, {
                default: l(() => [
                  g(a(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          u.value ? (s(), I(Rt, {
            key: 0,
            message: "Loading environment logs..."
          })) : m.value ? (s(), I(Mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length === 0 ? (s(), I(kt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: w,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ae(b.value, (S, M) => (s(), o("div", {
                key: M,
                class: pe(`log-line log-level-${S.level.toLowerCase()}`)
              }, a(S.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      y(bt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: B[2] || (B[2] = (S) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            B[3] || (B[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(p.value), 1),
            B[4] || (B[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          B[5] || (B[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1)),
          B[6] || (B[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          y(te, {
            variant: "primary",
            onClick: B[1] || (B[1] = (S) => d.value = !1)
          }, {
            default: l(() => [...B[7] || (B[7] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), fh = /* @__PURE__ */ le(vh, [["__scopeId", "data-v-6f8db7ce"]]), ph = { class: "env-title" }, gh = {
  key: 0,
  class: "current-badge"
}, hh = {
  key: 0,
  class: "branch-info"
}, yh = /* @__PURE__ */ ne({
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
    return (c, n) => (s(), I(ot, {
      status: t.isCurrent ? "synced" : void 0
    }, Vt({
      icon: l(() => [
        g(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", ph, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", gh, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", hh, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: l(() => [
        Me(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          y(Ge, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          y(Ge, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          y(Ge, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), I(Ge, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), wh = /* @__PURE__ */ le(yh, [["__scopeId", "data-v-9231917a"]]), kh = { class: "env-details" }, bh = { class: "status-row" }, _h = {
  key: 0,
  class: "detail-row"
}, $h = { class: "value mono" }, Ch = {
  key: 1,
  class: "detail-row"
}, xh = { class: "value mono small" }, Sh = { class: "detail-row" }, Ih = { class: "value" }, Eh = { class: "detail-row" }, Ph = { class: "value" }, Rh = { class: "detail-row" }, Mh = { class: "value" }, Th = {
  key: 2,
  class: "section-divider"
}, Dh = {
  key: 3,
  class: "detail-row"
}, Lh = { class: "value" }, zh = {
  key: 4,
  class: "detail-row"
}, Uh = { class: "value" }, Nh = { class: "footer-actions" }, Oh = /* @__PURE__ */ ne({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(f) {
      if (!f) return "Unknown";
      try {
        const v = new Date(f), m = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), d = Math.floor(m / 6e4), p = Math.floor(m / 36e5), w = Math.floor(m / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : p < 24 ? `${p} ${p === 1 ? "hour" : "hours"} ago` : w < 30 ? `${w} ${w === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return f;
      }
    }
    return (f, v) => (s(), I(lt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (u) => n("close"))
    }, {
      body: l(() => [
        e("div", kh, [
          e("div", bh, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: pe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", _h, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", $h, a(t.environment.current_branch), 1)
          ])) : r("", !0),
          t.environment.path ? (s(), o("div", Ch, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", xh, a(t.environment.path), 1)
          ])) : r("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Sh, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Ih, a(t.environment.workflow_count), 1)
          ]),
          e("div", Eh, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Ph, a(t.environment.node_count), 1)
          ]),
          e("div", Rh, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Mh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Th)) : r("", !0),
          t.environment.created_at ? (s(), o("div", Dh, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Lh, a(i(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", zh, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Uh, a(i(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", Nh, [
          t.canDelete ? (s(), I(we, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (u) => n("delete", t.environment.name))
          }, {
            default: l(() => [...v[12] || (v[12] = [
              g(" Delete ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          y(we, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (u) => n("close"))
          }, {
            default: l(() => [...v[13] || (v[13] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ah = /* @__PURE__ */ le(Oh, [["__scopeId", "data-v-59855453"]]), uo = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], mo = "3.12", zs = [
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
], vo = "auto", Bh = { class: "progress-bar" }, Fh = /* @__PURE__ */ ne({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = O(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, f) => (s(), o("div", Bh, [
      e("div", {
        class: pe(["progress-fill", t.variant]),
        style: Pt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Us = /* @__PURE__ */ le(Fh, [["__scopeId", "data-v-1beb0512"]]), Vh = { class: "task-progress" }, Wh = { class: "progress-info" }, Gh = { class: "progress-percentage" }, jh = { class: "progress-message" }, Hh = {
  key: 0,
  class: "progress-steps"
}, Kh = { class: "step-icon" }, qh = { class: "step-label" }, Yh = /* @__PURE__ */ ne({
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
    function n(f) {
      const v = c.steps.find((u) => u.id === f);
      return v ? c.progress >= v.progressThreshold ? "completed" : c.currentPhase === f ? "active" : "pending" : "pending";
    }
    function i(f) {
      const v = n(f);
      return v === "completed" ? "✓" : v === "active" ? "⟳" : "○";
    }
    return (f, v) => (s(), o("div", Vh, [
      y(Us, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Wh, [
        e("span", Gh, a(t.progress) + "%", 1),
        e("span", jh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Hh, [
        (s(!0), o(W, null, ae(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: pe(["step", n(u.id)])
        }, [
          e("span", Kh, a(i(u.id)), 1),
          e("span", qh, a(u.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), ks = /* @__PURE__ */ le(Yh, [["__scopeId", "data-v-9d1de66c"]]), Jh = {
  key: 0,
  class: "create-env-form"
}, Xh = { class: "form-field" }, Qh = { class: "form-field" }, Zh = ["value"], e1 = { class: "form-field" }, t1 = ["disabled"], s1 = ["value"], o1 = { class: "form-field" }, n1 = ["value"], a1 = { class: "form-field form-field--checkbox" }, l1 = { class: "form-checkbox" }, i1 = {
  key: 1,
  class: "create-env-progress"
}, r1 = { class: "creating-intro" }, d1 = {
  key: 0,
  class: "progress-warning"
}, c1 = {
  key: 1,
  class: "create-error"
}, u1 = { class: "error-message" }, m1 = {
  key: 1,
  class: "footer-status"
}, v1 = 10, f1 = /* @__PURE__ */ ne({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: f, getCreateProgress: v } = Ye(), u = h(""), m = h(mo), d = h("latest"), p = h(vo), w = h(!1), k = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = h(!1), b = h(!1), T = h({
      progress: 0,
      message: ""
    });
    let R = null, $ = 0;
    const C = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], B = h(null);
    function S() {
      b.value || n("close");
    }
    async function M() {
      const D = u.value.trim();
      if (D) {
        b.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const A = {
            name: D,
            python_version: m.value,
            comfyui_version: d.value,
            torch_backend: p.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, de = await f(A);
          de.status === "started" ? Q() : de.status === "error" && (T.value = {
            progress: 0,
            message: de.message || "Failed to start creation",
            error: de.message
          });
        } catch (A) {
          T.value = {
            progress: 0,
            message: A instanceof Error ? A.message : "Unknown error",
            error: A instanceof Error ? A.message : "Unknown error"
          };
        }
      }
    }
    function Q() {
      R || ($ = 0, R = window.setInterval(async () => {
        try {
          const D = await v();
          $ = 0, T.value = {
            progress: D.progress ?? 0,
            message: D.message,
            phase: D.phase,
            error: D.error
          }, D.state === "complete" ? (F(), n("created", D.environment_name || u.value.trim(), w.value)) : D.state === "error" ? (F(), T.value.error = D.error || D.message) : D.state === "idle" && b.value && (F(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= v1 && (F(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      R && (clearInterval(R), R = null);
    }
    function j() {
      b.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function x() {
      _.value = !0;
      try {
        k.value = await i();
      } catch (D) {
        console.error("Failed to load ComfyUI releases:", D);
      } finally {
        _.value = !1;
      }
    }
    return je(async () => {
      var D;
      await Io(), (D = B.value) == null || D.focus(), x();
    }), Ms(() => {
      F();
    }), (D, A) => (s(), I(lt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !b.value,
      onClose: S
    }, {
      body: l(() => [
        b.value ? (s(), o("div", i1, [
          e("p", r1, [
            A[11] || (A[11] = g(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            A[12] || (A[12] = g("... ", -1))
          ]),
          y(ks, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? r("", !0) : (s(), o("p", d1, " This may take several minutes. Please wait... ")),
          T.value.error ? (s(), o("div", c1, [
            e("p", u1, a(T.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", Jh, [
          e("div", Xh, [
            A[6] || (A[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ue(e("input", {
              ref_key: "nameInput",
              ref: B,
              "onUpdate:modelValue": A[0] || (A[0] = (de) => u.value = de),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: xt(M, ["enter"])
            }, null, 544), [
              [Ft, u.value]
            ])
          ]),
          e("div", Qh, [
            A[7] || (A[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": A[1] || (A[1] = (de) => m.value = de),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ae(Re(uo), (de) => (s(), o("option", {
                key: de,
                value: de
              }, a(de), 9, Zh))), 128))
            ], 512), [
              [Et, m.value]
            ])
          ]),
          e("div", e1, [
            A[8] || (A[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": A[2] || (A[2] = (de) => d.value = de),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(W, null, ae(k.value, (de) => (s(), o("option", {
                key: de.tag_name,
                value: de.tag_name
              }, a(de.name), 9, s1))), 128))
            ], 8, t1), [
              [Et, d.value]
            ])
          ]),
          e("div", o1, [
            A[9] || (A[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": A[3] || (A[3] = (de) => p.value = de),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ae(Re(zs), (de) => (s(), o("option", {
                key: de,
                value: de
              }, a(de) + a(de === "auto" ? " (detect GPU)" : ""), 9, n1))), 128))
            ], 512), [
              [Et, p.value]
            ])
          ]),
          e("div", a1, [
            e("label", l1, [
              Ue(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[4] || (A[4] = (de) => w.value = de)
              }, null, 512), [
                [hs, w.value]
              ]),
              A[10] || (A[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        b.value ? (s(), o(W, { key: 1 }, [
          T.value.error ? (s(), I(we, {
            key: 0,
            variant: "secondary",
            onClick: j
          }, {
            default: l(() => [...A[15] || (A[15] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", m1, " Creating environment... "))
        ], 64)) : (s(), o(W, { key: 0 }, [
          y(we, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: M
          }, {
            default: l(() => [...A[13] || (A[13] = [
              g(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          y(we, {
            variant: "secondary",
            onClick: A[5] || (A[5] = (de) => n("close"))
          }, {
            default: l(() => [...A[14] || (A[14] = [
              g(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), p1 = /* @__PURE__ */ le(f1, [["__scopeId", "data-v-f37eaa42"]]), g1 = /* @__PURE__ */ ne({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: f } = Ye(), v = h([]), u = h(!1), m = h(null), d = h(""), p = h(!1), w = h(!1), k = h(null), _ = O(() => {
      if (!d.value.trim()) return v.value;
      const B = d.value.toLowerCase();
      return v.value.filter(
        (S) => {
          var M;
          return S.name.toLowerCase().includes(B) || ((M = S.current_branch) == null ? void 0 : M.toLowerCase().includes(B));
        }
      );
    });
    function b(B, S) {
      w.value = !1, i("created", B, S);
    }
    function T() {
      w.value = !0;
    }
    function R(B) {
      k.value = B;
    }
    function $(B) {
      k.value = null, i("delete", B);
    }
    async function C() {
      u.value = !0, m.value = null;
      try {
        v.value = await f();
      } catch (B) {
        m.value = B instanceof Error ? B.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return je(C), c({
      loadEnvironments: C,
      openCreateModal: T
    }), (B, S) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (M) => p.value = !0)
          }, {
            actions: l(() => [
              y(te, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: l(() => [...S[6] || (S[6] = [
                  g(" Create ", -1)
                ])]),
                _: 1
              }),
              y(te, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: l(() => [...S[7] || (S[7] = [
                  g(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          y(Yt, {
            modelValue: d.value,
            "onUpdate:modelValue": S[1] || (S[1] = (M) => d.value = M),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), I(Rt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), I(Mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            _.value.length ? (s(), I(Be, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(_.value, (M) => (s(), I(wh, {
                  key: M.name,
                  "environment-name": M.name,
                  "is-current": M.is_current,
                  "current-branch": M.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    M.is_current ? r("", !0) : (s(), I(te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => B.$emit("switch", M.name)
                    }, {
                      default: l(() => [...S[8] || (S[8] = [
                        g(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    y(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Q) => R(M)
                    }, {
                      default: l(() => [...S[9] || (S[9] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            _.value.length ? r("", !0) : (s(), I(kt, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Vt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  y(te, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: l(() => [...S[10] || (S[10] = [
                      g(" Create Environment ", -1)
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
      y(bt, {
        show: p.value,
        title: "About Environments",
        onClose: S[3] || (S[3] = (M) => p.value = !1)
      }, {
        content: l(() => [...S[11] || (S[11] = [
          e("p", null, [
            e("strong", null, "Environments"),
            g(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          y(te, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (M) => p.value = !1)
          }, {
            default: l(() => [...S[12] || (S[12] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), I(Ah, {
        key: 0,
        environment: k.value,
        "can-delete": v.value.length > 1,
        onClose: S[4] || (S[4] = (M) => k.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      w.value ? (s(), I(p1, {
        key: 1,
        onClose: S[5] || (S[5] = (M) => w.value = !1),
        onCreated: b
      })) : r("", !0)
    ], 64));
  }
}), h1 = /* @__PURE__ */ le(g1, [["__scopeId", "data-v-f95999f4"]]), y1 = { class: "file-path" }, w1 = { class: "file-path-text" }, k1 = ["title"], b1 = /* @__PURE__ */ ne({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = h(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, v) => (s(), o("div", y1, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", w1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, k1)) : r("", !0)
    ]));
  }
}), _1 = /* @__PURE__ */ le(b1, [["__scopeId", "data-v-f0982173"]]), $1 = { class: "export-blocked" }, C1 = { class: "issues-list" }, x1 = { class: "issue-message" }, S1 = {
  key: 0,
  class: "issue-details"
}, I1 = ["onClick"], E1 = { class: "issue-fix" }, P1 = /* @__PURE__ */ ne({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = bs({});
    function i(f) {
      const v = c.issues[f];
      return n[f] || v.details.length <= 3 ? v.details : v.details.slice(0, 3);
    }
    return (f, v) => (s(), I(lt, {
      title: "Cannot Export",
      size: "md",
      onClose: v[1] || (v[1] = (u) => f.$emit("close"))
    }, {
      body: l(() => [
        e("div", $1, [
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
          e("div", C1, [
            (s(!0), o(W, null, ae(t.issues, (u, m) => (s(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", x1, a(u.message), 1),
              u.details.length ? (s(), o("div", S1, [
                (s(!0), o(W, null, ae(i(m), (d, p) => (s(), o("div", {
                  key: p,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                u.details.length > 3 && !n[m] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[m] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, I1)) : r("", !0)
              ])) : r("", !0),
              e("div", E1, [
                u.type === "uncommitted_workflows" ? (s(), o(W, { key: 0 }, [
                  g(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(W, { key: 1 }, [
                  g(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(W, { key: 2 }, [
                  g(" Resolve all workflow issues before exporting. ")
                ], 64)) : r("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        y(we, {
          variant: "primary",
          onClick: v[0] || (v[0] = (u) => f.$emit("close"))
        }, {
          default: l(() => [...v[3] || (v[3] = [
            g(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), fo = /* @__PURE__ */ le(P1, [["__scopeId", "data-v-b52f5e32"]]), R1 = { class: "export-warnings" }, M1 = {
  key: 0,
  class: "success-header"
}, T1 = { class: "warning-header" }, D1 = { class: "warning-summary" }, L1 = { class: "warning-title" }, z1 = { class: "models-section" }, U1 = { class: "models-list" }, N1 = { class: "model-info" }, O1 = { class: "model-filename" }, A1 = { class: "model-workflows" }, B1 = ["onClick"], F1 = /* @__PURE__ */ ne({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(!1), v = h(null), u = O(() => f.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      v.value = null, i("revalidate");
    }
    return (d, p) => (s(), o(W, null, [
      y(lt, {
        title: "Export Warnings",
        size: "md",
        onClose: p[3] || (p[3] = (w) => d.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", R1, [
            t.models.length === 0 ? (s(), o("div", M1, [...p[4] || (p[4] = [
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
            ])])) : (s(), o(W, { key: 1 }, [
              e("div", T1, [
                p[6] || (p[6] = e("span", { class: "warning-icon" }, [
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
                e("div", D1, [
                  e("h3", L1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  p[5] || (p[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", z1, [
                e("div", U1, [
                  (s(!0), o(W, null, ae(u.value, (w) => (s(), o("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    e("div", N1, [
                      e("div", O1, a(w.filename), 1),
                      e("div", A1, " Used by: " + a(w.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (k) => v.value = w.hash
                    }, " Add Source ", 8, B1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !f.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: p[0] || (p[0] = (w) => f.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          y(we, {
            variant: "secondary",
            onClick: p[1] || (p[1] = (w) => d.$emit("cancel"))
          }, {
            default: l(() => [...p[7] || (p[7] = [
              g(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          y(we, {
            variant: "primary",
            onClick: p[2] || (p[2] = (w) => d.$emit("confirm"))
          }, {
            default: l(() => [
              g(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      v.value ? (s(), I(Ls, {
        key: 0,
        identifier: v.value,
        onClose: m
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), po = /* @__PURE__ */ le(F1, [["__scopeId", "data-v-b698d882"]]), V1 = { class: "export-card" }, W1 = { class: "export-path-row" }, G1 = { class: "export-actions" }, j1 = {
  key: 1,
  class: "export-warning"
}, H1 = /* @__PURE__ */ ne({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Ye(), i = h(""), f = h(!1), v = h(!1), u = h(!1), m = h(null), d = h(!1), p = h(null), w = h(!1), k = h(!1), _ = O(() => f.value ? "Validating..." : v.value ? "Exporting..." : "Export Environment");
    async function b() {
      f.value = !0, m.value = null;
      try {
        const S = await c();
        p.value = S, S.can_export ? S.warnings.models_without_sources.length > 0 ? k.value = !0 : await $() : w.value = !0;
      } catch (S) {
        m.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Validation failed"
        };
      } finally {
        f.value = !1;
      }
    }
    async function T() {
      k.value = !1, await $();
    }
    async function R() {
      try {
        const S = await c();
        p.value = S;
      } catch (S) {
        console.error("Re-validation failed:", S);
      }
    }
    async function $() {
      v.value = !0;
      try {
        const S = await n(i.value || void 0);
        m.value = S;
      } catch (S) {
        m.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Export failed"
        };
      } finally {
        v.value = !1;
      }
    }
    async function C() {
      var S;
      if ((S = m.value) != null && S.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (M) {
          console.error("Failed to copy path:", M);
        }
    }
    async function B() {
      var S;
      if ((S = m.value) != null && S.path) {
        u.value = !0;
        try {
          const M = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!M.ok)
            throw new Error(`Download failed: ${M.statusText}`);
          const Q = await M.blob(), F = URL.createObjectURL(Q), j = m.value.path.split("/").pop() || "environment-export.tar.gz", x = document.createElement("a");
          x.href = F, x.download = j, document.body.appendChild(x), x.click(), document.body.removeChild(x), URL.revokeObjectURL(F);
        } catch (M) {
          console.error("Failed to download:", M), alert(`Download failed: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (S, M) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (Q) => d.value = !0)
          })
        ]),
        content: l(() => [
          y(Be, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", V1, [
                M[7] || (M[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", W1, [
                  y(ys, {
                    modelValue: i.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (Q) => i.value = Q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", G1, [
                  y(te, {
                    variant: "primary",
                    size: "md",
                    loading: f.value || v.value,
                    disabled: f.value || v.value,
                    onClick: b
                  }, {
                    default: l(() => [
                      M[6] || (M[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      g(" " + a(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          m.value ? (s(), I(Be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              y(ot, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Vt({
                icon: l(() => [
                  g(a(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  g(a(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  g(a(m.value.status === "success" ? "Your environment has been exported" : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    y(Ge, { label: "Saved to:" }, {
                      default: l(() => [
                        y(_1, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), I(Ge, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", j1, [...M[8] || (M[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    y(te, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: B
                    }, {
                      default: l(() => [...M[9] || (M[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    y(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: l(() => [...M[10] || (M[10] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    y(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: M[2] || (M[2] = (Q) => m.value = null)
                    }, {
                      default: l(() => [...M[11] || (M[11] = [
                        g(" Dismiss ", -1)
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
      y(bt, {
        show: d.value,
        title: "What Gets Exported",
        onClose: M[3] || (M[3] = (Q) => d.value = !1)
      }, {
        content: l(() => [...M[12] || (M[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  g(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  g(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  g(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  g(" — Environment settings and metadata")
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
              g(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      w.value && p.value ? (s(), I(fo, {
        key: 0,
        issues: p.value.blocking_issues,
        onClose: M[4] || (M[4] = (Q) => w.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      k.value && p.value ? (s(), I(po, {
        key: 1,
        models: p.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: M[5] || (M[5] = (Q) => k.value = !1),
        onRevalidate: R
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), K1 = /* @__PURE__ */ le(H1, [["__scopeId", "data-v-f4d120f2"]]), q1 = { class: "file-input-wrapper" }, Y1 = ["accept", "multiple", "disabled"], J1 = /* @__PURE__ */ ne({
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
    const i = n, f = h(null);
    function v() {
      var m;
      (m = f.value) == null || m.click();
    }
    function u(m) {
      const d = m.target;
      d.files && d.files.length > 0 && (i("change", d.files), d.value = "");
    }
    return c({
      triggerInput: v
    }), (m, d) => (s(), o("div", q1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, Y1),
      y(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: l(() => [
          Me(m.$slots, "default", {}, () => [
            d[0] || (d[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            g(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), X1 = /* @__PURE__ */ le(J1, [["__scopeId", "data-v-cd192091"]]), Q1 = {
  key: 0,
  class: "drop-zone-empty"
}, Z1 = { class: "drop-zone-text" }, ey = { class: "drop-zone-primary" }, ty = { class: "drop-zone-secondary" }, sy = { class: "drop-zone-actions" }, oy = {
  key: 1,
  class: "drop-zone-file"
}, ny = { class: "file-info" }, ay = { class: "file-details" }, ly = { class: "file-name" }, iy = { class: "file-size" }, ry = /* @__PURE__ */ ne({
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
    const n = c, i = h(!1), f = h(null), v = h(0), u = O(() => f.value !== null), m = O(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.name) || "";
    }), d = O(() => {
      if (!f.value) return "";
      const $ = f.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function p($) {
      var C;
      $.stopPropagation(), v.value++, (C = $.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function w($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function k($) {
      $.stopPropagation(), v.value--, v.value === 0 && (i.value = !1);
    }
    function _($) {
      var B;
      $.stopPropagation(), v.value = 0, i.value = !1;
      const C = (B = $.dataTransfer) == null ? void 0 : B.files;
      C && C.length > 0 && T(C[0]);
    }
    function b($) {
      $.length > 0 && T($[0]);
    }
    function T($) {
      f.value = $, n("fileSelected", $);
    }
    function R() {
      f.value = null, n("clear");
    }
    return ($, C) => (s(), o("div", {
      class: pe(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Ve(p, ["prevent"]),
      onDragover: Ve(w, ["prevent"]),
      onDragleave: Ve(k, ["prevent"]),
      onDrop: Ve(_, ["prevent"])
    }, [
      u.value ? (s(), o("div", oy, [
        e("div", ny, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", ay, [
            e("div", ly, a(m.value), 1),
            e("div", iy, a(d.value), 1)
          ])
        ]),
        y(te, {
          variant: "ghost",
          size: "xs",
          onClick: R,
          title: "Remove file"
        }, {
          default: l(() => [...C[2] || (C[2] = [
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
      ])) : (s(), o("div", Q1, [
        C[0] || (C[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Z1, [
          e("p", ey, a(t.primaryText), 1),
          e("p", ty, a(t.secondaryText), 1)
        ]),
        e("div", sy, [
          y(X1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: b
          }, {
            default: l(() => [
              g(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), dy = /* @__PURE__ */ le(ry, [["__scopeId", "data-v-0f79cb86"]]), cy = { class: "import-preview" }, uy = { class: "preview-header" }, my = {
  key: 0,
  class: "source-env"
}, vy = { class: "preview-content" }, fy = { class: "preview-section" }, py = { class: "section-header" }, gy = { class: "section-info" }, hy = { class: "section-count" }, yy = {
  key: 0,
  class: "item-list"
}, wy = { class: "item-name" }, ky = {
  key: 0,
  class: "item-more"
}, by = { class: "preview-section" }, _y = { class: "section-header" }, $y = { class: "section-info" }, Cy = { class: "section-count" }, xy = {
  key: 0,
  class: "item-list"
}, Sy = { class: "item-details" }, Iy = { class: "item-name" }, Ey = { class: "item-meta" }, Py = {
  key: 0,
  class: "item-more"
}, Ry = { class: "preview-section" }, My = { class: "section-header" }, Ty = { class: "section-info" }, Dy = { class: "section-count" }, Ly = {
  key: 0,
  class: "item-list"
}, zy = { class: "item-name" }, Uy = {
  key: 0,
  class: "item-more"
}, Ny = {
  key: 0,
  class: "preview-section"
}, Oy = { class: "git-info" }, Ay = /* @__PURE__ */ ne({
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
    const c = t, n = O(() => c.workflows.length), i = O(() => c.models.length), f = O(() => c.nodes.length);
    function v(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, m) => (s(), o("div", cy, [
      e("div", uy, [
        y(vt, null, {
          default: l(() => [...m[0] || (m[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", my, [
          m[1] || (m[1] = g(" From: ", -1)),
          y(Ss, null, {
            default: l(() => [
              g(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", vy, [
        e("div", fy, [
          e("div", py, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", gy, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", hy, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", yy, [
            (s(!0), o(W, null, ae(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", wy, a(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", ky, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", by, [
          e("div", _y, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", $y, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Cy, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", xy, [
            (s(!0), o(W, null, ae(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Sy, [
                e("span", Iy, a(d.filename), 1),
                e("span", Ey, a(v(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Py, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Ry, [
          e("div", My, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Ty, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Dy, a(f.value) + " node" + a(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Ly, [
            (s(!0), o(W, null, ae(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", zy, a(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Uy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Ny, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Oy, [
            t.gitBranch ? (s(), I(Ge, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                y(Ss, null, {
                  default: l(() => [
                    g(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), I(Ge, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                y(so, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), By = /* @__PURE__ */ le(Ay, [["__scopeId", "data-v-182fe113"]]), Fy = { class: "import-config" }, Vy = { class: "config-container" }, Wy = { class: "config-field" }, Gy = { class: "input-wrapper" }, jy = ["value"], Hy = {
  key: 0,
  class: "validating-indicator"
}, Ky = {
  key: 1,
  class: "valid-indicator"
}, qy = {
  key: 0,
  class: "field-error"
}, Yy = { class: "config-field" }, Jy = { class: "strategy-options" }, Xy = ["value", "checked", "onChange"], Qy = { class: "strategy-content" }, Zy = { class: "strategy-label" }, e0 = { class: "strategy-description" }, t0 = { class: "config-field switch-field" }, s0 = { class: "switch-label" }, o0 = ["checked"], n0 = { class: "advanced-section" }, a0 = { class: "advanced-content" }, l0 = { class: "config-field" }, i0 = ["value"], r0 = ["value"], d0 = /* @__PURE__ */ ne({
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
    const n = t, i = c, f = h(!1), v = h(!1);
    St(() => n.nameError, (w) => {
      f.value = !1, v.value = !w && n.name.length > 0;
    });
    const u = [
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
    let m = null;
    function d(w) {
      const k = w.target.value;
      i("update:name", k), v.value = !1, m && clearTimeout(m), k.length > 0 ? (f.value = !0, m = setTimeout(() => {
        i("validate-name", k);
      }, 400)) : f.value = !1;
    }
    function p() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (w, k) => (s(), o("div", Fy, [
      y(vt, null, {
        default: l(() => [...k[2] || (k[2] = [
          g("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Vy, [
        e("div", Wy, [
          y(ps, { required: "" }, {
            default: l(() => [...k[3] || (k[3] = [
              g("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Gy, [
            e("input", {
              type: "text",
              class: pe(["name-input", { error: t.nameError || t.name.length === 0, valid: v.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: p
            }, null, 42, jy),
            f.value ? (s(), o("span", Hy, "...")) : v.value ? (s(), o("span", Ky, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", qy, a(t.nameError), 1)) : r("", !0),
          k[4] || (k[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Yy, [
          y(ps, null, {
            default: l(() => [...k[5] || (k[5] = [
              g("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Jy, [
            (s(), o(W, null, ae(u, (_) => e("label", {
              key: _.value,
              class: pe(["strategy-option", { active: t.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: t.modelStrategy === _.value,
                onChange: (b) => i("update:modelStrategy", _.value)
              }, null, 40, Xy),
              e("div", Qy, [
                e("span", Zy, a(_.label), 1),
                e("span", e0, a(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", t0, [
          e("label", s0, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: k[0] || (k[0] = (_) => i("update:switchAfterImport", _.target.checked))
            }, null, 40, o0),
            k[6] || (k[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", n0, [
          k[8] || (k[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", a0, [
            e("div", l0, [
              y(ps, null, {
                default: l(() => [...k[7] || (k[7] = [
                  g("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: k[1] || (k[1] = (_) => i("update:torchBackend", _.target.value))
              }, [
                (s(!0), o(W, null, ae(Re(zs), (_) => (s(), o("option", {
                  key: _,
                  value: _
                }, a(_) + a(_ === "auto" ? " (detect GPU)" : ""), 9, r0))), 128))
              ], 40, i0)
            ])
          ])
        ])
      ])
    ]));
  }
}), c0 = /* @__PURE__ */ le(d0, [["__scopeId", "data-v-89ea06a1"]]), u0 = { class: "import-flow" }, m0 = {
  key: 0,
  class: "import-empty"
}, v0 = { class: "git-import-section" }, f0 = { class: "git-url-input-row" }, p0 = ["disabled"], g0 = {
  key: 0,
  class: "git-error"
}, h0 = {
  key: 1,
  class: "import-configure"
}, y0 = { class: "selected-file-bar" }, w0 = {
  key: 0,
  class: "file-bar-content"
}, k0 = { class: "file-bar-info" }, b0 = { class: "file-bar-name" }, _0 = { class: "file-bar-size" }, $0 = {
  key: 1,
  class: "file-bar-content"
}, C0 = { class: "file-bar-info" }, x0 = { class: "file-bar-name" }, S0 = {
  key: 0,
  class: "preview-loading"
}, I0 = { class: "import-actions" }, E0 = {
  key: 2,
  class: "import-progress"
}, P0 = { class: "creating-intro" }, R0 = {
  key: 0,
  class: "progress-warning"
}, M0 = {
  key: 1,
  class: "import-error"
}, T0 = { class: "error-message" }, D0 = {
  key: 3,
  class: "import-complete"
}, L0 = { class: "complete-message" }, z0 = { class: "complete-title" }, U0 = { class: "complete-details" }, N0 = { class: "complete-actions" }, O0 = /* @__PURE__ */ ne({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Ne, ue, he, Ie;
    const i = t, f = n, { previewTarballImport: v, previewGitImport: u, validateEnvironmentName: m, executeImport: d, executeGitImport: p, getImportProgress: w } = Ye();
    let k = null;
    const _ = h(null), b = h(i.resumeImport ?? !1), T = h(!1), R = h(!1), $ = h(""), C = h(!1), B = h(null), S = h(""), M = h(null), Q = h(!1), F = h(null), j = h(null), x = h({
      name: ((Ne = i.initialProgress) == null ? void 0 : Ne.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), D = h(null), A = h({
      message: ((ue = i.initialProgress) == null ? void 0 : ue.message) ?? "Preparing import...",
      phase: ((he = i.initialProgress) == null ? void 0 : he.phase) ?? "",
      progress: ((Ie = i.initialProgress) == null ? void 0 : Ie.progress) ?? 0,
      error: null
    }), de = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ee = O(() => {
      if (!j.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const Z = j.value;
      return {
        sourceEnvironment: Z.comfyui_version ? `ComfyUI ${Z.comfyui_version}` : "Unknown",
        workflows: Z.workflows.map((ie) => ie.name),
        models: Z.models.map((ie) => ({
          filename: ie.filename,
          size: 0,
          type: ie.relative_path.split("/")[0] || "model"
        })),
        nodes: Z.nodes.map((ie) => ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), Y = O(() => !C.value && !B.value && j.value && x.value.name.length > 0 && !D.value && (_.value || M.value));
    async function re(Z) {
      _.value = Z, C.value = !0, B.value = null, j.value = null;
      try {
        const ie = await v(Z);
        j.value = ie;
      } catch (ie) {
        B.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        C.value = !1;
      }
    }
    function X() {
      _.value = null, M.value = null, S.value = "", F.value = null, T.value = !1, R.value = !1, $.value = "", j.value = null, B.value = null, x.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, D.value = null, f("source-cleared");
    }
    function N() {
      Se(), X(), b.value = !1, C.value = !1, Q.value = !1, A.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function z() {
      if (S.value.trim()) {
        Q.value = !0, F.value = null;
        try {
          const Z = await u(S.value.trim());
          M.value = S.value.trim(), j.value = Z;
        } catch (Z) {
          F.value = Z instanceof Error ? Z.message : "Failed to analyze repository";
        } finally {
          Q.value = !1;
        }
      }
    }
    function E(Z) {
      try {
        const ie = new URL(Z);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return Z;
      }
    }
    async function ce(Z) {
      if (!Z) {
        D.value = "Environment name is required";
        return;
      }
      try {
        const ie = await m(Z);
        D.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        D.value = "Failed to validate name";
      }
    }
    async function se() {
      if (x.value.name && !(!_.value && !M.value)) {
        b.value = !0, T.value = !1, A.value = { message: `Creating environment '${x.value.name}'...`, phase: "", progress: 0, error: null }, f("import-started");
        try {
          let Z;
          if (_.value)
            Z = await d(
              _.value,
              x.value.name,
              x.value.modelStrategy,
              x.value.torchBackend
            );
          else if (M.value)
            Z = await p(
              M.value,
              x.value.name,
              x.value.modelStrategy,
              x.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Z.status === "started" ? ke() : (R.value = !1, $.value = Z.message, b.value = !1, T.value = !0);
        } catch (Z) {
          R.value = !1, $.value = Z instanceof Error ? Z.message : "Unknown error occurred during import", b.value = !1, T.value = !0;
        }
      }
    }
    async function ke() {
      if (k) return;
      const Z = async () => {
        try {
          const ge = await w();
          return A.value = {
            message: ge.message,
            phase: ge.phase || "",
            progress: ge.progress ?? (ge.state === "importing" ? 50 : 0),
            error: ge.error || null
          }, ge.state === "complete" ? (Se(), R.value = !0, $.value = `Environment '${ge.environment_name}' created successfully`, b.value = !1, T.value = !0, ge.environment_name && f("import-complete", ge.environment_name, x.value.switchAfterImport), !1) : ge.state === "error" ? (Se(), R.value = !1, $.value = ge.error || ge.message, b.value = !1, T.value = !0, !1) : !0;
        } catch (ge) {
          return console.error("Failed to poll import progress:", ge), !0;
        }
      };
      await Z() && (k = setInterval(async () => {
        await Z() || Se();
      }, 2e3));
    }
    function Se() {
      k && (clearInterval(k), k = null);
    }
    function Te(Z) {
      return Z < 1024 ? `${Z} B` : Z < 1024 * 1024 ? `${(Z / 1024).toFixed(1)} KB` : Z < 1024 * 1024 * 1024 ? `${(Z / (1024 * 1024)).toFixed(1)} MB` : `${(Z / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return je(async () => {
      try {
        const Z = await w();
        console.log("[ComfyGit ImportFlow] Import progress check:", Z.state, Z), Z.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Z.environment_name), b.value = !0, x.value.name = Z.environment_name || x.value.name || "", A.value = {
          progress: Z.progress ?? 0,
          message: Z.message || "Importing...",
          phase: Z.phase || "",
          error: null
        }, ke());
      } catch (Z) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Z);
      }
    }), c({
      handleReset: N,
      isImporting: b,
      canImport: Y
    }), (Z, ie) => {
      var ge;
      return s(), o("div", u0, [
        !_.value && !M.value && !b.value ? (s(), o("div", m0, [
          y(dy, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: re
          }),
          ie[7] || (ie[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", v0, [
            ie[5] || (ie[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", f0, [
              Ue(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (Oe) => S.value = Oe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: xt(z, ["enter"]),
                disabled: Q.value
              }, null, 40, p0), [
                [Ft, S.value]
              ]),
              y(te, {
                variant: "primary",
                size: "sm",
                disabled: !S.value.trim() || Q.value,
                onClick: z
              }, {
                default: l(() => [
                  g(a(Q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (s(), o("div", g0, a(F.value), 1)) : r("", !0),
            ie[6] || (ie[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || M.value) && !b.value && !T.value ? (s(), o("div", h0, [
          e("div", y0, [
            _.value ? (s(), o("div", w0, [
              ie[8] || (ie[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", k0, [
                e("div", b0, a(_.value.name), 1),
                e("div", _0, a(Te(_.value.size)), 1)
              ])
            ])) : M.value ? (s(), o("div", $0, [
              ie[10] || (ie[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", C0, [
                e("div", x0, a(E(M.value)), 1),
                ie[9] || (ie[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            y(te, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: l(() => [...ie[11] || (ie[11] = [
                g(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", S0, [...ie[12] || (ie[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : B.value ? (s(), I(ht, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [B.value]
          }, null, 8, ["details"])) : j.value ? (s(), I(By, {
            key: 2,
            "source-environment": ee.value.sourceEnvironment,
            workflows: ee.value.workflows,
            models: ee.value.models,
            nodes: ee.value.nodes,
            "git-branch": ee.value.gitBranch,
            "git-commit": ee.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          j.value ? (s(), I(c0, {
            key: 3,
            name: x.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (Oe) => x.value.name = Oe),
            "model-strategy": x.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (Oe) => x.value.modelStrategy = Oe),
            "torch-backend": x.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (Oe) => x.value.torchBackend = Oe),
            "switch-after-import": x.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (Oe) => x.value.switchAfterImport = Oe),
            "name-error": D.value,
            onValidateName: ce
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          x.value.modelStrategy === "skip" && ((ge = j.value) != null && ge.models_needing_download) ? (s(), I(ht, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", I0, [
            y(te, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: l(() => [...ie[13] || (ie[13] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            y(te, {
              variant: "primary",
              size: "md",
              disabled: !Y.value,
              onClick: se
            }, {
              default: l(() => [...ie[14] || (ie[14] = [
                g(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : b.value ? (s(), o("div", E0, [
          e("p", P0, [
            ie[15] || (ie[15] = g(" Importing environment ", -1)),
            e("strong", null, a(x.value.name), 1),
            ie[16] || (ie[16] = g("... ", -1))
          ]),
          y(ks, {
            progress: A.value.progress,
            message: A.value.message,
            "current-phase": A.value.phase,
            variant: A.value.error ? "error" : "default",
            "show-steps": !0,
            steps: de
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          A.value.error ? r("", !0) : (s(), o("p", R0, " This may take several minutes. Please wait... ")),
          A.value.error ? (s(), o("div", M0, [
            e("p", T0, a(A.value.error), 1)
          ])) : r("", !0)
        ])) : T.value ? (s(), o("div", D0, [
          e("div", {
            class: pe(["complete-icon", R.value ? "success" : "error"])
          }, a(R.value ? "✓" : "✕"), 3),
          e("div", L0, [
            e("div", z0, a(R.value ? "Import Successful" : "Import Failed"), 1),
            e("div", U0, a($.value), 1)
          ]),
          e("div", N0, [
            y(te, {
              variant: "primary",
              size: "md",
              onClick: N
            }, {
              default: l(() => [...ie[17] || (ie[17] = [
                g(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), go = /* @__PURE__ */ le(O0, [["__scopeId", "data-v-72cbc04e"]]), A0 = /* @__PURE__ */ ne({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = h(!1);
    function f(v, u) {
      u && n("import-complete-switch", v);
    }
    return (v, u) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (m) => i.value = !0)
          })
        ]),
        content: l(() => [
          y(go, { onImportComplete: f })
        ]),
        _: 1
      }),
      y(bt, {
        show: i.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (m) => i.value = !1)
      }, {
        content: l(() => [...u[2] || (u[2] = [
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
}), B0 = /* @__PURE__ */ le(A0, [["__scopeId", "data-v-e13bfe76"]]), F0 = { class: "remote-header" }, V0 = { class: "remote-info" }, W0 = { class: "remote-icon" }, G0 = { class: "remote-name" }, j0 = {
  key: 0,
  class: "default-badge"
}, H0 = {
  key: 1,
  class: "sync-badge"
}, K0 = {
  key: 0,
  class: "ahead"
}, q0 = {
  key: 1,
  class: "behind"
}, Y0 = {
  key: 1,
  class: "synced"
}, J0 = ["href"], X0 = {
  key: 1,
  class: "remote-url-text"
}, Q0 = { class: "remote-actions" }, Z0 = /* @__PURE__ */ ne({
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
    const c = t, n = O(() => c.remote.is_default), i = O(() => {
      const v = c.remote.fetch_url, u = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return u ? `https://${u[1]}/${u[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), f = O(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, u) => (s(), o("div", {
      class: pe(["deploy-remote-card", { selected: t.isSelected }])
    }, [
      e("div", F0, [
        e("div", V0, [
          e("span", W0, a(n.value ? "🔗" : "🌐"), 1),
          e("span", G0, a(t.remote.name), 1),
          n.value ? (s(), o("span", j0, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", H0, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", K0, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", q0, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", Y0, "✓ synced"))
          ])) : r("", !0)
        ]),
        i.value ? (s(), o("a", {
          key: 0,
          href: i.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: u[0] || (u[0] = Ve(() => {
          }, ["stop"]))
        }, a(f.value), 9, J0)) : (s(), o("span", X0, a(f.value), 1))
      ]),
      e("div", Q0, [
        y(te, {
          variant: "secondary",
          size: "xs",
          loading: t.isFetching,
          onClick: u[1] || (u[1] = (m) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...u[4] || (u[4] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        t.syncStatus && t.syncStatus.ahead > 0 ? (s(), I(te, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: t.isPushing,
          onClick: u[2] || (u[2] = (m) => v.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push ↑" + a(t.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : r("", !0),
        y(te, {
          variant: t.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: u[3] || (u[3] = (m) => v.$emit("select", t.remote.name))
        }, {
          default: l(() => [
            g(a(t.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), ew = /* @__PURE__ */ le(Z0, [["__scopeId", "data-v-d687d161"]]), tw = { class: "api-key-card" }, sw = { class: "api-key-row" }, ow = { class: "api-key-input-wrapper" }, nw = ["type", "disabled"], aw = ["title"], lw = { class: "status-icon" }, iw = { class: "status-text" }, rw = {
  key: 0,
  class: "credit-balance"
}, dw = { class: "config-card" }, cw = { class: "config-row" }, uw = ["disabled"], mw = {
  key: 0,
  value: ""
}, vw = {
  key: 1,
  value: "",
  disabled: ""
}, fw = ["value", "disabled"], pw = { class: "config-row" }, gw = {
  key: 0,
  class: "loading-inline"
}, hw = { class: "no-volumes-state" }, yw = { class: "no-volumes-text" }, ww = ["value"], kw = { class: "config-row" }, bw = ["disabled"], _w = {
  key: 0,
  value: ""
}, $w = {
  key: 1,
  value: ""
}, Cw = {
  key: 2,
  value: ""
}, xw = ["value"], Sw = { class: "config-row" }, Iw = { class: "radio-group" }, Ew = { class: "radio-option" }, Pw = { class: "radio-label" }, Rw = { class: "radio-option" }, Mw = { class: "radio-label" }, Tw = { class: "config-row" }, Dw = { class: "radio-group" }, Lw = { class: "radio-option" }, zw = { class: "radio-label" }, Uw = { class: "radio-option" }, Nw = { class: "radio-label" }, Ow = { class: "config-row" }, Aw = {
  key: 0,
  class: "loading-text"
}, Bw = {
  key: 1,
  class: "empty-remotes"
}, Fw = { class: "remotes-list" }, Vw = {
  key: 0,
  class: "sync-warning"
}, Ww = { class: "warning-content" }, Gw = { class: "remotes-footer" }, jw = { class: "summary-card" }, Hw = {
  key: 0,
  class: "loading-text"
}, Kw = { class: "summary-row" }, qw = { class: "summary-value" }, Yw = { class: "summary-row" }, Jw = { class: "summary-value" }, Xw = { class: "summary-row" }, Qw = { class: "summary-value" }, Zw = {
  key: 0,
  class: "summary-sub-row"
}, ek = { class: "summary-sub-label" }, tk = {
  key: 1,
  class: "summary-sub-row warning"
}, sk = { class: "summary-sub-label" }, ok = { class: "summary-row" }, nk = { class: "summary-value" }, ak = { class: "summary-row" }, lk = { class: "summary-value" }, ik = { class: "deployment-summary" }, rk = { class: "summary-columns" }, dk = { class: "summary-column" }, ck = { class: "pricing-row" }, uk = { class: "pricing-value" }, mk = { class: "pricing-row" }, vk = { class: "pricing-value" }, fk = { class: "pricing-row" }, pk = { class: "pricing-value" }, gk = { class: "pricing-row total" }, hk = { class: "pricing-value" }, yk = { class: "summary-column" }, wk = { class: "spec-row" }, kk = { class: "spec-row" }, bk = {
  key: 0,
  class: "spec-row"
}, _k = {
  key: 1,
  class: "spec-row spot-warning"
}, $k = {
  key: 4,
  class: "deploy-actions"
}, Ck = { class: "pods-header" }, xk = {
  key: 0,
  class: "loading-text"
}, Sk = {
  key: 1,
  class: "empty-state"
}, Ik = {
  key: 2,
  class: "pods-list"
}, Ek = { class: "pod-header" }, Pk = { class: "pod-name" }, Rk = { class: "pod-details" }, Mk = { class: "pod-gpu" }, Tk = { class: "pod-uptime" }, Dk = { class: "pod-cost" }, Lk = { class: "pod-actions" }, zk = { class: "progress-content" }, Uk = { class: "phase-indicator" }, Nk = { key: 0 }, Ok = { key: 1 }, Ak = { key: 2 }, Bk = {
  key: 3,
  class: "spinner"
}, Fk = { class: "phase-text" }, Vk = { class: "phase-name" }, Wk = { class: "phase-detail" }, Gk = {
  key: 0,
  class: "ready-actions"
}, jk = { class: "console-link" }, Hk = ["href"], Kk = /* @__PURE__ */ ne({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(t, { emit: c }) {
    const n = c, {
      getDeploySummary: i,
      getDataCenters: f,
      testRunPodConnection: v,
      getNetworkVolumes: u,
      getRunPodGpuTypes: m,
      deployToRunPod: d,
      getRunPodPods: p,
      terminateRunPodPod: w,
      stopRunPodPod: k,
      startRunPodPod: _,
      getDeploymentStatus: b,
      getStoredRunPodKey: T,
      clearRunPodKey: R,
      validateDeploy: $,
      getRemotes: C,
      getRemoteSyncStatus: B,
      fetchRemote: S,
      pushToRemote: M
    } = Ye(), Q = h(!1), F = h(!1), j = h(""), x = h(!1), D = h(!1), A = h(null), de = h(null), ee = h(""), Y = h(""), re = h(""), X = h("SECURE"), N = h("ON_DEMAND"), z = h("my-comfyui-deploy"), E = h([]), ce = h({}), se = h(!1), ke = h(null), Se = h(null), Te = h(null), Ne = h([]), ue = h(!1), he = h([]), Ie = h(!1), Z = h([]), ie = h(!1), ge = h(null), Oe = h(!1), Xe = h([]), st = h(!1), Ee = h(!1), Fe = h(null), Qe = h(null), qe = h(null), it = h(null), _e = h(!1), He = h(null), De = h(null), et = h(null), ze = h(!1), fe = h(null), K = h(!1), q = h(!1), P = O(() => he.value.find((J) => J.id === Y.value) || null), V = O(() => ee.value ? he.value.filter((J) => J.data_center_id === ee.value) : he.value), oe = O(() => Z.value.filter((J) => J.available)), be = O(() => ke.value && ce.value[ke.value] || null), We = O(() => {
      if (!ke.value) return null;
      const J = E.value.find((L) => L.name === ke.value);
      return (J == null ? void 0 : J.fetch_url) || null;
    }), ft = O(() => x.value && Y.value && re.value && We.value && !Ee.value && !ze.value), tt = (J) => {
      const L = Z.value.find((Ke) => Ke.id === re.value);
      if (!L) return "0.00";
      if (J === "SECURE") return (L.securePrice ?? 0).toFixed(2);
      if (J === "COMMUNITY") return (L.communityPrice ?? 0).toFixed(2);
      const xe = X.value === "SECURE";
      return J === "ON_DEMAND" ? xe ? (L.securePrice ?? 0).toFixed(2) : (L.communityPrice ?? 0).toFixed(2) : xe ? (L.secureSpotPrice ?? 0).toFixed(2) : (L.communitySpotPrice ?? 0).toFixed(2);
    }, dt = O(() => {
      const J = Z.value.find((At) => At.id === re.value), L = he.value.find((At) => At.id === Y.value);
      if (!J) return null;
      const xe = X.value === "SECURE", Ke = N.value === "SPOT";
      let _t;
      Ke ? _t = xe ? J.secureSpotPrice ?? 0 : J.communitySpotPrice ?? 0 : _t = xe ? J.securePrice ?? 0 : J.communityPrice ?? 0;
      const Dt = L ? L.size_gb * 14e-5 : 0, $e = 4e-3;
      return {
        gpu: _t,
        volume: Dt,
        container: $e,
        total: _t + Dt + $e
      };
    });
    async function ct() {
      console.log("[Deploy] Loading deploy data..."), await es(), console.log("[Deploy] Volumes loaded, region:", ee.value, "GPUs:", Z.value.length), await Promise.all([Wt(), pt(), Tt()]);
    }
    async function Tt() {
      se.value = !0;
      try {
        const J = await C();
        E.value = J.remotes, await Promise.all(
          J.remotes.map(async (xe) => {
            const Ke = await B(xe.name);
            Ke && (ce.value[xe.name] = Ke);
          })
        );
        const L = J.remotes.find((xe) => xe.is_default);
        L ? ke.value = L.name : J.remotes.length > 0 && (ke.value = J.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        se.value = !1;
      }
    }
    async function Jt(J) {
      Se.value = J;
      try {
        await S(J);
        const L = await B(J);
        L && (ce.value[J] = L), n("toast", `Fetched from ${J}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        Se.value = null;
      }
    }
    async function ut(J) {
      Te.value = J;
      try {
        await M(J, { force: !1 });
        const L = await B(J);
        L && (ce.value[J] = L), n("toast", `Pushed to ${J}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        Te.value = null;
      }
    }
    function Xt(J) {
      ke.value = J;
    }
    async function Ut() {
      if (j.value) {
        D.value = !0, A.value = null;
        try {
          const J = await v(j.value, !0);
          J.status === "success" ? (x.value = !0, de.value = J.credit_balance ?? null, A.value = { type: "success", message: J.message }, await ct()) : A.value = { type: "error", message: J.message };
        } catch (J) {
          A.value = {
            type: "error",
            message: J instanceof Error ? J.message : "Connection test failed"
          };
        } finally {
          D.value = !1;
        }
      }
    }
    async function Qt() {
      try {
        await R(), j.value = "", x.value = !1, A.value = null, de.value = null, Ne.value = [], ee.value = "", he.value = [], Y.value = "", Z.value = [], re.value = "", ge.value = null, Xe.value = [], n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function Zt() {
      ue.value = !0;
      try {
        const J = await f();
        Ne.value = J.data_centers;
      } catch {
        n("toast", "Failed to load data centers", "error");
      } finally {
        ue.value = !1;
      }
    }
    async function es() {
      Ie.value = !0, ue.value = !0;
      try {
        const J = await u();
        he.value = J.volumes, console.log("[Deploy] Network volumes:", J.volumes.map((xe) => ({ id: xe.id, name: xe.name, dc: xe.data_center_id })));
        const L = /* @__PURE__ */ new Map();
        for (const xe of J.volumes)
          xe.data_center_id && !L.has(xe.data_center_id) && L.set(xe.data_center_id, {
            id: xe.data_center_id,
            name: xe.data_center_name || xe.data_center_id,
            available: !0
          });
        if (J.volumes.length === 0 ? (console.log("[Deploy] No volumes found, loading data centers directly..."), await Zt()) : Ne.value = Array.from(L.values()), console.log("[Deploy] Data centers:", Ne.value), he.value.length > 0) {
          const xe = he.value[0];
          Y.value = xe.id, console.log("[Deploy] Auto-selected volume:", xe.name, "data_center_id:", xe.data_center_id), xe.data_center_id ? (ee.value = xe.data_center_id, console.log("[Deploy] Set region to:", ee.value), await Nt(xe.data_center_id)) : console.warn("[Deploy] Volume has no data_center_id!");
        } else Ne.value.length > 0 && (ee.value = Ne.value[0].id, console.log("[Deploy] No volumes, auto-selected region:", ee.value));
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        Ie.value = !1, ue.value = !1;
      }
    }
    async function Nt(J) {
      console.log("[Deploy] loadGpuTypes called with dataCenterId:", J), ie.value = !0;
      try {
        const L = await m(J);
        Z.value = L.gpu_types, console.log(
          "[Deploy] GPU types loaded:",
          L.gpu_types.length,
          "GPUs,",
          L.gpu_types.filter((Ke) => Ke.available).length,
          "available"
        );
        const xe = Z.value.find((Ke) => Ke.available);
        xe ? (re.value = xe.id, console.log("[Deploy] Auto-selected GPU:", xe.displayName)) : (re.value = "", console.log("[Deploy] No available GPUs in this region"));
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        ie.value = !1;
      }
    }
    St(ee, async (J) => {
      if (console.log("[Deploy] Region watcher fired:", J, "(loading volumes:", Ie.value, ")"), !J) return;
      if (Ie.value) {
        console.log("[Deploy] Skipping GPU load - volumes still loading");
        return;
      }
      const L = he.value.find((xe) => xe.id === Y.value);
      L && L.data_center_id !== J && (Y.value = ""), await Nt(J);
    }), St(Y, async (J) => {
      if (console.log("[Deploy] Volume watcher fired:", J, "(loading volumes:", Ie.value, ")"), !J) {
        Z.value = [], re.value = "";
        return;
      }
      if (Ie.value) {
        console.log("[Deploy] Skipping - volumes still loading");
        return;
      }
      const L = he.value.find((xe) => xe.id === J);
      L && L.data_center_id !== ee.value ? ee.value = L.data_center_id : L && await Nt(L.data_center_id);
    });
    async function Wt() {
      Oe.value = !0;
      try {
        ge.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        Oe.value = !1;
      }
    }
    async function pt() {
      st.value = !0;
      try {
        const J = await p();
        Xe.value = J.pods;
      } catch {
        n("toast", "Failed to load pods", "error");
      } finally {
        st.value = !1;
      }
    }
    async function ts() {
      if (!(!re.value || !Y.value)) {
        ze.value = !0, Fe.value = null;
        try {
          const J = await $();
          fe.value = J, J.can_export ? J.warnings.models_without_sources.length > 0 ? q.value = !0 : await Gt() : K.value = !0;
        } catch (J) {
          Fe.value = {
            status: "error",
            message: J instanceof Error ? J.message : "Validation failed"
          }, n("toast", "Validation failed", "error");
        } finally {
          ze.value = !1;
        }
      }
    }
    async function ss() {
      q.value = !1, await Gt();
    }
    async function os() {
      try {
        const J = await $();
        fe.value = J;
      } catch (J) {
        console.error("Re-validation failed:", J);
      }
    }
    async function Gt() {
      Ee.value = !0;
      try {
        let J;
        if (N.value === "SPOT") {
          const xe = Z.value.find((Ke) => Ke.id === re.value);
          xe && (J = X.value === "SECURE" ? xe.secureSpotPrice : xe.communitySpotPrice);
        }
        const L = await d({
          gpu_type_id: re.value,
          pod_name: z.value || "my-comfyui-deploy",
          network_volume_id: Y.value,
          cloud_type: X.value,
          pricing_type: N.value,
          spot_bid: J,
          import_source: We.value
        });
        Fe.value = L, L.status === "success" && L.pod_id ? (He.value = L.pod_id, _e.value = !0, ns(L.pod_id), await pt()) : n("toast", L.message, "error");
      } catch (J) {
        Fe.value = {
          status: "error",
          message: J instanceof Error ? J.message : "Deployment failed"
        }, n("toast", "Deployment failed", "error");
      } finally {
        Ee.value = !1;
      }
    }
    function ns(J) {
      me(J), et.value = window.setInterval(() => me(J), 3e3);
    }
    function H() {
      et.value && (clearInterval(et.value), et.value = null);
    }
    async function me(J) {
      try {
        const L = await b(J);
        De.value = L, (L.phase === "READY" || L.phase === "ERROR" || L.phase === "STOPPED") && (H(), L.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), await pt());
      } catch (L) {
        console.error("Failed to poll deployment status:", L);
      }
    }
    function Ce() {
      _e.value = !1, H(), He.value = null, De.value = null;
    }
    function G() {
      var J;
      (J = De.value) != null && J.comfyui_url && window.open(De.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function U(J) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[J || ""] || "Initializing...";
    }
    function ye(J) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[J || ""] ?? 10;
    }
    async function Pe(J) {
      Qe.value = J;
      try {
        const L = await w(J);
        L.status === "success" ? (n("toast", "Pod terminated", "success"), await pt()) : n("toast", L.message, "error");
      } catch {
        n("toast", "Failed to terminate pod", "error");
      } finally {
        Qe.value = null;
      }
    }
    async function Ae(J) {
      qe.value = J;
      try {
        const L = await k(J);
        L.status === "success" ? (n("toast", "Pod stopped", "success"), await pt()) : n("toast", L.message, "error");
      } catch {
        n("toast", "Failed to stop pod", "error");
      } finally {
        qe.value = null;
      }
    }
    async function Je(J) {
      it.value = J;
      try {
        const L = await _(J);
        L.status === "success" ? (n("toast", "Pod starting...", "success"), await pt()) : n("toast", L.message, "error");
      } catch {
        n("toast", "Failed to start pod", "error");
      } finally {
        it.value = null;
      }
    }
    function gt(J) {
      window.open(J, "_blank", "noopener,noreferrer");
    }
    function Ot(J) {
      const L = J ?? 0, xe = Math.floor(L / 3600), Ke = Math.floor(L % 3600 / 60);
      return xe > 0 ? `${xe}h ${Ke}m` : `${Ke}m`;
    }
    return je(async () => {
      try {
        const J = await T(!0);
        J.has_key && J.key_preview && (j.value = `****${J.key_preview}`, J.valid ? (x.value = !0, de.value = J.credit_balance ?? null, A.value = { type: "success", message: "Connected to RunPod" }, await ct()) : J.error && (A.value = { type: "error", message: J.error }));
      } catch {
      }
    }), Ms(() => {
      H();
    }), (J, L) => {
      var xe, Ke, _t, Dt, $e, At;
      return s(), o(W, null, [
        y(nt, null, {
          header: l(() => [
            y(at, {
              title: "DEPLOY TO CLOUD",
              "show-info": !0,
              onInfoClick: L[0] || (L[0] = (ve) => Q.value = !0)
            })
          ]),
          content: l(() => [
            y(Be, { title: "RUNPOD API KEY" }, {
              default: l(() => [
                e("div", tw, [
                  e("div", sw, [
                    e("div", ow, [
                      Ue(e("input", {
                        "onUpdate:modelValue": L[1] || (L[1] = (ve) => j.value = ve),
                        type: F.value ? "text" : "password",
                        class: "api-key-input",
                        placeholder: "Enter your RunPod API key (rp_...)",
                        disabled: x.value
                      }, null, 8, nw), [
                        [Eo, j.value]
                      ]),
                      e("button", {
                        class: "toggle-visibility-btn",
                        onClick: L[2] || (L[2] = (ve) => F.value = !F.value),
                        title: F.value ? "Hide key" : "Show key"
                      }, a(F.value ? "👁" : "👁‍🗨"), 9, aw)
                    ]),
                    x.value ? r("", !0) : (s(), I(te, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      loading: D.value,
                      disabled: !j.value || D.value,
                      onClick: Ut
                    }, {
                      default: l(() => [...L[18] || (L[18] = [
                        g(" Test ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "disabled"])),
                    x.value ? (s(), I(te, {
                      key: 1,
                      variant: "ghost",
                      size: "sm",
                      onClick: Qt
                    }, {
                      default: l(() => [...L[19] || (L[19] = [
                        g(" Clear ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ]),
                  A.value ? (s(), o("div", {
                    key: 0,
                    class: pe(["connection-status", A.value.type])
                  }, [
                    e("span", lw, a(A.value.type === "success" ? "✓" : "✕"), 1),
                    e("span", iw, a(A.value.message), 1),
                    de.value !== null ? (s(), o("span", rw, " $" + a(de.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                  ], 2)) : r("", !0),
                  L[20] || (L[20] = e("div", { class: "api-key-help" }, [
                    e("span", { class: "help-icon" }, "i"),
                    e("span", { class: "help-text" }, [
                      g(" Get your API key at "),
                      e("a", {
                        href: "https://runpod.io/console/user/settings",
                        target: "_blank",
                        rel: "noopener"
                      }, "runpod.io/console/user/settings"),
                      g(". Key stored locally, never sent to ComfyGit servers. ")
                    ])
                  ], -1))
                ])
              ]),
              _: 1
            }),
            x.value ? (s(), I(Be, {
              key: 0,
              title: "CONFIGURATION"
            }, {
              default: l(() => [
                e("div", dw, [
                  e("div", cw, [
                    L[21] || (L[21] = e("label", { class: "config-label" }, "Region", -1)),
                    Ue(e("select", {
                      "onUpdate:modelValue": L[3] || (L[3] = (ve) => ee.value = ve),
                      class: "config-select",
                      disabled: ue.value
                    }, [
                      ue.value ? (s(), o("option", mw, "Loading...")) : ee.value ? r("", !0) : (s(), o("option", vw, "Select a region")),
                      (s(!0), o(W, null, ae(Ne.value, (ve) => (s(), o("option", {
                        key: ve.id,
                        value: ve.id,
                        disabled: !ve.available
                      }, a(ve.id) + " (" + a(ve.name) + ")" + a(ve.available ? "" : " [Unavailable]"), 9, fw))), 128))
                    ], 8, uw), [
                      [Et, ee.value]
                    ])
                  ]),
                  e("div", pw, [
                    L[26] || (L[26] = e("label", { class: "config-label" }, "Network Volume", -1)),
                    Ie.value ? (s(), o("div", gw, "Loading volumes...")) : V.value.length === 0 ? (s(), o(W, { key: 1 }, [
                      e("div", hw, [
                        L[22] || (L[22] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                        e("span", yw, "No volumes in " + a(ee.value || "this region"), 1)
                      ]),
                      L[23] || (L[23] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                      L[24] || (L[24] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-link"
                      }, " Create Volume on RunPod → ", -1))
                    ], 64)) : (s(), o(W, { key: 2 }, [
                      Ue(e("select", {
                        "onUpdate:modelValue": L[4] || (L[4] = (ve) => Y.value = ve),
                        class: "config-select"
                      }, [
                        (s(!0), o(W, null, ae(V.value, (ve) => (s(), o("option", {
                          key: ve.id,
                          value: ve.id
                        }, a(ve.name) + " (" + a(ve.size_gb) + "GB) ", 9, ww))), 128))
                      ], 512), [
                        [Et, Y.value]
                      ]),
                      L[25] || (L[25] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-inline-link"
                      }, " + Create new volume ", -1))
                    ], 64))
                  ]),
                  e("div", kw, [
                    L[27] || (L[27] = e("label", { class: "config-label" }, "GPU Type", -1)),
                    Ue(e("select", {
                      "onUpdate:modelValue": L[5] || (L[5] = (ve) => re.value = ve),
                      class: "config-select",
                      disabled: ie.value || !Y.value
                    }, [
                      Y.value ? ie.value ? (s(), o("option", $w, "Loading GPUs...")) : oe.value.length === 0 ? (s(), o("option", Cw, "No GPUs available in this region")) : r("", !0) : (s(), o("option", _w, "Select a volume first")),
                      (s(!0), o(W, null, ae(oe.value, (ve) => (s(), o("option", {
                        key: ve.id,
                        value: ve.id
                      }, a(ve.displayName) + " (" + a(ve.memoryInGb) + "GB) - $" + a(X.value === "SECURE" ? (ve.securePrice ?? 0).toFixed(2) : (ve.communityPrice ?? 0).toFixed(2)) + "/hr " + a(ve.stockStatus ? `[${ve.stockStatus}]` : ""), 9, xw))), 128))
                    ], 8, bw), [
                      [Et, re.value]
                    ])
                  ]),
                  e("div", Sw, [
                    L[28] || (L[28] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                    e("div", Iw, [
                      e("label", Ew, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": L[6] || (L[6] = (ve) => X.value = ve),
                          value: "SECURE"
                        }, null, 512), [
                          [zt, X.value]
                        ]),
                        e("span", Pw, "Secure ($" + a(tt("SECURE")) + "/hr)", 1)
                      ]),
                      e("label", Rw, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": L[7] || (L[7] = (ve) => X.value = ve),
                          value: "COMMUNITY"
                        }, null, 512), [
                          [zt, X.value]
                        ]),
                        e("span", Mw, "Community ($" + a(tt("COMMUNITY")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", Tw, [
                    L[29] || (L[29] = e("label", { class: "config-label" }, [
                      g(" Pricing "),
                      e("span", {
                        class: "info-tooltip",
                        title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed. Good for experimentation."
                      }, "ⓘ")
                    ], -1)),
                    e("div", Dw, [
                      e("label", Lw, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": L[8] || (L[8] = (ve) => N.value = ve),
                          value: "ON_DEMAND"
                        }, null, 512), [
                          [zt, N.value]
                        ]),
                        e("span", zw, "On-Demand ($" + a(tt("ON_DEMAND")) + "/hr)", 1)
                      ]),
                      e("label", Uw, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": L[9] || (L[9] = (ve) => N.value = ve),
                          value: "SPOT"
                        }, null, 512), [
                          [zt, N.value]
                        ]),
                        e("span", Nw, "Spot ($" + a(tt("SPOT")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", Ow, [
                    L[30] || (L[30] = e("label", { class: "config-label" }, "Pod Name", -1)),
                    Ue(e("input", {
                      "onUpdate:modelValue": L[10] || (L[10] = (ve) => z.value = ve),
                      type: "text",
                      class: "config-input",
                      placeholder: "my-comfyui-deploy"
                    }, null, 512), [
                      [Ft, z.value]
                    ])
                  ])
                ])
              ]),
              _: 1
            })) : r("", !0),
            x.value ? (s(), I(Be, {
              key: 1,
              title: "DEPLOY SOURCE"
            }, {
              default: l(() => [
                se.value ? (s(), o("div", Aw, " Loading remotes... ")) : E.value.length === 0 ? (s(), o("div", Bw, [
                  L[32] || (L[32] = e("div", { class: "empty-message" }, [
                    e("span", { class: "empty-icon" }, "🌐"),
                    e("span", { class: "empty-text" }, "No Git remotes configured"),
                    e("p", { class: "empty-help" }, " Configure a remote repository to deploy your environment. ")
                  ], -1)),
                  y(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: L[11] || (L[11] = (ve) => n("navigate", "remotes"))
                  }, {
                    default: l(() => [...L[31] || (L[31] = [
                      g(" Go to Remotes Tab → ", -1)
                    ])]),
                    _: 1
                  })
                ])) : (s(), o(W, { key: 2 }, [
                  e("div", Fw, [
                    (s(!0), o(W, null, ae(E.value, (ve) => (s(), I(ew, {
                      key: ve.name,
                      remote: ve,
                      "sync-status": ce.value[ve.name],
                      "is-selected": ke.value === ve.name,
                      "is-fetching": Se.value === ve.name,
                      "is-pushing": Te.value === ve.name,
                      onFetch: Jt,
                      onPush: ut,
                      onSelect: Xt
                    }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                  ]),
                  be.value && be.value.ahead > 0 ? (s(), o("div", Vw, [
                    L[33] || (L[33] = e("span", { class: "warning-icon" }, "⚠", -1)),
                    e("div", Ww, [
                      e("strong", null, a(be.value.ahead) + " unpushed commit" + a(be.value.ahead !== 1 ? "s" : ""), 1),
                      e("p", null, "Push to '" + a(ke.value) + "' before deploying to include your latest changes.", 1)
                    ]),
                    y(te, {
                      variant: "primary",
                      size: "sm",
                      loading: Te.value === ke.value,
                      onClick: L[12] || (L[12] = (ve) => ke.value && ut(ke.value))
                    }, {
                      default: l(() => [
                        g(" Push to " + a(ke.value), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])) : r("", !0),
                  e("div", Gw, [
                    y(te, {
                      variant: "link",
                      size: "sm",
                      onClick: L[13] || (L[13] = (ve) => n("navigate", "remotes"))
                    }, {
                      default: l(() => [...L[34] || (L[34] = [
                        g(" Manage remotes → ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ], 64))
              ]),
              _: 1
            })) : r("", !0),
            x.value ? (s(), I(Be, {
              key: 2,
              title: "ENVIRONMENT SUMMARY"
            }, {
              default: l(() => [
                e("div", jw, [
                  Oe.value ? (s(), o("div", Hw, "Loading environment summary...")) : ge.value ? (s(), o(W, { key: 1 }, [
                    e("div", Kw, [
                      L[35] || (L[35] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                      e("span", qw, a(ge.value.comfyui_version), 1)
                    ]),
                    e("div", Yw, [
                      L[36] || (L[36] = e("span", { class: "summary-label" }, "Nodes", -1)),
                      e("span", Jw, a(ge.value.node_count) + " custom nodes", 1)
                    ]),
                    e("div", Xw, [
                      L[37] || (L[37] = e("span", { class: "summary-label" }, "Models", -1)),
                      e("span", Qw, a(ge.value.model_count) + " models", 1)
                    ]),
                    ge.value.models_with_sources > 0 ? (s(), o("div", Zw, [
                      e("span", ek, "└─ " + a(ge.value.models_with_sources) + " with sources (auto-download)", 1)
                    ])) : r("", !0),
                    ge.value.models_without_sources > 0 ? (s(), o("div", tk, [
                      e("span", sk, "└─ " + a(ge.value.models_without_sources) + " without sources (manual upload)", 1)
                    ])) : r("", !0),
                    e("div", ok, [
                      L[38] || (L[38] = e("span", { class: "summary-label" }, "Workflows", -1)),
                      e("span", nk, a(ge.value.workflow_count) + " committed", 1)
                    ]),
                    e("div", ak, [
                      L[39] || (L[39] = e("span", { class: "summary-label" }, "Package", -1)),
                      e("span", lk, "~" + a(ge.value.estimated_package_size_mb) + " MB", 1)
                    ])
                  ], 64)) : r("", !0)
                ])
              ]),
              _: 1
            })) : r("", !0),
            x.value && dt.value ? (s(), I(Be, {
              key: 3,
              title: "DEPLOYMENT SUMMARY"
            }, {
              default: l(() => {
                var ve, It;
                return [
                  e("div", ik, [
                    e("div", rk, [
                      e("div", dk, [
                        L[44] || (L[44] = e("div", { class: "column-header" }, "Pricing", -1)),
                        e("div", ck, [
                          L[40] || (L[40] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                          e("span", uk, "$" + a(dt.value.gpu.toFixed(2)) + "/hr", 1)
                        ]),
                        e("div", mk, [
                          L[41] || (L[41] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                          e("span", vk, "$" + a(dt.value.volume.toFixed(3)) + "/hr", 1)
                        ]),
                        e("div", fk, [
                          L[42] || (L[42] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                          e("span", pk, "$" + a(dt.value.container.toFixed(3)) + "/hr", 1)
                        ]),
                        L[45] || (L[45] = e("div", { class: "pricing-divider" }, null, -1)),
                        e("div", gk, [
                          L[43] || (L[43] = e("span", { class: "pricing-label" }, "Total:", -1)),
                          e("span", hk, "~$" + a(dt.value.total.toFixed(2)) + "/hr", 1)
                        ])
                      ]),
                      e("div", yk, [
                        L[47] || (L[47] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                        e("div", wk, [
                          e("span", null, a(((ve = Z.value.find((jt) => jt.id === re.value)) == null ? void 0 : ve.displayName) || "GPU") + " (" + a(((It = Z.value.find((jt) => jt.id === re.value)) == null ? void 0 : It.memoryInGb) || 0) + "GB VRAM)", 1)
                        ]),
                        e("div", kk, [
                          e("span", null, "Region: " + a(ee.value), 1)
                        ]),
                        P.value ? (s(), o("div", bk, [
                          e("span", null, "Volume: " + a(P.value.name), 1)
                        ])) : r("", !0),
                        N.value === "SPOT" ? (s(), o("div", _k, [...L[46] || (L[46] = [
                          e("span", null, "⚠ Spot instance - may be interrupted", -1)
                        ])])) : r("", !0)
                      ])
                    ])
                  ])
                ];
              }),
              _: 1
            })) : r("", !0),
            x.value ? (s(), o("div", $k, [
              y(te, {
                variant: "primary",
                size: "md",
                loading: ze.value || Ee.value,
                disabled: !ft.value,
                onClick: ts
              }, {
                default: l(() => [
                  L[48] || (L[48] = e("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                    e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                  ], -1)),
                  g(" " + a(ze.value ? "Validating..." : Ee.value ? "Deploying..." : "Deploy to RunPod"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ])) : r("", !0),
            Fe.value ? (s(), I(Be, {
              key: 5,
              title: "DEPLOY STATUS"
            }, {
              default: l(() => [
                y(ot, {
                  status: Fe.value.status === "success" ? "synced" : "broken"
                }, Vt({
                  icon: l(() => [
                    g(a(Fe.value.status === "success" ? "✓" : "✕"), 1)
                  ]),
                  title: l(() => [
                    g(a(Fe.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(Fe.value.message), 1)
                  ]),
                  actions: l(() => [
                    y(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: L[14] || (L[14] = (ve) => Fe.value = null)
                    }, {
                      default: l(() => [...L[49] || (L[49] = [
                        g(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, [
                  Fe.value.pod_id ? {
                    name: "details",
                    fn: l(() => [
                      y(Ge, {
                        label: "Pod ID:",
                        value: Fe.value.pod_id
                      }, null, 8, ["value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["status"])
              ]),
              _: 1
            })) : r("", !0),
            x.value ? (s(), I(Be, {
              key: 6,
              title: "ACTIVE PODS"
            }, {
              default: l(() => [
                e("div", Ck, [
                  y(te, {
                    variant: "ghost",
                    size: "sm",
                    loading: st.value,
                    onClick: pt
                  }, {
                    default: l(() => [...L[50] || (L[50] = [
                      g(" Refresh ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                st.value && Xe.value.length === 0 ? (s(), o("div", xk, " Loading pods... ")) : Xe.value.length === 0 ? (s(), o("div", Sk, [...L[51] || (L[51] = [
                  e("span", { class: "empty-icon" }, "○", -1),
                  e("span", { class: "empty-text" }, "No active pods", -1)
                ])])) : (s(), o("div", Ik, [
                  (s(!0), o(W, null, ae(Xe.value, (ve) => (s(), o("div", {
                    key: ve.id,
                    class: "pod-card"
                  }, [
                    e("div", Ek, [
                      e("span", Pk, a(ve.name), 1),
                      e("span", {
                        class: pe(["pod-status", ve.status.toLowerCase()])
                      }, a(ve.status === "RUNNING" ? "●" : "○") + " " + a(ve.status), 3)
                    ]),
                    e("div", Rk, [
                      e("span", Mk, a(ve.gpu_type), 1),
                      L[52] || (L[52] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", Tk, a(Ot(ve.uptime_seconds)), 1),
                      L[53] || (L[53] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", Dk, "$" + a((ve.total_cost ?? 0).toFixed(2)), 1)
                    ]),
                    e("div", Lk, [
                      ve.comfyui_url && ve.status === "RUNNING" ? (s(), I(te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (It) => gt(ve.comfyui_url)
                      }, {
                        default: l(() => [...L[54] || (L[54] = [
                          g(" Open ComfyUI ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0),
                      ve.status === "RUNNING" ? (s(), I(te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        loading: qe.value === ve.id,
                        onClick: (It) => Ae(ve.id),
                        title: "Stop pod (saves money, keeps storage)"
                      }, {
                        default: l(() => [...L[55] || (L[55] = [
                          g(" Stop ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      ve.status === "EXITED" || ve.status === "STOPPED" ? (s(), I(te, {
                        key: 2,
                        variant: "secondary",
                        size: "sm",
                        loading: it.value === ve.id,
                        onClick: (It) => Je(ve.id),
                        title: "Start stopped pod"
                      }, {
                        default: l(() => [...L[56] || (L[56] = [
                          g(" Start ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      y(te, {
                        variant: "ghost",
                        size: "sm",
                        loading: Qe.value === ve.id,
                        onClick: (It) => Pe(ve.id)
                      }, {
                        default: l(() => [...L[57] || (L[57] = [
                          g(" Terminate ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])
                    ])
                  ]))), 128))
                ]))
              ]),
              _: 1
            })) : r("", !0)
          ]),
          _: 1
        }),
        y(bt, {
          show: Q.value,
          title: "Deploy to Cloud",
          onClose: L[15] || (L[15] = (ve) => Q.value = !1)
        }, {
          content: l(() => [...L[58] || (L[58] = [
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
                    g(" - All committed workflows")
                  ]),
                  e("li", null, [
                    e("strong", null, "Custom Nodes"),
                    g(" - Installed automatically")
                  ]),
                  e("li", null, [
                    e("strong", null, "Models"),
                    g(" - Downloaded from sources (when available)")
                  ]),
                  e("li", null, [
                    e("strong", null, "Configuration"),
                    g(" - Environment settings")
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
        _e.value ? (s(), I(lt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((xe = De.value) == null ? void 0 : xe.phase) === "READY" || ((Ke = De.value) == null ? void 0 : Ke.phase) === "ERROR" || ((_t = De.value) == null ? void 0 : _t.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: Ce
        }, Vt({
          body: l(() => {
            var ve, It, jt, Bs, Fs, Vs, Ws, Gs, js, Hs, Ks, qs;
            return [
              e("div", zk, [
                e("div", Uk, [
                  e("div", {
                    class: pe(["phase-icon", (It = (ve = De.value) == null ? void 0 : ve.phase) == null ? void 0 : It.toLowerCase()])
                  }, [
                    ((jt = De.value) == null ? void 0 : jt.phase) === "READY" ? (s(), o("span", Nk, "✓")) : ((Bs = De.value) == null ? void 0 : Bs.phase) === "ERROR" ? (s(), o("span", Ok, "✕")) : ((Fs = De.value) == null ? void 0 : Fs.phase) === "STOPPED" ? (s(), o("span", Ak, "○")) : (s(), o("span", Bk, "⟳"))
                  ], 2),
                  e("div", Fk, [
                    e("div", Vk, a(U((Vs = De.value) == null ? void 0 : Vs.phase)), 1),
                    e("div", Wk, a(((Ws = De.value) == null ? void 0 : Ws.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                y(Us, {
                  progress: ye((Gs = De.value) == null ? void 0 : Gs.phase),
                  variant: ((js = De.value) == null ? void 0 : js.phase) === "ERROR" ? "error" : ((Hs = De.value) == null ? void 0 : Hs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Ks = De.value) == null ? void 0 : Ks.phase) === "READY" ? (s(), o("div", Gk, [
                  y(te, {
                    variant: "primary",
                    size: "md",
                    onClick: G
                  }, {
                    default: l(() => [...L[59] || (L[59] = [
                      g(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", jk, [
                  (qs = De.value) != null && qs.console_url ? (s(), o("a", {
                    key: 0,
                    href: De.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, Hk)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((Dt = De.value) == null ? void 0 : Dt.phase) === "READY" || (($e = De.value) == null ? void 0 : $e.phase) === "ERROR" || ((At = De.value) == null ? void 0 : At.phase) === "STOPPED" ? {
            name: "footer",
            fn: l(() => [
              y(te, {
                variant: "ghost",
                size: "sm",
                onClick: Ce
              }, {
                default: l(() => [...L[60] || (L[60] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0),
        K.value && fe.value ? (s(), I(fo, {
          key: 1,
          issues: fe.value.blocking_issues,
          onClose: L[16] || (L[16] = (ve) => K.value = !1)
        }, null, 8, ["issues"])) : r("", !0),
        q.value && fe.value ? (s(), I(po, {
          key: 2,
          models: fe.value.warnings.models_without_sources,
          onConfirm: ss,
          onCancel: L[17] || (L[17] = (ve) => q.value = !1),
          onRevalidate: os
        }, null, 8, ["models"])) : r("", !0)
      ], 64);
    };
  }
}), qk = /* @__PURE__ */ le(Kk, [["__scopeId", "data-v-86fe11ab"]]), Yk = { class: "header-info" }, Jk = { class: "commit-hash" }, Xk = {
  key: 0,
  class: "commit-refs"
}, Qk = { class: "commit-message" }, Zk = { class: "commit-date" }, eb = {
  key: 0,
  class: "loading"
}, tb = {
  key: 1,
  class: "changes-section"
}, sb = { class: "stats-row" }, ob = { class: "stat" }, nb = { class: "stat insertions" }, ab = { class: "stat deletions" }, lb = {
  key: 0,
  class: "change-group"
}, ib = {
  key: 1,
  class: "change-group"
}, rb = {
  key: 0,
  class: "version"
}, db = {
  key: 2,
  class: "change-group"
}, cb = { class: "change-item" }, ub = /* @__PURE__ */ ne({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Ye(), i = h(null), f = h(!0), v = O(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), u = O(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return je(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (m, d) => (s(), I(lt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (p) => m.$emit("close"))
    }, {
      header: l(() => {
        var p, w, k, _;
        return [
          e("div", Yk, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Jk, a(((p = i.value) == null ? void 0 : p.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (_ = (k = i.value) == null ? void 0 : k.refs) != null && _.length ? (s(), o("span", Xk, [
              (s(!0), o(W, null, ae(i.value.refs, (b) => (s(), o("span", {
                key: b,
                class: "ref-badge"
              }, a(b), 1))), 128))
            ])) : r("", !0)
          ]),
          y(we, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (b) => m.$emit("close"))
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
        var p, w;
        return [
          e("div", Qk, a(((p = i.value) == null ? void 0 : p.message) || t.commit.message), 1),
          e("div", Zk, a(((w = i.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (s(), o("div", eb, "Loading details...")) : i.value ? (s(), o("div", tb, [
            e("div", sb, [
              e("span", ob, a(i.value.stats.files_changed) + " files", 1),
              e("span", nb, "+" + a(i.value.stats.insertions), 1),
              e("span", ab, "-" + a(i.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", lb, [
              y(cs, { variant: "section" }, {
                default: l(() => [...d[6] || (d[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ae(i.value.changes.workflows.added, (k) => (s(), o("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(W, null, ae(i.value.changes.workflows.modified, (k) => (s(), o("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(W, null, ae(i.value.changes.workflows.deleted, (k) => (s(), o("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k), 1)
              ]))), 128))
            ])) : r("", !0),
            u.value ? (s(), o("div", ib, [
              y(cs, { variant: "section" }, {
                default: l(() => [...d[10] || (d[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ae(i.value.changes.nodes.added, (k) => (s(), o("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k.name), 1),
                k.version ? (s(), o("span", rb, "(" + a(k.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(W, null, ae(i.value.changes.nodes.removed, (k) => (s(), o("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", db, [
              y(cs, { variant: "section" }, {
                default: l(() => [...d[13] || (d[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", cb, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: l(() => [
        y(we, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (p) => m.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...d[15] || (d[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        y(we, {
          variant: "primary",
          onClick: d[2] || (d[2] = (p) => m.$emit("checkout", t.commit))
        }, {
          default: l(() => [...d[16] || (d[16] = [
            g(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), mb = /* @__PURE__ */ le(ub, [["__scopeId", "data-v-d256ff6d"]]), vb = { class: "base-textarea-wrapper" }, fb = ["value", "rows", "placeholder", "disabled", "maxlength"], pb = {
  key: 0,
  class: "base-textarea-count"
}, gb = /* @__PURE__ */ ne({
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
    function f(v) {
      v.shiftKey || v.ctrlKey || v.metaKey || n.submitOnEnter && (v.preventDefault(), i("submit"));
    }
    return (v, u) => (s(), o("div", vb, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (m) => v.$emit("update:modelValue", m.target.value)),
        onKeydown: [
          u[1] || (u[1] = xt(Ve((m) => v.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = xt(Ve((m) => v.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          xt(f, ["enter"])
        ]
      }, null, 40, fb),
      t.showCharCount && t.maxLength ? (s(), o("div", pb, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), Js = /* @__PURE__ */ le(gb, [["__scopeId", "data-v-c6d16c93"]]), hb = ["checked", "disabled"], yb = { class: "base-checkbox-box" }, wb = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, kb = {
  key: 0,
  class: "base-checkbox-label"
}, bb = /* @__PURE__ */ ne({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: pe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, hb),
      e("span", yb, [
        t.modelValue ? (s(), o("svg", wb, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", kb, [
        Me(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Xs = /* @__PURE__ */ le(bb, [["__scopeId", "data-v-bf17c831"]]), _b = { class: "popover-header" }, $b = { class: "popover-body" }, Cb = {
  key: 0,
  class: "changes-summary"
}, xb = {
  key: 0,
  class: "change-item"
}, Sb = {
  key: 1,
  class: "change-item"
}, Ib = {
  key: 2,
  class: "change-item"
}, Eb = {
  key: 3,
  class: "change-item"
}, Pb = {
  key: 4,
  class: "change-item"
}, Rb = {
  key: 5,
  class: "change-item"
}, Mb = {
  key: 1,
  class: "no-changes"
}, Tb = {
  key: 2,
  class: "loading"
}, Db = {
  key: 3,
  class: "issues-error"
}, Lb = { class: "error-header" }, zb = { class: "error-title" }, Ub = { class: "issues-list" }, Nb = { class: "message-section" }, Ob = { class: "popover-footer" }, Ab = {
  key: 1,
  class: "commit-popover"
}, Bb = { class: "popover-header" }, Fb = { class: "popover-body" }, Vb = {
  key: 0,
  class: "changes-summary"
}, Wb = {
  key: 0,
  class: "change-item"
}, Gb = {
  key: 1,
  class: "change-item"
}, jb = {
  key: 2,
  class: "change-item"
}, Hb = {
  key: 3,
  class: "change-item"
}, Kb = {
  key: 4,
  class: "change-item"
}, qb = {
  key: 5,
  class: "change-item"
}, Yb = {
  key: 1,
  class: "no-changes"
}, Jb = {
  key: 2,
  class: "loading"
}, Xb = {
  key: 3,
  class: "issues-error"
}, Qb = { class: "error-header" }, Zb = { class: "error-title" }, e_ = { class: "issues-list" }, t_ = { class: "message-section" }, s_ = { class: "popover-footer" }, o_ = /* @__PURE__ */ ne({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: f } = Ye(), v = h(""), u = h(!1), m = h(!1), d = O(() => {
      if (!n.status) return !1;
      const T = n.status.workflows;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || n.status.has_changes;
    }), p = O(() => {
      if (!n.status) return !1;
      const T = n.status.workflows, R = n.status.git_changes;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || R.nodes_added.length > 0 || R.nodes_removed.length > 0;
    }), w = O(() => {
      var T;
      return (T = n.status) != null && T.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (R) => R.has_issues && (R.sync_state === "new" || R.sync_state === "modified")
      ) : [];
    }), k = O(() => w.value.length > 0), _ = O(() => k.value && !m.value);
    async function b() {
      var T, R, $;
      if (!(k.value && !m.value) && !(!d.value || !v.value.trim() || u.value)) {
        u.value = !0;
        try {
          const C = await f(v.value.trim(), m.value);
          if (C.status === "success") {
            const B = `Committed: ${((T = C.summary) == null ? void 0 : T.new) || 0} new, ${((R = C.summary) == null ? void 0 : R.modified) || 0} modified, ${(($ = C.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: B });
          } else C.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : C.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: C.message || "Commit failed" });
        } catch (C) {
          i("committed", { success: !1, message: C instanceof Error ? C.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (T, R) => t.asModal ? (s(), I(Ze, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: R[5] || (R[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: R[4] || (R[4] = Ve(() => {
          }, ["stop"]))
        }, [
          e("div", _b, [
            R[11] || (R[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: R[0] || (R[0] = ($) => i("close"))
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
          e("div", $b, [
            t.status && d.value ? (s(), o("div", Cb, [
              t.status.workflows.new.length ? (s(), o("div", xb, [
                R[12] || (R[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Sb, [
                R[13] || (R[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Ib, [
                R[14] || (R[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Eb, [
                R[15] || (R[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Pb, [
                R[16] || (R[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              p.value ? r("", !0) : (s(), o("div", Rb, [...R[17] || (R[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Mb, " No changes to commit ")) : (s(), o("div", Tb, " Loading... ")),
            k.value ? (s(), o("div", Db, [
              e("div", Lb, [
                R[18] || (R[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", zb, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Ub, [
                (s(!0), o(W, null, ae(w.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  g(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              y(Xs, {
                modelValue: m.value,
                "onUpdate:modelValue": R[1] || (R[1] = ($) => m.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...R[19] || (R[19] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", Nb, [
              y(Js, {
                modelValue: v.value,
                "onUpdate:modelValue": R[2] || (R[2] = ($) => v.value = $),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: b,
                onSubmit: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", Ob, [
            y(we, {
              variant: "secondary",
              onClick: R[3] || (R[3] = ($) => i("close"))
            }, {
              default: l(() => [...R[20] || (R[20] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            y(we, {
              variant: m.value ? "danger" : "primary",
              disabled: !d.value || !v.value.trim() || u.value || _.value,
              loading: u.value,
              onClick: b
            }, {
              default: l(() => [
                g(a(u.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Ab, [
      e("div", Bb, [
        R[22] || (R[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: R[6] || (R[6] = ($) => i("close"))
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
      e("div", Fb, [
        t.status && d.value ? (s(), o("div", Vb, [
          t.status.workflows.new.length ? (s(), o("div", Wb, [
            R[23] || (R[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Gb, [
            R[24] || (R[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", jb, [
            R[25] || (R[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Hb, [
            R[26] || (R[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Kb, [
            R[27] || (R[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          p.value ? r("", !0) : (s(), o("div", qb, [...R[28] || (R[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", Yb, " No changes to commit ")) : (s(), o("div", Jb, " Loading... ")),
        k.value ? (s(), o("div", Xb, [
          e("div", Qb, [
            R[29] || (R[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Zb, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", e_, [
            (s(!0), o(W, null, ae(w.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              g(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          y(Xs, {
            modelValue: m.value,
            "onUpdate:modelValue": R[7] || (R[7] = ($) => m.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...R[30] || (R[30] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", t_, [
          y(Js, {
            modelValue: v.value,
            "onUpdate:modelValue": R[8] || (R[8] = ($) => v.value = $),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: b,
            onSubmit: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", s_, [
        y(we, {
          variant: "secondary",
          onClick: R[9] || (R[9] = ($) => i("close"))
        }, {
          default: l(() => [...R[31] || (R[31] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y(we, {
          variant: m.value ? "danger" : "primary",
          disabled: !d.value || !v.value.trim() || u.value || _.value,
          loading: u.value,
          onClick: b
        }, {
          default: l(() => [
            g(a(u.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), ho = /* @__PURE__ */ le(o_, [["__scopeId", "data-v-d0fe6172"]]), n_ = { class: "modal-header" }, a_ = { class: "modal-body" }, l_ = { class: "switch-message" }, i_ = { class: "switch-details" }, r_ = { class: "modal-actions" }, d_ = /* @__PURE__ */ ne({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), I(Ze, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ve(() => {
          }, ["stop"]))
        }, [
          e("div", n_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", a_, [
            e("p", l_, [
              n[6] || (n[6] = g(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = g(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = g("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", i_, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", r_, [
            y(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            y(te, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                g(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), c_ = /* @__PURE__ */ le(d_, [["__scopeId", "data-v-e9c5253e"]]), u_ = {
  key: 0,
  class: "modal-overlay"
}, m_ = { class: "modal-content" }, v_ = { class: "modal-body" }, f_ = { class: "progress-info" }, p_ = { class: "progress-percentage" }, g_ = { class: "progress-state" }, h_ = { class: "switch-steps" }, y_ = { class: "step-icon" }, w_ = { class: "step-label" }, k_ = /* @__PURE__ */ ne({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = O(() => {
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
      return c.message || v[c.state] || c.state;
    }), i = O(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), f = O(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = v.findIndex((m) => m.state === c.state);
      return v.map((m, d) => {
        let p = "pending", w = "○";
        return d < u ? (p = "completed", w = "✓") : d === u && (p = "active", w = "⟳"), {
          ...m,
          status: p,
          icon: w
        };
      });
    });
    return (v, u) => (s(), I(Ze, { to: "body" }, [
      t.show ? (s(), o("div", u_, [
        e("div", m_, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", v_, [
            y(Us, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", f_, [
              e("div", p_, a(t.progress) + "%", 1),
              e("div", g_, a(n.value), 1)
            ]),
            e("div", h_, [
              (s(!0), o(W, null, ae(f.value, (m) => (s(), o("div", {
                key: m.state,
                class: pe(["switch-step", m.status])
              }, [
                e("span", y_, a(m.icon), 1),
                e("span", w_, a(m.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), b_ = /* @__PURE__ */ le(k_, [["__scopeId", "data-v-768a5078"]]), __ = { class: "modal-header" }, $_ = { class: "modal-body" }, C_ = {
  key: 0,
  class: "node-section"
}, x_ = { class: "node-list" }, S_ = {
  key: 1,
  class: "node-section"
}, I_ = { class: "node-list" }, E_ = { class: "modal-actions" }, P_ = /* @__PURE__ */ ne({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), I(Ze, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ve(() => {
          }, ["stop"]))
        }, [
          e("div", __, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", $_, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", C_, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", x_, [
                (s(!0), o(W, null, ae(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", S_, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", I_, [
                (s(!0), o(W, null, ae(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
          e("div", E_, [
            y(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            y(te, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), R_ = /* @__PURE__ */ le(P_, [["__scopeId", "data-v-7cad7518"]]), M_ = [
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
], T_ = "v0.0.4", D_ = "Akatz", L_ = { class: "social-buttons" }, z_ = ["title", "aria-label", "onClick"], U_ = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, N_ = ["d"], O_ = ["title", "aria-label", "onClick"], A_ = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, B_ = ["d"], F_ = /* @__PURE__ */ ne({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", L_, [
      (s(!0), o(W, null, ae(Re(M_), (f) => (s(), o(W, {
        key: f.id
      }, [
        f.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (v) => c(f.url)
        }, [
          g(a(f.label) + " ", 1),
          (s(), o("svg", U_, [
            e("path", {
              d: f.iconPath
            }, null, 8, N_)
          ]))
        ], 8, z_)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (v) => c(f.url)
        }, [
          (s(), o("svg", A_, [
            e("path", {
              d: f.iconPath
            }, null, 8, B_)
          ]))
        ], 8, O_))
      ], 64))), 128))
    ]));
  }
}), yo = /* @__PURE__ */ le(F_, [["__scopeId", "data-v-4f846342"]]), V_ = { class: "footer-info" }, W_ = { class: "version" }, G_ = { class: "made-by" }, j_ = /* @__PURE__ */ ne({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", V_, [
      e("span", W_, a(Re(T_)), 1),
      e("span", G_, [
        n[0] || (n[0] = g(" made with ", -1)),
        n[1] || (n[1] = e("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        g(" by " + a(Re(D_)), 1)
      ])
    ]));
  }
}), wo = /* @__PURE__ */ le(j_, [["__scopeId", "data-v-8bc3db0a"]]), H_ = /* @__PURE__ */ ne({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = h(null);
    async function i() {
      var v;
      await ((v = n.value) == null ? void 0 : v.saveSettings());
    }
    function f() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (v, u) => (s(), I(lt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (m) => v.$emit("close"))
    }, {
      body: l(() => [
        y(co, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: f
        }, null, 8, ["workspace-path"])
      ]),
      footer: l(() => {
        var m;
        return [
          y(we, {
            variant: "primary",
            disabled: !((m = n.value) != null && m.hasChanges),
            onClick: i
          }, {
            default: l(() => [...u[2] || (u[2] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          y(we, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => v.$emit("close"))
          }, {
            default: l(() => [...u[3] || (u[3] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), K_ = /* @__PURE__ */ le(H_, [["__scopeId", "data-v-fac00ae7"]]), q_ = { class: "header-actions" }, Y_ = {
  key: 0,
  class: "wizard-step"
}, J_ = { class: "form-field" }, X_ = ["placeholder"], Q_ = {
  key: 0,
  class: "form-error"
}, Z_ = { class: "form-field form-field--checkbox" }, e2 = { class: "form-checkbox" }, t2 = {
  key: 0,
  class: "form-field"
}, s2 = ["placeholder"], o2 = {
  key: 0,
  class: "form-info"
}, n2 = {
  key: 1,
  class: "form-suggestion"
}, a2 = {
  key: 2,
  class: "form-error"
}, l2 = {
  key: 3,
  class: "form-info"
}, i2 = {
  key: 1,
  class: "wizard-step"
}, r2 = {
  key: 0,
  class: "progress-check-loading"
}, d2 = {
  key: 0,
  class: "cli-warning"
}, c2 = { class: "cli-warning-header" }, u2 = {
  key: 1,
  class: "env-landing"
}, m2 = { class: "env-list" }, v2 = ["value"], f2 = { class: "env-name" }, p2 = {
  key: 2,
  class: "env-create"
}, g2 = { class: "form-field" }, h2 = { class: "form-field" }, y2 = ["value"], w2 = { class: "form-field" }, k2 = ["disabled"], b2 = ["value"], _2 = { class: "form-field" }, $2 = ["value"], C2 = { class: "form-field form-field--checkbox" }, x2 = { class: "form-checkbox" }, S2 = {
  key: 0,
  class: "form-error"
}, I2 = {
  key: 1,
  class: "env-creating"
}, E2 = { class: "creating-intro" }, P2 = {
  key: 3,
  class: "env-import"
}, R2 = { class: "wizard-footer" }, M2 = { class: "wizard-footer-actions" }, Ht = 10, T2 = 600 * 1e3, Qs = 1800 * 1e3, D2 = /* @__PURE__ */ ne({
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
      initializeWorkspace: f,
      getInitializeProgress: v,
      validatePath: u,
      createEnvironment: m,
      getCreateProgress: d,
      getImportProgress: p,
      getComfyUIReleases: w
    } = Ye(), k = h(n.initialStep || 1), _ = h(null), b = h("landing"), T = h(!1), R = h(!1), $ = h(!1), C = h(!1), B = h(null), S = h(n.initialStep === 2), M = h(n.defaultPath), Q = h(!!n.detectedModelsDir), F = h(n.detectedModelsDir || ""), j = h(null), x = h(null), D = h(null), A = h(null), de = h("my-new-env"), ee = h(mo), Y = h("latest"), re = h(vo), X = h(!0), N = h(null), z = h(null), E = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), ce = h(!1), se = h(!1), ke = h(!1), Se = h({ progress: 0, message: "" }), Te = h({ progress: 0, message: "" }), Ne = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ue = h(0), he = h(null), Ie = h(0), Z = h(null), ie = O(() => {
      var P, V;
      const fe = (P = M.value) == null ? void 0 : P.trim(), K = !j.value, q = !Q.value || !x.value && ((V = F.value) == null ? void 0 : V.trim());
      return fe && K && q;
    }), ge = O(() => {
      var fe;
      return (fe = de.value) == null ? void 0 : fe.trim();
    }), Oe = O(() => !!(k.value === 2 || z.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Xe = O(() => z.value || n.workspacePath || null);
    async function st() {
      var fe;
      if (j.value = null, !!((fe = M.value) != null && fe.trim()))
        try {
          const K = await u({ path: M.value, type: "workspace" });
          K.valid || (j.value = K.error || "Invalid path");
        } catch (K) {
          j.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Ee() {
      var fe;
      if (x.value = null, D.value = null, A.value = null, !!((fe = F.value) != null && fe.trim()))
        try {
          const K = await u({ path: F.value, type: "models" });
          if (K.valid)
            A.value = K.model_count ?? null;
          else if (x.value = K.error || "Invalid path", K.suggestion) {
            D.value = K.suggestion, F.value = K.suggestion, x.value = null;
            const q = await u({ path: K.suggestion, type: "models" });
            q.valid && (A.value = q.model_count ?? null);
          }
        } catch (K) {
          x.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Fe() {
      var fe, K, q, P, V;
      if (j.value = null, x.value = null, await st(), (fe = j.value) != null && fe.includes("already exists")) {
        j.value = null, z.value = ((K = M.value) == null ? void 0 : K.trim()) || n.defaultPath, k.value = 2, qe();
        return;
      }
      if (!j.value && !(Q.value && ((q = F.value) != null && q.trim()) && (await Ee(), x.value))) {
        se.value = !0;
        try {
          await f({
            workspace_path: ((P = M.value) == null ? void 0 : P.trim()) || n.defaultPath,
            models_directory: Q.value && ((V = F.value) == null ? void 0 : V.trim()) || null
          }), ue.value = 0, he.value = Date.now();
          const oe = setInterval(async () => {
            var be;
            if (he.value && Date.now() - he.value > T2) {
              clearInterval(oe), se.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const We = await v();
              if (ue.value = 0, We.state === "idle" && se.value) {
                clearInterval(oe), se.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Se.value = { progress: We.progress, message: We.message }, We.state === "complete" ? (clearInterval(oe), se.value = !1, z.value = ((be = M.value) == null ? void 0 : be.trim()) || n.defaultPath, k.value = 2, qe()) : We.state === "error" && (clearInterval(oe), se.value = !1, j.value = We.error || "Workspace creation failed");
            } catch (We) {
              ue.value++, console.warn(`Polling failure ${ue.value}/${Ht}:`, We), ue.value >= Ht && (clearInterval(oe), se.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (oe) {
          se.value = !1, j.value = oe instanceof Error ? oe.message : "Failed to create workspace";
        }
      }
    }
    async function Qe() {
      ke.value = !0, N.value = null;
      try {
        const fe = {
          name: de.value.trim() || "my-new-env",
          python_version: ee.value,
          comfyui_version: Y.value,
          torch_backend: re.value,
          switch_after: X.value,
          workspace_path: z.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await m(fe)).status === "started") {
          Ie.value = 0, Z.value = Date.now();
          const q = setInterval(async () => {
            if (Z.value && Date.now() - Z.value > Qs) {
              clearInterval(q), ke.value = !1, N.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const P = await d();
              if (Ie.value = 0, P.state === "idle" && ke.value) {
                clearInterval(q), ke.value = !1, N.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Te.value = {
                progress: P.progress ?? 0,
                message: P.message,
                phase: P.phase
              }, P.state === "complete") {
                clearInterval(q), ke.value = !1;
                const V = P.environment_name || fe.name;
                X.value ? i("complete", V, z.value) : (b.value = "landing", i("environment-created-no-switch", V));
              } else P.state === "error" && (clearInterval(q), ke.value = !1, N.value = P.error || "Environment creation failed");
            } catch (P) {
              Ie.value++, console.warn(`Polling failure ${Ie.value}/${Ht}:`, P), Ie.value >= Ht && (clearInterval(q), ke.value = !1, N.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (fe) {
        ke.value = !1, N.value = fe instanceof Error ? fe.message : "Unknown error";
      }
    }
    async function qe() {
      ce.value = !0;
      try {
        E.value = await w();
      } catch (fe) {
        console.error("Failed to load ComfyUI releases:", fe);
      } finally {
        ce.value = !1;
      }
    }
    function it() {
      _.value && i("switch-environment", _.value, z.value);
    }
    function _e() {
      b.value === "create" || b.value === "import" ? b.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function He(fe, K) {
      R.value = !1, K ? i("complete", fe, z.value) : (i("environment-created-no-switch", fe), b.value = "landing");
    }
    function De() {
    }
    je(async () => {
      if (n.detectedModelsDir && (F.value = n.detectedModelsDir), n.workspacePath && (z.value = n.workspacePath), k.value === 2) {
        qe();
        const fe = setTimeout(() => {
          S.value = !1;
        }, 3e3);
        await et(), clearTimeout(fe), S.value = !1;
      }
    });
    async function et() {
      try {
        const fe = await d();
        if (console.log("[ComfyGit] Create progress check:", fe.state, fe), fe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", fe.environment_name), b.value = "create", ke.value = !0, de.value = fe.environment_name || "my-new-env", Te.value = {
            progress: fe.progress ?? 0,
            message: fe.message,
            phase: fe.phase
          }, ze();
          return;
        }
      } catch (fe) {
        console.log("[ComfyGit] Create progress check failed:", fe);
      }
      try {
        const fe = await p();
        console.log("[ComfyGit] Import progress check:", fe.state, fe), fe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", fe.environment_name), B.value = {
          message: fe.message || "Importing...",
          phase: fe.phase || "",
          progress: fe.progress ?? 0,
          environmentName: fe.environment_name || ""
        }, C.value = !0, b.value = "import", R.value = !0);
      } catch (fe) {
        console.log("[ComfyGit] Import progress check failed:", fe);
      }
    }
    async function ze() {
      Ie.value = 0, Z.value = Date.now();
      let fe = null;
      const K = async () => {
        if (Z.value && Date.now() - Z.value > Qs)
          return fe && clearInterval(fe), ke.value = !1, N.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const P = await d();
          if (Ie.value = 0, P.state === "idle" && ke.value)
            return fe && clearInterval(fe), ke.value = !1, N.value = "Environment creation was interrupted. Please try again.", !1;
          if (Te.value = {
            progress: P.progress ?? 0,
            message: P.message,
            phase: P.phase
          }, P.state === "complete") {
            fe && clearInterval(fe), ke.value = !1;
            const V = P.environment_name || de.value;
            return i("complete", V, z.value), !1;
          } else if (P.state === "error")
            return fe && clearInterval(fe), ke.value = !1, N.value = P.error || "Environment creation failed", !1;
          return !0;
        } catch (P) {
          return Ie.value++, console.warn(`Polling failure ${Ie.value}/${Ht}:`, P), Ie.value >= Ht ? (fe && clearInterval(fe), ke.value = !1, N.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (fe = setInterval(async () => {
        !await K() && fe && clearInterval(fe);
      }, 2e3));
    }
    return (fe, K) => (s(), o(W, null, [
      y(lt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (q) => fe.$emit("close"))
      }, {
        header: l(() => [
          K[20] || (K[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", q_, [
            y(yo),
            K[19] || (K[19] = e("span", { class: "header-divider" }, null, -1)),
            Oe.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (q) => T.value = !0)
            }, [...K[17] || (K[17] = [
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
              onClick: K[1] || (K[1] = (q) => fe.$emit("close")),
              title: "Close"
            }, [...K[18] || (K[18] = [
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
          var q;
          return [
            k.value === 1 ? (s(), o("div", Y_, [
              K[24] || (K[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", J_, [
                K[21] || (K[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (P) => M.value = P),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, X_), [
                  [Ft, M.value]
                ]),
                j.value ? (s(), o("p", Q_, a(j.value), 1)) : r("", !0)
              ]),
              e("div", Z_, [
                e("label", e2, [
                  Ue(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (P) => Q.value = P)
                  }, null, 512), [
                    [hs, Q.value]
                  ]),
                  K[22] || (K[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              Q.value ? (s(), o("div", t2, [
                K[23] || (K[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (P) => F.value = P),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, s2), [
                  [Ft, F.value]
                ]),
                t.detectedModelsDir && !F.value ? (s(), o("p", o2, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                D.value ? (s(), o("p", n2, " Did you mean: " + a(D.value), 1)) : r("", !0),
                x.value ? (s(), o("p", a2, a(x.value), 1)) : r("", !0),
                A.value !== null && !x.value ? (s(), o("p", l2, " Found " + a(A.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              se.value ? (s(), I(ks, {
                key: 1,
                progress: Se.value.progress,
                message: Se.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            k.value === 2 ? (s(), o("div", i2, [
              S.value ? (s(), o("div", r2, [...K[25] || (K[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(W, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", d2, [
                  e("div", c2, [
                    K[27] || (K[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (P) => $.value = !0),
                      title: "Dismiss"
                    }, [...K[26] || (K[26] = [
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
                  K[29] || (K[29] = e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  K[30] || (K[30] = e("div", { class: "cli-warning-commands" }, [
                    e("code", null, "pipx install comfygit"),
                    e("span", { class: "cli-warning-or" }, "or"),
                    e("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : r("", !0),
                b.value === "landing" ? (s(), o("div", u2, [
                  K[34] || (K[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (P) => b.value = "create")
                  }, [...K[31] || (K[31] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: K[7] || (K[7] = (P) => {
                      C.value = !1, b.value = "import";
                    })
                  }, [...K[32] || (K[32] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (q = n.existingEnvironments) != null && q.length ? (s(), o(W, { key: 0 }, [
                    K[33] || (K[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", m2, [
                      (s(!0), o(W, null, ae(n.existingEnvironments, (P) => (s(), o("label", {
                        key: P,
                        class: pe(["env-option", { selected: _.value === P }])
                      }, [
                        Ue(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: P,
                          "onUpdate:modelValue": K[8] || (K[8] = (V) => _.value = V)
                        }, null, 8, v2), [
                          [zt, _.value]
                        ]),
                        e("span", f2, a(P), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : b.value === "create" ? (s(), o("div", p2, [
                  ke.value ? (s(), o("div", I2, [
                    e("p", E2, [
                      K[41] || (K[41] = g(" Creating environment ", -1)),
                      e("strong", null, a(de.value), 1),
                      K[42] || (K[42] = g("... ", -1))
                    ]),
                    y(ks, {
                      progress: Te.value.progress,
                      message: Te.value.message,
                      "current-phase": Te.value.phase,
                      "show-steps": !0,
                      steps: Ne
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(W, { key: 0 }, [
                    K[40] || (K[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", g2, [
                      K[35] || (K[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Ue(e("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (P) => de.value = P),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Ft, de.value]
                      ])
                    ]),
                    e("div", h2, [
                      K[36] || (K[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (P) => ee.value = P),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ae(Re(uo), (P) => (s(), o("option", {
                          key: P,
                          value: P
                        }, a(P), 9, y2))), 128))
                      ], 512), [
                        [Et, ee.value]
                      ])
                    ]),
                    e("div", w2, [
                      K[37] || (K[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (P) => Y.value = P),
                        class: "form-select",
                        disabled: ce.value
                      }, [
                        (s(!0), o(W, null, ae(E.value, (P) => (s(), o("option", {
                          key: P.tag_name,
                          value: P.tag_name
                        }, a(P.name), 9, b2))), 128))
                      ], 8, k2), [
                        [Et, Y.value]
                      ])
                    ]),
                    e("div", _2, [
                      K[38] || (K[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (P) => re.value = P),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ae(Re(zs), (P) => (s(), o("option", {
                          key: P,
                          value: P
                        }, a(P) + a(P === "auto" ? " (detect GPU)" : ""), 9, $2))), 128))
                      ], 512), [
                        [Et, re.value]
                      ])
                    ]),
                    e("div", C2, [
                      e("label", x2, [
                        Ue(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (P) => X.value = P)
                        }, null, 512), [
                          [hs, X.value]
                        ]),
                        K[39] || (K[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    N.value ? (s(), o("div", S2, a(N.value), 1)) : r("", !0)
                  ], 64))
                ])) : b.value === "import" ? (s(), o("div", P2, [
                  y(go, {
                    "workspace-path": z.value,
                    "resume-import": C.value,
                    "initial-progress": B.value ?? void 0,
                    onImportComplete: He,
                    onImportStarted: K[14] || (K[14] = (P) => R.value = !0),
                    onSourceCleared: De
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", R2, [
            y(wo),
            e("div", M2, [
              k.value === 1 ? (s(), I(we, {
                key: 0,
                variant: "primary",
                disabled: !ie.value || se.value,
                onClick: Fe
              }, {
                default: l(() => [
                  g(a(se.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (s(), o(W, { key: 1 }, [
                !ke.value && !R.value && (b.value !== "landing" || n.setupState === "no_workspace" && !z.value) ? (s(), I(we, {
                  key: 0,
                  variant: "secondary",
                  onClick: _e
                }, {
                  default: l(() => [...K[44] || (K[44] = [
                    g(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                b.value === "create" ? (s(), I(we, {
                  key: 1,
                  variant: "primary",
                  disabled: !ge.value || ke.value,
                  onClick: Qe
                }, {
                  default: l(() => [
                    g(a(ke.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                b.value === "landing" && _.value ? (s(), I(we, {
                  key: 2,
                  variant: "primary",
                  onClick: it
                }, {
                  default: l(() => [
                    g(" Switch to " + a(_.value), 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ], 64)) : r("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      T.value ? (s(), I(K_, {
        key: 0,
        "workspace-path": Xe.value,
        onClose: K[16] || (K[16] = (q) => T.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), L2 = /* @__PURE__ */ le(D2, [["__scopeId", "data-v-9a9aadc0"]]), z2 = { class: "comfygit-panel" }, U2 = { class: "panel-header" }, N2 = { class: "header-left" }, O2 = {
  key: 0,
  class: "header-info"
}, A2 = { class: "header-actions" }, B2 = { class: "env-switcher" }, F2 = {
  key: 0,
  class: "header-info"
}, V2 = { class: "branch-name" }, W2 = { class: "panel-main" }, G2 = { class: "sidebar" }, j2 = { class: "sidebar-content" }, H2 = { class: "sidebar-section" }, K2 = { class: "sidebar-section" }, q2 = { class: "sidebar-section" }, Y2 = { class: "sidebar-footer" }, J2 = { class: "content-area" }, X2 = {
  key: 0,
  class: "error-message"
}, Q2 = {
  key: 1,
  class: "loading"
}, Z2 = { class: "dialog-content env-selector-dialog" }, e$ = { class: "dialog-header" }, t$ = { class: "dialog-body" }, s$ = { class: "env-list" }, o$ = { class: "env-info" }, n$ = { class: "env-name-row" }, a$ = { class: "env-indicator" }, l$ = { class: "env-name" }, i$ = {
  key: 0,
  class: "env-branch"
}, r$ = {
  key: 1,
  class: "current-label"
}, d$ = { class: "env-stats" }, c$ = ["onClick"], u$ = { class: "toast-container" }, m$ = { class: "toast-message" }, v$ = /* @__PURE__ */ ne({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: f,
      getHistory: v,
      getBranches: u,
      checkout: m,
      createBranch: d,
      switchBranch: p,
      deleteBranch: w,
      getEnvironments: k,
      switchEnvironment: _,
      getSwitchProgress: b,
      deleteEnvironment: T,
      syncEnvironmentManually: R,
      repairWorkflowModels: $,
      getSetupStatus: C
    } = Ye(), B = oo(), S = h(null), M = h([]), Q = h([]), F = h([]), j = O(() => F.value.find((G) => G.is_current)), x = h(null), D = h(!1), A = h(1), de = O(() => {
      var G;
      return ((G = x.value) == null ? void 0 : G.state) || "managed";
    }), ee = h(!1), Y = h(null), re = h(null), X = h(!1), N = h(null), z = h(null), E = h(null), ce = h(!1), se = h(!1), ke = h(""), Se = h(null), Te = h({ state: "idle", progress: 0, message: "" });
    let Ne = null, ue = null;
    const he = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Ie = n.initialView ? he[n.initialView] : null, Z = h((Ie == null ? void 0 : Ie.view) ?? "status"), ie = h((Ie == null ? void 0 : Ie.section) ?? "this-env");
    function ge(G, U) {
      Z.value = G, ie.value = U;
    }
    function Oe(G) {
      const ye = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[G];
      ye && ge(ye.view, ye.section);
    }
    function Xe() {
      ge("branches", "this-env");
    }
    function st() {
      i("close"), setTimeout(() => {
        var U;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const ye of G)
          if (((U = ye.textContent) == null ? void 0 : U.trim()) === "Manager") {
            ye.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Ee = h(null), Fe = h(!1), Qe = h(!1), qe = h([]);
    let it = 0;
    function _e(G, U = "info", ye = 3e3) {
      const Pe = ++it;
      return qe.value.push({ id: Pe, message: G, type: U }), ye > 0 && setTimeout(() => {
        qe.value = qe.value.filter((Ae) => Ae.id !== Pe);
      }, ye), Pe;
    }
    function He(G) {
      qe.value = qe.value.filter((U) => U.id !== G);
    }
    function De(G, U) {
      _e(G, U);
    }
    const et = O(() => {
      if (!S.value) return "neutral";
      const G = S.value.workflows, U = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? U ? "warning" : "success" : "error";
    });
    O(() => S.value ? et.value === "success" ? "All synced" : et.value === "warning" ? "Uncommitted changes" : et.value === "error" ? "Not synced" : "" : "");
    async function ze() {
      ee.value = !0, Y.value = null;
      try {
        const [G, U, ye, Pe] = await Promise.all([
          f(!0),
          v(),
          u(),
          k()
        ]);
        S.value = G, M.value = U.commits, Q.value = ye.branches, F.value = Pe, i("statusUpdate", G), N.value && await N.value.loadWorkflows(!0);
      } catch (G) {
        Y.value = G instanceof Error ? G.message : "Failed to load status", S.value = null, M.value = [], Q.value = [];
      } finally {
        ee.value = !1;
      }
    }
    function fe(G) {
      re.value = G;
    }
    async function K(G) {
      var ye;
      re.value = null;
      const U = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Ee.value = {
        title: U ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: U ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((ye = G.hash) == null ? void 0 : ye.slice(0, 7))}?`,
        details: U ? Ce() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: U,
        onConfirm: async () => {
          var Je;
          Ee.value = null, be();
          const Pe = _e(`Checking out ${G.short_hash || ((Je = G.hash) == null ? void 0 : Je.slice(0, 7))}...`, "info", 0), Ae = await m(G.hash, U);
          He(Pe), Ae.status === "success" ? _e("Restarting ComfyUI...", "success") : _e(Ae.message || "Checkout failed", "error");
        }
      };
    }
    async function q(G) {
      const U = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Ee.value = {
        title: U ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: U ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: U ? Ce() : void 0,
        warning: U ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ee.value = null, be();
          const ye = _e(`Switching to ${G}...`, "info", 0), Pe = await p(G, U);
          He(ye), Pe.status === "success" ? _e("Restarting ComfyUI...", "success") : _e(Pe.message || "Branch switch failed", "error");
        }
      };
    }
    async function P(G) {
      const U = _e(`Creating branch ${G}...`, "info", 0), ye = await d(G);
      He(U), ye.status === "success" ? (_e(`Branch "${G}" created`, "success"), await ze()) : _e(ye.message || "Failed to create branch", "error");
    }
    async function V(G, U = !1) {
      const ye = async (Pe) => {
        var Je;
        const Ae = _e(`Deleting branch ${G}...`, "info", 0);
        try {
          const gt = await w(G, Pe);
          He(Ae), gt.status === "success" ? (_e(`Branch "${G}" deleted`, "success"), await ze()) : (Je = gt.message) != null && Je.includes("not fully merged") ? Ee.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ee.value = null, await ye(!0);
            }
          } : _e(gt.message || "Failed to delete branch", "error");
        } catch (gt) {
          He(Ae);
          const Ot = gt instanceof Error ? gt.message : "Failed to delete branch";
          Ot.includes("not fully merged") ? Ee.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ee.value = null, await ye(!0);
            }
          } : _e(Ot, "error");
        }
      };
      Ee.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ee.value = null, await ye(U);
        }
      };
    }
    async function oe(G) {
      re.value = null;
      const U = prompt("Enter branch name:");
      if (U) {
        const ye = _e(`Creating branch ${U}...`, "info", 0), Pe = await d(U, G.hash);
        He(ye), Pe.status === "success" ? (_e(`Branch "${U}" created from ${G.short_hash}`, "success"), await ze()) : _e(Pe.message || "Failed to create branch", "error");
      }
    }
    function be() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function We() {
      Ee.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          Ee.value = null, be(), _e("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ft() {
      Ee.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          Ee.value = null, _e("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function tt(G, U) {
      X.value = !1, ke.value = G, Se.value = U || null, ce.value = !0;
    }
    async function dt() {
      ce.value = !1, se.value = !0, be(), Te.value = {
        progress: 10,
        state: ct(10),
        message: Tt(10)
      };
      try {
        await _(ke.value, Se.value || void 0), Jt(), Xt();
      } catch (G) {
        ut(), se.value = !1, _e(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), Te.value = { state: "idle", progress: 0, message: "" }, Se.value = null;
      }
    }
    function ct(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function Tt(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ct(G)] || "";
    }
    function Jt() {
      if (ue) return;
      let G = 10;
      const U = 60, ye = 5e3, Pe = 100, Ae = (U - G) / (ye / Pe);
      ue = window.setInterval(() => {
        if (G += Ae, G >= U && (G = U, ut()), Te.value.progress < U) {
          const Je = Math.floor(G);
          Te.value = {
            progress: Je,
            state: ct(Je),
            message: Tt(Je)
          };
        }
      }, Pe);
    }
    function ut() {
      ue && (clearInterval(ue), ue = null);
    }
    function Xt() {
      Ne || (Ne = window.setInterval(async () => {
        try {
          let G = await B.getStatus();
          if ((!G || G.state === "idle") && (G = await b()), !G)
            return;
          const U = G.progress || 0;
          U >= 60 && ut();
          const ye = Math.max(U, Te.value.progress), Pe = G.state && G.state !== "idle" && G.state !== "unknown", Ae = Pe ? G.state : ct(ye), Je = Pe && G.message || Tt(ye);
          Te.value = {
            state: Ae,
            progress: ye,
            message: Je
          }, G.state === "complete" ? (ut(), Ut(), se.value = !1, _e(`✓ Switched to ${ke.value}`, "success"), await ze(), ke.value = "") : G.state === "rolled_back" ? (ut(), Ut(), se.value = !1, _e("Switch failed, restored previous environment", "warning"), ke.value = "") : G.state === "critical_failure" && (ut(), Ut(), se.value = !1, _e(`Critical error during switch: ${G.message}`, "error"), ke.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function Ut() {
      ut(), Ne && (clearInterval(Ne), Ne = null);
    }
    function Qt() {
      var G;
      ce.value = !1, ke.value = "", (G = x.value) != null && G.state && x.value.state !== "managed" && (A.value = x.value.state === "no_workspace" ? 1 : 2, D.value = !0);
    }
    async function Zt(G) {
      Fe.value = !1, await ze(), _e(G.message, G.success ? "success" : "error");
    }
    async function es() {
      Qe.value = !1;
      const G = _e("Syncing environment...", "info", 0);
      try {
        const U = await R("skip", !0);
        if (He(G), U.status === "success") {
          const ye = [];
          U.nodes_installed.length && ye.push(`${U.nodes_installed.length} installed`), U.nodes_removed.length && ye.push(`${U.nodes_removed.length} removed`);
          const Pe = ye.length ? `: ${ye.join(", ")}` : "";
          _e(`✓ Environment synced${Pe}`, "success"), await ze();
        } else {
          const ye = U.errors.length ? U.errors.join("; ") : U.message;
          _e(`Sync failed: ${ye}`, "error");
        }
      } catch (U) {
        He(G), _e(`Sync error: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
      }
    }
    async function Nt(G) {
      var U;
      try {
        const ye = await $(G);
        ye.failed.length === 0 ? _e(`✓ Repaired ${ye.success} workflow${ye.success === 1 ? "" : "s"}`, "success") : _e(`Repaired ${ye.success}, failed: ${ye.failed.length}`, "warning"), await ze();
      } catch (ye) {
        _e(`Repair failed: ${ye instanceof Error ? ye.message : "Unknown error"}`, "error");
      } finally {
        (U = E.value) == null || U.resetRepairingState();
      }
    }
    async function Wt() {
      var U, ye;
      const G = _e("Repairing environment...", "info", 0);
      try {
        const Pe = await R("skip", !0);
        if (He(G), Pe.status === "success") {
          const Ae = [];
          Pe.nodes_installed.length && Ae.push(`${Pe.nodes_installed.length} installed`), Pe.nodes_removed.length && Ae.push(`${Pe.nodes_removed.length} removed`);
          const Je = Ae.length ? `: ${Ae.join(", ")}` : "";
          _e(`✓ Environment repaired${Je}`, "success"), (U = E.value) == null || U.closeDetailModal(), await ze();
        } else {
          const Ae = Pe.errors.length ? Pe.errors.join(", ") : Pe.message || "Unknown error";
          _e(`Repair failed: ${Ae}`, "error");
        }
      } catch (Pe) {
        He(G), _e(`Repair error: ${Pe instanceof Error ? Pe.message : "Unknown error"}`, "error");
      } finally {
        (ye = E.value) == null || ye.resetRepairingEnvironmentState();
      }
    }
    async function pt(G, U) {
      _e(`Environment '${G}' created`, "success"), await ze(), z.value && await z.value.loadEnvironments(), U && await tt(G);
    }
    async function ts(G) {
      var U;
      if (((U = j.value) == null ? void 0 : U.name) === G) {
        _e("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Ee.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${G}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Ee.value = null;
          try {
            const ye = await T(G);
            ye.status === "success" ? (_e(`Environment "${G}" deleted`, "success"), await ze(), z.value && await z.value.loadEnvironments()) : _e(ye.message || "Failed to delete environment", "error");
          } catch (ye) {
            _e(`Error deleting environment: ${ye instanceof Error ? ye.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ss(G, U) {
      D.value = !1;
      try {
        x.value = await C();
      } catch {
      }
      await tt(G, U);
    }
    function os() {
      D.value = !1, i("close");
    }
    async function Gt(G, U) {
      await tt(G, U);
    }
    async function ns(G) {
      await ze(), await tt(G);
    }
    async function H(G) {
      x.value = await C(), console.log(`Environment '${G}' created. Available for switching.`);
    }
    function me() {
      ge("environments", "all-envs"), setTimeout(() => {
        var G;
        (G = z.value) == null || G.openCreateModal();
      }, 100);
    }
    function Ce() {
      if (!S.value) return [];
      const G = [], U = S.value.workflows;
      return U.new.length && G.push(`${U.new.length} new workflow(s)`), U.modified.length && G.push(`${U.modified.length} modified workflow(s)`), U.deleted.length && G.push(`${U.deleted.length} deleted workflow(s)`), G;
    }
    return je(async () => {
      try {
        if (x.value = await C(), x.value.state === "no_workspace") {
          D.value = !0, A.value = 1;
          return;
        }
        if (x.value.state === "empty_workspace") {
          D.value = !0, A.value = 2;
          return;
        }
        if (x.value.state === "unmanaged") {
          D.value = !0, A.value = 2;
          return;
        }
      } catch (G) {
        console.warn("Setup status check failed, proceeding normally:", G);
      }
      await ze();
    }), (G, U) => {
      var ye, Pe, Ae, Je, gt, Ot, J, L, xe, Ke, _t, Dt;
      return s(), o("div", z2, [
        e("div", U2, [
          e("div", N2, [
            U[31] || (U[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (s(), o("div", O2)) : r("", !0)
          ]),
          e("div", A2, [
            y(yo),
            U[34] || (U[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: pe(["icon-btn", { spinning: ee.value }]),
              onClick: ze,
              title: "Refresh"
            }, [...U[32] || (U[32] = [
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
              onClick: U[0] || (U[0] = ($e) => i("close")),
              title: "Close"
            }, [...U[33] || (U[33] = [
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
        e("div", B2, [
          e("div", { class: "env-switcher-header" }, [
            U[35] || (U[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: We
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ft
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: U[1] || (U[1] = ($e) => ge("environments", "all-envs"))
          }, [
            S.value ? (s(), o("div", F2, [
              e("span", null, a(((ye = j.value) == null ? void 0 : ye.name) || ((Pe = S.value) == null ? void 0 : Pe.environment) || "Loading..."), 1),
              e("span", V2, "(" + a(S.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            U[36] || (U[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", W2, [
          e("div", G2, [
            e("div", j2, [
              e("div", H2, [
                U[37] || (U[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "status" && ie.value === "this-env" }]),
                  onClick: U[2] || (U[2] = ($e) => ge("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "workflows" }]),
                  onClick: U[3] || (U[3] = ($e) => ge("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "models-env" }]),
                  onClick: U[4] || (U[4] = ($e) => ge("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "branches" }]),
                  onClick: U[5] || (U[5] = ($e) => ge("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "history" }]),
                  onClick: U[6] || (U[6] = ($e) => ge("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "nodes" }]),
                  onClick: U[7] || (U[7] = ($e) => ge("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "debug-env" }]),
                  onClick: U[8] || (U[8] = ($e) => ge("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              U[40] || (U[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", K2, [
                U[38] || (U[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "environments" }]),
                  onClick: U[9] || (U[9] = ($e) => ge("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "model-index" }]),
                  onClick: U[10] || (U[10] = ($e) => ge("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "settings" }]),
                  onClick: U[11] || (U[11] = ($e) => ge("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "debug-workspace" }]),
                  onClick: U[12] || (U[12] = ($e) => ge("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              U[41] || (U[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", q2, [
                U[39] || (U[39] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "deploy" }]),
                  onClick: U[13] || (U[13] = ($e) => ge("deploy", "sharing"))
                }, " DEPLOY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "export" }]),
                  onClick: U[14] || (U[14] = ($e) => ge("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "import" }]),
                  onClick: U[15] || (U[15] = ($e) => ge("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "remotes" }]),
                  onClick: U[16] || (U[16] = ($e) => ge("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", Y2, [
              y(wo)
            ])
          ]),
          e("div", J2, [
            Y.value ? (s(), o("div", X2, a(Y.value), 1)) : !S.value && Z.value === "status" ? (s(), o("div", Q2, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              Z.value === "status" ? (s(), I(ll, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: E,
                status: S.value,
                "setup-state": de.value,
                onSwitchBranch: Xe,
                onCommitChanges: U[17] || (U[17] = ($e) => Fe.value = !0),
                onSyncEnvironment: U[18] || (U[18] = ($e) => Qe.value = !0),
                onViewWorkflows: U[19] || (U[19] = ($e) => ge("workflows", "this-env")),
                onViewHistory: U[20] || (U[20] = ($e) => ge("history", "this-env")),
                onViewDebug: U[21] || (U[21] = ($e) => ge("debug-env", "this-env")),
                onViewNodes: U[22] || (U[22] = ($e) => ge("nodes", "this-env")),
                onRepairMissingModels: Nt,
                onRepairEnvironment: Wt,
                onStartSetup: U[23] || (U[23] = ($e) => D.value = !0),
                onViewEnvironments: U[24] || (U[24] = ($e) => ge("environments", "all-envs")),
                onCreateEnvironment: me
              }, null, 8, ["status", "setup-state"])) : Z.value === "workflows" ? (s(), I(Em, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: ze
              }, null, 512)) : Z.value === "models-env" ? (s(), I(cv, {
                key: 2,
                onNavigate: Oe
              })) : Z.value === "branches" ? (s(), I(bl, {
                key: 3,
                branches: Q.value,
                current: ((Ae = S.value) == null ? void 0 : Ae.branch) || null,
                onSwitch: q,
                onCreate: P,
                onDelete: V
              }, null, 8, ["branches", "current"])) : Z.value === "history" ? (s(), I(Tl, {
                key: 4,
                commits: M.value,
                onSelect: fe,
                onCheckout: K
              }, null, 8, ["commits"])) : Z.value === "nodes" ? (s(), I(lf, {
                key: 5,
                "version-mismatches": ((gt = (Je = S.value) == null ? void 0 : Je.comparison) == null ? void 0 : gt.version_mismatches) || [],
                onOpenNodeManager: st,
                onRepairEnvironment: Wt,
                onToast: De
              }, null, 8, ["version-mismatches"])) : Z.value === "debug-env" ? (s(), I(fh, { key: 6 })) : Z.value === "environments" ? (s(), I(h1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: z,
                onSwitch: tt,
                onCreated: pt,
                onDelete: ts
              }, null, 512)) : Z.value === "model-index" ? (s(), I(Rv, {
                key: 8,
                onRefresh: ze
              })) : Z.value === "settings" ? (s(), I(ch, { key: 9 })) : Z.value === "debug-workspace" ? (s(), I(mh, { key: 10 })) : Z.value === "deploy" ? (s(), I(qk, {
                key: 11,
                onToast: De,
                onNavigate: Oe
              })) : Z.value === "export" ? (s(), I(K1, { key: 12 })) : Z.value === "import" ? (s(), I(B0, {
                key: 13,
                onImportCompleteSwitch: ns
              })) : Z.value === "remotes" ? (s(), I(Wg, {
                key: 14,
                onToast: De
              })) : r("", !0)
            ], 64))
          ])
        ]),
        re.value ? (s(), I(mb, {
          key: 0,
          commit: re.value,
          onClose: U[25] || (U[25] = ($e) => re.value = null),
          onCheckout: K,
          onCreateBranch: oe
        }, null, 8, ["commit"])) : r("", !0),
        Ee.value ? (s(), I(io, {
          key: 1,
          title: Ee.value.title,
          message: Ee.value.message,
          details: Ee.value.details,
          warning: Ee.value.warning,
          confirmLabel: Ee.value.confirmLabel,
          cancelLabel: Ee.value.cancelLabel,
          secondaryLabel: Ee.value.secondaryLabel,
          secondaryAction: Ee.value.secondaryAction,
          destructive: Ee.value.destructive,
          onConfirm: Ee.value.onConfirm,
          onCancel: U[26] || (U[26] = ($e) => Ee.value = null),
          onSecondary: Ee.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        y(c_, {
          show: ce.value,
          "from-environment": ((Ot = j.value) == null ? void 0 : Ot.name) || "unknown",
          "to-environment": ke.value,
          onConfirm: dt,
          onClose: Qt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Fe.value && S.value ? (s(), I(ho, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: U[27] || (U[27] = ($e) => Fe.value = !1),
          onCommitted: Zt
        }, null, 8, ["status"])) : r("", !0),
        Qe.value && S.value ? (s(), I(R_, {
          key: 3,
          show: Qe.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: es,
          onClose: U[28] || (U[28] = ($e) => Qe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        y(b_, {
          show: se.value,
          state: Te.value.state,
          progress: Te.value.progress,
          message: Te.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        X.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: U[30] || (U[30] = Ve(($e) => X.value = !1, ["self"]))
        }, [
          e("div", Z2, [
            e("div", e$, [
              U[43] || (U[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: U[29] || (U[29] = ($e) => X.value = !1)
              }, [...U[42] || (U[42] = [
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
            e("div", t$, [
              U[44] || (U[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", s$, [
                (s(!0), o(W, null, ae(F.value, ($e) => (s(), o("div", {
                  key: $e.name,
                  class: pe(["env-item", { current: $e.is_current }])
                }, [
                  e("div", o$, [
                    e("div", n$, [
                      e("span", a$, a($e.is_current ? "●" : "○"), 1),
                      e("span", l$, a($e.name), 1),
                      $e.current_branch ? (s(), o("span", i$, "(" + a($e.current_branch) + ")", 1)) : r("", !0),
                      $e.is_current ? (s(), o("span", r$, "CURRENT")) : r("", !0)
                    ]),
                    e("div", d$, a($e.workflow_count) + " workflows • " + a($e.node_count) + " nodes ", 1)
                  ]),
                  $e.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (At) => tt($e.name)
                  }, " SWITCH ", 8, c$))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        D.value ? (s(), I(L2, {
          key: 5,
          "default-path": ((J = x.value) == null ? void 0 : J.default_path) || "~/comfygit",
          "detected-models-dir": ((L = x.value) == null ? void 0 : L.detected_models_dir) || null,
          "initial-step": A.value,
          "existing-environments": ((xe = x.value) == null ? void 0 : xe.environments) || [],
          "cli-installed": ((Ke = x.value) == null ? void 0 : Ke.cli_installed) ?? !0,
          "setup-state": ((_t = x.value) == null ? void 0 : _t.state) || "no_workspace",
          "workspace-path": ((Dt = x.value) == null ? void 0 : Dt.workspace_path) || null,
          onComplete: ss,
          onClose: os,
          onSwitchEnvironment: Gt,
          onEnvironmentCreatedNoSwitch: H
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", u$, [
          y(Po, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(W, null, ae(qe.value, ($e) => (s(), o("div", {
                key: $e.id,
                class: pe(["toast", $e.type])
              }, [
                e("span", m$, a($e.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), f$ = /* @__PURE__ */ le(v$, [["__scopeId", "data-v-6229a0df"]]), p$ = { class: "item-header" }, g$ = { class: "item-info" }, h$ = { class: "filename" }, y$ = { class: "metadata" }, w$ = { class: "size" }, k$ = {
  key: 0,
  class: "type"
}, b$ = { class: "item-actions" }, _$ = {
  key: 0,
  class: "progress-section"
}, $$ = { class: "progress-bar" }, C$ = { class: "progress-stats" }, x$ = { class: "downloaded" }, S$ = { class: "speed" }, I$ = {
  key: 0,
  class: "eta"
}, E$ = {
  key: 1,
  class: "status-msg paused"
}, P$ = {
  key: 2,
  class: "status-msg queued"
}, R$ = {
  key: 3,
  class: "status-msg completed"
}, M$ = {
  key: 4,
  class: "status-msg failed"
}, T$ = {
  key: 0,
  class: "retries"
}, D$ = /* @__PURE__ */ ne({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(u) {
      if (u === 0) return "?";
      const m = u / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const m = Math.floor(u / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (u, m) => (s(), o("div", {
      class: pe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", p$, [
        e("div", g$, [
          e("div", h$, a(t.item.filename), 1),
          e("div", y$, [
            e("span", w$, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", k$, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", b$, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : r("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : r("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : r("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : r("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", _$, [
        e("div", $$, [
          e("div", {
            class: "progress-fill",
            style: Pt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", C$, [
          e("span", x$, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", S$, a(f(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", I$, a(v(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", E$, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", P$, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", R$, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", M$, [
        g(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", T$, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), is = /* @__PURE__ */ le(D$, [["__scopeId", "data-v-2110df65"]]), L$ = { class: "queue-title" }, z$ = { class: "count" }, U$ = { class: "queue-actions" }, N$ = { class: "action-label" }, O$ = {
  key: 0,
  class: "overall-progress"
}, A$ = { class: "progress-bar" }, B$ = {
  key: 0,
  class: "current-mini"
}, F$ = { class: "filename" }, V$ = { class: "speed" }, W$ = {
  key: 1,
  class: "queue-content"
}, G$ = {
  key: 0,
  class: "section"
}, j$ = {
  key: 1,
  class: "section"
}, H$ = { class: "section-header" }, K$ = { class: "section-label paused" }, q$ = { class: "items-list" }, Y$ = {
  key: 2,
  class: "section"
}, J$ = { class: "section-header" }, X$ = { class: "section-label" }, Q$ = { class: "items-list" }, Z$ = {
  key: 3,
  class: "section"
}, eC = { class: "section-header" }, tC = { class: "section-label" }, sC = { class: "items-list" }, oC = {
  key: 4,
  class: "section"
}, nC = { class: "section-header" }, aC = { class: "section-label failed" }, lC = { class: "items-list" }, iC = /* @__PURE__ */ ne({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: f,
      failedItems: v,
      pausedItems: u,
      hasItems: m,
      activeCount: d,
      cancelDownload: p,
      retryDownload: w,
      resumeDownload: k,
      resumeAllPaused: _,
      removeItem: b,
      clearCompleted: T
    } = vs(), R = h(!1);
    let $ = null;
    St(
      () => ({
        active: d.value,
        failed: v.value.length,
        paused: u.value.length,
        completed: f.value.length
      }),
      (M, Q) => {
        $ && (clearTimeout($), $ = null);
        const F = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, j = Q && (Q.active > 0 || Q.paused > 0);
        F && j && ($ = setTimeout(() => {
          T(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = O(() => {
      var F;
      if (c.items.length === 0) return 0;
      const M = f.value.length, Q = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((M + Q / 100) / c.items.length * 100);
    });
    function B(M) {
      p(M);
    }
    function S(M) {
      return M === 0 ? "" : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, Q) => (s(), I(Ze, { to: "body" }, [
      Re(m) ? (s(), o("div", {
        key: 0,
        class: pe(["model-download-queue", { minimized: !R.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: Q[0] || (Q[0] = (F) => R.value = !R.value)
        }, [
          e("div", L$, [
            Q[4] || (Q[4] = e("span", { class: "icon" }, "↓", -1)),
            Q[5] || (Q[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", z$, "(" + a(Re(d)) + "/" + a(Re(c).items.length) + ")", 1)
          ]),
          e("div", U$, [
            e("span", N$, a(R.value ? "minimize" : "expand"), 1)
          ])
        ]),
        R.value ? (s(), o("div", W$, [
          Re(n) ? (s(), o("div", G$, [
            Q[6] || (Q[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            y(is, {
              item: Re(n),
              onCancel: Q[1] || (Q[1] = (F) => B(Re(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Re(u).length > 0 ? (s(), o("div", j$, [
            e("div", H$, [
              e("span", K$, "Paused (" + a(Re(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: Q[2] || (Q[2] = //@ts-ignore
                (...F) => Re(_) && Re(_)(...F))
              }, "Resume All")
            ]),
            e("div", q$, [
              (s(!0), o(W, null, ae(Re(u), (F) => (s(), I(is, {
                key: F.id,
                item: F,
                onResume: (j) => Re(k)(F.id),
                onRemove: (j) => Re(b)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Re(i).length > 0 ? (s(), o("div", Y$, [
            e("div", J$, [
              e("span", X$, "Queued (" + a(Re(i).length) + ")", 1)
            ]),
            e("div", Q$, [
              (s(!0), o(W, null, ae(Re(i), (F) => (s(), I(is, {
                key: F.id,
                item: F,
                onCancel: (j) => B(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Re(f).length > 0 ? (s(), o("div", Z$, [
            e("div", eC, [
              e("span", tC, "Completed (" + a(Re(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: Q[3] || (Q[3] = //@ts-ignore
                (...F) => Re(T) && Re(T)(...F))
              }, "Clear")
            ]),
            e("div", sC, [
              (s(!0), o(W, null, ae(Re(f).slice(0, 3), (F) => (s(), I(is, {
                key: F.id,
                item: F,
                onRemove: (j) => Re(b)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Re(v).length > 0 ? (s(), o("div", oC, [
            e("div", nC, [
              e("span", aC, "Failed (" + a(Re(v).length) + ")", 1)
            ]),
            e("div", lC, [
              (s(!0), o(W, null, ae(Re(v), (F) => (s(), I(is, {
                key: F.id,
                item: F,
                onRetry: (j) => Re(w)(F.id),
                onRemove: (j) => Re(b)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", O$, [
          e("div", A$, [
            e("div", {
              class: "progress-fill",
              style: Pt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          Re(n) ? (s(), o("div", B$, [
            e("span", F$, a(Re(n).filename), 1),
            e("span", V$, a(S(Re(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), rC = /* @__PURE__ */ le(iC, [["__scopeId", "data-v-60751cfa"]]), dC = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', cC = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', uC = {
  comfy: dC,
  phosphor: cC
}, Ns = "comfy", ko = "comfygit-theme";
let Bt = null, bo = Ns;
function mC() {
  try {
    const t = localStorage.getItem(ko);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Ns;
}
function _o(t = Ns) {
  Bt && Bt.remove(), Bt = document.createElement("style"), Bt.id = "comfygit-theme-styles", Bt.setAttribute("data-theme", t), Bt.textContent = uC[t], document.head.appendChild(Bt), document.body.setAttribute("data-comfygit-theme", t), bo = t;
  try {
    localStorage.setItem(ko, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function vC() {
  return bo;
}
function fC(t) {
  _o(t);
}
function pC(t) {
  var v;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const f = i[c];
  return f && f.result === "error" && ((v = f.status) == null ? void 0 : v.status_str) === "error" ? (f.status.messages || [])[0] || "Unknown error" : null;
}
const Os = document.createElement("link");
Os.rel = "stylesheet";
Os.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Os);
const gC = mC();
_o(gC);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), fC(t);
  },
  getTheme: () => {
    const t = vC();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let yt = null, rt = null, us = null, rs = null, Zs = null;
const qt = h(null);
let As = "managed", $o = !1;
async function gs() {
  var t;
  if (!((t = Lt) != null && t.api)) return null;
  try {
    const c = await Lt.api.fetchApi("/v2/comfygit/status");
    c.ok && (qt.value = await c.json());
  } catch {
  }
}
async function Is() {
  var t;
  if ((t = Lt) != null && t.api)
    try {
      const c = await Lt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        As = n.state, $o = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Es() {
  var c;
  if (As === "managed" || !$o) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function hC() {
  if (!qt.value) return !1;
  const t = qt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || qt.value.has_changes;
}
function eo(t) {
  yt && yt.remove(), yt = document.createElement("div"), yt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", yt.appendChild(c), yt.addEventListener("click", (f) => {
    f.target === yt && xs();
  });
  const n = (f) => {
    f.key === "Escape" && (xs(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Ts({
    render: () => Ds(f$, {
      initialView: t,
      onClose: xs,
      onStatusUpdate: async (f) => {
        qt.value = f, ms(), await Is(), Ps(), Es();
      }
    })
  }).mount(c), document.body.appendChild(yt);
}
function xs() {
  yt && (yt.remove(), yt = null);
}
function yC(t) {
  ds(), rt = document.createElement("div"), rt.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  rt.style.position = "fixed", rt.style.top = `${c.bottom + 8}px`, rt.style.right = `${window.innerWidth - c.right}px`, rt.style.zIndex = "10001";
  const n = (f) => {
    rt && !rt.contains(f.target) && f.target !== t && (ds(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (f) => {
    f.key === "Escape" && (ds(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), us = Ts({
    render: () => Ds(ho, {
      status: qt.value,
      onClose: ds,
      onCommitted: (f) => {
        ds(), wC(f.success, f.message), gs().then(ms);
      }
    })
  }), us.mount(rt), document.body.appendChild(rt);
}
function ds() {
  us && (us.unmount(), us = null), rt && (rt.remove(), rt = null);
}
function wC(t, c) {
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
  const f = document.createElement("span");
  f.textContent = t ? "✓" : "✕", f.style.cssText = `
    color: ${i};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(f);
  const v = document.createElement("span");
  v.textContent = c, n.appendChild(v), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function kC() {
  rs || (rs = document.createElement("div"), rs.className = "comfygit-download-queue-root", Zs = Ts({
    render: () => Ds(rC)
  }), Zs.mount(rs), document.body.appendChild(rs), console.log("[ComfyGit] Model download queue mounted"));
}
let mt = null;
function ms() {
  if (!mt) return;
  const t = mt.querySelector(".commit-indicator");
  t && (t.style.display = hC() ? "block" : "none");
}
function Ps() {
  if (!mt) return;
  const t = As !== "managed";
  mt.disabled = t, mt.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Co = document.createElement("style");
Co.textContent = `
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
document.head.appendChild(Co);
Lt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = eo, mt = document.createElement("button"), mt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", mt.innerHTML = 'Commit <span class="commit-indicator"></span>', mt.title = "Quick Commit", mt.onclick = () => yC(mt), t.appendChild(c), t.appendChild(mt), (v = (f = Lt.menu) == null ? void 0 : f.settingsGroup) != null && v.element && (Lt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), kC();
    const { loadPendingDownloads: n } = vs();
    n(), await Promise.all([gs(), Is()]), ms(), Ps(), Es(), setTimeout(Es, 100), setInterval(async () => {
      await Promise.all([gs(), Is()]), ms(), Ps();
    }, 3e4);
    const i = Lt.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((w) => {
          (w.startsWith("workflow:") || w.startsWith("Comfy.OpenWorkflowsPaths:") || w.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(w);
        }), window.location.reload();
      }, m = function() {
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
        const _ = document.createElement("button");
        _.textContent = "Refresh", _.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, _.onmouseover = () => _.style.background = "var(--comfy-input-bg)", _.onmouseout = () => _.style.background = "var(--comfy-menu-bg)", _.onclick = () => u(), w.appendChild(_);
        const b = document.createElement("button");
        b.textContent = "×", b.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, b.onmouseover = () => b.style.opacity = "1", b.onmouseout = () => b.style.opacity = "0.6", b.onclick = () => w.remove(), w.appendChild(b), document.body.appendChild(w), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(w) {
        const k = document.getElementById("comfygit-error-toast");
        k && k.remove();
        const _ = document.createElement("div");
        _.id = "comfygit-error-toast", _.style.cssText = `
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
        const b = document.createElement("span");
        b.textContent = "⚠️", b.style.fontSize = "20px", _.appendChild(b);
        const T = document.createElement("div");
        T.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const R = document.createElement("div");
        R.textContent = "Node installation failed", R.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(R);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", T.appendChild($), _.appendChild(T);
        const C = document.createElement("button");
        C.textContent = "View Logs", C.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, C.onmouseover = () => C.style.background = "#c62828", C.onmouseout = () => C.style.background = "#e53935", C.onclick = () => {
          _.remove(), eo("debug-env");
        }, _.appendChild(C);
        const B = document.createElement("button");
        B.textContent = "×", B.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, B.onmouseover = () => B.style.opacity = "1", B.onmouseout = () => B.style.opacity = "0.6", B.onclick = () => _.remove(), _.appendChild(B), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", w), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && _.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (w) => {
        const { change_type: k, workflow_name: _ } = w.detail;
        console.log(`[ComfyGit] Workflow ${k}: ${_}`), await gs(), ms();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let p = !1;
      i.addEventListener("status", async (w) => {
        const k = w.detail != null;
        k && !p && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : m()), p = k;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (w) => {
        const k = pC(w.detail);
        k && d(k);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
