import { app as At } from "../../scripts/app.js";
import { defineComponent as oe, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Me, createBlock as E, resolveDynamicComponent as zs, normalizeClass as fe, withCtx as r, toDisplayString as a, createVNode as k, createTextVNode as h, computed as U, Fragment as F, renderList as ae, normalizeStyle as Et, ref as w, onMounted as je, watch as _t, Teleport as Qe, withModifiers as Ve, Transition as Eo, createSlots as Vt, withKeys as kt, reactive as gs, onUnmounted as so, readonly as Mo, unref as $e, withDirectives as Ue, vModelText as Dt, vModelRadio as Rt, vModelCheckbox as us, nextTick as Po, vModelSelect as It, vModelDynamic as To, TransitionGroup as Ro, createApp as ps, h as hs } from "vue";
const Lo = { class: "panel-layout" }, zo = {
  key: 0,
  class: "panel-layout-header"
}, Do = {
  key: 1,
  class: "panel-layout-search"
}, No = { class: "panel-layout-content" }, Uo = {
  key: 2,
  class: "panel-layout-footer"
}, Bo = /* @__PURE__ */ oe({
  __name: "PanelLayout",
  setup(t) {
    return (l, n) => (s(), o("div", Lo, [
      l.$slots.header ? (s(), o("div", zo, [
        Me(l.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      l.$slots.search ? (s(), o("div", Do, [
        Me(l.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", No, [
        Me(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (s(), o("div", Uo, [
        Me(l.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), le = (t, l) => {
  const n = t.__vccOpts || t;
  for (const [i, m] of l)
    n[i] = m;
  return n;
}, tt = /* @__PURE__ */ le(Bo, [["__scopeId", "data-v-21565df9"]]), Oo = {
  key: 0,
  class: "panel-title-prefix"
}, Ao = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Fo = /* @__PURE__ */ oe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (l, n) => (s(), E(zs(`h${t.level}`), {
      class: fe(["panel-title", t.variant])
    }, {
      default: r(() => [
        t.showPrefix ? (s(), o("span", Oo, a(t.prefix), 1)) : (s(), o("span", Ao)),
        Me(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vo = /* @__PURE__ */ le(Fo, [["__scopeId", "data-v-c3875efc"]]), Wo = ["title"], Go = ["width", "height"], jo = /* @__PURE__ */ oe({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (l, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (i) => l.$emit("click"))
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
}), oo = /* @__PURE__ */ le(jo, [["__scopeId", "data-v-6fc7f16d"]]), Ho = { class: "header-left" }, Ko = {
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
    return (l, n) => (s(), o("div", {
      class: fe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Ho, [
        k(Vo, { "show-prefix": t.showPrefix }, {
          default: r(() => [
            h(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(oo, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => l.$emit("info-click"))
        })) : d("", !0)
      ]),
      l.$slots.actions ? (s(), o("div", Ko, [
        Me(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ le(qo, [["__scopeId", "data-v-55a62cd6"]]), Yo = {
  key: 0,
  class: "section-title-count"
}, Xo = {
  key: 1,
  class: "section-title-icon"
}, Qo = /* @__PURE__ */ oe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (l, n) => (s(), E(zs(`h${t.level}`), {
      class: fe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && l.$emit("click"))
    }, {
      default: r(() => [
        Me(l.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Yo, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", Xo, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ct = /* @__PURE__ */ le(Qo, [["__scopeId", "data-v-559361eb"]]), Zo = { class: "status-grid" }, Jo = { class: "status-grid__columns" }, en = { class: "status-grid__column" }, tn = { class: "status-grid__title" }, sn = { class: "status-grid__column status-grid__column--right" }, on = { class: "status-grid__title" }, nn = {
  key: 0,
  class: "status-grid__footer"
}, an = /* @__PURE__ */ oe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (l, n) => (s(), o("div", Zo, [
      e("div", Jo, [
        e("div", en, [
          e("h4", tn, a(t.leftTitle), 1),
          Me(l.$slots, "left", {}, void 0, !0)
        ]),
        e("div", sn, [
          e("h4", on, a(t.rightTitle), 1),
          Me(l.$slots, "right", {}, void 0, !0)
        ])
      ]),
      l.$slots.footer ? (s(), o("div", nn, [
        Me(l.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ln = /* @__PURE__ */ le(an, [["__scopeId", "data-v-73b7ba3f"]]), rn = {
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
    const l = t, n = U(() => `status-item--${l.variant}`);
    return (i, m) => (s(), o("div", {
      class: fe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", rn, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", dn, a(t.count), 1)) : d("", !0),
      e("span", cn, a(t.label), 1)
    ], 2));
  }
}), yt = /* @__PURE__ */ le(un, [["__scopeId", "data-v-6f929183"]]), mn = { class: "issue-card__header" }, vn = { class: "issue-card__icon" }, fn = { class: "issue-card__title" }, gn = {
  key: 0,
  class: "issue-card__content"
}, pn = {
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
    const l = t, n = U(() => `issue-card--${l.severity}`);
    return (i, m) => (s(), o("div", {
      class: fe(["issue-card", n.value])
    }, [
      e("div", mn, [
        e("span", vn, a(t.icon), 1),
        e("h4", fn, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", gn, [
        t.description ? (s(), o("p", pn, a(t.description), 1)) : d("", !0),
        Me(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", hn, [
        (s(!0), o(F, null, ae(t.items, (v, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          m[0] || (m[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(v), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", yn, [
        Me(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ le(wn, [["__scopeId", "data-v-df6aa348"]]), kn = ["type", "disabled"], _n = {
  key: 0,
  class: "spinner"
}, bn = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: fe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => l.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", _n)) : d("", !0),
      t.loading ? d("", !0) : Me(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, kn));
  }
}), ne = /* @__PURE__ */ le(bn, [["__scopeId", "data-v-772abe47"]]), $n = { class: "empty-state" }, Cn = {
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
    return (l, n) => (s(), o("div", $n, [
      t.icon ? (s(), o("div", Cn, a(t.icon), 1)) : d("", !0),
      e("p", xn, a(t.message), 1),
      t.actionLabel ? (s(), E(ne, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => l.$emit("action"))
      }, {
        default: r(() => [
          h(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), pt = /* @__PURE__ */ le(Sn, [["__scopeId", "data-v-4466284f"]]), In = /* @__PURE__ */ oe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (l, n) => (s(), o("span", {
      class: fe(["detail-label"]),
      style: Et({ minWidth: t.minWidth })
    }, [
      Me(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ds = /* @__PURE__ */ le(In, [["__scopeId", "data-v-75e9eeb8"]]), En = /* @__PURE__ */ oe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (l, n) => (s(), o("span", {
      class: fe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Me(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ps = /* @__PURE__ */ le(En, [["__scopeId", "data-v-2f186e4c"]]), Mn = { class: "detail-row" }, Pn = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), o("div", Mn, [
      k(ds, { "min-width": t.labelMinWidth }, {
        default: r(() => [
          h(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), E(Ps, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: r(() => [
          h(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Me(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ge = /* @__PURE__ */ le(Pn, [["__scopeId", "data-v-ef15664a"]]), Tn = { class: "modal-header" }, Rn = { class: "modal-body" }, Ln = { class: "status-section" }, zn = {
  key: 0,
  class: "status-section"
}, Dn = { class: "section-header-row" }, Nn = {
  key: 0,
  class: "workflow-group"
}, Un = { class: "workflow-group-header" }, Bn = { class: "workflow-group-title" }, On = { class: "workflow-list" }, An = { class: "workflow-name" }, Fn = { class: "workflow-issue" }, Vn = {
  key: 1,
  class: "workflow-group"
}, Wn = { class: "workflow-group-header" }, Gn = { class: "workflow-group-title" }, jn = { class: "workflow-list" }, Hn = { class: "workflow-name" }, Kn = { class: "workflow-issue" }, qn = {
  key: 2,
  class: "workflow-group"
}, Yn = { class: "workflow-group-header" }, Xn = { class: "workflow-group-title" }, Qn = { class: "workflow-list" }, Zn = { class: "workflow-name" }, Jn = {
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
}, ga = {
  key: 0,
  class: "change-group"
}, pa = { class: "change-group-header" }, ha = { class: "change-group-title" }, ya = { class: "change-list" }, wa = { class: "node-name" }, ka = {
  key: 0,
  class: "dev-badge"
}, _a = {
  key: 1,
  class: "change-group"
}, ba = { class: "change-group-header" }, $a = { class: "change-group-title" }, Ca = { class: "change-list" }, xa = { class: "node-name" }, Sa = {
  key: 0,
  class: "dev-badge"
}, Ia = {
  key: 2,
  class: "change-group"
}, Ea = { class: "change-list" }, Ma = { class: "change-item" }, Pa = { class: "node-name" }, Ta = {
  key: 3,
  class: "change-group"
}, Ra = {
  key: 2,
  class: "status-section"
}, La = { class: "section-header-row" }, za = {
  key: 0,
  class: "drift-item"
}, Da = { class: "drift-list" }, Na = {
  key: 0,
  class: "drift-list-more"
}, Ua = {
  key: 1,
  class: "drift-item"
}, Ba = { class: "drift-list" }, Oa = {
  key: 0,
  class: "drift-list-more"
}, Aa = {
  key: 2,
  class: "drift-item"
}, Fa = { class: "drift-list" }, Va = { class: "version-actual" }, Wa = { class: "version-expected" }, Ga = {
  key: 0,
  class: "drift-list-more"
}, ja = {
  key: 3,
  class: "drift-item"
}, Ha = { class: "repair-action" }, Ka = {
  key: 3,
  class: "status-section"
}, qa = { class: "info-box" }, Ya = { class: "drift-list" }, Xa = {
  key: 0,
  class: "drift-list-more"
}, Qa = {
  key: 4,
  class: "status-section"
}, Za = { class: "warning-box" }, Ja = {
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
    const l = t, n = w(!1);
    je(() => {
      console.log("StatusDetailModal mounted, initial show value:", l.show);
    }), _t(() => l.show, (b, _) => {
      console.log("StatusDetailModal show prop changed from", _, "to", b);
    }, { immediate: !0 });
    const i = U(() => {
      var b, _, T;
      return ((T = (_ = (b = l.status) == null ? void 0 : b.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : T.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), m = U(() => {
      var b, _, T;
      return ((T = (_ = (b = l.status) == null ? void 0 : b.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : T.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), v = U(() => {
      var b, _, T;
      return ((T = (_ = (b = l.status) == null ? void 0 : b.workflows) == null ? void 0 : _.synced) == null ? void 0 : T.filter((x) => {
        var C, z, S;
        const $ = (S = (z = (C = l.status) == null ? void 0 : C.workflows) == null ? void 0 : z.analyzed) == null ? void 0 : S.find((R) => R.name === x);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = U(() => {
      var b, _, T, x, $;
      return (b = l.status) != null && b.workflows ? (((_ = l.status.workflows.new) == null ? void 0 : _.length) ?? 0) > 0 || (((T = l.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((x = l.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || ((($ = l.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), f = U(() => {
      var _, T, x;
      const b = (_ = l.status) == null ? void 0 : _.git_changes;
      return b ? (((T = b.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((x = b.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), c = U(() => {
      var b, _, T, x, $, C;
      return !u.value && !f.value && ((_ = (b = l.status) == null ? void 0 : b.comparison) == null ? void 0 : _.is_synced) && (((T = l.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((C = ($ = (x = l.status) == null ? void 0 : x.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), g = U(() => {
      var _, T;
      const b = (T = (_ = l.status) == null ? void 0 : _.git_changes) == null ? void 0 : T.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function p(b) {
      return typeof b == "string" ? b : b.name;
    }
    function y(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, _) => {
      var T, x, $, C, z, S, R, G, V, j, M, L, O, de, ee, Q, ce, X, D, N, P, ue;
      return s(), E(Qe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[7] || (_[7] = (J) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[6] || (_[6] = Ve(() => {
            }, ["stop"]))
          }, [
            e("div", Tn, [
              _[8] || (_[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (J) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", Rn, [
              e("div", Ln, [
                k(ct, { level: "4" }, {
                  default: r(() => [..._[9] || (_[9] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(Ge, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", zn, [
                e("div", Dn, [
                  k(ct, { level: "4" }, {
                    default: r(() => [..._[10] || (_[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[1] || (_[1] = (J) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", Nn, [
                  e("div", Un, [
                    _[11] || (_[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Bn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", On, [
                    (s(!0), o(F, null, ae(i.value, (J) => (s(), o("div", {
                      key: J.name,
                      class: "workflow-item"
                    }, [
                      e("span", An, a(J.name), 1),
                      e("span", Fn, a(J.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                m.value.length ? (s(), o("div", Vn, [
                  e("div", Wn, [
                    _[12] || (_[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Gn, "BROKEN (UNCOMMITTED) (" + a(m.value.length) + ")", 1)
                  ]),
                  e("div", jn, [
                    (s(!0), o(F, null, ae(m.value, (J) => (s(), o("div", {
                      key: J.name,
                      class: "workflow-item"
                    }, [
                      e("span", Hn, a(J.name), 1),
                      e("span", Kn, a(J.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (x = (T = t.status.workflows) == null ? void 0 : T.new) != null && x.length ? (s(), o("div", qn, [
                  e("div", Yn, [
                    _[13] || (_[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Xn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Qn, [
                    (s(!0), o(F, null, ae(t.status.workflows.new, (J) => (s(), o("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", Zn, a(J), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (C = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (s(), o("div", Jn, [
                  e("div", ea, [
                    _[14] || (_[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", ta, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", sa, [
                    (s(!0), o(F, null, ae(t.status.workflows.modified, (J) => (s(), o("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", oa, a(J), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (S = (z = t.status.workflows) == null ? void 0 : z.deleted) != null && S.length ? (s(), o("div", na, [
                  e("div", aa, [
                    _[15] || (_[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", la, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", ia, [
                    (s(!0), o(F, null, ae(t.status.workflows.deleted, (J) => (s(), o("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", ra, a(J), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                v.value.length ? (s(), o("div", da, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: _[2] || (_[2] = (J) => n.value = !n.value)
                  }, [
                    _[16] || (_[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ca, "SYNCED (" + a(v.value.length) + ")", 1),
                    e("span", ua, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", ma, [
                    (s(!0), o(F, null, ae(v.value, (J) => (s(), o("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", va, a(J), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              f.value ? (s(), o("div", fa, [
                k(ct, { level: "4" }, {
                  default: r(() => [..._[17] || (_[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (G = (R = t.status.git_changes) == null ? void 0 : R.nodes_added) != null && G.length ? (s(), o("div", ga, [
                  e("div", pa, [
                    _[18] || (_[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", ha, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ya, [
                    (s(!0), o(F, null, ae(t.status.git_changes.nodes_added, (J) => (s(), o("div", {
                      key: p(J),
                      class: "change-item"
                    }, [
                      e("span", wa, a(p(J)), 1),
                      y(J) ? (s(), o("span", ka, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (j = (V = t.status.git_changes) == null ? void 0 : V.nodes_removed) != null && j.length ? (s(), o("div", _a, [
                  e("div", ba, [
                    _[19] || (_[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", $a, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ca, [
                    (s(!0), o(F, null, ae(t.status.git_changes.nodes_removed, (J) => (s(), o("div", {
                      key: p(J),
                      class: "change-item"
                    }, [
                      e("span", xa, a(p(J)), 1),
                      y(J) ? (s(), o("span", Sa, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (M = t.status.git_changes) != null && M.workflow_changes ? (s(), o("div", Ia, [
                  _[20] || (_[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Ea, [
                    e("div", Ma, [
                      e("span", Pa, a(g.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (L = t.status.git_changes) != null && L.has_other_changes ? (s(), o("div", Ta, [..._[21] || (_[21] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : d("", !0)
              ])) : d("", !0),
              (O = t.status.comparison) != null && O.is_synced ? d("", !0) : (s(), o("div", Ra, [
                e("div", La, [
                  k(ct, { level: "4" }, {
                    default: r(() => [..._[22] || (_[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[3] || (_[3] = (J) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                _[26] || (_[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (ee = (de = t.status.comparison) == null ? void 0 : de.missing_nodes) != null && ee.length ? (s(), o("div", za, [
                  k(Ge, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Da, [
                    (s(!0), o(F, null, ae(t.status.comparison.missing_nodes.slice(0, 10), (J) => (s(), o("div", {
                      key: J,
                      class: "drift-list-item"
                    }, " - " + a(J), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Na, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (ce = (Q = t.status.comparison) == null ? void 0 : Q.extra_nodes) != null && ce.length ? (s(), o("div", Ua, [
                  k(Ge, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Ba, [
                    (s(!0), o(F, null, ae(t.status.comparison.extra_nodes.slice(0, 10), (J) => (s(), o("div", {
                      key: J,
                      class: "drift-list-item"
                    }, " - " + a(J), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Oa, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (D = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && D.length ? (s(), o("div", Aa, [
                  k(Ge, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", Fa, [
                    (s(!0), o(F, null, ae(t.status.comparison.version_mismatches.slice(0, 10), (J) => (s(), o("div", {
                      key: J.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      h(a(J.name) + ": ", 1),
                      e("span", Va, a(J.actual), 1),
                      _[23] || (_[23] = h(" → ", -1)),
                      e("span", Wa, a(J.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Ga, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ((N = t.status.comparison) == null ? void 0 : N.packages_in_sync) === !1 ? (s(), o("div", ja, [
                  k(Ge, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : d("", !0),
                e("div", Ha, [
                  k(ne, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: _[4] || (_[4] = (J) => b.$emit("repair"))
                  }, {
                    default: r(() => [..._[24] || (_[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  _[25] || (_[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ue = (P = t.status.comparison) == null ? void 0 : P.disabled_nodes) != null && ue.length ? (s(), o("div", Ka, [
                k(ct, { level: "4" }, {
                  default: r(() => [..._[27] || (_[27] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", qa, [
                  _[28] || (_[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ya, [
                  (s(!0), o(F, null, ae(t.status.comparison.disabled_nodes.slice(0, 10), (J) => (s(), o("div", {
                    key: J,
                    class: "drift-list-item"
                  }, " • " + a(J), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Xa, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Qa, [
                k(ct, { level: "4" }, {
                  default: r(() => [..._[29] || (_[29] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Za, [
                  _[30] || (_[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                _[31] || (_[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              c.value ? (s(), o("div", Ja, [..._[32] || (_[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", el, [
              k(ne, {
                variant: "secondary",
                onClick: _[5] || (_[5] = (J) => b.$emit("close"))
              }, {
                default: r(() => [..._[33] || (_[33] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), sl = /* @__PURE__ */ le(tl, [["__scopeId", "data-v-e2b37122"]]), ol = { class: "health-section-header" }, nl = { class: "suggestions-content" }, al = { class: "suggestions-text" }, ll = { style: { "margin-top": "var(--cg-space-3)" } }, il = {
  key: 1,
  class: "no-issues-text"
}, rl = /* @__PURE__ */ oe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: l, emit: n }) {
    const i = t, m = w(!1), v = w(!1);
    function u() {
      m.value = !0;
    }
    function f() {
      m.value = !1, g("view-workflows");
    }
    function c() {
      m.value = !1, g("view-nodes");
    }
    const g = n, p = w(!1), y = w(!1);
    function b() {
      y.value = !0, g("repair-environment");
    }
    function _() {
      y.value = !1;
    }
    function T() {
      m.value = !1;
    }
    const x = U(() => {
      const X = i.status.workflows.analyzed || [], D = X.filter(
        (N) => N.unresolved_models_count > 0 || N.ambiguous_models_count > 0
      );
      return D.length === 0 && i.status.missing_models_count > 0 ? X.filter((N) => N.sync_state === "synced") : D;
    });
    function $() {
      const X = x.value;
      X.length !== 0 && (p.value = !0, g("repair-missing-models", X.map((D) => D.name)));
    }
    function C() {
      p.value = !1;
    }
    l({ resetRepairingState: C, resetRepairingEnvironmentState: _, closeDetailModal: T });
    const z = U(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), S = U(() => i.status.has_changes), R = U(() => {
      const X = i.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), G = U(() => i.status.has_changes || z.value), V = U(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), j = U(() => i.status.git_changes.has_other_changes), M = U(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter((D) => D.status === "broken")) || [];
    }), L = U(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter(
        (D) => D.has_path_sync_issues && !D.has_issues
      )) || [];
    }), O = U(() => M.value.length > 0), de = U(() => O.value || L.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), ee = U(() => {
      const X = [];
      return i.status.workflows.new.length > 0 && X.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && X.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && X.push(`${i.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Q = U(() => {
      var N, P;
      const X = [], D = i.status.comparison;
      return (N = D.missing_nodes) != null && N.length && X.push(`${D.missing_nodes.length} missing node${D.missing_nodes.length === 1 ? "" : "s"}`), (P = D.extra_nodes) != null && P.length && X.push(`${D.extra_nodes.length} untracked node${D.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), ce = U(() => {
      var N, P;
      const X = [], D = i.status.comparison;
      return (N = D.extra_nodes) != null && N.length && (D.extra_nodes.slice(0, 3).forEach((ue) => {
        X.push(`Untracked: ${ue}`);
      }), D.extra_nodes.length > 3 && X.push(`...and ${D.extra_nodes.length - 3} more untracked`)), (P = D.missing_nodes) != null && P.length && (D.missing_nodes.slice(0, 3).forEach((ue) => {
        X.push(`Missing: ${ue}`);
      }), D.missing_nodes.length > 3 && X.push(`...and ${D.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, D) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, { title: "STATUS" })
        ]),
        content: r(() => [
          i.setupState === "no_workspace" ? (s(), E(vt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: r(() => [
              k(ne, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (N) => X.$emit("start-setup"))
              }, {
                default: r(() => [...D[13] || (D[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), E(vt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: r(() => [
              k(ne, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (N) => X.$emit("view-environments"))
              }, {
                default: r(() => [...D[14] || (D[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), E(vt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: r(() => [
              k(ne, {
                variant: "primary",
                size: "sm",
                onClick: D[2] || (D[2] = (N) => X.$emit("create-environment"))
              }, {
                default: r(() => [...D[15] || (D[15] = [
                  h(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: D[4] || (D[4] = (N) => v.value = !0),
            onMouseleave: D[5] || (D[5] = (N) => v.value = !1)
          }, [
            e("div", ol, [
              k(ct, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: r(() => [...D[16] || (D[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(Eo, { name: "fade" }, {
                default: r(() => [
                  v.value ? (s(), E(ne, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: r(() => [...D[17] || (D[17] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            k(ln, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Vt({
              left: r(() => [
                t.status.workflows.new.length ? (s(), E(yt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), E(yt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), E(yt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                k(yt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: r(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(yt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(yt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(yt, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                j.value ? (s(), E(yt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                S.value && !R.value && !j.value ? (s(), E(yt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                S.value ? d("", !0) : (s(), E(yt, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              G.value ? {
                name: "footer",
                fn: r(() => [
                  D[19] || (D[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", nl, [
                    e("span", al, a(ee.value), 1),
                    k(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: D[3] || (D[3] = (N) => X.$emit("commit-changes"))
                    }, {
                      default: r(() => [...D[18] || (D[18] = [
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
          t.status.is_detached_head ? (s(), E(vt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: r(() => [
              k(ne, {
                variant: "primary",
                size: "sm",
                onClick: D[6] || (D[6] = (N) => X.$emit("create-branch"))
              }, {
                default: r(() => [...D[20] || (D[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", ll, [
            k(ct, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: r(() => [...D[21] || (D[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            de.value ? (s(), o(F, { key: 0 }, [
              M.value.length > 0 ? (s(), E(vt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: M.value.map((N) => `${N.name} — ${N.issue_summary}`)
              }, {
                actions: r(() => [
                  k(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[7] || (D[7] = (N) => X.$emit("view-workflows"))
                  }, {
                    default: r(() => [...D[22] || (D[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              L.value.length > 0 ? (s(), E(vt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${L.value.length} workflow${L.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: L.value.map((N) => `${N.name} — ${N.models_needing_path_sync_count} model path${N.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: r(() => [
                  k(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[8] || (D[8] = (N) => X.$emit("view-workflows"))
                  }, {
                    default: r(() => [...D[23] || (D[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !O.value ? (s(), E(vt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: r(() => [
                  k(ne, {
                    variant: "primary",
                    size: "sm",
                    disabled: p.value,
                    onClick: $
                  }, {
                    default: r(() => [
                      h(a(p.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(ne, {
                    variant: "secondary",
                    size: "sm",
                    onClick: D[9] || (D[9] = (N) => X.$emit("view-workflows"))
                  }, {
                    default: r(() => [...D[24] || (D[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), E(vt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Q.value,
                items: ce.value
              }, {
                actions: r(() => [
                  k(ne, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: r(() => [...D[25] || (D[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[10] || (D[10] = (N) => X.$emit("view-nodes"))
                  }, {
                    default: r(() => [...D[26] || (D[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), E(vt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: r(() => [
                  k(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[11] || (D[11] = (N) => X.$emit("view-nodes"))
                  }, {
                    default: r(() => [...D[27] || (D[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : G.value ? (s(), o("span", il, "No issues")) : (s(), E(pt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(sl, {
        show: m.value,
        status: t.status,
        "is-repairing": y.value,
        onClose: D[12] || (D[12] = (N) => m.value = !1),
        onNavigateWorkflows: f,
        onNavigateNodes: c,
        onRepair: b
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), dl = /* @__PURE__ */ le(rl, [["__scopeId", "data-v-55fcd77f"]]), cl = ["type", "value", "placeholder", "disabled"], ul = /* @__PURE__ */ oe({
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
  setup(t, { expose: l, emit: n }) {
    const i = t, m = n, v = w(null);
    function u(f) {
      const c = f.target.value;
      m("update:modelValue", c);
    }
    return je(() => {
      i.autoFocus && v.value && v.value.focus();
    }), l({
      focus: () => {
        var f;
        return (f = v.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = v.value) == null ? void 0 : f.blur();
      }
    }), (f, c) => (s(), o("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: fe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        c[0] || (c[0] = kt((g) => f.$emit("enter"), ["enter"])),
        c[1] || (c[1] = kt((g) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: c[2] || (c[2] = (g) => f.$emit("focus")),
      onBlur: c[3] || (c[3] = (g) => f.$emit("blur"))
    }, null, 42, cl));
  }
}), ms = /* @__PURE__ */ le(ul, [["__scopeId", "data-v-0380d08f"]]), ml = { class: "branch-create-form" }, vl = { class: "form-actions" }, fl = /* @__PURE__ */ oe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: l }) {
    const n = l, i = w(""), m = U(() => {
      const f = i.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function v() {
      m.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (f, c) => (s(), o("div", ml, [
      k(ms, {
        modelValue: i.value,
        "onUpdate:modelValue": c[0] || (c[0] = (g) => i.value = g),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", vl, [
        k(ne, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: v
        }, {
          default: r(() => [...c[1] || (c[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(ne, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: r(() => [...c[2] || (c[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), gl = /* @__PURE__ */ le(fl, [["__scopeId", "data-v-7c500394"]]), pl = { class: "branch-list-item__indicator" }, hl = { class: "branch-list-item__name" }, yl = {
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
    return (l, n) => (s(), o("div", {
      class: fe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && l.$emit("click"))
    }, [
      e("span", pl, a(t.isCurrent ? "●" : "○"), 1),
      e("span", hl, a(t.branchName), 1),
      l.$slots.actions || t.showCurrentLabel ? (s(), o("div", yl, [
        Me(l.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", wl, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), _l = /* @__PURE__ */ le(kl, [["__scopeId", "data-v-c6581a24"]]), bl = {
  key: 2,
  class: "branch-list"
}, $l = /* @__PURE__ */ oe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: l }) {
    const n = l, i = w(!1);
    function m(u) {
      n("create", u), v();
    }
    function v() {
      i.value = !1;
    }
    return (u, f) => (s(), E(tt, null, {
      header: r(() => [
        k(st, { title: "BRANCHES" }, {
          actions: r(() => [
            i.value ? d("", !0) : (s(), E(ne, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: f[0] || (f[0] = (c) => i.value = !0)
            }, {
              default: r(() => [...f[1] || (f[1] = [
                h(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: r(() => [
        i.value ? (s(), E(gl, {
          key: 0,
          onCreate: m,
          onCancel: v
        })) : d("", !0),
        t.branches.length === 0 ? (s(), E(pt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", bl, [
          (s(!0), o(F, null, ae(t.branches, (c) => (s(), E(_l, {
            key: c.name,
            "branch-name": c.name,
            "is-current": c.is_current
          }, {
            actions: r(() => [
              c.is_current ? d("", !0) : (s(), E(ne, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (g) => u.$emit("delete", c.name)
              }, {
                default: r(() => [...f[2] || (f[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              c.is_current ? d("", !0) : (s(), E(ne, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (g) => u.$emit("switch", c.name)
              }, {
                default: r(() => [...f[3] || (f[3] = [
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
}), Cl = /* @__PURE__ */ le($l, [["__scopeId", "data-v-86784ddd"]]), xl = { class: "commit-list" }, Sl = /* @__PURE__ */ oe({
  __name: "CommitList",
  setup(t) {
    return (l, n) => (s(), o("div", xl, [
      Me(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Il = /* @__PURE__ */ le(Sl, [["__scopeId", "data-v-8c5ee761"]]), El = { class: "commit-hash" }, Ml = /* @__PURE__ */ oe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const l = t, n = U(() => l.hash.slice(0, l.length));
    return (i, m) => (s(), o("span", El, a(n.value), 1));
  }
}), no = /* @__PURE__ */ le(Ml, [["__scopeId", "data-v-7c333cc6"]]), Pl = { class: "commit-message" }, Tl = { class: "commit-date" }, Rl = /* @__PURE__ */ oe({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const n = t, i = l;
    function m() {
      n.clickable && i("click");
    }
    return (v, u) => (s(), o("div", {
      class: fe(["commit-item", { clickable: t.clickable }]),
      onClick: m
    }, [
      k(no, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Pl, a(t.message), 1),
      e("span", Tl, a(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Ve(() => {
        }, ["stop"]))
      }, [
        Me(v.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ll = /* @__PURE__ */ le(Rl, [["__scopeId", "data-v-dd7c621b"]]), zl = /* @__PURE__ */ oe({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (l, n) => (s(), E(tt, null, {
      header: r(() => [
        k(st, { title: "HISTORY" })
      ]),
      content: r(() => [
        t.commits.length === 0 ? (s(), E(pt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(Il, { key: 1 }, {
          default: r(() => [
            (s(!0), o(F, null, ae(t.commits, (i) => (s(), E(Ll, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (m) => l.$emit("select", i)
            }, {
              actions: r(() => [
                k(ne, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (m) => l.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: r(() => [...n[0] || (n[0] = [
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
}), Dl = /* @__PURE__ */ le(zl, [["__scopeId", "data-v-981c3c64"]]), Oe = gs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
function Ds() {
  const t = U(() => Oe.hasWorkspace ? Oe.hasEnvironments ? Oe.isManaged ? "managed" : "unmanaged" : "empty_workspace" : "no_workspace");
  function l(u) {
    Oe.hasWorkspace = u, u || (Oe.hasEnvironments = !1, Oe.isManaged = !1);
  }
  function n(u) {
    Oe.hasEnvironments = u, u || (Oe.isManaged = !1), u && !Oe.hasWorkspace && (Oe.hasWorkspace = !0);
  }
  function i(u) {
    Oe.isManaged = u, u && (Oe.hasWorkspace = !0, Oe.hasEnvironments = !0);
  }
  function m(u) {
    Oe.hasLegacyManager = u;
  }
  function v(u) {
    switch (u) {
      case "no_workspace":
        Oe.hasWorkspace = !1, Oe.hasEnvironments = !1, Oe.isManaged = !1;
        break;
      case "empty_workspace":
        Oe.hasWorkspace = !0, Oe.hasEnvironments = !1, Oe.isManaged = !1;
        break;
      case "unmanaged":
        Oe.hasWorkspace = !0, Oe.hasEnvironments = !0, Oe.isManaged = !1;
        break;
      case "managed":
        Oe.hasWorkspace = !0, Oe.hasEnvironments = !0, Oe.isManaged = !0;
        break;
    }
  }
  return {
    state: Oe,
    setupState: t,
    setHasWorkspace: l,
    setHasEnvironments: n,
    setIsManaged: i,
    setHasLegacyManager: m,
    setPreset: v
  };
}
const qs = /* @__PURE__ */ new Set(), Ys = [
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
  ...Array(12).fill(null).map((t, l) => ({
    name: `synced-workflow-${l + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + l,
    model_count: 1 + l % 3,
    sync_state: "synced"
  }))
], Nl = {
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
}, ao = [
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
], Ul = [
  ...ao,
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
], ns = [
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
], Bl = [
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
], as = [
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
], be = {
  // Environment Management
  getEnvironments: async () => (await _e(300), [
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
    await _e(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, l, n) => {
    await _e(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${l}`, n ? `cloned from ${n}` : "");
  },
  deleteEnvironment: async (t) => {
    await _e(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await _e(400), Ys),
  getWorkflowDetails: async (t) => (await _e(300), Nl[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await _e(800), {
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
  installWorkflowDeps: async (t, l, n) => {
    await _e(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${l}, models=${n}`);
  },
  setModelImportance: async (t, l, n) => {
    await _e(200), console.log(`[MOCK] Setting ${l} importance to ${n} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await _e(350), ao),
  getWorkspaceModels: async () => (await _e(400), Ul),
  getModelDetails: async (t) => (await _e(200), {
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
  updateModelSource: async (t, l) => {
    await _e(300), qs.add(t), console.log(`[MOCK] Added source for ${t}: ${l}`);
  },
  deleteModel: async (t) => {
    await _e(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await _e(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await _e(350);
    const t = ns.filter((n) => n.installed), l = ns.filter((n) => !n.installed);
    return {
      nodes: ns,
      total_count: ns.length,
      installed_count: t.length,
      missing_count: l.length
    };
  },
  installNode: async (t) => {
    await _e(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await _e(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await _e(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await _e(200), {
    workspace_path: "/workspace",
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0,
    confirm_destructive: !0,
    comfyui_extra_args: []
  }),
  updateConfig: async (t) => {
    await _e(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, l) => (await _e(250), (t ? as.filter((i) => i.level === t) : as).slice(0, l || 100)),
  getWorkspaceLogs: async (t, l) => {
    await _e(300);
    const n = [...as, ...as.map((m) => ({
      ...m,
      name: "comfygit.workspace"
    }))];
    return (t ? n.filter((m) => m.level === t) : n).slice(0, l || 100);
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
  getStatus: async () => {
    await _e(400);
    const { state: t } = Ds();
    return {
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
        synced: Ys.filter((l) => l.status === "synced").map((l) => l.name),
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
      missing_models_count: 1,
      has_legacy_manager: t.hasLegacyManager
    };
  },
  getCommitHistory: async (t = 10) => (await _e(300), Bl.slice(0, t)),
  getBranches: async () => (await _e(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (t) => {
    await _e(300), console.log(`[MOCK] Deleting branch: ${t}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await _e(300), {
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
  addRemote: async (t, l) => {
    await _e(400), console.log(`[MOCK] Adding remote: ${t} -> ${l}`);
  },
  removeRemote: async (t) => {
    await _e(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, l, n) => {
    await _e(400), console.log(`[MOCK] Updating remote ${t}: ${l}${n ? ` (push: ${n})` : ""}`);
  },
  fetchRemote: async (t) => {
    await _e(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await _e(300), {
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
    await _e(500);
    const l = {
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
      ...l,
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
      ...l,
      has_conflicts: !1,
      workflow_conflicts: []
    };
  },
  /**
   * Validate Merge - Check node version compatibility after workflow resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/validate-merge
   */
  validateMerge: async (t, l) => {
    await _e(400);
    const n = l.some((v) => v.resolution === "take_base"), i = l.some((v) => v.resolution === "take_target");
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
  pullFromRemote: async (t, l) => (await _e(1500), console.log(`[MOCK] Pulling from ${t} with options:`, l), l.resolutions && Math.random() < 0.1 ? {
    status: "error",
    pull_output: "",
    sync_result: { nodes_installed: [], nodes_removed: [], models_queued: 0, errors: [] },
    rolled_back: !0,
    error: "Simulated sync failure - merge rolled back"
  } : {
    status: "success",
    pull_output: "Already up to date.",
    sync_result: {
      nodes_installed: l.resolutions ? ["comfyui-animatediff"] : [],
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
  getPushPreview: async (t) => (await _e(400), {
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
  pushToRemote: async (t, l) => (await _e(1e3), console.log(`[MOCK] Pushing to ${t} with options:`, l), {
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
  analyzeWorkflow: async (t) => (await _e(600), {
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
  applyResolution: async (t, l, n) => {
    await _e(800);
    const i = [], m = [];
    return l.forEach((v, u) => {
      v.action === "install" && v.package_id && i.push(v.package_id);
    }), n.forEach((v, u) => {
      v.action === "download" && v.url ? m.push({
        filename: u,
        url: v.url,
        size: 65e8,
        target_path: v.target_path || `models/${u}`
      }) : v.action === "select" && v.selected_model && console.log(`[MOCK] Selected existing model: ${v.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: i,
      models_to_download: m,
      estimated_time_seconds: i.length * 30 + m.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, l = 10) => {
    await _e(400);
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
      results: n.slice(0, l),
      total: n.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (t, l = 10) => {
    await _e(400);
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
      results: n.slice(0, l),
      total: n.length
    };
  },
  // Export Validation - shows warnings for models without sources
  validateExport: async () => {
    await _e(400);
    const l = [
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
    ].filter(
      (n) => !qs.has(n.hash)
    );
    return {
      can_export: !0,
      blocking_issues: [],
      warnings: {
        models_without_sources: l
      }
    };
  },
  // Mock for blocked export (call this variant to test blocked UI)
  validateExportBlocked: async () => (await _e(400), {
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
    await _e(800);
    const l = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    return {
      status: "success",
      path: t || `/home/user/exports/production_export_${l}.tar.gz`,
      models_without_sources: 4
    };
  },
  // =============================================================================
  // Deploy Endpoints
  // =============================================================================
  getDeploySummary: async () => (await _e(300), {
    comfyui_version: "v0.3.48",
    node_count: 15,
    model_count: 8,
    models_with_sources: 6,
    models_without_sources: 2,
    workflow_count: 3,
    estimated_package_size_mb: 45.2
  }),
  testRunPodConnection: async (t, l) => (await _e(800), t.startsWith("rp_") ? {
    status: "success",
    message: "Connected to RunPod",
    credit_balance: 25.5
  } : {
    status: "error",
    message: 'Invalid API key format. Keys should start with "rp_"'
  }),
  getDataCenters: async () => (await _e(300), {
    data_centers: [
      { id: "US-IL-1", name: "United States", available: !0 },
      { id: "EU-CZ-1", name: "Europe (Czech)", available: !0 },
      { id: "EU-RO-1", name: "Europe (Romania)", available: !0 },
      { id: "CA-MTL-1", name: "Canada (Montreal)", available: !0 }
    ]
  }),
  getNetworkVolumes: async () => (await _e(400), {
    volumes: [
      {
        id: "5aio30csvw",
        name: "comfygit_workspace",
        size_gb: 100,
        data_center_id: "US-IL-1",
        data_center_name: "United States"
      },
      {
        id: "abc123xyz",
        name: "my-sd-models",
        size_gb: 200,
        data_center_id: "EU-CZ-1",
        data_center_name: "Europe"
      }
    ]
  }),
  getRunPodGpuTypes: async (t) => {
    await _e(400);
    const l = [
      { id: "NVIDIA RTX 4090", displayName: "RTX 4090", memoryInGb: 24, securePrice: 0.44, communityPrice: 0.34, available: !0, data_center_id: "US-IL-1" },
      { id: "NVIDIA RTX 3090", displayName: "RTX 3090", memoryInGb: 24, securePrice: 0.22, communityPrice: 0.16, available: !0, data_center_id: "US-IL-1" },
      { id: "NVIDIA A100 80GB", displayName: "A100 80GB", memoryInGb: 80, securePrice: 1.89, communityPrice: 1.49, available: !0, data_center_id: "US-IL-1" },
      { id: "NVIDIA RTX 4090", displayName: "RTX 4090", memoryInGb: 24, securePrice: 0.44, communityPrice: 0.34, available: !0, data_center_id: "EU-CZ-1" },
      { id: "NVIDIA RTX A6000", displayName: "RTX A6000", memoryInGb: 48, securePrice: 0.79, communityPrice: 0.59, available: !0, data_center_id: "EU-CZ-1" }
    ];
    return t ? { gpu_types: l.filter((n) => n.data_center_id === t) } : { gpu_types: l };
  },
  deployToRunPod: async (t) => (await _e(2e3), console.log("[MOCK] Deploying to RunPod:", t), {
    status: "success",
    pod_id: "mock_pod_" + Date.now(),
    message: "Pod created. Starting ComfyUI setup..."
  }),
  getRunPodPods: async () => (await _e(500), {
    pods: [
      {
        id: "mock_abc123",
        name: "my-comfyui-deploy",
        gpu_type: "NVIDIA RTX 4090",
        gpu_count: 1,
        status: "RUNNING",
        created_at: new Date(Date.now() - 36e5).toISOString(),
        cost_per_hour: 0.44,
        uptime_seconds: 3600,
        total_cost: 0.44,
        pod_url: "https://mock_abc123.runpod.net",
        comfyui_url: "https://mock_abc123-8188.proxy.runpod.net"
      },
      {
        id: "mock_def456",
        name: "test-deployment",
        gpu_type: "NVIDIA RTX 3090",
        gpu_count: 1,
        status: "EXITED",
        created_at: new Date(Date.now() - 864e5).toISOString(),
        cost_per_hour: 0.22,
        uptime_seconds: 900,
        total_cost: 0.06,
        pod_url: "https://mock_def456.runpod.net"
      }
    ]
  }),
  terminateRunPodPod: async (t) => (await _e(1e3), console.log(`[MOCK] Terminating pod: ${t}`), { status: "success", message: "Pod terminated" }),
  exportDeployPackage: async (t) => {
    await _e(1500);
    const l = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    return {
      status: "success",
      package_path: t || `/home/user/comfygit_deploy_${l}.tar.gz`,
      package_size_mb: 45.2,
      message: "Deploy package created successfully"
    };
  },
  getStoredRunPodKey: async () => (await _e(200), {
    has_key: !1
  }),
  clearRunPodKey: async () => (await _e(200), console.log("[MOCK] Cleared RunPod API key"), { status: "success" })
};
function _e(t) {
  return new Promise((l) => setTimeout(l, t));
}
function Ht() {
  return !0;
}
const De = {
  initState: "idle",
  initProgress: 0,
  initMessage: "No initialization in progress",
  initStartTime: null,
  modelsFound: 0
}, ze = {
  state: "idle",
  phase: null,
  progress: 0,
  message: "",
  startTime: null,
  envName: null
}, ls = [
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
function Ol() {
  if (De.initState === "idle" || De.initState === "complete" || De.initState === "error" || !De.initStartTime) return;
  const t = Date.now() - De.initStartTime;
  if (t < 2e3)
    De.initState = "creating_workspace", De.initProgress = Math.min(20, Math.floor(t / 100)), De.initMessage = "Creating workspace structure...";
  else if (t < 4e3)
    De.initState = "setting_models_dir", De.initProgress = 20 + Math.floor((t - 2e3) / 200), De.initMessage = "Configuring models directory...";
  else if (t < 8e3) {
    De.initState = "scanning_models";
    const l = Math.floor((t - 4e3) / 50);
    De.initProgress = 30 + Math.min(65, l);
    const n = Math.floor((t - 4e3) / 100);
    De.initMessage = `Scanning models (${n}/42)...`;
  } else
    De.initState = "complete", De.initProgress = 100, De.initMessage = "Complete! 42 models indexed", De.modelsFound = 42, De.initStartTime = null;
}
function Al() {
  if (ze.state === "idle" || ze.state === "complete" || ze.state === "error" || !ze.startTime) return;
  const t = Date.now() - ze.startTime;
  let l = !1;
  for (const n of ls)
    if (t < n.endTime) {
      ze.phase = n.id, ze.message = n.message;
      const i = ls.indexOf(n) - 1, m = i >= 0 ? ls[i].endTime : 0, v = i >= 0 ? ls[i].progress : 0, u = n.endTime - m, c = (t - m) / u;
      ze.progress = Math.floor(v + (n.progress - v) * c), l = !0;
      break;
    }
  l || (ze.state = "complete", ze.phase = "complete", ze.progress = 100, ze.message = `Environment '${ze.envName}' created successfully`, ze.startTime = null);
}
const Ne = {
  state: "idle",
  phase: null,
  progress: 0,
  message: "",
  startTime: null,
  envName: null
}, is = [
  { id: "clone_comfyui", endTime: 2e3, progress: 15, message: "Cloning/restoring ComfyUI..." },
  { id: "extract_builtins", endTime: 2500, progress: 20, message: "Extracting builtin nodes..." },
  { id: "configure_pytorch", endTime: 3500, progress: 35, message: "Configuring PyTorch backend..." },
  { id: "install_dependencies", endTime: 6e3, progress: 60, message: "Installing dependencies..." },
  { id: "sync_nodes", endTime: 7e3, progress: 70, message: "Syncing custom nodes..." },
  { id: "copy_workflows", endTime: 7500, progress: 80, message: "Copying workflows..." },
  { id: "resolve_models", endTime: 8e3, progress: 85, message: "Resolving models..." },
  { id: "download_models", endTime: 9500, progress: 95, message: "Downloading models..." },
  { id: "finalize", endTime: 1e4, progress: 100, message: "Finalizing environment..." }
];
function Fl() {
  if (Ne.state !== "importing" || !Ne.startTime) return;
  const t = Date.now() - Ne.startTime;
  for (const l of is)
    if (t < l.endTime) {
      Ne.phase = l.id, Ne.message = l.message;
      const n = is.indexOf(l) - 1, i = n >= 0 ? is[n].endTime : 0, m = n >= 0 ? is[n].progress : 0, v = l.endTime - i, u = t - i;
      Ne.progress = Math.floor(m + (l.progress - m) * (u / v));
      return;
    }
  Ne.state = "complete", Ne.phase = "complete", Ne.progress = 100, Ne.message = `Environment '${Ne.envName}' imported successfully`, Ne.startTime = null;
}
function qe() {
  const t = w(!1), l = w(null);
  async function n(q, ge) {
    var xt;
    if (!((xt = window.app) != null && xt.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi(q, ge);
    if (!Be.ok) {
      const Tt = await Be.json().catch(() => ({}));
      throw new Error(Tt.error || Tt.message || `Request failed: ${Be.status}`);
    }
    return Be.json();
  }
  async function i(q = !1) {
    return be.getStatus();
  }
  async function m(q, ge = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: ge })
    });
  }
  async function v(q = 10, ge = 0) {
    {
      const Be = await be.getCommitHistory(q);
      return {
        commits: Be,
        total: Be.length,
        offset: ge
      };
    }
  }
  async function u(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function f() {
    return be.validateExport();
  }
  async function c(q) {
    return be.exportEnvWithForce(q);
  }
  async function g() {
    return be.getBranches();
  }
  async function p(q) {
    return n(`/v2/comfygit/commit/${q}`);
  }
  async function y(q, ge = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: ge })
    });
  }
  async function b(q, ge = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: ge })
    });
  }
  async function _(q, ge = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: ge })
    });
  }
  async function T(q, ge = !1) {
    return await be.deleteBranch(q), { status: "success" };
  }
  async function x() {
    return be.getEnvironments();
  }
  async function $(q, ge) {
    return be.switchEnvironment(q);
  }
  async function C() {
    return null;
  }
  async function z(q) {
    return ze.state = "creating", ze.phase = "init_structure", ze.progress = 0, ze.message = "Creating environment structure...", ze.startTime = Date.now(), ze.envName = q.name, console.log("[MOCK] Starting environment creation:", q), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function S() {
    return Al(), {
      state: ze.state,
      phase: ze.phase ?? void 0,
      progress: ze.progress,
      message: ze.message,
      environment_name: ze.state === "complete" && ze.envName || void 0,
      error: ze.state === "error" ? "Mock error occurred" : void 0
    };
  }
  async function R(q = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function G(q) {
    return await be.deleteEnvironment(q), { status: "success" };
  }
  async function V(q = !1) {
    return be.getWorkflows();
  }
  async function j(q) {
    return be.getWorkflowDetails(q);
  }
  async function M(q) {
    return be.resolveWorkflow(q);
  }
  async function L(q, ge, Be) {
    return await be.installWorkflowDeps(q, ge, Be), { status: "success" };
  }
  async function O(q, ge, Be) {
    return be.setModelImportance(q, ge, Be);
  }
  async function de() {
    return be.getEnvironmentModels();
  }
  async function ee() {
    return be.getWorkspaceModels();
  }
  async function Q(q) {
    return be.getModelDetails(q);
  }
  async function ce(q) {
    return console.log(`[MOCK] Opening file location: ${q}`), { status: "success" };
  }
  async function X(q, ge) {
    return await be.updateModelSource(q, ge), { status: "success", source_type: "custom" };
  }
  async function D(q, ge) {
    return { status: "success" };
  }
  async function N(q) {
    return be.deleteModel(q);
  }
  async function P(q) {
    return await be.downloadModel(q), { status: "success" };
  }
  async function ue() {
    return { status: "success", changes: 0 };
  }
  async function J() {
    return { path: "~/comfygit/models" };
  }
  async function he(q) {
    return { status: "success", path: q, models_indexed: 10 };
  }
  async function Se(q) {
    return be.getConfig();
  }
  async function Re(q, ge) {
    return be.updateConfig(q);
  }
  async function We(q, ge) {
    return be.getEnvironmentLogs(q, ge);
  }
  async function me(q, ge) {
    return be.getWorkspaceLogs(q, ge);
  }
  async function ye() {
    return { path: "/mock/workspace/logs/env/full.log", exists: !0 };
  }
  async function Ie() {
    return { path: "/mock/workspace/logs/workspace/full.log", exists: !0 };
  }
  async function Z(q) {
    return console.log(`[MOCK] Opening file: ${q}`), { status: "success" };
  }
  async function ie() {
    return be.getNodes();
  }
  async function ke(q) {
    return { status: "success", message: `Node '${q}' tracked as development` };
  }
  async function Ae(q) {
    return await be.installNode(q), { status: "success" };
  }
  async function ot(q) {
    return await be.updateNode(q), { status: "success" };
  }
  async function rt(q) {
    return await be.uninstallNode(q), { status: "success" };
  }
  async function Ee() {
    return be.getRemotes();
  }
  async function nt(q, ge) {
    return await be.addRemote(q, ge), { status: "success", remote_name: q };
  }
  async function Je(q) {
    return await be.removeRemote(q), { status: "success", remote_name: q };
  }
  async function Xe(q, ge, Be) {
    return await be.updateRemoteUrl(q, ge, Be), { status: "success", remote_name: q };
  }
  async function ut(q) {
    return await be.fetchRemote(q), { status: "success", remote_name: q };
  }
  async function te(q) {
    return be.getRemoteSyncStatus(q);
  }
  async function W(q = "skip", ge = !0) {
    return await new Promise((Be) => setTimeout(Be, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function re(q, ge) {
    return be.getPullPreview(q);
  }
  async function He(q, ge = {}) {
    return be.pullFromRemote(q, ge);
  }
  async function Le(q, ge) {
    return be.getPushPreview(q);
  }
  async function ve(q, ge = {}) {
    return be.pushToRemote(q, ge);
  }
  async function K(q, ge) {
    return be.validateMerge(q, ge);
  }
  async function Y(q) {
    const ge = {
      success: 0,
      failed: []
    };
    for (const Be of q)
      try {
        await M(Be), ge.success++;
      } catch (xt) {
        ge.failed.push({
          name: Be,
          error: xt instanceof Error ? xt.message : "Unknown error"
        });
      }
    return ge;
  }
  async function I(q) {
    return await new Promise((ge) => setTimeout(ge, 500)), {
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
  async function A(q) {
    return await new Promise((ge) => setTimeout(ge, 200)), q === "existing-env" ? { valid: !1, error: "Environment 'existing-env' already exists" } : q.includes("/") || q.includes(" ") ? { valid: !1, error: "Name contains invalid characters" } : { valid: !0, name: q };
  }
  async function se(q, ge, Be, xt) {
    return await new Promise((Tt) => setTimeout(Tt, 300)), Ne.state = "importing", Ne.phase = null, Ne.progress = 0, Ne.message = `Importing environment '${ge}'...`, Ne.startTime = Date.now(), Ne.envName = ge, { status: "started", message: `Importing environment '${ge}'...` };
  }
  async function Ce() {
    return Fl(), {
      state: Ne.state,
      phase: Ne.phase,
      progress: Ne.progress,
      message: Ne.message,
      environment_name: Ne.envName
    };
  }
  async function Ye(q) {
    return await new Promise((ge) => setTimeout(ge, 800)), {
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
  async function bt(q, ge, Be, xt) {
    return await new Promise((Tt) => setTimeout(Tt, 300)), Ne.state = "importing", Ne.phase = null, Ne.progress = 0, Ne.message = `Importing environment '${ge}' from git...`, Ne.startTime = Date.now(), Ne.envName = ge, { status: "started", message: `Importing environment '${ge}'...` };
  }
  async function mt() {
    {
      const { state: q, setupState: ge } = Ds(), Be = [];
      return q.hasEnvironments && Be.push("mock-env-1", "mock-env-2"), ze.state === "complete" && ze.envName && (Be.includes(ze.envName) || Be.push(ze.envName)), {
        state: ge.value,
        workspace_path: q.hasWorkspace ? "~/comfygit" : null,
        default_path: "~/comfygit",
        environments: Be,
        current_environment: q.isManaged ? "mock-env-1" : null,
        detected_models_dir: "/mock/ComfyUI/models",
        cli_installed: !1,
        cli_path: null
      };
    }
  }
  async function Nt(q) {
    return De.initState = "creating_workspace", De.initProgress = 0, De.initMessage = "Starting workspace creation...", De.initStartTime = Date.now(), De.modelsFound = 0, console.log("[MOCK] Starting workspace initialization:", q), { status: "started", task_id: "mock-task-id" };
  }
  async function $t() {
    return Ol(), {
      state: De.initState,
      progress: De.initProgress,
      message: De.initMessage,
      models_found: De.initState === "complete" ? De.modelsFound : void 0,
      error: De.initState === "error" ? "Mock error occurred" : void 0
    };
  }
  async function Ut(q) {
    return await new Promise((ge) => setTimeout(ge, 200)), q.type === "workspace" ? !q.path || q.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : q.path.includes("existing") ? { valid: !1, error: "Workspace already exists at this location" } : { valid: !0 } : q.type === "models" ? !q.path || q.path.trim() === "" ? { valid: !1, error: "Path cannot be empty" } : q.path.endsWith("ComfyUI") || q.path.endsWith("comfyui") ? {
      valid: !1,
      error: "This appears to be a ComfyUI installation, not a models directory",
      suggestion: q.path + "/models"
    } : { valid: !0, model_count: 42 } : { valid: !0 };
  }
  async function ys() {
    return be.getDeploySummary();
  }
  async function Ct() {
    return be.getDataCenters();
  }
  async function ws(q, ge) {
    return be.testRunPodConnection(q, ge);
  }
  async function Gt() {
    return be.getNetworkVolumes();
  }
  async function ks(q) {
    return be.getRunPodGpuTypes(q);
  }
  async function _s(q) {
    return be.deployToRunPod(q);
  }
  async function bs() {
    return be.getRunPodPods();
  }
  async function $s(q) {
    return be.terminateRunPodPod(q);
  }
  async function os(q) {
    return be.exportDeployPackage(q);
  }
  async function Cs() {
    return be.getStoredRunPodKey();
  }
  async function xs() {
    return be.clearRunPodKey();
  }
  return {
    isLoading: t,
    error: l,
    getStatus: i,
    commit: m,
    getHistory: v,
    exportEnv: u,
    validateExport: f,
    exportEnvWithForce: c,
    // Git Operations
    getBranches: g,
    getCommitDetail: p,
    checkout: y,
    createBranch: b,
    switchBranch: _,
    deleteBranch: T,
    // Environment Management
    getEnvironments: x,
    switchEnvironment: $,
    getSwitchProgress: C,
    createEnvironment: z,
    getCreateProgress: S,
    getComfyUIReleases: R,
    deleteEnvironment: G,
    // Workflow Management
    getWorkflows: V,
    getWorkflowDetails: j,
    resolveWorkflow: M,
    installWorkflowDeps: L,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: de,
    getWorkspaceModels: ee,
    getModelDetails: Q,
    openFileLocation: ce,
    addModelSource: X,
    removeModelSource: D,
    deleteModel: N,
    downloadModel: P,
    scanWorkspaceModels: ue,
    getModelsDirectory: J,
    setModelsDirectory: he,
    // Settings
    getConfig: Se,
    updateConfig: Re,
    // Debug/Logs
    getEnvironmentLogs: We,
    getWorkspaceLogs: me,
    getEnvironmentLogPath: ye,
    getWorkspaceLogPath: Ie,
    openFile: Z,
    // Node Management
    getNodes: ie,
    trackNodeAsDev: ke,
    installNode: Ae,
    updateNode: ot,
    uninstallNode: rt,
    // Git Remotes
    getRemotes: Ee,
    addRemote: nt,
    removeRemote: Je,
    updateRemoteUrl: Xe,
    fetchRemote: ut,
    getRemoteSyncStatus: te,
    // Push/Pull
    getPullPreview: re,
    pullFromRemote: He,
    getPushPreview: Le,
    pushToRemote: ve,
    validateMerge: K,
    // Environment Sync
    syncEnvironmentManually: W,
    // Workflow Repair
    repairWorkflowModels: Y,
    // Import Operations
    previewTarballImport: I,
    previewGitImport: Ye,
    validateEnvironmentName: A,
    executeImport: se,
    executeGitImport: bt,
    getImportProgress: Ce,
    // First-Time Setup
    getSetupStatus: mt,
    initializeWorkspace: Nt,
    getInitializeProgress: $t,
    validatePath: Ut,
    // Deploy Operations
    getDeploySummary: ys,
    getDataCenters: Ct,
    testRunPodConnection: ws,
    getNetworkVolumes: Gt,
    getRunPodGpuTypes: ks,
    deployToRunPod: _s,
    getRunPodPods: bs,
    terminateRunPodPod: $s,
    exportDeployPackage: os,
    getStoredRunPodKey: Cs,
    clearRunPodKey: xs
  };
}
async function Kt(t, l = {}, n = 5e3) {
  const i = new AbortController(), m = setTimeout(() => i.abort(), n);
  try {
    const v = await fetch(t, {
      ...l,
      signal: i.signal
    });
    return clearTimeout(m), v;
  } catch (v) {
    throw clearTimeout(m), v.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : v;
  }
}
function lo() {
  const t = w(null);
  async function l() {
    try {
      const u = await Kt(
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
    if (t.value || (t.value = await l()), !t.value)
      return null;
    try {
      const u = await Kt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Health check failed");
      return await u.json();
    } catch {
      return t.value = await l(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await l()), !t.value)
      return null;
    try {
      const u = await Kt(
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
  async function m() {
    if (t.value || (t.value = await l()), !t.value)
      throw new Error("Control port not available");
    if (!(await Kt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await l()), !t.value)
      throw new Error("Control port not available");
    if (!(await Kt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: l,
    checkHealth: n,
    getStatus: i,
    restart: m,
    kill: v
  };
}
const Vl = { class: "base-modal-header" }, Wl = {
  key: 0,
  class: "base-modal-title"
}, Gl = { class: "base-modal-body" }, jl = {
  key: 0,
  class: "base-modal-loading"
}, Hl = {
  key: 1,
  class: "base-modal-error"
}, Kl = {
  key: 0,
  class: "base-modal-footer"
}, ql = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l;
    function m() {
      n.closeOnOverlayClick && i("close");
    }
    function v(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return je(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), so(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (u, f) => (s(), E(Qe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: m
      }, [
        e("div", {
          class: fe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: f[1] || (f[1] = Ve(() => {
          }, ["stop"]))
        }, [
          e("div", Vl, [
            Me(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Wl, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (c) => u.$emit("close"))
            }, [...f[2] || (f[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : d("", !0)
          ]),
          e("div", Gl, [
            t.loading ? (s(), o("div", jl, "Loading...")) : t.error ? (s(), o("div", Hl, a(t.error), 1)) : Me(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Kl, [
            Me(u.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), at = /* @__PURE__ */ le(ql, [["__scopeId", "data-v-8dab1081"]]), Yl = ["type", "disabled"], Xl = {
  key: 0,
  class: "spinner"
}, Ql = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: fe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => l.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Xl)) : d("", !0),
      Me(l.$slots, "default", {}, void 0, !0)
    ], 10, Yl));
  }
}), pe = /* @__PURE__ */ le(Ql, [["__scopeId", "data-v-f3452606"]]), Zl = {
  key: 0,
  class: "base-title-count"
}, Jl = /* @__PURE__ */ oe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (l, n) => (s(), E(zs(`h${t.level}`), {
      class: fe(["base-title", t.variant])
    }, {
      default: r(() => [
        Me(l.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Zl, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qt = /* @__PURE__ */ le(Jl, [["__scopeId", "data-v-5a01561d"]]), ei = ["value", "disabled"], ti = {
  key: 0,
  value: "",
  disabled: ""
}, si = ["value"], oi = {
  key: 0,
  class: "base-select-error"
}, ni = /* @__PURE__ */ oe({
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
    function l(i) {
      return typeof i == "string" ? i : i.value;
    }
    function n(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, m) => (s(), o("div", {
      class: fe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: fe(["base-select", { error: !!t.error }]),
        onChange: m[0] || (m[0] = (v) => i.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", ti, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(F, null, ae(t.options, (v) => (s(), o("option", {
          key: l(v),
          value: l(v)
        }, a(n(v)), 9, si))), 128))
      ], 42, ei),
      t.error ? (s(), o("span", oi, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), ai = /* @__PURE__ */ le(ni, [["__scopeId", "data-v-7436d745"]]), li = { class: "popover-header" }, ii = { class: "popover-title" }, ri = { class: "popover-content" }, di = {
  key: 0,
  class: "popover-actions"
}, ci = /* @__PURE__ */ oe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (l, n) => (s(), E(Qe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => l.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Et({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Ve(() => {
          }, ["stop"]))
        }, [
          e("div", li, [
            e("h4", ii, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => l.$emit("close"))
            }, "✕")
          ]),
          e("div", ri, [
            Me(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (s(), o("div", di, [
            Me(l.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), ht = /* @__PURE__ */ le(ci, [["__scopeId", "data-v-42815ace"]]), ui = { class: "detail-section" }, mi = {
  key: 0,
  class: "empty-message"
}, vi = { class: "model-header" }, fi = { class: "model-name" }, gi = { class: "model-details" }, pi = { class: "model-row" }, hi = { class: "model-row" }, yi = { class: "label" }, wi = {
  key: 0,
  class: "model-row model-row-nodes"
}, ki = { class: "node-list" }, _i = ["onClick"], bi = {
  key: 1,
  class: "model-row"
}, $i = { class: "value" }, Ci = {
  key: 2,
  class: "model-row"
}, xi = { class: "value error" }, Si = {
  key: 0,
  class: "model-actions"
}, Ii = { class: "detail-section" }, Ei = {
  key: 0,
  class: "empty-message"
}, Mi = { class: "node-name" }, Pi = {
  key: 0,
  class: "node-version"
}, Ti = /* @__PURE__ */ oe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: l }) {
    const n = t, i = l, { getWorkflowDetails: m, setModelImportance: v, openFileLocation: u } = qe(), f = w(null), c = w(!1), g = w(null), p = w(!1), y = w({}), b = w(!1), _ = w(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(M) {
      switch (M) {
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
    function $(M) {
      switch (M) {
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
    function C(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const L = M.hash || M.filename;
      return _.value.has(L) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function z(M) {
      return _.value.has(M);
    }
    function S(M) {
      _.value.has(M) ? _.value.delete(M) : _.value.add(M), _.value = new Set(_.value);
    }
    async function R() {
      c.value = !0, g.value = null;
      try {
        f.value = await m(n.workflowName);
      } catch (M) {
        g.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        c.value = !1;
      }
    }
    function G(M, L) {
      y.value[M] = L, p.value = !0;
    }
    async function V(M) {
      try {
        await u(M);
      } catch (L) {
        g.value = L instanceof Error ? L.message : "Failed to open file location";
      }
    }
    async function j() {
      if (!p.value) {
        i("close");
        return;
      }
      c.value = !0, g.value = null;
      try {
        for (const [M, L] of Object.entries(y.value))
          await v(n.workflowName, M, L);
        i("refresh"), i("close");
      } catch (M) {
        g.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        c.value = !1;
      }
    }
    return je(R), (M, L) => (s(), o(F, null, [
      k(at, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: c.value,
        error: g.value || void 0,
        onClose: L[4] || (L[4] = (O) => i("close"))
      }, {
        body: r(() => [
          f.value ? (s(), o(F, { key: 0 }, [
            e("section", ui, [
              k(Qt, { variant: "section" }, {
                default: r(() => [
                  h("MODELS USED (" + a(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (s(), o("div", mi, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(F, null, ae(f.value.models, (O) => {
                var de;
                return s(), o("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  e("div", vi, [
                    L[6] || (L[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", fi, a(O.filename), 1)
                  ]),
                  e("div", gi, [
                    e("div", pi, [
                      L[7] || (L[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: fe(["value", x(O.status)])
                      }, a($(O.status)), 3)
                    ]),
                    e("div", hi, [
                      e("span", yi, [
                        L[8] || (L[8] = h(" Importance: ", -1)),
                        k(oo, {
                          size: 14,
                          title: "About importance levels",
                          onClick: L[0] || (L[0] = (ee) => b.value = !0)
                        })
                      ]),
                      k(ai, {
                        "model-value": y.value[O.filename] || O.importance,
                        options: T,
                        "onUpdate:modelValue": (ee) => G(O.filename, ee)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (s(), o("div", wi, [
                      L[9] || (L[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", ki, [
                        (s(!0), o(F, null, ae(C(O), (ee, Q) => (s(), o("div", {
                          key: `${ee.node_id}-${Q}`,
                          class: "node-reference"
                        }, a(ee.node_type) + " (Node #" + a(ee.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ee) => S(O.hash || O.filename)
                        }, a(z(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, _i)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    O.size_mb ? (s(), o("div", bi, [
                      L[10] || (L[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", $i, a(O.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    O.has_category_mismatch ? (s(), o("div", Ci, [
                      L[13] || (L[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", xi, [
                        L[11] || (L[11] = h(" In ", -1)),
                        e("code", null, a(O.actual_category) + "/", 1),
                        L[12] || (L[12] = h(" but loader needs ", -1)),
                        e("code", null, a((de = O.expected_categories) == null ? void 0 : de[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  O.status !== "available" ? (s(), o("div", Si, [
                    O.status === "downloadable" ? (s(), E(pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: L[1] || (L[1] = (ee) => i("resolve"))
                    }, {
                      default: r(() => [...L[14] || (L[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (s(), E(pe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => V(O.file_path)
                    }, {
                      default: r(() => [...L[15] || (L[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (s(), E(pe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: L[2] || (L[2] = (ee) => i("resolve"))
                    }, {
                      default: r(() => [...L[16] || (L[16] = [
                        h(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", Ii, [
              k(Qt, { variant: "section" }, {
                default: r(() => [
                  h("NODES USED (" + a(f.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.nodes.length === 0 ? (s(), o("div", Ei, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(F, null, ae(f.value.nodes, (O) => (s(), o("div", {
                key: O.name,
                class: "node-item"
              }, [
                e("span", {
                  class: fe(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, a(O.status === "installed" ? "✓" : "✕"), 3),
                e("span", Mi, a(O.name), 1),
                O.version ? (s(), o("span", Pi, "v" + a(O.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: r(() => [
          k(pe, {
            variant: "secondary",
            onClick: L[3] || (L[3] = (O) => i("close"))
          }, {
            default: r(() => [...L[17] || (L[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (s(), E(pe, {
            key: 0,
            variant: "primary",
            onClick: j
          }, {
            default: r(() => [...L[18] || (L[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(ht, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: L[5] || (L[5] = (O) => b.value = !1)
      }, {
        content: r(() => [...L[19] || (L[19] = [
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
}), Ri = /* @__PURE__ */ le(Ti, [["__scopeId", "data-v-668728e6"]]), Te = gs({
  items: [],
  status: "idle"
});
let wt = null;
function io() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ss(t) {
  return Te.items.find((l) => l.id === t);
}
async function Ot() {
  if (Te.status === "downloading") return;
  const t = Te.items.find((l) => l.status === "queued");
  if (!t) {
    Te.status = "idle";
    return;
  }
  Te.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Li(t), t.status = "completed", t.progress = 100;
  } catch (l) {
    t.status = "failed", t.error = l instanceof Error ? l.message : "Download failed", t.retries++;
  } finally {
    Te.status = "idle", Ot();
  }
}
async function Li(t) {
  return new Promise((l, n) => {
    wt && (wt.close(), wt = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), m = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    wt = m;
    let v = Date.now(), u = 0, f = !1;
    m.onmessage = (c) => {
      try {
        const g = JSON.parse(c.data);
        switch (g.type) {
          case "progress":
            t.downloaded = g.downloaded || 0, t.size = g.total || t.size;
            const p = Date.now(), y = (p - v) / 1e3;
            if (y > 0.5) {
              const b = t.downloaded - u;
              if (t.speed = b / y, v = p, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const _ = t.size - t.downloaded;
                t.eta = _ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            f = !0, m.close(), wt = null, l();
            break;
          case "error":
            f = !0, m.close(), wt = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, m.onerror = () => {
      m.close(), wt = null, f || n(new Error("Connection lost"));
    };
  });
}
async function zi() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const l = await t.json();
    if (!l.pending_downloads || l.pending_downloads.length === 0) return;
    for (const n of l.pending_downloads) {
      if (Te.items.some((m) => m.url === n.url && m.filename === n.filename))
        continue;
      const i = {
        id: io(),
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
      Te.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${l.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function ts() {
  function t($) {
    for (const C of $) {
      if (Te.items.some(
        (R) => R.url === C.url && R.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(R.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const S = {
        id: io(),
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
      Te.items.push(S);
    }
    Te.status === "idle" && Ot();
  }
  async function l($) {
    const C = Ss($);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        wt && (wt.close(), wt = null), C.status = "failed", C.error = "Cancelled by user", Te.status = "idle", Ot();
      } else if (C.status === "queued") {
        const z = Te.items.findIndex((S) => S.id === $);
        z >= 0 && Te.items.splice(z, 1);
      }
    }
  }
  function n($) {
    const C = Ss($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Te.status === "idle" && Ot());
  }
  function i($) {
    const C = Ss($);
    !C || C.status !== "paused" || (C.status = "queued", Te.status === "idle" && Ot());
  }
  function m() {
    const $ = Te.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    Te.status === "idle" && Ot();
  }
  function v($) {
    const C = Te.items.findIndex((z) => z.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(Te.items[C].status) && Te.items.splice(C, 1);
  }
  function u() {
    Te.items = Te.items.filter(($) => $.status !== "completed");
  }
  function f() {
    Te.items = Te.items.filter(($) => $.status !== "failed");
  }
  const c = U(
    () => Te.items.find(($) => $.status === "downloading")
  ), g = U(
    () => Te.items.filter(($) => $.status === "queued")
  ), p = U(
    () => Te.items.filter(($) => $.status === "completed")
  ), y = U(
    () => Te.items.filter(($) => $.status === "failed")
  ), b = U(
    () => Te.items.filter(($) => $.status === "paused")
  ), _ = U(() => Te.items.length > 0), T = U(
    () => Te.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), x = U(
    () => Te.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Mo(Te),
    // Computed
    currentDownload: c,
    queuedItems: g,
    completedItems: p,
    failedItems: y,
    pausedItems: b,
    hasItems: _,
    activeCount: T,
    hasPaused: x,
    // Actions
    addToQueue: t,
    cancelDownload: l,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: m,
    removeItem: v,
    clearCompleted: u,
    clearFailed: f,
    loadPendingDownloads: zi
  };
}
function ro() {
  const t = w(null), l = w(null), n = w([]), i = w([]), m = w(!1), v = w(null);
  async function u(C, z) {
    var R;
    if (!((R = window.app) != null && R.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(C, z);
    if (!S.ok) {
      const G = await S.json().catch(() => ({})), V = G.error || G.message || `Request failed: ${S.status}`;
      throw new Error(V);
    }
    return S.json();
  }
  async function f(C) {
    m.value = !0, v.value = null;
    try {
      let z;
      return Ht() && (z = await be.analyzeWorkflow(C)), t.value = z, z;
    } catch (z) {
      const S = z instanceof Error ? z.message : "Unknown error occurred";
      throw v.value = S, z;
    } finally {
      m.value = !1;
    }
  }
  async function c(C, z, S, R) {
    m.value = !0, v.value = null;
    try {
      let G;
      return Ht() && (G = await be.applyResolution(C, z, S)), l.value = G, G;
    } catch (G) {
      const V = G instanceof Error ? G.message : "Unknown error occurred";
      throw v.value = V, G;
    } finally {
      m.value = !1;
    }
  }
  async function g(C, z = 10) {
    m.value = !0, v.value = null;
    try {
      let S;
      return Ht() && (S = await be.searchNodes(C, z)), n.value = S.results, S.results;
    } catch (S) {
      const R = S instanceof Error ? S.message : "Unknown error occurred";
      throw v.value = R, S;
    } finally {
      m.value = !1;
    }
  }
  async function p(C, z = 10) {
    m.value = !0, v.value = null;
    try {
      let S;
      return Ht() && (S = await be.searchModels(C, z)), i.value = S.results, S.results;
    } catch (S) {
      const R = S instanceof Error ? S.message : "Unknown error occurred";
      throw v.value = R, S;
    } finally {
      m.value = !1;
    }
  }
  const y = gs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    y.phase = "idle", y.currentFile = void 0, y.currentFileIndex = void 0, y.totalFiles = void 0, y.bytesDownloaded = void 0, y.bytesTotal = void 0, y.completedFiles = [], y.nodesToInstall = [], y.nodesInstalled = [], y.installError = void 0, y.needsRestart = void 0, y.error = void 0, y.nodeInstallProgress = void 0;
  }
  async function _(C) {
    y.phase = "installing", y.nodesInstalled = [], y.installError = void 0, y.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Ht()) {
        y.nodeInstallProgress.totalNodes = y.nodesToInstall.length;
        for (let z = 0; z < y.nodesToInstall.length; z++)
          y.nodeInstallProgress.currentNode = y.nodesToInstall[z], y.nodeInstallProgress.currentIndex = z, await new Promise((S) => setTimeout(S, 500)), y.nodeInstallProgress.completedNodes.push({
            node_id: y.nodesToInstall[z],
            success: !0
          });
        return y.nodesInstalled = y.nodesToInstall, y.needsRestart = y.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: y.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await T(C);
    } catch (z) {
      const S = z instanceof Error ? z.message : "Failed to install nodes";
      throw y.installError = S, z;
    }
  }
  async function T(C) {
    var S;
    const z = await u(
      `/v2/comfygit/workflow/${C}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: y.nodesToInstall
        })
      }
    );
    if (y.nodeInstallProgress) {
      y.nodeInstallProgress.totalNodes = y.nodesToInstall.length;
      const R = new Map(((S = z.failed) == null ? void 0 : S.map((G) => [G.node_id, G.error])) || []);
      for (let G = 0; G < y.nodesToInstall.length; G++) {
        const V = y.nodesToInstall[G], j = R.get(V);
        y.nodeInstallProgress.completedNodes.push({
          node_id: V,
          success: !j,
          error: j
        });
      }
    }
    return y.nodesInstalled = z.nodes_installed, y.needsRestart = z.nodes_installed.length > 0, z.failed && z.failed.length > 0 && (y.installError = `${z.failed.length} package(s) failed to install`), z;
  }
  async function x(C, z, S) {
    b(), y.phase = "resolving", v.value = null;
    {
      const R = await be.applyResolution(C, z, S);
      l.value = R, y.nodesToInstall = R.nodes_to_install, y.phase = "complete";
      return;
    }
  }
  function $(C, z) {
    const { addToQueue: S } = ts(), R = z.filter((G) => G.url && G.target_path).map((G) => ({
      workflow: C,
      filename: G.filename,
      url: G.url,
      targetPath: G.target_path,
      size: G.size || 0,
      type: "model"
    }));
    return R.length > 0 && S(R), R.length;
  }
  return {
    // State
    result: t,
    appliedResult: l,
    searchResults: n,
    modelSearchResults: i,
    isLoading: m,
    error: v,
    progress: y,
    // Methods
    analyzeWorkflow: f,
    applyResolution: c,
    applyResolutionWithProgress: x,
    installNodes: _,
    searchNodes: g,
    searchModels: p,
    resetProgress: b,
    queueModelDownloads: $
  };
}
const Di = { class: "resolution-stepper" }, Ni = { class: "stepper-header" }, Ui = ["onClick"], Bi = {
  key: 0,
  class: "step-icon"
}, Oi = {
  key: 1,
  class: "step-number"
}, Ai = { class: "step-label" }, Fi = {
  key: 0,
  class: "step-connector"
}, Vi = { class: "stepper-content" }, Wi = /* @__PURE__ */ oe({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: l }) {
    const n = t, i = l;
    function m(g) {
      var p;
      if ((p = n.stepStats) != null && p[g]) {
        const y = n.stepStats[g];
        return y.total > 0 && y.resolved === y.total;
      }
      return n.completedSteps.includes(g);
    }
    function v(g) {
      var p;
      if ((p = n.stepStats) != null && p[g]) {
        const y = n.stepStats[g];
        return y.resolved > 0 && y.resolved < y.total;
      }
      return !1;
    }
    function u(g) {
      return m(g) ? "state-complete" : v(g) ? "state-partial" : "state-pending";
    }
    function f(g) {
      return !1;
    }
    function c(g) {
      i("step-change", g);
    }
    return (g, p) => (s(), o("div", Di, [
      e("div", Ni, [
        (s(!0), o(F, null, ae(t.steps, (y, b) => (s(), o("div", {
          key: y.id,
          class: fe(["step", {
            active: t.currentStep === y.id,
            completed: m(y.id),
            "in-progress": v(y.id),
            disabled: f(y.id)
          }]),
          onClick: (_) => c(y.id)
        }, [
          e("div", {
            class: fe(["step-indicator", u(y.id)])
          }, [
            m(y.id) ? (s(), o("span", Bi, "✓")) : (s(), o("span", Oi, a(b + 1), 1))
          ], 2),
          e("div", Ai, a(y.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", Fi)) : d("", !0)
        ], 10, Ui))), 128))
      ]),
      e("div", Vi, [
        Me(g.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Gi = /* @__PURE__ */ le(Wi, [["__scopeId", "data-v-2a7b3af8"]]), ji = /* @__PURE__ */ oe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const l = t, n = U(() => l.confidence >= 0.9 ? "high" : l.confidence >= 0.7 ? "medium" : "low"), i = U(() => `confidence-${n.value}`), m = U(() => l.showPercentage ? `${Math.round(l.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (v, u) => (s(), o("span", {
      class: fe(["confidence-badge", i.value, t.size])
    }, a(m.value), 3));
  }
}), vs = /* @__PURE__ */ le(ji, [["__scopeId", "data-v-17ec4b80"]]), Hi = { class: "node-info" }, Ki = { class: "node-info-text" }, qi = { class: "item-body" }, Yi = {
  key: 0,
  class: "resolved-state"
}, Xi = {
  key: 1,
  class: "multiple-options"
}, Qi = { class: "options-list" }, Zi = ["onClick"], Ji = ["name", "value", "checked", "onChange"], er = { class: "option-content" }, tr = { class: "option-header" }, sr = { class: "option-package-id" }, or = {
  key: 0,
  class: "option-title"
}, nr = { class: "option-meta" }, ar = {
  key: 0,
  class: "installed-badge"
}, lr = { class: "action-buttons" }, ir = {
  key: 2,
  class: "unresolved"
}, rr = {
  key: 0,
  class: "searching-state"
}, dr = { class: "options-list" }, cr = ["onClick"], ur = ["name", "value"], mr = { class: "option-content" }, vr = { class: "option-header" }, fr = { class: "option-package-id" }, gr = {
  key: 0,
  class: "option-description"
}, pr = { class: "option-meta" }, hr = {
  key: 0,
  class: "installed-badge"
}, yr = {
  key: 2,
  class: "unresolved-message"
}, wr = { class: "action-buttons" }, kr = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l;
    function m(c, g = 80) {
      return c.length <= g ? c : c.slice(0, g - 3) + "...";
    }
    const v = U(() => !!n.choice);
    U(() => {
      var c;
      return (c = n.choice) == null ? void 0 : c.action;
    }), U(() => {
      var c;
      return (c = n.choice) == null ? void 0 : c.package_id;
    });
    const u = U(() => {
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
    function f(c) {
      i("option-selected", c);
    }
    return (c, g) => (s(), o("div", {
      class: fe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", Hi, [
        e("span", Ki, [
          g[7] || (g[7] = h("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", qi, [
        v.value ? (s(), o("div", Yi, [
          k(pe, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (p) => i("clear-choice"))
          }, {
            default: r(() => [...g[8] || (g[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Xi, [
          g[12] || (g[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Qi, [
            (s(!0), o(F, null, ae(t.options, (p, y) => (s(), o("label", {
              key: p.package_id,
              class: fe(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (b) => f(y)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (b) => f(y)
              }, null, 40, Ji),
              e("div", er, [
                e("div", tr, [
                  e("span", sr, a(p.package_id), 1),
                  k(vs, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                p.title && p.title !== p.package_id ? (s(), o("div", or, a(p.title), 1)) : d("", !0),
                e("div", nr, [
                  p.is_installed ? (s(), o("span", ar, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, Zi))), 128))
          ]),
          e("div", lr, [
            k(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[1] || (g[1] = (p) => i("search"))
            }, {
              default: r(() => [...g[9] || (g[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[2] || (g[2] = (p) => i("manual-entry"))
            }, {
              default: r(() => [...g[10] || (g[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (p) => i("mark-optional"))
            }, {
              default: r(() => [...g[11] || (g[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", ir, [
          t.isSearching ? (s(), o("div", rr, [...g[13] || (g[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(F, { key: 1 }, [
            g[14] || (g[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", dr, [
              (s(!0), o(F, null, ae(t.searchResults.slice(0, 5), (p, y) => (s(), o("label", {
                key: p.package_id,
                class: "option-card",
                onClick: (b) => i("search-result-selected", p)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: y
                }, null, 8, ur),
                e("div", mr, [
                  e("div", vr, [
                    e("span", fr, a(p.package_id), 1),
                    k(vs, {
                      confidence: p.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  p.description ? (s(), o("div", gr, a(m(p.description)), 1)) : d("", !0),
                  e("div", pr, [
                    p.is_installed ? (s(), o("span", hr, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, cr))), 128))
            ])
          ], 64)) : (s(), o("div", yr, [...g[15] || (g[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", wr, [
            k(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[4] || (g[4] = (p) => i("search"))
            }, {
              default: r(() => {
                var p;
                return [
                  h(a((p = t.searchResults) != null && p.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (p) => i("manual-entry"))
            }, {
              default: r(() => [...g[16] || (g[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (p) => i("mark-optional"))
            }, {
              default: r(() => [...g[17] || (g[17] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), _r = /* @__PURE__ */ le(kr, [["__scopeId", "data-v-c2997d1d"]]), br = { class: "item-navigator" }, $r = { class: "nav-item-info" }, Cr = ["title"], xr = { class: "nav-controls" }, Sr = { class: "nav-arrows" }, Ir = ["disabled"], Er = ["disabled"], Mr = { class: "nav-position" }, Pr = /* @__PURE__ */ oe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: l }) {
    const n = l;
    return (i, m) => (s(), o("div", br, [
      e("div", $r, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, Cr)
      ]),
      e("div", xr, [
        e("div", Sr, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: m[0] || (m[0] = (v) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Ir),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: m[1] || (m[1] = (v) => n("next")),
            title: "Next item"
          }, " → ", 8, Er)
        ]),
        e("span", Mr, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), co = /* @__PURE__ */ le(Pr, [["__scopeId", "data-v-74af7920"]]), Tr = ["type", "value", "placeholder", "disabled"], Rr = {
  key: 0,
  class: "base-input-error"
}, Lr = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), o("div", {
      class: fe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: fe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => l.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = kt((i) => l.$emit("enter"), ["enter"])),
          n[2] || (n[2] = kt((i) => l.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Tr),
      t.error ? (s(), o("span", Rr, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ le(Lr, [["__scopeId", "data-v-9ba02cdc"]]), zr = { class: "node-resolution-step" }, Dr = {
  key: 0,
  class: "auto-resolved-section"
}, Nr = { class: "section-header" }, Ur = { class: "stat-badge" }, Br = { class: "resolved-packages-list" }, Or = { class: "package-info" }, Ar = { class: "package-id" }, Fr = { class: "node-count" }, Vr = { class: "package-actions" }, Wr = {
  key: 0,
  class: "status-badge install"
}, Gr = {
  key: 1,
  class: "status-badge skip"
}, jr = ["onClick"], Hr = {
  key: 1,
  class: "section-divider"
}, Kr = { class: "step-header" }, qr = { class: "stat-badge" }, Yr = {
  key: 1,
  class: "step-body"
}, Xr = {
  key: 3,
  class: "empty-state"
}, Qr = { class: "node-modal-body" }, Zr = { class: "node-search-results-container" }, Jr = {
  key: 0,
  class: "node-search-results"
}, ed = ["onClick"], td = { class: "node-result-header" }, sd = { class: "node-result-package-id" }, od = {
  key: 0,
  class: "node-result-description"
}, nd = {
  key: 1,
  class: "node-empty-state"
}, ad = {
  key: 2,
  class: "node-empty-state"
}, ld = {
  key: 3,
  class: "node-empty-state"
}, id = { class: "node-manual-entry-modal" }, rd = { class: "node-modal-body" }, dd = { class: "node-modal-actions" }, cd = /* @__PURE__ */ oe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: l }) {
    const n = t, i = l, { searchNodes: m } = ro(), v = w(0), u = w(!1), f = w(!1), c = w(""), g = w(""), p = w([]), y = w(!1), b = w(/* @__PURE__ */ new Map()), _ = w(/* @__PURE__ */ new Set()), T = w(!1);
    function x() {
      T.value && N(), T.value = !1;
    }
    const $ = U(() => n.nodes[v.value]), C = U(() => n.nodes.filter((me) => n.nodeChoices.has(me.node_type)).length), z = U(() => $.value ? b.value.get($.value.node_type) || [] : []), S = U(() => $.value ? _.value.has($.value.node_type) : !1);
    _t($, async (me) => {
      var ye;
      me && ((ye = me.options) != null && ye.length || b.value.has(me.node_type) || _.value.has(me.node_type) || n.nodeChoices.has(me.node_type) || await R(me.node_type));
    }, { immediate: !0 });
    async function R(me) {
      _.value.add(me);
      try {
        const ye = await m(me, 5);
        b.value.set(me, ye);
      } catch {
        b.value.set(me, []);
      } finally {
        _.value.delete(me);
      }
    }
    const G = U(() => n.autoResolvedPackages.filter((me) => !n.skippedPackages.has(me.package_id)).length);
    function V(me) {
      return n.skippedPackages.has(me);
    }
    function j(me) {
      i("package-skip", me);
    }
    const M = U(() => {
      var ye;
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
      return (ye = $.value.options) != null && ye.length ? "ambiguous" : "not-found";
    }), L = U(() => {
      var ye;
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
      return (ye = $.value.options) != null && ye.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function O(me) {
      me >= 0 && me < n.nodes.length && (v.value = me);
    }
    function de() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function ee() {
      $.value && i("skip", $.value.node_type);
    }
    function Q(me) {
      $.value && i("option-selected", $.value.node_type, me);
    }
    function ce() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function X() {
      $.value && (c.value = $.value.node_type, p.value = z.value, u.value = !0, he(c.value));
    }
    function D() {
      g.value = "", f.value = !0;
    }
    function N() {
      u.value = !1, c.value = "", p.value = [];
    }
    function P() {
      f.value = !1, g.value = "";
    }
    let ue = null;
    function J() {
      ue && clearTimeout(ue), ue = setTimeout(() => {
        he(c.value);
      }, 300);
    }
    async function he(me) {
      if (!me.trim()) {
        p.value = [];
        return;
      }
      y.value = !0;
      try {
        p.value = await m(me, 10);
      } catch {
        p.value = [];
      } finally {
        y.value = !1;
      }
    }
    function Se(me) {
      $.value && (i("manual-entry", $.value.node_type, me.package_id), N());
    }
    function Re(me) {
      $.value && i("manual-entry", $.value.node_type, me.package_id);
    }
    function We() {
      !$.value || !g.value.trim() || (i("manual-entry", $.value.node_type, g.value.trim()), P());
    }
    return (me, ye) => {
      var Ie, Z;
      return s(), o("div", zr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Dr, [
          e("div", Nr, [
            ye[6] || (ye[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Ur, a(G.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Br, [
            (s(!0), o(F, null, ae(t.autoResolvedPackages, (ie) => (s(), o("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Or, [
                e("code", Ar, a(ie.package_id), 1),
                e("span", Fr, a(ie.node_types_count) + " node type" + a(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Vr, [
                V(ie.package_id) ? (s(), o("span", Gr, " SKIPPED ")) : (s(), o("span", Wr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ke) => j(ie.package_id)
                }, a(V(ie.package_id) ? "Include" : "Skip"), 9, jr)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Hr)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(F, { key: 2 }, [
          e("div", Kr, [
            ye[7] || (ye[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", qr, a(C.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), E(co, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: ye[0] || (ye[0] = (ie) => O(v.value - 1)),
            onNext: ye[1] || (ye[1] = (ie) => O(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          $.value ? (s(), o("div", Yr, [
            k(_r, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Ie = $.value.options) != null && Ie.length),
              options: $.value.options,
              choice: (Z = t.nodeChoices) == null ? void 0 : Z.get($.value.node_type),
              status: M.value,
              "status-label": L.value,
              "search-results": z.value,
              "is-searching": S.value,
              onMarkOptional: de,
              onSkip: ee,
              onManualEntry: D,
              onSearch: X,
              onOptionSelected: Q,
              onClearChoice: ce,
              onSearchResultSelected: Re
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Xr, [...ye[8] || (ye[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), E(Qe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ye[4] || (ye[4] = Ve((ie) => T.value = !0, ["self"])),
            onMouseup: Ve(x, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ye[3] || (ye[3] = (ie) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ye[9] || (ye[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Qr, [
                k(gt, {
                  modelValue: c.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (ie) => c.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: J
                }, null, 8, ["modelValue"]),
                e("div", Zr, [
                  p.value.length > 0 ? (s(), o("div", Jr, [
                    (s(!0), o(F, null, ae(p.value, (ie) => (s(), o("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (ke) => Se(ie)
                    }, [
                      e("div", td, [
                        e("code", sd, a(ie.package_id), 1),
                        ie.match_confidence ? (s(), E(vs, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      ie.description ? (s(), o("div", od, a(ie.description), 1)) : d("", !0)
                    ], 8, ed))), 128))
                  ])) : y.value ? (s(), o("div", nd, "Searching...")) : c.value ? (s(), o("div", ad, 'No packages found matching "' + a(c.value) + '"', 1)) : (s(), o("div", ld, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), E(Qe, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Ve(P, ["self"])
          }, [
            e("div", id, [
              e("div", { class: "node-modal-header" }, [
                ye[10] || (ye[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", rd, [
                k(gt, {
                  modelValue: g.value,
                  "onUpdate:modelValue": ye[5] || (ye[5] = (ie) => g.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", dd, [
                  k(pe, {
                    variant: "secondary",
                    onClick: P
                  }, {
                    default: r(() => [...ye[11] || (ye[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(pe, {
                    variant: "primary",
                    disabled: !g.value.trim(),
                    onClick: We
                  }, {
                    default: r(() => [...ye[12] || (ye[12] = [
                      h(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : d("", !0)
        ]))
      ]);
    };
  }
}), ud = /* @__PURE__ */ le(cd, [["__scopeId", "data-v-281581bc"]]), md = { class: "node-info" }, vd = { class: "node-info-text" }, fd = { class: "item-body" }, gd = {
  key: 0,
  class: "resolved-state"
}, pd = {
  key: 1,
  class: "multiple-options"
}, hd = { class: "options-list" }, yd = ["onClick"], wd = ["name", "value", "checked", "onChange"], kd = { class: "option-content" }, _d = { class: "option-header" }, bd = { class: "option-filename" }, $d = { class: "option-meta" }, Cd = { class: "option-size" }, xd = { class: "option-category" }, Sd = { class: "option-path" }, Id = { class: "action-buttons" }, Ed = {
  key: 2,
  class: "unresolved"
}, Md = { class: "action-buttons" }, Pd = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l, m = U(() => !!n.choice);
    U(() => {
      var c;
      return (c = n.choice) == null ? void 0 : c.action;
    }), U(() => {
      var c, g;
      return ((g = (c = n.choice) == null ? void 0 : c.selected_model) == null ? void 0 : g.filename) || "selected";
    });
    const v = U(() => {
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
    function u(c) {
      i("option-selected", c);
    }
    function f(c) {
      if (!c) return "Unknown";
      const g = c / (1024 * 1024 * 1024);
      return g >= 1 ? `${g.toFixed(2)} GB` : `${(c / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (c, g) => (s(), o("div", {
      class: fe(["model-resolution-item", { resolved: m.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", md, [
        e("span", vd, [
          g[7] || (g[7] = h("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", fd, [
        m.value ? (s(), o("div", gd, [
          k(pe, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (p) => i("clear-choice"))
          }, {
            default: r(() => [...g[8] || (g[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", pd, [
          g[12] || (g[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", hd, [
            (s(!0), o(F, null, ae(t.options, (p, y) => (s(), o("label", {
              key: p.model.hash,
              class: fe(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (b) => u(y)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (b) => u(y)
              }, null, 40, wd),
              e("div", kd, [
                e("div", _d, [
                  e("span", bd, a(p.model.filename), 1),
                  k(vs, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", $d, [
                  e("span", Cd, a(f(p.model.size)), 1),
                  e("span", xd, a(p.model.category), 1)
                ]),
                e("div", Sd, a(p.model.relative_path), 1)
              ])
            ], 10, yd))), 128))
          ]),
          e("div", Id, [
            k(pe, {
              variant: "ghost",
              size: "sm",
              onClick: g[1] || (g[1] = (p) => i("search"))
            }, {
              default: r(() => [...g[9] || (g[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(pe, {
              variant: "ghost",
              size: "sm",
              onClick: g[2] || (g[2] = (p) => i("download-url"))
            }, {
              default: r(() => [...g[10] || (g[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (p) => i("mark-optional"))
            }, {
              default: r(() => [...g[11] || (g[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Ed, [
          g[16] || (g[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Md, [
            k(pe, {
              variant: "primary",
              size: "sm",
              onClick: g[4] || (g[4] = (p) => i("search"))
            }, {
              default: r(() => [...g[13] || (g[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (p) => i("download-url"))
            }, {
              default: r(() => [...g[14] || (g[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (p) => i("mark-optional"))
            }, {
              default: r(() => [...g[15] || (g[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Td = /* @__PURE__ */ le(Pd, [["__scopeId", "data-v-8a82fefa"]]), Rd = { class: "model-resolution-step" }, Ld = { class: "step-header" }, zd = { class: "step-info" }, Dd = { class: "step-title" }, Nd = { class: "step-description" }, Ud = { class: "stat-badge" }, Bd = {
  key: 1,
  class: "step-body"
}, Od = {
  key: 2,
  class: "empty-state"
}, Ad = { class: "model-search-modal" }, Fd = { class: "model-modal-body" }, Vd = {
  key: 0,
  class: "model-search-results"
}, Wd = ["onClick"], Gd = { class: "model-result-header" }, jd = { class: "model-result-filename" }, Hd = { class: "model-result-meta" }, Kd = { class: "model-result-category" }, qd = { class: "model-result-size" }, Yd = {
  key: 0,
  class: "model-result-path"
}, Xd = {
  key: 1,
  class: "model-no-results"
}, Qd = {
  key: 2,
  class: "model-searching"
}, Zd = { class: "model-download-url-modal" }, Jd = { class: "model-modal-body" }, ec = { class: "model-input-group" }, tc = { class: "model-input-group" }, sc = { class: "model-modal-actions" }, oc = /* @__PURE__ */ oe({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: l }) {
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
      var P;
      return N && ((P = n[N]) == null ? void 0 : P[0]) || null;
    }
    const m = t, v = l, u = w(0), f = w(!1), c = w(!1), g = w(""), p = w(""), y = w(""), b = w([]), _ = w(!1), T = U(() => m.models[u.value]), x = U(() => m.models.some((N) => N.is_download_intent)), $ = U(() => m.models.filter(
      (N) => m.modelChoices.has(N.filename) || N.is_download_intent
    ).length), C = U(() => {
      var P;
      if (!T.value) return "";
      const N = i((P = T.value.reference) == null ? void 0 : P.node_type);
      return N ? `${N}/${T.value.filename}` : "";
    }), z = U(() => {
      var P;
      if (!T.value) return "not-found";
      const N = m.modelChoices.get(T.value.filename);
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
      return T.value.is_download_intent ? "download" : (P = T.value.options) != null && P.length ? "ambiguous" : "not-found";
    }), S = U(() => {
      var P, ue;
      if (!T.value) return;
      const N = m.modelChoices.get(T.value.filename);
      if (N)
        switch (N.action) {
          case "select":
            return (P = N.selected_model) != null && P.filename ? `→ ${N.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return T.value.is_download_intent ? "Pending Download" : (ue = T.value.options) != null && ue.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function R(N) {
      N >= 0 && N < m.models.length && (u.value = N);
    }
    function G() {
      T.value && v("mark-optional", T.value.filename);
    }
    function V() {
      T.value && v("skip", T.value.filename);
    }
    function j(N) {
      T.value && v("option-selected", T.value.filename, N);
    }
    function M() {
      T.value && v("clear-choice", T.value.filename);
    }
    function L() {
      T.value && (g.value = T.value.filename, f.value = !0);
    }
    function O() {
      T.value && (p.value = T.value.download_source || "", y.value = T.value.target_path || C.value, c.value = !0);
    }
    function de() {
      f.value = !1, g.value = "", b.value = [];
    }
    function ee() {
      c.value = !1, p.value = "", y.value = "";
    }
    function Q() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function ce(N) {
      T.value && de();
    }
    function X() {
      !T.value || !p.value.trim() || (v("download-url", T.value.filename, p.value.trim(), y.value.trim() || void 0), ee());
    }
    function D(N) {
      if (!N) return "Unknown";
      const P = N / (1024 * 1024 * 1024);
      return P >= 1 ? `${P.toFixed(2)} GB` : `${(N / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (N, P) => {
      var ue, J, he;
      return s(), o("div", Rd, [
        e("div", Ld, [
          e("div", zd, [
            e("h3", Dd, a(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Nd, a(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Ud, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), E(co, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: P[0] || (P[0] = (Se) => R(u.value - 1)),
          onNext: P[1] || (P[1] = (Se) => R(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        T.value ? (s(), o("div", Bd, [
          k(Td, {
            filename: T.value.filename,
            "node-type": ((ue = T.value.reference) == null ? void 0 : ue.node_type) || "Unknown",
            "has-multiple-options": !!((J = T.value.options) != null && J.length),
            options: T.value.options,
            choice: (he = t.modelChoices) == null ? void 0 : he.get(T.value.filename),
            status: z.value,
            "status-label": S.value,
            onMarkOptional: G,
            onSkip: V,
            onDownloadUrl: O,
            onSearch: L,
            onOptionSelected: j,
            onClearChoice: M
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Od, [...P[5] || (P[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(Qe, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ve(de, ["self"])
          }, [
            e("div", Ad, [
              e("div", { class: "model-modal-header" }, [
                P[6] || (P[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: de
                }, "✕")
              ]),
              e("div", Fd, [
                k(gt, {
                  modelValue: g.value,
                  "onUpdate:modelValue": P[2] || (P[2] = (Se) => g.value = Se),
                  placeholder: "Search by filename, category...",
                  onInput: Q
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", Vd, [
                  (s(!0), o(F, null, ae(b.value, (Se) => (s(), o("div", {
                    key: Se.hash,
                    class: "model-search-result-item",
                    onClick: (Re) => ce()
                  }, [
                    e("div", Gd, [
                      e("code", jd, a(Se.filename), 1)
                    ]),
                    e("div", Hd, [
                      e("span", Kd, a(Se.category), 1),
                      e("span", qd, a(D(Se.size)), 1)
                    ]),
                    Se.relative_path ? (s(), o("div", Yd, a(Se.relative_path), 1)) : d("", !0)
                  ], 8, Wd))), 128))
                ])) : g.value && !_.value ? (s(), o("div", Xd, ' No models found matching "' + a(g.value) + '" ', 1)) : d("", !0),
                _.value ? (s(), o("div", Qd, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), E(Qe, { to: "body" }, [
          c.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ve(ee, ["self"])
          }, [
            e("div", Zd, [
              e("div", { class: "model-modal-header" }, [
                P[7] || (P[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              e("div", Jd, [
                e("div", ec, [
                  P[8] || (P[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(gt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": P[3] || (P[3] = (Se) => p.value = Se),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", tc, [
                  P[9] || (P[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(gt, {
                    modelValue: y.value,
                    "onUpdate:modelValue": P[4] || (P[4] = (Se) => y.value = Se),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", sc, [
                  k(pe, {
                    variant: "secondary",
                    onClick: ee
                  }, {
                    default: r(() => [...P[10] || (P[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(pe, {
                    variant: "primary",
                    disabled: !p.value.trim() || !y.value.trim(),
                    onClick: X
                  }, {
                    default: r(() => [...P[11] || (P[11] = [
                      h(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : d("", !0)
        ]))
      ]);
    };
  }
}), nc = /* @__PURE__ */ le(oc, [["__scopeId", "data-v-c6acbada"]]), ac = { class: "applying-step" }, lc = {
  key: 0,
  class: "phase-content"
}, ic = {
  key: 1,
  class: "phase-content"
}, rc = { class: "phase-description" }, dc = { class: "overall-progress" }, cc = { class: "progress-bar" }, uc = { class: "progress-label" }, mc = { class: "install-list" }, vc = { class: "install-icon" }, fc = { key: 0 }, gc = {
  key: 1,
  class: "spinner"
}, pc = { key: 2 }, hc = { key: 3 }, yc = {
  key: 0,
  class: "install-error"
}, wc = {
  key: 2,
  class: "phase-content"
}, kc = { class: "phase-header" }, _c = { class: "phase-title" }, bc = { class: "completion-summary" }, $c = {
  key: 0,
  class: "summary-item success"
}, Cc = { class: "summary-text" }, xc = {
  key: 1,
  class: "summary-item error"
}, Sc = { class: "summary-text" }, Ic = {
  key: 2,
  class: "failed-list"
}, Ec = { class: "failed-node-id" }, Mc = { class: "failed-error" }, Pc = {
  key: 4,
  class: "summary-item success"
}, Tc = {
  key: 5,
  class: "restart-prompt"
}, Rc = {
  key: 3,
  class: "phase-content error"
}, Lc = { class: "error-message" }, zc = /* @__PURE__ */ oe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const l = t, n = U(() => {
      var g, p;
      const f = ((g = l.progress.nodeInstallProgress) == null ? void 0 : g.totalNodes) || l.progress.nodesToInstall.length;
      if (!f) return 0;
      const c = ((p = l.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0;
      return Math.round(c / f * 100);
    }), i = U(() => {
      var f;
      return ((f = l.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.filter((c) => !c.success)) || [];
    }), m = U(() => i.value.length > 0);
    function v(f, c) {
      var p, y;
      const g = (p = l.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.find((b) => b.node_id === f);
      return g ? g.success ? "complete" : "failed" : ((y = l.progress.nodeInstallProgress) == null ? void 0 : y.currentIndex) === c ? "installing" : "pending";
    }
    function u(f) {
      var c, g;
      return (g = (c = l.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.find((p) => p.node_id === f)) == null ? void 0 : g.error;
    }
    return (f, c) => {
      var g, p, y, b;
      return s(), o("div", ac, [
        t.progress.phase === "resolving" ? (s(), o("div", lc, [...c[2] || (c[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", ic, [
          c[3] || (c[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", rc, " Installing " + a((((g = t.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) ?? 0) + 1) + " of " + a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", dc, [
            e("div", cc, [
              e("div", {
                class: "progress-fill",
                style: Et({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", uc, a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", mc, [
            (s(!0), o(F, null, ae(t.progress.nodesToInstall, (_, T) => (s(), o("div", {
              key: _,
              class: fe(["install-item", v(_, T)])
            }, [
              e("span", vc, [
                v(_, T) === "pending" ? (s(), o("span", fc, "○")) : v(_, T) === "installing" ? (s(), o("span", gc, "◌")) : v(_, T) === "complete" ? (s(), o("span", pc, "✓")) : v(_, T) === "failed" ? (s(), o("span", hc, "✗")) : d("", !0)
              ]),
              e("code", null, a(_), 1),
              u(_) ? (s(), o("span", yc, a(u(_)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", wc, [
          e("div", kc, [
            e("span", {
              class: fe(["phase-icon", m.value ? "warning" : "success"])
            }, a(m.value ? "⚠" : "✓"), 3),
            e("h3", _c, a(m.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", bc, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", $c, [
              c[4] || (c[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Cc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", xc, [
              c[5] || (c[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Sc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Ic, [
              (s(!0), o(F, null, ae(i.value, (_) => (s(), o("div", {
                key: _.node_id,
                class: "failed-item"
              }, [
                e("code", Ec, a(_.node_id), 1),
                e("span", Mc, a(_.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: c[0] || (c[0] = (_) => f.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            m.value ? d("", !0) : (s(), o("div", Pc, [...c[6] || (c[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            c[8] || (c[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Tc, [
              c[7] || (c[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: c[1] || (c[1] = (_) => f.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Rc, [
          c[9] || (c[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Lc, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), Dc = /* @__PURE__ */ le(zc, [["__scopeId", "data-v-5efaae58"]]), Nc = {
  key: 0,
  class: "loading-state"
}, Uc = {
  key: 1,
  class: "wizard-content"
}, Bc = {
  key: 0,
  class: "step-content"
}, Oc = { class: "analysis-summary" }, Ac = { class: "analysis-header" }, Fc = { class: "summary-description" }, Vc = { class: "stats-grid" }, Wc = { class: "stat-card" }, Gc = { class: "stat-items" }, jc = {
  key: 0,
  class: "stat-item success"
}, Hc = { class: "stat-count" }, Kc = {
  key: 1,
  class: "stat-item info"
}, qc = { class: "stat-count" }, Yc = {
  key: 2,
  class: "stat-item warning"
}, Xc = { class: "stat-count" }, Qc = {
  key: 3,
  class: "stat-item error"
}, Zc = { class: "stat-count" }, Jc = { class: "stat-card" }, eu = { class: "stat-items" }, tu = { class: "stat-item success" }, su = { class: "stat-count" }, ou = {
  key: 0,
  class: "stat-item info"
}, nu = { class: "stat-count" }, au = {
  key: 1,
  class: "stat-item warning"
}, lu = { class: "stat-count" }, iu = {
  key: 2,
  class: "stat-item warning"
}, ru = { class: "stat-count" }, du = {
  key: 3,
  class: "stat-item error"
}, cu = { class: "stat-count" }, uu = {
  key: 0,
  class: "status-message warning"
}, mu = { class: "status-text" }, vu = {
  key: 1,
  class: "status-message info"
}, fu = { class: "status-text" }, gu = {
  key: 2,
  class: "status-message info"
}, pu = { class: "status-text" }, hu = {
  key: 3,
  class: "status-message warning"
}, yu = { class: "status-text" }, wu = {
  key: 4,
  class: "status-message success"
}, ku = {
  key: 5,
  class: "category-mismatch-section"
}, _u = { class: "mismatch-list" }, bu = { class: "mismatch-path" }, $u = { class: "mismatch-target" }, Cu = {
  key: 3,
  class: "step-content"
}, xu = { class: "review-summary" }, Su = { class: "review-stats" }, Iu = { class: "review-stat" }, Eu = { class: "stat-value" }, Mu = { class: "review-stat" }, Pu = { class: "stat-value" }, Tu = { class: "review-stat" }, Ru = { class: "stat-value" }, Lu = { class: "review-stat" }, zu = { class: "stat-value" }, Du = {
  key: 0,
  class: "review-section"
}, Nu = { class: "section-title" }, Uu = { class: "review-items" }, Bu = { class: "item-name" }, Ou = { class: "item-choice" }, Au = {
  key: 0,
  class: "choice-badge install"
}, Fu = {
  key: 1,
  class: "choice-badge skip"
}, Vu = {
  key: 1,
  class: "review-section"
}, Wu = { class: "section-title" }, Gu = { class: "review-items" }, ju = { class: "item-name" }, Hu = { class: "item-choice" }, Ku = {
  key: 0,
  class: "choice-badge install"
}, qu = {
  key: 1,
  class: "choice-badge optional"
}, Yu = {
  key: 2,
  class: "choice-badge skip"
}, Xu = {
  key: 1,
  class: "choice-badge pending"
}, Qu = {
  key: 2,
  class: "review-section"
}, Zu = { class: "section-title" }, Ju = { class: "review-items" }, em = { class: "item-name" }, tm = { class: "item-choice" }, sm = {
  key: 0,
  class: "choice-badge install"
}, om = {
  key: 1,
  class: "choice-badge download"
}, nm = {
  key: 2,
  class: "choice-badge optional"
}, am = {
  key: 3,
  class: "choice-badge skip"
}, lm = {
  key: 4,
  class: "choice-badge skip"
}, im = {
  key: 1,
  class: "choice-badge download"
}, rm = {
  key: 2,
  class: "choice-badge pending"
}, dm = {
  key: 3,
  class: "no-choices"
}, cm = /* @__PURE__ */ oe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: l }) {
    const n = t, i = l, { analyzeWorkflow: m, applyResolution: v, installNodes: u, queueModelDownloads: f, progress: c, resetProgress: g } = ro(), { loadPendingDownloads: p } = ts(), { openFileLocation: y } = qe(), b = w(null), _ = w(!1), T = w(!1), x = w(null), $ = w("analysis"), C = w([]), z = w(/* @__PURE__ */ new Map()), S = w(/* @__PURE__ */ new Map()), R = w(/* @__PURE__ */ new Set()), G = U(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return (j.value || O.value) && Y.push({ id: "nodes", label: "Nodes" }), (M.value || L.value) && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), $.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    }), V = U(() => b.value ? b.value.stats.needs_user_input : !1), j = U(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), M = U(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), L = U(() => b.value ? b.value.stats.download_intents > 0 : !1), O = U(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), de = U(() => b.value ? b.value.nodes.resolved.length : 0), ee = U(() => b.value ? b.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), Q = U(() => ee.value.length > 0), ce = U(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.resolved.filter((A) => !A.is_installed), I = /* @__PURE__ */ new Set();
      return Y.filter((A) => I.has(A.package.package_id) ? !1 : (I.add(A.package.package_id), !0));
    }), X = U(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.resolved.filter((A) => !A.is_installed), I = /* @__PURE__ */ new Map();
      for (const A of Y) {
        const se = I.get(A.package.package_id);
        se ? se.node_types_count++ : I.set(A.package.package_id, {
          package_id: A.package.package_id,
          title: A.package.title,
          node_types_count: 1
        });
      }
      return Array.from(I.values());
    }), D = U(() => ce.value.filter((Y) => !R.value.has(Y.package.package_id))), N = U(() => b.value ? b.value.models.resolved.filter((Y) => Y.match_type === "download_intent").map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), P = U(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.unresolved.map((A) => ({
        node_type: A.reference.node_type,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), I = b.value.nodes.ambiguous.map((A) => ({
        node_type: A.reference.node_type,
        has_multiple_options: !0,
        options: A.options.map((se) => ({
          package_id: se.package.package_id,
          title: se.package.title,
          match_confidence: se.match_confidence,
          match_type: se.match_type,
          is_installed: se.is_installed
        }))
      }));
      return [...Y, ...I];
    }), ue = U(() => {
      if (!b.value) return [];
      const Y = b.value.models.unresolved.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), I = b.value.models.ambiguous.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        has_multiple_options: !0,
        options: A.options.map((se) => ({
          model: se.model,
          match_confidence: se.match_confidence,
          match_type: se.match_type,
          has_download_source: se.has_download_source
        }))
      }));
      return [...Y, ...I];
    }), J = U(() => {
      const Y = ue.value, I = N.value.map((A) => ({
        filename: A.filename,
        reference: A.reference,
        is_download_intent: !0,
        resolved_model: A.resolved_model,
        download_source: A.download_source,
        target_path: A.target_path,
        options: void 0
      }));
      return [...Y, ...I];
    }), he = U(() => {
      let Y = D.value.length;
      for (const I of z.value.values())
        I.action === "install" && Y++;
      for (const I of S.value.values())
        I.action === "select" && Y++;
      return Y;
    }), Se = U(() => {
      let Y = 0;
      for (const I of S.value.values())
        I.action === "download" && Y++;
      return Y;
    }), Re = U(() => {
      let Y = 0;
      for (const I of z.value.values())
        I.action === "optional" && Y++;
      for (const I of S.value.values())
        I.action === "optional" && Y++;
      return Y;
    }), We = U(() => {
      let Y = R.value.size;
      for (const I of z.value.values())
        I.action === "skip" && Y++;
      for (const I of S.value.values())
        I.action === "skip" && Y++;
      for (const I of P.value)
        z.value.has(I.node_type) || Y++;
      for (const I of ue.value)
        S.value.has(I.filename) || Y++;
      return Y;
    }), me = U(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, j.value) {
        const I = P.value.length, A = P.value.filter(
          (se) => z.value.has(se.node_type)
        ).length;
        Y.nodes = { resolved: A, total: I };
      }
      if (M.value || L.value) {
        const I = J.value.length, A = J.value.filter(
          (se) => S.value.has(se.filename) || se.is_download_intent
        ).length;
        Y.models = { resolved: A, total: I };
      }
      if (Y.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const I = c.totalFiles || 1, A = c.completedFiles.length;
        Y.applying = { resolved: A, total: I };
      }
      return Y;
    });
    function ye(Y) {
      $.value = Y;
    }
    function Ie() {
      const Y = G.value.findIndex((I) => I.id === $.value);
      Y > 0 && ($.value = G.value[Y - 1].id);
    }
    function Z() {
      const Y = G.value.findIndex((I) => I.id === $.value);
      Y < G.value.length - 1 && ($.value = G.value[Y + 1].id);
    }
    async function ie() {
      _.value = !0, x.value = null;
      try {
        b.value = await m(n.workflowName);
      } catch (Y) {
        x.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        _.value = !1;
      }
    }
    function ke() {
      C.value.includes("analysis") || C.value.push("analysis"), j.value || O.value ? $.value = "nodes" : M.value || L.value ? $.value = "models" : $.value = "review";
    }
    function Ae(Y) {
      z.value.set(Y, { action: "optional" });
    }
    function ot(Y) {
      z.value.set(Y, { action: "skip" });
    }
    function rt(Y, I) {
      var se;
      const A = P.value.find((Ce) => Ce.node_type === Y);
      (se = A == null ? void 0 : A.options) != null && se[I] && z.value.set(Y, {
        action: "install",
        package_id: A.options[I].package_id
      });
    }
    function Ee(Y, I) {
      z.value.set(Y, {
        action: "install",
        package_id: I
      });
    }
    function nt(Y) {
      z.value.delete(Y);
    }
    function Je(Y) {
      R.value.has(Y) ? R.value.delete(Y) : R.value.add(Y);
    }
    function Xe(Y) {
      S.value.set(Y, { action: "optional" });
    }
    function ut(Y) {
      S.value.set(Y, { action: "skip" });
    }
    function te(Y, I) {
      var se;
      const A = ue.value.find((Ce) => Ce.filename === Y);
      (se = A == null ? void 0 : A.options) != null && se[I] && S.value.set(Y, {
        action: "select",
        selected_model: A.options[I].model
      });
    }
    function W(Y, I, A) {
      S.value.set(Y, {
        action: "download",
        url: I,
        target_path: A
      });
    }
    function re(Y) {
      S.value.delete(Y);
    }
    async function He(Y) {
      try {
        await y(Y);
      } catch (I) {
        x.value = I instanceof Error ? I.message : "Failed to open file location";
      }
    }
    async function Le() {
      var Y;
      T.value = !0, x.value = null, g(), c.phase = "resolving", $.value = "applying";
      try {
        const I = await v(n.workflowName, z.value, S.value, R.value);
        I.models_to_download && I.models_to_download.length > 0 && f(n.workflowName, I.models_to_download);
        const A = [
          ...I.nodes_to_install || [],
          ...D.value.map((Ce) => Ce.package.package_id)
        ];
        c.nodesToInstall = [...new Set(A)], c.nodesToInstall.length > 0 && await u(n.workflowName), c.phase = "complete", await p();
        const se = c.installError || ((Y = c.nodeInstallProgress) == null ? void 0 : Y.completedNodes.some((Ce) => !Ce.success));
        !c.needsRestart && !se && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (I) {
        x.value = I instanceof Error ? I.message : "Failed to apply resolution", c.error = x.value, c.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function ve() {
      i("refresh"), i("restart"), i("close");
    }
    async function K() {
      var I;
      const Y = ((I = c.nodeInstallProgress) == null ? void 0 : I.completedNodes.filter((A) => !A.success).map((A) => A.node_id)) || [];
      if (Y.length !== 0) {
        c.phase = "installing", c.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, c.nodesToInstall = Y, c.nodesInstalled = [], c.installError = void 0;
        try {
          await u(n.workflowName), c.phase = "complete";
        } catch (A) {
          c.error = A instanceof Error ? A.message : "Retry failed", c.phase = "error";
        }
      }
    }
    return je(ie), (Y, I) => (s(), E(at, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: _.value,
      error: x.value || void 0,
      "fixed-height": !0,
      onClose: I[1] || (I[1] = (A) => i("close"))
    }, {
      body: r(() => [
        _.value && !b.value ? (s(), o("div", Nc, [...I[2] || (I[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", Uc, [
          k(Gi, {
            steps: G.value,
            "current-step": $.value,
            "completed-steps": C.value,
            "step-stats": me.value,
            onStepChange: ye
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", Bc, [
            e("div", Oc, [
              e("div", Ac, [
                I[3] || (I[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Fc, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Vc, [
                e("div", Wc, [
                  I[12] || (I[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Gc, [
                    de.value > 0 ? (s(), o("div", jc, [
                      I[4] || (I[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Hc, a(de.value), 1),
                      I[5] || (I[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", Kc, [
                      I[6] || (I[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", qc, a(b.value.stats.packages_needing_installation), 1),
                      I[7] || (I[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", Yc, [
                      I[8] || (I[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Xc, a(b.value.nodes.ambiguous.length), 1),
                      I[9] || (I[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", Qc, [
                      I[10] || (I[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Zc, a(b.value.nodes.unresolved.length), 1),
                      I[11] || (I[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Jc, [
                  I[23] || (I[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", eu, [
                    e("div", tu, [
                      I[13] || (I[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", su, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      I[14] || (I[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", ou, [
                      I[15] || (I[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", nu, a(b.value.stats.download_intents), 1),
                      I[16] || (I[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    Q.value ? (s(), o("div", au, [
                      I[17] || (I[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", lu, a(ee.value.length), 1),
                      I[18] || (I[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", iu, [
                      I[19] || (I[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ru, a(b.value.models.ambiguous.length), 1),
                      I[20] || (I[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", du, [
                      I[21] || (I[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", cu, a(b.value.models.unresolved.length), 1),
                      I[22] || (I[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              V.value ? (s(), o("div", uu, [
                I[24] || (I[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", mu, a(P.value.length + ue.value.length) + " items need your input", 1)
              ])) : O.value ? (s(), o("div", vu, [
                I[25] || (I[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", fu, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(L.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : L.value ? (s(), o("div", gu, [
                I[26] || (I[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", pu, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : Q.value ? (s(), o("div", hu, [
                I[27] || (I[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", yu, a(ee.value.length) + " model" + a(ee.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", wu, [...I[28] || (I[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Q.value ? (s(), o("div", ku, [
                I[31] || (I[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", _u, [
                  (s(!0), o(F, null, ae(ee.value, (A) => {
                    var se, Ce;
                    return s(), o("div", {
                      key: A.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", bu, a(A.actual_category) + "/" + a((se = A.model) == null ? void 0 : se.filename), 1),
                      I[30] || (I[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", $u, a((Ce = A.expected_categories) == null ? void 0 : Ce[0]) + "/", 1),
                      A.file_path ? (s(), E(pe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ye) => He(A.file_path)
                      }, {
                        default: r(() => [...I[29] || (I[29] = [
                          h(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]);
                  }), 128))
                ])
              ])) : d("", !0)
            ])
          ])) : d("", !0),
          $.value === "nodes" ? (s(), E(ud, {
            key: 1,
            nodes: P.value,
            "node-choices": z.value,
            "auto-resolved-packages": X.value,
            "skipped-packages": R.value,
            onMarkOptional: Ae,
            onSkip: ot,
            onOptionSelected: rt,
            onManualEntry: Ee,
            onClearChoice: nt,
            onPackageSkip: Je
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          $.value === "models" ? (s(), E(nc, {
            key: 2,
            models: J.value,
            "model-choices": S.value,
            onMarkOptional: Xe,
            onSkip: ut,
            onOptionSelected: te,
            onDownloadUrl: W,
            onClearChoice: re
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          $.value === "review" ? (s(), o("div", Cu, [
            e("div", xu, [
              I[36] || (I[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Su, [
                e("div", Iu, [
                  e("span", Eu, a(he.value), 1),
                  I[32] || (I[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Mu, [
                  e("span", Pu, a(Se.value), 1),
                  I[33] || (I[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Tu, [
                  e("span", Ru, a(Re.value), 1),
                  I[34] || (I[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Lu, [
                  e("span", zu, a(We.value), 1),
                  I[35] || (I[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              X.value.length > 0 ? (s(), o("div", Du, [
                e("h4", Nu, "Node Packages (" + a(X.value.length) + ")", 1),
                e("div", Uu, [
                  (s(!0), o(F, null, ae(X.value, (A) => (s(), o("div", {
                    key: A.package_id,
                    class: "review-item"
                  }, [
                    e("code", Bu, a(A.package_id), 1),
                    e("div", Ou, [
                      R.value.has(A.package_id) ? (s(), o("span", Fu, "Skipped")) : (s(), o("span", Au, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              P.value.length > 0 ? (s(), o("div", Vu, [
                e("h4", Wu, "Node Choices (" + a(P.value.length) + ")", 1),
                e("div", Gu, [
                  (s(!0), o(F, null, ae(P.value, (A) => {
                    var se, Ce, Ye, bt;
                    return s(), o("div", {
                      key: A.node_type,
                      class: "review-item"
                    }, [
                      e("code", ju, a(A.node_type), 1),
                      e("div", Hu, [
                        z.value.has(A.node_type) ? (s(), o(F, { key: 0 }, [
                          ((se = z.value.get(A.node_type)) == null ? void 0 : se.action) === "install" ? (s(), o("span", Ku, a((Ce = z.value.get(A.node_type)) == null ? void 0 : Ce.package_id), 1)) : ((Ye = z.value.get(A.node_type)) == null ? void 0 : Ye.action) === "optional" ? (s(), o("span", qu, " Optional ")) : ((bt = z.value.get(A.node_type)) == null ? void 0 : bt.action) === "skip" ? (s(), o("span", Yu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", Xu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              J.value.length > 0 ? (s(), o("div", Qu, [
                e("h4", Zu, "Models (" + a(J.value.length) + ")", 1),
                e("div", Ju, [
                  (s(!0), o(F, null, ae(J.value, (A) => {
                    var se, Ce, Ye, bt, mt, Nt, $t;
                    return s(), o("div", {
                      key: A.filename,
                      class: "review-item"
                    }, [
                      e("code", em, a(A.filename), 1),
                      e("div", tm, [
                        S.value.has(A.filename) ? (s(), o(F, { key: 0 }, [
                          ((se = S.value.get(A.filename)) == null ? void 0 : se.action) === "select" ? (s(), o("span", sm, a((Ye = (Ce = S.value.get(A.filename)) == null ? void 0 : Ce.selected_model) == null ? void 0 : Ye.filename), 1)) : ((bt = S.value.get(A.filename)) == null ? void 0 : bt.action) === "download" ? (s(), o("span", om, " Download ")) : ((mt = S.value.get(A.filename)) == null ? void 0 : mt.action) === "optional" ? (s(), o("span", nm, " Optional ")) : ((Nt = S.value.get(A.filename)) == null ? void 0 : Nt.action) === "skip" ? (s(), o("span", am, " Skip ")) : (($t = S.value.get(A.filename)) == null ? void 0 : $t.action) === "cancel_download" ? (s(), o("span", lm, " Cancel Download ")) : d("", !0)
                        ], 64)) : A.is_download_intent ? (s(), o("span", im, " Pending Download ")) : (s(), o("span", rm, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              ce.value.length === 0 && P.value.length === 0 && J.value.length === 0 ? (s(), o("div", dm, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          $.value === "applying" ? (s(), E(Dc, {
            key: 4,
            progress: $e(c),
            onRestart: ve,
            onRetryFailed: K
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: r(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), E(pe, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: Ie
        }, {
          default: r(() => [...I[37] || (I[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        I[41] || (I[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || $e(c).phase === "complete" || $e(c).phase === "error" ? (s(), E(pe, {
          key: 1,
          variant: "secondary",
          onClick: I[0] || (I[0] = (A) => i("close"))
        }, {
          default: r(() => [
            h(a($e(c).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        $.value === "analysis" ? (s(), E(pe, {
          key: 2,
          variant: "primary",
          disabled: _.value,
          onClick: ke
        }, {
          default: r(() => [...I[38] || (I[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        $.value === "nodes" ? (s(), E(pe, {
          key: 3,
          variant: "primary",
          onClick: Z
        }, {
          default: r(() => [
            h(a(M.value || L.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        $.value === "models" ? (s(), E(pe, {
          key: 4,
          variant: "primary",
          onClick: Z
        }, {
          default: r(() => [...I[39] || (I[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        $.value === "review" ? (s(), E(pe, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: Le
        }, {
          default: r(() => [...I[40] || (I[40] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), um = /* @__PURE__ */ le(cm, [["__scopeId", "data-v-6276cf1d"]]), mm = { class: "search-input-wrapper" }, vm = ["value", "placeholder"], fm = /* @__PURE__ */ oe({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = w(null);
    let v;
    function u(c) {
      const g = c.target.value;
      n.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        i("update:modelValue", g);
      }, n.debounce)) : i("update:modelValue", g);
    }
    function f() {
      var c;
      i("update:modelValue", ""), i("clear"), (c = m.value) == null || c.focus();
    }
    return je(() => {
      n.autoFocus && m.value && m.value.focus();
    }), (c, g) => (s(), o("div", mm, [
      e("input", {
        ref_key: "inputRef",
        ref: m,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: kt(f, ["escape"])
      }, null, 40, vm),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: f,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), gm = /* @__PURE__ */ le(fm, [["__scopeId", "data-v-266f857a"]]), pm = { class: "search-bar" }, hm = /* @__PURE__ */ oe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (l, n) => (s(), o("div", pm, [
      k(gm, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => l.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Wt = /* @__PURE__ */ le(hm, [["__scopeId", "data-v-3d51bbfd"]]), ym = { class: "section-group" }, wm = {
  key: 0,
  class: "section-content"
}, km = /* @__PURE__ */ oe({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = w(n.initiallyExpanded);
    function v() {
      n.collapsible && (m.value = !m.value, i("toggle", m.value));
    }
    return (u, f) => (s(), o("section", ym, [
      k(ct, {
        count: t.count,
        clickable: t.collapsible,
        expanded: m.value,
        onClick: v
      }, {
        default: r(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || m.value ? (s(), o("div", wm, [
        Me(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Fe = /* @__PURE__ */ le(km, [["__scopeId", "data-v-c48e33ed"]]), _m = { class: "item-header" }, bm = {
  key: 0,
  class: "item-icon"
}, $m = { class: "item-info" }, Cm = {
  key: 0,
  class: "item-title"
}, xm = {
  key: 1,
  class: "item-subtitle"
}, Sm = {
  key: 0,
  class: "item-details"
}, Im = {
  key: 1,
  class: "item-actions"
}, Em = /* @__PURE__ */ oe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const n = t, i = U(() => n.status ? `status-${n.status}` : "");
    return (m, v) => (s(), o("div", {
      class: fe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: v[0] || (v[0] = (u) => t.clickable && m.$emit("click"))
    }, [
      e("div", _m, [
        m.$slots.icon ? (s(), o("span", bm, [
          Me(m.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", $m, [
          m.$slots.title ? (s(), o("div", Cm, [
            Me(m.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          m.$slots.subtitle ? (s(), o("div", xm, [
            Me(m.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      m.$slots.details ? (s(), o("div", Sm, [
        Me(m.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      m.$slots.actions ? (s(), o("div", Im, [
        Me(m.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), et = /* @__PURE__ */ le(Em, [["__scopeId", "data-v-cc435e0e"]]), Mm = { class: "loading-state" }, Pm = { class: "loading-message" }, Tm = /* @__PURE__ */ oe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (l, n) => (s(), o("div", Mm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Pm, a(t.message), 1)
    ]));
  }
}), Mt = /* @__PURE__ */ le(Tm, [["__scopeId", "data-v-ad8436c9"]]), Rm = { class: "error-state" }, Lm = { class: "error-message" }, zm = /* @__PURE__ */ oe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (l, n) => (s(), o("div", Rm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Lm, a(t.message), 1),
      t.retry ? (s(), E(ne, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => l.$emit("retry"))
      }, {
        default: r(() => [...n[1] || (n[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Pt = /* @__PURE__ */ le(zm, [["__scopeId", "data-v-5397be48"]]), Dm = /* @__PURE__ */ oe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: l, emit: n }) {
    const i = n, { getWorkflows: m } = qe();
    lo();
    const v = w([]), u = w(!1), f = w(null), c = w(""), g = w(!0), p = w(!1), y = w(!1), b = w(!1), _ = w(null), T = U(
      () => v.value.filter((D) => D.status === "broken")
    ), x = U(
      () => v.value.filter((D) => D.status === "new")
    ), $ = U(
      () => v.value.filter((D) => D.status === "modified")
    ), C = U(
      () => v.value.filter((D) => D.status === "synced")
    ), z = U(() => {
      if (!c.value.trim()) return v.value;
      const D = c.value.toLowerCase();
      return v.value.filter((N) => N.name.toLowerCase().includes(D));
    }), S = U(
      () => T.value.filter(
        (D) => !c.value.trim() || D.name.toLowerCase().includes(c.value.toLowerCase())
      )
    ), R = U(
      () => x.value.filter(
        (D) => !c.value.trim() || D.name.toLowerCase().includes(c.value.toLowerCase())
      )
    ), G = U(
      () => $.value.filter(
        (D) => !c.value.trim() || D.name.toLowerCase().includes(c.value.toLowerCase())
      )
    ), V = U(
      () => C.value.filter(
        (D) => !c.value.trim() || D.name.toLowerCase().includes(c.value.toLowerCase())
      )
    ), j = U(
      () => p.value ? V.value : V.value.slice(0, 5)
    );
    async function M(D = !1) {
      u.value = !0, f.value = null;
      try {
        v.value = await m(D);
      } catch (N) {
        f.value = N instanceof Error ? N.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    l({ loadWorkflows: M });
    function L(D) {
      _.value = D, y.value = !0;
    }
    function O(D) {
      _.value = D, b.value = !0;
    }
    function de() {
      i("refresh");
    }
    async function ee() {
      b.value = !1, await M(!0);
    }
    async function Q() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ce(D) {
      const N = [];
      return D.missing_nodes > 0 && N.push(`${D.missing_nodes} missing node${D.missing_nodes > 1 ? "s" : ""}`), D.missing_models > 0 && N.push(`${D.missing_models} missing model${D.missing_models > 1 ? "s" : ""}`), D.models_with_category_mismatch && D.models_with_category_mismatch > 0 && N.push(`${D.models_with_category_mismatch} model${D.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), D.pending_downloads && D.pending_downloads > 0 && N.push(`${D.pending_downloads} pending download${D.pending_downloads > 1 ? "s" : ""}`), N.length > 0 ? N.join(", ") : "Has issues";
    }
    function X(D) {
      const N = D.sync_state === "new" ? "New" : D.sync_state === "modified" ? "Modified" : D.sync_state === "synced" ? "Synced" : D.sync_state;
      return D.has_path_sync_issues && D.models_needing_path_sync && D.models_needing_path_sync > 0 ? `${D.models_needing_path_sync} model path${D.models_needing_path_sync > 1 ? "s" : ""} need${D.models_needing_path_sync === 1 ? "s" : ""} sync` : N || "Unknown";
    }
    return je(M), (D, N) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, { title: "WORKFLOWS" })
        ]),
        search: r(() => [
          k(Wt, {
            modelValue: c.value,
            "onUpdate:modelValue": N[0] || (N[0] = (P) => c.value = P),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          u.value ? (s(), E(Mt, {
            key: 0,
            message: "Loading workflows..."
          })) : f.value ? (s(), E(Pt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            S.value.length ? (s(), E(Fe, {
              key: 0,
              title: "BROKEN",
              count: S.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(S.value, (P) => (s(), E(et, {
                  key: P.name,
                  status: "broken"
                }, {
                  icon: r(() => [...N[7] || (N[7] = [
                    h("⚠", -1)
                  ])]),
                  title: r(() => [
                    h(a(P.name), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(ce(P)), 1)
                  ]),
                  actions: r(() => [
                    k(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ue) => O(P.name)
                    }, {
                      default: r(() => [...N[8] || (N[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => L(P.name)
                    }, {
                      default: r(() => [...N[9] || (N[9] = [
                        h(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            R.value.length ? (s(), E(Fe, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(R.value, (P) => (s(), E(et, {
                  key: P.name,
                  status: P.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: r(() => [
                    h(a(P.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: r(() => [
                    h(a(P.name), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(X(P)), 1)
                  ]),
                  actions: r(() => [
                    k(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => L(P.name)
                    }, {
                      default: r(() => [...N[10] || (N[10] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            G.value.length ? (s(), E(Fe, {
              key: 2,
              title: "MODIFIED",
              count: G.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(G.value, (P) => (s(), E(et, {
                  key: P.name,
                  status: P.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: r(() => [...N[11] || (N[11] = [
                    h("⚡", -1)
                  ])]),
                  title: r(() => [
                    h(a(P.name), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(X(P)), 1)
                  ]),
                  actions: r(() => [
                    k(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => L(P.name)
                    }, {
                      default: r(() => [...N[12] || (N[12] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            V.value.length ? (s(), E(Fe, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": g.value,
              onToggle: N[2] || (N[2] = (P) => g.value = P)
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(j.value, (P) => (s(), E(et, {
                  key: P.name,
                  status: P.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: r(() => [
                    h(a(P.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: r(() => [
                    h(a(P.name), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(X(P)), 1)
                  ]),
                  actions: r(() => [
                    k(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => L(P.name)
                    }, {
                      default: r(() => [...N[13] || (N[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && V.value.length > 5 ? (s(), E(ne, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (P) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: r(() => [
                    h(" View all " + a(V.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            z.value.length ? d("", !0) : (s(), E(pt, {
              key: 4,
              icon: "📭",
              message: c.value ? `No workflows match '${c.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y.value && _.value ? (s(), E(Ri, {
        key: 0,
        "workflow-name": _.value,
        onClose: N[3] || (N[3] = (P) => y.value = !1),
        onResolve: N[4] || (N[4] = (P) => O(_.value)),
        onRefresh: N[5] || (N[5] = (P) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && _.value ? (s(), E(um, {
        key: 1,
        "workflow-name": _.value,
        onClose: ee,
        onInstall: de,
        onRefresh: N[6] || (N[6] = (P) => i("refresh")),
        onRestart: Q
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Nm = /* @__PURE__ */ le(Dm, [["__scopeId", "data-v-fa3f076e"]]), Um = /* @__PURE__ */ oe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (l, n) => (s(), o("div", {
      class: fe(["summary-bar", t.variant])
    }, [
      Me(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ss = /* @__PURE__ */ le(Um, [["__scopeId", "data-v-ccb7816e"]]), Bm = {
  key: 0,
  class: "model-details"
}, Om = { class: "detail-section" }, Am = { class: "detail-row" }, Fm = { class: "detail-value mono" }, Vm = { class: "detail-row" }, Wm = { class: "detail-value mono" }, Gm = { class: "detail-row" }, jm = { class: "detail-value mono" }, Hm = { class: "detail-row" }, Km = { class: "detail-value" }, qm = { class: "detail-row" }, Ym = { class: "detail-value" }, Xm = { class: "detail-row" }, Qm = { class: "detail-value" }, Zm = { class: "detail-section" }, Jm = { class: "section-header" }, ev = {
  key: 0,
  class: "locations-list"
}, tv = { class: "location-path mono" }, sv = {
  key: 0,
  class: "location-modified"
}, ov = ["onClick"], nv = {
  key: 1,
  class: "empty-state"
}, av = { class: "detail-section" }, lv = { class: "section-header" }, iv = {
  key: 0,
  class: "sources-list"
}, rv = { class: "source-type" }, dv = ["href"], cv = ["disabled", "onClick"], uv = {
  key: 1,
  class: "empty-state"
}, mv = { class: "add-source-form" }, vv = ["disabled"], fv = {
  key: 2,
  class: "source-error"
}, gv = {
  key: 3,
  class: "source-success"
}, pv = /* @__PURE__ */ oe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const n = t, { getModelDetails: i, addModelSource: m, removeModelSource: v, openFileLocation: u } = qe(), f = w(null), c = w(!0), g = w(null), p = w(""), y = w(!1), b = w(null), _ = w(null), T = w(null), x = w(null);
    let $ = null;
    function C(M, L = "success", O = 2e3) {
      $ && clearTimeout($), x.value = { message: M, type: L }, $ = setTimeout(() => {
        x.value = null;
      }, O);
    }
    function z(M) {
      if (!M) return "Unknown";
      const L = 1024 * 1024 * 1024, O = 1024 * 1024;
      return M >= L ? `${(M / L).toFixed(1)} GB` : M >= O ? `${(M / O).toFixed(0)} MB` : `${(M / 1024).toFixed(0)} KB`;
    }
    function S(M) {
      navigator.clipboard.writeText(M), C("Copied to clipboard!");
    }
    async function R(M) {
      try {
        await u(M), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function G() {
      if (!(!p.value.trim() || !f.value)) {
        y.value = !0, _.value = null, T.value = null;
        try {
          await m(f.value.hash, p.value.trim()), T.value = "Source added successfully!", p.value = "", await j();
        } catch (M) {
          _.value = M instanceof Error ? M.message : "Failed to add source";
        } finally {
          y.value = !1;
        }
      }
    }
    async function V(M) {
      if (f.value) {
        b.value = M, _.value = null, T.value = null;
        try {
          await v(f.value.hash, M), C("Source removed"), await j();
        } catch (L) {
          _.value = L instanceof Error ? L.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function j() {
      c.value = !0, g.value = null;
      try {
        f.value = await i(n.identifier);
      } catch (M) {
        g.value = M instanceof Error ? M.message : "Failed to load model details";
      } finally {
        c.value = !1;
      }
    }
    return je(j), (M, L) => {
      var O;
      return s(), o(F, null, [
        k(at, {
          title: `Model Details: ${((O = f.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: c.value,
          error: g.value,
          onClose: L[5] || (L[5] = (de) => M.$emit("close"))
        }, {
          body: r(() => {
            var de, ee, Q, ce;
            return [
              f.value ? (s(), o("div", Bm, [
                e("section", Om, [
                  e("div", Am, [
                    L[6] || (L[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Fm, a(f.value.hash || "Not computed"), 1),
                    f.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[0] || (L[0] = (X) => S(f.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Vm, [
                    L[7] || (L[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Wm, a(f.value.blake3 || "Not computed"), 1),
                    f.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[1] || (L[1] = (X) => S(f.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Gm, [
                    L[8] || (L[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", jm, a(f.value.sha256 || "Not computed"), 1),
                    f.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[2] || (L[2] = (X) => S(f.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Hm, [
                    L[9] || (L[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Km, a(z(f.value.size)), 1)
                  ]),
                  e("div", qm, [
                    L[10] || (L[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Ym, a(f.value.category), 1)
                  ]),
                  e("div", Xm, [
                    L[11] || (L[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Qm, a(f.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Zm, [
                  e("h4", Jm, "Locations (" + a(((de = f.value.locations) == null ? void 0 : de.length) || 0) + ")", 1),
                  (ee = f.value.locations) != null && ee.length ? (s(), o("div", ev, [
                    (s(!0), o(F, null, ae(f.value.locations, (X, D) => (s(), o("div", {
                      key: D,
                      class: "location-item"
                    }, [
                      e("span", tv, a(X.path), 1),
                      X.modified ? (s(), o("span", sv, "Modified: " + a(X.modified), 1)) : d("", !0),
                      X.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (N) => R(X.path)
                      }, " Open File Location ", 8, ov)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", nv, "No locations found"))
                ]),
                e("section", av, [
                  e("h4", lv, "Download Sources (" + a(((Q = f.value.sources) == null ? void 0 : Q.length) || 0) + ")", 1),
                  (ce = f.value.sources) != null && ce.length ? (s(), o("div", iv, [
                    (s(!0), o(F, null, ae(f.value.sources, (X, D) => (s(), o("div", {
                      key: D,
                      class: "source-item"
                    }, [
                      e("span", rv, a(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(X.url), 9, dv),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === X.url,
                        onClick: (N) => V(X.url)
                      }, a(b.value === X.url ? "..." : "×"), 9, cv)
                    ]))), 128))
                  ])) : (s(), o("div", uv, " No download sources configured ")),
                  e("div", mv, [
                    Ue(e("input", {
                      "onUpdate:modelValue": L[3] || (L[3] = (X) => p.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Dt, p.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !p.value.trim() || y.value,
                      onClick: G
                    }, a(y.value ? "Adding..." : "Add Source"), 9, vv)
                  ]),
                  _.value ? (s(), o("p", fv, a(_.value), 1)) : d("", !0),
                  T.value ? (s(), o("p", gv, a(T.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: r(() => [
            e("button", {
              class: "btn-secondary",
              onClick: L[4] || (L[4] = (de) => M.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(Qe, { to: "body" }, [
          x.value ? (s(), o("div", {
            key: 0,
            class: fe(["toast", x.value.type])
          }, a(x.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), Ns = /* @__PURE__ */ le(pv, [["__scopeId", "data-v-f15cbb56"]]), hv = /* @__PURE__ */ oe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: l }) {
    const n = l, { getEnvironmentModels: i, getStatus: m } = qe(), v = w([]), u = w([]), f = w("production"), c = w(!1), g = w(null), p = w(""), y = w(!1), b = w(null);
    function _() {
      y.value = !1, n("navigate", "model-index");
    }
    const T = U(
      () => v.value.reduce((j, M) => j + (M.size || 0), 0)
    ), x = U(() => {
      if (!p.value.trim()) return v.value;
      const j = p.value.toLowerCase();
      return v.value.filter((M) => M.filename.toLowerCase().includes(j));
    }), $ = U(() => {
      if (!p.value.trim()) return u.value;
      const j = p.value.toLowerCase();
      return u.value.filter((M) => M.filename.toLowerCase().includes(j));
    }), C = U(() => {
      const j = {};
      for (const L of x.value) {
        const O = L.type || "other";
        j[O] || (j[O] = []), j[O].push(L);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(j).sort(([L], [O]) => {
        const de = M.indexOf(L), ee = M.indexOf(O);
        return de >= 0 && ee >= 0 ? de - ee : de >= 0 ? -1 : ee >= 0 ? 1 : L.localeCompare(O);
      }).map(([L, O]) => ({ type: L, models: O }));
    });
    function z(j) {
      if (!j) return "Unknown";
      const M = j / (1024 * 1024);
      return M >= 1024 ? `${(M / 1024).toFixed(1)} GB` : `${M.toFixed(0)} MB`;
    }
    function S(j) {
      b.value = j.hash || j.filename;
    }
    function R(j) {
      n("navigate", "model-index");
    }
    function G(j) {
      alert(`Download functionality not yet implemented for ${j}`);
    }
    async function V() {
      c.value = !0, g.value = null;
      try {
        const j = await i();
        v.value = j, u.value = [];
        const M = await m();
        f.value = M.environment || "production";
      } catch (j) {
        g.value = j instanceof Error ? j.message : "Failed to load models";
      } finally {
        c.value = !1;
      }
    }
    return je(V), (j, M) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (L) => y.value = !0)
          })
        ]),
        search: r(() => [
          k(Wt, {
            modelValue: p.value,
            "onUpdate:modelValue": M[1] || (M[1] = (L) => p.value = L),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          c.value ? (s(), E(Mt, {
            key: 0,
            message: "Loading environment models..."
          })) : g.value ? (s(), E(Pt, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            v.value.length ? (s(), E(ss, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                h(" Total: " + a(v.value.length) + " models • " + a(z(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(F, null, ae(C.value, (L) => (s(), E(Fe, {
              key: L.type,
              title: L.type.toUpperCase(),
              count: L.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(L.models, (O) => (s(), E(et, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: r(() => [...M[4] || (M[4] = [
                    h("📦", -1)
                  ])]),
                  title: r(() => [
                    h(a(O.filename), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(z(O.size)), 1)
                  ]),
                  details: r(() => [
                    k(Ge, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(Ge, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    k(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (de) => S(O)
                    }, {
                      default: r(() => [...M[5] || (M[5] = [
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
            $.value.length ? (s(), E(Fe, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae($.value, (L) => (s(), E(et, {
                  key: L.filename,
                  status: "broken"
                }, {
                  icon: r(() => [...M[6] || (M[6] = [
                    h("⚠", -1)
                  ])]),
                  title: r(() => [
                    h(a(L.filename), 1)
                  ]),
                  subtitle: r(() => [...M[7] || (M[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: r(() => {
                    var O;
                    return [
                      k(Ge, {
                        label: "Required by:",
                        value: ((O = L.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: r(() => [
                    k(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => G(L.filename)
                    }, {
                      default: r(() => [...M[8] || (M[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => R(L.filename)
                    }, {
                      default: r(() => [...M[9] || (M[9] = [
                        h(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !x.value.length && !$.value.length ? (s(), E(pt, {
              key: 2,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ht, {
        show: y.value,
        title: "About Environment Models",
        onClose: M[2] || (M[2] = (L) => y.value = !1)
      }, {
        content: r(() => [
          e("p", null, [
            M[10] || (M[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(f.value) + '"', 1),
            M[11] || (M[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: r(() => [
          k(ne, {
            variant: "primary",
            onClick: _
          }, {
            default: r(() => [...M[12] || (M[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), E(Ns, {
        key: 0,
        identifier: b.value,
        onClose: M[3] || (M[3] = (L) => b.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), yv = /* @__PURE__ */ le(hv, [["__scopeId", "data-v-cb4f12b3"]]), wv = {
  key: 0,
  class: "indexing-progress"
}, kv = { class: "progress-info" }, _v = { class: "progress-label" }, bv = { class: "progress-count" }, $v = { class: "progress-bar" }, Cv = { class: "modal-content" }, xv = { class: "modal-header" }, Sv = { class: "modal-body" }, Iv = { class: "input-group" }, Ev = { class: "current-path" }, Mv = { class: "input-group" }, Pv = { class: "modal-footer" }, Tv = { class: "modal-content" }, Rv = { class: "modal-header" }, Lv = { class: "modal-body" }, zv = { class: "input-group" }, Dv = { class: "input-group" }, Nv = { class: "modal-footer" }, Uv = /* @__PURE__ */ oe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: l }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: m,
      setModelsDirectory: v
    } = qe(), { addToQueue: u } = ts(), f = l, c = w([]), g = w(!1), p = w(!1), y = w(null), b = w(""), _ = w(!1), T = w(null), x = w(!1), $ = w(null), C = w(""), z = w(!1), S = w(!1), R = w(""), G = w(""), V = w(null), j = U(
      () => c.value.reduce((N, P) => N + (P.size || 0), 0)
    ), M = U(() => {
      if (!b.value.trim()) return c.value;
      const N = b.value.toLowerCase();
      return c.value.filter((P) => {
        const ue = P, J = P.sha256 || ue.sha256_hash || "";
        return P.filename.toLowerCase().includes(N) || J.toLowerCase().includes(N);
      });
    }), L = U(() => {
      const N = {};
      for (const ue of M.value) {
        const J = ue.type || "other";
        N[J] || (N[J] = []), N[J].push(ue);
      }
      const P = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([ue], [J]) => {
        const he = P.indexOf(ue), Se = P.indexOf(J);
        return he >= 0 && Se >= 0 ? he - Se : he >= 0 ? -1 : Se >= 0 ? 1 : ue.localeCompare(J);
      }).map(([ue, J]) => ({ type: ue, models: J }));
    });
    function O(N) {
      if (!N) return "Unknown";
      const P = 1024 * 1024 * 1024, ue = 1024 * 1024;
      return N >= P ? `${(N / P).toFixed(1)} GB` : N >= ue ? `${(N / ue).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function de(N) {
      T.value = N.hash || N.filename;
    }
    async function ee() {
      p.value = !0, y.value = null;
      try {
        const N = await i();
        await X(), N.changes > 0 && console.log(`Scan complete: ${N.changes} changes detected`);
      } catch (N) {
        y.value = N instanceof Error ? N.message : "Failed to scan models";
      } finally {
        p.value = !1;
      }
    }
    async function Q() {
      if (C.value.trim()) {
        z.value = !0, y.value = null;
        try {
          const N = await v(C.value.trim());
          $.value = N.path, x.value = !1, C.value = "", await X(), console.log(`Directory changed: ${N.models_indexed} models indexed`), f("refresh");
        } catch (N) {
          y.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          z.value = !1;
        }
      }
    }
    function ce() {
      if (!R.value.trim() || !G.value.trim()) return;
      const N = G.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: N,
        url: R.value.trim(),
        targetPath: G.value.trim()
      }]), R.value = "", G.value = "", S.value = !1;
    }
    async function X() {
      g.value = !0, y.value = null;
      try {
        c.value = await n();
      } catch (N) {
        y.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        g.value = !1;
      }
    }
    async function D() {
      try {
        const N = await m();
        $.value = N.path;
      } catch {
      }
    }
    return je(() => {
      X(), D();
    }), (N, P) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: P[2] || (P[2] = (ue) => _.value = !0)
          }, {
            actions: r(() => [
              k(ne, {
                variant: "primary",
                size: "sm",
                disabled: p.value,
                onClick: ee
              }, {
                default: r(() => [
                  h(a(p.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ne, {
                variant: "primary",
                size: "sm",
                onClick: P[0] || (P[0] = (ue) => x.value = !0)
              }, {
                default: r(() => [...P[15] || (P[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(ne, {
                variant: "primary",
                size: "sm",
                onClick: P[1] || (P[1] = (ue) => S.value = !0)
              }, {
                default: r(() => [...P[16] || (P[16] = [
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
        search: r(() => [
          V.value ? (s(), o("div", wv, [
            e("div", kv, [
              e("span", _v, a(V.value.message), 1),
              e("span", bv, a(V.value.current) + "/" + a(V.value.total), 1)
            ]),
            e("div", $v, [
              e("div", {
                class: "progress-fill",
                style: Et({ width: `${V.value.current / V.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          k(Wt, {
            modelValue: b.value,
            "onUpdate:modelValue": P[3] || (P[3] = (ue) => b.value = ue),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          g.value || V.value ? (s(), E(Mt, {
            key: 0,
            message: V.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : y.value ? (s(), E(Pt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            c.value.length ? (s(), E(ss, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                h(" Total: " + a(c.value.length) + " models • " + a(O(j.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(F, null, ae(L.value, (ue) => (s(), E(Fe, {
              key: ue.type,
              title: ue.type.toUpperCase(),
              count: ue.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(ue.models, (J) => (s(), E(et, {
                  key: J.sha256 || J.filename,
                  status: "synced"
                }, {
                  icon: r(() => [...P[17] || (P[17] = [
                    h("📦", -1)
                  ])]),
                  title: r(() => [
                    h(a(J.filename), 1)
                  ]),
                  subtitle: r(() => [
                    h(a(O(J.size)), 1)
                  ]),
                  details: r(() => [
                    k(Ge, {
                      label: "Hash:",
                      value: J.hash ? J.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    k(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (he) => de(J)
                    }, {
                      default: r(() => [...P[18] || (P[18] = [
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
            M.value.length ? d("", !0) : (s(), E(pt, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(ht, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: P[4] || (P[4] = (ue) => _.value = !1)
      }, {
        content: r(() => [...P[19] || (P[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      T.value ? (s(), E(Ns, {
        key: 0,
        identifier: T.value,
        onClose: P[5] || (P[5] = (ue) => T.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), E(Qe, { to: "body" }, [
        x.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[9] || (P[9] = Ve((ue) => x.value = !1, ["self"]))
        }, [
          e("div", Cv, [
            e("div", xv, [
              P[20] || (P[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: P[6] || (P[6] = (ue) => x.value = !1)
              }, "✕")
            ]),
            e("div", Sv, [
              e("div", Iv, [
                P[21] || (P[21] = e("label", null, "Current Directory", -1)),
                e("code", Ev, a($.value || "Not set"), 1)
              ]),
              e("div", Mv, [
                P[22] || (P[22] = e("label", null, "New Directory Path", -1)),
                k(gt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": P[7] || (P[7] = (ue) => C.value = ue),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              P[23] || (P[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Pv, [
              k(pe, {
                variant: "secondary",
                onClick: P[8] || (P[8] = (ue) => x.value = !1)
              }, {
                default: r(() => [...P[24] || (P[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(pe, {
                variant: "primary",
                disabled: !C.value.trim() || z.value,
                loading: z.value,
                onClick: Q
              }, {
                default: r(() => [
                  h(a(z.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), E(Qe, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[14] || (P[14] = Ve((ue) => S.value = !1, ["self"]))
        }, [
          e("div", Tv, [
            e("div", Rv, [
              P[25] || (P[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: P[10] || (P[10] = (ue) => S.value = !1)
              }, "✕")
            ]),
            e("div", Lv, [
              e("div", zv, [
                P[26] || (P[26] = e("label", null, "Download URL", -1)),
                k(gt, {
                  modelValue: R.value,
                  "onUpdate:modelValue": P[11] || (P[11] = (ue) => R.value = ue),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Dv, [
                P[27] || (P[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(gt, {
                  modelValue: G.value,
                  "onUpdate:modelValue": P[12] || (P[12] = (ue) => G.value = ue),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              P[28] || (P[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Nv, [
              k(pe, {
                variant: "secondary",
                onClick: P[13] || (P[13] = (ue) => S.value = !1)
              }, {
                default: r(() => [...P[29] || (P[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(pe, {
                variant: "primary",
                disabled: !R.value.trim() || !G.value.trim(),
                onClick: ce
              }, {
                default: r(() => [...P[30] || (P[30] = [
                  h(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : d("", !0)
      ]))
    ], 64));
  }
}), Bv = /* @__PURE__ */ le(Uv, [["__scopeId", "data-v-73b78d84"]]), Ov = { class: "node-details" }, Av = { class: "status-row" }, Fv = {
  key: 0,
  class: "detail-row"
}, Vv = { class: "value" }, Wv = { class: "detail-row" }, Gv = { class: "value" }, jv = {
  key: 1,
  class: "detail-row"
}, Hv = { class: "value mono" }, Kv = {
  key: 2,
  class: "detail-row"
}, qv = ["href"], Yv = {
  key: 3,
  class: "detail-row"
}, Xv = { class: "value mono small" }, Qv = { class: "detail-row" }, Zv = {
  key: 0,
  class: "value"
}, Jv = {
  key: 1,
  class: "workflow-list"
}, ef = /* @__PURE__ */ oe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (f, c) => (s(), E(at, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: c[1] || (c[1] = (g) => i("close"))
    }, {
      body: r(() => [
        e("div", Ov, [
          e("div", Av, [
            c[2] || (c[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", m.value])
            }, a(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", Fv, [
            c[3] || (c[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Vv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", Wv, [
            c[4] || (c[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Gv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", jv, [
            c[5] || (c[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Hv, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", Kv, [
            c[7] || (c[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              h(a(t.node.repository) + " ", 1),
              c[6] || (c[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, qv)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", Yv, [
            c[8] || (c[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Xv, a(t.node.download_url), 1)
          ])) : d("", !0),
          c[10] || (c[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Qv, [
            c[9] || (c[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Zv, " Not used in any workflows ")) : (s(), o("div", Jv, [
              (s(!0), o(F, null, ae(t.node.used_in_workflows, (g) => (s(), o("span", {
                key: g,
                class: "workflow-tag"
              }, a(g), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: r(() => [
        k(pe, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (g) => i("close"))
        }, {
          default: r(() => [...c[11] || (c[11] = [
            h(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), tf = /* @__PURE__ */ le(ef, [["__scopeId", "data-v-b342f626"]]), sf = { class: "dialog-message" }, of = {
  key: 0,
  class: "dialog-details"
}, nf = {
  key: 1,
  class: "dialog-warning"
}, af = /* @__PURE__ */ oe({
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
    return (l, n) => (s(), E(at, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => l.$emit("cancel"))
    }, {
      body: r(() => [
        e("p", sf, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", of, [
          (s(!0), o(F, null, ae(t.details, (i, m) => (s(), o("div", {
            key: m,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", nf, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: r(() => [
        k(pe, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => l.$emit("cancel"))
        }, {
          default: r(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), E(pe, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => l.$emit("secondary"))
        }, {
          default: r(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        k(pe, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => l.$emit("confirm"))
        }, {
          default: r(() => [
            h(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), uo = /* @__PURE__ */ le(af, [["__scopeId", "data-v-3670b9f5"]]), lf = { class: "mismatch-warning" }, rf = { class: "version-mismatch" }, df = { class: "version-actual" }, cf = { class: "version-expected" }, uf = { key: 0 }, mf = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, vf = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, ff = /* @__PURE__ */ oe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: l }) {
    const n = t, i = l, { getNodes: m, trackNodeAsDev: v, installNode: u, uninstallNode: f } = qe(), c = w({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), g = w(!1), p = w(null), y = w(""), b = w(!1), _ = w(null), T = w(null), x = U(() => {
      if (!y.value.trim()) return c.value.nodes;
      const ee = y.value.toLowerCase();
      return c.value.nodes.filter(
        (Q) => {
          var ce, X;
          return Q.name.toLowerCase().includes(ee) || ((ce = Q.description) == null ? void 0 : ce.toLowerCase().includes(ee)) || ((X = Q.repository) == null ? void 0 : X.toLowerCase().includes(ee));
        }
      );
    }), $ = U(
      () => x.value.filter((ee) => ee.installed && ee.tracked)
    ), C = U(
      () => x.value.filter((ee) => !ee.installed && ee.tracked)
    ), z = U(
      () => x.value.filter((ee) => ee.installed && !ee.tracked)
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
    const R = U(() => n.versionMismatches.length > 0);
    function G(ee) {
      return !ee.used_in_workflows || ee.used_in_workflows.length === 0 ? "Not used in any workflows" : ee.used_in_workflows.length === 1 ? ee.used_in_workflows[0] : `${ee.used_in_workflows.length} workflows`;
    }
    function V(ee) {
      _.value = ee;
    }
    function j() {
      i("open-node-manager");
    }
    function M(ee) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${ee}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            g.value = !0;
            const Q = await v(ee);
            Q.status === "success" ? (i("toast", `✓ Node "${ee}" tracked as development`, "success"), await de()) : i("toast", `Failed to track node: ${Q.message || "Unknown error"}`, "error");
          } catch (Q) {
            i("toast", `Error tracking node: ${Q instanceof Error ? Q.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
          }
        }
      };
    }
    function L(ee) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ee}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            g.value = !0;
            const Q = await f(ee);
            Q.status === "success" ? (i("toast", `✓ Node "${ee}" removed`, "success"), await de()) : i("toast", `Failed to remove node: ${Q.message || "Unknown error"}`, "error");
          } catch (Q) {
            i("toast", `Error removing node: ${Q instanceof Error ? Q.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
          }
        }
      };
    }
    function O(ee) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${ee}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            g.value = !0;
            const Q = await u(ee);
            Q.status === "success" ? (i("toast", `✓ Node "${ee}" installed`, "success"), await de()) : i("toast", `Failed to install node: ${Q.message || "Unknown error"}`, "error");
          } catch (Q) {
            i("toast", `Error installing node: ${Q instanceof Error ? Q.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
          }
        }
      };
    }
    async function de() {
      g.value = !0, p.value = null;
      try {
        c.value = await m();
      } catch (ee) {
        p.value = ee instanceof Error ? ee.message : "Failed to load nodes";
      } finally {
        g.value = !1;
      }
    }
    return je(de), (ee, Q) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (ce) => b.value = !0)
          }, {
            actions: r(() => [
              k(ne, {
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: r(() => [...Q[7] || (Q[7] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          k(Wt, {
            modelValue: y.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (ce) => y.value = ce),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          g.value ? (s(), E(Mt, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (s(), E(Pt, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            c.value.total_count ? (s(), E(ss, {
              key: 0,
              variant: "compact"
            }, {
              default: r(() => [
                h(a(c.value.installed_count) + " installed ", 1),
                c.value.missing_count ? (s(), o(F, { key: 0 }, [
                  h(" • " + a(c.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                c.value.untracked_count ? (s(), o(F, { key: 1 }, [
                  h(" • " + a(c.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            R.value ? (s(), E(Fe, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                e("div", lf, [
                  Q[8] || (Q[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(F, null, ae(t.versionMismatches, (ce) => (s(), E(et, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: r(() => [...Q[9] || (Q[9] = [
                    h("⚠", -1)
                  ])]),
                  title: r(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: r(() => [
                    e("span", rf, [
                      e("span", df, a(ce.actual), 1),
                      Q[10] || (Q[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", cf, a(ce.expected), 1)
                    ])
                  ]),
                  actions: r(() => [
                    k(ne, {
                      variant: "warning",
                      size: "sm",
                      onClick: Q[2] || (Q[2] = (X) => i("repair-environment"))
                    }, {
                      default: r(() => [...Q[11] || (Q[11] = [
                        h(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            z.value.length ? (s(), E(Fe, {
              key: 2,
              title: "UNTRACKED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(z.value, (ce) => (s(), E(et, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: r(() => [...Q[12] || (Q[12] = [
                    h("?", -1)
                  ])]),
                  title: r(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: r(() => [...Q[13] || (Q[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: r(() => [
                    k(Ge, {
                      label: "Used by:",
                      value: G(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    k(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => V(ce)
                    }, {
                      default: r(() => [...Q[14] || (Q[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => M(ce.name)
                    }, {
                      default: r(() => [...Q[15] || (Q[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ne, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => L(ce.name)
                    }, {
                      default: r(() => [...Q[16] || (Q[16] = [
                        h(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            $.value.length ? (s(), E(Fe, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae($.value, (ce) => (s(), E(et, {
                  key: ce.name,
                  status: "synced"
                }, {
                  icon: r(() => [
                    h(a(ce.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: r(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: r(() => [
                    ce.version ? (s(), o("span", uf, a(ce.source === "development" ? "" : "v") + a(ce.version), 1)) : (s(), o("span", mf, "version unknown")),
                    e("span", vf, " • " + a(S(ce.source)), 1)
                  ]),
                  details: r(() => [
                    k(Ge, {
                      label: "Used by:",
                      value: G(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    k(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => V(ce)
                    }, {
                      default: r(() => [...Q[17] || (Q[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: j
                    }, {
                      default: r(() => [...Q[18] || (Q[18] = [
                        h(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            C.value.length ? (s(), E(Fe, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(C.value, (ce) => (s(), E(et, {
                  key: ce.name,
                  status: "missing"
                }, {
                  icon: r(() => [...Q[19] || (Q[19] = [
                    h("!", -1)
                  ])]),
                  title: r(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: r(() => [...Q[20] || (Q[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: r(() => [
                    k(Ge, {
                      label: "Required by:",
                      value: G(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: r(() => [
                    k(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => V(ce)
                    }, {
                      default: r(() => [...Q[21] || (Q[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => O(ce.name)
                    }, {
                      default: r(() => [...Q[22] || (Q[22] = [
                        h(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !$.value.length && !C.value.length && !z.value.length ? (s(), E(pt, {
              key: 5,
              icon: "📭",
              message: y.value ? `No nodes match '${y.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ht, {
        show: b.value,
        title: "About Custom Nodes",
        onClose: Q[4] || (Q[4] = (ce) => b.value = !1)
      }, {
        content: r(() => [...Q[23] || (Q[23] = [
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
        actions: r(() => [
          k(ne, {
            variant: "primary",
            onClick: Q[3] || (Q[3] = (ce) => b.value = !1)
          }, {
            default: r(() => [...Q[24] || (Q[24] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), E(tf, {
        key: 0,
        node: _.value,
        onClose: Q[5] || (Q[5] = (ce) => _.value = null)
      }, null, 8, ["node"])) : d("", !0),
      T.value ? (s(), E(uo, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: Q[6] || (Q[6] = (ce) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), gf = /* @__PURE__ */ le(ff, [["__scopeId", "data-v-1555a802"]]);
function mo(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const pf = { class: "remote-url-display" }, hf = ["title"], yf = ["title"], wf = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, kf = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, _f = /* @__PURE__ */ oe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const l = t, n = w(!1), i = U(() => {
      if (l.url.length <= l.maxLength)
        return l.url;
      const v = l.url.slice(0, Math.floor(l.maxLength * 0.6)), u = l.url.slice(-Math.floor(l.maxLength * 0.3));
      return `${v}...${u}`;
    });
    async function m() {
      try {
        await navigator.clipboard.writeText(l.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, u) => (s(), o("div", pf, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, hf),
      e("button", {
        class: fe(["copy-btn", { copied: n.value }]),
        onClick: m,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", kf, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", wf, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, yf)
    ]));
  }
}), bf = /* @__PURE__ */ le(_f, [["__scopeId", "data-v-7768a58d"]]), $f = { class: "remote-title" }, Cf = {
  key: 0,
  class: "default-badge"
}, xf = {
  key: 1,
  class: "sync-badge"
}, Sf = {
  key: 0,
  class: "ahead"
}, If = {
  key: 1,
  class: "behind"
}, Ef = {
  key: 1,
  class: "synced"
}, Mf = ["href"], Pf = {
  key: 1,
  class: "remote-url-text"
}, Tf = /* @__PURE__ */ oe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const l = t, n = U(() => l.fetchingRemote === l.remote.name), i = U(() => l.remote.is_default), m = U(() => l.syncStatus && l.syncStatus.behind > 0), v = U(() => l.syncStatus && l.syncStatus.ahead > 0), u = U(() => l.remote.push_url !== l.remote.fetch_url), f = U(() => {
      const g = l.remote.fetch_url, p = g.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : g.startsWith("https://") || g.startsWith("http://") ? g.replace(/\.git$/, "") : null;
    }), c = U(() => l.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (g, p) => (s(), E(et, {
      status: i.value ? "synced" : void 0
    }, Vt({
      icon: r(() => [
        h(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: r(() => [
        e("div", $f, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Cf, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", xf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(F, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Sf, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", If, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", Ef, "✓ synced"))
          ])) : d("", !0)
        ])
      ]),
      subtitle: r(() => [
        f.value ? (s(), o("a", {
          key: 0,
          href: f.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: p[0] || (p[0] = Ve(() => {
          }, ["stop"]))
        }, a(c.value), 9, Mf)) : (s(), o("span", Pf, a(c.value), 1))
      ]),
      actions: r(() => [
        k(ne, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: p[1] || (p[1] = (y) => g.$emit("fetch", t.remote.name))
        }, {
          default: r(() => [...p[6] || (p[6] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(ne, {
          variant: m.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[2] || (p[2] = (y) => g.$emit("pull", t.remote.name))
        }, {
          default: r(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(ne, {
          variant: v.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[3] || (p[3] = (y) => g.$emit("push", t.remote.name))
        }, {
          default: r(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(ne, {
          variant: "secondary",
          size: "xs",
          onClick: p[4] || (p[4] = (y) => g.$emit("edit", t.remote.name))
        }, {
          default: r(() => [...p[7] || (p[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (s(), E(ne, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: p[5] || (p[5] = (y) => g.$emit("remove", t.remote.name))
        }, {
          default: r(() => [...p[8] || (p[8] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: r(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(Ge, {
            key: 0,
            label: "Push URL:"
          }, {
            default: r(() => [
              k(bf, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Rf = /* @__PURE__ */ le(Tf, [["__scopeId", "data-v-8310f3a8"]]), Lf = ["for"], zf = {
  key: 0,
  class: "base-form-field-required"
}, Df = { class: "base-form-field-input" }, Nf = {
  key: 1,
  class: "base-form-field-error"
}, Uf = {
  key: 2,
  class: "base-form-field-hint"
}, Bf = /* @__PURE__ */ oe({
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
    const l = t, n = U(() => l.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, m) => (s(), o("div", {
      class: fe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        h(a(t.label) + " ", 1),
        t.required ? (s(), o("span", zf, "*")) : d("", !0)
      ], 8, Lf)) : d("", !0),
      e("div", Df, [
        Me(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Nf, a(t.error), 1)) : t.hint ? (s(), o("span", Uf, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), Is = /* @__PURE__ */ le(Bf, [["__scopeId", "data-v-9a1cf296"]]), Of = { class: "remote-form" }, Af = { class: "form-header" }, Ff = { class: "form-body" }, Vf = {
  key: 0,
  class: "form-error"
}, Wf = { class: "form-actions" }, Gf = /* @__PURE__ */ oe({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = w({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), v = w(!1), u = w(null);
    _t(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      m.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const f = U(() => m.value.name.trim() !== "" && m.value.fetchUrl.trim() !== "");
    async function c() {
      if (!(!f.value || v.value)) {
        u.value = null, v.value = !0;
        try {
          i("submit", m.value);
        } catch (g) {
          u.value = g instanceof Error ? g.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (g, p) => (s(), o("div", Of, [
      e("div", Af, [
        k(ct, null, {
          default: r(() => [
            h(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Ff, [
        k(Is, {
          label: "Remote Name",
          required: ""
        }, {
          default: r(() => [
            k(gt, {
              modelValue: m.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (y) => m.value.name = y),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(Is, {
          label: "Fetch URL",
          required: ""
        }, {
          default: r(() => [
            k(gt, {
              modelValue: m.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (y) => m.value.fetchUrl = y),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(Is, { label: "Push URL (optional)" }, {
          default: r(() => [
            k(gt, {
              modelValue: m.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (y) => m.value.pushUrl = y),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", Vf, a(u.value), 1)) : d("", !0)
      ]),
      e("div", Wf, [
        k(ne, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: v.value,
          onClick: c
        }, {
          default: r(() => [
            h(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(ne, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (y) => g.$emit("cancel"))
        }, {
          default: r(() => [...p[4] || (p[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), jf = /* @__PURE__ */ le(Gf, [["__scopeId", "data-v-56021b18"]]), Hf = { class: "conflict-summary-box" }, Kf = { class: "summary-header" }, qf = { class: "summary-text" }, Yf = { key: 0 }, Xf = {
  key: 1,
  class: "all-resolved"
}, Qf = { class: "summary-progress" }, Zf = { class: "progress-bar" }, Jf = { class: "progress-text" }, eg = /* @__PURE__ */ oe({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const l = t, n = U(
      () => l.conflictCount > 0 ? l.resolvedCount / l.conflictCount * 100 : 0
    );
    return (i, m) => (s(), o("div", Hf, [
      e("div", Kf, [
        m[0] || (m[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", qf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Yf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Xf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Qf, [
        e("div", Zf, [
          e("div", {
            class: "progress-fill",
            style: Et({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Jf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), tg = /* @__PURE__ */ le(eg, [["__scopeId", "data-v-4e9e6cc9"]]), sg = { class: "modal-header" }, og = { class: "modal-title" }, ng = { class: "modal-body" }, ag = {
  key: 0,
  class: "error-box"
}, lg = {
  key: 0,
  class: "error-hint"
}, ig = {
  key: 1,
  class: "loading-state"
}, rg = { class: "commit-summary" }, dg = {
  key: 0,
  class: "changes-section"
}, cg = {
  key: 0,
  class: "change-group",
  open: ""
}, ug = { class: "change-count" }, mg = { class: "change-list" }, vg = {
  key: 0,
  class: "conflict-badge"
}, fg = {
  key: 1,
  class: "change-group"
}, gg = { class: "change-count" }, pg = { class: "change-list" }, hg = {
  key: 2,
  class: "change-group"
}, yg = { class: "change-count" }, wg = { class: "change-list" }, kg = {
  key: 2,
  class: "strategy-section"
}, _g = { class: "radio-group" }, bg = { class: "radio-option" }, $g = { class: "radio-option" }, Cg = { class: "radio-option" }, xg = {
  key: 3,
  class: "up-to-date"
}, Sg = { class: "modal-actions" }, Xs = "comfygit.pullModelStrategy", Ig = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l, m = w(localStorage.getItem(Xs) || "skip");
    _t(m, ($) => {
      localStorage.setItem(Xs, $);
    });
    const v = U(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = U(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), f = U(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), c = U(() => {
      var $;
      return u.value > 0 || f.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), g = U(() => n.preview && mo(n.preview) ? n.preview : null), p = U(() => {
      var $;
      return (($ = g.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), y = U(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), b = U(
      () => p.value > 0 && y.value === p.value
    ), _ = U(() => !(!n.preview || n.preview.has_uncommitted_changes || g.value && !b.value));
    function T($) {
      if (!g.value) return !1;
      const C = $.replace(/\.json$/, "");
      return g.value.workflow_conflicts.some((z) => z.name === C);
    }
    function x($) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: m.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var z, S;
      return s(), E(Qe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (R) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Ve(() => {
            }, ["stop"]))
          }, [
            e("div", sg, [
              e("h3", og, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (R) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", ng, [
              t.error ? (s(), o("div", ag, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  v.value ? (s(), o("p", lg, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", ig, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (z = t.preview) != null && z.has_uncommitted_changes ? (s(), o(F, { key: 2 }, [
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
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", rg, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  h(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                c.value ? (s(), o("div", dg, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", cg, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", ug, a(u.value) + " changes", 1)
                    ]),
                    e("div", mg, [
                      (s(!0), o(F, null, ae(t.preview.changes.workflows.added, (R) => (s(), o("div", {
                        key: "a-" + R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128)),
                      (s(!0), o(F, null, ae(t.preview.changes.workflows.modified, (R) => (s(), o("div", {
                        key: "m-" + R,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(R) + " ", 1),
                        T(R) ? (s(), o("span", vg, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(F, null, ae(t.preview.changes.workflows.deleted, (R) => (s(), o("div", {
                        key: "d-" + R,
                        class: "change-item delete"
                      }, " - " + a(R), 1))), 128))
                    ])
                  ])) : d("", !0),
                  f.value > 0 ? (s(), o("details", fg, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", gg, a(f.value) + " to install", 1)
                    ]),
                    e("div", pg, [
                      (s(!0), o(F, null, ae(t.preview.changes.nodes.to_install, (R) => (s(), o("div", {
                        key: R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", hg, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", yg, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", wg, [
                      (s(!0), o(F, null, ae(t.preview.changes.models.referenced, (R) => (s(), o("div", {
                        key: R,
                        class: "change-item"
                      }, a(R), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                g.value ? (s(), E(tg, {
                  key: 1,
                  "conflict-count": p.value,
                  "resolved-count": y.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", kg, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", _g, [
                    e("label", bg, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (R) => m.value = R),
                        value: "all"
                      }, null, 512), [
                        [Rt, m.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", $g, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (R) => m.value = R),
                        value: "required"
                      }, null, 512), [
                        [Rt, m.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Cg, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (R) => m.value = R),
                        value: "skip"
                      }, null, 512), [
                        [Rt, m.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", xg, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Sg, [
              k(ne, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (R) => $.$emit("close"))
              }, {
                default: r(() => [...C[29] || (C[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(F, { key: 0 }, [
                k(ne, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (R) => x(!1))
                }, {
                  default: r(() => [...C[30] || (C[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(ne, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (R) => x(!0))
                }, {
                  default: r(() => [...C[31] || (C[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (S = t.preview) != null && S.has_uncommitted_changes ? (s(), E(ne, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (R) => x(!0))
              }, {
                default: r(() => [...C[32] || (C[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(F, { key: 2 }, [
                g.value && !b.value ? (s(), E(ne, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (R) => i("openConflictResolution"))
                }, {
                  default: r(() => [
                    h(" Resolve Conflicts (" + a(y.value) + "/" + a(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(ne, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !_.value,
                  onClick: C[9] || (C[9] = (R) => x(!1))
                }, {
                  default: r(() => [...C[33] || (C[33] = [
                    h(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Eg = /* @__PURE__ */ le(Ig, [["__scopeId", "data-v-300c7b2f"]]), Mg = { class: "modal-header" }, Pg = { class: "modal-title" }, Tg = { class: "modal-body" }, Rg = {
  key: 0,
  class: "loading-state"
}, Lg = {
  key: 1,
  class: "warning-box"
}, zg = {
  key: 0,
  class: "commits-section"
}, Dg = { class: "commit-list" }, Ng = { class: "commit-hash" }, Ug = { class: "commit-message" }, Bg = { class: "commit-date" }, Og = { class: "force-option" }, Ag = { class: "checkbox-option" }, Fg = { class: "commit-summary" }, Vg = {
  key: 0,
  class: "commits-section"
}, Wg = { class: "commit-list" }, Gg = { class: "commit-hash" }, jg = { class: "commit-message" }, Hg = { class: "commit-date" }, Kg = {
  key: 1,
  class: "up-to-date"
}, qg = { class: "modal-actions" }, Yg = /* @__PURE__ */ oe({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: l }) {
    const n = l, i = w(!1);
    function m(v) {
      n("push", { force: v });
    }
    return (v, u) => {
      var f, c, g;
      return s(), E(Qe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (p) => v.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Ve(() => {
            }, ["stop"]))
          }, [
            e("div", Mg, [
              e("h3", Pg, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (p) => v.$emit("close"))
              }, "✕")
            ]),
            e("div", Tg, [
              t.loading ? (s(), o("div", Rg, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (f = t.preview) != null && f.has_uncommitted_changes ? (s(), o("div", Lg, [...u[9] || (u[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (c = t.preview) != null && c.remote_has_new_commits ? (s(), o(F, { key: 2 }, [
                u[13] || (u[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", zg, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Dg, [
                    (s(!0), o(F, null, ae(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Ng, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Ug, a(p.message), 1),
                      e("span", Bg, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", Og, [
                  e("label", Ag, [
                    Ue(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (p) => i.value = p)
                    }, null, 512), [
                      [us, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", Fg, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Vg, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Wg, [
                    (s(!0), o(F, null, ae(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Gg, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", jg, a(p.message), 1),
                      e("span", Hg, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Kg, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", qg, [
              k(ne, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (p) => v.$emit("close"))
              }, {
                default: r(() => [...u[17] || (u[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (g = t.preview) != null && g.remote_has_new_commits ? (s(), o(F, { key: 0 }, [
                k(ne, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (p) => v.$emit("pull-first"))
                }, {
                  default: r(() => [...u[18] || (u[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(ne, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (p) => m(!0))
                }, {
                  default: r(() => [...u[19] || (u[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(ne, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (p) => m(!1))
              }, {
                default: r(() => [...u[20] || (u[20] = [
                  h(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Xg = /* @__PURE__ */ le(Yg, [["__scopeId", "data-v-bc6ded53"]]), Qg = { class: "resolution-choice-group" }, Zg = ["disabled"], Jg = ["disabled"], ep = /* @__PURE__ */ oe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (l, n) => (s(), o("div", Qg, [
      e("button", {
        class: fe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => l.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Zg),
      e("button", {
        class: fe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => l.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Jg)
    ]));
  }
}), tp = /* @__PURE__ */ le(ep, [["__scopeId", "data-v-985715ed"]]), sp = { class: "conflict-header" }, op = { class: "conflict-info" }, np = { class: "workflow-name" }, ap = { class: "conflict-description" }, lp = {
  key: 0,
  class: "resolved-badge"
}, ip = { class: "resolved-text" }, rp = { class: "conflict-hashes" }, dp = { class: "hash-item" }, cp = { class: "hash-item" }, up = { class: "conflict-actions" }, mp = /* @__PURE__ */ oe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = w(n.resolution);
    _t(() => n.resolution, (c) => {
      m.value = c;
    }), _t(m, (c) => {
      c && i("resolve", c);
    });
    const v = U(() => m.value !== null), u = U(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), f = U(() => {
      switch (m.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (c, g) => {
      var p, y;
      return s(), o("div", {
        class: fe(["conflict-item", { resolved: v.value }])
      }, [
        e("div", sp, [
          g[2] || (g[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", op, [
            e("code", np, a(t.conflict.name) + ".json", 1),
            e("div", ap, a(u.value), 1)
          ]),
          v.value ? (s(), o("div", lp, [
            g[1] || (g[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", ip, a(f.value), 1)
          ])) : d("", !0)
        ]),
        e("div", rp, [
          e("span", dp, [
            g[3] || (g[3] = h("Your: ", -1)),
            e("code", null, a(((p = t.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", cp, [
            g[4] || (g[4] = h("Theirs: ", -1)),
            e("code", null, a(((y = t.conflict.target_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", up, [
          k(tp, {
            modelValue: m.value,
            "onUpdate:modelValue": g[0] || (g[0] = (b) => m.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), vp = /* @__PURE__ */ le(mp, [["__scopeId", "data-v-506d3bbf"]]), fp = { class: "resolution-content" }, gp = {
  key: 0,
  class: "error-box"
}, pp = { class: "resolution-header" }, hp = { class: "header-stats" }, yp = { class: "stat" }, wp = { class: "stat-value" }, kp = { class: "stat resolved" }, _p = { class: "stat-value" }, bp = {
  key: 0,
  class: "stat pending"
}, $p = { class: "stat-value" }, Cp = { class: "conflicts-list" }, xp = {
  key: 1,
  class: "all-resolved-message"
}, Sp = /* @__PURE__ */ oe({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = U(() => n.resolutions.size), v = U(() => n.workflowConflicts.length - m.value), u = U(() => m.value === n.workflowConflicts.length), f = U(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function c(b) {
      const _ = n.resolutions.get(b);
      return (_ == null ? void 0 : _.resolution) ?? null;
    }
    function g(b, _) {
      i("resolve", b, _);
    }
    function p() {
      i("close");
    }
    function y() {
      i("apply");
    }
    return (b, _) => (s(), E(at, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: r(() => [
        e("div", fp, [
          t.error ? (s(), o("div", gp, [
            _[1] || (_[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              _[0] || (_[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", pp, [
            e("div", hp, [
              e("div", yp, [
                e("span", wp, a(t.workflowConflicts.length), 1),
                _[2] || (_[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", kp, [
                e("span", _p, a(m.value), 1),
                _[3] || (_[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              v.value > 0 ? (s(), o("div", bp, [
                e("span", $p, a(v.value), 1),
                _[4] || (_[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            _[5] || (_[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Cp, [
            (s(!0), o(F, null, ae(t.workflowConflicts, (T) => (s(), E(vp, {
              key: T.name,
              conflict: T,
              resolution: c(T.name),
              onResolve: (x) => g(T.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", xp, [
            _[6] || (_[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(f.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: r(() => [
        k(pe, {
          variant: "secondary",
          onClick: p
        }, {
          default: r(() => [..._[7] || (_[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _[8] || (_[8] = e("div", { class: "footer-spacer" }, null, -1)),
        k(pe, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: y
        }, {
          default: r(() => [
            h(a(f.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ip = /* @__PURE__ */ le(Sp, [["__scopeId", "data-v-c58d150d"]]), Ep = { class: "node-conflict-item" }, Mp = { class: "node-header" }, Pp = { class: "node-name" }, Tp = { class: "node-id" }, Rp = { class: "version-comparison" }, Lp = { class: "version yours" }, zp = { class: "version theirs" }, Dp = { class: "chosen-version" }, Np = { class: "chosen" }, Up = { class: "chosen-reason" }, Bp = { class: "affected-workflows" }, Op = { class: "wf-source" }, Ap = { class: "wf-version" }, Fp = /* @__PURE__ */ oe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (l, n) => (s(), o("div", Ep, [
      e("div", Mp, [
        e("code", Pp, a(t.conflict.node_name), 1),
        e("span", Tp, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Rp, [
        e("div", Lp, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", zp, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Dp, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Np, a(t.conflict.chosen_version), 1),
        e("span", Up, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Bp, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(F, null, ae(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Op, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Ap, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Vp = /* @__PURE__ */ le(Fp, [["__scopeId", "data-v-8b626725"]]), Wp = { class: "validation-content" }, Gp = {
  key: 0,
  class: "compatible-message"
}, jp = { class: "conflicts-list" }, Hp = {
  key: 2,
  class: "warnings-section"
}, Kp = /* @__PURE__ */ oe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = U(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (v, u) => (s(), E(at, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (f) => i("cancel"))
    }, {
      body: r(() => [
        e("div", Wp, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Gp, [
            u[5] || (u[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              u[4] || (u[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(F, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", jp, [
              (s(!0), o(F, null, ae(t.validation.node_conflicts, (f) => (s(), E(Vp, {
                key: f.node_id,
                conflict: f
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Hp, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(F, null, ae(t.validation.warnings, (f, c) => (s(), o("li", { key: c }, a(f), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: r(() => [
        k(pe, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (f) => i("cancel"))
        }, {
          default: r(() => [...u[9] || (u[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        k(pe, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (f) => i("goBack"))
        }, {
          default: r(() => [...u[10] || (u[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(pe, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (f) => i("proceed"))
        }, {
          default: r(() => [
            h(a(m.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), qp = /* @__PURE__ */ le(Kp, [["__scopeId", "data-v-fefd26ed"]]), Yp = { key: 0 }, Xp = /* @__PURE__ */ oe({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: l }) {
    const n = l, {
      getRemotes: i,
      addRemote: m,
      removeRemote: v,
      updateRemoteUrl: u,
      fetchRemote: f,
      getRemoteSyncStatus: c,
      getPullPreview: g,
      pullFromRemote: p,
      getPushPreview: y,
      pushToRemote: b,
      validateMerge: _
    } = qe(), T = w([]), x = w(null), $ = w({}), C = w(!1), z = w(null), S = w(""), R = w(!1), G = w(null), V = w(!1), j = w("add"), M = w({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), L = U(() => {
      if (!S.value.trim()) return T.value;
      const A = S.value.toLowerCase();
      return T.value.filter(
        (se) => se.name.toLowerCase().includes(A) || se.fetch_url.toLowerCase().includes(A) || se.push_url.toLowerCase().includes(A)
      );
    });
    async function O() {
      C.value = !0, z.value = null;
      try {
        const A = await i();
        T.value = A.remotes, x.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (se) => {
            const Ce = await c(se.name);
            Ce && ($.value[se.name] = Ce);
          })
        );
      } catch (A) {
        z.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function de() {
      j.value = "add", M.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function ee(A) {
      const se = T.value.find((Ce) => Ce.name === A);
      se && (j.value = "edit", M.value = {
        name: se.name,
        fetchUrl: se.fetch_url,
        pushUrl: se.push_url
      }, V.value = !0);
    }
    async function Q(A) {
      try {
        j.value === "add" ? await m(A.name, A.fetchUrl) : await u(A.name, A.fetchUrl, A.pushUrl || void 0), V.value = !1, await O();
      } catch (se) {
        z.value = se instanceof Error ? se.message : "Operation failed";
      }
    }
    function ce() {
      V.value = !1, M.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(A) {
      G.value = A;
      try {
        await f(A);
        const se = await c(A);
        se && ($.value[A] = se), n("toast", `✓ Fetched from ${A}`, "success");
      } catch (se) {
        n("toast", se instanceof Error ? se.message : "Fetch failed", "error");
      } finally {
        G.value = null;
      }
    }
    async function D(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await v(A), await O();
        } catch (se) {
          z.value = se instanceof Error ? se.message : "Failed to remove remote";
        }
    }
    function N() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const P = w("idle"), ue = U(() => P.value === "pull_preview"), J = U(
      () => P.value === "resolving" || P.value === "validating"
    ), he = U(
      () => P.value === "validation_review" || P.value === "executing"
    ), Se = w(!1), Re = w(null), We = w(!1), me = w(null), ye = w(!1), Ie = w(null), Z = w(null), ie = w(/* @__PURE__ */ new Map()), ke = w(null), Ae = w(null), ot = U(() => Ie.value && mo(Ie.value) ? Ie.value : null);
    async function rt(A) {
      me.value = A, P.value = "pull_preview", ye.value = !0, Ie.value = null, Z.value = null;
      try {
        Ie.value = await g(A);
      } catch (se) {
        Z.value = se instanceof Error ? se.message : "Failed to load pull preview";
      } finally {
        ye.value = !1;
      }
    }
    function Ee() {
      P.value = "idle", Ie.value = null, Z.value = null, me.value = null;
    }
    async function nt(A) {
      if (!me.value) return;
      P.value = "executing", Z.value = null;
      const se = me.value;
      try {
        const Ce = await p(se, A);
        if (Ce.rolled_back) {
          Z.value = `Pull failed and was rolled back: ${Ce.error || "Unknown error"}`, P.value = "pull_preview";
          return;
        }
        Le(), P.value = "idle", n("toast", `✓ Pulled from ${se}`, "success"), await O();
      } catch (Ce) {
        Z.value = Ce instanceof Error ? Ce.message : "Pull failed", P.value = "pull_preview";
      }
    }
    function Je() {
      ot.value && (P.value = "resolving", Ae.value = null);
    }
    function Xe(A, se) {
      ie.value.set(A, { name: A, resolution: se });
    }
    function ut() {
      P.value = "pull_preview";
    }
    async function te() {
      P.value = "validating", Ae.value = null;
      try {
        const A = Array.from(ie.value.values());
        ke.value = await _(me.value, A), P.value = "validation_review";
      } catch (A) {
        Ae.value = A instanceof Error ? A.message : "Validation failed", P.value = "resolving";
      }
    }
    async function W() {
      P.value = "executing";
      const A = me.value;
      try {
        const se = Array.from(ie.value.values()), Ce = await p(A, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: se
        });
        if (Ce.rolled_back) {
          Z.value = `Pull failed and was rolled back: ${Ce.error || "Unknown error"}`, P.value = "pull_preview";
          return;
        }
        Le(), P.value = "idle", n("toast", `✓ Pulled from ${A}`, "success"), await O();
      } catch (se) {
        Z.value = se instanceof Error ? se.message : "Pull failed", P.value = "validation_review";
      }
    }
    function re() {
      P.value = "resolving";
    }
    function He() {
      Le(), P.value = "idle";
    }
    function Le() {
      ie.value.clear(), ke.value = null, Ae.value = null, Z.value = null, Ie.value = null, me.value = null;
    }
    async function ve(A) {
      me.value = A, Se.value = !0, ye.value = !0, Re.value = null;
      try {
        Re.value = await y(A);
      } catch (se) {
        z.value = se instanceof Error ? se.message : "Failed to load push preview";
      } finally {
        ye.value = !1;
      }
    }
    function K() {
      Se.value = !1, Re.value = null, me.value = null;
    }
    async function Y(A) {
      if (!me.value) return;
      We.value = !0;
      const se = me.value;
      try {
        await b(se, A), K(), n("toast", `✓ Pushed to ${se}`, "success"), await O();
      } catch (Ce) {
        n("toast", Ce instanceof Error ? Ce.message : "Push failed", "error");
      } finally {
        We.value = !1;
      }
    }
    function I() {
      const A = me.value;
      K(), A && rt(A);
    }
    return je(O), (A, se) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: se[0] || (se[0] = (Ce) => R.value = !0)
          }, {
            actions: r(() => [
              V.value ? d("", !0) : (s(), E(ne, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: de
              }, {
                default: r(() => [...se[3] || (se[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          V.value ? d("", !0) : (s(), E(Wt, {
            key: 0,
            modelValue: S.value,
            "onUpdate:modelValue": se[1] || (se[1] = (Ce) => S.value = Ce),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: r(() => [
          C.value ? (s(), E(Mt, {
            key: 0,
            message: "Loading remotes..."
          })) : z.value ? (s(), E(Pt, {
            key: 1,
            message: z.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            V.value ? (s(), E(jf, {
              key: 0,
              mode: j.value,
              "remote-name": M.value.name,
              "fetch-url": M.value.fetchUrl,
              "push-url": M.value.pushUrl,
              onSubmit: Q,
              onCancel: ce
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            T.value.length && !V.value ? (s(), E(ss, {
              key: 1,
              variant: "compact"
            }, {
              default: r(() => [
                h(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (s(), o("span", Yp, " • Tracking: " + a(x.value.remote) + "/" + a(x.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            L.value.length && !V.value ? (s(), E(Fe, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(L.value, (Ce) => (s(), E(Rf, {
                  key: Ce.name,
                  remote: Ce,
                  "sync-status": $.value[Ce.name],
                  "fetching-remote": G.value,
                  onFetch: X,
                  onEdit: ee,
                  onRemove: D,
                  onPull: rt,
                  onPush: ve
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !L.value.length && !V.value ? (s(), E(pt, {
              key: 3,
              icon: "🌐",
              message: S.value ? `No remotes match '${S.value}'` : "No remotes configured."
            }, {
              actions: r(() => [
                k(ne, {
                  variant: "primary",
                  onClick: de
                }, {
                  default: r(() => [...se[4] || (se[4] = [
                    h(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ht, {
        show: R.value,
        title: "About Git Remotes",
        onClose: se[2] || (se[2] = (Ce) => R.value = !1)
      }, {
        content: r(() => [...se[5] || (se[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: r(() => [
          k(ne, {
            variant: "link",
            onClick: N
          }, {
            default: r(() => [...se[6] || (se[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(Eg, {
        show: ue.value,
        "remote-name": me.value || "",
        preview: Ie.value,
        loading: ye.value,
        pulling: P.value === "executing",
        error: Z.value,
        "conflict-resolutions": ie.value,
        onClose: Ee,
        onPull: nt,
        onOpenConflictResolution: Je
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(Xg, {
        show: Se.value,
        "remote-name": me.value || "",
        preview: Re.value,
        loading: ye.value,
        pushing: We.value,
        onClose: K,
        onPush: Y,
        onPullFirst: I
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      J.value && ot.value ? (s(), E(Ip, {
        key: 0,
        "workflow-conflicts": ot.value.workflow_conflicts,
        resolutions: ie.value,
        "operation-type": "pull",
        validating: P.value === "validating",
        error: Ae.value,
        onClose: ut,
        onResolve: Xe,
        onApply: te
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      he.value && ke.value ? (s(), E(qp, {
        key: 1,
        validation: ke.value,
        "operation-type": "pull",
        executing: P.value === "executing",
        onProceed: W,
        onGoBack: re,
        onCancel: He
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), Qp = /* @__PURE__ */ le(Xp, [["__scopeId", "data-v-9ae3b76d"]]), Zp = { class: "setting-info" }, Jp = { class: "setting-label" }, eh = {
  key: 0,
  class: "required-marker"
}, th = {
  key: 0,
  class: "setting-description"
}, sh = { class: "setting-control" }, oh = /* @__PURE__ */ oe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (l, n) => (s(), o("div", {
      class: fe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Zp, [
        e("div", Jp, [
          h(a(t.label) + " ", 1),
          t.required ? (s(), o("span", eh, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", th, a(t.description), 1)) : d("", !0)
      ]),
      e("div", sh, [
        Me(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Es = /* @__PURE__ */ le(oh, [["__scopeId", "data-v-cb5d236c"]]), nh = { class: "toggle" }, ah = ["checked", "disabled"], lh = /* @__PURE__ */ oe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (l, n) => (s(), o("label", nh, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => l.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, ah),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ih = /* @__PURE__ */ le(lh, [["__scopeId", "data-v-71c0f550"]]), rh = { class: "workspace-settings-content" }, dh = { class: "settings-section" }, ch = { class: "path-setting" }, uh = { class: "path-value" }, mh = { class: "path-setting" }, vh = { class: "path-value" }, fh = { class: "settings-section" }, gh = { class: "settings-section" }, ph = { class: "settings-section" }, hh = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: l, emit: n }) {
    const i = t, m = n, { getConfig: v, updateConfig: u } = qe(), f = w(!1), c = w(null), g = w(null), p = w(null), y = w(null), b = w(""), _ = w(""), T = w(!1);
    function x(V) {
      return V.join(" ");
    }
    function $(V) {
      return V.trim() ? V.trim().split(/\s+/) : [];
    }
    const C = U(() => {
      if (!y.value) return !1;
      const V = b.value !== (y.value.civitai_api_key || ""), j = _.value !== x(y.value.comfyui_extra_args || []);
      return V || j;
    });
    async function z() {
      f.value = !0, c.value = null;
      try {
        p.value = await v(i.workspacePath || void 0), y.value = { ...p.value }, b.value = p.value.civitai_api_key || "", _.value = x(p.value.comfyui_extra_args || []);
        const V = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        T.value = V === "true";
      } catch (V) {
        c.value = V instanceof Error ? V.message : "Failed to load settings";
      } finally {
        f.value = !1;
      }
    }
    async function S() {
      var V, j;
      g.value = null;
      try {
        const M = {};
        b.value !== (((V = y.value) == null ? void 0 : V.civitai_api_key) || "") && (M.civitai_api_key = b.value || null), _.value !== x(((j = y.value) == null ? void 0 : j.comfyui_extra_args) || []) && (M.comfyui_extra_args = $(_.value)), await u(M, i.workspacePath || void 0), await z(), g.value = { type: "success", message: "Settings saved successfully" }, m("saved"), setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (M) {
        const L = M instanceof Error ? M.message : "Failed to save settings";
        g.value = { type: "error", message: L }, m("error", L);
      }
    }
    function R() {
      y.value && (b.value = y.value.civitai_api_key || "", _.value = x(y.value.comfyui_extra_args || []), g.value = null);
    }
    function G(V) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(V)), console.log("[ComfyGit] Auto-refresh setting saved:", V);
    }
    return l({
      saveSettings: S,
      resetSettings: R,
      hasChanges: C,
      loadSettings: z
    }), je(z), (V, j) => (s(), o("div", rh, [
      f.value ? (s(), E(Mt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : c.value ? (s(), E(Pt, {
        key: 1,
        message: c.value,
        retry: !0,
        onRetry: z
      }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
        k(Fe, { title: "WORKSPACE PATHS" }, {
          default: r(() => {
            var M, L;
            return [
              e("div", dh, [
                e("div", ch, [
                  j[3] || (j[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  j[4] || (j[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", uh, a(((M = p.value) == null ? void 0 : M.workspace_path) || "Loading..."), 1)
                ]),
                e("div", mh, [
                  j[5] || (j[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  j[6] || (j[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", vh, a(((L = p.value) == null ? void 0 : L.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        k(Fe, { title: "API CREDENTIALS" }, {
          default: r(() => [
            e("div", fh, [
              k(Es, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: r(() => [
                  k(ms, {
                    modelValue: b.value,
                    "onUpdate:modelValue": j[0] || (j[0] = (M) => b.value = M),
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
        k(Fe, { title: "COMFYUI SETTINGS" }, {
          default: r(() => [
            e("div", gh, [
              k(Es, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: r(() => [
                  k(ms, {
                    modelValue: _.value,
                    "onUpdate:modelValue": j[1] || (j[1] = (M) => _.value = M),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              j[7] || (j[7] = e("div", { class: "setting-hint" }, [
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
        k(Fe, { title: "UI SETTINGS" }, {
          default: r(() => [
            e("div", ph, [
              k(Es, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: r(() => [
                  k(ih, {
                    modelValue: T.value,
                    "onUpdate:modelValue": [
                      j[2] || (j[2] = (M) => T.value = M),
                      G
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        g.value ? (s(), E(ss, {
          key: 0,
          variant: (g.value.type === "success", "compact")
        }, {
          default: r(() => [
            e("span", {
              style: Et({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(g.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : d("", !0)
      ], 64))
    ]));
  }
}), vo = /* @__PURE__ */ le(hh, [["__scopeId", "data-v-9f44552d"]]), yh = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const l = w(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, m) => (s(), E(tt, null, {
      header: r(() => [
        k(st, { title: "WORKSPACE SETTINGS" }, {
          actions: r(() => {
            var v, u;
            return [
              k(ne, {
                variant: "primary",
                size: "sm",
                disabled: !((v = l.value) != null && v.hasChanges),
                onClick: m[0] || (m[0] = (f) => {
                  var c;
                  return (c = l.value) == null ? void 0 : c.saveSettings();
                })
              }, {
                default: r(() => [...m[2] || (m[2] = [
                  h(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = l.value) != null && u.hasChanges ? (s(), E(ne, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: m[1] || (m[1] = (f) => {
                  var c;
                  return (c = l.value) == null ? void 0 : c.resetSettings();
                })
              }, {
                default: r(() => [...m[3] || (m[3] = [
                  h(" Reset ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: r(() => [
        k(vo, {
          ref_key: "contentRef",
          ref: l,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), wh = /* @__PURE__ */ oe({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: l, getWorkspaceLogPath: n, openFile: i } = qe(), m = w([]), v = w(!1), u = w(null), f = w(!1), c = w(null), g = w(null), p = w(!1), y = U(() => m.value.length === 0 ? [] : m.value.map((x) => ({
      text: `${x.timestamp} - ${x.name} - ${x.level} - ${x.func}:${x.line} - ${x.message}`,
      level: x.level
    })));
    async function b() {
      v.value = !0, u.value = null;
      try {
        m.value = await l(void 0, 500);
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load workspace logs";
      } finally {
        v.value = !1, setTimeout(() => {
          var x;
          (x = c.value) != null && x.parentElement && (c.value.parentElement.scrollTop = c.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function _() {
      try {
        const x = await n();
        x.exists && (g.value = x.path);
      } catch {
      }
    }
    async function T() {
      if (g.value) {
        p.value = !0;
        try {
          await i(g.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return je(() => {
      b(), _();
    }), (x, $) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => f.value = !0)
          }, {
            actions: r(() => [
              k(ne, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !g.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: r(() => [
                  h(a(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ne, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: v.value
              }, {
                default: r(() => [
                  h(a(v.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: r(() => [
          v.value ? (s(), E(Mt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), E(Pt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            m.value.length === 0 ? (s(), E(pt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: c,
              class: "log-output"
            }, [
              (s(!0), o(F, null, ae(y.value, (C, z) => (s(), o("div", {
                key: z,
                class: fe(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ht, {
        show: f.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (C) => f.value = !1)
      }, {
        content: r(() => [...$[3] || ($[3] = [
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
        actions: r(() => [
          k(ne, {
            variant: "primary",
            onClick: $[1] || ($[1] = (C) => f.value = !1)
          }, {
            default: r(() => [...$[4] || ($[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kh = /* @__PURE__ */ le(wh, [["__scopeId", "data-v-7f05352a"]]), _h = /* @__PURE__ */ oe({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: l, getStatus: n, getEnvironmentLogPath: i, openFile: m } = qe(), v = w([]), u = w(!1), f = w(null), c = w(!1), g = w("production"), p = w(null), y = w(null), b = w(!1), _ = U(() => v.value.length === 0 ? [] : v.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function T() {
      u.value = !0, f.value = null;
      try {
        v.value = await l(void 0, 500);
        try {
          const C = await n();
          g.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        f.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var C;
          (C = p.value) != null && C.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function x() {
      try {
        const C = await i();
        C.exists && (y.value = C.path);
      } catch {
      }
    }
    async function $() {
      if (y.value) {
        b.value = !0;
        try {
          await m(y.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          b.value = !1;
        }
      }
    }
    return je(() => {
      T(), x();
    }), (C, z) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (S) => c.value = !0)
          }, {
            actions: r(() => [
              k(ne, {
                variant: "secondary",
                size: "sm",
                onClick: $,
                disabled: !y.value || b.value,
                title: "Open log file in default editor"
              }, {
                default: r(() => [
                  h(a(b.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ne, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: u.value
              }, {
                default: r(() => [
                  h(a(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: r(() => [
          u.value ? (s(), E(Mt, {
            key: 0,
            message: "Loading environment logs..."
          })) : f.value ? (s(), E(Pt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            v.value.length === 0 ? (s(), E(pt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (s(!0), o(F, null, ae(_.value, (S, R) => (s(), o("div", {
                key: R,
                class: fe(`log-line log-level-${S.level.toLowerCase()}`)
              }, a(S.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ht, {
        show: c.value,
        title: "About Environment Logs",
        onClose: z[2] || (z[2] = (S) => c.value = !1)
      }, {
        content: r(() => [
          e("p", null, [
            z[3] || (z[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(g.value), 1),
            z[4] || (z[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          z[5] || (z[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          z[6] || (z[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: r(() => [
          k(ne, {
            variant: "primary",
            onClick: z[1] || (z[1] = (S) => c.value = !1)
          }, {
            default: r(() => [...z[7] || (z[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bh = /* @__PURE__ */ le(_h, [["__scopeId", "data-v-6f8db7ce"]]), $h = { class: "env-title" }, Ch = {
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
    return (l, n) => (s(), E(et, {
      status: t.isCurrent ? "synced" : void 0
    }, Vt({
      icon: r(() => [
        h(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: r(() => [
        e("div", $h, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Ch, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: r(() => [
        t.currentBranch ? (s(), o("span", xh, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: r(() => [
        Me(l.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: r(() => [
          k(Ge, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          k(Ge, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          k(Ge, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), E(Ge, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Ih = /* @__PURE__ */ le(Sh, [["__scopeId", "data-v-9231917a"]]), Eh = { class: "env-details" }, Mh = { class: "status-row" }, Ph = {
  key: 0,
  class: "detail-row"
}, Th = { class: "value mono" }, Rh = {
  key: 1,
  class: "detail-row"
}, Lh = { class: "value mono small" }, zh = { class: "detail-row" }, Dh = { class: "value" }, Nh = { class: "detail-row" }, Uh = { class: "value" }, Bh = { class: "detail-row" }, Oh = { class: "value" }, Ah = {
  key: 2,
  class: "section-divider"
}, Fh = {
  key: 3,
  class: "detail-row"
}, Vh = { class: "value" }, Wh = {
  key: 4,
  class: "detail-row"
}, Gh = { class: "value" }, jh = { class: "footer-actions" }, Hh = /* @__PURE__ */ oe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: l }) {
    const n = l;
    function i(m) {
      if (!m) return "Unknown";
      try {
        const v = new Date(m), f = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), c = Math.floor(f / 6e4), g = Math.floor(f / 36e5), p = Math.floor(f / 864e5);
        return c < 1 ? "just now" : c < 60 ? `${c} ${c === 1 ? "minute" : "minutes"} ago` : g < 24 ? `${g} ${g === 1 ? "hour" : "hours"} ago` : p < 30 ? `${p} ${p === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return m;
      }
    }
    return (m, v) => (s(), E(at, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (u) => n("close"))
    }, {
      body: r(() => [
        e("div", Eh, [
          e("div", Mh, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Ph, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Th, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", Rh, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Lh, a(t.environment.path), 1)
          ])) : d("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", zh, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Dh, a(t.environment.workflow_count), 1)
          ]),
          e("div", Nh, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Uh, a(t.environment.node_count), 1)
          ]),
          e("div", Bh, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Oh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Ah)) : d("", !0),
          t.environment.created_at ? (s(), o("div", Fh, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Vh, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", Wh, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Gh, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: r(() => [
        e("div", jh, [
          t.canDelete ? (s(), E(pe, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (u) => n("delete", t.environment.name))
          }, {
            default: r(() => [...v[12] || (v[12] = [
              h(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          k(pe, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (u) => n("close"))
          }, {
            default: r(() => [...v[13] || (v[13] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Kh = /* @__PURE__ */ le(Hh, [["__scopeId", "data-v-59855453"]]), fo = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], go = "3.12", Us = [
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
    const l = t, n = U(() => `${Math.max(0, Math.min(100, l.progress))}%`);
    return (i, m) => (s(), o("div", qh, [
      e("div", {
        class: fe(["progress-fill", t.variant]),
        style: Et({ width: n.value })
      }, null, 6)
    ]));
  }
}), ho = /* @__PURE__ */ le(Yh, [["__scopeId", "data-v-1beb0512"]]), Xh = { class: "task-progress" }, Qh = { class: "progress-info" }, Zh = { class: "progress-percentage" }, Jh = { class: "progress-message" }, e1 = {
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
    const l = t;
    function n(m) {
      const v = l.steps.find((u) => u.id === m);
      return v ? l.progress >= v.progressThreshold ? "completed" : l.currentPhase === m ? "active" : "pending" : "pending";
    }
    function i(m) {
      const v = n(m);
      return v === "completed" ? "✓" : v === "active" ? "⟳" : "○";
    }
    return (m, v) => (s(), o("div", Xh, [
      k(ho, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Qh, [
        e("span", Zh, a(t.progress) + "%", 1),
        e("span", Jh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", e1, [
        (s(!0), o(F, null, ae(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: fe(["step", n(u.id)])
        }, [
          e("span", t1, a(i(u.id)), 1),
          e("span", s1, a(u.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), fs = /* @__PURE__ */ le(o1, [["__scopeId", "data-v-9d1de66c"]]), n1 = {
  key: 0,
  class: "create-env-form"
}, a1 = { class: "form-field" }, l1 = { class: "form-field" }, i1 = ["value"], r1 = { class: "form-field" }, d1 = ["disabled"], c1 = ["value"], u1 = { class: "form-field" }, m1 = ["value"], v1 = { class: "form-field form-field--checkbox" }, f1 = { class: "form-checkbox" }, g1 = {
  key: 1,
  class: "create-env-progress"
}, p1 = { class: "creating-intro" }, h1 = {
  key: 0,
  class: "progress-warning"
}, y1 = {
  key: 1,
  class: "create-error"
}, w1 = { class: "error-message" }, k1 = {
  key: 1,
  class: "footer-status"
}, _1 = 10, b1 = /* @__PURE__ */ oe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: l }) {
    const n = l, { getComfyUIReleases: i, createEnvironment: m, getCreateProgress: v } = qe(), u = w(""), f = w(go), c = w("latest"), g = w(po), p = w(!1), y = w([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = w(!1), _ = w(!1), T = w({
      progress: 0,
      message: ""
    });
    let x = null, $ = 0;
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
    ], z = w(null);
    function S() {
      _.value || n("close");
    }
    async function R() {
      const L = u.value.trim();
      if (L) {
        _.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: L,
            python_version: f.value,
            comfyui_version: c.value,
            torch_backend: g.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, de = await m(O);
          de.status === "started" ? G() : de.status === "error" && (T.value = {
            progress: 0,
            message: de.message || "Failed to start creation",
            error: de.message
          });
        } catch (O) {
          T.value = {
            progress: 0,
            message: O instanceof Error ? O.message : "Unknown error",
            error: O instanceof Error ? O.message : "Unknown error"
          };
        }
      }
    }
    function G() {
      x || ($ = 0, x = window.setInterval(async () => {
        try {
          const L = await v();
          $ = 0, T.value = {
            progress: L.progress ?? 0,
            message: L.message,
            phase: L.phase,
            error: L.error
          }, L.state === "complete" ? (V(), n("created", L.environment_name || u.value.trim(), p.value)) : L.state === "error" ? (V(), T.value.error = L.error || L.message) : L.state === "idle" && _.value && (V(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= _1 && (V(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      x && (clearInterval(x), x = null);
    }
    function j() {
      _.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function M() {
      b.value = !0;
      try {
        y.value = await i();
      } catch (L) {
        console.error("Failed to load ComfyUI releases:", L);
      } finally {
        b.value = !1;
      }
    }
    return je(async () => {
      var L;
      await Po(), (L = z.value) == null || L.focus(), M();
    }), so(() => {
      V();
    }), (L, O) => (s(), E(at, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !_.value,
      onClose: S
    }, {
      body: r(() => [
        _.value ? (s(), o("div", g1, [
          e("p", p1, [
            O[11] || (O[11] = h(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            O[12] || (O[12] = h("... ", -1))
          ]),
          k(fs, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? d("", !0) : (s(), o("p", h1, " This may take several minutes. Please wait... ")),
          T.value.error ? (s(), o("div", y1, [
            e("p", w1, a(T.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", n1, [
          e("div", a1, [
            O[6] || (O[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ue(e("input", {
              ref_key: "nameInput",
              ref: z,
              "onUpdate:modelValue": O[0] || (O[0] = (de) => u.value = de),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: kt(R, ["enter"])
            }, null, 544), [
              [Dt, u.value]
            ])
          ]),
          e("div", l1, [
            O[7] || (O[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (de) => f.value = de),
              class: "form-select"
            }, [
              (s(!0), o(F, null, ae($e(fo), (de) => (s(), o("option", {
                key: de,
                value: de
              }, a(de), 9, i1))), 128))
            ], 512), [
              [It, f.value]
            ])
          ]),
          e("div", r1, [
            O[8] || (O[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (de) => c.value = de),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(F, null, ae(y.value, (de) => (s(), o("option", {
                key: de.tag_name,
                value: de.tag_name
              }, a(de.name), 9, c1))), 128))
            ], 8, d1), [
              [It, c.value]
            ])
          ]),
          e("div", u1, [
            O[9] || (O[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (de) => g.value = de),
              class: "form-select"
            }, [
              (s(!0), o(F, null, ae($e(Us), (de) => (s(), o("option", {
                key: de,
                value: de
              }, a(de) + a(de === "auto" ? " (detect GPU)" : ""), 9, m1))), 128))
            ], 512), [
              [It, g.value]
            ])
          ]),
          e("div", v1, [
            e("label", f1, [
              Ue(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (de) => p.value = de)
              }, null, 512), [
                [us, p.value]
              ]),
              O[10] || (O[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: r(() => [
        _.value ? (s(), o(F, { key: 1 }, [
          T.value.error ? (s(), E(pe, {
            key: 0,
            variant: "secondary",
            onClick: j
          }, {
            default: r(() => [...O[15] || (O[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", k1, " Creating environment... "))
        ], 64)) : (s(), o(F, { key: 0 }, [
          k(pe, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: R
          }, {
            default: r(() => [...O[13] || (O[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(pe, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (de) => n("close"))
          }, {
            default: r(() => [...O[14] || (O[14] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), $1 = /* @__PURE__ */ le(b1, [["__scopeId", "data-v-f37eaa42"]]), C1 = /* @__PURE__ */ oe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: l, emit: n }) {
    const i = n, { getEnvironments: m } = qe(), v = w([]), u = w(!1), f = w(null), c = w(""), g = w(!1), p = w(!1), y = w(null), b = U(() => {
      if (!c.value.trim()) return v.value;
      const z = c.value.toLowerCase();
      return v.value.filter(
        (S) => {
          var R;
          return S.name.toLowerCase().includes(z) || ((R = S.current_branch) == null ? void 0 : R.toLowerCase().includes(z));
        }
      );
    });
    function _(z, S) {
      p.value = !1, i("created", z, S);
    }
    function T() {
      p.value = !0;
    }
    function x(z) {
      y.value = z;
    }
    function $(z) {
      y.value = null, i("delete", z);
    }
    async function C() {
      u.value = !0, f.value = null;
      try {
        v.value = await m();
      } catch (z) {
        f.value = z instanceof Error ? z.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return je(C), l({
      loadEnvironments: C,
      openCreateModal: T
    }), (z, S) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (R) => g.value = !0)
          }, {
            actions: r(() => [
              k(ne, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: r(() => [...S[6] || (S[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              k(ne, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: r(() => [...S[7] || (S[7] = [
                  h(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: r(() => [
          k(Wt, {
            modelValue: c.value,
            "onUpdate:modelValue": S[1] || (S[1] = (R) => c.value = R),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: r(() => [
          u.value ? (s(), E(Mt, {
            key: 0,
            message: "Loading environments..."
          })) : f.value ? (s(), E(Pt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            b.value.length ? (s(), E(Fe, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: r(() => [
                (s(!0), o(F, null, ae(b.value, (R) => (s(), E(Ih, {
                  key: R.name,
                  "environment-name": R.name,
                  "is-current": R.is_current,
                  "current-branch": R.current_branch,
                  "show-last-used": !1
                }, {
                  actions: r(() => [
                    R.is_current ? d("", !0) : (s(), E(ne, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (G) => z.$emit("switch", R.name)
                    }, {
                      default: r(() => [...S[8] || (S[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (G) => x(R)
                    }, {
                      default: r(() => [...S[9] || (S[9] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            b.value.length ? d("", !0) : (s(), E(pt, {
              key: 1,
              icon: "🌍",
              message: c.value ? `No environments match '${c.value}'` : "No environments found. Create one to get started!"
            }, Vt({ _: 2 }, [
              c.value ? void 0 : {
                name: "actions",
                fn: r(() => [
                  k(ne, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: r(() => [...S[10] || (S[10] = [
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
      k(ht, {
        show: g.value,
        title: "About Environments",
        onClose: S[3] || (S[3] = (R) => g.value = !1)
      }, {
        content: r(() => [...S[11] || (S[11] = [
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
        actions: r(() => [
          k(ne, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (R) => g.value = !1)
          }, {
            default: r(() => [...S[12] || (S[12] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      y.value ? (s(), E(Kh, {
        key: 0,
        environment: y.value,
        "can-delete": v.value.length > 1,
        onClose: S[4] || (S[4] = (R) => y.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      p.value ? (s(), E($1, {
        key: 1,
        onClose: S[5] || (S[5] = (R) => p.value = !1),
        onCreated: _
      })) : d("", !0)
    ], 64));
  }
}), x1 = /* @__PURE__ */ le(C1, [["__scopeId", "data-v-f95999f4"]]), S1 = { class: "file-path" }, I1 = { class: "file-path-text" }, E1 = ["title"], M1 = /* @__PURE__ */ oe({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const l = t, n = w(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(l.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (m) {
        console.error("Failed to copy:", m);
      }
    }
    return (m, v) => (s(), o("div", S1, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", I1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, E1)) : d("", !0)
    ]));
  }
}), P1 = /* @__PURE__ */ le(M1, [["__scopeId", "data-v-f0982173"]]), T1 = { class: "export-blocked" }, R1 = { class: "issues-list" }, L1 = { class: "issue-message" }, z1 = {
  key: 0,
  class: "issue-details"
}, D1 = ["onClick"], N1 = { class: "issue-fix" }, U1 = /* @__PURE__ */ oe({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const l = t, n = gs({});
    function i(m) {
      const v = l.issues[m];
      return n[m] || v.details.length <= 3 ? v.details : v.details.slice(0, 3);
    }
    return (m, v) => (s(), E(at, {
      title: "Cannot Export",
      size: "md",
      onClose: v[1] || (v[1] = (u) => m.$emit("close"))
    }, {
      body: r(() => [
        e("div", T1, [
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
          e("div", R1, [
            (s(!0), o(F, null, ae(t.issues, (u, f) => (s(), o("div", {
              key: f,
              class: "issue-item"
            }, [
              e("div", L1, a(u.message), 1),
              u.details.length ? (s(), o("div", z1, [
                (s(!0), o(F, null, ae(i(f), (c, g) => (s(), o("div", {
                  key: g,
                  class: "issue-detail"
                }, a(c), 1))), 128)),
                u.details.length > 3 && !n[f] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (c) => n[f] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, D1)) : d("", !0)
              ])) : d("", !0),
              e("div", N1, [
                u.type === "uncommitted_workflows" ? (s(), o(F, { key: 0 }, [
                  h(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(F, { key: 1 }, [
                  h(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(F, { key: 2 }, [
                  h(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: r(() => [
        k(pe, {
          variant: "primary",
          onClick: v[0] || (v[0] = (u) => m.$emit("close"))
        }, {
          default: r(() => [...v[3] || (v[3] = [
            h(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), B1 = /* @__PURE__ */ le(U1, [["__scopeId", "data-v-b52f5e32"]]), O1 = { class: "export-warnings" }, A1 = {
  key: 0,
  class: "success-header"
}, F1 = { class: "warning-header" }, V1 = { class: "warning-summary" }, W1 = { class: "warning-title" }, G1 = { class: "models-section" }, j1 = { class: "models-list" }, H1 = { class: "model-info" }, K1 = { class: "model-filename" }, q1 = { class: "model-workflows" }, Y1 = ["onClick"], X1 = /* @__PURE__ */ oe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = w(!1), v = w(null), u = U(() => m.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function f() {
      v.value = null, i("revalidate");
    }
    return (c, g) => (s(), o(F, null, [
      k(at, {
        title: "Export Warnings",
        size: "md",
        onClose: g[3] || (g[3] = (p) => c.$emit("cancel"))
      }, {
        body: r(() => [
          e("div", O1, [
            t.models.length === 0 ? (s(), o("div", A1, [...g[4] || (g[4] = [
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
            ])])) : (s(), o(F, { key: 1 }, [
              e("div", F1, [
                g[6] || (g[6] = e("span", { class: "warning-icon" }, [
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
                e("div", V1, [
                  e("h3", W1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  g[5] || (g[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", G1, [
                e("div", j1, [
                  (s(!0), o(F, null, ae(u.value, (p) => (s(), o("div", {
                    key: p.hash,
                    class: "model-item"
                  }, [
                    e("div", H1, [
                      e("div", K1, a(p.filename), 1),
                      e("div", q1, " Used by: " + a(p.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (y) => v.value = p.hash
                    }, " Add Source ", 8, Y1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !m.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: g[0] || (g[0] = (p) => m.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: r(() => [
          k(pe, {
            variant: "secondary",
            onClick: g[1] || (g[1] = (p) => c.$emit("cancel"))
          }, {
            default: r(() => [...g[7] || (g[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(pe, {
            variant: "primary",
            onClick: g[2] || (g[2] = (p) => c.$emit("confirm"))
          }, {
            default: r(() => [
              h(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      v.value ? (s(), E(Ns, {
        key: 0,
        identifier: v.value,
        onClose: f
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Q1 = /* @__PURE__ */ le(X1, [["__scopeId", "data-v-b698d882"]]), Z1 = { class: "export-card" }, J1 = { class: "export-path-row" }, ey = { class: "export-actions" }, ty = {
  key: 1,
  class: "export-warning"
}, sy = /* @__PURE__ */ oe({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: l, exportEnvWithForce: n } = qe(), i = w(""), m = w(!1), v = w(!1), u = w(!1), f = w(null), c = w(!1), g = w(null), p = w(!1), y = w(!1), b = U(() => m.value ? "Validating..." : v.value ? "Exporting..." : "Export Environment");
    async function _() {
      m.value = !0, f.value = null;
      try {
        const S = await l();
        g.value = S, S.can_export ? S.warnings.models_without_sources.length > 0 ? y.value = !0 : await $() : p.value = !0;
      } catch (S) {
        f.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Validation failed"
        };
      } finally {
        m.value = !1;
      }
    }
    async function T() {
      y.value = !1, await $();
    }
    async function x() {
      try {
        const S = await l();
        g.value = S;
      } catch (S) {
        console.error("Re-validation failed:", S);
      }
    }
    async function $() {
      v.value = !0;
      try {
        const S = await n(i.value || void 0);
        f.value = S;
      } catch (S) {
        f.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Export failed"
        };
      } finally {
        v.value = !1;
      }
    }
    async function C() {
      var S;
      if ((S = f.value) != null && S.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (R) {
          console.error("Failed to copy path:", R);
        }
    }
    async function z() {
      var S;
      if ((S = f.value) != null && S.path) {
        u.value = !0;
        try {
          const R = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!R.ok)
            throw new Error(`Download failed: ${R.statusText}`);
          const G = await R.blob(), V = URL.createObjectURL(G), j = f.value.path.split("/").pop() || "environment-export.tar.gz", M = document.createElement("a");
          M.href = V, M.download = j, document.body.appendChild(M), M.click(), document.body.removeChild(M), URL.revokeObjectURL(V);
        } catch (R) {
          console.error("Failed to download:", R), alert(`Download failed: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (S, R) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (G) => c.value = !0)
          })
        ]),
        content: r(() => [
          k(Fe, { title: "EXPORT OPTIONS" }, {
            default: r(() => [
              e("div", Z1, [
                R[7] || (R[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", J1, [
                  k(ms, {
                    modelValue: i.value,
                    "onUpdate:modelValue": R[1] || (R[1] = (G) => i.value = G),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", ey, [
                  k(ne, {
                    variant: "primary",
                    size: "md",
                    loading: m.value || v.value,
                    disabled: m.value || v.value,
                    onClick: _
                  }, {
                    default: r(() => [
                      R[6] || (R[6] = e("svg", {
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
          f.value ? (s(), E(Fe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: r(() => [
              k(et, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Vt({
                icon: r(() => [
                  h(a(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: r(() => [
                  h(a(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: r(() => [
                  h(a(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: r(() => [
                    k(Ge, { label: "Saved to:" }, {
                      default: r(() => [
                        k(P1, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (s(), E(Ge, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (s(), o("div", ty, [...R[8] || (R[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: r(() => [
                    k(ne, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: z
                    }, {
                      default: r(() => [...R[9] || (R[9] = [
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
                    k(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: r(() => [...R[10] || (R[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(ne, {
                      variant: "ghost",
                      size: "sm",
                      onClick: R[2] || (R[2] = (G) => f.value = null)
                    }, {
                      default: r(() => [...R[11] || (R[11] = [
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
          })) : d("", !0)
        ]),
        _: 1
      }),
      k(ht, {
        show: c.value,
        title: "What Gets Exported",
        onClose: R[3] || (R[3] = (G) => c.value = !1)
      }, {
        content: r(() => [...R[12] || (R[12] = [
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
      p.value && g.value ? (s(), E(B1, {
        key: 0,
        issues: g.value.blocking_issues,
        onClose: R[4] || (R[4] = (G) => p.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      y.value && g.value ? (s(), E(Q1, {
        key: 1,
        models: g.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: R[5] || (R[5] = (G) => y.value = !1),
        onRevalidate: x
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), oy = /* @__PURE__ */ le(sy, [["__scopeId", "data-v-f4d120f2"]]), ny = { class: "file-input-wrapper" }, ay = ["accept", "multiple", "disabled"], ly = /* @__PURE__ */ oe({
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
  setup(t, { expose: l, emit: n }) {
    const i = n, m = w(null);
    function v() {
      var f;
      (f = m.value) == null || f.click();
    }
    function u(f) {
      const c = f.target;
      c.files && c.files.length > 0 && (i("change", c.files), c.value = "");
    }
    return l({
      triggerInput: v
    }), (f, c) => (s(), o("div", ny, [
      e("input", {
        ref_key: "fileInputRef",
        ref: m,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, ay),
      k(ne, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: r(() => [
          Me(f.$slots, "default", {}, () => [
            c[0] || (c[0] = e("svg", {
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
}), iy = /* @__PURE__ */ le(ly, [["__scopeId", "data-v-cd192091"]]), ry = {
  key: 0,
  class: "drop-zone-empty"
}, dy = { class: "drop-zone-text" }, cy = { class: "drop-zone-primary" }, uy = { class: "drop-zone-secondary" }, my = { class: "drop-zone-actions" }, vy = {
  key: 1,
  class: "drop-zone-file"
}, fy = { class: "file-info" }, gy = { class: "file-details" }, py = { class: "file-name" }, hy = { class: "file-size" }, yy = /* @__PURE__ */ oe({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: l }) {
    const n = l, i = w(!1), m = w(null), v = w(0), u = U(() => m.value !== null), f = U(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.name) || "";
    }), c = U(() => {
      if (!m.value) return "";
      const $ = m.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function g($) {
      var C;
      $.stopPropagation(), v.value++, (C = $.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function p($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function y($) {
      $.stopPropagation(), v.value--, v.value === 0 && (i.value = !1);
    }
    function b($) {
      var z;
      $.stopPropagation(), v.value = 0, i.value = !1;
      const C = (z = $.dataTransfer) == null ? void 0 : z.files;
      C && C.length > 0 && T(C[0]);
    }
    function _($) {
      $.length > 0 && T($[0]);
    }
    function T($) {
      m.value = $, n("fileSelected", $);
    }
    function x() {
      m.value = null, n("clear");
    }
    return ($, C) => (s(), o("div", {
      class: fe(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Ve(g, ["prevent"]),
      onDragover: Ve(p, ["prevent"]),
      onDragleave: Ve(y, ["prevent"]),
      onDrop: Ve(b, ["prevent"])
    }, [
      u.value ? (s(), o("div", vy, [
        e("div", fy, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", gy, [
            e("div", py, a(f.value), 1),
            e("div", hy, a(c.value), 1)
          ])
        ]),
        k(ne, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: r(() => [...C[2] || (C[2] = [
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
      ])) : (s(), o("div", ry, [
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
        e("div", dy, [
          e("p", cy, a(t.primaryText), 1),
          e("p", uy, a(t.secondaryText), 1)
        ]),
        e("div", my, [
          k(iy, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: _
          }, {
            default: r(() => [
              h(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), wy = /* @__PURE__ */ le(yy, [["__scopeId", "data-v-0f79cb86"]]), ky = { class: "import-preview" }, _y = { class: "preview-header" }, by = {
  key: 0,
  class: "source-env"
}, $y = { class: "preview-content" }, Cy = { class: "preview-section" }, xy = { class: "section-header" }, Sy = { class: "section-info" }, Iy = { class: "section-count" }, Ey = {
  key: 0,
  class: "item-list"
}, My = { class: "item-name" }, Py = {
  key: 0,
  class: "item-more"
}, Ty = { class: "preview-section" }, Ry = { class: "section-header" }, Ly = { class: "section-info" }, zy = { class: "section-count" }, Dy = {
  key: 0,
  class: "item-list"
}, Ny = { class: "item-details" }, Uy = { class: "item-name" }, By = { class: "item-meta" }, Oy = {
  key: 0,
  class: "item-more"
}, Ay = { class: "preview-section" }, Fy = { class: "section-header" }, Vy = { class: "section-info" }, Wy = { class: "section-count" }, Gy = {
  key: 0,
  class: "item-list"
}, jy = { class: "item-name" }, Hy = {
  key: 0,
  class: "item-more"
}, Ky = {
  key: 0,
  class: "preview-section"
}, qy = { class: "git-info" }, Yy = /* @__PURE__ */ oe({
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
    const l = t, n = U(() => l.workflows.length), i = U(() => l.models.length), m = U(() => l.nodes.length);
    function v(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, f) => (s(), o("div", ky, [
      e("div", _y, [
        k(ct, null, {
          default: r(() => [...f[0] || (f[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", by, [
          f[1] || (f[1] = h(" From: ", -1)),
          k(Ps, null, {
            default: r(() => [
              h(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", $y, [
        e("div", Cy, [
          e("div", xy, [
            f[3] || (f[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Sy, [
              f[2] || (f[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Iy, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Ey, [
            (s(!0), o(F, null, ae(t.workflows.slice(0, t.maxPreviewItems), (c) => (s(), o("div", {
              key: c,
              class: "preview-item"
            }, [
              f[4] || (f[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", My, a(c), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Py, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Ty, [
          e("div", Ry, [
            f[6] || (f[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Ly, [
              f[5] || (f[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", zy, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Dy, [
            (s(!0), o(F, null, ae(t.models.slice(0, t.maxPreviewItems), (c) => (s(), o("div", {
              key: c.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Ny, [
                e("span", Uy, a(c.filename), 1),
                e("span", By, a(v(c.size)) + " • " + a(c.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Oy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Ay, [
          e("div", Fy, [
            f[9] || (f[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Vy, [
              f[8] || (f[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Wy, a(m.value) + " node" + a(m.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Gy, [
            (s(!0), o(F, null, ae(t.nodes.slice(0, t.maxPreviewItems), (c) => (s(), o("div", {
              key: c,
              class: "preview-item"
            }, [
              f[10] || (f[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", jy, a(c), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Hy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Ky, [
          f[11] || (f[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", qy, [
            t.gitBranch ? (s(), E(Ge, {
              key: 0,
              label: "Branch"
            }, {
              default: r(() => [
                k(Ps, null, {
                  default: r(() => [
                    h(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (s(), E(Ge, {
              key: 1,
              label: "Commit"
            }, {
              default: r(() => [
                k(no, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Xy = /* @__PURE__ */ le(Yy, [["__scopeId", "data-v-182fe113"]]), Qy = { class: "import-config" }, Zy = { class: "config-container" }, Jy = { class: "config-field" }, e0 = { class: "input-wrapper" }, t0 = ["value"], s0 = {
  key: 0,
  class: "validating-indicator"
}, o0 = {
  key: 1,
  class: "valid-indicator"
}, n0 = {
  key: 0,
  class: "field-error"
}, a0 = { class: "config-field" }, l0 = { class: "strategy-options" }, i0 = ["value", "checked", "onChange"], r0 = { class: "strategy-content" }, d0 = { class: "strategy-label" }, c0 = { class: "strategy-description" }, u0 = { class: "config-field switch-field" }, m0 = { class: "switch-label" }, v0 = ["checked"], f0 = { class: "advanced-section" }, g0 = { class: "advanced-content" }, p0 = { class: "config-field" }, h0 = ["value"], y0 = ["value"], w0 = /* @__PURE__ */ oe({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(t, { emit: l }) {
    const n = t, i = l, m = w(!1), v = w(!1);
    _t(() => n.nameError, (p) => {
      m.value = !1, v.value = !p && n.name.length > 0;
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
    let f = null;
    function c(p) {
      const y = p.target.value;
      i("update:name", y), v.value = !1, f && clearTimeout(f), y.length > 0 ? (m.value = !0, f = setTimeout(() => {
        i("validate-name", y);
      }, 400)) : m.value = !1;
    }
    function g() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (p, y) => (s(), o("div", Qy, [
      k(ct, null, {
        default: r(() => [...y[2] || (y[2] = [
          h("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Zy, [
        e("div", Jy, [
          k(ds, { required: "" }, {
            default: r(() => [...y[3] || (y[3] = [
              h("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", e0, [
            e("input", {
              type: "text",
              class: fe(["name-input", { error: t.nameError || t.name.length === 0, valid: v.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: c,
              onBlur: g
            }, null, 42, t0),
            m.value ? (s(), o("span", s0, "...")) : v.value ? (s(), o("span", o0, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", n0, a(t.nameError), 1)) : d("", !0),
          y[4] || (y[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", a0, [
          k(ds, null, {
            default: r(() => [...y[5] || (y[5] = [
              h("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", l0, [
            (s(), o(F, null, ae(u, (b) => e("label", {
              key: b.value,
              class: fe(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: (_) => i("update:modelStrategy", b.value)
              }, null, 40, i0),
              e("div", r0, [
                e("span", d0, a(b.label), 1),
                e("span", c0, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", u0, [
          e("label", m0, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: y[0] || (y[0] = (b) => i("update:switchAfterImport", b.target.checked))
            }, null, 40, v0),
            y[6] || (y[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", f0, [
          y[8] || (y[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", g0, [
            e("div", p0, [
              k(ds, null, {
                default: r(() => [...y[7] || (y[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: y[1] || (y[1] = (b) => i("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(F, null, ae($e(Us), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, y0))), 128))
              ], 40, h0)
            ])
          ])
        ])
      ])
    ]));
  }
}), k0 = /* @__PURE__ */ le(w0, [["__scopeId", "data-v-89ea06a1"]]), _0 = { class: "import-flow" }, b0 = {
  key: 0,
  class: "import-empty"
}, $0 = { class: "git-import-section" }, C0 = { class: "git-url-input-row" }, x0 = ["disabled"], S0 = {
  key: 0,
  class: "git-error"
}, I0 = {
  key: 1,
  class: "import-configure"
}, E0 = { class: "selected-file-bar" }, M0 = {
  key: 0,
  class: "file-bar-content"
}, P0 = { class: "file-bar-info" }, T0 = { class: "file-bar-name" }, R0 = { class: "file-bar-size" }, L0 = {
  key: 1,
  class: "file-bar-content"
}, z0 = { class: "file-bar-info" }, D0 = { class: "file-bar-name" }, N0 = {
  key: 0,
  class: "preview-loading"
}, U0 = { class: "import-actions" }, B0 = {
  key: 2,
  class: "import-progress"
}, O0 = { class: "creating-intro" }, A0 = {
  key: 0,
  class: "progress-warning"
}, F0 = {
  key: 1,
  class: "import-error"
}, V0 = { class: "error-message" }, W0 = {
  key: 3,
  class: "import-complete"
}, G0 = { class: "complete-message" }, j0 = { class: "complete-title" }, H0 = { class: "complete-details" }, K0 = { class: "complete-actions" }, q0 = /* @__PURE__ */ oe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: l, emit: n }) {
    var We, me, ye, Ie;
    const i = t, m = n, { previewTarballImport: v, previewGitImport: u, validateEnvironmentName: f, executeImport: c, executeGitImport: g, getImportProgress: p } = qe();
    let y = null;
    const b = w(null), _ = w(i.resumeImport ?? !1), T = w(!1), x = w(!1), $ = w(""), C = w(!1), z = w(null), S = w(""), R = w(null), G = w(!1), V = w(null), j = w(null), M = w({
      name: ((We = i.initialProgress) == null ? void 0 : We.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), L = w(null), O = w({
      message: ((me = i.initialProgress) == null ? void 0 : me.message) ?? "Preparing import...",
      phase: ((ye = i.initialProgress) == null ? void 0 : ye.phase) ?? "",
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
    ], ee = U(() => {
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
    }), Q = U(() => !C.value && !z.value && j.value && M.value.name.length > 0 && !L.value && (b.value || R.value));
    async function ce(Z) {
      b.value = Z, C.value = !0, z.value = null, j.value = null;
      try {
        const ie = await v(Z);
        j.value = ie;
      } catch (ie) {
        z.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        C.value = !1;
      }
    }
    function X() {
      b.value = null, R.value = null, S.value = "", V.value = null, T.value = !1, x.value = !1, $.value = "", j.value = null, z.value = null, M.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, L.value = null, m("source-cleared");
    }
    function D() {
      Se(), X(), _.value = !1, C.value = !1, G.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function N() {
      if (S.value.trim()) {
        G.value = !0, V.value = null;
        try {
          const Z = await u(S.value.trim());
          R.value = S.value.trim(), j.value = Z;
        } catch (Z) {
          V.value = Z instanceof Error ? Z.message : "Failed to analyze repository";
        } finally {
          G.value = !1;
        }
      }
    }
    function P(Z) {
      try {
        const ie = new URL(Z);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return Z;
      }
    }
    async function ue(Z) {
      if (!Z) {
        L.value = "Environment name is required";
        return;
      }
      try {
        const ie = await f(Z);
        L.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        L.value = "Failed to validate name";
      }
    }
    async function J() {
      if (M.value.name && !(!b.value && !R.value)) {
        _.value = !0, T.value = !1, O.value = { message: `Creating environment '${M.value.name}'...`, phase: "", progress: 0, error: null }, m("import-started");
        try {
          let Z;
          if (b.value)
            Z = await c(
              b.value,
              M.value.name,
              M.value.modelStrategy,
              M.value.torchBackend
            );
          else if (R.value)
            Z = await g(
              R.value,
              M.value.name,
              M.value.modelStrategy,
              M.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Z.status === "started" ? he() : (x.value = !1, $.value = Z.message, _.value = !1, T.value = !0);
        } catch (Z) {
          x.value = !1, $.value = Z instanceof Error ? Z.message : "Unknown error occurred during import", _.value = !1, T.value = !0;
        }
      }
    }
    async function he() {
      if (y) return;
      const Z = async () => {
        try {
          const ke = await p();
          return O.value = {
            message: ke.message,
            phase: ke.phase || "",
            progress: ke.progress ?? (ke.state === "importing" ? 50 : 0),
            error: ke.error || null
          }, ke.state === "complete" ? (Se(), x.value = !0, $.value = `Environment '${ke.environment_name}' created successfully`, _.value = !1, T.value = !0, ke.environment_name && m("import-complete", ke.environment_name, M.value.switchAfterImport), !1) : ke.state === "error" ? (Se(), x.value = !1, $.value = ke.error || ke.message, _.value = !1, T.value = !0, !1) : !0;
        } catch (ke) {
          return console.error("Failed to poll import progress:", ke), !0;
        }
      };
      await Z() && (y = setInterval(async () => {
        await Z() || Se();
      }, 2e3));
    }
    function Se() {
      y && (clearInterval(y), y = null);
    }
    function Re(Z) {
      return Z < 1024 ? `${Z} B` : Z < 1024 * 1024 ? `${(Z / 1024).toFixed(1)} KB` : Z < 1024 * 1024 * 1024 ? `${(Z / (1024 * 1024)).toFixed(1)} MB` : `${(Z / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return je(async () => {
      try {
        const Z = await p();
        console.log("[ComfyGit ImportFlow] Import progress check:", Z.state, Z), Z.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Z.environment_name), _.value = !0, M.value.name = Z.environment_name || M.value.name || "", O.value = {
          progress: Z.progress ?? 0,
          message: Z.message || "Importing...",
          phase: Z.phase || "",
          error: null
        }, he());
      } catch (Z) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Z);
      }
    }), l({
      handleReset: D,
      isImporting: _,
      canImport: Q
    }), (Z, ie) => {
      var ke;
      return s(), o("div", _0, [
        !b.value && !R.value && !_.value ? (s(), o("div", b0, [
          k(wy, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ce
          }),
          ie[7] || (ie[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", $0, [
            ie[5] || (ie[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", C0, [
              Ue(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (Ae) => S.value = Ae),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: kt(N, ["enter"]),
                disabled: G.value
              }, null, 40, x0), [
                [Dt, S.value]
              ]),
              k(ne, {
                variant: "primary",
                size: "sm",
                disabled: !S.value.trim() || G.value,
                onClick: N
              }, {
                default: r(() => [
                  h(a(G.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            V.value ? (s(), o("div", S0, a(V.value), 1)) : d("", !0),
            ie[6] || (ie[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (b.value || R.value) && !_.value && !T.value ? (s(), o("div", I0, [
          e("div", E0, [
            b.value ? (s(), o("div", M0, [
              ie[8] || (ie[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", P0, [
                e("div", T0, a(b.value.name), 1),
                e("div", R0, a(Re(b.value.size)), 1)
              ])
            ])) : R.value ? (s(), o("div", L0, [
              ie[10] || (ie[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", z0, [
                e("div", D0, a(P(R.value)), 1),
                ie[9] || (ie[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : d("", !0),
            k(ne, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: r(() => [...ie[11] || (ie[11] = [
                h(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", N0, [...ie[12] || (ie[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : z.value ? (s(), E(vt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [z.value]
          }, null, 8, ["details"])) : j.value ? (s(), E(Xy, {
            key: 2,
            "source-environment": ee.value.sourceEnvironment,
            workflows: ee.value.workflows,
            models: ee.value.models,
            nodes: ee.value.nodes,
            "git-branch": ee.value.gitBranch,
            "git-commit": ee.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
          j.value ? (s(), E(k0, {
            key: 3,
            name: M.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (Ae) => M.value.name = Ae),
            "model-strategy": M.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (Ae) => M.value.modelStrategy = Ae),
            "torch-backend": M.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (Ae) => M.value.torchBackend = Ae),
            "switch-after-import": M.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (Ae) => M.value.switchAfterImport = Ae),
            "name-error": L.value,
            onValidateName: ue
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
          M.value.modelStrategy === "skip" && ((ke = j.value) != null && ke.models_needing_download) ? (s(), E(vt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", U0, [
            k(ne, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: r(() => [...ie[13] || (ie[13] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ne, {
              variant: "primary",
              size: "md",
              disabled: !Q.value,
              onClick: J
            }, {
              default: r(() => [...ie[14] || (ie[14] = [
                h(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : _.value ? (s(), o("div", B0, [
          e("p", O0, [
            ie[15] || (ie[15] = h(" Importing environment ", -1)),
            e("strong", null, a(M.value.name), 1),
            ie[16] || (ie[16] = h("... ", -1))
          ]),
          k(fs, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: de
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? d("", !0) : (s(), o("p", A0, " This may take several minutes. Please wait... ")),
          O.value.error ? (s(), o("div", F0, [
            e("p", V0, a(O.value.error), 1)
          ])) : d("", !0)
        ])) : T.value ? (s(), o("div", W0, [
          e("div", {
            class: fe(["complete-icon", x.value ? "success" : "error"])
          }, a(x.value ? "✓" : "✕"), 3),
          e("div", G0, [
            e("div", j0, a(x.value ? "Import Successful" : "Import Failed"), 1),
            e("div", H0, a($.value), 1)
          ]),
          e("div", K0, [
            k(ne, {
              variant: "primary",
              size: "md",
              onClick: D
            }, {
              default: r(() => [...ie[17] || (ie[17] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), yo = /* @__PURE__ */ le(q0, [["__scopeId", "data-v-72cbc04e"]]), Y0 = /* @__PURE__ */ oe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: l }) {
    const n = l, i = w(!1);
    function m(v, u) {
      u && n("import-complete-switch", v);
    }
    return (v, u) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (f) => i.value = !0)
          })
        ]),
        content: r(() => [
          k(yo, { onImportComplete: m })
        ]),
        _: 1
      }),
      k(ht, {
        show: i.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (f) => i.value = !1)
      }, {
        content: r(() => [...u[2] || (u[2] = [
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
}), X0 = /* @__PURE__ */ le(Y0, [["__scopeId", "data-v-e13bfe76"]]), Q0 = { class: "api-key-card" }, Z0 = { class: "api-key-row" }, J0 = { class: "api-key-input-wrapper" }, ew = ["type", "disabled"], tw = ["title"], sw = { class: "status-icon" }, ow = { class: "status-text" }, nw = {
  key: 0,
  class: "credit-balance"
}, aw = { class: "config-card" }, lw = { class: "config-row" }, iw = ["disabled"], rw = {
  key: 0,
  value: ""
}, dw = ["value", "disabled"], cw = { class: "config-row" }, uw = {
  key: 0,
  class: "loading-inline"
}, mw = { class: "no-volumes-state" }, vw = { class: "no-volumes-text" }, fw = ["value"], gw = { class: "config-row" }, pw = ["disabled"], hw = {
  key: 0,
  value: ""
}, yw = {
  key: 1,
  value: ""
}, ww = {
  key: 2,
  value: ""
}, kw = ["value", "disabled"], _w = { class: "config-row" }, bw = { class: "radio-group" }, $w = { class: "radio-option" }, Cw = { class: "radio-label" }, xw = { class: "radio-option" }, Sw = { class: "radio-label" }, Iw = { class: "config-row" }, Ew = { class: "radio-group" }, Mw = { class: "radio-option" }, Pw = { class: "radio-option" }, Tw = { class: "config-row" }, Rw = { class: "summary-card" }, Lw = {
  key: 0,
  class: "loading-text"
}, zw = { class: "summary-row" }, Dw = { class: "summary-value" }, Nw = { class: "summary-row" }, Uw = { class: "summary-value" }, Bw = { class: "summary-row" }, Ow = { class: "summary-value" }, Aw = {
  key: 0,
  class: "summary-sub-row"
}, Fw = { class: "summary-sub-label" }, Vw = {
  key: 1,
  class: "summary-sub-row warning"
}, Ww = { class: "summary-sub-label" }, Gw = { class: "summary-row" }, jw = { class: "summary-value" }, Hw = { class: "summary-row" }, Kw = { class: "summary-value" }, qw = { class: "deployment-summary" }, Yw = { class: "summary-columns" }, Xw = { class: "summary-column" }, Qw = { class: "pricing-row" }, Zw = { class: "pricing-value" }, Jw = { class: "pricing-row" }, ek = { class: "pricing-value" }, tk = { class: "pricing-row" }, sk = { class: "pricing-value" }, ok = { class: "pricing-row total" }, nk = { class: "pricing-value" }, ak = { class: "summary-column" }, lk = { class: "spec-row" }, ik = { class: "spec-row" }, rk = {
  key: 0,
  class: "spec-row"
}, dk = {
  key: 1,
  class: "spec-row spot-warning"
}, ck = {
  key: 3,
  class: "deploy-actions"
}, uk = { class: "pods-header" }, mk = {
  key: 0,
  class: "loading-text"
}, vk = {
  key: 1,
  class: "empty-state"
}, fk = {
  key: 2,
  class: "pods-list"
}, gk = { class: "pod-header" }, pk = { class: "pod-name" }, hk = { class: "pod-details" }, yk = { class: "pod-gpu" }, wk = { class: "pod-uptime" }, kk = { class: "pod-cost" }, _k = { class: "pod-actions" }, bk = /* @__PURE__ */ oe({
  __name: "DeploySection",
  emits: ["toast"],
  setup(t, { emit: l }) {
    const n = l, {
      getDeploySummary: i,
      getDataCenters: m,
      testRunPodConnection: v,
      getNetworkVolumes: u,
      getRunPodGpuTypes: f,
      deployToRunPod: c,
      getRunPodPods: g,
      terminateRunPodPod: p,
      getStoredRunPodKey: y,
      clearRunPodKey: b
    } = qe(), _ = w(!1), T = w(!1), x = w(""), $ = w(!1), C = w(!1), z = w(null), S = w(null), R = w(""), G = w(""), V = w(""), j = w("SECURE"), M = w("ON_DEMAND"), L = w("my-comfyui-deploy"), O = w([]), de = w(!1), ee = w([]), Q = w(!1), ce = w([]), X = w(!1), D = w(null), N = w(!1), P = w([]), ue = w(!1), J = w(!1), he = w(null), Se = w(null), Re = U(() => ee.value.find((te) => te.id === G.value) || null), We = U(() => R.value ? ee.value.filter((te) => te.data_center_id === R.value) : ee.value), me = U(() => $.value && G.value && V.value && !J.value), ye = (te) => {
      const W = ce.value.find((re) => re.id === V.value);
      return W ? te === "SECURE" ? W.securePrice.toFixed(2) : W.communityPrice.toFixed(2) : "0.00";
    }, Ie = U(() => {
      const te = ce.value.find((K) => K.id === V.value), W = ee.value.find((K) => K.id === G.value);
      if (!te) return null;
      const re = j.value === "SECURE" ? te.securePrice : te.communityPrice, He = M.value === "SPOT" ? re * 0.5 : re, Le = W ? W.size_gb * 14e-5 : 0, ve = 4e-3;
      return {
        gpu: He,
        volume: Le,
        container: ve,
        total: He + Le + ve
      };
    });
    async function Z() {
      if (x.value) {
        C.value = !0, z.value = null;
        try {
          const te = await v(x.value, !0);
          te.status === "success" ? ($.value = !0, S.value = te.credit_balance ?? null, z.value = { type: "success", message: te.message }, await Promise.all([
            ke(),
            Ae(),
            rt(),
            Ee()
          ])) : z.value = { type: "error", message: te.message };
        } catch (te) {
          z.value = {
            type: "error",
            message: te instanceof Error ? te.message : "Connection test failed"
          };
        } finally {
          C.value = !1;
        }
      }
    }
    async function ie() {
      try {
        await b(), x.value = "", $.value = !1, z.value = null, S.value = null, O.value = [], R.value = "", ee.value = [], G.value = "", ce.value = [], V.value = "", D.value = null, P.value = [], n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function ke() {
      de.value = !0;
      try {
        const te = await m();
        O.value = te.data_centers;
        const W = O.value.find((re) => re.available);
        W && (R.value = W.id);
      } catch {
        n("toast", "Failed to load data centers", "error");
      } finally {
        de.value = !1;
      }
    }
    async function Ae() {
      Q.value = !0;
      try {
        const te = await u();
        ee.value = te.volumes, ee.value.length > 0 && (G.value = ee.value[0].id);
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        Q.value = !1;
      }
    }
    async function ot(te) {
      X.value = !0;
      try {
        const W = await f(te);
        ce.value = W.gpu_types;
        const re = ce.value.find((He) => He.available);
        re ? V.value = re.id : V.value = "";
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        X.value = !1;
      }
    }
    _t(R, async (te) => {
      if (!te) return;
      const W = ee.value.find((re) => re.id === G.value);
      W && W.data_center_id !== te && (G.value = ""), await ot(te);
    }), _t(G, async (te) => {
      if (!te) {
        ce.value = [], V.value = "";
        return;
      }
      const W = ee.value.find((re) => re.id === te);
      W && W.data_center_id !== R.value ? R.value = W.data_center_id : W && await ot(W.data_center_id);
    });
    async function rt() {
      N.value = !0;
      try {
        D.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        N.value = !1;
      }
    }
    async function Ee() {
      ue.value = !0;
      try {
        const te = await g();
        P.value = te.pods;
      } catch {
        n("toast", "Failed to load pods", "error");
      } finally {
        ue.value = !1;
      }
    }
    async function nt() {
      if (!(!V.value || !G.value)) {
        J.value = !0, he.value = null;
        try {
          const te = await c({
            gpu_type_id: V.value,
            pod_name: L.value || "my-comfyui-deploy",
            network_volume_id: G.value,
            cloud_type: j.value,
            pricing_type: M.value
          });
          he.value = te, te.status === "success" ? (n("toast", "Deployment started!", "success"), await Ee()) : n("toast", te.message, "error");
        } catch (te) {
          he.value = {
            status: "error",
            message: te instanceof Error ? te.message : "Deployment failed"
          }, n("toast", "Deployment failed", "error");
        } finally {
          J.value = !1;
        }
      }
    }
    async function Je(te) {
      Se.value = te;
      try {
        const W = await p(te);
        W.status === "success" ? (n("toast", "Pod terminated", "success"), await Ee()) : n("toast", W.message, "error");
      } catch {
        n("toast", "Failed to terminate pod", "error");
      } finally {
        Se.value = null;
      }
    }
    function Xe(te) {
      window.open(te, "_blank", "noopener,noreferrer");
    }
    function ut(te) {
      const W = Math.floor(te / 3600), re = Math.floor(te % 3600 / 60);
      return W > 0 ? `${W}h ${re}m` : `${re}m`;
    }
    return je(async () => {
      try {
        const te = await y();
        te.has_key && te.key_preview && (x.value = te.key_preview, await Z());
      } catch {
      }
    }), (te, W) => (s(), o(F, null, [
      k(tt, null, {
        header: r(() => [
          k(st, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (re) => _.value = !0)
          })
        ]),
        content: r(() => [
          k(Fe, { title: "RUNPOD API KEY" }, {
            default: r(() => [
              e("div", Q0, [
                e("div", Z0, [
                  e("div", J0, [
                    Ue(e("input", {
                      "onUpdate:modelValue": W[1] || (W[1] = (re) => x.value = re),
                      type: T.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: $.value
                    }, null, 8, ew), [
                      [To, x.value]
                    ]),
                    e("button", {
                      class: "toggle-visibility-btn",
                      onClick: W[2] || (W[2] = (re) => T.value = !T.value),
                      title: T.value ? "Hide key" : "Show key"
                    }, a(T.value ? "👁" : "👁‍🗨"), 9, tw)
                  ]),
                  $.value ? d("", !0) : (s(), E(ne, {
                    key: 0,
                    variant: "secondary",
                    size: "sm",
                    loading: C.value,
                    disabled: !x.value || C.value,
                    onClick: Z
                  }, {
                    default: r(() => [...W[13] || (W[13] = [
                      h(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  $.value ? (s(), E(ne, {
                    key: 1,
                    variant: "ghost",
                    size: "sm",
                    onClick: ie
                  }, {
                    default: r(() => [...W[14] || (W[14] = [
                      h(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                z.value ? (s(), o("div", {
                  key: 0,
                  class: fe(["connection-status", z.value.type])
                }, [
                  e("span", sw, a(z.value.type === "success" ? "✓" : "✕"), 1),
                  e("span", ow, a(z.value.message), 1),
                  S.value !== null ? (s(), o("span", nw, " $" + a(S.value.toFixed(2)) + " credit ", 1)) : d("", !0)
                ], 2)) : d("", !0),
                W[15] || (W[15] = e("div", { class: "api-key-help" }, [
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
          $.value ? (s(), E(Fe, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: r(() => [
              e("div", aw, [
                e("div", lw, [
                  W[16] || (W[16] = e("label", { class: "config-label" }, "Region", -1)),
                  Ue(e("select", {
                    "onUpdate:modelValue": W[3] || (W[3] = (re) => R.value = re),
                    class: "config-select",
                    disabled: de.value
                  }, [
                    de.value ? (s(), o("option", rw, "Loading...")) : d("", !0),
                    (s(!0), o(F, null, ae(O.value, (re) => (s(), o("option", {
                      key: re.id,
                      value: re.id,
                      disabled: !re.available
                    }, a(re.id) + " (" + a(re.name) + ")" + a(re.available ? "" : " [Unavailable]"), 9, dw))), 128))
                  ], 8, iw), [
                    [It, R.value]
                  ])
                ]),
                e("div", cw, [
                  W[21] || (W[21] = e("label", { class: "config-label" }, "Network Volume", -1)),
                  Q.value ? (s(), o("div", uw, "Loading volumes...")) : We.value.length === 0 ? (s(), o(F, { key: 1 }, [
                    e("div", mw, [
                      W[17] || (W[17] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      e("span", vw, "No volumes in " + a(R.value || "this region"), 1)
                    ]),
                    W[18] || (W[18] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    W[19] || (W[19] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (s(), o(F, { key: 2 }, [
                    Ue(e("select", {
                      "onUpdate:modelValue": W[4] || (W[4] = (re) => G.value = re),
                      class: "config-select"
                    }, [
                      (s(!0), o(F, null, ae(We.value, (re) => (s(), o("option", {
                        key: re.id,
                        value: re.id
                      }, a(re.name) + " (" + a(re.size_gb) + "GB) ", 9, fw))), 128))
                    ], 512), [
                      [It, G.value]
                    ]),
                    W[20] || (W[20] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                e("div", gw, [
                  W[22] || (W[22] = e("label", { class: "config-label" }, "GPU Type", -1)),
                  Ue(e("select", {
                    "onUpdate:modelValue": W[5] || (W[5] = (re) => V.value = re),
                    class: "config-select",
                    disabled: X.value || !G.value
                  }, [
                    G.value ? X.value ? (s(), o("option", yw, "Loading GPUs...")) : ce.value.length === 0 ? (s(), o("option", ww, "No GPUs available in this region")) : d("", !0) : (s(), o("option", hw, "Select a volume first")),
                    (s(!0), o(F, null, ae(ce.value, (re) => (s(), o("option", {
                      key: re.id,
                      value: re.id,
                      disabled: !re.available
                    }, a(re.displayName) + " (" + a(re.memoryInGb) + "GB) - $" + a(j.value === "SECURE" ? re.securePrice.toFixed(2) : re.communityPrice.toFixed(2)) + "/hr " + a(re.available ? "" : " [Unavailable]"), 9, kw))), 128))
                  ], 8, pw), [
                    [It, V.value]
                  ])
                ]),
                e("div", _w, [
                  W[23] || (W[23] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                  e("div", bw, [
                    e("label", $w, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": W[6] || (W[6] = (re) => j.value = re),
                        value: "SECURE"
                      }, null, 512), [
                        [Rt, j.value]
                      ]),
                      e("span", Cw, "Secure ($" + a(ye("SECURE")) + "/hr)", 1)
                    ]),
                    e("label", xw, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": W[7] || (W[7] = (re) => j.value = re),
                        value: "COMMUNITY"
                      }, null, 512), [
                        [Rt, j.value]
                      ]),
                      e("span", Sw, "Community ($" + a(ye("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", Iw, [
                  W[26] || (W[26] = e("label", { class: "config-label" }, [
                    h(" Pricing "),
                    e("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are ~50% cheaper but may be interrupted if capacity is needed. Good for experimentation."
                    }, "ⓘ")
                  ], -1)),
                  e("div", Ew, [
                    e("label", Mw, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": W[8] || (W[8] = (re) => M.value = re),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Rt, M.value]
                      ]),
                      W[24] || (W[24] = e("span", { class: "radio-label" }, "On-Demand", -1))
                    ]),
                    e("label", Pw, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": W[9] || (W[9] = (re) => M.value = re),
                        value: "SPOT"
                      }, null, 512), [
                        [Rt, M.value]
                      ]),
                      W[25] || (W[25] = e("span", { class: "radio-label" }, "Spot (~50% cheaper)", -1))
                    ])
                  ])
                ]),
                e("div", Tw, [
                  W[27] || (W[27] = e("label", { class: "config-label" }, "Pod Name", -1)),
                  Ue(e("input", {
                    "onUpdate:modelValue": W[10] || (W[10] = (re) => L.value = re),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Dt, L.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : d("", !0),
          $.value ? (s(), E(Fe, {
            key: 1,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: r(() => [
              e("div", Rw, [
                N.value ? (s(), o("div", Lw, "Loading environment summary...")) : D.value ? (s(), o(F, { key: 1 }, [
                  e("div", zw, [
                    W[28] || (W[28] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                    e("span", Dw, a(D.value.comfyui_version), 1)
                  ]),
                  e("div", Nw, [
                    W[29] || (W[29] = e("span", { class: "summary-label" }, "Nodes", -1)),
                    e("span", Uw, a(D.value.node_count) + " custom nodes", 1)
                  ]),
                  e("div", Bw, [
                    W[30] || (W[30] = e("span", { class: "summary-label" }, "Models", -1)),
                    e("span", Ow, a(D.value.model_count) + " models", 1)
                  ]),
                  D.value.models_with_sources > 0 ? (s(), o("div", Aw, [
                    e("span", Fw, "└─ " + a(D.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : d("", !0),
                  D.value.models_without_sources > 0 ? (s(), o("div", Vw, [
                    e("span", Ww, "└─ " + a(D.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : d("", !0),
                  e("div", Gw, [
                    W[31] || (W[31] = e("span", { class: "summary-label" }, "Workflows", -1)),
                    e("span", jw, a(D.value.workflow_count) + " committed", 1)
                  ]),
                  e("div", Hw, [
                    W[32] || (W[32] = e("span", { class: "summary-label" }, "Package", -1)),
                    e("span", Kw, "~" + a(D.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : d("", !0)
              ])
            ]),
            _: 1
          })) : d("", !0),
          $.value && Ie.value ? (s(), E(Fe, {
            key: 2,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: r(() => {
              var re, He;
              return [
                e("div", qw, [
                  e("div", Yw, [
                    e("div", Xw, [
                      W[37] || (W[37] = e("div", { class: "column-header" }, "Pricing", -1)),
                      e("div", Qw, [
                        W[33] || (W[33] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                        e("span", Zw, "$" + a(Ie.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      e("div", Jw, [
                        W[34] || (W[34] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                        e("span", ek, "$" + a(Ie.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      e("div", tk, [
                        W[35] || (W[35] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                        e("span", sk, "$" + a(Ie.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      W[38] || (W[38] = e("div", { class: "pricing-divider" }, null, -1)),
                      e("div", ok, [
                        W[36] || (W[36] = e("span", { class: "pricing-label" }, "Total:", -1)),
                        e("span", nk, "~$" + a(Ie.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    e("div", ak, [
                      W[40] || (W[40] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                      e("div", lk, [
                        e("span", null, a(((re = ce.value.find((Le) => Le.id === V.value)) == null ? void 0 : re.displayName) || "GPU") + " (" + a(((He = ce.value.find((Le) => Le.id === V.value)) == null ? void 0 : He.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      e("div", ik, [
                        e("span", null, "Region: " + a(R.value), 1)
                      ]),
                      Re.value ? (s(), o("div", rk, [
                        e("span", null, "Volume: " + a(Re.value.name), 1)
                      ])) : d("", !0),
                      M.value === "SPOT" ? (s(), o("div", dk, [...W[39] || (W[39] = [
                        e("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : d("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : d("", !0),
          $.value ? (s(), o("div", ck, [
            k(ne, {
              variant: "primary",
              size: "md",
              loading: J.value,
              disabled: !me.value,
              onClick: nt
            }, {
              default: r(() => [...W[41] || (W[41] = [
                e("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1),
                h(" Deploy to RunPod ", -1)
              ])]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : d("", !0),
          he.value ? (s(), E(Fe, {
            key: 4,
            title: "DEPLOY STATUS"
          }, {
            default: r(() => [
              k(et, {
                status: he.value.status === "success" ? "synced" : "broken"
              }, Vt({
                icon: r(() => [
                  h(a(he.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: r(() => [
                  h(a(he.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: r(() => [
                  h(a(he.value.message), 1)
                ]),
                actions: r(() => [
                  k(ne, {
                    variant: "ghost",
                    size: "sm",
                    onClick: W[11] || (W[11] = (re) => he.value = null)
                  }, {
                    default: r(() => [...W[42] || (W[42] = [
                      h(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                he.value.pod_id ? {
                  name: "details",
                  fn: r(() => [
                    k(Ge, {
                      label: "Pod ID:",
                      value: he.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : d("", !0),
          $.value ? (s(), E(Fe, {
            key: 5,
            title: "ACTIVE PODS"
          }, {
            default: r(() => [
              e("div", uk, [
                k(ne, {
                  variant: "ghost",
                  size: "sm",
                  loading: ue.value,
                  onClick: Ee
                }, {
                  default: r(() => [...W[43] || (W[43] = [
                    h(" Refresh ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ]),
              ue.value && P.value.length === 0 ? (s(), o("div", mk, " Loading pods... ")) : P.value.length === 0 ? (s(), o("div", vk, [...W[44] || (W[44] = [
                e("span", { class: "empty-icon" }, "○", -1),
                e("span", { class: "empty-text" }, "No active pods", -1)
              ])])) : (s(), o("div", fk, [
                (s(!0), o(F, null, ae(P.value, (re) => (s(), o("div", {
                  key: re.id,
                  class: "pod-card"
                }, [
                  e("div", gk, [
                    e("span", pk, a(re.name), 1),
                    e("span", {
                      class: fe(["pod-status", re.status.toLowerCase()])
                    }, a(re.status === "RUNNING" ? "●" : "○") + " " + a(re.status), 3)
                  ]),
                  e("div", hk, [
                    e("span", yk, a(re.gpu_type), 1),
                    W[45] || (W[45] = e("span", { class: "pod-separator" }, "•", -1)),
                    e("span", wk, a(ut(re.uptime_seconds)), 1),
                    W[46] || (W[46] = e("span", { class: "pod-separator" }, "•", -1)),
                    e("span", kk, "$" + a(re.total_cost.toFixed(2)), 1)
                  ]),
                  e("div", _k, [
                    re.comfyui_url && re.status === "RUNNING" ? (s(), E(ne, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (He) => Xe(re.comfyui_url)
                    }, {
                      default: r(() => [...W[47] || (W[47] = [
                        h(" Open ComfyUI ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    k(ne, {
                      variant: "ghost",
                      size: "sm",
                      loading: Se.value === re.id,
                      onClick: (He) => Je(re.id)
                    }, {
                      default: r(() => [...W[48] || (W[48] = [
                        h(" Terminate ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "onClick"])
                  ])
                ]))), 128))
              ]))
            ]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }),
      k(ht, {
        show: _.value,
        title: "Deploy to Cloud",
        onClose: W[12] || (W[12] = (re) => _.value = !1)
      }, {
        content: r(() => [...W[49] || (W[49] = [
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
      }, 8, ["show"])
    ], 64));
  }
}), $k = /* @__PURE__ */ le(bk, [["__scopeId", "data-v-65514060"]]), Ck = { class: "header-info" }, xk = { class: "commit-hash" }, Sk = {
  key: 0,
  class: "commit-refs"
}, Ik = { class: "commit-message" }, Ek = { class: "commit-date" }, Mk = {
  key: 0,
  class: "loading"
}, Pk = {
  key: 1,
  class: "changes-section"
}, Tk = { class: "stats-row" }, Rk = { class: "stat" }, Lk = { class: "stat insertions" }, zk = { class: "stat deletions" }, Dk = {
  key: 0,
  class: "change-group"
}, Nk = {
  key: 1,
  class: "change-group"
}, Uk = {
  key: 0,
  class: "version"
}, Bk = {
  key: 2,
  class: "change-group"
}, Ok = { class: "change-item" }, Ak = /* @__PURE__ */ oe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const l = t, { getCommitDetail: n } = qe(), i = w(null), m = w(!0), v = U(() => {
      if (!i.value) return !1;
      const f = i.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), u = U(() => {
      if (!i.value) return !1;
      const f = i.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return je(async () => {
      try {
        i.value = await n(l.commit.hash);
      } finally {
        m.value = !1;
      }
    }), (f, c) => (s(), E(at, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (g) => f.$emit("close"))
    }, {
      header: r(() => {
        var g, p, y, b;
        return [
          e("div", Ck, [
            c[4] || (c[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", xk, a(((g = i.value) == null ? void 0 : g.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (b = (y = i.value) == null ? void 0 : y.refs) != null && b.length ? (s(), o("span", Sk, [
              (s(!0), o(F, null, ae(i.value.refs, (_) => (s(), o("span", {
                key: _,
                class: "ref-badge"
              }, a(_), 1))), 128))
            ])) : d("", !0)
          ]),
          k(pe, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (_) => f.$emit("close"))
          }, {
            default: r(() => [...c[5] || (c[5] = [
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
      body: r(() => {
        var g, p;
        return [
          e("div", Ik, a(((g = i.value) == null ? void 0 : g.message) || t.commit.message), 1),
          e("div", Ek, a(((p = i.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          m.value ? (s(), o("div", Mk, "Loading details...")) : i.value ? (s(), o("div", Pk, [
            e("div", Tk, [
              e("span", Rk, a(i.value.stats.files_changed) + " files", 1),
              e("span", Lk, "+" + a(i.value.stats.insertions), 1),
              e("span", zk, "-" + a(i.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", Dk, [
              k(Qt, { variant: "section" }, {
                default: r(() => [...c[6] || (c[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, ae(i.value.changes.workflows.added, (y) => (s(), o("div", {
                key: "add-" + y,
                class: "change-item added"
              }, [
                c[7] || (c[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(y), 1)
              ]))), 128)),
              (s(!0), o(F, null, ae(i.value.changes.workflows.modified, (y) => (s(), o("div", {
                key: "mod-" + y,
                class: "change-item modified"
              }, [
                c[8] || (c[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(y), 1)
              ]))), 128)),
              (s(!0), o(F, null, ae(i.value.changes.workflows.deleted, (y) => (s(), o("div", {
                key: "del-" + y,
                class: "change-item deleted"
              }, [
                c[9] || (c[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(y), 1)
              ]))), 128))
            ])) : d("", !0),
            u.value ? (s(), o("div", Nk, [
              k(Qt, { variant: "section" }, {
                default: r(() => [...c[10] || (c[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, ae(i.value.changes.nodes.added, (y) => (s(), o("div", {
                key: "add-" + y.name,
                class: "change-item added"
              }, [
                c[11] || (c[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(y.name), 1),
                y.version ? (s(), o("span", Uk, "(" + a(y.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(F, null, ae(i.value.changes.nodes.removed, (y) => (s(), o("div", {
                key: "rem-" + y.name,
                class: "change-item deleted"
              }, [
                c[12] || (c[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(y.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", Bk, [
              k(Qt, { variant: "section" }, {
                default: r(() => [...c[13] || (c[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Ok, [
                c[14] || (c[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: r(() => [
        k(pe, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (g) => f.$emit("createBranch", t.commit))
        }, {
          default: r(() => [...c[15] || (c[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(pe, {
          variant: "primary",
          onClick: c[2] || (c[2] = (g) => f.$emit("checkout", t.commit))
        }, {
          default: r(() => [...c[16] || (c[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Fk = /* @__PURE__ */ le(Ak, [["__scopeId", "data-v-d256ff6d"]]), Vk = { class: "base-textarea-wrapper" }, Wk = ["value", "rows", "placeholder", "disabled", "maxlength"], Gk = {
  key: 0,
  class: "base-textarea-count"
}, jk = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l;
    function m(v) {
      v.shiftKey || v.ctrlKey || v.metaKey || n.submitOnEnter && (v.preventDefault(), i("submit"));
    }
    return (v, u) => (s(), o("div", Vk, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (f) => v.$emit("update:modelValue", f.target.value)),
        onKeydown: [
          u[1] || (u[1] = kt(Ve((f) => v.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = kt(Ve((f) => v.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          kt(m, ["enter"])
        ]
      }, null, 40, Wk),
      t.showCharCount && t.maxLength ? (s(), o("div", Gk, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), Qs = /* @__PURE__ */ le(jk, [["__scopeId", "data-v-c6d16c93"]]), Hk = ["checked", "disabled"], Kk = { class: "base-checkbox-box" }, qk = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Yk = {
  key: 0,
  class: "base-checkbox-label"
}, Xk = /* @__PURE__ */ oe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (l, n) => (s(), o("label", {
      class: fe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => l.$emit("update:modelValue", i.target.checked))
      }, null, 40, Hk),
      e("span", Kk, [
        t.modelValue ? (s(), o("svg", qk, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      l.$slots.default ? (s(), o("span", Yk, [
        Me(l.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Zs = /* @__PURE__ */ le(Xk, [["__scopeId", "data-v-bf17c831"]]), Qk = { class: "popover-header" }, Zk = { class: "popover-body" }, Jk = {
  key: 0,
  class: "changes-summary"
}, e_ = {
  key: 0,
  class: "change-item"
}, t_ = {
  key: 1,
  class: "change-item"
}, s_ = {
  key: 2,
  class: "change-item"
}, o_ = {
  key: 3,
  class: "change-item"
}, n_ = {
  key: 4,
  class: "change-item"
}, a_ = {
  key: 5,
  class: "change-item"
}, l_ = {
  key: 1,
  class: "no-changes"
}, i_ = {
  key: 2,
  class: "loading"
}, r_ = {
  key: 3,
  class: "issues-error"
}, d_ = { class: "error-header" }, c_ = { class: "error-title" }, u_ = { class: "issues-list" }, m_ = { class: "message-section" }, v_ = { class: "popover-footer" }, f_ = {
  key: 1,
  class: "commit-popover"
}, g_ = { class: "popover-header" }, p_ = { class: "popover-body" }, h_ = {
  key: 0,
  class: "changes-summary"
}, y_ = {
  key: 0,
  class: "change-item"
}, w_ = {
  key: 1,
  class: "change-item"
}, k_ = {
  key: 2,
  class: "change-item"
}, __ = {
  key: 3,
  class: "change-item"
}, b_ = {
  key: 4,
  class: "change-item"
}, $_ = {
  key: 5,
  class: "change-item"
}, C_ = {
  key: 1,
  class: "no-changes"
}, x_ = {
  key: 2,
  class: "loading"
}, S_ = {
  key: 3,
  class: "issues-error"
}, I_ = { class: "error-header" }, E_ = { class: "error-title" }, M_ = { class: "issues-list" }, P_ = { class: "message-section" }, T_ = { class: "popover-footer" }, R_ = /* @__PURE__ */ oe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: l }) {
    const n = t, i = l, { commit: m } = qe(), v = w(""), u = w(!1), f = w(!1), c = U(() => {
      if (!n.status) return !1;
      const T = n.status.workflows;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || n.status.has_changes;
    }), g = U(() => {
      if (!n.status) return !1;
      const T = n.status.workflows, x = n.status.git_changes;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), p = U(() => {
      var T;
      return (T = n.status) != null && T.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (x) => x.has_issues && (x.sync_state === "new" || x.sync_state === "modified")
      ) : [];
    }), y = U(() => p.value.length > 0), b = U(() => y.value && !f.value);
    async function _() {
      var T, x, $;
      if (!(y.value && !f.value) && !(!c.value || !v.value.trim() || u.value)) {
        u.value = !0;
        try {
          const C = await m(v.value.trim(), f.value);
          if (C.status === "success") {
            const z = `Committed: ${((T = C.summary) == null ? void 0 : T.new) || 0} new, ${((x = C.summary) == null ? void 0 : x.modified) || 0} modified, ${(($ = C.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: z });
          } else C.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : C.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: C.message || "Commit failed" });
        } catch (C) {
          i("committed", { success: !1, message: C instanceof Error ? C.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (T, x) => t.asModal ? (s(), E(Qe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = Ve(() => {
          }, ["stop"]))
        }, [
          e("div", Qk, [
            x[11] || (x[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = ($) => i("close"))
            }, [...x[10] || (x[10] = [
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
          e("div", Zk, [
            t.status && c.value ? (s(), o("div", Jk, [
              t.status.workflows.new.length ? (s(), o("div", e_, [
                x[12] || (x[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", t_, [
                x[13] || (x[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", s_, [
                x[14] || (x[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", o_, [
                x[15] || (x[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", n_, [
                x[16] || (x[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              g.value ? d("", !0) : (s(), o("div", a_, [...x[17] || (x[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", l_, " No changes to commit ")) : (s(), o("div", i_, " Loading... ")),
            y.value ? (s(), o("div", r_, [
              e("div", d_, [
                x[18] || (x[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", c_, a(p.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", u_, [
                (s(!0), o(F, null, ae(p.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  h(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              k(Zs, {
                modelValue: f.value,
                "onUpdate:modelValue": x[1] || (x[1] = ($) => f.value = $),
                class: "allow-issues-toggle"
              }, {
                default: r(() => [...x[19] || (x[19] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", m_, [
              k(Qs, {
                modelValue: v.value,
                "onUpdate:modelValue": x[2] || (x[2] = ($) => v.value = $),
                placeholder: b.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
                disabled: !c.value || u.value || b.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: _,
                onSubmit: _
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", v_, [
            k(pe, {
              variant: "secondary",
              onClick: x[3] || (x[3] = ($) => i("close"))
            }, {
              default: r(() => [...x[20] || (x[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(pe, {
              variant: f.value ? "danger" : "primary",
              disabled: !c.value || !v.value.trim() || u.value || b.value,
              loading: u.value,
              onClick: _
            }, {
              default: r(() => [
                h(a(u.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", f_, [
      e("div", g_, [
        x[22] || (x[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = ($) => i("close"))
        }, [...x[21] || (x[21] = [
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
      e("div", p_, [
        t.status && c.value ? (s(), o("div", h_, [
          t.status.workflows.new.length ? (s(), o("div", y_, [
            x[23] || (x[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", w_, [
            x[24] || (x[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", k_, [
            x[25] || (x[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", __, [
            x[26] || (x[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", b_, [
            x[27] || (x[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          g.value ? d("", !0) : (s(), o("div", $_, [...x[28] || (x[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", C_, " No changes to commit ")) : (s(), o("div", x_, " Loading... ")),
        y.value ? (s(), o("div", S_, [
          e("div", I_, [
            x[29] || (x[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", E_, a(p.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", M_, [
            (s(!0), o(F, null, ae(p.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              h(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          k(Zs, {
            modelValue: f.value,
            "onUpdate:modelValue": x[7] || (x[7] = ($) => f.value = $),
            class: "allow-issues-toggle"
          }, {
            default: r(() => [...x[30] || (x[30] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", P_, [
          k(Qs, {
            modelValue: v.value,
            "onUpdate:modelValue": x[8] || (x[8] = ($) => v.value = $),
            placeholder: b.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
            disabled: !c.value || u.value || b.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: _,
            onSubmit: _
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", T_, [
        k(pe, {
          variant: "secondary",
          onClick: x[9] || (x[9] = ($) => i("close"))
        }, {
          default: r(() => [...x[31] || (x[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(pe, {
          variant: f.value ? "danger" : "primary",
          disabled: !c.value || !v.value.trim() || u.value || b.value,
          loading: u.value,
          onClick: _
        }, {
          default: r(() => [
            h(a(u.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), wo = /* @__PURE__ */ le(R_, [["__scopeId", "data-v-d0fe6172"]]), L_ = { class: "modal-header" }, z_ = { class: "modal-body" }, D_ = { class: "switch-message" }, N_ = { class: "switch-details" }, U_ = { class: "modal-actions" }, B_ = /* @__PURE__ */ oe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (l, n) => (s(), E(Qe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => l.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ve(() => {
          }, ["stop"]))
        }, [
          e("div", L_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => l.$emit("close"))
            }, "✕")
          ]),
          e("div", z_, [
            e("p", D_, [
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
            e("p", N_, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", U_, [
            k(ne, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => l.$emit("close"))
            }, {
              default: r(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ne, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => l.$emit("confirm"))
            }, {
              default: r(() => [...n[12] || (n[12] = [
                h(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), O_ = /* @__PURE__ */ le(B_, [["__scopeId", "data-v-e9c5253e"]]), A_ = {
  key: 0,
  class: "modal-overlay"
}, F_ = { class: "modal-content" }, V_ = { class: "modal-body" }, W_ = { class: "progress-info" }, G_ = { class: "progress-percentage" }, j_ = { class: "progress-state" }, H_ = { class: "switch-steps" }, K_ = { class: "step-icon" }, q_ = { class: "step-label" }, Y_ = /* @__PURE__ */ oe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const l = t, n = U(() => {
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
      return l.message || v[l.state] || l.state;
    }), i = U(() => l.state === "complete" ? "success" : l.state === "critical_failure" || l.state === "rolled_back" ? "error" : "default"), m = U(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = v.findIndex((f) => f.state === l.state);
      return v.map((f, c) => {
        let g = "pending", p = "○";
        return c < u ? (g = "completed", p = "✓") : c === u && (g = "active", p = "⟳"), {
          ...f,
          status: g,
          icon: p
        };
      });
    });
    return (v, u) => (s(), E(Qe, { to: "body" }, [
      t.show ? (s(), o("div", A_, [
        e("div", F_, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", V_, [
            k(ho, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", W_, [
              e("div", G_, a(t.progress) + "%", 1),
              e("div", j_, a(n.value), 1)
            ]),
            e("div", H_, [
              (s(!0), o(F, null, ae(m.value, (f) => (s(), o("div", {
                key: f.state,
                class: fe(["switch-step", f.status])
              }, [
                e("span", K_, a(f.icon), 1),
                e("span", q_, a(f.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), X_ = /* @__PURE__ */ le(Y_, [["__scopeId", "data-v-768a5078"]]), Q_ = { class: "modal-header" }, Z_ = { class: "modal-body" }, J_ = {
  key: 0,
  class: "node-section"
}, eb = { class: "node-list" }, tb = {
  key: 1,
  class: "node-section"
}, sb = { class: "node-list" }, ob = { class: "modal-actions" }, nb = /* @__PURE__ */ oe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (l, n) => (s(), E(Qe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => l.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ve(() => {
          }, ["stop"]))
        }, [
          e("div", Q_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => l.$emit("close"))
            }, "✕")
          ]),
          e("div", Z_, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", J_, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", eb, [
                (s(!0), o(F, null, ae(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", tb, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", sb, [
                (s(!0), o(F, null, ae(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", ob, [
            k(ne, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => l.$emit("close"))
            }, {
              default: r(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ne, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => l.$emit("confirm"))
            }, {
              default: r(() => [...n[11] || (n[11] = [
                h(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), ab = /* @__PURE__ */ le(nb, [["__scopeId", "data-v-7cad7518"]]), lb = [
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
], ib = "v0.0.3", rb = "Akatz", db = { class: "social-buttons" }, cb = ["title", "aria-label", "onClick"], ub = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, mb = ["d"], vb = ["title", "aria-label", "onClick"], fb = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, gb = ["d"], pb = /* @__PURE__ */ oe({
  __name: "SocialButtons",
  setup(t) {
    function l(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", db, [
      (s(!0), o(F, null, ae($e(lb), (m) => (s(), o(F, {
        key: m.id
      }, [
        m.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: m.title,
          "aria-label": m.ariaLabel,
          onClick: (v) => l(m.url)
        }, [
          h(a(m.label) + " ", 1),
          (s(), o("svg", ub, [
            e("path", {
              d: m.iconPath
            }, null, 8, mb)
          ]))
        ], 8, cb)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: m.title,
          "aria-label": m.ariaLabel,
          onClick: (v) => l(m.url)
        }, [
          (s(), o("svg", fb, [
            e("path", {
              d: m.iconPath
            }, null, 8, gb)
          ]))
        ], 8, vb))
      ], 64))), 128))
    ]));
  }
}), ko = /* @__PURE__ */ le(pb, [["__scopeId", "data-v-4f846342"]]), hb = { class: "footer-info" }, yb = { class: "version" }, wb = { class: "made-by" }, kb = /* @__PURE__ */ oe({
  __name: "FooterInfo",
  setup(t) {
    return (l, n) => (s(), o("div", hb, [
      e("span", yb, a($e(ib)), 1),
      e("span", wb, [
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
        h(" by " + a($e(rb)), 1)
      ])
    ]));
  }
}), _o = /* @__PURE__ */ le(kb, [["__scopeId", "data-v-8bc3db0a"]]), _b = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: l }) {
    const n = w(null);
    async function i() {
      var v;
      await ((v = n.value) == null ? void 0 : v.saveSettings());
    }
    function m() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (v, u) => (s(), E(at, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (f) => v.$emit("close"))
    }, {
      body: r(() => [
        k(vo, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: m
        }, null, 8, ["workspace-path"])
      ]),
      footer: r(() => {
        var f;
        return [
          k(pe, {
            variant: "primary",
            disabled: !((f = n.value) != null && f.hasChanges),
            onClick: i
          }, {
            default: r(() => [...u[2] || (u[2] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(pe, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (c) => v.$emit("close"))
          }, {
            default: r(() => [...u[3] || (u[3] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), bb = /* @__PURE__ */ le(_b, [["__scopeId", "data-v-fac00ae7"]]), $b = { class: "header-actions" }, Cb = {
  key: 0,
  class: "wizard-step"
}, xb = { class: "form-field" }, Sb = ["placeholder"], Ib = {
  key: 0,
  class: "form-error"
}, Eb = { class: "form-field form-field--checkbox" }, Mb = { class: "form-checkbox" }, Pb = {
  key: 0,
  class: "form-field"
}, Tb = ["placeholder"], Rb = {
  key: 0,
  class: "form-info"
}, Lb = {
  key: 1,
  class: "form-suggestion"
}, zb = {
  key: 2,
  class: "form-error"
}, Db = {
  key: 3,
  class: "form-info"
}, Nb = {
  key: 1,
  class: "wizard-step"
}, Ub = {
  key: 0,
  class: "progress-check-loading"
}, Bb = {
  key: 0,
  class: "cli-warning"
}, Ob = { class: "cli-warning-header" }, Ab = {
  key: 1,
  class: "env-landing"
}, Fb = { class: "env-list" }, Vb = ["value"], Wb = { class: "env-name" }, Gb = {
  key: 2,
  class: "env-create"
}, jb = { class: "form-field" }, Hb = { class: "form-field" }, Kb = ["value"], qb = { class: "form-field" }, Yb = ["disabled"], Xb = ["value"], Qb = { class: "form-field" }, Zb = ["value"], Jb = { class: "form-field form-field--checkbox" }, e2 = { class: "form-checkbox" }, t2 = {
  key: 0,
  class: "form-error"
}, s2 = {
  key: 1,
  class: "env-creating"
}, o2 = { class: "creating-intro" }, n2 = {
  key: 3,
  class: "env-import"
}, a2 = { class: "wizard-footer" }, l2 = { class: "wizard-footer-actions" }, Bt = 10, i2 = 600 * 1e3, Js = 1800 * 1e3, r2 = /* @__PURE__ */ oe({
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
  setup(t, { emit: l }) {
    const n = t, i = l, {
      initializeWorkspace: m,
      getInitializeProgress: v,
      validatePath: u,
      createEnvironment: f,
      getCreateProgress: c,
      getImportProgress: g,
      getComfyUIReleases: p
    } = qe(), y = w(n.initialStep || 1), b = w(null), _ = w("landing"), T = w(!1), x = w(!1), $ = w(!1), C = w(!1), z = w(null), S = w(n.initialStep === 2), R = w(n.defaultPath), G = w(!!n.detectedModelsDir), V = w(n.detectedModelsDir || ""), j = w(null), M = w(null), L = w(null), O = w(null), de = w("my-new-env"), ee = w(go), Q = w("latest"), ce = w(po), X = w(!0), D = w(null), N = w(null), P = w([{ tag_name: "latest", name: "Latest", published_at: "" }]), ue = w(!1), J = w(!1), he = w(!1), Se = w({ progress: 0, message: "" }), Re = w({ progress: 0, message: "" }), We = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], me = w(0), ye = w(null), Ie = w(0), Z = w(null), ie = U(() => {
      var I, A;
      const ve = (I = R.value) == null ? void 0 : I.trim(), K = !j.value, Y = !G.value || !M.value && ((A = V.value) == null ? void 0 : A.trim());
      return ve && K && Y;
    }), ke = U(() => {
      var ve;
      return (ve = de.value) == null ? void 0 : ve.trim();
    }), Ae = U(() => !!(y.value === 2 || N.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), ot = U(() => N.value || n.workspacePath || null);
    async function rt() {
      var ve;
      if (j.value = null, !!((ve = R.value) != null && ve.trim()))
        try {
          const K = await u({ path: R.value, type: "workspace" });
          K.valid || (j.value = K.error || "Invalid path");
        } catch (K) {
          j.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Ee() {
      var ve;
      if (M.value = null, L.value = null, O.value = null, !!((ve = V.value) != null && ve.trim()))
        try {
          const K = await u({ path: V.value, type: "models" });
          if (K.valid)
            O.value = K.model_count ?? null;
          else if (M.value = K.error || "Invalid path", K.suggestion) {
            L.value = K.suggestion, V.value = K.suggestion, M.value = null;
            const Y = await u({ path: K.suggestion, type: "models" });
            Y.valid && (O.value = Y.model_count ?? null);
          }
        } catch (K) {
          M.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function nt() {
      var ve, K, Y, I, A;
      if (j.value = null, M.value = null, await rt(), (ve = j.value) != null && ve.includes("already exists")) {
        j.value = null, N.value = ((K = R.value) == null ? void 0 : K.trim()) || n.defaultPath, y.value = 2, Xe();
        return;
      }
      if (!j.value && !(G.value && ((Y = V.value) != null && Y.trim()) && (await Ee(), M.value))) {
        J.value = !0;
        try {
          await m({
            workspace_path: ((I = R.value) == null ? void 0 : I.trim()) || n.defaultPath,
            models_directory: G.value && ((A = V.value) == null ? void 0 : A.trim()) || null
          }), me.value = 0, ye.value = Date.now();
          const se = setInterval(async () => {
            var Ce;
            if (ye.value && Date.now() - ye.value > i2) {
              clearInterval(se), J.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ye = await v();
              if (me.value = 0, Ye.state === "idle" && J.value) {
                clearInterval(se), J.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Se.value = { progress: Ye.progress, message: Ye.message }, Ye.state === "complete" ? (clearInterval(se), J.value = !1, N.value = ((Ce = R.value) == null ? void 0 : Ce.trim()) || n.defaultPath, y.value = 2, Xe()) : Ye.state === "error" && (clearInterval(se), J.value = !1, j.value = Ye.error || "Workspace creation failed");
            } catch (Ye) {
              me.value++, console.warn(`Polling failure ${me.value}/${Bt}:`, Ye), me.value >= Bt && (clearInterval(se), J.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (se) {
          J.value = !1, j.value = se instanceof Error ? se.message : "Failed to create workspace";
        }
      }
    }
    async function Je() {
      he.value = !0, D.value = null;
      try {
        const ve = {
          name: de.value.trim() || "my-new-env",
          python_version: ee.value,
          comfyui_version: Q.value,
          torch_backend: ce.value,
          switch_after: X.value,
          workspace_path: N.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await f(ve)).status === "started") {
          Ie.value = 0, Z.value = Date.now();
          const Y = setInterval(async () => {
            if (Z.value && Date.now() - Z.value > Js) {
              clearInterval(Y), he.value = !1, D.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const I = await c();
              if (Ie.value = 0, I.state === "idle" && he.value) {
                clearInterval(Y), he.value = !1, D.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Re.value = {
                progress: I.progress ?? 0,
                message: I.message,
                phase: I.phase
              }, I.state === "complete") {
                clearInterval(Y), he.value = !1;
                const A = I.environment_name || ve.name;
                X.value ? i("complete", A, N.value) : (_.value = "landing", i("environment-created-no-switch", A));
              } else I.state === "error" && (clearInterval(Y), he.value = !1, D.value = I.error || "Environment creation failed");
            } catch (I) {
              Ie.value++, console.warn(`Polling failure ${Ie.value}/${Bt}:`, I), Ie.value >= Bt && (clearInterval(Y), he.value = !1, D.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        he.value = !1, D.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function Xe() {
      ue.value = !0;
      try {
        P.value = await p();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        ue.value = !1;
      }
    }
    function ut() {
      b.value && i("switch-environment", b.value, N.value);
    }
    function te() {
      _.value === "create" || _.value === "import" ? _.value = "landing" : y.value === 2 && n.setupState === "no_workspace" && (y.value = 1);
    }
    function W(ve, K) {
      x.value = !1, K ? i("complete", ve, N.value) : (i("environment-created-no-switch", ve), _.value = "landing");
    }
    function re() {
    }
    je(async () => {
      if (n.detectedModelsDir && (V.value = n.detectedModelsDir), n.workspacePath && (N.value = n.workspacePath), y.value === 2) {
        Xe();
        const ve = setTimeout(() => {
          S.value = !1;
        }, 3e3);
        await He(), clearTimeout(ve), S.value = !1;
      }
    });
    async function He() {
      try {
        const ve = await c();
        if (console.log("[ComfyGit] Create progress check:", ve.state, ve), ve.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ve.environment_name), _.value = "create", he.value = !0, de.value = ve.environment_name || "my-new-env", Re.value = {
            progress: ve.progress ?? 0,
            message: ve.message,
            phase: ve.phase
          }, Le();
          return;
        }
      } catch (ve) {
        console.log("[ComfyGit] Create progress check failed:", ve);
      }
      try {
        const ve = await g();
        console.log("[ComfyGit] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ve.environment_name), z.value = {
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          progress: ve.progress ?? 0,
          environmentName: ve.environment_name || ""
        }, C.value = !0, _.value = "import", x.value = !0);
      } catch (ve) {
        console.log("[ComfyGit] Import progress check failed:", ve);
      }
    }
    async function Le() {
      Ie.value = 0, Z.value = Date.now();
      let ve = null;
      const K = async () => {
        if (Z.value && Date.now() - Z.value > Js)
          return ve && clearInterval(ve), he.value = !1, D.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const I = await c();
          if (Ie.value = 0, I.state === "idle" && he.value)
            return ve && clearInterval(ve), he.value = !1, D.value = "Environment creation was interrupted. Please try again.", !1;
          if (Re.value = {
            progress: I.progress ?? 0,
            message: I.message,
            phase: I.phase
          }, I.state === "complete") {
            ve && clearInterval(ve), he.value = !1;
            const A = I.environment_name || de.value;
            return i("complete", A, N.value), !1;
          } else if (I.state === "error")
            return ve && clearInterval(ve), he.value = !1, D.value = I.error || "Environment creation failed", !1;
          return !0;
        } catch (I) {
          return Ie.value++, console.warn(`Polling failure ${Ie.value}/${Bt}:`, I), Ie.value >= Bt ? (ve && clearInterval(ve), he.value = !1, D.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (ve = setInterval(async () => {
        !await K() && ve && clearInterval(ve);
      }, 2e3));
    }
    return (ve, K) => (s(), o(F, null, [
      k(at, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (Y) => ve.$emit("close"))
      }, {
        header: r(() => [
          K[20] || (K[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", $b, [
            k(ko),
            K[19] || (K[19] = e("span", { class: "header-divider" }, null, -1)),
            Ae.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (Y) => T.value = !0)
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
            ])])) : d("", !0),
            e("button", {
              class: "icon-btn",
              onClick: K[1] || (K[1] = (Y) => ve.$emit("close")),
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
        body: r(() => {
          var Y;
          return [
            y.value === 1 ? (s(), o("div", Cb, [
              K[24] || (K[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", xb, [
                K[21] || (K[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (I) => R.value = I),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, Sb), [
                  [Dt, R.value]
                ]),
                j.value ? (s(), o("p", Ib, a(j.value), 1)) : d("", !0)
              ]),
              e("div", Eb, [
                e("label", Mb, [
                  Ue(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (I) => G.value = I)
                  }, null, 512), [
                    [us, G.value]
                  ]),
                  K[22] || (K[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              G.value ? (s(), o("div", Pb, [
                K[23] || (K[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (I) => V.value = I),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, Tb), [
                  [Dt, V.value]
                ]),
                t.detectedModelsDir && !V.value ? (s(), o("p", Rb, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
                L.value ? (s(), o("p", Lb, " Did you mean: " + a(L.value), 1)) : d("", !0),
                M.value ? (s(), o("p", zb, a(M.value), 1)) : d("", !0),
                O.value !== null && !M.value ? (s(), o("p", Db, " Found " + a(O.value) + " model files ", 1)) : d("", !0)
              ])) : d("", !0),
              J.value ? (s(), E(fs, {
                key: 1,
                progress: Se.value.progress,
                message: Se.value.message
              }, null, 8, ["progress", "message"])) : d("", !0)
            ])) : d("", !0),
            y.value === 2 ? (s(), o("div", Nb, [
              S.value ? (s(), o("div", Ub, [...K[25] || (K[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(F, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", Bb, [
                  e("div", Ob, [
                    K[27] || (K[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (I) => $.value = !0),
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
                ])) : d("", !0),
                _.value === "landing" ? (s(), o("div", Ab, [
                  K[34] || (K[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (I) => _.value = "create")
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
                    onClick: K[7] || (K[7] = (I) => {
                      C.value = !1, _.value = "import";
                    })
                  }, [...K[32] || (K[32] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Y = n.existingEnvironments) != null && Y.length ? (s(), o(F, { key: 0 }, [
                    K[33] || (K[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", Fb, [
                      (s(!0), o(F, null, ae(n.existingEnvironments, (I) => (s(), o("label", {
                        key: I,
                        class: fe(["env-option", { selected: b.value === I }])
                      }, [
                        Ue(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: I,
                          "onUpdate:modelValue": K[8] || (K[8] = (A) => b.value = A)
                        }, null, 8, Vb), [
                          [Rt, b.value]
                        ]),
                        e("span", Wb, a(I), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : d("", !0)
                ])) : _.value === "create" ? (s(), o("div", Gb, [
                  he.value ? (s(), o("div", s2, [
                    e("p", o2, [
                      K[41] || (K[41] = h(" Creating environment ", -1)),
                      e("strong", null, a(de.value), 1),
                      K[42] || (K[42] = h("... ", -1))
                    ]),
                    k(fs, {
                      progress: Re.value.progress,
                      message: Re.value.message,
                      "current-phase": Re.value.phase,
                      "show-steps": !0,
                      steps: We
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(F, { key: 0 }, [
                    K[40] || (K[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", jb, [
                      K[35] || (K[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Ue(e("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (I) => de.value = I),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Dt, de.value]
                      ])
                    ]),
                    e("div", Hb, [
                      K[36] || (K[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (I) => ee.value = I),
                        class: "form-select"
                      }, [
                        (s(!0), o(F, null, ae($e(fo), (I) => (s(), o("option", {
                          key: I,
                          value: I
                        }, a(I), 9, Kb))), 128))
                      ], 512), [
                        [It, ee.value]
                      ])
                    ]),
                    e("div", qb, [
                      K[37] || (K[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (I) => Q.value = I),
                        class: "form-select",
                        disabled: ue.value
                      }, [
                        (s(!0), o(F, null, ae(P.value, (I) => (s(), o("option", {
                          key: I.tag_name,
                          value: I.tag_name
                        }, a(I.name), 9, Xb))), 128))
                      ], 8, Yb), [
                        [It, Q.value]
                      ])
                    ]),
                    e("div", Qb, [
                      K[38] || (K[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (I) => ce.value = I),
                        class: "form-select"
                      }, [
                        (s(!0), o(F, null, ae($e(Us), (I) => (s(), o("option", {
                          key: I,
                          value: I
                        }, a(I) + a(I === "auto" ? " (detect GPU)" : ""), 9, Zb))), 128))
                      ], 512), [
                        [It, ce.value]
                      ])
                    ]),
                    e("div", Jb, [
                      e("label", e2, [
                        Ue(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (I) => X.value = I)
                        }, null, 512), [
                          [us, X.value]
                        ]),
                        K[39] || (K[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    D.value ? (s(), o("div", t2, a(D.value), 1)) : d("", !0)
                  ], 64))
                ])) : _.value === "import" ? (s(), o("div", n2, [
                  k(yo, {
                    "workspace-path": N.value,
                    "resume-import": C.value,
                    "initial-progress": z.value ?? void 0,
                    onImportComplete: W,
                    onImportStarted: K[14] || (K[14] = (I) => x.value = !0),
                    onSourceCleared: re
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : d("", !0)
              ], 64))
            ])) : d("", !0)
          ];
        }),
        footer: r(() => [
          e("div", a2, [
            k(_o),
            e("div", l2, [
              y.value === 1 ? (s(), E(pe, {
                key: 0,
                variant: "primary",
                disabled: !ie.value || J.value,
                onClick: nt
              }, {
                default: r(() => [
                  h(a(J.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y.value === 2 ? (s(), o(F, { key: 1 }, [
                !he.value && !x.value && (_.value !== "landing" || n.setupState === "no_workspace" && !N.value) ? (s(), E(pe, {
                  key: 0,
                  variant: "secondary",
                  onClick: te
                }, {
                  default: r(() => [...K[44] || (K[44] = [
                    h(" Back ", -1)
                  ])]),
                  _: 1
                })) : d("", !0),
                _.value === "create" ? (s(), E(pe, {
                  key: 1,
                  variant: "primary",
                  disabled: !ke.value || he.value,
                  onClick: Je
                }, {
                  default: r(() => [
                    h(a(he.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0),
                _.value === "landing" && b.value ? (s(), E(pe, {
                  key: 2,
                  variant: "primary",
                  onClick: ut
                }, {
                  default: r(() => [
                    h(" Switch to " + a(b.value), 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ], 64)) : d("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      T.value ? (s(), E(bb, {
        key: 0,
        "workspace-path": ot.value,
        onClose: K[16] || (K[16] = (Y) => T.value = !1)
      }, null, 8, ["workspace-path"])) : d("", !0)
    ], 64));
  }
}), d2 = /* @__PURE__ */ le(r2, [["__scopeId", "data-v-9a9aadc0"]]), c2 = { class: "comfygit-panel" }, u2 = { class: "panel-header" }, m2 = { class: "header-left" }, v2 = {
  key: 0,
  class: "header-info"
}, f2 = { class: "header-actions" }, g2 = { class: "env-switcher" }, p2 = {
  key: 0,
  class: "header-info"
}, h2 = { class: "branch-name" }, y2 = { class: "panel-main" }, w2 = { class: "sidebar" }, k2 = { class: "sidebar-content" }, _2 = { class: "sidebar-section" }, b2 = { class: "sidebar-section" }, $2 = { class: "sidebar-section" }, C2 = { class: "sidebar-footer" }, x2 = { class: "content-area" }, S2 = {
  key: 0,
  class: "error-message"
}, I2 = {
  key: 1,
  class: "loading"
}, E2 = { class: "dialog-content env-selector-dialog" }, M2 = { class: "dialog-header" }, P2 = { class: "dialog-body" }, T2 = { class: "env-list" }, R2 = { class: "env-info" }, L2 = { class: "env-name-row" }, z2 = { class: "env-indicator" }, D2 = { class: "env-name" }, N2 = {
  key: 0,
  class: "env-branch"
}, U2 = {
  key: 1,
  class: "current-label"
}, B2 = { class: "env-stats" }, O2 = ["onClick"], A2 = { class: "toast-container" }, F2 = { class: "toast-message" }, V2 = /* @__PURE__ */ oe({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: l }) {
    const n = t, i = l, {
      getStatus: m,
      getHistory: v,
      getBranches: u,
      checkout: f,
      createBranch: c,
      switchBranch: g,
      deleteBranch: p,
      getEnvironments: y,
      switchEnvironment: b,
      getSwitchProgress: _,
      deleteEnvironment: T,
      syncEnvironmentManually: x,
      repairWorkflowModels: $,
      getSetupStatus: C
    } = qe(), z = lo(), S = w(null), R = w([]), G = w([]), V = w([]), j = U(() => V.value.find((H) => H.is_current)), M = w(null), L = w(!1), O = w(1), de = U(() => {
      var H;
      return ((H = M.value) == null ? void 0 : H.state) || "managed";
    }), ee = w(!1), Q = w(null), ce = w(null), X = w(!1), D = w(null), N = w(null), P = w(null), ue = w(!1), J = w(!1), he = w(""), Se = w(null), Re = w({ state: "idle", progress: 0, message: "" });
    let We = null, me = null;
    const ye = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Ie = n.initialView ? ye[n.initialView] : null, Z = w((Ie == null ? void 0 : Ie.view) ?? "status"), ie = w((Ie == null ? void 0 : Ie.section) ?? "this-env");
    function ke(H, B) {
      Z.value = H, ie.value = B;
    }
    function Ae(H) {
      const we = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[H];
      we && ke(we.view, we.section);
    }
    function ot() {
      ke("branches", "this-env");
    }
    function rt() {
      i("close"), setTimeout(() => {
        var B;
        const H = document.querySelectorAll("button.comfyui-button");
        for (const we of H)
          if (((B = we.textContent) == null ? void 0 : B.trim()) === "Manager") {
            we.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Ee = w(null), nt = w(!1), Je = w(!1), Xe = w([]);
    let ut = 0;
    function te(H, B = "info", we = 3e3) {
      const Pe = ++ut;
      return Xe.value.push({ id: Pe, message: H, type: B }), we > 0 && setTimeout(() => {
        Xe.value = Xe.value.filter((Ke) => Ke.id !== Pe);
      }, we), Pe;
    }
    function W(H) {
      Xe.value = Xe.value.filter((B) => B.id !== H);
    }
    function re(H, B) {
      te(H, B);
    }
    const He = U(() => {
      if (!S.value) return "neutral";
      const H = S.value.workflows, B = H.new.length > 0 || H.modified.length > 0 || H.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? B ? "warning" : "success" : "error";
    });
    U(() => S.value ? He.value === "success" ? "All synced" : He.value === "warning" ? "Uncommitted changes" : He.value === "error" ? "Not synced" : "" : "");
    async function Le() {
      ee.value = !0, Q.value = null;
      try {
        const [H, B, we, Pe] = await Promise.all([
          m(!0),
          v(),
          u(),
          y()
        ]);
        S.value = H, R.value = B.commits, G.value = we.branches, V.value = Pe, i("statusUpdate", H), D.value && await D.value.loadWorkflows(!0);
      } catch (H) {
        Q.value = H instanceof Error ? H.message : "Failed to load status", S.value = null, R.value = [], G.value = [];
      } finally {
        ee.value = !1;
      }
    }
    function ve(H) {
      ce.value = H;
    }
    async function K(H) {
      var we;
      ce.value = null;
      const B = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Ee.value = {
        title: B ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: B ? "You have uncommitted changes that will be lost." : `Checkout commit ${H.short_hash || ((we = H.hash) == null ? void 0 : we.slice(0, 7))}?`,
        details: B ? Fs() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: B ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: B,
        onConfirm: async () => {
          var Ze;
          Ee.value = null, Ce();
          const Pe = te(`Checking out ${H.short_hash || ((Ze = H.hash) == null ? void 0 : Ze.slice(0, 7))}...`, "info", 0), Ke = await f(H.hash, B);
          W(Pe), Ke.status === "success" ? te("Restarting ComfyUI...", "success") : te(Ke.message || "Checkout failed", "error");
        }
      };
    }
    async function Y(H) {
      const B = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Ee.value = {
        title: B ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: B ? "You have uncommitted changes." : `Switch to branch "${H}"?`,
        details: B ? Fs() : void 0,
        warning: B ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: B ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ee.value = null, Ce();
          const we = te(`Switching to ${H}...`, "info", 0), Pe = await g(H, B);
          W(we), Pe.status === "success" ? te("Restarting ComfyUI...", "success") : te(Pe.message || "Branch switch failed", "error");
        }
      };
    }
    async function I(H) {
      const B = te(`Creating branch ${H}...`, "info", 0), we = await c(H);
      W(B), we.status === "success" ? (te(`Branch "${H}" created`, "success"), await Le()) : te(we.message || "Failed to create branch", "error");
    }
    async function A(H, B = !1) {
      const we = async (Pe) => {
        var Ze;
        const Ke = te(`Deleting branch ${H}...`, "info", 0);
        try {
          const St = await p(H, Pe);
          W(Ke), St.status === "success" ? (te(`Branch "${H}" deleted`, "success"), await Le()) : (Ze = St.message) != null && Ze.includes("not fully merged") ? Ee.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${H}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ee.value = null, await we(!0);
            }
          } : te(St.message || "Failed to delete branch", "error");
        } catch (St) {
          W(Ke);
          const jt = St instanceof Error ? St.message : "Failed to delete branch";
          jt.includes("not fully merged") ? Ee.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${H}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ee.value = null, await we(!0);
            }
          } : te(jt, "error");
        }
      };
      Ee.value = {
        title: "Delete Branch",
        message: `Delete branch "${H}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ee.value = null, await we(B);
        }
      };
    }
    async function se(H) {
      ce.value = null;
      const B = prompt("Enter branch name:");
      if (B) {
        const we = te(`Creating branch ${B}...`, "info", 0), Pe = await c(B, H.hash);
        W(we), Pe.status === "success" ? (te(`Branch "${B}" created from ${H.short_hash}`, "success"), await Le()) : te(Pe.message || "Failed to create branch", "error");
      }
    }
    function Ce() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ye() {
      Ee.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var H;
          Ee.value = null, Ce(), te("Restarting environment...", "info");
          try {
            (H = window.app) != null && H.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function bt() {
      Ee.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var H;
          Ee.value = null, te("Stopping environment...", "info");
          try {
            (H = window.app) != null && H.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function mt(H, B) {
      X.value = !1, he.value = H, Se.value = B || null, ue.value = !0;
    }
    async function Nt() {
      ue.value = !1, J.value = !0, Ce(), Re.value = {
        progress: 10,
        state: $t(10),
        message: Ut(10)
      };
      try {
        await b(he.value, Se.value || void 0), ys(), ws();
      } catch (H) {
        Ct(), J.value = !1, te(`Failed to initiate switch: ${H instanceof Error ? H.message : "Unknown error"}`, "error"), Re.value = { state: "idle", progress: 0, message: "" }, Se.value = null;
      }
    }
    function $t(H) {
      return H >= 100 ? "complete" : H >= 80 ? "validating" : H >= 60 ? "starting" : H >= 30 ? "syncing" : "preparing";
    }
    function Ut(H) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[$t(H)] || "";
    }
    function ys() {
      if (me) return;
      let H = 10;
      const B = 60, we = 5e3, Pe = 100, Ke = (B - H) / (we / Pe);
      me = window.setInterval(() => {
        if (H += Ke, H >= B && (H = B, Ct()), Re.value.progress < B) {
          const Ze = Math.floor(H);
          Re.value = {
            progress: Ze,
            state: $t(Ze),
            message: Ut(Ze)
          };
        }
      }, Pe);
    }
    function Ct() {
      me && (clearInterval(me), me = null);
    }
    function ws() {
      We || (We = window.setInterval(async () => {
        try {
          let H = await z.getStatus();
          if ((!H || H.state === "idle") && (H = await _()), !H)
            return;
          const B = H.progress || 0;
          B >= 60 && Ct();
          const we = Math.max(B, Re.value.progress), Pe = H.state && H.state !== "idle" && H.state !== "unknown", Ke = Pe ? H.state : $t(we), Ze = Pe && H.message || Ut(we);
          Re.value = {
            state: Ke,
            progress: we,
            message: Ze
          }, H.state === "complete" ? (Ct(), Gt(), J.value = !1, te(`✓ Switched to ${he.value}`, "success"), await Le(), he.value = "") : H.state === "rolled_back" ? (Ct(), Gt(), J.value = !1, te("Switch failed, restored previous environment", "warning"), he.value = "") : H.state === "critical_failure" && (Ct(), Gt(), J.value = !1, te(`Critical error during switch: ${H.message}`, "error"), he.value = "");
        } catch (H) {
          console.error("Failed to poll switch progress:", H);
        }
      }, 1e3));
    }
    function Gt() {
      Ct(), We && (clearInterval(We), We = null);
    }
    function ks() {
      var H;
      ue.value = !1, he.value = "", (H = M.value) != null && H.state && M.value.state !== "managed" && (O.value = M.value.state === "no_workspace" ? 1 : 2, L.value = !0);
    }
    async function _s(H) {
      nt.value = !1, await Le(), te(H.message, H.success ? "success" : "error");
    }
    async function bs() {
      Je.value = !1;
      const H = te("Syncing environment...", "info", 0);
      try {
        const B = await x("skip", !0);
        if (W(H), B.status === "success") {
          const we = [];
          B.nodes_installed.length && we.push(`${B.nodes_installed.length} installed`), B.nodes_removed.length && we.push(`${B.nodes_removed.length} removed`);
          const Pe = we.length ? `: ${we.join(", ")}` : "";
          te(`✓ Environment synced${Pe}`, "success"), await Le();
        } else {
          const we = B.errors.length ? B.errors.join("; ") : B.message;
          te(`Sync failed: ${we}`, "error");
        }
      } catch (B) {
        W(H), te(`Sync error: ${B instanceof Error ? B.message : "Unknown error"}`, "error");
      }
    }
    async function $s(H) {
      var B;
      try {
        const we = await $(H);
        we.failed.length === 0 ? te(`✓ Repaired ${we.success} workflow${we.success === 1 ? "" : "s"}`, "success") : te(`Repaired ${we.success}, failed: ${we.failed.length}`, "warning"), await Le();
      } catch (we) {
        te(`Repair failed: ${we instanceof Error ? we.message : "Unknown error"}`, "error");
      } finally {
        (B = P.value) == null || B.resetRepairingState();
      }
    }
    async function os() {
      var B, we;
      const H = te("Repairing environment...", "info", 0);
      try {
        const Pe = await x("skip", !0);
        if (W(H), Pe.status === "success") {
          const Ke = [];
          Pe.nodes_installed.length && Ke.push(`${Pe.nodes_installed.length} installed`), Pe.nodes_removed.length && Ke.push(`${Pe.nodes_removed.length} removed`);
          const Ze = Ke.length ? `: ${Ke.join(", ")}` : "";
          te(`✓ Environment repaired${Ze}`, "success"), (B = P.value) == null || B.closeDetailModal(), await Le();
        } else {
          const Ke = Pe.errors.length ? Pe.errors.join(", ") : Pe.message || "Unknown error";
          te(`Repair failed: ${Ke}`, "error");
        }
      } catch (Pe) {
        W(H), te(`Repair error: ${Pe instanceof Error ? Pe.message : "Unknown error"}`, "error");
      } finally {
        (we = P.value) == null || we.resetRepairingEnvironmentState();
      }
    }
    async function Cs(H, B) {
      te(`Environment '${H}' created`, "success"), await Le(), N.value && await N.value.loadEnvironments(), B && await mt(H);
    }
    async function xs(H) {
      var B;
      if (((B = j.value) == null ? void 0 : B.name) === H) {
        te("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Ee.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${H}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Ee.value = null;
          try {
            const we = await T(H);
            we.status === "success" ? (te(`Environment "${H}" deleted`, "success"), await Le(), N.value && await N.value.loadEnvironments()) : te(we.message || "Failed to delete environment", "error");
          } catch (we) {
            te(`Error deleting environment: ${we instanceof Error ? we.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function q(H, B) {
      L.value = !1;
      try {
        M.value = await C();
      } catch {
      }
      await mt(H, B);
    }
    function ge() {
      L.value = !1, i("close");
    }
    async function Be(H, B) {
      await mt(H, B);
    }
    async function xt(H) {
      await Le(), await mt(H);
    }
    async function Tt(H) {
      M.value = await C(), console.log(`Environment '${H}' created. Available for switching.`);
    }
    function Io() {
      ke("environments", "all-envs"), setTimeout(() => {
        var H;
        (H = N.value) == null || H.openCreateModal();
      }, 100);
    }
    function Fs() {
      if (!S.value) return [];
      const H = [], B = S.value.workflows;
      return B.new.length && H.push(`${B.new.length} new workflow(s)`), B.modified.length && H.push(`${B.modified.length} modified workflow(s)`), B.deleted.length && H.push(`${B.deleted.length} deleted workflow(s)`), H;
    }
    return je(async () => {
      try {
        if (M.value = await C(), M.value.state === "no_workspace") {
          L.value = !0, O.value = 1;
          return;
        }
        if (M.value.state === "empty_workspace") {
          L.value = !0, O.value = 2;
          return;
        }
        if (M.value.state === "unmanaged") {
          L.value = !0, O.value = 2;
          return;
        }
      } catch (H) {
        console.warn("Setup status check failed, proceeding normally:", H);
      }
      await Le();
    }), (H, B) => {
      var we, Pe, Ke, Ze, St, jt, Vs, Ws, Gs, js, Hs, Ks;
      return s(), o("div", c2, [
        e("div", u2, [
          e("div", m2, [
            B[31] || (B[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (s(), o("div", v2)) : d("", !0)
          ]),
          e("div", f2, [
            k(ko),
            B[34] || (B[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: fe(["icon-btn", { spinning: ee.value }]),
              onClick: Le,
              title: "Refresh"
            }, [...B[32] || (B[32] = [
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
              onClick: B[0] || (B[0] = (xe) => i("close")),
              title: "Close"
            }, [...B[33] || (B[33] = [
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
        e("div", g2, [
          e("div", { class: "env-switcher-header" }, [
            B[35] || (B[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ye
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: bt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: B[1] || (B[1] = (xe) => ke("environments", "all-envs"))
          }, [
            S.value ? (s(), o("div", p2, [
              e("span", null, a(((we = j.value) == null ? void 0 : we.name) || ((Pe = S.value) == null ? void 0 : Pe.environment) || "Loading..."), 1),
              e("span", h2, "(" + a(S.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            B[36] || (B[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", y2, [
          e("div", w2, [
            e("div", k2, [
              e("div", _2, [
                B[37] || (B[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "status" && ie.value === "this-env" }]),
                  onClick: B[2] || (B[2] = (xe) => ke("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "workflows" }]),
                  onClick: B[3] || (B[3] = (xe) => ke("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "models-env" }]),
                  onClick: B[4] || (B[4] = (xe) => ke("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "branches" }]),
                  onClick: B[5] || (B[5] = (xe) => ke("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "history" }]),
                  onClick: B[6] || (B[6] = (xe) => ke("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "nodes" }]),
                  onClick: B[7] || (B[7] = (xe) => ke("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "debug-env" }]),
                  onClick: B[8] || (B[8] = (xe) => ke("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              B[40] || (B[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", b2, [
                B[38] || (B[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "environments" }]),
                  onClick: B[9] || (B[9] = (xe) => ke("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "model-index" }]),
                  onClick: B[10] || (B[10] = (xe) => ke("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "settings" }]),
                  onClick: B[11] || (B[11] = (xe) => ke("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "debug-workspace" }]),
                  onClick: B[12] || (B[12] = (xe) => ke("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              B[41] || (B[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", $2, [
                B[39] || (B[39] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "deploy" }]),
                  onClick: B[13] || (B[13] = (xe) => ke("deploy", "sharing"))
                }, " DEPLOY ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "export" }]),
                  onClick: B[14] || (B[14] = (xe) => ke("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "import" }]),
                  onClick: B[15] || (B[15] = (xe) => ke("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Z.value === "remotes" }]),
                  onClick: B[16] || (B[16] = (xe) => ke("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", C2, [
              k(_o)
            ])
          ]),
          e("div", x2, [
            Q.value ? (s(), o("div", S2, a(Q.value), 1)) : !S.value && Z.value === "status" ? (s(), o("div", I2, " Loading status... ")) : (s(), o(F, { key: 2 }, [
              Z.value === "status" ? (s(), E(dl, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: P,
                status: S.value,
                "setup-state": de.value,
                onSwitchBranch: ot,
                onCommitChanges: B[17] || (B[17] = (xe) => nt.value = !0),
                onSyncEnvironment: B[18] || (B[18] = (xe) => Je.value = !0),
                onViewWorkflows: B[19] || (B[19] = (xe) => ke("workflows", "this-env")),
                onViewHistory: B[20] || (B[20] = (xe) => ke("history", "this-env")),
                onViewDebug: B[21] || (B[21] = (xe) => ke("debug-env", "this-env")),
                onViewNodes: B[22] || (B[22] = (xe) => ke("nodes", "this-env")),
                onRepairMissingModels: $s,
                onRepairEnvironment: os,
                onStartSetup: B[23] || (B[23] = (xe) => L.value = !0),
                onViewEnvironments: B[24] || (B[24] = (xe) => ke("environments", "all-envs")),
                onCreateEnvironment: Io
              }, null, 8, ["status", "setup-state"])) : Z.value === "workflows" ? (s(), E(Nm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: D,
                onRefresh: Le
              }, null, 512)) : Z.value === "models-env" ? (s(), E(yv, {
                key: 2,
                onNavigate: Ae
              })) : Z.value === "branches" ? (s(), E(Cl, {
                key: 3,
                branches: G.value,
                current: ((Ke = S.value) == null ? void 0 : Ke.branch) || null,
                onSwitch: Y,
                onCreate: I,
                onDelete: A
              }, null, 8, ["branches", "current"])) : Z.value === "history" ? (s(), E(Dl, {
                key: 4,
                commits: R.value,
                onSelect: ve,
                onCheckout: K
              }, null, 8, ["commits"])) : Z.value === "nodes" ? (s(), E(gf, {
                key: 5,
                "version-mismatches": ((St = (Ze = S.value) == null ? void 0 : Ze.comparison) == null ? void 0 : St.version_mismatches) || [],
                onOpenNodeManager: rt,
                onRepairEnvironment: os,
                onToast: re
              }, null, 8, ["version-mismatches"])) : Z.value === "debug-env" ? (s(), E(bh, { key: 6 })) : Z.value === "environments" ? (s(), E(x1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: N,
                onSwitch: mt,
                onCreated: Cs,
                onDelete: xs
              }, null, 512)) : Z.value === "model-index" ? (s(), E(Bv, {
                key: 8,
                onRefresh: Le
              })) : Z.value === "settings" ? (s(), E(yh, { key: 9 })) : Z.value === "debug-workspace" ? (s(), E(kh, { key: 10 })) : Z.value === "deploy" ? (s(), E($k, {
                key: 11,
                onToast: re
              })) : Z.value === "export" ? (s(), E(oy, { key: 12 })) : Z.value === "import" ? (s(), E(X0, {
                key: 13,
                onImportCompleteSwitch: xt
              })) : Z.value === "remotes" ? (s(), E(Qp, {
                key: 14,
                onToast: re
              })) : d("", !0)
            ], 64))
          ])
        ]),
        ce.value ? (s(), E(Fk, {
          key: 0,
          commit: ce.value,
          onClose: B[25] || (B[25] = (xe) => ce.value = null),
          onCheckout: K,
          onCreateBranch: se
        }, null, 8, ["commit"])) : d("", !0),
        Ee.value ? (s(), E(uo, {
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
          onCancel: B[26] || (B[26] = (xe) => Ee.value = null),
          onSecondary: Ee.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        k(O_, {
          show: ue.value,
          "from-environment": ((jt = j.value) == null ? void 0 : jt.name) || "unknown",
          "to-environment": he.value,
          onConfirm: Nt,
          onClose: ks
        }, null, 8, ["show", "from-environment", "to-environment"]),
        nt.value && S.value ? (s(), E(wo, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: B[27] || (B[27] = (xe) => nt.value = !1),
          onCommitted: _s
        }, null, 8, ["status"])) : d("", !0),
        Je.value && S.value ? (s(), E(ab, {
          key: 3,
          show: Je.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: bs,
          onClose: B[28] || (B[28] = (xe) => Je.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        k(X_, {
          show: J.value,
          state: Re.value.state,
          progress: Re.value.progress,
          message: Re.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        X.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: B[30] || (B[30] = Ve((xe) => X.value = !1, ["self"]))
        }, [
          e("div", E2, [
            e("div", M2, [
              B[43] || (B[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: B[29] || (B[29] = (xe) => X.value = !1)
              }, [...B[42] || (B[42] = [
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
            e("div", P2, [
              B[44] || (B[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", T2, [
                (s(!0), o(F, null, ae(V.value, (xe) => (s(), o("div", {
                  key: xe.name,
                  class: fe(["env-item", { current: xe.is_current }])
                }, [
                  e("div", R2, [
                    e("div", L2, [
                      e("span", z2, a(xe.is_current ? "●" : "○"), 1),
                      e("span", D2, a(xe.name), 1),
                      xe.current_branch ? (s(), o("span", N2, "(" + a(xe.current_branch) + ")", 1)) : d("", !0),
                      xe.is_current ? (s(), o("span", U2, "CURRENT")) : d("", !0)
                    ]),
                    e("div", B2, a(xe.workflow_count) + " workflows • " + a(xe.node_count) + " nodes ", 1)
                  ]),
                  xe.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (kC) => mt(xe.name)
                  }, " SWITCH ", 8, O2))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        L.value ? (s(), E(d2, {
          key: 5,
          "default-path": ((Vs = M.value) == null ? void 0 : Vs.default_path) || "~/comfygit",
          "detected-models-dir": ((Ws = M.value) == null ? void 0 : Ws.detected_models_dir) || null,
          "initial-step": O.value,
          "existing-environments": ((Gs = M.value) == null ? void 0 : Gs.environments) || [],
          "cli-installed": ((js = M.value) == null ? void 0 : js.cli_installed) ?? !0,
          "setup-state": ((Hs = M.value) == null ? void 0 : Hs.state) || "no_workspace",
          "workspace-path": ((Ks = M.value) == null ? void 0 : Ks.workspace_path) || null,
          onComplete: q,
          onClose: ge,
          onSwitchEnvironment: Be,
          onEnvironmentCreatedNoSwitch: Tt
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : d("", !0),
        e("div", A2, [
          k(Ro, { name: "toast" }, {
            default: r(() => [
              (s(!0), o(F, null, ae(Xe.value, (xe) => (s(), o("div", {
                key: xe.id,
                class: fe(["toast", xe.type])
              }, [
                e("span", F2, a(xe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), W2 = /* @__PURE__ */ le(V2, [["__scopeId", "data-v-70f0bf8a"]]), G2 = { class: "item-header" }, j2 = { class: "item-info" }, H2 = { class: "filename" }, K2 = { class: "metadata" }, q2 = { class: "size" }, Y2 = {
  key: 0,
  class: "type"
}, X2 = { class: "item-actions" }, Q2 = {
  key: 0,
  class: "progress-section"
}, Z2 = { class: "progress-bar" }, J2 = { class: "progress-stats" }, e$ = { class: "downloaded" }, t$ = { class: "speed" }, s$ = {
  key: 0,
  class: "eta"
}, o$ = {
  key: 1,
  class: "status-msg paused"
}, n$ = {
  key: 2,
  class: "status-msg queued"
}, a$ = {
  key: 3,
  class: "status-msg completed"
}, l$ = {
  key: 4,
  class: "status-msg failed"
}, i$ = {
  key: 0,
  class: "retries"
}, r$ = /* @__PURE__ */ oe({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: l }) {
    const n = l;
    function i(u) {
      if (u === 0) return "?";
      const f = u / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function m(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const f = Math.floor(u / 60);
      return f < 60 ? `${f}m` : `${Math.floor(f / 60)}h ${f % 60}m`;
    }
    return (u, f) => (s(), o("div", {
      class: fe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", G2, [
        e("div", j2, [
          e("div", H2, a(t.item.filename), 1),
          e("div", K2, [
            e("span", q2, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", Y2, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", X2, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: f[0] || (f[0] = (c) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: f[1] || (f[1] = (c) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: f[2] || (f[2] = (c) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: f[3] || (f[3] = (c) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Q2, [
        e("div", Z2, [
          e("div", {
            class: "progress-fill",
            style: Et({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", J2, [
          e("span", e$, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", t$, a(m(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", s$, a(v(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", o$, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", n$, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", a$, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", l$, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", i$, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ le(r$, [["__scopeId", "data-v-2110df65"]]), d$ = { class: "queue-title" }, c$ = { class: "count" }, u$ = { class: "queue-actions" }, m$ = { class: "action-label" }, v$ = {
  key: 0,
  class: "overall-progress"
}, f$ = { class: "progress-bar" }, g$ = {
  key: 0,
  class: "current-mini"
}, p$ = { class: "filename" }, h$ = { class: "speed" }, y$ = {
  key: 1,
  class: "queue-content"
}, w$ = {
  key: 0,
  class: "section"
}, k$ = {
  key: 1,
  class: "section"
}, _$ = { class: "section-header" }, b$ = { class: "section-label paused" }, $$ = { class: "items-list" }, C$ = {
  key: 2,
  class: "section"
}, x$ = { class: "section-header" }, S$ = { class: "section-label" }, I$ = { class: "items-list" }, E$ = {
  key: 3,
  class: "section"
}, M$ = { class: "section-header" }, P$ = { class: "section-label" }, T$ = { class: "items-list" }, R$ = {
  key: 4,
  class: "section"
}, L$ = { class: "section-header" }, z$ = { class: "section-label failed" }, D$ = { class: "items-list" }, N$ = /* @__PURE__ */ oe({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: l,
      currentDownload: n,
      queuedItems: i,
      completedItems: m,
      failedItems: v,
      pausedItems: u,
      hasItems: f,
      activeCount: c,
      cancelDownload: g,
      retryDownload: p,
      resumeDownload: y,
      resumeAllPaused: b,
      removeItem: _,
      clearCompleted: T
    } = ts(), x = w(!1);
    let $ = null;
    _t(
      () => ({
        active: c.value,
        failed: v.value.length,
        paused: u.value.length,
        completed: m.value.length
      }),
      (R, G) => {
        $ && (clearTimeout($), $ = null);
        const V = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, j = G && (G.active > 0 || G.paused > 0);
        V && j && ($ = setTimeout(() => {
          T(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = U(() => {
      var V;
      if (l.items.length === 0) return 0;
      const R = m.value.length, G = ((V = n.value) == null ? void 0 : V.progress) || 0;
      return Math.round((R + G / 100) / l.items.length * 100);
    });
    function z(R) {
      g(R);
    }
    function S(R) {
      return R === 0 ? "" : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, G) => (s(), E(Qe, { to: "body" }, [
      $e(f) ? (s(), o("div", {
        key: 0,
        class: fe(["model-download-queue", { minimized: !x.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: G[0] || (G[0] = (V) => x.value = !x.value)
        }, [
          e("div", d$, [
            G[4] || (G[4] = e("span", { class: "icon" }, "↓", -1)),
            G[5] || (G[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", c$, "(" + a($e(c)) + "/" + a($e(l).items.length) + ")", 1)
          ]),
          e("div", u$, [
            e("span", m$, a(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (s(), o("div", y$, [
          $e(n) ? (s(), o("div", w$, [
            G[6] || (G[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(qt, {
              item: $e(n),
              onCancel: G[1] || (G[1] = (V) => z($e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          $e(u).length > 0 ? (s(), o("div", k$, [
            e("div", _$, [
              e("span", b$, "Paused (" + a($e(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: G[2] || (G[2] = //@ts-ignore
                (...V) => $e(b) && $e(b)(...V))
              }, "Resume All")
            ]),
            e("div", $$, [
              (s(!0), o(F, null, ae($e(u), (V) => (s(), E(qt, {
                key: V.id,
                item: V,
                onResume: (j) => $e(y)(V.id),
                onRemove: (j) => $e(_)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          $e(i).length > 0 ? (s(), o("div", C$, [
            e("div", x$, [
              e("span", S$, "Queued (" + a($e(i).length) + ")", 1)
            ]),
            e("div", I$, [
              (s(!0), o(F, null, ae($e(i), (V) => (s(), E(qt, {
                key: V.id,
                item: V,
                onCancel: (j) => z(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          $e(m).length > 0 ? (s(), o("div", E$, [
            e("div", M$, [
              e("span", P$, "Completed (" + a($e(m).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: G[3] || (G[3] = //@ts-ignore
                (...V) => $e(T) && $e(T)(...V))
              }, "Clear")
            ]),
            e("div", T$, [
              (s(!0), o(F, null, ae($e(m).slice(0, 3), (V) => (s(), E(qt, {
                key: V.id,
                item: V,
                onRemove: (j) => $e(_)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          $e(v).length > 0 ? (s(), o("div", R$, [
            e("div", L$, [
              e("span", z$, "Failed (" + a($e(v).length) + ")", 1)
            ]),
            e("div", D$, [
              (s(!0), o(F, null, ae($e(v), (V) => (s(), E(qt, {
                key: V.id,
                item: V,
                onRetry: (j) => $e(p)(V.id),
                onRemove: (j) => $e(_)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", v$, [
          e("div", f$, [
            e("div", {
              class: "progress-fill",
              style: Et({ width: `${C.value}%` })
            }, null, 4)
          ]),
          $e(n) ? (s(), o("div", g$, [
            e("span", p$, a($e(n).filename), 1),
            e("span", h$, a(S($e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), U$ = /* @__PURE__ */ le(N$, [["__scopeId", "data-v-60751cfa"]]), B$ = { class: "mock-control-popover" }, O$ = { class: "popover-header" }, A$ = { class: "popover-content" }, F$ = { class: "section" }, V$ = { class: "preset-buttons" }, W$ = ["onClick"], G$ = { class: "section" }, j$ = { class: "toggle-row" }, H$ = { class: "toggle-label" }, K$ = ["checked"], q$ = { class: "toggle-row" }, Y$ = { class: "toggle-label" }, X$ = ["checked", "disabled"], Q$ = { class: "toggle-row" }, Z$ = { class: "toggle-label" }, J$ = ["checked", "disabled"], eC = { class: "toggle-row" }, tC = { class: "toggle-label" }, sC = ["checked"], oC = { class: "section" }, nC = { class: "state-display" }, aC = /* @__PURE__ */ oe({
  __name: "MockControlPopover",
  emits: ["close"],
  setup(t) {
    const {
      state: l,
      setupState: n,
      setHasWorkspace: i,
      setHasEnvironments: m,
      setIsManaged: v,
      setHasLegacyManager: u,
      setPreset: f
    } = Ds(), c = [
      { value: "no_workspace", label: "No Workspace" },
      { value: "empty_workspace", label: "Empty WS" },
      { value: "unmanaged", label: "Unmanaged" },
      { value: "managed", label: "Managed" }
    ];
    return (g, p) => (s(), o("div", B$, [
      e("div", O$, [
        p[5] || (p[5] = e("span", { class: "popover-title" }, "Mock Controls", -1)),
        e("button", {
          class: "close-btn",
          onClick: p[0] || (p[0] = (y) => g.$emit("close"))
        }, "×")
      ]),
      e("div", A$, [
        e("div", F$, [
          p[6] || (p[6] = e("div", { class: "section-title" }, "QUICK PRESETS", -1)),
          e("div", V$, [
            (s(), o(F, null, ae(c, (y) => e("button", {
              key: y.value,
              class: fe(["preset-btn", { active: $e(n) === y.value }]),
              onClick: (b) => $e(f)(y.value)
            }, a(y.label), 11, W$)), 64))
          ])
        ]),
        e("div", G$, [
          p[11] || (p[11] = e("div", { class: "section-title" }, "STATE TOGGLES", -1)),
          e("div", j$, [
            e("label", H$, [
              e("input", {
                type: "checkbox",
                checked: $e(l).hasWorkspace,
                onChange: p[1] || (p[1] = (y) => $e(i)(y.target.checked))
              }, null, 40, K$),
              p[7] || (p[7] = e("span", null, "Workspace exists", -1))
            ])
          ]),
          e("div", q$, [
            e("label", Y$, [
              e("input", {
                type: "checkbox",
                checked: $e(l).hasEnvironments,
                disabled: !$e(l).hasWorkspace,
                onChange: p[2] || (p[2] = (y) => $e(m)(y.target.checked))
              }, null, 40, X$),
              p[8] || (p[8] = e("span", null, "Has environments", -1))
            ])
          ]),
          e("div", Q$, [
            e("label", Z$, [
              e("input", {
                type: "checkbox",
                checked: $e(l).isManaged,
                disabled: !$e(l).hasEnvironments,
                onChange: p[3] || (p[3] = (y) => $e(v)(y.target.checked))
              }, null, 40, J$),
              p[9] || (p[9] = e("span", null, "Running in managed env", -1))
            ])
          ]),
          e("div", eC, [
            e("label", tC, [
              e("input", {
                type: "checkbox",
                checked: $e(l).hasLegacyManager,
                onChange: p[4] || (p[4] = (y) => $e(u)(y.target.checked))
              }, null, 40, sC),
              p[10] || (p[10] = e("span", null, "Legacy ComfyUI-Manager installed", -1))
            ])
          ])
        ]),
        e("div", oC, [
          p[12] || (p[12] = e("div", { class: "section-title" }, "CURRENT STATE", -1)),
          e("div", nC, [
            e("code", null, a($e(n)), 1)
          ])
        ]),
        p[13] || (p[13] = e("div", { class: "hint" }, " Changes apply on next panel open or status refresh ", -1))
      ])
    ]));
  }
}), lC = /* @__PURE__ */ le(aC, [["__scopeId", "data-v-3255dab3"]]), iC = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', rC = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', dC = {
  comfy: iC,
  phosphor: rC
}, Bs = "comfy", bo = "comfygit-theme";
let Lt = null, $o = Bs;
function cC() {
  try {
    const t = localStorage.getItem(bo);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Bs;
}
function Co(t = Bs) {
  Lt && Lt.remove(), Lt = document.createElement("style"), Lt.id = "comfygit-theme-styles", Lt.setAttribute("data-theme", t), Lt.textContent = dC[t], document.head.appendChild(Lt), document.body.setAttribute("data-comfygit-theme", t), $o = t;
  try {
    localStorage.setItem(bo, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function uC() {
  return $o;
}
function mC(t) {
  Co(t);
}
function vC(t) {
  var v;
  const { ui_id: l, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!l)
    return null;
  const m = i[l];
  return m && m.result === "error" && ((v = m.status) == null ? void 0 : v.status_str) === "error" ? (m.status.messages || [])[0] || "Unknown error" : null;
}
const Os = document.createElement("link");
Os.rel = "stylesheet";
Os.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Os);
const fC = cC();
Co(fC);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), mC(t);
  },
  getTheme: () => {
    const t = uC();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let ft = null, lt = null, Zt = null, Yt = null, eo = null, it = null, Jt = null;
const Ft = w(null);
let As = "managed", xo = !1;
async function cs() {
  var t;
  if (!((t = At) != null && t.api)) return null;
  try {
    const l = await At.api.fetchApi("/v2/comfygit/status");
    l.ok && (Ft.value = await l.json());
  } catch {
  }
}
async function Ts() {
  {
    As = "no_workspace", xo = !0;
    return;
  }
}
function Rs() {
  var l;
  if (As === "managed" || !xo) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((l = n.textContent) == null ? void 0 : l.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function gC() {
  if (!Ft.value) return !1;
  const t = Ft.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ft.value.has_changes;
}
function to(t) {
  ft && ft.remove(), ft = document.createElement("div"), ft.className = "comfygit-panel-overlay";
  const l = document.createElement("div");
  l.className = "comfygit-panel-container", ft.appendChild(l), ft.addEventListener("click", (m) => {
    m.target === ft && Ms();
  });
  const n = (m) => {
    m.key === "Escape" && (Ms(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ps({
    render: () => hs(W2, {
      initialView: t,
      onClose: Ms,
      onStatusUpdate: async (m) => {
        Ft.value = m, es(), await Ts(), Ls(), Rs();
      }
    })
  }).mount(l), document.body.appendChild(ft);
}
function Ms() {
  ft && (ft.remove(), ft = null);
}
function pC(t) {
  Xt(), lt = document.createElement("div"), lt.className = "comfygit-commit-popover-container";
  const l = t.getBoundingClientRect();
  lt.style.position = "fixed", lt.style.top = `${l.bottom + 8}px`, lt.style.right = `${window.innerWidth - l.right}px`, lt.style.zIndex = "10001";
  const n = (m) => {
    lt && !lt.contains(m.target) && m.target !== t && (Xt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (m) => {
    m.key === "Escape" && (Xt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Zt = ps({
    render: () => hs(wo, {
      status: Ft.value,
      onClose: Xt,
      onCommitted: (m) => {
        Xt(), hC(m.success, m.message), cs().then(es);
      }
    })
  }), Zt.mount(lt), document.body.appendChild(lt);
}
function Xt() {
  Zt && (Zt.unmount(), Zt = null), lt && (lt.remove(), lt = null);
}
function hC(t, l) {
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
  const m = document.createElement("span");
  m.textContent = t ? "✓" : "✕", m.style.cssText = `
    color: ${i};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(m);
  const v = document.createElement("span");
  v.textContent = l, n.appendChild(v), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function yC() {
  Yt || (Yt = document.createElement("div"), Yt.className = "comfygit-download-queue-root", eo = ps({
    render: () => hs(U$)
  }), eo.mount(Yt), document.body.appendChild(Yt), console.log("[ComfyGit] Model download queue mounted"));
}
function wC(t) {
  rs(), it = document.createElement("div"), it.className = "comfygit-mock-control-container";
  const l = t.getBoundingClientRect();
  it.style.position = "fixed", it.style.top = `${l.bottom + 8}px`, it.style.right = `${window.innerWidth - l.right}px`, it.style.zIndex = "10001";
  const n = (m) => {
    it && !it.contains(m.target) && m.target !== t && (rs(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (m) => {
    m.key === "Escape" && (rs(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Jt = ps({
    render: () => hs(lC, {
      onClose: rs
    })
  }), Jt.mount(it), document.body.appendChild(it);
}
function rs() {
  Jt && (Jt.unmount(), Jt = null), it && (it.remove(), it = null);
}
let dt = null, zt = null;
function es() {
  if (!dt) return;
  const t = dt.querySelector(".commit-indicator");
  t && (t.style.display = gC() ? "block" : "none");
}
function Ls() {
  if (!dt) return;
  const t = As !== "managed";
  dt.disabled = t, dt.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const So = document.createElement("style");
So.textContent = `
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
document.head.appendChild(So);
At.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var m, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = to, dt = document.createElement("button"), dt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", dt.innerHTML = 'Commit <span class="commit-indicator"></span>', dt.title = "Quick Commit", dt.onclick = () => pC(dt), t.appendChild(l), t.appendChild(dt), zt = document.createElement("button"), zt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-mock-btn", zt.textContent = "Mock", zt.title = "Mock Controls - Simulate different environment states", zt.onclick = () => wC(zt), t.appendChild(zt), console.log("[ComfyGit] Mock mode enabled - Mock Control button added"), (v = (m = At.menu) == null ? void 0 : m.settingsGroup) != null && v.element && (At.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), yC();
    const { loadPendingDownloads: n } = ts();
    n(), await Promise.all([cs(), Ts()]), es(), Ls(), Rs(), setTimeout(Rs, 100), setInterval(async () => {
      await Promise.all([cs(), Ts()]), es(), Ls();
    }, 3e4);
    const i = At.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((p) => {
          (p.startsWith("workflow:") || p.startsWith("Comfy.OpenWorkflowsPaths:") || p.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(p);
        }), window.location.reload();
      }, f = function() {
        const p = document.createElement("div");
        p.style.cssText = `
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
        y.textContent = "Workflows updated - refresh required", p.appendChild(y);
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
        `, b.onmouseover = () => b.style.background = "var(--comfy-input-bg)", b.onmouseout = () => b.style.background = "var(--comfy-menu-bg)", b.onclick = () => u(), p.appendChild(b);
        const _ = document.createElement("button");
        _.textContent = "×", _.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, _.onmouseover = () => _.style.opacity = "1", _.onmouseout = () => _.style.opacity = "0.6", _.onclick = () => p.remove(), p.appendChild(_), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, c = function(p) {
        const y = document.getElementById("comfygit-error-toast");
        y && y.remove();
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
        const _ = document.createElement("span");
        _.textContent = "⚠️", _.style.fontSize = "20px", b.appendChild(_);
        const T = document.createElement("div");
        T.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const x = document.createElement("div");
        x.textContent = "Node installation failed", x.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(x);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", T.appendChild($), b.appendChild(T);
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
          b.remove(), to("debug-env");
        }, b.appendChild(C);
        const z = document.createElement("button");
        z.textContent = "×", z.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, z.onmouseover = () => z.style.opacity = "1", z.onmouseout = () => z.style.opacity = "0.6", z.onclick = () => b.remove(), b.appendChild(z), document.body.appendChild(b), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && b.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: y, workflow_name: b } = p.detail;
        console.log(`[ComfyGit] Workflow ${y}: ${b}`), await cs(), es();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let g = !1;
      i.addEventListener("status", async (p) => {
        const y = p.detail != null;
        y && !g && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : f()), g = y;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (p) => {
        const y = vC(p.detail);
        y && c(y);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
