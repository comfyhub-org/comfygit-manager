import { app as kt } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Ce, createBlock as E, resolveDynamicComponent as cs, normalizeClass as le, withCtx as l, toDisplayString as a, createVNode as k, createTextVNode as y, computed as N, Fragment as V, renderList as Z, normalizeStyle as pt, ref as x, onMounted as Ue, watch as bt, Teleport as Fe, withModifiers as Re, Transition as Zs, createSlots as jt, withKeys as gt, reactive as ss, onUnmounted as Ss, readonly as eo, unref as $e, withDirectives as Ne, vModelText as Mt, vModelRadio as Jt, vModelCheckbox as Qt, nextTick as to, vModelSelect as Tt, createStaticVNode as so, TransitionGroup as oo, createApp as us, h as ms } from "vue";
const no = { class: "panel-layout" }, ao = {
  key: 0,
  class: "panel-layout-header"
}, lo = {
  key: 1,
  class: "panel-layout-search"
}, io = { class: "panel-layout-content" }, ro = {
  key: 2,
  class: "panel-layout-footer"
}, co = /* @__PURE__ */ X({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", no, [
      c.$slots.header ? (s(), o("div", ao, [
        Ce(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (s(), o("div", lo, [
        Ce(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", io, [
        Ce(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", ro, [
        Ce(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Q = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, h] of c)
    n[i] = h;
  return n;
}, je = /* @__PURE__ */ Q(co, [["__scopeId", "data-v-21565df9"]]), uo = {
  key: 0,
  class: "panel-title-prefix"
}, mo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, vo = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), E(cs(`h${t.level}`), {
      class: le(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", uo, a(t.prefix), 1)) : (s(), o("span", mo)),
        Ce(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fo = /* @__PURE__ */ Q(vo, [["__scopeId", "data-v-c3875efc"]]), go = ["title"], po = ["width", "height"], ho = /* @__PURE__ */ X({
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
      ])], 8, po))
    ], 8, go));
  }
}), Is = /* @__PURE__ */ Q(ho, [["__scopeId", "data-v-6fc7f16d"]]), yo = { class: "header-left" }, wo = {
  key: 0,
  class: "header-actions"
}, ko = /* @__PURE__ */ X({
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
      e("div", yo, [
        k(fo, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(Is, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", wo, [
        Ce(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ge = /* @__PURE__ */ Q(ko, [["__scopeId", "data-v-55a62cd6"]]), bo = {
  key: 0,
  class: "section-title-count"
}, _o = {
  key: 1,
  class: "section-title-icon"
}, $o = /* @__PURE__ */ X({
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
      class: le(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", bo, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", _o, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ze = /* @__PURE__ */ Q($o, [["__scopeId", "data-v-559361eb"]]), Co = { class: "status-grid" }, xo = { class: "status-grid__columns" }, So = { class: "status-grid__column" }, Io = { class: "status-grid__title" }, Eo = { class: "status-grid__column status-grid__column--right" }, Mo = { class: "status-grid__title" }, To = {
  key: 0,
  class: "status-grid__footer"
}, zo = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Co, [
      e("div", xo, [
        e("div", So, [
          e("h4", Io, a(t.leftTitle), 1),
          Ce(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Eo, [
          e("h4", Mo, a(t.rightTitle), 1),
          Ce(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", To, [
        Ce(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Lo = /* @__PURE__ */ Q(zo, [["__scopeId", "data-v-73b7ba3f"]]), Ro = {
  key: 0,
  class: "status-item__icon"
}, Po = {
  key: 1,
  class: "status-item__count"
}, Do = { class: "status-item__label" }, No = /* @__PURE__ */ X({
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
    return (i, h) => (s(), o("div", {
      class: le(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Ro, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Po, a(t.count), 1)) : d("", !0),
      e("span", Do, a(t.label), 1)
    ], 2));
  }
}), rt = /* @__PURE__ */ Q(No, [["__scopeId", "data-v-6f929183"]]), Uo = { class: "issue-card__header" }, Oo = { class: "issue-card__icon" }, Bo = { class: "issue-card__title" }, Fo = {
  key: 0,
  class: "issue-card__content"
}, Ao = {
  key: 0,
  class: "issue-card__description"
}, Vo = {
  key: 1,
  class: "issue-card__items"
}, Wo = {
  key: 2,
  class: "issue-card__actions"
}, jo = /* @__PURE__ */ X({
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
    return (i, h) => (s(), o("div", {
      class: le(["issue-card", n.value])
    }, [
      e("div", Uo, [
        e("span", Oo, a(t.icon), 1),
        e("h4", Bo, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Fo, [
        t.description ? (s(), o("p", Ao, a(t.description), 1)) : d("", !0),
        Ce(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Vo, [
        (s(!0), o(V, null, Z(t.items, (g, f) => (s(), o("div", {
          key: f,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", Wo, [
        Ce(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ Q(jo, [["__scopeId", "data-v-df6aa348"]]), Go = ["type", "disabled"], qo = {
  key: 0,
  class: "spinner"
}, Ho = /* @__PURE__ */ X({
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
      t.loading ? (s(), o("span", qo)) : d("", !0),
      t.loading ? d("", !0) : Ce(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Go));
  }
}), ee = /* @__PURE__ */ Q(Ho, [["__scopeId", "data-v-772abe47"]]), Ko = { class: "empty-state" }, Jo = {
  key: 0,
  class: "empty-icon"
}, Yo = { class: "empty-message" }, Xo = /* @__PURE__ */ X({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", Ko, [
      t.icon ? (s(), o("div", Jo, a(t.icon), 1)) : d("", !0),
      e("p", Yo, a(t.message), 1),
      t.actionLabel ? (s(), E(ee, {
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
}), at = /* @__PURE__ */ Q(Xo, [["__scopeId", "data-v-4466284f"]]), Qo = /* @__PURE__ */ X({
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
}), Yt = /* @__PURE__ */ Q(Qo, [["__scopeId", "data-v-75e9eeb8"]]), Zo = /* @__PURE__ */ X({
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
}), is = /* @__PURE__ */ Q(Zo, [["__scopeId", "data-v-2f186e4c"]]), en = { class: "detail-row" }, tn = /* @__PURE__ */ X({
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
    return (c, n) => (s(), o("div", en, [
      k(Yt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), E(is, {
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
}), De = /* @__PURE__ */ Q(tn, [["__scopeId", "data-v-ef15664a"]]), sn = { class: "modal-header" }, on = { class: "modal-body" }, nn = { class: "status-section" }, an = {
  key: 0,
  class: "status-section"
}, ln = { class: "section-header-row" }, rn = {
  key: 0,
  class: "workflow-group"
}, dn = { class: "workflow-group-header" }, cn = { class: "workflow-group-title" }, un = { class: "workflow-list" }, mn = { class: "workflow-name" }, vn = { class: "workflow-issue" }, fn = {
  key: 1,
  class: "workflow-group"
}, gn = { class: "workflow-group-header" }, pn = { class: "workflow-group-title" }, hn = { class: "workflow-list" }, yn = { class: "workflow-name" }, wn = { class: "workflow-issue" }, kn = {
  key: 2,
  class: "workflow-group"
}, bn = { class: "workflow-group-header" }, _n = { class: "workflow-group-title" }, $n = { class: "workflow-list" }, Cn = { class: "workflow-name" }, xn = {
  key: 3,
  class: "workflow-group"
}, Sn = { class: "workflow-group-header" }, In = { class: "workflow-group-title" }, En = { class: "workflow-list" }, Mn = { class: "workflow-name" }, Tn = {
  key: 4,
  class: "workflow-group"
}, zn = { class: "workflow-group-header" }, Ln = { class: "workflow-group-title" }, Rn = { class: "workflow-list" }, Pn = { class: "workflow-name" }, Dn = {
  key: 5,
  class: "workflow-group"
}, Nn = { class: "workflow-group-title" }, Un = { class: "expand-icon" }, On = {
  key: 0,
  class: "workflow-list"
}, Bn = { class: "workflow-name" }, Fn = {
  key: 1,
  class: "status-section"
}, An = {
  key: 0,
  class: "change-group"
}, Vn = { class: "change-group-header" }, Wn = { class: "change-group-title" }, jn = { class: "change-list" }, Gn = { class: "node-name" }, qn = {
  key: 0,
  class: "dev-badge"
}, Hn = {
  key: 1,
  class: "change-group"
}, Kn = { class: "change-group-header" }, Jn = { class: "change-group-title" }, Yn = { class: "change-list" }, Xn = { class: "node-name" }, Qn = {
  key: 0,
  class: "dev-badge"
}, Zn = {
  key: 2,
  class: "change-group"
}, ea = { class: "change-list" }, ta = { class: "change-item" }, sa = { class: "node-name" }, oa = {
  key: 3,
  class: "change-group"
}, na = {
  key: 2,
  class: "status-section"
}, aa = { class: "section-header-row" }, la = {
  key: 0,
  class: "drift-item"
}, ia = { class: "drift-list" }, ra = {
  key: 0,
  class: "drift-list-more"
}, da = {
  key: 1,
  class: "drift-item"
}, ca = { class: "drift-list" }, ua = {
  key: 0,
  class: "drift-list-more"
}, ma = {
  key: 2,
  class: "drift-item"
}, va = {
  key: 3,
  class: "drift-item"
}, fa = {
  key: 3,
  class: "status-section"
}, ga = { class: "info-box" }, pa = { class: "drift-list" }, ha = {
  key: 0,
  class: "drift-list-more"
}, ya = {
  key: 4,
  class: "status-section"
}, wa = { class: "warning-box" }, ka = {
  key: 5,
  class: "empty-state-inline"
}, ba = { class: "modal-actions" }, _a = /* @__PURE__ */ X({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const c = t, n = x(!1);
    Ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), bt(() => c.show, (_, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", _);
    }, { immediate: !0 });
    const i = N(() => {
      var _, b, L;
      return ((L = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : L.filter(
        (O) => O.status === "broken" && O.sync_state === "synced"
      )) || [];
    }), h = N(() => {
      var _, b, L;
      return ((L = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : L.filter(
        (O) => O.status === "broken" && O.sync_state !== "synced"
      )) || [];
    }), g = N(() => {
      var _, b, L;
      return ((L = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.synced) == null ? void 0 : L.filter((O) => {
        var $, D, S;
        const m = (S = (D = ($ = c.status) == null ? void 0 : $.workflows) == null ? void 0 : D.analyzed) == null ? void 0 : S.find((C) => C.name === O);
        return !m || m.status !== "broken";
      })) || [];
    }), f = N(() => {
      var _, b, L, O, m;
      return (_ = c.status) != null && _.workflows ? (((b = c.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((L = c.status.workflows.modified) == null ? void 0 : L.length) ?? 0) > 0 || (((O = c.status.workflows.deleted) == null ? void 0 : O.length) ?? 0) > 0 || (((m = c.status.workflows.synced) == null ? void 0 : m.length) ?? 0) > 0 : !1;
    }), u = N(() => {
      var b, L, O;
      const _ = (b = c.status) == null ? void 0 : b.git_changes;
      return _ ? (((L = _.nodes_added) == null ? void 0 : L.length) ?? 0) > 0 || (((O = _.nodes_removed) == null ? void 0 : O.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), r = N(() => {
      var _, b, L, O, m, $;
      return !f.value && !u.value && ((b = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : b.is_synced) && (((L = c.status) == null ? void 0 : L.missing_models_count) ?? 0) === 0 && ((($ = (m = (O = c.status) == null ? void 0 : O.comparison) == null ? void 0 : m.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
    }), v = N(() => {
      var b, L;
      const _ = (L = (b = c.status) == null ? void 0 : b.git_changes) == null ? void 0 : L.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function p(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function w(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, b) => {
      var L, O, m, $, D, S, C, j, W, K, U, M, T, z, P, se, we, me, oe, A, I, ie;
      return s(), E(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[6] || (b[6] = (te) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[5] || (b[5] = Re(() => {
            }, ["stop"]))
          }, [
            e("div", sn, [
              b[7] || (b[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (te) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", on, [
              e("div", nn, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...b[8] || (b[8] = [
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
              f.value ? (s(), o("div", an, [
                e("div", ln, [
                  k(Ze, { level: "4" }, {
                    default: l(() => [...b[9] || (b[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[1] || (b[1] = (te) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", rn, [
                  e("div", dn, [
                    b[10] || (b[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", cn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", un, [
                    (s(!0), o(V, null, Z(i.value, (te) => (s(), o("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", mn, a(te.name), 1),
                      e("span", vn, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                h.value.length ? (s(), o("div", fn, [
                  e("div", gn, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", pn, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", hn, [
                    (s(!0), o(V, null, Z(h.value, (te) => (s(), o("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", yn, a(te.name), 1),
                      e("span", wn, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (O = (L = t.status.workflows) == null ? void 0 : L.new) != null && O.length ? (s(), o("div", kn, [
                  e("div", bn, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", _n, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", $n, [
                    (s(!0), o(V, null, Z(t.status.workflows.new, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Cn, a(te), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                ($ = (m = t.status.workflows) == null ? void 0 : m.modified) != null && $.length ? (s(), o("div", xn, [
                  e("div", Sn, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", In, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", En, [
                    (s(!0), o(V, null, Z(t.status.workflows.modified, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Mn, a(te), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (S = (D = t.status.workflows) == null ? void 0 : D.deleted) != null && S.length ? (s(), o("div", Tn, [
                  e("div", zn, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Ln, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Rn, [
                    (s(!0), o(V, null, Z(t.status.workflows.deleted, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Pn, a(te), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", Dn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (te) => n.value = !n.value)
                  }, [
                    b[15] || (b[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Nn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", Un, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", On, [
                    (s(!0), o(V, null, Z(g.value, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Bn, a(te), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              u.value ? (s(), o("div", Fn, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...b[16] || (b[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (j = (C = t.status.git_changes) == null ? void 0 : C.nodes_added) != null && j.length ? (s(), o("div", An, [
                  e("div", Vn, [
                    b[17] || (b[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Wn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", jn, [
                    (s(!0), o(V, null, Z(t.status.git_changes.nodes_added, (te) => (s(), o("div", {
                      key: p(te),
                      class: "change-item"
                    }, [
                      e("span", Gn, a(p(te)), 1),
                      w(te) ? (s(), o("span", qn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (K = (W = t.status.git_changes) == null ? void 0 : W.nodes_removed) != null && K.length ? (s(), o("div", Hn, [
                  e("div", Kn, [
                    b[18] || (b[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Jn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Yn, [
                    (s(!0), o(V, null, Z(t.status.git_changes.nodes_removed, (te) => (s(), o("div", {
                      key: p(te),
                      class: "change-item"
                    }, [
                      e("span", Xn, a(p(te)), 1),
                      w(te) ? (s(), o("span", Qn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (U = t.status.git_changes) != null && U.workflow_changes ? (s(), o("div", Zn, [
                  b[19] || (b[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", ea, [
                    e("div", ta, [
                      e("span", sa, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (s(), o("div", oa, [...b[20] || (b[20] = [
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
              (T = t.status.comparison) != null && T.is_synced ? d("", !0) : (s(), o("div", na, [
                e("div", aa, [
                  k(Ze, { level: "4" }, {
                    default: l(() => [...b[21] || (b[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[3] || (b[3] = (te) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                b[22] || (b[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (P = (z = t.status.comparison) == null ? void 0 : z.missing_nodes) != null && P.length ? (s(), o("div", la, [
                  k(De, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ia, [
                    (s(!0), o(V, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (te) => (s(), o("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ra, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (we = (se = t.status.comparison) == null ? void 0 : se.extra_nodes) != null && we.length ? (s(), o("div", da, [
                  k(De, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", ca, [
                    (s(!0), o(V, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (te) => (s(), o("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ua, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (oe = (me = t.status.comparison) == null ? void 0 : me.version_mismatches) != null && oe.length ? (s(), o("div", ma, [
                  k(De, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (A = t.status.comparison) != null && A.packages_in_sync ? d("", !0) : (s(), o("div", va, [
                  k(De, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ie = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && ie.length ? (s(), o("div", fa, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...b[23] || (b[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ga, [
                  b[24] || (b[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", pa, [
                  (s(!0), o(V, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (s(), o("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + a(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", ha, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", ya, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...b[25] || (b[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", wa, [
                  b[26] || (b[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[27] || (b[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", ka, [...b[28] || (b[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", ba, [
              k(ee, {
                variant: "secondary",
                onClick: b[4] || (b[4] = (te) => _.$emit("close"))
              }, {
                default: l(() => [...b[29] || (b[29] = [
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
}), $a = /* @__PURE__ */ Q(_a, [["__scopeId", "data-v-c67eed17"]]), Ca = { class: "health-section-header" }, xa = { class: "suggestions-content" }, Sa = { class: "suggestions-text" }, Ia = { style: { "margin-top": "var(--cg-space-3)" } }, Ea = {
  key: 1,
  class: "no-issues-text"
}, Ma = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, h = x(!1), g = x(!1);
    function f() {
      h.value = !0;
    }
    function u() {
      h.value = !1, v("view-workflows");
    }
    function r() {
      h.value = !1, v("view-nodes");
    }
    const v = n, p = x(!1), w = N(() => {
      const z = i.status.workflows.analyzed || [], P = z.filter(
        (se) => se.unresolved_models_count > 0 || se.ambiguous_models_count > 0
      );
      return P.length === 0 && i.status.missing_models_count > 0 ? z.filter((se) => se.sync_state === "synced") : P;
    });
    function _() {
      const z = w.value;
      z.length !== 0 && (p.value = !0, v("repair-missing-models", z.map((P) => P.name)));
    }
    function b() {
      p.value = !1;
    }
    c({ resetRepairingState: b });
    const L = N(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), O = N(() => i.status.has_changes), m = N(() => {
      const z = i.status.git_changes;
      return z.nodes_added.length > 0 || z.nodes_removed.length > 0 || z.workflow_changes;
    }), $ = N(() => i.status.has_changes || L.value), D = N(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), S = N(() => i.status.git_changes.has_other_changes), C = N(() => {
      var z;
      return ((z = i.status.workflows.analyzed) == null ? void 0 : z.filter((P) => P.status === "broken")) || [];
    }), j = N(() => {
      var z;
      return ((z = i.status.workflows.analyzed) == null ? void 0 : z.filter(
        (P) => P.has_path_sync_issues && !P.has_issues
      )) || [];
    }), W = N(() => C.value.length > 0), K = N(() => W.value || j.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), U = N(() => {
      const z = [];
      return i.status.workflows.new.length > 0 && z.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && z.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && z.push(`${i.status.workflows.deleted.length} deleted`), z.length > 0 ? `${z.join(", ")} workflow${z.length === 1 && !z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), M = N(() => {
      var se, we;
      const z = [], P = i.status.comparison;
      return (se = P.missing_nodes) != null && se.length && z.push(`${P.missing_nodes.length} missing node${P.missing_nodes.length === 1 ? "" : "s"}`), (we = P.extra_nodes) != null && we.length && z.push(`${P.extra_nodes.length} untracked node${P.extra_nodes.length === 1 ? "" : "s"}`), z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${z.join(" and ")}.`;
    }), T = N(() => {
      var se, we;
      const z = [], P = i.status.comparison;
      return (se = P.extra_nodes) != null && se.length && (P.extra_nodes.slice(0, 3).forEach((me) => {
        z.push(`Untracked: ${me}`);
      }), P.extra_nodes.length > 3 && z.push(`...and ${P.extra_nodes.length - 3} more untracked`)), (we = P.missing_nodes) != null && we.length && (P.missing_nodes.slice(0, 3).forEach((me) => {
        z.push(`Missing: ${me}`);
      }), P.missing_nodes.length > 3 && z.push(`...and ${P.missing_nodes.length - 3} more missing`)), z;
    });
    return (z, P) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), E(st, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: P[0] || (P[0] = (se) => z.$emit("start-setup"))
              }, {
                default: l(() => [...P[13] || (P[13] = [
                  y(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), E(st, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: P[1] || (P[1] = (se) => z.$emit("view-environments"))
              }, {
                default: l(() => [...P[14] || (P[14] = [
                  y(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), E(st, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: P[2] || (P[2] = (se) => z.$emit("create-environment"))
              }, {
                default: l(() => [...P[15] || (P[15] = [
                  y(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: P[4] || (P[4] = (se) => g.value = !0),
            onMouseleave: P[5] || (P[5] = (se) => g.value = !1)
          }, [
            e("div", Ca, [
              k(Ze, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...P[16] || (P[16] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(Zs, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), E(ee, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: l(() => [...P[17] || (P[17] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            k(Lo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, jt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), E(rt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), E(rt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), E(rt, {
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
                  separator: L.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(rt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(rt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(rt, {
                  key: 2,
                  icon: "●",
                  count: D.value,
                  label: D.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                S.value ? (s(), E(rt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                O.value && !m.value && !S.value ? (s(), E(rt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                O.value ? d("", !0) : (s(), E(rt, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              $.value ? {
                name: "footer",
                fn: l(() => [
                  P[19] || (P[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", xa, [
                    e("span", Sa, a(U.value), 1),
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: P[3] || (P[3] = (se) => z.$emit("commit-changes"))
                    }, {
                      default: l(() => [...P[18] || (P[18] = [
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
          t.status.is_detached_head ? (s(), E(st, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: P[6] || (P[6] = (se) => z.$emit("create-branch"))
              }, {
                default: l(() => [...P[20] || (P[20] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", Ia, [
            k(Ze, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...P[21] || (P[21] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            K.value ? (s(), o(V, { key: 0 }, [
              C.value.length > 0 ? (s(), E(st, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${C.value.length} workflow${C.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: C.value.map((se) => `${se.name} — ${se.issue_summary}`)
              }, {
                actions: l(() => [
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: P[7] || (P[7] = (se) => z.$emit("view-workflows"))
                  }, {
                    default: l(() => [...P[22] || (P[22] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              j.value.length > 0 ? (s(), E(st, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${j.value.length} workflow${j.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: j.value.map((se) => `${se.name} — ${se.models_needing_path_sync_count} model path${se.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: P[8] || (P[8] = (se) => z.$emit("view-workflows"))
                  }, {
                    default: l(() => [...P[23] || (P[23] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !W.value ? (s(), E(st, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    disabled: p.value,
                    onClick: _
                  }, {
                    default: l(() => [
                      y(a(p.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: P[9] || (P[9] = (se) => z.$emit("view-workflows"))
                  }, {
                    default: l(() => [...P[24] || (P[24] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), E(st, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: M.value,
                items: T.value
              }, {
                actions: l(() => [
                  k(ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: f
                  }, {
                    default: l(() => [...P[25] || (P[25] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: P[10] || (P[10] = (se) => z.$emit("view-nodes"))
                  }, {
                    default: l(() => [...P[26] || (P[26] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), E(st, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: P[11] || (P[11] = (se) => z.$emit("view-nodes"))
                  }, {
                    default: l(() => [...P[27] || (P[27] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : $.value ? (s(), o("span", Ea, "No issues")) : (s(), E(at, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k($a, {
        show: h.value,
        status: t.status,
        onClose: P[12] || (P[12] = (se) => h.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: r
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Ta = /* @__PURE__ */ Q(Ma, [["__scopeId", "data-v-0398c02e"]]), za = ["type", "value", "placeholder", "disabled"], La = /* @__PURE__ */ X({
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
    const i = t, h = n, g = x(null);
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
    }, null, 42, za));
  }
}), Zt = /* @__PURE__ */ Q(La, [["__scopeId", "data-v-0380d08f"]]), Ra = { class: "branch-create-form" }, Pa = { class: "form-actions" }, Da = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = x(""), h = N(() => {
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
      e("div", Pa, [
        k(ee, {
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
        k(ee, {
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
}), Na = /* @__PURE__ */ Q(Da, [["__scopeId", "data-v-7c500394"]]), Ua = { class: "branch-list-item__indicator" }, Oa = { class: "branch-list-item__name" }, Ba = {
  key: 0,
  class: "branch-list-item__actions"
}, Fa = {
  key: 0,
  class: "branch-list-item__current-label"
}, Aa = /* @__PURE__ */ X({
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
      e("span", Ua, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Oa, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", Ba, [
        Ce(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Fa, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Va = /* @__PURE__ */ Q(Aa, [["__scopeId", "data-v-c6581a24"]]), Wa = {
  key: 2,
  class: "branch-list"
}, ja = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = x(!1);
    function h(f) {
      n("create", f), g();
    }
    function g() {
      i.value = !1;
    }
    return (f, u) => (s(), E(je, null, {
      header: l(() => [
        k(Ge, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? d("", !0) : (s(), E(ee, {
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
        i.value ? (s(), E(Na, {
          key: 0,
          onCreate: h,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), E(at, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Wa, [
          (s(!0), o(V, null, Z(t.branches, (r) => (s(), E(Va, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: l(() => [
              r.is_current ? d("", !0) : (s(), E(ee, {
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
              r.is_current ? d("", !0) : (s(), E(ee, {
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
}), Ga = /* @__PURE__ */ Q(ja, [["__scopeId", "data-v-86784ddd"]]), qa = { class: "commit-list" }, Ha = /* @__PURE__ */ X({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", qa, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ka = /* @__PURE__ */ Q(Ha, [["__scopeId", "data-v-8c5ee761"]]), Ja = { class: "commit-hash" }, Ya = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = N(() => c.hash.slice(0, c.length));
    return (i, h) => (s(), o("span", Ja, a(n.value), 1));
  }
}), Es = /* @__PURE__ */ Q(Ya, [["__scopeId", "data-v-7c333cc6"]]), Xa = { class: "commit-message" }, Qa = { class: "commit-date" }, Za = /* @__PURE__ */ X({
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
      e("span", Xa, a(t.message), 1),
      e("span", Qa, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: f[0] || (f[0] = Re(() => {
        }, ["stop"]))
      }, [
        Ce(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), el = /* @__PURE__ */ Q(Za, [["__scopeId", "data-v-dd7c621b"]]), tl = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), E(je, null, {
      header: l(() => [
        k(Ge, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), E(at, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(Ka, { key: 1 }, {
          default: l(() => [
            (s(!0), o(V, null, Z(t.commits, (i) => (s(), E(el, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (h) => c.$emit("select", i)
            }, {
              actions: l(() => [
                k(ee, {
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
}), sl = /* @__PURE__ */ Q(tl, [["__scopeId", "data-v-981c3c64"]]), v_ = ss({
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
}, ol = [
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
  ...ol,
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
  const t = x(!1), c = x(null);
  async function n(H, de) {
    var Le;
    if (!((Le = window.app) != null && Le.api))
      throw new Error("ComfyUI API not available");
    const _e = await window.app.api.fetchApi(H, de);
    if (!_e.ok) {
      const Xe = await _e.json().catch(() => ({}));
      throw new Error(Xe.error || Xe.message || `Request failed: ${_e.status}`);
    }
    return _e.json();
  }
  async function i(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function h(H, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: de })
    });
  }
  async function g(H = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${de}`);
  }
  async function f(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function u() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function r(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H, force: !0 })
    });
  }
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function p(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function w(H, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: de })
    });
  }
  async function _(H, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: de })
    });
  }
  async function b(H, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: de })
    });
  }
  async function L(H, de = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de })
    });
  }
  async function O() {
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
  async function m(H) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: H })
    });
  }
  async function $() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function D(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function S() {
    return n("/v2/workspace/environments/create_status");
  }
  async function C(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function j(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function W(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await i(H), _e = [];
      return de.workflows.new.forEach((Le) => {
        _e.push({ name: Le, status: "new", missing_nodes: 0, missing_models: 0, path: Le });
      }), de.workflows.modified.forEach((Le) => {
        _e.push({ name: Le, status: "modified", missing_nodes: 0, missing_models: 0, path: Le });
      }), de.workflows.synced.forEach((Le) => {
        _e.push({ name: Le, status: "synced", missing_nodes: 0, missing_models: 0, path: Le });
      }), _e;
    }
  }
  async function K(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function U(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function M(H, de, _e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: _e })
    });
  }
  async function T(H, de, _e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: _e })
    });
  }
  async function z() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function P() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function se(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function we(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function me(H, de) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function oe(H, de) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function A(H) {
    return n(`/v2/workspace/models/${H}`, {
      method: "DELETE"
    });
  }
  async function I(H) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
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
  async function Ee(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
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
  async function ae(H) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ne(H, de) {
    try {
      const _e = new URLSearchParams();
      return H && _e.append("level", H), de && _e.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${_e}`);
    } catch {
      return [];
    }
  }
  async function re(H, de) {
    try {
      const _e = new URLSearchParams();
      return H && _e.append("level", H), de && _e.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${_e}`);
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
  async function pe(H) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
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
  async function q(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ie(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function xe(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function Me(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
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
  async function Je(H, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: de })
    });
  }
  async function et(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Ye(H, de, _e) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: _e })
    });
  }
  async function _t(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function ke(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function Ae(H = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: de
      })
    });
  }
  async function wt(H, de) {
    const _e = de ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n(_e);
  }
  async function ut(H, de = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: de.modelStrategy || "skip",
        force: de.force || !1,
        resolutions: de.resolutions
      })
    });
  }
  async function Pe(H, de) {
    const _e = de ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n(_e);
  }
  async function $t(H, de = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de.force || !1 })
    });
  }
  async function lt(H, de) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: de })
    });
  }
  async function J(H) {
    const de = {
      success: 0,
      failed: []
    };
    for (const _e of H)
      try {
        await U(_e), de.success++;
      } catch (Le) {
        de.failed.push({
          name: _e,
          error: Le instanceof Error ? Le.message : "Unknown error"
        });
      }
    return de;
  }
  async function B(H) {
    var Le;
    const de = new FormData();
    if (de.append("file", H), !((Le = window.app) != null && Le.api))
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
  async function F(H) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(H)}`
    );
  }
  async function Y(H, de, _e, Le) {
    var qt;
    const Xe = new FormData();
    if (Xe.append("file", H), Xe.append("name", de), Xe.append("model_strategy", _e), Xe.append("torch_backend", Le), !((qt = window.app) != null && qt.api))
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
  async function it(H) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: H })
    });
  }
  async function mt(H, de, _e, Le) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: H,
        name: de,
        model_strategy: _e,
        torch_backend: Le
      })
    });
  }
  async function tt() {
    return n("/v2/setup/status");
  }
  async function xt(H) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function vt() {
    return n("/v2/setup/initialize_status");
  }
  async function St(H) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
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
    createBranch: _,
    switchBranch: b,
    deleteBranch: L,
    // Environment Management
    getEnvironments: O,
    switchEnvironment: m,
    getSwitchProgress: $,
    createEnvironment: D,
    getCreateProgress: S,
    getComfyUIReleases: C,
    deleteEnvironment: j,
    // Workflow Management
    getWorkflows: W,
    getWorkflowDetails: K,
    resolveWorkflow: U,
    installWorkflowDeps: M,
    setModelImportance: T,
    // Model Management
    getEnvironmentModels: z,
    getWorkspaceModels: P,
    getModelDetails: se,
    openFileLocation: we,
    addModelSource: me,
    removeModelSource: oe,
    deleteModel: A,
    downloadModel: I,
    scanWorkspaceModels: ie,
    getModelsDirectory: te,
    setModelsDirectory: Ee,
    // Settings
    getConfig: be,
    updateConfig: ae,
    // Debug/Logs
    getEnvironmentLogs: ne,
    getWorkspaceLogs: re,
    getEnvironmentLogPath: ve,
    getWorkspaceLogPath: ze,
    openFile: pe,
    // Node Management
    getNodes: fe,
    trackNodeAsDev: q,
    installNode: Ie,
    updateNode: xe,
    uninstallNode: Me,
    // Git Remotes
    getRemotes: ce,
    addRemote: Je,
    removeRemote: et,
    updateRemoteUrl: Ye,
    fetchRemote: _t,
    getRemoteSyncStatus: ke,
    // Push/Pull
    getPullPreview: wt,
    pullFromRemote: ut,
    getPushPreview: Pe,
    pushToRemote: $t,
    validateMerge: lt,
    // Environment Sync
    syncEnvironmentManually: Ae,
    // Workflow Repair
    repairWorkflowModels: J,
    // Import Operations
    previewTarballImport: B,
    previewGitImport: it,
    validateEnvironmentName: F,
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
  const t = x(null);
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
const nl = { class: "base-modal-header" }, al = {
  key: 0,
  class: "base-modal-title"
}, ll = { class: "base-modal-body" }, il = {
  key: 0,
  class: "base-modal-loading"
}, rl = {
  key: 1,
  class: "base-modal-error"
}, dl = {
  key: 0,
  class: "base-modal-footer"
}, cl = /* @__PURE__ */ X({
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
    }), (f, u) => (s(), E(Fe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: le(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: u[1] || (u[1] = Re(() => {
          }, ["stop"]))
        }, [
          e("div", nl, [
            Ce(f.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", al, a(t.title), 1)) : d("", !0)
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
          e("div", ll, [
            t.loading ? (s(), o("div", il, "Loading...")) : t.error ? (s(), o("div", rl, a(t.error), 1)) : Ce(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (s(), o("div", dl, [
            Ce(f.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Ke = /* @__PURE__ */ Q(cl, [["__scopeId", "data-v-8dab1081"]]), ul = ["type", "disabled"], ml = {
  key: 0,
  class: "spinner"
}, vl = /* @__PURE__ */ X({
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
      t.loading ? (s(), o("span", ml)) : d("", !0),
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 10, ul));
  }
}), ue = /* @__PURE__ */ Q(vl, [["__scopeId", "data-v-f3452606"]]), fl = {
  key: 0,
  class: "base-title-count"
}, gl = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), E(cs(`h${t.level}`), {
      class: le(["base-title", t.variant])
    }, {
      default: l(() => [
        Ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", fl, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), At = /* @__PURE__ */ Q(gl, [["__scopeId", "data-v-5a01561d"]]), pl = ["value", "disabled"], hl = {
  key: 0,
  value: "",
  disabled: ""
}, yl = ["value"], wl = {
  key: 0,
  class: "base-select-error"
}, kl = /* @__PURE__ */ X({
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
        t.placeholder ? (s(), o("option", hl, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(V, null, Z(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, yl))), 128))
      ], 42, pl),
      t.error ? (s(), o("span", wl, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), bl = /* @__PURE__ */ Q(kl, [["__scopeId", "data-v-7436d745"]]), _l = { class: "popover-header" }, $l = { class: "popover-title" }, Cl = { class: "popover-content" }, xl = {
  key: 0,
  class: "popover-actions"
}, Sl = /* @__PURE__ */ X({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), E(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: pt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Re(() => {
          }, ["stop"]))
        }, [
          e("div", _l, [
            e("h4", $l, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Cl, [
            Ce(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", xl, [
            Ce(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), ct = /* @__PURE__ */ Q(Sl, [["__scopeId", "data-v-42815ace"]]), Il = { class: "detail-section" }, El = {
  key: 0,
  class: "empty-message"
}, Ml = { class: "model-header" }, Tl = { class: "model-name" }, zl = { class: "model-details" }, Ll = { class: "model-row" }, Rl = { class: "model-row" }, Pl = { class: "label" }, Dl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Nl = { class: "node-list" }, Ul = ["onClick"], Ol = {
  key: 1,
  class: "model-row"
}, Bl = { class: "value" }, Fl = {
  key: 2,
  class: "model-row"
}, Al = { class: "value error" }, Vl = {
  key: 0,
  class: "model-actions"
}, Wl = { class: "detail-section" }, jl = {
  key: 0,
  class: "empty-message"
}, Gl = { class: "node-name" }, ql = {
  key: 0,
  class: "node-version"
}, Hl = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: h, setModelImportance: g, openFileLocation: f } = Oe(), u = x(null), r = x(!1), v = x(null), p = x(!1), w = x({}), _ = x(!1), b = x(/* @__PURE__ */ new Set()), L = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function O(U) {
      switch (U) {
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
    function m(U) {
      switch (U) {
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
    function $(U) {
      if (!U.loaded_by || U.loaded_by.length === 0) return [];
      const M = U.hash || U.filename;
      return b.value.has(M) ? U.loaded_by : U.loaded_by.slice(0, 3);
    }
    function D(U) {
      return b.value.has(U);
    }
    function S(U) {
      b.value.has(U) ? b.value.delete(U) : b.value.add(U), b.value = new Set(b.value);
    }
    async function C() {
      r.value = !0, v.value = null;
      try {
        u.value = await h(n.workflowName);
      } catch (U) {
        v.value = U instanceof Error ? U.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function j(U, M) {
      w.value[U] = M, p.value = !0;
    }
    async function W(U) {
      try {
        await f(U);
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to open file location";
      }
    }
    async function K() {
      if (!p.value) {
        i("close");
        return;
      }
      r.value = !0, v.value = null;
      try {
        for (const [U, M] of Object.entries(w.value))
          await g(n.workflowName, U, M);
        i("refresh"), i("close");
      } catch (U) {
        v.value = U instanceof Error ? U.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Ue(C), (U, M) => (s(), o(V, null, [
      k(Ke, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: v.value || void 0,
        onClose: M[4] || (M[4] = (T) => i("close"))
      }, {
        body: l(() => [
          u.value ? (s(), o(V, { key: 0 }, [
            e("section", Il, [
              k(At, { variant: "section" }, {
                default: l(() => [
                  y("MODELS USED (" + a(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (s(), o("div", El, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, Z(u.value.models, (T) => {
                var z;
                return s(), o("div", {
                  key: T.hash || T.filename,
                  class: "model-card"
                }, [
                  e("div", Ml, [
                    M[6] || (M[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Tl, a(T.filename), 1)
                  ]),
                  e("div", zl, [
                    e("div", Ll, [
                      M[7] || (M[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: le(["value", O(T.status)])
                      }, a(m(T.status)), 3)
                    ]),
                    e("div", Rl, [
                      e("span", Pl, [
                        M[8] || (M[8] = y(" Importance: ", -1)),
                        k(Is, {
                          size: 14,
                          title: "About importance levels",
                          onClick: M[0] || (M[0] = (P) => _.value = !0)
                        })
                      ]),
                      k(bl, {
                        "model-value": w.value[T.filename] || T.importance,
                        options: L,
                        "onUpdate:modelValue": (P) => j(T.filename, P)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    T.loaded_by && T.loaded_by.length > 0 ? (s(), o("div", Dl, [
                      M[9] || (M[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Nl, [
                        (s(!0), o(V, null, Z($(T), (P, se) => (s(), o("div", {
                          key: `${P.node_id}-${se}`,
                          class: "node-reference"
                        }, a(P.node_type) + " (Node #" + a(P.node_id) + ") ", 1))), 128)),
                        T.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (P) => S(T.hash || T.filename)
                        }, a(D(T.hash || T.filename) ? "▼ Show less" : `▶ View all (${T.loaded_by.length})`), 9, Ul)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    T.size_mb ? (s(), o("div", Ol, [
                      M[10] || (M[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Bl, a(T.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    T.has_category_mismatch ? (s(), o("div", Fl, [
                      M[13] || (M[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Al, [
                        M[11] || (M[11] = y(" In ", -1)),
                        e("code", null, a(T.actual_category) + "/", 1),
                        M[12] || (M[12] = y(" but loader needs ", -1)),
                        e("code", null, a((z = T.expected_categories) == null ? void 0 : z[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  T.status !== "available" ? (s(), o("div", Vl, [
                    T.status === "downloadable" ? (s(), E(ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: M[1] || (M[1] = (P) => i("resolve"))
                    }, {
                      default: l(() => [...M[14] || (M[14] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    })) : T.status === "category_mismatch" && T.file_path ? (s(), E(ue, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => W(T.file_path)
                    }, {
                      default: l(() => [...M[15] || (M[15] = [
                        y(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : T.status !== "path_mismatch" ? (s(), E(ue, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: M[2] || (M[2] = (P) => i("resolve"))
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
            e("section", Wl, [
              k(At, { variant: "section" }, {
                default: l(() => [
                  y("NODES USED (" + a(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (s(), o("div", jl, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, Z(u.value.nodes, (T) => (s(), o("div", {
                key: T.name,
                class: "node-item"
              }, [
                e("span", {
                  class: le(["node-status", T.status === "installed" ? "installed" : "missing"])
                }, a(T.status === "installed" ? "✓" : "✕"), 3),
                e("span", Gl, a(T.name), 1),
                T.version ? (s(), o("span", ql, "v" + a(T.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          k(ue, {
            variant: "secondary",
            onClick: M[3] || (M[3] = (T) => i("close"))
          }, {
            default: l(() => [...M[17] || (M[17] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (s(), E(ue, {
            key: 0,
            variant: "primary",
            onClick: K
          }, {
            default: l(() => [...M[18] || (M[18] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(ct, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: M[5] || (M[5] = (T) => _.value = !1)
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
}), Kl = /* @__PURE__ */ Q(Hl, [["__scopeId", "data-v-668728e6"]]), Se = ss({
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
    await Jl(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Se.status = "idle", Et();
  }
}
async function Jl(t) {
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
              const _ = t.downloaded - f;
              if (t.speed = _ / w, g = p, f = t.downloaded, t.speed > 0 && t.size > 0) {
                const b = t.size - t.downloaded;
                t.eta = b / t.speed;
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
async function Yl() {
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
    for (const $ of m) {
      if (Se.items.some(
        (C) => C.url === $.url && C.targetPath === $.targetPath && ["queued", "downloading", "paused", "completed"].includes(C.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${$.filename}`);
        continue;
      }
      const S = {
        id: Ts(),
        workflow: $.workflow,
        filename: $.filename,
        url: $.url,
        targetPath: $.targetPath,
        size: $.size || 0,
        type: $.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Se.items.push(S);
    }
    Se.status === "idle" && Et();
  }
  async function c(m) {
    const $ = os(m);
    if ($) {
      if ($.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent($.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        dt && (dt.close(), dt = null), $.status = "failed", $.error = "Cancelled by user", Se.status = "idle", Et();
      } else if ($.status === "queued") {
        const D = Se.items.findIndex((S) => S.id === m);
        D >= 0 && Se.items.splice(D, 1);
      }
    }
  }
  function n(m) {
    const $ = os(m);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, Se.status === "idle" && Et());
  }
  function i(m) {
    const $ = os(m);
    !$ || $.status !== "paused" || ($.status = "queued", Se.status === "idle" && Et());
  }
  function h() {
    const m = Se.items.filter(($) => $.status === "paused");
    for (const $ of m)
      $.status = "queued";
    Se.status === "idle" && Et();
  }
  function g(m) {
    const $ = Se.items.findIndex((D) => D.id === m);
    $ >= 0 && ["completed", "failed", "paused"].includes(Se.items[$].status) && Se.items.splice($, 1);
  }
  function f() {
    Se.items = Se.items.filter((m) => m.status !== "completed");
  }
  function u() {
    Se.items = Se.items.filter((m) => m.status !== "failed");
  }
  const r = N(
    () => Se.items.find((m) => m.status === "downloading")
  ), v = N(
    () => Se.items.filter((m) => m.status === "queued")
  ), p = N(
    () => Se.items.filter((m) => m.status === "completed")
  ), w = N(
    () => Se.items.filter((m) => m.status === "failed")
  ), _ = N(
    () => Se.items.filter((m) => m.status === "paused")
  ), b = N(() => Se.items.length > 0), L = N(
    () => Se.items.filter((m) => m.status === "queued" || m.status === "downloading").length
  ), O = N(
    () => Se.items.some((m) => m.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: eo(Se),
    // Computed
    currentDownload: r,
    queuedItems: v,
    completedItems: p,
    failedItems: w,
    pausedItems: _,
    hasItems: b,
    activeCount: L,
    hasPaused: O,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: h,
    removeItem: g,
    clearCompleted: f,
    clearFailed: u,
    loadPendingDownloads: Yl
  };
}
function zs() {
  const t = x(null), c = x(null), n = x([]), i = x([]), h = x(!1), g = x(null);
  async function f(D, S) {
    var j;
    if (!((j = window.app) != null && j.api))
      throw new Error("ComfyUI API not available");
    const C = await window.app.api.fetchApi(D, S);
    if (!C.ok) {
      const W = await C.json().catch(() => ({})), K = W.error || W.message || `Request failed: ${C.status}`;
      throw new Error(K);
    }
    return C.json();
  }
  async function u(D) {
    h.value = !0, g.value = null;
    try {
      let S;
      return Dt() || (S = await f(
        `/v2/comfygit/workflow/${D}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = S, S;
    } catch (S) {
      const C = S instanceof Error ? S.message : "Unknown error occurred";
      throw g.value = C, S;
    } finally {
      h.value = !1;
    }
  }
  async function r(D, S, C, j) {
    h.value = !0, g.value = null;
    try {
      let W;
      if (!Dt()) {
        const K = Object.fromEntries(S), U = Object.fromEntries(C), M = j ? Array.from(j) : [];
        W = await f(
          `/v2/comfygit/workflow/${D}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: K,
              model_choices: U,
              skipped_packages: M
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
  async function v(D, S = 10) {
    h.value = !0, g.value = null;
    try {
      let C;
      return Dt() || (C = await f(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: S })
        }
      )), n.value = C.results, C.results;
    } catch (C) {
      const j = C instanceof Error ? C.message : "Unknown error occurred";
      throw g.value = j, C;
    } finally {
      h.value = !1;
    }
  }
  async function p(D, S = 10) {
    h.value = !0, g.value = null;
    try {
      let C;
      return Dt() || (C = await f(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: S })
        }
      )), i.value = C.results, C.results;
    } catch (C) {
      const j = C instanceof Error ? C.message : "Unknown error occurred";
      throw g.value = j, C;
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
  function _() {
    w.phase = "idle", w.currentFile = void 0, w.currentFileIndex = void 0, w.totalFiles = void 0, w.bytesDownloaded = void 0, w.bytesTotal = void 0, w.completedFiles = [], w.nodesToInstall = [], w.nodesInstalled = [], w.installError = void 0, w.needsRestart = void 0, w.error = void 0, w.nodeInstallProgress = void 0;
  }
  async function b(D) {
    w.phase = "installing", w.nodesInstalled = [], w.installError = void 0, w.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Dt(), await L(D);
    } catch (S) {
      const C = S instanceof Error ? S.message : "Failed to install nodes";
      throw w.installError = C, S;
    }
  }
  async function L(D) {
    var C;
    const S = await f(
      `/v2/comfygit/workflow/${D}/install`,
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
      const j = new Map(((C = S.failed) == null ? void 0 : C.map((W) => [W.node_id, W.error])) || []);
      for (let W = 0; W < w.nodesToInstall.length; W++) {
        const K = w.nodesToInstall[W], U = j.get(K);
        w.nodeInstallProgress.completedNodes.push({
          node_id: K,
          success: !U,
          error: U
        });
      }
    }
    return w.nodesInstalled = S.nodes_installed, w.needsRestart = S.nodes_installed.length > 0, S.failed && S.failed.length > 0 && (w.installError = `${S.failed.length} package(s) failed to install`), S;
  }
  async function O(D, S, C) {
    _(), w.phase = "resolving", g.value = null;
    const j = Object.fromEntries(S), W = Object.fromEntries(C);
    try {
      const K = await fetch(`/v2/comfygit/workflow/${D}/apply-resolution-stream`, {
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
      const U = K.body.getReader(), M = new TextDecoder();
      let T = "";
      for (; ; ) {
        const { done: z, value: P } = await U.read();
        if (z) break;
        T += M.decode(P, { stream: !0 });
        const se = T.split(`

`);
        T = se.pop() || "";
        for (const we of se) {
          if (!we.trim()) continue;
          const me = we.split(`
`);
          let oe = "", A = "";
          for (const I of me)
            I.startsWith("event: ") ? oe = I.slice(7) : I.startsWith("data: ") && (A = I.slice(6));
          if (A)
            try {
              const I = JSON.parse(A);
              m(oe, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (K) {
      const U = K instanceof Error ? K.message : "Unknown error occurred";
      throw g.value = U, w.error = U, w.phase = "error", K;
    }
  }
  function m(D, S) {
    switch (D) {
      case "batch_start":
        w.phase = "downloading", w.totalFiles = S.total;
        break;
      case "file_start":
        w.currentFile = S.filename, w.currentFileIndex = S.index, w.bytesDownloaded = 0, w.bytesTotal = void 0;
        break;
      case "file_progress":
        w.bytesDownloaded = S.downloaded, w.bytesTotal = S.total;
        break;
      case "file_complete":
        w.completedFiles.push({
          filename: S.filename,
          success: S.success,
          error: S.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        w.nodesToInstall = S.nodes_to_install || [], S.download_results && (w.completedFiles = S.download_results), w.phase = "complete";
        break;
      case "error":
        w.error = S.message, w.phase = "error", g.value = S.message;
        break;
    }
  }
  function $(D, S) {
    const { addToQueue: C } = Gt(), j = S.filter((W) => W.url && W.target_path).map((W) => ({
      workflow: D,
      filename: W.filename,
      url: W.url,
      targetPath: W.target_path,
      size: W.size || 0,
      type: "model"
    }));
    return j.length > 0 && C(j), j.length;
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
    applyResolutionWithProgress: O,
    installNodes: b,
    searchNodes: v,
    searchModels: p,
    resetProgress: _,
    queueModelDownloads: $
  };
}
const Xl = { class: "resolution-stepper" }, Ql = { class: "stepper-header" }, Zl = ["onClick"], ei = {
  key: 0,
  class: "step-icon"
}, ti = {
  key: 1,
  class: "step-number"
}, si = { class: "step-label" }, oi = {
  key: 0,
  class: "step-connector"
}, ni = { class: "stepper-content" }, ai = /* @__PURE__ */ X({
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
    return (v, p) => (s(), o("div", Xl, [
      e("div", Ql, [
        (s(!0), o(V, null, Z(t.steps, (w, _) => (s(), o("div", {
          key: w.id,
          class: le(["step", {
            active: t.currentStep === w.id,
            completed: h(w.id),
            "in-progress": g(w.id),
            disabled: u(w.id)
          }]),
          onClick: (b) => r(w.id)
        }, [
          e("div", {
            class: le(["step-indicator", f(w.id)])
          }, [
            h(w.id) ? (s(), o("span", ei, "✓")) : (s(), o("span", ti, a(_ + 1), 1))
          ], 2),
          e("div", si, a(w.label), 1),
          _ < t.steps.length - 1 ? (s(), o("div", oi)) : d("", !0)
        ], 10, Zl))), 128))
      ]),
      e("div", ni, [
        Ce(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), li = /* @__PURE__ */ Q(ai, [["__scopeId", "data-v-2a7b3af8"]]), ii = /* @__PURE__ */ X({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = N(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = N(() => `confidence-${n.value}`), h = N(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, f) => (s(), o("span", {
      class: le(["confidence-badge", i.value, t.size])
    }, a(h.value), 3));
  }
}), es = /* @__PURE__ */ Q(ii, [["__scopeId", "data-v-17ec4b80"]]), ri = { class: "node-info" }, di = { class: "node-info-text" }, ci = { class: "item-body" }, ui = {
  key: 0,
  class: "resolved-state"
}, mi = {
  key: 1,
  class: "multiple-options"
}, vi = { class: "options-list" }, fi = ["onClick"], gi = ["name", "value", "checked", "onChange"], pi = { class: "option-content" }, hi = { class: "option-header" }, yi = { class: "option-package-id" }, wi = {
  key: 0,
  class: "option-title"
}, ki = { class: "option-meta" }, bi = {
  key: 0,
  class: "installed-badge"
}, _i = { class: "action-buttons" }, $i = {
  key: 2,
  class: "unresolved"
}, Ci = {
  key: 0,
  class: "searching-state"
}, xi = { class: "options-list" }, Si = ["onClick"], Ii = ["name", "value"], Ei = { class: "option-content" }, Mi = { class: "option-header" }, Ti = { class: "option-package-id" }, zi = {
  key: 0,
  class: "option-description"
}, Li = { class: "option-meta" }, Ri = {
  key: 0,
  class: "installed-badge"
}, Pi = {
  key: 2,
  class: "unresolved-message"
}, Di = { class: "action-buttons" }, Ni = /* @__PURE__ */ X({
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
    const g = N(() => !!n.choice);
    N(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), N(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.package_id;
    });
    const f = N(() => {
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
      e("div", ri, [
        e("span", di, [
          v[7] || (v[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", ci, [
        g.value ? (s(), o("div", ui, [
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
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", mi, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", vi, [
            (s(!0), o(V, null, Z(t.options, (p, w) => (s(), o("label", {
              key: p.package_id,
              class: le(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (_) => u(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (_) => u(w)
              }, null, 40, gi),
              e("div", pi, [
                e("div", hi, [
                  e("span", yi, a(p.package_id), 1),
                  k(es, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                p.title && p.title !== p.package_id ? (s(), o("div", wi, a(p.title), 1)) : d("", !0),
                e("div", ki, [
                  p.is_installed ? (s(), o("span", bi, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, fi))), 128))
          ]),
          e("div", _i, [
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
        ])) : (s(), o("div", $i, [
          t.isSearching ? (s(), o("div", Ci, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(V, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", xi, [
              (s(!0), o(V, null, Z(t.searchResults.slice(0, 5), (p, w) => (s(), o("label", {
                key: p.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", p)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: w
                }, null, 8, Ii),
                e("div", Ei, [
                  e("div", Mi, [
                    e("span", Ti, a(p.package_id), 1),
                    k(es, {
                      confidence: p.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  p.description ? (s(), o("div", zi, a(h(p.description)), 1)) : d("", !0),
                  e("div", Li, [
                    p.is_installed ? (s(), o("span", Ri, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, Si))), 128))
            ])
          ], 64)) : (s(), o("div", Pi, [...v[15] || (v[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Di, [
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
}), Ui = /* @__PURE__ */ Q(Ni, [["__scopeId", "data-v-c2997d1d"]]), Oi = { class: "item-navigator" }, Bi = { class: "nav-item-info" }, Fi = ["title"], Ai = { class: "nav-controls" }, Vi = { class: "nav-arrows" }, Wi = ["disabled"], ji = ["disabled"], Gi = { class: "nav-position" }, qi = /* @__PURE__ */ X({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, h) => (s(), o("div", Oi, [
      e("div", Bi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, Fi)
      ]),
      e("div", Ai, [
        e("div", Vi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: h[0] || (h[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Wi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, ji)
        ]),
        e("span", Gi, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Ls = /* @__PURE__ */ Q(qi, [["__scopeId", "data-v-74af7920"]]), Hi = ["type", "value", "placeholder", "disabled"], Ki = {
  key: 0,
  class: "base-input-error"
}, Ji = /* @__PURE__ */ X({
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
      }, null, 42, Hi),
      t.error ? (s(), o("span", Ki, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ Q(Ji, [["__scopeId", "data-v-9ba02cdc"]]), Yi = { class: "node-resolution-step" }, Xi = {
  key: 0,
  class: "auto-resolved-section"
}, Qi = { class: "section-header" }, Zi = { class: "stat-badge" }, er = { class: "resolved-packages-list" }, tr = { class: "package-info" }, sr = { class: "package-id" }, or = { class: "node-count" }, nr = { class: "package-actions" }, ar = {
  key: 0,
  class: "status-badge install"
}, lr = {
  key: 1,
  class: "status-badge skip"
}, ir = ["onClick"], rr = {
  key: 1,
  class: "section-divider"
}, dr = { class: "step-header" }, cr = { class: "stat-badge" }, ur = {
  key: 1,
  class: "step-body"
}, mr = {
  key: 3,
  class: "empty-state"
}, vr = { class: "node-modal-body" }, fr = { class: "node-search-results-container" }, gr = {
  key: 0,
  class: "node-search-results"
}, pr = ["onClick"], hr = { class: "node-result-header" }, yr = { class: "node-result-package-id" }, wr = {
  key: 0,
  class: "node-result-description"
}, kr = {
  key: 1,
  class: "node-empty-state"
}, br = {
  key: 2,
  class: "node-empty-state"
}, _r = {
  key: 3,
  class: "node-empty-state"
}, $r = { class: "node-manual-entry-modal" }, Cr = { class: "node-modal-body" }, xr = { class: "node-modal-actions" }, Sr = /* @__PURE__ */ X({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: h } = zs(), g = x(0), f = x(!1), u = x(!1), r = x(""), v = x(""), p = x([]), w = x(!1), _ = x(/* @__PURE__ */ new Map()), b = x(/* @__PURE__ */ new Set()), L = x(!1);
    function O() {
      L.value && A(), L.value = !1;
    }
    const m = N(() => n.nodes[g.value]), $ = N(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), D = N(() => m.value ? _.value.get(m.value.node_type) || [] : []), S = N(() => m.value ? b.value.has(m.value.node_type) : !1);
    bt(m, async (re) => {
      var ve;
      re && ((ve = re.options) != null && ve.length || _.value.has(re.node_type) || b.value.has(re.node_type) || n.nodeChoices.has(re.node_type) || await C(re.node_type));
    }, { immediate: !0 });
    async function C(re) {
      b.value.add(re);
      try {
        const ve = await h(re, 5);
        _.value.set(re, ve);
      } catch {
        _.value.set(re, []);
      } finally {
        b.value.delete(re);
      }
    }
    const j = N(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function W(re) {
      return n.skippedPackages.has(re);
    }
    function K(re) {
      i("package-skip", re);
    }
    const U = N(() => {
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
    }), M = N(() => {
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
    function T(re) {
      re >= 0 && re < n.nodes.length && (g.value = re);
    }
    function z() {
      m.value && i("mark-optional", m.value.node_type);
    }
    function P() {
      m.value && i("skip", m.value.node_type);
    }
    function se(re) {
      m.value && i("option-selected", m.value.node_type, re);
    }
    function we() {
      m.value && i("clear-choice", m.value.node_type);
    }
    function me() {
      m.value && (r.value = m.value.node_type, p.value = D.value, f.value = !0, Ee(r.value));
    }
    function oe() {
      v.value = "", u.value = !0;
    }
    function A() {
      f.value = !1, r.value = "", p.value = [];
    }
    function I() {
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
      m.value && (i("manual-entry", m.value.node_type, re.package_id), A());
    }
    function ae(re) {
      m.value && i("manual-entry", m.value.node_type, re.package_id);
    }
    function ne() {
      !m.value || !v.value.trim() || (i("manual-entry", m.value.node_type, v.value.trim()), I());
    }
    return (re, ve) => {
      var ze, pe;
      return s(), o("div", Yi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Xi, [
          e("div", Qi, [
            ve[6] || (ve[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Zi, a(j.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", er, [
            (s(!0), o(V, null, Z(t.autoResolvedPackages, (fe) => (s(), o("div", {
              key: fe.package_id,
              class: "resolved-package-item"
            }, [
              e("div", tr, [
                e("code", sr, a(fe.package_id), 1),
                e("span", or, a(fe.node_types_count) + " node type" + a(fe.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", nr, [
                W(fe.package_id) ? (s(), o("span", lr, " SKIPPED ")) : (s(), o("span", ar, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (q) => K(fe.package_id)
                }, a(W(fe.package_id) ? "Include" : "Skip"), 9, ir)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", rr)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(V, { key: 2 }, [
          e("div", dr, [
            ve[7] || (ve[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", cr, a($.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          m.value ? (s(), E(Ls, {
            key: 0,
            "item-name": m.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ve[0] || (ve[0] = (fe) => T(g.value - 1)),
            onNext: ve[1] || (ve[1] = (fe) => T(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          m.value ? (s(), o("div", ur, [
            k(Ui, {
              "node-type": m.value.node_type,
              "has-multiple-options": !!((ze = m.value.options) != null && ze.length),
              options: m.value.options,
              choice: (pe = t.nodeChoices) == null ? void 0 : pe.get(m.value.node_type),
              status: U.value,
              "status-label": M.value,
              "search-results": D.value,
              "is-searching": S.value,
              onMarkOptional: z,
              onSkip: P,
              onManualEntry: oe,
              onSearch: me,
              onOptionSelected: se,
              onClearChoice: we,
              onSearchResultSelected: ae
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", mr, [...ve[8] || (ve[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), E(Fe, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ve[4] || (ve[4] = Re((fe) => L.value = !0, ["self"])),
            onMouseup: Re(O, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ve[3] || (ve[3] = (fe) => L.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ve[9] || (ve[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              e("div", vr, [
                k(nt, {
                  modelValue: r.value,
                  "onUpdate:modelValue": ve[2] || (ve[2] = (fe) => r.value = fe),
                  placeholder: "Search by node type, package name...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                e("div", fr, [
                  p.value.length > 0 ? (s(), o("div", gr, [
                    (s(!0), o(V, null, Z(p.value, (fe) => (s(), o("div", {
                      key: fe.package_id,
                      class: "node-search-result-item",
                      onClick: (q) => be(fe)
                    }, [
                      e("div", hr, [
                        e("code", yr, a(fe.package_id), 1),
                        fe.match_confidence ? (s(), E(es, {
                          key: 0,
                          confidence: fe.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      fe.description ? (s(), o("div", wr, a(fe.description), 1)) : d("", !0)
                    ], 8, pr))), 128))
                  ])) : w.value ? (s(), o("div", kr, "Searching...")) : r.value ? (s(), o("div", br, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", _r, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), E(Fe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Re(I, ["self"])
          }, [
            e("div", $r, [
              e("div", { class: "node-modal-header" }, [
                ve[10] || (ve[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", Cr, [
                k(nt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ve[5] || (ve[5] = (fe) => v.value = fe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", xr, [
                  k(ue, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...ve[11] || (ve[11] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ue, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: ne
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
}), Ir = /* @__PURE__ */ Q(Sr, [["__scopeId", "data-v-281581bc"]]), Er = { class: "node-info" }, Mr = { class: "node-info-text" }, Tr = { class: "item-body" }, zr = {
  key: 0,
  class: "resolved-state"
}, Lr = {
  key: 1,
  class: "multiple-options"
}, Rr = { class: "options-list" }, Pr = ["onClick"], Dr = ["name", "value", "checked", "onChange"], Nr = { class: "option-content" }, Ur = { class: "option-header" }, Or = { class: "option-filename" }, Br = { class: "option-meta" }, Fr = { class: "option-size" }, Ar = { class: "option-category" }, Vr = { class: "option-path" }, Wr = { class: "action-buttons" }, jr = {
  key: 2,
  class: "unresolved"
}, Gr = { class: "action-buttons" }, qr = /* @__PURE__ */ X({
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
    const n = t, i = c, h = N(() => !!n.choice);
    N(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), N(() => {
      var r, v;
      return ((v = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : v.filename) || "selected";
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
      e("div", Er, [
        e("span", Mr, [
          v[7] || (v[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: le(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Tr, [
        h.value ? (s(), o("div", zr, [
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
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Lr, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Rr, [
            (s(!0), o(V, null, Z(t.options, (p, w) => (s(), o("label", {
              key: p.model.hash,
              class: le(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (_) => f(w)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (_) => f(w)
              }, null, 40, Dr),
              e("div", Nr, [
                e("div", Ur, [
                  e("span", Or, a(p.model.filename), 1),
                  k(es, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Br, [
                  e("span", Fr, a(u(p.model.size)), 1),
                  e("span", Ar, a(p.model.category), 1)
                ]),
                e("div", Vr, a(p.model.relative_path), 1)
              ])
            ], 10, Pr))), 128))
          ]),
          e("div", Wr, [
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
        ])) : (s(), o("div", jr, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Gr, [
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
}), Hr = /* @__PURE__ */ Q(qr, [["__scopeId", "data-v-8a82fefa"]]), Kr = { class: "model-resolution-step" }, Jr = { class: "step-header" }, Yr = { class: "step-info" }, Xr = { class: "step-title" }, Qr = { class: "step-description" }, Zr = { class: "stat-badge" }, ed = {
  key: 1,
  class: "step-body"
}, td = {
  key: 2,
  class: "empty-state"
}, sd = { class: "model-search-modal" }, od = { class: "model-modal-body" }, nd = {
  key: 0,
  class: "model-search-results"
}, ad = ["onClick"], ld = { class: "model-result-header" }, id = { class: "model-result-filename" }, rd = { class: "model-result-meta" }, dd = { class: "model-result-category" }, cd = { class: "model-result-size" }, ud = {
  key: 0,
  class: "model-result-path"
}, md = {
  key: 1,
  class: "model-no-results"
}, vd = {
  key: 2,
  class: "model-searching"
}, fd = { class: "model-download-url-modal" }, gd = { class: "model-modal-body" }, pd = { class: "model-input-group" }, hd = { class: "model-input-group" }, yd = { class: "model-modal-actions" }, wd = /* @__PURE__ */ X({
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
    function i(A) {
      var I;
      return A && ((I = n[A]) == null ? void 0 : I[0]) || null;
    }
    const h = t, g = c, f = x(0), u = x(!1), r = x(!1), v = x(""), p = x(""), w = x(""), _ = x([]), b = x(!1), L = N(() => h.models[f.value]), O = N(() => h.models.some((A) => A.is_download_intent)), m = N(() => h.models.filter(
      (A) => h.modelChoices.has(A.filename) || A.is_download_intent
    ).length), $ = N(() => {
      var I;
      if (!L.value) return "";
      const A = i((I = L.value.reference) == null ? void 0 : I.node_type);
      return A ? `${A}/${L.value.filename}` : "";
    }), D = N(() => {
      var I;
      if (!L.value) return "not-found";
      const A = h.modelChoices.get(L.value.filename);
      if (A)
        switch (A.action) {
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
      return L.value.is_download_intent ? "download" : (I = L.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), S = N(() => {
      var I, ie;
      if (!L.value) return;
      const A = h.modelChoices.get(L.value.filename);
      if (A)
        switch (A.action) {
          case "select":
            return (I = A.selected_model) != null && I.filename ? `→ ${A.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return L.value.is_download_intent ? "Pending Download" : (ie = L.value.options) != null && ie.length ? `${L.value.options.length} matches` : "Not Found";
    });
    function C(A) {
      A >= 0 && A < h.models.length && (f.value = A);
    }
    function j() {
      L.value && g("mark-optional", L.value.filename);
    }
    function W() {
      L.value && g("skip", L.value.filename);
    }
    function K(A) {
      L.value && g("option-selected", L.value.filename, A);
    }
    function U() {
      L.value && g("clear-choice", L.value.filename);
    }
    function M() {
      L.value && (v.value = L.value.filename, u.value = !0);
    }
    function T() {
      L.value && (p.value = L.value.download_source || "", w.value = L.value.target_path || $.value, r.value = !0);
    }
    function z() {
      u.value = !1, v.value = "", _.value = [];
    }
    function P() {
      r.value = !1, p.value = "", w.value = "";
    }
    function se() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function we(A) {
      L.value && z();
    }
    function me() {
      !L.value || !p.value.trim() || (g("download-url", L.value.filename, p.value.trim(), w.value.trim() || void 0), P());
    }
    function oe(A) {
      if (!A) return "Unknown";
      const I = A / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(A / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (A, I) => {
      var ie, te, Ee;
      return s(), o("div", Kr, [
        e("div", Jr, [
          e("div", Yr, [
            e("h3", Xr, a(O.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Qr, a(O.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Zr, a(m.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        L.value ? (s(), E(Ls, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = (be) => C(f.value - 1)),
          onNext: I[1] || (I[1] = (be) => C(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        L.value ? (s(), o("div", ed, [
          k(Hr, {
            filename: L.value.filename,
            "node-type": ((ie = L.value.reference) == null ? void 0 : ie.node_type) || "Unknown",
            "has-multiple-options": !!((te = L.value.options) != null && te.length),
            options: L.value.options,
            choice: (Ee = t.modelChoices) == null ? void 0 : Ee.get(L.value.filename),
            status: D.value,
            "status-label": S.value,
            onMarkOptional: j,
            onSkip: W,
            onDownloadUrl: T,
            onSearch: M,
            onOptionSelected: K,
            onClearChoice: U
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", td, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(Fe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Re(z, ["self"])
          }, [
            e("div", sd, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              e("div", od, [
                k(nt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": I[2] || (I[2] = (be) => v.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", nd, [
                  (s(!0), o(V, null, Z(_.value, (be) => (s(), o("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (ae) => we()
                  }, [
                    e("div", ld, [
                      e("code", id, a(be.filename), 1)
                    ]),
                    e("div", rd, [
                      e("span", dd, a(be.category), 1),
                      e("span", cd, a(oe(be.size)), 1)
                    ]),
                    be.relative_path ? (s(), o("div", ud, a(be.relative_path), 1)) : d("", !0)
                  ], 8, ad))), 128))
                ])) : v.value && !b.value ? (s(), o("div", md, ' No models found matching "' + a(v.value) + '" ', 1)) : d("", !0),
                b.value ? (s(), o("div", vd, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), E(Fe, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Re(P, ["self"])
          }, [
            e("div", fd, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", gd, [
                e("div", pd, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(nt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": I[3] || (I[3] = (be) => p.value = be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", hd, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(nt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": I[4] || (I[4] = (be) => w.value = be),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", yd, [
                  k(ue, {
                    variant: "secondary",
                    onClick: P
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ue, {
                    variant: "primary",
                    disabled: !p.value.trim() || !w.value.trim(),
                    onClick: me
                  }, {
                    default: l(() => [...I[11] || (I[11] = [
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
}), kd = /* @__PURE__ */ Q(wd, [["__scopeId", "data-v-c6acbada"]]), bd = { class: "applying-step" }, _d = {
  key: 0,
  class: "phase-content"
}, $d = {
  key: 1,
  class: "phase-content"
}, Cd = { class: "phase-description" }, xd = { class: "overall-progress" }, Sd = { class: "progress-bar" }, Id = { class: "progress-label" }, Ed = { class: "install-list" }, Md = { class: "install-icon" }, Td = { key: 0 }, zd = {
  key: 1,
  class: "spinner"
}, Ld = { key: 2 }, Rd = { key: 3 }, Pd = {
  key: 0,
  class: "install-error"
}, Dd = {
  key: 2,
  class: "phase-content"
}, Nd = { class: "phase-header" }, Ud = { class: "phase-title" }, Od = { class: "completion-summary" }, Bd = {
  key: 0,
  class: "summary-item success"
}, Fd = { class: "summary-text" }, Ad = {
  key: 1,
  class: "summary-item error"
}, Vd = { class: "summary-text" }, Wd = {
  key: 2,
  class: "failed-list"
}, jd = { class: "failed-node-id" }, Gd = { class: "failed-error" }, qd = {
  key: 4,
  class: "summary-item success"
}, Hd = {
  key: 5,
  class: "restart-prompt"
}, Kd = {
  key: 3,
  class: "phase-content error"
}, Jd = { class: "error-message" }, Yd = /* @__PURE__ */ X({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = N(() => {
      var v, p;
      const u = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!u) return 0;
      const r = ((p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0;
      return Math.round(r / u * 100);
    }), i = N(() => {
      var u;
      return ((u = c.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((r) => !r.success)) || [];
    }), h = N(() => i.value.length > 0);
    function g(u, r) {
      var p, w;
      const v = (p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.find((_) => _.node_id === u);
      return v ? v.success ? "complete" : "failed" : ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.currentIndex) === r ? "installing" : "pending";
    }
    function f(u) {
      var r, v;
      return (v = (r = c.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((p) => p.node_id === u)) == null ? void 0 : v.error;
    }
    return (u, r) => {
      var v, p, w, _;
      return s(), o("div", bd, [
        t.progress.phase === "resolving" ? (s(), o("div", _d, [...r[2] || (r[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", $d, [
          r[3] || (r[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Cd, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", xd, [
            e("div", Sd, [
              e("div", {
                class: "progress-fill",
                style: pt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Id, a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Ed, [
            (s(!0), o(V, null, Z(t.progress.nodesToInstall, (b, L) => (s(), o("div", {
              key: b,
              class: le(["install-item", g(b, L)])
            }, [
              e("span", Md, [
                g(b, L) === "pending" ? (s(), o("span", Td, "○")) : g(b, L) === "installing" ? (s(), o("span", zd, "◌")) : g(b, L) === "complete" ? (s(), o("span", Ld, "✓")) : g(b, L) === "failed" ? (s(), o("span", Rd, "✗")) : d("", !0)
              ]),
              e("code", null, a(b), 1),
              f(b) ? (s(), o("span", Pd, a(f(b)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Dd, [
          e("div", Nd, [
            e("span", {
              class: le(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", Ud, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Od, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Bd, [
              r[4] || (r[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Fd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Ad, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Vd, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Wd, [
              (s(!0), o(V, null, Z(i.value, (b) => (s(), o("div", {
                key: b.node_id,
                class: "failed-item"
              }, [
                e("code", jd, a(b.node_id), 1),
                e("span", Gd, a(b.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = (b) => u.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            h.value ? d("", !0) : (s(), o("div", qd, [...r[6] || (r[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            r[8] || (r[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Hd, [
              r[7] || (r[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: r[1] || (r[1] = (b) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Kd, [
          r[9] || (r[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Jd, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), Xd = /* @__PURE__ */ Q(Yd, [["__scopeId", "data-v-5efaae58"]]), Qd = {
  key: 0,
  class: "loading-state"
}, Zd = {
  key: 1,
  class: "wizard-content"
}, ec = {
  key: 0,
  class: "step-content"
}, tc = { class: "analysis-summary" }, sc = { class: "analysis-header" }, oc = { class: "summary-description" }, nc = { class: "stats-grid" }, ac = { class: "stat-card" }, lc = { class: "stat-items" }, ic = {
  key: 0,
  class: "stat-item success"
}, rc = { class: "stat-count" }, dc = {
  key: 1,
  class: "stat-item info"
}, cc = { class: "stat-count" }, uc = {
  key: 2,
  class: "stat-item warning"
}, mc = { class: "stat-count" }, vc = {
  key: 3,
  class: "stat-item error"
}, fc = { class: "stat-count" }, gc = { class: "stat-card" }, pc = { class: "stat-items" }, hc = { class: "stat-item success" }, yc = { class: "stat-count" }, wc = {
  key: 0,
  class: "stat-item info"
}, kc = { class: "stat-count" }, bc = {
  key: 1,
  class: "stat-item warning"
}, _c = { class: "stat-count" }, $c = {
  key: 2,
  class: "stat-item warning"
}, Cc = { class: "stat-count" }, xc = {
  key: 3,
  class: "stat-item error"
}, Sc = { class: "stat-count" }, Ic = {
  key: 0,
  class: "status-message warning"
}, Ec = { class: "status-text" }, Mc = {
  key: 1,
  class: "status-message info"
}, Tc = { class: "status-text" }, zc = {
  key: 2,
  class: "status-message info"
}, Lc = { class: "status-text" }, Rc = {
  key: 3,
  class: "status-message warning"
}, Pc = { class: "status-text" }, Dc = {
  key: 4,
  class: "status-message success"
}, Nc = {
  key: 5,
  class: "category-mismatch-section"
}, Uc = { class: "mismatch-list" }, Oc = { class: "mismatch-path" }, Bc = { class: "mismatch-target" }, Fc = {
  key: 3,
  class: "step-content"
}, Ac = { class: "review-summary" }, Vc = { class: "review-stats" }, Wc = { class: "review-stat" }, jc = { class: "stat-value" }, Gc = { class: "review-stat" }, qc = { class: "stat-value" }, Hc = { class: "review-stat" }, Kc = { class: "stat-value" }, Jc = { class: "review-stat" }, Yc = { class: "stat-value" }, Xc = {
  key: 0,
  class: "review-section"
}, Qc = { class: "section-title" }, Zc = { class: "review-items" }, eu = { class: "item-name" }, tu = { class: "item-choice" }, su = {
  key: 0,
  class: "choice-badge install"
}, ou = {
  key: 1,
  class: "choice-badge skip"
}, nu = {
  key: 1,
  class: "review-section"
}, au = { class: "section-title" }, lu = { class: "review-items" }, iu = { class: "item-name" }, ru = { class: "item-choice" }, du = {
  key: 0,
  class: "choice-badge install"
}, cu = {
  key: 1,
  class: "choice-badge optional"
}, uu = {
  key: 2,
  class: "choice-badge skip"
}, mu = {
  key: 1,
  class: "choice-badge pending"
}, vu = {
  key: 2,
  class: "review-section"
}, fu = { class: "section-title" }, gu = { class: "review-items" }, pu = { class: "item-name" }, hu = { class: "item-choice" }, yu = {
  key: 0,
  class: "choice-badge install"
}, wu = {
  key: 1,
  class: "choice-badge download"
}, ku = {
  key: 2,
  class: "choice-badge optional"
}, bu = {
  key: 3,
  class: "choice-badge skip"
}, _u = {
  key: 4,
  class: "choice-badge skip"
}, $u = {
  key: 1,
  class: "choice-badge download"
}, Cu = {
  key: 2,
  class: "choice-badge pending"
}, xu = {
  key: 3,
  class: "no-choices"
}, Su = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: h, applyResolution: g, installNodes: f, queueModelDownloads: u, progress: r, resetProgress: v } = zs(), { loadPendingDownloads: p } = Gt(), { openFileLocation: w } = Oe(), _ = x(null), b = x(!1), L = x(!1), O = x(null), m = x("analysis"), $ = x([]), D = x(/* @__PURE__ */ new Map()), S = x(/* @__PURE__ */ new Map()), C = x(/* @__PURE__ */ new Set()), j = N(() => {
      const J = [
        { id: "analysis", label: "Analysis" }
      ];
      return (K.value || T.value) && J.push({ id: "nodes", label: "Nodes" }), (U.value || M.value) && J.push({ id: "models", label: "Models" }), J.push({ id: "review", label: "Review" }), m.value === "applying" && J.push({ id: "applying", label: "Applying" }), J;
    }), W = N(() => _.value ? _.value.stats.needs_user_input : !1), K = N(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), U = N(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), M = N(() => _.value ? _.value.stats.download_intents > 0 : !1), T = N(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), z = N(() => _.value ? _.value.nodes.resolved.length : 0), P = N(() => _.value ? _.value.models.resolved.filter((J) => J.has_category_mismatch) : []), se = N(() => P.value.length > 0), we = N(() => {
      if (!_.value) return [];
      const J = _.value.nodes.resolved.filter((F) => !F.is_installed), B = /* @__PURE__ */ new Set();
      return J.filter((F) => B.has(F.package.package_id) ? !1 : (B.add(F.package.package_id), !0));
    }), me = N(() => {
      if (!_.value) return [];
      const J = _.value.nodes.resolved.filter((F) => !F.is_installed), B = /* @__PURE__ */ new Map();
      for (const F of J) {
        const Y = B.get(F.package.package_id);
        Y ? Y.node_types_count++ : B.set(F.package.package_id, {
          package_id: F.package.package_id,
          title: F.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), oe = N(() => we.value.filter((J) => !C.value.has(J.package.package_id))), A = N(() => _.value ? _.value.models.resolved.filter((J) => J.match_type === "download_intent").map((J) => ({
      filename: J.reference.widget_value,
      reference: J.reference,
      is_download_intent: !0,
      resolved_model: J.model,
      download_source: J.download_source,
      target_path: J.target_path
    })) : []), I = N(() => {
      if (!_.value) return [];
      const J = _.value.nodes.unresolved.map((F) => ({
        node_type: F.reference.node_type,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), B = _.value.nodes.ambiguous.map((F) => ({
        node_type: F.reference.node_type,
        has_multiple_options: !0,
        options: F.options.map((Y) => ({
          package_id: Y.package.package_id,
          title: Y.package.title,
          match_confidence: Y.match_confidence,
          match_type: Y.match_type,
          is_installed: Y.is_installed
        }))
      }));
      return [...J, ...B];
    }), ie = N(() => {
      if (!_.value) return [];
      const J = _.value.models.unresolved.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), B = _.value.models.ambiguous.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        has_multiple_options: !0,
        options: F.options.map((Y) => ({
          model: Y.model,
          match_confidence: Y.match_confidence,
          match_type: Y.match_type,
          has_download_source: Y.has_download_source
        }))
      }));
      return [...J, ...B];
    }), te = N(() => {
      const J = ie.value, B = A.value.map((F) => ({
        filename: F.filename,
        reference: F.reference,
        is_download_intent: !0,
        resolved_model: F.resolved_model,
        download_source: F.download_source,
        target_path: F.target_path,
        options: void 0
      }));
      return [...J, ...B];
    }), Ee = N(() => {
      let J = oe.value.length;
      for (const B of D.value.values())
        B.action === "install" && J++;
      for (const B of S.value.values())
        B.action === "select" && J++;
      return J;
    }), be = N(() => {
      let J = 0;
      for (const B of S.value.values())
        B.action === "download" && J++;
      return J;
    }), ae = N(() => {
      let J = 0;
      for (const B of D.value.values())
        B.action === "optional" && J++;
      for (const B of S.value.values())
        B.action === "optional" && J++;
      return J;
    }), ne = N(() => {
      let J = C.value.size;
      for (const B of D.value.values())
        B.action === "skip" && J++;
      for (const B of S.value.values())
        B.action === "skip" && J++;
      for (const B of I.value)
        D.value.has(B.node_type) || J++;
      for (const B of ie.value)
        S.value.has(B.filename) || J++;
      return J;
    }), re = N(() => {
      const J = {};
      if (J.analysis = { resolved: 1, total: 1 }, K.value) {
        const B = I.value.length, F = I.value.filter(
          (Y) => D.value.has(Y.node_type)
        ).length;
        J.nodes = { resolved: F, total: B };
      }
      if (U.value || M.value) {
        const B = te.value.length, F = te.value.filter(
          (Y) => S.value.has(Y.filename) || Y.is_download_intent
        ).length;
        J.models = { resolved: F, total: B };
      }
      if (J.review = { resolved: 1, total: 1 }, m.value === "applying") {
        const B = r.totalFiles || 1, F = r.completedFiles.length;
        J.applying = { resolved: F, total: B };
      }
      return J;
    });
    function ve(J) {
      m.value = J;
    }
    function ze() {
      const J = j.value.findIndex((B) => B.id === m.value);
      J > 0 && (m.value = j.value[J - 1].id);
    }
    function pe() {
      const J = j.value.findIndex((B) => B.id === m.value);
      J < j.value.length - 1 && (m.value = j.value[J + 1].id);
    }
    async function fe() {
      b.value = !0, O.value = null;
      try {
        _.value = await h(n.workflowName);
      } catch (J) {
        O.value = J instanceof Error ? J.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function q() {
      $.value.includes("analysis") || $.value.push("analysis"), K.value || T.value ? m.value = "nodes" : U.value || M.value ? m.value = "models" : m.value = "review";
    }
    function Ie(J) {
      D.value.set(J, { action: "optional" });
    }
    function xe(J) {
      D.value.set(J, { action: "skip" });
    }
    function Me(J, B) {
      var Y;
      const F = I.value.find((ye) => ye.node_type === J);
      (Y = F == null ? void 0 : F.options) != null && Y[B] && D.value.set(J, {
        action: "install",
        package_id: F.options[B].package_id
      });
    }
    function ce(J, B) {
      D.value.set(J, {
        action: "install",
        package_id: B
      });
    }
    function Je(J) {
      D.value.delete(J);
    }
    function et(J) {
      C.value.has(J) ? C.value.delete(J) : C.value.add(J);
    }
    function Ye(J) {
      S.value.set(J, { action: "optional" });
    }
    function _t(J) {
      S.value.set(J, { action: "skip" });
    }
    function ke(J, B) {
      var Y;
      const F = ie.value.find((ye) => ye.filename === J);
      (Y = F == null ? void 0 : F.options) != null && Y[B] && S.value.set(J, {
        action: "select",
        selected_model: F.options[B].model
      });
    }
    function Ae(J, B, F) {
      S.value.set(J, {
        action: "download",
        url: B,
        target_path: F
      });
    }
    function wt(J) {
      S.value.delete(J);
    }
    async function ut(J) {
      try {
        await w(J);
      } catch (B) {
        O.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function Pe() {
      var J;
      L.value = !0, O.value = null, v(), r.phase = "resolving", m.value = "applying";
      try {
        const B = await g(n.workflowName, D.value, S.value, C.value);
        B.models_to_download && B.models_to_download.length > 0 && u(n.workflowName, B.models_to_download);
        const F = [
          ...B.nodes_to_install || [],
          ...oe.value.map((ye) => ye.package.package_id)
        ];
        r.nodesToInstall = [...new Set(F)], r.nodesToInstall.length > 0 && await f(n.workflowName), r.phase = "complete", await p();
        const Y = r.installError || ((J = r.nodeInstallProgress) == null ? void 0 : J.completedNodes.some((ye) => !ye.success));
        !r.needsRestart && !Y && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (B) {
        O.value = B instanceof Error ? B.message : "Failed to apply resolution", r.error = O.value, r.phase = "error";
      } finally {
        L.value = !1;
      }
    }
    function $t() {
      i("refresh"), i("restart"), i("close");
    }
    async function lt() {
      var B;
      const J = ((B = r.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((F) => !F.success).map((F) => F.node_id)) || [];
      if (J.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: J.length
        }, r.nodesToInstall = J, r.nodesInstalled = [], r.installError = void 0;
        try {
          await f(n.workflowName), r.phase = "complete";
        } catch (F) {
          r.error = F instanceof Error ? F.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Ue(fe), (J, B) => (s(), E(Ke, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: b.value,
      error: O.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (F) => i("close"))
    }, {
      body: l(() => [
        b.value && !_.value ? (s(), o("div", Qd, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", Zd, [
          k(li, {
            steps: j.value,
            "current-step": m.value,
            "completed-steps": $.value,
            "step-stats": re.value,
            onStepChange: ve
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          m.value === "analysis" ? (s(), o("div", ec, [
            e("div", tc, [
              e("div", sc, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", oc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", nc, [
                e("div", ac, [
                  B[12] || (B[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", lc, [
                    z.value > 0 ? (s(), o("div", ic, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", rc, a(z.value), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", dc, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", cc, a(_.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", uc, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", mc, a(_.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", vc, [
                      B[10] || (B[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", fc, a(_.value.nodes.unresolved.length), 1),
                      B[11] || (B[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", gc, [
                  B[23] || (B[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", pc, [
                    e("div", hc, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", yc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", wc, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", kc, a(_.value.stats.download_intents), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    se.value ? (s(), o("div", bc, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", _c, a(P.value.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", $c, [
                      B[19] || (B[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Cc, a(_.value.models.ambiguous.length), 1),
                      B[20] || (B[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", xc, [
                      B[21] || (B[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Sc, a(_.value.models.unresolved.length), 1),
                      B[22] || (B[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              W.value ? (s(), o("div", Ic, [
                B[24] || (B[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Ec, a(I.value.length + ie.value.length) + " items need your input", 1)
              ])) : T.value ? (s(), o("div", Mc, [
                B[25] || (B[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Tc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(M.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : M.value ? (s(), o("div", zc, [
                B[26] || (B[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Lc, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : se.value ? (s(), o("div", Rc, [
                B[27] || (B[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Pc, a(P.value.length) + " model" + a(P.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Dc, [...B[28] || (B[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              se.value ? (s(), o("div", Nc, [
                B[31] || (B[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Uc, [
                  (s(!0), o(V, null, Z(P.value, (F) => {
                    var Y, ye;
                    return s(), o("div", {
                      key: F.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Oc, a(F.actual_category) + "/" + a((Y = F.model) == null ? void 0 : Y.filename), 1),
                      B[30] || (B[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Bc, a((ye = F.expected_categories) == null ? void 0 : ye[0]) + "/", 1),
                      F.file_path ? (s(), E(ue, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (it) => ut(F.file_path)
                      }, {
                        default: l(() => [...B[29] || (B[29] = [
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
          m.value === "nodes" ? (s(), E(Ir, {
            key: 1,
            nodes: I.value,
            "node-choices": D.value,
            "auto-resolved-packages": me.value,
            "skipped-packages": C.value,
            onMarkOptional: Ie,
            onSkip: xe,
            onOptionSelected: Me,
            onManualEntry: ce,
            onClearChoice: Je,
            onPackageSkip: et
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          m.value === "models" ? (s(), E(kd, {
            key: 2,
            models: te.value,
            "model-choices": S.value,
            onMarkOptional: Ye,
            onSkip: _t,
            onOptionSelected: ke,
            onDownloadUrl: Ae,
            onClearChoice: wt
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          m.value === "review" ? (s(), o("div", Fc, [
            e("div", Ac, [
              B[36] || (B[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Vc, [
                e("div", Wc, [
                  e("span", jc, a(Ee.value), 1),
                  B[32] || (B[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Gc, [
                  e("span", qc, a(be.value), 1),
                  B[33] || (B[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Hc, [
                  e("span", Kc, a(ae.value), 1),
                  B[34] || (B[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Jc, [
                  e("span", Yc, a(ne.value), 1),
                  B[35] || (B[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              me.value.length > 0 ? (s(), o("div", Xc, [
                e("h4", Qc, "Node Packages (" + a(me.value.length) + ")", 1),
                e("div", Zc, [
                  (s(!0), o(V, null, Z(me.value, (F) => (s(), o("div", {
                    key: F.package_id,
                    class: "review-item"
                  }, [
                    e("code", eu, a(F.package_id), 1),
                    e("div", tu, [
                      C.value.has(F.package_id) ? (s(), o("span", ou, "Skipped")) : (s(), o("span", su, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              I.value.length > 0 ? (s(), o("div", nu, [
                e("h4", au, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", lu, [
                  (s(!0), o(V, null, Z(I.value, (F) => {
                    var Y, ye, it, mt;
                    return s(), o("div", {
                      key: F.node_type,
                      class: "review-item"
                    }, [
                      e("code", iu, a(F.node_type), 1),
                      e("div", ru, [
                        D.value.has(F.node_type) ? (s(), o(V, { key: 0 }, [
                          ((Y = D.value.get(F.node_type)) == null ? void 0 : Y.action) === "install" ? (s(), o("span", du, a((ye = D.value.get(F.node_type)) == null ? void 0 : ye.package_id), 1)) : ((it = D.value.get(F.node_type)) == null ? void 0 : it.action) === "optional" ? (s(), o("span", cu, " Optional ")) : ((mt = D.value.get(F.node_type)) == null ? void 0 : mt.action) === "skip" ? (s(), o("span", uu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", mu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              te.value.length > 0 ? (s(), o("div", vu, [
                e("h4", fu, "Models (" + a(te.value.length) + ")", 1),
                e("div", gu, [
                  (s(!0), o(V, null, Z(te.value, (F) => {
                    var Y, ye, it, mt, tt, xt, vt;
                    return s(), o("div", {
                      key: F.filename,
                      class: "review-item"
                    }, [
                      e("code", pu, a(F.filename), 1),
                      e("div", hu, [
                        S.value.has(F.filename) ? (s(), o(V, { key: 0 }, [
                          ((Y = S.value.get(F.filename)) == null ? void 0 : Y.action) === "select" ? (s(), o("span", yu, a((it = (ye = S.value.get(F.filename)) == null ? void 0 : ye.selected_model) == null ? void 0 : it.filename), 1)) : ((mt = S.value.get(F.filename)) == null ? void 0 : mt.action) === "download" ? (s(), o("span", wu, " Download ")) : ((tt = S.value.get(F.filename)) == null ? void 0 : tt.action) === "optional" ? (s(), o("span", ku, " Optional ")) : ((xt = S.value.get(F.filename)) == null ? void 0 : xt.action) === "skip" ? (s(), o("span", bu, " Skip ")) : ((vt = S.value.get(F.filename)) == null ? void 0 : vt.action) === "cancel_download" ? (s(), o("span", _u, " Cancel Download ")) : d("", !0)
                        ], 64)) : F.is_download_intent ? (s(), o("span", $u, " Pending Download ")) : (s(), o("span", Cu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              we.value.length === 0 && I.value.length === 0 && te.value.length === 0 ? (s(), o("div", xu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          m.value === "applying" ? (s(), E(Xd, {
            key: 4,
            progress: $e(r),
            onRestart: $t,
            onRetryFailed: lt
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        m.value !== "analysis" && m.value !== "applying" ? (s(), E(ue, {
          key: 0,
          variant: "secondary",
          disabled: L.value,
          onClick: ze
        }, {
          default: l(() => [...B[37] || (B[37] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        B[41] || (B[41] = e("div", { class: "footer-spacer" }, null, -1)),
        m.value !== "applying" || $e(r).phase === "complete" || $e(r).phase === "error" ? (s(), E(ue, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (F) => i("close"))
        }, {
          default: l(() => [
            y(a($e(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        m.value === "analysis" ? (s(), E(ue, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: q
        }, {
          default: l(() => [...B[38] || (B[38] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        m.value === "nodes" ? (s(), E(ue, {
          key: 3,
          variant: "primary",
          onClick: pe
        }, {
          default: l(() => [
            y(a(U.value || M.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        m.value === "models" ? (s(), E(ue, {
          key: 4,
          variant: "primary",
          onClick: pe
        }, {
          default: l(() => [...B[39] || (B[39] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        m.value === "review" ? (s(), E(ue, {
          key: 5,
          variant: "primary",
          disabled: L.value,
          loading: L.value,
          onClick: Pe
        }, {
          default: l(() => [...B[40] || (B[40] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Iu = /* @__PURE__ */ Q(Su, [["__scopeId", "data-v-6276cf1d"]]), Eu = { class: "search-input-wrapper" }, Mu = ["value", "placeholder"], Tu = /* @__PURE__ */ X({
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
    const n = t, i = c, h = x(null);
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
    }), (r, v) => (s(), o("div", Eu, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: gt(u, ["escape"])
      }, null, 40, Mu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), zu = /* @__PURE__ */ Q(Tu, [["__scopeId", "data-v-266f857a"]]), Lu = { class: "search-bar" }, Ru = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", Lu, [
      k(zu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Lt = /* @__PURE__ */ Q(Ru, [["__scopeId", "data-v-3d51bbfd"]]), Pu = { class: "section-group" }, Du = {
  key: 0,
  class: "section-content"
}, Nu = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = x(n.initiallyExpanded);
    function g() {
      n.collapsible && (h.value = !h.value, i("toggle", h.value));
    }
    return (f, u) => (s(), o("section", Pu, [
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
      !t.collapsible || h.value ? (s(), o("div", Du, [
        Ce(f.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ Q(Nu, [["__scopeId", "data-v-c48e33ed"]]), Uu = { class: "item-header" }, Ou = {
  key: 0,
  class: "item-icon"
}, Bu = { class: "item-info" }, Fu = {
  key: 0,
  class: "item-title"
}, Au = {
  key: 1,
  class: "item-subtitle"
}, Vu = {
  key: 0,
  class: "item-details"
}, Wu = {
  key: 1,
  class: "item-actions"
}, ju = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = N(() => n.status ? `status-${n.status}` : "");
    return (h, g) => (s(), o("div", {
      class: le(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (f) => t.clickable && h.$emit("click"))
    }, [
      e("div", Uu, [
        h.$slots.icon ? (s(), o("span", Ou, [
          Ce(h.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Bu, [
          h.$slots.title ? (s(), o("div", Fu, [
            Ce(h.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          h.$slots.subtitle ? (s(), o("div", Au, [
            Ce(h.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      h.$slots.details ? (s(), o("div", Vu, [
        Ce(h.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      h.$slots.actions ? (s(), o("div", Wu, [
        Ce(h.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ Q(ju, [["__scopeId", "data-v-cc435e0e"]]), Gu = { class: "loading-state" }, qu = { class: "loading-message" }, Hu = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", Gu, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", qu, a(t.message), 1)
    ]));
  }
}), ht = /* @__PURE__ */ Q(Hu, [["__scopeId", "data-v-ad8436c9"]]), Ku = { class: "error-state" }, Ju = { class: "error-message" }, Yu = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", Ku, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Ju, a(t.message), 1),
      t.retry ? (s(), E(ee, {
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
}), yt = /* @__PURE__ */ Q(Yu, [["__scopeId", "data-v-5397be48"]]), Xu = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: h } = Oe();
    Ms();
    const g = x([]), f = x(!1), u = x(null), r = x(""), v = x(!0), p = x(!1), w = x(!1), _ = x(!1), b = x(null), L = N(
      () => g.value.filter((oe) => oe.status === "broken")
    ), O = N(
      () => g.value.filter((oe) => oe.status === "new")
    ), m = N(
      () => g.value.filter((oe) => oe.status === "modified")
    ), $ = N(
      () => g.value.filter((oe) => oe.status === "synced")
    ), D = N(() => {
      if (!r.value.trim()) return g.value;
      const oe = r.value.toLowerCase();
      return g.value.filter((A) => A.name.toLowerCase().includes(oe));
    }), S = N(
      () => L.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), C = N(
      () => O.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), j = N(
      () => m.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), W = N(
      () => $.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), K = N(
      () => p.value ? W.value : W.value.slice(0, 5)
    );
    async function U(oe = !1) {
      f.value = !0, u.value = null;
      try {
        g.value = await h(oe);
      } catch (A) {
        u.value = A instanceof Error ? A.message : "Failed to load workflows";
      } finally {
        f.value = !1;
      }
    }
    c({ loadWorkflows: U });
    function M(oe) {
      b.value = oe, w.value = !0;
    }
    function T(oe) {
      b.value = oe, _.value = !0;
    }
    function z() {
      i("refresh");
    }
    async function P() {
      _.value = !1, await U(!0);
    }
    async function se() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function we(oe) {
      const A = [];
      return oe.missing_nodes > 0 && A.push(`${oe.missing_nodes} missing node${oe.missing_nodes > 1 ? "s" : ""}`), oe.missing_models > 0 && A.push(`${oe.missing_models} missing model${oe.missing_models > 1 ? "s" : ""}`), oe.models_with_category_mismatch && oe.models_with_category_mismatch > 0 && A.push(`${oe.models_with_category_mismatch} model${oe.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), oe.pending_downloads && oe.pending_downloads > 0 && A.push(`${oe.pending_downloads} pending download${oe.pending_downloads > 1 ? "s" : ""}`), A.length > 0 ? A.join(", ") : "Has issues";
    }
    function me(oe) {
      const A = oe.sync_state === "new" ? "New" : oe.sync_state === "modified" ? "Modified" : oe.sync_state === "synced" ? "Synced" : oe.sync_state;
      return oe.has_path_sync_issues && oe.models_needing_path_sync && oe.models_needing_path_sync > 0 ? `${oe.models_needing_path_sync} model path${oe.models_needing_path_sync > 1 ? "s" : ""} need${oe.models_needing_path_sync === 1 ? "s" : ""} sync` : A || "Unknown";
    }
    return Ue(U), (oe, A) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          k(Lt, {
            modelValue: r.value,
            "onUpdate:modelValue": A[0] || (A[0] = (I) => r.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          f.value ? (s(), E(ht, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (s(), E(yt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            S.value.length ? (s(), E(Be, {
              key: 0,
              title: "BROKEN",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(S.value, (I) => (s(), E(He, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: l(() => [...A[7] || (A[7] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(we(I)), 1)
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => T(I.name)
                    }, {
                      default: l(() => [...A[8] || (A[8] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(I.name)
                    }, {
                      default: l(() => [...A[9] || (A[9] = [
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
            C.value.length ? (s(), E(Be, {
              key: 1,
              title: "NEW",
              count: C.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(C.value, (I) => (s(), E(He, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    y(a(I.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    y(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(me(I)), 1)
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(I.name)
                    }, {
                      default: l(() => [...A[10] || (A[10] = [
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
            j.value.length ? (s(), E(Be, {
              key: 2,
              title: "MODIFIED",
              count: j.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(j.value, (I) => (s(), E(He, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...A[11] || (A[11] = [
                    y("⚡", -1)
                  ])]),
                  title: l(() => [
                    y(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(me(I)), 1)
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(I.name)
                    }, {
                      default: l(() => [...A[12] || (A[12] = [
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
            W.value.length ? (s(), E(Be, {
              key: 3,
              title: "SYNCED",
              count: W.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: A[2] || (A[2] = (I) => v.value = I)
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(K.value, (I) => (s(), E(He, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    y(a(I.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    y(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(me(I)), 1)
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(I.name)
                    }, {
                      default: l(() => [...A[13] || (A[13] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && W.value.length > 5 ? (s(), E(ee, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: A[1] || (A[1] = (I) => p.value = !0),
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
            D.value.length ? d("", !0) : (s(), E(at, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w.value && b.value ? (s(), E(Kl, {
        key: 0,
        "workflow-name": b.value,
        onClose: A[3] || (A[3] = (I) => w.value = !1),
        onResolve: A[4] || (A[4] = (I) => T(b.value)),
        onRefresh: A[5] || (A[5] = (I) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      _.value && b.value ? (s(), E(Iu, {
        key: 1,
        "workflow-name": b.value,
        onClose: P,
        onInstall: z,
        onRefresh: A[6] || (A[6] = (I) => i("refresh")),
        onRestart: se
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Qu = /* @__PURE__ */ Q(Xu, [["__scopeId", "data-v-fa3f076e"]]), Zu = /* @__PURE__ */ X({
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
}), Rt = /* @__PURE__ */ Q(Zu, [["__scopeId", "data-v-ccb7816e"]]), em = {
  key: 0,
  class: "model-details"
}, tm = { class: "detail-section" }, sm = { class: "detail-row" }, om = { class: "detail-value mono" }, nm = { class: "detail-row" }, am = { class: "detail-value mono" }, lm = { class: "detail-row" }, im = { class: "detail-value mono" }, rm = { class: "detail-row" }, dm = { class: "detail-value" }, cm = { class: "detail-row" }, um = { class: "detail-value" }, mm = { class: "detail-row" }, vm = { class: "detail-value" }, fm = { class: "detail-section" }, gm = { class: "section-header" }, pm = {
  key: 0,
  class: "locations-list"
}, hm = { class: "location-path mono" }, ym = {
  key: 0,
  class: "location-modified"
}, wm = ["onClick"], km = {
  key: 1,
  class: "empty-state"
}, bm = { class: "detail-section" }, _m = { class: "section-header" }, $m = {
  key: 0,
  class: "sources-list"
}, Cm = { class: "source-type" }, xm = ["href"], Sm = ["disabled", "onClick"], Im = {
  key: 1,
  class: "empty-state"
}, Em = { class: "add-source-form" }, Mm = ["disabled"], Tm = {
  key: 2,
  class: "source-error"
}, zm = {
  key: 3,
  class: "source-success"
}, Lm = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: h, removeModelSource: g, openFileLocation: f } = Oe(), u = x(null), r = x(!0), v = x(null), p = x(""), w = x(!1), _ = x(null), b = x(null), L = x(null), O = x(null);
    let m = null;
    function $(U, M = "success", T = 2e3) {
      m && clearTimeout(m), O.value = { message: U, type: M }, m = setTimeout(() => {
        O.value = null;
      }, T);
    }
    function D(U) {
      if (!U) return "Unknown";
      const M = 1024 * 1024 * 1024, T = 1024 * 1024;
      return U >= M ? `${(U / M).toFixed(1)} GB` : U >= T ? `${(U / T).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function S(U) {
      navigator.clipboard.writeText(U), $("Copied to clipboard!");
    }
    async function C(U) {
      try {
        await f(U), $("Opening file location...");
      } catch {
        $("Failed to open location", "error");
      }
    }
    async function j() {
      if (!(!p.value.trim() || !u.value)) {
        w.value = !0, b.value = null, L.value = null;
        try {
          await h(u.value.hash, p.value.trim()), L.value = "Source added successfully!", p.value = "", await K();
        } catch (U) {
          b.value = U instanceof Error ? U.message : "Failed to add source";
        } finally {
          w.value = !1;
        }
      }
    }
    async function W(U) {
      if (u.value) {
        _.value = U, b.value = null, L.value = null;
        try {
          await g(u.value.hash, U), $("Source removed"), await K();
        } catch (M) {
          b.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function K() {
      r.value = !0, v.value = null;
      try {
        u.value = await i(n.identifier);
      } catch (U) {
        v.value = U instanceof Error ? U.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Ue(K), (U, M) => {
      var T;
      return s(), o(V, null, [
        k(Ke, {
          title: `Model Details: ${((T = u.value) == null ? void 0 : T.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: v.value,
          onClose: M[5] || (M[5] = (z) => U.$emit("close"))
        }, {
          body: l(() => {
            var z, P, se, we;
            return [
              u.value ? (s(), o("div", em, [
                e("section", tm, [
                  e("div", sm, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", om, a(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (me) => S(u.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", nm, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", am, a(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (me) => S(u.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", lm, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", im, a(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (me) => S(u.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", rm, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", dm, a(D(u.value.size)), 1)
                  ]),
                  e("div", cm, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", um, a(u.value.category), 1)
                  ]),
                  e("div", mm, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", vm, a(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", fm, [
                  e("h4", gm, "Locations (" + a(((z = u.value.locations) == null ? void 0 : z.length) || 0) + ")", 1),
                  (P = u.value.locations) != null && P.length ? (s(), o("div", pm, [
                    (s(!0), o(V, null, Z(u.value.locations, (me, oe) => (s(), o("div", {
                      key: oe,
                      class: "location-item"
                    }, [
                      e("span", hm, a(me.path), 1),
                      me.modified ? (s(), o("span", ym, "Modified: " + a(me.modified), 1)) : d("", !0),
                      me.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (A) => C(me.path)
                      }, " Open File Location ", 8, wm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", km, "No locations found"))
                ]),
                e("section", bm, [
                  e("h4", _m, "Download Sources (" + a(((se = u.value.sources) == null ? void 0 : se.length) || 0) + ")", 1),
                  (we = u.value.sources) != null && we.length ? (s(), o("div", $m, [
                    (s(!0), o(V, null, Z(u.value.sources, (me, oe) => (s(), o("div", {
                      key: oe,
                      class: "source-item"
                    }, [
                      e("span", Cm, a(me.type) + ":", 1),
                      e("a", {
                        href: me.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(me.url), 9, xm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === me.url,
                        onClick: (A) => W(me.url)
                      }, a(_.value === me.url ? "..." : "×"), 9, Sm)
                    ]))), 128))
                  ])) : (s(), o("div", Im, " No download sources configured ")),
                  e("div", Em, [
                    Ne(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (me) => p.value = me),
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
                    }, a(w.value ? "Adding..." : "Add Source"), 9, Mm)
                  ]),
                  b.value ? (s(), o("p", Tm, a(b.value), 1)) : d("", !0),
                  L.value ? (s(), o("p", zm, a(L.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (z) => U.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(Fe, { to: "body" }, [
          O.value ? (s(), o("div", {
            key: 0,
            class: le(["toast", O.value.type])
          }, a(O.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), vs = /* @__PURE__ */ Q(Lm, [["__scopeId", "data-v-f15cbb56"]]), Rm = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: h } = Oe(), g = x([]), f = x([]), u = x("production"), r = x(!1), v = x(null), p = x(""), w = x(!1), _ = x(null);
    function b() {
      w.value = !1, n("navigate", "model-index");
    }
    const L = N(
      () => g.value.reduce((K, U) => K + (U.size || 0), 0)
    ), O = N(() => {
      if (!p.value.trim()) return g.value;
      const K = p.value.toLowerCase();
      return g.value.filter((U) => U.filename.toLowerCase().includes(K));
    }), m = N(() => {
      if (!p.value.trim()) return f.value;
      const K = p.value.toLowerCase();
      return f.value.filter((U) => U.filename.toLowerCase().includes(K));
    }), $ = N(() => {
      const K = {};
      for (const M of O.value) {
        const T = M.type || "other";
        K[T] || (K[T] = []), K[T].push(M);
      }
      const U = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(K).sort(([M], [T]) => {
        const z = U.indexOf(M), P = U.indexOf(T);
        return z >= 0 && P >= 0 ? z - P : z >= 0 ? -1 : P >= 0 ? 1 : M.localeCompare(T);
      }).map(([M, T]) => ({ type: M, models: T }));
    });
    function D(K) {
      if (!K) return "Unknown";
      const U = K / (1024 * 1024);
      return U >= 1024 ? `${(U / 1024).toFixed(1)} GB` : `${U.toFixed(0)} MB`;
    }
    function S(K) {
      _.value = K.hash || K.filename;
    }
    function C(K) {
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
        const U = await h();
        u.value = U.environment || "production";
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Ue(W), (K, U) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: U[0] || (U[0] = (M) => w.value = !0)
          })
        ]),
        search: l(() => [
          k(Lt, {
            modelValue: p.value,
            "onUpdate:modelValue": U[1] || (U[1] = (M) => p.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), E(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), E(Rt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(g.value.length) + " models • " + a(D(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, Z($.value, (M) => (s(), E(Be, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(M.models, (T) => (s(), E(He, {
                  key: T.hash || T.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...U[4] || (U[4] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(T.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(D(T.size)), 1)
                  ]),
                  details: l(() => [
                    k(De, {
                      label: "Used by:",
                      value: (T.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(De, {
                      label: "Path:",
                      value: T.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => S(T)
                    }, {
                      default: l(() => [...U[5] || (U[5] = [
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
            m.value.length ? (s(), E(Be, {
              key: 1,
              title: "MISSING",
              count: m.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(m.value, (M) => (s(), E(He, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...U[6] || (U[6] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(M.filename), 1)
                  ]),
                  subtitle: l(() => [...U[7] || (U[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var T;
                    return [
                      k(De, {
                        label: "Required by:",
                        value: ((T = M.workflow_names) == null ? void 0 : T.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (T) => j(M.filename)
                    }, {
                      default: l(() => [...U[8] || (U[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (T) => C(M.filename)
                    }, {
                      default: l(() => [...U[9] || (U[9] = [
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
            !O.value.length && !m.value.length ? (s(), E(at, {
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
        onClose: U[2] || (U[2] = (M) => w.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            U[10] || (U[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(u.value) + '"', 1),
            U[11] || (U[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          k(ee, {
            variant: "primary",
            onClick: b
          }, {
            default: l(() => [...U[12] || (U[12] = [
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
        onClose: U[3] || (U[3] = (M) => _.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Pm = /* @__PURE__ */ Q(Rm, [["__scopeId", "data-v-cb4f12b3"]]), Dm = {
  key: 0,
  class: "indexing-progress"
}, Nm = { class: "progress-info" }, Um = { class: "progress-label" }, Om = { class: "progress-count" }, Bm = { class: "progress-bar" }, Fm = { class: "modal-content" }, Am = { class: "modal-header" }, Vm = { class: "modal-body" }, Wm = { class: "input-group" }, jm = { class: "current-path" }, Gm = { class: "input-group" }, qm = { class: "modal-footer" }, Hm = { class: "modal-content" }, Km = { class: "modal-header" }, Jm = { class: "modal-body" }, Ym = { class: "input-group" }, Xm = { class: "input-group" }, Qm = { class: "modal-footer" }, Zm = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: h,
      setModelsDirectory: g
    } = Oe(), { addToQueue: f } = Gt(), u = c, r = x([]), v = x(!1), p = x(!1), w = x(null), _ = x(""), b = x(!1), L = x(null), O = x(!1), m = x(null), $ = x(""), D = x(!1), S = x(!1), C = x(""), j = x(""), W = x(null), K = N(
      () => r.value.reduce((A, I) => A + (I.size || 0), 0)
    ), U = N(() => {
      if (!_.value.trim()) return r.value;
      const A = _.value.toLowerCase();
      return r.value.filter((I) => {
        const ie = I, te = I.sha256 || ie.sha256_hash || "";
        return I.filename.toLowerCase().includes(A) || te.toLowerCase().includes(A);
      });
    }), M = N(() => {
      const A = {};
      for (const ie of U.value) {
        const te = ie.type || "other";
        A[te] || (A[te] = []), A[te].push(ie);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(A).sort(([ie], [te]) => {
        const Ee = I.indexOf(ie), be = I.indexOf(te);
        return Ee >= 0 && be >= 0 ? Ee - be : Ee >= 0 ? -1 : be >= 0 ? 1 : ie.localeCompare(te);
      }).map(([ie, te]) => ({ type: ie, models: te }));
    });
    function T(A) {
      if (!A) return "Unknown";
      const I = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return A >= I ? `${(A / I).toFixed(1)} GB` : A >= ie ? `${(A / ie).toFixed(0)} MB` : `${(A / 1024).toFixed(0)} KB`;
    }
    function z(A) {
      L.value = A.hash || A.filename;
    }
    async function P() {
      p.value = !0, w.value = null;
      try {
        const A = await i();
        await me(), A.changes > 0 && console.log(`Scan complete: ${A.changes} changes detected`);
      } catch (A) {
        w.value = A instanceof Error ? A.message : "Failed to scan models";
      } finally {
        p.value = !1;
      }
    }
    async function se() {
      if ($.value.trim()) {
        D.value = !0, w.value = null;
        try {
          const A = await g($.value.trim());
          m.value = A.path, O.value = !1, $.value = "", await me(), console.log(`Directory changed: ${A.models_indexed} models indexed`), u("refresh");
        } catch (A) {
          w.value = A instanceof Error ? A.message : "Failed to change directory";
        } finally {
          D.value = !1;
        }
      }
    }
    function we() {
      if (!C.value.trim() || !j.value.trim()) return;
      const A = j.value.split("/").pop() || "model.safetensors";
      f([{
        workflow: "__manual__",
        filename: A,
        url: C.value.trim(),
        targetPath: j.value.trim()
      }]), C.value = "", j.value = "", S.value = !1;
    }
    async function me() {
      v.value = !0, w.value = null;
      try {
        r.value = await n();
      } catch (A) {
        w.value = A instanceof Error ? A.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function oe() {
      try {
        const A = await h();
        m.value = A.path;
      } catch {
      }
    }
    return Ue(() => {
      me(), oe();
    }), (A, I) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (ie) => b.value = !0)
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                disabled: p.value,
                onClick: P
              }, {
                default: l(() => [
                  y(a(p.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (ie) => O.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (ie) => S.value = !0)
              }, {
                default: l(() => [...I[16] || (I[16] = [
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
          W.value ? (s(), o("div", Dm, [
            e("div", Nm, [
              e("span", Um, a(W.value.message), 1),
              e("span", Om, a(W.value.current) + "/" + a(W.value.total), 1)
            ]),
            e("div", Bm, [
              e("div", {
                class: "progress-fill",
                style: pt({ width: `${W.value.current / W.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          k(Lt, {
            modelValue: _.value,
            "onUpdate:modelValue": I[3] || (I[3] = (ie) => _.value = ie),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || W.value ? (s(), E(ht, {
            key: 0,
            message: W.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : w.value ? (s(), E(yt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: me
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            r.value.length ? (s(), E(Rt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(r.value.length) + " models • " + a(T(K.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, Z(M.value, (ie) => (s(), E(Be, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(ie.models, (te) => (s(), E(He, {
                  key: te.sha256 || te.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(te.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(T(te.size)), 1)
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
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ee) => z(te)
                    }, {
                      default: l(() => [...I[18] || (I[18] = [
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
            U.value.length ? d("", !0) : (s(), E(at, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: b.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (ie) => b.value = !1)
      }, {
        content: l(() => [...I[19] || (I[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      L.value ? (s(), E(vs, {
        key: 0,
        identifier: L.value,
        onClose: I[5] || (I[5] = (ie) => L.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), E(Fe, { to: "body" }, [
        O.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Re((ie) => O.value = !1, ["self"]))
        }, [
          e("div", Fm, [
            e("div", Am, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (ie) => O.value = !1)
              }, "✕")
            ]),
            e("div", Vm, [
              e("div", Wm, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", jm, a(m.value || "Not set"), 1)
              ]),
              e("div", Gm, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                k(nt, {
                  modelValue: $.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (ie) => $.value = ie),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", qm, [
              k(ue, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (ie) => O.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ue, {
                variant: "primary",
                disabled: !$.value.trim() || D.value,
                loading: D.value,
                onClick: se
              }, {
                default: l(() => [
                  y(a(D.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), E(Fe, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Re((ie) => S.value = !1, ["self"]))
        }, [
          e("div", Hm, [
            e("div", Km, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (ie) => S.value = !1)
              }, "✕")
            ]),
            e("div", Jm, [
              e("div", Ym, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                k(nt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (ie) => C.value = ie),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Xm, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(nt, {
                  modelValue: j.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (ie) => j.value = ie),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Qm, [
              k(ue, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (ie) => S.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ue, {
                variant: "primary",
                disabled: !C.value.trim() || !j.value.trim(),
                onClick: we
              }, {
                default: l(() => [...I[30] || (I[30] = [
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
}), ev = /* @__PURE__ */ Q(Zm, [["__scopeId", "data-v-73b78d84"]]), tv = { class: "node-details" }, sv = { class: "status-row" }, ov = {
  key: 0,
  class: "detail-row"
}, nv = { class: "value" }, av = { class: "detail-row" }, lv = { class: "value" }, iv = {
  key: 1,
  class: "detail-row"
}, rv = { class: "value mono" }, dv = {
  key: 2,
  class: "detail-row"
}, cv = ["href"], uv = {
  key: 3,
  class: "detail-row"
}, mv = { class: "value mono small" }, vv = { class: "detail-row" }, fv = {
  key: 0,
  class: "value"
}, gv = {
  key: 1,
  class: "workflow-list"
}, pv = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = N(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = N(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), f = N(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (u, r) => (s(), E(Ke, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (v) => i("close"))
    }, {
      body: l(() => [
        e("div", tv, [
          e("div", sv, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", h.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", ov, [
            r[3] || (r[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", nv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", av, [
            r[4] || (r[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", lv, a(f.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", iv, [
            r[5] || (r[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", rv, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", dv, [
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
            ], 8, cv)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", uv, [
            r[8] || (r[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", mv, a(t.node.download_url), 1)
          ])) : d("", !0),
          r[10] || (r[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", vv, [
            r[9] || (r[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", fv, " Not used in any workflows ")) : (s(), o("div", gv, [
              (s(!0), o(V, null, Z(t.node.used_in_workflows, (v) => (s(), o("span", {
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
}), hv = /* @__PURE__ */ Q(pv, [["__scopeId", "data-v-b342f626"]]), yv = { class: "dialog-message" }, wv = {
  key: 0,
  class: "dialog-details"
}, kv = {
  key: 1,
  class: "dialog-warning"
}, bv = /* @__PURE__ */ X({
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
    return (c, n) => (s(), E(Ke, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", yv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", wv, [
          (s(!0), o(V, null, Z(t.details, (i, h) => (s(), o("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", kv, [
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
        t.secondaryAction ? (s(), E(ue, {
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
}), Rs = /* @__PURE__ */ Q(bv, [["__scopeId", "data-v-3670b9f5"]]), _v = { key: 0 }, $v = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Cv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, xv = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager", "toast"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: i, trackNodeAsDev: h, installNode: g, uninstallNode: f } = Oe(), u = x({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), r = x(!1), v = x(null), p = x(""), w = x(!1), _ = x(null), b = x(null), L = N(() => {
      if (!p.value.trim()) return u.value.nodes;
      const T = p.value.toLowerCase();
      return u.value.nodes.filter(
        (z) => {
          var P, se;
          return z.name.toLowerCase().includes(T) || ((P = z.description) == null ? void 0 : P.toLowerCase().includes(T)) || ((se = z.repository) == null ? void 0 : se.toLowerCase().includes(T));
        }
      );
    }), O = N(
      () => L.value.filter((T) => T.installed && T.tracked)
    ), m = N(
      () => L.value.filter((T) => !T.installed && T.tracked)
    ), $ = N(
      () => L.value.filter((T) => T.installed && !T.tracked)
    );
    function D(T) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[T] || T;
    }
    function S(T) {
      return !T.used_in_workflows || T.used_in_workflows.length === 0 ? "Not used in any workflows" : T.used_in_workflows.length === 1 ? T.used_in_workflows[0] : `${T.used_in_workflows.length} workflows`;
    }
    function C(T) {
      _.value = T;
    }
    function j() {
      n("open-node-manager");
    }
    function W(T) {
      b.value = {
        title: "Track as Development Node",
        message: `Track "${T}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            r.value = !0;
            const z = await h(T);
            z.status === "success" ? (n("toast", `✓ Node "${T}" tracked as development`, "success"), await M()) : n("toast", `Failed to track node: ${z.message || "Unknown error"}`, "error");
          } catch (z) {
            n("toast", `Error tracking node: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
          } finally {
            r.value = !1;
          }
        }
      };
    }
    function K(T) {
      b.value = {
        title: "Remove Untracked Node",
        message: `Remove "${T}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          b.value = null;
          try {
            r.value = !0;
            const z = await f(T);
            z.status === "success" ? (n("toast", `✓ Node "${T}" removed`, "success"), await M()) : n("toast", `Failed to remove node: ${z.message || "Unknown error"}`, "error");
          } catch (z) {
            n("toast", `Error removing node: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
          } finally {
            r.value = !1;
          }
        }
      };
    }
    function U(T) {
      b.value = {
        title: "Install Missing Node",
        message: `Install "${T}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            r.value = !0;
            const z = await g(T);
            z.status === "success" ? (n("toast", `✓ Node "${T}" installed`, "success"), await M()) : n("toast", `Failed to install node: ${z.message || "Unknown error"}`, "error");
          } catch (z) {
            n("toast", `Error installing node: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
          } finally {
            r.value = !1;
          }
        }
      };
    }
    async function M() {
      r.value = !0, v.value = null;
      try {
        u.value = await i();
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to load nodes";
      } finally {
        r.value = !1;
      }
    }
    return Ue(M), (T, z) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (P) => w.value = !0)
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: l(() => [...z[6] || (z[6] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(Lt, {
            modelValue: p.value,
            "onUpdate:modelValue": z[1] || (z[1] = (P) => p.value = P),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), E(ht, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (s(), E(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            u.value.total_count ? (s(), E(Rt, {
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
            $.value.length ? (s(), E(Be, {
              key: 1,
              title: "UNTRACKED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z($.value, (P) => (s(), E(He, {
                  key: P.name,
                  status: "warning"
                }, {
                  icon: l(() => [...z[7] || (z[7] = [
                    y("?", -1)
                  ])]),
                  title: l(() => [
                    y(a(P.name), 1)
                  ]),
                  subtitle: l(() => [...z[8] || (z[8] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    k(De, {
                      label: "Used by:",
                      value: S(P)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => C(P)
                    }, {
                      default: l(() => [...z[9] || (z[9] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => W(P.name)
                    }, {
                      default: l(() => [...z[10] || (z[10] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (se) => K(P.name)
                    }, {
                      default: l(() => [...z[11] || (z[11] = [
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
            O.value.length ? (s(), E(Be, {
              key: 2,
              title: "INSTALLED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(O.value, (P) => (s(), E(He, {
                  key: P.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    y(a(P.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    y(a(P.name), 1)
                  ]),
                  subtitle: l(() => [
                    P.version ? (s(), o("span", _v, a(P.source === "development" ? "" : "v") + a(P.version), 1)) : (s(), o("span", $v, "version unknown")),
                    e("span", Cv, " • " + a(D(P.source)), 1)
                  ]),
                  details: l(() => [
                    k(De, {
                      label: "Used by:",
                      value: S(P)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => C(P)
                    }, {
                      default: l(() => [...z[12] || (z[12] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: j
                    }, {
                      default: l(() => [...z[13] || (z[13] = [
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
            m.value.length ? (s(), E(Be, {
              key: 3,
              title: "MISSING",
              count: m.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(m.value, (P) => (s(), E(He, {
                  key: P.name,
                  status: "missing"
                }, {
                  icon: l(() => [...z[14] || (z[14] = [
                    y("!", -1)
                  ])]),
                  title: l(() => [
                    y(a(P.name), 1)
                  ]),
                  subtitle: l(() => [...z[15] || (z[15] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    k(De, {
                      label: "Required by:",
                      value: S(P)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => C(P)
                    }, {
                      default: l(() => [...z[16] || (z[16] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => U(P.name)
                    }, {
                      default: l(() => [...z[17] || (z[17] = [
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
            !O.value.length && !m.value.length && !$.value.length ? (s(), E(at, {
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
        onClose: z[3] || (z[3] = (P) => w.value = !1)
      }, {
        content: l(() => [...z[18] || (z[18] = [
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
          k(ee, {
            variant: "primary",
            onClick: z[2] || (z[2] = (P) => w.value = !1)
          }, {
            default: l(() => [...z[19] || (z[19] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), E(hv, {
        key: 0,
        node: _.value,
        onClose: z[4] || (z[4] = (P) => _.value = null)
      }, null, 8, ["node"])) : d("", !0),
      b.value ? (s(), E(Rs, {
        key: 1,
        title: b.value.title,
        message: b.value.message,
        warning: b.value.warning,
        "confirm-label": b.value.confirmLabel,
        destructive: b.value.destructive,
        onConfirm: b.value.onConfirm,
        onCancel: z[5] || (z[5] = (P) => b.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), Sv = /* @__PURE__ */ Q(xv, [["__scopeId", "data-v-40817f8b"]]);
function Ps(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Iv = { class: "remote-url-display" }, Ev = ["title"], Mv = ["title"], Tv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, zv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Lv = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = x(!1), i = N(() => {
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
    return (g, f) => (s(), o("div", Iv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, Ev),
      e("button", {
        class: le(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", zv, [...f[1] || (f[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Tv, [...f[0] || (f[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Mv)
    ]));
  }
}), Rv = /* @__PURE__ */ Q(Lv, [["__scopeId", "data-v-7768a58d"]]), Pv = { class: "remote-title" }, Dv = {
  key: 0,
  class: "default-badge"
}, Nv = {
  key: 1,
  class: "sync-badge"
}, Uv = {
  key: 0,
  class: "ahead"
}, Ov = {
  key: 1,
  class: "behind"
}, Bv = {
  key: 1,
  class: "synced"
}, Fv = ["href"], Av = {
  key: 1,
  class: "remote-url-text"
}, Vv = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = N(() => c.fetchingRemote === c.remote.name), i = N(() => c.remote.is_default), h = N(() => c.syncStatus && c.syncStatus.behind > 0), g = N(() => c.syncStatus && c.syncStatus.ahead > 0), f = N(() => c.remote.push_url !== c.remote.fetch_url), u = N(() => {
      const v = c.remote.fetch_url, p = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), r = N(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, p) => (s(), E(He, {
      status: i.value ? "synced" : void 0
    }, jt({
      icon: l(() => [
        y(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Pv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Dv, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", Nv, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(V, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Uv, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Ov, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", Bv, "✓ synced"))
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
          onClick: p[0] || (p[0] = Re(() => {
          }, ["stop"]))
        }, a(r.value), 9, Fv)) : (s(), o("span", Av, a(r.value), 1))
      ]),
      actions: l(() => [
        k(ee, {
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
        k(ee, {
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
        k(ee, {
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
        k(ee, {
          variant: "secondary",
          size: "xs",
          onClick: p[4] || (p[4] = (w) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...p[7] || (p[7] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (s(), E(ee, {
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
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(De, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              k(Rv, {
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
}), Wv = /* @__PURE__ */ Q(Vv, [["__scopeId", "data-v-8310f3a8"]]), jv = ["for"], Gv = {
  key: 0,
  class: "base-form-field-required"
}, qv = { class: "base-form-field-input" }, Hv = {
  key: 1,
  class: "base-form-field-error"
}, Kv = {
  key: 2,
  class: "base-form-field-hint"
}, Jv = /* @__PURE__ */ X({
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
    return (i, h) => (s(), o("div", {
      class: le(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Gv, "*")) : d("", !0)
      ], 8, jv)) : d("", !0),
      e("div", qv, [
        Ce(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Hv, a(t.error), 1)) : t.hint ? (s(), o("span", Kv, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ Q(Jv, [["__scopeId", "data-v-9a1cf296"]]), Yv = { class: "remote-form" }, Xv = { class: "form-header" }, Qv = { class: "form-body" }, Zv = {
  key: 0,
  class: "form-error"
}, ef = { class: "form-actions" }, tf = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = x({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = x(!1), f = x(null);
    bt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const u = N(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
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
    return (v, p) => (s(), o("div", Yv, [
      e("div", Xv, [
        k(Ze, null, {
          default: l(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Qv, [
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
        f.value ? (s(), o("div", Zv, a(f.value), 1)) : d("", !0)
      ]),
      e("div", ef, [
        k(ee, {
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
        k(ee, {
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
}), sf = /* @__PURE__ */ Q(tf, [["__scopeId", "data-v-56021b18"]]), of = { class: "conflict-summary-box" }, nf = { class: "summary-header" }, af = { class: "summary-text" }, lf = { key: 0 }, rf = {
  key: 1,
  class: "all-resolved"
}, df = { class: "summary-progress" }, cf = { class: "progress-bar" }, uf = { class: "progress-text" }, mf = /* @__PURE__ */ X({
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
    return (i, h) => (s(), o("div", of, [
      e("div", nf, [
        h[0] || (h[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", af, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", lf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", rf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", df, [
        e("div", cf, [
          e("div", {
            class: "progress-fill",
            style: pt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", uf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), vf = /* @__PURE__ */ Q(mf, [["__scopeId", "data-v-4e9e6cc9"]]), ff = { class: "modal-header" }, gf = { class: "modal-title" }, pf = { class: "modal-body" }, hf = {
  key: 0,
  class: "error-box"
}, yf = {
  key: 0,
  class: "error-hint"
}, wf = {
  key: 1,
  class: "loading-state"
}, kf = { class: "commit-summary" }, bf = {
  key: 0,
  class: "changes-section"
}, _f = {
  key: 0,
  class: "change-group",
  open: ""
}, $f = { class: "change-count" }, Cf = { class: "change-list" }, xf = {
  key: 0,
  class: "conflict-badge"
}, Sf = {
  key: 1,
  class: "change-group"
}, If = { class: "change-count" }, Ef = { class: "change-list" }, Mf = {
  key: 2,
  class: "change-group"
}, Tf = { class: "change-count" }, zf = { class: "change-list" }, Lf = {
  key: 2,
  class: "strategy-section"
}, Rf = { class: "radio-group" }, Pf = { class: "radio-option" }, Df = { class: "radio-option" }, Nf = { class: "radio-option" }, Uf = {
  key: 3,
  class: "up-to-date"
}, Of = { class: "modal-actions" }, bs = "comfygit.pullModelStrategy", Bf = /* @__PURE__ */ X({
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
    const n = t, i = c, h = x(localStorage.getItem(bs) || "skip");
    bt(h, (m) => {
      localStorage.setItem(bs, m);
    });
    const g = N(() => {
      var m;
      return ((m = n.error) == null ? void 0 : m.toLowerCase().includes("unrelated histories")) ?? !1;
    }), f = N(() => {
      if (!n.preview) return 0;
      const m = n.preview.changes.workflows;
      return m.added.length + m.modified.length + m.deleted.length;
    }), u = N(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = N(() => {
      var m;
      return f.value > 0 || u.value > 0 || (((m = n.preview) == null ? void 0 : m.changes.models.count) || 0) > 0;
    }), v = N(() => n.preview && Ps(n.preview) ? n.preview : null), p = N(() => {
      var m;
      return ((m = v.value) == null ? void 0 : m.workflow_conflicts.length) ?? 0;
    }), w = N(() => {
      var m;
      return ((m = n.conflictResolutions) == null ? void 0 : m.size) ?? 0;
    }), _ = N(
      () => p.value > 0 && w.value === p.value
    ), b = N(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !_.value));
    function L(m) {
      if (!v.value) return !1;
      const $ = m.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((D) => D.name === $);
    }
    function O(m) {
      const $ = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: h.value, force: m, resolutions: $ });
    }
    return (m, $) => {
      var D, S;
      return s(), E(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[11] || ($[11] = (C) => m.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[10] || ($[10] = Re(() => {
            }, ["stop"]))
          }, [
            e("div", ff, [
              e("h3", gf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (C) => m.$emit("close"))
              }, "✕")
            ]),
            e("div", pf, [
              t.error ? (s(), o("div", hf, [
                $[13] || ($[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  $[12] || ($[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", yf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", wf, [...$[14] || ($[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (D = t.preview) != null && D.has_uncommitted_changes ? (s(), o(V, { key: 2 }, [
                $[15] || ($[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                $[16] || ($[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", kf, [
                  $[17] || ($[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                r.value ? (s(), o("div", bf, [
                  $[21] || ($[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  f.value > 0 ? (s(), o("details", _f, [
                    e("summary", null, [
                      $[18] || ($[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", $f, a(f.value) + " changes", 1)
                    ]),
                    e("div", Cf, [
                      (s(!0), o(V, null, Z(t.preview.changes.workflows.added, (C) => (s(), o("div", {
                        key: "a-" + C,
                        class: "change-item add"
                      }, " + " + a(C), 1))), 128)),
                      (s(!0), o(V, null, Z(t.preview.changes.workflows.modified, (C) => (s(), o("div", {
                        key: "m-" + C,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(C) + " ", 1),
                        L(C) ? (s(), o("span", xf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(V, null, Z(t.preview.changes.workflows.deleted, (C) => (s(), o("div", {
                        key: "d-" + C,
                        class: "change-item delete"
                      }, " - " + a(C), 1))), 128))
                    ])
                  ])) : d("", !0),
                  u.value > 0 ? (s(), o("details", Sf, [
                    e("summary", null, [
                      $[19] || ($[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", If, a(u.value) + " to install", 1)
                    ]),
                    e("div", Ef, [
                      (s(!0), o(V, null, Z(t.preview.changes.nodes.to_install, (C) => (s(), o("div", {
                        key: C,
                        class: "change-item add"
                      }, " + " + a(C), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", Mf, [
                    e("summary", null, [
                      $[20] || ($[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Tf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", zf, [
                      (s(!0), o(V, null, Z(t.preview.changes.models.referenced, (C) => (s(), o("div", {
                        key: C,
                        class: "change-item"
                      }, a(C), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                v.value ? (s(), E(vf, {
                  key: 1,
                  "conflict-count": p.value,
                  "resolved-count": w.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Lf, [
                  $[26] || ($[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Rf, [
                    e("label", Pf, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[1] || ($[1] = (C) => h.value = C),
                        value: "all"
                      }, null, 512), [
                        [Jt, h.value]
                      ]),
                      $[22] || ($[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Df, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[2] || ($[2] = (C) => h.value = C),
                        value: "required"
                      }, null, 512), [
                        [Jt, h.value]
                      ]),
                      $[23] || ($[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Nf, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[3] || ($[3] = (C) => h.value = C),
                        value: "skip"
                      }, null, 512), [
                        [Jt, h.value]
                      ]),
                      $[24] || ($[24] = e("span", null, "Skip model downloads", -1)),
                      $[25] || ($[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  $[27] || ($[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Uf, [
                  $[28] || ($[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Of, [
              k(ee, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (C) => m.$emit("close"))
              }, {
                default: l(() => [...$[29] || ($[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(V, { key: 0 }, [
                k(ee, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: $[5] || ($[5] = (C) => O(!1))
                }, {
                  default: l(() => [...$[30] || ($[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(ee, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: $[6] || ($[6] = (C) => O(!0))
                }, {
                  default: l(() => [...$[31] || ($[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (S = t.preview) != null && S.has_uncommitted_changes ? (s(), E(ee, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: $[7] || ($[7] = (C) => O(!0))
              }, {
                default: l(() => [...$[32] || ($[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(V, { key: 2 }, [
                v.value && !_.value ? (s(), E(ee, {
                  key: 0,
                  variant: "primary",
                  onClick: $[8] || ($[8] = (C) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    y(" Resolve Conflicts (" + a(w.value) + "/" + a(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(ee, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !b.value,
                  onClick: $[9] || ($[9] = (C) => O(!1))
                }, {
                  default: l(() => [...$[33] || ($[33] = [
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
}), Ff = /* @__PURE__ */ Q(Bf, [["__scopeId", "data-v-300c7b2f"]]), Af = { class: "modal-header" }, Vf = { class: "modal-title" }, Wf = { class: "modal-body" }, jf = {
  key: 0,
  class: "loading-state"
}, Gf = {
  key: 1,
  class: "warning-box"
}, qf = {
  key: 0,
  class: "commits-section"
}, Hf = { class: "commit-list" }, Kf = { class: "commit-hash" }, Jf = { class: "commit-message" }, Yf = { class: "commit-date" }, Xf = { class: "force-option" }, Qf = { class: "checkbox-option" }, Zf = { class: "commit-summary" }, eg = {
  key: 0,
  class: "commits-section"
}, tg = { class: "commit-list" }, sg = { class: "commit-hash" }, og = { class: "commit-message" }, ng = { class: "commit-date" }, ag = {
  key: 1,
  class: "up-to-date"
}, lg = { class: "modal-actions" }, ig = /* @__PURE__ */ X({
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
    const n = c, i = x(!1);
    function h(g) {
      n("push", { force: g });
    }
    return (g, f) => {
      var u, r, v;
      return s(), E(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (p) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: f[6] || (f[6] = Re(() => {
            }, ["stop"]))
          }, [
            e("div", Af, [
              e("h3", Vf, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: f[0] || (f[0] = (p) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Wf, [
              t.loading ? (s(), o("div", jf, [...f[8] || (f[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (u = t.preview) != null && u.has_uncommitted_changes ? (s(), o("div", Gf, [...f[9] || (f[9] = [
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
                t.preview.commits_ahead > 0 ? (s(), o("div", qf, [
                  f[10] || (f[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Hf, [
                    (s(!0), o(V, null, Z(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Kf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Jf, a(p.message), 1),
                      e("span", Yf, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", Xf, [
                  e("label", Qf, [
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
                e("div", Zf, [
                  f[14] || (f[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", eg, [
                  f[15] || (f[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", tg, [
                    (s(!0), o(V, null, Z(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", sg, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", og, a(p.message), 1),
                      e("span", ng, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", ag, [
                  f[16] || (f[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", lg, [
              k(ee, {
                variant: "secondary",
                onClick: f[2] || (f[2] = (p) => g.$emit("close"))
              }, {
                default: l(() => [...f[17] || (f[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(V, { key: 0 }, [
                k(ee, {
                  variant: "secondary",
                  onClick: f[3] || (f[3] = (p) => g.$emit("pull-first"))
                }, {
                  default: l(() => [...f[18] || (f[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(ee, {
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
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(ee, {
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
}), rg = /* @__PURE__ */ Q(ig, [["__scopeId", "data-v-bc6ded53"]]), dg = { class: "resolution-choice-group" }, cg = ["disabled"], ug = ["disabled"], mg = /* @__PURE__ */ X({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", dg, [
      e("button", {
        class: le(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, cg),
      e("button", {
        class: le(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, ug)
    ]));
  }
}), vg = /* @__PURE__ */ Q(mg, [["__scopeId", "data-v-985715ed"]]), fg = { class: "conflict-header" }, gg = { class: "conflict-info" }, pg = { class: "workflow-name" }, hg = { class: "conflict-description" }, yg = {
  key: 0,
  class: "resolved-badge"
}, wg = { class: "resolved-text" }, kg = { class: "conflict-hashes" }, bg = { class: "hash-item" }, _g = { class: "hash-item" }, $g = { class: "conflict-actions" }, Cg = /* @__PURE__ */ X({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = x(n.resolution);
    bt(() => n.resolution, (r) => {
      h.value = r;
    }), bt(h, (r) => {
      r && i("resolve", r);
    });
    const g = N(() => h.value !== null), f = N(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = N(() => {
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
        e("div", fg, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", gg, [
            e("code", pg, a(t.conflict.name) + ".json", 1),
            e("div", hg, a(f.value), 1)
          ]),
          g.value ? (s(), o("div", yg, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", wg, a(u.value), 1)
          ])) : d("", !0)
        ]),
        e("div", kg, [
          e("span", bg, [
            v[3] || (v[3] = y("Your: ", -1)),
            e("code", null, a(((p = t.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", _g, [
            v[4] || (v[4] = y("Theirs: ", -1)),
            e("code", null, a(((w = t.conflict.target_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", $g, [
          k(vg, {
            modelValue: h.value,
            "onUpdate:modelValue": v[0] || (v[0] = (_) => h.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), xg = /* @__PURE__ */ Q(Cg, [["__scopeId", "data-v-506d3bbf"]]), Sg = { class: "resolution-content" }, Ig = {
  key: 0,
  class: "error-box"
}, Eg = { class: "resolution-header" }, Mg = { class: "header-stats" }, Tg = { class: "stat" }, zg = { class: "stat-value" }, Lg = { class: "stat resolved" }, Rg = { class: "stat-value" }, Pg = {
  key: 0,
  class: "stat pending"
}, Dg = { class: "stat-value" }, Ng = { class: "conflicts-list" }, Ug = {
  key: 1,
  class: "all-resolved-message"
}, Og = /* @__PURE__ */ X({
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
    const n = t, i = c, h = N(() => n.resolutions.size), g = N(() => n.workflowConflicts.length - h.value), f = N(() => h.value === n.workflowConflicts.length), u = N(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(_) {
      const b = n.resolutions.get(_);
      return (b == null ? void 0 : b.resolution) ?? null;
    }
    function v(_, b) {
      i("resolve", _, b);
    }
    function p() {
      i("close");
    }
    function w() {
      i("apply");
    }
    return (_, b) => (s(), E(Ke, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: l(() => [
        e("div", Sg, [
          t.error ? (s(), o("div", Ig, [
            b[1] || (b[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              b[0] || (b[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", Eg, [
            e("div", Mg, [
              e("div", Tg, [
                e("span", zg, a(t.workflowConflicts.length), 1),
                b[2] || (b[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Lg, [
                e("span", Rg, a(h.value), 1),
                b[3] || (b[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", Pg, [
                e("span", Dg, a(g.value), 1),
                b[4] || (b[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            b[5] || (b[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Ng, [
            (s(!0), o(V, null, Z(t.workflowConflicts, (L) => (s(), E(xg, {
              key: L.name,
              conflict: L,
              resolution: r(L.name),
              onResolve: (O) => v(L.name, O)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          f.value ? (s(), o("div", Ug, [
            b[6] || (b[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(u.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ue, {
          variant: "secondary",
          onClick: p
        }, {
          default: l(() => [...b[7] || (b[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b[8] || (b[8] = e("div", { class: "footer-spacer" }, null, -1)),
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
}), Bg = /* @__PURE__ */ Q(Og, [["__scopeId", "data-v-c58d150d"]]), Fg = { class: "node-conflict-item" }, Ag = { class: "node-header" }, Vg = { class: "node-name" }, Wg = { class: "node-id" }, jg = { class: "version-comparison" }, Gg = { class: "version yours" }, qg = { class: "version theirs" }, Hg = { class: "chosen-version" }, Kg = { class: "chosen" }, Jg = { class: "chosen-reason" }, Yg = { class: "affected-workflows" }, Xg = { class: "wf-source" }, Qg = { class: "wf-version" }, Zg = /* @__PURE__ */ X({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Fg, [
      e("div", Ag, [
        e("code", Vg, a(t.conflict.node_name), 1),
        e("span", Wg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", jg, [
        e("div", Gg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", qg, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Hg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Kg, a(t.conflict.chosen_version), 1),
        e("span", Jg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Yg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(V, null, Z(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Xg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Qg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), ep = /* @__PURE__ */ Q(Zg, [["__scopeId", "data-v-8b626725"]]), tp = { class: "validation-content" }, sp = {
  key: 0,
  class: "compatible-message"
}, op = { class: "conflicts-list" }, np = {
  key: 2,
  class: "warnings-section"
}, ap = /* @__PURE__ */ X({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = N(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, f) => (s(), E(Ke, {
      title: "Compatibility Check",
      size: "lg",
      onClose: f[3] || (f[3] = (u) => i("cancel"))
    }, {
      body: l(() => [
        e("div", tp, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", sp, [
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
            e("div", op, [
              (s(!0), o(V, null, Z(t.validation.node_conflicts, (u) => (s(), E(ep, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            f[7] || (f[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", np, [
            f[8] || (f[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(V, null, Z(t.validation.warnings, (u, r) => (s(), o("li", { key: r }, a(u), 1))), 128))
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
}), lp = /* @__PURE__ */ Q(ap, [["__scopeId", "data-v-fefd26ed"]]), ip = { key: 0 }, rp = /* @__PURE__ */ X({
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
      pushToRemote: _,
      validateMerge: b
    } = Oe(), L = x([]), O = x(null), m = x({}), $ = x(!1), D = x(null), S = x(""), C = x(!1), j = x(null), W = x(!1), K = x("add"), U = x({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = N(() => {
      if (!S.value.trim()) return L.value;
      const F = S.value.toLowerCase();
      return L.value.filter(
        (Y) => Y.name.toLowerCase().includes(F) || Y.fetch_url.toLowerCase().includes(F) || Y.push_url.toLowerCase().includes(F)
      );
    });
    async function T() {
      $.value = !0, D.value = null;
      try {
        const F = await i();
        L.value = F.remotes, O.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (Y) => {
            const ye = await r(Y.name);
            ye && (m.value[Y.name] = ye);
          })
        );
      } catch (F) {
        D.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        $.value = !1;
      }
    }
    function z() {
      K.value = "add", U.value = { name: "", fetchUrl: "", pushUrl: "" }, W.value = !0;
    }
    function P(F) {
      const Y = L.value.find((ye) => ye.name === F);
      Y && (K.value = "edit", U.value = {
        name: Y.name,
        fetchUrl: Y.fetch_url,
        pushUrl: Y.push_url
      }, W.value = !0);
    }
    async function se(F) {
      try {
        K.value === "add" ? await h(F.name, F.fetchUrl) : await f(F.name, F.fetchUrl, F.pushUrl || void 0), W.value = !1, await T();
      } catch (Y) {
        D.value = Y instanceof Error ? Y.message : "Operation failed";
      }
    }
    function we() {
      W.value = !1, U.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function me(F) {
      j.value = F;
      try {
        await u(F);
        const Y = await r(F);
        Y && (m.value[F] = Y), n("toast", `✓ Fetched from ${F}`, "success");
      } catch (Y) {
        n("toast", Y instanceof Error ? Y.message : "Fetch failed", "error");
      } finally {
        j.value = null;
      }
    }
    async function oe(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await g(F), await T();
        } catch (Y) {
          D.value = Y instanceof Error ? Y.message : "Failed to remove remote";
        }
    }
    function A() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = x("idle"), ie = N(() => I.value === "pull_preview"), te = N(
      () => I.value === "resolving" || I.value === "validating"
    ), Ee = N(
      () => I.value === "validation_review" || I.value === "executing"
    ), be = x(!1), ae = x(null), ne = x(!1), re = x(null), ve = x(!1), ze = x(null), pe = x(null), fe = x(/* @__PURE__ */ new Map()), q = x(null), Ie = x(null), xe = N(() => ze.value && Ps(ze.value) ? ze.value : null);
    async function Me(F) {
      re.value = F, I.value = "pull_preview", ve.value = !0, ze.value = null, pe.value = null;
      try {
        ze.value = await v(F);
      } catch (Y) {
        pe.value = Y instanceof Error ? Y.message : "Failed to load pull preview";
      } finally {
        ve.value = !1;
      }
    }
    function ce() {
      I.value = "idle", ze.value = null, pe.value = null, re.value = null;
    }
    async function Je(F) {
      if (!re.value) return;
      I.value = "executing", pe.value = null;
      const Y = re.value;
      try {
        const ye = await p(Y, F);
        if (ye.rolled_back) {
          pe.value = `Pull failed and was rolled back: ${ye.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Pe(), I.value = "idle", n("toast", `✓ Pulled from ${Y}`, "success"), await T();
      } catch (ye) {
        pe.value = ye instanceof Error ? ye.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function et() {
      xe.value && (I.value = "resolving", Ie.value = null);
    }
    function Ye(F, Y) {
      fe.value.set(F, { name: F, resolution: Y });
    }
    function _t() {
      I.value = "pull_preview";
    }
    async function ke() {
      I.value = "validating", Ie.value = null;
      try {
        const F = Array.from(fe.value.values());
        q.value = await b(re.value, F), I.value = "validation_review";
      } catch (F) {
        Ie.value = F instanceof Error ? F.message : "Validation failed", I.value = "resolving";
      }
    }
    async function Ae() {
      I.value = "executing";
      const F = re.value;
      try {
        const Y = Array.from(fe.value.values()), ye = await p(F, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Y
        });
        if (ye.rolled_back) {
          pe.value = `Pull failed and was rolled back: ${ye.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Pe(), I.value = "idle", n("toast", `✓ Pulled from ${F}`, "success"), await T();
      } catch (Y) {
        pe.value = Y instanceof Error ? Y.message : "Pull failed", I.value = "validation_review";
      }
    }
    function wt() {
      I.value = "resolving";
    }
    function ut() {
      Pe(), I.value = "idle";
    }
    function Pe() {
      fe.value.clear(), q.value = null, Ie.value = null, pe.value = null, ze.value = null, re.value = null;
    }
    async function $t(F) {
      re.value = F, be.value = !0, ve.value = !0, ae.value = null;
      try {
        ae.value = await w(F);
      } catch (Y) {
        D.value = Y instanceof Error ? Y.message : "Failed to load push preview";
      } finally {
        ve.value = !1;
      }
    }
    function lt() {
      be.value = !1, ae.value = null, re.value = null;
    }
    async function J(F) {
      if (!re.value) return;
      ne.value = !0;
      const Y = re.value;
      try {
        await _(Y, F), lt(), n("toast", `✓ Pushed to ${Y}`, "success"), await T();
      } catch (ye) {
        n("toast", ye instanceof Error ? ye.message : "Push failed", "error");
      } finally {
        ne.value = !1;
      }
    }
    function B() {
      const F = re.value;
      lt(), F && Me(F);
    }
    return Ue(T), (F, Y) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Y[0] || (Y[0] = (ye) => C.value = !0)
          }, {
            actions: l(() => [
              W.value ? d("", !0) : (s(), E(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: z
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
          W.value ? d("", !0) : (s(), E(Lt, {
            key: 0,
            modelValue: S.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (ye) => S.value = ye),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          $.value ? (s(), E(ht, {
            key: 0,
            message: "Loading remotes..."
          })) : D.value ? (s(), E(yt, {
            key: 1,
            message: D.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            W.value ? (s(), E(sf, {
              key: 0,
              mode: K.value,
              "remote-name": U.value.name,
              "fetch-url": U.value.fetchUrl,
              "push-url": U.value.pushUrl,
              onSubmit: se,
              onCancel: we
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            L.value.length && !W.value ? (s(), E(Rt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(L.value.length) + " remote" + a(L.value.length !== 1 ? "s" : "") + " ", 1),
                O.value ? (s(), o("span", ip, " • Tracking: " + a(O.value.remote) + "/" + a(O.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            M.value.length && !W.value ? (s(), E(Be, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(M.value, (ye) => (s(), E(Wv, {
                  key: ye.name,
                  remote: ye,
                  "sync-status": m.value[ye.name],
                  "fetching-remote": j.value,
                  onFetch: me,
                  onEdit: P,
                  onRemove: oe,
                  onPull: Me,
                  onPush: $t
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !M.value.length && !W.value ? (s(), E(at, {
              key: 3,
              icon: "🌐",
              message: S.value ? `No remotes match '${S.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                k(ee, {
                  variant: "primary",
                  onClick: z
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
        show: C.value,
        title: "About Git Remotes",
        onClose: Y[2] || (Y[2] = (ye) => C.value = !1)
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
          k(ee, {
            variant: "link",
            onClick: A
          }, {
            default: l(() => [...Y[6] || (Y[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(Ff, {
        show: ie.value,
        "remote-name": re.value || "",
        preview: ze.value,
        loading: ve.value,
        pulling: I.value === "executing",
        error: pe.value,
        "conflict-resolutions": fe.value,
        onClose: ce,
        onPull: Je,
        onOpenConflictResolution: et
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(rg, {
        show: be.value,
        "remote-name": re.value || "",
        preview: ae.value,
        loading: ve.value,
        pushing: ne.value,
        onClose: lt,
        onPush: J,
        onPullFirst: B
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      te.value && xe.value ? (s(), E(Bg, {
        key: 0,
        "workflow-conflicts": xe.value.workflow_conflicts,
        resolutions: fe.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: Ie.value,
        onClose: _t,
        onResolve: Ye,
        onApply: ke
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Ee.value && q.value ? (s(), E(lp, {
        key: 1,
        validation: q.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: Ae,
        onGoBack: wt,
        onCancel: ut
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), dp = /* @__PURE__ */ Q(rp, [["__scopeId", "data-v-9ae3b76d"]]), cp = { class: "setting-info" }, up = { class: "setting-label" }, mp = {
  key: 0,
  class: "required-marker"
}, vp = {
  key: 0,
  class: "setting-description"
}, fp = { class: "setting-control" }, gp = /* @__PURE__ */ X({
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
      e("div", cp, [
        e("div", up, [
          y(a(t.label) + " ", 1),
          t.required ? (s(), o("span", mp, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", vp, a(t.description), 1)) : d("", !0)
      ]),
      e("div", fp, [
        Ce(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ut = /* @__PURE__ */ Q(gp, [["__scopeId", "data-v-cb5d236c"]]), pp = { class: "toggle" }, hp = ["checked", "disabled"], yp = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", pp, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, hp),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), as = /* @__PURE__ */ Q(yp, [["__scopeId", "data-v-71c0f550"]]), wp = { class: "settings-section" }, kp = { class: "path-setting" }, bp = { class: "path-value" }, _p = { class: "path-setting" }, $p = { class: "path-value" }, Cp = { class: "settings-section" }, xp = { class: "settings-section" }, Sp = { class: "settings-section" }, Ip = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Oe(), i = x(!1), h = x(null), g = x(null), f = x(null), u = x(null), r = x(""), v = x(""), p = x(!0), w = x(!0), _ = x(!1), b = N(() => u.value ? r.value !== (u.value.civitai_api_key || "") : !1);
    async function L() {
      i.value = !0, h.value = null;
      try {
        f.value = await c(), u.value = { ...f.value }, r.value = f.value.civitai_api_key || "", v.value = f.value.huggingface_token || "", p.value = f.value.auto_sync_models, w.value = f.value.confirm_destructive;
        const D = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = D === "true";
      } catch (D) {
        h.value = D instanceof Error ? D.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function O() {
      var D;
      g.value = null;
      try {
        const S = {};
        r.value !== (((D = u.value) == null ? void 0 : D.civitai_api_key) || "") && (S.civitai_api_key = r.value || null), await n(S), await L(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (S) {
        g.value = {
          type: "error",
          message: S instanceof Error ? S.message : "Failed to save settings"
        };
      }
    }
    function m() {
      u.value && (r.value = u.value.civitai_api_key || "", v.value = u.value.huggingface_token || "", p.value = u.value.auto_sync_models, w.value = u.value.confirm_destructive, g.value = null);
    }
    function $(D) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(D)), console.log("[ComfyGit] Auto-refresh setting saved:", D);
    }
    return Ue(L), (D, S) => (s(), E(je, null, {
      header: l(() => [
        k(Ge, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => [
            k(ee, {
              variant: "primary",
              size: "sm",
              disabled: !b.value,
              onClick: O
            }, {
              default: l(() => [...S[5] || (S[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            b.value ? (s(), E(ee, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: m
            }, {
              default: l(() => [...S[6] || (S[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), E(ht, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (s(), E(yt, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: L
        }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
          k(Be, { title: "WORKSPACE PATHS" }, {
            default: l(() => {
              var C, j;
              return [
                e("div", wp, [
                  e("div", kp, [
                    S[7] || (S[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    S[8] || (S[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", bp, a(((C = f.value) == null ? void 0 : C.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", _p, [
                    S[9] || (S[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    S[10] || (S[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", $p, a(((j = f.value) == null ? void 0 : j.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          k(Be, { title: "API CREDENTIALS" }, {
            default: l(() => [
              e("div", Cp, [
                k(Ut, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: l(() => [
                    k(Zt, {
                      modelValue: r.value,
                      "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
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
                      "onUpdate:modelValue": S[1] || (S[1] = (C) => v.value = C),
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
              e("div", xp, [
                k(Ut, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: l(() => [
                    k(as, {
                      modelValue: _.value,
                      "onUpdate:modelValue": [
                        S[2] || (S[2] = (C) => _.value = C),
                        $
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
              e("div", Sp, [
                k(Ut, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(as, {
                      modelValue: p.value,
                      "onUpdate:modelValue": S[3] || (S[3] = (C) => p.value = C),
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
                      "onUpdate:modelValue": S[4] || (S[4] = (C) => w.value = C),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), E(Rt, {
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
}), Ep = /* @__PURE__ */ Q(Ip, [["__scopeId", "data-v-7861bd35"]]), Mp = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = Oe(), h = x([]), g = x(!1), f = x(null), u = x(!1), r = x(null), v = x(null), p = x(!1), w = N(() => h.value.length === 0 ? [] : h.value.map((O) => ({
      text: `${O.timestamp} - ${O.name} - ${O.level} - ${O.func}:${O.line} - ${O.message}`,
      level: O.level
    })));
    async function _() {
      g.value = !0, f.value = null;
      try {
        h.value = await c(void 0, 500);
      } catch (O) {
        f.value = O instanceof Error ? O.message : "Failed to load workspace logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var O;
          (O = r.value) != null && O.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function b() {
      try {
        const O = await n();
        O.exists && (v.value = O.path);
      } catch {
      }
    }
    async function L() {
      if (v.value) {
        p.value = !0;
        try {
          await i(v.value);
        } catch (O) {
          console.error("Failed to open log file:", O);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ue(() => {
      _(), b();
    }), (O, m) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = ($) => u.value = !0)
          }, {
            actions: l(() => [
              k(ee, {
                variant: "secondary",
                size: "sm",
                onClick: L,
                disabled: !v.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  y(a(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ee, {
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
          g.value ? (s(), E(ht, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (s(), E(yt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            h.value.length === 0 ? (s(), E(at, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(V, null, Z(w.value, ($, D) => (s(), o("div", {
                key: D,
                class: le(`log-line log-level-${$.level.toLowerCase()}`)
              }, a($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: u.value,
        title: "About Workspace Logs",
        onClose: m[2] || (m[2] = ($) => u.value = !1)
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
          k(ee, {
            variant: "primary",
            onClick: m[1] || (m[1] = ($) => u.value = !1)
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
}), Tp = /* @__PURE__ */ Q(Mp, [["__scopeId", "data-v-7f05352a"]]), zp = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: h } = Oe(), g = x([]), f = x(!1), u = x(null), r = x(!1), v = x("production"), p = x(null), w = x(null), _ = x(!1), b = N(() => g.value.length === 0 ? [] : g.value.map(($) => ({
      text: `${$.timestamp} - ${$.name} - ${$.level} - ${$.func}:${$.line} - ${$.message}`,
      level: $.level
    })));
    async function L() {
      f.value = !0, u.value = null;
      try {
        g.value = await c(void 0, 500);
        try {
          const $ = await n();
          v.value = $.environment || "production";
        } catch {
        }
      } catch ($) {
        u.value = $ instanceof Error ? $.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var $;
          ($ = p.value) != null && $.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function O() {
      try {
        const $ = await i();
        $.exists && (w.value = $.path);
      } catch {
      }
    }
    async function m() {
      if (w.value) {
        _.value = !0;
        try {
          await h(w.value);
        } catch ($) {
          console.error("Failed to open log file:", $);
        } finally {
          _.value = !1;
        }
      }
    }
    return Ue(() => {
      L(), O();
    }), ($, D) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (S) => r.value = !0)
          }, {
            actions: l(() => [
              k(ee, {
                variant: "secondary",
                size: "sm",
                onClick: m,
                disabled: !w.value || _.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  y(a(_.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ee, {
                variant: "secondary",
                size: "sm",
                onClick: L,
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
          f.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (s(), E(yt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length === 0 ? (s(), E(at, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (s(!0), o(V, null, Z(b.value, (S, C) => (s(), o("div", {
                key: C,
                class: le(`log-line log-level-${S.level.toLowerCase()}`)
              }, a(S.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: r.value,
        title: "About Environment Logs",
        onClose: D[2] || (D[2] = (S) => r.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            D[3] || (D[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            D[4] || (D[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          D[5] || (D[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          D[6] || (D[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          k(ee, {
            variant: "primary",
            onClick: D[1] || (D[1] = (S) => r.value = !1)
          }, {
            default: l(() => [...D[7] || (D[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Lp = /* @__PURE__ */ Q(zp, [["__scopeId", "data-v-6f8db7ce"]]), Rp = { class: "env-title" }, Pp = {
  key: 0,
  class: "current-badge"
}, Dp = {
  key: 0,
  class: "branch-info"
}, Np = /* @__PURE__ */ X({
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
    }, jt({
      icon: l(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", Rp, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Pp, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", Dp, [
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
}), Up = /* @__PURE__ */ Q(Np, [["__scopeId", "data-v-9231917a"]]), Op = { class: "env-details" }, Bp = { class: "status-row" }, Fp = {
  key: 0,
  class: "detail-row"
}, Ap = { class: "value mono" }, Vp = {
  key: 1,
  class: "detail-row"
}, Wp = { class: "value mono small" }, jp = { class: "detail-row" }, Gp = { class: "value" }, qp = { class: "detail-row" }, Hp = { class: "value" }, Kp = { class: "detail-row" }, Jp = { class: "value" }, Yp = {
  key: 2,
  class: "section-divider"
}, Xp = {
  key: 3,
  class: "detail-row"
}, Qp = { class: "value" }, Zp = {
  key: 4,
  class: "detail-row"
}, eh = { class: "value" }, th = { class: "footer-actions" }, sh = /* @__PURE__ */ X({
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
    return (h, g) => (s(), E(Ke, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (f) => n("close"))
    }, {
      body: l(() => [
        e("div", Op, [
          e("div", Bp, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: le(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Fp, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Ap, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", Vp, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Wp, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", jp, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Gp, a(t.environment.workflow_count), 1)
          ]),
          e("div", qp, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Hp, a(t.environment.node_count), 1)
          ]),
          e("div", Kp, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Jp, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Yp)) : d("", !0),
          t.environment.created_at ? (s(), o("div", Xp, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Qp, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", Zp, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", eh, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", th, [
          t.canDelete ? (s(), E(ue, {
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
}), oh = /* @__PURE__ */ Q(sh, [["__scopeId", "data-v-59855453"]]), Ds = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Ns = "3.12", fs = [
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
], Us = "auto", nh = { class: "progress-bar" }, ah = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = N(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, h) => (s(), o("div", nh, [
      e("div", {
        class: le(["progress-fill", t.variant]),
        style: pt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Os = /* @__PURE__ */ Q(ah, [["__scopeId", "data-v-1beb0512"]]), lh = { class: "task-progress" }, ih = { class: "progress-info" }, rh = { class: "progress-percentage" }, dh = { class: "progress-message" }, ch = {
  key: 0,
  class: "progress-steps"
}, uh = { class: "step-icon" }, mh = { class: "step-label" }, vh = /* @__PURE__ */ X({
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
    return (h, g) => (s(), o("div", lh, [
      k(Os, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", ih, [
        e("span", rh, a(t.progress) + "%", 1),
        e("span", dh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", ch, [
        (s(!0), o(V, null, Z(t.steps, (f) => (s(), o("div", {
          key: f.id,
          class: le(["step", n(f.id)])
        }, [
          e("span", uh, a(i(f.id)), 1),
          e("span", mh, a(f.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), ts = /* @__PURE__ */ Q(vh, [["__scopeId", "data-v-9d1de66c"]]), fh = {
  key: 0,
  class: "create-env-form"
}, gh = { class: "form-field" }, ph = { class: "form-field" }, hh = ["value"], yh = { class: "form-field" }, wh = ["disabled"], kh = ["value"], bh = { class: "form-field" }, _h = ["value"], $h = { class: "form-field form-field--checkbox" }, Ch = { class: "form-checkbox" }, xh = {
  key: 1,
  class: "create-env-progress"
}, Sh = { class: "creating-intro" }, Ih = {
  key: 0,
  class: "progress-warning"
}, Eh = {
  key: 1,
  class: "create-error"
}, Mh = { class: "error-message" }, Th = {
  key: 1,
  class: "footer-status"
}, zh = 10, Lh = /* @__PURE__ */ X({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: h, getCreateProgress: g } = Oe(), f = x(""), u = x(Ns), r = x("latest"), v = x(Us), p = x(!1), w = x([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = x(!1), b = x(!1), L = x({
      progress: 0,
      message: ""
    });
    let O = null, m = 0;
    const $ = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], D = x(null);
    function S() {
      b.value || n("close");
    }
    async function C() {
      const M = f.value.trim();
      if (M) {
        b.value = !0, L.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const T = {
            name: M,
            python_version: u.value,
            comfyui_version: r.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, z = await h(T);
          z.status === "started" ? j() : z.status === "error" && (L.value = {
            progress: 0,
            message: z.message || "Failed to start creation",
            error: z.message
          });
        } catch (T) {
          L.value = {
            progress: 0,
            message: T instanceof Error ? T.message : "Unknown error",
            error: T instanceof Error ? T.message : "Unknown error"
          };
        }
      }
    }
    function j() {
      O || (m = 0, O = window.setInterval(async () => {
        try {
          const M = await g();
          m = 0, L.value = {
            progress: M.progress ?? 0,
            message: M.message,
            phase: M.phase,
            error: M.error
          }, M.state === "complete" ? (W(), n("created", M.environment_name || f.value.trim(), p.value)) : M.state === "error" ? (W(), L.value.error = M.error || M.message) : M.state === "idle" && b.value && (W(), L.value.error = "Creation was interrupted. Please try again.");
        } catch {
          m++, m >= zh && (W(), L.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function W() {
      O && (clearInterval(O), O = null);
    }
    function K() {
      b.value = !1, L.value = { progress: 0, message: "" }, n("close");
    }
    async function U() {
      _.value = !0;
      try {
        w.value = await i();
      } catch (M) {
        console.error("Failed to load ComfyUI releases:", M);
      } finally {
        _.value = !1;
      }
    }
    return Ue(async () => {
      var M;
      await to(), (M = D.value) == null || M.focus(), U();
    }), Ss(() => {
      W();
    }), (M, T) => (s(), E(Ke, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !b.value,
      onClose: S
    }, {
      body: l(() => [
        b.value ? (s(), o("div", xh, [
          e("p", Sh, [
            T[11] || (T[11] = y(" Creating environment ", -1)),
            e("strong", null, a(f.value), 1),
            T[12] || (T[12] = y("... ", -1))
          ]),
          k(ts, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: $
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? d("", !0) : (s(), o("p", Ih, " This may take several minutes. Please wait... ")),
          L.value.error ? (s(), o("div", Eh, [
            e("p", Mh, a(L.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", fh, [
          e("div", gh, [
            T[6] || (T[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ne(e("input", {
              ref_key: "nameInput",
              ref: D,
              "onUpdate:modelValue": T[0] || (T[0] = (z) => f.value = z),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: gt(C, ["enter"])
            }, null, 544), [
              [Mt, f.value]
            ])
          ]),
          e("div", ph, [
            T[7] || (T[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": T[1] || (T[1] = (z) => u.value = z),
              class: "form-select"
            }, [
              (s(!0), o(V, null, Z($e(Ds), (z) => (s(), o("option", {
                key: z,
                value: z
              }, a(z), 9, hh))), 128))
            ], 512), [
              [Tt, u.value]
            ])
          ]),
          e("div", yh, [
            T[8] || (T[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": T[2] || (T[2] = (z) => r.value = z),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(V, null, Z(w.value, (z) => (s(), o("option", {
                key: z.tag_name,
                value: z.tag_name
              }, a(z.name), 9, kh))), 128))
            ], 8, wh), [
              [Tt, r.value]
            ])
          ]),
          e("div", bh, [
            T[9] || (T[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": T[3] || (T[3] = (z) => v.value = z),
              class: "form-select"
            }, [
              (s(!0), o(V, null, Z($e(fs), (z) => (s(), o("option", {
                key: z,
                value: z
              }, a(z) + a(z === "auto" ? " (detect GPU)" : ""), 9, _h))), 128))
            ], 512), [
              [Tt, v.value]
            ])
          ]),
          e("div", $h, [
            e("label", Ch, [
              Ne(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": T[4] || (T[4] = (z) => p.value = z)
              }, null, 512), [
                [Qt, p.value]
              ]),
              T[10] || (T[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        b.value ? (s(), o(V, { key: 1 }, [
          L.value.error ? (s(), E(ue, {
            key: 0,
            variant: "secondary",
            onClick: K
          }, {
            default: l(() => [...T[15] || (T[15] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Th, " Creating environment... "))
        ], 64)) : (s(), o(V, { key: 0 }, [
          k(ue, {
            variant: "primary",
            disabled: !f.value.trim(),
            onClick: C
          }, {
            default: l(() => [...T[13] || (T[13] = [
              y(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(ue, {
            variant: "secondary",
            onClick: T[5] || (T[5] = (z) => n("close"))
          }, {
            default: l(() => [...T[14] || (T[14] = [
              y(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Rh = /* @__PURE__ */ Q(Lh, [["__scopeId", "data-v-f37eaa42"]]), Ph = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: h } = Oe(), g = x([]), f = x(!1), u = x(null), r = x(""), v = x(!1), p = x(!1), w = x(null), _ = N(
      () => g.value.find((S) => S.is_current)
    ), b = N(() => {
      if (!r.value.trim()) return g.value;
      const S = r.value.toLowerCase();
      return g.value.filter(
        (C) => {
          var j;
          return C.name.toLowerCase().includes(S) || ((j = C.current_branch) == null ? void 0 : j.toLowerCase().includes(S));
        }
      );
    });
    function L(S, C) {
      p.value = !1, i("created", S, C);
    }
    function O() {
      p.value = !0;
    }
    function m(S) {
      w.value = S;
    }
    function $(S) {
      w.value = null, i("delete", S);
    }
    async function D() {
      f.value = !0, u.value = null;
      try {
        g.value = await h();
      } catch (S) {
        u.value = S instanceof Error ? S.message : "Failed to load environments";
      } finally {
        f.value = !1;
      }
    }
    return Ue(D), c({
      loadEnvironments: D,
      openCreateModal: O
    }), (S, C) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (j) => v.value = !0)
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: l(() => [...C[6] || (C[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              k(ee, {
                variant: "secondary",
                size: "sm",
                onClick: D
              }, {
                default: l(() => [...C[7] || (C[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(Lt, {
            modelValue: r.value,
            "onUpdate:modelValue": C[1] || (C[1] = (j) => r.value = j),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          f.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (s(), E(yt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), E(Rt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(g.value.length) + " " + a(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                _.value ? (s(), o(V, { key: 0 }, [
                  C[8] || (C[8] = y(" • Current: ", -1)),
                  e("strong", null, a(_.value.name), 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            b.value.length ? (s(), E(Be, {
              key: 1,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, Z(b.value, (j) => (s(), E(Up, {
                  key: j.name,
                  "environment-name": j.name,
                  "is-current": j.is_current,
                  "current-branch": j.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    j.is_current ? d("", !0) : (s(), E(ee, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => S.$emit("switch", j.name)
                    }, {
                      default: l(() => [...C[9] || (C[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => m(j)
                    }, {
                      default: l(() => [...C[10] || (C[10] = [
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
            b.value.length ? d("", !0) : (s(), E(at, {
              key: 2,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, jt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  k(ee, {
                    variant: "primary",
                    onClick: O
                  }, {
                    default: l(() => [...C[11] || (C[11] = [
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
        onClose: C[3] || (C[3] = (j) => v.value = !1)
      }, {
        content: l(() => [...C[12] || (C[12] = [
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
          k(ee, {
            variant: "secondary",
            onClick: C[2] || (C[2] = (j) => v.value = !1)
          }, {
            default: l(() => [...C[13] || (C[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (s(), E(oh, {
        key: 0,
        environment: w.value,
        "can-delete": g.value.length > 1,
        onClose: C[4] || (C[4] = (j) => w.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      p.value ? (s(), E(Rh, {
        key: 1,
        onClose: C[5] || (C[5] = (j) => p.value = !1),
        onCreated: L
      })) : d("", !0)
    ], 64));
  }
}), Dh = /* @__PURE__ */ Q(Ph, [["__scopeId", "data-v-d6dc0255"]]), Nh = { class: "file-path" }, Uh = { class: "file-path-text" }, Oh = ["title"], Bh = /* @__PURE__ */ X({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = x(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy:", h);
      }
    }
    return (h, g) => (s(), o("div", Nh, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Uh, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, Oh)) : d("", !0)
    ]));
  }
}), Fh = /* @__PURE__ */ Q(Bh, [["__scopeId", "data-v-f0982173"]]), Ah = { class: "export-blocked" }, Vh = { class: "issues-list" }, Wh = { class: "issue-message" }, jh = {
  key: 0,
  class: "issue-details"
}, Gh = ["onClick"], qh = { class: "issue-fix" }, Hh = /* @__PURE__ */ X({
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
    return (h, g) => (s(), E(Ke, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (f) => h.$emit("close"))
    }, {
      body: l(() => [
        e("div", Ah, [
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
          e("div", Vh, [
            (s(!0), o(V, null, Z(t.issues, (f, u) => (s(), o("div", {
              key: u,
              class: "issue-item"
            }, [
              e("div", Wh, a(f.message), 1),
              f.details.length ? (s(), o("div", jh, [
                (s(!0), o(V, null, Z(i(u), (r, v) => (s(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(r), 1))), 128)),
                f.details.length > 3 && !n[u] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (r) => n[u] = !0
                }, " +" + a(f.details.length - 3) + " more ", 9, Gh)) : d("", !0)
              ])) : d("", !0),
              e("div", qh, [
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
}), Kh = /* @__PURE__ */ Q(Hh, [["__scopeId", "data-v-b52f5e32"]]), Jh = { class: "export-warnings" }, Yh = {
  key: 0,
  class: "success-header"
}, Xh = { class: "warning-header" }, Qh = { class: "warning-summary" }, Zh = { class: "warning-title" }, e1 = { class: "models-section" }, t1 = { class: "models-list" }, s1 = { class: "model-info" }, o1 = { class: "model-filename" }, n1 = { class: "model-workflows" }, a1 = ["onClick"], l1 = /* @__PURE__ */ X({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = x(!1), g = x(null), f = N(() => h.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
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
          e("div", Jh, [
            t.models.length === 0 ? (s(), o("div", Yh, [...v[4] || (v[4] = [
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
              e("div", Xh, [
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
                e("div", Qh, [
                  e("h3", Zh, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", e1, [
                e("div", t1, [
                  (s(!0), o(V, null, Z(f.value, (p) => (s(), o("div", {
                    key: p.hash,
                    class: "model-item"
                  }, [
                    e("div", s1, [
                      e("div", o1, a(p.filename), 1),
                      e("div", n1, " Used by: " + a(p.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (w) => g.value = p.hash
                    }, " Add Source ", 8, a1)
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
      g.value ? (s(), E(vs, {
        key: 0,
        identifier: g.value,
        onClose: u
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), i1 = /* @__PURE__ */ Q(l1, [["__scopeId", "data-v-b698d882"]]), r1 = { class: "export-card" }, d1 = { class: "export-path-row" }, c1 = { class: "export-actions" }, u1 = {
  key: 1,
  class: "export-warning"
}, m1 = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Oe(), i = x(""), h = x(!1), g = x(!1), f = x(!1), u = x(null), r = x(!1), v = x(null), p = x(!1), w = x(!1), _ = N(() => h.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function b() {
      h.value = !0, u.value = null;
      try {
        const S = await c();
        v.value = S, S.can_export ? S.warnings.models_without_sources.length > 0 ? w.value = !0 : await m() : p.value = !0;
      } catch (S) {
        u.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Validation failed"
        };
      } finally {
        h.value = !1;
      }
    }
    async function L() {
      w.value = !1, await m();
    }
    async function O() {
      try {
        const S = await c();
        v.value = S;
      } catch (S) {
        console.error("Re-validation failed:", S);
      }
    }
    async function m() {
      g.value = !0;
      try {
        const S = await n(i.value || void 0);
        u.value = S;
      } catch (S) {
        u.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function $() {
      var S;
      if ((S = u.value) != null && S.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (C) {
          console.error("Failed to copy path:", C);
        }
    }
    async function D() {
      var S;
      if ((S = u.value) != null && S.path) {
        f.value = !0;
        try {
          const C = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!C.ok)
            throw new Error(`Download failed: ${C.statusText}`);
          const j = await C.blob(), W = URL.createObjectURL(j), K = u.value.path.split("/").pop() || "environment-export.tar.gz", U = document.createElement("a");
          U.href = W, U.download = K, document.body.appendChild(U), U.click(), document.body.removeChild(U), URL.revokeObjectURL(W);
        } catch (C) {
          console.error("Failed to download:", C), alert(`Download failed: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return (S, C) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (j) => r.value = !0)
          })
        ]),
        content: l(() => [
          k(Be, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", r1, [
                C[7] || (C[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", d1, [
                  k(Zt, {
                    modelValue: i.value,
                    "onUpdate:modelValue": C[1] || (C[1] = (j) => i.value = j),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", c1, [
                  k(ee, {
                    variant: "primary",
                    size: "md",
                    loading: h.value || g.value,
                    disabled: h.value || g.value,
                    onClick: b
                  }, {
                    default: l(() => [
                      C[6] || (C[6] = e("svg", {
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
          u.value ? (s(), E(Be, {
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
                        k(Fh, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (s(), E(De, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (s(), o("div", u1, [...C[8] || (C[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      loading: f.value,
                      onClick: D
                    }, {
                      default: l(() => [...C[9] || (C[9] = [
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
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: $
                    }, {
                      default: l(() => [...C[10] || (C[10] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(ee, {
                      variant: "ghost",
                      size: "sm",
                      onClick: C[2] || (C[2] = (j) => u.value = null)
                    }, {
                      default: l(() => [...C[11] || (C[11] = [
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
        onClose: C[3] || (C[3] = (j) => r.value = !1)
      }, {
        content: l(() => [...C[12] || (C[12] = [
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
      p.value && v.value ? (s(), E(Kh, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: C[4] || (C[4] = (j) => p.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      w.value && v.value ? (s(), E(i1, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: L,
        onCancel: C[5] || (C[5] = (j) => w.value = !1),
        onRevalidate: O
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), v1 = /* @__PURE__ */ Q(m1, [["__scopeId", "data-v-f4d120f2"]]), f1 = { class: "file-input-wrapper" }, g1 = ["accept", "multiple", "disabled"], p1 = /* @__PURE__ */ X({
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
    const i = n, h = x(null);
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
    }), (u, r) => (s(), o("div", f1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: f
      }, null, 40, g1),
      k(ee, {
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
}), h1 = /* @__PURE__ */ Q(p1, [["__scopeId", "data-v-cd192091"]]), y1 = {
  key: 0,
  class: "drop-zone-empty"
}, w1 = { class: "drop-zone-text" }, k1 = { class: "drop-zone-primary" }, b1 = { class: "drop-zone-secondary" }, _1 = { class: "drop-zone-actions" }, $1 = {
  key: 1,
  class: "drop-zone-file"
}, C1 = { class: "file-info" }, x1 = { class: "file-details" }, S1 = { class: "file-name" }, I1 = { class: "file-size" }, E1 = /* @__PURE__ */ X({
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
    const n = c, i = x(!1), h = x(null), g = x(0), f = N(() => h.value !== null), u = N(() => {
      var m;
      return ((m = h.value) == null ? void 0 : m.name) || "";
    }), r = N(() => {
      if (!h.value) return "";
      const m = h.value.size;
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(m) {
      var $;
      m.stopPropagation(), g.value++, ($ = m.dataTransfer) != null && $.types.includes("Files") && (i.value = !0);
    }
    function p(m) {
      m.stopPropagation(), m.dataTransfer && (m.dataTransfer.dropEffect = "copy");
    }
    function w(m) {
      m.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function _(m) {
      var D;
      m.stopPropagation(), g.value = 0, i.value = !1;
      const $ = (D = m.dataTransfer) == null ? void 0 : D.files;
      $ && $.length > 0 && L($[0]);
    }
    function b(m) {
      m.length > 0 && L(m[0]);
    }
    function L(m) {
      h.value = m, n("fileSelected", m);
    }
    function O() {
      h.value = null, n("clear");
    }
    return (m, $) => (s(), o("div", {
      class: le(["file-drop-zone", { "drop-active": i.value, "has-file": f.value }]),
      onDragenter: Re(v, ["prevent"]),
      onDragover: Re(p, ["prevent"]),
      onDragleave: Re(w, ["prevent"]),
      onDrop: Re(_, ["prevent"])
    }, [
      f.value ? (s(), o("div", $1, [
        e("div", C1, [
          $[1] || ($[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", x1, [
            e("div", S1, a(u.value), 1),
            e("div", I1, a(r.value), 1)
          ])
        ]),
        k(ee, {
          variant: "ghost",
          size: "xs",
          onClick: O,
          title: "Remove file"
        }, {
          default: l(() => [...$[2] || ($[2] = [
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
      ])) : (s(), o("div", y1, [
        $[0] || ($[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", w1, [
          e("p", k1, a(t.primaryText), 1),
          e("p", b1, a(t.secondaryText), 1)
        ]),
        e("div", _1, [
          k(h1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: b
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
}), M1 = /* @__PURE__ */ Q(E1, [["__scopeId", "data-v-0f79cb86"]]), T1 = { class: "import-preview" }, z1 = { class: "preview-header" }, L1 = {
  key: 0,
  class: "source-env"
}, R1 = { class: "preview-content" }, P1 = { class: "preview-section" }, D1 = { class: "section-header" }, N1 = { class: "section-info" }, U1 = { class: "section-count" }, O1 = {
  key: 0,
  class: "item-list"
}, B1 = { class: "item-name" }, F1 = {
  key: 0,
  class: "item-more"
}, A1 = { class: "preview-section" }, V1 = { class: "section-header" }, W1 = { class: "section-info" }, j1 = { class: "section-count" }, G1 = {
  key: 0,
  class: "item-list"
}, q1 = { class: "item-details" }, H1 = { class: "item-name" }, K1 = { class: "item-meta" }, J1 = {
  key: 0,
  class: "item-more"
}, Y1 = { class: "preview-section" }, X1 = { class: "section-header" }, Q1 = { class: "section-info" }, Z1 = { class: "section-count" }, ey = {
  key: 0,
  class: "item-list"
}, ty = { class: "item-name" }, sy = {
  key: 0,
  class: "item-more"
}, oy = {
  key: 0,
  class: "preview-section"
}, ny = { class: "git-info" }, ay = /* @__PURE__ */ X({
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
    const c = t, n = N(() => c.workflows.length), i = N(() => c.models.length), h = N(() => c.nodes.length);
    function g(f) {
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (f, u) => (s(), o("div", T1, [
      e("div", z1, [
        k(Ze, null, {
          default: l(() => [...u[0] || (u[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", L1, [
          u[1] || (u[1] = y(" From: ", -1)),
          k(is, null, {
            default: l(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", R1, [
        e("div", P1, [
          e("div", D1, [
            u[3] || (u[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", N1, [
              u[2] || (u[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", U1, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", O1, [
            (s(!0), o(V, null, Z(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              u[4] || (u[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", B1, a(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", F1, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", A1, [
          e("div", V1, [
            u[6] || (u[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", W1, [
              u[5] || (u[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", j1, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", G1, [
            (s(!0), o(V, null, Z(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", q1, [
                e("span", H1, a(r.filename), 1),
                e("span", K1, a(g(r.size)) + " • " + a(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", J1, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Y1, [
          e("div", X1, [
            u[9] || (u[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Q1, [
              u[8] || (u[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Z1, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", ey, [
            (s(!0), o(V, null, Z(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              u[10] || (u[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ty, a(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", sy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", oy, [
          u[11] || (u[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", ny, [
            t.gitBranch ? (s(), E(De, {
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
            t.gitCommit ? (s(), E(De, {
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
}), ly = /* @__PURE__ */ Q(ay, [["__scopeId", "data-v-182fe113"]]), iy = { class: "import-config" }, ry = { class: "config-container" }, dy = { class: "config-field" }, cy = { class: "input-wrapper" }, uy = ["value"], my = {
  key: 0,
  class: "validating-indicator"
}, vy = {
  key: 1,
  class: "valid-indicator"
}, fy = {
  key: 0,
  class: "field-error"
}, gy = { class: "config-field" }, py = { class: "strategy-options" }, hy = ["value", "checked", "onChange"], yy = { class: "strategy-content" }, wy = { class: "strategy-label" }, ky = { class: "strategy-description" }, by = { class: "config-field switch-field" }, _y = { class: "switch-label" }, $y = ["checked"], Cy = { class: "advanced-section" }, xy = { class: "advanced-content" }, Sy = { class: "config-field" }, Iy = ["value"], Ey = ["value"], My = /* @__PURE__ */ X({
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
    const n = t, i = c, h = x(!1), g = x(!1);
    bt(() => n.nameError, (p) => {
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
    return (p, w) => (s(), o("div", iy, [
      k(Ze, null, {
        default: l(() => [...w[2] || (w[2] = [
          y("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", ry, [
        e("div", dy, [
          k(Yt, { required: "" }, {
            default: l(() => [...w[3] || (w[3] = [
              y("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", cy, [
            e("input", {
              type: "text",
              class: le(["name-input", { error: t.nameError || t.name.length === 0, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: r,
              onBlur: v
            }, null, 42, uy),
            h.value ? (s(), o("span", my, "...")) : g.value ? (s(), o("span", vy, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", fy, a(t.nameError), 1)) : d("", !0),
          w[4] || (w[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", gy, [
          k(Yt, null, {
            default: l(() => [...w[5] || (w[5] = [
              y("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", py, [
            (s(), o(V, null, Z(f, (_) => e("label", {
              key: _.value,
              class: le(["strategy-option", { active: t.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: t.modelStrategy === _.value,
                onChange: (b) => i("update:modelStrategy", _.value)
              }, null, 40, hy),
              e("div", yy, [
                e("span", wy, a(_.label), 1),
                e("span", ky, a(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", by, [
          e("label", _y, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: w[0] || (w[0] = (_) => i("update:switchAfterImport", _.target.checked))
            }, null, 40, $y),
            w[6] || (w[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", Cy, [
          w[8] || (w[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", xy, [
            e("div", Sy, [
              k(Yt, null, {
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
                (s(!0), o(V, null, Z($e(fs), (_) => (s(), o("option", {
                  key: _,
                  value: _
                }, a(_) + a(_ === "auto" ? " (detect GPU)" : ""), 9, Ey))), 128))
              ], 40, Iy)
            ])
          ])
        ])
      ])
    ]));
  }
}), Ty = /* @__PURE__ */ Q(My, [["__scopeId", "data-v-89ea06a1"]]), zy = {
  key: 0,
  class: "import-empty"
}, Ly = { class: "git-import-section" }, Ry = { class: "git-url-input-row" }, Py = ["disabled"], Dy = {
  key: 0,
  class: "git-error"
}, Ny = {
  key: 1,
  class: "import-configure"
}, Uy = { class: "selected-file-bar" }, Oy = {
  key: 0,
  class: "file-bar-content"
}, By = { class: "file-bar-info" }, Fy = { class: "file-bar-name" }, Ay = { class: "file-bar-size" }, Vy = {
  key: 1,
  class: "file-bar-content"
}, Wy = { class: "file-bar-info" }, jy = { class: "file-bar-name" }, Gy = {
  key: 0,
  class: "preview-loading"
}, qy = { class: "import-actions" }, Hy = {
  key: 2,
  class: "import-progress"
}, Ky = { class: "creating-intro" }, Jy = {
  key: 0,
  class: "progress-warning"
}, Yy = {
  key: 1,
  class: "import-error"
}, Xy = { class: "error-message" }, Qy = {
  key: 3,
  class: "import-complete"
}, Zy = { class: "complete-message" }, ew = { class: "complete-title" }, tw = { class: "complete-details" }, sw = { class: "complete-actions" }, ow = /* @__PURE__ */ X({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const { previewTarballImport: n, previewGitImport: i, validateEnvironmentName: h, executeImport: g, executeGitImport: f, getImportProgress: u } = Oe(), r = c;
    let v = null;
    const p = x(!1), w = x(null), _ = x(!1), b = x(!1), L = x(!1), O = x(""), m = x(!1), $ = x(null), D = x(""), S = x(null), C = x(!1), j = x(null), W = x(null), K = x({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), U = x(null), M = x({
      message: "Preparing import...",
      phase: "",
      progress: 0,
      error: null
    }), T = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], z = N(() => {
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
        workflows: ae.workflows.map((ne) => ne.name),
        models: ae.models.map((ne) => ({
          filename: ne.filename,
          size: 0,
          type: ne.relative_path.split("/")[0] || "model"
        })),
        nodes: ae.nodes.map((ne) => ne.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), P = N(() => !m.value && !$.value && W.value && K.value.name.length > 0 && !U.value && (w.value || S.value));
    async function se(ae) {
      w.value = ae, m.value = !0, $.value = null, W.value = null;
      try {
        const ne = await n(ae);
        W.value = ne;
      } catch (ne) {
        $.value = ne instanceof Error ? ne.message : "Failed to analyze file", console.error("Preview error:", ne);
      } finally {
        m.value = !1;
      }
    }
    function we() {
      w.value = null, S.value = null, D.value = "", j.value = null, b.value = !1, L.value = !1, O.value = "", W.value = null, $.value = null, K.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, U.value = null;
    }
    function me() {
      Ee(), we(), _.value = !1, m.value = !1, C.value = !1, M.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function oe() {
      if (D.value.trim()) {
        C.value = !0, j.value = null;
        try {
          const ae = await i(D.value.trim());
          S.value = D.value.trim(), W.value = ae;
        } catch (ae) {
          j.value = ae instanceof Error ? ae.message : "Failed to analyze repository";
        } finally {
          C.value = !1;
        }
      }
    }
    function A(ae) {
      try {
        const ne = new URL(ae);
        return ne.host + ne.pathname.replace(/\.git$/, "");
      } catch {
        return ae;
      }
    }
    async function I(ae) {
      if (!ae) {
        U.value = "Environment name is required";
        return;
      }
      try {
        const ne = await h(ae);
        U.value = ne.valid ? null : ne.error || "Invalid name";
      } catch {
        U.value = "Failed to validate name";
      }
    }
    async function ie() {
      if (K.value.name && !(!w.value && !S.value)) {
        _.value = !0, b.value = !1, M.value = { message: `Creating environment '${K.value.name}'...`, phase: "", progress: 0, error: null };
        try {
          let ae;
          if (w.value)
            ae = await g(
              w.value,
              K.value.name,
              K.value.modelStrategy,
              K.value.torchBackend
            );
          else if (S.value)
            ae = await f(
              S.value,
              K.value.name,
              K.value.modelStrategy,
              K.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ae.status === "started" ? te() : (L.value = !1, O.value = ae.message, _.value = !1, b.value = !0);
        } catch (ae) {
          L.value = !1, O.value = ae instanceof Error ? ae.message : "Unknown error occurred during import", _.value = !1, b.value = !0;
        }
      }
    }
    function te() {
      v || (v = setInterval(async () => {
        try {
          const ae = await u();
          M.value = {
            message: ae.message,
            phase: ae.phase || "",
            progress: ae.progress ?? (ae.state === "importing" ? 50 : 0),
            error: ae.error || null
          }, ae.state === "complete" ? (Ee(), L.value = !0, O.value = `Environment '${ae.environment_name}' created successfully`, _.value = !1, b.value = !0, K.value.switchAfterImport && ae.environment_name && r("import-complete-switch", ae.environment_name)) : ae.state === "error" && (Ee(), L.value = !1, O.value = ae.error || ae.message, _.value = !1, b.value = !0);
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
    return (ae, ne) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: ne[0] || (ne[0] = (re) => p.value = !0)
          })
        ]),
        content: l(() => {
          var re;
          return [
            !w.value && !S.value && !_.value ? (s(), o("div", zy, [
              k(M1, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: se
              }),
              ne[9] || (ne[9] = e("div", { class: "import-divider" }, [
                e("span", null, "or")
              ], -1)),
              e("div", Ly, [
                ne[7] || (ne[7] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
                e("div", Ry, [
                  Ne(e("input", {
                    type: "text",
                    class: "git-url-input",
                    "onUpdate:modelValue": ne[1] || (ne[1] = (ve) => D.value = ve),
                    placeholder: "https://github.com/user/repo.git",
                    onKeyup: gt(oe, ["enter"]),
                    disabled: C.value
                  }, null, 40, Py), [
                    [Mt, D.value]
                  ]),
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    disabled: !D.value.trim() || C.value,
                    onClick: oe
                  }, {
                    default: l(() => [
                      y(a(C.value ? "Analyzing..." : "ANALYZE"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                j.value ? (s(), o("div", Dy, a(j.value), 1)) : d("", !0),
                ne[8] || (ne[8] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
              ])
            ])) : (w.value || S.value) && !_.value && !b.value ? (s(), o("div", Ny, [
              e("div", Uy, [
                w.value ? (s(), o("div", Oy, [
                  ne[10] || (ne[10] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", By, [
                    e("div", Fy, a(w.value.name), 1),
                    e("div", Ay, a(be(w.value.size)), 1)
                  ])
                ])) : S.value ? (s(), o("div", Vy, [
                  ne[12] || (ne[12] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
                  e("div", Wy, [
                    e("div", jy, a(A(S.value)), 1),
                    ne[11] || (ne[11] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
                  ])
                ])) : d("", !0),
                k(ee, {
                  variant: "ghost",
                  size: "sm",
                  onClick: we
                }, {
                  default: l(() => [...ne[13] || (ne[13] = [
                    y(" Change Source ", -1)
                  ])]),
                  _: 1
                })
              ]),
              m.value ? (s(), o("div", Gy, [...ne[14] || (ne[14] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : $.value ? (s(), E(st, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [$.value]
              }, null, 8, ["details"])) : W.value ? (s(), E(ly, {
                key: 2,
                "source-environment": z.value.sourceEnvironment,
                workflows: z.value.workflows,
                models: z.value.models,
                nodes: z.value.nodes,
                "git-branch": z.value.gitBranch,
                "git-commit": z.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
              W.value ? (s(), E(Ty, {
                key: 3,
                name: K.value.name,
                "onUpdate:name": ne[2] || (ne[2] = (ve) => K.value.name = ve),
                "model-strategy": K.value.modelStrategy,
                "onUpdate:modelStrategy": ne[3] || (ne[3] = (ve) => K.value.modelStrategy = ve),
                "torch-backend": K.value.torchBackend,
                "onUpdate:torchBackend": ne[4] || (ne[4] = (ve) => K.value.torchBackend = ve),
                "switch-after-import": K.value.switchAfterImport,
                "onUpdate:switchAfterImport": ne[5] || (ne[5] = (ve) => K.value.switchAfterImport = ve),
                "name-error": U.value,
                onValidateName: I
              }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
              K.value.modelStrategy === "skip" && ((re = W.value) != null && re.models_needing_download) ? (s(), E(st, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${W.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : d("", !0),
              e("div", qy, [
                k(ee, {
                  variant: "secondary",
                  size: "md",
                  onClick: we
                }, {
                  default: l(() => [...ne[15] || (ne[15] = [
                    y(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                k(ee, {
                  variant: "primary",
                  size: "md",
                  disabled: !P.value,
                  onClick: ie
                }, {
                  default: l(() => [...ne[16] || (ne[16] = [
                    y(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ])) : _.value ? (s(), o("div", Hy, [
              e("p", Ky, [
                ne[17] || (ne[17] = y(" Importing environment ", -1)),
                e("strong", null, a(K.value.name), 1),
                ne[18] || (ne[18] = y("... ", -1))
              ]),
              k(ts, {
                progress: M.value.progress,
                message: M.value.message,
                "current-phase": M.value.phase,
                variant: M.value.error ? "error" : "default",
                "show-steps": !0,
                steps: T
              }, null, 8, ["progress", "message", "current-phase", "variant"]),
              M.value.error ? d("", !0) : (s(), o("p", Jy, " This may take several minutes. Please wait... ")),
              M.value.error ? (s(), o("div", Yy, [
                e("p", Xy, a(M.value.error), 1)
              ])) : d("", !0)
            ])) : b.value ? (s(), o("div", Qy, [
              e("div", {
                class: le(["complete-icon", L.value ? "success" : "error"])
              }, a(L.value ? "✓" : "✕"), 3),
              e("div", Zy, [
                e("div", ew, a(L.value ? "Import Successful" : "Import Failed"), 1),
                e("div", tw, a(O.value), 1)
              ]),
              e("div", sw, [
                k(ee, {
                  variant: "primary",
                  size: "md",
                  onClick: me
                }, {
                  default: l(() => [...ne[19] || (ne[19] = [
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
        onClose: ne[6] || (ne[6] = (re) => p.value = !1)
      }, {
        content: l(() => [...ne[20] || (ne[20] = [
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
}), nw = /* @__PURE__ */ Q(ow, [["__scopeId", "data-v-e3c47581"]]), aw = { class: "header-info" }, lw = { class: "commit-hash" }, iw = {
  key: 0,
  class: "commit-refs"
}, rw = { class: "commit-message" }, dw = { class: "commit-date" }, cw = {
  key: 0,
  class: "loading"
}, uw = {
  key: 1,
  class: "changes-section"
}, mw = { class: "stats-row" }, vw = { class: "stat" }, fw = { class: "stat insertions" }, gw = { class: "stat deletions" }, pw = {
  key: 0,
  class: "change-group"
}, hw = {
  key: 1,
  class: "change-group"
}, yw = {
  key: 0,
  class: "version"
}, ww = {
  key: 2,
  class: "change-group"
}, kw = { class: "change-item" }, bw = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Oe(), i = x(null), h = x(!0), g = N(() => {
      if (!i.value) return !1;
      const u = i.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), f = N(() => {
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
    }), (u, r) => (s(), E(Ke, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (v) => u.$emit("close"))
    }, {
      header: l(() => {
        var v, p, w, _;
        return [
          e("div", aw, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", lw, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (_ = (w = i.value) == null ? void 0 : w.refs) != null && _.length ? (s(), o("span", iw, [
              (s(!0), o(V, null, Z(i.value.refs, (b) => (s(), o("span", {
                key: b,
                class: "ref-badge"
              }, a(b), 1))), 128))
            ])) : d("", !0)
          ]),
          k(ue, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (b) => u.$emit("close"))
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
          e("div", rw, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", dw, a(((p = i.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (s(), o("div", cw, "Loading details...")) : i.value ? (s(), o("div", uw, [
            e("div", mw, [
              e("span", vw, a(i.value.stats.files_changed) + " files", 1),
              e("span", fw, "+" + a(i.value.stats.insertions), 1),
              e("span", gw, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", pw, [
              k(At, { variant: "section" }, {
                default: l(() => [...r[6] || (r[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, Z(i.value.changes.workflows.added, (w) => (s(), o("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(V, null, Z(i.value.changes.workflows.modified, (w) => (s(), o("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(V, null, Z(i.value.changes.workflows.deleted, (w) => (s(), o("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w), 1)
              ]))), 128))
            ])) : d("", !0),
            f.value ? (s(), o("div", hw, [
              k(At, { variant: "section" }, {
                default: l(() => [...r[10] || (r[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, Z(i.value.changes.nodes.added, (w) => (s(), o("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w.name), 1),
                w.version ? (s(), o("span", yw, "(" + a(w.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(V, null, Z(i.value.changes.nodes.removed, (w) => (s(), o("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", ww, [
              k(At, { variant: "section" }, {
                default: l(() => [...r[13] || (r[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", kw, [
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
}), _w = /* @__PURE__ */ Q(bw, [["__scopeId", "data-v-d256ff6d"]]), $w = { class: "base-textarea-wrapper" }, Cw = ["value", "rows", "placeholder", "disabled", "maxlength"], xw = {
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
          n[1] || (n[1] = gt(Re((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = gt(Re((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
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
}), $s = /* @__PURE__ */ Q(zw, [["__scopeId", "data-v-bf17c831"]]), Lw = { class: "popover-header" }, Rw = { class: "popover-body" }, Pw = {
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
    const n = t, i = c, { commit: h } = Oe(), g = x(""), f = x(!1), u = x(!1), r = x(null), v = N(() => {
      if (!n.status) return !1;
      const O = n.status.workflows;
      return O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || n.status.has_changes;
    }), p = N(() => {
      if (!n.status) return !1;
      const O = n.status.workflows, m = n.status.git_changes;
      return O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || m.nodes_added.length > 0 || m.nodes_removed.length > 0;
    }), w = N(() => {
      var O;
      return (O = n.status) != null && O.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (m) => m.has_issues && (m.sync_state === "new" || m.sync_state === "modified")
      ) : [];
    }), _ = N(() => w.value.length > 0), b = N(() => _.value && !u.value);
    async function L() {
      var O, m, $;
      if (!(_.value && !u.value) && !(!v.value || !g.value.trim() || f.value)) {
        f.value = !0, r.value = null;
        try {
          const D = await h(g.value.trim(), u.value);
          D.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((O = D.summary) == null ? void 0 : O.new) || 0} new, ${((m = D.summary) == null ? void 0 : m.modified) || 0} modified, ${(($ = D.summary) == null ? void 0 : $.deleted) || 0} deleted`
          }, g.value = "", u.value = !1, setTimeout(() => i("committed"), 1e3)) : D.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : D.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: D.message || "Commit failed" };
        } catch (D) {
          r.value = { type: "error", message: D instanceof Error ? D.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (O, m) => t.asModal ? (s(), E(Fe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: m[5] || (m[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: m[4] || (m[4] = Re(() => {
          }, ["stop"]))
        }, [
          e("div", Lw, [
            m[11] || (m[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: m[0] || (m[0] = ($) => i("close"))
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
          e("div", Rw, [
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
            _.value ? (s(), o("div", Ww, [
              e("div", jw, [
                m[18] || (m[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Gw, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", qw, [
                (s(!0), o(V, null, Z(w.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  y(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              k($s, {
                modelValue: u.value,
                "onUpdate:modelValue": m[1] || (m[1] = ($) => u.value = $),
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
                "onUpdate:modelValue": m[2] || (m[2] = ($) => g.value = $),
                placeholder: b.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || f.value || b.value,
                rows: 3,
                onCtrlEnter: L
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
              onClick: m[3] || (m[3] = ($) => i("close"))
            }, {
              default: l(() => [...m[20] || (m[20] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ue, {
              variant: u.value ? "danger" : "primary",
              disabled: !v.value || !g.value.trim() || f.value || b.value,
              loading: f.value,
              onClick: L
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
          onClick: m[6] || (m[6] = ($) => i("close"))
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
        _.value ? (s(), o("div", i0, [
          e("div", r0, [
            m[29] || (m[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", d0, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", c0, [
            (s(!0), o(V, null, Z(w.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              y(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          k($s, {
            modelValue: u.value,
            "onUpdate:modelValue": m[7] || (m[7] = ($) => u.value = $),
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
            "onUpdate:modelValue": m[8] || (m[8] = ($) => g.value = $),
            placeholder: b.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || f.value || b.value,
            rows: 3,
            onCtrlEnter: L
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
          onClick: m[9] || (m[9] = ($) => i("close"))
        }, {
          default: l(() => [...m[31] || (m[31] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(ue, {
          variant: u.value ? "danger" : "primary",
          disabled: !v.value || !g.value.trim() || f.value || b.value,
          loading: f.value,
          onClick: L
        }, {
          default: l(() => [
            y(a(f.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Bs = /* @__PURE__ */ Q(v0, [["__scopeId", "data-v-aa2a9bdf"]]), f0 = { class: "modal-header" }, g0 = { class: "modal-body" }, p0 = { class: "switch-message" }, h0 = { class: "switch-details" }, y0 = { class: "modal-actions" }, w0 = /* @__PURE__ */ X({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), E(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Re(() => {
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
            k(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ee, {
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
    }), i = N(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), h = N(() => {
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
    return (g, f) => (s(), E(Fe, { to: "body" }, [
      t.show ? (s(), o("div", b0, [
        e("div", _0, [
          f[1] || (f[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", $0, [
            k(Os, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", C0, [
              e("div", x0, a(t.progress) + "%", 1),
              e("div", S0, a(n.value), 1)
            ]),
            e("div", I0, [
              (s(!0), o(V, null, Z(h.value, (u) => (s(), o("div", {
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
}), z0 = /* @__PURE__ */ Q(T0, [["__scopeId", "data-v-768a5078"]]), L0 = { class: "modal-header" }, R0 = { class: "modal-body" }, P0 = {
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
    return (c, n) => (s(), E(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Re(() => {
          }, ["stop"]))
        }, [
          e("div", L0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", R0, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", P0, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", D0, [
                (s(!0), o(V, null, Z(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", N0, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", U0, [
                (s(!0), o(V, null, Z(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
            k(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ee, {
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
    } = Oe(), p = x(n.initialStep || 1), w = x(null), _ = x(!1), b = x(n.defaultPath), L = x(!!n.detectedModelsDir), O = x(n.detectedModelsDir || ""), m = x(null), $ = x(null), D = x(null), S = x(null), C = x("my-new-env"), j = x(Ns), W = x("latest"), K = x(Us), U = x(!0), M = x(null), T = x([{ tag_name: "latest", name: "Latest", published_at: "" }]), z = x(!1), P = x(!1), se = x(!1), we = x({ progress: 0, message: "" }), me = x({ progress: 0, message: "" }), oe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], A = x(0), I = x(null), ie = x(0), te = x(null), Ee = N(() => {
      var xe, Me;
      const fe = (xe = b.value) == null ? void 0 : xe.trim(), q = !m.value, Ie = !L.value || !$.value && ((Me = O.value) == null ? void 0 : Me.trim());
      return fe && q && Ie;
    }), be = N(() => {
      var fe;
      return (fe = C.value) == null ? void 0 : fe.trim();
    });
    async function ae() {
      var fe;
      if (m.value = null, !!((fe = b.value) != null && fe.trim()))
        try {
          const q = await f({ path: b.value, type: "workspace" });
          q.valid || (m.value = q.error || "Invalid path");
        } catch (q) {
          m.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function ne() {
      var fe;
      if ($.value = null, D.value = null, S.value = null, !!((fe = O.value) != null && fe.trim()))
        try {
          const q = await f({ path: O.value, type: "models" });
          if (q.valid)
            S.value = q.model_count ?? null;
          else if ($.value = q.error || "Invalid path", q.suggestion) {
            D.value = q.suggestion, O.value = q.suggestion, $.value = null;
            const Ie = await f({ path: q.suggestion, type: "models" });
            Ie.valid && (S.value = Ie.model_count ?? null);
          }
        } catch (q) {
          $.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function re() {
      var fe, q, Ie;
      if (m.value = null, $.value = null, await ae(), !m.value && !(L.value && ((fe = O.value) != null && fe.trim()) && (await ne(), $.value))) {
        P.value = !0;
        try {
          await h({
            workspace_path: ((q = b.value) == null ? void 0 : q.trim()) || n.defaultPath,
            models_directory: L.value && ((Ie = O.value) == null ? void 0 : Ie.trim()) || null
          }), A.value = 0, I.value = Date.now();
          const xe = setInterval(async () => {
            if (I.value && Date.now() - I.value > _k) {
              clearInterval(xe), P.value = !1, m.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Me = await g();
              if (A.value = 0, Me.state === "idle" && P.value) {
                clearInterval(xe), P.value = !1, m.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              we.value = { progress: Me.progress, message: Me.message }, Me.state === "complete" ? (clearInterval(xe), P.value = !1, p.value = 2, ze()) : Me.state === "error" && (clearInterval(xe), P.value = !1, m.value = Me.error || "Workspace creation failed");
            } catch (Me) {
              A.value++, console.warn(`Polling failure ${A.value}/${Kt}:`, Me), A.value >= Kt && (clearInterval(xe), P.value = !1, m.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (xe) {
          P.value = !1, m.value = xe instanceof Error ? xe.message : "Failed to create workspace";
        }
      }
    }
    async function ve() {
      se.value = !0, M.value = null;
      try {
        const fe = {
          name: C.value.trim() || "my-new-env",
          python_version: j.value,
          comfyui_version: W.value,
          torch_backend: K.value,
          switch_after: U.value
        };
        if ((await u(fe)).status === "started") {
          ie.value = 0, te.value = Date.now();
          const Ie = setInterval(async () => {
            if (te.value && Date.now() - te.value > $k) {
              clearInterval(Ie), se.value = !1, M.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const xe = await r();
              if (ie.value = 0, xe.state === "idle" && se.value) {
                clearInterval(Ie), se.value = !1, M.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (me.value = {
                progress: xe.progress ?? 0,
                message: xe.message,
                phase: xe.phase
              }, xe.state === "complete") {
                clearInterval(Ie), se.value = !1;
                const Me = xe.environment_name || fe.name;
                U.value ? i("complete", Me) : (_.value = !1, i("environment-created-no-switch", Me));
              } else xe.state === "error" && (clearInterval(Ie), se.value = !1, M.value = xe.error || "Environment creation failed");
            } catch (xe) {
              ie.value++, console.warn(`Polling failure ${ie.value}/${Kt}:`, xe), ie.value >= Kt && (clearInterval(Ie), se.value = !1, M.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (fe) {
        se.value = !1, M.value = fe instanceof Error ? fe.message : "Unknown error";
      }
    }
    async function ze() {
      z.value = !0;
      try {
        T.value = await v();
      } catch (fe) {
        console.error("Failed to load ComfyUI releases:", fe);
      } finally {
        z.value = !1;
      }
    }
    function pe() {
      w.value && i("switch-environment", w.value);
    }
    return Ue(() => {
      n.detectedModelsDir && (O.value = n.detectedModelsDir), p.value === 2 && ze();
    }), (fe, q) => (s(), E(Ke, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: q[12] || (q[12] = (Ie) => fe.$emit("close"))
    }, {
      body: l(() => {
        var Ie, xe, Me;
        return [
          n.setupState === "no_workspace" ? (s(), o("div", A0, [
            e("div", {
              class: le(["step", { active: p.value === 1, complete: p.value > 1 }])
            }, [
              e("span", V0, a(p.value > 1 ? "✓" : "1"), 1),
              q[13] || (q[13] = e("span", { class: "step-label" }, "Workspace", -1))
            ], 2),
            q[15] || (q[15] = e("div", { class: "step-connector" }, null, -1)),
            e("div", {
              class: le(["step", { active: p.value === 2 }])
            }, [...q[14] || (q[14] = [
              e("span", { class: "step-number" }, "2", -1),
              e("span", { class: "step-label" }, "Environment", -1)
            ])], 2)
          ])) : (s(), o("div", W0, [...q[16] || (q[16] = [
            e("div", { class: "step active" }, [
              e("span", { class: "step-number" }, "1"),
              e("span", { class: "step-label" }, "Environment")
            ], -1)
          ])])),
          p.value === 1 ? (s(), o("div", j0, [
            q[20] || (q[20] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
            e("div", G0, [
              q[17] || (q[17] = e("label", { class: "form-label" }, "Workspace Path", -1)),
              Ne(e("input", {
                "onUpdate:modelValue": q[0] || (q[0] = (ce) => b.value = ce),
                type: "text",
                class: "form-input",
                placeholder: t.defaultPath,
                onBlur: ae
              }, null, 40, q0), [
                [Mt, b.value]
              ]),
              m.value ? (s(), o("p", H0, a(m.value), 1)) : d("", !0)
            ]),
            e("div", K0, [
              e("label", J0, [
                Ne(e("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": q[1] || (q[1] = (ce) => L.value = ce)
                }, null, 512), [
                  [Qt, L.value]
                ]),
                q[18] || (q[18] = e("span", null, "I have existing ComfyUI models", -1))
              ])
            ]),
            L.value ? (s(), o("div", Y0, [
              q[19] || (q[19] = e("label", { class: "form-label" }, "Models Directory", -1)),
              Ne(e("input", {
                "onUpdate:modelValue": q[2] || (q[2] = (ce) => O.value = ce),
                type: "text",
                class: "form-input",
                placeholder: t.detectedModelsDir || "/path/to/models",
                onBlur: ne
              }, null, 40, X0), [
                [Mt, O.value]
              ]),
              t.detectedModelsDir && !O.value ? (s(), o("p", Q0, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
              D.value ? (s(), o("p", Z0, " Did you mean: " + a(D.value), 1)) : d("", !0),
              $.value ? (s(), o("p", ek, a($.value), 1)) : d("", !0),
              S.value !== null && !$.value ? (s(), o("p", tk, " Found " + a(S.value) + " model files ", 1)) : d("", !0)
            ])) : d("", !0),
            P.value ? (s(), E(ts, {
              key: 1,
              progress: we.value.progress,
              message: we.value.message
            }, null, 8, ["progress", "message"])) : d("", !0)
          ])) : d("", !0),
          p.value === 2 ? (s(), o("div", sk, [
            n.cliInstalled ? d("", !0) : (s(), o("div", ok, [...q[21] || (q[21] = [
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
            (Ie = n.existingEnvironments) != null && Ie.length && !_.value ? (s(), o("div", nk, [
              q[23] || (q[23] = e("p", { class: "wizard-intro" }, " You have existing managed environments. Switch to one, or create a new environment: ", -1)),
              e("div", ak, [
                (s(!0), o(V, null, Z(n.existingEnvironments, (ce) => (s(), o("label", {
                  key: ce,
                  class: le(["env-option", { selected: w.value === ce }])
                }, [
                  Ne(e("input", {
                    type: "radio",
                    name: "env-select",
                    value: ce,
                    "onUpdate:modelValue": q[3] || (q[3] = (Je) => w.value = Je)
                  }, null, 8, lk), [
                    [Jt, w.value]
                  ]),
                  e("span", ik, a(ce), 1)
                ], 2))), 128))
              ]),
              e("div", rk, [
                w.value ? (s(), E(ue, {
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
                  onClick: q[4] || (q[4] = (ce) => _.value = !0)
                }, {
                  default: l(() => [...q[22] || (q[22] = [
                    y(" + Create New Environment ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0),
            _.value || !((xe = n.existingEnvironments) != null && xe.length) ? (s(), o("div", dk, [
              e("p", ck, a((Me = n.existingEnvironments) != null && Me.length ? "Create a new managed environment:" : "Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows."), 1),
              e("div", uk, [
                q[24] || (q[24] = e("label", { class: "form-label" }, "Environment Name", -1)),
                Ne(e("input", {
                  "onUpdate:modelValue": q[5] || (q[5] = (ce) => C.value = ce),
                  type: "text",
                  class: "form-input",
                  placeholder: "my-new-env"
                }, null, 512), [
                  [Mt, C.value]
                ])
              ]),
              e("div", mk, [
                q[25] || (q[25] = e("label", { class: "form-label" }, "Python Version", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": q[6] || (q[6] = (ce) => j.value = ce),
                  class: "form-select"
                }, [
                  (s(!0), o(V, null, Z($e(Ds), (ce) => (s(), o("option", {
                    key: ce,
                    value: ce
                  }, a(ce), 9, vk))), 128))
                ], 512), [
                  [Tt, j.value]
                ])
              ]),
              e("div", fk, [
                q[26] || (q[26] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": q[7] || (q[7] = (ce) => W.value = ce),
                  class: "form-select",
                  disabled: z.value
                }, [
                  (s(!0), o(V, null, Z(T.value, (ce) => (s(), o("option", {
                    key: ce.tag_name,
                    value: ce.tag_name
                  }, a(ce.name), 9, pk))), 128))
                ], 8, gk), [
                  [Tt, W.value]
                ])
              ]),
              e("div", hk, [
                q[27] || (q[27] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": q[8] || (q[8] = (ce) => K.value = ce),
                  class: "form-select"
                }, [
                  (s(!0), o(V, null, Z($e(fs), (ce) => (s(), o("option", {
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
                    "onUpdate:modelValue": q[9] || (q[9] = (ce) => U.value = ce)
                  }, null, 512), [
                    [Qt, U.value]
                  ]),
                  q[28] || (q[28] = e("span", null, "Switch to this environment after creation", -1))
                ])
              ]),
              se.value ? (s(), E(ts, {
                key: 0,
                progress: me.value.progress,
                message: me.value.message,
                "current-phase": me.value.phase,
                "show-steps": !0,
                steps: oe
              }, null, 8, ["progress", "message", "current-phase"])) : d("", !0),
              M.value ? (s(), o("div", bk, a(M.value), 1)) : d("", !0)
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => {
        var Ie, xe;
        return [
          p.value === 1 ? (s(), E(ue, {
            key: 0,
            variant: "primary",
            disabled: !Ee.value || P.value,
            onClick: re
          }, {
            default: l(() => [
              y(a(P.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : p.value === 2 ? (s(), o(V, { key: 1 }, [
            n.setupState === "no_workspace" ? (s(), E(ue, {
              key: 0,
              variant: "secondary",
              disabled: se.value,
              onClick: q[10] || (q[10] = (Me) => p.value = 1)
            }, {
              default: l(() => [...q[29] || (q[29] = [
                y(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (Ie = n.existingEnvironments) != null && Ie.length && _.value ? (s(), E(ue, {
              key: 1,
              variant: "secondary",
              disabled: se.value,
              onClick: q[11] || (q[11] = (Me) => _.value = !1)
            }, {
              default: l(() => [...q[30] || (q[30] = [
                y(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : d("", !0),
            _.value || !((xe = n.existingEnvironments) != null && xe.length) ? (s(), E(ue, {
              key: 2,
              variant: "primary",
              disabled: !be.value || se.value,
              onClick: ve
            }, {
              default: l(() => [
                y(a(se.value ? "Creating..." : U.value ? "Create & Switch" : "Create Environment"), 1)
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
}, Tk = { class: "header-actions" }, zk = { class: "env-switcher" }, Lk = {
  key: 0,
  class: "header-info"
}, Rk = { class: "branch-name" }, Pk = { class: "panel-main" }, Dk = { class: "sidebar" }, Nk = { class: "sidebar-content" }, Uk = { class: "sidebar-section" }, Ok = { class: "sidebar-section" }, Bk = { class: "sidebar-section" }, Fk = { class: "content-area" }, Ak = {
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
      switchEnvironment: _,
      getSwitchProgress: b,
      deleteEnvironment: L,
      syncEnvironmentManually: O,
      repairWorkflowModels: m,
      getSetupStatus: $
    } = Oe(), D = Ms();
    function S(G) {
      window.open(G, "_blank", "noopener,noreferrer");
    }
    const C = x(null), j = x([]), W = x([]), K = x([]), U = N(() => K.value.find((G) => G.is_current)), M = x(null), T = x(!1), z = x(1), P = N(() => {
      var G;
      return ((G = M.value) == null ? void 0 : G.state) || "managed";
    }), se = x(!1), we = x(null), me = x(null), oe = x(!1), A = x(null), I = x(null), ie = x(null), te = x(!1), Ee = x(!1), be = x(""), ae = x({ state: "idle", progress: 0, message: "" });
    let ne = null, re = null;
    const ve = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ze = n.initialView ? ve[n.initialView] : null, pe = x((ze == null ? void 0 : ze.view) ?? "status"), fe = x((ze == null ? void 0 : ze.section) ?? "this-env");
    function q(G, R) {
      pe.value = G, fe.value = R;
    }
    function Ie(G) {
      const ge = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      ge && q(ge.view, ge.section);
    }
    function xe() {
      q("branches", "this-env");
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
    const ce = x(null), Je = x(!1), et = x(!1), Ye = x([]);
    let _t = 0;
    function ke(G, R = "info", ge = 3e3) {
      const Te = ++_t;
      return Ye.value.push({ id: Te, message: G, type: R }), ge > 0 && setTimeout(() => {
        Ye.value = Ye.value.filter((Ve) => Ve.id !== Te);
      }, ge), Te;
    }
    function Ae(G) {
      Ye.value = Ye.value.filter((R) => R.id !== G);
    }
    function wt(G, R) {
      ke(G, R);
    }
    const ut = N(() => {
      if (!C.value) return "neutral";
      const G = C.value.workflows, R = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || C.value.has_changes;
      return C.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    N(() => C.value ? ut.value === "success" ? "All synced" : ut.value === "warning" ? "Uncommitted changes" : ut.value === "error" ? "Not synced" : "" : "");
    async function Pe() {
      se.value = !0, we.value = null;
      try {
        const [G, R, ge, Te] = await Promise.all([
          h(!0),
          g(),
          f(),
          w()
        ]);
        C.value = G, j.value = R.commits, W.value = ge.branches, K.value = Te, i("statusUpdate", G), A.value && await A.value.loadWorkflows(!0);
      } catch (G) {
        we.value = G instanceof Error ? G.message : "Failed to load status", C.value = null, j.value = [], W.value = [];
      } finally {
        se.value = !1;
      }
    }
    function $t(G) {
      me.value = G;
    }
    async function lt(G) {
      var ge;
      me.value = null;
      const R = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
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
      const R = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
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
    async function B(G) {
      const R = ke(`Creating branch ${G}...`, "info", 0), ge = await r(G);
      Ae(R), ge.status === "success" ? (ke(`Branch "${G}" created`, "success"), await Pe()) : ke(ge.message || "Failed to create branch", "error");
    }
    async function F(G, R = !1) {
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
      oe.value = !1, be.value = G, te.value = !0;
    }
    async function xt() {
      te.value = !1, Ee.value = !0, ye(), ae.value = {
        progress: 10,
        state: vt(10),
        message: St(10)
      };
      try {
        await _(be.value), H(), _e();
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
    function H() {
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
      ne || (ne = window.setInterval(async () => {
        try {
          let G = await D.getStatus();
          if ((!G || G.state === "idle") && (G = await b()), !G)
            return;
          const R = G.progress || 0;
          R >= 60 && de();
          const ge = Math.max(R, ae.value.progress), Te = G.state && G.state !== "idle" && G.state !== "unknown", Ve = Te ? G.state : vt(ge), We = Te && G.message || St(ge);
          ae.value = {
            state: Ve,
            progress: ge,
            message: We
          }, G.state === "complete" ? (de(), Le(), Ee.value = !1, ke(`✓ Switched to ${be.value}`, "success"), await Pe(), be.value = "") : G.state === "rolled_back" ? (de(), Le(), Ee.value = !1, ke("Switch failed, restored previous environment", "warning"), be.value = "") : G.state === "critical_failure" && (de(), Le(), Ee.value = !1, ke(`Critical error during switch: ${G.message}`, "error"), be.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function Le() {
      de(), ne && (clearInterval(ne), ne = null);
    }
    function Xe() {
      var G;
      te.value = !1, be.value = "", (G = M.value) != null && G.state && M.value.state !== "managed" && (z.value = M.value.state === "no_workspace" ? 1 : 2, T.value = !0);
    }
    async function It() {
      Je.value = !1, await Pe(), ke("✓ Changes committed", "success");
    }
    async function qt() {
      et.value = !1;
      const G = ke("Syncing environment...", "info", 0);
      try {
        const R = await O("skip", !0);
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
    async function Gs(G, R) {
      ke(`Environment '${G}' created`, "success"), await Pe(), I.value && await I.value.loadEnvironments(), R && await tt(G);
    }
    async function qs(G) {
      var R;
      if (((R = U.value) == null ? void 0 : R.name) === G) {
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
            const ge = await L(G);
            ge.status === "success" ? (ke(`Environment "${G}" deleted`, "success"), await Pe(), I.value && await I.value.loadEnvironments()) : ke(ge.message || "Failed to delete environment", "error");
          } catch (ge) {
            ke(`Error deleting environment: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Hs(G) {
      T.value = !1;
      try {
        M.value = await $();
      } catch {
      }
      await tt(G);
    }
    function Ks() {
      T.value = !1, i("close");
    }
    async function Js(G) {
      await tt(G);
    }
    async function Ys(G) {
      await Pe(), await tt(G);
    }
    async function Xs(G) {
      M.value = await $(), console.log(`Environment '${G}' created. Available for switching.`);
    }
    function Qs() {
      q("environments", "all-envs"), setTimeout(() => {
        var G;
        (G = I.value) == null || G.openCreateModal();
      }, 100);
    }
    function hs() {
      if (!C.value) return [];
      const G = [], R = C.value.workflows;
      return R.new.length && G.push(`${R.new.length} new workflow(s)`), R.modified.length && G.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && G.push(`${R.deleted.length} deleted workflow(s)`), G;
    }
    return Ue(async () => {
      try {
        if (M.value = await $(), M.value.state === "no_workspace") {
          T.value = !0, z.value = 1;
          return;
        }
        if (M.value.state === "empty_workspace") {
          T.value = !0, z.value = 2;
          return;
        }
        if (M.value.state === "unmanaged") {
          T.value = !0, z.value = 2;
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
            R[35] || (R[35] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            C.value ? (s(), o("div", Mk)) : d("", !0)
          ]),
          e("div", Tk, [
            e("button", {
              class: "sponsor-btn",
              onClick: R[0] || (R[0] = (he) => S("https://github.com/sponsors/comfyhub-org")),
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
              onClick: R[1] || (R[1] = (he) => S("https://discord.gg/2h5rSTeh6Y")),
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
              onClick: R[2] || (R[2] = (he) => S("https://x.com/akatz_ai")),
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
              onClick: R[3] || (R[3] = (he) => S("https://github.com/comfyhub-org/comfygit")),
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
              onClick: R[4] || (R[4] = (he) => S("https://docs.comfyhub.org/comfygit/")),
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
              class: le(["icon-btn", { spinning: se.value }]),
              onClick: Pe,
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
              onClick: R[5] || (R[5] = (he) => i("close")),
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
        e("div", zk, [
          e("div", { class: "env-switcher-header" }, [
            R[44] || (R[44] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
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
            onClick: R[6] || (R[6] = (he) => q("environments", "all-envs"))
          }, [
            C.value ? (s(), o("div", Lk, [
              e("span", null, a(((ge = U.value) == null ? void 0 : ge.name) || ((Te = C.value) == null ? void 0 : Te.environment) || "Loading..."), 1),
              e("span", Rk, "(" + a(C.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            R[45] || (R[45] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Pk, [
          e("div", Dk, [
            e("div", Nk, [
              e("div", Uk, [
                R[46] || (R[46] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "status" && fe.value === "this-env" }]),
                  onClick: R[7] || (R[7] = (he) => q("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "workflows" }]),
                  onClick: R[8] || (R[8] = (he) => q("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "models-env" }]),
                  onClick: R[9] || (R[9] = (he) => q("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "branches" }]),
                  onClick: R[10] || (R[10] = (he) => q("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "history" }]),
                  onClick: R[11] || (R[11] = (he) => q("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "nodes" }]),
                  onClick: R[12] || (R[12] = (he) => q("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "debug-env" }]),
                  onClick: R[13] || (R[13] = (he) => q("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              R[49] || (R[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Ok, [
                R[47] || (R[47] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "environments" }]),
                  onClick: R[14] || (R[14] = (he) => q("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "model-index" }]),
                  onClick: R[15] || (R[15] = (he) => q("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "settings" }]),
                  onClick: R[16] || (R[16] = (he) => q("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "debug-workspace" }]),
                  onClick: R[17] || (R[17] = (he) => q("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              R[50] || (R[50] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Bk, [
                R[48] || (R[48] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "export" }]),
                  onClick: R[18] || (R[18] = (he) => q("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "import" }]),
                  onClick: R[19] || (R[19] = (he) => q("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: le(["sidebar-item", { active: pe.value === "remotes" }]),
                  onClick: R[20] || (R[20] = (he) => q("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            R[51] || (R[51] = so('<div class="sidebar-footer" data-v-bd45f0cd><span class="version" data-v-bd45f0cd>v0.0.1</span><span class="made-by" data-v-bd45f0cd>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-bd45f0cd><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-bd45f0cd></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", Fk, [
            we.value ? (s(), o("div", Ak, a(we.value), 1)) : !C.value && pe.value === "status" ? (s(), o("div", Vk, " Loading status... ")) : (s(), o(V, { key: 2 }, [
              pe.value === "status" ? (s(), E(Ta, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ie,
                status: C.value,
                "setup-state": P.value,
                onSwitchBranch: xe,
                onCommitChanges: R[21] || (R[21] = (he) => Je.value = !0),
                onSyncEnvironment: R[22] || (R[22] = (he) => et.value = !0),
                onViewWorkflows: R[23] || (R[23] = (he) => q("workflows", "this-env")),
                onViewHistory: R[24] || (R[24] = (he) => q("history", "this-env")),
                onViewDebug: R[25] || (R[25] = (he) => q("debug-env", "this-env")),
                onViewNodes: R[26] || (R[26] = (he) => q("nodes", "this-env")),
                onRepairMissingModels: Ht,
                onStartSetup: R[27] || (R[27] = (he) => T.value = !0),
                onViewEnvironments: R[28] || (R[28] = (he) => q("environments", "all-envs")),
                onCreateEnvironment: Qs
              }, null, 8, ["status", "setup-state"])) : pe.value === "workflows" ? (s(), E(Qu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: A,
                onRefresh: Pe
              }, null, 512)) : pe.value === "models-env" ? (s(), E(Pm, {
                key: 2,
                onNavigate: Ie
              })) : pe.value === "branches" ? (s(), E(Ga, {
                key: 3,
                branches: W.value,
                current: ((Ve = C.value) == null ? void 0 : Ve.branch) || null,
                onSwitch: J,
                onCreate: B,
                onDelete: F
              }, null, 8, ["branches", "current"])) : pe.value === "history" ? (s(), E(sl, {
                key: 4,
                commits: j.value,
                onSelect: $t,
                onCheckout: lt
              }, null, 8, ["commits"])) : pe.value === "nodes" ? (s(), E(Sv, {
                key: 5,
                onOpenNodeManager: Me,
                onToast: wt
              })) : pe.value === "debug-env" ? (s(), E(Lp, { key: 6 })) : pe.value === "environments" ? (s(), E(Dh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: I,
                onSwitch: tt,
                onCreated: Gs,
                onDelete: qs
              }, null, 512)) : pe.value === "model-index" ? (s(), E(ev, {
                key: 8,
                onRefresh: Pe
              })) : pe.value === "settings" ? (s(), E(Ep, { key: 9 })) : pe.value === "debug-workspace" ? (s(), E(Tp, { key: 10 })) : pe.value === "export" ? (s(), E(v1, { key: 11 })) : pe.value === "import" ? (s(), E(nw, {
                key: 12,
                onImportCompleteSwitch: Ys
              })) : pe.value === "remotes" ? (s(), E(dp, {
                key: 13,
                onToast: wt
              })) : d("", !0)
            ], 64))
          ])
        ]),
        me.value ? (s(), E(_w, {
          key: 0,
          commit: me.value,
          onClose: R[29] || (R[29] = (he) => me.value = null),
          onCheckout: lt,
          onCreateBranch: Y
        }, null, 8, ["commit"])) : d("", !0),
        ce.value ? (s(), E(Rs, {
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
          onCancel: R[30] || (R[30] = (he) => ce.value = null),
          onSecondary: ce.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        k(k0, {
          show: te.value,
          "from-environment": ((We = U.value) == null ? void 0 : We.name) || "unknown",
          "to-environment": be.value,
          onConfirm: xt,
          onClose: Xe
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Je.value && C.value ? (s(), E(Bs, {
          key: 2,
          status: C.value,
          "as-modal": !0,
          onClose: R[31] || (R[31] = (he) => Je.value = !1),
          onCommitted: It
        }, null, 8, ["status"])) : d("", !0),
        et.value && C.value ? (s(), E(F0, {
          key: 3,
          show: et.value,
          "mismatch-details": {
            missing_nodes: C.value.comparison.missing_nodes,
            extra_nodes: C.value.comparison.extra_nodes
          },
          onConfirm: qt,
          onClose: R[32] || (R[32] = (he) => et.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        k(z0, {
          show: Ee.value,
          state: ae.value.state,
          progress: ae.value.progress,
          message: ae.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        oe.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[34] || (R[34] = Re((he) => oe.value = !1, ["self"]))
        }, [
          e("div", Wk, [
            e("div", jk, [
              R[53] || (R[53] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[33] || (R[33] = (he) => oe.value = !1)
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
            e("div", Gk, [
              R[54] || (R[54] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", qk, [
                (s(!0), o(V, null, Z(K.value, (he) => (s(), o("div", {
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
        T.value ? (s(), E(xk, {
          key: 5,
          "default-path": ((ft = M.value) == null ? void 0 : ft.default_path) || "~/comfygit",
          "detected-models-dir": ((Pt = M.value) == null ? void 0 : Pt.detected_models_dir) || null,
          "initial-step": z.value,
          "existing-environments": ((ys = M.value) == null ? void 0 : ys.environments) || [],
          "cli-installed": ((ws = M.value) == null ? void 0 : ws.cli_installed) ?? !0,
          "setup-state": ((ks = M.value) == null ? void 0 : ks.state) || "no_workspace",
          onComplete: Hs,
          onClose: Ks,
          onSwitchEnvironment: Js,
          onEnvironmentCreatedNoSwitch: Xs
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state"])) : d("", !0),
        e("div", tb, [
          k(oo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(V, null, Z(Ye.value, (he) => (s(), o("div", {
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
}), nb = /* @__PURE__ */ Q(ob, [["__scopeId", "data-v-bd45f0cd"]]), ab = { class: "item-header" }, lb = { class: "item-info" }, ib = { class: "filename" }, rb = { class: "metadata" }, db = { class: "size" }, cb = {
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
}, zb = { class: "filename" }, Lb = { class: "speed" }, Rb = {
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
      resumeAllPaused: _,
      removeItem: b,
      clearCompleted: L
    } = Gt(), O = x(!1);
    let m = null;
    bt(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: f.value.length,
        completed: h.value.length
      }),
      (C, j) => {
        m && (clearTimeout(m), m = null);
        const W = C.active === 0 && C.failed === 0 && C.paused === 0 && C.completed > 0, K = j && (j.active > 0 || j.paused > 0);
        W && K && (m = setTimeout(() => {
          L(), m = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = N(() => {
      var W;
      if (c.items.length === 0) return 0;
      const C = h.value.length, j = ((W = n.value) == null ? void 0 : W.progress) || 0;
      return Math.round((C + j / 100) / c.items.length * 100);
    });
    function D(C) {
      v(C);
    }
    function S(C) {
      return C === 0 ? "" : `${(C / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (C, j) => (s(), E(Fe, { to: "body" }, [
      $e(u) ? (s(), o("div", {
        key: 0,
        class: le(["model-download-queue", { minimized: !O.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: j[0] || (j[0] = (W) => O.value = !O.value)
        }, [
          e("div", Cb, [
            j[4] || (j[4] = e("span", { class: "icon" }, "↓", -1)),
            j[5] || (j[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", xb, "(" + a($e(r)) + "/" + a($e(c).items.length) + ")", 1)
          ]),
          e("div", Sb, [
            e("span", Ib, a(O.value ? "minimize" : "expand"), 1)
          ])
        ]),
        O.value ? (s(), o("div", Rb, [
          $e(n) ? (s(), o("div", Pb, [
            j[6] || (j[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(Ot, {
              item: $e(n),
              onCancel: j[1] || (j[1] = (W) => D($e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          $e(f).length > 0 ? (s(), o("div", Db, [
            e("div", Nb, [
              e("span", Ub, "Paused (" + a($e(f).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: j[2] || (j[2] = //@ts-ignore
                (...W) => $e(_) && $e(_)(...W))
              }, "Resume All")
            ]),
            e("div", Ob, [
              (s(!0), o(V, null, Z($e(f), (W) => (s(), E(Ot, {
                key: W.id,
                item: W,
                onResume: (K) => $e(w)(W.id),
                onRemove: (K) => $e(b)(W.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          $e(i).length > 0 ? (s(), o("div", Bb, [
            e("div", Fb, [
              e("span", Ab, "Queued (" + a($e(i).length) + ")", 1)
            ]),
            e("div", Vb, [
              (s(!0), o(V, null, Z($e(i), (W) => (s(), E(Ot, {
                key: W.id,
                item: W,
                onCancel: (K) => D(W.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          $e(h).length > 0 ? (s(), o("div", Wb, [
            e("div", jb, [
              e("span", Gb, "Completed (" + a($e(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: j[3] || (j[3] = //@ts-ignore
                (...W) => $e(L) && $e(L)(...W))
              }, "Clear")
            ]),
            e("div", qb, [
              (s(!0), o(V, null, Z($e(h).slice(0, 3), (W) => (s(), E(Ot, {
                key: W.id,
                item: W,
                onRemove: (K) => $e(b)(W.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          $e(g).length > 0 ? (s(), o("div", Hb, [
            e("div", Kb, [
              e("span", Jb, "Failed (" + a($e(g).length) + ")", 1)
            ]),
            e("div", Yb, [
              (s(!0), o(V, null, Z($e(g), (W) => (s(), E(Ot, {
                key: W.id,
                item: W,
                onRetry: (K) => $e(p)(W.id),
                onRemove: (K) => $e(b)(W.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Eb, [
          e("div", Mb, [
            e("div", {
              class: "progress-fill",
              style: pt({ width: `${$.value}%` })
            }, null, 4)
          ]),
          $e(n) ? (s(), o("div", Tb, [
            e("span", zb, a($e(n).filename), 1),
            e("span", Lb, a(S($e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), Qb = /* @__PURE__ */ Q(Xb, [["__scopeId", "data-v-60751cfa"]]), Zb = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', e_ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', t_ = {
  comfy: Zb,
  phosphor: e_
}, gs = "comfy", Fs = "comfygit-theme";
let Ct = null, As = gs;
function s_() {
  try {
    const t = localStorage.getItem(Fs);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return gs;
}
function Vs(t = gs) {
  Ct && Ct.remove(), Ct = document.createElement("style"), Ct.id = "comfygit-theme-styles", Ct.setAttribute("data-theme", t), Ct.textContent = t_[t], document.head.appendChild(Ct), document.body.setAttribute("data-comfygit-theme", t), As = t;
  try {
    localStorage.setItem(Fs, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function o_() {
  return As;
}
function n_(t) {
  Vs(t);
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
Vs(l_);
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
const zt = x(null);
let Ws = "managed";
async function Xt() {
  var t;
  if (!((t = kt) != null && t.api)) return null;
  try {
    const c = await kt.api.fetchApi("/v2/comfygit/status");
    c.ok && (zt.value = await c.json());
  } catch {
  }
}
async function rs() {
  var t;
  if ((t = kt) != null && t.api)
    try {
      const c = await kt.api.fetchApi("/v2/setup/status");
      c.ok && (Ws = (await c.json()).state);
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
    render: () => ms(Bs, {
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
  const t = Ws !== "managed";
  Qe.disabled = t, Qe.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const js = document.createElement("style");
js.textContent = `
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
document.head.appendChild(js);
kt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = xs, Qe = document.createElement("button"), Qe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Qe.innerHTML = 'Commit <span class="commit-indicator"></span>', Qe.title = "Quick Commit", Qe.onclick = () => r_(Qe), t.appendChild(c), t.appendChild(Qe), (g = (h = kt.menu) == null ? void 0 : h.settingsGroup) != null && g.element && (kt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), d_();
    const { loadPendingDownloads: n } = Gt();
    n(), await Promise.all([Xt(), rs()]), Wt(), ds(), setInterval(async () => {
      await Promise.all([Xt(), rs()]), Wt(), ds();
    }, 3e4);
    const i = kt.api;
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
        `, _.onmouseover = () => _.style.background = "var(--comfy-input-bg)", _.onmouseout = () => _.style.background = "var(--comfy-menu-bg)", _.onclick = () => f(), p.appendChild(_);
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
        `, b.onmouseover = () => b.style.opacity = "1", b.onmouseout = () => b.style.opacity = "0.6", b.onclick = () => p.remove(), p.appendChild(b), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, r = function(p) {
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
        const b = document.createElement("span");
        b.textContent = "⚠️", b.style.fontSize = "20px", _.appendChild(b);
        const L = document.createElement("div");
        L.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const O = document.createElement("div");
        O.textContent = "Node installation failed", O.style.cssText = "font-weight: 600; color: #e53935;", L.appendChild(O);
        const m = document.createElement("div");
        m.textContent = "Dependency conflict detected", m.style.cssText = "font-size: 12px; opacity: 0.8;", L.appendChild(m), _.appendChild(L);
        const $ = document.createElement("button");
        $.textContent = "View Logs", $.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, $.onmouseover = () => $.style.background = "#c62828", $.onmouseout = () => $.style.background = "#e53935", $.onclick = () => {
          _.remove(), xs("debug-env");
        }, _.appendChild($);
        const D = document.createElement("button");
        D.textContent = "×", D.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, D.onmouseover = () => D.style.opacity = "1", D.onmouseout = () => D.style.opacity = "0.6", D.onclick = () => _.remove(), _.appendChild(D), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && _.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: _ } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${_}`), await Xt(), Wt();
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
