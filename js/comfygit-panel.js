import { app as Tt } from "../../scripts/app.js";
import { defineComponent as ne, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Pe, createBlock as S, resolveDynamicComponent as Rs, normalizeClass as pe, withCtx as l, toDisplayString as a, createVNode as w, createTextVNode as g, computed as B, Fragment as W, renderList as ae, normalizeStyle as It, ref as h, onMounted as Fe, watch as vt, Teleport as Xe, withModifiers as Ae, Transition as Io, createSlots as Ft, withKeys as Ct, reactive as bs, onUnmounted as Ms, readonly as Eo, unref as Ee, withDirectives as Le, vModelText as At, vModelRadio as Dt, vModelCheckbox as hs, nextTick as to, vModelSelect as St, vModelDynamic as Po, TransitionGroup as Ro, createApp as Ts, h as Ds } from "vue";
const Mo = { class: "panel-layout" }, To = {
  key: 0,
  class: "panel-layout-header"
}, Do = {
  key: 1,
  class: "panel-layout-search"
}, Lo = { class: "panel-layout-content" }, zo = {
  key: 2,
  class: "panel-layout-footer"
}, Uo = /* @__PURE__ */ ne({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", Mo, [
      c.$slots.header ? (s(), o("div", To, [
        Pe(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", Do, [
        Pe(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Lo, [
        Pe(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", zo, [
        Pe(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), le = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, p] of c)
    n[i] = p;
  return n;
}, st = /* @__PURE__ */ le(Uo, [["__scopeId", "data-v-21565df9"]]), No = {
  key: 0,
  class: "panel-title-prefix"
}, Oo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Bo = /* @__PURE__ */ ne({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), S(Rs(`h${t.level}`), {
      class: pe(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", No, a(t.prefix), 1)) : (s(), o("span", Oo)),
        Pe(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ao = /* @__PURE__ */ le(Bo, [["__scopeId", "data-v-c3875efc"]]), Fo = ["title"], Vo = ["width", "height"], Wo = /* @__PURE__ */ ne({
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
      ])], 8, Vo))
    ], 8, Fo));
  }
}), so = /* @__PURE__ */ le(Wo, [["__scopeId", "data-v-6fc7f16d"]]), Go = { class: "header-left" }, jo = {
  key: 0,
  class: "header-actions"
}, Ko = /* @__PURE__ */ ne({
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
      e("div", Go, [
        w(Ao, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            g(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), S(so, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", jo, [
        Pe(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ le(Ko, [["__scopeId", "data-v-55a62cd6"]]), Ho = {
  key: 0,
  class: "section-title-count"
}, qo = {
  key: 1,
  class: "section-title-icon"
}, Yo = /* @__PURE__ */ ne({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), S(Rs(`h${t.level}`), {
      class: pe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Pe(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ho, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", qo, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), mt = /* @__PURE__ */ le(Yo, [["__scopeId", "data-v-559361eb"]]), Jo = { class: "status-grid" }, Xo = { class: "status-grid__columns" }, Qo = { class: "status-grid__column" }, Zo = { class: "status-grid__title" }, en = { class: "status-grid__column status-grid__column--right" }, tn = { class: "status-grid__title" }, sn = {
  key: 0,
  class: "status-grid__footer"
}, on = /* @__PURE__ */ ne({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Jo, [
      e("div", Xo, [
        e("div", Qo, [
          e("h4", Zo, a(t.leftTitle), 1),
          Pe(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", en, [
          e("h4", tn, a(t.rightTitle), 1),
          Pe(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", sn, [
        Pe(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), nn = /* @__PURE__ */ le(on, [["__scopeId", "data-v-73b7ba3f"]]), an = {
  key: 0,
  class: "status-item__icon"
}, ln = {
  key: 1,
  class: "status-item__count"
}, rn = { class: "status-item__label" }, dn = /* @__PURE__ */ ne({
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
    return (i, p) => (s(), o("div", {
      class: pe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", an, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", ln, a(t.count), 1)) : r("", !0),
      e("span", rn, a(t.label), 1)
    ], 2));
  }
}), _t = /* @__PURE__ */ le(dn, [["__scopeId", "data-v-6f929183"]]), cn = { class: "issue-card__header" }, un = { class: "issue-card__icon" }, mn = { class: "issue-card__title" }, vn = {
  key: 0,
  class: "issue-card__content"
}, fn = {
  key: 0,
  class: "issue-card__description"
}, pn = {
  key: 1,
  class: "issue-card__items"
}, gn = {
  key: 2,
  class: "issue-card__actions"
}, hn = /* @__PURE__ */ ne({
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
    return (i, p) => (s(), o("div", {
      class: pe(["issue-card", n.value])
    }, [
      e("div", cn, [
        e("span", un, a(t.icon), 1),
        e("h4", mn, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", vn, [
        t.description ? (s(), o("p", fn, a(t.description), 1)) : r("", !0),
        Pe(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", pn, [
        (s(!0), o(W, null, ae(t.items, (f, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(f), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (s(), o("div", gn, [
        Pe(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ le(hn, [["__scopeId", "data-v-df6aa348"]]), yn = ["type", "disabled"], wn = {
  key: 0,
  class: "spinner"
}, kn = /* @__PURE__ */ ne({
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
      t.loading ? (s(), o("span", wn)) : r("", !0),
      t.loading ? r("", !0) : Pe(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, yn));
  }
}), te = /* @__PURE__ */ le(kn, [["__scopeId", "data-v-772abe47"]]), bn = { class: "empty-state" }, _n = {
  key: 0,
  class: "empty-icon"
}, $n = { class: "empty-message" }, Cn = /* @__PURE__ */ ne({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", bn, [
      t.icon ? (s(), o("div", _n, a(t.icon), 1)) : r("", !0),
      e("p", $n, a(t.message), 1),
      t.actionLabel ? (s(), S(te, {
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
}), wt = /* @__PURE__ */ le(Cn, [["__scopeId", "data-v-4466284f"]]), xn = /* @__PURE__ */ ne({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: pe(["detail-label"]),
      style: It({ minWidth: t.minWidth })
    }, [
      Pe(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ps = /* @__PURE__ */ le(xn, [["__scopeId", "data-v-75e9eeb8"]]), Sn = /* @__PURE__ */ ne({
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
      Pe(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ss = /* @__PURE__ */ le(Sn, [["__scopeId", "data-v-2f186e4c"]]), In = { class: "detail-row" }, En = /* @__PURE__ */ ne({
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
    return (c, n) => (s(), o("div", In, [
      w(ps, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          g(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), S(Ss, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          g(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Pe(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), We = /* @__PURE__ */ le(En, [["__scopeId", "data-v-ef15664a"]]), Pn = { class: "modal-header" }, Rn = { class: "modal-body" }, Mn = { class: "status-section" }, Tn = {
  key: 0,
  class: "status-section"
}, Dn = { class: "section-header-row" }, Ln = {
  key: 0,
  class: "workflow-group"
}, zn = { class: "workflow-group-header" }, Un = { class: "workflow-group-title" }, Nn = { class: "workflow-list" }, On = { class: "workflow-name" }, Bn = { class: "workflow-issue" }, An = {
  key: 1,
  class: "workflow-group"
}, Fn = { class: "workflow-group-header" }, Vn = { class: "workflow-group-title" }, Wn = { class: "workflow-list" }, Gn = { class: "workflow-name" }, jn = { class: "workflow-issue" }, Kn = {
  key: 2,
  class: "workflow-group"
}, Hn = { class: "workflow-group-header" }, qn = { class: "workflow-group-title" }, Yn = { class: "workflow-list" }, Jn = { class: "workflow-name" }, Xn = {
  key: 3,
  class: "workflow-group"
}, Qn = { class: "workflow-group-header" }, Zn = { class: "workflow-group-title" }, ea = { class: "workflow-list" }, ta = { class: "workflow-name" }, sa = {
  key: 4,
  class: "workflow-group"
}, oa = { class: "workflow-group-header" }, na = { class: "workflow-group-title" }, aa = { class: "workflow-list" }, la = { class: "workflow-name" }, ia = {
  key: 5,
  class: "workflow-group"
}, ra = { class: "workflow-group-title" }, da = { class: "expand-icon" }, ca = {
  key: 0,
  class: "workflow-list"
}, ua = { class: "workflow-name" }, ma = {
  key: 1,
  class: "status-section"
}, va = {
  key: 0,
  class: "change-group"
}, fa = { class: "change-group-header" }, pa = { class: "change-group-title" }, ga = { class: "change-list" }, ha = { class: "node-name" }, ya = {
  key: 0,
  class: "dev-badge"
}, wa = {
  key: 1,
  class: "change-group"
}, ka = { class: "change-group-header" }, ba = { class: "change-group-title" }, _a = { class: "change-list" }, $a = { class: "node-name" }, Ca = {
  key: 0,
  class: "dev-badge"
}, xa = {
  key: 2,
  class: "change-group"
}, Sa = { class: "change-list" }, Ia = { class: "change-item" }, Ea = { class: "node-name" }, Pa = {
  key: 3,
  class: "change-group"
}, Ra = {
  key: 2,
  class: "status-section"
}, Ma = { class: "section-header-row" }, Ta = {
  key: 0,
  class: "drift-item"
}, Da = { class: "drift-list" }, La = {
  key: 0,
  class: "drift-list-more"
}, za = {
  key: 1,
  class: "drift-item"
}, Ua = { class: "drift-list" }, Na = {
  key: 0,
  class: "drift-list-more"
}, Oa = {
  key: 2,
  class: "drift-item"
}, Ba = { class: "drift-list" }, Aa = { class: "version-actual" }, Fa = { class: "version-expected" }, Va = {
  key: 0,
  class: "drift-list-more"
}, Wa = {
  key: 3,
  class: "drift-item"
}, Ga = { class: "repair-action" }, ja = {
  key: 3,
  class: "status-section"
}, Ka = { class: "info-box" }, Ha = { class: "drift-list" }, qa = {
  key: 0,
  class: "drift-list-more"
}, Ya = {
  key: 4,
  class: "status-section"
}, Ja = { class: "warning-box" }, Xa = {
  key: 5,
  class: "empty-state-inline"
}, Qa = { class: "modal-actions" }, Za = /* @__PURE__ */ ne({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = h(!1);
    Fe(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), vt(() => c.show, (_, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", _);
    }, { immediate: !0 });
    const i = B(() => {
      var _, b, L;
      return ((L = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : L.filter(
        (D) => D.status === "broken" && D.sync_state === "synced"
      )) || [];
    }), p = B(() => {
      var _, b, L;
      return ((L = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : L.filter(
        (D) => D.status === "broken" && D.sync_state !== "synced"
      )) || [];
    }), f = B(() => {
      var _, b, L;
      return ((L = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.synced) == null ? void 0 : L.filter((D) => {
        var I, G, C;
        const $ = (C = (G = (I = c.status) == null ? void 0 : I.workflows) == null ? void 0 : G.analyzed) == null ? void 0 : C.find((M) => M.name === D);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = B(() => {
      var _, b, L, D, $;
      return (_ = c.status) != null && _.workflows ? (((b = c.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((L = c.status.workflows.modified) == null ? void 0 : L.length) ?? 0) > 0 || (((D = c.status.workflows.deleted) == null ? void 0 : D.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), m = B(() => {
      var b, L, D;
      const _ = (b = c.status) == null ? void 0 : b.git_changes;
      return _ ? (((L = _.nodes_added) == null ? void 0 : L.length) ?? 0) > 0 || (((D = _.nodes_removed) == null ? void 0 : D.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), d = B(() => {
      var _, b, L, D, $, I;
      return !u.value && !m.value && ((b = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : b.is_synced) && (((L = c.status) == null ? void 0 : L.missing_models_count) ?? 0) === 0 && (((I = ($ = (D = c.status) == null ? void 0 : D.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : I.length) ?? 0) === 0;
    }), v = B(() => {
      var b, L;
      const _ = (L = (b = c.status) == null ? void 0 : b.git_changes) == null ? void 0 : L.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function y(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function k(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, b) => {
      var L, D, $, I, G, C, M, Q, F, j, x, z, A, de, ee, Y, re, X, O, N, E, ce;
      return s(), S(Xe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[7] || (b[7] = (se) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[6] || (b[6] = Ae(() => {
            }, ["stop"]))
          }, [
            e("div", Pn, [
              b[8] || (b[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (se) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", Rn, [
              e("div", Mn, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[9] || (b[9] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                w(We, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", Tn, [
                e("div", Dn, [
                  w(mt, { level: "4" }, {
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
                i.value.length ? (s(), o("div", Ln, [
                  e("div", zn, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Un, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", Nn, [
                    (s(!0), o(W, null, ae(i.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", On, a(se.name), 1),
                      e("span", Bn, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                p.value.length ? (s(), o("div", An, [
                  e("div", Fn, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Vn, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", Wn, [
                    (s(!0), o(W, null, ae(p.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", Gn, a(se.name), 1),
                      e("span", jn, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (D = (L = t.status.workflows) == null ? void 0 : L.new) != null && D.length ? (s(), o("div", Kn, [
                  e("div", Hn, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", qn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Yn, [
                    (s(!0), o(W, null, ae(t.status.workflows.new, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Jn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (I = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && I.length ? (s(), o("div", Xn, [
                  e("div", Qn, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Zn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", ea, [
                    (s(!0), o(W, null, ae(t.status.workflows.modified, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", ta, a(se), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (C = (G = t.status.workflows) == null ? void 0 : G.deleted) != null && C.length ? (s(), o("div", sa, [
                  e("div", oa, [
                    b[15] || (b[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", na, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", aa, [
                    (s(!0), o(W, null, ae(t.status.workflows.deleted, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", la, a(se), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                f.value.length ? (s(), o("div", ia, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (se) => n.value = !n.value)
                  }, [
                    b[16] || (b[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ra, "SYNCED (" + a(f.value.length) + ")", 1),
                    e("span", da, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", ca, [
                    (s(!0), o(W, null, ae(f.value, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", ua, a(se), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              m.value ? (s(), o("div", ma, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[17] || (b[17] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (Q = (M = t.status.git_changes) == null ? void 0 : M.nodes_added) != null && Q.length ? (s(), o("div", va, [
                  e("div", fa, [
                    b[18] || (b[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", pa, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ga, [
                    (s(!0), o(W, null, ae(t.status.git_changes.nodes_added, (se) => (s(), o("div", {
                      key: y(se),
                      class: "change-item"
                    }, [
                      e("span", ha, a(y(se)), 1),
                      k(se) ? (s(), o("span", ya, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (j = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && j.length ? (s(), o("div", wa, [
                  e("div", ka, [
                    b[19] || (b[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ba, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", _a, [
                    (s(!0), o(W, null, ae(t.status.git_changes.nodes_removed, (se) => (s(), o("div", {
                      key: y(se),
                      class: "change-item"
                    }, [
                      e("span", $a, a(y(se)), 1),
                      k(se) ? (s(), o("span", Ca, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (x = t.status.git_changes) != null && x.workflow_changes ? (s(), o("div", xa, [
                  b[20] || (b[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Sa, [
                    e("div", Ia, [
                      e("span", Ea, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (z = t.status.git_changes) != null && z.has_other_changes ? (s(), o("div", Pa, [...b[21] || (b[21] = [
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
              (A = t.status.comparison) != null && A.is_synced ? r("", !0) : (s(), o("div", Ra, [
                e("div", Ma, [
                  w(mt, { level: "4" }, {
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
                (ee = (de = t.status.comparison) == null ? void 0 : de.missing_nodes) != null && ee.length ? (s(), o("div", Ta, [
                  w(We, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Da, [
                    (s(!0), o(W, null, ae(t.status.comparison.missing_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", La, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (re = (Y = t.status.comparison) == null ? void 0 : Y.extra_nodes) != null && re.length ? (s(), o("div", za, [
                  w(We, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Ua, [
                    (s(!0), o(W, null, ae(t.status.comparison.extra_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Na, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (O = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && O.length ? (s(), o("div", Oa, [
                  w(We, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", Ba, [
                    (s(!0), o(W, null, ae(t.status.comparison.version_mismatches.slice(0, 10), (se) => (s(), o("div", {
                      key: se.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      g(a(se.name) + ": ", 1),
                      e("span", Aa, a(se.actual), 1),
                      b[23] || (b[23] = g(" → ", -1)),
                      e("span", Fa, a(se.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Va, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((N = t.status.comparison) == null ? void 0 : N.packages_in_sync) === !1 ? (s(), o("div", Wa, [
                  w(We, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Ga, [
                  w(te, {
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
              (ce = (E = t.status.comparison) == null ? void 0 : E.disabled_nodes) != null && ce.length ? (s(), o("div", ja, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[27] || (b[27] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ka, [
                  b[28] || (b[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ha, [
                  (s(!0), o(W, null, ae(t.status.comparison.disabled_nodes.slice(0, 10), (se) => (s(), o("div", {
                    key: se,
                    class: "drift-list-item"
                  }, " • " + a(se), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", qa, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Ya, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[29] || (b[29] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ja, [
                  b[30] || (b[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[31] || (b[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (s(), o("div", Xa, [...b[32] || (b[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", Qa, [
              w(te, {
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
}), el = /* @__PURE__ */ le(Za, [["__scopeId", "data-v-e2b37122"]]), tl = { class: "health-section-header" }, sl = { class: "suggestions-content" }, ol = { class: "suggestions-text" }, nl = { style: { "margin-top": "var(--cg-space-3)" } }, al = {
  key: 1,
  class: "no-issues-text"
}, ll = /* @__PURE__ */ ne({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, p = h(!1), f = h(!1);
    function u() {
      p.value = !0;
    }
    function m() {
      p.value = !1, v("view-workflows");
    }
    function d() {
      p.value = !1, v("view-nodes");
    }
    const v = n, y = h(!1), k = h(!1);
    function _() {
      k.value = !0, v("repair-environment");
    }
    function b() {
      k.value = !1;
    }
    function L() {
      p.value = !1;
    }
    const D = B(() => {
      const X = i.status.workflows.analyzed || [], O = X.filter(
        (N) => N.unresolved_models_count > 0 || N.ambiguous_models_count > 0
      );
      return O.length === 0 && i.status.missing_models_count > 0 ? X.filter((N) => N.sync_state === "synced") : O;
    });
    function $() {
      const X = D.value;
      X.length !== 0 && (y.value = !0, v("repair-missing-models", X.map((O) => O.name)));
    }
    function I() {
      y.value = !1;
    }
    c({ resetRepairingState: I, resetRepairingEnvironmentState: b, closeDetailModal: L });
    const G = B(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), C = B(() => i.status.has_changes), M = B(() => {
      const X = i.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), Q = B(() => i.status.has_changes || G.value), F = B(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), j = B(() => i.status.git_changes.has_other_changes), x = B(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter((O) => O.status === "broken")) || [];
    }), z = B(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter(
        (O) => O.has_path_sync_issues && !O.has_issues
      )) || [];
    }), A = B(() => x.value.length > 0), de = B(() => A.value || z.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), ee = B(() => {
      const X = [];
      return i.status.workflows.new.length > 0 && X.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && X.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && X.push(`${i.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Y = B(() => {
      var N, E;
      const X = [], O = i.status.comparison;
      return (N = O.missing_nodes) != null && N.length && X.push(`${O.missing_nodes.length} missing node${O.missing_nodes.length === 1 ? "" : "s"}`), (E = O.extra_nodes) != null && E.length && X.push(`${O.extra_nodes.length} untracked node${O.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), re = B(() => {
      var N, E;
      const X = [], O = i.status.comparison;
      return (N = O.extra_nodes) != null && N.length && (O.extra_nodes.slice(0, 3).forEach((ce) => {
        X.push(`Untracked: ${ce}`);
      }), O.extra_nodes.length > 3 && X.push(`...and ${O.extra_nodes.length - 3} more untracked`)), (E = O.missing_nodes) != null && E.length && (O.missing_nodes.slice(0, 3).forEach((ce) => {
        X.push(`Missing: ${ce}`);
      }), O.missing_nodes.length > 3 && X.push(`...and ${O.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, O) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), S(gt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (N) => X.$emit("start-setup"))
              }, {
                default: l(() => [...O[13] || (O[13] = [
                  g(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), S(gt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (N) => X.$emit("view-environments"))
              }, {
                default: l(() => [...O[14] || (O[14] = [
                  g(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), S(gt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: O[2] || (O[2] = (N) => X.$emit("create-environment"))
              }, {
                default: l(() => [...O[15] || (O[15] = [
                  g(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: O[4] || (O[4] = (N) => f.value = !0),
            onMouseleave: O[5] || (O[5] = (N) => f.value = !1)
          }, [
            e("div", tl, [
              w(mt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...O[16] || (O[16] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              w(Io, { name: "fade" }, {
                default: l(() => [
                  f.value ? (s(), S(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: l(() => [...O[17] || (O[17] = [
                      g(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            w(nn, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Ft({
              left: l(() => [
                t.status.workflows.new.length ? (s(), S(_t, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), S(_t, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), S(_t, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                w(_t, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: G.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), S(_t, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), S(_t, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), S(_t, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                j.value ? (s(), S(_t, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                C.value && !M.value && !j.value ? (s(), S(_t, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                C.value ? r("", !0) : (s(), S(_t, {
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
                  O[19] || (O[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", sl, [
                    e("span", ol, a(ee.value), 1),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: O[3] || (O[3] = (N) => X.$emit("commit-changes"))
                    }, {
                      default: l(() => [...O[18] || (O[18] = [
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
          t.status.is_detached_head ? (s(), S(gt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: O[6] || (O[6] = (N) => X.$emit("create-branch"))
              }, {
                default: l(() => [...O[20] || (O[20] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", nl, [
            w(mt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...O[21] || (O[21] = [
                g(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            de.value ? (s(), o(W, { key: 0 }, [
              x.value.length > 0 ? (s(), S(gt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${x.value.length} workflow${x.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: x.value.map((N) => `${N.name} — ${N.issue_summary}`)
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[7] || (O[7] = (N) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...O[22] || (O[22] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              z.value.length > 0 ? (s(), S(gt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${z.value.length} workflow${z.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: z.value.map((N) => `${N.name} — ${N.models_needing_path_sync_count} model path${N.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[8] || (O[8] = (N) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...O[23] || (O[23] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !A.value ? (s(), S(gt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    disabled: y.value,
                    onClick: $
                  }, {
                    default: l(() => [
                      g(a(y.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  w(te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: O[9] || (O[9] = (N) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...O[24] || (O[24] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), S(gt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Y.value,
                items: re.value
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...O[25] || (O[25] = [
                      g(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[10] || (O[10] = (N) => X.$emit("view-nodes"))
                  }, {
                    default: l(() => [...O[26] || (O[26] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), S(gt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[11] || (O[11] = (N) => X.$emit("view-nodes"))
                  }, {
                    default: l(() => [...O[27] || (O[27] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : Q.value ? (s(), o("span", al, "No issues")) : (s(), S(wt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      w(el, {
        show: p.value,
        status: t.status,
        "is-repairing": k.value,
        onClose: O[12] || (O[12] = (N) => p.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: d,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), il = /* @__PURE__ */ le(ll, [["__scopeId", "data-v-55fcd77f"]]), rl = ["type", "value", "placeholder", "disabled"], dl = /* @__PURE__ */ ne({
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
    const i = t, p = n, f = h(null);
    function u(m) {
      const d = m.target.value;
      p("update:modelValue", d);
    }
    return Fe(() => {
      i.autoFocus && f.value && f.value.focus();
    }), c({
      focus: () => {
        var m;
        return (m = f.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = f.value) == null ? void 0 : m.blur();
      }
    }), (m, d) => (s(), o("input", {
      ref_key: "inputRef",
      ref: f,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: pe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = Ct((v) => m.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ct((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => m.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => m.$emit("blur"))
    }, null, 42, rl));
  }
}), ys = /* @__PURE__ */ le(dl, [["__scopeId", "data-v-0380d08f"]]), cl = { class: "branch-create-form" }, ul = { class: "form-actions" }, ml = /* @__PURE__ */ ne({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = h(""), p = B(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function f() {
      p.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (m, d) => (s(), o("div", cl, [
      w(ys, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => i.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: f,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", ul, [
        w(te, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: f
        }, {
          default: l(() => [...d[1] || (d[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        w(te, {
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
}), vl = /* @__PURE__ */ le(ml, [["__scopeId", "data-v-7c500394"]]), fl = { class: "branch-list-item__indicator" }, pl = { class: "branch-list-item__name" }, gl = {
  key: 0,
  class: "branch-list-item__actions"
}, hl = {
  key: 0,
  class: "branch-list-item__current-label"
}, yl = /* @__PURE__ */ ne({
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
      e("span", fl, a(t.isCurrent ? "●" : "○"), 1),
      e("span", pl, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", gl, [
        Pe(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", hl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), wl = /* @__PURE__ */ le(yl, [["__scopeId", "data-v-c6581a24"]]), kl = {
  key: 2,
  class: "branch-list"
}, bl = /* @__PURE__ */ ne({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = h(!1);
    function p(u) {
      n("create", u), f();
    }
    function f() {
      i.value = !1;
    }
    return (u, m) => (s(), S(st, null, {
      header: l(() => [
        w(ot, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? r("", !0) : (s(), S(te, {
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
        i.value ? (s(), S(vl, {
          key: 0,
          onCreate: p,
          onCancel: f
        })) : r("", !0),
        t.branches.length === 0 ? (s(), S(wt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", kl, [
          (s(!0), o(W, null, ae(t.branches, (d) => (s(), S(wl, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: l(() => [
              d.is_current ? r("", !0) : (s(), S(te, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => u.$emit("delete", d.name)
              }, {
                default: l(() => [...m[2] || (m[2] = [
                  g(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? r("", !0) : (s(), S(te, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => u.$emit("switch", d.name)
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
}), _l = /* @__PURE__ */ le(bl, [["__scopeId", "data-v-86784ddd"]]), $l = { class: "commit-list" }, Cl = /* @__PURE__ */ ne({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", $l, [
      Pe(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), xl = /* @__PURE__ */ le(Cl, [["__scopeId", "data-v-8c5ee761"]]), Sl = { class: "commit-hash" }, Il = /* @__PURE__ */ ne({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = B(() => c.hash.slice(0, c.length));
    return (i, p) => (s(), o("span", Sl, a(n.value), 1));
  }
}), oo = /* @__PURE__ */ le(Il, [["__scopeId", "data-v-7c333cc6"]]), El = { class: "commit-message" }, Pl = { class: "commit-date" }, Rl = /* @__PURE__ */ ne({
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
    return (f, u) => (s(), o("div", {
      class: pe(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      w(oo, { hash: t.hash }, null, 8, ["hash"]),
      e("span", El, a(t.message), 1),
      e("span", Pl, a(t.relativeDate), 1),
      f.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Ae(() => {
        }, ["stop"]))
      }, [
        Pe(f.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Ml = /* @__PURE__ */ le(Rl, [["__scopeId", "data-v-dd7c621b"]]), Tl = /* @__PURE__ */ ne({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), S(st, null, {
      header: l(() => [
        w(ot, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), S(wt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), S(xl, { key: 1 }, {
          default: l(() => [
            (s(!0), o(W, null, ae(t.commits, (i) => (s(), S(Ml, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (p) => c.$emit("select", i)
            }, {
              actions: l(() => [
                w(te, {
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
}), Dl = /* @__PURE__ */ le(Tl, [["__scopeId", "data-v-981c3c64"]]), RC = bs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const MC = [
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
], TC = {
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
}, Ll = [
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
], DC = [
  ...Ll,
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
function qe() {
  const t = h(!1), c = h(null);
  async function n(K, T) {
    var ue;
    if (!((ue = window.app) != null && ue.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(K, T);
    if (!R.ok) {
      const $e = await R.json().catch(() => ({}));
      throw new Error($e.error || $e.message || `Request failed: ${R.status}`);
    }
    return R.json();
  }
  async function i(K = !1) {
    return n(K ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(K, T = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: K, allow_issues: T })
    });
  }
  async function f(K = 10, T = 0) {
    return n(`/v2/comfygit/log?limit=${K}&offset=${T}`);
  }
  async function u(K) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
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
  async function v(K) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K, force: !0 })
    });
  }
  async function y() {
    return n("/v2/comfygit/branches");
  }
  async function k(K) {
    return n(`/v2/comfygit/commit/${K}`);
  }
  async function _(K, T = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: K, force: T })
    });
  }
  async function b(K, T = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, start_point: T })
    });
  }
  async function L(K, T = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: K, force: T })
    });
  }
  async function D(K, T = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(K)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: T })
    });
  }
  async function $() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const K = await i();
        return [{
          name: K.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + K.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: K.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: K.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function I(K, T) {
    const R = { target_env: K };
    return T && (R.workspace_path = T), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(R)
    });
  }
  async function G() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function C(K) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function M() {
    return n("/v2/workspace/environments/create_status");
  }
  async function Q(K = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${K}`);
  }
  async function F(K) {
    return n(`/v2/workspace/environments/${K}`, {
      method: "DELETE"
    });
  }
  async function j(K = !1) {
    try {
      return n(K ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const T = await i(K), R = [];
      return T.workflows.new.forEach((ue) => {
        R.push({ name: ue, status: "new", missing_nodes: 0, missing_models: 0, path: ue });
      }), T.workflows.modified.forEach((ue) => {
        R.push({ name: ue, status: "modified", missing_nodes: 0, missing_models: 0, path: ue });
      }), T.workflows.synced.forEach((ue) => {
        R.push({ name: ue, status: "synced", missing_nodes: 0, missing_models: 0, path: ue });
      }), R;
    }
  }
  async function x(K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/details`);
  }
  async function z(K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/resolve`, {
      method: "POST"
    });
  }
  async function A(K, T, R) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: T, install_models: R })
    });
  }
  async function de(K, T, R) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: T, importance: R })
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
  async function re(K) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(K)}`);
  }
  async function X(K) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function O(K, T) {
    return n(`/v2/workspace/models/${K}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: T })
    });
  }
  async function N(K, T) {
    return n(`/v2/workspace/models/${K}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: T })
    });
  }
  async function E(K) {
    return n(`/v2/workspace/models/${K}`, {
      method: "DELETE"
    });
  }
  async function ce(K) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function se() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function we() {
    return n("/v2/workspace/models/directory");
  }
  async function xe(K) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function Re(K) {
    try {
      const T = K ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(K)}` : "/v2/comfygit/config";
      return n(T);
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
  async function ze(K, T) {
    const R = T ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(T)}` : "/v2/comfygit/config";
    return n(R, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function me(K, T) {
    try {
      const R = new URLSearchParams();
      return K && R.append("level", K), T && R.append("lines", T.toString()), n(`/v2/comfygit/debug/logs?${R}`);
    } catch {
      return [];
    }
  }
  async function he(K, T) {
    try {
      const R = new URLSearchParams();
      return K && R.append("level", K), T && R.append("lines", T.toString()), n(`/v2/workspace/debug/logs?${R}`);
    } catch {
      return [];
    }
  }
  async function Se() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Z() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function ie(K, T) {
    try {
      const R = new URLSearchParams();
      return K && R.append("level", K), T && R.append("lines", T.toString()), n(`/v2/workspace/debug/orchestrator-logs?${R}`);
    } catch {
      return [];
    }
  }
  async function ge() {
    return n("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Ue(K) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
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
  async function et(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ie(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/install`, {
      method: "POST"
    });
  }
  async function Be(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/update`, {
      method: "POST"
    });
  }
  async function Je(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function He() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function lt(K, T) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, url: T })
    });
  }
  async function be(K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function Ge(K, T, R) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: T, push_url: R })
    });
  }
  async function Me(K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/fetch`, {
      method: "POST"
    });
  }
  async function Qe(K) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/status`);
    } catch {
      return null;
    }
  }
  async function De(K = "skip", T = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: K,
        remove_extra_nodes: T
      })
    });
  }
  async function fe(K, T) {
    const R = T ? `/v2/comfygit/remotes/${encodeURIComponent(K)}/pull-preview?branch=${encodeURIComponent(T)}` : `/v2/comfygit/remotes/${encodeURIComponent(K)}/pull-preview`;
    return n(R);
  }
  async function H(K, T = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: T.modelStrategy || "skip",
        force: T.force || !1,
        resolutions: T.resolutions
      })
    });
  }
  async function q(K, T) {
    const R = T ? `/v2/comfygit/remotes/${encodeURIComponent(K)}/push-preview?branch=${encodeURIComponent(T)}` : `/v2/comfygit/remotes/${encodeURIComponent(K)}/push-preview`;
    return n(R);
  }
  async function P(K, T = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: T.force || !1 })
    });
  }
  async function V(K, T) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: T })
    });
  }
  async function oe(K) {
    const T = {
      success: 0,
      failed: []
    };
    for (const R of K)
      try {
        await z(R), T.success++;
      } catch (ue) {
        T.failed.push({
          name: R,
          error: ue instanceof Error ? ue.message : "Unknown error"
        });
      }
    return T;
  }
  async function ke(K) {
    var ue;
    const T = new FormData();
    if (T.append("file", K), !((ue = window.app) != null && ue.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: T
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!R.ok) {
      const $e = await R.json().catch(() => ({}));
      throw new Error($e.error || `Preview failed: ${R.status}`);
    }
    return R.json();
  }
  async function Ve(K) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(K)}`
    );
  }
  async function ft(K, T, R, ue) {
    var je;
    const $e = new FormData();
    if ($e.append("file", K), $e.append("name", T), $e.append("model_strategy", R), $e.append("torch_backend", ue), !((je = window.app) != null && je.api))
      throw new Error("ComfyUI API not available");
    const Ne = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: $e
    });
    if (!Ne.ok) {
      const at = await Ne.json().catch(() => ({}));
      throw new Error(at.message || at.error || `Import failed: ${Ne.status}`);
    }
    return Ne.json();
  }
  async function Ze() {
    return n("/v2/workspace/import/status");
  }
  async function rt(K) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: K })
    });
  }
  async function dt(K, T, R, ue) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: K,
        name: T,
        model_strategy: R,
        torch_backend: ue
      })
    });
  }
  async function Rt() {
    return n("/v2/setup/status");
  }
  async function Jt(K) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function ct() {
    return n("/v2/setup/initialize_status");
  }
  async function Xt(K) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function Lt() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function Qt() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Zt(K, T) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: K, save_key: T })
    });
  }
  async function es() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function zt(K) {
    const T = K ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(K)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(T);
  }
  async function Vt(K) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function pt() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function ts(K) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function ss(K) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/stop`, {
      method: "POST"
    });
  }
  async function os(K) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/start`, {
      method: "POST"
    });
  }
  async function Wt(K) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/status`);
  }
  async function ns(K) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
    });
  }
  async function Ut(K = !1) {
    return n(K ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Gt() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: p,
    getHistory: f,
    exportEnv: u,
    validateExport: m,
    validateDeploy: d,
    exportEnvWithForce: v,
    // Git Operations
    getBranches: y,
    getCommitDetail: k,
    checkout: _,
    createBranch: b,
    switchBranch: L,
    deleteBranch: D,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: I,
    getSwitchProgress: G,
    createEnvironment: C,
    getCreateProgress: M,
    getComfyUIReleases: Q,
    deleteEnvironment: F,
    // Workflow Management
    getWorkflows: j,
    getWorkflowDetails: x,
    resolveWorkflow: z,
    installWorkflowDeps: A,
    setModelImportance: de,
    // Model Management
    getEnvironmentModels: ee,
    getWorkspaceModels: Y,
    getModelDetails: re,
    openFileLocation: X,
    addModelSource: O,
    removeModelSource: N,
    deleteModel: E,
    downloadModel: ce,
    scanWorkspaceModels: se,
    getModelsDirectory: we,
    setModelsDirectory: xe,
    // Settings
    getConfig: Re,
    updateConfig: ze,
    // Debug/Logs
    getEnvironmentLogs: me,
    getWorkspaceLogs: he,
    getEnvironmentLogPath: Se,
    getWorkspaceLogPath: Z,
    getOrchestratorLogs: ie,
    getOrchestratorLogPath: ge,
    openFile: Ue,
    // Node Management
    getNodes: Ye,
    trackNodeAsDev: et,
    installNode: Ie,
    updateNode: Be,
    uninstallNode: Je,
    // Git Remotes
    getRemotes: He,
    addRemote: lt,
    removeRemote: be,
    updateRemoteUrl: Ge,
    fetchRemote: Me,
    getRemoteSyncStatus: Qe,
    // Push/Pull
    getPullPreview: fe,
    pullFromRemote: H,
    getPushPreview: q,
    pushToRemote: P,
    validateMerge: V,
    // Environment Sync
    syncEnvironmentManually: De,
    // Workflow Repair
    repairWorkflowModels: oe,
    // Import Operations
    previewTarballImport: ke,
    previewGitImport: rt,
    validateEnvironmentName: Ve,
    executeImport: ft,
    executeGitImport: dt,
    getImportProgress: Ze,
    // First-Time Setup
    getSetupStatus: Rt,
    initializeWorkspace: Jt,
    getInitializeProgress: ct,
    validatePath: Xt,
    // Deploy Operations
    getDeploySummary: Lt,
    getDataCenters: Qt,
    testRunPodConnection: Zt,
    getNetworkVolumes: es,
    getRunPodGpuTypes: zt,
    deployToRunPod: Vt,
    getRunPodPods: pt,
    terminateRunPodPod: ts,
    stopRunPodPod: ss,
    startRunPodPod: os,
    getDeploymentStatus: Wt,
    exportDeployPackage: ns,
    getStoredRunPodKey: Ut,
    clearRunPodKey: Gt
  };
}
async function ls(t, c = {}, n = 5e3) {
  const i = new AbortController(), p = setTimeout(() => i.abort(), n);
  try {
    const f = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(p), f;
  } catch (f) {
    throw clearTimeout(p), f.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : f;
  }
}
function no() {
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
  async function p() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await ls(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function f() {
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
    restart: p,
    kill: f
  };
}
const zl = { class: "base-modal-header" }, Ul = {
  key: 0,
  class: "base-modal-title"
}, Nl = { class: "base-modal-body" }, Ol = {
  key: 0,
  class: "base-modal-loading"
}, Bl = {
  key: 1,
  class: "base-modal-error"
}, Al = {
  key: 0,
  class: "base-modal-footer"
}, Fl = /* @__PURE__ */ ne({
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
    function f(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return Fe(() => {
      document.addEventListener("keydown", f), document.body.style.overflow = "hidden";
    }), Ms(() => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    }), (u, m) => (s(), S(Xe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: pe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Ae(() => {
          }, ["stop"]))
        }, [
          e("div", zl, [
            Pe(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Ul, a(t.title), 1)) : r("", !0)
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
          e("div", Nl, [
            t.loading ? (s(), o("div", Ol, "Loading...")) : t.error ? (s(), o("div", Bl, a(t.error), 1)) : Pe(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Al, [
            Pe(u.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), nt = /* @__PURE__ */ le(Fl, [["__scopeId", "data-v-8dab1081"]]), Vl = ["type", "disabled"], Wl = {
  key: 0,
  class: "spinner"
}, Gl = /* @__PURE__ */ ne({
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
      t.loading ? (s(), o("span", Wl)) : r("", !0),
      Pe(c.$slots, "default", {}, void 0, !0)
    ], 10, Vl));
  }
}), ye = /* @__PURE__ */ le(Gl, [["__scopeId", "data-v-f3452606"]]), jl = {
  key: 0,
  class: "base-title-count"
}, Kl = /* @__PURE__ */ ne({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), S(Rs(`h${t.level}`), {
      class: pe(["base-title", t.variant])
    }, {
      default: l(() => [
        Pe(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", jl, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cs = /* @__PURE__ */ le(Kl, [["__scopeId", "data-v-5a01561d"]]), Hl = ["value", "disabled"], ql = {
  key: 0,
  value: "",
  disabled: ""
}, Yl = ["value"], Jl = {
  key: 0,
  class: "base-select-error"
}, Xl = /* @__PURE__ */ ne({
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
      class: pe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: pe(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (f) => i.$emit("update:modelValue", f.target.value))
      }, [
        t.placeholder ? (s(), o("option", ql, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(W, null, ae(t.options, (f) => (s(), o("option", {
          key: c(f),
          value: c(f)
        }, a(n(f)), 9, Yl))), 128))
      ], 42, Hl),
      t.error ? (s(), o("span", Jl, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), Ql = /* @__PURE__ */ le(Xl, [["__scopeId", "data-v-7436d745"]]), Zl = { class: "popover-header" }, ei = { class: "popover-title" }, ti = { class: "popover-content" }, si = {
  key: 0,
  class: "popover-actions"
}, oi = /* @__PURE__ */ ne({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), S(Xe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: It({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Ae(() => {
          }, ["stop"]))
        }, [
          e("div", Zl, [
            e("h4", ei, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", ti, [
            Pe(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", si, [
            Pe(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), kt = /* @__PURE__ */ le(oi, [["__scopeId", "data-v-42815ace"]]), ni = { class: "detail-section" }, ai = {
  key: 0,
  class: "empty-message"
}, li = { class: "model-header" }, ii = { class: "model-name" }, ri = { class: "model-details" }, di = { class: "model-row" }, ci = { class: "model-row" }, ui = { class: "label" }, mi = {
  key: 0,
  class: "model-row model-row-nodes"
}, vi = { class: "node-list" }, fi = ["onClick"], pi = {
  key: 1,
  class: "model-row"
}, gi = { class: "value" }, hi = {
  key: 2,
  class: "model-row"
}, yi = { class: "value error" }, wi = {
  key: 0,
  class: "model-actions"
}, ki = { class: "detail-section" }, bi = {
  key: 0,
  class: "empty-message"
}, _i = { class: "node-name" }, $i = {
  key: 0,
  class: "node-version"
}, Ci = /* @__PURE__ */ ne({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: p, setModelImportance: f, openFileLocation: u } = qe(), m = h(null), d = h(!1), v = h(null), y = h(!1), k = h({}), _ = h(!1), b = h(/* @__PURE__ */ new Set()), L = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function D(x) {
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
    function I(x) {
      if (!x.loaded_by || x.loaded_by.length === 0) return [];
      const z = x.hash || x.filename;
      return b.value.has(z) ? x.loaded_by : x.loaded_by.slice(0, 3);
    }
    function G(x) {
      return b.value.has(x);
    }
    function C(x) {
      b.value.has(x) ? b.value.delete(x) : b.value.add(x), b.value = new Set(b.value);
    }
    async function M() {
      d.value = !0, v.value = null;
      try {
        m.value = await p(n.workflowName);
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function Q(x, z) {
      k.value[x] = z, y.value = !0;
    }
    async function F(x) {
      try {
        await u(x);
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to open file location";
      }
    }
    async function j() {
      if (!y.value) {
        i("close");
        return;
      }
      d.value = !0, v.value = null;
      try {
        for (const [x, z] of Object.entries(k.value))
          await f(n.workflowName, x, z);
        i("refresh"), i("close");
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Fe(M), (x, z) => (s(), o(W, null, [
      w(nt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: v.value || void 0,
        onClose: z[4] || (z[4] = (A) => i("close"))
      }, {
        body: l(() => [
          m.value ? (s(), o(W, { key: 0 }, [
            e("section", ni, [
              w(cs, { variant: "section" }, {
                default: l(() => [
                  g("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", ai, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ae(m.value.models, (A) => {
                var de;
                return s(), o("div", {
                  key: A.hash || A.filename,
                  class: "model-card"
                }, [
                  e("div", li, [
                    z[6] || (z[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", ii, a(A.filename), 1)
                  ]),
                  e("div", ri, [
                    e("div", di, [
                      z[7] || (z[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: pe(["value", D(A.status)])
                      }, a($(A.status)), 3)
                    ]),
                    e("div", ci, [
                      e("span", ui, [
                        z[8] || (z[8] = g(" Importance: ", -1)),
                        w(so, {
                          size: 14,
                          title: "About importance levels",
                          onClick: z[0] || (z[0] = (ee) => _.value = !0)
                        })
                      ]),
                      w(Ql, {
                        "model-value": k.value[A.filename] || A.importance,
                        options: L,
                        "onUpdate:modelValue": (ee) => Q(A.filename, ee)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    A.loaded_by && A.loaded_by.length > 0 ? (s(), o("div", mi, [
                      z[9] || (z[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", vi, [
                        (s(!0), o(W, null, ae(I(A), (ee, Y) => (s(), o("div", {
                          key: `${ee.node_id}-${Y}`,
                          class: "node-reference"
                        }, a(ee.node_type) + " (Node #" + a(ee.node_id) + ") ", 1))), 128)),
                        A.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ee) => C(A.hash || A.filename)
                        }, a(G(A.hash || A.filename) ? "▼ Show less" : `▶ View all (${A.loaded_by.length})`), 9, fi)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    A.size_mb ? (s(), o("div", pi, [
                      z[10] || (z[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", gi, a(A.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    A.has_category_mismatch ? (s(), o("div", hi, [
                      z[13] || (z[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", yi, [
                        z[11] || (z[11] = g(" In ", -1)),
                        e("code", null, a(A.actual_category) + "/", 1),
                        z[12] || (z[12] = g(" but loader needs ", -1)),
                        e("code", null, a((de = A.expected_categories) == null ? void 0 : de[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  A.status !== "available" ? (s(), o("div", wi, [
                    A.status === "downloadable" ? (s(), S(ye, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: z[1] || (z[1] = (ee) => i("resolve"))
                    }, {
                      default: l(() => [...z[14] || (z[14] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    })) : A.status === "category_mismatch" && A.file_path ? (s(), S(ye, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => F(A.file_path)
                    }, {
                      default: l(() => [...z[15] || (z[15] = [
                        g(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : A.status !== "path_mismatch" ? (s(), S(ye, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: z[2] || (z[2] = (ee) => i("resolve"))
                    }, {
                      default: l(() => [...z[16] || (z[16] = [
                        g(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", ki, [
              w(cs, { variant: "section" }, {
                default: l(() => [
                  g("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", bi, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ae(m.value.nodes, (A) => (s(), o("div", {
                key: A.name,
                class: "node-item"
              }, [
                e("span", {
                  class: pe(["node-status", A.status === "installed" ? "installed" : "missing"])
                }, a(A.status === "installed" ? "✓" : "✕"), 3),
                e("span", _i, a(A.name), 1),
                A.version ? (s(), o("span", $i, "v" + a(A.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: l(() => [
          w(ye, {
            variant: "secondary",
            onClick: z[3] || (z[3] = (A) => i("close"))
          }, {
            default: l(() => [...z[17] || (z[17] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (s(), S(ye, {
            key: 0,
            variant: "primary",
            onClick: j
          }, {
            default: l(() => [...z[18] || (z[18] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      w(kt, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: z[5] || (z[5] = (A) => _.value = !1)
      }, {
        content: l(() => [...z[19] || (z[19] = [
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
}), xi = /* @__PURE__ */ le(Ci, [["__scopeId", "data-v-668728e6"]]), Te = bs({
  items: [],
  status: "idle"
});
let $t = null;
function ao() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _s(t) {
  return Te.items.find((c) => c.id === t);
}
async function Ht() {
  if (Te.status === "downloading") return;
  const t = Te.items.find((c) => c.status === "queued");
  if (!t) {
    Te.status = "idle";
    return;
  }
  Te.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Si(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Te.status = "idle", Ht();
  }
}
async function Si(t) {
  return new Promise((c, n) => {
    $t && ($t.close(), $t = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    $t = p;
    let f = Date.now(), u = 0, m = !1;
    p.onmessage = (d) => {
      try {
        const v = JSON.parse(d.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const y = Date.now(), k = (y - f) / 1e3;
            if (k > 0.5) {
              const _ = t.downloaded - u;
              if (t.speed = _ / k, f = y, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const b = t.size - t.downloaded;
                t.eta = b / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, p.close(), $t = null, c();
            break;
          case "error":
            m = !0, p.close(), $t = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), $t = null, m || n(new Error("Connection lost"));
    };
  });
}
async function Ii() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Te.items.some((p) => p.url === n.url && p.filename === n.filename))
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
      Te.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function vs() {
  function t($) {
    for (const I of $) {
      if (Te.items.some(
        (M) => M.url === I.url && M.targetPath === I.targetPath && ["queued", "downloading", "paused", "completed"].includes(M.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${I.filename}`);
        continue;
      }
      const C = {
        id: ao(),
        workflow: I.workflow,
        filename: I.filename,
        url: I.url,
        targetPath: I.targetPath,
        size: I.size || 0,
        type: I.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Te.items.push(C);
    }
    Te.status === "idle" && Ht();
  }
  async function c($) {
    const I = _s($);
    if (I) {
      if (I.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(I.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        $t && ($t.close(), $t = null), I.status = "failed", I.error = "Cancelled by user", Te.status = "idle", Ht();
      } else if (I.status === "queued") {
        const G = Te.items.findIndex((C) => C.id === $);
        G >= 0 && Te.items.splice(G, 1);
      }
    }
  }
  function n($) {
    const I = _s($);
    !I || I.status !== "failed" || (I.status = "queued", I.error = void 0, I.progress = 0, I.downloaded = 0, Te.status === "idle" && Ht());
  }
  function i($) {
    const I = _s($);
    !I || I.status !== "paused" || (I.status = "queued", Te.status === "idle" && Ht());
  }
  function p() {
    const $ = Te.items.filter((I) => I.status === "paused");
    for (const I of $)
      I.status = "queued";
    Te.status === "idle" && Ht();
  }
  function f($) {
    const I = Te.items.findIndex((G) => G.id === $);
    I >= 0 && ["completed", "failed", "paused"].includes(Te.items[I].status) && Te.items.splice(I, 1);
  }
  function u() {
    Te.items = Te.items.filter(($) => $.status !== "completed");
  }
  function m() {
    Te.items = Te.items.filter(($) => $.status !== "failed");
  }
  const d = B(
    () => Te.items.find(($) => $.status === "downloading")
  ), v = B(
    () => Te.items.filter(($) => $.status === "queued")
  ), y = B(
    () => Te.items.filter(($) => $.status === "completed")
  ), k = B(
    () => Te.items.filter(($) => $.status === "failed")
  ), _ = B(
    () => Te.items.filter(($) => $.status === "paused")
  ), b = B(() => Te.items.length > 0), L = B(
    () => Te.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), D = B(
    () => Te.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Eo(Te),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: y,
    failedItems: k,
    pausedItems: _,
    hasItems: b,
    activeCount: L,
    hasPaused: D,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: p,
    removeItem: f,
    clearCompleted: u,
    clearFailed: m,
    loadPendingDownloads: Ii
  };
}
function lo() {
  const t = h(null), c = h(null), n = h([]), i = h([]), p = h(!1), f = h(null);
  async function u(G, C) {
    var Q;
    if (!((Q = window.app) != null && Q.api))
      throw new Error("ComfyUI API not available");
    const M = await window.app.api.fetchApi(G, C);
    if (!M.ok) {
      const F = await M.json().catch(() => ({})), j = F.error || F.message || `Request failed: ${M.status}`;
      throw new Error(j);
    }
    return M.json();
  }
  async function m(G) {
    p.value = !0, f.value = null;
    try {
      let C;
      return as() || (C = await u(
        `/v2/comfygit/workflow/${G}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = C, C;
    } catch (C) {
      const M = C instanceof Error ? C.message : "Unknown error occurred";
      throw f.value = M, C;
    } finally {
      p.value = !1;
    }
  }
  async function d(G, C, M, Q) {
    p.value = !0, f.value = null;
    try {
      let F;
      if (!as()) {
        const j = Object.fromEntries(C), x = Object.fromEntries(M), z = Q ? Array.from(Q) : [];
        F = await u(
          `/v2/comfygit/workflow/${G}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: j,
              model_choices: x,
              skipped_packages: z
            })
          }
        );
      }
      return c.value = F, F;
    } catch (F) {
      const j = F instanceof Error ? F.message : "Unknown error occurred";
      throw f.value = j, F;
    } finally {
      p.value = !1;
    }
  }
  async function v(G, C = 10) {
    p.value = !0, f.value = null;
    try {
      let M;
      return as() || (M = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: G, limit: C })
        }
      )), n.value = M.results, M.results;
    } catch (M) {
      const Q = M instanceof Error ? M.message : "Unknown error occurred";
      throw f.value = Q, M;
    } finally {
      p.value = !1;
    }
  }
  async function y(G, C = 10) {
    p.value = !0, f.value = null;
    try {
      let M;
      return as() || (M = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: G, limit: C })
        }
      )), i.value = M.results, M.results;
    } catch (M) {
      const Q = M instanceof Error ? M.message : "Unknown error occurred";
      throw f.value = Q, M;
    } finally {
      p.value = !1;
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
  async function b(G) {
    k.phase = "installing", k.nodesInstalled = [], k.installError = void 0, k.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return as(), await L(G);
    } catch (C) {
      const M = C instanceof Error ? C.message : "Failed to install nodes";
      throw k.installError = M, C;
    }
  }
  async function L(G) {
    var M;
    const C = await u(
      `/v2/comfygit/workflow/${G}/install`,
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
      const Q = new Map(((M = C.failed) == null ? void 0 : M.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < k.nodesToInstall.length; F++) {
        const j = k.nodesToInstall[F], x = Q.get(j);
        k.nodeInstallProgress.completedNodes.push({
          node_id: j,
          success: !x,
          error: x
        });
      }
    }
    return k.nodesInstalled = C.nodes_installed, k.needsRestart = C.nodes_installed.length > 0, C.failed && C.failed.length > 0 && (k.installError = `${C.failed.length} package(s) failed to install`), C;
  }
  async function D(G, C, M) {
    _(), k.phase = "resolving", f.value = null;
    const Q = Object.fromEntries(C), F = Object.fromEntries(M);
    try {
      const j = await fetch(`/v2/comfygit/workflow/${G}/apply-resolution-stream`, {
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
      const x = j.body.getReader(), z = new TextDecoder();
      let A = "";
      for (; ; ) {
        const { done: de, value: ee } = await x.read();
        if (de) break;
        A += z.decode(ee, { stream: !0 });
        const Y = A.split(`

`);
        A = Y.pop() || "";
        for (const re of Y) {
          if (!re.trim()) continue;
          const X = re.split(`
`);
          let O = "", N = "";
          for (const E of X)
            E.startsWith("event: ") ? O = E.slice(7) : E.startsWith("data: ") && (N = E.slice(6));
          if (N)
            try {
              const E = JSON.parse(N);
              $(O, E);
            } catch (E) {
              console.warn("Failed to parse SSE event:", E);
            }
        }
      }
    } catch (j) {
      const x = j instanceof Error ? j.message : "Unknown error occurred";
      throw f.value = x, k.error = x, k.phase = "error", j;
    }
  }
  function $(G, C) {
    switch (G) {
      case "batch_start":
        k.phase = "downloading", k.totalFiles = C.total;
        break;
      case "file_start":
        k.currentFile = C.filename, k.currentFileIndex = C.index, k.bytesDownloaded = 0, k.bytesTotal = void 0;
        break;
      case "file_progress":
        k.bytesDownloaded = C.downloaded, k.bytesTotal = C.total;
        break;
      case "file_complete":
        k.completedFiles.push({
          filename: C.filename,
          success: C.success,
          error: C.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        k.nodesToInstall = C.nodes_to_install || [], C.download_results && (k.completedFiles = C.download_results), k.phase = "complete";
        break;
      case "error":
        k.error = C.message, k.phase = "error", f.value = C.message;
        break;
    }
  }
  function I(G, C) {
    const { addToQueue: M } = vs(), Q = C.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: G,
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
    isLoading: p,
    error: f,
    progress: k,
    // Methods
    analyzeWorkflow: m,
    applyResolution: d,
    applyResolutionWithProgress: D,
    installNodes: b,
    searchNodes: v,
    searchModels: y,
    resetProgress: _,
    queueModelDownloads: I
  };
}
const Ei = { class: "resolution-stepper" }, Pi = { class: "stepper-header" }, Ri = ["onClick"], Mi = {
  key: 0,
  class: "step-icon"
}, Ti = {
  key: 1,
  class: "step-number"
}, Di = { class: "step-label" }, Li = {
  key: 0,
  class: "step-connector"
}, zi = { class: "stepper-content" }, Ui = /* @__PURE__ */ ne({
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
    function p(v) {
      var y;
      if ((y = n.stepStats) != null && y[v]) {
        const k = n.stepStats[v];
        return k.total > 0 && k.resolved === k.total;
      }
      return n.completedSteps.includes(v);
    }
    function f(v) {
      var y;
      if ((y = n.stepStats) != null && y[v]) {
        const k = n.stepStats[v];
        return k.resolved > 0 && k.resolved < k.total;
      }
      return !1;
    }
    function u(v) {
      return p(v) ? "state-complete" : f(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function d(v) {
      i("step-change", v);
    }
    return (v, y) => (s(), o("div", Ei, [
      e("div", Pi, [
        (s(!0), o(W, null, ae(t.steps, (k, _) => (s(), o("div", {
          key: k.id,
          class: pe(["step", {
            active: t.currentStep === k.id,
            completed: p(k.id),
            "in-progress": f(k.id),
            disabled: m(k.id)
          }]),
          onClick: (b) => d(k.id)
        }, [
          e("div", {
            class: pe(["step-indicator", u(k.id)])
          }, [
            p(k.id) ? (s(), o("span", Mi, "✓")) : (s(), o("span", Ti, a(_ + 1), 1))
          ], 2),
          e("div", Di, a(k.label), 1),
          _ < t.steps.length - 1 ? (s(), o("div", Li)) : r("", !0)
        ], 10, Ri))), 128))
      ]),
      e("div", zi, [
        Pe(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ni = /* @__PURE__ */ le(Ui, [["__scopeId", "data-v-2a7b3af8"]]), Oi = /* @__PURE__ */ ne({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = B(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = B(() => `confidence-${n.value}`), p = B(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (f, u) => (s(), o("span", {
      class: pe(["confidence-badge", i.value, t.size])
    }, a(p.value), 3));
  }
}), ws = /* @__PURE__ */ le(Oi, [["__scopeId", "data-v-17ec4b80"]]), Bi = { class: "node-info" }, Ai = { class: "node-info-text" }, Fi = { class: "item-body" }, Vi = {
  key: 0,
  class: "resolved-state"
}, Wi = {
  key: 1,
  class: "multiple-options"
}, Gi = { class: "options-list" }, ji = ["onClick"], Ki = ["name", "value", "checked", "onChange"], Hi = { class: "option-content" }, qi = { class: "option-header" }, Yi = { class: "option-package-id" }, Ji = {
  key: 0,
  class: "option-title"
}, Xi = { class: "option-meta" }, Qi = {
  key: 0,
  class: "installed-badge"
}, Zi = { class: "action-buttons" }, er = {
  key: 2,
  class: "unresolved"
}, tr = {
  key: 0,
  class: "searching-state"
}, sr = { class: "options-list" }, or = ["onClick"], nr = ["name", "value"], ar = { class: "option-content" }, lr = { class: "option-header" }, ir = { class: "option-package-id" }, rr = {
  key: 0,
  class: "option-description"
}, dr = { class: "option-meta" }, cr = {
  key: 0,
  class: "installed-badge"
}, ur = {
  key: 2,
  class: "unresolved-message"
}, mr = { class: "action-buttons" }, vr = /* @__PURE__ */ ne({
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
    function p(d, v = 80) {
      return d.length <= v ? d : d.slice(0, v - 3) + "...";
    }
    const f = B(() => !!n.choice);
    B(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), B(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.package_id;
    });
    const u = B(() => {
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
    return (d, v) => (s(), o("div", {
      class: pe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: f.value }])
    }, [
      e("div", Bi, [
        e("span", Ai, [
          v[7] || (v[7] = g("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: pe(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", Fi, [
        f.value ? (s(), o("div", Vi, [
          w(ye, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (y) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Wi, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Gi, [
            (s(!0), o(W, null, ae(t.options, (y, k) => (s(), o("label", {
              key: y.package_id,
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => m(k)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => m(k)
              }, null, 40, Ki),
              e("div", Hi, [
                e("div", qi, [
                  e("span", Yi, a(y.package_id), 1),
                  w(ws, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                y.title && y.title !== y.package_id ? (s(), o("div", Ji, a(y.title), 1)) : r("", !0),
                e("div", Xi, [
                  y.is_installed ? (s(), o("span", Qi, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, ji))), 128))
          ]),
          e("div", Zi, [
            w(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (y) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", er, [
          t.isSearching ? (s(), o("div", tr, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", sr, [
              (s(!0), o(W, null, ae(t.searchResults.slice(0, 5), (y, k) => (s(), o("label", {
                key: y.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", y)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: k
                }, null, 8, nr),
                e("div", ar, [
                  e("div", lr, [
                    e("span", ir, a(y.package_id), 1),
                    w(ws, {
                      confidence: y.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  y.description ? (s(), o("div", rr, a(p(y.description)), 1)) : r("", !0),
                  e("div", dr, [
                    y.is_installed ? (s(), o("span", cr, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, or))), 128))
            ])
          ], 64)) : (s(), o("div", ur, [...v[15] || (v[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", mr, [
            w(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[4] || (v[4] = (y) => i("search"))
            }, {
              default: l(() => {
                var y;
                return [
                  g(a((y = t.searchResults) != null && y.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            w(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...v[16] || (v[16] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[17] || (v[17] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), fr = /* @__PURE__ */ le(vr, [["__scopeId", "data-v-c2997d1d"]]), pr = { class: "item-navigator" }, gr = { class: "nav-item-info" }, hr = ["title"], yr = { class: "nav-controls" }, wr = { class: "nav-arrows" }, kr = ["disabled"], br = ["disabled"], _r = { class: "nav-position" }, $r = /* @__PURE__ */ ne({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, p) => (s(), o("div", pr, [
      e("div", gr, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, hr)
      ]),
      e("div", yr, [
        e("div", wr, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (f) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, kr),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (f) => n("next")),
            title: "Next item"
          }, " → ", 8, br)
        ]),
        e("span", _r, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), io = /* @__PURE__ */ le($r, [["__scopeId", "data-v-74af7920"]]), Cr = ["type", "value", "placeholder", "disabled"], xr = {
  key: 0,
  class: "base-input-error"
}, Sr = /* @__PURE__ */ ne({
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
          n[1] || (n[1] = Ct((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Ct((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Cr),
      t.error ? (s(), o("span", xr, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), yt = /* @__PURE__ */ le(Sr, [["__scopeId", "data-v-9ba02cdc"]]), Ir = { class: "node-resolution-step" }, Er = {
  key: 0,
  class: "auto-resolved-section"
}, Pr = { class: "section-header" }, Rr = { class: "stat-badge" }, Mr = { class: "resolved-packages-list" }, Tr = { class: "package-info" }, Dr = { class: "package-id" }, Lr = { class: "node-count" }, zr = { class: "package-actions" }, Ur = {
  key: 0,
  class: "status-badge install"
}, Nr = {
  key: 1,
  class: "status-badge skip"
}, Or = ["onClick"], Br = {
  key: 1,
  class: "section-divider"
}, Ar = { class: "step-header" }, Fr = { class: "stat-badge" }, Vr = {
  key: 1,
  class: "step-body"
}, Wr = {
  key: 3,
  class: "empty-state"
}, Gr = { class: "node-modal-body" }, jr = { class: "node-search-results-container" }, Kr = {
  key: 0,
  class: "node-search-results"
}, Hr = ["onClick"], qr = { class: "node-result-header" }, Yr = { class: "node-result-package-id" }, Jr = {
  key: 0,
  class: "node-result-description"
}, Xr = {
  key: 1,
  class: "node-empty-state"
}, Qr = {
  key: 2,
  class: "node-empty-state"
}, Zr = {
  key: 3,
  class: "node-empty-state"
}, ed = { class: "node-manual-entry-modal" }, td = { class: "node-modal-body" }, sd = { class: "node-modal-actions" }, od = /* @__PURE__ */ ne({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: p } = lo(), f = h(0), u = h(!1), m = h(!1), d = h(""), v = h(""), y = h([]), k = h(!1), _ = h(/* @__PURE__ */ new Map()), b = h(/* @__PURE__ */ new Set()), L = h(!1);
    function D() {
      L.value && N(), L.value = !1;
    }
    const $ = B(() => n.nodes[f.value]), I = B(() => n.nodes.filter((me) => n.nodeChoices.has(me.node_type)).length), G = B(() => $.value ? _.value.get($.value.node_type) || [] : []), C = B(() => $.value ? b.value.has($.value.node_type) : !1);
    vt($, async (me) => {
      var he;
      me && ((he = me.options) != null && he.length || _.value.has(me.node_type) || b.value.has(me.node_type) || n.nodeChoices.has(me.node_type) || await M(me.node_type));
    }, { immediate: !0 });
    async function M(me) {
      b.value.add(me);
      try {
        const he = await p(me, 5);
        _.value.set(me, he);
      } catch {
        _.value.set(me, []);
      } finally {
        b.value.delete(me);
      }
    }
    const Q = B(() => n.autoResolvedPackages.filter((me) => !n.skippedPackages.has(me.package_id)).length);
    function F(me) {
      return n.skippedPackages.has(me);
    }
    function j(me) {
      i("package-skip", me);
    }
    const x = B(() => {
      var he;
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
      return (he = $.value.options) != null && he.length ? "ambiguous" : "not-found";
    }), z = B(() => {
      var he;
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
      return (he = $.value.options) != null && he.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function A(me) {
      me >= 0 && me < n.nodes.length && (f.value = me);
    }
    function de() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function ee() {
      $.value && i("skip", $.value.node_type);
    }
    function Y(me) {
      $.value && i("option-selected", $.value.node_type, me);
    }
    function re() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function X() {
      $.value && (d.value = $.value.node_type, y.value = G.value, u.value = !0, we(d.value));
    }
    function O() {
      v.value = "", m.value = !0;
    }
    function N() {
      u.value = !1, d.value = "", y.value = [];
    }
    function E() {
      m.value = !1, v.value = "";
    }
    let ce = null;
    function se() {
      ce && clearTimeout(ce), ce = setTimeout(() => {
        we(d.value);
      }, 300);
    }
    async function we(me) {
      if (!me.trim()) {
        y.value = [];
        return;
      }
      k.value = !0;
      try {
        y.value = await p(me, 10);
      } catch {
        y.value = [];
      } finally {
        k.value = !1;
      }
    }
    function xe(me) {
      $.value && (i("manual-entry", $.value.node_type, me.package_id), N());
    }
    function Re(me) {
      $.value && i("manual-entry", $.value.node_type, me.package_id);
    }
    function ze() {
      !$.value || !v.value.trim() || (i("manual-entry", $.value.node_type, v.value.trim()), E());
    }
    return (me, he) => {
      var Se, Z;
      return s(), o("div", Ir, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Er, [
          e("div", Pr, [
            he[6] || (he[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Rr, a(Q.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Mr, [
            (s(!0), o(W, null, ae(t.autoResolvedPackages, (ie) => (s(), o("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Tr, [
                e("code", Dr, a(ie.package_id), 1),
                e("span", Lr, a(ie.node_types_count) + " node type" + a(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", zr, [
                F(ie.package_id) ? (s(), o("span", Nr, " SKIPPED ")) : (s(), o("span", Ur, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ge) => j(ie.package_id)
                }, a(F(ie.package_id) ? "Include" : "Skip"), 9, Or)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Br)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", Ar, [
            he[7] || (he[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Fr, a(I.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), S(io, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": f.value,
            "total-items": t.nodes.length,
            onPrev: he[0] || (he[0] = (ie) => A(f.value - 1)),
            onNext: he[1] || (he[1] = (ie) => A(f.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Vr, [
            w(fr, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Se = $.value.options) != null && Se.length),
              options: $.value.options,
              choice: (Z = t.nodeChoices) == null ? void 0 : Z.get($.value.node_type),
              status: x.value,
              "status-label": z.value,
              "search-results": G.value,
              "is-searching": C.value,
              onMarkOptional: de,
              onSkip: ee,
              onManualEntry: O,
              onSearch: X,
              onOptionSelected: Y,
              onClearChoice: re,
              onSearchResultSelected: Re
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Wr, [...he[8] || (he[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), S(Xe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: he[4] || (he[4] = Ae((ie) => L.value = !0, ["self"])),
            onMouseup: Ae(D, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: he[3] || (he[3] = (ie) => L.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                he[9] || (he[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Gr, [
                w(yt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": he[2] || (he[2] = (ie) => d.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                e("div", jr, [
                  y.value.length > 0 ? (s(), o("div", Kr, [
                    (s(!0), o(W, null, ae(y.value, (ie) => (s(), o("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (ge) => xe(ie)
                    }, [
                      e("div", qr, [
                        e("code", Yr, a(ie.package_id), 1),
                        ie.match_confidence ? (s(), S(ws, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      ie.description ? (s(), o("div", Jr, a(ie.description), 1)) : r("", !0)
                    ], 8, Hr))), 128))
                  ])) : k.value ? (s(), o("div", Xr, "Searching...")) : d.value ? (s(), o("div", Qr, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", Zr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), S(Xe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Ae(E, ["self"])
          }, [
            e("div", ed, [
              e("div", { class: "node-modal-header" }, [
                he[10] || (he[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", td, [
                w(yt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": he[5] || (he[5] = (ie) => v.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", sd, [
                  w(ye, {
                    variant: "secondary",
                    onClick: E
                  }, {
                    default: l(() => [...he[11] || (he[11] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ye, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: ze
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
}), nd = /* @__PURE__ */ le(od, [["__scopeId", "data-v-281581bc"]]), ad = { class: "node-info" }, ld = { class: "node-info-text" }, id = { class: "item-body" }, rd = {
  key: 0,
  class: "resolved-state"
}, dd = {
  key: 1,
  class: "multiple-options"
}, cd = { class: "options-list" }, ud = ["onClick"], md = ["name", "value", "checked", "onChange"], vd = { class: "option-content" }, fd = { class: "option-header" }, pd = { class: "option-filename" }, gd = { class: "option-meta" }, hd = { class: "option-size" }, yd = { class: "option-category" }, wd = { class: "option-path" }, kd = { class: "action-buttons" }, bd = {
  key: 2,
  class: "unresolved"
}, _d = { class: "action-buttons" }, $d = /* @__PURE__ */ ne({
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
    const n = t, i = c, p = B(() => !!n.choice);
    B(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), B(() => {
      var d, v;
      return ((v = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const f = B(() => {
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
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (s(), o("div", {
      class: pe(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", ad, [
        e("span", ld, [
          v[7] || (v[7] = g("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: pe(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", id, [
        p.value ? (s(), o("div", rd, [
          w(ye, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (y) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", dd, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", cd, [
            (s(!0), o(W, null, ae(t.options, (y, k) => (s(), o("label", {
              key: y.model.hash,
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => u(k)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => u(k)
              }, null, 40, md),
              e("div", vd, [
                e("div", fd, [
                  e("span", pd, a(y.model.filename), 1),
                  w(ws, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", gd, [
                  e("span", hd, a(m(y.model.size)), 1),
                  e("span", yd, a(y.model.category), 1)
                ]),
                e("div", wd, a(y.model.relative_path), 1)
              ])
            ], 10, ud))), 128))
          ]),
          e("div", kd, [
            w(ye, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (y) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ye, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (y) => i("download-url"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", bd, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", _d, [
            w(ye, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (y) => i("search"))
            }, {
              default: l(() => [...v[13] || (v[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (y) => i("download-url"))
            }, {
              default: l(() => [...v[14] || (v[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[15] || (v[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Cd = /* @__PURE__ */ le($d, [["__scopeId", "data-v-8a82fefa"]]), xd = { class: "model-resolution-step" }, Sd = { class: "step-header" }, Id = { class: "step-info" }, Ed = { class: "step-title" }, Pd = { class: "step-description" }, Rd = { class: "stat-badge" }, Md = {
  key: 1,
  class: "step-body"
}, Td = {
  key: 2,
  class: "empty-state"
}, Dd = { class: "model-search-modal" }, Ld = { class: "model-modal-body" }, zd = {
  key: 0,
  class: "model-search-results"
}, Ud = ["onClick"], Nd = { class: "model-result-header" }, Od = { class: "model-result-filename" }, Bd = { class: "model-result-meta" }, Ad = { class: "model-result-category" }, Fd = { class: "model-result-size" }, Vd = {
  key: 0,
  class: "model-result-path"
}, Wd = {
  key: 1,
  class: "model-no-results"
}, Gd = {
  key: 2,
  class: "model-searching"
}, jd = { class: "model-download-url-modal" }, Kd = { class: "model-modal-body" }, Hd = { class: "model-input-group" }, qd = { class: "model-input-group" }, Yd = { class: "model-modal-actions" }, Jd = /* @__PURE__ */ ne({
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
      var E;
      return N && ((E = n[N]) == null ? void 0 : E[0]) || null;
    }
    const p = t, f = c, u = h(0), m = h(!1), d = h(!1), v = h(""), y = h(""), k = h(""), _ = h([]), b = h(!1), L = B(() => p.models[u.value]), D = B(() => p.models.some((N) => N.is_download_intent)), $ = B(() => p.models.filter(
      (N) => p.modelChoices.has(N.filename) || N.is_download_intent
    ).length), I = B(() => {
      var E;
      if (!L.value) return "";
      const N = i((E = L.value.reference) == null ? void 0 : E.node_type);
      return N ? `${N}/${L.value.filename}` : "";
    }), G = B(() => {
      var E;
      if (!L.value) return "not-found";
      const N = p.modelChoices.get(L.value.filename);
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
      return L.value.is_download_intent ? "download" : (E = L.value.options) != null && E.length ? "ambiguous" : "not-found";
    }), C = B(() => {
      var E, ce;
      if (!L.value) return;
      const N = p.modelChoices.get(L.value.filename);
      if (N)
        switch (N.action) {
          case "select":
            return (E = N.selected_model) != null && E.filename ? `→ ${N.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return L.value.is_download_intent ? "Pending Download" : (ce = L.value.options) != null && ce.length ? `${L.value.options.length} matches` : "Not Found";
    });
    function M(N) {
      N >= 0 && N < p.models.length && (u.value = N);
    }
    function Q() {
      L.value && f("mark-optional", L.value.filename);
    }
    function F() {
      L.value && f("skip", L.value.filename);
    }
    function j(N) {
      L.value && f("option-selected", L.value.filename, N);
    }
    function x() {
      L.value && f("clear-choice", L.value.filename);
    }
    function z() {
      L.value && (v.value = L.value.filename, m.value = !0);
    }
    function A() {
      L.value && (y.value = L.value.download_source || "", k.value = L.value.target_path || I.value, d.value = !0);
    }
    function de() {
      m.value = !1, v.value = "", _.value = [];
    }
    function ee() {
      d.value = !1, y.value = "", k.value = "";
    }
    function Y() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function re(N) {
      L.value && de();
    }
    function X() {
      !L.value || !y.value.trim() || (f("download-url", L.value.filename, y.value.trim(), k.value.trim() || void 0), ee());
    }
    function O(N) {
      if (!N) return "Unknown";
      const E = N / (1024 * 1024 * 1024);
      return E >= 1 ? `${E.toFixed(2)} GB` : `${(N / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (N, E) => {
      var ce, se, we;
      return s(), o("div", xd, [
        e("div", Sd, [
          e("div", Id, [
            e("h3", Ed, a(D.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Pd, a(D.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Rd, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        L.value ? (s(), S(io, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: E[0] || (E[0] = (xe) => M(u.value - 1)),
          onNext: E[1] || (E[1] = (xe) => M(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        L.value ? (s(), o("div", Md, [
          w(Cd, {
            filename: L.value.filename,
            "node-type": ((ce = L.value.reference) == null ? void 0 : ce.node_type) || "Unknown",
            "has-multiple-options": !!((se = L.value.options) != null && se.length),
            options: L.value.options,
            choice: (we = t.modelChoices) == null ? void 0 : we.get(L.value.filename),
            status: G.value,
            "status-label": C.value,
            onMarkOptional: Q,
            onSkip: F,
            onDownloadUrl: A,
            onSearch: z,
            onOptionSelected: j,
            onClearChoice: x
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Td, [...E[5] || (E[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), S(Xe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ae(de, ["self"])
          }, [
            e("div", Dd, [
              e("div", { class: "model-modal-header" }, [
                E[6] || (E[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: de
                }, "✕")
              ]),
              e("div", Ld, [
                w(yt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": E[2] || (E[2] = (xe) => v.value = xe),
                  placeholder: "Search by filename, category...",
                  onInput: Y
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", zd, [
                  (s(!0), o(W, null, ae(_.value, (xe) => (s(), o("div", {
                    key: xe.hash,
                    class: "model-search-result-item",
                    onClick: (Re) => re()
                  }, [
                    e("div", Nd, [
                      e("code", Od, a(xe.filename), 1)
                    ]),
                    e("div", Bd, [
                      e("span", Ad, a(xe.category), 1),
                      e("span", Fd, a(O(xe.size)), 1)
                    ]),
                    xe.relative_path ? (s(), o("div", Vd, a(xe.relative_path), 1)) : r("", !0)
                  ], 8, Ud))), 128))
                ])) : v.value && !b.value ? (s(), o("div", Wd, ' No models found matching "' + a(v.value) + '" ', 1)) : r("", !0),
                b.value ? (s(), o("div", Gd, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), S(Xe, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ae(ee, ["self"])
          }, [
            e("div", jd, [
              e("div", { class: "model-modal-header" }, [
                E[7] || (E[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              e("div", Kd, [
                e("div", Hd, [
                  E[8] || (E[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  w(yt, {
                    modelValue: y.value,
                    "onUpdate:modelValue": E[3] || (E[3] = (xe) => y.value = xe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", qd, [
                  E[9] || (E[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  w(yt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": E[4] || (E[4] = (xe) => k.value = xe),
                    placeholder: I.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Yd, [
                  w(ye, {
                    variant: "secondary",
                    onClick: ee
                  }, {
                    default: l(() => [...E[10] || (E[10] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ye, {
                    variant: "primary",
                    disabled: !y.value.trim() || !k.value.trim(),
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
}), Xd = /* @__PURE__ */ le(Jd, [["__scopeId", "data-v-c6acbada"]]), Qd = { class: "applying-step" }, Zd = {
  key: 0,
  class: "phase-content"
}, ec = {
  key: 1,
  class: "phase-content"
}, tc = { class: "phase-description" }, sc = { class: "overall-progress" }, oc = { class: "progress-bar" }, nc = { class: "progress-label" }, ac = { class: "install-list" }, lc = { class: "install-icon" }, ic = { key: 0 }, rc = {
  key: 1,
  class: "spinner"
}, dc = { key: 2 }, cc = { key: 3 }, uc = {
  key: 0,
  class: "install-error"
}, mc = {
  key: 2,
  class: "phase-content"
}, vc = { class: "phase-header" }, fc = { class: "phase-title" }, pc = { class: "completion-summary" }, gc = {
  key: 0,
  class: "summary-item success"
}, hc = { class: "summary-text" }, yc = {
  key: 1,
  class: "summary-item error"
}, wc = { class: "summary-text" }, kc = {
  key: 2,
  class: "failed-list"
}, bc = { class: "failed-node-id" }, _c = { class: "failed-error" }, $c = {
  key: 4,
  class: "summary-item success"
}, Cc = {
  key: 5,
  class: "restart-prompt"
}, xc = {
  key: 3,
  class: "phase-content error"
}, Sc = { class: "error-message" }, Ic = /* @__PURE__ */ ne({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = B(() => {
      var v, y;
      const m = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const d = ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(d / m * 100);
    }), i = B(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((d) => !d.success)) || [];
    }), p = B(() => i.value.length > 0);
    function f(m, d) {
      var y, k;
      const v = (y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.find((_) => _.node_id === m);
      return v ? v.success ? "complete" : "failed" : ((k = c.progress.nodeInstallProgress) == null ? void 0 : k.currentIndex) === d ? "installing" : "pending";
    }
    function u(m) {
      var d, v;
      return (v = (d = c.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((y) => y.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, d) => {
      var v, y, k, _;
      return s(), o("div", Qd, [
        t.progress.phase === "resolving" ? (s(), o("div", Zd, [...d[2] || (d[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", ec, [
          d[3] || (d[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", tc, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", sc, [
            e("div", oc, [
              e("div", {
                class: "progress-fill",
                style: It({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", nc, a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", ac, [
            (s(!0), o(W, null, ae(t.progress.nodesToInstall, (b, L) => (s(), o("div", {
              key: b,
              class: pe(["install-item", f(b, L)])
            }, [
              e("span", lc, [
                f(b, L) === "pending" ? (s(), o("span", ic, "○")) : f(b, L) === "installing" ? (s(), o("span", rc, "◌")) : f(b, L) === "complete" ? (s(), o("span", dc, "✓")) : f(b, L) === "failed" ? (s(), o("span", cc, "✗")) : r("", !0)
              ]),
              e("code", null, a(b), 1),
              u(b) ? (s(), o("span", uc, a(u(b)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", mc, [
          e("div", vc, [
            e("span", {
              class: pe(["phase-icon", p.value ? "warning" : "success"])
            }, a(p.value ? "⚠" : "✓"), 3),
            e("h3", fc, a(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", pc, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", gc, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", hc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", yc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", wc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", kc, [
              (s(!0), o(W, null, ae(i.value, (b) => (s(), o("div", {
                key: b.node_id,
                class: "failed-item"
              }, [
                e("code", bc, a(b.node_id), 1),
                e("span", _c, a(b.error), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (b) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : r("", !0),
            p.value ? r("", !0) : (s(), o("div", $c, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Cc, [
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
        ])) : t.progress.phase === "error" ? (s(), o("div", xc, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Sc, a(t.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), Ec = /* @__PURE__ */ le(Ic, [["__scopeId", "data-v-5efaae58"]]), Pc = {
  key: 0,
  class: "loading-state"
}, Rc = {
  key: 1,
  class: "wizard-content"
}, Mc = {
  key: 0,
  class: "step-content"
}, Tc = { class: "analysis-summary" }, Dc = { class: "analysis-header" }, Lc = { class: "summary-description" }, zc = { class: "stats-grid" }, Uc = { class: "stat-card" }, Nc = { class: "stat-items" }, Oc = {
  key: 0,
  class: "stat-item success"
}, Bc = { class: "stat-count" }, Ac = {
  key: 1,
  class: "stat-item info"
}, Fc = { class: "stat-count" }, Vc = {
  key: 2,
  class: "stat-item warning"
}, Wc = { class: "stat-count" }, Gc = {
  key: 3,
  class: "stat-item error"
}, jc = { class: "stat-count" }, Kc = { class: "stat-card" }, Hc = { class: "stat-items" }, qc = { class: "stat-item success" }, Yc = { class: "stat-count" }, Jc = {
  key: 0,
  class: "stat-item info"
}, Xc = { class: "stat-count" }, Qc = {
  key: 1,
  class: "stat-item warning"
}, Zc = { class: "stat-count" }, eu = {
  key: 2,
  class: "stat-item warning"
}, tu = { class: "stat-count" }, su = {
  key: 3,
  class: "stat-item error"
}, ou = { class: "stat-count" }, nu = {
  key: 0,
  class: "status-message warning"
}, au = { class: "status-text" }, lu = {
  key: 1,
  class: "status-message info"
}, iu = { class: "status-text" }, ru = {
  key: 2,
  class: "status-message info"
}, du = { class: "status-text" }, cu = {
  key: 3,
  class: "status-message warning"
}, uu = { class: "status-text" }, mu = {
  key: 4,
  class: "status-message success"
}, vu = {
  key: 5,
  class: "category-mismatch-section"
}, fu = { class: "mismatch-list" }, pu = { class: "mismatch-path" }, gu = { class: "mismatch-target" }, hu = {
  key: 3,
  class: "step-content"
}, yu = { class: "review-summary" }, wu = { class: "review-stats" }, ku = { class: "review-stat" }, bu = { class: "stat-value" }, _u = { class: "review-stat" }, $u = { class: "stat-value" }, Cu = { class: "review-stat" }, xu = { class: "stat-value" }, Su = { class: "review-stat" }, Iu = { class: "stat-value" }, Eu = {
  key: 0,
  class: "review-section"
}, Pu = { class: "section-title" }, Ru = { class: "review-items" }, Mu = { class: "item-name" }, Tu = { class: "item-choice" }, Du = {
  key: 0,
  class: "choice-badge install"
}, Lu = {
  key: 1,
  class: "choice-badge skip"
}, zu = {
  key: 1,
  class: "review-section"
}, Uu = { class: "section-title" }, Nu = { class: "review-items" }, Ou = { class: "item-name" }, Bu = { class: "item-choice" }, Au = {
  key: 0,
  class: "choice-badge install"
}, Fu = {
  key: 1,
  class: "choice-badge optional"
}, Vu = {
  key: 2,
  class: "choice-badge skip"
}, Wu = {
  key: 1,
  class: "choice-badge pending"
}, Gu = {
  key: 2,
  class: "review-section"
}, ju = { class: "section-title" }, Ku = { class: "review-items" }, Hu = { class: "item-name" }, qu = { class: "item-choice" }, Yu = {
  key: 0,
  class: "choice-badge install"
}, Ju = {
  key: 1,
  class: "choice-badge download"
}, Xu = {
  key: 2,
  class: "choice-badge optional"
}, Qu = {
  key: 3,
  class: "choice-badge skip"
}, Zu = {
  key: 4,
  class: "choice-badge skip"
}, em = {
  key: 1,
  class: "choice-badge download"
}, tm = {
  key: 2,
  class: "choice-badge pending"
}, sm = {
  key: 3,
  class: "no-choices"
}, om = /* @__PURE__ */ ne({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: p, applyResolution: f, installNodes: u, queueModelDownloads: m, progress: d, resetProgress: v } = lo(), { loadPendingDownloads: y } = vs(), { openFileLocation: k } = qe(), _ = h(null), b = h(!1), L = h(!1), D = h(null), $ = h("analysis"), I = h([]), G = h(/* @__PURE__ */ new Map()), C = h(/* @__PURE__ */ new Map()), M = h(/* @__PURE__ */ new Set()), Q = B(() => {
      const q = [
        { id: "analysis", label: "Analysis" }
      ];
      return (j.value || A.value) && q.push({ id: "nodes", label: "Nodes" }), (x.value || z.value) && q.push({ id: "models", label: "Models" }), q.push({ id: "review", label: "Review" }), $.value === "applying" && q.push({ id: "applying", label: "Applying" }), q;
    }), F = B(() => _.value ? _.value.stats.needs_user_input : !1), j = B(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), x = B(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), z = B(() => _.value ? _.value.stats.download_intents > 0 : !1), A = B(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), de = B(() => _.value ? _.value.nodes.resolved.length : 0), ee = B(() => _.value ? _.value.models.resolved.filter((q) => q.has_category_mismatch) : []), Y = B(() => ee.value.length > 0), re = B(() => {
      if (!_.value) return [];
      const q = _.value.nodes.resolved.filter((V) => !V.is_installed), P = /* @__PURE__ */ new Set();
      return q.filter((V) => P.has(V.package.package_id) ? !1 : (P.add(V.package.package_id), !0));
    }), X = B(() => {
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
    }), O = B(() => re.value.filter((q) => !M.value.has(q.package.package_id))), N = B(() => _.value ? _.value.models.resolved.filter((q) => q.match_type === "download_intent").map((q) => ({
      filename: q.reference.widget_value,
      reference: q.reference,
      is_download_intent: !0,
      resolved_model: q.model,
      download_source: q.download_source,
      target_path: q.target_path
    })) : []), E = B(() => {
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
    }), ce = B(() => {
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
    }), se = B(() => {
      const q = ce.value, P = N.value.map((V) => ({
        filename: V.filename,
        reference: V.reference,
        is_download_intent: !0,
        resolved_model: V.resolved_model,
        download_source: V.download_source,
        target_path: V.target_path,
        options: void 0
      }));
      return [...q, ...P];
    }), we = B(() => {
      let q = O.value.length;
      for (const P of G.value.values())
        P.action === "install" && q++;
      for (const P of C.value.values())
        P.action === "select" && q++;
      return q;
    }), xe = B(() => {
      let q = 0;
      for (const P of C.value.values())
        P.action === "download" && q++;
      return q;
    }), Re = B(() => {
      let q = 0;
      for (const P of G.value.values())
        P.action === "optional" && q++;
      for (const P of C.value.values())
        P.action === "optional" && q++;
      return q;
    }), ze = B(() => {
      let q = M.value.size;
      for (const P of G.value.values())
        P.action === "skip" && q++;
      for (const P of C.value.values())
        P.action === "skip" && q++;
      for (const P of E.value)
        G.value.has(P.node_type) || q++;
      for (const P of ce.value)
        C.value.has(P.filename) || q++;
      return q;
    }), me = B(() => {
      const q = {};
      if (q.analysis = { resolved: 1, total: 1 }, j.value) {
        const P = E.value.length, V = E.value.filter(
          (oe) => G.value.has(oe.node_type)
        ).length;
        q.nodes = { resolved: V, total: P };
      }
      if (x.value || z.value) {
        const P = se.value.length, V = se.value.filter(
          (oe) => C.value.has(oe.filename) || oe.is_download_intent
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
    function Se() {
      const q = Q.value.findIndex((P) => P.id === $.value);
      q > 0 && ($.value = Q.value[q - 1].id);
    }
    function Z() {
      const q = Q.value.findIndex((P) => P.id === $.value);
      q < Q.value.length - 1 && ($.value = Q.value[q + 1].id);
    }
    async function ie() {
      b.value = !0, D.value = null;
      try {
        _.value = await p(n.workflowName);
      } catch (q) {
        D.value = q instanceof Error ? q.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function ge() {
      I.value.includes("analysis") || I.value.push("analysis"), j.value || A.value ? $.value = "nodes" : x.value || z.value ? $.value = "models" : $.value = "review";
    }
    function Ue(q) {
      G.value.set(q, { action: "optional" });
    }
    function Ye(q) {
      G.value.set(q, { action: "skip" });
    }
    function et(q, P) {
      var oe;
      const V = E.value.find((ke) => ke.node_type === q);
      (oe = V == null ? void 0 : V.options) != null && oe[P] && G.value.set(q, {
        action: "install",
        package_id: V.options[P].package_id
      });
    }
    function Ie(q, P) {
      G.value.set(q, {
        action: "install",
        package_id: P
      });
    }
    function Be(q) {
      G.value.delete(q);
    }
    function Je(q) {
      M.value.has(q) ? M.value.delete(q) : M.value.add(q);
    }
    function He(q) {
      C.value.set(q, { action: "optional" });
    }
    function lt(q) {
      C.value.set(q, { action: "skip" });
    }
    function be(q, P) {
      var oe;
      const V = ce.value.find((ke) => ke.filename === q);
      (oe = V == null ? void 0 : V.options) != null && oe[P] && C.value.set(q, {
        action: "select",
        selected_model: V.options[P].model
      });
    }
    function Ge(q, P, V) {
      C.value.set(q, {
        action: "download",
        url: P,
        target_path: V
      });
    }
    function Me(q) {
      C.value.delete(q);
    }
    async function Qe(q) {
      try {
        await k(q);
      } catch (P) {
        D.value = P instanceof Error ? P.message : "Failed to open file location";
      }
    }
    async function De() {
      var q;
      L.value = !0, D.value = null, v(), d.phase = "resolving", $.value = "applying";
      try {
        const P = await f(n.workflowName, G.value, C.value, M.value);
        P.models_to_download && P.models_to_download.length > 0 && m(n.workflowName, P.models_to_download);
        const V = [
          ...P.nodes_to_install || [],
          ...O.value.map((ke) => ke.package.package_id)
        ];
        d.nodesToInstall = [...new Set(V)], d.nodesToInstall.length > 0 && await u(n.workflowName), d.phase = "complete", await y();
        const oe = d.installError || ((q = d.nodeInstallProgress) == null ? void 0 : q.completedNodes.some((ke) => !ke.success));
        !d.needsRestart && !oe && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (P) {
        D.value = P instanceof Error ? P.message : "Failed to apply resolution", d.error = D.value, d.phase = "error";
      } finally {
        L.value = !1;
      }
    }
    function fe() {
      i("refresh"), i("restart"), i("close");
    }
    async function H() {
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
    return Fe(ie), (q, P) => (s(), S(nt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: b.value,
      error: D.value || void 0,
      "fixed-height": !0,
      onClose: P[1] || (P[1] = (V) => i("close"))
    }, {
      body: l(() => [
        b.value && !_.value ? (s(), o("div", Pc, [...P[2] || (P[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", Rc, [
          w(Ni, {
            steps: Q.value,
            "current-step": $.value,
            "completed-steps": I.value,
            "step-stats": me.value,
            onStepChange: he
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", Mc, [
            e("div", Tc, [
              e("div", Dc, [
                P[3] || (P[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Lc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", zc, [
                e("div", Uc, [
                  P[12] || (P[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Nc, [
                    de.value > 0 ? (s(), o("div", Oc, [
                      P[4] || (P[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Bc, a(de.value), 1),
                      P[5] || (P[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", Ac, [
                      P[6] || (P[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Fc, a(_.value.stats.packages_needing_installation), 1),
                      P[7] || (P[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", Vc, [
                      P[8] || (P[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Wc, a(_.value.nodes.ambiguous.length), 1),
                      P[9] || (P[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", Gc, [
                      P[10] || (P[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", jc, a(_.value.nodes.unresolved.length), 1),
                      P[11] || (P[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", Kc, [
                  P[23] || (P[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Hc, [
                    e("div", qc, [
                      P[13] || (P[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Yc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      P[14] || (P[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", Jc, [
                      P[15] || (P[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Xc, a(_.value.stats.download_intents), 1),
                      P[16] || (P[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    Y.value ? (s(), o("div", Qc, [
                      P[17] || (P[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Zc, a(ee.value.length), 1),
                      P[18] || (P[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", eu, [
                      P[19] || (P[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", tu, a(_.value.models.ambiguous.length), 1),
                      P[20] || (P[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", su, [
                      P[21] || (P[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", ou, a(_.value.models.unresolved.length), 1),
                      P[22] || (P[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", nu, [
                P[24] || (P[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", au, a(E.value.length + ce.value.length) + " items need your input", 1)
              ])) : A.value ? (s(), o("div", lu, [
                P[25] || (P[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", iu, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(z.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : z.value ? (s(), o("div", ru, [
                P[26] || (P[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", du, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : Y.value ? (s(), o("div", cu, [
                P[27] || (P[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", uu, a(ee.value.length) + " model" + a(ee.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", mu, [...P[28] || (P[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Y.value ? (s(), o("div", vu, [
                P[31] || (P[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", fu, [
                  (s(!0), o(W, null, ae(ee.value, (V) => {
                    var oe, ke;
                    return s(), o("div", {
                      key: V.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", pu, a(V.actual_category) + "/" + a((oe = V.model) == null ? void 0 : oe.filename), 1),
                      P[30] || (P[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", gu, a((ke = V.expected_categories) == null ? void 0 : ke[0]) + "/", 1),
                      V.file_path ? (s(), S(ye, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ve) => Qe(V.file_path)
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
          $.value === "nodes" ? (s(), S(nd, {
            key: 1,
            nodes: E.value,
            "node-choices": G.value,
            "auto-resolved-packages": X.value,
            "skipped-packages": M.value,
            onMarkOptional: Ue,
            onSkip: Ye,
            onOptionSelected: et,
            onManualEntry: Ie,
            onClearChoice: Be,
            onPackageSkip: Je
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), S(Xd, {
            key: 2,
            models: se.value,
            "model-choices": C.value,
            onMarkOptional: He,
            onSkip: lt,
            onOptionSelected: be,
            onDownloadUrl: Ge,
            onClearChoice: Me
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", hu, [
            e("div", yu, [
              P[36] || (P[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", wu, [
                e("div", ku, [
                  e("span", bu, a(we.value), 1),
                  P[32] || (P[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", _u, [
                  e("span", $u, a(xe.value), 1),
                  P[33] || (P[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Cu, [
                  e("span", xu, a(Re.value), 1),
                  P[34] || (P[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Su, [
                  e("span", Iu, a(ze.value), 1),
                  P[35] || (P[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              X.value.length > 0 ? (s(), o("div", Eu, [
                e("h4", Pu, "Node Packages (" + a(X.value.length) + ")", 1),
                e("div", Ru, [
                  (s(!0), o(W, null, ae(X.value, (V) => (s(), o("div", {
                    key: V.package_id,
                    class: "review-item"
                  }, [
                    e("code", Mu, a(V.package_id), 1),
                    e("div", Tu, [
                      M.value.has(V.package_id) ? (s(), o("span", Lu, "Skipped")) : (s(), o("span", Du, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              E.value.length > 0 ? (s(), o("div", zu, [
                e("h4", Uu, "Node Choices (" + a(E.value.length) + ")", 1),
                e("div", Nu, [
                  (s(!0), o(W, null, ae(E.value, (V) => {
                    var oe, ke, Ve, ft;
                    return s(), o("div", {
                      key: V.node_type,
                      class: "review-item"
                    }, [
                      e("code", Ou, a(V.node_type), 1),
                      e("div", Bu, [
                        G.value.has(V.node_type) ? (s(), o(W, { key: 0 }, [
                          ((oe = G.value.get(V.node_type)) == null ? void 0 : oe.action) === "install" ? (s(), o("span", Au, a((ke = G.value.get(V.node_type)) == null ? void 0 : ke.package_id), 1)) : ((Ve = G.value.get(V.node_type)) == null ? void 0 : Ve.action) === "optional" ? (s(), o("span", Fu, " Optional ")) : ((ft = G.value.get(V.node_type)) == null ? void 0 : ft.action) === "skip" ? (s(), o("span", Vu, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", Wu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              se.value.length > 0 ? (s(), o("div", Gu, [
                e("h4", ju, "Models (" + a(se.value.length) + ")", 1),
                e("div", Ku, [
                  (s(!0), o(W, null, ae(se.value, (V) => {
                    var oe, ke, Ve, ft, Ze, rt, dt;
                    return s(), o("div", {
                      key: V.filename,
                      class: "review-item"
                    }, [
                      e("code", Hu, a(V.filename), 1),
                      e("div", qu, [
                        C.value.has(V.filename) ? (s(), o(W, { key: 0 }, [
                          ((oe = C.value.get(V.filename)) == null ? void 0 : oe.action) === "select" ? (s(), o("span", Yu, a((Ve = (ke = C.value.get(V.filename)) == null ? void 0 : ke.selected_model) == null ? void 0 : Ve.filename), 1)) : ((ft = C.value.get(V.filename)) == null ? void 0 : ft.action) === "download" ? (s(), o("span", Ju, " Download ")) : ((Ze = C.value.get(V.filename)) == null ? void 0 : Ze.action) === "optional" ? (s(), o("span", Xu, " Optional ")) : ((rt = C.value.get(V.filename)) == null ? void 0 : rt.action) === "skip" ? (s(), o("span", Qu, " Skip ")) : ((dt = C.value.get(V.filename)) == null ? void 0 : dt.action) === "cancel_download" ? (s(), o("span", Zu, " Cancel Download ")) : r("", !0)
                        ], 64)) : V.is_download_intent ? (s(), o("span", em, " Pending Download ")) : (s(), o("span", tm, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              re.value.length === 0 && E.value.length === 0 && se.value.length === 0 ? (s(), o("div", sm, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), S(Ec, {
            key: 4,
            progress: Ee(d),
            onRestart: fe,
            onRetryFailed: H
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), S(ye, {
          key: 0,
          variant: "secondary",
          disabled: L.value,
          onClick: Se
        }, {
          default: l(() => [...P[37] || (P[37] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        P[41] || (P[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Ee(d).phase === "complete" || Ee(d).phase === "error" ? (s(), S(ye, {
          key: 1,
          variant: "secondary",
          onClick: P[0] || (P[0] = (V) => i("close"))
        }, {
          default: l(() => [
            g(a(Ee(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), S(ye, {
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
        $.value === "nodes" ? (s(), S(ye, {
          key: 3,
          variant: "primary",
          onClick: Z
        }, {
          default: l(() => [
            g(a(x.value || z.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), S(ye, {
          key: 4,
          variant: "primary",
          onClick: Z
        }, {
          default: l(() => [...P[39] || (P[39] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), S(ye, {
          key: 5,
          variant: "primary",
          disabled: L.value,
          loading: L.value,
          onClick: De
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
}), nm = /* @__PURE__ */ le(om, [["__scopeId", "data-v-6276cf1d"]]), am = { class: "search-input-wrapper" }, lm = ["value", "placeholder"], im = /* @__PURE__ */ ne({
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
    const n = t, i = c, p = h(null);
    let f;
    function u(d) {
      const v = d.target.value;
      n.debounce > 0 ? (clearTimeout(f), f = window.setTimeout(() => {
        i("update:modelValue", v);
      }, n.debounce)) : i("update:modelValue", v);
    }
    function m() {
      var d;
      i("update:modelValue", ""), i("clear"), (d = p.value) == null || d.focus();
    }
    return Fe(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (d, v) => (s(), o("div", am, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: Ct(m, ["escape"])
      }, null, 40, lm),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), rm = /* @__PURE__ */ le(im, [["__scopeId", "data-v-266f857a"]]), dm = { class: "search-bar" }, cm = /* @__PURE__ */ ne({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", dm, [
      w(rm, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Yt = /* @__PURE__ */ le(cm, [["__scopeId", "data-v-3d51bbfd"]]), um = { class: "section-group" }, mm = {
  key: 0,
  class: "section-content"
}, vm = /* @__PURE__ */ ne({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = h(n.initiallyExpanded);
    function f() {
      n.collapsible && (p.value = !p.value, i("toggle", p.value));
    }
    return (u, m) => (s(), o("section", um, [
      w(mt, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: f
      }, {
        default: l(() => [
          g(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (s(), o("div", mm, [
        Pe(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ le(vm, [["__scopeId", "data-v-c48e33ed"]]), fm = { class: "item-header" }, pm = {
  key: 0,
  class: "item-icon"
}, gm = { class: "item-info" }, hm = {
  key: 0,
  class: "item-title"
}, ym = {
  key: 1,
  class: "item-subtitle"
}, wm = {
  key: 0,
  class: "item-details"
}, km = {
  key: 1,
  class: "item-actions"
}, bm = /* @__PURE__ */ ne({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = B(() => n.status ? `status-${n.status}` : "");
    return (p, f) => (s(), o("div", {
      class: pe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: f[0] || (f[0] = (u) => t.clickable && p.$emit("click"))
    }, [
      e("div", fm, [
        p.$slots.icon ? (s(), o("span", pm, [
          Pe(p.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", gm, [
          p.$slots.title ? (s(), o("div", hm, [
            Pe(p.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          p.$slots.subtitle ? (s(), o("div", ym, [
            Pe(p.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", wm, [
        Pe(p.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      p.$slots.actions ? (s(), o("div", km, [
        Pe(p.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), tt = /* @__PURE__ */ le(bm, [["__scopeId", "data-v-cc435e0e"]]), _m = { class: "loading-state" }, $m = { class: "loading-message" }, Cm = /* @__PURE__ */ ne({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", _m, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", $m, a(t.message), 1)
    ]));
  }
}), Et = /* @__PURE__ */ le(Cm, [["__scopeId", "data-v-ad8436c9"]]), xm = { class: "error-state" }, Sm = { class: "error-message" }, Im = /* @__PURE__ */ ne({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", xm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Sm, a(t.message), 1),
      t.retry ? (s(), S(te, {
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
}), Pt = /* @__PURE__ */ le(Im, [["__scopeId", "data-v-5397be48"]]), Em = /* @__PURE__ */ ne({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: p } = qe();
    no();
    const f = h([]), u = h(!1), m = h(null), d = h(""), v = h(!0), y = h(!1), k = h(!1), _ = h(!1), b = h(null), L = B(
      () => f.value.filter((O) => O.status === "broken")
    ), D = B(
      () => f.value.filter((O) => O.status === "new")
    ), $ = B(
      () => f.value.filter((O) => O.status === "modified")
    ), I = B(
      () => f.value.filter((O) => O.status === "synced")
    ), G = B(() => {
      if (!d.value.trim()) return f.value;
      const O = d.value.toLowerCase();
      return f.value.filter((N) => N.name.toLowerCase().includes(O));
    }), C = B(
      () => L.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), M = B(
      () => D.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), Q = B(
      () => $.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = B(
      () => I.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), j = B(
      () => y.value ? F.value : F.value.slice(0, 5)
    );
    async function x(O = !1) {
      u.value = !0, m.value = null;
      try {
        f.value = await p(O);
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: x });
    function z(O) {
      b.value = O, k.value = !0;
    }
    function A(O) {
      b.value = O, _.value = !0;
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
    function re(O) {
      const N = [];
      return O.missing_nodes > 0 && N.push(`${O.missing_nodes} missing node${O.missing_nodes > 1 ? "s" : ""}`), O.missing_models > 0 && N.push(`${O.missing_models} missing model${O.missing_models > 1 ? "s" : ""}`), O.models_with_category_mismatch && O.models_with_category_mismatch > 0 && N.push(`${O.models_with_category_mismatch} model${O.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), O.pending_downloads && O.pending_downloads > 0 && N.push(`${O.pending_downloads} pending download${O.pending_downloads > 1 ? "s" : ""}`), N.length > 0 ? N.join(", ") : "Has issues";
    }
    function X(O) {
      const N = O.sync_state === "new" ? "New" : O.sync_state === "modified" ? "Modified" : O.sync_state === "synced" ? "Synced" : O.sync_state;
      return O.has_path_sync_issues && O.models_needing_path_sync && O.models_needing_path_sync > 0 ? `${O.models_needing_path_sync} model path${O.models_needing_path_sync > 1 ? "s" : ""} need${O.models_needing_path_sync === 1 ? "s" : ""} sync` : N || "Unknown";
    }
    return Fe(x), (O, N) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          w(Yt, {
            modelValue: d.value,
            "onUpdate:modelValue": N[0] || (N[0] = (E) => d.value = E),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), S(Et, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), S(Pt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            C.value.length ? (s(), S(Oe, {
              key: 0,
              title: "BROKEN",
              count: C.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(C.value, (E) => (s(), S(tt, {
                  key: E.name,
                  status: "broken"
                }, {
                  icon: l(() => [...N[7] || (N[7] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(E.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(re(E)), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ce) => A(E.name)
                    }, {
                      default: l(() => [...N[8] || (N[8] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => z(E.name)
                    }, {
                      default: l(() => [...N[9] || (N[9] = [
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
            M.value.length ? (s(), S(Oe, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(M.value, (E) => (s(), S(tt, {
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => z(E.name)
                    }, {
                      default: l(() => [...N[10] || (N[10] = [
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
            Q.value.length ? (s(), S(Oe, {
              key: 2,
              title: "MODIFIED",
              count: Q.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(Q.value, (E) => (s(), S(tt, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...N[11] || (N[11] = [
                    g("⚡", -1)
                  ])]),
                  title: l(() => [
                    g(a(E.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(E)), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => z(E.name)
                    }, {
                      default: l(() => [...N[12] || (N[12] = [
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
            F.value.length ? (s(), S(Oe, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: N[2] || (N[2] = (E) => v.value = E)
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(j.value, (E) => (s(), S(tt, {
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => z(E.name)
                    }, {
                      default: l(() => [...N[13] || (N[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && F.value.length > 5 ? (s(), S(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (E) => y.value = !0),
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
            G.value.length ? r("", !0) : (s(), S(wt, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && b.value ? (s(), S(xi, {
        key: 0,
        "workflow-name": b.value,
        onClose: N[3] || (N[3] = (E) => k.value = !1),
        onResolve: N[4] || (N[4] = (E) => A(b.value)),
        onRefresh: N[5] || (N[5] = (E) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      _.value && b.value ? (s(), S(nm, {
        key: 1,
        "workflow-name": b.value,
        onClose: ee,
        onInstall: de,
        onRefresh: N[6] || (N[6] = (E) => i("refresh")),
        onRestart: Y
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Pm = /* @__PURE__ */ le(Em, [["__scopeId", "data-v-fa3f076e"]]), Rm = /* @__PURE__ */ ne({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: pe(["summary-bar", t.variant])
    }, [
      Pe(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), fs = /* @__PURE__ */ le(Rm, [["__scopeId", "data-v-ccb7816e"]]), Mm = {
  key: 0,
  class: "model-details"
}, Tm = { class: "detail-section" }, Dm = { class: "detail-row" }, Lm = { class: "detail-value mono" }, zm = { class: "detail-row" }, Um = { class: "detail-value mono" }, Nm = { class: "detail-row" }, Om = { class: "detail-value mono" }, Bm = { class: "detail-row" }, Am = { class: "detail-value" }, Fm = { class: "detail-row" }, Vm = { class: "detail-value" }, Wm = { class: "detail-row" }, Gm = { class: "detail-value" }, jm = { class: "detail-section" }, Km = { class: "section-header" }, Hm = {
  key: 0,
  class: "locations-list"
}, qm = { class: "location-path mono" }, Ym = {
  key: 0,
  class: "location-modified"
}, Jm = ["onClick"], Xm = {
  key: 1,
  class: "empty-state"
}, Qm = { class: "detail-section" }, Zm = { class: "section-header" }, ev = {
  key: 0,
  class: "sources-list"
}, tv = { class: "source-type" }, sv = ["href"], ov = ["disabled", "onClick"], nv = {
  key: 1,
  class: "empty-state"
}, av = { class: "add-source-form" }, lv = ["disabled"], iv = {
  key: 2,
  class: "source-error"
}, rv = {
  key: 3,
  class: "source-success"
}, dv = /* @__PURE__ */ ne({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: p, removeModelSource: f, openFileLocation: u } = qe(), m = h(null), d = h(!0), v = h(null), y = h(""), k = h(!1), _ = h(null), b = h(null), L = h(null), D = h(null);
    let $ = null;
    function I(x, z = "success", A = 2e3) {
      $ && clearTimeout($), D.value = { message: x, type: z }, $ = setTimeout(() => {
        D.value = null;
      }, A);
    }
    function G(x) {
      if (!x) return "Unknown";
      const z = 1024 * 1024 * 1024, A = 1024 * 1024;
      return x >= z ? `${(x / z).toFixed(1)} GB` : x >= A ? `${(x / A).toFixed(0)} MB` : `${(x / 1024).toFixed(0)} KB`;
    }
    function C(x) {
      navigator.clipboard.writeText(x), I("Copied to clipboard!");
    }
    async function M(x) {
      try {
        await u(x), I("Opening file location...");
      } catch {
        I("Failed to open location", "error");
      }
    }
    async function Q() {
      if (!(!y.value.trim() || !m.value)) {
        k.value = !0, b.value = null, L.value = null;
        try {
          await p(m.value.hash, y.value.trim()), L.value = "Source added successfully!", y.value = "", await j();
        } catch (x) {
          b.value = x instanceof Error ? x.message : "Failed to add source";
        } finally {
          k.value = !1;
        }
      }
    }
    async function F(x) {
      if (m.value) {
        _.value = x, b.value = null, L.value = null;
        try {
          await f(m.value.hash, x), I("Source removed"), await j();
        } catch (z) {
          b.value = z instanceof Error ? z.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function j() {
      d.value = !0, v.value = null;
      try {
        m.value = await i(n.identifier);
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Fe(j), (x, z) => {
      var A;
      return s(), o(W, null, [
        w(nt, {
          title: `Model Details: ${((A = m.value) == null ? void 0 : A.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: z[5] || (z[5] = (de) => x.$emit("close"))
        }, {
          body: l(() => {
            var de, ee, Y, re;
            return [
              m.value ? (s(), o("div", Mm, [
                e("section", Tm, [
                  e("div", Dm, [
                    z[6] || (z[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Lm, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[0] || (z[0] = (X) => C(m.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", zm, [
                    z[7] || (z[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Um, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[1] || (z[1] = (X) => C(m.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Nm, [
                    z[8] || (z[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Om, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[2] || (z[2] = (X) => C(m.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Bm, [
                    z[9] || (z[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Am, a(G(m.value.size)), 1)
                  ]),
                  e("div", Fm, [
                    z[10] || (z[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Vm, a(m.value.category), 1)
                  ]),
                  e("div", Wm, [
                    z[11] || (z[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Gm, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", jm, [
                  e("h4", Km, "Locations (" + a(((de = m.value.locations) == null ? void 0 : de.length) || 0) + ")", 1),
                  (ee = m.value.locations) != null && ee.length ? (s(), o("div", Hm, [
                    (s(!0), o(W, null, ae(m.value.locations, (X, O) => (s(), o("div", {
                      key: O,
                      class: "location-item"
                    }, [
                      e("span", qm, a(X.path), 1),
                      X.modified ? (s(), o("span", Ym, "Modified: " + a(X.modified), 1)) : r("", !0),
                      X.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (N) => M(X.path)
                      }, " Open File Location ", 8, Jm)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Xm, "No locations found"))
                ]),
                e("section", Qm, [
                  e("h4", Zm, "Download Sources (" + a(((Y = m.value.sources) == null ? void 0 : Y.length) || 0) + ")", 1),
                  (re = m.value.sources) != null && re.length ? (s(), o("div", ev, [
                    (s(!0), o(W, null, ae(m.value.sources, (X, O) => (s(), o("div", {
                      key: O,
                      class: "source-item"
                    }, [
                      e("span", tv, a(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(X.url), 9, sv),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === X.url,
                        onClick: (N) => F(X.url)
                      }, a(_.value === X.url ? "..." : "×"), 9, ov)
                    ]))), 128))
                  ])) : (s(), o("div", nv, " No download sources configured ")),
                  e("div", av, [
                    Le(e("input", {
                      "onUpdate:modelValue": z[3] || (z[3] = (X) => y.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [At, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || k.value,
                      onClick: Q
                    }, a(k.value ? "Adding..." : "Add Source"), 9, lv)
                  ]),
                  b.value ? (s(), o("p", iv, a(b.value), 1)) : r("", !0),
                  L.value ? (s(), o("p", rv, a(L.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: z[4] || (z[4] = (de) => x.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), S(Xe, { to: "body" }, [
          D.value ? (s(), o("div", {
            key: 0,
            class: pe(["toast", D.value.type])
          }, a(D.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), Ls = /* @__PURE__ */ le(dv, [["__scopeId", "data-v-f15cbb56"]]), cv = /* @__PURE__ */ ne({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: p } = qe(), f = h([]), u = h([]), m = h("production"), d = h(!1), v = h(null), y = h(""), k = h(!1), _ = h(null);
    function b() {
      k.value = !1, n("navigate", "model-index");
    }
    const L = B(
      () => f.value.reduce((j, x) => j + (x.size || 0), 0)
    ), D = B(() => {
      if (!y.value.trim()) return f.value;
      const j = y.value.toLowerCase();
      return f.value.filter((x) => x.filename.toLowerCase().includes(j));
    }), $ = B(() => {
      if (!y.value.trim()) return u.value;
      const j = y.value.toLowerCase();
      return u.value.filter((x) => x.filename.toLowerCase().includes(j));
    }), I = B(() => {
      const j = {};
      for (const z of D.value) {
        const A = z.type || "other";
        j[A] || (j[A] = []), j[A].push(z);
      }
      const x = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(j).sort(([z], [A]) => {
        const de = x.indexOf(z), ee = x.indexOf(A);
        return de >= 0 && ee >= 0 ? de - ee : de >= 0 ? -1 : ee >= 0 ? 1 : z.localeCompare(A);
      }).map(([z, A]) => ({ type: z, models: A }));
    });
    function G(j) {
      if (!j) return "Unknown";
      const x = j / (1024 * 1024);
      return x >= 1024 ? `${(x / 1024).toFixed(1)} GB` : `${x.toFixed(0)} MB`;
    }
    function C(j) {
      _.value = j.hash || j.filename;
    }
    function M(j) {
      n("navigate", "model-index");
    }
    function Q(j) {
      alert(`Download functionality not yet implemented for ${j}`);
    }
    async function F() {
      d.value = !0, v.value = null;
      try {
        const j = await i();
        f.value = j, u.value = [];
        const x = await p();
        m.value = x.environment || "production";
      } catch (j) {
        v.value = j instanceof Error ? j.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Fe(F), (j, x) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (z) => k.value = !0)
          })
        ]),
        search: l(() => [
          w(Yt, {
            modelValue: y.value,
            "onUpdate:modelValue": x[1] || (x[1] = (z) => y.value = z),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), S(Et, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), S(Pt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            f.value.length ? (s(), S(fs, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(f.value.length) + " models • " + a(G(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ae(I.value, (z) => (s(), S(Oe, {
              key: z.type,
              title: z.type.toUpperCase(),
              count: z.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(z.models, (A) => (s(), S(tt, {
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
                    g(a(G(A.size)), 1)
                  ]),
                  details: l(() => [
                    w(We, {
                      label: "Used by:",
                      value: (A.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(We, {
                      label: "Path:",
                      value: A.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (de) => C(A)
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
            $.value.length ? (s(), S(Oe, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae($.value, (z) => (s(), S(tt, {
                  key: z.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...x[6] || (x[6] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(z.filename), 1)
                  ]),
                  subtitle: l(() => [...x[7] || (x[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var A;
                    return [
                      w(We, {
                        label: "Required by:",
                        value: ((A = z.workflow_names) == null ? void 0 : A.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Q(z.filename)
                    }, {
                      default: l(() => [...x[8] || (x[8] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => M(z.filename)
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
            !D.value.length && !$.value.length ? (s(), S(wt, {
              key: 2,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
        show: k.value,
        title: "About Environment Models",
        onClose: x[2] || (x[2] = (z) => k.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            x[10] || (x[10] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            x[11] || (x[11] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          w(te, {
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
      _.value ? (s(), S(Ls, {
        key: 0,
        identifier: _.value,
        onClose: x[3] || (x[3] = (z) => _.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), uv = /* @__PURE__ */ le(cv, [["__scopeId", "data-v-cb4f12b3"]]), mv = {
  key: 0,
  class: "indexing-progress"
}, vv = { class: "progress-info" }, fv = { class: "progress-label" }, pv = { class: "progress-count" }, gv = { class: "progress-bar" }, hv = { class: "modal-content" }, yv = { class: "modal-header" }, wv = { class: "modal-body" }, kv = { class: "input-group" }, bv = { class: "current-path" }, _v = { class: "input-group" }, $v = { class: "modal-footer" }, Cv = { class: "modal-content" }, xv = { class: "modal-header" }, Sv = { class: "modal-body" }, Iv = { class: "input-group" }, Ev = { class: "input-group" }, Pv = { class: "modal-footer" }, Rv = /* @__PURE__ */ ne({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: p,
      setModelsDirectory: f
    } = qe(), { addToQueue: u } = vs(), m = c, d = h([]), v = h(!1), y = h(!1), k = h(null), _ = h(""), b = h(!1), L = h(null), D = h(!1), $ = h(null), I = h(""), G = h(!1), C = h(!1), M = h(""), Q = h(""), F = h(null), j = B(
      () => d.value.reduce((N, E) => N + (E.size || 0), 0)
    ), x = B(() => {
      if (!_.value.trim()) return d.value;
      const N = _.value.toLowerCase();
      return d.value.filter((E) => {
        const ce = E, se = E.sha256 || ce.sha256_hash || "";
        return E.filename.toLowerCase().includes(N) || se.toLowerCase().includes(N);
      });
    }), z = B(() => {
      const N = {};
      for (const ce of x.value) {
        const se = ce.type || "other";
        N[se] || (N[se] = []), N[se].push(ce);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([ce], [se]) => {
        const we = E.indexOf(ce), xe = E.indexOf(se);
        return we >= 0 && xe >= 0 ? we - xe : we >= 0 ? -1 : xe >= 0 ? 1 : ce.localeCompare(se);
      }).map(([ce, se]) => ({ type: ce, models: se }));
    });
    function A(N) {
      if (!N) return "Unknown";
      const E = 1024 * 1024 * 1024, ce = 1024 * 1024;
      return N >= E ? `${(N / E).toFixed(1)} GB` : N >= ce ? `${(N / ce).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function de(N) {
      L.value = N.hash || N.filename;
    }
    async function ee() {
      y.value = !0, k.value = null;
      try {
        const N = await i();
        await X(), N.changes > 0 && console.log(`Scan complete: ${N.changes} changes detected`);
      } catch (N) {
        k.value = N instanceof Error ? N.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function Y() {
      if (I.value.trim()) {
        G.value = !0, k.value = null;
        try {
          const N = await f(I.value.trim());
          $.value = N.path, D.value = !1, I.value = "", await X(), console.log(`Directory changed: ${N.models_indexed} models indexed`), m("refresh");
        } catch (N) {
          k.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          G.value = !1;
        }
      }
    }
    function re() {
      if (!M.value.trim() || !Q.value.trim()) return;
      const N = Q.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: N,
        url: M.value.trim(),
        targetPath: Q.value.trim()
      }]), M.value = "", Q.value = "", C.value = !1;
    }
    async function X() {
      v.value = !0, k.value = null;
      try {
        d.value = await n();
      } catch (N) {
        k.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function O() {
      try {
        const N = await p();
        $.value = N.path;
      } catch {
      }
    }
    return Fe(() => {
      X(), O();
    }), (N, E) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: E[2] || (E[2] = (ce) => b.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                disabled: y.value,
                onClick: ee
              }, {
                default: l(() => [
                  g(a(y.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: E[0] || (E[0] = (ce) => D.value = !0)
              }, {
                default: l(() => [...E[15] || (E[15] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: E[1] || (E[1] = (ce) => C.value = !0)
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
          F.value ? (s(), o("div", mv, [
            e("div", vv, [
              e("span", fv, a(F.value.message), 1),
              e("span", pv, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", gv, [
              e("div", {
                class: "progress-fill",
                style: It({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          w(Yt, {
            modelValue: _.value,
            "onUpdate:modelValue": E[3] || (E[3] = (ce) => _.value = ce),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || F.value ? (s(), S(Et, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : k.value ? (s(), S(Pt, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.length ? (s(), S(fs, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(d.value.length) + " models • " + a(A(j.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ae(z.value, (ce) => (s(), S(Oe, {
              key: ce.type,
              title: ce.type.toUpperCase(),
              count: ce.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(ce.models, (se) => (s(), S(tt, {
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
                    w(We, {
                      label: "Hash:",
                      value: se.hash ? se.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (we) => de(se)
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
            x.value.length ? r("", !0) : (s(), S(wt, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
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
      L.value ? (s(), S(Ls, {
        key: 0,
        identifier: L.value,
        onClose: E[5] || (E[5] = (ce) => L.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), S(Xe, { to: "body" }, [
        D.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[9] || (E[9] = Ae((ce) => D.value = !1, ["self"]))
        }, [
          e("div", hv, [
            e("div", yv, [
              E[20] || (E[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[6] || (E[6] = (ce) => D.value = !1)
              }, "✕")
            ]),
            e("div", wv, [
              e("div", kv, [
                E[21] || (E[21] = e("label", null, "Current Directory", -1)),
                e("code", bv, a($.value || "Not set"), 1)
              ]),
              e("div", _v, [
                E[22] || (E[22] = e("label", null, "New Directory Path", -1)),
                w(yt, {
                  modelValue: I.value,
                  "onUpdate:modelValue": E[7] || (E[7] = (ce) => I.value = ce),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              E[23] || (E[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", $v, [
              w(ye, {
                variant: "secondary",
                onClick: E[8] || (E[8] = (ce) => D.value = !1)
              }, {
                default: l(() => [...E[24] || (E[24] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ye, {
                variant: "primary",
                disabled: !I.value.trim() || G.value,
                loading: G.value,
                onClick: Y
              }, {
                default: l(() => [
                  g(a(G.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), S(Xe, { to: "body" }, [
        C.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[14] || (E[14] = Ae((ce) => C.value = !1, ["self"]))
        }, [
          e("div", Cv, [
            e("div", xv, [
              E[25] || (E[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[10] || (E[10] = (ce) => C.value = !1)
              }, "✕")
            ]),
            e("div", Sv, [
              e("div", Iv, [
                E[26] || (E[26] = e("label", null, "Download URL", -1)),
                w(yt, {
                  modelValue: M.value,
                  "onUpdate:modelValue": E[11] || (E[11] = (ce) => M.value = ce),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Ev, [
                E[27] || (E[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                w(yt, {
                  modelValue: Q.value,
                  "onUpdate:modelValue": E[12] || (E[12] = (ce) => Q.value = ce),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              E[28] || (E[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Pv, [
              w(ye, {
                variant: "secondary",
                onClick: E[13] || (E[13] = (ce) => C.value = !1)
              }, {
                default: l(() => [...E[29] || (E[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ye, {
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
}), Mv = /* @__PURE__ */ le(Rv, [["__scopeId", "data-v-73b78d84"]]), Tv = { class: "node-details" }, Dv = { class: "status-row" }, Lv = {
  key: 0,
  class: "detail-row"
}, zv = { class: "value" }, Uv = { class: "detail-row" }, Nv = { class: "value" }, Ov = {
  key: 1,
  class: "detail-row"
}, Bv = { class: "value mono" }, Av = {
  key: 2,
  class: "detail-row"
}, Fv = ["href"], Vv = {
  key: 3,
  class: "detail-row"
}, Wv = { class: "value mono small" }, Gv = { class: "detail-row" }, jv = {
  key: 0,
  class: "value"
}, Kv = {
  key: 1,
  class: "workflow-list"
}, Hv = /* @__PURE__ */ ne({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), f = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, d) => (s(), S(nt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => i("close"))
    }, {
      body: l(() => [
        e("div", Tv, [
          e("div", Dv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: pe(["status-badge", p.value])
            }, a(f.value), 3)
          ]),
          t.node.version ? (s(), o("div", Lv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", zv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : r("", !0),
          e("div", Uv, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Nv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Ov, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Bv, a(t.node.registry_id), 1)
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
            ], 8, Fv)
          ])) : r("", !0),
          t.node.download_url ? (s(), o("div", Vv, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Wv, a(t.node.download_url), 1)
          ])) : r("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Gv, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", jv, " Not used in any workflows ")) : (s(), o("div", Kv, [
              (s(!0), o(W, null, ae(t.node.used_in_workflows, (v) => (s(), o("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        w(ye, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => i("close"))
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
}), qv = /* @__PURE__ */ le(Hv, [["__scopeId", "data-v-b342f626"]]), Yv = { class: "dialog-message" }, Jv = {
  key: 0,
  class: "dialog-details"
}, Xv = {
  key: 1,
  class: "dialog-warning"
}, Qv = /* @__PURE__ */ ne({
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
    return (c, n) => (s(), S(nt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Yv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Jv, [
          (s(!0), o(W, null, ae(t.details, (i, p) => (s(), o("div", {
            key: p,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", Xv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        w(ye, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            g(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), S(ye, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            g(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        w(ye, {
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
}), ro = /* @__PURE__ */ le(Qv, [["__scopeId", "data-v-3670b9f5"]]), Zv = { class: "mismatch-warning" }, ef = { class: "version-mismatch" }, tf = { class: "version-actual" }, sf = { class: "version-expected" }, of = { key: 0 }, nf = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, af = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, lf = /* @__PURE__ */ ne({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: p, trackNodeAsDev: f, installNode: u, uninstallNode: m } = qe(), d = h({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), v = h(!1), y = h(null), k = h(""), _ = h(!1), b = h(null), L = h(null), D = B(() => {
      if (!k.value.trim()) return d.value.nodes;
      const ee = k.value.toLowerCase();
      return d.value.nodes.filter(
        (Y) => {
          var re, X;
          return Y.name.toLowerCase().includes(ee) || ((re = Y.description) == null ? void 0 : re.toLowerCase().includes(ee)) || ((X = Y.repository) == null ? void 0 : X.toLowerCase().includes(ee));
        }
      );
    }), $ = B(
      () => D.value.filter((ee) => ee.installed && ee.tracked)
    ), I = B(
      () => D.value.filter((ee) => !ee.installed && ee.tracked)
    ), G = B(
      () => D.value.filter((ee) => ee.installed && !ee.tracked)
    );
    function C(ee) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ee] || ee;
    }
    const M = B(() => n.versionMismatches.length > 0);
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
      L.value = {
        title: "Track as Development Node",
        message: `Track "${ee}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          L.value = null;
          try {
            v.value = !0;
            const Y = await f(ee);
            Y.status === "success" ? (i("toast", `✓ Node "${ee}" tracked as development`, "success"), await de()) : i("toast", `Failed to track node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error tracking node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function z(ee) {
      L.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ee}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          L.value = null;
          try {
            v.value = !0;
            const Y = await m(ee);
            Y.status === "success" ? (i("toast", `✓ Node "${ee}" removed`, "success"), await de()) : i("toast", `Failed to remove node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error removing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function A(ee) {
      L.value = {
        title: "Install Missing Node",
        message: `Install "${ee}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          L.value = null;
          try {
            v.value = !0;
            const Y = await u(ee);
            Y.status === "success" ? (i("toast", `✓ Node "${ee}" installed`, "success"), await de()) : i("toast", `Failed to install node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error installing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function de() {
      v.value = !0, y.value = null;
      try {
        d.value = await p();
      } catch (ee) {
        y.value = ee instanceof Error ? ee.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return Fe(de), (ee, Y) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: Y[0] || (Y[0] = (re) => _.value = !0)
          }, {
            actions: l(() => [
              w(te, {
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
          w(Yt, {
            modelValue: k.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (re) => k.value = re),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), S(Et, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (s(), S(Pt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.total_count ? (s(), S(fs, {
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
            M.value ? (s(), S(Oe, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Zv, [
                  Y[8] || (Y[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(W, null, ae(t.versionMismatches, (re) => (s(), S(tt, {
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
                    e("span", ef, [
                      e("span", tf, a(re.actual), 1),
                      Y[10] || (Y[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", sf, a(re.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    w(te, {
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
            G.value.length ? (s(), S(Oe, {
              key: 2,
              title: "UNTRACKED",
              count: G.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(G.value, (re) => (s(), S(tt, {
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
                    w(We, {
                      label: "Used by:",
                      value: Q(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(re)
                    }, {
                      default: l(() => [...Y[14] || (Y[14] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => x(re.name)
                    }, {
                      default: l(() => [...Y[15] || (Y[15] = [
                        g(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => z(re.name)
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
            $.value.length ? (s(), S(Oe, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae($.value, (re) => (s(), S(tt, {
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
                    re.version ? (s(), o("span", of, a(re.source === "development" ? "" : "v") + a(re.version), 1)) : (s(), o("span", nf, "version unknown")),
                    e("span", af, " • " + a(C(re.source)), 1)
                  ]),
                  details: l(() => [
                    w(We, {
                      label: "Used by:",
                      value: Q(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(re)
                    }, {
                      default: l(() => [...Y[17] || (Y[17] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
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
            I.value.length ? (s(), S(Oe, {
              key: 4,
              title: "MISSING",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(I.value, (re) => (s(), S(tt, {
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
                    w(We, {
                      label: "Required by:",
                      value: Q(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(re)
                    }, {
                      default: l(() => [...Y[21] || (Y[21] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
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
            !$.value.length && !I.value.length && !G.value.length ? (s(), S(wt, {
              key: 5,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
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
          w(te, {
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
      b.value ? (s(), S(qv, {
        key: 0,
        node: b.value,
        onClose: Y[5] || (Y[5] = (re) => b.value = null)
      }, null, 8, ["node"])) : r("", !0),
      L.value ? (s(), S(ro, {
        key: 1,
        title: L.value.title,
        message: L.value.message,
        warning: L.value.warning,
        "confirm-label": L.value.confirmLabel,
        destructive: L.value.destructive,
        onConfirm: L.value.onConfirm,
        onCancel: Y[6] || (Y[6] = (re) => L.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), rf = /* @__PURE__ */ le(lf, [["__scopeId", "data-v-1555a802"]]);
function co(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const df = { class: "remote-url-display" }, cf = ["title"], uf = ["title"], mf = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, vf = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ff = /* @__PURE__ */ ne({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = h(!1), i = B(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const f = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${f}...${u}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy URL:", f);
      }
    }
    return (f, u) => (s(), o("div", df, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, cf),
      e("button", {
        class: pe(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", vf, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", mf, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, uf)
    ]));
  }
}), pf = /* @__PURE__ */ le(ff, [["__scopeId", "data-v-7768a58d"]]), gf = { class: "remote-title" }, hf = {
  key: 0,
  class: "default-badge"
}, yf = {
  key: 1,
  class: "sync-badge"
}, wf = {
  key: 0,
  class: "ahead"
}, kf = {
  key: 1,
  class: "behind"
}, bf = {
  key: 1,
  class: "synced"
}, _f = ["href"], $f = {
  key: 1,
  class: "remote-url-text"
}, Cf = /* @__PURE__ */ ne({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = B(() => c.fetchingRemote === c.remote.name), i = B(() => c.remote.is_default), p = B(() => c.syncStatus && c.syncStatus.behind > 0), f = B(() => c.syncStatus && c.syncStatus.ahead > 0), u = B(() => c.remote.push_url !== c.remote.fetch_url), m = B(() => {
      const v = c.remote.fetch_url, y = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = B(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, y) => (s(), S(tt, {
      status: i.value ? "synced" : void 0
    }, Ft({
      icon: l(() => [
        g(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", gf, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", hf, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", yf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", wf, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", kf, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", bf, "✓ synced"))
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
          onClick: y[0] || (y[0] = Ae(() => {
          }, ["stop"]))
        }, a(d.value), 9, _f)) : (s(), o("span", $f, a(d.value), 1))
      ]),
      actions: l(() => [
        w(te, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: y[1] || (y[1] = (k) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...y[6] || (y[6] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        w(te, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[2] || (y[2] = (k) => v.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            g(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(te, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[3] || (y[3] = (k) => v.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(te, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (k) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...y[7] || (y[7] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (s(), S(te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: y[5] || (y[5] = (k) => v.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...y[8] || (y[8] = [
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
          t.remote.push_url !== t.remote.fetch_url ? (s(), S(We, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              w(pf, {
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
}), xf = /* @__PURE__ */ le(Cf, [["__scopeId", "data-v-8310f3a8"]]), Sf = ["for"], If = {
  key: 0,
  class: "base-form-field-required"
}, Ef = { class: "base-form-field-input" }, Pf = {
  key: 1,
  class: "base-form-field-error"
}, Rf = {
  key: 2,
  class: "base-form-field-hint"
}, Mf = /* @__PURE__ */ ne({
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
    return (i, p) => (s(), o("div", {
      class: pe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        g(a(t.label) + " ", 1),
        t.required ? (s(), o("span", If, "*")) : r("", !0)
      ], 8, Sf)) : r("", !0),
      e("div", Ef, [
        Pe(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Pf, a(t.error), 1)) : t.hint ? (s(), o("span", Rf, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), $s = /* @__PURE__ */ le(Mf, [["__scopeId", "data-v-9a1cf296"]]), Tf = { class: "remote-form" }, Df = { class: "form-header" }, Lf = { class: "form-body" }, zf = {
  key: 0,
  class: "form-error"
}, Uf = { class: "form-actions" }, Nf = /* @__PURE__ */ ne({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = h({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), f = h(!1), u = h(null);
    vt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = B(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!m.value || f.value)) {
        u.value = null, f.value = !0;
        try {
          i("submit", p.value);
        } catch (v) {
          u.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          f.value = !1;
        }
      }
    }
    return (v, y) => (s(), o("div", Tf, [
      e("div", Df, [
        w(mt, null, {
          default: l(() => [
            g(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Lf, [
        w($s, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            w(yt, {
              modelValue: p.value.name,
              "onUpdate:modelValue": y[0] || (y[0] = (k) => p.value.name = k),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        w($s, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            w(yt, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (k) => p.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        w($s, { label: "Push URL (optional)" }, {
          default: l(() => [
            w(yt, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": y[2] || (y[2] = (k) => p.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", zf, a(u.value), 1)) : r("", !0)
      ]),
      e("div", Uf, [
        w(te, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: f.value,
          onClick: d
        }, {
          default: l(() => [
            g(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        w(te, {
          variant: "ghost",
          size: "md",
          onClick: y[3] || (y[3] = (k) => v.$emit("cancel"))
        }, {
          default: l(() => [...y[4] || (y[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Of = /* @__PURE__ */ le(Nf, [["__scopeId", "data-v-56021b18"]]), Bf = { class: "conflict-summary-box" }, Af = { class: "summary-header" }, Ff = { class: "summary-text" }, Vf = { key: 0 }, Wf = {
  key: 1,
  class: "all-resolved"
}, Gf = { class: "summary-progress" }, jf = { class: "progress-bar" }, Kf = { class: "progress-text" }, Hf = /* @__PURE__ */ ne({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = B(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, p) => (s(), o("div", Bf, [
      e("div", Af, [
        p[0] || (p[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Ff, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Vf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Wf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Gf, [
        e("div", jf, [
          e("div", {
            class: "progress-fill",
            style: It({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Kf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), qf = /* @__PURE__ */ le(Hf, [["__scopeId", "data-v-4e9e6cc9"]]), Yf = { class: "modal-header" }, Jf = { class: "modal-title" }, Xf = { class: "modal-body" }, Qf = {
  key: 0,
  class: "error-box"
}, Zf = {
  key: 0,
  class: "error-hint"
}, ep = {
  key: 1,
  class: "loading-state"
}, tp = { class: "commit-summary" }, sp = {
  key: 0,
  class: "changes-section"
}, op = {
  key: 0,
  class: "change-group",
  open: ""
}, np = { class: "change-count" }, ap = { class: "change-list" }, lp = {
  key: 0,
  class: "conflict-badge"
}, ip = {
  key: 1,
  class: "change-group"
}, rp = { class: "change-count" }, dp = { class: "change-list" }, cp = {
  key: 2,
  class: "change-group"
}, up = { class: "change-count" }, mp = { class: "change-list" }, vp = {
  key: 2,
  class: "strategy-section"
}, fp = { class: "radio-group" }, pp = { class: "radio-option" }, gp = { class: "radio-option" }, hp = { class: "radio-option" }, yp = {
  key: 3,
  class: "up-to-date"
}, wp = { class: "modal-actions" }, Ys = "comfygit.pullModelStrategy", kp = /* @__PURE__ */ ne({
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
    const n = t, i = c, p = h(localStorage.getItem(Ys) || "skip");
    vt(p, ($) => {
      localStorage.setItem(Ys, $);
    });
    const f = B(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = B(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), m = B(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = B(() => {
      var $;
      return u.value > 0 || m.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), v = B(() => n.preview && co(n.preview) ? n.preview : null), y = B(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), k = B(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), _ = B(
      () => y.value > 0 && k.value === y.value
    ), b = B(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !_.value));
    function L($) {
      if (!v.value) return !1;
      const I = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((G) => G.name === I);
    }
    function D($) {
      const I = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: p.value, force: $, resolutions: I });
    }
    return ($, I) => {
      var G, C;
      return s(), S(Xe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[11] || (I[11] = (M) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: I[10] || (I[10] = Ae(() => {
            }, ["stop"]))
          }, [
            e("div", Yf, [
              e("h3", Jf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (M) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", Xf, [
              t.error ? (s(), o("div", Qf, [
                I[13] || (I[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  I[12] || (I[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  f.value ? (s(), o("p", Zf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : r("", !0)
                ])
              ])) : t.loading ? (s(), o("div", ep, [...I[14] || (I[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (G = t.preview) != null && G.has_uncommitted_changes ? (s(), o(W, { key: 2 }, [
                I[15] || (I[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                I[16] || (I[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", tp, [
                  I[17] || (I[17] = e("span", { class: "icon" }, "📥", -1)),
                  g(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", sp, [
                  I[21] || (I[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", op, [
                    e("summary", null, [
                      I[18] || (I[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", np, a(u.value) + " changes", 1)
                    ]),
                    e("div", ap, [
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.added, (M) => (s(), o("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + a(M), 1))), 128)),
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.modified, (M) => (s(), o("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        g(" ~ " + a(M) + " ", 1),
                        L(M) ? (s(), o("span", lp, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.deleted, (M) => (s(), o("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + a(M), 1))), 128))
                    ])
                  ])) : r("", !0),
                  m.value > 0 ? (s(), o("details", ip, [
                    e("summary", null, [
                      I[19] || (I[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", rp, a(m.value) + " to install", 1)
                    ]),
                    e("div", dp, [
                      (s(!0), o(W, null, ae(t.preview.changes.nodes.to_install, (M) => (s(), o("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + a(M), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", cp, [
                    e("summary", null, [
                      I[20] || (I[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", up, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", mp, [
                      (s(!0), o(W, null, ae(t.preview.changes.models.referenced, (M) => (s(), o("div", {
                        key: M,
                        class: "change-item"
                      }, a(M), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                v.value ? (s(), S(qf, {
                  key: 1,
                  "conflict-count": y.value,
                  "resolved-count": k.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", vp, [
                  I[26] || (I[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", fp, [
                    e("label", pp, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[1] || (I[1] = (M) => p.value = M),
                        value: "all"
                      }, null, 512), [
                        [Dt, p.value]
                      ]),
                      I[22] || (I[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", gp, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[2] || (I[2] = (M) => p.value = M),
                        value: "required"
                      }, null, 512), [
                        [Dt, p.value]
                      ]),
                      I[23] || (I[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", hp, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[3] || (I[3] = (M) => p.value = M),
                        value: "skip"
                      }, null, 512), [
                        [Dt, p.value]
                      ]),
                      I[24] || (I[24] = e("span", null, "Skip model downloads", -1)),
                      I[25] || (I[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  I[27] || (I[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : r("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", yp, [
                  I[28] || (I[28] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : r("", !0)
              ], 64)) : r("", !0)
            ]),
            e("div", wp, [
              w(te, {
                variant: "secondary",
                onClick: I[4] || (I[4] = (M) => $.$emit("close"))
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(W, { key: 0 }, [
                w(te, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: I[5] || (I[5] = (M) => D(!1))
                }, {
                  default: l(() => [...I[30] || (I[30] = [
                    g(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                w(te, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: I[6] || (I[6] = (M) => D(!0))
                }, {
                  default: l(() => [...I[31] || (I[31] = [
                    g(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (C = t.preview) != null && C.has_uncommitted_changes ? (s(), S(te, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: I[7] || (I[7] = (M) => D(!0))
              }, {
                default: l(() => [...I[32] || (I[32] = [
                  g(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(W, { key: 2 }, [
                v.value && !_.value ? (s(), S(te, {
                  key: 0,
                  variant: "primary",
                  onClick: I[8] || (I[8] = (M) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    g(" Resolve Conflicts (" + a(k.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), S(te, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !b.value,
                  onClick: I[9] || (I[9] = (M) => D(!1))
                }, {
                  default: l(() => [...I[33] || (I[33] = [
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
}), bp = /* @__PURE__ */ le(kp, [["__scopeId", "data-v-300c7b2f"]]), _p = { class: "modal-header" }, $p = { class: "modal-title" }, Cp = { class: "modal-body" }, xp = {
  key: 0,
  class: "loading-state"
}, Sp = {
  key: 1,
  class: "warning-box"
}, Ip = {
  key: 0,
  class: "commits-section"
}, Ep = { class: "commit-list" }, Pp = { class: "commit-hash" }, Rp = { class: "commit-message" }, Mp = { class: "commit-date" }, Tp = { class: "force-option" }, Dp = { class: "checkbox-option" }, Lp = { class: "commit-summary" }, zp = {
  key: 0,
  class: "commits-section"
}, Up = { class: "commit-list" }, Np = { class: "commit-hash" }, Op = { class: "commit-message" }, Bp = { class: "commit-date" }, Ap = {
  key: 1,
  class: "up-to-date"
}, Fp = { class: "modal-actions" }, Vp = /* @__PURE__ */ ne({
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
    function p(f) {
      n("push", { force: f });
    }
    return (f, u) => {
      var m, d, v;
      return s(), S(Xe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (y) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Ae(() => {
            }, ["stop"]))
          }, [
            e("div", _p, [
              e("h3", $p, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (y) => f.$emit("close"))
              }, "✕")
            ]),
            e("div", Cp, [
              t.loading ? (s(), o("div", xp, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (s(), o("div", Sp, [...u[9] || (u[9] = [
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
                t.preview.commits_ahead > 0 ? (s(), o("div", Ip, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Ep, [
                    (s(!0), o(W, null, ae(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", Pp, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", Rp, a(y.message), 1),
                      e("span", Mp, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", Tp, [
                  e("label", Dp, [
                    Le(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (y) => i.value = y)
                    }, null, 512), [
                      [hs, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", Lp, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  g(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", zp, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Up, [
                    (s(!0), o(W, null, ae(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", Np, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", Op, a(y.message), 1),
                      e("span", Bp, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Ap, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", Fp, [
              w(te, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (y) => f.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(W, { key: 0 }, [
                w(te, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (y) => f.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    g(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                w(te, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (y) => p(!0))
                }, {
                  default: l(() => [...u[19] || (u[19] = [
                    g(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), S(te, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (y) => p(!1))
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
}), Wp = /* @__PURE__ */ le(Vp, [["__scopeId", "data-v-bc6ded53"]]), Gp = { class: "resolution-choice-group" }, jp = ["disabled"], Kp = ["disabled"], Hp = /* @__PURE__ */ ne({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Gp, [
      e("button", {
        class: pe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, jp),
      e("button", {
        class: pe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Kp)
    ]));
  }
}), qp = /* @__PURE__ */ le(Hp, [["__scopeId", "data-v-985715ed"]]), Yp = { class: "conflict-header" }, Jp = { class: "conflict-info" }, Xp = { class: "workflow-name" }, Qp = { class: "conflict-description" }, Zp = {
  key: 0,
  class: "resolved-badge"
}, eg = { class: "resolved-text" }, tg = { class: "conflict-hashes" }, sg = { class: "hash-item" }, og = { class: "hash-item" }, ng = { class: "conflict-actions" }, ag = /* @__PURE__ */ ne({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = h(n.resolution);
    vt(() => n.resolution, (d) => {
      p.value = d;
    }), vt(p, (d) => {
      d && i("resolve", d);
    });
    const f = B(() => p.value !== null), u = B(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = B(() => {
      switch (p.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, v) => {
      var y, k;
      return s(), o("div", {
        class: pe(["conflict-item", { resolved: f.value }])
      }, [
        e("div", Yp, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Jp, [
            e("code", Xp, a(t.conflict.name) + ".json", 1),
            e("div", Qp, a(u.value), 1)
          ]),
          f.value ? (s(), o("div", Zp, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", eg, a(m.value), 1)
          ])) : r("", !0)
        ]),
        e("div", tg, [
          e("span", sg, [
            v[3] || (v[3] = g("Your: ", -1)),
            e("code", null, a(((y = t.conflict.base_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", og, [
            v[4] || (v[4] = g("Theirs: ", -1)),
            e("code", null, a(((k = t.conflict.target_hash) == null ? void 0 : k.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", ng, [
          w(qp, {
            modelValue: p.value,
            "onUpdate:modelValue": v[0] || (v[0] = (_) => p.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), lg = /* @__PURE__ */ le(ag, [["__scopeId", "data-v-506d3bbf"]]), ig = { class: "resolution-content" }, rg = {
  key: 0,
  class: "error-box"
}, dg = { class: "resolution-header" }, cg = { class: "header-stats" }, ug = { class: "stat" }, mg = { class: "stat-value" }, vg = { class: "stat resolved" }, fg = { class: "stat-value" }, pg = {
  key: 0,
  class: "stat pending"
}, gg = { class: "stat-value" }, hg = { class: "conflicts-list" }, yg = {
  key: 1,
  class: "all-resolved-message"
}, wg = /* @__PURE__ */ ne({
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
    const n = t, i = c, p = B(() => n.resolutions.size), f = B(() => n.workflowConflicts.length - p.value), u = B(() => p.value === n.workflowConflicts.length), m = B(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(_) {
      const b = n.resolutions.get(_);
      return (b == null ? void 0 : b.resolution) ?? null;
    }
    function v(_, b) {
      i("resolve", _, b);
    }
    function y() {
      i("close");
    }
    function k() {
      i("apply");
    }
    return (_, b) => (s(), S(nt, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: y
    }, {
      body: l(() => [
        e("div", ig, [
          t.error ? (s(), o("div", rg, [
            b[1] || (b[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              b[0] || (b[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : r("", !0),
          e("div", dg, [
            e("div", cg, [
              e("div", ug, [
                e("span", mg, a(t.workflowConflicts.length), 1),
                b[2] || (b[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", vg, [
                e("span", fg, a(p.value), 1),
                b[3] || (b[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              f.value > 0 ? (s(), o("div", pg, [
                e("span", gg, a(f.value), 1),
                b[4] || (b[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : r("", !0)
            ]),
            b[5] || (b[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", hg, [
            (s(!0), o(W, null, ae(t.workflowConflicts, (L) => (s(), S(lg, {
              key: L.name,
              conflict: L,
              resolution: d(L.name),
              onResolve: (D) => v(L.name, D)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", yg, [
            b[6] || (b[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        w(ye, {
          variant: "secondary",
          onClick: y
        }, {
          default: l(() => [...b[7] || (b[7] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b[8] || (b[8] = e("div", { class: "footer-spacer" }, null, -1)),
        w(ye, {
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
}), kg = /* @__PURE__ */ le(wg, [["__scopeId", "data-v-c58d150d"]]), bg = { class: "node-conflict-item" }, _g = { class: "node-header" }, $g = { class: "node-name" }, Cg = { class: "node-id" }, xg = { class: "version-comparison" }, Sg = { class: "version yours" }, Ig = { class: "version theirs" }, Eg = { class: "chosen-version" }, Pg = { class: "chosen" }, Rg = { class: "chosen-reason" }, Mg = { class: "affected-workflows" }, Tg = { class: "wf-source" }, Dg = { class: "wf-version" }, Lg = /* @__PURE__ */ ne({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", bg, [
      e("div", _g, [
        e("code", $g, a(t.conflict.node_name), 1),
        e("span", Cg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", xg, [
        e("div", Sg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Ig, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Eg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Pg, a(t.conflict.chosen_version), 1),
        e("span", Rg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Mg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(W, null, ae(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Tg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Dg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), zg = /* @__PURE__ */ le(Lg, [["__scopeId", "data-v-8b626725"]]), Ug = { class: "validation-content" }, Ng = {
  key: 0,
  class: "compatible-message"
}, Og = { class: "conflicts-list" }, Bg = {
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
    const n = t, i = c, p = B(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (f, u) => (s(), S(nt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (m) => i("cancel"))
    }, {
      body: l(() => [
        e("div", Ug, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Ng, [
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
            e("div", Og, [
              (s(!0), o(W, null, ae(t.validation.node_conflicts, (m) => (s(), S(zg, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : r("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Bg, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(W, null, ae(t.validation.warnings, (m, d) => (s(), o("li", { key: d }, a(m), 1))), 128))
            ])
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        w(ye, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => i("cancel"))
        }, {
          default: l(() => [...u[9] || (u[9] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        w(ye, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => i("goBack"))
        }, {
          default: l(() => [...u[10] || (u[10] = [
            g(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        w(ye, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (m) => i("proceed"))
        }, {
          default: l(() => [
            g(a(p.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Fg = /* @__PURE__ */ le(Ag, [["__scopeId", "data-v-fefd26ed"]]), Vg = { key: 0 }, Wg = /* @__PURE__ */ ne({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: p,
      removeRemote: f,
      updateRemoteUrl: u,
      fetchRemote: m,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: y,
      getPushPreview: k,
      pushToRemote: _,
      validateMerge: b
    } = qe(), L = h([]), D = h(null), $ = h({}), I = h(!1), G = h(null), C = h(""), M = h(!1), Q = h(null), F = h(!1), j = h("add"), x = h({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), z = B(() => {
      if (!C.value.trim()) return L.value;
      const V = C.value.toLowerCase();
      return L.value.filter(
        (oe) => oe.name.toLowerCase().includes(V) || oe.fetch_url.toLowerCase().includes(V) || oe.push_url.toLowerCase().includes(V)
      );
    });
    async function A() {
      I.value = !0, G.value = null;
      try {
        const V = await i();
        L.value = V.remotes, D.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (oe) => {
            const ke = await d(oe.name);
            ke && ($.value[oe.name] = ke);
          })
        );
      } catch (V) {
        G.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        I.value = !1;
      }
    }
    function de() {
      j.value = "add", x.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function ee(V) {
      const oe = L.value.find((ke) => ke.name === V);
      oe && (j.value = "edit", x.value = {
        name: oe.name,
        fetchUrl: oe.fetch_url,
        pushUrl: oe.push_url
      }, F.value = !0);
    }
    async function Y(V) {
      try {
        j.value === "add" ? await p(V.name, V.fetchUrl) : await u(V.name, V.fetchUrl, V.pushUrl || void 0), F.value = !1, await A();
      } catch (oe) {
        G.value = oe instanceof Error ? oe.message : "Operation failed";
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
    async function O(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await f(V), await A();
        } catch (oe) {
          G.value = oe instanceof Error ? oe.message : "Failed to remove remote";
        }
    }
    function N() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const E = h("idle"), ce = B(() => E.value === "pull_preview"), se = B(
      () => E.value === "resolving" || E.value === "validating"
    ), we = B(
      () => E.value === "validation_review" || E.value === "executing"
    ), xe = h(!1), Re = h(null), ze = h(!1), me = h(null), he = h(!1), Se = h(null), Z = h(null), ie = h(/* @__PURE__ */ new Map()), ge = h(null), Ue = h(null), Ye = B(() => Se.value && co(Se.value) ? Se.value : null);
    async function et(V) {
      me.value = V, E.value = "pull_preview", he.value = !0, Se.value = null, Z.value = null;
      try {
        Se.value = await v(V);
      } catch (oe) {
        Z.value = oe instanceof Error ? oe.message : "Failed to load pull preview";
      } finally {
        he.value = !1;
      }
    }
    function Ie() {
      E.value = "idle", Se.value = null, Z.value = null, me.value = null;
    }
    async function Be(V) {
      if (!me.value) return;
      E.value = "executing", Z.value = null;
      const oe = me.value;
      try {
        const ke = await y(oe, V);
        if (ke.rolled_back) {
          Z.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, E.value = "pull_preview";
          return;
        }
        De(), E.value = "idle", n("toast", `✓ Pulled from ${oe}`, "success"), await A();
      } catch (ke) {
        Z.value = ke instanceof Error ? ke.message : "Pull failed", E.value = "pull_preview";
      }
    }
    function Je() {
      Ye.value && (E.value = "resolving", Ue.value = null);
    }
    function He(V, oe) {
      ie.value.set(V, { name: V, resolution: oe });
    }
    function lt() {
      E.value = "pull_preview";
    }
    async function be() {
      E.value = "validating", Ue.value = null;
      try {
        const V = Array.from(ie.value.values());
        ge.value = await b(me.value, V), E.value = "validation_review";
      } catch (V) {
        Ue.value = V instanceof Error ? V.message : "Validation failed", E.value = "resolving";
      }
    }
    async function Ge() {
      E.value = "executing";
      const V = me.value;
      try {
        const oe = Array.from(ie.value.values()), ke = await y(V, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: oe
        });
        if (ke.rolled_back) {
          Z.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, E.value = "pull_preview";
          return;
        }
        De(), E.value = "idle", n("toast", `✓ Pulled from ${V}`, "success"), await A();
      } catch (oe) {
        Z.value = oe instanceof Error ? oe.message : "Pull failed", E.value = "validation_review";
      }
    }
    function Me() {
      E.value = "resolving";
    }
    function Qe() {
      De(), E.value = "idle";
    }
    function De() {
      ie.value.clear(), ge.value = null, Ue.value = null, Z.value = null, Se.value = null, me.value = null;
    }
    async function fe(V) {
      me.value = V, xe.value = !0, he.value = !0, Re.value = null;
      try {
        Re.value = await k(V);
      } catch (oe) {
        G.value = oe instanceof Error ? oe.message : "Failed to load push preview";
      } finally {
        he.value = !1;
      }
    }
    function H() {
      xe.value = !1, Re.value = null, me.value = null;
    }
    async function q(V) {
      if (!me.value) return;
      ze.value = !0;
      const oe = me.value;
      try {
        await _(oe, V), H(), n("toast", `✓ Pushed to ${oe}`, "success"), await A();
      } catch (ke) {
        n("toast", ke instanceof Error ? ke.message : "Push failed", "error");
      } finally {
        ze.value = !1;
      }
    }
    function P() {
      const V = me.value;
      H(), V && et(V);
    }
    return Fe(A), (V, oe) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (ke) => M.value = !0)
          }, {
            actions: l(() => [
              F.value ? r("", !0) : (s(), S(te, {
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
          F.value ? r("", !0) : (s(), S(Yt, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (ke) => C.value = ke),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          I.value ? (s(), S(Et, {
            key: 0,
            message: "Loading remotes..."
          })) : G.value ? (s(), S(Pt, {
            key: 1,
            message: G.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            F.value ? (s(), S(Of, {
              key: 0,
              mode: j.value,
              "remote-name": x.value.name,
              "fetch-url": x.value.fetchUrl,
              "push-url": x.value.pushUrl,
              onSubmit: Y,
              onCancel: re
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            L.value.length && !F.value ? (s(), S(fs, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(L.value.length) + " remote" + a(L.value.length !== 1 ? "s" : "") + " ", 1),
                D.value ? (s(), o("span", Vg, " • Tracking: " + a(D.value.remote) + "/" + a(D.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            z.value.length && !F.value ? (s(), S(Oe, {
              key: 2,
              title: "REMOTES",
              count: z.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(z.value, (ke) => (s(), S(xf, {
                  key: ke.name,
                  remote: ke,
                  "sync-status": $.value[ke.name],
                  "fetching-remote": Q.value,
                  onFetch: X,
                  onEdit: ee,
                  onRemove: O,
                  onPull: et,
                  onPush: fe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !z.value.length && !F.value ? (s(), S(wt, {
              key: 3,
              icon: "🌐",
              message: C.value ? `No remotes match '${C.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                w(te, {
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
      w(kt, {
        show: M.value,
        title: "About Git Remotes",
        onClose: oe[2] || (oe[2] = (ke) => M.value = !1)
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
          w(te, {
            variant: "link",
            onClick: N
          }, {
            default: l(() => [...oe[6] || (oe[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w(bp, {
        show: ce.value,
        "remote-name": me.value || "",
        preview: Se.value,
        loading: he.value,
        pulling: E.value === "executing",
        error: Z.value,
        "conflict-resolutions": ie.value,
        onClose: Ie,
        onPull: Be,
        onOpenConflictResolution: Je
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      w(Wp, {
        show: xe.value,
        "remote-name": me.value || "",
        preview: Re.value,
        loading: he.value,
        pushing: ze.value,
        onClose: H,
        onPush: q,
        onPullFirst: P
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      se.value && Ye.value ? (s(), S(kg, {
        key: 0,
        "workflow-conflicts": Ye.value.workflow_conflicts,
        resolutions: ie.value,
        "operation-type": "pull",
        validating: E.value === "validating",
        error: Ue.value,
        onClose: lt,
        onResolve: He,
        onApply: be
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      we.value && ge.value ? (s(), S(Fg, {
        key: 1,
        validation: ge.value,
        "operation-type": "pull",
        executing: E.value === "executing",
        onProceed: Ge,
        onGoBack: Me,
        onCancel: Qe
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Gg = /* @__PURE__ */ le(Wg, [["__scopeId", "data-v-9ae3b76d"]]), jg = { class: "setting-info" }, Kg = { class: "setting-label" }, Hg = {
  key: 0,
  class: "required-marker"
}, qg = {
  key: 0,
  class: "setting-description"
}, Yg = { class: "setting-control" }, Jg = /* @__PURE__ */ ne({
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
      e("div", jg, [
        e("div", Kg, [
          g(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Hg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", qg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", Yg, [
        Pe(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Cs = /* @__PURE__ */ le(Jg, [["__scopeId", "data-v-cb5d236c"]]), Xg = { class: "toggle" }, Qg = ["checked", "disabled"], Zg = /* @__PURE__ */ ne({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Xg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Qg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), eh = /* @__PURE__ */ le(Zg, [["__scopeId", "data-v-71c0f550"]]), th = { class: "workspace-settings-content" }, sh = { class: "settings-section" }, oh = { class: "path-setting" }, nh = { class: "path-value" }, ah = { class: "path-setting" }, lh = { class: "path-value" }, ih = { class: "settings-section" }, rh = { class: "settings-section" }, dh = { class: "settings-section" }, ch = /* @__PURE__ */ ne({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, p = n, { getConfig: f, updateConfig: u } = qe(), m = h(!1), d = h(null), v = h(null), y = h(null), k = h(null), _ = h(""), b = h(""), L = h(!1);
    function D(F) {
      return F.join(" ");
    }
    function $(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const I = B(() => {
      if (!k.value) return !1;
      const F = _.value !== (k.value.civitai_api_key || ""), j = b.value !== D(k.value.comfyui_extra_args || []);
      return F || j;
    });
    async function G() {
      m.value = !0, d.value = null;
      try {
        y.value = await f(i.workspacePath || void 0), k.value = { ...y.value }, _.value = y.value.civitai_api_key || "", b.value = D(y.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        L.value = F === "true";
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        m.value = !1;
      }
    }
    async function C() {
      var F, j;
      v.value = null;
      try {
        const x = {};
        _.value !== (((F = k.value) == null ? void 0 : F.civitai_api_key) || "") && (x.civitai_api_key = _.value || null), b.value !== D(((j = k.value) == null ? void 0 : j.comfyui_extra_args) || []) && (x.comfyui_extra_args = $(b.value)), await u(x, i.workspacePath || void 0), await G(), v.value = { type: "success", message: "Settings saved successfully" }, p("saved"), setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (x) {
        const z = x instanceof Error ? x.message : "Failed to save settings";
        v.value = { type: "error", message: z }, p("error", z);
      }
    }
    function M() {
      k.value && (_.value = k.value.civitai_api_key || "", b.value = D(k.value.comfyui_extra_args || []), v.value = null);
    }
    function Q(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return c({
      saveSettings: C,
      resetSettings: M,
      hasChanges: I,
      loadSettings: G
    }), Fe(G), (F, j) => (s(), o("div", th, [
      m.value ? (s(), S(Et, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), S(Pt, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: G
      }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
        w(Oe, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var x, z;
            return [
              e("div", sh, [
                e("div", oh, [
                  j[3] || (j[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  j[4] || (j[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", nh, a(((x = y.value) == null ? void 0 : x.workspace_path) || "Loading..."), 1)
                ]),
                e("div", ah, [
                  j[5] || (j[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  j[6] || (j[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", lh, a(((z = y.value) == null ? void 0 : z.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        w(Oe, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", ih, [
              w(Cs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  w(ys, {
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
        w(Oe, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", rh, [
              w(Cs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  w(ys, {
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
        w(Oe, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", dh, [
              w(Cs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  w(eh, {
                    modelValue: L.value,
                    "onUpdate:modelValue": [
                      j[2] || (j[2] = (x) => L.value = x),
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
        v.value ? (s(), S(fs, {
          key: 0,
          variant: (v.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: It({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(v.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), uo = /* @__PURE__ */ le(ch, [["__scopeId", "data-v-9f44552d"]]), uh = /* @__PURE__ */ ne({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = h(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, p) => (s(), S(st, null, {
      header: l(() => [
        w(ot, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var f, u;
            return [
              w(te, {
                variant: "primary",
                size: "sm",
                disabled: !((f = c.value) != null && f.hasChanges),
                onClick: p[0] || (p[0] = (m) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: l(() => [...p[2] || (p[2] = [
                  g(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), S(te, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: p[1] || (p[1] = (m) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: l(() => [...p[3] || (p[3] = [
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
        w(uo, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), mh = { class: "base-tabs" }, vh = ["disabled", "onClick"], fh = {
  key: 0,
  class: "base-tabs__badge"
}, ph = /* @__PURE__ */ ne({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function p(f) {
      var u;
      (u = n.tabs.find((m) => m.id === f)) != null && u.disabled || i("update:modelValue", f);
    }
    return (f, u) => (s(), o("div", mh, [
      (s(!0), o(W, null, ae(t.tabs, (m) => (s(), o("button", {
        key: m.id,
        class: pe([
          "base-tabs__tab",
          {
            active: t.modelValue === m.id,
            disabled: m.disabled
          }
        ]),
        disabled: m.disabled,
        onClick: (d) => p(m.id)
      }, [
        g(a(m.label) + " ", 1),
        m.badge ? (s(), o("span", fh, a(m.badge), 1)) : r("", !0)
      ], 10, vh))), 128))
    ]));
  }
}), gh = /* @__PURE__ */ le(ph, [["__scopeId", "data-v-ad5e6cad"]]), hh = { class: "log-viewer-wrapper" }, yh = ["disabled", "title"], wh = /* @__PURE__ */ ne({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(t) {
    const c = t, n = h(null), i = h("idle"), p = B(() => c.logs.map((v) => ({
      text: c.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function f() {
      var y;
      await to();
      const v = (y = n.value) == null ? void 0 : y.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    Fe(f), vt(() => c.logs, f);
    async function u() {
      if (p.value.length === 0) return;
      const v = p.value.map((y) => y.text).join(`
`);
      try {
        await navigator.clipboard.writeText(v), i.value = "copied", setTimeout(() => {
          i.value = "idle";
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy logs:", y);
      }
    }
    function m(v) {
      (v.ctrlKey || v.metaKey) && v.key === "c" && v.stopPropagation();
    }
    function d(v) {
      v.stopPropagation();
    }
    return (v, y) => (s(), o("div", hh, [
      e("div", {
        ref_key: "logOutputElement",
        ref: n,
        class: "log-output",
        onKeydown: m,
        onCopy: d,
        tabindex: "0"
      }, [
        e("button", {
          class: "copy-overlay-btn",
          onClick: u,
          disabled: i.value !== "idle",
          title: i.value === "copied" ? "Copied!" : "Copy all logs"
        }, a(i.value === "copied" ? "Copied!" : "Copy"), 9, yh),
        (s(!0), o(W, null, ae(p.value, (k, _) => (s(), o("div", {
          key: _,
          class: pe(`log-line log-level-${k.level.toLowerCase()}`)
        }, a(k.text), 3))), 128))
      ], 544)
    ]));
  }
}), mo = /* @__PURE__ */ le(wh, [["__scopeId", "data-v-c0cc6d21"]]), kh = /* @__PURE__ */ ne({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const {
      getWorkspaceLogs: c,
      getWorkspaceLogPath: n,
      getOrchestratorLogs: i,
      getOrchestratorLogPath: p,
      openFile: f
    } = qe(), u = h("workspace"), m = h([]), d = h(!1), v = h(null), y = h(!1), k = h(null), _ = h(null), b = h(!1), L = B(() => u.value === "workspace" ? k.value : _.value);
    async function D() {
      d.value = !0, v.value = null;
      try {
        u.value === "workspace" ? m.value = await c(void 0, 500) : m.value = await i(void 0, 500);
      } catch (G) {
        v.value = G instanceof Error ? G.message : `Failed to load ${u.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [G, C] = await Promise.all([
          n(),
          p()
        ]);
        G.exists && (k.value = G.path), C.exists && (_.value = C.path);
      } catch {
      }
    }
    async function I() {
      if (L.value) {
        b.value = !0;
        try {
          await f(L.value);
        } catch (G) {
          console.error("Failed to open log file:", G);
        } finally {
          b.value = !1;
        }
      }
    }
    return vt(u, () => {
      D();
    }), Fe(() => {
      D(), $();
    }), (G, C) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (M) => y.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "secondary",
                size: "sm",
                onClick: I,
                disabled: !L.value || b.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(b.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(te, {
                variant: "secondary",
                size: "sm",
                onClick: D,
                disabled: d.value
              }, {
                default: l(() => [
                  g(a(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          w(gh, {
            modelValue: u.value,
            "onUpdate:modelValue": C[1] || (C[1] = (M) => u.value = M),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), S(Et, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : v.value ? (s(), S(Pt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            m.value.length === 0 ? (s(), S(wt, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (s(), S(mo, {
              key: 1,
              logs: m.value,
              "raw-format": u.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
        show: y.value,
        title: "About Logs",
        onClose: C[3] || (C[3] = (M) => y.value = !1)
      }, {
        content: l(() => [...C[4] || (C[4] = [
          e("p", null, [
            e("strong", null, "Workspace Logs:"),
            g(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Orchestrator Logs:"),
            g(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
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
          ], -1)
        ])]),
        actions: l(() => [
          w(te, {
            variant: "primary",
            onClick: C[2] || (C[2] = (M) => y.value = !1)
          }, {
            default: l(() => [...C[5] || (C[5] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bh = /* @__PURE__ */ ne({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: p } = qe(), f = h([]), u = h(!1), m = h(null), d = h(!1), v = h("production"), y = h(null), k = h(!1);
    async function _() {
      u.value = !0, m.value = null;
      try {
        f.value = await c(void 0, 500);
        try {
          const D = await n();
          v.value = D.environment || "production";
        } catch {
        }
      } catch (D) {
        m.value = D instanceof Error ? D.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    async function b() {
      try {
        const D = await i();
        D.exists && (y.value = D.path);
      } catch {
      }
    }
    async function L() {
      if (y.value) {
        k.value = !0;
        try {
          await p(y.value);
        } catch (D) {
          console.error("Failed to open log file:", D);
        } finally {
          k.value = !1;
        }
      }
    }
    return Fe(() => {
      _(), b();
    }), (D, $) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (I) => d.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "secondary",
                size: "sm",
                onClick: L,
                disabled: !y.value || k.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(k.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(te, {
                variant: "secondary",
                size: "sm",
                onClick: _,
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
          u.value ? (s(), S(Et, {
            key: 0,
            message: "Loading environment logs..."
          })) : m.value ? (s(), S(Pt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            f.value.length === 0 ? (s(), S(wt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), S(mo, {
              key: 1,
              logs: f.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (I) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            $[3] || ($[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            $[4] || ($[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          ], -1))
        ]),
        actions: l(() => [
          w(te, {
            variant: "primary",
            onClick: $[1] || ($[1] = (I) => d.value = !1)
          }, {
            default: l(() => [...$[6] || ($[6] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _h = { class: "env-title" }, $h = {
  key: 0,
  class: "current-badge"
}, Ch = {
  key: 0,
  class: "branch-info"
}, xh = /* @__PURE__ */ ne({
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
    return (c, n) => (s(), S(tt, {
      status: t.isCurrent ? "synced" : void 0
    }, Ft({
      icon: l(() => [
        g(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", _h, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", $h, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", Ch, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: l(() => [
        Pe(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          w(We, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          w(We, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          w(We, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), S(We, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Sh = /* @__PURE__ */ le(xh, [["__scopeId", "data-v-9231917a"]]), Ih = { class: "env-details" }, Eh = { class: "status-row" }, Ph = {
  key: 0,
  class: "detail-row"
}, Rh = { class: "value mono" }, Mh = {
  key: 1,
  class: "detail-row"
}, Th = { class: "value mono small" }, Dh = { class: "detail-row" }, Lh = { class: "value" }, zh = { class: "detail-row" }, Uh = { class: "value" }, Nh = { class: "detail-row" }, Oh = { class: "value" }, Bh = {
  key: 2,
  class: "section-divider"
}, Ah = {
  key: 3,
  class: "detail-row"
}, Fh = { class: "value" }, Vh = {
  key: 4,
  class: "detail-row"
}, Wh = { class: "value" }, Gh = { class: "footer-actions" }, jh = /* @__PURE__ */ ne({
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
        const f = new Date(p), m = (/* @__PURE__ */ new Date()).getTime() - f.getTime(), d = Math.floor(m / 6e4), v = Math.floor(m / 36e5), y = Math.floor(m / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : y < 30 ? `${y} ${y === 1 ? "day" : "days"} ago` : f.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, f) => (s(), S(nt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[2] || (f[2] = (u) => n("close"))
    }, {
      body: l(() => [
        e("div", Ih, [
          e("div", Eh, [
            f[3] || (f[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: pe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Ph, [
            f[4] || (f[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Rh, a(t.environment.current_branch), 1)
          ])) : r("", !0),
          t.environment.path ? (s(), o("div", Mh, [
            f[5] || (f[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Th, a(t.environment.path), 1)
          ])) : r("", !0),
          f[11] || (f[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Dh, [
            f[6] || (f[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Lh, a(t.environment.workflow_count), 1)
          ]),
          e("div", zh, [
            f[7] || (f[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Uh, a(t.environment.node_count), 1)
          ]),
          e("div", Nh, [
            f[8] || (f[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Oh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Bh)) : r("", !0),
          t.environment.created_at ? (s(), o("div", Ah, [
            f[9] || (f[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Fh, a(i(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", Vh, [
            f[10] || (f[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Wh, a(i(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", Gh, [
          t.canDelete ? (s(), S(ye, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[0] || (f[0] = (u) => n("delete", t.environment.name))
          }, {
            default: l(() => [...f[12] || (f[12] = [
              g(" Delete ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          f[14] || (f[14] = e("div", { class: "footer-spacer" }, null, -1)),
          w(ye, {
            variant: "secondary",
            size: "sm",
            onClick: f[1] || (f[1] = (u) => n("close"))
          }, {
            default: l(() => [...f[13] || (f[13] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Kh = /* @__PURE__ */ le(jh, [["__scopeId", "data-v-59855453"]]), vo = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], fo = "3.12", zs = [
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
], po = "auto", Hh = { class: "progress-bar" }, qh = /* @__PURE__ */ ne({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = B(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, p) => (s(), o("div", Hh, [
      e("div", {
        class: pe(["progress-fill", t.variant]),
        style: It({ width: n.value })
      }, null, 6)
    ]));
  }
}), Us = /* @__PURE__ */ le(qh, [["__scopeId", "data-v-1beb0512"]]), Yh = { class: "task-progress" }, Jh = { class: "progress-info" }, Xh = { class: "progress-percentage" }, Qh = { class: "progress-message" }, Zh = {
  key: 0,
  class: "progress-steps"
}, e1 = { class: "step-icon" }, t1 = { class: "step-label" }, s1 = /* @__PURE__ */ ne({
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
      const f = c.steps.find((u) => u.id === p);
      return f ? c.progress >= f.progressThreshold ? "completed" : c.currentPhase === p ? "active" : "pending" : "pending";
    }
    function i(p) {
      const f = n(p);
      return f === "completed" ? "✓" : f === "active" ? "⟳" : "○";
    }
    return (p, f) => (s(), o("div", Yh, [
      w(Us, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Jh, [
        e("span", Xh, a(t.progress) + "%", 1),
        e("span", Qh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Zh, [
        (s(!0), o(W, null, ae(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: pe(["step", n(u.id)])
        }, [
          e("span", e1, a(i(u.id)), 1),
          e("span", t1, a(u.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), ks = /* @__PURE__ */ le(s1, [["__scopeId", "data-v-9d1de66c"]]), o1 = {
  key: 0,
  class: "create-env-form"
}, n1 = { class: "form-field" }, a1 = { class: "form-field" }, l1 = ["value"], i1 = { class: "form-field" }, r1 = ["disabled"], d1 = ["value"], c1 = { class: "form-field" }, u1 = ["value"], m1 = { class: "form-field form-field--checkbox" }, v1 = { class: "form-checkbox" }, f1 = {
  key: 1,
  class: "create-env-progress"
}, p1 = { class: "creating-intro" }, g1 = {
  key: 0,
  class: "progress-warning"
}, h1 = {
  key: 1,
  class: "create-error"
}, y1 = { class: "error-message" }, w1 = {
  key: 1,
  class: "footer-status"
}, k1 = 10, b1 = /* @__PURE__ */ ne({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: p, getCreateProgress: f } = qe(), u = h(""), m = h(fo), d = h("latest"), v = h(po), y = h(!1), k = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = h(!1), b = h(!1), L = h({
      progress: 0,
      message: ""
    });
    let D = null, $ = 0;
    const I = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], G = h(null);
    function C() {
      b.value || n("close");
    }
    async function M() {
      const z = u.value.trim();
      if (z) {
        b.value = !0, L.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const A = {
            name: z,
            python_version: m.value,
            comfyui_version: d.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, de = await p(A);
          de.status === "started" ? Q() : de.status === "error" && (L.value = {
            progress: 0,
            message: de.message || "Failed to start creation",
            error: de.message
          });
        } catch (A) {
          L.value = {
            progress: 0,
            message: A instanceof Error ? A.message : "Unknown error",
            error: A instanceof Error ? A.message : "Unknown error"
          };
        }
      }
    }
    function Q() {
      D || ($ = 0, D = window.setInterval(async () => {
        try {
          const z = await f();
          $ = 0, L.value = {
            progress: z.progress ?? 0,
            message: z.message,
            phase: z.phase,
            error: z.error
          }, z.state === "complete" ? (F(), n("created", z.environment_name || u.value.trim(), y.value)) : z.state === "error" ? (F(), L.value.error = z.error || z.message) : z.state === "idle" && b.value && (F(), L.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= k1 && (F(), L.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      D && (clearInterval(D), D = null);
    }
    function j() {
      b.value = !1, L.value = { progress: 0, message: "" }, n("close");
    }
    async function x() {
      _.value = !0;
      try {
        k.value = await i();
      } catch (z) {
        console.error("Failed to load ComfyUI releases:", z);
      } finally {
        _.value = !1;
      }
    }
    return Fe(async () => {
      var z;
      await to(), (z = G.value) == null || z.focus(), x();
    }), Ms(() => {
      F();
    }), (z, A) => (s(), S(nt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !b.value,
      onClose: C
    }, {
      body: l(() => [
        b.value ? (s(), o("div", f1, [
          e("p", p1, [
            A[11] || (A[11] = g(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            A[12] || (A[12] = g("... ", -1))
          ]),
          w(ks, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: I
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? r("", !0) : (s(), o("p", g1, " This may take several minutes. Please wait... ")),
          L.value.error ? (s(), o("div", h1, [
            e("p", y1, a(L.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", o1, [
          e("div", n1, [
            A[6] || (A[6] = e("label", { class: "form-label" }, "Name", -1)),
            Le(e("input", {
              ref_key: "nameInput",
              ref: G,
              "onUpdate:modelValue": A[0] || (A[0] = (de) => u.value = de),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Ct(M, ["enter"])
            }, null, 544), [
              [At, u.value]
            ])
          ]),
          e("div", a1, [
            A[7] || (A[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Le(e("select", {
              "onUpdate:modelValue": A[1] || (A[1] = (de) => m.value = de),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ae(Ee(vo), (de) => (s(), o("option", {
                key: de,
                value: de
              }, a(de), 9, l1))), 128))
            ], 512), [
              [St, m.value]
            ])
          ]),
          e("div", i1, [
            A[8] || (A[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Le(e("select", {
              "onUpdate:modelValue": A[2] || (A[2] = (de) => d.value = de),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(W, null, ae(k.value, (de) => (s(), o("option", {
                key: de.tag_name,
                value: de.tag_name
              }, a(de.name), 9, d1))), 128))
            ], 8, r1), [
              [St, d.value]
            ])
          ]),
          e("div", c1, [
            A[9] || (A[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Le(e("select", {
              "onUpdate:modelValue": A[3] || (A[3] = (de) => v.value = de),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ae(Ee(zs), (de) => (s(), o("option", {
                key: de,
                value: de
              }, a(de) + a(de === "auto" ? " (detect GPU)" : ""), 9, u1))), 128))
            ], 512), [
              [St, v.value]
            ])
          ]),
          e("div", m1, [
            e("label", v1, [
              Le(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[4] || (A[4] = (de) => y.value = de)
              }, null, 512), [
                [hs, y.value]
              ]),
              A[10] || (A[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        b.value ? (s(), o(W, { key: 1 }, [
          L.value.error ? (s(), S(ye, {
            key: 0,
            variant: "secondary",
            onClick: j
          }, {
            default: l(() => [...A[15] || (A[15] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", w1, " Creating environment... "))
        ], 64)) : (s(), o(W, { key: 0 }, [
          w(ye, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: M
          }, {
            default: l(() => [...A[13] || (A[13] = [
              g(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(ye, {
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
}), _1 = /* @__PURE__ */ le(b1, [["__scopeId", "data-v-f37eaa42"]]), $1 = /* @__PURE__ */ ne({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: p } = qe(), f = h([]), u = h(!1), m = h(null), d = h(""), v = h(!1), y = h(!1), k = h(null), _ = B(() => {
      if (!d.value.trim()) return f.value;
      const G = d.value.toLowerCase();
      return f.value.filter(
        (C) => {
          var M;
          return C.name.toLowerCase().includes(G) || ((M = C.current_branch) == null ? void 0 : M.toLowerCase().includes(G));
        }
      );
    });
    function b(G, C) {
      y.value = !1, i("created", G, C);
    }
    function L() {
      y.value = !0;
    }
    function D(G) {
      k.value = G;
    }
    function $(G) {
      k.value = null, i("delete", G);
    }
    async function I() {
      u.value = !0, m.value = null;
      try {
        f.value = await p();
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Fe(I), c({
      loadEnvironments: I,
      openCreateModal: L
    }), (G, C) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (M) => v.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: L
              }, {
                default: l(() => [...C[6] || (C[6] = [
                  g(" Create ", -1)
                ])]),
                _: 1
              }),
              w(te, {
                variant: "secondary",
                size: "sm",
                onClick: I
              }, {
                default: l(() => [...C[7] || (C[7] = [
                  g(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          w(Yt, {
            modelValue: d.value,
            "onUpdate:modelValue": C[1] || (C[1] = (M) => d.value = M),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), S(Et, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), S(Pt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            _.value.length ? (s(), S(Oe, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(_.value, (M) => (s(), S(Sh, {
                  key: M.name,
                  "environment-name": M.name,
                  "is-current": M.is_current,
                  "current-branch": M.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    M.is_current ? r("", !0) : (s(), S(te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => G.$emit("switch", M.name)
                    }, {
                      default: l(() => [...C[8] || (C[8] = [
                        g(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Q) => D(M)
                    }, {
                      default: l(() => [...C[9] || (C[9] = [
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
            _.value.length ? r("", !0) : (s(), S(wt, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Ft({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  w(te, {
                    variant: "primary",
                    onClick: L
                  }, {
                    default: l(() => [...C[10] || (C[10] = [
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
      w(kt, {
        show: v.value,
        title: "About Environments",
        onClose: C[3] || (C[3] = (M) => v.value = !1)
      }, {
        content: l(() => [...C[11] || (C[11] = [
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
          w(te, {
            variant: "secondary",
            onClick: C[2] || (C[2] = (M) => v.value = !1)
          }, {
            default: l(() => [...C[12] || (C[12] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), S(Kh, {
        key: 0,
        environment: k.value,
        "can-delete": f.value.length > 1,
        onClose: C[4] || (C[4] = (M) => k.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      y.value ? (s(), S(_1, {
        key: 1,
        onClose: C[5] || (C[5] = (M) => y.value = !1),
        onCreated: b
      })) : r("", !0)
    ], 64));
  }
}), C1 = /* @__PURE__ */ le($1, [["__scopeId", "data-v-f95999f4"]]), x1 = { class: "file-path" }, S1 = { class: "file-path-text" }, I1 = ["title"], E1 = /* @__PURE__ */ ne({
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
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, f) => (s(), o("div", x1, [
      f[0] || (f[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", S1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, I1)) : r("", !0)
    ]));
  }
}), P1 = /* @__PURE__ */ le(E1, [["__scopeId", "data-v-f0982173"]]), R1 = { class: "export-blocked" }, M1 = { class: "issues-list" }, T1 = { class: "issue-message" }, D1 = {
  key: 0,
  class: "issue-details"
}, L1 = ["onClick"], z1 = { class: "issue-fix" }, U1 = /* @__PURE__ */ ne({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = bs({});
    function i(p) {
      const f = c.issues[p];
      return n[p] || f.details.length <= 3 ? f.details : f.details.slice(0, 3);
    }
    return (p, f) => (s(), S(nt, {
      title: "Cannot Export",
      size: "md",
      onClose: f[1] || (f[1] = (u) => p.$emit("close"))
    }, {
      body: l(() => [
        e("div", R1, [
          f[2] || (f[2] = e("div", { class: "error-header" }, [
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
            (s(!0), o(W, null, ae(t.issues, (u, m) => (s(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", T1, a(u.message), 1),
              u.details.length ? (s(), o("div", D1, [
                (s(!0), o(W, null, ae(i(m), (d, v) => (s(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                u.details.length > 3 && !n[m] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[m] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, L1)) : r("", !0)
              ])) : r("", !0),
              e("div", z1, [
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
        w(ye, {
          variant: "primary",
          onClick: f[0] || (f[0] = (u) => p.$emit("close"))
        }, {
          default: l(() => [...f[3] || (f[3] = [
            g(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), go = /* @__PURE__ */ le(U1, [["__scopeId", "data-v-b52f5e32"]]), N1 = { class: "export-warnings" }, O1 = {
  key: 0,
  class: "success-header"
}, B1 = { class: "warning-header" }, A1 = { class: "warning-summary" }, F1 = { class: "warning-title" }, V1 = { class: "models-section" }, W1 = { class: "models-list" }, G1 = { class: "model-info" }, j1 = { class: "model-filename" }, K1 = { class: "model-workflows" }, H1 = ["onClick"], q1 = /* @__PURE__ */ ne({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = h(!1), f = h(null), u = B(() => p.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      f.value = null, i("revalidate");
    }
    return (d, v) => (s(), o(W, null, [
      w(nt, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (y) => d.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", N1, [
            t.models.length === 0 ? (s(), o("div", O1, [...v[4] || (v[4] = [
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
              e("div", B1, [
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
                e("div", A1, [
                  e("h3", F1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", V1, [
                e("div", W1, [
                  (s(!0), o(W, null, ae(u.value, (y) => (s(), o("div", {
                    key: y.hash,
                    class: "model-item"
                  }, [
                    e("div", G1, [
                      e("div", j1, a(y.filename), 1),
                      e("div", K1, " Used by: " + a(y.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (k) => f.value = y.hash
                    }, " Add Source ", 8, H1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !p.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (y) => p.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          w(ye, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (y) => d.$emit("cancel"))
          }, {
            default: l(() => [...v[7] || (v[7] = [
              g(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          w(ye, {
            variant: "primary",
            onClick: v[2] || (v[2] = (y) => d.$emit("confirm"))
          }, {
            default: l(() => [
              g(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      f.value ? (s(), S(Ls, {
        key: 0,
        identifier: f.value,
        onClose: m
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), ho = /* @__PURE__ */ le(q1, [["__scopeId", "data-v-b698d882"]]), Y1 = { class: "export-card" }, J1 = { class: "export-path-row" }, X1 = { class: "export-actions" }, Q1 = {
  key: 1,
  class: "export-warning"
}, Z1 = /* @__PURE__ */ ne({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = qe(), i = h(""), p = h(!1), f = h(!1), u = h(!1), m = h(null), d = h(!1), v = h(null), y = h(!1), k = h(!1), _ = B(() => p.value ? "Validating..." : f.value ? "Exporting..." : "Export Environment");
    async function b() {
      p.value = !0, m.value = null;
      try {
        const C = await c();
        v.value = C, C.can_export ? C.warnings.models_without_sources.length > 0 ? k.value = !0 : await $() : y.value = !0;
      } catch (C) {
        m.value = {
          status: "error",
          message: C instanceof Error ? C.message : "Validation failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function L() {
      k.value = !1, await $();
    }
    async function D() {
      try {
        const C = await c();
        v.value = C;
      } catch (C) {
        console.error("Re-validation failed:", C);
      }
    }
    async function $() {
      f.value = !0;
      try {
        const C = await n(i.value || void 0);
        m.value = C;
      } catch (C) {
        m.value = {
          status: "error",
          message: C instanceof Error ? C.message : "Export failed"
        };
      } finally {
        f.value = !1;
      }
    }
    async function I() {
      var C;
      if ((C = m.value) != null && C.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (M) {
          console.error("Failed to copy path:", M);
        }
    }
    async function G() {
      var C;
      if ((C = m.value) != null && C.path) {
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
    return (C, M) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (Q) => d.value = !0)
          })
        ]),
        content: l(() => [
          w(Oe, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", Y1, [
                M[7] || (M[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", J1, [
                  w(ys, {
                    modelValue: i.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (Q) => i.value = Q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", X1, [
                  w(te, {
                    variant: "primary",
                    size: "md",
                    loading: p.value || f.value,
                    disabled: p.value || f.value,
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
          m.value ? (s(), S(Oe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              w(tt, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Ft({
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
                    w(We, { label: "Saved to:" }, {
                      default: l(() => [
                        w(P1, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), S(We, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", Q1, [...M[8] || (M[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: G
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: I
                    }, {
                      default: l(() => [...M[10] || (M[10] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    w(te, {
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
      w(kt, {
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
      y.value && v.value ? (s(), S(go, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: M[4] || (M[4] = (Q) => y.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      k.value && v.value ? (s(), S(ho, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: L,
        onCancel: M[5] || (M[5] = (Q) => k.value = !1),
        onRevalidate: D
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), ey = /* @__PURE__ */ le(Z1, [["__scopeId", "data-v-f4d120f2"]]), ty = { class: "file-input-wrapper" }, sy = ["accept", "multiple", "disabled"], oy = /* @__PURE__ */ ne({
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
    const i = n, p = h(null);
    function f() {
      var m;
      (m = p.value) == null || m.click();
    }
    function u(m) {
      const d = m.target;
      d.files && d.files.length > 0 && (i("change", d.files), d.value = "");
    }
    return c({
      triggerInput: f
    }), (m, d) => (s(), o("div", ty, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, sy),
      w(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: f
      }, {
        default: l(() => [
          Pe(m.$slots, "default", {}, () => [
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
}), ny = /* @__PURE__ */ le(oy, [["__scopeId", "data-v-cd192091"]]), ay = {
  key: 0,
  class: "drop-zone-empty"
}, ly = { class: "drop-zone-text" }, iy = { class: "drop-zone-primary" }, ry = { class: "drop-zone-secondary" }, dy = { class: "drop-zone-actions" }, cy = {
  key: 1,
  class: "drop-zone-file"
}, uy = { class: "file-info" }, my = { class: "file-details" }, vy = { class: "file-name" }, fy = { class: "file-size" }, py = /* @__PURE__ */ ne({
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
    const n = c, i = h(!1), p = h(null), f = h(0), u = B(() => p.value !== null), m = B(() => {
      var $;
      return (($ = p.value) == null ? void 0 : $.name) || "";
    }), d = B(() => {
      if (!p.value) return "";
      const $ = p.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v($) {
      var I;
      $.stopPropagation(), f.value++, (I = $.dataTransfer) != null && I.types.includes("Files") && (i.value = !0);
    }
    function y($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function k($) {
      $.stopPropagation(), f.value--, f.value === 0 && (i.value = !1);
    }
    function _($) {
      var G;
      $.stopPropagation(), f.value = 0, i.value = !1;
      const I = (G = $.dataTransfer) == null ? void 0 : G.files;
      I && I.length > 0 && L(I[0]);
    }
    function b($) {
      $.length > 0 && L($[0]);
    }
    function L($) {
      p.value = $, n("fileSelected", $);
    }
    function D() {
      p.value = null, n("clear");
    }
    return ($, I) => (s(), o("div", {
      class: pe(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Ae(v, ["prevent"]),
      onDragover: Ae(y, ["prevent"]),
      onDragleave: Ae(k, ["prevent"]),
      onDrop: Ae(_, ["prevent"])
    }, [
      u.value ? (s(), o("div", cy, [
        e("div", uy, [
          I[1] || (I[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", my, [
            e("div", vy, a(m.value), 1),
            e("div", fy, a(d.value), 1)
          ])
        ]),
        w(te, {
          variant: "ghost",
          size: "xs",
          onClick: D,
          title: "Remove file"
        }, {
          default: l(() => [...I[2] || (I[2] = [
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
      ])) : (s(), o("div", ay, [
        I[0] || (I[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", ly, [
          e("p", iy, a(t.primaryText), 1),
          e("p", ry, a(t.secondaryText), 1)
        ]),
        e("div", dy, [
          w(ny, {
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
}), gy = /* @__PURE__ */ le(py, [["__scopeId", "data-v-0f79cb86"]]), hy = { class: "import-preview" }, yy = { class: "preview-header" }, wy = {
  key: 0,
  class: "source-env"
}, ky = { class: "preview-content" }, by = { class: "preview-section" }, _y = { class: "section-header" }, $y = { class: "section-info" }, Cy = { class: "section-count" }, xy = {
  key: 0,
  class: "item-list"
}, Sy = { class: "item-name" }, Iy = {
  key: 0,
  class: "item-more"
}, Ey = { class: "preview-section" }, Py = { class: "section-header" }, Ry = { class: "section-info" }, My = { class: "section-count" }, Ty = {
  key: 0,
  class: "item-list"
}, Dy = { class: "item-details" }, Ly = { class: "item-name" }, zy = { class: "item-meta" }, Uy = {
  key: 0,
  class: "item-more"
}, Ny = { class: "preview-section" }, Oy = { class: "section-header" }, By = { class: "section-info" }, Ay = { class: "section-count" }, Fy = {
  key: 0,
  class: "item-list"
}, Vy = { class: "item-name" }, Wy = {
  key: 0,
  class: "item-more"
}, Gy = {
  key: 0,
  class: "preview-section"
}, jy = { class: "git-info" }, Ky = /* @__PURE__ */ ne({
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
    const c = t, n = B(() => c.workflows.length), i = B(() => c.models.length), p = B(() => c.nodes.length);
    function f(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, m) => (s(), o("div", hy, [
      e("div", yy, [
        w(mt, null, {
          default: l(() => [...m[0] || (m[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", wy, [
          m[1] || (m[1] = g(" From: ", -1)),
          w(Ss, null, {
            default: l(() => [
              g(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", ky, [
        e("div", by, [
          e("div", _y, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", $y, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Cy, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", xy, [
            (s(!0), o(W, null, ae(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Sy, a(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Iy, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Ey, [
          e("div", Py, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Ry, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", My, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Ty, [
            (s(!0), o(W, null, ae(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Dy, [
                e("span", Ly, a(d.filename), 1),
                e("span", zy, a(f(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Uy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Ny, [
          e("div", Oy, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", By, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Ay, a(p.value) + " node" + a(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Fy, [
            (s(!0), o(W, null, ae(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Vy, a(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Wy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Gy, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", jy, [
            t.gitBranch ? (s(), S(We, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                w(Ss, null, {
                  default: l(() => [
                    g(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), S(We, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                w(oo, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), Hy = /* @__PURE__ */ le(Ky, [["__scopeId", "data-v-182fe113"]]), qy = { class: "import-config" }, Yy = { class: "config-container" }, Jy = { class: "config-field" }, Xy = { class: "input-wrapper" }, Qy = ["value"], Zy = {
  key: 0,
  class: "validating-indicator"
}, e0 = {
  key: 1,
  class: "valid-indicator"
}, t0 = {
  key: 0,
  class: "field-error"
}, s0 = { class: "config-field" }, o0 = { class: "strategy-options" }, n0 = ["value", "checked", "onChange"], a0 = { class: "strategy-content" }, l0 = { class: "strategy-label" }, i0 = { class: "strategy-description" }, r0 = { class: "config-field switch-field" }, d0 = { class: "switch-label" }, c0 = ["checked"], u0 = { class: "advanced-section" }, m0 = { class: "advanced-content" }, v0 = { class: "config-field" }, f0 = ["value"], p0 = ["value"], g0 = /* @__PURE__ */ ne({
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
    const n = t, i = c, p = h(!1), f = h(!1);
    vt(() => n.nameError, (y) => {
      p.value = !1, f.value = !y && n.name.length > 0;
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
    function d(y) {
      const k = y.target.value;
      i("update:name", k), f.value = !1, m && clearTimeout(m), k.length > 0 ? (p.value = !0, m = setTimeout(() => {
        i("validate-name", k);
      }, 400)) : p.value = !1;
    }
    function v() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (y, k) => (s(), o("div", qy, [
      w(mt, null, {
        default: l(() => [...k[2] || (k[2] = [
          g("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Yy, [
        e("div", Jy, [
          w(ps, { required: "" }, {
            default: l(() => [...k[3] || (k[3] = [
              g("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Xy, [
            e("input", {
              type: "text",
              class: pe(["name-input", { error: t.nameError || t.name.length === 0, valid: f.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Qy),
            p.value ? (s(), o("span", Zy, "...")) : f.value ? (s(), o("span", e0, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", t0, a(t.nameError), 1)) : r("", !0),
          k[4] || (k[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", s0, [
          w(ps, null, {
            default: l(() => [...k[5] || (k[5] = [
              g("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", o0, [
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
              }, null, 40, n0),
              e("div", a0, [
                e("span", l0, a(_.label), 1),
                e("span", i0, a(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", r0, [
          e("label", d0, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: k[0] || (k[0] = (_) => i("update:switchAfterImport", _.target.checked))
            }, null, 40, c0),
            k[6] || (k[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", u0, [
          k[8] || (k[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", m0, [
            e("div", v0, [
              w(ps, null, {
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
                (s(!0), o(W, null, ae(Ee(zs), (_) => (s(), o("option", {
                  key: _,
                  value: _
                }, a(_) + a(_ === "auto" ? " (detect GPU)" : ""), 9, p0))), 128))
              ], 40, f0)
            ])
          ])
        ])
      ])
    ]));
  }
}), h0 = /* @__PURE__ */ le(g0, [["__scopeId", "data-v-89ea06a1"]]), y0 = { class: "import-flow" }, w0 = {
  key: 0,
  class: "import-empty"
}, k0 = { class: "git-import-section" }, b0 = { class: "git-url-input-row" }, _0 = ["disabled"], $0 = {
  key: 0,
  class: "git-error"
}, C0 = {
  key: 1,
  class: "import-configure"
}, x0 = { class: "selected-file-bar" }, S0 = {
  key: 0,
  class: "file-bar-content"
}, I0 = { class: "file-bar-info" }, E0 = { class: "file-bar-name" }, P0 = { class: "file-bar-size" }, R0 = {
  key: 1,
  class: "file-bar-content"
}, M0 = { class: "file-bar-info" }, T0 = { class: "file-bar-name" }, D0 = {
  key: 0,
  class: "preview-loading"
}, L0 = { class: "import-actions" }, z0 = {
  key: 2,
  class: "import-progress"
}, U0 = { class: "creating-intro" }, N0 = {
  key: 0,
  class: "progress-warning"
}, O0 = {
  key: 1,
  class: "import-error"
}, B0 = { class: "error-message" }, A0 = {
  key: 3,
  class: "import-complete"
}, F0 = { class: "complete-message" }, V0 = { class: "complete-title" }, W0 = { class: "complete-details" }, G0 = { class: "complete-actions" }, j0 = /* @__PURE__ */ ne({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var ze, me, he, Se;
    const i = t, p = n, { previewTarballImport: f, previewGitImport: u, validateEnvironmentName: m, executeImport: d, executeGitImport: v, getImportProgress: y } = qe();
    let k = null;
    const _ = h(null), b = h(i.resumeImport ?? !1), L = h(!1), D = h(!1), $ = h(""), I = h(!1), G = h(null), C = h(""), M = h(null), Q = h(!1), F = h(null), j = h(null), x = h({
      name: ((ze = i.initialProgress) == null ? void 0 : ze.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), z = h(null), A = h({
      message: ((me = i.initialProgress) == null ? void 0 : me.message) ?? "Preparing import...",
      phase: ((he = i.initialProgress) == null ? void 0 : he.phase) ?? "",
      progress: ((Se = i.initialProgress) == null ? void 0 : Se.progress) ?? 0,
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
    ], ee = B(() => {
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
    }), Y = B(() => !I.value && !G.value && j.value && x.value.name.length > 0 && !z.value && (_.value || M.value));
    async function re(Z) {
      _.value = Z, I.value = !0, G.value = null, j.value = null;
      try {
        const ie = await f(Z);
        j.value = ie;
      } catch (ie) {
        G.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        I.value = !1;
      }
    }
    function X() {
      _.value = null, M.value = null, C.value = "", F.value = null, L.value = !1, D.value = !1, $.value = "", j.value = null, G.value = null, x.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, z.value = null, p("source-cleared");
    }
    function O() {
      xe(), X(), b.value = !1, I.value = !1, Q.value = !1, A.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function N() {
      if (C.value.trim()) {
        Q.value = !0, F.value = null;
        try {
          const Z = await u(C.value.trim());
          M.value = C.value.trim(), j.value = Z;
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
        z.value = "Environment name is required";
        return;
      }
      try {
        const ie = await m(Z);
        z.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        z.value = "Failed to validate name";
      }
    }
    async function se() {
      if (x.value.name && !(!_.value && !M.value)) {
        b.value = !0, L.value = !1, A.value = { message: `Creating environment '${x.value.name}'...`, phase: "", progress: 0, error: null }, p("import-started");
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
            Z = await v(
              M.value,
              x.value.name,
              x.value.modelStrategy,
              x.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Z.status === "started" ? we() : (D.value = !1, $.value = Z.message, b.value = !1, L.value = !0);
        } catch (Z) {
          D.value = !1, $.value = Z instanceof Error ? Z.message : "Unknown error occurred during import", b.value = !1, L.value = !0;
        }
      }
    }
    async function we() {
      if (k) return;
      const Z = async () => {
        try {
          const ge = await y();
          return A.value = {
            message: ge.message,
            phase: ge.phase || "",
            progress: ge.progress ?? (ge.state === "importing" ? 50 : 0),
            error: ge.error || null
          }, ge.state === "complete" ? (xe(), D.value = !0, $.value = `Environment '${ge.environment_name}' created successfully`, b.value = !1, L.value = !0, ge.environment_name && p("import-complete", ge.environment_name, x.value.switchAfterImport), !1) : ge.state === "error" ? (xe(), D.value = !1, $.value = ge.error || ge.message, b.value = !1, L.value = !0, !1) : !0;
        } catch (ge) {
          return console.error("Failed to poll import progress:", ge), !0;
        }
      };
      await Z() && (k = setInterval(async () => {
        await Z() || xe();
      }, 2e3));
    }
    function xe() {
      k && (clearInterval(k), k = null);
    }
    function Re(Z) {
      return Z < 1024 ? `${Z} B` : Z < 1024 * 1024 ? `${(Z / 1024).toFixed(1)} KB` : Z < 1024 * 1024 * 1024 ? `${(Z / (1024 * 1024)).toFixed(1)} MB` : `${(Z / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Fe(async () => {
      try {
        const Z = await y();
        console.log("[ComfyGit ImportFlow] Import progress check:", Z.state, Z), Z.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Z.environment_name), b.value = !0, x.value.name = Z.environment_name || x.value.name || "", A.value = {
          progress: Z.progress ?? 0,
          message: Z.message || "Importing...",
          phase: Z.phase || "",
          error: null
        }, we());
      } catch (Z) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Z);
      }
    }), c({
      handleReset: O,
      isImporting: b,
      canImport: Y
    }), (Z, ie) => {
      var ge;
      return s(), o("div", y0, [
        !_.value && !M.value && !b.value ? (s(), o("div", w0, [
          w(gy, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: re
          }),
          ie[7] || (ie[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", k0, [
            ie[5] || (ie[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", b0, [
              Le(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (Ue) => C.value = Ue),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ct(N, ["enter"]),
                disabled: Q.value
              }, null, 40, _0), [
                [At, C.value]
              ]),
              w(te, {
                variant: "primary",
                size: "sm",
                disabled: !C.value.trim() || Q.value,
                onClick: N
              }, {
                default: l(() => [
                  g(a(Q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (s(), o("div", $0, a(F.value), 1)) : r("", !0),
            ie[6] || (ie[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || M.value) && !b.value && !L.value ? (s(), o("div", C0, [
          e("div", x0, [
            _.value ? (s(), o("div", S0, [
              ie[8] || (ie[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", I0, [
                e("div", E0, a(_.value.name), 1),
                e("div", P0, a(Re(_.value.size)), 1)
              ])
            ])) : M.value ? (s(), o("div", R0, [
              ie[10] || (ie[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", M0, [
                e("div", T0, a(E(M.value)), 1),
                ie[9] || (ie[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            w(te, {
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
          I.value ? (s(), o("div", D0, [...ie[12] || (ie[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : G.value ? (s(), S(gt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [G.value]
          }, null, 8, ["details"])) : j.value ? (s(), S(Hy, {
            key: 2,
            "source-environment": ee.value.sourceEnvironment,
            workflows: ee.value.workflows,
            models: ee.value.models,
            nodes: ee.value.nodes,
            "git-branch": ee.value.gitBranch,
            "git-commit": ee.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          j.value ? (s(), S(h0, {
            key: 3,
            name: x.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (Ue) => x.value.name = Ue),
            "model-strategy": x.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (Ue) => x.value.modelStrategy = Ue),
            "torch-backend": x.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (Ue) => x.value.torchBackend = Ue),
            "switch-after-import": x.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (Ue) => x.value.switchAfterImport = Ue),
            "name-error": z.value,
            onValidateName: ce
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          x.value.modelStrategy === "skip" && ((ge = j.value) != null && ge.models_needing_download) ? (s(), S(gt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", L0, [
            w(te, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: l(() => [...ie[13] || (ie[13] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(te, {
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
        ])) : b.value ? (s(), o("div", z0, [
          e("p", U0, [
            ie[15] || (ie[15] = g(" Importing environment ", -1)),
            e("strong", null, a(x.value.name), 1),
            ie[16] || (ie[16] = g("... ", -1))
          ]),
          w(ks, {
            progress: A.value.progress,
            message: A.value.message,
            "current-phase": A.value.phase,
            variant: A.value.error ? "error" : "default",
            "show-steps": !0,
            steps: de
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          A.value.error ? r("", !0) : (s(), o("p", N0, " This may take several minutes. Please wait... ")),
          A.value.error ? (s(), o("div", O0, [
            e("p", B0, a(A.value.error), 1)
          ])) : r("", !0)
        ])) : L.value ? (s(), o("div", A0, [
          e("div", {
            class: pe(["complete-icon", D.value ? "success" : "error"])
          }, a(D.value ? "✓" : "✕"), 3),
          e("div", F0, [
            e("div", V0, a(D.value ? "Import Successful" : "Import Failed"), 1),
            e("div", W0, a($.value), 1)
          ]),
          e("div", G0, [
            w(te, {
              variant: "primary",
              size: "md",
              onClick: O
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
}), yo = /* @__PURE__ */ le(j0, [["__scopeId", "data-v-72cbc04e"]]), K0 = /* @__PURE__ */ ne({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = h(!1);
    function p(f, u) {
      u && n("import-complete-switch", f);
    }
    return (f, u) => (s(), o(W, null, [
      w(st, null, {
        header: l(() => [
          w(ot, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (m) => i.value = !0)
          })
        ]),
        content: l(() => [
          w(yo, { onImportComplete: p })
        ]),
        _: 1
      }),
      w(kt, {
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
}), H0 = /* @__PURE__ */ le(K0, [["__scopeId", "data-v-e13bfe76"]]), q0 = { class: "remote-header" }, Y0 = { class: "remote-info" }, J0 = { class: "remote-icon" }, X0 = { class: "remote-name" }, Q0 = {
  key: 0,
  class: "default-badge"
}, Z0 = {
  key: 1,
  class: "sync-badge"
}, ew = {
  key: 0,
  class: "ahead"
}, tw = {
  key: 1,
  class: "behind"
}, sw = {
  key: 1,
  class: "synced"
}, ow = ["href"], nw = {
  key: 1,
  class: "remote-url-text"
}, aw = { class: "remote-actions" }, lw = /* @__PURE__ */ ne({
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
    const c = t, n = B(() => c.remote.is_default), i = B(() => {
      const f = c.remote.fetch_url, u = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return u ? `https://${u[1]}/${u[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), p = B(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, u) => (s(), o("div", {
      class: pe(["deploy-remote-card", { selected: t.isSelected }])
    }, [
      e("div", q0, [
        e("div", Y0, [
          e("span", J0, a(n.value ? "🔗" : "🌐"), 1),
          e("span", X0, a(t.remote.name), 1),
          n.value ? (s(), o("span", Q0, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", Z0, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", ew, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", tw, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", sw, "✓ synced"))
          ])) : r("", !0)
        ]),
        i.value ? (s(), o("a", {
          key: 0,
          href: i.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: u[0] || (u[0] = Ae(() => {
          }, ["stop"]))
        }, a(p.value), 9, ow)) : (s(), o("span", nw, a(p.value), 1))
      ]),
      e("div", aw, [
        w(te, {
          variant: "secondary",
          size: "xs",
          loading: t.isFetching,
          onClick: u[1] || (u[1] = (m) => f.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...u[4] || (u[4] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        t.syncStatus && t.syncStatus.ahead > 0 ? (s(), S(te, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: t.isPushing,
          onClick: u[2] || (u[2] = (m) => f.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push ↑" + a(t.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : r("", !0),
        w(te, {
          variant: t.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: u[3] || (u[3] = (m) => f.$emit("select", t.remote.name))
        }, {
          default: l(() => [
            g(a(t.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), iw = /* @__PURE__ */ le(lw, [["__scopeId", "data-v-d687d161"]]), rw = { class: "api-key-card" }, dw = { class: "api-key-row" }, cw = { class: "api-key-input-wrapper" }, uw = ["type", "disabled"], mw = ["title"], vw = { class: "status-icon" }, fw = { class: "status-text" }, pw = {
  key: 0,
  class: "credit-balance"
}, gw = { class: "config-card" }, hw = { class: "config-row" }, yw = ["disabled"], ww = {
  key: 0,
  value: ""
}, kw = {
  key: 1,
  value: "",
  disabled: ""
}, bw = ["value", "disabled"], _w = { class: "config-row" }, $w = {
  key: 0,
  class: "loading-inline"
}, Cw = { class: "no-volumes-state" }, xw = { class: "no-volumes-text" }, Sw = ["value"], Iw = { class: "config-row" }, Ew = ["disabled"], Pw = {
  key: 0,
  value: ""
}, Rw = {
  key: 1,
  value: ""
}, Mw = {
  key: 2,
  value: ""
}, Tw = ["value"], Dw = { class: "config-row" }, Lw = { class: "radio-group" }, zw = { class: "radio-option" }, Uw = { class: "radio-label" }, Nw = { class: "radio-option" }, Ow = { class: "radio-label" }, Bw = { class: "config-row" }, Aw = { class: "radio-group" }, Fw = { class: "radio-option" }, Vw = { class: "radio-label" }, Ww = { class: "radio-option" }, Gw = { class: "radio-label" }, jw = { class: "config-row" }, Kw = {
  key: 0,
  class: "loading-text"
}, Hw = {
  key: 1,
  class: "empty-remotes"
}, qw = { class: "remotes-list" }, Yw = {
  key: 0,
  class: "sync-warning"
}, Jw = { class: "warning-content" }, Xw = { class: "remotes-footer" }, Qw = { class: "summary-card" }, Zw = {
  key: 0,
  class: "loading-text"
}, ek = { class: "summary-row" }, tk = { class: "summary-value" }, sk = { class: "summary-row" }, ok = { class: "summary-value" }, nk = { class: "summary-row" }, ak = { class: "summary-value" }, lk = {
  key: 0,
  class: "summary-sub-row"
}, ik = { class: "summary-sub-label" }, rk = {
  key: 1,
  class: "summary-sub-row warning"
}, dk = { class: "summary-sub-label" }, ck = { class: "summary-row" }, uk = { class: "summary-value" }, mk = { class: "summary-row" }, vk = { class: "summary-value" }, fk = { class: "deployment-summary" }, pk = { class: "summary-columns" }, gk = { class: "summary-column" }, hk = { class: "pricing-row" }, yk = { class: "pricing-value" }, wk = { class: "pricing-row" }, kk = { class: "pricing-value" }, bk = { class: "pricing-row" }, _k = { class: "pricing-value" }, $k = { class: "pricing-row total" }, Ck = { class: "pricing-value" }, xk = { class: "summary-column" }, Sk = { class: "spec-row" }, Ik = { class: "spec-row" }, Ek = {
  key: 0,
  class: "spec-row"
}, Pk = {
  key: 1,
  class: "spec-row spot-warning"
}, Rk = {
  key: 4,
  class: "deploy-actions"
}, Mk = { class: "pods-header" }, Tk = {
  key: 0,
  class: "loading-text"
}, Dk = {
  key: 1,
  class: "empty-state"
}, Lk = {
  key: 2,
  class: "pods-list"
}, zk = { class: "pod-header" }, Uk = { class: "pod-name" }, Nk = { class: "pod-details" }, Ok = { class: "pod-gpu" }, Bk = { class: "pod-uptime" }, Ak = { class: "pod-cost" }, Fk = { class: "pod-actions" }, Vk = { class: "progress-content" }, Wk = { class: "phase-indicator" }, Gk = { key: 0 }, jk = { key: 1 }, Kk = { key: 2 }, Hk = {
  key: 3,
  class: "spinner"
}, qk = { class: "phase-text" }, Yk = { class: "phase-name" }, Jk = { class: "phase-detail" }, Xk = {
  key: 0,
  class: "ready-actions"
}, Qk = { class: "console-link" }, Zk = ["href"], eb = /* @__PURE__ */ ne({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(t, { emit: c }) {
    const n = c, {
      getDeploySummary: i,
      getDataCenters: p,
      testRunPodConnection: f,
      getNetworkVolumes: u,
      getRunPodGpuTypes: m,
      deployToRunPod: d,
      getRunPodPods: v,
      terminateRunPodPod: y,
      stopRunPodPod: k,
      startRunPodPod: _,
      getDeploymentStatus: b,
      getStoredRunPodKey: L,
      clearRunPodKey: D,
      validateDeploy: $,
      getRemotes: I,
      getRemoteSyncStatus: G,
      fetchRemote: C,
      pushToRemote: M
    } = qe(), Q = h(!1), F = h(!1), j = h(""), x = h(!1), z = h(!1), A = h(null), de = h(null), ee = h(""), Y = h(""), re = h(""), X = h("SECURE"), O = h("ON_DEMAND"), N = h("my-comfyui-deploy"), E = h([]), ce = h({}), se = h(!1), we = h(null), xe = h(null), Re = h(null), ze = h([]), me = h(!1), he = h([]), Se = h(!1), Z = h([]), ie = h(!1), ge = h(null), Ue = h(!1), Ye = h([]), et = h(!1), Ie = h(!1), Be = h(null), Je = h(null), He = h(null), lt = h(null), be = h(!1), Ge = h(null), Me = h(null), Qe = h(null), De = h(!1), fe = h(null), H = h(!1), q = h(!1), P = B(() => he.value.find((J) => J.id === Y.value) || null), V = B(() => ee.value ? he.value.filter((J) => J.data_center_id === ee.value) : he.value), oe = B(() => Z.value.filter((J) => J.available)), ke = B(() => we.value && ce.value[we.value] || null), Ve = B(() => {
      if (!we.value) return null;
      const J = E.value.find((U) => U.name === we.value);
      return (J == null ? void 0 : J.fetch_url) || null;
    }), ft = B(() => x.value && Y.value && re.value && Ve.value && !Ie.value && !De.value), Ze = (J) => {
      const U = Z.value.find((Ke) => Ke.id === re.value);
      if (!U) return "0.00";
      if (J === "SECURE") return (U.securePrice ?? 0).toFixed(2);
      if (J === "COMMUNITY") return (U.communityPrice ?? 0).toFixed(2);
      const Ce = X.value === "SECURE";
      return J === "ON_DEMAND" ? Ce ? (U.securePrice ?? 0).toFixed(2) : (U.communityPrice ?? 0).toFixed(2) : Ce ? (U.secureSpotPrice ?? 0).toFixed(2) : (U.communitySpotPrice ?? 0).toFixed(2);
    }, rt = B(() => {
      const J = Z.value.find((Ot) => Ot.id === re.value), U = he.value.find((Ot) => Ot.id === Y.value);
      if (!J) return null;
      const Ce = X.value === "SECURE", Ke = O.value === "SPOT";
      let bt;
      Ke ? bt = Ce ? J.secureSpotPrice ?? 0 : J.communitySpotPrice ?? 0 : bt = Ce ? J.securePrice ?? 0 : J.communityPrice ?? 0;
      const Mt = U ? U.size_gb * 14e-5 : 0, _e = 4e-3;
      return {
        gpu: bt,
        volume: Mt,
        container: _e,
        total: bt + Mt + _e
      };
    });
    async function dt() {
      console.log("[Deploy] Loading deploy data..."), await es(), console.log("[Deploy] Volumes loaded, region:", ee.value, "GPUs:", Z.value.length), await Promise.all([Vt(), pt(), Rt()]);
    }
    async function Rt() {
      se.value = !0;
      try {
        const J = await I();
        E.value = J.remotes, await Promise.all(
          J.remotes.map(async (Ce) => {
            const Ke = await G(Ce.name);
            Ke && (ce.value[Ce.name] = Ke);
          })
        );
        const U = J.remotes.find((Ce) => Ce.is_default);
        U ? we.value = U.name : J.remotes.length > 0 && (we.value = J.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        se.value = !1;
      }
    }
    async function Jt(J) {
      xe.value = J;
      try {
        await C(J);
        const U = await G(J);
        U && (ce.value[J] = U), n("toast", `Fetched from ${J}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        xe.value = null;
      }
    }
    async function ct(J) {
      Re.value = J;
      try {
        await M(J, { force: !1 });
        const U = await G(J);
        U && (ce.value[J] = U), n("toast", `Pushed to ${J}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        Re.value = null;
      }
    }
    function Xt(J) {
      we.value = J;
    }
    async function Lt() {
      if (j.value) {
        z.value = !0, A.value = null;
        try {
          const J = await f(j.value, !0);
          J.status === "success" ? (x.value = !0, de.value = J.credit_balance ?? null, A.value = { type: "success", message: J.message }, await dt()) : A.value = { type: "error", message: J.message };
        } catch (J) {
          A.value = {
            type: "error",
            message: J instanceof Error ? J.message : "Connection test failed"
          };
        } finally {
          z.value = !1;
        }
      }
    }
    async function Qt() {
      try {
        await D(), j.value = "", x.value = !1, A.value = null, de.value = null, ze.value = [], ee.value = "", he.value = [], Y.value = "", Z.value = [], re.value = "", ge.value = null, Ye.value = [], n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function Zt() {
      me.value = !0;
      try {
        const J = await p();
        ze.value = J.data_centers;
      } catch {
        n("toast", "Failed to load data centers", "error");
      } finally {
        me.value = !1;
      }
    }
    async function es() {
      Se.value = !0, me.value = !0;
      try {
        const J = await u();
        he.value = J.volumes, console.log("[Deploy] Network volumes:", J.volumes.map((Ce) => ({ id: Ce.id, name: Ce.name, dc: Ce.data_center_id })));
        const U = /* @__PURE__ */ new Map();
        for (const Ce of J.volumes)
          Ce.data_center_id && !U.has(Ce.data_center_id) && U.set(Ce.data_center_id, {
            id: Ce.data_center_id,
            name: Ce.data_center_name || Ce.data_center_id,
            available: !0
          });
        if (J.volumes.length === 0 ? (console.log("[Deploy] No volumes found, loading data centers directly..."), await Zt()) : ze.value = Array.from(U.values()), console.log("[Deploy] Data centers:", ze.value), he.value.length > 0) {
          const Ce = he.value[0];
          Y.value = Ce.id, console.log("[Deploy] Auto-selected volume:", Ce.name, "data_center_id:", Ce.data_center_id), Ce.data_center_id ? (ee.value = Ce.data_center_id, console.log("[Deploy] Set region to:", ee.value), await zt(Ce.data_center_id)) : console.warn("[Deploy] Volume has no data_center_id!");
        } else ze.value.length > 0 && (ee.value = ze.value[0].id, console.log("[Deploy] No volumes, auto-selected region:", ee.value));
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        Se.value = !1, me.value = !1;
      }
    }
    async function zt(J) {
      console.log("[Deploy] loadGpuTypes called with dataCenterId:", J), ie.value = !0;
      try {
        const U = await m(J);
        Z.value = U.gpu_types, console.log(
          "[Deploy] GPU types loaded:",
          U.gpu_types.length,
          "GPUs,",
          U.gpu_types.filter((Ke) => Ke.available).length,
          "available"
        );
        const Ce = Z.value.find((Ke) => Ke.available);
        Ce ? (re.value = Ce.id, console.log("[Deploy] Auto-selected GPU:", Ce.displayName)) : (re.value = "", console.log("[Deploy] No available GPUs in this region"));
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        ie.value = !1;
      }
    }
    vt(ee, async (J) => {
      if (console.log("[Deploy] Region watcher fired:", J, "(loading volumes:", Se.value, ")"), !J) return;
      if (Se.value) {
        console.log("[Deploy] Skipping GPU load - volumes still loading");
        return;
      }
      const U = he.value.find((Ce) => Ce.id === Y.value);
      U && U.data_center_id !== J && (Y.value = ""), await zt(J);
    }), vt(Y, async (J) => {
      if (console.log("[Deploy] Volume watcher fired:", J, "(loading volumes:", Se.value, ")"), !J) {
        Z.value = [], re.value = "";
        return;
      }
      if (Se.value) {
        console.log("[Deploy] Skipping - volumes still loading");
        return;
      }
      const U = he.value.find((Ce) => Ce.id === J);
      U && U.data_center_id !== ee.value ? ee.value = U.data_center_id : U && await zt(U.data_center_id);
    });
    async function Vt() {
      Ue.value = !0;
      try {
        ge.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        Ue.value = !1;
      }
    }
    async function pt() {
      et.value = !0;
      try {
        const J = await v();
        Ye.value = J.pods;
      } catch {
        n("toast", "Failed to load pods", "error");
      } finally {
        et.value = !1;
      }
    }
    async function ts() {
      if (!(!re.value || !Y.value)) {
        De.value = !0, Be.value = null;
        try {
          const J = await $();
          fe.value = J, J.can_export ? J.warnings.models_without_sources.length > 0 ? q.value = !0 : await Wt() : H.value = !0;
        } catch (J) {
          Be.value = {
            status: "error",
            message: J instanceof Error ? J.message : "Validation failed"
          }, n("toast", "Validation failed", "error");
        } finally {
          De.value = !1;
        }
      }
    }
    async function ss() {
      q.value = !1, await Wt();
    }
    async function os() {
      try {
        const J = await $();
        fe.value = J;
      } catch (J) {
        console.error("Re-validation failed:", J);
      }
    }
    async function Wt() {
      Ie.value = !0;
      try {
        let J;
        if (O.value === "SPOT") {
          const Ce = Z.value.find((Ke) => Ke.id === re.value);
          Ce && (J = X.value === "SECURE" ? Ce.secureSpotPrice : Ce.communitySpotPrice);
        }
        const U = await d({
          gpu_type_id: re.value,
          pod_name: N.value || "my-comfyui-deploy",
          network_volume_id: Y.value,
          cloud_type: X.value,
          pricing_type: O.value,
          spot_bid: J,
          import_source: Ve.value
        });
        Be.value = U, U.status === "success" && U.pod_id ? (Ge.value = U.pod_id, be.value = !0, ns(U.pod_id), await pt()) : n("toast", U.message, "error");
      } catch (J) {
        Be.value = {
          status: "error",
          message: J instanceof Error ? J.message : "Deployment failed"
        }, n("toast", "Deployment failed", "error");
      } finally {
        Ie.value = !1;
      }
    }
    function ns(J) {
      Gt(J), Qe.value = window.setInterval(() => Gt(J), 3e3);
    }
    function Ut() {
      Qe.value && (clearInterval(Qe.value), Qe.value = null);
    }
    async function Gt(J) {
      try {
        const U = await b(J);
        Me.value = U, (U.phase === "READY" || U.phase === "ERROR" || U.phase === "STOPPED") && (Ut(), U.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), await pt());
      } catch (U) {
        console.error("Failed to poll deployment status:", U);
      }
    }
    function K() {
      be.value = !1, Ut(), Ge.value = null, Me.value = null;
    }
    function T() {
      var J;
      (J = Me.value) != null && J.comfyui_url && window.open(Me.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function R(J) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[J || ""] || "Initializing...";
    }
    function ue(J) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[J || ""] ?? 10;
    }
    async function $e(J) {
      Je.value = J;
      try {
        const U = await y(J);
        U.status === "success" ? (n("toast", "Pod terminated", "success"), await pt()) : n("toast", U.message, "error");
      } catch {
        n("toast", "Failed to terminate pod", "error");
      } finally {
        Je.value = null;
      }
    }
    async function Ne(J) {
      He.value = J;
      try {
        const U = await k(J);
        U.status === "success" ? (n("toast", "Pod stopped", "success"), await pt()) : n("toast", U.message, "error");
      } catch {
        n("toast", "Failed to stop pod", "error");
      } finally {
        He.value = null;
      }
    }
    async function je(J) {
      lt.value = J;
      try {
        const U = await _(J);
        U.status === "success" ? (n("toast", "Pod starting...", "success"), await pt()) : n("toast", U.message, "error");
      } catch {
        n("toast", "Failed to start pod", "error");
      } finally {
        lt.value = null;
      }
    }
    function at(J) {
      window.open(J, "_blank", "noopener,noreferrer");
    }
    function Nt(J) {
      const U = J ?? 0, Ce = Math.floor(U / 3600), Ke = Math.floor(U % 3600 / 60);
      return Ce > 0 ? `${Ce}h ${Ke}m` : `${Ke}m`;
    }
    return Fe(async () => {
      try {
        const J = await L(!0);
        J.has_key && J.key_preview && (j.value = `****${J.key_preview}`, J.valid ? (x.value = !0, de.value = J.credit_balance ?? null, A.value = { type: "success", message: "Connected to RunPod" }, await dt()) : J.error && (A.value = { type: "error", message: J.error }));
      } catch {
      }
    }), Ms(() => {
      Ut();
    }), (J, U) => {
      var Ce, Ke, bt, Mt, _e, Ot;
      return s(), o(W, null, [
        w(st, null, {
          header: l(() => [
            w(ot, {
              title: "DEPLOY TO CLOUD",
              "show-info": !0,
              onInfoClick: U[0] || (U[0] = (ve) => Q.value = !0)
            })
          ]),
          content: l(() => [
            w(Oe, { title: "RUNPOD API KEY" }, {
              default: l(() => [
                e("div", rw, [
                  e("div", dw, [
                    e("div", cw, [
                      Le(e("input", {
                        "onUpdate:modelValue": U[1] || (U[1] = (ve) => j.value = ve),
                        type: F.value ? "text" : "password",
                        class: "api-key-input",
                        placeholder: "Enter your RunPod API key (rp_...)",
                        disabled: x.value
                      }, null, 8, uw), [
                        [Po, j.value]
                      ]),
                      e("button", {
                        class: "toggle-visibility-btn",
                        onClick: U[2] || (U[2] = (ve) => F.value = !F.value),
                        title: F.value ? "Hide key" : "Show key"
                      }, a(F.value ? "👁" : "👁‍🗨"), 9, mw)
                    ]),
                    x.value ? r("", !0) : (s(), S(te, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      loading: z.value,
                      disabled: !j.value || z.value,
                      onClick: Lt
                    }, {
                      default: l(() => [...U[18] || (U[18] = [
                        g(" Test ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "disabled"])),
                    x.value ? (s(), S(te, {
                      key: 1,
                      variant: "ghost",
                      size: "sm",
                      onClick: Qt
                    }, {
                      default: l(() => [...U[19] || (U[19] = [
                        g(" Clear ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ]),
                  A.value ? (s(), o("div", {
                    key: 0,
                    class: pe(["connection-status", A.value.type])
                  }, [
                    e("span", vw, a(A.value.type === "success" ? "✓" : "✕"), 1),
                    e("span", fw, a(A.value.message), 1),
                    de.value !== null ? (s(), o("span", pw, " $" + a(de.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                  ], 2)) : r("", !0),
                  U[20] || (U[20] = e("div", { class: "api-key-help" }, [
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
            x.value ? (s(), S(Oe, {
              key: 0,
              title: "CONFIGURATION"
            }, {
              default: l(() => [
                e("div", gw, [
                  e("div", hw, [
                    U[21] || (U[21] = e("label", { class: "config-label" }, "Region", -1)),
                    Le(e("select", {
                      "onUpdate:modelValue": U[3] || (U[3] = (ve) => ee.value = ve),
                      class: "config-select",
                      disabled: me.value
                    }, [
                      me.value ? (s(), o("option", ww, "Loading...")) : ee.value ? r("", !0) : (s(), o("option", kw, "Select a region")),
                      (s(!0), o(W, null, ae(ze.value, (ve) => (s(), o("option", {
                        key: ve.id,
                        value: ve.id,
                        disabled: !ve.available
                      }, a(ve.id) + " (" + a(ve.name) + ")" + a(ve.available ? "" : " [Unavailable]"), 9, bw))), 128))
                    ], 8, yw), [
                      [St, ee.value]
                    ])
                  ]),
                  e("div", _w, [
                    U[26] || (U[26] = e("label", { class: "config-label" }, "Network Volume", -1)),
                    Se.value ? (s(), o("div", $w, "Loading volumes...")) : V.value.length === 0 ? (s(), o(W, { key: 1 }, [
                      e("div", Cw, [
                        U[22] || (U[22] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                        e("span", xw, "No volumes in " + a(ee.value || "this region"), 1)
                      ]),
                      U[23] || (U[23] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                      U[24] || (U[24] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-link"
                      }, " Create Volume on RunPod → ", -1))
                    ], 64)) : (s(), o(W, { key: 2 }, [
                      Le(e("select", {
                        "onUpdate:modelValue": U[4] || (U[4] = (ve) => Y.value = ve),
                        class: "config-select"
                      }, [
                        (s(!0), o(W, null, ae(V.value, (ve) => (s(), o("option", {
                          key: ve.id,
                          value: ve.id
                        }, a(ve.name) + " (" + a(ve.size_gb) + "GB) ", 9, Sw))), 128))
                      ], 512), [
                        [St, Y.value]
                      ]),
                      U[25] || (U[25] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-inline-link"
                      }, " + Create new volume ", -1))
                    ], 64))
                  ]),
                  e("div", Iw, [
                    U[27] || (U[27] = e("label", { class: "config-label" }, "GPU Type", -1)),
                    Le(e("select", {
                      "onUpdate:modelValue": U[5] || (U[5] = (ve) => re.value = ve),
                      class: "config-select",
                      disabled: ie.value || !Y.value
                    }, [
                      Y.value ? ie.value ? (s(), o("option", Rw, "Loading GPUs...")) : oe.value.length === 0 ? (s(), o("option", Mw, "No GPUs available in this region")) : r("", !0) : (s(), o("option", Pw, "Select a volume first")),
                      (s(!0), o(W, null, ae(oe.value, (ve) => (s(), o("option", {
                        key: ve.id,
                        value: ve.id
                      }, a(ve.displayName) + " (" + a(ve.memoryInGb) + "GB) - $" + a(X.value === "SECURE" ? (ve.securePrice ?? 0).toFixed(2) : (ve.communityPrice ?? 0).toFixed(2)) + "/hr " + a(ve.stockStatus ? `[${ve.stockStatus}]` : ""), 9, Tw))), 128))
                    ], 8, Ew), [
                      [St, re.value]
                    ])
                  ]),
                  e("div", Dw, [
                    U[28] || (U[28] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                    e("div", Lw, [
                      e("label", zw, [
                        Le(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": U[6] || (U[6] = (ve) => X.value = ve),
                          value: "SECURE"
                        }, null, 512), [
                          [Dt, X.value]
                        ]),
                        e("span", Uw, "Secure ($" + a(Ze("SECURE")) + "/hr)", 1)
                      ]),
                      e("label", Nw, [
                        Le(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": U[7] || (U[7] = (ve) => X.value = ve),
                          value: "COMMUNITY"
                        }, null, 512), [
                          [Dt, X.value]
                        ]),
                        e("span", Ow, "Community ($" + a(Ze("COMMUNITY")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", Bw, [
                    U[29] || (U[29] = e("label", { class: "config-label" }, [
                      g(" Pricing "),
                      e("span", {
                        class: "info-tooltip",
                        title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed. Good for experimentation."
                      }, "ⓘ")
                    ], -1)),
                    e("div", Aw, [
                      e("label", Fw, [
                        Le(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": U[8] || (U[8] = (ve) => O.value = ve),
                          value: "ON_DEMAND"
                        }, null, 512), [
                          [Dt, O.value]
                        ]),
                        e("span", Vw, "On-Demand ($" + a(Ze("ON_DEMAND")) + "/hr)", 1)
                      ]),
                      e("label", Ww, [
                        Le(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": U[9] || (U[9] = (ve) => O.value = ve),
                          value: "SPOT"
                        }, null, 512), [
                          [Dt, O.value]
                        ]),
                        e("span", Gw, "Spot ($" + a(Ze("SPOT")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", jw, [
                    U[30] || (U[30] = e("label", { class: "config-label" }, "Pod Name", -1)),
                    Le(e("input", {
                      "onUpdate:modelValue": U[10] || (U[10] = (ve) => N.value = ve),
                      type: "text",
                      class: "config-input",
                      placeholder: "my-comfyui-deploy"
                    }, null, 512), [
                      [At, N.value]
                    ])
                  ])
                ])
              ]),
              _: 1
            })) : r("", !0),
            x.value ? (s(), S(Oe, {
              key: 1,
              title: "DEPLOY SOURCE"
            }, {
              default: l(() => [
                se.value ? (s(), o("div", Kw, " Loading remotes... ")) : E.value.length === 0 ? (s(), o("div", Hw, [
                  U[32] || (U[32] = e("div", { class: "empty-message" }, [
                    e("span", { class: "empty-icon" }, "🌐"),
                    e("span", { class: "empty-text" }, "No Git remotes configured"),
                    e("p", { class: "empty-help" }, " Configure a remote repository to deploy your environment. ")
                  ], -1)),
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (ve) => n("navigate", "remotes"))
                  }, {
                    default: l(() => [...U[31] || (U[31] = [
                      g(" Go to Remotes Tab → ", -1)
                    ])]),
                    _: 1
                  })
                ])) : (s(), o(W, { key: 2 }, [
                  e("div", qw, [
                    (s(!0), o(W, null, ae(E.value, (ve) => (s(), S(iw, {
                      key: ve.name,
                      remote: ve,
                      "sync-status": ce.value[ve.name],
                      "is-selected": we.value === ve.name,
                      "is-fetching": xe.value === ve.name,
                      "is-pushing": Re.value === ve.name,
                      onFetch: Jt,
                      onPush: ct,
                      onSelect: Xt
                    }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                  ]),
                  ke.value && ke.value.ahead > 0 ? (s(), o("div", Yw, [
                    U[33] || (U[33] = e("span", { class: "warning-icon" }, "⚠", -1)),
                    e("div", Jw, [
                      e("strong", null, a(ke.value.ahead) + " unpushed commit" + a(ke.value.ahead !== 1 ? "s" : ""), 1),
                      e("p", null, "Push to '" + a(we.value) + "' before deploying to include your latest changes.", 1)
                    ]),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      loading: Re.value === we.value,
                      onClick: U[12] || (U[12] = (ve) => we.value && ct(we.value))
                    }, {
                      default: l(() => [
                        g(" Push to " + a(we.value), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])) : r("", !0),
                  e("div", Xw, [
                    w(te, {
                      variant: "link",
                      size: "sm",
                      onClick: U[13] || (U[13] = (ve) => n("navigate", "remotes"))
                    }, {
                      default: l(() => [...U[34] || (U[34] = [
                        g(" Manage remotes → ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ], 64))
              ]),
              _: 1
            })) : r("", !0),
            x.value ? (s(), S(Oe, {
              key: 2,
              title: "ENVIRONMENT SUMMARY"
            }, {
              default: l(() => [
                e("div", Qw, [
                  Ue.value ? (s(), o("div", Zw, "Loading environment summary...")) : ge.value ? (s(), o(W, { key: 1 }, [
                    e("div", ek, [
                      U[35] || (U[35] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                      e("span", tk, a(ge.value.comfyui_version), 1)
                    ]),
                    e("div", sk, [
                      U[36] || (U[36] = e("span", { class: "summary-label" }, "Nodes", -1)),
                      e("span", ok, a(ge.value.node_count) + " custom nodes", 1)
                    ]),
                    e("div", nk, [
                      U[37] || (U[37] = e("span", { class: "summary-label" }, "Models", -1)),
                      e("span", ak, a(ge.value.model_count) + " models", 1)
                    ]),
                    ge.value.models_with_sources > 0 ? (s(), o("div", lk, [
                      e("span", ik, "└─ " + a(ge.value.models_with_sources) + " with sources (auto-download)", 1)
                    ])) : r("", !0),
                    ge.value.models_without_sources > 0 ? (s(), o("div", rk, [
                      e("span", dk, "└─ " + a(ge.value.models_without_sources) + " without sources (manual upload)", 1)
                    ])) : r("", !0),
                    e("div", ck, [
                      U[38] || (U[38] = e("span", { class: "summary-label" }, "Workflows", -1)),
                      e("span", uk, a(ge.value.workflow_count) + " committed", 1)
                    ]),
                    e("div", mk, [
                      U[39] || (U[39] = e("span", { class: "summary-label" }, "Package", -1)),
                      e("span", vk, "~" + a(ge.value.estimated_package_size_mb) + " MB", 1)
                    ])
                  ], 64)) : r("", !0)
                ])
              ]),
              _: 1
            })) : r("", !0),
            x.value && rt.value ? (s(), S(Oe, {
              key: 3,
              title: "DEPLOYMENT SUMMARY"
            }, {
              default: l(() => {
                var ve, xt;
                return [
                  e("div", fk, [
                    e("div", pk, [
                      e("div", gk, [
                        U[44] || (U[44] = e("div", { class: "column-header" }, "Pricing", -1)),
                        e("div", hk, [
                          U[40] || (U[40] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                          e("span", yk, "$" + a(rt.value.gpu.toFixed(2)) + "/hr", 1)
                        ]),
                        e("div", wk, [
                          U[41] || (U[41] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                          e("span", kk, "$" + a(rt.value.volume.toFixed(3)) + "/hr", 1)
                        ]),
                        e("div", bk, [
                          U[42] || (U[42] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                          e("span", _k, "$" + a(rt.value.container.toFixed(3)) + "/hr", 1)
                        ]),
                        U[45] || (U[45] = e("div", { class: "pricing-divider" }, null, -1)),
                        e("div", $k, [
                          U[43] || (U[43] = e("span", { class: "pricing-label" }, "Total:", -1)),
                          e("span", Ck, "~$" + a(rt.value.total.toFixed(2)) + "/hr", 1)
                        ])
                      ]),
                      e("div", xk, [
                        U[47] || (U[47] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                        e("div", Sk, [
                          e("span", null, a(((ve = Z.value.find((jt) => jt.id === re.value)) == null ? void 0 : ve.displayName) || "GPU") + " (" + a(((xt = Z.value.find((jt) => jt.id === re.value)) == null ? void 0 : xt.memoryInGb) || 0) + "GB VRAM)", 1)
                        ]),
                        e("div", Ik, [
                          e("span", null, "Region: " + a(ee.value), 1)
                        ]),
                        P.value ? (s(), o("div", Ek, [
                          e("span", null, "Volume: " + a(P.value.name), 1)
                        ])) : r("", !0),
                        O.value === "SPOT" ? (s(), o("div", Pk, [...U[46] || (U[46] = [
                          e("span", null, "⚠ Spot instance - may be interrupted", -1)
                        ])])) : r("", !0)
                      ])
                    ])
                  ])
                ];
              }),
              _: 1
            })) : r("", !0),
            x.value ? (s(), o("div", Rk, [
              w(te, {
                variant: "primary",
                size: "md",
                loading: De.value || Ie.value,
                disabled: !ft.value,
                onClick: ts
              }, {
                default: l(() => [
                  U[48] || (U[48] = e("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                    e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                  ], -1)),
                  g(" " + a(De.value ? "Validating..." : Ie.value ? "Deploying..." : "Deploy to RunPod"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ])) : r("", !0),
            Be.value ? (s(), S(Oe, {
              key: 5,
              title: "DEPLOY STATUS"
            }, {
              default: l(() => [
                w(tt, {
                  status: Be.value.status === "success" ? "synced" : "broken"
                }, Ft({
                  icon: l(() => [
                    g(a(Be.value.status === "success" ? "✓" : "✕"), 1)
                  ]),
                  title: l(() => [
                    g(a(Be.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(Be.value.message), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: U[14] || (U[14] = (ve) => Be.value = null)
                    }, {
                      default: l(() => [...U[49] || (U[49] = [
                        g(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, [
                  Be.value.pod_id ? {
                    name: "details",
                    fn: l(() => [
                      w(We, {
                        label: "Pod ID:",
                        value: Be.value.pod_id
                      }, null, 8, ["value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["status"])
              ]),
              _: 1
            })) : r("", !0),
            x.value ? (s(), S(Oe, {
              key: 6,
              title: "ACTIVE PODS"
            }, {
              default: l(() => [
                e("div", Mk, [
                  w(te, {
                    variant: "ghost",
                    size: "sm",
                    loading: et.value,
                    onClick: pt
                  }, {
                    default: l(() => [...U[50] || (U[50] = [
                      g(" Refresh ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                et.value && Ye.value.length === 0 ? (s(), o("div", Tk, " Loading pods... ")) : Ye.value.length === 0 ? (s(), o("div", Dk, [...U[51] || (U[51] = [
                  e("span", { class: "empty-icon" }, "○", -1),
                  e("span", { class: "empty-text" }, "No active pods", -1)
                ])])) : (s(), o("div", Lk, [
                  (s(!0), o(W, null, ae(Ye.value, (ve) => (s(), o("div", {
                    key: ve.id,
                    class: "pod-card"
                  }, [
                    e("div", zk, [
                      e("span", Uk, a(ve.name), 1),
                      e("span", {
                        class: pe(["pod-status", ve.status.toLowerCase()])
                      }, a(ve.status === "RUNNING" ? "●" : "○") + " " + a(ve.status), 3)
                    ]),
                    e("div", Nk, [
                      e("span", Ok, a(ve.gpu_type), 1),
                      U[52] || (U[52] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", Bk, a(Nt(ve.uptime_seconds)), 1),
                      U[53] || (U[53] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", Ak, "$" + a((ve.total_cost ?? 0).toFixed(2)), 1)
                    ]),
                    e("div", Fk, [
                      ve.comfyui_url && ve.status === "RUNNING" ? (s(), S(te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (xt) => at(ve.comfyui_url)
                      }, {
                        default: l(() => [...U[54] || (U[54] = [
                          g(" Open ComfyUI ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0),
                      ve.status === "RUNNING" ? (s(), S(te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        loading: He.value === ve.id,
                        onClick: (xt) => Ne(ve.id),
                        title: "Stop pod (saves money, keeps storage)"
                      }, {
                        default: l(() => [...U[55] || (U[55] = [
                          g(" Stop ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      ve.status === "EXITED" || ve.status === "STOPPED" ? (s(), S(te, {
                        key: 2,
                        variant: "secondary",
                        size: "sm",
                        loading: lt.value === ve.id,
                        onClick: (xt) => je(ve.id),
                        title: "Start stopped pod"
                      }, {
                        default: l(() => [...U[56] || (U[56] = [
                          g(" Start ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      w(te, {
                        variant: "ghost",
                        size: "sm",
                        loading: Je.value === ve.id,
                        onClick: (xt) => $e(ve.id)
                      }, {
                        default: l(() => [...U[57] || (U[57] = [
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
        w(kt, {
          show: Q.value,
          title: "Deploy to Cloud",
          onClose: U[15] || (U[15] = (ve) => Q.value = !1)
        }, {
          content: l(() => [...U[58] || (U[58] = [
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
        be.value ? (s(), S(nt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ce = Me.value) == null ? void 0 : Ce.phase) === "READY" || ((Ke = Me.value) == null ? void 0 : Ke.phase) === "ERROR" || ((bt = Me.value) == null ? void 0 : bt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: K
        }, Ft({
          body: l(() => {
            var ve, xt, jt, As, Fs, Vs, Ws, Gs, js, Ks, Hs, qs;
            return [
              e("div", Vk, [
                e("div", Wk, [
                  e("div", {
                    class: pe(["phase-icon", (xt = (ve = Me.value) == null ? void 0 : ve.phase) == null ? void 0 : xt.toLowerCase()])
                  }, [
                    ((jt = Me.value) == null ? void 0 : jt.phase) === "READY" ? (s(), o("span", Gk, "✓")) : ((As = Me.value) == null ? void 0 : As.phase) === "ERROR" ? (s(), o("span", jk, "✕")) : ((Fs = Me.value) == null ? void 0 : Fs.phase) === "STOPPED" ? (s(), o("span", Kk, "○")) : (s(), o("span", Hk, "⟳"))
                  ], 2),
                  e("div", qk, [
                    e("div", Yk, a(R((Vs = Me.value) == null ? void 0 : Vs.phase)), 1),
                    e("div", Jk, a(((Ws = Me.value) == null ? void 0 : Ws.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                w(Us, {
                  progress: ue((Gs = Me.value) == null ? void 0 : Gs.phase),
                  variant: ((js = Me.value) == null ? void 0 : js.phase) === "ERROR" ? "error" : ((Ks = Me.value) == null ? void 0 : Ks.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Hs = Me.value) == null ? void 0 : Hs.phase) === "READY" ? (s(), o("div", Xk, [
                  w(te, {
                    variant: "primary",
                    size: "md",
                    onClick: T
                  }, {
                    default: l(() => [...U[59] || (U[59] = [
                      g(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", Qk, [
                  (qs = Me.value) != null && qs.console_url ? (s(), o("a", {
                    key: 0,
                    href: Me.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, Zk)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((Mt = Me.value) == null ? void 0 : Mt.phase) === "READY" || ((_e = Me.value) == null ? void 0 : _e.phase) === "ERROR" || ((Ot = Me.value) == null ? void 0 : Ot.phase) === "STOPPED" ? {
            name: "footer",
            fn: l(() => [
              w(te, {
                variant: "ghost",
                size: "sm",
                onClick: K
              }, {
                default: l(() => [...U[60] || (U[60] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0),
        H.value && fe.value ? (s(), S(go, {
          key: 1,
          issues: fe.value.blocking_issues,
          onClose: U[16] || (U[16] = (ve) => H.value = !1)
        }, null, 8, ["issues"])) : r("", !0),
        q.value && fe.value ? (s(), S(ho, {
          key: 2,
          models: fe.value.warnings.models_without_sources,
          onConfirm: ss,
          onCancel: U[17] || (U[17] = (ve) => q.value = !1),
          onRevalidate: os
        }, null, 8, ["models"])) : r("", !0)
      ], 64);
    };
  }
}), tb = /* @__PURE__ */ le(eb, [["__scopeId", "data-v-86fe11ab"]]), sb = { class: "header-info" }, ob = { class: "commit-hash" }, nb = {
  key: 0,
  class: "commit-refs"
}, ab = { class: "commit-message" }, lb = { class: "commit-date" }, ib = {
  key: 0,
  class: "loading"
}, rb = {
  key: 1,
  class: "changes-section"
}, db = { class: "stats-row" }, cb = { class: "stat" }, ub = { class: "stat insertions" }, mb = { class: "stat deletions" }, vb = {
  key: 0,
  class: "change-group"
}, fb = {
  key: 1,
  class: "change-group"
}, pb = {
  key: 0,
  class: "version"
}, gb = {
  key: 2,
  class: "change-group"
}, hb = { class: "change-item" }, yb = /* @__PURE__ */ ne({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = qe(), i = h(null), p = h(!0), f = B(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), u = B(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Fe(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (m, d) => (s(), S(nt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => m.$emit("close"))
    }, {
      header: l(() => {
        var v, y, k, _;
        return [
          e("div", sb, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", ob, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (_ = (k = i.value) == null ? void 0 : k.refs) != null && _.length ? (s(), o("span", nb, [
              (s(!0), o(W, null, ae(i.value.refs, (b) => (s(), o("span", {
                key: b,
                class: "ref-badge"
              }, a(b), 1))), 128))
            ])) : r("", !0)
          ]),
          w(ye, {
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
        var v, y;
        return [
          e("div", ab, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", lb, a(((y = i.value) == null ? void 0 : y.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (s(), o("div", ib, "Loading details...")) : i.value ? (s(), o("div", rb, [
            e("div", db, [
              e("span", cb, a(i.value.stats.files_changed) + " files", 1),
              e("span", ub, "+" + a(i.value.stats.insertions), 1),
              e("span", mb, "-" + a(i.value.stats.deletions), 1)
            ]),
            f.value ? (s(), o("div", vb, [
              w(cs, { variant: "section" }, {
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
            u.value ? (s(), o("div", fb, [
              w(cs, { variant: "section" }, {
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
                k.version ? (s(), o("span", pb, "(" + a(k.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(W, null, ae(i.value.changes.nodes.removed, (k) => (s(), o("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", gb, [
              w(cs, { variant: "section" }, {
                default: l(() => [...d[13] || (d[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", hb, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: l(() => [
        w(ye, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...d[15] || (d[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        w(ye, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => m.$emit("checkout", t.commit))
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
}), wb = /* @__PURE__ */ le(yb, [["__scopeId", "data-v-d256ff6d"]]), kb = { class: "base-textarea-wrapper" }, bb = ["value", "rows", "placeholder", "disabled", "maxlength"], _b = {
  key: 0,
  class: "base-textarea-count"
}, $b = /* @__PURE__ */ ne({
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
    function p(f) {
      f.shiftKey || f.ctrlKey || f.metaKey || n.submitOnEnter && (f.preventDefault(), i("submit"));
    }
    return (f, u) => (s(), o("div", kb, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (m) => f.$emit("update:modelValue", m.target.value)),
        onKeydown: [
          u[1] || (u[1] = Ct(Ae((m) => f.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = Ct(Ae((m) => f.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Ct(p, ["enter"])
        ]
      }, null, 40, bb),
      t.showCharCount && t.maxLength ? (s(), o("div", _b, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), Js = /* @__PURE__ */ le($b, [["__scopeId", "data-v-c6d16c93"]]), Cb = ["checked", "disabled"], xb = { class: "base-checkbox-box" }, Sb = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Ib = {
  key: 0,
  class: "base-checkbox-label"
}, Eb = /* @__PURE__ */ ne({
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
      }, null, 40, Cb),
      e("span", xb, [
        t.modelValue ? (s(), o("svg", Sb, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Ib, [
        Pe(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Xs = /* @__PURE__ */ le(Eb, [["__scopeId", "data-v-bf17c831"]]), Pb = { class: "popover-header" }, Rb = { class: "popover-body" }, Mb = {
  key: 0,
  class: "changes-summary"
}, Tb = {
  key: 0,
  class: "change-item"
}, Db = {
  key: 1,
  class: "change-item"
}, Lb = {
  key: 2,
  class: "change-item"
}, zb = {
  key: 3,
  class: "change-item"
}, Ub = {
  key: 4,
  class: "change-item"
}, Nb = {
  key: 5,
  class: "change-item"
}, Ob = {
  key: 1,
  class: "no-changes"
}, Bb = {
  key: 2,
  class: "loading"
}, Ab = {
  key: 3,
  class: "issues-error"
}, Fb = { class: "error-header" }, Vb = { class: "error-title" }, Wb = { class: "issues-list" }, Gb = { class: "message-section" }, jb = { class: "popover-footer" }, Kb = {
  key: 1,
  class: "commit-popover"
}, Hb = { class: "popover-header" }, qb = { class: "popover-body" }, Yb = {
  key: 0,
  class: "changes-summary"
}, Jb = {
  key: 0,
  class: "change-item"
}, Xb = {
  key: 1,
  class: "change-item"
}, Qb = {
  key: 2,
  class: "change-item"
}, Zb = {
  key: 3,
  class: "change-item"
}, e_ = {
  key: 4,
  class: "change-item"
}, t_ = {
  key: 5,
  class: "change-item"
}, s_ = {
  key: 1,
  class: "no-changes"
}, o_ = {
  key: 2,
  class: "loading"
}, n_ = {
  key: 3,
  class: "issues-error"
}, a_ = { class: "error-header" }, l_ = { class: "error-title" }, i_ = { class: "issues-list" }, r_ = { class: "message-section" }, d_ = { class: "popover-footer" }, c_ = /* @__PURE__ */ ne({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: p } = qe(), f = h(""), u = h(!1), m = h(!1), d = B(() => {
      if (!n.status) return !1;
      const L = n.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || n.status.has_changes;
    }), v = B(() => {
      if (!n.status) return !1;
      const L = n.status.workflows, D = n.status.git_changes;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || D.nodes_added.length > 0 || D.nodes_removed.length > 0;
    }), y = B(() => {
      var L;
      return (L = n.status) != null && L.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (D) => D.has_issues && (D.sync_state === "new" || D.sync_state === "modified")
      ) : [];
    }), k = B(() => y.value.length > 0), _ = B(() => k.value && !m.value);
    async function b() {
      var L, D, $;
      if (!(k.value && !m.value) && !(!d.value || !f.value.trim() || u.value)) {
        u.value = !0;
        try {
          const I = await p(f.value.trim(), m.value);
          if (I.status === "success") {
            const G = `Committed: ${((L = I.summary) == null ? void 0 : L.new) || 0} new, ${((D = I.summary) == null ? void 0 : D.modified) || 0} modified, ${(($ = I.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: G });
          } else I.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : I.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: I.message || "Commit failed" });
        } catch (I) {
          i("committed", { success: !1, message: I instanceof Error ? I.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (L, D) => t.asModal ? (s(), S(Xe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: D[5] || (D[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: D[4] || (D[4] = Ae(() => {
          }, ["stop"]))
        }, [
          e("div", Pb, [
            D[11] || (D[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: D[0] || (D[0] = ($) => i("close"))
            }, [...D[10] || (D[10] = [
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
          e("div", Rb, [
            t.status && d.value ? (s(), o("div", Mb, [
              t.status.workflows.new.length ? (s(), o("div", Tb, [
                D[12] || (D[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Db, [
                D[13] || (D[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Lb, [
                D[14] || (D[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", zb, [
                D[15] || (D[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Ub, [
                D[16] || (D[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              v.value ? r("", !0) : (s(), o("div", Nb, [...D[17] || (D[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Ob, " No changes to commit ")) : (s(), o("div", Bb, " Loading... ")),
            k.value ? (s(), o("div", Ab, [
              e("div", Fb, [
                D[18] || (D[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Vb, a(y.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Wb, [
                (s(!0), o(W, null, ae(y.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  g(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              w(Xs, {
                modelValue: m.value,
                "onUpdate:modelValue": D[1] || (D[1] = ($) => m.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...D[19] || (D[19] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", Gb, [
              w(Js, {
                modelValue: f.value,
                "onUpdate:modelValue": D[2] || (D[2] = ($) => f.value = $),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: b,
                onSubmit: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", jb, [
            w(ye, {
              variant: "secondary",
              onClick: D[3] || (D[3] = ($) => i("close"))
            }, {
              default: l(() => [...D[20] || (D[20] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ye, {
              variant: m.value ? "danger" : "primary",
              disabled: !d.value || !f.value.trim() || u.value || _.value,
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
    ])) : (s(), o("div", Kb, [
      e("div", Hb, [
        D[22] || (D[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: D[6] || (D[6] = ($) => i("close"))
        }, [...D[21] || (D[21] = [
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
      e("div", qb, [
        t.status && d.value ? (s(), o("div", Yb, [
          t.status.workflows.new.length ? (s(), o("div", Jb, [
            D[23] || (D[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Xb, [
            D[24] || (D[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Qb, [
            D[25] || (D[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Zb, [
            D[26] || (D[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", e_, [
            D[27] || (D[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          v.value ? r("", !0) : (s(), o("div", t_, [...D[28] || (D[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", s_, " No changes to commit ")) : (s(), o("div", o_, " Loading... ")),
        k.value ? (s(), o("div", n_, [
          e("div", a_, [
            D[29] || (D[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", l_, a(y.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", i_, [
            (s(!0), o(W, null, ae(y.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              g(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          w(Xs, {
            modelValue: m.value,
            "onUpdate:modelValue": D[7] || (D[7] = ($) => m.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...D[30] || (D[30] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", r_, [
          w(Js, {
            modelValue: f.value,
            "onUpdate:modelValue": D[8] || (D[8] = ($) => f.value = $),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: b,
            onSubmit: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", d_, [
        w(ye, {
          variant: "secondary",
          onClick: D[9] || (D[9] = ($) => i("close"))
        }, {
          default: l(() => [...D[31] || (D[31] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w(ye, {
          variant: m.value ? "danger" : "primary",
          disabled: !d.value || !f.value.trim() || u.value || _.value,
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
}), wo = /* @__PURE__ */ le(c_, [["__scopeId", "data-v-d0fe6172"]]), u_ = { class: "modal-header" }, m_ = { class: "modal-body" }, v_ = { class: "switch-message" }, f_ = { class: "switch-details" }, p_ = { class: "modal-actions" }, g_ = /* @__PURE__ */ ne({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), S(Xe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ae(() => {
          }, ["stop"]))
        }, [
          e("div", u_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", m_, [
            e("p", v_, [
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
            e("p", f_, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", p_, [
            w(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(te, {
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
}), h_ = /* @__PURE__ */ le(g_, [["__scopeId", "data-v-e9c5253e"]]), y_ = {
  key: 0,
  class: "modal-overlay"
}, w_ = { class: "modal-content" }, k_ = { class: "modal-body" }, b_ = { class: "progress-info" }, __ = { class: "progress-percentage" }, $_ = { class: "progress-state" }, C_ = { class: "switch-steps" }, x_ = { class: "step-icon" }, S_ = { class: "step-label" }, I_ = /* @__PURE__ */ ne({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = B(() => {
      const f = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return c.message || f[c.state] || c.state;
    }), i = B(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), p = B(() => {
      const f = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = f.findIndex((m) => m.state === c.state);
      return f.map((m, d) => {
        let v = "pending", y = "○";
        return d < u ? (v = "completed", y = "✓") : d === u && (v = "active", y = "⟳"), {
          ...m,
          status: v,
          icon: y
        };
      });
    });
    return (f, u) => (s(), S(Xe, { to: "body" }, [
      t.show ? (s(), o("div", y_, [
        e("div", w_, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", k_, [
            w(Us, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", b_, [
              e("div", __, a(t.progress) + "%", 1),
              e("div", $_, a(n.value), 1)
            ]),
            e("div", C_, [
              (s(!0), o(W, null, ae(p.value, (m) => (s(), o("div", {
                key: m.state,
                class: pe(["switch-step", m.status])
              }, [
                e("span", x_, a(m.icon), 1),
                e("span", S_, a(m.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), E_ = /* @__PURE__ */ le(I_, [["__scopeId", "data-v-768a5078"]]), P_ = { class: "modal-header" }, R_ = { class: "modal-body" }, M_ = {
  key: 0,
  class: "node-section"
}, T_ = { class: "node-list" }, D_ = {
  key: 1,
  class: "node-section"
}, L_ = { class: "node-list" }, z_ = { class: "modal-actions" }, U_ = /* @__PURE__ */ ne({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), S(Xe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ae(() => {
          }, ["stop"]))
        }, [
          e("div", P_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", R_, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", M_, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", T_, [
                (s(!0), o(W, null, ae(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", D_, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", L_, [
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
          e("div", z_, [
            w(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(te, {
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
}), N_ = /* @__PURE__ */ le(U_, [["__scopeId", "data-v-7cad7518"]]), O_ = [
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
], B_ = "v0.0.4", A_ = "Akatz", F_ = { class: "social-buttons" }, V_ = ["title", "aria-label", "onClick"], W_ = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, G_ = ["d"], j_ = ["title", "aria-label", "onClick"], K_ = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, H_ = ["d"], q_ = /* @__PURE__ */ ne({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", F_, [
      (s(!0), o(W, null, ae(Ee(O_), (p) => (s(), o(W, {
        key: p.id
      }, [
        p.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: p.title,
          "aria-label": p.ariaLabel,
          onClick: (f) => c(p.url)
        }, [
          g(a(p.label) + " ", 1),
          (s(), o("svg", W_, [
            e("path", {
              d: p.iconPath
            }, null, 8, G_)
          ]))
        ], 8, V_)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: p.title,
          "aria-label": p.ariaLabel,
          onClick: (f) => c(p.url)
        }, [
          (s(), o("svg", K_, [
            e("path", {
              d: p.iconPath
            }, null, 8, H_)
          ]))
        ], 8, j_))
      ], 64))), 128))
    ]));
  }
}), ko = /* @__PURE__ */ le(q_, [["__scopeId", "data-v-4f846342"]]), Y_ = { class: "footer-info" }, J_ = { class: "version" }, X_ = { class: "made-by" }, Q_ = /* @__PURE__ */ ne({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", Y_, [
      e("span", J_, a(Ee(B_)), 1),
      e("span", X_, [
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
        g(" by " + a(Ee(A_)), 1)
      ])
    ]));
  }
}), bo = /* @__PURE__ */ le(Q_, [["__scopeId", "data-v-8bc3db0a"]]), Z_ = /* @__PURE__ */ ne({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = h(null);
    async function i() {
      var f;
      await ((f = n.value) == null ? void 0 : f.saveSettings());
    }
    function p() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (f, u) => (s(), S(nt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (m) => f.$emit("close"))
    }, {
      body: l(() => [
        w(uo, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: p
        }, null, 8, ["workspace-path"])
      ]),
      footer: l(() => {
        var m;
        return [
          w(ye, {
            variant: "primary",
            disabled: !((m = n.value) != null && m.hasChanges),
            onClick: i
          }, {
            default: l(() => [...u[2] || (u[2] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(ye, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => f.$emit("close"))
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
}), e2 = /* @__PURE__ */ le(Z_, [["__scopeId", "data-v-fac00ae7"]]), t2 = { class: "header-actions" }, s2 = {
  key: 0,
  class: "wizard-step"
}, o2 = { class: "form-field" }, n2 = ["placeholder"], a2 = {
  key: 0,
  class: "form-error"
}, l2 = { class: "form-field form-field--checkbox" }, i2 = { class: "form-checkbox" }, r2 = {
  key: 0,
  class: "form-field"
}, d2 = ["placeholder"], c2 = {
  key: 0,
  class: "form-info"
}, u2 = {
  key: 1,
  class: "form-suggestion"
}, m2 = {
  key: 2,
  class: "form-error"
}, v2 = {
  key: 3,
  class: "form-info"
}, f2 = {
  key: 1,
  class: "wizard-step"
}, p2 = {
  key: 0,
  class: "progress-check-loading"
}, g2 = {
  key: 0,
  class: "cli-warning"
}, h2 = { class: "cli-warning-header" }, y2 = {
  key: 1,
  class: "env-landing"
}, w2 = { class: "env-list" }, k2 = ["value"], b2 = { class: "env-name" }, _2 = {
  key: 2,
  class: "env-create"
}, $2 = { class: "form-field" }, C2 = { class: "form-field" }, x2 = ["value"], S2 = { class: "form-field" }, I2 = ["disabled"], E2 = ["value"], P2 = { class: "form-field" }, R2 = ["value"], M2 = { class: "form-field form-field--checkbox" }, T2 = { class: "form-checkbox" }, D2 = {
  key: 0,
  class: "form-error"
}, L2 = {
  key: 1,
  class: "env-creating"
}, z2 = { class: "creating-intro" }, U2 = {
  key: 3,
  class: "env-import"
}, N2 = { class: "wizard-footer" }, O2 = { class: "wizard-footer-actions" }, Kt = 10, B2 = 600 * 1e3, Qs = 1800 * 1e3, A2 = /* @__PURE__ */ ne({
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
      getInitializeProgress: f,
      validatePath: u,
      createEnvironment: m,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: y
    } = qe(), k = h(n.initialStep || 1), _ = h(null), b = h("landing"), L = h(!1), D = h(!1), $ = h(!1), I = h(!1), G = h(null), C = h(n.initialStep === 2), M = h(n.defaultPath), Q = h(!!n.detectedModelsDir), F = h(n.detectedModelsDir || ""), j = h(null), x = h(null), z = h(null), A = h(null), de = h("my-new-env"), ee = h(fo), Y = h("latest"), re = h(po), X = h(!0), O = h(null), N = h(null), E = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), ce = h(!1), se = h(!1), we = h(!1), xe = h({ progress: 0, message: "" }), Re = h({ progress: 0, message: "" }), ze = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], me = h(0), he = h(null), Se = h(0), Z = h(null), ie = B(() => {
      var P, V;
      const fe = (P = M.value) == null ? void 0 : P.trim(), H = !j.value, q = !Q.value || !x.value && ((V = F.value) == null ? void 0 : V.trim());
      return fe && H && q;
    }), ge = B(() => {
      var fe;
      return (fe = de.value) == null ? void 0 : fe.trim();
    }), Ue = B(() => !!(k.value === 2 || N.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Ye = B(() => N.value || n.workspacePath || null);
    async function et() {
      var fe;
      if (j.value = null, !!((fe = M.value) != null && fe.trim()))
        try {
          const H = await u({ path: M.value, type: "workspace" });
          H.valid || (j.value = H.error || "Invalid path");
        } catch (H) {
          j.value = H instanceof Error ? H.message : "Validation failed";
        }
    }
    async function Ie() {
      var fe;
      if (x.value = null, z.value = null, A.value = null, !!((fe = F.value) != null && fe.trim()))
        try {
          const H = await u({ path: F.value, type: "models" });
          if (H.valid)
            A.value = H.model_count ?? null;
          else if (x.value = H.error || "Invalid path", H.suggestion) {
            z.value = H.suggestion, F.value = H.suggestion, x.value = null;
            const q = await u({ path: H.suggestion, type: "models" });
            q.valid && (A.value = q.model_count ?? null);
          }
        } catch (H) {
          x.value = H instanceof Error ? H.message : "Validation failed";
        }
    }
    async function Be() {
      var fe, H, q, P, V;
      if (j.value = null, x.value = null, await et(), (fe = j.value) != null && fe.includes("already exists")) {
        j.value = null, N.value = ((H = M.value) == null ? void 0 : H.trim()) || n.defaultPath, k.value = 2, He();
        return;
      }
      if (!j.value && !(Q.value && ((q = F.value) != null && q.trim()) && (await Ie(), x.value))) {
        se.value = !0;
        try {
          await p({
            workspace_path: ((P = M.value) == null ? void 0 : P.trim()) || n.defaultPath,
            models_directory: Q.value && ((V = F.value) == null ? void 0 : V.trim()) || null
          }), me.value = 0, he.value = Date.now();
          const oe = setInterval(async () => {
            var ke;
            if (he.value && Date.now() - he.value > B2) {
              clearInterval(oe), se.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ve = await f();
              if (me.value = 0, Ve.state === "idle" && se.value) {
                clearInterval(oe), se.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              xe.value = { progress: Ve.progress, message: Ve.message }, Ve.state === "complete" ? (clearInterval(oe), se.value = !1, N.value = ((ke = M.value) == null ? void 0 : ke.trim()) || n.defaultPath, k.value = 2, He()) : Ve.state === "error" && (clearInterval(oe), se.value = !1, j.value = Ve.error || "Workspace creation failed");
            } catch (Ve) {
              me.value++, console.warn(`Polling failure ${me.value}/${Kt}:`, Ve), me.value >= Kt && (clearInterval(oe), se.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (oe) {
          se.value = !1, j.value = oe instanceof Error ? oe.message : "Failed to create workspace";
        }
      }
    }
    async function Je() {
      we.value = !0, O.value = null;
      try {
        const fe = {
          name: de.value.trim() || "my-new-env",
          python_version: ee.value,
          comfyui_version: Y.value,
          torch_backend: re.value,
          switch_after: X.value,
          workspace_path: N.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await m(fe)).status === "started") {
          Se.value = 0, Z.value = Date.now();
          const q = setInterval(async () => {
            if (Z.value && Date.now() - Z.value > Qs) {
              clearInterval(q), we.value = !1, O.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const P = await d();
              if (Se.value = 0, P.state === "idle" && we.value) {
                clearInterval(q), we.value = !1, O.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Re.value = {
                progress: P.progress ?? 0,
                message: P.message,
                phase: P.phase
              }, P.state === "complete") {
                clearInterval(q), we.value = !1;
                const V = P.environment_name || fe.name;
                X.value ? i("complete", V, N.value) : (b.value = "landing", i("environment-created-no-switch", V));
              } else P.state === "error" && (clearInterval(q), we.value = !1, O.value = P.error || "Environment creation failed");
            } catch (P) {
              Se.value++, console.warn(`Polling failure ${Se.value}/${Kt}:`, P), Se.value >= Kt && (clearInterval(q), we.value = !1, O.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (fe) {
        we.value = !1, O.value = fe instanceof Error ? fe.message : "Unknown error";
      }
    }
    async function He() {
      ce.value = !0;
      try {
        E.value = await y();
      } catch (fe) {
        console.error("Failed to load ComfyUI releases:", fe);
      } finally {
        ce.value = !1;
      }
    }
    function lt() {
      _.value && i("switch-environment", _.value, N.value);
    }
    function be() {
      b.value === "create" || b.value === "import" ? b.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function Ge(fe, H) {
      D.value = !1, H ? i("complete", fe, N.value) : (i("environment-created-no-switch", fe), b.value = "landing");
    }
    function Me() {
    }
    Fe(async () => {
      if (n.detectedModelsDir && (F.value = n.detectedModelsDir), n.workspacePath && (N.value = n.workspacePath), k.value === 2) {
        He();
        const fe = setTimeout(() => {
          C.value = !1;
        }, 3e3);
        await Qe(), clearTimeout(fe), C.value = !1;
      }
    });
    async function Qe() {
      try {
        const fe = await d();
        if (console.log("[ComfyGit] Create progress check:", fe.state, fe), fe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", fe.environment_name), b.value = "create", we.value = !0, de.value = fe.environment_name || "my-new-env", Re.value = {
            progress: fe.progress ?? 0,
            message: fe.message,
            phase: fe.phase
          }, De();
          return;
        }
      } catch (fe) {
        console.log("[ComfyGit] Create progress check failed:", fe);
      }
      try {
        const fe = await v();
        console.log("[ComfyGit] Import progress check:", fe.state, fe), fe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", fe.environment_name), G.value = {
          message: fe.message || "Importing...",
          phase: fe.phase || "",
          progress: fe.progress ?? 0,
          environmentName: fe.environment_name || ""
        }, I.value = !0, b.value = "import", D.value = !0);
      } catch (fe) {
        console.log("[ComfyGit] Import progress check failed:", fe);
      }
    }
    async function De() {
      Se.value = 0, Z.value = Date.now();
      let fe = null;
      const H = async () => {
        if (Z.value && Date.now() - Z.value > Qs)
          return fe && clearInterval(fe), we.value = !1, O.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const P = await d();
          if (Se.value = 0, P.state === "idle" && we.value)
            return fe && clearInterval(fe), we.value = !1, O.value = "Environment creation was interrupted. Please try again.", !1;
          if (Re.value = {
            progress: P.progress ?? 0,
            message: P.message,
            phase: P.phase
          }, P.state === "complete") {
            fe && clearInterval(fe), we.value = !1;
            const V = P.environment_name || de.value;
            return i("complete", V, N.value), !1;
          } else if (P.state === "error")
            return fe && clearInterval(fe), we.value = !1, O.value = P.error || "Environment creation failed", !1;
          return !0;
        } catch (P) {
          return Se.value++, console.warn(`Polling failure ${Se.value}/${Kt}:`, P), Se.value >= Kt ? (fe && clearInterval(fe), we.value = !1, O.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await H() && (fe = setInterval(async () => {
        !await H() && fe && clearInterval(fe);
      }, 2e3));
    }
    return (fe, H) => (s(), o(W, null, [
      w(nt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: H[15] || (H[15] = (q) => fe.$emit("close"))
      }, {
        header: l(() => [
          H[20] || (H[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", t2, [
            w(ko),
            H[19] || (H[19] = e("span", { class: "header-divider" }, null, -1)),
            Ue.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: H[0] || (H[0] = (q) => L.value = !0)
            }, [...H[17] || (H[17] = [
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
              onClick: H[1] || (H[1] = (q) => fe.$emit("close")),
              title: "Close"
            }, [...H[18] || (H[18] = [
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
            k.value === 1 ? (s(), o("div", s2, [
              H[24] || (H[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", o2, [
                H[21] || (H[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Le(e("input", {
                  "onUpdate:modelValue": H[2] || (H[2] = (P) => M.value = P),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, n2), [
                  [At, M.value]
                ]),
                j.value ? (s(), o("p", a2, a(j.value), 1)) : r("", !0)
              ]),
              e("div", l2, [
                e("label", i2, [
                  Le(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": H[3] || (H[3] = (P) => Q.value = P)
                  }, null, 512), [
                    [hs, Q.value]
                  ]),
                  H[22] || (H[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              Q.value ? (s(), o("div", r2, [
                H[23] || (H[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Le(e("input", {
                  "onUpdate:modelValue": H[4] || (H[4] = (P) => F.value = P),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, d2), [
                  [At, F.value]
                ]),
                t.detectedModelsDir && !F.value ? (s(), o("p", c2, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                z.value ? (s(), o("p", u2, " Did you mean: " + a(z.value), 1)) : r("", !0),
                x.value ? (s(), o("p", m2, a(x.value), 1)) : r("", !0),
                A.value !== null && !x.value ? (s(), o("p", v2, " Found " + a(A.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              se.value ? (s(), S(ks, {
                key: 1,
                progress: xe.value.progress,
                message: xe.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            k.value === 2 ? (s(), o("div", f2, [
              C.value ? (s(), o("div", p2, [...H[25] || (H[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(W, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", g2, [
                  e("div", h2, [
                    H[27] || (H[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    H[28] || (H[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: H[5] || (H[5] = (P) => $.value = !0),
                      title: "Dismiss"
                    }, [...H[26] || (H[26] = [
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
                  H[29] || (H[29] = e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  H[30] || (H[30] = e("div", { class: "cli-warning-commands" }, [
                    e("code", null, "pipx install comfygit"),
                    e("span", { class: "cli-warning-or" }, "or"),
                    e("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : r("", !0),
                b.value === "landing" ? (s(), o("div", y2, [
                  H[34] || (H[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: H[6] || (H[6] = (P) => b.value = "create")
                  }, [...H[31] || (H[31] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: H[7] || (H[7] = (P) => {
                      I.value = !1, b.value = "import";
                    })
                  }, [...H[32] || (H[32] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (q = n.existingEnvironments) != null && q.length ? (s(), o(W, { key: 0 }, [
                    H[33] || (H[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", w2, [
                      (s(!0), o(W, null, ae(n.existingEnvironments, (P) => (s(), o("label", {
                        key: P,
                        class: pe(["env-option", { selected: _.value === P }])
                      }, [
                        Le(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: P,
                          "onUpdate:modelValue": H[8] || (H[8] = (V) => _.value = V)
                        }, null, 8, k2), [
                          [Dt, _.value]
                        ]),
                        e("span", b2, a(P), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : b.value === "create" ? (s(), o("div", _2, [
                  we.value ? (s(), o("div", L2, [
                    e("p", z2, [
                      H[41] || (H[41] = g(" Creating environment ", -1)),
                      e("strong", null, a(de.value), 1),
                      H[42] || (H[42] = g("... ", -1))
                    ]),
                    w(ks, {
                      progress: Re.value.progress,
                      message: Re.value.message,
                      "current-phase": Re.value.phase,
                      "show-steps": !0,
                      steps: ze
                    }, null, 8, ["progress", "message", "current-phase"]),
                    H[43] || (H[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(W, { key: 0 }, [
                    H[40] || (H[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", $2, [
                      H[35] || (H[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Le(e("input", {
                        "onUpdate:modelValue": H[9] || (H[9] = (P) => de.value = P),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [At, de.value]
                      ])
                    ]),
                    e("div", C2, [
                      H[36] || (H[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Le(e("select", {
                        "onUpdate:modelValue": H[10] || (H[10] = (P) => ee.value = P),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ae(Ee(vo), (P) => (s(), o("option", {
                          key: P,
                          value: P
                        }, a(P), 9, x2))), 128))
                      ], 512), [
                        [St, ee.value]
                      ])
                    ]),
                    e("div", S2, [
                      H[37] || (H[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Le(e("select", {
                        "onUpdate:modelValue": H[11] || (H[11] = (P) => Y.value = P),
                        class: "form-select",
                        disabled: ce.value
                      }, [
                        (s(!0), o(W, null, ae(E.value, (P) => (s(), o("option", {
                          key: P.tag_name,
                          value: P.tag_name
                        }, a(P.name), 9, E2))), 128))
                      ], 8, I2), [
                        [St, Y.value]
                      ])
                    ]),
                    e("div", P2, [
                      H[38] || (H[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Le(e("select", {
                        "onUpdate:modelValue": H[12] || (H[12] = (P) => re.value = P),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ae(Ee(zs), (P) => (s(), o("option", {
                          key: P,
                          value: P
                        }, a(P) + a(P === "auto" ? " (detect GPU)" : ""), 9, R2))), 128))
                      ], 512), [
                        [St, re.value]
                      ])
                    ]),
                    e("div", M2, [
                      e("label", T2, [
                        Le(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": H[13] || (H[13] = (P) => X.value = P)
                        }, null, 512), [
                          [hs, X.value]
                        ]),
                        H[39] || (H[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    O.value ? (s(), o("div", D2, a(O.value), 1)) : r("", !0)
                  ], 64))
                ])) : b.value === "import" ? (s(), o("div", U2, [
                  w(yo, {
                    "workspace-path": N.value,
                    "resume-import": I.value,
                    "initial-progress": G.value ?? void 0,
                    onImportComplete: Ge,
                    onImportStarted: H[14] || (H[14] = (P) => D.value = !0),
                    onSourceCleared: Me
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", N2, [
            w(bo),
            e("div", O2, [
              k.value === 1 ? (s(), S(ye, {
                key: 0,
                variant: "primary",
                disabled: !ie.value || se.value,
                onClick: Be
              }, {
                default: l(() => [
                  g(a(se.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (s(), o(W, { key: 1 }, [
                !we.value && !D.value && (b.value !== "landing" || n.setupState === "no_workspace" && !N.value) ? (s(), S(ye, {
                  key: 0,
                  variant: "secondary",
                  onClick: be
                }, {
                  default: l(() => [...H[44] || (H[44] = [
                    g(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                b.value === "create" ? (s(), S(ye, {
                  key: 1,
                  variant: "primary",
                  disabled: !ge.value || we.value,
                  onClick: Je
                }, {
                  default: l(() => [
                    g(a(we.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                b.value === "landing" && _.value ? (s(), S(ye, {
                  key: 2,
                  variant: "primary",
                  onClick: lt
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
      L.value ? (s(), S(e2, {
        key: 0,
        "workspace-path": Ye.value,
        onClose: H[16] || (H[16] = (q) => L.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), F2 = /* @__PURE__ */ le(A2, [["__scopeId", "data-v-9a9aadc0"]]), V2 = { class: "comfygit-panel" }, W2 = { class: "panel-header" }, G2 = { class: "header-left" }, j2 = {
  key: 0,
  class: "header-info"
}, K2 = { class: "header-actions" }, H2 = { class: "env-switcher" }, q2 = {
  key: 0,
  class: "header-info"
}, Y2 = { class: "branch-name" }, J2 = { class: "panel-main" }, X2 = { class: "sidebar" }, Q2 = { class: "sidebar-content" }, Z2 = { class: "sidebar-section" }, e$ = { class: "sidebar-section" }, t$ = { class: "sidebar-section" }, s$ = { class: "sidebar-footer" }, o$ = { class: "content-area" }, n$ = {
  key: 0,
  class: "error-message"
}, a$ = {
  key: 1,
  class: "loading"
}, l$ = { class: "dialog-content env-selector-dialog" }, i$ = { class: "dialog-header" }, r$ = { class: "dialog-body" }, d$ = { class: "env-list" }, c$ = { class: "env-info" }, u$ = { class: "env-name-row" }, m$ = { class: "env-indicator" }, v$ = { class: "env-name" }, f$ = {
  key: 0,
  class: "env-branch"
}, p$ = {
  key: 1,
  class: "current-label"
}, g$ = { class: "env-stats" }, h$ = ["onClick"], y$ = { class: "toast-container" }, w$ = { class: "toast-message" }, k$ = /* @__PURE__ */ ne({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: p,
      getHistory: f,
      getBranches: u,
      checkout: m,
      createBranch: d,
      switchBranch: v,
      deleteBranch: y,
      getEnvironments: k,
      switchEnvironment: _,
      getSwitchProgress: b,
      deleteEnvironment: L,
      syncEnvironmentManually: D,
      repairWorkflowModels: $,
      getSetupStatus: I
    } = qe(), G = no(), C = h(null), M = h([]), Q = h([]), F = h([]), j = B(() => F.value.find((T) => T.is_current)), x = h(null), z = h(!1), A = h(1), de = B(() => {
      var T;
      return ((T = x.value) == null ? void 0 : T.state) || "managed";
    }), ee = h(!1), Y = h(null), re = h(null), X = h(!1), O = h(null), N = h(null), E = h(null), ce = h(!1), se = h(!1), we = h(""), xe = h(null), Re = h({ state: "idle", progress: 0, message: "" });
    let ze = null, me = null;
    const he = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Se = n.initialView ? he[n.initialView] : null, Z = h((Se == null ? void 0 : Se.view) ?? "status"), ie = h((Se == null ? void 0 : Se.section) ?? "this-env");
    function ge(T, R) {
      Z.value = T, ie.value = R;
    }
    function Ue(T) {
      const ue = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[T];
      ue && ge(ue.view, ue.section);
    }
    function Ye() {
      ge("branches", "this-env");
    }
    function et() {
      i("close"), setTimeout(() => {
        var R;
        const T = document.querySelectorAll("button.comfyui-button");
        for (const ue of T)
          if (((R = ue.textContent) == null ? void 0 : R.trim()) === "Manager") {
            ue.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Ie = h(null), Be = h(!1), Je = h(!1), He = h([]);
    let lt = 0;
    function be(T, R = "info", ue = 3e3) {
      const $e = ++lt;
      return He.value.push({ id: $e, message: T, type: R }), ue > 0 && setTimeout(() => {
        He.value = He.value.filter((Ne) => Ne.id !== $e);
      }, ue), $e;
    }
    function Ge(T) {
      He.value = He.value.filter((R) => R.id !== T);
    }
    function Me(T, R) {
      be(T, R);
    }
    const Qe = B(() => {
      if (!C.value) return "neutral";
      const T = C.value.workflows, R = T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || C.value.has_changes;
      return C.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    B(() => C.value ? Qe.value === "success" ? "All synced" : Qe.value === "warning" ? "Uncommitted changes" : Qe.value === "error" ? "Not synced" : "" : "");
    async function De() {
      ee.value = !0, Y.value = null;
      try {
        const [T, R, ue, $e] = await Promise.all([
          p(!0),
          f(),
          u(),
          k()
        ]);
        C.value = T, M.value = R.commits, Q.value = ue.branches, F.value = $e, i("statusUpdate", T), O.value && await O.value.loadWorkflows(!0);
      } catch (T) {
        Y.value = T instanceof Error ? T.message : "Failed to load status", C.value = null, M.value = [], Q.value = [];
      } finally {
        ee.value = !1;
      }
    }
    function fe(T) {
      re.value = T;
    }
    async function H(T) {
      var ue;
      re.value = null;
      const R = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      Ie.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${T.short_hash || ((ue = T.hash) == null ? void 0 : ue.slice(0, 7))}?`,
        details: R ? K() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var je;
          Ie.value = null, ke();
          const $e = be(`Checking out ${T.short_hash || ((je = T.hash) == null ? void 0 : je.slice(0, 7))}...`, "info", 0), Ne = await m(T.hash, R);
          Ge($e), Ne.status === "success" ? be("Restarting ComfyUI...", "success") : be(Ne.message || "Checkout failed", "error");
        }
      };
    }
    async function q(T) {
      const R = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      Ie.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${T}"?`,
        details: R ? K() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ie.value = null, ke();
          const ue = be(`Switching to ${T}...`, "info", 0), $e = await v(T, R);
          Ge(ue), $e.status === "success" ? be("Restarting ComfyUI...", "success") : be($e.message || "Branch switch failed", "error");
        }
      };
    }
    async function P(T) {
      const R = be(`Creating branch ${T}...`, "info", 0), ue = await d(T);
      Ge(R), ue.status === "success" ? (be(`Branch "${T}" created`, "success"), await De()) : be(ue.message || "Failed to create branch", "error");
    }
    async function V(T, R = !1) {
      const ue = async ($e) => {
        var je;
        const Ne = be(`Deleting branch ${T}...`, "info", 0);
        try {
          const at = await y(T, $e);
          Ge(Ne), at.status === "success" ? (be(`Branch "${T}" deleted`, "success"), await De()) : (je = at.message) != null && je.includes("not fully merged") ? Ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${T}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ie.value = null, await ue(!0);
            }
          } : be(at.message || "Failed to delete branch", "error");
        } catch (at) {
          Ge(Ne);
          const Nt = at instanceof Error ? at.message : "Failed to delete branch";
          Nt.includes("not fully merged") ? Ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${T}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ie.value = null, await ue(!0);
            }
          } : be(Nt, "error");
        }
      };
      Ie.value = {
        title: "Delete Branch",
        message: `Delete branch "${T}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ie.value = null, await ue(R);
        }
      };
    }
    async function oe(T) {
      re.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const ue = be(`Creating branch ${R}...`, "info", 0), $e = await d(R, T.hash);
        Ge(ue), $e.status === "success" ? (be(`Branch "${R}" created from ${T.short_hash}`, "success"), await De()) : be($e.message || "Failed to create branch", "error");
      }
    }
    function ke() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ve() {
      Ie.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var T;
          Ie.value = null, ke(), be("Restarting environment...", "info");
          try {
            (T = window.app) != null && T.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ft() {
      Ie.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var T;
          Ie.value = null, be("Stopping environment...", "info");
          try {
            (T = window.app) != null && T.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Ze(T, R) {
      X.value = !1, we.value = T, xe.value = R || null, ce.value = !0;
    }
    async function rt() {
      ce.value = !1, se.value = !0, ke(), Re.value = {
        progress: 10,
        state: dt(10),
        message: Rt(10)
      };
      try {
        await _(we.value, xe.value || void 0), Jt(), Xt();
      } catch (T) {
        ct(), se.value = !1, be(`Failed to initiate switch: ${T instanceof Error ? T.message : "Unknown error"}`, "error"), Re.value = { state: "idle", progress: 0, message: "" }, xe.value = null;
      }
    }
    function dt(T) {
      return T >= 100 ? "complete" : T >= 80 ? "validating" : T >= 60 ? "starting" : T >= 30 ? "syncing" : "preparing";
    }
    function Rt(T) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[dt(T)] || "";
    }
    function Jt() {
      if (me) return;
      let T = 10;
      const R = 60, ue = 5e3, $e = 100, Ne = (R - T) / (ue / $e);
      me = window.setInterval(() => {
        if (T += Ne, T >= R && (T = R, ct()), Re.value.progress < R) {
          const je = Math.floor(T);
          Re.value = {
            progress: je,
            state: dt(je),
            message: Rt(je)
          };
        }
      }, $e);
    }
    function ct() {
      me && (clearInterval(me), me = null);
    }
    function Xt() {
      ze || (ze = window.setInterval(async () => {
        try {
          let T = await G.getStatus();
          if ((!T || T.state === "idle") && (T = await b()), !T)
            return;
          const R = T.progress || 0;
          R >= 60 && ct();
          const ue = Math.max(R, Re.value.progress), $e = T.state && T.state !== "idle" && T.state !== "unknown", Ne = $e ? T.state : dt(ue), je = $e && T.message || Rt(ue);
          Re.value = {
            state: Ne,
            progress: ue,
            message: je
          }, T.state === "complete" ? (ct(), Lt(), se.value = !1, be(`✓ Switched to ${we.value}`, "success"), await De(), we.value = "") : T.state === "rolled_back" ? (ct(), Lt(), se.value = !1, be("Switch failed, restored previous environment", "warning"), we.value = "") : T.state === "critical_failure" && (ct(), Lt(), se.value = !1, be(`Critical error during switch: ${T.message}`, "error"), we.value = "");
        } catch (T) {
          console.error("Failed to poll switch progress:", T);
        }
      }, 1e3));
    }
    function Lt() {
      ct(), ze && (clearInterval(ze), ze = null);
    }
    function Qt() {
      var T;
      ce.value = !1, we.value = "", (T = x.value) != null && T.state && x.value.state !== "managed" && (A.value = x.value.state === "no_workspace" ? 1 : 2, z.value = !0);
    }
    async function Zt(T) {
      Be.value = !1, await De(), be(T.message, T.success ? "success" : "error");
    }
    async function es() {
      Je.value = !1;
      const T = be("Syncing environment...", "info", 0);
      try {
        const R = await D("skip", !0);
        if (Ge(T), R.status === "success") {
          const ue = [];
          R.nodes_installed.length && ue.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && ue.push(`${R.nodes_removed.length} removed`);
          const $e = ue.length ? `: ${ue.join(", ")}` : "";
          be(`✓ Environment synced${$e}`, "success"), await De();
        } else {
          const ue = R.errors.length ? R.errors.join("; ") : R.message;
          be(`Sync failed: ${ue}`, "error");
        }
      } catch (R) {
        Ge(T), be(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function zt(T) {
      var R;
      try {
        const ue = await $(T);
        ue.failed.length === 0 ? be(`✓ Repaired ${ue.success} workflow${ue.success === 1 ? "" : "s"}`, "success") : be(`Repaired ${ue.success}, failed: ${ue.failed.length}`, "warning"), await De();
      } catch (ue) {
        be(`Repair failed: ${ue instanceof Error ? ue.message : "Unknown error"}`, "error");
      } finally {
        (R = E.value) == null || R.resetRepairingState();
      }
    }
    async function Vt() {
      var R, ue;
      const T = be("Repairing environment...", "info", 0);
      try {
        const $e = await D("skip", !0);
        if (Ge(T), $e.status === "success") {
          const Ne = [];
          $e.nodes_installed.length && Ne.push(`${$e.nodes_installed.length} installed`), $e.nodes_removed.length && Ne.push(`${$e.nodes_removed.length} removed`);
          const je = Ne.length ? `: ${Ne.join(", ")}` : "";
          be(`✓ Environment repaired${je}`, "success"), (R = E.value) == null || R.closeDetailModal(), await De();
        } else {
          const Ne = $e.errors.length ? $e.errors.join(", ") : $e.message || "Unknown error";
          be(`Repair failed: ${Ne}`, "error");
        }
      } catch ($e) {
        Ge(T), be(`Repair error: ${$e instanceof Error ? $e.message : "Unknown error"}`, "error");
      } finally {
        (ue = E.value) == null || ue.resetRepairingEnvironmentState();
      }
    }
    async function pt(T, R) {
      be(`Environment '${T}' created`, "success"), await De(), N.value && await N.value.loadEnvironments(), R && await Ze(T);
    }
    async function ts(T) {
      var R;
      if (((R = j.value) == null ? void 0 : R.name) === T) {
        be("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Ie.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${T}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Ie.value = null;
          try {
            const ue = await L(T);
            ue.status === "success" ? (be(`Environment "${T}" deleted`, "success"), await De(), N.value && await N.value.loadEnvironments()) : be(ue.message || "Failed to delete environment", "error");
          } catch (ue) {
            be(`Error deleting environment: ${ue instanceof Error ? ue.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ss(T, R) {
      z.value = !1;
      try {
        x.value = await I();
      } catch {
      }
      await Ze(T, R);
    }
    function os() {
      z.value = !1, i("close");
    }
    async function Wt(T, R) {
      await Ze(T, R);
    }
    async function ns(T) {
      await De(), await Ze(T);
    }
    async function Ut(T) {
      x.value = await I(), console.log(`Environment '${T}' created. Available for switching.`);
    }
    function Gt() {
      ge("environments", "all-envs"), setTimeout(() => {
        var T;
        (T = N.value) == null || T.openCreateModal();
      }, 100);
    }
    function K() {
      if (!C.value) return [];
      const T = [], R = C.value.workflows;
      return R.new.length && T.push(`${R.new.length} new workflow(s)`), R.modified.length && T.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && T.push(`${R.deleted.length} deleted workflow(s)`), T;
    }
    return Fe(async () => {
      try {
        if (x.value = await I(), x.value.state === "no_workspace") {
          z.value = !0, A.value = 1;
          return;
        }
        if (x.value.state === "empty_workspace") {
          z.value = !0, A.value = 2;
          return;
        }
        if (x.value.state === "unmanaged") {
          z.value = !0, A.value = 2;
          return;
        }
      } catch (T) {
        console.warn("Setup status check failed, proceeding normally:", T);
      }
      await De();
    }), (T, R) => {
      var ue, $e, Ne, je, at, Nt, J, U, Ce, Ke, bt, Mt;
      return s(), o("div", V2, [
        e("div", W2, [
          e("div", G2, [
            R[31] || (R[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            C.value ? (s(), o("div", j2)) : r("", !0)
          ]),
          e("div", K2, [
            w(ko),
            R[34] || (R[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: pe(["icon-btn", { spinning: ee.value }]),
              onClick: De,
              title: "Refresh"
            }, [...R[32] || (R[32] = [
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
              onClick: R[0] || (R[0] = (_e) => i("close")),
              title: "Close"
            }, [...R[33] || (R[33] = [
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
        e("div", H2, [
          e("div", { class: "env-switcher-header" }, [
            R[35] || (R[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ve
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
            onClick: R[1] || (R[1] = (_e) => ge("environments", "all-envs"))
          }, [
            C.value ? (s(), o("div", q2, [
              e("span", null, a(((ue = j.value) == null ? void 0 : ue.name) || (($e = C.value) == null ? void 0 : $e.environment) || "Loading..."), 1),
              e("span", Y2, "(" + a(C.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            R[36] || (R[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", J2, [
          e("div", X2, [
            e("div", Q2, [
              e("div", Z2, [
                R[37] || (R[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "status" && ie.value === "this-env" }]),
                  onClick: R[2] || (R[2] = (_e) => ge("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "workflows" }]),
                  onClick: R[3] || (R[3] = (_e) => ge("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "models-env" }]),
                  onClick: R[4] || (R[4] = (_e) => ge("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "branches" }]),
                  onClick: R[5] || (R[5] = (_e) => ge("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "history" }]),
                  onClick: R[6] || (R[6] = (_e) => ge("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "nodes" }]),
                  onClick: R[7] || (R[7] = (_e) => ge("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "debug-env" }]),
                  onClick: R[8] || (R[8] = (_e) => ge("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              R[40] || (R[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", e$, [
                R[38] || (R[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "environments" }]),
                  onClick: R[9] || (R[9] = (_e) => ge("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "model-index" }]),
                  onClick: R[10] || (R[10] = (_e) => ge("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "settings" }]),
                  onClick: R[11] || (R[11] = (_e) => ge("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "debug-workspace" }]),
                  onClick: R[12] || (R[12] = (_e) => ge("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              R[41] || (R[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", t$, [
                R[39] || (R[39] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "deploy" }]),
                  onClick: R[13] || (R[13] = (_e) => ge("deploy", "sharing"))
                }, " DEPLOY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "export" }]),
                  onClick: R[14] || (R[14] = (_e) => ge("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "import" }]),
                  onClick: R[15] || (R[15] = (_e) => ge("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "remotes" }]),
                  onClick: R[16] || (R[16] = (_e) => ge("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", s$, [
              w(bo)
            ])
          ]),
          e("div", o$, [
            Y.value ? (s(), o("div", n$, a(Y.value), 1)) : !C.value && Z.value === "status" ? (s(), o("div", a$, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              Z.value === "status" ? (s(), S(il, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: E,
                status: C.value,
                "setup-state": de.value,
                onSwitchBranch: Ye,
                onCommitChanges: R[17] || (R[17] = (_e) => Be.value = !0),
                onSyncEnvironment: R[18] || (R[18] = (_e) => Je.value = !0),
                onViewWorkflows: R[19] || (R[19] = (_e) => ge("workflows", "this-env")),
                onViewHistory: R[20] || (R[20] = (_e) => ge("history", "this-env")),
                onViewDebug: R[21] || (R[21] = (_e) => ge("debug-env", "this-env")),
                onViewNodes: R[22] || (R[22] = (_e) => ge("nodes", "this-env")),
                onRepairMissingModels: zt,
                onRepairEnvironment: Vt,
                onStartSetup: R[23] || (R[23] = (_e) => z.value = !0),
                onViewEnvironments: R[24] || (R[24] = (_e) => ge("environments", "all-envs")),
                onCreateEnvironment: Gt
              }, null, 8, ["status", "setup-state"])) : Z.value === "workflows" ? (s(), S(Pm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: O,
                onRefresh: De
              }, null, 512)) : Z.value === "models-env" ? (s(), S(uv, {
                key: 2,
                onNavigate: Ue
              })) : Z.value === "branches" ? (s(), S(_l, {
                key: 3,
                branches: Q.value,
                current: ((Ne = C.value) == null ? void 0 : Ne.branch) || null,
                onSwitch: q,
                onCreate: P,
                onDelete: V
              }, null, 8, ["branches", "current"])) : Z.value === "history" ? (s(), S(Dl, {
                key: 4,
                commits: M.value,
                onSelect: fe,
                onCheckout: H
              }, null, 8, ["commits"])) : Z.value === "nodes" ? (s(), S(rf, {
                key: 5,
                "version-mismatches": ((at = (je = C.value) == null ? void 0 : je.comparison) == null ? void 0 : at.version_mismatches) || [],
                onOpenNodeManager: et,
                onRepairEnvironment: Vt,
                onToast: Me
              }, null, 8, ["version-mismatches"])) : Z.value === "debug-env" ? (s(), S(bh, { key: 6 })) : Z.value === "environments" ? (s(), S(C1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: N,
                onSwitch: Ze,
                onCreated: pt,
                onDelete: ts
              }, null, 512)) : Z.value === "model-index" ? (s(), S(Mv, {
                key: 8,
                onRefresh: De
              })) : Z.value === "settings" ? (s(), S(uh, { key: 9 })) : Z.value === "debug-workspace" ? (s(), S(kh, { key: 10 })) : Z.value === "deploy" ? (s(), S(tb, {
                key: 11,
                onToast: Me,
                onNavigate: Ue
              })) : Z.value === "export" ? (s(), S(ey, { key: 12 })) : Z.value === "import" ? (s(), S(H0, {
                key: 13,
                onImportCompleteSwitch: ns
              })) : Z.value === "remotes" ? (s(), S(Gg, {
                key: 14,
                onToast: Me
              })) : r("", !0)
            ], 64))
          ])
        ]),
        re.value ? (s(), S(wb, {
          key: 0,
          commit: re.value,
          onClose: R[25] || (R[25] = (_e) => re.value = null),
          onCheckout: H,
          onCreateBranch: oe
        }, null, 8, ["commit"])) : r("", !0),
        Ie.value ? (s(), S(ro, {
          key: 1,
          title: Ie.value.title,
          message: Ie.value.message,
          details: Ie.value.details,
          warning: Ie.value.warning,
          confirmLabel: Ie.value.confirmLabel,
          cancelLabel: Ie.value.cancelLabel,
          secondaryLabel: Ie.value.secondaryLabel,
          secondaryAction: Ie.value.secondaryAction,
          destructive: Ie.value.destructive,
          onConfirm: Ie.value.onConfirm,
          onCancel: R[26] || (R[26] = (_e) => Ie.value = null),
          onSecondary: Ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        w(h_, {
          show: ce.value,
          "from-environment": ((Nt = j.value) == null ? void 0 : Nt.name) || "unknown",
          "to-environment": we.value,
          onConfirm: rt,
          onClose: Qt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Be.value && C.value ? (s(), S(wo, {
          key: 2,
          status: C.value,
          "as-modal": !0,
          onClose: R[27] || (R[27] = (_e) => Be.value = !1),
          onCommitted: Zt
        }, null, 8, ["status"])) : r("", !0),
        Je.value && C.value ? (s(), S(N_, {
          key: 3,
          show: Je.value,
          "mismatch-details": {
            missing_nodes: C.value.comparison.missing_nodes,
            extra_nodes: C.value.comparison.extra_nodes
          },
          onConfirm: es,
          onClose: R[28] || (R[28] = (_e) => Je.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        w(E_, {
          show: se.value,
          state: Re.value.state,
          progress: Re.value.progress,
          message: Re.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        X.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[30] || (R[30] = Ae((_e) => X.value = !1, ["self"]))
        }, [
          e("div", l$, [
            e("div", i$, [
              R[43] || (R[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[29] || (R[29] = (_e) => X.value = !1)
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
            ]),
            e("div", r$, [
              R[44] || (R[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", d$, [
                (s(!0), o(W, null, ae(F.value, (_e) => (s(), o("div", {
                  key: _e.name,
                  class: pe(["env-item", { current: _e.is_current }])
                }, [
                  e("div", c$, [
                    e("div", u$, [
                      e("span", m$, a(_e.is_current ? "●" : "○"), 1),
                      e("span", v$, a(_e.name), 1),
                      _e.current_branch ? (s(), o("span", f$, "(" + a(_e.current_branch) + ")", 1)) : r("", !0),
                      _e.is_current ? (s(), o("span", p$, "CURRENT")) : r("", !0)
                    ]),
                    e("div", g$, a(_e.workflow_count) + " workflows • " + a(_e.node_count) + " nodes ", 1)
                  ]),
                  _e.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ot) => Ze(_e.name)
                  }, " SWITCH ", 8, h$))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        z.value ? (s(), S(F2, {
          key: 5,
          "default-path": ((J = x.value) == null ? void 0 : J.default_path) || "~/comfygit",
          "detected-models-dir": ((U = x.value) == null ? void 0 : U.detected_models_dir) || null,
          "initial-step": A.value,
          "existing-environments": ((Ce = x.value) == null ? void 0 : Ce.environments) || [],
          "cli-installed": ((Ke = x.value) == null ? void 0 : Ke.cli_installed) ?? !0,
          "setup-state": ((bt = x.value) == null ? void 0 : bt.state) || "no_workspace",
          "workspace-path": ((Mt = x.value) == null ? void 0 : Mt.workspace_path) || null,
          onComplete: ss,
          onClose: os,
          onSwitchEnvironment: Wt,
          onEnvironmentCreatedNoSwitch: Ut
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", y$, [
          w(Ro, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(W, null, ae(He.value, (_e) => (s(), o("div", {
                key: _e.id,
                class: pe(["toast", _e.type])
              }, [
                e("span", w$, a(_e.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), b$ = /* @__PURE__ */ le(k$, [["__scopeId", "data-v-6229a0df"]]), _$ = { class: "item-header" }, $$ = { class: "item-info" }, C$ = { class: "filename" }, x$ = { class: "metadata" }, S$ = { class: "size" }, I$ = {
  key: 0,
  class: "type"
}, E$ = { class: "item-actions" }, P$ = {
  key: 0,
  class: "progress-section"
}, R$ = { class: "progress-bar" }, M$ = { class: "progress-stats" }, T$ = { class: "downloaded" }, D$ = { class: "speed" }, L$ = {
  key: 0,
  class: "eta"
}, z$ = {
  key: 1,
  class: "status-msg paused"
}, U$ = {
  key: 2,
  class: "status-msg queued"
}, N$ = {
  key: 3,
  class: "status-msg completed"
}, O$ = {
  key: 4,
  class: "status-msg failed"
}, B$ = {
  key: 0,
  class: "retries"
}, A$ = /* @__PURE__ */ ne({
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
    function p(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function f(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const m = Math.floor(u / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (u, m) => (s(), o("div", {
      class: pe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", _$, [
        e("div", $$, [
          e("div", C$, a(t.item.filename), 1),
          e("div", x$, [
            e("span", S$, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", I$, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", E$, [
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
      t.item.status === "downloading" ? (s(), o("div", P$, [
        e("div", R$, [
          e("div", {
            class: "progress-fill",
            style: It({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", M$, [
          e("span", T$, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", D$, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", L$, a(f(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", z$, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", U$, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", N$, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", O$, [
        g(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", B$, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), is = /* @__PURE__ */ le(A$, [["__scopeId", "data-v-2110df65"]]), F$ = { class: "queue-title" }, V$ = { class: "count" }, W$ = { class: "queue-actions" }, G$ = { class: "action-label" }, j$ = {
  key: 0,
  class: "overall-progress"
}, K$ = { class: "progress-bar" }, H$ = {
  key: 0,
  class: "current-mini"
}, q$ = { class: "filename" }, Y$ = { class: "speed" }, J$ = {
  key: 1,
  class: "queue-content"
}, X$ = {
  key: 0,
  class: "section"
}, Q$ = {
  key: 1,
  class: "section"
}, Z$ = { class: "section-header" }, eC = { class: "section-label paused" }, tC = { class: "items-list" }, sC = {
  key: 2,
  class: "section"
}, oC = { class: "section-header" }, nC = { class: "section-label" }, aC = { class: "items-list" }, lC = {
  key: 3,
  class: "section"
}, iC = { class: "section-header" }, rC = { class: "section-label" }, dC = { class: "items-list" }, cC = {
  key: 4,
  class: "section"
}, uC = { class: "section-header" }, mC = { class: "section-label failed" }, vC = { class: "items-list" }, fC = /* @__PURE__ */ ne({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: p,
      failedItems: f,
      pausedItems: u,
      hasItems: m,
      activeCount: d,
      cancelDownload: v,
      retryDownload: y,
      resumeDownload: k,
      resumeAllPaused: _,
      removeItem: b,
      clearCompleted: L
    } = vs(), D = h(!1);
    let $ = null;
    vt(
      () => ({
        active: d.value,
        failed: f.value.length,
        paused: u.value.length,
        completed: p.value.length
      }),
      (M, Q) => {
        $ && (clearTimeout($), $ = null);
        const F = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, j = Q && (Q.active > 0 || Q.paused > 0);
        F && j && ($ = setTimeout(() => {
          L(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const I = B(() => {
      var F;
      if (c.items.length === 0) return 0;
      const M = p.value.length, Q = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((M + Q / 100) / c.items.length * 100);
    });
    function G(M) {
      v(M);
    }
    function C(M) {
      return M === 0 ? "" : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, Q) => (s(), S(Xe, { to: "body" }, [
      Ee(m) ? (s(), o("div", {
        key: 0,
        class: pe(["model-download-queue", { minimized: !D.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: Q[0] || (Q[0] = (F) => D.value = !D.value)
        }, [
          e("div", F$, [
            Q[4] || (Q[4] = e("span", { class: "icon" }, "↓", -1)),
            Q[5] || (Q[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", V$, "(" + a(Ee(d)) + "/" + a(Ee(c).items.length) + ")", 1)
          ]),
          e("div", W$, [
            e("span", G$, a(D.value ? "minimize" : "expand"), 1)
          ])
        ]),
        D.value ? (s(), o("div", J$, [
          Ee(n) ? (s(), o("div", X$, [
            Q[6] || (Q[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            w(is, {
              item: Ee(n),
              onCancel: Q[1] || (Q[1] = (F) => G(Ee(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Ee(u).length > 0 ? (s(), o("div", Q$, [
            e("div", Z$, [
              e("span", eC, "Paused (" + a(Ee(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: Q[2] || (Q[2] = //@ts-ignore
                (...F) => Ee(_) && Ee(_)(...F))
              }, "Resume All")
            ]),
            e("div", tC, [
              (s(!0), o(W, null, ae(Ee(u), (F) => (s(), S(is, {
                key: F.id,
                item: F,
                onResume: (j) => Ee(k)(F.id),
                onRemove: (j) => Ee(b)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Ee(i).length > 0 ? (s(), o("div", sC, [
            e("div", oC, [
              e("span", nC, "Queued (" + a(Ee(i).length) + ")", 1)
            ]),
            e("div", aC, [
              (s(!0), o(W, null, ae(Ee(i), (F) => (s(), S(is, {
                key: F.id,
                item: F,
                onCancel: (j) => G(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Ee(p).length > 0 ? (s(), o("div", lC, [
            e("div", iC, [
              e("span", rC, "Completed (" + a(Ee(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: Q[3] || (Q[3] = //@ts-ignore
                (...F) => Ee(L) && Ee(L)(...F))
              }, "Clear")
            ]),
            e("div", dC, [
              (s(!0), o(W, null, ae(Ee(p).slice(0, 3), (F) => (s(), S(is, {
                key: F.id,
                item: F,
                onRemove: (j) => Ee(b)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Ee(f).length > 0 ? (s(), o("div", cC, [
            e("div", uC, [
              e("span", mC, "Failed (" + a(Ee(f).length) + ")", 1)
            ]),
            e("div", vC, [
              (s(!0), o(W, null, ae(Ee(f), (F) => (s(), S(is, {
                key: F.id,
                item: F,
                onRetry: (j) => Ee(y)(F.id),
                onRemove: (j) => Ee(b)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", j$, [
          e("div", K$, [
            e("div", {
              class: "progress-fill",
              style: It({ width: `${I.value}%` })
            }, null, 4)
          ]),
          Ee(n) ? (s(), o("div", H$, [
            e("span", q$, a(Ee(n).filename), 1),
            e("span", Y$, a(C(Ee(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), pC = /* @__PURE__ */ le(fC, [["__scopeId", "data-v-60751cfa"]]), gC = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', hC = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', yC = {
  comfy: gC,
  phosphor: hC
}, Ns = "comfy", _o = "comfygit-theme";
let Bt = null, $o = Ns;
function wC() {
  try {
    const t = localStorage.getItem(_o);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Ns;
}
function Co(t = Ns) {
  Bt && Bt.remove(), Bt = document.createElement("style"), Bt.id = "comfygit-theme-styles", Bt.setAttribute("data-theme", t), Bt.textContent = yC[t], document.head.appendChild(Bt), document.body.setAttribute("data-comfygit-theme", t), $o = t;
  try {
    localStorage.setItem(_o, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function kC() {
  return $o;
}
function bC(t) {
  Co(t);
}
function _C(t) {
  var f;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const p = i[c];
  return p && p.result === "error" && ((f = p.status) == null ? void 0 : f.status_str) === "error" ? (p.status.messages || [])[0] || "Unknown error" : null;
}
const Os = document.createElement("link");
Os.rel = "stylesheet";
Os.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Os);
const $C = wC();
Co($C);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), bC(t);
  },
  getTheme: () => {
    const t = kC();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let ht = null, it = null, us = null, rs = null, Zs = null;
const qt = h(null);
let Bs = "managed", xo = !1;
async function gs() {
  var t;
  if (!((t = Tt) != null && t.api)) return null;
  try {
    const c = await Tt.api.fetchApi("/v2/comfygit/status");
    c.ok && (qt.value = await c.json());
  } catch {
  }
}
async function Is() {
  var t;
  if ((t = Tt) != null && t.api)
    try {
      const c = await Tt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        Bs = n.state, xo = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Es() {
  var c;
  if (Bs === "managed" || !xo) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function CC() {
  if (!qt.value) return !1;
  const t = qt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || qt.value.has_changes;
}
function eo(t) {
  ht && ht.remove(), ht = document.createElement("div"), ht.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", ht.appendChild(c), ht.addEventListener("click", (p) => {
    p.target === ht && xs();
  });
  const n = (p) => {
    p.key === "Escape" && (xs(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Ts({
    render: () => Ds(b$, {
      initialView: t,
      onClose: xs,
      onStatusUpdate: async (p) => {
        qt.value = p, ms(), await Is(), Ps(), Es();
      }
    })
  }).mount(c), document.body.appendChild(ht);
}
function xs() {
  ht && (ht.remove(), ht = null);
}
function xC(t) {
  ds(), it = document.createElement("div"), it.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  it.style.position = "fixed", it.style.top = `${c.bottom + 8}px`, it.style.right = `${window.innerWidth - c.right}px`, it.style.zIndex = "10001";
  const n = (p) => {
    it && !it.contains(p.target) && p.target !== t && (ds(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (p) => {
    p.key === "Escape" && (ds(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), us = Ts({
    render: () => Ds(wo, {
      status: qt.value,
      onClose: ds,
      onCommitted: (p) => {
        ds(), SC(p.success, p.message), gs().then(ms);
      }
    })
  }), us.mount(it), document.body.appendChild(it);
}
function ds() {
  us && (us.unmount(), us = null), it && (it.remove(), it = null);
}
function SC(t, c) {
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
  const p = document.createElement("span");
  p.textContent = t ? "✓" : "✕", p.style.cssText = `
    color: ${i};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(p);
  const f = document.createElement("span");
  f.textContent = c, n.appendChild(f), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function IC() {
  rs || (rs = document.createElement("div"), rs.className = "comfygit-download-queue-root", Zs = Ts({
    render: () => Ds(pC)
  }), Zs.mount(rs), document.body.appendChild(rs), console.log("[ComfyGit] Model download queue mounted"));
}
let ut = null;
function ms() {
  if (!ut) return;
  const t = ut.querySelector(".commit-indicator");
  t && (t.style.display = CC() ? "block" : "none");
}
function Ps() {
  if (!ut) return;
  const t = Bs !== "managed";
  ut.disabled = t, ut.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
Tt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, f;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = eo, ut = document.createElement("button"), ut.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ut.innerHTML = 'Commit <span class="commit-indicator"></span>', ut.title = "Quick Commit", ut.onclick = () => xC(ut), t.appendChild(c), t.appendChild(ut), (f = (p = Tt.menu) == null ? void 0 : p.settingsGroup) != null && f.element && (Tt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), IC();
    const { loadPendingDownloads: n } = vs();
    n(), await Promise.all([gs(), Is()]), ms(), Ps(), Es(), setTimeout(Es, 100), setInterval(async () => {
      await Promise.all([gs(), Is()]), ms(), Ps();
    }, 3e4);
    const i = Tt.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((y) => {
          (y.startsWith("workflow:") || y.startsWith("Comfy.OpenWorkflowsPaths:") || y.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(y);
        }), window.location.reload();
      }, m = function() {
        const y = document.createElement("div");
        y.style.cssText = `
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
        k.textContent = "Workflows updated - refresh required", y.appendChild(k);
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
        `, _.onmouseover = () => _.style.background = "var(--comfy-input-bg)", _.onmouseout = () => _.style.background = "var(--comfy-menu-bg)", _.onclick = () => u(), y.appendChild(_);
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
        `, b.onmouseover = () => b.style.opacity = "1", b.onmouseout = () => b.style.opacity = "0.6", b.onclick = () => y.remove(), y.appendChild(b), document.body.appendChild(y), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(y) {
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
        const L = document.createElement("div");
        L.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const D = document.createElement("div");
        D.textContent = "Node installation failed", D.style.cssText = "font-weight: 600; color: #e53935;", L.appendChild(D);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", L.appendChild($), _.appendChild(L);
        const I = document.createElement("button");
        I.textContent = "View Logs", I.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, I.onmouseover = () => I.style.background = "#c62828", I.onmouseout = () => I.style.background = "#e53935", I.onclick = () => {
          _.remove(), eo("debug-env");
        }, _.appendChild(I);
        const G = document.createElement("button");
        G.textContent = "×", G.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, G.onmouseover = () => G.style.opacity = "1", G.onmouseout = () => G.style.opacity = "0.6", G.onclick = () => _.remove(), _.appendChild(G), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", y), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && _.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (y) => {
        const { change_type: k, workflow_name: _ } = y.detail;
        console.log(`[ComfyGit] Workflow ${k}: ${_}`), await gs(), ms();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      i.addEventListener("status", async (y) => {
        const k = y.detail != null;
        k && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : m()), v = k;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (y) => {
        const k = _C(y.detail);
        k && d(k);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
