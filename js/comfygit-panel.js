import { app as wt } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Ce, createBlock as T, resolveDynamicComponent as cs, normalizeClass as le, withCtx as l, toDisplayString as a, createVNode as k, createTextVNode as y, computed as P, Fragment as V, renderList as ee, normalizeStyle as pt, ref as C, onMounted as Ue, watch as kt, Teleport as Fe, withModifiers as Le, Transition as Qs, createSlots as jt, withKeys as gt, reactive as ss, onUnmounted as Ss, readonly as Zs, unref as $e, withDirectives as Ne, vModelText as Mt, vModelRadio as Jt, vModelCheckbox as Qt, nextTick as eo, vModelSelect as Tt, createStaticVNode as to, TransitionGroup as so, createApp as us, h as ms } from "vue";
const oo = { class: "panel-layout" }, no = {
  key: 0,
  class: "panel-layout-header"
}, ao = {
  key: 1,
  class: "panel-layout-search"
}, lo = { class: "panel-layout-content" }, io = {
  key: 2,
  class: "panel-layout-footer"
}, ro = /* @__PURE__ */ X({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", oo, [
      c.$slots.header ? (s(), o("div", no, [
        Ce(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (s(), o("div", ao, [
        Ce(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", lo, [
        Ce(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", io, [
        Ce(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Q = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, h] of c)
    n[i] = h;
  return n;
}, je = /* @__PURE__ */ Q(ro, [["__scopeId", "data-v-21565df9"]]), co = {
  key: 0,
  class: "panel-title-prefix"
}, uo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, mo = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), T(cs(`h${t.level}`), {
      class: le(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", co, a(t.prefix), 1)) : (s(), o("span", uo)),
        Ce(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vo = /* @__PURE__ */ Q(mo, [["__scopeId", "data-v-c3875efc"]]), fo = ["title"], go = ["width", "height"], po = /* @__PURE__ */ X({
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
      ])], 8, go))
    ], 8, fo));
  }
}), Is = /* @__PURE__ */ Q(po, [["__scopeId", "data-v-6fc7f16d"]]), ho = { class: "header-left" }, yo = {
  key: 0,
  class: "header-actions"
}, wo = /* @__PURE__ */ X({
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
      class: le(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", ho, [
        k(vo, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), T(Is, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", yo, [
        Ce(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ge = /* @__PURE__ */ Q(wo, [["__scopeId", "data-v-55a62cd6"]]), ko = {
  key: 0,
  class: "section-title-count"
}, bo = {
  key: 1,
  class: "section-title-icon"
}, _o = /* @__PURE__ */ X({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), T(cs(`h${t.level}`), {
      class: le(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", ko, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", bo, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ze = /* @__PURE__ */ Q(_o, [["__scopeId", "data-v-559361eb"]]), $o = { class: "status-grid" }, Co = { class: "status-grid__columns" }, xo = { class: "status-grid__column" }, So = { class: "status-grid__title" }, Io = { class: "status-grid__column status-grid__column--right" }, Eo = { class: "status-grid__title" }, Mo = {
  key: 0,
  class: "status-grid__footer"
}, To = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", $o, [
      e("div", Co, [
        e("div", xo, [
          e("h4", So, a(t.leftTitle), 1),
          Ce(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Io, [
          e("h4", Eo, a(t.rightTitle), 1),
          Ce(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Mo, [
        Ce(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), zo = /* @__PURE__ */ Q(To, [["__scopeId", "data-v-73b7ba3f"]]), Ro = {
  key: 0,
  class: "status-item__icon"
}, Lo = {
  key: 1,
  class: "status-item__count"
}, Po = { class: "status-item__label" }, Do = /* @__PURE__ */ X({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = P(() => `status-item--${c.variant}`);
    return (i, h) => (s(), o("div", {
      class: le(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Ro, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Lo, a(t.count), 1)) : d("", !0),
      e("span", Po, a(t.label), 1)
    ], 2));
  }
}), rt = /* @__PURE__ */ Q(Do, [["__scopeId", "data-v-6f929183"]]), No = { class: "issue-card__header" }, Uo = { class: "issue-card__icon" }, Oo = { class: "issue-card__title" }, Bo = {
  key: 0,
  class: "issue-card__content"
}, Fo = {
  key: 0,
  class: "issue-card__description"
}, Ao = {
  key: 1,
  class: "issue-card__items"
}, Vo = {
  key: 2,
  class: "issue-card__actions"
}, Wo = /* @__PURE__ */ X({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = P(() => `issue-card--${c.severity}`);
    return (i, h) => (s(), o("div", {
      class: le(["issue-card", n.value])
    }, [
      e("div", No, [
        e("span", Uo, a(t.icon), 1),
        e("h4", Oo, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Bo, [
        t.description ? (s(), o("p", Fo, a(t.description), 1)) : d("", !0),
        Ce(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Ao, [
        (s(!0), o(V, null, ee(t.items, (g, f) => (s(), o("div", {
          key: f,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", Vo, [
        Ce(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ Q(Wo, [["__scopeId", "data-v-df6aa348"]]), jo = ["type", "disabled"], Go = {
  key: 0,
  class: "spinner"
}, qo = /* @__PURE__ */ X({
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
      class: le(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Go)) : d("", !0),
      t.loading ? d("", !0) : Ce(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, jo));
  }
}), Z = /* @__PURE__ */ Q(qo, [["__scopeId", "data-v-772abe47"]]), Ho = { class: "empty-state" }, Ko = {
  key: 0,
  class: "empty-icon"
}, Jo = { class: "empty-message" }, Yo = /* @__PURE__ */ X({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", Ho, [
      t.icon ? (s(), o("div", Ko, a(t.icon), 1)) : d("", !0),
      e("p", Jo, a(t.message), 1),
      t.actionLabel ? (s(), T(Z, {
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
}), at = /* @__PURE__ */ Q(Yo, [["__scopeId", "data-v-4466284f"]]), Xo = /* @__PURE__ */ X({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: le(["detail-label"]),
      style: pt({ minWidth: t.minWidth })
    }, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Yt = /* @__PURE__ */ Q(Xo, [["__scopeId", "data-v-75e9eeb8"]]), Qo = /* @__PURE__ */ X({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: le(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), is = /* @__PURE__ */ Q(Qo, [["__scopeId", "data-v-2f186e4c"]]), Zo = { class: "detail-row" }, en = /* @__PURE__ */ X({
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
    return (c, n) => (s(), o("div", Zo, [
      k(Yt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), T(is, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ce(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), De = /* @__PURE__ */ Q(en, [["__scopeId", "data-v-ef15664a"]]), tn = { class: "modal-header" }, sn = { class: "modal-body" }, on = { class: "status-section" }, nn = {
  key: 0,
  class: "status-section"
}, an = { class: "section-header-row" }, ln = {
  key: 0,
  class: "workflow-group"
}, rn = { class: "workflow-group-header" }, dn = { class: "workflow-group-title" }, cn = { class: "workflow-list" }, un = { class: "workflow-name" }, mn = { class: "workflow-issue" }, vn = {
  key: 1,
  class: "workflow-group"
}, fn = { class: "workflow-group-header" }, gn = { class: "workflow-group-title" }, pn = { class: "workflow-list" }, hn = { class: "workflow-name" }, yn = { class: "workflow-issue" }, wn = {
  key: 2,
  class: "workflow-group"
}, kn = { class: "workflow-group-header" }, bn = { class: "workflow-group-title" }, _n = { class: "workflow-list" }, $n = { class: "workflow-name" }, Cn = {
  key: 3,
  class: "workflow-group"
}, xn = { class: "workflow-group-header" }, Sn = { class: "workflow-group-title" }, In = { class: "workflow-list" }, En = { class: "workflow-name" }, Mn = {
  key: 4,
  class: "workflow-group"
}, Tn = { class: "workflow-group-header" }, zn = { class: "workflow-group-title" }, Rn = { class: "workflow-list" }, Ln = { class: "workflow-name" }, Pn = {
  key: 5,
  class: "workflow-group"
}, Dn = { class: "workflow-group-title" }, Nn = { class: "expand-icon" }, Un = {
  key: 0,
  class: "workflow-list"
}, On = { class: "workflow-name" }, Bn = {
  key: 1,
  class: "status-section"
}, Fn = {
  key: 0,
  class: "change-group"
}, An = { class: "change-group-header" }, Vn = { class: "change-group-title" }, Wn = { class: "change-list" }, jn = { class: "node-name" }, Gn = {
  key: 0,
  class: "dev-badge"
}, qn = {
  key: 1,
  class: "change-group"
}, Hn = { class: "change-group-header" }, Kn = { class: "change-group-title" }, Jn = { class: "change-list" }, Yn = { class: "node-name" }, Xn = {
  key: 0,
  class: "dev-badge"
}, Qn = {
  key: 2,
  class: "change-group"
}, Zn = { class: "change-list" }, ea = { class: "change-item" }, ta = { class: "node-name" }, sa = {
  key: 3,
  class: "change-group"
}, oa = {
  key: 2,
  class: "status-section"
}, na = { class: "section-header-row" }, aa = {
  key: 0,
  class: "drift-item"
}, la = { class: "drift-list" }, ia = {
  key: 0,
  class: "drift-list-more"
}, ra = {
  key: 1,
  class: "drift-item"
}, da = { class: "drift-list" }, ca = {
  key: 0,
  class: "drift-list-more"
}, ua = {
  key: 2,
  class: "drift-item"
}, ma = {
  key: 3,
  class: "drift-item"
}, va = {
  key: 3,
  class: "status-section"
}, fa = { class: "info-box" }, ga = { class: "drift-list" }, pa = {
  key: 0,
  class: "drift-list-more"
}, ha = {
  key: 4,
  class: "status-section"
}, ya = { class: "warning-box" }, wa = {
  key: 5,
  class: "empty-state-inline"
}, ka = { class: "modal-actions" }, ba = /* @__PURE__ */ X({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const c = t, n = C(!1);
    Ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), kt(() => c.show, (b, x) => {
      console.log("StatusDetailModal show prop changed from", x, "to", b);
    }, { immediate: !0 });
    const i = P(() => {
      var b, x, z;
      return ((z = (x = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : x.analyzed) == null ? void 0 : z.filter(
        (N) => N.status === "broken" && N.sync_state === "synced"
      )) || [];
    }), h = P(() => {
      var b, x, z;
      return ((z = (x = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : x.analyzed) == null ? void 0 : z.filter(
        (N) => N.status === "broken" && N.sync_state !== "synced"
      )) || [];
    }), g = P(() => {
      var b, x, z;
      return ((z = (x = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : x.synced) == null ? void 0 : z.filter((N) => {
        var _, L, I;
        const m = (I = (L = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : L.analyzed) == null ? void 0 : I.find(($) => $.name === N);
        return !m || m.status !== "broken";
      })) || [];
    }), f = P(() => {
      var b, x, z, N, m;
      return (b = c.status) != null && b.workflows ? (((x = c.status.workflows.new) == null ? void 0 : x.length) ?? 0) > 0 || (((z = c.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((N = c.status.workflows.deleted) == null ? void 0 : N.length) ?? 0) > 0 || (((m = c.status.workflows.synced) == null ? void 0 : m.length) ?? 0) > 0 : !1;
    }), u = P(() => {
      var x, z, N;
      const b = (x = c.status) == null ? void 0 : x.git_changes;
      return b ? (((z = b.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((N = b.nodes_removed) == null ? void 0 : N.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), r = P(() => {
      var b, x, z, N, m, _;
      return !f.value && !u.value && ((x = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : x.is_synced) && (((z = c.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((_ = (m = (N = c.status) == null ? void 0 : N.comparison) == null ? void 0 : m.disabled_nodes) == null ? void 0 : _.length) ?? 0) === 0;
    }), v = P(() => {
      var x, z;
      const b = (z = (x = c.status) == null ? void 0 : x.git_changes) == null ? void 0 : z.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function p(b) {
      return typeof b == "string" ? b : b.name;
    }
    function w(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, x) => {
      var z, N, m, _, L, I, $, j, W, K, D, S, E, U, B, ne, we, me, se, F, M, ie;
      return s(), T(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[6] || (x[6] = (te) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: x[5] || (x[5] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", tn, [
              x[7] || (x[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (te) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", sn, [
              e("div", on, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...x[8] || (x[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(De, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              f.value ? (s(), o("div", nn, [
                e("div", an, [
                  k(Ze, { level: "4" }, {
                    default: l(() => [...x[9] || (x[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: x[1] || (x[1] = (te) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", ln, [
                  e("div", rn, [
                    x[10] || (x[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", dn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", cn, [
                    (s(!0), o(V, null, ee(i.value, (te) => (s(), o("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", un, a(te.name), 1),
                      e("span", mn, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                h.value.length ? (s(), o("div", vn, [
                  e("div", fn, [
                    x[11] || (x[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", gn, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", pn, [
                    (s(!0), o(V, null, ee(h.value, (te) => (s(), o("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", hn, a(te.name), 1),
                      e("span", yn, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (N = (z = t.status.workflows) == null ? void 0 : z.new) != null && N.length ? (s(), o("div", wn, [
                  e("div", kn, [
                    x[12] || (x[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", bn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", _n, [
                    (s(!0), o(V, null, ee(t.status.workflows.new, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", $n, a(te), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (_ = (m = t.status.workflows) == null ? void 0 : m.modified) != null && _.length ? (s(), o("div", Cn, [
                  e("div", xn, [
                    x[13] || (x[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Sn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", In, [
                    (s(!0), o(V, null, ee(t.status.workflows.modified, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", En, a(te), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (I = (L = t.status.workflows) == null ? void 0 : L.deleted) != null && I.length ? (s(), o("div", Mn, [
                  e("div", Tn, [
                    x[14] || (x[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", zn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Rn, [
                    (s(!0), o(V, null, ee(t.status.workflows.deleted, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Ln, a(te), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", Pn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: x[2] || (x[2] = (te) => n.value = !n.value)
                  }, [
                    x[15] || (x[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Dn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", Nn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", Un, [
                    (s(!0), o(V, null, ee(g.value, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", On, a(te), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              u.value ? (s(), o("div", Bn, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...x[16] || (x[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (j = ($ = t.status.git_changes) == null ? void 0 : $.nodes_added) != null && j.length ? (s(), o("div", Fn, [
                  e("div", An, [
                    x[17] || (x[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Vn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Wn, [
                    (s(!0), o(V, null, ee(t.status.git_changes.nodes_added, (te) => (s(), o("div", {
                      key: p(te),
                      class: "change-item"
                    }, [
                      e("span", jn, a(p(te)), 1),
                      w(te) ? (s(), o("span", Gn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (K = (W = t.status.git_changes) == null ? void 0 : W.nodes_removed) != null && K.length ? (s(), o("div", qn, [
                  e("div", Hn, [
                    x[18] || (x[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Kn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Jn, [
                    (s(!0), o(V, null, ee(t.status.git_changes.nodes_removed, (te) => (s(), o("div", {
                      key: p(te),
                      class: "change-item"
                    }, [
                      e("span", Yn, a(p(te)), 1),
                      w(te) ? (s(), o("span", Xn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (D = t.status.git_changes) != null && D.workflow_changes ? (s(), o("div", Qn, [
                  x[19] || (x[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Zn, [
                    e("div", ea, [
                      e("span", ta, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (S = t.status.git_changes) != null && S.has_other_changes ? (s(), o("div", sa, [...x[20] || (x[20] = [
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
              (E = t.status.comparison) != null && E.is_synced ? d("", !0) : (s(), o("div", oa, [
                e("div", na, [
                  k(Ze, { level: "4" }, {
                    default: l(() => [...x[21] || (x[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: x[3] || (x[3] = (te) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                x[22] || (x[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (B = (U = t.status.comparison) == null ? void 0 : U.missing_nodes) != null && B.length ? (s(), o("div", aa, [
                  k(De, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", la, [
                    (s(!0), o(V, null, ee(t.status.comparison.missing_nodes.slice(0, 10), (te) => (s(), o("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ia, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (we = (ne = t.status.comparison) == null ? void 0 : ne.extra_nodes) != null && we.length ? (s(), o("div", ra, [
                  k(De, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", da, [
                    (s(!0), o(V, null, ee(t.status.comparison.extra_nodes.slice(0, 10), (te) => (s(), o("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ca, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (se = (me = t.status.comparison) == null ? void 0 : me.version_mismatches) != null && se.length ? (s(), o("div", ua, [
                  k(De, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (F = t.status.comparison) != null && F.packages_in_sync ? d("", !0) : (s(), o("div", ma, [
                  k(De, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ie = (M = t.status.comparison) == null ? void 0 : M.disabled_nodes) != null && ie.length ? (s(), o("div", va, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...x[23] || (x[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", fa, [
                  x[24] || (x[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", ga, [
                  (s(!0), o(V, null, ee(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (s(), o("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + a(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", pa, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", ha, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...x[25] || (x[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", ya, [
                  x[26] || (x[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                x[27] || (x[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", wa, [...x[28] || (x[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", ka, [
              k(Z, {
                variant: "secondary",
                onClick: x[4] || (x[4] = (te) => b.$emit("close"))
              }, {
                default: l(() => [...x[29] || (x[29] = [
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
}), _a = /* @__PURE__ */ Q(ba, [["__scopeId", "data-v-c67eed17"]]), $a = { class: "health-section-header" }, Ca = { class: "suggestions-content" }, xa = { class: "suggestions-text" }, Sa = { style: { "margin-top": "var(--cg-space-3)" } }, Ia = {
  key: 1,
  class: "no-issues-text"
}, Ea = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, h = C(!1), g = C(!1);
    function f() {
      h.value = !0;
    }
    function u() {
      h.value = !1, v("view-workflows");
    }
    function r() {
      h.value = !1, v("view-nodes");
    }
    const v = n, p = C(!1), w = P(() => {
      const U = i.status.workflows.analyzed || [], B = U.filter(
        (ne) => ne.unresolved_models_count > 0 || ne.ambiguous_models_count > 0
      );
      return B.length === 0 && i.status.missing_models_count > 0 ? U.filter((ne) => ne.sync_state === "synced") : B;
    });
    function b() {
      const U = w.value;
      U.length !== 0 && (p.value = !0, v("repair-missing-models", U.map((B) => B.name)));
    }
    function x() {
      p.value = !1;
    }
    c({ resetRepairingState: x });
    const z = P(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), N = P(() => i.status.has_changes), m = P(() => {
      const U = i.status.git_changes;
      return U.nodes_added.length > 0 || U.nodes_removed.length > 0 || U.workflow_changes;
    }), _ = P(() => i.status.has_changes || z.value), L = P(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), I = P(() => i.status.git_changes.has_other_changes), $ = P(() => {
      var U;
      return ((U = i.status.workflows.analyzed) == null ? void 0 : U.filter((B) => B.status === "broken")) || [];
    }), j = P(() => {
      var U;
      return ((U = i.status.workflows.analyzed) == null ? void 0 : U.filter(
        (B) => B.has_path_sync_issues && !B.has_issues
      )) || [];
    }), W = P(() => $.value.length > 0), K = P(() => W.value || j.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), D = P(() => {
      const U = [];
      return i.status.workflows.new.length > 0 && U.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && U.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && U.push(`${i.status.workflows.deleted.length} deleted`), U.length > 0 ? `${U.join(", ")} workflow${U.length === 1 && !U[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), S = P(() => {
      var ne, we;
      const U = [], B = i.status.comparison;
      return (ne = B.missing_nodes) != null && ne.length && U.push(`${B.missing_nodes.length} missing node${B.missing_nodes.length === 1 ? "" : "s"}`), (we = B.extra_nodes) != null && we.length && U.push(`${B.extra_nodes.length} untracked node${B.extra_nodes.length === 1 ? "" : "s"}`), U.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${U.join(" and ")}.`;
    }), E = P(() => {
      var ne, we;
      const U = [], B = i.status.comparison;
      return (ne = B.extra_nodes) != null && ne.length && (B.extra_nodes.slice(0, 3).forEach((me) => {
        U.push(`Untracked: ${me}`);
      }), B.extra_nodes.length > 3 && U.push(`...and ${B.extra_nodes.length - 3} more untracked`)), (we = B.missing_nodes) != null && we.length && (B.missing_nodes.slice(0, 3).forEach((me) => {
        U.push(`Missing: ${me}`);
      }), B.missing_nodes.length > 3 && U.push(`...and ${B.missing_nodes.length - 3} more missing`)), U;
    });
    return (U, B) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), T(st, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              k(Z, {
                variant: "primary",
                size: "sm",
                onClick: B[0] || (B[0] = (ne) => U.$emit("start-setup"))
              }, {
                default: l(() => [...B[13] || (B[13] = [
                  y(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), T(st, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              k(Z, {
                variant: "primary",
                size: "sm",
                onClick: B[1] || (B[1] = (ne) => U.$emit("view-environments"))
              }, {
                default: l(() => [...B[14] || (B[14] = [
                  y(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), T(st, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              k(Z, {
                variant: "primary",
                size: "sm",
                onClick: B[2] || (B[2] = (ne) => U.$emit("create-environment"))
              }, {
                default: l(() => [...B[15] || (B[15] = [
                  y(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: B[4] || (B[4] = (ne) => g.value = !0),
            onMouseleave: B[5] || (B[5] = (ne) => g.value = !1)
          }, [
            e("div", $a, [
              k(Ze, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...B[16] || (B[16] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(Qs, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), T(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: l(() => [...B[17] || (B[17] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            k(zo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, jt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), T(rt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), T(rt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), T(rt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                k(rt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), T(rt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), T(rt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), T(rt, {
                  key: 2,
                  icon: "●",
                  count: L.value,
                  label: L.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                I.value ? (s(), T(rt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                N.value && !m.value && !I.value ? (s(), T(rt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                N.value ? d("", !0) : (s(), T(rt, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              _.value ? {
                name: "footer",
                fn: l(() => [
                  B[19] || (B[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Ca, [
                    e("span", xa, a(D.value), 1),
                    k(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: B[3] || (B[3] = (ne) => U.$emit("commit-changes"))
                    }, {
                      default: l(() => [...B[18] || (B[18] = [
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
          t.status.is_detached_head ? (s(), T(st, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              k(Z, {
                variant: "primary",
                size: "sm",
                onClick: B[6] || (B[6] = (ne) => U.$emit("create-branch"))
              }, {
                default: l(() => [...B[20] || (B[20] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", Sa, [
            k(Ze, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...B[21] || (B[21] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            K.value ? (s(), o(V, { key: 0 }, [
              $.value.length > 0 ? (s(), T(st, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${$.value.length} workflow${$.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: $.value.map((ne) => `${ne.name} — ${ne.issue_summary}`)
              }, {
                actions: l(() => [
                  k(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[7] || (B[7] = (ne) => U.$emit("view-workflows"))
                  }, {
                    default: l(() => [...B[22] || (B[22] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              j.value.length > 0 ? (s(), T(st, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${j.value.length} workflow${j.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: j.value.map((ne) => `${ne.name} — ${ne.models_needing_path_sync_count} model path${ne.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  k(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[8] || (B[8] = (ne) => U.$emit("view-workflows"))
                  }, {
                    default: l(() => [...B[23] || (B[23] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !W.value ? (s(), T(st, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  k(Z, {
                    variant: "primary",
                    size: "sm",
                    disabled: p.value,
                    onClick: b
                  }, {
                    default: l(() => [
                      y(a(p.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(Z, {
                    variant: "secondary",
                    size: "sm",
                    onClick: B[9] || (B[9] = (ne) => U.$emit("view-workflows"))
                  }, {
                    default: l(() => [...B[24] || (B[24] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), T(st, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: S.value,
                items: E.value
              }, {
                actions: l(() => [
                  k(Z, {
                    variant: "secondary",
                    size: "sm",
                    onClick: f
                  }, {
                    default: l(() => [...B[25] || (B[25] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[10] || (B[10] = (ne) => U.$emit("view-nodes"))
                  }, {
                    default: l(() => [...B[26] || (B[26] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), T(st, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  k(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[11] || (B[11] = (ne) => U.$emit("view-nodes"))
                  }, {
                    default: l(() => [...B[27] || (B[27] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : _.value ? (s(), o("span", Ia, "No issues")) : (s(), T(at, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(_a, {
        show: h.value,
        status: t.status,
        onClose: B[12] || (B[12] = (ne) => h.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: r
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Ma = /* @__PURE__ */ Q(Ea, [["__scopeId", "data-v-0398c02e"]]), Ta = ["type", "value", "placeholder", "disabled"], za = /* @__PURE__ */ X({
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
    const i = t, h = n, g = C(null);
    function f(u) {
      const r = u.target.value;
      h("update:modelValue", r);
    }
    return Ue(() => {
      i.autoFocus && g.value && g.value.focus();
    }), c({
      focus: () => {
        var u;
        return (u = g.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = g.value) == null ? void 0 : u.blur();
      }
    }), (u, r) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: le(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: f,
      onKeyup: [
        r[0] || (r[0] = gt((v) => u.$emit("enter"), ["enter"])),
        r[1] || (r[1] = gt((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (v) => u.$emit("focus")),
      onBlur: r[3] || (r[3] = (v) => u.$emit("blur"))
    }, null, 42, Ta));
  }
}), Zt = /* @__PURE__ */ Q(za, [["__scopeId", "data-v-0380d08f"]]), Ra = { class: "branch-create-form" }, La = { class: "form-actions" }, Pa = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = C(""), h = P(() => {
      const u = i.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function g() {
      h.value && (n("create", i.value.trim()), i.value = "");
    }
    function f() {
      i.value = "", n("cancel");
    }
    return (u, r) => (s(), o("div", Ra, [
      k(Zt, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (v) => i.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: f
      }, null, 8, ["modelValue"]),
      e("div", La, [
        k(Z, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: g
        }, {
          default: l(() => [...r[1] || (r[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(Z, {
          variant: "secondary",
          size: "sm",
          onClick: f
        }, {
          default: l(() => [...r[2] || (r[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Da = /* @__PURE__ */ Q(Pa, [["__scopeId", "data-v-7c500394"]]), Na = { class: "branch-list-item__indicator" }, Ua = { class: "branch-list-item__name" }, Oa = {
  key: 0,
  class: "branch-list-item__actions"
}, Ba = {
  key: 0,
  class: "branch-list-item__current-label"
}, Fa = /* @__PURE__ */ X({
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
      class: le(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Na, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Ua, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", Oa, [
        Ce(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Ba, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Aa = /* @__PURE__ */ Q(Fa, [["__scopeId", "data-v-c6581a24"]]), Va = {
  key: 2,
  class: "branch-list"
}, Wa = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = C(!1);
    function h(f) {
      n("create", f), g();
    }
    function g() {
      i.value = !1;
    }
    return (f, u) => (s(), T(je, null, {
      header: l(() => [
        k(Ge, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? d("", !0) : (s(), T(Z, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (r) => i.value = !0)
            }, {
              default: l(() => [...u[1] || (u[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), T(Da, {
          key: 0,
          onCreate: h,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), T(at, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Va, [
          (s(!0), o(V, null, ee(t.branches, (r) => (s(), T(Aa, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: l(() => [
              r.is_current ? d("", !0) : (s(), T(Z, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => f.$emit("delete", r.name)
              }, {
                default: l(() => [...u[2] || (u[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              r.is_current ? d("", !0) : (s(), T(Z, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => f.$emit("switch", r.name)
              }, {
                default: l(() => [...u[3] || (u[3] = [
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
}), ja = /* @__PURE__ */ Q(Wa, [["__scopeId", "data-v-86784ddd"]]), Ga = { class: "commit-list" }, qa = /* @__PURE__ */ X({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", Ga, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ha = /* @__PURE__ */ Q(qa, [["__scopeId", "data-v-8c5ee761"]]), Ka = { class: "commit-hash" }, Ja = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = P(() => c.hash.slice(0, c.length));
    return (i, h) => (s(), o("span", Ka, a(n.value), 1));
  }
}), Es = /* @__PURE__ */ Q(Ja, [["__scopeId", "data-v-7c333cc6"]]), Ya = { class: "commit-message" }, Xa = { class: "commit-date" }, Qa = /* @__PURE__ */ X({
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
    function h() {
      n.clickable && i("click");
    }
    return (g, f) => (s(), o("div", {
      class: le(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      k(Es, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Ya, a(t.message), 1),
      e("span", Xa, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: f[0] || (f[0] = Le(() => {
        }, ["stop"]))
      }, [
        Ce(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Za = /* @__PURE__ */ Q(Qa, [["__scopeId", "data-v-dd7c621b"]]), el = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), T(je, null, {
      header: l(() => [
        k(Ge, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), T(at, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), T(Ha, { key: 1 }, {
          default: l(() => [
            (s(!0), o(V, null, ee(t.commits, (i) => (s(), T(Za, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (h) => c.$emit("select", i)
            }, {
              actions: l(() => [
                k(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (h) => c.$emit("checkout", i),
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
}), tl = /* @__PURE__ */ Q(el, [["__scopeId", "data-v-981c3c64"]]), v_ = ss({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const f_ = [
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
], g_ = {
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
}, sl = [
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
], p_ = [
  ...sl,
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
function Oe() {
  const t = C(!1), c = C(null);
  async function n(q, de) {
    var Re;
    if (!((Re = window.app) != null && Re.api))
      throw new Error("ComfyUI API not available");
    const _e = await window.app.api.fetchApi(q, de);
    if (!_e.ok) {
      const Xe = await _e.json().catch(() => ({}));
      throw new Error(Xe.error || Xe.message || `Request failed: ${_e.status}`);
    }
    return _e.json();
  }
  async function i(q = !1) {
    return n(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function h(q, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: de })
    });
  }
  async function g(q = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${q}&offset=${de}`);
  }
  async function f(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function u() {
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
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function p(q) {
    return n(`/v2/comfygit/commit/${q}`);
  }
  async function w(q, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: de })
    });
  }
  async function b(q, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: de })
    });
  }
  async function x(q, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: de })
    });
  }
  async function z(q, de = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de })
    });
  }
  async function N() {
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
  async function m(q) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: q })
    });
  }
  async function _() {
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
  async function $(q = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function j(q) {
    return n(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function W(q = !1) {
    try {
      return n(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await i(q), _e = [];
      return de.workflows.new.forEach((Re) => {
        _e.push({ name: Re, status: "new", missing_nodes: 0, missing_models: 0, path: Re });
      }), de.workflows.modified.forEach((Re) => {
        _e.push({ name: Re, status: "modified", missing_nodes: 0, missing_models: 0, path: Re });
      }), de.workflows.synced.forEach((Re) => {
        _e.push({ name: Re, status: "synced", missing_nodes: 0, missing_models: 0, path: Re });
      }), _e;
    }
  }
  async function K(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function D(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function S(q, de, _e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: _e })
    });
  }
  async function E(q, de, _e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: _e })
    });
  }
  async function U() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function B() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ne(q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function we(q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function me(q, de) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function se(q, de) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function F(q) {
    return n(`/v2/workspace/models/${q}`, {
      method: "DELETE"
    });
  }
  async function M(q) {
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
  async function te() {
    return n("/v2/workspace/models/directory");
  }
  async function Ee(q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function be() {
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
  async function ae(q) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function oe(q, de) {
    try {
      const _e = new URLSearchParams();
      return q && _e.append("level", q), de && _e.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${_e}`);
    } catch {
      return [];
    }
  }
  async function re(q, de) {
    try {
      const _e = new URLSearchParams();
      return q && _e.append("level", q), de && _e.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${_e}`);
    } catch {
      return [];
    }
  }
  async function ve() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function ze() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function pe(q) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function fe() {
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
  async function H(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ie(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function xe(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function Me(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function ce() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Je(q, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: de })
    });
  }
  async function et(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function Ye(q, de, _e) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: _e })
    });
  }
  async function bt(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST"
    });
  }
  async function ke(q) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function Ae(q = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: de
      })
    });
  }
  async function _t(q, de) {
    const _e = de ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return n(_e);
  }
  async function ut(q, de = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: de.modelStrategy || "skip",
        force: de.force || !1,
        resolutions: de.resolutions
      })
    });
  }
  async function Pe(q, de) {
    const _e = de ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return n(_e);
  }
  async function $t(q, de = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de.force || !1 })
    });
  }
  async function lt(q, de) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: de })
    });
  }
  async function J(q) {
    const de = {
      success: 0,
      failed: []
    };
    for (const _e of q)
      try {
        await D(_e), de.success++;
      } catch (Re) {
        de.failed.push({
          name: _e,
          error: Re instanceof Error ? Re.message : "Unknown error"
        });
      }
    return de;
  }
  async function O(q) {
    var Re;
    const de = new FormData();
    if (de.append("file", q), !((Re = window.app) != null && Re.api))
      throw new Error("ComfyUI API not available");
    const _e = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: de
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!_e.ok) {
      const Xe = await _e.json().catch(() => ({}));
      throw new Error(Xe.error || `Preview failed: ${_e.status}`);
    }
    return _e.json();
  }
  async function A(q) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function Y(q, de, _e, Re) {
    var qt;
    const Xe = new FormData();
    if (Xe.append("file", q), Xe.append("name", de), Xe.append("model_strategy", _e), Xe.append("torch_backend", Re), !((qt = window.app) != null && qt.api))
      throw new Error("ComfyUI API not available");
    const It = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Xe
    });
    if (!It.ok) {
      const Ht = await It.json().catch(() => ({}));
      throw new Error(Ht.message || Ht.error || `Import failed: ${It.status}`);
    }
    return It.json();
  }
  async function ye() {
    return n("/v2/workspace/import/status");
  }
  async function it(q) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function mt(q, de, _e, Re) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: de,
        model_strategy: _e,
        torch_backend: Re
      })
    });
  }
  async function tt() {
    return n("/v2/setup/status");
  }
  async function xt(q) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function vt() {
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
    commit: h,
    getHistory: g,
    exportEnv: f,
    validateExport: u,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: v,
    getCommitDetail: p,
    checkout: w,
    createBranch: b,
    switchBranch: x,
    deleteBranch: z,
    // Environment Management
    getEnvironments: N,
    switchEnvironment: m,
    getSwitchProgress: _,
    createEnvironment: L,
    getCreateProgress: I,
    getComfyUIReleases: $,
    deleteEnvironment: j,
    // Workflow Management
    getWorkflows: W,
    getWorkflowDetails: K,
    resolveWorkflow: D,
    installWorkflowDeps: S,
    setModelImportance: E,
    // Model Management
    getEnvironmentModels: U,
    getWorkspaceModels: B,
    getModelDetails: ne,
    openFileLocation: we,
    addModelSource: me,
    removeModelSource: se,
    deleteModel: F,
    downloadModel: M,
    scanWorkspaceModels: ie,
    getModelsDirectory: te,
    setModelsDirectory: Ee,
    // Settings
    getConfig: be,
    updateConfig: ae,
    // Debug/Logs
    getEnvironmentLogs: oe,
    getWorkspaceLogs: re,
    getEnvironmentLogPath: ve,
    getWorkspaceLogPath: ze,
    openFile: pe,
    // Node Management
    getNodes: fe,
    trackNodeAsDev: H,
    installNode: Ie,
    updateNode: xe,
    uninstallNode: Me,
    // Git Remotes
    getRemotes: ce,
    addRemote: Je,
    removeRemote: et,
    updateRemoteUrl: Ye,
    fetchRemote: bt,
    getRemoteSyncStatus: ke,
    // Push/Pull
    getPullPreview: _t,
    pullFromRemote: ut,
    getPushPreview: Pe,
    pushToRemote: $t,
    validateMerge: lt,
    // Environment Sync
    syncEnvironmentManually: Ae,
    // Workflow Repair
    repairWorkflowModels: J,
    // Import Operations
    previewTarballImport: O,
    previewGitImport: it,
    validateEnvironmentName: A,
    executeImport: Y,
    executeGitImport: mt,
    getImportProgress: ye,
    // First-Time Setup
    getSetupStatus: tt,
    initializeWorkspace: xt,
    getInitializeProgress: vt,
    validatePath: St
  };
}
async function Nt(t, c = {}, n = 5e3) {
  const i = new AbortController(), h = setTimeout(() => i.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(h), g;
  } catch (g) {
    throw clearTimeout(h), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function Ms() {
  const t = C(null);
  async function c() {
    try {
      const f = await Nt(
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
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const f = await Nt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!f.ok) throw new Error("Health check failed");
      return await f.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const f = await Nt(
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
    restart: h,
    kill: g
  };
}
const ol = { class: "base-modal-header" }, nl = {
  key: 0,
  class: "base-modal-title"
}, al = { class: "base-modal-body" }, ll = {
  key: 0,
  class: "base-modal-loading"
}, il = {
  key: 1,
  class: "base-modal-error"
}, rl = {
  key: 0,
  class: "base-modal-footer"
}, dl = /* @__PURE__ */ X({
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
    function h() {
      n.closeOnOverlayClick && i("close");
    }
    function g(f) {
      f.key === "Escape" && n.showCloseButton && i("close");
    }
    return Ue(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Ss(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (f, u) => (s(), T(Fe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: le(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: u[1] || (u[1] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", ol, [
            Ce(f.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", nl, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (r) => f.$emit("close"))
            }, [...u[2] || (u[2] = [
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
          e("div", al, [
            t.loading ? (s(), o("div", ll, "Loading...")) : t.error ? (s(), o("div", il, a(t.error), 1)) : Ce(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (s(), o("div", rl, [
            Ce(f.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Ke = /* @__PURE__ */ Q(dl, [["__scopeId", "data-v-8dab1081"]]), cl = ["type", "disabled"], ul = {
  key: 0,
  class: "spinner"
}, ml = /* @__PURE__ */ X({
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
      class: le(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", ul)) : d("", !0),
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 10, cl));
  }
}), ue = /* @__PURE__ */ Q(ml, [["__scopeId", "data-v-f3452606"]]), vl = {
  key: 0,
  class: "base-title-count"
}, fl = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), T(cs(`h${t.level}`), {
      class: le(["base-title", t.variant])
    }, {
      default: l(() => [
        Ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", vl, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), At = /* @__PURE__ */ Q(fl, [["__scopeId", "data-v-5a01561d"]]), gl = ["value", "disabled"], pl = {
  key: 0,
  value: "",
  disabled: ""
}, hl = ["value"], yl = {
  key: 0,
  class: "base-select-error"
}, wl = /* @__PURE__ */ X({
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
    return (i, h) => (s(), o("div", {
      class: le(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: le(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (g) => i.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", pl, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(V, null, ee(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, hl))), 128))
      ], 42, gl),
      t.error ? (s(), o("span", yl, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), kl = /* @__PURE__ */ Q(wl, [["__scopeId", "data-v-7436d745"]]), bl = { class: "popover-header" }, _l = { class: "popover-title" }, $l = { class: "popover-content" }, Cl = {
  key: 0,
  class: "popover-actions"
}, xl = /* @__PURE__ */ X({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), T(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: pt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", bl, [
            e("h4", _l, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", $l, [
            Ce(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Cl, [
            Ce(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), ct = /* @__PURE__ */ Q(xl, [["__scopeId", "data-v-42815ace"]]), Sl = { class: "detail-section" }, Il = {
  key: 0,
  class: "empty-message"
}, El = { class: "model-header" }, Ml = { class: "model-name" }, Tl = { class: "model-details" }, zl = { class: "model-row" }, Rl = { class: "model-row" }, Ll = { class: "label" }, Pl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Dl = { class: "node-list" }, Nl = ["onClick"], Ul = {
  key: 1,
  class: "model-row"
}, Ol = { class: "value" }, Bl = {
  key: 2,
  class: "model-row"
}, Fl = { class: "value error" }, Al = {
  key: 0,
  class: "model-actions"
}, Vl = { class: "detail-section" }, Wl = {
  key: 0,
  class: "empty-message"
}, jl = { class: "node-name" }, Gl = {
  key: 0,
  class: "node-version"
}, ql = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: h, setModelImportance: g, openFileLocation: f } = Oe(), u = C(null), r = C(!1), v = C(null), p = C(!1), w = C({}), b = C(!1), x = C(/* @__PURE__ */ new Set()), z = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function N(D) {
      switch (D) {
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
    function m(D) {
      switch (D) {
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
    function _(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const S = D.hash || D.filename;
      return x.value.has(S) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function L(D) {
      return x.value.has(D);
    }
    function I(D) {
      x.value.has(D) ? x.value.delete(D) : x.value.add(D), x.value = new Set(x.value);
    }
    async function $() {
      r.value = !0, v.value = null;
      try {
        u.value = await h(n.workflowName);
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function j(D, S) {
      w.value[D] = S, p.value = !0;
    }
    async function W(D) {
      try {
        await f(D);
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to open file location";
      }
    }
    async function K() {
      if (!p.value) {
        i("close");
        return;
      }
      r.value = !0, v.value = null;
      try {
        for (const [D, S] of Object.entries(w.value))
          await g(n.workflowName, D, S);
        i("refresh"), i("close");
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Ue($), (D, S) => (s(), o(V, null, [
      k(Ke, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: v.value || void 0,
        onClose: S[4] || (S[4] = (E) => i("close"))
      }, {
        body: l(() => [
          u.value ? (s(), o(V, { key: 0 }, [
            e("section", Sl, [
              k(At, { variant: "section" }, {
                default: l(() => [
                  y("MODELS USED (" + a(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (s(), o("div", Il, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, ee(u.value.models, (E) => {
                var U;
                return s(), o("div", {
                  key: E.hash || E.filename,
                  class: "model-card"
                }, [
                  e("div", El, [
                    S[6] || (S[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Ml, a(E.filename), 1)
                  ]),
                  e("div", Tl, [
                    e("div", zl, [
                      S[7] || (S[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: le(["value", N(E.status)])
                      }, a(m(E.status)), 3)
                    ]),
                    e("div", Rl, [
                      e("span", Ll, [
                        S[8] || (S[8] = y(" Importance: ", -1)),
                        k(Is, {
                          size: 14,
                          title: "About importance levels",
                          onClick: S[0] || (S[0] = (B) => b.value = !0)
                        })
                      ]),
                      k(kl, {
                        "model-value": w.value[E.filename] || E.importance,
                        options: z,
                        "onUpdate:modelValue": (B) => j(E.filename, B)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    E.loaded_by && E.loaded_by.length > 0 ? (s(), o("div", Pl, [
                      S[9] || (S[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Dl, [
                        (s(!0), o(V, null, ee(_(E), (B, ne) => (s(), o("div", {
                          key: `${B.node_id}-${ne}`,
                          class: "node-reference"
                        }, a(B.node_type) + " (Node #" + a(B.node_id) + ") ", 1))), 128)),
                        E.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (B) => I(E.hash || E.filename)
                        }, a(L(E.hash || E.filename) ? "▼ Show less" : `▶ View all (${E.loaded_by.length})`), 9, Nl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    E.size_mb ? (s(), o("div", Ul, [
                      S[10] || (S[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Ol, a(E.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    E.has_category_mismatch ? (s(), o("div", Bl, [
                      S[13] || (S[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Fl, [
                        S[11] || (S[11] = y(" In ", -1)),
                        e("code", null, a(E.actual_category) + "/", 1),
                        S[12] || (S[12] = y(" but loader needs ", -1)),
                        e("code", null, a((U = E.expected_categories) == null ? void 0 : U[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  E.status !== "available" ? (s(), o("div", Al, [
                    E.status === "downloadable" ? (s(), T(ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: S[1] || (S[1] = (B) => i("resolve"))
                    }, {
                      default: l(() => [...S[14] || (S[14] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    })) : E.status === "category_mismatch" && E.file_path ? (s(), T(ue, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => W(E.file_path)
                    }, {
                      default: l(() => [...S[15] || (S[15] = [
                        y(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : E.status !== "path_mismatch" ? (s(), T(ue, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: S[2] || (S[2] = (B) => i("resolve"))
                    }, {
                      default: l(() => [...S[16] || (S[16] = [
                        y(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", Vl, [
              k(At, { variant: "section" }, {
                default: l(() => [
                  y("NODES USED (" + a(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (s(), o("div", Wl, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, ee(u.value.nodes, (E) => (s(), o("div", {
                key: E.name,
                class: "node-item"
              }, [
                e("span", {
                  class: le(["node-status", E.status === "installed" ? "installed" : "missing"])
                }, a(E.status === "installed" ? "✓" : "✕"), 3),
                e("span", jl, a(E.name), 1),
                E.version ? (s(), o("span", Gl, "v" + a(E.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          k(ue, {
            variant: "secondary",
            onClick: S[3] || (S[3] = (E) => i("close"))
          }, {
            default: l(() => [...S[17] || (S[17] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (s(), T(ue, {
            key: 0,
            variant: "primary",
            onClick: K
          }, {
            default: l(() => [...S[18] || (S[18] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(ct, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: S[5] || (S[5] = (E) => b.value = !1)
      }, {
        content: l(() => [...S[19] || (S[19] = [
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
}), Hl = /* @__PURE__ */ Q(ql, [["__scopeId", "data-v-668728e6"]]), Se = ss({
  items: [],
  status: "idle"
});
let dt = null;
function Ts() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function os(t) {
  return Se.items.find((c) => c.id === t);
}
async function Et() {
  if (Se.status === "downloading") return;
  const t = Se.items.find((c) => c.status === "queued");
  if (!t) {
    Se.status = "idle";
    return;
  }
  Se.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Kl(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Se.status = "idle", Et();
  }
}
async function Kl(t) {
  return new Promise((c, n) => {
    dt && (dt.close(), dt = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), h = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    dt = h;
    let g = Date.now(), f = 0, u = !1;
    h.onmessage = (r) => {
      try {
        const v = JSON.parse(r.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const p = Date.now(), w = (p - g) / 1e3;
            if (w > 0.5) {
              const b = t.downloaded - f;
              if (t.speed = b / w, g = p, f = t.downloaded, t.speed > 0 && t.size > 0) {
                const x = t.size - t.downloaded;
                t.eta = x / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            u = !0, h.close(), dt = null, c();
            break;
          case "error":
            u = !0, h.close(), dt = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, h.onerror = () => {
      h.close(), dt = null, u || n(new Error("Connection lost"));
    };
  });
}
async function Jl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Se.items.some((h) => h.url === n.url && h.filename === n.filename))
        continue;
      const i = {
        id: Ts(),
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
      Se.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Gt() {
  function t(m) {
    for (const _ of m) {
      if (Se.items.some(
        ($) => $.url === _.url && $.targetPath === _.targetPath && ["queued", "downloading", "paused", "completed"].includes($.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${_.filename}`);
        continue;
      }
      const I = {
        id: Ts(),
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
      Se.items.push(I);
    }
    Se.status === "idle" && Et();
  }
  async function c(m) {
    const _ = os(m);
    if (_) {
      if (_.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(_.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        dt && (dt.close(), dt = null), _.status = "failed", _.error = "Cancelled by user", Se.status = "idle", Et();
      } else if (_.status === "queued") {
        const L = Se.items.findIndex((I) => I.id === m);
        L >= 0 && Se.items.splice(L, 1);
      }
    }
  }
  function n(m) {
    const _ = os(m);
    !_ || _.status !== "failed" || (_.status = "queued", _.error = void 0, _.progress = 0, _.downloaded = 0, Se.status === "idle" && Et());
  }
  function i(m) {
    const _ = os(m);
    !_ || _.status !== "paused" || (_.status = "queued", Se.status === "idle" && Et());
  }
  function h() {
    const m = Se.items.filter((_) => _.status === "paused");
    for (const _ of m)
      _.status = "queued";
    Se.status === "idle" && Et();
  }
  function g(m) {
    const _ = Se.items.findIndex((L) => L.id === m);
    _ >= 0 && ["completed", "failed", "paused"].includes(Se.items[_].status) && Se.items.splice(_, 1);
  }
  function f() {
    Se.items = Se.items.filter((m) => m.status !== "completed");
  }
  function u() {
    Se.items = Se.items.filter((m) => m.status !== "failed");
  }
  const r = P(
    () => Se.items.find((m) => m.status === "downloading")
  ), v = P(
    () => Se.items.filter((m) => m.status === "queued")
  ), p = P(
    () => Se.items.filter((m) => m.status === "completed")
  ), w = P(
    () => Se.items.filter((m) => m.status === "failed")
  ), b = P(
    () => Se.items.filter((m) => m.status === "paused")
  ), x = P(() => Se.items.length > 0), z = P(
    () => Se.items.filter((m) => m.status === "queued" || m.status === "downloading").length
  ), N = P(
    () => Se.items.some((m) => m.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Zs(Se),
    // Computed
    currentDownload: r,
    queuedItems: v,
    completedItems: p,
    failedItems: w,
    pausedItems: b,
    hasItems: x,
    activeCount: z,
    hasPaused: N,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: h,
    removeItem: g,
    clearCompleted: f,
    clearFailed: u,
    loadPendingDownloads: Jl
  };
}
function zs() {
  const t = C(null), c = C(null), n = C([]), i = C([]), h = C(!1), g = C(null);
  async function f(L, I) {
    var j;
    if (!((j = window.app) != null && j.api))
      throw new Error("ComfyUI API not available");
    const $ = await window.app.api.fetchApi(L, I);
    if (!$.ok) {
      const W = await $.json().catch(() => ({})), K = W.error || W.message || `Request failed: ${$.status}`;
      throw new Error(K);
    }
    return $.json();
  }
  async function u(L) {
    h.value = !0, g.value = null;
    try {
      let I;
      return Dt() || (I = await f(
        `/v2/comfygit/workflow/${L}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = I, I;
    } catch (I) {
      const $ = I instanceof Error ? I.message : "Unknown error occurred";
      throw g.value = $, I;
    } finally {
      h.value = !1;
    }
  }
  async function r(L, I, $, j) {
    h.value = !0, g.value = null;
    try {
      let W;
      if (!Dt()) {
        const K = Object.fromEntries(I), D = Object.fromEntries($), S = j ? Array.from(j) : [];
        W = await f(
          `/v2/comfygit/workflow/${L}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: K,
              model_choices: D,
              skipped_packages: S
            })
          }
        );
      }
      return c.value = W, W;
    } catch (W) {
      const K = W instanceof Error ? W.message : "Unknown error occurred";
      throw g.value = K, W;
    } finally {
      h.value = !1;
    }
  }
  async function v(L, I = 10) {
    h.value = !0, g.value = null;
    try {
      let $;
      return Dt() || ($ = await f(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: I })
        }
      )), n.value = $.results, $.results;
    } catch ($) {
      const j = $ instanceof Error ? $.message : "Unknown error occurred";
      throw g.value = j, $;
    } finally {
      h.value = !1;
    }
  }
  async function p(L, I = 10) {
    h.value = !0, g.value = null;
    try {
      let $;
      return Dt() || ($ = await f(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: I })
        }
      )), i.value = $.results, $.results;
    } catch ($) {
      const j = $ instanceof Error ? $.message : "Unknown error occurred";
      throw g.value = j, $;
    } finally {
      h.value = !1;
    }
  }
  const w = ss({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    w.phase = "idle", w.currentFile = void 0, w.currentFileIndex = void 0, w.totalFiles = void 0, w.bytesDownloaded = void 0, w.bytesTotal = void 0, w.completedFiles = [], w.nodesToInstall = [], w.nodesInstalled = [], w.installError = void 0, w.needsRestart = void 0, w.error = void 0, w.nodeInstallProgress = void 0;
  }
  async function x(L) {
    w.phase = "installing", w.nodesInstalled = [], w.installError = void 0, w.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Dt(), await z(L);
    } catch (I) {
      const $ = I instanceof Error ? I.message : "Failed to install nodes";
      throw w.installError = $, I;
    }
  }
  async function z(L) {
    var $;
    const I = await f(
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
      const j = new Map((($ = I.failed) == null ? void 0 : $.map((W) => [W.node_id, W.error])) || []);
      for (let W = 0; W < w.nodesToInstall.length; W++) {
        const K = w.nodesToInstall[W], D = j.get(K);
        w.nodeInstallProgress.completedNodes.push({
          node_id: K,
          success: !D,
          error: D
        });
      }
    }
    return w.nodesInstalled = I.nodes_installed, w.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (w.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function N(L, I, $) {
    b(), w.phase = "resolving", g.value = null;
    const j = Object.fromEntries(I), W = Object.fromEntries($);
    try {
      const K = await fetch(`/v2/comfygit/workflow/${L}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: j,
          model_choices: W
        })
      });
      if (!K.ok)
        throw new Error(`Request failed: ${K.status}`);
      if (!K.body)
        throw new Error("No response body");
      const D = K.body.getReader(), S = new TextDecoder();
      let E = "";
      for (; ; ) {
        const { done: U, value: B } = await D.read();
        if (U) break;
        E += S.decode(B, { stream: !0 });
        const ne = E.split(`

`);
        E = ne.pop() || "";
        for (const we of ne) {
          if (!we.trim()) continue;
          const me = we.split(`
`);
          let se = "", F = "";
          for (const M of me)
            M.startsWith("event: ") ? se = M.slice(7) : M.startsWith("data: ") && (F = M.slice(6));
          if (F)
            try {
              const M = JSON.parse(F);
              m(se, M);
            } catch (M) {
              console.warn("Failed to parse SSE event:", M);
            }
        }
      }
    } catch (K) {
      const D = K instanceof Error ? K.message : "Unknown error occurred";
      throw g.value = D, w.error = D, w.phase = "error", K;
    }
  }
  function m(L, I) {
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
  function _(L, I) {
    const { addToQueue: $ } = Gt(), j = I.filter((W) => W.url && W.target_path).map((W) => ({
      workflow: L,
      filename: W.filename,
      url: W.url,
      targetPath: W.target_path,
      size: W.size || 0,
      type: "model"
    }));
    return j.length > 0 && $(j), j.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: h,
    error: g,
    progress: w,
    // Methods
    analyzeWorkflow: u,
    applyResolution: r,
    applyResolutionWithProgress: N,
    installNodes: x,
    searchNodes: v,
    searchModels: p,
    resetProgress: b,
    queueModelDownloads: _
  };
}
const Yl = { class: "resolution-stepper" }, Xl = { class: "stepper-header" }, Ql = ["onClick"], Zl = {
  key: 0,
  class: "step-icon"
}, ei = {
  key: 1,
  class: "step-number"
}, ti = { class: "step-label" }, si = {
  key: 0,
  class: "step-connector"
}, oi = { class: "stepper-content" }, ni = /* @__PURE__ */ X({
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
    function h(v) {
      var p;
      if ((p = n.stepStats) != null && p[v]) {
        const w = n.stepStats[v];
        return w.total > 0 && w.resolved === w.total;
      }
      return n.completedSteps.includes(v);
    }
    function g(v) {
      var p;
      if ((p = n.stepStats) != null && p[v]) {
        const w = n.stepStats[v];
        return w.resolved > 0 && w.resolved < w.total;
      }
      return !1;
    }
    function f(v) {
      return h(v) ? "state-complete" : g(v) ? "state-partial" : "state-pending";
    }
    function u(v) {
      return !1;
    }
    function r(v) {
      i("step-change", v);
    }
    return (v, p) => (s(), o("div", Yl, [
      e("div", Xl, [
        (s(!0), o(V, null, ee(t.steps, (w, b) => (s(), o("div", {
          key: w.id,
          class: le(["step", {
            active: t.currentStep === w.id,
            completed: h(w.id),
            "in-progress": g(w.id),
            disabled: u(w.id)
          }]),
          onClick: (x) => r(w.id)
        }, [
          e("div", {
            class: le(["step-indicator", f(w.id)])
          }, [
            h(w.id) ? (s(), o("span", Zl, "✓")) : (s(), o("span", ei, a(b + 1), 1))
          ], 2),
          e("div", ti, a(w.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", si)) : d("", !0)
        ], 10, Ql))), 128))
      ]),
      e("div", oi, [
        Ce(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ai = /* @__PURE__ */ Q(ni, [["__scopeId", "data-v-2a7b3af8"]]), li = /* @__PURE__ */ X({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = P(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = P(() => `confidence-${n.value}`), h = P(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, f) => (s(), o("span", {
      class: le(["confidence-badge", i.value, t.size])
    }, a(h.value), 3));
  }
}), es = /* @__PURE__ */ Q(li, [["__scopeId", "data-v-17ec4b80"]]), ii = { class: "node-info" }, ri = { class: "node-info-text" }, di = { class: "item-body" }, ci = {
  key: 0,
  class: "resolved-state"
}, ui = {
  key: 1,
  class: "multiple-options"
}, mi = { class: "options-list" }, vi = ["onClick"], fi = ["name", "value", "checked", "onChange"], gi = { class: "option-content" }, pi = { class: "option-header" }, hi = { class: "option-package-id" }, yi = {
  key: 0,
  class: "option-title"
}, wi = { class: "option-meta" }, ki = {
  key: 0,
  class: "installed-badge"
}, bi = { class: "action-buttons" }, _i = {
  key: 2,
  class: "unresolved"
}, $i = {
  key: 0,
  class: "searching-state"
}, Ci = { class: "options-list" }, xi = ["onClick"], Si = ["name", "value"], Ii = { class: "option-content" }, Ei = { class: "option-header" }, Mi = { class: "option-package-id" }, Ti = {
  key: 0,
  class: "option-description"
}, zi = { class: "option-meta" }, Ri = {
  key: 0,
  class: "installed-badge"
}, Li = {
  key: 2,
  class: "unresolved-message"
}, Pi = { class: "action-buttons" }, Di = /* @__PURE__ */ X({
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
    function h(r, v = 80) {
      return r.length <= v ? r : r.slice(0, v - 3) + "...";
    }
    const g = P(() => !!n.choice);
    P(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), P(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.package_id;
    });
    const f = P(() => {
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
    function u(r) {
      i("option-selected", r);
    }
    return (r, v) => (s(), o("div", {
      class: le(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", ii, [
        e("span", ri, [
          v[7] || (v[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", di, [
        g.value ? (s(), o("div", ci, [
          k(ue, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (p) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ui, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", mi, [
            (s(!0), o(V, null, ee(t.options, (p, w) => (s(), o("label", {
              key: p.package_id,
              class: le(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (b) => u(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (b) => u(w)
              }, null, 40, fi),
              e("div", gi, [
                e("div", pi, [
                  e("span", hi, a(p.package_id), 1),
                  k(es, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                p.title && p.title !== p.package_id ? (s(), o("div", yi, a(p.title), 1)) : d("", !0),
                e("div", wi, [
                  p.is_installed ? (s(), o("span", ki, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, vi))), 128))
          ]),
          e("div", bi, [
            k(ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (p) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (p) => i("manual-entry"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", _i, [
          t.isSearching ? (s(), o("div", $i, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(V, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Ci, [
              (s(!0), o(V, null, ee(t.searchResults.slice(0, 5), (p, w) => (s(), o("label", {
                key: p.package_id,
                class: "option-card",
                onClick: (b) => i("search-result-selected", p)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: w
                }, null, 8, Si),
                e("div", Ii, [
                  e("div", Ei, [
                    e("span", Mi, a(p.package_id), 1),
                    k(es, {
                      confidence: p.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  p.description ? (s(), o("div", Ti, a(h(p.description)), 1)) : d("", !0),
                  e("div", zi, [
                    p.is_installed ? (s(), o("span", Ri, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, xi))), 128))
            ])
          ], 64)) : (s(), o("div", Li, [...v[15] || (v[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Pi, [
            k(ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[4] || (v[4] = (p) => i("search"))
            }, {
              default: l(() => {
                var p;
                return [
                  y(a((p = t.searchResults) != null && p.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (p) => i("manual-entry"))
            }, {
              default: l(() => [...v[16] || (v[16] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...v[17] || (v[17] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ni = /* @__PURE__ */ Q(Di, [["__scopeId", "data-v-c2997d1d"]]), Ui = { class: "item-navigator" }, Oi = { class: "nav-item-info" }, Bi = ["title"], Fi = { class: "nav-controls" }, Ai = { class: "nav-arrows" }, Vi = ["disabled"], Wi = ["disabled"], ji = { class: "nav-position" }, Gi = /* @__PURE__ */ X({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, h) => (s(), o("div", Ui, [
      e("div", Oi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, Bi)
      ]),
      e("div", Fi, [
        e("div", Ai, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: h[0] || (h[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Vi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, Wi)
        ]),
        e("span", ji, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Rs = /* @__PURE__ */ Q(Gi, [["__scopeId", "data-v-74af7920"]]), qi = ["type", "value", "placeholder", "disabled"], Hi = {
  key: 0,
  class: "base-input-error"
}, Ki = /* @__PURE__ */ X({
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
      class: le(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: le(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = gt((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = gt((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, qi),
      t.error ? (s(), o("span", Hi, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ Q(Ki, [["__scopeId", "data-v-9ba02cdc"]]), Ji = { class: "node-resolution-step" }, Yi = {
  key: 0,
  class: "auto-resolved-section"
}, Xi = { class: "section-header" }, Qi = { class: "stat-badge" }, Zi = { class: "resolved-packages-list" }, er = { class: "package-info" }, tr = { class: "package-id" }, sr = { class: "node-count" }, or = { class: "package-actions" }, nr = {
  key: 0,
  class: "status-badge install"
}, ar = {
  key: 1,
  class: "status-badge skip"
}, lr = ["onClick"], ir = {
  key: 1,
  class: "section-divider"
}, rr = { class: "step-header" }, dr = { class: "stat-badge" }, cr = {
  key: 1,
  class: "step-body"
}, ur = {
  key: 3,
  class: "empty-state"
}, mr = { class: "node-modal-body" }, vr = { class: "node-search-results-container" }, fr = {
  key: 0,
  class: "node-search-results"
}, gr = ["onClick"], pr = { class: "node-result-header" }, hr = { class: "node-result-package-id" }, yr = {
  key: 0,
  class: "node-result-description"
}, wr = {
  key: 1,
  class: "node-empty-state"
}, kr = {
  key: 2,
  class: "node-empty-state"
}, br = {
  key: 3,
  class: "node-empty-state"
}, _r = { class: "node-manual-entry-modal" }, $r = { class: "node-modal-body" }, Cr = { class: "node-modal-actions" }, xr = /* @__PURE__ */ X({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: h } = zs(), g = C(0), f = C(!1), u = C(!1), r = C(""), v = C(""), p = C([]), w = C(!1), b = C(/* @__PURE__ */ new Map()), x = C(/* @__PURE__ */ new Set()), z = C(!1);
    function N() {
      z.value && F(), z.value = !1;
    }
    const m = P(() => n.nodes[g.value]), _ = P(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), L = P(() => m.value ? b.value.get(m.value.node_type) || [] : []), I = P(() => m.value ? x.value.has(m.value.node_type) : !1);
    kt(m, async (re) => {
      var ve;
      re && ((ve = re.options) != null && ve.length || b.value.has(re.node_type) || x.value.has(re.node_type) || n.nodeChoices.has(re.node_type) || await $(re.node_type));
    }, { immediate: !0 });
    async function $(re) {
      x.value.add(re);
      try {
        const ve = await h(re, 5);
        b.value.set(re, ve);
      } catch {
        b.value.set(re, []);
      } finally {
        x.value.delete(re);
      }
    }
    const j = P(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function W(re) {
      return n.skippedPackages.has(re);
    }
    function K(re) {
      i("package-skip", re);
    }
    const D = P(() => {
      var ve;
      if (!m.value) return "not-found";
      const re = n.nodeChoices.get(m.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ve = m.value.options) != null && ve.length ? "ambiguous" : "not-found";
    }), S = P(() => {
      var ve;
      if (!m.value) return;
      const re = n.nodeChoices.get(m.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ve = m.value.options) != null && ve.length ? `${m.value.options.length} matches` : "Not Found";
    });
    function E(re) {
      re >= 0 && re < n.nodes.length && (g.value = re);
    }
    function U() {
      m.value && i("mark-optional", m.value.node_type);
    }
    function B() {
      m.value && i("skip", m.value.node_type);
    }
    function ne(re) {
      m.value && i("option-selected", m.value.node_type, re);
    }
    function we() {
      m.value && i("clear-choice", m.value.node_type);
    }
    function me() {
      m.value && (r.value = m.value.node_type, p.value = L.value, f.value = !0, Ee(r.value));
    }
    function se() {
      v.value = "", u.value = !0;
    }
    function F() {
      f.value = !1, r.value = "", p.value = [];
    }
    function M() {
      u.value = !1, v.value = "";
    }
    let ie = null;
    function te() {
      ie && clearTimeout(ie), ie = setTimeout(() => {
        Ee(r.value);
      }, 300);
    }
    async function Ee(re) {
      if (!re.trim()) {
        p.value = [];
        return;
      }
      w.value = !0;
      try {
        p.value = await h(re, 10);
      } catch {
        p.value = [];
      } finally {
        w.value = !1;
      }
    }
    function be(re) {
      m.value && (i("manual-entry", m.value.node_type, re.package_id), F());
    }
    function ae(re) {
      m.value && i("manual-entry", m.value.node_type, re.package_id);
    }
    function oe() {
      !m.value || !v.value.trim() || (i("manual-entry", m.value.node_type, v.value.trim()), M());
    }
    return (re, ve) => {
      var ze, pe;
      return s(), o("div", Ji, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Yi, [
          e("div", Xi, [
            ve[6] || (ve[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Qi, a(j.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Zi, [
            (s(!0), o(V, null, ee(t.autoResolvedPackages, (fe) => (s(), o("div", {
              key: fe.package_id,
              class: "resolved-package-item"
            }, [
              e("div", er, [
                e("code", tr, a(fe.package_id), 1),
                e("span", sr, a(fe.node_types_count) + " node type" + a(fe.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", or, [
                W(fe.package_id) ? (s(), o("span", ar, " SKIPPED ")) : (s(), o("span", nr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (H) => K(fe.package_id)
                }, a(W(fe.package_id) ? "Include" : "Skip"), 9, lr)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", ir)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(V, { key: 2 }, [
          e("div", rr, [
            ve[7] || (ve[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", dr, a(_.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          m.value ? (s(), T(Rs, {
            key: 0,
            "item-name": m.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ve[0] || (ve[0] = (fe) => E(g.value - 1)),
            onNext: ve[1] || (ve[1] = (fe) => E(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          m.value ? (s(), o("div", cr, [
            k(Ni, {
              "node-type": m.value.node_type,
              "has-multiple-options": !!((ze = m.value.options) != null && ze.length),
              options: m.value.options,
              choice: (pe = t.nodeChoices) == null ? void 0 : pe.get(m.value.node_type),
              status: D.value,
              "status-label": S.value,
              "search-results": L.value,
              "is-searching": I.value,
              onMarkOptional: U,
              onSkip: B,
              onManualEntry: se,
              onSearch: me,
              onOptionSelected: ne,
              onClearChoice: we,
              onSearchResultSelected: ae
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", ur, [...ve[8] || (ve[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), T(Fe, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ve[4] || (ve[4] = Le((fe) => z.value = !0, ["self"])),
            onMouseup: Le(N, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ve[3] || (ve[3] = (fe) => z.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ve[9] || (ve[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              e("div", mr, [
                k(nt, {
                  modelValue: r.value,
                  "onUpdate:modelValue": ve[2] || (ve[2] = (fe) => r.value = fe),
                  placeholder: "Search by node type, package name...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                e("div", vr, [
                  p.value.length > 0 ? (s(), o("div", fr, [
                    (s(!0), o(V, null, ee(p.value, (fe) => (s(), o("div", {
                      key: fe.package_id,
                      class: "node-search-result-item",
                      onClick: (H) => be(fe)
                    }, [
                      e("div", pr, [
                        e("code", hr, a(fe.package_id), 1),
                        fe.match_confidence ? (s(), T(es, {
                          key: 0,
                          confidence: fe.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      fe.description ? (s(), o("div", yr, a(fe.description), 1)) : d("", !0)
                    ], 8, gr))), 128))
                  ])) : w.value ? (s(), o("div", wr, "Searching...")) : r.value ? (s(), o("div", kr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", br, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), T(Fe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Le(M, ["self"])
          }, [
            e("div", _r, [
              e("div", { class: "node-modal-header" }, [
                ve[10] || (ve[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", $r, [
                k(nt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ve[5] || (ve[5] = (fe) => v.value = fe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Cr, [
                  k(ue, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: l(() => [...ve[11] || (ve[11] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ue, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: oe
                  }, {
                    default: l(() => [...ve[12] || (ve[12] = [
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
}), Sr = /* @__PURE__ */ Q(xr, [["__scopeId", "data-v-281581bc"]]), Ir = { class: "node-info" }, Er = { class: "node-info-text" }, Mr = { class: "item-body" }, Tr = {
  key: 0,
  class: "resolved-state"
}, zr = {
  key: 1,
  class: "multiple-options"
}, Rr = { class: "options-list" }, Lr = ["onClick"], Pr = ["name", "value", "checked", "onChange"], Dr = { class: "option-content" }, Nr = { class: "option-header" }, Ur = { class: "option-filename" }, Or = { class: "option-meta" }, Br = { class: "option-size" }, Fr = { class: "option-category" }, Ar = { class: "option-path" }, Vr = { class: "action-buttons" }, Wr = {
  key: 2,
  class: "unresolved"
}, jr = { class: "action-buttons" }, Gr = /* @__PURE__ */ X({
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
    const n = t, i = c, h = P(() => !!n.choice);
    P(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), P(() => {
      var r, v;
      return ((v = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : v.filename) || "selected";
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
    function f(r) {
      i("option-selected", r);
    }
    function u(r) {
      if (!r) return "Unknown";
      const v = r / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, v) => (s(), o("div", {
      class: le(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Ir, [
        e("span", Er, [
          v[7] || (v[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Mr, [
        h.value ? (s(), o("div", Tr, [
          k(ue, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (p) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", zr, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Rr, [
            (s(!0), o(V, null, ee(t.options, (p, w) => (s(), o("label", {
              key: p.model.hash,
              class: le(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (b) => f(w)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (b) => f(w)
              }, null, 40, Pr),
              e("div", Dr, [
                e("div", Nr, [
                  e("span", Ur, a(p.model.filename), 1),
                  k(es, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Or, [
                  e("span", Br, a(u(p.model.size)), 1),
                  e("span", Fr, a(p.model.category), 1)
                ]),
                e("div", Ar, a(p.model.relative_path), 1)
              ])
            ], 10, Lr))), 128))
          ]),
          e("div", Vr, [
            k(ue, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (p) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ue, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (p) => i("download-url"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Wr, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", jr, [
            k(ue, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (p) => i("search"))
            }, {
              default: l(() => [...v[13] || (v[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (p) => i("download-url"))
            }, {
              default: l(() => [...v[14] || (v[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...v[15] || (v[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), qr = /* @__PURE__ */ Q(Gr, [["__scopeId", "data-v-8a82fefa"]]), Hr = { class: "model-resolution-step" }, Kr = { class: "step-header" }, Jr = { class: "step-info" }, Yr = { class: "step-title" }, Xr = { class: "step-description" }, Qr = { class: "stat-badge" }, Zr = {
  key: 1,
  class: "step-body"
}, ed = {
  key: 2,
  class: "empty-state"
}, td = { class: "model-search-modal" }, sd = { class: "model-modal-body" }, od = {
  key: 0,
  class: "model-search-results"
}, nd = ["onClick"], ad = { class: "model-result-header" }, ld = { class: "model-result-filename" }, id = { class: "model-result-meta" }, rd = { class: "model-result-category" }, dd = { class: "model-result-size" }, cd = {
  key: 0,
  class: "model-result-path"
}, ud = {
  key: 1,
  class: "model-no-results"
}, md = {
  key: 2,
  class: "model-searching"
}, vd = { class: "model-download-url-modal" }, fd = { class: "model-modal-body" }, gd = { class: "model-input-group" }, pd = { class: "model-input-group" }, hd = { class: "model-modal-actions" }, yd = /* @__PURE__ */ X({
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
    function i(F) {
      var M;
      return F && ((M = n[F]) == null ? void 0 : M[0]) || null;
    }
    const h = t, g = c, f = C(0), u = C(!1), r = C(!1), v = C(""), p = C(""), w = C(""), b = C([]), x = C(!1), z = P(() => h.models[f.value]), N = P(() => h.models.some((F) => F.is_download_intent)), m = P(() => h.models.filter(
      (F) => h.modelChoices.has(F.filename) || F.is_download_intent
    ).length), _ = P(() => {
      var M;
      if (!z.value) return "";
      const F = i((M = z.value.reference) == null ? void 0 : M.node_type);
      return F ? `${F}/${z.value.filename}` : "";
    }), L = P(() => {
      var M;
      if (!z.value) return "not-found";
      const F = h.modelChoices.get(z.value.filename);
      if (F)
        switch (F.action) {
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
    }), I = P(() => {
      var M, ie;
      if (!z.value) return;
      const F = h.modelChoices.get(z.value.filename);
      if (F)
        switch (F.action) {
          case "select":
            return (M = F.selected_model) != null && M.filename ? `→ ${F.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return z.value.is_download_intent ? "Pending Download" : (ie = z.value.options) != null && ie.length ? `${z.value.options.length} matches` : "Not Found";
    });
    function $(F) {
      F >= 0 && F < h.models.length && (f.value = F);
    }
    function j() {
      z.value && g("mark-optional", z.value.filename);
    }
    function W() {
      z.value && g("skip", z.value.filename);
    }
    function K(F) {
      z.value && g("option-selected", z.value.filename, F);
    }
    function D() {
      z.value && g("clear-choice", z.value.filename);
    }
    function S() {
      z.value && (v.value = z.value.filename, u.value = !0);
    }
    function E() {
      z.value && (p.value = z.value.download_source || "", w.value = z.value.target_path || _.value, r.value = !0);
    }
    function U() {
      u.value = !1, v.value = "", b.value = [];
    }
    function B() {
      r.value = !1, p.value = "", w.value = "";
    }
    function ne() {
      x.value = !0, setTimeout(() => {
        x.value = !1;
      }, 300);
    }
    function we(F) {
      z.value && U();
    }
    function me() {
      !z.value || !p.value.trim() || (g("download-url", z.value.filename, p.value.trim(), w.value.trim() || void 0), B());
    }
    function se(F) {
      if (!F) return "Unknown";
      const M = F / (1024 * 1024 * 1024);
      return M >= 1 ? `${M.toFixed(2)} GB` : `${(F / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (F, M) => {
      var ie, te, Ee;
      return s(), o("div", Hr, [
        e("div", Kr, [
          e("div", Jr, [
            e("h3", Yr, a(N.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Xr, a(N.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Qr, a(m.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        z.value ? (s(), T(Rs, {
          key: 0,
          "item-name": z.value.filename,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: M[0] || (M[0] = (be) => $(f.value - 1)),
          onNext: M[1] || (M[1] = (be) => $(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        z.value ? (s(), o("div", Zr, [
          k(qr, {
            filename: z.value.filename,
            "node-type": ((ie = z.value.reference) == null ? void 0 : ie.node_type) || "Unknown",
            "has-multiple-options": !!((te = z.value.options) != null && te.length),
            options: z.value.options,
            choice: (Ee = t.modelChoices) == null ? void 0 : Ee.get(z.value.filename),
            status: L.value,
            "status-label": I.value,
            onMarkOptional: j,
            onSkip: W,
            onDownloadUrl: E,
            onSearch: S,
            onOptionSelected: K,
            onClearChoice: D
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", ed, [...M[5] || (M[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), T(Fe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Le(U, ["self"])
          }, [
            e("div", td, [
              e("div", { class: "model-modal-header" }, [
                M[6] || (M[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", sd, [
                k(nt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (be) => v.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: ne
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", od, [
                  (s(!0), o(V, null, ee(b.value, (be) => (s(), o("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (ae) => we()
                  }, [
                    e("div", ad, [
                      e("code", ld, a(be.filename), 1)
                    ]),
                    e("div", id, [
                      e("span", rd, a(be.category), 1),
                      e("span", dd, a(se(be.size)), 1)
                    ]),
                    be.relative_path ? (s(), o("div", cd, a(be.relative_path), 1)) : d("", !0)
                  ], 8, nd))), 128))
                ])) : v.value && !x.value ? (s(), o("div", ud, ' No models found matching "' + a(v.value) + '" ', 1)) : d("", !0),
                x.value ? (s(), o("div", md, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), T(Fe, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Le(B, ["self"])
          }, [
            e("div", vd, [
              e("div", { class: "model-modal-header" }, [
                M[7] || (M[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              e("div", fd, [
                e("div", gd, [
                  M[8] || (M[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(nt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (be) => p.value = be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", pd, [
                  M[9] || (M[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(nt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": M[4] || (M[4] = (be) => w.value = be),
                    placeholder: _.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", hd, [
                  k(ue, {
                    variant: "secondary",
                    onClick: B
                  }, {
                    default: l(() => [...M[10] || (M[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ue, {
                    variant: "primary",
                    disabled: !p.value.trim() || !w.value.trim(),
                    onClick: me
                  }, {
                    default: l(() => [...M[11] || (M[11] = [
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
}), wd = /* @__PURE__ */ Q(yd, [["__scopeId", "data-v-c6acbada"]]), kd = { class: "applying-step" }, bd = {
  key: 0,
  class: "phase-content"
}, _d = {
  key: 1,
  class: "phase-content"
}, $d = { class: "phase-description" }, Cd = { class: "overall-progress" }, xd = { class: "progress-bar" }, Sd = { class: "progress-label" }, Id = { class: "install-list" }, Ed = { class: "install-icon" }, Md = { key: 0 }, Td = {
  key: 1,
  class: "spinner"
}, zd = { key: 2 }, Rd = { key: 3 }, Ld = {
  key: 0,
  class: "install-error"
}, Pd = {
  key: 2,
  class: "phase-content"
}, Dd = { class: "phase-header" }, Nd = { class: "phase-title" }, Ud = { class: "completion-summary" }, Od = {
  key: 0,
  class: "summary-item success"
}, Bd = { class: "summary-text" }, Fd = {
  key: 1,
  class: "summary-item error"
}, Ad = { class: "summary-text" }, Vd = {
  key: 2,
  class: "failed-list"
}, Wd = { class: "failed-node-id" }, jd = { class: "failed-error" }, Gd = {
  key: 4,
  class: "summary-item success"
}, qd = {
  key: 5,
  class: "restart-prompt"
}, Hd = {
  key: 3,
  class: "phase-content error"
}, Kd = { class: "error-message" }, Jd = /* @__PURE__ */ X({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = P(() => {
      var v, p;
      const u = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!u) return 0;
      const r = ((p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0;
      return Math.round(r / u * 100);
    }), i = P(() => {
      var u;
      return ((u = c.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((r) => !r.success)) || [];
    }), h = P(() => i.value.length > 0);
    function g(u, r) {
      var p, w;
      const v = (p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.find((b) => b.node_id === u);
      return v ? v.success ? "complete" : "failed" : ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.currentIndex) === r ? "installing" : "pending";
    }
    function f(u) {
      var r, v;
      return (v = (r = c.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((p) => p.node_id === u)) == null ? void 0 : v.error;
    }
    return (u, r) => {
      var v, p, w, b;
      return s(), o("div", kd, [
        t.progress.phase === "resolving" ? (s(), o("div", bd, [...r[2] || (r[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", _d, [
          r[3] || (r[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", $d, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Cd, [
            e("div", xd, [
              e("div", {
                class: "progress-fill",
                style: pt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Sd, a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Id, [
            (s(!0), o(V, null, ee(t.progress.nodesToInstall, (x, z) => (s(), o("div", {
              key: x,
              class: le(["install-item", g(x, z)])
            }, [
              e("span", Ed, [
                g(x, z) === "pending" ? (s(), o("span", Md, "○")) : g(x, z) === "installing" ? (s(), o("span", Td, "◌")) : g(x, z) === "complete" ? (s(), o("span", zd, "✓")) : g(x, z) === "failed" ? (s(), o("span", Rd, "✗")) : d("", !0)
              ]),
              e("code", null, a(x), 1),
              f(x) ? (s(), o("span", Ld, a(f(x)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Pd, [
          e("div", Dd, [
            e("span", {
              class: le(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", Nd, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Ud, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Od, [
              r[4] || (r[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Bd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Fd, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Ad, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Vd, [
              (s(!0), o(V, null, ee(i.value, (x) => (s(), o("div", {
                key: x.node_id,
                class: "failed-item"
              }, [
                e("code", Wd, a(x.node_id), 1),
                e("span", jd, a(x.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = (x) => u.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            h.value ? d("", !0) : (s(), o("div", Gd, [...r[6] || (r[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            r[8] || (r[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", qd, [
              r[7] || (r[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: r[1] || (r[1] = (x) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Hd, [
          r[9] || (r[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Kd, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), Yd = /* @__PURE__ */ Q(Jd, [["__scopeId", "data-v-5efaae58"]]), Xd = {
  key: 0,
  class: "loading-state"
}, Qd = {
  key: 1,
  class: "wizard-content"
}, Zd = {
  key: 0,
  class: "step-content"
}, ec = { class: "analysis-summary" }, tc = { class: "analysis-header" }, sc = { class: "summary-description" }, oc = { class: "stats-grid" }, nc = { class: "stat-card" }, ac = { class: "stat-items" }, lc = {
  key: 0,
  class: "stat-item success"
}, ic = { class: "stat-count" }, rc = {
  key: 1,
  class: "stat-item info"
}, dc = { class: "stat-count" }, cc = {
  key: 2,
  class: "stat-item warning"
}, uc = { class: "stat-count" }, mc = {
  key: 3,
  class: "stat-item error"
}, vc = { class: "stat-count" }, fc = { class: "stat-card" }, gc = { class: "stat-items" }, pc = { class: "stat-item success" }, hc = { class: "stat-count" }, yc = {
  key: 0,
  class: "stat-item info"
}, wc = { class: "stat-count" }, kc = {
  key: 1,
  class: "stat-item warning"
}, bc = { class: "stat-count" }, _c = {
  key: 2,
  class: "stat-item warning"
}, $c = { class: "stat-count" }, Cc = {
  key: 3,
  class: "stat-item error"
}, xc = { class: "stat-count" }, Sc = {
  key: 0,
  class: "status-message warning"
}, Ic = { class: "status-text" }, Ec = {
  key: 1,
  class: "status-message info"
}, Mc = { class: "status-text" }, Tc = {
  key: 2,
  class: "status-message info"
}, zc = { class: "status-text" }, Rc = {
  key: 3,
  class: "status-message warning"
}, Lc = { class: "status-text" }, Pc = {
  key: 4,
  class: "status-message success"
}, Dc = {
  key: 5,
  class: "category-mismatch-section"
}, Nc = { class: "mismatch-list" }, Uc = { class: "mismatch-path" }, Oc = { class: "mismatch-target" }, Bc = {
  key: 3,
  class: "step-content"
}, Fc = { class: "review-summary" }, Ac = { class: "review-stats" }, Vc = { class: "review-stat" }, Wc = { class: "stat-value" }, jc = { class: "review-stat" }, Gc = { class: "stat-value" }, qc = { class: "review-stat" }, Hc = { class: "stat-value" }, Kc = { class: "review-stat" }, Jc = { class: "stat-value" }, Yc = {
  key: 0,
  class: "review-section"
}, Xc = { class: "section-title" }, Qc = { class: "review-items" }, Zc = { class: "item-name" }, eu = { class: "item-choice" }, tu = {
  key: 0,
  class: "choice-badge install"
}, su = {
  key: 1,
  class: "choice-badge skip"
}, ou = {
  key: 1,
  class: "review-section"
}, nu = { class: "section-title" }, au = { class: "review-items" }, lu = { class: "item-name" }, iu = { class: "item-choice" }, ru = {
  key: 0,
  class: "choice-badge install"
}, du = {
  key: 1,
  class: "choice-badge optional"
}, cu = {
  key: 2,
  class: "choice-badge skip"
}, uu = {
  key: 1,
  class: "choice-badge pending"
}, mu = {
  key: 2,
  class: "review-section"
}, vu = { class: "section-title" }, fu = { class: "review-items" }, gu = { class: "item-name" }, pu = { class: "item-choice" }, hu = {
  key: 0,
  class: "choice-badge install"
}, yu = {
  key: 1,
  class: "choice-badge download"
}, wu = {
  key: 2,
  class: "choice-badge optional"
}, ku = {
  key: 3,
  class: "choice-badge skip"
}, bu = {
  key: 4,
  class: "choice-badge skip"
}, _u = {
  key: 1,
  class: "choice-badge download"
}, $u = {
  key: 2,
  class: "choice-badge pending"
}, Cu = {
  key: 3,
  class: "no-choices"
}, xu = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: h, applyResolution: g, installNodes: f, queueModelDownloads: u, progress: r, resetProgress: v } = zs(), { loadPendingDownloads: p } = Gt(), { openFileLocation: w } = Oe(), b = C(null), x = C(!1), z = C(!1), N = C(null), m = C("analysis"), _ = C([]), L = C(/* @__PURE__ */ new Map()), I = C(/* @__PURE__ */ new Map()), $ = C(/* @__PURE__ */ new Set()), j = P(() => {
      const J = [
        { id: "analysis", label: "Analysis" }
      ];
      return (K.value || E.value) && J.push({ id: "nodes", label: "Nodes" }), (D.value || S.value) && J.push({ id: "models", label: "Models" }), J.push({ id: "review", label: "Review" }), m.value === "applying" && J.push({ id: "applying", label: "Applying" }), J;
    }), W = P(() => b.value ? b.value.stats.needs_user_input : !1), K = P(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), D = P(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), S = P(() => b.value ? b.value.stats.download_intents > 0 : !1), E = P(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), U = P(() => b.value ? b.value.nodes.resolved.length : 0), B = P(() => b.value ? b.value.models.resolved.filter((J) => J.has_category_mismatch) : []), ne = P(() => B.value.length > 0), we = P(() => {
      if (!b.value) return [];
      const J = b.value.nodes.resolved.filter((A) => !A.is_installed), O = /* @__PURE__ */ new Set();
      return J.filter((A) => O.has(A.package.package_id) ? !1 : (O.add(A.package.package_id), !0));
    }), me = P(() => {
      if (!b.value) return [];
      const J = b.value.nodes.resolved.filter((A) => !A.is_installed), O = /* @__PURE__ */ new Map();
      for (const A of J) {
        const Y = O.get(A.package.package_id);
        Y ? Y.node_types_count++ : O.set(A.package.package_id, {
          package_id: A.package.package_id,
          title: A.package.title,
          node_types_count: 1
        });
      }
      return Array.from(O.values());
    }), se = P(() => we.value.filter((J) => !$.value.has(J.package.package_id))), F = P(() => b.value ? b.value.models.resolved.filter((J) => J.match_type === "download_intent").map((J) => ({
      filename: J.reference.widget_value,
      reference: J.reference,
      is_download_intent: !0,
      resolved_model: J.model,
      download_source: J.download_source,
      target_path: J.target_path
    })) : []), M = P(() => {
      if (!b.value) return [];
      const J = b.value.nodes.unresolved.map((A) => ({
        node_type: A.reference.node_type,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), O = b.value.nodes.ambiguous.map((A) => ({
        node_type: A.reference.node_type,
        has_multiple_options: !0,
        options: A.options.map((Y) => ({
          package_id: Y.package.package_id,
          title: Y.package.title,
          match_confidence: Y.match_confidence,
          match_type: Y.match_type,
          is_installed: Y.is_installed
        }))
      }));
      return [...J, ...O];
    }), ie = P(() => {
      if (!b.value) return [];
      const J = b.value.models.unresolved.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), O = b.value.models.ambiguous.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        has_multiple_options: !0,
        options: A.options.map((Y) => ({
          model: Y.model,
          match_confidence: Y.match_confidence,
          match_type: Y.match_type,
          has_download_source: Y.has_download_source
        }))
      }));
      return [...J, ...O];
    }), te = P(() => {
      const J = ie.value, O = F.value.map((A) => ({
        filename: A.filename,
        reference: A.reference,
        is_download_intent: !0,
        resolved_model: A.resolved_model,
        download_source: A.download_source,
        target_path: A.target_path,
        options: void 0
      }));
      return [...J, ...O];
    }), Ee = P(() => {
      let J = se.value.length;
      for (const O of L.value.values())
        O.action === "install" && J++;
      for (const O of I.value.values())
        O.action === "select" && J++;
      return J;
    }), be = P(() => {
      let J = 0;
      for (const O of I.value.values())
        O.action === "download" && J++;
      return J;
    }), ae = P(() => {
      let J = 0;
      for (const O of L.value.values())
        O.action === "optional" && J++;
      for (const O of I.value.values())
        O.action === "optional" && J++;
      return J;
    }), oe = P(() => {
      let J = $.value.size;
      for (const O of L.value.values())
        O.action === "skip" && J++;
      for (const O of I.value.values())
        O.action === "skip" && J++;
      for (const O of M.value)
        L.value.has(O.node_type) || J++;
      for (const O of ie.value)
        I.value.has(O.filename) || J++;
      return J;
    }), re = P(() => {
      const J = {};
      if (J.analysis = { resolved: 1, total: 1 }, K.value) {
        const O = M.value.length, A = M.value.filter(
          (Y) => L.value.has(Y.node_type)
        ).length;
        J.nodes = { resolved: A, total: O };
      }
      if (D.value || S.value) {
        const O = te.value.length, A = te.value.filter(
          (Y) => I.value.has(Y.filename) || Y.is_download_intent
        ).length;
        J.models = { resolved: A, total: O };
      }
      if (J.review = { resolved: 1, total: 1 }, m.value === "applying") {
        const O = r.totalFiles || 1, A = r.completedFiles.length;
        J.applying = { resolved: A, total: O };
      }
      return J;
    });
    function ve(J) {
      m.value = J;
    }
    function ze() {
      const J = j.value.findIndex((O) => O.id === m.value);
      J > 0 && (m.value = j.value[J - 1].id);
    }
    function pe() {
      const J = j.value.findIndex((O) => O.id === m.value);
      J < j.value.length - 1 && (m.value = j.value[J + 1].id);
    }
    async function fe() {
      x.value = !0, N.value = null;
      try {
        b.value = await h(n.workflowName);
      } catch (J) {
        N.value = J instanceof Error ? J.message : "Failed to analyze workflow";
      } finally {
        x.value = !1;
      }
    }
    function H() {
      _.value.includes("analysis") || _.value.push("analysis"), K.value || E.value ? m.value = "nodes" : D.value || S.value ? m.value = "models" : m.value = "review";
    }
    function Ie(J) {
      L.value.set(J, { action: "optional" });
    }
    function xe(J) {
      L.value.set(J, { action: "skip" });
    }
    function Me(J, O) {
      var Y;
      const A = M.value.find((ye) => ye.node_type === J);
      (Y = A == null ? void 0 : A.options) != null && Y[O] && L.value.set(J, {
        action: "install",
        package_id: A.options[O].package_id
      });
    }
    function ce(J, O) {
      L.value.set(J, {
        action: "install",
        package_id: O
      });
    }
    function Je(J) {
      L.value.delete(J);
    }
    function et(J) {
      $.value.has(J) ? $.value.delete(J) : $.value.add(J);
    }
    function Ye(J) {
      I.value.set(J, { action: "optional" });
    }
    function bt(J) {
      I.value.set(J, { action: "skip" });
    }
    function ke(J, O) {
      var Y;
      const A = ie.value.find((ye) => ye.filename === J);
      (Y = A == null ? void 0 : A.options) != null && Y[O] && I.value.set(J, {
        action: "select",
        selected_model: A.options[O].model
      });
    }
    function Ae(J, O, A) {
      I.value.set(J, {
        action: "download",
        url: O,
        target_path: A
      });
    }
    function _t(J) {
      I.value.delete(J);
    }
    async function ut(J) {
      try {
        await w(J);
      } catch (O) {
        N.value = O instanceof Error ? O.message : "Failed to open file location";
      }
    }
    async function Pe() {
      var J;
      z.value = !0, N.value = null, v(), r.phase = "resolving", m.value = "applying";
      try {
        const O = await g(n.workflowName, L.value, I.value, $.value);
        O.models_to_download && O.models_to_download.length > 0 && u(n.workflowName, O.models_to_download);
        const A = [
          ...O.nodes_to_install || [],
          ...se.value.map((ye) => ye.package.package_id)
        ];
        r.nodesToInstall = [...new Set(A)], r.nodesToInstall.length > 0 && await f(n.workflowName), r.phase = "complete", await p();
        const Y = r.installError || ((J = r.nodeInstallProgress) == null ? void 0 : J.completedNodes.some((ye) => !ye.success));
        !r.needsRestart && !Y && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (O) {
        N.value = O instanceof Error ? O.message : "Failed to apply resolution", r.error = N.value, r.phase = "error";
      } finally {
        z.value = !1;
      }
    }
    function $t() {
      i("refresh"), i("restart"), i("close");
    }
    async function lt() {
      var O;
      const J = ((O = r.nodeInstallProgress) == null ? void 0 : O.completedNodes.filter((A) => !A.success).map((A) => A.node_id)) || [];
      if (J.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: J.length
        }, r.nodesToInstall = J, r.nodesInstalled = [], r.installError = void 0;
        try {
          await f(n.workflowName), r.phase = "complete";
        } catch (A) {
          r.error = A instanceof Error ? A.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Ue(fe), (J, O) => (s(), T(Ke, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: x.value,
      error: N.value || void 0,
      "fixed-height": !0,
      onClose: O[1] || (O[1] = (A) => i("close"))
    }, {
      body: l(() => [
        x.value && !b.value ? (s(), o("div", Xd, [...O[2] || (O[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", Qd, [
          k(ai, {
            steps: j.value,
            "current-step": m.value,
            "completed-steps": _.value,
            "step-stats": re.value,
            onStepChange: ve
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          m.value === "analysis" ? (s(), o("div", Zd, [
            e("div", ec, [
              e("div", tc, [
                O[3] || (O[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", sc, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", oc, [
                e("div", nc, [
                  O[12] || (O[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", ac, [
                    U.value > 0 ? (s(), o("div", lc, [
                      O[4] || (O[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", ic, a(U.value), 1),
                      O[5] || (O[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", rc, [
                      O[6] || (O[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", dc, a(b.value.stats.packages_needing_installation), 1),
                      O[7] || (O[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", cc, [
                      O[8] || (O[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", uc, a(b.value.nodes.ambiguous.length), 1),
                      O[9] || (O[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", mc, [
                      O[10] || (O[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", vc, a(b.value.nodes.unresolved.length), 1),
                      O[11] || (O[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", fc, [
                  O[23] || (O[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", gc, [
                    e("div", pc, [
                      O[13] || (O[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", hc, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      O[14] || (O[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", yc, [
                      O[15] || (O[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", wc, a(b.value.stats.download_intents), 1),
                      O[16] || (O[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    ne.value ? (s(), o("div", kc, [
                      O[17] || (O[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", bc, a(B.value.length), 1),
                      O[18] || (O[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", _c, [
                      O[19] || (O[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", $c, a(b.value.models.ambiguous.length), 1),
                      O[20] || (O[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", Cc, [
                      O[21] || (O[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", xc, a(b.value.models.unresolved.length), 1),
                      O[22] || (O[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              W.value ? (s(), o("div", Sc, [
                O[24] || (O[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Ic, a(M.value.length + ie.value.length) + " items need your input", 1)
              ])) : E.value ? (s(), o("div", Ec, [
                O[25] || (O[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Mc, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(S.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : S.value ? (s(), o("div", Tc, [
                O[26] || (O[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", zc, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : ne.value ? (s(), o("div", Rc, [
                O[27] || (O[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Lc, a(B.value.length) + " model" + a(B.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Pc, [...O[28] || (O[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ne.value ? (s(), o("div", Dc, [
                O[31] || (O[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Nc, [
                  (s(!0), o(V, null, ee(B.value, (A) => {
                    var Y, ye;
                    return s(), o("div", {
                      key: A.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Uc, a(A.actual_category) + "/" + a((Y = A.model) == null ? void 0 : Y.filename), 1),
                      O[30] || (O[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Oc, a((ye = A.expected_categories) == null ? void 0 : ye[0]) + "/", 1),
                      A.file_path ? (s(), T(ue, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (it) => ut(A.file_path)
                      }, {
                        default: l(() => [...O[29] || (O[29] = [
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
          m.value === "nodes" ? (s(), T(Sr, {
            key: 1,
            nodes: M.value,
            "node-choices": L.value,
            "auto-resolved-packages": me.value,
            "skipped-packages": $.value,
            onMarkOptional: Ie,
            onSkip: xe,
            onOptionSelected: Me,
            onManualEntry: ce,
            onClearChoice: Je,
            onPackageSkip: et
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          m.value === "models" ? (s(), T(wd, {
            key: 2,
            models: te.value,
            "model-choices": I.value,
            onMarkOptional: Ye,
            onSkip: bt,
            onOptionSelected: ke,
            onDownloadUrl: Ae,
            onClearChoice: _t
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          m.value === "review" ? (s(), o("div", Bc, [
            e("div", Fc, [
              O[36] || (O[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Ac, [
                e("div", Vc, [
                  e("span", Wc, a(Ee.value), 1),
                  O[32] || (O[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", jc, [
                  e("span", Gc, a(be.value), 1),
                  O[33] || (O[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", qc, [
                  e("span", Hc, a(ae.value), 1),
                  O[34] || (O[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Kc, [
                  e("span", Jc, a(oe.value), 1),
                  O[35] || (O[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              me.value.length > 0 ? (s(), o("div", Yc, [
                e("h4", Xc, "Node Packages (" + a(me.value.length) + ")", 1),
                e("div", Qc, [
                  (s(!0), o(V, null, ee(me.value, (A) => (s(), o("div", {
                    key: A.package_id,
                    class: "review-item"
                  }, [
                    e("code", Zc, a(A.package_id), 1),
                    e("div", eu, [
                      $.value.has(A.package_id) ? (s(), o("span", su, "Skipped")) : (s(), o("span", tu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              M.value.length > 0 ? (s(), o("div", ou, [
                e("h4", nu, "Node Choices (" + a(M.value.length) + ")", 1),
                e("div", au, [
                  (s(!0), o(V, null, ee(M.value, (A) => {
                    var Y, ye, it, mt;
                    return s(), o("div", {
                      key: A.node_type,
                      class: "review-item"
                    }, [
                      e("code", lu, a(A.node_type), 1),
                      e("div", iu, [
                        L.value.has(A.node_type) ? (s(), o(V, { key: 0 }, [
                          ((Y = L.value.get(A.node_type)) == null ? void 0 : Y.action) === "install" ? (s(), o("span", ru, a((ye = L.value.get(A.node_type)) == null ? void 0 : ye.package_id), 1)) : ((it = L.value.get(A.node_type)) == null ? void 0 : it.action) === "optional" ? (s(), o("span", du, " Optional ")) : ((mt = L.value.get(A.node_type)) == null ? void 0 : mt.action) === "skip" ? (s(), o("span", cu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", uu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              te.value.length > 0 ? (s(), o("div", mu, [
                e("h4", vu, "Models (" + a(te.value.length) + ")", 1),
                e("div", fu, [
                  (s(!0), o(V, null, ee(te.value, (A) => {
                    var Y, ye, it, mt, tt, xt, vt;
                    return s(), o("div", {
                      key: A.filename,
                      class: "review-item"
                    }, [
                      e("code", gu, a(A.filename), 1),
                      e("div", pu, [
                        I.value.has(A.filename) ? (s(), o(V, { key: 0 }, [
                          ((Y = I.value.get(A.filename)) == null ? void 0 : Y.action) === "select" ? (s(), o("span", hu, a((it = (ye = I.value.get(A.filename)) == null ? void 0 : ye.selected_model) == null ? void 0 : it.filename), 1)) : ((mt = I.value.get(A.filename)) == null ? void 0 : mt.action) === "download" ? (s(), o("span", yu, " Download ")) : ((tt = I.value.get(A.filename)) == null ? void 0 : tt.action) === "optional" ? (s(), o("span", wu, " Optional ")) : ((xt = I.value.get(A.filename)) == null ? void 0 : xt.action) === "skip" ? (s(), o("span", ku, " Skip ")) : ((vt = I.value.get(A.filename)) == null ? void 0 : vt.action) === "cancel_download" ? (s(), o("span", bu, " Cancel Download ")) : d("", !0)
                        ], 64)) : A.is_download_intent ? (s(), o("span", _u, " Pending Download ")) : (s(), o("span", $u, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              we.value.length === 0 && M.value.length === 0 && te.value.length === 0 ? (s(), o("div", Cu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          m.value === "applying" ? (s(), T(Yd, {
            key: 4,
            progress: $e(r),
            onRestart: $t,
            onRetryFailed: lt
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        m.value !== "analysis" && m.value !== "applying" ? (s(), T(ue, {
          key: 0,
          variant: "secondary",
          disabled: z.value,
          onClick: ze
        }, {
          default: l(() => [...O[37] || (O[37] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        O[41] || (O[41] = e("div", { class: "footer-spacer" }, null, -1)),
        m.value !== "applying" || $e(r).phase === "complete" || $e(r).phase === "error" ? (s(), T(ue, {
          key: 1,
          variant: "secondary",
          onClick: O[0] || (O[0] = (A) => i("close"))
        }, {
          default: l(() => [
            y(a($e(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        m.value === "analysis" ? (s(), T(ue, {
          key: 2,
          variant: "primary",
          disabled: x.value,
          onClick: H
        }, {
          default: l(() => [...O[38] || (O[38] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        m.value === "nodes" ? (s(), T(ue, {
          key: 3,
          variant: "primary",
          onClick: pe
        }, {
          default: l(() => [
            y(a(D.value || S.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        m.value === "models" ? (s(), T(ue, {
          key: 4,
          variant: "primary",
          onClick: pe
        }, {
          default: l(() => [...O[39] || (O[39] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        m.value === "review" ? (s(), T(ue, {
          key: 5,
          variant: "primary",
          disabled: z.value,
          loading: z.value,
          onClick: Pe
        }, {
          default: l(() => [...O[40] || (O[40] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Su = /* @__PURE__ */ Q(xu, [["__scopeId", "data-v-6276cf1d"]]), Iu = { class: "search-input-wrapper" }, Eu = ["value", "placeholder"], Mu = /* @__PURE__ */ X({
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
    const n = t, i = c, h = C(null);
    let g;
    function f(r) {
      const v = r.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        i("update:modelValue", v);
      }, n.debounce)) : i("update:modelValue", v);
    }
    function u() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = h.value) == null || r.focus();
    }
    return Ue(() => {
      n.autoFocus && h.value && h.value.focus();
    }), (r, v) => (s(), o("div", Iu, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: gt(u, ["escape"])
      }, null, 40, Eu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Tu = /* @__PURE__ */ Q(Mu, [["__scopeId", "data-v-266f857a"]]), zu = { class: "search-bar" }, Ru = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", zu, [
      k(Tu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Rt = /* @__PURE__ */ Q(Ru, [["__scopeId", "data-v-3d51bbfd"]]), Lu = { class: "section-group" }, Pu = {
  key: 0,
  class: "section-content"
}, Du = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = C(n.initiallyExpanded);
    function g() {
      n.collapsible && (h.value = !h.value, i("toggle", h.value));
    }
    return (f, u) => (s(), o("section", Lu, [
      k(Ze, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: g
      }, {
        default: l(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (s(), o("div", Pu, [
        Ce(f.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ Q(Du, [["__scopeId", "data-v-c48e33ed"]]), Nu = { class: "item-header" }, Uu = {
  key: 0,
  class: "item-icon"
}, Ou = { class: "item-info" }, Bu = {
  key: 0,
  class: "item-title"
}, Fu = {
  key: 1,
  class: "item-subtitle"
}, Au = {
  key: 0,
  class: "item-details"
}, Vu = {
  key: 1,
  class: "item-actions"
}, Wu = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = P(() => n.status ? `status-${n.status}` : "");
    return (h, g) => (s(), o("div", {
      class: le(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (f) => t.clickable && h.$emit("click"))
    }, [
      e("div", Nu, [
        h.$slots.icon ? (s(), o("span", Uu, [
          Ce(h.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Ou, [
          h.$slots.title ? (s(), o("div", Bu, [
            Ce(h.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          h.$slots.subtitle ? (s(), o("div", Fu, [
            Ce(h.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      h.$slots.details ? (s(), o("div", Au, [
        Ce(h.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      h.$slots.actions ? (s(), o("div", Vu, [
        Ce(h.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ Q(Wu, [["__scopeId", "data-v-cc435e0e"]]), ju = { class: "loading-state" }, Gu = { class: "loading-message" }, qu = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", ju, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Gu, a(t.message), 1)
    ]));
  }
}), ht = /* @__PURE__ */ Q(qu, [["__scopeId", "data-v-ad8436c9"]]), Hu = { class: "error-state" }, Ku = { class: "error-message" }, Ju = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", Hu, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Ku, a(t.message), 1),
      t.retry ? (s(), T(Z, {
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
}), yt = /* @__PURE__ */ Q(Ju, [["__scopeId", "data-v-5397be48"]]), Yu = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: h } = Oe();
    Ms();
    const g = C([]), f = C(!1), u = C(null), r = C(""), v = C(!0), p = C(!1), w = C(!1), b = C(!1), x = C(null), z = P(
      () => g.value.filter((se) => se.status === "broken")
    ), N = P(
      () => g.value.filter((se) => se.status === "new")
    ), m = P(
      () => g.value.filter((se) => se.status === "modified")
    ), _ = P(
      () => g.value.filter((se) => se.status === "synced")
    ), L = P(() => {
      if (!r.value.trim()) return g.value;
      const se = r.value.toLowerCase();
      return g.value.filter((F) => F.name.toLowerCase().includes(se));
    }), I = P(
      () => z.value.filter(
        (se) => !r.value.trim() || se.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), $ = P(
      () => N.value.filter(
        (se) => !r.value.trim() || se.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), j = P(
      () => m.value.filter(
        (se) => !r.value.trim() || se.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), W = P(
      () => _.value.filter(
        (se) => !r.value.trim() || se.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), K = P(
      () => p.value ? W.value : W.value.slice(0, 5)
    );
    async function D(se = !1) {
      f.value = !0, u.value = null;
      try {
        g.value = await h(se);
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load workflows";
      } finally {
        f.value = !1;
      }
    }
    c({ loadWorkflows: D });
    function S(se) {
      x.value = se, w.value = !0;
    }
    function E(se) {
      x.value = se, b.value = !0;
    }
    function U() {
      alert("Bulk resolution not yet implemented");
    }
    function B() {
      i("refresh");
    }
    async function ne() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function we(se) {
      const F = [];
      return se.missing_nodes > 0 && F.push(`${se.missing_nodes} missing node${se.missing_nodes > 1 ? "s" : ""}`), se.missing_models > 0 && F.push(`${se.missing_models} missing model${se.missing_models > 1 ? "s" : ""}`), se.models_with_category_mismatch && se.models_with_category_mismatch > 0 && F.push(`${se.models_with_category_mismatch} model${se.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), se.pending_downloads && se.pending_downloads > 0 && F.push(`${se.pending_downloads} pending download${se.pending_downloads > 1 ? "s" : ""}`), F.length > 0 ? F.join(", ") : "Has issues";
    }
    function me(se) {
      const F = se.sync_state === "new" ? "New" : se.sync_state === "modified" ? "Modified" : se.sync_state === "synced" ? "Synced" : se.sync_state;
      return se.has_path_sync_issues && se.models_needing_path_sync && se.models_needing_path_sync > 0 ? `${se.models_needing_path_sync} model path${se.models_needing_path_sync > 1 ? "s" : ""} need${se.models_needing_path_sync === 1 ? "s" : ""} sync` : F || "Unknown";
    }
    return Ue(D), (se, F) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, { title: "WORKFLOWS" }, {
            actions: l(() => [
              z.value.length > 0 ? (s(), T(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: l(() => [...F[8] || (F[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(Rt, {
            modelValue: r.value,
            "onUpdate:modelValue": F[0] || (F[0] = (M) => r.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          f.value ? (s(), T(ht, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (s(), T(yt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            I.value.length ? (s(), T(Be, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(I.value, (M) => (s(), T(He, {
                  key: M.name,
                  status: "broken"
                }, {
                  icon: l(() => [...F[9] || (F[9] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(we(M)), 1)
                  ]),
                  actions: l(() => [
                    k(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => E(M.name)
                    }, {
                      default: l(() => [...F[10] || (F[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => S(M.name)
                    }, {
                      default: l(() => [...F[11] || (F[11] = [
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
            $.value.length ? (s(), T(Be, {
              key: 1,
              title: "NEW",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee($.value, (M) => (s(), T(He, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    y(a(M.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    y(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(me(M)), 1)
                  ]),
                  actions: l(() => [
                    k(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => S(M.name)
                    }, {
                      default: l(() => [...F[12] || (F[12] = [
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
            j.value.length ? (s(), T(Be, {
              key: 2,
              title: "MODIFIED",
              count: j.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(j.value, (M) => (s(), T(He, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...F[13] || (F[13] = [
                    y("⚡", -1)
                  ])]),
                  title: l(() => [
                    y(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(me(M)), 1)
                  ]),
                  actions: l(() => [
                    k(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => S(M.name)
                    }, {
                      default: l(() => [...F[14] || (F[14] = [
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
            W.value.length ? (s(), T(Be, {
              key: 3,
              title: "SYNCED",
              count: W.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: F[2] || (F[2] = (M) => v.value = M)
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(K.value, (M) => (s(), T(He, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    y(a(M.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    y(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(me(M)), 1)
                  ]),
                  actions: l(() => [
                    k(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => S(M.name)
                    }, {
                      default: l(() => [...F[15] || (F[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && W.value.length > 5 ? (s(), T(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: F[1] || (F[1] = (M) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    y(" View all " + a(W.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            L.value.length ? d("", !0) : (s(), T(at, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w.value && x.value ? (s(), T(Hl, {
        key: 0,
        "workflow-name": x.value,
        onClose: F[3] || (F[3] = (M) => w.value = !1),
        onResolve: F[4] || (F[4] = (M) => E(x.value)),
        onRefresh: F[5] || (F[5] = (M) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && x.value ? (s(), T(Su, {
        key: 1,
        "workflow-name": x.value,
        onClose: F[6] || (F[6] = (M) => b.value = !1),
        onInstall: B,
        onRefresh: F[7] || (F[7] = (M) => i("refresh")),
        onRestart: ne
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Xu = /* @__PURE__ */ Q(Yu, [["__scopeId", "data-v-591d06d5"]]), Qu = /* @__PURE__ */ X({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: le(["summary-bar", t.variant])
    }, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ Q(Qu, [["__scopeId", "data-v-ccb7816e"]]), Zu = {
  key: 0,
  class: "model-details"
}, em = { class: "detail-section" }, tm = { class: "detail-row" }, sm = { class: "detail-value mono" }, om = { class: "detail-row" }, nm = { class: "detail-value mono" }, am = { class: "detail-row" }, lm = { class: "detail-value mono" }, im = { class: "detail-row" }, rm = { class: "detail-value" }, dm = { class: "detail-row" }, cm = { class: "detail-value" }, um = { class: "detail-row" }, mm = { class: "detail-value" }, vm = { class: "detail-section" }, fm = { class: "section-header" }, gm = {
  key: 0,
  class: "locations-list"
}, pm = { class: "location-path mono" }, hm = {
  key: 0,
  class: "location-modified"
}, ym = ["onClick"], wm = {
  key: 1,
  class: "empty-state"
}, km = { class: "detail-section" }, bm = { class: "section-header" }, _m = {
  key: 0,
  class: "sources-list"
}, $m = { class: "source-type" }, Cm = ["href"], xm = ["disabled", "onClick"], Sm = {
  key: 1,
  class: "empty-state"
}, Im = { class: "add-source-form" }, Em = ["disabled"], Mm = {
  key: 2,
  class: "source-error"
}, Tm = {
  key: 3,
  class: "source-success"
}, zm = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: h, removeModelSource: g, openFileLocation: f } = Oe(), u = C(null), r = C(!0), v = C(null), p = C(""), w = C(!1), b = C(null), x = C(null), z = C(null), N = C(null);
    let m = null;
    function _(D, S = "success", E = 2e3) {
      m && clearTimeout(m), N.value = { message: D, type: S }, m = setTimeout(() => {
        N.value = null;
      }, E);
    }
    function L(D) {
      if (!D) return "Unknown";
      const S = 1024 * 1024 * 1024, E = 1024 * 1024;
      return D >= S ? `${(D / S).toFixed(1)} GB` : D >= E ? `${(D / E).toFixed(0)} MB` : `${(D / 1024).toFixed(0)} KB`;
    }
    function I(D) {
      navigator.clipboard.writeText(D), _("Copied to clipboard!");
    }
    async function $(D) {
      try {
        await f(D), _("Opening file location...");
      } catch {
        _("Failed to open location", "error");
      }
    }
    async function j() {
      if (!(!p.value.trim() || !u.value)) {
        w.value = !0, x.value = null, z.value = null;
        try {
          await h(u.value.hash, p.value.trim()), z.value = "Source added successfully!", p.value = "", await K();
        } catch (D) {
          x.value = D instanceof Error ? D.message : "Failed to add source";
        } finally {
          w.value = !1;
        }
      }
    }
    async function W(D) {
      if (u.value) {
        b.value = D, x.value = null, z.value = null;
        try {
          await g(u.value.hash, D), _("Source removed"), await K();
        } catch (S) {
          x.value = S instanceof Error ? S.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function K() {
      r.value = !0, v.value = null;
      try {
        u.value = await i(n.identifier);
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Ue(K), (D, S) => {
      var E;
      return s(), o(V, null, [
        k(Ke, {
          title: `Model Details: ${((E = u.value) == null ? void 0 : E.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: v.value,
          onClose: S[5] || (S[5] = (U) => D.$emit("close"))
        }, {
          body: l(() => {
            var U, B, ne, we;
            return [
              u.value ? (s(), o("div", Zu, [
                e("section", em, [
                  e("div", tm, [
                    S[6] || (S[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", sm, a(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[0] || (S[0] = (me) => I(u.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", om, [
                    S[7] || (S[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", nm, a(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[1] || (S[1] = (me) => I(u.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", am, [
                    S[8] || (S[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", lm, a(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[2] || (S[2] = (me) => I(u.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", im, [
                    S[9] || (S[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", rm, a(L(u.value.size)), 1)
                  ]),
                  e("div", dm, [
                    S[10] || (S[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", cm, a(u.value.category), 1)
                  ]),
                  e("div", um, [
                    S[11] || (S[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", mm, a(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", vm, [
                  e("h4", fm, "Locations (" + a(((U = u.value.locations) == null ? void 0 : U.length) || 0) + ")", 1),
                  (B = u.value.locations) != null && B.length ? (s(), o("div", gm, [
                    (s(!0), o(V, null, ee(u.value.locations, (me, se) => (s(), o("div", {
                      key: se,
                      class: "location-item"
                    }, [
                      e("span", pm, a(me.path), 1),
                      me.modified ? (s(), o("span", hm, "Modified: " + a(me.modified), 1)) : d("", !0),
                      me.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (F) => $(me.path)
                      }, " Open File Location ", 8, ym)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", wm, "No locations found"))
                ]),
                e("section", km, [
                  e("h4", bm, "Download Sources (" + a(((ne = u.value.sources) == null ? void 0 : ne.length) || 0) + ")", 1),
                  (we = u.value.sources) != null && we.length ? (s(), o("div", _m, [
                    (s(!0), o(V, null, ee(u.value.sources, (me, se) => (s(), o("div", {
                      key: se,
                      class: "source-item"
                    }, [
                      e("span", $m, a(me.type) + ":", 1),
                      e("a", {
                        href: me.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(me.url), 9, Cm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === me.url,
                        onClick: (F) => W(me.url)
                      }, a(b.value === me.url ? "..." : "×"), 9, xm)
                    ]))), 128))
                  ])) : (s(), o("div", Sm, " No download sources configured ")),
                  e("div", Im, [
                    Ne(e("input", {
                      "onUpdate:modelValue": S[3] || (S[3] = (me) => p.value = me),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Mt, p.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !p.value.trim() || w.value,
                      onClick: j
                    }, a(w.value ? "Adding..." : "Add Source"), 9, Em)
                  ]),
                  x.value ? (s(), o("p", Mm, a(x.value), 1)) : d("", !0),
                  z.value ? (s(), o("p", Tm, a(z.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: S[4] || (S[4] = (U) => D.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), T(Fe, { to: "body" }, [
          N.value ? (s(), o("div", {
            key: 0,
            class: le(["toast", N.value.type])
          }, a(N.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), vs = /* @__PURE__ */ Q(zm, [["__scopeId", "data-v-f15cbb56"]]), Rm = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: h } = Oe(), g = C([]), f = C([]), u = C("production"), r = C(!1), v = C(null), p = C(""), w = C(!1), b = C(null);
    function x() {
      w.value = !1, n("navigate", "model-index");
    }
    const z = P(
      () => g.value.reduce((K, D) => K + (D.size || 0), 0)
    ), N = P(() => {
      if (!p.value.trim()) return g.value;
      const K = p.value.toLowerCase();
      return g.value.filter((D) => D.filename.toLowerCase().includes(K));
    }), m = P(() => {
      if (!p.value.trim()) return f.value;
      const K = p.value.toLowerCase();
      return f.value.filter((D) => D.filename.toLowerCase().includes(K));
    }), _ = P(() => {
      const K = {};
      for (const S of N.value) {
        const E = S.type || "other";
        K[E] || (K[E] = []), K[E].push(S);
      }
      const D = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(K).sort(([S], [E]) => {
        const U = D.indexOf(S), B = D.indexOf(E);
        return U >= 0 && B >= 0 ? U - B : U >= 0 ? -1 : B >= 0 ? 1 : S.localeCompare(E);
      }).map(([S, E]) => ({ type: S, models: E }));
    });
    function L(K) {
      if (!K) return "Unknown";
      const D = K / (1024 * 1024);
      return D >= 1024 ? `${(D / 1024).toFixed(1)} GB` : `${D.toFixed(0)} MB`;
    }
    function I(K) {
      b.value = K.hash || K.filename;
    }
    function $(K) {
      n("navigate", "model-index");
    }
    function j(K) {
      alert(`Download functionality not yet implemented for ${K}`);
    }
    async function W() {
      r.value = !0, v.value = null;
      try {
        const K = await i();
        g.value = K, f.value = [];
        const D = await h();
        u.value = D.environment || "production";
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Ue(W), (K, D) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (S) => w.value = !0)
          })
        ]),
        search: l(() => [
          k(Rt, {
            modelValue: p.value,
            "onUpdate:modelValue": D[1] || (D[1] = (S) => p.value = S),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), T(ht, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), T(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), T(Lt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(g.value.length) + " models • " + a(L(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, ee(_.value, (S) => (s(), T(Be, {
              key: S.type,
              title: S.type.toUpperCase(),
              count: S.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(S.models, (E) => (s(), T(He, {
                  key: E.hash || E.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...D[4] || (D[4] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(E.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(L(E.size)), 1)
                  ]),
                  details: l(() => [
                    k(De, {
                      label: "Used by:",
                      value: (E.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(De, {
                      label: "Path:",
                      value: E.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => I(E)
                    }, {
                      default: l(() => [...D[5] || (D[5] = [
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
            m.value.length ? (s(), T(Be, {
              key: 1,
              title: "MISSING",
              count: m.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(m.value, (S) => (s(), T(He, {
                  key: S.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...D[6] || (D[6] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(S.filename), 1)
                  ]),
                  subtitle: l(() => [...D[7] || (D[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var E;
                    return [
                      k(De, {
                        label: "Required by:",
                        value: ((E = S.workflow_names) == null ? void 0 : E.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    k(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (E) => j(S.filename)
                    }, {
                      default: l(() => [...D[8] || (D[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => $(S.filename)
                    }, {
                      default: l(() => [...D[9] || (D[9] = [
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
            !N.value.length && !m.value.length ? (s(), T(at, {
              key: 2,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: w.value,
        title: "About Environment Models",
        onClose: D[2] || (D[2] = (S) => w.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            D[10] || (D[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(u.value) + '"', 1),
            D[11] || (D[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          k(Z, {
            variant: "primary",
            onClick: x
          }, {
            default: l(() => [...D[12] || (D[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), T(vs, {
        key: 0,
        identifier: b.value,
        onClose: D[3] || (D[3] = (S) => b.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Lm = /* @__PURE__ */ Q(Rm, [["__scopeId", "data-v-cb4f12b3"]]), Pm = {
  key: 0,
  class: "indexing-progress"
}, Dm = { class: "progress-info" }, Nm = { class: "progress-label" }, Um = { class: "progress-count" }, Om = { class: "progress-bar" }, Bm = { class: "modal-content" }, Fm = { class: "modal-header" }, Am = { class: "modal-body" }, Vm = { class: "input-group" }, Wm = { class: "current-path" }, jm = { class: "input-group" }, Gm = { class: "modal-footer" }, qm = { class: "modal-content" }, Hm = { class: "modal-header" }, Km = { class: "modal-body" }, Jm = { class: "input-group" }, Ym = { class: "input-group" }, Xm = { class: "modal-footer" }, Qm = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: h,
      setModelsDirectory: g
    } = Oe(), { addToQueue: f } = Gt(), u = c, r = C([]), v = C(!1), p = C(!1), w = C(null), b = C(""), x = C(!1), z = C(null), N = C(!1), m = C(null), _ = C(""), L = C(!1), I = C(!1), $ = C(""), j = C(""), W = C(null), K = P(
      () => r.value.reduce((F, M) => F + (M.size || 0), 0)
    ), D = P(() => {
      if (!b.value.trim()) return r.value;
      const F = b.value.toLowerCase();
      return r.value.filter((M) => {
        const ie = M, te = M.sha256 || ie.sha256_hash || "";
        return M.filename.toLowerCase().includes(F) || te.toLowerCase().includes(F);
      });
    }), S = P(() => {
      const F = {};
      for (const ie of D.value) {
        const te = ie.type || "other";
        F[te] || (F[te] = []), F[te].push(ie);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(F).sort(([ie], [te]) => {
        const Ee = M.indexOf(ie), be = M.indexOf(te);
        return Ee >= 0 && be >= 0 ? Ee - be : Ee >= 0 ? -1 : be >= 0 ? 1 : ie.localeCompare(te);
      }).map(([ie, te]) => ({ type: ie, models: te }));
    });
    function E(F) {
      if (!F) return "Unknown";
      const M = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return F >= M ? `${(F / M).toFixed(1)} GB` : F >= ie ? `${(F / ie).toFixed(0)} MB` : `${(F / 1024).toFixed(0)} KB`;
    }
    function U(F) {
      z.value = F.hash || F.filename;
    }
    async function B() {
      p.value = !0, w.value = null;
      try {
        const F = await i();
        await me(), F.changes > 0 && console.log(`Scan complete: ${F.changes} changes detected`);
      } catch (F) {
        w.value = F instanceof Error ? F.message : "Failed to scan models";
      } finally {
        p.value = !1;
      }
    }
    async function ne() {
      if (_.value.trim()) {
        L.value = !0, w.value = null;
        try {
          const F = await g(_.value.trim());
          m.value = F.path, N.value = !1, _.value = "", await me(), console.log(`Directory changed: ${F.models_indexed} models indexed`), u("refresh");
        } catch (F) {
          w.value = F instanceof Error ? F.message : "Failed to change directory";
        } finally {
          L.value = !1;
        }
      }
    }
    function we() {
      if (!$.value.trim() || !j.value.trim()) return;
      const F = j.value.split("/").pop() || "model.safetensors";
      f([{
        workflow: "__manual__",
        filename: F,
        url: $.value.trim(),
        targetPath: j.value.trim()
      }]), $.value = "", j.value = "", I.value = !1;
    }
    async function me() {
      v.value = !0, w.value = null;
      try {
        r.value = await n();
      } catch (F) {
        w.value = F instanceof Error ? F.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function se() {
      try {
        const F = await h();
        m.value = F.path;
      } catch {
      }
    }
    return Ue(() => {
      me(), se();
    }), (F, M) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: M[2] || (M[2] = (ie) => x.value = !0)
          }, {
            actions: l(() => [
              k(Z, {
                variant: "primary",
                size: "sm",
                disabled: p.value,
                onClick: B
              }, {
                default: l(() => [
                  y(a(p.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(Z, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (ie) => N.value = !0)
              }, {
                default: l(() => [...M[15] || (M[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(Z, {
                variant: "primary",
                size: "sm",
                onClick: M[1] || (M[1] = (ie) => I.value = !0)
              }, {
                default: l(() => [...M[16] || (M[16] = [
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
          W.value ? (s(), o("div", Pm, [
            e("div", Dm, [
              e("span", Nm, a(W.value.message), 1),
              e("span", Um, a(W.value.current) + "/" + a(W.value.total), 1)
            ]),
            e("div", Om, [
              e("div", {
                class: "progress-fill",
                style: pt({ width: `${W.value.current / W.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          k(Rt, {
            modelValue: b.value,
            "onUpdate:modelValue": M[3] || (M[3] = (ie) => b.value = ie),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || W.value ? (s(), T(ht, {
            key: 0,
            message: W.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : w.value ? (s(), T(yt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: me
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            r.value.length ? (s(), T(Lt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(r.value.length) + " models • " + a(E(K.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, ee(S.value, (ie) => (s(), T(Be, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(ie.models, (te) => (s(), T(He, {
                  key: te.sha256 || te.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...M[17] || (M[17] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(te.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(E(te.size)), 1)
                  ]),
                  details: l(() => [
                    k(De, {
                      label: "Hash:",
                      value: te.hash ? te.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ee) => U(te)
                    }, {
                      default: l(() => [...M[18] || (M[18] = [
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
            D.value.length ? d("", !0) : (s(), T(at, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: x.value,
        title: "About Workspace Model Index",
        onClose: M[4] || (M[4] = (ie) => x.value = !1)
      }, {
        content: l(() => [...M[19] || (M[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      z.value ? (s(), T(vs, {
        key: 0,
        identifier: z.value,
        onClose: M[5] || (M[5] = (ie) => z.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), T(Fe, { to: "body" }, [
        N.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[9] || (M[9] = Le((ie) => N.value = !1, ["self"]))
        }, [
          e("div", Bm, [
            e("div", Fm, [
              M[20] || (M[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[6] || (M[6] = (ie) => N.value = !1)
              }, "✕")
            ]),
            e("div", Am, [
              e("div", Vm, [
                M[21] || (M[21] = e("label", null, "Current Directory", -1)),
                e("code", Wm, a(m.value || "Not set"), 1)
              ]),
              e("div", jm, [
                M[22] || (M[22] = e("label", null, "New Directory Path", -1)),
                k(nt, {
                  modelValue: _.value,
                  "onUpdate:modelValue": M[7] || (M[7] = (ie) => _.value = ie),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              M[23] || (M[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Gm, [
              k(ue, {
                variant: "secondary",
                onClick: M[8] || (M[8] = (ie) => N.value = !1)
              }, {
                default: l(() => [...M[24] || (M[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ue, {
                variant: "primary",
                disabled: !_.value.trim() || L.value,
                loading: L.value,
                onClick: ne
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
      (s(), T(Fe, { to: "body" }, [
        I.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[14] || (M[14] = Le((ie) => I.value = !1, ["self"]))
        }, [
          e("div", qm, [
            e("div", Hm, [
              M[25] || (M[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[10] || (M[10] = (ie) => I.value = !1)
              }, "✕")
            ]),
            e("div", Km, [
              e("div", Jm, [
                M[26] || (M[26] = e("label", null, "Download URL", -1)),
                k(nt, {
                  modelValue: $.value,
                  "onUpdate:modelValue": M[11] || (M[11] = (ie) => $.value = ie),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Ym, [
                M[27] || (M[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(nt, {
                  modelValue: j.value,
                  "onUpdate:modelValue": M[12] || (M[12] = (ie) => j.value = ie),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              M[28] || (M[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Xm, [
              k(ue, {
                variant: "secondary",
                onClick: M[13] || (M[13] = (ie) => I.value = !1)
              }, {
                default: l(() => [...M[29] || (M[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ue, {
                variant: "primary",
                disabled: !$.value.trim() || !j.value.trim(),
                onClick: we
              }, {
                default: l(() => [...M[30] || (M[30] = [
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
}), Zm = /* @__PURE__ */ Q(Qm, [["__scopeId", "data-v-73b78d84"]]), ev = { class: "node-details" }, tv = { class: "status-row" }, sv = {
  key: 0,
  class: "detail-row"
}, ov = { class: "value" }, nv = { class: "detail-row" }, av = { class: "value" }, lv = {
  key: 1,
  class: "detail-row"
}, iv = { class: "value mono" }, rv = {
  key: 2,
  class: "detail-row"
}, dv = ["href"], cv = {
  key: 3,
  class: "detail-row"
}, uv = { class: "value mono small" }, mv = { class: "detail-row" }, vv = {
  key: 0,
  class: "value"
}, fv = {
  key: 1,
  class: "workflow-list"
}, gv = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), f = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (u, r) => (s(), T(Ke, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (v) => i("close"))
    }, {
      body: l(() => [
        e("div", ev, [
          e("div", tv, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", h.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", sv, [
            r[3] || (r[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", ov, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", nv, [
            r[4] || (r[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", av, a(f.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", lv, [
            r[5] || (r[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", iv, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", rv, [
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
            ], 8, dv)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", cv, [
            r[8] || (r[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", uv, a(t.node.download_url), 1)
          ])) : d("", !0),
          r[10] || (r[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", mv, [
            r[9] || (r[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", vv, " Not used in any workflows ")) : (s(), o("div", fv, [
              (s(!0), o(V, null, ee(t.node.used_in_workflows, (v) => (s(), o("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        k(ue, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (v) => i("close"))
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
}), pv = /* @__PURE__ */ Q(gv, [["__scopeId", "data-v-b342f626"]]), hv = { key: 0 }, yv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, wv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, kv = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: i, trackNodeAsDev: h, installNode: g, uninstallNode: f } = Oe(), u = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), r = C(!1), v = C(null), p = C(""), w = C(!1), b = C(null), x = P(() => {
      if (!p.value.trim()) return u.value.nodes;
      const S = p.value.toLowerCase();
      return u.value.nodes.filter(
        (E) => {
          var U, B;
          return E.name.toLowerCase().includes(S) || ((U = E.description) == null ? void 0 : U.toLowerCase().includes(S)) || ((B = E.repository) == null ? void 0 : B.toLowerCase().includes(S));
        }
      );
    }), z = P(
      () => x.value.filter((S) => S.installed && S.tracked)
    ), N = P(
      () => x.value.filter((S) => !S.installed && S.tracked)
    ), m = P(
      () => x.value.filter((S) => S.installed && !S.tracked)
    );
    function _(S) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[S] || S;
    }
    function L(S) {
      return !S.used_in_workflows || S.used_in_workflows.length === 0 ? "Not used in any workflows" : S.used_in_workflows.length === 1 ? S.used_in_workflows[0] : `${S.used_in_workflows.length} workflows`;
    }
    function I(S) {
      b.value = S;
    }
    function $() {
      n("open-node-manager");
    }
    async function j(S) {
      if (confirm(`Track "${S}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          r.value = !0;
          const E = await h(S);
          E.status === "success" ? (alert(`Node "${S}" is now tracked as development!`), await D()) : alert(`Failed to track node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error tracking node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
    }
    async function W(S) {
      if (confirm(`Remove untracked node "${S}"?

This will delete the node directory from custom_nodes/.`))
        try {
          r.value = !0;
          const E = await f(S);
          E.status === "success" ? (alert(`Node "${S}" removed!`), await D()) : alert(`Failed to remove node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error removing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
    }
    async function K(S) {
      if (confirm(`Install node "${S}"?

This will download and install the node.`))
        try {
          r.value = !0;
          const E = await g(S);
          E.status === "success" ? (alert(`Node "${S}" installed successfully!`), await D()) : alert(`Failed to install node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error installing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
    }
    async function D() {
      r.value = !0, v.value = null;
      try {
        u.value = await i();
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to load nodes";
      } finally {
        r.value = !1;
      }
    }
    return Ue(D), (S, E) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (U) => w.value = !0)
          }, {
            actions: l(() => [
              k(Z, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: l(() => [...E[5] || (E[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(Rt, {
            modelValue: p.value,
            "onUpdate:modelValue": E[1] || (E[1] = (U) => p.value = U),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), T(ht, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (s(), T(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            u.value.total_count ? (s(), T(Lt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(a(u.value.installed_count) + " installed ", 1),
                u.value.missing_count ? (s(), o(V, { key: 0 }, [
                  y(" • " + a(u.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                u.value.untracked_count ? (s(), o(V, { key: 1 }, [
                  y(" • " + a(u.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            m.value.length ? (s(), T(Be, {
              key: 1,
              title: "UNTRACKED",
              count: m.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(m.value, (U) => (s(), T(He, {
                  key: U.name,
                  status: "warning"
                }, {
                  icon: l(() => [...E[6] || (E[6] = [
                    y("?", -1)
                  ])]),
                  title: l(() => [
                    y(a(U.name), 1)
                  ]),
                  subtitle: l(() => [...E[7] || (E[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    k(De, {
                      label: "Used by:",
                      value: L(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => I(U)
                    }, {
                      default: l(() => [...E[8] || (E[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => j(U.name)
                    }, {
                      default: l(() => [...E[9] || (E[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (B) => W(U.name)
                    }, {
                      default: l(() => [...E[10] || (E[10] = [
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
            z.value.length ? (s(), T(Be, {
              key: 2,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(z.value, (U) => (s(), T(He, {
                  key: U.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    y(a(U.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    y(a(U.name), 1)
                  ]),
                  subtitle: l(() => [
                    U.version ? (s(), o("span", hv, a(U.source === "development" ? "" : "v") + a(U.version), 1)) : (s(), o("span", yv, "version unknown")),
                    e("span", wv, " • " + a(_(U.source)), 1)
                  ]),
                  details: l(() => [
                    k(De, {
                      label: "Used by:",
                      value: L(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => I(U)
                    }, {
                      default: l(() => [...E[11] || (E[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: $
                    }, {
                      default: l(() => [...E[12] || (E[12] = [
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
            N.value.length ? (s(), T(Be, {
              key: 3,
              title: "MISSING",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(N.value, (U) => (s(), T(He, {
                  key: U.name,
                  status: "missing"
                }, {
                  icon: l(() => [...E[13] || (E[13] = [
                    y("!", -1)
                  ])]),
                  title: l(() => [
                    y(a(U.name), 1)
                  ]),
                  subtitle: l(() => [...E[14] || (E[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    k(De, {
                      label: "Required by:",
                      value: L(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => I(U)
                    }, {
                      default: l(() => [...E[15] || (E[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => K(U.name)
                    }, {
                      default: l(() => [...E[16] || (E[16] = [
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
            !z.value.length && !N.value.length && !m.value.length ? (s(), T(at, {
              key: 4,
              icon: "📭",
              message: p.value ? `No nodes match '${p.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: E[3] || (E[3] = (U) => w.value = !1)
      }, {
        content: l(() => [...E[17] || (E[17] = [
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
          k(Z, {
            variant: "primary",
            onClick: E[2] || (E[2] = (U) => w.value = !1)
          }, {
            default: l(() => [...E[18] || (E[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), T(pv, {
        key: 0,
        node: b.value,
        onClose: E[4] || (E[4] = (U) => b.value = null)
      }, null, 8, ["node"])) : d("", !0)
    ], 64));
  }
}), bv = /* @__PURE__ */ Q(kv, [["__scopeId", "data-v-4ac1465a"]]);
function Ls(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const _v = { class: "remote-url-display" }, $v = ["title"], Cv = ["title"], xv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Sv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Iv = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = C(!1), i = P(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), f = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${f}`;
    });
    async function h() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, f) => (s(), o("div", _v, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, $v),
      e("button", {
        class: le(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Sv, [...f[1] || (f[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", xv, [...f[0] || (f[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Cv)
    ]));
  }
}), Ev = /* @__PURE__ */ Q(Iv, [["__scopeId", "data-v-7768a58d"]]), Mv = { class: "remote-title" }, Tv = {
  key: 0,
  class: "default-badge"
}, zv = {
  key: 1,
  class: "sync-badge"
}, Rv = {
  key: 0,
  class: "ahead"
}, Lv = {
  key: 1,
  class: "behind"
}, Pv = {
  key: 1,
  class: "synced"
}, Dv = ["href"], Nv = {
  key: 1,
  class: "remote-url-text"
}, Uv = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = P(() => c.fetchingRemote === c.remote.name), i = P(() => c.remote.is_default), h = P(() => c.syncStatus && c.syncStatus.behind > 0), g = P(() => c.syncStatus && c.syncStatus.ahead > 0), f = P(() => c.remote.push_url !== c.remote.fetch_url), u = P(() => {
      const v = c.remote.fetch_url, p = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), r = P(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, p) => (s(), T(He, {
      status: i.value ? "synced" : void 0
    }, jt({
      icon: l(() => [
        y(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Mv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Tv, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", zv, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(V, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Rv, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Lv, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", Pv, "✓ synced"))
          ])) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        u.value ? (s(), o("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: p[0] || (p[0] = Le(() => {
          }, ["stop"]))
        }, a(r.value), 9, Dv)) : (s(), o("span", Nv, a(r.value), 1))
      ]),
      actions: l(() => [
        k(Z, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: p[1] || (p[1] = (w) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...p[6] || (p[6] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(Z, {
          variant: h.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[2] || (p[2] = (w) => v.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(Z, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[3] || (p[3] = (w) => v.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(Z, {
          variant: "secondary",
          size: "xs",
          onClick: p[4] || (p[4] = (w) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...p[7] || (p[7] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (s(), T(Z, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: p[5] || (p[5] = (w) => v.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...p[8] || (p[8] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      f.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), T(De, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              k(Ev, {
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
}), Ov = /* @__PURE__ */ Q(Uv, [["__scopeId", "data-v-8310f3a8"]]), Bv = ["for"], Fv = {
  key: 0,
  class: "base-form-field-required"
}, Av = { class: "base-form-field-input" }, Vv = {
  key: 1,
  class: "base-form-field-error"
}, Wv = {
  key: 2,
  class: "base-form-field-hint"
}, jv = /* @__PURE__ */ X({
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
    const c = t, n = P(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, h) => (s(), o("div", {
      class: le(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Fv, "*")) : d("", !0)
      ], 8, Bv)) : d("", !0),
      e("div", Av, [
        Ce(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Vv, a(t.error), 1)) : t.hint ? (s(), o("span", Wv, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ Q(jv, [["__scopeId", "data-v-9a1cf296"]]), Gv = { class: "remote-form" }, qv = { class: "form-header" }, Hv = { class: "form-body" }, Kv = {
  key: 0,
  class: "form-error"
}, Jv = { class: "form-actions" }, Yv = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = C({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = C(!1), f = C(null);
    kt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const u = P(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!u.value || g.value)) {
        f.value = null, g.value = !0;
        try {
          i("submit", h.value);
        } catch (v) {
          f.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (v, p) => (s(), o("div", Gv, [
      e("div", qv, [
        k(Ze, null, {
          default: l(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Hv, [
        k(ns, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            k(nt, {
              modelValue: h.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (w) => h.value.name = w),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(ns, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            k(nt, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (w) => h.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(ns, { label: "Push URL (optional)" }, {
          default: l(() => [
            k(nt, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (w) => h.value.pushUrl = w),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f.value ? (s(), o("div", Kv, a(f.value), 1)) : d("", !0)
      ]),
      e("div", Jv, [
        k(Z, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: g.value,
          onClick: r
        }, {
          default: l(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(Z, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (w) => v.$emit("cancel"))
        }, {
          default: l(() => [...p[4] || (p[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Xv = /* @__PURE__ */ Q(Yv, [["__scopeId", "data-v-56021b18"]]), Qv = { class: "conflict-summary-box" }, Zv = { class: "summary-header" }, ef = { class: "summary-text" }, tf = { key: 0 }, sf = {
  key: 1,
  class: "all-resolved"
}, of = { class: "summary-progress" }, nf = { class: "progress-bar" }, af = { class: "progress-text" }, lf = /* @__PURE__ */ X({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = P(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, h) => (s(), o("div", Qv, [
      e("div", Zv, [
        h[0] || (h[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", ef, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", tf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", sf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", of, [
        e("div", nf, [
          e("div", {
            class: "progress-fill",
            style: pt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", af, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), rf = /* @__PURE__ */ Q(lf, [["__scopeId", "data-v-4e9e6cc9"]]), df = { class: "modal-header" }, cf = { class: "modal-title" }, uf = { class: "modal-body" }, mf = {
  key: 0,
  class: "error-box"
}, vf = {
  key: 0,
  class: "error-hint"
}, ff = {
  key: 1,
  class: "loading-state"
}, gf = { class: "commit-summary" }, pf = {
  key: 0,
  class: "changes-section"
}, hf = {
  key: 0,
  class: "change-group",
  open: ""
}, yf = { class: "change-count" }, wf = { class: "change-list" }, kf = {
  key: 0,
  class: "conflict-badge"
}, bf = {
  key: 1,
  class: "change-group"
}, _f = { class: "change-count" }, $f = { class: "change-list" }, Cf = {
  key: 2,
  class: "change-group"
}, xf = { class: "change-count" }, Sf = { class: "change-list" }, If = {
  key: 2,
  class: "strategy-section"
}, Ef = { class: "radio-group" }, Mf = { class: "radio-option" }, Tf = { class: "radio-option" }, zf = { class: "radio-option" }, Rf = {
  key: 3,
  class: "up-to-date"
}, Lf = { class: "modal-actions" }, bs = "comfygit.pullModelStrategy", Pf = /* @__PURE__ */ X({
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
    const n = t, i = c, h = C(localStorage.getItem(bs) || "skip");
    kt(h, (m) => {
      localStorage.setItem(bs, m);
    });
    const g = P(() => {
      var m;
      return ((m = n.error) == null ? void 0 : m.toLowerCase().includes("unrelated histories")) ?? !1;
    }), f = P(() => {
      if (!n.preview) return 0;
      const m = n.preview.changes.workflows;
      return m.added.length + m.modified.length + m.deleted.length;
    }), u = P(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = P(() => {
      var m;
      return f.value > 0 || u.value > 0 || (((m = n.preview) == null ? void 0 : m.changes.models.count) || 0) > 0;
    }), v = P(() => n.preview && Ls(n.preview) ? n.preview : null), p = P(() => {
      var m;
      return ((m = v.value) == null ? void 0 : m.workflow_conflicts.length) ?? 0;
    }), w = P(() => {
      var m;
      return ((m = n.conflictResolutions) == null ? void 0 : m.size) ?? 0;
    }), b = P(
      () => p.value > 0 && w.value === p.value
    ), x = P(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !b.value));
    function z(m) {
      if (!v.value) return !1;
      const _ = m.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((L) => L.name === _);
    }
    function N(m) {
      const _ = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: h.value, force: m, resolutions: _ });
    }
    return (m, _) => {
      var L, I;
      return s(), T(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[11] || (_[11] = ($) => m.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[10] || (_[10] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", df, [
              e("h3", cf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = ($) => m.$emit("close"))
              }, "✕")
            ]),
            e("div", uf, [
              t.error ? (s(), o("div", mf, [
                _[13] || (_[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  _[12] || (_[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", vf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", ff, [..._[14] || (_[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (L = t.preview) != null && L.has_uncommitted_changes ? (s(), o(V, { key: 2 }, [
                _[15] || (_[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                _[16] || (_[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", gf, [
                  _[17] || (_[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                r.value ? (s(), o("div", pf, [
                  _[21] || (_[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  f.value > 0 ? (s(), o("details", hf, [
                    e("summary", null, [
                      _[18] || (_[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", yf, a(f.value) + " changes", 1)
                    ]),
                    e("div", wf, [
                      (s(!0), o(V, null, ee(t.preview.changes.workflows.added, ($) => (s(), o("div", {
                        key: "a-" + $,
                        class: "change-item add"
                      }, " + " + a($), 1))), 128)),
                      (s(!0), o(V, null, ee(t.preview.changes.workflows.modified, ($) => (s(), o("div", {
                        key: "m-" + $,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a($) + " ", 1),
                        z($) ? (s(), o("span", kf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(V, null, ee(t.preview.changes.workflows.deleted, ($) => (s(), o("div", {
                        key: "d-" + $,
                        class: "change-item delete"
                      }, " - " + a($), 1))), 128))
                    ])
                  ])) : d("", !0),
                  u.value > 0 ? (s(), o("details", bf, [
                    e("summary", null, [
                      _[19] || (_[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", _f, a(u.value) + " to install", 1)
                    ]),
                    e("div", $f, [
                      (s(!0), o(V, null, ee(t.preview.changes.nodes.to_install, ($) => (s(), o("div", {
                        key: $,
                        class: "change-item add"
                      }, " + " + a($), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", Cf, [
                    e("summary", null, [
                      _[20] || (_[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", xf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Sf, [
                      (s(!0), o(V, null, ee(t.preview.changes.models.referenced, ($) => (s(), o("div", {
                        key: $,
                        class: "change-item"
                      }, a($), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                v.value ? (s(), T(rf, {
                  key: 1,
                  "conflict-count": p.value,
                  "resolved-count": w.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", If, [
                  _[26] || (_[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Ef, [
                    e("label", Mf, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[1] || (_[1] = ($) => h.value = $),
                        value: "all"
                      }, null, 512), [
                        [Jt, h.value]
                      ]),
                      _[22] || (_[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Tf, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[2] || (_[2] = ($) => h.value = $),
                        value: "required"
                      }, null, 512), [
                        [Jt, h.value]
                      ]),
                      _[23] || (_[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", zf, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[3] || (_[3] = ($) => h.value = $),
                        value: "skip"
                      }, null, 512), [
                        [Jt, h.value]
                      ]),
                      _[24] || (_[24] = e("span", null, "Skip model downloads", -1)),
                      _[25] || (_[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  _[27] || (_[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Rf, [
                  _[28] || (_[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Lf, [
              k(Z, {
                variant: "secondary",
                onClick: _[4] || (_[4] = ($) => m.$emit("close"))
              }, {
                default: l(() => [..._[29] || (_[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(V, { key: 0 }, [
                k(Z, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: _[5] || (_[5] = ($) => N(!1))
                }, {
                  default: l(() => [..._[30] || (_[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(Z, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: _[6] || (_[6] = ($) => N(!0))
                }, {
                  default: l(() => [..._[31] || (_[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = t.preview) != null && I.has_uncommitted_changes ? (s(), T(Z, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: _[7] || (_[7] = ($) => N(!0))
              }, {
                default: l(() => [..._[32] || (_[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(V, { key: 2 }, [
                v.value && !b.value ? (s(), T(Z, {
                  key: 0,
                  variant: "primary",
                  onClick: _[8] || (_[8] = ($) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    y(" Resolve Conflicts (" + a(w.value) + "/" + a(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), T(Z, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !x.value,
                  onClick: _[9] || (_[9] = ($) => N(!1))
                }, {
                  default: l(() => [..._[33] || (_[33] = [
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
}), Df = /* @__PURE__ */ Q(Pf, [["__scopeId", "data-v-300c7b2f"]]), Nf = { class: "modal-header" }, Uf = { class: "modal-title" }, Of = { class: "modal-body" }, Bf = {
  key: 0,
  class: "loading-state"
}, Ff = {
  key: 1,
  class: "warning-box"
}, Af = {
  key: 0,
  class: "commits-section"
}, Vf = { class: "commit-list" }, Wf = { class: "commit-hash" }, jf = { class: "commit-message" }, Gf = { class: "commit-date" }, qf = { class: "force-option" }, Hf = { class: "checkbox-option" }, Kf = { class: "commit-summary" }, Jf = {
  key: 0,
  class: "commits-section"
}, Yf = { class: "commit-list" }, Xf = { class: "commit-hash" }, Qf = { class: "commit-message" }, Zf = { class: "commit-date" }, eg = {
  key: 1,
  class: "up-to-date"
}, tg = { class: "modal-actions" }, sg = /* @__PURE__ */ X({
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
    const n = c, i = C(!1);
    function h(g) {
      n("push", { force: g });
    }
    return (g, f) => {
      var u, r, v;
      return s(), T(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (p) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: f[6] || (f[6] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", Nf, [
              e("h3", Uf, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: f[0] || (f[0] = (p) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Of, [
              t.loading ? (s(), o("div", Bf, [...f[8] || (f[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (u = t.preview) != null && u.has_uncommitted_changes ? (s(), o("div", Ff, [...f[9] || (f[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (r = t.preview) != null && r.remote_has_new_commits ? (s(), o(V, { key: 2 }, [
                f[13] || (f[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Af, [
                  f[10] || (f[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Vf, [
                    (s(!0), o(V, null, ee(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Wf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", jf, a(p.message), 1),
                      e("span", Gf, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", qf, [
                  e("label", Hf, [
                    Ne(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": f[1] || (f[1] = (p) => i.value = p)
                    }, null, 512), [
                      [Qt, i.value]
                    ]),
                    f[11] || (f[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  f[12] || (f[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", Kf, [
                  f[14] || (f[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Jf, [
                  f[15] || (f[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Yf, [
                    (s(!0), o(V, null, ee(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Xf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Qf, a(p.message), 1),
                      e("span", Zf, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", eg, [
                  f[16] || (f[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", tg, [
              k(Z, {
                variant: "secondary",
                onClick: f[2] || (f[2] = (p) => g.$emit("close"))
              }, {
                default: l(() => [...f[17] || (f[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(V, { key: 0 }, [
                k(Z, {
                  variant: "secondary",
                  onClick: f[3] || (f[3] = (p) => g.$emit("pull-first"))
                }, {
                  default: l(() => [...f[18] || (f[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(Z, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: f[4] || (f[4] = (p) => h(!0))
                }, {
                  default: l(() => [...f[19] || (f[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), T(Z, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: f[5] || (f[5] = (p) => h(!1))
              }, {
                default: l(() => [...f[20] || (f[20] = [
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
}), og = /* @__PURE__ */ Q(sg, [["__scopeId", "data-v-bc6ded53"]]), ng = { class: "resolution-choice-group" }, ag = ["disabled"], lg = ["disabled"], ig = /* @__PURE__ */ X({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", ng, [
      e("button", {
        class: le(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, ag),
      e("button", {
        class: le(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, lg)
    ]));
  }
}), rg = /* @__PURE__ */ Q(ig, [["__scopeId", "data-v-985715ed"]]), dg = { class: "conflict-header" }, cg = { class: "conflict-info" }, ug = { class: "workflow-name" }, mg = { class: "conflict-description" }, vg = {
  key: 0,
  class: "resolved-badge"
}, fg = { class: "resolved-text" }, gg = { class: "conflict-hashes" }, pg = { class: "hash-item" }, hg = { class: "hash-item" }, yg = { class: "conflict-actions" }, wg = /* @__PURE__ */ X({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = C(n.resolution);
    kt(() => n.resolution, (r) => {
      h.value = r;
    }), kt(h, (r) => {
      r && i("resolve", r);
    });
    const g = P(() => h.value !== null), f = P(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = P(() => {
      switch (h.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (r, v) => {
      var p, w;
      return s(), o("div", {
        class: le(["conflict-item", { resolved: g.value }])
      }, [
        e("div", dg, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", cg, [
            e("code", ug, a(t.conflict.name) + ".json", 1),
            e("div", mg, a(f.value), 1)
          ]),
          g.value ? (s(), o("div", vg, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", fg, a(u.value), 1)
          ])) : d("", !0)
        ]),
        e("div", gg, [
          e("span", pg, [
            v[3] || (v[3] = y("Your: ", -1)),
            e("code", null, a(((p = t.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", hg, [
            v[4] || (v[4] = y("Theirs: ", -1)),
            e("code", null, a(((w = t.conflict.target_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", yg, [
          k(rg, {
            modelValue: h.value,
            "onUpdate:modelValue": v[0] || (v[0] = (b) => h.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), kg = /* @__PURE__ */ Q(wg, [["__scopeId", "data-v-506d3bbf"]]), bg = { class: "resolution-content" }, _g = {
  key: 0,
  class: "error-box"
}, $g = { class: "resolution-header" }, Cg = { class: "header-stats" }, xg = { class: "stat" }, Sg = { class: "stat-value" }, Ig = { class: "stat resolved" }, Eg = { class: "stat-value" }, Mg = {
  key: 0,
  class: "stat pending"
}, Tg = { class: "stat-value" }, zg = { class: "conflicts-list" }, Rg = {
  key: 1,
  class: "all-resolved-message"
}, Lg = /* @__PURE__ */ X({
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
    const n = t, i = c, h = P(() => n.resolutions.size), g = P(() => n.workflowConflicts.length - h.value), f = P(() => h.value === n.workflowConflicts.length), u = P(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(b) {
      const x = n.resolutions.get(b);
      return (x == null ? void 0 : x.resolution) ?? null;
    }
    function v(b, x) {
      i("resolve", b, x);
    }
    function p() {
      i("close");
    }
    function w() {
      i("apply");
    }
    return (b, x) => (s(), T(Ke, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: l(() => [
        e("div", bg, [
          t.error ? (s(), o("div", _g, [
            x[1] || (x[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              x[0] || (x[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", $g, [
            e("div", Cg, [
              e("div", xg, [
                e("span", Sg, a(t.workflowConflicts.length), 1),
                x[2] || (x[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Ig, [
                e("span", Eg, a(h.value), 1),
                x[3] || (x[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", Mg, [
                e("span", Tg, a(g.value), 1),
                x[4] || (x[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            x[5] || (x[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", zg, [
            (s(!0), o(V, null, ee(t.workflowConflicts, (z) => (s(), T(kg, {
              key: z.name,
              conflict: z,
              resolution: r(z.name),
              onResolve: (N) => v(z.name, N)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          f.value ? (s(), o("div", Rg, [
            x[6] || (x[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(u.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ue, {
          variant: "secondary",
          onClick: p
        }, {
          default: l(() => [...x[7] || (x[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        x[8] || (x[8] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ue, {
          variant: "primary",
          disabled: !f.value || t.validating,
          loading: t.validating,
          onClick: w
        }, {
          default: l(() => [
            y(a(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Pg = /* @__PURE__ */ Q(Lg, [["__scopeId", "data-v-c58d150d"]]), Dg = { class: "node-conflict-item" }, Ng = { class: "node-header" }, Ug = { class: "node-name" }, Og = { class: "node-id" }, Bg = { class: "version-comparison" }, Fg = { class: "version yours" }, Ag = { class: "version theirs" }, Vg = { class: "chosen-version" }, Wg = { class: "chosen" }, jg = { class: "chosen-reason" }, Gg = { class: "affected-workflows" }, qg = { class: "wf-source" }, Hg = { class: "wf-version" }, Kg = /* @__PURE__ */ X({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Dg, [
      e("div", Ng, [
        e("code", Ug, a(t.conflict.node_name), 1),
        e("span", Og, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Bg, [
        e("div", Fg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Ag, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Vg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Wg, a(t.conflict.chosen_version), 1),
        e("span", jg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Gg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(V, null, ee(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", qg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Hg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Jg = /* @__PURE__ */ Q(Kg, [["__scopeId", "data-v-8b626725"]]), Yg = { class: "validation-content" }, Xg = {
  key: 0,
  class: "compatible-message"
}, Qg = { class: "conflicts-list" }, Zg = {
  key: 2,
  class: "warnings-section"
}, ep = /* @__PURE__ */ X({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = P(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, f) => (s(), T(Ke, {
      title: "Compatibility Check",
      size: "lg",
      onClose: f[3] || (f[3] = (u) => i("cancel"))
    }, {
      body: l(() => [
        e("div", Yg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Xg, [
            f[5] || (f[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              f[4] || (f[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(V, { key: 1 }, [
            f[6] || (f[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Qg, [
              (s(!0), o(V, null, ee(t.validation.node_conflicts, (u) => (s(), T(Jg, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            f[7] || (f[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Zg, [
            f[8] || (f[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(V, null, ee(t.validation.warnings, (u, r) => (s(), o("li", { key: r }, a(u), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ue, {
          variant: "secondary",
          onClick: f[0] || (f[0] = (u) => i("cancel"))
        }, {
          default: l(() => [...f[9] || (f[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f[11] || (f[11] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ue, {
          variant: "secondary",
          onClick: f[1] || (f[1] = (u) => i("goBack"))
        }, {
          default: l(() => [...f[10] || (f[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(ue, {
          variant: "primary",
          loading: t.executing,
          onClick: f[2] || (f[2] = (u) => i("proceed"))
        }, {
          default: l(() => [
            y(a(h.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), tp = /* @__PURE__ */ Q(ep, [["__scopeId", "data-v-fefd26ed"]]), sp = { key: 0 }, op = /* @__PURE__ */ X({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: h,
      removeRemote: g,
      updateRemoteUrl: f,
      fetchRemote: u,
      getRemoteSyncStatus: r,
      getPullPreview: v,
      pullFromRemote: p,
      getPushPreview: w,
      pushToRemote: b,
      validateMerge: x
    } = Oe(), z = C([]), N = C(null), m = C({}), _ = C(!1), L = C(null), I = C(""), $ = C(!1), j = C(null), W = C(!1), K = C("add"), D = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), S = P(() => {
      if (!I.value.trim()) return z.value;
      const A = I.value.toLowerCase();
      return z.value.filter(
        (Y) => Y.name.toLowerCase().includes(A) || Y.fetch_url.toLowerCase().includes(A) || Y.push_url.toLowerCase().includes(A)
      );
    });
    async function E() {
      _.value = !0, L.value = null;
      try {
        const A = await i();
        z.value = A.remotes, N.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (Y) => {
            const ye = await r(Y.name);
            ye && (m.value[Y.name] = ye);
          })
        );
      } catch (A) {
        L.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        _.value = !1;
      }
    }
    function U() {
      K.value = "add", D.value = { name: "", fetchUrl: "", pushUrl: "" }, W.value = !0;
    }
    function B(A) {
      const Y = z.value.find((ye) => ye.name === A);
      Y && (K.value = "edit", D.value = {
        name: Y.name,
        fetchUrl: Y.fetch_url,
        pushUrl: Y.push_url
      }, W.value = !0);
    }
    async function ne(A) {
      try {
        K.value === "add" ? await h(A.name, A.fetchUrl) : await f(A.name, A.fetchUrl, A.pushUrl || void 0), W.value = !1, await E();
      } catch (Y) {
        L.value = Y instanceof Error ? Y.message : "Operation failed";
      }
    }
    function we() {
      W.value = !1, D.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function me(A) {
      j.value = A;
      try {
        await u(A);
        const Y = await r(A);
        Y && (m.value[A] = Y), n("toast", `✓ Fetched from ${A}`, "success");
      } catch (Y) {
        n("toast", Y instanceof Error ? Y.message : "Fetch failed", "error");
      } finally {
        j.value = null;
      }
    }
    async function se(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await g(A), await E();
        } catch (Y) {
          L.value = Y instanceof Error ? Y.message : "Failed to remove remote";
        }
    }
    function F() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const M = C("idle"), ie = P(() => M.value === "pull_preview"), te = P(
      () => M.value === "resolving" || M.value === "validating"
    ), Ee = P(
      () => M.value === "validation_review" || M.value === "executing"
    ), be = C(!1), ae = C(null), oe = C(!1), re = C(null), ve = C(!1), ze = C(null), pe = C(null), fe = C(/* @__PURE__ */ new Map()), H = C(null), Ie = C(null), xe = P(() => ze.value && Ls(ze.value) ? ze.value : null);
    async function Me(A) {
      re.value = A, M.value = "pull_preview", ve.value = !0, ze.value = null, pe.value = null;
      try {
        ze.value = await v(A);
      } catch (Y) {
        pe.value = Y instanceof Error ? Y.message : "Failed to load pull preview";
      } finally {
        ve.value = !1;
      }
    }
    function ce() {
      M.value = "idle", ze.value = null, pe.value = null, re.value = null;
    }
    async function Je(A) {
      if (!re.value) return;
      M.value = "executing", pe.value = null;
      const Y = re.value;
      try {
        const ye = await p(Y, A);
        if (ye.rolled_back) {
          pe.value = `Pull failed and was rolled back: ${ye.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        Pe(), M.value = "idle", n("toast", `✓ Pulled from ${Y}`, "success"), await E();
      } catch (ye) {
        pe.value = ye instanceof Error ? ye.message : "Pull failed", M.value = "pull_preview";
      }
    }
    function et() {
      xe.value && (M.value = "resolving", Ie.value = null);
    }
    function Ye(A, Y) {
      fe.value.set(A, { name: A, resolution: Y });
    }
    function bt() {
      M.value = "pull_preview";
    }
    async function ke() {
      M.value = "validating", Ie.value = null;
      try {
        const A = Array.from(fe.value.values());
        H.value = await x(re.value, A), M.value = "validation_review";
      } catch (A) {
        Ie.value = A instanceof Error ? A.message : "Validation failed", M.value = "resolving";
      }
    }
    async function Ae() {
      M.value = "executing";
      const A = re.value;
      try {
        const Y = Array.from(fe.value.values()), ye = await p(A, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Y
        });
        if (ye.rolled_back) {
          pe.value = `Pull failed and was rolled back: ${ye.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        Pe(), M.value = "idle", n("toast", `✓ Pulled from ${A}`, "success"), await E();
      } catch (Y) {
        pe.value = Y instanceof Error ? Y.message : "Pull failed", M.value = "validation_review";
      }
    }
    function _t() {
      M.value = "resolving";
    }
    function ut() {
      Pe(), M.value = "idle";
    }
    function Pe() {
      fe.value.clear(), H.value = null, Ie.value = null, pe.value = null, ze.value = null, re.value = null;
    }
    async function $t(A) {
      re.value = A, be.value = !0, ve.value = !0, ae.value = null;
      try {
        ae.value = await w(A);
      } catch (Y) {
        L.value = Y instanceof Error ? Y.message : "Failed to load push preview";
      } finally {
        ve.value = !1;
      }
    }
    function lt() {
      be.value = !1, ae.value = null, re.value = null;
    }
    async function J(A) {
      if (!re.value) return;
      oe.value = !0;
      const Y = re.value;
      try {
        await b(Y, A), lt(), n("toast", `✓ Pushed to ${Y}`, "success"), await E();
      } catch (ye) {
        n("toast", ye instanceof Error ? ye.message : "Push failed", "error");
      } finally {
        oe.value = !1;
      }
    }
    function O() {
      const A = re.value;
      lt(), A && Me(A);
    }
    return Ue(E), (A, Y) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Y[0] || (Y[0] = (ye) => $.value = !0)
          }, {
            actions: l(() => [
              W.value ? d("", !0) : (s(), T(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: l(() => [...Y[3] || (Y[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          W.value ? d("", !0) : (s(), T(Rt, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (ye) => I.value = ye),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          _.value ? (s(), T(ht, {
            key: 0,
            message: "Loading remotes..."
          })) : L.value ? (s(), T(yt, {
            key: 1,
            message: L.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            W.value ? (s(), T(Xv, {
              key: 0,
              mode: K.value,
              "remote-name": D.value.name,
              "fetch-url": D.value.fetchUrl,
              "push-url": D.value.pushUrl,
              onSubmit: ne,
              onCancel: we
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            z.value.length && !W.value ? (s(), T(Lt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(z.value.length) + " remote" + a(z.value.length !== 1 ? "s" : "") + " ", 1),
                N.value ? (s(), o("span", sp, " • Tracking: " + a(N.value.remote) + "/" + a(N.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            S.value.length && !W.value ? (s(), T(Be, {
              key: 2,
              title: "REMOTES",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(S.value, (ye) => (s(), T(Ov, {
                  key: ye.name,
                  remote: ye,
                  "sync-status": m.value[ye.name],
                  "fetching-remote": j.value,
                  onFetch: me,
                  onEdit: B,
                  onRemove: se,
                  onPull: Me,
                  onPush: $t
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !S.value.length && !W.value ? (s(), T(at, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                k(Z, {
                  variant: "primary",
                  onClick: U
                }, {
                  default: l(() => [...Y[4] || (Y[4] = [
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
      k(ct, {
        show: $.value,
        title: "About Git Remotes",
        onClose: Y[2] || (Y[2] = (ye) => $.value = !1)
      }, {
        content: l(() => [...Y[5] || (Y[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          k(Z, {
            variant: "link",
            onClick: F
          }, {
            default: l(() => [...Y[6] || (Y[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(Df, {
        show: ie.value,
        "remote-name": re.value || "",
        preview: ze.value,
        loading: ve.value,
        pulling: M.value === "executing",
        error: pe.value,
        "conflict-resolutions": fe.value,
        onClose: ce,
        onPull: Je,
        onOpenConflictResolution: et
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(og, {
        show: be.value,
        "remote-name": re.value || "",
        preview: ae.value,
        loading: ve.value,
        pushing: oe.value,
        onClose: lt,
        onPush: J,
        onPullFirst: O
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      te.value && xe.value ? (s(), T(Pg, {
        key: 0,
        "workflow-conflicts": xe.value.workflow_conflicts,
        resolutions: fe.value,
        "operation-type": "pull",
        validating: M.value === "validating",
        error: Ie.value,
        onClose: bt,
        onResolve: Ye,
        onApply: ke
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Ee.value && H.value ? (s(), T(tp, {
        key: 1,
        validation: H.value,
        "operation-type": "pull",
        executing: M.value === "executing",
        onProceed: Ae,
        onGoBack: _t,
        onCancel: ut
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), np = /* @__PURE__ */ Q(op, [["__scopeId", "data-v-9ae3b76d"]]), ap = { class: "setting-info" }, lp = { class: "setting-label" }, ip = {
  key: 0,
  class: "required-marker"
}, rp = {
  key: 0,
  class: "setting-description"
}, dp = { class: "setting-control" }, cp = /* @__PURE__ */ X({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: le(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", ap, [
        e("div", lp, [
          y(a(t.label) + " ", 1),
          t.required ? (s(), o("span", ip, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", rp, a(t.description), 1)) : d("", !0)
      ]),
      e("div", dp, [
        Ce(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ut = /* @__PURE__ */ Q(cp, [["__scopeId", "data-v-cb5d236c"]]), up = { class: "toggle" }, mp = ["checked", "disabled"], vp = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", up, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, mp),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), as = /* @__PURE__ */ Q(vp, [["__scopeId", "data-v-71c0f550"]]), fp = { class: "settings-section" }, gp = { class: "path-setting" }, pp = { class: "path-value" }, hp = { class: "path-setting" }, yp = { class: "path-value" }, wp = { class: "settings-section" }, kp = { class: "settings-section" }, bp = { class: "settings-section" }, _p = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Oe(), i = C(!1), h = C(null), g = C(null), f = C(null), u = C(null), r = C(""), v = C(""), p = C(!0), w = C(!0), b = C(!1), x = P(() => u.value ? r.value !== (u.value.civitai_api_key || "") : !1);
    async function z() {
      i.value = !0, h.value = null;
      try {
        f.value = await c(), u.value = { ...f.value }, r.value = f.value.civitai_api_key || "", v.value = f.value.huggingface_token || "", p.value = f.value.auto_sync_models, w.value = f.value.confirm_destructive;
        const L = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        b.value = L === "true";
      } catch (L) {
        h.value = L instanceof Error ? L.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function N() {
      var L;
      g.value = null;
      try {
        const I = {};
        r.value !== (((L = u.value) == null ? void 0 : L.civitai_api_key) || "") && (I.civitai_api_key = r.value || null), await n(I), await z(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (I) {
        g.value = {
          type: "error",
          message: I instanceof Error ? I.message : "Failed to save settings"
        };
      }
    }
    function m() {
      u.value && (r.value = u.value.civitai_api_key || "", v.value = u.value.huggingface_token || "", p.value = u.value.auto_sync_models, w.value = u.value.confirm_destructive, g.value = null);
    }
    function _(L) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(L)), console.log("[ComfyGit] Auto-refresh setting saved:", L);
    }
    return Ue(z), (L, I) => (s(), T(je, null, {
      header: l(() => [
        k(Ge, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => [
            k(Z, {
              variant: "primary",
              size: "sm",
              disabled: !x.value,
              onClick: N
            }, {
              default: l(() => [...I[5] || (I[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            x.value ? (s(), T(Z, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: m
            }, {
              default: l(() => [...I[6] || (I[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), T(ht, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (s(), T(yt, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
          k(Be, { title: "WORKSPACE PATHS" }, {
            default: l(() => {
              var $, j;
              return [
                e("div", fp, [
                  e("div", gp, [
                    I[7] || (I[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    I[8] || (I[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", pp, a((($ = f.value) == null ? void 0 : $.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", hp, [
                    I[9] || (I[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    I[10] || (I[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", yp, a(((j = f.value) == null ? void 0 : j.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          k(Be, { title: "API CREDENTIALS" }, {
            default: l(() => [
              e("div", wp, [
                k(Ut, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: l(() => [
                    k(Zt, {
                      modelValue: r.value,
                      "onUpdate:modelValue": I[0] || (I[0] = ($) => r.value = $),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Ut, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(Zt, {
                      modelValue: v.value,
                      "onUpdate:modelValue": I[1] || (I[1] = ($) => v.value = $),
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
          k(Be, { title: "UI SETTINGS" }, {
            default: l(() => [
              e("div", kp, [
                k(Ut, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: l(() => [
                    k(as, {
                      modelValue: b.value,
                      "onUpdate:modelValue": [
                        I[2] || (I[2] = ($) => b.value = $),
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
          k(Be, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: l(() => [
              e("div", bp, [
                k(Ut, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(as, {
                      modelValue: p.value,
                      "onUpdate:modelValue": I[3] || (I[3] = ($) => p.value = $),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Ut, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(as, {
                      modelValue: w.value,
                      "onUpdate:modelValue": I[4] || (I[4] = ($) => w.value = $),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), T(Lt, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: l(() => [
              e("span", {
                style: pt({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), $p = /* @__PURE__ */ Q(_p, [["__scopeId", "data-v-7861bd35"]]), Cp = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = Oe(), h = C([]), g = C(!1), f = C(null), u = C(!1), r = C(null), v = C(null), p = C(!1), w = P(() => h.value.length === 0 ? [] : h.value.map((N) => ({
      text: `${N.timestamp} - ${N.name} - ${N.level} - ${N.func}:${N.line} - ${N.message}`,
      level: N.level
    })));
    async function b() {
      g.value = !0, f.value = null;
      try {
        h.value = await c(void 0, 500);
      } catch (N) {
        f.value = N instanceof Error ? N.message : "Failed to load workspace logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var N;
          (N = r.value) != null && N.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function x() {
      try {
        const N = await n();
        N.exists && (v.value = N.path);
      } catch {
      }
    }
    async function z() {
      if (v.value) {
        p.value = !0;
        try {
          await i(v.value);
        } catch (N) {
          console.error("Failed to open log file:", N);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ue(() => {
      b(), x();
    }), (N, m) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = (_) => u.value = !0)
          }, {
            actions: l(() => [
              k(Z, {
                variant: "secondary",
                size: "sm",
                onClick: z,
                disabled: !v.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  y(a(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(Z, {
                variant: "secondary",
                size: "sm",
                onClick: b,
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
          g.value ? (s(), T(ht, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (s(), T(yt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            h.value.length === 0 ? (s(), T(at, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(V, null, ee(w.value, (_, L) => (s(), o("div", {
                key: L,
                class: le(`log-line log-level-${_.level.toLowerCase()}`)
              }, a(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: u.value,
        title: "About Workspace Logs",
        onClose: m[2] || (m[2] = (_) => u.value = !1)
      }, {
        content: l(() => [...m[3] || (m[3] = [
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
          k(Z, {
            variant: "primary",
            onClick: m[1] || (m[1] = (_) => u.value = !1)
          }, {
            default: l(() => [...m[4] || (m[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), xp = /* @__PURE__ */ Q(Cp, [["__scopeId", "data-v-7f05352a"]]), Sp = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: h } = Oe(), g = C([]), f = C(!1), u = C(null), r = C(!1), v = C("production"), p = C(null), w = C(null), b = C(!1), x = P(() => g.value.length === 0 ? [] : g.value.map((_) => ({
      text: `${_.timestamp} - ${_.name} - ${_.level} - ${_.func}:${_.line} - ${_.message}`,
      level: _.level
    })));
    async function z() {
      f.value = !0, u.value = null;
      try {
        g.value = await c(void 0, 500);
        try {
          const _ = await n();
          v.value = _.environment || "production";
        } catch {
        }
      } catch (_) {
        u.value = _ instanceof Error ? _.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var _;
          (_ = p.value) != null && _.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function N() {
      try {
        const _ = await i();
        _.exists && (w.value = _.path);
      } catch {
      }
    }
    async function m() {
      if (w.value) {
        b.value = !0;
        try {
          await h(w.value);
        } catch (_) {
          console.error("Failed to open log file:", _);
        } finally {
          b.value = !1;
        }
      }
    }
    return Ue(() => {
      z(), N();
    }), (_, L) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (I) => r.value = !0)
          }, {
            actions: l(() => [
              k(Z, {
                variant: "secondary",
                size: "sm",
                onClick: m,
                disabled: !w.value || b.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  y(a(b.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(Z, {
                variant: "secondary",
                size: "sm",
                onClick: z,
                disabled: f.value
              }, {
                default: l(() => [
                  y(a(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          f.value ? (s(), T(ht, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (s(), T(yt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length === 0 ? (s(), T(at, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (s(!0), o(V, null, ee(x.value, (I, $) => (s(), o("div", {
                key: $,
                class: le(`log-line log-level-${I.level.toLowerCase()}`)
              }, a(I.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: r.value,
        title: "About Environment Logs",
        onClose: L[2] || (L[2] = (I) => r.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            L[3] || (L[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
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
          k(Z, {
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
}), Ip = /* @__PURE__ */ Q(Sp, [["__scopeId", "data-v-6f8db7ce"]]), Ep = { class: "env-title" }, Mp = {
  key: 0,
  class: "current-badge"
}, Tp = {
  key: 0,
  class: "branch-info"
}, zp = /* @__PURE__ */ X({
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
    return (c, n) => (s(), T(He, {
      status: t.isCurrent ? "synced" : void 0
    }, jt({
      icon: l(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", Ep, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Mp, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", Tp, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: l(() => [
        Ce(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          k(De, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          k(De, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          k(De, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), T(De, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Rp = /* @__PURE__ */ Q(zp, [["__scopeId", "data-v-9231917a"]]), Lp = { class: "env-details" }, Pp = { class: "status-row" }, Dp = {
  key: 0,
  class: "detail-row"
}, Np = { class: "value mono" }, Up = {
  key: 1,
  class: "detail-row"
}, Op = { class: "value mono small" }, Bp = { class: "detail-row" }, Fp = { class: "value" }, Ap = { class: "detail-row" }, Vp = { class: "value" }, Wp = { class: "detail-row" }, jp = { class: "value" }, Gp = {
  key: 2,
  class: "section-divider"
}, qp = {
  key: 3,
  class: "detail-row"
}, Hp = { class: "value" }, Kp = {
  key: 4,
  class: "detail-row"
}, Jp = { class: "value" }, Yp = { class: "footer-actions" }, Xp = /* @__PURE__ */ X({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(h) {
      if (!h) return "Unknown";
      try {
        const g = new Date(h), u = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), r = Math.floor(u / 6e4), v = Math.floor(u / 36e5), p = Math.floor(u / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : p < 30 ? `${p} ${p === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return h;
      }
    }
    return (h, g) => (s(), T(Ke, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (f) => n("close"))
    }, {
      body: l(() => [
        e("div", Lp, [
          e("div", Pp, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Dp, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Np, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", Up, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Op, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Bp, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Fp, a(t.environment.workflow_count), 1)
          ]),
          e("div", Ap, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Vp, a(t.environment.node_count), 1)
          ]),
          e("div", Wp, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", jp, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Gp)) : d("", !0),
          t.environment.created_at ? (s(), o("div", qp, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Hp, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", Kp, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Jp, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", Yp, [
          t.canDelete ? (s(), T(ue, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (f) => n("delete", t.environment.name))
          }, {
            default: l(() => [...g[12] || (g[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          k(ue, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (f) => n("close"))
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
}), Qp = /* @__PURE__ */ Q(Xp, [["__scopeId", "data-v-59855453"]]), Ps = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Ds = "3.12", fs = [
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
], Ns = "auto", Zp = { class: "progress-bar" }, eh = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = P(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, h) => (s(), o("div", Zp, [
      e("div", {
        class: le(["progress-fill", t.variant]),
        style: pt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Us = /* @__PURE__ */ Q(eh, [["__scopeId", "data-v-1beb0512"]]), th = { class: "task-progress" }, sh = { class: "progress-info" }, oh = { class: "progress-percentage" }, nh = { class: "progress-message" }, ah = {
  key: 0,
  class: "progress-steps"
}, lh = { class: "step-icon" }, ih = { class: "step-label" }, rh = /* @__PURE__ */ X({
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
    function n(h) {
      const g = c.steps.find((f) => f.id === h);
      return g ? c.progress >= g.progressThreshold ? "completed" : c.currentPhase === h ? "active" : "pending" : "pending";
    }
    function i(h) {
      const g = n(h);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (h, g) => (s(), o("div", th, [
      k(Us, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", sh, [
        e("span", oh, a(t.progress) + "%", 1),
        e("span", nh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", ah, [
        (s(!0), o(V, null, ee(t.steps, (f) => (s(), o("div", {
          key: f.id,
          class: le(["step", n(f.id)])
        }, [
          e("span", lh, a(i(f.id)), 1),
          e("span", ih, a(f.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), ts = /* @__PURE__ */ Q(rh, [["__scopeId", "data-v-9d1de66c"]]), dh = {
  key: 0,
  class: "create-env-form"
}, ch = { class: "form-field" }, uh = { class: "form-field" }, mh = ["value"], vh = { class: "form-field" }, fh = ["disabled"], gh = ["value"], ph = { class: "form-field" }, hh = ["value"], yh = { class: "form-field form-field--checkbox" }, wh = { class: "form-checkbox" }, kh = {
  key: 1,
  class: "create-env-progress"
}, bh = { class: "creating-intro" }, _h = {
  key: 0,
  class: "progress-warning"
}, $h = {
  key: 1,
  class: "create-error"
}, Ch = { class: "error-message" }, xh = {
  key: 1,
  class: "footer-status"
}, Sh = 10, Ih = /* @__PURE__ */ X({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: h, getCreateProgress: g } = Oe(), f = C(""), u = C(Ds), r = C("latest"), v = C(Ns), p = C(!1), w = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = C(!1), x = C(!1), z = C({
      progress: 0,
      message: ""
    });
    let N = null, m = 0;
    const _ = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], L = C(null);
    function I() {
      x.value || n("close");
    }
    async function $() {
      const S = f.value.trim();
      if (S) {
        x.value = !0, z.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const E = {
            name: S,
            python_version: u.value,
            comfyui_version: r.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, U = await h(E);
          U.status === "started" ? j() : U.status === "error" && (z.value = {
            progress: 0,
            message: U.message || "Failed to start creation",
            error: U.message
          });
        } catch (E) {
          z.value = {
            progress: 0,
            message: E instanceof Error ? E.message : "Unknown error",
            error: E instanceof Error ? E.message : "Unknown error"
          };
        }
      }
    }
    function j() {
      N || (m = 0, N = window.setInterval(async () => {
        try {
          const S = await g();
          m = 0, z.value = {
            progress: S.progress ?? 0,
            message: S.message,
            phase: S.phase,
            error: S.error
          }, S.state === "complete" ? (W(), n("created", S.environment_name || f.value.trim(), p.value)) : S.state === "error" ? (W(), z.value.error = S.error || S.message) : S.state === "idle" && x.value && (W(), z.value.error = "Creation was interrupted. Please try again.");
        } catch {
          m++, m >= Sh && (W(), z.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function W() {
      N && (clearInterval(N), N = null);
    }
    function K() {
      x.value = !1, z.value = { progress: 0, message: "" }, n("close");
    }
    async function D() {
      b.value = !0;
      try {
        w.value = await i();
      } catch (S) {
        console.error("Failed to load ComfyUI releases:", S);
      } finally {
        b.value = !1;
      }
    }
    return Ue(async () => {
      var S;
      await eo(), (S = L.value) == null || S.focus(), D();
    }), Ss(() => {
      W();
    }), (S, E) => (s(), T(Ke, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !x.value,
      onClose: I
    }, {
      body: l(() => [
        x.value ? (s(), o("div", kh, [
          e("p", bh, [
            E[11] || (E[11] = y(" Creating environment ", -1)),
            e("strong", null, a(f.value), 1),
            E[12] || (E[12] = y("... ", -1))
          ]),
          k(ts, {
            progress: z.value.progress,
            message: z.value.message,
            "current-phase": z.value.phase,
            variant: z.value.error ? "error" : "default",
            "show-steps": !0,
            steps: _
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          z.value.error ? d("", !0) : (s(), o("p", _h, " This may take several minutes. Please wait... ")),
          z.value.error ? (s(), o("div", $h, [
            e("p", Ch, a(z.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", dh, [
          e("div", ch, [
            E[6] || (E[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ne(e("input", {
              ref_key: "nameInput",
              ref: L,
              "onUpdate:modelValue": E[0] || (E[0] = (U) => f.value = U),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: gt($, ["enter"])
            }, null, 544), [
              [Mt, f.value]
            ])
          ]),
          e("div", uh, [
            E[7] || (E[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (U) => u.value = U),
              class: "form-select"
            }, [
              (s(!0), o(V, null, ee($e(Ps), (U) => (s(), o("option", {
                key: U,
                value: U
              }, a(U), 9, mh))), 128))
            ], 512), [
              [Tt, u.value]
            ])
          ]),
          e("div", vh, [
            E[8] || (E[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": E[2] || (E[2] = (U) => r.value = U),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(V, null, ee(w.value, (U) => (s(), o("option", {
                key: U.tag_name,
                value: U.tag_name
              }, a(U.name), 9, gh))), 128))
            ], 8, fh), [
              [Tt, r.value]
            ])
          ]),
          e("div", ph, [
            E[9] || (E[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": E[3] || (E[3] = (U) => v.value = U),
              class: "form-select"
            }, [
              (s(!0), o(V, null, ee($e(fs), (U) => (s(), o("option", {
                key: U,
                value: U
              }, a(U) + a(U === "auto" ? " (detect GPU)" : ""), 9, hh))), 128))
            ], 512), [
              [Tt, v.value]
            ])
          ]),
          e("div", yh, [
            e("label", wh, [
              Ne(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": E[4] || (E[4] = (U) => p.value = U)
              }, null, 512), [
                [Qt, p.value]
              ]),
              E[10] || (E[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        x.value ? (s(), o(V, { key: 1 }, [
          z.value.error ? (s(), T(ue, {
            key: 0,
            variant: "secondary",
            onClick: K
          }, {
            default: l(() => [...E[15] || (E[15] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", xh, " Creating environment... "))
        ], 64)) : (s(), o(V, { key: 0 }, [
          k(ue, {
            variant: "primary",
            disabled: !f.value.trim(),
            onClick: $
          }, {
            default: l(() => [...E[13] || (E[13] = [
              y(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(ue, {
            variant: "secondary",
            onClick: E[5] || (E[5] = (U) => n("close"))
          }, {
            default: l(() => [...E[14] || (E[14] = [
              y(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Eh = /* @__PURE__ */ Q(Ih, [["__scopeId", "data-v-f37eaa42"]]), Mh = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: h } = Oe(), g = C([]), f = C(!1), u = C(null), r = C(""), v = C(!1), p = C(!1), w = C(null), b = P(
      () => g.value.find((I) => I.is_current)
    ), x = P(() => {
      if (!r.value.trim()) return g.value;
      const I = r.value.toLowerCase();
      return g.value.filter(
        ($) => {
          var j;
          return $.name.toLowerCase().includes(I) || ((j = $.current_branch) == null ? void 0 : j.toLowerCase().includes(I));
        }
      );
    });
    function z(I, $) {
      p.value = !1, i("created", I, $);
    }
    function N() {
      p.value = !0;
    }
    function m(I) {
      w.value = I;
    }
    function _(I) {
      w.value = null, i("delete", I);
    }
    async function L() {
      f.value = !0, u.value = null;
      try {
        g.value = await h();
      } catch (I) {
        u.value = I instanceof Error ? I.message : "Failed to load environments";
      } finally {
        f.value = !1;
      }
    }
    return Ue(L), c({
      loadEnvironments: L,
      openCreateModal: N
    }), (I, $) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (j) => v.value = !0)
          }, {
            actions: l(() => [
              k(Z, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: l(() => [...$[6] || ($[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              k(Z, {
                variant: "secondary",
                size: "sm",
                onClick: L
              }, {
                default: l(() => [...$[7] || ($[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(Rt, {
            modelValue: r.value,
            "onUpdate:modelValue": $[1] || ($[1] = (j) => r.value = j),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          f.value ? (s(), T(ht, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (s(), T(yt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), T(Lt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(g.value.length) + " " + a(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                b.value ? (s(), o(V, { key: 0 }, [
                  $[8] || ($[8] = y(" • Current: ", -1)),
                  e("strong", null, a(b.value.name), 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            x.value.length ? (s(), T(Be, {
              key: 1,
              title: "ENVIRONMENTS",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ee(x.value, (j) => (s(), T(Rp, {
                  key: j.name,
                  "environment-name": j.name,
                  "is-current": j.is_current,
                  "current-branch": j.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    j.is_current ? d("", !0) : (s(), T(Z, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => I.$emit("switch", j.name)
                    }, {
                      default: l(() => [...$[9] || ($[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => m(j)
                    }, {
                      default: l(() => [...$[10] || ($[10] = [
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
            x.value.length ? d("", !0) : (s(), T(at, {
              key: 2,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, jt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  k(Z, {
                    variant: "primary",
                    onClick: N
                  }, {
                    default: l(() => [...$[11] || ($[11] = [
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
      k(ct, {
        show: v.value,
        title: "About Environments",
        onClose: $[3] || ($[3] = (j) => v.value = !1)
      }, {
        content: l(() => [...$[12] || ($[12] = [
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
          k(Z, {
            variant: "secondary",
            onClick: $[2] || ($[2] = (j) => v.value = !1)
          }, {
            default: l(() => [...$[13] || ($[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (s(), T(Qp, {
        key: 0,
        environment: w.value,
        "can-delete": g.value.length > 1,
        onClose: $[4] || ($[4] = (j) => w.value = null),
        onDelete: _
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      p.value ? (s(), T(Eh, {
        key: 1,
        onClose: $[5] || ($[5] = (j) => p.value = !1),
        onCreated: z
      })) : d("", !0)
    ], 64));
  }
}), Th = /* @__PURE__ */ Q(Mh, [["__scopeId", "data-v-d6dc0255"]]), zh = { class: "file-path" }, Rh = { class: "file-path-text" }, Lh = ["title"], Ph = /* @__PURE__ */ X({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = C(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy:", h);
      }
    }
    return (h, g) => (s(), o("div", zh, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Rh, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, Lh)) : d("", !0)
    ]));
  }
}), Dh = /* @__PURE__ */ Q(Ph, [["__scopeId", "data-v-f0982173"]]), Nh = { class: "export-blocked" }, Uh = { class: "issues-list" }, Oh = { class: "issue-message" }, Bh = {
  key: 0,
  class: "issue-details"
}, Fh = ["onClick"], Ah = { class: "issue-fix" }, Vh = /* @__PURE__ */ X({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ss({});
    function i(h) {
      const g = c.issues[h];
      return n[h] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (h, g) => (s(), T(Ke, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (f) => h.$emit("close"))
    }, {
      body: l(() => [
        e("div", Nh, [
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
          e("div", Uh, [
            (s(!0), o(V, null, ee(t.issues, (f, u) => (s(), o("div", {
              key: u,
              class: "issue-item"
            }, [
              e("div", Oh, a(f.message), 1),
              f.details.length ? (s(), o("div", Bh, [
                (s(!0), o(V, null, ee(i(u), (r, v) => (s(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(r), 1))), 128)),
                f.details.length > 3 && !n[u] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (r) => n[u] = !0
                }, " +" + a(f.details.length - 3) + " more ", 9, Fh)) : d("", !0)
              ])) : d("", !0),
              e("div", Ah, [
                f.type === "uncommitted_workflows" ? (s(), o(V, { key: 0 }, [
                  y(" Commit your workflow changes before exporting. ")
                ], 64)) : f.type === "uncommitted_git_changes" ? (s(), o(V, { key: 1 }, [
                  y(" Commit your changes before exporting. ")
                ], 64)) : f.type === "unresolved_issues" ? (s(), o(V, { key: 2 }, [
                  y(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        k(ue, {
          variant: "primary",
          onClick: g[0] || (g[0] = (f) => h.$emit("close"))
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
}), Wh = /* @__PURE__ */ Q(Vh, [["__scopeId", "data-v-b52f5e32"]]), jh = { class: "export-warnings" }, Gh = {
  key: 0,
  class: "success-header"
}, qh = { class: "warning-header" }, Hh = { class: "warning-summary" }, Kh = { class: "warning-title" }, Jh = { class: "models-section" }, Yh = { class: "models-list" }, Xh = { class: "model-info" }, Qh = { class: "model-filename" }, Zh = { class: "model-workflows" }, e1 = ["onClick"], t1 = /* @__PURE__ */ X({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = C(!1), g = C(null), f = P(() => h.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function u() {
      g.value = null, i("revalidate");
    }
    return (r, v) => (s(), o(V, null, [
      k(Ke, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (p) => r.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", jh, [
            t.models.length === 0 ? (s(), o("div", Gh, [...v[4] || (v[4] = [
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
            ])])) : (s(), o(V, { key: 1 }, [
              e("div", qh, [
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
                e("div", Hh, [
                  e("h3", Kh, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", Jh, [
                e("div", Yh, [
                  (s(!0), o(V, null, ee(f.value, (p) => (s(), o("div", {
                    key: p.hash,
                    class: "model-item"
                  }, [
                    e("div", Xh, [
                      e("div", Qh, a(p.filename), 1),
                      e("div", Zh, " Used by: " + a(p.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (w) => g.value = p.hash
                    }, " Add Source ", 8, e1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !h.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (p) => h.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          k(ue, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (p) => r.$emit("cancel"))
          }, {
            default: l(() => [...v[7] || (v[7] = [
              y(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(ue, {
            variant: "primary",
            onClick: v[2] || (v[2] = (p) => r.$emit("confirm"))
          }, {
            default: l(() => [
              y(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), T(vs, {
        key: 0,
        identifier: g.value,
        onClose: u
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), s1 = /* @__PURE__ */ Q(t1, [["__scopeId", "data-v-b698d882"]]), o1 = { class: "export-card" }, n1 = { class: "export-path-row" }, a1 = { class: "export-actions" }, l1 = {
  key: 1,
  class: "export-warning"
}, i1 = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Oe(), i = C(""), h = C(!1), g = C(!1), f = C(!1), u = C(null), r = C(!1), v = C(null), p = C(!1), w = C(!1), b = P(() => h.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function x() {
      h.value = !0, u.value = null;
      try {
        const I = await c();
        v.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? w.value = !0 : await m() : p.value = !0;
      } catch (I) {
        u.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Validation failed"
        };
      } finally {
        h.value = !1;
      }
    }
    async function z() {
      w.value = !1, await m();
    }
    async function N() {
      try {
        const I = await c();
        v.value = I;
      } catch (I) {
        console.error("Re-validation failed:", I);
      }
    }
    async function m() {
      g.value = !0;
      try {
        const I = await n(i.value || void 0);
        u.value = I;
      } catch (I) {
        u.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function _() {
      var I;
      if ((I = u.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch ($) {
          console.error("Failed to copy path:", $);
        }
    }
    async function L() {
      var I;
      if ((I = u.value) != null && I.path) {
        f.value = !0;
        try {
          const $ = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!$.ok)
            throw new Error(`Download failed: ${$.statusText}`);
          const j = await $.blob(), W = URL.createObjectURL(j), K = u.value.path.split("/").pop() || "environment-export.tar.gz", D = document.createElement("a");
          D.href = W, D.download = K, document.body.appendChild(D), D.click(), document.body.removeChild(D), URL.revokeObjectURL(W);
        } catch ($) {
          console.error("Failed to download:", $), alert(`Download failed: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return (I, $) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (j) => r.value = !0)
          })
        ]),
        content: l(() => [
          k(Be, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", o1, [
                $[7] || ($[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", n1, [
                  k(Zt, {
                    modelValue: i.value,
                    "onUpdate:modelValue": $[1] || ($[1] = (j) => i.value = j),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", a1, [
                  k(Z, {
                    variant: "primary",
                    size: "md",
                    loading: h.value || g.value,
                    disabled: h.value || g.value,
                    onClick: x
                  }, {
                    default: l(() => [
                      $[6] || ($[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      y(" " + a(b.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (s(), T(Be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              k(He, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, jt({
                icon: l(() => [
                  y(a(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  y(a(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  y(a(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    k(De, { label: "Saved to:" }, {
                      default: l(() => [
                        k(Dh, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (s(), T(De, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (s(), o("div", l1, [...$[8] || ($[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    k(Z, {
                      variant: "primary",
                      size: "sm",
                      loading: f.value,
                      onClick: L
                    }, {
                      default: l(() => [...$[9] || ($[9] = [
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
                    k(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: _
                    }, {
                      default: l(() => [...$[10] || ($[10] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: $[2] || ($[2] = (j) => u.value = null)
                    }, {
                      default: l(() => [...$[11] || ($[11] = [
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
      k(ct, {
        show: r.value,
        title: "What Gets Exported",
        onClose: $[3] || ($[3] = (j) => r.value = !1)
      }, {
        content: l(() => [...$[12] || ($[12] = [
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
      p.value && v.value ? (s(), T(Wh, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: $[4] || ($[4] = (j) => p.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      w.value && v.value ? (s(), T(s1, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: z,
        onCancel: $[5] || ($[5] = (j) => w.value = !1),
        onRevalidate: N
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), r1 = /* @__PURE__ */ Q(i1, [["__scopeId", "data-v-f4d120f2"]]), d1 = { class: "file-input-wrapper" }, c1 = ["accept", "multiple", "disabled"], u1 = /* @__PURE__ */ X({
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
    const i = n, h = C(null);
    function g() {
      var u;
      (u = h.value) == null || u.click();
    }
    function f(u) {
      const r = u.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return c({
      triggerInput: g
    }), (u, r) => (s(), o("div", d1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: f
      }, null, 40, c1),
      k(Z, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          Ce(u.$slots, "default", {}, () => [
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
}), m1 = /* @__PURE__ */ Q(u1, [["__scopeId", "data-v-cd192091"]]), v1 = {
  key: 0,
  class: "drop-zone-empty"
}, f1 = { class: "drop-zone-text" }, g1 = { class: "drop-zone-primary" }, p1 = { class: "drop-zone-secondary" }, h1 = { class: "drop-zone-actions" }, y1 = {
  key: 1,
  class: "drop-zone-file"
}, w1 = { class: "file-info" }, k1 = { class: "file-details" }, b1 = { class: "file-name" }, _1 = { class: "file-size" }, $1 = /* @__PURE__ */ X({
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
    const n = c, i = C(!1), h = C(null), g = C(0), f = P(() => h.value !== null), u = P(() => {
      var m;
      return ((m = h.value) == null ? void 0 : m.name) || "";
    }), r = P(() => {
      if (!h.value) return "";
      const m = h.value.size;
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(m) {
      var _;
      m.stopPropagation(), g.value++, (_ = m.dataTransfer) != null && _.types.includes("Files") && (i.value = !0);
    }
    function p(m) {
      m.stopPropagation(), m.dataTransfer && (m.dataTransfer.dropEffect = "copy");
    }
    function w(m) {
      m.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function b(m) {
      var L;
      m.stopPropagation(), g.value = 0, i.value = !1;
      const _ = (L = m.dataTransfer) == null ? void 0 : L.files;
      _ && _.length > 0 && z(_[0]);
    }
    function x(m) {
      m.length > 0 && z(m[0]);
    }
    function z(m) {
      h.value = m, n("fileSelected", m);
    }
    function N() {
      h.value = null, n("clear");
    }
    return (m, _) => (s(), o("div", {
      class: le(["file-drop-zone", { "drop-active": i.value, "has-file": f.value }]),
      onDragenter: Le(v, ["prevent"]),
      onDragover: Le(p, ["prevent"]),
      onDragleave: Le(w, ["prevent"]),
      onDrop: Le(b, ["prevent"])
    }, [
      f.value ? (s(), o("div", y1, [
        e("div", w1, [
          _[1] || (_[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", k1, [
            e("div", b1, a(u.value), 1),
            e("div", _1, a(r.value), 1)
          ])
        ]),
        k(Z, {
          variant: "ghost",
          size: "xs",
          onClick: N,
          title: "Remove file"
        }, {
          default: l(() => [..._[2] || (_[2] = [
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
      ])) : (s(), o("div", v1, [
        _[0] || (_[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", f1, [
          e("p", g1, a(t.primaryText), 1),
          e("p", p1, a(t.secondaryText), 1)
        ]),
        e("div", h1, [
          k(m1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: x
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
}), C1 = /* @__PURE__ */ Q($1, [["__scopeId", "data-v-0f79cb86"]]), x1 = { class: "import-preview" }, S1 = { class: "preview-header" }, I1 = {
  key: 0,
  class: "source-env"
}, E1 = { class: "preview-content" }, M1 = { class: "preview-section" }, T1 = { class: "section-header" }, z1 = { class: "section-info" }, R1 = { class: "section-count" }, L1 = {
  key: 0,
  class: "item-list"
}, P1 = { class: "item-name" }, D1 = {
  key: 0,
  class: "item-more"
}, N1 = { class: "preview-section" }, U1 = { class: "section-header" }, O1 = { class: "section-info" }, B1 = { class: "section-count" }, F1 = {
  key: 0,
  class: "item-list"
}, A1 = { class: "item-details" }, V1 = { class: "item-name" }, W1 = { class: "item-meta" }, j1 = {
  key: 0,
  class: "item-more"
}, G1 = { class: "preview-section" }, q1 = { class: "section-header" }, H1 = { class: "section-info" }, K1 = { class: "section-count" }, J1 = {
  key: 0,
  class: "item-list"
}, Y1 = { class: "item-name" }, X1 = {
  key: 0,
  class: "item-more"
}, Q1 = {
  key: 0,
  class: "preview-section"
}, Z1 = { class: "git-info" }, ey = /* @__PURE__ */ X({
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
    const c = t, n = P(() => c.workflows.length), i = P(() => c.models.length), h = P(() => c.nodes.length);
    function g(f) {
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (f, u) => (s(), o("div", x1, [
      e("div", S1, [
        k(Ze, null, {
          default: l(() => [...u[0] || (u[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", I1, [
          u[1] || (u[1] = y(" From: ", -1)),
          k(is, null, {
            default: l(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", E1, [
        e("div", M1, [
          e("div", T1, [
            u[3] || (u[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", z1, [
              u[2] || (u[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", R1, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", L1, [
            (s(!0), o(V, null, ee(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              u[4] || (u[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", P1, a(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", D1, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", N1, [
          e("div", U1, [
            u[6] || (u[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", O1, [
              u[5] || (u[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", B1, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", F1, [
            (s(!0), o(V, null, ee(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", A1, [
                e("span", V1, a(r.filename), 1),
                e("span", W1, a(g(r.size)) + " • " + a(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", j1, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", G1, [
          e("div", q1, [
            u[9] || (u[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", H1, [
              u[8] || (u[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", K1, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", J1, [
            (s(!0), o(V, null, ee(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              u[10] || (u[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Y1, a(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", X1, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Q1, [
          u[11] || (u[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Z1, [
            t.gitBranch ? (s(), T(De, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                k(is, null, {
                  default: l(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (s(), T(De, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                k(Es, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), ty = /* @__PURE__ */ Q(ey, [["__scopeId", "data-v-182fe113"]]), sy = { class: "import-config" }, oy = { class: "config-container" }, ny = { class: "config-field" }, ay = { class: "input-wrapper" }, ly = ["value"], iy = {
  key: 0,
  class: "validating-indicator"
}, ry = {
  key: 1,
  class: "valid-indicator"
}, dy = {
  key: 0,
  class: "field-error"
}, cy = { class: "config-field" }, uy = { class: "strategy-options" }, my = ["value", "checked", "onChange"], vy = { class: "strategy-content" }, fy = { class: "strategy-label" }, gy = { class: "strategy-description" }, py = { class: "config-field switch-field" }, hy = { class: "switch-label" }, yy = ["checked"], wy = { class: "advanced-section" }, ky = { class: "advanced-content" }, by = { class: "config-field" }, _y = ["value"], $y = ["value"], Cy = /* @__PURE__ */ X({
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
    const n = t, i = c, h = C(!1), g = C(!1);
    kt(() => n.nameError, (p) => {
      h.value = !1, g.value = !p && n.name.length > 0;
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
    function r(p) {
      const w = p.target.value;
      i("update:name", w), g.value = !1, u && clearTimeout(u), w.length > 0 ? (h.value = !0, u = setTimeout(() => {
        i("validate-name", w);
      }, 400)) : h.value = !1;
    }
    function v() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (p, w) => (s(), o("div", sy, [
      k(Ze, null, {
        default: l(() => [...w[2] || (w[2] = [
          y("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", oy, [
        e("div", ny, [
          k(Yt, { required: "" }, {
            default: l(() => [...w[3] || (w[3] = [
              y("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", ay, [
            e("input", {
              type: "text",
              class: le(["name-input", { error: t.nameError || t.name.length === 0, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: r,
              onBlur: v
            }, null, 42, ly),
            h.value ? (s(), o("span", iy, "...")) : g.value ? (s(), o("span", ry, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", dy, a(t.nameError), 1)) : d("", !0),
          w[4] || (w[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", cy, [
          k(Yt, null, {
            default: l(() => [...w[5] || (w[5] = [
              y("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", uy, [
            (s(), o(V, null, ee(f, (b) => e("label", {
              key: b.value,
              class: le(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: (x) => i("update:modelStrategy", b.value)
              }, null, 40, my),
              e("div", vy, [
                e("span", fy, a(b.label), 1),
                e("span", gy, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", py, [
          e("label", hy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: w[0] || (w[0] = (b) => i("update:switchAfterImport", b.target.checked))
            }, null, 40, yy),
            w[6] || (w[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", wy, [
          w[8] || (w[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", ky, [
            e("div", by, [
              k(Yt, null, {
                default: l(() => [...w[7] || (w[7] = [
                  y("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: w[1] || (w[1] = (b) => i("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(V, null, ee($e(fs), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, $y))), 128))
              ], 40, _y)
            ])
          ])
        ])
      ])
    ]));
  }
}), xy = /* @__PURE__ */ Q(Cy, [["__scopeId", "data-v-89ea06a1"]]), Sy = {
  key: 0,
  class: "import-empty"
}, Iy = { class: "git-import-section" }, Ey = { class: "git-url-input-row" }, My = ["disabled"], Ty = {
  key: 0,
  class: "git-error"
}, zy = {
  key: 1,
  class: "import-configure"
}, Ry = { class: "selected-file-bar" }, Ly = {
  key: 0,
  class: "file-bar-content"
}, Py = { class: "file-bar-info" }, Dy = { class: "file-bar-name" }, Ny = { class: "file-bar-size" }, Uy = {
  key: 1,
  class: "file-bar-content"
}, Oy = { class: "file-bar-info" }, By = { class: "file-bar-name" }, Fy = {
  key: 0,
  class: "preview-loading"
}, Ay = { class: "import-actions" }, Vy = {
  key: 2,
  class: "import-progress"
}, Wy = { class: "creating-intro" }, jy = {
  key: 0,
  class: "progress-warning"
}, Gy = {
  key: 1,
  class: "import-error"
}, qy = { class: "error-message" }, Hy = {
  key: 3,
  class: "import-complete"
}, Ky = { class: "complete-message" }, Jy = { class: "complete-title" }, Yy = { class: "complete-details" }, Xy = { class: "complete-actions" }, Qy = /* @__PURE__ */ X({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const { previewTarballImport: n, previewGitImport: i, validateEnvironmentName: h, executeImport: g, executeGitImport: f, getImportProgress: u } = Oe(), r = c;
    let v = null;
    const p = C(!1), w = C(null), b = C(!1), x = C(!1), z = C(!1), N = C(""), m = C(!1), _ = C(null), L = C(""), I = C(null), $ = C(!1), j = C(null), W = C(null), K = C({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), D = C(null), S = C({
      message: "Preparing import...",
      phase: "",
      progress: 0,
      error: null
    }), E = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], U = P(() => {
      if (!W.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ae = W.value;
      return {
        sourceEnvironment: ae.comfyui_version ? `ComfyUI ${ae.comfyui_version}` : "Unknown",
        workflows: ae.workflows.map((oe) => oe.name),
        models: ae.models.map((oe) => ({
          filename: oe.filename,
          size: 0,
          type: oe.relative_path.split("/")[0] || "model"
        })),
        nodes: ae.nodes.map((oe) => oe.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), B = P(() => !m.value && !_.value && W.value && K.value.name.length > 0 && !D.value && (w.value || I.value));
    async function ne(ae) {
      w.value = ae, m.value = !0, _.value = null, W.value = null;
      try {
        const oe = await n(ae);
        W.value = oe;
      } catch (oe) {
        _.value = oe instanceof Error ? oe.message : "Failed to analyze file", console.error("Preview error:", oe);
      } finally {
        m.value = !1;
      }
    }
    function we() {
      w.value = null, I.value = null, L.value = "", j.value = null, x.value = !1, z.value = !1, N.value = "", W.value = null, _.value = null, K.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, D.value = null;
    }
    function me() {
      Ee(), we(), b.value = !1, m.value = !1, $.value = !1, S.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function se() {
      if (L.value.trim()) {
        $.value = !0, j.value = null;
        try {
          const ae = await i(L.value.trim());
          I.value = L.value.trim(), W.value = ae;
        } catch (ae) {
          j.value = ae instanceof Error ? ae.message : "Failed to analyze repository";
        } finally {
          $.value = !1;
        }
      }
    }
    function F(ae) {
      try {
        const oe = new URL(ae);
        return oe.host + oe.pathname.replace(/\.git$/, "");
      } catch {
        return ae;
      }
    }
    async function M(ae) {
      if (!ae) {
        D.value = "Environment name is required";
        return;
      }
      try {
        const oe = await h(ae);
        D.value = oe.valid ? null : oe.error || "Invalid name";
      } catch {
        D.value = "Failed to validate name";
      }
    }
    async function ie() {
      if (K.value.name && !(!w.value && !I.value)) {
        b.value = !0, x.value = !1, S.value = { message: `Creating environment '${K.value.name}'...`, phase: "", progress: 0, error: null };
        try {
          let ae;
          if (w.value)
            ae = await g(
              w.value,
              K.value.name,
              K.value.modelStrategy,
              K.value.torchBackend
            );
          else if (I.value)
            ae = await f(
              I.value,
              K.value.name,
              K.value.modelStrategy,
              K.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ae.status === "started" ? te() : (z.value = !1, N.value = ae.message, b.value = !1, x.value = !0);
        } catch (ae) {
          z.value = !1, N.value = ae instanceof Error ? ae.message : "Unknown error occurred during import", b.value = !1, x.value = !0;
        }
      }
    }
    function te() {
      v || (v = setInterval(async () => {
        try {
          const ae = await u();
          S.value = {
            message: ae.message,
            phase: ae.phase || "",
            progress: ae.progress ?? (ae.state === "importing" ? 50 : 0),
            error: ae.error || null
          }, ae.state === "complete" ? (Ee(), z.value = !0, N.value = `Environment '${ae.environment_name}' created successfully`, b.value = !1, x.value = !0, K.value.switchAfterImport && ae.environment_name && r("import-complete-switch", ae.environment_name)) : ae.state === "error" && (Ee(), z.value = !1, N.value = ae.error || ae.message, b.value = !1, x.value = !0);
        } catch (ae) {
          console.error("Failed to poll import progress:", ae);
        }
      }, 2e3));
    }
    function Ee() {
      v && (clearInterval(v), v = null);
    }
    function be(ae) {
      return ae < 1024 ? `${ae} B` : ae < 1024 * 1024 ? `${(ae / 1024).toFixed(1)} KB` : ae < 1024 * 1024 * 1024 ? `${(ae / (1024 * 1024)).toFixed(1)} MB` : `${(ae / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (ae, oe) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (re) => p.value = !0)
          })
        ]),
        content: l(() => {
          var re;
          return [
            !w.value && !I.value && !b.value ? (s(), o("div", Sy, [
              k(C1, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: ne
              }),
              oe[9] || (oe[9] = e("div", { class: "import-divider" }, [
                e("span", null, "or")
              ], -1)),
              e("div", Iy, [
                oe[7] || (oe[7] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
                e("div", Ey, [
                  Ne(e("input", {
                    type: "text",
                    class: "git-url-input",
                    "onUpdate:modelValue": oe[1] || (oe[1] = (ve) => L.value = ve),
                    placeholder: "https://github.com/user/repo.git",
                    onKeyup: gt(se, ["enter"]),
                    disabled: $.value
                  }, null, 40, My), [
                    [Mt, L.value]
                  ]),
                  k(Z, {
                    variant: "primary",
                    size: "sm",
                    disabled: !L.value.trim() || $.value,
                    onClick: se
                  }, {
                    default: l(() => [
                      y(a($.value ? "Analyzing..." : "ANALYZE"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                j.value ? (s(), o("div", Ty, a(j.value), 1)) : d("", !0),
                oe[8] || (oe[8] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
              ])
            ])) : (w.value || I.value) && !b.value && !x.value ? (s(), o("div", zy, [
              e("div", Ry, [
                w.value ? (s(), o("div", Ly, [
                  oe[10] || (oe[10] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", Py, [
                    e("div", Dy, a(w.value.name), 1),
                    e("div", Ny, a(be(w.value.size)), 1)
                  ])
                ])) : I.value ? (s(), o("div", Uy, [
                  oe[12] || (oe[12] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
                  e("div", Oy, [
                    e("div", By, a(F(I.value)), 1),
                    oe[11] || (oe[11] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
                  ])
                ])) : d("", !0),
                k(Z, {
                  variant: "ghost",
                  size: "sm",
                  onClick: we
                }, {
                  default: l(() => [...oe[13] || (oe[13] = [
                    y(" Change Source ", -1)
                  ])]),
                  _: 1
                })
              ]),
              m.value ? (s(), o("div", Fy, [...oe[14] || (oe[14] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : _.value ? (s(), T(st, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [_.value]
              }, null, 8, ["details"])) : W.value ? (s(), T(ty, {
                key: 2,
                "source-environment": U.value.sourceEnvironment,
                workflows: U.value.workflows,
                models: U.value.models,
                nodes: U.value.nodes,
                "git-branch": U.value.gitBranch,
                "git-commit": U.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
              W.value ? (s(), T(xy, {
                key: 3,
                name: K.value.name,
                "onUpdate:name": oe[2] || (oe[2] = (ve) => K.value.name = ve),
                "model-strategy": K.value.modelStrategy,
                "onUpdate:modelStrategy": oe[3] || (oe[3] = (ve) => K.value.modelStrategy = ve),
                "torch-backend": K.value.torchBackend,
                "onUpdate:torchBackend": oe[4] || (oe[4] = (ve) => K.value.torchBackend = ve),
                "switch-after-import": K.value.switchAfterImport,
                "onUpdate:switchAfterImport": oe[5] || (oe[5] = (ve) => K.value.switchAfterImport = ve),
                "name-error": D.value,
                onValidateName: M
              }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
              K.value.modelStrategy === "skip" && ((re = W.value) != null && re.models_needing_download) ? (s(), T(st, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${W.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : d("", !0),
              e("div", Ay, [
                k(Z, {
                  variant: "secondary",
                  size: "md",
                  onClick: we
                }, {
                  default: l(() => [...oe[15] || (oe[15] = [
                    y(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                k(Z, {
                  variant: "primary",
                  size: "md",
                  disabled: !B.value,
                  onClick: ie
                }, {
                  default: l(() => [...oe[16] || (oe[16] = [
                    y(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ])) : b.value ? (s(), o("div", Vy, [
              e("p", Wy, [
                oe[17] || (oe[17] = y(" Importing environment ", -1)),
                e("strong", null, a(K.value.name), 1),
                oe[18] || (oe[18] = y("... ", -1))
              ]),
              k(ts, {
                progress: S.value.progress,
                message: S.value.message,
                "current-phase": S.value.phase,
                variant: S.value.error ? "error" : "default",
                "show-steps": !0,
                steps: E
              }, null, 8, ["progress", "message", "current-phase", "variant"]),
              S.value.error ? d("", !0) : (s(), o("p", jy, " This may take several minutes. Please wait... ")),
              S.value.error ? (s(), o("div", Gy, [
                e("p", qy, a(S.value.error), 1)
              ])) : d("", !0)
            ])) : x.value ? (s(), o("div", Hy, [
              e("div", {
                class: le(["complete-icon", z.value ? "success" : "error"])
              }, a(z.value ? "✓" : "✕"), 3),
              e("div", Ky, [
                e("div", Jy, a(z.value ? "Import Successful" : "Import Failed"), 1),
                e("div", Yy, a(N.value), 1)
              ]),
              e("div", Xy, [
                k(Z, {
                  variant: "primary",
                  size: "md",
                  onClick: me
                }, {
                  default: l(() => [...oe[19] || (oe[19] = [
                    y(" Import Another ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0)
          ];
        }),
        _: 1
      }),
      k(ct, {
        show: p.value,
        title: "How Import Works",
        onClose: oe[6] || (oe[6] = (re) => p.value = !1)
      }, {
        content: l(() => [...oe[20] || (oe[20] = [
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
}), Zy = /* @__PURE__ */ Q(Qy, [["__scopeId", "data-v-e3c47581"]]), ew = { class: "header-info" }, tw = { class: "commit-hash" }, sw = {
  key: 0,
  class: "commit-refs"
}, ow = { class: "commit-message" }, nw = { class: "commit-date" }, aw = {
  key: 0,
  class: "loading"
}, lw = {
  key: 1,
  class: "changes-section"
}, iw = { class: "stats-row" }, rw = { class: "stat" }, dw = { class: "stat insertions" }, cw = { class: "stat deletions" }, uw = {
  key: 0,
  class: "change-group"
}, mw = {
  key: 1,
  class: "change-group"
}, vw = {
  key: 0,
  class: "version"
}, fw = {
  key: 2,
  class: "change-group"
}, gw = { class: "change-item" }, pw = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Oe(), i = C(null), h = C(!0), g = P(() => {
      if (!i.value) return !1;
      const u = i.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), f = P(() => {
      if (!i.value) return !1;
      const u = i.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Ue(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (u, r) => (s(), T(Ke, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (v) => u.$emit("close"))
    }, {
      header: l(() => {
        var v, p, w, b;
        return [
          e("div", ew, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", tw, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (b = (w = i.value) == null ? void 0 : w.refs) != null && b.length ? (s(), o("span", sw, [
              (s(!0), o(V, null, ee(i.value.refs, (x) => (s(), o("span", {
                key: x,
                class: "ref-badge"
              }, a(x), 1))), 128))
            ])) : d("", !0)
          ]),
          k(ue, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (x) => u.$emit("close"))
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
        var v, p;
        return [
          e("div", ow, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", nw, a(((p = i.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (s(), o("div", aw, "Loading details...")) : i.value ? (s(), o("div", lw, [
            e("div", iw, [
              e("span", rw, a(i.value.stats.files_changed) + " files", 1),
              e("span", dw, "+" + a(i.value.stats.insertions), 1),
              e("span", cw, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", uw, [
              k(At, { variant: "section" }, {
                default: l(() => [...r[6] || (r[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, ee(i.value.changes.workflows.added, (w) => (s(), o("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(V, null, ee(i.value.changes.workflows.modified, (w) => (s(), o("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(V, null, ee(i.value.changes.workflows.deleted, (w) => (s(), o("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w), 1)
              ]))), 128))
            ])) : d("", !0),
            f.value ? (s(), o("div", mw, [
              k(At, { variant: "section" }, {
                default: l(() => [...r[10] || (r[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, ee(i.value.changes.nodes.added, (w) => (s(), o("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w.name), 1),
                w.version ? (s(), o("span", vw, "(" + a(w.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(V, null, ee(i.value.changes.nodes.removed, (w) => (s(), o("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", fw, [
              k(At, { variant: "section" }, {
                default: l(() => [...r[13] || (r[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", gw, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => [
        k(ue, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (v) => u.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...r[15] || (r[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(ue, {
          variant: "primary",
          onClick: r[2] || (r[2] = (v) => u.$emit("checkout", t.commit))
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
}), hw = /* @__PURE__ */ Q(pw, [["__scopeId", "data-v-d256ff6d"]]), yw = { class: "dialog-message" }, ww = {
  key: 0,
  class: "dialog-details"
}, kw = {
  key: 1,
  class: "dialog-warning"
}, bw = /* @__PURE__ */ X({
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
    return (c, n) => (s(), T(Ke, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", yw, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", ww, [
          (s(!0), o(V, null, ee(t.details, (i, h) => (s(), o("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", kw, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        k(ue, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), T(ue, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        k(ue, {
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
}), _w = /* @__PURE__ */ Q(bw, [["__scopeId", "data-v-3670b9f5"]]), $w = { class: "base-textarea-wrapper" }, Cw = ["value", "rows", "placeholder", "disabled", "maxlength"], xw = {
  key: 0,
  class: "base-textarea-count"
}, Sw = /* @__PURE__ */ X({
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
    return (c, n) => (s(), o("div", $w, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = gt(Le((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = gt(Le((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Cw),
      t.showCharCount && t.maxLength ? (s(), o("div", xw, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), _s = /* @__PURE__ */ Q(Sw, [["__scopeId", "data-v-5516e6fc"]]), Iw = ["checked", "disabled"], Ew = { class: "base-checkbox-box" }, Mw = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Tw = {
  key: 0,
  class: "base-checkbox-label"
}, zw = /* @__PURE__ */ X({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: le(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, Iw),
      e("span", Ew, [
        t.modelValue ? (s(), o("svg", Mw, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Tw, [
        Ce(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), $s = /* @__PURE__ */ Q(zw, [["__scopeId", "data-v-bf17c831"]]), Rw = { class: "popover-header" }, Lw = { class: "popover-body" }, Pw = {
  key: 0,
  class: "changes-summary"
}, Dw = {
  key: 0,
  class: "change-item"
}, Nw = {
  key: 1,
  class: "change-item"
}, Uw = {
  key: 2,
  class: "change-item"
}, Ow = {
  key: 3,
  class: "change-item"
}, Bw = {
  key: 4,
  class: "change-item"
}, Fw = {
  key: 5,
  class: "change-item"
}, Aw = {
  key: 1,
  class: "no-changes"
}, Vw = {
  key: 2,
  class: "loading"
}, Ww = {
  key: 3,
  class: "issues-error"
}, jw = { class: "error-header" }, Gw = { class: "error-title" }, qw = { class: "issues-list" }, Hw = { class: "message-section" }, Kw = { class: "popover-footer" }, Jw = {
  key: 1,
  class: "commit-popover"
}, Yw = { class: "popover-header" }, Xw = { class: "popover-body" }, Qw = {
  key: 0,
  class: "changes-summary"
}, Zw = {
  key: 0,
  class: "change-item"
}, e0 = {
  key: 1,
  class: "change-item"
}, t0 = {
  key: 2,
  class: "change-item"
}, s0 = {
  key: 3,
  class: "change-item"
}, o0 = {
  key: 4,
  class: "change-item"
}, n0 = {
  key: 5,
  class: "change-item"
}, a0 = {
  key: 1,
  class: "no-changes"
}, l0 = {
  key: 2,
  class: "loading"
}, i0 = {
  key: 3,
  class: "issues-error"
}, r0 = { class: "error-header" }, d0 = { class: "error-title" }, c0 = { class: "issues-list" }, u0 = { class: "message-section" }, m0 = { class: "popover-footer" }, v0 = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: h } = Oe(), g = C(""), f = C(!1), u = C(!1), r = C(null), v = P(() => {
      if (!n.status) return !1;
      const N = n.status.workflows;
      return N.new.length > 0 || N.modified.length > 0 || N.deleted.length > 0 || n.status.has_changes;
    }), p = P(() => {
      if (!n.status) return !1;
      const N = n.status.workflows, m = n.status.git_changes;
      return N.new.length > 0 || N.modified.length > 0 || N.deleted.length > 0 || m.nodes_added.length > 0 || m.nodes_removed.length > 0;
    }), w = P(() => {
      var N;
      return (N = n.status) != null && N.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (m) => m.has_issues && (m.sync_state === "new" || m.sync_state === "modified")
      ) : [];
    }), b = P(() => w.value.length > 0), x = P(() => b.value && !u.value);
    async function z() {
      var N, m, _;
      if (!(b.value && !u.value) && !(!v.value || !g.value.trim() || f.value)) {
        f.value = !0, r.value = null;
        try {
          const L = await h(g.value.trim(), u.value);
          L.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((N = L.summary) == null ? void 0 : N.new) || 0} new, ${((m = L.summary) == null ? void 0 : m.modified) || 0} modified, ${((_ = L.summary) == null ? void 0 : _.deleted) || 0} deleted`
          }, g.value = "", u.value = !1, setTimeout(() => i("committed"), 1e3)) : L.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : L.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: L.message || "Commit failed" };
        } catch (L) {
          r.value = { type: "error", message: L instanceof Error ? L.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (N, m) => t.asModal ? (s(), T(Fe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: m[5] || (m[5] = (_) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: m[4] || (m[4] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", Rw, [
            m[11] || (m[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: m[0] || (m[0] = (_) => i("close"))
            }, [...m[10] || (m[10] = [
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
          e("div", Lw, [
            t.status && v.value ? (s(), o("div", Pw, [
              t.status.workflows.new.length ? (s(), o("div", Dw, [
                m[12] || (m[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Nw, [
                m[13] || (m[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Uw, [
                m[14] || (m[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Ow, [
                m[15] || (m[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Bw, [
                m[16] || (m[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              p.value ? d("", !0) : (s(), o("div", Fw, [...m[17] || (m[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Aw, " No changes to commit ")) : (s(), o("div", Vw, " Loading... ")),
            b.value ? (s(), o("div", Ww, [
              e("div", jw, [
                m[18] || (m[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Gw, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", qw, [
                (s(!0), o(V, null, ee(w.value, (_) => (s(), o("div", {
                  key: _.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(_.name), 1),
                  y(": " + a(_.issue_summary), 1)
                ]))), 128))
              ]),
              k($s, {
                modelValue: u.value,
                "onUpdate:modelValue": m[1] || (m[1] = (_) => u.value = _),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...m[19] || (m[19] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", Hw, [
              k(_s, {
                modelValue: g.value,
                "onUpdate:modelValue": m[2] || (m[2] = (_) => g.value = _),
                placeholder: x.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || f.value || x.value,
                rows: 3,
                onCtrlEnter: z
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (s(), o("div", {
              key: 4,
              class: le(["result", r.value.type])
            }, a(r.value.message), 3)) : d("", !0)
          ]),
          e("div", Kw, [
            k(ue, {
              variant: "secondary",
              onClick: m[3] || (m[3] = (_) => i("close"))
            }, {
              default: l(() => [...m[20] || (m[20] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ue, {
              variant: u.value ? "danger" : "primary",
              disabled: !v.value || !g.value.trim() || f.value || x.value,
              loading: f.value,
              onClick: z
            }, {
              default: l(() => [
                y(a(f.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Jw, [
      e("div", Yw, [
        m[22] || (m[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: m[6] || (m[6] = (_) => i("close"))
        }, [...m[21] || (m[21] = [
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
      e("div", Xw, [
        t.status && v.value ? (s(), o("div", Qw, [
          t.status.workflows.new.length ? (s(), o("div", Zw, [
            m[23] || (m[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", e0, [
            m[24] || (m[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", t0, [
            m[25] || (m[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", s0, [
            m[26] || (m[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", o0, [
            m[27] || (m[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          p.value ? d("", !0) : (s(), o("div", n0, [...m[28] || (m[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", a0, " No changes to commit ")) : (s(), o("div", l0, " Loading... ")),
        b.value ? (s(), o("div", i0, [
          e("div", r0, [
            m[29] || (m[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", d0, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", c0, [
            (s(!0), o(V, null, ee(w.value, (_) => (s(), o("div", {
              key: _.name,
              class: "issue-item"
            }, [
              e("strong", null, a(_.name), 1),
              y(": " + a(_.issue_summary), 1)
            ]))), 128))
          ]),
          k($s, {
            modelValue: u.value,
            "onUpdate:modelValue": m[7] || (m[7] = (_) => u.value = _),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...m[30] || (m[30] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", u0, [
          k(_s, {
            modelValue: g.value,
            "onUpdate:modelValue": m[8] || (m[8] = (_) => g.value = _),
            placeholder: x.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || f.value || x.value,
            rows: 3,
            onCtrlEnter: z
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (s(), o("div", {
          key: 4,
          class: le(["result", r.value.type])
        }, a(r.value.message), 3)) : d("", !0)
      ]),
      e("div", m0, [
        k(ue, {
          variant: "secondary",
          onClick: m[9] || (m[9] = (_) => i("close"))
        }, {
          default: l(() => [...m[31] || (m[31] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(ue, {
          variant: u.value ? "danger" : "primary",
          disabled: !v.value || !g.value.trim() || f.value || x.value,
          loading: f.value,
          onClick: z
        }, {
          default: l(() => [
            y(a(f.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Os = /* @__PURE__ */ Q(v0, [["__scopeId", "data-v-aa2a9bdf"]]), f0 = { class: "modal-header" }, g0 = { class: "modal-body" }, p0 = { class: "switch-message" }, h0 = { class: "switch-details" }, y0 = { class: "modal-actions" }, w0 = /* @__PURE__ */ X({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), T(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", f0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", g0, [
            e("p", p0, [
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
            e("p", h0, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", y0, [
            k(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Z, {
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
}), k0 = /* @__PURE__ */ Q(w0, [["__scopeId", "data-v-e9c5253e"]]), b0 = {
  key: 0,
  class: "modal-overlay"
}, _0 = { class: "modal-content" }, $0 = { class: "modal-body" }, C0 = { class: "progress-info" }, x0 = { class: "progress-percentage" }, S0 = { class: "progress-state" }, I0 = { class: "switch-steps" }, E0 = { class: "step-icon" }, M0 = { class: "step-label" }, T0 = /* @__PURE__ */ X({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = P(() => {
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
    }), i = P(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), h = P(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], f = g.findIndex((u) => u.state === c.state);
      return g.map((u, r) => {
        let v = "pending", p = "○";
        return r < f ? (v = "completed", p = "✓") : r === f && (v = "active", p = "⟳"), {
          ...u,
          status: v,
          icon: p
        };
      });
    });
    return (g, f) => (s(), T(Fe, { to: "body" }, [
      t.show ? (s(), o("div", b0, [
        e("div", _0, [
          f[1] || (f[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", $0, [
            k(Us, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", C0, [
              e("div", x0, a(t.progress) + "%", 1),
              e("div", S0, a(n.value), 1)
            ]),
            e("div", I0, [
              (s(!0), o(V, null, ee(h.value, (u) => (s(), o("div", {
                key: u.state,
                class: le(["switch-step", u.status])
              }, [
                e("span", E0, a(u.icon), 1),
                e("span", M0, a(u.label), 1)
              ], 2))), 128))
            ]),
            f[0] || (f[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), z0 = /* @__PURE__ */ Q(T0, [["__scopeId", "data-v-768a5078"]]), R0 = { class: "modal-header" }, L0 = { class: "modal-body" }, P0 = {
  key: 0,
  class: "node-section"
}, D0 = { class: "node-list" }, N0 = {
  key: 1,
  class: "node-section"
}, U0 = { class: "node-list" }, O0 = { class: "modal-actions" }, B0 = /* @__PURE__ */ X({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), T(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", R0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", L0, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", P0, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", D0, [
                (s(!0), o(V, null, ee(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", N0, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", U0, [
                (s(!0), o(V, null, ee(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
          e("div", O0, [
            k(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Z, {
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
}), F0 = /* @__PURE__ */ Q(B0, [["__scopeId", "data-v-7cad7518"]]), A0 = {
  key: 0,
  class: "wizard-steps"
}, V0 = { class: "step-number" }, W0 = {
  key: 1,
  class: "wizard-steps wizard-steps--single"
}, j0 = {
  key: 2,
  class: "wizard-step"
}, G0 = { class: "form-field" }, q0 = ["placeholder"], H0 = {
  key: 0,
  class: "form-error"
}, K0 = { class: "form-field form-field--checkbox" }, J0 = { class: "form-checkbox" }, Y0 = {
  key: 0,
  class: "form-field"
}, X0 = ["placeholder"], Q0 = {
  key: 0,
  class: "form-info"
}, Z0 = {
  key: 1,
  class: "form-suggestion"
}, ek = {
  key: 2,
  class: "form-error"
}, tk = {
  key: 3,
  class: "form-info"
}, sk = {
  key: 3,
  class: "wizard-step"
}, ok = {
  key: 0,
  class: "cli-warning"
}, nk = {
  key: 1,
  class: "env-selection"
}, ak = { class: "env-list" }, lk = ["value"], ik = { class: "env-name" }, rk = { class: "env-actions" }, dk = { key: 2 }, ck = { class: "wizard-intro" }, uk = { class: "form-field" }, mk = { class: "form-field" }, vk = ["value"], fk = { class: "form-field" }, gk = ["disabled"], pk = ["value"], hk = { class: "form-field" }, yk = ["value"], wk = { class: "form-field form-field--checkbox" }, kk = { class: "form-checkbox" }, bk = {
  key: 1,
  class: "form-error"
}, Kt = 10, _k = 600 * 1e3, $k = 1800 * 1e3, Ck = /* @__PURE__ */ X({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {},
    initialStep: {},
    existingEnvironments: {},
    cliInstalled: { type: Boolean },
    setupState: {}
  },
  emits: ["complete", "close", "switch-environment", "environment-created-no-switch"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      initializeWorkspace: h,
      getInitializeProgress: g,
      validatePath: f,
      createEnvironment: u,
      getCreateProgress: r,
      getComfyUIReleases: v
    } = Oe(), p = C(n.initialStep || 1), w = C(null), b = C(!1), x = C(n.defaultPath), z = C(!!n.detectedModelsDir), N = C(n.detectedModelsDir || ""), m = C(null), _ = C(null), L = C(null), I = C(null), $ = C("my-new-env"), j = C(Ds), W = C("latest"), K = C(Ns), D = C(!0), S = C(null), E = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), U = C(!1), B = C(!1), ne = C(!1), we = C({ progress: 0, message: "" }), me = C({ progress: 0, message: "" }), se = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], F = C(0), M = C(null), ie = C(0), te = C(null), Ee = P(() => {
      var xe, Me;
      const fe = (xe = x.value) == null ? void 0 : xe.trim(), H = !m.value, Ie = !z.value || !_.value && ((Me = N.value) == null ? void 0 : Me.trim());
      return fe && H && Ie;
    }), be = P(() => {
      var fe;
      return (fe = $.value) == null ? void 0 : fe.trim();
    });
    async function ae() {
      var fe;
      if (m.value = null, !!((fe = x.value) != null && fe.trim()))
        try {
          const H = await f({ path: x.value, type: "workspace" });
          H.valid || (m.value = H.error || "Invalid path");
        } catch (H) {
          m.value = H instanceof Error ? H.message : "Validation failed";
        }
    }
    async function oe() {
      var fe;
      if (_.value = null, L.value = null, I.value = null, !!((fe = N.value) != null && fe.trim()))
        try {
          const H = await f({ path: N.value, type: "models" });
          if (H.valid)
            I.value = H.model_count ?? null;
          else if (_.value = H.error || "Invalid path", H.suggestion) {
            L.value = H.suggestion, N.value = H.suggestion, _.value = null;
            const Ie = await f({ path: H.suggestion, type: "models" });
            Ie.valid && (I.value = Ie.model_count ?? null);
          }
        } catch (H) {
          _.value = H instanceof Error ? H.message : "Validation failed";
        }
    }
    async function re() {
      var fe, H, Ie;
      if (m.value = null, _.value = null, await ae(), !m.value && !(z.value && ((fe = N.value) != null && fe.trim()) && (await oe(), _.value))) {
        B.value = !0;
        try {
          await h({
            workspace_path: ((H = x.value) == null ? void 0 : H.trim()) || n.defaultPath,
            models_directory: z.value && ((Ie = N.value) == null ? void 0 : Ie.trim()) || null
          }), F.value = 0, M.value = Date.now();
          const xe = setInterval(async () => {
            if (M.value && Date.now() - M.value > _k) {
              clearInterval(xe), B.value = !1, m.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Me = await g();
              if (F.value = 0, Me.state === "idle" && B.value) {
                clearInterval(xe), B.value = !1, m.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              we.value = { progress: Me.progress, message: Me.message }, Me.state === "complete" ? (clearInterval(xe), B.value = !1, p.value = 2, ze()) : Me.state === "error" && (clearInterval(xe), B.value = !1, m.value = Me.error || "Workspace creation failed");
            } catch (Me) {
              F.value++, console.warn(`Polling failure ${F.value}/${Kt}:`, Me), F.value >= Kt && (clearInterval(xe), B.value = !1, m.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (xe) {
          B.value = !1, m.value = xe instanceof Error ? xe.message : "Failed to create workspace";
        }
      }
    }
    async function ve() {
      ne.value = !0, S.value = null;
      try {
        const fe = {
          name: $.value.trim() || "my-new-env",
          python_version: j.value,
          comfyui_version: W.value,
          torch_backend: K.value,
          switch_after: D.value
        };
        if ((await u(fe)).status === "started") {
          ie.value = 0, te.value = Date.now();
          const Ie = setInterval(async () => {
            if (te.value && Date.now() - te.value > $k) {
              clearInterval(Ie), ne.value = !1, S.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const xe = await r();
              if (ie.value = 0, xe.state === "idle" && ne.value) {
                clearInterval(Ie), ne.value = !1, S.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (me.value = {
                progress: xe.progress ?? 0,
                message: xe.message,
                phase: xe.phase
              }, xe.state === "complete") {
                clearInterval(Ie), ne.value = !1;
                const Me = xe.environment_name || fe.name;
                D.value ? i("complete", Me) : (b.value = !1, i("environment-created-no-switch", Me));
              } else xe.state === "error" && (clearInterval(Ie), ne.value = !1, S.value = xe.error || "Environment creation failed");
            } catch (xe) {
              ie.value++, console.warn(`Polling failure ${ie.value}/${Kt}:`, xe), ie.value >= Kt && (clearInterval(Ie), ne.value = !1, S.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (fe) {
        ne.value = !1, S.value = fe instanceof Error ? fe.message : "Unknown error";
      }
    }
    async function ze() {
      U.value = !0;
      try {
        E.value = await v();
      } catch (fe) {
        console.error("Failed to load ComfyUI releases:", fe);
      } finally {
        U.value = !1;
      }
    }
    function pe() {
      w.value && i("switch-environment", w.value);
    }
    return Ue(() => {
      n.detectedModelsDir && (N.value = n.detectedModelsDir), p.value === 2 && ze();
    }), (fe, H) => (s(), T(Ke, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: H[12] || (H[12] = (Ie) => fe.$emit("close"))
    }, {
      body: l(() => {
        var Ie, xe, Me;
        return [
          n.setupState === "no_workspace" ? (s(), o("div", A0, [
            e("div", {
              class: le(["step", { active: p.value === 1, complete: p.value > 1 }])
            }, [
              e("span", V0, a(p.value > 1 ? "✓" : "1"), 1),
              H[13] || (H[13] = e("span", { class: "step-label" }, "Workspace", -1))
            ], 2),
            H[15] || (H[15] = e("div", { class: "step-connector" }, null, -1)),
            e("div", {
              class: le(["step", { active: p.value === 2 }])
            }, [...H[14] || (H[14] = [
              e("span", { class: "step-number" }, "2", -1),
              e("span", { class: "step-label" }, "Environment", -1)
            ])], 2)
          ])) : (s(), o("div", W0, [...H[16] || (H[16] = [
            e("div", { class: "step active" }, [
              e("span", { class: "step-number" }, "1"),
              e("span", { class: "step-label" }, "Environment")
            ], -1)
          ])])),
          p.value === 1 ? (s(), o("div", j0, [
            H[20] || (H[20] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
            e("div", G0, [
              H[17] || (H[17] = e("label", { class: "form-label" }, "Workspace Path", -1)),
              Ne(e("input", {
                "onUpdate:modelValue": H[0] || (H[0] = (ce) => x.value = ce),
                type: "text",
                class: "form-input",
                placeholder: t.defaultPath,
                onBlur: ae
              }, null, 40, q0), [
                [Mt, x.value]
              ]),
              m.value ? (s(), o("p", H0, a(m.value), 1)) : d("", !0)
            ]),
            e("div", K0, [
              e("label", J0, [
                Ne(e("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": H[1] || (H[1] = (ce) => z.value = ce)
                }, null, 512), [
                  [Qt, z.value]
                ]),
                H[18] || (H[18] = e("span", null, "I have existing ComfyUI models", -1))
              ])
            ]),
            z.value ? (s(), o("div", Y0, [
              H[19] || (H[19] = e("label", { class: "form-label" }, "Models Directory", -1)),
              Ne(e("input", {
                "onUpdate:modelValue": H[2] || (H[2] = (ce) => N.value = ce),
                type: "text",
                class: "form-input",
                placeholder: t.detectedModelsDir || "/path/to/models",
                onBlur: oe
              }, null, 40, X0), [
                [Mt, N.value]
              ]),
              t.detectedModelsDir && !N.value ? (s(), o("p", Q0, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
              L.value ? (s(), o("p", Z0, " Did you mean: " + a(L.value), 1)) : d("", !0),
              _.value ? (s(), o("p", ek, a(_.value), 1)) : d("", !0),
              I.value !== null && !_.value ? (s(), o("p", tk, " Found " + a(I.value) + " model files ", 1)) : d("", !0)
            ])) : d("", !0),
            B.value ? (s(), T(ts, {
              key: 1,
              progress: we.value.progress,
              message: we.value.message
            }, null, 8, ["progress", "message"])) : d("", !0)
          ])) : d("", !0),
          p.value === 2 ? (s(), o("div", sk, [
            n.cliInstalled ? d("", !0) : (s(), o("div", ok, [...H[21] || (H[21] = [
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
            (Ie = n.existingEnvironments) != null && Ie.length && !b.value ? (s(), o("div", nk, [
              H[23] || (H[23] = e("p", { class: "wizard-intro" }, " You have existing managed environments. Switch to one, or create a new environment: ", -1)),
              e("div", ak, [
                (s(!0), o(V, null, ee(n.existingEnvironments, (ce) => (s(), o("label", {
                  key: ce,
                  class: le(["env-option", { selected: w.value === ce }])
                }, [
                  Ne(e("input", {
                    type: "radio",
                    name: "env-select",
                    value: ce,
                    "onUpdate:modelValue": H[3] || (H[3] = (Je) => w.value = Je)
                  }, null, 8, lk), [
                    [Jt, w.value]
                  ]),
                  e("span", ik, a(ce), 1)
                ], 2))), 128))
              ]),
              e("div", rk, [
                w.value ? (s(), T(ue, {
                  key: 0,
                  variant: "primary",
                  onClick: pe
                }, {
                  default: l(() => [
                    y(" Switch to " + a(w.value), 1)
                  ]),
                  _: 1
                })) : d("", !0),
                k(ue, {
                  variant: "secondary",
                  onClick: H[4] || (H[4] = (ce) => b.value = !0)
                }, {
                  default: l(() => [...H[22] || (H[22] = [
                    y(" + Create New Environment ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0),
            b.value || !((xe = n.existingEnvironments) != null && xe.length) ? (s(), o("div", dk, [
              e("p", ck, a((Me = n.existingEnvironments) != null && Me.length ? "Create a new managed environment:" : "Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows."), 1),
              e("div", uk, [
                H[24] || (H[24] = e("label", { class: "form-label" }, "Environment Name", -1)),
                Ne(e("input", {
                  "onUpdate:modelValue": H[5] || (H[5] = (ce) => $.value = ce),
                  type: "text",
                  class: "form-input",
                  placeholder: "my-new-env"
                }, null, 512), [
                  [Mt, $.value]
                ])
              ]),
              e("div", mk, [
                H[25] || (H[25] = e("label", { class: "form-label" }, "Python Version", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": H[6] || (H[6] = (ce) => j.value = ce),
                  class: "form-select"
                }, [
                  (s(!0), o(V, null, ee($e(Ps), (ce) => (s(), o("option", {
                    key: ce,
                    value: ce
                  }, a(ce), 9, vk))), 128))
                ], 512), [
                  [Tt, j.value]
                ])
              ]),
              e("div", fk, [
                H[26] || (H[26] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": H[7] || (H[7] = (ce) => W.value = ce),
                  class: "form-select",
                  disabled: U.value
                }, [
                  (s(!0), o(V, null, ee(E.value, (ce) => (s(), o("option", {
                    key: ce.tag_name,
                    value: ce.tag_name
                  }, a(ce.name), 9, pk))), 128))
                ], 8, gk), [
                  [Tt, W.value]
                ])
              ]),
              e("div", hk, [
                H[27] || (H[27] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": H[8] || (H[8] = (ce) => K.value = ce),
                  class: "form-select"
                }, [
                  (s(!0), o(V, null, ee($e(fs), (ce) => (s(), o("option", {
                    key: ce,
                    value: ce
                  }, a(ce) + a(ce === "auto" ? " (detect GPU)" : ""), 9, yk))), 128))
                ], 512), [
                  [Tt, K.value]
                ])
              ]),
              e("div", wk, [
                e("label", kk, [
                  Ne(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": H[9] || (H[9] = (ce) => D.value = ce)
                  }, null, 512), [
                    [Qt, D.value]
                  ]),
                  H[28] || (H[28] = e("span", null, "Switch to this environment after creation", -1))
                ])
              ]),
              ne.value ? (s(), T(ts, {
                key: 0,
                progress: me.value.progress,
                message: me.value.message,
                "current-phase": me.value.phase,
                "show-steps": !0,
                steps: se
              }, null, 8, ["progress", "message", "current-phase"])) : d("", !0),
              S.value ? (s(), o("div", bk, a(S.value), 1)) : d("", !0)
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => {
        var Ie, xe;
        return [
          p.value === 1 ? (s(), T(ue, {
            key: 0,
            variant: "primary",
            disabled: !Ee.value || B.value,
            onClick: re
          }, {
            default: l(() => [
              y(a(B.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : p.value === 2 ? (s(), o(V, { key: 1 }, [
            n.setupState === "no_workspace" ? (s(), T(ue, {
              key: 0,
              variant: "secondary",
              disabled: ne.value,
              onClick: H[10] || (H[10] = (Me) => p.value = 1)
            }, {
              default: l(() => [...H[29] || (H[29] = [
                y(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (Ie = n.existingEnvironments) != null && Ie.length && b.value ? (s(), T(ue, {
              key: 1,
              variant: "secondary",
              disabled: ne.value,
              onClick: H[11] || (H[11] = (Me) => b.value = !1)
            }, {
              default: l(() => [...H[30] || (H[30] = [
                y(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : d("", !0),
            b.value || !((xe = n.existingEnvironments) != null && xe.length) ? (s(), T(ue, {
              key: 2,
              variant: "primary",
              disabled: !be.value || ne.value,
              onClick: ve
            }, {
              default: l(() => [
                y(a(ne.value ? "Creating..." : D.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : d("", !0)
          ], 64)) : d("", !0)
        ];
      }),
      _: 1
    }));
  }
}), xk = /* @__PURE__ */ Q(Ck, [["__scopeId", "data-v-b8c35e2d"]]), Sk = { class: "comfygit-panel" }, Ik = { class: "panel-header" }, Ek = { class: "header-left" }, Mk = {
  key: 0,
  class: "header-info"
}, Tk = { class: "header-actions" }, zk = { class: "env-switcher" }, Rk = {
  key: 0,
  class: "header-info"
}, Lk = { class: "branch-name" }, Pk = { class: "panel-main" }, Dk = { class: "sidebar" }, Nk = { class: "sidebar-content" }, Uk = { class: "sidebar-section" }, Ok = { class: "sidebar-section" }, Bk = { class: "sidebar-section" }, Fk = { class: "content-area" }, Ak = {
  key: 0,
  class: "error-message"
}, Vk = {
  key: 1,
  class: "loading"
}, Wk = { class: "dialog-content env-selector-dialog" }, jk = { class: "dialog-header" }, Gk = { class: "dialog-body" }, qk = { class: "env-list" }, Hk = { class: "env-info" }, Kk = { class: "env-name-row" }, Jk = { class: "env-indicator" }, Yk = { class: "env-name" }, Xk = {
  key: 0,
  class: "env-branch"
}, Qk = {
  key: 1,
  class: "current-label"
}, Zk = { class: "env-stats" }, eb = ["onClick"], tb = { class: "toast-container" }, sb = { class: "toast-message" }, ob = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: h,
      getHistory: g,
      getBranches: f,
      checkout: u,
      createBranch: r,
      switchBranch: v,
      deleteBranch: p,
      getEnvironments: w,
      switchEnvironment: b,
      getSwitchProgress: x,
      deleteEnvironment: z,
      syncEnvironmentManually: N,
      repairWorkflowModels: m,
      getSetupStatus: _
    } = Oe(), L = Ms();
    function I(G) {
      window.open(G, "_blank", "noopener,noreferrer");
    }
    const $ = C(null), j = C([]), W = C([]), K = C([]), D = P(() => K.value.find((G) => G.is_current)), S = C(null), E = C(!1), U = C(1), B = P(() => {
      var G;
      return ((G = S.value) == null ? void 0 : G.state) || "managed";
    }), ne = C(!1), we = C(null), me = C(null), se = C(!1), F = C(null), M = C(null), ie = C(null), te = C(!1), Ee = C(!1), be = C(""), ae = C({ state: "idle", progress: 0, message: "" });
    let oe = null, re = null;
    const ve = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ze = n.initialView ? ve[n.initialView] : null, pe = C((ze == null ? void 0 : ze.view) ?? "status"), fe = C((ze == null ? void 0 : ze.section) ?? "this-env");
    function H(G, R) {
      pe.value = G, fe.value = R;
    }
    function Ie(G) {
      const ge = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      ge && H(ge.view, ge.section);
    }
    function xe() {
      H("branches", "this-env");
    }
    function Me() {
      i("close"), setTimeout(() => {
        var R;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const ge of G)
          if (((R = ge.textContent) == null ? void 0 : R.trim()) === "Manager") {
            ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ce = C(null), Je = C(!1), et = C(!1), Ye = C([]);
    let bt = 0;
    function ke(G, R = "info", ge = 3e3) {
      const Te = ++bt;
      return Ye.value.push({ id: Te, message: G, type: R }), ge > 0 && setTimeout(() => {
        Ye.value = Ye.value.filter((Ve) => Ve.id !== Te);
      }, ge), Te;
    }
    function Ae(G) {
      Ye.value = Ye.value.filter((R) => R.id !== G);
    }
    function _t(G, R) {
      ke(G, R);
    }
    const ut = P(() => {
      if (!$.value) return "neutral";
      const G = $.value.workflows, R = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || $.value.has_changes;
      return $.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    P(() => $.value ? ut.value === "success" ? "All synced" : ut.value === "warning" ? "Uncommitted changes" : ut.value === "error" ? "Not synced" : "" : "");
    async function Pe() {
      ne.value = !0, we.value = null;
      try {
        const [G, R, ge, Te] = await Promise.all([
          h(!0),
          g(),
          f(),
          w()
        ]);
        $.value = G, j.value = R.commits, W.value = ge.branches, K.value = Te, i("statusUpdate", G), F.value && await F.value.loadWorkflows(!0);
      } catch (G) {
        we.value = G instanceof Error ? G.message : "Failed to load status", $.value = null, j.value = [], W.value = [];
      } finally {
        ne.value = !1;
      }
    }
    function $t(G) {
      me.value = G;
    }
    async function lt(G) {
      var ge;
      me.value = null;
      const R = $.value && ($.value.workflows.new.length > 0 || $.value.workflows.modified.length > 0 || $.value.workflows.deleted.length > 0 || $.value.has_changes);
      ce.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((ge = G.hash) == null ? void 0 : ge.slice(0, 7))}?`,
        details: R ? hs() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var We;
          ce.value = null, ye();
          const Te = ke(`Checking out ${G.short_hash || ((We = G.hash) == null ? void 0 : We.slice(0, 7))}...`, "info", 0), Ve = await u(G.hash, R);
          Ae(Te), Ve.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Ve.message || "Checkout failed", "error");
        }
      };
    }
    async function J(G) {
      const R = $.value && ($.value.workflows.new.length > 0 || $.value.workflows.modified.length > 0 || $.value.workflows.deleted.length > 0 || $.value.has_changes);
      ce.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: R ? hs() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ce.value = null, ye();
          const ge = ke(`Switching to ${G}...`, "info", 0), Te = await v(G, R);
          Ae(ge), Te.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Te.message || "Branch switch failed", "error");
        }
      };
    }
    async function O(G) {
      const R = ke(`Creating branch ${G}...`, "info", 0), ge = await r(G);
      Ae(R), ge.status === "success" ? (ke(`Branch "${G}" created`, "success"), await Pe()) : ke(ge.message || "Failed to create branch", "error");
    }
    async function A(G, R = !1) {
      const ge = async (Te) => {
        var We;
        const Ve = ke(`Deleting branch ${G}...`, "info", 0);
        try {
          const ft = await p(G, Te);
          Ae(Ve), ft.status === "success" ? (ke(`Branch "${G}" deleted`, "success"), await Pe()) : (We = ft.message) != null && We.includes("not fully merged") ? ce.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ce.value = null, await ge(!0);
            }
          } : ke(ft.message || "Failed to delete branch", "error");
        } catch (ft) {
          Ae(Ve);
          const Pt = ft instanceof Error ? ft.message : "Failed to delete branch";
          Pt.includes("not fully merged") ? ce.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ce.value = null, await ge(!0);
            }
          } : ke(Pt, "error");
        }
      };
      ce.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ce.value = null, await ge(R);
        }
      };
    }
    async function Y(G) {
      me.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const ge = ke(`Creating branch ${R}...`, "info", 0), Te = await r(R, G.hash);
        Ae(ge), Te.status === "success" ? (ke(`Branch "${R}" created from ${G.short_hash}`, "success"), await Pe()) : ke(Te.message || "Failed to create branch", "error");
      }
    }
    function ye() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function it() {
      ce.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          ce.value = null, ye(), ke("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function mt() {
      ce.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          ce.value = null, ke("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function tt(G) {
      se.value = !1, be.value = G, te.value = !0;
    }
    async function xt() {
      te.value = !1, Ee.value = !0, ye(), ae.value = {
        progress: 10,
        state: vt(10),
        message: St(10)
      };
      try {
        await b(be.value), q(), _e();
      } catch (G) {
        de(), Ee.value = !1, ke(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), ae.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function vt(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function St(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[vt(G)] || "";
    }
    function q() {
      if (re) return;
      let G = 10;
      const R = 60, ge = 5e3, Te = 100, Ve = (R - G) / (ge / Te);
      re = window.setInterval(() => {
        if (G += Ve, G >= R && (G = R, de()), ae.value.progress < R) {
          const We = Math.floor(G);
          ae.value = {
            progress: We,
            state: vt(We),
            message: St(We)
          };
        }
      }, Te);
    }
    function de() {
      re && (clearInterval(re), re = null);
    }
    function _e() {
      oe || (oe = window.setInterval(async () => {
        try {
          let G = await L.getStatus();
          if ((!G || G.state === "idle") && (G = await x()), !G)
            return;
          const R = G.progress || 0;
          R >= 60 && de();
          const ge = Math.max(R, ae.value.progress), Te = G.state && G.state !== "idle" && G.state !== "unknown", Ve = Te ? G.state : vt(ge), We = Te && G.message || St(ge);
          ae.value = {
            state: Ve,
            progress: ge,
            message: We
          }, G.state === "complete" ? (de(), Re(), Ee.value = !1, ke(`✓ Switched to ${be.value}`, "success"), await Pe(), be.value = "") : G.state === "rolled_back" ? (de(), Re(), Ee.value = !1, ke("Switch failed, restored previous environment", "warning"), be.value = "") : G.state === "critical_failure" && (de(), Re(), Ee.value = !1, ke(`Critical error during switch: ${G.message}`, "error"), be.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function Re() {
      de(), oe && (clearInterval(oe), oe = null);
    }
    function Xe() {
      var G;
      te.value = !1, be.value = "", (G = S.value) != null && G.state && S.value.state !== "managed" && (U.value = S.value.state === "no_workspace" ? 1 : 2, E.value = !0);
    }
    async function It() {
      Je.value = !1, await Pe(), ke("✓ Changes committed", "success");
    }
    async function qt() {
      et.value = !1;
      const G = ke("Syncing environment...", "info", 0);
      try {
        const R = await N("skip", !0);
        if (Ae(G), R.status === "success") {
          const ge = [];
          R.nodes_installed.length && ge.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && ge.push(`${R.nodes_removed.length} removed`);
          const Te = ge.length ? `: ${ge.join(", ")}` : "";
          ke(`✓ Environment synced${Te}`, "success"), await Pe();
        } else {
          const ge = R.errors.length ? R.errors.join("; ") : R.message;
          ke(`Sync failed: ${ge}`, "error");
        }
      } catch (R) {
        Ae(G), ke(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function Ht(G) {
      var R;
      try {
        const ge = await m(G);
        ge.failed.length === 0 ? ke(`✓ Repaired ${ge.success} workflow${ge.success === 1 ? "" : "s"}`, "success") : ke(`Repaired ${ge.success}, failed: ${ge.failed.length}`, "warning"), await Pe();
      } catch (ge) {
        ke(`Repair failed: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
      } finally {
        (R = ie.value) == null || R.resetRepairingState();
      }
    }
    async function js(G, R) {
      ke(`Environment '${G}' created`, "success"), await Pe(), M.value && await M.value.loadEnvironments(), R && await tt(G);
    }
    async function Gs(G) {
      var R;
      if (((R = D.value) == null ? void 0 : R.name) === G) {
        ke("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ce.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${G}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ce.value = null;
          try {
            const ge = await z(G);
            ge.status === "success" ? (ke(`Environment "${G}" deleted`, "success"), await Pe(), M.value && await M.value.loadEnvironments()) : ke(ge.message || "Failed to delete environment", "error");
          } catch (ge) {
            ke(`Error deleting environment: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function qs(G) {
      E.value = !1;
      try {
        S.value = await _();
      } catch {
      }
      await tt(G);
    }
    function Hs() {
      E.value = !1, i("close");
    }
    async function Ks(G) {
      await tt(G);
    }
    async function Js(G) {
      await Pe(), await tt(G);
    }
    async function Ys(G) {
      S.value = await _(), console.log(`Environment '${G}' created. Available for switching.`);
    }
    function Xs() {
      H("environments", "all-envs"), setTimeout(() => {
        var G;
        (G = M.value) == null || G.openCreateModal();
      }, 100);
    }
    function hs() {
      if (!$.value) return [];
      const G = [], R = $.value.workflows;
      return R.new.length && G.push(`${R.new.length} new workflow(s)`), R.modified.length && G.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && G.push(`${R.deleted.length} deleted workflow(s)`), G;
    }
    return Ue(async () => {
      try {
        if (S.value = await _(), S.value.state === "no_workspace") {
          E.value = !0, U.value = 1;
          return;
        }
        if (S.value.state === "empty_workspace") {
          E.value = !0, U.value = 2;
          return;
        }
        if (S.value.state === "unmanaged") {
          E.value = !0, U.value = 2;
          return;
        }
      } catch (G) {
        console.warn("Setup status check failed, proceeding normally:", G);
      }
      await Pe();
    }), (G, R) => {
      var ge, Te, Ve, We, ft, Pt, ys, ws, ks;
      return s(), o("div", Sk, [
        e("div", Ik, [
          e("div", Ek, [
            R[34] || (R[34] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            $.value ? (s(), o("div", Mk)) : d("", !0)
          ]),
          e("div", Tk, [
            e("button", {
              class: "sponsor-btn",
              onClick: R[0] || (R[0] = (he) => I("https://github.com/sponsors/comfyhub-org")),
              title: "Sponsor ComfyHub",
              "aria-label": "Sponsor ComfyHub on GitHub"
            }, [...R[35] || (R[35] = [
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
              onClick: R[1] || (R[1] = (he) => I("https://discord.gg/2h5rSTeh6Y")),
              title: "Join Discord",
              "aria-label": "Join ComfyHub Discord"
            }, [...R[36] || (R[36] = [
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
              onClick: R[2] || (R[2] = (he) => I("https://x.com/akatz_ai")),
              title: "Follow on X",
              "aria-label": "Follow on X"
            }, [...R[37] || (R[37] = [
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
              onClick: R[3] || (R[3] = (he) => I("https://github.com/comfyhub-org/comfygit")),
              title: "View on GitHub",
              "aria-label": "View ComfyGit on GitHub"
            }, [...R[38] || (R[38] = [
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
              onClick: R[4] || (R[4] = (he) => I("https://docs.comfyhub.org/comfygit/")),
              title: "Documentation",
              "aria-label": "View ComfyGit Documentation"
            }, [...R[39] || (R[39] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" })
              ], -1)
            ])]),
            R[42] || (R[42] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: le(["icon-btn", { spinning: ne.value }]),
              onClick: Pe,
              title: "Refresh"
            }, [...R[40] || (R[40] = [
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
              onClick: R[5] || (R[5] = (he) => i("close")),
              title: "Close"
            }, [...R[41] || (R[41] = [
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
        e("div", zk, [
          e("div", { class: "env-switcher-header" }, [
            R[43] || (R[43] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: it
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: mt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[6] || (R[6] = (he) => H("environments", "all-envs"))
          }, [
            $.value ? (s(), o("div", Rk, [
              e("span", null, a(((ge = D.value) == null ? void 0 : ge.name) || ((Te = $.value) == null ? void 0 : Te.environment) || "Loading..."), 1),
              e("span", Lk, "(" + a($.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            R[44] || (R[44] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Pk, [
          e("div", Dk, [
            e("div", Nk, [
              e("div", Uk, [
                R[45] || (R[45] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "status" && fe.value === "this-env" }]),
                  onClick: R[7] || (R[7] = (he) => H("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "workflows" }]),
                  onClick: R[8] || (R[8] = (he) => H("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "models-env" }]),
                  onClick: R[9] || (R[9] = (he) => H("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "branches" }]),
                  onClick: R[10] || (R[10] = (he) => H("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "history" }]),
                  onClick: R[11] || (R[11] = (he) => H("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "nodes" }]),
                  onClick: R[12] || (R[12] = (he) => H("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "debug-env" }]),
                  onClick: R[13] || (R[13] = (he) => H("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              R[48] || (R[48] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Ok, [
                R[46] || (R[46] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "environments" }]),
                  onClick: R[14] || (R[14] = (he) => H("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "model-index" }]),
                  onClick: R[15] || (R[15] = (he) => H("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "settings" }]),
                  onClick: R[16] || (R[16] = (he) => H("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "debug-workspace" }]),
                  onClick: R[17] || (R[17] = (he) => H("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              R[49] || (R[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Bk, [
                R[47] || (R[47] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "export" }]),
                  onClick: R[18] || (R[18] = (he) => H("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "import" }]),
                  onClick: R[19] || (R[19] = (he) => H("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "remotes" }]),
                  onClick: R[20] || (R[20] = (he) => H("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            R[50] || (R[50] = to('<div class="sidebar-footer" data-v-26453eb3><span class="version" data-v-26453eb3>v0.0.1</span><span class="made-by" data-v-26453eb3>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-26453eb3><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-26453eb3></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", Fk, [
            we.value ? (s(), o("div", Ak, a(we.value), 1)) : !$.value && pe.value === "status" ? (s(), o("div", Vk, " Loading status... ")) : (s(), o(V, { key: 2 }, [
              pe.value === "status" ? (s(), T(Ma, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ie,
                status: $.value,
                "setup-state": B.value,
                onSwitchBranch: xe,
                onCommitChanges: R[21] || (R[21] = (he) => Je.value = !0),
                onSyncEnvironment: R[22] || (R[22] = (he) => et.value = !0),
                onViewWorkflows: R[23] || (R[23] = (he) => H("workflows", "this-env")),
                onViewHistory: R[24] || (R[24] = (he) => H("history", "this-env")),
                onViewDebug: R[25] || (R[25] = (he) => H("debug-env", "this-env")),
                onRepairMissingModels: Ht,
                onStartSetup: R[26] || (R[26] = (he) => E.value = !0),
                onViewEnvironments: R[27] || (R[27] = (he) => H("environments", "all-envs")),
                onCreateEnvironment: Xs
              }, null, 8, ["status", "setup-state"])) : pe.value === "workflows" ? (s(), T(Xu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: F,
                onRefresh: Pe
              }, null, 512)) : pe.value === "models-env" ? (s(), T(Lm, {
                key: 2,
                onNavigate: Ie
              })) : pe.value === "branches" ? (s(), T(ja, {
                key: 3,
                branches: W.value,
                current: ((Ve = $.value) == null ? void 0 : Ve.branch) || null,
                onSwitch: J,
                onCreate: O,
                onDelete: A
              }, null, 8, ["branches", "current"])) : pe.value === "history" ? (s(), T(tl, {
                key: 4,
                commits: j.value,
                onSelect: $t,
                onCheckout: lt
              }, null, 8, ["commits"])) : pe.value === "nodes" ? (s(), T(bv, {
                key: 5,
                onOpenNodeManager: Me
              })) : pe.value === "debug-env" ? (s(), T(Ip, { key: 6 })) : pe.value === "environments" ? (s(), T(Th, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: M,
                onSwitch: tt,
                onCreated: js,
                onDelete: Gs
              }, null, 512)) : pe.value === "model-index" ? (s(), T(Zm, {
                key: 8,
                onRefresh: Pe
              })) : pe.value === "settings" ? (s(), T($p, { key: 9 })) : pe.value === "debug-workspace" ? (s(), T(xp, { key: 10 })) : pe.value === "export" ? (s(), T(r1, { key: 11 })) : pe.value === "import" ? (s(), T(Zy, {
                key: 12,
                onImportCompleteSwitch: Js
              })) : pe.value === "remotes" ? (s(), T(np, {
                key: 13,
                onToast: _t
              })) : d("", !0)
            ], 64))
          ])
        ]),
        me.value ? (s(), T(hw, {
          key: 0,
          commit: me.value,
          onClose: R[28] || (R[28] = (he) => me.value = null),
          onCheckout: lt,
          onCreateBranch: Y
        }, null, 8, ["commit"])) : d("", !0),
        ce.value ? (s(), T(_w, {
          key: 1,
          title: ce.value.title,
          message: ce.value.message,
          details: ce.value.details,
          warning: ce.value.warning,
          confirmLabel: ce.value.confirmLabel,
          cancelLabel: ce.value.cancelLabel,
          secondaryLabel: ce.value.secondaryLabel,
          secondaryAction: ce.value.secondaryAction,
          destructive: ce.value.destructive,
          onConfirm: ce.value.onConfirm,
          onCancel: R[29] || (R[29] = (he) => ce.value = null),
          onSecondary: ce.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        k(k0, {
          show: te.value,
          "from-environment": ((We = D.value) == null ? void 0 : We.name) || "unknown",
          "to-environment": be.value,
          onConfirm: xt,
          onClose: Xe
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Je.value && $.value ? (s(), T(Os, {
          key: 2,
          status: $.value,
          "as-modal": !0,
          onClose: R[30] || (R[30] = (he) => Je.value = !1),
          onCommitted: It
        }, null, 8, ["status"])) : d("", !0),
        et.value && $.value ? (s(), T(F0, {
          key: 3,
          show: et.value,
          "mismatch-details": {
            missing_nodes: $.value.comparison.missing_nodes,
            extra_nodes: $.value.comparison.extra_nodes
          },
          onConfirm: qt,
          onClose: R[31] || (R[31] = (he) => et.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        k(z0, {
          show: Ee.value,
          state: ae.value.state,
          progress: ae.value.progress,
          message: ae.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        se.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[33] || (R[33] = Le((he) => se.value = !1, ["self"]))
        }, [
          e("div", Wk, [
            e("div", jk, [
              R[52] || (R[52] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[32] || (R[32] = (he) => se.value = !1)
              }, [...R[51] || (R[51] = [
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
            e("div", Gk, [
              R[53] || (R[53] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", qk, [
                (s(!0), o(V, null, ee(K.value, (he) => (s(), o("div", {
                  key: he.name,
                  class: le(["env-item", { current: he.is_current }])
                }, [
                  e("div", Hk, [
                    e("div", Kk, [
                      e("span", Jk, a(he.is_current ? "●" : "○"), 1),
                      e("span", Yk, a(he.name), 1),
                      he.current_branch ? (s(), o("span", Xk, "(" + a(he.current_branch) + ")", 1)) : d("", !0),
                      he.is_current ? (s(), o("span", Qk, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Zk, a(he.workflow_count) + " workflows • " + a(he.node_count) + " nodes ", 1)
                  ]),
                  he.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (c_) => tt(he.name)
                  }, " SWITCH ", 8, eb))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        E.value ? (s(), T(xk, {
          key: 5,
          "default-path": ((ft = S.value) == null ? void 0 : ft.default_path) || "~/comfygit",
          "detected-models-dir": ((Pt = S.value) == null ? void 0 : Pt.detected_models_dir) || null,
          "initial-step": U.value,
          "existing-environments": ((ys = S.value) == null ? void 0 : ys.environments) || [],
          "cli-installed": ((ws = S.value) == null ? void 0 : ws.cli_installed) ?? !0,
          "setup-state": ((ks = S.value) == null ? void 0 : ks.state) || "no_workspace",
          onComplete: qs,
          onClose: Hs,
          onSwitchEnvironment: Ks,
          onEnvironmentCreatedNoSwitch: Ys
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state"])) : d("", !0),
        e("div", tb, [
          k(so, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(V, null, ee(Ye.value, (he) => (s(), o("div", {
                key: he.id,
                class: le(["toast", he.type])
              }, [
                e("span", sb, a(he.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), nb = /* @__PURE__ */ Q(ob, [["__scopeId", "data-v-26453eb3"]]), ab = { class: "item-header" }, lb = { class: "item-info" }, ib = { class: "filename" }, rb = { class: "metadata" }, db = { class: "size" }, cb = {
  key: 0,
  class: "type"
}, ub = { class: "item-actions" }, mb = {
  key: 0,
  class: "progress-section"
}, vb = { class: "progress-bar" }, fb = { class: "progress-stats" }, gb = { class: "downloaded" }, pb = { class: "speed" }, hb = {
  key: 0,
  class: "eta"
}, yb = {
  key: 1,
  class: "status-msg paused"
}, wb = {
  key: 2,
  class: "status-msg queued"
}, kb = {
  key: 3,
  class: "status-msg completed"
}, bb = {
  key: 4,
  class: "status-msg failed"
}, _b = {
  key: 0,
  class: "retries"
}, $b = /* @__PURE__ */ X({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(f) {
      if (f === 0) return "?";
      const u = f / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(f / (1024 * 1024)).toFixed(1)} MB`;
    }
    function h(f) {
      return f === 0 ? "-" : `${(f / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(f) {
      if (f < 60) return `${Math.round(f)}s`;
      const u = Math.floor(f / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (f, u) => (s(), o("div", {
      class: le(["download-item", `status-${t.item.status}`])
    }, [
      e("div", ab, [
        e("div", lb, [
          e("div", ib, a(t.item.filename), 1),
          e("div", rb, [
            e("span", db, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", cb, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", ub, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (r) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (r) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (r) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (r) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", mb, [
        e("div", vb, [
          e("div", {
            class: "progress-fill",
            style: pt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", fb, [
          e("span", gb, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", pb, a(h(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", hb, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", yb, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", wb, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", kb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", bb, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", _b, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ Q($b, [["__scopeId", "data-v-2110df65"]]), Cb = { class: "queue-title" }, xb = { class: "count" }, Sb = { class: "queue-actions" }, Ib = { class: "action-label" }, Eb = {
  key: 0,
  class: "overall-progress"
}, Mb = { class: "progress-bar" }, Tb = {
  key: 0,
  class: "current-mini"
}, zb = { class: "filename" }, Rb = { class: "speed" }, Lb = {
  key: 1,
  class: "queue-content"
}, Pb = {
  key: 0,
  class: "section"
}, Db = {
  key: 1,
  class: "section"
}, Nb = { class: "section-header" }, Ub = { class: "section-label paused" }, Ob = { class: "items-list" }, Bb = {
  key: 2,
  class: "section"
}, Fb = { class: "section-header" }, Ab = { class: "section-label" }, Vb = { class: "items-list" }, Wb = {
  key: 3,
  class: "section"
}, jb = { class: "section-header" }, Gb = { class: "section-label" }, qb = { class: "items-list" }, Hb = {
  key: 4,
  class: "section"
}, Kb = { class: "section-header" }, Jb = { class: "section-label failed" }, Yb = { class: "items-list" }, Xb = /* @__PURE__ */ X({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: h,
      failedItems: g,
      pausedItems: f,
      hasItems: u,
      activeCount: r,
      cancelDownload: v,
      retryDownload: p,
      resumeDownload: w,
      resumeAllPaused: b,
      removeItem: x,
      clearCompleted: z
    } = Gt(), N = C(!1);
    let m = null;
    kt(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: f.value.length,
        completed: h.value.length
      }),
      ($, j) => {
        m && (clearTimeout(m), m = null);
        const W = $.active === 0 && $.failed === 0 && $.paused === 0 && $.completed > 0, K = j && (j.active > 0 || j.paused > 0);
        W && K && (m = setTimeout(() => {
          z(), m = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const _ = P(() => {
      var W;
      if (c.items.length === 0) return 0;
      const $ = h.value.length, j = ((W = n.value) == null ? void 0 : W.progress) || 0;
      return Math.round(($ + j / 100) / c.items.length * 100);
    });
    function L($) {
      v($);
    }
    function I($) {
      return $ === 0 ? "" : `${($ / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return ($, j) => (s(), T(Fe, { to: "body" }, [
      $e(u) ? (s(), o("div", {
        key: 0,
        class: le(["model-download-queue", { minimized: !N.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: j[0] || (j[0] = (W) => N.value = !N.value)
        }, [
          e("div", Cb, [
            j[4] || (j[4] = e("span", { class: "icon" }, "↓", -1)),
            j[5] || (j[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", xb, "(" + a($e(r)) + "/" + a($e(c).items.length) + ")", 1)
          ]),
          e("div", Sb, [
            e("span", Ib, a(N.value ? "minimize" : "expand"), 1)
          ])
        ]),
        N.value ? (s(), o("div", Lb, [
          $e(n) ? (s(), o("div", Pb, [
            j[6] || (j[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(Ot, {
              item: $e(n),
              onCancel: j[1] || (j[1] = (W) => L($e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          $e(f).length > 0 ? (s(), o("div", Db, [
            e("div", Nb, [
              e("span", Ub, "Paused (" + a($e(f).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: j[2] || (j[2] = //@ts-ignore
                (...W) => $e(b) && $e(b)(...W))
              }, "Resume All")
            ]),
            e("div", Ob, [
              (s(!0), o(V, null, ee($e(f), (W) => (s(), T(Ot, {
                key: W.id,
                item: W,
                onResume: (K) => $e(w)(W.id),
                onRemove: (K) => $e(x)(W.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          $e(i).length > 0 ? (s(), o("div", Bb, [
            e("div", Fb, [
              e("span", Ab, "Queued (" + a($e(i).length) + ")", 1)
            ]),
            e("div", Vb, [
              (s(!0), o(V, null, ee($e(i), (W) => (s(), T(Ot, {
                key: W.id,
                item: W,
                onCancel: (K) => L(W.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          $e(h).length > 0 ? (s(), o("div", Wb, [
            e("div", jb, [
              e("span", Gb, "Completed (" + a($e(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: j[3] || (j[3] = //@ts-ignore
                (...W) => $e(z) && $e(z)(...W))
              }, "Clear")
            ]),
            e("div", qb, [
              (s(!0), o(V, null, ee($e(h).slice(0, 3), (W) => (s(), T(Ot, {
                key: W.id,
                item: W,
                onRemove: (K) => $e(x)(W.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          $e(g).length > 0 ? (s(), o("div", Hb, [
            e("div", Kb, [
              e("span", Jb, "Failed (" + a($e(g).length) + ")", 1)
            ]),
            e("div", Yb, [
              (s(!0), o(V, null, ee($e(g), (W) => (s(), T(Ot, {
                key: W.id,
                item: W,
                onRetry: (K) => $e(p)(W.id),
                onRemove: (K) => $e(x)(W.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Eb, [
          e("div", Mb, [
            e("div", {
              class: "progress-fill",
              style: pt({ width: `${_.value}%` })
            }, null, 4)
          ]),
          $e(n) ? (s(), o("div", Tb, [
            e("span", zb, a($e(n).filename), 1),
            e("span", Rb, a(I($e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), Qb = /* @__PURE__ */ Q(Xb, [["__scopeId", "data-v-60751cfa"]]), Zb = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', e_ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', t_ = {
  comfy: Zb,
  phosphor: e_
}, gs = "comfy", Bs = "comfygit-theme";
let Ct = null, Fs = gs;
function s_() {
  try {
    const t = localStorage.getItem(Bs);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return gs;
}
function As(t = gs) {
  Ct && Ct.remove(), Ct = document.createElement("style"), Ct.id = "comfygit-theme-styles", Ct.setAttribute("data-theme", t), Ct.textContent = t_[t], document.head.appendChild(Ct), document.body.setAttribute("data-comfygit-theme", t), Fs = t;
  try {
    localStorage.setItem(Bs, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function o_() {
  return Fs;
}
function n_(t) {
  As(t);
}
function a_(t) {
  var g;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const h = i[c];
  return h && h.result === "error" && ((g = h.status) == null ? void 0 : g.status_str) === "error" ? (h.status.messages || [])[0] || "Unknown error" : null;
}
const ps = document.createElement("link");
ps.rel = "stylesheet";
ps.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ps);
const l_ = s_();
As(l_);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), n_(t);
  },
  getTheme: () => {
    const t = o_();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let ot = null, qe = null, Vt = null, Bt = null, Cs = null;
const zt = C(null);
let Vs = "managed";
async function Xt() {
  var t;
  if (!((t = wt) != null && t.api)) return null;
  try {
    const c = await wt.api.fetchApi("/v2/comfygit/status");
    c.ok && (zt.value = await c.json());
  } catch {
  }
}
async function rs() {
  var t;
  if ((t = wt) != null && t.api)
    try {
      const c = await wt.api.fetchApi("/v2/setup/status");
      c.ok && (Vs = (await c.json()).state);
    } catch {
    }
}
function i_() {
  if (!zt.value) return !1;
  const t = zt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || zt.value.has_changes;
}
function xs(t) {
  ot && ot.remove(), ot = document.createElement("div"), ot.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", ot.appendChild(c), ot.addEventListener("click", (h) => {
    h.target === ot && ls();
  });
  const n = (h) => {
    h.key === "Escape" && (ls(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), us({
    render: () => ms(nb, {
      initialView: t,
      onClose: ls,
      onStatusUpdate: async (h) => {
        zt.value = h, Wt(), await rs(), ds();
      }
    })
  }).mount(c), document.body.appendChild(ot);
}
function ls() {
  ot && (ot.remove(), ot = null);
}
function r_(t) {
  Ft(), qe = document.createElement("div"), qe.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  qe.style.position = "fixed", qe.style.top = `${c.bottom + 8}px`, qe.style.right = `${window.innerWidth - c.right}px`, qe.style.zIndex = "10001";
  const n = (h) => {
    qe && !qe.contains(h.target) && h.target !== t && (Ft(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (h) => {
    h.key === "Escape" && (Ft(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Vt = us({
    render: () => ms(Os, {
      status: zt.value,
      onClose: Ft,
      onCommitted: () => {
        Ft(), Xt().then(Wt);
      }
    })
  }), Vt.mount(qe), document.body.appendChild(qe);
}
function Ft() {
  Vt && (Vt.unmount(), Vt = null), qe && (qe.remove(), qe = null);
}
function d_() {
  Bt || (Bt = document.createElement("div"), Bt.className = "comfygit-download-queue-root", Cs = us({
    render: () => ms(Qb)
  }), Cs.mount(Bt), document.body.appendChild(Bt), console.log("[ComfyGit] Model download queue mounted"));
}
let Qe = null;
function Wt() {
  if (!Qe) return;
  const t = Qe.querySelector(".commit-indicator");
  t && (t.style.display = i_() ? "block" : "none");
}
function ds() {
  if (!Qe) return;
  const t = Vs !== "managed";
  Qe.disabled = t, Qe.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Ws = document.createElement("style");
Ws.textContent = `
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
document.head.appendChild(Ws);
wt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = xs, Qe = document.createElement("button"), Qe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Qe.innerHTML = 'Commit <span class="commit-indicator"></span>', Qe.title = "Quick Commit", Qe.onclick = () => r_(Qe), t.appendChild(c), t.appendChild(Qe), (g = (h = wt.menu) == null ? void 0 : h.settingsGroup) != null && g.element && (wt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), d_();
    const { loadPendingDownloads: n } = Gt();
    n(), await Promise.all([Xt(), rs()]), Wt(), ds(), setInterval(async () => {
      await Promise.all([Xt(), rs()]), Wt(), ds();
    }, 3e4);
    const i = wt.api;
    if (i) {
      let f = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((p) => {
          (p.startsWith("workflow:") || p.startsWith("Comfy.OpenWorkflowsPaths:") || p.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(p);
        }), window.location.reload();
      }, u = function() {
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
        const w = document.createElement("span");
        w.textContent = "Workflows updated - refresh required", p.appendChild(w);
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
        `, b.onmouseover = () => b.style.background = "var(--comfy-input-bg)", b.onmouseout = () => b.style.background = "var(--comfy-menu-bg)", b.onclick = () => f(), p.appendChild(b);
        const x = document.createElement("button");
        x.textContent = "×", x.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, x.onmouseover = () => x.style.opacity = "1", x.onmouseout = () => x.style.opacity = "0.6", x.onclick = () => p.remove(), p.appendChild(x), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, r = function(p) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
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
        const x = document.createElement("span");
        x.textContent = "⚠️", x.style.fontSize = "20px", b.appendChild(x);
        const z = document.createElement("div");
        z.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const N = document.createElement("div");
        N.textContent = "Node installation failed", N.style.cssText = "font-weight: 600; color: #e53935;", z.appendChild(N);
        const m = document.createElement("div");
        m.textContent = "Dependency conflict detected", m.style.cssText = "font-size: 12px; opacity: 0.8;", z.appendChild(m), b.appendChild(z);
        const _ = document.createElement("button");
        _.textContent = "View Logs", _.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, _.onmouseover = () => _.style.background = "#c62828", _.onmouseout = () => _.style.background = "#e53935", _.onclick = () => {
          b.remove(), xs("debug-env");
        }, b.appendChild(_);
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
        `, L.onmouseover = () => L.style.opacity = "1", L.onmouseout = () => L.style.opacity = "0.6", L.onclick = () => b.remove(), b.appendChild(L), document.body.appendChild(b), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && b.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: b } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${b}`), await Xt(), Wt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      i.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), f()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (p) => {
        const w = a_(p.detail);
        w && r(w);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
