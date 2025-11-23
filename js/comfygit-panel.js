import { app as st } from "../../scripts/app.js";
import { defineComponent as A, createElementBlock as n, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as te, createBlock as b, resolveDynamicComponent as dt, normalizeClass as q, withCtx as a, toDisplayString as i, createVNode as d, createTextVNode as v, computed as W, Fragment as P, renderList as K, normalizeStyle as qe, ref as x, onMounted as ue, watch as yt, Teleport as Be, withModifiers as ve, Transition as Pt, withKeys as Ce, onUnmounted as At, resolveComponent as Ft, createSlots as wt, TransitionGroup as Wt, createApp as bt, h as kt } from "vue";
const Ht = { class: "panel-layout" }, Gt = {
  key: 0,
  class: "panel-layout-header"
}, jt = {
  key: 1,
  class: "panel-layout-search"
}, qt = { class: "panel-layout-content" }, Kt = {
  key: 2,
  class: "panel-layout-footer"
}, Yt = /* @__PURE__ */ A({
  __name: "PanelLayout",
  setup(t) {
    return (r, s) => (o(), n("div", Ht, [
      r.$slots.header ? (o(), n("div", Gt, [
        te(r.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      r.$slots.search ? (o(), n("div", jt, [
        te(r.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", qt, [
        te(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (o(), n("div", Kt, [
        te(r.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), F = (t, r) => {
  const s = t.__vccOpts || t;
  for (const [l, g] of r)
    s[l] = g;
  return s;
}, fe = /* @__PURE__ */ F(Yt, [["__scopeId", "data-v-21565df9"]]), Jt = {
  key: 0,
  class: "panel-title-prefix"
}, Xt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Qt = /* @__PURE__ */ A({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, s) => (o(), b(dt(`h${t.level}`), {
      class: q(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", Jt, i(t.prefix), 1)) : (o(), n("span", Xt)),
        te(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Zt = /* @__PURE__ */ F(Qt, [["__scopeId", "data-v-c3875efc"]]), eo = ["title"], to = ["width", "height"], oo = /* @__PURE__ */ A({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (r, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (l) => r.$emit("click"))
    }, [
      (o(), n("svg", {
        width: t.size,
        height: t.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...s[1] || (s[1] = [
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
      ])], 8, to))
    ], 8, eo));
  }
}), $t = /* @__PURE__ */ F(oo, [["__scopeId", "data-v-6fc7f16d"]]), so = { class: "header-left" }, ao = {
  key: 0,
  class: "header-actions"
}, no = /* @__PURE__ */ A({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (r, s) => (o(), n("div", {
      class: q(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", so, [
        d(Zt, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            v(i(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), b($t, {
          key: 0,
          onClick: s[0] || (s[0] = (l) => r.$emit("info-click"))
        })) : c("", !0)
      ]),
      r.$slots.actions ? (o(), n("div", ao, [
        te(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ge = /* @__PURE__ */ F(no, [["__scopeId", "data-v-55a62cd6"]]), lo = {
  key: 0,
  class: "section-title-count"
}, io = {
  key: 1,
  class: "section-title-icon"
}, ro = /* @__PURE__ */ A({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, s) => (o(), b(dt(`h${t.level}`), {
      class: q(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (l) => t.clickable && r.$emit("click"))
    }, {
      default: a(() => [
        te(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", lo, "(" + i(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), n("span", io, i(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pe = /* @__PURE__ */ F(ro, [["__scopeId", "data-v-559361eb"]]), co = { class: "status-grid" }, uo = { class: "status-grid__column" }, mo = { class: "status-grid__title" }, vo = { class: "status-grid__column status-grid__column--right" }, fo = { class: "status-grid__title" }, go = /* @__PURE__ */ A({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, s) => (o(), n("div", co, [
      e("div", uo, [
        e("h4", mo, i(t.leftTitle), 1),
        te(r.$slots, "left", {}, void 0, !0)
      ]),
      e("div", vo, [
        e("h4", fo, i(t.rightTitle), 1),
        te(r.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), ho = /* @__PURE__ */ F(go, [["__scopeId", "data-v-fe556068"]]), po = {
  key: 0,
  class: "status-item__icon"
}, yo = {
  key: 1,
  class: "status-item__count"
}, wo = { class: "status-item__label" }, bo = /* @__PURE__ */ A({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, s = W(() => `status-item--${r.variant}`);
    return (l, g) => (o(), n("div", {
      class: q(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", po, i(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), n("span", yo, i(t.count), 1)) : c("", !0),
      e("span", wo, i(t.label), 1)
    ], 2));
  }
}), ze = /* @__PURE__ */ F(bo, [["__scopeId", "data-v-6f929183"]]), ko = { class: "issue-card__header" }, $o = { class: "issue-card__icon" }, _o = { class: "issue-card__title" }, Co = {
  key: 0,
  class: "issue-card__content"
}, xo = {
  key: 0,
  class: "issue-card__description"
}, So = {
  key: 1,
  class: "issue-card__items"
}, Eo = {
  key: 2,
  class: "issue-card__actions"
}, Io = /* @__PURE__ */ A({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, s = W(() => `issue-card--${r.severity}`);
    return (l, g) => (o(), n("div", {
      class: q(["issue-card", s.value])
    }, [
      e("div", ko, [
        e("span", $o, i(t.icon), 1),
        e("h4", _o, i(t.title), 1)
      ]),
      l.$slots.default || t.description ? (o(), n("div", Co, [
        t.description ? (o(), n("p", xo, i(t.description), 1)) : c("", !0),
        te(l.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), n("div", So, [
        (o(!0), n(P, null, K(t.items, (y, u) => (o(), n("div", {
          key: u,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, i(y), 1)
        ]))), 128))
      ])) : c("", !0),
      l.$slots.actions ? (o(), n("div", Eo, [
        te(l.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ F(Io, [["__scopeId", "data-v-df6aa348"]]), zo = ["type", "disabled"], Lo = {
  key: 0,
  class: "spinner"
}, Mo = /* @__PURE__ */ A({
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
    return (r, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: q(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (l) => r.$emit("click", l))
    }, [
      t.loading ? (o(), n("span", Lo)) : c("", !0),
      t.loading ? c("", !0) : te(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, zo));
  }
}), U = /* @__PURE__ */ F(Mo, [["__scopeId", "data-v-772abe47"]]), No = { class: "empty-state" }, To = {
  key: 0,
  class: "empty-icon"
}, Do = { class: "empty-message" }, Bo = /* @__PURE__ */ A({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, s) => (o(), n("div", No, [
      t.icon ? (o(), n("div", To, i(t.icon), 1)) : c("", !0),
      e("p", Do, i(t.message), 1),
      t.actionLabel ? (o(), b(U, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => r.$emit("action"))
      }, {
        default: a(() => [
          v(i(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), ke = /* @__PURE__ */ F(Bo, [["__scopeId", "data-v-4466284f"]]), Ro = { class: "branch-indicator" }, Uo = { class: "branch-indicator__info" }, Oo = { class: "branch-indicator__label" }, Vo = { class: "branch-indicator__name" }, Po = {
  key: 0,
  class: "branch-indicator__remote"
}, Ao = {
  key: 0,
  class: "branch-indicator__status"
}, Fo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Wo = {
  key: 1,
  class: "branch-indicator__behind"
}, Ho = {
  key: 1,
  class: "branch-indicator__actions"
}, Go = /* @__PURE__ */ A({
  __name: "BranchIndicator",
  props: {
    label: { default: "Current Branch" },
    branchName: {},
    remote: {},
    commitsAhead: {},
    commitsBehind: {},
    showStatus: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, s) => (o(), n("div", Ro, [
      e("div", Uo, [
        e("span", Oo, i(t.label), 1),
        e("span", Vo, i(t.branchName), 1),
        t.remote ? (o(), n("span", Po, "@" + i(t.remote), 1)) : c("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", Ao, [
        t.commitsAhead ? (o(), n("span", Fo, " ↑ " + i(t.commitsAhead) + " ahead ", 1)) : c("", !0),
        t.commitsBehind ? (o(), n("span", Wo, " ↓ " + i(t.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      r.$slots.actions ? (o(), n("div", Ho, [
        te(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), jo = /* @__PURE__ */ F(Go, [["__scopeId", "data-v-cb8dd50e"]]), qo = /* @__PURE__ */ A({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, s) => (o(), n("span", {
      class: q(["detail-label"]),
      style: qe({ minWidth: t.minWidth })
    }, [
      te(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), it = /* @__PURE__ */ F(qo, [["__scopeId", "data-v-75e9eeb8"]]), Ko = /* @__PURE__ */ A({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, s) => (o(), n("span", {
      class: q(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      te(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ F(Ko, [["__scopeId", "data-v-2f186e4c"]]), Yo = { class: "detail-row" }, Jo = /* @__PURE__ */ A({
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
    return (r, s) => (o(), n("div", Yo, [
      d(it, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          v(i(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), b(rt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          v(i(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : te(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Z = /* @__PURE__ */ F(Jo, [["__scopeId", "data-v-ef15664a"]]), Xo = { class: "modal-header" }, Qo = { class: "modal-body" }, Zo = { class: "status-section" }, es = {
  key: 0,
  class: "status-section"
}, ts = {
  key: 0,
  class: "workflow-group"
}, os = { class: "workflow-group-header" }, ss = { class: "workflow-group-title" }, as = { class: "workflow-list" }, ns = { class: "workflow-name" }, ls = {
  key: 1,
  class: "workflow-group"
}, is = { class: "workflow-group-header" }, rs = { class: "workflow-group-title" }, cs = { class: "workflow-list" }, ds = { class: "workflow-name" }, us = {
  key: 2,
  class: "workflow-group"
}, ms = { class: "workflow-group-header" }, vs = { class: "workflow-group-title" }, fs = { class: "workflow-list" }, gs = { class: "workflow-name" }, hs = {
  key: 3,
  class: "workflow-group"
}, ps = { class: "workflow-group-title" }, ys = { class: "expand-icon" }, ws = {
  key: 0,
  class: "workflow-list"
}, bs = { class: "workflow-name" }, ks = {
  key: 1,
  class: "status-section"
}, $s = {
  key: 0,
  class: "change-group"
}, _s = { class: "change-group-header" }, Cs = { class: "change-group-title" }, xs = { class: "change-list" }, Ss = { class: "node-name" }, Es = {
  key: 0,
  class: "dev-badge"
}, Is = {
  key: 1,
  class: "change-group"
}, zs = { class: "change-group-header" }, Ls = { class: "change-group-title" }, Ms = { class: "change-list" }, Ns = { class: "node-name" }, Ts = {
  key: 0,
  class: "dev-badge"
}, Ds = {
  key: 2,
  class: "change-group"
}, Bs = { class: "change-list" }, Rs = { class: "change-item" }, Us = { class: "node-name" }, Os = {
  key: 3,
  class: "change-group"
}, Vs = {
  key: 2,
  class: "status-section"
}, Ps = {
  key: 0,
  class: "drift-item"
}, As = { class: "drift-list" }, Fs = {
  key: 0,
  class: "drift-list-more"
}, Ws = {
  key: 1,
  class: "drift-item"
}, Hs = { class: "drift-list" }, Gs = {
  key: 0,
  class: "drift-list-more"
}, js = {
  key: 2,
  class: "drift-item"
}, qs = {
  key: 3,
  class: "drift-item"
}, Ks = {
  key: 3,
  class: "status-section"
}, Ys = { class: "info-box" }, Js = { class: "drift-list" }, Xs = {
  key: 0,
  class: "drift-list-more"
}, Qs = {
  key: 4,
  class: "status-section"
}, Zs = { class: "warning-box" }, ea = {
  key: 5,
  class: "empty-state-inline"
}, ta = { class: "modal-actions" }, oa = /* @__PURE__ */ A({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(t) {
    const r = t, s = x(!1);
    ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), yt(() => r.show, (h, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", h);
    }, { immediate: !0 });
    const l = W(() => {
      var h, p, w, _, L;
      return (h = r.status) != null && h.workflows ? (((p = r.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((w = r.status.workflows.modified) == null ? void 0 : w.length) ?? 0) > 0 || (((_ = r.status.workflows.deleted) == null ? void 0 : _.length) ?? 0) > 0 || (((L = r.status.workflows.synced) == null ? void 0 : L.length) ?? 0) > 0 : !1;
    }), g = W(() => {
      var p, w, _;
      const h = (p = r.status) == null ? void 0 : p.git_changes;
      return h ? (((w = h.nodes_added) == null ? void 0 : w.length) ?? 0) > 0 || (((_ = h.nodes_removed) == null ? void 0 : _.length) ?? 0) > 0 || h.workflow_changes || h.has_other_changes : !1;
    }), y = W(() => {
      var h, p, w, _, L, D;
      return !l.value && !g.value && ((p = (h = r.status) == null ? void 0 : h.comparison) == null ? void 0 : p.is_synced) && (((w = r.status) == null ? void 0 : w.missing_models_count) ?? 0) === 0 && (((D = (L = (_ = r.status) == null ? void 0 : _.comparison) == null ? void 0 : L.disabled_nodes) == null ? void 0 : D.length) ?? 0) === 0;
    }), u = W(() => {
      var p, w;
      const h = (w = (p = r.status) == null ? void 0 : p.git_changes) == null ? void 0 : w.workflow_changes;
      return h ? typeof h == "number" ? h : Object.keys(h).length : 0;
    });
    function f(h) {
      return typeof h == "string" ? h : h.name;
    }
    function m(h) {
      return typeof h == "object" && h.is_development === !0;
    }
    return (h, p) => {
      var w, _, L, D, H, T, R, J, j, M, I, k, S, C, z, N, G, O, E, Y, oe, Re, Ue, ie;
      return o(), b(Be, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[4] || (p[4] = (ee) => h.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: p[3] || (p[3] = ve(() => {
            }, ["stop"]))
          }, [
            e("div", Xo, [
              p[5] || (p[5] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (ee) => h.$emit("close"))
              }, "✕")
            ]),
            e("div", Qo, [
              e("div", Zo, [
                d(pe, { level: "4" }, {
                  default: a(() => [...p[6] || (p[6] = [
                    v("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                d(Z, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              l.value ? (o(), n("div", es, [
                d(pe, { level: "4" }, {
                  default: a(() => [...p[7] || (p[7] = [
                    v("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                (_ = (w = t.status.workflows) == null ? void 0 : w.new) != null && _.length ? (o(), n("div", ts, [
                  e("div", os, [
                    p[8] || (p[8] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", ss, "NEW (" + i(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", as, [
                    (o(!0), n(P, null, K(t.status.workflows.new, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", ns, i(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (D = (L = t.status.workflows) == null ? void 0 : L.modified) != null && D.length ? (o(), n("div", ls, [
                  e("div", is, [
                    p[9] || (p[9] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", rs, "MODIFIED (" + i(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", cs, [
                    (o(!0), n(P, null, K(t.status.workflows.modified, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", ds, i(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (H = t.status.workflows) == null ? void 0 : H.deleted) != null && T.length ? (o(), n("div", us, [
                  e("div", ms, [
                    p[10] || (p[10] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", vs, "DELETED (" + i(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", fs, [
                    (o(!0), n(P, null, K(t.status.workflows.deleted, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", gs, i(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (J = (R = t.status.workflows) == null ? void 0 : R.synced) != null && J.length ? (o(), n("div", hs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[1] || (p[1] = (ee) => s.value = !s.value)
                  }, [
                    p[11] || (p[11] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ps, "SYNCED (" + i(t.status.workflows.synced.length) + ")", 1),
                    e("span", ys, i(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", ws, [
                    (o(!0), n(P, null, K(t.status.workflows.synced, (ee) => (o(), n("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", bs, i(ee), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              g.value ? (o(), n("div", ks, [
                d(pe, { level: "4" }, {
                  default: a(() => [...p[12] || (p[12] = [
                    v("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (M = (j = t.status.git_changes) == null ? void 0 : j.nodes_added) != null && M.length ? (o(), n("div", $s, [
                  e("div", _s, [
                    p[13] || (p[13] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Cs, "NODES ADDED (" + i(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", xs, [
                    (o(!0), n(P, null, K(t.status.git_changes.nodes_added, (ee) => (o(), n("div", {
                      key: f(ee),
                      class: "change-item"
                    }, [
                      e("span", Ss, i(f(ee)), 1),
                      m(ee) ? (o(), n("span", Es, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (k = (I = t.status.git_changes) == null ? void 0 : I.nodes_removed) != null && k.length ? (o(), n("div", Is, [
                  e("div", zs, [
                    p[14] || (p[14] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Ls, "NODES REMOVED (" + i(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ms, [
                    (o(!0), n(P, null, K(t.status.git_changes.nodes_removed, (ee) => (o(), n("div", {
                      key: f(ee),
                      class: "change-item"
                    }, [
                      e("span", Ns, i(f(ee)), 1),
                      m(ee) ? (o(), n("span", Ts, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (S = t.status.git_changes) != null && S.workflow_changes ? (o(), n("div", Ds, [
                  p[15] || (p[15] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Bs, [
                    e("div", Rs, [
                      e("span", Us, i(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (C = t.status.git_changes) != null && C.has_other_changes ? (o(), n("div", Os, [...p[16] || (p[16] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : c("", !0)
              ])) : c("", !0),
              (z = t.status.comparison) != null && z.is_synced ? c("", !0) : (o(), n("div", Vs, [
                d(pe, { level: "4" }, {
                  default: a(() => [...p[17] || (p[17] = [
                    v("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                p[18] || (p[18] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (G = (N = t.status.comparison) == null ? void 0 : N.missing_nodes) != null && G.length ? (o(), n("div", Ps, [
                  d(Z, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", As, [
                    (o(!0), n(P, null, K(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), n("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + i(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", Fs, " ... and " + i(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (E = (O = t.status.comparison) == null ? void 0 : O.extra_nodes) != null && E.length ? (o(), n("div", Ws, [
                  d(Z, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Hs, [
                    (o(!0), n(P, null, K(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), n("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + i(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", Gs, " ... and " + i(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (oe = (Y = t.status.comparison) == null ? void 0 : Y.version_mismatches) != null && oe.length ? (o(), n("div", js, [
                  d(Z, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (Re = t.status.comparison) != null && Re.packages_in_sync ? c("", !0) : (o(), n("div", qs, [
                  d(Z, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ie = (Ue = t.status.comparison) == null ? void 0 : Ue.disabled_nodes) != null && ie.length ? (o(), n("div", Ks, [
                d(pe, { level: "4" }, {
                  default: a(() => [...p[19] || (p[19] = [
                    v("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ys, [
                  p[20] || (p[20] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, i(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Js, [
                  (o(!0), n(P, null, K(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), n("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + i(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", Xs, " ... and " + i(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Qs, [
                d(pe, { level: "4" }, {
                  default: a(() => [...p[21] || (p[21] = [
                    v("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Zs, [
                  p[22] || (p[22] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, i(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[23] || (p[23] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              y.value ? (o(), n("div", ea, [...p[24] || (p[24] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", ta, [
              d(U, {
                variant: "secondary",
                onClick: p[2] || (p[2] = (ee) => h.$emit("close"))
              }, {
                default: a(() => [...p[25] || (p[25] = [
                  v(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), gt = /* @__PURE__ */ F(oa, [["__scopeId", "data-v-19585c5b"]]), sa = { class: "health-section-header" }, aa = { style: { "margin-top": "var(--cg-space-1)" } }, na = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, la = /* @__PURE__ */ A({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(t, { emit: r }) {
    const s = t, l = x(!1), g = x(!1);
    ue(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", gt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    function u() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    const f = W(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), m = W(() => {
      const _ = s.status.git_changes;
      return _.nodes_added.length > 0 || _.nodes_removed.length > 0 || _.workflow_changes || _.has_other_changes;
    }), h = W(() => s.status.git_changes.has_other_changes), p = W(() => s.status.missing_models_count > 0 || m.value || !s.status.comparison.is_synced), w = W(() => {
      const _ = [];
      return s.status.workflows.new.length > 0 && _.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && _.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && _.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && _.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && _.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${_.length > 0 ? _.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (_, L) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: L[0] || (L[0] = (D) => g.value = !0),
            onMouseleave: L[1] || (L[1] = (D) => g.value = !1)
          }, [
            e("div", sa, [
              d(pe, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...L[9] || (L[9] = [
                  v(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              d(Pt, { name: "fade" }, {
                default: a(() => [
                  g.value ? (o(), b(U, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...L[10] || (L[10] = [
                      v(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            d(ho, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), b(ze, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), b(ze, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), b(ze, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                d(ze, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: f.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), b(ze, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), b(ze, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                h.value ? (o(), b(ze, {
                  key: 2,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                m.value ? c("", !0) : (o(), b(ze, {
                  key: 3,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", aa, [
            d(jo, {
              "branch-name": t.status.current_branch || "main"
            }, {
              actions: a(() => [
                d(U, {
                  variant: "secondary",
                  size: "sm",
                  onClick: L[2] || (L[2] = (D) => _.$emit("switch-branch"))
                }, {
                  default: a(() => [...L[11] || (L[11] = [
                    v(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          p.value ? (o(), n("div", na, [
            d(pe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...L[12] || (L[12] = [
                v(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            t.status.missing_models_count > 0 ? (o(), b(Xe, {
              key: 0,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                d(U, {
                  variant: "secondary",
                  size: "sm",
                  onClick: L[3] || (L[3] = (D) => _.$emit("view-workflows"))
                }, {
                  default: a(() => [...L[13] || (L[13] = [
                    v(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                d(U, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[4] || (L[4] = (D) => _.$emit("resolve-models"))
                }, {
                  default: a(() => [...L[14] || (L[14] = [
                    v(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            m.value ? (o(), b(Xe, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: "You have unsaved changes",
              description: w.value
            }, {
              actions: a(() => [
                d(U, {
                  variant: "secondary",
                  size: "sm",
                  onClick: u
                }, {
                  default: a(() => [...L[15] || (L[15] = [
                    v(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                d(U, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[5] || (L[5] = (D) => _.$emit("commit-changes"))
                }, {
                  default: a(() => [...L[16] || (L[16] = [
                    v(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), b(Xe, {
              key: 2,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                d(U, {
                  variant: "secondary",
                  size: "sm",
                  onClick: L[6] || (L[6] = (D) => _.$emit("view-debug"))
                }, {
                  default: a(() => [...L[17] || (L[17] = [
                    v(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                d(U, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[7] || (L[7] = (D) => _.$emit("sync-environment"))
                }, {
                  default: a(() => [...L[18] || (L[18] = [
                    v(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : c("", !0),
          !p.value && !m.value ? (o(), b(ke, {
            key: 1,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      d(gt, {
        show: l.value,
        status: t.status,
        onClose: L[8] || (L[8] = (D) => l.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), ia = /* @__PURE__ */ F(la, [["__scopeId", "data-v-d5c467d9"]]), ra = ["type", "value", "placeholder", "disabled"], ca = /* @__PURE__ */ A({
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
  setup(t, { expose: r, emit: s }) {
    const l = t, g = s, y = x(null);
    function u(f) {
      const m = f.target.value;
      g("update:modelValue", m);
    }
    return ue(() => {
      l.autoFocus && y.value && y.value.focus();
    }), r({
      focus: () => {
        var f;
        return (f = y.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = y.value) == null ? void 0 : f.blur();
      }
    }), (f, m) => (o(), n("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: q(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        m[0] || (m[0] = Ce((h) => f.$emit("enter"), ["enter"])),
        m[1] || (m[1] = Ce((h) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (h) => f.$emit("focus")),
      onBlur: m[3] || (m[3] = (h) => f.$emit("blur"))
    }, null, 42, ra));
  }
}), je = /* @__PURE__ */ F(ca, [["__scopeId", "data-v-0380d08f"]]), da = { class: "branch-create-form" }, ua = { class: "form-actions" }, ma = /* @__PURE__ */ A({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const s = r, l = x(""), g = W(() => {
      const f = l.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function y() {
      g.value && (s("create", l.value.trim()), l.value = "");
    }
    function u() {
      l.value = "", s("cancel");
    }
    return (f, m) => (o(), n("div", da, [
      d(je, {
        modelValue: l.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => l.value = h),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", ua, [
        d(U, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: y
        }, {
          default: a(() => [...m[1] || (m[1] = [
            v(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        d(U, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: a(() => [...m[2] || (m[2] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), va = /* @__PURE__ */ F(ma, [["__scopeId", "data-v-7c500394"]]), fa = { class: "branch-list-item__indicator" }, ga = { class: "branch-list-item__name" }, ha = {
  key: 0,
  class: "branch-list-item__actions"
}, pa = {
  key: 0,
  class: "branch-list-item__current-label"
}, ya = /* @__PURE__ */ A({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (r, s) => (o(), n("div", {
      class: q(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (l) => t.clickable && r.$emit("click"))
    }, [
      e("span", fa, i(t.isCurrent ? "●" : "○"), 1),
      e("span", ga, i(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (o(), n("div", ha, [
        te(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", pa, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), wa = /* @__PURE__ */ F(ya, [["__scopeId", "data-v-c6581a24"]]), ba = {
  key: 2,
  class: "branch-list"
}, ka = /* @__PURE__ */ A({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: r }) {
    const s = r, l = x(!1);
    function g(u) {
      s("create", u), y();
    }
    function y() {
      l.value = !1;
    }
    return (u, f) => (o(), b(fe, null, {
      header: a(() => [
        d(ge, { title: "BRANCHES" }, {
          actions: a(() => [
            d(U, {
              variant: "ghost",
              size: "sm",
              onClick: f[0] || (f[0] = (m) => l.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...f[1] || (f[1] = [
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
        l.value ? (o(), b(va, {
          key: 0,
          onCreate: g,
          onCancel: y
        })) : c("", !0),
        t.branches.length === 0 ? (o(), b(ke, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", ba, [
          (o(!0), n(P, null, K(t.branches, (m) => (o(), b(wa, {
            key: m.name,
            "branch-name": m.name,
            "is-current": m.is_current
          }, {
            actions: a(() => [
              m.is_current ? c("", !0) : (o(), b(U, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (h) => u.$emit("switch", m.name)
              }, {
                default: a(() => [...f[2] || (f[2] = [
                  v(" Switch ", -1)
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
}), $a = /* @__PURE__ */ F(ka, [["__scopeId", "data-v-763d6ec4"]]), _a = { class: "commit-list" }, Ca = /* @__PURE__ */ A({
  __name: "CommitList",
  setup(t) {
    return (r, s) => (o(), n("div", _a, [
      te(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), xa = /* @__PURE__ */ F(Ca, [["__scopeId", "data-v-8c5ee761"]]), Sa = { class: "commit-hash" }, Ea = /* @__PURE__ */ A({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, s = W(() => r.hash.slice(0, r.length));
    return (l, g) => (o(), n("span", Sa, i(s.value), 1));
  }
}), _t = /* @__PURE__ */ F(Ea, [["__scopeId", "data-v-7c333cc6"]]), Ia = { class: "commit-message" }, za = { class: "commit-date" }, La = /* @__PURE__ */ A({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const s = t, l = r;
    function g() {
      s.clickable && l("click");
    }
    return (y, u) => (o(), n("div", {
      class: q(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      d(_t, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Ia, i(t.message), 1),
      e("span", za, i(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = ve(() => {
        }, ["stop"]))
      }, [
        te(y.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ F(La, [["__scopeId", "data-v-dd7c621b"]]), Na = /* @__PURE__ */ A({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, s) => (o(), b(fe, null, {
      header: a(() => [
        d(ge, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), b(ke, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), b(xa, { key: 1 }, {
          default: a(() => [
            (o(!0), n(P, null, K(t.commits, (l) => (o(), b(Ma, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (g) => r.$emit("select", l)
            }, {
              actions: a(() => [
                d(U, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => r.$emit("checkout", l),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...s[0] || (s[0] = [
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
}), Ta = /* @__PURE__ */ F(Na, [["__scopeId", "data-v-981c3c64"]]);
[
  // SYNCED workflows (12) - All good
  ...Array(12).fill(null).map((t, r) => ({
    name: `synced-workflow-${r + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + r,
    model_count: 1 + r % 3,
    sync_state: "synced"
  }))
];
const Da = [
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
];
[
  ...Da,
  (Date.now() / 1e3 - 86400 * 60, Math.floor(Date.now() / 1e3)),
  (Date.now() / 1e3 - 86400 * 45, Math.floor(Date.now() / 1e3))
];
(/* @__PURE__ */ new Date()).toISOString(), new Date(Date.now() - 6e4).toISOString(), new Date(Date.now() - 12e4).toISOString(), new Date(Date.now() - 18e4).toISOString();
function me() {
  const t = x(!1), r = x(null);
  async function s(V, X) {
    var Fe;
    if (!((Fe = window.app) != null && Fe.api))
      throw new Error("ComfyUI API not available");
    const ae = await window.app.api.fetchApi(V, X);
    if (!ae.ok) {
      const Ke = await ae.json().catch(() => ({}));
      throw new Error(Ke.error || Ke.message || `Request failed: ${ae.status}`);
    }
    return ae.json();
  }
  async function l() {
    return s("/v2/comfygit/status");
  }
  async function g(V, X = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: V, allow_issues: X })
    });
  }
  async function y(V = 10, X = 0) {
    return s(`/v2/comfygit/log?limit=${V}&offset=${X}`);
  }
  async function u(V) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function f() {
    return s("/v2/comfygit/branches");
  }
  async function m(V) {
    return s(`/v2/comfygit/commit/${V}`);
  }
  async function h(V, X = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: V, force: X })
    });
  }
  async function p(V, X = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, start_point: X })
    });
  }
  async function w(V, X = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: V, force: X })
    });
  }
  async function _() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const V = await l();
        return [{
          name: V.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + V.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: V.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: V.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function L(V) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: V })
    });
  }
  async function D() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function H(V, X, ae) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, pytorch_backend: X, clone_from: ae })
    });
  }
  async function T(V) {
    return s(`/v2/workspace/environments/${V}`, {
      method: "DELETE"
    });
  }
  async function R() {
    try {
      return s("/v2/comfygit/workflows");
    } catch {
      const V = await l(), X = [];
      return V.workflows.new.forEach((ae) => {
        X.push({ name: ae, status: "new", missing_nodes: 0, missing_models: 0, path: ae });
      }), V.workflows.modified.forEach((ae) => {
        X.push({ name: ae, status: "modified", missing_nodes: 0, missing_models: 0, path: ae });
      }), V.workflows.synced.forEach((ae) => {
        X.push({ name: ae, status: "synced", missing_nodes: 0, missing_models: 0, path: ae });
      }), X;
    }
  }
  async function J(V) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(V)}/details`);
  }
  async function j(V) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(V)}/resolve`, {
      method: "POST"
    });
  }
  async function M(V, X, ae) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(V)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: X, install_models: ae })
    });
  }
  async function I(V, X, ae) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(V)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: X, importance: ae })
    });
  }
  async function k() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function S() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function C(V, X) {
    return s(`/v2/workspace/models/${V}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: X })
    });
  }
  async function z(V) {
    return s(`/v2/workspace/models/${V}`, {
      method: "DELETE"
    });
  }
  async function N(V) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function G() {
    try {
      return s("/v2/comfygit/config");
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0
      };
    }
  }
  async function O(V) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function E(V, X) {
    try {
      const ae = new URLSearchParams();
      return V && ae.append("level", V), X && ae.append("lines", X.toString()), s(`/v2/comfygit/debug/logs?${ae}`);
    } catch {
      return [];
    }
  }
  async function Y(V, X) {
    try {
      const ae = new URLSearchParams();
      return V && ae.append("level", V), X && ae.append("lines", X.toString()), s(`/v2/workspace/debug/logs?${ae}`);
    } catch {
      return [];
    }
  }
  async function oe() {
    try {
      return s("/v2/comfygit/nodes");
    } catch {
      return {
        nodes: [],
        total_count: 0,
        installed_count: 0,
        missing_count: 0
      };
    }
  }
  async function Re(V) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(V)}/install`, {
      method: "POST"
    });
  }
  async function Ue(V) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(V)}/update`, {
      method: "POST"
    });
  }
  async function ie(V) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function ee() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ne(V, X) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, url: X })
    });
  }
  async function Ie(V) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function et(V, X, ae) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: X, push_url: ae })
    });
  }
  async function ne(V) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(V)}/fetch`, {
      method: "POST"
    });
  }
  async function $e(V) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(V)}/status`);
    } catch {
      return null;
    }
  }
  async function tt(V = "skip", X = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: V,
        remove_extra_nodes: X
      })
    });
  }
  return {
    isLoading: t,
    error: r,
    getStatus: l,
    commit: g,
    getHistory: y,
    exportEnv: u,
    // Git Operations
    getBranches: f,
    getCommitDetail: m,
    checkout: h,
    createBranch: p,
    switchBranch: w,
    // Environment Management
    getEnvironments: _,
    switchEnvironment: L,
    getSwitchProgress: D,
    createEnvironment: H,
    deleteEnvironment: T,
    // Workflow Management
    getWorkflows: R,
    getWorkflowDetails: J,
    resolveWorkflow: j,
    installWorkflowDeps: M,
    setModelImportance: I,
    // Model Management
    getEnvironmentModels: k,
    getWorkspaceModels: S,
    updateModelSource: C,
    deleteModel: z,
    downloadModel: N,
    // Settings
    getConfig: G,
    updateConfig: O,
    // Debug/Logs
    getEnvironmentLogs: E,
    getWorkspaceLogs: Y,
    // Node Management
    getNodes: oe,
    installNode: Re,
    updateNode: Ue,
    uninstallNode: ie,
    // Git Remotes
    getRemotes: ee,
    addRemote: Ne,
    removeRemote: Ie,
    updateRemoteUrl: et,
    fetchRemote: ne,
    getRemoteSyncStatus: $e,
    // Environment Sync
    syncEnvironmentManually: tt
  };
}
const Ba = { class: "base-modal-header" }, Ra = {
  key: 0,
  class: "base-modal-title"
}, Ua = { class: "base-modal-body" }, Oa = {
  key: 0,
  class: "base-modal-loading"
}, Va = {
  key: 1,
  class: "base-modal-error"
}, Pa = {
  key: 0,
  class: "base-modal-footer"
}, Aa = /* @__PURE__ */ A({
  __name: "BaseModal",
  props: {
    title: {},
    size: { default: "md" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    error: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const s = t, l = r;
    function g() {
      s.closeOnOverlayClick && l("close");
    }
    function y(u) {
      u.key === "Escape" && l("close");
    }
    return ue(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), At(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (u, f) => (o(), b(Be, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: q(["base-modal-content", t.size]),
          onClick: f[1] || (f[1] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", Ba, [
            te(u.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", Ra, i(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (m) => u.$emit("close"))
            }, [...f[2] || (f[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : c("", !0)
          ]),
          e("div", Ua, [
            t.loading ? (o(), n("div", Oa, "Loading...")) : t.error ? (o(), n("div", Va, i(t.error), 1)) : te(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (o(), n("div", Pa, [
            te(u.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), Ze = /* @__PURE__ */ F(Aa, [["__scopeId", "data-v-700d367b"]]), Fa = ["type", "disabled"], Wa = {
  key: 0,
  class: "spinner"
}, Ha = /* @__PURE__ */ A({
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
    return (r, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: q(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (l) => r.$emit("click", l))
    }, [
      t.loading ? (o(), n("span", Wa)) : c("", !0),
      te(r.$slots, "default", {}, void 0, !0)
    ], 10, Fa));
  }
}), ce = /* @__PURE__ */ F(Ha, [["__scopeId", "data-v-f3452606"]]), Ga = {
  key: 0,
  class: "base-title-count"
}, ja = /* @__PURE__ */ A({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, s) => (o(), b(dt(`h${t.level}`), {
      class: q(["base-title", t.variant])
    }, {
      default: a(() => [
        te(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Ga, "(" + i(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Me = /* @__PURE__ */ F(ja, [["__scopeId", "data-v-5a01561d"]]), qa = ["value", "disabled"], Ka = {
  key: 0,
  value: "",
  disabled: ""
}, Ya = ["value"], Ja = {
  key: 0,
  class: "base-select-error"
}, Xa = /* @__PURE__ */ A({
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
    function r(l) {
      return typeof l == "string" ? l : l.value;
    }
    function s(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, g) => (o(), n("div", {
      class: q(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: q(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (y) => l.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", Ka, i(t.placeholder), 1)) : c("", !0),
        (o(!0), n(P, null, K(t.options, (y) => (o(), n("option", {
          key: r(y),
          value: r(y)
        }, i(s(y)), 9, Ya))), 128))
      ], 42, qa),
      t.error ? (o(), n("span", Ja, i(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Qa = /* @__PURE__ */ F(Xa, [["__scopeId", "data-v-7436d745"]]), Za = { class: "popover-header" }, en = { class: "popover-title" }, tn = { class: "popover-content" }, on = {
  key: 0,
  class: "popover-actions"
}, sn = /* @__PURE__ */ A({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, s) => (o(), b(Be, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: qe({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", Za, [
            e("h4", en, i(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", tn, [
            te(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (o(), n("div", on, [
            te(r.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), xe = /* @__PURE__ */ F(sn, [["__scopeId", "data-v-42815ace"]]), an = { class: "detail-section" }, nn = {
  key: 0,
  class: "empty-message"
}, ln = { class: "model-header" }, rn = { class: "model-name" }, cn = { class: "model-details" }, dn = { class: "model-row" }, un = { class: "model-row" }, mn = { class: "label" }, vn = {
  key: 0,
  class: "model-row model-row-nodes"
}, fn = { class: "node-list" }, gn = ["onClick"], hn = {
  key: 1,
  class: "model-row"
}, pn = { class: "value" }, yn = {
  key: 0,
  class: "model-actions"
}, wn = { class: "detail-section" }, bn = {
  key: 0,
  class: "empty-message"
}, kn = { class: "node-name" }, $n = {
  key: 0,
  class: "node-version"
}, _n = /* @__PURE__ */ A({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: r }) {
    const s = t, l = r, { getWorkflowDetails: g, setModelImportance: y, installWorkflowDeps: u } = me(), f = x(null), m = x(!1), h = x(null), p = x(!1), w = x({}), _ = x({}), L = x(!1), D = x(/* @__PURE__ */ new Set()), H = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function T(z) {
      switch (z) {
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
    function R(z) {
      switch (z) {
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
    function J(z) {
      if (!z.loaded_by || z.loaded_by.length === 0) return [];
      const N = z.hash || z.filename;
      return D.value.has(N) ? z.loaded_by : z.loaded_by.slice(0, 3);
    }
    function j(z) {
      return D.value.has(z);
    }
    function M(z) {
      D.value.has(z) ? D.value.delete(z) : D.value.add(z), D.value = new Set(D.value);
    }
    async function I() {
      m.value = !0, h.value = null;
      try {
        f.value = await g(s.workflowName);
      } catch (z) {
        h.value = z instanceof Error ? z.message : "Failed to load workflow details";
      } finally {
        m.value = !1;
      }
    }
    function k(z, N) {
      w.value[z] = N, p.value = !0;
    }
    async function S() {
      if (!p.value) {
        l("close");
        return;
      }
      m.value = !0, h.value = null;
      try {
        for (const [z, N] of Object.entries(w.value))
          await y(s.workflowName, z, N);
        l("close");
      } catch (z) {
        h.value = z instanceof Error ? z.message : "Failed to save changes";
      } finally {
        m.value = !1;
      }
    }
    async function C(z) {
      _.value[z] = !0, h.value = null;
      try {
        await u(s.workflowName, !0, !1), await I();
      } catch (N) {
        h.value = N instanceof Error ? N.message : "Failed to install node";
      } finally {
        _.value[z] = !1;
      }
    }
    return ue(I), (z, N) => (o(), n(P, null, [
      d(Ze, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: m.value,
        error: h.value || void 0,
        onClose: N[5] || (N[5] = (G) => l("close"))
      }, {
        body: a(() => [
          f.value ? (o(), n(P, { key: 0 }, [
            e("section", an, [
              d(Me, { variant: "section" }, {
                default: a(() => [
                  v("MODELS USED (" + i(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (o(), n("div", nn, " No models used in this workflow ")) : c("", !0),
              (o(!0), n(P, null, K(f.value.models, (G) => (o(), n("div", {
                key: G.hash,
                class: "model-card"
              }, [
                e("div", ln, [
                  N[7] || (N[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", rn, i(G.filename), 1)
                ]),
                e("div", cn, [
                  e("div", dn, [
                    N[8] || (N[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: q(["value", T(G.status)])
                    }, i(R(G.status)), 3)
                  ]),
                  e("div", un, [
                    e("span", mn, [
                      N[9] || (N[9] = v(" Importance: ", -1)),
                      d($t, {
                        size: 14,
                        title: "About importance levels",
                        onClick: N[0] || (N[0] = (O) => L.value = !0)
                      })
                    ]),
                    d(Qa, {
                      "model-value": w.value[G.hash] || G.importance,
                      options: H,
                      "onUpdate:modelValue": (O) => k(G.hash, O)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  G.loaded_by && G.loaded_by.length > 0 ? (o(), n("div", vn, [
                    N[10] || (N[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", fn, [
                      (o(!0), n(P, null, K(J(G), (O, E) => (o(), n("div", {
                        key: `${O.node_id}-${E}`,
                        class: "node-reference"
                      }, i(O.node_type) + " (Node #" + i(O.node_id) + ") ", 1))), 128)),
                      G.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (O) => M(G.hash || G.filename)
                      }, i(j(G.hash || G.filename) ? "▼ Show less" : `▶ View all (${G.loaded_by.length})`), 9, gn)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  G.size_mb ? (o(), n("div", hn, [
                    N[11] || (N[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", pn, i(G.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                G.status !== "available" ? (o(), n("div", yn, [
                  G.status === "downloadable" ? (o(), b(ce, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: N[1] || (N[1] = (O) => l("resolve"))
                  }, {
                    default: a(() => [...N[12] || (N[12] = [
                      v(" Download ", -1)
                    ])]),
                    _: 1
                  })) : G.status === "path_mismatch" ? (o(), b(ce, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[2] || (N[2] = (O) => l("resolve"))
                  }, {
                    default: a(() => [...N[13] || (N[13] = [
                      v(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), b(ce, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: N[3] || (N[3] = (O) => l("resolve"))
                  }, {
                    default: a(() => [...N[14] || (N[14] = [
                      v(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", wn, [
              d(Me, { variant: "section" }, {
                default: a(() => [
                  v("NODES USED (" + i(f.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.nodes.length === 0 ? (o(), n("div", bn, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), n(P, null, K(f.value.nodes, (G) => (o(), n("div", {
                key: G.name,
                class: "node-item"
              }, [
                e("span", {
                  class: q(["node-status", G.status === "installed" ? "installed" : "missing"])
                }, i(G.status === "installed" ? "✓" : "✕"), 3),
                e("span", kn, i(G.name), 1),
                G.version ? (o(), n("span", $n, "v" + i(G.version), 1)) : c("", !0),
                G.status === "missing" ? (o(), b(ce, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: _.value[G.name],
                  onClick: (O) => C(G.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...N[15] || (N[15] = [
                    v(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: a(() => [
          d(ce, {
            variant: "secondary",
            onClick: N[4] || (N[4] = (G) => l("close"))
          }, {
            default: a(() => [...N[16] || (N[16] = [
              v(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (o(), b(ce, {
            key: 0,
            variant: "primary",
            onClick: S
          }, {
            default: a(() => [...N[17] || (N[17] = [
              v(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      d(xe, {
        show: L.value,
        title: "Model Importance Levels",
        onClose: N[6] || (N[6] = (G) => L.value = !1)
      }, {
        content: a(() => [...N[18] || (N[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              v(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              v(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              v(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Cn = /* @__PURE__ */ F(_n, [["__scopeId", "data-v-1325d542"]]), xn = {
  key: 0,
  class: "resolve-section"
}, Sn = { class: "resolve-card success-card" }, En = { class: "items-list" }, In = { class: "item-info" }, zn = { class: "item-name" }, Ln = {
  key: 0,
  class: "item-meta"
}, Mn = { class: "match-type" }, Nn = { class: "source" }, Tn = {
  key: 1,
  class: "resolve-section"
}, Dn = { class: "resolve-card warning-card" }, Bn = { class: "items-list" }, Rn = { class: "item-info" }, Un = { class: "item-name" }, On = { class: "item-meta" }, Vn = { key: 0 }, Pn = { key: 1 }, An = {
  key: 0,
  class: "item-warning"
}, Fn = {
  key: 0,
  class: "item-action"
}, Wn = ["onClick"], Hn = {
  key: 2,
  class: "resolve-section"
}, Gn = { class: "info-text" }, jn = { class: "actions-summary" }, qn = { class: "summary-list" }, Kn = { key: 0 }, Yn = { key: 1 }, Jn = { key: 2 }, Xn = {
  key: 0,
  class: "estimated-size"
}, Qn = /* @__PURE__ */ A({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: r }) {
    const s = t, l = r, { resolveWorkflow: g, installWorkflowDeps: y } = me(), u = x(null), f = x(!1), m = x(!1), h = x(null), p = W(() => {
      var I;
      return u.value ? ((I = u.value.download_results) == null ? void 0 : I.every((k) => k.can_download)) ?? !1 : !1;
    });
    async function w() {
      f.value = !0, h.value = null;
      try {
        u.value = await g(s.workflowName);
      } catch (I) {
        h.value = I instanceof Error ? I.message : "Failed to analyze workflow";
      } finally {
        f.value = !1;
      }
    }
    function _(I) {
      return !I.possible_matches || I.possible_matches.length === 0 ? null : I.possible_matches.reduce(
        (k, S) => S.match_confidence > k.match_confidence ? S : k
      );
    }
    function L(I) {
      return I >= 0.9 ? "high" : I >= 0.7 ? "medium" : "low";
    }
    function D(I) {
      const k = _(I);
      return k ? k.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function H(I) {
      var k, S;
      return (S = (k = u.value) == null ? void 0 : k.download_results) == null ? void 0 : S.find((C) => C.model === I);
    }
    function T(I) {
      const k = H(I);
      return (k == null ? void 0 : k.can_download) ?? !1;
    }
    function R(I) {
      const k = H(I);
      return (k == null ? void 0 : k.source_url) || null;
    }
    function J(I) {
      window.open(I, "_blank");
    }
    async function j() {
      if (!(!u.value || m.value)) {
        m.value = !0, h.value = null;
        try {
          await y(
            s.workflowName,
            u.value.nodes_to_install,
            []
          ), l("install"), l("refresh"), l("close");
        } catch (I) {
          h.value = I instanceof Error ? I.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    async function M() {
      if (!(!u.value || m.value)) {
        m.value = !0, h.value = null;
        try {
          await y(
            s.workflowName,
            u.value.nodes_to_install,
            u.value.models_to_download
          ), l("install"), l("refresh"), l("close");
        } catch (I) {
          h.value = I instanceof Error ? I.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    return ue(w), (I, k) => (o(), b(Ze, {
      title: `RESOLVE DEPENDENCIES: ${t.workflowName}`,
      size: "lg",
      loading: f.value,
      error: h.value || void 0,
      onClose: k[1] || (k[1] = (S) => l("close"))
    }, {
      body: a(() => [
        u.value ? (o(), n(P, { key: 0 }, [
          k[5] || (k[5] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          u.value.nodes_unresolved.length > 0 ? (o(), n("section", xn, [
            d(Me, { variant: "section" }, {
              default: a(() => [
                v("NODES (" + i(u.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", Sn, [
              k[2] || (k[2] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "✓"),
                e("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              e("div", En, [
                (o(!0), n(P, null, K(u.value.nodes_unresolved, (S) => {
                  var C;
                  return o(), n("div", {
                    key: S.node_type,
                    class: "item"
                  }, [
                    e("div", In, [
                      e("div", zn, i(((C = _(S)) == null ? void 0 : C.package_id) || S.node_type), 1),
                      _(S) ? (o(), n("div", Ln, [
                        e("span", {
                          class: q(["confidence-badge", L(_(S).match_confidence)])
                        }, i(Math.round(_(S).match_confidence * 100)) + "% match ", 3),
                        e("span", Mn, i(_(S).match_type), 1),
                        e("span", Nn, "Source: " + i(D(S)), 1)
                      ])) : c("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : c("", !0),
          u.value.models_unresolved.length > 0 ? (o(), n("section", Tn, [
            d(Me, { variant: "section" }, {
              default: a(() => [
                v("MODELS (" + i(u.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", Dn, [
              k[3] || (k[3] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "⚠"),
                e("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              e("div", Bn, [
                (o(!0), n(P, null, K(u.value.models_unresolved, (S) => (o(), n("div", {
                  key: S.filename,
                  class: "item"
                }, [
                  e("div", Rn, [
                    e("div", Un, i(S.filename), 1),
                    e("div", On, [
                      S.expected_category ? (o(), n("span", Vn, "Type: " + i(S.expected_category), 1)) : c("", !0),
                      H(S.filename) ? (o(), n("span", Pn, " Size: ~" + i(H(S.filename).estimated_size_mb) + " MB ", 1)) : c("", !0)
                    ]),
                    T(S.filename) ? c("", !0) : (o(), n("div", An, " No auto-download source configured "))
                  ]),
                  R(S.filename) ? (o(), n("div", Fn, [
                    e("button", {
                      class: "link-btn",
                      onClick: (C) => J(R(S.filename))
                    }, " Open Source ↗ ", 8, Wn)
                  ])) : c("", !0)
                ]))), 128))
              ])
            ])
          ])) : c("", !0),
          u.value.nodes_resolved.length > 0 || u.value.models_resolved.length > 0 ? (o(), n("section", Hn, [
            d(Me, { variant: "section" }, {
              default: a(() => [
                v(" ALREADY AVAILABLE (" + i(u.value.nodes_resolved.length + u.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            e("div", Gn, i(u.value.nodes_resolved.length) + " nodes and " + i(u.value.models_resolved.length) + " models are already installed ", 1)
          ])) : c("", !0),
          e("div", jn, [
            k[4] || (k[4] = e("div", { class: "summary-title" }, "This will:", -1)),
            e("ol", qn, [
              u.value.nodes_to_install.length ? (o(), n("li", Kn, " Install " + i(u.value.nodes_to_install.length) + " nodes (~" + i(u.value.estimated_time_seconds) + "s) ", 1)) : c("", !0),
              u.value.nodes_to_install.length ? (o(), n("li", Yn, " Restart ComfyUI to load new nodes ")) : c("", !0),
              u.value.models_to_download.length ? (o(), n("li", Jn, " You'll still need to download " + i(u.value.models_to_download.length) + " model(s) manually ", 1)) : c("", !0)
            ]),
            u.value.estimated_size_mb ? (o(), n("div", Xn, " Estimated download: " + i(u.value.estimated_size_mb) + " MB ", 1)) : c("", !0)
          ])
        ], 64)) : c("", !0)
      ]),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: k[0] || (k[0] = (S) => l("close"))
        }, {
          default: a(() => [...k[6] || (k[6] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u.value && u.value.nodes_to_install.length && u.value.models_to_download.length ? (o(), b(ce, {
          key: 0,
          variant: "secondary",
          disabled: m.value,
          loading: m.value,
          onClick: j
        }, {
          default: a(() => [...k[7] || (k[7] = [
            v(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0),
        u.value && (u.value.nodes_to_install.length || u.value.models_to_download.length) ? (o(), b(ce, {
          key: 1,
          variant: "primary",
          disabled: m.value || u.value.models_to_download.length > 0 && !p.value,
          loading: m.value,
          onClick: M
        }, {
          default: a(() => [...k[8] || (k[8] = [
            v(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Zn = /* @__PURE__ */ F(Qn, [["__scopeId", "data-v-d68efb14"]]), el = { class: "search-input-wrapper" }, tl = ["value", "placeholder"], ol = /* @__PURE__ */ A({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: r }) {
    const s = t, l = r, g = x(null);
    let y;
    function u(m) {
      const h = m.target.value;
      s.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        l("update:modelValue", h);
      }, s.debounce)) : l("update:modelValue", h);
    }
    function f() {
      var m;
      l("update:modelValue", ""), l("clear"), (m = g.value) == null || m.focus();
    }
    return ue(() => {
      s.autoFocus && g.value && g.value.focus();
    }), (m, h) => (o(), n("div", el, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: Ce(f, ["escape"])
      }, null, 40, tl),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: f,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), sl = /* @__PURE__ */ F(ol, [["__scopeId", "data-v-266f857a"]]), al = { class: "search-bar" }, nl = /* @__PURE__ */ A({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, s) => (o(), n("div", al, [
      d(sl, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (l) => r.$emit("update:modelValue", l)),
        onClear: s[1] || (s[1] = (l) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Pe = /* @__PURE__ */ F(nl, [["__scopeId", "data-v-3d51bbfd"]]), ll = { class: "section-group" }, il = {
  key: 0,
  class: "section-content"
}, rl = /* @__PURE__ */ A({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const s = t, l = r, g = x(s.initiallyExpanded);
    function y() {
      s.collapsible && (g.value = !g.value, l("toggle", g.value));
    }
    return (u, f) => (o(), n("section", ll, [
      d(pe, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: y
      }, {
        default: a(() => [
          v(i(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), n("div", il, [
        te(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), re = /* @__PURE__ */ F(rl, [["__scopeId", "data-v-c48e33ed"]]), cl = { class: "item-header" }, dl = {
  key: 0,
  class: "item-icon"
}, ul = { class: "item-info" }, ml = {
  key: 0,
  class: "item-title"
}, vl = {
  key: 1,
  class: "item-subtitle"
}, fl = {
  key: 0,
  class: "item-details"
}, gl = {
  key: 1,
  class: "item-actions"
}, hl = /* @__PURE__ */ A({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const s = t, l = W(() => s.status ? `status-${s.status}` : "");
    return (g, y) => (o(), n("div", {
      class: q(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: y[0] || (y[0] = (u) => t.clickable && g.$emit("click"))
    }, [
      e("div", cl, [
        g.$slots.icon ? (o(), n("span", dl, [
          te(g.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", ul, [
          g.$slots.title ? (o(), n("div", ml, [
            te(g.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          g.$slots.subtitle ? (o(), n("div", vl, [
            te(g.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      g.$slots.details ? (o(), n("div", fl, [
        te(g.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      g.$slots.actions ? (o(), n("div", gl, [
        te(g.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ F(hl, [["__scopeId", "data-v-cc435e0e"]]), pl = { class: "loading-state" }, yl = { class: "loading-message" }, wl = /* @__PURE__ */ A({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, s) => (o(), n("div", pl, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", yl, i(t.message), 1)
    ]));
  }
}), Se = /* @__PURE__ */ F(wl, [["__scopeId", "data-v-ad8436c9"]]), bl = { class: "error-state" }, kl = { class: "error-message" }, $l = /* @__PURE__ */ A({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, s) => (o(), n("div", bl, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", kl, i(t.message), 1),
      t.retry ? (o(), b(U, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => r.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          v(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Ee = /* @__PURE__ */ F($l, [["__scopeId", "data-v-5397be48"]]), _l = /* @__PURE__ */ A({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const s = r, { getWorkflows: l } = me(), g = x([]), y = x(!1), u = x(null), f = x(""), m = x(!0), h = x(!1), p = x(!1), w = x(!1), _ = x(null), L = W(
      () => g.value.filter((O) => O.status === "broken")
    ), D = W(
      () => g.value.filter((O) => O.status === "new")
    ), H = W(
      () => g.value.filter((O) => O.status === "modified")
    ), T = W(
      () => g.value.filter((O) => O.status === "synced")
    ), R = W(() => {
      if (!f.value.trim()) return g.value;
      const O = f.value.toLowerCase();
      return g.value.filter((E) => E.name.toLowerCase().includes(O));
    }), J = W(
      () => L.value.filter(
        (O) => !f.value.trim() || O.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), j = W(
      () => D.value.filter(
        (O) => !f.value.trim() || O.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), M = W(
      () => H.value.filter(
        (O) => !f.value.trim() || O.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), I = W(
      () => T.value.filter(
        (O) => !f.value.trim() || O.name.toLowerCase().includes(f.value.toLowerCase())
      )
    ), k = W(
      () => h.value ? I.value : I.value.slice(0, 5)
    );
    async function S() {
      y.value = !0, u.value = null;
      try {
        g.value = await l();
      } catch (O) {
        u.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        y.value = !1;
      }
    }
    function C(O) {
      _.value = O, p.value = !0;
    }
    function z(O) {
      _.value = O, w.value = !0;
    }
    function N() {
      alert("Bulk resolution not yet implemented");
    }
    function G() {
      s("refresh");
    }
    return ue(S), (O, E) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "WORKFLOWS" }, {
            actions: a(() => [
              L.value.length > 0 ? (o(), b(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: a(() => [...E[7] || (E[7] = [
                  v(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          d(Pe, {
            modelValue: f.value,
            "onUpdate:modelValue": E[0] || (E[0] = (Y) => f.value = Y),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          y.value ? (o(), b(Se, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), b(Ee, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            J.value.length ? (o(), b(re, {
              key: 0,
              title: "BROKEN",
              count: J.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(J.value, (Y) => (o(), b(de, {
                  key: Y.name,
                  status: "broken"
                }, {
                  icon: a(() => [...E[8] || (E[8] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(i(Y.name), 1)
                  ]),
                  subtitle: a(() => [
                    v(" Missing: " + i(Y.missing_nodes) + " nodes, " + i(Y.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    d(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (oe) => z(Y.name)
                    }, {
                      default: a(() => [...E[9] || (E[9] = [
                        v(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(Y.name)
                    }, {
                      default: a(() => [...E[10] || (E[10] = [
                        v(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            j.value.length ? (o(), b(re, {
              key: 1,
              title: "NEW",
              count: j.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(j.value, (Y) => (o(), b(de, {
                  key: Y.name,
                  status: "new"
                }, {
                  icon: a(() => [...E[11] || (E[11] = [
                    v("●", -1)
                  ])]),
                  title: a(() => [
                    v(i(Y.name), 1)
                  ]),
                  subtitle: a(() => [...E[12] || (E[12] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(Y.name)
                    }, {
                      default: a(() => [...E[13] || (E[13] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            M.value.length ? (o(), b(re, {
              key: 2,
              title: "MODIFIED",
              count: M.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(M.value, (Y) => (o(), b(de, {
                  key: Y.name,
                  status: "modified"
                }, {
                  icon: a(() => [...E[14] || (E[14] = [
                    v("⚡", -1)
                  ])]),
                  title: a(() => [
                    v(i(Y.name), 1)
                  ]),
                  subtitle: a(() => [...E[15] || (E[15] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(Y.name)
                    }, {
                      default: a(() => [...E[16] || (E[16] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            I.value.length ? (o(), b(re, {
              key: 3,
              title: "SYNCED",
              count: I.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: E[2] || (E[2] = (Y) => m.value = Y)
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(k.value, (Y) => (o(), b(de, {
                  key: Y.name,
                  status: "synced"
                }, {
                  icon: a(() => [...E[17] || (E[17] = [
                    v("✓", -1)
                  ])]),
                  title: a(() => [
                    v(i(Y.name), 1)
                  ]),
                  subtitle: a(() => [...E[18] || (E[18] = [
                    v("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(Y.name)
                    }, {
                      default: a(() => [...E[19] || (E[19] = [
                        v(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !h.value && I.value.length > 5 ? (o(), b(U, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: E[1] || (E[1] = (Y) => h.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    v(" View all " + i(I.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            R.value.length ? c("", !0) : (o(), b(ke, {
              key: 4,
              icon: "📭",
              message: f.value ? `No workflows match '${f.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && _.value ? (o(), b(Cn, {
        key: 0,
        "workflow-name": _.value,
        onClose: E[3] || (E[3] = (Y) => p.value = !1),
        onResolve: E[4] || (E[4] = (Y) => z(_.value))
      }, null, 8, ["workflow-name"])) : c("", !0),
      w.value && _.value ? (o(), b(Zn, {
        key: 1,
        "workflow-name": _.value,
        onClose: E[5] || (E[5] = (Y) => w.value = !1),
        onInstall: G,
        onRefresh: E[6] || (E[6] = (Y) => s("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Cl = /* @__PURE__ */ F(_l, [["__scopeId", "data-v-cf78a4ac"]]), xl = /* @__PURE__ */ A({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, s) => (o(), n("div", {
      class: q(["summary-bar", t.variant])
    }, [
      te(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ F(xl, [["__scopeId", "data-v-ccb7816e"]]), Sl = /* @__PURE__ */ A({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const s = r, { getEnvironmentModels: l, getStatus: g } = me(), y = x([]), u = x([]), f = x("production"), m = x(!1), h = x(null), p = x(""), w = x(!1);
    function _() {
      w.value = !1, s("navigate", "model-index");
    }
    const L = W(
      () => y.value.reduce((C, z) => C + (z.size || 0), 0)
    ), D = W(() => {
      if (!p.value.trim()) return y.value;
      const C = p.value.toLowerCase();
      return y.value.filter((z) => z.filename.toLowerCase().includes(C));
    }), H = W(() => {
      if (!p.value.trim()) return u.value;
      const C = p.value.toLowerCase();
      return u.value.filter((z) => z.filename.toLowerCase().includes(C));
    }), T = W(
      () => D.value.filter((C) => C.type === "checkpoints")
    ), R = W(
      () => D.value.filter((C) => C.type === "loras")
    ), J = W(
      () => D.value.filter((C) => C.type !== "checkpoints" && C.type !== "loras")
    );
    function j(C) {
      if (!C) return "Unknown";
      const z = C / (1024 * 1024);
      return z >= 1024 ? `${(z / 1024).toFixed(1)} GB` : `${z.toFixed(0)} MB`;
    }
    function M(C) {
      s("navigate", "model-index");
    }
    function I(C) {
      s("navigate", "model-index");
    }
    function k(C) {
      alert(`Download functionality not yet implemented for ${C}`);
    }
    async function S() {
      m.value = !0, h.value = null;
      try {
        const C = await l();
        y.value = C, u.value = [];
        const z = await g();
        f.value = z.environment || "production";
      } catch (C) {
        h.value = C instanceof Error ? C.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return ue(S), (C, z) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (N) => w.value = !0)
          })
        ]),
        search: a(() => [
          d(Pe, {
            modelValue: p.value,
            "onUpdate:modelValue": z[1] || (z[1] = (N) => p.value = N),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (o(), b(Se, {
            key: 0,
            message: "Loading environment models..."
          })) : h.value ? (o(), b(Ee, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            y.value.length ? (o(), b(Ae, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + i(y.value.length) + " models • " + i(j(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            T.value.length ? (o(), b(re, {
              key: 1,
              title: "CHECKPOINTS",
              count: T.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(T.value, (N) => (o(), b(de, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[3] || (z[3] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(i(N.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(i(j(N.size)), 1)
                  ]),
                  details: a(() => [
                    d(Z, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    d(Z, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (G) => M(N.hash)
                    }, {
                      default: a(() => [...z[4] || (z[4] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            R.value.length ? (o(), b(re, {
              key: 2,
              title: "LORAS",
              count: R.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(R.value, (N) => (o(), b(de, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[5] || (z[5] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(i(N.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(i(j(N.size)), 1)
                  ]),
                  details: a(() => [
                    d(Z, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    d(Z, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (G) => M(N.hash)
                    }, {
                      default: a(() => [...z[6] || (z[6] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            J.value.length ? (o(), b(re, {
              key: 3,
              title: "OTHER",
              count: J.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(J.value, (N) => (o(), b(de, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[7] || (z[7] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(i(N.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(i(j(N.size)), 1)
                  ]),
                  details: a(() => [
                    d(Z, {
                      label: "Type:",
                      value: N.type
                    }, null, 8, ["value"]),
                    d(Z, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (G) => M(N.hash)
                    }, {
                      default: a(() => [...z[8] || (z[8] = [
                        v(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            H.value.length ? (o(), b(re, {
              key: 4,
              title: "MISSING",
              count: H.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(H.value, (N) => (o(), b(de, {
                  key: N.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...z[9] || (z[9] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(i(N.filename), 1)
                  ]),
                  subtitle: a(() => [...z[10] || (z[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var G;
                    return [
                      d(Z, {
                        label: "Required by:",
                        value: ((G = N.workflow_names) == null ? void 0 : G.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    d(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (G) => k(N.filename)
                    }, {
                      default: a(() => [...z[11] || (z[11] = [
                        v(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (G) => I(N.filename)
                    }, {
                      default: a(() => [...z[12] || (z[12] = [
                        v(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !D.value.length && !H.value.length ? (o(), b(ke, {
              key: 5,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(xe, {
        show: w.value,
        title: "About Environment Models",
        onClose: z[2] || (z[2] = (N) => w.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            z[13] || (z[13] = v(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + i(f.value) + '"', 1),
            z[14] || (z[14] = v(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          d(U, {
            variant: "primary",
            onClick: _
          }, {
            default: a(() => [...z[15] || (z[15] = [
              v(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), El = /* @__PURE__ */ F(Sl, [["__scopeId", "data-v-72675609"]]), Il = /* @__PURE__ */ A({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: r } = me(), s = x([]), l = x(!1), g = x(null), y = x(""), u = x(!1), f = W(
      () => s.value.reduce((k, S) => k + (S.size_mb || S.size || 0), 0)
    ), m = W(() => {
      const k = /* @__PURE__ */ new Set();
      return s.value.forEach((S) => {
        S.used_in_environments && S.used_in_environments.length > 0 && S.used_in_environments.forEach((C) => k.add(C.env_name));
      }), k.size;
    }), h = W(() => {
      if (!y.value.trim()) return s.value;
      const k = y.value.toLowerCase();
      return s.value.filter((S) => {
        const C = S, z = S.sha256 || C.sha256_hash || "";
        return S.filename.toLowerCase().includes(k) || z.toLowerCase().includes(k);
      });
    }), p = W(
      () => h.value.filter((k) => k.type === "checkpoints")
    ), w = W(
      () => h.value.filter((k) => k.type === "loras")
    ), _ = W(
      () => h.value.filter((k) => k.type !== "checkpoints" && k.type !== "loras")
    );
    function L(k) {
      return k ? k >= 1024 ? `${(k / 1024).toFixed(1)} GB` : `${k.toFixed(0)} MB` : "Unknown";
    }
    function D(k) {
      const S = k, C = k.used_in_workflows || S.used_by || [];
      return !C || C.length === 0 ? "Not used" : `${C.length} workflow(s)`;
    }
    function H(k) {
      navigator.clipboard.writeText(k), alert("Hash copied to clipboard");
    }
    function T(k) {
      prompt("Enter model source URL:", k.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function R(k) {
      const S = k, C = k.used_in_workflows || S.used_by || [], z = C && C.length > 0 ? `

⚠ WARNING: This model is used by ${C.length} workflow(s):
${C.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${k.filename}?${z}

This will free ${L(S.size_mb || k.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function J() {
      alert("Scan for models not yet implemented");
    }
    function j() {
      alert("Change directory not yet implemented");
    }
    function M() {
      alert("Download new model not yet implemented");
    }
    async function I() {
      l.value = !0, g.value = null;
      try {
        s.value = await r(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", p.value), console.log("Filtered loras:", w.value), console.log("Filtered other:", _.value);
      } catch (k) {
        g.value = k instanceof Error ? k.message : "Failed to load workspace models";
      } finally {
        l.value = !1;
      }
    }
    return ue(I), (k, S) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[0] || (S[0] = (C) => u.value = !0)
          }, {
            actions: a(() => [
              d(U, {
                variant: "primary",
                size: "sm",
                onClick: J
              }, {
                default: a(() => [...S[3] || (S[3] = [
                  v(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              d(U, {
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: a(() => [...S[4] || (S[4] = [
                  v(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              d(U, {
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: a(() => [...S[5] || (S[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  v(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          d(Pe, {
            modelValue: y.value,
            "onUpdate:modelValue": S[1] || (S[1] = (C) => y.value = C),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          l.value ? (o(), b(Se, {
            key: 0,
            message: "Loading workspace models..."
          })) : g.value ? (o(), b(Ee, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            s.value.length ? (o(), b(Ae, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + i(s.value.length) + " models • " + i(L(f.value)) + " • Used in " + i(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            p.value.length ? (o(), b(re, {
              key: 1,
              title: "CHECKPOINTS",
              count: p.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(p.value, (C) => (o(), b(de, {
                  key: C.sha256 || C.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...S[6] || (S[6] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(i(C.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(i(L(C.size_mb || C.size)), 1)
                  ]),
                  details: a(() => {
                    var z, N;
                    return [
                      C.sha256 || C.sha256_hash ? (o(), b(Z, {
                        key: 0,
                        label: "SHA256:",
                        value: (C.sha256 || C.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      d(Z, {
                        label: "Used in:",
                        value: D(C)
                      }, null, 8, ["value"]),
                      C.source_url || (z = C.sources) != null && z[0] ? (o(), b(Z, {
                        key: 1,
                        label: "Source URL:",
                        value: C.source_url || ((N = C.sources) == null ? void 0 : N[0])
                      }, null, 8, ["value"])) : (o(), b(Z, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...S[7] || (S[7] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => T(C)
                    }, {
                      default: a(() => [...S[8] || (S[8] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C.sha256 || C.sha256_hash ? (o(), b(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => H(C.sha256 || C.sha256_hash)
                    }, {
                      default: a(() => [...S[9] || (S[9] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    d(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => R(C)
                    }, {
                      default: a(() => [...S[10] || (S[10] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            w.value.length ? (o(), b(re, {
              key: 2,
              title: "LORAS",
              count: w.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(w.value, (C) => (o(), b(de, {
                  key: C.sha256 || C.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...S[11] || (S[11] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(i(C.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(i(L(C.size_mb || C.size)), 1)
                  ]),
                  details: a(() => {
                    var z, N;
                    return [
                      C.sha256 || C.sha256_hash ? (o(), b(Z, {
                        key: 0,
                        label: "SHA256:",
                        value: (C.sha256 || C.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      d(Z, {
                        label: "Used in:",
                        value: D(C)
                      }, null, 8, ["value"]),
                      C.source_url || (z = C.sources) != null && z[0] ? (o(), b(Z, {
                        key: 1,
                        label: "Source URL:",
                        value: C.source_url || ((N = C.sources) == null ? void 0 : N[0])
                      }, null, 8, ["value"])) : (o(), b(Z, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...S[12] || (S[12] = [
                          v("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => T(C)
                    }, {
                      default: a(() => [...S[13] || (S[13] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C.sha256 || C.sha256_hash ? (o(), b(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => H(C.sha256 || C.sha256_hash)
                    }, {
                      default: a(() => [...S[14] || (S[14] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    d(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => R(C)
                    }, {
                      default: a(() => [...S[15] || (S[15] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            _.value.length ? (o(), b(re, {
              key: 3,
              title: "OTHER",
              count: _.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(_.value, (C) => (o(), b(de, {
                  key: C.sha256 || C.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...S[16] || (S[16] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(i(C.filename), 1)
                  ]),
                  subtitle: a(() => [
                    v(i(L(C.size_mb || C.size)), 1)
                  ]),
                  details: a(() => [
                    d(Z, {
                      label: "Type:",
                      value: C.type
                    }, null, 8, ["value"]),
                    C.sha256 || C.sha256_hash ? (o(), b(Z, {
                      key: 0,
                      label: "SHA256:",
                      value: (C.sha256 || C.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    d(Z, {
                      label: "Used in:",
                      value: D(C)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => T(C)
                    }, {
                      default: a(() => [...S[17] || (S[17] = [
                        v(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C.sha256 || C.sha256_hash ? (o(), b(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => H(C.sha256 || C.sha256_hash)
                    }, {
                      default: a(() => [...S[18] || (S[18] = [
                        v(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    d(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => R(C)
                    }, {
                      default: a(() => [...S[19] || (S[19] = [
                        v(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            h.value.length ? c("", !0) : (o(), b(ke, {
              key: 4,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d(xe, {
        show: u.value,
        title: "About Workspace Model Index",
        onClose: S[2] || (S[2] = (C) => u.value = !1)
      }, {
        content: a(() => [...S[20] || (S[20] = [
          e("p", null, [
            v(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            v(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), zl = /* @__PURE__ */ F(Il, [["__scopeId", "data-v-5a24af01"]]), Ll = { key: 0 }, Ml = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Nl = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Tl = /* @__PURE__ */ A({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: r, installNode: s, updateNode: l, uninstallNode: g } = me(), y = x({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), u = x(!1), f = x(null), m = x(""), h = x(!1), p = W(() => {
      if (!m.value.trim()) return y.value.nodes;
      const M = m.value.toLowerCase();
      return y.value.nodes.filter(
        (I) => {
          var k, S;
          return I.name.toLowerCase().includes(M) || ((k = I.description) == null ? void 0 : k.toLowerCase().includes(M)) || ((S = I.repository) == null ? void 0 : S.toLowerCase().includes(M));
        }
      );
    }), w = W(
      () => p.value.filter((M) => M.installed)
    ), _ = W(
      () => p.value.filter((M) => !M.installed)
    );
    function L(M) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[M] || M;
    }
    function D(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function H(M) {
      window.open(M, "_blank");
    }
    async function T(M) {
      if (confirm(`Install node "${M}"?

This will download and install the node from its repository.`))
        try {
          u.value = !0;
          const I = await s(M);
          I.status === "success" ? (alert(`Node "${M}" installed successfully!`), await j()) : alert(`Failed to install node: ${I.message || "Unknown error"}`);
        } catch (I) {
          alert(`Error installing node: ${I instanceof Error ? I.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function R(M) {
      if (confirm(`Check for updates for "${M}"?`))
        try {
          u.value = !0;
          const I = await l(M);
          I.status === "success" ? (alert(`Node "${M}" is up to date or has been updated!`), await j()) : alert(`Update check failed: ${I.message || "Unknown error"}`);
        } catch (I) {
          alert(`Error checking for updates: ${I instanceof Error ? I.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function J(M) {
      if (confirm(`Uninstall node "${M}"?

This will remove the node from this environment.`))
        try {
          u.value = !0;
          const I = await g(M);
          I.status === "success" ? (alert(`Node "${M}" uninstalled successfully!`), await j()) : alert(`Failed to uninstall node: ${I.message || "Unknown error"}`);
        } catch (I) {
          alert(`Error uninstalling node: ${I instanceof Error ? I.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function j() {
      u.value = !0, f.value = null;
      try {
        y.value = await r();
      } catch (M) {
        f.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        u.value = !1;
      }
    }
    return ue(j), (M, I) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (k) => h.value = !0)
          })
        ]),
        search: a(() => [
          d(Pe, {
            modelValue: m.value,
            "onUpdate:modelValue": I[1] || (I[1] = (k) => m.value = k),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          u.value ? (o(), b(Se, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : f.value ? (o(), b(Ee, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            y.value.total_count ? (o(), b(Ae, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + i(y.value.total_count) + " nodes • " + i(y.value.installed_count) + " installed • " + i(y.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            w.value.length ? (o(), b(re, {
              key: 1,
              title: "INSTALLED",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(w.value, (k) => (o(), b(de, {
                  key: k.name,
                  status: "synced"
                }, {
                  icon: a(() => [...I[4] || (I[4] = [
                    v("📦", -1)
                  ])]),
                  title: a(() => [
                    v(i(k.name), 1)
                  ]),
                  subtitle: a(() => [
                    k.version ? (o(), n("span", Ll, "v" + i(k.version), 1)) : (o(), n("span", Ml, "version unknown")),
                    k.source ? (o(), n("span", Nl, " • " + i(L(k.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    k.description ? (o(), b(Z, {
                      key: 0,
                      label: "Description:",
                      value: k.description
                    }, null, 8, ["value"])) : c("", !0),
                    k.repository ? (o(), b(Z, {
                      key: 1,
                      label: "Repository:",
                      value: k.repository
                    }, null, 8, ["value"])) : c("", !0),
                    d(Z, {
                      label: "Used by:",
                      value: D(k)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    k.repository ? (o(), b(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => H(k.repository)
                    }, {
                      default: a(() => [...I[5] || (I[5] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    k.source === "registry" ? (o(), b(U, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (S) => R(k.name)
                    }, {
                      default: a(() => [...I[6] || (I[6] = [
                        v(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    k.source !== "unknown" ? (o(), b(U, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (S) => J(k.name)
                    }, {
                      default: a(() => [...I[7] || (I[7] = [
                        v(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            _.value.length ? (o(), b(re, {
              key: 2,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(_.value, (k) => (o(), b(de, {
                  key: k.name,
                  status: "missing"
                }, {
                  icon: a(() => [...I[8] || (I[8] = [
                    v("⚠", -1)
                  ])]),
                  title: a(() => [
                    v(i(k.name), 1)
                  ]),
                  subtitle: a(() => [...I[9] || (I[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    k.description ? (o(), b(Z, {
                      key: 0,
                      label: "Description:",
                      value: k.description
                    }, null, 8, ["value"])) : c("", !0),
                    k.repository ? (o(), b(Z, {
                      key: 1,
                      label: "Repository:",
                      value: k.repository
                    }, null, 8, ["value"])) : c("", !0),
                    d(Z, {
                      label: "Required by:",
                      value: D(k)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    k.download_url ? (o(), b(U, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (S) => T(k.name)
                    }, {
                      default: a(() => [...I[10] || (I[10] = [
                        v(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    k.repository ? (o(), b(U, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (S) => H(k.repository)
                    }, {
                      default: a(() => [...I[11] || (I[11] = [
                        v(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !w.value.length && !_.value.length ? (o(), b(ke, {
              key: 3,
              icon: "📭",
              message: m.value ? `No nodes match '${m.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(xe, {
        show: h.value,
        title: "About Git-Tracked Nodes",
        onClose: I[3] || (I[3] = (k) => h.value = !1)
      }, {
        content: a(() => [...I[12] || (I[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            v(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            v(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          d(U, {
            variant: "primary",
            onClick: I[2] || (I[2] = (k) => h.value = !1)
          }, {
            default: a(() => [...I[13] || (I[13] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Dl = /* @__PURE__ */ F(Tl, [["__scopeId", "data-v-c480e2c1"]]), Bl = { class: "remote-url-display" }, Rl = ["title"], Ul = ["title"], Ol = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Vl = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Pl = /* @__PURE__ */ A({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, s = x(!1), l = W(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const y = r.url.slice(0, Math.floor(r.maxLength * 0.6)), u = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${y}...${u}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(r.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, u) => (o(), n("div", Bl, [
      e("span", {
        class: "url-text",
        title: t.url
      }, i(l.value), 9, Rl),
      e("button", {
        class: q(["copy-btn", { copied: s.value }]),
        onClick: g,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Vl, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Ol, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Ul)
    ]));
  }
}), ht = /* @__PURE__ */ F(Pl, [["__scopeId", "data-v-7768a58d"]]), Al = { class: "remote-title" }, Fl = {
  key: 0,
  class: "default-badge"
}, Wl = {
  key: 1,
  class: "sync-badge"
}, Hl = {
  key: 0,
  class: "ahead"
}, Gl = {
  key: 1,
  class: "behind"
}, jl = {
  key: 0,
  class: "tracking-info"
}, ql = /* @__PURE__ */ A({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const s = t, l = W(() => s.fetchingRemote === s.remote.name), g = W(() => s.remote.is_default), y = W(() => !!s.trackingBranch);
    function u(f) {
      const m = new Date(f), p = (/* @__PURE__ */ new Date()).getTime() - m.getTime(), w = Math.floor(p / 6e4);
      if (w < 1) return "Just now";
      if (w < 60) return `${w}m ago`;
      const _ = Math.floor(w / 60);
      if (_ < 24) return `${_}h ago`;
      const L = Math.floor(_ / 24);
      return L < 7 ? `${L}d ago` : m.toLocaleDateString();
    }
    return (f, m) => (o(), b(de, {
      status: g.value ? "synced" : void 0
    }, {
      icon: a(() => [
        v(i(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", Al, [
          e("span", null, i(t.remote.name), 1),
          g.value ? (o(), n("span", Fl, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), n("span", Wl, [
            t.syncStatus.ahead > 0 ? (o(), n("span", Hl, "↑" + i(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", Gl, "↓" + i(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), n("span", jl, " Tracking: " + i(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var h;
        return [
          d(Z, { label: "Fetch:" }, {
            default: a(() => [
              d(ht, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), b(Z, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              d(ht, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (h = t.syncStatus) != null && h.last_fetch ? (o(), b(Z, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, i(u(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        d(U, {
          variant: "primary",
          size: "xs",
          loading: l.value,
          onClick: m[0] || (m[0] = (h) => f.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...m[3] || (m[3] = [
            v(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        d(U, {
          variant: "secondary",
          size: "xs",
          onClick: m[1] || (m[1] = (h) => f.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...m[4] || (m[4] = [
            v(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? c("", !0) : (o(), b(U, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[2] || (m[2] = (h) => f.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...m[5] || (m[5] = [
            v(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Kl = /* @__PURE__ */ F(ql, [["__scopeId", "data-v-17362e45"]]), Yl = ["for"], Jl = {
  key: 0,
  class: "base-form-field-required"
}, Xl = { class: "base-form-field-input" }, Ql = {
  key: 1,
  class: "base-form-field-error"
}, Zl = {
  key: 2,
  class: "base-form-field-hint"
}, ei = /* @__PURE__ */ A({
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
    const r = t, s = W(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (l, g) => (o(), n("div", {
      class: q(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        v(i(t.label) + " ", 1),
        t.required ? (o(), n("span", Jl, "*")) : c("", !0)
      ], 8, Yl)) : c("", !0),
      e("div", Xl, [
        te(l.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", Ql, i(t.error), 1)) : t.hint ? (o(), n("span", Zl, i(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ F(ei, [["__scopeId", "data-v-9a1cf296"]]), ti = ["type", "value", "placeholder", "disabled"], oi = {
  key: 0,
  class: "base-input-error"
}, si = /* @__PURE__ */ A({
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
    return (r, s) => (o(), n("div", {
      class: q(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: q(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ce((l) => r.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ce((l) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ti),
      t.error ? (o(), n("span", oi, i(t.error), 1)) : c("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ F(si, [["__scopeId", "data-v-9ba02cdc"]]), ai = { class: "remote-form" }, ni = { class: "form-header" }, li = { class: "form-body" }, ii = {
  key: 0,
  class: "form-error"
}, ri = { class: "form-actions" }, ci = /* @__PURE__ */ A({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const s = t, l = r, g = x({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), y = x(!1), u = x(null);
    yt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      g.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const f = W(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function m() {
      if (!(!f.value || y.value)) {
        u.value = null, y.value = !0;
        try {
          l("submit", g.value);
        } catch (h) {
          u.value = h instanceof Error ? h.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (h, p) => (o(), n("div", ai, [
      e("div", ni, [
        d(pe, null, {
          default: a(() => [
            v(i(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", li, [
        d(at, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            d(nt, {
              modelValue: g.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (w) => g.value.name = w),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        d(at, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            d(nt, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (w) => g.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        d(at, { label: "Push URL (optional)" }, {
          default: a(() => [
            d(nt, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (w) => g.value.pushUrl = w),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (o(), n("div", ii, i(u.value), 1)) : c("", !0)
      ]),
      e("div", ri, [
        d(U, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: y.value,
          onClick: m
        }, {
          default: a(() => [
            v(i(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        d(U, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (w) => h.$emit("cancel"))
        }, {
          default: a(() => [...p[4] || (p[4] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), di = /* @__PURE__ */ F(ci, [["__scopeId", "data-v-56021b18"]]), ui = { key: 0 }, mi = /* @__PURE__ */ A({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: s,
      removeRemote: l,
      updateRemoteUrl: g,
      fetchRemote: y,
      getRemoteSyncStatus: u
    } = me(), f = x([]), m = x(null), h = x({}), p = x(!1), w = x(null), _ = x(""), L = x(!1), D = x(null), H = x(!1), T = x("add"), R = x({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), J = W(() => {
      if (!_.value.trim()) return f.value;
      const O = _.value.toLowerCase();
      return f.value.filter(
        (E) => E.name.toLowerCase().includes(O) || E.fetch_url.toLowerCase().includes(O) || E.push_url.toLowerCase().includes(O)
      );
    });
    function j(O) {
      var E;
      return ((E = m.value) == null ? void 0 : E.remote) === O;
    }
    async function M() {
      p.value = !0, w.value = null;
      try {
        const O = await r();
        f.value = O.remotes, m.value = O.current_branch_tracking || null, await Promise.all(
          O.remotes.map(async (E) => {
            const Y = await u(E.name);
            Y && (h.value[E.name] = Y);
          })
        );
      } catch (O) {
        w.value = O instanceof Error ? O.message : "Failed to load remotes";
      } finally {
        p.value = !1;
      }
    }
    function I() {
      T.value = "add", R.value = { name: "", fetchUrl: "", pushUrl: "" }, H.value = !0;
    }
    function k(O) {
      const E = f.value.find((Y) => Y.name === O);
      E && (T.value = "edit", R.value = {
        name: E.name,
        fetchUrl: E.fetch_url,
        pushUrl: E.push_url
      }, H.value = !0);
    }
    async function S(O) {
      try {
        T.value === "add" ? await s(O.name, O.fetchUrl) : await g(O.name, O.fetchUrl, O.pushUrl || void 0), H.value = !1, await M();
      } catch (E) {
        w.value = E instanceof Error ? E.message : "Operation failed";
      }
    }
    function C() {
      H.value = !1, R.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function z(O) {
      D.value = O;
      try {
        await y(O);
        const E = await u(O);
        E && (h.value[O] = E);
      } catch (E) {
        w.value = E instanceof Error ? E.message : "Fetch failed";
      } finally {
        D.value = null;
      }
    }
    async function N(O) {
      if (confirm(`Remove remote "${O}"?`))
        try {
          await l(O), await M();
        } catch (E) {
          w.value = E instanceof Error ? E.message : "Failed to remove remote";
        }
    }
    function G() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ue(M), (O, E) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (Y) => L.value = !0)
          }, {
            actions: a(() => [
              H.value ? c("", !0) : (o(), b(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: I
              }, {
                default: a(() => [...E[3] || (E[3] = [
                  v(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          H.value ? c("", !0) : (o(), b(Pe, {
            key: 0,
            modelValue: _.value,
            "onUpdate:modelValue": E[1] || (E[1] = (Y) => _.value = Y),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          p.value ? (o(), b(Se, {
            key: 0,
            message: "Loading remotes..."
          })) : w.value ? (o(), b(Ee, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            H.value ? (o(), b(di, {
              key: 0,
              mode: T.value,
              "remote-name": R.value.name,
              "fetch-url": R.value.fetchUrl,
              "push-url": R.value.pushUrl,
              onSubmit: S,
              onCancel: C
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            f.value.length && !H.value ? (o(), b(Ae, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                v(" Total: " + i(f.value.length) + " remote" + i(f.value.length !== 1 ? "s" : "") + " ", 1),
                m.value ? (o(), n("span", ui, " • Tracking: " + i(m.value.remote) + "/" + i(m.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            J.value.length && !H.value ? (o(), b(re, {
              key: 2,
              title: "REMOTES",
              count: J.value.length
            }, {
              default: a(() => [
                (o(!0), n(P, null, K(J.value, (Y) => {
                  var oe;
                  return o(), b(Kl, {
                    key: Y.name,
                    remote: Y,
                    "sync-status": h.value[Y.name],
                    "tracking-branch": j(Y.name) ? (oe = m.value) == null ? void 0 : oe.branch : void 0,
                    "fetching-remote": D.value,
                    onFetch: z,
                    onEdit: k,
                    onRemove: N
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !J.value.length && !H.value ? (o(), b(ke, {
              key: 3,
              icon: "🌐",
              message: _.value ? `No remotes match '${_.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                d(U, {
                  variant: "primary",
                  onClick: I
                }, {
                  default: a(() => [...E[4] || (E[4] = [
                    v(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(xe, {
        show: L.value,
        title: "About Git Remotes",
        onClose: E[2] || (E[2] = (Y) => L.value = !1)
      }, {
        content: a(() => [...E[5] || (E[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            v(" The "),
            e("strong", null, '"origin"'),
            v(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          d(U, {
            variant: "link",
            onClick: G
          }, {
            default: a(() => [...E[6] || (E[6] = [
              v(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), vi = /* @__PURE__ */ F(mi, [["__scopeId", "data-v-a75719bb"]]), fi = { class: "setting-info" }, gi = { class: "setting-label" }, hi = {
  key: 0,
  class: "required-marker"
}, pi = {
  key: 0,
  class: "setting-description"
}, yi = { class: "setting-control" }, wi = /* @__PURE__ */ A({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, s) => (o(), n("div", {
      class: q(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", fi, [
        e("div", gi, [
          v(i(t.label) + " ", 1),
          t.required ? (o(), n("span", hi, "*")) : c("", !0)
        ]),
        t.description ? (o(), n("div", pi, i(t.description), 1)) : c("", !0)
      ]),
      e("div", yi, [
        te(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Le = /* @__PURE__ */ F(wi, [["__scopeId", "data-v-cb5d236c"]]), bi = { class: "toggle" }, ki = ["checked", "disabled"], $i = /* @__PURE__ */ A({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, s) => (o(), n("label", bi, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.checked)),
        class: "toggle-input"
      }, null, 40, ki),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Oe = /* @__PURE__ */ F($i, [["__scopeId", "data-v-71c0f550"]]), _i = { class: "settings-section" }, Ci = { class: "path-setting" }, xi = { class: "path-value" }, Si = { class: "path-setting" }, Ei = { class: "path-value" }, Ii = { class: "settings-section" }, zi = { class: "settings-section" }, Li = /* @__PURE__ */ A({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: s } = me(), l = x(!1), g = x(null), y = x(null), u = x(null), f = x(null), m = x(""), h = x(""), p = x(!0), w = x(!0), _ = W(() => f.value ? m.value !== (f.value.civitai_api_key || "") : !1);
    async function L() {
      l.value = !0, g.value = null;
      try {
        u.value = await r(), f.value = { ...u.value }, m.value = u.value.civitai_api_key || "", h.value = u.value.huggingface_token || "", p.value = u.value.auto_sync_models, w.value = u.value.confirm_destructive;
      } catch (T) {
        g.value = T instanceof Error ? T.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function D() {
      var T;
      y.value = null;
      try {
        const R = {};
        m.value !== (((T = f.value) == null ? void 0 : T.civitai_api_key) || "") && (R.civitai_api_key = m.value || null), await s(R), await L(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (R) {
        y.value = {
          type: "error",
          message: R instanceof Error ? R.message : "Failed to save settings"
        };
      }
    }
    function H() {
      f.value && (m.value = f.value.civitai_api_key || "", h.value = f.value.huggingface_token || "", p.value = f.value.auto_sync_models, w.value = f.value.confirm_destructive, y.value = null);
    }
    return ue(L), (T, R) => (o(), b(fe, null, {
      header: a(() => [
        d(ge, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            d(U, {
              variant: "primary",
              size: "sm",
              disabled: !_.value,
              onClick: D
            }, {
              default: a(() => [...R[4] || (R[4] = [
                v(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            _.value ? (o(), b(U, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: H
            }, {
              default: a(() => [...R[5] || (R[5] = [
                v(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        l.value ? (o(), b(Se, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), b(Ee, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: L
        }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
          d(re, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var J, j;
              return [
                e("div", _i, [
                  e("div", Ci, [
                    R[6] || (R[6] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    R[7] || (R[7] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", xi, i(((J = u.value) == null ? void 0 : J.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Si, [
                    R[8] || (R[8] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    R[9] || (R[9] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Ei, i(((j = u.value) == null ? void 0 : j.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          d(re, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", Ii, [
                d(Le, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    d(je, {
                      modelValue: m.value,
                      "onUpdate:modelValue": R[0] || (R[0] = (J) => m.value = J),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(Le, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(je, {
                      modelValue: h.value,
                      "onUpdate:modelValue": R[1] || (R[1] = (J) => h.value = J),
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
          d(re, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: a(() => [
              e("div", zi, [
                d(Le, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(Oe, {
                      modelValue: p.value,
                      "onUpdate:modelValue": R[2] || (R[2] = (J) => p.value = J),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(Le, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    d(Oe, {
                      modelValue: w.value,
                      "onUpdate:modelValue": R[3] || (R[3] = (J) => w.value = J),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), b(Ae, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: qe({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, i(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Mi = /* @__PURE__ */ F(Li, [["__scopeId", "data-v-8b092643"]]), Ni = /* @__PURE__ */ A({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = me(), s = x([]), l = x(!1), g = x(null), y = x(!1), u = x(null), f = W(() => s.value.length === 0 ? [] : [...s.value].reverse().map((p) => {
      const _ = new Date(p.timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      }).replace(",", ""), L = p.context ? `[${p.context}]` : "";
      return {
        text: `${_} ${p.level.padEnd(7)} ${L} ${p.message}`,
        level: p.level
      };
    }));
    async function m() {
      l.value = !0, g.value = null;
      try {
        s.value = await r(void 0, 500), s.value.sort((h, p) => new Date(p.timestamp).getTime() - new Date(h.timestamp).getTime());
      } catch (h) {
        g.value = h instanceof Error ? h.message : "Failed to load workspace logs";
      } finally {
        l.value = !1, setTimeout(() => {
          var h;
          (h = u.value) != null && h.parentElement && (u.value.parentElement.scrollTop = u.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ue(m), (h, p) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: p[0] || (p[0] = (w) => y.value = !0)
          }, {
            actions: a(() => [
              d(U, {
                variant: "secondary",
                size: "sm",
                onClick: m,
                disabled: l.value
              }, {
                default: a(() => [
                  v(i(l.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          l.value ? (o(), b(Se, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), b(Ee, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: m
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            s.value.length === 0 ? (o(), b(ke, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: u,
              class: "log-output"
            }, [
              (o(!0), n(P, null, K(f.value, (w, _) => (o(), n("div", {
                key: _,
                class: q(`log-line log-level-${w.level.toLowerCase()}`)
              }, i(w.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      d(xe, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: p[2] || (p[2] = (w) => y.value = !1)
      }, {
        content: a(() => [...p[3] || (p[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            v(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            v(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          d(U, {
            variant: "primary",
            onClick: p[1] || (p[1] = (w) => y.value = !1)
          }, {
            default: a(() => [...p[4] || (p[4] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ti = /* @__PURE__ */ F(Ni, [["__scopeId", "data-v-846ec23c"]]), Di = /* @__PURE__ */ A({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: s } = me(), l = x([]), g = x(!1), y = x(null), u = x(!1), f = x("production"), m = x(null), h = W(() => l.value.length === 0 ? [] : [...l.value].reverse().map((_) => {
      const D = new Date(_.timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      }).replace(",", ""), H = _.context ? `[${_.context}]` : "";
      return {
        text: `${D} ${_.level.padEnd(7)} ${H} ${_.message}`,
        level: _.level
      };
    }));
    async function p() {
      g.value = !0, y.value = null;
      try {
        l.value = await r(void 0, 500), l.value.sort((w, _) => new Date(_.timestamp).getTime() - new Date(w.timestamp).getTime());
        try {
          const w = await s();
          f.value = w.environment || "production";
        } catch {
        }
      } catch (w) {
        y.value = w instanceof Error ? w.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var w;
          (w = m.value) != null && w.parentElement && (m.value.parentElement.scrollTop = m.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return ue(p), (w, _) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (L) => u.value = !0)
          }, {
            actions: a(() => [
              d(U, {
                variant: "secondary",
                size: "sm",
                onClick: p,
                disabled: g.value
              }, {
                default: a(() => [
                  v(i(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          g.value ? (o(), b(Se, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), b(Ee, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
            l.value.length === 0 ? (o(), b(ke, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: m,
              class: "log-output"
            }, [
              (o(!0), n(P, null, K(h.value, (L, D) => (o(), n("div", {
                key: D,
                class: q(`log-line log-level-${L.level.toLowerCase()}`)
              }, i(L.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      d(xe, {
        show: u.value,
        title: "About Environment Logs",
        onClose: _[2] || (_[2] = (L) => u.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            _[3] || (_[3] = v(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, i(f.value), 1),
            _[4] || (_[4] = v(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          _[5] || (_[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            v(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            v(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            v(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            v(" Detailed debugging information ")
          ], -1)),
          _[6] || (_[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          d(U, {
            variant: "primary",
            onClick: _[1] || (_[1] = (L) => u.value = !1)
          }, {
            default: a(() => [..._[7] || (_[7] = [
              v(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Bi = /* @__PURE__ */ F(Di, [["__scopeId", "data-v-cf493022"]]), Ri = { class: "env-title" }, Ui = {
  key: 0,
  class: "current-badge"
}, Oi = {
  key: 0,
  class: "branch-info"
}, Vi = /* @__PURE__ */ A({
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
    return (r, s) => (o(), b(de, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        v(i(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", Ri, [
          e("span", null, i(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Ui, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", Oi, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          v(" " + i(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        d(Z, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        d(Z, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        d(Z, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), b(Z, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        te(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Pi = /* @__PURE__ */ F(Vi, [["__scopeId", "data-v-5238e57c"]]), Ai = {
  key: 0,
  class: "create-form"
}, Fi = { class: "create-form__header" }, Wi = { class: "create-form__body" }, Hi = { class: "create-form__actions" }, Gi = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, ji = /* @__PURE__ */ A({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: r }) {
    const s = r, { getEnvironments: l } = me(), g = x([]), y = x(!1), u = x(null), f = x(""), m = x(!1), h = x(!1), p = x(""), w = W(
      () => g.value.find((j) => j.is_current)
    ), _ = W(() => {
      if (!f.value.trim()) return g.value;
      const j = f.value.toLowerCase();
      return g.value.filter(
        (M) => {
          var I;
          return M.name.toLowerCase().includes(j) || ((I = M.current_branch) == null ? void 0 : I.toLowerCase().includes(j));
        }
      );
    });
    function L(j) {
      if (!j) return "";
      try {
        const M = new Date(j), k = (/* @__PURE__ */ new Date()).getTime() - M.getTime(), S = Math.floor(k / 6e4), C = Math.floor(k / 36e5), z = Math.floor(k / 864e5);
        return S < 1 ? "just now" : S < 60 ? `${S} ${S === 1 ? "minute" : "minutes"} ago` : C < 24 ? `${C} ${C === 1 ? "hour" : "hours"} ago` : z < 30 ? `${z} ${z === 1 ? "day" : "days"} ago` : M.toLocaleDateString();
      } catch {
        return j;
      }
    }
    function D() {
      const j = p.value.trim();
      j && (s("create", j), p.value = "", h.value = !1);
    }
    function H() {
      p.value = "", h.value = !1;
    }
    function T(j) {
      s("viewDetails", j);
    }
    function R(j) {
      confirm(`Delete environment "${j}"?

This action cannot be undone.`) && s("delete", j);
    }
    async function J() {
      y.value = !0, u.value = null;
      try {
        g.value = await l();
      } catch (j) {
        u.value = j instanceof Error ? j.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return ue(J), (j, M) => {
      const I = Ft("SectionGroup");
      return o(), n(P, null, [
        d(fe, null, {
          header: a(() => [
            d(ge, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: M[1] || (M[1] = (k) => m.value = !0)
            }, {
              actions: a(() => [
                d(U, {
                  variant: "ghost",
                  size: "sm",
                  onClick: M[0] || (M[0] = (k) => h.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...M[7] || (M[7] = [
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
                d(U, {
                  variant: "ghost",
                  size: "sm",
                  onClick: J,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...M[8] || (M[8] = [
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
            d(Pe, {
              modelValue: f.value,
              "onUpdate:modelValue": M[2] || (M[2] = (k) => f.value = k),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), b(Se, {
              key: 0,
              message: "Loading environments..."
            })) : u.value ? (o(), b(Ee, {
              key: 1,
              message: u.value,
              retry: !0,
              onRetry: J
            }, null, 8, ["message"])) : (o(), n(P, { key: 2 }, [
              h.value ? (o(), n("div", Ai, [
                e("div", Fi, [
                  M[10] || (M[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  d(U, {
                    variant: "ghost",
                    size: "xs",
                    onClick: H
                  }, {
                    default: a(() => [...M[9] || (M[9] = [
                      v(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", Wi, [
                  d(je, {
                    modelValue: p.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (k) => p.value = k),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Ce(D, ["enter"]),
                      Ce(H, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Hi, [
                    d(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: D,
                      disabled: !p.value.trim()
                    }, {
                      default: a(() => [...M[11] || (M[11] = [
                        v(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: H
                    }, {
                      default: a(() => [...M[12] || (M[12] = [
                        v(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              g.value.length ? (o(), b(Ae, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  v(" Total: " + i(g.value.length) + " " + i(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  w.value ? (o(), n(P, { key: 0 }, [
                    M[13] || (M[13] = v(" • Current: ", -1)),
                    e("strong", null, i(w.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              _.value.length ? (o(), b(I, {
                key: 2,
                title: "ENVIRONMENTS",
                count: _.value.length
              }, {
                default: a(() => [
                  (o(!0), n(P, null, K(_.value, (k) => (o(), b(Pi, {
                    key: k.name,
                    "environment-name": k.name,
                    "is-current": k.is_current,
                    "current-branch": k.current_branch,
                    "workflow-count": k.workflow_count,
                    "node-count": k.node_count,
                    "model-count": k.model_count,
                    "last-used": L(k.last_used),
                    "show-last-used": !!k.last_used
                  }, {
                    actions: a(() => [
                      k.is_current ? c("", !0) : (o(), b(U, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (S) => j.$emit("switch", k.name)
                      }, {
                        default: a(() => [...M[14] || (M[14] = [
                          v(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      d(U, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (S) => T(k.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...M[15] || (M[15] = [
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
                      !k.is_current && g.value.length > 1 ? (o(), b(U, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (S) => R(k.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", Gi, [...M[16] || (M[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : c("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : c("", !0),
              _.value.length ? c("", !0) : (o(), b(ke, {
                key: 3,
                icon: "🌍",
                message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
              }, wt({ _: 2 }, [
                f.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    d(U, {
                      variant: "primary",
                      onClick: M[4] || (M[4] = (k) => h.value = !0)
                    }, {
                      default: a(() => [...M[17] || (M[17] = [
                        v(" Create Environment ", -1)
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
        d(xe, {
          show: m.value,
          title: "About Environments",
          onClose: M[6] || (M[6] = (k) => m.value = !1)
        }, {
          content: a(() => [...M[18] || (M[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              v(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            d(U, {
              variant: "secondary",
              onClick: M[5] || (M[5] = (k) => m.value = !1)
            }, {
              default: a(() => [...M[19] || (M[19] = [
                v(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), qi = /* @__PURE__ */ F(ji, [["__scopeId", "data-v-97d6527d"]]), Ki = { class: "file-path" }, Yi = { class: "file-path-text" }, Ji = ["title"], Xi = /* @__PURE__ */ A({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, s = x(!1);
    async function l() {
      try {
        await navigator.clipboard.writeText(r.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, y) => (o(), n("div", Ki, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Yi, i(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: l
      }, i(s.value ? "✓" : "📋"), 9, Ji)) : c("", !0)
    ]));
  }
}), Qi = /* @__PURE__ */ F(Xi, [["__scopeId", "data-v-f0982173"]]), Zi = { class: "output-path-input" }, er = { class: "export-actions" }, tr = {
  key: 1,
  class: "export-warning"
}, or = /* @__PURE__ */ A({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = me(), s = x(""), l = x(!1), g = x(null), y = x(!1);
    async function u() {
      l.value = !0, g.value = null;
      try {
        const m = await r(s.value || void 0);
        g.value = m;
      } catch (m) {
        g.value = {
          status: "error",
          message: m instanceof Error ? m.message : "Unknown error occurred"
        };
      } finally {
        l.value = !1;
      }
    }
    async function f() {
      var m;
      if ((m = g.value) != null && m.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (h) {
          console.error("Failed to copy path:", h);
        }
    }
    return (m, h) => (o(), n(P, null, [
      d(fe, null, {
        header: a(() => [
          d(ge, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              d(U, {
                variant: "ghost",
                size: "sm",
                onClick: h[0] || (h[0] = (p) => y.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...h[5] || (h[5] = [
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
          d(re, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              d(de, { status: "synced" }, {
                icon: a(() => [...h[6] || (h[6] = [
                  v("📦", -1)
                ])]),
                title: a(() => [...h[7] || (h[7] = [
                  v("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...h[8] || (h[8] = [
                  v(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  d(Z, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  d(Z, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  d(Z, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  d(Z, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          d(re, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              d(de, { status: "synced" }, {
                icon: a(() => [...h[9] || (h[9] = [
                  v("📁", -1)
                ])]),
                title: a(() => [...h[10] || (h[10] = [
                  v("Output Destination", -1)
                ])]),
                subtitle: a(() => [...h[11] || (h[11] = [
                  v(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", Zi, [
                    d(je, {
                      modelValue: s.value,
                      "onUpdate:modelValue": h[1] || (h[1] = (p) => s.value = p),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          d(re, { title: "EXPORT" }, {
            default: a(() => [
              e("div", er, [
                d(U, {
                  variant: "primary",
                  size: "md",
                  loading: l.value,
                  disabled: l.value,
                  onClick: u
                }, {
                  default: a(() => [
                    h[12] || (h[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    v(" " + i(l.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), b(U, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: l.value,
                  onClick: h[2] || (h[2] = (p) => s.value = "")
                }, {
                  default: a(() => [...h[13] || (h[13] = [
                    v(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), b(re, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              d(de, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, wt({
                icon: a(() => [
                  v(i(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  v(i(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  v(i(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    d(Z, { label: "Saved to:" }, {
                      default: a(() => [
                        d(Qi, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), b(Z, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), n("div", tr, [...h[14] || (h[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    d(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: f
                    }, {
                      default: a(() => [...h[15] || (h[15] = [
                        v(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    d(U, {
                      variant: "ghost",
                      size: "sm",
                      onClick: h[3] || (h[3] = (p) => g.value = null)
                    }, {
                      default: a(() => [...h[16] || (h[16] = [
                        v(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }),
      d(xe, {
        show: y.value,
        title: "About Environment Export",
        onClose: h[4] || (h[4] = (p) => y.value = !1)
      }, {
        content: a(() => [...h[17] || (h[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            v(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sr = /* @__PURE__ */ F(or, [["__scopeId", "data-v-1777a9d5"]]), ar = { class: "file-input-wrapper" }, nr = ["accept", "multiple", "disabled"], lr = /* @__PURE__ */ A({
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
  setup(t, { expose: r, emit: s }) {
    const l = s, g = x(null);
    function y() {
      var f;
      (f = g.value) == null || f.click();
    }
    function u(f) {
      const m = f.target;
      m.files && m.files.length > 0 && (l("change", m.files), m.value = "");
    }
    return r({
      triggerInput: y
    }), (f, m) => (o(), n("div", ar, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, nr),
      d(U, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: a(() => [
          te(f.$slots, "default", {}, () => [
            m[0] || (m[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            v(" " + i(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), ir = /* @__PURE__ */ F(lr, [["__scopeId", "data-v-cd192091"]]), rr = {
  key: 0,
  class: "drop-zone-empty"
}, cr = { class: "drop-zone-text" }, dr = { class: "drop-zone-primary" }, ur = { class: "drop-zone-secondary" }, mr = { class: "drop-zone-actions" }, vr = {
  key: 1,
  class: "drop-zone-file"
}, fr = { class: "file-info" }, gr = { class: "file-details" }, hr = { class: "file-name" }, pr = { class: "file-size" }, yr = /* @__PURE__ */ A({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: r }) {
    const s = r, l = x(!1), g = x(null), y = x(0), u = W(() => g.value !== null), f = W(() => {
      var T;
      return ((T = g.value) == null ? void 0 : T.name) || "";
    }), m = W(() => {
      if (!g.value) return "";
      const T = g.value.size;
      return T < 1024 ? `${T} B` : T < 1024 * 1024 ? `${(T / 1024).toFixed(1)} KB` : T < 1024 * 1024 * 1024 ? `${(T / (1024 * 1024)).toFixed(1)} MB` : `${(T / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function h(T) {
      var R;
      y.value++, (R = T.dataTransfer) != null && R.types.includes("Files") && (l.value = !0);
    }
    function p(T) {
      T.dataTransfer && (T.dataTransfer.dropEffect = "copy");
    }
    function w() {
      y.value--, y.value === 0 && (l.value = !1);
    }
    function _(T) {
      var J;
      y.value = 0, l.value = !1;
      const R = (J = T.dataTransfer) == null ? void 0 : J.files;
      R && R.length > 0 && D(R[0]);
    }
    function L(T) {
      T.length > 0 && D(T[0]);
    }
    function D(T) {
      g.value = T, s("fileSelected", T);
    }
    function H() {
      g.value = null, s("clear");
    }
    return (T, R) => (o(), n("div", {
      class: q(["file-drop-zone", { "drop-active": l.value, "has-file": u.value }]),
      onDragenter: ve(h, ["prevent"]),
      onDragover: ve(p, ["prevent"]),
      onDragleave: ve(w, ["prevent"]),
      onDrop: ve(_, ["prevent"])
    }, [
      u.value ? (o(), n("div", vr, [
        e("div", fr, [
          R[1] || (R[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", gr, [
            e("div", hr, i(f.value), 1),
            e("div", pr, i(m.value), 1)
          ])
        ]),
        d(U, {
          variant: "ghost",
          size: "xs",
          onClick: H,
          title: "Remove file"
        }, {
          default: a(() => [...R[2] || (R[2] = [
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
      ])) : (o(), n("div", rr, [
        R[0] || (R[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", cr, [
          e("p", dr, i(t.primaryText), 1),
          e("p", ur, i(t.secondaryText), 1)
        ]),
        e("div", mr, [
          d(ir, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: L
          }, {
            default: a(() => [
              v(i(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), wr = /* @__PURE__ */ F(yr, [["__scopeId", "data-v-e00abbca"]]), br = { class: "import-preview" }, kr = { class: "preview-header" }, $r = {
  key: 0,
  class: "source-env"
}, _r = { class: "preview-content" }, Cr = { class: "preview-section" }, xr = { class: "section-header" }, Sr = { class: "section-info" }, Er = { class: "section-count" }, Ir = {
  key: 0,
  class: "item-list"
}, zr = { class: "item-name" }, Lr = {
  key: 0,
  class: "item-more"
}, Mr = { class: "preview-section" }, Nr = { class: "section-header" }, Tr = { class: "section-info" }, Dr = { class: "section-count" }, Br = {
  key: 0,
  class: "item-list"
}, Rr = { class: "item-details" }, Ur = { class: "item-name" }, Or = { class: "item-meta" }, Vr = {
  key: 0,
  class: "item-more"
}, Pr = { class: "preview-section" }, Ar = { class: "section-header" }, Fr = { class: "section-info" }, Wr = { class: "section-count" }, Hr = {
  key: 0,
  class: "item-list"
}, Gr = { class: "item-name" }, jr = {
  key: 0,
  class: "item-more"
}, qr = {
  key: 0,
  class: "preview-section"
}, Kr = { class: "git-info" }, Yr = /* @__PURE__ */ A({
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
    const r = t, s = W(() => r.workflows.length), l = W(() => r.models.length), g = W(() => r.nodes.length);
    function y(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, f) => (o(), n("div", br, [
      e("div", kr, [
        d(pe, null, {
          default: a(() => [...f[0] || (f[0] = [
            v("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", $r, [
          f[1] || (f[1] = v(" From: ", -1)),
          d(rt, null, {
            default: a(() => [
              v(i(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", _r, [
        e("div", Cr, [
          e("div", xr, [
            f[3] || (f[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Sr, [
              f[2] || (f[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Er, i(s.value) + " file" + i(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Ir, [
            (o(!0), n(P, null, K(t.workflows.slice(0, t.maxPreviewItems), (m) => (o(), n("div", {
              key: m,
              class: "preview-item"
            }, [
              f[4] || (f[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", zr, i(m), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", Lr, " +" + i(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Mr, [
          e("div", Nr, [
            f[6] || (f[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Tr, [
              f[5] || (f[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Dr, i(l.value) + " file" + i(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Br, [
            (o(!0), n(P, null, K(t.models.slice(0, t.maxPreviewItems), (m) => (o(), n("div", {
              key: m.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Rr, [
                e("span", Ur, i(m.filename), 1),
                e("span", Or, i(y(m.size)) + " • " + i(m.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", Vr, " +" + i(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Pr, [
          e("div", Ar, [
            f[9] || (f[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Fr, [
              f[8] || (f[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Wr, i(g.value) + " node" + i(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", Hr, [
            (o(!0), n(P, null, K(t.nodes.slice(0, t.maxPreviewItems), (m) => (o(), n("div", {
              key: m,
              class: "preview-item"
            }, [
              f[10] || (f[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Gr, i(m), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", jr, " +" + i(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", qr, [
          f[11] || (f[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Kr, [
            t.gitBranch ? (o(), b(Z, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                d(rt, null, {
                  default: a(() => [
                    v(i(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), b(Z, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                d(_t, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), Jr = /* @__PURE__ */ F(Yr, [["__scopeId", "data-v-182fe113"]]), Xr = { class: "import-options" }, Qr = { class: "options-container" }, Zr = { class: "option-section" }, ec = { class: "conflict-options" }, tc = ["value", "checked", "onChange"], oc = { class: "conflict-content" }, sc = { class: "conflict-label" }, ac = { class: "conflict-description" }, nc = { class: "option-section" }, lc = { class: "component-toggles" }, ic = /* @__PURE__ */ A({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: r }) {
    const s = r, l = [
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
    return (g, y) => (o(), n("div", Xr, [
      d(pe, null, {
        default: a(() => [...y[4] || (y[4] = [
          v("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Qr, [
        e("div", Zr, [
          d(it, null, {
            default: a(() => [...y[5] || (y[5] = [
              v("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", ec, [
            (o(), n(P, null, K(l, (u) => e("label", {
              key: u.value,
              class: q(["conflict-option", { active: t.conflictMode === u.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: u.value,
                checked: t.conflictMode === u.value,
                onChange: (f) => s("update:conflictMode", u.value)
              }, null, 40, tc),
              e("div", oc, [
                e("span", sc, i(u.label), 1),
                e("span", ac, i(u.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", nc, [
          d(it, null, {
            default: a(() => [...y[6] || (y[6] = [
              v("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", lc, [
            d(Le, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                d(Oe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (u) => s("update:includeWorkflows", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Le, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                d(Oe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (u) => s("update:includeModels", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Le, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                d(Oe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (u) => s("update:includeNodes", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            d(Le, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                d(Oe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (u) => s("update:includeGitHistory", u))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), rc = /* @__PURE__ */ F(ic, [["__scopeId", "data-v-0ec212b0"]]), cc = {
  key: 0,
  class: "import-empty"
}, dc = { class: "import-help" }, uc = {
  key: 1,
  class: "import-configure"
}, mc = { class: "selected-file-bar" }, vc = { class: "file-bar-content" }, fc = { class: "file-bar-info" }, gc = { class: "file-bar-name" }, hc = { class: "file-bar-size" }, pc = { class: "import-actions" }, yc = {
  key: 2,
  class: "import-progress"
}, wc = { class: "progress-content" }, bc = { class: "progress-info" }, kc = { class: "progress-title" }, $c = { class: "progress-detail" }, _c = { class: "progress-bar" }, Cc = { class: "progress-status" }, xc = {
  key: 3,
  class: "import-complete"
}, Sc = { class: "complete-message" }, Ec = { class: "complete-title" }, Ic = { class: "complete-details" }, zc = { class: "complete-actions" }, Lc = /* @__PURE__ */ A({
  __name: "ImportSection",
  setup(t) {
    const r = x(null), s = x(!1), l = x(!1), g = x(!1), y = x(""), u = x({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), f = x({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), m = x({
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
    }), h = W(() => u.value.includeWorkflows || u.value.includeModels || u.value.includeNodes || u.value.includeGitHistory);
    function p(H) {
      r.value = H;
    }
    function w() {
      r.value = null, l.value = !1, g.value = !1, y.value = "";
    }
    function _() {
      w(), s.value = !1, f.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function L() {
      if (r.value) {
        s.value = !0, l.value = !1;
        try {
          const H = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${m.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${m.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${m.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const T of H)
            f.value = T, await new Promise((R) => setTimeout(R, 800));
          f.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((T) => setTimeout(T, 500)), g.value = !0, y.value = `Successfully imported ${m.value.workflows.length} workflows, ${m.value.models.length} models, and ${m.value.nodes.length} custom nodes.`;
        } catch (H) {
          g.value = !1, y.value = H instanceof Error ? H.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, l.value = !0;
        }
      }
    }
    function D(H) {
      return H < 1024 ? `${H} B` : H < 1024 * 1024 ? `${(H / 1024).toFixed(1)} KB` : H < 1024 * 1024 * 1024 ? `${(H / (1024 * 1024)).toFixed(1)} MB` : `${(H / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (H, T) => (o(), b(fe, null, {
      header: a(() => [
        d(ge, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !r.value && !s.value ? (o(), n("div", cc, [
          d(wr, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: p
          }),
          e("div", dc, [
            d(pe, null, {
              default: a(() => [...T[5] || (T[5] = [
                v("How to Import", -1)
              ])]),
              _: 1
            }),
            T[6] || (T[6] = e("div", { class: "help-content" }, [
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
        ])) : r.value && !s.value && !l.value ? (o(), n("div", uc, [
          e("div", mc, [
            e("div", vc, [
              T[7] || (T[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", fc, [
                e("div", gc, i(r.value.name), 1),
                e("div", hc, i(D(r.value.size)), 1)
              ])
            ]),
            d(U, {
              variant: "ghost",
              size: "sm",
              onClick: w
            }, {
              default: a(() => [...T[8] || (T[8] = [
                v(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          d(Jr, {
            "source-environment": m.value.sourceEnvironment,
            workflows: m.value.workflows,
            models: m.value.models,
            nodes: m.value.nodes,
            "git-branch": m.value.gitBranch,
            "git-commit": m.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          d(rc, {
            "conflict-mode": u.value.conflictMode,
            "onUpdate:conflictMode": T[0] || (T[0] = (R) => u.value.conflictMode = R),
            "include-workflows": u.value.includeWorkflows,
            "onUpdate:includeWorkflows": T[1] || (T[1] = (R) => u.value.includeWorkflows = R),
            "include-models": u.value.includeModels,
            "onUpdate:includeModels": T[2] || (T[2] = (R) => u.value.includeModels = R),
            "include-nodes": u.value.includeNodes,
            "onUpdate:includeNodes": T[3] || (T[3] = (R) => u.value.includeNodes = R),
            "include-git-history": u.value.includeGitHistory,
            "onUpdate:includeGitHistory": T[4] || (T[4] = (R) => u.value.includeGitHistory = R)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !u.value.includeModels && m.value.models.length > 0 ? (o(), b(Xe, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${m.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", pc, [
            d(U, {
              variant: "primary",
              size: "md",
              disabled: !h.value,
              onClick: L
            }, {
              default: a(() => [...T[9] || (T[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                v(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            d(U, {
              variant: "secondary",
              size: "md",
              onClick: w
            }, {
              default: a(() => [...T[10] || (T[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", yc, [
          e("div", wc, [
            T[11] || (T[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", bc, [
              e("div", kc, i(f.value.message), 1),
              e("div", $c, i(f.value.detail), 1)
            ])
          ]),
          e("div", _c, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${f.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Cc, i(f.value.percent) + "% complete ", 1)
        ])) : l.value ? (o(), n("div", xc, [
          e("div", {
            class: q(["complete-icon", g.value ? "success" : "error"])
          }, i(g.value ? "✓" : "✕"), 3),
          e("div", Sc, [
            e("div", Ec, i(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Ic, i(y.value), 1)
          ]),
          e("div", zc, [
            d(U, {
              variant: "primary",
              size: "md",
              onClick: _
            }, {
              default: a(() => [...T[12] || (T[12] = [
                v(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Mc = /* @__PURE__ */ F(Lc, [["__scopeId", "data-v-18e18eb5"]]), Nc = { class: "header-info" }, Tc = { class: "commit-hash" }, Dc = {
  key: 0,
  class: "commit-refs"
}, Bc = { class: "commit-message" }, Rc = { class: "commit-date" }, Uc = {
  key: 0,
  class: "loading"
}, Oc = {
  key: 1,
  class: "changes-section"
}, Vc = { class: "stats-row" }, Pc = { class: "stat" }, Ac = { class: "stat insertions" }, Fc = { class: "stat deletions" }, Wc = {
  key: 0,
  class: "change-group"
}, Hc = {
  key: 1,
  class: "change-group"
}, Gc = {
  key: 0,
  class: "version"
}, jc = {
  key: 2,
  class: "change-group"
}, qc = { class: "change-item" }, Kc = /* @__PURE__ */ A({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: s } = me(), l = x(null), g = x(!0), y = W(() => {
      if (!l.value) return !1;
      const f = l.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), u = W(() => {
      if (!l.value) return !1;
      const f = l.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return ue(async () => {
      try {
        l.value = await s(r.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (f, m) => (o(), b(Ze, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (h) => f.$emit("close"))
    }, {
      header: a(() => {
        var h, p, w, _;
        return [
          e("div", Nc, [
            m[4] || (m[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Tc, i(((h = l.value) == null ? void 0 : h.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (_ = (w = l.value) == null ? void 0 : w.refs) != null && _.length ? (o(), n("span", Dc, [
              (o(!0), n(P, null, K(l.value.refs, (L) => (o(), n("span", {
                key: L,
                class: "ref-badge"
              }, i(L), 1))), 128))
            ])) : c("", !0)
          ]),
          d(ce, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (L) => f.$emit("close"))
          }, {
            default: a(() => [...m[5] || (m[5] = [
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
        var h, p;
        return [
          e("div", Bc, i(((h = l.value) == null ? void 0 : h.message) || t.commit.message), 1),
          e("div", Rc, i(((p = l.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), n("div", Uc, "Loading details...")) : l.value ? (o(), n("div", Oc, [
            e("div", Vc, [
              e("span", Pc, i(l.value.stats.files_changed) + " files", 1),
              e("span", Ac, "+" + i(l.value.stats.insertions), 1),
              e("span", Fc, "-" + i(l.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", Wc, [
              d(Me, { variant: "section" }, {
                default: a(() => [...m[6] || (m[6] = [
                  v("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(P, null, K(l.value.changes.workflows.added, (w) => (o(), n("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                m[7] || (m[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, i(w), 1)
              ]))), 128)),
              (o(!0), n(P, null, K(l.value.changes.workflows.modified, (w) => (o(), n("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, i(w), 1)
              ]))), 128)),
              (o(!0), n(P, null, K(l.value.changes.workflows.deleted, (w) => (o(), n("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, i(w), 1)
              ]))), 128))
            ])) : c("", !0),
            u.value ? (o(), n("div", Hc, [
              d(Me, { variant: "section" }, {
                default: a(() => [...m[10] || (m[10] = [
                  v("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(P, null, K(l.value.changes.nodes.added, (w) => (o(), n("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, i(w.name), 1),
                w.version ? (o(), n("span", Gc, "(" + i(w.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), n(P, null, K(l.value.changes.nodes.removed, (w) => (o(), n("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, i(w.name), 1)
              ]))), 128))
            ])) : c("", !0),
            l.value.changes.models.resolved > 0 ? (o(), n("div", jc, [
              d(Me, { variant: "section" }, {
                default: a(() => [...m[13] || (m[13] = [
                  v("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", qc, [
                m[14] || (m[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, i(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (h) => f.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...m[15] || (m[15] = [
            v(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        d(ce, {
          variant: "primary",
          onClick: m[2] || (m[2] = (h) => f.$emit("checkout", t.commit))
        }, {
          default: a(() => [...m[16] || (m[16] = [
            v(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Yc = /* @__PURE__ */ F(Kc, [["__scopeId", "data-v-d256ff6d"]]), Jc = { class: "dialog-message" }, Xc = {
  key: 0,
  class: "dialog-details"
}, Qc = {
  key: 1,
  class: "dialog-warning"
}, Zc = /* @__PURE__ */ A({
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
    return (r, s) => (o(), b(Ze, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (l) => r.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", Jc, i(t.message), 1),
        t.details && t.details.length ? (o(), n("div", Xc, [
          (o(!0), n(P, null, K(t.details, (l, g) => (o(), n("div", {
            key: g,
            class: "detail-item"
          }, " • " + i(l), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), n("p", Qc, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          v(" " + i(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        d(ce, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (l) => r.$emit("cancel"))
        }, {
          default: a(() => [
            v(i(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), b(ce, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (l) => r.$emit("secondary"))
        }, {
          default: a(() => [
            v(i(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        d(ce, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
        }, {
          default: a(() => [
            v(i(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ed = /* @__PURE__ */ F(Zc, [["__scopeId", "data-v-3670b9f5"]]), td = { class: "base-textarea-wrapper" }, od = ["value", "rows", "placeholder", "disabled", "maxlength"], sd = {
  key: 0,
  class: "base-textarea-count"
}, ad = /* @__PURE__ */ A({
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
    return (r, s) => (o(), n("div", td, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ce(ve((l) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ce(ve((l) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, od),
      t.showCharCount && t.maxLength ? (o(), n("div", sd, i(t.modelValue.length) + " / " + i(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), pt = /* @__PURE__ */ F(ad, [["__scopeId", "data-v-5516e6fc"]]), nd = { class: "popover-header" }, ld = { class: "popover-body" }, id = {
  key: 0,
  class: "changes-summary"
}, rd = {
  key: 0,
  class: "change-item"
}, cd = {
  key: 1,
  class: "change-item"
}, dd = {
  key: 2,
  class: "change-item"
}, ud = {
  key: 3,
  class: "change-item"
}, md = {
  key: 4,
  class: "change-item"
}, vd = {
  key: 1,
  class: "no-changes"
}, fd = {
  key: 2,
  class: "loading"
}, gd = { class: "message-section" }, hd = { class: "popover-footer" }, pd = {
  key: 1,
  class: "commit-popover"
}, yd = { class: "popover-header" }, wd = { class: "popover-body" }, bd = {
  key: 0,
  class: "changes-summary"
}, kd = {
  key: 0,
  class: "change-item"
}, $d = {
  key: 1,
  class: "change-item"
}, _d = {
  key: 2,
  class: "change-item"
}, Cd = {
  key: 3,
  class: "change-item"
}, xd = {
  key: 4,
  class: "change-item"
}, Sd = {
  key: 1,
  class: "no-changes"
}, Ed = {
  key: 2,
  class: "loading"
}, Id = { class: "message-section" }, zd = { class: "popover-footer" }, Ld = /* @__PURE__ */ A({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const s = t, l = r, { commit: g } = me(), y = x(""), u = x(!1), f = x(null), m = W(() => {
      if (!s.status) return !1;
      const p = s.status.workflows;
      return p.new.length > 0 || p.modified.length > 0 || p.deleted.length > 0 || s.status.has_changes;
    });
    async function h() {
      var p, w, _;
      if (!(!m.value || !y.value.trim() || u.value)) {
        u.value = !0, f.value = null;
        try {
          const L = await g(y.value.trim());
          L.status === "success" ? (f.value = {
            type: "success",
            message: `Committed: ${((p = L.summary) == null ? void 0 : p.new) || 0} new, ${((w = L.summary) == null ? void 0 : w.modified) || 0} modified, ${((_ = L.summary) == null ? void 0 : _.deleted) || 0} deleted`
          }, y.value = "", setTimeout(() => l("committed"), 1e3)) : L.status === "no_changes" ? f.value = { type: "error", message: "No changes to commit" } : f.value = { type: "error", message: L.message || "Commit failed" };
        } catch (L) {
          f.value = { type: "error", message: L instanceof Error ? L.message : "Commit failed" };
        } finally {
          u.value = !1;
        }
      }
    }
    return (p, w) => t.asModal ? (o(), b(Be, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: w[4] || (w[4] = (_) => l("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: w[3] || (w[3] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", nd, [
            w[9] || (w[9] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: w[0] || (w[0] = (_) => l("close"))
            }, [...w[8] || (w[8] = [
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
          e("div", ld, [
            t.status && m.value ? (o(), n("div", id, [
              t.status.workflows.new.length ? (o(), n("div", rd, [
                w[10] || (w[10] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, i(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), n("div", cd, [
                w[11] || (w[11] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, i(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", dd, [
                w[12] || (w[12] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, i(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", ud, [
                w[13] || (w[13] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, i(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", md, [
                w[14] || (w[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, i(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), n("div", vd, " No changes to commit ")) : (o(), n("div", fd, " Loading... ")),
            e("div", gd, [
              d(pt, {
                modelValue: y.value,
                "onUpdate:modelValue": w[1] || (w[1] = (_) => y.value = _),
                placeholder: m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || u.value,
                rows: 3,
                onCtrlEnter: h
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            f.value ? (o(), n("div", {
              key: 3,
              class: q(["result", f.value.type])
            }, i(f.value.message), 3)) : c("", !0)
          ]),
          e("div", hd, [
            d(ce, {
              variant: "secondary",
              onClick: w[2] || (w[2] = (_) => l("close"))
            }, {
              default: a(() => [...w[15] || (w[15] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(ce, {
              variant: "primary",
              disabled: !m.value || !y.value.trim() || u.value,
              loading: u.value,
              onClick: h
            }, {
              default: a(() => [
                v(i(u.value ? "Committing..." : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", pd, [
      e("div", yd, [
        w[17] || (w[17] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: w[5] || (w[5] = (_) => l("close"))
        }, [...w[16] || (w[16] = [
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
      e("div", wd, [
        t.status && m.value ? (o(), n("div", bd, [
          t.status.workflows.new.length ? (o(), n("div", kd, [
            w[18] || (w[18] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, i(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), n("div", $d, [
            w[19] || (w[19] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, i(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", _d, [
            w[20] || (w[20] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, i(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", Cd, [
            w[21] || (w[21] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, i(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", xd, [
            w[22] || (w[22] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, i(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), n("div", Sd, " No changes to commit ")) : (o(), n("div", Ed, " Loading... ")),
        e("div", Id, [
          d(pt, {
            modelValue: y.value,
            "onUpdate:modelValue": w[6] || (w[6] = (_) => y.value = _),
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || u.value,
            rows: 3,
            onCtrlEnter: h
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        f.value ? (o(), n("div", {
          key: 3,
          class: q(["result", f.value.type])
        }, i(f.value.message), 3)) : c("", !0)
      ]),
      e("div", zd, [
        d(ce, {
          variant: "secondary",
          onClick: w[7] || (w[7] = (_) => l("close"))
        }, {
          default: a(() => [...w[23] || (w[23] = [
            v(" Cancel ", -1)
          ])]),
          _: 1
        }),
        d(ce, {
          variant: "primary",
          disabled: !m.value || !y.value.trim() || u.value,
          loading: u.value,
          onClick: h
        }, {
          default: a(() => [
            v(i(u.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ F(Ld, [["__scopeId", "data-v-a8e2ae3a"]]), Md = { class: "modal-header" }, Nd = { class: "modal-body" }, Td = { class: "switch-message" }, Dd = { class: "switch-details" }, Bd = { class: "modal-actions" }, Rd = /* @__PURE__ */ A({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, s) => (o(), b(Be, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", Md, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Nd, [
            e("p", Td, [
              s[6] || (s[6] = v(" Switch from ", -1)),
              e("strong", null, i(t.fromEnvironment), 1),
              s[7] || (s[7] = v(" to ", -1)),
              e("strong", null, i(t.toEnvironment), 1),
              s[8] || (s[8] = v("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Dd, ' Your current work will be preserved. You can switch back to "' + i(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Bd, [
            d(U, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (l) => r.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(U, {
              variant: "primary",
              onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                v(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Ud = /* @__PURE__ */ F(Rd, [["__scopeId", "data-v-e9c5253e"]]), Od = { class: "progress-bar" }, Vd = /* @__PURE__ */ A({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, s = W(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (l, g) => (o(), n("div", Od, [
      e("div", {
        class: q(["progress-fill", t.variant]),
        style: qe({ width: s.value })
      }, null, 6)
    ]));
  }
}), Pd = /* @__PURE__ */ F(Vd, [["__scopeId", "data-v-1beb0512"]]), Ad = {
  key: 0,
  class: "modal-overlay"
}, Fd = { class: "modal-content" }, Wd = { class: "modal-body" }, Hd = { class: "progress-info" }, Gd = { class: "progress-percentage" }, jd = { class: "progress-state" }, qd = { class: "switch-steps" }, Kd = { class: "step-icon" }, Yd = { class: "step-label" }, Jd = /* @__PURE__ */ A({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, s = W(() => {
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
      return r.message || y[r.state] || r.state;
    }), l = W(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), g = W(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = y.findIndex((f) => f.state === r.state);
      return y.map((f, m) => {
        let h = "pending", p = "○";
        return m < u ? (h = "completed", p = "✓") : m === u && (h = "active", p = "⟳"), {
          ...f,
          status: h,
          icon: p
        };
      });
    });
    return (y, u) => (o(), b(Be, { to: "body" }, [
      t.show ? (o(), n("div", Ad, [
        e("div", Fd, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Wd, [
            d(Pd, {
              progress: t.progress,
              variant: l.value
            }, null, 8, ["progress", "variant"]),
            e("div", Hd, [
              e("div", Gd, i(t.progress) + "%", 1),
              e("div", jd, i(s.value), 1)
            ]),
            e("div", qd, [
              (o(!0), n(P, null, K(g.value, (f) => (o(), n("div", {
                key: f.state,
                class: q(["switch-step", f.status])
              }, [
                e("span", Kd, i(f.icon), 1),
                e("span", Yd, i(f.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Xd = /* @__PURE__ */ F(Jd, [["__scopeId", "data-v-768a5078"]]), Qd = { class: "modal-header" }, Zd = { class: "modal-body" }, eu = {
  key: 0,
  class: "node-section"
}, tu = { class: "node-list" }, ou = {
  key: 1,
  class: "node-section"
}, su = { class: "node-list" }, au = { class: "modal-actions" }, nu = /* @__PURE__ */ A({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, s) => (o(), b(Be, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = ve(() => {
          }, ["stop"]))
        }, [
          e("div", Qd, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Zd, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", eu, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", tu, [
                (o(!0), n(P, null, K(t.mismatchDetails.missing_nodes, (l) => (o(), n("div", {
                  key: l,
                  class: "node-item add"
                }, " + " + i(l), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", ou, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", su, [
                (o(!0), n(P, null, K(t.mismatchDetails.extra_nodes, (l) => (o(), n("div", {
                  key: l,
                  class: "node-item remove"
                }, " - " + i(l), 1))), 128))
              ])
            ])) : c("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", au, [
            d(U, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (l) => r.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                v(" Cancel ", -1)
              ])]),
              _: 1
            }),
            d(U, {
              variant: "primary",
              onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                v(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), lu = /* @__PURE__ */ F(nu, [["__scopeId", "data-v-7cad7518"]]);
async function We(t, r = {}, s = 5e3) {
  const l = new AbortController(), g = setTimeout(() => l.abort(), s);
  try {
    const y = await fetch(t, {
      ...r,
      signal: l.signal
    });
    return clearTimeout(g), y;
  } catch (y) {
    throw clearTimeout(g), y.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : y;
  }
}
function iu() {
  const t = x(null);
  async function r() {
    try {
      const u = await We(
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
  async function s() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const u = await We(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Health check failed");
      return await u.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function l() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const u = await We(
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
  async function g() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await We(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await We(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: r,
    checkHealth: s,
    getStatus: l,
    restart: g,
    kill: y
  };
}
const ru = { class: "comfygit-panel" }, cu = { class: "panel-header" }, du = { class: "header-left" }, uu = {
  key: 0,
  class: "header-info"
}, mu = { class: "header-actions" }, vu = { class: "env-switcher" }, fu = {
  key: 0,
  class: "header-info"
}, gu = { class: "branch-name" }, hu = { class: "panel-main" }, pu = { class: "sidebar" }, yu = { class: "sidebar-section" }, wu = { class: "sidebar-section" }, bu = { class: "sidebar-section" }, ku = { class: "content-area" }, $u = {
  key: 0,
  class: "error-message"
}, _u = {
  key: 1,
  class: "loading"
}, Cu = { class: "dialog-content env-selector-dialog" }, xu = { class: "dialog-header" }, Su = { class: "dialog-body" }, Eu = { class: "env-list" }, Iu = { class: "env-info" }, zu = { class: "env-name-row" }, Lu = { class: "env-indicator" }, Mu = { class: "env-name" }, Nu = {
  key: 0,
  class: "env-branch"
}, Tu = {
  key: 1,
  class: "current-label"
}, Du = { class: "env-stats" }, Bu = ["onClick"], Ru = { class: "toast-container" }, Uu = { class: "toast-icon" }, Ou = { class: "toast-message" }, Vu = /* @__PURE__ */ A({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const s = r, {
      getStatus: l,
      getHistory: g,
      getBranches: y,
      checkout: u,
      createBranch: f,
      switchBranch: m,
      getEnvironments: h,
      switchEnvironment: p,
      getSwitchProgress: w,
      syncEnvironmentManually: _
    } = me(), L = iu(), D = x(null), H = x([]), T = x([]), R = x([]), J = W(() => R.value.find((B) => B.is_current)), j = x(!1), M = x(null), I = x(null), k = x(!1), S = x(!1), C = x(!1), z = x(""), N = x({ state: "idle", progress: 0, message: "" });
    let G = null, O = null;
    const E = x("status"), Y = x("this-env");
    function oe(B, $) {
      E.value = B, Y.value = $;
    }
    function Re(B) {
      const se = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[B];
      se && oe(se.view, se.section);
    }
    function Ue() {
      oe("branches", "this-env");
    }
    const ie = x(null), ee = x(!1), Ne = x(!1), Ie = x([]);
    let et = 0;
    function ne(B, $ = "info", se = 3e3) {
      const le = ++et;
      return Ie.value.push({ id: le, message: B, type: $ }), se > 0 && setTimeout(() => {
        Ie.value = Ie.value.filter((ye) => ye.id !== le);
      }, se), le;
    }
    function $e(B) {
      Ie.value = Ie.value.filter(($) => $.id !== B);
    }
    function tt(B) {
      switch (B) {
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
    const V = W(() => {
      if (!D.value) return "neutral";
      const B = D.value.workflows, $ = B.new.length > 0 || B.modified.length > 0 || B.deleted.length > 0 || D.value.has_changes;
      return D.value.comparison.is_synced ? $ ? "warning" : "success" : "error";
    });
    W(() => D.value ? V.value === "success" ? "All synced" : V.value === "warning" ? "Uncommitted changes" : V.value === "error" ? "Not synced" : "" : "");
    async function X() {
      j.value = !0, M.value = null;
      try {
        const [B, $, se, le] = await Promise.all([
          l(),
          g(),
          y(),
          h()
        ]);
        D.value = B, H.value = $.commits, T.value = se.branches, R.value = le, s("statusUpdate", B);
      } catch (B) {
        M.value = B instanceof Error ? B.message : "Failed to load status", D.value = null, H.value = [], T.value = [];
      } finally {
        j.value = !1;
      }
    }
    function ae(B) {
      I.value = B;
    }
    async function Fe(B) {
      var se;
      I.value = null;
      const $ = D.value && (D.value.workflows.new.length > 0 || D.value.workflows.modified.length > 0 || D.value.workflows.deleted.length > 0 || D.value.has_changes);
      ie.value = {
        title: $ ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: $ ? "You have uncommitted changes that will be lost." : `Checkout commit ${B.short_hash || ((se = B.hash) == null ? void 0 : se.slice(0, 7))}?`,
        details: $ ? ft() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: $ ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: $,
        onConfirm: async () => {
          var we;
          ie.value = null;
          const le = ne(`Checking out ${B.short_hash || ((we = B.hash) == null ? void 0 : we.slice(0, 7))}...`, "info", 0), ye = await u(B.hash, $);
          $e(le), ye.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(ye.message || "Checkout failed", "error");
        }
      };
    }
    async function Ke(B) {
      const $ = D.value && (D.value.workflows.new.length > 0 || D.value.workflows.modified.length > 0 || D.value.workflows.deleted.length > 0 || D.value.has_changes);
      ie.value = {
        title: $ ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: $ ? "You have uncommitted changes." : `Switch to branch "${B}"?`,
        details: $ ? ft() : void 0,
        warning: $ ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: $ ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null;
          const se = ne(`Switching to ${B}...`, "info", 0), le = await m(B, $);
          $e(se), le.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(le.message || "Branch switch failed", "error");
        }
      };
    }
    async function zt(B) {
      const $ = ne(`Creating branch ${B}...`, "info", 0), se = await f(B);
      $e($), se.status === "success" ? (ne(`Branch "${B}" created`, "success"), await X()) : ne(se.message || "Failed to create branch", "error");
    }
    async function Lt(B) {
      I.value = null;
      const $ = prompt("Enter branch name:");
      if ($) {
        const se = ne(`Creating branch ${$}...`, "info", 0), le = await f($, B.hash);
        $e(se), le.status === "success" ? (ne(`Branch "${$}" created from ${B.short_hash}`, "success"), await X()) : ne(le.message || "Failed to create branch", "error");
      }
    }
    async function vt(B) {
      k.value = !1, z.value = B, S.value = !0;
    }
    async function Mt() {
      S.value = !1, C.value = !0, N.value = {
        progress: 10,
        state: Ye(10),
        message: Je(10)
      };
      try {
        await p(z.value), Nt(), Tt();
      } catch (B) {
        Te(), C.value = !1, ne(`Failed to initiate switch: ${B instanceof Error ? B.message : "Unknown error"}`, "error"), N.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ye(B) {
      return B >= 100 ? "complete" : B >= 80 ? "validating" : B >= 60 ? "starting" : B >= 30 ? "syncing" : "preparing";
    }
    function Je(B) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ye(B)] || "";
    }
    function Nt() {
      if (O) return;
      let B = 10;
      const $ = 60, se = 5e3, le = 100, ye = ($ - B) / (se / le);
      O = window.setInterval(() => {
        if (B += ye, B >= $ && (B = $, Te()), N.value.progress < $) {
          const we = Math.floor(B);
          N.value = {
            progress: we,
            state: Ye(we),
            message: Je(we)
          };
        }
      }, le);
    }
    function Te() {
      O && (clearInterval(O), O = null);
    }
    function Tt() {
      G || (G = window.setInterval(async () => {
        try {
          let B = await L.getStatus();
          if ((!B || B.state === "idle") && (B = await w()), !B)
            return;
          const $ = B.progress || 0;
          $ >= 60 && Te();
          const se = Math.max($, N.value.progress), le = B.state && B.state !== "idle" && B.state !== "unknown", ye = le ? B.state : Ye(se), we = le && B.message || Je(se);
          N.value = {
            state: ye,
            progress: se,
            message: we
          }, B.state === "complete" ? (Te(), ot(), C.value = !1, ne(`✓ Switched to ${z.value}`, "success"), await X(), z.value = "") : B.state === "rolled_back" ? (Te(), ot(), C.value = !1, ne("Switch failed, restored previous environment", "warning"), z.value = "") : B.state === "critical_failure" && (Te(), ot(), C.value = !1, ne(`Critical error during switch: ${B.message}`, "error"), z.value = "");
        } catch (B) {
          console.error("Failed to poll switch progress:", B);
        }
      }, 1e3));
    }
    function ot() {
      Te(), G && (clearInterval(G), G = null);
    }
    function Dt() {
      S.value = !1, z.value = "";
    }
    async function Bt() {
      ee.value = !1, await X(), ne("✓ Changes committed", "success");
    }
    async function Rt() {
      Ne.value = !1;
      const B = ne("Syncing environment...", "info", 0);
      try {
        const $ = await _("skip", !0);
        if ($e(B), $.status === "success") {
          const se = [];
          $.nodes_installed.length && se.push(`${$.nodes_installed.length} installed`), $.nodes_removed.length && se.push(`${$.nodes_removed.length} removed`);
          const le = se.length ? `: ${se.join(", ")}` : "";
          ne(`✓ Environment synced${le}`, "success"), await X();
        } else {
          const se = $.errors.length ? $.errors.join("; ") : $.message;
          ne(`Sync failed: ${se}`, "error");
        }
      } catch ($) {
        $e(B), ne(`Sync error: ${$ instanceof Error ? $.message : "Unknown error"}`, "error");
      }
    }
    async function Ut(B) {
      const $ = ne(`Creating environment "${B}"...`, "info", 0);
      $e($), ne("Environment creation not yet implemented", "warning");
    }
    async function Ot(B) {
      const $ = ne(`Deleting environment "${B}"...`, "info", 0);
      $e($), ne("Environment deletion not yet implemented", "warning");
    }
    function Vt(B) {
      ne(`Viewing details for "${B}"`, "info"), oe("models-env", "this-env");
    }
    function ft() {
      if (!D.value) return [];
      const B = [], $ = D.value.workflows;
      return $.new.length && B.push(`${$.new.length} new workflow(s)`), $.modified.length && B.push(`${$.modified.length} modified workflow(s)`), $.deleted.length && B.push(`${$.deleted.length} deleted workflow(s)`), B;
    }
    return ue(X), (B, $) => {
      var se, le, ye, we;
      return o(), n("div", ru, [
        e("div", cu, [
          e("div", du, [
            $[28] || ($[28] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            D.value ? (o(), n("div", uu)) : c("", !0)
          ]),
          e("div", mu, [
            e("button", {
              class: q(["icon-btn", { spinning: j.value }]),
              onClick: X,
              title: "Refresh"
            }, [...$[29] || ($[29] = [
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
              onClick: $[0] || ($[0] = (Q) => s("close")),
              title: "Close"
            }, [...$[30] || ($[30] = [
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
        e("div", vu, [
          $[32] || ($[32] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: $[1] || ($[1] = (Q) => oe("environments", "all-envs"))
          }, [
            D.value ? (o(), n("div", fu, [
              e("span", null, i(((se = J.value) == null ? void 0 : se.name) || ((le = D.value) == null ? void 0 : le.environment) || "Loading..."), 1),
              e("span", gu, "(" + i(D.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            $[31] || ($[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", hu, [
          e("div", pu, [
            e("div", yu, [
              $[33] || ($[33] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "status" && Y.value === "this-env" }]),
                onClick: $[2] || ($[2] = (Q) => oe("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "workflows" }]),
                onClick: $[3] || ($[3] = (Q) => oe("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "models-env" }]),
                onClick: $[4] || ($[4] = (Q) => oe("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "branches" }]),
                onClick: $[5] || ($[5] = (Q) => oe("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "history" }]),
                onClick: $[6] || ($[6] = (Q) => oe("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "nodes" }]),
                onClick: $[7] || ($[7] = (Q) => oe("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "debug-env" }]),
                onClick: $[8] || ($[8] = (Q) => oe("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            $[36] || ($[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", wu, [
              $[34] || ($[34] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "environments" }]),
                onClick: $[9] || ($[9] = (Q) => oe("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "model-index" }]),
                onClick: $[10] || ($[10] = (Q) => oe("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "settings" }]),
                onClick: $[11] || ($[11] = (Q) => oe("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "debug-workspace" }]),
                onClick: $[12] || ($[12] = (Q) => oe("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            $[37] || ($[37] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", bu, [
              $[35] || ($[35] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "export" }]),
                onClick: $[13] || ($[13] = (Q) => oe("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "import" }]),
                onClick: $[14] || ($[14] = (Q) => oe("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: q(["sidebar-item", { active: E.value === "remotes" }]),
                onClick: $[15] || ($[15] = (Q) => oe("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", ku, [
            M.value ? (o(), n("div", $u, i(M.value), 1)) : !D.value && E.value === "status" ? (o(), n("div", _u, " Loading status... ")) : (o(), n(P, { key: 2 }, [
              E.value === "status" ? (o(), b(ia, {
                key: 0,
                status: D.value,
                onSwitchBranch: Ue,
                onCommitChanges: $[16] || ($[16] = (Q) => ee.value = !0),
                onSyncEnvironment: $[17] || ($[17] = (Q) => Ne.value = !0),
                onViewWorkflows: $[18] || ($[18] = (Q) => oe("workflows", "this-env")),
                onViewHistory: $[19] || ($[19] = (Q) => oe("history", "this-env")),
                onViewDebug: $[20] || ($[20] = (Q) => oe("debug-env", "this-env")),
                onResolveModels: $[21] || ($[21] = (Q) => oe("workflows", "this-env"))
              }, null, 8, ["status"])) : E.value === "workflows" ? (o(), b(Cl, {
                key: 1,
                onRefresh: X
              })) : E.value === "models-env" ? (o(), b(El, {
                key: 2,
                onNavigate: Re
              })) : E.value === "branches" ? (o(), b($a, {
                key: 3,
                branches: T.value,
                current: ((ye = D.value) == null ? void 0 : ye.branch) || null,
                onSwitch: Ke,
                onCreate: zt
              }, null, 8, ["branches", "current"])) : E.value === "history" ? (o(), b(Ta, {
                key: 4,
                commits: H.value,
                onSelect: ae,
                onCheckout: Fe
              }, null, 8, ["commits"])) : E.value === "nodes" ? (o(), b(Dl, { key: 5 })) : E.value === "debug-env" ? (o(), b(Bi, { key: 6 })) : E.value === "environments" ? (o(), b(qi, {
                key: 7,
                onSwitch: vt,
                onCreate: Ut,
                onDelete: Ot,
                onViewDetails: Vt
              })) : E.value === "model-index" ? (o(), b(zl, { key: 8 })) : E.value === "settings" ? (o(), b(Mi, { key: 9 })) : E.value === "debug-workspace" ? (o(), b(Ti, { key: 10 })) : E.value === "export" ? (o(), b(sr, { key: 11 })) : E.value === "import" ? (o(), b(Mc, { key: 12 })) : E.value === "remotes" ? (o(), b(vi, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        I.value ? (o(), b(Yc, {
          key: 0,
          commit: I.value,
          onClose: $[22] || ($[22] = (Q) => I.value = null),
          onCheckout: Fe,
          onCreateBranch: Lt
        }, null, 8, ["commit"])) : c("", !0),
        ie.value ? (o(), b(ed, {
          key: 1,
          title: ie.value.title,
          message: ie.value.message,
          details: ie.value.details,
          warning: ie.value.warning,
          confirmLabel: ie.value.confirmLabel,
          cancelLabel: ie.value.cancelLabel,
          secondaryLabel: ie.value.secondaryLabel,
          secondaryAction: ie.value.secondaryAction,
          destructive: ie.value.destructive,
          onConfirm: ie.value.onConfirm,
          onCancel: $[23] || ($[23] = (Q) => ie.value = null),
          onSecondary: ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        d(Ud, {
          show: S.value,
          "from-environment": ((we = J.value) == null ? void 0 : we.name) || "unknown",
          "to-environment": z.value,
          onConfirm: Mt,
          onClose: Dt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ee.value && D.value ? (o(), b(Ct, {
          key: 2,
          status: D.value,
          "as-modal": !0,
          onClose: $[24] || ($[24] = (Q) => ee.value = !1),
          onCommitted: Bt
        }, null, 8, ["status"])) : c("", !0),
        Ne.value && D.value ? (o(), b(lu, {
          key: 3,
          show: Ne.value,
          "mismatch-details": {
            missing_nodes: D.value.comparison.missing_nodes,
            extra_nodes: D.value.comparison.extra_nodes
          },
          onConfirm: Rt,
          onClose: $[25] || ($[25] = (Q) => Ne.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        d(Xd, {
          show: C.value,
          state: N.value.state,
          progress: N.value.progress,
          message: N.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        k.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: $[27] || ($[27] = ve((Q) => k.value = !1, ["self"]))
        }, [
          e("div", Cu, [
            e("div", xu, [
              $[39] || ($[39] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: $[26] || ($[26] = (Q) => k.value = !1)
              }, [...$[38] || ($[38] = [
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
            e("div", Su, [
              $[40] || ($[40] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Eu, [
                (o(!0), n(P, null, K(R.value, (Q) => (o(), n("div", {
                  key: Q.name,
                  class: q(["env-item", { current: Q.is_current }])
                }, [
                  e("div", Iu, [
                    e("div", zu, [
                      e("span", Lu, i(Q.is_current ? "●" : "○"), 1),
                      e("span", Mu, i(Q.name), 1),
                      Q.current_branch ? (o(), n("span", Nu, "(" + i(Q.current_branch) + ")", 1)) : c("", !0),
                      Q.is_current ? (o(), n("span", Tu, "CURRENT")) : c("", !0)
                    ]),
                    e("div", Du, i(Q.workflow_count) + " workflows • " + i(Q.node_count) + " nodes ", 1)
                  ]),
                  Q.is_current ? c("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Xu) => vt(Q.name)
                  }, " SWITCH ", 8, Bu))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", Ru, [
          d(Wt, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(P, null, K(Ie.value, (Q) => (o(), n("div", {
                key: Q.id,
                class: q(["toast", Q.type])
              }, [
                e("span", Uu, i(tt(Q.type)), 1),
                e("span", Ou, i(Q.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Pu = /* @__PURE__ */ F(Vu, [["__scopeId", "data-v-0bc7ca73"]]), Au = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Fu = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Wu = {
  comfy: Au,
  phosphor: Fu
}, ut = "comfy", xt = "comfygit-theme";
let De = null, St = ut;
function Hu() {
  try {
    const t = localStorage.getItem(xt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ut;
}
function Et(t = ut) {
  De && De.remove(), De = document.createElement("style"), De.id = "comfygit-theme-styles", De.setAttribute("data-theme", t), De.textContent = Wu[t], document.head.appendChild(De), document.body.setAttribute("data-comfygit-theme", t), St = t;
  try {
    localStorage.setItem(xt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Gu() {
  return St;
}
function ju(t) {
  Et(t);
}
const mt = document.createElement("link");
mt.rel = "stylesheet";
mt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(mt);
const qu = Hu();
Et(qu);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), ju(t);
  },
  getTheme: () => {
    const t = Gu();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let be = null, he = null, Ge = null;
const Ve = x(null);
async function ct() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const r = await window.app.api.fetchApi("/v2/comfygit/status");
    r.ok && (Ve.value = await r.json());
  } catch {
  }
}
function Ku() {
  if (!Ve.value) return !1;
  const t = Ve.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ve.value.has_changes;
}
function Yu() {
  be && be.remove(), be = document.createElement("div"), be.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", be.appendChild(t), be.addEventListener("click", (l) => {
    l.target === be && lt();
  });
  const r = (l) => {
    l.key === "Escape" && (lt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), bt({
    render: () => kt(Pu, {
      onClose: lt,
      onStatusUpdate: (l) => {
        Ve.value = l, Qe();
      }
    })
  }).mount(t), document.body.appendChild(be);
}
function lt() {
  be && (be.remove(), be = null);
}
function Ju(t) {
  He(), he = document.createElement("div"), he.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  he.style.position = "fixed", he.style.top = `${r.bottom + 8}px`, he.style.right = `${window.innerWidth - r.right}px`, he.style.zIndex = "10001";
  const s = (g) => {
    he && !he.contains(g.target) && g.target !== t && (He(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const l = (g) => {
    g.key === "Escape" && (He(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), Ge = bt({
    render: () => kt(Ct, {
      status: Ve.value,
      onClose: He,
      onCommitted: () => {
        He(), ct().then(Qe);
      }
    })
  }), Ge.mount(he), document.body.appendChild(he);
}
function He() {
  Ge && (Ge.unmount(), Ge = null), he && (he.remove(), he = null);
}
let _e = null;
function Qe() {
  if (!_e) return;
  const t = _e.querySelector(".commit-indicator");
  t && (t.style.display = Ku() ? "block" : "none");
}
const It = document.createElement("style");
It.textContent = `
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
document.head.appendChild(It);
st.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, l;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = Yu, _e = document.createElement("button"), _e.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", _e.innerHTML = 'Commit <span class="commit-indicator"></span>', _e.title = "Quick Commit", _e.onclick = () => Ju(_e), t.appendChild(r), t.appendChild(_e), (l = (s = st.menu) == null ? void 0 : s.settingsGroup) != null && l.element && (st.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ct(), Qe(), setInterval(async () => {
      await ct(), Qe();
    }, 3e4);
  }
});
