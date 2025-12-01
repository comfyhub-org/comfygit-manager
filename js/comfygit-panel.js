import { app as bt } from "../../scripts/app.js";
import { defineComponent as Q, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as $e, createBlock as E, resolveDynamicComponent as cs, normalizeClass as ue, withCtx as l, toDisplayString as a, createVNode as b, createTextVNode as y, computed as N, Fragment as A, renderList as se, normalizeStyle as yt, ref as $, onMounted as Ne, watch as _t, Teleport as Ve, withModifiers as ze, Transition as ro, createSlots as Wt, withKeys as ht, reactive as ts, onUnmounted as zs, readonly as co, unref as _e, withDirectives as Ue, vModelText as Tt, vModelRadio as Kt, vModelCheckbox as Xt, nextTick as uo, vModelSelect as Rt, createStaticVNode as mo, TransitionGroup as vo, createApp as us, h as ms } from "vue";
const fo = { class: "panel-layout" }, go = {
  key: 0,
  class: "panel-layout-header"
}, po = {
  key: 1,
  class: "panel-layout-search"
}, ho = { class: "panel-layout-content" }, yo = {
  key: 2,
  class: "panel-layout-footer"
}, wo = /* @__PURE__ */ Q({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", fo, [
      c.$slots.header ? (s(), o("div", go, [
        $e(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (s(), o("div", po, [
        $e(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", ho, [
        $e(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", yo, [
        $e(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Z = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, p] of c)
    n[i] = p;
  return n;
}, Ke = /* @__PURE__ */ Z(wo, [["__scopeId", "data-v-21565df9"]]), ko = {
  key: 0,
  class: "panel-title-prefix"
}, bo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, _o = /* @__PURE__ */ Q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), E(cs(`h${t.level}`), {
      class: ue(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", ko, a(t.prefix), 1)) : (s(), o("span", bo)),
        $e(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $o = /* @__PURE__ */ Z(_o, [["__scopeId", "data-v-c3875efc"]]), Co = ["title"], xo = ["width", "height"], So = /* @__PURE__ */ Q({
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
      ])], 8, xo))
    ], 8, Co));
  }
}), Ls = /* @__PURE__ */ Z(So, [["__scopeId", "data-v-6fc7f16d"]]), Io = { class: "header-left" }, Eo = {
  key: 0,
  class: "header-actions"
}, Mo = /* @__PURE__ */ Q({
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
      class: ue(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Io, [
        b($o, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(Ls, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Eo, [
        $e(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ Z(Mo, [["__scopeId", "data-v-55a62cd6"]]), To = {
  key: 0,
  class: "section-title-count"
}, Ro = {
  key: 1,
  class: "section-title-icon"
}, zo = /* @__PURE__ */ Q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), E(cs(`h${t.level}`), {
      class: ue(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        $e(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", To, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", Ro, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ot = /* @__PURE__ */ Z(zo, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, Po = { class: "status-grid__columns" }, Do = { class: "status-grid__column" }, No = { class: "status-grid__title" }, Uo = { class: "status-grid__column status-grid__column--right" }, Oo = { class: "status-grid__title" }, Bo = {
  key: 0,
  class: "status-grid__footer"
}, Fo = /* @__PURE__ */ Q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Lo, [
      e("div", Po, [
        e("div", Do, [
          e("h4", No, a(t.leftTitle), 1),
          $e(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Uo, [
          e("h4", Oo, a(t.rightTitle), 1),
          $e(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Bo, [
        $e(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Ao = /* @__PURE__ */ Z(Fo, [["__scopeId", "data-v-73b7ba3f"]]), Vo = {
  key: 0,
  class: "status-item__icon"
}, Wo = {
  key: 1,
  class: "status-item__count"
}, Go = { class: "status-item__label" }, jo = /* @__PURE__ */ Q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = N(() => `status-item--${c.variant}`);
    return (i, p) => (s(), o("div", {
      class: ue(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Vo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Wo, a(t.count), 1)) : d("", !0),
      e("span", Go, a(t.label), 1)
    ], 2));
  }
}), ct = /* @__PURE__ */ Z(jo, [["__scopeId", "data-v-6f929183"]]), qo = { class: "issue-card__header" }, Ho = { class: "issue-card__icon" }, Ko = { class: "issue-card__title" }, Jo = {
  key: 0,
  class: "issue-card__content"
}, Yo = {
  key: 0,
  class: "issue-card__description"
}, Xo = {
  key: 1,
  class: "issue-card__items"
}, Qo = {
  key: 2,
  class: "issue-card__actions"
}, Zo = /* @__PURE__ */ Q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = N(() => `issue-card--${c.severity}`);
    return (i, p) => (s(), o("div", {
      class: ue(["issue-card", n.value])
    }, [
      e("div", qo, [
        e("span", Ho, a(t.icon), 1),
        e("h4", Ko, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Jo, [
        t.description ? (s(), o("p", Yo, a(t.description), 1)) : d("", !0),
        $e(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Xo, [
        (s(!0), o(A, null, se(t.items, (g, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", Qo, [
        $e(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ Z(Zo, [["__scopeId", "data-v-df6aa348"]]), en = ["type", "disabled"], tn = {
  key: 0,
  class: "spinner"
}, sn = /* @__PURE__ */ Q({
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
      class: ue(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", tn)) : d("", !0),
      t.loading ? d("", !0) : $e(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, en));
  }
}), oe = /* @__PURE__ */ Z(sn, [["__scopeId", "data-v-772abe47"]]), on = { class: "empty-state" }, nn = {
  key: 0,
  class: "empty-icon"
}, an = { class: "empty-message" }, ln = /* @__PURE__ */ Q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", on, [
      t.icon ? (s(), o("div", nn, a(t.icon), 1)) : d("", !0),
      e("p", an, a(t.message), 1),
      t.actionLabel ? (s(), E(oe, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("action"))
      }, {
        default: l(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), dt = /* @__PURE__ */ Z(ln, [["__scopeId", "data-v-4466284f"]]), rn = /* @__PURE__ */ Q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: ue(["detail-label"]),
      style: yt({ minWidth: t.minWidth })
    }, [
      $e(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Jt = /* @__PURE__ */ Z(rn, [["__scopeId", "data-v-75e9eeb8"]]), dn = /* @__PURE__ */ Q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: ue(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      $e(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ls = /* @__PURE__ */ Z(dn, [["__scopeId", "data-v-2f186e4c"]]), cn = { class: "detail-row" }, un = /* @__PURE__ */ Q({
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
    return (c, n) => (s(), o("div", cn, [
      b(Jt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), E(ls, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : $e(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), De = /* @__PURE__ */ Z(un, [["__scopeId", "data-v-ef15664a"]]), mn = { class: "modal-header" }, vn = { class: "modal-body" }, fn = { class: "status-section" }, gn = {
  key: 0,
  class: "status-section"
}, pn = { class: "section-header-row" }, hn = {
  key: 0,
  class: "workflow-group"
}, yn = { class: "workflow-group-header" }, wn = { class: "workflow-group-title" }, kn = { class: "workflow-list" }, bn = { class: "workflow-name" }, _n = { class: "workflow-issue" }, $n = {
  key: 1,
  class: "workflow-group"
}, Cn = { class: "workflow-group-header" }, xn = { class: "workflow-group-title" }, Sn = { class: "workflow-list" }, In = { class: "workflow-name" }, En = { class: "workflow-issue" }, Mn = {
  key: 2,
  class: "workflow-group"
}, Tn = { class: "workflow-group-header" }, Rn = { class: "workflow-group-title" }, zn = { class: "workflow-list" }, Ln = { class: "workflow-name" }, Pn = {
  key: 3,
  class: "workflow-group"
}, Dn = { class: "workflow-group-header" }, Nn = { class: "workflow-group-title" }, Un = { class: "workflow-list" }, On = { class: "workflow-name" }, Bn = {
  key: 4,
  class: "workflow-group"
}, Fn = { class: "workflow-group-header" }, An = { class: "workflow-group-title" }, Vn = { class: "workflow-list" }, Wn = { class: "workflow-name" }, Gn = {
  key: 5,
  class: "workflow-group"
}, jn = { class: "workflow-group-title" }, qn = { class: "expand-icon" }, Hn = {
  key: 0,
  class: "workflow-list"
}, Kn = { class: "workflow-name" }, Jn = {
  key: 1,
  class: "status-section"
}, Yn = {
  key: 0,
  class: "change-group"
}, Xn = { class: "change-group-header" }, Qn = { class: "change-group-title" }, Zn = { class: "change-list" }, ea = { class: "node-name" }, ta = {
  key: 0,
  class: "dev-badge"
}, sa = {
  key: 1,
  class: "change-group"
}, oa = { class: "change-group-header" }, na = { class: "change-group-title" }, aa = { class: "change-list" }, la = { class: "node-name" }, ia = {
  key: 0,
  class: "dev-badge"
}, ra = {
  key: 2,
  class: "change-group"
}, da = { class: "change-list" }, ca = { class: "change-item" }, ua = { class: "node-name" }, ma = {
  key: 3,
  class: "change-group"
}, va = {
  key: 2,
  class: "status-section"
}, fa = { class: "section-header-row" }, ga = {
  key: 0,
  class: "drift-item"
}, pa = { class: "drift-list" }, ha = {
  key: 0,
  class: "drift-list-more"
}, ya = {
  key: 1,
  class: "drift-item"
}, wa = { class: "drift-list" }, ka = {
  key: 0,
  class: "drift-list-more"
}, ba = {
  key: 2,
  class: "drift-item"
}, _a = { class: "drift-list" }, $a = { class: "version-actual" }, Ca = { class: "version-expected" }, xa = {
  key: 0,
  class: "drift-list-more"
}, Sa = {
  key: 3,
  class: "drift-item"
}, Ia = { class: "repair-action" }, Ea = {
  key: 3,
  class: "status-section"
}, Ma = { class: "info-box" }, Ta = { class: "drift-list" }, Ra = {
  key: 0,
  class: "drift-list-more"
}, za = {
  key: 4,
  class: "status-section"
}, La = { class: "warning-box" }, Pa = {
  key: 5,
  class: "empty-state-inline"
}, Da = { class: "modal-actions" }, Na = /* @__PURE__ */ Q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = $(!1);
    Ne(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), _t(() => c.show, (_, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", _);
    }, { immediate: !0 });
    const i = N(() => {
      var _, k, T;
      return ((T = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : T.filter(
        (F) => F.status === "broken" && F.sync_state === "synced"
      )) || [];
    }), p = N(() => {
      var _, k, T;
      return ((T = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : T.filter(
        (F) => F.status === "broken" && F.sync_state !== "synced"
      )) || [];
    }), g = N(() => {
      var _, k, T;
      return ((T = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.synced) == null ? void 0 : T.filter((F) => {
        var C, L, I;
        const f = (I = (L = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : L.analyzed) == null ? void 0 : I.find((x) => x.name === F);
        return !f || f.status !== "broken";
      })) || [];
    }), u = N(() => {
      var _, k, T, F, f;
      return (_ = c.status) != null && _.workflows ? (((k = c.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((T = c.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((F = c.status.workflows.deleted) == null ? void 0 : F.length) ?? 0) > 0 || (((f = c.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), v = N(() => {
      var k, T, F;
      const _ = (k = c.status) == null ? void 0 : k.git_changes;
      return _ ? (((T = _.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((F = _.nodes_removed) == null ? void 0 : F.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), r = N(() => {
      var _, k, T, F, f, C;
      return !u.value && !v.value && ((k = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : k.is_synced) && (((T = c.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((C = (f = (F = c.status) == null ? void 0 : F.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), m = N(() => {
      var k, T;
      const _ = (T = (k = c.status) == null ? void 0 : k.git_changes) == null ? void 0 : T.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function h(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function w(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, k) => {
      var T, F, f, C, L, I, x, K, B, W, P, M, O, ae, X, H, de, J, D, z, S, ie;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[7] || (k[7] = (ne) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[6] || (k[6] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", mn, [
              k[8] || (k[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (ne) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", vn, [
              e("div", fn, [
                b(ot, { level: "4" }, {
                  default: l(() => [...k[9] || (k[9] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(De, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", gn, [
                e("div", pn, [
                  b(ot, { level: "4" }, {
                    default: l(() => [...k[10] || (k[10] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[1] || (k[1] = (ne) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", hn, [
                  e("div", yn, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", wn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (s(!0), o(A, null, se(i.value, (ne) => (s(), o("div", {
                      key: ne.name,
                      class: "workflow-item"
                    }, [
                      e("span", bn, a(ne.name), 1),
                      e("span", _n, a(ne.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                p.value.length ? (s(), o("div", $n, [
                  e("div", Cn, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", xn, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", Sn, [
                    (s(!0), o(A, null, se(p.value, (ne) => (s(), o("div", {
                      key: ne.name,
                      class: "workflow-item"
                    }, [
                      e("span", In, a(ne.name), 1),
                      e("span", En, a(ne.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (F = (T = t.status.workflows) == null ? void 0 : T.new) != null && F.length ? (s(), o("div", Mn, [
                  e("div", Tn, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Rn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", zn, [
                    (s(!0), o(A, null, se(t.status.workflows.new, (ne) => (s(), o("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", Ln, a(ne), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (C = (f = t.status.workflows) == null ? void 0 : f.modified) != null && C.length ? (s(), o("div", Pn, [
                  e("div", Dn, [
                    k[14] || (k[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Nn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Un, [
                    (s(!0), o(A, null, se(t.status.workflows.modified, (ne) => (s(), o("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", On, a(ne), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (I = (L = t.status.workflows) == null ? void 0 : L.deleted) != null && I.length ? (s(), o("div", Bn, [
                  e("div", Fn, [
                    k[15] || (k[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", An, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Vn, [
                    (s(!0), o(A, null, se(t.status.workflows.deleted, (ne) => (s(), o("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", Wn, a(ne), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", Gn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[2] || (k[2] = (ne) => n.value = !n.value)
                  }, [
                    k[16] || (k[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", jn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", qn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", Hn, [
                    (s(!0), o(A, null, se(g.value, (ne) => (s(), o("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(ne), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              v.value ? (s(), o("div", Jn, [
                b(ot, { level: "4" }, {
                  default: l(() => [...k[17] || (k[17] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (K = (x = t.status.git_changes) == null ? void 0 : x.nodes_added) != null && K.length ? (s(), o("div", Yn, [
                  e("div", Xn, [
                    k[18] || (k[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Qn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Zn, [
                    (s(!0), o(A, null, se(t.status.git_changes.nodes_added, (ne) => (s(), o("div", {
                      key: h(ne),
                      class: "change-item"
                    }, [
                      e("span", ea, a(h(ne)), 1),
                      w(ne) ? (s(), o("span", ta, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (W = (B = t.status.git_changes) == null ? void 0 : B.nodes_removed) != null && W.length ? (s(), o("div", sa, [
                  e("div", oa, [
                    k[19] || (k[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", na, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", aa, [
                    (s(!0), o(A, null, se(t.status.git_changes.nodes_removed, (ne) => (s(), o("div", {
                      key: h(ne),
                      class: "change-item"
                    }, [
                      e("span", la, a(h(ne)), 1),
                      w(ne) ? (s(), o("span", ia, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (P = t.status.git_changes) != null && P.workflow_changes ? (s(), o("div", ra, [
                  k[20] || (k[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", da, [
                    e("div", ca, [
                      e("span", ua, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (s(), o("div", ma, [...k[21] || (k[21] = [
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
              (O = t.status.comparison) != null && O.is_synced ? d("", !0) : (s(), o("div", va, [
                e("div", fa, [
                  b(ot, { level: "4" }, {
                    default: l(() => [...k[22] || (k[22] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[3] || (k[3] = (ne) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                k[26] || (k[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (X = (ae = t.status.comparison) == null ? void 0 : ae.missing_nodes) != null && X.length ? (s(), o("div", ga, [
                  b(De, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", pa, [
                    (s(!0), o(A, null, se(t.status.comparison.missing_nodes.slice(0, 10), (ne) => (s(), o("div", {
                      key: ne,
                      class: "drift-list-item"
                    }, " - " + a(ne), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ha, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (de = (H = t.status.comparison) == null ? void 0 : H.extra_nodes) != null && de.length ? (s(), o("div", ya, [
                  b(De, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", wa, [
                    (s(!0), o(A, null, se(t.status.comparison.extra_nodes.slice(0, 10), (ne) => (s(), o("div", {
                      key: ne,
                      class: "drift-list-item"
                    }, " - " + a(ne), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ka, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (D = (J = t.status.comparison) == null ? void 0 : J.version_mismatches) != null && D.length ? (s(), o("div", ba, [
                  b(De, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", _a, [
                    (s(!0), o(A, null, se(t.status.comparison.version_mismatches.slice(0, 10), (ne) => (s(), o("div", {
                      key: ne.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      y(a(ne.name) + ": ", 1),
                      e("span", $a, a(ne.actual), 1),
                      k[23] || (k[23] = y(" → ", -1)),
                      e("span", Ca, a(ne.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", xa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ((z = t.status.comparison) == null ? void 0 : z.packages_in_sync) === !1 ? (s(), o("div", Sa, [
                  b(De, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : d("", !0),
                e("div", Ia, [
                  b(oe, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: k[4] || (k[4] = (ne) => _.$emit("repair"))
                  }, {
                    default: l(() => [...k[24] || (k[24] = [
                      y(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  k[25] || (k[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ie = (S = t.status.comparison) == null ? void 0 : S.disabled_nodes) != null && ie.length ? (s(), o("div", Ea, [
                b(ot, { level: "4" }, {
                  default: l(() => [...k[27] || (k[27] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ma, [
                  k[28] || (k[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ta, [
                  (s(!0), o(A, null, se(t.status.comparison.disabled_nodes.slice(0, 10), (ne) => (s(), o("div", {
                    key: ne,
                    class: "drift-list-item"
                  }, " • " + a(ne), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ra, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", za, [
                b(ot, { level: "4" }, {
                  default: l(() => [...k[29] || (k[29] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", La, [
                  k[30] || (k[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[31] || (k[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", Pa, [...k[32] || (k[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", Da, [
              b(oe, {
                variant: "secondary",
                onClick: k[5] || (k[5] = (ne) => _.$emit("close"))
              }, {
                default: l(() => [...k[33] || (k[33] = [
                  y(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Ua = /* @__PURE__ */ Z(Na, [["__scopeId", "data-v-e2b37122"]]), Oa = { class: "health-section-header" }, Ba = { class: "suggestions-content" }, Fa = { class: "suggestions-text" }, Aa = { style: { "margin-top": "var(--cg-space-3)" } }, Va = {
  key: 1,
  class: "no-issues-text"
}, Wa = /* @__PURE__ */ Q({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, p = $(!1), g = $(!1);
    function u() {
      p.value = !0;
    }
    function v() {
      p.value = !1, m("view-workflows");
    }
    function r() {
      p.value = !1, m("view-nodes");
    }
    const m = n, h = $(!1), w = $(!1);
    function _() {
      w.value = !0, m("repair-environment");
    }
    function k() {
      w.value = !1;
    }
    function T() {
      p.value = !1;
    }
    const F = N(() => {
      const J = i.status.workflows.analyzed || [], D = J.filter(
        (z) => z.unresolved_models_count > 0 || z.ambiguous_models_count > 0
      );
      return D.length === 0 && i.status.missing_models_count > 0 ? J.filter((z) => z.sync_state === "synced") : D;
    });
    function f() {
      const J = F.value;
      J.length !== 0 && (h.value = !0, m("repair-missing-models", J.map((D) => D.name)));
    }
    function C() {
      h.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: k, closeDetailModal: T });
    const L = N(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), I = N(() => i.status.has_changes), x = N(() => {
      const J = i.status.git_changes;
      return J.nodes_added.length > 0 || J.nodes_removed.length > 0 || J.workflow_changes;
    }), K = N(() => i.status.has_changes || L.value), B = N(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), W = N(() => i.status.git_changes.has_other_changes), P = N(() => {
      var J;
      return ((J = i.status.workflows.analyzed) == null ? void 0 : J.filter((D) => D.status === "broken")) || [];
    }), M = N(() => {
      var J;
      return ((J = i.status.workflows.analyzed) == null ? void 0 : J.filter(
        (D) => D.has_path_sync_issues && !D.has_issues
      )) || [];
    }), O = N(() => P.value.length > 0), ae = N(() => O.value || M.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), X = N(() => {
      const J = [];
      return i.status.workflows.new.length > 0 && J.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && J.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && J.push(`${i.status.workflows.deleted.length} deleted`), J.length > 0 ? `${J.join(", ")} workflow${J.length === 1 && !J[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), H = N(() => {
      var z, S;
      const J = [], D = i.status.comparison;
      return (z = D.missing_nodes) != null && z.length && J.push(`${D.missing_nodes.length} missing node${D.missing_nodes.length === 1 ? "" : "s"}`), (S = D.extra_nodes) != null && S.length && J.push(`${D.extra_nodes.length} untracked node${D.extra_nodes.length === 1 ? "" : "s"}`), J.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${J.join(" and ")}.`;
    }), de = N(() => {
      var z, S;
      const J = [], D = i.status.comparison;
      return (z = D.extra_nodes) != null && z.length && (D.extra_nodes.slice(0, 3).forEach((ie) => {
        J.push(`Untracked: ${ie}`);
      }), D.extra_nodes.length > 3 && J.push(`...and ${D.extra_nodes.length - 3} more untracked`)), (S = D.missing_nodes) != null && S.length && (D.missing_nodes.slice(0, 3).forEach((ie) => {
        J.push(`Missing: ${ie}`);
      }), D.missing_nodes.length > 3 && J.push(`...and ${D.missing_nodes.length - 3} more missing`)), J;
    });
    return (J, D) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), E(lt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              b(oe, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (z) => J.$emit("start-setup"))
              }, {
                default: l(() => [...D[13] || (D[13] = [
                  y(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), E(lt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              b(oe, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (z) => J.$emit("view-environments"))
              }, {
                default: l(() => [...D[14] || (D[14] = [
                  y(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), E(lt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              b(oe, {
                variant: "primary",
                size: "sm",
                onClick: D[2] || (D[2] = (z) => J.$emit("create-environment"))
              }, {
                default: l(() => [...D[15] || (D[15] = [
                  y(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: D[4] || (D[4] = (z) => g.value = !0),
            onMouseleave: D[5] || (D[5] = (z) => g.value = !1)
          }, [
            e("div", Oa, [
              b(ot, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...D[16] || (D[16] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(ro, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), E(oe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: l(() => [...D[17] || (D[17] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            b(Ao, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Wt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), E(ct, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), E(ct, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), E(ct, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                b(ct, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: L.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(ct, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(ct, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(ct, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                W.value ? (s(), E(ct, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                I.value && !x.value && !W.value ? (s(), E(ct, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                I.value ? d("", !0) : (s(), E(ct, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              K.value ? {
                name: "footer",
                fn: l(() => [
                  D[19] || (D[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Ba, [
                    e("span", Fa, a(X.value), 1),
                    b(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: D[3] || (D[3] = (z) => J.$emit("commit-changes"))
                    }, {
                      default: l(() => [...D[18] || (D[18] = [
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
          t.status.is_detached_head ? (s(), E(lt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              b(oe, {
                variant: "primary",
                size: "sm",
                onClick: D[6] || (D[6] = (z) => J.$emit("create-branch"))
              }, {
                default: l(() => [...D[20] || (D[20] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", Aa, [
            b(ot, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...D[21] || (D[21] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ae.value ? (s(), o(A, { key: 0 }, [
              P.value.length > 0 ? (s(), E(lt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${P.value.length} workflow${P.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: P.value.map((z) => `${z.name} — ${z.issue_summary}`)
              }, {
                actions: l(() => [
                  b(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[7] || (D[7] = (z) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...D[22] || (D[22] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              M.value.length > 0 ? (s(), E(lt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: M.value.map((z) => `${z.name} — ${z.models_needing_path_sync_count} model path${z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  b(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[8] || (D[8] = (z) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...D[23] || (D[23] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !O.value ? (s(), E(lt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  b(oe, {
                    variant: "primary",
                    size: "sm",
                    disabled: h.value,
                    onClick: f
                  }, {
                    default: l(() => [
                      y(a(h.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(oe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: D[9] || (D[9] = (z) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...D[24] || (D[24] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), E(lt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: H.value,
                items: de.value
              }, {
                actions: l(() => [
                  b(oe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...D[25] || (D[25] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[10] || (D[10] = (z) => J.$emit("view-nodes"))
                  }, {
                    default: l(() => [...D[26] || (D[26] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), E(lt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  b(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[11] || (D[11] = (z) => J.$emit("view-nodes"))
                  }, {
                    default: l(() => [...D[27] || (D[27] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : K.value ? (s(), o("span", Va, "No issues")) : (s(), E(dt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      b(Ua, {
        show: p.value,
        status: t.status,
        "is-repairing": w.value,
        onClose: D[12] || (D[12] = (z) => p.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: r,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ga = /* @__PURE__ */ Z(Wa, [["__scopeId", "data-v-55fcd77f"]]), ja = ["type", "value", "placeholder", "disabled"], qa = /* @__PURE__ */ Q({
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
    const i = t, p = n, g = $(null);
    function u(v) {
      const r = v.target.value;
      p("update:modelValue", r);
    }
    return Ne(() => {
      i.autoFocus && g.value && g.value.focus();
    }), c({
      focus: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.blur();
      }
    }), (v, r) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ue(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        r[0] || (r[0] = ht((m) => v.$emit("enter"), ["enter"])),
        r[1] || (r[1] = ht((m) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (m) => v.$emit("focus")),
      onBlur: r[3] || (r[3] = (m) => v.$emit("blur"))
    }, null, 42, ja));
  }
}), Qt = /* @__PURE__ */ Z(qa, [["__scopeId", "data-v-0380d08f"]]), Ha = { class: "branch-create-form" }, Ka = { class: "form-actions" }, Ja = /* @__PURE__ */ Q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = $(""), p = N(() => {
      const v = i.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function g() {
      p.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (v, r) => (s(), o("div", Ha, [
      b(Qt, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (m) => i.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", Ka, [
        b(oe, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: g
        }, {
          default: l(() => [...r[1] || (r[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(oe, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: l(() => [...r[2] || (r[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ya = /* @__PURE__ */ Z(Ja, [["__scopeId", "data-v-7c500394"]]), Xa = { class: "branch-list-item__indicator" }, Qa = { class: "branch-list-item__name" }, Za = {
  key: 0,
  class: "branch-list-item__actions"
}, el = {
  key: 0,
  class: "branch-list-item__current-label"
}, tl = /* @__PURE__ */ Q({
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
      class: ue(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Xa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Qa, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", Za, [
        $e(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", el, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), sl = /* @__PURE__ */ Z(tl, [["__scopeId", "data-v-c6581a24"]]), ol = {
  key: 2,
  class: "branch-list"
}, nl = /* @__PURE__ */ Q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = $(!1);
    function p(u) {
      n("create", u), g();
    }
    function g() {
      i.value = !1;
    }
    return (u, v) => (s(), E(Ke, null, {
      header: l(() => [
        b(Je, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? d("", !0) : (s(), E(oe, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: v[0] || (v[0] = (r) => i.value = !0)
            }, {
              default: l(() => [...v[1] || (v[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), E(Ya, {
          key: 0,
          onCreate: p,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), E(dt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", ol, [
          (s(!0), o(A, null, se(t.branches, (r) => (s(), E(sl, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: l(() => [
              r.is_current ? d("", !0) : (s(), E(oe, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => u.$emit("delete", r.name)
              }, {
                default: l(() => [...v[2] || (v[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              r.is_current ? d("", !0) : (s(), E(oe, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => u.$emit("switch", r.name)
              }, {
                default: l(() => [...v[3] || (v[3] = [
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
}), al = /* @__PURE__ */ Z(nl, [["__scopeId", "data-v-86784ddd"]]), ll = { class: "commit-list" }, il = /* @__PURE__ */ Q({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", ll, [
      $e(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), rl = /* @__PURE__ */ Z(il, [["__scopeId", "data-v-8c5ee761"]]), dl = { class: "commit-hash" }, cl = /* @__PURE__ */ Q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = N(() => c.hash.slice(0, c.length));
    return (i, p) => (s(), o("span", dl, a(n.value), 1));
  }
}), Ps = /* @__PURE__ */ Z(cl, [["__scopeId", "data-v-7c333cc6"]]), ul = { class: "commit-message" }, ml = { class: "commit-date" }, vl = /* @__PURE__ */ Q({
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
    function p() {
      n.clickable && i("click");
    }
    return (g, u) => (s(), o("div", {
      class: ue(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      b(Ps, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ul, a(t.message), 1),
      e("span", ml, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = ze(() => {
        }, ["stop"]))
      }, [
        $e(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), fl = /* @__PURE__ */ Z(vl, [["__scopeId", "data-v-dd7c621b"]]), gl = /* @__PURE__ */ Q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), E(Ke, null, {
      header: l(() => [
        b(Je, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), E(dt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(rl, { key: 1 }, {
          default: l(() => [
            (s(!0), o(A, null, se(t.commits, (i) => (s(), E(fl, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (p) => c.$emit("select", i)
            }, {
              actions: l(() => [
                b(oe, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => c.$emit("checkout", i),
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
}), pl = /* @__PURE__ */ Z(gl, [["__scopeId", "data-v-981c3c64"]]), D2 = ts({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const N2 = [
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
], U2 = {
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
}, hl = [
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
], O2 = [
  ...hl,
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
function Dt() {
  return !1;
}
function Fe() {
  const t = $(!1), c = $(null);
  async function n(q, ce) {
    var Le;
    if (!((Le = window.app) != null && Le.api))
      throw new Error("ComfyUI API not available");
    const ye = await window.app.api.fetchApi(q, ce);
    if (!ye.ok) {
      const qe = await ye.json().catch(() => ({}));
      throw new Error(qe.error || qe.message || `Request failed: ${ye.status}`);
    }
    return ye.json();
  }
  async function i(q = !1) {
    return n(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(q, ce = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: ce })
    });
  }
  async function g(q = 10, ce = 0) {
    return n(`/v2/comfygit/log?limit=${q}&offset=${ce}`);
  }
  async function u(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function v() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function r(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q, force: !0 })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function h(q) {
    return n(`/v2/comfygit/commit/${q}`);
  }
  async function w(q, ce = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: ce })
    });
  }
  async function _(q, ce = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: ce })
    });
  }
  async function k(q, ce = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: ce })
    });
  }
  async function T(q, ce = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ce })
    });
  }
  async function F() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const q = await i();
        return [{
          name: q.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + q.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: q.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: q.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function f(q, ce) {
    const ye = { target_env: q };
    return ce && (ye.workspace_path = ce), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ye)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function L(q) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function I() {
    return n("/v2/workspace/environments/create_status");
  }
  async function x(q = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function K(q) {
    return n(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function B(q = !1) {
    try {
      return n(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ce = await i(q), ye = [];
      return ce.workflows.new.forEach((Le) => {
        ye.push({ name: Le, status: "new", missing_nodes: 0, missing_models: 0, path: Le });
      }), ce.workflows.modified.forEach((Le) => {
        ye.push({ name: Le, status: "modified", missing_nodes: 0, missing_models: 0, path: Le });
      }), ce.workflows.synced.forEach((Le) => {
        ye.push({ name: Le, status: "synced", missing_nodes: 0, missing_models: 0, path: Le });
      }), ye;
    }
  }
  async function W(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function P(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function M(q, ce, ye) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ce, install_models: ye })
    });
  }
  async function O(q, ce, ye) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ce, importance: ye })
    });
  }
  async function ae() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function X() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function H(q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function de(q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function J(q, ce) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ce })
    });
  }
  async function D(q, ce) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ce })
    });
  }
  async function z(q) {
    return n(`/v2/workspace/models/${q}`, {
      method: "DELETE"
    });
  }
  async function S(q) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function ie() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ne() {
    return n("/v2/workspace/models/directory");
  }
  async function Ee(q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function be(q) {
    try {
      const ce = q ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(q)}` : "/v2/comfygit/config";
      return n(ce);
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
  async function le(q, ce) {
    const ye = ce ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ce)}` : "/v2/comfygit/config";
    return n(ye, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function re(q, ce) {
    try {
      const ye = new URLSearchParams();
      return q && ye.append("level", q), ce && ye.append("lines", ce.toString()), n(`/v2/comfygit/debug/logs?${ye}`);
    } catch {
      return [];
    }
  }
  async function me(q, ce) {
    try {
      const ye = new URLSearchParams();
      return q && ye.append("level", q), ce && ye.append("lines", ce.toString()), n(`/v2/workspace/debug/logs?${ye}`);
    } catch {
      return [];
    }
  }
  async function fe() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Oe() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Re(q) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function ve() {
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
  async function Ge(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function Se(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function nt(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function et(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function vt() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function xe(q, ce) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: ce })
    });
  }
  async function tt(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function Xe(q, ce, ye) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ce, push_url: ye })
    });
  }
  async function je(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST"
    });
  }
  async function ft(q) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function ee(q = "skip", ce = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: ce
      })
    });
  }
  async function j(q, ce) {
    const ye = ce ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(ce)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return n(ye);
  }
  async function Te(q, ce = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ce.modelStrategy || "skip",
        force: ce.force || !1,
        resolutions: ce.resolutions
      })
    });
  }
  async function ge(q, ce) {
    const ye = ce ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(ce)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return n(ye);
  }
  async function Me(q, ce = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ce.force || !1 })
    });
  }
  async function Ae(q, ce) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ce })
    });
  }
  async function Y(q) {
    const ce = {
      success: 0,
      failed: []
    };
    for (const ye of q)
      try {
        await P(ye), ce.success++;
      } catch (Le) {
        ce.failed.push({
          name: ye,
          error: Le instanceof Error ? Le.message : "Unknown error"
        });
      }
    return ce;
  }
  async function U(q) {
    var Le;
    const ce = new FormData();
    if (ce.append("file", q), !((Le = window.app) != null && Le.api))
      throw new Error("ComfyUI API not available");
    const ye = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ce
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!ye.ok) {
      const qe = await ye.json().catch(() => ({}));
      throw new Error(qe.error || `Preview failed: ${ye.status}`);
    }
    return ye.json();
  }
  async function V(q) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function te(q, ce, ye, Le) {
    var qt;
    const qe = new FormData();
    if (qe.append("file", q), qe.append("name", ce), qe.append("model_strategy", ye), qe.append("torch_backend", Le), !((qt = window.app) != null && qt.api))
      throw new Error("ComfyUI API not available");
    const It = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: qe
    });
    if (!It.ok) {
      const Ht = await It.json().catch(() => ({}));
      throw new Error(Ht.message || Ht.error || `Import failed: ${It.status}`);
    }
    return It.json();
  }
  async function ke() {
    return n("/v2/workspace/import/status");
  }
  async function Qe(q) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function gt(q, ce, ye, Le) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: ce,
        model_strategy: ye,
        torch_backend: Le
      })
    });
  }
  async function Ct() {
    return n("/v2/setup/status");
  }
  async function at(q) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function xt() {
    return n("/v2/setup/initialize_status");
  }
  async function St(q) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: p,
    getHistory: g,
    exportEnv: u,
    validateExport: v,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: m,
    getCommitDetail: h,
    checkout: w,
    createBranch: _,
    switchBranch: k,
    deleteBranch: T,
    // Environment Management
    getEnvironments: F,
    switchEnvironment: f,
    getSwitchProgress: C,
    createEnvironment: L,
    getCreateProgress: I,
    getComfyUIReleases: x,
    deleteEnvironment: K,
    // Workflow Management
    getWorkflows: B,
    getWorkflowDetails: W,
    resolveWorkflow: P,
    installWorkflowDeps: M,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: ae,
    getWorkspaceModels: X,
    getModelDetails: H,
    openFileLocation: de,
    addModelSource: J,
    removeModelSource: D,
    deleteModel: z,
    downloadModel: S,
    scanWorkspaceModels: ie,
    getModelsDirectory: ne,
    setModelsDirectory: Ee,
    // Settings
    getConfig: be,
    updateConfig: le,
    // Debug/Logs
    getEnvironmentLogs: re,
    getWorkspaceLogs: me,
    getEnvironmentLogPath: fe,
    getWorkspaceLogPath: Oe,
    openFile: Re,
    // Node Management
    getNodes: ve,
    trackNodeAsDev: Ge,
    installNode: Se,
    updateNode: nt,
    uninstallNode: et,
    // Git Remotes
    getRemotes: vt,
    addRemote: xe,
    removeRemote: tt,
    updateRemoteUrl: Xe,
    fetchRemote: je,
    getRemoteSyncStatus: ft,
    // Push/Pull
    getPullPreview: j,
    pullFromRemote: Te,
    getPushPreview: ge,
    pushToRemote: Me,
    validateMerge: Ae,
    // Environment Sync
    syncEnvironmentManually: ee,
    // Workflow Repair
    repairWorkflowModels: Y,
    // Import Operations
    previewTarballImport: U,
    previewGitImport: Qe,
    validateEnvironmentName: V,
    executeImport: te,
    executeGitImport: gt,
    getImportProgress: ke,
    // First-Time Setup
    getSetupStatus: Ct,
    initializeWorkspace: at,
    getInitializeProgress: xt,
    validatePath: St
  };
}
async function Nt(t, c = {}, n = 5e3) {
  const i = new AbortController(), p = setTimeout(() => i.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(p), g;
  } catch (g) {
    throw clearTimeout(p), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function Ds() {
  const t = $(null);
  async function c() {
    try {
      const u = await Nt(
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
      const u = await Nt(
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
      const u = await Nt(
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
  async function p() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Nt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Nt(
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
    restart: p,
    kill: g
  };
}
const yl = { class: "base-modal-header" }, wl = {
  key: 0,
  class: "base-modal-title"
}, kl = { class: "base-modal-body" }, bl = {
  key: 0,
  class: "base-modal-loading"
}, _l = {
  key: 1,
  class: "base-modal-error"
}, $l = {
  key: 0,
  class: "base-modal-footer"
}, Cl = /* @__PURE__ */ Q({
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
    function p() {
      n.closeOnOverlayClick && i("close");
    }
    function g(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return Ne(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), zs(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (u, v) => (s(), E(Ve, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: ue(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", yl, [
            $e(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", wl, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (r) => u.$emit("close"))
            }, [...v[2] || (v[2] = [
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
          e("div", kl, [
            t.loading ? (s(), o("div", bl, "Loading...")) : t.error ? (s(), o("div", _l, a(t.error), 1)) : $e(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", $l, [
            $e(u.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Ye = /* @__PURE__ */ Z(Cl, [["__scopeId", "data-v-8dab1081"]]), xl = ["type", "disabled"], Sl = {
  key: 0,
  class: "spinner"
}, Il = /* @__PURE__ */ Q({
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
      class: ue(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Sl)) : d("", !0),
      $e(c.$slots, "default", {}, void 0, !0)
    ], 10, xl));
  }
}), pe = /* @__PURE__ */ Z(Il, [["__scopeId", "data-v-f3452606"]]), El = {
  key: 0,
  class: "base-title-count"
}, Ml = /* @__PURE__ */ Q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), E(cs(`h${t.level}`), {
      class: ue(["base-title", t.variant])
    }, {
      default: l(() => [
        $e(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", El, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = /* @__PURE__ */ Z(Ml, [["__scopeId", "data-v-5a01561d"]]), Tl = ["value", "disabled"], Rl = {
  key: 0,
  value: "",
  disabled: ""
}, zl = ["value"], Ll = {
  key: 0,
  class: "base-select-error"
}, Pl = /* @__PURE__ */ Q({
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
    return (i, p) => (s(), o("div", {
      class: ue(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ue(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (g) => i.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", Rl, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(A, null, se(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, zl))), 128))
      ], 42, Tl),
      t.error ? (s(), o("span", Ll, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Dl = /* @__PURE__ */ Z(Pl, [["__scopeId", "data-v-7436d745"]]), Nl = { class: "popover-header" }, Ul = { class: "popover-title" }, Ol = { class: "popover-content" }, Bl = {
  key: 0,
  class: "popover-actions"
}, Fl = /* @__PURE__ */ Q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: yt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", Nl, [
            e("h4", Ul, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Ol, [
            $e(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Bl, [
            $e(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), mt = /* @__PURE__ */ Z(Fl, [["__scopeId", "data-v-42815ace"]]), Al = { class: "detail-section" }, Vl = {
  key: 0,
  class: "empty-message"
}, Wl = { class: "model-header" }, Gl = { class: "model-name" }, jl = { class: "model-details" }, ql = { class: "model-row" }, Hl = { class: "model-row" }, Kl = { class: "label" }, Jl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Yl = { class: "node-list" }, Xl = ["onClick"], Ql = {
  key: 1,
  class: "model-row"
}, Zl = { class: "value" }, ei = {
  key: 2,
  class: "model-row"
}, ti = { class: "value error" }, si = {
  key: 0,
  class: "model-actions"
}, oi = { class: "detail-section" }, ni = {
  key: 0,
  class: "empty-message"
}, ai = { class: "node-name" }, li = {
  key: 0,
  class: "node-version"
}, ii = /* @__PURE__ */ Q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: p, setModelImportance: g, openFileLocation: u } = Fe(), v = $(null), r = $(!1), m = $(null), h = $(!1), w = $({}), _ = $(!1), k = $(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function F(P) {
      switch (P) {
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
    function f(P) {
      switch (P) {
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
    function C(P) {
      if (!P.loaded_by || P.loaded_by.length === 0) return [];
      const M = P.hash || P.filename;
      return k.value.has(M) ? P.loaded_by : P.loaded_by.slice(0, 3);
    }
    function L(P) {
      return k.value.has(P);
    }
    function I(P) {
      k.value.has(P) ? k.value.delete(P) : k.value.add(P), k.value = new Set(k.value);
    }
    async function x() {
      r.value = !0, m.value = null;
      try {
        v.value = await p(n.workflowName);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function K(P, M) {
      w.value[P] = M, h.value = !0;
    }
    async function B(P) {
      try {
        await u(P);
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to open file location";
      }
    }
    async function W() {
      if (!h.value) {
        i("close");
        return;
      }
      r.value = !0, m.value = null;
      try {
        for (const [P, M] of Object.entries(w.value))
          await g(n.workflowName, P, M);
        i("refresh"), i("close");
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Ne(x), (P, M) => (s(), o(A, null, [
      b(Ye, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: m.value || void 0,
        onClose: M[4] || (M[4] = (O) => i("close"))
      }, {
        body: l(() => [
          v.value ? (s(), o(A, { key: 0 }, [
            e("section", Al, [
              b(Ft, { variant: "section" }, {
                default: l(() => [
                  y("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (s(), o("div", Vl, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(A, null, se(v.value.models, (O) => {
                var ae;
                return s(), o("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  e("div", Wl, [
                    M[6] || (M[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Gl, a(O.filename), 1)
                  ]),
                  e("div", jl, [
                    e("div", ql, [
                      M[7] || (M[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: ue(["value", F(O.status)])
                      }, a(f(O.status)), 3)
                    ]),
                    e("div", Hl, [
                      e("span", Kl, [
                        M[8] || (M[8] = y(" Importance: ", -1)),
                        b(Ls, {
                          size: 14,
                          title: "About importance levels",
                          onClick: M[0] || (M[0] = (X) => _.value = !0)
                        })
                      ]),
                      b(Dl, {
                        "model-value": w.value[O.filename] || O.importance,
                        options: T,
                        "onUpdate:modelValue": (X) => K(O.filename, X)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (s(), o("div", Jl, [
                      M[9] || (M[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Yl, [
                        (s(!0), o(A, null, se(C(O), (X, H) => (s(), o("div", {
                          key: `${X.node_id}-${H}`,
                          class: "node-reference"
                        }, a(X.node_type) + " (Node #" + a(X.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (X) => I(O.hash || O.filename)
                        }, a(L(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, Xl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    O.size_mb ? (s(), o("div", Ql, [
                      M[10] || (M[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Zl, a(O.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    O.has_category_mismatch ? (s(), o("div", ei, [
                      M[13] || (M[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ti, [
                        M[11] || (M[11] = y(" In ", -1)),
                        e("code", null, a(O.actual_category) + "/", 1),
                        M[12] || (M[12] = y(" but loader needs ", -1)),
                        e("code", null, a((ae = O.expected_categories) == null ? void 0 : ae[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  O.status !== "available" ? (s(), o("div", si, [
                    O.status === "downloadable" ? (s(), E(pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: M[1] || (M[1] = (X) => i("resolve"))
                    }, {
                      default: l(() => [...M[14] || (M[14] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (s(), E(pe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (X) => B(O.file_path)
                    }, {
                      default: l(() => [...M[15] || (M[15] = [
                        y(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (s(), E(pe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: M[2] || (M[2] = (X) => i("resolve"))
                    }, {
                      default: l(() => [...M[16] || (M[16] = [
                        y(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", oi, [
              b(Ft, { variant: "section" }, {
                default: l(() => [
                  y("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", ni, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(A, null, se(v.value.nodes, (O) => (s(), o("div", {
                key: O.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ue(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, a(O.status === "installed" ? "✓" : "✕"), 3),
                e("span", ai, a(O.name), 1),
                O.version ? (s(), o("span", li, "v" + a(O.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          b(pe, {
            variant: "secondary",
            onClick: M[3] || (M[3] = (O) => i("close"))
          }, {
            default: l(() => [...M[17] || (M[17] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          h.value ? (s(), E(pe, {
            key: 0,
            variant: "primary",
            onClick: W
          }, {
            default: l(() => [...M[18] || (M[18] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(mt, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: M[5] || (M[5] = (O) => _.value = !1)
      }, {
        content: l(() => [...M[19] || (M[19] = [
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
}), ri = /* @__PURE__ */ Z(ii, [["__scopeId", "data-v-668728e6"]]), Ie = ts({
  items: [],
  status: "idle"
});
let ut = null;
function Ns() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ss(t) {
  return Ie.items.find((c) => c.id === t);
}
async function Mt() {
  if (Ie.status === "downloading") return;
  const t = Ie.items.find((c) => c.status === "queued");
  if (!t) {
    Ie.status = "idle";
    return;
  }
  Ie.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await di(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Ie.status = "idle", Mt();
  }
}
async function di(t) {
  return new Promise((c, n) => {
    ut && (ut.close(), ut = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    ut = p;
    let g = Date.now(), u = 0, v = !1;
    p.onmessage = (r) => {
      try {
        const m = JSON.parse(r.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const h = Date.now(), w = (h - g) / 1e3;
            if (w > 0.5) {
              const _ = t.downloaded - u;
              if (t.speed = _ / w, g = h, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const k = t.size - t.downloaded;
                t.eta = k / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, p.close(), ut = null, c();
            break;
          case "error":
            v = !0, p.close(), ut = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), ut = null, v || n(new Error("Connection lost"));
    };
  });
}
async function ci() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Ie.items.some((p) => p.url === n.url && p.filename === n.filename))
        continue;
      const i = {
        id: Ns(),
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
      Ie.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Gt() {
  function t(f) {
    for (const C of f) {
      if (Ie.items.some(
        (x) => x.url === C.url && x.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const I = {
        id: Ns(),
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
      Ie.items.push(I);
    }
    Ie.status === "idle" && Mt();
  }
  async function c(f) {
    const C = ss(f);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ut && (ut.close(), ut = null), C.status = "failed", C.error = "Cancelled by user", Ie.status = "idle", Mt();
      } else if (C.status === "queued") {
        const L = Ie.items.findIndex((I) => I.id === f);
        L >= 0 && Ie.items.splice(L, 1);
      }
    }
  }
  function n(f) {
    const C = ss(f);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Ie.status === "idle" && Mt());
  }
  function i(f) {
    const C = ss(f);
    !C || C.status !== "paused" || (C.status = "queued", Ie.status === "idle" && Mt());
  }
  function p() {
    const f = Ie.items.filter((C) => C.status === "paused");
    for (const C of f)
      C.status = "queued";
    Ie.status === "idle" && Mt();
  }
  function g(f) {
    const C = Ie.items.findIndex((L) => L.id === f);
    C >= 0 && ["completed", "failed", "paused"].includes(Ie.items[C].status) && Ie.items.splice(C, 1);
  }
  function u() {
    Ie.items = Ie.items.filter((f) => f.status !== "completed");
  }
  function v() {
    Ie.items = Ie.items.filter((f) => f.status !== "failed");
  }
  const r = N(
    () => Ie.items.find((f) => f.status === "downloading")
  ), m = N(
    () => Ie.items.filter((f) => f.status === "queued")
  ), h = N(
    () => Ie.items.filter((f) => f.status === "completed")
  ), w = N(
    () => Ie.items.filter((f) => f.status === "failed")
  ), _ = N(
    () => Ie.items.filter((f) => f.status === "paused")
  ), k = N(() => Ie.items.length > 0), T = N(
    () => Ie.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), F = N(
    () => Ie.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: co(Ie),
    // Computed
    currentDownload: r,
    queuedItems: m,
    completedItems: h,
    failedItems: w,
    pausedItems: _,
    hasItems: k,
    activeCount: T,
    hasPaused: F,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: p,
    removeItem: g,
    clearCompleted: u,
    clearFailed: v,
    loadPendingDownloads: ci
  };
}
function Us() {
  const t = $(null), c = $(null), n = $([]), i = $([]), p = $(!1), g = $(null);
  async function u(L, I) {
    var K;
    if (!((K = window.app) != null && K.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(L, I);
    if (!x.ok) {
      const B = await x.json().catch(() => ({})), W = B.error || B.message || `Request failed: ${x.status}`;
      throw new Error(W);
    }
    return x.json();
  }
  async function v(L) {
    p.value = !0, g.value = null;
    try {
      let I;
      return Dt() || (I = await u(
        `/v2/comfygit/workflow/${L}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = I, I;
    } catch (I) {
      const x = I instanceof Error ? I.message : "Unknown error occurred";
      throw g.value = x, I;
    } finally {
      p.value = !1;
    }
  }
  async function r(L, I, x, K) {
    p.value = !0, g.value = null;
    try {
      let B;
      if (!Dt()) {
        const W = Object.fromEntries(I), P = Object.fromEntries(x), M = K ? Array.from(K) : [];
        B = await u(
          `/v2/comfygit/workflow/${L}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: W,
              model_choices: P,
              skipped_packages: M
            })
          }
        );
      }
      return c.value = B, B;
    } catch (B) {
      const W = B instanceof Error ? B.message : "Unknown error occurred";
      throw g.value = W, B;
    } finally {
      p.value = !1;
    }
  }
  async function m(L, I = 10) {
    p.value = !0, g.value = null;
    try {
      let x;
      return Dt() || (x = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: I })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const K = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = K, x;
    } finally {
      p.value = !1;
    }
  }
  async function h(L, I = 10) {
    p.value = !0, g.value = null;
    try {
      let x;
      return Dt() || (x = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: I })
        }
      )), i.value = x.results, x.results;
    } catch (x) {
      const K = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = K, x;
    } finally {
      p.value = !1;
    }
  }
  const w = ts({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    w.phase = "idle", w.currentFile = void 0, w.currentFileIndex = void 0, w.totalFiles = void 0, w.bytesDownloaded = void 0, w.bytesTotal = void 0, w.completedFiles = [], w.nodesToInstall = [], w.nodesInstalled = [], w.installError = void 0, w.needsRestart = void 0, w.error = void 0, w.nodeInstallProgress = void 0;
  }
  async function k(L) {
    w.phase = "installing", w.nodesInstalled = [], w.installError = void 0, w.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Dt(), await T(L);
    } catch (I) {
      const x = I instanceof Error ? I.message : "Failed to install nodes";
      throw w.installError = x, I;
    }
  }
  async function T(L) {
    var x;
    const I = await u(
      `/v2/comfygit/workflow/${L}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: w.nodesToInstall
        })
      }
    );
    if (w.nodeInstallProgress) {
      w.nodeInstallProgress.totalNodes = w.nodesToInstall.length;
      const K = new Map(((x = I.failed) == null ? void 0 : x.map((B) => [B.node_id, B.error])) || []);
      for (let B = 0; B < w.nodesToInstall.length; B++) {
        const W = w.nodesToInstall[B], P = K.get(W);
        w.nodeInstallProgress.completedNodes.push({
          node_id: W,
          success: !P,
          error: P
        });
      }
    }
    return w.nodesInstalled = I.nodes_installed, w.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (w.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function F(L, I, x) {
    _(), w.phase = "resolving", g.value = null;
    const K = Object.fromEntries(I), B = Object.fromEntries(x);
    try {
      const W = await fetch(`/v2/comfygit/workflow/${L}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: K,
          model_choices: B
        })
      });
      if (!W.ok)
        throw new Error(`Request failed: ${W.status}`);
      if (!W.body)
        throw new Error("No response body");
      const P = W.body.getReader(), M = new TextDecoder();
      let O = "";
      for (; ; ) {
        const { done: ae, value: X } = await P.read();
        if (ae) break;
        O += M.decode(X, { stream: !0 });
        const H = O.split(`

`);
        O = H.pop() || "";
        for (const de of H) {
          if (!de.trim()) continue;
          const J = de.split(`
`);
          let D = "", z = "";
          for (const S of J)
            S.startsWith("event: ") ? D = S.slice(7) : S.startsWith("data: ") && (z = S.slice(6));
          if (z)
            try {
              const S = JSON.parse(z);
              f(D, S);
            } catch (S) {
              console.warn("Failed to parse SSE event:", S);
            }
        }
      }
    } catch (W) {
      const P = W instanceof Error ? W.message : "Unknown error occurred";
      throw g.value = P, w.error = P, w.phase = "error", W;
    }
  }
  function f(L, I) {
    switch (L) {
      case "batch_start":
        w.phase = "downloading", w.totalFiles = I.total;
        break;
      case "file_start":
        w.currentFile = I.filename, w.currentFileIndex = I.index, w.bytesDownloaded = 0, w.bytesTotal = void 0;
        break;
      case "file_progress":
        w.bytesDownloaded = I.downloaded, w.bytesTotal = I.total;
        break;
      case "file_complete":
        w.completedFiles.push({
          filename: I.filename,
          success: I.success,
          error: I.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        w.nodesToInstall = I.nodes_to_install || [], I.download_results && (w.completedFiles = I.download_results), w.phase = "complete";
        break;
      case "error":
        w.error = I.message, w.phase = "error", g.value = I.message;
        break;
    }
  }
  function C(L, I) {
    const { addToQueue: x } = Gt(), K = I.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: L,
      filename: B.filename,
      url: B.url,
      targetPath: B.target_path,
      size: B.size || 0,
      type: "model"
    }));
    return K.length > 0 && x(K), K.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: p,
    error: g,
    progress: w,
    // Methods
    analyzeWorkflow: v,
    applyResolution: r,
    applyResolutionWithProgress: F,
    installNodes: k,
    searchNodes: m,
    searchModels: h,
    resetProgress: _,
    queueModelDownloads: C
  };
}
const ui = { class: "resolution-stepper" }, mi = { class: "stepper-header" }, vi = ["onClick"], fi = {
  key: 0,
  class: "step-icon"
}, gi = {
  key: 1,
  class: "step-number"
}, pi = { class: "step-label" }, hi = {
  key: 0,
  class: "step-connector"
}, yi = { class: "stepper-content" }, wi = /* @__PURE__ */ Q({
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
    function p(m) {
      var h;
      if ((h = n.stepStats) != null && h[m]) {
        const w = n.stepStats[m];
        return w.total > 0 && w.resolved === w.total;
      }
      return n.completedSteps.includes(m);
    }
    function g(m) {
      var h;
      if ((h = n.stepStats) != null && h[m]) {
        const w = n.stepStats[m];
        return w.resolved > 0 && w.resolved < w.total;
      }
      return !1;
    }
    function u(m) {
      return p(m) ? "state-complete" : g(m) ? "state-partial" : "state-pending";
    }
    function v(m) {
      return !1;
    }
    function r(m) {
      i("step-change", m);
    }
    return (m, h) => (s(), o("div", ui, [
      e("div", mi, [
        (s(!0), o(A, null, se(t.steps, (w, _) => (s(), o("div", {
          key: w.id,
          class: ue(["step", {
            active: t.currentStep === w.id,
            completed: p(w.id),
            "in-progress": g(w.id),
            disabled: v(w.id)
          }]),
          onClick: (k) => r(w.id)
        }, [
          e("div", {
            class: ue(["step-indicator", u(w.id)])
          }, [
            p(w.id) ? (s(), o("span", fi, "✓")) : (s(), o("span", gi, a(_ + 1), 1))
          ], 2),
          e("div", pi, a(w.label), 1),
          _ < t.steps.length - 1 ? (s(), o("div", hi)) : d("", !0)
        ], 10, vi))), 128))
      ]),
      e("div", yi, [
        $e(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ki = /* @__PURE__ */ Z(wi, [["__scopeId", "data-v-2a7b3af8"]]), bi = /* @__PURE__ */ Q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = N(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = N(() => `confidence-${n.value}`), p = N(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, u) => (s(), o("span", {
      class: ue(["confidence-badge", i.value, t.size])
    }, a(p.value), 3));
  }
}), Zt = /* @__PURE__ */ Z(bi, [["__scopeId", "data-v-17ec4b80"]]), _i = { class: "node-info" }, $i = { class: "node-info-text" }, Ci = { class: "item-body" }, xi = {
  key: 0,
  class: "resolved-state"
}, Si = {
  key: 1,
  class: "multiple-options"
}, Ii = { class: "options-list" }, Ei = ["onClick"], Mi = ["name", "value", "checked", "onChange"], Ti = { class: "option-content" }, Ri = { class: "option-header" }, zi = { class: "option-package-id" }, Li = {
  key: 0,
  class: "option-title"
}, Pi = { class: "option-meta" }, Di = {
  key: 0,
  class: "installed-badge"
}, Ni = { class: "action-buttons" }, Ui = {
  key: 2,
  class: "unresolved"
}, Oi = {
  key: 0,
  class: "searching-state"
}, Bi = { class: "options-list" }, Fi = ["onClick"], Ai = ["name", "value"], Vi = { class: "option-content" }, Wi = { class: "option-header" }, Gi = { class: "option-package-id" }, ji = {
  key: 0,
  class: "option-description"
}, qi = { class: "option-meta" }, Hi = {
  key: 0,
  class: "installed-badge"
}, Ki = {
  key: 2,
  class: "unresolved-message"
}, Ji = { class: "action-buttons" }, Yi = /* @__PURE__ */ Q({
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
    function p(r, m = 80) {
      return r.length <= m ? r : r.slice(0, m - 3) + "...";
    }
    const g = N(() => !!n.choice);
    N(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), N(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.package_id;
    });
    const u = N(() => {
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
    function v(r) {
      i("option-selected", r);
    }
    return (r, m) => (s(), o("div", {
      class: ue(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", _i, [
        e("span", $i, [
          m[7] || (m[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ue(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Ci, [
        g.value ? (s(), o("div", xi, [
          b(pe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (h) => i("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Si, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ii, [
            (s(!0), o(A, null, se(t.options, (h, w) => (s(), o("label", {
              key: h.package_id,
              class: ue(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (_) => v(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (_) => v(w)
              }, null, 40, Mi),
              e("div", Ti, [
                e("div", Ri, [
                  e("span", zi, a(h.package_id), 1),
                  b(Zt, {
                    confidence: h.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                h.title && h.title !== h.package_id ? (s(), o("div", Li, a(h.title), 1)) : d("", !0),
                e("div", Pi, [
                  h.is_installed ? (s(), o("span", Di, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, Ei))), 128))
          ]),
          e("div", Ni, [
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (h) => i("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (h) => i("manual-entry"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (h) => i("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Ui, [
          t.isSearching ? (s(), o("div", Oi, [...m[13] || (m[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(A, { key: 1 }, [
            m[14] || (m[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Bi, [
              (s(!0), o(A, null, se(t.searchResults.slice(0, 5), (h, w) => (s(), o("label", {
                key: h.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", h)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: w
                }, null, 8, Ai),
                e("div", Vi, [
                  e("div", Wi, [
                    e("span", Gi, a(h.package_id), 1),
                    b(Zt, {
                      confidence: h.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  h.description ? (s(), o("div", ji, a(p(h.description)), 1)) : d("", !0),
                  e("div", qi, [
                    h.is_installed ? (s(), o("span", Hi, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, Fi))), 128))
            ])
          ], 64)) : (s(), o("div", Ki, [...m[15] || (m[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ji, [
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (h) => i("search"))
            }, {
              default: l(() => {
                var h;
                return [
                  y(a((h = t.searchResults) != null && h.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (h) => i("manual-entry"))
            }, {
              default: l(() => [...m[16] || (m[16] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (h) => i("mark-optional"))
            }, {
              default: l(() => [...m[17] || (m[17] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Xi = /* @__PURE__ */ Z(Yi, [["__scopeId", "data-v-c2997d1d"]]), Qi = { class: "item-navigator" }, Zi = { class: "nav-item-info" }, er = ["title"], tr = { class: "nav-controls" }, sr = { class: "nav-arrows" }, or = ["disabled"], nr = ["disabled"], ar = { class: "nav-position" }, lr = /* @__PURE__ */ Q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, p) => (s(), o("div", Qi, [
      e("div", Zi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, er)
      ]),
      e("div", tr, [
        e("div", sr, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, or),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, nr)
        ]),
        e("span", ar, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Os = /* @__PURE__ */ Z(lr, [["__scopeId", "data-v-74af7920"]]), ir = ["type", "value", "placeholder", "disabled"], rr = {
  key: 0,
  class: "base-input-error"
}, dr = /* @__PURE__ */ Q({
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
      class: ue(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ue(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = ht((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = ht((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ir),
      t.error ? (s(), o("span", rr, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ Z(dr, [["__scopeId", "data-v-9ba02cdc"]]), cr = { class: "node-resolution-step" }, ur = {
  key: 0,
  class: "auto-resolved-section"
}, mr = { class: "section-header" }, vr = { class: "stat-badge" }, fr = { class: "resolved-packages-list" }, gr = { class: "package-info" }, pr = { class: "package-id" }, hr = { class: "node-count" }, yr = { class: "package-actions" }, wr = {
  key: 0,
  class: "status-badge install"
}, kr = {
  key: 1,
  class: "status-badge skip"
}, br = ["onClick"], _r = {
  key: 1,
  class: "section-divider"
}, $r = { class: "step-header" }, Cr = { class: "stat-badge" }, xr = {
  key: 1,
  class: "step-body"
}, Sr = {
  key: 3,
  class: "empty-state"
}, Ir = { class: "node-modal-body" }, Er = { class: "node-search-results-container" }, Mr = {
  key: 0,
  class: "node-search-results"
}, Tr = ["onClick"], Rr = { class: "node-result-header" }, zr = { class: "node-result-package-id" }, Lr = {
  key: 0,
  class: "node-result-description"
}, Pr = {
  key: 1,
  class: "node-empty-state"
}, Dr = {
  key: 2,
  class: "node-empty-state"
}, Nr = {
  key: 3,
  class: "node-empty-state"
}, Ur = { class: "node-manual-entry-modal" }, Or = { class: "node-modal-body" }, Br = { class: "node-modal-actions" }, Fr = /* @__PURE__ */ Q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: p } = Us(), g = $(0), u = $(!1), v = $(!1), r = $(""), m = $(""), h = $([]), w = $(!1), _ = $(/* @__PURE__ */ new Map()), k = $(/* @__PURE__ */ new Set()), T = $(!1);
    function F() {
      T.value && z(), T.value = !1;
    }
    const f = N(() => n.nodes[g.value]), C = N(() => n.nodes.filter((me) => n.nodeChoices.has(me.node_type)).length), L = N(() => f.value ? _.value.get(f.value.node_type) || [] : []), I = N(() => f.value ? k.value.has(f.value.node_type) : !1);
    _t(f, async (me) => {
      var fe;
      me && ((fe = me.options) != null && fe.length || _.value.has(me.node_type) || k.value.has(me.node_type) || n.nodeChoices.has(me.node_type) || await x(me.node_type));
    }, { immediate: !0 });
    async function x(me) {
      k.value.add(me);
      try {
        const fe = await p(me, 5);
        _.value.set(me, fe);
      } catch {
        _.value.set(me, []);
      } finally {
        k.value.delete(me);
      }
    }
    const K = N(() => n.autoResolvedPackages.filter((me) => !n.skippedPackages.has(me.package_id)).length);
    function B(me) {
      return n.skippedPackages.has(me);
    }
    function W(me) {
      i("package-skip", me);
    }
    const P = N(() => {
      var fe;
      if (!f.value) return "not-found";
      const me = n.nodeChoices.get(f.value.node_type);
      if (me)
        switch (me.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (fe = f.value.options) != null && fe.length ? "ambiguous" : "not-found";
    }), M = N(() => {
      var fe;
      if (!f.value) return;
      const me = n.nodeChoices.get(f.value.node_type);
      if (me)
        switch (me.action) {
          case "install":
            return me.package_id ? `→ ${me.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (fe = f.value.options) != null && fe.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function O(me) {
      me >= 0 && me < n.nodes.length && (g.value = me);
    }
    function ae() {
      f.value && i("mark-optional", f.value.node_type);
    }
    function X() {
      f.value && i("skip", f.value.node_type);
    }
    function H(me) {
      f.value && i("option-selected", f.value.node_type, me);
    }
    function de() {
      f.value && i("clear-choice", f.value.node_type);
    }
    function J() {
      f.value && (r.value = f.value.node_type, h.value = L.value, u.value = !0, Ee(r.value));
    }
    function D() {
      m.value = "", v.value = !0;
    }
    function z() {
      u.value = !1, r.value = "", h.value = [];
    }
    function S() {
      v.value = !1, m.value = "";
    }
    let ie = null;
    function ne() {
      ie && clearTimeout(ie), ie = setTimeout(() => {
        Ee(r.value);
      }, 300);
    }
    async function Ee(me) {
      if (!me.trim()) {
        h.value = [];
        return;
      }
      w.value = !0;
      try {
        h.value = await p(me, 10);
      } catch {
        h.value = [];
      } finally {
        w.value = !1;
      }
    }
    function be(me) {
      f.value && (i("manual-entry", f.value.node_type, me.package_id), z());
    }
    function le(me) {
      f.value && i("manual-entry", f.value.node_type, me.package_id);
    }
    function re() {
      !f.value || !m.value.trim() || (i("manual-entry", f.value.node_type, m.value.trim()), S());
    }
    return (me, fe) => {
      var Oe, Re;
      return s(), o("div", cr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", ur, [
          e("div", mr, [
            fe[6] || (fe[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", vr, a(K.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", fr, [
            (s(!0), o(A, null, se(t.autoResolvedPackages, (ve) => (s(), o("div", {
              key: ve.package_id,
              class: "resolved-package-item"
            }, [
              e("div", gr, [
                e("code", pr, a(ve.package_id), 1),
                e("span", hr, a(ve.node_types_count) + " node type" + a(ve.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", yr, [
                B(ve.package_id) ? (s(), o("span", kr, " SKIPPED ")) : (s(), o("span", wr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (Ge) => W(ve.package_id)
                }, a(B(ve.package_id) ? "Include" : "Skip"), 9, br)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", _r)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(A, { key: 2 }, [
          e("div", $r, [
            fe[7] || (fe[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Cr, a(C.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (s(), E(Os, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: fe[0] || (fe[0] = (ve) => O(g.value - 1)),
            onNext: fe[1] || (fe[1] = (ve) => O(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          f.value ? (s(), o("div", xr, [
            b(Xi, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((Oe = f.value.options) != null && Oe.length),
              options: f.value.options,
              choice: (Re = t.nodeChoices) == null ? void 0 : Re.get(f.value.node_type),
              status: P.value,
              "status-label": M.value,
              "search-results": L.value,
              "is-searching": I.value,
              onMarkOptional: ae,
              onSkip: X,
              onManualEntry: D,
              onSearch: J,
              onOptionSelected: H,
              onClearChoice: de,
              onSearchResultSelected: le
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Sr, [...fe[8] || (fe[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), E(Ve, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: fe[4] || (fe[4] = ze((ve) => T.value = !0, ["self"])),
            onMouseup: ze(F, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: fe[3] || (fe[3] = (ve) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                fe[9] || (fe[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              e("div", Ir, [
                b(rt, {
                  modelValue: r.value,
                  "onUpdate:modelValue": fe[2] || (fe[2] = (ve) => r.value = ve),
                  placeholder: "Search by node type, package name...",
                  onInput: ne
                }, null, 8, ["modelValue"]),
                e("div", Er, [
                  h.value.length > 0 ? (s(), o("div", Mr, [
                    (s(!0), o(A, null, se(h.value, (ve) => (s(), o("div", {
                      key: ve.package_id,
                      class: "node-search-result-item",
                      onClick: (Ge) => be(ve)
                    }, [
                      e("div", Rr, [
                        e("code", zr, a(ve.package_id), 1),
                        ve.match_confidence ? (s(), E(Zt, {
                          key: 0,
                          confidence: ve.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      ve.description ? (s(), o("div", Lr, a(ve.description), 1)) : d("", !0)
                    ], 8, Tr))), 128))
                  ])) : w.value ? (s(), o("div", Pr, "Searching...")) : r.value ? (s(), o("div", Dr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", Nr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), E(Ve, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ze(S, ["self"])
          }, [
            e("div", Ur, [
              e("div", { class: "node-modal-header" }, [
                fe[10] || (fe[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", Or, [
                b(rt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": fe[5] || (fe[5] = (ve) => m.value = ve),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Br, [
                  b(pe, {
                    variant: "secondary",
                    onClick: S
                  }, {
                    default: l(() => [...fe[11] || (fe[11] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(pe, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: re
                  }, {
                    default: l(() => [...fe[12] || (fe[12] = [
                      y(" Add Package ", -1)
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
}), Ar = /* @__PURE__ */ Z(Fr, [["__scopeId", "data-v-281581bc"]]), Vr = { class: "node-info" }, Wr = { class: "node-info-text" }, Gr = { class: "item-body" }, jr = {
  key: 0,
  class: "resolved-state"
}, qr = {
  key: 1,
  class: "multiple-options"
}, Hr = { class: "options-list" }, Kr = ["onClick"], Jr = ["name", "value", "checked", "onChange"], Yr = { class: "option-content" }, Xr = { class: "option-header" }, Qr = { class: "option-filename" }, Zr = { class: "option-meta" }, ed = { class: "option-size" }, td = { class: "option-category" }, sd = { class: "option-path" }, od = { class: "action-buttons" }, nd = {
  key: 2,
  class: "unresolved"
}, ad = { class: "action-buttons" }, ld = /* @__PURE__ */ Q({
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
    const n = t, i = c, p = N(() => !!n.choice);
    N(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), N(() => {
      var r, m;
      return ((m = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const g = N(() => {
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
    function u(r) {
      i("option-selected", r);
    }
    function v(r) {
      if (!r) return "Unknown";
      const m = r / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, m) => (s(), o("div", {
      class: ue(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Vr, [
        e("span", Wr, [
          m[7] || (m[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ue(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Gr, [
        p.value ? (s(), o("div", jr, [
          b(pe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (h) => i("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", qr, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Hr, [
            (s(!0), o(A, null, se(t.options, (h, w) => (s(), o("label", {
              key: h.model.hash,
              class: ue(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (_) => u(w)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (_) => u(w)
              }, null, 40, Jr),
              e("div", Yr, [
                e("div", Xr, [
                  e("span", Qr, a(h.model.filename), 1),
                  b(Zt, {
                    confidence: h.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Zr, [
                  e("span", ed, a(v(h.model.size)), 1),
                  e("span", td, a(h.model.category), 1)
                ]),
                e("div", sd, a(h.model.relative_path), 1)
              ])
            ], 10, Kr))), 128))
          ]),
          e("div", od, [
            b(pe, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (h) => i("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (h) => i("download-url"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (h) => i("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", nd, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", ad, [
            b(pe, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (h) => i("search"))
            }, {
              default: l(() => [...m[13] || (m[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (h) => i("download-url"))
            }, {
              default: l(() => [...m[14] || (m[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (h) => i("mark-optional"))
            }, {
              default: l(() => [...m[15] || (m[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), id = /* @__PURE__ */ Z(ld, [["__scopeId", "data-v-8a82fefa"]]), rd = { class: "model-resolution-step" }, dd = { class: "step-header" }, cd = { class: "step-info" }, ud = { class: "step-title" }, md = { class: "step-description" }, vd = { class: "stat-badge" }, fd = {
  key: 1,
  class: "step-body"
}, gd = {
  key: 2,
  class: "empty-state"
}, pd = { class: "model-search-modal" }, hd = { class: "model-modal-body" }, yd = {
  key: 0,
  class: "model-search-results"
}, wd = ["onClick"], kd = { class: "model-result-header" }, bd = { class: "model-result-filename" }, _d = { class: "model-result-meta" }, $d = { class: "model-result-category" }, Cd = { class: "model-result-size" }, xd = {
  key: 0,
  class: "model-result-path"
}, Sd = {
  key: 1,
  class: "model-no-results"
}, Id = {
  key: 2,
  class: "model-searching"
}, Ed = { class: "model-download-url-modal" }, Md = { class: "model-modal-body" }, Td = { class: "model-input-group" }, Rd = { class: "model-input-group" }, zd = { class: "model-modal-actions" }, Ld = /* @__PURE__ */ Q({
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
      var S;
      return z && ((S = n[z]) == null ? void 0 : S[0]) || null;
    }
    const p = t, g = c, u = $(0), v = $(!1), r = $(!1), m = $(""), h = $(""), w = $(""), _ = $([]), k = $(!1), T = N(() => p.models[u.value]), F = N(() => p.models.some((z) => z.is_download_intent)), f = N(() => p.models.filter(
      (z) => p.modelChoices.has(z.filename) || z.is_download_intent
    ).length), C = N(() => {
      var S;
      if (!T.value) return "";
      const z = i((S = T.value.reference) == null ? void 0 : S.node_type);
      return z ? `${z}/${T.value.filename}` : "";
    }), L = N(() => {
      var S;
      if (!T.value) return "not-found";
      const z = p.modelChoices.get(T.value.filename);
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
      return T.value.is_download_intent ? "download" : (S = T.value.options) != null && S.length ? "ambiguous" : "not-found";
    }), I = N(() => {
      var S, ie;
      if (!T.value) return;
      const z = p.modelChoices.get(T.value.filename);
      if (z)
        switch (z.action) {
          case "select":
            return (S = z.selected_model) != null && S.filename ? `→ ${z.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return T.value.is_download_intent ? "Pending Download" : (ie = T.value.options) != null && ie.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function x(z) {
      z >= 0 && z < p.models.length && (u.value = z);
    }
    function K() {
      T.value && g("mark-optional", T.value.filename);
    }
    function B() {
      T.value && g("skip", T.value.filename);
    }
    function W(z) {
      T.value && g("option-selected", T.value.filename, z);
    }
    function P() {
      T.value && g("clear-choice", T.value.filename);
    }
    function M() {
      T.value && (m.value = T.value.filename, v.value = !0);
    }
    function O() {
      T.value && (h.value = T.value.download_source || "", w.value = T.value.target_path || C.value, r.value = !0);
    }
    function ae() {
      v.value = !1, m.value = "", _.value = [];
    }
    function X() {
      r.value = !1, h.value = "", w.value = "";
    }
    function H() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function de(z) {
      T.value && ae();
    }
    function J() {
      !T.value || !h.value.trim() || (g("download-url", T.value.filename, h.value.trim(), w.value.trim() || void 0), X());
    }
    function D(z) {
      if (!z) return "Unknown";
      const S = z / (1024 * 1024 * 1024);
      return S >= 1 ? `${S.toFixed(2)} GB` : `${(z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (z, S) => {
      var ie, ne, Ee;
      return s(), o("div", rd, [
        e("div", dd, [
          e("div", cd, [
            e("h3", ud, a(F.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", md, a(F.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", vd, a(f.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), E(Os, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: S[0] || (S[0] = (be) => x(u.value - 1)),
          onNext: S[1] || (S[1] = (be) => x(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        T.value ? (s(), o("div", fd, [
          b(id, {
            filename: T.value.filename,
            "node-type": ((ie = T.value.reference) == null ? void 0 : ie.node_type) || "Unknown",
            "has-multiple-options": !!((ne = T.value.options) != null && ne.length),
            options: T.value.options,
            choice: (Ee = t.modelChoices) == null ? void 0 : Ee.get(T.value.filename),
            status: L.value,
            "status-label": I.value,
            onMarkOptional: K,
            onSkip: B,
            onDownloadUrl: O,
            onSearch: M,
            onOptionSelected: W,
            onClearChoice: P
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", gd, [...S[5] || (S[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(Ve, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(ae, ["self"])
          }, [
            e("div", pd, [
              e("div", { class: "model-modal-header" }, [
                S[6] || (S[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ae
                }, "✕")
              ]),
              e("div", hd, [
                b(rt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": S[2] || (S[2] = (be) => m.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: H
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", yd, [
                  (s(!0), o(A, null, se(_.value, (be) => (s(), o("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (le) => de()
                  }, [
                    e("div", kd, [
                      e("code", bd, a(be.filename), 1)
                    ]),
                    e("div", _d, [
                      e("span", $d, a(be.category), 1),
                      e("span", Cd, a(D(be.size)), 1)
                    ]),
                    be.relative_path ? (s(), o("div", xd, a(be.relative_path), 1)) : d("", !0)
                  ], 8, wd))), 128))
                ])) : m.value && !k.value ? (s(), o("div", Sd, ' No models found matching "' + a(m.value) + '" ', 1)) : d("", !0),
                k.value ? (s(), o("div", Id, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), E(Ve, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(X, ["self"])
          }, [
            e("div", Ed, [
              e("div", { class: "model-modal-header" }, [
                S[7] || (S[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              e("div", Md, [
                e("div", Td, [
                  S[8] || (S[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(rt, {
                    modelValue: h.value,
                    "onUpdate:modelValue": S[3] || (S[3] = (be) => h.value = be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Rd, [
                  S[9] || (S[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(rt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": S[4] || (S[4] = (be) => w.value = be),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", zd, [
                  b(pe, {
                    variant: "secondary",
                    onClick: X
                  }, {
                    default: l(() => [...S[10] || (S[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(pe, {
                    variant: "primary",
                    disabled: !h.value.trim() || !w.value.trim(),
                    onClick: J
                  }, {
                    default: l(() => [...S[11] || (S[11] = [
                      y(" Queue Download ", -1)
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
}), Pd = /* @__PURE__ */ Z(Ld, [["__scopeId", "data-v-c6acbada"]]), Dd = { class: "applying-step" }, Nd = {
  key: 0,
  class: "phase-content"
}, Ud = {
  key: 1,
  class: "phase-content"
}, Od = { class: "phase-description" }, Bd = { class: "overall-progress" }, Fd = { class: "progress-bar" }, Ad = { class: "progress-label" }, Vd = { class: "install-list" }, Wd = { class: "install-icon" }, Gd = { key: 0 }, jd = {
  key: 1,
  class: "spinner"
}, qd = { key: 2 }, Hd = { key: 3 }, Kd = {
  key: 0,
  class: "install-error"
}, Jd = {
  key: 2,
  class: "phase-content"
}, Yd = { class: "phase-header" }, Xd = { class: "phase-title" }, Qd = { class: "completion-summary" }, Zd = {
  key: 0,
  class: "summary-item success"
}, ec = { class: "summary-text" }, tc = {
  key: 1,
  class: "summary-item error"
}, sc = { class: "summary-text" }, oc = {
  key: 2,
  class: "failed-list"
}, nc = { class: "failed-node-id" }, ac = { class: "failed-error" }, lc = {
  key: 4,
  class: "summary-item success"
}, ic = {
  key: 5,
  class: "restart-prompt"
}, rc = {
  key: 3,
  class: "phase-content error"
}, dc = { class: "error-message" }, cc = /* @__PURE__ */ Q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = N(() => {
      var m, h;
      const v = ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || c.progress.nodesToInstall.length;
      if (!v) return 0;
      const r = ((h = c.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0;
      return Math.round(r / v * 100);
    }), i = N(() => {
      var v;
      return ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((r) => !r.success)) || [];
    }), p = N(() => i.value.length > 0);
    function g(v, r) {
      var h, w;
      const m = (h = c.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.find((_) => _.node_id === v);
      return m ? m.success ? "complete" : "failed" : ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.currentIndex) === r ? "installing" : "pending";
    }
    function u(v) {
      var r, m;
      return (m = (r = c.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((h) => h.node_id === v)) == null ? void 0 : m.error;
    }
    return (v, r) => {
      var m, h, w, _;
      return s(), o("div", Dd, [
        t.progress.phase === "resolving" ? (s(), o("div", Nd, [...r[2] || (r[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Ud, [
          r[3] || (r[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Od, " Installing " + a((((m = t.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + a(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Bd, [
            e("div", Fd, [
              e("div", {
                class: "progress-fill",
                style: yt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Ad, a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Vd, [
            (s(!0), o(A, null, se(t.progress.nodesToInstall, (k, T) => (s(), o("div", {
              key: k,
              class: ue(["install-item", g(k, T)])
            }, [
              e("span", Wd, [
                g(k, T) === "pending" ? (s(), o("span", Gd, "○")) : g(k, T) === "installing" ? (s(), o("span", jd, "◌")) : g(k, T) === "complete" ? (s(), o("span", qd, "✓")) : g(k, T) === "failed" ? (s(), o("span", Hd, "✗")) : d("", !0)
              ]),
              e("code", null, a(k), 1),
              u(k) ? (s(), o("span", Kd, a(u(k)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Jd, [
          e("div", Yd, [
            e("span", {
              class: ue(["phase-icon", p.value ? "warning" : "success"])
            }, a(p.value ? "⚠" : "✓"), 3),
            e("h3", Xd, a(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Qd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Zd, [
              r[4] || (r[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", ec, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", tc, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", sc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", oc, [
              (s(!0), o(A, null, se(i.value, (k) => (s(), o("div", {
                key: k.node_id,
                class: "failed-item"
              }, [
                e("code", nc, a(k.node_id), 1),
                e("span", ac, a(k.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = (k) => v.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            p.value ? d("", !0) : (s(), o("div", lc, [...r[6] || (r[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            r[8] || (r[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", ic, [
              r[7] || (r[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: r[1] || (r[1] = (k) => v.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", rc, [
          r[9] || (r[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", dc, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), uc = /* @__PURE__ */ Z(cc, [["__scopeId", "data-v-5efaae58"]]), mc = {
  key: 0,
  class: "loading-state"
}, vc = {
  key: 1,
  class: "wizard-content"
}, fc = {
  key: 0,
  class: "step-content"
}, gc = { class: "analysis-summary" }, pc = { class: "analysis-header" }, hc = { class: "summary-description" }, yc = { class: "stats-grid" }, wc = { class: "stat-card" }, kc = { class: "stat-items" }, bc = {
  key: 0,
  class: "stat-item success"
}, _c = { class: "stat-count" }, $c = {
  key: 1,
  class: "stat-item info"
}, Cc = { class: "stat-count" }, xc = {
  key: 2,
  class: "stat-item warning"
}, Sc = { class: "stat-count" }, Ic = {
  key: 3,
  class: "stat-item error"
}, Ec = { class: "stat-count" }, Mc = { class: "stat-card" }, Tc = { class: "stat-items" }, Rc = { class: "stat-item success" }, zc = { class: "stat-count" }, Lc = {
  key: 0,
  class: "stat-item info"
}, Pc = { class: "stat-count" }, Dc = {
  key: 1,
  class: "stat-item warning"
}, Nc = { class: "stat-count" }, Uc = {
  key: 2,
  class: "stat-item warning"
}, Oc = { class: "stat-count" }, Bc = {
  key: 3,
  class: "stat-item error"
}, Fc = { class: "stat-count" }, Ac = {
  key: 0,
  class: "status-message warning"
}, Vc = { class: "status-text" }, Wc = {
  key: 1,
  class: "status-message info"
}, Gc = { class: "status-text" }, jc = {
  key: 2,
  class: "status-message info"
}, qc = { class: "status-text" }, Hc = {
  key: 3,
  class: "status-message warning"
}, Kc = { class: "status-text" }, Jc = {
  key: 4,
  class: "status-message success"
}, Yc = {
  key: 5,
  class: "category-mismatch-section"
}, Xc = { class: "mismatch-list" }, Qc = { class: "mismatch-path" }, Zc = { class: "mismatch-target" }, eu = {
  key: 3,
  class: "step-content"
}, tu = { class: "review-summary" }, su = { class: "review-stats" }, ou = { class: "review-stat" }, nu = { class: "stat-value" }, au = { class: "review-stat" }, lu = { class: "stat-value" }, iu = { class: "review-stat" }, ru = { class: "stat-value" }, du = { class: "review-stat" }, cu = { class: "stat-value" }, uu = {
  key: 0,
  class: "review-section"
}, mu = { class: "section-title" }, vu = { class: "review-items" }, fu = { class: "item-name" }, gu = { class: "item-choice" }, pu = {
  key: 0,
  class: "choice-badge install"
}, hu = {
  key: 1,
  class: "choice-badge skip"
}, yu = {
  key: 1,
  class: "review-section"
}, wu = { class: "section-title" }, ku = { class: "review-items" }, bu = { class: "item-name" }, _u = { class: "item-choice" }, $u = {
  key: 0,
  class: "choice-badge install"
}, Cu = {
  key: 1,
  class: "choice-badge optional"
}, xu = {
  key: 2,
  class: "choice-badge skip"
}, Su = {
  key: 1,
  class: "choice-badge pending"
}, Iu = {
  key: 2,
  class: "review-section"
}, Eu = { class: "section-title" }, Mu = { class: "review-items" }, Tu = { class: "item-name" }, Ru = { class: "item-choice" }, zu = {
  key: 0,
  class: "choice-badge install"
}, Lu = {
  key: 1,
  class: "choice-badge download"
}, Pu = {
  key: 2,
  class: "choice-badge optional"
}, Du = {
  key: 3,
  class: "choice-badge skip"
}, Nu = {
  key: 4,
  class: "choice-badge skip"
}, Uu = {
  key: 1,
  class: "choice-badge download"
}, Ou = {
  key: 2,
  class: "choice-badge pending"
}, Bu = {
  key: 3,
  class: "no-choices"
}, Fu = /* @__PURE__ */ Q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: p, applyResolution: g, installNodes: u, queueModelDownloads: v, progress: r, resetProgress: m } = Us(), { loadPendingDownloads: h } = Gt(), { openFileLocation: w } = Fe(), _ = $(null), k = $(!1), T = $(!1), F = $(null), f = $("analysis"), C = $([]), L = $(/* @__PURE__ */ new Map()), I = $(/* @__PURE__ */ new Map()), x = $(/* @__PURE__ */ new Set()), K = N(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return (W.value || O.value) && Y.push({ id: "nodes", label: "Nodes" }), (P.value || M.value) && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), f.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    }), B = N(() => _.value ? _.value.stats.needs_user_input : !1), W = N(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), P = N(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), M = N(() => _.value ? _.value.stats.download_intents > 0 : !1), O = N(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), ae = N(() => _.value ? _.value.nodes.resolved.length : 0), X = N(() => _.value ? _.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), H = N(() => X.value.length > 0), de = N(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.resolved.filter((V) => !V.is_installed), U = /* @__PURE__ */ new Set();
      return Y.filter((V) => U.has(V.package.package_id) ? !1 : (U.add(V.package.package_id), !0));
    }), J = N(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.resolved.filter((V) => !V.is_installed), U = /* @__PURE__ */ new Map();
      for (const V of Y) {
        const te = U.get(V.package.package_id);
        te ? te.node_types_count++ : U.set(V.package.package_id, {
          package_id: V.package.package_id,
          title: V.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), D = N(() => de.value.filter((Y) => !x.value.has(Y.package.package_id))), z = N(() => _.value ? _.value.models.resolved.filter((Y) => Y.match_type === "download_intent").map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), S = N(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.unresolved.map((V) => ({
        node_type: V.reference.node_type,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), U = _.value.nodes.ambiguous.map((V) => ({
        node_type: V.reference.node_type,
        has_multiple_options: !0,
        options: V.options.map((te) => ({
          package_id: te.package.package_id,
          title: te.package.title,
          match_confidence: te.match_confidence,
          match_type: te.match_type,
          is_installed: te.is_installed
        }))
      }));
      return [...Y, ...U];
    }), ie = N(() => {
      if (!_.value) return [];
      const Y = _.value.models.unresolved.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), U = _.value.models.ambiguous.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        has_multiple_options: !0,
        options: V.options.map((te) => ({
          model: te.model,
          match_confidence: te.match_confidence,
          match_type: te.match_type,
          has_download_source: te.has_download_source
        }))
      }));
      return [...Y, ...U];
    }), ne = N(() => {
      const Y = ie.value, U = z.value.map((V) => ({
        filename: V.filename,
        reference: V.reference,
        is_download_intent: !0,
        resolved_model: V.resolved_model,
        download_source: V.download_source,
        target_path: V.target_path,
        options: void 0
      }));
      return [...Y, ...U];
    }), Ee = N(() => {
      let Y = D.value.length;
      for (const U of L.value.values())
        U.action === "install" && Y++;
      for (const U of I.value.values())
        U.action === "select" && Y++;
      return Y;
    }), be = N(() => {
      let Y = 0;
      for (const U of I.value.values())
        U.action === "download" && Y++;
      return Y;
    }), le = N(() => {
      let Y = 0;
      for (const U of L.value.values())
        U.action === "optional" && Y++;
      for (const U of I.value.values())
        U.action === "optional" && Y++;
      return Y;
    }), re = N(() => {
      let Y = x.value.size;
      for (const U of L.value.values())
        U.action === "skip" && Y++;
      for (const U of I.value.values())
        U.action === "skip" && Y++;
      for (const U of S.value)
        L.value.has(U.node_type) || Y++;
      for (const U of ie.value)
        I.value.has(U.filename) || Y++;
      return Y;
    }), me = N(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, W.value) {
        const U = S.value.length, V = S.value.filter(
          (te) => L.value.has(te.node_type)
        ).length;
        Y.nodes = { resolved: V, total: U };
      }
      if (P.value || M.value) {
        const U = ne.value.length, V = ne.value.filter(
          (te) => I.value.has(te.filename) || te.is_download_intent
        ).length;
        Y.models = { resolved: V, total: U };
      }
      if (Y.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const U = r.totalFiles || 1, V = r.completedFiles.length;
        Y.applying = { resolved: V, total: U };
      }
      return Y;
    });
    function fe(Y) {
      f.value = Y;
    }
    function Oe() {
      const Y = K.value.findIndex((U) => U.id === f.value);
      Y > 0 && (f.value = K.value[Y - 1].id);
    }
    function Re() {
      const Y = K.value.findIndex((U) => U.id === f.value);
      Y < K.value.length - 1 && (f.value = K.value[Y + 1].id);
    }
    async function ve() {
      k.value = !0, F.value = null;
      try {
        _.value = await p(n.workflowName);
      } catch (Y) {
        F.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        k.value = !1;
      }
    }
    function Ge() {
      C.value.includes("analysis") || C.value.push("analysis"), W.value || O.value ? f.value = "nodes" : P.value || M.value ? f.value = "models" : f.value = "review";
    }
    function Se(Y) {
      L.value.set(Y, { action: "optional" });
    }
    function nt(Y) {
      L.value.set(Y, { action: "skip" });
    }
    function et(Y, U) {
      var te;
      const V = S.value.find((ke) => ke.node_type === Y);
      (te = V == null ? void 0 : V.options) != null && te[U] && L.value.set(Y, {
        action: "install",
        package_id: V.options[U].package_id
      });
    }
    function vt(Y, U) {
      L.value.set(Y, {
        action: "install",
        package_id: U
      });
    }
    function xe(Y) {
      L.value.delete(Y);
    }
    function tt(Y) {
      x.value.has(Y) ? x.value.delete(Y) : x.value.add(Y);
    }
    function Xe(Y) {
      I.value.set(Y, { action: "optional" });
    }
    function je(Y) {
      I.value.set(Y, { action: "skip" });
    }
    function ft(Y, U) {
      var te;
      const V = ie.value.find((ke) => ke.filename === Y);
      (te = V == null ? void 0 : V.options) != null && te[U] && I.value.set(Y, {
        action: "select",
        selected_model: V.options[U].model
      });
    }
    function ee(Y, U, V) {
      I.value.set(Y, {
        action: "download",
        url: U,
        target_path: V
      });
    }
    function j(Y) {
      I.value.delete(Y);
    }
    async function Te(Y) {
      try {
        await w(Y);
      } catch (U) {
        F.value = U instanceof Error ? U.message : "Failed to open file location";
      }
    }
    async function ge() {
      var Y;
      T.value = !0, F.value = null, m(), r.phase = "resolving", f.value = "applying";
      try {
        const U = await g(n.workflowName, L.value, I.value, x.value);
        U.models_to_download && U.models_to_download.length > 0 && v(n.workflowName, U.models_to_download);
        const V = [
          ...U.nodes_to_install || [],
          ...D.value.map((ke) => ke.package.package_id)
        ];
        r.nodesToInstall = [...new Set(V)], r.nodesToInstall.length > 0 && await u(n.workflowName), r.phase = "complete", await h();
        const te = r.installError || ((Y = r.nodeInstallProgress) == null ? void 0 : Y.completedNodes.some((ke) => !ke.success));
        !r.needsRestart && !te && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (U) {
        F.value = U instanceof Error ? U.message : "Failed to apply resolution", r.error = F.value, r.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function Me() {
      i("refresh"), i("restart"), i("close");
    }
    async function Ae() {
      var U;
      const Y = ((U = r.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((V) => !V.success).map((V) => V.node_id)) || [];
      if (Y.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, r.nodesToInstall = Y, r.nodesInstalled = [], r.installError = void 0;
        try {
          await u(n.workflowName), r.phase = "complete";
        } catch (V) {
          r.error = V instanceof Error ? V.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Ne(ve), (Y, U) => (s(), E(Ye, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: k.value,
      error: F.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (V) => i("close"))
    }, {
      body: l(() => [
        k.value && !_.value ? (s(), o("div", mc, [...U[2] || (U[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", vc, [
          b(ki, {
            steps: K.value,
            "current-step": f.value,
            "completed-steps": C.value,
            "step-stats": me.value,
            onStepChange: fe
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", fc, [
            e("div", gc, [
              e("div", pc, [
                U[3] || (U[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", hc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", yc, [
                e("div", wc, [
                  U[12] || (U[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", kc, [
                    ae.value > 0 ? (s(), o("div", bc, [
                      U[4] || (U[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", _c, a(ae.value), 1),
                      U[5] || (U[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", $c, [
                      U[6] || (U[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Cc, a(_.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", xc, [
                      U[8] || (U[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Sc, a(_.value.nodes.ambiguous.length), 1),
                      U[9] || (U[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", Ic, [
                      U[10] || (U[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ec, a(_.value.nodes.unresolved.length), 1),
                      U[11] || (U[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Mc, [
                  U[23] || (U[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Tc, [
                    e("div", Rc, [
                      U[13] || (U[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      U[14] || (U[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", Lc, [
                      U[15] || (U[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Pc, a(_.value.stats.download_intents), 1),
                      U[16] || (U[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    H.value ? (s(), o("div", Dc, [
                      U[17] || (U[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Nc, a(X.value.length), 1),
                      U[18] || (U[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", Uc, [
                      U[19] || (U[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Oc, a(_.value.models.ambiguous.length), 1),
                      U[20] || (U[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", Bc, [
                      U[21] || (U[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fc, a(_.value.models.unresolved.length), 1),
                      U[22] || (U[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              B.value ? (s(), o("div", Ac, [
                U[24] || (U[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Vc, a(S.value.length + ie.value.length) + " items need your input", 1)
              ])) : O.value ? (s(), o("div", Wc, [
                U[25] || (U[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(M.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : M.value ? (s(), o("div", jc, [
                U[26] || (U[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", qc, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : H.value ? (s(), o("div", Hc, [
                U[27] || (U[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Kc, a(X.value.length) + " model" + a(X.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Jc, [...U[28] || (U[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              H.value ? (s(), o("div", Yc, [
                U[31] || (U[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Xc, [
                  (s(!0), o(A, null, se(X.value, (V) => {
                    var te, ke;
                    return s(), o("div", {
                      key: V.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Qc, a(V.actual_category) + "/" + a((te = V.model) == null ? void 0 : te.filename), 1),
                      U[30] || (U[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Zc, a((ke = V.expected_categories) == null ? void 0 : ke[0]) + "/", 1),
                      V.file_path ? (s(), E(pe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Qe) => Te(V.file_path)
                      }, {
                        default: l(() => [...U[29] || (U[29] = [
                          y(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]);
                  }), 128))
                ])
              ])) : d("", !0)
            ])
          ])) : d("", !0),
          f.value === "nodes" ? (s(), E(Ar, {
            key: 1,
            nodes: S.value,
            "node-choices": L.value,
            "auto-resolved-packages": J.value,
            "skipped-packages": x.value,
            onMarkOptional: Se,
            onSkip: nt,
            onOptionSelected: et,
            onManualEntry: vt,
            onClearChoice: xe,
            onPackageSkip: tt
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          f.value === "models" ? (s(), E(Pd, {
            key: 2,
            models: ne.value,
            "model-choices": I.value,
            onMarkOptional: Xe,
            onSkip: je,
            onOptionSelected: ft,
            onDownloadUrl: ee,
            onClearChoice: j
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          f.value === "review" ? (s(), o("div", eu, [
            e("div", tu, [
              U[36] || (U[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", su, [
                e("div", ou, [
                  e("span", nu, a(Ee.value), 1),
                  U[32] || (U[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", au, [
                  e("span", lu, a(be.value), 1),
                  U[33] || (U[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", iu, [
                  e("span", ru, a(le.value), 1),
                  U[34] || (U[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", du, [
                  e("span", cu, a(re.value), 1),
                  U[35] || (U[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              J.value.length > 0 ? (s(), o("div", uu, [
                e("h4", mu, "Node Packages (" + a(J.value.length) + ")", 1),
                e("div", vu, [
                  (s(!0), o(A, null, se(J.value, (V) => (s(), o("div", {
                    key: V.package_id,
                    class: "review-item"
                  }, [
                    e("code", fu, a(V.package_id), 1),
                    e("div", gu, [
                      x.value.has(V.package_id) ? (s(), o("span", hu, "Skipped")) : (s(), o("span", pu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              S.value.length > 0 ? (s(), o("div", yu, [
                e("h4", wu, "Node Choices (" + a(S.value.length) + ")", 1),
                e("div", ku, [
                  (s(!0), o(A, null, se(S.value, (V) => {
                    var te, ke, Qe, gt;
                    return s(), o("div", {
                      key: V.node_type,
                      class: "review-item"
                    }, [
                      e("code", bu, a(V.node_type), 1),
                      e("div", _u, [
                        L.value.has(V.node_type) ? (s(), o(A, { key: 0 }, [
                          ((te = L.value.get(V.node_type)) == null ? void 0 : te.action) === "install" ? (s(), o("span", $u, a((ke = L.value.get(V.node_type)) == null ? void 0 : ke.package_id), 1)) : ((Qe = L.value.get(V.node_type)) == null ? void 0 : Qe.action) === "optional" ? (s(), o("span", Cu, " Optional ")) : ((gt = L.value.get(V.node_type)) == null ? void 0 : gt.action) === "skip" ? (s(), o("span", xu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", Su, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              ne.value.length > 0 ? (s(), o("div", Iu, [
                e("h4", Eu, "Models (" + a(ne.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(A, null, se(ne.value, (V) => {
                    var te, ke, Qe, gt, Ct, at, xt;
                    return s(), o("div", {
                      key: V.filename,
                      class: "review-item"
                    }, [
                      e("code", Tu, a(V.filename), 1),
                      e("div", Ru, [
                        I.value.has(V.filename) ? (s(), o(A, { key: 0 }, [
                          ((te = I.value.get(V.filename)) == null ? void 0 : te.action) === "select" ? (s(), o("span", zu, a((Qe = (ke = I.value.get(V.filename)) == null ? void 0 : ke.selected_model) == null ? void 0 : Qe.filename), 1)) : ((gt = I.value.get(V.filename)) == null ? void 0 : gt.action) === "download" ? (s(), o("span", Lu, " Download ")) : ((Ct = I.value.get(V.filename)) == null ? void 0 : Ct.action) === "optional" ? (s(), o("span", Pu, " Optional ")) : ((at = I.value.get(V.filename)) == null ? void 0 : at.action) === "skip" ? (s(), o("span", Du, " Skip ")) : ((xt = I.value.get(V.filename)) == null ? void 0 : xt.action) === "cancel_download" ? (s(), o("span", Nu, " Cancel Download ")) : d("", !0)
                        ], 64)) : V.is_download_intent ? (s(), o("span", Uu, " Pending Download ")) : (s(), o("span", Ou, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              de.value.length === 0 && S.value.length === 0 && ne.value.length === 0 ? (s(), o("div", Bu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          f.value === "applying" ? (s(), E(uc, {
            key: 4,
            progress: _e(r),
            onRestart: Me,
            onRetryFailed: Ae
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), E(pe, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: Oe
        }, {
          default: l(() => [...U[37] || (U[37] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        U[41] || (U[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || _e(r).phase === "complete" || _e(r).phase === "error" ? (s(), E(pe, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (V) => i("close"))
        }, {
          default: l(() => [
            y(a(_e(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "analysis" ? (s(), E(pe, {
          key: 2,
          variant: "primary",
          disabled: k.value,
          onClick: Ge
        }, {
          default: l(() => [...U[38] || (U[38] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        f.value === "nodes" ? (s(), E(pe, {
          key: 3,
          variant: "primary",
          onClick: Re
        }, {
          default: l(() => [
            y(a(P.value || M.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "models" ? (s(), E(pe, {
          key: 4,
          variant: "primary",
          onClick: Re
        }, {
          default: l(() => [...U[39] || (U[39] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        f.value === "review" ? (s(), E(pe, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: ge
        }, {
          default: l(() => [...U[40] || (U[40] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Au = /* @__PURE__ */ Z(Fu, [["__scopeId", "data-v-6276cf1d"]]), Vu = { class: "search-input-wrapper" }, Wu = ["value", "placeholder"], Gu = /* @__PURE__ */ Q({
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
    const n = t, i = c, p = $(null);
    let g;
    function u(r) {
      const m = r.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        i("update:modelValue", m);
      }, n.debounce)) : i("update:modelValue", m);
    }
    function v() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = p.value) == null || r.focus();
    }
    return Ne(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (r, m) => (s(), o("div", Vu, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: ht(v, ["escape"])
      }, null, 40, Wu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), ju = /* @__PURE__ */ Z(Gu, [["__scopeId", "data-v-266f857a"]]), qu = { class: "search-bar" }, Hu = /* @__PURE__ */ Q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", qu, [
      b(ju, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Lt = /* @__PURE__ */ Z(Hu, [["__scopeId", "data-v-3d51bbfd"]]), Ku = { class: "section-group" }, Ju = {
  key: 0,
  class: "section-content"
}, Yu = /* @__PURE__ */ Q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = $(n.initiallyExpanded);
    function g() {
      n.collapsible && (p.value = !p.value, i("toggle", p.value));
    }
    return (u, v) => (s(), o("section", Ku, [
      b(ot, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: g
      }, {
        default: l(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (s(), o("div", Ju, [
        $e(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ Z(Yu, [["__scopeId", "data-v-c48e33ed"]]), Xu = { class: "item-header" }, Qu = {
  key: 0,
  class: "item-icon"
}, Zu = { class: "item-info" }, em = {
  key: 0,
  class: "item-title"
}, tm = {
  key: 1,
  class: "item-subtitle"
}, sm = {
  key: 0,
  class: "item-details"
}, om = {
  key: 1,
  class: "item-actions"
}, nm = /* @__PURE__ */ Q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = N(() => n.status ? `status-${n.status}` : "");
    return (p, g) => (s(), o("div", {
      class: ue(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (u) => t.clickable && p.$emit("click"))
    }, [
      e("div", Xu, [
        p.$slots.icon ? (s(), o("span", Qu, [
          $e(p.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Zu, [
          p.$slots.title ? (s(), o("div", em, [
            $e(p.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          p.$slots.subtitle ? (s(), o("div", tm, [
            $e(p.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", sm, [
        $e(p.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      p.$slots.actions ? (s(), o("div", om, [
        $e(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ Z(nm, [["__scopeId", "data-v-cc435e0e"]]), am = { class: "loading-state" }, lm = { class: "loading-message" }, im = /* @__PURE__ */ Q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", am, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", lm, a(t.message), 1)
    ]));
  }
}), wt = /* @__PURE__ */ Z(im, [["__scopeId", "data-v-ad8436c9"]]), rm = { class: "error-state" }, dm = { class: "error-message" }, cm = /* @__PURE__ */ Q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", rm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", dm, a(t.message), 1),
      t.retry ? (s(), E(oe, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), kt = /* @__PURE__ */ Z(cm, [["__scopeId", "data-v-5397be48"]]), um = /* @__PURE__ */ Q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: p } = Fe();
    Ds();
    const g = $([]), u = $(!1), v = $(null), r = $(""), m = $(!0), h = $(!1), w = $(!1), _ = $(!1), k = $(null), T = N(
      () => g.value.filter((D) => D.status === "broken")
    ), F = N(
      () => g.value.filter((D) => D.status === "new")
    ), f = N(
      () => g.value.filter((D) => D.status === "modified")
    ), C = N(
      () => g.value.filter((D) => D.status === "synced")
    ), L = N(() => {
      if (!r.value.trim()) return g.value;
      const D = r.value.toLowerCase();
      return g.value.filter((z) => z.name.toLowerCase().includes(D));
    }), I = N(
      () => T.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = N(
      () => F.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), K = N(
      () => f.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), B = N(
      () => C.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), W = N(
      () => h.value ? B.value : B.value.slice(0, 5)
    );
    async function P(D = !1) {
      u.value = !0, v.value = null;
      try {
        g.value = await p(D);
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: P });
    function M(D) {
      k.value = D, w.value = !0;
    }
    function O(D) {
      k.value = D, _.value = !0;
    }
    function ae() {
      i("refresh");
    }
    async function X() {
      _.value = !1, await P(!0);
    }
    async function H() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function de(D) {
      const z = [];
      return D.missing_nodes > 0 && z.push(`${D.missing_nodes} missing node${D.missing_nodes > 1 ? "s" : ""}`), D.missing_models > 0 && z.push(`${D.missing_models} missing model${D.missing_models > 1 ? "s" : ""}`), D.models_with_category_mismatch && D.models_with_category_mismatch > 0 && z.push(`${D.models_with_category_mismatch} model${D.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), D.pending_downloads && D.pending_downloads > 0 && z.push(`${D.pending_downloads} pending download${D.pending_downloads > 1 ? "s" : ""}`), z.length > 0 ? z.join(", ") : "Has issues";
    }
    function J(D) {
      const z = D.sync_state === "new" ? "New" : D.sync_state === "modified" ? "Modified" : D.sync_state === "synced" ? "Synced" : D.sync_state;
      return D.has_path_sync_issues && D.models_needing_path_sync && D.models_needing_path_sync > 0 ? `${D.models_needing_path_sync} model path${D.models_needing_path_sync > 1 ? "s" : ""} need${D.models_needing_path_sync === 1 ? "s" : ""} sync` : z || "Unknown";
    }
    return Ne(P), (D, z) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          b(Lt, {
            modelValue: r.value,
            "onUpdate:modelValue": z[0] || (z[0] = (S) => r.value = S),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), E(wt, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), E(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            I.value.length ? (s(), E(Be, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(I.value, (S) => (s(), E(He, {
                  key: S.name,
                  status: "broken"
                }, {
                  icon: l(() => [...z[7] || (z[7] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(de(S)), 1)
                  ]),
                  actions: l(() => [
                    b(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => O(S.name)
                    }, {
                      default: l(() => [...z[8] || (z[8] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(S.name)
                    }, {
                      default: l(() => [...z[9] || (z[9] = [
                        y(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            x.value.length ? (s(), E(Be, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(x.value, (S) => (s(), E(He, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    y(a(S.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    y(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(J(S)), 1)
                  ]),
                  actions: l(() => [
                    b(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(S.name)
                    }, {
                      default: l(() => [...z[10] || (z[10] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            K.value.length ? (s(), E(Be, {
              key: 2,
              title: "MODIFIED",
              count: K.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(K.value, (S) => (s(), E(He, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...z[11] || (z[11] = [
                    y("⚡", -1)
                  ])]),
                  title: l(() => [
                    y(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(J(S)), 1)
                  ]),
                  actions: l(() => [
                    b(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(S.name)
                    }, {
                      default: l(() => [...z[12] || (z[12] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            B.value.length ? (s(), E(Be, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: z[2] || (z[2] = (S) => m.value = S)
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(W.value, (S) => (s(), E(He, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    y(a(S.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    y(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(J(S)), 1)
                  ]),
                  actions: l(() => [
                    b(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(S.name)
                    }, {
                      default: l(() => [...z[13] || (z[13] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !h.value && B.value.length > 5 ? (s(), E(oe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: z[1] || (z[1] = (S) => h.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    y(" View all " + a(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            L.value.length ? d("", !0) : (s(), E(dt, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w.value && k.value ? (s(), E(ri, {
        key: 0,
        "workflow-name": k.value,
        onClose: z[3] || (z[3] = (S) => w.value = !1),
        onResolve: z[4] || (z[4] = (S) => O(k.value)),
        onRefresh: z[5] || (z[5] = (S) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      _.value && k.value ? (s(), E(Au, {
        key: 1,
        "workflow-name": k.value,
        onClose: X,
        onInstall: ae,
        onRefresh: z[6] || (z[6] = (S) => i("refresh")),
        onRestart: H
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), mm = /* @__PURE__ */ Z(um, [["__scopeId", "data-v-fa3f076e"]]), vm = /* @__PURE__ */ Q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: ue(["summary-bar", t.variant])
    }, [
      $e(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ Z(vm, [["__scopeId", "data-v-ccb7816e"]]), fm = {
  key: 0,
  class: "model-details"
}, gm = { class: "detail-section" }, pm = { class: "detail-row" }, hm = { class: "detail-value mono" }, ym = { class: "detail-row" }, wm = { class: "detail-value mono" }, km = { class: "detail-row" }, bm = { class: "detail-value mono" }, _m = { class: "detail-row" }, $m = { class: "detail-value" }, Cm = { class: "detail-row" }, xm = { class: "detail-value" }, Sm = { class: "detail-row" }, Im = { class: "detail-value" }, Em = { class: "detail-section" }, Mm = { class: "section-header" }, Tm = {
  key: 0,
  class: "locations-list"
}, Rm = { class: "location-path mono" }, zm = {
  key: 0,
  class: "location-modified"
}, Lm = ["onClick"], Pm = {
  key: 1,
  class: "empty-state"
}, Dm = { class: "detail-section" }, Nm = { class: "section-header" }, Um = {
  key: 0,
  class: "sources-list"
}, Om = { class: "source-type" }, Bm = ["href"], Fm = ["disabled", "onClick"], Am = {
  key: 1,
  class: "empty-state"
}, Vm = { class: "add-source-form" }, Wm = ["disabled"], Gm = {
  key: 2,
  class: "source-error"
}, jm = {
  key: 3,
  class: "source-success"
}, qm = /* @__PURE__ */ Q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: p, removeModelSource: g, openFileLocation: u } = Fe(), v = $(null), r = $(!0), m = $(null), h = $(""), w = $(!1), _ = $(null), k = $(null), T = $(null), F = $(null);
    let f = null;
    function C(P, M = "success", O = 2e3) {
      f && clearTimeout(f), F.value = { message: P, type: M }, f = setTimeout(() => {
        F.value = null;
      }, O);
    }
    function L(P) {
      if (!P) return "Unknown";
      const M = 1024 * 1024 * 1024, O = 1024 * 1024;
      return P >= M ? `${(P / M).toFixed(1)} GB` : P >= O ? `${(P / O).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function I(P) {
      navigator.clipboard.writeText(P), C("Copied to clipboard!");
    }
    async function x(P) {
      try {
        await u(P), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function K() {
      if (!(!h.value.trim() || !v.value)) {
        w.value = !0, k.value = null, T.value = null;
        try {
          await p(v.value.hash, h.value.trim()), T.value = "Source added successfully!", h.value = "", await W();
        } catch (P) {
          k.value = P instanceof Error ? P.message : "Failed to add source";
        } finally {
          w.value = !1;
        }
      }
    }
    async function B(P) {
      if (v.value) {
        _.value = P, k.value = null, T.value = null;
        try {
          await g(v.value.hash, P), C("Source removed"), await W();
        } catch (M) {
          k.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function W() {
      r.value = !0, m.value = null;
      try {
        v.value = await i(n.identifier);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Ne(W), (P, M) => {
      var O;
      return s(), o(A, null, [
        b(Ye, {
          title: `Model Details: ${((O = v.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: m.value,
          onClose: M[5] || (M[5] = (ae) => P.$emit("close"))
        }, {
          body: l(() => {
            var ae, X, H, de;
            return [
              v.value ? (s(), o("div", fm, [
                e("section", gm, [
                  e("div", pm, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", hm, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (J) => I(v.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", ym, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", wm, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (J) => I(v.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", km, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", bm, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (J) => I(v.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", _m, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", $m, a(L(v.value.size)), 1)
                  ]),
                  e("div", Cm, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", xm, a(v.value.category), 1)
                  ]),
                  e("div", Sm, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Im, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Em, [
                  e("h4", Mm, "Locations (" + a(((ae = v.value.locations) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (X = v.value.locations) != null && X.length ? (s(), o("div", Tm, [
                    (s(!0), o(A, null, se(v.value.locations, (J, D) => (s(), o("div", {
                      key: D,
                      class: "location-item"
                    }, [
                      e("span", Rm, a(J.path), 1),
                      J.modified ? (s(), o("span", zm, "Modified: " + a(J.modified), 1)) : d("", !0),
                      J.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (z) => x(J.path)
                      }, " Open File Location ", 8, Lm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Pm, "No locations found"))
                ]),
                e("section", Dm, [
                  e("h4", Nm, "Download Sources (" + a(((H = v.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                  (de = v.value.sources) != null && de.length ? (s(), o("div", Um, [
                    (s(!0), o(A, null, se(v.value.sources, (J, D) => (s(), o("div", {
                      key: D,
                      class: "source-item"
                    }, [
                      e("span", Om, a(J.type) + ":", 1),
                      e("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(J.url), 9, Bm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === J.url,
                        onClick: (z) => B(J.url)
                      }, a(_.value === J.url ? "..." : "×"), 9, Fm)
                    ]))), 128))
                  ])) : (s(), o("div", Am, " No download sources configured ")),
                  e("div", Vm, [
                    Ue(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (J) => h.value = J),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Tt, h.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !h.value.trim() || w.value,
                      onClick: K
                    }, a(w.value ? "Adding..." : "Add Source"), 9, Wm)
                  ]),
                  k.value ? (s(), o("p", Gm, a(k.value), 1)) : d("", !0),
                  T.value ? (s(), o("p", jm, a(T.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (ae) => P.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(Ve, { to: "body" }, [
          F.value ? (s(), o("div", {
            key: 0,
            class: ue(["toast", F.value.type])
          }, a(F.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), vs = /* @__PURE__ */ Z(qm, [["__scopeId", "data-v-f15cbb56"]]), Hm = /* @__PURE__ */ Q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: p } = Fe(), g = $([]), u = $([]), v = $("production"), r = $(!1), m = $(null), h = $(""), w = $(!1), _ = $(null);
    function k() {
      w.value = !1, n("navigate", "model-index");
    }
    const T = N(
      () => g.value.reduce((W, P) => W + (P.size || 0), 0)
    ), F = N(() => {
      if (!h.value.trim()) return g.value;
      const W = h.value.toLowerCase();
      return g.value.filter((P) => P.filename.toLowerCase().includes(W));
    }), f = N(() => {
      if (!h.value.trim()) return u.value;
      const W = h.value.toLowerCase();
      return u.value.filter((P) => P.filename.toLowerCase().includes(W));
    }), C = N(() => {
      const W = {};
      for (const M of F.value) {
        const O = M.type || "other";
        W[O] || (W[O] = []), W[O].push(M);
      }
      const P = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(W).sort(([M], [O]) => {
        const ae = P.indexOf(M), X = P.indexOf(O);
        return ae >= 0 && X >= 0 ? ae - X : ae >= 0 ? -1 : X >= 0 ? 1 : M.localeCompare(O);
      }).map(([M, O]) => ({ type: M, models: O }));
    });
    function L(W) {
      if (!W) return "Unknown";
      const P = W / (1024 * 1024);
      return P >= 1024 ? `${(P / 1024).toFixed(1)} GB` : `${P.toFixed(0)} MB`;
    }
    function I(W) {
      _.value = W.hash || W.filename;
    }
    function x(W) {
      n("navigate", "model-index");
    }
    function K(W) {
      alert(`Download functionality not yet implemented for ${W}`);
    }
    async function B() {
      r.value = !0, m.value = null;
      try {
        const W = await i();
        g.value = W, u.value = [];
        const P = await p();
        v.value = P.environment || "production";
      } catch (W) {
        m.value = W instanceof Error ? W.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Ne(B), (W, P) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (M) => w.value = !0)
          })
        ]),
        search: l(() => [
          b(Lt, {
            modelValue: h.value,
            "onUpdate:modelValue": P[1] || (P[1] = (M) => h.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), E(wt, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (s(), E(kt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length ? (s(), E(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(g.value.length) + " models • " + a(L(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(A, null, se(C.value, (M) => (s(), E(Be, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(M.models, (O) => (s(), E(He, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...P[4] || (P[4] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(O.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(L(O.size)), 1)
                  ]),
                  details: l(() => [
                    b(De, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(De, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ae) => I(O)
                    }, {
                      default: l(() => [...P[5] || (P[5] = [
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
            f.value.length ? (s(), E(Be, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(f.value, (M) => (s(), E(He, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...P[6] || (P[6] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(M.filename), 1)
                  ]),
                  subtitle: l(() => [...P[7] || (P[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var O;
                    return [
                      b(De, {
                        label: "Required by:",
                        value: ((O = M.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    b(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => K(M.filename)
                    }, {
                      default: l(() => [...P[8] || (P[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => x(M.filename)
                    }, {
                      default: l(() => [...P[9] || (P[9] = [
                        y(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !F.value.length && !f.value.length ? (s(), E(dt, {
              key: 2,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: w.value,
        title: "About Environment Models",
        onClose: P[2] || (P[2] = (M) => w.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            P[10] || (P[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            P[11] || (P[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          b(oe, {
            variant: "primary",
            onClick: k
          }, {
            default: l(() => [...P[12] || (P[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), E(vs, {
        key: 0,
        identifier: _.value,
        onClose: P[3] || (P[3] = (M) => _.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Km = /* @__PURE__ */ Z(Hm, [["__scopeId", "data-v-cb4f12b3"]]), Jm = {
  key: 0,
  class: "indexing-progress"
}, Ym = { class: "progress-info" }, Xm = { class: "progress-label" }, Qm = { class: "progress-count" }, Zm = { class: "progress-bar" }, ev = { class: "modal-content" }, tv = { class: "modal-header" }, sv = { class: "modal-body" }, ov = { class: "input-group" }, nv = { class: "current-path" }, av = { class: "input-group" }, lv = { class: "modal-footer" }, iv = { class: "modal-content" }, rv = { class: "modal-header" }, dv = { class: "modal-body" }, cv = { class: "input-group" }, uv = { class: "input-group" }, mv = { class: "modal-footer" }, vv = /* @__PURE__ */ Q({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: p,
      setModelsDirectory: g
    } = Fe(), { addToQueue: u } = Gt(), v = c, r = $([]), m = $(!1), h = $(!1), w = $(null), _ = $(""), k = $(!1), T = $(null), F = $(!1), f = $(null), C = $(""), L = $(!1), I = $(!1), x = $(""), K = $(""), B = $(null), W = N(
      () => r.value.reduce((z, S) => z + (S.size || 0), 0)
    ), P = N(() => {
      if (!_.value.trim()) return r.value;
      const z = _.value.toLowerCase();
      return r.value.filter((S) => {
        const ie = S, ne = S.sha256 || ie.sha256_hash || "";
        return S.filename.toLowerCase().includes(z) || ne.toLowerCase().includes(z);
      });
    }), M = N(() => {
      const z = {};
      for (const ie of P.value) {
        const ne = ie.type || "other";
        z[ne] || (z[ne] = []), z[ne].push(ie);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([ie], [ne]) => {
        const Ee = S.indexOf(ie), be = S.indexOf(ne);
        return Ee >= 0 && be >= 0 ? Ee - be : Ee >= 0 ? -1 : be >= 0 ? 1 : ie.localeCompare(ne);
      }).map(([ie, ne]) => ({ type: ie, models: ne }));
    });
    function O(z) {
      if (!z) return "Unknown";
      const S = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return z >= S ? `${(z / S).toFixed(1)} GB` : z >= ie ? `${(z / ie).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function ae(z) {
      T.value = z.hash || z.filename;
    }
    async function X() {
      h.value = !0, w.value = null;
      try {
        const z = await i();
        await J(), z.changes > 0 && console.log(`Scan complete: ${z.changes} changes detected`);
      } catch (z) {
        w.value = z instanceof Error ? z.message : "Failed to scan models";
      } finally {
        h.value = !1;
      }
    }
    async function H() {
      if (C.value.trim()) {
        L.value = !0, w.value = null;
        try {
          const z = await g(C.value.trim());
          f.value = z.path, F.value = !1, C.value = "", await J(), console.log(`Directory changed: ${z.models_indexed} models indexed`), v("refresh");
        } catch (z) {
          w.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          L.value = !1;
        }
      }
    }
    function de() {
      if (!x.value.trim() || !K.value.trim()) return;
      const z = K.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: z,
        url: x.value.trim(),
        targetPath: K.value.trim()
      }]), x.value = "", K.value = "", I.value = !1;
    }
    async function J() {
      m.value = !0, w.value = null;
      try {
        r.value = await n();
      } catch (z) {
        w.value = z instanceof Error ? z.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function D() {
      try {
        const z = await p();
        f.value = z.path;
      } catch {
      }
    }
    return Ne(() => {
      J(), D();
    }), (z, S) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[2] || (S[2] = (ie) => k.value = !0)
          }, {
            actions: l(() => [
              b(oe, {
                variant: "primary",
                size: "sm",
                disabled: h.value,
                onClick: X
              }, {
                default: l(() => [
                  y(a(h.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(oe, {
                variant: "primary",
                size: "sm",
                onClick: S[0] || (S[0] = (ie) => F.value = !0)
              }, {
                default: l(() => [...S[15] || (S[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(oe, {
                variant: "primary",
                size: "sm",
                onClick: S[1] || (S[1] = (ie) => I.value = !0)
              }, {
                default: l(() => [...S[16] || (S[16] = [
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
        search: l(() => [
          B.value ? (s(), o("div", Jm, [
            e("div", Ym, [
              e("span", Xm, a(B.value.message), 1),
              e("span", Qm, a(B.value.current) + "/" + a(B.value.total), 1)
            ]),
            e("div", Zm, [
              e("div", {
                class: "progress-fill",
                style: yt({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          b(Lt, {
            modelValue: _.value,
            "onUpdate:modelValue": S[3] || (S[3] = (ie) => _.value = ie),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value || B.value ? (s(), E(wt, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : w.value ? (s(), E(kt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            r.value.length ? (s(), E(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(r.value.length) + " models • " + a(O(W.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(A, null, se(M.value, (ie) => (s(), E(Be, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(ie.models, (ne) => (s(), E(He, {
                  key: ne.sha256 || ne.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...S[17] || (S[17] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(ne.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(O(ne.size)), 1)
                  ]),
                  details: l(() => [
                    b(De, {
                      label: "Hash:",
                      value: ne.hash ? ne.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ee) => ae(ne)
                    }, {
                      default: l(() => [...S[18] || (S[18] = [
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
            P.value.length ? d("", !0) : (s(), E(dt, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: k.value,
        title: "About Workspace Model Index",
        onClose: S[4] || (S[4] = (ie) => k.value = !1)
      }, {
        content: l(() => [...S[19] || (S[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      T.value ? (s(), E(vs, {
        key: 0,
        identifier: T.value,
        onClose: S[5] || (S[5] = (ie) => T.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), E(Ve, { to: "body" }, [
        F.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[9] || (S[9] = ze((ie) => F.value = !1, ["self"]))
        }, [
          e("div", ev, [
            e("div", tv, [
              S[20] || (S[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[6] || (S[6] = (ie) => F.value = !1)
              }, "✕")
            ]),
            e("div", sv, [
              e("div", ov, [
                S[21] || (S[21] = e("label", null, "Current Directory", -1)),
                e("code", nv, a(f.value || "Not set"), 1)
              ]),
              e("div", av, [
                S[22] || (S[22] = e("label", null, "New Directory Path", -1)),
                b(rt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": S[7] || (S[7] = (ie) => C.value = ie),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              S[23] || (S[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", lv, [
              b(pe, {
                variant: "secondary",
                onClick: S[8] || (S[8] = (ie) => F.value = !1)
              }, {
                default: l(() => [...S[24] || (S[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(pe, {
                variant: "primary",
                disabled: !C.value.trim() || L.value,
                loading: L.value,
                onClick: H
              }, {
                default: l(() => [
                  y(a(L.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), E(Ve, { to: "body" }, [
        I.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[14] || (S[14] = ze((ie) => I.value = !1, ["self"]))
        }, [
          e("div", iv, [
            e("div", rv, [
              S[25] || (S[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[10] || (S[10] = (ie) => I.value = !1)
              }, "✕")
            ]),
            e("div", dv, [
              e("div", cv, [
                S[26] || (S[26] = e("label", null, "Download URL", -1)),
                b(rt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": S[11] || (S[11] = (ie) => x.value = ie),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", uv, [
                S[27] || (S[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                b(rt, {
                  modelValue: K.value,
                  "onUpdate:modelValue": S[12] || (S[12] = (ie) => K.value = ie),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              S[28] || (S[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", mv, [
              b(pe, {
                variant: "secondary",
                onClick: S[13] || (S[13] = (ie) => I.value = !1)
              }, {
                default: l(() => [...S[29] || (S[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(pe, {
                variant: "primary",
                disabled: !x.value.trim() || !K.value.trim(),
                onClick: de
              }, {
                default: l(() => [...S[30] || (S[30] = [
                  y(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : d("", !0)
      ]))
    ], 64));
  }
}), fv = /* @__PURE__ */ Z(vv, [["__scopeId", "data-v-73b78d84"]]), gv = { class: "node-details" }, pv = { class: "status-row" }, hv = {
  key: 0,
  class: "detail-row"
}, yv = { class: "value" }, wv = { class: "detail-row" }, kv = { class: "value" }, bv = {
  key: 1,
  class: "detail-row"
}, _v = { class: "value mono" }, $v = {
  key: 2,
  class: "detail-row"
}, Cv = ["href"], xv = {
  key: 3,
  class: "detail-row"
}, Sv = { class: "value mono small" }, Iv = { class: "detail-row" }, Ev = {
  key: 0,
  class: "value"
}, Mv = {
  key: 1,
  class: "workflow-list"
}, Tv = /* @__PURE__ */ Q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = N(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = N(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = N(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, r) => (s(), E(Ye, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (m) => i("close"))
    }, {
      body: l(() => [
        e("div", gv, [
          e("div", pv, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ue(["status-badge", p.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", hv, [
            r[3] || (r[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", yv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", wv, [
            r[4] || (r[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", kv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", bv, [
            r[5] || (r[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", _v, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", $v, [
            r[7] || (r[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              y(a(t.node.repository) + " ", 1),
              r[6] || (r[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Cv)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", xv, [
            r[8] || (r[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Sv, a(t.node.download_url), 1)
          ])) : d("", !0),
          r[10] || (r[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Iv, [
            r[9] || (r[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Ev, " Not used in any workflows ")) : (s(), o("div", Mv, [
              (s(!0), o(A, null, se(t.node.used_in_workflows, (m) => (s(), o("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        b(pe, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (m) => i("close"))
        }, {
          default: l(() => [...r[11] || (r[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Rv = /* @__PURE__ */ Z(Tv, [["__scopeId", "data-v-b342f626"]]), zv = { class: "dialog-message" }, Lv = {
  key: 0,
  class: "dialog-details"
}, Pv = {
  key: 1,
  class: "dialog-warning"
}, Dv = /* @__PURE__ */ Q({
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
    return (c, n) => (s(), E(Ye, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", zv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Lv, [
          (s(!0), o(A, null, se(t.details, (i, p) => (s(), o("div", {
            key: p,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", Pv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        b(pe, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), E(pe, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        b(pe, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
        }, {
          default: l(() => [
            y(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Bs = /* @__PURE__ */ Z(Dv, [["__scopeId", "data-v-3670b9f5"]]), Nv = { class: "mismatch-warning" }, Uv = { class: "version-mismatch" }, Ov = { class: "version-actual" }, Bv = { class: "version-expected" }, Fv = { key: 0 }, Av = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Vv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Wv = /* @__PURE__ */ Q({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: p, trackNodeAsDev: g, installNode: u, uninstallNode: v } = Fe(), r = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = $(!1), h = $(null), w = $(""), _ = $(!1), k = $(null), T = $(null), F = N(() => {
      if (!w.value.trim()) return r.value.nodes;
      const X = w.value.toLowerCase();
      return r.value.nodes.filter(
        (H) => {
          var de, J;
          return H.name.toLowerCase().includes(X) || ((de = H.description) == null ? void 0 : de.toLowerCase().includes(X)) || ((J = H.repository) == null ? void 0 : J.toLowerCase().includes(X));
        }
      );
    }), f = N(
      () => F.value.filter((X) => X.installed && X.tracked)
    ), C = N(
      () => F.value.filter((X) => !X.installed && X.tracked)
    ), L = N(
      () => F.value.filter((X) => X.installed && !X.tracked)
    );
    function I(X) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[X] || X;
    }
    const x = N(() => n.versionMismatches.length > 0);
    function K(X) {
      return !X.used_in_workflows || X.used_in_workflows.length === 0 ? "Not used in any workflows" : X.used_in_workflows.length === 1 ? X.used_in_workflows[0] : `${X.used_in_workflows.length} workflows`;
    }
    function B(X) {
      k.value = X;
    }
    function W() {
      i("open-node-manager");
    }
    function P(X) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${X}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            m.value = !0;
            const H = await g(X);
            H.status === "success" ? (i("toast", `✓ Node "${X}" tracked as development`, "success"), await ae()) : i("toast", `Failed to track node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            i("toast", `Error tracking node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function M(X) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${X}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            m.value = !0;
            const H = await v(X);
            H.status === "success" ? (i("toast", `✓ Node "${X}" removed`, "success"), await ae()) : i("toast", `Failed to remove node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            i("toast", `Error removing node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function O(X) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${X}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            m.value = !0;
            const H = await u(X);
            H.status === "success" ? (i("toast", `✓ Node "${X}" installed`, "success"), await ae()) : i("toast", `Failed to install node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            i("toast", `Error installing node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function ae() {
      m.value = !0, h.value = null;
      try {
        r.value = await p();
      } catch (X) {
        h.value = X instanceof Error ? X.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Ne(ae), (X, H) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: H[0] || (H[0] = (de) => _.value = !0)
          }, {
            actions: l(() => [
              b(oe, {
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: l(() => [...H[7] || (H[7] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          b(Lt, {
            modelValue: w.value,
            "onUpdate:modelValue": H[1] || (H[1] = (de) => w.value = de),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value ? (s(), E(wt, {
            key: 0,
            message: "Loading nodes..."
          })) : h.value ? (s(), E(kt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            r.value.total_count ? (s(), E(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(a(r.value.installed_count) + " installed ", 1),
                r.value.missing_count ? (s(), o(A, { key: 0 }, [
                  y(" • " + a(r.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                r.value.untracked_count ? (s(), o(A, { key: 1 }, [
                  y(" • " + a(r.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            x.value ? (s(), E(Be, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Nv, [
                  H[8] || (H[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(A, null, se(t.versionMismatches, (de) => (s(), E(He, {
                  key: de.name,
                  status: "warning"
                }, {
                  icon: l(() => [...H[9] || (H[9] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(de.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Uv, [
                      e("span", Ov, a(de.actual), 1),
                      H[10] || (H[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Bv, a(de.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    b(oe, {
                      variant: "warning",
                      size: "sm",
                      onClick: H[2] || (H[2] = (J) => i("repair-environment"))
                    }, {
                      default: l(() => [...H[11] || (H[11] = [
                        y(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            L.value.length ? (s(), E(Be, {
              key: 2,
              title: "UNTRACKED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(L.value, (de) => (s(), E(He, {
                  key: de.name,
                  status: "warning"
                }, {
                  icon: l(() => [...H[12] || (H[12] = [
                    y("?", -1)
                  ])]),
                  title: l(() => [
                    y(a(de.name), 1)
                  ]),
                  subtitle: l(() => [...H[13] || (H[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    b(De, {
                      label: "Used by:",
                      value: K(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => B(de)
                    }, {
                      default: l(() => [...H[14] || (H[14] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => P(de.name)
                    }, {
                      default: l(() => [...H[15] || (H[15] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(oe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (J) => M(de.name)
                    }, {
                      default: l(() => [...H[16] || (H[16] = [
                        y(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            f.value.length ? (s(), E(Be, {
              key: 3,
              title: "INSTALLED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(f.value, (de) => (s(), E(He, {
                  key: de.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    y(a(de.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    y(a(de.name), 1)
                  ]),
                  subtitle: l(() => [
                    de.version ? (s(), o("span", Fv, a(de.source === "development" ? "" : "v") + a(de.version), 1)) : (s(), o("span", Av, "version unknown")),
                    e("span", Vv, " • " + a(I(de.source)), 1)
                  ]),
                  details: l(() => [
                    b(De, {
                      label: "Used by:",
                      value: K(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => B(de)
                    }, {
                      default: l(() => [...H[17] || (H[17] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: W
                    }, {
                      default: l(() => [...H[18] || (H[18] = [
                        y(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            C.value.length ? (s(), E(Be, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(C.value, (de) => (s(), E(He, {
                  key: de.name,
                  status: "missing"
                }, {
                  icon: l(() => [...H[19] || (H[19] = [
                    y("!", -1)
                  ])]),
                  title: l(() => [
                    y(a(de.name), 1)
                  ]),
                  subtitle: l(() => [...H[20] || (H[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    b(De, {
                      label: "Required by:",
                      value: K(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => B(de)
                    }, {
                      default: l(() => [...H[21] || (H[21] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => O(de.name)
                    }, {
                      default: l(() => [...H[22] || (H[22] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !f.value.length && !C.value.length && !L.value.length ? (s(), E(dt, {
              key: 5,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: H[4] || (H[4] = (de) => _.value = !1)
      }, {
        content: l(() => [...H[23] || (H[23] = [
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
        actions: l(() => [
          b(oe, {
            variant: "primary",
            onClick: H[3] || (H[3] = (de) => _.value = !1)
          }, {
            default: l(() => [...H[24] || (H[24] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), E(Rv, {
        key: 0,
        node: k.value,
        onClose: H[5] || (H[5] = (de) => k.value = null)
      }, null, 8, ["node"])) : d("", !0),
      T.value ? (s(), E(Bs, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: H[6] || (H[6] = (de) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), Gv = /* @__PURE__ */ Z(Wv, [["__scopeId", "data-v-1555a802"]]);
function Fs(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const jv = { class: "remote-url-display" }, qv = ["title"], Hv = ["title"], Kv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Jv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Yv = /* @__PURE__ */ Q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = $(!1), i = N(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${u}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, u) => (s(), o("div", jv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, qv),
      e("button", {
        class: ue(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Jv, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Kv, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Hv)
    ]));
  }
}), Xv = /* @__PURE__ */ Z(Yv, [["__scopeId", "data-v-7768a58d"]]), Qv = { class: "remote-title" }, Zv = {
  key: 0,
  class: "default-badge"
}, ef = {
  key: 1,
  class: "sync-badge"
}, tf = {
  key: 0,
  class: "ahead"
}, sf = {
  key: 1,
  class: "behind"
}, of = {
  key: 1,
  class: "synced"
}, nf = ["href"], af = {
  key: 1,
  class: "remote-url-text"
}, lf = /* @__PURE__ */ Q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = N(() => c.fetchingRemote === c.remote.name), i = N(() => c.remote.is_default), p = N(() => c.syncStatus && c.syncStatus.behind > 0), g = N(() => c.syncStatus && c.syncStatus.ahead > 0), u = N(() => c.remote.push_url !== c.remote.fetch_url), v = N(() => {
      const m = c.remote.fetch_url, h = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return h ? `https://${h[1]}/${h[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), r = N(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, h) => (s(), E(He, {
      status: i.value ? "synced" : void 0
    }, Wt({
      icon: l(() => [
        y(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Qv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Zv, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", ef, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(A, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", tf, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", sf, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", of, "✓ synced"))
          ])) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        v.value ? (s(), o("a", {
          key: 0,
          href: v.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: h[0] || (h[0] = ze(() => {
          }, ["stop"]))
        }, a(r.value), 9, nf)) : (s(), o("span", af, a(r.value), 1))
      ]),
      actions: l(() => [
        b(oe, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: h[1] || (h[1] = (w) => m.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...h[6] || (h[6] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(oe, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: h[2] || (h[2] = (w) => m.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(oe, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: h[3] || (h[3] = (w) => m.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(oe, {
          variant: "secondary",
          size: "xs",
          onClick: h[4] || (h[4] = (w) => m.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...h[7] || (h[7] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (s(), E(oe, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: h[5] || (h[5] = (w) => m.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...h[8] || (h[8] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(De, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              b(Xv, {
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
}), rf = /* @__PURE__ */ Z(lf, [["__scopeId", "data-v-8310f3a8"]]), df = ["for"], cf = {
  key: 0,
  class: "base-form-field-required"
}, uf = { class: "base-form-field-input" }, mf = {
  key: 1,
  class: "base-form-field-error"
}, vf = {
  key: 2,
  class: "base-form-field-hint"
}, ff = /* @__PURE__ */ Q({
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
    const c = t, n = N(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, p) => (s(), o("div", {
      class: ue(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (s(), o("span", cf, "*")) : d("", !0)
      ], 8, df)) : d("", !0),
      e("div", uf, [
        $e(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", mf, a(t.error), 1)) : t.hint ? (s(), o("span", vf, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), os = /* @__PURE__ */ Z(ff, [["__scopeId", "data-v-9a1cf296"]]), gf = { class: "remote-form" }, pf = { class: "form-header" }, hf = { class: "form-body" }, yf = {
  key: 0,
  class: "form-error"
}, wf = { class: "form-actions" }, kf = /* @__PURE__ */ Q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = $({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = $(!1), u = $(null);
    _t(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = N(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!v.value || g.value)) {
        u.value = null, g.value = !0;
        try {
          i("submit", p.value);
        } catch (m) {
          u.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (m, h) => (s(), o("div", gf, [
      e("div", pf, [
        b(ot, null, {
          default: l(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", hf, [
        b(os, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            b(rt, {
              modelValue: p.value.name,
              "onUpdate:modelValue": h[0] || (h[0] = (w) => p.value.name = w),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(os, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            b(rt, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": h[1] || (h[1] = (w) => p.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(os, { label: "Push URL (optional)" }, {
          default: l(() => [
            b(rt, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": h[2] || (h[2] = (w) => p.value.pushUrl = w),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", yf, a(u.value), 1)) : d("", !0)
      ]),
      e("div", wf, [
        b(oe, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: g.value,
          onClick: r
        }, {
          default: l(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(oe, {
          variant: "ghost",
          size: "md",
          onClick: h[3] || (h[3] = (w) => m.$emit("cancel"))
        }, {
          default: l(() => [...h[4] || (h[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), bf = /* @__PURE__ */ Z(kf, [["__scopeId", "data-v-56021b18"]]), _f = { class: "conflict-summary-box" }, $f = { class: "summary-header" }, Cf = { class: "summary-text" }, xf = { key: 0 }, Sf = {
  key: 1,
  class: "all-resolved"
}, If = { class: "summary-progress" }, Ef = { class: "progress-bar" }, Mf = { class: "progress-text" }, Tf = /* @__PURE__ */ Q({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = N(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, p) => (s(), o("div", _f, [
      e("div", $f, [
        p[0] || (p[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Cf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", xf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Sf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", If, [
        e("div", Ef, [
          e("div", {
            class: "progress-fill",
            style: yt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Mf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Rf = /* @__PURE__ */ Z(Tf, [["__scopeId", "data-v-4e9e6cc9"]]), zf = { class: "modal-header" }, Lf = { class: "modal-title" }, Pf = { class: "modal-body" }, Df = {
  key: 0,
  class: "error-box"
}, Nf = {
  key: 0,
  class: "error-hint"
}, Uf = {
  key: 1,
  class: "loading-state"
}, Of = { class: "commit-summary" }, Bf = {
  key: 0,
  class: "changes-section"
}, Ff = {
  key: 0,
  class: "change-group",
  open: ""
}, Af = { class: "change-count" }, Vf = { class: "change-list" }, Wf = {
  key: 0,
  class: "conflict-badge"
}, Gf = {
  key: 1,
  class: "change-group"
}, jf = { class: "change-count" }, qf = { class: "change-list" }, Hf = {
  key: 2,
  class: "change-group"
}, Kf = { class: "change-count" }, Jf = { class: "change-list" }, Yf = {
  key: 2,
  class: "strategy-section"
}, Xf = { class: "radio-group" }, Qf = { class: "radio-option" }, Zf = { class: "radio-option" }, eg = { class: "radio-option" }, tg = {
  key: 3,
  class: "up-to-date"
}, sg = { class: "modal-actions" }, Ss = "comfygit.pullModelStrategy", og = /* @__PURE__ */ Q({
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
    const n = t, i = c, p = $(localStorage.getItem(Ss) || "skip");
    _t(p, (f) => {
      localStorage.setItem(Ss, f);
    });
    const g = N(() => {
      var f;
      return ((f = n.error) == null ? void 0 : f.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = N(() => {
      if (!n.preview) return 0;
      const f = n.preview.changes.workflows;
      return f.added.length + f.modified.length + f.deleted.length;
    }), v = N(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = N(() => {
      var f;
      return u.value > 0 || v.value > 0 || (((f = n.preview) == null ? void 0 : f.changes.models.count) || 0) > 0;
    }), m = N(() => n.preview && Fs(n.preview) ? n.preview : null), h = N(() => {
      var f;
      return ((f = m.value) == null ? void 0 : f.workflow_conflicts.length) ?? 0;
    }), w = N(() => {
      var f;
      return ((f = n.conflictResolutions) == null ? void 0 : f.size) ?? 0;
    }), _ = N(
      () => h.value > 0 && w.value === h.value
    ), k = N(() => !(!n.preview || n.preview.has_uncommitted_changes || m.value && !_.value));
    function T(f) {
      if (!m.value) return !1;
      const C = f.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((L) => L.name === C);
    }
    function F(f) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: p.value, force: f, resolutions: C });
    }
    return (f, C) => {
      var L, I;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (x) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", zf, [
              e("h3", Lf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (x) => f.$emit("close"))
              }, "✕")
            ]),
            e("div", Pf, [
              t.error ? (s(), o("div", Df, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", Nf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Uf, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (L = t.preview) != null && L.has_uncommitted_changes ? (s(), o(A, { key: 2 }, [
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
                e("div", Of, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                r.value ? (s(), o("div", Bf, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", Ff, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Af, a(u.value) + " changes", 1)
                    ]),
                    e("div", Vf, [
                      (s(!0), o(A, null, se(t.preview.changes.workflows.added, (x) => (s(), o("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128)),
                      (s(!0), o(A, null, se(t.preview.changes.workflows.modified, (x) => (s(), o("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(x) + " ", 1),
                        T(x) ? (s(), o("span", Wf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(A, null, se(t.preview.changes.workflows.deleted, (x) => (s(), o("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  v.value > 0 ? (s(), o("details", Gf, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", jf, a(v.value) + " to install", 1)
                    ]),
                    e("div", qf, [
                      (s(!0), o(A, null, se(t.preview.changes.nodes.to_install, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", Hf, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Kf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Jf, [
                      (s(!0), o(A, null, se(t.preview.changes.models.referenced, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item"
                      }, a(x), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                m.value ? (s(), E(Rf, {
                  key: 1,
                  "conflict-count": h.value,
                  "resolved-count": w.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Yf, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Xf, [
                    e("label", Qf, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (x) => p.value = x),
                        value: "all"
                      }, null, 512), [
                        [Kt, p.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Zf, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (x) => p.value = x),
                        value: "required"
                      }, null, 512), [
                        [Kt, p.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", eg, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (x) => p.value = x),
                        value: "skip"
                      }, null, 512), [
                        [Kt, p.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", tg, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", sg, [
              b(oe, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (x) => f.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(A, { key: 0 }, [
                b(oe, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (x) => F(!1))
                }, {
                  default: l(() => [...C[30] || (C[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(oe, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (x) => F(!0))
                }, {
                  default: l(() => [...C[31] || (C[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = t.preview) != null && I.has_uncommitted_changes ? (s(), E(oe, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (x) => F(!0))
              }, {
                default: l(() => [...C[32] || (C[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(A, { key: 2 }, [
                m.value && !_.value ? (s(), E(oe, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (x) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    y(" Resolve Conflicts (" + a(w.value) + "/" + a(h.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(oe, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !k.value,
                  onClick: C[9] || (C[9] = (x) => F(!1))
                }, {
                  default: l(() => [...C[33] || (C[33] = [
                    y(" Pull Changes ", -1)
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
}), ng = /* @__PURE__ */ Z(og, [["__scopeId", "data-v-300c7b2f"]]), ag = { class: "modal-header" }, lg = { class: "modal-title" }, ig = { class: "modal-body" }, rg = {
  key: 0,
  class: "loading-state"
}, dg = {
  key: 1,
  class: "warning-box"
}, cg = {
  key: 0,
  class: "commits-section"
}, ug = { class: "commit-list" }, mg = { class: "commit-hash" }, vg = { class: "commit-message" }, fg = { class: "commit-date" }, gg = { class: "force-option" }, pg = { class: "checkbox-option" }, hg = { class: "commit-summary" }, yg = {
  key: 0,
  class: "commits-section"
}, wg = { class: "commit-list" }, kg = { class: "commit-hash" }, bg = { class: "commit-message" }, _g = { class: "commit-date" }, $g = {
  key: 1,
  class: "up-to-date"
}, Cg = { class: "modal-actions" }, xg = /* @__PURE__ */ Q({
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
    const n = c, i = $(!1);
    function p(g) {
      n("push", { force: g });
    }
    return (g, u) => {
      var v, r, m;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (h) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", ag, [
              e("h3", lg, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (h) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", ig, [
              t.loading ? (s(), o("div", rg, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (v = t.preview) != null && v.has_uncommitted_changes ? (s(), o("div", dg, [...u[9] || (u[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (r = t.preview) != null && r.remote_has_new_commits ? (s(), o(A, { key: 2 }, [
                u[13] || (u[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", cg, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", ug, [
                    (s(!0), o(A, null, se(t.preview.commits, (h) => (s(), o("div", {
                      key: h.hash,
                      class: "commit-item"
                    }, [
                      e("span", mg, a(h.short_hash || h.hash.slice(0, 7)), 1),
                      e("span", vg, a(h.message), 1),
                      e("span", fg, a(h.date_relative || h.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", gg, [
                  e("label", pg, [
                    Ue(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (h) => i.value = h)
                    }, null, 512), [
                      [Xt, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", hg, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", yg, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", wg, [
                    (s(!0), o(A, null, se(t.preview.commits, (h) => (s(), o("div", {
                      key: h.hash,
                      class: "commit-item"
                    }, [
                      e("span", kg, a(h.short_hash || h.hash.slice(0, 7)), 1),
                      e("span", bg, a(h.message), 1),
                      e("span", _g, a(h.date_relative || h.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", $g, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", Cg, [
              b(oe, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (h) => g.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = t.preview) != null && m.remote_has_new_commits ? (s(), o(A, { key: 0 }, [
                b(oe, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (h) => g.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                b(oe, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (h) => p(!0))
                }, {
                  default: l(() => [...u[19] || (u[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(oe, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (h) => p(!1))
              }, {
                default: l(() => [...u[20] || (u[20] = [
                  y(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Sg = /* @__PURE__ */ Z(xg, [["__scopeId", "data-v-bc6ded53"]]), Ig = { class: "resolution-choice-group" }, Eg = ["disabled"], Mg = ["disabled"], Tg = /* @__PURE__ */ Q({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Ig, [
      e("button", {
        class: ue(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Eg),
      e("button", {
        class: ue(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Mg)
    ]));
  }
}), Rg = /* @__PURE__ */ Z(Tg, [["__scopeId", "data-v-985715ed"]]), zg = { class: "conflict-header" }, Lg = { class: "conflict-info" }, Pg = { class: "workflow-name" }, Dg = { class: "conflict-description" }, Ng = {
  key: 0,
  class: "resolved-badge"
}, Ug = { class: "resolved-text" }, Og = { class: "conflict-hashes" }, Bg = { class: "hash-item" }, Fg = { class: "hash-item" }, Ag = { class: "conflict-actions" }, Vg = /* @__PURE__ */ Q({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = $(n.resolution);
    _t(() => n.resolution, (r) => {
      p.value = r;
    }), _t(p, (r) => {
      r && i("resolve", r);
    });
    const g = N(() => p.value !== null), u = N(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), v = N(() => {
      switch (p.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (r, m) => {
      var h, w;
      return s(), o("div", {
        class: ue(["conflict-item", { resolved: g.value }])
      }, [
        e("div", zg, [
          m[2] || (m[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Lg, [
            e("code", Pg, a(t.conflict.name) + ".json", 1),
            e("div", Dg, a(u.value), 1)
          ]),
          g.value ? (s(), o("div", Ng, [
            m[1] || (m[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Ug, a(v.value), 1)
          ])) : d("", !0)
        ]),
        e("div", Og, [
          e("span", Bg, [
            m[3] || (m[3] = y("Your: ", -1)),
            e("code", null, a(((h = t.conflict.base_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Fg, [
            m[4] || (m[4] = y("Theirs: ", -1)),
            e("code", null, a(((w = t.conflict.target_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Ag, [
          b(Rg, {
            modelValue: p.value,
            "onUpdate:modelValue": m[0] || (m[0] = (_) => p.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Wg = /* @__PURE__ */ Z(Vg, [["__scopeId", "data-v-506d3bbf"]]), Gg = { class: "resolution-content" }, jg = {
  key: 0,
  class: "error-box"
}, qg = { class: "resolution-header" }, Hg = { class: "header-stats" }, Kg = { class: "stat" }, Jg = { class: "stat-value" }, Yg = { class: "stat resolved" }, Xg = { class: "stat-value" }, Qg = {
  key: 0,
  class: "stat pending"
}, Zg = { class: "stat-value" }, ep = { class: "conflicts-list" }, tp = {
  key: 1,
  class: "all-resolved-message"
}, sp = /* @__PURE__ */ Q({
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
    const n = t, i = c, p = N(() => n.resolutions.size), g = N(() => n.workflowConflicts.length - p.value), u = N(() => p.value === n.workflowConflicts.length), v = N(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(_) {
      const k = n.resolutions.get(_);
      return (k == null ? void 0 : k.resolution) ?? null;
    }
    function m(_, k) {
      i("resolve", _, k);
    }
    function h() {
      i("close");
    }
    function w() {
      i("apply");
    }
    return (_, k) => (s(), E(Ye, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: h
    }, {
      body: l(() => [
        e("div", Gg, [
          t.error ? (s(), o("div", jg, [
            k[1] || (k[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              k[0] || (k[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", qg, [
            e("div", Hg, [
              e("div", Kg, [
                e("span", Jg, a(t.workflowConflicts.length), 1),
                k[2] || (k[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Yg, [
                e("span", Xg, a(p.value), 1),
                k[3] || (k[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", Qg, [
                e("span", Zg, a(g.value), 1),
                k[4] || (k[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            k[5] || (k[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", ep, [
            (s(!0), o(A, null, se(t.workflowConflicts, (T) => (s(), E(Wg, {
              key: T.name,
              conflict: T,
              resolution: r(T.name),
              onResolve: (F) => m(T.name, F)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", tp, [
            k[6] || (k[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(v.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        b(pe, {
          variant: "secondary",
          onClick: h
        }, {
          default: l(() => [...k[7] || (k[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k[8] || (k[8] = e("div", { class: "footer-spacer" }, null, -1)),
        b(pe, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: w
        }, {
          default: l(() => [
            y(a(v.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), op = /* @__PURE__ */ Z(sp, [["__scopeId", "data-v-c58d150d"]]), np = { class: "node-conflict-item" }, ap = { class: "node-header" }, lp = { class: "node-name" }, ip = { class: "node-id" }, rp = { class: "version-comparison" }, dp = { class: "version yours" }, cp = { class: "version theirs" }, up = { class: "chosen-version" }, mp = { class: "chosen" }, vp = { class: "chosen-reason" }, fp = { class: "affected-workflows" }, gp = { class: "wf-source" }, pp = { class: "wf-version" }, hp = /* @__PURE__ */ Q({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", np, [
      e("div", ap, [
        e("code", lp, a(t.conflict.node_name), 1),
        e("span", ip, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", rp, [
        e("div", dp, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", cp, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", up, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", mp, a(t.conflict.chosen_version), 1),
        e("span", vp, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", fp, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(A, null, se(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", gp, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", pp, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), yp = /* @__PURE__ */ Z(hp, [["__scopeId", "data-v-8b626725"]]), wp = { class: "validation-content" }, kp = {
  key: 0,
  class: "compatible-message"
}, bp = { class: "conflicts-list" }, _p = {
  key: 2,
  class: "warnings-section"
}, $p = /* @__PURE__ */ Q({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = N(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, u) => (s(), E(Ye, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (v) => i("cancel"))
    }, {
      body: l(() => [
        e("div", wp, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", kp, [
            u[5] || (u[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              u[4] || (u[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(A, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", bp, [
              (s(!0), o(A, null, se(t.validation.node_conflicts, (v) => (s(), E(yp, {
                key: v.node_id,
                conflict: v
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", _p, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(A, null, se(t.validation.warnings, (v, r) => (s(), o("li", { key: r }, a(v), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        b(pe, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (v) => i("cancel"))
        }, {
          default: l(() => [...u[9] || (u[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        b(pe, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (v) => i("goBack"))
        }, {
          default: l(() => [...u[10] || (u[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(pe, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (v) => i("proceed"))
        }, {
          default: l(() => [
            y(a(p.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Cp = /* @__PURE__ */ Z($p, [["__scopeId", "data-v-fefd26ed"]]), xp = { key: 0 }, Sp = /* @__PURE__ */ Q({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: p,
      removeRemote: g,
      updateRemoteUrl: u,
      fetchRemote: v,
      getRemoteSyncStatus: r,
      getPullPreview: m,
      pullFromRemote: h,
      getPushPreview: w,
      pushToRemote: _,
      validateMerge: k
    } = Fe(), T = $([]), F = $(null), f = $({}), C = $(!1), L = $(null), I = $(""), x = $(!1), K = $(null), B = $(!1), W = $("add"), P = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = N(() => {
      if (!I.value.trim()) return T.value;
      const V = I.value.toLowerCase();
      return T.value.filter(
        (te) => te.name.toLowerCase().includes(V) || te.fetch_url.toLowerCase().includes(V) || te.push_url.toLowerCase().includes(V)
      );
    });
    async function O() {
      C.value = !0, L.value = null;
      try {
        const V = await i();
        T.value = V.remotes, F.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (te) => {
            const ke = await r(te.name);
            ke && (f.value[te.name] = ke);
          })
        );
      } catch (V) {
        L.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function ae() {
      W.value = "add", P.value = { name: "", fetchUrl: "", pushUrl: "" }, B.value = !0;
    }
    function X(V) {
      const te = T.value.find((ke) => ke.name === V);
      te && (W.value = "edit", P.value = {
        name: te.name,
        fetchUrl: te.fetch_url,
        pushUrl: te.push_url
      }, B.value = !0);
    }
    async function H(V) {
      try {
        W.value === "add" ? await p(V.name, V.fetchUrl) : await u(V.name, V.fetchUrl, V.pushUrl || void 0), B.value = !1, await O();
      } catch (te) {
        L.value = te instanceof Error ? te.message : "Operation failed";
      }
    }
    function de() {
      B.value = !1, P.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(V) {
      K.value = V;
      try {
        await v(V);
        const te = await r(V);
        te && (f.value[V] = te), n("toast", `✓ Fetched from ${V}`, "success");
      } catch (te) {
        n("toast", te instanceof Error ? te.message : "Fetch failed", "error");
      } finally {
        K.value = null;
      }
    }
    async function D(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await g(V), await O();
        } catch (te) {
          L.value = te instanceof Error ? te.message : "Failed to remove remote";
        }
    }
    function z() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const S = $("idle"), ie = N(() => S.value === "pull_preview"), ne = N(
      () => S.value === "resolving" || S.value === "validating"
    ), Ee = N(
      () => S.value === "validation_review" || S.value === "executing"
    ), be = $(!1), le = $(null), re = $(!1), me = $(null), fe = $(!1), Oe = $(null), Re = $(null), ve = $(/* @__PURE__ */ new Map()), Ge = $(null), Se = $(null), nt = N(() => Oe.value && Fs(Oe.value) ? Oe.value : null);
    async function et(V) {
      me.value = V, S.value = "pull_preview", fe.value = !0, Oe.value = null, Re.value = null;
      try {
        Oe.value = await m(V);
      } catch (te) {
        Re.value = te instanceof Error ? te.message : "Failed to load pull preview";
      } finally {
        fe.value = !1;
      }
    }
    function vt() {
      S.value = "idle", Oe.value = null, Re.value = null, me.value = null;
    }
    async function xe(V) {
      if (!me.value) return;
      S.value = "executing", Re.value = null;
      const te = me.value;
      try {
        const ke = await h(te, V);
        if (ke.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        ge(), S.value = "idle", n("toast", `✓ Pulled from ${te}`, "success"), await O();
      } catch (ke) {
        Re.value = ke instanceof Error ? ke.message : "Pull failed", S.value = "pull_preview";
      }
    }
    function tt() {
      nt.value && (S.value = "resolving", Se.value = null);
    }
    function Xe(V, te) {
      ve.value.set(V, { name: V, resolution: te });
    }
    function je() {
      S.value = "pull_preview";
    }
    async function ft() {
      S.value = "validating", Se.value = null;
      try {
        const V = Array.from(ve.value.values());
        Ge.value = await k(me.value, V), S.value = "validation_review";
      } catch (V) {
        Se.value = V instanceof Error ? V.message : "Validation failed", S.value = "resolving";
      }
    }
    async function ee() {
      S.value = "executing";
      const V = me.value;
      try {
        const te = Array.from(ve.value.values()), ke = await h(V, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: te
        });
        if (ke.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        ge(), S.value = "idle", n("toast", `✓ Pulled from ${V}`, "success"), await O();
      } catch (te) {
        Re.value = te instanceof Error ? te.message : "Pull failed", S.value = "validation_review";
      }
    }
    function j() {
      S.value = "resolving";
    }
    function Te() {
      ge(), S.value = "idle";
    }
    function ge() {
      ve.value.clear(), Ge.value = null, Se.value = null, Re.value = null, Oe.value = null, me.value = null;
    }
    async function Me(V) {
      me.value = V, be.value = !0, fe.value = !0, le.value = null;
      try {
        le.value = await w(V);
      } catch (te) {
        L.value = te instanceof Error ? te.message : "Failed to load push preview";
      } finally {
        fe.value = !1;
      }
    }
    function Ae() {
      be.value = !1, le.value = null, me.value = null;
    }
    async function Y(V) {
      if (!me.value) return;
      re.value = !0;
      const te = me.value;
      try {
        await _(te, V), Ae(), n("toast", `✓ Pushed to ${te}`, "success"), await O();
      } catch (ke) {
        n("toast", ke instanceof Error ? ke.message : "Push failed", "error");
      } finally {
        re.value = !1;
      }
    }
    function U() {
      const V = me.value;
      Ae(), V && et(V);
    }
    return Ne(O), (V, te) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: te[0] || (te[0] = (ke) => x.value = !0)
          }, {
            actions: l(() => [
              B.value ? d("", !0) : (s(), E(oe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ae
              }, {
                default: l(() => [...te[3] || (te[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          B.value ? d("", !0) : (s(), E(Lt, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": te[1] || (te[1] = (ke) => I.value = ke),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          C.value ? (s(), E(wt, {
            key: 0,
            message: "Loading remotes..."
          })) : L.value ? (s(), E(kt, {
            key: 1,
            message: L.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            B.value ? (s(), E(bf, {
              key: 0,
              mode: W.value,
              "remote-name": P.value.name,
              "fetch-url": P.value.fetchUrl,
              "push-url": P.value.pushUrl,
              onSubmit: H,
              onCancel: de
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            T.value.length && !B.value ? (s(), E(jt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                F.value ? (s(), o("span", xp, " • Tracking: " + a(F.value.remote) + "/" + a(F.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            M.value.length && !B.value ? (s(), E(Be, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(M.value, (ke) => (s(), E(rf, {
                  key: ke.name,
                  remote: ke,
                  "sync-status": f.value[ke.name],
                  "fetching-remote": K.value,
                  onFetch: J,
                  onEdit: X,
                  onRemove: D,
                  onPull: et,
                  onPush: Me
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !M.value.length && !B.value ? (s(), E(dt, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                b(oe, {
                  variant: "primary",
                  onClick: ae
                }, {
                  default: l(() => [...te[4] || (te[4] = [
                    y(" Add Your First Remote ", -1)
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
      b(mt, {
        show: x.value,
        title: "About Git Remotes",
        onClose: te[2] || (te[2] = (ke) => x.value = !1)
      }, {
        content: l(() => [...te[5] || (te[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          b(oe, {
            variant: "link",
            onClick: z
          }, {
            default: l(() => [...te[6] || (te[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(ng, {
        show: ie.value,
        "remote-name": me.value || "",
        preview: Oe.value,
        loading: fe.value,
        pulling: S.value === "executing",
        error: Re.value,
        "conflict-resolutions": ve.value,
        onClose: vt,
        onPull: xe,
        onOpenConflictResolution: tt
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(Sg, {
        show: be.value,
        "remote-name": me.value || "",
        preview: le.value,
        loading: fe.value,
        pushing: re.value,
        onClose: Ae,
        onPush: Y,
        onPullFirst: U
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ne.value && nt.value ? (s(), E(op, {
        key: 0,
        "workflow-conflicts": nt.value.workflow_conflicts,
        resolutions: ve.value,
        "operation-type": "pull",
        validating: S.value === "validating",
        error: Se.value,
        onClose: je,
        onResolve: Xe,
        onApply: ft
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Ee.value && Ge.value ? (s(), E(Cp, {
        key: 1,
        validation: Ge.value,
        "operation-type": "pull",
        executing: S.value === "executing",
        onProceed: ee,
        onGoBack: j,
        onCancel: Te
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), Ip = /* @__PURE__ */ Z(Sp, [["__scopeId", "data-v-9ae3b76d"]]), Ep = { class: "setting-info" }, Mp = { class: "setting-label" }, Tp = {
  key: 0,
  class: "required-marker"
}, Rp = {
  key: 0,
  class: "setting-description"
}, zp = { class: "setting-control" }, Lp = /* @__PURE__ */ Q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: ue(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Ep, [
        e("div", Mp, [
          y(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Tp, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", Rp, a(t.description), 1)) : d("", !0)
      ]),
      e("div", zp, [
        $e(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ns = /* @__PURE__ */ Z(Lp, [["__scopeId", "data-v-cb5d236c"]]), Pp = { class: "toggle" }, Dp = ["checked", "disabled"], Np = /* @__PURE__ */ Q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Pp, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Dp),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Up = /* @__PURE__ */ Z(Np, [["__scopeId", "data-v-71c0f550"]]), Op = { class: "workspace-settings-content" }, Bp = { class: "settings-section" }, Fp = { class: "path-setting" }, Ap = { class: "path-value" }, Vp = { class: "path-setting" }, Wp = { class: "path-value" }, Gp = { class: "settings-section" }, jp = { class: "settings-section" }, qp = { class: "settings-section" }, Hp = /* @__PURE__ */ Q({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, p = n, { getConfig: g, updateConfig: u } = Fe(), v = $(!1), r = $(null), m = $(null), h = $(null), w = $(null), _ = $(""), k = $(""), T = $(!1);
    function F(B) {
      return B.join(" ");
    }
    function f(B) {
      return B.trim() ? B.trim().split(/\s+/) : [];
    }
    const C = N(() => {
      if (!w.value) return !1;
      const B = _.value !== (w.value.civitai_api_key || ""), W = k.value !== F(w.value.comfyui_extra_args || []);
      return B || W;
    });
    async function L() {
      v.value = !0, r.value = null;
      try {
        h.value = await g(i.workspacePath || void 0), w.value = { ...h.value }, _.value = h.value.civitai_api_key || "", k.value = F(h.value.comfyui_extra_args || []);
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        T.value = B === "true";
      } catch (B) {
        r.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        v.value = !1;
      }
    }
    async function I() {
      var B, W;
      m.value = null;
      try {
        const P = {};
        _.value !== (((B = w.value) == null ? void 0 : B.civitai_api_key) || "") && (P.civitai_api_key = _.value || null), k.value !== F(((W = w.value) == null ? void 0 : W.comfyui_extra_args) || []) && (P.comfyui_extra_args = f(k.value)), await u(P, i.workspacePath || void 0), await L(), m.value = { type: "success", message: "Settings saved successfully" }, p("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (P) {
        const M = P instanceof Error ? P.message : "Failed to save settings";
        m.value = { type: "error", message: M }, p("error", M);
      }
    }
    function x() {
      w.value && (_.value = w.value.civitai_api_key || "", k.value = F(w.value.comfyui_extra_args || []), m.value = null);
    }
    function K(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return c({
      saveSettings: I,
      resetSettings: x,
      hasChanges: C,
      loadSettings: L
    }), Ne(L), (B, W) => (s(), o("div", Op, [
      v.value ? (s(), E(wt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : r.value ? (s(), E(kt, {
        key: 1,
        message: r.value,
        retry: !0,
        onRetry: L
      }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
        b(Be, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var P, M;
            return [
              e("div", Bp, [
                e("div", Fp, [
                  W[3] || (W[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  W[4] || (W[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Ap, a(((P = h.value) == null ? void 0 : P.workspace_path) || "Loading..."), 1)
                ]),
                e("div", Vp, [
                  W[5] || (W[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  W[6] || (W[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", Wp, a(((M = h.value) == null ? void 0 : M.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Be, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", Gp, [
              b(ns, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  b(Qt, {
                    modelValue: _.value,
                    "onUpdate:modelValue": W[0] || (W[0] = (P) => _.value = P),
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
        b(Be, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", jp, [
              b(ns, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  b(Qt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": W[1] || (W[1] = (P) => k.value = P),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              W[7] || (W[7] = e("div", { class: "setting-hint" }, [
                y(" Common flags: "),
                e("code", null, "--lowvram"),
                y(", "),
                e("code", null, "--highvram"),
                y(", "),
                e("code", null, "--listen 0.0.0.0"),
                y(", "),
                e("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        b(Be, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", qp, [
              b(ns, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  b(Up, {
                    modelValue: T.value,
                    "onUpdate:modelValue": [
                      W[2] || (W[2] = (P) => T.value = P),
                      K
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (s(), E(jt, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: yt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : d("", !0)
      ], 64))
    ]));
  }
}), As = /* @__PURE__ */ Z(Hp, [["__scopeId", "data-v-9f44552d"]]), Kp = /* @__PURE__ */ Q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = $(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, p) => (s(), E(Ke, null, {
      header: l(() => [
        b(Je, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var g, u;
            return [
              b(oe, {
                variant: "primary",
                size: "sm",
                disabled: !((g = c.value) != null && g.hasChanges),
                onClick: p[0] || (p[0] = (v) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.saveSettings();
                })
              }, {
                default: l(() => [...p[2] || (p[2] = [
                  y(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), E(oe, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: p[1] || (p[1] = (v) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.resetSettings();
                })
              }, {
                default: l(() => [...p[3] || (p[3] = [
                  y(" Reset ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: l(() => [
        b(As, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Jp = /* @__PURE__ */ Q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = Fe(), p = $([]), g = $(!1), u = $(null), v = $(!1), r = $(null), m = $(null), h = $(!1), w = N(() => p.value.length === 0 ? [] : p.value.map((F) => ({
      text: `${F.timestamp} - ${F.name} - ${F.level} - ${F.func}:${F.line} - ${F.message}`,
      level: F.level
    })));
    async function _() {
      g.value = !0, u.value = null;
      try {
        p.value = await c(void 0, 500);
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load workspace logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var F;
          (F = r.value) != null && F.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function k() {
      try {
        const F = await n();
        F.exists && (m.value = F.path);
      } catch {
      }
    }
    async function T() {
      if (m.value) {
        h.value = !0;
        try {
          await i(m.value);
        } catch (F) {
          console.error("Failed to open log file:", F);
        } finally {
          h.value = !1;
        }
      }
    }
    return Ne(() => {
      _(), k();
    }), (F, f) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (C) => v.value = !0)
          }, {
            actions: l(() => [
              b(oe, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !m.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  y(a(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(oe, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: g.value
              }, {
                default: l(() => [
                  y(a(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          g.value ? (s(), E(wt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), E(kt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            p.value.length === 0 ? (s(), E(dt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(A, null, se(w.value, (C, L) => (s(), o("div", {
                key: L,
                class: ue(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: f[2] || (f[2] = (C) => v.value = !1)
      }, {
        content: l(() => [...f[3] || (f[3] = [
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
        actions: l(() => [
          b(oe, {
            variant: "primary",
            onClick: f[1] || (f[1] = (C) => v.value = !1)
          }, {
            default: l(() => [...f[4] || (f[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yp = /* @__PURE__ */ Z(Jp, [["__scopeId", "data-v-7f05352a"]]), Xp = /* @__PURE__ */ Q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: p } = Fe(), g = $([]), u = $(!1), v = $(null), r = $(!1), m = $("production"), h = $(null), w = $(null), _ = $(!1), k = N(() => g.value.length === 0 ? [] : g.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function T() {
      u.value = !0, v.value = null;
      try {
        g.value = await c(void 0, 500);
        try {
          const C = await n();
          m.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        v.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var C;
          (C = h.value) != null && C.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function F() {
      try {
        const C = await i();
        C.exists && (w.value = C.path);
      } catch {
      }
    }
    async function f() {
      if (w.value) {
        _.value = !0;
        try {
          await p(w.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          _.value = !1;
        }
      }
    }
    return Ne(() => {
      T(), F();
    }), (C, L) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (I) => r.value = !0)
          }, {
            actions: l(() => [
              b(oe, {
                variant: "secondary",
                size: "sm",
                onClick: f,
                disabled: !w.value || _.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  y(a(_.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(oe, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: u.value
              }, {
                default: l(() => [
                  y(a(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          u.value ? (s(), E(wt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), E(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length === 0 ? (s(), E(dt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (s(!0), o(A, null, se(k.value, (I, x) => (s(), o("div", {
                key: x,
                class: ue(`log-line log-level-${I.level.toLowerCase()}`)
              }, a(I.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: r.value,
        title: "About Environment Logs",
        onClose: L[2] || (L[2] = (I) => r.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            L[3] || (L[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
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
        actions: l(() => [
          b(oe, {
            variant: "primary",
            onClick: L[1] || (L[1] = (I) => r.value = !1)
          }, {
            default: l(() => [...L[7] || (L[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qp = /* @__PURE__ */ Z(Xp, [["__scopeId", "data-v-6f8db7ce"]]), Zp = { class: "env-title" }, eh = {
  key: 0,
  class: "current-badge"
}, th = {
  key: 0,
  class: "branch-info"
}, sh = /* @__PURE__ */ Q({
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
    return (c, n) => (s(), E(He, {
      status: t.isCurrent ? "synced" : void 0
    }, Wt({
      icon: l(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", Zp, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", eh, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", th, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: l(() => [
        $e(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          b(De, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          b(De, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          b(De, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), E(De, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), oh = /* @__PURE__ */ Z(sh, [["__scopeId", "data-v-9231917a"]]), nh = { class: "env-details" }, ah = { class: "status-row" }, lh = {
  key: 0,
  class: "detail-row"
}, ih = { class: "value mono" }, rh = {
  key: 1,
  class: "detail-row"
}, dh = { class: "value mono small" }, ch = { class: "detail-row" }, uh = { class: "value" }, mh = { class: "detail-row" }, vh = { class: "value" }, fh = { class: "detail-row" }, gh = { class: "value" }, ph = {
  key: 2,
  class: "section-divider"
}, hh = {
  key: 3,
  class: "detail-row"
}, yh = { class: "value" }, wh = {
  key: 4,
  class: "detail-row"
}, kh = { class: "value" }, bh = { class: "footer-actions" }, _h = /* @__PURE__ */ Q({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(p) {
      if (!p) return "Unknown";
      try {
        const g = new Date(p), v = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), r = Math.floor(v / 6e4), m = Math.floor(v / 36e5), h = Math.floor(v / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : h < 30 ? `${h} ${h === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, g) => (s(), E(Ye, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (u) => n("close"))
    }, {
      body: l(() => [
        e("div", nh, [
          e("div", ah, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ue(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", lh, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", ih, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", rh, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", dh, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", ch, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", uh, a(t.environment.workflow_count), 1)
          ]),
          e("div", mh, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", vh, a(t.environment.node_count), 1)
          ]),
          e("div", fh, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", gh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", ph)) : d("", !0),
          t.environment.created_at ? (s(), o("div", hh, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", yh, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", wh, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", kh, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", bh, [
          t.canDelete ? (s(), E(pe, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (u) => n("delete", t.environment.name))
          }, {
            default: l(() => [...g[12] || (g[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          b(pe, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (u) => n("close"))
          }, {
            default: l(() => [...g[13] || (g[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), $h = /* @__PURE__ */ Z(_h, [["__scopeId", "data-v-59855453"]]), Vs = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Ws = "3.12", fs = [
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
], Gs = "auto", Ch = { class: "progress-bar" }, xh = /* @__PURE__ */ Q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = N(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, p) => (s(), o("div", Ch, [
      e("div", {
        class: ue(["progress-fill", t.variant]),
        style: yt({ width: n.value })
      }, null, 6)
    ]));
  }
}), js = /* @__PURE__ */ Z(xh, [["__scopeId", "data-v-1beb0512"]]), Sh = { class: "task-progress" }, Ih = { class: "progress-info" }, Eh = { class: "progress-percentage" }, Mh = { class: "progress-message" }, Th = {
  key: 0,
  class: "progress-steps"
}, Rh = { class: "step-icon" }, zh = { class: "step-label" }, Lh = /* @__PURE__ */ Q({
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
    function n(p) {
      const g = c.steps.find((u) => u.id === p);
      return g ? c.progress >= g.progressThreshold ? "completed" : c.currentPhase === p ? "active" : "pending" : "pending";
    }
    function i(p) {
      const g = n(p);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (p, g) => (s(), o("div", Sh, [
      b(js, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Ih, [
        e("span", Eh, a(t.progress) + "%", 1),
        e("span", Mh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Th, [
        (s(!0), o(A, null, se(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: ue(["step", n(u.id)])
        }, [
          e("span", Rh, a(i(u.id)), 1),
          e("span", zh, a(u.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), es = /* @__PURE__ */ Z(Lh, [["__scopeId", "data-v-9d1de66c"]]), Ph = {
  key: 0,
  class: "create-env-form"
}, Dh = { class: "form-field" }, Nh = { class: "form-field" }, Uh = ["value"], Oh = { class: "form-field" }, Bh = ["disabled"], Fh = ["value"], Ah = { class: "form-field" }, Vh = ["value"], Wh = { class: "form-field form-field--checkbox" }, Gh = { class: "form-checkbox" }, jh = {
  key: 1,
  class: "create-env-progress"
}, qh = { class: "creating-intro" }, Hh = {
  key: 0,
  class: "progress-warning"
}, Kh = {
  key: 1,
  class: "create-error"
}, Jh = { class: "error-message" }, Yh = {
  key: 1,
  class: "footer-status"
}, Xh = 10, Qh = /* @__PURE__ */ Q({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: p, getCreateProgress: g } = Fe(), u = $(""), v = $(Ws), r = $("latest"), m = $(Gs), h = $(!1), w = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = $(!1), k = $(!1), T = $({
      progress: 0,
      message: ""
    });
    let F = null, f = 0;
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
    ], L = $(null);
    function I() {
      k.value || n("close");
    }
    async function x() {
      const M = u.value.trim();
      if (M) {
        k.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: M,
            python_version: v.value,
            comfyui_version: r.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ae = await p(O);
          ae.status === "started" ? K() : ae.status === "error" && (T.value = {
            progress: 0,
            message: ae.message || "Failed to start creation",
            error: ae.message
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
    function K() {
      F || (f = 0, F = window.setInterval(async () => {
        try {
          const M = await g();
          f = 0, T.value = {
            progress: M.progress ?? 0,
            message: M.message,
            phase: M.phase,
            error: M.error
          }, M.state === "complete" ? (B(), n("created", M.environment_name || u.value.trim(), h.value)) : M.state === "error" ? (B(), T.value.error = M.error || M.message) : M.state === "idle" && k.value && (B(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          f++, f >= Xh && (B(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      F && (clearInterval(F), F = null);
    }
    function W() {
      k.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function P() {
      _.value = !0;
      try {
        w.value = await i();
      } catch (M) {
        console.error("Failed to load ComfyUI releases:", M);
      } finally {
        _.value = !1;
      }
    }
    return Ne(async () => {
      var M;
      await uo(), (M = L.value) == null || M.focus(), P();
    }), zs(() => {
      B();
    }), (M, O) => (s(), E(Ye, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !k.value,
      onClose: I
    }, {
      body: l(() => [
        k.value ? (s(), o("div", jh, [
          e("p", qh, [
            O[11] || (O[11] = y(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            O[12] || (O[12] = y("... ", -1))
          ]),
          b(es, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? d("", !0) : (s(), o("p", Hh, " This may take several minutes. Please wait... ")),
          T.value.error ? (s(), o("div", Kh, [
            e("p", Jh, a(T.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", Ph, [
          e("div", Dh, [
            O[6] || (O[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ue(e("input", {
              ref_key: "nameInput",
              ref: L,
              "onUpdate:modelValue": O[0] || (O[0] = (ae) => u.value = ae),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ht(x, ["enter"])
            }, null, 544), [
              [Tt, u.value]
            ])
          ]),
          e("div", Nh, [
            O[7] || (O[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (ae) => v.value = ae),
              class: "form-select"
            }, [
              (s(!0), o(A, null, se(_e(Vs), (ae) => (s(), o("option", {
                key: ae,
                value: ae
              }, a(ae), 9, Uh))), 128))
            ], 512), [
              [Rt, v.value]
            ])
          ]),
          e("div", Oh, [
            O[8] || (O[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (ae) => r.value = ae),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(A, null, se(w.value, (ae) => (s(), o("option", {
                key: ae.tag_name,
                value: ae.tag_name
              }, a(ae.name), 9, Fh))), 128))
            ], 8, Bh), [
              [Rt, r.value]
            ])
          ]),
          e("div", Ah, [
            O[9] || (O[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (ae) => m.value = ae),
              class: "form-select"
            }, [
              (s(!0), o(A, null, se(_e(fs), (ae) => (s(), o("option", {
                key: ae,
                value: ae
              }, a(ae) + a(ae === "auto" ? " (detect GPU)" : ""), 9, Vh))), 128))
            ], 512), [
              [Rt, m.value]
            ])
          ]),
          e("div", Wh, [
            e("label", Gh, [
              Ue(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (ae) => h.value = ae)
              }, null, 512), [
                [Xt, h.value]
              ]),
              O[10] || (O[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        k.value ? (s(), o(A, { key: 1 }, [
          T.value.error ? (s(), E(pe, {
            key: 0,
            variant: "secondary",
            onClick: W
          }, {
            default: l(() => [...O[15] || (O[15] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Yh, " Creating environment... "))
        ], 64)) : (s(), o(A, { key: 0 }, [
          b(pe, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: x
          }, {
            default: l(() => [...O[13] || (O[13] = [
              y(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(pe, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (ae) => n("close"))
          }, {
            default: l(() => [...O[14] || (O[14] = [
              y(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Zh = /* @__PURE__ */ Z(Qh, [["__scopeId", "data-v-f37eaa42"]]), e1 = /* @__PURE__ */ Q({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: p } = Fe(), g = $([]), u = $(!1), v = $(null), r = $(""), m = $(!1), h = $(!1), w = $(null), _ = N(() => {
      if (!r.value.trim()) return g.value;
      const L = r.value.toLowerCase();
      return g.value.filter(
        (I) => {
          var x;
          return I.name.toLowerCase().includes(L) || ((x = I.current_branch) == null ? void 0 : x.toLowerCase().includes(L));
        }
      );
    });
    function k(L, I) {
      h.value = !1, i("created", L, I);
    }
    function T() {
      h.value = !0;
    }
    function F(L) {
      w.value = L;
    }
    function f(L) {
      w.value = null, i("delete", L);
    }
    async function C() {
      u.value = !0, v.value = null;
      try {
        g.value = await p();
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Ne(C), c({
      loadEnvironments: C,
      openCreateModal: T
    }), (L, I) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (x) => m.value = !0)
          }, {
            actions: l(() => [
              b(oe, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: l(() => [...I[6] || (I[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              b(oe, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: l(() => [...I[7] || (I[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          b(Lt, {
            modelValue: r.value,
            "onUpdate:modelValue": I[1] || (I[1] = (x) => r.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), E(wt, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), E(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            _.value.length ? (s(), E(Be, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, se(_.value, (x) => (s(), E(oh, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    x.is_current ? d("", !0) : (s(), E(oe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => L.$emit("switch", x.name)
                    }, {
                      default: l(() => [...I[8] || (I[8] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    b(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => F(x)
                    }, {
                      default: l(() => [...I[9] || (I[9] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            _.value.length ? d("", !0) : (s(), E(dt, {
              key: 1,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Wt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  b(oe, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
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
      b(mt, {
        show: m.value,
        title: "About Environments",
        onClose: I[3] || (I[3] = (x) => m.value = !1)
      }, {
        content: l(() => [...I[11] || (I[11] = [
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
        actions: l(() => [
          b(oe, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (x) => m.value = !1)
          }, {
            default: l(() => [...I[12] || (I[12] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (s(), E($h, {
        key: 0,
        environment: w.value,
        "can-delete": g.value.length > 1,
        onClose: I[4] || (I[4] = (x) => w.value = null),
        onDelete: f
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      h.value ? (s(), E(Zh, {
        key: 1,
        onClose: I[5] || (I[5] = (x) => h.value = !1),
        onCreated: k
      })) : d("", !0)
    ], 64));
  }
}), t1 = /* @__PURE__ */ Z(e1, [["__scopeId", "data-v-f95999f4"]]), s1 = { class: "file-path" }, o1 = { class: "file-path-text" }, n1 = ["title"], a1 = /* @__PURE__ */ Q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = $(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, g) => (s(), o("div", s1, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", o1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, n1)) : d("", !0)
    ]));
  }
}), l1 = /* @__PURE__ */ Z(a1, [["__scopeId", "data-v-f0982173"]]), i1 = { class: "export-blocked" }, r1 = { class: "issues-list" }, d1 = { class: "issue-message" }, c1 = {
  key: 0,
  class: "issue-details"
}, u1 = ["onClick"], m1 = { class: "issue-fix" }, v1 = /* @__PURE__ */ Q({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ts({});
    function i(p) {
      const g = c.issues[p];
      return n[p] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (p, g) => (s(), E(Ye, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (u) => p.$emit("close"))
    }, {
      body: l(() => [
        e("div", i1, [
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
          e("div", r1, [
            (s(!0), o(A, null, se(t.issues, (u, v) => (s(), o("div", {
              key: v,
              class: "issue-item"
            }, [
              e("div", d1, a(u.message), 1),
              u.details.length ? (s(), o("div", c1, [
                (s(!0), o(A, null, se(i(v), (r, m) => (s(), o("div", {
                  key: m,
                  class: "issue-detail"
                }, a(r), 1))), 128)),
                u.details.length > 3 && !n[v] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (r) => n[v] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, u1)) : d("", !0)
              ])) : d("", !0),
              e("div", m1, [
                u.type === "uncommitted_workflows" ? (s(), o(A, { key: 0 }, [
                  y(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(A, { key: 1 }, [
                  y(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(A, { key: 2 }, [
                  y(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        b(pe, {
          variant: "primary",
          onClick: g[0] || (g[0] = (u) => p.$emit("close"))
        }, {
          default: l(() => [...g[3] || (g[3] = [
            y(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), f1 = /* @__PURE__ */ Z(v1, [["__scopeId", "data-v-b52f5e32"]]), g1 = { class: "export-warnings" }, p1 = {
  key: 0,
  class: "success-header"
}, h1 = { class: "warning-header" }, y1 = { class: "warning-summary" }, w1 = { class: "warning-title" }, k1 = { class: "models-section" }, b1 = { class: "models-list" }, _1 = { class: "model-info" }, $1 = { class: "model-filename" }, C1 = { class: "model-workflows" }, x1 = ["onClick"], S1 = /* @__PURE__ */ Q({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = $(!1), g = $(null), u = N(() => p.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function v() {
      g.value = null, i("revalidate");
    }
    return (r, m) => (s(), o(A, null, [
      b(Ye, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (h) => r.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", g1, [
            t.models.length === 0 ? (s(), o("div", p1, [...m[4] || (m[4] = [
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
            ])])) : (s(), o(A, { key: 1 }, [
              e("div", h1, [
                m[6] || (m[6] = e("span", { class: "warning-icon" }, [
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
                e("div", y1, [
                  e("h3", w1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", k1, [
                e("div", b1, [
                  (s(!0), o(A, null, se(u.value, (h) => (s(), o("div", {
                    key: h.hash,
                    class: "model-item"
                  }, [
                    e("div", _1, [
                      e("div", $1, a(h.filename), 1),
                      e("div", C1, " Used by: " + a(h.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (w) => g.value = h.hash
                    }, " Add Source ", 8, x1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !p.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (h) => p.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          b(pe, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (h) => r.$emit("cancel"))
          }, {
            default: l(() => [...m[7] || (m[7] = [
              y(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          b(pe, {
            variant: "primary",
            onClick: m[2] || (m[2] = (h) => r.$emit("confirm"))
          }, {
            default: l(() => [
              y(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), E(vs, {
        key: 0,
        identifier: g.value,
        onClose: v
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), I1 = /* @__PURE__ */ Z(S1, [["__scopeId", "data-v-b698d882"]]), E1 = { class: "export-card" }, M1 = { class: "export-path-row" }, T1 = { class: "export-actions" }, R1 = {
  key: 1,
  class: "export-warning"
}, z1 = /* @__PURE__ */ Q({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Fe(), i = $(""), p = $(!1), g = $(!1), u = $(!1), v = $(null), r = $(!1), m = $(null), h = $(!1), w = $(!1), _ = N(() => p.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function k() {
      p.value = !0, v.value = null;
      try {
        const I = await c();
        m.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? w.value = !0 : await f() : h.value = !0;
      } catch (I) {
        v.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Validation failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function T() {
      w.value = !1, await f();
    }
    async function F() {
      try {
        const I = await c();
        m.value = I;
      } catch (I) {
        console.error("Re-validation failed:", I);
      }
    }
    async function f() {
      g.value = !0;
      try {
        const I = await n(i.value || void 0);
        v.value = I;
      } catch (I) {
        v.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function C() {
      var I;
      if ((I = v.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function L() {
      var I;
      if ((I = v.value) != null && I.path) {
        u.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const K = await x.blob(), B = URL.createObjectURL(K), W = v.value.path.split("/").pop() || "environment-export.tar.gz", P = document.createElement("a");
          P.href = B, P.download = W, document.body.appendChild(P), P.click(), document.body.removeChild(P), URL.revokeObjectURL(B);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (I, x) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (K) => r.value = !0)
          })
        ]),
        content: l(() => [
          b(Be, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", E1, [
                x[7] || (x[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", M1, [
                  b(Qt, {
                    modelValue: i.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (K) => i.value = K),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", T1, [
                  b(oe, {
                    variant: "primary",
                    size: "md",
                    loading: p.value || g.value,
                    disabled: p.value || g.value,
                    onClick: k
                  }, {
                    default: l(() => [
                      x[6] || (x[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      y(" " + a(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), E(Be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              b(He, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, Wt({
                icon: l(() => [
                  y(a(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  y(a(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  y(a(v.value.status === "success" ? "Your environment has been exported" : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    b(De, { label: "Saved to:" }, {
                      default: l(() => [
                        b(l1, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (s(), E(De, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (s(), o("div", R1, [...x[8] || (x[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    b(oe, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: L
                    }, {
                      default: l(() => [...x[9] || (x[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    b(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: l(() => [...x[10] || (x[10] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(oe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (K) => v.value = null)
                    }, {
                      default: l(() => [...x[11] || (x[11] = [
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
          })) : d("", !0)
        ]),
        _: 1
      }),
      b(mt, {
        show: r.value,
        title: "What Gets Exported",
        onClose: x[3] || (x[3] = (K) => r.value = !1)
      }, {
        content: l(() => [...x[12] || (x[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  y(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  y(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  y(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  y(" — Environment settings and metadata")
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
              y(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      h.value && m.value ? (s(), E(f1, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: x[4] || (x[4] = (K) => h.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      w.value && m.value ? (s(), E(I1, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: x[5] || (x[5] = (K) => w.value = !1),
        onRevalidate: F
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), L1 = /* @__PURE__ */ Z(z1, [["__scopeId", "data-v-f4d120f2"]]), P1 = { class: "file-input-wrapper" }, D1 = ["accept", "multiple", "disabled"], N1 = /* @__PURE__ */ Q({
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
    const i = n, p = $(null);
    function g() {
      var v;
      (v = p.value) == null || v.click();
    }
    function u(v) {
      const r = v.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return c({
      triggerInput: g
    }), (v, r) => (s(), o("div", P1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, D1),
      b(oe, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          $e(v.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
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
}), U1 = /* @__PURE__ */ Z(N1, [["__scopeId", "data-v-cd192091"]]), O1 = {
  key: 0,
  class: "drop-zone-empty"
}, B1 = { class: "drop-zone-text" }, F1 = { class: "drop-zone-primary" }, A1 = { class: "drop-zone-secondary" }, V1 = { class: "drop-zone-actions" }, W1 = {
  key: 1,
  class: "drop-zone-file"
}, G1 = { class: "file-info" }, j1 = { class: "file-details" }, q1 = { class: "file-name" }, H1 = { class: "file-size" }, K1 = /* @__PURE__ */ Q({
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
    const n = c, i = $(!1), p = $(null), g = $(0), u = N(() => p.value !== null), v = N(() => {
      var f;
      return ((f = p.value) == null ? void 0 : f.name) || "";
    }), r = N(() => {
      if (!p.value) return "";
      const f = p.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(f) {
      var C;
      f.stopPropagation(), g.value++, (C = f.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function h(f) {
      f.stopPropagation(), f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function w(f) {
      f.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function _(f) {
      var L;
      f.stopPropagation(), g.value = 0, i.value = !1;
      const C = (L = f.dataTransfer) == null ? void 0 : L.files;
      C && C.length > 0 && T(C[0]);
    }
    function k(f) {
      f.length > 0 && T(f[0]);
    }
    function T(f) {
      p.value = f, n("fileSelected", f);
    }
    function F() {
      p.value = null, n("clear");
    }
    return (f, C) => (s(), o("div", {
      class: ue(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: ze(m, ["prevent"]),
      onDragover: ze(h, ["prevent"]),
      onDragleave: ze(w, ["prevent"]),
      onDrop: ze(_, ["prevent"])
    }, [
      u.value ? (s(), o("div", W1, [
        e("div", G1, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", j1, [
            e("div", q1, a(v.value), 1),
            e("div", H1, a(r.value), 1)
          ])
        ]),
        b(oe, {
          variant: "ghost",
          size: "xs",
          onClick: F,
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
      ])) : (s(), o("div", O1, [
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
        e("div", B1, [
          e("p", F1, a(t.primaryText), 1),
          e("p", A1, a(t.secondaryText), 1)
        ]),
        e("div", V1, [
          b(U1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: k
          }, {
            default: l(() => [
              y(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), J1 = /* @__PURE__ */ Z(K1, [["__scopeId", "data-v-0f79cb86"]]), Y1 = { class: "import-preview" }, X1 = { class: "preview-header" }, Q1 = {
  key: 0,
  class: "source-env"
}, Z1 = { class: "preview-content" }, ey = { class: "preview-section" }, ty = { class: "section-header" }, sy = { class: "section-info" }, oy = { class: "section-count" }, ny = {
  key: 0,
  class: "item-list"
}, ay = { class: "item-name" }, ly = {
  key: 0,
  class: "item-more"
}, iy = { class: "preview-section" }, ry = { class: "section-header" }, dy = { class: "section-info" }, cy = { class: "section-count" }, uy = {
  key: 0,
  class: "item-list"
}, my = { class: "item-details" }, vy = { class: "item-name" }, fy = { class: "item-meta" }, gy = {
  key: 0,
  class: "item-more"
}, py = { class: "preview-section" }, hy = { class: "section-header" }, yy = { class: "section-info" }, wy = { class: "section-count" }, ky = {
  key: 0,
  class: "item-list"
}, by = { class: "item-name" }, _y = {
  key: 0,
  class: "item-more"
}, $y = {
  key: 0,
  class: "preview-section"
}, Cy = { class: "git-info" }, xy = /* @__PURE__ */ Q({
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
    const c = t, n = N(() => c.workflows.length), i = N(() => c.models.length), p = N(() => c.nodes.length);
    function g(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, v) => (s(), o("div", Y1, [
      e("div", X1, [
        b(ot, null, {
          default: l(() => [...v[0] || (v[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Q1, [
          v[1] || (v[1] = y(" From: ", -1)),
          b(ls, null, {
            default: l(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", Z1, [
        e("div", ey, [
          e("div", ty, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", sy, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", oy, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", ny, [
            (s(!0), o(A, null, se(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ay, a(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", ly, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", iy, [
          e("div", ry, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", dy, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", cy, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", uy, [
            (s(!0), o(A, null, se(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", my, [
                e("span", vy, a(r.filename), 1),
                e("span", fy, a(g(r.size)) + " • " + a(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", gy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", py, [
          e("div", hy, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", yy, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", wy, a(p.value) + " node" + a(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", ky, [
            (s(!0), o(A, null, se(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", by, a(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", _y, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", $y, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Cy, [
            t.gitBranch ? (s(), E(De, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                b(ls, null, {
                  default: l(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (s(), E(De, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                b(Ps, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Sy = /* @__PURE__ */ Z(xy, [["__scopeId", "data-v-182fe113"]]), Iy = { class: "import-config" }, Ey = { class: "config-container" }, My = { class: "config-field" }, Ty = { class: "input-wrapper" }, Ry = ["value"], zy = {
  key: 0,
  class: "validating-indicator"
}, Ly = {
  key: 1,
  class: "valid-indicator"
}, Py = {
  key: 0,
  class: "field-error"
}, Dy = { class: "config-field" }, Ny = { class: "strategy-options" }, Uy = ["value", "checked", "onChange"], Oy = { class: "strategy-content" }, By = { class: "strategy-label" }, Fy = { class: "strategy-description" }, Ay = { class: "config-field switch-field" }, Vy = { class: "switch-label" }, Wy = ["checked"], Gy = { class: "advanced-section" }, jy = { class: "advanced-content" }, qy = { class: "config-field" }, Hy = ["value"], Ky = ["value"], Jy = /* @__PURE__ */ Q({
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
    const n = t, i = c, p = $(!1), g = $(!1);
    _t(() => n.nameError, (h) => {
      p.value = !1, g.value = !h && n.name.length > 0;
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
    let v = null;
    function r(h) {
      const w = h.target.value;
      i("update:name", w), g.value = !1, v && clearTimeout(v), w.length > 0 ? (p.value = !0, v = setTimeout(() => {
        i("validate-name", w);
      }, 400)) : p.value = !1;
    }
    function m() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (h, w) => (s(), o("div", Iy, [
      b(ot, null, {
        default: l(() => [...w[2] || (w[2] = [
          y("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Ey, [
        e("div", My, [
          b(Jt, { required: "" }, {
            default: l(() => [...w[3] || (w[3] = [
              y("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Ty, [
            e("input", {
              type: "text",
              class: ue(["name-input", { error: t.nameError || t.name.length === 0, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: r,
              onBlur: m
            }, null, 42, Ry),
            p.value ? (s(), o("span", zy, "...")) : g.value ? (s(), o("span", Ly, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", Py, a(t.nameError), 1)) : d("", !0),
          w[4] || (w[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Dy, [
          b(Jt, null, {
            default: l(() => [...w[5] || (w[5] = [
              y("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ny, [
            (s(), o(A, null, se(u, (_) => e("label", {
              key: _.value,
              class: ue(["strategy-option", { active: t.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: t.modelStrategy === _.value,
                onChange: (k) => i("update:modelStrategy", _.value)
              }, null, 40, Uy),
              e("div", Oy, [
                e("span", By, a(_.label), 1),
                e("span", Fy, a(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Ay, [
          e("label", Vy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: w[0] || (w[0] = (_) => i("update:switchAfterImport", _.target.checked))
            }, null, 40, Wy),
            w[6] || (w[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", Gy, [
          w[8] || (w[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", jy, [
            e("div", qy, [
              b(Jt, null, {
                default: l(() => [...w[7] || (w[7] = [
                  y("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: w[1] || (w[1] = (_) => i("update:torchBackend", _.target.value))
              }, [
                (s(!0), o(A, null, se(_e(fs), (_) => (s(), o("option", {
                  key: _,
                  value: _
                }, a(_) + a(_ === "auto" ? " (detect GPU)" : ""), 9, Ky))), 128))
              ], 40, Hy)
            ])
          ])
        ])
      ])
    ]));
  }
}), Yy = /* @__PURE__ */ Z(Jy, [["__scopeId", "data-v-89ea06a1"]]), Xy = { class: "import-flow" }, Qy = {
  key: 0,
  class: "import-empty"
}, Zy = { class: "git-import-section" }, e0 = { class: "git-url-input-row" }, t0 = ["disabled"], s0 = {
  key: 0,
  class: "git-error"
}, o0 = {
  key: 1,
  class: "import-configure"
}, n0 = { class: "selected-file-bar" }, a0 = {
  key: 0,
  class: "file-bar-content"
}, l0 = { class: "file-bar-info" }, i0 = { class: "file-bar-name" }, r0 = { class: "file-bar-size" }, d0 = {
  key: 1,
  class: "file-bar-content"
}, c0 = { class: "file-bar-info" }, u0 = { class: "file-bar-name" }, m0 = {
  key: 0,
  class: "preview-loading"
}, v0 = { class: "import-actions" }, f0 = {
  key: 2,
  class: "import-progress"
}, g0 = { class: "creating-intro" }, p0 = {
  key: 0,
  class: "progress-warning"
}, h0 = {
  key: 1,
  class: "import-error"
}, y0 = { class: "error-message" }, w0 = {
  key: 3,
  class: "import-complete"
}, k0 = { class: "complete-message" }, b0 = { class: "complete-title" }, _0 = { class: "complete-details" }, $0 = { class: "complete-actions" }, C0 = /* @__PURE__ */ Q({
  __name: "ImportFlow",
  props: {
    workspacePath: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { previewTarballImport: p, previewGitImport: g, validateEnvironmentName: u, executeImport: v, executeGitImport: r, getImportProgress: m } = Fe();
    let h = null;
    const w = $(null), _ = $(!1), k = $(!1), T = $(!1), F = $(""), f = $(!1), C = $(null), L = $(""), I = $(null), x = $(!1), K = $(null), B = $(null), W = $({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), P = $(null), M = $({
      message: "Preparing import...",
      phase: "",
      progress: 0,
      error: null
    }), O = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ae = N(() => {
      if (!B.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const le = B.value;
      return {
        sourceEnvironment: le.comfyui_version ? `ComfyUI ${le.comfyui_version}` : "Unknown",
        workflows: le.workflows.map((re) => re.name),
        models: le.models.map((re) => ({
          filename: re.filename,
          size: 0,
          type: re.relative_path.split("/")[0] || "model"
        })),
        nodes: le.nodes.map((re) => re.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), X = N(() => !f.value && !C.value && B.value && W.value.name.length > 0 && !P.value && (w.value || I.value));
    async function H(le) {
      w.value = le, f.value = !0, C.value = null, B.value = null;
      try {
        const re = await p(le);
        B.value = re;
      } catch (re) {
        C.value = re instanceof Error ? re.message : "Failed to analyze file", console.error("Preview error:", re);
      } finally {
        f.value = !1;
      }
    }
    function de() {
      w.value = null, I.value = null, L.value = "", K.value = null, k.value = !1, T.value = !1, F.value = "", B.value = null, C.value = null, W.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, P.value = null, i("source-cleared");
    }
    function J() {
      Ee(), de(), _.value = !1, f.value = !1, x.value = !1, M.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function D() {
      if (L.value.trim()) {
        x.value = !0, K.value = null;
        try {
          const le = await g(L.value.trim());
          I.value = L.value.trim(), B.value = le;
        } catch (le) {
          K.value = le instanceof Error ? le.message : "Failed to analyze repository";
        } finally {
          x.value = !1;
        }
      }
    }
    function z(le) {
      try {
        const re = new URL(le);
        return re.host + re.pathname.replace(/\.git$/, "");
      } catch {
        return le;
      }
    }
    async function S(le) {
      if (!le) {
        P.value = "Environment name is required";
        return;
      }
      try {
        const re = await u(le);
        P.value = re.valid ? null : re.error || "Invalid name";
      } catch {
        P.value = "Failed to validate name";
      }
    }
    async function ie() {
      if (W.value.name && !(!w.value && !I.value)) {
        _.value = !0, k.value = !1, M.value = { message: `Creating environment '${W.value.name}'...`, phase: "", progress: 0, error: null }, i("import-started");
        try {
          let le;
          if (w.value)
            le = await v(
              w.value,
              W.value.name,
              W.value.modelStrategy,
              W.value.torchBackend
            );
          else if (I.value)
            le = await r(
              I.value,
              W.value.name,
              W.value.modelStrategy,
              W.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          le.status === "started" ? ne() : (T.value = !1, F.value = le.message, _.value = !1, k.value = !0);
        } catch (le) {
          T.value = !1, F.value = le instanceof Error ? le.message : "Unknown error occurred during import", _.value = !1, k.value = !0;
        }
      }
    }
    function ne() {
      h || (h = setInterval(async () => {
        try {
          const le = await m();
          M.value = {
            message: le.message,
            phase: le.phase || "",
            progress: le.progress ?? (le.state === "importing" ? 50 : 0),
            error: le.error || null
          }, le.state === "complete" ? (Ee(), T.value = !0, F.value = `Environment '${le.environment_name}' created successfully`, _.value = !1, k.value = !0, le.environment_name && i("import-complete", le.environment_name, W.value.switchAfterImport)) : le.state === "error" && (Ee(), T.value = !1, F.value = le.error || le.message, _.value = !1, k.value = !0);
        } catch (le) {
          console.error("Failed to poll import progress:", le);
        }
      }, 2e3));
    }
    function Ee() {
      h && (clearInterval(h), h = null);
    }
    function be(le) {
      return le < 1024 ? `${le} B` : le < 1024 * 1024 ? `${(le / 1024).toFixed(1)} KB` : le < 1024 * 1024 * 1024 ? `${(le / (1024 * 1024)).toFixed(1)} MB` : `${(le / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ne(async () => {
      try {
        const le = await m();
        console.log("[ComfyGit ImportFlow] Import progress check:", le.state, le), le.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", le.environment_name), _.value = !0, W.value.name = le.environment_name || "importing...", M.value = {
          progress: le.progress ?? 0,
          message: le.message || "Importing...",
          phase: le.phase || "",
          error: null
        }, ne());
      } catch (le) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", le);
      }
    }), c({
      handleReset: J,
      isImporting: _,
      canImport: X
    }), (le, re) => {
      var me;
      return s(), o("div", Xy, [
        !w.value && !I.value && !_.value ? (s(), o("div", Qy, [
          b(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: H
          }),
          re[7] || (re[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", Zy, [
            re[5] || (re[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", e0, [
              Ue(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": re[0] || (re[0] = (fe) => L.value = fe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ht(D, ["enter"]),
                disabled: x.value
              }, null, 40, t0), [
                [Tt, L.value]
              ]),
              b(oe, {
                variant: "primary",
                size: "sm",
                disabled: !L.value.trim() || x.value,
                onClick: D
              }, {
                default: l(() => [
                  y(a(x.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            K.value ? (s(), o("div", s0, a(K.value), 1)) : d("", !0),
            re[6] || (re[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || I.value) && !_.value && !k.value ? (s(), o("div", o0, [
          e("div", n0, [
            w.value ? (s(), o("div", a0, [
              re[8] || (re[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", l0, [
                e("div", i0, a(w.value.name), 1),
                e("div", r0, a(be(w.value.size)), 1)
              ])
            ])) : I.value ? (s(), o("div", d0, [
              re[10] || (re[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", c0, [
                e("div", u0, a(z(I.value)), 1),
                re[9] || (re[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : d("", !0),
            b(oe, {
              variant: "ghost",
              size: "sm",
              onClick: de
            }, {
              default: l(() => [...re[11] || (re[11] = [
                y(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          f.value ? (s(), o("div", m0, [...re[12] || (re[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : C.value ? (s(), E(lt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [C.value]
          }, null, 8, ["details"])) : B.value ? (s(), E(Sy, {
            key: 2,
            "source-environment": ae.value.sourceEnvironment,
            workflows: ae.value.workflows,
            models: ae.value.models,
            nodes: ae.value.nodes,
            "git-branch": ae.value.gitBranch,
            "git-commit": ae.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
          B.value ? (s(), E(Yy, {
            key: 3,
            name: W.value.name,
            "onUpdate:name": re[1] || (re[1] = (fe) => W.value.name = fe),
            "model-strategy": W.value.modelStrategy,
            "onUpdate:modelStrategy": re[2] || (re[2] = (fe) => W.value.modelStrategy = fe),
            "torch-backend": W.value.torchBackend,
            "onUpdate:torchBackend": re[3] || (re[3] = (fe) => W.value.torchBackend = fe),
            "switch-after-import": W.value.switchAfterImport,
            "onUpdate:switchAfterImport": re[4] || (re[4] = (fe) => W.value.switchAfterImport = fe),
            "name-error": P.value,
            onValidateName: S
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
          W.value.modelStrategy === "skip" && ((me = B.value) != null && me.models_needing_download) ? (s(), E(lt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${B.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", v0, [
            b(oe, {
              variant: "secondary",
              size: "md",
              onClick: de
            }, {
              default: l(() => [...re[13] || (re[13] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(oe, {
              variant: "primary",
              size: "md",
              disabled: !X.value,
              onClick: ie
            }, {
              default: l(() => [...re[14] || (re[14] = [
                y(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : _.value ? (s(), o("div", f0, [
          e("p", g0, [
            re[15] || (re[15] = y(" Importing environment ", -1)),
            e("strong", null, a(W.value.name), 1),
            re[16] || (re[16] = y("... ", -1))
          ]),
          b(es, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: O
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? d("", !0) : (s(), o("p", p0, " This may take several minutes. Please wait... ")),
          M.value.error ? (s(), o("div", h0, [
            e("p", y0, a(M.value.error), 1)
          ])) : d("", !0)
        ])) : k.value ? (s(), o("div", w0, [
          e("div", {
            class: ue(["complete-icon", T.value ? "success" : "error"])
          }, a(T.value ? "✓" : "✕"), 3),
          e("div", k0, [
            e("div", b0, a(T.value ? "Import Successful" : "Import Failed"), 1),
            e("div", _0, a(F.value), 1)
          ]),
          e("div", $0, [
            b(oe, {
              variant: "primary",
              size: "md",
              onClick: J
            }, {
              default: l(() => [...re[17] || (re[17] = [
                y(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), qs = /* @__PURE__ */ Z(C0, [["__scopeId", "data-v-1d554e52"]]), x0 = /* @__PURE__ */ Q({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = $(!1);
    function p(g, u) {
      u && n("import-complete-switch", g);
    }
    return (g, u) => (s(), o(A, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (v) => i.value = !0)
          })
        ]),
        content: l(() => [
          b(qs, { onImportComplete: p })
        ]),
        _: 1
      }),
      b(mt, {
        show: i.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (v) => i.value = !1)
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
}), S0 = /* @__PURE__ */ Z(x0, [["__scopeId", "data-v-e13bfe76"]]), I0 = { class: "header-info" }, E0 = { class: "commit-hash" }, M0 = {
  key: 0,
  class: "commit-refs"
}, T0 = { class: "commit-message" }, R0 = { class: "commit-date" }, z0 = {
  key: 0,
  class: "loading"
}, L0 = {
  key: 1,
  class: "changes-section"
}, P0 = { class: "stats-row" }, D0 = { class: "stat" }, N0 = { class: "stat insertions" }, U0 = { class: "stat deletions" }, O0 = {
  key: 0,
  class: "change-group"
}, B0 = {
  key: 1,
  class: "change-group"
}, F0 = {
  key: 0,
  class: "version"
}, A0 = {
  key: 2,
  class: "change-group"
}, V0 = { class: "change-item" }, W0 = /* @__PURE__ */ Q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Fe(), i = $(null), p = $(!0), g = N(() => {
      if (!i.value) return !1;
      const v = i.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), u = N(() => {
      if (!i.value) return !1;
      const v = i.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Ne(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (v, r) => (s(), E(Ye, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (m) => v.$emit("close"))
    }, {
      header: l(() => {
        var m, h, w, _;
        return [
          e("div", I0, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", E0, a(((m = i.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((h = t.commit.hash) == null ? void 0 : h.slice(0, 7))), 1),
            (_ = (w = i.value) == null ? void 0 : w.refs) != null && _.length ? (s(), o("span", M0, [
              (s(!0), o(A, null, se(i.value.refs, (k) => (s(), o("span", {
                key: k,
                class: "ref-badge"
              }, a(k), 1))), 128))
            ])) : d("", !0)
          ]),
          b(pe, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (k) => v.$emit("close"))
          }, {
            default: l(() => [...r[5] || (r[5] = [
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
        var m, h;
        return [
          e("div", T0, a(((m = i.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", R0, a(((h = i.value) == null ? void 0 : h.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (s(), o("div", z0, "Loading details...")) : i.value ? (s(), o("div", L0, [
            e("div", P0, [
              e("span", D0, a(i.value.stats.files_changed) + " files", 1),
              e("span", N0, "+" + a(i.value.stats.insertions), 1),
              e("span", U0, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", O0, [
              b(Ft, { variant: "section" }, {
                default: l(() => [...r[6] || (r[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, se(i.value.changes.workflows.added, (w) => (s(), o("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(A, null, se(i.value.changes.workflows.modified, (w) => (s(), o("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(A, null, se(i.value.changes.workflows.deleted, (w) => (s(), o("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w), 1)
              ]))), 128))
            ])) : d("", !0),
            u.value ? (s(), o("div", B0, [
              b(Ft, { variant: "section" }, {
                default: l(() => [...r[10] || (r[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, se(i.value.changes.nodes.added, (w) => (s(), o("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w.name), 1),
                w.version ? (s(), o("span", F0, "(" + a(w.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(A, null, se(i.value.changes.nodes.removed, (w) => (s(), o("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", A0, [
              b(Ft, { variant: "section" }, {
                default: l(() => [...r[13] || (r[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", V0, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => [
        b(pe, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (m) => v.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...r[15] || (r[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(pe, {
          variant: "primary",
          onClick: r[2] || (r[2] = (m) => v.$emit("checkout", t.commit))
        }, {
          default: l(() => [...r[16] || (r[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), G0 = /* @__PURE__ */ Z(W0, [["__scopeId", "data-v-d256ff6d"]]), j0 = { class: "base-textarea-wrapper" }, q0 = ["value", "rows", "placeholder", "disabled", "maxlength"], H0 = {
  key: 0,
  class: "base-textarea-count"
}, K0 = /* @__PURE__ */ Q({
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
    return (c, n) => (s(), o("div", j0, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = ht(ze((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = ht(ze((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, q0),
      t.showCharCount && t.maxLength ? (s(), o("div", H0, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), Is = /* @__PURE__ */ Z(K0, [["__scopeId", "data-v-5516e6fc"]]), J0 = ["checked", "disabled"], Y0 = { class: "base-checkbox-box" }, X0 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Q0 = {
  key: 0,
  class: "base-checkbox-label"
}, Z0 = /* @__PURE__ */ Q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: ue(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, J0),
      e("span", Y0, [
        t.modelValue ? (s(), o("svg", X0, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Q0, [
        $e(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Es = /* @__PURE__ */ Z(Z0, [["__scopeId", "data-v-bf17c831"]]), ew = { class: "popover-header" }, tw = { class: "popover-body" }, sw = {
  key: 0,
  class: "changes-summary"
}, ow = {
  key: 0,
  class: "change-item"
}, nw = {
  key: 1,
  class: "change-item"
}, aw = {
  key: 2,
  class: "change-item"
}, lw = {
  key: 3,
  class: "change-item"
}, iw = {
  key: 4,
  class: "change-item"
}, rw = {
  key: 5,
  class: "change-item"
}, dw = {
  key: 1,
  class: "no-changes"
}, cw = {
  key: 2,
  class: "loading"
}, uw = {
  key: 3,
  class: "issues-error"
}, mw = { class: "error-header" }, vw = { class: "error-title" }, fw = { class: "issues-list" }, gw = { class: "message-section" }, pw = { class: "popover-footer" }, hw = {
  key: 1,
  class: "commit-popover"
}, yw = { class: "popover-header" }, ww = { class: "popover-body" }, kw = {
  key: 0,
  class: "changes-summary"
}, bw = {
  key: 0,
  class: "change-item"
}, _w = {
  key: 1,
  class: "change-item"
}, $w = {
  key: 2,
  class: "change-item"
}, Cw = {
  key: 3,
  class: "change-item"
}, xw = {
  key: 4,
  class: "change-item"
}, Sw = {
  key: 5,
  class: "change-item"
}, Iw = {
  key: 1,
  class: "no-changes"
}, Ew = {
  key: 2,
  class: "loading"
}, Mw = {
  key: 3,
  class: "issues-error"
}, Tw = { class: "error-header" }, Rw = { class: "error-title" }, zw = { class: "issues-list" }, Lw = { class: "message-section" }, Pw = { class: "popover-footer" }, Dw = /* @__PURE__ */ Q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: p } = Fe(), g = $(""), u = $(!1), v = $(!1), r = $(null), m = N(() => {
      if (!n.status) return !1;
      const F = n.status.workflows;
      return F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || n.status.has_changes;
    }), h = N(() => {
      if (!n.status) return !1;
      const F = n.status.workflows, f = n.status.git_changes;
      return F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || f.nodes_added.length > 0 || f.nodes_removed.length > 0;
    }), w = N(() => {
      var F;
      return (F = n.status) != null && F.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (f) => f.has_issues && (f.sync_state === "new" || f.sync_state === "modified")
      ) : [];
    }), _ = N(() => w.value.length > 0), k = N(() => _.value && !v.value);
    async function T() {
      var F, f, C;
      if (!(_.value && !v.value) && !(!m.value || !g.value.trim() || u.value)) {
        u.value = !0, r.value = null;
        try {
          const L = await p(g.value.trim(), v.value);
          L.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((F = L.summary) == null ? void 0 : F.new) || 0} new, ${((f = L.summary) == null ? void 0 : f.modified) || 0} modified, ${((C = L.summary) == null ? void 0 : C.deleted) || 0} deleted`
          }, g.value = "", v.value = !1, setTimeout(() => i("committed"), 1e3)) : L.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : L.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: L.message || "Commit failed" };
        } catch (L) {
          r.value = { type: "error", message: L instanceof Error ? L.message : "Commit failed" };
        } finally {
          u.value = !1;
        }
      }
    }
    return (F, f) => t.asModal ? (s(), E(Ve, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: f[5] || (f[5] = (C) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: f[4] || (f[4] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", ew, [
            f[11] || (f[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: f[0] || (f[0] = (C) => i("close"))
            }, [...f[10] || (f[10] = [
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
          e("div", tw, [
            t.status && m.value ? (s(), o("div", sw, [
              t.status.workflows.new.length ? (s(), o("div", ow, [
                f[12] || (f[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", nw, [
                f[13] || (f[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", aw, [
                f[14] || (f[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", lw, [
                f[15] || (f[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", iw, [
                f[16] || (f[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              h.value ? d("", !0) : (s(), o("div", rw, [...f[17] || (f[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", dw, " No changes to commit ")) : (s(), o("div", cw, " Loading... ")),
            _.value ? (s(), o("div", uw, [
              e("div", mw, [
                f[18] || (f[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", vw, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", fw, [
                (s(!0), o(A, null, se(w.value, (C) => (s(), o("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(C.name), 1),
                  y(": " + a(C.issue_summary), 1)
                ]))), 128))
              ]),
              b(Es, {
                modelValue: v.value,
                "onUpdate:modelValue": f[1] || (f[1] = (C) => v.value = C),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...f[19] || (f[19] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", gw, [
              b(Is, {
                modelValue: g.value,
                "onUpdate:modelValue": f[2] || (f[2] = (C) => g.value = C),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || u.value || k.value,
                rows: 3,
                onCtrlEnter: T
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (s(), o("div", {
              key: 4,
              class: ue(["result", r.value.type])
            }, a(r.value.message), 3)) : d("", !0)
          ]),
          e("div", pw, [
            b(pe, {
              variant: "secondary",
              onClick: f[3] || (f[3] = (C) => i("close"))
            }, {
              default: l(() => [...f[20] || (f[20] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: v.value ? "danger" : "primary",
              disabled: !m.value || !g.value.trim() || u.value || k.value,
              loading: u.value,
              onClick: T
            }, {
              default: l(() => [
                y(a(u.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", hw, [
      e("div", yw, [
        f[22] || (f[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: f[6] || (f[6] = (C) => i("close"))
        }, [...f[21] || (f[21] = [
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
      e("div", ww, [
        t.status && m.value ? (s(), o("div", kw, [
          t.status.workflows.new.length ? (s(), o("div", bw, [
            f[23] || (f[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", _w, [
            f[24] || (f[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", $w, [
            f[25] || (f[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Cw, [
            f[26] || (f[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", xw, [
            f[27] || (f[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          h.value ? d("", !0) : (s(), o("div", Sw, [...f[28] || (f[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", Iw, " No changes to commit ")) : (s(), o("div", Ew, " Loading... ")),
        _.value ? (s(), o("div", Mw, [
          e("div", Tw, [
            f[29] || (f[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Rw, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", zw, [
            (s(!0), o(A, null, se(w.value, (C) => (s(), o("div", {
              key: C.name,
              class: "issue-item"
            }, [
              e("strong", null, a(C.name), 1),
              y(": " + a(C.issue_summary), 1)
            ]))), 128))
          ]),
          b(Es, {
            modelValue: v.value,
            "onUpdate:modelValue": f[7] || (f[7] = (C) => v.value = C),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...f[30] || (f[30] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", Lw, [
          b(Is, {
            modelValue: g.value,
            "onUpdate:modelValue": f[8] || (f[8] = (C) => g.value = C),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || u.value || k.value,
            rows: 3,
            onCtrlEnter: T
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (s(), o("div", {
          key: 4,
          class: ue(["result", r.value.type])
        }, a(r.value.message), 3)) : d("", !0)
      ]),
      e("div", Pw, [
        b(pe, {
          variant: "secondary",
          onClick: f[9] || (f[9] = (C) => i("close"))
        }, {
          default: l(() => [...f[31] || (f[31] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(pe, {
          variant: v.value ? "danger" : "primary",
          disabled: !m.value || !g.value.trim() || u.value || k.value,
          loading: u.value,
          onClick: T
        }, {
          default: l(() => [
            y(a(u.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Hs = /* @__PURE__ */ Z(Dw, [["__scopeId", "data-v-aa2a9bdf"]]), Nw = { class: "modal-header" }, Uw = { class: "modal-body" }, Ow = { class: "switch-message" }, Bw = { class: "switch-details" }, Fw = { class: "modal-actions" }, Aw = /* @__PURE__ */ Q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", Nw, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Uw, [
            e("p", Ow, [
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
            e("p", Bw, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Fw, [
            b(oe, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(oe, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Vw = /* @__PURE__ */ Z(Aw, [["__scopeId", "data-v-e9c5253e"]]), Ww = {
  key: 0,
  class: "modal-overlay"
}, Gw = { class: "modal-content" }, jw = { class: "modal-body" }, qw = { class: "progress-info" }, Hw = { class: "progress-percentage" }, Kw = { class: "progress-state" }, Jw = { class: "switch-steps" }, Yw = { class: "step-icon" }, Xw = { class: "step-label" }, Qw = /* @__PURE__ */ Q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = N(() => {
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
    }), i = N(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), p = N(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = g.findIndex((v) => v.state === c.state);
      return g.map((v, r) => {
        let m = "pending", h = "○";
        return r < u ? (m = "completed", h = "✓") : r === u && (m = "active", h = "⟳"), {
          ...v,
          status: m,
          icon: h
        };
      });
    });
    return (g, u) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", Ww, [
        e("div", Gw, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", jw, [
            b(js, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", qw, [
              e("div", Hw, a(t.progress) + "%", 1),
              e("div", Kw, a(n.value), 1)
            ]),
            e("div", Jw, [
              (s(!0), o(A, null, se(p.value, (v) => (s(), o("div", {
                key: v.state,
                class: ue(["switch-step", v.status])
              }, [
                e("span", Yw, a(v.icon), 1),
                e("span", Xw, a(v.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Zw = /* @__PURE__ */ Z(Qw, [["__scopeId", "data-v-768a5078"]]), ek = { class: "modal-header" }, tk = { class: "modal-body" }, sk = {
  key: 0,
  class: "node-section"
}, ok = { class: "node-list" }, nk = {
  key: 1,
  class: "node-section"
}, ak = { class: "node-list" }, lk = { class: "modal-actions" }, ik = /* @__PURE__ */ Q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", ek, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", tk, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", sk, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", ok, [
                (s(!0), o(A, null, se(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", nk, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", ak, [
                (s(!0), o(A, null, se(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
          e("div", lk, [
            b(oe, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(oe, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), rk = /* @__PURE__ */ Z(ik, [["__scopeId", "data-v-7cad7518"]]), dk = /* @__PURE__ */ Q({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = $(null);
    async function i() {
      var g;
      await ((g = n.value) == null ? void 0 : g.saveSettings());
    }
    function p() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (g, u) => (s(), E(Ye, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (v) => g.$emit("close"))
    }, {
      body: l(() => [
        b(As, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: p
        }, null, 8, ["workspace-path"])
      ]),
      footer: l(() => {
        var v;
        return [
          b(pe, {
            variant: "primary",
            disabled: !((v = n.value) != null && v.hasChanges),
            onClick: i
          }, {
            default: l(() => [...u[2] || (u[2] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(pe, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (r) => g.$emit("close"))
          }, {
            default: l(() => [...u[3] || (u[3] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), ck = /* @__PURE__ */ Z(dk, [["__scopeId", "data-v-fac00ae7"]]), uk = { class: "header-actions" }, mk = {
  key: 0,
  class: "wizard-step"
}, vk = { class: "form-field" }, fk = ["placeholder"], gk = {
  key: 0,
  class: "form-error"
}, pk = { class: "form-field form-field--checkbox" }, hk = { class: "form-checkbox" }, yk = {
  key: 0,
  class: "form-field"
}, wk = ["placeholder"], kk = {
  key: 0,
  class: "form-info"
}, bk = {
  key: 1,
  class: "form-suggestion"
}, _k = {
  key: 2,
  class: "form-error"
}, $k = {
  key: 3,
  class: "form-info"
}, Ck = {
  key: 1,
  class: "wizard-step"
}, xk = {
  key: 0,
  class: "cli-warning"
}, Sk = {
  key: 1,
  class: "env-landing"
}, Ik = { class: "env-list" }, Ek = ["value"], Mk = { class: "env-name" }, Tk = {
  key: 2,
  class: "env-create"
}, Rk = { class: "form-field" }, zk = { class: "form-field" }, Lk = ["value"], Pk = { class: "form-field" }, Dk = ["disabled"], Nk = ["value"], Uk = { class: "form-field" }, Ok = ["value"], Bk = { class: "form-field form-field--checkbox" }, Fk = { class: "form-checkbox" }, Ak = {
  key: 0,
  class: "form-error"
}, Vk = {
  key: 1,
  class: "env-creating"
}, Wk = { class: "creating-intro" }, Gk = {
  key: 3,
  class: "env-import"
}, Et = 10, jk = 600 * 1e3, Ms = 1800 * 1e3, qk = /* @__PURE__ */ Q({
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
      initializeWorkspace: p,
      getInitializeProgress: g,
      validatePath: u,
      createEnvironment: v,
      getCreateProgress: r,
      getImportProgress: m,
      getComfyUIReleases: h
    } = Fe(), w = $(n.initialStep || 1), _ = $(null), k = $("landing"), T = $(!1), F = $(!1), f = $(n.defaultPath), C = $(!!n.detectedModelsDir), L = $(n.detectedModelsDir || ""), I = $(null), x = $(null), K = $(null), B = $(null), W = $("my-new-env"), P = $(Ws), M = $("latest"), O = $(Gs), ae = $(!0), X = $(null), H = $(null), de = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), J = $(!1), D = $(!1), z = $(!1), S = $({ progress: 0, message: "" }), ie = $({ progress: 0, message: "" }), ne = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Ee = $(0), be = $(null), le = $(0), re = $(null), me = N(() => {
      var ge, Me;
      const ee = (ge = f.value) == null ? void 0 : ge.trim(), j = !I.value, Te = !C.value || !x.value && ((Me = L.value) == null ? void 0 : Me.trim());
      return ee && j && Te;
    }), fe = N(() => {
      var ee;
      return (ee = W.value) == null ? void 0 : ee.trim();
    }), Oe = N(() => !!(w.value === 2 || H.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Re = N(() => H.value || n.workspacePath || null);
    async function ve() {
      var ee;
      if (I.value = null, !!((ee = f.value) != null && ee.trim()))
        try {
          const j = await u({ path: f.value, type: "workspace" });
          j.valid || (I.value = j.error || "Invalid path");
        } catch (j) {
          I.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function Ge() {
      var ee;
      if (x.value = null, K.value = null, B.value = null, !!((ee = L.value) != null && ee.trim()))
        try {
          const j = await u({ path: L.value, type: "models" });
          if (j.valid)
            B.value = j.model_count ?? null;
          else if (x.value = j.error || "Invalid path", j.suggestion) {
            K.value = j.suggestion, L.value = j.suggestion, x.value = null;
            const Te = await u({ path: j.suggestion, type: "models" });
            Te.valid && (B.value = Te.model_count ?? null);
          }
        } catch (j) {
          x.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function Se() {
      var ee, j, Te, ge, Me;
      if (I.value = null, x.value = null, await ve(), (ee = I.value) != null && ee.includes("already exists")) {
        I.value = null, H.value = ((j = f.value) == null ? void 0 : j.trim()) || n.defaultPath, w.value = 2, et();
        return;
      }
      if (!I.value && !(C.value && ((Te = L.value) != null && Te.trim()) && (await Ge(), x.value))) {
        D.value = !0;
        try {
          await p({
            workspace_path: ((ge = f.value) == null ? void 0 : ge.trim()) || n.defaultPath,
            models_directory: C.value && ((Me = L.value) == null ? void 0 : Me.trim()) || null
          }), Ee.value = 0, be.value = Date.now();
          const Ae = setInterval(async () => {
            var Y;
            if (be.value && Date.now() - be.value > jk) {
              clearInterval(Ae), D.value = !1, I.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const U = await g();
              if (Ee.value = 0, U.state === "idle" && D.value) {
                clearInterval(Ae), D.value = !1, I.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              S.value = { progress: U.progress, message: U.message }, U.state === "complete" ? (clearInterval(Ae), D.value = !1, H.value = ((Y = f.value) == null ? void 0 : Y.trim()) || n.defaultPath, w.value = 2, et()) : U.state === "error" && (clearInterval(Ae), D.value = !1, I.value = U.error || "Workspace creation failed");
            } catch (U) {
              Ee.value++, console.warn(`Polling failure ${Ee.value}/${Et}:`, U), Ee.value >= Et && (clearInterval(Ae), D.value = !1, I.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ae) {
          D.value = !1, I.value = Ae instanceof Error ? Ae.message : "Failed to create workspace";
        }
      }
    }
    async function nt() {
      z.value = !0, X.value = null;
      try {
        const ee = {
          name: W.value.trim() || "my-new-env",
          python_version: P.value,
          comfyui_version: M.value,
          torch_backend: O.value,
          switch_after: ae.value,
          workspace_path: H.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await v(ee)).status === "started") {
          le.value = 0, re.value = Date.now();
          const Te = setInterval(async () => {
            if (re.value && Date.now() - re.value > Ms) {
              clearInterval(Te), z.value = !1, X.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const ge = await r();
              if (le.value = 0, ge.state === "idle" && z.value) {
                clearInterval(Te), z.value = !1, X.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ie.value = {
                progress: ge.progress ?? 0,
                message: ge.message,
                phase: ge.phase
              }, ge.state === "complete") {
                clearInterval(Te), z.value = !1;
                const Me = ge.environment_name || ee.name;
                ae.value ? i("complete", Me, H.value) : (k.value = "landing", i("environment-created-no-switch", Me));
              } else ge.state === "error" && (clearInterval(Te), z.value = !1, X.value = ge.error || "Environment creation failed");
            } catch (ge) {
              le.value++, console.warn(`Polling failure ${le.value}/${Et}:`, ge), le.value >= Et && (clearInterval(Te), z.value = !1, X.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ee) {
        z.value = !1, X.value = ee instanceof Error ? ee.message : "Unknown error";
      }
    }
    async function et() {
      J.value = !0;
      try {
        de.value = await h();
      } catch (ee) {
        console.error("Failed to load ComfyUI releases:", ee);
      } finally {
        J.value = !1;
      }
    }
    function vt() {
      _.value && i("switch-environment", _.value, H.value);
    }
    function xe() {
      k.value === "create" || k.value === "import" ? k.value = "landing" : w.value === 2 && n.setupState === "no_workspace" && (w.value = 1);
    }
    function tt(ee, j) {
      F.value = !1, j ? i("complete", ee, H.value) : (i("environment-created-no-switch", ee), k.value = "landing");
    }
    function Xe() {
    }
    Ne(async () => {
      n.detectedModelsDir && (L.value = n.detectedModelsDir), n.workspacePath && (H.value = n.workspacePath), w.value === 2 && (et(), await je());
    });
    async function je() {
      try {
        const ee = await r();
        if (console.log("[ComfyGit] Create progress check:", ee.state, ee), ee.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ee.environment_name), k.value = "create", z.value = !0, W.value = ee.environment_name || "my-new-env", ie.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase
          }, ft();
          return;
        }
      } catch (ee) {
        console.log("[ComfyGit] Create progress check failed:", ee);
      }
      try {
        const ee = await m();
        console.log("[ComfyGit] Import progress check:", ee.state, ee), ee.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ee.environment_name), k.value = "import", F.value = !0);
      } catch (ee) {
        console.log("[ComfyGit] Import progress check failed:", ee);
      }
    }
    function ft() {
      le.value = 0, re.value = Date.now();
      const ee = setInterval(async () => {
        if (re.value && Date.now() - re.value > Ms) {
          clearInterval(ee), z.value = !1, X.value = "Environment creation timed out. Check server logs for details.";
          return;
        }
        try {
          const j = await r();
          if (le.value = 0, j.state === "idle" && z.value) {
            clearInterval(ee), z.value = !1, X.value = "Environment creation was interrupted. Please try again.";
            return;
          }
          if (ie.value = {
            progress: j.progress ?? 0,
            message: j.message,
            phase: j.phase
          }, j.state === "complete") {
            clearInterval(ee), z.value = !1;
            const Te = j.environment_name || W.value;
            i("complete", Te, H.value);
          } else j.state === "error" && (clearInterval(ee), z.value = !1, X.value = j.error || "Environment creation failed");
        } catch (j) {
          le.value++, console.warn(`Polling failure ${le.value}/${Et}:`, j), le.value >= Et && (clearInterval(ee), z.value = !1, X.value = "Lost connection to server. Please refresh and try again.");
        }
      }, 2e3);
    }
    return (ee, j) => (s(), o(A, null, [
      b(Ye, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: j[14] || (j[14] = (Te) => ee.$emit("close"))
      }, {
        header: l(() => [
          j[18] || (j[18] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", uk, [
            Oe.value ? (s(), o("button", {
              key: 0,
              class: "settings-btn",
              title: "Workspace Settings",
              onClick: j[0] || (j[0] = (Te) => T.value = !0)
            }, [...j[16] || (j[16] = [
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
              class: "base-modal-close",
              onClick: j[1] || (j[1] = (Te) => ee.$emit("close"))
            }, [...j[17] || (j[17] = [
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
          var Te;
          return [
            w.value === 1 ? (s(), o("div", mk, [
              j[22] || (j[22] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", vk, [
                j[19] || (j[19] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": j[2] || (j[2] = (ge) => f.value = ge),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, fk), [
                  [Tt, f.value]
                ]),
                I.value ? (s(), o("p", gk, a(I.value), 1)) : d("", !0)
              ]),
              e("div", pk, [
                e("label", hk, [
                  Ue(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": j[3] || (j[3] = (ge) => C.value = ge)
                  }, null, 512), [
                    [Xt, C.value]
                  ]),
                  j[20] || (j[20] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              C.value ? (s(), o("div", yk, [
                j[21] || (j[21] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": j[4] || (j[4] = (ge) => L.value = ge),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, wk), [
                  [Tt, L.value]
                ]),
                t.detectedModelsDir && !L.value ? (s(), o("p", kk, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
                K.value ? (s(), o("p", bk, " Did you mean: " + a(K.value), 1)) : d("", !0),
                x.value ? (s(), o("p", _k, a(x.value), 1)) : d("", !0),
                B.value !== null && !x.value ? (s(), o("p", $k, " Found " + a(B.value) + " model files ", 1)) : d("", !0)
              ])) : d("", !0),
              D.value ? (s(), E(es, {
                key: 1,
                progress: S.value.progress,
                message: S.value.message
              }, null, 8, ["progress", "message"])) : d("", !0)
            ])) : d("", !0),
            w.value === 2 ? (s(), o("div", Ck, [
              n.cliInstalled ? d("", !0) : (s(), o("div", xk, [...j[23] || (j[23] = [
                e("div", { class: "cli-warning-header" }, [
                  e("span", { class: "cli-warning-icon" }, "!"),
                  e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed")
                ], -1),
                e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1),
                e("div", { class: "cli-warning-commands" }, [
                  e("code", null, "pipx install comfygit"),
                  e("span", { class: "cli-warning-or" }, "or"),
                  e("code", null, "uv tool install comfygit")
                ], -1)
              ])])),
              k.value === "landing" ? (s(), o("div", Sk, [
                j[27] || (j[27] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                e("button", {
                  class: "landing-option",
                  onClick: j[5] || (j[5] = (ge) => k.value = "create")
                }, [...j[24] || (j[24] = [
                  e("span", { class: "option-icon" }, "➕", -1),
                  e("div", { class: "option-content" }, [
                    e("span", { class: "option-title" }, "Create New Environment"),
                    e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                  ], -1),
                  e("span", { class: "option-arrow" }, "▸", -1)
                ])]),
                e("button", {
                  class: "landing-option",
                  onClick: j[6] || (j[6] = (ge) => k.value = "import")
                }, [...j[25] || (j[25] = [
                  e("span", { class: "option-icon" }, "📦", -1),
                  e("div", { class: "option-content" }, [
                    e("span", { class: "option-title" }, "Import Environment"),
                    e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                  ], -1),
                  e("span", { class: "option-arrow" }, "▸", -1)
                ])]),
                (Te = n.existingEnvironments) != null && Te.length ? (s(), o(A, { key: 0 }, [
                  j[26] || (j[26] = e("div", { class: "landing-divider" }, [
                    e("span", null, "or switch to existing")
                  ], -1)),
                  e("div", Ik, [
                    (s(!0), o(A, null, se(n.existingEnvironments, (ge) => (s(), o("label", {
                      key: ge,
                      class: ue(["env-option", { selected: _.value === ge }])
                    }, [
                      Ue(e("input", {
                        type: "radio",
                        name: "env-select",
                        value: ge,
                        "onUpdate:modelValue": j[7] || (j[7] = (Me) => _.value = Me)
                      }, null, 8, Ek), [
                        [Kt, _.value]
                      ]),
                      e("span", Mk, a(ge), 1)
                    ], 2))), 128))
                  ]),
                  _.value ? (s(), E(pe, {
                    key: 0,
                    variant: "primary",
                    onClick: vt
                  }, {
                    default: l(() => [
                      y(" Switch to " + a(_.value), 1)
                    ]),
                    _: 1
                  })) : d("", !0)
                ], 64)) : d("", !0)
              ])) : k.value === "create" ? (s(), o("div", Tk, [
                z.value ? (s(), o("div", Vk, [
                  e("p", Wk, [
                    j[34] || (j[34] = y(" Creating environment ", -1)),
                    e("strong", null, a(W.value), 1),
                    j[35] || (j[35] = y("... ", -1))
                  ]),
                  b(es, {
                    progress: ie.value.progress,
                    message: ie.value.message,
                    "current-phase": ie.value.phase,
                    "show-steps": !0,
                    steps: ne
                  }, null, 8, ["progress", "message", "current-phase"]),
                  j[36] || (j[36] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                ])) : (s(), o(A, { key: 0 }, [
                  j[33] || (j[33] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                  e("div", Rk, [
                    j[28] || (j[28] = e("label", { class: "form-label" }, "Environment Name", -1)),
                    Ue(e("input", {
                      "onUpdate:modelValue": j[8] || (j[8] = (ge) => W.value = ge),
                      type: "text",
                      class: "form-input",
                      placeholder: "my-new-env"
                    }, null, 512), [
                      [Tt, W.value]
                    ])
                  ]),
                  e("div", zk, [
                    j[29] || (j[29] = e("label", { class: "form-label" }, "Python Version", -1)),
                    Ue(e("select", {
                      "onUpdate:modelValue": j[9] || (j[9] = (ge) => P.value = ge),
                      class: "form-select"
                    }, [
                      (s(!0), o(A, null, se(_e(Vs), (ge) => (s(), o("option", {
                        key: ge,
                        value: ge
                      }, a(ge), 9, Lk))), 128))
                    ], 512), [
                      [Rt, P.value]
                    ])
                  ]),
                  e("div", Pk, [
                    j[30] || (j[30] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                    Ue(e("select", {
                      "onUpdate:modelValue": j[10] || (j[10] = (ge) => M.value = ge),
                      class: "form-select",
                      disabled: J.value
                    }, [
                      (s(!0), o(A, null, se(de.value, (ge) => (s(), o("option", {
                        key: ge.tag_name,
                        value: ge.tag_name
                      }, a(ge.name), 9, Nk))), 128))
                    ], 8, Dk), [
                      [Rt, M.value]
                    ])
                  ]),
                  e("div", Uk, [
                    j[31] || (j[31] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                    Ue(e("select", {
                      "onUpdate:modelValue": j[11] || (j[11] = (ge) => O.value = ge),
                      class: "form-select"
                    }, [
                      (s(!0), o(A, null, se(_e(fs), (ge) => (s(), o("option", {
                        key: ge,
                        value: ge
                      }, a(ge) + a(ge === "auto" ? " (detect GPU)" : ""), 9, Ok))), 128))
                    ], 512), [
                      [Rt, O.value]
                    ])
                  ]),
                  e("div", Bk, [
                    e("label", Fk, [
                      Ue(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": j[12] || (j[12] = (ge) => ae.value = ge)
                      }, null, 512), [
                        [Xt, ae.value]
                      ]),
                      j[32] || (j[32] = e("span", null, "Switch to this environment after creation", -1))
                    ])
                  ]),
                  X.value ? (s(), o("div", Ak, a(X.value), 1)) : d("", !0)
                ], 64))
              ])) : k.value === "import" ? (s(), o("div", Gk, [
                b(qs, {
                  "workspace-path": H.value,
                  onImportComplete: tt,
                  onImportStarted: j[13] || (j[13] = (ge) => F.value = !0),
                  onSourceCleared: Xe
                }, null, 8, ["workspace-path"])
              ])) : d("", !0)
            ])) : d("", !0)
          ];
        }),
        footer: l(() => [
          w.value === 1 ? (s(), E(pe, {
            key: 0,
            variant: "primary",
            disabled: !me.value || D.value,
            onClick: Se
          }, {
            default: l(() => [
              y(a(D.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : w.value === 2 ? (s(), o(A, { key: 1 }, [
            !z.value && !F.value && (k.value !== "landing" || n.setupState === "no_workspace" && !H.value) ? (s(), E(pe, {
              key: 0,
              variant: "secondary",
              onClick: xe
            }, {
              default: l(() => [...j[37] || (j[37] = [
                y(" Back ", -1)
              ])]),
              _: 1
            })) : d("", !0),
            k.value === "create" ? (s(), E(pe, {
              key: 1,
              variant: "primary",
              disabled: !fe.value || z.value,
              onClick: nt
            }, {
              default: l(() => [
                y(a(z.value ? "Creating..." : ae.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : d("", !0)
          ], 64)) : d("", !0)
        ]),
        _: 1
      }),
      T.value ? (s(), E(ck, {
        key: 0,
        "workspace-path": Re.value,
        onClose: j[15] || (j[15] = (Te) => T.value = !1)
      }, null, 8, ["workspace-path"])) : d("", !0)
    ], 64));
  }
}), Hk = /* @__PURE__ */ Z(qk, [["__scopeId", "data-v-26b1c0b7"]]), Kk = { class: "comfygit-panel" }, Jk = { class: "panel-header" }, Yk = { class: "header-left" }, Xk = {
  key: 0,
  class: "header-info"
}, Qk = { class: "header-actions" }, Zk = { class: "env-switcher" }, eb = {
  key: 0,
  class: "header-info"
}, tb = { class: "branch-name" }, sb = { class: "panel-main" }, ob = { class: "sidebar" }, nb = { class: "sidebar-content" }, ab = { class: "sidebar-section" }, lb = { class: "sidebar-section" }, ib = { class: "sidebar-section" }, rb = { class: "content-area" }, db = {
  key: 0,
  class: "error-message"
}, cb = {
  key: 1,
  class: "loading"
}, ub = { class: "dialog-content env-selector-dialog" }, mb = { class: "dialog-header" }, vb = { class: "dialog-body" }, fb = { class: "env-list" }, gb = { class: "env-info" }, pb = { class: "env-name-row" }, hb = { class: "env-indicator" }, yb = { class: "env-name" }, wb = {
  key: 0,
  class: "env-branch"
}, kb = {
  key: 1,
  class: "current-label"
}, bb = { class: "env-stats" }, _b = ["onClick"], $b = { class: "toast-container" }, Cb = { class: "toast-message" }, xb = /* @__PURE__ */ Q({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: p,
      getHistory: g,
      getBranches: u,
      checkout: v,
      createBranch: r,
      switchBranch: m,
      deleteBranch: h,
      getEnvironments: w,
      switchEnvironment: _,
      getSwitchProgress: k,
      deleteEnvironment: T,
      syncEnvironmentManually: F,
      repairWorkflowModels: f,
      getSetupStatus: C
    } = Fe(), L = Ds();
    function I(G) {
      window.open(G, "_blank", "noopener,noreferrer");
    }
    const x = $(null), K = $([]), B = $([]), W = $([]), P = N(() => W.value.find((G) => G.is_current)), M = $(null), O = $(!1), ae = $(1), X = N(() => {
      var G;
      return ((G = M.value) == null ? void 0 : G.state) || "managed";
    }), H = $(!1), de = $(null), J = $(null), D = $(!1), z = $(null), S = $(null), ie = $(null), ne = $(!1), Ee = $(!1), be = $(""), le = $(null), re = $({ state: "idle", progress: 0, message: "" });
    let me = null, fe = null;
    const Oe = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Re = n.initialView ? Oe[n.initialView] : null, ve = $((Re == null ? void 0 : Re.view) ?? "status"), Ge = $((Re == null ? void 0 : Re.section) ?? "this-env");
    function Se(G, R) {
      ve.value = G, Ge.value = R;
    }
    function nt(G) {
      const he = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      he && Se(he.view, he.section);
    }
    function et() {
      Se("branches", "this-env");
    }
    function vt() {
      i("close"), setTimeout(() => {
        var R;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const he of G)
          if (((R = he.textContent) == null ? void 0 : R.trim()) === "Manager") {
            he.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const xe = $(null), tt = $(!1), Xe = $(!1), je = $([]);
    let ft = 0;
    function ee(G, R = "info", he = 3e3) {
      const Ce = ++ft;
      return je.value.push({ id: Ce, message: G, type: R }), he > 0 && setTimeout(() => {
        je.value = je.value.filter((Pe) => Pe.id !== Ce);
      }, he), Ce;
    }
    function j(G) {
      je.value = je.value.filter((R) => R.id !== G);
    }
    function Te(G, R) {
      ee(G, R);
    }
    const ge = N(() => {
      if (!x.value) return "neutral";
      const G = x.value.workflows, R = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    N(() => x.value ? ge.value === "success" ? "All synced" : ge.value === "warning" ? "Uncommitted changes" : ge.value === "error" ? "Not synced" : "" : "");
    async function Me() {
      H.value = !0, de.value = null;
      try {
        const [G, R, he, Ce] = await Promise.all([
          p(!0),
          g(),
          u(),
          w()
        ]);
        x.value = G, K.value = R.commits, B.value = he.branches, W.value = Ce, i("statusUpdate", G), z.value && await z.value.loadWorkflows(!0);
      } catch (G) {
        de.value = G instanceof Error ? G.message : "Failed to load status", x.value = null, K.value = [], B.value = [];
      } finally {
        H.value = !1;
      }
    }
    function Ae(G) {
      J.value = G;
    }
    async function Y(G) {
      var he;
      J.value = null;
      const R = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      xe.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((he = G.hash) == null ? void 0 : he.slice(0, 7))}?`,
        details: R ? ws() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var We;
          xe.value = null, Qe();
          const Ce = ee(`Checking out ${G.short_hash || ((We = G.hash) == null ? void 0 : We.slice(0, 7))}...`, "info", 0), Pe = await v(G.hash, R);
          j(Ce), Pe.status === "success" ? ee("Restarting ComfyUI...", "success") : ee(Pe.message || "Checkout failed", "error");
        }
      };
    }
    async function U(G) {
      const R = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      xe.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: R ? ws() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          xe.value = null, Qe();
          const he = ee(`Switching to ${G}...`, "info", 0), Ce = await m(G, R);
          j(he), Ce.status === "success" ? ee("Restarting ComfyUI...", "success") : ee(Ce.message || "Branch switch failed", "error");
        }
      };
    }
    async function V(G) {
      const R = ee(`Creating branch ${G}...`, "info", 0), he = await r(G);
      j(R), he.status === "success" ? (ee(`Branch "${G}" created`, "success"), await Me()) : ee(he.message || "Failed to create branch", "error");
    }
    async function te(G, R = !1) {
      const he = async (Ce) => {
        var We;
        const Pe = ee(`Deleting branch ${G}...`, "info", 0);
        try {
          const pt = await h(G, Ce);
          j(Pe), pt.status === "success" ? (ee(`Branch "${G}" deleted`, "success"), await Me()) : (We = pt.message) != null && We.includes("not fully merged") ? xe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              xe.value = null, await he(!0);
            }
          } : ee(pt.message || "Failed to delete branch", "error");
        } catch (pt) {
          j(Pe);
          const Pt = pt instanceof Error ? pt.message : "Failed to delete branch";
          Pt.includes("not fully merged") ? xe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              xe.value = null, await he(!0);
            }
          } : ee(Pt, "error");
        }
      };
      xe.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          xe.value = null, await he(R);
        }
      };
    }
    async function ke(G) {
      J.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const he = ee(`Creating branch ${R}...`, "info", 0), Ce = await r(R, G.hash);
        j(he), Ce.status === "success" ? (ee(`Branch "${R}" created from ${G.short_hash}`, "success"), await Me()) : ee(Ce.message || "Failed to create branch", "error");
      }
    }
    function Qe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function gt() {
      xe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          xe.value = null, Qe(), ee("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Ct() {
      xe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          xe.value = null, ee("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function at(G, R) {
      D.value = !1, be.value = G, le.value = R || null, ne.value = !0;
    }
    async function xt() {
      ne.value = !1, Ee.value = !0, Qe(), re.value = {
        progress: 10,
        state: St(10),
        message: q(10)
      };
      try {
        await _(be.value, le.value || void 0), ce(), Le();
      } catch (G) {
        ye(), Ee.value = !1, ee(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), re.value = { state: "idle", progress: 0, message: "" }, le.value = null;
      }
    }
    function St(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function q(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[St(G)] || "";
    }
    function ce() {
      if (fe) return;
      let G = 10;
      const R = 60, he = 5e3, Ce = 100, Pe = (R - G) / (he / Ce);
      fe = window.setInterval(() => {
        if (G += Pe, G >= R && (G = R, ye()), re.value.progress < R) {
          const We = Math.floor(G);
          re.value = {
            progress: We,
            state: St(We),
            message: q(We)
          };
        }
      }, Ce);
    }
    function ye() {
      fe && (clearInterval(fe), fe = null);
    }
    function Le() {
      me || (me = window.setInterval(async () => {
        try {
          let G = await L.getStatus();
          if ((!G || G.state === "idle") && (G = await k()), !G)
            return;
          const R = G.progress || 0;
          R >= 60 && ye();
          const he = Math.max(R, re.value.progress), Ce = G.state && G.state !== "idle" && G.state !== "unknown", Pe = Ce ? G.state : St(he), We = Ce && G.message || q(he);
          re.value = {
            state: Pe,
            progress: he,
            message: We
          }, G.state === "complete" ? (ye(), qe(), Ee.value = !1, ee(`✓ Switched to ${be.value}`, "success"), await Me(), be.value = "") : G.state === "rolled_back" ? (ye(), qe(), Ee.value = !1, ee("Switch failed, restored previous environment", "warning"), be.value = "") : G.state === "critical_failure" && (ye(), qe(), Ee.value = !1, ee(`Critical error during switch: ${G.message}`, "error"), be.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function qe() {
      ye(), me && (clearInterval(me), me = null);
    }
    function It() {
      var G;
      ne.value = !1, be.value = "", (G = M.value) != null && G.state && M.value.state !== "managed" && (ae.value = M.value.state === "no_workspace" ? 1 : 2, O.value = !0);
    }
    async function qt() {
      tt.value = !1, await Me(), ee("✓ Changes committed", "success");
    }
    async function Ht() {
      Xe.value = !1;
      const G = ee("Syncing environment...", "info", 0);
      try {
        const R = await F("skip", !0);
        if (j(G), R.status === "success") {
          const he = [];
          R.nodes_installed.length && he.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && he.push(`${R.nodes_removed.length} removed`);
          const Ce = he.length ? `: ${he.join(", ")}` : "";
          ee(`✓ Environment synced${Ce}`, "success"), await Me();
        } else {
          const he = R.errors.length ? R.errors.join("; ") : R.message;
          ee(`Sync failed: ${he}`, "error");
        }
      } catch (R) {
        j(G), ee(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function Zs(G) {
      var R;
      try {
        const he = await f(G);
        he.failed.length === 0 ? ee(`✓ Repaired ${he.success} workflow${he.success === 1 ? "" : "s"}`, "success") : ee(`Repaired ${he.success}, failed: ${he.failed.length}`, "warning"), await Me();
      } catch (he) {
        ee(`Repair failed: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
      } finally {
        (R = ie.value) == null || R.resetRepairingState();
      }
    }
    async function ys() {
      var R, he;
      const G = ee("Repairing environment...", "info", 0);
      try {
        const Ce = await F("skip", !0);
        if (j(G), Ce.status === "success") {
          const Pe = [];
          Ce.nodes_installed.length && Pe.push(`${Ce.nodes_installed.length} installed`), Ce.nodes_removed.length && Pe.push(`${Ce.nodes_removed.length} removed`);
          const We = Pe.length ? `: ${Pe.join(", ")}` : "";
          ee(`✓ Environment repaired${We}`, "success"), (R = ie.value) == null || R.closeDetailModal(), await Me();
        } else {
          const Pe = Ce.errors.length ? Ce.errors.join(", ") : Ce.message || "Unknown error";
          ee(`Repair failed: ${Pe}`, "error");
        }
      } catch (Ce) {
        j(G), ee(`Repair error: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
      } finally {
        (he = ie.value) == null || he.resetRepairingEnvironmentState();
      }
    }
    async function eo(G, R) {
      ee(`Environment '${G}' created`, "success"), await Me(), S.value && await S.value.loadEnvironments(), R && await at(G);
    }
    async function to(G) {
      var R;
      if (((R = P.value) == null ? void 0 : R.name) === G) {
        ee("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      xe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${G}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          xe.value = null;
          try {
            const he = await T(G);
            he.status === "success" ? (ee(`Environment "${G}" deleted`, "success"), await Me(), S.value && await S.value.loadEnvironments()) : ee(he.message || "Failed to delete environment", "error");
          } catch (he) {
            ee(`Error deleting environment: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function so(G, R) {
      O.value = !1;
      try {
        M.value = await C();
      } catch {
      }
      await at(G, R);
    }
    function oo() {
      O.value = !1, i("close");
    }
    async function no(G, R) {
      await at(G, R);
    }
    async function ao(G) {
      await Me(), await at(G);
    }
    async function lo(G) {
      M.value = await C(), console.log(`Environment '${G}' created. Available for switching.`);
    }
    function io() {
      Se("environments", "all-envs"), setTimeout(() => {
        var G;
        (G = S.value) == null || G.openCreateModal();
      }, 100);
    }
    function ws() {
      if (!x.value) return [];
      const G = [], R = x.value.workflows;
      return R.new.length && G.push(`${R.new.length} new workflow(s)`), R.modified.length && G.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && G.push(`${R.deleted.length} deleted workflow(s)`), G;
    }
    return Ne(async () => {
      try {
        if (M.value = await C(), M.value.state === "no_workspace") {
          O.value = !0, ae.value = 1;
          return;
        }
        if (M.value.state === "empty_workspace") {
          O.value = !0, ae.value = 2;
          return;
        }
        if (M.value.state === "unmanaged") {
          O.value = !0, ae.value = 2;
          return;
        }
      } catch (G) {
        console.warn("Setup status check failed, proceeding normally:", G);
      }
      await Me();
    }), (G, R) => {
      var he, Ce, Pe, We, pt, Pt, ks, bs, _s, $s, Cs, xs;
      return s(), o("div", Kk, [
        e("div", Jk, [
          e("div", Yk, [
            R[35] || (R[35] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", Xk)) : d("", !0)
          ]),
          e("div", Qk, [
            e("button", {
              class: "sponsor-btn",
              onClick: R[0] || (R[0] = (we) => I("https://github.com/sponsors/comfyhub-org")),
              title: "Sponsor ComfyHub",
              "aria-label": "Sponsor ComfyHub on GitHub"
            }, [...R[36] || (R[36] = [
              y(" Sponsor ", -1),
              e("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[1] || (R[1] = (we) => I("https://discord.gg/2h5rSTeh6Y")),
              title: "Join Discord",
              "aria-label": "Join ComfyHub Discord"
            }, [...R[37] || (R[37] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.027-.07 8.735 8.735 0 0 1-1.248-.595.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085c-.399.233-.813.44-1.249.594a.05.05 0 0 0-.027.07c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zM5.347 10.64c-.79 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.807 0 1.451.733 1.44 1.613 0 .888-.637 1.612-1.44 1.612zm5.316 0c-.788 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.808 0 1.451.733 1.44 1.613 0 .888-.632 1.612-1.44 1.612z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[2] || (R[2] = (we) => I("https://x.com/akatz_ai")),
              title: "Follow on X",
              "aria-label": "Follow on X"
            }, [...R[38] || (R[38] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[3] || (R[3] = (we) => I("https://github.com/comfyhub-org/comfygit")),
              title: "View on GitHub",
              "aria-label": "View ComfyGit on GitHub"
            }, [...R[39] || (R[39] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[4] || (R[4] = (we) => I("https://docs.comfyhub.org/comfygit/")),
              title: "Documentation",
              "aria-label": "View ComfyGit Documentation"
            }, [...R[40] || (R[40] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" })
              ], -1)
            ])]),
            R[43] || (R[43] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: ue(["icon-btn", { spinning: H.value }]),
              onClick: Me,
              title: "Refresh"
            }, [...R[41] || (R[41] = [
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
              onClick: R[5] || (R[5] = (we) => i("close")),
              title: "Close"
            }, [...R[42] || (R[42] = [
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
        e("div", Zk, [
          e("div", { class: "env-switcher-header" }, [
            R[44] || (R[44] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: gt
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
            onClick: R[6] || (R[6] = (we) => Se("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", eb, [
              e("span", null, a(((he = P.value) == null ? void 0 : he.name) || ((Ce = x.value) == null ? void 0 : Ce.environment) || "Loading..."), 1),
              e("span", tb, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            R[45] || (R[45] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", sb, [
          e("div", ob, [
            e("div", nb, [
              e("div", ab, [
                R[46] || (R[46] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "status" && Ge.value === "this-env" }]),
                  onClick: R[7] || (R[7] = (we) => Se("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "workflows" }]),
                  onClick: R[8] || (R[8] = (we) => Se("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "models-env" }]),
                  onClick: R[9] || (R[9] = (we) => Se("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "branches" }]),
                  onClick: R[10] || (R[10] = (we) => Se("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "history" }]),
                  onClick: R[11] || (R[11] = (we) => Se("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "nodes" }]),
                  onClick: R[12] || (R[12] = (we) => Se("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "debug-env" }]),
                  onClick: R[13] || (R[13] = (we) => Se("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              R[49] || (R[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", lb, [
                R[47] || (R[47] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "environments" }]),
                  onClick: R[14] || (R[14] = (we) => Se("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "model-index" }]),
                  onClick: R[15] || (R[15] = (we) => Se("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "settings" }]),
                  onClick: R[16] || (R[16] = (we) => Se("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "debug-workspace" }]),
                  onClick: R[17] || (R[17] = (we) => Se("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              R[50] || (R[50] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", ib, [
                R[48] || (R[48] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "export" }]),
                  onClick: R[18] || (R[18] = (we) => Se("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "import" }]),
                  onClick: R[19] || (R[19] = (we) => Se("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: ue(["sidebar-item", { active: ve.value === "remotes" }]),
                  onClick: R[20] || (R[20] = (we) => Se("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            R[51] || (R[51] = mo('<div class="sidebar-footer" data-v-1340da17><span class="version" data-v-1340da17>v0.0.1</span><span class="made-by" data-v-1340da17>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-1340da17><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-1340da17></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", rb, [
            de.value ? (s(), o("div", db, a(de.value), 1)) : !x.value && ve.value === "status" ? (s(), o("div", cb, " Loading status... ")) : (s(), o(A, { key: 2 }, [
              ve.value === "status" ? (s(), E(Ga, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ie,
                status: x.value,
                "setup-state": X.value,
                onSwitchBranch: et,
                onCommitChanges: R[21] || (R[21] = (we) => tt.value = !0),
                onSyncEnvironment: R[22] || (R[22] = (we) => Xe.value = !0),
                onViewWorkflows: R[23] || (R[23] = (we) => Se("workflows", "this-env")),
                onViewHistory: R[24] || (R[24] = (we) => Se("history", "this-env")),
                onViewDebug: R[25] || (R[25] = (we) => Se("debug-env", "this-env")),
                onViewNodes: R[26] || (R[26] = (we) => Se("nodes", "this-env")),
                onRepairMissingModels: Zs,
                onRepairEnvironment: ys,
                onStartSetup: R[27] || (R[27] = (we) => O.value = !0),
                onViewEnvironments: R[28] || (R[28] = (we) => Se("environments", "all-envs")),
                onCreateEnvironment: io
              }, null, 8, ["status", "setup-state"])) : ve.value === "workflows" ? (s(), E(mm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: z,
                onRefresh: Me
              }, null, 512)) : ve.value === "models-env" ? (s(), E(Km, {
                key: 2,
                onNavigate: nt
              })) : ve.value === "branches" ? (s(), E(al, {
                key: 3,
                branches: B.value,
                current: ((Pe = x.value) == null ? void 0 : Pe.branch) || null,
                onSwitch: U,
                onCreate: V,
                onDelete: te
              }, null, 8, ["branches", "current"])) : ve.value === "history" ? (s(), E(pl, {
                key: 4,
                commits: K.value,
                onSelect: Ae,
                onCheckout: Y
              }, null, 8, ["commits"])) : ve.value === "nodes" ? (s(), E(Gv, {
                key: 5,
                "version-mismatches": ((pt = (We = x.value) == null ? void 0 : We.comparison) == null ? void 0 : pt.version_mismatches) || [],
                onOpenNodeManager: vt,
                onRepairEnvironment: ys,
                onToast: Te
              }, null, 8, ["version-mismatches"])) : ve.value === "debug-env" ? (s(), E(Qp, { key: 6 })) : ve.value === "environments" ? (s(), E(t1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: S,
                onSwitch: at,
                onCreated: eo,
                onDelete: to
              }, null, 512)) : ve.value === "model-index" ? (s(), E(fv, {
                key: 8,
                onRefresh: Me
              })) : ve.value === "settings" ? (s(), E(Kp, { key: 9 })) : ve.value === "debug-workspace" ? (s(), E(Yp, { key: 10 })) : ve.value === "export" ? (s(), E(L1, { key: 11 })) : ve.value === "import" ? (s(), E(S0, {
                key: 12,
                onImportCompleteSwitch: ao
              })) : ve.value === "remotes" ? (s(), E(Ip, {
                key: 13,
                onToast: Te
              })) : d("", !0)
            ], 64))
          ])
        ]),
        J.value ? (s(), E(G0, {
          key: 0,
          commit: J.value,
          onClose: R[29] || (R[29] = (we) => J.value = null),
          onCheckout: Y,
          onCreateBranch: ke
        }, null, 8, ["commit"])) : d("", !0),
        xe.value ? (s(), E(Bs, {
          key: 1,
          title: xe.value.title,
          message: xe.value.message,
          details: xe.value.details,
          warning: xe.value.warning,
          confirmLabel: xe.value.confirmLabel,
          cancelLabel: xe.value.cancelLabel,
          secondaryLabel: xe.value.secondaryLabel,
          secondaryAction: xe.value.secondaryAction,
          destructive: xe.value.destructive,
          onConfirm: xe.value.onConfirm,
          onCancel: R[30] || (R[30] = (we) => xe.value = null),
          onSecondary: xe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        b(Vw, {
          show: ne.value,
          "from-environment": ((Pt = P.value) == null ? void 0 : Pt.name) || "unknown",
          "to-environment": be.value,
          onConfirm: xt,
          onClose: It
        }, null, 8, ["show", "from-environment", "to-environment"]),
        tt.value && x.value ? (s(), E(Hs, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: R[31] || (R[31] = (we) => tt.value = !1),
          onCommitted: qt
        }, null, 8, ["status"])) : d("", !0),
        Xe.value && x.value ? (s(), E(rk, {
          key: 3,
          show: Xe.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Ht,
          onClose: R[32] || (R[32] = (we) => Xe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        b(Zw, {
          show: Ee.value,
          state: re.value.state,
          progress: re.value.progress,
          message: re.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        D.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[34] || (R[34] = ze((we) => D.value = !1, ["self"]))
        }, [
          e("div", ub, [
            e("div", mb, [
              R[53] || (R[53] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[33] || (R[33] = (we) => D.value = !1)
              }, [...R[52] || (R[52] = [
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
            e("div", vb, [
              R[54] || (R[54] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", fb, [
                (s(!0), o(A, null, se(W.value, (we) => (s(), o("div", {
                  key: we.name,
                  class: ue(["env-item", { current: we.is_current }])
                }, [
                  e("div", gb, [
                    e("div", pb, [
                      e("span", hb, a(we.is_current ? "●" : "○"), 1),
                      e("span", yb, a(we.name), 1),
                      we.current_branch ? (s(), o("span", wb, "(" + a(we.current_branch) + ")", 1)) : d("", !0),
                      we.is_current ? (s(), o("span", kb, "CURRENT")) : d("", !0)
                    ]),
                    e("div", bb, a(we.workflow_count) + " workflows • " + a(we.node_count) + " nodes ", 1)
                  ]),
                  we.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (z2) => at(we.name)
                  }, " SWITCH ", 8, _b))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        O.value ? (s(), E(Hk, {
          key: 5,
          "default-path": ((ks = M.value) == null ? void 0 : ks.default_path) || "~/comfygit",
          "detected-models-dir": ((bs = M.value) == null ? void 0 : bs.detected_models_dir) || null,
          "initial-step": ae.value,
          "existing-environments": ((_s = M.value) == null ? void 0 : _s.environments) || [],
          "cli-installed": (($s = M.value) == null ? void 0 : $s.cli_installed) ?? !0,
          "setup-state": ((Cs = M.value) == null ? void 0 : Cs.state) || "no_workspace",
          "workspace-path": ((xs = M.value) == null ? void 0 : xs.workspace_path) || null,
          onComplete: so,
          onClose: oo,
          onSwitchEnvironment: no,
          onEnvironmentCreatedNoSwitch: lo
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : d("", !0),
        e("div", $b, [
          b(vo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(A, null, se(je.value, (we) => (s(), o("div", {
                key: we.id,
                class: ue(["toast", we.type])
              }, [
                e("span", Cb, a(we.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Sb = /* @__PURE__ */ Z(xb, [["__scopeId", "data-v-1340da17"]]), Ib = { class: "item-header" }, Eb = { class: "item-info" }, Mb = { class: "filename" }, Tb = { class: "metadata" }, Rb = { class: "size" }, zb = {
  key: 0,
  class: "type"
}, Lb = { class: "item-actions" }, Pb = {
  key: 0,
  class: "progress-section"
}, Db = { class: "progress-bar" }, Nb = { class: "progress-stats" }, Ub = { class: "downloaded" }, Ob = { class: "speed" }, Bb = {
  key: 0,
  class: "eta"
}, Fb = {
  key: 1,
  class: "status-msg paused"
}, Ab = {
  key: 2,
  class: "status-msg queued"
}, Vb = {
  key: 3,
  class: "status-msg completed"
}, Wb = {
  key: 4,
  class: "status-msg failed"
}, Gb = {
  key: 0,
  class: "retries"
}, jb = /* @__PURE__ */ Q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(u) {
      if (u === 0) return "?";
      const v = u / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const v = Math.floor(u / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (u, v) => (s(), o("div", {
      class: ue(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Ib, [
        e("div", Eb, [
          e("div", Mb, a(t.item.filename), 1),
          e("div", Tb, [
            e("span", Rb, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", zb, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Lb, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (r) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (r) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (r) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (r) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Pb, [
        e("div", Db, [
          e("div", {
            class: "progress-fill",
            style: yt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Nb, [
          e("span", Ub, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", Ob, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Bb, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Fb, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Ab, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", Vb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Wb, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", Gb, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ Z(jb, [["__scopeId", "data-v-2110df65"]]), qb = { class: "queue-title" }, Hb = { class: "count" }, Kb = { class: "queue-actions" }, Jb = { class: "action-label" }, Yb = {
  key: 0,
  class: "overall-progress"
}, Xb = { class: "progress-bar" }, Qb = {
  key: 0,
  class: "current-mini"
}, Zb = { class: "filename" }, e2 = { class: "speed" }, t2 = {
  key: 1,
  class: "queue-content"
}, s2 = {
  key: 0,
  class: "section"
}, o2 = {
  key: 1,
  class: "section"
}, n2 = { class: "section-header" }, a2 = { class: "section-label paused" }, l2 = { class: "items-list" }, i2 = {
  key: 2,
  class: "section"
}, r2 = { class: "section-header" }, d2 = { class: "section-label" }, c2 = { class: "items-list" }, u2 = {
  key: 3,
  class: "section"
}, m2 = { class: "section-header" }, v2 = { class: "section-label" }, f2 = { class: "items-list" }, g2 = {
  key: 4,
  class: "section"
}, p2 = { class: "section-header" }, h2 = { class: "section-label failed" }, y2 = { class: "items-list" }, w2 = /* @__PURE__ */ Q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: p,
      failedItems: g,
      pausedItems: u,
      hasItems: v,
      activeCount: r,
      cancelDownload: m,
      retryDownload: h,
      resumeDownload: w,
      resumeAllPaused: _,
      removeItem: k,
      clearCompleted: T
    } = Gt(), F = $(!1);
    let f = null;
    _t(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: u.value.length,
        completed: p.value.length
      }),
      (x, K) => {
        f && (clearTimeout(f), f = null);
        const B = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, W = K && (K.active > 0 || K.paused > 0);
        B && W && (f = setTimeout(() => {
          T(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = N(() => {
      var B;
      if (c.items.length === 0) return 0;
      const x = p.value.length, K = ((B = n.value) == null ? void 0 : B.progress) || 0;
      return Math.round((x + K / 100) / c.items.length * 100);
    });
    function L(x) {
      m(x);
    }
    function I(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, K) => (s(), E(Ve, { to: "body" }, [
      _e(v) ? (s(), o("div", {
        key: 0,
        class: ue(["model-download-queue", { minimized: !F.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: K[0] || (K[0] = (B) => F.value = !F.value)
        }, [
          e("div", qb, [
            K[4] || (K[4] = e("span", { class: "icon" }, "↓", -1)),
            K[5] || (K[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Hb, "(" + a(_e(r)) + "/" + a(_e(c).items.length) + ")", 1)
          ]),
          e("div", Kb, [
            e("span", Jb, a(F.value ? "minimize" : "expand"), 1)
          ])
        ]),
        F.value ? (s(), o("div", t2, [
          _e(n) ? (s(), o("div", s2, [
            K[6] || (K[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            b(Ut, {
              item: _e(n),
              onCancel: K[1] || (K[1] = (B) => L(_e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          _e(u).length > 0 ? (s(), o("div", o2, [
            e("div", n2, [
              e("span", a2, "Paused (" + a(_e(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: K[2] || (K[2] = //@ts-ignore
                (...B) => _e(_) && _e(_)(...B))
              }, "Resume All")
            ]),
            e("div", l2, [
              (s(!0), o(A, null, se(_e(u), (B) => (s(), E(Ut, {
                key: B.id,
                item: B,
                onResume: (W) => _e(w)(B.id),
                onRemove: (W) => _e(k)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(i).length > 0 ? (s(), o("div", i2, [
            e("div", r2, [
              e("span", d2, "Queued (" + a(_e(i).length) + ")", 1)
            ]),
            e("div", c2, [
              (s(!0), o(A, null, se(_e(i), (B) => (s(), E(Ut, {
                key: B.id,
                item: B,
                onCancel: (W) => L(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          _e(p).length > 0 ? (s(), o("div", u2, [
            e("div", m2, [
              e("span", v2, "Completed (" + a(_e(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: K[3] || (K[3] = //@ts-ignore
                (...B) => _e(T) && _e(T)(...B))
              }, "Clear")
            ]),
            e("div", f2, [
              (s(!0), o(A, null, se(_e(p).slice(0, 3), (B) => (s(), E(Ut, {
                key: B.id,
                item: B,
                onRemove: (W) => _e(k)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(g).length > 0 ? (s(), o("div", g2, [
            e("div", p2, [
              e("span", h2, "Failed (" + a(_e(g).length) + ")", 1)
            ]),
            e("div", y2, [
              (s(!0), o(A, null, se(_e(g), (B) => (s(), E(Ut, {
                key: B.id,
                item: B,
                onRetry: (W) => _e(h)(B.id),
                onRemove: (W) => _e(k)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Yb, [
          e("div", Xb, [
            e("div", {
              class: "progress-fill",
              style: yt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          _e(n) ? (s(), o("div", Qb, [
            e("span", Zb, a(_e(n).filename), 1),
            e("span", e2, a(I(_e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), k2 = /* @__PURE__ */ Z(w2, [["__scopeId", "data-v-60751cfa"]]), b2 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', _2 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', $2 = {
  comfy: b2,
  phosphor: _2
}, gs = "comfy", Ks = "comfygit-theme";
let $t = null, Js = gs;
function C2() {
  try {
    const t = localStorage.getItem(Ks);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return gs;
}
function Ys(t = gs) {
  $t && $t.remove(), $t = document.createElement("style"), $t.id = "comfygit-theme-styles", $t.setAttribute("data-theme", t), $t.textContent = $2[t], document.head.appendChild($t), document.body.setAttribute("data-comfygit-theme", t), Js = t;
  try {
    localStorage.setItem(Ks, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function x2() {
  return Js;
}
function S2(t) {
  Ys(t);
}
function I2(t) {
  var g;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const p = i[c];
  return p && p.result === "error" && ((g = p.status) == null ? void 0 : g.status_str) === "error" ? (p.status.messages || [])[0] || "Unknown error" : null;
}
const ps = document.createElement("link");
ps.rel = "stylesheet";
ps.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ps);
const E2 = C2();
Ys(E2);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), S2(t);
  },
  getTheme: () => {
    const t = x2();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let it = null, Ze = null, At = null, Ot = null, Ts = null;
const zt = $(null);
let hs = "managed", Xs = !1;
async function Yt() {
  var t;
  if (!((t = bt) != null && t.api)) return null;
  try {
    const c = await bt.api.fetchApi("/v2/comfygit/status");
    c.ok && (zt.value = await c.json());
  } catch {
  }
}
async function is() {
  var t;
  if ((t = bt) != null && t.api)
    try {
      const c = await bt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        hs = n.state, Xs = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function rs() {
  var c;
  if (hs === "managed" || !Xs) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function M2() {
  if (!zt.value) return !1;
  const t = zt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || zt.value.has_changes;
}
function Rs(t) {
  it && it.remove(), it = document.createElement("div"), it.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", it.appendChild(c), it.addEventListener("click", (p) => {
    p.target === it && as();
  });
  const n = (p) => {
    p.key === "Escape" && (as(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), us({
    render: () => ms(Sb, {
      initialView: t,
      onClose: as,
      onStatusUpdate: async (p) => {
        zt.value = p, Vt(), await is(), ds(), rs();
      }
    })
  }).mount(c), document.body.appendChild(it);
}
function as() {
  it && (it.remove(), it = null);
}
function T2(t) {
  Bt(), Ze = document.createElement("div"), Ze.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Ze.style.position = "fixed", Ze.style.top = `${c.bottom + 8}px`, Ze.style.right = `${window.innerWidth - c.right}px`, Ze.style.zIndex = "10001";
  const n = (p) => {
    Ze && !Ze.contains(p.target) && p.target !== t && (Bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (p) => {
    p.key === "Escape" && (Bt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), At = us({
    render: () => ms(Hs, {
      status: zt.value,
      onClose: Bt,
      onCommitted: () => {
        Bt(), Yt().then(Vt);
      }
    })
  }), At.mount(Ze), document.body.appendChild(Ze);
}
function Bt() {
  At && (At.unmount(), At = null), Ze && (Ze.remove(), Ze = null);
}
function R2() {
  Ot || (Ot = document.createElement("div"), Ot.className = "comfygit-download-queue-root", Ts = us({
    render: () => ms(k2)
  }), Ts.mount(Ot), document.body.appendChild(Ot), console.log("[ComfyGit] Model download queue mounted"));
}
let st = null;
function Vt() {
  if (!st) return;
  const t = st.querySelector(".commit-indicator");
  t && (t.style.display = M2() ? "block" : "none");
}
function ds() {
  if (!st) return;
  const t = hs !== "managed";
  st.disabled = t, st.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Qs = document.createElement("style");
Qs.textContent = `
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
document.head.appendChild(Qs);
bt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Rs, st = document.createElement("button"), st.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", st.innerHTML = 'Commit <span class="commit-indicator"></span>', st.title = "Quick Commit", st.onclick = () => T2(st), t.appendChild(c), t.appendChild(st), (g = (p = bt.menu) == null ? void 0 : p.settingsGroup) != null && g.element && (bt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), R2();
    const { loadPendingDownloads: n } = Gt();
    n(), await Promise.all([Yt(), is()]), Vt(), ds(), rs(), setTimeout(rs, 100), setInterval(async () => {
      await Promise.all([Yt(), is()]), Vt(), ds();
    }, 3e4);
    const i = bt.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((h) => {
          (h.startsWith("workflow:") || h.startsWith("Comfy.OpenWorkflowsPaths:") || h.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(h);
        }), window.location.reload();
      }, v = function() {
        const h = document.createElement("div");
        h.style.cssText = `
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
        w.textContent = "Workflows updated - refresh required", h.appendChild(w);
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
        `, _.onmouseover = () => _.style.background = "var(--comfy-input-bg)", _.onmouseout = () => _.style.background = "var(--comfy-menu-bg)", _.onclick = () => u(), h.appendChild(_);
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
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => h.remove(), h.appendChild(k), document.body.appendChild(h), console.log("[ComfyGit] Refresh notification displayed");
      }, r = function(h) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
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
        const k = document.createElement("span");
        k.textContent = "⚠️", k.style.fontSize = "20px", _.appendChild(k);
        const T = document.createElement("div");
        T.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const F = document.createElement("div");
        F.textContent = "Node installation failed", F.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(F);
        const f = document.createElement("div");
        f.textContent = "Dependency conflict detected", f.style.cssText = "font-size: 12px; opacity: 0.8;", T.appendChild(f), _.appendChild(T);
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
          _.remove(), Rs("debug-env");
        }, _.appendChild(C);
        const L = document.createElement("button");
        L.textContent = "×", L.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, L.onmouseover = () => L.style.opacity = "1", L.onmouseout = () => L.style.opacity = "0.6", L.onclick = () => _.remove(), _.appendChild(L), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", h), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && _.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (h) => {
        const { change_type: w, workflow_name: _ } = h.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${_}`), await Yt(), Vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      i.addEventListener("status", async (h) => {
        const w = h.detail != null;
        w && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : v()), m = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (h) => {
        const w = I2(h.detail);
        w && r(w);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
