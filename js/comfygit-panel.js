import { app as st } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as s, openBlock as o, createCommentVNode as u, createElementVNode as e, renderSlot as de, createBlock as x, resolveDynamicComponent as Lt, normalizeClass as ne, withCtx as a, toDisplayString as l, createVNode as f, createTextVNode as p, computed as U, Fragment as G, renderList as se, normalizeStyle as Je, ref as b, onMounted as be, watch as Tt, Teleport as Se, withModifiers as we, Transition as no, createSlots as Dt, withKeys as je, onUnmounted as ao, reactive as Gt, readonly as lo, unref as ue, withDirectives as io, vModelText as ro, resolveComponent as co, TransitionGroup as uo, createApp as Rt, h as Nt } from "vue";
const mo = { class: "panel-layout" }, vo = {
  key: 0,
  class: "panel-layout-header"
}, fo = {
  key: 1,
  class: "panel-layout-search"
}, go = { class: "panel-layout-content" }, ho = {
  key: 2,
  class: "panel-layout-footer"
}, po = /* @__PURE__ */ X({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (o(), s("div", mo, [
      c.$slots.header ? (o(), s("div", vo, [
        de(c.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      c.$slots.search ? (o(), s("div", fo, [
        de(c.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      e("div", go, [
        de(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), s("div", ho, [
        de(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), Y = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [r, g] of c)
    n[r] = g;
  return n;
}, Ee = /* @__PURE__ */ Y(po, [["__scopeId", "data-v-21565df9"]]), yo = {
  key: 0,
  class: "panel-title-prefix"
}, wo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ko = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (o(), x(Lt(`h${t.level}`), {
      class: ne(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), s("span", yo, l(t.prefix), 1)) : (o(), s("span", wo)),
        de(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bo = /* @__PURE__ */ Y(ko, [["__scopeId", "data-v-c3875efc"]]), _o = ["title"], $o = ["width", "height"], Co = /* @__PURE__ */ X({
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
      ])], 8, $o))
    ], 8, _o));
  }
}), jt = /* @__PURE__ */ Y(Co, [["__scopeId", "data-v-6fc7f16d"]]), xo = { class: "header-left" }, So = {
  key: 0,
  class: "header-actions"
}, Io = /* @__PURE__ */ X({
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
      class: ne(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", xo, [
        f(bo, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            p(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), x(jt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => c.$emit("info-click"))
        })) : u("", !0)
      ]),
      c.$slots.actions ? (o(), s("div", So, [
        de(c.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Me = /* @__PURE__ */ Y(Io, [["__scopeId", "data-v-55a62cd6"]]), Eo = {
  key: 0,
  class: "section-title-count"
}, Mo = {
  key: 1,
  class: "section-title-icon"
}, zo = /* @__PURE__ */ X({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), x(Lt(`h${t.level}`), {
      class: ne(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, {
      default: a(() => [
        de(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Eo, "(" + l(t.count) + ")", 1)) : u("", !0),
        t.clickable ? (o(), s("span", Mo, l(t.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Te = /* @__PURE__ */ Y(zo, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, To = { class: "status-grid__columns" }, Do = { class: "status-grid__column" }, Ro = { class: "status-grid__title" }, No = { class: "status-grid__column status-grid__column--right" }, Oo = { class: "status-grid__title" }, Uo = {
  key: 0,
  class: "status-grid__footer"
}, Bo = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (o(), s("div", Lo, [
      e("div", To, [
        e("div", Do, [
          e("h4", Ro, l(t.leftTitle), 1),
          de(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", No, [
          e("h4", Oo, l(t.rightTitle), 1),
          de(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (o(), s("div", Uo, [
        de(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), Po = /* @__PURE__ */ Y(Bo, [["__scopeId", "data-v-73b7ba3f"]]), Vo = {
  key: 0,
  class: "status-item__icon"
}, Fo = {
  key: 1,
  class: "status-item__count"
}, Ao = { class: "status-item__label" }, Wo = /* @__PURE__ */ X({
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
    return (r, g) => (o(), s("div", {
      class: ne(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", Vo, l(t.icon), 1)) : u("", !0),
      t.count !== void 0 ? (o(), s("span", Fo, l(t.count), 1)) : u("", !0),
      e("span", Ao, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ Y(Wo, [["__scopeId", "data-v-6f929183"]]), Go = { class: "issue-card__header" }, jo = { class: "issue-card__icon" }, Ho = { class: "issue-card__title" }, qo = {
  key: 0,
  class: "issue-card__content"
}, Ko = {
  key: 0,
  class: "issue-card__description"
}, Jo = {
  key: 1,
  class: "issue-card__items"
}, Qo = {
  key: 2,
  class: "issue-card__actions"
}, Xo = /* @__PURE__ */ X({
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
    return (r, g) => (o(), s("div", {
      class: ne(["issue-card", n.value])
    }, [
      e("div", Go, [
        e("span", jo, l(t.icon), 1),
        e("h4", Ho, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", qo, [
        t.description ? (o(), s("p", Ko, l(t.description), 1)) : u("", !0),
        de(r.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      t.items && t.items.length ? (o(), s("div", Jo, [
        (o(!0), s(G, null, se(t.items, (y, h) => (o(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : u("", !0),
      r.$slots.actions ? (o(), s("div", Qo, [
        de(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), tt = /* @__PURE__ */ Y(Xo, [["__scopeId", "data-v-df6aa348"]]), Yo = ["type", "disabled"], Zo = {
  key: 0,
  class: "spinner"
}, es = /* @__PURE__ */ X({
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
      class: ne(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Zo)) : u("", !0),
      t.loading ? u("", !0) : de(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Yo));
  }
}), Z = /* @__PURE__ */ Y(es, [["__scopeId", "data-v-772abe47"]]), ts = { class: "empty-state" }, os = {
  key: 0,
  class: "empty-icon"
}, ss = { class: "empty-message" }, ns = /* @__PURE__ */ X({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (o(), s("div", ts, [
      t.icon ? (o(), s("div", os, l(t.icon), 1)) : u("", !0),
      e("p", ss, l(t.message), 1),
      t.actionLabel ? (o(), x(Z, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("action"))
      }, {
        default: a(() => [
          p(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Pe = /* @__PURE__ */ Y(ns, [["__scopeId", "data-v-4466284f"]]), as = /* @__PURE__ */ X({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: ne(["detail-label"]),
      style: Je({ minWidth: t.minWidth })
    }, [
      de(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Mt = /* @__PURE__ */ Y(as, [["__scopeId", "data-v-75e9eeb8"]]), ls = /* @__PURE__ */ X({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: ne(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      de(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ Y(ls, [["__scopeId", "data-v-2f186e4c"]]), is = { class: "detail-row" }, rs = /* @__PURE__ */ X({
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
    return (c, n) => (o(), s("div", is, [
      f(Mt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          p(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), x(zt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          p(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : de(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), pe = /* @__PURE__ */ Y(rs, [["__scopeId", "data-v-ef15664a"]]), ds = { class: "modal-header" }, cs = { class: "modal-body" }, us = { class: "status-section" }, ms = {
  key: 0,
  class: "status-section"
}, vs = { class: "section-header-row" }, fs = {
  key: 0,
  class: "workflow-group"
}, gs = { class: "workflow-group-header" }, hs = { class: "workflow-group-title" }, ps = { class: "workflow-list" }, ys = { class: "workflow-name" }, ws = { class: "workflow-issue" }, ks = {
  key: 1,
  class: "workflow-group"
}, bs = { class: "workflow-group-header" }, _s = { class: "workflow-group-title" }, $s = { class: "workflow-list" }, Cs = { class: "workflow-name" }, xs = { class: "workflow-issue" }, Ss = {
  key: 2,
  class: "workflow-group"
}, Is = { class: "workflow-group-header" }, Es = { class: "workflow-group-title" }, Ms = { class: "workflow-list" }, zs = { class: "workflow-name" }, Ls = {
  key: 3,
  class: "workflow-group"
}, Ts = { class: "workflow-group-header" }, Ds = { class: "workflow-group-title" }, Rs = { class: "workflow-list" }, Ns = { class: "workflow-name" }, Os = {
  key: 4,
  class: "workflow-group"
}, Us = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Ps = { class: "workflow-list" }, Vs = { class: "workflow-name" }, Fs = {
  key: 5,
  class: "workflow-group"
}, As = { class: "workflow-group-title" }, Ws = { class: "expand-icon" }, Gs = {
  key: 0,
  class: "workflow-list"
}, js = { class: "workflow-name" }, Hs = {
  key: 1,
  class: "status-section"
}, qs = {
  key: 0,
  class: "change-group"
}, Ks = { class: "change-group-header" }, Js = { class: "change-group-title" }, Qs = { class: "change-list" }, Xs = { class: "node-name" }, Ys = {
  key: 0,
  class: "dev-badge"
}, Zs = {
  key: 1,
  class: "change-group"
}, en = { class: "change-group-header" }, tn = { class: "change-group-title" }, on = { class: "change-list" }, sn = { class: "node-name" }, nn = {
  key: 0,
  class: "dev-badge"
}, an = {
  key: 2,
  class: "change-group"
}, ln = { class: "change-list" }, rn = { class: "change-item" }, dn = { class: "node-name" }, cn = {
  key: 3,
  class: "change-group"
}, un = {
  key: 2,
  class: "status-section"
}, mn = { class: "section-header-row" }, vn = {
  key: 0,
  class: "drift-item"
}, fn = { class: "drift-list" }, gn = {
  key: 0,
  class: "drift-list-more"
}, hn = {
  key: 1,
  class: "drift-item"
}, pn = { class: "drift-list" }, yn = {
  key: 0,
  class: "drift-list-more"
}, wn = {
  key: 2,
  class: "drift-item"
}, kn = {
  key: 3,
  class: "drift-item"
}, bn = {
  key: 3,
  class: "status-section"
}, _n = { class: "info-box" }, $n = { class: "drift-list" }, Cn = {
  key: 0,
  class: "drift-list-more"
}, xn = {
  key: 4,
  class: "status-section"
}, Sn = { class: "warning-box" }, In = {
  key: 5,
  class: "empty-state-inline"
}, En = { class: "modal-actions" }, Mn = /* @__PURE__ */ X({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const c = t, n = b(!1);
    be(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), Tt(() => c.show, (E, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", E);
    }, { immediate: !0 });
    const r = U(() => {
      var E, C, S;
      return ((S = (C = (E = c.status) == null ? void 0 : E.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : S.filter(
        (w) => w.status === "broken" && w.sync_state === "synced"
      )) || [];
    }), g = U(() => {
      var E, C, S;
      return ((S = (C = (E = c.status) == null ? void 0 : E.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : S.filter(
        (w) => w.status === "broken" && w.sync_state !== "synced"
      )) || [];
    }), y = U(() => {
      var E, C, S;
      return ((S = (C = (E = c.status) == null ? void 0 : E.workflows) == null ? void 0 : C.synced) == null ? void 0 : S.filter((w) => {
        var M, N, R;
        const k = (R = (N = (M = c.status) == null ? void 0 : M.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : R.find((D) => D.name === w);
        return !k || k.status !== "broken";
      })) || [];
    }), h = U(() => {
      var E, C, S, w, k;
      return (E = c.status) != null && E.workflows ? (((C = c.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((S = c.status.workflows.modified) == null ? void 0 : S.length) ?? 0) > 0 || (((w = c.status.workflows.deleted) == null ? void 0 : w.length) ?? 0) > 0 || (((k = c.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), m = U(() => {
      var C, S, w;
      const E = (C = c.status) == null ? void 0 : C.git_changes;
      return E ? (((S = E.nodes_added) == null ? void 0 : S.length) ?? 0) > 0 || (((w = E.nodes_removed) == null ? void 0 : w.length) ?? 0) > 0 || E.workflow_changes || E.has_other_changes : !1;
    }), i = U(() => {
      var E, C, S, w, k, M;
      return !h.value && !m.value && ((C = (E = c.status) == null ? void 0 : E.comparison) == null ? void 0 : C.is_synced) && (((S = c.status) == null ? void 0 : S.missing_models_count) ?? 0) === 0 && (((M = (k = (w = c.status) == null ? void 0 : w.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : M.length) ?? 0) === 0;
    }), v = U(() => {
      var C, S;
      const E = (S = (C = c.status) == null ? void 0 : C.git_changes) == null ? void 0 : S.workflow_changes;
      return E ? typeof E == "number" ? E : Object.keys(E).length : 0;
    });
    function _(E) {
      return typeof E == "string" ? E : E.name;
    }
    function d(E) {
      return typeof E == "object" && E.is_development === !0;
    }
    return (E, C) => {
      var S, w, k, M, N, R, D, j, z, T, B, I, $, P, A, ee, te, W, K, V, O, ae;
      return o(), x(Se, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[6] || (C[6] = (J) => E.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[5] || (C[5] = we(() => {
            }, ["stop"]))
          }, [
            e("div", ds, [
              C[7] || (C[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (J) => E.$emit("close"))
              }, "✕")
            ]),
            e("div", cs, [
              e("div", us, [
                f(Te, { level: "4" }, {
                  default: a(() => [...C[8] || (C[8] = [
                    p("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(pe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), s("div", ms, [
                e("div", vs, [
                  f(Te, { level: "4" }, {
                    default: a(() => [...C[9] || (C[9] = [
                      p("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (J) => E.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", fs, [
                  e("div", gs, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", hs, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", ps, [
                    (o(!0), s(G, null, se(r.value, (J) => (o(), s("div", {
                      key: J.name,
                      class: "workflow-item"
                    }, [
                      e("span", ys, l(J.name), 1),
                      e("span", ws, l(J.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                g.value.length ? (o(), s("div", ks, [
                  e("div", bs, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", _s, "BROKEN (UNCOMMITTED) (" + l(g.value.length) + ")", 1)
                  ]),
                  e("div", $s, [
                    (o(!0), s(G, null, se(g.value, (J) => (o(), s("div", {
                      key: J.name,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, l(J.name), 1),
                      e("span", xs, l(J.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (w = (S = t.status.workflows) == null ? void 0 : S.new) != null && w.length ? (o(), s("div", Ss, [
                  e("div", Is, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Es, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ms, [
                    (o(!0), s(G, null, se(t.status.workflows.new, (J) => (o(), s("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", zs, l(J), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (M = (k = t.status.workflows) == null ? void 0 : k.modified) != null && M.length ? (o(), s("div", Ls, [
                  e("div", Ts, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ds, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Rs, [
                    (o(!0), s(G, null, se(t.status.workflows.modified, (J) => (o(), s("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", Ns, l(J), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (R = (N = t.status.workflows) == null ? void 0 : N.deleted) != null && R.length ? (o(), s("div", Os, [
                  e("div", Us, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Bs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ps, [
                    (o(!0), s(G, null, se(t.status.workflows.deleted, (J) => (o(), s("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, l(J), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                y.value.length ? (o(), s("div", Fs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (J) => n.value = !n.value)
                  }, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", As, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Ws, l(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", Gs, [
                    (o(!0), s(G, null, se(y.value, (J) => (o(), s("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      e("span", js, l(J), 1)
                    ]))), 128))
                  ])) : u("", !0)
                ])) : u("", !0)
              ])) : u("", !0),
              m.value ? (o(), s("div", Hs, [
                f(Te, { level: "4" }, {
                  default: a(() => [...C[16] || (C[16] = [
                    p("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (j = (D = t.status.git_changes) == null ? void 0 : D.nodes_added) != null && j.length ? (o(), s("div", qs, [
                  e("div", Ks, [
                    C[17] || (C[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Js, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Qs, [
                    (o(!0), s(G, null, se(t.status.git_changes.nodes_added, (J) => (o(), s("div", {
                      key: _(J),
                      class: "change-item"
                    }, [
                      e("span", Xs, l(_(J)), 1),
                      d(J) ? (o(), s("span", Ys, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (T = (z = t.status.git_changes) == null ? void 0 : z.nodes_removed) != null && T.length ? (o(), s("div", Zs, [
                  e("div", en, [
                    C[18] || (C[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", tn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), s(G, null, se(t.status.git_changes.nodes_removed, (J) => (o(), s("div", {
                      key: _(J),
                      class: "change-item"
                    }, [
                      e("span", sn, l(_(J)), 1),
                      d(J) ? (o(), s("span", nn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (B = t.status.git_changes) != null && B.workflow_changes ? (o(), s("div", an, [
                  C[19] || (C[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", ln, [
                    e("div", rn, [
                      e("span", dn, l(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : u("", !0),
                (I = t.status.git_changes) != null && I.has_other_changes ? (o(), s("div", cn, [...C[20] || (C[20] = [
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
              ($ = t.status.comparison) != null && $.is_synced ? u("", !0) : (o(), s("div", un, [
                e("div", mn, [
                  f(Te, { level: "4" }, {
                    default: a(() => [...C[21] || (C[21] = [
                      p("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[3] || (C[3] = (J) => E.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                C[22] || (C[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (A = (P = t.status.comparison) == null ? void 0 : P.missing_nodes) != null && A.length ? (o(), s("div", vn, [
                  f(pe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", fn, [
                    (o(!0), s(G, null, se(t.status.comparison.missing_nodes.slice(0, 10), (J) => (o(), s("div", {
                      key: J,
                      class: "drift-list-item"
                    }, " - " + l(J), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", gn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (te = (ee = t.status.comparison) == null ? void 0 : ee.extra_nodes) != null && te.length ? (o(), s("div", hn, [
                  f(pe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", pn, [
                    (o(!0), s(G, null, se(t.status.comparison.extra_nodes.slice(0, 10), (J) => (o(), s("div", {
                      key: J,
                      class: "drift-list-item"
                    }, " - " + l(J), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", yn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (K = (W = t.status.comparison) == null ? void 0 : W.version_mismatches) != null && K.length ? (o(), s("div", wn, [
                  f(pe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : u("", !0),
                (V = t.status.comparison) != null && V.packages_in_sync ? u("", !0) : (o(), s("div", kn, [
                  f(pe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (O = t.status.comparison) == null ? void 0 : O.disabled_nodes) != null && ae.length ? (o(), s("div", bn, [
                f(Te, { level: "4" }, {
                  default: a(() => [...C[23] || (C[23] = [
                    p("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", _n, [
                  C[24] || (C[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", $n, [
                  (o(!0), s(G, null, se(t.status.comparison.disabled_nodes.slice(0, 10), (J) => (o(), s("div", {
                    key: J,
                    class: "drift-list-item"
                  }, " • " + l(J), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", Cn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : u("", !0)
                ])
              ])) : u("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", xn, [
                f(Te, { level: "4" }, {
                  default: a(() => [...C[25] || (C[25] = [
                    p("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Sn, [
                  C[26] || (C[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[27] || (C[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : u("", !0),
              i.value ? (o(), s("div", In, [...C[28] || (C[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : u("", !0)
            ]),
            e("div", En, [
              f(Z, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (J) => E.$emit("close"))
              }, {
                default: a(() => [...C[29] || (C[29] = [
                  p(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), zn = /* @__PURE__ */ Y(Mn, [["__scopeId", "data-v-c67eed17"]]), Ln = { class: "health-section-header" }, Tn = { class: "suggestions-content" }, Dn = { class: "suggestions-text" }, Rn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, Nn = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: c }) {
    const n = t, r = b(!1), g = b(!1);
    function y() {
      r.value = !0;
    }
    function h() {
      r.value = !1, i("view-workflows");
    }
    function m() {
      r.value = !1, i("view-nodes");
    }
    const i = c, v = U(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), _ = U(() => n.status.has_changes), d = U(() => {
      const z = n.status.git_changes;
      return z.nodes_added.length > 0 || z.nodes_removed.length > 0 || z.workflow_changes;
    }), E = U(() => n.status.has_changes || v.value), C = U(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), S = U(() => n.status.git_changes.has_other_changes), w = U(() => {
      var z;
      return ((z = n.status.workflows.analyzed) == null ? void 0 : z.filter((T) => T.status === "broken")) || [];
    }), k = U(() => {
      var z;
      return ((z = n.status.workflows.analyzed) == null ? void 0 : z.filter(
        (T) => T.has_path_sync_issues && !T.has_issues
      )) || [];
    }), M = U(() => w.value.length > 0), N = U(() => M.value || k.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), R = U(() => {
      const z = [];
      return n.status.workflows.new.length > 0 && z.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && z.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && z.push(`${n.status.workflows.deleted.length} deleted`), z.length > 0 ? `${z.join(", ")} workflow${z.length === 1 && !z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), D = U(() => {
      var B, I;
      const z = [], T = n.status.comparison;
      return (B = T.missing_nodes) != null && B.length && z.push(`${T.missing_nodes.length} missing node${T.missing_nodes.length === 1 ? "" : "s"}`), (I = T.extra_nodes) != null && I.length && z.push(`${T.extra_nodes.length} untracked node${T.extra_nodes.length === 1 ? "" : "s"}`), z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${z.join(" and ")}.`;
    }), j = U(() => {
      var B, I;
      const z = [], T = n.status.comparison;
      return (B = T.extra_nodes) != null && B.length && (T.extra_nodes.slice(0, 3).forEach(($) => {
        z.push(`Untracked: ${$}`);
      }), T.extra_nodes.length > 3 && z.push(`...and ${T.extra_nodes.length - 3} more untracked`)), (I = T.missing_nodes) != null && I.length && (T.missing_nodes.slice(0, 3).forEach(($) => {
        z.push(`Missing: ${$}`);
      }), T.missing_nodes.length > 3 && z.push(`...and ${T.missing_nodes.length - 3} more missing`)), z;
    });
    return (z, T) => (o(), s(G, null, [
      f(Ee, null, {
        header: a(() => [
          f(Me, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[1] || (T[1] = (B) => g.value = !0),
            onMouseleave: T[2] || (T[2] = (B) => g.value = !1)
          }, [
            e("div", Ln, [
              f(Te, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...T[9] || (T[9] = [
                  p(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(no, { name: "fade" }, {
                default: a(() => [
                  g.value ? (o(), x(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...T[10] || (T[10] = [
                      p(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : u("", !0)
                ]),
                _: 1
              })
            ]),
            f(Po, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Dt({
              left: a(() => [
                t.status.workflows.new.length ? (o(), x(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.modified.length ? (o(), x(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.deleted.length ? (o(), x(Ve, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : u("", !0),
                f(Ve, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: v.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), x(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), x(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.workflow_changes ? (o(), x(Ve, {
                  key: 2,
                  icon: "●",
                  count: C.value,
                  label: C.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : u("", !0),
                S.value ? (o(), x(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : u("", !0),
                _.value && !d.value && !S.value ? (o(), x(Ve, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : u("", !0),
                _.value ? u("", !0) : (o(), x(Ve, {
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
                fn: a(() => [
                  T[12] || (T[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Tn, [
                    e("span", Dn, l(R.value), 1),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: T[0] || (T[0] = (B) => z.$emit("commit-changes"))
                    }, {
                      default: a(() => [...T[11] || (T[11] = [
                        p(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (o(), x(tt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: T[3] || (T[3] = (B) => z.$emit("create-branch"))
              }, {
                default: a(() => [...T[13] || (T[13] = [
                  p(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : u("", !0),
          N.value ? (o(), s("div", Rn, [
            f(Te, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...T[14] || (T[14] = [
                p(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            w.value.length > 0 ? (o(), x(tt, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: w.value.map((B) => `${B.name} — ${B.issue_summary}`)
            }, {
              actions: a(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[4] || (T[4] = (B) => z.$emit("view-workflows"))
                }, {
                  default: a(() => [...T[15] || (T[15] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            k.value.length > 0 ? (o(), x(tt, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: k.value.map((B) => `${B.name} — ${B.models_needing_path_sync_count} model path${B.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: a(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[5] || (T[5] = (B) => z.$emit("view-workflows"))
                }, {
                  default: a(() => [...T[16] || (T[16] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            t.status.missing_models_count > 0 && !M.value ? (o(), x(tt, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (B) => z.$emit("view-workflows"))
                }, {
                  default: a(() => [...T[17] || (T[17] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : u("", !0),
            t.status.comparison.is_synced ? u("", !0) : (o(), x(tt, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: D.value,
              items: j.value
            }, {
              actions: a(() => [
                f(Z, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y
                }, {
                  default: a(() => [...T[18] || (T[18] = [
                    p(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (B) => z.$emit("view-nodes"))
                }, {
                  default: a(() => [...T[19] || (T[19] = [
                    p(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : u("", !0),
          !N.value && !E.value ? (o(), x(Pe, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : u("", !0)
        ]),
        _: 1
      }),
      f(zn, {
        show: r.value,
        status: t.status,
        onClose: T[8] || (T[8] = (B) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), On = /* @__PURE__ */ Y(Nn, [["__scopeId", "data-v-698b3f43"]]), Un = ["type", "value", "placeholder", "disabled"], Bn = /* @__PURE__ */ X({
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
    const r = t, g = n, y = b(null);
    function h(m) {
      const i = m.target.value;
      g("update:modelValue", i);
    }
    return be(() => {
      r.autoFocus && y.value && y.value.focus();
    }), c({
      focus: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = y.value) == null ? void 0 : m.blur();
      }
    }), (m, i) => (o(), s("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ne(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        i[0] || (i[0] = je((v) => m.$emit("enter"), ["enter"])),
        i[1] || (i[1] = je((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: i[2] || (i[2] = (v) => m.$emit("focus")),
      onBlur: i[3] || (i[3] = (v) => m.$emit("blur"))
    }, null, 42, Un));
  }
}), kt = /* @__PURE__ */ Y(Bn, [["__scopeId", "data-v-0380d08f"]]), Pn = { class: "branch-create-form" }, Vn = { class: "form-actions" }, Fn = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, r = b(""), g = U(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function y() {
      g.value && (n("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", n("cancel");
    }
    return (m, i) => (o(), s("div", Pn, [
      f(kt, {
        modelValue: r.value,
        "onUpdate:modelValue": i[0] || (i[0] = (v) => r.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Vn, [
        f(Z, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: y
        }, {
          default: a(() => [...i[1] || (i[1] = [
            p(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(Z, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: a(() => [...i[2] || (i[2] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), An = /* @__PURE__ */ Y(Fn, [["__scopeId", "data-v-7c500394"]]), Wn = { class: "branch-list-item__indicator" }, Gn = { class: "branch-list-item__name" }, jn = {
  key: 0,
  class: "branch-list-item__actions"
}, Hn = {
  key: 0,
  class: "branch-list-item__current-label"
}, qn = /* @__PURE__ */ X({
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
      class: ne(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, [
      e("span", Wn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Gn, l(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), s("div", jn, [
        de(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", Hn, " current ")) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), Kn = /* @__PURE__ */ Y(qn, [["__scopeId", "data-v-c6581a24"]]), Jn = {
  key: 2,
  class: "branch-list"
}, Qn = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const n = c, r = b(!1);
    function g(h) {
      n("create", h), y();
    }
    function y() {
      r.value = !1;
    }
    return (h, m) => (o(), x(Ee, null, {
      header: a(() => [
        f(Me, { title: "BRANCHES" }, {
          actions: a(() => [
            f(Z, {
              variant: "ghost",
              size: "sm",
              onClick: m[0] || (m[0] = (i) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...m[1] || (m[1] = [
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
      content: a(() => [
        r.value ? (o(), x(An, {
          key: 0,
          onCreate: g,
          onCancel: y
        })) : u("", !0),
        t.branches.length === 0 ? (o(), x(Pe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", Jn, [
          (o(!0), s(G, null, se(t.branches, (i) => (o(), x(Kn, {
            key: i.name,
            "branch-name": i.name,
            "is-current": i.is_current
          }, {
            actions: a(() => [
              i.is_current ? u("", !0) : (o(), x(Z, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (v) => h.$emit("switch", i.name)
              }, {
                default: a(() => [...m[2] || (m[2] = [
                  p(" Switch ", -1)
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
}), Xn = /* @__PURE__ */ Y(Qn, [["__scopeId", "data-v-763d6ec4"]]), Yn = { class: "commit-list" }, Zn = /* @__PURE__ */ X({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (o(), s("div", Yn, [
      de(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ea = /* @__PURE__ */ Y(Zn, [["__scopeId", "data-v-8c5ee761"]]), ta = { class: "commit-hash" }, oa = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = U(() => c.hash.slice(0, c.length));
    return (r, g) => (o(), s("span", ta, l(n.value), 1));
  }
}), Ht = /* @__PURE__ */ Y(oa, [["__scopeId", "data-v-7c333cc6"]]), sa = { class: "commit-message" }, na = { class: "commit-date" }, aa = /* @__PURE__ */ X({
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
    function g() {
      n.clickable && r("click");
    }
    return (y, h) => (o(), s("div", {
      class: ne(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      f(Ht, { hash: t.hash }, null, 8, ["hash"]),
      e("span", sa, l(t.message), 1),
      e("span", na, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = we(() => {
        }, ["stop"]))
      }, [
        de(y.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), la = /* @__PURE__ */ Y(aa, [["__scopeId", "data-v-dd7c621b"]]), ia = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (o(), x(Ee, null, {
      header: a(() => [
        f(Me, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), x(Pe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), x(ea, { key: 1 }, {
          default: a(() => [
            (o(!0), s(G, null, se(t.commits, (r) => (o(), x(la, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (g) => c.$emit("select", r)
            }, {
              actions: a(() => [
                f(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => c.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...n[0] || (n[0] = [
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
}), ra = /* @__PURE__ */ Y(ia, [["__scopeId", "data-v-981c3c64"]]), n1 = [
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
], a1 = {
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
}, da = [
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
], l1 = [
  ...da,
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
function mt() {
  return !1;
}
function Ie() {
  const t = b(!1), c = b(null);
  async function n(Q, ie) {
    var Ce;
    if (!((Ce = window.app) != null && Ce.api))
      throw new Error("ComfyUI API not available");
    const ve = await window.app.api.fetchApi(Q, ie);
    if (!ve.ok) {
      const H = await ve.json().catch(() => ({}));
      throw new Error(H.error || H.message || `Request failed: ${ve.status}`);
    }
    return ve.json();
  }
  async function r(Q = !1) {
    return n(Q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(Q, ie = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Q, allow_issues: ie })
    });
  }
  async function y(Q = 10, ie = 0) {
    return n(`/v2/comfygit/log?limit=${Q}&offset=${ie}`);
  }
  async function h(Q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Q })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function i(Q) {
    return n(`/v2/comfygit/commit/${Q}`);
  }
  async function v(Q, ie = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Q, force: ie })
    });
  }
  async function _(Q, ie = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, start_point: ie })
    });
  }
  async function d(Q, ie = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Q, force: ie })
    });
  }
  async function E() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Q = await r();
        return [{
          name: Q.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + Q.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: Q.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: Q.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function C(Q) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: Q })
    });
  }
  async function S() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function w(Q, ie, ve) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, pytorch_backend: ie, clone_from: ve })
    });
  }
  async function k(Q) {
    return n(`/v2/workspace/environments/${Q}`, {
      method: "DELETE"
    });
  }
  async function M(Q = !1) {
    try {
      return n(Q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ie = await r(Q), ve = [];
      return ie.workflows.new.forEach((Ce) => {
        ve.push({ name: Ce, status: "new", missing_nodes: 0, missing_models: 0, path: Ce });
      }), ie.workflows.modified.forEach((Ce) => {
        ve.push({ name: Ce, status: "modified", missing_nodes: 0, missing_models: 0, path: Ce });
      }), ie.workflows.synced.forEach((Ce) => {
        ve.push({ name: Ce, status: "synced", missing_nodes: 0, missing_models: 0, path: Ce });
      }), ve;
    }
  }
  async function N(Q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/details`);
  }
  async function R(Q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/resolve`, {
      method: "POST"
    });
  }
  async function D(Q, ie, ve) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ie, install_models: ve })
    });
  }
  async function j(Q, ie, ve) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ie, importance: ve })
    });
  }
  async function z() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function T() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function B(Q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(Q)}`);
  }
  async function I(Q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function $(Q, ie) {
    return n(`/v2/workspace/models/${Q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function P(Q, ie) {
    return n(`/v2/workspace/models/${Q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function A(Q) {
    return n(`/v2/workspace/models/${Q}`, {
      method: "DELETE"
    });
  }
  async function ee(Q) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function te() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function W() {
    return n("/v2/workspace/models/directory");
  }
  async function K(Q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function V() {
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
  async function O(Q) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function ae(Q, ie) {
    try {
      const ve = new URLSearchParams();
      return Q && ve.append("level", Q), ie && ve.append("lines", ie.toString()), n(`/v2/comfygit/debug/logs?${ve}`);
    } catch {
      return [];
    }
  }
  async function J(Q, ie) {
    try {
      const ve = new URLSearchParams();
      return Q && ve.append("level", Q), ie && ve.append("lines", ie.toString()), n(`/v2/workspace/debug/logs?${ve}`);
    } catch {
      return [];
    }
  }
  async function $e() {
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
  async function ge(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/track-dev`, {
      method: "POST"
    });
  }
  async function Re(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/install`, {
      method: "POST"
    });
  }
  async function rt(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/update`, {
      method: "POST"
    });
  }
  async function fe(Q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function De() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function dt(Q, ie) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, url: ie })
    });
  }
  async function Qe(Q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function ze(Q, ie, ve) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ie, push_url: ve })
    });
  }
  async function ct(Q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/fetch`, {
      method: "POST"
    });
  }
  async function et(Q) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/status`);
    } catch {
      return null;
    }
  }
  async function ut(Q = "skip", ie = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Q,
        remove_extra_nodes: ie
      })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: r,
    commit: g,
    getHistory: y,
    exportEnv: h,
    // Git Operations
    getBranches: m,
    getCommitDetail: i,
    checkout: v,
    createBranch: _,
    switchBranch: d,
    // Environment Management
    getEnvironments: E,
    switchEnvironment: C,
    getSwitchProgress: S,
    createEnvironment: w,
    deleteEnvironment: k,
    // Workflow Management
    getWorkflows: M,
    getWorkflowDetails: N,
    resolveWorkflow: R,
    installWorkflowDeps: D,
    setModelImportance: j,
    // Model Management
    getEnvironmentModels: z,
    getWorkspaceModels: T,
    getModelDetails: B,
    openFileLocation: I,
    addModelSource: $,
    removeModelSource: P,
    deleteModel: A,
    downloadModel: ee,
    scanWorkspaceModels: te,
    getModelsDirectory: W,
    setModelsDirectory: K,
    // Settings
    getConfig: V,
    updateConfig: O,
    // Debug/Logs
    getEnvironmentLogs: ae,
    getWorkspaceLogs: J,
    // Node Management
    getNodes: $e,
    trackNodeAsDev: ge,
    installNode: Re,
    updateNode: rt,
    uninstallNode: fe,
    // Git Remotes
    getRemotes: De,
    addRemote: dt,
    removeRemote: Qe,
    updateRemoteUrl: ze,
    fetchRemote: ct,
    getRemoteSyncStatus: et,
    // Environment Sync
    syncEnvironmentManually: ut
  };
}
const ca = { class: "base-modal-header" }, ua = {
  key: 0,
  class: "base-modal-title"
}, ma = { class: "base-modal-body" }, va = {
  key: 0,
  class: "base-modal-loading"
}, fa = {
  key: 1,
  class: "base-modal-error"
}, ga = {
  key: 0,
  class: "base-modal-footer"
}, ha = /* @__PURE__ */ X({
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
    function g() {
      n.closeOnOverlayClick && r("close");
    }
    function y(h) {
      h.key === "Escape" && r("close");
    }
    return be(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), ao(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (h, m) => (o(), x(Se, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: ne(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = we(() => {
          }, ["stop"]))
        }, [
          e("div", ca, [
            de(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", ua, l(t.title), 1)) : u("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (i) => h.$emit("close"))
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
          e("div", ma, [
            t.loading ? (o(), s("div", va, "Loading...")) : t.error ? (o(), s("div", fa, l(t.error), 1)) : de(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", ga, [
            de(h.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), at = /* @__PURE__ */ Y(ha, [["__scopeId", "data-v-2125a0e6"]]), pa = ["type", "disabled"], ya = {
  key: 0,
  class: "spinner"
}, wa = /* @__PURE__ */ X({
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
      class: ne(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", ya)) : u("", !0),
      de(c.$slots, "default", {}, void 0, !0)
    ], 10, pa));
  }
}), le = /* @__PURE__ */ Y(wa, [["__scopeId", "data-v-f3452606"]]), ka = {
  key: 0,
  class: "base-title-count"
}, ba = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (o(), x(Lt(`h${t.level}`), {
      class: ne(["base-title", t.variant])
    }, {
      default: a(() => [
        de(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", ka, "(" + l(t.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pt = /* @__PURE__ */ Y(ba, [["__scopeId", "data-v-5a01561d"]]), _a = ["value", "disabled"], $a = {
  key: 0,
  value: "",
  disabled: ""
}, Ca = ["value"], xa = {
  key: 0,
  class: "base-select-error"
}, Sa = /* @__PURE__ */ X({
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
    return (r, g) => (o(), s("div", {
      class: ne(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ne(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (y) => r.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), s("option", $a, l(t.placeholder), 1)) : u("", !0),
        (o(!0), s(G, null, se(t.options, (y) => (o(), s("option", {
          key: c(y),
          value: c(y)
        }, l(n(y)), 9, Ca))), 128))
      ], 42, _a),
      t.error ? (o(), s("span", xa, l(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Ia = /* @__PURE__ */ Y(Sa, [["__scopeId", "data-v-7436d745"]]), Ea = { class: "popover-header" }, Ma = { class: "popover-title" }, za = { class: "popover-content" }, La = {
  key: 0,
  class: "popover-actions"
}, Ta = /* @__PURE__ */ X({
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
          style: Je({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = we(() => {
          }, ["stop"]))
        }, [
          e("div", Ea, [
            e("h4", Ma, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", za, [
            de(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), s("div", La, [
            de(c.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), He = /* @__PURE__ */ Y(Ta, [["__scopeId", "data-v-42815ace"]]), Da = { class: "detail-section" }, Ra = {
  key: 0,
  class: "empty-message"
}, Na = { class: "model-header" }, Oa = { class: "model-name" }, Ua = { class: "model-details" }, Ba = { class: "model-row" }, Pa = { class: "model-row" }, Va = { class: "label" }, Fa = {
  key: 0,
  class: "model-row model-row-nodes"
}, Aa = { class: "node-list" }, Wa = ["onClick"], Ga = {
  key: 1,
  class: "model-row"
}, ja = { class: "value" }, Ha = {
  key: 0,
  class: "model-actions"
}, qa = { class: "detail-section" }, Ka = {
  key: 0,
  class: "empty-message"
}, Ja = { class: "node-name" }, Qa = {
  key: 0,
  class: "node-version"
}, Xa = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, r = c, { getWorkflowDetails: g, setModelImportance: y, installWorkflowDeps: h } = Ie(), m = b(null), i = b(!1), v = b(null), _ = b(!1), d = b({}), E = b({}), C = b(!1), S = b(/* @__PURE__ */ new Set()), w = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(I) {
      switch (I) {
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
    function M(I) {
      switch (I) {
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
    function N(I) {
      if (!I.loaded_by || I.loaded_by.length === 0) return [];
      const $ = I.hash || I.filename;
      return S.value.has($) ? I.loaded_by : I.loaded_by.slice(0, 3);
    }
    function R(I) {
      return S.value.has(I);
    }
    function D(I) {
      S.value.has(I) ? S.value.delete(I) : S.value.add(I), S.value = new Set(S.value);
    }
    async function j() {
      i.value = !0, v.value = null;
      try {
        m.value = await g(n.workflowName);
      } catch (I) {
        v.value = I instanceof Error ? I.message : "Failed to load workflow details";
      } finally {
        i.value = !1;
      }
    }
    function z(I, $) {
      d.value[I] = $, _.value = !0;
    }
    async function T() {
      if (!_.value) {
        r("close");
        return;
      }
      i.value = !0, v.value = null;
      try {
        for (const [I, $] of Object.entries(d.value))
          await y(n.workflowName, I, $);
        r("refresh"), r("close");
      } catch (I) {
        v.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        i.value = !1;
      }
    }
    async function B(I) {
      E.value[I] = !0, v.value = null;
      try {
        await h(n.workflowName, !0, !1), await j();
      } catch ($) {
        v.value = $ instanceof Error ? $.message : "Failed to install node";
      } finally {
        E.value[I] = !1;
      }
    }
    return be(j), (I, $) => (o(), s(G, null, [
      f(at, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: i.value,
        error: v.value || void 0,
        onClose: $[5] || ($[5] = (P) => r("close"))
      }, {
        body: a(() => [
          m.value ? (o(), s(G, { key: 0 }, [
            e("section", Da, [
              f(pt, { variant: "section" }, {
                default: a(() => [
                  p("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), s("div", Ra, " No models used in this workflow ")) : u("", !0),
              (o(!0), s(G, null, se(m.value.models, (P) => (o(), s("div", {
                key: P.hash || P.filename,
                class: "model-card"
              }, [
                e("div", Na, [
                  $[7] || ($[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Oa, l(P.filename), 1)
                ]),
                e("div", Ua, [
                  e("div", Ba, [
                    $[8] || ($[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ne(["value", k(P.status)])
                    }, l(M(P.status)), 3)
                  ]),
                  e("div", Pa, [
                    e("span", Va, [
                      $[9] || ($[9] = p(" Importance: ", -1)),
                      f(jt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: $[0] || ($[0] = (A) => C.value = !0)
                      })
                    ]),
                    f(Ia, {
                      "model-value": d.value[P.filename] || P.importance,
                      options: w,
                      "onUpdate:modelValue": (A) => z(P.filename, A)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  P.loaded_by && P.loaded_by.length > 0 ? (o(), s("div", Fa, [
                    $[10] || ($[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Aa, [
                      (o(!0), s(G, null, se(N(P), (A, ee) => (o(), s("div", {
                        key: `${A.node_id}-${ee}`,
                        class: "node-reference"
                      }, l(A.node_type) + " (Node #" + l(A.node_id) + ") ", 1))), 128)),
                      P.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (A) => D(P.hash || P.filename)
                      }, l(R(P.hash || P.filename) ? "▼ Show less" : `▶ View all (${P.loaded_by.length})`), 9, Wa)) : u("", !0)
                    ])
                  ])) : u("", !0),
                  P.size_mb ? (o(), s("div", Ga, [
                    $[11] || ($[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", ja, l(P.size_mb) + " MB", 1)
                  ])) : u("", !0)
                ]),
                P.status !== "available" ? (o(), s("div", Ha, [
                  P.status === "downloadable" ? (o(), x(le, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: $[1] || ($[1] = (A) => r("resolve"))
                  }, {
                    default: a(() => [...$[12] || ($[12] = [
                      p(" Download ", -1)
                    ])]),
                    _: 1
                  })) : P.status === "path_mismatch" ? (o(), x(le, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: $[2] || ($[2] = (A) => r("resolve"))
                  }, {
                    default: a(() => [...$[13] || ($[13] = [
                      p(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), x(le, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: $[3] || ($[3] = (A) => r("resolve"))
                  }, {
                    default: a(() => [...$[14] || ($[14] = [
                      p(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : u("", !0)
              ]))), 128))
            ]),
            e("section", qa, [
              f(pt, { variant: "section" }, {
                default: a(() => [
                  p("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), s("div", Ka, " No custom nodes used in this workflow ")) : u("", !0),
              (o(!0), s(G, null, se(m.value.nodes, (P) => (o(), s("div", {
                key: P.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ne(["node-status", P.status === "installed" ? "installed" : "missing"])
                }, l(P.status === "installed" ? "✓" : "✕"), 3),
                e("span", Ja, l(P.name), 1),
                P.version ? (o(), s("span", Qa, "v" + l(P.version), 1)) : u("", !0),
                P.status === "missing" ? (o(), x(le, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: E.value[P.name],
                  onClick: (A) => B(P.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...$[15] || ($[15] = [
                    p(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : u("", !0)
              ]))), 128))
            ])
          ], 64)) : u("", !0)
        ]),
        footer: a(() => [
          f(le, {
            variant: "secondary",
            onClick: $[4] || ($[4] = (P) => r("close"))
          }, {
            default: a(() => [...$[16] || ($[16] = [
              p(" Close ", -1)
            ])]),
            _: 1
          }),
          _.value ? (o(), x(le, {
            key: 0,
            variant: "primary",
            onClick: T
          }, {
            default: a(() => [...$[17] || ($[17] = [
              p(" Save Changes ", -1)
            ])]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(He, {
        show: C.value,
        title: "Model Importance Levels",
        onClose: $[6] || ($[6] = (P) => C.value = !1)
      }, {
        content: a(() => [...$[18] || ($[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              p(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              p(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              p(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ya = /* @__PURE__ */ Y(Xa, [["__scopeId", "data-v-0b14d32e"]]), me = Gt({
  items: [],
  status: "idle"
});
let Fe = null;
function qt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function St(t) {
  return me.items.find((c) => c.id === t);
}
async function ot() {
  if (me.status === "downloading") return;
  const t = me.items.find((c) => c.status === "queued");
  if (!t) {
    me.status = "idle";
    return;
  }
  me.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Za(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    me.status = "idle", ot();
  }
}
async function Za(t) {
  return new Promise((c, n) => {
    Fe && (Fe.close(), Fe = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Fe = g;
    let y = Date.now(), h = 0, m = !1;
    g.onmessage = (i) => {
      try {
        const v = JSON.parse(i.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const _ = Date.now(), d = (_ - y) / 1e3;
            if (d > 0.5) {
              const E = t.downloaded - h;
              if (t.speed = E / d, y = _, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const C = t.size - t.downloaded;
                t.eta = C / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, g.close(), Fe = null, c();
            break;
          case "error":
            m = !0, g.close(), Fe = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), Fe = null, m || n(new Error("Connection lost"));
    };
  });
}
async function el() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (me.items.some((g) => g.url === n.url && g.filename === n.filename))
        continue;
      const r = {
        id: qt(),
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
      me.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function bt() {
  function t(k) {
    for (const M of k) {
      if (me.items.some(
        (D) => D.url === M.url && D.targetPath === M.targetPath && ["queued", "downloading", "paused", "completed"].includes(D.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${M.filename}`);
        continue;
      }
      const R = {
        id: qt(),
        workflow: M.workflow,
        filename: M.filename,
        url: M.url,
        targetPath: M.targetPath,
        size: M.size || 0,
        type: M.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      me.items.push(R);
    }
    me.status === "idle" && ot();
  }
  async function c(k) {
    const M = St(k);
    if (M) {
      if (M.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(M.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Fe && (Fe.close(), Fe = null), M.status = "failed", M.error = "Cancelled by user", me.status = "idle", ot();
      } else if (M.status === "queued") {
        const N = me.items.findIndex((R) => R.id === k);
        N >= 0 && me.items.splice(N, 1);
      }
    }
  }
  function n(k) {
    const M = St(k);
    !M || M.status !== "failed" || (M.status = "queued", M.error = void 0, M.progress = 0, M.downloaded = 0, me.status === "idle" && ot());
  }
  function r(k) {
    const M = St(k);
    !M || M.status !== "paused" || (M.status = "queued", me.status === "idle" && ot());
  }
  function g() {
    const k = me.items.filter((M) => M.status === "paused");
    for (const M of k)
      M.status = "queued";
    me.status === "idle" && ot();
  }
  function y(k) {
    const M = me.items.findIndex((N) => N.id === k);
    M >= 0 && ["completed", "failed", "paused"].includes(me.items[M].status) && me.items.splice(M, 1);
  }
  function h() {
    me.items = me.items.filter((k) => k.status !== "completed");
  }
  function m() {
    me.items = me.items.filter((k) => k.status !== "failed");
  }
  const i = U(
    () => me.items.find((k) => k.status === "downloading")
  ), v = U(
    () => me.items.filter((k) => k.status === "queued")
  ), _ = U(
    () => me.items.filter((k) => k.status === "completed")
  ), d = U(
    () => me.items.filter((k) => k.status === "failed")
  ), E = U(
    () => me.items.filter((k) => k.status === "paused")
  ), C = U(() => me.items.length > 0), S = U(
    () => me.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), w = U(
    () => me.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: lo(me),
    // Computed
    currentDownload: i,
    queuedItems: v,
    completedItems: _,
    failedItems: d,
    pausedItems: E,
    hasItems: C,
    activeCount: S,
    hasPaused: w,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: g,
    removeItem: y,
    clearCompleted: h,
    clearFailed: m,
    loadPendingDownloads: el
  };
}
function tl() {
  const t = b(null), c = b(null), n = b([]), r = b([]), g = b(!1), y = b(null);
  async function h(M, N) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(M, N);
    if (!R.ok) {
      const j = await R.json().catch(() => ({})), z = j.error || j.message || `Request failed: ${R.status}`;
      throw new Error(z);
    }
    return R.json();
  }
  async function m(M) {
    g.value = !0, y.value = null;
    try {
      let N;
      return mt() || (N = await h(
        `/v2/comfygit/workflow/${M}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = N, N;
    } catch (N) {
      const R = N instanceof Error ? N.message : "Unknown error occurred";
      throw y.value = R, N;
    } finally {
      g.value = !1;
    }
  }
  async function i(M, N, R) {
    g.value = !0, y.value = null;
    try {
      let D;
      if (!mt()) {
        const j = Object.fromEntries(N), z = Object.fromEntries(R);
        D = await h(
          `/v2/comfygit/workflow/${M}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: j,
              model_choices: z
            })
          }
        );
      }
      return c.value = D, D;
    } catch (D) {
      const j = D instanceof Error ? D.message : "Unknown error occurred";
      throw y.value = j, D;
    } finally {
      g.value = !1;
    }
  }
  async function v(M, N = 10) {
    g.value = !0, y.value = null;
    try {
      let R;
      return mt() || (R = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: N })
        }
      )), n.value = R.results, R.results;
    } catch (R) {
      const D = R instanceof Error ? R.message : "Unknown error occurred";
      throw y.value = D, R;
    } finally {
      g.value = !1;
    }
  }
  async function _(M, N = 10) {
    g.value = !0, y.value = null;
    try {
      let R;
      return mt() || (R = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: N })
        }
      )), r.value = R.results, R.results;
    } catch (R) {
      const D = R instanceof Error ? R.message : "Unknown error occurred";
      throw y.value = D, R;
    } finally {
      g.value = !1;
    }
  }
  const d = Gt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function E() {
    d.phase = "idle", d.currentFile = void 0, d.currentFileIndex = void 0, d.totalFiles = void 0, d.bytesDownloaded = void 0, d.bytesTotal = void 0, d.completedFiles = [], d.nodesToInstall = [], d.nodesInstalled = [], d.installError = void 0, d.needsRestart = void 0, d.error = void 0;
  }
  async function C(M) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0;
    try {
      let N;
      return mt() || (N = await h(
        `/v2/comfygit/workflow/${M}/install`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), d.nodesInstalled = N.nodes_installed, d.needsRestart = N.nodes_installed.length > 0, N;
    } catch (N) {
      const R = N instanceof Error ? N.message : "Failed to install nodes";
      throw d.installError = R, N;
    }
  }
  async function S(M, N, R) {
    E(), d.phase = "resolving", y.value = null;
    const D = Object.fromEntries(N), j = Object.fromEntries(R);
    try {
      const z = await fetch(`/v2/comfygit/workflow/${M}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: D,
          model_choices: j
        })
      });
      if (!z.ok)
        throw new Error(`Request failed: ${z.status}`);
      if (!z.body)
        throw new Error("No response body");
      const T = z.body.getReader(), B = new TextDecoder();
      let I = "";
      for (; ; ) {
        const { done: $, value: P } = await T.read();
        if ($) break;
        I += B.decode(P, { stream: !0 });
        const A = I.split(`

`);
        I = A.pop() || "";
        for (const ee of A) {
          if (!ee.trim()) continue;
          const te = ee.split(`
`);
          let W = "", K = "";
          for (const V of te)
            V.startsWith("event: ") ? W = V.slice(7) : V.startsWith("data: ") && (K = V.slice(6));
          if (K)
            try {
              const V = JSON.parse(K);
              w(W, V);
            } catch (V) {
              console.warn("Failed to parse SSE event:", V);
            }
        }
      }
    } catch (z) {
      const T = z instanceof Error ? z.message : "Unknown error occurred";
      throw y.value = T, d.error = T, d.phase = "error", z;
    }
  }
  function w(M, N) {
    switch (M) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = N.total;
        break;
      case "file_start":
        d.currentFile = N.filename, d.currentFileIndex = N.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = N.downloaded, d.bytesTotal = N.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: N.filename,
          success: N.success,
          error: N.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = N.nodes_to_install || [], N.download_results && (d.completedFiles = N.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = N.message, d.phase = "error", y.value = N.message;
        break;
    }
  }
  function k(M, N) {
    const { addToQueue: R } = bt(), D = N.filter((j) => j.url && j.target_path).map((j) => ({
      workflow: M,
      filename: j.filename,
      url: j.url,
      targetPath: j.target_path,
      size: j.size || 0,
      type: "model"
    }));
    return D.length > 0 && R(D), D.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: r,
    isLoading: g,
    error: y,
    progress: d,
    // Methods
    analyzeWorkflow: m,
    applyResolution: i,
    applyResolutionWithProgress: S,
    installNodes: C,
    searchNodes: v,
    searchModels: _,
    resetProgress: E,
    queueModelDownloads: k
  };
}
const ol = { class: "resolution-stepper" }, sl = { class: "stepper-header" }, nl = ["onClick"], al = {
  key: 0,
  class: "step-icon"
}, ll = {
  key: 1,
  class: "step-number"
}, il = { class: "step-label" }, rl = {
  key: 0,
  class: "step-connector"
}, dl = { class: "stepper-content" }, cl = /* @__PURE__ */ X({
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
    function g(v) {
      var _;
      if ((_ = n.stepStats) != null && _[v]) {
        const d = n.stepStats[v];
        return d.total > 0 && d.resolved === d.total;
      }
      return n.completedSteps.includes(v);
    }
    function y(v) {
      var _;
      if ((_ = n.stepStats) != null && _[v]) {
        const d = n.stepStats[v];
        return d.resolved > 0 && d.resolved < d.total;
      }
      return !1;
    }
    function h(v) {
      return g(v) ? "state-complete" : y(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function i(v) {
      r("step-change", v);
    }
    return (v, _) => (o(), s("div", ol, [
      e("div", sl, [
        (o(!0), s(G, null, se(t.steps, (d, E) => (o(), s("div", {
          key: d.id,
          class: ne(["step", {
            active: t.currentStep === d.id,
            completed: g(d.id),
            "in-progress": y(d.id),
            disabled: m(d.id)
          }]),
          onClick: (C) => i(d.id)
        }, [
          e("div", {
            class: ne(["step-indicator", h(d.id)])
          }, [
            g(d.id) ? (o(), s("span", al, "✓")) : (o(), s("span", ll, l(E + 1), 1))
          ], 2),
          e("div", il, l(d.label), 1),
          E < t.steps.length - 1 ? (o(), s("div", rl)) : u("", !0)
        ], 10, nl))), 128))
      ]),
      e("div", dl, [
        de(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ul = /* @__PURE__ */ Y(cl, [["__scopeId", "data-v-2a7b3af8"]]), ml = /* @__PURE__ */ X({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = U(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), r = U(() => `confidence-${n.value}`), g = U(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (y, h) => (o(), s("span", {
      class: ne(["confidence-badge", r.value, t.size])
    }, l(g.value), 3));
  }
}), Ot = /* @__PURE__ */ Y(ml, [["__scopeId", "data-v-17ec4b80"]]), vl = { class: "node-info" }, fl = { class: "node-info-text" }, gl = { class: "item-body" }, hl = {
  key: 0,
  class: "resolved-state"
}, pl = {
  key: 1,
  class: "multiple-options"
}, yl = { class: "options-list" }, wl = ["onClick"], kl = ["name", "value", "checked", "onChange"], bl = { class: "option-content" }, _l = { class: "option-header" }, $l = { class: "option-package-id" }, Cl = {
  key: 0,
  class: "option-title"
}, xl = { class: "option-meta" }, Sl = {
  key: 0,
  class: "installed-badge"
}, Il = { class: "action-buttons" }, El = {
  key: 2,
  class: "unresolved"
}, Ml = { class: "action-buttons" }, zl = /* @__PURE__ */ X({
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
    const n = t, r = c, g = U(() => !!n.choice);
    U(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.action;
    }), U(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.package_id;
    });
    const y = U(() => {
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
    return (m, i) => (o(), s("div", {
      class: ne(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", vl, [
        e("span", fl, [
          i[7] || (i[7] = p("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", gl, [
        g.value ? (o(), s("div", hl, [
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (v) => r("clear-choice"))
          }, {
            default: a(() => [...i[8] || (i[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", pl, [
          i[12] || (i[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", yl, [
            (o(!0), s(G, null, se(t.options, (v, _) => (o(), s("label", {
              key: v.package_id,
              class: ne(["option-card", { selected: t.selectedOptionIndex === _ }]),
              onClick: (d) => h(_)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: _,
                checked: t.selectedOptionIndex === _,
                onChange: (d) => h(_)
              }, null, 40, kl),
              e("div", bl, [
                e("div", _l, [
                  e("span", $l, l(v.package_id), 1),
                  f(Ot, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (o(), s("div", Cl, l(v.title), 1)) : u("", !0),
                e("div", xl, [
                  v.is_installed ? (o(), s("span", Sl, "Already Installed")) : u("", !0)
                ])
              ])
            ], 10, wl))), 128))
          ]),
          e("div", Il, [
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: i[1] || (i[1] = (v) => r("search"))
            }, {
              default: a(() => [...i[9] || (i[9] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: i[2] || (i[2] = (v) => r("manual-entry"))
            }, {
              default: a(() => [...i[10] || (i[10] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[3] || (i[3] = (v) => r("mark-optional"))
            }, {
              default: a(() => [...i[11] || (i[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", El, [
          i[16] || (i[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Ml, [
            f(le, {
              variant: "primary",
              size: "sm",
              onClick: i[4] || (i[4] = (v) => r("search"))
            }, {
              default: a(() => [...i[13] || (i[13] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[5] || (i[5] = (v) => r("manual-entry"))
            }, {
              default: a(() => [...i[14] || (i[14] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[6] || (i[6] = (v) => r("mark-optional"))
            }, {
              default: a(() => [...i[15] || (i[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ll = /* @__PURE__ */ Y(zl, [["__scopeId", "data-v-e02629e7"]]), Tl = { class: "item-navigator" }, Dl = { class: "nav-item-info" }, Rl = ["title"], Nl = { class: "nav-controls" }, Ol = { class: "nav-arrows" }, Ul = ["disabled"], Bl = ["disabled"], Pl = { class: "nav-position" }, Vl = /* @__PURE__ */ X({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (r, g) => (o(), s("div", Tl, [
      e("div", Dl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Rl)
      ]),
      e("div", Nl, [
        e("div", Ol, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (y) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Ul),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (y) => n("next")),
            title: "Next item"
          }, " → ", 8, Bl)
        ]),
        e("span", Pl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), Kt = /* @__PURE__ */ Y(Vl, [["__scopeId", "data-v-74af7920"]]), Fl = ["type", "value", "placeholder", "disabled"], Al = {
  key: 0,
  class: "base-input-error"
}, Wl = /* @__PURE__ */ X({
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
      class: ne(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ne(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = je((r) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = je((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Fl),
      t.error ? (o(), s("span", Al, l(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ Y(Wl, [["__scopeId", "data-v-9ba02cdc"]]), Gl = { class: "node-resolution-step" }, jl = { class: "step-header" }, Hl = { class: "stat-badge" }, ql = {
  key: 1,
  class: "step-body"
}, Kl = {
  key: 2,
  class: "empty-state"
}, Jl = { class: "node-search-modal" }, Ql = { class: "node-modal-body" }, Xl = {
  key: 0,
  class: "node-search-results"
}, Yl = ["onClick"], Zl = { class: "node-result-header" }, ei = { class: "node-result-package-id" }, ti = {
  key: 0,
  class: "node-result-description"
}, oi = {
  key: 1,
  class: "node-no-results"
}, si = {
  key: 2,
  class: "node-searching"
}, ni = { class: "node-manual-entry-modal" }, ai = { class: "node-modal-body" }, li = { class: "node-modal-actions" }, ii = /* @__PURE__ */ X({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = b(0), y = b(!1), h = b(!1), m = b(""), i = b(""), v = b([]), _ = b(!1), d = U(() => n.nodes[g.value]), E = U(() => n.nodes.filter((P) => n.nodeChoices.has(P.node_type)).length), C = U(() => {
      var A;
      if (!d.value) return "not-found";
      const P = n.nodeChoices.get(d.value.node_type);
      if (P)
        switch (P.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (A = d.value.options) != null && A.length ? "ambiguous" : "not-found";
    }), S = U(() => {
      var A;
      if (!d.value) return;
      const P = n.nodeChoices.get(d.value.node_type);
      if (P)
        switch (P.action) {
          case "install":
            return P.package_id ? `→ ${P.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (A = d.value.options) != null && A.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function w(P) {
      P >= 0 && P < n.nodes.length && (g.value = P);
    }
    function k() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function M() {
      d.value && r("skip", d.value.node_type);
    }
    function N(P) {
      d.value && r("option-selected", d.value.node_type, P);
    }
    function R() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function D() {
      d.value && (m.value = d.value.node_type, y.value = !0);
    }
    function j() {
      i.value = "", h.value = !0;
    }
    function z() {
      y.value = !1, m.value = "", v.value = [];
    }
    function T() {
      h.value = !1, i.value = "";
    }
    function B() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function I(P) {
      d.value && (r("manual-entry", d.value.node_type, P.package_id), z());
    }
    function $() {
      !d.value || !i.value.trim() || (r("manual-entry", d.value.node_type, i.value.trim()), T());
    }
    return (P, A) => {
      var ee, te;
      return o(), s("div", Gl, [
        e("div", jl, [
          A[4] || (A[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Hl, l(E.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        d.value ? (o(), x(Kt, {
          key: 0,
          "item-name": d.value.node_type,
          "current-index": g.value,
          "total-items": t.nodes.length,
          onPrev: A[0] || (A[0] = (W) => w(g.value - 1)),
          onNext: A[1] || (A[1] = (W) => w(g.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        d.value ? (o(), s("div", ql, [
          f(Ll, {
            "node-type": d.value.node_type,
            "has-multiple-options": !!((ee = d.value.options) != null && ee.length),
            options: d.value.options,
            choice: (te = t.nodeChoices) == null ? void 0 : te.get(d.value.node_type),
            status: C.value,
            "status-label": S.value,
            onMarkOptional: k,
            onSkip: M,
            onManualEntry: j,
            onSearch: D,
            onOptionSelected: N,
            onClearChoice: R
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Kl, [...A[5] || (A[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), x(Se, { to: "body" }, [
          y.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: we(z, ["self"])
          }, [
            e("div", Jl, [
              e("div", { class: "node-modal-header" }, [
                A[6] || (A[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              e("div", Ql, [
                f(Be, {
                  modelValue: m.value,
                  "onUpdate:modelValue": A[2] || (A[2] = (W) => m.value = W),
                  placeholder: "Search by node type, package name...",
                  onInput: B
                }, null, 8, ["modelValue"]),
                v.value.length > 0 ? (o(), s("div", Xl, [
                  (o(!0), s(G, null, se(v.value, (W) => (o(), s("div", {
                    key: W.package_id,
                    class: "node-search-result-item",
                    onClick: (K) => I(W)
                  }, [
                    e("div", Zl, [
                      e("code", ei, l(W.package_id), 1),
                      W.match_confidence ? (o(), x(Ot, {
                        key: 0,
                        confidence: W.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : u("", !0)
                    ]),
                    W.description ? (o(), s("div", ti, l(W.description), 1)) : u("", !0)
                  ], 8, Yl))), 128))
                ])) : m.value && !_.value ? (o(), s("div", oi, ' No packages found matching "' + l(m.value) + '" ', 1)) : u("", !0),
                _.value ? (o(), s("div", si, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), x(Se, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: we(T, ["self"])
          }, [
            e("div", ni, [
              e("div", { class: "node-modal-header" }, [
                A[7] || (A[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", ai, [
                f(Be, {
                  modelValue: i.value,
                  "onUpdate:modelValue": A[3] || (A[3] = (W) => i.value = W),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", li, [
                  f(le, {
                    variant: "secondary",
                    onClick: T
                  }, {
                    default: a(() => [...A[8] || (A[8] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(le, {
                    variant: "primary",
                    disabled: !i.value.trim(),
                    onClick: $
                  }, {
                    default: a(() => [...A[9] || (A[9] = [
                      p(" Add Package ", -1)
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
}), ri = /* @__PURE__ */ Y(ii, [["__scopeId", "data-v-4fb196b1"]]), di = { class: "node-info" }, ci = { class: "node-info-text" }, ui = { class: "item-body" }, mi = {
  key: 0,
  class: "resolved-state"
}, vi = {
  key: 1,
  class: "multiple-options"
}, fi = { class: "options-list" }, gi = ["onClick"], hi = ["name", "value", "checked", "onChange"], pi = { class: "option-content" }, yi = { class: "option-header" }, wi = { class: "option-filename" }, ki = { class: "option-meta" }, bi = { class: "option-size" }, _i = { class: "option-category" }, $i = { class: "option-path" }, Ci = { class: "action-buttons" }, xi = {
  key: 2,
  class: "unresolved"
}, Si = { class: "action-buttons" }, Ii = /* @__PURE__ */ X({
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
    const n = t, r = c, g = U(() => !!n.choice);
    U(() => {
      var i;
      return (i = n.choice) == null ? void 0 : i.action;
    }), U(() => {
      var i, v;
      return ((v = (i = n.choice) == null ? void 0 : i.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const y = U(() => {
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
    function h(i) {
      r("option-selected", i);
    }
    function m(i) {
      if (!i) return "Unknown";
      const v = i / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, v) => (o(), s("div", {
      class: ne(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", di, [
        e("span", ci, [
          v[7] || (v[7] = p("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", ui, [
        g.value ? (o(), s("div", mi, [
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (_) => r("clear-choice"))
          }, {
            default: a(() => [...v[8] || (v[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", vi, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", fi, [
            (o(!0), s(G, null, se(t.options, (_, d) => (o(), s("label", {
              key: _.model.hash,
              class: ne(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (E) => h(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (E) => h(d)
              }, null, 40, hi),
              e("div", pi, [
                e("div", yi, [
                  e("span", wi, l(_.model.filename), 1),
                  f(Ot, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", ki, [
                  e("span", bi, l(m(_.model.size)), 1),
                  e("span", _i, l(_.model.category), 1)
                ]),
                e("div", $i, l(_.model.relative_path), 1)
              ])
            ], 10, gi))), 128))
          ]),
          e("div", Ci, [
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (_) => r("search"))
            }, {
              default: a(() => [...v[9] || (v[9] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (_) => r("download-url"))
            }, {
              default: a(() => [...v[10] || (v[10] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (_) => r("mark-optional"))
            }, {
              default: a(() => [...v[11] || (v[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", xi, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Si, [
            f(le, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (_) => r("search"))
            }, {
              default: a(() => [...v[13] || (v[13] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (_) => r("download-url"))
            }, {
              default: a(() => [...v[14] || (v[14] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (_) => r("mark-optional"))
            }, {
              default: a(() => [...v[15] || (v[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ei = /* @__PURE__ */ Y(Ii, [["__scopeId", "data-v-8a82fefa"]]), Mi = { class: "model-resolution-step" }, zi = { class: "step-header" }, Li = { class: "step-info" }, Ti = { class: "step-title" }, Di = { class: "step-description" }, Ri = { class: "stat-badge" }, Ni = {
  key: 1,
  class: "step-body"
}, Oi = {
  key: 2,
  class: "empty-state"
}, Ui = { class: "model-search-modal" }, Bi = { class: "model-modal-body" }, Pi = {
  key: 0,
  class: "model-search-results"
}, Vi = ["onClick"], Fi = { class: "model-result-header" }, Ai = { class: "model-result-filename" }, Wi = { class: "model-result-meta" }, Gi = { class: "model-result-category" }, ji = { class: "model-result-size" }, Hi = {
  key: 0,
  class: "model-result-path"
}, qi = {
  key: 1,
  class: "model-no-results"
}, Ki = {
  key: 2,
  class: "model-searching"
}, Ji = { class: "model-download-url-modal" }, Qi = { class: "model-modal-body" }, Xi = { class: "model-input-group" }, Yi = { class: "model-input-group" }, Zi = { class: "model-modal-actions" }, er = /* @__PURE__ */ X({
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
    function r(V) {
      var O;
      return V && ((O = n[V]) == null ? void 0 : O[0]) || null;
    }
    const g = t, y = c, h = b(0), m = b(!1), i = b(!1), v = b(""), _ = b(""), d = b(""), E = b([]), C = b(!1), S = U(() => g.models[h.value]), w = U(() => g.models.some((V) => V.is_download_intent)), k = U(() => g.models.filter(
      (V) => g.modelChoices.has(V.filename) || V.is_download_intent
    ).length), M = U(() => {
      var O;
      if (!S.value) return "";
      const V = r((O = S.value.reference) == null ? void 0 : O.node_type);
      return V ? `${V}/${S.value.filename}` : "";
    }), N = U(() => {
      var O;
      if (!S.value) return "not-found";
      const V = g.modelChoices.get(S.value.filename);
      if (V)
        switch (V.action) {
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
      return S.value.is_download_intent ? "download" : (O = S.value.options) != null && O.length ? "ambiguous" : "not-found";
    }), R = U(() => {
      var O, ae;
      if (!S.value) return;
      const V = g.modelChoices.get(S.value.filename);
      if (V)
        switch (V.action) {
          case "select":
            return (O = V.selected_model) != null && O.filename ? `→ ${V.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return S.value.is_download_intent ? "Pending Download" : (ae = S.value.options) != null && ae.length ? `${S.value.options.length} matches` : "Not Found";
    });
    function D(V) {
      V >= 0 && V < g.models.length && (h.value = V);
    }
    function j() {
      S.value && y("mark-optional", S.value.filename);
    }
    function z() {
      S.value && y("skip", S.value.filename);
    }
    function T(V) {
      S.value && y("option-selected", S.value.filename, V);
    }
    function B() {
      S.value && y("clear-choice", S.value.filename);
    }
    function I() {
      S.value && (v.value = S.value.filename, m.value = !0);
    }
    function $() {
      S.value && (_.value = S.value.download_source || "", d.value = S.value.target_path || M.value, i.value = !0);
    }
    function P() {
      m.value = !1, v.value = "", E.value = [];
    }
    function A() {
      i.value = !1, _.value = "", d.value = "";
    }
    function ee() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function te(V) {
      S.value && P();
    }
    function W() {
      !S.value || !_.value.trim() || (y("download-url", S.value.filename, _.value.trim(), d.value.trim() || void 0), A());
    }
    function K(V) {
      if (!V) return "Unknown";
      const O = V / (1024 * 1024 * 1024);
      return O >= 1 ? `${O.toFixed(2)} GB` : `${(V / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (V, O) => {
      var ae, J, $e;
      return o(), s("div", Mi, [
        e("div", zi, [
          e("div", Li, [
            e("h3", Ti, l(w.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Di, l(w.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Ri, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        S.value ? (o(), x(Kt, {
          key: 0,
          "item-name": S.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: O[0] || (O[0] = (ge) => D(h.value - 1)),
          onNext: O[1] || (O[1] = (ge) => D(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        S.value ? (o(), s("div", Ni, [
          f(Ei, {
            filename: S.value.filename,
            "node-type": ((ae = S.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((J = S.value.options) != null && J.length),
            options: S.value.options,
            choice: ($e = t.modelChoices) == null ? void 0 : $e.get(S.value.filename),
            status: N.value,
            "status-label": R.value,
            onMarkOptional: j,
            onSkip: z,
            onDownloadUrl: $,
            onSearch: I,
            onOptionSelected: T,
            onClearChoice: B
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Oi, [...O[5] || (O[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), x(Se, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: we(P, ["self"])
          }, [
            e("div", Ui, [
              e("div", { class: "model-modal-header" }, [
                O[6] || (O[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", Bi, [
                f(Be, {
                  modelValue: v.value,
                  "onUpdate:modelValue": O[2] || (O[2] = (ge) => v.value = ge),
                  placeholder: "Search by filename, category...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                E.value.length > 0 ? (o(), s("div", Pi, [
                  (o(!0), s(G, null, se(E.value, (ge) => (o(), s("div", {
                    key: ge.hash,
                    class: "model-search-result-item",
                    onClick: (Re) => te()
                  }, [
                    e("div", Fi, [
                      e("code", Ai, l(ge.filename), 1)
                    ]),
                    e("div", Wi, [
                      e("span", Gi, l(ge.category), 1),
                      e("span", ji, l(K(ge.size)), 1)
                    ]),
                    ge.relative_path ? (o(), s("div", Hi, l(ge.relative_path), 1)) : u("", !0)
                  ], 8, Vi))), 128))
                ])) : v.value && !C.value ? (o(), s("div", qi, ' No models found matching "' + l(v.value) + '" ', 1)) : u("", !0),
                C.value ? (o(), s("div", Ki, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), x(Se, { to: "body" }, [
          i.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: we(A, ["self"])
          }, [
            e("div", Ji, [
              e("div", { class: "model-modal-header" }, [
                O[7] || (O[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              e("div", Qi, [
                e("div", Xi, [
                  O[8] || (O[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(Be, {
                    modelValue: _.value,
                    "onUpdate:modelValue": O[3] || (O[3] = (ge) => _.value = ge),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Yi, [
                  O[9] || (O[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(Be, {
                    modelValue: d.value,
                    "onUpdate:modelValue": O[4] || (O[4] = (ge) => d.value = ge),
                    placeholder: M.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Zi, [
                  f(le, {
                    variant: "secondary",
                    onClick: A
                  }, {
                    default: a(() => [...O[10] || (O[10] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(le, {
                    variant: "primary",
                    disabled: !_.value.trim() || !d.value.trim(),
                    onClick: W
                  }, {
                    default: a(() => [...O[11] || (O[11] = [
                      p(" Queue Download ", -1)
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
}), tr = /* @__PURE__ */ Y(er, [["__scopeId", "data-v-c6acbada"]]), or = { class: "applying-step" }, sr = {
  key: 0,
  class: "phase-content"
}, nr = {
  key: 1,
  class: "phase-content"
}, ar = { class: "phase-description" }, lr = { class: "install-list" }, ir = {
  key: 2,
  class: "phase-content"
}, rr = { class: "completion-summary" }, dr = {
  key: 0,
  class: "summary-item success"
}, cr = { class: "summary-text" }, ur = {
  key: 1,
  class: "summary-item error"
}, mr = { class: "summary-text" }, vr = {
  key: 2,
  class: "restart-prompt"
}, fr = {
  key: 3,
  class: "phase-content error"
}, gr = { class: "error-message" }, hr = /* @__PURE__ */ X({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart"],
  setup(t) {
    return (c, n) => (o(), s("div", or, [
      t.progress.phase === "resolving" ? (o(), s("div", sr, [...n[1] || (n[1] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "installing" ? (o(), s("div", nr, [
        n[3] || (n[3] = e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Installing Node Packages")
        ], -1)),
        e("p", ar, "Installing " + l(t.progress.nodesToInstall.length) + " package" + l(t.progress.nodesToInstall.length > 1 ? "s" : "") + "...", 1),
        e("div", lr, [
          (o(!0), s(G, null, se(t.progress.nodesToInstall, (r) => (o(), s("div", {
            key: r,
            class: "install-item"
          }, [
            n[2] || (n[2] = e("span", { class: "install-icon" }, "⬇", -1)),
            e("code", null, l(r), 1)
          ]))), 128))
        ])
      ])) : t.progress.phase === "complete" ? (o(), s("div", ir, [
        n[9] || (n[9] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", rr, [
          t.progress.nodesInstalled.length > 0 ? (o(), s("div", dr, [
            n[4] || (n[4] = e("span", { class: "summary-icon" }, "✓", -1)),
            e("span", cr, l(t.progress.nodesInstalled.length) + " node package" + l(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
          ])) : u("", !0),
          t.progress.installError ? (o(), s("div", ur, [
            n[5] || (n[5] = e("span", { class: "summary-icon" }, "✗", -1)),
            e("span", mr, "Installation error: " + l(t.progress.installError), 1)
          ])) : u("", !0),
          n[7] || (n[7] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          n[8] || (n[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
          t.progress.needsRestart ? (o(), s("div", vr, [
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
      ])) : t.progress.phase === "error" ? (o(), s("div", fr, [
        n[10] || (n[10] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", gr, l(t.progress.error), 1)
      ])) : u("", !0)
    ]));
  }
}), pr = /* @__PURE__ */ Y(hr, [["__scopeId", "data-v-eb46c564"]]), yr = {
  key: 0,
  class: "loading-state"
}, wr = {
  key: 1,
  class: "wizard-content"
}, kr = {
  key: 0,
  class: "step-content"
}, br = { class: "analysis-summary" }, _r = { class: "analysis-header" }, $r = { class: "summary-description" }, Cr = { class: "stats-grid" }, xr = { class: "stat-card" }, Sr = { class: "stat-items" }, Ir = {
  key: 0,
  class: "stat-item success"
}, Er = { class: "stat-count" }, Mr = {
  key: 1,
  class: "stat-item info"
}, zr = { class: "stat-count" }, Lr = {
  key: 2,
  class: "stat-item warning"
}, Tr = { class: "stat-count" }, Dr = {
  key: 3,
  class: "stat-item error"
}, Rr = { class: "stat-count" }, Nr = { class: "stat-card" }, Or = { class: "stat-items" }, Ur = { class: "stat-item success" }, Br = { class: "stat-count" }, Pr = {
  key: 0,
  class: "stat-item info"
}, Vr = { class: "stat-count" }, Fr = {
  key: 1,
  class: "stat-item warning"
}, Ar = { class: "stat-count" }, Wr = {
  key: 2,
  class: "stat-item error"
}, Gr = { class: "stat-count" }, jr = {
  key: 0,
  class: "status-message warning"
}, Hr = { class: "status-text" }, qr = {
  key: 1,
  class: "status-message info"
}, Kr = { class: "status-text" }, Jr = {
  key: 2,
  class: "status-message info"
}, Qr = { class: "status-text" }, Xr = {
  key: 3,
  class: "status-message success"
}, Yr = {
  key: 3,
  class: "step-content"
}, Zr = { class: "review-summary" }, ed = { class: "review-stats" }, td = { class: "review-stat" }, od = { class: "stat-value" }, sd = { class: "review-stat" }, nd = { class: "stat-value" }, ad = { class: "review-stat" }, ld = { class: "stat-value" }, id = { class: "review-stat" }, rd = { class: "stat-value" }, dd = {
  key: 0,
  class: "review-section"
}, cd = { class: "section-title" }, ud = { class: "review-items" }, md = { class: "item-name" }, vd = {
  key: 1,
  class: "review-section"
}, fd = { class: "section-title" }, gd = { class: "review-items" }, hd = { class: "item-name" }, pd = { class: "item-choice" }, yd = {
  key: 0,
  class: "choice-badge install"
}, wd = {
  key: 1,
  class: "choice-badge optional"
}, kd = {
  key: 2,
  class: "choice-badge skip"
}, bd = {
  key: 1,
  class: "choice-badge pending"
}, _d = {
  key: 2,
  class: "review-section"
}, $d = { class: "section-title" }, Cd = { class: "review-items" }, xd = { class: "item-name" }, Sd = { class: "item-choice" }, Id = {
  key: 0,
  class: "choice-badge install"
}, Ed = {
  key: 1,
  class: "choice-badge download"
}, Md = {
  key: 2,
  class: "choice-badge optional"
}, zd = {
  key: 3,
  class: "choice-badge skip"
}, Ld = {
  key: 4,
  class: "choice-badge skip"
}, Td = {
  key: 1,
  class: "choice-badge download"
}, Dd = {
  key: 2,
  class: "choice-badge pending"
}, Rd = {
  key: 3,
  class: "no-choices"
}, Nd = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, r = c, { analyzeWorkflow: g, applyResolution: y, installNodes: h, queueModelDownloads: m, progress: i, resetProgress: v } = tl(), { loadPendingDownloads: _ } = bt(), d = b(null), E = b(!1), C = b(!1), S = b(null), w = b("analysis"), k = b([]), M = b(/* @__PURE__ */ new Map()), N = b(/* @__PURE__ */ new Map()), R = U(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return j.value && H.push({ id: "nodes", label: "Nodes" }), (z.value || T.value) && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), w.value === "applying" && H.push({ id: "applying", label: "Applying" }), H;
    }), D = U(() => d.value ? d.value.stats.needs_user_input : !1), j = U(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), z = U(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), T = U(() => d.value ? d.value.stats.download_intents > 0 : !1), B = U(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), I = U(() => d.value ? d.value.nodes.resolved.length - d.value.stats.nodes_needing_installation : 0), $ = U(() => {
      if (!d.value) return [];
      const H = d.value.nodes.resolved.filter((oe) => !oe.is_installed), F = /* @__PURE__ */ new Set();
      return H.filter((oe) => F.has(oe.package.package_id) ? !1 : (F.add(oe.package.package_id), !0));
    }), P = U(() => d.value ? d.value.models.resolved.filter((H) => H.match_type === "download_intent").map((H) => ({
      filename: H.reference.widget_value,
      reference: H.reference,
      is_download_intent: !0,
      resolved_model: H.model,
      download_source: H.download_source,
      target_path: H.target_path
    })) : []), A = U(() => {
      if (!d.value) return [];
      const H = d.value.nodes.unresolved.map((oe) => ({
        node_type: oe.reference.node_type,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), F = d.value.nodes.ambiguous.map((oe) => ({
        node_type: oe.reference.node_type,
        has_multiple_options: !0,
        options: oe.options.map((he) => ({
          package_id: he.package.package_id,
          title: he.package.title,
          match_confidence: he.match_confidence,
          match_type: he.match_type,
          is_installed: he.is_installed
        }))
      }));
      return [...H, ...F];
    }), ee = U(() => {
      if (!d.value) return [];
      const H = d.value.models.unresolved.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), F = d.value.models.ambiguous.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        has_multiple_options: !0,
        options: oe.options.map((he) => ({
          model: he.model,
          match_confidence: he.match_confidence,
          match_type: he.match_type,
          has_download_source: he.has_download_source
        }))
      }));
      return [...H, ...F];
    }), te = U(() => {
      const H = ee.value, F = P.value.map((oe) => ({
        filename: oe.filename,
        reference: oe.reference,
        is_download_intent: !0,
        resolved_model: oe.resolved_model,
        download_source: oe.download_source,
        target_path: oe.target_path,
        options: void 0
      }));
      return [...H, ...F];
    }), W = U(() => {
      let H = $.value.length;
      for (const F of M.value.values())
        F.action === "install" && H++;
      for (const F of N.value.values())
        F.action === "select" && H++;
      return H;
    }), K = U(() => {
      let H = 0;
      for (const F of N.value.values())
        F.action === "download" && H++;
      return H;
    }), V = U(() => {
      let H = 0;
      for (const F of M.value.values())
        F.action === "optional" && H++;
      for (const F of N.value.values())
        F.action === "optional" && H++;
      return H;
    }), O = U(() => {
      let H = 0;
      for (const F of M.value.values())
        F.action === "skip" && H++;
      for (const F of N.value.values())
        F.action === "skip" && H++;
      for (const F of A.value)
        M.value.has(F.node_type) || H++;
      for (const F of ee.value)
        N.value.has(F.filename) || H++;
      return H;
    }), ae = U(() => {
      const H = {};
      if (H.analysis = { resolved: 1, total: 1 }, j.value) {
        const F = A.value.length, oe = A.value.filter(
          (he) => M.value.has(he.node_type)
        ).length;
        H.nodes = { resolved: oe, total: F };
      }
      if (z.value || T.value) {
        const F = te.value.length, oe = te.value.filter(
          (he) => N.value.has(he.filename) || he.is_download_intent
        ).length;
        H.models = { resolved: oe, total: F };
      }
      if (H.review = { resolved: 1, total: 1 }, w.value === "applying") {
        const F = i.totalFiles || 1, oe = i.completedFiles.length;
        H.applying = { resolved: oe, total: F };
      }
      return H;
    });
    function J(H) {
      w.value = H;
    }
    function $e() {
      const H = R.value.findIndex((F) => F.id === w.value);
      H > 0 && (w.value = R.value[H - 1].id);
    }
    function ge() {
      const H = R.value.findIndex((F) => F.id === w.value);
      H < R.value.length - 1 && (w.value = R.value[H + 1].id);
    }
    async function Re() {
      E.value = !0, S.value = null;
      try {
        d.value = await g(n.workflowName);
      } catch (H) {
        S.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        E.value = !1;
      }
    }
    function rt() {
      k.value.includes("analysis") || k.value.push("analysis"), j.value ? w.value = "nodes" : z.value || T.value ? w.value = "models" : w.value = "review";
    }
    function fe(H) {
      M.value.set(H, { action: "optional" });
    }
    function De(H) {
      M.value.set(H, { action: "skip" });
    }
    function dt(H, F) {
      var he;
      const oe = A.value.find((_e) => _e.node_type === H);
      (he = oe == null ? void 0 : oe.options) != null && he[F] && M.value.set(H, {
        action: "install",
        package_id: oe.options[F].package_id
      });
    }
    function Qe(H, F) {
      M.value.set(H, {
        action: "install",
        package_id: F
      });
    }
    function ze(H) {
      M.value.delete(H);
    }
    function ct(H) {
      N.value.set(H, { action: "optional" });
    }
    function et(H) {
      N.value.set(H, { action: "skip" });
    }
    function ut(H, F) {
      var he;
      const oe = ee.value.find((_e) => _e.filename === H);
      (he = oe == null ? void 0 : oe.options) != null && he[F] && N.value.set(H, {
        action: "select",
        selected_model: oe.options[F].model
      });
    }
    function Q(H, F, oe) {
      N.value.set(H, {
        action: "download",
        url: F,
        target_path: oe
      });
    }
    function ie(H) {
      N.value.delete(H);
    }
    async function ve() {
      C.value = !0, S.value = null, v(), i.phase = "resolving", w.value = "applying";
      try {
        const H = await y(n.workflowName, M.value, N.value);
        H.models_to_download && H.models_to_download.length > 0 && m(n.workflowName, H.models_to_download);
        const F = [
          ...H.nodes_to_install || [],
          ...$.value.map((oe) => oe.package.package_id)
        ];
        i.nodesToInstall = [...new Set(F)], i.nodesToInstall.length > 0 && await h(n.workflowName), i.phase = "complete", await _(), i.needsRestart || setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (H) {
        S.value = H instanceof Error ? H.message : "Failed to apply resolution", i.error = S.value, i.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function Ce() {
      r("refresh"), r("restart"), r("close");
    }
    return be(Re), (H, F) => (o(), x(at, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: E.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: F[1] || (F[1] = (oe) => r("close"))
    }, {
      body: a(() => [
        E.value && !d.value ? (o(), s("div", yr, [...F[2] || (F[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", wr, [
          f(ul, {
            steps: R.value,
            "current-step": w.value,
            "completed-steps": k.value,
            "step-stats": ae.value,
            onStepChange: J
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          w.value === "analysis" ? (o(), s("div", kr, [
            e("div", br, [
              e("div", _r, [
                F[3] || (F[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", $r, " Found " + l(d.value.stats.total_nodes) + " nodes and " + l(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Cr, [
                e("div", xr, [
                  F[12] || (F[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Sr, [
                    I.value > 0 ? (o(), s("div", Ir, [
                      F[4] || (F[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Er, l(I.value), 1),
                      F[5] || (F[5] = e("span", { class: "stat-label" }, "installed", -1))
                    ])) : u("", !0),
                    d.value.stats.nodes_needing_installation > 0 ? (o(), s("div", Mr, [
                      F[6] || (F[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", zr, l(d.value.stats.nodes_needing_installation), 1),
                      F[7] || (F[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : u("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", Lr, [
                      F[8] || (F[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Tr, l(d.value.nodes.ambiguous.length), 1),
                      F[9] || (F[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", Dr, [
                      F[10] || (F[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Rr, l(d.value.nodes.unresolved.length), 1),
                      F[11] || (F[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ]),
                e("div", Nr, [
                  F[21] || (F[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Or, [
                    e("div", Ur, [
                      F[13] || (F[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Br, l(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      F[14] || (F[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", Pr, [
                      F[15] || (F[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Vr, l(d.value.stats.download_intents), 1),
                      F[16] || (F[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : u("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", Fr, [
                      F[17] || (F[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ar, l(d.value.models.ambiguous.length), 1),
                      F[18] || (F[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", Wr, [
                      F[19] || (F[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Gr, l(d.value.models.unresolved.length), 1),
                      F[20] || (F[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ])
              ]),
              D.value ? (o(), s("div", jr, [
                F[22] || (F[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Hr, l(A.value.length + ee.value.length) + " items need your input", 1)
              ])) : B.value ? (o(), s("div", qr, [
                F[23] || (F[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Kr, l(d.value.stats.packages_needing_installation) + " package" + l(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + l(d.value.stats.nodes_needing_installation) + " node type" + l(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + l(T.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (o(), s("div", Jr, [
                F[24] || (F[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Qr, l(d.value.stats.download_intents) + " model" + l(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", Xr, [...F[25] || (F[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : u("", !0),
          w.value === "nodes" ? (o(), x(ri, {
            key: 1,
            nodes: A.value,
            "node-choices": M.value,
            onMarkOptional: fe,
            onSkip: De,
            onOptionSelected: dt,
            onManualEntry: Qe,
            onClearChoice: ze
          }, null, 8, ["nodes", "node-choices"])) : u("", !0),
          w.value === "models" ? (o(), x(tr, {
            key: 2,
            models: te.value,
            "model-choices": N.value,
            onMarkOptional: ct,
            onSkip: et,
            onOptionSelected: ut,
            onDownloadUrl: Q,
            onClearChoice: ie
          }, null, 8, ["models", "model-choices"])) : u("", !0),
          w.value === "review" ? (o(), s("div", Yr, [
            e("div", Zr, [
              F[31] || (F[31] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", ed, [
                e("div", td, [
                  e("span", od, l(W.value), 1),
                  F[26] || (F[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", sd, [
                  e("span", nd, l(K.value), 1),
                  F[27] || (F[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", ad, [
                  e("span", ld, l(V.value), 1),
                  F[28] || (F[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", id, [
                  e("span", rd, l(O.value), 1),
                  F[29] || (F[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              $.value.length > 0 ? (o(), s("div", dd, [
                e("h4", cd, "Node Packages to Install (" + l($.value.length) + ")", 1),
                e("div", ud, [
                  (o(!0), s(G, null, se($.value, (oe) => (o(), s("div", {
                    key: oe.package.package_id,
                    class: "review-item"
                  }, [
                    e("code", md, l(oe.package.package_id), 1),
                    F[30] || (F[30] = e("div", { class: "item-choice" }, [
                      e("span", { class: "choice-badge install" }, "Will Install")
                    ], -1))
                  ]))), 128))
                ])
              ])) : u("", !0),
              A.value.length > 0 ? (o(), s("div", vd, [
                e("h4", fd, "Node Choices (" + l(A.value.length) + ")", 1),
                e("div", gd, [
                  (o(!0), s(G, null, se(A.value, (oe) => {
                    var he, _e, Xe, Ae;
                    return o(), s("div", {
                      key: oe.node_type,
                      class: "review-item"
                    }, [
                      e("code", hd, l(oe.node_type), 1),
                      e("div", pd, [
                        M.value.has(oe.node_type) ? (o(), s(G, { key: 0 }, [
                          ((he = M.value.get(oe.node_type)) == null ? void 0 : he.action) === "install" ? (o(), s("span", yd, l((_e = M.value.get(oe.node_type)) == null ? void 0 : _e.package_id), 1)) : ((Xe = M.value.get(oe.node_type)) == null ? void 0 : Xe.action) === "optional" ? (o(), s("span", wd, " Optional ")) : ((Ae = M.value.get(oe.node_type)) == null ? void 0 : Ae.action) === "skip" ? (o(), s("span", kd, " Skip ")) : u("", !0)
                        ], 64)) : (o(), s("span", bd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              te.value.length > 0 ? (o(), s("div", _d, [
                e("h4", $d, "Models (" + l(te.value.length) + ")", 1),
                e("div", Cd, [
                  (o(!0), s(G, null, se(te.value, (oe) => {
                    var he, _e, Xe, Ae, _t, $t, Ct;
                    return o(), s("div", {
                      key: oe.filename,
                      class: "review-item"
                    }, [
                      e("code", xd, l(oe.filename), 1),
                      e("div", Sd, [
                        N.value.has(oe.filename) ? (o(), s(G, { key: 0 }, [
                          ((he = N.value.get(oe.filename)) == null ? void 0 : he.action) === "select" ? (o(), s("span", Id, l((Xe = (_e = N.value.get(oe.filename)) == null ? void 0 : _e.selected_model) == null ? void 0 : Xe.filename), 1)) : ((Ae = N.value.get(oe.filename)) == null ? void 0 : Ae.action) === "download" ? (o(), s("span", Ed, " Download ")) : ((_t = N.value.get(oe.filename)) == null ? void 0 : _t.action) === "optional" ? (o(), s("span", Md, " Optional ")) : (($t = N.value.get(oe.filename)) == null ? void 0 : $t.action) === "skip" ? (o(), s("span", zd, " Skip ")) : ((Ct = N.value.get(oe.filename)) == null ? void 0 : Ct.action) === "cancel_download" ? (o(), s("span", Ld, " Cancel Download ")) : u("", !0)
                        ], 64)) : oe.is_download_intent ? (o(), s("span", Td, " Pending Download ")) : (o(), s("span", Dd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              $.value.length === 0 && A.value.length === 0 && te.value.length === 0 ? (o(), s("div", Rd, " No dependencies need resolution. ")) : u("", !0)
            ])
          ])) : u("", !0),
          w.value === "applying" ? (o(), x(pr, {
            key: 4,
            progress: ue(i),
            onRestart: Ce
          }, null, 8, ["progress"])) : u("", !0)
        ])) : u("", !0)
      ]),
      footer: a(() => [
        w.value !== "analysis" && w.value !== "applying" ? (o(), x(le, {
          key: 0,
          variant: "secondary",
          disabled: C.value,
          onClick: $e
        }, {
          default: a(() => [...F[32] || (F[32] = [
            p(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        F[35] || (F[35] = e("div", { class: "footer-spacer" }, null, -1)),
        w.value !== "applying" || ue(i).phase === "complete" || ue(i).phase === "error" ? (o(), x(le, {
          key: 1,
          variant: "secondary",
          onClick: F[0] || (F[0] = (oe) => r("close"))
        }, {
          default: a(() => [
            p(l(ue(i).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : u("", !0),
        w.value === "analysis" ? (o(), x(le, {
          key: 2,
          variant: "primary",
          disabled: E.value,
          onClick: rt
        }, {
          default: a(() => [
            p(l(D.value || T.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        w.value === "nodes" ? (o(), x(le, {
          key: 3,
          variant: "primary",
          onClick: ge
        }, {
          default: a(() => [
            p(l(z.value || T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : u("", !0),
        w.value === "models" ? (o(), x(le, {
          key: 4,
          variant: "primary",
          onClick: ge
        }, {
          default: a(() => [...F[33] || (F[33] = [
            p(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : u("", !0),
        w.value === "review" ? (o(), x(le, {
          key: 5,
          variant: "primary",
          disabled: C.value,
          loading: C.value,
          onClick: ve
        }, {
          default: a(() => [...F[34] || (F[34] = [
            p(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Od = /* @__PURE__ */ Y(Nd, [["__scopeId", "data-v-85146f4c"]]), Ud = { class: "search-input-wrapper" }, Bd = ["value", "placeholder"], Pd = /* @__PURE__ */ X({
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
    const n = t, r = c, g = b(null);
    let y;
    function h(i) {
      const v = i.target.value;
      n.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", v);
      }, n.debounce)) : r("update:modelValue", v);
    }
    function m() {
      var i;
      r("update:modelValue", ""), r("clear"), (i = g.value) == null || i.focus();
    }
    return be(() => {
      n.autoFocus && g.value && g.value.focus();
    }), (i, v) => (o(), s("div", Ud, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: je(m, ["escape"])
      }, null, 40, Bd),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), Vd = /* @__PURE__ */ Y(Pd, [["__scopeId", "data-v-266f857a"]]), Fd = { class: "search-bar" }, Ad = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (o(), s("div", Fd, [
      f(Vd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), lt = /* @__PURE__ */ Y(Ad, [["__scopeId", "data-v-3d51bbfd"]]), Wd = { class: "section-group" }, Gd = {
  key: 0,
  class: "section-content"
}, jd = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = b(n.initiallyExpanded);
    function y() {
      n.collapsible && (g.value = !g.value, r("toggle", g.value));
    }
    return (h, m) => (o(), s("section", Wd, [
      f(Te, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: y
      }, {
        default: a(() => [
          p(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), s("div", Gd, [
        de(h.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), ke = /* @__PURE__ */ Y(jd, [["__scopeId", "data-v-c48e33ed"]]), Hd = { class: "item-header" }, qd = {
  key: 0,
  class: "item-icon"
}, Kd = { class: "item-info" }, Jd = {
  key: 0,
  class: "item-title"
}, Qd = {
  key: 1,
  class: "item-subtitle"
}, Xd = {
  key: 0,
  class: "item-details"
}, Yd = {
  key: 1,
  class: "item-actions"
}, Zd = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = U(() => n.status ? `status-${n.status}` : "");
    return (g, y) => (o(), s("div", {
      class: ne(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (h) => t.clickable && g.$emit("click"))
    }, [
      e("div", Hd, [
        g.$slots.icon ? (o(), s("span", qd, [
          de(g.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        e("div", Kd, [
          g.$slots.title ? (o(), s("div", Jd, [
            de(g.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          g.$slots.subtitle ? (o(), s("div", Qd, [
            de(g.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      g.$slots.details ? (o(), s("div", Xd, [
        de(g.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      g.$slots.actions ? (o(), s("div", Yd, [
        de(g.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ Y(Zd, [["__scopeId", "data-v-cc435e0e"]]), ec = { class: "loading-state" }, tc = { class: "loading-message" }, oc = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (o(), s("div", ec, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", tc, l(t.message), 1)
    ]));
  }
}), qe = /* @__PURE__ */ Y(oc, [["__scopeId", "data-v-ad8436c9"]]), sc = { class: "error-state" }, nc = { class: "error-message" }, ac = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (o(), s("div", sc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", nc, l(t.message), 1),
      t.retry ? (o(), x(Z, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("retry"))
      }, {
        default: a(() => [...n[1] || (n[1] = [
          p(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ Y(ac, [["__scopeId", "data-v-5397be48"]]), lc = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getWorkflows: g } = Ie(), y = b([]), h = b(!1), m = b(null), i = b(""), v = b(!0), _ = b(!1), d = b(!1), E = b(!1), C = b(null), S = U(
      () => y.value.filter((W) => W.status === "broken")
    ), w = U(
      () => y.value.filter((W) => W.status === "new")
    ), k = U(
      () => y.value.filter((W) => W.status === "modified")
    ), M = U(
      () => y.value.filter((W) => W.status === "synced")
    ), N = U(() => {
      if (!i.value.trim()) return y.value;
      const W = i.value.toLowerCase();
      return y.value.filter((K) => K.name.toLowerCase().includes(W));
    }), R = U(
      () => S.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), D = U(
      () => w.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), j = U(
      () => k.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), z = U(
      () => M.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), T = U(
      () => _.value ? z.value : z.value.slice(0, 5)
    );
    async function B(W = !1) {
      h.value = !0, m.value = null;
      try {
        y.value = await g(W);
      } catch (K) {
        m.value = K instanceof Error ? K.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    c({ loadWorkflows: B });
    function I(W) {
      C.value = W, d.value = !0;
    }
    function $(W) {
      C.value = W, E.value = !0;
    }
    function P() {
      alert("Bulk resolution not yet implemented");
    }
    function A() {
      r("refresh");
    }
    function ee(W) {
      const K = [];
      return W.missing_nodes > 0 && K.push(`${W.missing_nodes} missing node${W.missing_nodes > 1 ? "s" : ""}`), W.missing_models > 0 && K.push(`${W.missing_models} missing model${W.missing_models > 1 ? "s" : ""}`), W.pending_downloads && W.pending_downloads > 0 && K.push(`${W.pending_downloads} pending download${W.pending_downloads > 1 ? "s" : ""}`), K.length > 0 ? K.join(", ") : "Has issues";
    }
    function te(W) {
      const K = W.sync_state === "new" ? "New" : W.sync_state === "modified" ? "Modified" : W.sync_state === "synced" ? "Synced" : W.sync_state;
      return W.has_path_sync_issues && W.models_needing_path_sync && W.models_needing_path_sync > 0 ? `${W.models_needing_path_sync} model path${W.models_needing_path_sync > 1 ? "s" : ""} need${W.models_needing_path_sync === 1 ? "s" : ""} sync` : K || "Unknown";
    }
    return be(B), (W, K) => (o(), s(G, null, [
      f(Ee, null, {
        header: a(() => [
          f(Me, { title: "WORKFLOWS" }, {
            actions: a(() => [
              S.value.length > 0 ? (o(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: P
              }, {
                default: a(() => [...K[8] || (K[8] = [
                  p(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : u("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          f(lt, {
            modelValue: i.value,
            "onUpdate:modelValue": K[0] || (K[0] = (V) => i.value = V),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), x(qe, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), x(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            R.value.length ? (o(), x(ke, {
              key: 0,
              title: "BROKEN",
              count: R.value.length
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(R.value, (V) => (o(), x(xe, {
                  key: V.name,
                  status: "broken"
                }, {
                  icon: a(() => [...K[9] || (K[9] = [
                    p("⚠", -1)
                  ])]),
                  title: a(() => [
                    p(l(V.name), 1)
                  ]),
                  subtitle: a(() => [
                    p(l(ee(V)), 1)
                  ]),
                  actions: a(() => [
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => $(V.name)
                    }, {
                      default: a(() => [...K[10] || (K[10] = [
                        p(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => I(V.name)
                    }, {
                      default: a(() => [...K[11] || (K[11] = [
                        p(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            D.value.length ? (o(), x(ke, {
              key: 1,
              title: "NEW",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(D.value, (V) => (o(), x(xe, {
                  key: V.name,
                  status: V.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: a(() => [
                    p(l(V.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: a(() => [
                    p(l(V.name), 1)
                  ]),
                  subtitle: a(() => [
                    p(l(te(V)), 1)
                  ]),
                  actions: a(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => I(V.name)
                    }, {
                      default: a(() => [...K[12] || (K[12] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            j.value.length ? (o(), x(ke, {
              key: 2,
              title: "MODIFIED",
              count: j.value.length
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(j.value, (V) => (o(), x(xe, {
                  key: V.name,
                  status: V.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: a(() => [...K[13] || (K[13] = [
                    p("⚡", -1)
                  ])]),
                  title: a(() => [
                    p(l(V.name), 1)
                  ]),
                  subtitle: a(() => [
                    p(l(te(V)), 1)
                  ]),
                  actions: a(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => I(V.name)
                    }, {
                      default: a(() => [...K[14] || (K[14] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            z.value.length ? (o(), x(ke, {
              key: 3,
              title: "SYNCED",
              count: z.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: K[2] || (K[2] = (V) => v.value = V)
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(T.value, (V) => (o(), x(xe, {
                  key: V.name,
                  status: V.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: a(() => [
                    p(l(V.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: a(() => [
                    p(l(V.name), 1)
                  ]),
                  subtitle: a(() => [
                    p(l(te(V)), 1)
                  ]),
                  actions: a(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => I(V.name)
                    }, {
                      default: a(() => [...K[15] || (K[15] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !_.value && z.value.length > 5 ? (o(), x(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: K[1] || (K[1] = (V) => _.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    p(" View all " + l(z.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : u("", !0),
            N.value.length ? u("", !0) : (o(), x(Pe, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && C.value ? (o(), x(Ya, {
        key: 0,
        "workflow-name": C.value,
        onClose: K[3] || (K[3] = (V) => d.value = !1),
        onResolve: K[4] || (K[4] = (V) => $(C.value)),
        onRefresh: K[5] || (K[5] = (V) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0),
      E.value && C.value ? (o(), x(Od, {
        key: 1,
        "workflow-name": C.value,
        onClose: K[6] || (K[6] = (V) => E.value = !1),
        onInstall: A,
        onRefresh: K[7] || (K[7] = (V) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ], 64));
  }
}), ic = /* @__PURE__ */ Y(lc, [["__scopeId", "data-v-080576c0"]]), rc = /* @__PURE__ */ X({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["summary-bar", t.variant])
    }, [
      de(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), it = /* @__PURE__ */ Y(rc, [["__scopeId", "data-v-ccb7816e"]]), dc = {
  key: 0,
  class: "model-details"
}, cc = { class: "detail-section" }, uc = { class: "detail-row" }, mc = { class: "detail-value mono" }, vc = { class: "detail-row" }, fc = { class: "detail-value mono" }, gc = { class: "detail-row" }, hc = { class: "detail-value mono" }, pc = { class: "detail-row" }, yc = { class: "detail-value" }, wc = { class: "detail-row" }, kc = { class: "detail-value" }, bc = { class: "detail-row" }, _c = { class: "detail-value" }, $c = { class: "detail-section" }, Cc = { class: "section-header" }, xc = {
  key: 0,
  class: "locations-list"
}, Sc = { class: "location-path mono" }, Ic = {
  key: 0,
  class: "location-modified"
}, Ec = ["onClick"], Mc = {
  key: 1,
  class: "empty-state"
}, zc = { class: "detail-section" }, Lc = { class: "section-header" }, Tc = {
  key: 0,
  class: "sources-list"
}, Dc = { class: "source-type" }, Rc = ["href"], Nc = ["disabled", "onClick"], Oc = {
  key: 1,
  class: "empty-state"
}, Uc = { class: "add-source-form" }, Bc = ["disabled"], Pc = {
  key: 2,
  class: "source-error"
}, Vc = {
  key: 3,
  class: "source-success"
}, Fc = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: r, addModelSource: g, removeModelSource: y, openFileLocation: h } = Ie(), m = b(null), i = b(!0), v = b(null), _ = b(""), d = b(!1), E = b(null), C = b(null), S = b(null), w = b(null);
    let k = null;
    function M(B, I = "success", $ = 2e3) {
      k && clearTimeout(k), w.value = { message: B, type: I }, k = setTimeout(() => {
        w.value = null;
      }, $);
    }
    function N(B) {
      if (!B) return "Unknown";
      const I = 1024 * 1024 * 1024, $ = 1024 * 1024;
      return B >= I ? `${(B / I).toFixed(1)} GB` : B >= $ ? `${(B / $).toFixed(0)} MB` : `${(B / 1024).toFixed(0)} KB`;
    }
    function R(B) {
      navigator.clipboard.writeText(B), M("Copied to clipboard!");
    }
    async function D(B) {
      try {
        await h(B), M("Opening file location...");
      } catch {
        M("Failed to open location", "error");
      }
    }
    async function j() {
      if (!(!_.value.trim() || !m.value)) {
        d.value = !0, C.value = null, S.value = null;
        try {
          await g(m.value.hash, _.value.trim()), S.value = "Source added successfully!", _.value = "", await T();
        } catch (B) {
          C.value = B instanceof Error ? B.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function z(B) {
      if (m.value) {
        E.value = B, C.value = null, S.value = null;
        try {
          await y(m.value.hash, B), M("Source removed"), await T();
        } catch (I) {
          C.value = I instanceof Error ? I.message : "Failed to remove source";
        } finally {
          E.value = null;
        }
      }
    }
    async function T() {
      i.value = !0, v.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (B) {
        v.value = B instanceof Error ? B.message : "Failed to load model details";
      } finally {
        i.value = !1;
      }
    }
    return be(T), (B, I) => {
      var $;
      return o(), s(G, null, [
        f(at, {
          title: `Model Details: ${(($ = m.value) == null ? void 0 : $.filename) || "Loading..."}`,
          size: "lg",
          loading: i.value,
          error: v.value,
          onClose: I[5] || (I[5] = (P) => B.$emit("close"))
        }, {
          body: a(() => {
            var P, A, ee, te;
            return [
              m.value ? (o(), s("div", dc, [
                e("section", cc, [
                  e("div", uc, [
                    I[6] || (I[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", mc, l(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[0] || (I[0] = (W) => R(m.value.hash))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", vc, [
                    I[7] || (I[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", fc, l(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[1] || (I[1] = (W) => R(m.value.blake3))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", gc, [
                    I[8] || (I[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", hc, l(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[2] || (I[2] = (W) => R(m.value.sha256))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", pc, [
                    I[9] || (I[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", yc, l(N(m.value.size)), 1)
                  ]),
                  e("div", wc, [
                    I[10] || (I[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", kc, l(m.value.category), 1)
                  ]),
                  e("div", bc, [
                    I[11] || (I[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", _c, l(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", $c, [
                  e("h4", Cc, "Locations (" + l(((P = m.value.locations) == null ? void 0 : P.length) || 0) + ")", 1),
                  (A = m.value.locations) != null && A.length ? (o(), s("div", xc, [
                    (o(!0), s(G, null, se(m.value.locations, (W, K) => (o(), s("div", {
                      key: K,
                      class: "location-item"
                    }, [
                      e("span", Sc, l(W.path), 1),
                      W.modified ? (o(), s("span", Ic, "Modified: " + l(W.modified), 1)) : u("", !0),
                      W.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (V) => D(W.path)
                      }, " Open File Location ", 8, Ec)) : u("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Mc, "No locations found"))
                ]),
                e("section", zc, [
                  e("h4", Lc, "Download Sources (" + l(((ee = m.value.sources) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (te = m.value.sources) != null && te.length ? (o(), s("div", Tc, [
                    (o(!0), s(G, null, se(m.value.sources, (W, K) => (o(), s("div", {
                      key: K,
                      class: "source-item"
                    }, [
                      e("span", Dc, l(W.type) + ":", 1),
                      e("a", {
                        href: W.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(W.url), 9, Rc),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: E.value === W.url,
                        onClick: (V) => z(W.url)
                      }, l(E.value === W.url ? "..." : "×"), 9, Nc)
                    ]))), 128))
                  ])) : (o(), s("div", Oc, " No download sources configured ")),
                  e("div", Uc, [
                    io(e("input", {
                      "onUpdate:modelValue": I[3] || (I[3] = (W) => _.value = W),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ro, _.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !_.value.trim() || d.value,
                      onClick: j
                    }, l(d.value ? "Adding..." : "Add Source"), 9, Bc)
                  ]),
                  C.value ? (o(), s("p", Pc, l(C.value), 1)) : u("", !0),
                  S.value ? (o(), s("p", Vc, l(S.value), 1)) : u("", !0)
                ])
              ])) : u("", !0)
            ];
          }),
          footer: a(() => [
            e("button", {
              class: "btn-secondary",
              onClick: I[4] || (I[4] = (P) => B.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), x(Se, { to: "body" }, [
          w.value ? (o(), s("div", {
            key: 0,
            class: ne(["toast", w.value.type])
          }, l(w.value.message), 3)) : u("", !0)
        ]))
      ], 64);
    };
  }
}), Jt = /* @__PURE__ */ Y(Fc, [["__scopeId", "data-v-f15cbb56"]]), Ac = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: r, getStatus: g } = Ie(), y = b([]), h = b([]), m = b("production"), i = b(!1), v = b(null), _ = b(""), d = b(!1), E = b(null);
    function C() {
      d.value = !1, n("navigate", "model-index");
    }
    const S = U(
      () => y.value.reduce((T, B) => T + (B.size || 0), 0)
    ), w = U(() => {
      if (!_.value.trim()) return y.value;
      const T = _.value.toLowerCase();
      return y.value.filter((B) => B.filename.toLowerCase().includes(T));
    }), k = U(() => {
      if (!_.value.trim()) return h.value;
      const T = _.value.toLowerCase();
      return h.value.filter((B) => B.filename.toLowerCase().includes(T));
    }), M = U(() => {
      const T = {};
      for (const I of w.value) {
        const $ = I.type || "other";
        T[$] || (T[$] = []), T[$].push(I);
      }
      const B = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(T).sort(([I], [$]) => {
        const P = B.indexOf(I), A = B.indexOf($);
        return P >= 0 && A >= 0 ? P - A : P >= 0 ? -1 : A >= 0 ? 1 : I.localeCompare($);
      }).map(([I, $]) => ({ type: I, models: $ }));
    });
    function N(T) {
      if (!T) return "Unknown";
      const B = T / (1024 * 1024);
      return B >= 1024 ? `${(B / 1024).toFixed(1)} GB` : `${B.toFixed(0)} MB`;
    }
    function R(T) {
      E.value = T.hash || T.filename;
    }
    function D(T) {
      n("navigate", "model-index");
    }
    function j(T) {
      alert(`Download functionality not yet implemented for ${T}`);
    }
    async function z() {
      i.value = !0, v.value = null;
      try {
        const T = await r();
        y.value = T, h.value = [];
        const B = await g();
        m.value = B.environment || "production";
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to load models";
      } finally {
        i.value = !1;
      }
    }
    return be(z), (T, B) => (o(), s(G, null, [
      f(Ee, null, {
        header: a(() => [
          f(Me, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (I) => d.value = !0)
          })
        ]),
        search: a(() => [
          f(lt, {
            modelValue: _.value,
            "onUpdate:modelValue": B[1] || (B[1] = (I) => _.value = I),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), x(qe, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (o(), x(Ke, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            y.value.length ? (o(), x(it, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                p(" Total: " + l(y.value.length) + " models • " + l(N(S.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(G, null, se(M.value, (I) => (o(), x(ke, {
              key: I.type,
              title: I.type.toUpperCase(),
              count: I.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(I.models, ($) => (o(), x(xe, {
                  key: $.hash || $.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...B[4] || (B[4] = [
                    p("📦", -1)
                  ])]),
                  title: a(() => [
                    p(l($.filename), 1)
                  ]),
                  subtitle: a(() => [
                    p(l(N($.size)), 1)
                  ]),
                  details: a(() => [
                    f(pe, {
                      label: "Used by:",
                      value: ($.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(pe, {
                      label: "Path:",
                      value: $.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (P) => R($)
                    }, {
                      default: a(() => [...B[5] || (B[5] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            k.value.length ? (o(), x(ke, {
              key: 1,
              title: "MISSING",
              count: k.value.length
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(k.value, (I) => (o(), x(xe, {
                  key: I.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...B[6] || (B[6] = [
                    p("⚠", -1)
                  ])]),
                  title: a(() => [
                    p(l(I.filename), 1)
                  ]),
                  subtitle: a(() => [...B[7] || (B[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var $;
                    return [
                      f(pe, {
                        label: "Required by:",
                        value: (($ = I.workflow_names) == null ? void 0 : $.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: ($) => j(I.filename)
                    }, {
                      default: a(() => [...B[8] || (B[8] = [
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: ($) => D(I.filename)
                    }, {
                      default: a(() => [...B[9] || (B[9] = [
                        p(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !w.value.length && !k.value.length ? (o(), x(Pe, {
              key: 2,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: d.value,
        title: "About Environment Models",
        onClose: B[2] || (B[2] = (I) => d.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            B[10] || (B[10] = p(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            B[11] || (B[11] = p(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          f(Z, {
            variant: "primary",
            onClick: C
          }, {
            default: a(() => [...B[12] || (B[12] = [
              p(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      E.value ? (o(), x(Jt, {
        key: 0,
        identifier: E.value,
        onClose: B[3] || (B[3] = (I) => E.value = null)
      }, null, 8, ["identifier"])) : u("", !0)
    ], 64));
  }
}), Wc = /* @__PURE__ */ Y(Ac, [["__scopeId", "data-v-cb4f12b3"]]), Gc = {
  key: 0,
  class: "indexing-progress"
}, jc = { class: "progress-info" }, Hc = { class: "progress-label" }, qc = { class: "progress-count" }, Kc = { class: "progress-bar" }, Jc = { class: "modal-content" }, Qc = { class: "modal-header" }, Xc = { class: "modal-body" }, Yc = { class: "input-group" }, Zc = { class: "current-path" }, eu = { class: "input-group" }, tu = { class: "modal-footer" }, ou = { class: "modal-content" }, su = { class: "modal-header" }, nu = { class: "modal-body" }, au = { class: "input-group" }, lu = { class: "input-group" }, iu = { class: "modal-footer" }, ru = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: g,
      setModelsDirectory: y
    } = Ie(), { addToQueue: h } = bt(), m = c, i = b([]), v = b(!1), _ = b(!1), d = b(null), E = b(""), C = b(!1), S = b(null), w = b(!1), k = b(null), M = b(""), N = b(!1), R = b(!1), D = b(""), j = b(""), z = b(null), T = U(
      () => i.value.reduce((V, O) => V + (O.size || 0), 0)
    ), B = U(() => {
      if (!E.value.trim()) return i.value;
      const V = E.value.toLowerCase();
      return i.value.filter((O) => {
        const ae = O, J = O.sha256 || ae.sha256_hash || "";
        return O.filename.toLowerCase().includes(V) || J.toLowerCase().includes(V);
      });
    }), I = U(() => {
      const V = {};
      for (const ae of B.value) {
        const J = ae.type || "other";
        V[J] || (V[J] = []), V[J].push(ae);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(V).sort(([ae], [J]) => {
        const $e = O.indexOf(ae), ge = O.indexOf(J);
        return $e >= 0 && ge >= 0 ? $e - ge : $e >= 0 ? -1 : ge >= 0 ? 1 : ae.localeCompare(J);
      }).map(([ae, J]) => ({ type: ae, models: J }));
    });
    function $(V) {
      if (!V) return "Unknown";
      const O = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return V >= O ? `${(V / O).toFixed(1)} GB` : V >= ae ? `${(V / ae).toFixed(0)} MB` : `${(V / 1024).toFixed(0)} KB`;
    }
    function P(V) {
      S.value = V.hash || V.filename;
    }
    async function A() {
      _.value = !0, d.value = null;
      try {
        const V = await r();
        await W(), V.changes > 0 && console.log(`Scan complete: ${V.changes} changes detected`);
      } catch (V) {
        d.value = V instanceof Error ? V.message : "Failed to scan models";
      } finally {
        _.value = !1;
      }
    }
    async function ee() {
      if (M.value.trim()) {
        N.value = !0, d.value = null;
        try {
          const V = await y(M.value.trim());
          k.value = V.path, w.value = !1, M.value = "", await W(), console.log(`Directory changed: ${V.models_indexed} models indexed`), m("refresh");
        } catch (V) {
          d.value = V instanceof Error ? V.message : "Failed to change directory";
        } finally {
          N.value = !1;
        }
      }
    }
    function te() {
      if (!D.value.trim() || !j.value.trim()) return;
      const V = j.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: V,
        url: D.value.trim(),
        targetPath: j.value.trim()
      }]), D.value = "", j.value = "", R.value = !1;
    }
    async function W() {
      v.value = !0, d.value = null;
      try {
        i.value = await n();
      } catch (V) {
        d.value = V instanceof Error ? V.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function K() {
      try {
        const V = await g();
        k.value = V.path;
      } catch {
      }
    }
    return be(() => {
      W(), K();
    }), (V, O) => (o(), s(G, null, [
      f(Ee, null, {
        header: a(() => [
          f(Me, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: O[2] || (O[2] = (ae) => C.value = !0)
          }, {
            actions: a(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                disabled: _.value,
                onClick: A
              }, {
                default: a(() => [
                  p(l(_.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (ae) => w.value = !0)
              }, {
                default: a(() => [...O[15] || (O[15] = [
                  p(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (ae) => R.value = !0)
              }, {
                default: a(() => [...O[16] || (O[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  p(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          z.value ? (o(), s("div", Gc, [
            e("div", jc, [
              e("span", Hc, l(z.value.message), 1),
              e("span", qc, l(z.value.current) + "/" + l(z.value.total), 1)
            ]),
            e("div", Kc, [
              e("div", {
                class: "progress-fill",
                style: Je({ width: `${z.value.current / z.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : u("", !0),
          f(lt, {
            modelValue: E.value,
            "onUpdate:modelValue": O[3] || (O[3] = (ae) => E.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value || z.value ? (o(), x(qe, {
            key: 0,
            message: z.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), x(Ke, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            i.value.length ? (o(), x(it, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                p(" Total: " + l(i.value.length) + " models • " + l($(T.value)), 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(G, null, se(I.value, (ae) => (o(), x(ke, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(ae.models, (J) => (o(), x(xe, {
                  key: J.sha256 || J.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...O[17] || (O[17] = [
                    p("📦", -1)
                  ])]),
                  title: a(() => [
                    p(l(J.filename), 1)
                  ]),
                  subtitle: a(() => [
                    p(l($(J.size)), 1)
                  ]),
                  details: a(() => [
                    f(pe, {
                      label: "Hash:",
                      value: J.hash ? J.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($e) => P(J)
                    }, {
                      default: a(() => [...O[18] || (O[18] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            B.value.length ? u("", !0) : (o(), x(Pe, {
              key: 1,
              icon: "📭",
              message: E.value ? `No models match '${E.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: C.value,
        title: "About Workspace Model Index",
        onClose: O[4] || (O[4] = (ae) => C.value = !1)
      }, {
        content: a(() => [...O[19] || (O[19] = [
          e("p", null, [
            p(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            p(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      S.value ? (o(), x(Jt, {
        key: 0,
        identifier: S.value,
        onClose: O[5] || (O[5] = (ae) => S.value = null)
      }, null, 8, ["identifier"])) : u("", !0),
      (o(), x(Se, { to: "body" }, [
        w.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[9] || (O[9] = we((ae) => w.value = !1, ["self"]))
        }, [
          e("div", Jc, [
            e("div", Qc, [
              O[20] || (O[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: O[6] || (O[6] = (ae) => w.value = !1)
              }, "✕")
            ]),
            e("div", Xc, [
              e("div", Yc, [
                O[21] || (O[21] = e("label", null, "Current Directory", -1)),
                e("code", Zc, l(k.value || "Not set"), 1)
              ]),
              e("div", eu, [
                O[22] || (O[22] = e("label", null, "New Directory Path", -1)),
                f(Be, {
                  modelValue: M.value,
                  "onUpdate:modelValue": O[7] || (O[7] = (ae) => M.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              O[23] || (O[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", tu, [
              f(le, {
                variant: "secondary",
                onClick: O[8] || (O[8] = (ae) => w.value = !1)
              }, {
                default: a(() => [...O[24] || (O[24] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(le, {
                variant: "primary",
                disabled: !M.value.trim() || N.value,
                loading: N.value,
                onClick: ee
              }, {
                default: a(() => [
                  p(l(N.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : u("", !0)
      ])),
      (o(), x(Se, { to: "body" }, [
        R.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[14] || (O[14] = we((ae) => R.value = !1, ["self"]))
        }, [
          e("div", ou, [
            e("div", su, [
              O[25] || (O[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: O[10] || (O[10] = (ae) => R.value = !1)
              }, "✕")
            ]),
            e("div", nu, [
              e("div", au, [
                O[26] || (O[26] = e("label", null, "Download URL", -1)),
                f(Be, {
                  modelValue: D.value,
                  "onUpdate:modelValue": O[11] || (O[11] = (ae) => D.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", lu, [
                O[27] || (O[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                f(Be, {
                  modelValue: j.value,
                  "onUpdate:modelValue": O[12] || (O[12] = (ae) => j.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              O[28] || (O[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", iu, [
              f(le, {
                variant: "secondary",
                onClick: O[13] || (O[13] = (ae) => R.value = !1)
              }, {
                default: a(() => [...O[29] || (O[29] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(le, {
                variant: "primary",
                disabled: !D.value.trim() || !j.value.trim(),
                onClick: te
              }, {
                default: a(() => [...O[30] || (O[30] = [
                  p(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : u("", !0)
      ]))
    ], 64));
  }
}), du = /* @__PURE__ */ Y(ru, [["__scopeId", "data-v-73b78d84"]]), cu = { class: "node-details" }, uu = { class: "status-row" }, mu = {
  key: 0,
  class: "detail-row"
}, vu = { class: "value" }, fu = { class: "detail-row" }, gu = { class: "value" }, hu = {
  key: 1,
  class: "detail-row"
}, pu = { class: "value mono" }, yu = {
  key: 2,
  class: "detail-row"
}, wu = ["href"], ku = {
  key: 3,
  class: "detail-row"
}, bu = { class: "value mono small" }, _u = { class: "detail-row" }, $u = {
  key: 0,
  class: "value"
}, Cu = {
  key: 1,
  class: "workflow-list"
}, xu = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), y = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, i) => (o(), x(at, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: i[1] || (i[1] = (v) => r("close"))
    }, {
      body: a(() => [
        e("div", cu, [
          e("div", uu, [
            i[2] || (i[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", g.value])
            }, l(y.value), 3)
          ]),
          t.node.version ? (o(), s("div", mu, [
            i[3] || (i[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", vu, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : u("", !0),
          e("div", fu, [
            i[4] || (i[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", gu, l(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", hu, [
            i[5] || (i[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", pu, l(t.node.registry_id), 1)
          ])) : u("", !0),
          t.node.repository ? (o(), s("div", yu, [
            i[7] || (i[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              p(l(t.node.repository) + " ", 1),
              i[6] || (i[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, wu)
          ])) : u("", !0),
          t.node.download_url ? (o(), s("div", ku, [
            i[8] || (i[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", bu, l(t.node.download_url), 1)
          ])) : u("", !0),
          i[10] || (i[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", _u, [
            i[9] || (i[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", $u, " Not used in any workflows ")) : (o(), s("div", Cu, [
              (o(!0), s(G, null, se(t.node.used_in_workflows, (v) => (o(), s("span", {
                key: v,
                class: "workflow-tag"
              }, l(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: a(() => [
        f(le, {
          variant: "secondary",
          onClick: i[0] || (i[0] = (v) => r("close"))
        }, {
          default: a(() => [...i[11] || (i[11] = [
            p(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Su = /* @__PURE__ */ Y(xu, [["__scopeId", "data-v-b342f626"]]), Iu = { key: 0 }, Eu = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Mu = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, zu = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: r, trackNodeAsDev: g, installNode: y, uninstallNode: h } = Ie(), m = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), i = b(!1), v = b(null), _ = b(""), d = b(!1), E = b(null), C = U(() => {
      if (!_.value.trim()) return m.value.nodes;
      const I = _.value.toLowerCase();
      return m.value.nodes.filter(
        ($) => {
          var P, A;
          return $.name.toLowerCase().includes(I) || ((P = $.description) == null ? void 0 : P.toLowerCase().includes(I)) || ((A = $.repository) == null ? void 0 : A.toLowerCase().includes(I));
        }
      );
    }), S = U(
      () => C.value.filter((I) => I.installed && I.tracked)
    ), w = U(
      () => C.value.filter((I) => !I.installed && I.tracked)
    ), k = U(
      () => C.value.filter((I) => I.installed && !I.tracked)
    );
    function M(I) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[I] || I;
    }
    function N(I) {
      return !I.used_in_workflows || I.used_in_workflows.length === 0 ? "Not used in any workflows" : I.used_in_workflows.length === 1 ? I.used_in_workflows[0] : `${I.used_in_workflows.length} workflows`;
    }
    function R(I) {
      E.value = I;
    }
    function D() {
      n("open-node-manager");
    }
    async function j(I) {
      if (confirm(`Track "${I}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          i.value = !0;
          const $ = await g(I);
          $.status === "success" ? (alert(`Node "${I}" is now tracked as development!`), await B()) : alert(`Failed to track node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error tracking node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function z(I) {
      if (confirm(`Remove untracked node "${I}"?

This will delete the node directory from custom_nodes/.`))
        try {
          i.value = !0;
          const $ = await h(I);
          $.status === "success" ? (alert(`Node "${I}" removed!`), await B()) : alert(`Failed to remove node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error removing node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function T(I) {
      if (confirm(`Install node "${I}"?

This will download and install the node.`))
        try {
          i.value = !0;
          const $ = await y(I);
          $.status === "success" ? (alert(`Node "${I}" installed successfully!`), await B()) : alert(`Failed to install node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error installing node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function B() {
      i.value = !0, v.value = null;
      try {
        m.value = await r();
      } catch (I) {
        v.value = I instanceof Error ? I.message : "Failed to load nodes";
      } finally {
        i.value = !1;
      }
    }
    return be(B), (I, $) => (o(), s(G, null, [
      f(Ee, null, {
        header: a(() => [
          f(Me, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => d.value = !0)
          }, {
            actions: a(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: a(() => [...$[5] || ($[5] = [
                  p(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          f(lt, {
            modelValue: _.value,
            "onUpdate:modelValue": $[1] || ($[1] = (P) => _.value = P),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), x(qe, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (o(), x(Ke, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            m.value.total_count ? (o(), x(it, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                p(l(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (o(), s(G, { key: 0 }, [
                  p(" • " + l(m.value.missing_count) + " missing", 1)
                ], 64)) : u("", !0),
                m.value.untracked_count ? (o(), s(G, { key: 1 }, [
                  p(" • " + l(m.value.untracked_count) + " untracked", 1)
                ], 64)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            k.value.length ? (o(), x(ke, {
              key: 1,
              title: "UNTRACKED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(k.value, (P) => (o(), x(xe, {
                  key: P.name,
                  status: "warning"
                }, {
                  icon: a(() => [...$[6] || ($[6] = [
                    p("?", -1)
                  ])]),
                  title: a(() => [
                    p(l(P.name), 1)
                  ]),
                  subtitle: a(() => [...$[7] || ($[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: a(() => [
                    f(pe, {
                      label: "Used by:",
                      value: N(P)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => R(P)
                    }, {
                      default: a(() => [...$[8] || ($[8] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => j(P.name)
                    }, {
                      default: a(() => [...$[9] || ($[9] = [
                        p(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (A) => z(P.name)
                    }, {
                      default: a(() => [...$[10] || ($[10] = [
                        p(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            S.value.length ? (o(), x(ke, {
              key: 2,
              title: "INSTALLED",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(S.value, (P) => (o(), x(xe, {
                  key: P.name,
                  status: "synced"
                }, {
                  icon: a(() => [
                    p(l(P.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: a(() => [
                    p(l(P.name), 1)
                  ]),
                  subtitle: a(() => [
                    P.version ? (o(), s("span", Iu, l(P.source === "development" ? "" : "v") + l(P.version), 1)) : (o(), s("span", Eu, "version unknown")),
                    e("span", Mu, " • " + l(M(P.source)), 1)
                  ]),
                  details: a(() => [
                    f(pe, {
                      label: "Used by:",
                      value: N(P)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => R(P)
                    }, {
                      default: a(() => [...$[11] || ($[11] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: D
                    }, {
                      default: a(() => [...$[12] || ($[12] = [
                        p(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            w.value.length ? (o(), x(ke, {
              key: 3,
              title: "MISSING",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(w.value, (P) => (o(), x(xe, {
                  key: P.name,
                  status: "missing"
                }, {
                  icon: a(() => [...$[13] || ($[13] = [
                    p("!", -1)
                  ])]),
                  title: a(() => [
                    p(l(P.name), 1)
                  ]),
                  subtitle: a(() => [...$[14] || ($[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: a(() => [
                    f(pe, {
                      label: "Required by:",
                      value: N(P)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => R(P)
                    }, {
                      default: a(() => [...$[15] || ($[15] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => T(P.name)
                    }, {
                      default: a(() => [...$[16] || ($[16] = [
                        p(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !S.value.length && !w.value.length && !k.value.length ? (o(), x(Pe, {
              key: 4,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: $[3] || ($[3] = (P) => d.value = !1)
      }, {
        content: a(() => [...$[17] || ($[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            p(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            p(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            p(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: a(() => [
          f(Z, {
            variant: "primary",
            onClick: $[2] || ($[2] = (P) => d.value = !1)
          }, {
            default: a(() => [...$[18] || ($[18] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      E.value ? (o(), x(Su, {
        key: 0,
        node: E.value,
        onClose: $[4] || ($[4] = (P) => E.value = null)
      }, null, 8, ["node"])) : u("", !0)
    ], 64));
  }
}), Lu = /* @__PURE__ */ Y(zu, [["__scopeId", "data-v-4ac1465a"]]), Tu = { class: "remote-url-display" }, Du = ["title"], Ru = ["title"], Nu = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Ou = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Uu = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = b(!1), r = U(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const y = c.url.slice(0, Math.floor(c.maxLength * 0.6)), h = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${y}...${h}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, h) => (o(), s("div", Tu, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, Du),
      e("button", {
        class: ne(["copy-btn", { copied: n.value }]),
        onClick: g,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Ou, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", Nu, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Ru)
    ]));
  }
}), Vt = /* @__PURE__ */ Y(Uu, [["__scopeId", "data-v-7768a58d"]]), Bu = { class: "remote-title" }, Pu = {
  key: 0,
  class: "default-badge"
}, Vu = {
  key: 1,
  class: "sync-badge"
}, Fu = {
  key: 0,
  class: "ahead"
}, Au = {
  key: 1,
  class: "behind"
}, Wu = {
  key: 0,
  class: "tracking-info"
}, Gu = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const n = t, r = U(() => n.fetchingRemote === n.remote.name), g = U(() => n.remote.is_default), y = U(() => !!n.trackingBranch);
    function h(m) {
      const i = new Date(m), _ = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), d = Math.floor(_ / 6e4);
      if (d < 1) return "Just now";
      if (d < 60) return `${d}m ago`;
      const E = Math.floor(d / 60);
      if (E < 24) return `${E}h ago`;
      const C = Math.floor(E / 24);
      return C < 7 ? `${C}d ago` : i.toLocaleDateString();
    }
    return (m, i) => (o(), x(xe, {
      status: g.value ? "synced" : void 0
    }, {
      icon: a(() => [
        p(l(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", Bu, [
          e("span", null, l(t.remote.name), 1),
          g.value ? (o(), s("span", Pu, "DEFAULT")) : u("", !0),
          t.syncStatus ? (o(), s("span", Vu, [
            t.syncStatus.ahead > 0 ? (o(), s("span", Fu, "↑" + l(t.syncStatus.ahead), 1)) : u("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", Au, "↓" + l(t.syncStatus.behind), 1)) : u("", !0)
          ])) : u("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), s("span", Wu, " Tracking: " + l(t.trackingBranch), 1)) : u("", !0)
      ]),
      details: a(() => {
        var v;
        return [
          f(pe, { label: "Fetch:" }, {
            default: a(() => [
              f(Vt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), x(pe, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              f(Vt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : u("", !0),
          (v = t.syncStatus) != null && v.last_fetch ? (o(), x(pe, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, l(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : u("", !0)
        ];
      }),
      actions: a(() => [
        f(Z, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: i[0] || (i[0] = (v) => m.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...i[3] || (i[3] = [
            p(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(Z, {
          variant: "secondary",
          size: "xs",
          onClick: i[1] || (i[1] = (v) => m.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...i[4] || (i[4] = [
            p(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? u("", !0) : (o(), x(Z, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: i[2] || (i[2] = (v) => m.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...i[5] || (i[5] = [
            p(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), ju = /* @__PURE__ */ Y(Gu, [["__scopeId", "data-v-17362e45"]]), Hu = ["for"], qu = {
  key: 0,
  class: "base-form-field-required"
}, Ku = { class: "base-form-field-input" }, Ju = {
  key: 1,
  class: "base-form-field-error"
}, Qu = {
  key: 2,
  class: "base-form-field-hint"
}, Xu = /* @__PURE__ */ X({
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
    return (r, g) => (o(), s("div", {
      class: ne(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        p(l(t.label) + " ", 1),
        t.required ? (o(), s("span", qu, "*")) : u("", !0)
      ], 8, Hu)) : u("", !0),
      e("div", Ku, [
        de(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Ju, l(t.error), 1)) : t.hint ? (o(), s("span", Qu, l(t.hint), 1)) : u("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ Y(Xu, [["__scopeId", "data-v-9a1cf296"]]), Yu = { class: "remote-form" }, Zu = { class: "form-header" }, em = { class: "form-body" }, tm = {
  key: 0,
  class: "form-error"
}, om = { class: "form-actions" }, sm = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = b({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), y = b(!1), h = b(null);
    Tt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      g.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = U(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function i() {
      if (!(!m.value || y.value)) {
        h.value = null, y.value = !0;
        try {
          r("submit", g.value);
        } catch (v) {
          h.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (v, _) => (o(), s("div", Yu, [
      e("div", Zu, [
        f(Te, null, {
          default: a(() => [
            p(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", em, [
        f(It, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            f(Be, {
              modelValue: g.value.name,
              "onUpdate:modelValue": _[0] || (_[0] = (d) => g.value.name = d),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        f(It, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            f(Be, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": _[1] || (_[1] = (d) => g.value.fetchUrl = d),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f(It, { label: "Push URL (optional)" }, {
          default: a(() => [
            f(Be, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": _[2] || (_[2] = (d) => g.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), s("div", tm, l(h.value), 1)) : u("", !0)
      ]),
      e("div", om, [
        f(Z, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: y.value,
          onClick: i
        }, {
          default: a(() => [
            p(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(Z, {
          variant: "ghost",
          size: "md",
          onClick: _[3] || (_[3] = (d) => v.$emit("cancel"))
        }, {
          default: a(() => [..._[4] || (_[4] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), nm = /* @__PURE__ */ Y(sm, [["__scopeId", "data-v-56021b18"]]), am = { key: 0 }, lm = /* @__PURE__ */ X({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: g,
      fetchRemote: y,
      getRemoteSyncStatus: h
    } = Ie(), m = b([]), i = b(null), v = b({}), _ = b(!1), d = b(null), E = b(""), C = b(!1), S = b(null), w = b(!1), k = b("add"), M = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), N = U(() => {
      if (!E.value.trim()) return m.value;
      const A = E.value.toLowerCase();
      return m.value.filter(
        (ee) => ee.name.toLowerCase().includes(A) || ee.fetch_url.toLowerCase().includes(A) || ee.push_url.toLowerCase().includes(A)
      );
    });
    function R(A) {
      var ee;
      return ((ee = i.value) == null ? void 0 : ee.remote) === A;
    }
    async function D() {
      _.value = !0, d.value = null;
      try {
        const A = await c();
        m.value = A.remotes, i.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (ee) => {
            const te = await h(ee.name);
            te && (v.value[ee.name] = te);
          })
        );
      } catch (A) {
        d.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        _.value = !1;
      }
    }
    function j() {
      k.value = "add", M.value = { name: "", fetchUrl: "", pushUrl: "" }, w.value = !0;
    }
    function z(A) {
      const ee = m.value.find((te) => te.name === A);
      ee && (k.value = "edit", M.value = {
        name: ee.name,
        fetchUrl: ee.fetch_url,
        pushUrl: ee.push_url
      }, w.value = !0);
    }
    async function T(A) {
      try {
        k.value === "add" ? await n(A.name, A.fetchUrl) : await g(A.name, A.fetchUrl, A.pushUrl || void 0), w.value = !1, await D();
      } catch (ee) {
        d.value = ee instanceof Error ? ee.message : "Operation failed";
      }
    }
    function B() {
      w.value = !1, M.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function I(A) {
      S.value = A;
      try {
        await y(A);
        const ee = await h(A);
        ee && (v.value[A] = ee);
      } catch (ee) {
        d.value = ee instanceof Error ? ee.message : "Fetch failed";
      } finally {
        S.value = null;
      }
    }
    async function $(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await r(A), await D();
        } catch (ee) {
          d.value = ee instanceof Error ? ee.message : "Failed to remove remote";
        }
    }
    function P() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return be(D), (A, ee) => (o(), s(G, null, [
      f(Ee, null, {
        header: a(() => [
          f(Me, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ee[0] || (ee[0] = (te) => C.value = !0)
          }, {
            actions: a(() => [
              w.value ? u("", !0) : (o(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: a(() => [...ee[3] || (ee[3] = [
                  p(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          w.value ? u("", !0) : (o(), x(lt, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (te) => E.value = te),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          _.value ? (o(), x(qe, {
            key: 0,
            message: "Loading remotes..."
          })) : d.value ? (o(), x(Ke, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            w.value ? (o(), x(nm, {
              key: 0,
              mode: k.value,
              "remote-name": M.value.name,
              "fetch-url": M.value.fetchUrl,
              "push-url": M.value.pushUrl,
              onSubmit: T,
              onCancel: B
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : u("", !0),
            m.value.length && !w.value ? (o(), x(it, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                p(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                i.value ? (o(), s("span", am, " • Tracking: " + l(i.value.remote) + "/" + l(i.value.branch), 1)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            N.value.length && !w.value ? (o(), x(ke, {
              key: 2,
              title: "REMOTES",
              count: N.value.length
            }, {
              default: a(() => [
                (o(!0), s(G, null, se(N.value, (te) => {
                  var W;
                  return o(), x(ju, {
                    key: te.name,
                    remote: te,
                    "sync-status": v.value[te.name],
                    "tracking-branch": R(te.name) ? (W = i.value) == null ? void 0 : W.branch : void 0,
                    "fetching-remote": S.value,
                    onFetch: I,
                    onEdit: z,
                    onRemove: $
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !N.value.length && !w.value ? (o(), x(Pe, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                f(Z, {
                  variant: "primary",
                  onClick: j
                }, {
                  default: a(() => [...ee[4] || (ee[4] = [
                    p(" Add Your First Remote ", -1)
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
      f(He, {
        show: C.value,
        title: "About Git Remotes",
        onClose: ee[2] || (ee[2] = (te) => C.value = !1)
      }, {
        content: a(() => [...ee[5] || (ee[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            p(" The "),
            e("strong", null, '"origin"'),
            p(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          f(Z, {
            variant: "link",
            onClick: P
          }, {
            default: a(() => [...ee[6] || (ee[6] = [
              p(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), im = /* @__PURE__ */ Y(lm, [["__scopeId", "data-v-a75719bb"]]), rm = { class: "setting-info" }, dm = { class: "setting-label" }, cm = {
  key: 0,
  class: "required-marker"
}, um = {
  key: 0,
  class: "setting-description"
}, mm = { class: "setting-control" }, vm = /* @__PURE__ */ X({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", rm, [
        e("div", dm, [
          p(l(t.label) + " ", 1),
          t.required ? (o(), s("span", cm, "*")) : u("", !0)
        ]),
        t.description ? (o(), s("div", um, l(t.description), 1)) : u("", !0)
      ]),
      e("div", mm, [
        de(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ge = /* @__PURE__ */ Y(vm, [["__scopeId", "data-v-cb5d236c"]]), fm = { class: "toggle" }, gm = ["checked", "disabled"], hm = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", fm, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, gm),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ze = /* @__PURE__ */ Y(hm, [["__scopeId", "data-v-71c0f550"]]), pm = { class: "settings-section" }, ym = { class: "path-setting" }, wm = { class: "path-value" }, km = { class: "path-setting" }, bm = { class: "path-value" }, _m = { class: "settings-section" }, $m = { class: "settings-section" }, Cm = { class: "settings-section" }, xm = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Ie(), r = b(!1), g = b(null), y = b(null), h = b(null), m = b(null), i = b(""), v = b(""), _ = b(!0), d = b(!0), E = b(!1), C = U(() => m.value ? i.value !== (m.value.civitai_api_key || "") : !1);
    async function S() {
      r.value = !0, g.value = null;
      try {
        h.value = await c(), m.value = { ...h.value }, i.value = h.value.civitai_api_key || "", v.value = h.value.huggingface_token || "", _.value = h.value.auto_sync_models, d.value = h.value.confirm_destructive;
        const N = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        E.value = N === "true";
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function w() {
      var N;
      y.value = null;
      try {
        const R = {};
        i.value !== (((N = m.value) == null ? void 0 : N.civitai_api_key) || "") && (R.civitai_api_key = i.value || null), await n(R), await S(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (R) {
        y.value = {
          type: "error",
          message: R instanceof Error ? R.message : "Failed to save settings"
        };
      }
    }
    function k() {
      m.value && (i.value = m.value.civitai_api_key || "", v.value = m.value.huggingface_token || "", _.value = m.value.auto_sync_models, d.value = m.value.confirm_destructive, y.value = null);
    }
    function M(N) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(N)), console.log("[ComfyGit] Auto-refresh setting saved:", N);
    }
    return be(S), (N, R) => (o(), x(Ee, null, {
      header: a(() => [
        f(Me, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            f(Z, {
              variant: "primary",
              size: "sm",
              disabled: !C.value,
              onClick: w
            }, {
              default: a(() => [...R[5] || (R[5] = [
                p(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            C.value ? (o(), x(Z, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: a(() => [...R[6] || (R[6] = [
                p(" Reset ", -1)
              ])]),
              _: 1
            })) : u("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        r.value ? (o(), x(qe, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), x(Ke, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: S
        }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
          f(ke, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var D, j;
              return [
                e("div", pm, [
                  e("div", ym, [
                    R[7] || (R[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    R[8] || (R[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", wm, l(((D = h.value) == null ? void 0 : D.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", km, [
                    R[9] || (R[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    R[10] || (R[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", bm, l(((j = h.value) == null ? void 0 : j.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(ke, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", _m, [
                f(Ge, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    f(kt, {
                      modelValue: i.value,
                      "onUpdate:modelValue": R[0] || (R[0] = (D) => i.value = D),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(Ge, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(kt, {
                      modelValue: v.value,
                      "onUpdate:modelValue": R[1] || (R[1] = (D) => v.value = D),
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
          f(ke, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", $m, [
                f(Ge, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    f(Ze, {
                      modelValue: E.value,
                      "onUpdate:modelValue": [
                        R[2] || (R[2] = (D) => E.value = D),
                        M
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f(ke, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", Cm, [
                f(Ge, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(Ze, {
                      modelValue: _.value,
                      "onUpdate:modelValue": R[3] || (R[3] = (D) => _.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(Ge, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    f(Ze, {
                      modelValue: d.value,
                      "onUpdate:modelValue": R[4] || (R[4] = (D) => d.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), x(it, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Je({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : u("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Sm = /* @__PURE__ */ Y(xm, [["__scopeId", "data-v-7861bd35"]]), Im = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = Ie(), n = b([]), r = b(!1), g = b(null), y = b(!1), h = b(null), m = U(() => n.value.length === 0 ? [] : n.value.map((v) => ({
      text: `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function i() {
      r.value = !0, g.value = null;
      try {
        n.value = await c(void 0, 500);
      } catch (v) {
        g.value = v instanceof Error ? v.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var v;
          (v = h.value) != null && v.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(i), (v, _) => (o(), s(G, null, [
      f(Ee, null, {
        header: a(() => [
          f(Me, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (d) => y.value = !0)
          }, {
            actions: a(() => [
              f(Z, {
                variant: "secondary",
                size: "sm",
                onClick: i,
                disabled: r.value
              }, {
                default: a(() => [
                  p(l(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          r.value ? (o(), x(qe, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), x(Ke, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: i
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            n.value.length === 0 ? (o(), x(Pe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(G, null, se(m.value, (d, E) => (o(), s("div", {
                key: E,
                class: ne(`log-line log-level-${d.level.toLowerCase()}`)
              }, l(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: _[2] || (_[2] = (d) => y.value = !1)
      }, {
        content: a(() => [..._[3] || (_[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            p(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            p(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            p(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            p(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          f(Z, {
            variant: "primary",
            onClick: _[1] || (_[1] = (d) => y.value = !1)
          }, {
            default: a(() => [..._[4] || (_[4] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Em = /* @__PURE__ */ Y(Im, [["__scopeId", "data-v-39f6a756"]]), Mm = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n } = Ie(), r = b([]), g = b(!1), y = b(null), h = b(!1), m = b("production"), i = b(null), v = U(() => r.value.length === 0 ? [] : r.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function _() {
      g.value = !0, y.value = null;
      try {
        r.value = await c(void 0, 500);
        try {
          const d = await n();
          m.value = d.environment || "production";
        } catch {
        }
      } catch (d) {
        y.value = d instanceof Error ? d.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var d;
          (d = i.value) != null && d.parentElement && (i.value.parentElement.scrollTop = i.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(_), (d, E) => (o(), s(G, null, [
      f(Ee, null, {
        header: a(() => [
          f(Me, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (C) => h.value = !0)
          }, {
            actions: a(() => [
              f(Z, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: g.value
              }, {
                default: a(() => [
                  p(l(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          g.value ? (o(), x(qe, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), x(Ke, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
            r.value.length === 0 ? (o(), x(Pe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: i,
              class: "log-output"
            }, [
              (o(!0), s(G, null, se(v.value, (C, S) => (o(), s("div", {
                key: S,
                class: ne(`log-line log-level-${C.level.toLowerCase()}`)
              }, l(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: h.value,
        title: "About Environment Logs",
        onClose: E[2] || (E[2] = (C) => h.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            E[3] || (E[3] = p(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(m.value), 1),
            E[4] || (E[4] = p(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          E[5] || (E[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            p(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            p(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            p(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            p(" Detailed debugging information ")
          ], -1)),
          E[6] || (E[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          f(Z, {
            variant: "primary",
            onClick: E[1] || (E[1] = (C) => h.value = !1)
          }, {
            default: a(() => [...E[7] || (E[7] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), zm = /* @__PURE__ */ Y(Mm, [["__scopeId", "data-v-4f1e6f72"]]), Lm = { class: "env-title" }, Tm = {
  key: 0,
  class: "current-badge"
}, Dm = {
  key: 0,
  class: "branch-info"
}, Rm = /* @__PURE__ */ X({
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
    showLastUsed: { type: Boolean, default: !0 }
  },
  setup(t) {
    return (c, n) => (o(), x(xe, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        p(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", Lm, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Tm, "CURRENT")) : u("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), s("span", Dm, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          p(" " + l(t.currentBranch), 1)
        ])) : u("", !0)
      ]),
      details: a(() => [
        f(pe, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        f(pe, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        f(pe, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), x(pe, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : u("", !0)
      ]),
      actions: a(() => [
        de(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Nm = /* @__PURE__ */ Y(Rm, [["__scopeId", "data-v-5238e57c"]]), Om = {
  key: 0,
  class: "create-form"
}, Um = { class: "create-form__header" }, Bm = { class: "create-form__body" }, Pm = { class: "create-form__actions" }, Vm = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Fm = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironments: r } = Ie(), g = b([]), y = b(!1), h = b(null), m = b(""), i = b(!1), v = b(!1), _ = b(""), d = U(
      () => g.value.find((R) => R.is_current)
    ), E = U(() => {
      if (!m.value.trim()) return g.value;
      const R = m.value.toLowerCase();
      return g.value.filter(
        (D) => {
          var j;
          return D.name.toLowerCase().includes(R) || ((j = D.current_branch) == null ? void 0 : j.toLowerCase().includes(R));
        }
      );
    });
    function C(R) {
      if (!R) return "";
      try {
        const D = new Date(R), z = (/* @__PURE__ */ new Date()).getTime() - D.getTime(), T = Math.floor(z / 6e4), B = Math.floor(z / 36e5), I = Math.floor(z / 864e5);
        return T < 1 ? "just now" : T < 60 ? `${T} ${T === 1 ? "minute" : "minutes"} ago` : B < 24 ? `${B} ${B === 1 ? "hour" : "hours"} ago` : I < 30 ? `${I} ${I === 1 ? "day" : "days"} ago` : D.toLocaleDateString();
      } catch {
        return R;
      }
    }
    function S() {
      const R = _.value.trim();
      R && (n("create", R), _.value = "", v.value = !1);
    }
    function w() {
      _.value = "", v.value = !1;
    }
    function k(R) {
      n("viewDetails", R);
    }
    function M(R) {
      confirm(`Delete environment "${R}"?

This action cannot be undone.`) && n("delete", R);
    }
    async function N() {
      y.value = !0, h.value = null;
      try {
        g.value = await r();
      } catch (R) {
        h.value = R instanceof Error ? R.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return be(N), (R, D) => {
      const j = co("SectionGroup");
      return o(), s(G, null, [
        f(Ee, null, {
          header: a(() => [
            f(Me, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: D[1] || (D[1] = (z) => i.value = !0)
            }, {
              actions: a(() => [
                f(Z, {
                  variant: "ghost",
                  size: "sm",
                  onClick: D[0] || (D[0] = (z) => v.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...D[7] || (D[7] = [
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
                }),
                f(Z, {
                  variant: "ghost",
                  size: "sm",
                  onClick: N,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...D[8] || (D[8] = [
                    e("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z" })
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: a(() => [
            f(lt, {
              modelValue: m.value,
              "onUpdate:modelValue": D[2] || (D[2] = (z) => m.value = z),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), x(qe, {
              key: 0,
              message: "Loading environments..."
            })) : h.value ? (o(), x(Ke, {
              key: 1,
              message: h.value,
              retry: !0,
              onRetry: N
            }, null, 8, ["message"])) : (o(), s(G, { key: 2 }, [
              v.value ? (o(), s("div", Om, [
                e("div", Um, [
                  D[10] || (D[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  f(Z, {
                    variant: "ghost",
                    size: "xs",
                    onClick: w
                  }, {
                    default: a(() => [...D[9] || (D[9] = [
                      p(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", Bm, [
                  f(kt, {
                    modelValue: _.value,
                    "onUpdate:modelValue": D[3] || (D[3] = (z) => _.value = z),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      je(S, ["enter"]),
                      je(w, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Pm, [
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: S,
                      disabled: !_.value.trim()
                    }, {
                      default: a(() => [...D[11] || (D[11] = [
                        p(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: w
                    }, {
                      default: a(() => [...D[12] || (D[12] = [
                        p(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : u("", !0),
              g.value.length ? (o(), x(it, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  p(" Total: " + l(g.value.length) + " " + l(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  d.value ? (o(), s(G, { key: 0 }, [
                    D[13] || (D[13] = p(" • Current: ", -1)),
                    e("strong", null, l(d.value.name), 1)
                  ], 64)) : u("", !0)
                ]),
                _: 1
              })) : u("", !0),
              E.value.length ? (o(), x(j, {
                key: 2,
                title: "ENVIRONMENTS",
                count: E.value.length
              }, {
                default: a(() => [
                  (o(!0), s(G, null, se(E.value, (z) => (o(), x(Nm, {
                    key: z.name,
                    "environment-name": z.name,
                    "is-current": z.is_current,
                    "current-branch": z.current_branch,
                    "workflow-count": z.workflow_count,
                    "node-count": z.node_count,
                    "model-count": z.model_count,
                    "last-used": C(z.last_used),
                    "show-last-used": !!z.last_used
                  }, {
                    actions: a(() => [
                      z.is_current ? u("", !0) : (o(), x(Z, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (T) => R.$emit("switch", z.name)
                      }, {
                        default: a(() => [...D[14] || (D[14] = [
                          p(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      f(Z, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (T) => k(z.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...D[15] || (D[15] = [
                          e("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 16 16",
                            fill: "currentColor"
                          }, [
                            e("path", { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }),
                            e("path", { d: "M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" })
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]),
                      !z.is_current && g.value.length > 1 ? (o(), x(Z, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (T) => M(z.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), s("svg", Vm, [...D[16] || (D[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : u("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : u("", !0),
              E.value.length ? u("", !0) : (o(), x(Pe, {
                key: 3,
                icon: "🌍",
                message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
              }, Dt({ _: 2 }, [
                m.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    f(Z, {
                      variant: "primary",
                      onClick: D[4] || (D[4] = (z) => v.value = !0)
                    }, {
                      default: a(() => [...D[17] || (D[17] = [
                        p(" Create Environment ", -1)
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
        f(He, {
          show: i.value,
          title: "About Environments",
          onClose: D[6] || (D[6] = (z) => i.value = !1)
        }, {
          content: a(() => [...D[18] || (D[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              p(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          actions: a(() => [
            f(Z, {
              variant: "secondary",
              onClick: D[5] || (D[5] = (z) => i.value = !1)
            }, {
              default: a(() => [...D[19] || (D[19] = [
                p(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), Am = /* @__PURE__ */ Y(Fm, [["__scopeId", "data-v-97d6527d"]]), Wm = { class: "file-path" }, Gm = { class: "file-path-text" }, jm = ["title"], Hm = /* @__PURE__ */ X({
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
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, y) => (o(), s("div", Wm, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Gm, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(n.value ? "✓" : "📋"), 9, jm)) : u("", !0)
    ]));
  }
}), qm = /* @__PURE__ */ Y(Hm, [["__scopeId", "data-v-f0982173"]]), Km = { class: "output-path-input" }, Jm = { class: "export-actions" }, Qm = {
  key: 1,
  class: "export-warning"
}, Xm = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = Ie(), n = b(""), r = b(!1), g = b(null), y = b(!1);
    async function h() {
      r.value = !0, g.value = null;
      try {
        const i = await c(n.value || void 0);
        g.value = i;
      } catch (i) {
        g.value = {
          status: "error",
          message: i instanceof Error ? i.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function m() {
      var i;
      if ((i = g.value) != null && i.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (v) {
          console.error("Failed to copy path:", v);
        }
    }
    return (i, v) => (o(), s(G, null, [
      f(Ee, null, {
        header: a(() => [
          f(Me, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              f(Z, {
                variant: "ghost",
                size: "sm",
                onClick: v[0] || (v[0] = (_) => y.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...v[5] || (v[5] = [
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
        content: a(() => [
          f(ke, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              f(xe, { status: "synced" }, {
                icon: a(() => [...v[6] || (v[6] = [
                  p("📦", -1)
                ])]),
                title: a(() => [...v[7] || (v[7] = [
                  p("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...v[8] || (v[8] = [
                  p(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  f(pe, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  f(pe, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  f(pe, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  f(pe, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(ke, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              f(xe, { status: "synced" }, {
                icon: a(() => [...v[9] || (v[9] = [
                  p("📁", -1)
                ])]),
                title: a(() => [...v[10] || (v[10] = [
                  p("Output Destination", -1)
                ])]),
                subtitle: a(() => [...v[11] || (v[11] = [
                  p(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", Km, [
                    f(kt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": v[1] || (v[1] = (_) => n.value = _),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(ke, { title: "EXPORT" }, {
            default: a(() => [
              e("div", Jm, [
                f(Z, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
                }, {
                  default: a(() => [
                    v[12] || (v[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    p(" " + l(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), x(Z, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: v[2] || (v[2] = (_) => n.value = "")
                }, {
                  default: a(() => [...v[13] || (v[13] = [
                    p(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : u("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), x(ke, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              f(xe, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, Dt({
                icon: a(() => [
                  p(l(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  p(l(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  p(l(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    f(pe, { label: "Saved to:" }, {
                      default: a(() => [
                        f(qm, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), x(pe, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : u("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), s("div", Qm, [...v[14] || (v[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : u("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: a(() => [...v[15] || (v[15] = [
                        p(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: v[3] || (v[3] = (_) => g.value = null)
                    }, {
                      default: a(() => [...v[16] || (v[16] = [
                        p(" Dismiss ", -1)
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
      f(He, {
        show: y.value,
        title: "About Environment Export",
        onClose: v[4] || (v[4] = (_) => y.value = !1)
      }, {
        content: a(() => [...v[17] || (v[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            p(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ym = /* @__PURE__ */ Y(Xm, [["__scopeId", "data-v-1777a9d5"]]), Zm = { class: "file-input-wrapper" }, ev = ["accept", "multiple", "disabled"], tv = /* @__PURE__ */ X({
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
    const r = n, g = b(null);
    function y() {
      var m;
      (m = g.value) == null || m.click();
    }
    function h(m) {
      const i = m.target;
      i.files && i.files.length > 0 && (r("change", i.files), i.value = "");
    }
    return c({
      triggerInput: y
    }), (m, i) => (o(), s("div", Zm, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, ev),
      f(Z, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          de(m.$slots, "default", {}, () => [
            i[0] || (i[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            p(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), ov = /* @__PURE__ */ Y(tv, [["__scopeId", "data-v-cd192091"]]), sv = {
  key: 0,
  class: "drop-zone-empty"
}, nv = { class: "drop-zone-text" }, av = { class: "drop-zone-primary" }, lv = { class: "drop-zone-secondary" }, iv = { class: "drop-zone-actions" }, rv = {
  key: 1,
  class: "drop-zone-file"
}, dv = { class: "file-info" }, cv = { class: "file-details" }, uv = { class: "file-name" }, mv = { class: "file-size" }, vv = /* @__PURE__ */ X({
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
    const n = c, r = b(!1), g = b(null), y = b(0), h = U(() => g.value !== null), m = U(() => {
      var k;
      return ((k = g.value) == null ? void 0 : k.name) || "";
    }), i = U(() => {
      if (!g.value) return "";
      const k = g.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(k) {
      var M;
      y.value++, (M = k.dataTransfer) != null && M.types.includes("Files") && (r.value = !0);
    }
    function _(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function d() {
      y.value--, y.value === 0 && (r.value = !1);
    }
    function E(k) {
      var N;
      y.value = 0, r.value = !1;
      const M = (N = k.dataTransfer) == null ? void 0 : N.files;
      M && M.length > 0 && S(M[0]);
    }
    function C(k) {
      k.length > 0 && S(k[0]);
    }
    function S(k) {
      g.value = k, n("fileSelected", k);
    }
    function w() {
      g.value = null, n("clear");
    }
    return (k, M) => (o(), s("div", {
      class: ne(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: we(v, ["prevent"]),
      onDragover: we(_, ["prevent"]),
      onDragleave: we(d, ["prevent"]),
      onDrop: we(E, ["prevent"])
    }, [
      h.value ? (o(), s("div", rv, [
        e("div", dv, [
          M[1] || (M[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", cv, [
            e("div", uv, l(m.value), 1),
            e("div", mv, l(i.value), 1)
          ])
        ]),
        f(Z, {
          variant: "ghost",
          size: "xs",
          onClick: w,
          title: "Remove file"
        }, {
          default: a(() => [...M[2] || (M[2] = [
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
      ])) : (o(), s("div", sv, [
        M[0] || (M[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", nv, [
          e("p", av, l(t.primaryText), 1),
          e("p", lv, l(t.secondaryText), 1)
        ]),
        e("div", iv, [
          f(ov, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: C
          }, {
            default: a(() => [
              p(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), fv = /* @__PURE__ */ Y(vv, [["__scopeId", "data-v-e00abbca"]]), gv = { class: "import-preview" }, hv = { class: "preview-header" }, pv = {
  key: 0,
  class: "source-env"
}, yv = { class: "preview-content" }, wv = { class: "preview-section" }, kv = { class: "section-header" }, bv = { class: "section-info" }, _v = { class: "section-count" }, $v = {
  key: 0,
  class: "item-list"
}, Cv = { class: "item-name" }, xv = {
  key: 0,
  class: "item-more"
}, Sv = { class: "preview-section" }, Iv = { class: "section-header" }, Ev = { class: "section-info" }, Mv = { class: "section-count" }, zv = {
  key: 0,
  class: "item-list"
}, Lv = { class: "item-details" }, Tv = { class: "item-name" }, Dv = { class: "item-meta" }, Rv = {
  key: 0,
  class: "item-more"
}, Nv = { class: "preview-section" }, Ov = { class: "section-header" }, Uv = { class: "section-info" }, Bv = { class: "section-count" }, Pv = {
  key: 0,
  class: "item-list"
}, Vv = { class: "item-name" }, Fv = {
  key: 0,
  class: "item-more"
}, Av = {
  key: 0,
  class: "preview-section"
}, Wv = { class: "git-info" }, Gv = /* @__PURE__ */ X({
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
    const c = t, n = U(() => c.workflows.length), r = U(() => c.models.length), g = U(() => c.nodes.length);
    function y(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, m) => (o(), s("div", gv, [
      e("div", hv, [
        f(Te, null, {
          default: a(() => [...m[0] || (m[0] = [
            p("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", pv, [
          m[1] || (m[1] = p(" From: ", -1)),
          f(zt, null, {
            default: a(() => [
              p(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : u("", !0)
      ]),
      e("div", yv, [
        e("div", wv, [
          e("div", kv, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", bv, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", _v, l(n.value) + " file" + l(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", $v, [
            (o(!0), s(G, null, se(t.workflows.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Cv, l(i), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", xv, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", Sv, [
          e("div", Iv, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Ev, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Mv, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", zv, [
            (o(!0), s(G, null, se(t.models.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Lv, [
                e("span", Tv, l(i.filename), 1),
                e("span", Dv, l(y(i.size)) + " • " + l(i.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", Rv, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", Nv, [
          e("div", Ov, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Uv, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Bv, l(g.value) + " node" + l(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", Pv, [
            (o(!0), s(G, null, se(t.nodes.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Vv, l(i), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", Fv, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", Av, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Wv, [
            t.gitBranch ? (o(), x(pe, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                f(zt, null, {
                  default: a(() => [
                    p(l(t.gitBranch), 1)
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
              default: a(() => [
                f(Ht, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : u("", !0)
          ])
        ])) : u("", !0)
      ])
    ]));
  }
}), jv = /* @__PURE__ */ Y(Gv, [["__scopeId", "data-v-182fe113"]]), Hv = { class: "import-options" }, qv = { class: "options-container" }, Kv = { class: "option-section" }, Jv = { class: "conflict-options" }, Qv = ["value", "checked", "onChange"], Xv = { class: "conflict-content" }, Yv = { class: "conflict-label" }, Zv = { class: "conflict-description" }, ef = { class: "option-section" }, tf = { class: "component-toggles" }, of = /* @__PURE__ */ X({
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
    return (g, y) => (o(), s("div", Hv, [
      f(Te, null, {
        default: a(() => [...y[4] || (y[4] = [
          p("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", qv, [
        e("div", Kv, [
          f(Mt, null, {
            default: a(() => [...y[5] || (y[5] = [
              p("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Jv, [
            (o(), s(G, null, se(r, (h) => e("label", {
              key: h.value,
              class: ne(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (m) => n("update:conflictMode", h.value)
              }, null, 40, Qv),
              e("div", Xv, [
                e("span", Yv, l(h.label), 1),
                e("span", Zv, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", ef, [
          f(Mt, null, {
            default: a(() => [...y[6] || (y[6] = [
              p("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", tf, [
            f(Ge, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                f(Ze, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (h) => n("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                f(Ze, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (h) => n("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                f(Ze, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (h) => n("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                f(Ze, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (h) => n("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), sf = /* @__PURE__ */ Y(of, [["__scopeId", "data-v-0ec212b0"]]), nf = {
  key: 0,
  class: "import-empty"
}, af = { class: "import-help" }, lf = {
  key: 1,
  class: "import-configure"
}, rf = { class: "selected-file-bar" }, df = { class: "file-bar-content" }, cf = { class: "file-bar-info" }, uf = { class: "file-bar-name" }, mf = { class: "file-bar-size" }, vf = { class: "import-actions" }, ff = {
  key: 2,
  class: "import-progress"
}, gf = { class: "progress-content" }, hf = { class: "progress-info" }, pf = { class: "progress-title" }, yf = { class: "progress-detail" }, wf = { class: "progress-bar" }, kf = { class: "progress-status" }, bf = {
  key: 3,
  class: "import-complete"
}, _f = { class: "complete-message" }, $f = { class: "complete-title" }, Cf = { class: "complete-details" }, xf = { class: "complete-actions" }, Sf = /* @__PURE__ */ X({
  __name: "ImportSection",
  setup(t) {
    const c = b(null), n = b(!1), r = b(!1), g = b(!1), y = b(""), h = b({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = b({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), i = b({
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
    }), v = U(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function _(w) {
      c.value = w;
    }
    function d() {
      c.value = null, r.value = !1, g.value = !1, y.value = "";
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
            { message: "Importing workflows...", detail: `Processing ${i.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${i.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${i.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of w)
            m.value = k, await new Promise((M) => setTimeout(M, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), g.value = !0, y.value = `Successfully imported ${i.value.workflows.length} workflows, ${i.value.models.length} models, and ${i.value.nodes.length} custom nodes.`;
        } catch (w) {
          g.value = !1, y.value = w instanceof Error ? w.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function S(w) {
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (w, k) => (o(), x(Ee, null, {
      header: a(() => [
        f(Me, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !c.value && !n.value ? (o(), s("div", nf, [
          f(fv, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: _
          }),
          e("div", af, [
            f(Te, null, {
              default: a(() => [...k[5] || (k[5] = [
                p("How to Import", -1)
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
        ])) : c.value && !n.value && !r.value ? (o(), s("div", lf, [
          e("div", rf, [
            e("div", df, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", cf, [
                e("div", uf, l(c.value.name), 1),
                e("div", mf, l(S(c.value.size)), 1)
              ])
            ]),
            f(Z, {
              variant: "ghost",
              size: "sm",
              onClick: d
            }, {
              default: a(() => [...k[8] || (k[8] = [
                p(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f(jv, {
            "source-environment": i.value.sourceEnvironment,
            workflows: i.value.workflows,
            models: i.value.models,
            nodes: i.value.nodes,
            "git-branch": i.value.gitBranch,
            "git-commit": i.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(sf, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (M) => h.value.conflictMode = M),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (M) => h.value.includeWorkflows = M),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (M) => h.value.includeModels = M),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (M) => h.value.includeNodes = M),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (M) => h.value.includeGitHistory = M)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && i.value.models.length > 0 ? (o(), x(tt, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${i.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : u("", !0),
          e("div", vf, [
            f(Z, {
              variant: "primary",
              size: "md",
              disabled: !v.value,
              onClick: C
            }, {
              default: a(() => [...k[9] || (k[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                p(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            f(Z, {
              variant: "secondary",
              size: "md",
              onClick: d
            }, {
              default: a(() => [...k[10] || (k[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", ff, [
          e("div", gf, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", hf, [
              e("div", pf, l(m.value.message), 1),
              e("div", yf, l(m.value.detail), 1)
            ])
          ]),
          e("div", wf, [
            e("div", {
              class: "progress-bar-fill",
              style: Je({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", kf, l(m.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", bf, [
          e("div", {
            class: ne(["complete-icon", g.value ? "success" : "error"])
          }, l(g.value ? "✓" : "✕"), 3),
          e("div", _f, [
            e("div", $f, l(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Cf, l(y.value), 1)
          ]),
          e("div", xf, [
            f(Z, {
              variant: "primary",
              size: "md",
              onClick: E
            }, {
              default: a(() => [...k[12] || (k[12] = [
                p(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : u("", !0)
      ]),
      _: 1
    }));
  }
}), If = /* @__PURE__ */ Y(Sf, [["__scopeId", "data-v-18e18eb5"]]), Ef = { class: "header-info" }, Mf = { class: "commit-hash" }, zf = {
  key: 0,
  class: "commit-refs"
}, Lf = { class: "commit-message" }, Tf = { class: "commit-date" }, Df = {
  key: 0,
  class: "loading"
}, Rf = {
  key: 1,
  class: "changes-section"
}, Nf = { class: "stats-row" }, Of = { class: "stat" }, Uf = { class: "stat insertions" }, Bf = { class: "stat deletions" }, Pf = {
  key: 0,
  class: "change-group"
}, Vf = {
  key: 1,
  class: "change-group"
}, Ff = {
  key: 0,
  class: "version"
}, Af = {
  key: 2,
  class: "change-group"
}, Wf = { class: "change-item" }, Gf = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Ie(), r = b(null), g = b(!0), y = U(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), h = U(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return be(async () => {
      try {
        r.value = await n(c.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (m, i) => (o(), x(at, {
      size: "md",
      "show-close-button": !1,
      onClose: i[3] || (i[3] = (v) => m.$emit("close"))
    }, {
      header: a(() => {
        var v, _, d, E;
        return [
          e("div", Ef, [
            i[4] || (i[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Mf, l(((v = r.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((_ = t.commit.hash) == null ? void 0 : _.slice(0, 7))), 1),
            (E = (d = r.value) == null ? void 0 : d.refs) != null && E.length ? (o(), s("span", zf, [
              (o(!0), s(G, null, se(r.value.refs, (C) => (o(), s("span", {
                key: C,
                class: "ref-badge"
              }, l(C), 1))), 128))
            ])) : u("", !0)
          ]),
          f(le, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (C) => m.$emit("close"))
          }, {
            default: a(() => [...i[5] || (i[5] = [
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
      body: a(() => {
        var v, _;
        return [
          e("div", Lf, l(((v = r.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", Tf, l(((_ = r.value) == null ? void 0 : _.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), s("div", Df, "Loading details...")) : r.value ? (o(), s("div", Rf, [
            e("div", Nf, [
              e("span", Of, l(r.value.stats.files_changed) + " files", 1),
              e("span", Uf, "+" + l(r.value.stats.insertions), 1),
              e("span", Bf, "-" + l(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), s("div", Pf, [
              f(pt, { variant: "section" }, {
                default: a(() => [...i[6] || (i[6] = [
                  p("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(G, null, se(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                i[7] || (i[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(G, null, se(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                i[8] || (i[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(G, null, se(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                i[9] || (i[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d), 1)
              ]))), 128))
            ])) : u("", !0),
            h.value ? (o(), s("div", Vf, [
              f(pt, { variant: "section" }, {
                default: a(() => [...i[10] || (i[10] = [
                  p("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(G, null, se(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                i[11] || (i[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d.name), 1),
                d.version ? (o(), s("span", Ff, "(" + l(d.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), s(G, null, se(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                i[12] || (i[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d.name), 1)
              ]))), 128))
            ])) : u("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", Af, [
              f(pt, { variant: "section" }, {
                default: a(() => [...i[13] || (i[13] = [
                  p("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Wf, [
                i[14] || (i[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: a(() => [
        f(le, {
          variant: "secondary",
          onClick: i[1] || (i[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...i[15] || (i[15] = [
            p(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(le, {
          variant: "primary",
          onClick: i[2] || (i[2] = (v) => m.$emit("checkout", t.commit))
        }, {
          default: a(() => [...i[16] || (i[16] = [
            p(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), jf = /* @__PURE__ */ Y(Gf, [["__scopeId", "data-v-d256ff6d"]]), Hf = { class: "dialog-message" }, qf = {
  key: 0,
  class: "dialog-details"
}, Kf = {
  key: 1,
  class: "dialog-warning"
}, Jf = /* @__PURE__ */ X({
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
    return (c, n) => (o(), x(at, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => c.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", Hf, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", qf, [
          (o(!0), s(G, null, se(t.details, (r, g) => (o(), s("div", {
            key: g,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : u("", !0),
        t.warning ? (o(), s("p", Kf, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          p(" " + l(t.warning), 1)
        ])) : u("", !0)
      ]),
      footer: a(() => [
        f(le, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => c.$emit("cancel"))
        }, {
          default: a(() => [
            p(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), x(le, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => c.$emit("secondary"))
        }, {
          default: a(() => [
            p(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        f(le, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
        }, {
          default: a(() => [
            p(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Qf = /* @__PURE__ */ Y(Jf, [["__scopeId", "data-v-3670b9f5"]]), Xf = { class: "base-textarea-wrapper" }, Yf = ["value", "rows", "placeholder", "disabled", "maxlength"], Zf = {
  key: 0,
  class: "base-textarea-count"
}, eg = /* @__PURE__ */ X({
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
    return (c, n) => (o(), s("div", Xf, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = je(we((r) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = je(we((r) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Yf),
      t.showCharCount && t.maxLength ? (o(), s("div", Zf, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : u("", !0)
    ]));
  }
}), Ft = /* @__PURE__ */ Y(eg, [["__scopeId", "data-v-5516e6fc"]]), tg = ["checked", "disabled"], og = { class: "base-checkbox-box" }, sg = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, ng = {
  key: 0,
  class: "base-checkbox-label"
}, ag = /* @__PURE__ */ X({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", {
      class: ne(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked))
      }, null, 40, tg),
      e("span", og, [
        t.modelValue ? (o(), s("svg", sg, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : u("", !0)
      ]),
      c.$slots.default ? (o(), s("span", ng, [
        de(c.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ Y(ag, [["__scopeId", "data-v-bf17c831"]]), lg = { class: "popover-header" }, ig = { class: "popover-body" }, rg = {
  key: 0,
  class: "changes-summary"
}, dg = {
  key: 0,
  class: "change-item"
}, cg = {
  key: 1,
  class: "change-item"
}, ug = {
  key: 2,
  class: "change-item"
}, mg = {
  key: 3,
  class: "change-item"
}, vg = {
  key: 4,
  class: "change-item"
}, fg = {
  key: 1,
  class: "no-changes"
}, gg = {
  key: 2,
  class: "loading"
}, hg = {
  key: 3,
  class: "issues-error"
}, pg = { class: "error-header" }, yg = { class: "error-title" }, wg = { class: "issues-list" }, kg = { class: "message-section" }, bg = { class: "popover-footer" }, _g = {
  key: 1,
  class: "commit-popover"
}, $g = { class: "popover-header" }, Cg = { class: "popover-body" }, xg = {
  key: 0,
  class: "changes-summary"
}, Sg = {
  key: 0,
  class: "change-item"
}, Ig = {
  key: 1,
  class: "change-item"
}, Eg = {
  key: 2,
  class: "change-item"
}, Mg = {
  key: 3,
  class: "change-item"
}, zg = {
  key: 4,
  class: "change-item"
}, Lg = {
  key: 1,
  class: "no-changes"
}, Tg = {
  key: 2,
  class: "loading"
}, Dg = {
  key: 3,
  class: "issues-error"
}, Rg = { class: "error-header" }, Ng = { class: "error-title" }, Og = { class: "issues-list" }, Ug = { class: "message-section" }, Bg = { class: "popover-footer" }, Pg = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, r = c, { commit: g } = Ie(), y = b(""), h = b(!1), m = b(!1), i = b(null), v = U(() => {
      if (!n.status) return !1;
      const S = n.status.workflows;
      return S.new.length > 0 || S.modified.length > 0 || S.deleted.length > 0 || n.status.has_changes;
    }), _ = U(() => {
      var S;
      return (S = n.status) != null && S.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (w) => w.has_issues && (w.sync_state === "new" || w.sync_state === "modified")
      ) : [];
    }), d = U(() => _.value.length > 0), E = U(() => d.value && !m.value);
    async function C() {
      var S, w, k;
      if (!(d.value && !m.value) && !(!v.value || !y.value.trim() || h.value)) {
        h.value = !0, i.value = null;
        try {
          const M = await g(y.value.trim(), m.value);
          M.status === "success" ? (i.value = {
            type: "success",
            message: `Committed: ${((S = M.summary) == null ? void 0 : S.new) || 0} new, ${((w = M.summary) == null ? void 0 : w.modified) || 0} modified, ${((k = M.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, y.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : M.status === "no_changes" ? i.value = { type: "error", message: "No changes to commit" } : M.status === "blocked" ? i.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : i.value = { type: "error", message: M.message || "Commit failed" };
        } catch (M) {
          i.value = { type: "error", message: M instanceof Error ? M.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (S, w) => t.asModal ? (o(), x(Se, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: w[5] || (w[5] = (k) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: w[4] || (w[4] = we(() => {
          }, ["stop"]))
        }, [
          e("div", lg, [
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
          e("div", ig, [
            t.status && v.value ? (o(), s("div", rg, [
              t.status.workflows.new.length ? (o(), s("div", dg, [
                w[12] || (w[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : u("", !0),
              t.status.workflows.modified.length ? (o(), s("div", cg, [
                w[13] || (w[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : u("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", ug, [
                w[14] || (w[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", mg, [
                w[15] || (w[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", vg, [
                w[16] || (w[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : u("", !0)
            ])) : t.status ? (o(), s("div", fg, " No changes to commit ")) : (o(), s("div", gg, " Loading... ")),
            d.value ? (o(), s("div", hg, [
              e("div", pg, [
                w[17] || (w[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", yg, l(_.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", wg, [
                (o(!0), s(G, null, se(_.value, (k) => (o(), s("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  p(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              f(At, {
                modelValue: m.value,
                "onUpdate:modelValue": w[1] || (w[1] = (k) => m.value = k),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...w[18] || (w[18] = [
                  p(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : u("", !0),
            e("div", kg, [
              f(Ft, {
                modelValue: y.value,
                "onUpdate:modelValue": w[2] || (w[2] = (k) => y.value = k),
                placeholder: E.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || h.value || E.value,
                rows: 3,
                onCtrlEnter: C
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            i.value ? (o(), s("div", {
              key: 4,
              class: ne(["result", i.value.type])
            }, l(i.value.message), 3)) : u("", !0)
          ]),
          e("div", bg, [
            f(le, {
              variant: "secondary",
              onClick: w[3] || (w[3] = (k) => r("close"))
            }, {
              default: a(() => [...w[19] || (w[19] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(le, {
              variant: m.value ? "danger" : "primary",
              disabled: !v.value || !y.value.trim() || h.value || E.value,
              loading: h.value,
              onClick: C
            }, {
              default: a(() => [
                p(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", _g, [
      e("div", $g, [
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
      e("div", Cg, [
        t.status && v.value ? (o(), s("div", xg, [
          t.status.workflows.new.length ? (o(), s("div", Sg, [
            w[22] || (w[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          t.status.workflows.modified.length ? (o(), s("div", Ig, [
            w[23] || (w[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", Eg, [
            w[24] || (w[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", Mg, [
            w[25] || (w[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", zg, [
            w[26] || (w[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : t.status ? (o(), s("div", Lg, " No changes to commit ")) : (o(), s("div", Tg, " Loading... ")),
        d.value ? (o(), s("div", Dg, [
          e("div", Rg, [
            w[27] || (w[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Ng, l(_.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", Og, [
            (o(!0), s(G, null, se(_.value, (k) => (o(), s("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              p(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          f(At, {
            modelValue: m.value,
            "onUpdate:modelValue": w[7] || (w[7] = (k) => m.value = k),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...w[28] || (w[28] = [
              p(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : u("", !0),
        e("div", Ug, [
          f(Ft, {
            modelValue: y.value,
            "onUpdate:modelValue": w[8] || (w[8] = (k) => y.value = k),
            placeholder: E.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || h.value || E.value,
            rows: 3,
            onCtrlEnter: C
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        i.value ? (o(), s("div", {
          key: 4,
          class: ne(["result", i.value.type])
        }, l(i.value.message), 3)) : u("", !0)
      ]),
      e("div", Bg, [
        f(le, {
          variant: "secondary",
          onClick: w[9] || (w[9] = (k) => r("close"))
        }, {
          default: a(() => [...w[29] || (w[29] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(le, {
          variant: m.value ? "danger" : "primary",
          disabled: !v.value || !y.value.trim() || h.value || E.value,
          loading: h.value,
          onClick: C
        }, {
          default: a(() => [
            p(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Qt = /* @__PURE__ */ Y(Pg, [["__scopeId", "data-v-d92153de"]]), Vg = { class: "modal-header" }, Fg = { class: "modal-body" }, Ag = { class: "switch-message" }, Wg = { class: "switch-details" }, Gg = { class: "modal-actions" }, jg = /* @__PURE__ */ X({
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
          onClick: n[3] || (n[3] = we(() => {
          }, ["stop"]))
        }, [
          e("div", Vg, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Fg, [
            e("p", Ag, [
              n[6] || (n[6] = p(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              n[7] || (n[7] = p(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              n[8] || (n[8] = p("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Wg, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Gg, [
            f(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: a(() => [...n[11] || (n[11] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: a(() => [...n[12] || (n[12] = [
                p(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Hg = /* @__PURE__ */ Y(jg, [["__scopeId", "data-v-e9c5253e"]]), qg = { class: "progress-bar" }, Kg = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = U(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (r, g) => (o(), s("div", qg, [
      e("div", {
        class: ne(["progress-fill", t.variant]),
        style: Je({ width: n.value })
      }, null, 6)
    ]));
  }
}), Jg = /* @__PURE__ */ Y(Kg, [["__scopeId", "data-v-1beb0512"]]), Qg = {
  key: 0,
  class: "modal-overlay"
}, Xg = { class: "modal-content" }, Yg = { class: "modal-body" }, Zg = { class: "progress-info" }, eh = { class: "progress-percentage" }, th = { class: "progress-state" }, oh = { class: "switch-steps" }, sh = { class: "step-icon" }, nh = { class: "step-label" }, ah = /* @__PURE__ */ X({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = U(() => {
      const y = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return c.message || y[c.state] || c.state;
    }), r = U(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), g = U(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = y.findIndex((m) => m.state === c.state);
      return y.map((m, i) => {
        let v = "pending", _ = "○";
        return i < h ? (v = "completed", _ = "✓") : i === h && (v = "active", _ = "⟳"), {
          ...m,
          status: v,
          icon: _
        };
      });
    });
    return (y, h) => (o(), x(Se, { to: "body" }, [
      t.show ? (o(), s("div", Qg, [
        e("div", Xg, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Yg, [
            f(Jg, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Zg, [
              e("div", eh, l(t.progress) + "%", 1),
              e("div", th, l(n.value), 1)
            ]),
            e("div", oh, [
              (o(!0), s(G, null, se(g.value, (m) => (o(), s("div", {
                key: m.state,
                class: ne(["switch-step", m.status])
              }, [
                e("span", sh, l(m.icon), 1),
                e("span", nh, l(m.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), lh = /* @__PURE__ */ Y(ah, [["__scopeId", "data-v-768a5078"]]), ih = { class: "modal-header" }, rh = { class: "modal-body" }, dh = {
  key: 0,
  class: "node-section"
}, ch = { class: "node-list" }, uh = {
  key: 1,
  class: "node-section"
}, mh = { class: "node-list" }, vh = { class: "modal-actions" }, fh = /* @__PURE__ */ X({
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
          onClick: n[3] || (n[3] = we(() => {
          }, ["stop"]))
        }, [
          e("div", ih, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", rh, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", dh, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", ch, [
                (o(!0), s(G, null, se(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : u("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", uh, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", mh, [
                (o(!0), s(G, null, se(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + l(r), 1))), 128))
              ])
            ])) : u("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", vh, [
            f(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: a(() => [...n[10] || (n[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: a(() => [...n[11] || (n[11] = [
                p(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), gh = /* @__PURE__ */ Y(fh, [["__scopeId", "data-v-7cad7518"]]);
async function vt(t, c = {}, n = 5e3) {
  const r = new AbortController(), g = setTimeout(() => r.abort(), n);
  try {
    const y = await fetch(t, {
      ...c,
      signal: r.signal
    });
    return clearTimeout(g), y;
  } catch (y) {
    throw clearTimeout(g), y.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : y;
  }
}
function hh() {
  const t = b(null);
  async function c() {
    try {
      const h = await vt(
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
      const h = await vt(
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
      const h = await vt(
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
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await vt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await vt(
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
    restart: g,
    kill: y
  };
}
const ph = { class: "comfygit-panel" }, yh = { class: "panel-header" }, wh = { class: "header-left" }, kh = {
  key: 0,
  class: "header-info"
}, bh = { class: "header-actions" }, _h = { class: "env-switcher" }, $h = {
  key: 0,
  class: "header-info"
}, Ch = { class: "branch-name" }, xh = { class: "panel-main" }, Sh = { class: "sidebar" }, Ih = { class: "sidebar-section" }, Eh = { class: "sidebar-section" }, Mh = { class: "sidebar-section" }, zh = { class: "content-area" }, Lh = {
  key: 0,
  class: "error-message"
}, Th = {
  key: 1,
  class: "loading"
}, Dh = { class: "dialog-content env-selector-dialog" }, Rh = { class: "dialog-header" }, Nh = { class: "dialog-body" }, Oh = { class: "env-list" }, Uh = { class: "env-info" }, Bh = { class: "env-name-row" }, Ph = { class: "env-indicator" }, Vh = { class: "env-name" }, Fh = {
  key: 0,
  class: "env-branch"
}, Ah = {
  key: 1,
  class: "current-label"
}, Wh = { class: "env-stats" }, Gh = ["onClick"], jh = { class: "toast-container" }, Hh = { class: "toast-icon" }, qh = { class: "toast-message" }, Kh = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = c, {
      getStatus: r,
      getHistory: g,
      getBranches: y,
      checkout: h,
      createBranch: m,
      switchBranch: i,
      getEnvironments: v,
      switchEnvironment: _,
      getSwitchProgress: d,
      syncEnvironmentManually: E
    } = Ie(), C = hh(), S = b(null), w = b([]), k = b([]), M = b([]), N = U(() => M.value.find((q) => q.is_current)), R = b(!1), D = b(null), j = b(null), z = b(!1), T = b(null), B = b(!1), I = b(!1), $ = b(""), P = b({ state: "idle", progress: 0, message: "" });
    let A = null, ee = null;
    const te = b("status"), W = b("this-env");
    function K(q, L) {
      te.value = q, W.value = L;
    }
    function V(q) {
      const ce = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[q];
      ce && K(ce.view, ce.section);
    }
    function O() {
      K("branches", "this-env");
    }
    function ae() {
      n("close"), setTimeout(() => {
        var L;
        const q = document.querySelectorAll("button.comfyui-button");
        for (const ce of q)
          if (((L = ce.textContent) == null ? void 0 : L.trim()) === "Manager") {
            ce.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const J = b(null), $e = b(!1), ge = b(!1), Re = b([]);
    let rt = 0;
    function fe(q, L = "info", ce = 3e3) {
      const ye = ++rt;
      return Re.value.push({ id: ye, message: q, type: L }), ce > 0 && setTimeout(() => {
        Re.value = Re.value.filter((Ne) => Ne.id !== ye);
      }, ce), ye;
    }
    function De(q) {
      Re.value = Re.value.filter((L) => L.id !== q);
    }
    function dt(q) {
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
    const Qe = U(() => {
      if (!S.value) return "neutral";
      const q = S.value.workflows, L = q.new.length > 0 || q.modified.length > 0 || q.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? L ? "warning" : "success" : "error";
    });
    U(() => S.value ? Qe.value === "success" ? "All synced" : Qe.value === "warning" ? "Uncommitted changes" : Qe.value === "error" ? "Not synced" : "" : "");
    async function ze() {
      R.value = !0, D.value = null;
      try {
        const [q, L, ce, ye] = await Promise.all([
          r(!0),
          g(),
          y(),
          v()
        ]);
        S.value = q, w.value = L.commits, k.value = ce.branches, M.value = ye, n("statusUpdate", q), T.value && await T.value.loadWorkflows(!0);
      } catch (q) {
        D.value = q instanceof Error ? q.message : "Failed to load status", S.value = null, w.value = [], k.value = [];
      } finally {
        R.value = !1;
      }
    }
    function ct(q) {
      j.value = q;
    }
    async function et(q) {
      var ce;
      j.value = null;
      const L = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      J.value = {
        title: L ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: L ? "You have uncommitted changes that will be lost." : `Checkout commit ${q.short_hash || ((ce = q.hash) == null ? void 0 : ce.slice(0, 7))}?`,
        details: L ? Pt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: L,
        onConfirm: async () => {
          var Oe;
          J.value = null, ve();
          const ye = fe(`Checking out ${q.short_hash || ((Oe = q.hash) == null ? void 0 : Oe.slice(0, 7))}...`, "info", 0), Ne = await h(q.hash, L);
          De(ye), Ne.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Ne.message || "Checkout failed", "error");
        }
      };
    }
    async function ut(q) {
      const L = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      J.value = {
        title: L ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: L ? "You have uncommitted changes." : `Switch to branch "${q}"?`,
        details: L ? Pt() : void 0,
        warning: L ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          J.value = null, ve();
          const ce = fe(`Switching to ${q}...`, "info", 0), ye = await i(q, L);
          De(ce), ye.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function Q(q) {
      const L = fe(`Creating branch ${q}...`, "info", 0), ce = await m(q);
      De(L), ce.status === "success" ? (fe(`Branch "${q}" created`, "success"), await ze()) : fe(ce.message || "Failed to create branch", "error");
    }
    async function ie(q) {
      j.value = null;
      const L = prompt("Enter branch name:");
      if (L) {
        const ce = fe(`Creating branch ${L}...`, "info", 0), ye = await m(L, q.hash);
        De(ce), ye.status === "success" ? (fe(`Branch "${L}" created from ${q.short_hash}`, "success"), await ze()) : fe(ye.message || "Failed to create branch", "error");
      }
    }
    function ve() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ce(q) {
      z.value = !1, $.value = q, B.value = !0;
    }
    async function H() {
      B.value = !1, I.value = !0, ve(), P.value = {
        progress: 10,
        state: F(10),
        message: oe(10)
      };
      try {
        await _($.value), he(), Xe();
      } catch (q) {
        _e(), I.value = !1, fe(`Failed to initiate switch: ${q instanceof Error ? q.message : "Unknown error"}`, "error"), P.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function F(q) {
      return q >= 100 ? "complete" : q >= 80 ? "validating" : q >= 60 ? "starting" : q >= 30 ? "syncing" : "preparing";
    }
    function oe(q) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[F(q)] || "";
    }
    function he() {
      if (ee) return;
      let q = 10;
      const L = 60, ce = 5e3, ye = 100, Ne = (L - q) / (ce / ye);
      ee = window.setInterval(() => {
        if (q += Ne, q >= L && (q = L, _e()), P.value.progress < L) {
          const Oe = Math.floor(q);
          P.value = {
            progress: Oe,
            state: F(Oe),
            message: oe(Oe)
          };
        }
      }, ye);
    }
    function _e() {
      ee && (clearInterval(ee), ee = null);
    }
    function Xe() {
      A || (A = window.setInterval(async () => {
        try {
          let q = await C.getStatus();
          if ((!q || q.state === "idle") && (q = await d()), !q)
            return;
          const L = q.progress || 0;
          L >= 60 && _e();
          const ce = Math.max(L, P.value.progress), ye = q.state && q.state !== "idle" && q.state !== "unknown", Ne = ye ? q.state : F(ce), Oe = ye && q.message || oe(ce);
          P.value = {
            state: Ne,
            progress: ce,
            message: Oe
          }, q.state === "complete" ? (_e(), Ae(), I.value = !1, fe(`✓ Switched to ${$.value}`, "success"), await ze(), $.value = "") : q.state === "rolled_back" ? (_e(), Ae(), I.value = !1, fe("Switch failed, restored previous environment", "warning"), $.value = "") : q.state === "critical_failure" && (_e(), Ae(), I.value = !1, fe(`Critical error during switch: ${q.message}`, "error"), $.value = "");
        } catch (q) {
          console.error("Failed to poll switch progress:", q);
        }
      }, 1e3));
    }
    function Ae() {
      _e(), A && (clearInterval(A), A = null);
    }
    function _t() {
      B.value = !1, $.value = "";
    }
    async function $t() {
      $e.value = !1, await ze(), fe("✓ Changes committed", "success");
    }
    async function Ct() {
      ge.value = !1;
      const q = fe("Syncing environment...", "info", 0);
      try {
        const L = await E("skip", !0);
        if (De(q), L.status === "success") {
          const ce = [];
          L.nodes_installed.length && ce.push(`${L.nodes_installed.length} installed`), L.nodes_removed.length && ce.push(`${L.nodes_removed.length} removed`);
          const ye = ce.length ? `: ${ce.join(", ")}` : "";
          fe(`✓ Environment synced${ye}`, "success"), await ze();
        } else {
          const ce = L.errors.length ? L.errors.join("; ") : L.message;
          fe(`Sync failed: ${ce}`, "error");
        }
      } catch (L) {
        De(q), fe(`Sync error: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
      }
    }
    async function to(q) {
      const L = fe(`Creating environment "${q}"...`, "info", 0);
      De(L), fe("Environment creation not yet implemented", "warning");
    }
    async function oo(q) {
      const L = fe(`Deleting environment "${q}"...`, "info", 0);
      De(L), fe("Environment deletion not yet implemented", "warning");
    }
    function so(q) {
      fe(`Viewing details for "${q}"`, "info"), K("models-env", "this-env");
    }
    function Pt() {
      if (!S.value) return [];
      const q = [], L = S.value.workflows;
      return L.new.length && q.push(`${L.new.length} new workflow(s)`), L.modified.length && q.push(`${L.modified.length} modified workflow(s)`), L.deleted.length && q.push(`${L.deleted.length} deleted workflow(s)`), q;
    }
    return be(ze), (q, L) => {
      var ce, ye, Ne, Oe;
      return o(), s("div", ph, [
        e("div", yh, [
          e("div", wh, [
            L[27] || (L[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (o(), s("div", kh)) : u("", !0)
          ]),
          e("div", bh, [
            e("button", {
              class: ne(["icon-btn", { spinning: R.value }]),
              onClick: ze,
              title: "Refresh"
            }, [...L[28] || (L[28] = [
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
              onClick: L[0] || (L[0] = (re) => n("close")),
              title: "Close"
            }, [...L[29] || (L[29] = [
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
        e("div", _h, [
          L[31] || (L[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: L[1] || (L[1] = (re) => K("environments", "all-envs"))
          }, [
            S.value ? (o(), s("div", $h, [
              e("span", null, l(((ce = N.value) == null ? void 0 : ce.name) || ((ye = S.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", Ch, "(" + l(S.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            L[30] || (L[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", xh, [
          e("div", Sh, [
            e("div", Ih, [
              L[32] || (L[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "status" && W.value === "this-env" }]),
                onClick: L[2] || (L[2] = (re) => K("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "workflows" }]),
                onClick: L[3] || (L[3] = (re) => K("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "models-env" }]),
                onClick: L[4] || (L[4] = (re) => K("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "branches" }]),
                onClick: L[5] || (L[5] = (re) => K("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "history" }]),
                onClick: L[6] || (L[6] = (re) => K("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "nodes" }]),
                onClick: L[7] || (L[7] = (re) => K("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "debug-env" }]),
                onClick: L[8] || (L[8] = (re) => K("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            L[35] || (L[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Eh, [
              L[33] || (L[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "environments" }]),
                onClick: L[9] || (L[9] = (re) => K("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "model-index" }]),
                onClick: L[10] || (L[10] = (re) => K("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "settings" }]),
                onClick: L[11] || (L[11] = (re) => K("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "debug-workspace" }]),
                onClick: L[12] || (L[12] = (re) => K("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            L[36] || (L[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Mh, [
              L[34] || (L[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "export" }]),
                onClick: L[13] || (L[13] = (re) => K("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "import" }]),
                onClick: L[14] || (L[14] = (re) => K("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: te.value === "remotes" }]),
                onClick: L[15] || (L[15] = (re) => K("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", zh, [
            D.value ? (o(), s("div", Lh, l(D.value), 1)) : !S.value && te.value === "status" ? (o(), s("div", Th, " Loading status... ")) : (o(), s(G, { key: 2 }, [
              te.value === "status" ? (o(), x(On, {
                key: 0,
                status: S.value,
                onSwitchBranch: O,
                onCommitChanges: L[16] || (L[16] = (re) => $e.value = !0),
                onSyncEnvironment: L[17] || (L[17] = (re) => ge.value = !0),
                onViewWorkflows: L[18] || (L[18] = (re) => K("workflows", "this-env")),
                onViewHistory: L[19] || (L[19] = (re) => K("history", "this-env")),
                onViewDebug: L[20] || (L[20] = (re) => K("debug-env", "this-env"))
              }, null, 8, ["status"])) : te.value === "workflows" ? (o(), x(ic, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: T,
                onRefresh: ze
              }, null, 512)) : te.value === "models-env" ? (o(), x(Wc, {
                key: 2,
                onNavigate: V
              })) : te.value === "branches" ? (o(), x(Xn, {
                key: 3,
                branches: k.value,
                current: ((Ne = S.value) == null ? void 0 : Ne.branch) || null,
                onSwitch: ut,
                onCreate: Q
              }, null, 8, ["branches", "current"])) : te.value === "history" ? (o(), x(ra, {
                key: 4,
                commits: w.value,
                onSelect: ct,
                onCheckout: et
              }, null, 8, ["commits"])) : te.value === "nodes" ? (o(), x(Lu, {
                key: 5,
                onOpenNodeManager: ae
              })) : te.value === "debug-env" ? (o(), x(zm, { key: 6 })) : te.value === "environments" ? (o(), x(Am, {
                key: 7,
                onSwitch: Ce,
                onCreate: to,
                onDelete: oo,
                onViewDetails: so
              })) : te.value === "model-index" ? (o(), x(du, {
                key: 8,
                onRefresh: ze
              })) : te.value === "settings" ? (o(), x(Sm, { key: 9 })) : te.value === "debug-workspace" ? (o(), x(Em, { key: 10 })) : te.value === "export" ? (o(), x(Ym, { key: 11 })) : te.value === "import" ? (o(), x(If, { key: 12 })) : te.value === "remotes" ? (o(), x(im, { key: 13 })) : u("", !0)
            ], 64))
          ])
        ]),
        j.value ? (o(), x(jf, {
          key: 0,
          commit: j.value,
          onClose: L[21] || (L[21] = (re) => j.value = null),
          onCheckout: et,
          onCreateBranch: ie
        }, null, 8, ["commit"])) : u("", !0),
        J.value ? (o(), x(Qf, {
          key: 1,
          title: J.value.title,
          message: J.value.message,
          details: J.value.details,
          warning: J.value.warning,
          confirmLabel: J.value.confirmLabel,
          cancelLabel: J.value.cancelLabel,
          secondaryLabel: J.value.secondaryLabel,
          secondaryAction: J.value.secondaryAction,
          destructive: J.value.destructive,
          onConfirm: J.value.onConfirm,
          onCancel: L[22] || (L[22] = (re) => J.value = null),
          onSecondary: J.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        f(Hg, {
          show: B.value,
          "from-environment": ((Oe = N.value) == null ? void 0 : Oe.name) || "unknown",
          "to-environment": $.value,
          onConfirm: H,
          onClose: _t
        }, null, 8, ["show", "from-environment", "to-environment"]),
        $e.value && S.value ? (o(), x(Qt, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: L[23] || (L[23] = (re) => $e.value = !1),
          onCommitted: $t
        }, null, 8, ["status"])) : u("", !0),
        ge.value && S.value ? (o(), x(gh, {
          key: 3,
          show: ge.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: Ct,
          onClose: L[24] || (L[24] = (re) => ge.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : u("", !0),
        f(lh, {
          show: I.value,
          state: P.value.state,
          progress: P.value.progress,
          message: P.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        z.value ? (o(), s("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: L[26] || (L[26] = we((re) => z.value = !1, ["self"]))
        }, [
          e("div", Dh, [
            e("div", Rh, [
              L[38] || (L[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: L[25] || (L[25] = (re) => z.value = !1)
              }, [...L[37] || (L[37] = [
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
            e("div", Nh, [
              L[39] || (L[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Oh, [
                (o(!0), s(G, null, se(M.value, (re) => (o(), s("div", {
                  key: re.name,
                  class: ne(["env-item", { current: re.is_current }])
                }, [
                  e("div", Uh, [
                    e("div", Bh, [
                      e("span", Ph, l(re.is_current ? "●" : "○"), 1),
                      e("span", Vh, l(re.name), 1),
                      re.current_branch ? (o(), s("span", Fh, "(" + l(re.current_branch) + ")", 1)) : u("", !0),
                      re.is_current ? (o(), s("span", Ah, "CURRENT")) : u("", !0)
                    ]),
                    e("div", Wh, l(re.workflow_count) + " workflows • " + l(re.node_count) + " nodes ", 1)
                  ]),
                  re.is_current ? u("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (t1) => Ce(re.name)
                  }, " SWITCH ", 8, Gh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        e("div", jh, [
          f(uo, { name: "toast" }, {
            default: a(() => [
              (o(!0), s(G, null, se(Re.value, (re) => (o(), s("div", {
                key: re.id,
                class: ne(["toast", re.type])
              }, [
                e("span", Hh, l(dt(re.type)), 1),
                e("span", qh, l(re.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Jh = /* @__PURE__ */ Y(Kh, [["__scopeId", "data-v-99b7a544"]]), Qh = { class: "item-header" }, Xh = { class: "item-info" }, Yh = { class: "filename" }, Zh = { class: "metadata" }, ep = { class: "size" }, tp = {
  key: 0,
  class: "type"
}, op = { class: "item-actions" }, sp = {
  key: 0,
  class: "progress-section"
}, np = { class: "progress-bar" }, ap = { class: "progress-stats" }, lp = { class: "downloaded" }, ip = { class: "speed" }, rp = {
  key: 0,
  class: "eta"
}, dp = {
  key: 1,
  class: "status-msg paused"
}, cp = {
  key: 2,
  class: "status-msg queued"
}, up = {
  key: 3,
  class: "status-msg completed"
}, mp = {
  key: 4,
  class: "status-msg failed"
}, vp = {
  key: 0,
  class: "retries"
}, fp = /* @__PURE__ */ X({
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
    function g(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const m = Math.floor(h / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (h, m) => (o(), s("div", {
      class: ne(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Qh, [
        e("div", Xh, [
          e("div", Yh, l(t.item.filename), 1),
          e("div", Zh, [
            e("span", ep, l(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", tp, l(t.item.type), 1)) : u("", !0)
          ])
        ]),
        e("div", op, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (i) => n("cancel")),
            title: "Cancel"
          }, " × ")) : u("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (i) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : u("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (i) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : u("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (i) => n("remove")),
            title: "Remove"
          }, " × ")) : u("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", sp, [
        e("div", np, [
          e("div", {
            class: "progress-fill",
            style: Je({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", ap, [
          e("span", lp, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", ip, l(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", rp, l(y(t.item.eta)), 1)) : u("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", dp, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", cp, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", up, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", mp, [
        p(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", vp, "(" + l(t.item.retries) + " retries)", 1)) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), ft = /* @__PURE__ */ Y(fp, [["__scopeId", "data-v-2110df65"]]), gp = { class: "queue-title" }, hp = { class: "count" }, pp = { class: "queue-actions" }, yp = { class: "action-label" }, wp = {
  key: 0,
  class: "overall-progress"
}, kp = { class: "progress-bar" }, bp = {
  key: 0,
  class: "current-mini"
}, _p = { class: "filename" }, $p = { class: "speed" }, Cp = {
  key: 1,
  class: "queue-content"
}, xp = {
  key: 0,
  class: "section"
}, Sp = {
  key: 1,
  class: "section"
}, Ip = { class: "section-header" }, Ep = { class: "section-label paused" }, Mp = { class: "items-list" }, zp = {
  key: 2,
  class: "section"
}, Lp = { class: "section-header" }, Tp = { class: "section-label" }, Dp = { class: "items-list" }, Rp = {
  key: 3,
  class: "section"
}, Np = { class: "section-header" }, Op = { class: "section-label" }, Up = { class: "items-list" }, Bp = {
  key: 4,
  class: "section"
}, Pp = { class: "section-header" }, Vp = { class: "section-label failed" }, Fp = { class: "items-list" }, Ap = /* @__PURE__ */ X({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: r,
      completedItems: g,
      failedItems: y,
      pausedItems: h,
      hasItems: m,
      activeCount: i,
      cancelDownload: v,
      retryDownload: _,
      resumeDownload: d,
      resumeAllPaused: E,
      removeItem: C,
      clearCompleted: S
    } = bt(), w = b(!1);
    let k = null;
    Tt(
      () => ({
        active: i.value,
        failed: y.value.length,
        paused: h.value.length,
        completed: g.value.length
      }),
      (D, j) => {
        k && (clearTimeout(k), k = null);
        const z = D.active === 0 && D.failed === 0 && D.paused === 0 && D.completed > 0, T = j && (j.active > 0 || j.paused > 0);
        z && T && (k = setTimeout(() => {
          S(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const M = U(() => {
      var z;
      if (c.items.length === 0) return 0;
      const D = g.value.length, j = ((z = n.value) == null ? void 0 : z.progress) || 0;
      return Math.round((D + j / 100) / c.items.length * 100);
    });
    function N(D) {
      v(D);
    }
    function R(D) {
      return D === 0 ? "" : `${(D / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (D, j) => (o(), x(Se, { to: "body" }, [
      ue(m) ? (o(), s("div", {
        key: 0,
        class: ne(["model-download-queue", { minimized: !w.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: j[0] || (j[0] = (z) => w.value = !w.value)
        }, [
          e("div", gp, [
            j[4] || (j[4] = e("span", { class: "icon" }, "↓", -1)),
            j[5] || (j[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", hp, "(" + l(ue(i)) + "/" + l(ue(c).items.length) + ")", 1)
          ]),
          e("div", pp, [
            e("span", yp, l(w.value ? "minimize" : "expand"), 1)
          ])
        ]),
        w.value ? (o(), s("div", Cp, [
          ue(n) ? (o(), s("div", xp, [
            j[6] || (j[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(ft, {
              item: ue(n),
              onCancel: j[1] || (j[1] = (z) => N(ue(n).id))
            }, null, 8, ["item"])
          ])) : u("", !0),
          ue(h).length > 0 ? (o(), s("div", Sp, [
            e("div", Ip, [
              e("span", Ep, "Paused (" + l(ue(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: j[2] || (j[2] = //@ts-ignore
                (...z) => ue(E) && ue(E)(...z))
              }, "Resume All")
            ]),
            e("div", Mp, [
              (o(!0), s(G, null, se(ue(h), (z) => (o(), x(ft, {
                key: z.id,
                item: z,
                onResume: (T) => ue(d)(z.id),
                onRemove: (T) => ue(C)(z.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          ue(r).length > 0 ? (o(), s("div", zp, [
            e("div", Lp, [
              e("span", Tp, "Queued (" + l(ue(r).length) + ")", 1)
            ]),
            e("div", Dp, [
              (o(!0), s(G, null, se(ue(r), (z) => (o(), x(ft, {
                key: z.id,
                item: z,
                onCancel: (T) => N(z.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : u("", !0),
          ue(g).length > 0 ? (o(), s("div", Rp, [
            e("div", Np, [
              e("span", Op, "Completed (" + l(ue(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: j[3] || (j[3] = //@ts-ignore
                (...z) => ue(S) && ue(S)(...z))
              }, "Clear")
            ]),
            e("div", Up, [
              (o(!0), s(G, null, se(ue(g).slice(0, 3), (z) => (o(), x(ft, {
                key: z.id,
                item: z,
                onRemove: (T) => ue(C)(z.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          ue(y).length > 0 ? (o(), s("div", Bp, [
            e("div", Pp, [
              e("span", Vp, "Failed (" + l(ue(y).length) + ")", 1)
            ]),
            e("div", Fp, [
              (o(!0), s(G, null, se(ue(y), (z) => (o(), x(ft, {
                key: z.id,
                item: z,
                onRetry: (T) => ue(_)(z.id),
                onRemove: (T) => ue(C)(z.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : u("", !0)
        ])) : (o(), s("div", wp, [
          e("div", kp, [
            e("div", {
              class: "progress-fill",
              style: Je({ width: `${M.value}%` })
            }, null, 4)
          ]),
          ue(n) ? (o(), s("div", bp, [
            e("span", _p, l(ue(n).filename), 1),
            e("span", $p, l(R(ue(n).speed)), 1)
          ])) : u("", !0)
        ]))
      ], 2)) : u("", !0)
    ]));
  }
}), Wp = /* @__PURE__ */ Y(Ap, [["__scopeId", "data-v-60751cfa"]]), Gp = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', jp = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Hp = {
  comfy: Gp,
  phosphor: jp
}, Ut = "comfy", Xt = "comfygit-theme";
let Ye = null, Yt = Ut;
function qp() {
  try {
    const t = localStorage.getItem(Xt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Ut;
}
function Zt(t = Ut) {
  Ye && Ye.remove(), Ye = document.createElement("style"), Ye.id = "comfygit-theme-styles", Ye.setAttribute("data-theme", t), Ye.textContent = Hp[t], document.head.appendChild(Ye), document.body.setAttribute("data-comfygit-theme", t), Yt = t;
  try {
    localStorage.setItem(Xt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Kp() {
  return Yt;
}
function Jp(t) {
  Zt(t);
}
const Bt = document.createElement("link");
Bt.rel = "stylesheet";
Bt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Bt);
const Qp = qp();
Zt(Qp);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Jp(t);
  },
  getTheme: () => {
    const t = Kp();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ue = null, Le = null, yt = null, gt = null, Wt = null;
const nt = b(null);
async function xt() {
  var t;
  if (!((t = st) != null && t.api)) return null;
  try {
    const c = await st.api.fetchApi("/v2/comfygit/status");
    c.ok && (nt.value = await c.json());
  } catch {
  }
}
function Xp() {
  if (!nt.value) return !1;
  const t = nt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || nt.value.has_changes;
}
function Yp() {
  Ue && Ue.remove(), Ue = document.createElement("div"), Ue.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ue.appendChild(t), Ue.addEventListener("click", (r) => {
    r.target === Ue && Et();
  });
  const c = (r) => {
    r.key === "Escape" && (Et(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), Rt({
    render: () => Nt(Jh, {
      onClose: Et,
      onStatusUpdate: (r) => {
        nt.value = r, wt();
      }
    })
  }).mount(t), document.body.appendChild(Ue);
}
function Et() {
  Ue && (Ue.remove(), Ue = null);
}
function Zp(t) {
  ht(), Le = document.createElement("div"), Le.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Le.style.position = "fixed", Le.style.top = `${c.bottom + 8}px`, Le.style.right = `${window.innerWidth - c.right}px`, Le.style.zIndex = "10001";
  const n = (g) => {
    Le && !Le.contains(g.target) && g.target !== t && (ht(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (g) => {
    g.key === "Escape" && (ht(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), yt = Rt({
    render: () => Nt(Qt, {
      status: nt.value,
      onClose: ht,
      onCommitted: () => {
        ht(), xt().then(wt);
      }
    })
  }), yt.mount(Le), document.body.appendChild(Le);
}
function ht() {
  yt && (yt.unmount(), yt = null), Le && (Le.remove(), Le = null);
}
function e1() {
  gt || (gt = document.createElement("div"), gt.className = "comfygit-download-queue-root", Wt = Rt({
    render: () => Nt(Wp)
  }), Wt.mount(gt), document.body.appendChild(gt), console.log("[ComfyGit] Model download queue mounted"));
}
let We = null;
function wt() {
  if (!We) return;
  const t = We.querySelector(".commit-indicator");
  t && (t.style.display = Xp() ? "block" : "none");
}
const eo = document.createElement("style");
eo.textContent = `
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
document.head.appendChild(eo);
st.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Yp, We = document.createElement("button"), We.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", We.innerHTML = 'Commit <span class="commit-indicator"></span>', We.title = "Quick Commit", We.onclick = () => Zp(We), t.appendChild(c), t.appendChild(We), (y = (g = st.menu) == null ? void 0 : g.settingsGroup) != null && y.element && (st.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), e1();
    const { loadPendingDownloads: n } = bt();
    n(), await xt(), wt(), setInterval(async () => {
      await xt(), wt();
    }, 3e4);
    const r = st.api;
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
        const _ = document.createElement("span");
        _.textContent = "Workflows updated - refresh required", v.appendChild(_);
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
        const { change_type: _, workflow_name: d } = v.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${d}`), await xt(), wt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let i = !1;
      r.addEventListener("status", async (v) => {
        const _ = v.detail != null;
        _ && !i && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : m()), i = _;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
