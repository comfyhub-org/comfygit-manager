import { app as rt } from "../../scripts/app.js";
import { defineComponent as J, createElementBlock as s, openBlock as o, createCommentVNode as u, createElementVNode as e, renderSlot as ue, createBlock as x, resolveDynamicComponent as Ut, normalizeClass as se, withCtx as i, toDisplayString as a, createVNode as g, createTextVNode as y, computed as B, Fragment as H, renderList as oe, normalizeStyle as Qe, ref as b, onMounted as _e, watch as Bt, Teleport as Se, withModifiers as ke, Transition as ho, createSlots as Mt, withKeys as Je, onUnmounted as yo, reactive as Qt, readonly as wo, unref as me, withDirectives as at, vModelText as Yt, nextTick as ko, vModelSelect as Lt, vModelCheckbox as bo, TransitionGroup as _o, createApp as Pt, h as Vt } from "vue";
const $o = { class: "panel-layout" }, Co = {
  key: 0,
  class: "panel-layout-header"
}, xo = {
  key: 1,
  class: "panel-layout-search"
}, So = { class: "panel-layout-content" }, Io = {
  key: 2,
  class: "panel-layout-footer"
}, Eo = /* @__PURE__ */ J({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (o(), s("div", $o, [
      c.$slots.header ? (o(), s("div", Co, [
        ue(c.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      c.$slots.search ? (o(), s("div", xo, [
        ue(c.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      e("div", So, [
        ue(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), s("div", Io, [
        ue(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), Q = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [r, p] of c)
    n[r] = p;
  return n;
}, Ie = /* @__PURE__ */ Q(Eo, [["__scopeId", "data-v-21565df9"]]), Mo = {
  key: 0,
  class: "panel-title-prefix"
}, zo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Lo = /* @__PURE__ */ J({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (o(), x(Ut(`h${t.level}`), {
      class: se(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", Mo, a(t.prefix), 1)) : (o(), s("span", zo)),
        ue(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), To = /* @__PURE__ */ Q(Lo, [["__scopeId", "data-v-c3875efc"]]), Do = ["title"], Ro = ["width", "height"], No = /* @__PURE__ */ J({
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
      ])], 8, Ro))
    ], 8, Do));
  }
}), Xt = /* @__PURE__ */ Q(No, [["__scopeId", "data-v-6fc7f16d"]]), Oo = { class: "header-left" }, Uo = {
  key: 0,
  class: "header-actions"
}, Bo = /* @__PURE__ */ J({
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
      class: se(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Oo, [
        g(To, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), x(Xt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => c.$emit("info-click"))
        })) : u("", !0)
      ]),
      c.$slots.actions ? (o(), s("div", Uo, [
        ue(c.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Ee = /* @__PURE__ */ Q(Bo, [["__scopeId", "data-v-55a62cd6"]]), Po = {
  key: 0,
  class: "section-title-count"
}, Vo = {
  key: 1,
  class: "section-title-icon"
}, Ao = /* @__PURE__ */ J({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), x(Ut(`h${t.level}`), {
      class: se(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, {
      default: i(() => [
        ue(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Po, "(" + a(t.count) + ")", 1)) : u("", !0),
        t.clickable ? (o(), s("span", Vo, a(t.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ze = /* @__PURE__ */ Q(Ao, [["__scopeId", "data-v-559361eb"]]), Fo = { class: "status-grid" }, Wo = { class: "status-grid__columns" }, Go = { class: "status-grid__column" }, jo = { class: "status-grid__title" }, Ho = { class: "status-grid__column status-grid__column--right" }, qo = { class: "status-grid__title" }, Ko = {
  key: 0,
  class: "status-grid__footer"
}, Jo = /* @__PURE__ */ J({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (o(), s("div", Fo, [
      e("div", Wo, [
        e("div", Go, [
          e("h4", jo, a(t.leftTitle), 1),
          ue(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Ho, [
          e("h4", qo, a(t.rightTitle), 1),
          ue(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (o(), s("div", Ko, [
        ue(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), Qo = /* @__PURE__ */ Q(Jo, [["__scopeId", "data-v-73b7ba3f"]]), Yo = {
  key: 0,
  class: "status-item__icon"
}, Xo = {
  key: 1,
  class: "status-item__count"
}, Zo = { class: "status-item__label" }, es = /* @__PURE__ */ J({
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
    return (r, p) => (o(), s("div", {
      class: se(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", Yo, a(t.icon), 1)) : u("", !0),
      t.count !== void 0 ? (o(), s("span", Xo, a(t.count), 1)) : u("", !0),
      e("span", Zo, a(t.label), 1)
    ], 2));
  }
}), Pe = /* @__PURE__ */ Q(es, [["__scopeId", "data-v-6f929183"]]), ts = { class: "issue-card__header" }, os = { class: "issue-card__icon" }, ss = { class: "issue-card__title" }, ns = {
  key: 0,
  class: "issue-card__content"
}, as = {
  key: 0,
  class: "issue-card__description"
}, ls = {
  key: 1,
  class: "issue-card__items"
}, is = {
  key: 2,
  class: "issue-card__actions"
}, rs = /* @__PURE__ */ J({
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
    return (r, p) => (o(), s("div", {
      class: se(["issue-card", n.value])
    }, [
      e("div", ts, [
        e("span", os, a(t.icon), 1),
        e("h4", ss, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", ns, [
        t.description ? (o(), s("p", as, a(t.description), 1)) : u("", !0),
        ue(r.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      t.items && t.items.length ? (o(), s("div", ls, [
        (o(!0), s(H, null, oe(t.items, (f, h) => (o(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(f), 1)
        ]))), 128))
      ])) : u("", !0),
      r.$slots.actions ? (o(), s("div", is, [
        ue(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ Q(rs, [["__scopeId", "data-v-df6aa348"]]), ds = ["type", "disabled"], cs = {
  key: 0,
  class: "spinner"
}, us = /* @__PURE__ */ J({
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
      class: se(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", cs)) : u("", !0),
      t.loading ? u("", !0) : ue(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, ds));
  }
}), Z = /* @__PURE__ */ Q(us, [["__scopeId", "data-v-772abe47"]]), ms = { class: "empty-state" }, vs = {
  key: 0,
  class: "empty-icon"
}, fs = { class: "empty-message" }, gs = /* @__PURE__ */ J({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (o(), s("div", ms, [
      t.icon ? (o(), s("div", vs, a(t.icon), 1)) : u("", !0),
      e("p", fs, a(t.message), 1),
      t.actionLabel ? (o(), x(Z, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("action"))
      }, {
        default: i(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ Q(gs, [["__scopeId", "data-v-4466284f"]]), ps = /* @__PURE__ */ J({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: se(["detail-label"]),
      style: Qe({ minWidth: t.minWidth })
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Nt = /* @__PURE__ */ Q(ps, [["__scopeId", "data-v-75e9eeb8"]]), hs = /* @__PURE__ */ J({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: se(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ Q(hs, [["__scopeId", "data-v-2f186e4c"]]), ys = { class: "detail-row" }, ws = /* @__PURE__ */ J({
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
    return (c, n) => (o(), s("div", ys, [
      g(Nt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), x(Ot, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ue(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), pe = /* @__PURE__ */ Q(ws, [["__scopeId", "data-v-ef15664a"]]), ks = { class: "modal-header" }, bs = { class: "modal-body" }, _s = { class: "status-section" }, $s = {
  key: 0,
  class: "status-section"
}, Cs = { class: "section-header-row" }, xs = {
  key: 0,
  class: "workflow-group"
}, Ss = { class: "workflow-group-header" }, Is = { class: "workflow-group-title" }, Es = { class: "workflow-list" }, Ms = { class: "workflow-name" }, zs = { class: "workflow-issue" }, Ls = {
  key: 1,
  class: "workflow-group"
}, Ts = { class: "workflow-group-header" }, Ds = { class: "workflow-group-title" }, Rs = { class: "workflow-list" }, Ns = { class: "workflow-name" }, Os = { class: "workflow-issue" }, Us = {
  key: 2,
  class: "workflow-group"
}, Bs = { class: "workflow-group-header" }, Ps = { class: "workflow-group-title" }, Vs = { class: "workflow-list" }, As = { class: "workflow-name" }, Fs = {
  key: 3,
  class: "workflow-group"
}, Ws = { class: "workflow-group-header" }, Gs = { class: "workflow-group-title" }, js = { class: "workflow-list" }, Hs = { class: "workflow-name" }, qs = {
  key: 4,
  class: "workflow-group"
}, Ks = { class: "workflow-group-header" }, Js = { class: "workflow-group-title" }, Qs = { class: "workflow-list" }, Ys = { class: "workflow-name" }, Xs = {
  key: 5,
  class: "workflow-group"
}, Zs = { class: "workflow-group-title" }, en = { class: "expand-icon" }, tn = {
  key: 0,
  class: "workflow-list"
}, on = { class: "workflow-name" }, sn = {
  key: 1,
  class: "status-section"
}, nn = {
  key: 0,
  class: "change-group"
}, an = { class: "change-group-header" }, ln = { class: "change-group-title" }, rn = { class: "change-list" }, dn = { class: "node-name" }, cn = {
  key: 0,
  class: "dev-badge"
}, un = {
  key: 1,
  class: "change-group"
}, mn = { class: "change-group-header" }, vn = { class: "change-group-title" }, fn = { class: "change-list" }, gn = { class: "node-name" }, pn = {
  key: 0,
  class: "dev-badge"
}, hn = {
  key: 2,
  class: "change-group"
}, yn = { class: "change-list" }, wn = { class: "change-item" }, kn = { class: "node-name" }, bn = {
  key: 3,
  class: "change-group"
}, _n = {
  key: 2,
  class: "status-section"
}, $n = { class: "section-header-row" }, Cn = {
  key: 0,
  class: "drift-item"
}, xn = { class: "drift-list" }, Sn = {
  key: 0,
  class: "drift-list-more"
}, In = {
  key: 1,
  class: "drift-item"
}, En = { class: "drift-list" }, Mn = {
  key: 0,
  class: "drift-list-more"
}, zn = {
  key: 2,
  class: "drift-item"
}, Ln = {
  key: 3,
  class: "drift-item"
}, Tn = {
  key: 3,
  class: "status-section"
}, Dn = { class: "info-box" }, Rn = { class: "drift-list" }, Nn = {
  key: 0,
  class: "drift-list-more"
}, On = {
  key: 4,
  class: "status-section"
}, Un = { class: "warning-box" }, Bn = {
  key: 5,
  class: "empty-state-inline"
}, Pn = { class: "modal-actions" }, Vn = /* @__PURE__ */ J({
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
    }), Bt(() => c.show, (E, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", E);
    }, { immediate: !0 });
    const r = B(() => {
      var E, C, z;
      return ((z = (C = (E = c.status) == null ? void 0 : E.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : z.filter(
        (w) => w.status === "broken" && w.sync_state === "synced"
      )) || [];
    }), p = B(() => {
      var E, C, z;
      return ((z = (C = (E = c.status) == null ? void 0 : E.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : z.filter(
        (w) => w.status === "broken" && w.sync_state !== "synced"
      )) || [];
    }), f = B(() => {
      var E, C, z;
      return ((z = (C = (E = c.status) == null ? void 0 : E.workflows) == null ? void 0 : C.synced) == null ? void 0 : z.filter((w) => {
        var _, T, N;
        const k = (N = (T = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : T.analyzed) == null ? void 0 : N.find((U) => U.name === w);
        return !k || k.status !== "broken";
      })) || [];
    }), h = B(() => {
      var E, C, z, w, k;
      return (E = c.status) != null && E.workflows ? (((C = c.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((z = c.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((w = c.status.workflows.deleted) == null ? void 0 : w.length) ?? 0) > 0 || (((k = c.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), m = B(() => {
      var C, z, w;
      const E = (C = c.status) == null ? void 0 : C.git_changes;
      return E ? (((z = E.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((w = E.nodes_removed) == null ? void 0 : w.length) ?? 0) > 0 || E.workflow_changes || E.has_other_changes : !1;
    }), l = B(() => {
      var E, C, z, w, k, _;
      return !h.value && !m.value && ((C = (E = c.status) == null ? void 0 : E.comparison) == null ? void 0 : C.is_synced) && (((z = c.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((_ = (k = (w = c.status) == null ? void 0 : w.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : _.length) ?? 0) === 0;
    }), v = B(() => {
      var C, z;
      const E = (z = (C = c.status) == null ? void 0 : C.git_changes) == null ? void 0 : z.workflow_changes;
      return E ? typeof E == "number" ? E : Object.keys(E).length : 0;
    });
    function $(E) {
      return typeof E == "string" ? E : E.name;
    }
    function d(E) {
      return typeof E == "object" && E.is_development === !0;
    }
    return (E, C) => {
      var z, w, k, _, T, N, U, j, P, L, V, M, S, F, W, Y, le, G, te, O, R, ne;
      return o(), x(Se, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[6] || (C[6] = (X) => E.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[5] || (C[5] = ke(() => {
            }, ["stop"]))
          }, [
            e("div", ks, [
              C[7] || (C[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (X) => E.$emit("close"))
              }, "✕")
            ]),
            e("div", bs, [
              e("div", _s, [
                g(ze, { level: "4" }, {
                  default: i(() => [...C[8] || (C[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                g(pe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), s("div", $s, [
                e("div", Cs, [
                  g(ze, { level: "4" }, {
                    default: i(() => [...C[9] || (C[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (X) => E.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", xs, [
                  e("div", Ss, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Is, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", Es, [
                    (o(!0), s(H, null, oe(r.value, (X) => (o(), s("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ms, a(X.name), 1),
                      e("span", zs, a(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                p.value.length ? (o(), s("div", Ls, [
                  e("div", Ts, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ds, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", Rs, [
                    (o(!0), s(H, null, oe(p.value, (X) => (o(), s("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ns, a(X.name), 1),
                      e("span", Os, a(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (w = (z = t.status.workflows) == null ? void 0 : z.new) != null && w.length ? (o(), s("div", Us, [
                  e("div", Bs, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ps, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Vs, [
                    (o(!0), s(H, null, oe(t.status.workflows.new, (X) => (o(), s("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", As, a(X), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (_ = (k = t.status.workflows) == null ? void 0 : k.modified) != null && _.length ? (o(), s("div", Fs, [
                  e("div", Ws, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Gs, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", js, [
                    (o(!0), s(H, null, oe(t.status.workflows.modified, (X) => (o(), s("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Hs, a(X), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (N = (T = t.status.workflows) == null ? void 0 : T.deleted) != null && N.length ? (o(), s("div", qs, [
                  e("div", Ks, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Js, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Qs, [
                    (o(!0), s(H, null, oe(t.status.workflows.deleted, (X) => (o(), s("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Ys, a(X), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                f.value.length ? (o(), s("div", Xs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (X) => n.value = !n.value)
                  }, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Zs, "SYNCED (" + a(f.value.length) + ")", 1),
                    e("span", en, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", tn, [
                    (o(!0), s(H, null, oe(f.value, (X) => (o(), s("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", on, a(X), 1)
                    ]))), 128))
                  ])) : u("", !0)
                ])) : u("", !0)
              ])) : u("", !0),
              m.value ? (o(), s("div", sn, [
                g(ze, { level: "4" }, {
                  default: i(() => [...C[16] || (C[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (j = (U = t.status.git_changes) == null ? void 0 : U.nodes_added) != null && j.length ? (o(), s("div", nn, [
                  e("div", an, [
                    C[17] || (C[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", ln, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", rn, [
                    (o(!0), s(H, null, oe(t.status.git_changes.nodes_added, (X) => (o(), s("div", {
                      key: $(X),
                      class: "change-item"
                    }, [
                      e("span", dn, a($(X)), 1),
                      d(X) ? (o(), s("span", cn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (L = (P = t.status.git_changes) == null ? void 0 : P.nodes_removed) != null && L.length ? (o(), s("div", un, [
                  e("div", mn, [
                    C[18] || (C[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", vn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", fn, [
                    (o(!0), s(H, null, oe(t.status.git_changes.nodes_removed, (X) => (o(), s("div", {
                      key: $(X),
                      class: "change-item"
                    }, [
                      e("span", gn, a($(X)), 1),
                      d(X) ? (o(), s("span", pn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (V = t.status.git_changes) != null && V.workflow_changes ? (o(), s("div", hn, [
                  C[19] || (C[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", yn, [
                    e("div", wn, [
                      e("span", kn, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : u("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (o(), s("div", bn, [...C[20] || (C[20] = [
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
              (S = t.status.comparison) != null && S.is_synced ? u("", !0) : (o(), s("div", _n, [
                e("div", $n, [
                  g(ze, { level: "4" }, {
                    default: i(() => [...C[21] || (C[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[3] || (C[3] = (X) => E.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                C[22] || (C[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (W = (F = t.status.comparison) == null ? void 0 : F.missing_nodes) != null && W.length ? (o(), s("div", Cn, [
                  g(pe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", xn, [
                    (o(!0), s(H, null, oe(t.status.comparison.missing_nodes.slice(0, 10), (X) => (o(), s("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + a(X), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", Sn, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (le = (Y = t.status.comparison) == null ? void 0 : Y.extra_nodes) != null && le.length ? (o(), s("div", In, [
                  g(pe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", En, [
                    (o(!0), s(H, null, oe(t.status.comparison.extra_nodes.slice(0, 10), (X) => (o(), s("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + a(X), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Mn, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (te = (G = t.status.comparison) == null ? void 0 : G.version_mismatches) != null && te.length ? (o(), s("div", zn, [
                  g(pe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : u("", !0),
                (O = t.status.comparison) != null && O.packages_in_sync ? u("", !0) : (o(), s("div", Ln, [
                  g(pe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ne = (R = t.status.comparison) == null ? void 0 : R.disabled_nodes) != null && ne.length ? (o(), s("div", Tn, [
                g(ze, { level: "4" }, {
                  default: i(() => [...C[23] || (C[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Dn, [
                  C[24] || (C[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Rn, [
                  (o(!0), s(H, null, oe(t.status.comparison.disabled_nodes.slice(0, 10), (X) => (o(), s("div", {
                    key: X,
                    class: "drift-list-item"
                  }, " • " + a(X), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", Nn, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : u("", !0)
                ])
              ])) : u("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", On, [
                g(ze, { level: "4" }, {
                  default: i(() => [...C[25] || (C[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Un, [
                  C[26] || (C[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[27] || (C[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : u("", !0),
              l.value ? (o(), s("div", Bn, [...C[28] || (C[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : u("", !0)
            ]),
            e("div", Pn, [
              g(Z, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (X) => E.$emit("close"))
              }, {
                default: i(() => [...C[29] || (C[29] = [
                  y(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), An = /* @__PURE__ */ Q(Vn, [["__scopeId", "data-v-c67eed17"]]), Fn = { class: "health-section-header" }, Wn = { class: "suggestions-content" }, Gn = { class: "suggestions-text" }, jn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, Hn = /* @__PURE__ */ J({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: c }) {
    const n = t, r = b(!1), p = b(!1);
    function f() {
      r.value = !0;
    }
    function h() {
      r.value = !1, l("view-workflows");
    }
    function m() {
      r.value = !1, l("view-nodes");
    }
    const l = c, v = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), $ = B(() => n.status.has_changes), d = B(() => {
      const P = n.status.git_changes;
      return P.nodes_added.length > 0 || P.nodes_removed.length > 0 || P.workflow_changes;
    }), E = B(() => n.status.has_changes || v.value), C = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), z = B(() => n.status.git_changes.has_other_changes), w = B(() => {
      var P;
      return ((P = n.status.workflows.analyzed) == null ? void 0 : P.filter((L) => L.status === "broken")) || [];
    }), k = B(() => {
      var P;
      return ((P = n.status.workflows.analyzed) == null ? void 0 : P.filter(
        (L) => L.has_path_sync_issues && !L.has_issues
      )) || [];
    }), _ = B(() => w.value.length > 0), T = B(() => _.value || k.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), N = B(() => {
      const P = [];
      return n.status.workflows.new.length > 0 && P.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && P.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && P.push(`${n.status.workflows.deleted.length} deleted`), P.length > 0 ? `${P.join(", ")} workflow${P.length === 1 && !P[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), U = B(() => {
      var V, M;
      const P = [], L = n.status.comparison;
      return (V = L.missing_nodes) != null && V.length && P.push(`${L.missing_nodes.length} missing node${L.missing_nodes.length === 1 ? "" : "s"}`), (M = L.extra_nodes) != null && M.length && P.push(`${L.extra_nodes.length} untracked node${L.extra_nodes.length === 1 ? "" : "s"}`), P.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${P.join(" and ")}.`;
    }), j = B(() => {
      var V, M;
      const P = [], L = n.status.comparison;
      return (V = L.extra_nodes) != null && V.length && (L.extra_nodes.slice(0, 3).forEach((S) => {
        P.push(`Untracked: ${S}`);
      }), L.extra_nodes.length > 3 && P.push(`...and ${L.extra_nodes.length - 3} more untracked`)), (M = L.missing_nodes) != null && M.length && (L.missing_nodes.slice(0, 3).forEach((S) => {
        P.push(`Missing: ${S}`);
      }), L.missing_nodes.length > 3 && P.push(`...and ${L.missing_nodes.length - 3} more missing`)), P;
    });
    return (P, L) => (o(), s(H, null, [
      g(Ie, null, {
        header: i(() => [
          g(Ee, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: L[1] || (L[1] = (V) => p.value = !0),
            onMouseleave: L[2] || (L[2] = (V) => p.value = !1)
          }, [
            e("div", Fn, [
              g(ze, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...L[9] || (L[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g(ho, { name: "fade" }, {
                default: i(() => [
                  p.value ? (o(), x(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: i(() => [...L[10] || (L[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : u("", !0)
                ]),
                _: 1
              })
            ]),
            g(Qo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Mt({
              left: i(() => [
                t.status.workflows.new.length ? (o(), x(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.modified.length ? (o(), x(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.deleted.length ? (o(), x(Pe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : u("", !0),
                g(Pe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: v.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (o(), x(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), x(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.workflow_changes ? (o(), x(Pe, {
                  key: 2,
                  icon: "●",
                  count: C.value,
                  label: C.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : u("", !0),
                z.value ? (o(), x(Pe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : u("", !0),
                $.value && !d.value && !z.value ? (o(), x(Pe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : u("", !0),
                $.value ? u("", !0) : (o(), x(Pe, {
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
                fn: i(() => [
                  L[12] || (L[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Wn, [
                    e("span", Gn, a(N.value), 1),
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: L[0] || (L[0] = (V) => P.$emit("commit-changes"))
                    }, {
                      default: i(() => [...L[11] || (L[11] = [
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
          t.status.is_detached_head ? (o(), x(lt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: L[3] || (L[3] = (V) => P.$emit("create-branch"))
              }, {
                default: i(() => [...L[13] || (L[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : u("", !0),
          T.value ? (o(), s("div", jn, [
            g(ze, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...L[14] || (L[14] = [
                y(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            w.value.length > 0 ? (o(), x(lt, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: w.value.map((V) => `${V.name} — ${V.issue_summary}`)
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[4] || (L[4] = (V) => P.$emit("view-workflows"))
                }, {
                  default: i(() => [...L[15] || (L[15] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            k.value.length > 0 ? (o(), x(lt, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: k.value.map((V) => `${V.name} — ${V.models_needing_path_sync_count} model path${V.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[5] || (L[5] = (V) => P.$emit("view-workflows"))
                }, {
                  default: i(() => [...L[16] || (L[16] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            t.status.missing_models_count > 0 && !_.value ? (o(), x(lt, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[6] || (L[6] = (V) => P.$emit("view-workflows"))
                }, {
                  default: i(() => [...L[17] || (L[17] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : u("", !0),
            t.status.comparison.is_synced ? u("", !0) : (o(), x(lt, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: U.value,
              items: j.value
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "secondary",
                  size: "sm",
                  onClick: f
                }, {
                  default: i(() => [...L[18] || (L[18] = [
                    y(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                g(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[7] || (L[7] = (V) => P.$emit("view-nodes"))
                }, {
                  default: i(() => [...L[19] || (L[19] = [
                    y(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : u("", !0),
          !T.value && !E.value ? (o(), x(Oe, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : u("", !0)
        ]),
        _: 1
      }),
      g(An, {
        show: r.value,
        status: t.status,
        onClose: L[8] || (L[8] = (V) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), qn = /* @__PURE__ */ Q(Hn, [["__scopeId", "data-v-698b3f43"]]), Kn = ["type", "value", "placeholder", "disabled"], Jn = /* @__PURE__ */ J({
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
    const r = t, p = n, f = b(null);
    function h(m) {
      const l = m.target.value;
      p("update:modelValue", l);
    }
    return _e(() => {
      r.autoFocus && f.value && f.value.focus();
    }), c({
      focus: () => {
        var m;
        return (m = f.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = f.value) == null ? void 0 : m.blur();
      }
    }), (m, l) => (o(), s("input", {
      ref_key: "inputRef",
      ref: f,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: se(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        l[0] || (l[0] = Je((v) => m.$emit("enter"), ["enter"])),
        l[1] || (l[1] = Je((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (v) => m.$emit("focus")),
      onBlur: l[3] || (l[3] = (v) => m.$emit("blur"))
    }, null, 42, Kn));
  }
}), Et = /* @__PURE__ */ Q(Jn, [["__scopeId", "data-v-0380d08f"]]), Qn = { class: "branch-create-form" }, Yn = { class: "form-actions" }, Xn = /* @__PURE__ */ J({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, r = b(""), p = B(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function f() {
      p.value && (n("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", n("cancel");
    }
    return (m, l) => (o(), s("div", Qn, [
      g(Et, {
        modelValue: r.value,
        "onUpdate:modelValue": l[0] || (l[0] = (v) => r.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: f,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Yn, [
        g(Z, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: f
        }, {
          default: i(() => [...l[1] || (l[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(Z, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: i(() => [...l[2] || (l[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Zn = /* @__PURE__ */ Q(Xn, [["__scopeId", "data-v-7c500394"]]), ea = { class: "branch-list-item__indicator" }, ta = { class: "branch-list-item__name" }, oa = {
  key: 0,
  class: "branch-list-item__actions"
}, sa = {
  key: 0,
  class: "branch-list-item__current-label"
}, na = /* @__PURE__ */ J({
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
      class: se(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, [
      e("span", ea, a(t.isCurrent ? "●" : "○"), 1),
      e("span", ta, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), s("div", oa, [
        ue(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", sa, " current ")) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), aa = /* @__PURE__ */ Q(na, [["__scopeId", "data-v-c6581a24"]]), la = {
  key: 2,
  class: "branch-list"
}, ia = /* @__PURE__ */ J({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const n = c, r = b(!1);
    function p(h) {
      n("create", h), f();
    }
    function f() {
      r.value = !1;
    }
    return (h, m) => (o(), x(Ie, null, {
      header: i(() => [
        g(Ee, { title: "BRANCHES" }, {
          actions: i(() => [
            g(Z, {
              variant: "ghost",
              size: "sm",
              onClick: m[0] || (m[0] = (l) => r.value = !0),
              title: "Create new branch"
            }, {
              default: i(() => [...m[1] || (m[1] = [
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
      content: i(() => [
        r.value ? (o(), x(Zn, {
          key: 0,
          onCreate: p,
          onCancel: f
        })) : u("", !0),
        t.branches.length === 0 ? (o(), x(Oe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", la, [
          (o(!0), s(H, null, oe(t.branches, (l) => (o(), x(aa, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? u("", !0) : (o(), x(Z, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (v) => h.$emit("switch", l.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
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
}), ra = /* @__PURE__ */ Q(ia, [["__scopeId", "data-v-763d6ec4"]]), da = { class: "commit-list" }, ca = /* @__PURE__ */ J({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (o(), s("div", da, [
      ue(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ua = /* @__PURE__ */ Q(ca, [["__scopeId", "data-v-8c5ee761"]]), ma = { class: "commit-hash" }, va = /* @__PURE__ */ J({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = B(() => c.hash.slice(0, c.length));
    return (r, p) => (o(), s("span", ma, a(n.value), 1));
  }
}), Zt = /* @__PURE__ */ Q(va, [["__scopeId", "data-v-7c333cc6"]]), fa = { class: "commit-message" }, ga = { class: "commit-date" }, pa = /* @__PURE__ */ J({
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
    function p() {
      n.clickable && r("click");
    }
    return (f, h) => (o(), s("div", {
      class: se(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      g(Zt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", fa, a(t.message), 1),
      e("span", ga, a(t.relativeDate), 1),
      f.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = ke(() => {
        }, ["stop"]))
      }, [
        ue(f.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), ha = /* @__PURE__ */ Q(pa, [["__scopeId", "data-v-dd7c621b"]]), ya = /* @__PURE__ */ J({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (o(), x(Ie, null, {
      header: i(() => [
        g(Ee, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), x(Oe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), x(ua, { key: 1 }, {
          default: i(() => [
            (o(!0), s(H, null, oe(t.commits, (r) => (o(), x(ha, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (p) => c.$emit("select", r)
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => c.$emit("checkout", r),
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
}), wa = /* @__PURE__ */ Q(ya, [["__scopeId", "data-v-981c3c64"]]), Y1 = [
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
], X1 = {
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
}, ka = [
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
], Z1 = [
  ...ka,
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
function pt() {
  return !1;
}
function Ce() {
  const t = b(!1), c = b(null);
  async function n(K, de) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const A = await window.app.api.fetchApi(K, de);
    if (!A.ok) {
      const ee = await A.json().catch(() => ({}));
      throw new Error(ee.error || ee.message || `Request failed: ${A.status}`);
    }
    return A.json();
  }
  async function r(K = !1) {
    return n(K ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(K, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: K, allow_issues: de })
    });
  }
  async function f(K = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${K}&offset=${de}`);
  }
  async function h(K) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function l(K) {
    return n(`/v2/comfygit/commit/${K}`);
  }
  async function v(K, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: K, force: de })
    });
  }
  async function $(K, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, start_point: de })
    });
  }
  async function d(K, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: K, force: de })
    });
  }
  async function E() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const K = await r();
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
  async function C(K) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: K })
    });
  }
  async function z() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function w(K) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function k() {
    return n("/v2/workspace/environments/create_status");
  }
  async function _(K = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${K}`);
  }
  async function T(K) {
    return n(`/v2/workspace/environments/${K}`, {
      method: "DELETE"
    });
  }
  async function N(K = !1) {
    try {
      return n(K ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await r(K), A = [];
      return de.workflows.new.forEach((D) => {
        A.push({ name: D, status: "new", missing_nodes: 0, missing_models: 0, path: D });
      }), de.workflows.modified.forEach((D) => {
        A.push({ name: D, status: "modified", missing_nodes: 0, missing_models: 0, path: D });
      }), de.workflows.synced.forEach((D) => {
        A.push({ name: D, status: "synced", missing_nodes: 0, missing_models: 0, path: D });
      }), A;
    }
  }
  async function U(K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/details`);
  }
  async function j(K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/resolve`, {
      method: "POST"
    });
  }
  async function P(K, de, A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: A })
    });
  }
  async function L(K, de, A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: A })
    });
  }
  async function V() {
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
  async function S(K) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(K)}`);
  }
  async function F(K) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function W(K, de) {
    return n(`/v2/workspace/models/${K}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function Y(K, de) {
    return n(`/v2/workspace/models/${K}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function le(K) {
    return n(`/v2/workspace/models/${K}`, {
      method: "DELETE"
    });
  }
  async function G(K) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function te() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function O() {
    return n("/v2/workspace/models/directory");
  }
  async function R(K) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function ne() {
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
  async function X(K) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function $e(K, de) {
    try {
      const A = new URLSearchParams();
      return K && A.append("level", K), de && A.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${A}`);
    } catch {
      return [];
    }
  }
  async function ae(K, de) {
    try {
      const A = new URLSearchParams();
      return K && A.append("level", K), de && A.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${A}`);
    } catch {
      return [];
    }
  }
  async function Xe() {
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
  async function he(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/track-dev`, {
      method: "POST"
    });
  }
  async function mt(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/install`, {
      method: "POST"
    });
  }
  async function vt(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/update`, {
      method: "POST"
    });
  }
  async function ft(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}`, {
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
  async function Ke(K, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, url: de })
    });
  }
  async function Ae(K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function Ue(K, de, A) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: A })
    });
  }
  async function gt(K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/fetch`, {
      method: "POST"
    });
  }
  async function fe(K) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/status`);
    } catch {
      return null;
    }
  }
  async function Be(K = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: K,
        remove_extra_nodes: de
      })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: r,
    commit: p,
    getHistory: f,
    exportEnv: h,
    // Git Operations
    getBranches: m,
    getCommitDetail: l,
    checkout: v,
    createBranch: $,
    switchBranch: d,
    // Environment Management
    getEnvironments: E,
    switchEnvironment: C,
    getSwitchProgress: z,
    createEnvironment: w,
    getCreateProgress: k,
    getComfyUIReleases: _,
    deleteEnvironment: T,
    // Workflow Management
    getWorkflows: N,
    getWorkflowDetails: U,
    resolveWorkflow: j,
    installWorkflowDeps: P,
    setModelImportance: L,
    // Model Management
    getEnvironmentModels: V,
    getWorkspaceModels: M,
    getModelDetails: S,
    openFileLocation: F,
    addModelSource: W,
    removeModelSource: Y,
    deleteModel: le,
    downloadModel: G,
    scanWorkspaceModels: te,
    getModelsDirectory: O,
    setModelsDirectory: R,
    // Settings
    getConfig: ne,
    updateConfig: X,
    // Debug/Logs
    getEnvironmentLogs: $e,
    getWorkspaceLogs: ae,
    // Node Management
    getNodes: Xe,
    trackNodeAsDev: he,
    installNode: mt,
    updateNode: vt,
    uninstallNode: ft,
    // Git Remotes
    getRemotes: we,
    addRemote: Ke,
    removeRemote: Ae,
    updateRemoteUrl: Ue,
    fetchRemote: gt,
    getRemoteSyncStatus: fe,
    // Environment Sync
    syncEnvironmentManually: Be
  };
}
const ba = { class: "base-modal-header" }, _a = {
  key: 0,
  class: "base-modal-title"
}, $a = { class: "base-modal-body" }, Ca = {
  key: 0,
  class: "base-modal-loading"
}, xa = {
  key: 1,
  class: "base-modal-error"
}, Sa = {
  key: 0,
  class: "base-modal-footer"
}, Ia = /* @__PURE__ */ J({
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
    function p() {
      n.closeOnOverlayClick && r("close");
    }
    function f(h) {
      h.key === "Escape" && r("close");
    }
    return _e(() => {
      document.addEventListener("keydown", f), document.body.style.overflow = "hidden";
    }), yo(() => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    }), (h, m) => (o(), x(Se, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: se(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", ba, [
            ue(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", _a, a(t.title), 1)) : u("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (l) => h.$emit("close"))
            }, [...m[2] || (m[2] = [
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
          e("div", $a, [
            t.loading ? (o(), s("div", Ca, "Loading...")) : t.error ? (o(), s("div", xa, a(t.error), 1)) : ue(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", Sa, [
            ue(h.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), Ye = /* @__PURE__ */ Q(Ia, [["__scopeId", "data-v-2125a0e6"]]), Ea = ["type", "disabled"], Ma = {
  key: 0,
  class: "spinner"
}, za = /* @__PURE__ */ J({
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
      class: se(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Ma)) : u("", !0),
      ue(c.$slots, "default", {}, void 0, !0)
    ], 10, Ea));
  }
}), ie = /* @__PURE__ */ Q(za, [["__scopeId", "data-v-f3452606"]]), La = {
  key: 0,
  class: "base-title-count"
}, Ta = /* @__PURE__ */ J({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (o(), x(Ut(`h${t.level}`), {
      class: se(["base-title", t.variant])
    }, {
      default: i(() => [
        ue(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", La, "(" + a(t.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bt = /* @__PURE__ */ Q(Ta, [["__scopeId", "data-v-5a01561d"]]), Da = ["value", "disabled"], Ra = {
  key: 0,
  value: "",
  disabled: ""
}, Na = ["value"], Oa = {
  key: 0,
  class: "base-select-error"
}, Ua = /* @__PURE__ */ J({
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
    return (r, p) => (o(), s("div", {
      class: se(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: se(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (f) => r.$emit("update:modelValue", f.target.value))
      }, [
        t.placeholder ? (o(), s("option", Ra, a(t.placeholder), 1)) : u("", !0),
        (o(!0), s(H, null, oe(t.options, (f) => (o(), s("option", {
          key: c(f),
          value: c(f)
        }, a(n(f)), 9, Na))), 128))
      ], 42, Da),
      t.error ? (o(), s("span", Oa, a(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Ba = /* @__PURE__ */ Q(Ua, [["__scopeId", "data-v-7436d745"]]), Pa = { class: "popover-header" }, Va = { class: "popover-title" }, Aa = { class: "popover-content" }, Fa = {
  key: 0,
  class: "popover-actions"
}, Wa = /* @__PURE__ */ J({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (o(), x(Se, { to: "body" }, [
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
          e("div", Pa, [
            e("h4", Va, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Aa, [
            ue(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), s("div", Fa, [
            ue(c.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), je = /* @__PURE__ */ Q(Wa, [["__scopeId", "data-v-42815ace"]]), Ga = { class: "detail-section" }, ja = {
  key: 0,
  class: "empty-message"
}, Ha = { class: "model-header" }, qa = { class: "model-name" }, Ka = { class: "model-details" }, Ja = { class: "model-row" }, Qa = { class: "model-row" }, Ya = { class: "label" }, Xa = {
  key: 0,
  class: "model-row model-row-nodes"
}, Za = { class: "node-list" }, el = ["onClick"], tl = {
  key: 1,
  class: "model-row"
}, ol = { class: "value" }, sl = {
  key: 0,
  class: "model-actions"
}, nl = { class: "detail-section" }, al = {
  key: 0,
  class: "empty-message"
}, ll = { class: "node-name" }, il = {
  key: 0,
  class: "node-version"
}, rl = /* @__PURE__ */ J({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, r = c, { getWorkflowDetails: p, setModelImportance: f, installWorkflowDeps: h } = Ce(), m = b(null), l = b(!1), v = b(null), $ = b(!1), d = b({}), E = b({}), C = b(!1), z = b(/* @__PURE__ */ new Set()), w = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(M) {
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
    function _(M) {
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
    function T(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const S = M.hash || M.filename;
      return z.value.has(S) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function N(M) {
      return z.value.has(M);
    }
    function U(M) {
      z.value.has(M) ? z.value.delete(M) : z.value.add(M), z.value = new Set(z.value);
    }
    async function j() {
      l.value = !0, v.value = null;
      try {
        m.value = await p(n.workflowName);
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function P(M, S) {
      d.value[M] = S, $.value = !0;
    }
    async function L() {
      if (!$.value) {
        r("close");
        return;
      }
      l.value = !0, v.value = null;
      try {
        for (const [M, S] of Object.entries(d.value))
          await f(n.workflowName, M, S);
        r("refresh"), r("close");
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function V(M) {
      E.value[M] = !0, v.value = null;
      try {
        await h(n.workflowName, !0, !1), await j();
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to install node";
      } finally {
        E.value[M] = !1;
      }
    }
    return _e(j), (M, S) => (o(), s(H, null, [
      g(Ye, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: v.value || void 0,
        onClose: S[5] || (S[5] = (F) => r("close"))
      }, {
        body: i(() => [
          m.value ? (o(), s(H, { key: 0 }, [
            e("section", Ga, [
              g(bt, { variant: "section" }, {
                default: i(() => [
                  y("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), s("div", ja, " No models used in this workflow ")) : u("", !0),
              (o(!0), s(H, null, oe(m.value.models, (F) => (o(), s("div", {
                key: F.hash || F.filename,
                class: "model-card"
              }, [
                e("div", Ha, [
                  S[7] || (S[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", qa, a(F.filename), 1)
                ]),
                e("div", Ka, [
                  e("div", Ja, [
                    S[8] || (S[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: se(["value", k(F.status)])
                    }, a(_(F.status)), 3)
                  ]),
                  e("div", Qa, [
                    e("span", Ya, [
                      S[9] || (S[9] = y(" Importance: ", -1)),
                      g(Xt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: S[0] || (S[0] = (W) => C.value = !0)
                      })
                    ]),
                    g(Ba, {
                      "model-value": d.value[F.filename] || F.importance,
                      options: w,
                      "onUpdate:modelValue": (W) => P(F.filename, W)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  F.loaded_by && F.loaded_by.length > 0 ? (o(), s("div", Xa, [
                    S[10] || (S[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Za, [
                      (o(!0), s(H, null, oe(T(F), (W, Y) => (o(), s("div", {
                        key: `${W.node_id}-${Y}`,
                        class: "node-reference"
                      }, a(W.node_type) + " (Node #" + a(W.node_id) + ") ", 1))), 128)),
                      F.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (W) => U(F.hash || F.filename)
                      }, a(N(F.hash || F.filename) ? "▼ Show less" : `▶ View all (${F.loaded_by.length})`), 9, el)) : u("", !0)
                    ])
                  ])) : u("", !0),
                  F.size_mb ? (o(), s("div", tl, [
                    S[11] || (S[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", ol, a(F.size_mb) + " MB", 1)
                  ])) : u("", !0)
                ]),
                F.status !== "available" ? (o(), s("div", sl, [
                  F.status === "downloadable" ? (o(), x(ie, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: S[1] || (S[1] = (W) => r("resolve"))
                  }, {
                    default: i(() => [...S[12] || (S[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : F.status === "path_mismatch" ? (o(), x(ie, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[2] || (S[2] = (W) => r("resolve"))
                  }, {
                    default: i(() => [...S[13] || (S[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), x(ie, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[3] || (S[3] = (W) => r("resolve"))
                  }, {
                    default: i(() => [...S[14] || (S[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : u("", !0)
              ]))), 128))
            ]),
            e("section", nl, [
              g(bt, { variant: "section" }, {
                default: i(() => [
                  y("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), s("div", al, " No custom nodes used in this workflow ")) : u("", !0),
              (o(!0), s(H, null, oe(m.value.nodes, (F) => (o(), s("div", {
                key: F.name,
                class: "node-item"
              }, [
                e("span", {
                  class: se(["node-status", F.status === "installed" ? "installed" : "missing"])
                }, a(F.status === "installed" ? "✓" : "✕"), 3),
                e("span", ll, a(F.name), 1),
                F.version ? (o(), s("span", il, "v" + a(F.version), 1)) : u("", !0),
                F.status === "missing" ? (o(), x(ie, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: E.value[F.name],
                  onClick: (W) => V(F.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...S[15] || (S[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : u("", !0)
              ]))), 128))
            ])
          ], 64)) : u("", !0)
        ]),
        footer: i(() => [
          g(ie, {
            variant: "secondary",
            onClick: S[4] || (S[4] = (F) => r("close"))
          }, {
            default: i(() => [...S[16] || (S[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          $.value ? (o(), x(ie, {
            key: 0,
            variant: "primary",
            onClick: L
          }, {
            default: i(() => [...S[17] || (S[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(je, {
        show: C.value,
        title: "Model Importance Levels",
        onClose: S[6] || (S[6] = (F) => C.value = !1)
      }, {
        content: i(() => [...S[18] || (S[18] = [
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
}), dl = /* @__PURE__ */ Q(rl, [["__scopeId", "data-v-0b14d32e"]]), ve = Qt({
  items: [],
  status: "idle"
});
let Ve = null;
function eo() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Tt(t) {
  return ve.items.find((c) => c.id === t);
}
async function it() {
  if (ve.status === "downloading") return;
  const t = ve.items.find((c) => c.status === "queued");
  if (!t) {
    ve.status = "idle";
    return;
  }
  ve.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await cl(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    ve.status = "idle", it();
  }
}
async function cl(t) {
  return new Promise((c, n) => {
    Ve && (Ve.close(), Ve = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ve = p;
    let f = Date.now(), h = 0, m = !1;
    p.onmessage = (l) => {
      try {
        const v = JSON.parse(l.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const $ = Date.now(), d = ($ - f) / 1e3;
            if (d > 0.5) {
              const E = t.downloaded - h;
              if (t.speed = E / d, f = $, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const C = t.size - t.downloaded;
                t.eta = C / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, p.close(), Ve = null, c();
            break;
          case "error":
            m = !0, p.close(), Ve = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), Ve = null, m || n(new Error("Connection lost"));
    };
  });
}
async function ul() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (ve.items.some((p) => p.url === n.url && p.filename === n.filename))
        continue;
      const r = {
        id: eo(),
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
      ve.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Ct() {
  function t(k) {
    for (const _ of k) {
      if (ve.items.some(
        (U) => U.url === _.url && U.targetPath === _.targetPath && ["queued", "downloading", "paused", "completed"].includes(U.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${_.filename}`);
        continue;
      }
      const N = {
        id: eo(),
        workflow: _.workflow,
        filename: _.filename,
        url: _.url,
        targetPath: _.targetPath,
        size: _.size || 0,
        type: _.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ve.items.push(N);
    }
    ve.status === "idle" && it();
  }
  async function c(k) {
    const _ = Tt(k);
    if (_) {
      if (_.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(_.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ve && (Ve.close(), Ve = null), _.status = "failed", _.error = "Cancelled by user", ve.status = "idle", it();
      } else if (_.status === "queued") {
        const T = ve.items.findIndex((N) => N.id === k);
        T >= 0 && ve.items.splice(T, 1);
      }
    }
  }
  function n(k) {
    const _ = Tt(k);
    !_ || _.status !== "failed" || (_.status = "queued", _.error = void 0, _.progress = 0, _.downloaded = 0, ve.status === "idle" && it());
  }
  function r(k) {
    const _ = Tt(k);
    !_ || _.status !== "paused" || (_.status = "queued", ve.status === "idle" && it());
  }
  function p() {
    const k = ve.items.filter((_) => _.status === "paused");
    for (const _ of k)
      _.status = "queued";
    ve.status === "idle" && it();
  }
  function f(k) {
    const _ = ve.items.findIndex((T) => T.id === k);
    _ >= 0 && ["completed", "failed", "paused"].includes(ve.items[_].status) && ve.items.splice(_, 1);
  }
  function h() {
    ve.items = ve.items.filter((k) => k.status !== "completed");
  }
  function m() {
    ve.items = ve.items.filter((k) => k.status !== "failed");
  }
  const l = B(
    () => ve.items.find((k) => k.status === "downloading")
  ), v = B(
    () => ve.items.filter((k) => k.status === "queued")
  ), $ = B(
    () => ve.items.filter((k) => k.status === "completed")
  ), d = B(
    () => ve.items.filter((k) => k.status === "failed")
  ), E = B(
    () => ve.items.filter((k) => k.status === "paused")
  ), C = B(() => ve.items.length > 0), z = B(
    () => ve.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), w = B(
    () => ve.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: wo(ve),
    // Computed
    currentDownload: l,
    queuedItems: v,
    completedItems: $,
    failedItems: d,
    pausedItems: E,
    hasItems: C,
    activeCount: z,
    hasPaused: w,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: p,
    removeItem: f,
    clearCompleted: h,
    clearFailed: m,
    loadPendingDownloads: ul
  };
}
function ml() {
  const t = b(null), c = b(null), n = b([]), r = b([]), p = b(!1), f = b(null);
  async function h(_, T) {
    var U;
    if (!((U = window.app) != null && U.api))
      throw new Error("ComfyUI API not available");
    const N = await window.app.api.fetchApi(_, T);
    if (!N.ok) {
      const j = await N.json().catch(() => ({})), P = j.error || j.message || `Request failed: ${N.status}`;
      throw new Error(P);
    }
    return N.json();
  }
  async function m(_) {
    p.value = !0, f.value = null;
    try {
      let T;
      return pt() || (T = await h(
        `/v2/comfygit/workflow/${_}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = T, T;
    } catch (T) {
      const N = T instanceof Error ? T.message : "Unknown error occurred";
      throw f.value = N, T;
    } finally {
      p.value = !1;
    }
  }
  async function l(_, T, N) {
    p.value = !0, f.value = null;
    try {
      let U;
      if (!pt()) {
        const j = Object.fromEntries(T), P = Object.fromEntries(N);
        U = await h(
          `/v2/comfygit/workflow/${_}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: j,
              model_choices: P
            })
          }
        );
      }
      return c.value = U, U;
    } catch (U) {
      const j = U instanceof Error ? U.message : "Unknown error occurred";
      throw f.value = j, U;
    } finally {
      p.value = !1;
    }
  }
  async function v(_, T = 10) {
    p.value = !0, f.value = null;
    try {
      let N;
      return pt() || (N = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: _, limit: T })
        }
      )), n.value = N.results, N.results;
    } catch (N) {
      const U = N instanceof Error ? N.message : "Unknown error occurred";
      throw f.value = U, N;
    } finally {
      p.value = !1;
    }
  }
  async function $(_, T = 10) {
    p.value = !0, f.value = null;
    try {
      let N;
      return pt() || (N = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: _, limit: T })
        }
      )), r.value = N.results, N.results;
    } catch (N) {
      const U = N instanceof Error ? N.message : "Unknown error occurred";
      throw f.value = U, N;
    } finally {
      p.value = !1;
    }
  }
  const d = Qt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function E() {
    d.phase = "idle", d.currentFile = void 0, d.currentFileIndex = void 0, d.totalFiles = void 0, d.bytesDownloaded = void 0, d.bytesTotal = void 0, d.completedFiles = [], d.nodesToInstall = [], d.nodesInstalled = [], d.installError = void 0, d.needsRestart = void 0, d.error = void 0;
  }
  async function C(_) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0;
    try {
      let T;
      return pt() || (T = await h(
        `/v2/comfygit/workflow/${_}/install`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), d.nodesInstalled = T.nodes_installed, d.needsRestart = T.nodes_installed.length > 0, T;
    } catch (T) {
      const N = T instanceof Error ? T.message : "Failed to install nodes";
      throw d.installError = N, T;
    }
  }
  async function z(_, T, N) {
    E(), d.phase = "resolving", f.value = null;
    const U = Object.fromEntries(T), j = Object.fromEntries(N);
    try {
      const P = await fetch(`/v2/comfygit/workflow/${_}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: U,
          model_choices: j
        })
      });
      if (!P.ok)
        throw new Error(`Request failed: ${P.status}`);
      if (!P.body)
        throw new Error("No response body");
      const L = P.body.getReader(), V = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: S, value: F } = await L.read();
        if (S) break;
        M += V.decode(F, { stream: !0 });
        const W = M.split(`

`);
        M = W.pop() || "";
        for (const Y of W) {
          if (!Y.trim()) continue;
          const le = Y.split(`
`);
          let G = "", te = "";
          for (const O of le)
            O.startsWith("event: ") ? G = O.slice(7) : O.startsWith("data: ") && (te = O.slice(6));
          if (te)
            try {
              const O = JSON.parse(te);
              w(G, O);
            } catch (O) {
              console.warn("Failed to parse SSE event:", O);
            }
        }
      }
    } catch (P) {
      const L = P instanceof Error ? P.message : "Unknown error occurred";
      throw f.value = L, d.error = L, d.phase = "error", P;
    }
  }
  function w(_, T) {
    switch (_) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = T.total;
        break;
      case "file_start":
        d.currentFile = T.filename, d.currentFileIndex = T.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = T.downloaded, d.bytesTotal = T.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = T.nodes_to_install || [], T.download_results && (d.completedFiles = T.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = T.message, d.phase = "error", f.value = T.message;
        break;
    }
  }
  function k(_, T) {
    const { addToQueue: N } = Ct(), U = T.filter((j) => j.url && j.target_path).map((j) => ({
      workflow: _,
      filename: j.filename,
      url: j.url,
      targetPath: j.target_path,
      size: j.size || 0,
      type: "model"
    }));
    return U.length > 0 && N(U), U.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: r,
    isLoading: p,
    error: f,
    progress: d,
    // Methods
    analyzeWorkflow: m,
    applyResolution: l,
    applyResolutionWithProgress: z,
    installNodes: C,
    searchNodes: v,
    searchModels: $,
    resetProgress: E,
    queueModelDownloads: k
  };
}
const vl = { class: "resolution-stepper" }, fl = { class: "stepper-header" }, gl = ["onClick"], pl = {
  key: 0,
  class: "step-icon"
}, hl = {
  key: 1,
  class: "step-number"
}, yl = { class: "step-label" }, wl = {
  key: 0,
  class: "step-connector"
}, kl = { class: "stepper-content" }, bl = /* @__PURE__ */ J({
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
    function p(v) {
      var $;
      if (($ = n.stepStats) != null && $[v]) {
        const d = n.stepStats[v];
        return d.total > 0 && d.resolved === d.total;
      }
      return n.completedSteps.includes(v);
    }
    function f(v) {
      var $;
      if (($ = n.stepStats) != null && $[v]) {
        const d = n.stepStats[v];
        return d.resolved > 0 && d.resolved < d.total;
      }
      return !1;
    }
    function h(v) {
      return p(v) ? "state-complete" : f(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function l(v) {
      r("step-change", v);
    }
    return (v, $) => (o(), s("div", vl, [
      e("div", fl, [
        (o(!0), s(H, null, oe(t.steps, (d, E) => (o(), s("div", {
          key: d.id,
          class: se(["step", {
            active: t.currentStep === d.id,
            completed: p(d.id),
            "in-progress": f(d.id),
            disabled: m(d.id)
          }]),
          onClick: (C) => l(d.id)
        }, [
          e("div", {
            class: se(["step-indicator", h(d.id)])
          }, [
            p(d.id) ? (o(), s("span", pl, "✓")) : (o(), s("span", hl, a(E + 1), 1))
          ], 2),
          e("div", yl, a(d.label), 1),
          E < t.steps.length - 1 ? (o(), s("div", wl)) : u("", !0)
        ], 10, gl))), 128))
      ]),
      e("div", kl, [
        ue(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), _l = /* @__PURE__ */ Q(bl, [["__scopeId", "data-v-2a7b3af8"]]), $l = /* @__PURE__ */ J({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = B(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), r = B(() => `confidence-${n.value}`), p = B(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (f, h) => (o(), s("span", {
      class: se(["confidence-badge", r.value, t.size])
    }, a(p.value), 3));
  }
}), At = /* @__PURE__ */ Q($l, [["__scopeId", "data-v-17ec4b80"]]), Cl = { class: "node-info" }, xl = { class: "node-info-text" }, Sl = { class: "item-body" }, Il = {
  key: 0,
  class: "resolved-state"
}, El = {
  key: 1,
  class: "multiple-options"
}, Ml = { class: "options-list" }, zl = ["onClick"], Ll = ["name", "value", "checked", "onChange"], Tl = { class: "option-content" }, Dl = { class: "option-header" }, Rl = { class: "option-package-id" }, Nl = {
  key: 0,
  class: "option-title"
}, Ol = { class: "option-meta" }, Ul = {
  key: 0,
  class: "installed-badge"
}, Bl = { class: "action-buttons" }, Pl = {
  key: 2,
  class: "unresolved"
}, Vl = { class: "action-buttons" }, Al = /* @__PURE__ */ J({
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
    const n = t, r = c, p = B(() => !!n.choice);
    B(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.action;
    }), B(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.package_id;
    });
    const f = B(() => {
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
    function h(m) {
      r("option-selected", m);
    }
    return (m, l) => (o(), s("div", {
      class: se(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", Cl, [
        e("span", xl, [
          l[7] || (l[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", Sl, [
        p.value ? (o(), s("div", Il, [
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (v) => r("clear-choice"))
          }, {
            default: i(() => [...l[8] || (l[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", El, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ml, [
            (o(!0), s(H, null, oe(t.options, (v, $) => (o(), s("label", {
              key: v.package_id,
              class: se(["option-card", { selected: t.selectedOptionIndex === $ }]),
              onClick: (d) => h($)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: $,
                checked: t.selectedOptionIndex === $,
                onChange: (d) => h($)
              }, null, 40, Ll),
              e("div", Tl, [
                e("div", Dl, [
                  e("span", Rl, a(v.package_id), 1),
                  g(At, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (o(), s("div", Nl, a(v.title), 1)) : u("", !0),
                e("div", Ol, [
                  v.is_installed ? (o(), s("span", Ul, "Already Installed")) : u("", !0)
                ])
              ])
            ], 10, zl))), 128))
          ]),
          e("div", Bl, [
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (v) => r("search"))
            }, {
              default: i(() => [...l[9] || (l[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...l[10] || (l[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (v) => r("mark-optional"))
            }, {
              default: i(() => [...l[11] || (l[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Pl, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Vl, [
            g(ie, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (v) => r("search"))
            }, {
              default: i(() => [...l[13] || (l[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...l[14] || (l[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (v) => r("mark-optional"))
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
}), Fl = /* @__PURE__ */ Q(Al, [["__scopeId", "data-v-e02629e7"]]), Wl = { class: "item-navigator" }, Gl = { class: "nav-item-info" }, jl = ["title"], Hl = { class: "nav-controls" }, ql = { class: "nav-arrows" }, Kl = ["disabled"], Jl = ["disabled"], Ql = { class: "nav-position" }, Yl = /* @__PURE__ */ J({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (r, p) => (o(), s("div", Wl, [
      e("div", Gl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, jl)
      ]),
      e("div", Hl, [
        e("div", ql, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (f) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Kl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (f) => n("next")),
            title: "Next item"
          }, " → ", 8, Jl)
        ]),
        e("span", Ql, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), to = /* @__PURE__ */ Q(Yl, [["__scopeId", "data-v-74af7920"]]), Xl = ["type", "value", "placeholder", "disabled"], Zl = {
  key: 0,
  class: "base-input-error"
}, ei = /* @__PURE__ */ J({
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
      class: se(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: se(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = Je((r) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Je((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Xl),
      t.error ? (o(), s("span", Zl, a(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ Q(ei, [["__scopeId", "data-v-9ba02cdc"]]), ti = { class: "node-resolution-step" }, oi = { class: "step-header" }, si = { class: "stat-badge" }, ni = {
  key: 1,
  class: "step-body"
}, ai = {
  key: 2,
  class: "empty-state"
}, li = { class: "node-search-modal" }, ii = { class: "node-modal-body" }, ri = {
  key: 0,
  class: "node-search-results"
}, di = ["onClick"], ci = { class: "node-result-header" }, ui = { class: "node-result-package-id" }, mi = {
  key: 0,
  class: "node-result-description"
}, vi = {
  key: 1,
  class: "node-no-results"
}, fi = {
  key: 2,
  class: "node-searching"
}, gi = { class: "node-manual-entry-modal" }, pi = { class: "node-modal-body" }, hi = { class: "node-modal-actions" }, yi = /* @__PURE__ */ J({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = b(0), f = b(!1), h = b(!1), m = b(""), l = b(""), v = b([]), $ = b(!1), d = B(() => n.nodes[p.value]), E = B(() => n.nodes.filter((F) => n.nodeChoices.has(F.node_type)).length), C = B(() => {
      var W;
      if (!d.value) return "not-found";
      const F = n.nodeChoices.get(d.value.node_type);
      if (F)
        switch (F.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (W = d.value.options) != null && W.length ? "ambiguous" : "not-found";
    }), z = B(() => {
      var W;
      if (!d.value) return;
      const F = n.nodeChoices.get(d.value.node_type);
      if (F)
        switch (F.action) {
          case "install":
            return F.package_id ? `→ ${F.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (W = d.value.options) != null && W.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function w(F) {
      F >= 0 && F < n.nodes.length && (p.value = F);
    }
    function k() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function _() {
      d.value && r("skip", d.value.node_type);
    }
    function T(F) {
      d.value && r("option-selected", d.value.node_type, F);
    }
    function N() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function U() {
      d.value && (m.value = d.value.node_type, f.value = !0);
    }
    function j() {
      l.value = "", h.value = !0;
    }
    function P() {
      f.value = !1, m.value = "", v.value = [];
    }
    function L() {
      h.value = !1, l.value = "";
    }
    function V() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function M(F) {
      d.value && (r("manual-entry", d.value.node_type, F.package_id), P());
    }
    function S() {
      !d.value || !l.value.trim() || (r("manual-entry", d.value.node_type, l.value.trim()), L());
    }
    return (F, W) => {
      var Y, le;
      return o(), s("div", ti, [
        e("div", oi, [
          W[4] || (W[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", si, a(E.value) + "/" + a(t.nodes.length) + " resolved", 1)
        ]),
        d.value ? (o(), x(to, {
          key: 0,
          "item-name": d.value.node_type,
          "current-index": p.value,
          "total-items": t.nodes.length,
          onPrev: W[0] || (W[0] = (G) => w(p.value - 1)),
          onNext: W[1] || (W[1] = (G) => w(p.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        d.value ? (o(), s("div", ni, [
          g(Fl, {
            "node-type": d.value.node_type,
            "has-multiple-options": !!((Y = d.value.options) != null && Y.length),
            options: d.value.options,
            choice: (le = t.nodeChoices) == null ? void 0 : le.get(d.value.node_type),
            status: C.value,
            "status-label": z.value,
            onMarkOptional: k,
            onSkip: _,
            onManualEntry: j,
            onSearch: U,
            onOptionSelected: T,
            onClearChoice: N
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", ai, [...W[5] || (W[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), x(Se, { to: "body" }, [
          f.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(P, ["self"])
          }, [
            e("div", li, [
              e("div", { class: "node-modal-header" }, [
                W[6] || (W[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", ii, [
                g(Ne, {
                  modelValue: m.value,
                  "onUpdate:modelValue": W[2] || (W[2] = (G) => m.value = G),
                  placeholder: "Search by node type, package name...",
                  onInput: V
                }, null, 8, ["modelValue"]),
                v.value.length > 0 ? (o(), s("div", ri, [
                  (o(!0), s(H, null, oe(v.value, (G) => (o(), s("div", {
                    key: G.package_id,
                    class: "node-search-result-item",
                    onClick: (te) => M(G)
                  }, [
                    e("div", ci, [
                      e("code", ui, a(G.package_id), 1),
                      G.match_confidence ? (o(), x(At, {
                        key: 0,
                        confidence: G.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : u("", !0)
                    ]),
                    G.description ? (o(), s("div", mi, a(G.description), 1)) : u("", !0)
                  ], 8, di))), 128))
                ])) : m.value && !$.value ? (o(), s("div", vi, ' No packages found matching "' + a(m.value) + '" ', 1)) : u("", !0),
                $.value ? (o(), s("div", fi, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), x(Se, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(L, ["self"])
          }, [
            e("div", gi, [
              e("div", { class: "node-modal-header" }, [
                W[7] || (W[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", pi, [
                g(Ne, {
                  modelValue: l.value,
                  "onUpdate:modelValue": W[3] || (W[3] = (G) => l.value = G),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", hi, [
                  g(ie, {
                    variant: "secondary",
                    onClick: L
                  }, {
                    default: i(() => [...W[8] || (W[8] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(ie, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: S
                  }, {
                    default: i(() => [...W[9] || (W[9] = [
                      y(" Add Package ", -1)
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
}), wi = /* @__PURE__ */ Q(yi, [["__scopeId", "data-v-4fb196b1"]]), ki = { class: "node-info" }, bi = { class: "node-info-text" }, _i = { class: "item-body" }, $i = {
  key: 0,
  class: "resolved-state"
}, Ci = {
  key: 1,
  class: "multiple-options"
}, xi = { class: "options-list" }, Si = ["onClick"], Ii = ["name", "value", "checked", "onChange"], Ei = { class: "option-content" }, Mi = { class: "option-header" }, zi = { class: "option-filename" }, Li = { class: "option-meta" }, Ti = { class: "option-size" }, Di = { class: "option-category" }, Ri = { class: "option-path" }, Ni = { class: "action-buttons" }, Oi = {
  key: 2,
  class: "unresolved"
}, Ui = { class: "action-buttons" }, Bi = /* @__PURE__ */ J({
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
    const n = t, r = c, p = B(() => !!n.choice);
    B(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), B(() => {
      var l, v;
      return ((v = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : v.filename) || "selected";
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
    function h(l) {
      r("option-selected", l);
    }
    function m(l) {
      if (!l) return "Unknown";
      const v = l / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, v) => (o(), s("div", {
      class: se(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", ki, [
        e("span", bi, [
          v[7] || (v[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", _i, [
        p.value ? (o(), s("div", $i, [
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = ($) => r("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Ci, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", xi, [
            (o(!0), s(H, null, oe(t.options, ($, d) => (o(), s("label", {
              key: $.model.hash,
              class: se(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (E) => h(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (E) => h(d)
              }, null, 40, Ii),
              e("div", Ei, [
                e("div", Mi, [
                  e("span", zi, a($.model.filename), 1),
                  g(At, {
                    confidence: $.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Li, [
                  e("span", Ti, a(m($.model.size)), 1),
                  e("span", Di, a($.model.category), 1)
                ]),
                e("div", Ri, a($.model.relative_path), 1)
              ])
            ], 10, Si))), 128))
          ]),
          e("div", Ni, [
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = ($) => r("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = ($) => r("download-url"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = ($) => r("mark-optional"))
            }, {
              default: i(() => [...v[11] || (v[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Oi, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Ui, [
            g(ie, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = ($) => r("search"))
            }, {
              default: i(() => [...v[13] || (v[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = ($) => r("download-url"))
            }, {
              default: i(() => [...v[14] || (v[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = ($) => r("mark-optional"))
            }, {
              default: i(() => [...v[15] || (v[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Pi = /* @__PURE__ */ Q(Bi, [["__scopeId", "data-v-8a82fefa"]]), Vi = { class: "model-resolution-step" }, Ai = { class: "step-header" }, Fi = { class: "step-info" }, Wi = { class: "step-title" }, Gi = { class: "step-description" }, ji = { class: "stat-badge" }, Hi = {
  key: 1,
  class: "step-body"
}, qi = {
  key: 2,
  class: "empty-state"
}, Ki = { class: "model-search-modal" }, Ji = { class: "model-modal-body" }, Qi = {
  key: 0,
  class: "model-search-results"
}, Yi = ["onClick"], Xi = { class: "model-result-header" }, Zi = { class: "model-result-filename" }, er = { class: "model-result-meta" }, tr = { class: "model-result-category" }, or = { class: "model-result-size" }, sr = {
  key: 0,
  class: "model-result-path"
}, nr = {
  key: 1,
  class: "model-no-results"
}, ar = {
  key: 2,
  class: "model-searching"
}, lr = { class: "model-download-url-modal" }, ir = { class: "model-modal-body" }, rr = { class: "model-input-group" }, dr = { class: "model-input-group" }, cr = { class: "model-modal-actions" }, ur = /* @__PURE__ */ J({
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
    function r(O) {
      var R;
      return O && ((R = n[O]) == null ? void 0 : R[0]) || null;
    }
    const p = t, f = c, h = b(0), m = b(!1), l = b(!1), v = b(""), $ = b(""), d = b(""), E = b([]), C = b(!1), z = B(() => p.models[h.value]), w = B(() => p.models.some((O) => O.is_download_intent)), k = B(() => p.models.filter(
      (O) => p.modelChoices.has(O.filename) || O.is_download_intent
    ).length), _ = B(() => {
      var R;
      if (!z.value) return "";
      const O = r((R = z.value.reference) == null ? void 0 : R.node_type);
      return O ? `${O}/${z.value.filename}` : "";
    }), T = B(() => {
      var R;
      if (!z.value) return "not-found";
      const O = p.modelChoices.get(z.value.filename);
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
      return z.value.is_download_intent ? "download" : (R = z.value.options) != null && R.length ? "ambiguous" : "not-found";
    }), N = B(() => {
      var R, ne;
      if (!z.value) return;
      const O = p.modelChoices.get(z.value.filename);
      if (O)
        switch (O.action) {
          case "select":
            return (R = O.selected_model) != null && R.filename ? `→ ${O.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return z.value.is_download_intent ? "Pending Download" : (ne = z.value.options) != null && ne.length ? `${z.value.options.length} matches` : "Not Found";
    });
    function U(O) {
      O >= 0 && O < p.models.length && (h.value = O);
    }
    function j() {
      z.value && f("mark-optional", z.value.filename);
    }
    function P() {
      z.value && f("skip", z.value.filename);
    }
    function L(O) {
      z.value && f("option-selected", z.value.filename, O);
    }
    function V() {
      z.value && f("clear-choice", z.value.filename);
    }
    function M() {
      z.value && (v.value = z.value.filename, m.value = !0);
    }
    function S() {
      z.value && ($.value = z.value.download_source || "", d.value = z.value.target_path || _.value, l.value = !0);
    }
    function F() {
      m.value = !1, v.value = "", E.value = [];
    }
    function W() {
      l.value = !1, $.value = "", d.value = "";
    }
    function Y() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function le(O) {
      z.value && F();
    }
    function G() {
      !z.value || !$.value.trim() || (f("download-url", z.value.filename, $.value.trim(), d.value.trim() || void 0), W());
    }
    function te(O) {
      if (!O) return "Unknown";
      const R = O / (1024 * 1024 * 1024);
      return R >= 1 ? `${R.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, R) => {
      var ne, X, $e;
      return o(), s("div", Vi, [
        e("div", Ai, [
          e("div", Fi, [
            e("h3", Wi, a(w.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Gi, a(w.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", ji, a(k.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        z.value ? (o(), x(to, {
          key: 0,
          "item-name": z.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: R[0] || (R[0] = (ae) => U(h.value - 1)),
          onNext: R[1] || (R[1] = (ae) => U(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        z.value ? (o(), s("div", Hi, [
          g(Pi, {
            filename: z.value.filename,
            "node-type": ((ne = z.value.reference) == null ? void 0 : ne.node_type) || "Unknown",
            "has-multiple-options": !!((X = z.value.options) != null && X.length),
            options: z.value.options,
            choice: ($e = t.modelChoices) == null ? void 0 : $e.get(z.value.filename),
            status: T.value,
            "status-label": N.value,
            onMarkOptional: j,
            onSkip: P,
            onDownloadUrl: S,
            onSearch: M,
            onOptionSelected: L,
            onClearChoice: V
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", qi, [...R[5] || (R[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), x(Se, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(F, ["self"])
          }, [
            e("div", Ki, [
              e("div", { class: "model-modal-header" }, [
                R[6] || (R[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              e("div", Ji, [
                g(Ne, {
                  modelValue: v.value,
                  "onUpdate:modelValue": R[2] || (R[2] = (ae) => v.value = ae),
                  placeholder: "Search by filename, category...",
                  onInput: Y
                }, null, 8, ["modelValue"]),
                E.value.length > 0 ? (o(), s("div", Qi, [
                  (o(!0), s(H, null, oe(E.value, (ae) => (o(), s("div", {
                    key: ae.hash,
                    class: "model-search-result-item",
                    onClick: (Xe) => le()
                  }, [
                    e("div", Xi, [
                      e("code", Zi, a(ae.filename), 1)
                    ]),
                    e("div", er, [
                      e("span", tr, a(ae.category), 1),
                      e("span", or, a(te(ae.size)), 1)
                    ]),
                    ae.relative_path ? (o(), s("div", sr, a(ae.relative_path), 1)) : u("", !0)
                  ], 8, Yi))), 128))
                ])) : v.value && !C.value ? (o(), s("div", nr, ' No models found matching "' + a(v.value) + '" ', 1)) : u("", !0),
                C.value ? (o(), s("div", ar, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), x(Se, { to: "body" }, [
          l.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(W, ["self"])
          }, [
            e("div", lr, [
              e("div", { class: "model-modal-header" }, [
                R[7] || (R[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: W
                }, "✕")
              ]),
              e("div", ir, [
                e("div", rr, [
                  R[8] || (R[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(Ne, {
                    modelValue: $.value,
                    "onUpdate:modelValue": R[3] || (R[3] = (ae) => $.value = ae),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", dr, [
                  R[9] || (R[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(Ne, {
                    modelValue: d.value,
                    "onUpdate:modelValue": R[4] || (R[4] = (ae) => d.value = ae),
                    placeholder: _.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", cr, [
                  g(ie, {
                    variant: "secondary",
                    onClick: W
                  }, {
                    default: i(() => [...R[10] || (R[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(ie, {
                    variant: "primary",
                    disabled: !$.value.trim() || !d.value.trim(),
                    onClick: G
                  }, {
                    default: i(() => [...R[11] || (R[11] = [
                      y(" Queue Download ", -1)
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
}), mr = /* @__PURE__ */ Q(ur, [["__scopeId", "data-v-c6acbada"]]), vr = { class: "applying-step" }, fr = {
  key: 0,
  class: "phase-content"
}, gr = {
  key: 1,
  class: "phase-content"
}, pr = { class: "phase-description" }, hr = { class: "install-list" }, yr = {
  key: 2,
  class: "phase-content"
}, wr = { class: "completion-summary" }, kr = {
  key: 0,
  class: "summary-item success"
}, br = { class: "summary-text" }, _r = {
  key: 1,
  class: "summary-item error"
}, $r = { class: "summary-text" }, Cr = {
  key: 2,
  class: "restart-prompt"
}, xr = {
  key: 3,
  class: "phase-content error"
}, Sr = { class: "error-message" }, Ir = /* @__PURE__ */ J({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart"],
  setup(t) {
    return (c, n) => (o(), s("div", vr, [
      t.progress.phase === "resolving" ? (o(), s("div", fr, [...n[1] || (n[1] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "installing" ? (o(), s("div", gr, [
        n[3] || (n[3] = e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Installing Node Packages")
        ], -1)),
        e("p", pr, "Installing " + a(t.progress.nodesToInstall.length) + " package" + a(t.progress.nodesToInstall.length > 1 ? "s" : "") + "...", 1),
        e("div", hr, [
          (o(!0), s(H, null, oe(t.progress.nodesToInstall, (r) => (o(), s("div", {
            key: r,
            class: "install-item"
          }, [
            n[2] || (n[2] = e("span", { class: "install-icon" }, "⬇", -1)),
            e("code", null, a(r), 1)
          ]))), 128))
        ])
      ])) : t.progress.phase === "complete" ? (o(), s("div", yr, [
        n[9] || (n[9] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", wr, [
          t.progress.nodesInstalled.length > 0 ? (o(), s("div", kr, [
            n[4] || (n[4] = e("span", { class: "summary-icon" }, "✓", -1)),
            e("span", br, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
          ])) : u("", !0),
          t.progress.installError ? (o(), s("div", _r, [
            n[5] || (n[5] = e("span", { class: "summary-icon" }, "✗", -1)),
            e("span", $r, "Installation error: " + a(t.progress.installError), 1)
          ])) : u("", !0),
          n[7] || (n[7] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          n[8] || (n[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
          t.progress.needsRestart ? (o(), s("div", Cr, [
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
      ])) : t.progress.phase === "error" ? (o(), s("div", xr, [
        n[10] || (n[10] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", Sr, a(t.progress.error), 1)
      ])) : u("", !0)
    ]));
  }
}), Er = /* @__PURE__ */ Q(Ir, [["__scopeId", "data-v-eb46c564"]]), Mr = {
  key: 0,
  class: "loading-state"
}, zr = {
  key: 1,
  class: "wizard-content"
}, Lr = {
  key: 0,
  class: "step-content"
}, Tr = { class: "analysis-summary" }, Dr = { class: "analysis-header" }, Rr = { class: "summary-description" }, Nr = { class: "stats-grid" }, Or = { class: "stat-card" }, Ur = { class: "stat-items" }, Br = {
  key: 0,
  class: "stat-item success"
}, Pr = { class: "stat-count" }, Vr = {
  key: 1,
  class: "stat-item info"
}, Ar = { class: "stat-count" }, Fr = {
  key: 2,
  class: "stat-item warning"
}, Wr = { class: "stat-count" }, Gr = {
  key: 3,
  class: "stat-item error"
}, jr = { class: "stat-count" }, Hr = { class: "stat-card" }, qr = { class: "stat-items" }, Kr = { class: "stat-item success" }, Jr = { class: "stat-count" }, Qr = {
  key: 0,
  class: "stat-item info"
}, Yr = { class: "stat-count" }, Xr = {
  key: 1,
  class: "stat-item warning"
}, Zr = { class: "stat-count" }, ed = {
  key: 2,
  class: "stat-item error"
}, td = { class: "stat-count" }, od = {
  key: 0,
  class: "status-message warning"
}, sd = { class: "status-text" }, nd = {
  key: 1,
  class: "status-message info"
}, ad = { class: "status-text" }, ld = {
  key: 2,
  class: "status-message info"
}, id = { class: "status-text" }, rd = {
  key: 3,
  class: "status-message success"
}, dd = {
  key: 3,
  class: "step-content"
}, cd = { class: "review-summary" }, ud = { class: "review-stats" }, md = { class: "review-stat" }, vd = { class: "stat-value" }, fd = { class: "review-stat" }, gd = { class: "stat-value" }, pd = { class: "review-stat" }, hd = { class: "stat-value" }, yd = { class: "review-stat" }, wd = { class: "stat-value" }, kd = {
  key: 0,
  class: "review-section"
}, bd = { class: "section-title" }, _d = { class: "review-items" }, $d = { class: "item-name" }, Cd = {
  key: 1,
  class: "review-section"
}, xd = { class: "section-title" }, Sd = { class: "review-items" }, Id = { class: "item-name" }, Ed = { class: "item-choice" }, Md = {
  key: 0,
  class: "choice-badge install"
}, zd = {
  key: 1,
  class: "choice-badge optional"
}, Ld = {
  key: 2,
  class: "choice-badge skip"
}, Td = {
  key: 1,
  class: "choice-badge pending"
}, Dd = {
  key: 2,
  class: "review-section"
}, Rd = { class: "section-title" }, Nd = { class: "review-items" }, Od = { class: "item-name" }, Ud = { class: "item-choice" }, Bd = {
  key: 0,
  class: "choice-badge install"
}, Pd = {
  key: 1,
  class: "choice-badge download"
}, Vd = {
  key: 2,
  class: "choice-badge optional"
}, Ad = {
  key: 3,
  class: "choice-badge skip"
}, Fd = {
  key: 4,
  class: "choice-badge skip"
}, Wd = {
  key: 1,
  class: "choice-badge download"
}, Gd = {
  key: 2,
  class: "choice-badge pending"
}, jd = {
  key: 3,
  class: "no-choices"
}, Hd = /* @__PURE__ */ J({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, r = c, { analyzeWorkflow: p, applyResolution: f, installNodes: h, queueModelDownloads: m, progress: l, resetProgress: v } = ml(), { loadPendingDownloads: $ } = Ct(), d = b(null), E = b(!1), C = b(!1), z = b(null), w = b("analysis"), k = b([]), _ = b(/* @__PURE__ */ new Map()), T = b(/* @__PURE__ */ new Map()), N = B(() => {
      const A = [
        { id: "analysis", label: "Analysis" }
      ];
      return j.value && A.push({ id: "nodes", label: "Nodes" }), (P.value || L.value) && A.push({ id: "models", label: "Models" }), A.push({ id: "review", label: "Review" }), w.value === "applying" && A.push({ id: "applying", label: "Applying" }), A;
    }), U = B(() => d.value ? d.value.stats.needs_user_input : !1), j = B(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), P = B(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), L = B(() => d.value ? d.value.stats.download_intents > 0 : !1), V = B(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), M = B(() => d.value ? d.value.nodes.resolved.length - d.value.stats.nodes_needing_installation : 0), S = B(() => {
      if (!d.value) return [];
      const A = d.value.nodes.resolved.filter((ee) => !ee.is_installed), D = /* @__PURE__ */ new Set();
      return A.filter((ee) => D.has(ee.package.package_id) ? !1 : (D.add(ee.package.package_id), !0));
    }), F = B(() => d.value ? d.value.models.resolved.filter((A) => A.match_type === "download_intent").map((A) => ({
      filename: A.reference.widget_value,
      reference: A.reference,
      is_download_intent: !0,
      resolved_model: A.model,
      download_source: A.download_source,
      target_path: A.target_path
    })) : []), W = B(() => {
      if (!d.value) return [];
      const A = d.value.nodes.unresolved.map((ee) => ({
        node_type: ee.reference.node_type,
        reason: ee.reason,
        is_unresolved: !0,
        options: void 0
      })), D = d.value.nodes.ambiguous.map((ee) => ({
        node_type: ee.reference.node_type,
        has_multiple_options: !0,
        options: ee.options.map((ge) => ({
          package_id: ge.package.package_id,
          title: ge.package.title,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          is_installed: ge.is_installed
        }))
      }));
      return [...A, ...D];
    }), Y = B(() => {
      if (!d.value) return [];
      const A = d.value.models.unresolved.map((ee) => ({
        filename: ee.reference.widget_value,
        reference: ee.reference,
        reason: ee.reason,
        is_unresolved: !0,
        options: void 0
      })), D = d.value.models.ambiguous.map((ee) => ({
        filename: ee.reference.widget_value,
        reference: ee.reference,
        has_multiple_options: !0,
        options: ee.options.map((ge) => ({
          model: ge.model,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          has_download_source: ge.has_download_source
        }))
      }));
      return [...A, ...D];
    }), le = B(() => {
      const A = Y.value, D = F.value.map((ee) => ({
        filename: ee.filename,
        reference: ee.reference,
        is_download_intent: !0,
        resolved_model: ee.resolved_model,
        download_source: ee.download_source,
        target_path: ee.target_path,
        options: void 0
      }));
      return [...A, ...D];
    }), G = B(() => {
      let A = S.value.length;
      for (const D of _.value.values())
        D.action === "install" && A++;
      for (const D of T.value.values())
        D.action === "select" && A++;
      return A;
    }), te = B(() => {
      let A = 0;
      for (const D of T.value.values())
        D.action === "download" && A++;
      return A;
    }), O = B(() => {
      let A = 0;
      for (const D of _.value.values())
        D.action === "optional" && A++;
      for (const D of T.value.values())
        D.action === "optional" && A++;
      return A;
    }), R = B(() => {
      let A = 0;
      for (const D of _.value.values())
        D.action === "skip" && A++;
      for (const D of T.value.values())
        D.action === "skip" && A++;
      for (const D of W.value)
        _.value.has(D.node_type) || A++;
      for (const D of Y.value)
        T.value.has(D.filename) || A++;
      return A;
    }), ne = B(() => {
      const A = {};
      if (A.analysis = { resolved: 1, total: 1 }, j.value) {
        const D = W.value.length, ee = W.value.filter(
          (ge) => _.value.has(ge.node_type)
        ).length;
        A.nodes = { resolved: ee, total: D };
      }
      if (P.value || L.value) {
        const D = le.value.length, ee = le.value.filter(
          (ge) => T.value.has(ge.filename) || ge.is_download_intent
        ).length;
        A.models = { resolved: ee, total: D };
      }
      if (A.review = { resolved: 1, total: 1 }, w.value === "applying") {
        const D = l.totalFiles || 1, ee = l.completedFiles.length;
        A.applying = { resolved: ee, total: D };
      }
      return A;
    });
    function X(A) {
      w.value = A;
    }
    function $e() {
      const A = N.value.findIndex((D) => D.id === w.value);
      A > 0 && (w.value = N.value[A - 1].id);
    }
    function ae() {
      const A = N.value.findIndex((D) => D.id === w.value);
      A < N.value.length - 1 && (w.value = N.value[A + 1].id);
    }
    async function Xe() {
      E.value = !0, z.value = null;
      try {
        d.value = await p(n.workflowName);
      } catch (A) {
        z.value = A instanceof Error ? A.message : "Failed to analyze workflow";
      } finally {
        E.value = !1;
      }
    }
    function he() {
      k.value.includes("analysis") || k.value.push("analysis"), j.value ? w.value = "nodes" : P.value || L.value ? w.value = "models" : w.value = "review";
    }
    function mt(A) {
      _.value.set(A, { action: "optional" });
    }
    function vt(A) {
      _.value.set(A, { action: "skip" });
    }
    function ft(A, D) {
      var ge;
      const ee = W.value.find((Le) => Le.node_type === A);
      (ge = ee == null ? void 0 : ee.options) != null && ge[D] && _.value.set(A, {
        action: "install",
        package_id: ee.options[D].package_id
      });
    }
    function we(A, D) {
      _.value.set(A, {
        action: "install",
        package_id: D
      });
    }
    function Ke(A) {
      _.value.delete(A);
    }
    function Ae(A) {
      T.value.set(A, { action: "optional" });
    }
    function Ue(A) {
      T.value.set(A, { action: "skip" });
    }
    function gt(A, D) {
      var ge;
      const ee = Y.value.find((Le) => Le.filename === A);
      (ge = ee == null ? void 0 : ee.options) != null && ge[D] && T.value.set(A, {
        action: "select",
        selected_model: ee.options[D].model
      });
    }
    function fe(A, D, ee) {
      T.value.set(A, {
        action: "download",
        url: D,
        target_path: ee
      });
    }
    function Be(A) {
      T.value.delete(A);
    }
    async function K() {
      C.value = !0, z.value = null, v(), l.phase = "resolving", w.value = "applying";
      try {
        const A = await f(n.workflowName, _.value, T.value);
        A.models_to_download && A.models_to_download.length > 0 && m(n.workflowName, A.models_to_download);
        const D = [
          ...A.nodes_to_install || [],
          ...S.value.map((ee) => ee.package.package_id)
        ];
        l.nodesToInstall = [...new Set(D)], l.nodesToInstall.length > 0 && await h(n.workflowName), l.phase = "complete", await $(), l.needsRestart || setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (A) {
        z.value = A instanceof Error ? A.message : "Failed to apply resolution", l.error = z.value, l.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function de() {
      r("refresh"), r("restart"), r("close");
    }
    return _e(Xe), (A, D) => (o(), x(Ye, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: E.value,
      error: z.value || void 0,
      "fixed-height": !0,
      onClose: D[1] || (D[1] = (ee) => r("close"))
    }, {
      body: i(() => [
        E.value && !d.value ? (o(), s("div", Mr, [...D[2] || (D[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", zr, [
          g(_l, {
            steps: N.value,
            "current-step": w.value,
            "completed-steps": k.value,
            "step-stats": ne.value,
            onStepChange: X
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          w.value === "analysis" ? (o(), s("div", Lr, [
            e("div", Tr, [
              e("div", Dr, [
                D[3] || (D[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Rr, " Found " + a(d.value.stats.total_nodes) + " nodes and " + a(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Nr, [
                e("div", Or, [
                  D[12] || (D[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Ur, [
                    M.value > 0 ? (o(), s("div", Br, [
                      D[4] || (D[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Pr, a(M.value), 1),
                      D[5] || (D[5] = e("span", { class: "stat-label" }, "installed", -1))
                    ])) : u("", !0),
                    d.value.stats.nodes_needing_installation > 0 ? (o(), s("div", Vr, [
                      D[6] || (D[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Ar, a(d.value.stats.nodes_needing_installation), 1),
                      D[7] || (D[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : u("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", Fr, [
                      D[8] || (D[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Wr, a(d.value.nodes.ambiguous.length), 1),
                      D[9] || (D[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", Gr, [
                      D[10] || (D[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", jr, a(d.value.nodes.unresolved.length), 1),
                      D[11] || (D[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ]),
                e("div", Hr, [
                  D[21] || (D[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", qr, [
                    e("div", Kr, [
                      D[13] || (D[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Jr, a(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      D[14] || (D[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", Qr, [
                      D[15] || (D[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Yr, a(d.value.stats.download_intents), 1),
                      D[16] || (D[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : u("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", Xr, [
                      D[17] || (D[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Zr, a(d.value.models.ambiguous.length), 1),
                      D[18] || (D[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", ed, [
                      D[19] || (D[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", td, a(d.value.models.unresolved.length), 1),
                      D[20] || (D[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ])
              ]),
              U.value ? (o(), s("div", od, [
                D[22] || (D[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", sd, a(W.value.length + Y.value.length) + " items need your input", 1)
              ])) : V.value ? (o(), s("div", nd, [
                D[23] || (D[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", ad, a(d.value.stats.packages_needing_installation) + " package" + a(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(d.value.stats.nodes_needing_installation) + " node type" + a(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(L.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : L.value ? (o(), s("div", ld, [
                D[24] || (D[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", id, a(d.value.stats.download_intents) + " model" + a(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", rd, [...D[25] || (D[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : u("", !0),
          w.value === "nodes" ? (o(), x(wi, {
            key: 1,
            nodes: W.value,
            "node-choices": _.value,
            onMarkOptional: mt,
            onSkip: vt,
            onOptionSelected: ft,
            onManualEntry: we,
            onClearChoice: Ke
          }, null, 8, ["nodes", "node-choices"])) : u("", !0),
          w.value === "models" ? (o(), x(mr, {
            key: 2,
            models: le.value,
            "model-choices": T.value,
            onMarkOptional: Ae,
            onSkip: Ue,
            onOptionSelected: gt,
            onDownloadUrl: fe,
            onClearChoice: Be
          }, null, 8, ["models", "model-choices"])) : u("", !0),
          w.value === "review" ? (o(), s("div", dd, [
            e("div", cd, [
              D[31] || (D[31] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", ud, [
                e("div", md, [
                  e("span", vd, a(G.value), 1),
                  D[26] || (D[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", fd, [
                  e("span", gd, a(te.value), 1),
                  D[27] || (D[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", pd, [
                  e("span", hd, a(O.value), 1),
                  D[28] || (D[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", yd, [
                  e("span", wd, a(R.value), 1),
                  D[29] || (D[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              S.value.length > 0 ? (o(), s("div", kd, [
                e("h4", bd, "Node Packages to Install (" + a(S.value.length) + ")", 1),
                e("div", _d, [
                  (o(!0), s(H, null, oe(S.value, (ee) => (o(), s("div", {
                    key: ee.package.package_id,
                    class: "review-item"
                  }, [
                    e("code", $d, a(ee.package.package_id), 1),
                    D[30] || (D[30] = e("div", { class: "item-choice" }, [
                      e("span", { class: "choice-badge install" }, "Will Install")
                    ], -1))
                  ]))), 128))
                ])
              ])) : u("", !0),
              W.value.length > 0 ? (o(), s("div", Cd, [
                e("h4", xd, "Node Choices (" + a(W.value.length) + ")", 1),
                e("div", Sd, [
                  (o(!0), s(H, null, oe(W.value, (ee) => {
                    var ge, Le, Ze, Fe;
                    return o(), s("div", {
                      key: ee.node_type,
                      class: "review-item"
                    }, [
                      e("code", Id, a(ee.node_type), 1),
                      e("div", Ed, [
                        _.value.has(ee.node_type) ? (o(), s(H, { key: 0 }, [
                          ((ge = _.value.get(ee.node_type)) == null ? void 0 : ge.action) === "install" ? (o(), s("span", Md, a((Le = _.value.get(ee.node_type)) == null ? void 0 : Le.package_id), 1)) : ((Ze = _.value.get(ee.node_type)) == null ? void 0 : Ze.action) === "optional" ? (o(), s("span", zd, " Optional ")) : ((Fe = _.value.get(ee.node_type)) == null ? void 0 : Fe.action) === "skip" ? (o(), s("span", Ld, " Skip ")) : u("", !0)
                        ], 64)) : (o(), s("span", Td, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              le.value.length > 0 ? (o(), s("div", Dd, [
                e("h4", Rd, "Models (" + a(le.value.length) + ")", 1),
                e("div", Nd, [
                  (o(!0), s(H, null, oe(le.value, (ee) => {
                    var ge, Le, Ze, Fe, nt, xt, et;
                    return o(), s("div", {
                      key: ee.filename,
                      class: "review-item"
                    }, [
                      e("code", Od, a(ee.filename), 1),
                      e("div", Ud, [
                        T.value.has(ee.filename) ? (o(), s(H, { key: 0 }, [
                          ((ge = T.value.get(ee.filename)) == null ? void 0 : ge.action) === "select" ? (o(), s("span", Bd, a((Ze = (Le = T.value.get(ee.filename)) == null ? void 0 : Le.selected_model) == null ? void 0 : Ze.filename), 1)) : ((Fe = T.value.get(ee.filename)) == null ? void 0 : Fe.action) === "download" ? (o(), s("span", Pd, " Download ")) : ((nt = T.value.get(ee.filename)) == null ? void 0 : nt.action) === "optional" ? (o(), s("span", Vd, " Optional ")) : ((xt = T.value.get(ee.filename)) == null ? void 0 : xt.action) === "skip" ? (o(), s("span", Ad, " Skip ")) : ((et = T.value.get(ee.filename)) == null ? void 0 : et.action) === "cancel_download" ? (o(), s("span", Fd, " Cancel Download ")) : u("", !0)
                        ], 64)) : ee.is_download_intent ? (o(), s("span", Wd, " Pending Download ")) : (o(), s("span", Gd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              S.value.length === 0 && W.value.length === 0 && le.value.length === 0 ? (o(), s("div", jd, " No dependencies need resolution. ")) : u("", !0)
            ])
          ])) : u("", !0),
          w.value === "applying" ? (o(), x(Er, {
            key: 4,
            progress: me(l),
            onRestart: de
          }, null, 8, ["progress"])) : u("", !0)
        ])) : u("", !0)
      ]),
      footer: i(() => [
        w.value !== "analysis" && w.value !== "applying" ? (o(), x(ie, {
          key: 0,
          variant: "secondary",
          disabled: C.value,
          onClick: $e
        }, {
          default: i(() => [...D[32] || (D[32] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        D[35] || (D[35] = e("div", { class: "footer-spacer" }, null, -1)),
        w.value !== "applying" || me(l).phase === "complete" || me(l).phase === "error" ? (o(), x(ie, {
          key: 1,
          variant: "secondary",
          onClick: D[0] || (D[0] = (ee) => r("close"))
        }, {
          default: i(() => [
            y(a(me(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : u("", !0),
        w.value === "analysis" ? (o(), x(ie, {
          key: 2,
          variant: "primary",
          disabled: E.value,
          onClick: he
        }, {
          default: i(() => [
            y(a(U.value || L.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        w.value === "nodes" ? (o(), x(ie, {
          key: 3,
          variant: "primary",
          onClick: ae
        }, {
          default: i(() => [
            y(a(P.value || L.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : u("", !0),
        w.value === "models" ? (o(), x(ie, {
          key: 4,
          variant: "primary",
          onClick: ae
        }, {
          default: i(() => [...D[33] || (D[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : u("", !0),
        w.value === "review" ? (o(), x(ie, {
          key: 5,
          variant: "primary",
          disabled: C.value,
          loading: C.value,
          onClick: K
        }, {
          default: i(() => [...D[34] || (D[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), qd = /* @__PURE__ */ Q(Hd, [["__scopeId", "data-v-85146f4c"]]), Kd = { class: "search-input-wrapper" }, Jd = ["value", "placeholder"], Qd = /* @__PURE__ */ J({
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
    const n = t, r = c, p = b(null);
    let f;
    function h(l) {
      const v = l.target.value;
      n.debounce > 0 ? (clearTimeout(f), f = window.setTimeout(() => {
        r("update:modelValue", v);
      }, n.debounce)) : r("update:modelValue", v);
    }
    function m() {
      var l;
      r("update:modelValue", ""), r("clear"), (l = p.value) == null || l.focus();
    }
    return _e(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (l, v) => (o(), s("div", Kd, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Je(m, ["escape"])
      }, null, 40, Jd),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), Yd = /* @__PURE__ */ Q(Qd, [["__scopeId", "data-v-266f857a"]]), Xd = { class: "search-bar" }, Zd = /* @__PURE__ */ J({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (o(), s("div", Xd, [
      g(Yd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ct = /* @__PURE__ */ Q(Zd, [["__scopeId", "data-v-3d51bbfd"]]), ec = { class: "section-group" }, tc = {
  key: 0,
  class: "section-content"
}, oc = /* @__PURE__ */ J({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = b(n.initiallyExpanded);
    function f() {
      n.collapsible && (p.value = !p.value, r("toggle", p.value));
    }
    return (h, m) => (o(), s("section", ec, [
      g(ze, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: f
      }, {
        default: i(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (o(), s("div", tc, [
        ue(h.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), be = /* @__PURE__ */ Q(oc, [["__scopeId", "data-v-c48e33ed"]]), sc = { class: "item-header" }, nc = {
  key: 0,
  class: "item-icon"
}, ac = { class: "item-info" }, lc = {
  key: 0,
  class: "item-title"
}, ic = {
  key: 1,
  class: "item-subtitle"
}, rc = {
  key: 0,
  class: "item-details"
}, dc = {
  key: 1,
  class: "item-actions"
}, cc = /* @__PURE__ */ J({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = B(() => n.status ? `status-${n.status}` : "");
    return (p, f) => (o(), s("div", {
      class: se(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: f[0] || (f[0] = (h) => t.clickable && p.$emit("click"))
    }, [
      e("div", sc, [
        p.$slots.icon ? (o(), s("span", nc, [
          ue(p.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        e("div", ac, [
          p.$slots.title ? (o(), s("div", lc, [
            ue(p.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          p.$slots.subtitle ? (o(), s("div", ic, [
            ue(p.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      p.$slots.details ? (o(), s("div", rc, [
        ue(p.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      p.$slots.actions ? (o(), s("div", dc, [
        ue(p.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ Q(cc, [["__scopeId", "data-v-cc435e0e"]]), uc = { class: "loading-state" }, mc = { class: "loading-message" }, vc = /* @__PURE__ */ J({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (o(), s("div", uc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", mc, a(t.message), 1)
    ]));
  }
}), He = /* @__PURE__ */ Q(vc, [["__scopeId", "data-v-ad8436c9"]]), fc = { class: "error-state" }, gc = { class: "error-message" }, pc = /* @__PURE__ */ J({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (o(), s("div", fc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", gc, a(t.message), 1),
      t.retry ? (o(), x(Z, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), qe = /* @__PURE__ */ Q(pc, [["__scopeId", "data-v-5397be48"]]), hc = /* @__PURE__ */ J({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getWorkflows: p } = Ce(), f = b([]), h = b(!1), m = b(null), l = b(""), v = b(!0), $ = b(!1), d = b(!1), E = b(!1), C = b(null), z = B(
      () => f.value.filter((G) => G.status === "broken")
    ), w = B(
      () => f.value.filter((G) => G.status === "new")
    ), k = B(
      () => f.value.filter((G) => G.status === "modified")
    ), _ = B(
      () => f.value.filter((G) => G.status === "synced")
    ), T = B(() => {
      if (!l.value.trim()) return f.value;
      const G = l.value.toLowerCase();
      return f.value.filter((te) => te.name.toLowerCase().includes(G));
    }), N = B(
      () => z.value.filter(
        (G) => !l.value.trim() || G.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), U = B(
      () => w.value.filter(
        (G) => !l.value.trim() || G.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), j = B(
      () => k.value.filter(
        (G) => !l.value.trim() || G.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), P = B(
      () => _.value.filter(
        (G) => !l.value.trim() || G.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), L = B(
      () => $.value ? P.value : P.value.slice(0, 5)
    );
    async function V(G = !1) {
      h.value = !0, m.value = null;
      try {
        f.value = await p(G);
      } catch (te) {
        m.value = te instanceof Error ? te.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    c({ loadWorkflows: V });
    function M(G) {
      C.value = G, d.value = !0;
    }
    function S(G) {
      C.value = G, E.value = !0;
    }
    function F() {
      alert("Bulk resolution not yet implemented");
    }
    function W() {
      r("refresh");
    }
    function Y(G) {
      const te = [];
      return G.missing_nodes > 0 && te.push(`${G.missing_nodes} missing node${G.missing_nodes > 1 ? "s" : ""}`), G.missing_models > 0 && te.push(`${G.missing_models} missing model${G.missing_models > 1 ? "s" : ""}`), G.pending_downloads && G.pending_downloads > 0 && te.push(`${G.pending_downloads} pending download${G.pending_downloads > 1 ? "s" : ""}`), te.length > 0 ? te.join(", ") : "Has issues";
    }
    function le(G) {
      const te = G.sync_state === "new" ? "New" : G.sync_state === "modified" ? "Modified" : G.sync_state === "synced" ? "Synced" : G.sync_state;
      return G.has_path_sync_issues && G.models_needing_path_sync && G.models_needing_path_sync > 0 ? `${G.models_needing_path_sync} model path${G.models_needing_path_sync > 1 ? "s" : ""} need${G.models_needing_path_sync === 1 ? "s" : ""} sync` : te || "Unknown";
    }
    return _e(V), (G, te) => (o(), s(H, null, [
      g(Ie, null, {
        header: i(() => [
          g(Ee, { title: "WORKFLOWS" }, {
            actions: i(() => [
              z.value.length > 0 ? (o(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: F
              }, {
                default: i(() => [...te[8] || (te[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : u("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(ct, {
            modelValue: l.value,
            "onUpdate:modelValue": te[0] || (te[0] = (O) => l.value = O),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          h.value ? (o(), x(He, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), x(qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            N.value.length ? (o(), x(be, {
              key: 0,
              title: "BROKEN",
              count: N.value.length
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(N.value, (O) => (o(), x(xe, {
                  key: O.name,
                  status: "broken"
                }, {
                  icon: i(() => [...te[9] || (te[9] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(Y(O)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => S(O.name)
                    }, {
                      default: i(() => [...te[10] || (te[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => M(O.name)
                    }, {
                      default: i(() => [...te[11] || (te[11] = [
                        y(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            U.value.length ? (o(), x(be, {
              key: 1,
              title: "NEW",
              count: U.value.length
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(U.value, (O) => (o(), x(xe, {
                  key: O.name,
                  status: O.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    y(a(O.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(le(O)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => M(O.name)
                    }, {
                      default: i(() => [...te[12] || (te[12] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            j.value.length ? (o(), x(be, {
              key: 2,
              title: "MODIFIED",
              count: j.value.length
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(j.value, (O) => (o(), x(xe, {
                  key: O.name,
                  status: O.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...te[13] || (te[13] = [
                    y("⚡", -1)
                  ])]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(le(O)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => M(O.name)
                    }, {
                      default: i(() => [...te[14] || (te[14] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            P.value.length ? (o(), x(be, {
              key: 3,
              title: "SYNCED",
              count: P.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: te[2] || (te[2] = (O) => v.value = O)
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(L.value, (O) => (o(), x(xe, {
                  key: O.name,
                  status: O.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    y(a(O.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    y(a(O.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(le(O)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => M(O.name)
                    }, {
                      default: i(() => [...te[15] || (te[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !$.value && P.value.length > 5 ? (o(), x(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: te[1] || (te[1] = (O) => $.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    y(" View all " + a(P.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : u("", !0),
            T.value.length ? u("", !0) : (o(), x(Oe, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && C.value ? (o(), x(dl, {
        key: 0,
        "workflow-name": C.value,
        onClose: te[3] || (te[3] = (O) => d.value = !1),
        onResolve: te[4] || (te[4] = (O) => S(C.value)),
        onRefresh: te[5] || (te[5] = (O) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0),
      E.value && C.value ? (o(), x(qd, {
        key: 1,
        "workflow-name": C.value,
        onClose: te[6] || (te[6] = (O) => E.value = !1),
        onInstall: W,
        onRefresh: te[7] || (te[7] = (O) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ], 64));
  }
}), yc = /* @__PURE__ */ Q(hc, [["__scopeId", "data-v-080576c0"]]), wc = /* @__PURE__ */ J({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: se(["summary-bar", t.variant])
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ut = /* @__PURE__ */ Q(wc, [["__scopeId", "data-v-ccb7816e"]]), kc = {
  key: 0,
  class: "model-details"
}, bc = { class: "detail-section" }, _c = { class: "detail-row" }, $c = { class: "detail-value mono" }, Cc = { class: "detail-row" }, xc = { class: "detail-value mono" }, Sc = { class: "detail-row" }, Ic = { class: "detail-value mono" }, Ec = { class: "detail-row" }, Mc = { class: "detail-value" }, zc = { class: "detail-row" }, Lc = { class: "detail-value" }, Tc = { class: "detail-row" }, Dc = { class: "detail-value" }, Rc = { class: "detail-section" }, Nc = { class: "section-header" }, Oc = {
  key: 0,
  class: "locations-list"
}, Uc = { class: "location-path mono" }, Bc = {
  key: 0,
  class: "location-modified"
}, Pc = ["onClick"], Vc = {
  key: 1,
  class: "empty-state"
}, Ac = { class: "detail-section" }, Fc = { class: "section-header" }, Wc = {
  key: 0,
  class: "sources-list"
}, Gc = { class: "source-type" }, jc = ["href"], Hc = ["disabled", "onClick"], qc = {
  key: 1,
  class: "empty-state"
}, Kc = { class: "add-source-form" }, Jc = ["disabled"], Qc = {
  key: 2,
  class: "source-error"
}, Yc = {
  key: 3,
  class: "source-success"
}, Xc = /* @__PURE__ */ J({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: r, addModelSource: p, removeModelSource: f, openFileLocation: h } = Ce(), m = b(null), l = b(!0), v = b(null), $ = b(""), d = b(!1), E = b(null), C = b(null), z = b(null), w = b(null);
    let k = null;
    function _(V, M = "success", S = 2e3) {
      k && clearTimeout(k), w.value = { message: V, type: M }, k = setTimeout(() => {
        w.value = null;
      }, S);
    }
    function T(V) {
      if (!V) return "Unknown";
      const M = 1024 * 1024 * 1024, S = 1024 * 1024;
      return V >= M ? `${(V / M).toFixed(1)} GB` : V >= S ? `${(V / S).toFixed(0)} MB` : `${(V / 1024).toFixed(0)} KB`;
    }
    function N(V) {
      navigator.clipboard.writeText(V), _("Copied to clipboard!");
    }
    async function U(V) {
      try {
        await h(V), _("Opening file location...");
      } catch {
        _("Failed to open location", "error");
      }
    }
    async function j() {
      if (!(!$.value.trim() || !m.value)) {
        d.value = !0, C.value = null, z.value = null;
        try {
          await p(m.value.hash, $.value.trim()), z.value = "Source added successfully!", $.value = "", await L();
        } catch (V) {
          C.value = V instanceof Error ? V.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function P(V) {
      if (m.value) {
        E.value = V, C.value = null, z.value = null;
        try {
          await f(m.value.hash, V), _("Source removed"), await L();
        } catch (M) {
          C.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          E.value = null;
        }
      }
    }
    async function L() {
      l.value = !0, v.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (V) {
        v.value = V instanceof Error ? V.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return _e(L), (V, M) => {
      var S;
      return o(), s(H, null, [
        g(Ye, {
          title: `Model Details: ${((S = m.value) == null ? void 0 : S.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: v.value,
          onClose: M[5] || (M[5] = (F) => V.$emit("close"))
        }, {
          body: i(() => {
            var F, W, Y, le;
            return [
              m.value ? (o(), s("div", kc, [
                e("section", bc, [
                  e("div", _c, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", $c, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (G) => N(m.value.hash))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", Cc, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", xc, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (G) => N(m.value.blake3))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", Sc, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Ic, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (G) => N(m.value.sha256))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", Ec, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Mc, a(T(m.value.size)), 1)
                  ]),
                  e("div", zc, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Lc, a(m.value.category), 1)
                  ]),
                  e("div", Tc, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Dc, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Rc, [
                  e("h4", Nc, "Locations (" + a(((F = m.value.locations) == null ? void 0 : F.length) || 0) + ")", 1),
                  (W = m.value.locations) != null && W.length ? (o(), s("div", Oc, [
                    (o(!0), s(H, null, oe(m.value.locations, (G, te) => (o(), s("div", {
                      key: te,
                      class: "location-item"
                    }, [
                      e("span", Uc, a(G.path), 1),
                      G.modified ? (o(), s("span", Bc, "Modified: " + a(G.modified), 1)) : u("", !0),
                      G.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (O) => U(G.path)
                      }, " Open File Location ", 8, Pc)) : u("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Vc, "No locations found"))
                ]),
                e("section", Ac, [
                  e("h4", Fc, "Download Sources (" + a(((Y = m.value.sources) == null ? void 0 : Y.length) || 0) + ")", 1),
                  (le = m.value.sources) != null && le.length ? (o(), s("div", Wc, [
                    (o(!0), s(H, null, oe(m.value.sources, (G, te) => (o(), s("div", {
                      key: te,
                      class: "source-item"
                    }, [
                      e("span", Gc, a(G.type) + ":", 1),
                      e("a", {
                        href: G.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(G.url), 9, jc),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: E.value === G.url,
                        onClick: (O) => P(G.url)
                      }, a(E.value === G.url ? "..." : "×"), 9, Hc)
                    ]))), 128))
                  ])) : (o(), s("div", qc, " No download sources configured ")),
                  e("div", Kc, [
                    at(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (G) => $.value = G),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Yt, $.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !$.value.trim() || d.value,
                      onClick: j
                    }, a(d.value ? "Adding..." : "Add Source"), 9, Jc)
                  ]),
                  C.value ? (o(), s("p", Qc, a(C.value), 1)) : u("", !0),
                  z.value ? (o(), s("p", Yc, a(z.value), 1)) : u("", !0)
                ])
              ])) : u("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (F) => V.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), x(Se, { to: "body" }, [
          w.value ? (o(), s("div", {
            key: 0,
            class: se(["toast", w.value.type])
          }, a(w.value.message), 3)) : u("", !0)
        ]))
      ], 64);
    };
  }
}), oo = /* @__PURE__ */ Q(Xc, [["__scopeId", "data-v-f15cbb56"]]), Zc = /* @__PURE__ */ J({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: r, getStatus: p } = Ce(), f = b([]), h = b([]), m = b("production"), l = b(!1), v = b(null), $ = b(""), d = b(!1), E = b(null);
    function C() {
      d.value = !1, n("navigate", "model-index");
    }
    const z = B(
      () => f.value.reduce((L, V) => L + (V.size || 0), 0)
    ), w = B(() => {
      if (!$.value.trim()) return f.value;
      const L = $.value.toLowerCase();
      return f.value.filter((V) => V.filename.toLowerCase().includes(L));
    }), k = B(() => {
      if (!$.value.trim()) return h.value;
      const L = $.value.toLowerCase();
      return h.value.filter((V) => V.filename.toLowerCase().includes(L));
    }), _ = B(() => {
      const L = {};
      for (const M of w.value) {
        const S = M.type || "other";
        L[S] || (L[S] = []), L[S].push(M);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([M], [S]) => {
        const F = V.indexOf(M), W = V.indexOf(S);
        return F >= 0 && W >= 0 ? F - W : F >= 0 ? -1 : W >= 0 ? 1 : M.localeCompare(S);
      }).map(([M, S]) => ({ type: M, models: S }));
    });
    function T(L) {
      if (!L) return "Unknown";
      const V = L / (1024 * 1024);
      return V >= 1024 ? `${(V / 1024).toFixed(1)} GB` : `${V.toFixed(0)} MB`;
    }
    function N(L) {
      E.value = L.hash || L.filename;
    }
    function U(L) {
      n("navigate", "model-index");
    }
    function j(L) {
      alert(`Download functionality not yet implemented for ${L}`);
    }
    async function P() {
      l.value = !0, v.value = null;
      try {
        const L = await r();
        f.value = L, h.value = [];
        const V = await p();
        m.value = V.environment || "production";
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return _e(P), (L, V) => (o(), s(H, null, [
      g(Ie, null, {
        header: i(() => [
          g(Ee, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: V[0] || (V[0] = (M) => d.value = !0)
          })
        ]),
        search: i(() => [
          g(ct, {
            modelValue: $.value,
            "onUpdate:modelValue": V[1] || (V[1] = (M) => $.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (o(), x(He, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (o(), x(qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            f.value.length ? (o(), x(ut, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(f.value.length) + " models • " + a(T(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(H, null, oe(_.value, (M) => (o(), x(be, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(M.models, (S) => (o(), x(xe, {
                  key: S.hash || S.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...V[4] || (V[4] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(a(S.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(T(S.size)), 1)
                  ]),
                  details: i(() => [
                    g(pe, {
                      label: "Used by:",
                      value: (S.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(pe, {
                      label: "Path:",
                      value: S.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => N(S)
                    }, {
                      default: i(() => [...V[5] || (V[5] = [
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
            k.value.length ? (o(), x(be, {
              key: 1,
              title: "MISSING",
              count: k.value.length
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(k.value, (M) => (o(), x(xe, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...V[6] || (V[6] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(a(M.filename), 1)
                  ]),
                  subtitle: i(() => [...V[7] || (V[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var S;
                    return [
                      g(pe, {
                        label: "Required by:",
                        value: ((S = M.workflow_names) == null ? void 0 : S.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (S) => j(M.filename)
                    }, {
                      default: i(() => [...V[8] || (V[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (S) => U(M.filename)
                    }, {
                      default: i(() => [...V[9] || (V[9] = [
                        y(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !w.value.length && !k.value.length ? (o(), x(Oe, {
              key: 2,
              icon: "📭",
              message: $.value ? `No models match '${$.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(je, {
        show: d.value,
        title: "About Environment Models",
        onClose: V[2] || (V[2] = (M) => d.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            V[10] || (V[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            V[11] || (V[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          g(Z, {
            variant: "primary",
            onClick: C
          }, {
            default: i(() => [...V[12] || (V[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      E.value ? (o(), x(oo, {
        key: 0,
        identifier: E.value,
        onClose: V[3] || (V[3] = (M) => E.value = null)
      }, null, 8, ["identifier"])) : u("", !0)
    ], 64));
  }
}), eu = /* @__PURE__ */ Q(Zc, [["__scopeId", "data-v-cb4f12b3"]]), tu = {
  key: 0,
  class: "indexing-progress"
}, ou = { class: "progress-info" }, su = { class: "progress-label" }, nu = { class: "progress-count" }, au = { class: "progress-bar" }, lu = { class: "modal-content" }, iu = { class: "modal-header" }, ru = { class: "modal-body" }, du = { class: "input-group" }, cu = { class: "current-path" }, uu = { class: "input-group" }, mu = { class: "modal-footer" }, vu = { class: "modal-content" }, fu = { class: "modal-header" }, gu = { class: "modal-body" }, pu = { class: "input-group" }, hu = { class: "input-group" }, yu = { class: "modal-footer" }, wu = /* @__PURE__ */ J({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: p,
      setModelsDirectory: f
    } = Ce(), { addToQueue: h } = Ct(), m = c, l = b([]), v = b(!1), $ = b(!1), d = b(null), E = b(""), C = b(!1), z = b(null), w = b(!1), k = b(null), _ = b(""), T = b(!1), N = b(!1), U = b(""), j = b(""), P = b(null), L = B(
      () => l.value.reduce((O, R) => O + (R.size || 0), 0)
    ), V = B(() => {
      if (!E.value.trim()) return l.value;
      const O = E.value.toLowerCase();
      return l.value.filter((R) => {
        const ne = R, X = R.sha256 || ne.sha256_hash || "";
        return R.filename.toLowerCase().includes(O) || X.toLowerCase().includes(O);
      });
    }), M = B(() => {
      const O = {};
      for (const ne of V.value) {
        const X = ne.type || "other";
        O[X] || (O[X] = []), O[X].push(ne);
      }
      const R = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([ne], [X]) => {
        const $e = R.indexOf(ne), ae = R.indexOf(X);
        return $e >= 0 && ae >= 0 ? $e - ae : $e >= 0 ? -1 : ae >= 0 ? 1 : ne.localeCompare(X);
      }).map(([ne, X]) => ({ type: ne, models: X }));
    });
    function S(O) {
      if (!O) return "Unknown";
      const R = 1024 * 1024 * 1024, ne = 1024 * 1024;
      return O >= R ? `${(O / R).toFixed(1)} GB` : O >= ne ? `${(O / ne).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function F(O) {
      z.value = O.hash || O.filename;
    }
    async function W() {
      $.value = !0, d.value = null;
      try {
        const O = await r();
        await G(), O.changes > 0 && console.log(`Scan complete: ${O.changes} changes detected`);
      } catch (O) {
        d.value = O instanceof Error ? O.message : "Failed to scan models";
      } finally {
        $.value = !1;
      }
    }
    async function Y() {
      if (_.value.trim()) {
        T.value = !0, d.value = null;
        try {
          const O = await f(_.value.trim());
          k.value = O.path, w.value = !1, _.value = "", await G(), console.log(`Directory changed: ${O.models_indexed} models indexed`), m("refresh");
        } catch (O) {
          d.value = O instanceof Error ? O.message : "Failed to change directory";
        } finally {
          T.value = !1;
        }
      }
    }
    function le() {
      if (!U.value.trim() || !j.value.trim()) return;
      const O = j.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: O,
        url: U.value.trim(),
        targetPath: j.value.trim()
      }]), U.value = "", j.value = "", N.value = !1;
    }
    async function G() {
      v.value = !0, d.value = null;
      try {
        l.value = await n();
      } catch (O) {
        d.value = O instanceof Error ? O.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function te() {
      try {
        const O = await p();
        k.value = O.path;
      } catch {
      }
    }
    return _e(() => {
      G(), te();
    }), (O, R) => (o(), s(H, null, [
      g(Ie, null, {
        header: i(() => [
          g(Ee, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: R[2] || (R[2] = (ne) => C.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                disabled: $.value,
                onClick: W
              }, {
                default: i(() => [
                  y(a($.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: R[0] || (R[0] = (ne) => w.value = !0)
              }, {
                default: i(() => [...R[15] || (R[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: R[1] || (R[1] = (ne) => N.value = !0)
              }, {
                default: i(() => [...R[16] || (R[16] = [
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
          P.value ? (o(), s("div", tu, [
            e("div", ou, [
              e("span", su, a(P.value.message), 1),
              e("span", nu, a(P.value.current) + "/" + a(P.value.total), 1)
            ]),
            e("div", au, [
              e("div", {
                class: "progress-fill",
                style: Qe({ width: `${P.value.current / P.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : u("", !0),
          g(ct, {
            modelValue: E.value,
            "onUpdate:modelValue": R[3] || (R[3] = (ne) => E.value = ne),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value || P.value ? (o(), x(He, {
            key: 0,
            message: P.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), x(qe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            l.value.length ? (o(), x(ut, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(l.value.length) + " models • " + a(S(L.value)), 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(H, null, oe(M.value, (ne) => (o(), x(be, {
              key: ne.type,
              title: ne.type.toUpperCase(),
              count: ne.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(ne.models, (X) => (o(), x(xe, {
                  key: X.sha256 || X.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...R[17] || (R[17] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(a(X.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(a(S(X.size)), 1)
                  ]),
                  details: i(() => [
                    g(pe, {
                      label: "Hash:",
                      value: X.hash ? X.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($e) => F(X)
                    }, {
                      default: i(() => [...R[18] || (R[18] = [
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
            V.value.length ? u("", !0) : (o(), x(Oe, {
              key: 1,
              icon: "📭",
              message: E.value ? `No models match '${E.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(je, {
        show: C.value,
        title: "About Workspace Model Index",
        onClose: R[4] || (R[4] = (ne) => C.value = !1)
      }, {
        content: i(() => [...R[19] || (R[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      z.value ? (o(), x(oo, {
        key: 0,
        identifier: z.value,
        onClose: R[5] || (R[5] = (ne) => z.value = null)
      }, null, 8, ["identifier"])) : u("", !0),
      (o(), x(Se, { to: "body" }, [
        w.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: R[9] || (R[9] = ke((ne) => w.value = !1, ["self"]))
        }, [
          e("div", lu, [
            e("div", iu, [
              R[20] || (R[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: R[6] || (R[6] = (ne) => w.value = !1)
              }, "✕")
            ]),
            e("div", ru, [
              e("div", du, [
                R[21] || (R[21] = e("label", null, "Current Directory", -1)),
                e("code", cu, a(k.value || "Not set"), 1)
              ]),
              e("div", uu, [
                R[22] || (R[22] = e("label", null, "New Directory Path", -1)),
                g(Ne, {
                  modelValue: _.value,
                  "onUpdate:modelValue": R[7] || (R[7] = (ne) => _.value = ne),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              R[23] || (R[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", mu, [
              g(ie, {
                variant: "secondary",
                onClick: R[8] || (R[8] = (ne) => w.value = !1)
              }, {
                default: i(() => [...R[24] || (R[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(ie, {
                variant: "primary",
                disabled: !_.value.trim() || T.value,
                loading: T.value,
                onClick: Y
              }, {
                default: i(() => [
                  y(a(T.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : u("", !0)
      ])),
      (o(), x(Se, { to: "body" }, [
        N.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: R[14] || (R[14] = ke((ne) => N.value = !1, ["self"]))
        }, [
          e("div", vu, [
            e("div", fu, [
              R[25] || (R[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: R[10] || (R[10] = (ne) => N.value = !1)
              }, "✕")
            ]),
            e("div", gu, [
              e("div", pu, [
                R[26] || (R[26] = e("label", null, "Download URL", -1)),
                g(Ne, {
                  modelValue: U.value,
                  "onUpdate:modelValue": R[11] || (R[11] = (ne) => U.value = ne),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", hu, [
                R[27] || (R[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(Ne, {
                  modelValue: j.value,
                  "onUpdate:modelValue": R[12] || (R[12] = (ne) => j.value = ne),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              R[28] || (R[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", yu, [
              g(ie, {
                variant: "secondary",
                onClick: R[13] || (R[13] = (ne) => N.value = !1)
              }, {
                default: i(() => [...R[29] || (R[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(ie, {
                variant: "primary",
                disabled: !U.value.trim() || !j.value.trim(),
                onClick: le
              }, {
                default: i(() => [...R[30] || (R[30] = [
                  y(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : u("", !0)
      ]))
    ], 64));
  }
}), ku = /* @__PURE__ */ Q(wu, [["__scopeId", "data-v-73b78d84"]]), bu = { class: "node-details" }, _u = { class: "status-row" }, $u = {
  key: 0,
  class: "detail-row"
}, Cu = { class: "value" }, xu = { class: "detail-row" }, Su = { class: "value" }, Iu = {
  key: 1,
  class: "detail-row"
}, Eu = { class: "value mono" }, Mu = {
  key: 2,
  class: "detail-row"
}, zu = ["href"], Lu = {
  key: 3,
  class: "detail-row"
}, Tu = { class: "value mono small" }, Du = { class: "detail-row" }, Ru = {
  key: 0,
  class: "value"
}, Nu = {
  key: 1,
  class: "workflow-list"
}, Ou = /* @__PURE__ */ J({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), f = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, l) => (o(), x(Ye, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (v) => r("close"))
    }, {
      body: i(() => [
        e("div", bu, [
          e("div", _u, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", p.value])
            }, a(f.value), 3)
          ]),
          t.node.version ? (o(), s("div", $u, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Cu, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : u("", !0),
          e("div", xu, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Su, a(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", Iu, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Eu, a(t.node.registry_id), 1)
          ])) : u("", !0),
          t.node.repository ? (o(), s("div", Mu, [
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
            ], 8, zu)
          ])) : u("", !0),
          t.node.download_url ? (o(), s("div", Lu, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Tu, a(t.node.download_url), 1)
          ])) : u("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Du, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", Ru, " Not used in any workflows ")) : (o(), s("div", Nu, [
              (o(!0), s(H, null, oe(t.node.used_in_workflows, (v) => (o(), s("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (v) => r("close"))
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
}), Uu = /* @__PURE__ */ Q(Ou, [["__scopeId", "data-v-b342f626"]]), Bu = { key: 0 }, Pu = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Vu = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Au = /* @__PURE__ */ J({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: r, trackNodeAsDev: p, installNode: f, uninstallNode: h } = Ce(), m = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = b(!1), v = b(null), $ = b(""), d = b(!1), E = b(null), C = B(() => {
      if (!$.value.trim()) return m.value.nodes;
      const M = $.value.toLowerCase();
      return m.value.nodes.filter(
        (S) => {
          var F, W;
          return S.name.toLowerCase().includes(M) || ((F = S.description) == null ? void 0 : F.toLowerCase().includes(M)) || ((W = S.repository) == null ? void 0 : W.toLowerCase().includes(M));
        }
      );
    }), z = B(
      () => C.value.filter((M) => M.installed && M.tracked)
    ), w = B(
      () => C.value.filter((M) => !M.installed && M.tracked)
    ), k = B(
      () => C.value.filter((M) => M.installed && !M.tracked)
    );
    function _(M) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[M] || M;
    }
    function T(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function N(M) {
      E.value = M;
    }
    function U() {
      n("open-node-manager");
    }
    async function j(M) {
      if (confirm(`Track "${M}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const S = await p(M);
          S.status === "success" ? (alert(`Node "${M}" is now tracked as development!`), await V()) : alert(`Failed to track node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error tracking node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function P(M) {
      if (confirm(`Remove untracked node "${M}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const S = await h(M);
          S.status === "success" ? (alert(`Node "${M}" removed!`), await V()) : alert(`Failed to remove node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error removing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function L(M) {
      if (confirm(`Install node "${M}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const S = await f(M);
          S.status === "success" ? (alert(`Node "${M}" installed successfully!`), await V()) : alert(`Failed to install node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error installing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function V() {
      l.value = !0, v.value = null;
      try {
        m.value = await r();
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return _e(V), (M, S) => (o(), s(H, null, [
      g(Ie, null, {
        header: i(() => [
          g(Ee, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (F) => d.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: i(() => [...S[5] || (S[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(ct, {
            modelValue: $.value,
            "onUpdate:modelValue": S[1] || (S[1] = (F) => $.value = F),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (o(), x(He, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (o(), x(qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            m.value.total_count ? (o(), x(ut, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(a(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (o(), s(H, { key: 0 }, [
                  y(" • " + a(m.value.missing_count) + " missing", 1)
                ], 64)) : u("", !0),
                m.value.untracked_count ? (o(), s(H, { key: 1 }, [
                  y(" • " + a(m.value.untracked_count) + " untracked", 1)
                ], 64)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            k.value.length ? (o(), x(be, {
              key: 1,
              title: "UNTRACKED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(k.value, (F) => (o(), x(xe, {
                  key: F.name,
                  status: "warning"
                }, {
                  icon: i(() => [...S[6] || (S[6] = [
                    y("?", -1)
                  ])]),
                  title: i(() => [
                    y(a(F.name), 1)
                  ]),
                  subtitle: i(() => [...S[7] || (S[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(pe, {
                      label: "Used by:",
                      value: T(F)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => N(F)
                    }, {
                      default: i(() => [...S[8] || (S[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => j(F.name)
                    }, {
                      default: i(() => [...S[9] || (S[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (W) => P(F.name)
                    }, {
                      default: i(() => [...S[10] || (S[10] = [
                        y(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            z.value.length ? (o(), x(be, {
              key: 2,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(z.value, (F) => (o(), x(xe, {
                  key: F.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    y(a(F.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    y(a(F.name), 1)
                  ]),
                  subtitle: i(() => [
                    F.version ? (o(), s("span", Bu, a(F.source === "development" ? "" : "v") + a(F.version), 1)) : (o(), s("span", Pu, "version unknown")),
                    e("span", Vu, " • " + a(_(F.source)), 1)
                  ]),
                  details: i(() => [
                    g(pe, {
                      label: "Used by:",
                      value: T(F)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => N(F)
                    }, {
                      default: i(() => [...S[11] || (S[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: U
                    }, {
                      default: i(() => [...S[12] || (S[12] = [
                        y(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            w.value.length ? (o(), x(be, {
              key: 3,
              title: "MISSING",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(w.value, (F) => (o(), x(xe, {
                  key: F.name,
                  status: "missing"
                }, {
                  icon: i(() => [...S[13] || (S[13] = [
                    y("!", -1)
                  ])]),
                  title: i(() => [
                    y(a(F.name), 1)
                  ]),
                  subtitle: i(() => [...S[14] || (S[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(pe, {
                      label: "Required by:",
                      value: T(F)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => N(F)
                    }, {
                      default: i(() => [...S[15] || (S[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => L(F.name)
                    }, {
                      default: i(() => [...S[16] || (S[16] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !z.value.length && !w.value.length && !k.value.length ? (o(), x(Oe, {
              key: 4,
              icon: "📭",
              message: $.value ? `No nodes match '${$.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(je, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: S[3] || (S[3] = (F) => d.value = !1)
      }, {
        content: i(() => [...S[17] || (S[17] = [
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
          g(Z, {
            variant: "primary",
            onClick: S[2] || (S[2] = (F) => d.value = !1)
          }, {
            default: i(() => [...S[18] || (S[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      E.value ? (o(), x(Uu, {
        key: 0,
        node: E.value,
        onClose: S[4] || (S[4] = (F) => E.value = null)
      }, null, 8, ["node"])) : u("", !0)
    ], 64));
  }
}), Fu = /* @__PURE__ */ Q(Au, [["__scopeId", "data-v-4ac1465a"]]), Wu = { class: "remote-url-display" }, Gu = ["title"], ju = ["title"], Hu = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, qu = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Ku = /* @__PURE__ */ J({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = b(!1), r = B(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const f = c.url.slice(0, Math.floor(c.maxLength * 0.6)), h = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${f}...${h}`;
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
    return (f, h) => (o(), s("div", Wu, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, Gu),
      e("button", {
        class: se(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", qu, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", Hu, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, ju)
    ]));
  }
}), Ht = /* @__PURE__ */ Q(Ku, [["__scopeId", "data-v-7768a58d"]]), Ju = { class: "remote-title" }, Qu = {
  key: 0,
  class: "default-badge"
}, Yu = {
  key: 1,
  class: "sync-badge"
}, Xu = {
  key: 0,
  class: "ahead"
}, Zu = {
  key: 1,
  class: "behind"
}, em = {
  key: 0,
  class: "tracking-info"
}, tm = /* @__PURE__ */ J({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const n = t, r = B(() => n.fetchingRemote === n.remote.name), p = B(() => n.remote.is_default), f = B(() => !!n.trackingBranch);
    function h(m) {
      const l = new Date(m), $ = (/* @__PURE__ */ new Date()).getTime() - l.getTime(), d = Math.floor($ / 6e4);
      if (d < 1) return "Just now";
      if (d < 60) return `${d}m ago`;
      const E = Math.floor(d / 60);
      if (E < 24) return `${E}h ago`;
      const C = Math.floor(E / 24);
      return C < 7 ? `${C}d ago` : l.toLocaleDateString();
    }
    return (m, l) => (o(), x(xe, {
      status: p.value ? "synced" : void 0
    }, {
      icon: i(() => [
        y(a(p.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Ju, [
          e("span", null, a(t.remote.name), 1),
          p.value ? (o(), s("span", Qu, "DEFAULT")) : u("", !0),
          t.syncStatus ? (o(), s("span", Yu, [
            t.syncStatus.ahead > 0 ? (o(), s("span", Xu, "↑" + a(t.syncStatus.ahead), 1)) : u("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", Zu, "↓" + a(t.syncStatus.behind), 1)) : u("", !0)
          ])) : u("", !0)
        ])
      ]),
      subtitle: i(() => [
        f.value ? (o(), s("span", em, " Tracking: " + a(t.trackingBranch), 1)) : u("", !0)
      ]),
      details: i(() => {
        var v;
        return [
          g(pe, { label: "Fetch:" }, {
            default: i(() => [
              g(Ht, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), x(pe, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              g(Ht, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : u("", !0),
          (v = t.syncStatus) != null && v.last_fetch ? (o(), x(pe, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, a(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : u("", !0)
        ];
      }),
      actions: i(() => [
        g(Z, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: l[0] || (l[0] = (v) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...l[3] || (l[3] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        g(Z, {
          variant: "secondary",
          size: "xs",
          onClick: l[1] || (l[1] = (v) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...l[4] || (l[4] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        p.value ? u("", !0) : (o(), x(Z, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: l[2] || (l[2] = (v) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...l[5] || (l[5] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), om = /* @__PURE__ */ Q(tm, [["__scopeId", "data-v-17362e45"]]), sm = ["for"], nm = {
  key: 0,
  class: "base-form-field-required"
}, am = { class: "base-form-field-input" }, lm = {
  key: 1,
  class: "base-form-field-error"
}, im = {
  key: 2,
  class: "base-form-field-hint"
}, rm = /* @__PURE__ */ J({
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
    return (r, p) => (o(), s("div", {
      class: se(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (o(), s("span", nm, "*")) : u("", !0)
      ], 8, sm)) : u("", !0),
      e("div", am, [
        ue(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", lm, a(t.error), 1)) : t.hint ? (o(), s("span", im, a(t.hint), 1)) : u("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ Q(rm, [["__scopeId", "data-v-9a1cf296"]]), dm = { class: "remote-form" }, cm = { class: "form-header" }, um = { class: "form-body" }, mm = {
  key: 0,
  class: "form-error"
}, vm = { class: "form-actions" }, fm = /* @__PURE__ */ J({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = b({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), f = b(!1), h = b(null);
    Bt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = B(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!m.value || f.value)) {
        h.value = null, f.value = !0;
        try {
          r("submit", p.value);
        } catch (v) {
          h.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          f.value = !1;
        }
      }
    }
    return (v, $) => (o(), s("div", dm, [
      e("div", cm, [
        g(ze, null, {
          default: i(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", um, [
        g(Dt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            g(Ne, {
              modelValue: p.value.name,
              "onUpdate:modelValue": $[0] || ($[0] = (d) => p.value.name = d),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g(Dt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            g(Ne, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": $[1] || ($[1] = (d) => p.value.fetchUrl = d),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g(Dt, { label: "Push URL (optional)" }, {
          default: i(() => [
            g(Ne, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": $[2] || ($[2] = (d) => p.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), s("div", mm, a(h.value), 1)) : u("", !0)
      ]),
      e("div", vm, [
        g(Z, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: f.value,
          onClick: l
        }, {
          default: i(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        g(Z, {
          variant: "ghost",
          size: "md",
          onClick: $[3] || ($[3] = (d) => v.$emit("cancel"))
        }, {
          default: i(() => [...$[4] || ($[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), gm = /* @__PURE__ */ Q(fm, [["__scopeId", "data-v-56021b18"]]), pm = { key: 0 }, hm = /* @__PURE__ */ J({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: p,
      fetchRemote: f,
      getRemoteSyncStatus: h
    } = Ce(), m = b([]), l = b(null), v = b({}), $ = b(!1), d = b(null), E = b(""), C = b(!1), z = b(null), w = b(!1), k = b("add"), _ = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = B(() => {
      if (!E.value.trim()) return m.value;
      const W = E.value.toLowerCase();
      return m.value.filter(
        (Y) => Y.name.toLowerCase().includes(W) || Y.fetch_url.toLowerCase().includes(W) || Y.push_url.toLowerCase().includes(W)
      );
    });
    function N(W) {
      var Y;
      return ((Y = l.value) == null ? void 0 : Y.remote) === W;
    }
    async function U() {
      $.value = !0, d.value = null;
      try {
        const W = await c();
        m.value = W.remotes, l.value = W.current_branch_tracking || null, await Promise.all(
          W.remotes.map(async (Y) => {
            const le = await h(Y.name);
            le && (v.value[Y.name] = le);
          })
        );
      } catch (W) {
        d.value = W instanceof Error ? W.message : "Failed to load remotes";
      } finally {
        $.value = !1;
      }
    }
    function j() {
      k.value = "add", _.value = { name: "", fetchUrl: "", pushUrl: "" }, w.value = !0;
    }
    function P(W) {
      const Y = m.value.find((le) => le.name === W);
      Y && (k.value = "edit", _.value = {
        name: Y.name,
        fetchUrl: Y.fetch_url,
        pushUrl: Y.push_url
      }, w.value = !0);
    }
    async function L(W) {
      try {
        k.value === "add" ? await n(W.name, W.fetchUrl) : await p(W.name, W.fetchUrl, W.pushUrl || void 0), w.value = !1, await U();
      } catch (Y) {
        d.value = Y instanceof Error ? Y.message : "Operation failed";
      }
    }
    function V() {
      w.value = !1, _.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function M(W) {
      z.value = W;
      try {
        await f(W);
        const Y = await h(W);
        Y && (v.value[W] = Y);
      } catch (Y) {
        d.value = Y instanceof Error ? Y.message : "Fetch failed";
      } finally {
        z.value = null;
      }
    }
    async function S(W) {
      if (confirm(`Remove remote "${W}"?`))
        try {
          await r(W), await U();
        } catch (Y) {
          d.value = Y instanceof Error ? Y.message : "Failed to remove remote";
        }
    }
    function F() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return _e(U), (W, Y) => (o(), s(H, null, [
      g(Ie, null, {
        header: i(() => [
          g(Ee, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Y[0] || (Y[0] = (le) => C.value = !0)
          }, {
            actions: i(() => [
              w.value ? u("", !0) : (o(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: i(() => [...Y[3] || (Y[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          w.value ? u("", !0) : (o(), x(ct, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (le) => E.value = le),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          $.value ? (o(), x(He, {
            key: 0,
            message: "Loading remotes..."
          })) : d.value ? (o(), x(qe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            w.value ? (o(), x(gm, {
              key: 0,
              mode: k.value,
              "remote-name": _.value.name,
              "fetch-url": _.value.fetchUrl,
              "push-url": _.value.pushUrl,
              onSubmit: L,
              onCancel: V
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : u("", !0),
            m.value.length && !w.value ? (o(), x(ut, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(m.value.length) + " remote" + a(m.value.length !== 1 ? "s" : "") + " ", 1),
                l.value ? (o(), s("span", pm, " • Tracking: " + a(l.value.remote) + "/" + a(l.value.branch), 1)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            T.value.length && !w.value ? (o(), x(be, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(T.value, (le) => {
                  var G;
                  return o(), x(om, {
                    key: le.name,
                    remote: le,
                    "sync-status": v.value[le.name],
                    "tracking-branch": N(le.name) ? (G = l.value) == null ? void 0 : G.branch : void 0,
                    "fetching-remote": z.value,
                    onFetch: M,
                    onEdit: P,
                    onRemove: S
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !T.value.length && !w.value ? (o(), x(Oe, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "primary",
                  onClick: j
                }, {
                  default: i(() => [...Y[4] || (Y[4] = [
                    y(" Add Your First Remote ", -1)
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
      g(je, {
        show: C.value,
        title: "About Git Remotes",
        onClose: Y[2] || (Y[2] = (le) => C.value = !1)
      }, {
        content: i(() => [...Y[5] || (Y[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          g(Z, {
            variant: "link",
            onClick: F
          }, {
            default: i(() => [...Y[6] || (Y[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ym = /* @__PURE__ */ Q(hm, [["__scopeId", "data-v-a75719bb"]]), wm = { class: "setting-info" }, km = { class: "setting-label" }, bm = {
  key: 0,
  class: "required-marker"
}, _m = {
  key: 0,
  class: "setting-description"
}, $m = { class: "setting-control" }, Cm = /* @__PURE__ */ J({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: se(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", wm, [
        e("div", km, [
          y(a(t.label) + " ", 1),
          t.required ? (o(), s("span", bm, "*")) : u("", !0)
        ]),
        t.description ? (o(), s("div", _m, a(t.description), 1)) : u("", !0)
      ]),
      e("div", $m, [
        ue(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ge = /* @__PURE__ */ Q(Cm, [["__scopeId", "data-v-cb5d236c"]]), xm = { class: "toggle" }, Sm = ["checked", "disabled"], Im = /* @__PURE__ */ J({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", xm, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Sm),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), st = /* @__PURE__ */ Q(Im, [["__scopeId", "data-v-71c0f550"]]), Em = { class: "settings-section" }, Mm = { class: "path-setting" }, zm = { class: "path-value" }, Lm = { class: "path-setting" }, Tm = { class: "path-value" }, Dm = { class: "settings-section" }, Rm = { class: "settings-section" }, Nm = { class: "settings-section" }, Om = /* @__PURE__ */ J({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Ce(), r = b(!1), p = b(null), f = b(null), h = b(null), m = b(null), l = b(""), v = b(""), $ = b(!0), d = b(!0), E = b(!1), C = B(() => m.value ? l.value !== (m.value.civitai_api_key || "") : !1);
    async function z() {
      r.value = !0, p.value = null;
      try {
        h.value = await c(), m.value = { ...h.value }, l.value = h.value.civitai_api_key || "", v.value = h.value.huggingface_token || "", $.value = h.value.auto_sync_models, d.value = h.value.confirm_destructive;
        const T = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        E.value = T === "true";
      } catch (T) {
        p.value = T instanceof Error ? T.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function w() {
      var T;
      f.value = null;
      try {
        const N = {};
        l.value !== (((T = m.value) == null ? void 0 : T.civitai_api_key) || "") && (N.civitai_api_key = l.value || null), await n(N), await z(), f.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (N) {
        f.value = {
          type: "error",
          message: N instanceof Error ? N.message : "Failed to save settings"
        };
      }
    }
    function k() {
      m.value && (l.value = m.value.civitai_api_key || "", v.value = m.value.huggingface_token || "", $.value = m.value.auto_sync_models, d.value = m.value.confirm_destructive, f.value = null);
    }
    function _(T) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(T)), console.log("[ComfyGit] Auto-refresh setting saved:", T);
    }
    return _e(z), (T, N) => (o(), x(Ie, null, {
      header: i(() => [
        g(Ee, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            g(Z, {
              variant: "primary",
              size: "sm",
              disabled: !C.value,
              onClick: w
            }, {
              default: i(() => [...N[5] || (N[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            C.value ? (o(), x(Z, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: i(() => [...N[6] || (N[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : u("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), x(He, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (o(), x(qe, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
          g(be, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var U, j;
              return [
                e("div", Em, [
                  e("div", Mm, [
                    N[7] || (N[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    N[8] || (N[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", zm, a(((U = h.value) == null ? void 0 : U.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Lm, [
                    N[9] || (N[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    N[10] || (N[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Tm, a(((j = h.value) == null ? void 0 : j.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g(be, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", Dm, [
                g(Ge, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    g(Et, {
                      modelValue: l.value,
                      "onUpdate:modelValue": N[0] || (N[0] = (U) => l.value = U),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(Ge, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(Et, {
                      modelValue: v.value,
                      "onUpdate:modelValue": N[1] || (N[1] = (U) => v.value = U),
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
          g(be, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", Rm, [
                g(Ge, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    g(st, {
                      modelValue: E.value,
                      "onUpdate:modelValue": [
                        N[2] || (N[2] = (U) => E.value = U),
                        _
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g(be, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", Nm, [
                g(Ge, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(st, {
                      modelValue: $.value,
                      "onUpdate:modelValue": N[3] || (N[3] = (U) => $.value = U),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(Ge, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(st, {
                      modelValue: d.value,
                      "onUpdate:modelValue": N[4] || (N[4] = (U) => d.value = U),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), x(ut, {
            key: 0,
            variant: (f.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: Qe({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(f.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : u("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Um = /* @__PURE__ */ Q(Om, [["__scopeId", "data-v-7861bd35"]]), Bm = /* @__PURE__ */ J({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = Ce(), n = b([]), r = b(!1), p = b(null), f = b(!1), h = b(null), m = B(() => n.value.length === 0 ? [] : n.value.map((v) => ({
      text: `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function l() {
      r.value = !0, p.value = null;
      try {
        n.value = await c(void 0, 500);
      } catch (v) {
        p.value = v instanceof Error ? v.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var v;
          (v = h.value) != null && v.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e(l), (v, $) => (o(), s(H, null, [
      g(Ie, null, {
        header: i(() => [
          g(Ee, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (d) => f.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
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
          r.value ? (o(), x(He, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (o(), x(qe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            n.value.length === 0 ? (o(), x(Oe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(H, null, oe(m.value, (d, E) => (o(), s("div", {
                key: E,
                class: se(`log-line log-level-${d.level.toLowerCase()}`)
              }, a(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(je, {
        show: f.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (d) => f.value = !1)
      }, {
        content: i(() => [...$[3] || ($[3] = [
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
          g(Z, {
            variant: "primary",
            onClick: $[1] || ($[1] = (d) => f.value = !1)
          }, {
            default: i(() => [...$[4] || ($[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Pm = /* @__PURE__ */ Q(Bm, [["__scopeId", "data-v-39f6a756"]]), Vm = /* @__PURE__ */ J({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n } = Ce(), r = b([]), p = b(!1), f = b(null), h = b(!1), m = b("production"), l = b(null), v = B(() => r.value.length === 0 ? [] : r.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function $() {
      p.value = !0, f.value = null;
      try {
        r.value = await c(void 0, 500);
        try {
          const d = await n();
          m.value = d.environment || "production";
        } catch {
        }
      } catch (d) {
        f.value = d instanceof Error ? d.message : "Failed to load environment logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var d;
          (d = l.value) != null && d.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e($), (d, E) => (o(), s(H, null, [
      g(Ie, null, {
        header: i(() => [
          g(Ee, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (C) => h.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "secondary",
                size: "sm",
                onClick: $,
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
          p.value ? (o(), x(He, {
            key: 0,
            message: "Loading environment logs..."
          })) : f.value ? (o(), x(qe, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            r.value.length === 0 ? (o(), x(Oe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (o(!0), s(H, null, oe(v.value, (C, z) => (o(), s("div", {
                key: z,
                class: se(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(je, {
        show: h.value,
        title: "About Environment Logs",
        onClose: E[2] || (E[2] = (C) => h.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            E[3] || (E[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
            E[4] || (E[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          E[5] || (E[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          E[6] || (E[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          g(Z, {
            variant: "primary",
            onClick: E[1] || (E[1] = (C) => h.value = !1)
          }, {
            default: i(() => [...E[7] || (E[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Am = /* @__PURE__ */ Q(Vm, [["__scopeId", "data-v-4f1e6f72"]]), Fm = { class: "env-title" }, Wm = {
  key: 0,
  class: "current-badge"
}, Gm = {
  key: 0,
  class: "branch-info"
}, jm = /* @__PURE__ */ J({
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
    return (c, n) => (o(), x(xe, {
      status: t.isCurrent ? "synced" : void 0
    }, Mt({
      icon: i(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", Fm, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Wm, "CURRENT")) : u("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", Gm, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : u("", !0)
      ]),
      actions: i(() => [
        ue(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          g(pe, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          g(pe, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          g(pe, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (o(), x(pe, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : u("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Hm = /* @__PURE__ */ Q(jm, [["__scopeId", "data-v-9231917a"]]), qm = { class: "env-details" }, Km = { class: "status-row" }, Jm = {
  key: 0,
  class: "detail-row"
}, Qm = { class: "value mono" }, Ym = {
  key: 1,
  class: "detail-row"
}, Xm = { class: "value mono small" }, Zm = { class: "detail-row" }, ev = { class: "value" }, tv = { class: "detail-row" }, ov = { class: "value" }, sv = { class: "detail-row" }, nv = { class: "value" }, av = {
  key: 2,
  class: "section-divider"
}, lv = {
  key: 3,
  class: "detail-row"
}, iv = { class: "value" }, rv = {
  key: 4,
  class: "detail-row"
}, dv = { class: "value" }, cv = { class: "footer-actions" }, uv = /* @__PURE__ */ J({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function r(p) {
      if (!p) return "Unknown";
      try {
        const f = new Date(p), m = (/* @__PURE__ */ new Date()).getTime() - f.getTime(), l = Math.floor(m / 6e4), v = Math.floor(m / 36e5), $ = Math.floor(m / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : $ < 30 ? `${$} ${$ === 1 ? "day" : "days"} ago` : f.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, f) => (o(), x(Ye, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[2] || (f[2] = (h) => n("close"))
    }, {
      body: i(() => [
        e("div", qm, [
          e("div", Km, [
            f[3] || (f[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (o(), s("div", Jm, [
            f[4] || (f[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Qm, a(t.environment.current_branch), 1)
          ])) : u("", !0),
          t.environment.path ? (o(), s("div", Ym, [
            f[5] || (f[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Xm, a(t.environment.path), 1)
          ])) : u("", !0),
          f[11] || (f[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Zm, [
            f[6] || (f[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", ev, a(t.environment.workflow_count), 1)
          ]),
          e("div", tv, [
            f[7] || (f[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", ov, a(t.environment.node_count), 1)
          ]),
          e("div", sv, [
            f[8] || (f[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", nv, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (o(), s("div", av)) : u("", !0),
          t.environment.created_at ? (o(), s("div", lv, [
            f[9] || (f[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", iv, a(r(t.environment.created_at)), 1)
          ])) : u("", !0),
          t.environment.last_used ? (o(), s("div", rv, [
            f[10] || (f[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", dv, a(r(t.environment.last_used)), 1)
          ])) : u("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", cv, [
          t.canDelete ? (o(), x(ie, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[0] || (f[0] = (h) => n("delete", t.environment.name))
          }, {
            default: i(() => [...f[12] || (f[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : u("", !0),
          f[14] || (f[14] = e("div", { class: "footer-spacer" }, null, -1)),
          g(ie, {
            variant: "secondary",
            size: "sm",
            onClick: f[1] || (f[1] = (h) => n("close"))
          }, {
            default: i(() => [...f[13] || (f[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), mv = /* @__PURE__ */ Q(uv, [["__scopeId", "data-v-59855453"]]), vv = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], fv = "3.12", gv = [
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
], pv = "auto", hv = { class: "create-env-form" }, yv = { class: "form-field" }, wv = { class: "form-field" }, kv = ["value"], bv = { class: "form-field" }, _v = ["disabled"], $v = ["value"], Cv = { class: "form-field" }, xv = ["value"], Sv = { class: "form-field form-field--checkbox" }, Iv = { class: "form-checkbox" }, Ev = /* @__PURE__ */ J({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: r } = Ce(), p = b(""), f = b(fv), h = b("latest"), m = b(pv), l = b(!1), v = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), $ = b(!1), d = b(null);
    function E() {
      const z = p.value.trim();
      if (!z) return;
      const w = {
        name: z,
        python_version: f.value,
        comfyui_version: h.value,
        torch_backend: m.value,
        switch_after: l.value
      };
      n("create", w);
    }
    async function C() {
      $.value = !0;
      try {
        v.value = await r();
      } catch (z) {
        console.error("Failed to load ComfyUI releases:", z);
      } finally {
        $.value = !1;
      }
    }
    return _e(async () => {
      var z;
      await ko(), (z = d.value) == null || z.focus(), C();
    }), (z, w) => (o(), x(Ye, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: w[6] || (w[6] = (k) => n("close"))
    }, {
      body: i(() => [
        e("div", hv, [
          e("div", yv, [
            w[7] || (w[7] = e("label", { class: "form-label" }, "Name", -1)),
            at(e("input", {
              ref_key: "nameInput",
              ref: d,
              "onUpdate:modelValue": w[0] || (w[0] = (k) => p.value = k),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Je(E, ["enter"])
            }, null, 544), [
              [Yt, p.value]
            ])
          ]),
          e("div", wv, [
            w[8] || (w[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            at(e("select", {
              "onUpdate:modelValue": w[1] || (w[1] = (k) => f.value = k),
              class: "form-select"
            }, [
              (o(!0), s(H, null, oe(me(vv), (k) => (o(), s("option", {
                key: k,
                value: k
              }, a(k), 9, kv))), 128))
            ], 512), [
              [Lt, f.value]
            ])
          ]),
          e("div", bv, [
            w[9] || (w[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            at(e("select", {
              "onUpdate:modelValue": w[2] || (w[2] = (k) => h.value = k),
              class: "form-select",
              disabled: $.value
            }, [
              (o(!0), s(H, null, oe(v.value, (k) => (o(), s("option", {
                key: k.tag_name,
                value: k.tag_name
              }, a(k.name), 9, $v))), 128))
            ], 8, _v), [
              [Lt, h.value]
            ])
          ]),
          e("div", Cv, [
            w[10] || (w[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            at(e("select", {
              "onUpdate:modelValue": w[3] || (w[3] = (k) => m.value = k),
              class: "form-select"
            }, [
              (o(!0), s(H, null, oe(me(gv), (k) => (o(), s("option", {
                key: k,
                value: k
              }, a(k) + a(k === "auto" ? " (detect GPU)" : ""), 9, xv))), 128))
            ], 512), [
              [Lt, m.value]
            ])
          ]),
          e("div", Sv, [
            e("label", Iv, [
              at(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": w[4] || (w[4] = (k) => l.value = k)
              }, null, 512), [
                [bo, l.value]
              ]),
              w[11] || (w[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        g(ie, {
          variant: "primary",
          disabled: !p.value.trim(),
          onClick: E
        }, {
          default: i(() => [...w[12] || (w[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(ie, {
          variant: "secondary",
          onClick: w[5] || (w[5] = (k) => n("close"))
        }, {
          default: i(() => [...w[13] || (w[13] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Mv = /* @__PURE__ */ Q(Ev, [["__scopeId", "data-v-a2f13447"]]), zv = /* @__PURE__ */ J({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getEnvironments: p } = Ce(), f = b([]), h = b(!1), m = b(null), l = b(""), v = b(!1), $ = b(!1), d = b(null), E = B(
      () => f.value.find((N) => N.is_current)
    ), C = B(() => {
      if (!l.value.trim()) return f.value;
      const N = l.value.toLowerCase();
      return f.value.filter(
        (U) => {
          var j;
          return U.name.toLowerCase().includes(N) || ((j = U.current_branch) == null ? void 0 : j.toLowerCase().includes(N));
        }
      );
    });
    function z(N) {
      r("create", N), $.value = !1;
    }
    function w() {
      $.value = !0;
    }
    function k(N) {
      d.value = N;
    }
    function _(N) {
      d.value = null, r("delete", N);
    }
    async function T() {
      h.value = !0, m.value = null;
      try {
        f.value = await p();
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return _e(T), c({
      loadEnvironments: T
    }), (N, U) => (o(), s(H, null, [
      g(Ie, null, {
        header: i(() => [
          g(Ee, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: U[0] || (U[0] = (j) => v.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: w
              }, {
                default: i(() => [...U[6] || (U[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              g(Z, {
                variant: "secondary",
                size: "sm",
                onClick: T
              }, {
                default: i(() => [...U[7] || (U[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(ct, {
            modelValue: l.value,
            "onUpdate:modelValue": U[1] || (U[1] = (j) => l.value = j),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          h.value ? (o(), x(He, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (o(), x(qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            f.value.length ? (o(), x(ut, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + a(f.value.length) + " " + a(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                E.value ? (o(), s(H, { key: 0 }, [
                  U[8] || (U[8] = y(" • Current: ", -1)),
                  e("strong", null, a(E.value.name), 1)
                ], 64)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            C.value.length ? (o(), x(be, {
              key: 1,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: i(() => [
                (o(!0), s(H, null, oe(C.value, (j) => (o(), x(Hm, {
                  key: j.name,
                  "environment-name": j.name,
                  "is-current": j.is_current,
                  "current-branch": j.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    j.is_current ? u("", !0) : (o(), x(Z, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => N.$emit("switch", j.name)
                    }, {
                      default: i(() => [...U[9] || (U[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => k(j)
                    }, {
                      default: i(() => [...U[10] || (U[10] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            C.value.length ? u("", !0) : (o(), x(Oe, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Mt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  g(Z, {
                    variant: "primary",
                    onClick: w
                  }, {
                    default: i(() => [...U[11] || (U[11] = [
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
      g(je, {
        show: v.value,
        title: "About Environments",
        onClose: U[3] || (U[3] = (j) => v.value = !1)
      }, {
        content: i(() => [...U[12] || (U[12] = [
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
          g(Z, {
            variant: "secondary",
            onClick: U[2] || (U[2] = (j) => v.value = !1)
          }, {
            default: i(() => [...U[13] || (U[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      d.value ? (o(), x(mv, {
        key: 0,
        environment: d.value,
        "can-delete": f.value.length > 1,
        onClose: U[4] || (U[4] = (j) => d.value = null),
        onDelete: _
      }, null, 8, ["environment", "can-delete"])) : u("", !0),
      $.value ? (o(), x(Mv, {
        key: 1,
        onClose: U[5] || (U[5] = (j) => $.value = !1),
        onCreate: z
      })) : u("", !0)
    ], 64));
  }
}), Lv = /* @__PURE__ */ Q(zv, [["__scopeId", "data-v-307d9926"]]), Tv = { class: "file-path" }, Dv = { class: "file-path-text" }, Rv = ["title"], Nv = /* @__PURE__ */ J({
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
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, f) => (o(), s("div", Tv, [
      f[0] || (f[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Dv, a(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, Rv)) : u("", !0)
    ]));
  }
}), Ov = /* @__PURE__ */ Q(Nv, [["__scopeId", "data-v-f0982173"]]), Uv = { class: "output-path-input" }, Bv = { class: "export-actions" }, Pv = {
  key: 1,
  class: "export-warning"
}, Vv = /* @__PURE__ */ J({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = Ce(), n = b(""), r = b(!1), p = b(null), f = b(!1);
    async function h() {
      r.value = !0, p.value = null;
      try {
        const l = await c(n.value || void 0);
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
    async function m() {
      var l;
      if ((l = p.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (v) {
          console.error("Failed to copy path:", v);
        }
    }
    return (l, v) => (o(), s(H, null, [
      g(Ie, null, {
        header: i(() => [
          g(Ee, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              g(Z, {
                variant: "ghost",
                size: "sm",
                onClick: v[0] || (v[0] = ($) => f.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...v[5] || (v[5] = [
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
          g(be, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              g(xe, { status: "synced" }, {
                icon: i(() => [...v[6] || (v[6] = [
                  y("📦", -1)
                ])]),
                title: i(() => [...v[7] || (v[7] = [
                  y("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...v[8] || (v[8] = [
                  y(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  g(pe, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  g(pe, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  g(pe, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  g(pe, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(be, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              g(xe, { status: "synced" }, {
                icon: i(() => [...v[9] || (v[9] = [
                  y("📁", -1)
                ])]),
                title: i(() => [...v[10] || (v[10] = [
                  y("Output Destination", -1)
                ])]),
                subtitle: i(() => [...v[11] || (v[11] = [
                  y(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", Uv, [
                    g(Et, {
                      modelValue: n.value,
                      "onUpdate:modelValue": v[1] || (v[1] = ($) => n.value = $),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g(be, { title: "EXPORT" }, {
            default: i(() => [
              e("div", Bv, [
                g(Z, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
                }, {
                  default: i(() => [
                    v[12] || (v[12] = e("svg", {
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
                n.value ? (o(), x(Z, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: v[2] || (v[2] = ($) => n.value = "")
                }, {
                  default: i(() => [...v[13] || (v[13] = [
                    y(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : u("", !0)
              ])
            ]),
            _: 1
          }),
          p.value ? (o(), x(be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              g(xe, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, Mt({
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
                    g(pe, { label: "Saved to:" }, {
                      default: i(() => [
                        g(Ov, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (o(), x(pe, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : u("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (o(), s("div", Pv, [...v[14] || (v[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : u("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...v[15] || (v[15] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: v[3] || (v[3] = ($) => p.value = null)
                    }, {
                      default: i(() => [...v[16] || (v[16] = [
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
          })) : u("", !0)
        ]),
        _: 1
      }),
      g(je, {
        show: f.value,
        title: "About Environment Export",
        onClose: v[4] || (v[4] = ($) => f.value = !1)
      }, {
        content: i(() => [...v[17] || (v[17] = [
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
}), Av = /* @__PURE__ */ Q(Vv, [["__scopeId", "data-v-1777a9d5"]]), Fv = { class: "file-input-wrapper" }, Wv = ["accept", "multiple", "disabled"], Gv = /* @__PURE__ */ J({
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
    const r = n, p = b(null);
    function f() {
      var m;
      (m = p.value) == null || m.click();
    }
    function h(m) {
      const l = m.target;
      l.files && l.files.length > 0 && (r("change", l.files), l.value = "");
    }
    return c({
      triggerInput: f
    }), (m, l) => (o(), s("div", Fv, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Wv),
      g(Z, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: f
      }, {
        default: i(() => [
          ue(m.$slots, "default", {}, () => [
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
}), jv = /* @__PURE__ */ Q(Gv, [["__scopeId", "data-v-cd192091"]]), Hv = {
  key: 0,
  class: "drop-zone-empty"
}, qv = { class: "drop-zone-text" }, Kv = { class: "drop-zone-primary" }, Jv = { class: "drop-zone-secondary" }, Qv = { class: "drop-zone-actions" }, Yv = {
  key: 1,
  class: "drop-zone-file"
}, Xv = { class: "file-info" }, Zv = { class: "file-details" }, ef = { class: "file-name" }, tf = { class: "file-size" }, of = /* @__PURE__ */ J({
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
    const n = c, r = b(!1), p = b(null), f = b(0), h = B(() => p.value !== null), m = B(() => {
      var k;
      return ((k = p.value) == null ? void 0 : k.name) || "";
    }), l = B(() => {
      if (!p.value) return "";
      const k = p.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(k) {
      var _;
      f.value++, (_ = k.dataTransfer) != null && _.types.includes("Files") && (r.value = !0);
    }
    function $(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function d() {
      f.value--, f.value === 0 && (r.value = !1);
    }
    function E(k) {
      var T;
      f.value = 0, r.value = !1;
      const _ = (T = k.dataTransfer) == null ? void 0 : T.files;
      _ && _.length > 0 && z(_[0]);
    }
    function C(k) {
      k.length > 0 && z(k[0]);
    }
    function z(k) {
      p.value = k, n("fileSelected", k);
    }
    function w() {
      p.value = null, n("clear");
    }
    return (k, _) => (o(), s("div", {
      class: se(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: ke(v, ["prevent"]),
      onDragover: ke($, ["prevent"]),
      onDragleave: ke(d, ["prevent"]),
      onDrop: ke(E, ["prevent"])
    }, [
      h.value ? (o(), s("div", Yv, [
        e("div", Xv, [
          _[1] || (_[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Zv, [
            e("div", ef, a(m.value), 1),
            e("div", tf, a(l.value), 1)
          ])
        ]),
        g(Z, {
          variant: "ghost",
          size: "xs",
          onClick: w,
          title: "Remove file"
        }, {
          default: i(() => [..._[2] || (_[2] = [
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
      ])) : (o(), s("div", Hv, [
        _[0] || (_[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", qv, [
          e("p", Kv, a(t.primaryText), 1),
          e("p", Jv, a(t.secondaryText), 1)
        ]),
        e("div", Qv, [
          g(jv, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: C
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
}), sf = /* @__PURE__ */ Q(of, [["__scopeId", "data-v-e00abbca"]]), nf = { class: "import-preview" }, af = { class: "preview-header" }, lf = {
  key: 0,
  class: "source-env"
}, rf = { class: "preview-content" }, df = { class: "preview-section" }, cf = { class: "section-header" }, uf = { class: "section-info" }, mf = { class: "section-count" }, vf = {
  key: 0,
  class: "item-list"
}, ff = { class: "item-name" }, gf = {
  key: 0,
  class: "item-more"
}, pf = { class: "preview-section" }, hf = { class: "section-header" }, yf = { class: "section-info" }, wf = { class: "section-count" }, kf = {
  key: 0,
  class: "item-list"
}, bf = { class: "item-details" }, _f = { class: "item-name" }, $f = { class: "item-meta" }, Cf = {
  key: 0,
  class: "item-more"
}, xf = { class: "preview-section" }, Sf = { class: "section-header" }, If = { class: "section-info" }, Ef = { class: "section-count" }, Mf = {
  key: 0,
  class: "item-list"
}, zf = { class: "item-name" }, Lf = {
  key: 0,
  class: "item-more"
}, Tf = {
  key: 0,
  class: "preview-section"
}, Df = { class: "git-info" }, Rf = /* @__PURE__ */ J({
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
    const c = t, n = B(() => c.workflows.length), r = B(() => c.models.length), p = B(() => c.nodes.length);
    function f(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, m) => (o(), s("div", nf, [
      e("div", af, [
        g(ze, null, {
          default: i(() => [...m[0] || (m[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", lf, [
          m[1] || (m[1] = y(" From: ", -1)),
          g(Ot, null, {
            default: i(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : u("", !0)
      ]),
      e("div", rf, [
        e("div", df, [
          e("div", cf, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", uf, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", mf, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", vf, [
            (o(!0), s(H, null, oe(t.workflows.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ff, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", gf, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", pf, [
          e("div", hf, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", yf, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", wf, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", kf, [
            (o(!0), s(H, null, oe(t.models.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", bf, [
                e("span", _f, a(l.filename), 1),
                e("span", $f, a(f(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", Cf, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", xf, [
          e("div", Sf, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", If, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Ef, a(p.value) + " node" + a(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", Mf, [
            (o(!0), s(H, null, oe(t.nodes.slice(0, t.maxPreviewItems), (l) => (o(), s("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", zf, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", Lf, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", Tf, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Df, [
            t.gitBranch ? (o(), x(pe, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                g(Ot, null, {
                  default: i(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : u("", !0),
            t.gitCommit ? (o(), x(pe, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                g(Zt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : u("", !0)
          ])
        ])) : u("", !0)
      ])
    ]));
  }
}), Nf = /* @__PURE__ */ Q(Rf, [["__scopeId", "data-v-182fe113"]]), Of = { class: "import-options" }, Uf = { class: "options-container" }, Bf = { class: "option-section" }, Pf = { class: "conflict-options" }, Vf = ["value", "checked", "onChange"], Af = { class: "conflict-content" }, Ff = { class: "conflict-label" }, Wf = { class: "conflict-description" }, Gf = { class: "option-section" }, jf = { class: "component-toggles" }, Hf = /* @__PURE__ */ J({
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
    return (p, f) => (o(), s("div", Of, [
      g(ze, null, {
        default: i(() => [...f[4] || (f[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Uf, [
        e("div", Bf, [
          g(Nt, null, {
            default: i(() => [...f[5] || (f[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Pf, [
            (o(), s(H, null, oe(r, (h) => e("label", {
              key: h.value,
              class: se(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (m) => n("update:conflictMode", h.value)
              }, null, 40, Vf),
              e("div", Af, [
                e("span", Ff, a(h.label), 1),
                e("span", Wf, a(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Gf, [
          g(Nt, null, {
            default: i(() => [...f[6] || (f[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", jf, [
            g(Ge, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                g(st, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": f[0] || (f[0] = (h) => n("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Ge, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                g(st, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": f[1] || (f[1] = (h) => n("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Ge, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                g(st, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": f[2] || (f[2] = (h) => n("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Ge, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                g(st, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": f[3] || (f[3] = (h) => n("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), qf = /* @__PURE__ */ Q(Hf, [["__scopeId", "data-v-0ec212b0"]]), Kf = {
  key: 0,
  class: "import-empty"
}, Jf = { class: "import-help" }, Qf = {
  key: 1,
  class: "import-configure"
}, Yf = { class: "selected-file-bar" }, Xf = { class: "file-bar-content" }, Zf = { class: "file-bar-info" }, eg = { class: "file-bar-name" }, tg = { class: "file-bar-size" }, og = { class: "import-actions" }, sg = {
  key: 2,
  class: "import-progress"
}, ng = { class: "progress-content" }, ag = { class: "progress-info" }, lg = { class: "progress-title" }, ig = { class: "progress-detail" }, rg = { class: "progress-bar" }, dg = { class: "progress-status" }, cg = {
  key: 3,
  class: "import-complete"
}, ug = { class: "complete-message" }, mg = { class: "complete-title" }, vg = { class: "complete-details" }, fg = { class: "complete-actions" }, gg = /* @__PURE__ */ J({
  __name: "ImportSection",
  setup(t) {
    const c = b(null), n = b(!1), r = b(!1), p = b(!1), f = b(""), h = b({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = b({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = b({
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
    }), v = B(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function $(w) {
      c.value = w;
    }
    function d() {
      c.value = null, r.value = !1, p.value = !1, f.value = "";
    }
    function E() {
      d(), n.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function C() {
      if (c.value) {
        n.value = !0, r.value = !1;
        try {
          const w = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of w)
            m.value = k, await new Promise((_) => setTimeout(_, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), p.value = !0, f.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (w) {
          p.value = !1, f.value = w instanceof Error ? w.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function z(w) {
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (w, k) => (o(), x(Ie, null, {
      header: i(() => [
        g(Ee, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !c.value && !n.value ? (o(), s("div", Kf, [
          g(sf, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: $
          }),
          e("div", Jf, [
            g(ze, null, {
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
        ])) : c.value && !n.value && !r.value ? (o(), s("div", Qf, [
          e("div", Yf, [
            e("div", Xf, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Zf, [
                e("div", eg, a(c.value.name), 1),
                e("div", tg, a(z(c.value.size)), 1)
              ])
            ]),
            g(Z, {
              variant: "ghost",
              size: "sm",
              onClick: d
            }, {
              default: i(() => [...k[8] || (k[8] = [
                y(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(Nf, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(qf, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (_) => h.value.conflictMode = _),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (_) => h.value.includeWorkflows = _),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (_) => h.value.includeModels = _),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (_) => h.value.includeNodes = _),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (_) => h.value.includeGitHistory = _)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && l.value.models.length > 0 ? (o(), x(lt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : u("", !0),
          e("div", og, [
            g(Z, {
              variant: "primary",
              size: "md",
              disabled: !v.value,
              onClick: C
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
            g(Z, {
              variant: "secondary",
              size: "md",
              onClick: d
            }, {
              default: i(() => [...k[10] || (k[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", sg, [
          e("div", ng, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", ag, [
              e("div", lg, a(m.value.message), 1),
              e("div", ig, a(m.value.detail), 1)
            ])
          ]),
          e("div", rg, [
            e("div", {
              class: "progress-bar-fill",
              style: Qe({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", dg, a(m.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", cg, [
          e("div", {
            class: se(["complete-icon", p.value ? "success" : "error"])
          }, a(p.value ? "✓" : "✕"), 3),
          e("div", ug, [
            e("div", mg, a(p.value ? "Import Successful" : "Import Failed"), 1),
            e("div", vg, a(f.value), 1)
          ]),
          e("div", fg, [
            g(Z, {
              variant: "primary",
              size: "md",
              onClick: E
            }, {
              default: i(() => [...k[12] || (k[12] = [
                y(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : u("", !0)
      ]),
      _: 1
    }));
  }
}), pg = /* @__PURE__ */ Q(gg, [["__scopeId", "data-v-18e18eb5"]]), hg = { class: "header-info" }, yg = { class: "commit-hash" }, wg = {
  key: 0,
  class: "commit-refs"
}, kg = { class: "commit-message" }, bg = { class: "commit-date" }, _g = {
  key: 0,
  class: "loading"
}, $g = {
  key: 1,
  class: "changes-section"
}, Cg = { class: "stats-row" }, xg = { class: "stat" }, Sg = { class: "stat insertions" }, Ig = { class: "stat deletions" }, Eg = {
  key: 0,
  class: "change-group"
}, Mg = {
  key: 1,
  class: "change-group"
}, zg = {
  key: 0,
  class: "version"
}, Lg = {
  key: 2,
  class: "change-group"
}, Tg = { class: "change-item" }, Dg = /* @__PURE__ */ J({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Ce(), r = b(null), p = b(!0), f = B(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), h = B(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return _e(async () => {
      try {
        r.value = await n(c.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (m, l) => (o(), x(Ye, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (v) => m.$emit("close"))
    }, {
      header: i(() => {
        var v, $, d, E;
        return [
          e("div", hg, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", yg, a(((v = r.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || (($ = t.commit.hash) == null ? void 0 : $.slice(0, 7))), 1),
            (E = (d = r.value) == null ? void 0 : d.refs) != null && E.length ? (o(), s("span", wg, [
              (o(!0), s(H, null, oe(r.value.refs, (C) => (o(), s("span", {
                key: C,
                class: "ref-badge"
              }, a(C), 1))), 128))
            ])) : u("", !0)
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
        var v, $;
        return [
          e("div", kg, a(((v = r.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", bg, a((($ = r.value) == null ? void 0 : $.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (o(), s("div", _g, "Loading details...")) : r.value ? (o(), s("div", $g, [
            e("div", Cg, [
              e("span", xg, a(r.value.stats.files_changed) + " files", 1),
              e("span", Sg, "+" + a(r.value.stats.insertions), 1),
              e("span", Ig, "-" + a(r.value.stats.deletions), 1)
            ]),
            f.value ? (o(), s("div", Eg, [
              g(bt, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(H, null, oe(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(d), 1)
              ]))), 128)),
              (o(!0), s(H, null, oe(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(d), 1)
              ]))), 128)),
              (o(!0), s(H, null, oe(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(d), 1)
              ]))), 128))
            ])) : u("", !0),
            h.value ? (o(), s("div", Mg, [
              g(bt, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(H, null, oe(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(d.name), 1),
                d.version ? (o(), s("span", zg, "(" + a(d.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), s(H, null, oe(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(d.name), 1)
              ]))), 128))
            ])) : u("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", Lg, [
              g(bt, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Tg, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(ie, {
          variant: "primary",
          onClick: l[2] || (l[2] = (v) => m.$emit("checkout", t.commit))
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
}), Rg = /* @__PURE__ */ Q(Dg, [["__scopeId", "data-v-d256ff6d"]]), Ng = { class: "dialog-message" }, Og = {
  key: 0,
  class: "dialog-details"
}, Ug = {
  key: 1,
  class: "dialog-warning"
}, Bg = /* @__PURE__ */ J({
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
    return (c, n) => (o(), x(Ye, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => c.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", Ng, a(t.message), 1),
        t.details && t.details.length ? (o(), s("div", Og, [
          (o(!0), s(H, null, oe(t.details, (r, p) => (o(), s("div", {
            key: p,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : u("", !0),
        t.warning ? (o(), s("p", Ug, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : u("", !0)
      ]),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => c.$emit("cancel"))
        }, {
          default: i(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), x(ie, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => c.$emit("secondary"))
        }, {
          default: i(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        g(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
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
}), Pg = /* @__PURE__ */ Q(Bg, [["__scopeId", "data-v-3670b9f5"]]), Vg = { class: "base-textarea-wrapper" }, Ag = ["value", "rows", "placeholder", "disabled", "maxlength"], Fg = {
  key: 0,
  class: "base-textarea-count"
}, Wg = /* @__PURE__ */ J({
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
    return (c, n) => (o(), s("div", Vg, [
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
      }, null, 40, Ag),
      t.showCharCount && t.maxLength ? (o(), s("div", Fg, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : u("", !0)
    ]));
  }
}), qt = /* @__PURE__ */ Q(Wg, [["__scopeId", "data-v-5516e6fc"]]), Gg = ["checked", "disabled"], jg = { class: "base-checkbox-box" }, Hg = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, qg = {
  key: 0,
  class: "base-checkbox-label"
}, Kg = /* @__PURE__ */ J({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", {
      class: se(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked))
      }, null, 40, Gg),
      e("span", jg, [
        t.modelValue ? (o(), s("svg", Hg, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : u("", !0)
      ]),
      c.$slots.default ? (o(), s("span", qg, [
        ue(c.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Kt = /* @__PURE__ */ Q(Kg, [["__scopeId", "data-v-bf17c831"]]), Jg = { class: "popover-header" }, Qg = { class: "popover-body" }, Yg = {
  key: 0,
  class: "changes-summary"
}, Xg = {
  key: 0,
  class: "change-item"
}, Zg = {
  key: 1,
  class: "change-item"
}, ep = {
  key: 2,
  class: "change-item"
}, tp = {
  key: 3,
  class: "change-item"
}, op = {
  key: 4,
  class: "change-item"
}, sp = {
  key: 1,
  class: "no-changes"
}, np = {
  key: 2,
  class: "loading"
}, ap = {
  key: 3,
  class: "issues-error"
}, lp = { class: "error-header" }, ip = { class: "error-title" }, rp = { class: "issues-list" }, dp = { class: "message-section" }, cp = { class: "popover-footer" }, up = {
  key: 1,
  class: "commit-popover"
}, mp = { class: "popover-header" }, vp = { class: "popover-body" }, fp = {
  key: 0,
  class: "changes-summary"
}, gp = {
  key: 0,
  class: "change-item"
}, pp = {
  key: 1,
  class: "change-item"
}, hp = {
  key: 2,
  class: "change-item"
}, yp = {
  key: 3,
  class: "change-item"
}, wp = {
  key: 4,
  class: "change-item"
}, kp = {
  key: 1,
  class: "no-changes"
}, bp = {
  key: 2,
  class: "loading"
}, _p = {
  key: 3,
  class: "issues-error"
}, $p = { class: "error-header" }, Cp = { class: "error-title" }, xp = { class: "issues-list" }, Sp = { class: "message-section" }, Ip = { class: "popover-footer" }, Ep = /* @__PURE__ */ J({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, r = c, { commit: p } = Ce(), f = b(""), h = b(!1), m = b(!1), l = b(null), v = B(() => {
      if (!n.status) return !1;
      const z = n.status.workflows;
      return z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || n.status.has_changes;
    }), $ = B(() => {
      var z;
      return (z = n.status) != null && z.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (w) => w.has_issues && (w.sync_state === "new" || w.sync_state === "modified")
      ) : [];
    }), d = B(() => $.value.length > 0), E = B(() => d.value && !m.value);
    async function C() {
      var z, w, k;
      if (!(d.value && !m.value) && !(!v.value || !f.value.trim() || h.value)) {
        h.value = !0, l.value = null;
        try {
          const _ = await p(f.value.trim(), m.value);
          _.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((z = _.summary) == null ? void 0 : z.new) || 0} new, ${((w = _.summary) == null ? void 0 : w.modified) || 0} modified, ${((k = _.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, f.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : _.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : _.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: _.message || "Commit failed" };
        } catch (_) {
          l.value = { type: "error", message: _ instanceof Error ? _.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (z, w) => t.asModal ? (o(), x(Se, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: w[5] || (w[5] = (k) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: w[4] || (w[4] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Jg, [
            w[11] || (w[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: w[0] || (w[0] = (k) => r("close"))
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
          e("div", Qg, [
            t.status && v.value ? (o(), s("div", Yg, [
              t.status.workflows.new.length ? (o(), s("div", Xg, [
                w[12] || (w[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : u("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Zg, [
                w[13] || (w[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : u("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", ep, [
                w[14] || (w[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", tp, [
                w[15] || (w[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", op, [
                w[16] || (w[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : u("", !0)
            ])) : t.status ? (o(), s("div", sp, " No changes to commit ")) : (o(), s("div", np, " Loading... ")),
            d.value ? (o(), s("div", ap, [
              e("div", lp, [
                w[17] || (w[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", ip, a($.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", rp, [
                (o(!0), s(H, null, oe($.value, (k) => (o(), s("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(k.name), 1),
                  y(": " + a(k.issue_summary), 1)
                ]))), 128))
              ]),
              g(Kt, {
                modelValue: m.value,
                "onUpdate:modelValue": w[1] || (w[1] = (k) => m.value = k),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...w[18] || (w[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : u("", !0),
            e("div", dp, [
              g(qt, {
                modelValue: f.value,
                "onUpdate:modelValue": w[2] || (w[2] = (k) => f.value = k),
                placeholder: E.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || h.value || E.value,
                rows: 3,
                onCtrlEnter: C
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (o(), s("div", {
              key: 4,
              class: se(["result", l.value.type])
            }, a(l.value.message), 3)) : u("", !0)
          ]),
          e("div", cp, [
            g(ie, {
              variant: "secondary",
              onClick: w[3] || (w[3] = (k) => r("close"))
            }, {
              default: i(() => [...w[19] || (w[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: m.value ? "danger" : "primary",
              disabled: !v.value || !f.value.trim() || h.value || E.value,
              loading: h.value,
              onClick: C
            }, {
              default: i(() => [
                y(a(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", up, [
      e("div", mp, [
        w[21] || (w[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: w[6] || (w[6] = (k) => r("close"))
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
      e("div", vp, [
        t.status && v.value ? (o(), s("div", fp, [
          t.status.workflows.new.length ? (o(), s("div", gp, [
            w[22] || (w[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          t.status.workflows.modified.length ? (o(), s("div", pp, [
            w[23] || (w[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", hp, [
            w[24] || (w[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", yp, [
            w[25] || (w[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", wp, [
            w[26] || (w[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : t.status ? (o(), s("div", kp, " No changes to commit ")) : (o(), s("div", bp, " Loading... ")),
        d.value ? (o(), s("div", _p, [
          e("div", $p, [
            w[27] || (w[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Cp, a($.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", xp, [
            (o(!0), s(H, null, oe($.value, (k) => (o(), s("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, a(k.name), 1),
              y(": " + a(k.issue_summary), 1)
            ]))), 128))
          ]),
          g(Kt, {
            modelValue: m.value,
            "onUpdate:modelValue": w[7] || (w[7] = (k) => m.value = k),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...w[28] || (w[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : u("", !0),
        e("div", Sp, [
          g(qt, {
            modelValue: f.value,
            "onUpdate:modelValue": w[8] || (w[8] = (k) => f.value = k),
            placeholder: E.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || h.value || E.value,
            rows: 3,
            onCtrlEnter: C
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (o(), s("div", {
          key: 4,
          class: se(["result", l.value.type])
        }, a(l.value.message), 3)) : u("", !0)
      ]),
      e("div", Ip, [
        g(ie, {
          variant: "secondary",
          onClick: w[9] || (w[9] = (k) => r("close"))
        }, {
          default: i(() => [...w[29] || (w[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(ie, {
          variant: m.value ? "danger" : "primary",
          disabled: !v.value || !f.value.trim() || h.value || E.value,
          loading: h.value,
          onClick: C
        }, {
          default: i(() => [
            y(a(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), so = /* @__PURE__ */ Q(Ep, [["__scopeId", "data-v-d92153de"]]), Mp = { class: "modal-header" }, zp = { class: "modal-body" }, Lp = { class: "switch-message" }, Tp = { class: "switch-details" }, Dp = { class: "modal-actions" }, Rp = /* @__PURE__ */ J({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), x(Se, { to: "body" }, [
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
          e("div", Mp, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", zp, [
            e("p", Lp, [
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
            e("p", Tp, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Dp, [
            g(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Np = /* @__PURE__ */ Q(Rp, [["__scopeId", "data-v-e9c5253e"]]), Op = { class: "progress-bar" }, Up = /* @__PURE__ */ J({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = B(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (r, p) => (o(), s("div", Op, [
      e("div", {
        class: se(["progress-fill", t.variant]),
        style: Qe({ width: n.value })
      }, null, 6)
    ]));
  }
}), Bp = /* @__PURE__ */ Q(Up, [["__scopeId", "data-v-1beb0512"]]), Pp = {
  key: 0,
  class: "modal-overlay"
}, Vp = { class: "modal-content" }, Ap = { class: "modal-body" }, Fp = { class: "progress-info" }, Wp = { class: "progress-percentage" }, Gp = { class: "progress-state" }, jp = { class: "switch-steps" }, Hp = { class: "step-icon" }, qp = { class: "step-label" }, Kp = /* @__PURE__ */ J({
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
    }), r = B(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), p = B(() => {
      const f = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = f.findIndex((m) => m.state === c.state);
      return f.map((m, l) => {
        let v = "pending", $ = "○";
        return l < h ? (v = "completed", $ = "✓") : l === h && (v = "active", $ = "⟳"), {
          ...m,
          status: v,
          icon: $
        };
      });
    });
    return (f, h) => (o(), x(Se, { to: "body" }, [
      t.show ? (o(), s("div", Pp, [
        e("div", Vp, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Ap, [
            g(Bp, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Fp, [
              e("div", Wp, a(t.progress) + "%", 1),
              e("div", Gp, a(n.value), 1)
            ]),
            e("div", jp, [
              (o(!0), s(H, null, oe(p.value, (m) => (o(), s("div", {
                key: m.state,
                class: se(["switch-step", m.status])
              }, [
                e("span", Hp, a(m.icon), 1),
                e("span", qp, a(m.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Jp = /* @__PURE__ */ Q(Kp, [["__scopeId", "data-v-768a5078"]]), Qp = { class: "modal-header" }, Yp = { class: "modal-body" }, Xp = {
  key: 0,
  class: "node-section"
}, Zp = { class: "node-list" }, eh = {
  key: 1,
  class: "node-section"
}, th = { class: "node-list" }, oh = { class: "modal-actions" }, sh = /* @__PURE__ */ J({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), x(Se, { to: "body" }, [
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
          e("div", Qp, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Yp, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Xp, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Zp, [
                (o(!0), s(H, null, oe(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : u("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", eh, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", th, [
                (o(!0), s(H, null, oe(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
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
          e("div", oh, [
            g(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), nh = /* @__PURE__ */ Q(sh, [["__scopeId", "data-v-7cad7518"]]);
async function ht(t, c = {}, n = 5e3) {
  const r = new AbortController(), p = setTimeout(() => r.abort(), n);
  try {
    const f = await fetch(t, {
      ...c,
      signal: r.signal
    });
    return clearTimeout(p), f;
  } catch (f) {
    throw clearTimeout(p), f.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : f;
  }
}
function ah() {
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
  async function p() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await ht(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function f() {
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
    restart: p,
    kill: f
  };
}
const lh = { class: "comfygit-panel" }, ih = { class: "panel-header" }, rh = { class: "header-left" }, dh = {
  key: 0,
  class: "header-info"
}, ch = { class: "header-actions" }, uh = { class: "env-switcher" }, mh = {
  key: 0,
  class: "header-info"
}, vh = { class: "branch-name" }, fh = { class: "panel-main" }, gh = { class: "sidebar" }, ph = { class: "sidebar-section" }, hh = { class: "sidebar-section" }, yh = { class: "sidebar-section" }, wh = { class: "content-area" }, kh = {
  key: 0,
  class: "error-message"
}, bh = {
  key: 1,
  class: "loading"
}, _h = {
  key: 4,
  class: "dialog-overlay"
}, $h = { class: "dialog-content create-progress-dialog" }, Ch = { class: "dialog-body create-progress-body" }, xh = { class: "create-progress-message" }, Sh = { class: "dialog-content env-selector-dialog" }, Ih = { class: "dialog-header" }, Eh = { class: "dialog-body" }, Mh = { class: "env-list" }, zh = { class: "env-info" }, Lh = { class: "env-name-row" }, Th = { class: "env-indicator" }, Dh = { class: "env-name" }, Rh = {
  key: 0,
  class: "env-branch"
}, Nh = {
  key: 1,
  class: "current-label"
}, Oh = { class: "env-stats" }, Uh = ["onClick"], Bh = { class: "toast-container" }, Ph = { class: "toast-icon" }, Vh = { class: "toast-message" }, Ah = /* @__PURE__ */ J({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = c, {
      getStatus: r,
      getHistory: p,
      getBranches: f,
      checkout: h,
      createBranch: m,
      switchBranch: l,
      getEnvironments: v,
      switchEnvironment: $,
      getSwitchProgress: d,
      createEnvironment: E,
      getCreateProgress: C,
      deleteEnvironment: z,
      syncEnvironmentManually: w
    } = Ce(), k = ah(), _ = b(null), T = b([]), N = b([]), U = b([]), j = B(() => U.value.find((q) => q.is_current)), P = b(!1), L = b(null), V = b(null), M = b(!1), S = b(null), F = b(null), W = b(!1), Y = b(!1), le = b(""), G = b({ state: "idle", progress: 0, message: "" });
    let te = null, O = null;
    const R = b(!1), ne = b({ state: "idle", message: "" }), X = b(null);
    let $e = null;
    const ae = b("status"), Xe = b("this-env");
    function he(q, I) {
      ae.value = q, Xe.value = I;
    }
    function mt(q) {
      const re = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[q];
      re && he(re.view, re.section);
    }
    function vt() {
      he("branches", "this-env");
    }
    function ft() {
      n("close"), setTimeout(() => {
        var I;
        const q = document.querySelectorAll("button.comfyui-button");
        for (const re of q)
          if (((I = re.textContent) == null ? void 0 : I.trim()) === "Manager") {
            re.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const we = b(null), Ke = b(!1), Ae = b(!1), Ue = b([]);
    let gt = 0;
    function fe(q, I = "info", re = 3e3) {
      const ye = ++gt;
      return Ue.value.push({ id: ye, message: q, type: I }), re > 0 && setTimeout(() => {
        Ue.value = Ue.value.filter((Te) => Te.id !== ye);
      }, re), ye;
    }
    function Be(q) {
      Ue.value = Ue.value.filter((I) => I.id !== q);
    }
    function K(q) {
      switch (q) {
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
      if (!_.value) return "neutral";
      const q = _.value.workflows, I = q.new.length > 0 || q.modified.length > 0 || q.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? I ? "warning" : "success" : "error";
    });
    B(() => _.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function A() {
      P.value = !0, L.value = null;
      try {
        const [q, I, re, ye] = await Promise.all([
          r(!0),
          p(),
          f(),
          v()
        ]);
        _.value = q, T.value = I.commits, N.value = re.branches, U.value = ye, n("statusUpdate", q), S.value && await S.value.loadWorkflows(!0);
      } catch (q) {
        L.value = q instanceof Error ? q.message : "Failed to load status", _.value = null, T.value = [], N.value = [];
      } finally {
        P.value = !1;
      }
    }
    function D(q) {
      V.value = q;
    }
    async function ee(q) {
      var re;
      V.value = null;
      const I = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      we.value = {
        title: I ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: I ? "You have uncommitted changes that will be lost." : `Checkout commit ${q.short_hash || ((re = q.hash) == null ? void 0 : re.slice(0, 7))}?`,
        details: I ? jt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: I,
        onConfirm: async () => {
          var De;
          we.value = null, Fe();
          const ye = fe(`Checking out ${q.short_hash || ((De = q.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Te = await h(q.hash, I);
          Be(ye), Te.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Te.message || "Checkout failed", "error");
        }
      };
    }
    async function ge(q) {
      const I = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      we.value = {
        title: I ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: I ? "You have uncommitted changes." : `Switch to branch "${q}"?`,
        details: I ? jt() : void 0,
        warning: I ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          we.value = null, Fe();
          const re = fe(`Switching to ${q}...`, "info", 0), ye = await l(q, I);
          Be(re), ye.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function Le(q) {
      const I = fe(`Creating branch ${q}...`, "info", 0), re = await m(q);
      Be(I), re.status === "success" ? (fe(`Branch "${q}" created`, "success"), await A()) : fe(re.message || "Failed to create branch", "error");
    }
    async function Ze(q) {
      V.value = null;
      const I = prompt("Enter branch name:");
      if (I) {
        const re = fe(`Creating branch ${I}...`, "info", 0), ye = await m(I, q.hash);
        Be(re), ye.status === "success" ? (fe(`Branch "${I}" created from ${q.short_hash}`, "success"), await A()) : fe(ye.message || "Failed to create branch", "error");
      }
    }
    function Fe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function nt(q) {
      M.value = !1, le.value = q, W.value = !0;
    }
    async function xt() {
      W.value = !1, Y.value = !0, Fe(), G.value = {
        progress: 10,
        state: et(10),
        message: St(10)
      };
      try {
        await $(le.value), ro(), co();
      } catch (q) {
        tt(), Y.value = !1, fe(`Failed to initiate switch: ${q instanceof Error ? q.message : "Unknown error"}`, "error"), G.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function et(q) {
      return q >= 100 ? "complete" : q >= 80 ? "validating" : q >= 60 ? "starting" : q >= 30 ? "syncing" : "preparing";
    }
    function St(q) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[et(q)] || "";
    }
    function ro() {
      if (O) return;
      let q = 10;
      const I = 60, re = 5e3, ye = 100, Te = (I - q) / (re / ye);
      O = window.setInterval(() => {
        if (q += Te, q >= I && (q = I, tt()), G.value.progress < I) {
          const De = Math.floor(q);
          G.value = {
            progress: De,
            state: et(De),
            message: St(De)
          };
        }
      }, ye);
    }
    function tt() {
      O && (clearInterval(O), O = null);
    }
    function co() {
      te || (te = window.setInterval(async () => {
        try {
          let q = await k.getStatus();
          if ((!q || q.state === "idle") && (q = await d()), !q)
            return;
          const I = q.progress || 0;
          I >= 60 && tt();
          const re = Math.max(I, G.value.progress), ye = q.state && q.state !== "idle" && q.state !== "unknown", Te = ye ? q.state : et(re), De = ye && q.message || St(re);
          G.value = {
            state: Te,
            progress: re,
            message: De
          }, q.state === "complete" ? (tt(), zt(), Y.value = !1, fe(`✓ Switched to ${le.value}`, "success"), await A(), le.value = "") : q.state === "rolled_back" ? (tt(), zt(), Y.value = !1, fe("Switch failed, restored previous environment", "warning"), le.value = "") : q.state === "critical_failure" && (tt(), zt(), Y.value = !1, fe(`Critical error during switch: ${q.message}`, "error"), le.value = "");
        } catch (q) {
          console.error("Failed to poll switch progress:", q);
        }
      }, 1e3));
    }
    function zt() {
      tt(), te && (clearInterval(te), te = null);
    }
    function uo() {
      W.value = !1, le.value = "";
    }
    async function mo() {
      Ke.value = !1, await A(), fe("✓ Changes committed", "success");
    }
    async function vo() {
      Ae.value = !1;
      const q = fe("Syncing environment...", "info", 0);
      try {
        const I = await w("skip", !0);
        if (Be(q), I.status === "success") {
          const re = [];
          I.nodes_installed.length && re.push(`${I.nodes_installed.length} installed`), I.nodes_removed.length && re.push(`${I.nodes_removed.length} removed`);
          const ye = re.length ? `: ${re.join(", ")}` : "";
          fe(`✓ Environment synced${ye}`, "success"), await A();
        } else {
          const re = I.errors.length ? I.errors.join("; ") : I.message;
          fe(`Sync failed: ${re}`, "error");
        }
      } catch (I) {
        Be(q), fe(`Sync error: ${I instanceof Error ? I.message : "Unknown error"}`, "error");
      }
    }
    async function fo(q) {
      X.value = q, R.value = !0, ne.value = { state: "creating", message: `Creating environment '${q.name}'...` };
      try {
        const I = await E(q);
        I.status === "started" ? go() : I.status === "error" && (R.value = !1, fe(`Failed to create environment: ${I.message}. Check debug logs for details.`, "error"), X.value = null);
      } catch (I) {
        R.value = !1, fe(`Error creating environment: ${I instanceof Error ? I.message : "Unknown error"}. Check debug logs.`, "error"), X.value = null;
      }
    }
    function go() {
      $e || ($e = window.setInterval(async () => {
        var q;
        try {
          const I = await C();
          ne.value = { state: I.state, message: I.message }, I.state === "complete" ? (Gt(), R.value = !1, fe(`✓ Environment '${I.environment_name}' created`, "success"), await A(), F.value && await F.value.loadEnvironments(), (q = X.value) != null && q.switch_after && I.environment_name && await nt(I.environment_name), X.value = null) : I.state === "error" && (Gt(), R.value = !1, fe(`Failed to create environment: ${I.error || I.message}. Check debug logs.`, "error"), X.value = null);
        } catch (I) {
          console.error("Failed to poll create progress:", I);
        }
      }, 2e3));
    }
    function Gt() {
      $e && (clearInterval($e), $e = null);
    }
    async function po(q) {
      var I;
      if (((I = j.value) == null ? void 0 : I.name) === q) {
        fe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      we.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${q}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          we.value = null;
          try {
            const re = await z(q);
            re.status === "success" ? (fe(`Environment "${q}" deleted`, "success"), await A(), F.value && await F.value.loadEnvironments()) : fe(re.message || "Failed to delete environment", "error");
          } catch (re) {
            fe(`Error deleting environment: ${re instanceof Error ? re.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function jt() {
      if (!_.value) return [];
      const q = [], I = _.value.workflows;
      return I.new.length && q.push(`${I.new.length} new workflow(s)`), I.modified.length && q.push(`${I.modified.length} modified workflow(s)`), I.deleted.length && q.push(`${I.deleted.length} deleted workflow(s)`), q;
    }
    return _e(A), (q, I) => {
      var re, ye, Te, De;
      return o(), s("div", lh, [
        e("div", ih, [
          e("div", rh, [
            I[27] || (I[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (o(), s("div", dh)) : u("", !0)
          ]),
          e("div", ch, [
            e("button", {
              class: se(["icon-btn", { spinning: P.value }]),
              onClick: A,
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
        e("div", uh, [
          I[31] || (I[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: I[1] || (I[1] = (ce) => he("environments", "all-envs"))
          }, [
            _.value ? (o(), s("div", mh, [
              e("span", null, a(((re = j.value) == null ? void 0 : re.name) || ((ye = _.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", vh, "(" + a(_.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            I[30] || (I[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", fh, [
          e("div", gh, [
            e("div", ph, [
              I[32] || (I[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "status" && Xe.value === "this-env" }]),
                onClick: I[2] || (I[2] = (ce) => he("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "workflows" }]),
                onClick: I[3] || (I[3] = (ce) => he("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "models-env" }]),
                onClick: I[4] || (I[4] = (ce) => he("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "branches" }]),
                onClick: I[5] || (I[5] = (ce) => he("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "history" }]),
                onClick: I[6] || (I[6] = (ce) => he("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "nodes" }]),
                onClick: I[7] || (I[7] = (ce) => he("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "debug-env" }]),
                onClick: I[8] || (I[8] = (ce) => he("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            I[35] || (I[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", hh, [
              I[33] || (I[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "environments" }]),
                onClick: I[9] || (I[9] = (ce) => he("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "model-index" }]),
                onClick: I[10] || (I[10] = (ce) => he("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "settings" }]),
                onClick: I[11] || (I[11] = (ce) => he("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "debug-workspace" }]),
                onClick: I[12] || (I[12] = (ce) => he("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            I[36] || (I[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", yh, [
              I[34] || (I[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "export" }]),
                onClick: I[13] || (I[13] = (ce) => he("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "import" }]),
                onClick: I[14] || (I[14] = (ce) => he("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ae.value === "remotes" }]),
                onClick: I[15] || (I[15] = (ce) => he("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", wh, [
            L.value ? (o(), s("div", kh, a(L.value), 1)) : !_.value && ae.value === "status" ? (o(), s("div", bh, " Loading status... ")) : (o(), s(H, { key: 2 }, [
              ae.value === "status" ? (o(), x(qn, {
                key: 0,
                status: _.value,
                onSwitchBranch: vt,
                onCommitChanges: I[16] || (I[16] = (ce) => Ke.value = !0),
                onSyncEnvironment: I[17] || (I[17] = (ce) => Ae.value = !0),
                onViewWorkflows: I[18] || (I[18] = (ce) => he("workflows", "this-env")),
                onViewHistory: I[19] || (I[19] = (ce) => he("history", "this-env")),
                onViewDebug: I[20] || (I[20] = (ce) => he("debug-env", "this-env"))
              }, null, 8, ["status"])) : ae.value === "workflows" ? (o(), x(yc, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: S,
                onRefresh: A
              }, null, 512)) : ae.value === "models-env" ? (o(), x(eu, {
                key: 2,
                onNavigate: mt
              })) : ae.value === "branches" ? (o(), x(ra, {
                key: 3,
                branches: N.value,
                current: ((Te = _.value) == null ? void 0 : Te.branch) || null,
                onSwitch: ge,
                onCreate: Le
              }, null, 8, ["branches", "current"])) : ae.value === "history" ? (o(), x(wa, {
                key: 4,
                commits: T.value,
                onSelect: D,
                onCheckout: ee
              }, null, 8, ["commits"])) : ae.value === "nodes" ? (o(), x(Fu, {
                key: 5,
                onOpenNodeManager: ft
              })) : ae.value === "debug-env" ? (o(), x(Am, { key: 6 })) : ae.value === "environments" ? (o(), x(Lv, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: F,
                onSwitch: nt,
                onCreate: fo,
                onDelete: po
              }, null, 512)) : ae.value === "model-index" ? (o(), x(ku, {
                key: 8,
                onRefresh: A
              })) : ae.value === "settings" ? (o(), x(Um, { key: 9 })) : ae.value === "debug-workspace" ? (o(), x(Pm, { key: 10 })) : ae.value === "export" ? (o(), x(Av, { key: 11 })) : ae.value === "import" ? (o(), x(pg, { key: 12 })) : ae.value === "remotes" ? (o(), x(ym, { key: 13 })) : u("", !0)
            ], 64))
          ])
        ]),
        V.value ? (o(), x(Rg, {
          key: 0,
          commit: V.value,
          onClose: I[21] || (I[21] = (ce) => V.value = null),
          onCheckout: ee,
          onCreateBranch: Ze
        }, null, 8, ["commit"])) : u("", !0),
        we.value ? (o(), x(Pg, {
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
        g(Np, {
          show: W.value,
          "from-environment": ((De = j.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": le.value,
          onConfirm: xt,
          onClose: uo
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ke.value && _.value ? (o(), x(so, {
          key: 2,
          status: _.value,
          "as-modal": !0,
          onClose: I[23] || (I[23] = (ce) => Ke.value = !1),
          onCommitted: mo
        }, null, 8, ["status"])) : u("", !0),
        Ae.value && _.value ? (o(), x(nh, {
          key: 3,
          show: Ae.value,
          "mismatch-details": {
            missing_nodes: _.value.comparison.missing_nodes,
            extra_nodes: _.value.comparison.extra_nodes
          },
          onConfirm: vo,
          onClose: I[24] || (I[24] = (ce) => Ae.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : u("", !0),
        g(Jp, {
          show: Y.value,
          state: G.value.state,
          progress: G.value.progress,
          message: G.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        R.value ? (o(), s("div", _h, [
          e("div", $h, [
            I[39] || (I[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", Ch, [
              I[37] || (I[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", xh, a(ne.value.message), 1),
              I[38] || (I[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : u("", !0),
        M.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: I[26] || (I[26] = ke((ce) => M.value = !1, ["self"]))
        }, [
          e("div", Sh, [
            e("div", Ih, [
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
            e("div", Eh, [
              I[42] || (I[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Mh, [
                (o(!0), s(H, null, oe(U.value, (ce) => (o(), s("div", {
                  key: ce.name,
                  class: se(["env-item", { current: ce.is_current }])
                }, [
                  e("div", zh, [
                    e("div", Lh, [
                      e("span", Th, a(ce.is_current ? "●" : "○"), 1),
                      e("span", Dh, a(ce.name), 1),
                      ce.current_branch ? (o(), s("span", Rh, "(" + a(ce.current_branch) + ")", 1)) : u("", !0),
                      ce.is_current ? (o(), s("span", Nh, "CURRENT")) : u("", !0)
                    ]),
                    e("div", Oh, a(ce.workflow_count) + " workflows • " + a(ce.node_count) + " nodes ", 1)
                  ]),
                  ce.is_current ? u("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (K1) => nt(ce.name)
                  }, " SWITCH ", 8, Uh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        e("div", Bh, [
          g(_o, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(H, null, oe(Ue.value, (ce) => (o(), s("div", {
                key: ce.id,
                class: se(["toast", ce.type])
              }, [
                e("span", Ph, a(K(ce.type)), 1),
                e("span", Vh, a(ce.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Fh = /* @__PURE__ */ Q(Ah, [["__scopeId", "data-v-0bfd7634"]]), Wh = { class: "item-header" }, Gh = { class: "item-info" }, jh = { class: "filename" }, Hh = { class: "metadata" }, qh = { class: "size" }, Kh = {
  key: 0,
  class: "type"
}, Jh = { class: "item-actions" }, Qh = {
  key: 0,
  class: "progress-section"
}, Yh = { class: "progress-bar" }, Xh = { class: "progress-stats" }, Zh = { class: "downloaded" }, e1 = { class: "speed" }, t1 = {
  key: 0,
  class: "eta"
}, o1 = {
  key: 1,
  class: "status-msg paused"
}, s1 = {
  key: 2,
  class: "status-msg queued"
}, n1 = {
  key: 3,
  class: "status-msg completed"
}, a1 = {
  key: 4,
  class: "status-msg failed"
}, l1 = {
  key: 0,
  class: "retries"
}, i1 = /* @__PURE__ */ J({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function r(h) {
      if (h === 0) return "?";
      const m = h / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function f(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const m = Math.floor(h / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (h, m) => (o(), s("div", {
      class: se(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Wh, [
        e("div", Gh, [
          e("div", jh, a(t.item.filename), 1),
          e("div", Hh, [
            e("span", qh, a(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Kh, a(t.item.type), 1)) : u("", !0)
          ])
        ]),
        e("div", Jh, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : u("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : u("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : u("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : u("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Qh, [
        e("div", Yh, [
          e("div", {
            class: "progress-fill",
            style: Qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Xh, [
          e("span", Zh, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", e1, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", t1, a(f(t.item.eta)), 1)) : u("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", o1, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", s1, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", n1, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", a1, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", l1, "(" + a(t.item.retries) + " retries)", 1)) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), yt = /* @__PURE__ */ Q(i1, [["__scopeId", "data-v-2110df65"]]), r1 = { class: "queue-title" }, d1 = { class: "count" }, c1 = { class: "queue-actions" }, u1 = { class: "action-label" }, m1 = {
  key: 0,
  class: "overall-progress"
}, v1 = { class: "progress-bar" }, f1 = {
  key: 0,
  class: "current-mini"
}, g1 = { class: "filename" }, p1 = { class: "speed" }, h1 = {
  key: 1,
  class: "queue-content"
}, y1 = {
  key: 0,
  class: "section"
}, w1 = {
  key: 1,
  class: "section"
}, k1 = { class: "section-header" }, b1 = { class: "section-label paused" }, _1 = { class: "items-list" }, $1 = {
  key: 2,
  class: "section"
}, C1 = { class: "section-header" }, x1 = { class: "section-label" }, S1 = { class: "items-list" }, I1 = {
  key: 3,
  class: "section"
}, E1 = { class: "section-header" }, M1 = { class: "section-label" }, z1 = { class: "items-list" }, L1 = {
  key: 4,
  class: "section"
}, T1 = { class: "section-header" }, D1 = { class: "section-label failed" }, R1 = { class: "items-list" }, N1 = /* @__PURE__ */ J({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: r,
      completedItems: p,
      failedItems: f,
      pausedItems: h,
      hasItems: m,
      activeCount: l,
      cancelDownload: v,
      retryDownload: $,
      resumeDownload: d,
      resumeAllPaused: E,
      removeItem: C,
      clearCompleted: z
    } = Ct(), w = b(!1);
    let k = null;
    Bt(
      () => ({
        active: l.value,
        failed: f.value.length,
        paused: h.value.length,
        completed: p.value.length
      }),
      (U, j) => {
        k && (clearTimeout(k), k = null);
        const P = U.active === 0 && U.failed === 0 && U.paused === 0 && U.completed > 0, L = j && (j.active > 0 || j.paused > 0);
        P && L && (k = setTimeout(() => {
          z(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const _ = B(() => {
      var P;
      if (c.items.length === 0) return 0;
      const U = p.value.length, j = ((P = n.value) == null ? void 0 : P.progress) || 0;
      return Math.round((U + j / 100) / c.items.length * 100);
    });
    function T(U) {
      v(U);
    }
    function N(U) {
      return U === 0 ? "" : `${(U / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (U, j) => (o(), x(Se, { to: "body" }, [
      me(m) ? (o(), s("div", {
        key: 0,
        class: se(["model-download-queue", { minimized: !w.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: j[0] || (j[0] = (P) => w.value = !w.value)
        }, [
          e("div", r1, [
            j[4] || (j[4] = e("span", { class: "icon" }, "↓", -1)),
            j[5] || (j[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", d1, "(" + a(me(l)) + "/" + a(me(c).items.length) + ")", 1)
          ]),
          e("div", c1, [
            e("span", u1, a(w.value ? "minimize" : "expand"), 1)
          ])
        ]),
        w.value ? (o(), s("div", h1, [
          me(n) ? (o(), s("div", y1, [
            j[6] || (j[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(yt, {
              item: me(n),
              onCancel: j[1] || (j[1] = (P) => T(me(n).id))
            }, null, 8, ["item"])
          ])) : u("", !0),
          me(h).length > 0 ? (o(), s("div", w1, [
            e("div", k1, [
              e("span", b1, "Paused (" + a(me(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: j[2] || (j[2] = //@ts-ignore
                (...P) => me(E) && me(E)(...P))
              }, "Resume All")
            ]),
            e("div", _1, [
              (o(!0), s(H, null, oe(me(h), (P) => (o(), x(yt, {
                key: P.id,
                item: P,
                onResume: (L) => me(d)(P.id),
                onRemove: (L) => me(C)(P.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          me(r).length > 0 ? (o(), s("div", $1, [
            e("div", C1, [
              e("span", x1, "Queued (" + a(me(r).length) + ")", 1)
            ]),
            e("div", S1, [
              (o(!0), s(H, null, oe(me(r), (P) => (o(), x(yt, {
                key: P.id,
                item: P,
                onCancel: (L) => T(P.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : u("", !0),
          me(p).length > 0 ? (o(), s("div", I1, [
            e("div", E1, [
              e("span", M1, "Completed (" + a(me(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: j[3] || (j[3] = //@ts-ignore
                (...P) => me(z) && me(z)(...P))
              }, "Clear")
            ]),
            e("div", z1, [
              (o(!0), s(H, null, oe(me(p).slice(0, 3), (P) => (o(), x(yt, {
                key: P.id,
                item: P,
                onRemove: (L) => me(C)(P.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          me(f).length > 0 ? (o(), s("div", L1, [
            e("div", T1, [
              e("span", D1, "Failed (" + a(me(f).length) + ")", 1)
            ]),
            e("div", R1, [
              (o(!0), s(H, null, oe(me(f), (P) => (o(), x(yt, {
                key: P.id,
                item: P,
                onRetry: (L) => me($)(P.id),
                onRemove: (L) => me(C)(P.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : u("", !0)
        ])) : (o(), s("div", m1, [
          e("div", v1, [
            e("div", {
              class: "progress-fill",
              style: Qe({ width: `${_.value}%` })
            }, null, 4)
          ]),
          me(n) ? (o(), s("div", f1, [
            e("span", g1, a(me(n).filename), 1),
            e("span", p1, a(N(me(n).speed)), 1)
          ])) : u("", !0)
        ]))
      ], 2)) : u("", !0)
    ]));
  }
}), O1 = /* @__PURE__ */ Q(N1, [["__scopeId", "data-v-60751cfa"]]), U1 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', B1 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', P1 = {
  comfy: U1,
  phosphor: B1
}, Ft = "comfy", no = "comfygit-theme";
let ot = null, ao = Ft;
function V1() {
  try {
    const t = localStorage.getItem(no);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Ft;
}
function lo(t = Ft) {
  ot && ot.remove(), ot = document.createElement("style"), ot.id = "comfygit-theme-styles", ot.setAttribute("data-theme", t), ot.textContent = P1[t], document.head.appendChild(ot), document.body.setAttribute("data-comfygit-theme", t), ao = t;
  try {
    localStorage.setItem(no, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function A1() {
  return ao;
}
function F1(t) {
  lo(t);
}
const Wt = document.createElement("link");
Wt.rel = "stylesheet";
Wt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Wt);
const W1 = V1();
lo(W1);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), F1(t);
  },
  getTheme: () => {
    const t = A1();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Re = null, Me = null, _t = null, wt = null, Jt = null;
const dt = b(null);
async function It() {
  var t;
  if (!((t = rt) != null && t.api)) return null;
  try {
    const c = await rt.api.fetchApi("/v2/comfygit/status");
    c.ok && (dt.value = await c.json());
  } catch {
  }
}
function G1() {
  if (!dt.value) return !1;
  const t = dt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || dt.value.has_changes;
}
function j1() {
  Re && Re.remove(), Re = document.createElement("div"), Re.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Re.appendChild(t), Re.addEventListener("click", (r) => {
    r.target === Re && Rt();
  });
  const c = (r) => {
    r.key === "Escape" && (Rt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), Pt({
    render: () => Vt(Fh, {
      onClose: Rt,
      onStatusUpdate: (r) => {
        dt.value = r, $t();
      }
    })
  }).mount(t), document.body.appendChild(Re);
}
function Rt() {
  Re && (Re.remove(), Re = null);
}
function H1(t) {
  kt(), Me = document.createElement("div"), Me.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Me.style.position = "fixed", Me.style.top = `${c.bottom + 8}px`, Me.style.right = `${window.innerWidth - c.right}px`, Me.style.zIndex = "10001";
  const n = (p) => {
    Me && !Me.contains(p.target) && p.target !== t && (kt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (p) => {
    p.key === "Escape" && (kt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), _t = Pt({
    render: () => Vt(so, {
      status: dt.value,
      onClose: kt,
      onCommitted: () => {
        kt(), It().then($t);
      }
    })
  }), _t.mount(Me), document.body.appendChild(Me);
}
function kt() {
  _t && (_t.unmount(), _t = null), Me && (Me.remove(), Me = null);
}
function q1() {
  wt || (wt = document.createElement("div"), wt.className = "comfygit-download-queue-root", Jt = Pt({
    render: () => Vt(O1)
  }), Jt.mount(wt), document.body.appendChild(wt), console.log("[ComfyGit] Model download queue mounted"));
}
let We = null;
function $t() {
  if (!We) return;
  const t = We.querySelector(".commit-indicator");
  t && (t.style.display = G1() ? "block" : "none");
}
const io = document.createElement("style");
io.textContent = `
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
document.head.appendChild(io);
rt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, f;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = j1, We = document.createElement("button"), We.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", We.innerHTML = 'Commit <span class="commit-indicator"></span>', We.title = "Quick Commit", We.onclick = () => H1(We), t.appendChild(c), t.appendChild(We), (f = (p = rt.menu) == null ? void 0 : p.settingsGroup) != null && f.element && (rt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), q1();
    const { loadPendingDownloads: n } = Ct();
    n(), await It(), $t(), setInterval(async () => {
      await It(), $t();
    }, 3e4);
    const r = rt.api;
    if (r) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((v) => {
          (v.startsWith("workflow:") || v.startsWith("Comfy.OpenWorkflowsPaths:") || v.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(v);
        }), window.location.reload();
      }, m = function() {
        const v = document.createElement("div");
        v.style.cssText = `
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
        const $ = document.createElement("span");
        $.textContent = "Workflows updated - refresh required", v.appendChild($);
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
        `, d.onmouseover = () => d.style.background = "var(--comfy-input-bg)", d.onmouseout = () => d.style.background = "var(--comfy-menu-bg)", d.onclick = () => h(), v.appendChild(d);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => v.remove(), v.appendChild(E), document.body.appendChild(v), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: $, workflow_name: d } = v.detail;
        console.log(`[ComfyGit] Workflow ${$}: ${d}`), await It(), $t();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      r.addEventListener("status", async (v) => {
        const $ = v.detail != null;
        $ && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : m()), l = $;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
