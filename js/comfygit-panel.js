import { app as bt } from "../../scripts/app.js";
import { defineComponent as ee, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as $e, createBlock as E, resolveDynamicComponent as us, normalizeClass as de, withCtx as l, toDisplayString as a, createVNode as k, createTextVNode as y, computed as U, Fragment as F, renderList as ne, normalizeStyle as yt, ref as $, onMounted as Be, watch as _t, Teleport as je, withModifiers as Le, Transition as co, createSlots as Gt, withKeys as ht, reactive as ss, onUnmounted as Ls, readonly as uo, unref as _e, withDirectives as Ue, vModelText as Rt, vModelRadio as Yt, vModelCheckbox as Zt, nextTick as mo, vModelSelect as zt, createStaticVNode as vo, TransitionGroup as fo, createApp as ms, h as vs } from "vue";
const go = { class: "panel-layout" }, po = {
  key: 0,
  class: "panel-layout-header"
}, ho = {
  key: 1,
  class: "panel-layout-search"
}, yo = { class: "panel-layout-content" }, wo = {
  key: 2,
  class: "panel-layout-footer"
}, ko = /* @__PURE__ */ ee({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", go, [
      c.$slots.header ? (s(), o("div", po, [
        $e(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (s(), o("div", ho, [
        $e(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", yo, [
        $e(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", wo, [
        $e(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), te = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, h] of c)
    n[i] = h;
  return n;
}, Je = /* @__PURE__ */ te(ko, [["__scopeId", "data-v-21565df9"]]), bo = {
  key: 0,
  class: "panel-title-prefix"
}, _o = {
  key: 1,
  class: "panel-title-prefix-theme"
}, $o = /* @__PURE__ */ ee({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), E(us(`h${t.level}`), {
      class: de(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", bo, a(t.prefix), 1)) : (s(), o("span", _o)),
        $e(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Co = /* @__PURE__ */ te($o, [["__scopeId", "data-v-c3875efc"]]), xo = ["title"], So = ["width", "height"], Io = /* @__PURE__ */ ee({
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
      ])], 8, So))
    ], 8, xo));
  }
}), Ps = /* @__PURE__ */ te(Io, [["__scopeId", "data-v-6fc7f16d"]]), Eo = { class: "header-left" }, Mo = {
  key: 0,
  class: "header-actions"
}, To = /* @__PURE__ */ ee({
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
      class: de(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Eo, [
        k(Co, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(Ps, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Mo, [
        $e(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ te(To, [["__scopeId", "data-v-55a62cd6"]]), Ro = {
  key: 0,
  class: "section-title-count"
}, zo = {
  key: 1,
  class: "section-title-icon"
}, Lo = /* @__PURE__ */ ee({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), E(us(`h${t.level}`), {
      class: de(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        $e(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ro, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", zo, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), st = /* @__PURE__ */ te(Lo, [["__scopeId", "data-v-559361eb"]]), Po = { class: "status-grid" }, Do = { class: "status-grid__columns" }, No = { class: "status-grid__column" }, Uo = { class: "status-grid__title" }, Oo = { class: "status-grid__column status-grid__column--right" }, Bo = { class: "status-grid__title" }, Ao = {
  key: 0,
  class: "status-grid__footer"
}, Fo = /* @__PURE__ */ ee({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Po, [
      e("div", Do, [
        e("div", No, [
          e("h4", Uo, a(t.leftTitle), 1),
          $e(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Oo, [
          e("h4", Bo, a(t.rightTitle), 1),
          $e(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Ao, [
        $e(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Vo = /* @__PURE__ */ te(Fo, [["__scopeId", "data-v-73b7ba3f"]]), Wo = {
  key: 0,
  class: "status-item__icon"
}, jo = {
  key: 1,
  class: "status-item__count"
}, Go = { class: "status-item__label" }, Ho = /* @__PURE__ */ ee({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = U(() => `status-item--${c.variant}`);
    return (i, h) => (s(), o("div", {
      class: de(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Wo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", jo, a(t.count), 1)) : d("", !0),
      e("span", Go, a(t.label), 1)
    ], 2));
  }
}), ct = /* @__PURE__ */ te(Ho, [["__scopeId", "data-v-6f929183"]]), qo = { class: "issue-card__header" }, Ko = { class: "issue-card__icon" }, Jo = { class: "issue-card__title" }, Yo = {
  key: 0,
  class: "issue-card__content"
}, Xo = {
  key: 0,
  class: "issue-card__description"
}, Qo = {
  key: 1,
  class: "issue-card__items"
}, Zo = {
  key: 2,
  class: "issue-card__actions"
}, en = /* @__PURE__ */ ee({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = U(() => `issue-card--${c.severity}`);
    return (i, h) => (s(), o("div", {
      class: de(["issue-card", n.value])
    }, [
      e("div", qo, [
        e("span", Ko, a(t.icon), 1),
        e("h4", Jo, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Yo, [
        t.description ? (s(), o("p", Xo, a(t.description), 1)) : d("", !0),
        $e(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Qo, [
        (s(!0), o(F, null, ne(t.items, (p, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(p), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", Zo, [
        $e(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ te(en, [["__scopeId", "data-v-df6aa348"]]), tn = ["type", "disabled"], sn = {
  key: 0,
  class: "spinner"
}, on = /* @__PURE__ */ ee({
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
      class: de(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", sn)) : d("", !0),
      t.loading ? d("", !0) : $e(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, tn));
  }
}), ae = /* @__PURE__ */ te(on, [["__scopeId", "data-v-772abe47"]]), nn = { class: "empty-state" }, an = {
  key: 0,
  class: "empty-icon"
}, ln = { class: "empty-message" }, rn = /* @__PURE__ */ ee({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", nn, [
      t.icon ? (s(), o("div", an, a(t.icon), 1)) : d("", !0),
      e("p", ln, a(t.message), 1),
      t.actionLabel ? (s(), E(ae, {
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
}), rt = /* @__PURE__ */ te(rn, [["__scopeId", "data-v-4466284f"]]), dn = /* @__PURE__ */ ee({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: de(["detail-label"]),
      style: yt({ minWidth: t.minWidth })
    }, [
      $e(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Xt = /* @__PURE__ */ te(dn, [["__scopeId", "data-v-75e9eeb8"]]), cn = /* @__PURE__ */ ee({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: de(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      $e(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), is = /* @__PURE__ */ te(cn, [["__scopeId", "data-v-2f186e4c"]]), un = { class: "detail-row" }, mn = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), o("div", un, [
      k(Xt, { "min-width": t.labelMinWidth }, {
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
      }, 8, ["mono", "variant", "truncate"])) : $e(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ne = /* @__PURE__ */ te(mn, [["__scopeId", "data-v-ef15664a"]]), vn = { class: "modal-header" }, fn = { class: "modal-body" }, gn = { class: "status-section" }, pn = {
  key: 0,
  class: "status-section"
}, hn = { class: "section-header-row" }, yn = {
  key: 0,
  class: "workflow-group"
}, wn = { class: "workflow-group-header" }, kn = { class: "workflow-group-title" }, bn = { class: "workflow-list" }, _n = { class: "workflow-name" }, $n = { class: "workflow-issue" }, Cn = {
  key: 1,
  class: "workflow-group"
}, xn = { class: "workflow-group-header" }, Sn = { class: "workflow-group-title" }, In = { class: "workflow-list" }, En = { class: "workflow-name" }, Mn = { class: "workflow-issue" }, Tn = {
  key: 2,
  class: "workflow-group"
}, Rn = { class: "workflow-group-header" }, zn = { class: "workflow-group-title" }, Ln = { class: "workflow-list" }, Pn = { class: "workflow-name" }, Dn = {
  key: 3,
  class: "workflow-group"
}, Nn = { class: "workflow-group-header" }, Un = { class: "workflow-group-title" }, On = { class: "workflow-list" }, Bn = { class: "workflow-name" }, An = {
  key: 4,
  class: "workflow-group"
}, Fn = { class: "workflow-group-header" }, Vn = { class: "workflow-group-title" }, Wn = { class: "workflow-list" }, jn = { class: "workflow-name" }, Gn = {
  key: 5,
  class: "workflow-group"
}, Hn = { class: "workflow-group-title" }, qn = { class: "expand-icon" }, Kn = {
  key: 0,
  class: "workflow-list"
}, Jn = { class: "workflow-name" }, Yn = {
  key: 1,
  class: "status-section"
}, Xn = {
  key: 0,
  class: "change-group"
}, Qn = { class: "change-group-header" }, Zn = { class: "change-group-title" }, ea = { class: "change-list" }, ta = { class: "node-name" }, sa = {
  key: 0,
  class: "dev-badge"
}, oa = {
  key: 1,
  class: "change-group"
}, na = { class: "change-group-header" }, aa = { class: "change-group-title" }, la = { class: "change-list" }, ia = { class: "node-name" }, ra = {
  key: 0,
  class: "dev-badge"
}, da = {
  key: 2,
  class: "change-group"
}, ca = { class: "change-list" }, ua = { class: "change-item" }, ma = { class: "node-name" }, va = {
  key: 3,
  class: "change-group"
}, fa = {
  key: 2,
  class: "status-section"
}, ga = { class: "section-header-row" }, pa = {
  key: 0,
  class: "drift-item"
}, ha = { class: "drift-list" }, ya = {
  key: 0,
  class: "drift-list-more"
}, wa = {
  key: 1,
  class: "drift-item"
}, ka = { class: "drift-list" }, ba = {
  key: 0,
  class: "drift-list-more"
}, _a = {
  key: 2,
  class: "drift-item"
}, $a = { class: "drift-list" }, Ca = { class: "version-actual" }, xa = { class: "version-expected" }, Sa = {
  key: 0,
  class: "drift-list-more"
}, Ia = {
  key: 3,
  class: "drift-item"
}, Ea = { class: "repair-action" }, Ma = {
  key: 3,
  class: "status-section"
}, Ta = { class: "info-box" }, Ra = { class: "drift-list" }, za = {
  key: 0,
  class: "drift-list-more"
}, La = {
  key: 4,
  class: "status-section"
}, Pa = { class: "warning-box" }, Da = {
  key: 5,
  class: "empty-state-inline"
}, Na = { class: "modal-actions" }, Ua = /* @__PURE__ */ ee({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = $(!1);
    Be(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), _t(() => c.show, (b, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", b);
    }, { immediate: !0 });
    const i = U(() => {
      var b, C, T;
      return ((T = (C = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : T.filter(
        (O) => O.status === "broken" && O.sync_state === "synced"
      )) || [];
    }), h = U(() => {
      var b, C, T;
      return ((T = (C = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : T.filter(
        (O) => O.status === "broken" && O.sync_state !== "synced"
      )) || [];
    }), p = U(() => {
      var b, C, T;
      return ((T = (C = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : C.synced) == null ? void 0 : T.filter((O) => {
        var _, L, M;
        const f = (M = (L = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : L.analyzed) == null ? void 0 : M.find((x) => x.name === O);
        return !f || f.status !== "broken";
      })) || [];
    }), u = U(() => {
      var b, C, T, O, f;
      return (b = c.status) != null && b.workflows ? (((C = c.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((T = c.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((O = c.status.workflows.deleted) == null ? void 0 : O.length) ?? 0) > 0 || (((f = c.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), m = U(() => {
      var C, T, O;
      const b = (C = c.status) == null ? void 0 : C.git_changes;
      return b ? (((T = b.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((O = b.nodes_removed) == null ? void 0 : O.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), r = U(() => {
      var b, C, T, O, f, _;
      return !u.value && !m.value && ((C = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : C.is_synced) && (((T = c.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((_ = (f = (O = c.status) == null ? void 0 : O.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : _.length) ?? 0) === 0;
    }), v = U(() => {
      var C, T;
      const b = (T = (C = c.status) == null ? void 0 : C.git_changes) == null ? void 0 : T.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function g(b) {
      return typeof b == "string" ? b : b.name;
    }
    function w(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, C) => {
      var T, O, f, _, L, M, x, K, V, q, z, S, P, X, Q, J, re, H, D, N, I, le;
      return s(), E(je, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[7] || (C[7] = (se) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[6] || (C[6] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", vn, [
              C[8] || (C[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (se) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", fn, [
              e("div", gn, [
                k(st, { level: "4" }, {
                  default: l(() => [...C[9] || (C[9] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(Ne, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", pn, [
                e("div", hn, [
                  k(st, { level: "4" }, {
                    default: l(() => [...C[10] || (C[10] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (se) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", yn, [
                  e("div", wn, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", kn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", bn, [
                    (s(!0), o(F, null, ne(i.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", _n, a(se.name), 1),
                      e("span", $n, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                h.value.length ? (s(), o("div", Cn, [
                  e("div", xn, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Sn, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", In, [
                    (s(!0), o(F, null, ne(h.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", En, a(se.name), 1),
                      e("span", Mn, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (O = (T = t.status.workflows) == null ? void 0 : T.new) != null && O.length ? (s(), o("div", Tn, [
                  e("div", Rn, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", zn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ln, [
                    (s(!0), o(F, null, ne(t.status.workflows.new, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Pn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (_ = (f = t.status.workflows) == null ? void 0 : f.modified) != null && _.length ? (s(), o("div", Dn, [
                  e("div", Nn, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Un, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", On, [
                    (s(!0), o(F, null, ne(t.status.workflows.modified, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Bn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (M = (L = t.status.workflows) == null ? void 0 : L.deleted) != null && M.length ? (s(), o("div", An, [
                  e("div", Fn, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Vn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Wn, [
                    (s(!0), o(F, null, ne(t.status.workflows.deleted, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", jn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                p.value.length ? (s(), o("div", Gn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (se) => n.value = !n.value)
                  }, [
                    C[16] || (C[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Hn, "SYNCED (" + a(p.value.length) + ")", 1),
                    e("span", qn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", Kn, [
                    (s(!0), o(F, null, ne(p.value, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Jn, a(se), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              m.value ? (s(), o("div", Yn, [
                k(st, { level: "4" }, {
                  default: l(() => [...C[17] || (C[17] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (K = (x = t.status.git_changes) == null ? void 0 : x.nodes_added) != null && K.length ? (s(), o("div", Xn, [
                  e("div", Qn, [
                    C[18] || (C[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Zn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ea, [
                    (s(!0), o(F, null, ne(t.status.git_changes.nodes_added, (se) => (s(), o("div", {
                      key: g(se),
                      class: "change-item"
                    }, [
                      e("span", ta, a(g(se)), 1),
                      w(se) ? (s(), o("span", sa, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (q = (V = t.status.git_changes) == null ? void 0 : V.nodes_removed) != null && q.length ? (s(), o("div", oa, [
                  e("div", na, [
                    C[19] || (C[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", aa, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", la, [
                    (s(!0), o(F, null, ne(t.status.git_changes.nodes_removed, (se) => (s(), o("div", {
                      key: g(se),
                      class: "change-item"
                    }, [
                      e("span", ia, a(g(se)), 1),
                      w(se) ? (s(), o("span", ra, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (z = t.status.git_changes) != null && z.workflow_changes ? (s(), o("div", da, [
                  C[20] || (C[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", ca, [
                    e("div", ua, [
                      e("span", ma, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (S = t.status.git_changes) != null && S.has_other_changes ? (s(), o("div", va, [...C[21] || (C[21] = [
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
              (P = t.status.comparison) != null && P.is_synced ? d("", !0) : (s(), o("div", fa, [
                e("div", ga, [
                  k(st, { level: "4" }, {
                    default: l(() => [...C[22] || (C[22] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[3] || (C[3] = (se) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                C[26] || (C[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (Q = (X = t.status.comparison) == null ? void 0 : X.missing_nodes) != null && Q.length ? (s(), o("div", pa, [
                  k(Ne, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ha, [
                    (s(!0), o(F, null, ne(t.status.comparison.missing_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ya, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (re = (J = t.status.comparison) == null ? void 0 : J.extra_nodes) != null && re.length ? (s(), o("div", wa, [
                  k(Ne, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", ka, [
                    (s(!0), o(F, null, ne(t.status.comparison.extra_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ba, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (D = (H = t.status.comparison) == null ? void 0 : H.version_mismatches) != null && D.length ? (s(), o("div", _a, [
                  k(Ne, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", $a, [
                    (s(!0), o(F, null, ne(t.status.comparison.version_mismatches.slice(0, 10), (se) => (s(), o("div", {
                      key: se.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      y(a(se.name) + ": ", 1),
                      e("span", Ca, a(se.actual), 1),
                      C[23] || (C[23] = y(" → ", -1)),
                      e("span", xa, a(se.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Sa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ((N = t.status.comparison) == null ? void 0 : N.packages_in_sync) === !1 ? (s(), o("div", Ia, [
                  k(Ne, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : d("", !0),
                e("div", Ea, [
                  k(ae, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: C[4] || (C[4] = (se) => b.$emit("repair"))
                  }, {
                    default: l(() => [...C[24] || (C[24] = [
                      y(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  C[25] || (C[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (le = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && le.length ? (s(), o("div", Ma, [
                k(st, { level: "4" }, {
                  default: l(() => [...C[27] || (C[27] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ta, [
                  C[28] || (C[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ra, [
                  (s(!0), o(F, null, ne(t.status.comparison.disabled_nodes.slice(0, 10), (se) => (s(), o("div", {
                    key: se,
                    class: "drift-list-item"
                  }, " • " + a(se), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", za, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", La, [
                k(st, { level: "4" }, {
                  default: l(() => [...C[29] || (C[29] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Pa, [
                  C[30] || (C[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[31] || (C[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", Da, [...C[32] || (C[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", Na, [
              k(ae, {
                variant: "secondary",
                onClick: C[5] || (C[5] = (se) => b.$emit("close"))
              }, {
                default: l(() => [...C[33] || (C[33] = [
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
}), Oa = /* @__PURE__ */ te(Ua, [["__scopeId", "data-v-e2b37122"]]), Ba = { class: "health-section-header" }, Aa = { class: "suggestions-content" }, Fa = { class: "suggestions-text" }, Va = { style: { "margin-top": "var(--cg-space-3)" } }, Wa = {
  key: 1,
  class: "no-issues-text"
}, ja = /* @__PURE__ */ ee({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, h = $(!1), p = $(!1);
    function u() {
      h.value = !0;
    }
    function m() {
      h.value = !1, v("view-workflows");
    }
    function r() {
      h.value = !1, v("view-nodes");
    }
    const v = n, g = $(!1), w = $(!1);
    function b() {
      w.value = !0, v("repair-environment");
    }
    function C() {
      w.value = !1;
    }
    function T() {
      h.value = !1;
    }
    const O = U(() => {
      const H = i.status.workflows.analyzed || [], D = H.filter(
        (N) => N.unresolved_models_count > 0 || N.ambiguous_models_count > 0
      );
      return D.length === 0 && i.status.missing_models_count > 0 ? H.filter((N) => N.sync_state === "synced") : D;
    });
    function f() {
      const H = O.value;
      H.length !== 0 && (g.value = !0, v("repair-missing-models", H.map((D) => D.name)));
    }
    function _() {
      g.value = !1;
    }
    c({ resetRepairingState: _, resetRepairingEnvironmentState: C, closeDetailModal: T });
    const L = U(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), M = U(() => i.status.has_changes), x = U(() => {
      const H = i.status.git_changes;
      return H.nodes_added.length > 0 || H.nodes_removed.length > 0 || H.workflow_changes;
    }), K = U(() => i.status.has_changes || L.value), V = U(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), q = U(() => i.status.git_changes.has_other_changes), z = U(() => {
      var H;
      return ((H = i.status.workflows.analyzed) == null ? void 0 : H.filter((D) => D.status === "broken")) || [];
    }), S = U(() => {
      var H;
      return ((H = i.status.workflows.analyzed) == null ? void 0 : H.filter(
        (D) => D.has_path_sync_issues && !D.has_issues
      )) || [];
    }), P = U(() => z.value.length > 0), X = U(() => P.value || S.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), Q = U(() => {
      const H = [];
      return i.status.workflows.new.length > 0 && H.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && H.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && H.push(`${i.status.workflows.deleted.length} deleted`), H.length > 0 ? `${H.join(", ")} workflow${H.length === 1 && !H[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), J = U(() => {
      var N, I;
      const H = [], D = i.status.comparison;
      return (N = D.missing_nodes) != null && N.length && H.push(`${D.missing_nodes.length} missing node${D.missing_nodes.length === 1 ? "" : "s"}`), (I = D.extra_nodes) != null && I.length && H.push(`${D.extra_nodes.length} untracked node${D.extra_nodes.length === 1 ? "" : "s"}`), H.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${H.join(" and ")}.`;
    }), re = U(() => {
      var N, I;
      const H = [], D = i.status.comparison;
      return (N = D.extra_nodes) != null && N.length && (D.extra_nodes.slice(0, 3).forEach((le) => {
        H.push(`Untracked: ${le}`);
      }), D.extra_nodes.length > 3 && H.push(`...and ${D.extra_nodes.length - 3} more untracked`)), (I = D.missing_nodes) != null && I.length && (D.missing_nodes.slice(0, 3).forEach((le) => {
        H.push(`Missing: ${le}`);
      }), D.missing_nodes.length > 3 && H.push(`...and ${D.missing_nodes.length - 3} more missing`)), H;
    });
    return (H, D) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), E(at, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (N) => H.$emit("start-setup"))
              }, {
                default: l(() => [...D[13] || (D[13] = [
                  y(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), E(at, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (N) => H.$emit("view-environments"))
              }, {
                default: l(() => [...D[14] || (D[14] = [
                  y(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), E(at, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: D[2] || (D[2] = (N) => H.$emit("create-environment"))
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
            onMouseenter: D[4] || (D[4] = (N) => p.value = !0),
            onMouseleave: D[5] || (D[5] = (N) => p.value = !1)
          }, [
            e("div", Ba, [
              k(st, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...D[16] || (D[16] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(co, { name: "fade" }, {
                default: l(() => [
                  p.value ? (s(), E(ae, {
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
            k(Vo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Gt({
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
                k(ct, {
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
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                q.value ? (s(), E(ct, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                M.value && !x.value && !q.value ? (s(), E(ct, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                M.value ? d("", !0) : (s(), E(ct, {
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
                  e("div", Aa, [
                    e("span", Fa, a(Q.value), 1),
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: D[3] || (D[3] = (N) => H.$emit("commit-changes"))
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
          t.status.is_detached_head ? (s(), E(at, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: D[6] || (D[6] = (N) => H.$emit("create-branch"))
              }, {
                default: l(() => [...D[20] || (D[20] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", Va, [
            k(st, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...D[21] || (D[21] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            X.value ? (s(), o(F, { key: 0 }, [
              z.value.length > 0 ? (s(), E(at, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${z.value.length} workflow${z.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: z.value.map((N) => `${N.name} — ${N.issue_summary}`)
              }, {
                actions: l(() => [
                  k(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[7] || (D[7] = (N) => H.$emit("view-workflows"))
                  }, {
                    default: l(() => [...D[22] || (D[22] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              S.value.length > 0 ? (s(), E(at, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: S.value.map((N) => `${N.name} — ${N.models_needing_path_sync_count} model path${N.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  k(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[8] || (D[8] = (N) => H.$emit("view-workflows"))
                  }, {
                    default: l(() => [...D[23] || (D[23] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !P.value ? (s(), E(at, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  k(ae, {
                    variant: "primary",
                    size: "sm",
                    disabled: g.value,
                    onClick: f
                  }, {
                    default: l(() => [
                      y(a(g.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(ae, {
                    variant: "secondary",
                    size: "sm",
                    onClick: D[9] || (D[9] = (N) => H.$emit("view-workflows"))
                  }, {
                    default: l(() => [...D[24] || (D[24] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), E(at, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: J.value,
                items: re.value
              }, {
                actions: l(() => [
                  k(ae, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...D[25] || (D[25] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[10] || (D[10] = (N) => H.$emit("view-nodes"))
                  }, {
                    default: l(() => [...D[26] || (D[26] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), E(at, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  k(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[11] || (D[11] = (N) => H.$emit("view-nodes"))
                  }, {
                    default: l(() => [...D[27] || (D[27] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : K.value ? (s(), o("span", Wa, "No issues")) : (s(), E(rt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(Oa, {
        show: h.value,
        status: t.status,
        "is-repairing": w.value,
        onClose: D[12] || (D[12] = (N) => h.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: r,
        onRepair: b
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ga = /* @__PURE__ */ te(ja, [["__scopeId", "data-v-55fcd77f"]]), Ha = ["type", "value", "placeholder", "disabled"], qa = /* @__PURE__ */ ee({
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
    const i = t, h = n, p = $(null);
    function u(m) {
      const r = m.target.value;
      h("update:modelValue", r);
    }
    return Be(() => {
      i.autoFocus && p.value && p.value.focus();
    }), c({
      focus: () => {
        var m;
        return (m = p.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = p.value) == null ? void 0 : m.blur();
      }
    }), (m, r) => (s(), o("input", {
      ref_key: "inputRef",
      ref: p,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: de(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        r[0] || (r[0] = ht((v) => m.$emit("enter"), ["enter"])),
        r[1] || (r[1] = ht((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (v) => m.$emit("focus")),
      onBlur: r[3] || (r[3] = (v) => m.$emit("blur"))
    }, null, 42, Ha));
  }
}), Ft = /* @__PURE__ */ te(qa, [["__scopeId", "data-v-0380d08f"]]), Ka = { class: "branch-create-form" }, Ja = { class: "form-actions" }, Ya = /* @__PURE__ */ ee({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = $(""), h = U(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function p() {
      h.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (m, r) => (s(), o("div", Ka, [
      k(Ft, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (v) => i.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", Ja, [
        k(ae, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: p
        }, {
          default: l(() => [...r[1] || (r[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(ae, {
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
}), Xa = /* @__PURE__ */ te(Ya, [["__scopeId", "data-v-7c500394"]]), Qa = { class: "branch-list-item__indicator" }, Za = { class: "branch-list-item__name" }, el = {
  key: 0,
  class: "branch-list-item__actions"
}, tl = {
  key: 0,
  class: "branch-list-item__current-label"
}, sl = /* @__PURE__ */ ee({
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
      class: de(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Qa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Za, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", el, [
        $e(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", tl, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), ol = /* @__PURE__ */ te(sl, [["__scopeId", "data-v-c6581a24"]]), nl = {
  key: 2,
  class: "branch-list"
}, al = /* @__PURE__ */ ee({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = $(!1);
    function h(u) {
      n("create", u), p();
    }
    function p() {
      i.value = !1;
    }
    return (u, m) => (s(), E(Je, null, {
      header: l(() => [
        k(Ye, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? d("", !0) : (s(), E(ae, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (r) => i.value = !0)
            }, {
              default: l(() => [...m[1] || (m[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), E(Xa, {
          key: 0,
          onCreate: h,
          onCancel: p
        })) : d("", !0),
        t.branches.length === 0 ? (s(), E(rt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", nl, [
          (s(!0), o(F, null, ne(t.branches, (r) => (s(), E(ol, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: l(() => [
              r.is_current ? d("", !0) : (s(), E(ae, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => u.$emit("delete", r.name)
              }, {
                default: l(() => [...m[2] || (m[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              r.is_current ? d("", !0) : (s(), E(ae, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => u.$emit("switch", r.name)
              }, {
                default: l(() => [...m[3] || (m[3] = [
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
}), ll = /* @__PURE__ */ te(al, [["__scopeId", "data-v-86784ddd"]]), il = { class: "commit-list" }, rl = /* @__PURE__ */ ee({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", il, [
      $e(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), dl = /* @__PURE__ */ te(rl, [["__scopeId", "data-v-8c5ee761"]]), cl = { class: "commit-hash" }, ul = /* @__PURE__ */ ee({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = U(() => c.hash.slice(0, c.length));
    return (i, h) => (s(), o("span", cl, a(n.value), 1));
  }
}), Ds = /* @__PURE__ */ te(ul, [["__scopeId", "data-v-7c333cc6"]]), ml = { class: "commit-message" }, vl = { class: "commit-date" }, fl = /* @__PURE__ */ ee({
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
    return (p, u) => (s(), o("div", {
      class: de(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      k(Ds, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ml, a(t.message), 1),
      e("span", vl, a(t.relativeDate), 1),
      p.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Le(() => {
        }, ["stop"]))
      }, [
        $e(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), gl = /* @__PURE__ */ te(fl, [["__scopeId", "data-v-dd7c621b"]]), pl = /* @__PURE__ */ ee({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), E(Je, null, {
      header: l(() => [
        k(Ye, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), E(rt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(dl, { key: 1 }, {
          default: l(() => [
            (s(!0), o(F, null, ne(t.commits, (i) => (s(), E(gl, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (h) => c.$emit("select", i)
            }, {
              actions: l(() => [
                k(ae, {
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
}), hl = /* @__PURE__ */ te(pl, [["__scopeId", "data-v-981c3c64"]]), U2 = ss({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const O2 = [
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
], B2 = {
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
}, yl = [
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
], A2 = [
  ...yl,
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
function Nt() {
  return !1;
}
function Fe() {
  const t = $(!1), c = $(null);
  async function n(G, me) {
    var Pe;
    if (!((Pe = window.app) != null && Pe.api))
      throw new Error("ComfyUI API not available");
    const we = await window.app.api.fetchApi(G, me);
    if (!we.ok) {
      const qe = await we.json().catch(() => ({}));
      throw new Error(qe.error || qe.message || `Request failed: ${we.status}`);
    }
    return we.json();
  }
  async function i(G = !1) {
    return n(G ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function h(G, me = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: G, allow_issues: me })
    });
  }
  async function p(G = 10, me = 0) {
    return n(`/v2/comfygit/log?limit=${G}&offset=${me}`);
  }
  async function u(G) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
    });
  }
  async function m() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function r(G) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G, force: !0 })
    });
  }
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function g(G) {
    return n(`/v2/comfygit/commit/${G}`);
  }
  async function w(G, me = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: G, force: me })
    });
  }
  async function b(G, me = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, start_point: me })
    });
  }
  async function C(G, me = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: G, force: me })
    });
  }
  async function T(G, me = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(G)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: me })
    });
  }
  async function O() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const G = await i();
        return [{
          name: G.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + G.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: G.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: G.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function f(G, me) {
    const we = { target_env: G };
    return me && (we.workspace_path = me), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(we)
    });
  }
  async function _() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function L(G) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function M() {
    return n("/v2/workspace/environments/create_status");
  }
  async function x(G = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${G}`);
  }
  async function K(G) {
    return n(`/v2/workspace/environments/${G}`, {
      method: "DELETE"
    });
  }
  async function V(G = !1) {
    try {
      return n(G ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const me = await i(G), we = [];
      return me.workflows.new.forEach((Pe) => {
        we.push({ name: Pe, status: "new", missing_nodes: 0, missing_models: 0, path: Pe });
      }), me.workflows.modified.forEach((Pe) => {
        we.push({ name: Pe, status: "modified", missing_nodes: 0, missing_models: 0, path: Pe });
      }), me.workflows.synced.forEach((Pe) => {
        we.push({ name: Pe, status: "synced", missing_nodes: 0, missing_models: 0, path: Pe });
      }), we;
    }
  }
  async function q(G) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(G)}/details`);
  }
  async function z(G) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(G)}/resolve`, {
      method: "POST"
    });
  }
  async function S(G, me, we) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(G)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: me, install_models: we })
    });
  }
  async function P(G, me, we) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(G)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: me, importance: we })
    });
  }
  async function X() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Q() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function J(G) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(G)}`);
  }
  async function re(G) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function H(G, me) {
    return n(`/v2/workspace/models/${G}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: me })
    });
  }
  async function D(G, me) {
    return n(`/v2/workspace/models/${G}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: me })
    });
  }
  async function N(G) {
    return n(`/v2/workspace/models/${G}`, {
      method: "DELETE"
    });
  }
  async function I(G) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function le() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function se() {
    return n("/v2/workspace/models/directory");
  }
  async function Ee(G) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function ye() {
    try {
      return n("/v2/comfygit/config");
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
  async function ce(G) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ie(G, me) {
    try {
      const we = new URLSearchParams();
      return G && we.append("level", G), me && we.append("lines", me.toString()), n(`/v2/comfygit/debug/logs?${we}`);
    } catch {
      return [];
    }
  }
  async function ue(G, me) {
    try {
      const we = new URLSearchParams();
      return G && we.append("level", G), me && we.append("lines", me.toString()), n(`/v2/workspace/debug/logs?${we}`);
    } catch {
      return [];
    }
  }
  async function fe() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Ae() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Re(G) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
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
  async function Ve(G) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(G)}/track-dev`, {
      method: "POST"
    });
  }
  async function Se(G) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(G)}/install`, {
      method: "POST"
    });
  }
  async function ot(G) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(G)}/update`, {
      method: "POST"
    });
  }
  async function dt(G) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(G)}`, {
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
  async function xe(G, me) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, url: me })
    });
  }
  async function et(G) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function he(G, me, we) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: me, push_url: we })
    });
  }
  async function j(G) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}/fetch`, {
      method: "POST"
    });
  }
  async function Me(G) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}/status`);
    } catch {
      return null;
    }
  }
  async function Z(G = "skip", me = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: G,
        remove_extra_nodes: me
      })
    });
  }
  async function ze(G, me) {
    const we = me ? `/v2/comfygit/remotes/${encodeURIComponent(G)}/pull-preview?branch=${encodeURIComponent(me)}` : `/v2/comfygit/remotes/${encodeURIComponent(G)}/pull-preview`;
    return n(we);
  }
  async function We(G, me = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: me.modelStrategy || "skip",
        force: me.force || !1,
        resolutions: me.resolutions
      })
    });
  }
  async function He(G, me) {
    const we = me ? `/v2/comfygit/remotes/${encodeURIComponent(G)}/push-preview?branch=${encodeURIComponent(me)}` : `/v2/comfygit/remotes/${encodeURIComponent(G)}/push-preview`;
    return n(we);
  }
  async function Te(G, me = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: me.force || !1 })
    });
  }
  async function ft(G, me) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: me })
    });
  }
  async function Y(G) {
    const me = {
      success: 0,
      failed: []
    };
    for (const we of G)
      try {
        await z(we), me.success++;
      } catch (Pe) {
        me.failed.push({
          name: we,
          error: Pe instanceof Error ? Pe.message : "Unknown error"
        });
      }
    return me;
  }
  async function B(G) {
    var Pe;
    const me = new FormData();
    if (me.append("file", G), !((Pe = window.app) != null && Pe.api))
      throw new Error("ComfyUI API not available");
    const we = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: me
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!we.ok) {
      const qe = await we.json().catch(() => ({}));
      throw new Error(qe.error || `Preview failed: ${we.status}`);
    }
    return we.json();
  }
  async function A(G) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(G)}`
    );
  }
  async function oe(G, me, we, Pe) {
    var Kt;
    const qe = new FormData();
    if (qe.append("file", G), qe.append("name", me), qe.append("model_strategy", we), qe.append("torch_backend", Pe), !((Kt = window.app) != null && Kt.api))
      throw new Error("ComfyUI API not available");
    const It = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: qe
    });
    if (!It.ok) {
      const Jt = await It.json().catch(() => ({}));
      throw new Error(Jt.message || Jt.error || `Import failed: ${It.status}`);
    }
    return It.json();
  }
  async function be() {
    return n("/v2/workspace/import/status");
  }
  async function Qe(G) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: G })
    });
  }
  async function gt(G, me, we, Pe) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: G,
        name: me,
        model_strategy: we,
        torch_backend: Pe
      })
    });
  }
  async function Ct() {
    return n("/v2/setup/status");
  }
  async function nt(G) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function xt() {
    return n("/v2/setup/initialize_status");
  }
  async function St(G) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: h,
    getHistory: p,
    exportEnv: u,
    validateExport: m,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: v,
    getCommitDetail: g,
    checkout: w,
    createBranch: b,
    switchBranch: C,
    deleteBranch: T,
    // Environment Management
    getEnvironments: O,
    switchEnvironment: f,
    getSwitchProgress: _,
    createEnvironment: L,
    getCreateProgress: M,
    getComfyUIReleases: x,
    deleteEnvironment: K,
    // Workflow Management
    getWorkflows: V,
    getWorkflowDetails: q,
    resolveWorkflow: z,
    installWorkflowDeps: S,
    setModelImportance: P,
    // Model Management
    getEnvironmentModels: X,
    getWorkspaceModels: Q,
    getModelDetails: J,
    openFileLocation: re,
    addModelSource: H,
    removeModelSource: D,
    deleteModel: N,
    downloadModel: I,
    scanWorkspaceModels: le,
    getModelsDirectory: se,
    setModelsDirectory: Ee,
    // Settings
    getConfig: ye,
    updateConfig: ce,
    // Debug/Logs
    getEnvironmentLogs: ie,
    getWorkspaceLogs: ue,
    getEnvironmentLogPath: fe,
    getWorkspaceLogPath: Ae,
    openFile: Re,
    // Node Management
    getNodes: ve,
    trackNodeAsDev: Ve,
    installNode: Se,
    updateNode: ot,
    uninstallNode: dt,
    // Git Remotes
    getRemotes: vt,
    addRemote: xe,
    removeRemote: et,
    updateRemoteUrl: he,
    fetchRemote: j,
    getRemoteSyncStatus: Me,
    // Push/Pull
    getPullPreview: ze,
    pullFromRemote: We,
    getPushPreview: He,
    pushToRemote: Te,
    validateMerge: ft,
    // Environment Sync
    syncEnvironmentManually: Z,
    // Workflow Repair
    repairWorkflowModels: Y,
    // Import Operations
    previewTarballImport: B,
    previewGitImport: Qe,
    validateEnvironmentName: A,
    executeImport: oe,
    executeGitImport: gt,
    getImportProgress: be,
    // First-Time Setup
    getSetupStatus: Ct,
    initializeWorkspace: nt,
    getInitializeProgress: xt,
    validatePath: St
  };
}
async function Ut(t, c = {}, n = 5e3) {
  const i = new AbortController(), h = setTimeout(() => i.abort(), n);
  try {
    const p = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(h), p;
  } catch (p) {
    throw clearTimeout(h), p.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : p;
  }
}
function Ns() {
  const t = $(null);
  async function c() {
    try {
      const u = await Ut(
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
      const u = await Ut(
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
      const u = await Ut(
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
  async function h() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ut(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ut(
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
    kill: p
  };
}
const wl = { class: "base-modal-header" }, kl = {
  key: 0,
  class: "base-modal-title"
}, bl = { class: "base-modal-body" }, _l = {
  key: 0,
  class: "base-modal-loading"
}, $l = {
  key: 1,
  class: "base-modal-error"
}, Cl = {
  key: 0,
  class: "base-modal-footer"
}, xl = /* @__PURE__ */ ee({
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
    function p(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return Be(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), Ls(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (u, m) => (s(), E(je, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: de(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", wl, [
            $e(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", kl, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (r) => u.$emit("close"))
            }, [...m[2] || (m[2] = [
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
          e("div", bl, [
            t.loading ? (s(), o("div", _l, "Loading...")) : t.error ? (s(), o("div", $l, a(t.error), 1)) : $e(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Cl, [
            $e(u.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Xe = /* @__PURE__ */ te(xl, [["__scopeId", "data-v-8dab1081"]]), Sl = ["type", "disabled"], Il = {
  key: 0,
  class: "spinner"
}, El = /* @__PURE__ */ ee({
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
      class: de(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Il)) : d("", !0),
      $e(c.$slots, "default", {}, void 0, !0)
    ], 10, Sl));
  }
}), ge = /* @__PURE__ */ te(El, [["__scopeId", "data-v-f3452606"]]), Ml = {
  key: 0,
  class: "base-title-count"
}, Tl = /* @__PURE__ */ ee({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), E(us(`h${t.level}`), {
      class: de(["base-title", t.variant])
    }, {
      default: l(() => [
        $e(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ml, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vt = /* @__PURE__ */ te(Tl, [["__scopeId", "data-v-5a01561d"]]), Rl = ["value", "disabled"], zl = {
  key: 0,
  value: "",
  disabled: ""
}, Ll = ["value"], Pl = {
  key: 0,
  class: "base-select-error"
}, Dl = /* @__PURE__ */ ee({
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
      class: de(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: de(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (p) => i.$emit("update:modelValue", p.target.value))
      }, [
        t.placeholder ? (s(), o("option", zl, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(F, null, ne(t.options, (p) => (s(), o("option", {
          key: c(p),
          value: c(p)
        }, a(n(p)), 9, Ll))), 128))
      ], 42, Rl),
      t.error ? (s(), o("span", Pl, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Nl = /* @__PURE__ */ te(Dl, [["__scopeId", "data-v-7436d745"]]), Ul = { class: "popover-header" }, Ol = { class: "popover-title" }, Bl = { class: "popover-content" }, Al = {
  key: 0,
  class: "popover-actions"
}, Fl = /* @__PURE__ */ ee({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), E(je, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: yt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", Ul, [
            e("h4", Ol, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Bl, [
            $e(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Al, [
            $e(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), mt = /* @__PURE__ */ te(Fl, [["__scopeId", "data-v-42815ace"]]), Vl = { class: "detail-section" }, Wl = {
  key: 0,
  class: "empty-message"
}, jl = { class: "model-header" }, Gl = { class: "model-name" }, Hl = { class: "model-details" }, ql = { class: "model-row" }, Kl = { class: "model-row" }, Jl = { class: "label" }, Yl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Xl = { class: "node-list" }, Ql = ["onClick"], Zl = {
  key: 1,
  class: "model-row"
}, ei = { class: "value" }, ti = {
  key: 2,
  class: "model-row"
}, si = { class: "value error" }, oi = {
  key: 0,
  class: "model-actions"
}, ni = { class: "detail-section" }, ai = {
  key: 0,
  class: "empty-message"
}, li = { class: "node-name" }, ii = {
  key: 0,
  class: "node-version"
}, ri = /* @__PURE__ */ ee({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: h, setModelImportance: p, openFileLocation: u } = Fe(), m = $(null), r = $(!1), v = $(null), g = $(!1), w = $({}), b = $(!1), C = $(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function O(z) {
      switch (z) {
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
    function f(z) {
      switch (z) {
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
    function _(z) {
      if (!z.loaded_by || z.loaded_by.length === 0) return [];
      const S = z.hash || z.filename;
      return C.value.has(S) ? z.loaded_by : z.loaded_by.slice(0, 3);
    }
    function L(z) {
      return C.value.has(z);
    }
    function M(z) {
      C.value.has(z) ? C.value.delete(z) : C.value.add(z), C.value = new Set(C.value);
    }
    async function x() {
      r.value = !0, v.value = null;
      try {
        m.value = await h(n.workflowName);
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function K(z, S) {
      w.value[z] = S, g.value = !0;
    }
    async function V(z) {
      try {
        await u(z);
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to open file location";
      }
    }
    async function q() {
      if (!g.value) {
        i("close");
        return;
      }
      r.value = !0, v.value = null;
      try {
        for (const [z, S] of Object.entries(w.value))
          await p(n.workflowName, z, S);
        i("refresh"), i("close");
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Be(x), (z, S) => (s(), o(F, null, [
      k(Xe, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: v.value || void 0,
        onClose: S[4] || (S[4] = (P) => i("close"))
      }, {
        body: l(() => [
          m.value ? (s(), o(F, { key: 0 }, [
            e("section", Vl, [
              k(Vt, { variant: "section" }, {
                default: l(() => [
                  y("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", Wl, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(F, null, ne(m.value.models, (P) => {
                var X;
                return s(), o("div", {
                  key: P.hash || P.filename,
                  class: "model-card"
                }, [
                  e("div", jl, [
                    S[6] || (S[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Gl, a(P.filename), 1)
                  ]),
                  e("div", Hl, [
                    e("div", ql, [
                      S[7] || (S[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: de(["value", O(P.status)])
                      }, a(f(P.status)), 3)
                    ]),
                    e("div", Kl, [
                      e("span", Jl, [
                        S[8] || (S[8] = y(" Importance: ", -1)),
                        k(Ps, {
                          size: 14,
                          title: "About importance levels",
                          onClick: S[0] || (S[0] = (Q) => b.value = !0)
                        })
                      ]),
                      k(Nl, {
                        "model-value": w.value[P.filename] || P.importance,
                        options: T,
                        "onUpdate:modelValue": (Q) => K(P.filename, Q)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    P.loaded_by && P.loaded_by.length > 0 ? (s(), o("div", Yl, [
                      S[9] || (S[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Xl, [
                        (s(!0), o(F, null, ne(_(P), (Q, J) => (s(), o("div", {
                          key: `${Q.node_id}-${J}`,
                          class: "node-reference"
                        }, a(Q.node_type) + " (Node #" + a(Q.node_id) + ") ", 1))), 128)),
                        P.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Q) => M(P.hash || P.filename)
                        }, a(L(P.hash || P.filename) ? "▼ Show less" : `▶ View all (${P.loaded_by.length})`), 9, Ql)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    P.size_mb ? (s(), o("div", Zl, [
                      S[10] || (S[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", ei, a(P.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    P.has_category_mismatch ? (s(), o("div", ti, [
                      S[13] || (S[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", si, [
                        S[11] || (S[11] = y(" In ", -1)),
                        e("code", null, a(P.actual_category) + "/", 1),
                        S[12] || (S[12] = y(" but loader needs ", -1)),
                        e("code", null, a((X = P.expected_categories) == null ? void 0 : X[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  P.status !== "available" ? (s(), o("div", oi, [
                    P.status === "downloadable" ? (s(), E(ge, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: S[1] || (S[1] = (Q) => i("resolve"))
                    }, {
                      default: l(() => [...S[14] || (S[14] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    })) : P.status === "category_mismatch" && P.file_path ? (s(), E(ge, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Q) => V(P.file_path)
                    }, {
                      default: l(() => [...S[15] || (S[15] = [
                        y(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : P.status !== "path_mismatch" ? (s(), E(ge, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: S[2] || (S[2] = (Q) => i("resolve"))
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
            e("section", ni, [
              k(Vt, { variant: "section" }, {
                default: l(() => [
                  y("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", ai, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(F, null, ne(m.value.nodes, (P) => (s(), o("div", {
                key: P.name,
                class: "node-item"
              }, [
                e("span", {
                  class: de(["node-status", P.status === "installed" ? "installed" : "missing"])
                }, a(P.status === "installed" ? "✓" : "✕"), 3),
                e("span", li, a(P.name), 1),
                P.version ? (s(), o("span", ii, "v" + a(P.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          k(ge, {
            variant: "secondary",
            onClick: S[3] || (S[3] = (P) => i("close"))
          }, {
            default: l(() => [...S[17] || (S[17] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          g.value ? (s(), E(ge, {
            key: 0,
            variant: "primary",
            onClick: q
          }, {
            default: l(() => [...S[18] || (S[18] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(mt, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: S[5] || (S[5] = (P) => b.value = !1)
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
}), di = /* @__PURE__ */ te(ri, [["__scopeId", "data-v-668728e6"]]), Ie = ss({
  items: [],
  status: "idle"
});
let ut = null;
function Us() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function os(t) {
  return Ie.items.find((c) => c.id === t);
}
async function Tt() {
  if (Ie.status === "downloading") return;
  const t = Ie.items.find((c) => c.status === "queued");
  if (!t) {
    Ie.status = "idle";
    return;
  }
  Ie.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ci(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Ie.status = "idle", Tt();
  }
}
async function ci(t) {
  return new Promise((c, n) => {
    ut && (ut.close(), ut = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), h = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    ut = h;
    let p = Date.now(), u = 0, m = !1;
    h.onmessage = (r) => {
      try {
        const v = JSON.parse(r.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const g = Date.now(), w = (g - p) / 1e3;
            if (w > 0.5) {
              const b = t.downloaded - u;
              if (t.speed = b / w, p = g, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const C = t.size - t.downloaded;
                t.eta = C / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, h.close(), ut = null, c();
            break;
          case "error":
            m = !0, h.close(), ut = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, h.onerror = () => {
      h.close(), ut = null, m || n(new Error("Connection lost"));
    };
  });
}
async function ui() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Ie.items.some((h) => h.url === n.url && h.filename === n.filename))
        continue;
      const i = {
        id: Us(),
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
function Ht() {
  function t(f) {
    for (const _ of f) {
      if (Ie.items.some(
        (x) => x.url === _.url && x.targetPath === _.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${_.filename}`);
        continue;
      }
      const M = {
        id: Us(),
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
      Ie.items.push(M);
    }
    Ie.status === "idle" && Tt();
  }
  async function c(f) {
    const _ = os(f);
    if (_) {
      if (_.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(_.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ut && (ut.close(), ut = null), _.status = "failed", _.error = "Cancelled by user", Ie.status = "idle", Tt();
      } else if (_.status === "queued") {
        const L = Ie.items.findIndex((M) => M.id === f);
        L >= 0 && Ie.items.splice(L, 1);
      }
    }
  }
  function n(f) {
    const _ = os(f);
    !_ || _.status !== "failed" || (_.status = "queued", _.error = void 0, _.progress = 0, _.downloaded = 0, Ie.status === "idle" && Tt());
  }
  function i(f) {
    const _ = os(f);
    !_ || _.status !== "paused" || (_.status = "queued", Ie.status === "idle" && Tt());
  }
  function h() {
    const f = Ie.items.filter((_) => _.status === "paused");
    for (const _ of f)
      _.status = "queued";
    Ie.status === "idle" && Tt();
  }
  function p(f) {
    const _ = Ie.items.findIndex((L) => L.id === f);
    _ >= 0 && ["completed", "failed", "paused"].includes(Ie.items[_].status) && Ie.items.splice(_, 1);
  }
  function u() {
    Ie.items = Ie.items.filter((f) => f.status !== "completed");
  }
  function m() {
    Ie.items = Ie.items.filter((f) => f.status !== "failed");
  }
  const r = U(
    () => Ie.items.find((f) => f.status === "downloading")
  ), v = U(
    () => Ie.items.filter((f) => f.status === "queued")
  ), g = U(
    () => Ie.items.filter((f) => f.status === "completed")
  ), w = U(
    () => Ie.items.filter((f) => f.status === "failed")
  ), b = U(
    () => Ie.items.filter((f) => f.status === "paused")
  ), C = U(() => Ie.items.length > 0), T = U(
    () => Ie.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), O = U(
    () => Ie.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: uo(Ie),
    // Computed
    currentDownload: r,
    queuedItems: v,
    completedItems: g,
    failedItems: w,
    pausedItems: b,
    hasItems: C,
    activeCount: T,
    hasPaused: O,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: h,
    removeItem: p,
    clearCompleted: u,
    clearFailed: m,
    loadPendingDownloads: ui
  };
}
function Os() {
  const t = $(null), c = $(null), n = $([]), i = $([]), h = $(!1), p = $(null);
  async function u(L, M) {
    var K;
    if (!((K = window.app) != null && K.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(L, M);
    if (!x.ok) {
      const V = await x.json().catch(() => ({})), q = V.error || V.message || `Request failed: ${x.status}`;
      throw new Error(q);
    }
    return x.json();
  }
  async function m(L) {
    h.value = !0, p.value = null;
    try {
      let M;
      return Nt() || (M = await u(
        `/v2/comfygit/workflow/${L}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = M, M;
    } catch (M) {
      const x = M instanceof Error ? M.message : "Unknown error occurred";
      throw p.value = x, M;
    } finally {
      h.value = !1;
    }
  }
  async function r(L, M, x, K) {
    h.value = !0, p.value = null;
    try {
      let V;
      if (!Nt()) {
        const q = Object.fromEntries(M), z = Object.fromEntries(x), S = K ? Array.from(K) : [];
        V = await u(
          `/v2/comfygit/workflow/${L}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: q,
              model_choices: z,
              skipped_packages: S
            })
          }
        );
      }
      return c.value = V, V;
    } catch (V) {
      const q = V instanceof Error ? V.message : "Unknown error occurred";
      throw p.value = q, V;
    } finally {
      h.value = !1;
    }
  }
  async function v(L, M = 10) {
    h.value = !0, p.value = null;
    try {
      let x;
      return Nt() || (x = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: M })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const K = x instanceof Error ? x.message : "Unknown error occurred";
      throw p.value = K, x;
    } finally {
      h.value = !1;
    }
  }
  async function g(L, M = 10) {
    h.value = !0, p.value = null;
    try {
      let x;
      return Nt() || (x = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: M })
        }
      )), i.value = x.results, x.results;
    } catch (x) {
      const K = x instanceof Error ? x.message : "Unknown error occurred";
      throw p.value = K, x;
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
  async function C(L) {
    w.phase = "installing", w.nodesInstalled = [], w.installError = void 0, w.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Nt(), await T(L);
    } catch (M) {
      const x = M instanceof Error ? M.message : "Failed to install nodes";
      throw w.installError = x, M;
    }
  }
  async function T(L) {
    var x;
    const M = await u(
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
      const K = new Map(((x = M.failed) == null ? void 0 : x.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < w.nodesToInstall.length; V++) {
        const q = w.nodesToInstall[V], z = K.get(q);
        w.nodeInstallProgress.completedNodes.push({
          node_id: q,
          success: !z,
          error: z
        });
      }
    }
    return w.nodesInstalled = M.nodes_installed, w.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (w.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function O(L, M, x) {
    b(), w.phase = "resolving", p.value = null;
    const K = Object.fromEntries(M), V = Object.fromEntries(x);
    try {
      const q = await fetch(`/v2/comfygit/workflow/${L}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: K,
          model_choices: V
        })
      });
      if (!q.ok)
        throw new Error(`Request failed: ${q.status}`);
      if (!q.body)
        throw new Error("No response body");
      const z = q.body.getReader(), S = new TextDecoder();
      let P = "";
      for (; ; ) {
        const { done: X, value: Q } = await z.read();
        if (X) break;
        P += S.decode(Q, { stream: !0 });
        const J = P.split(`

`);
        P = J.pop() || "";
        for (const re of J) {
          if (!re.trim()) continue;
          const H = re.split(`
`);
          let D = "", N = "";
          for (const I of H)
            I.startsWith("event: ") ? D = I.slice(7) : I.startsWith("data: ") && (N = I.slice(6));
          if (N)
            try {
              const I = JSON.parse(N);
              f(D, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (q) {
      const z = q instanceof Error ? q.message : "Unknown error occurred";
      throw p.value = z, w.error = z, w.phase = "error", q;
    }
  }
  function f(L, M) {
    switch (L) {
      case "batch_start":
        w.phase = "downloading", w.totalFiles = M.total;
        break;
      case "file_start":
        w.currentFile = M.filename, w.currentFileIndex = M.index, w.bytesDownloaded = 0, w.bytesTotal = void 0;
        break;
      case "file_progress":
        w.bytesDownloaded = M.downloaded, w.bytesTotal = M.total;
        break;
      case "file_complete":
        w.completedFiles.push({
          filename: M.filename,
          success: M.success,
          error: M.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        w.nodesToInstall = M.nodes_to_install || [], M.download_results && (w.completedFiles = M.download_results), w.phase = "complete";
        break;
      case "error":
        w.error = M.message, w.phase = "error", p.value = M.message;
        break;
    }
  }
  function _(L, M) {
    const { addToQueue: x } = Ht(), K = M.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: L,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
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
    isLoading: h,
    error: p,
    progress: w,
    // Methods
    analyzeWorkflow: m,
    applyResolution: r,
    applyResolutionWithProgress: O,
    installNodes: C,
    searchNodes: v,
    searchModels: g,
    resetProgress: b,
    queueModelDownloads: _
  };
}
const mi = { class: "resolution-stepper" }, vi = { class: "stepper-header" }, fi = ["onClick"], gi = {
  key: 0,
  class: "step-icon"
}, pi = {
  key: 1,
  class: "step-number"
}, hi = { class: "step-label" }, yi = {
  key: 0,
  class: "step-connector"
}, wi = { class: "stepper-content" }, ki = /* @__PURE__ */ ee({
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
      var g;
      if ((g = n.stepStats) != null && g[v]) {
        const w = n.stepStats[v];
        return w.total > 0 && w.resolved === w.total;
      }
      return n.completedSteps.includes(v);
    }
    function p(v) {
      var g;
      if ((g = n.stepStats) != null && g[v]) {
        const w = n.stepStats[v];
        return w.resolved > 0 && w.resolved < w.total;
      }
      return !1;
    }
    function u(v) {
      return h(v) ? "state-complete" : p(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function r(v) {
      i("step-change", v);
    }
    return (v, g) => (s(), o("div", mi, [
      e("div", vi, [
        (s(!0), o(F, null, ne(t.steps, (w, b) => (s(), o("div", {
          key: w.id,
          class: de(["step", {
            active: t.currentStep === w.id,
            completed: h(w.id),
            "in-progress": p(w.id),
            disabled: m(w.id)
          }]),
          onClick: (C) => r(w.id)
        }, [
          e("div", {
            class: de(["step-indicator", u(w.id)])
          }, [
            h(w.id) ? (s(), o("span", gi, "✓")) : (s(), o("span", pi, a(b + 1), 1))
          ], 2),
          e("div", hi, a(w.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", yi)) : d("", !0)
        ], 10, fi))), 128))
      ]),
      e("div", wi, [
        $e(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), bi = /* @__PURE__ */ te(ki, [["__scopeId", "data-v-2a7b3af8"]]), _i = /* @__PURE__ */ ee({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = U(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = U(() => `confidence-${n.value}`), h = U(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (p, u) => (s(), o("span", {
      class: de(["confidence-badge", i.value, t.size])
    }, a(h.value), 3));
  }
}), es = /* @__PURE__ */ te(_i, [["__scopeId", "data-v-17ec4b80"]]), $i = { class: "node-info" }, Ci = { class: "node-info-text" }, xi = { class: "item-body" }, Si = {
  key: 0,
  class: "resolved-state"
}, Ii = {
  key: 1,
  class: "multiple-options"
}, Ei = { class: "options-list" }, Mi = ["onClick"], Ti = ["name", "value", "checked", "onChange"], Ri = { class: "option-content" }, zi = { class: "option-header" }, Li = { class: "option-package-id" }, Pi = {
  key: 0,
  class: "option-title"
}, Di = { class: "option-meta" }, Ni = {
  key: 0,
  class: "installed-badge"
}, Ui = { class: "action-buttons" }, Oi = {
  key: 2,
  class: "unresolved"
}, Bi = {
  key: 0,
  class: "searching-state"
}, Ai = { class: "options-list" }, Fi = ["onClick"], Vi = ["name", "value"], Wi = { class: "option-content" }, ji = { class: "option-header" }, Gi = { class: "option-package-id" }, Hi = {
  key: 0,
  class: "option-description"
}, qi = { class: "option-meta" }, Ki = {
  key: 0,
  class: "installed-badge"
}, Ji = {
  key: 2,
  class: "unresolved-message"
}, Yi = { class: "action-buttons" }, Xi = /* @__PURE__ */ ee({
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
    const p = U(() => !!n.choice);
    U(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), U(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.package_id;
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
    function m(r) {
      i("option-selected", r);
    }
    return (r, v) => (s(), o("div", {
      class: de(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", $i, [
        e("span", Ci, [
          v[7] || (v[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: de(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", xi, [
        p.value ? (s(), o("div", Si, [
          k(ge, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (g) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ii, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ei, [
            (s(!0), o(F, null, ne(t.options, (g, w) => (s(), o("label", {
              key: g.package_id,
              class: de(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (b) => m(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (b) => m(w)
              }, null, 40, Ti),
              e("div", Ri, [
                e("div", zi, [
                  e("span", Li, a(g.package_id), 1),
                  k(es, {
                    confidence: g.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                g.title && g.title !== g.package_id ? (s(), o("div", Pi, a(g.title), 1)) : d("", !0),
                e("div", Di, [
                  g.is_installed ? (s(), o("span", Ni, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, Mi))), 128))
          ]),
          e("div", Ui, [
            k(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (g) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (g) => i("manual-entry"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (g) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Oi, [
          t.isSearching ? (s(), o("div", Bi, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(F, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Ai, [
              (s(!0), o(F, null, ne(t.searchResults.slice(0, 5), (g, w) => (s(), o("label", {
                key: g.package_id,
                class: "option-card",
                onClick: (b) => i("search-result-selected", g)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: w
                }, null, 8, Vi),
                e("div", Wi, [
                  e("div", ji, [
                    e("span", Gi, a(g.package_id), 1),
                    k(es, {
                      confidence: g.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  g.description ? (s(), o("div", Hi, a(h(g.description)), 1)) : d("", !0),
                  e("div", qi, [
                    g.is_installed ? (s(), o("span", Ki, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, Fi))), 128))
            ])
          ], 64)) : (s(), o("div", Ji, [...v[15] || (v[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Yi, [
            k(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[4] || (v[4] = (g) => i("search"))
            }, {
              default: l(() => {
                var g;
                return [
                  y(a((g = t.searchResults) != null && g.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (g) => i("manual-entry"))
            }, {
              default: l(() => [...v[16] || (v[16] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (g) => i("mark-optional"))
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
}), Qi = /* @__PURE__ */ te(Xi, [["__scopeId", "data-v-c2997d1d"]]), Zi = { class: "item-navigator" }, er = { class: "nav-item-info" }, tr = ["title"], sr = { class: "nav-controls" }, or = { class: "nav-arrows" }, nr = ["disabled"], ar = ["disabled"], lr = { class: "nav-position" }, ir = /* @__PURE__ */ ee({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, h) => (s(), o("div", Zi, [
      e("div", er, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, tr)
      ]),
      e("div", sr, [
        e("div", or, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: h[0] || (h[0] = (p) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, nr),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (p) => n("next")),
            title: "Next item"
          }, " → ", 8, ar)
        ]),
        e("span", lr, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Bs = /* @__PURE__ */ te(ir, [["__scopeId", "data-v-74af7920"]]), rr = ["type", "value", "placeholder", "disabled"], dr = {
  key: 0,
  class: "base-input-error"
}, cr = /* @__PURE__ */ ee({
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
      class: de(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: de(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = ht((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = ht((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, rr),
      t.error ? (s(), o("span", dr, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ te(cr, [["__scopeId", "data-v-9ba02cdc"]]), ur = { class: "node-resolution-step" }, mr = {
  key: 0,
  class: "auto-resolved-section"
}, vr = { class: "section-header" }, fr = { class: "stat-badge" }, gr = { class: "resolved-packages-list" }, pr = { class: "package-info" }, hr = { class: "package-id" }, yr = { class: "node-count" }, wr = { class: "package-actions" }, kr = {
  key: 0,
  class: "status-badge install"
}, br = {
  key: 1,
  class: "status-badge skip"
}, _r = ["onClick"], $r = {
  key: 1,
  class: "section-divider"
}, Cr = { class: "step-header" }, xr = { class: "stat-badge" }, Sr = {
  key: 1,
  class: "step-body"
}, Ir = {
  key: 3,
  class: "empty-state"
}, Er = { class: "node-modal-body" }, Mr = { class: "node-search-results-container" }, Tr = {
  key: 0,
  class: "node-search-results"
}, Rr = ["onClick"], zr = { class: "node-result-header" }, Lr = { class: "node-result-package-id" }, Pr = {
  key: 0,
  class: "node-result-description"
}, Dr = {
  key: 1,
  class: "node-empty-state"
}, Nr = {
  key: 2,
  class: "node-empty-state"
}, Ur = {
  key: 3,
  class: "node-empty-state"
}, Or = { class: "node-manual-entry-modal" }, Br = { class: "node-modal-body" }, Ar = { class: "node-modal-actions" }, Fr = /* @__PURE__ */ ee({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: h } = Os(), p = $(0), u = $(!1), m = $(!1), r = $(""), v = $(""), g = $([]), w = $(!1), b = $(/* @__PURE__ */ new Map()), C = $(/* @__PURE__ */ new Set()), T = $(!1);
    function O() {
      T.value && N(), T.value = !1;
    }
    const f = U(() => n.nodes[p.value]), _ = U(() => n.nodes.filter((ue) => n.nodeChoices.has(ue.node_type)).length), L = U(() => f.value ? b.value.get(f.value.node_type) || [] : []), M = U(() => f.value ? C.value.has(f.value.node_type) : !1);
    _t(f, async (ue) => {
      var fe;
      ue && ((fe = ue.options) != null && fe.length || b.value.has(ue.node_type) || C.value.has(ue.node_type) || n.nodeChoices.has(ue.node_type) || await x(ue.node_type));
    }, { immediate: !0 });
    async function x(ue) {
      C.value.add(ue);
      try {
        const fe = await h(ue, 5);
        b.value.set(ue, fe);
      } catch {
        b.value.set(ue, []);
      } finally {
        C.value.delete(ue);
      }
    }
    const K = U(() => n.autoResolvedPackages.filter((ue) => !n.skippedPackages.has(ue.package_id)).length);
    function V(ue) {
      return n.skippedPackages.has(ue);
    }
    function q(ue) {
      i("package-skip", ue);
    }
    const z = U(() => {
      var fe;
      if (!f.value) return "not-found";
      const ue = n.nodeChoices.get(f.value.node_type);
      if (ue)
        switch (ue.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (fe = f.value.options) != null && fe.length ? "ambiguous" : "not-found";
    }), S = U(() => {
      var fe;
      if (!f.value) return;
      const ue = n.nodeChoices.get(f.value.node_type);
      if (ue)
        switch (ue.action) {
          case "install":
            return ue.package_id ? `→ ${ue.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (fe = f.value.options) != null && fe.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function P(ue) {
      ue >= 0 && ue < n.nodes.length && (p.value = ue);
    }
    function X() {
      f.value && i("mark-optional", f.value.node_type);
    }
    function Q() {
      f.value && i("skip", f.value.node_type);
    }
    function J(ue) {
      f.value && i("option-selected", f.value.node_type, ue);
    }
    function re() {
      f.value && i("clear-choice", f.value.node_type);
    }
    function H() {
      f.value && (r.value = f.value.node_type, g.value = L.value, u.value = !0, Ee(r.value));
    }
    function D() {
      v.value = "", m.value = !0;
    }
    function N() {
      u.value = !1, r.value = "", g.value = [];
    }
    function I() {
      m.value = !1, v.value = "";
    }
    let le = null;
    function se() {
      le && clearTimeout(le), le = setTimeout(() => {
        Ee(r.value);
      }, 300);
    }
    async function Ee(ue) {
      if (!ue.trim()) {
        g.value = [];
        return;
      }
      w.value = !0;
      try {
        g.value = await h(ue, 10);
      } catch {
        g.value = [];
      } finally {
        w.value = !1;
      }
    }
    function ye(ue) {
      f.value && (i("manual-entry", f.value.node_type, ue.package_id), N());
    }
    function ce(ue) {
      f.value && i("manual-entry", f.value.node_type, ue.package_id);
    }
    function ie() {
      !f.value || !v.value.trim() || (i("manual-entry", f.value.node_type, v.value.trim()), I());
    }
    return (ue, fe) => {
      var Ae, Re;
      return s(), o("div", ur, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", mr, [
          e("div", vr, [
            fe[6] || (fe[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", fr, a(K.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", gr, [
            (s(!0), o(F, null, ne(t.autoResolvedPackages, (ve) => (s(), o("div", {
              key: ve.package_id,
              class: "resolved-package-item"
            }, [
              e("div", pr, [
                e("code", hr, a(ve.package_id), 1),
                e("span", yr, a(ve.node_types_count) + " node type" + a(ve.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", wr, [
                V(ve.package_id) ? (s(), o("span", br, " SKIPPED ")) : (s(), o("span", kr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (Ve) => q(ve.package_id)
                }, a(V(ve.package_id) ? "Include" : "Skip"), 9, _r)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", $r)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(F, { key: 2 }, [
          e("div", Cr, [
            fe[7] || (fe[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", xr, a(_.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (s(), E(Bs, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: fe[0] || (fe[0] = (ve) => P(p.value - 1)),
            onNext: fe[1] || (fe[1] = (ve) => P(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          f.value ? (s(), o("div", Sr, [
            k(Qi, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((Ae = f.value.options) != null && Ae.length),
              options: f.value.options,
              choice: (Re = t.nodeChoices) == null ? void 0 : Re.get(f.value.node_type),
              status: z.value,
              "status-label": S.value,
              "search-results": L.value,
              "is-searching": M.value,
              onMarkOptional: X,
              onSkip: Q,
              onManualEntry: D,
              onSearch: H,
              onOptionSelected: J,
              onClearChoice: re,
              onSearchResultSelected: ce
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Ir, [...fe[8] || (fe[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), E(je, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: fe[4] || (fe[4] = Le((ve) => T.value = !0, ["self"])),
            onMouseup: Le(O, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: fe[3] || (fe[3] = (ve) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                fe[9] || (fe[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Er, [
                k(it, {
                  modelValue: r.value,
                  "onUpdate:modelValue": fe[2] || (fe[2] = (ve) => r.value = ve),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                e("div", Mr, [
                  g.value.length > 0 ? (s(), o("div", Tr, [
                    (s(!0), o(F, null, ne(g.value, (ve) => (s(), o("div", {
                      key: ve.package_id,
                      class: "node-search-result-item",
                      onClick: (Ve) => ye(ve)
                    }, [
                      e("div", zr, [
                        e("code", Lr, a(ve.package_id), 1),
                        ve.match_confidence ? (s(), E(es, {
                          key: 0,
                          confidence: ve.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      ve.description ? (s(), o("div", Pr, a(ve.description), 1)) : d("", !0)
                    ], 8, Rr))), 128))
                  ])) : w.value ? (s(), o("div", Dr, "Searching...")) : r.value ? (s(), o("div", Nr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", Ur, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), E(je, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Le(I, ["self"])
          }, [
            e("div", Or, [
              e("div", { class: "node-modal-header" }, [
                fe[10] || (fe[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", Br, [
                k(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": fe[5] || (fe[5] = (ve) => v.value = ve),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Ar, [
                  k(ge, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...fe[11] || (fe[11] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ge, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: ie
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
}), Vr = /* @__PURE__ */ te(Fr, [["__scopeId", "data-v-281581bc"]]), Wr = { class: "node-info" }, jr = { class: "node-info-text" }, Gr = { class: "item-body" }, Hr = {
  key: 0,
  class: "resolved-state"
}, qr = {
  key: 1,
  class: "multiple-options"
}, Kr = { class: "options-list" }, Jr = ["onClick"], Yr = ["name", "value", "checked", "onChange"], Xr = { class: "option-content" }, Qr = { class: "option-header" }, Zr = { class: "option-filename" }, ed = { class: "option-meta" }, td = { class: "option-size" }, sd = { class: "option-category" }, od = { class: "option-path" }, nd = { class: "action-buttons" }, ad = {
  key: 2,
  class: "unresolved"
}, ld = { class: "action-buttons" }, id = /* @__PURE__ */ ee({
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
    const n = t, i = c, h = U(() => !!n.choice);
    U(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), U(() => {
      var r, v;
      return ((v = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const p = U(() => {
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
    function m(r) {
      if (!r) return "Unknown";
      const v = r / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, v) => (s(), o("div", {
      class: de(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Wr, [
        e("span", jr, [
          v[7] || (v[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: de(["status-badge", p.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Gr, [
        h.value ? (s(), o("div", Hr, [
          k(ge, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (g) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", qr, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Kr, [
            (s(!0), o(F, null, ne(t.options, (g, w) => (s(), o("label", {
              key: g.model.hash,
              class: de(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (b) => u(w)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (b) => u(w)
              }, null, 40, Yr),
              e("div", Xr, [
                e("div", Qr, [
                  e("span", Zr, a(g.model.filename), 1),
                  k(es, {
                    confidence: g.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", ed, [
                  e("span", td, a(m(g.model.size)), 1),
                  e("span", sd, a(g.model.category), 1)
                ]),
                e("div", od, a(g.model.relative_path), 1)
              ])
            ], 10, Jr))), 128))
          ]),
          e("div", nd, [
            k(ge, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (g) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ge, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (g) => i("download-url"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (g) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", ad, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", ld, [
            k(ge, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (g) => i("search"))
            }, {
              default: l(() => [...v[13] || (v[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (g) => i("download-url"))
            }, {
              default: l(() => [...v[14] || (v[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (g) => i("mark-optional"))
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
}), rd = /* @__PURE__ */ te(id, [["__scopeId", "data-v-8a82fefa"]]), dd = { class: "model-resolution-step" }, cd = { class: "step-header" }, ud = { class: "step-info" }, md = { class: "step-title" }, vd = { class: "step-description" }, fd = { class: "stat-badge" }, gd = {
  key: 1,
  class: "step-body"
}, pd = {
  key: 2,
  class: "empty-state"
}, hd = { class: "model-search-modal" }, yd = { class: "model-modal-body" }, wd = {
  key: 0,
  class: "model-search-results"
}, kd = ["onClick"], bd = { class: "model-result-header" }, _d = { class: "model-result-filename" }, $d = { class: "model-result-meta" }, Cd = { class: "model-result-category" }, xd = { class: "model-result-size" }, Sd = {
  key: 0,
  class: "model-result-path"
}, Id = {
  key: 1,
  class: "model-no-results"
}, Ed = {
  key: 2,
  class: "model-searching"
}, Md = { class: "model-download-url-modal" }, Td = { class: "model-modal-body" }, Rd = { class: "model-input-group" }, zd = { class: "model-input-group" }, Ld = { class: "model-modal-actions" }, Pd = /* @__PURE__ */ ee({
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
      var I;
      return N && ((I = n[N]) == null ? void 0 : I[0]) || null;
    }
    const h = t, p = c, u = $(0), m = $(!1), r = $(!1), v = $(""), g = $(""), w = $(""), b = $([]), C = $(!1), T = U(() => h.models[u.value]), O = U(() => h.models.some((N) => N.is_download_intent)), f = U(() => h.models.filter(
      (N) => h.modelChoices.has(N.filename) || N.is_download_intent
    ).length), _ = U(() => {
      var I;
      if (!T.value) return "";
      const N = i((I = T.value.reference) == null ? void 0 : I.node_type);
      return N ? `${N}/${T.value.filename}` : "";
    }), L = U(() => {
      var I;
      if (!T.value) return "not-found";
      const N = h.modelChoices.get(T.value.filename);
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
      return T.value.is_download_intent ? "download" : (I = T.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), M = U(() => {
      var I, le;
      if (!T.value) return;
      const N = h.modelChoices.get(T.value.filename);
      if (N)
        switch (N.action) {
          case "select":
            return (I = N.selected_model) != null && I.filename ? `→ ${N.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return T.value.is_download_intent ? "Pending Download" : (le = T.value.options) != null && le.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function x(N) {
      N >= 0 && N < h.models.length && (u.value = N);
    }
    function K() {
      T.value && p("mark-optional", T.value.filename);
    }
    function V() {
      T.value && p("skip", T.value.filename);
    }
    function q(N) {
      T.value && p("option-selected", T.value.filename, N);
    }
    function z() {
      T.value && p("clear-choice", T.value.filename);
    }
    function S() {
      T.value && (v.value = T.value.filename, m.value = !0);
    }
    function P() {
      T.value && (g.value = T.value.download_source || "", w.value = T.value.target_path || _.value, r.value = !0);
    }
    function X() {
      m.value = !1, v.value = "", b.value = [];
    }
    function Q() {
      r.value = !1, g.value = "", w.value = "";
    }
    function J() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function re(N) {
      T.value && X();
    }
    function H() {
      !T.value || !g.value.trim() || (p("download-url", T.value.filename, g.value.trim(), w.value.trim() || void 0), Q());
    }
    function D(N) {
      if (!N) return "Unknown";
      const I = N / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(N / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (N, I) => {
      var le, se, Ee;
      return s(), o("div", dd, [
        e("div", cd, [
          e("div", ud, [
            e("h3", md, a(O.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", vd, a(O.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", fd, a(f.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), E(Bs, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = (ye) => x(u.value - 1)),
          onNext: I[1] || (I[1] = (ye) => x(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        T.value ? (s(), o("div", gd, [
          k(rd, {
            filename: T.value.filename,
            "node-type": ((le = T.value.reference) == null ? void 0 : le.node_type) || "Unknown",
            "has-multiple-options": !!((se = T.value.options) != null && se.length),
            options: T.value.options,
            choice: (Ee = t.modelChoices) == null ? void 0 : Ee.get(T.value.filename),
            status: L.value,
            "status-label": M.value,
            onMarkOptional: K,
            onSkip: V,
            onDownloadUrl: P,
            onSearch: S,
            onOptionSelected: q,
            onClearChoice: z
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", pd, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(je, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Le(X, ["self"])
          }, [
            e("div", hd, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              e("div", yd, [
                k(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": I[2] || (I[2] = (ye) => v.value = ye),
                  placeholder: "Search by filename, category...",
                  onInput: J
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", wd, [
                  (s(!0), o(F, null, ne(b.value, (ye) => (s(), o("div", {
                    key: ye.hash,
                    class: "model-search-result-item",
                    onClick: (ce) => re()
                  }, [
                    e("div", bd, [
                      e("code", _d, a(ye.filename), 1)
                    ]),
                    e("div", $d, [
                      e("span", Cd, a(ye.category), 1),
                      e("span", xd, a(D(ye.size)), 1)
                    ]),
                    ye.relative_path ? (s(), o("div", Sd, a(ye.relative_path), 1)) : d("", !0)
                  ], 8, kd))), 128))
                ])) : v.value && !C.value ? (s(), o("div", Id, ' No models found matching "' + a(v.value) + '" ', 1)) : d("", !0),
                C.value ? (s(), o("div", Ed, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), E(je, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Le(Q, ["self"])
          }, [
            e("div", Md, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: Q
                }, "✕")
              ]),
              e("div", Td, [
                e("div", Rd, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(it, {
                    modelValue: g.value,
                    "onUpdate:modelValue": I[3] || (I[3] = (ye) => g.value = ye),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", zd, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(it, {
                    modelValue: w.value,
                    "onUpdate:modelValue": I[4] || (I[4] = (ye) => w.value = ye),
                    placeholder: _.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Ld, [
                  k(ge, {
                    variant: "secondary",
                    onClick: Q
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ge, {
                    variant: "primary",
                    disabled: !g.value.trim() || !w.value.trim(),
                    onClick: H
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
}), Dd = /* @__PURE__ */ te(Pd, [["__scopeId", "data-v-c6acbada"]]), Nd = { class: "applying-step" }, Ud = {
  key: 0,
  class: "phase-content"
}, Od = {
  key: 1,
  class: "phase-content"
}, Bd = { class: "phase-description" }, Ad = { class: "overall-progress" }, Fd = { class: "progress-bar" }, Vd = { class: "progress-label" }, Wd = { class: "install-list" }, jd = { class: "install-icon" }, Gd = { key: 0 }, Hd = {
  key: 1,
  class: "spinner"
}, qd = { key: 2 }, Kd = { key: 3 }, Jd = {
  key: 0,
  class: "install-error"
}, Yd = {
  key: 2,
  class: "phase-content"
}, Xd = { class: "phase-header" }, Qd = { class: "phase-title" }, Zd = { class: "completion-summary" }, ec = {
  key: 0,
  class: "summary-item success"
}, tc = { class: "summary-text" }, sc = {
  key: 1,
  class: "summary-item error"
}, oc = { class: "summary-text" }, nc = {
  key: 2,
  class: "failed-list"
}, ac = { class: "failed-node-id" }, lc = { class: "failed-error" }, ic = {
  key: 4,
  class: "summary-item success"
}, rc = {
  key: 5,
  class: "restart-prompt"
}, dc = {
  key: 3,
  class: "phase-content error"
}, cc = { class: "error-message" }, uc = /* @__PURE__ */ ee({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = U(() => {
      var v, g;
      const m = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const r = ((g = c.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0;
      return Math.round(r / m * 100);
    }), i = U(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((r) => !r.success)) || [];
    }), h = U(() => i.value.length > 0);
    function p(m, r) {
      var g, w;
      const v = (g = c.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.find((b) => b.node_id === m);
      return v ? v.success ? "complete" : "failed" : ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.currentIndex) === r ? "installing" : "pending";
    }
    function u(m) {
      var r, v;
      return (v = (r = c.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((g) => g.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, r) => {
      var v, g, w, b;
      return s(), o("div", Nd, [
        t.progress.phase === "resolving" ? (s(), o("div", Ud, [...r[2] || (r[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Od, [
          r[3] || (r[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Bd, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((g = t.progress.nodeInstallProgress) == null ? void 0 : g.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Ad, [
            e("div", Fd, [
              e("div", {
                class: "progress-fill",
                style: yt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Vd, a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Wd, [
            (s(!0), o(F, null, ne(t.progress.nodesToInstall, (C, T) => (s(), o("div", {
              key: C,
              class: de(["install-item", p(C, T)])
            }, [
              e("span", jd, [
                p(C, T) === "pending" ? (s(), o("span", Gd, "○")) : p(C, T) === "installing" ? (s(), o("span", Hd, "◌")) : p(C, T) === "complete" ? (s(), o("span", qd, "✓")) : p(C, T) === "failed" ? (s(), o("span", Kd, "✗")) : d("", !0)
              ]),
              e("code", null, a(C), 1),
              u(C) ? (s(), o("span", Jd, a(u(C)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Yd, [
          e("div", Xd, [
            e("span", {
              class: de(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", Qd, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Zd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", ec, [
              r[4] || (r[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", tc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", sc, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", oc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", nc, [
              (s(!0), o(F, null, ne(i.value, (C) => (s(), o("div", {
                key: C.node_id,
                class: "failed-item"
              }, [
                e("code", ac, a(C.node_id), 1),
                e("span", lc, a(C.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = (C) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            h.value ? d("", !0) : (s(), o("div", ic, [...r[6] || (r[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            r[8] || (r[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", rc, [
              r[7] || (r[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: r[1] || (r[1] = (C) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", dc, [
          r[9] || (r[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", cc, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), mc = /* @__PURE__ */ te(uc, [["__scopeId", "data-v-5efaae58"]]), vc = {
  key: 0,
  class: "loading-state"
}, fc = {
  key: 1,
  class: "wizard-content"
}, gc = {
  key: 0,
  class: "step-content"
}, pc = { class: "analysis-summary" }, hc = { class: "analysis-header" }, yc = { class: "summary-description" }, wc = { class: "stats-grid" }, kc = { class: "stat-card" }, bc = { class: "stat-items" }, _c = {
  key: 0,
  class: "stat-item success"
}, $c = { class: "stat-count" }, Cc = {
  key: 1,
  class: "stat-item info"
}, xc = { class: "stat-count" }, Sc = {
  key: 2,
  class: "stat-item warning"
}, Ic = { class: "stat-count" }, Ec = {
  key: 3,
  class: "stat-item error"
}, Mc = { class: "stat-count" }, Tc = { class: "stat-card" }, Rc = { class: "stat-items" }, zc = { class: "stat-item success" }, Lc = { class: "stat-count" }, Pc = {
  key: 0,
  class: "stat-item info"
}, Dc = { class: "stat-count" }, Nc = {
  key: 1,
  class: "stat-item warning"
}, Uc = { class: "stat-count" }, Oc = {
  key: 2,
  class: "stat-item warning"
}, Bc = { class: "stat-count" }, Ac = {
  key: 3,
  class: "stat-item error"
}, Fc = { class: "stat-count" }, Vc = {
  key: 0,
  class: "status-message warning"
}, Wc = { class: "status-text" }, jc = {
  key: 1,
  class: "status-message info"
}, Gc = { class: "status-text" }, Hc = {
  key: 2,
  class: "status-message info"
}, qc = { class: "status-text" }, Kc = {
  key: 3,
  class: "status-message warning"
}, Jc = { class: "status-text" }, Yc = {
  key: 4,
  class: "status-message success"
}, Xc = {
  key: 5,
  class: "category-mismatch-section"
}, Qc = { class: "mismatch-list" }, Zc = { class: "mismatch-path" }, eu = { class: "mismatch-target" }, tu = {
  key: 3,
  class: "step-content"
}, su = { class: "review-summary" }, ou = { class: "review-stats" }, nu = { class: "review-stat" }, au = { class: "stat-value" }, lu = { class: "review-stat" }, iu = { class: "stat-value" }, ru = { class: "review-stat" }, du = { class: "stat-value" }, cu = { class: "review-stat" }, uu = { class: "stat-value" }, mu = {
  key: 0,
  class: "review-section"
}, vu = { class: "section-title" }, fu = { class: "review-items" }, gu = { class: "item-name" }, pu = { class: "item-choice" }, hu = {
  key: 0,
  class: "choice-badge install"
}, yu = {
  key: 1,
  class: "choice-badge skip"
}, wu = {
  key: 1,
  class: "review-section"
}, ku = { class: "section-title" }, bu = { class: "review-items" }, _u = { class: "item-name" }, $u = { class: "item-choice" }, Cu = {
  key: 0,
  class: "choice-badge install"
}, xu = {
  key: 1,
  class: "choice-badge optional"
}, Su = {
  key: 2,
  class: "choice-badge skip"
}, Iu = {
  key: 1,
  class: "choice-badge pending"
}, Eu = {
  key: 2,
  class: "review-section"
}, Mu = { class: "section-title" }, Tu = { class: "review-items" }, Ru = { class: "item-name" }, zu = { class: "item-choice" }, Lu = {
  key: 0,
  class: "choice-badge install"
}, Pu = {
  key: 1,
  class: "choice-badge download"
}, Du = {
  key: 2,
  class: "choice-badge optional"
}, Nu = {
  key: 3,
  class: "choice-badge skip"
}, Uu = {
  key: 4,
  class: "choice-badge skip"
}, Ou = {
  key: 1,
  class: "choice-badge download"
}, Bu = {
  key: 2,
  class: "choice-badge pending"
}, Au = {
  key: 3,
  class: "no-choices"
}, Fu = /* @__PURE__ */ ee({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: h, applyResolution: p, installNodes: u, queueModelDownloads: m, progress: r, resetProgress: v } = Os(), { loadPendingDownloads: g } = Ht(), { openFileLocation: w } = Fe(), b = $(null), C = $(!1), T = $(!1), O = $(null), f = $("analysis"), _ = $([]), L = $(/* @__PURE__ */ new Map()), M = $(/* @__PURE__ */ new Map()), x = $(/* @__PURE__ */ new Set()), K = U(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return (q.value || P.value) && Y.push({ id: "nodes", label: "Nodes" }), (z.value || S.value) && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), f.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    }), V = U(() => b.value ? b.value.stats.needs_user_input : !1), q = U(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), z = U(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), S = U(() => b.value ? b.value.stats.download_intents > 0 : !1), P = U(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), X = U(() => b.value ? b.value.nodes.resolved.length : 0), Q = U(() => b.value ? b.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), J = U(() => Q.value.length > 0), re = U(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.resolved.filter((A) => !A.is_installed), B = /* @__PURE__ */ new Set();
      return Y.filter((A) => B.has(A.package.package_id) ? !1 : (B.add(A.package.package_id), !0));
    }), H = U(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.resolved.filter((A) => !A.is_installed), B = /* @__PURE__ */ new Map();
      for (const A of Y) {
        const oe = B.get(A.package.package_id);
        oe ? oe.node_types_count++ : B.set(A.package.package_id, {
          package_id: A.package.package_id,
          title: A.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), D = U(() => re.value.filter((Y) => !x.value.has(Y.package.package_id))), N = U(() => b.value ? b.value.models.resolved.filter((Y) => Y.match_type === "download_intent").map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), I = U(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.unresolved.map((A) => ({
        node_type: A.reference.node_type,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.nodes.ambiguous.map((A) => ({
        node_type: A.reference.node_type,
        has_multiple_options: !0,
        options: A.options.map((oe) => ({
          package_id: oe.package.package_id,
          title: oe.package.title,
          match_confidence: oe.match_confidence,
          match_type: oe.match_type,
          is_installed: oe.is_installed
        }))
      }));
      return [...Y, ...B];
    }), le = U(() => {
      if (!b.value) return [];
      const Y = b.value.models.unresolved.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.models.ambiguous.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        has_multiple_options: !0,
        options: A.options.map((oe) => ({
          model: oe.model,
          match_confidence: oe.match_confidence,
          match_type: oe.match_type,
          has_download_source: oe.has_download_source
        }))
      }));
      return [...Y, ...B];
    }), se = U(() => {
      const Y = le.value, B = N.value.map((A) => ({
        filename: A.filename,
        reference: A.reference,
        is_download_intent: !0,
        resolved_model: A.resolved_model,
        download_source: A.download_source,
        target_path: A.target_path,
        options: void 0
      }));
      return [...Y, ...B];
    }), Ee = U(() => {
      let Y = D.value.length;
      for (const B of L.value.values())
        B.action === "install" && Y++;
      for (const B of M.value.values())
        B.action === "select" && Y++;
      return Y;
    }), ye = U(() => {
      let Y = 0;
      for (const B of M.value.values())
        B.action === "download" && Y++;
      return Y;
    }), ce = U(() => {
      let Y = 0;
      for (const B of L.value.values())
        B.action === "optional" && Y++;
      for (const B of M.value.values())
        B.action === "optional" && Y++;
      return Y;
    }), ie = U(() => {
      let Y = x.value.size;
      for (const B of L.value.values())
        B.action === "skip" && Y++;
      for (const B of M.value.values())
        B.action === "skip" && Y++;
      for (const B of I.value)
        L.value.has(B.node_type) || Y++;
      for (const B of le.value)
        M.value.has(B.filename) || Y++;
      return Y;
    }), ue = U(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, q.value) {
        const B = I.value.length, A = I.value.filter(
          (oe) => L.value.has(oe.node_type)
        ).length;
        Y.nodes = { resolved: A, total: B };
      }
      if (z.value || S.value) {
        const B = se.value.length, A = se.value.filter(
          (oe) => M.value.has(oe.filename) || oe.is_download_intent
        ).length;
        Y.models = { resolved: A, total: B };
      }
      if (Y.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const B = r.totalFiles || 1, A = r.completedFiles.length;
        Y.applying = { resolved: A, total: B };
      }
      return Y;
    });
    function fe(Y) {
      f.value = Y;
    }
    function Ae() {
      const Y = K.value.findIndex((B) => B.id === f.value);
      Y > 0 && (f.value = K.value[Y - 1].id);
    }
    function Re() {
      const Y = K.value.findIndex((B) => B.id === f.value);
      Y < K.value.length - 1 && (f.value = K.value[Y + 1].id);
    }
    async function ve() {
      C.value = !0, O.value = null;
      try {
        b.value = await h(n.workflowName);
      } catch (Y) {
        O.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function Ve() {
      _.value.includes("analysis") || _.value.push("analysis"), q.value || P.value ? f.value = "nodes" : z.value || S.value ? f.value = "models" : f.value = "review";
    }
    function Se(Y) {
      L.value.set(Y, { action: "optional" });
    }
    function ot(Y) {
      L.value.set(Y, { action: "skip" });
    }
    function dt(Y, B) {
      var oe;
      const A = I.value.find((be) => be.node_type === Y);
      (oe = A == null ? void 0 : A.options) != null && oe[B] && L.value.set(Y, {
        action: "install",
        package_id: A.options[B].package_id
      });
    }
    function vt(Y, B) {
      L.value.set(Y, {
        action: "install",
        package_id: B
      });
    }
    function xe(Y) {
      L.value.delete(Y);
    }
    function et(Y) {
      x.value.has(Y) ? x.value.delete(Y) : x.value.add(Y);
    }
    function he(Y) {
      M.value.set(Y, { action: "optional" });
    }
    function j(Y) {
      M.value.set(Y, { action: "skip" });
    }
    function Me(Y, B) {
      var oe;
      const A = le.value.find((be) => be.filename === Y);
      (oe = A == null ? void 0 : A.options) != null && oe[B] && M.value.set(Y, {
        action: "select",
        selected_model: A.options[B].model
      });
    }
    function Z(Y, B, A) {
      M.value.set(Y, {
        action: "download",
        url: B,
        target_path: A
      });
    }
    function ze(Y) {
      M.value.delete(Y);
    }
    async function We(Y) {
      try {
        await w(Y);
      } catch (B) {
        O.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function He() {
      var Y;
      T.value = !0, O.value = null, v(), r.phase = "resolving", f.value = "applying";
      try {
        const B = await p(n.workflowName, L.value, M.value, x.value);
        B.models_to_download && B.models_to_download.length > 0 && m(n.workflowName, B.models_to_download);
        const A = [
          ...B.nodes_to_install || [],
          ...D.value.map((be) => be.package.package_id)
        ];
        r.nodesToInstall = [...new Set(A)], r.nodesToInstall.length > 0 && await u(n.workflowName), r.phase = "complete", await g();
        const oe = r.installError || ((Y = r.nodeInstallProgress) == null ? void 0 : Y.completedNodes.some((be) => !be.success));
        !r.needsRestart && !oe && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (B) {
        O.value = B instanceof Error ? B.message : "Failed to apply resolution", r.error = O.value, r.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function Te() {
      i("refresh"), i("restart"), i("close");
    }
    async function ft() {
      var B;
      const Y = ((B = r.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((A) => !A.success).map((A) => A.node_id)) || [];
      if (Y.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, r.nodesToInstall = Y, r.nodesInstalled = [], r.installError = void 0;
        try {
          await u(n.workflowName), r.phase = "complete";
        } catch (A) {
          r.error = A instanceof Error ? A.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Be(ve), (Y, B) => (s(), E(Xe, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: C.value,
      error: O.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (A) => i("close"))
    }, {
      body: l(() => [
        C.value && !b.value ? (s(), o("div", vc, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", fc, [
          k(bi, {
            steps: K.value,
            "current-step": f.value,
            "completed-steps": _.value,
            "step-stats": ue.value,
            onStepChange: fe
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", gc, [
            e("div", pc, [
              e("div", hc, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", yc, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", wc, [
                e("div", kc, [
                  B[12] || (B[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", bc, [
                    X.value > 0 ? (s(), o("div", _c, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", $c, a(X.value), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", Cc, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", xc, a(b.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", Sc, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ic, a(b.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", Ec, [
                      B[10] || (B[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Mc, a(b.value.nodes.unresolved.length), 1),
                      B[11] || (B[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Tc, [
                  B[23] || (B[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Rc, [
                    e("div", zc, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Lc, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", Pc, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Dc, a(b.value.stats.download_intents), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    J.value ? (s(), o("div", Nc, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Uc, a(Q.value.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", Oc, [
                      B[19] || (B[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Bc, a(b.value.models.ambiguous.length), 1),
                      B[20] || (B[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", Ac, [
                      B[21] || (B[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fc, a(b.value.models.unresolved.length), 1),
                      B[22] || (B[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              V.value ? (s(), o("div", Vc, [
                B[24] || (B[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Wc, a(I.value.length + le.value.length) + " items need your input", 1)
              ])) : P.value ? (s(), o("div", jc, [
                B[25] || (B[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gc, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(S.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : S.value ? (s(), o("div", Hc, [
                B[26] || (B[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", qc, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : J.value ? (s(), o("div", Kc, [
                B[27] || (B[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Jc, a(Q.value.length) + " model" + a(Q.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Yc, [...B[28] || (B[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              J.value ? (s(), o("div", Xc, [
                B[31] || (B[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Qc, [
                  (s(!0), o(F, null, ne(Q.value, (A) => {
                    var oe, be;
                    return s(), o("div", {
                      key: A.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Zc, a(A.actual_category) + "/" + a((oe = A.model) == null ? void 0 : oe.filename), 1),
                      B[30] || (B[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", eu, a((be = A.expected_categories) == null ? void 0 : be[0]) + "/", 1),
                      A.file_path ? (s(), E(ge, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Qe) => We(A.file_path)
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
          f.value === "nodes" ? (s(), E(Vr, {
            key: 1,
            nodes: I.value,
            "node-choices": L.value,
            "auto-resolved-packages": H.value,
            "skipped-packages": x.value,
            onMarkOptional: Se,
            onSkip: ot,
            onOptionSelected: dt,
            onManualEntry: vt,
            onClearChoice: xe,
            onPackageSkip: et
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          f.value === "models" ? (s(), E(Dd, {
            key: 2,
            models: se.value,
            "model-choices": M.value,
            onMarkOptional: he,
            onSkip: j,
            onOptionSelected: Me,
            onDownloadUrl: Z,
            onClearChoice: ze
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          f.value === "review" ? (s(), o("div", tu, [
            e("div", su, [
              B[36] || (B[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", ou, [
                e("div", nu, [
                  e("span", au, a(Ee.value), 1),
                  B[32] || (B[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", lu, [
                  e("span", iu, a(ye.value), 1),
                  B[33] || (B[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", ru, [
                  e("span", du, a(ce.value), 1),
                  B[34] || (B[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", cu, [
                  e("span", uu, a(ie.value), 1),
                  B[35] || (B[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              H.value.length > 0 ? (s(), o("div", mu, [
                e("h4", vu, "Node Packages (" + a(H.value.length) + ")", 1),
                e("div", fu, [
                  (s(!0), o(F, null, ne(H.value, (A) => (s(), o("div", {
                    key: A.package_id,
                    class: "review-item"
                  }, [
                    e("code", gu, a(A.package_id), 1),
                    e("div", pu, [
                      x.value.has(A.package_id) ? (s(), o("span", yu, "Skipped")) : (s(), o("span", hu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              I.value.length > 0 ? (s(), o("div", wu, [
                e("h4", ku, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", bu, [
                  (s(!0), o(F, null, ne(I.value, (A) => {
                    var oe, be, Qe, gt;
                    return s(), o("div", {
                      key: A.node_type,
                      class: "review-item"
                    }, [
                      e("code", _u, a(A.node_type), 1),
                      e("div", $u, [
                        L.value.has(A.node_type) ? (s(), o(F, { key: 0 }, [
                          ((oe = L.value.get(A.node_type)) == null ? void 0 : oe.action) === "install" ? (s(), o("span", Cu, a((be = L.value.get(A.node_type)) == null ? void 0 : be.package_id), 1)) : ((Qe = L.value.get(A.node_type)) == null ? void 0 : Qe.action) === "optional" ? (s(), o("span", xu, " Optional ")) : ((gt = L.value.get(A.node_type)) == null ? void 0 : gt.action) === "skip" ? (s(), o("span", Su, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", Iu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              se.value.length > 0 ? (s(), o("div", Eu, [
                e("h4", Mu, "Models (" + a(se.value.length) + ")", 1),
                e("div", Tu, [
                  (s(!0), o(F, null, ne(se.value, (A) => {
                    var oe, be, Qe, gt, Ct, nt, xt;
                    return s(), o("div", {
                      key: A.filename,
                      class: "review-item"
                    }, [
                      e("code", Ru, a(A.filename), 1),
                      e("div", zu, [
                        M.value.has(A.filename) ? (s(), o(F, { key: 0 }, [
                          ((oe = M.value.get(A.filename)) == null ? void 0 : oe.action) === "select" ? (s(), o("span", Lu, a((Qe = (be = M.value.get(A.filename)) == null ? void 0 : be.selected_model) == null ? void 0 : Qe.filename), 1)) : ((gt = M.value.get(A.filename)) == null ? void 0 : gt.action) === "download" ? (s(), o("span", Pu, " Download ")) : ((Ct = M.value.get(A.filename)) == null ? void 0 : Ct.action) === "optional" ? (s(), o("span", Du, " Optional ")) : ((nt = M.value.get(A.filename)) == null ? void 0 : nt.action) === "skip" ? (s(), o("span", Nu, " Skip ")) : ((xt = M.value.get(A.filename)) == null ? void 0 : xt.action) === "cancel_download" ? (s(), o("span", Uu, " Cancel Download ")) : d("", !0)
                        ], 64)) : A.is_download_intent ? (s(), o("span", Ou, " Pending Download ")) : (s(), o("span", Bu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              re.value.length === 0 && I.value.length === 0 && se.value.length === 0 ? (s(), o("div", Au, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          f.value === "applying" ? (s(), E(mc, {
            key: 4,
            progress: _e(r),
            onRestart: Te,
            onRetryFailed: ft
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), E(ge, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: Ae
        }, {
          default: l(() => [...B[37] || (B[37] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        B[41] || (B[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || _e(r).phase === "complete" || _e(r).phase === "error" ? (s(), E(ge, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (A) => i("close"))
        }, {
          default: l(() => [
            y(a(_e(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "analysis" ? (s(), E(ge, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: Ve
        }, {
          default: l(() => [...B[38] || (B[38] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        f.value === "nodes" ? (s(), E(ge, {
          key: 3,
          variant: "primary",
          onClick: Re
        }, {
          default: l(() => [
            y(a(z.value || S.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "models" ? (s(), E(ge, {
          key: 4,
          variant: "primary",
          onClick: Re
        }, {
          default: l(() => [...B[39] || (B[39] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        f.value === "review" ? (s(), E(ge, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: He
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
}), Vu = /* @__PURE__ */ te(Fu, [["__scopeId", "data-v-6276cf1d"]]), Wu = { class: "search-input-wrapper" }, ju = ["value", "placeholder"], Gu = /* @__PURE__ */ ee({
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
    const n = t, i = c, h = $(null);
    let p;
    function u(r) {
      const v = r.target.value;
      n.debounce > 0 ? (clearTimeout(p), p = window.setTimeout(() => {
        i("update:modelValue", v);
      }, n.debounce)) : i("update:modelValue", v);
    }
    function m() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = h.value) == null || r.focus();
    }
    return Be(() => {
      n.autoFocus && h.value && h.value.focus();
    }), (r, v) => (s(), o("div", Wu, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: ht(m, ["escape"])
      }, null, 40, ju),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Hu = /* @__PURE__ */ te(Gu, [["__scopeId", "data-v-266f857a"]]), qu = { class: "search-bar" }, Ku = /* @__PURE__ */ ee({
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
      k(Hu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Pt = /* @__PURE__ */ te(Ku, [["__scopeId", "data-v-3d51bbfd"]]), Ju = { class: "section-group" }, Yu = {
  key: 0,
  class: "section-content"
}, Xu = /* @__PURE__ */ ee({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = $(n.initiallyExpanded);
    function p() {
      n.collapsible && (h.value = !h.value, i("toggle", h.value));
    }
    return (u, m) => (s(), o("section", Ju, [
      k(st, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: p
      }, {
        default: l(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (s(), o("div", Yu, [
        $e(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ te(Xu, [["__scopeId", "data-v-c48e33ed"]]), Qu = { class: "item-header" }, Zu = {
  key: 0,
  class: "item-icon"
}, em = { class: "item-info" }, tm = {
  key: 0,
  class: "item-title"
}, sm = {
  key: 1,
  class: "item-subtitle"
}, om = {
  key: 0,
  class: "item-details"
}, nm = {
  key: 1,
  class: "item-actions"
}, am = /* @__PURE__ */ ee({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = U(() => n.status ? `status-${n.status}` : "");
    return (h, p) => (s(), o("div", {
      class: de(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: p[0] || (p[0] = (u) => t.clickable && h.$emit("click"))
    }, [
      e("div", Qu, [
        h.$slots.icon ? (s(), o("span", Zu, [
          $e(h.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", em, [
          h.$slots.title ? (s(), o("div", tm, [
            $e(h.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          h.$slots.subtitle ? (s(), o("div", sm, [
            $e(h.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      h.$slots.details ? (s(), o("div", om, [
        $e(h.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      h.$slots.actions ? (s(), o("div", nm, [
        $e(h.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ te(am, [["__scopeId", "data-v-cc435e0e"]]), lm = { class: "loading-state" }, im = { class: "loading-message" }, rm = /* @__PURE__ */ ee({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", lm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", im, a(t.message), 1)
    ]));
  }
}), wt = /* @__PURE__ */ te(rm, [["__scopeId", "data-v-ad8436c9"]]), dm = { class: "error-state" }, cm = { class: "error-message" }, um = /* @__PURE__ */ ee({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", dm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", cm, a(t.message), 1),
      t.retry ? (s(), E(ae, {
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
}), kt = /* @__PURE__ */ te(um, [["__scopeId", "data-v-5397be48"]]), mm = /* @__PURE__ */ ee({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: h } = Fe();
    Ns();
    const p = $([]), u = $(!1), m = $(null), r = $(""), v = $(!0), g = $(!1), w = $(!1), b = $(!1), C = $(null), T = U(
      () => p.value.filter((D) => D.status === "broken")
    ), O = U(
      () => p.value.filter((D) => D.status === "new")
    ), f = U(
      () => p.value.filter((D) => D.status === "modified")
    ), _ = U(
      () => p.value.filter((D) => D.status === "synced")
    ), L = U(() => {
      if (!r.value.trim()) return p.value;
      const D = r.value.toLowerCase();
      return p.value.filter((N) => N.name.toLowerCase().includes(D));
    }), M = U(
      () => T.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = U(
      () => O.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), K = U(
      () => f.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), V = U(
      () => _.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), q = U(
      () => g.value ? V.value : V.value.slice(0, 5)
    );
    async function z(D = !1) {
      u.value = !0, m.value = null;
      try {
        p.value = await h(D);
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: z });
    function S(D) {
      C.value = D, w.value = !0;
    }
    function P(D) {
      C.value = D, b.value = !0;
    }
    function X() {
      i("refresh");
    }
    async function Q() {
      b.value = !1, await z(!0);
    }
    async function J() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(D) {
      const N = [];
      return D.missing_nodes > 0 && N.push(`${D.missing_nodes} missing node${D.missing_nodes > 1 ? "s" : ""}`), D.missing_models > 0 && N.push(`${D.missing_models} missing model${D.missing_models > 1 ? "s" : ""}`), D.models_with_category_mismatch && D.models_with_category_mismatch > 0 && N.push(`${D.models_with_category_mismatch} model${D.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), D.pending_downloads && D.pending_downloads > 0 && N.push(`${D.pending_downloads} pending download${D.pending_downloads > 1 ? "s" : ""}`), N.length > 0 ? N.join(", ") : "Has issues";
    }
    function H(D) {
      const N = D.sync_state === "new" ? "New" : D.sync_state === "modified" ? "Modified" : D.sync_state === "synced" ? "Synced" : D.sync_state;
      return D.has_path_sync_issues && D.models_needing_path_sync && D.models_needing_path_sync > 0 ? `${D.models_needing_path_sync} model path${D.models_needing_path_sync > 1 ? "s" : ""} need${D.models_needing_path_sync === 1 ? "s" : ""} sync` : N || "Unknown";
    }
    return Be(z), (D, N) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          k(Pt, {
            modelValue: r.value,
            "onUpdate:modelValue": N[0] || (N[0] = (I) => r.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), E(wt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), E(kt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            M.value.length ? (s(), E(Oe, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(M.value, (I) => (s(), E(Ke, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: l(() => [...N[7] || (N[7] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(re(I)), 1)
                  ]),
                  actions: l(() => [
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => P(I.name)
                    }, {
                      default: l(() => [...N[8] || (N[8] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => S(I.name)
                    }, {
                      default: l(() => [...N[9] || (N[9] = [
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
            x.value.length ? (s(), E(Oe, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(x.value, (I) => (s(), E(Ke, {
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
                    y(a(H(I)), 1)
                  ]),
                  actions: l(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => S(I.name)
                    }, {
                      default: l(() => [...N[10] || (N[10] = [
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
            K.value.length ? (s(), E(Oe, {
              key: 2,
              title: "MODIFIED",
              count: K.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(K.value, (I) => (s(), E(Ke, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...N[11] || (N[11] = [
                    y("⚡", -1)
                  ])]),
                  title: l(() => [
                    y(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(H(I)), 1)
                  ]),
                  actions: l(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => S(I.name)
                    }, {
                      default: l(() => [...N[12] || (N[12] = [
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
            V.value.length ? (s(), E(Oe, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: N[2] || (N[2] = (I) => v.value = I)
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(q.value, (I) => (s(), E(Ke, {
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
                    y(a(H(I)), 1)
                  ]),
                  actions: l(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => S(I.name)
                    }, {
                      default: l(() => [...N[13] || (N[13] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !g.value && V.value.length > 5 ? (s(), E(ae, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (I) => g.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    y(" View all " + a(V.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            L.value.length ? d("", !0) : (s(), E(rt, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w.value && C.value ? (s(), E(di, {
        key: 0,
        "workflow-name": C.value,
        onClose: N[3] || (N[3] = (I) => w.value = !1),
        onResolve: N[4] || (N[4] = (I) => P(C.value)),
        onRefresh: N[5] || (N[5] = (I) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && C.value ? (s(), E(Vu, {
        key: 1,
        "workflow-name": C.value,
        onClose: Q,
        onInstall: X,
        onRefresh: N[6] || (N[6] = (I) => i("refresh")),
        onRestart: J
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), vm = /* @__PURE__ */ te(mm, [["__scopeId", "data-v-fa3f076e"]]), fm = /* @__PURE__ */ ee({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: de(["summary-bar", t.variant])
    }, [
      $e(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ te(fm, [["__scopeId", "data-v-ccb7816e"]]), gm = {
  key: 0,
  class: "model-details"
}, pm = { class: "detail-section" }, hm = { class: "detail-row" }, ym = { class: "detail-value mono" }, wm = { class: "detail-row" }, km = { class: "detail-value mono" }, bm = { class: "detail-row" }, _m = { class: "detail-value mono" }, $m = { class: "detail-row" }, Cm = { class: "detail-value" }, xm = { class: "detail-row" }, Sm = { class: "detail-value" }, Im = { class: "detail-row" }, Em = { class: "detail-value" }, Mm = { class: "detail-section" }, Tm = { class: "section-header" }, Rm = {
  key: 0,
  class: "locations-list"
}, zm = { class: "location-path mono" }, Lm = {
  key: 0,
  class: "location-modified"
}, Pm = ["onClick"], Dm = {
  key: 1,
  class: "empty-state"
}, Nm = { class: "detail-section" }, Um = { class: "section-header" }, Om = {
  key: 0,
  class: "sources-list"
}, Bm = { class: "source-type" }, Am = ["href"], Fm = ["disabled", "onClick"], Vm = {
  key: 1,
  class: "empty-state"
}, Wm = { class: "add-source-form" }, jm = ["disabled"], Gm = {
  key: 2,
  class: "source-error"
}, Hm = {
  key: 3,
  class: "source-success"
}, qm = /* @__PURE__ */ ee({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: h, removeModelSource: p, openFileLocation: u } = Fe(), m = $(null), r = $(!0), v = $(null), g = $(""), w = $(!1), b = $(null), C = $(null), T = $(null), O = $(null);
    let f = null;
    function _(z, S = "success", P = 2e3) {
      f && clearTimeout(f), O.value = { message: z, type: S }, f = setTimeout(() => {
        O.value = null;
      }, P);
    }
    function L(z) {
      if (!z) return "Unknown";
      const S = 1024 * 1024 * 1024, P = 1024 * 1024;
      return z >= S ? `${(z / S).toFixed(1)} GB` : z >= P ? `${(z / P).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function M(z) {
      navigator.clipboard.writeText(z), _("Copied to clipboard!");
    }
    async function x(z) {
      try {
        await u(z), _("Opening file location...");
      } catch {
        _("Failed to open location", "error");
      }
    }
    async function K() {
      if (!(!g.value.trim() || !m.value)) {
        w.value = !0, C.value = null, T.value = null;
        try {
          await h(m.value.hash, g.value.trim()), T.value = "Source added successfully!", g.value = "", await q();
        } catch (z) {
          C.value = z instanceof Error ? z.message : "Failed to add source";
        } finally {
          w.value = !1;
        }
      }
    }
    async function V(z) {
      if (m.value) {
        b.value = z, C.value = null, T.value = null;
        try {
          await p(m.value.hash, z), _("Source removed"), await q();
        } catch (S) {
          C.value = S instanceof Error ? S.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function q() {
      r.value = !0, v.value = null;
      try {
        m.value = await i(n.identifier);
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Be(q), (z, S) => {
      var P;
      return s(), o(F, null, [
        k(Xe, {
          title: `Model Details: ${((P = m.value) == null ? void 0 : P.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: v.value,
          onClose: S[5] || (S[5] = (X) => z.$emit("close"))
        }, {
          body: l(() => {
            var X, Q, J, re;
            return [
              m.value ? (s(), o("div", gm, [
                e("section", pm, [
                  e("div", hm, [
                    S[6] || (S[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", ym, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[0] || (S[0] = (H) => M(m.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", wm, [
                    S[7] || (S[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", km, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[1] || (S[1] = (H) => M(m.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", bm, [
                    S[8] || (S[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", _m, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[2] || (S[2] = (H) => M(m.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", $m, [
                    S[9] || (S[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Cm, a(L(m.value.size)), 1)
                  ]),
                  e("div", xm, [
                    S[10] || (S[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Sm, a(m.value.category), 1)
                  ]),
                  e("div", Im, [
                    S[11] || (S[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Em, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Mm, [
                  e("h4", Tm, "Locations (" + a(((X = m.value.locations) == null ? void 0 : X.length) || 0) + ")", 1),
                  (Q = m.value.locations) != null && Q.length ? (s(), o("div", Rm, [
                    (s(!0), o(F, null, ne(m.value.locations, (H, D) => (s(), o("div", {
                      key: D,
                      class: "location-item"
                    }, [
                      e("span", zm, a(H.path), 1),
                      H.modified ? (s(), o("span", Lm, "Modified: " + a(H.modified), 1)) : d("", !0),
                      H.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (N) => x(H.path)
                      }, " Open File Location ", 8, Pm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Dm, "No locations found"))
                ]),
                e("section", Nm, [
                  e("h4", Um, "Download Sources (" + a(((J = m.value.sources) == null ? void 0 : J.length) || 0) + ")", 1),
                  (re = m.value.sources) != null && re.length ? (s(), o("div", Om, [
                    (s(!0), o(F, null, ne(m.value.sources, (H, D) => (s(), o("div", {
                      key: D,
                      class: "source-item"
                    }, [
                      e("span", Bm, a(H.type) + ":", 1),
                      e("a", {
                        href: H.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(H.url), 9, Am),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === H.url,
                        onClick: (N) => V(H.url)
                      }, a(b.value === H.url ? "..." : "×"), 9, Fm)
                    ]))), 128))
                  ])) : (s(), o("div", Vm, " No download sources configured ")),
                  e("div", Wm, [
                    Ue(e("input", {
                      "onUpdate:modelValue": S[3] || (S[3] = (H) => g.value = H),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Rt, g.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !g.value.trim() || w.value,
                      onClick: K
                    }, a(w.value ? "Adding..." : "Add Source"), 9, jm)
                  ]),
                  C.value ? (s(), o("p", Gm, a(C.value), 1)) : d("", !0),
                  T.value ? (s(), o("p", Hm, a(T.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: S[4] || (S[4] = (X) => z.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(je, { to: "body" }, [
          O.value ? (s(), o("div", {
            key: 0,
            class: de(["toast", O.value.type])
          }, a(O.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), fs = /* @__PURE__ */ te(qm, [["__scopeId", "data-v-f15cbb56"]]), Km = /* @__PURE__ */ ee({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: h } = Fe(), p = $([]), u = $([]), m = $("production"), r = $(!1), v = $(null), g = $(""), w = $(!1), b = $(null);
    function C() {
      w.value = !1, n("navigate", "model-index");
    }
    const T = U(
      () => p.value.reduce((q, z) => q + (z.size || 0), 0)
    ), O = U(() => {
      if (!g.value.trim()) return p.value;
      const q = g.value.toLowerCase();
      return p.value.filter((z) => z.filename.toLowerCase().includes(q));
    }), f = U(() => {
      if (!g.value.trim()) return u.value;
      const q = g.value.toLowerCase();
      return u.value.filter((z) => z.filename.toLowerCase().includes(q));
    }), _ = U(() => {
      const q = {};
      for (const S of O.value) {
        const P = S.type || "other";
        q[P] || (q[P] = []), q[P].push(S);
      }
      const z = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(q).sort(([S], [P]) => {
        const X = z.indexOf(S), Q = z.indexOf(P);
        return X >= 0 && Q >= 0 ? X - Q : X >= 0 ? -1 : Q >= 0 ? 1 : S.localeCompare(P);
      }).map(([S, P]) => ({ type: S, models: P }));
    });
    function L(q) {
      if (!q) return "Unknown";
      const z = q / (1024 * 1024);
      return z >= 1024 ? `${(z / 1024).toFixed(1)} GB` : `${z.toFixed(0)} MB`;
    }
    function M(q) {
      b.value = q.hash || q.filename;
    }
    function x(q) {
      n("navigate", "model-index");
    }
    function K(q) {
      alert(`Download functionality not yet implemented for ${q}`);
    }
    async function V() {
      r.value = !0, v.value = null;
      try {
        const q = await i();
        p.value = q, u.value = [];
        const z = await h();
        m.value = z.environment || "production";
      } catch (q) {
        v.value = q instanceof Error ? q.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Be(V), (q, z) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (S) => w.value = !0)
          })
        ]),
        search: l(() => [
          k(Pt, {
            modelValue: g.value,
            "onUpdate:modelValue": z[1] || (z[1] = (S) => g.value = S),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), E(wt, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), E(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            p.value.length ? (s(), E(qt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(p.value.length) + " models • " + a(L(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(F, null, ne(_.value, (S) => (s(), E(Oe, {
              key: S.type,
              title: S.type.toUpperCase(),
              count: S.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(S.models, (P) => (s(), E(Ke, {
                  key: P.hash || P.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...z[4] || (z[4] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(P.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(L(P.size)), 1)
                  ]),
                  details: l(() => [
                    k(Ne, {
                      label: "Used by:",
                      value: (P.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(Ne, {
                      label: "Path:",
                      value: P.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => M(P)
                    }, {
                      default: l(() => [...z[5] || (z[5] = [
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
            f.value.length ? (s(), E(Oe, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(f.value, (S) => (s(), E(Ke, {
                  key: S.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...z[6] || (z[6] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(S.filename), 1)
                  ]),
                  subtitle: l(() => [...z[7] || (z[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var P;
                    return [
                      k(Ne, {
                        label: "Required by:",
                        value: ((P = S.workflow_names) == null ? void 0 : P.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => K(S.filename)
                    }, {
                      default: l(() => [...z[8] || (z[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => x(S.filename)
                    }, {
                      default: l(() => [...z[9] || (z[9] = [
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
            !O.value.length && !f.value.length ? (s(), E(rt, {
              key: 2,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(mt, {
        show: w.value,
        title: "About Environment Models",
        onClose: z[2] || (z[2] = (S) => w.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            z[10] || (z[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            z[11] || (z[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          k(ae, {
            variant: "primary",
            onClick: C
          }, {
            default: l(() => [...z[12] || (z[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), E(fs, {
        key: 0,
        identifier: b.value,
        onClose: z[3] || (z[3] = (S) => b.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Jm = /* @__PURE__ */ te(Km, [["__scopeId", "data-v-cb4f12b3"]]), Ym = {
  key: 0,
  class: "indexing-progress"
}, Xm = { class: "progress-info" }, Qm = { class: "progress-label" }, Zm = { class: "progress-count" }, ev = { class: "progress-bar" }, tv = { class: "modal-content" }, sv = { class: "modal-header" }, ov = { class: "modal-body" }, nv = { class: "input-group" }, av = { class: "current-path" }, lv = { class: "input-group" }, iv = { class: "modal-footer" }, rv = { class: "modal-content" }, dv = { class: "modal-header" }, cv = { class: "modal-body" }, uv = { class: "input-group" }, mv = { class: "input-group" }, vv = { class: "modal-footer" }, fv = /* @__PURE__ */ ee({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: h,
      setModelsDirectory: p
    } = Fe(), { addToQueue: u } = Ht(), m = c, r = $([]), v = $(!1), g = $(!1), w = $(null), b = $(""), C = $(!1), T = $(null), O = $(!1), f = $(null), _ = $(""), L = $(!1), M = $(!1), x = $(""), K = $(""), V = $(null), q = U(
      () => r.value.reduce((N, I) => N + (I.size || 0), 0)
    ), z = U(() => {
      if (!b.value.trim()) return r.value;
      const N = b.value.toLowerCase();
      return r.value.filter((I) => {
        const le = I, se = I.sha256 || le.sha256_hash || "";
        return I.filename.toLowerCase().includes(N) || se.toLowerCase().includes(N);
      });
    }), S = U(() => {
      const N = {};
      for (const le of z.value) {
        const se = le.type || "other";
        N[se] || (N[se] = []), N[se].push(le);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([le], [se]) => {
        const Ee = I.indexOf(le), ye = I.indexOf(se);
        return Ee >= 0 && ye >= 0 ? Ee - ye : Ee >= 0 ? -1 : ye >= 0 ? 1 : le.localeCompare(se);
      }).map(([le, se]) => ({ type: le, models: se }));
    });
    function P(N) {
      if (!N) return "Unknown";
      const I = 1024 * 1024 * 1024, le = 1024 * 1024;
      return N >= I ? `${(N / I).toFixed(1)} GB` : N >= le ? `${(N / le).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function X(N) {
      T.value = N.hash || N.filename;
    }
    async function Q() {
      g.value = !0, w.value = null;
      try {
        const N = await i();
        await H(), N.changes > 0 && console.log(`Scan complete: ${N.changes} changes detected`);
      } catch (N) {
        w.value = N instanceof Error ? N.message : "Failed to scan models";
      } finally {
        g.value = !1;
      }
    }
    async function J() {
      if (_.value.trim()) {
        L.value = !0, w.value = null;
        try {
          const N = await p(_.value.trim());
          f.value = N.path, O.value = !1, _.value = "", await H(), console.log(`Directory changed: ${N.models_indexed} models indexed`), m("refresh");
        } catch (N) {
          w.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          L.value = !1;
        }
      }
    }
    function re() {
      if (!x.value.trim() || !K.value.trim()) return;
      const N = K.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: N,
        url: x.value.trim(),
        targetPath: K.value.trim()
      }]), x.value = "", K.value = "", M.value = !1;
    }
    async function H() {
      v.value = !0, w.value = null;
      try {
        r.value = await n();
      } catch (N) {
        w.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function D() {
      try {
        const N = await h();
        f.value = N.path;
      } catch {
      }
    }
    return Be(() => {
      H(), D();
    }), (N, I) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (le) => C.value = !0)
          }, {
            actions: l(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                disabled: g.value,
                onClick: Q
              }, {
                default: l(() => [
                  y(a(g.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (le) => O.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (le) => M.value = !0)
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
          V.value ? (s(), o("div", Ym, [
            e("div", Xm, [
              e("span", Qm, a(V.value.message), 1),
              e("span", Zm, a(V.value.current) + "/" + a(V.value.total), 1)
            ]),
            e("div", ev, [
              e("div", {
                class: "progress-fill",
                style: yt({ width: `${V.value.current / V.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          k(Pt, {
            modelValue: b.value,
            "onUpdate:modelValue": I[3] || (I[3] = (le) => b.value = le),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || V.value ? (s(), E(wt, {
            key: 0,
            message: V.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : w.value ? (s(), E(kt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            r.value.length ? (s(), E(qt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(r.value.length) + " models • " + a(P(q.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(F, null, ne(S.value, (le) => (s(), E(Oe, {
              key: le.type,
              title: le.type.toUpperCase(),
              count: le.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(le.models, (se) => (s(), E(Ke, {
                  key: se.sha256 || se.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(se.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(P(se.size)), 1)
                  ]),
                  details: l(() => [
                    k(Ne, {
                      label: "Hash:",
                      value: se.hash ? se.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ee) => X(se)
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
            z.value.length ? d("", !0) : (s(), E(rt, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(mt, {
        show: C.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (le) => C.value = !1)
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
      T.value ? (s(), E(fs, {
        key: 0,
        identifier: T.value,
        onClose: I[5] || (I[5] = (le) => T.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), E(je, { to: "body" }, [
        O.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Le((le) => O.value = !1, ["self"]))
        }, [
          e("div", tv, [
            e("div", sv, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (le) => O.value = !1)
              }, "✕")
            ]),
            e("div", ov, [
              e("div", nv, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", av, a(f.value || "Not set"), 1)
              ]),
              e("div", lv, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                k(it, {
                  modelValue: _.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (le) => _.value = le),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", iv, [
              k(ge, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (le) => O.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ge, {
                variant: "primary",
                disabled: !_.value.trim() || L.value,
                loading: L.value,
                onClick: J
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
      (s(), E(je, { to: "body" }, [
        M.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Le((le) => M.value = !1, ["self"]))
        }, [
          e("div", rv, [
            e("div", dv, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (le) => M.value = !1)
              }, "✕")
            ]),
            e("div", cv, [
              e("div", uv, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                k(it, {
                  modelValue: x.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (le) => x.value = le),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", mv, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(it, {
                  modelValue: K.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (le) => K.value = le),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", vv, [
              k(ge, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (le) => M.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ge, {
                variant: "primary",
                disabled: !x.value.trim() || !K.value.trim(),
                onClick: re
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
}), gv = /* @__PURE__ */ te(fv, [["__scopeId", "data-v-73b78d84"]]), pv = { class: "node-details" }, hv = { class: "status-row" }, yv = {
  key: 0,
  class: "detail-row"
}, wv = { class: "value" }, kv = { class: "detail-row" }, bv = { class: "value" }, _v = {
  key: 1,
  class: "detail-row"
}, $v = { class: "value mono" }, Cv = {
  key: 2,
  class: "detail-row"
}, xv = ["href"], Sv = {
  key: 3,
  class: "detail-row"
}, Iv = { class: "value mono small" }, Ev = { class: "detail-row" }, Mv = {
  key: 0,
  class: "value"
}, Tv = {
  key: 1,
  class: "workflow-list"
}, Rv = /* @__PURE__ */ ee({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), p = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, r) => (s(), E(Xe, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (v) => i("close"))
    }, {
      body: l(() => [
        e("div", pv, [
          e("div", hv, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: de(["status-badge", h.value])
            }, a(p.value), 3)
          ]),
          t.node.version ? (s(), o("div", yv, [
            r[3] || (r[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", wv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", kv, [
            r[4] || (r[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", bv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", _v, [
            r[5] || (r[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", $v, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", Cv, [
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
            ], 8, xv)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", Sv, [
            r[8] || (r[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Iv, a(t.node.download_url), 1)
          ])) : d("", !0),
          r[10] || (r[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Ev, [
            r[9] || (r[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Mv, " Not used in any workflows ")) : (s(), o("div", Tv, [
              (s(!0), o(F, null, ne(t.node.used_in_workflows, (v) => (s(), o("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        k(ge, {
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
}), zv = /* @__PURE__ */ te(Rv, [["__scopeId", "data-v-b342f626"]]), Lv = { class: "dialog-message" }, Pv = {
  key: 0,
  class: "dialog-details"
}, Dv = {
  key: 1,
  class: "dialog-warning"
}, Nv = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), E(Xe, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Lv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Pv, [
          (s(!0), o(F, null, ne(t.details, (i, h) => (s(), o("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", Dv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        k(ge, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), E(ge, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        k(ge, {
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
}), As = /* @__PURE__ */ te(Nv, [["__scopeId", "data-v-3670b9f5"]]), Uv = { class: "mismatch-warning" }, Ov = { class: "version-mismatch" }, Bv = { class: "version-actual" }, Av = { class: "version-expected" }, Fv = { key: 0 }, Vv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Wv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, jv = /* @__PURE__ */ ee({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: h, trackNodeAsDev: p, installNode: u, uninstallNode: m } = Fe(), r = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), v = $(!1), g = $(null), w = $(""), b = $(!1), C = $(null), T = $(null), O = U(() => {
      if (!w.value.trim()) return r.value.nodes;
      const Q = w.value.toLowerCase();
      return r.value.nodes.filter(
        (J) => {
          var re, H;
          return J.name.toLowerCase().includes(Q) || ((re = J.description) == null ? void 0 : re.toLowerCase().includes(Q)) || ((H = J.repository) == null ? void 0 : H.toLowerCase().includes(Q));
        }
      );
    }), f = U(
      () => O.value.filter((Q) => Q.installed && Q.tracked)
    ), _ = U(
      () => O.value.filter((Q) => !Q.installed && Q.tracked)
    ), L = U(
      () => O.value.filter((Q) => Q.installed && !Q.tracked)
    );
    function M(Q) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Q] || Q;
    }
    const x = U(() => n.versionMismatches.length > 0);
    function K(Q) {
      return !Q.used_in_workflows || Q.used_in_workflows.length === 0 ? "Not used in any workflows" : Q.used_in_workflows.length === 1 ? Q.used_in_workflows[0] : `${Q.used_in_workflows.length} workflows`;
    }
    function V(Q) {
      C.value = Q;
    }
    function q() {
      i("open-node-manager");
    }
    function z(Q) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${Q}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            v.value = !0;
            const J = await p(Q);
            J.status === "success" ? (i("toast", `✓ Node "${Q}" tracked as development`, "success"), await X()) : i("toast", `Failed to track node: ${J.message || "Unknown error"}`, "error");
          } catch (J) {
            i("toast", `Error tracking node: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function S(Q) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${Q}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            v.value = !0;
            const J = await m(Q);
            J.status === "success" ? (i("toast", `✓ Node "${Q}" removed`, "success"), await X()) : i("toast", `Failed to remove node: ${J.message || "Unknown error"}`, "error");
          } catch (J) {
            i("toast", `Error removing node: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function P(Q) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${Q}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            v.value = !0;
            const J = await u(Q);
            J.status === "success" ? (i("toast", `✓ Node "${Q}" installed`, "success"), await X()) : i("toast", `Failed to install node: ${J.message || "Unknown error"}`, "error");
          } catch (J) {
            i("toast", `Error installing node: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function X() {
      v.value = !0, g.value = null;
      try {
        r.value = await h();
      } catch (Q) {
        g.value = Q instanceof Error ? Q.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return Be(X), (Q, J) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: J[0] || (J[0] = (re) => b.value = !0)
          }, {
            actions: l(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: q
              }, {
                default: l(() => [...J[7] || (J[7] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(Pt, {
            modelValue: w.value,
            "onUpdate:modelValue": J[1] || (J[1] = (re) => w.value = re),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), E(wt, {
            key: 0,
            message: "Loading nodes..."
          })) : g.value ? (s(), E(kt, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            r.value.total_count ? (s(), E(qt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(a(r.value.installed_count) + " installed ", 1),
                r.value.missing_count ? (s(), o(F, { key: 0 }, [
                  y(" • " + a(r.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                r.value.untracked_count ? (s(), o(F, { key: 1 }, [
                  y(" • " + a(r.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            x.value ? (s(), E(Oe, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Uv, [
                  J[8] || (J[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(F, null, ne(t.versionMismatches, (re) => (s(), E(Ke, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: l(() => [...J[9] || (J[9] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(re.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Ov, [
                      e("span", Bv, a(re.actual), 1),
                      J[10] || (J[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Av, a(re.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    k(ae, {
                      variant: "warning",
                      size: "sm",
                      onClick: J[2] || (J[2] = (H) => i("repair-environment"))
                    }, {
                      default: l(() => [...J[11] || (J[11] = [
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
            L.value.length ? (s(), E(Oe, {
              key: 2,
              title: "UNTRACKED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(L.value, (re) => (s(), E(Ke, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: l(() => [...J[12] || (J[12] = [
                    y("?", -1)
                  ])]),
                  title: l(() => [
                    y(a(re.name), 1)
                  ]),
                  subtitle: l(() => [...J[13] || (J[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    k(Ne, {
                      label: "Used by:",
                      value: K(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => V(re)
                    }, {
                      default: l(() => [...J[14] || (J[14] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => z(re.name)
                    }, {
                      default: l(() => [...J[15] || (J[15] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (H) => S(re.name)
                    }, {
                      default: l(() => [...J[16] || (J[16] = [
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
            f.value.length ? (s(), E(Oe, {
              key: 3,
              title: "INSTALLED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(f.value, (re) => (s(), E(Ke, {
                  key: re.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    y(a(re.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    y(a(re.name), 1)
                  ]),
                  subtitle: l(() => [
                    re.version ? (s(), o("span", Fv, a(re.source === "development" ? "" : "v") + a(re.version), 1)) : (s(), o("span", Vv, "version unknown")),
                    e("span", Wv, " • " + a(M(re.source)), 1)
                  ]),
                  details: l(() => [
                    k(Ne, {
                      label: "Used by:",
                      value: K(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => V(re)
                    }, {
                      default: l(() => [...J[17] || (J[17] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: q
                    }, {
                      default: l(() => [...J[18] || (J[18] = [
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
            _.value.length ? (s(), E(Oe, {
              key: 4,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(_.value, (re) => (s(), E(Ke, {
                  key: re.name,
                  status: "missing"
                }, {
                  icon: l(() => [...J[19] || (J[19] = [
                    y("!", -1)
                  ])]),
                  title: l(() => [
                    y(a(re.name), 1)
                  ]),
                  subtitle: l(() => [...J[20] || (J[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    k(Ne, {
                      label: "Required by:",
                      value: K(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => V(re)
                    }, {
                      default: l(() => [...J[21] || (J[21] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => P(re.name)
                    }, {
                      default: l(() => [...J[22] || (J[22] = [
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
            !f.value.length && !_.value.length && !L.value.length ? (s(), E(rt, {
              key: 5,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(mt, {
        show: b.value,
        title: "About Custom Nodes",
        onClose: J[4] || (J[4] = (re) => b.value = !1)
      }, {
        content: l(() => [...J[23] || (J[23] = [
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
          k(ae, {
            variant: "primary",
            onClick: J[3] || (J[3] = (re) => b.value = !1)
          }, {
            default: l(() => [...J[24] || (J[24] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C.value ? (s(), E(zv, {
        key: 0,
        node: C.value,
        onClose: J[5] || (J[5] = (re) => C.value = null)
      }, null, 8, ["node"])) : d("", !0),
      T.value ? (s(), E(As, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: J[6] || (J[6] = (re) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), Gv = /* @__PURE__ */ te(jv, [["__scopeId", "data-v-1555a802"]]);
function Fs(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Hv = { class: "remote-url-display" }, qv = ["title"], Kv = ["title"], Jv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Yv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Xv = /* @__PURE__ */ ee({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = $(!1), i = U(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const p = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${p}...${u}`;
    });
    async function h() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy URL:", p);
      }
    }
    return (p, u) => (s(), o("div", Hv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, qv),
      e("button", {
        class: de(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Yv, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Jv, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Kv)
    ]));
  }
}), Qv = /* @__PURE__ */ te(Xv, [["__scopeId", "data-v-7768a58d"]]), Zv = { class: "remote-title" }, ef = {
  key: 0,
  class: "default-badge"
}, tf = {
  key: 1,
  class: "sync-badge"
}, sf = {
  key: 0,
  class: "ahead"
}, of = {
  key: 1,
  class: "behind"
}, nf = {
  key: 1,
  class: "synced"
}, af = ["href"], lf = {
  key: 1,
  class: "remote-url-text"
}, rf = /* @__PURE__ */ ee({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = U(() => c.fetchingRemote === c.remote.name), i = U(() => c.remote.is_default), h = U(() => c.syncStatus && c.syncStatus.behind > 0), p = U(() => c.syncStatus && c.syncStatus.ahead > 0), u = U(() => c.remote.push_url !== c.remote.fetch_url), m = U(() => {
      const v = c.remote.fetch_url, g = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return g ? `https://${g[1]}/${g[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), r = U(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, g) => (s(), E(Ke, {
      status: i.value ? "synced" : void 0
    }, Gt({
      icon: l(() => [
        y(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Zv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", ef, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", tf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(F, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", sf, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", of, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", nf, "✓ synced"))
          ])) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        m.value ? (s(), o("a", {
          key: 0,
          href: m.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: g[0] || (g[0] = Le(() => {
          }, ["stop"]))
        }, a(r.value), 9, af)) : (s(), o("span", lf, a(r.value), 1))
      ]),
      actions: l(() => [
        k(ae, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: g[1] || (g[1] = (w) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...g[6] || (g[6] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(ae, {
          variant: h.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: g[2] || (g[2] = (w) => v.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(ae, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: g[3] || (g[3] = (w) => v.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(ae, {
          variant: "secondary",
          size: "xs",
          onClick: g[4] || (g[4] = (w) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...g[7] || (g[7] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (s(), E(ae, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: g[5] || (g[5] = (w) => v.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...g[8] || (g[8] = [
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
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(Ne, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              k(Qv, {
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
}), df = /* @__PURE__ */ te(rf, [["__scopeId", "data-v-8310f3a8"]]), cf = ["for"], uf = {
  key: 0,
  class: "base-form-field-required"
}, mf = { class: "base-form-field-input" }, vf = {
  key: 1,
  class: "base-form-field-error"
}, ff = {
  key: 2,
  class: "base-form-field-hint"
}, gf = /* @__PURE__ */ ee({
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
    const c = t, n = U(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, h) => (s(), o("div", {
      class: de(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (s(), o("span", uf, "*")) : d("", !0)
      ], 8, cf)) : d("", !0),
      e("div", mf, [
        $e(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", vf, a(t.error), 1)) : t.hint ? (s(), o("span", ff, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ te(gf, [["__scopeId", "data-v-9a1cf296"]]), pf = { class: "remote-form" }, hf = { class: "form-header" }, yf = { class: "form-body" }, wf = {
  key: 0,
  class: "form-error"
}, kf = { class: "form-actions" }, bf = /* @__PURE__ */ ee({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = $({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), p = $(!1), u = $(null);
    _t(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = U(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!m.value || p.value)) {
        u.value = null, p.value = !0;
        try {
          i("submit", h.value);
        } catch (v) {
          u.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          p.value = !1;
        }
      }
    }
    return (v, g) => (s(), o("div", pf, [
      e("div", hf, [
        k(st, null, {
          default: l(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", yf, [
        k(ns, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            k(it, {
              modelValue: h.value.name,
              "onUpdate:modelValue": g[0] || (g[0] = (w) => h.value.name = w),
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
            k(it, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": g[1] || (g[1] = (w) => h.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(ns, { label: "Push URL (optional)" }, {
          default: l(() => [
            k(it, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": g[2] || (g[2] = (w) => h.value.pushUrl = w),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", wf, a(u.value), 1)) : d("", !0)
      ]),
      e("div", kf, [
        k(ae, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: p.value,
          onClick: r
        }, {
          default: l(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(ae, {
          variant: "ghost",
          size: "md",
          onClick: g[3] || (g[3] = (w) => v.$emit("cancel"))
        }, {
          default: l(() => [...g[4] || (g[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), _f = /* @__PURE__ */ te(bf, [["__scopeId", "data-v-56021b18"]]), $f = { class: "conflict-summary-box" }, Cf = { class: "summary-header" }, xf = { class: "summary-text" }, Sf = { key: 0 }, If = {
  key: 1,
  class: "all-resolved"
}, Ef = { class: "summary-progress" }, Mf = { class: "progress-bar" }, Tf = { class: "progress-text" }, Rf = /* @__PURE__ */ ee({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = U(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, h) => (s(), o("div", $f, [
      e("div", Cf, [
        h[0] || (h[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", xf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Sf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", If, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Ef, [
        e("div", Mf, [
          e("div", {
            class: "progress-fill",
            style: yt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Tf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), zf = /* @__PURE__ */ te(Rf, [["__scopeId", "data-v-4e9e6cc9"]]), Lf = { class: "modal-header" }, Pf = { class: "modal-title" }, Df = { class: "modal-body" }, Nf = {
  key: 0,
  class: "error-box"
}, Uf = {
  key: 0,
  class: "error-hint"
}, Of = {
  key: 1,
  class: "loading-state"
}, Bf = { class: "commit-summary" }, Af = {
  key: 0,
  class: "changes-section"
}, Ff = {
  key: 0,
  class: "change-group",
  open: ""
}, Vf = { class: "change-count" }, Wf = { class: "change-list" }, jf = {
  key: 0,
  class: "conflict-badge"
}, Gf = {
  key: 1,
  class: "change-group"
}, Hf = { class: "change-count" }, qf = { class: "change-list" }, Kf = {
  key: 2,
  class: "change-group"
}, Jf = { class: "change-count" }, Yf = { class: "change-list" }, Xf = {
  key: 2,
  class: "strategy-section"
}, Qf = { class: "radio-group" }, Zf = { class: "radio-option" }, eg = { class: "radio-option" }, tg = { class: "radio-option" }, sg = {
  key: 3,
  class: "up-to-date"
}, og = { class: "modal-actions" }, Is = "comfygit.pullModelStrategy", ng = /* @__PURE__ */ ee({
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
    const n = t, i = c, h = $(localStorage.getItem(Is) || "skip");
    _t(h, (f) => {
      localStorage.setItem(Is, f);
    });
    const p = U(() => {
      var f;
      return ((f = n.error) == null ? void 0 : f.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = U(() => {
      if (!n.preview) return 0;
      const f = n.preview.changes.workflows;
      return f.added.length + f.modified.length + f.deleted.length;
    }), m = U(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = U(() => {
      var f;
      return u.value > 0 || m.value > 0 || (((f = n.preview) == null ? void 0 : f.changes.models.count) || 0) > 0;
    }), v = U(() => n.preview && Fs(n.preview) ? n.preview : null), g = U(() => {
      var f;
      return ((f = v.value) == null ? void 0 : f.workflow_conflicts.length) ?? 0;
    }), w = U(() => {
      var f;
      return ((f = n.conflictResolutions) == null ? void 0 : f.size) ?? 0;
    }), b = U(
      () => g.value > 0 && w.value === g.value
    ), C = U(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !b.value));
    function T(f) {
      if (!v.value) return !1;
      const _ = f.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((L) => L.name === _);
    }
    function O(f) {
      const _ = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: h.value, force: f, resolutions: _ });
    }
    return (f, _) => {
      var L, M;
      return s(), E(je, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[11] || (_[11] = (x) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[10] || (_[10] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", Lf, [
              e("h3", Pf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (x) => f.$emit("close"))
              }, "✕")
            ]),
            e("div", Df, [
              t.error ? (s(), o("div", Nf, [
                _[13] || (_[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  _[12] || (_[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  p.value ? (s(), o("p", Uf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Of, [..._[14] || (_[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (L = t.preview) != null && L.has_uncommitted_changes ? (s(), o(F, { key: 2 }, [
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
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", Bf, [
                  _[17] || (_[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                r.value ? (s(), o("div", Af, [
                  _[21] || (_[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", Ff, [
                    e("summary", null, [
                      _[18] || (_[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Vf, a(u.value) + " changes", 1)
                    ]),
                    e("div", Wf, [
                      (s(!0), o(F, null, ne(t.preview.changes.workflows.added, (x) => (s(), o("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128)),
                      (s(!0), o(F, null, ne(t.preview.changes.workflows.modified, (x) => (s(), o("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(x) + " ", 1),
                        T(x) ? (s(), o("span", jf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(F, null, ne(t.preview.changes.workflows.deleted, (x) => (s(), o("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  m.value > 0 ? (s(), o("details", Gf, [
                    e("summary", null, [
                      _[19] || (_[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Hf, a(m.value) + " to install", 1)
                    ]),
                    e("div", qf, [
                      (s(!0), o(F, null, ne(t.preview.changes.nodes.to_install, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", Kf, [
                    e("summary", null, [
                      _[20] || (_[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Jf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Yf, [
                      (s(!0), o(F, null, ne(t.preview.changes.models.referenced, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item"
                      }, a(x), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                v.value ? (s(), E(zf, {
                  key: 1,
                  "conflict-count": g.value,
                  "resolved-count": w.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Xf, [
                  _[26] || (_[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Qf, [
                    e("label", Zf, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[1] || (_[1] = (x) => h.value = x),
                        value: "all"
                      }, null, 512), [
                        [Yt, h.value]
                      ]),
                      _[22] || (_[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", eg, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[2] || (_[2] = (x) => h.value = x),
                        value: "required"
                      }, null, 512), [
                        [Yt, h.value]
                      ]),
                      _[23] || (_[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", tg, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[3] || (_[3] = (x) => h.value = x),
                        value: "skip"
                      }, null, 512), [
                        [Yt, h.value]
                      ]),
                      _[24] || (_[24] = e("span", null, "Skip model downloads", -1)),
                      _[25] || (_[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  _[27] || (_[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", sg, [
                  _[28] || (_[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", og, [
              k(ae, {
                variant: "secondary",
                onClick: _[4] || (_[4] = (x) => f.$emit("close"))
              }, {
                default: l(() => [..._[29] || (_[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(F, { key: 0 }, [
                k(ae, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: _[5] || (_[5] = (x) => O(!1))
                }, {
                  default: l(() => [..._[30] || (_[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(ae, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: _[6] || (_[6] = (x) => O(!0))
                }, {
                  default: l(() => [..._[31] || (_[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (M = t.preview) != null && M.has_uncommitted_changes ? (s(), E(ae, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: _[7] || (_[7] = (x) => O(!0))
              }, {
                default: l(() => [..._[32] || (_[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(F, { key: 2 }, [
                v.value && !b.value ? (s(), E(ae, {
                  key: 0,
                  variant: "primary",
                  onClick: _[8] || (_[8] = (x) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    y(" Resolve Conflicts (" + a(w.value) + "/" + a(g.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(ae, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !C.value,
                  onClick: _[9] || (_[9] = (x) => O(!1))
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
}), ag = /* @__PURE__ */ te(ng, [["__scopeId", "data-v-300c7b2f"]]), lg = { class: "modal-header" }, ig = { class: "modal-title" }, rg = { class: "modal-body" }, dg = {
  key: 0,
  class: "loading-state"
}, cg = {
  key: 1,
  class: "warning-box"
}, ug = {
  key: 0,
  class: "commits-section"
}, mg = { class: "commit-list" }, vg = { class: "commit-hash" }, fg = { class: "commit-message" }, gg = { class: "commit-date" }, pg = { class: "force-option" }, hg = { class: "checkbox-option" }, yg = { class: "commit-summary" }, wg = {
  key: 0,
  class: "commits-section"
}, kg = { class: "commit-list" }, bg = { class: "commit-hash" }, _g = { class: "commit-message" }, $g = { class: "commit-date" }, Cg = {
  key: 1,
  class: "up-to-date"
}, xg = { class: "modal-actions" }, Sg = /* @__PURE__ */ ee({
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
    function h(p) {
      n("push", { force: p });
    }
    return (p, u) => {
      var m, r, v;
      return s(), E(je, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (g) => p.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", lg, [
              e("h3", ig, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (g) => p.$emit("close"))
              }, "✕")
            ]),
            e("div", rg, [
              t.loading ? (s(), o("div", dg, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (s(), o("div", cg, [...u[9] || (u[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (r = t.preview) != null && r.remote_has_new_commits ? (s(), o(F, { key: 2 }, [
                u[13] || (u[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", ug, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", mg, [
                    (s(!0), o(F, null, ne(t.preview.commits, (g) => (s(), o("div", {
                      key: g.hash,
                      class: "commit-item"
                    }, [
                      e("span", vg, a(g.short_hash || g.hash.slice(0, 7)), 1),
                      e("span", fg, a(g.message), 1),
                      e("span", gg, a(g.date_relative || g.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", pg, [
                  e("label", hg, [
                    Ue(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (g) => i.value = g)
                    }, null, 512), [
                      [Zt, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", yg, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", wg, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", kg, [
                    (s(!0), o(F, null, ne(t.preview.commits, (g) => (s(), o("div", {
                      key: g.hash,
                      class: "commit-item"
                    }, [
                      e("span", bg, a(g.short_hash || g.hash.slice(0, 7)), 1),
                      e("span", _g, a(g.message), 1),
                      e("span", $g, a(g.date_relative || g.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Cg, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", xg, [
              k(ae, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (g) => p.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(F, { key: 0 }, [
                k(ae, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (g) => p.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(ae, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (g) => h(!0))
                }, {
                  default: l(() => [...u[19] || (u[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(ae, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (g) => h(!1))
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
}), Ig = /* @__PURE__ */ te(Sg, [["__scopeId", "data-v-bc6ded53"]]), Eg = { class: "resolution-choice-group" }, Mg = ["disabled"], Tg = ["disabled"], Rg = /* @__PURE__ */ ee({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Eg, [
      e("button", {
        class: de(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Mg),
      e("button", {
        class: de(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Tg)
    ]));
  }
}), zg = /* @__PURE__ */ te(Rg, [["__scopeId", "data-v-985715ed"]]), Lg = { class: "conflict-header" }, Pg = { class: "conflict-info" }, Dg = { class: "workflow-name" }, Ng = { class: "conflict-description" }, Ug = {
  key: 0,
  class: "resolved-badge"
}, Og = { class: "resolved-text" }, Bg = { class: "conflict-hashes" }, Ag = { class: "hash-item" }, Fg = { class: "hash-item" }, Vg = { class: "conflict-actions" }, Wg = /* @__PURE__ */ ee({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = $(n.resolution);
    _t(() => n.resolution, (r) => {
      h.value = r;
    }), _t(h, (r) => {
      r && i("resolve", r);
    });
    const p = U(() => h.value !== null), u = U(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = U(() => {
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
      var g, w;
      return s(), o("div", {
        class: de(["conflict-item", { resolved: p.value }])
      }, [
        e("div", Lg, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Pg, [
            e("code", Dg, a(t.conflict.name) + ".json", 1),
            e("div", Ng, a(u.value), 1)
          ]),
          p.value ? (s(), o("div", Ug, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Og, a(m.value), 1)
          ])) : d("", !0)
        ]),
        e("div", Bg, [
          e("span", Ag, [
            v[3] || (v[3] = y("Your: ", -1)),
            e("code", null, a(((g = t.conflict.base_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Fg, [
            v[4] || (v[4] = y("Theirs: ", -1)),
            e("code", null, a(((w = t.conflict.target_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Vg, [
          k(zg, {
            modelValue: h.value,
            "onUpdate:modelValue": v[0] || (v[0] = (b) => h.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), jg = /* @__PURE__ */ te(Wg, [["__scopeId", "data-v-506d3bbf"]]), Gg = { class: "resolution-content" }, Hg = {
  key: 0,
  class: "error-box"
}, qg = { class: "resolution-header" }, Kg = { class: "header-stats" }, Jg = { class: "stat" }, Yg = { class: "stat-value" }, Xg = { class: "stat resolved" }, Qg = { class: "stat-value" }, Zg = {
  key: 0,
  class: "stat pending"
}, ep = { class: "stat-value" }, tp = { class: "conflicts-list" }, sp = {
  key: 1,
  class: "all-resolved-message"
}, op = /* @__PURE__ */ ee({
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
    const n = t, i = c, h = U(() => n.resolutions.size), p = U(() => n.workflowConflicts.length - h.value), u = U(() => h.value === n.workflowConflicts.length), m = U(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(b) {
      const C = n.resolutions.get(b);
      return (C == null ? void 0 : C.resolution) ?? null;
    }
    function v(b, C) {
      i("resolve", b, C);
    }
    function g() {
      i("close");
    }
    function w() {
      i("apply");
    }
    return (b, C) => (s(), E(Xe, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: g
    }, {
      body: l(() => [
        e("div", Gg, [
          t.error ? (s(), o("div", Hg, [
            C[1] || (C[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              C[0] || (C[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", qg, [
            e("div", Kg, [
              e("div", Jg, [
                e("span", Yg, a(t.workflowConflicts.length), 1),
                C[2] || (C[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Xg, [
                e("span", Qg, a(h.value), 1),
                C[3] || (C[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              p.value > 0 ? (s(), o("div", Zg, [
                e("span", ep, a(p.value), 1),
                C[4] || (C[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            C[5] || (C[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", tp, [
            (s(!0), o(F, null, ne(t.workflowConflicts, (T) => (s(), E(jg, {
              key: T.name,
              conflict: T,
              resolution: r(T.name),
              onResolve: (O) => v(T.name, O)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", sp, [
            C[6] || (C[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ge, {
          variant: "secondary",
          onClick: g
        }, {
          default: l(() => [...C[7] || (C[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C[8] || (C[8] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ge, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: w
        }, {
          default: l(() => [
            y(a(m.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), np = /* @__PURE__ */ te(op, [["__scopeId", "data-v-c58d150d"]]), ap = { class: "node-conflict-item" }, lp = { class: "node-header" }, ip = { class: "node-name" }, rp = { class: "node-id" }, dp = { class: "version-comparison" }, cp = { class: "version yours" }, up = { class: "version theirs" }, mp = { class: "chosen-version" }, vp = { class: "chosen" }, fp = { class: "chosen-reason" }, gp = { class: "affected-workflows" }, pp = { class: "wf-source" }, hp = { class: "wf-version" }, yp = /* @__PURE__ */ ee({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", ap, [
      e("div", lp, [
        e("code", ip, a(t.conflict.node_name), 1),
        e("span", rp, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", dp, [
        e("div", cp, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", up, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", mp, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", vp, a(t.conflict.chosen_version), 1),
        e("span", fp, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", gp, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(F, null, ne(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", pp, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", hp, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), wp = /* @__PURE__ */ te(yp, [["__scopeId", "data-v-8b626725"]]), kp = { class: "validation-content" }, bp = {
  key: 0,
  class: "compatible-message"
}, _p = { class: "conflicts-list" }, $p = {
  key: 2,
  class: "warnings-section"
}, Cp = /* @__PURE__ */ ee({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = U(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (p, u) => (s(), E(Xe, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (m) => i("cancel"))
    }, {
      body: l(() => [
        e("div", kp, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", bp, [
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
            e("div", _p, [
              (s(!0), o(F, null, ne(t.validation.node_conflicts, (m) => (s(), E(wp, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", $p, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(F, null, ne(t.validation.warnings, (m, r) => (s(), o("li", { key: r }, a(m), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ge, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => i("cancel"))
        }, {
          default: l(() => [...u[9] || (u[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ge, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => i("goBack"))
        }, {
          default: l(() => [...u[10] || (u[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(ge, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (m) => i("proceed"))
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
}), xp = /* @__PURE__ */ te(Cp, [["__scopeId", "data-v-fefd26ed"]]), Sp = { key: 0 }, Ip = /* @__PURE__ */ ee({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: h,
      removeRemote: p,
      updateRemoteUrl: u,
      fetchRemote: m,
      getRemoteSyncStatus: r,
      getPullPreview: v,
      pullFromRemote: g,
      getPushPreview: w,
      pushToRemote: b,
      validateMerge: C
    } = Fe(), T = $([]), O = $(null), f = $({}), _ = $(!1), L = $(null), M = $(""), x = $(!1), K = $(null), V = $(!1), q = $("add"), z = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), S = U(() => {
      if (!M.value.trim()) return T.value;
      const A = M.value.toLowerCase();
      return T.value.filter(
        (oe) => oe.name.toLowerCase().includes(A) || oe.fetch_url.toLowerCase().includes(A) || oe.push_url.toLowerCase().includes(A)
      );
    });
    async function P() {
      _.value = !0, L.value = null;
      try {
        const A = await i();
        T.value = A.remotes, O.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (oe) => {
            const be = await r(oe.name);
            be && (f.value[oe.name] = be);
          })
        );
      } catch (A) {
        L.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        _.value = !1;
      }
    }
    function X() {
      q.value = "add", z.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function Q(A) {
      const oe = T.value.find((be) => be.name === A);
      oe && (q.value = "edit", z.value = {
        name: oe.name,
        fetchUrl: oe.fetch_url,
        pushUrl: oe.push_url
      }, V.value = !0);
    }
    async function J(A) {
      try {
        q.value === "add" ? await h(A.name, A.fetchUrl) : await u(A.name, A.fetchUrl, A.pushUrl || void 0), V.value = !1, await P();
      } catch (oe) {
        L.value = oe instanceof Error ? oe.message : "Operation failed";
      }
    }
    function re() {
      V.value = !1, z.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function H(A) {
      K.value = A;
      try {
        await m(A);
        const oe = await r(A);
        oe && (f.value[A] = oe), n("toast", `✓ Fetched from ${A}`, "success");
      } catch (oe) {
        n("toast", oe instanceof Error ? oe.message : "Fetch failed", "error");
      } finally {
        K.value = null;
      }
    }
    async function D(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await p(A), await P();
        } catch (oe) {
          L.value = oe instanceof Error ? oe.message : "Failed to remove remote";
        }
    }
    function N() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = $("idle"), le = U(() => I.value === "pull_preview"), se = U(
      () => I.value === "resolving" || I.value === "validating"
    ), Ee = U(
      () => I.value === "validation_review" || I.value === "executing"
    ), ye = $(!1), ce = $(null), ie = $(!1), ue = $(null), fe = $(!1), Ae = $(null), Re = $(null), ve = $(/* @__PURE__ */ new Map()), Ve = $(null), Se = $(null), ot = U(() => Ae.value && Fs(Ae.value) ? Ae.value : null);
    async function dt(A) {
      ue.value = A, I.value = "pull_preview", fe.value = !0, Ae.value = null, Re.value = null;
      try {
        Ae.value = await v(A);
      } catch (oe) {
        Re.value = oe instanceof Error ? oe.message : "Failed to load pull preview";
      } finally {
        fe.value = !1;
      }
    }
    function vt() {
      I.value = "idle", Ae.value = null, Re.value = null, ue.value = null;
    }
    async function xe(A) {
      if (!ue.value) return;
      I.value = "executing", Re.value = null;
      const oe = ue.value;
      try {
        const be = await g(oe, A);
        if (be.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${be.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        He(), I.value = "idle", n("toast", `✓ Pulled from ${oe}`, "success"), await P();
      } catch (be) {
        Re.value = be instanceof Error ? be.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function et() {
      ot.value && (I.value = "resolving", Se.value = null);
    }
    function he(A, oe) {
      ve.value.set(A, { name: A, resolution: oe });
    }
    function j() {
      I.value = "pull_preview";
    }
    async function Me() {
      I.value = "validating", Se.value = null;
      try {
        const A = Array.from(ve.value.values());
        Ve.value = await C(ue.value, A), I.value = "validation_review";
      } catch (A) {
        Se.value = A instanceof Error ? A.message : "Validation failed", I.value = "resolving";
      }
    }
    async function Z() {
      I.value = "executing";
      const A = ue.value;
      try {
        const oe = Array.from(ve.value.values()), be = await g(A, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: oe
        });
        if (be.rolled_back) {
          Re.value = `Pull failed and was rolled back: ${be.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        He(), I.value = "idle", n("toast", `✓ Pulled from ${A}`, "success"), await P();
      } catch (oe) {
        Re.value = oe instanceof Error ? oe.message : "Pull failed", I.value = "validation_review";
      }
    }
    function ze() {
      I.value = "resolving";
    }
    function We() {
      He(), I.value = "idle";
    }
    function He() {
      ve.value.clear(), Ve.value = null, Se.value = null, Re.value = null, Ae.value = null, ue.value = null;
    }
    async function Te(A) {
      ue.value = A, ye.value = !0, fe.value = !0, ce.value = null;
      try {
        ce.value = await w(A);
      } catch (oe) {
        L.value = oe instanceof Error ? oe.message : "Failed to load push preview";
      } finally {
        fe.value = !1;
      }
    }
    function ft() {
      ye.value = !1, ce.value = null, ue.value = null;
    }
    async function Y(A) {
      if (!ue.value) return;
      ie.value = !0;
      const oe = ue.value;
      try {
        await b(oe, A), ft(), n("toast", `✓ Pushed to ${oe}`, "success"), await P();
      } catch (be) {
        n("toast", be instanceof Error ? be.message : "Push failed", "error");
      } finally {
        ie.value = !1;
      }
    }
    function B() {
      const A = ue.value;
      ft(), A && dt(A);
    }
    return Be(P), (A, oe) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (be) => x.value = !0)
          }, {
            actions: l(() => [
              V.value ? d("", !0) : (s(), E(ae, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: X
              }, {
                default: l(() => [...oe[3] || (oe[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          V.value ? d("", !0) : (s(), E(Pt, {
            key: 0,
            modelValue: M.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (be) => M.value = be),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          _.value ? (s(), E(wt, {
            key: 0,
            message: "Loading remotes..."
          })) : L.value ? (s(), E(kt, {
            key: 1,
            message: L.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            V.value ? (s(), E(_f, {
              key: 0,
              mode: q.value,
              "remote-name": z.value.name,
              "fetch-url": z.value.fetchUrl,
              "push-url": z.value.pushUrl,
              onSubmit: J,
              onCancel: re
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            T.value.length && !V.value ? (s(), E(qt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                O.value ? (s(), o("span", Sp, " • Tracking: " + a(O.value.remote) + "/" + a(O.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            S.value.length && !V.value ? (s(), E(Oe, {
              key: 2,
              title: "REMOTES",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(S.value, (be) => (s(), E(df, {
                  key: be.name,
                  remote: be,
                  "sync-status": f.value[be.name],
                  "fetching-remote": K.value,
                  onFetch: H,
                  onEdit: Q,
                  onRemove: D,
                  onPull: dt,
                  onPush: Te
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !S.value.length && !V.value ? (s(), E(rt, {
              key: 3,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                k(ae, {
                  variant: "primary",
                  onClick: X
                }, {
                  default: l(() => [...oe[4] || (oe[4] = [
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
      k(mt, {
        show: x.value,
        title: "About Git Remotes",
        onClose: oe[2] || (oe[2] = (be) => x.value = !1)
      }, {
        content: l(() => [...oe[5] || (oe[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          k(ae, {
            variant: "link",
            onClick: N
          }, {
            default: l(() => [...oe[6] || (oe[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(ag, {
        show: le.value,
        "remote-name": ue.value || "",
        preview: Ae.value,
        loading: fe.value,
        pulling: I.value === "executing",
        error: Re.value,
        "conflict-resolutions": ve.value,
        onClose: vt,
        onPull: xe,
        onOpenConflictResolution: et
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(Ig, {
        show: ye.value,
        "remote-name": ue.value || "",
        preview: ce.value,
        loading: fe.value,
        pushing: ie.value,
        onClose: ft,
        onPush: Y,
        onPullFirst: B
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      se.value && ot.value ? (s(), E(np, {
        key: 0,
        "workflow-conflicts": ot.value.workflow_conflicts,
        resolutions: ve.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: Se.value,
        onClose: j,
        onResolve: he,
        onApply: Me
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Ee.value && Ve.value ? (s(), E(xp, {
        key: 1,
        validation: Ve.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: Z,
        onGoBack: ze,
        onCancel: We
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), Ep = /* @__PURE__ */ te(Ip, [["__scopeId", "data-v-9ae3b76d"]]), Mp = { class: "setting-info" }, Tp = { class: "setting-label" }, Rp = {
  key: 0,
  class: "required-marker"
}, zp = {
  key: 0,
  class: "setting-description"
}, Lp = { class: "setting-control" }, Pp = /* @__PURE__ */ ee({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: de(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Mp, [
        e("div", Tp, [
          y(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Rp, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", zp, a(t.description), 1)) : d("", !0)
      ]),
      e("div", Lp, [
        $e(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Et = /* @__PURE__ */ te(Pp, [["__scopeId", "data-v-cb5d236c"]]), Dp = { class: "toggle" }, Np = ["checked", "disabled"], Up = /* @__PURE__ */ ee({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Dp, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Np),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), as = /* @__PURE__ */ te(Up, [["__scopeId", "data-v-71c0f550"]]), Op = { class: "workspace-settings-content" }, Bp = { class: "settings-section" }, Ap = { class: "path-setting" }, Fp = { class: "path-value" }, Vp = { class: "path-setting" }, Wp = { class: "path-value" }, jp = { class: "settings-section" }, Gp = { class: "settings-section" }, Hp = { class: "settings-section" }, qp = { class: "settings-section" }, Kp = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsContent",
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getConfig: h, updateConfig: p } = Fe(), u = $(!1), m = $(null), r = $(null), v = $(null), g = $(null), w = $(""), b = $(""), C = $(!0), T = $(!0), O = $(""), f = $(!1);
    function _(z) {
      return z.join(" ");
    }
    function L(z) {
      return z.trim() ? z.trim().split(/\s+/) : [];
    }
    const M = U(() => {
      if (!g.value) return !1;
      const z = w.value !== (g.value.civitai_api_key || ""), S = O.value !== _(g.value.comfyui_extra_args || []);
      return z || S;
    });
    async function x() {
      u.value = !0, m.value = null;
      try {
        v.value = await h(), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", b.value = v.value.huggingface_token || "", C.value = v.value.auto_sync_models, T.value = v.value.confirm_destructive, O.value = _(v.value.comfyui_extra_args || []);
        const z = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        f.value = z === "true";
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function K() {
      var z, S;
      r.value = null;
      try {
        const P = {};
        w.value !== (((z = g.value) == null ? void 0 : z.civitai_api_key) || "") && (P.civitai_api_key = w.value || null), O.value !== _(((S = g.value) == null ? void 0 : S.comfyui_extra_args) || []) && (P.comfyui_extra_args = L(O.value)), await p(P), await x(), r.value = { type: "success", message: "Settings saved successfully" }, i("saved"), setTimeout(() => {
          r.value = null;
        }, 3e3);
      } catch (P) {
        const X = P instanceof Error ? P.message : "Failed to save settings";
        r.value = { type: "error", message: X }, i("error", X);
      }
    }
    function V() {
      g.value && (w.value = g.value.civitai_api_key || "", b.value = g.value.huggingface_token || "", C.value = g.value.auto_sync_models, T.value = g.value.confirm_destructive, O.value = _(g.value.comfyui_extra_args || []), r.value = null);
    }
    function q(z) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(z)), console.log("[ComfyGit] Auto-refresh setting saved:", z);
    }
    return c({
      saveSettings: K,
      resetSettings: V,
      hasChanges: M,
      loadSettings: x
    }), Be(x), (z, S) => (s(), o("div", Op, [
      u.value ? (s(), E(wt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : m.value ? (s(), E(kt, {
        key: 1,
        message: m.value,
        retry: !0,
        onRetry: x
      }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
        k(Oe, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var P, X;
            return [
              e("div", Bp, [
                e("div", Ap, [
                  S[6] || (S[6] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  S[7] || (S[7] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Fp, a(((P = v.value) == null ? void 0 : P.workspace_path) || "Loading..."), 1)
                ]),
                e("div", Vp, [
                  S[8] || (S[8] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  S[9] || (S[9] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", Wp, a(((X = v.value) == null ? void 0 : X.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        k(Oe, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", jp, [
              k(Et, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  k(Ft, {
                    modelValue: w.value,
                    "onUpdate:modelValue": S[0] || (S[0] = (P) => w.value = P),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(Et, {
                label: "HuggingFace Token",
                description: "Token for accessing HuggingFace models (not yet supported)",
                disabled: !0
              }, {
                default: l(() => [
                  k(Ft, {
                    modelValue: b.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (P) => b.value = P),
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
        k(Oe, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", Gp, [
              k(Et, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  k(Ft, {
                    modelValue: O.value,
                    "onUpdate:modelValue": S[2] || (S[2] = (P) => O.value = P),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S[10] || (S[10] = e("div", { class: "setting-hint" }, [
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
        k(Oe, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", Hp, [
              k(Et, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  k(as, {
                    modelValue: f.value,
                    "onUpdate:modelValue": [
                      S[3] || (S[3] = (P) => f.value = P),
                      q
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        k(Oe, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
          default: l(() => [
            e("div", qp, [
              k(Et, {
                label: "Auto-Sync Models",
                description: "Automatically sync models when switching environments (not yet supported)",
                disabled: !0
              }, {
                default: l(() => [
                  k(as, {
                    modelValue: C.value,
                    "onUpdate:modelValue": S[4] || (S[4] = (P) => C.value = P),
                    disabled: ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(Et, {
                label: "Confirm Destructive Actions",
                description: "Show confirmation dialogs for destructive operations (not yet supported)",
                disabled: !0
              }, {
                default: l(() => [
                  k(as, {
                    modelValue: T.value,
                    "onUpdate:modelValue": S[5] || (S[5] = (P) => T.value = P),
                    disabled: ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        r.value ? (s(), E(qt, {
          key: 0,
          variant: (r.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: yt({ color: r.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(r.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : d("", !0)
      ], 64))
    ]));
  }
}), Vs = /* @__PURE__ */ te(Kp, [["__scopeId", "data-v-387cdb03"]]), Jp = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = $(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, h) => (s(), E(Je, null, {
      header: l(() => [
        k(Ye, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var p, u;
            return [
              k(ae, {
                variant: "primary",
                size: "sm",
                disabled: !((p = c.value) != null && p.hasChanges),
                onClick: h[0] || (h[0] = (m) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.saveSettings();
                })
              }, {
                default: l(() => [...h[2] || (h[2] = [
                  y(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), E(ae, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: h[1] || (h[1] = (m) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.resetSettings();
                })
              }, {
                default: l(() => [...h[3] || (h[3] = [
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
        k(Vs, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Yp = /* @__PURE__ */ ee({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = Fe(), h = $([]), p = $(!1), u = $(null), m = $(!1), r = $(null), v = $(null), g = $(!1), w = U(() => h.value.length === 0 ? [] : h.value.map((O) => ({
      text: `${O.timestamp} - ${O.name} - ${O.level} - ${O.func}:${O.line} - ${O.message}`,
      level: O.level
    })));
    async function b() {
      p.value = !0, u.value = null;
      try {
        h.value = await c(void 0, 500);
      } catch (O) {
        u.value = O instanceof Error ? O.message : "Failed to load workspace logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var O;
          (O = r.value) != null && O.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function C() {
      try {
        const O = await n();
        O.exists && (v.value = O.path);
      } catch {
      }
    }
    async function T() {
      if (v.value) {
        g.value = !0;
        try {
          await i(v.value);
        } catch (O) {
          console.error("Failed to open log file:", O);
        } finally {
          g.value = !1;
        }
      }
    }
    return Be(() => {
      b(), C();
    }), (O, f) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (_) => m.value = !0)
          }, {
            actions: l(() => [
              k(ae, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !v.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  y(a(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ae, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: p.value
              }, {
                default: l(() => [
                  y(a(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          p.value ? (s(), E(wt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), E(kt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            h.value.length === 0 ? (s(), E(rt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(F, null, ne(w.value, (_, L) => (s(), o("div", {
                key: L,
                class: de(`log-line log-level-${_.level.toLowerCase()}`)
              }, a(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(mt, {
        show: m.value,
        title: "About Workspace Logs",
        onClose: f[2] || (f[2] = (_) => m.value = !1)
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
          k(ae, {
            variant: "primary",
            onClick: f[1] || (f[1] = (_) => m.value = !1)
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
}), Xp = /* @__PURE__ */ te(Yp, [["__scopeId", "data-v-7f05352a"]]), Qp = /* @__PURE__ */ ee({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: h } = Fe(), p = $([]), u = $(!1), m = $(null), r = $(!1), v = $("production"), g = $(null), w = $(null), b = $(!1), C = U(() => p.value.length === 0 ? [] : p.value.map((_) => ({
      text: `${_.timestamp} - ${_.name} - ${_.level} - ${_.func}:${_.line} - ${_.message}`,
      level: _.level
    })));
    async function T() {
      u.value = !0, m.value = null;
      try {
        p.value = await c(void 0, 500);
        try {
          const _ = await n();
          v.value = _.environment || "production";
        } catch {
        }
      } catch (_) {
        m.value = _ instanceof Error ? _.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var _;
          (_ = g.value) != null && _.parentElement && (g.value.parentElement.scrollTop = g.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function O() {
      try {
        const _ = await i();
        _.exists && (w.value = _.path);
      } catch {
      }
    }
    async function f() {
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
    return Be(() => {
      T(), O();
    }), (_, L) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (M) => r.value = !0)
          }, {
            actions: l(() => [
              k(ae, {
                variant: "secondary",
                size: "sm",
                onClick: f,
                disabled: !w.value || b.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  y(a(b.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ae, {
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
          })) : m.value ? (s(), E(kt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            p.value.length === 0 ? (s(), E(rt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: g,
              class: "log-output"
            }, [
              (s(!0), o(F, null, ne(C.value, (M, x) => (s(), o("div", {
                key: x,
                class: de(`log-line log-level-${M.level.toLowerCase()}`)
              }, a(M.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(mt, {
        show: r.value,
        title: "About Environment Logs",
        onClose: L[2] || (L[2] = (M) => r.value = !1)
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
          k(ae, {
            variant: "primary",
            onClick: L[1] || (L[1] = (M) => r.value = !1)
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
}), Zp = /* @__PURE__ */ te(Qp, [["__scopeId", "data-v-6f8db7ce"]]), eh = { class: "env-title" }, th = {
  key: 0,
  class: "current-badge"
}, sh = {
  key: 0,
  class: "branch-info"
}, oh = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), E(Ke, {
      status: t.isCurrent ? "synced" : void 0
    }, Gt({
      icon: l(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", eh, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", th, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", sh, [
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
          k(Ne, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          k(Ne, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          k(Ne, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), E(Ne, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), nh = /* @__PURE__ */ te(oh, [["__scopeId", "data-v-9231917a"]]), ah = { class: "env-details" }, lh = { class: "status-row" }, ih = {
  key: 0,
  class: "detail-row"
}, rh = { class: "value mono" }, dh = {
  key: 1,
  class: "detail-row"
}, ch = { class: "value mono small" }, uh = { class: "detail-row" }, mh = { class: "value" }, vh = { class: "detail-row" }, fh = { class: "value" }, gh = { class: "detail-row" }, ph = { class: "value" }, hh = {
  key: 2,
  class: "section-divider"
}, yh = {
  key: 3,
  class: "detail-row"
}, wh = { class: "value" }, kh = {
  key: 4,
  class: "detail-row"
}, bh = { class: "value" }, _h = { class: "footer-actions" }, $h = /* @__PURE__ */ ee({
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
        const p = new Date(h), m = (/* @__PURE__ */ new Date()).getTime() - p.getTime(), r = Math.floor(m / 6e4), v = Math.floor(m / 36e5), g = Math.floor(m / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : g < 30 ? `${g} ${g === 1 ? "day" : "days"} ago` : p.toLocaleDateString();
      } catch {
        return h;
      }
    }
    return (h, p) => (s(), E(Xe, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: p[2] || (p[2] = (u) => n("close"))
    }, {
      body: l(() => [
        e("div", ah, [
          e("div", lh, [
            p[3] || (p[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: de(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", ih, [
            p[4] || (p[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", rh, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", dh, [
            p[5] || (p[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", ch, a(t.environment.path), 1)
          ])) : d("", !0),
          p[11] || (p[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", uh, [
            p[6] || (p[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", mh, a(t.environment.workflow_count), 1)
          ]),
          e("div", vh, [
            p[7] || (p[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", fh, a(t.environment.node_count), 1)
          ]),
          e("div", gh, [
            p[8] || (p[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", ph, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", hh)) : d("", !0),
          t.environment.created_at ? (s(), o("div", yh, [
            p[9] || (p[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", wh, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", kh, [
            p[10] || (p[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", bh, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", _h, [
          t.canDelete ? (s(), E(ge, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: p[0] || (p[0] = (u) => n("delete", t.environment.name))
          }, {
            default: l(() => [...p[12] || (p[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          p[14] || (p[14] = e("div", { class: "footer-spacer" }, null, -1)),
          k(ge, {
            variant: "secondary",
            size: "sm",
            onClick: p[1] || (p[1] = (u) => n("close"))
          }, {
            default: l(() => [...p[13] || (p[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ch = /* @__PURE__ */ te($h, [["__scopeId", "data-v-59855453"]]), Ws = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], js = "3.12", gs = [
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
], Gs = "auto", xh = { class: "progress-bar" }, Sh = /* @__PURE__ */ ee({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = U(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, h) => (s(), o("div", xh, [
      e("div", {
        class: de(["progress-fill", t.variant]),
        style: yt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Hs = /* @__PURE__ */ te(Sh, [["__scopeId", "data-v-1beb0512"]]), Ih = { class: "task-progress" }, Eh = { class: "progress-info" }, Mh = { class: "progress-percentage" }, Th = { class: "progress-message" }, Rh = {
  key: 0,
  class: "progress-steps"
}, zh = { class: "step-icon" }, Lh = { class: "step-label" }, Ph = /* @__PURE__ */ ee({
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
      const p = c.steps.find((u) => u.id === h);
      return p ? c.progress >= p.progressThreshold ? "completed" : c.currentPhase === h ? "active" : "pending" : "pending";
    }
    function i(h) {
      const p = n(h);
      return p === "completed" ? "✓" : p === "active" ? "⟳" : "○";
    }
    return (h, p) => (s(), o("div", Ih, [
      k(Hs, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Eh, [
        e("span", Mh, a(t.progress) + "%", 1),
        e("span", Th, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Rh, [
        (s(!0), o(F, null, ne(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: de(["step", n(u.id)])
        }, [
          e("span", zh, a(i(u.id)), 1),
          e("span", Lh, a(u.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), ts = /* @__PURE__ */ te(Ph, [["__scopeId", "data-v-9d1de66c"]]), Dh = {
  key: 0,
  class: "create-env-form"
}, Nh = { class: "form-field" }, Uh = { class: "form-field" }, Oh = ["value"], Bh = { class: "form-field" }, Ah = ["disabled"], Fh = ["value"], Vh = { class: "form-field" }, Wh = ["value"], jh = { class: "form-field form-field--checkbox" }, Gh = { class: "form-checkbox" }, Hh = {
  key: 1,
  class: "create-env-progress"
}, qh = { class: "creating-intro" }, Kh = {
  key: 0,
  class: "progress-warning"
}, Jh = {
  key: 1,
  class: "create-error"
}, Yh = { class: "error-message" }, Xh = {
  key: 1,
  class: "footer-status"
}, Qh = 10, Zh = /* @__PURE__ */ ee({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: h, getCreateProgress: p } = Fe(), u = $(""), m = $(js), r = $("latest"), v = $(Gs), g = $(!1), w = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = $(!1), C = $(!1), T = $({
      progress: 0,
      message: ""
    });
    let O = null, f = 0;
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
    ], L = $(null);
    function M() {
      C.value || n("close");
    }
    async function x() {
      const S = u.value.trim();
      if (S) {
        C.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const P = {
            name: S,
            python_version: m.value,
            comfyui_version: r.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, X = await h(P);
          X.status === "started" ? K() : X.status === "error" && (T.value = {
            progress: 0,
            message: X.message || "Failed to start creation",
            error: X.message
          });
        } catch (P) {
          T.value = {
            progress: 0,
            message: P instanceof Error ? P.message : "Unknown error",
            error: P instanceof Error ? P.message : "Unknown error"
          };
        }
      }
    }
    function K() {
      O || (f = 0, O = window.setInterval(async () => {
        try {
          const S = await p();
          f = 0, T.value = {
            progress: S.progress ?? 0,
            message: S.message,
            phase: S.phase,
            error: S.error
          }, S.state === "complete" ? (V(), n("created", S.environment_name || u.value.trim(), g.value)) : S.state === "error" ? (V(), T.value.error = S.error || S.message) : S.state === "idle" && C.value && (V(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          f++, f >= Qh && (V(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      O && (clearInterval(O), O = null);
    }
    function q() {
      C.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function z() {
      b.value = !0;
      try {
        w.value = await i();
      } catch (S) {
        console.error("Failed to load ComfyUI releases:", S);
      } finally {
        b.value = !1;
      }
    }
    return Be(async () => {
      var S;
      await mo(), (S = L.value) == null || S.focus(), z();
    }), Ls(() => {
      V();
    }), (S, P) => (s(), E(Xe, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !C.value,
      onClose: M
    }, {
      body: l(() => [
        C.value ? (s(), o("div", Hh, [
          e("p", qh, [
            P[11] || (P[11] = y(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            P[12] || (P[12] = y("... ", -1))
          ]),
          k(ts, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: _
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? d("", !0) : (s(), o("p", Kh, " This may take several minutes. Please wait... ")),
          T.value.error ? (s(), o("div", Jh, [
            e("p", Yh, a(T.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", Dh, [
          e("div", Nh, [
            P[6] || (P[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ue(e("input", {
              ref_key: "nameInput",
              ref: L,
              "onUpdate:modelValue": P[0] || (P[0] = (X) => u.value = X),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ht(x, ["enter"])
            }, null, 544), [
              [Rt, u.value]
            ])
          ]),
          e("div", Uh, [
            P[7] || (P[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": P[1] || (P[1] = (X) => m.value = X),
              class: "form-select"
            }, [
              (s(!0), o(F, null, ne(_e(Ws), (X) => (s(), o("option", {
                key: X,
                value: X
              }, a(X), 9, Oh))), 128))
            ], 512), [
              [zt, m.value]
            ])
          ]),
          e("div", Bh, [
            P[8] || (P[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": P[2] || (P[2] = (X) => r.value = X),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(F, null, ne(w.value, (X) => (s(), o("option", {
                key: X.tag_name,
                value: X.tag_name
              }, a(X.name), 9, Fh))), 128))
            ], 8, Ah), [
              [zt, r.value]
            ])
          ]),
          e("div", Vh, [
            P[9] || (P[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": P[3] || (P[3] = (X) => v.value = X),
              class: "form-select"
            }, [
              (s(!0), o(F, null, ne(_e(gs), (X) => (s(), o("option", {
                key: X,
                value: X
              }, a(X) + a(X === "auto" ? " (detect GPU)" : ""), 9, Wh))), 128))
            ], 512), [
              [zt, v.value]
            ])
          ]),
          e("div", jh, [
            e("label", Gh, [
              Ue(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": P[4] || (P[4] = (X) => g.value = X)
              }, null, 512), [
                [Zt, g.value]
              ]),
              P[10] || (P[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        C.value ? (s(), o(F, { key: 1 }, [
          T.value.error ? (s(), E(ge, {
            key: 0,
            variant: "secondary",
            onClick: q
          }, {
            default: l(() => [...P[15] || (P[15] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Xh, " Creating environment... "))
        ], 64)) : (s(), o(F, { key: 0 }, [
          k(ge, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: x
          }, {
            default: l(() => [...P[13] || (P[13] = [
              y(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(ge, {
            variant: "secondary",
            onClick: P[5] || (P[5] = (X) => n("close"))
          }, {
            default: l(() => [...P[14] || (P[14] = [
              y(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), e1 = /* @__PURE__ */ te(Zh, [["__scopeId", "data-v-f37eaa42"]]), t1 = /* @__PURE__ */ ee({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: h } = Fe(), p = $([]), u = $(!1), m = $(null), r = $(""), v = $(!1), g = $(!1), w = $(null), b = U(() => {
      if (!r.value.trim()) return p.value;
      const L = r.value.toLowerCase();
      return p.value.filter(
        (M) => {
          var x;
          return M.name.toLowerCase().includes(L) || ((x = M.current_branch) == null ? void 0 : x.toLowerCase().includes(L));
        }
      );
    });
    function C(L, M) {
      g.value = !1, i("created", L, M);
    }
    function T() {
      g.value = !0;
    }
    function O(L) {
      w.value = L;
    }
    function f(L) {
      w.value = null, i("delete", L);
    }
    async function _() {
      u.value = !0, m.value = null;
      try {
        p.value = await h();
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Be(_), c({
      loadEnvironments: _,
      openCreateModal: T
    }), (L, M) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (x) => v.value = !0)
          }, {
            actions: l(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: l(() => [...M[6] || (M[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              k(ae, {
                variant: "secondary",
                size: "sm",
                onClick: _
              }, {
                default: l(() => [...M[7] || (M[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(Pt, {
            modelValue: r.value,
            "onUpdate:modelValue": M[1] || (M[1] = (x) => r.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), E(wt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), E(kt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            b.value.length ? (s(), E(Oe, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: l(() => [
                (s(!0), o(F, null, ne(b.value, (x) => (s(), E(nh, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    x.is_current ? d("", !0) : (s(), E(ae, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => L.$emit("switch", x.name)
                    }, {
                      default: l(() => [...M[8] || (M[8] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => O(x)
                    }, {
                      default: l(() => [...M[9] || (M[9] = [
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
            b.value.length ? d("", !0) : (s(), E(rt, {
              key: 1,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Gt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  k(ae, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: l(() => [...M[10] || (M[10] = [
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
      k(mt, {
        show: v.value,
        title: "About Environments",
        onClose: M[3] || (M[3] = (x) => v.value = !1)
      }, {
        content: l(() => [...M[11] || (M[11] = [
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
          k(ae, {
            variant: "secondary",
            onClick: M[2] || (M[2] = (x) => v.value = !1)
          }, {
            default: l(() => [...M[12] || (M[12] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (s(), E(Ch, {
        key: 0,
        environment: w.value,
        "can-delete": p.value.length > 1,
        onClose: M[4] || (M[4] = (x) => w.value = null),
        onDelete: f
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      g.value ? (s(), E(e1, {
        key: 1,
        onClose: M[5] || (M[5] = (x) => g.value = !1),
        onCreated: C
      })) : d("", !0)
    ], 64));
  }
}), s1 = /* @__PURE__ */ te(t1, [["__scopeId", "data-v-f95999f4"]]), o1 = { class: "file-path" }, n1 = { class: "file-path-text" }, a1 = ["title"], l1 = /* @__PURE__ */ ee({
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
      } catch (h) {
        console.error("Failed to copy:", h);
      }
    }
    return (h, p) => (s(), o("div", o1, [
      p[0] || (p[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", n1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, a1)) : d("", !0)
    ]));
  }
}), i1 = /* @__PURE__ */ te(l1, [["__scopeId", "data-v-f0982173"]]), r1 = { class: "export-blocked" }, d1 = { class: "issues-list" }, c1 = { class: "issue-message" }, u1 = {
  key: 0,
  class: "issue-details"
}, m1 = ["onClick"], v1 = { class: "issue-fix" }, f1 = /* @__PURE__ */ ee({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ss({});
    function i(h) {
      const p = c.issues[h];
      return n[h] || p.details.length <= 3 ? p.details : p.details.slice(0, 3);
    }
    return (h, p) => (s(), E(Xe, {
      title: "Cannot Export",
      size: "md",
      onClose: p[1] || (p[1] = (u) => h.$emit("close"))
    }, {
      body: l(() => [
        e("div", r1, [
          p[2] || (p[2] = e("div", { class: "error-header" }, [
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
          e("div", d1, [
            (s(!0), o(F, null, ne(t.issues, (u, m) => (s(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", c1, a(u.message), 1),
              u.details.length ? (s(), o("div", u1, [
                (s(!0), o(F, null, ne(i(m), (r, v) => (s(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(r), 1))), 128)),
                u.details.length > 3 && !n[m] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (r) => n[m] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, m1)) : d("", !0)
              ])) : d("", !0),
              e("div", v1, [
                u.type === "uncommitted_workflows" ? (s(), o(F, { key: 0 }, [
                  y(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(F, { key: 1 }, [
                  y(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(F, { key: 2 }, [
                  y(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        k(ge, {
          variant: "primary",
          onClick: p[0] || (p[0] = (u) => h.$emit("close"))
        }, {
          default: l(() => [...p[3] || (p[3] = [
            y(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), g1 = /* @__PURE__ */ te(f1, [["__scopeId", "data-v-b52f5e32"]]), p1 = { class: "export-warnings" }, h1 = {
  key: 0,
  class: "success-header"
}, y1 = { class: "warning-header" }, w1 = { class: "warning-summary" }, k1 = { class: "warning-title" }, b1 = { class: "models-section" }, _1 = { class: "models-list" }, $1 = { class: "model-info" }, C1 = { class: "model-filename" }, x1 = { class: "model-workflows" }, S1 = ["onClick"], I1 = /* @__PURE__ */ ee({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, h = $(!1), p = $(null), u = U(() => h.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      p.value = null, i("revalidate");
    }
    return (r, v) => (s(), o(F, null, [
      k(Xe, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (g) => r.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", p1, [
            t.models.length === 0 ? (s(), o("div", h1, [...v[4] || (v[4] = [
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
              e("div", y1, [
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
                e("div", w1, [
                  e("h3", k1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", b1, [
                e("div", _1, [
                  (s(!0), o(F, null, ne(u.value, (g) => (s(), o("div", {
                    key: g.hash,
                    class: "model-item"
                  }, [
                    e("div", $1, [
                      e("div", C1, a(g.filename), 1),
                      e("div", x1, " Used by: " + a(g.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (w) => p.value = g.hash
                    }, " Add Source ", 8, S1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !h.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (g) => h.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          k(ge, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (g) => r.$emit("cancel"))
          }, {
            default: l(() => [...v[7] || (v[7] = [
              y(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(ge, {
            variant: "primary",
            onClick: v[2] || (v[2] = (g) => r.$emit("confirm"))
          }, {
            default: l(() => [
              y(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      p.value ? (s(), E(fs, {
        key: 0,
        identifier: p.value,
        onClose: m
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), E1 = /* @__PURE__ */ te(I1, [["__scopeId", "data-v-b698d882"]]), M1 = { class: "export-card" }, T1 = { class: "export-path-row" }, R1 = { class: "export-actions" }, z1 = {
  key: 1,
  class: "export-warning"
}, L1 = /* @__PURE__ */ ee({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Fe(), i = $(""), h = $(!1), p = $(!1), u = $(!1), m = $(null), r = $(!1), v = $(null), g = $(!1), w = $(!1), b = U(() => h.value ? "Validating..." : p.value ? "Exporting..." : "Export Environment");
    async function C() {
      h.value = !0, m.value = null;
      try {
        const M = await c();
        v.value = M, M.can_export ? M.warnings.models_without_sources.length > 0 ? w.value = !0 : await f() : g.value = !0;
      } catch (M) {
        m.value = {
          status: "error",
          message: M instanceof Error ? M.message : "Validation failed"
        };
      } finally {
        h.value = !1;
      }
    }
    async function T() {
      w.value = !1, await f();
    }
    async function O() {
      try {
        const M = await c();
        v.value = M;
      } catch (M) {
        console.error("Re-validation failed:", M);
      }
    }
    async function f() {
      p.value = !0;
      try {
        const M = await n(i.value || void 0);
        m.value = M;
      } catch (M) {
        m.value = {
          status: "error",
          message: M instanceof Error ? M.message : "Export failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function _() {
      var M;
      if ((M = m.value) != null && M.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function L() {
      var M;
      if ((M = m.value) != null && M.path) {
        u.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const K = await x.blob(), V = URL.createObjectURL(K), q = m.value.path.split("/").pop() || "environment-export.tar.gz", z = document.createElement("a");
          z.href = V, z.download = q, document.body.appendChild(z), z.click(), document.body.removeChild(z), URL.revokeObjectURL(V);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (M, x) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (K) => r.value = !0)
          })
        ]),
        content: l(() => [
          k(Oe, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", M1, [
                x[7] || (x[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", T1, [
                  k(Ft, {
                    modelValue: i.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (K) => i.value = K),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", R1, [
                  k(ae, {
                    variant: "primary",
                    size: "md",
                    loading: h.value || p.value,
                    disabled: h.value || p.value,
                    onClick: C
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
                      y(" " + a(b.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          m.value ? (s(), E(Oe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              k(Ke, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Gt({
                icon: l(() => [
                  y(a(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  y(a(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  y(a(m.value.status === "success" ? "Your environment has been exported" : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    k(Ne, { label: "Saved to:" }, {
                      default: l(() => [
                        k(i1, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), E(Ne, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", z1, [...x[8] || (x[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    k(ae, {
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
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: _
                    }, {
                      default: l(() => [...x[10] || (x[10] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(ae, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (K) => m.value = null)
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
      k(mt, {
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
      g.value && v.value ? (s(), E(g1, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: x[4] || (x[4] = (K) => g.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      w.value && v.value ? (s(), E(E1, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: x[5] || (x[5] = (K) => w.value = !1),
        onRevalidate: O
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), P1 = /* @__PURE__ */ te(L1, [["__scopeId", "data-v-f4d120f2"]]), D1 = { class: "file-input-wrapper" }, N1 = ["accept", "multiple", "disabled"], U1 = /* @__PURE__ */ ee({
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
    const i = n, h = $(null);
    function p() {
      var m;
      (m = h.value) == null || m.click();
    }
    function u(m) {
      const r = m.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return c({
      triggerInput: p
    }), (m, r) => (s(), o("div", D1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, N1),
      k(ae, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: p
      }, {
        default: l(() => [
          $e(m.$slots, "default", {}, () => [
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
}), O1 = /* @__PURE__ */ te(U1, [["__scopeId", "data-v-cd192091"]]), B1 = {
  key: 0,
  class: "drop-zone-empty"
}, A1 = { class: "drop-zone-text" }, F1 = { class: "drop-zone-primary" }, V1 = { class: "drop-zone-secondary" }, W1 = { class: "drop-zone-actions" }, j1 = {
  key: 1,
  class: "drop-zone-file"
}, G1 = { class: "file-info" }, H1 = { class: "file-details" }, q1 = { class: "file-name" }, K1 = { class: "file-size" }, J1 = /* @__PURE__ */ ee({
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
    const n = c, i = $(!1), h = $(null), p = $(0), u = U(() => h.value !== null), m = U(() => {
      var f;
      return ((f = h.value) == null ? void 0 : f.name) || "";
    }), r = U(() => {
      if (!h.value) return "";
      const f = h.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(f) {
      var _;
      f.stopPropagation(), p.value++, (_ = f.dataTransfer) != null && _.types.includes("Files") && (i.value = !0);
    }
    function g(f) {
      f.stopPropagation(), f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function w(f) {
      f.stopPropagation(), p.value--, p.value === 0 && (i.value = !1);
    }
    function b(f) {
      var L;
      f.stopPropagation(), p.value = 0, i.value = !1;
      const _ = (L = f.dataTransfer) == null ? void 0 : L.files;
      _ && _.length > 0 && T(_[0]);
    }
    function C(f) {
      f.length > 0 && T(f[0]);
    }
    function T(f) {
      h.value = f, n("fileSelected", f);
    }
    function O() {
      h.value = null, n("clear");
    }
    return (f, _) => (s(), o("div", {
      class: de(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Le(v, ["prevent"]),
      onDragover: Le(g, ["prevent"]),
      onDragleave: Le(w, ["prevent"]),
      onDrop: Le(b, ["prevent"])
    }, [
      u.value ? (s(), o("div", j1, [
        e("div", G1, [
          _[1] || (_[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", H1, [
            e("div", q1, a(m.value), 1),
            e("div", K1, a(r.value), 1)
          ])
        ]),
        k(ae, {
          variant: "ghost",
          size: "xs",
          onClick: O,
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
      ])) : (s(), o("div", B1, [
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
        e("div", A1, [
          e("p", F1, a(t.primaryText), 1),
          e("p", V1, a(t.secondaryText), 1)
        ]),
        e("div", W1, [
          k(O1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: C
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
}), Y1 = /* @__PURE__ */ te(J1, [["__scopeId", "data-v-0f79cb86"]]), X1 = { class: "import-preview" }, Q1 = { class: "preview-header" }, Z1 = {
  key: 0,
  class: "source-env"
}, ey = { class: "preview-content" }, ty = { class: "preview-section" }, sy = { class: "section-header" }, oy = { class: "section-info" }, ny = { class: "section-count" }, ay = {
  key: 0,
  class: "item-list"
}, ly = { class: "item-name" }, iy = {
  key: 0,
  class: "item-more"
}, ry = { class: "preview-section" }, dy = { class: "section-header" }, cy = { class: "section-info" }, uy = { class: "section-count" }, my = {
  key: 0,
  class: "item-list"
}, vy = { class: "item-details" }, fy = { class: "item-name" }, gy = { class: "item-meta" }, py = {
  key: 0,
  class: "item-more"
}, hy = { class: "preview-section" }, yy = { class: "section-header" }, wy = { class: "section-info" }, ky = { class: "section-count" }, by = {
  key: 0,
  class: "item-list"
}, _y = { class: "item-name" }, $y = {
  key: 0,
  class: "item-more"
}, Cy = {
  key: 0,
  class: "preview-section"
}, xy = { class: "git-info" }, Sy = /* @__PURE__ */ ee({
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
    const c = t, n = U(() => c.workflows.length), i = U(() => c.models.length), h = U(() => c.nodes.length);
    function p(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, m) => (s(), o("div", X1, [
      e("div", Q1, [
        k(st, null, {
          default: l(() => [...m[0] || (m[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Z1, [
          m[1] || (m[1] = y(" From: ", -1)),
          k(is, null, {
            default: l(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", ey, [
        e("div", ty, [
          e("div", sy, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", oy, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", ny, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", ay, [
            (s(!0), o(F, null, ne(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ly, a(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", iy, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", ry, [
          e("div", dy, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", cy, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", uy, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", my, [
            (s(!0), o(F, null, ne(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", vy, [
                e("span", fy, a(r.filename), 1),
                e("span", gy, a(p(r.size)) + " • " + a(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", py, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", hy, [
          e("div", yy, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", wy, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", ky, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", by, [
            (s(!0), o(F, null, ne(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", _y, a(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", $y, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Cy, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", xy, [
            t.gitBranch ? (s(), E(Ne, {
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
            t.gitCommit ? (s(), E(Ne, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                k(Ds, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Iy = /* @__PURE__ */ te(Sy, [["__scopeId", "data-v-182fe113"]]), Ey = { class: "import-config" }, My = { class: "config-container" }, Ty = { class: "config-field" }, Ry = { class: "input-wrapper" }, zy = ["value"], Ly = {
  key: 0,
  class: "validating-indicator"
}, Py = {
  key: 1,
  class: "valid-indicator"
}, Dy = {
  key: 0,
  class: "field-error"
}, Ny = { class: "config-field" }, Uy = { class: "strategy-options" }, Oy = ["value", "checked", "onChange"], By = { class: "strategy-content" }, Ay = { class: "strategy-label" }, Fy = { class: "strategy-description" }, Vy = { class: "config-field switch-field" }, Wy = { class: "switch-label" }, jy = ["checked"], Gy = { class: "advanced-section" }, Hy = { class: "advanced-content" }, qy = { class: "config-field" }, Ky = ["value"], Jy = ["value"], Yy = /* @__PURE__ */ ee({
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
    const n = t, i = c, h = $(!1), p = $(!1);
    _t(() => n.nameError, (g) => {
      h.value = !1, p.value = !g && n.name.length > 0;
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
    function r(g) {
      const w = g.target.value;
      i("update:name", w), p.value = !1, m && clearTimeout(m), w.length > 0 ? (h.value = !0, m = setTimeout(() => {
        i("validate-name", w);
      }, 400)) : h.value = !1;
    }
    function v() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (g, w) => (s(), o("div", Ey, [
      k(st, null, {
        default: l(() => [...w[2] || (w[2] = [
          y("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", My, [
        e("div", Ty, [
          k(Xt, { required: "" }, {
            default: l(() => [...w[3] || (w[3] = [
              y("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Ry, [
            e("input", {
              type: "text",
              class: de(["name-input", { error: t.nameError || t.name.length === 0, valid: p.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: r,
              onBlur: v
            }, null, 42, zy),
            h.value ? (s(), o("span", Ly, "...")) : p.value ? (s(), o("span", Py, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", Dy, a(t.nameError), 1)) : d("", !0),
          w[4] || (w[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Ny, [
          k(Xt, null, {
            default: l(() => [...w[5] || (w[5] = [
              y("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Uy, [
            (s(), o(F, null, ne(u, (b) => e("label", {
              key: b.value,
              class: de(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: (C) => i("update:modelStrategy", b.value)
              }, null, 40, Oy),
              e("div", By, [
                e("span", Ay, a(b.label), 1),
                e("span", Fy, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Vy, [
          e("label", Wy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: w[0] || (w[0] = (b) => i("update:switchAfterImport", b.target.checked))
            }, null, 40, jy),
            w[6] || (w[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", Gy, [
          w[8] || (w[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", Hy, [
            e("div", qy, [
              k(Xt, null, {
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
                (s(!0), o(F, null, ne(_e(gs), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, Jy))), 128))
              ], 40, Ky)
            ])
          ])
        ])
      ])
    ]));
  }
}), Xy = /* @__PURE__ */ te(Yy, [["__scopeId", "data-v-89ea06a1"]]), Qy = { class: "import-flow" }, Zy = {
  key: 0,
  class: "import-empty"
}, e0 = { class: "git-import-section" }, t0 = { class: "git-url-input-row" }, s0 = ["disabled"], o0 = {
  key: 0,
  class: "git-error"
}, n0 = {
  key: 1,
  class: "import-configure"
}, a0 = { class: "selected-file-bar" }, l0 = {
  key: 0,
  class: "file-bar-content"
}, i0 = { class: "file-bar-info" }, r0 = { class: "file-bar-name" }, d0 = { class: "file-bar-size" }, c0 = {
  key: 1,
  class: "file-bar-content"
}, u0 = { class: "file-bar-info" }, m0 = { class: "file-bar-name" }, v0 = {
  key: 0,
  class: "preview-loading"
}, f0 = { class: "import-actions" }, g0 = {
  key: 2,
  class: "import-progress"
}, p0 = { class: "creating-intro" }, h0 = {
  key: 0,
  class: "progress-warning"
}, y0 = {
  key: 1,
  class: "import-error"
}, w0 = { class: "error-message" }, k0 = {
  key: 3,
  class: "import-complete"
}, b0 = { class: "complete-message" }, _0 = { class: "complete-title" }, $0 = { class: "complete-details" }, C0 = { class: "complete-actions" }, x0 = /* @__PURE__ */ ee({
  __name: "ImportFlow",
  props: {
    workspacePath: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { previewTarballImport: h, previewGitImport: p, validateEnvironmentName: u, executeImport: m, executeGitImport: r, getImportProgress: v } = Fe();
    let g = null;
    const w = $(null), b = $(!1), C = $(!1), T = $(!1), O = $(""), f = $(!1), _ = $(null), L = $(""), M = $(null), x = $(!1), K = $(null), V = $(null), q = $({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), z = $(null), S = $({
      message: "Preparing import...",
      phase: "",
      progress: 0,
      error: null
    }), P = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], X = U(() => {
      if (!V.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ce = V.value;
      return {
        sourceEnvironment: ce.comfyui_version ? `ComfyUI ${ce.comfyui_version}` : "Unknown",
        workflows: ce.workflows.map((ie) => ie.name),
        models: ce.models.map((ie) => ({
          filename: ie.filename,
          size: 0,
          type: ie.relative_path.split("/")[0] || "model"
        })),
        nodes: ce.nodes.map((ie) => ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), Q = U(() => !f.value && !_.value && V.value && q.value.name.length > 0 && !z.value && (w.value || M.value));
    async function J(ce) {
      w.value = ce, f.value = !0, _.value = null, V.value = null;
      try {
        const ie = await h(ce);
        V.value = ie;
      } catch (ie) {
        _.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        f.value = !1;
      }
    }
    function re() {
      w.value = null, M.value = null, L.value = "", K.value = null, C.value = !1, T.value = !1, O.value = "", V.value = null, _.value = null, q.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, z.value = null, i("source-cleared");
    }
    function H() {
      Ee(), re(), b.value = !1, f.value = !1, x.value = !1, S.value = {
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
          const ce = await p(L.value.trim());
          M.value = L.value.trim(), V.value = ce;
        } catch (ce) {
          K.value = ce instanceof Error ? ce.message : "Failed to analyze repository";
        } finally {
          x.value = !1;
        }
      }
    }
    function N(ce) {
      try {
        const ie = new URL(ce);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return ce;
      }
    }
    async function I(ce) {
      if (!ce) {
        z.value = "Environment name is required";
        return;
      }
      try {
        const ie = await u(ce);
        z.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        z.value = "Failed to validate name";
      }
    }
    async function le() {
      if (q.value.name && !(!w.value && !M.value)) {
        b.value = !0, C.value = !1, S.value = { message: `Creating environment '${q.value.name}'...`, phase: "", progress: 0, error: null }, i("import-started");
        try {
          let ce;
          if (w.value)
            ce = await m(
              w.value,
              q.value.name,
              q.value.modelStrategy,
              q.value.torchBackend
            );
          else if (M.value)
            ce = await r(
              M.value,
              q.value.name,
              q.value.modelStrategy,
              q.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ce.status === "started" ? se() : (T.value = !1, O.value = ce.message, b.value = !1, C.value = !0);
        } catch (ce) {
          T.value = !1, O.value = ce instanceof Error ? ce.message : "Unknown error occurred during import", b.value = !1, C.value = !0;
        }
      }
    }
    function se() {
      g || (g = setInterval(async () => {
        try {
          const ce = await v();
          S.value = {
            message: ce.message,
            phase: ce.phase || "",
            progress: ce.progress ?? (ce.state === "importing" ? 50 : 0),
            error: ce.error || null
          }, ce.state === "complete" ? (Ee(), T.value = !0, O.value = `Environment '${ce.environment_name}' created successfully`, b.value = !1, C.value = !0, ce.environment_name && i("import-complete", ce.environment_name, q.value.switchAfterImport)) : ce.state === "error" && (Ee(), T.value = !1, O.value = ce.error || ce.message, b.value = !1, C.value = !0);
        } catch (ce) {
          console.error("Failed to poll import progress:", ce);
        }
      }, 2e3));
    }
    function Ee() {
      g && (clearInterval(g), g = null);
    }
    function ye(ce) {
      return ce < 1024 ? `${ce} B` : ce < 1024 * 1024 ? `${(ce / 1024).toFixed(1)} KB` : ce < 1024 * 1024 * 1024 ? `${(ce / (1024 * 1024)).toFixed(1)} MB` : `${(ce / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return c({
      handleReset: H,
      isImporting: b,
      canImport: Q
    }), (ce, ie) => {
      var ue;
      return s(), o("div", Qy, [
        !w.value && !M.value && !b.value ? (s(), o("div", Zy, [
          k(Y1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: J
          }),
          ie[7] || (ie[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", e0, [
            ie[5] || (ie[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", t0, [
              Ue(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (fe) => L.value = fe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ht(D, ["enter"]),
                disabled: x.value
              }, null, 40, s0), [
                [Rt, L.value]
              ]),
              k(ae, {
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
            K.value ? (s(), o("div", o0, a(K.value), 1)) : d("", !0),
            ie[6] || (ie[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || M.value) && !b.value && !C.value ? (s(), o("div", n0, [
          e("div", a0, [
            w.value ? (s(), o("div", l0, [
              ie[8] || (ie[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", i0, [
                e("div", r0, a(w.value.name), 1),
                e("div", d0, a(ye(w.value.size)), 1)
              ])
            ])) : M.value ? (s(), o("div", c0, [
              ie[10] || (ie[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", u0, [
                e("div", m0, a(N(M.value)), 1),
                ie[9] || (ie[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : d("", !0),
            k(ae, {
              variant: "ghost",
              size: "sm",
              onClick: re
            }, {
              default: l(() => [...ie[11] || (ie[11] = [
                y(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          f.value ? (s(), o("div", v0, [...ie[12] || (ie[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : _.value ? (s(), E(at, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [_.value]
          }, null, 8, ["details"])) : V.value ? (s(), E(Iy, {
            key: 2,
            "source-environment": X.value.sourceEnvironment,
            workflows: X.value.workflows,
            models: X.value.models,
            nodes: X.value.nodes,
            "git-branch": X.value.gitBranch,
            "git-commit": X.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
          V.value ? (s(), E(Xy, {
            key: 3,
            name: q.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (fe) => q.value.name = fe),
            "model-strategy": q.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (fe) => q.value.modelStrategy = fe),
            "torch-backend": q.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (fe) => q.value.torchBackend = fe),
            "switch-after-import": q.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (fe) => q.value.switchAfterImport = fe),
            "name-error": z.value,
            onValidateName: I
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
          q.value.modelStrategy === "skip" && ((ue = V.value) != null && ue.models_needing_download) ? (s(), E(at, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${V.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", f0, [
            k(ae, {
              variant: "secondary",
              size: "md",
              onClick: re
            }, {
              default: l(() => [...ie[13] || (ie[13] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ae, {
              variant: "primary",
              size: "md",
              disabled: !Q.value,
              onClick: le
            }, {
              default: l(() => [...ie[14] || (ie[14] = [
                y(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : b.value ? (s(), o("div", g0, [
          e("p", p0, [
            ie[15] || (ie[15] = y(" Importing environment ", -1)),
            e("strong", null, a(q.value.name), 1),
            ie[16] || (ie[16] = y("... ", -1))
          ]),
          k(ts, {
            progress: S.value.progress,
            message: S.value.message,
            "current-phase": S.value.phase,
            variant: S.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          S.value.error ? d("", !0) : (s(), o("p", h0, " This may take several minutes. Please wait... ")),
          S.value.error ? (s(), o("div", y0, [
            e("p", w0, a(S.value.error), 1)
          ])) : d("", !0)
        ])) : C.value ? (s(), o("div", k0, [
          e("div", {
            class: de(["complete-icon", T.value ? "success" : "error"])
          }, a(T.value ? "✓" : "✕"), 3),
          e("div", b0, [
            e("div", _0, a(T.value ? "Import Successful" : "Import Failed"), 1),
            e("div", $0, a(O.value), 1)
          ]),
          e("div", C0, [
            k(ae, {
              variant: "primary",
              size: "md",
              onClick: H
            }, {
              default: l(() => [...ie[17] || (ie[17] = [
                y(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), qs = /* @__PURE__ */ te(x0, [["__scopeId", "data-v-7bae3f2a"]]), S0 = /* @__PURE__ */ ee({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = $(!1);
    function h(p, u) {
      u && n("import-complete-switch", p);
    }
    return (p, u) => (s(), o(F, null, [
      k(Je, null, {
        header: l(() => [
          k(Ye, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (m) => i.value = !0)
          })
        ]),
        content: l(() => [
          k(qs, { onImportComplete: h })
        ]),
        _: 1
      }),
      k(mt, {
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
}), I0 = /* @__PURE__ */ te(S0, [["__scopeId", "data-v-e13bfe76"]]), E0 = { class: "header-info" }, M0 = { class: "commit-hash" }, T0 = {
  key: 0,
  class: "commit-refs"
}, R0 = { class: "commit-message" }, z0 = { class: "commit-date" }, L0 = {
  key: 0,
  class: "loading"
}, P0 = {
  key: 1,
  class: "changes-section"
}, D0 = { class: "stats-row" }, N0 = { class: "stat" }, U0 = { class: "stat insertions" }, O0 = { class: "stat deletions" }, B0 = {
  key: 0,
  class: "change-group"
}, A0 = {
  key: 1,
  class: "change-group"
}, F0 = {
  key: 0,
  class: "version"
}, V0 = {
  key: 2,
  class: "change-group"
}, W0 = { class: "change-item" }, j0 = /* @__PURE__ */ ee({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Fe(), i = $(null), h = $(!0), p = U(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), u = U(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Be(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (m, r) => (s(), E(Xe, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (v) => m.$emit("close"))
    }, {
      header: l(() => {
        var v, g, w, b;
        return [
          e("div", E0, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", M0, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((g = t.commit.hash) == null ? void 0 : g.slice(0, 7))), 1),
            (b = (w = i.value) == null ? void 0 : w.refs) != null && b.length ? (s(), o("span", T0, [
              (s(!0), o(F, null, ne(i.value.refs, (C) => (s(), o("span", {
                key: C,
                class: "ref-badge"
              }, a(C), 1))), 128))
            ])) : d("", !0)
          ]),
          k(ge, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (C) => m.$emit("close"))
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
        var v, g;
        return [
          e("div", R0, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", z0, a(((g = i.value) == null ? void 0 : g.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (s(), o("div", L0, "Loading details...")) : i.value ? (s(), o("div", P0, [
            e("div", D0, [
              e("span", N0, a(i.value.stats.files_changed) + " files", 1),
              e("span", U0, "+" + a(i.value.stats.insertions), 1),
              e("span", O0, "-" + a(i.value.stats.deletions), 1)
            ]),
            p.value ? (s(), o("div", B0, [
              k(Vt, { variant: "section" }, {
                default: l(() => [...r[6] || (r[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, ne(i.value.changes.workflows.added, (w) => (s(), o("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(F, null, ne(i.value.changes.workflows.modified, (w) => (s(), o("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(F, null, ne(i.value.changes.workflows.deleted, (w) => (s(), o("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w), 1)
              ]))), 128))
            ])) : d("", !0),
            u.value ? (s(), o("div", A0, [
              k(Vt, { variant: "section" }, {
                default: l(() => [...r[10] || (r[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, ne(i.value.changes.nodes.added, (w) => (s(), o("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w.name), 1),
                w.version ? (s(), o("span", F0, "(" + a(w.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(F, null, ne(i.value.changes.nodes.removed, (w) => (s(), o("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", V0, [
              k(Vt, { variant: "section" }, {
                default: l(() => [...r[13] || (r[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", W0, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => [
        k(ge, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...r[15] || (r[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(ge, {
          variant: "primary",
          onClick: r[2] || (r[2] = (v) => m.$emit("checkout", t.commit))
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
}), G0 = /* @__PURE__ */ te(j0, [["__scopeId", "data-v-d256ff6d"]]), H0 = { class: "base-textarea-wrapper" }, q0 = ["value", "rows", "placeholder", "disabled", "maxlength"], K0 = {
  key: 0,
  class: "base-textarea-count"
}, J0 = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), o("div", H0, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = ht(Le((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = ht(Le((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, q0),
      t.showCharCount && t.maxLength ? (s(), o("div", K0, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), Es = /* @__PURE__ */ te(J0, [["__scopeId", "data-v-5516e6fc"]]), Y0 = ["checked", "disabled"], X0 = { class: "base-checkbox-box" }, Q0 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Z0 = {
  key: 0,
  class: "base-checkbox-label"
}, ew = /* @__PURE__ */ ee({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: de(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, Y0),
      e("span", X0, [
        t.modelValue ? (s(), o("svg", Q0, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Z0, [
        $e(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ms = /* @__PURE__ */ te(ew, [["__scopeId", "data-v-bf17c831"]]), tw = { class: "popover-header" }, sw = { class: "popover-body" }, ow = {
  key: 0,
  class: "changes-summary"
}, nw = {
  key: 0,
  class: "change-item"
}, aw = {
  key: 1,
  class: "change-item"
}, lw = {
  key: 2,
  class: "change-item"
}, iw = {
  key: 3,
  class: "change-item"
}, rw = {
  key: 4,
  class: "change-item"
}, dw = {
  key: 5,
  class: "change-item"
}, cw = {
  key: 1,
  class: "no-changes"
}, uw = {
  key: 2,
  class: "loading"
}, mw = {
  key: 3,
  class: "issues-error"
}, vw = { class: "error-header" }, fw = { class: "error-title" }, gw = { class: "issues-list" }, pw = { class: "message-section" }, hw = { class: "popover-footer" }, yw = {
  key: 1,
  class: "commit-popover"
}, ww = { class: "popover-header" }, kw = { class: "popover-body" }, bw = {
  key: 0,
  class: "changes-summary"
}, _w = {
  key: 0,
  class: "change-item"
}, $w = {
  key: 1,
  class: "change-item"
}, Cw = {
  key: 2,
  class: "change-item"
}, xw = {
  key: 3,
  class: "change-item"
}, Sw = {
  key: 4,
  class: "change-item"
}, Iw = {
  key: 5,
  class: "change-item"
}, Ew = {
  key: 1,
  class: "no-changes"
}, Mw = {
  key: 2,
  class: "loading"
}, Tw = {
  key: 3,
  class: "issues-error"
}, Rw = { class: "error-header" }, zw = { class: "error-title" }, Lw = { class: "issues-list" }, Pw = { class: "message-section" }, Dw = { class: "popover-footer" }, Nw = /* @__PURE__ */ ee({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: h } = Fe(), p = $(""), u = $(!1), m = $(!1), r = $(null), v = U(() => {
      if (!n.status) return !1;
      const O = n.status.workflows;
      return O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || n.status.has_changes;
    }), g = U(() => {
      if (!n.status) return !1;
      const O = n.status.workflows, f = n.status.git_changes;
      return O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || f.nodes_added.length > 0 || f.nodes_removed.length > 0;
    }), w = U(() => {
      var O;
      return (O = n.status) != null && O.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (f) => f.has_issues && (f.sync_state === "new" || f.sync_state === "modified")
      ) : [];
    }), b = U(() => w.value.length > 0), C = U(() => b.value && !m.value);
    async function T() {
      var O, f, _;
      if (!(b.value && !m.value) && !(!v.value || !p.value.trim() || u.value)) {
        u.value = !0, r.value = null;
        try {
          const L = await h(p.value.trim(), m.value);
          L.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((O = L.summary) == null ? void 0 : O.new) || 0} new, ${((f = L.summary) == null ? void 0 : f.modified) || 0} modified, ${((_ = L.summary) == null ? void 0 : _.deleted) || 0} deleted`
          }, p.value = "", m.value = !1, setTimeout(() => i("committed"), 1e3)) : L.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : L.status === "blocked" ? r.value = {
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
    return (O, f) => t.asModal ? (s(), E(je, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: f[5] || (f[5] = (_) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: f[4] || (f[4] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", tw, [
            f[11] || (f[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: f[0] || (f[0] = (_) => i("close"))
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
          e("div", sw, [
            t.status && v.value ? (s(), o("div", ow, [
              t.status.workflows.new.length ? (s(), o("div", nw, [
                f[12] || (f[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", aw, [
                f[13] || (f[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", lw, [
                f[14] || (f[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", iw, [
                f[15] || (f[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", rw, [
                f[16] || (f[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              g.value ? d("", !0) : (s(), o("div", dw, [...f[17] || (f[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", cw, " No changes to commit ")) : (s(), o("div", uw, " Loading... ")),
            b.value ? (s(), o("div", mw, [
              e("div", vw, [
                f[18] || (f[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", fw, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", gw, [
                (s(!0), o(F, null, ne(w.value, (_) => (s(), o("div", {
                  key: _.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(_.name), 1),
                  y(": " + a(_.issue_summary), 1)
                ]))), 128))
              ]),
              k(Ms, {
                modelValue: m.value,
                "onUpdate:modelValue": f[1] || (f[1] = (_) => m.value = _),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...f[19] || (f[19] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", pw, [
              k(Es, {
                modelValue: p.value,
                "onUpdate:modelValue": f[2] || (f[2] = (_) => p.value = _),
                placeholder: C.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || u.value || C.value,
                rows: 3,
                onCtrlEnter: T
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (s(), o("div", {
              key: 4,
              class: de(["result", r.value.type])
            }, a(r.value.message), 3)) : d("", !0)
          ]),
          e("div", hw, [
            k(ge, {
              variant: "secondary",
              onClick: f[3] || (f[3] = (_) => i("close"))
            }, {
              default: l(() => [...f[20] || (f[20] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ge, {
              variant: m.value ? "danger" : "primary",
              disabled: !v.value || !p.value.trim() || u.value || C.value,
              loading: u.value,
              onClick: T
            }, {
              default: l(() => [
                y(a(u.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", yw, [
      e("div", ww, [
        f[22] || (f[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: f[6] || (f[6] = (_) => i("close"))
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
      e("div", kw, [
        t.status && v.value ? (s(), o("div", bw, [
          t.status.workflows.new.length ? (s(), o("div", _w, [
            f[23] || (f[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", $w, [
            f[24] || (f[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Cw, [
            f[25] || (f[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", xw, [
            f[26] || (f[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Sw, [
            f[27] || (f[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          g.value ? d("", !0) : (s(), o("div", Iw, [...f[28] || (f[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", Ew, " No changes to commit ")) : (s(), o("div", Mw, " Loading... ")),
        b.value ? (s(), o("div", Tw, [
          e("div", Rw, [
            f[29] || (f[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", zw, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", Lw, [
            (s(!0), o(F, null, ne(w.value, (_) => (s(), o("div", {
              key: _.name,
              class: "issue-item"
            }, [
              e("strong", null, a(_.name), 1),
              y(": " + a(_.issue_summary), 1)
            ]))), 128))
          ]),
          k(Ms, {
            modelValue: m.value,
            "onUpdate:modelValue": f[7] || (f[7] = (_) => m.value = _),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...f[30] || (f[30] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", Pw, [
          k(Es, {
            modelValue: p.value,
            "onUpdate:modelValue": f[8] || (f[8] = (_) => p.value = _),
            placeholder: C.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || u.value || C.value,
            rows: 3,
            onCtrlEnter: T
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (s(), o("div", {
          key: 4,
          class: de(["result", r.value.type])
        }, a(r.value.message), 3)) : d("", !0)
      ]),
      e("div", Dw, [
        k(ge, {
          variant: "secondary",
          onClick: f[9] || (f[9] = (_) => i("close"))
        }, {
          default: l(() => [...f[31] || (f[31] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(ge, {
          variant: m.value ? "danger" : "primary",
          disabled: !v.value || !p.value.trim() || u.value || C.value,
          loading: u.value,
          onClick: T
        }, {
          default: l(() => [
            y(a(u.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ks = /* @__PURE__ */ te(Nw, [["__scopeId", "data-v-aa2a9bdf"]]), Uw = { class: "modal-header" }, Ow = { class: "modal-body" }, Bw = { class: "switch-message" }, Aw = { class: "switch-details" }, Fw = { class: "modal-actions" }, Vw = /* @__PURE__ */ ee({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), E(je, { to: "body" }, [
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
          e("div", Uw, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Ow, [
            e("p", Bw, [
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
            e("p", Aw, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Fw, [
            k(ae, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ae, {
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
}), Ww = /* @__PURE__ */ te(Vw, [["__scopeId", "data-v-e9c5253e"]]), jw = {
  key: 0,
  class: "modal-overlay"
}, Gw = { class: "modal-content" }, Hw = { class: "modal-body" }, qw = { class: "progress-info" }, Kw = { class: "progress-percentage" }, Jw = { class: "progress-state" }, Yw = { class: "switch-steps" }, Xw = { class: "step-icon" }, Qw = { class: "step-label" }, Zw = /* @__PURE__ */ ee({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = U(() => {
      const p = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return c.message || p[c.state] || c.state;
    }), i = U(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), h = U(() => {
      const p = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = p.findIndex((m) => m.state === c.state);
      return p.map((m, r) => {
        let v = "pending", g = "○";
        return r < u ? (v = "completed", g = "✓") : r === u && (v = "active", g = "⟳"), {
          ...m,
          status: v,
          icon: g
        };
      });
    });
    return (p, u) => (s(), E(je, { to: "body" }, [
      t.show ? (s(), o("div", jw, [
        e("div", Gw, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Hw, [
            k(Hs, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", qw, [
              e("div", Kw, a(t.progress) + "%", 1),
              e("div", Jw, a(n.value), 1)
            ]),
            e("div", Yw, [
              (s(!0), o(F, null, ne(h.value, (m) => (s(), o("div", {
                key: m.state,
                class: de(["switch-step", m.status])
              }, [
                e("span", Xw, a(m.icon), 1),
                e("span", Qw, a(m.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), ek = /* @__PURE__ */ te(Zw, [["__scopeId", "data-v-768a5078"]]), tk = { class: "modal-header" }, sk = { class: "modal-body" }, ok = {
  key: 0,
  class: "node-section"
}, nk = { class: "node-list" }, ak = {
  key: 1,
  class: "node-section"
}, lk = { class: "node-list" }, ik = { class: "modal-actions" }, rk = /* @__PURE__ */ ee({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), E(je, { to: "body" }, [
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
          e("div", tk, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", sk, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", ok, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", nk, [
                (s(!0), o(F, null, ne(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", ak, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", lk, [
                (s(!0), o(F, null, ne(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
          e("div", ik, [
            k(ae, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ae, {
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
}), dk = /* @__PURE__ */ te(rk, [["__scopeId", "data-v-7cad7518"]]), ck = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsModal",
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = $(null);
    async function i() {
      var p;
      await ((p = n.value) == null ? void 0 : p.saveSettings());
    }
    function h() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (p, u) => (s(), E(Xe, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (m) => p.$emit("close"))
    }, {
      body: l(() => [
        k(Vs, {
          ref_key: "contentRef",
          ref: n,
          onSaved: h
        }, null, 512)
      ]),
      footer: l(() => {
        var m;
        return [
          k(ge, {
            variant: "primary",
            disabled: !((m = n.value) != null && m.hasChanges),
            onClick: i
          }, {
            default: l(() => [...u[2] || (u[2] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(ge, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (r) => p.$emit("close"))
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
}), uk = /* @__PURE__ */ te(ck, [["__scopeId", "data-v-f8db9dee"]]), mk = { class: "header-actions" }, vk = {
  key: 0,
  class: "wizard-steps"
}, fk = { class: "step-number" }, gk = {
  key: 1,
  class: "wizard-steps wizard-steps--single"
}, pk = {
  key: 2,
  class: "wizard-step"
}, hk = { class: "form-field" }, yk = ["placeholder"], wk = {
  key: 0,
  class: "form-error"
}, kk = { class: "form-field form-field--checkbox" }, bk = { class: "form-checkbox" }, _k = {
  key: 0,
  class: "form-field"
}, $k = ["placeholder"], Ck = {
  key: 0,
  class: "form-info"
}, xk = {
  key: 1,
  class: "form-suggestion"
}, Sk = {
  key: 2,
  class: "form-error"
}, Ik = {
  key: 3,
  class: "form-info"
}, Ek = {
  key: 3,
  class: "wizard-step"
}, Mk = {
  key: 0,
  class: "cli-warning"
}, Tk = {
  key: 1,
  class: "env-landing"
}, Rk = { class: "env-list" }, zk = ["value"], Lk = { class: "env-name" }, Pk = {
  key: 2,
  class: "env-create"
}, Dk = { class: "form-field" }, Nk = { class: "form-field" }, Uk = ["value"], Ok = { class: "form-field" }, Bk = ["disabled"], Ak = ["value"], Fk = { class: "form-field" }, Vk = ["value"], Wk = { class: "form-field form-field--checkbox" }, jk = { class: "form-checkbox" }, Gk = {
  key: 1,
  class: "form-error"
}, Hk = {
  key: 3,
  class: "env-import"
}, Mt = 10, qk = 600 * 1e3, Ts = 1800 * 1e3, Kk = /* @__PURE__ */ ee({
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
      initializeWorkspace: h,
      getInitializeProgress: p,
      validatePath: u,
      createEnvironment: m,
      getCreateProgress: r,
      getComfyUIReleases: v
    } = Fe(), g = $(n.initialStep || 1), w = $(null), b = $("landing"), C = $(!1), T = $(!1), O = $(n.defaultPath), f = $(!!n.detectedModelsDir), _ = $(n.detectedModelsDir || ""), L = $(null), M = $(null), x = $(null), K = $(null), V = $("my-new-env"), q = $(js), z = $("latest"), S = $(Gs), P = $(!0), X = $(null), Q = $(null), J = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), re = $(!1), H = $(!1), D = $(!1), N = $({ progress: 0, message: "" }), I = $({ progress: 0, message: "" }), le = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], se = $(0), Ee = $(null), ye = $(0), ce = $(null), ie = U(() => {
      var Z, ze;
      const he = (Z = O.value) == null ? void 0 : Z.trim(), j = !L.value, Me = !f.value || !M.value && ((ze = _.value) == null ? void 0 : ze.trim());
      return he && j && Me;
    }), ue = U(() => {
      var he;
      return (he = V.value) == null ? void 0 : he.trim();
    });
    async function fe() {
      var he;
      if (L.value = null, !!((he = O.value) != null && he.trim()))
        try {
          const j = await u({ path: O.value, type: "workspace" });
          j.valid || (L.value = j.error || "Invalid path");
        } catch (j) {
          L.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function Ae() {
      var he;
      if (M.value = null, x.value = null, K.value = null, !!((he = _.value) != null && he.trim()))
        try {
          const j = await u({ path: _.value, type: "models" });
          if (j.valid)
            K.value = j.model_count ?? null;
          else if (M.value = j.error || "Invalid path", j.suggestion) {
            x.value = j.suggestion, _.value = j.suggestion, M.value = null;
            const Me = await u({ path: j.suggestion, type: "models" });
            Me.valid && (K.value = Me.model_count ?? null);
          }
        } catch (j) {
          M.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function Re() {
      var he, j, Me, Z, ze;
      if (L.value = null, M.value = null, await fe(), (he = L.value) != null && he.includes("already exists")) {
        L.value = null, Q.value = ((j = O.value) == null ? void 0 : j.trim()) || n.defaultPath, g.value = 2, Ve();
        return;
      }
      if (!L.value && !(f.value && ((Me = _.value) != null && Me.trim()) && (await Ae(), M.value))) {
        H.value = !0;
        try {
          await h({
            workspace_path: ((Z = O.value) == null ? void 0 : Z.trim()) || n.defaultPath,
            models_directory: f.value && ((ze = _.value) == null ? void 0 : ze.trim()) || null
          }), se.value = 0, Ee.value = Date.now();
          const We = setInterval(async () => {
            var He;
            if (Ee.value && Date.now() - Ee.value > qk) {
              clearInterval(We), H.value = !1, L.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Te = await p();
              if (se.value = 0, Te.state === "idle" && H.value) {
                clearInterval(We), H.value = !1, L.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              N.value = { progress: Te.progress, message: Te.message }, Te.state === "complete" ? (clearInterval(We), H.value = !1, Q.value = ((He = O.value) == null ? void 0 : He.trim()) || n.defaultPath, g.value = 2, Ve()) : Te.state === "error" && (clearInterval(We), H.value = !1, L.value = Te.error || "Workspace creation failed");
            } catch (Te) {
              se.value++, console.warn(`Polling failure ${se.value}/${Mt}:`, Te), se.value >= Mt && (clearInterval(We), H.value = !1, L.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (We) {
          H.value = !1, L.value = We instanceof Error ? We.message : "Failed to create workspace";
        }
      }
    }
    async function ve() {
      D.value = !0, X.value = null;
      try {
        const he = {
          name: V.value.trim() || "my-new-env",
          python_version: q.value,
          comfyui_version: z.value,
          torch_backend: S.value,
          switch_after: P.value,
          workspace_path: Q.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await m(he)).status === "started") {
          ye.value = 0, ce.value = Date.now();
          const Me = setInterval(async () => {
            if (ce.value && Date.now() - ce.value > Ts) {
              clearInterval(Me), D.value = !1, X.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Z = await r();
              if (ye.value = 0, Z.state === "idle" && D.value) {
                clearInterval(Me), D.value = !1, X.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (I.value = {
                progress: Z.progress ?? 0,
                message: Z.message,
                phase: Z.phase
              }, Z.state === "complete") {
                clearInterval(Me), D.value = !1;
                const ze = Z.environment_name || he.name;
                P.value ? i("complete", ze, Q.value) : (b.value = "landing", i("environment-created-no-switch", ze));
              } else Z.state === "error" && (clearInterval(Me), D.value = !1, X.value = Z.error || "Environment creation failed");
            } catch (Z) {
              ye.value++, console.warn(`Polling failure ${ye.value}/${Mt}:`, Z), ye.value >= Mt && (clearInterval(Me), D.value = !1, X.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (he) {
        D.value = !1, X.value = he instanceof Error ? he.message : "Unknown error";
      }
    }
    async function Ve() {
      re.value = !0;
      try {
        J.value = await v();
      } catch (he) {
        console.error("Failed to load ComfyUI releases:", he);
      } finally {
        re.value = !1;
      }
    }
    function Se() {
      w.value && i("switch-environment", w.value, Q.value);
    }
    function ot() {
      b.value === "create" || b.value === "import" ? b.value = "landing" : g.value === 2 && n.setupState === "no_workspace" && (g.value = 1);
    }
    function dt(he, j) {
      T.value = !1, j ? i("complete", he, Q.value) : (i("environment-created-no-switch", he), b.value = "landing");
    }
    function vt() {
    }
    Be(async () => {
      n.detectedModelsDir && (_.value = n.detectedModelsDir), n.workspacePath && (Q.value = n.workspacePath), g.value === 2 && (Ve(), await xe());
    });
    async function xe() {
      try {
        const he = await r();
        he.state === "creating" && (console.log("[ComfyGit] Resuming in-progress environment creation:", he.environment_name), b.value = "create", D.value = !0, V.value = he.environment_name || "my-new-env", I.value = {
          progress: he.progress ?? 0,
          message: he.message,
          phase: he.phase
        }, et());
      } catch {
        console.debug("[ComfyGit] No environment creation in progress");
      }
    }
    function et() {
      ye.value = 0, ce.value = Date.now();
      const he = setInterval(async () => {
        if (ce.value && Date.now() - ce.value > Ts) {
          clearInterval(he), D.value = !1, X.value = "Environment creation timed out. Check server logs for details.";
          return;
        }
        try {
          const j = await r();
          if (ye.value = 0, j.state === "idle" && D.value) {
            clearInterval(he), D.value = !1, X.value = "Environment creation was interrupted. Please try again.";
            return;
          }
          if (I.value = {
            progress: j.progress ?? 0,
            message: j.message,
            phase: j.phase
          }, j.state === "complete") {
            clearInterval(he), D.value = !1;
            const Me = j.environment_name || V.value;
            i("complete", Me, Q.value);
          } else j.state === "error" && (clearInterval(he), D.value = !1, X.value = j.error || "Environment creation failed");
        } catch (j) {
          ye.value++, console.warn(`Polling failure ${ye.value}/${Mt}:`, j), ye.value >= Mt && (clearInterval(he), D.value = !1, X.value = "Lost connection to server. Please refresh and try again.");
        }
      }, 2e3);
    }
    return (he, j) => (s(), o(F, null, [
      k(Xe, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: j[14] || (j[14] = (Me) => he.$emit("close"))
      }, {
        header: l(() => [
          j[18] || (j[18] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", mk, [
            g.value === 2 && Q.value ? (s(), o("button", {
              key: 0,
              class: "settings-btn",
              title: "Workspace Settings",
              onClick: j[0] || (j[0] = (Me) => C.value = !0)
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
              onClick: j[1] || (j[1] = (Me) => he.$emit("close"))
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
          var Me;
          return [
            n.setupState === "no_workspace" ? (s(), o("div", vk, [
              e("div", {
                class: de(["step", { active: g.value === 1, complete: g.value > 1 }])
              }, [
                e("span", fk, a(g.value > 1 ? "✓" : "1"), 1),
                j[19] || (j[19] = e("span", { class: "step-label" }, "Workspace", -1))
              ], 2),
              j[21] || (j[21] = e("div", { class: "step-connector" }, null, -1)),
              e("div", {
                class: de(["step", { active: g.value === 2 }])
              }, [...j[20] || (j[20] = [
                e("span", { class: "step-number" }, "2", -1),
                e("span", { class: "step-label" }, "Environment", -1)
              ])], 2)
            ])) : (s(), o("div", gk, [...j[22] || (j[22] = [
              e("div", { class: "step active" }, [
                e("span", { class: "step-number" }, "1"),
                e("span", { class: "step-label" }, "Environment")
              ], -1)
            ])])),
            g.value === 1 ? (s(), o("div", pk, [
              j[26] || (j[26] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", hk, [
                j[23] || (j[23] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": j[2] || (j[2] = (Z) => O.value = Z),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, yk), [
                  [Rt, O.value]
                ]),
                L.value ? (s(), o("p", wk, a(L.value), 1)) : d("", !0)
              ]),
              e("div", kk, [
                e("label", bk, [
                  Ue(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": j[3] || (j[3] = (Z) => f.value = Z)
                  }, null, 512), [
                    [Zt, f.value]
                  ]),
                  j[24] || (j[24] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              f.value ? (s(), o("div", _k, [
                j[25] || (j[25] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": j[4] || (j[4] = (Z) => _.value = Z),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, $k), [
                  [Rt, _.value]
                ]),
                t.detectedModelsDir && !_.value ? (s(), o("p", Ck, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
                x.value ? (s(), o("p", xk, " Did you mean: " + a(x.value), 1)) : d("", !0),
                M.value ? (s(), o("p", Sk, a(M.value), 1)) : d("", !0),
                K.value !== null && !M.value ? (s(), o("p", Ik, " Found " + a(K.value) + " model files ", 1)) : d("", !0)
              ])) : d("", !0),
              H.value ? (s(), E(ts, {
                key: 1,
                progress: N.value.progress,
                message: N.value.message
              }, null, 8, ["progress", "message"])) : d("", !0)
            ])) : d("", !0),
            g.value === 2 ? (s(), o("div", Ek, [
              n.cliInstalled ? d("", !0) : (s(), o("div", Mk, [...j[27] || (j[27] = [
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
              b.value === "landing" ? (s(), o("div", Tk, [
                j[31] || (j[31] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                e("button", {
                  class: "landing-option",
                  onClick: j[5] || (j[5] = (Z) => b.value = "create")
                }, [...j[28] || (j[28] = [
                  e("span", { class: "option-icon" }, "➕", -1),
                  e("div", { class: "option-content" }, [
                    e("span", { class: "option-title" }, "Create New Environment"),
                    e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                  ], -1),
                  e("span", { class: "option-arrow" }, "▸", -1)
                ])]),
                e("button", {
                  class: "landing-option",
                  onClick: j[6] || (j[6] = (Z) => b.value = "import")
                }, [...j[29] || (j[29] = [
                  e("span", { class: "option-icon" }, "📦", -1),
                  e("div", { class: "option-content" }, [
                    e("span", { class: "option-title" }, "Import Environment"),
                    e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                  ], -1),
                  e("span", { class: "option-arrow" }, "▸", -1)
                ])]),
                (Me = n.existingEnvironments) != null && Me.length ? (s(), o(F, { key: 0 }, [
                  j[30] || (j[30] = e("div", { class: "landing-divider" }, [
                    e("span", null, "or switch to existing")
                  ], -1)),
                  e("div", Rk, [
                    (s(!0), o(F, null, ne(n.existingEnvironments, (Z) => (s(), o("label", {
                      key: Z,
                      class: de(["env-option", { selected: w.value === Z }])
                    }, [
                      Ue(e("input", {
                        type: "radio",
                        name: "env-select",
                        value: Z,
                        "onUpdate:modelValue": j[7] || (j[7] = (ze) => w.value = ze)
                      }, null, 8, zk), [
                        [Yt, w.value]
                      ]),
                      e("span", Lk, a(Z), 1)
                    ], 2))), 128))
                  ]),
                  w.value ? (s(), E(ge, {
                    key: 0,
                    variant: "primary",
                    onClick: Se
                  }, {
                    default: l(() => [
                      y(" Switch to " + a(w.value), 1)
                    ]),
                    _: 1
                  })) : d("", !0)
                ], 64)) : d("", !0)
              ])) : b.value === "create" ? (s(), o("div", Pk, [
                j[37] || (j[37] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                e("div", Dk, [
                  j[32] || (j[32] = e("label", { class: "form-label" }, "Environment Name", -1)),
                  Ue(e("input", {
                    "onUpdate:modelValue": j[8] || (j[8] = (Z) => V.value = Z),
                    type: "text",
                    class: "form-input",
                    placeholder: "my-new-env"
                  }, null, 512), [
                    [Rt, V.value]
                  ])
                ]),
                e("div", Nk, [
                  j[33] || (j[33] = e("label", { class: "form-label" }, "Python Version", -1)),
                  Ue(e("select", {
                    "onUpdate:modelValue": j[9] || (j[9] = (Z) => q.value = Z),
                    class: "form-select"
                  }, [
                    (s(!0), o(F, null, ne(_e(Ws), (Z) => (s(), o("option", {
                      key: Z,
                      value: Z
                    }, a(Z), 9, Uk))), 128))
                  ], 512), [
                    [zt, q.value]
                  ])
                ]),
                e("div", Ok, [
                  j[34] || (j[34] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                  Ue(e("select", {
                    "onUpdate:modelValue": j[10] || (j[10] = (Z) => z.value = Z),
                    class: "form-select",
                    disabled: re.value
                  }, [
                    (s(!0), o(F, null, ne(J.value, (Z) => (s(), o("option", {
                      key: Z.tag_name,
                      value: Z.tag_name
                    }, a(Z.name), 9, Ak))), 128))
                  ], 8, Bk), [
                    [zt, z.value]
                  ])
                ]),
                e("div", Fk, [
                  j[35] || (j[35] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                  Ue(e("select", {
                    "onUpdate:modelValue": j[11] || (j[11] = (Z) => S.value = Z),
                    class: "form-select"
                  }, [
                    (s(!0), o(F, null, ne(_e(gs), (Z) => (s(), o("option", {
                      key: Z,
                      value: Z
                    }, a(Z) + a(Z === "auto" ? " (detect GPU)" : ""), 9, Vk))), 128))
                  ], 512), [
                    [zt, S.value]
                  ])
                ]),
                e("div", Wk, [
                  e("label", jk, [
                    Ue(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": j[12] || (j[12] = (Z) => P.value = Z)
                    }, null, 512), [
                      [Zt, P.value]
                    ]),
                    j[36] || (j[36] = e("span", null, "Switch to this environment after creation", -1))
                  ])
                ]),
                D.value ? (s(), E(ts, {
                  key: 0,
                  progress: I.value.progress,
                  message: I.value.message,
                  "current-phase": I.value.phase,
                  "show-steps": !0,
                  steps: le
                }, null, 8, ["progress", "message", "current-phase"])) : d("", !0),
                X.value ? (s(), o("div", Gk, a(X.value), 1)) : d("", !0)
              ])) : b.value === "import" ? (s(), o("div", Hk, [
                k(qs, {
                  "workspace-path": Q.value,
                  onImportComplete: dt,
                  onImportStarted: j[13] || (j[13] = (Z) => T.value = !0),
                  onSourceCleared: vt
                }, null, 8, ["workspace-path"])
              ])) : d("", !0)
            ])) : d("", !0)
          ];
        }),
        footer: l(() => [
          g.value === 1 ? (s(), E(ge, {
            key: 0,
            variant: "primary",
            disabled: !ie.value || H.value,
            onClick: Re
          }, {
            default: l(() => [
              y(a(H.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : g.value === 2 ? (s(), o(F, { key: 1 }, [
            !D.value && !T.value && (b.value !== "landing" || n.setupState === "no_workspace" && !Q.value) ? (s(), E(ge, {
              key: 0,
              variant: "secondary",
              onClick: ot
            }, {
              default: l(() => [...j[38] || (j[38] = [
                y(" Back ", -1)
              ])]),
              _: 1
            })) : d("", !0),
            b.value === "create" ? (s(), E(ge, {
              key: 1,
              variant: "primary",
              disabled: !ue.value || D.value,
              onClick: ve
            }, {
              default: l(() => [
                y(a(D.value ? "Creating..." : P.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : d("", !0)
          ], 64)) : d("", !0)
        ]),
        _: 1
      }),
      C.value ? (s(), E(uk, {
        key: 0,
        onClose: j[15] || (j[15] = (Me) => C.value = !1)
      })) : d("", !0)
    ], 64));
  }
}), Jk = /* @__PURE__ */ te(Kk, [["__scopeId", "data-v-e34f217d"]]), Yk = { class: "comfygit-panel" }, Xk = { class: "panel-header" }, Qk = { class: "header-left" }, Zk = {
  key: 0,
  class: "header-info"
}, eb = { class: "header-actions" }, tb = { class: "env-switcher" }, sb = {
  key: 0,
  class: "header-info"
}, ob = { class: "branch-name" }, nb = { class: "panel-main" }, ab = { class: "sidebar" }, lb = { class: "sidebar-content" }, ib = { class: "sidebar-section" }, rb = { class: "sidebar-section" }, db = { class: "sidebar-section" }, cb = { class: "content-area" }, ub = {
  key: 0,
  class: "error-message"
}, mb = {
  key: 1,
  class: "loading"
}, vb = { class: "dialog-content env-selector-dialog" }, fb = { class: "dialog-header" }, gb = { class: "dialog-body" }, pb = { class: "env-list" }, hb = { class: "env-info" }, yb = { class: "env-name-row" }, wb = { class: "env-indicator" }, kb = { class: "env-name" }, bb = {
  key: 0,
  class: "env-branch"
}, _b = {
  key: 1,
  class: "current-label"
}, $b = { class: "env-stats" }, Cb = ["onClick"], xb = { class: "toast-container" }, Sb = { class: "toast-message" }, Ib = /* @__PURE__ */ ee({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: h,
      getHistory: p,
      getBranches: u,
      checkout: m,
      createBranch: r,
      switchBranch: v,
      deleteBranch: g,
      getEnvironments: w,
      switchEnvironment: b,
      getSwitchProgress: C,
      deleteEnvironment: T,
      syncEnvironmentManually: O,
      repairWorkflowModels: f,
      getSetupStatus: _
    } = Fe(), L = Ns();
    function M(W) {
      window.open(W, "_blank", "noopener,noreferrer");
    }
    const x = $(null), K = $([]), V = $([]), q = $([]), z = U(() => q.value.find((W) => W.is_current)), S = $(null), P = $(!1), X = $(1), Q = U(() => {
      var W;
      return ((W = S.value) == null ? void 0 : W.state) || "managed";
    }), J = $(!1), re = $(null), H = $(null), D = $(!1), N = $(null), I = $(null), le = $(null), se = $(!1), Ee = $(!1), ye = $(""), ce = $(null), ie = $({ state: "idle", progress: 0, message: "" });
    let ue = null, fe = null;
    const Ae = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Re = n.initialView ? Ae[n.initialView] : null, ve = $((Re == null ? void 0 : Re.view) ?? "status"), Ve = $((Re == null ? void 0 : Re.section) ?? "this-env");
    function Se(W, R) {
      ve.value = W, Ve.value = R;
    }
    function ot(W) {
      const pe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      pe && Se(pe.view, pe.section);
    }
    function dt() {
      Se("branches", "this-env");
    }
    function vt() {
      i("close"), setTimeout(() => {
        var R;
        const W = document.querySelectorAll("button.comfyui-button");
        for (const pe of W)
          if (((R = pe.textContent) == null ? void 0 : R.trim()) === "Manager") {
            pe.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const xe = $(null), et = $(!1), he = $(!1), j = $([]);
    let Me = 0;
    function Z(W, R = "info", pe = 3e3) {
      const Ce = ++Me;
      return j.value.push({ id: Ce, message: W, type: R }), pe > 0 && setTimeout(() => {
        j.value = j.value.filter((De) => De.id !== Ce);
      }, pe), Ce;
    }
    function ze(W) {
      j.value = j.value.filter((R) => R.id !== W);
    }
    function We(W, R) {
      Z(W, R);
    }
    const He = U(() => {
      if (!x.value) return "neutral";
      const W = x.value.workflows, R = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    U(() => x.value ? He.value === "success" ? "All synced" : He.value === "warning" ? "Uncommitted changes" : He.value === "error" ? "Not synced" : "" : "");
    async function Te() {
      J.value = !0, re.value = null;
      try {
        const [W, R, pe, Ce] = await Promise.all([
          h(!0),
          p(),
          u(),
          w()
        ]);
        x.value = W, K.value = R.commits, V.value = pe.branches, q.value = Ce, i("statusUpdate", W), N.value && await N.value.loadWorkflows(!0);
      } catch (W) {
        re.value = W instanceof Error ? W.message : "Failed to load status", x.value = null, K.value = [], V.value = [];
      } finally {
        J.value = !1;
      }
    }
    function ft(W) {
      H.value = W;
    }
    async function Y(W) {
      var pe;
      H.value = null;
      const R = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      xe.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((pe = W.hash) == null ? void 0 : pe.slice(0, 7))}?`,
        details: R ? ks() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var Ge;
          xe.value = null, Qe();
          const Ce = Z(`Checking out ${W.short_hash || ((Ge = W.hash) == null ? void 0 : Ge.slice(0, 7))}...`, "info", 0), De = await m(W.hash, R);
          ze(Ce), De.status === "success" ? Z("Restarting ComfyUI...", "success") : Z(De.message || "Checkout failed", "error");
        }
      };
    }
    async function B(W) {
      const R = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      xe.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: R ? ks() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          xe.value = null, Qe();
          const pe = Z(`Switching to ${W}...`, "info", 0), Ce = await v(W, R);
          ze(pe), Ce.status === "success" ? Z("Restarting ComfyUI...", "success") : Z(Ce.message || "Branch switch failed", "error");
        }
      };
    }
    async function A(W) {
      const R = Z(`Creating branch ${W}...`, "info", 0), pe = await r(W);
      ze(R), pe.status === "success" ? (Z(`Branch "${W}" created`, "success"), await Te()) : Z(pe.message || "Failed to create branch", "error");
    }
    async function oe(W, R = !1) {
      const pe = async (Ce) => {
        var Ge;
        const De = Z(`Deleting branch ${W}...`, "info", 0);
        try {
          const pt = await g(W, Ce);
          ze(De), pt.status === "success" ? (Z(`Branch "${W}" deleted`, "success"), await Te()) : (Ge = pt.message) != null && Ge.includes("not fully merged") ? xe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              xe.value = null, await pe(!0);
            }
          } : Z(pt.message || "Failed to delete branch", "error");
        } catch (pt) {
          ze(De);
          const Dt = pt instanceof Error ? pt.message : "Failed to delete branch";
          Dt.includes("not fully merged") ? xe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              xe.value = null, await pe(!0);
            }
          } : Z(Dt, "error");
        }
      };
      xe.value = {
        title: "Delete Branch",
        message: `Delete branch "${W}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          xe.value = null, await pe(R);
        }
      };
    }
    async function be(W) {
      H.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const pe = Z(`Creating branch ${R}...`, "info", 0), Ce = await r(R, W.hash);
        ze(pe), Ce.status === "success" ? (Z(`Branch "${R}" created from ${W.short_hash}`, "success"), await Te()) : Z(Ce.message || "Failed to create branch", "error");
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
          var W;
          xe.value = null, Qe(), Z("Restarting environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/manager/reboot");
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
          var W;
          xe.value = null, Z("Stopping environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function nt(W, R) {
      D.value = !1, ye.value = W, ce.value = R || null, se.value = !0;
    }
    async function xt() {
      se.value = !1, Ee.value = !0, Qe(), ie.value = {
        progress: 10,
        state: St(10),
        message: G(10)
      };
      try {
        await b(ye.value, ce.value || void 0), me(), Pe();
      } catch (W) {
        we(), Ee.value = !1, Z(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), ie.value = { state: "idle", progress: 0, message: "" }, ce.value = null;
      }
    }
    function St(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function G(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[St(W)] || "";
    }
    function me() {
      if (fe) return;
      let W = 10;
      const R = 60, pe = 5e3, Ce = 100, De = (R - W) / (pe / Ce);
      fe = window.setInterval(() => {
        if (W += De, W >= R && (W = R, we()), ie.value.progress < R) {
          const Ge = Math.floor(W);
          ie.value = {
            progress: Ge,
            state: St(Ge),
            message: G(Ge)
          };
        }
      }, Ce);
    }
    function we() {
      fe && (clearInterval(fe), fe = null);
    }
    function Pe() {
      ue || (ue = window.setInterval(async () => {
        try {
          let W = await L.getStatus();
          if ((!W || W.state === "idle") && (W = await C()), !W)
            return;
          const R = W.progress || 0;
          R >= 60 && we();
          const pe = Math.max(R, ie.value.progress), Ce = W.state && W.state !== "idle" && W.state !== "unknown", De = Ce ? W.state : St(pe), Ge = Ce && W.message || G(pe);
          ie.value = {
            state: De,
            progress: pe,
            message: Ge
          }, W.state === "complete" ? (we(), qe(), Ee.value = !1, Z(`✓ Switched to ${ye.value}`, "success"), await Te(), ye.value = "") : W.state === "rolled_back" ? (we(), qe(), Ee.value = !1, Z("Switch failed, restored previous environment", "warning"), ye.value = "") : W.state === "critical_failure" && (we(), qe(), Ee.value = !1, Z(`Critical error during switch: ${W.message}`, "error"), ye.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function qe() {
      we(), ue && (clearInterval(ue), ue = null);
    }
    function It() {
      var W;
      se.value = !1, ye.value = "", (W = S.value) != null && W.state && S.value.state !== "managed" && (X.value = S.value.state === "no_workspace" ? 1 : 2, P.value = !0);
    }
    async function Kt() {
      et.value = !1, await Te(), Z("✓ Changes committed", "success");
    }
    async function Jt() {
      he.value = !1;
      const W = Z("Syncing environment...", "info", 0);
      try {
        const R = await O("skip", !0);
        if (ze(W), R.status === "success") {
          const pe = [];
          R.nodes_installed.length && pe.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && pe.push(`${R.nodes_removed.length} removed`);
          const Ce = pe.length ? `: ${pe.join(", ")}` : "";
          Z(`✓ Environment synced${Ce}`, "success"), await Te();
        } else {
          const pe = R.errors.length ? R.errors.join("; ") : R.message;
          Z(`Sync failed: ${pe}`, "error");
        }
      } catch (R) {
        ze(W), Z(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function eo(W) {
      var R;
      try {
        const pe = await f(W);
        pe.failed.length === 0 ? Z(`✓ Repaired ${pe.success} workflow${pe.success === 1 ? "" : "s"}`, "success") : Z(`Repaired ${pe.success}, failed: ${pe.failed.length}`, "warning"), await Te();
      } catch (pe) {
        Z(`Repair failed: ${pe instanceof Error ? pe.message : "Unknown error"}`, "error");
      } finally {
        (R = le.value) == null || R.resetRepairingState();
      }
    }
    async function ws() {
      var R, pe;
      const W = Z("Repairing environment...", "info", 0);
      try {
        const Ce = await O("skip", !0);
        if (ze(W), Ce.status === "success") {
          const De = [];
          Ce.nodes_installed.length && De.push(`${Ce.nodes_installed.length} installed`), Ce.nodes_removed.length && De.push(`${Ce.nodes_removed.length} removed`);
          const Ge = De.length ? `: ${De.join(", ")}` : "";
          Z(`✓ Environment repaired${Ge}`, "success"), (R = le.value) == null || R.closeDetailModal(), await Te();
        } else {
          const De = Ce.errors.length ? Ce.errors.join(", ") : Ce.message || "Unknown error";
          Z(`Repair failed: ${De}`, "error");
        }
      } catch (Ce) {
        ze(W), Z(`Repair error: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
      } finally {
        (pe = le.value) == null || pe.resetRepairingEnvironmentState();
      }
    }
    async function to(W, R) {
      Z(`Environment '${W}' created`, "success"), await Te(), I.value && await I.value.loadEnvironments(), R && await nt(W);
    }
    async function so(W) {
      var R;
      if (((R = z.value) == null ? void 0 : R.name) === W) {
        Z("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      xe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${W}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          xe.value = null;
          try {
            const pe = await T(W);
            pe.status === "success" ? (Z(`Environment "${W}" deleted`, "success"), await Te(), I.value && await I.value.loadEnvironments()) : Z(pe.message || "Failed to delete environment", "error");
          } catch (pe) {
            Z(`Error deleting environment: ${pe instanceof Error ? pe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function oo(W, R) {
      P.value = !1;
      try {
        S.value = await _();
      } catch {
      }
      await nt(W, R);
    }
    function no() {
      P.value = !1, i("close");
    }
    async function ao(W, R) {
      await nt(W, R);
    }
    async function lo(W) {
      await Te(), await nt(W);
    }
    async function io(W) {
      S.value = await _(), console.log(`Environment '${W}' created. Available for switching.`);
    }
    function ro() {
      Se("environments", "all-envs"), setTimeout(() => {
        var W;
        (W = I.value) == null || W.openCreateModal();
      }, 100);
    }
    function ks() {
      if (!x.value) return [];
      const W = [], R = x.value.workflows;
      return R.new.length && W.push(`${R.new.length} new workflow(s)`), R.modified.length && W.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && W.push(`${R.deleted.length} deleted workflow(s)`), W;
    }
    return Be(async () => {
      try {
        if (S.value = await _(), S.value.state === "no_workspace") {
          P.value = !0, X.value = 1;
          return;
        }
        if (S.value.state === "empty_workspace") {
          P.value = !0, X.value = 2;
          return;
        }
        if (S.value.state === "unmanaged") {
          P.value = !0, X.value = 2;
          return;
        }
      } catch (W) {
        console.warn("Setup status check failed, proceeding normally:", W);
      }
      await Te();
    }), (W, R) => {
      var pe, Ce, De, Ge, pt, Dt, bs, _s, $s, Cs, xs, Ss;
      return s(), o("div", Yk, [
        e("div", Xk, [
          e("div", Qk, [
            R[35] || (R[35] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", Zk)) : d("", !0)
          ]),
          e("div", eb, [
            e("button", {
              class: "sponsor-btn",
              onClick: R[0] || (R[0] = (ke) => M("https://github.com/sponsors/comfyhub-org")),
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
              onClick: R[1] || (R[1] = (ke) => M("https://discord.gg/2h5rSTeh6Y")),
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
              onClick: R[2] || (R[2] = (ke) => M("https://x.com/akatz_ai")),
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
              onClick: R[3] || (R[3] = (ke) => M("https://github.com/comfyhub-org/comfygit")),
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
              onClick: R[4] || (R[4] = (ke) => M("https://docs.comfyhub.org/comfygit/")),
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
              class: de(["icon-btn", { spinning: J.value }]),
              onClick: Te,
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
              onClick: R[5] || (R[5] = (ke) => i("close")),
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
        e("div", tb, [
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
            onClick: R[6] || (R[6] = (ke) => Se("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", sb, [
              e("span", null, a(((pe = z.value) == null ? void 0 : pe.name) || ((Ce = x.value) == null ? void 0 : Ce.environment) || "Loading..."), 1),
              e("span", ob, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            R[45] || (R[45] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", nb, [
          e("div", ab, [
            e("div", lb, [
              e("div", ib, [
                R[46] || (R[46] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "status" && Ve.value === "this-env" }]),
                  onClick: R[7] || (R[7] = (ke) => Se("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "workflows" }]),
                  onClick: R[8] || (R[8] = (ke) => Se("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "models-env" }]),
                  onClick: R[9] || (R[9] = (ke) => Se("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "branches" }]),
                  onClick: R[10] || (R[10] = (ke) => Se("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "history" }]),
                  onClick: R[11] || (R[11] = (ke) => Se("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "nodes" }]),
                  onClick: R[12] || (R[12] = (ke) => Se("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "debug-env" }]),
                  onClick: R[13] || (R[13] = (ke) => Se("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              R[49] || (R[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", rb, [
                R[47] || (R[47] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "environments" }]),
                  onClick: R[14] || (R[14] = (ke) => Se("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "model-index" }]),
                  onClick: R[15] || (R[15] = (ke) => Se("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "settings" }]),
                  onClick: R[16] || (R[16] = (ke) => Se("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "debug-workspace" }]),
                  onClick: R[17] || (R[17] = (ke) => Se("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              R[50] || (R[50] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", db, [
                R[48] || (R[48] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "export" }]),
                  onClick: R[18] || (R[18] = (ke) => Se("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "import" }]),
                  onClick: R[19] || (R[19] = (ke) => Se("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: ve.value === "remotes" }]),
                  onClick: R[20] || (R[20] = (ke) => Se("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            R[51] || (R[51] = vo('<div class="sidebar-footer" data-v-1340da17><span class="version" data-v-1340da17>v0.0.1</span><span class="made-by" data-v-1340da17>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-1340da17><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-1340da17></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", cb, [
            re.value ? (s(), o("div", ub, a(re.value), 1)) : !x.value && ve.value === "status" ? (s(), o("div", mb, " Loading status... ")) : (s(), o(F, { key: 2 }, [
              ve.value === "status" ? (s(), E(Ga, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: le,
                status: x.value,
                "setup-state": Q.value,
                onSwitchBranch: dt,
                onCommitChanges: R[21] || (R[21] = (ke) => et.value = !0),
                onSyncEnvironment: R[22] || (R[22] = (ke) => he.value = !0),
                onViewWorkflows: R[23] || (R[23] = (ke) => Se("workflows", "this-env")),
                onViewHistory: R[24] || (R[24] = (ke) => Se("history", "this-env")),
                onViewDebug: R[25] || (R[25] = (ke) => Se("debug-env", "this-env")),
                onViewNodes: R[26] || (R[26] = (ke) => Se("nodes", "this-env")),
                onRepairMissingModels: eo,
                onRepairEnvironment: ws,
                onStartSetup: R[27] || (R[27] = (ke) => P.value = !0),
                onViewEnvironments: R[28] || (R[28] = (ke) => Se("environments", "all-envs")),
                onCreateEnvironment: ro
              }, null, 8, ["status", "setup-state"])) : ve.value === "workflows" ? (s(), E(vm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: Te
              }, null, 512)) : ve.value === "models-env" ? (s(), E(Jm, {
                key: 2,
                onNavigate: ot
              })) : ve.value === "branches" ? (s(), E(ll, {
                key: 3,
                branches: V.value,
                current: ((De = x.value) == null ? void 0 : De.branch) || null,
                onSwitch: B,
                onCreate: A,
                onDelete: oe
              }, null, 8, ["branches", "current"])) : ve.value === "history" ? (s(), E(hl, {
                key: 4,
                commits: K.value,
                onSelect: ft,
                onCheckout: Y
              }, null, 8, ["commits"])) : ve.value === "nodes" ? (s(), E(Gv, {
                key: 5,
                "version-mismatches": ((pt = (Ge = x.value) == null ? void 0 : Ge.comparison) == null ? void 0 : pt.version_mismatches) || [],
                onOpenNodeManager: vt,
                onRepairEnvironment: ws,
                onToast: We
              }, null, 8, ["version-mismatches"])) : ve.value === "debug-env" ? (s(), E(Zp, { key: 6 })) : ve.value === "environments" ? (s(), E(s1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: I,
                onSwitch: nt,
                onCreated: to,
                onDelete: so
              }, null, 512)) : ve.value === "model-index" ? (s(), E(gv, {
                key: 8,
                onRefresh: Te
              })) : ve.value === "settings" ? (s(), E(Jp, { key: 9 })) : ve.value === "debug-workspace" ? (s(), E(Xp, { key: 10 })) : ve.value === "export" ? (s(), E(P1, { key: 11 })) : ve.value === "import" ? (s(), E(I0, {
                key: 12,
                onImportCompleteSwitch: lo
              })) : ve.value === "remotes" ? (s(), E(Ep, {
                key: 13,
                onToast: We
              })) : d("", !0)
            ], 64))
          ])
        ]),
        H.value ? (s(), E(G0, {
          key: 0,
          commit: H.value,
          onClose: R[29] || (R[29] = (ke) => H.value = null),
          onCheckout: Y,
          onCreateBranch: be
        }, null, 8, ["commit"])) : d("", !0),
        xe.value ? (s(), E(As, {
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
          onCancel: R[30] || (R[30] = (ke) => xe.value = null),
          onSecondary: xe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        k(Ww, {
          show: se.value,
          "from-environment": ((Dt = z.value) == null ? void 0 : Dt.name) || "unknown",
          "to-environment": ye.value,
          onConfirm: xt,
          onClose: It
        }, null, 8, ["show", "from-environment", "to-environment"]),
        et.value && x.value ? (s(), E(Ks, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: R[31] || (R[31] = (ke) => et.value = !1),
          onCommitted: Kt
        }, null, 8, ["status"])) : d("", !0),
        he.value && x.value ? (s(), E(dk, {
          key: 3,
          show: he.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Jt,
          onClose: R[32] || (R[32] = (ke) => he.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        k(ek, {
          show: Ee.value,
          state: ie.value.state,
          progress: ie.value.progress,
          message: ie.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        D.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[34] || (R[34] = Le((ke) => D.value = !1, ["self"]))
        }, [
          e("div", vb, [
            e("div", fb, [
              R[53] || (R[53] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[33] || (R[33] = (ke) => D.value = !1)
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
            e("div", gb, [
              R[54] || (R[54] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", pb, [
                (s(!0), o(F, null, ne(q.value, (ke) => (s(), o("div", {
                  key: ke.name,
                  class: de(["env-item", { current: ke.is_current }])
                }, [
                  e("div", hb, [
                    e("div", yb, [
                      e("span", wb, a(ke.is_current ? "●" : "○"), 1),
                      e("span", kb, a(ke.name), 1),
                      ke.current_branch ? (s(), o("span", bb, "(" + a(ke.current_branch) + ")", 1)) : d("", !0),
                      ke.is_current ? (s(), o("span", _b, "CURRENT")) : d("", !0)
                    ]),
                    e("div", $b, a(ke.workflow_count) + " workflows • " + a(ke.node_count) + " nodes ", 1)
                  ]),
                  ke.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (P2) => nt(ke.name)
                  }, " SWITCH ", 8, Cb))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        P.value ? (s(), E(Jk, {
          key: 5,
          "default-path": ((bs = S.value) == null ? void 0 : bs.default_path) || "~/comfygit",
          "detected-models-dir": ((_s = S.value) == null ? void 0 : _s.detected_models_dir) || null,
          "initial-step": X.value,
          "existing-environments": (($s = S.value) == null ? void 0 : $s.environments) || [],
          "cli-installed": ((Cs = S.value) == null ? void 0 : Cs.cli_installed) ?? !0,
          "setup-state": ((xs = S.value) == null ? void 0 : xs.state) || "no_workspace",
          "workspace-path": ((Ss = S.value) == null ? void 0 : Ss.workspace_path) || null,
          onComplete: oo,
          onClose: no,
          onSwitchEnvironment: ao,
          onEnvironmentCreatedNoSwitch: io
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : d("", !0),
        e("div", xb, [
          k(fo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(F, null, ne(j.value, (ke) => (s(), o("div", {
                key: ke.id,
                class: de(["toast", ke.type])
              }, [
                e("span", Sb, a(ke.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Eb = /* @__PURE__ */ te(Ib, [["__scopeId", "data-v-1340da17"]]), Mb = { class: "item-header" }, Tb = { class: "item-info" }, Rb = { class: "filename" }, zb = { class: "metadata" }, Lb = { class: "size" }, Pb = {
  key: 0,
  class: "type"
}, Db = { class: "item-actions" }, Nb = {
  key: 0,
  class: "progress-section"
}, Ub = { class: "progress-bar" }, Ob = { class: "progress-stats" }, Bb = { class: "downloaded" }, Ab = { class: "speed" }, Fb = {
  key: 0,
  class: "eta"
}, Vb = {
  key: 1,
  class: "status-msg paused"
}, Wb = {
  key: 2,
  class: "status-msg queued"
}, jb = {
  key: 3,
  class: "status-msg completed"
}, Gb = {
  key: 4,
  class: "status-msg failed"
}, Hb = {
  key: 0,
  class: "retries"
}, qb = /* @__PURE__ */ ee({
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
    function h(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function p(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const m = Math.floor(u / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (u, m) => (s(), o("div", {
      class: de(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Mb, [
        e("div", Tb, [
          e("div", Rb, a(t.item.filename), 1),
          e("div", zb, [
            e("span", Lb, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", Pb, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Db, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (r) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (r) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (r) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (r) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Nb, [
        e("div", Ub, [
          e("div", {
            class: "progress-fill",
            style: yt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Ob, [
          e("span", Bb, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", Ab, a(h(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Fb, a(p(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Vb, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Wb, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", jb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Gb, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", Hb, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ te(qb, [["__scopeId", "data-v-2110df65"]]), Kb = { class: "queue-title" }, Jb = { class: "count" }, Yb = { class: "queue-actions" }, Xb = { class: "action-label" }, Qb = {
  key: 0,
  class: "overall-progress"
}, Zb = { class: "progress-bar" }, e2 = {
  key: 0,
  class: "current-mini"
}, t2 = { class: "filename" }, s2 = { class: "speed" }, o2 = {
  key: 1,
  class: "queue-content"
}, n2 = {
  key: 0,
  class: "section"
}, a2 = {
  key: 1,
  class: "section"
}, l2 = { class: "section-header" }, i2 = { class: "section-label paused" }, r2 = { class: "items-list" }, d2 = {
  key: 2,
  class: "section"
}, c2 = { class: "section-header" }, u2 = { class: "section-label" }, m2 = { class: "items-list" }, v2 = {
  key: 3,
  class: "section"
}, f2 = { class: "section-header" }, g2 = { class: "section-label" }, p2 = { class: "items-list" }, h2 = {
  key: 4,
  class: "section"
}, y2 = { class: "section-header" }, w2 = { class: "section-label failed" }, k2 = { class: "items-list" }, b2 = /* @__PURE__ */ ee({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: h,
      failedItems: p,
      pausedItems: u,
      hasItems: m,
      activeCount: r,
      cancelDownload: v,
      retryDownload: g,
      resumeDownload: w,
      resumeAllPaused: b,
      removeItem: C,
      clearCompleted: T
    } = Ht(), O = $(!1);
    let f = null;
    _t(
      () => ({
        active: r.value,
        failed: p.value.length,
        paused: u.value.length,
        completed: h.value.length
      }),
      (x, K) => {
        f && (clearTimeout(f), f = null);
        const V = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, q = K && (K.active > 0 || K.paused > 0);
        V && q && (f = setTimeout(() => {
          T(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const _ = U(() => {
      var V;
      if (c.items.length === 0) return 0;
      const x = h.value.length, K = ((V = n.value) == null ? void 0 : V.progress) || 0;
      return Math.round((x + K / 100) / c.items.length * 100);
    });
    function L(x) {
      v(x);
    }
    function M(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, K) => (s(), E(je, { to: "body" }, [
      _e(m) ? (s(), o("div", {
        key: 0,
        class: de(["model-download-queue", { minimized: !O.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: K[0] || (K[0] = (V) => O.value = !O.value)
        }, [
          e("div", Kb, [
            K[4] || (K[4] = e("span", { class: "icon" }, "↓", -1)),
            K[5] || (K[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Jb, "(" + a(_e(r)) + "/" + a(_e(c).items.length) + ")", 1)
          ]),
          e("div", Yb, [
            e("span", Xb, a(O.value ? "minimize" : "expand"), 1)
          ])
        ]),
        O.value ? (s(), o("div", o2, [
          _e(n) ? (s(), o("div", n2, [
            K[6] || (K[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(Ot, {
              item: _e(n),
              onCancel: K[1] || (K[1] = (V) => L(_e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          _e(u).length > 0 ? (s(), o("div", a2, [
            e("div", l2, [
              e("span", i2, "Paused (" + a(_e(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: K[2] || (K[2] = //@ts-ignore
                (...V) => _e(b) && _e(b)(...V))
              }, "Resume All")
            ]),
            e("div", r2, [
              (s(!0), o(F, null, ne(_e(u), (V) => (s(), E(Ot, {
                key: V.id,
                item: V,
                onResume: (q) => _e(w)(V.id),
                onRemove: (q) => _e(C)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(i).length > 0 ? (s(), o("div", d2, [
            e("div", c2, [
              e("span", u2, "Queued (" + a(_e(i).length) + ")", 1)
            ]),
            e("div", m2, [
              (s(!0), o(F, null, ne(_e(i), (V) => (s(), E(Ot, {
                key: V.id,
                item: V,
                onCancel: (q) => L(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          _e(h).length > 0 ? (s(), o("div", v2, [
            e("div", f2, [
              e("span", g2, "Completed (" + a(_e(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: K[3] || (K[3] = //@ts-ignore
                (...V) => _e(T) && _e(T)(...V))
              }, "Clear")
            ]),
            e("div", p2, [
              (s(!0), o(F, null, ne(_e(h).slice(0, 3), (V) => (s(), E(Ot, {
                key: V.id,
                item: V,
                onRemove: (q) => _e(C)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(p).length > 0 ? (s(), o("div", h2, [
            e("div", y2, [
              e("span", w2, "Failed (" + a(_e(p).length) + ")", 1)
            ]),
            e("div", k2, [
              (s(!0), o(F, null, ne(_e(p), (V) => (s(), E(Ot, {
                key: V.id,
                item: V,
                onRetry: (q) => _e(g)(V.id),
                onRemove: (q) => _e(C)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Qb, [
          e("div", Zb, [
            e("div", {
              class: "progress-fill",
              style: yt({ width: `${_.value}%` })
            }, null, 4)
          ]),
          _e(n) ? (s(), o("div", e2, [
            e("span", t2, a(_e(n).filename), 1),
            e("span", s2, a(M(_e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), _2 = /* @__PURE__ */ te(b2, [["__scopeId", "data-v-60751cfa"]]), $2 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', C2 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', x2 = {
  comfy: $2,
  phosphor: C2
}, ps = "comfy", Js = "comfygit-theme";
let $t = null, Ys = ps;
function S2() {
  try {
    const t = localStorage.getItem(Js);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ps;
}
function Xs(t = ps) {
  $t && $t.remove(), $t = document.createElement("style"), $t.id = "comfygit-theme-styles", $t.setAttribute("data-theme", t), $t.textContent = x2[t], document.head.appendChild($t), document.body.setAttribute("data-comfygit-theme", t), Ys = t;
  try {
    localStorage.setItem(Js, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function I2() {
  return Ys;
}
function E2(t) {
  Xs(t);
}
function M2(t) {
  var p;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const h = i[c];
  return h && h.result === "error" && ((p = h.status) == null ? void 0 : p.status_str) === "error" ? (h.status.messages || [])[0] || "Unknown error" : null;
}
const hs = document.createElement("link");
hs.rel = "stylesheet";
hs.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(hs);
const T2 = S2();
Xs(T2);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), E2(t);
  },
  getTheme: () => {
    const t = I2();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let lt = null, Ze = null, Wt = null, Bt = null, Rs = null;
const Lt = $(null);
let ys = "managed", Qs = !1;
async function Qt() {
  var t;
  if (!((t = bt) != null && t.api)) return null;
  try {
    const c = await bt.api.fetchApi("/v2/comfygit/status");
    c.ok && (Lt.value = await c.json());
  } catch {
  }
}
async function rs() {
  var t;
  if ((t = bt) != null && t.api)
    try {
      const c = await bt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        ys = n.state, Qs = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function ds() {
  var c;
  if (ys === "managed" || !Qs) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function R2() {
  if (!Lt.value) return !1;
  const t = Lt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Lt.value.has_changes;
}
function zs(t) {
  lt && lt.remove(), lt = document.createElement("div"), lt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", lt.appendChild(c), lt.addEventListener("click", (h) => {
    h.target === lt && ls();
  });
  const n = (h) => {
    h.key === "Escape" && (ls(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ms({
    render: () => vs(Eb, {
      initialView: t,
      onClose: ls,
      onStatusUpdate: async (h) => {
        Lt.value = h, jt(), await rs(), cs(), ds();
      }
    })
  }).mount(c), document.body.appendChild(lt);
}
function ls() {
  lt && (lt.remove(), lt = null);
}
function z2(t) {
  At(), Ze = document.createElement("div"), Ze.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Ze.style.position = "fixed", Ze.style.top = `${c.bottom + 8}px`, Ze.style.right = `${window.innerWidth - c.right}px`, Ze.style.zIndex = "10001";
  const n = (h) => {
    Ze && !Ze.contains(h.target) && h.target !== t && (At(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (h) => {
    h.key === "Escape" && (At(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Wt = ms({
    render: () => vs(Ks, {
      status: Lt.value,
      onClose: At,
      onCommitted: () => {
        At(), Qt().then(jt);
      }
    })
  }), Wt.mount(Ze), document.body.appendChild(Ze);
}
function At() {
  Wt && (Wt.unmount(), Wt = null), Ze && (Ze.remove(), Ze = null);
}
function L2() {
  Bt || (Bt = document.createElement("div"), Bt.className = "comfygit-download-queue-root", Rs = ms({
    render: () => vs(_2)
  }), Rs.mount(Bt), document.body.appendChild(Bt), console.log("[ComfyGit] Model download queue mounted"));
}
let tt = null;
function jt() {
  if (!tt) return;
  const t = tt.querySelector(".commit-indicator");
  t && (t.style.display = R2() ? "block" : "none");
}
function cs() {
  if (!tt) return;
  const t = ys !== "managed";
  tt.disabled = t, tt.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Zs = document.createElement("style");
Zs.textContent = `
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
document.head.appendChild(Zs);
bt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, p;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = zs, tt = document.createElement("button"), tt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", tt.innerHTML = 'Commit <span class="commit-indicator"></span>', tt.title = "Quick Commit", tt.onclick = () => z2(tt), t.appendChild(c), t.appendChild(tt), (p = (h = bt.menu) == null ? void 0 : h.settingsGroup) != null && p.element && (bt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), L2();
    const { loadPendingDownloads: n } = Ht();
    n(), await Promise.all([Qt(), rs()]), jt(), cs(), ds(), setTimeout(ds, 100), setInterval(async () => {
      await Promise.all([Qt(), rs()]), jt(), cs();
    }, 3e4);
    const i = bt.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, m = function() {
        const g = document.createElement("div");
        g.style.cssText = `
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
        w.textContent = "Workflows updated - refresh required", g.appendChild(w);
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
        `, b.onmouseover = () => b.style.background = "var(--comfy-input-bg)", b.onmouseout = () => b.style.background = "var(--comfy-menu-bg)", b.onclick = () => u(), g.appendChild(b);
        const C = document.createElement("button");
        C.textContent = "×", C.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, C.onmouseover = () => C.style.opacity = "1", C.onmouseout = () => C.style.opacity = "0.6", C.onclick = () => g.remove(), g.appendChild(C), document.body.appendChild(g), console.log("[ComfyGit] Refresh notification displayed");
      }, r = function(g) {
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
        const C = document.createElement("span");
        C.textContent = "⚠️", C.style.fontSize = "20px", b.appendChild(C);
        const T = document.createElement("div");
        T.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const O = document.createElement("div");
        O.textContent = "Node installation failed", O.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(O);
        const f = document.createElement("div");
        f.textContent = "Dependency conflict detected", f.style.cssText = "font-size: 12px; opacity: 0.8;", T.appendChild(f), b.appendChild(T);
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
          b.remove(), zs("debug-env");
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
        `, L.onmouseover = () => L.style.opacity = "1", L.onmouseout = () => L.style.opacity = "0.6", L.onclick = () => b.remove(), b.appendChild(L), document.body.appendChild(b), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && b.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: b } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${b}`), await Qt(), jt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      i.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : m()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (g) => {
        const w = M2(g.detail);
        w && r(w);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
