import { app as tt } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as s, openBlock as o, createCommentVNode as u, createElementVNode as e, renderSlot as re, createBlock as E, resolveDynamicComponent as It, normalizeClass as se, withCtx as a, toDisplayString as l, createVNode as v, createTextVNode as p, computed as B, Fragment as j, renderList as oe, normalizeStyle as qe, ref as C, onMounted as we, watch as Et, Teleport as _e, withModifiers as pe, Transition as no, createSlots as Mt, withKeys as We, onUnmounted as ao, reactive as Vt, readonly as lo, unref as ce, withDirectives as io, vModelText as ro, resolveComponent as co, TransitionGroup as uo, createApp as zt, h as Lt } from "vue";
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
    return (d, n) => (o(), s("div", mo, [
      d.$slots.header ? (o(), s("div", vo, [
        re(d.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      d.$slots.search ? (o(), s("div", fo, [
        re(d.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      e("div", go, [
        re(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), s("div", ho, [
        re(d.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), Y = (t, d) => {
  const n = t.__vccOpts || t;
  for (const [r, f] of d)
    n[r] = f;
  return n;
}, Ce = /* @__PURE__ */ Y(po, [["__scopeId", "data-v-21565df9"]]), yo = {
  key: 0,
  class: "panel-title-prefix"
}, wo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, bo = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, n) => (o(), E(It(`h${t.level}`), {
      class: se(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), s("span", yo, l(t.prefix), 1)) : (o(), s("span", wo)),
        re(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ko = /* @__PURE__ */ Y(bo, [["__scopeId", "data-v-c3875efc"]]), _o = ["title"], $o = ["width", "height"], Co = /* @__PURE__ */ X({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (d, n) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => d.$emit("click"))
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
}), Ft = /* @__PURE__ */ Y(Co, [["__scopeId", "data-v-6fc7f16d"]]), xo = { class: "header-left" }, So = {
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
    return (d, n) => (o(), s("div", {
      class: se(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", xo, [
        v(ko, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            p(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), E(Ft, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => d.$emit("info-click"))
        })) : u("", !0)
      ]),
      d.$slots.actions ? (o(), s("div", So, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ Y(Io, [["__scopeId", "data-v-55a62cd6"]]), Eo = {
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
    return (d, n) => (o(), E(It(`h${t.level}`), {
      class: se(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Eo, "(" + l(t.count) + ")", 1)) : u("", !0),
        t.clickable ? (o(), s("span", Mo, l(t.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ee = /* @__PURE__ */ Y(zo, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, To = { class: "status-grid__columns" }, Do = { class: "status-grid__column" }, Ro = { class: "status-grid__title" }, No = { class: "status-grid__column status-grid__column--right" }, Oo = { class: "status-grid__title" }, Uo = {
  key: 0,
  class: "status-grid__footer"
}, Bo = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, n) => (o(), s("div", Lo, [
      e("div", To, [
        e("div", Do, [
          e("h4", Ro, l(t.leftTitle), 1),
          re(d.$slots, "left", {}, void 0, !0)
        ]),
        e("div", No, [
          e("h4", Oo, l(t.rightTitle), 1),
          re(d.$slots, "right", {}, void 0, !0)
        ])
      ]),
      d.$slots.footer ? (o(), s("div", Uo, [
        re(d.$slots, "footer", {}, void 0, !0)
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
    const d = t, n = B(() => `status-item--${d.variant}`);
    return (r, f) => (o(), s("div", {
      class: se(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", Vo, l(t.icon), 1)) : u("", !0),
      t.count !== void 0 ? (o(), s("span", Fo, l(t.count), 1)) : u("", !0),
      e("span", Ao, l(t.label), 1)
    ], 2));
  }
}), Pe = /* @__PURE__ */ Y(Wo, [["__scopeId", "data-v-6f929183"]]), Go = { class: "issue-card__header" }, jo = { class: "issue-card__icon" }, Ho = { class: "issue-card__title" }, qo = {
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
    const d = t, n = B(() => `issue-card--${d.severity}`);
    return (r, f) => (o(), s("div", {
      class: se(["issue-card", n.value])
    }, [
      e("div", Go, [
        e("span", jo, l(t.icon), 1),
        e("h4", Ho, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", qo, [
        t.description ? (o(), s("p", Ko, l(t.description), 1)) : u("", !0),
        re(r.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      t.items && t.items.length ? (o(), s("div", Jo, [
        (o(!0), s(j, null, oe(t.items, (y, h) => (o(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : u("", !0),
      r.$slots.actions ? (o(), s("div", Qo, [
        re(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ Y(Xo, [["__scopeId", "data-v-df6aa348"]]), Yo = ["type", "disabled"], Zo = {
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
    return (d, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: se(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Zo)) : u("", !0),
      t.loading ? u("", !0) : re(d.$slots, "default", { key: 1 }, void 0, !0)
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
    return (d, n) => (o(), s("div", ts, [
      t.icon ? (o(), s("div", os, l(t.icon), 1)) : u("", !0),
      e("p", ss, l(t.message), 1),
      t.actionLabel ? (o(), E(Z, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => d.$emit("action"))
      }, {
        default: a(() => [
          p(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Ne = /* @__PURE__ */ Y(ns, [["__scopeId", "data-v-4466284f"]]), as = /* @__PURE__ */ X({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, n) => (o(), s("span", {
      class: se(["detail-label"]),
      style: qe({ minWidth: t.minWidth })
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ Y(as, [["__scopeId", "data-v-75e9eeb8"]]), ls = /* @__PURE__ */ X({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, n) => (o(), s("span", {
      class: se(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ Y(ls, [["__scopeId", "data-v-2f186e4c"]]), is = { class: "detail-row" }, rs = /* @__PURE__ */ X({
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
    return (d, n) => (o(), s("div", is, [
      v(xt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          p(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), E(St, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          p(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : re(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), fe = /* @__PURE__ */ Y(rs, [["__scopeId", "data-v-ef15664a"]]), ds = { class: "modal-header" }, cs = { class: "modal-body" }, us = { class: "status-section" }, ms = {
  key: 0,
  class: "status-section"
}, vs = { class: "section-header-row" }, fs = {
  key: 0,
  class: "workflow-group"
}, gs = { class: "workflow-group-header" }, hs = { class: "workflow-group-title" }, ps = { class: "workflow-list" }, ys = { class: "workflow-name" }, ws = { class: "workflow-issue" }, bs = {
  key: 1,
  class: "workflow-group"
}, ks = { class: "workflow-group-header" }, _s = { class: "workflow-group-title" }, $s = { class: "workflow-list" }, Cs = { class: "workflow-name" }, xs = { class: "workflow-issue" }, Ss = {
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
}, bn = {
  key: 3,
  class: "drift-item"
}, kn = {
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
    const d = t, n = C(!1);
    we(() => {
      console.log("StatusDetailModal mounted, initial show value:", d.show);
    }), Et(() => d.show, (z, I) => {
      console.log("StatusDetailModal show prop changed from", I, "to", z);
    }, { immediate: !0 });
    const r = B(() => {
      var z, I, _;
      return ((_ = (I = (z = d.status) == null ? void 0 : z.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), f = B(() => {
      var z, I, _;
      return ((_ = (I = (z = d.status) == null ? void 0 : z.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), y = B(() => {
      var z, I, _;
      return ((_ = (I = (z = d.status) == null ? void 0 : z.workflows) == null ? void 0 : I.synced) == null ? void 0 : _.filter((x) => {
        var $, A, P;
        const b = (P = (A = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : A.analyzed) == null ? void 0 : P.find((D) => D.name === x);
        return !b || b.status !== "broken";
      })) || [];
    }), h = B(() => {
      var z, I, _, x, b;
      return (z = d.status) != null && z.workflows ? (((I = d.status.workflows.new) == null ? void 0 : I.length) ?? 0) > 0 || (((_ = d.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = d.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((b = d.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), c = B(() => {
      var I, _, x;
      const z = (I = d.status) == null ? void 0 : I.git_changes;
      return z ? (((_ = z.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = z.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || z.workflow_changes || z.has_other_changes : !1;
    }), i = B(() => {
      var z, I, _, x, b, $;
      return !h.value && !c.value && ((I = (z = d.status) == null ? void 0 : z.comparison) == null ? void 0 : I.is_synced) && (((_ = d.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && ((($ = (b = (x = d.status) == null ? void 0 : x.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
    }), m = B(() => {
      var I, _;
      const z = (_ = (I = d.status) == null ? void 0 : I.git_changes) == null ? void 0 : _.workflow_changes;
      return z ? typeof z == "number" ? z : Object.keys(z).length : 0;
    });
    function w(z) {
      return typeof z == "string" ? z : z.name;
    }
    function g(z) {
      return typeof z == "object" && z.is_development === !0;
    }
    return (z, I) => {
      var _, x, b, $, A, P, D, K, L, N, R, M, S, U, F, ee, te, W, H, V, O, ae;
      return o(), E(_e, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[6] || (I[6] = (Q) => z.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: I[5] || (I[5] = pe(() => {
            }, ["stop"]))
          }, [
            e("div", ds, [
              I[7] || (I[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (Q) => z.$emit("close"))
              }, "✕")
            ]),
            e("div", cs, [
              e("div", us, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[8] || (I[8] = [
                    p("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                v(fe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), s("div", ms, [
                e("div", vs, [
                  v(Ee, { level: "4" }, {
                    default: a(() => [...I[9] || (I[9] = [
                      p("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: I[1] || (I[1] = (Q) => z.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", fs, [
                  e("div", gs, [
                    I[10] || (I[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", hs, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", ps, [
                    (o(!0), s(j, null, oe(r.value, (Q) => (o(), s("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", ys, l(Q.name), 1),
                      e("span", ws, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                f.value.length ? (o(), s("div", bs, [
                  e("div", ks, [
                    I[11] || (I[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", _s, "BROKEN (UNCOMMITTED) (" + l(f.value.length) + ")", 1)
                  ]),
                  e("div", $s, [
                    (o(!0), s(j, null, oe(f.value, (Q) => (o(), s("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, l(Q.name), 1),
                      e("span", xs, l(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (x = (_ = t.status.workflows) == null ? void 0 : _.new) != null && x.length ? (o(), s("div", Ss, [
                  e("div", Is, [
                    I[12] || (I[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Es, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ms, [
                    (o(!0), s(j, null, oe(t.status.workflows.new, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", zs, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                ($ = (b = t.status.workflows) == null ? void 0 : b.modified) != null && $.length ? (o(), s("div", Ls, [
                  e("div", Ts, [
                    I[13] || (I[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ds, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Rs, [
                    (o(!0), s(j, null, oe(t.status.workflows.modified, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ns, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (P = (A = t.status.workflows) == null ? void 0 : A.deleted) != null && P.length ? (o(), s("div", Os, [
                  e("div", Us, [
                    I[14] || (I[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Bs, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ps, [
                    (o(!0), s(j, null, oe(t.status.workflows.deleted, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, l(Q), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                y.value.length ? (o(), s("div", Fs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: I[2] || (I[2] = (Q) => n.value = !n.value)
                  }, [
                    I[15] || (I[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", As, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Ws, l(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", Gs, [
                    (o(!0), s(j, null, oe(y.value, (Q) => (o(), s("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", js, l(Q), 1)
                    ]))), 128))
                  ])) : u("", !0)
                ])) : u("", !0)
              ])) : u("", !0),
              c.value ? (o(), s("div", Hs, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[16] || (I[16] = [
                    p("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (K = (D = t.status.git_changes) == null ? void 0 : D.nodes_added) != null && K.length ? (o(), s("div", qs, [
                  e("div", Ks, [
                    I[17] || (I[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Js, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Qs, [
                    (o(!0), s(j, null, oe(t.status.git_changes.nodes_added, (Q) => (o(), s("div", {
                      key: w(Q),
                      class: "change-item"
                    }, [
                      e("span", Xs, l(w(Q)), 1),
                      g(Q) ? (o(), s("span", Ys, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (N = (L = t.status.git_changes) == null ? void 0 : L.nodes_removed) != null && N.length ? (o(), s("div", Zs, [
                  e("div", en, [
                    I[18] || (I[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", tn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), s(j, null, oe(t.status.git_changes.nodes_removed, (Q) => (o(), s("div", {
                      key: w(Q),
                      class: "change-item"
                    }, [
                      e("span", sn, l(w(Q)), 1),
                      g(Q) ? (o(), s("span", nn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (R = t.status.git_changes) != null && R.workflow_changes ? (o(), s("div", an, [
                  I[19] || (I[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", ln, [
                    e("div", rn, [
                      e("span", dn, l(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : u("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (o(), s("div", cn, [...I[20] || (I[20] = [
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
              (S = t.status.comparison) != null && S.is_synced ? u("", !0) : (o(), s("div", un, [
                e("div", mn, [
                  v(Ee, { level: "4" }, {
                    default: a(() => [...I[21] || (I[21] = [
                      p("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: I[3] || (I[3] = (Q) => z.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                I[22] || (I[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (F = (U = t.status.comparison) == null ? void 0 : U.missing_nodes) != null && F.length ? (o(), s("div", vn, [
                  v(fe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", fn, [
                    (o(!0), s(j, null, oe(t.status.comparison.missing_nodes.slice(0, 10), (Q) => (o(), s("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", gn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (te = (ee = t.status.comparison) == null ? void 0 : ee.extra_nodes) != null && te.length ? (o(), s("div", hn, [
                  v(fe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", pn, [
                    (o(!0), s(j, null, oe(t.status.comparison.extra_nodes.slice(0, 10), (Q) => (o(), s("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + l(Q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", yn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (H = (W = t.status.comparison) == null ? void 0 : W.version_mismatches) != null && H.length ? (o(), s("div", wn, [
                  v(fe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : u("", !0),
                (V = t.status.comparison) != null && V.packages_in_sync ? u("", !0) : (o(), s("div", bn, [
                  v(fe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (O = t.status.comparison) == null ? void 0 : O.disabled_nodes) != null && ae.length ? (o(), s("div", kn, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[23] || (I[23] = [
                    p("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", _n, [
                  I[24] || (I[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", $n, [
                  (o(!0), s(j, null, oe(t.status.comparison.disabled_nodes.slice(0, 10), (Q) => (o(), s("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + l(Q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", Cn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : u("", !0)
                ])
              ])) : u("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", xn, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[25] || (I[25] = [
                    p("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Sn, [
                  I[26] || (I[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                I[27] || (I[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : u("", !0),
              i.value ? (o(), s("div", In, [...I[28] || (I[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : u("", !0)
            ]),
            e("div", En, [
              v(Z, {
                variant: "secondary",
                onClick: I[4] || (I[4] = (Q) => z.$emit("close"))
              }, {
                default: a(() => [...I[29] || (I[29] = [
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
  setup(t, { emit: d }) {
    const n = t, r = C(!1), f = C(!1);
    function y() {
      r.value = !0;
    }
    function h() {
      r.value = !1, i("view-workflows");
    }
    function c() {
      r.value = !1, i("view-nodes");
    }
    const i = d, m = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), w = B(() => n.status.has_changes), g = B(() => {
      const L = n.status.git_changes;
      return L.nodes_added.length > 0 || L.nodes_removed.length > 0 || L.workflow_changes;
    }), z = B(() => n.status.has_changes || m.value), I = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), _ = B(() => n.status.git_changes.has_other_changes), x = B(() => {
      var L;
      return ((L = n.status.workflows.analyzed) == null ? void 0 : L.filter((N) => N.status === "broken")) || [];
    }), b = B(() => {
      var L;
      return ((L = n.status.workflows.analyzed) == null ? void 0 : L.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), $ = B(() => x.value.length > 0), A = B(() => $.value || b.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), P = B(() => {
      const L = [];
      return n.status.workflows.new.length > 0 && L.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && L.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && L.push(`${n.status.workflows.deleted.length} deleted`), L.length > 0 ? `${L.join(", ")} workflow${L.length === 1 && !L[0].includes(",") ? "" : "s"} to commit` : "Uncommitted changes ready to commit";
    }), D = B(() => {
      var R, M;
      const L = [], N = n.status.comparison;
      return (R = N.missing_nodes) != null && R.length && L.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (M = N.extra_nodes) != null && M.length && L.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), L.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${L.join(" and ")}.`;
    }), K = B(() => {
      var R, M;
      const L = [], N = n.status.comparison;
      return (R = N.extra_nodes) != null && R.length && (N.extra_nodes.slice(0, 3).forEach((S) => {
        L.push(`Untracked: ${S}`);
      }), N.extra_nodes.length > 3 && L.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (M = N.missing_nodes) != null && M.length && (N.missing_nodes.slice(0, 3).forEach((S) => {
        L.push(`Missing: ${S}`);
      }), N.missing_nodes.length > 3 && L.push(`...and ${N.missing_nodes.length - 3} more missing`)), L;
    });
    return (L, N) => (o(), s(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[1] || (N[1] = (R) => f.value = !0),
            onMouseleave: N[2] || (N[2] = (R) => f.value = !1)
          }, [
            e("div", Ln, [
              v(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...N[9] || (N[9] = [
                  p(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              v(no, { name: "fade" }, {
                default: a(() => [
                  f.value ? (o(), E(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...N[10] || (N[10] = [
                      p(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : u("", !0)
                ]),
                _: 1
              })
            ]),
            v(Po, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Mt({
              left: a(() => [
                t.status.workflows.new.length ? (o(), E(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.modified.length ? (o(), E(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.deleted.length ? (o(), E(Pe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : u("", !0),
                v(Pe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: m.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), E(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), E(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.workflow_changes ? (o(), E(Pe, {
                  key: 2,
                  icon: "●",
                  count: I.value,
                  label: I.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : u("", !0),
                _.value ? (o(), E(Pe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : u("", !0),
                w.value && !g.value && !_.value ? (o(), E(Pe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : u("", !0),
                w.value ? u("", !0) : (o(), E(Pe, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              z.value ? {
                name: "footer",
                fn: a(() => [
                  N[12] || (N[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Tn, [
                    e("span", Dn, l(P.value), 1),
                    v(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[0] || (N[0] = (R) => L.$emit("commit-changes"))
                    }, {
                      default: a(() => [...N[11] || (N[11] = [
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
          t.status.is_detached_head ? (o(), E(Ze, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: a(() => [
              v(Z, {
                variant: "primary",
                size: "sm",
                onClick: N[3] || (N[3] = (R) => L.$emit("create-branch"))
              }, {
                default: a(() => [...N[13] || (N[13] = [
                  p(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : u("", !0),
          A.value ? (o(), s("div", Rn, [
            v(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...N[14] || (N[14] = [
                p(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            x.value.length > 0 ? (o(), E(Ze, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${x.value.length} workflow${x.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: x.value.map((R) => `${R.name} — ${R.issue_summary}`)
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[4] || (N[4] = (R) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...N[15] || (N[15] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            b.value.length > 0 ? (o(), E(Ze, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${b.value.length} workflow${b.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: b.value.map((R) => `${R.name} — ${R.models_needing_path_sync_count} model path${R.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[5] || (N[5] = (R) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...N[16] || (N[16] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            t.status.missing_models_count > 0 && !$.value ? (o(), E(Ze, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[6] || (N[6] = (R) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...N[17] || (N[17] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : u("", !0),
            t.status.comparison.is_synced ? u("", !0) : (o(), E(Ze, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: D.value,
              items: K.value
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y
                }, {
                  default: a(() => [...N[18] || (N[18] = [
                    p(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                v(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: N[7] || (N[7] = (R) => L.$emit("view-nodes"))
                }, {
                  default: a(() => [...N[19] || (N[19] = [
                    p(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : u("", !0),
          !A.value && !z.value ? (o(), E(Ne, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : u("", !0)
        ]),
        _: 1
      }),
      v(zn, {
        show: r.value,
        status: t.status,
        onClose: N[8] || (N[8] = (R) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: c
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), On = /* @__PURE__ */ Y(Nn, [["__scopeId", "data-v-aff52ec0"]]), Un = ["type", "value", "placeholder", "disabled"], Bn = /* @__PURE__ */ X({
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
  setup(t, { expose: d, emit: n }) {
    const r = t, f = n, y = C(null);
    function h(c) {
      const i = c.target.value;
      f("update:modelValue", i);
    }
    return we(() => {
      r.autoFocus && y.value && y.value.focus();
    }), d({
      focus: () => {
        var c;
        return (c = y.value) == null ? void 0 : c.focus();
      },
      blur: () => {
        var c;
        return (c = y.value) == null ? void 0 : c.blur();
      }
    }), (c, i) => (o(), s("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: se(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        i[0] || (i[0] = We((m) => c.$emit("enter"), ["enter"])),
        i[1] || (i[1] = We((m) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: i[2] || (i[2] = (m) => c.$emit("focus")),
      onBlur: i[3] || (i[3] = (m) => c.$emit("blur"))
    }, null, 42, Un));
  }
}), ht = /* @__PURE__ */ Y(Bn, [["__scopeId", "data-v-0380d08f"]]), Pn = { class: "branch-create-form" }, Vn = { class: "form-actions" }, Fn = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const n = d, r = C(""), f = B(() => {
      const c = r.value.trim();
      return c.length > 0 && !c.startsWith("-") && !c.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(c);
    });
    function y() {
      f.value && (n("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", n("cancel");
    }
    return (c, i) => (o(), s("div", Pn, [
      v(ht, {
        modelValue: r.value,
        "onUpdate:modelValue": i[0] || (i[0] = (m) => r.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Vn, [
        v(Z, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: y
        }, {
          default: a(() => [...i[1] || (i[1] = [
            p(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        v(Z, {
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
    return (d, n) => (o(), s("div", {
      class: se(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && d.$emit("click"))
    }, [
      e("span", Wn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Gn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), s("div", jn, [
        re(d.$slots, "actions", {}, void 0, !0),
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
  setup(t, { emit: d }) {
    const n = d, r = C(!1);
    function f(h) {
      n("create", h), y();
    }
    function y() {
      r.value = !1;
    }
    return (h, c) => (o(), E(Ce, null, {
      header: a(() => [
        v(xe, { title: "BRANCHES" }, {
          actions: a(() => [
            v(Z, {
              variant: "ghost",
              size: "sm",
              onClick: c[0] || (c[0] = (i) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...c[1] || (c[1] = [
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
        r.value ? (o(), E(An, {
          key: 0,
          onCreate: f,
          onCancel: y
        })) : u("", !0),
        t.branches.length === 0 ? (o(), E(Ne, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", Jn, [
          (o(!0), s(j, null, oe(t.branches, (i) => (o(), E(Kn, {
            key: i.name,
            "branch-name": i.name,
            "is-current": i.is_current
          }, {
            actions: a(() => [
              i.is_current ? u("", !0) : (o(), E(Z, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (m) => h.$emit("switch", i.name)
              }, {
                default: a(() => [...c[2] || (c[2] = [
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
    return (d, n) => (o(), s("div", Yn, [
      re(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ea = /* @__PURE__ */ Y(Zn, [["__scopeId", "data-v-8c5ee761"]]), ta = { class: "commit-hash" }, oa = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, n = B(() => d.hash.slice(0, d.length));
    return (r, f) => (o(), s("span", ta, l(n.value), 1));
  }
}), At = /* @__PURE__ */ Y(oa, [["__scopeId", "data-v-7c333cc6"]]), sa = { class: "commit-message" }, na = { class: "commit-date" }, aa = /* @__PURE__ */ X({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const n = t, r = d;
    function f() {
      n.clickable && r("click");
    }
    return (y, h) => (o(), s("div", {
      class: se(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      v(At, { hash: t.hash }, null, 8, ["hash"]),
      e("span", sa, l(t.message), 1),
      e("span", na, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = pe(() => {
        }, ["stop"]))
      }, [
        re(y.$slots, "actions", {}, void 0, !0)
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
    return (d, n) => (o(), E(Ce, null, {
      header: a(() => [
        v(xe, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), E(Ne, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), E(ea, { key: 1 }, {
          default: a(() => [
            (o(!0), s(j, null, oe(t.commits, (r) => (o(), E(la, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (f) => d.$emit("select", r)
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => d.$emit("checkout", r),
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
}), ra = /* @__PURE__ */ Y(ia, [["__scopeId", "data-v-981c3c64"]]), Gp = [
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
  ...Array(12).fill(null).map((t, d) => ({
    name: `synced-workflow-${d + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + d,
    model_count: 1 + d % 3,
    sync_state: "synced"
  }))
], jp = {
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
], Hp = [
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
function wt() {
  return !1;
}
function $e() {
  const t = C(!1), d = C(null);
  async function n(k, G) {
    var ge;
    if (!((ge = window.app) != null && ge.api))
      throw new Error("ComfyUI API not available");
    const ne = await window.app.api.fetchApi(k, G);
    if (!ne.ok) {
      const Oe = await ne.json().catch(() => ({}));
      throw new Error(Oe.error || Oe.message || `Request failed: ${ne.status}`);
    }
    return ne.json();
  }
  async function r(k = !1) {
    return n(k ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(k, G = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: k, allow_issues: G })
    });
  }
  async function y(k = 10, G = 0) {
    return n(`/v2/comfygit/log?limit=${k}&offset=${G}`);
  }
  async function h(k) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: k })
    });
  }
  async function c() {
    return n("/v2/comfygit/branches");
  }
  async function i(k) {
    return n(`/v2/comfygit/commit/${k}`);
  }
  async function m(k, G = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: k, force: G })
    });
  }
  async function w(k, G = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: k, start_point: G })
    });
  }
  async function g(k, G = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: k, force: G })
    });
  }
  async function z() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const k = await r();
        return [{
          name: k.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + k.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: k.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: k.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function I(k) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: k })
    });
  }
  async function _() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function x(k, G, ne) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: k, pytorch_backend: G, clone_from: ne })
    });
  }
  async function b(k) {
    return n(`/v2/workspace/environments/${k}`, {
      method: "DELETE"
    });
  }
  async function $(k = !1) {
    try {
      return n(k ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const G = await r(k), ne = [];
      return G.workflows.new.forEach((ge) => {
        ne.push({ name: ge, status: "new", missing_nodes: 0, missing_models: 0, path: ge });
      }), G.workflows.modified.forEach((ge) => {
        ne.push({ name: ge, status: "modified", missing_nodes: 0, missing_models: 0, path: ge });
      }), G.workflows.synced.forEach((ge) => {
        ne.push({ name: ge, status: "synced", missing_nodes: 0, missing_models: 0, path: ge });
      }), ne;
    }
  }
  async function A(k) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(k)}/details`);
  }
  async function P(k) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(k)}/resolve`, {
      method: "POST"
    });
  }
  async function D(k, G, ne) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(k)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: G, install_models: ne })
    });
  }
  async function K(k, G, ne) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(k)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: G, importance: ne })
    });
  }
  async function L() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function N() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function R(k) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(k)}`);
  }
  async function M(k) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: k })
    });
  }
  async function S(k, G) {
    return n(`/v2/workspace/models/${k}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: G })
    });
  }
  async function U(k, G) {
    return n(`/v2/workspace/models/${k}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: G })
    });
  }
  async function F(k) {
    return n(`/v2/workspace/models/${k}`, {
      method: "DELETE"
    });
  }
  async function ee(k) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(k)
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
  async function H(k) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: k })
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
  async function O(k) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(k)
    });
  }
  async function ae(k, G) {
    try {
      const ne = new URLSearchParams();
      return k && ne.append("level", k), G && ne.append("lines", G.toString()), n(`/v2/comfygit/debug/logs?${ne}`);
    } catch {
      return [];
    }
  }
  async function Q(k, G) {
    try {
      const ne = new URLSearchParams();
      return k && ne.append("level", k), G && ne.append("lines", G.toString()), n(`/v2/workspace/debug/logs?${ne}`);
    } catch {
      return [];
    }
  }
  async function be() {
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
  async function ve(k) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(k)}/track-dev`, {
      method: "POST"
    });
  }
  async function ze(k) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(k)}/install`, {
      method: "POST"
    });
  }
  async function lt(k) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(k)}/update`, {
      method: "POST"
    });
  }
  async function me(k) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(k)}`, {
      method: "DELETE"
    });
  }
  async function Me() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function it(k, G) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: k, url: G })
    });
  }
  async function Ke(k) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(k)}`, {
      method: "DELETE"
    });
  }
  async function Se(k, G, ne) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(k)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: G, push_url: ne })
    });
  }
  async function rt(k) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(k)}/fetch`, {
      method: "POST"
    });
  }
  async function Ye(k) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(k)}/status`);
    } catch {
      return null;
    }
  }
  async function J(k = "skip", G = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: k,
        remove_extra_nodes: G
      })
    });
  }
  return {
    isLoading: t,
    error: d,
    getStatus: r,
    commit: f,
    getHistory: y,
    exportEnv: h,
    // Git Operations
    getBranches: c,
    getCommitDetail: i,
    checkout: m,
    createBranch: w,
    switchBranch: g,
    // Environment Management
    getEnvironments: z,
    switchEnvironment: I,
    getSwitchProgress: _,
    createEnvironment: x,
    deleteEnvironment: b,
    // Workflow Management
    getWorkflows: $,
    getWorkflowDetails: A,
    resolveWorkflow: P,
    installWorkflowDeps: D,
    setModelImportance: K,
    // Model Management
    getEnvironmentModels: L,
    getWorkspaceModels: N,
    getModelDetails: R,
    openFileLocation: M,
    addModelSource: S,
    removeModelSource: U,
    deleteModel: F,
    downloadModel: ee,
    scanWorkspaceModels: te,
    getModelsDirectory: W,
    setModelsDirectory: H,
    // Settings
    getConfig: V,
    updateConfig: O,
    // Debug/Logs
    getEnvironmentLogs: ae,
    getWorkspaceLogs: Q,
    // Node Management
    getNodes: be,
    trackNodeAsDev: ve,
    installNode: ze,
    updateNode: lt,
    uninstallNode: me,
    // Git Remotes
    getRemotes: Me,
    addRemote: it,
    removeRemote: Ke,
    updateRemoteUrl: Se,
    fetchRemote: rt,
    getRemoteSyncStatus: Ye,
    // Environment Sync
    syncEnvironmentManually: J
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
  setup(t, { emit: d }) {
    const n = t, r = d;
    function f() {
      n.closeOnOverlayClick && r("close");
    }
    function y(h) {
      h.key === "Escape" && r("close");
    }
    return we(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), ao(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (h, c) => (o(), E(_e, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: se(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: c[1] || (c[1] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", ca, [
            re(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", ua, l(t.title), 1)) : u("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: c[0] || (c[0] = (i) => h.$emit("close"))
            }, [...c[2] || (c[2] = [
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
            t.loading ? (o(), s("div", va, "Loading...")) : t.error ? (o(), s("div", fa, l(t.error), 1)) : re(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", ga, [
            re(h.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), st = /* @__PURE__ */ Y(ha, [["__scopeId", "data-v-2125a0e6"]]), pa = ["type", "disabled"], ya = {
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
    return (d, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: se(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", ya)) : u("", !0),
      re(d.$slots, "default", {}, void 0, !0)
    ], 10, pa));
  }
}), le = /* @__PURE__ */ Y(wa, [["__scopeId", "data-v-f3452606"]]), ba = {
  key: 0,
  class: "base-title-count"
}, ka = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, n) => (o(), E(It(`h${t.level}`), {
      class: se(["base-title", t.variant])
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", ba, "(" + l(t.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vt = /* @__PURE__ */ Y(ka, [["__scopeId", "data-v-5a01561d"]]), _a = ["value", "disabled"], $a = {
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
    function d(r) {
      return typeof r == "string" ? r : r.value;
    }
    function n(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, f) => (o(), s("div", {
      class: se(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: se(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (y) => r.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), s("option", $a, l(t.placeholder), 1)) : u("", !0),
        (o(!0), s(j, null, oe(t.options, (y) => (o(), s("option", {
          key: d(y),
          value: d(y)
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
    return (d, n) => (o(), E(_e, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: qe({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Ea, [
            e("h4", Ma, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", za, [
            re(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), s("div", La, [
            re(d.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), Ge = /* @__PURE__ */ Y(Ta, [["__scopeId", "data-v-42815ace"]]), Da = { class: "detail-section" }, Ra = {
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
  setup(t, { emit: d }) {
    const n = t, r = d, { getWorkflowDetails: f, setModelImportance: y, installWorkflowDeps: h } = $e(), c = C(null), i = C(!1), m = C(null), w = C(!1), g = C({}), z = C({}), I = C(!1), _ = C(/* @__PURE__ */ new Set()), x = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function b(M) {
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
    function $(M) {
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
    function A(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const S = M.hash || M.filename;
      return _.value.has(S) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function P(M) {
      return _.value.has(M);
    }
    function D(M) {
      _.value.has(M) ? _.value.delete(M) : _.value.add(M), _.value = new Set(_.value);
    }
    async function K() {
      i.value = !0, m.value = null;
      try {
        c.value = await f(n.workflowName);
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        i.value = !1;
      }
    }
    function L(M, S) {
      g.value[M] = S, w.value = !0;
    }
    async function N() {
      if (!w.value) {
        r("close");
        return;
      }
      i.value = !0, m.value = null;
      try {
        for (const [M, S] of Object.entries(g.value))
          await y(n.workflowName, M, S);
        r("refresh"), r("close");
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        i.value = !1;
      }
    }
    async function R(M) {
      z.value[M] = !0, m.value = null;
      try {
        await h(n.workflowName, !0, !1), await K();
      } catch (S) {
        m.value = S instanceof Error ? S.message : "Failed to install node";
      } finally {
        z.value[M] = !1;
      }
    }
    return we(K), (M, S) => (o(), s(j, null, [
      v(st, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: i.value,
        error: m.value || void 0,
        onClose: S[5] || (S[5] = (U) => r("close"))
      }, {
        body: a(() => [
          c.value ? (o(), s(j, { key: 0 }, [
            e("section", Da, [
              v(vt, { variant: "section" }, {
                default: a(() => [
                  p("MODELS USED (" + l(c.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              c.value.models.length === 0 ? (o(), s("div", Ra, " No models used in this workflow ")) : u("", !0),
              (o(!0), s(j, null, oe(c.value.models, (U) => (o(), s("div", {
                key: U.hash || U.filename,
                class: "model-card"
              }, [
                e("div", Na, [
                  S[7] || (S[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Oa, l(U.filename), 1)
                ]),
                e("div", Ua, [
                  e("div", Ba, [
                    S[8] || (S[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: se(["value", b(U.status)])
                    }, l($(U.status)), 3)
                  ]),
                  e("div", Pa, [
                    e("span", Va, [
                      S[9] || (S[9] = p(" Importance: ", -1)),
                      v(Ft, {
                        size: 14,
                        title: "About importance levels",
                        onClick: S[0] || (S[0] = (F) => I.value = !0)
                      })
                    ]),
                    v(Ia, {
                      "model-value": g.value[U.filename] || U.importance,
                      options: x,
                      "onUpdate:modelValue": (F) => L(U.filename, F)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  U.loaded_by && U.loaded_by.length > 0 ? (o(), s("div", Fa, [
                    S[10] || (S[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Aa, [
                      (o(!0), s(j, null, oe(A(U), (F, ee) => (o(), s("div", {
                        key: `${F.node_id}-${ee}`,
                        class: "node-reference"
                      }, l(F.node_type) + " (Node #" + l(F.node_id) + ") ", 1))), 128)),
                      U.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (F) => D(U.hash || U.filename)
                      }, l(P(U.hash || U.filename) ? "▼ Show less" : `▶ View all (${U.loaded_by.length})`), 9, Wa)) : u("", !0)
                    ])
                  ])) : u("", !0),
                  U.size_mb ? (o(), s("div", Ga, [
                    S[11] || (S[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", ja, l(U.size_mb) + " MB", 1)
                  ])) : u("", !0)
                ]),
                U.status !== "available" ? (o(), s("div", Ha, [
                  U.status === "downloadable" ? (o(), E(le, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: S[1] || (S[1] = (F) => r("resolve"))
                  }, {
                    default: a(() => [...S[12] || (S[12] = [
                      p(" Download ", -1)
                    ])]),
                    _: 1
                  })) : U.status === "path_mismatch" ? (o(), E(le, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[2] || (S[2] = (F) => r("resolve"))
                  }, {
                    default: a(() => [...S[13] || (S[13] = [
                      p(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), E(le, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[3] || (S[3] = (F) => r("resolve"))
                  }, {
                    default: a(() => [...S[14] || (S[14] = [
                      p(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : u("", !0)
              ]))), 128))
            ]),
            e("section", qa, [
              v(vt, { variant: "section" }, {
                default: a(() => [
                  p("NODES USED (" + l(c.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              c.value.nodes.length === 0 ? (o(), s("div", Ka, " No custom nodes used in this workflow ")) : u("", !0),
              (o(!0), s(j, null, oe(c.value.nodes, (U) => (o(), s("div", {
                key: U.name,
                class: "node-item"
              }, [
                e("span", {
                  class: se(["node-status", U.status === "installed" ? "installed" : "missing"])
                }, l(U.status === "installed" ? "✓" : "✕"), 3),
                e("span", Ja, l(U.name), 1),
                U.version ? (o(), s("span", Qa, "v" + l(U.version), 1)) : u("", !0),
                U.status === "missing" ? (o(), E(le, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: z.value[U.name],
                  onClick: (F) => R(U.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...S[15] || (S[15] = [
                    p(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : u("", !0)
              ]))), 128))
            ])
          ], 64)) : u("", !0)
        ]),
        footer: a(() => [
          v(le, {
            variant: "secondary",
            onClick: S[4] || (S[4] = (U) => r("close"))
          }, {
            default: a(() => [...S[16] || (S[16] = [
              p(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (o(), E(le, {
            key: 0,
            variant: "primary",
            onClick: N
          }, {
            default: a(() => [...S[17] || (S[17] = [
              p(" Save Changes ", -1)
            ])]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      v(Ge, {
        show: I.value,
        title: "Model Importance Levels",
        onClose: S[6] || (S[6] = (U) => I.value = !1)
      }, {
        content: a(() => [...S[18] || (S[18] = [
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
}), Ya = /* @__PURE__ */ Y(Xa, [["__scopeId", "data-v-0b14d32e"]]), ue = Vt({
  items: [],
  status: "idle"
});
let Ve = null;
function Wt() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function _t(t) {
  return ue.items.find((d) => d.id === t);
}
async function et() {
  if (ue.status === "downloading") return;
  const t = ue.items.find((d) => d.status === "queued");
  if (!t) {
    ue.status = "idle";
    return;
  }
  ue.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Za(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    ue.status = "idle", et();
  }
}
async function Za(t) {
  return new Promise((d, n) => {
    Ve && (Ve.close(), Ve = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ve = f;
    let y = Date.now(), h = 0, c = !1;
    f.onmessage = (i) => {
      try {
        const m = JSON.parse(i.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const w = Date.now(), g = (w - y) / 1e3;
            if (g > 0.5) {
              const z = t.downloaded - h;
              if (t.speed = z / g, y = w, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const I = t.size - t.downloaded;
                t.eta = I / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            c = !0, f.close(), Ve = null, d();
            break;
          case "error":
            c = !0, f.close(), Ve = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Ve = null, c || n(new Error("Connection lost"));
    };
  });
}
async function el() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const d = await t.json();
    if (!d.pending_downloads || d.pending_downloads.length === 0) return;
    for (const n of d.pending_downloads) {
      if (ue.items.some((f) => f.url === n.url && f.filename === n.filename))
        continue;
      const r = {
        id: Wt(),
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
      ue.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${d.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function pt() {
  function t(b) {
    for (const $ of b) {
      if (ue.items.some(
        (D) => D.url === $.url && D.targetPath === $.targetPath && ["queued", "downloading", "paused", "completed"].includes(D.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${$.filename}`);
        continue;
      }
      const P = {
        id: Wt(),
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
      ue.items.push(P);
    }
    ue.status === "idle" && et();
  }
  async function d(b) {
    const $ = _t(b);
    if ($) {
      if ($.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent($.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ve && (Ve.close(), Ve = null), $.status = "failed", $.error = "Cancelled by user", ue.status = "idle", et();
      } else if ($.status === "queued") {
        const A = ue.items.findIndex((P) => P.id === b);
        A >= 0 && ue.items.splice(A, 1);
      }
    }
  }
  function n(b) {
    const $ = _t(b);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, ue.status === "idle" && et());
  }
  function r(b) {
    const $ = _t(b);
    !$ || $.status !== "paused" || ($.status = "queued", ue.status === "idle" && et());
  }
  function f() {
    const b = ue.items.filter(($) => $.status === "paused");
    for (const $ of b)
      $.status = "queued";
    ue.status === "idle" && et();
  }
  function y(b) {
    const $ = ue.items.findIndex((A) => A.id === b);
    $ >= 0 && ["completed", "failed", "paused"].includes(ue.items[$].status) && ue.items.splice($, 1);
  }
  function h() {
    ue.items = ue.items.filter((b) => b.status !== "completed");
  }
  function c() {
    ue.items = ue.items.filter((b) => b.status !== "failed");
  }
  const i = B(
    () => ue.items.find((b) => b.status === "downloading")
  ), m = B(
    () => ue.items.filter((b) => b.status === "queued")
  ), w = B(
    () => ue.items.filter((b) => b.status === "completed")
  ), g = B(
    () => ue.items.filter((b) => b.status === "failed")
  ), z = B(
    () => ue.items.filter((b) => b.status === "paused")
  ), I = B(() => ue.items.length > 0), _ = B(
    () => ue.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), x = B(
    () => ue.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: lo(ue),
    // Computed
    currentDownload: i,
    queuedItems: m,
    completedItems: w,
    failedItems: g,
    pausedItems: z,
    hasItems: I,
    activeCount: _,
    hasPaused: x,
    // Actions
    addToQueue: t,
    cancelDownload: d,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: f,
    removeItem: y,
    clearCompleted: h,
    clearFailed: c,
    loadPendingDownloads: el
  };
}
function tl() {
  const t = C(null), d = C(null), n = C([]), r = C([]), f = C(!1), y = C(null);
  async function h(b, $) {
    var P;
    if (!((P = window.app) != null && P.api))
      throw new Error("ComfyUI API not available");
    const A = await window.app.api.fetchApi(b, $);
    if (!A.ok) {
      const D = await A.json().catch(() => ({})), K = D.error || D.message || `Request failed: ${A.status}`;
      throw new Error(K);
    }
    return A.json();
  }
  async function c(b) {
    f.value = !0, y.value = null;
    try {
      let $;
      return wt() || ($ = await h(
        `/v2/comfygit/workflow/${b}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = $, $;
    } catch ($) {
      const A = $ instanceof Error ? $.message : "Unknown error occurred";
      throw y.value = A, $;
    } finally {
      f.value = !1;
    }
  }
  async function i(b, $, A) {
    f.value = !0, y.value = null;
    try {
      let P;
      if (!wt()) {
        const D = Object.fromEntries($), K = Object.fromEntries(A);
        P = await h(
          `/v2/comfygit/workflow/${b}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: D,
              model_choices: K
            })
          }
        );
      }
      return d.value = P, P;
    } catch (P) {
      const D = P instanceof Error ? P.message : "Unknown error occurred";
      throw y.value = D, P;
    } finally {
      f.value = !1;
    }
  }
  async function m(b, $ = 10) {
    f.value = !0, y.value = null;
    try {
      let A;
      return wt() || (A = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: b, limit: $ })
        }
      )), n.value = A.results, A.results;
    } catch (A) {
      const P = A instanceof Error ? A.message : "Unknown error occurred";
      throw y.value = P, A;
    } finally {
      f.value = !1;
    }
  }
  async function w(b, $ = 10) {
    f.value = !0, y.value = null;
    try {
      let A;
      return wt() || (A = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: b, limit: $ })
        }
      )), r.value = A.results, A.results;
    } catch (A) {
      const P = A instanceof Error ? A.message : "Unknown error occurred";
      throw y.value = P, A;
    } finally {
      f.value = !1;
    }
  }
  const g = Vt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: []
  });
  function z() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.error = void 0;
  }
  async function I(b, $, A) {
    z(), g.phase = "resolving", y.value = null;
    const P = Object.fromEntries($), D = Object.fromEntries(A);
    try {
      const K = await fetch(`/v2/comfygit/workflow/${b}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: P,
          model_choices: D
        })
      });
      if (!K.ok)
        throw new Error(`Request failed: ${K.status}`);
      if (!K.body)
        throw new Error("No response body");
      const L = K.body.getReader(), N = new TextDecoder();
      let R = "";
      for (; ; ) {
        const { done: M, value: S } = await L.read();
        if (M) break;
        R += N.decode(S, { stream: !0 });
        const U = R.split(`

`);
        R = U.pop() || "";
        for (const F of U) {
          if (!F.trim()) continue;
          const ee = F.split(`
`);
          let te = "", W = "";
          for (const H of ee)
            H.startsWith("event: ") ? te = H.slice(7) : H.startsWith("data: ") && (W = H.slice(6));
          if (W)
            try {
              const H = JSON.parse(W);
              _(te, H);
            } catch (H) {
              console.warn("Failed to parse SSE event:", H);
            }
        }
      }
    } catch (K) {
      const L = K instanceof Error ? K.message : "Unknown error occurred";
      throw y.value = L, g.error = L, g.phase = "error", K;
    }
  }
  function _(b, $) {
    switch (b) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = $.total;
        break;
      case "file_start":
        g.currentFile = $.filename, g.currentFileIndex = $.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = $.downloaded, g.bytesTotal = $.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: $.filename,
          success: $.success,
          error: $.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = $.nodes_to_install || [], $.download_results && (g.completedFiles = $.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = $.message, g.phase = "error", y.value = $.message;
        break;
    }
  }
  function x(b, $) {
    const { addToQueue: A } = pt(), P = $.filter((D) => D.url && D.target_path).map((D) => ({
      workflow: b,
      filename: D.filename,
      url: D.url,
      targetPath: D.target_path,
      size: D.size || 0,
      type: "model"
    }));
    return P.length > 0 && A(P), P.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: n,
    modelSearchResults: r,
    isLoading: f,
    error: y,
    progress: g,
    // Methods
    analyzeWorkflow: c,
    applyResolution: i,
    applyResolutionWithProgress: I,
    searchNodes: m,
    searchModels: w,
    resetProgress: z,
    queueModelDownloads: x
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
  setup(t, { emit: d }) {
    const n = t, r = d;
    function f(m) {
      var w;
      if ((w = n.stepStats) != null && w[m]) {
        const g = n.stepStats[m];
        return g.total > 0 && g.resolved === g.total;
      }
      return n.completedSteps.includes(m);
    }
    function y(m) {
      var w;
      if ((w = n.stepStats) != null && w[m]) {
        const g = n.stepStats[m];
        return g.resolved > 0 && g.resolved < g.total;
      }
      return !1;
    }
    function h(m) {
      return f(m) ? "state-complete" : y(m) ? "state-partial" : "state-pending";
    }
    function c(m) {
      return !1;
    }
    function i(m) {
      r("step-change", m);
    }
    return (m, w) => (o(), s("div", ol, [
      e("div", sl, [
        (o(!0), s(j, null, oe(t.steps, (g, z) => (o(), s("div", {
          key: g.id,
          class: se(["step", {
            active: t.currentStep === g.id,
            completed: f(g.id),
            "in-progress": y(g.id),
            disabled: c(g.id)
          }]),
          onClick: (I) => i(g.id)
        }, [
          e("div", {
            class: se(["step-indicator", h(g.id)])
          }, [
            f(g.id) ? (o(), s("span", al, "✓")) : (o(), s("span", ll, l(z + 1), 1))
          ], 2),
          e("div", il, l(g.label), 1),
          z < t.steps.length - 1 ? (o(), s("div", rl)) : u("", !0)
        ], 10, nl))), 128))
      ]),
      e("div", dl, [
        re(m.$slots, "default", {}, void 0, !0)
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
    const d = t, n = B(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), r = B(() => `confidence-${n.value}`), f = B(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (y, h) => (o(), s("span", {
      class: se(["confidence-badge", r.value, t.size])
    }, l(f.value), 3));
  }
}), Tt = /* @__PURE__ */ Y(ml, [["__scopeId", "data-v-17ec4b80"]]), vl = { class: "node-info" }, fl = { class: "node-info-text" }, gl = { class: "item-body" }, hl = {
  key: 0,
  class: "resolved-state"
}, pl = {
  key: 1,
  class: "multiple-options"
}, yl = { class: "options-list" }, wl = ["onClick"], bl = ["name", "value", "checked", "onChange"], kl = { class: "option-content" }, _l = { class: "option-header" }, $l = { class: "option-package-id" }, Cl = {
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
  setup(t, { emit: d }) {
    const n = t, r = d, f = B(() => !!n.choice);
    B(() => {
      var c;
      return (c = n.choice) == null ? void 0 : c.action;
    }), B(() => {
      var c;
      return (c = n.choice) == null ? void 0 : c.package_id;
    });
    const y = B(() => {
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
    function h(c) {
      r("option-selected", c);
    }
    return (c, i) => (o(), s("div", {
      class: se(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: f.value }])
    }, [
      e("div", vl, [
        e("span", fl, [
          i[7] || (i[7] = p("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", gl, [
        f.value ? (o(), s("div", hl, [
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (m) => r("clear-choice"))
          }, {
            default: a(() => [...i[8] || (i[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", pl, [
          i[12] || (i[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", yl, [
            (o(!0), s(j, null, oe(t.options, (m, w) => (o(), s("label", {
              key: m.package_id,
              class: se(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (g) => h(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (g) => h(w)
              }, null, 40, bl),
              e("div", kl, [
                e("div", _l, [
                  e("span", $l, l(m.package_id), 1),
                  v(Tt, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                m.title && m.title !== m.package_id ? (o(), s("div", Cl, l(m.title), 1)) : u("", !0),
                e("div", xl, [
                  m.is_installed ? (o(), s("span", Sl, "Already Installed")) : u("", !0)
                ])
              ])
            ], 10, wl))), 128))
          ]),
          e("div", Il, [
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: i[1] || (i[1] = (m) => r("search"))
            }, {
              default: a(() => [...i[9] || (i[9] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: i[2] || (i[2] = (m) => r("manual-entry"))
            }, {
              default: a(() => [...i[10] || (i[10] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[3] || (i[3] = (m) => r("mark-optional"))
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
            v(le, {
              variant: "primary",
              size: "sm",
              onClick: i[4] || (i[4] = (m) => r("search"))
            }, {
              default: a(() => [...i[13] || (i[13] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[5] || (i[5] = (m) => r("manual-entry"))
            }, {
              default: a(() => [...i[14] || (i[14] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[6] || (i[6] = (m) => r("mark-optional"))
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
  setup(t, { emit: d }) {
    const n = d;
    return (r, f) => (o(), s("div", Tl, [
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
            onClick: f[0] || (f[0] = (y) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Ul),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (y) => n("next")),
            title: "Next item"
          }, " → ", 8, Bl)
        ]),
        e("span", Pl, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), Gt = /* @__PURE__ */ Y(Vl, [["__scopeId", "data-v-74af7920"]]), Fl = ["type", "value", "placeholder", "disabled"], Al = {
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
    return (d, n) => (o(), s("div", {
      class: se(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: se(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = We((r) => d.$emit("enter"), ["enter"])),
          n[2] || (n[2] = We((r) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Fl),
      t.error ? (o(), s("span", Al, l(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Re = /* @__PURE__ */ Y(Wl, [["__scopeId", "data-v-9ba02cdc"]]), Gl = { class: "node-resolution-step" }, jl = { class: "step-header" }, Hl = { class: "stat-badge" }, ql = {
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
  setup(t, { emit: d }) {
    const n = t, r = d, f = C(0), y = C(!1), h = C(!1), c = C(""), i = C(""), m = C([]), w = C(!1), g = B(() => n.nodes[f.value]), z = B(() => n.nodes.filter((U) => n.nodeChoices.has(U.node_type)).length), I = B(() => {
      var F;
      if (!g.value) return "not-found";
      const U = n.nodeChoices.get(g.value.node_type);
      if (U)
        switch (U.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (F = g.value.options) != null && F.length ? "ambiguous" : "not-found";
    }), _ = B(() => {
      var F;
      if (!g.value) return;
      const U = n.nodeChoices.get(g.value.node_type);
      if (U)
        switch (U.action) {
          case "install":
            return U.package_id ? `→ ${U.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (F = g.value.options) != null && F.length ? `${g.value.options.length} matches` : "Not Found";
    });
    function x(U) {
      U >= 0 && U < n.nodes.length && (f.value = U);
    }
    function b() {
      g.value && r("mark-optional", g.value.node_type);
    }
    function $() {
      g.value && r("skip", g.value.node_type);
    }
    function A(U) {
      g.value && r("option-selected", g.value.node_type, U);
    }
    function P() {
      g.value && r("clear-choice", g.value.node_type);
    }
    function D() {
      g.value && (c.value = g.value.node_type, y.value = !0);
    }
    function K() {
      i.value = "", h.value = !0;
    }
    function L() {
      y.value = !1, c.value = "", m.value = [];
    }
    function N() {
      h.value = !1, i.value = "";
    }
    function R() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function M(U) {
      g.value && (r("manual-entry", g.value.node_type, U.package_id), L());
    }
    function S() {
      !g.value || !i.value.trim() || (r("manual-entry", g.value.node_type, i.value.trim()), N());
    }
    return (U, F) => {
      var ee, te;
      return o(), s("div", Gl, [
        e("div", jl, [
          F[4] || (F[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Hl, l(z.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        g.value ? (o(), E(Gt, {
          key: 0,
          "item-name": g.value.node_type,
          "current-index": f.value,
          "total-items": t.nodes.length,
          onPrev: F[0] || (F[0] = (W) => x(f.value - 1)),
          onNext: F[1] || (F[1] = (W) => x(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        g.value ? (o(), s("div", ql, [
          v(Ll, {
            "node-type": g.value.node_type,
            "has-multiple-options": !!((ee = g.value.options) != null && ee.length),
            options: g.value.options,
            choice: (te = t.nodeChoices) == null ? void 0 : te.get(g.value.node_type),
            status: I.value,
            "status-label": _.value,
            onMarkOptional: b,
            onSkip: $,
            onManualEntry: K,
            onSearch: D,
            onOptionSelected: A,
            onClearChoice: P
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Kl, [...F[5] || (F[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), E(_e, { to: "body" }, [
          y.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pe(L, ["self"])
          }, [
            e("div", Jl, [
              e("div", { class: "node-modal-header" }, [
                F[6] || (F[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", Ql, [
                v(Re, {
                  modelValue: c.value,
                  "onUpdate:modelValue": F[2] || (F[2] = (W) => c.value = W),
                  placeholder: "Search by node type, package name...",
                  onInput: R
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (o(), s("div", Xl, [
                  (o(!0), s(j, null, oe(m.value, (W) => (o(), s("div", {
                    key: W.package_id,
                    class: "node-search-result-item",
                    onClick: (H) => M(W)
                  }, [
                    e("div", Zl, [
                      e("code", ei, l(W.package_id), 1),
                      W.match_confidence ? (o(), E(Tt, {
                        key: 0,
                        confidence: W.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : u("", !0)
                    ]),
                    W.description ? (o(), s("div", ti, l(W.description), 1)) : u("", !0)
                  ], 8, Yl))), 128))
                ])) : c.value && !w.value ? (o(), s("div", oi, ' No packages found matching "' + l(c.value) + '" ', 1)) : u("", !0),
                w.value ? (o(), s("div", si, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), E(_e, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pe(N, ["self"])
          }, [
            e("div", ni, [
              e("div", { class: "node-modal-header" }, [
                F[7] || (F[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", ai, [
                v(Re, {
                  modelValue: i.value,
                  "onUpdate:modelValue": F[3] || (F[3] = (W) => i.value = W),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", li, [
                  v(le, {
                    variant: "secondary",
                    onClick: N
                  }, {
                    default: a(() => [...F[8] || (F[8] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(le, {
                    variant: "primary",
                    disabled: !i.value.trim(),
                    onClick: S
                  }, {
                    default: a(() => [...F[9] || (F[9] = [
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
}, fi = { class: "options-list" }, gi = ["onClick"], hi = ["name", "value", "checked", "onChange"], pi = { class: "option-content" }, yi = { class: "option-header" }, wi = { class: "option-filename" }, bi = { class: "option-meta" }, ki = { class: "option-size" }, _i = { class: "option-category" }, $i = { class: "option-path" }, Ci = { class: "action-buttons" }, xi = {
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
  setup(t, { emit: d }) {
    const n = t, r = d, f = B(() => !!n.choice);
    B(() => {
      var i;
      return (i = n.choice) == null ? void 0 : i.action;
    }), B(() => {
      var i, m;
      return ((m = (i = n.choice) == null ? void 0 : i.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const y = B(() => {
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
    function c(i) {
      if (!i) return "Unknown";
      const m = i / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, m) => (o(), s("div", {
      class: se(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", di, [
        e("span", ci, [
          m[7] || (m[7] = p("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", ui, [
        f.value ? (o(), s("div", mi, [
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (w) => r("clear-choice"))
          }, {
            default: a(() => [...m[8] || (m[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", vi, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", fi, [
            (o(!0), s(j, null, oe(t.options, (w, g) => (o(), s("label", {
              key: w.model.hash,
              class: se(["option-card", { selected: t.selectedOptionIndex === g }]),
              onClick: (z) => h(g)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: g,
                checked: t.selectedOptionIndex === g,
                onChange: (z) => h(g)
              }, null, 40, hi),
              e("div", pi, [
                e("div", yi, [
                  e("span", wi, l(w.model.filename), 1),
                  v(Tt, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", bi, [
                  e("span", ki, l(c(w.model.size)), 1),
                  e("span", _i, l(w.model.category), 1)
                ]),
                e("div", $i, l(w.model.relative_path), 1)
              ])
            ], 10, gi))), 128))
          ]),
          e("div", Ci, [
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (w) => r("search"))
            }, {
              default: a(() => [...m[9] || (m[9] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (w) => r("download-url"))
            }, {
              default: a(() => [...m[10] || (m[10] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (w) => r("mark-optional"))
            }, {
              default: a(() => [...m[11] || (m[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", xi, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Si, [
            v(le, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (w) => r("search"))
            }, {
              default: a(() => [...m[13] || (m[13] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (w) => r("download-url"))
            }, {
              default: a(() => [...m[14] || (m[14] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (w) => r("mark-optional"))
            }, {
              default: a(() => [...m[15] || (m[15] = [
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
  setup(t, { emit: d }) {
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
    const f = t, y = d, h = C(0), c = C(!1), i = C(!1), m = C(""), w = C(""), g = C(""), z = C([]), I = C(!1), _ = B(() => f.models[h.value]), x = B(() => f.models.some((V) => V.is_download_intent)), b = B(() => f.models.filter(
      (V) => f.modelChoices.has(V.filename) || V.is_download_intent
    ).length), $ = B(() => {
      var O;
      if (!_.value) return "";
      const V = r((O = _.value.reference) == null ? void 0 : O.node_type);
      return V ? `${V}/${_.value.filename}` : "";
    }), A = B(() => {
      var O;
      if (!_.value) return "not-found";
      const V = f.modelChoices.get(_.value.filename);
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
      return _.value.is_download_intent ? "download" : (O = _.value.options) != null && O.length ? "ambiguous" : "not-found";
    }), P = B(() => {
      var O, ae;
      if (!_.value) return;
      const V = f.modelChoices.get(_.value.filename);
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
      return _.value.is_download_intent ? "Pending Download" : (ae = _.value.options) != null && ae.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function D(V) {
      V >= 0 && V < f.models.length && (h.value = V);
    }
    function K() {
      _.value && y("mark-optional", _.value.filename);
    }
    function L() {
      _.value && y("skip", _.value.filename);
    }
    function N(V) {
      _.value && y("option-selected", _.value.filename, V);
    }
    function R() {
      _.value && y("clear-choice", _.value.filename);
    }
    function M() {
      _.value && (m.value = _.value.filename, c.value = !0);
    }
    function S() {
      _.value && (w.value = _.value.download_source || "", g.value = _.value.target_path || $.value, i.value = !0);
    }
    function U() {
      c.value = !1, m.value = "", z.value = [];
    }
    function F() {
      i.value = !1, w.value = "", g.value = "";
    }
    function ee() {
      I.value = !0, setTimeout(() => {
        I.value = !1;
      }, 300);
    }
    function te(V) {
      _.value && U();
    }
    function W() {
      !_.value || !w.value.trim() || (y("download-url", _.value.filename, w.value.trim(), g.value.trim() || void 0), F());
    }
    function H(V) {
      if (!V) return "Unknown";
      const O = V / (1024 * 1024 * 1024);
      return O >= 1 ? `${O.toFixed(2)} GB` : `${(V / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (V, O) => {
      var ae, Q, be;
      return o(), s("div", Mi, [
        e("div", zi, [
          e("div", Li, [
            e("h3", Ti, l(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Di, l(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Ri, l(b.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        _.value ? (o(), E(Gt, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: O[0] || (O[0] = (ve) => D(h.value - 1)),
          onNext: O[1] || (O[1] = (ve) => D(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        _.value ? (o(), s("div", Ni, [
          v(Ei, {
            filename: _.value.filename,
            "node-type": ((ae = _.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((Q = _.value.options) != null && Q.length),
            options: _.value.options,
            choice: (be = t.modelChoices) == null ? void 0 : be.get(_.value.filename),
            status: A.value,
            "status-label": P.value,
            onMarkOptional: K,
            onSkip: L,
            onDownloadUrl: S,
            onSearch: M,
            onOptionSelected: N,
            onClearChoice: R
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Oi, [...O[5] || (O[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), E(_e, { to: "body" }, [
          c.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pe(U, ["self"])
          }, [
            e("div", Ui, [
              e("div", { class: "model-modal-header" }, [
                O[6] || (O[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", Bi, [
                v(Re, {
                  modelValue: m.value,
                  "onUpdate:modelValue": O[2] || (O[2] = (ve) => m.value = ve),
                  placeholder: "Search by filename, category...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                z.value.length > 0 ? (o(), s("div", Pi, [
                  (o(!0), s(j, null, oe(z.value, (ve) => (o(), s("div", {
                    key: ve.hash,
                    class: "model-search-result-item",
                    onClick: (ze) => te()
                  }, [
                    e("div", Fi, [
                      e("code", Ai, l(ve.filename), 1)
                    ]),
                    e("div", Wi, [
                      e("span", Gi, l(ve.category), 1),
                      e("span", ji, l(H(ve.size)), 1)
                    ]),
                    ve.relative_path ? (o(), s("div", Hi, l(ve.relative_path), 1)) : u("", !0)
                  ], 8, Vi))), 128))
                ])) : m.value && !I.value ? (o(), s("div", qi, ' No models found matching "' + l(m.value) + '" ', 1)) : u("", !0),
                I.value ? (o(), s("div", Ki, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), E(_e, { to: "body" }, [
          i.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pe(F, ["self"])
          }, [
            e("div", Ji, [
              e("div", { class: "model-modal-header" }, [
                O[7] || (O[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              e("div", Qi, [
                e("div", Xi, [
                  O[8] || (O[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  v(Re, {
                    modelValue: w.value,
                    "onUpdate:modelValue": O[3] || (O[3] = (ve) => w.value = ve),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Yi, [
                  O[9] || (O[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  v(Re, {
                    modelValue: g.value,
                    "onUpdate:modelValue": O[4] || (O[4] = (ve) => g.value = ve),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Zi, [
                  v(le, {
                    variant: "secondary",
                    onClick: F
                  }, {
                    default: a(() => [...O[10] || (O[10] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(le, {
                    variant: "primary",
                    disabled: !w.value.trim() || !g.value.trim(),
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
}, ar = { class: "completion-summary" }, lr = {
  key: 0,
  class: "summary-item info"
}, ir = { class: "summary-text" }, rr = {
  key: 2,
  class: "phase-content error"
}, dr = { class: "error-message" }, cr = /* @__PURE__ */ X({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (d, n) => (o(), s("div", or, [
      t.progress.phase === "resolving" ? (o(), s("div", sr, [...n[0] || (n[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), s("div", nr, [
        n[4] || (n[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", ar, [
          t.progress.nodesToInstall.length > 0 ? (o(), s("div", lr, [
            n[1] || (n[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", ir, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : u("", !0),
          n[2] || (n[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          n[3] || (n[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), s("div", rr, [
        n[5] || (n[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", dr, l(t.progress.error), 1)
      ])) : u("", !0)
    ]));
  }
}), ur = /* @__PURE__ */ Y(cr, [["__scopeId", "data-v-b4d7e0eb"]]), mr = {
  key: 0,
  class: "loading-state"
}, vr = {
  key: 1,
  class: "wizard-content"
}, fr = {
  key: 0,
  class: "step-content"
}, gr = { class: "analysis-summary" }, hr = { class: "analysis-header" }, pr = { class: "summary-description" }, yr = { class: "stats-grid" }, wr = { class: "stat-card" }, br = { class: "stat-items" }, kr = { class: "stat-item success" }, _r = { class: "stat-count" }, $r = {
  key: 0,
  class: "stat-item warning"
}, Cr = { class: "stat-count" }, xr = {
  key: 1,
  class: "stat-item error"
}, Sr = { class: "stat-count" }, Ir = { class: "stat-card" }, Er = { class: "stat-items" }, Mr = { class: "stat-item success" }, zr = { class: "stat-count" }, Lr = {
  key: 0,
  class: "stat-item info"
}, Tr = { class: "stat-count" }, Dr = {
  key: 1,
  class: "stat-item warning"
}, Rr = { class: "stat-count" }, Nr = {
  key: 2,
  class: "stat-item error"
}, Or = { class: "stat-count" }, Ur = {
  key: 0,
  class: "status-message warning"
}, Br = { class: "status-text" }, Pr = {
  key: 1,
  class: "status-message info"
}, Vr = { class: "status-text" }, Fr = {
  key: 2,
  class: "status-message success"
}, Ar = {
  key: 3,
  class: "step-content"
}, Wr = { class: "review-summary" }, Gr = { class: "review-stats" }, jr = { class: "review-stat" }, Hr = { class: "stat-value" }, qr = { class: "review-stat" }, Kr = { class: "stat-value" }, Jr = { class: "review-stat" }, Qr = { class: "stat-value" }, Xr = { class: "review-stat" }, Yr = { class: "stat-value" }, Zr = {
  key: 0,
  class: "review-section"
}, ed = { class: "section-title" }, td = { class: "review-items" }, od = { class: "item-name" }, sd = { class: "item-choice" }, nd = {
  key: 0,
  class: "choice-badge install"
}, ad = {
  key: 1,
  class: "choice-badge optional"
}, ld = {
  key: 2,
  class: "choice-badge skip"
}, id = {
  key: 1,
  class: "choice-badge pending"
}, rd = {
  key: 1,
  class: "review-section"
}, dd = { class: "section-title" }, cd = { class: "review-items" }, ud = { class: "item-name" }, md = { class: "item-choice" }, vd = {
  key: 0,
  class: "choice-badge install"
}, fd = {
  key: 1,
  class: "choice-badge download"
}, gd = {
  key: 2,
  class: "choice-badge optional"
}, hd = {
  key: 3,
  class: "choice-badge skip"
}, pd = {
  key: 4,
  class: "choice-badge skip"
}, yd = {
  key: 1,
  class: "choice-badge download"
}, wd = {
  key: 2,
  class: "choice-badge pending"
}, bd = {
  key: 2,
  class: "no-choices"
}, kd = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const n = t, r = d, { analyzeWorkflow: f, applyResolution: y, queueModelDownloads: h, progress: c, resetProgress: i } = tl(), { loadPendingDownloads: m } = pt(), w = C(null), g = C(!1), z = C(!1), I = C(null), _ = C("analysis"), x = C([]), b = C(/* @__PURE__ */ new Map()), $ = C(/* @__PURE__ */ new Map()), A = B(() => {
      const J = [
        { id: "analysis", label: "Analysis" }
      ];
      return D.value && J.push({ id: "nodes", label: "Nodes" }), (K.value || L.value) && J.push({ id: "models", label: "Models" }), J.push({ id: "review", label: "Review" }), _.value === "applying" && J.push({ id: "applying", label: "Applying" }), J;
    }), P = B(() => w.value ? w.value.stats.needs_user_input : !1), D = B(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), K = B(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), L = B(() => w.value ? w.value.stats.download_intents > 0 : !1), N = B(() => w.value ? w.value.models.resolved.filter((J) => J.match_type === "download_intent").map((J) => ({
      filename: J.reference.widget_value,
      reference: J.reference,
      is_download_intent: !0,
      resolved_model: J.model,
      download_source: J.download_source,
      target_path: J.target_path
    })) : []), R = B(() => {
      if (!w.value) return [];
      const J = w.value.nodes.unresolved.map((G) => ({
        node_type: G.reference.node_type,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), k = w.value.nodes.ambiguous.map((G) => ({
        node_type: G.reference.node_type,
        has_multiple_options: !0,
        options: G.options.map((ne) => ({
          package_id: ne.package.package_id,
          title: ne.package.title,
          match_confidence: ne.match_confidence,
          match_type: ne.match_type,
          is_installed: ne.is_installed
        }))
      }));
      return [...J, ...k];
    }), M = B(() => {
      if (!w.value) return [];
      const J = w.value.models.unresolved.map((G) => ({
        filename: G.reference.widget_value,
        reference: G.reference,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), k = w.value.models.ambiguous.map((G) => ({
        filename: G.reference.widget_value,
        reference: G.reference,
        has_multiple_options: !0,
        options: G.options.map((ne) => ({
          model: ne.model,
          match_confidence: ne.match_confidence,
          match_type: ne.match_type,
          has_download_source: ne.has_download_source
        }))
      }));
      return [...J, ...k];
    }), S = B(() => {
      const J = M.value, k = N.value.map((G) => ({
        filename: G.filename,
        reference: G.reference,
        is_download_intent: !0,
        resolved_model: G.resolved_model,
        download_source: G.download_source,
        target_path: G.target_path,
        options: void 0
      }));
      return [...J, ...k];
    }), U = B(() => {
      let J = 0;
      for (const k of b.value.values())
        k.action === "install" && J++;
      for (const k of $.value.values())
        k.action === "select" && J++;
      return J;
    }), F = B(() => {
      let J = 0;
      for (const k of $.value.values())
        k.action === "download" && J++;
      return J;
    }), ee = B(() => {
      let J = 0;
      for (const k of b.value.values())
        k.action === "optional" && J++;
      for (const k of $.value.values())
        k.action === "optional" && J++;
      return J;
    }), te = B(() => {
      let J = 0;
      for (const k of b.value.values())
        k.action === "skip" && J++;
      for (const k of $.value.values())
        k.action === "skip" && J++;
      for (const k of R.value)
        b.value.has(k.node_type) || J++;
      for (const k of M.value)
        $.value.has(k.filename) || J++;
      return J;
    }), W = B(() => {
      const J = {};
      if (J.analysis = { resolved: 1, total: 1 }, D.value) {
        const k = R.value.length, G = R.value.filter(
          (ne) => b.value.has(ne.node_type)
        ).length;
        J.nodes = { resolved: G, total: k };
      }
      if (K.value || L.value) {
        const k = S.value.length, G = S.value.filter(
          (ne) => $.value.has(ne.filename) || ne.is_download_intent
        ).length;
        J.models = { resolved: G, total: k };
      }
      if (J.review = { resolved: 1, total: 1 }, _.value === "applying") {
        const k = c.totalFiles || 1, G = c.completedFiles.length;
        J.applying = { resolved: G, total: k };
      }
      return J;
    });
    function H(J) {
      _.value = J;
    }
    function V() {
      const J = A.value.findIndex((k) => k.id === _.value);
      J > 0 && (_.value = A.value[J - 1].id);
    }
    function O() {
      const J = A.value.findIndex((k) => k.id === _.value);
      J < A.value.length - 1 && (_.value = A.value[J + 1].id);
    }
    async function ae() {
      g.value = !0, I.value = null;
      try {
        w.value = await f(n.workflowName);
      } catch (J) {
        I.value = J instanceof Error ? J.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function Q() {
      x.value.includes("analysis") || x.value.push("analysis"), D.value ? _.value = "nodes" : K.value || L.value ? _.value = "models" : _.value = "review";
    }
    function be(J) {
      b.value.set(J, { action: "optional" });
    }
    function ve(J) {
      b.value.set(J, { action: "skip" });
    }
    function ze(J, k) {
      var ne;
      const G = R.value.find((ge) => ge.node_type === J);
      (ne = G == null ? void 0 : G.options) != null && ne[k] && b.value.set(J, {
        action: "install",
        package_id: G.options[k].package_id
      });
    }
    function lt(J, k) {
      b.value.set(J, {
        action: "install",
        package_id: k
      });
    }
    function me(J) {
      b.value.delete(J);
    }
    function Me(J) {
      $.value.set(J, { action: "optional" });
    }
    function it(J) {
      $.value.set(J, { action: "skip" });
    }
    function Ke(J, k) {
      var ne;
      const G = M.value.find((ge) => ge.filename === J);
      (ne = G == null ? void 0 : G.options) != null && ne[k] && $.value.set(J, {
        action: "select",
        selected_model: G.options[k].model
      });
    }
    function Se(J, k, G) {
      $.value.set(J, {
        action: "download",
        url: k,
        target_path: G
      });
    }
    function rt(J) {
      $.value.delete(J);
    }
    async function Ye() {
      z.value = !0, I.value = null, i(), c.phase = "resolving", _.value = "applying";
      try {
        const J = await y(n.workflowName, b.value, $.value);
        J.models_to_download && J.models_to_download.length > 0 && h(n.workflowName, J.models_to_download), c.nodesToInstall = J.nodes_to_install || [], c.phase = "complete", await m(), setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (J) {
        I.value = J instanceof Error ? J.message : "Failed to apply resolution", c.error = I.value, c.phase = "error";
      } finally {
        z.value = !1;
      }
    }
    return we(ae), (J, k) => (o(), E(st, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: g.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: k[1] || (k[1] = (G) => r("close"))
    }, {
      body: a(() => [
        g.value && !w.value ? (o(), s("div", mr, [...k[2] || (k[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (o(), s("div", vr, [
          v(ul, {
            steps: A.value,
            "current-step": _.value,
            "completed-steps": x.value,
            "step-stats": W.value,
            onStepChange: H
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          _.value === "analysis" ? (o(), s("div", fr, [
            e("div", gr, [
              e("div", hr, [
                k[3] || (k[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", pr, " Found " + l(w.value.stats.total_nodes) + " nodes and " + l(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", yr, [
                e("div", wr, [
                  k[10] || (k[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", br, [
                    e("div", kr, [
                      k[4] || (k[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", _r, l(w.value.nodes.resolved.length), 1),
                      k[5] || (k[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.nodes.ambiguous.length > 0 ? (o(), s("div", $r, [
                      k[6] || (k[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Cr, l(w.value.nodes.ambiguous.length), 1),
                      k[7] || (k[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    w.value.nodes.unresolved.length > 0 ? (o(), s("div", xr, [
                      k[8] || (k[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Sr, l(w.value.nodes.unresolved.length), 1),
                      k[9] || (k[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ]),
                e("div", Ir, [
                  k[19] || (k[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Er, [
                    e("div", Mr, [
                      k[11] || (k[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zr, l(w.value.models.resolved.length - w.value.stats.download_intents), 1),
                      k[12] || (k[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (o(), s("div", Lr, [
                      k[13] || (k[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Tr, l(w.value.stats.download_intents), 1),
                      k[14] || (k[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : u("", !0),
                    w.value.models.ambiguous.length > 0 ? (o(), s("div", Dr, [
                      k[15] || (k[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Rr, l(w.value.models.ambiguous.length), 1),
                      k[16] || (k[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    w.value.models.unresolved.length > 0 ? (o(), s("div", Nr, [
                      k[17] || (k[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Or, l(w.value.models.unresolved.length), 1),
                      k[18] || (k[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ])
              ]),
              P.value ? (o(), s("div", Ur, [
                k[20] || (k[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Br, l(R.value.length + M.value.length) + " items need your input", 1)
              ])) : L.value ? (o(), s("div", Pr, [
                k[21] || (k[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Vr, l(w.value.stats.download_intents) + " model" + l(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", Fr, [...k[22] || (k[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : u("", !0),
          _.value === "nodes" ? (o(), E(ri, {
            key: 1,
            nodes: R.value,
            "node-choices": b.value,
            onMarkOptional: be,
            onSkip: ve,
            onOptionSelected: ze,
            onManualEntry: lt,
            onClearChoice: me
          }, null, 8, ["nodes", "node-choices"])) : u("", !0),
          _.value === "models" ? (o(), E(tr, {
            key: 2,
            models: S.value,
            "model-choices": $.value,
            onMarkOptional: Me,
            onSkip: it,
            onOptionSelected: Ke,
            onDownloadUrl: Se,
            onClearChoice: rt
          }, null, 8, ["models", "model-choices"])) : u("", !0),
          _.value === "review" ? (o(), s("div", Ar, [
            e("div", Wr, [
              k[27] || (k[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Gr, [
                e("div", jr, [
                  e("span", Hr, l(U.value), 1),
                  k[23] || (k[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", qr, [
                  e("span", Kr, l(F.value), 1),
                  k[24] || (k[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Jr, [
                  e("span", Qr, l(ee.value), 1),
                  k[25] || (k[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Xr, [
                  e("span", Yr, l(te.value), 1),
                  k[26] || (k[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              R.value.length > 0 ? (o(), s("div", Zr, [
                e("h4", ed, "Node Packages (" + l(R.value.length) + ")", 1),
                e("div", td, [
                  (o(!0), s(j, null, oe(R.value, (G) => {
                    var ne, ge, Oe, Ue;
                    return o(), s("div", {
                      key: G.node_type,
                      class: "review-item"
                    }, [
                      e("code", od, l(G.node_type), 1),
                      e("div", sd, [
                        b.value.has(G.node_type) ? (o(), s(j, { key: 0 }, [
                          ((ne = b.value.get(G.node_type)) == null ? void 0 : ne.action) === "install" ? (o(), s("span", nd, l((ge = b.value.get(G.node_type)) == null ? void 0 : ge.package_id), 1)) : ((Oe = b.value.get(G.node_type)) == null ? void 0 : Oe.action) === "optional" ? (o(), s("span", ad, " Optional ")) : ((Ue = b.value.get(G.node_type)) == null ? void 0 : Ue.action) === "skip" ? (o(), s("span", ld, " Skip ")) : u("", !0)
                        ], 64)) : (o(), s("span", id, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              S.value.length > 0 ? (o(), s("div", rd, [
                e("h4", dd, "Models (" + l(S.value.length) + ")", 1),
                e("div", cd, [
                  (o(!0), s(j, null, oe(S.value, (G) => {
                    var ne, ge, Oe, Ue, Je, yt, Be;
                    return o(), s("div", {
                      key: G.filename,
                      class: "review-item"
                    }, [
                      e("code", ud, l(G.filename), 1),
                      e("div", md, [
                        $.value.has(G.filename) ? (o(), s(j, { key: 0 }, [
                          ((ne = $.value.get(G.filename)) == null ? void 0 : ne.action) === "select" ? (o(), s("span", vd, l((Oe = (ge = $.value.get(G.filename)) == null ? void 0 : ge.selected_model) == null ? void 0 : Oe.filename), 1)) : ((Ue = $.value.get(G.filename)) == null ? void 0 : Ue.action) === "download" ? (o(), s("span", fd, " Download ")) : ((Je = $.value.get(G.filename)) == null ? void 0 : Je.action) === "optional" ? (o(), s("span", gd, " Optional ")) : ((yt = $.value.get(G.filename)) == null ? void 0 : yt.action) === "skip" ? (o(), s("span", hd, " Skip ")) : ((Be = $.value.get(G.filename)) == null ? void 0 : Be.action) === "cancel_download" ? (o(), s("span", pd, " Cancel Download ")) : u("", !0)
                        ], 64)) : G.is_download_intent ? (o(), s("span", yd, " Pending Download ")) : (o(), s("span", wd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              R.value.length === 0 && S.value.length === 0 ? (o(), s("div", bd, " No dependencies need resolution. ")) : u("", !0)
            ])
          ])) : u("", !0),
          _.value === "applying" ? (o(), E(ur, {
            key: 4,
            progress: ce(c)
          }, null, 8, ["progress"])) : u("", !0)
        ])) : u("", !0)
      ]),
      footer: a(() => [
        _.value !== "analysis" && _.value !== "applying" ? (o(), E(le, {
          key: 0,
          variant: "secondary",
          disabled: z.value,
          onClick: V
        }, {
          default: a(() => [...k[28] || (k[28] = [
            p(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        k[31] || (k[31] = e("div", { class: "footer-spacer" }, null, -1)),
        _.value !== "applying" || ce(c).phase === "complete" || ce(c).phase === "error" ? (o(), E(le, {
          key: 1,
          variant: "secondary",
          onClick: k[0] || (k[0] = (G) => r("close"))
        }, {
          default: a(() => [
            p(l(ce(c).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : u("", !0),
        _.value === "analysis" ? (o(), E(le, {
          key: 2,
          variant: "primary",
          disabled: g.value,
          onClick: Q
        }, {
          default: a(() => [
            p(l(P.value || L.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        _.value === "nodes" ? (o(), E(le, {
          key: 3,
          variant: "primary",
          onClick: O
        }, {
          default: a(() => [
            p(l(K.value || L.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : u("", !0),
        _.value === "models" ? (o(), E(le, {
          key: 4,
          variant: "primary",
          onClick: O
        }, {
          default: a(() => [...k[29] || (k[29] = [
            p(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : u("", !0),
        _.value === "review" ? (o(), E(le, {
          key: 5,
          variant: "primary",
          disabled: z.value,
          loading: z.value,
          onClick: Ye
        }, {
          default: a(() => [...k[30] || (k[30] = [
            p(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), _d = /* @__PURE__ */ Y(kd, [["__scopeId", "data-v-08beb8e3"]]), $d = { class: "search-input-wrapper" }, Cd = ["value", "placeholder"], xd = /* @__PURE__ */ X({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: d }) {
    const n = t, r = d, f = C(null);
    let y;
    function h(i) {
      const m = i.target.value;
      n.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", m);
      }, n.debounce)) : r("update:modelValue", m);
    }
    function c() {
      var i;
      r("update:modelValue", ""), r("clear"), (i = f.value) == null || i.focus();
    }
    return we(() => {
      n.autoFocus && f.value && f.value.focus();
    }), (i, m) => (o(), s("div", $d, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: We(c, ["escape"])
      }, null, 40, Cd),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), Sd = /* @__PURE__ */ Y(xd, [["__scopeId", "data-v-266f857a"]]), Id = { class: "search-bar" }, Ed = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, n) => (o(), s("div", Id, [
      v(Sd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => d.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), nt = /* @__PURE__ */ Y(Ed, [["__scopeId", "data-v-3d51bbfd"]]), Md = { class: "section-group" }, zd = {
  key: 0,
  class: "section-content"
}, Ld = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const n = t, r = d, f = C(n.initiallyExpanded);
    function y() {
      n.collapsible && (f.value = !f.value, r("toggle", f.value));
    }
    return (h, c) => (o(), s("section", Md, [
      v(Ee, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: y
      }, {
        default: a(() => [
          p(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (o(), s("div", zd, [
        re(h.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), ye = /* @__PURE__ */ Y(Ld, [["__scopeId", "data-v-c48e33ed"]]), Td = { class: "item-header" }, Dd = {
  key: 0,
  class: "item-icon"
}, Rd = { class: "item-info" }, Nd = {
  key: 0,
  class: "item-title"
}, Od = {
  key: 1,
  class: "item-subtitle"
}, Ud = {
  key: 0,
  class: "item-details"
}, Bd = {
  key: 1,
  class: "item-actions"
}, Pd = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const n = t, r = B(() => n.status ? `status-${n.status}` : "");
    return (f, y) => (o(), s("div", {
      class: se(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (h) => t.clickable && f.$emit("click"))
    }, [
      e("div", Td, [
        f.$slots.icon ? (o(), s("span", Dd, [
          re(f.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        e("div", Rd, [
          f.$slots.title ? (o(), s("div", Nd, [
            re(f.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          f.$slots.subtitle ? (o(), s("div", Od, [
            re(f.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      f.$slots.details ? (o(), s("div", Ud, [
        re(f.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      f.$slots.actions ? (o(), s("div", Bd, [
        re(f.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ Y(Pd, [["__scopeId", "data-v-cc435e0e"]]), Vd = { class: "loading-state" }, Fd = { class: "loading-message" }, Ad = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, n) => (o(), s("div", Vd, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Fd, l(t.message), 1)
    ]));
  }
}), je = /* @__PURE__ */ Y(Ad, [["__scopeId", "data-v-ad8436c9"]]), Wd = { class: "error-state" }, Gd = { class: "error-message" }, jd = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, n) => (o(), s("div", Wd, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Gd, l(t.message), 1),
      t.retry ? (o(), E(Z, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => d.$emit("retry"))
      }, {
        default: a(() => [...n[1] || (n[1] = [
          p(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), He = /* @__PURE__ */ Y(jd, [["__scopeId", "data-v-5397be48"]]), Hd = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: n }) {
    const r = n, { getWorkflows: f } = $e(), y = C([]), h = C(!1), c = C(null), i = C(""), m = C(!0), w = C(!1), g = C(!1), z = C(!1), I = C(null), _ = B(
      () => y.value.filter((W) => W.status === "broken")
    ), x = B(
      () => y.value.filter((W) => W.status === "new")
    ), b = B(
      () => y.value.filter((W) => W.status === "modified")
    ), $ = B(
      () => y.value.filter((W) => W.status === "synced")
    ), A = B(() => {
      if (!i.value.trim()) return y.value;
      const W = i.value.toLowerCase();
      return y.value.filter((H) => H.name.toLowerCase().includes(W));
    }), P = B(
      () => _.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), D = B(
      () => x.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), K = B(
      () => b.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), L = B(
      () => $.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), N = B(
      () => w.value ? L.value : L.value.slice(0, 5)
    );
    async function R(W = !1) {
      h.value = !0, c.value = null;
      try {
        y.value = await f(W);
      } catch (H) {
        c.value = H instanceof Error ? H.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    d({ loadWorkflows: R });
    function M(W) {
      I.value = W, g.value = !0;
    }
    function S(W) {
      I.value = W, z.value = !0;
    }
    function U() {
      alert("Bulk resolution not yet implemented");
    }
    function F() {
      r("refresh");
    }
    function ee(W) {
      const H = [];
      return W.missing_nodes > 0 && H.push(`${W.missing_nodes} missing node${W.missing_nodes > 1 ? "s" : ""}`), W.missing_models > 0 && H.push(`${W.missing_models} missing model${W.missing_models > 1 ? "s" : ""}`), W.pending_downloads && W.pending_downloads > 0 && H.push(`${W.pending_downloads} pending download${W.pending_downloads > 1 ? "s" : ""}`), H.length > 0 ? H.join(", ") : "Has issues";
    }
    function te(W) {
      const H = W.sync_state === "new" ? "New" : W.sync_state === "modified" ? "Modified" : W.sync_state === "synced" ? "Synced" : W.sync_state;
      return W.has_path_sync_issues && W.models_needing_path_sync && W.models_needing_path_sync > 0 ? `${W.models_needing_path_sync} model path${W.models_needing_path_sync > 1 ? "s" : ""} need${W.models_needing_path_sync === 1 ? "s" : ""} sync` : H || "Unknown";
    }
    return we(R), (W, H) => (o(), s(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "WORKFLOWS" }, {
            actions: a(() => [
              _.value.length > 0 ? (o(), E(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: a(() => [...H[8] || (H[8] = [
                  p(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : u("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          v(nt, {
            modelValue: i.value,
            "onUpdate:modelValue": H[0] || (H[0] = (V) => i.value = V),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), E(je, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (o(), E(He, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            P.value.length ? (o(), E(ye, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(P.value, (V) => (o(), E(ke, {
                  key: V.name,
                  status: "broken"
                }, {
                  icon: a(() => [...H[9] || (H[9] = [
                    p("⚠", -1)
                  ])]),
                  title: a(() => [
                    p(l(V.name), 1)
                  ]),
                  subtitle: a(() => [
                    p(l(ee(V)), 1)
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => S(V.name)
                    }, {
                      default: a(() => [...H[10] || (H[10] = [
                        p(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => M(V.name)
                    }, {
                      default: a(() => [...H[11] || (H[11] = [
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
            D.value.length ? (o(), E(ye, {
              key: 1,
              title: "NEW",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(D.value, (V) => (o(), E(ke, {
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
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => M(V.name)
                    }, {
                      default: a(() => [...H[12] || (H[12] = [
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
            K.value.length ? (o(), E(ye, {
              key: 2,
              title: "MODIFIED",
              count: K.value.length
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(K.value, (V) => (o(), E(ke, {
                  key: V.name,
                  status: V.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: a(() => [...H[13] || (H[13] = [
                    p("⚡", -1)
                  ])]),
                  title: a(() => [
                    p(l(V.name), 1)
                  ]),
                  subtitle: a(() => [
                    p(l(te(V)), 1)
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => M(V.name)
                    }, {
                      default: a(() => [...H[14] || (H[14] = [
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
            L.value.length ? (o(), E(ye, {
              key: 3,
              title: "SYNCED",
              count: L.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: H[2] || (H[2] = (V) => m.value = V)
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(N.value, (V) => (o(), E(ke, {
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
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => M(V.name)
                    }, {
                      default: a(() => [...H[15] || (H[15] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && L.value.length > 5 ? (o(), E(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: H[1] || (H[1] = (V) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    p(" View all " + l(L.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : u("", !0),
            A.value.length ? u("", !0) : (o(), E(Ne, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && I.value ? (o(), E(Ya, {
        key: 0,
        "workflow-name": I.value,
        onClose: H[3] || (H[3] = (V) => g.value = !1),
        onResolve: H[4] || (H[4] = (V) => S(I.value)),
        onRefresh: H[5] || (H[5] = (V) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0),
      z.value && I.value ? (o(), E(_d, {
        key: 1,
        "workflow-name": I.value,
        onClose: H[6] || (H[6] = (V) => z.value = !1),
        onInstall: F,
        onRefresh: H[7] || (H[7] = (V) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ], 64));
  }
}), qd = /* @__PURE__ */ Y(Hd, [["__scopeId", "data-v-080576c0"]]), Kd = /* @__PURE__ */ X({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, n) => (o(), s("div", {
      class: se(["summary-bar", t.variant])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), at = /* @__PURE__ */ Y(Kd, [["__scopeId", "data-v-ccb7816e"]]), Jd = {
  key: 0,
  class: "model-details"
}, Qd = { class: "detail-section" }, Xd = { class: "detail-row" }, Yd = { class: "detail-value mono" }, Zd = { class: "detail-row" }, ec = { class: "detail-value mono" }, tc = { class: "detail-row" }, oc = { class: "detail-value mono" }, sc = { class: "detail-row" }, nc = { class: "detail-value" }, ac = { class: "detail-row" }, lc = { class: "detail-value" }, ic = { class: "detail-row" }, rc = { class: "detail-value" }, dc = { class: "detail-section" }, cc = { class: "section-header" }, uc = {
  key: 0,
  class: "locations-list"
}, mc = { class: "location-path mono" }, vc = {
  key: 0,
  class: "location-modified"
}, fc = ["onClick"], gc = {
  key: 1,
  class: "empty-state"
}, hc = { class: "detail-section" }, pc = { class: "section-header" }, yc = {
  key: 0,
  class: "sources-list"
}, wc = { class: "source-type" }, bc = ["href"], kc = ["disabled", "onClick"], _c = {
  key: 1,
  class: "empty-state"
}, $c = { class: "add-source-form" }, Cc = ["disabled"], xc = {
  key: 2,
  class: "source-error"
}, Sc = {
  key: 3,
  class: "source-success"
}, Ic = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const n = t, { getModelDetails: r, addModelSource: f, removeModelSource: y, openFileLocation: h } = $e(), c = C(null), i = C(!0), m = C(null), w = C(""), g = C(!1), z = C(null), I = C(null), _ = C(null), x = C(null);
    let b = null;
    function $(R, M = "success", S = 2e3) {
      b && clearTimeout(b), x.value = { message: R, type: M }, b = setTimeout(() => {
        x.value = null;
      }, S);
    }
    function A(R) {
      if (!R) return "Unknown";
      const M = 1024 * 1024 * 1024, S = 1024 * 1024;
      return R >= M ? `${(R / M).toFixed(1)} GB` : R >= S ? `${(R / S).toFixed(0)} MB` : `${(R / 1024).toFixed(0)} KB`;
    }
    function P(R) {
      navigator.clipboard.writeText(R), $("Copied to clipboard!");
    }
    async function D(R) {
      try {
        await h(R), $("Opening file location...");
      } catch {
        $("Failed to open location", "error");
      }
    }
    async function K() {
      if (!(!w.value.trim() || !c.value)) {
        g.value = !0, I.value = null, _.value = null;
        try {
          await f(c.value.hash, w.value.trim()), _.value = "Source added successfully!", w.value = "", await N();
        } catch (R) {
          I.value = R instanceof Error ? R.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function L(R) {
      if (c.value) {
        z.value = R, I.value = null, _.value = null;
        try {
          await y(c.value.hash, R), $("Source removed"), await N();
        } catch (M) {
          I.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          z.value = null;
        }
      }
    }
    async function N() {
      i.value = !0, m.value = null;
      try {
        c.value = await r(n.identifier);
      } catch (R) {
        m.value = R instanceof Error ? R.message : "Failed to load model details";
      } finally {
        i.value = !1;
      }
    }
    return we(N), (R, M) => {
      var S;
      return o(), s(j, null, [
        v(st, {
          title: `Model Details: ${((S = c.value) == null ? void 0 : S.filename) || "Loading..."}`,
          size: "lg",
          loading: i.value,
          error: m.value,
          onClose: M[5] || (M[5] = (U) => R.$emit("close"))
        }, {
          body: a(() => {
            var U, F, ee, te;
            return [
              c.value ? (o(), s("div", Jd, [
                e("section", Qd, [
                  e("div", Xd, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Yd, l(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (W) => P(c.value.hash))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", Zd, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", ec, l(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (W) => P(c.value.blake3))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", tc, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", oc, l(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (W) => P(c.value.sha256))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", sc, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", nc, l(A(c.value.size)), 1)
                  ]),
                  e("div", ac, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", lc, l(c.value.category), 1)
                  ]),
                  e("div", ic, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", rc, l(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", dc, [
                  e("h4", cc, "Locations (" + l(((U = c.value.locations) == null ? void 0 : U.length) || 0) + ")", 1),
                  (F = c.value.locations) != null && F.length ? (o(), s("div", uc, [
                    (o(!0), s(j, null, oe(c.value.locations, (W, H) => (o(), s("div", {
                      key: H,
                      class: "location-item"
                    }, [
                      e("span", mc, l(W.path), 1),
                      W.modified ? (o(), s("span", vc, "Modified: " + l(W.modified), 1)) : u("", !0),
                      W.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (V) => D(W.path)
                      }, " Open File Location ", 8, fc)) : u("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", gc, "No locations found"))
                ]),
                e("section", hc, [
                  e("h4", pc, "Download Sources (" + l(((ee = c.value.sources) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (te = c.value.sources) != null && te.length ? (o(), s("div", yc, [
                    (o(!0), s(j, null, oe(c.value.sources, (W, H) => (o(), s("div", {
                      key: H,
                      class: "source-item"
                    }, [
                      e("span", wc, l(W.type) + ":", 1),
                      e("a", {
                        href: W.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(W.url), 9, bc),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: z.value === W.url,
                        onClick: (V) => L(W.url)
                      }, l(z.value === W.url ? "..." : "×"), 9, kc)
                    ]))), 128))
                  ])) : (o(), s("div", _c, " No download sources configured ")),
                  e("div", $c, [
                    io(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (W) => w.value = W),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ro, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || g.value,
                      onClick: K
                    }, l(g.value ? "Adding..." : "Add Source"), 9, Cc)
                  ]),
                  I.value ? (o(), s("p", xc, l(I.value), 1)) : u("", !0),
                  _.value ? (o(), s("p", Sc, l(_.value), 1)) : u("", !0)
                ])
              ])) : u("", !0)
            ];
          }),
          footer: a(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (U) => R.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), E(_e, { to: "body" }, [
          x.value ? (o(), s("div", {
            key: 0,
            class: se(["toast", x.value.type])
          }, l(x.value.message), 3)) : u("", !0)
        ]))
      ], 64);
    };
  }
}), jt = /* @__PURE__ */ Y(Ic, [["__scopeId", "data-v-f15cbb56"]]), Ec = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const n = d, { getEnvironmentModels: r, getStatus: f } = $e(), y = C([]), h = C([]), c = C("production"), i = C(!1), m = C(null), w = C(""), g = C(!1), z = C(null);
    function I() {
      g.value = !1, n("navigate", "model-index");
    }
    const _ = B(
      () => y.value.reduce((N, R) => N + (R.size || 0), 0)
    ), x = B(() => {
      if (!w.value.trim()) return y.value;
      const N = w.value.toLowerCase();
      return y.value.filter((R) => R.filename.toLowerCase().includes(N));
    }), b = B(() => {
      if (!w.value.trim()) return h.value;
      const N = w.value.toLowerCase();
      return h.value.filter((R) => R.filename.toLowerCase().includes(N));
    }), $ = B(() => {
      const N = {};
      for (const M of x.value) {
        const S = M.type || "other";
        N[S] || (N[S] = []), N[S].push(M);
      }
      const R = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([M], [S]) => {
        const U = R.indexOf(M), F = R.indexOf(S);
        return U >= 0 && F >= 0 ? U - F : U >= 0 ? -1 : F >= 0 ? 1 : M.localeCompare(S);
      }).map(([M, S]) => ({ type: M, models: S }));
    });
    function A(N) {
      if (!N) return "Unknown";
      const R = N / (1024 * 1024);
      return R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB`;
    }
    function P(N) {
      z.value = N.hash || N.filename;
    }
    function D(N) {
      n("navigate", "model-index");
    }
    function K(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function L() {
      i.value = !0, m.value = null;
      try {
        const N = await r();
        y.value = N, h.value = [];
        const R = await f();
        c.value = R.environment || "production";
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        i.value = !1;
      }
    }
    return we(L), (N, R) => (o(), s(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (M) => g.value = !0)
          })
        ]),
        search: a(() => [
          v(nt, {
            modelValue: w.value,
            "onUpdate:modelValue": R[1] || (R[1] = (M) => w.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), E(je, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (o(), E(He, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            y.value.length ? (o(), E(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                p(" Total: " + l(y.value.length) + " models • " + l(A(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(j, null, oe($.value, (M) => (o(), E(ye, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(M.models, (S) => (o(), E(ke, {
                  key: S.hash || S.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...R[4] || (R[4] = [
                    p("📦", -1)
                  ])]),
                  title: a(() => [
                    p(l(S.filename), 1)
                  ]),
                  subtitle: a(() => [
                    p(l(A(S.size)), 1)
                  ]),
                  details: a(() => [
                    v(fe, {
                      label: "Used by:",
                      value: (S.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    v(fe, {
                      label: "Path:",
                      value: S.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => P(S)
                    }, {
                      default: a(() => [...R[5] || (R[5] = [
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
            b.value.length ? (o(), E(ye, {
              key: 1,
              title: "MISSING",
              count: b.value.length
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(b.value, (M) => (o(), E(ke, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...R[6] || (R[6] = [
                    p("⚠", -1)
                  ])]),
                  title: a(() => [
                    p(l(M.filename), 1)
                  ]),
                  subtitle: a(() => [...R[7] || (R[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var S;
                    return [
                      v(fe, {
                        label: "Required by:",
                        value: ((S = M.workflow_names) == null ? void 0 : S.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    v(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (S) => K(M.filename)
                    }, {
                      default: a(() => [...R[8] || (R[8] = [
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (S) => D(M.filename)
                    }, {
                      default: a(() => [...R[9] || (R[9] = [
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
            !x.value.length && !b.value.length ? (o(), E(Ne, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      v(Ge, {
        show: g.value,
        title: "About Environment Models",
        onClose: R[2] || (R[2] = (M) => g.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            R[10] || (R[10] = p(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(c.value) + '"', 1),
            R[11] || (R[11] = p(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          v(Z, {
            variant: "primary",
            onClick: I
          }, {
            default: a(() => [...R[12] || (R[12] = [
              p(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      z.value ? (o(), E(jt, {
        key: 0,
        identifier: z.value,
        onClose: R[3] || (R[3] = (M) => z.value = null)
      }, null, 8, ["identifier"])) : u("", !0)
    ], 64));
  }
}), Mc = /* @__PURE__ */ Y(Ec, [["__scopeId", "data-v-cb4f12b3"]]), zc = {
  key: 0,
  class: "indexing-progress"
}, Lc = { class: "progress-info" }, Tc = { class: "progress-label" }, Dc = { class: "progress-count" }, Rc = { class: "progress-bar" }, Nc = { class: "modal-content" }, Oc = { class: "modal-header" }, Uc = { class: "modal-body" }, Bc = { class: "input-group" }, Pc = { class: "current-path" }, Vc = { class: "input-group" }, Fc = { class: "modal-footer" }, Ac = { class: "modal-content" }, Wc = { class: "modal-header" }, Gc = { class: "modal-body" }, jc = { class: "input-group" }, Hc = { class: "input-group" }, qc = { class: "modal-footer" }, Kc = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: d }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: f,
      setModelsDirectory: y
    } = $e(), { addToQueue: h } = pt(), c = d, i = C([]), m = C(!1), w = C(!1), g = C(null), z = C(""), I = C(!1), _ = C(null), x = C(!1), b = C(null), $ = C(""), A = C(!1), P = C(!1), D = C(""), K = C(""), L = C(null), N = B(
      () => i.value.reduce((V, O) => V + (O.size || 0), 0)
    ), R = B(() => {
      if (!z.value.trim()) return i.value;
      const V = z.value.toLowerCase();
      return i.value.filter((O) => {
        const ae = O, Q = O.sha256 || ae.sha256_hash || "";
        return O.filename.toLowerCase().includes(V) || Q.toLowerCase().includes(V);
      });
    }), M = B(() => {
      const V = {};
      for (const ae of R.value) {
        const Q = ae.type || "other";
        V[Q] || (V[Q] = []), V[Q].push(ae);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(V).sort(([ae], [Q]) => {
        const be = O.indexOf(ae), ve = O.indexOf(Q);
        return be >= 0 && ve >= 0 ? be - ve : be >= 0 ? -1 : ve >= 0 ? 1 : ae.localeCompare(Q);
      }).map(([ae, Q]) => ({ type: ae, models: Q }));
    });
    function S(V) {
      if (!V) return "Unknown";
      const O = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return V >= O ? `${(V / O).toFixed(1)} GB` : V >= ae ? `${(V / ae).toFixed(0)} MB` : `${(V / 1024).toFixed(0)} KB`;
    }
    function U(V) {
      _.value = V.hash || V.filename;
    }
    async function F() {
      w.value = !0, g.value = null;
      try {
        const V = await r();
        await W(), V.changes > 0 && console.log(`Scan complete: ${V.changes} changes detected`);
      } catch (V) {
        g.value = V instanceof Error ? V.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function ee() {
      if ($.value.trim()) {
        A.value = !0, g.value = null;
        try {
          const V = await y($.value.trim());
          b.value = V.path, x.value = !1, $.value = "", await W(), console.log(`Directory changed: ${V.models_indexed} models indexed`), c("refresh");
        } catch (V) {
          g.value = V instanceof Error ? V.message : "Failed to change directory";
        } finally {
          A.value = !1;
        }
      }
    }
    function te() {
      if (!D.value.trim() || !K.value.trim()) return;
      const V = K.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: V,
        url: D.value.trim(),
        targetPath: K.value.trim()
      }]), D.value = "", K.value = "", P.value = !1;
    }
    async function W() {
      m.value = !0, g.value = null;
      try {
        i.value = await n();
      } catch (V) {
        g.value = V instanceof Error ? V.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function H() {
      try {
        const V = await f();
        b.value = V.path;
      } catch {
      }
    }
    return we(() => {
      W(), H();
    }), (V, O) => (o(), s(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: O[2] || (O[2] = (ae) => I.value = !0)
          }, {
            actions: a(() => [
              v(Z, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: F
              }, {
                default: a(() => [
                  p(l(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              v(Z, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (ae) => x.value = !0)
              }, {
                default: a(() => [...O[15] || (O[15] = [
                  p(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              v(Z, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (ae) => P.value = !0)
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
          L.value ? (o(), s("div", zc, [
            e("div", Lc, [
              e("span", Tc, l(L.value.message), 1),
              e("span", Dc, l(L.value.current) + "/" + l(L.value.total), 1)
            ]),
            e("div", Rc, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${L.value.current / L.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : u("", !0),
          v(nt, {
            modelValue: z.value,
            "onUpdate:modelValue": O[3] || (O[3] = (ae) => z.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value || L.value ? (o(), E(je, {
            key: 0,
            message: L.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : g.value ? (o(), E(He, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            i.value.length ? (o(), E(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                p(" Total: " + l(i.value.length) + " models • " + l(S(N.value)), 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(j, null, oe(M.value, (ae) => (o(), E(ye, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(ae.models, (Q) => (o(), E(ke, {
                  key: Q.sha256 || Q.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...O[17] || (O[17] = [
                    p("📦", -1)
                  ])]),
                  title: a(() => [
                    p(l(Q.filename), 1)
                  ]),
                  subtitle: a(() => [
                    p(l(S(Q.size)), 1)
                  ]),
                  details: a(() => [
                    v(fe, {
                      label: "Hash:",
                      value: Q.hash ? Q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (be) => U(Q)
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
            R.value.length ? u("", !0) : (o(), E(Ne, {
              key: 1,
              icon: "📭",
              message: z.value ? `No models match '${z.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      v(Ge, {
        show: I.value,
        title: "About Workspace Model Index",
        onClose: O[4] || (O[4] = (ae) => I.value = !1)
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
      _.value ? (o(), E(jt, {
        key: 0,
        identifier: _.value,
        onClose: O[5] || (O[5] = (ae) => _.value = null)
      }, null, 8, ["identifier"])) : u("", !0),
      (o(), E(_e, { to: "body" }, [
        x.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[9] || (O[9] = pe((ae) => x.value = !1, ["self"]))
        }, [
          e("div", Nc, [
            e("div", Oc, [
              O[20] || (O[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: O[6] || (O[6] = (ae) => x.value = !1)
              }, "✕")
            ]),
            e("div", Uc, [
              e("div", Bc, [
                O[21] || (O[21] = e("label", null, "Current Directory", -1)),
                e("code", Pc, l(b.value || "Not set"), 1)
              ]),
              e("div", Vc, [
                O[22] || (O[22] = e("label", null, "New Directory Path", -1)),
                v(Re, {
                  modelValue: $.value,
                  "onUpdate:modelValue": O[7] || (O[7] = (ae) => $.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              O[23] || (O[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Fc, [
              v(le, {
                variant: "secondary",
                onClick: O[8] || (O[8] = (ae) => x.value = !1)
              }, {
                default: a(() => [...O[24] || (O[24] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              v(le, {
                variant: "primary",
                disabled: !$.value.trim() || A.value,
                loading: A.value,
                onClick: ee
              }, {
                default: a(() => [
                  p(l(A.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : u("", !0)
      ])),
      (o(), E(_e, { to: "body" }, [
        P.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[14] || (O[14] = pe((ae) => P.value = !1, ["self"]))
        }, [
          e("div", Ac, [
            e("div", Wc, [
              O[25] || (O[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: O[10] || (O[10] = (ae) => P.value = !1)
              }, "✕")
            ]),
            e("div", Gc, [
              e("div", jc, [
                O[26] || (O[26] = e("label", null, "Download URL", -1)),
                v(Re, {
                  modelValue: D.value,
                  "onUpdate:modelValue": O[11] || (O[11] = (ae) => D.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Hc, [
                O[27] || (O[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                v(Re, {
                  modelValue: K.value,
                  "onUpdate:modelValue": O[12] || (O[12] = (ae) => K.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              O[28] || (O[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", qc, [
              v(le, {
                variant: "secondary",
                onClick: O[13] || (O[13] = (ae) => P.value = !1)
              }, {
                default: a(() => [...O[29] || (O[29] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              v(le, {
                variant: "primary",
                disabled: !D.value.trim() || !K.value.trim(),
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
}), Jc = /* @__PURE__ */ Y(Kc, [["__scopeId", "data-v-73b78d84"]]), Qc = { class: "node-details" }, Xc = { class: "status-row" }, Yc = {
  key: 0,
  class: "detail-row"
}, Zc = { class: "value" }, eu = { class: "detail-row" }, tu = { class: "value" }, ou = {
  key: 1,
  class: "detail-row"
}, su = { class: "value mono" }, nu = {
  key: 2,
  class: "detail-row"
}, au = ["href"], lu = {
  key: 3,
  class: "detail-row"
}, iu = { class: "value mono small" }, ru = { class: "detail-row" }, du = {
  key: 0,
  class: "value"
}, cu = {
  key: 1,
  class: "workflow-list"
}, uu = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const n = t, r = d, f = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), y = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (c, i) => (o(), E(st, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: i[1] || (i[1] = (m) => r("close"))
    }, {
      body: a(() => [
        e("div", Qc, [
          e("div", Xc, [
            i[2] || (i[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", f.value])
            }, l(y.value), 3)
          ]),
          t.node.version ? (o(), s("div", Yc, [
            i[3] || (i[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Zc, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : u("", !0),
          e("div", eu, [
            i[4] || (i[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", tu, l(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", ou, [
            i[5] || (i[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", su, l(t.node.registry_id), 1)
          ])) : u("", !0),
          t.node.repository ? (o(), s("div", nu, [
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
            ], 8, au)
          ])) : u("", !0),
          t.node.download_url ? (o(), s("div", lu, [
            i[8] || (i[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", iu, l(t.node.download_url), 1)
          ])) : u("", !0),
          i[10] || (i[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", ru, [
            i[9] || (i[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", du, " Not used in any workflows ")) : (o(), s("div", cu, [
              (o(!0), s(j, null, oe(t.node.used_in_workflows, (m) => (o(), s("span", {
                key: m,
                class: "workflow-tag"
              }, l(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: a(() => [
        v(le, {
          variant: "secondary",
          onClick: i[0] || (i[0] = (m) => r("close"))
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
}), mu = /* @__PURE__ */ Y(uu, [["__scopeId", "data-v-b342f626"]]), vu = { key: 0 }, fu = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, gu = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, hu = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: d }) {
    const n = d, { getNodes: r, trackNodeAsDev: f, installNode: y, uninstallNode: h } = $e(), c = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), i = C(!1), m = C(null), w = C(""), g = C(!1), z = C(null), I = B(() => {
      if (!w.value.trim()) return c.value.nodes;
      const M = w.value.toLowerCase();
      return c.value.nodes.filter(
        (S) => {
          var U, F;
          return S.name.toLowerCase().includes(M) || ((U = S.description) == null ? void 0 : U.toLowerCase().includes(M)) || ((F = S.repository) == null ? void 0 : F.toLowerCase().includes(M));
        }
      );
    }), _ = B(
      () => I.value.filter((M) => M.installed && M.tracked)
    ), x = B(
      () => I.value.filter((M) => !M.installed && M.tracked)
    ), b = B(
      () => I.value.filter((M) => M.installed && !M.tracked)
    );
    function $(M) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[M] || M;
    }
    function A(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function P(M) {
      z.value = M;
    }
    function D() {
      n("open-node-manager");
    }
    async function K(M) {
      if (confirm(`Track "${M}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          i.value = !0;
          const S = await f(M);
          S.status === "success" ? (alert(`Node "${M}" is now tracked as development!`), await R()) : alert(`Failed to track node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error tracking node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function L(M) {
      if (confirm(`Remove untracked node "${M}"?

This will delete the node directory from custom_nodes/.`))
        try {
          i.value = !0;
          const S = await h(M);
          S.status === "success" ? (alert(`Node "${M}" removed!`), await R()) : alert(`Failed to remove node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error removing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function N(M) {
      if (confirm(`Install node "${M}"?

This will download and install the node.`))
        try {
          i.value = !0;
          const S = await y(M);
          S.status === "success" ? (alert(`Node "${M}" installed successfully!`), await R()) : alert(`Failed to install node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error installing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function R() {
      i.value = !0, m.value = null;
      try {
        c.value = await r();
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        i.value = !1;
      }
    }
    return we(R), (M, S) => (o(), s(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (U) => g.value = !0)
          }, {
            actions: a(() => [
              v(Z, {
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: a(() => [...S[5] || (S[5] = [
                  p(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          v(nt, {
            modelValue: w.value,
            "onUpdate:modelValue": S[1] || (S[1] = (U) => w.value = U),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), E(je, {
            key: 0,
            message: "Loading nodes..."
          })) : m.value ? (o(), E(He, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            c.value.total_count ? (o(), E(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                p(l(c.value.installed_count) + " installed ", 1),
                c.value.missing_count ? (o(), s(j, { key: 0 }, [
                  p(" • " + l(c.value.missing_count) + " missing", 1)
                ], 64)) : u("", !0),
                c.value.untracked_count ? (o(), s(j, { key: 1 }, [
                  p(" • " + l(c.value.untracked_count) + " untracked", 1)
                ], 64)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            b.value.length ? (o(), E(ye, {
              key: 1,
              title: "UNTRACKED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(b.value, (U) => (o(), E(ke, {
                  key: U.name,
                  status: "warning"
                }, {
                  icon: a(() => [...S[6] || (S[6] = [
                    p("?", -1)
                  ])]),
                  title: a(() => [
                    p(l(U.name), 1)
                  ]),
                  subtitle: a(() => [...S[7] || (S[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: a(() => [
                    v(fe, {
                      label: "Used by:",
                      value: A(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => P(U)
                    }, {
                      default: a(() => [...S[8] || (S[8] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => K(U.name)
                    }, {
                      default: a(() => [...S[9] || (S[9] = [
                        p(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (F) => L(U.name)
                    }, {
                      default: a(() => [...S[10] || (S[10] = [
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
            _.value.length ? (o(), E(ye, {
              key: 2,
              title: "INSTALLED",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(_.value, (U) => (o(), E(ke, {
                  key: U.name,
                  status: "synced"
                }, {
                  icon: a(() => [
                    p(l(U.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: a(() => [
                    p(l(U.name), 1)
                  ]),
                  subtitle: a(() => [
                    U.version ? (o(), s("span", vu, l(U.source === "development" ? "" : "v") + l(U.version), 1)) : (o(), s("span", fu, "version unknown")),
                    e("span", gu, " • " + l($(U.source)), 1)
                  ]),
                  details: a(() => [
                    v(fe, {
                      label: "Used by:",
                      value: A(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => P(U)
                    }, {
                      default: a(() => [...S[11] || (S[11] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: D
                    }, {
                      default: a(() => [...S[12] || (S[12] = [
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
            x.value.length ? (o(), E(ye, {
              key: 3,
              title: "MISSING",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(x.value, (U) => (o(), E(ke, {
                  key: U.name,
                  status: "missing"
                }, {
                  icon: a(() => [...S[13] || (S[13] = [
                    p("!", -1)
                  ])]),
                  title: a(() => [
                    p(l(U.name), 1)
                  ]),
                  subtitle: a(() => [...S[14] || (S[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: a(() => [
                    v(fe, {
                      label: "Required by:",
                      value: A(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => P(U)
                    }, {
                      default: a(() => [...S[15] || (S[15] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => N(U.name)
                    }, {
                      default: a(() => [...S[16] || (S[16] = [
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
            !_.value.length && !x.value.length && !b.value.length ? (o(), E(Ne, {
              key: 4,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      v(Ge, {
        show: g.value,
        title: "About Custom Nodes",
        onClose: S[3] || (S[3] = (U) => g.value = !1)
      }, {
        content: a(() => [...S[17] || (S[17] = [
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
          v(Z, {
            variant: "primary",
            onClick: S[2] || (S[2] = (U) => g.value = !1)
          }, {
            default: a(() => [...S[18] || (S[18] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      z.value ? (o(), E(mu, {
        key: 0,
        node: z.value,
        onClose: S[4] || (S[4] = (U) => z.value = null)
      }, null, 8, ["node"])) : u("", !0)
    ], 64));
  }
}), pu = /* @__PURE__ */ Y(hu, [["__scopeId", "data-v-4ac1465a"]]), yu = { class: "remote-url-display" }, wu = ["title"], bu = ["title"], ku = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, _u = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, $u = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, n = C(!1), r = B(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const y = d.url.slice(0, Math.floor(d.maxLength * 0.6)), h = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${y}...${h}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(d.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, h) => (o(), s("div", yu, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, wu),
      e("button", {
        class: se(["copy-btn", { copied: n.value }]),
        onClick: f,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", _u, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", ku, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, bu)
    ]));
  }
}), Ot = /* @__PURE__ */ Y($u, [["__scopeId", "data-v-7768a58d"]]), Cu = { class: "remote-title" }, xu = {
  key: 0,
  class: "default-badge"
}, Su = {
  key: 1,
  class: "sync-badge"
}, Iu = {
  key: 0,
  class: "ahead"
}, Eu = {
  key: 1,
  class: "behind"
}, Mu = {
  key: 0,
  class: "tracking-info"
}, zu = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const n = t, r = B(() => n.fetchingRemote === n.remote.name), f = B(() => n.remote.is_default), y = B(() => !!n.trackingBranch);
    function h(c) {
      const i = new Date(c), w = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), g = Math.floor(w / 6e4);
      if (g < 1) return "Just now";
      if (g < 60) return `${g}m ago`;
      const z = Math.floor(g / 60);
      if (z < 24) return `${z}h ago`;
      const I = Math.floor(z / 24);
      return I < 7 ? `${I}d ago` : i.toLocaleDateString();
    }
    return (c, i) => (o(), E(ke, {
      status: f.value ? "synced" : void 0
    }, {
      icon: a(() => [
        p(l(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", Cu, [
          e("span", null, l(t.remote.name), 1),
          f.value ? (o(), s("span", xu, "DEFAULT")) : u("", !0),
          t.syncStatus ? (o(), s("span", Su, [
            t.syncStatus.ahead > 0 ? (o(), s("span", Iu, "↑" + l(t.syncStatus.ahead), 1)) : u("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", Eu, "↓" + l(t.syncStatus.behind), 1)) : u("", !0)
          ])) : u("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), s("span", Mu, " Tracking: " + l(t.trackingBranch), 1)) : u("", !0)
      ]),
      details: a(() => {
        var m;
        return [
          v(fe, { label: "Fetch:" }, {
            default: a(() => [
              v(Ot, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), E(fe, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              v(Ot, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : u("", !0),
          (m = t.syncStatus) != null && m.last_fetch ? (o(), E(fe, {
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
        v(Z, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: i[0] || (i[0] = (m) => c.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...i[3] || (i[3] = [
            p(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        v(Z, {
          variant: "secondary",
          size: "xs",
          onClick: i[1] || (i[1] = (m) => c.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...i[4] || (i[4] = [
            p(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        f.value ? u("", !0) : (o(), E(Z, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: i[2] || (i[2] = (m) => c.$emit("remove", t.remote.name))
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
}), Lu = /* @__PURE__ */ Y(zu, [["__scopeId", "data-v-17362e45"]]), Tu = ["for"], Du = {
  key: 0,
  class: "base-form-field-required"
}, Ru = { class: "base-form-field-input" }, Nu = {
  key: 1,
  class: "base-form-field-error"
}, Ou = {
  key: 2,
  class: "base-form-field-hint"
}, Uu = /* @__PURE__ */ X({
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
    const d = t, n = B(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, f) => (o(), s("div", {
      class: se(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        p(l(t.label) + " ", 1),
        t.required ? (o(), s("span", Du, "*")) : u("", !0)
      ], 8, Tu)) : u("", !0),
      e("div", Ru, [
        re(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Nu, l(t.error), 1)) : t.hint ? (o(), s("span", Ou, l(t.hint), 1)) : u("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ Y(Uu, [["__scopeId", "data-v-9a1cf296"]]), Bu = { class: "remote-form" }, Pu = { class: "form-header" }, Vu = { class: "form-body" }, Fu = {
  key: 0,
  class: "form-error"
}, Au = { class: "form-actions" }, Wu = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const n = t, r = d, f = C({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), y = C(!1), h = C(null);
    Et(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      f.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const c = B(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function i() {
      if (!(!c.value || y.value)) {
        h.value = null, y.value = !0;
        try {
          r("submit", f.value);
        } catch (m) {
          h.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (m, w) => (o(), s("div", Bu, [
      e("div", Pu, [
        v(Ee, null, {
          default: a(() => [
            p(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Vu, [
        v($t, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            v(Re, {
              modelValue: f.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (g) => f.value.name = g),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        v($t, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            v(Re, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (g) => f.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v($t, { label: "Push URL (optional)" }, {
          default: a(() => [
            v(Re, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (g) => f.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), s("div", Fu, l(h.value), 1)) : u("", !0)
      ]),
      e("div", Au, [
        v(Z, {
          variant: "primary",
          size: "md",
          disabled: !c.value,
          loading: y.value,
          onClick: i
        }, {
          default: a(() => [
            p(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        v(Z, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (g) => m.$emit("cancel"))
        }, {
          default: a(() => [...w[4] || (w[4] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Gu = /* @__PURE__ */ Y(Wu, [["__scopeId", "data-v-56021b18"]]), ju = { key: 0 }, Hu = /* @__PURE__ */ X({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: f,
      fetchRemote: y,
      getRemoteSyncStatus: h
    } = $e(), c = C([]), i = C(null), m = C({}), w = C(!1), g = C(null), z = C(""), I = C(!1), _ = C(null), x = C(!1), b = C("add"), $ = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), A = B(() => {
      if (!z.value.trim()) return c.value;
      const F = z.value.toLowerCase();
      return c.value.filter(
        (ee) => ee.name.toLowerCase().includes(F) || ee.fetch_url.toLowerCase().includes(F) || ee.push_url.toLowerCase().includes(F)
      );
    });
    function P(F) {
      var ee;
      return ((ee = i.value) == null ? void 0 : ee.remote) === F;
    }
    async function D() {
      w.value = !0, g.value = null;
      try {
        const F = await d();
        c.value = F.remotes, i.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (ee) => {
            const te = await h(ee.name);
            te && (m.value[ee.name] = te);
          })
        );
      } catch (F) {
        g.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        w.value = !1;
      }
    }
    function K() {
      b.value = "add", $.value = { name: "", fetchUrl: "", pushUrl: "" }, x.value = !0;
    }
    function L(F) {
      const ee = c.value.find((te) => te.name === F);
      ee && (b.value = "edit", $.value = {
        name: ee.name,
        fetchUrl: ee.fetch_url,
        pushUrl: ee.push_url
      }, x.value = !0);
    }
    async function N(F) {
      try {
        b.value === "add" ? await n(F.name, F.fetchUrl) : await f(F.name, F.fetchUrl, F.pushUrl || void 0), x.value = !1, await D();
      } catch (ee) {
        g.value = ee instanceof Error ? ee.message : "Operation failed";
      }
    }
    function R() {
      x.value = !1, $.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function M(F) {
      _.value = F;
      try {
        await y(F);
        const ee = await h(F);
        ee && (m.value[F] = ee);
      } catch (ee) {
        g.value = ee instanceof Error ? ee.message : "Fetch failed";
      } finally {
        _.value = null;
      }
    }
    async function S(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await r(F), await D();
        } catch (ee) {
          g.value = ee instanceof Error ? ee.message : "Failed to remove remote";
        }
    }
    function U() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return we(D), (F, ee) => (o(), s(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ee[0] || (ee[0] = (te) => I.value = !0)
          }, {
            actions: a(() => [
              x.value ? u("", !0) : (o(), E(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: K
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
          x.value ? u("", !0) : (o(), E(nt, {
            key: 0,
            modelValue: z.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (te) => z.value = te),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          w.value ? (o(), E(je, {
            key: 0,
            message: "Loading remotes..."
          })) : g.value ? (o(), E(He, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            x.value ? (o(), E(Gu, {
              key: 0,
              mode: b.value,
              "remote-name": $.value.name,
              "fetch-url": $.value.fetchUrl,
              "push-url": $.value.pushUrl,
              onSubmit: N,
              onCancel: R
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : u("", !0),
            c.value.length && !x.value ? (o(), E(at, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                p(" Total: " + l(c.value.length) + " remote" + l(c.value.length !== 1 ? "s" : "") + " ", 1),
                i.value ? (o(), s("span", ju, " • Tracking: " + l(i.value.remote) + "/" + l(i.value.branch), 1)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            A.value.length && !x.value ? (o(), E(ye, {
              key: 2,
              title: "REMOTES",
              count: A.value.length
            }, {
              default: a(() => [
                (o(!0), s(j, null, oe(A.value, (te) => {
                  var W;
                  return o(), E(Lu, {
                    key: te.name,
                    remote: te,
                    "sync-status": m.value[te.name],
                    "tracking-branch": P(te.name) ? (W = i.value) == null ? void 0 : W.branch : void 0,
                    "fetching-remote": _.value,
                    onFetch: M,
                    onEdit: L,
                    onRemove: S
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !A.value.length && !x.value ? (o(), E(Ne, {
              key: 3,
              icon: "🌐",
              message: z.value ? `No remotes match '${z.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "primary",
                  onClick: K
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
      v(Ge, {
        show: I.value,
        title: "About Git Remotes",
        onClose: ee[2] || (ee[2] = (te) => I.value = !1)
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
          v(Z, {
            variant: "link",
            onClick: U
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
}), qu = /* @__PURE__ */ Y(Hu, [["__scopeId", "data-v-a75719bb"]]), Ku = { class: "setting-info" }, Ju = { class: "setting-label" }, Qu = {
  key: 0,
  class: "required-marker"
}, Xu = {
  key: 0,
  class: "setting-description"
}, Yu = { class: "setting-control" }, Zu = /* @__PURE__ */ X({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, n) => (o(), s("div", {
      class: se(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Ku, [
        e("div", Ju, [
          p(l(t.label) + " ", 1),
          t.required ? (o(), s("span", Qu, "*")) : u("", !0)
        ]),
        t.description ? (o(), s("div", Xu, l(t.description), 1)) : u("", !0)
      ]),
      e("div", Yu, [
        re(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ae = /* @__PURE__ */ Y(Zu, [["__scopeId", "data-v-cb5d236c"]]), em = { class: "toggle" }, tm = ["checked", "disabled"], om = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, n) => (o(), s("label", em, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, tm),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Xe = /* @__PURE__ */ Y(om, [["__scopeId", "data-v-71c0f550"]]), sm = { class: "settings-section" }, nm = { class: "path-setting" }, am = { class: "path-value" }, lm = { class: "path-setting" }, im = { class: "path-value" }, rm = { class: "settings-section" }, dm = { class: "settings-section" }, cm = { class: "settings-section" }, um = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: n } = $e(), r = C(!1), f = C(null), y = C(null), h = C(null), c = C(null), i = C(""), m = C(""), w = C(!0), g = C(!0), z = C(!1), I = B(() => c.value ? i.value !== (c.value.civitai_api_key || "") : !1);
    async function _() {
      r.value = !0, f.value = null;
      try {
        h.value = await d(), c.value = { ...h.value }, i.value = h.value.civitai_api_key || "", m.value = h.value.huggingface_token || "", w.value = h.value.auto_sync_models, g.value = h.value.confirm_destructive;
        const A = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        z.value = A === "true";
      } catch (A) {
        f.value = A instanceof Error ? A.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function x() {
      var A;
      y.value = null;
      try {
        const P = {};
        i.value !== (((A = c.value) == null ? void 0 : A.civitai_api_key) || "") && (P.civitai_api_key = i.value || null), await n(P), await _(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (P) {
        y.value = {
          type: "error",
          message: P instanceof Error ? P.message : "Failed to save settings"
        };
      }
    }
    function b() {
      c.value && (i.value = c.value.civitai_api_key || "", m.value = c.value.huggingface_token || "", w.value = c.value.auto_sync_models, g.value = c.value.confirm_destructive, y.value = null);
    }
    function $(A) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(A)), console.log("[ComfyGit] Auto-refresh setting saved:", A);
    }
    return we(_), (A, P) => (o(), E(Ce, null, {
      header: a(() => [
        v(xe, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            v(Z, {
              variant: "primary",
              size: "sm",
              disabled: !I.value,
              onClick: x
            }, {
              default: a(() => [...P[5] || (P[5] = [
                p(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            I.value ? (o(), E(Z, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: b
            }, {
              default: a(() => [...P[6] || (P[6] = [
                p(" Reset ", -1)
              ])]),
              _: 1
            })) : u("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        r.value ? (o(), E(je, {
          key: 0,
          message: "Loading workspace settings..."
        })) : f.value ? (o(), E(He, {
          key: 1,
          message: f.value,
          retry: !0,
          onRetry: _
        }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
          v(ye, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var D, K;
              return [
                e("div", sm, [
                  e("div", nm, [
                    P[7] || (P[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    P[8] || (P[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", am, l(((D = h.value) == null ? void 0 : D.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", lm, [
                    P[9] || (P[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    P[10] || (P[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", im, l(((K = h.value) == null ? void 0 : K.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          v(ye, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", rm, [
                v(Ae, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    v(ht, {
                      modelValue: i.value,
                      "onUpdate:modelValue": P[0] || (P[0] = (D) => i.value = D),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(Ae, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(ht, {
                      modelValue: m.value,
                      "onUpdate:modelValue": P[1] || (P[1] = (D) => m.value = D),
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
          v(ye, { title: "UI SETTINGS" }, {
            default: a(() => [
              e("div", dm, [
                v(Ae, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    v(Xe, {
                      modelValue: z.value,
                      "onUpdate:modelValue": [
                        P[2] || (P[2] = (D) => z.value = D),
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
          v(ye, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", cm, [
                v(Ae, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Xe, {
                      modelValue: w.value,
                      "onUpdate:modelValue": P[3] || (P[3] = (D) => w.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(Ae, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Xe, {
                      modelValue: g.value,
                      "onUpdate:modelValue": P[4] || (P[4] = (D) => g.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), E(at, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: qe({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : u("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), mm = /* @__PURE__ */ Y(um, [["__scopeId", "data-v-7861bd35"]]), vm = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = $e(), n = C([]), r = C(!1), f = C(null), y = C(!1), h = C(null), c = B(() => n.value.length === 0 ? [] : n.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      r.value = !0, f.value = null;
      try {
        n.value = await d(void 0, 500);
      } catch (m) {
        f.value = m instanceof Error ? m.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var m;
          (m = h.value) != null && m.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return we(i), (m, w) => (o(), s(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (g) => y.value = !0)
          }, {
            actions: a(() => [
              v(Z, {
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
          r.value ? (o(), E(je, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (o(), E(He, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: i
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            n.value.length === 0 ? (o(), E(Ne, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(j, null, oe(c.value, (g, z) => (o(), s("div", {
                key: z,
                class: se(`log-line log-level-${g.level.toLowerCase()}`)
              }, l(g.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(Ge, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: w[2] || (w[2] = (g) => y.value = !1)
      }, {
        content: a(() => [...w[3] || (w[3] = [
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
          v(Z, {
            variant: "primary",
            onClick: w[1] || (w[1] = (g) => y.value = !1)
          }, {
            default: a(() => [...w[4] || (w[4] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), fm = /* @__PURE__ */ Y(vm, [["__scopeId", "data-v-39f6a756"]]), gm = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: n } = $e(), r = C([]), f = C(!1), y = C(null), h = C(!1), c = C("production"), i = C(null), m = B(() => r.value.length === 0 ? [] : r.value.map((g) => ({
      text: `${g.timestamp} - ${g.name} - ${g.level} - ${g.func}:${g.line} - ${g.message}`,
      level: g.level
    })));
    async function w() {
      f.value = !0, y.value = null;
      try {
        r.value = await d(void 0, 500);
        try {
          const g = await n();
          c.value = g.environment || "production";
        } catch {
        }
      } catch (g) {
        y.value = g instanceof Error ? g.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var g;
          (g = i.value) != null && g.parentElement && (i.value.parentElement.scrollTop = i.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return we(w), (g, z) => (o(), s(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (I) => h.value = !0)
          }, {
            actions: a(() => [
              v(Z, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: f.value
              }, {
                default: a(() => [
                  p(l(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          f.value ? (o(), E(je, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), E(He, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
            r.value.length === 0 ? (o(), E(Ne, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: i,
              class: "log-output"
            }, [
              (o(!0), s(j, null, oe(m.value, (I, _) => (o(), s("div", {
                key: _,
                class: se(`log-line log-level-${I.level.toLowerCase()}`)
              }, l(I.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(Ge, {
        show: h.value,
        title: "About Environment Logs",
        onClose: z[2] || (z[2] = (I) => h.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            z[3] || (z[3] = p(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(c.value), 1),
            z[4] || (z[4] = p(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          z[5] || (z[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          z[6] || (z[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          v(Z, {
            variant: "primary",
            onClick: z[1] || (z[1] = (I) => h.value = !1)
          }, {
            default: a(() => [...z[7] || (z[7] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), hm = /* @__PURE__ */ Y(gm, [["__scopeId", "data-v-4f1e6f72"]]), pm = { class: "env-title" }, ym = {
  key: 0,
  class: "current-badge"
}, wm = {
  key: 0,
  class: "branch-info"
}, bm = /* @__PURE__ */ X({
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
    return (d, n) => (o(), E(ke, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        p(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", pm, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", ym, "CURRENT")) : u("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), s("span", wm, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          p(" " + l(t.currentBranch), 1)
        ])) : u("", !0)
      ]),
      details: a(() => [
        v(fe, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        v(fe, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        v(fe, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), E(fe, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : u("", !0)
      ]),
      actions: a(() => [
        re(d.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), km = /* @__PURE__ */ Y(bm, [["__scopeId", "data-v-5238e57c"]]), _m = {
  key: 0,
  class: "create-form"
}, $m = { class: "create-form__header" }, Cm = { class: "create-form__body" }, xm = { class: "create-form__actions" }, Sm = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Im = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const n = d, { getEnvironments: r } = $e(), f = C([]), y = C(!1), h = C(null), c = C(""), i = C(!1), m = C(!1), w = C(""), g = B(
      () => f.value.find((P) => P.is_current)
    ), z = B(() => {
      if (!c.value.trim()) return f.value;
      const P = c.value.toLowerCase();
      return f.value.filter(
        (D) => {
          var K;
          return D.name.toLowerCase().includes(P) || ((K = D.current_branch) == null ? void 0 : K.toLowerCase().includes(P));
        }
      );
    });
    function I(P) {
      if (!P) return "";
      try {
        const D = new Date(P), L = (/* @__PURE__ */ new Date()).getTime() - D.getTime(), N = Math.floor(L / 6e4), R = Math.floor(L / 36e5), M = Math.floor(L / 864e5);
        return N < 1 ? "just now" : N < 60 ? `${N} ${N === 1 ? "minute" : "minutes"} ago` : R < 24 ? `${R} ${R === 1 ? "hour" : "hours"} ago` : M < 30 ? `${M} ${M === 1 ? "day" : "days"} ago` : D.toLocaleDateString();
      } catch {
        return P;
      }
    }
    function _() {
      const P = w.value.trim();
      P && (n("create", P), w.value = "", m.value = !1);
    }
    function x() {
      w.value = "", m.value = !1;
    }
    function b(P) {
      n("viewDetails", P);
    }
    function $(P) {
      confirm(`Delete environment "${P}"?

This action cannot be undone.`) && n("delete", P);
    }
    async function A() {
      y.value = !0, h.value = null;
      try {
        f.value = await r();
      } catch (P) {
        h.value = P instanceof Error ? P.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return we(A), (P, D) => {
      const K = co("SectionGroup");
      return o(), s(j, null, [
        v(Ce, null, {
          header: a(() => [
            v(xe, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: D[1] || (D[1] = (L) => i.value = !0)
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "ghost",
                  size: "sm",
                  onClick: D[0] || (D[0] = (L) => m.value = !0),
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
                v(Z, {
                  variant: "ghost",
                  size: "sm",
                  onClick: A,
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
            v(nt, {
              modelValue: c.value,
              "onUpdate:modelValue": D[2] || (D[2] = (L) => c.value = L),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), E(je, {
              key: 0,
              message: "Loading environments..."
            })) : h.value ? (o(), E(He, {
              key: 1,
              message: h.value,
              retry: !0,
              onRetry: A
            }, null, 8, ["message"])) : (o(), s(j, { key: 2 }, [
              m.value ? (o(), s("div", _m, [
                e("div", $m, [
                  D[10] || (D[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  v(Z, {
                    variant: "ghost",
                    size: "xs",
                    onClick: x
                  }, {
                    default: a(() => [...D[9] || (D[9] = [
                      p(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", Cm, [
                  v(ht, {
                    modelValue: w.value,
                    "onUpdate:modelValue": D[3] || (D[3] = (L) => w.value = L),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      We(_, ["enter"]),
                      We(x, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", xm, [
                    v(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: _,
                      disabled: !w.value.trim()
                    }, {
                      default: a(() => [...D[11] || (D[11] = [
                        p(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: x
                    }, {
                      default: a(() => [...D[12] || (D[12] = [
                        p(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : u("", !0),
              f.value.length ? (o(), E(at, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  p(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                  g.value ? (o(), s(j, { key: 0 }, [
                    D[13] || (D[13] = p(" • Current: ", -1)),
                    e("strong", null, l(g.value.name), 1)
                  ], 64)) : u("", !0)
                ]),
                _: 1
              })) : u("", !0),
              z.value.length ? (o(), E(K, {
                key: 2,
                title: "ENVIRONMENTS",
                count: z.value.length
              }, {
                default: a(() => [
                  (o(!0), s(j, null, oe(z.value, (L) => (o(), E(km, {
                    key: L.name,
                    "environment-name": L.name,
                    "is-current": L.is_current,
                    "current-branch": L.current_branch,
                    "workflow-count": L.workflow_count,
                    "node-count": L.node_count,
                    "model-count": L.model_count,
                    "last-used": I(L.last_used),
                    "show-last-used": !!L.last_used
                  }, {
                    actions: a(() => [
                      L.is_current ? u("", !0) : (o(), E(Z, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (N) => P.$emit("switch", L.name)
                      }, {
                        default: a(() => [...D[14] || (D[14] = [
                          p(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      v(Z, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (N) => b(L.name),
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
                      !L.is_current && f.value.length > 1 ? (o(), E(Z, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (N) => $(L.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), s("svg", Sm, [...D[16] || (D[16] = [
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
              z.value.length ? u("", !0) : (o(), E(Ne, {
                key: 3,
                icon: "🌍",
                message: c.value ? `No environments match '${c.value}'` : "No environments found. Create one to get started!"
              }, Mt({ _: 2 }, [
                c.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    v(Z, {
                      variant: "primary",
                      onClick: D[4] || (D[4] = (L) => m.value = !0)
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
        v(Ge, {
          show: i.value,
          title: "About Environments",
          onClose: D[6] || (D[6] = (L) => i.value = !1)
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
            v(Z, {
              variant: "secondary",
              onClick: D[5] || (D[5] = (L) => i.value = !1)
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
}), Em = /* @__PURE__ */ Y(Im, [["__scopeId", "data-v-97d6527d"]]), Mm = { class: "file-path" }, zm = { class: "file-path-text" }, Lm = ["title"], Tm = /* @__PURE__ */ X({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, n = C(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(d.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, y) => (o(), s("div", Mm, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", zm, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(n.value ? "✓" : "📋"), 9, Lm)) : u("", !0)
    ]));
  }
}), Dm = /* @__PURE__ */ Y(Tm, [["__scopeId", "data-v-f0982173"]]), Rm = { class: "output-path-input" }, Nm = { class: "export-actions" }, Om = {
  key: 1,
  class: "export-warning"
}, Um = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = $e(), n = C(""), r = C(!1), f = C(null), y = C(!1);
    async function h() {
      r.value = !0, f.value = null;
      try {
        const i = await d(n.value || void 0);
        f.value = i;
      } catch (i) {
        f.value = {
          status: "error",
          message: i instanceof Error ? i.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function c() {
      var i;
      if ((i = f.value) != null && i.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (m) {
          console.error("Failed to copy path:", m);
        }
    }
    return (i, m) => (o(), s(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              v(Z, {
                variant: "ghost",
                size: "sm",
                onClick: m[0] || (m[0] = (w) => y.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...m[5] || (m[5] = [
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
          v(ye, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              v(ke, { status: "synced" }, {
                icon: a(() => [...m[6] || (m[6] = [
                  p("📦", -1)
                ])]),
                title: a(() => [...m[7] || (m[7] = [
                  p("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...m[8] || (m[8] = [
                  p(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  v(fe, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  v(fe, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  v(fe, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  v(fe, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          v(ye, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              v(ke, { status: "synced" }, {
                icon: a(() => [...m[9] || (m[9] = [
                  p("📁", -1)
                ])]),
                title: a(() => [...m[10] || (m[10] = [
                  p("Output Destination", -1)
                ])]),
                subtitle: a(() => [...m[11] || (m[11] = [
                  p(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", Rm, [
                    v(ht, {
                      modelValue: n.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (w) => n.value = w),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          v(ye, { title: "EXPORT" }, {
            default: a(() => [
              e("div", Nm, [
                v(Z, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
                }, {
                  default: a(() => [
                    m[12] || (m[12] = e("svg", {
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
                n.value ? (o(), E(Z, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: m[2] || (m[2] = (w) => n.value = "")
                }, {
                  default: a(() => [...m[13] || (m[13] = [
                    p(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : u("", !0)
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), E(ye, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              v(ke, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Mt({
                icon: a(() => [
                  p(l(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  p(l(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  p(l(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    v(fe, { label: "Saved to:" }, {
                      default: a(() => [
                        v(Dm, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (o(), E(fe, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : u("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), s("div", Om, [...m[14] || (m[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : u("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: c
                    }, {
                      default: a(() => [...m[15] || (m[15] = [
                        p(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    v(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m[3] || (m[3] = (w) => f.value = null)
                    }, {
                      default: a(() => [...m[16] || (m[16] = [
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
      v(Ge, {
        show: y.value,
        title: "About Environment Export",
        onClose: m[4] || (m[4] = (w) => y.value = !1)
      }, {
        content: a(() => [...m[17] || (m[17] = [
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
}), Bm = /* @__PURE__ */ Y(Um, [["__scopeId", "data-v-1777a9d5"]]), Pm = { class: "file-input-wrapper" }, Vm = ["accept", "multiple", "disabled"], Fm = /* @__PURE__ */ X({
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
  setup(t, { expose: d, emit: n }) {
    const r = n, f = C(null);
    function y() {
      var c;
      (c = f.value) == null || c.click();
    }
    function h(c) {
      const i = c.target;
      i.files && i.files.length > 0 && (r("change", i.files), i.value = "");
    }
    return d({
      triggerInput: y
    }), (c, i) => (o(), s("div", Pm, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Vm),
      v(Z, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          re(c.$slots, "default", {}, () => [
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
}), Am = /* @__PURE__ */ Y(Fm, [["__scopeId", "data-v-cd192091"]]), Wm = {
  key: 0,
  class: "drop-zone-empty"
}, Gm = { class: "drop-zone-text" }, jm = { class: "drop-zone-primary" }, Hm = { class: "drop-zone-secondary" }, qm = { class: "drop-zone-actions" }, Km = {
  key: 1,
  class: "drop-zone-file"
}, Jm = { class: "file-info" }, Qm = { class: "file-details" }, Xm = { class: "file-name" }, Ym = { class: "file-size" }, Zm = /* @__PURE__ */ X({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: d }) {
    const n = d, r = C(!1), f = C(null), y = C(0), h = B(() => f.value !== null), c = B(() => {
      var b;
      return ((b = f.value) == null ? void 0 : b.name) || "";
    }), i = B(() => {
      if (!f.value) return "";
      const b = f.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(b) {
      var $;
      y.value++, ($ = b.dataTransfer) != null && $.types.includes("Files") && (r.value = !0);
    }
    function w(b) {
      b.dataTransfer && (b.dataTransfer.dropEffect = "copy");
    }
    function g() {
      y.value--, y.value === 0 && (r.value = !1);
    }
    function z(b) {
      var A;
      y.value = 0, r.value = !1;
      const $ = (A = b.dataTransfer) == null ? void 0 : A.files;
      $ && $.length > 0 && _($[0]);
    }
    function I(b) {
      b.length > 0 && _(b[0]);
    }
    function _(b) {
      f.value = b, n("fileSelected", b);
    }
    function x() {
      f.value = null, n("clear");
    }
    return (b, $) => (o(), s("div", {
      class: se(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: pe(m, ["prevent"]),
      onDragover: pe(w, ["prevent"]),
      onDragleave: pe(g, ["prevent"]),
      onDrop: pe(z, ["prevent"])
    }, [
      h.value ? (o(), s("div", Km, [
        e("div", Jm, [
          $[1] || ($[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Qm, [
            e("div", Xm, l(c.value), 1),
            e("div", Ym, l(i.value), 1)
          ])
        ]),
        v(Z, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: a(() => [...$[2] || ($[2] = [
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
      ])) : (o(), s("div", Wm, [
        $[0] || ($[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Gm, [
          e("p", jm, l(t.primaryText), 1),
          e("p", Hm, l(t.secondaryText), 1)
        ]),
        e("div", qm, [
          v(Am, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: I
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
}), ev = /* @__PURE__ */ Y(Zm, [["__scopeId", "data-v-e00abbca"]]), tv = { class: "import-preview" }, ov = { class: "preview-header" }, sv = {
  key: 0,
  class: "source-env"
}, nv = { class: "preview-content" }, av = { class: "preview-section" }, lv = { class: "section-header" }, iv = { class: "section-info" }, rv = { class: "section-count" }, dv = {
  key: 0,
  class: "item-list"
}, cv = { class: "item-name" }, uv = {
  key: 0,
  class: "item-more"
}, mv = { class: "preview-section" }, vv = { class: "section-header" }, fv = { class: "section-info" }, gv = { class: "section-count" }, hv = {
  key: 0,
  class: "item-list"
}, pv = { class: "item-details" }, yv = { class: "item-name" }, wv = { class: "item-meta" }, bv = {
  key: 0,
  class: "item-more"
}, kv = { class: "preview-section" }, _v = { class: "section-header" }, $v = { class: "section-info" }, Cv = { class: "section-count" }, xv = {
  key: 0,
  class: "item-list"
}, Sv = { class: "item-name" }, Iv = {
  key: 0,
  class: "item-more"
}, Ev = {
  key: 0,
  class: "preview-section"
}, Mv = { class: "git-info" }, zv = /* @__PURE__ */ X({
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
    const d = t, n = B(() => d.workflows.length), r = B(() => d.models.length), f = B(() => d.nodes.length);
    function y(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, c) => (o(), s("div", tv, [
      e("div", ov, [
        v(Ee, null, {
          default: a(() => [...c[0] || (c[0] = [
            p("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", sv, [
          c[1] || (c[1] = p(" From: ", -1)),
          v(St, null, {
            default: a(() => [
              p(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : u("", !0)
      ]),
      e("div", nv, [
        e("div", av, [
          e("div", lv, [
            c[3] || (c[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", iv, [
              c[2] || (c[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", rv, l(n.value) + " file" + l(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", dv, [
            (o(!0), s(j, null, oe(t.workflows.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              c[4] || (c[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", cv, l(i), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", uv, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", mv, [
          e("div", vv, [
            c[6] || (c[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", fv, [
              c[5] || (c[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", gv, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", hv, [
            (o(!0), s(j, null, oe(t.models.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", pv, [
                e("span", yv, l(i.filename), 1),
                e("span", wv, l(y(i.size)) + " • " + l(i.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", bv, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", kv, [
          e("div", _v, [
            c[9] || (c[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", $v, [
              c[8] || (c[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Cv, l(f.value) + " node" + l(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", xv, [
            (o(!0), s(j, null, oe(t.nodes.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              c[10] || (c[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Sv, l(i), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", Iv, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", Ev, [
          c[11] || (c[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Mv, [
            t.gitBranch ? (o(), E(fe, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                v(St, null, {
                  default: a(() => [
                    p(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : u("", !0),
            t.gitCommit ? (o(), E(fe, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                v(At, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : u("", !0)
          ])
        ])) : u("", !0)
      ])
    ]));
  }
}), Lv = /* @__PURE__ */ Y(zv, [["__scopeId", "data-v-182fe113"]]), Tv = { class: "import-options" }, Dv = { class: "options-container" }, Rv = { class: "option-section" }, Nv = { class: "conflict-options" }, Ov = ["value", "checked", "onChange"], Uv = { class: "conflict-content" }, Bv = { class: "conflict-label" }, Pv = { class: "conflict-description" }, Vv = { class: "option-section" }, Fv = { class: "component-toggles" }, Av = /* @__PURE__ */ X({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: d }) {
    const n = d, r = [
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
    return (f, y) => (o(), s("div", Tv, [
      v(Ee, null, {
        default: a(() => [...y[4] || (y[4] = [
          p("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Dv, [
        e("div", Rv, [
          v(xt, null, {
            default: a(() => [...y[5] || (y[5] = [
              p("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Nv, [
            (o(), s(j, null, oe(r, (h) => e("label", {
              key: h.value,
              class: se(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (c) => n("update:conflictMode", h.value)
              }, null, 40, Ov),
              e("div", Uv, [
                e("span", Bv, l(h.label), 1),
                e("span", Pv, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Vv, [
          v(xt, null, {
            default: a(() => [...y[6] || (y[6] = [
              p("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Fv, [
            v(Ae, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (h) => n("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Ae, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (h) => n("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Ae, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (h) => n("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Ae, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                v(Xe, {
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
}), Wv = /* @__PURE__ */ Y(Av, [["__scopeId", "data-v-0ec212b0"]]), Gv = {
  key: 0,
  class: "import-empty"
}, jv = { class: "import-help" }, Hv = {
  key: 1,
  class: "import-configure"
}, qv = { class: "selected-file-bar" }, Kv = { class: "file-bar-content" }, Jv = { class: "file-bar-info" }, Qv = { class: "file-bar-name" }, Xv = { class: "file-bar-size" }, Yv = { class: "import-actions" }, Zv = {
  key: 2,
  class: "import-progress"
}, ef = { class: "progress-content" }, tf = { class: "progress-info" }, of = { class: "progress-title" }, sf = { class: "progress-detail" }, nf = { class: "progress-bar" }, af = { class: "progress-status" }, lf = {
  key: 3,
  class: "import-complete"
}, rf = { class: "complete-message" }, df = { class: "complete-title" }, cf = { class: "complete-details" }, uf = { class: "complete-actions" }, mf = /* @__PURE__ */ X({
  __name: "ImportSection",
  setup(t) {
    const d = C(null), n = C(!1), r = C(!1), f = C(!1), y = C(""), h = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), c = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), i = C({
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
    }), m = B(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function w(x) {
      d.value = x;
    }
    function g() {
      d.value = null, r.value = !1, f.value = !1, y.value = "";
    }
    function z() {
      g(), n.value = !1, c.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function I() {
      if (d.value) {
        n.value = !0, r.value = !1;
        try {
          const x = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${i.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${i.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${i.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const b of x)
            c.value = b, await new Promise(($) => setTimeout($, 800));
          c.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((b) => setTimeout(b, 500)), f.value = !0, y.value = `Successfully imported ${i.value.workflows.length} workflows, ${i.value.models.length} models, and ${i.value.nodes.length} custom nodes.`;
        } catch (x) {
          f.value = !1, y.value = x instanceof Error ? x.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function _(x) {
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (x, b) => (o(), E(Ce, null, {
      header: a(() => [
        v(xe, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !n.value ? (o(), s("div", Gv, [
          v(ev, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: w
          }),
          e("div", jv, [
            v(Ee, null, {
              default: a(() => [...b[5] || (b[5] = [
                p("How to Import", -1)
              ])]),
              _: 1
            }),
            b[6] || (b[6] = e("div", { class: "help-content" }, [
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
        ])) : d.value && !n.value && !r.value ? (o(), s("div", Hv, [
          e("div", qv, [
            e("div", Kv, [
              b[7] || (b[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Jv, [
                e("div", Qv, l(d.value.name), 1),
                e("div", Xv, l(_(d.value.size)), 1)
              ])
            ]),
            v(Z, {
              variant: "ghost",
              size: "sm",
              onClick: g
            }, {
              default: a(() => [...b[8] || (b[8] = [
                p(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          v(Lv, {
            "source-environment": i.value.sourceEnvironment,
            workflows: i.value.workflows,
            models: i.value.models,
            nodes: i.value.nodes,
            "git-branch": i.value.gitBranch,
            "git-commit": i.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          v(Wv, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": b[0] || (b[0] = ($) => h.value.conflictMode = $),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": b[1] || (b[1] = ($) => h.value.includeWorkflows = $),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": b[2] || (b[2] = ($) => h.value.includeModels = $),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": b[3] || (b[3] = ($) => h.value.includeNodes = $),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": b[4] || (b[4] = ($) => h.value.includeGitHistory = $)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && i.value.models.length > 0 ? (o(), E(Ze, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${i.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : u("", !0),
          e("div", Yv, [
            v(Z, {
              variant: "primary",
              size: "md",
              disabled: !m.value,
              onClick: I
            }, {
              default: a(() => [...b[9] || (b[9] = [
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
            v(Z, {
              variant: "secondary",
              size: "md",
              onClick: g
            }, {
              default: a(() => [...b[10] || (b[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Zv, [
          e("div", ef, [
            b[11] || (b[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", tf, [
              e("div", of, l(c.value.message), 1),
              e("div", sf, l(c.value.detail), 1)
            ])
          ]),
          e("div", nf, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${c.value.percent}%` })
            }, null, 4)
          ]),
          e("div", af, l(c.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", lf, [
          e("div", {
            class: se(["complete-icon", f.value ? "success" : "error"])
          }, l(f.value ? "✓" : "✕"), 3),
          e("div", rf, [
            e("div", df, l(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", cf, l(y.value), 1)
          ]),
          e("div", uf, [
            v(Z, {
              variant: "primary",
              size: "md",
              onClick: z
            }, {
              default: a(() => [...b[12] || (b[12] = [
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
}), vf = /* @__PURE__ */ Y(mf, [["__scopeId", "data-v-18e18eb5"]]), ff = { class: "header-info" }, gf = { class: "commit-hash" }, hf = {
  key: 0,
  class: "commit-refs"
}, pf = { class: "commit-message" }, yf = { class: "commit-date" }, wf = {
  key: 0,
  class: "loading"
}, bf = {
  key: 1,
  class: "changes-section"
}, kf = { class: "stats-row" }, _f = { class: "stat" }, $f = { class: "stat insertions" }, Cf = { class: "stat deletions" }, xf = {
  key: 0,
  class: "change-group"
}, Sf = {
  key: 1,
  class: "change-group"
}, If = {
  key: 0,
  class: "version"
}, Ef = {
  key: 2,
  class: "change-group"
}, Mf = { class: "change-item" }, zf = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: n } = $e(), r = C(null), f = C(!0), y = B(() => {
      if (!r.value) return !1;
      const c = r.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), h = B(() => {
      if (!r.value) return !1;
      const c = r.value.changes.nodes;
      return c.added.length > 0 || c.removed.length > 0;
    });
    return we(async () => {
      try {
        r.value = await n(d.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (c, i) => (o(), E(st, {
      size: "md",
      "show-close-button": !1,
      onClose: i[3] || (i[3] = (m) => c.$emit("close"))
    }, {
      header: a(() => {
        var m, w, g, z;
        return [
          e("div", ff, [
            i[4] || (i[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", gf, l(((m = r.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (z = (g = r.value) == null ? void 0 : g.refs) != null && z.length ? (o(), s("span", hf, [
              (o(!0), s(j, null, oe(r.value.refs, (I) => (o(), s("span", {
                key: I,
                class: "ref-badge"
              }, l(I), 1))), 128))
            ])) : u("", !0)
          ]),
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (I) => c.$emit("close"))
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
        var m, w;
        return [
          e("div", pf, l(((m = r.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", yf, l(((w = r.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (o(), s("div", wf, "Loading details...")) : r.value ? (o(), s("div", bf, [
            e("div", kf, [
              e("span", _f, l(r.value.stats.files_changed) + " files", 1),
              e("span", $f, "+" + l(r.value.stats.insertions), 1),
              e("span", Cf, "-" + l(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), s("div", xf, [
              v(vt, { variant: "section" }, {
                default: a(() => [...i[6] || (i[6] = [
                  p("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(j, null, oe(r.value.changes.workflows.added, (g) => (o(), s("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                i[7] || (i[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(g), 1)
              ]))), 128)),
              (o(!0), s(j, null, oe(r.value.changes.workflows.modified, (g) => (o(), s("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                i[8] || (i[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(g), 1)
              ]))), 128)),
              (o(!0), s(j, null, oe(r.value.changes.workflows.deleted, (g) => (o(), s("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                i[9] || (i[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(g), 1)
              ]))), 128))
            ])) : u("", !0),
            h.value ? (o(), s("div", Sf, [
              v(vt, { variant: "section" }, {
                default: a(() => [...i[10] || (i[10] = [
                  p("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(j, null, oe(r.value.changes.nodes.added, (g) => (o(), s("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                i[11] || (i[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(g.name), 1),
                g.version ? (o(), s("span", If, "(" + l(g.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), s(j, null, oe(r.value.changes.nodes.removed, (g) => (o(), s("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                i[12] || (i[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(g.name), 1)
              ]))), 128))
            ])) : u("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", Ef, [
              v(vt, { variant: "section" }, {
                default: a(() => [...i[13] || (i[13] = [
                  p("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Mf, [
                i[14] || (i[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: a(() => [
        v(le, {
          variant: "secondary",
          onClick: i[1] || (i[1] = (m) => c.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...i[15] || (i[15] = [
            p(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        v(le, {
          variant: "primary",
          onClick: i[2] || (i[2] = (m) => c.$emit("checkout", t.commit))
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
}), Lf = /* @__PURE__ */ Y(zf, [["__scopeId", "data-v-d256ff6d"]]), Tf = { class: "dialog-message" }, Df = {
  key: 0,
  class: "dialog-details"
}, Rf = {
  key: 1,
  class: "dialog-warning"
}, Nf = /* @__PURE__ */ X({
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
    return (d, n) => (o(), E(st, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", Tf, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", Df, [
          (o(!0), s(j, null, oe(t.details, (r, f) => (o(), s("div", {
            key: f,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : u("", !0),
        t.warning ? (o(), s("p", Rf, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          p(" " + l(t.warning), 1)
        ])) : u("", !0)
      ]),
      footer: a(() => [
        v(le, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => d.$emit("cancel"))
        }, {
          default: a(() => [
            p(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), E(le, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => d.$emit("secondary"))
        }, {
          default: a(() => [
            p(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        v(le, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
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
}), Of = /* @__PURE__ */ Y(Nf, [["__scopeId", "data-v-3670b9f5"]]), Uf = { class: "base-textarea-wrapper" }, Bf = ["value", "rows", "placeholder", "disabled", "maxlength"], Pf = {
  key: 0,
  class: "base-textarea-count"
}, Vf = /* @__PURE__ */ X({
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
    return (d, n) => (o(), s("div", Uf, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = We(pe((r) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = We(pe((r) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Bf),
      t.showCharCount && t.maxLength ? (o(), s("div", Pf, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : u("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ Y(Vf, [["__scopeId", "data-v-5516e6fc"]]), Ff = ["checked", "disabled"], Af = { class: "base-checkbox-box" }, Wf = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Gf = {
  key: 0,
  class: "base-checkbox-label"
}, jf = /* @__PURE__ */ X({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, n) => (o(), s("label", {
      class: se(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.checked))
      }, null, 40, Ff),
      e("span", Af, [
        t.modelValue ? (o(), s("svg", Wf, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : u("", !0)
      ]),
      d.$slots.default ? (o(), s("span", Gf, [
        re(d.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ Y(jf, [["__scopeId", "data-v-bf17c831"]]), Hf = { class: "popover-header" }, qf = { class: "popover-body" }, Kf = {
  key: 0,
  class: "changes-summary"
}, Jf = {
  key: 0,
  class: "change-item"
}, Qf = {
  key: 1,
  class: "change-item"
}, Xf = {
  key: 2,
  class: "change-item"
}, Yf = {
  key: 3,
  class: "change-item"
}, Zf = {
  key: 4,
  class: "change-item"
}, eg = {
  key: 1,
  class: "no-changes"
}, tg = {
  key: 2,
  class: "loading"
}, og = {
  key: 3,
  class: "issues-error"
}, sg = { class: "error-header" }, ng = { class: "error-title" }, ag = { class: "issues-list" }, lg = { class: "message-section" }, ig = { class: "popover-footer" }, rg = {
  key: 1,
  class: "commit-popover"
}, dg = { class: "popover-header" }, cg = { class: "popover-body" }, ug = {
  key: 0,
  class: "changes-summary"
}, mg = {
  key: 0,
  class: "change-item"
}, vg = {
  key: 1,
  class: "change-item"
}, fg = {
  key: 2,
  class: "change-item"
}, gg = {
  key: 3,
  class: "change-item"
}, hg = {
  key: 4,
  class: "change-item"
}, pg = {
  key: 1,
  class: "no-changes"
}, yg = {
  key: 2,
  class: "loading"
}, wg = {
  key: 3,
  class: "issues-error"
}, bg = { class: "error-header" }, kg = { class: "error-title" }, _g = { class: "issues-list" }, $g = { class: "message-section" }, Cg = { class: "popover-footer" }, xg = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const n = t, r = d, { commit: f } = $e(), y = C(""), h = C(!1), c = C(!1), i = C(null), m = B(() => {
      if (!n.status) return !1;
      const _ = n.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || n.status.has_changes;
    }), w = B(() => {
      var _;
      return (_ = n.status) != null && _.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (x) => x.has_issues && (x.sync_state === "new" || x.sync_state === "modified")
      ) : [];
    }), g = B(() => w.value.length > 0), z = B(() => g.value && !c.value);
    async function I() {
      var _, x, b;
      if (!(g.value && !c.value) && !(!m.value || !y.value.trim() || h.value)) {
        h.value = !0, i.value = null;
        try {
          const $ = await f(y.value.trim(), c.value);
          $.status === "success" ? (i.value = {
            type: "success",
            message: `Committed: ${((_ = $.summary) == null ? void 0 : _.new) || 0} new, ${((x = $.summary) == null ? void 0 : x.modified) || 0} modified, ${((b = $.summary) == null ? void 0 : b.deleted) || 0} deleted`
          }, y.value = "", c.value = !1, setTimeout(() => r("committed"), 1e3)) : $.status === "no_changes" ? i.value = { type: "error", message: "No changes to commit" } : $.status === "blocked" ? i.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : i.value = { type: "error", message: $.message || "Commit failed" };
        } catch ($) {
          i.value = { type: "error", message: $ instanceof Error ? $.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (_, x) => t.asModal ? (o(), E(_e, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (b) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Hf, [
            x[11] || (x[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (b) => r("close"))
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
          e("div", qf, [
            t.status && m.value ? (o(), s("div", Kf, [
              t.status.workflows.new.length ? (o(), s("div", Jf, [
                x[12] || (x[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : u("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Qf, [
                x[13] || (x[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : u("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Xf, [
                x[14] || (x[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Yf, [
                x[15] || (x[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Zf, [
                x[16] || (x[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : u("", !0)
            ])) : t.status ? (o(), s("div", eg, " No changes to commit ")) : (o(), s("div", tg, " Loading... ")),
            g.value ? (o(), s("div", og, [
              e("div", sg, [
                x[17] || (x[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", ng, l(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", ag, [
                (o(!0), s(j, null, oe(w.value, (b) => (o(), s("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(b.name), 1),
                  p(": " + l(b.issue_summary), 1)
                ]))), 128))
              ]),
              v(Bt, {
                modelValue: c.value,
                "onUpdate:modelValue": x[1] || (x[1] = (b) => c.value = b),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...x[18] || (x[18] = [
                  p(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : u("", !0),
            e("div", lg, [
              v(Ut, {
                modelValue: y.value,
                "onUpdate:modelValue": x[2] || (x[2] = (b) => y.value = b),
                placeholder: z.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || h.value || z.value,
                rows: 3,
                onCtrlEnter: I
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            i.value ? (o(), s("div", {
              key: 4,
              class: se(["result", i.value.type])
            }, l(i.value.message), 3)) : u("", !0)
          ]),
          e("div", ig, [
            v(le, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (b) => r("close"))
            }, {
              default: a(() => [...x[19] || (x[19] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: c.value ? "danger" : "primary",
              disabled: !m.value || !y.value.trim() || h.value || z.value,
              loading: h.value,
              onClick: I
            }, {
              default: a(() => [
                p(l(h.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", rg, [
      e("div", dg, [
        x[21] || (x[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (b) => r("close"))
        }, [...x[20] || (x[20] = [
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
      e("div", cg, [
        t.status && m.value ? (o(), s("div", ug, [
          t.status.workflows.new.length ? (o(), s("div", mg, [
            x[22] || (x[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          t.status.workflows.modified.length ? (o(), s("div", vg, [
            x[23] || (x[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", fg, [
            x[24] || (x[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", gg, [
            x[25] || (x[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", hg, [
            x[26] || (x[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : t.status ? (o(), s("div", pg, " No changes to commit ")) : (o(), s("div", yg, " Loading... ")),
        g.value ? (o(), s("div", wg, [
          e("div", bg, [
            x[27] || (x[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", kg, l(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", _g, [
            (o(!0), s(j, null, oe(w.value, (b) => (o(), s("div", {
              key: b.name,
              class: "issue-item"
            }, [
              e("strong", null, l(b.name), 1),
              p(": " + l(b.issue_summary), 1)
            ]))), 128))
          ]),
          v(Bt, {
            modelValue: c.value,
            "onUpdate:modelValue": x[7] || (x[7] = (b) => c.value = b),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...x[28] || (x[28] = [
              p(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : u("", !0),
        e("div", $g, [
          v(Ut, {
            modelValue: y.value,
            "onUpdate:modelValue": x[8] || (x[8] = (b) => y.value = b),
            placeholder: z.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || h.value || z.value,
            rows: 3,
            onCtrlEnter: I
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        i.value ? (o(), s("div", {
          key: 4,
          class: se(["result", i.value.type])
        }, l(i.value.message), 3)) : u("", !0)
      ]),
      e("div", Cg, [
        v(le, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (b) => r("close"))
        }, {
          default: a(() => [...x[29] || (x[29] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v(le, {
          variant: c.value ? "danger" : "primary",
          disabled: !m.value || !y.value.trim() || h.value || z.value,
          loading: h.value,
          onClick: I
        }, {
          default: a(() => [
            p(l(h.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ht = /* @__PURE__ */ Y(xg, [["__scopeId", "data-v-d92153de"]]), Sg = { class: "modal-header" }, Ig = { class: "modal-body" }, Eg = { class: "switch-message" }, Mg = { class: "switch-details" }, zg = { class: "modal-actions" }, Lg = /* @__PURE__ */ X({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, n) => (o(), E(_e, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Sg, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Ig, [
            e("p", Eg, [
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
            e("p", Mg, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", zg, [
            v(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...n[11] || (n[11] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
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
}), Tg = /* @__PURE__ */ Y(Lg, [["__scopeId", "data-v-e9c5253e"]]), Dg = { class: "progress-bar" }, Rg = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, n = B(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (r, f) => (o(), s("div", Dg, [
      e("div", {
        class: se(["progress-fill", t.variant]),
        style: qe({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ng = /* @__PURE__ */ Y(Rg, [["__scopeId", "data-v-1beb0512"]]), Og = {
  key: 0,
  class: "modal-overlay"
}, Ug = { class: "modal-content" }, Bg = { class: "modal-body" }, Pg = { class: "progress-info" }, Vg = { class: "progress-percentage" }, Fg = { class: "progress-state" }, Ag = { class: "switch-steps" }, Wg = { class: "step-icon" }, Gg = { class: "step-label" }, jg = /* @__PURE__ */ X({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, n = B(() => {
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
      return d.message || y[d.state] || d.state;
    }), r = B(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), f = B(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = y.findIndex((c) => c.state === d.state);
      return y.map((c, i) => {
        let m = "pending", w = "○";
        return i < h ? (m = "completed", w = "✓") : i === h && (m = "active", w = "⟳"), {
          ...c,
          status: m,
          icon: w
        };
      });
    });
    return (y, h) => (o(), E(_e, { to: "body" }, [
      t.show ? (o(), s("div", Og, [
        e("div", Ug, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Bg, [
            v(Ng, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Pg, [
              e("div", Vg, l(t.progress) + "%", 1),
              e("div", Fg, l(n.value), 1)
            ]),
            e("div", Ag, [
              (o(!0), s(j, null, oe(f.value, (c) => (o(), s("div", {
                key: c.state,
                class: se(["switch-step", c.status])
              }, [
                e("span", Wg, l(c.icon), 1),
                e("span", Gg, l(c.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Hg = /* @__PURE__ */ Y(jg, [["__scopeId", "data-v-768a5078"]]), qg = { class: "modal-header" }, Kg = { class: "modal-body" }, Jg = {
  key: 0,
  class: "node-section"
}, Qg = { class: "node-list" }, Xg = {
  key: 1,
  class: "node-section"
}, Yg = { class: "node-list" }, Zg = { class: "modal-actions" }, eh = /* @__PURE__ */ X({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, n) => (o(), E(_e, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", qg, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Kg, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Jg, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Qg, [
                (o(!0), s(j, null, oe(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : u("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Xg, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Yg, [
                (o(!0), s(j, null, oe(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
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
          e("div", Zg, [
            v(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...n[10] || (n[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
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
}), th = /* @__PURE__ */ Y(eh, [["__scopeId", "data-v-7cad7518"]]);
async function dt(t, d = {}, n = 5e3) {
  const r = new AbortController(), f = setTimeout(() => r.abort(), n);
  try {
    const y = await fetch(t, {
      ...d,
      signal: r.signal
    });
    return clearTimeout(f), y;
  } catch (y) {
    throw clearTimeout(f), y.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : y;
  }
}
function oh() {
  const t = C(null);
  async function d() {
    try {
      const h = await dt(
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
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const h = await dt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Health check failed");
      return await h.json();
    } catch {
      return t.value = await d(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const h = await dt(
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
  async function f() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await dt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await d()), !t.value)
      throw new Error("Control port not available");
    if (!(await dt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: d,
    checkHealth: n,
    getStatus: r,
    restart: f,
    kill: y
  };
}
const sh = { class: "comfygit-panel" }, nh = { class: "panel-header" }, ah = { class: "header-left" }, lh = {
  key: 0,
  class: "header-info"
}, ih = { class: "header-actions" }, rh = { class: "env-switcher" }, dh = {
  key: 0,
  class: "header-info"
}, ch = { class: "branch-name" }, uh = { class: "panel-main" }, mh = { class: "sidebar" }, vh = { class: "sidebar-section" }, fh = { class: "sidebar-section" }, gh = { class: "sidebar-section" }, hh = { class: "content-area" }, ph = {
  key: 0,
  class: "error-message"
}, yh = {
  key: 1,
  class: "loading"
}, wh = { class: "dialog-content env-selector-dialog" }, bh = { class: "dialog-header" }, kh = { class: "dialog-body" }, _h = { class: "env-list" }, $h = { class: "env-info" }, Ch = { class: "env-name-row" }, xh = { class: "env-indicator" }, Sh = { class: "env-name" }, Ih = {
  key: 0,
  class: "env-branch"
}, Eh = {
  key: 1,
  class: "current-label"
}, Mh = { class: "env-stats" }, zh = ["onClick"], Lh = { class: "toast-container" }, Th = { class: "toast-icon" }, Dh = { class: "toast-message" }, Rh = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const n = d, {
      getStatus: r,
      getHistory: f,
      getBranches: y,
      checkout: h,
      createBranch: c,
      switchBranch: i,
      getEnvironments: m,
      switchEnvironment: w,
      getSwitchProgress: g,
      syncEnvironmentManually: z
    } = $e(), I = oh(), _ = C(null), x = C([]), b = C([]), $ = C([]), A = B(() => $.value.find((q) => q.is_current)), P = C(!1), D = C(null), K = C(null), L = C(!1), N = C(null), R = C(!1), M = C(!1), S = C(""), U = C({ state: "idle", progress: 0, message: "" });
    let F = null, ee = null;
    const te = C("status"), W = C("this-env");
    function H(q, T) {
      te.value = q, W.value = T;
    }
    function V(q) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[q];
      de && H(de.view, de.section);
    }
    function O() {
      H("branches", "this-env");
    }
    function ae() {
      n("close"), setTimeout(() => {
        var T;
        const q = document.querySelectorAll("button.comfyui-button");
        for (const de of q)
          if (((T = de.textContent) == null ? void 0 : T.trim()) === "Manager") {
            de.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Q = C(null), be = C(!1), ve = C(!1), ze = C([]);
    let lt = 0;
    function me(q, T = "info", de = 3e3) {
      const he = ++lt;
      return ze.value.push({ id: he, message: q, type: T }), de > 0 && setTimeout(() => {
        ze.value = ze.value.filter((Le) => Le.id !== he);
      }, de), he;
    }
    function Me(q) {
      ze.value = ze.value.filter((T) => T.id !== q);
    }
    function it(q) {
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
    const Ke = B(() => {
      if (!_.value) return "neutral";
      const q = _.value.workflows, T = q.new.length > 0 || q.modified.length > 0 || q.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? T ? "warning" : "success" : "error";
    });
    B(() => _.value ? Ke.value === "success" ? "All synced" : Ke.value === "warning" ? "Uncommitted changes" : Ke.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      P.value = !0, D.value = null;
      try {
        const [q, T, de, he] = await Promise.all([
          r(!0),
          f(),
          y(),
          m()
        ]);
        _.value = q, x.value = T.commits, b.value = de.branches, $.value = he, n("statusUpdate", q), N.value && await N.value.loadWorkflows(!0);
      } catch (q) {
        D.value = q instanceof Error ? q.message : "Failed to load status", _.value = null, x.value = [], b.value = [];
      } finally {
        P.value = !1;
      }
    }
    function rt(q) {
      K.value = q;
    }
    async function Ye(q) {
      var de;
      K.value = null;
      const T = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      Q.value = {
        title: T ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: T ? "You have uncommitted changes that will be lost." : `Checkout commit ${q.short_hash || ((de = q.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: T ? Nt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: T,
        onConfirm: async () => {
          var Te;
          Q.value = null, ne();
          const he = me(`Checking out ${q.short_hash || ((Te = q.hash) == null ? void 0 : Te.slice(0, 7))}...`, "info", 0), Le = await h(q.hash, T);
          Me(he), Le.status === "success" ? me("Restarting ComfyUI...", "success") : me(Le.message || "Checkout failed", "error");
        }
      };
    }
    async function J(q) {
      const T = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      Q.value = {
        title: T ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: T ? "You have uncommitted changes." : `Switch to branch "${q}"?`,
        details: T ? Nt() : void 0,
        warning: T ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: T ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Q.value = null, ne();
          const de = me(`Switching to ${q}...`, "info", 0), he = await i(q, T);
          Me(de), he.status === "success" ? me("Restarting ComfyUI...", "success") : me(he.message || "Branch switch failed", "error");
        }
      };
    }
    async function k(q) {
      const T = me(`Creating branch ${q}...`, "info", 0), de = await c(q);
      Me(T), de.status === "success" ? (me(`Branch "${q}" created`, "success"), await Se()) : me(de.message || "Failed to create branch", "error");
    }
    async function G(q) {
      K.value = null;
      const T = prompt("Enter branch name:");
      if (T) {
        const de = me(`Creating branch ${T}...`, "info", 0), he = await c(T, q.hash);
        Me(de), he.status === "success" ? (me(`Branch "${T}" created from ${q.short_hash}`, "success"), await Se()) : me(he.message || "Failed to create branch", "error");
      }
    }
    function ne() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ge(q) {
      L.value = !1, S.value = q, R.value = !0;
    }
    async function Oe() {
      R.value = !1, M.value = !0, ne(), U.value = {
        progress: 10,
        state: Ue(10),
        message: Je(10)
      };
      try {
        await w(S.value), yt(), Xt();
      } catch (q) {
        Be(), M.value = !1, me(`Failed to initiate switch: ${q instanceof Error ? q.message : "Unknown error"}`, "error"), U.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ue(q) {
      return q >= 100 ? "complete" : q >= 80 ? "validating" : q >= 60 ? "starting" : q >= 30 ? "syncing" : "preparing";
    }
    function Je(q) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ue(q)] || "";
    }
    function yt() {
      if (ee) return;
      let q = 10;
      const T = 60, de = 5e3, he = 100, Le = (T - q) / (de / he);
      ee = window.setInterval(() => {
        if (q += Le, q >= T && (q = T, Be()), U.value.progress < T) {
          const Te = Math.floor(q);
          U.value = {
            progress: Te,
            state: Ue(Te),
            message: Je(Te)
          };
        }
      }, he);
    }
    function Be() {
      ee && (clearInterval(ee), ee = null);
    }
    function Xt() {
      F || (F = window.setInterval(async () => {
        try {
          let q = await I.getStatus();
          if ((!q || q.state === "idle") && (q = await g()), !q)
            return;
          const T = q.progress || 0;
          T >= 60 && Be();
          const de = Math.max(T, U.value.progress), he = q.state && q.state !== "idle" && q.state !== "unknown", Le = he ? q.state : Ue(de), Te = he && q.message || Je(de);
          U.value = {
            state: Le,
            progress: de,
            message: Te
          }, q.state === "complete" ? (Be(), kt(), M.value = !1, me(`✓ Switched to ${S.value}`, "success"), await Se(), S.value = "") : q.state === "rolled_back" ? (Be(), kt(), M.value = !1, me("Switch failed, restored previous environment", "warning"), S.value = "") : q.state === "critical_failure" && (Be(), kt(), M.value = !1, me(`Critical error during switch: ${q.message}`, "error"), S.value = "");
        } catch (q) {
          console.error("Failed to poll switch progress:", q);
        }
      }, 1e3));
    }
    function kt() {
      Be(), F && (clearInterval(F), F = null);
    }
    function Yt() {
      R.value = !1, S.value = "";
    }
    async function Zt() {
      be.value = !1, await Se(), me("✓ Changes committed", "success");
    }
    async function eo() {
      ve.value = !1;
      const q = me("Syncing environment...", "info", 0);
      try {
        const T = await z("skip", !0);
        if (Me(q), T.status === "success") {
          const de = [];
          T.nodes_installed.length && de.push(`${T.nodes_installed.length} installed`), T.nodes_removed.length && de.push(`${T.nodes_removed.length} removed`);
          const he = de.length ? `: ${de.join(", ")}` : "";
          me(`✓ Environment synced${he}`, "success"), await Se();
        } else {
          const de = T.errors.length ? T.errors.join("; ") : T.message;
          me(`Sync failed: ${de}`, "error");
        }
      } catch (T) {
        Me(q), me(`Sync error: ${T instanceof Error ? T.message : "Unknown error"}`, "error");
      }
    }
    async function to(q) {
      const T = me(`Creating environment "${q}"...`, "info", 0);
      Me(T), me("Environment creation not yet implemented", "warning");
    }
    async function oo(q) {
      const T = me(`Deleting environment "${q}"...`, "info", 0);
      Me(T), me("Environment deletion not yet implemented", "warning");
    }
    function so(q) {
      me(`Viewing details for "${q}"`, "info"), H("models-env", "this-env");
    }
    function Nt() {
      if (!_.value) return [];
      const q = [], T = _.value.workflows;
      return T.new.length && q.push(`${T.new.length} new workflow(s)`), T.modified.length && q.push(`${T.modified.length} modified workflow(s)`), T.deleted.length && q.push(`${T.deleted.length} deleted workflow(s)`), q;
    }
    return we(Se), (q, T) => {
      var de, he, Le, Te;
      return o(), s("div", sh, [
        e("div", nh, [
          e("div", ah, [
            T[27] || (T[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (o(), s("div", lh)) : u("", !0)
          ]),
          e("div", ih, [
            e("button", {
              class: se(["icon-btn", { spinning: P.value }]),
              onClick: Se,
              title: "Refresh"
            }, [...T[28] || (T[28] = [
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
              onClick: T[0] || (T[0] = (ie) => n("close")),
              title: "Close"
            }, [...T[29] || (T[29] = [
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
        e("div", rh, [
          T[31] || (T[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: T[1] || (T[1] = (ie) => H("environments", "all-envs"))
          }, [
            _.value ? (o(), s("div", dh, [
              e("span", null, l(((de = A.value) == null ? void 0 : de.name) || ((he = _.value) == null ? void 0 : he.environment) || "Loading..."), 1),
              e("span", ch, "(" + l(_.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            T[30] || (T[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", uh, [
          e("div", mh, [
            e("div", vh, [
              T[32] || (T[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "status" && W.value === "this-env" }]),
                onClick: T[2] || (T[2] = (ie) => H("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "workflows" }]),
                onClick: T[3] || (T[3] = (ie) => H("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "models-env" }]),
                onClick: T[4] || (T[4] = (ie) => H("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "branches" }]),
                onClick: T[5] || (T[5] = (ie) => H("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "history" }]),
                onClick: T[6] || (T[6] = (ie) => H("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "nodes" }]),
                onClick: T[7] || (T[7] = (ie) => H("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "debug-env" }]),
                onClick: T[8] || (T[8] = (ie) => H("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            T[35] || (T[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", fh, [
              T[33] || (T[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "environments" }]),
                onClick: T[9] || (T[9] = (ie) => H("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "model-index" }]),
                onClick: T[10] || (T[10] = (ie) => H("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "settings" }]),
                onClick: T[11] || (T[11] = (ie) => H("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "debug-workspace" }]),
                onClick: T[12] || (T[12] = (ie) => H("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            T[36] || (T[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", gh, [
              T[34] || (T[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "export" }]),
                onClick: T[13] || (T[13] = (ie) => H("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "import" }]),
                onClick: T[14] || (T[14] = (ie) => H("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: te.value === "remotes" }]),
                onClick: T[15] || (T[15] = (ie) => H("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", hh, [
            D.value ? (o(), s("div", ph, l(D.value), 1)) : !_.value && te.value === "status" ? (o(), s("div", yh, " Loading status... ")) : (o(), s(j, { key: 2 }, [
              te.value === "status" ? (o(), E(On, {
                key: 0,
                status: _.value,
                onSwitchBranch: O,
                onCommitChanges: T[16] || (T[16] = (ie) => be.value = !0),
                onSyncEnvironment: T[17] || (T[17] = (ie) => ve.value = !0),
                onViewWorkflows: T[18] || (T[18] = (ie) => H("workflows", "this-env")),
                onViewHistory: T[19] || (T[19] = (ie) => H("history", "this-env")),
                onViewDebug: T[20] || (T[20] = (ie) => H("debug-env", "this-env"))
              }, null, 8, ["status"])) : te.value === "workflows" ? (o(), E(qd, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: Se
              }, null, 512)) : te.value === "models-env" ? (o(), E(Mc, {
                key: 2,
                onNavigate: V
              })) : te.value === "branches" ? (o(), E(Xn, {
                key: 3,
                branches: b.value,
                current: ((Le = _.value) == null ? void 0 : Le.branch) || null,
                onSwitch: J,
                onCreate: k
              }, null, 8, ["branches", "current"])) : te.value === "history" ? (o(), E(ra, {
                key: 4,
                commits: x.value,
                onSelect: rt,
                onCheckout: Ye
              }, null, 8, ["commits"])) : te.value === "nodes" ? (o(), E(pu, {
                key: 5,
                onOpenNodeManager: ae
              })) : te.value === "debug-env" ? (o(), E(hm, { key: 6 })) : te.value === "environments" ? (o(), E(Em, {
                key: 7,
                onSwitch: ge,
                onCreate: to,
                onDelete: oo,
                onViewDetails: so
              })) : te.value === "model-index" ? (o(), E(Jc, {
                key: 8,
                onRefresh: Se
              })) : te.value === "settings" ? (o(), E(mm, { key: 9 })) : te.value === "debug-workspace" ? (o(), E(fm, { key: 10 })) : te.value === "export" ? (o(), E(Bm, { key: 11 })) : te.value === "import" ? (o(), E(vf, { key: 12 })) : te.value === "remotes" ? (o(), E(qu, { key: 13 })) : u("", !0)
            ], 64))
          ])
        ]),
        K.value ? (o(), E(Lf, {
          key: 0,
          commit: K.value,
          onClose: T[21] || (T[21] = (ie) => K.value = null),
          onCheckout: Ye,
          onCreateBranch: G
        }, null, 8, ["commit"])) : u("", !0),
        Q.value ? (o(), E(Of, {
          key: 1,
          title: Q.value.title,
          message: Q.value.message,
          details: Q.value.details,
          warning: Q.value.warning,
          confirmLabel: Q.value.confirmLabel,
          cancelLabel: Q.value.cancelLabel,
          secondaryLabel: Q.value.secondaryLabel,
          secondaryAction: Q.value.secondaryAction,
          destructive: Q.value.destructive,
          onConfirm: Q.value.onConfirm,
          onCancel: T[22] || (T[22] = (ie) => Q.value = null),
          onSecondary: Q.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        v(Tg, {
          show: R.value,
          "from-environment": ((Te = A.value) == null ? void 0 : Te.name) || "unknown",
          "to-environment": S.value,
          onConfirm: Oe,
          onClose: Yt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        be.value && _.value ? (o(), E(Ht, {
          key: 2,
          status: _.value,
          "as-modal": !0,
          onClose: T[23] || (T[23] = (ie) => be.value = !1),
          onCommitted: Zt
        }, null, 8, ["status"])) : u("", !0),
        ve.value && _.value ? (o(), E(th, {
          key: 3,
          show: ve.value,
          "mismatch-details": {
            missing_nodes: _.value.comparison.missing_nodes,
            extra_nodes: _.value.comparison.extra_nodes
          },
          onConfirm: eo,
          onClose: T[24] || (T[24] = (ie) => ve.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : u("", !0),
        v(Hg, {
          show: M.value,
          state: U.value.state,
          progress: U.value.progress,
          message: U.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        L.value ? (o(), s("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: T[26] || (T[26] = pe((ie) => L.value = !1, ["self"]))
        }, [
          e("div", wh, [
            e("div", bh, [
              T[38] || (T[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: T[25] || (T[25] = (ie) => L.value = !1)
              }, [...T[37] || (T[37] = [
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
            e("div", kh, [
              T[39] || (T[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", _h, [
                (o(!0), s(j, null, oe($.value, (ie) => (o(), s("div", {
                  key: ie.name,
                  class: se(["env-item", { current: ie.is_current }])
                }, [
                  e("div", $h, [
                    e("div", Ch, [
                      e("span", xh, l(ie.is_current ? "●" : "○"), 1),
                      e("span", Sh, l(ie.name), 1),
                      ie.current_branch ? (o(), s("span", Ih, "(" + l(ie.current_branch) + ")", 1)) : u("", !0),
                      ie.is_current ? (o(), s("span", Eh, "CURRENT")) : u("", !0)
                    ]),
                    e("div", Mh, l(ie.workflow_count) + " workflows • " + l(ie.node_count) + " nodes ", 1)
                  ]),
                  ie.is_current ? u("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Fp) => ge(ie.name)
                  }, " SWITCH ", 8, zh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        e("div", Lh, [
          v(uo, { name: "toast" }, {
            default: a(() => [
              (o(!0), s(j, null, oe(ze.value, (ie) => (o(), s("div", {
                key: ie.id,
                class: se(["toast", ie.type])
              }, [
                e("span", Th, l(it(ie.type)), 1),
                e("span", Dh, l(ie.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Nh = /* @__PURE__ */ Y(Rh, [["__scopeId", "data-v-99b7a544"]]), Oh = { class: "item-header" }, Uh = { class: "item-info" }, Bh = { class: "filename" }, Ph = { class: "metadata" }, Vh = { class: "size" }, Fh = {
  key: 0,
  class: "type"
}, Ah = { class: "item-actions" }, Wh = {
  key: 0,
  class: "progress-section"
}, Gh = { class: "progress-bar" }, jh = { class: "progress-stats" }, Hh = { class: "downloaded" }, qh = { class: "speed" }, Kh = {
  key: 0,
  class: "eta"
}, Jh = {
  key: 1,
  class: "status-msg paused"
}, Qh = {
  key: 2,
  class: "status-msg queued"
}, Xh = {
  key: 3,
  class: "status-msg completed"
}, Yh = {
  key: 4,
  class: "status-msg failed"
}, Zh = {
  key: 0,
  class: "retries"
}, ep = /* @__PURE__ */ X({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const n = d;
    function r(h) {
      if (h === 0) return "?";
      const c = h / (1024 * 1024 * 1024);
      return c >= 1 ? `${c.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const c = Math.floor(h / 60);
      return c < 60 ? `${c}m` : `${Math.floor(c / 60)}h ${c % 60}m`;
    }
    return (h, c) => (o(), s("div", {
      class: se(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Oh, [
        e("div", Uh, [
          e("div", Bh, l(t.item.filename), 1),
          e("div", Ph, [
            e("span", Vh, l(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Fh, l(t.item.type), 1)) : u("", !0)
          ])
        ]),
        e("div", Ah, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: c[0] || (c[0] = (i) => n("cancel")),
            title: "Cancel"
          }, " × ")) : u("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: c[1] || (c[1] = (i) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : u("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: c[2] || (c[2] = (i) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : u("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: c[3] || (c[3] = (i) => n("remove")),
            title: "Remove"
          }, " × ")) : u("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Wh, [
        e("div", Gh, [
          e("div", {
            class: "progress-fill",
            style: qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", jh, [
          e("span", Hh, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", qh, l(f(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Kh, l(y(t.item.eta)), 1)) : u("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Jh, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", Qh, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Xh, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", Yh, [
        p(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Zh, "(" + l(t.item.retries) + " retries)", 1)) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ Y(ep, [["__scopeId", "data-v-2110df65"]]), tp = { class: "queue-title" }, op = { class: "count" }, sp = { class: "queue-actions" }, np = { class: "action-label" }, ap = {
  key: 0,
  class: "overall-progress"
}, lp = { class: "progress-bar" }, ip = {
  key: 0,
  class: "current-mini"
}, rp = { class: "filename" }, dp = { class: "speed" }, cp = {
  key: 1,
  class: "queue-content"
}, up = {
  key: 0,
  class: "section"
}, mp = {
  key: 1,
  class: "section"
}, vp = { class: "section-header" }, fp = { class: "section-label paused" }, gp = { class: "items-list" }, hp = {
  key: 2,
  class: "section"
}, pp = { class: "section-header" }, yp = { class: "section-label" }, wp = { class: "items-list" }, bp = {
  key: 3,
  class: "section"
}, kp = { class: "section-header" }, _p = { class: "section-label" }, $p = { class: "items-list" }, Cp = {
  key: 4,
  class: "section"
}, xp = { class: "section-header" }, Sp = { class: "section-label failed" }, Ip = { class: "items-list" }, Ep = /* @__PURE__ */ X({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: n,
      queuedItems: r,
      completedItems: f,
      failedItems: y,
      pausedItems: h,
      hasItems: c,
      activeCount: i,
      cancelDownload: m,
      retryDownload: w,
      resumeDownload: g,
      resumeAllPaused: z,
      removeItem: I,
      clearCompleted: _
    } = pt(), x = C(!1);
    let b = null;
    Et(
      () => ({
        active: i.value,
        failed: y.value.length,
        paused: h.value.length,
        completed: f.value.length
      }),
      (D, K) => {
        b && (clearTimeout(b), b = null);
        const L = D.active === 0 && D.failed === 0 && D.paused === 0 && D.completed > 0, N = K && (K.active > 0 || K.paused > 0);
        L && N && (b = setTimeout(() => {
          _(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = B(() => {
      var L;
      if (d.items.length === 0) return 0;
      const D = f.value.length, K = ((L = n.value) == null ? void 0 : L.progress) || 0;
      return Math.round((D + K / 100) / d.items.length * 100);
    });
    function A(D) {
      m(D);
    }
    function P(D) {
      return D === 0 ? "" : `${(D / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (D, K) => (o(), E(_e, { to: "body" }, [
      ce(c) ? (o(), s("div", {
        key: 0,
        class: se(["model-download-queue", { minimized: !x.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: K[0] || (K[0] = (L) => x.value = !x.value)
        }, [
          e("div", tp, [
            K[4] || (K[4] = e("span", { class: "icon" }, "↓", -1)),
            K[5] || (K[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", op, "(" + l(ce(i)) + "/" + l(ce(d).items.length) + ")", 1)
          ]),
          e("div", sp, [
            e("span", np, l(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (o(), s("div", cp, [
          ce(n) ? (o(), s("div", up, [
            K[6] || (K[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            v(ct, {
              item: ce(n),
              onCancel: K[1] || (K[1] = (L) => A(ce(n).id))
            }, null, 8, ["item"])
          ])) : u("", !0),
          ce(h).length > 0 ? (o(), s("div", mp, [
            e("div", vp, [
              e("span", fp, "Paused (" + l(ce(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: K[2] || (K[2] = //@ts-ignore
                (...L) => ce(z) && ce(z)(...L))
              }, "Resume All")
            ]),
            e("div", gp, [
              (o(!0), s(j, null, oe(ce(h), (L) => (o(), E(ct, {
                key: L.id,
                item: L,
                onResume: (N) => ce(g)(L.id),
                onRemove: (N) => ce(I)(L.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          ce(r).length > 0 ? (o(), s("div", hp, [
            e("div", pp, [
              e("span", yp, "Queued (" + l(ce(r).length) + ")", 1)
            ]),
            e("div", wp, [
              (o(!0), s(j, null, oe(ce(r), (L) => (o(), E(ct, {
                key: L.id,
                item: L,
                onCancel: (N) => A(L.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : u("", !0),
          ce(f).length > 0 ? (o(), s("div", bp, [
            e("div", kp, [
              e("span", _p, "Completed (" + l(ce(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: K[3] || (K[3] = //@ts-ignore
                (...L) => ce(_) && ce(_)(...L))
              }, "Clear")
            ]),
            e("div", $p, [
              (o(!0), s(j, null, oe(ce(f).slice(0, 3), (L) => (o(), E(ct, {
                key: L.id,
                item: L,
                onRemove: (N) => ce(I)(L.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          ce(y).length > 0 ? (o(), s("div", Cp, [
            e("div", xp, [
              e("span", Sp, "Failed (" + l(ce(y).length) + ")", 1)
            ]),
            e("div", Ip, [
              (o(!0), s(j, null, oe(ce(y), (L) => (o(), E(ct, {
                key: L.id,
                item: L,
                onRetry: (N) => ce(w)(L.id),
                onRemove: (N) => ce(I)(L.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : u("", !0)
        ])) : (o(), s("div", ap, [
          e("div", lp, [
            e("div", {
              class: "progress-fill",
              style: qe({ width: `${$.value}%` })
            }, null, 4)
          ]),
          ce(n) ? (o(), s("div", ip, [
            e("span", rp, l(ce(n).filename), 1),
            e("span", dp, l(P(ce(n).speed)), 1)
          ])) : u("", !0)
        ]))
      ], 2)) : u("", !0)
    ]));
  }
}), Mp = /* @__PURE__ */ Y(Ep, [["__scopeId", "data-v-60751cfa"]]), zp = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Lp = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Tp = {
  comfy: zp,
  phosphor: Lp
}, Dt = "comfy", qt = "comfygit-theme";
let Qe = null, Kt = Dt;
function Dp() {
  try {
    const t = localStorage.getItem(qt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Dt;
}
function Jt(t = Dt) {
  Qe && Qe.remove(), Qe = document.createElement("style"), Qe.id = "comfygit-theme-styles", Qe.setAttribute("data-theme", t), Qe.textContent = Tp[t], document.head.appendChild(Qe), document.body.setAttribute("data-comfygit-theme", t), Kt = t;
  try {
    localStorage.setItem(qt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Rp() {
  return Kt;
}
function Np(t) {
  Jt(t);
}
const Rt = document.createElement("link");
Rt.rel = "stylesheet";
Rt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Rt);
const Op = Dp();
Jt(Op);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Np(t);
  },
  getTheme: () => {
    const t = Rp();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let De = null, Ie = null, ft = null, ut = null, Pt = null;
const ot = C(null);
async function bt() {
  var t;
  if (!((t = tt) != null && t.api)) return null;
  try {
    const d = await tt.api.fetchApi("/v2/comfygit/status");
    d.ok && (ot.value = await d.json());
  } catch {
  }
}
function Up() {
  if (!ot.value) return !1;
  const t = ot.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || ot.value.has_changes;
}
function Bp() {
  De && De.remove(), De = document.createElement("div"), De.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", De.appendChild(t), De.addEventListener("click", (r) => {
    r.target === De && Ct();
  });
  const d = (r) => {
    r.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), zt({
    render: () => Lt(Nh, {
      onClose: Ct,
      onStatusUpdate: (r) => {
        ot.value = r, gt();
      }
    })
  }).mount(t), document.body.appendChild(De);
}
function Ct() {
  De && (De.remove(), De = null);
}
function Pp(t) {
  mt(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${d.bottom + 8}px`, Ie.style.right = `${window.innerWidth - d.right}px`, Ie.style.zIndex = "10001";
  const n = (f) => {
    Ie && !Ie.contains(f.target) && f.target !== t && (mt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (f) => {
    f.key === "Escape" && (mt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), ft = zt({
    render: () => Lt(Ht, {
      status: ot.value,
      onClose: mt,
      onCommitted: () => {
        mt(), bt().then(gt);
      }
    })
  }), ft.mount(Ie), document.body.appendChild(Ie);
}
function mt() {
  ft && (ft.unmount(), ft = null), Ie && (Ie.remove(), Ie = null);
}
function Vp() {
  ut || (ut = document.createElement("div"), ut.className = "comfygit-download-queue-root", Pt = zt({
    render: () => Lt(Mp)
  }), Pt.mount(ut), document.body.appendChild(ut), console.log("[ComfyGit] Model download queue mounted"));
}
let Fe = null;
function gt() {
  if (!Fe) return;
  const t = Fe.querySelector(".commit-indicator");
  t && (t.style.display = Up() ? "block" : "none");
}
const Qt = document.createElement("style");
Qt.textContent = `
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
document.head.appendChild(Qt);
tt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Bp, Fe = document.createElement("button"), Fe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Fe.innerHTML = 'Commit <span class="commit-indicator"></span>', Fe.title = "Quick Commit", Fe.onclick = () => Pp(Fe), t.appendChild(d), t.appendChild(Fe), (y = (f = tt.menu) == null ? void 0 : f.settingsGroup) != null && y.element && (tt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Vp();
    const { loadPendingDownloads: n } = pt();
    n(), await bt(), gt(), setInterval(async () => {
      await bt(), gt();
    }, 3e4);
    const r = tt.api;
    if (r) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((m) => {
          (m.startsWith("workflow:") || m.startsWith("Comfy.OpenWorkflowsPaths:") || m.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(m);
        }), window.location.reload();
      }, c = function() {
        const m = document.createElement("div");
        m.style.cssText = `
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
        w.textContent = "Workflows updated - refresh required", m.appendChild(w);
        const g = document.createElement("button");
        g.textContent = "Refresh", g.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, g.onmouseover = () => g.style.background = "var(--comfy-input-bg)", g.onmouseout = () => g.style.background = "var(--comfy-menu-bg)", g.onclick = () => h(), m.appendChild(g);
        const z = document.createElement("button");
        z.textContent = "×", z.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, z.onmouseover = () => z.style.opacity = "1", z.onmouseout = () => z.style.opacity = "0.6", z.onclick = () => m.remove(), m.appendChild(z), document.body.appendChild(m), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (m) => {
        const { change_type: w, workflow_name: g } = m.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await bt(), gt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let i = !1;
      r.addEventListener("status", async (m) => {
        const w = m.detail != null;
        w && !i && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : c()), i = w;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
