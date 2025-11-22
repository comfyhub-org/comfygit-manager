import { app as nt } from "../../scripts/app.js";
import { defineComponent as A, createElementBlock as n, openBlock as o, createCommentVNode as d, createElementVNode as e, renderSlot as ee, createBlock as p, resolveDynamicComponent as ut, normalizeClass as q, withCtx as a, toDisplayString as r, createVNode as l, createTextVNode as f, computed as V, Fragment as G, renderList as K, normalizeStyle as Je, ref as L, onMounted as ue, watch as wt, Teleport as Ue, withModifiers as fe, Transition as Wt, withKeys as Se, onUnmounted as Gt, resolveComponent as Ht, createSlots as bt, TransitionGroup as jt, createApp as kt, h as $t } from "vue";
const qt = { class: "panel-layout" }, Kt = {
  key: 0,
  class: "panel-layout-header"
}, Jt = {
  key: 1,
  class: "panel-layout-search"
}, Yt = { class: "panel-layout-content" }, Xt = {
  key: 2,
  class: "panel-layout-footer"
}, Qt = /* @__PURE__ */ A({
  __name: "PanelLayout",
  setup(t) {
    return (c, s) => (o(), n("div", qt, [
      c.$slots.header ? (o(), n("div", Kt, [
        ee(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (o(), n("div", Jt, [
        ee(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", Yt, [
        ee(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), n("div", Xt, [
        ee(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), W = (t, c) => {
  const s = t.__vccOpts || t;
  for (const [i, u] of c)
    s[i] = u;
  return s;
}, ge = /* @__PURE__ */ W(Qt, [["__scopeId", "data-v-21565df9"]]), Zt = {
  key: 0,
  class: "panel-title-prefix"
}, eo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, to = /* @__PURE__ */ A({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, s) => (o(), p(ut(`h${t.level}`), {
      class: q(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", Zt, r(t.prefix), 1)) : (o(), n("span", eo)),
        ee(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), oo = /* @__PURE__ */ W(to, [["__scopeId", "data-v-c3875efc"]]), so = ["title"], ao = ["width", "height"], no = /* @__PURE__ */ A({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (i) => c.$emit("click"))
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
      ])], 8, ao))
    ], 8, so));
  }
}), lo = /* @__PURE__ */ W(no, [["__scopeId", "data-v-6fc7f16d"]]), io = { class: "header-left" }, ro = {
  key: 0,
  class: "header-actions"
}, co = /* @__PURE__ */ A({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: q(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", io, [
        l(oo, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            f(r(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), p(lo, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (o(), n("div", ro, [
        ee(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), he = /* @__PURE__ */ W(co, [["__scopeId", "data-v-55a62cd6"]]), uo = {
  key: 0,
  class: "section-title-count"
}, mo = {
  key: 1,
  class: "section-title-icon"
}, vo = /* @__PURE__ */ A({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), p(ut(`h${t.level}`), {
      class: q(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: a(() => [
        ee(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", uo, "(" + r(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (o(), n("span", mo, r(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), we = /* @__PURE__ */ W(vo, [["__scopeId", "data-v-559361eb"]]), fo = { class: "status-grid" }, go = { class: "status-grid__column" }, ho = { class: "status-grid__title" }, po = { class: "status-grid__column status-grid__column--right" }, yo = { class: "status-grid__title" }, wo = /* @__PURE__ */ A({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, s) => (o(), n("div", fo, [
      e("div", go, [
        e("h4", ho, r(t.leftTitle), 1),
        ee(c.$slots, "left", {}, void 0, !0)
      ]),
      e("div", po, [
        e("h4", yo, r(t.rightTitle), 1),
        ee(c.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), bo = /* @__PURE__ */ W(wo, [["__scopeId", "data-v-fe556068"]]), ko = {
  key: 0,
  class: "status-item__icon"
}, $o = {
  key: 1,
  class: "status-item__count"
}, _o = { class: "status-item__label" }, Co = /* @__PURE__ */ A({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, s = V(() => `status-item--${c.variant}`);
    return (i, u) => (o(), n("div", {
      class: q(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", ko, r(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (o(), n("span", $o, r(t.count), 1)) : d("", !0),
      e("span", _o, r(t.label), 1)
    ], 2));
  }
}), Ne = /* @__PURE__ */ W(Co, [["__scopeId", "data-v-6f929183"]]), xo = { class: "issue-card__header" }, So = { class: "issue-card__icon" }, Io = { class: "issue-card__title" }, Eo = {
  key: 0,
  class: "issue-card__content"
}, Lo = {
  key: 0,
  class: "issue-card__description"
}, No = {
  key: 1,
  class: "issue-card__items"
}, Mo = {
  key: 2,
  class: "issue-card__actions"
}, zo = /* @__PURE__ */ A({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, s = V(() => `issue-card--${c.severity}`);
    return (i, u) => (o(), n("div", {
      class: q(["issue-card", s.value])
    }, [
      e("div", xo, [
        e("span", So, r(t.icon), 1),
        e("h4", Io, r(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), n("div", Eo, [
        t.description ? (o(), n("p", Lo, r(t.description), 1)) : d("", !0),
        ee(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (o(), n("div", No, [
        (o(!0), n(G, null, K(t.items, (h, m) => (o(), n("div", {
          key: m,
          class: "issue-card__item"
        }, [
          u[0] || (u[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, r(h), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (o(), n("div", Mo, [
        ee(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ W(zo, [["__scopeId", "data-v-df6aa348"]]), Ro = ["type", "disabled"], Do = {
  key: 0,
  class: "spinner"
}, To = /* @__PURE__ */ A({
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
    return (c, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: q(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", Do)) : d("", !0),
      t.loading ? d("", !0) : ee(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ro));
  }
}), T = /* @__PURE__ */ W(To, [["__scopeId", "data-v-772abe47"]]), Bo = { class: "empty-state" }, Vo = {
  key: 0,
  class: "empty-icon"
}, Uo = { class: "empty-message" }, Oo = /* @__PURE__ */ A({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, s) => (o(), n("div", Bo, [
      t.icon ? (o(), n("div", Vo, r(t.icon), 1)) : d("", !0),
      e("p", Uo, r(t.message), 1),
      t.actionLabel ? (o(), p(T, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => c.$emit("action"))
      }, {
        default: a(() => [
          f(r(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), be = /* @__PURE__ */ W(Oo, [["__scopeId", "data-v-4466284f"]]), Po = { class: "branch-indicator" }, Fo = { class: "branch-indicator__info" }, Ao = { class: "branch-indicator__label" }, Wo = { class: "branch-indicator__name" }, Go = {
  key: 0,
  class: "branch-indicator__remote"
}, Ho = {
  key: 0,
  class: "branch-indicator__status"
}, jo = {
  key: 0,
  class: "branch-indicator__ahead"
}, qo = {
  key: 1,
  class: "branch-indicator__behind"
}, Ko = {
  key: 1,
  class: "branch-indicator__actions"
}, Jo = /* @__PURE__ */ A({
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
    return (c, s) => (o(), n("div", Po, [
      e("div", Fo, [
        e("span", Ao, r(t.label), 1),
        e("span", Wo, r(t.branchName), 1),
        t.remote ? (o(), n("span", Go, "@" + r(t.remote), 1)) : d("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", Ho, [
        t.commitsAhead ? (o(), n("span", jo, " ↑ " + r(t.commitsAhead) + " ahead ", 1)) : d("", !0),
        t.commitsBehind ? (o(), n("span", qo, " ↓ " + r(t.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      c.$slots.actions ? (o(), n("div", Ko, [
        ee(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Yo = /* @__PURE__ */ W(Jo, [["__scopeId", "data-v-cb8dd50e"]]), Xo = /* @__PURE__ */ A({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, s) => (o(), n("span", {
      class: q(["detail-label"]),
      style: Je({ minWidth: t.minWidth })
    }, [
      ee(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ct = /* @__PURE__ */ W(Xo, [["__scopeId", "data-v-75e9eeb8"]]), Qo = /* @__PURE__ */ A({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, s) => (o(), n("span", {
      class: q(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ee(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ W(Qo, [["__scopeId", "data-v-2f186e4c"]]), Zo = { class: "detail-row" }, es = /* @__PURE__ */ A({
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
    return (c, s) => (o(), n("div", Zo, [
      l(ct, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          f(r(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), p(Fe, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: a(() => [
          f(r(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ee(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Q = /* @__PURE__ */ W(es, [["__scopeId", "data-v-ef15664a"]]), ts = { class: "modal-header" }, os = { class: "modal-body" }, ss = { class: "status-section" }, as = {
  key: 0,
  class: "status-section"
}, ns = {
  key: 0,
  class: "workflow-group"
}, ls = { class: "workflow-group-header" }, is = { class: "workflow-group-title" }, rs = { class: "workflow-list" }, cs = { class: "workflow-name" }, ds = {
  key: 1,
  class: "workflow-group"
}, us = { class: "workflow-group-header" }, ms = { class: "workflow-group-title" }, vs = { class: "workflow-list" }, fs = { class: "workflow-name" }, gs = {
  key: 2,
  class: "workflow-group"
}, hs = { class: "workflow-group-header" }, ps = { class: "workflow-group-title" }, ys = { class: "workflow-list" }, ws = { class: "workflow-name" }, bs = {
  key: 3,
  class: "workflow-group"
}, ks = { class: "workflow-group-title" }, $s = { class: "expand-icon" }, _s = {
  key: 0,
  class: "workflow-list"
}, Cs = { class: "workflow-name" }, xs = {
  key: 1,
  class: "status-section"
}, Ss = {
  key: 0,
  class: "change-group"
}, Is = { class: "change-group-header" }, Es = { class: "change-group-title" }, Ls = { class: "change-list" }, Ns = { class: "node-name" }, Ms = {
  key: 0,
  class: "dev-badge"
}, zs = {
  key: 1,
  class: "change-group"
}, Rs = { class: "change-group-header" }, Ds = { class: "change-group-title" }, Ts = { class: "change-list" }, Bs = { class: "node-name" }, Vs = {
  key: 0,
  class: "dev-badge"
}, Us = {
  key: 2,
  class: "change-group"
}, Os = { class: "change-list" }, Ps = { class: "change-item" }, Fs = { class: "node-name" }, As = {
  key: 3,
  class: "change-group"
}, Ws = {
  key: 2,
  class: "status-section"
}, Gs = {
  key: 0,
  class: "drift-item"
}, Hs = { class: "drift-list" }, js = {
  key: 0,
  class: "drift-list-more"
}, qs = {
  key: 1,
  class: "drift-item"
}, Ks = { class: "drift-list" }, Js = {
  key: 0,
  class: "drift-list-more"
}, Ys = {
  key: 2,
  class: "drift-item"
}, Xs = {
  key: 3,
  class: "drift-item"
}, Qs = {
  key: 3,
  class: "status-section"
}, Zs = { class: "info-box" }, ea = { class: "drift-list" }, ta = {
  key: 0,
  class: "drift-list-more"
}, oa = {
  key: 4,
  class: "status-section"
}, sa = { class: "warning-box" }, aa = {
  key: 5,
  class: "empty-state-inline"
}, na = { class: "modal-actions" }, la = /* @__PURE__ */ A({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, s = L(!1);
    ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), wt(() => c.show, (y, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", y);
    }, { immediate: !0 });
    const i = V(() => {
      var y, b, $, M, z;
      return (y = c.status) != null && y.workflows ? (((b = c.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || ((($ = c.status.workflows.modified) == null ? void 0 : $.length) ?? 0) > 0 || (((M = c.status.workflows.deleted) == null ? void 0 : M.length) ?? 0) > 0 || (((z = c.status.workflows.synced) == null ? void 0 : z.length) ?? 0) > 0 : !1;
    }), u = V(() => {
      var b, $, M;
      const y = (b = c.status) == null ? void 0 : b.git_changes;
      return y ? ((($ = y.nodes_added) == null ? void 0 : $.length) ?? 0) > 0 || (((M = y.nodes_removed) == null ? void 0 : M.length) ?? 0) > 0 || y.workflow_changes || y.has_other_changes : !1;
    }), h = V(() => {
      var y, b, $, M, z, B;
      return !i.value && !u.value && ((b = (y = c.status) == null ? void 0 : y.comparison) == null ? void 0 : b.is_synced) && ((($ = c.status) == null ? void 0 : $.missing_models_count) ?? 0) === 0 && (((B = (z = (M = c.status) == null ? void 0 : M.comparison) == null ? void 0 : z.disabled_nodes) == null ? void 0 : B.length) ?? 0) === 0;
    }), m = V(() => {
      var b, $;
      const y = ($ = (b = c.status) == null ? void 0 : b.git_changes) == null ? void 0 : $.workflow_changes;
      return y ? typeof y == "number" ? y : Object.keys(y).length : 0;
    });
    function g(y) {
      return typeof y == "string" ? y : y.name;
    }
    function v(y) {
      return typeof y == "object" && y.is_development === !0;
    }
    return (y, b) => {
      var $, M, z, B, P, I, E, U, j, S, x, w, _, k, R, O, re, H, N, J, te, Oe, Pe, ce;
      return o(), p(Ue, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[4] || (b[4] = (Z) => y.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[3] || (b[3] = fe(() => {
            }, ["stop"]))
          }, [
            e("div", ts, [
              b[5] || (b[5] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (Z) => y.$emit("close"))
              }, "✕")
            ]),
            e("div", os, [
              e("div", ss, [
                l(we, { level: "4" }, {
                  default: a(() => [...b[6] || (b[6] = [
                    f("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                l(Q, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              i.value ? (o(), n("div", as, [
                l(we, { level: "4" }, {
                  default: a(() => [...b[7] || (b[7] = [
                    f("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                (M = ($ = t.status.workflows) == null ? void 0 : $.new) != null && M.length ? (o(), n("div", ns, [
                  e("div", ls, [
                    b[8] || (b[8] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", is, "NEW (" + r(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", rs, [
                    (o(!0), n(G, null, K(t.status.workflows.new, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", cs, r(Z), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (B = (z = t.status.workflows) == null ? void 0 : z.modified) != null && B.length ? (o(), n("div", ds, [
                  e("div", us, [
                    b[9] || (b[9] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", ms, "MODIFIED (" + r(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", vs, [
                    (o(!0), n(G, null, K(t.status.workflows.modified, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", fs, r(Z), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (I = (P = t.status.workflows) == null ? void 0 : P.deleted) != null && I.length ? (o(), n("div", gs, [
                  e("div", hs, [
                    b[10] || (b[10] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", ps, "DELETED (" + r(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", ys, [
                    (o(!0), n(G, null, K(t.status.workflows.deleted, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", ws, r(Z), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (U = (E = t.status.workflows) == null ? void 0 : E.synced) != null && U.length ? (o(), n("div", bs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[1] || (b[1] = (Z) => s.value = !s.value)
                  }, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ks, "SYNCED (" + r(t.status.workflows.synced.length) + ")", 1),
                    e("span", $s, r(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", _s, [
                    (o(!0), n(G, null, K(t.status.workflows.synced, (Z) => (o(), n("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Cs, r(Z), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              u.value ? (o(), n("div", xs, [
                l(we, { level: "4" }, {
                  default: a(() => [...b[12] || (b[12] = [
                    f("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (S = (j = t.status.git_changes) == null ? void 0 : j.nodes_added) != null && S.length ? (o(), n("div", Ss, [
                  e("div", Is, [
                    b[13] || (b[13] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Es, "NODES ADDED (" + r(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Ls, [
                    (o(!0), n(G, null, K(t.status.git_changes.nodes_added, (Z) => (o(), n("div", {
                      key: g(Z),
                      class: "change-item"
                    }, [
                      e("span", Ns, r(g(Z)), 1),
                      v(Z) ? (o(), n("span", Ms, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (w = (x = t.status.git_changes) == null ? void 0 : x.nodes_removed) != null && w.length ? (o(), n("div", zs, [
                  e("div", Rs, [
                    b[14] || (b[14] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Ds, "NODES REMOVED (" + r(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ts, [
                    (o(!0), n(G, null, K(t.status.git_changes.nodes_removed, (Z) => (o(), n("div", {
                      key: g(Z),
                      class: "change-item"
                    }, [
                      e("span", Bs, r(g(Z)), 1),
                      v(Z) ? (o(), n("span", Vs, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (_ = t.status.git_changes) != null && _.workflow_changes ? (o(), n("div", Us, [
                  b[15] || (b[15] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Os, [
                    e("div", Ps, [
                      e("span", Fs, r(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (k = t.status.git_changes) != null && k.has_other_changes ? (o(), n("div", As, [...b[16] || (b[16] = [
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
              (R = t.status.comparison) != null && R.is_synced ? d("", !0) : (o(), n("div", Ws, [
                l(we, { level: "4" }, {
                  default: a(() => [...b[17] || (b[17] = [
                    f("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                b[18] || (b[18] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (re = (O = t.status.comparison) == null ? void 0 : O.missing_nodes) != null && re.length ? (o(), n("div", Gs, [
                  l(Q, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Hs, [
                    (o(!0), n(G, null, K(t.status.comparison.missing_nodes.slice(0, 10), (Z) => (o(), n("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + r(Z), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", js, " ... and " + r(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (N = (H = t.status.comparison) == null ? void 0 : H.extra_nodes) != null && N.length ? (o(), n("div", qs, [
                  l(Q, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Ks, [
                    (o(!0), n(G, null, K(t.status.comparison.extra_nodes.slice(0, 10), (Z) => (o(), n("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + r(Z), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", Js, " ... and " + r(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (te = (J = t.status.comparison) == null ? void 0 : J.version_mismatches) != null && te.length ? (o(), n("div", Ys, [
                  l(Q, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (Oe = t.status.comparison) != null && Oe.packages_in_sync ? d("", !0) : (o(), n("div", Xs, [
                  l(Q, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ce = (Pe = t.status.comparison) == null ? void 0 : Pe.disabled_nodes) != null && ce.length ? (o(), n("div", Qs, [
                l(we, { level: "4" }, {
                  default: a(() => [...b[19] || (b[19] = [
                    f("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Zs, [
                  b[20] || (b[20] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, r(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", ea, [
                  (o(!0), n(G, null, K(t.status.comparison.disabled_nodes.slice(0, 10), (Z) => (o(), n("div", {
                    key: Z,
                    class: "drift-list-item"
                  }, " • " + r(Z), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", ta, " ... and " + r(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", oa, [
                l(we, { level: "4" }, {
                  default: a(() => [...b[21] || (b[21] = [
                    f("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", sa, [
                  b[22] || (b[22] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, r(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[23] || (b[23] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              h.value ? (o(), n("div", aa, [...b[24] || (b[24] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", na, [
              l(T, {
                variant: "secondary",
                onClick: b[2] || (b[2] = (Z) => y.$emit("close"))
              }, {
                default: a(() => [...b[25] || (b[25] = [
                  f(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), ht = /* @__PURE__ */ W(la, [["__scopeId", "data-v-19585c5b"]]), ia = { class: "health-section-header" }, ra = { style: { "margin-top": "var(--cg-space-1)" } }, ca = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, da = /* @__PURE__ */ A({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(t, { emit: c }) {
    const s = t, i = L(!1), u = L(!1);
    ue(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", ht);
    });
    function h() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function m() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    const g = V(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), v = V(() => {
      const M = s.status.git_changes;
      return M.nodes_added.length > 0 || M.nodes_removed.length > 0 || M.workflow_changes || M.has_other_changes;
    }), y = V(() => s.status.git_changes.has_other_changes), b = V(() => s.status.missing_models_count > 0 || v.value || !s.status.comparison.is_synced), $ = V(() => {
      const M = [];
      return s.status.workflows.new.length > 0 && M.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && M.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && M.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && M.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && M.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${M.length > 0 ? M.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (M, z) => (o(), n(G, null, [
      l(ge, null, {
        header: a(() => [
          l(he, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: z[0] || (z[0] = (B) => u.value = !0),
            onMouseleave: z[1] || (z[1] = (B) => u.value = !1)
          }, [
            e("div", ia, [
              l(we, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...z[9] || (z[9] = [
                  f(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              l(Wt, { name: "fade" }, {
                default: a(() => [
                  u.value ? (o(), p(T, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: h
                  }, {
                    default: a(() => [...z[10] || (z[10] = [
                      f(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            l(bo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), p(Ne, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (o(), p(Ne, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (o(), p(Ne, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                l(Ne, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: g.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), p(Ne, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), p(Ne, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                y.value ? (o(), p(Ne, {
                  key: 2,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                v.value ? d("", !0) : (o(), p(Ne, {
                  key: 3,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", ra, [
            l(Yo, {
              "branch-name": t.status.current_branch || "main"
            }, {
              actions: a(() => [
                l(T, {
                  variant: "secondary",
                  size: "sm",
                  onClick: z[2] || (z[2] = (B) => M.$emit("switch-branch"))
                }, {
                  default: a(() => [...z[11] || (z[11] = [
                    f(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          b.value ? (o(), n("div", ca, [
            l(we, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...z[12] || (z[12] = [
                f(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            t.status.missing_models_count > 0 ? (o(), p(Ze, {
              key: 0,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: a(() => [
                l(T, {
                  variant: "secondary",
                  size: "sm",
                  onClick: z[3] || (z[3] = (B) => M.$emit("view-workflows"))
                }, {
                  default: a(() => [...z[13] || (z[13] = [
                    f(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                l(T, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[4] || (z[4] = (B) => M.$emit("resolve-models"))
                }, {
                  default: a(() => [...z[14] || (z[14] = [
                    f(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : d("", !0),
            v.value ? (o(), p(Ze, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: "You have unsaved changes",
              description: $.value
            }, {
              actions: a(() => [
                l(T, {
                  variant: "secondary",
                  size: "sm",
                  onClick: m
                }, {
                  default: a(() => [...z[15] || (z[15] = [
                    f(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                l(T, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[5] || (z[5] = (B) => M.$emit("commit-changes"))
                }, {
                  default: a(() => [...z[16] || (z[16] = [
                    f(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : d("", !0),
            t.status.comparison.is_synced ? d("", !0) : (o(), p(Ze, {
              key: 2,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: a(() => [
                l(T, {
                  variant: "secondary",
                  size: "sm",
                  onClick: z[6] || (z[6] = (B) => M.$emit("view-debug"))
                }, {
                  default: a(() => [...z[17] || (z[17] = [
                    f(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                l(T, {
                  variant: "primary",
                  size: "sm",
                  onClick: z[7] || (z[7] = (B) => M.$emit("sync-environment"))
                }, {
                  default: a(() => [...z[18] || (z[18] = [
                    f(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : d("", !0),
          !b.value && !v.value ? (o(), p(be, {
            key: 1,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : d("", !0)
        ]),
        _: 1
      }),
      l(ht, {
        show: i.value,
        status: t.status,
        onClose: z[8] || (z[8] = (B) => i.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), ua = /* @__PURE__ */ W(da, [["__scopeId", "data-v-d5c467d9"]]), ma = ["type", "value", "placeholder", "disabled"], va = /* @__PURE__ */ A({
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
  setup(t, { expose: c, emit: s }) {
    const i = t, u = s, h = L(null);
    function m(g) {
      const v = g.target.value;
      u("update:modelValue", v);
    }
    return ue(() => {
      i.autoFocus && h.value && h.value.focus();
    }), c({
      focus: () => {
        var g;
        return (g = h.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = h.value) == null ? void 0 : g.blur();
      }
    }), (g, v) => (o(), n("input", {
      ref_key: "inputRef",
      ref: h,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: q(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: m,
      onKeyup: [
        v[0] || (v[0] = Se((y) => g.$emit("enter"), ["enter"])),
        v[1] || (v[1] = Se((y) => g.$emit("escape"), ["escape"]))
      ],
      onFocus: v[2] || (v[2] = (y) => g.$emit("focus")),
      onBlur: v[3] || (v[3] = (y) => g.$emit("blur"))
    }, null, 42, ma));
  }
}), Ae = /* @__PURE__ */ W(va, [["__scopeId", "data-v-0380d08f"]]), fa = { class: "branch-create-form" }, ga = { class: "form-actions" }, ha = /* @__PURE__ */ A({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const s = c, i = L(""), u = V(() => {
      const g = i.value.trim();
      return g.length > 0 && !g.startsWith("-") && !g.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(g);
    });
    function h() {
      u.value && (s("create", i.value.trim()), i.value = "");
    }
    function m() {
      i.value = "", s("cancel");
    }
    return (g, v) => (o(), n("div", fa, [
      l(Ae, {
        modelValue: i.value,
        "onUpdate:modelValue": v[0] || (v[0] = (y) => i.value = y),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: h,
        onEscape: m
      }, null, 8, ["modelValue"]),
      e("div", ga, [
        l(T, {
          variant: "primary",
          size: "sm",
          disabled: !u.value,
          onClick: h
        }, {
          default: a(() => [...v[1] || (v[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        l(T, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: a(() => [...v[2] || (v[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), pa = /* @__PURE__ */ W(ha, [["__scopeId", "data-v-7c500394"]]), ya = { class: "branch-list-item__indicator" }, wa = { class: "branch-list-item__name" }, ba = {
  key: 0,
  class: "branch-list-item__actions"
}, ka = {
  key: 0,
  class: "branch-list-item__current-label"
}, $a = /* @__PURE__ */ A({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: q(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", ya, r(t.isCurrent ? "●" : "○"), 1),
      e("span", wa, r(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), n("div", ba, [
        ee(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", ka, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), _a = /* @__PURE__ */ W($a, [["__scopeId", "data-v-c6581a24"]]), Ca = {
  key: 2,
  class: "branch-list"
}, xa = /* @__PURE__ */ A({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const s = c, i = L(!1);
    function u(m) {
      s("create", m), h();
    }
    function h() {
      i.value = !1;
    }
    return (m, g) => (o(), p(ge, null, {
      header: a(() => [
        l(he, { title: "BRANCHES" }, {
          actions: a(() => [
            l(T, {
              variant: "ghost",
              size: "sm",
              onClick: g[0] || (g[0] = (v) => i.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...g[1] || (g[1] = [
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
        i.value ? (o(), p(pa, {
          key: 0,
          onCreate: u,
          onCancel: h
        })) : d("", !0),
        t.branches.length === 0 ? (o(), p(be, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", Ca, [
          (o(!0), n(G, null, K(t.branches, (v) => (o(), p(_a, {
            key: v.name,
            "branch-name": v.name,
            "is-current": v.is_current
          }, {
            actions: a(() => [
              v.is_current ? d("", !0) : (o(), p(T, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (y) => m.$emit("switch", v.name)
              }, {
                default: a(() => [...g[2] || (g[2] = [
                  f(" Switch ", -1)
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
}), Sa = /* @__PURE__ */ W(xa, [["__scopeId", "data-v-763d6ec4"]]), Ia = { class: "commit-list" }, Ea = /* @__PURE__ */ A({
  __name: "CommitList",
  setup(t) {
    return (c, s) => (o(), n("div", Ia, [
      ee(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), La = /* @__PURE__ */ W(Ea, [["__scopeId", "data-v-8c5ee761"]]), Na = { class: "commit-hash" }, Ma = /* @__PURE__ */ A({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, s = V(() => c.hash.slice(0, c.length));
    return (i, u) => (o(), n("span", Na, r(s.value), 1));
  }
}), _t = /* @__PURE__ */ W(Ma, [["__scopeId", "data-v-7c333cc6"]]), za = { class: "commit-message" }, Ra = { class: "commit-date" }, Da = /* @__PURE__ */ A({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const s = t, i = c;
    function u() {
      s.clickable && i("click");
    }
    return (h, m) => (o(), n("div", {
      class: q(["commit-item", { clickable: t.clickable }]),
      onClick: u
    }, [
      l(_t, { hash: t.hash }, null, 8, ["hash"]),
      e("span", za, r(t.message), 1),
      e("span", Ra, r(t.relativeDate), 1),
      h.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = fe(() => {
        }, ["stop"]))
      }, [
        ee(h.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ta = /* @__PURE__ */ W(Da, [["__scopeId", "data-v-dd7c621b"]]), Ba = /* @__PURE__ */ A({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, s) => (o(), p(ge, null, {
      header: a(() => [
        l(he, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), p(be, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), p(La, { key: 1 }, {
          default: a(() => [
            (o(!0), n(G, null, K(t.commits, (i) => (o(), p(Ta, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (u) => c.$emit("select", i)
            }, {
              actions: a(() => [
                l(T, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => c.$emit("checkout", i),
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
}), Va = /* @__PURE__ */ W(Ba, [["__scopeId", "data-v-981c3c64"]]);
[
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
];
const Ua = [
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
  ...Ua,
  (Date.now() / 1e3 - 86400 * 60, Math.floor(Date.now() / 1e3)),
  (Date.now() / 1e3 - 86400 * 45, Math.floor(Date.now() / 1e3))
];
(/* @__PURE__ */ new Date()).toISOString(), new Date(Date.now() - 6e4).toISOString(), new Date(Date.now() - 12e4).toISOString(), new Date(Date.now() - 18e4).toISOString();
function pe() {
  const t = L(!1), c = L(null);
  async function s(F, Y) {
    var He;
    if (!((He = window.app) != null && He.api))
      throw new Error("ComfyUI API not available");
    const se = await window.app.api.fetchApi(F, Y);
    if (!se.ok) {
      const Ye = await se.json().catch(() => ({}));
      throw new Error(Ye.error || Ye.message || `Request failed: ${se.status}`);
    }
    return se.json();
  }
  async function i() {
    return s("/v2/comfygit/status");
  }
  async function u(F, Y = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: F, allow_issues: Y })
    });
  }
  async function h(F = 10, Y = 0) {
    return s(`/v2/comfygit/log?limit=${F}&offset=${Y}`);
  }
  async function m(F) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: F })
    });
  }
  async function g() {
    return s("/v2/comfygit/branches");
  }
  async function v(F) {
    return s(`/v2/comfygit/commit/${F}`);
  }
  async function y(F, Y = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: F, force: Y })
    });
  }
  async function b(F, Y = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: F, start_point: Y })
    });
  }
  async function $(F, Y = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: F, force: Y })
    });
  }
  async function M() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const F = await i();
        return [{
          name: F.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + F.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: F.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: F.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function z(F) {
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: F })
    });
  }
  async function B() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function P(F, Y, se) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: F, pytorch_backend: Y, clone_from: se })
    });
  }
  async function I(F) {
    return s(`/v2/workspace/environments/${F}`, {
      method: "DELETE"
    });
  }
  async function E() {
    try {
      return s("/v2/comfygit/workflows");
    } catch {
      const F = await i(), Y = [];
      return F.workflows.new.forEach((se) => {
        Y.push({ name: se, status: "new", missing_nodes: 0, missing_models: 0, path: se });
      }), F.workflows.modified.forEach((se) => {
        Y.push({ name: se, status: "modified", missing_nodes: 0, missing_models: 0, path: se });
      }), F.workflows.synced.forEach((se) => {
        Y.push({ name: se, status: "synced", missing_nodes: 0, missing_models: 0, path: se });
      }), Y;
    }
  }
  async function U(F) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(F)}/details`);
  }
  async function j(F) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(F)}/resolve`, {
      method: "POST"
    });
  }
  async function S(F, Y, se) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(F)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Y, install_models: se })
    });
  }
  async function x(F, Y, se) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(F)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Y, importance: se })
    });
  }
  async function w() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function _() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function k(F, Y) {
    return s(`/v2/workspace/models/${F}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Y })
    });
  }
  async function R(F) {
    return s(`/v2/workspace/models/${F}`, {
      method: "DELETE"
    });
  }
  async function O(F) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(F)
    });
  }
  async function re() {
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
  async function H(F) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(F)
    });
  }
  async function N(F, Y) {
    try {
      const se = new URLSearchParams();
      return F && se.append("level", F), Y && se.append("lines", Y.toString()), s(`/v2/comfygit/debug/logs?${se}`);
    } catch {
      return [];
    }
  }
  async function J(F, Y) {
    try {
      const se = new URLSearchParams();
      return F && se.append("level", F), Y && se.append("lines", Y.toString()), s(`/v2/workspace/debug/logs?${se}`);
    } catch {
      return [];
    }
  }
  async function te() {
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
  async function Oe(F) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(F)}/install`, {
      method: "POST"
    });
  }
  async function Pe(F) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(F)}/update`, {
      method: "POST"
    });
  }
  async function ce(F) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(F)}`, {
      method: "DELETE"
    });
  }
  async function Z() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function De(F, Y) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: F, url: Y })
    });
  }
  async function Le(F) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(F)}`, {
      method: "DELETE"
    });
  }
  async function ot(F, Y, se) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(F)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Y, push_url: se })
    });
  }
  async function ae(F) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(F)}/fetch`, {
      method: "POST"
    });
  }
  async function Ce(F) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(F)}/status`);
    } catch {
      return null;
    }
  }
  async function st(F = "skip", Y = !0) {
    return s("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: F,
        remove_extra_nodes: Y
      })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: u,
    getHistory: h,
    exportEnv: m,
    // Git Operations
    getBranches: g,
    getCommitDetail: v,
    checkout: y,
    createBranch: b,
    switchBranch: $,
    // Environment Management
    getEnvironments: M,
    switchEnvironment: z,
    getSwitchProgress: B,
    createEnvironment: P,
    deleteEnvironment: I,
    // Workflow Management
    getWorkflows: E,
    getWorkflowDetails: U,
    resolveWorkflow: j,
    installWorkflowDeps: S,
    setModelImportance: x,
    // Model Management
    getEnvironmentModels: w,
    getWorkspaceModels: _,
    updateModelSource: k,
    deleteModel: R,
    downloadModel: O,
    // Settings
    getConfig: re,
    updateConfig: H,
    // Debug/Logs
    getEnvironmentLogs: N,
    getWorkspaceLogs: J,
    // Node Management
    getNodes: te,
    installNode: Oe,
    updateNode: Pe,
    uninstallNode: ce,
    // Git Remotes
    getRemotes: Z,
    addRemote: De,
    removeRemote: Le,
    updateRemoteUrl: ot,
    fetchRemote: ae,
    getRemoteSyncStatus: Ce,
    // Environment Sync
    syncEnvironmentManually: st
  };
}
const Oa = { class: "base-modal-header" }, Pa = {
  key: 0,
  class: "base-modal-title"
}, Fa = { class: "base-modal-body" }, Aa = {
  key: 0,
  class: "base-modal-loading"
}, Wa = {
  key: 1,
  class: "base-modal-error"
}, Ga = {
  key: 0,
  class: "base-modal-footer"
}, Ha = /* @__PURE__ */ A({
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
  setup(t, { emit: c }) {
    const s = t, i = c;
    function u() {
      s.closeOnOverlayClick && i("close");
    }
    function h(m) {
      m.key === "Escape" && i("close");
    }
    return ue(() => {
      document.addEventListener("keydown", h), document.body.style.overflow = "hidden";
    }), Gt(() => {
      document.removeEventListener("keydown", h), document.body.style.overflow = "";
    }), (m, g) => (o(), p(Ue, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: u
      }, [
        e("div", {
          class: q(["base-modal-content", t.size]),
          onClick: g[1] || (g[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Oa, [
            ee(m.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", Pa, r(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: g[0] || (g[0] = (v) => m.$emit("close"))
            }, [...g[2] || (g[2] = [
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
          e("div", Fa, [
            t.loading ? (o(), n("div", Aa, "Loading...")) : t.error ? (o(), n("div", Wa, r(t.error), 1)) : ee(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (o(), n("div", Ga, [
            ee(m.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ W(Ha, [["__scopeId", "data-v-700d367b"]]), ja = ["type", "disabled"], qa = {
  key: 0,
  class: "spinner"
}, Ka = /* @__PURE__ */ A({
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
    return (c, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: q(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (o(), n("span", qa)) : d("", !0),
      ee(c.$slots, "default", {}, void 0, !0)
    ], 10, ja));
  }
}), me = /* @__PURE__ */ W(Ka, [["__scopeId", "data-v-f3452606"]]), Ja = {
  key: 0,
  class: "base-title-count"
}, Ya = /* @__PURE__ */ A({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, s) => (o(), p(ut(`h${t.level}`), {
      class: q(["base-title", t.variant])
    }, {
      default: a(() => [
        ee(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Ja, "(" + r(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Me = /* @__PURE__ */ W(Ya, [["__scopeId", "data-v-5a01561d"]]), Xa = ["value", "disabled"], Qa = {
  key: 0,
  value: "",
  disabled: ""
}, Za = ["value"], en = {
  key: 0,
  class: "base-select-error"
}, tn = /* @__PURE__ */ A({
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
    function s(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, u) => (o(), n("div", {
      class: q(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: q(["base-select", { error: !!t.error }]),
        onChange: u[0] || (u[0] = (h) => i.$emit("update:modelValue", h.target.value))
      }, [
        t.placeholder ? (o(), n("option", Qa, r(t.placeholder), 1)) : d("", !0),
        (o(!0), n(G, null, K(t.options, (h) => (o(), n("option", {
          key: c(h),
          value: c(h)
        }, r(s(h)), 9, Za))), 128))
      ], 42, Xa),
      t.error ? (o(), n("span", en, r(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Ve = /* @__PURE__ */ W(tn, [["__scopeId", "data-v-7436d745"]]), on = { class: "detail-section" }, sn = {
  key: 0,
  class: "empty-message"
}, an = { class: "model-header" }, nn = { class: "model-name" }, ln = { class: "model-details" }, rn = { class: "model-row" }, cn = { class: "model-row" }, dn = {
  key: 0,
  class: "model-row"
}, un = { class: "value" }, mn = {
  key: 1,
  class: "model-row"
}, vn = { class: "value" }, fn = {
  key: 0,
  class: "model-actions"
}, gn = { class: "detail-section" }, hn = {
  key: 0,
  class: "empty-message"
}, pn = { class: "node-name" }, yn = {
  key: 0,
  class: "node-version"
}, wn = /* @__PURE__ */ A({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: c }) {
    const s = t, i = c, { getWorkflowDetails: u, setModelImportance: h } = pe(), m = L(null), g = L(!1), v = L(null), y = L(!1), b = L({}), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function M() {
      g.value = !0, v.value = null;
      try {
        m.value = await u(s.workflowName);
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load workflow details";
      } finally {
        g.value = !1;
      }
    }
    function z(P, I) {
      b.value[P] = I, y.value = !0;
    }
    async function B() {
      if (!y.value) {
        i("close");
        return;
      }
      g.value = !0, v.value = null;
      try {
        for (const [P, I] of Object.entries(b.value))
          await h(s.workflowName, P, I);
        i("close");
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to save changes";
      } finally {
        g.value = !1;
      }
    }
    return ue(M), (P, I) => (o(), p(tt, {
      title: `WORKFLOW DETAILS: ${t.workflowName}`,
      size: "lg",
      loading: g.value,
      error: v.value || void 0,
      onClose: I[2] || (I[2] = (E) => i("close"))
    }, {
      body: a(() => [
        m.value ? (o(), n(G, { key: 0 }, [
          e("section", on, [
            l(Me, { variant: "section" }, {
              default: a(() => [
                f("MODELS USED (" + r(m.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            m.value.models.length === 0 ? (o(), n("div", sn, " No models used in this workflow ")) : d("", !0),
            (o(!0), n(G, null, K(m.value.models, (E) => (o(), n("div", {
              key: E.hash,
              class: "model-card"
            }, [
              e("div", an, [
                I[3] || (I[3] = e("span", { class: "model-icon" }, "📦", -1)),
                e("span", nn, r(E.filename), 1)
              ]),
              e("div", ln, [
                e("div", rn, [
                  I[4] || (I[4] = e("span", { class: "label" }, "Status:", -1)),
                  e("span", {
                    class: q(["value", E.status === "available" ? "success" : "error"])
                  }, r(E.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                e("div", cn, [
                  I[5] || (I[5] = e("span", { class: "label" }, "Importance:", -1)),
                  l(Ve, {
                    "model-value": b.value[E.hash] || E.importance,
                    options: $,
                    "onUpdate:modelValue": (U) => z(E.hash, U)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                E.node_type ? (o(), n("div", dn, [
                  I[6] || (I[6] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", un, r(E.node_type) + " (Node " + r(E.node_id) + ")", 1)
                ])) : d("", !0),
                E.size_mb ? (o(), n("div", mn, [
                  I[7] || (I[7] = e("span", { class: "label" }, "Size:", -1)),
                  e("span", vn, r(E.size_mb) + " MB", 1)
                ])) : d("", !0)
              ]),
              E.status === "missing" ? (o(), n("div", fn, [
                l(me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: I[0] || (I[0] = (U) => i("resolve"))
                }, {
                  default: a(() => [...I[8] || (I[8] = [
                    f(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : d("", !0)
            ]))), 128))
          ]),
          I[9] || (I[9] = e("div", { class: "info-box" }, [
            e("div", { class: "info-title" }, "Importance options:"),
            e("ul", { class: "info-list" }, [
              e("li", null, [
                e("strong", null, "Required"),
                f(" — Must have for workflow to run")
              ]),
              e("li", null, [
                e("strong", null, "Flexible"),
                f(" — Workflow adapts if missing")
              ]),
              e("li", null, [
                e("strong", null, "Optional"),
                f(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          e("section", gn, [
            l(Me, { variant: "section" }, {
              default: a(() => [
                f("NODES USED (" + r(m.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            m.value.nodes.length === 0 ? (o(), n("div", hn, " No custom nodes used in this workflow ")) : d("", !0),
            (o(!0), n(G, null, K(m.value.nodes, (E) => (o(), n("div", {
              key: E.name,
              class: "node-item"
            }, [
              e("span", {
                class: q(["node-status", E.installed ? "installed" : "missing"])
              }, r(E.installed ? "✓" : "✕"), 3),
              e("span", pn, r(E.name), 1),
              E.version ? (o(), n("span", yn, "v" + r(E.version), 1)) : d("", !0)
            ]))), 128))
          ])
        ], 64)) : d("", !0)
      ]),
      footer: a(() => [
        l(me, {
          variant: "secondary",
          onClick: I[1] || (I[1] = (E) => i("close"))
        }, {
          default: a(() => [...I[10] || (I[10] = [
            f(" Close ", -1)
          ])]),
          _: 1
        }),
        y.value ? (o(), p(me, {
          key: 0,
          variant: "primary",
          onClick: B
        }, {
          default: a(() => [...I[11] || (I[11] = [
            f(" Save Changes ", -1)
          ])]),
          _: 1
        })) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), bn = /* @__PURE__ */ W(wn, [["__scopeId", "data-v-6ce9a41c"]]), kn = {
  key: 0,
  class: "resolve-section"
}, $n = { class: "resolve-card success-card" }, _n = { class: "items-list" }, Cn = { class: "item-info" }, xn = { class: "item-name" }, Sn = {
  key: 0,
  class: "item-meta"
}, In = { class: "match-type" }, En = { class: "source" }, Ln = {
  key: 1,
  class: "resolve-section"
}, Nn = { class: "resolve-card warning-card" }, Mn = { class: "items-list" }, zn = { class: "item-info" }, Rn = { class: "item-name" }, Dn = { class: "item-meta" }, Tn = { key: 0 }, Bn = { key: 1 }, Vn = {
  key: 0,
  class: "item-warning"
}, Un = {
  key: 0,
  class: "item-action"
}, On = ["onClick"], Pn = {
  key: 2,
  class: "resolve-section"
}, Fn = { class: "info-text" }, An = { class: "actions-summary" }, Wn = { class: "summary-list" }, Gn = { key: 0 }, Hn = { key: 1 }, jn = { key: 2 }, qn = {
  key: 0,
  class: "estimated-size"
}, Kn = /* @__PURE__ */ A({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: c }) {
    const s = t, i = c, { resolveWorkflow: u, installWorkflowDeps: h } = pe(), m = L(null), g = L(!1), v = L(!1), y = L(null), b = V(() => {
      var x;
      return m.value ? ((x = m.value.download_results) == null ? void 0 : x.every((w) => w.can_download)) ?? !1 : !1;
    });
    async function $() {
      g.value = !0, y.value = null;
      try {
        m.value = await u(s.workflowName);
      } catch (x) {
        y.value = x instanceof Error ? x.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function M(x) {
      return !x.possible_matches || x.possible_matches.length === 0 ? null : x.possible_matches.reduce(
        (w, _) => _.match_confidence > w.match_confidence ? _ : w
      );
    }
    function z(x) {
      return x >= 0.9 ? "high" : x >= 0.7 ? "medium" : "low";
    }
    function B(x) {
      const w = M(x);
      return w ? w.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function P(x) {
      var w, _;
      return (_ = (w = m.value) == null ? void 0 : w.download_results) == null ? void 0 : _.find((k) => k.model === x);
    }
    function I(x) {
      const w = P(x);
      return (w == null ? void 0 : w.can_download) ?? !1;
    }
    function E(x) {
      const w = P(x);
      return (w == null ? void 0 : w.source_url) || null;
    }
    function U(x) {
      window.open(x, "_blank");
    }
    async function j() {
      if (!(!m.value || v.value)) {
        v.value = !0, y.value = null;
        try {
          await h(
            s.workflowName,
            m.value.nodes_to_install,
            []
          ), i("install"), i("refresh"), i("close");
        } catch (x) {
          y.value = x instanceof Error ? x.message : "Installation failed";
        } finally {
          v.value = !1;
        }
      }
    }
    async function S() {
      if (!(!m.value || v.value)) {
        v.value = !0, y.value = null;
        try {
          await h(
            s.workflowName,
            m.value.nodes_to_install,
            m.value.models_to_download
          ), i("install"), i("refresh"), i("close");
        } catch (x) {
          y.value = x instanceof Error ? x.message : "Installation failed";
        } finally {
          v.value = !1;
        }
      }
    }
    return ue($), (x, w) => (o(), p(tt, {
      title: `RESOLVE DEPENDENCIES: ${t.workflowName}`,
      size: "lg",
      loading: g.value,
      error: y.value || void 0,
      onClose: w[1] || (w[1] = (_) => i("close"))
    }, {
      body: a(() => [
        m.value ? (o(), n(G, { key: 0 }, [
          w[5] || (w[5] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          m.value.nodes_unresolved.length > 0 ? (o(), n("section", kn, [
            l(Me, { variant: "section" }, {
              default: a(() => [
                f("NODES (" + r(m.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", $n, [
              w[2] || (w[2] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "✓"),
                e("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              e("div", _n, [
                (o(!0), n(G, null, K(m.value.nodes_unresolved, (_) => {
                  var k;
                  return o(), n("div", {
                    key: _.node_type,
                    class: "item"
                  }, [
                    e("div", Cn, [
                      e("div", xn, r(((k = M(_)) == null ? void 0 : k.package_id) || _.node_type), 1),
                      M(_) ? (o(), n("div", Sn, [
                        e("span", {
                          class: q(["confidence-badge", z(M(_).match_confidence)])
                        }, r(Math.round(M(_).match_confidence * 100)) + "% match ", 3),
                        e("span", In, r(M(_).match_type), 1),
                        e("span", En, "Source: " + r(B(_)), 1)
                      ])) : d("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : d("", !0),
          m.value.models_unresolved.length > 0 ? (o(), n("section", Ln, [
            l(Me, { variant: "section" }, {
              default: a(() => [
                f("MODELS (" + r(m.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", Nn, [
              w[3] || (w[3] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "⚠"),
                e("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              e("div", Mn, [
                (o(!0), n(G, null, K(m.value.models_unresolved, (_) => (o(), n("div", {
                  key: _.filename,
                  class: "item"
                }, [
                  e("div", zn, [
                    e("div", Rn, r(_.filename), 1),
                    e("div", Dn, [
                      _.expected_category ? (o(), n("span", Tn, "Type: " + r(_.expected_category), 1)) : d("", !0),
                      P(_.filename) ? (o(), n("span", Bn, " Size: ~" + r(P(_.filename).estimated_size_mb) + " MB ", 1)) : d("", !0)
                    ]),
                    I(_.filename) ? d("", !0) : (o(), n("div", Vn, " No auto-download source configured "))
                  ]),
                  E(_.filename) ? (o(), n("div", Un, [
                    e("button", {
                      class: "link-btn",
                      onClick: (k) => U(E(_.filename))
                    }, " Open Source ↗ ", 8, On)
                  ])) : d("", !0)
                ]))), 128))
              ])
            ])
          ])) : d("", !0),
          m.value.nodes_resolved.length > 0 || m.value.models_resolved.length > 0 ? (o(), n("section", Pn, [
            l(Me, { variant: "section" }, {
              default: a(() => [
                f(" ALREADY AVAILABLE (" + r(m.value.nodes_resolved.length + m.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            e("div", Fn, r(m.value.nodes_resolved.length) + " nodes and " + r(m.value.models_resolved.length) + " models are already installed ", 1)
          ])) : d("", !0),
          e("div", An, [
            w[4] || (w[4] = e("div", { class: "summary-title" }, "This will:", -1)),
            e("ol", Wn, [
              m.value.nodes_to_install.length ? (o(), n("li", Gn, " Install " + r(m.value.nodes_to_install.length) + " nodes (~" + r(m.value.estimated_time_seconds) + "s) ", 1)) : d("", !0),
              m.value.nodes_to_install.length ? (o(), n("li", Hn, " Restart ComfyUI to load new nodes ")) : d("", !0),
              m.value.models_to_download.length ? (o(), n("li", jn, " You'll still need to download " + r(m.value.models_to_download.length) + " model(s) manually ", 1)) : d("", !0)
            ]),
            m.value.estimated_size_mb ? (o(), n("div", qn, " Estimated download: " + r(m.value.estimated_size_mb) + " MB ", 1)) : d("", !0)
          ])
        ], 64)) : d("", !0)
      ]),
      footer: a(() => [
        l(me, {
          variant: "secondary",
          onClick: w[0] || (w[0] = (_) => i("close"))
        }, {
          default: a(() => [...w[6] || (w[6] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m.value && m.value.nodes_to_install.length && m.value.models_to_download.length ? (o(), p(me, {
          key: 0,
          variant: "secondary",
          disabled: v.value,
          loading: v.value,
          onClick: j
        }, {
          default: a(() => [...w[7] || (w[7] = [
            f(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0),
        m.value && (m.value.nodes_to_install.length || m.value.models_to_download.length) ? (o(), p(me, {
          key: 1,
          variant: "primary",
          disabled: v.value || m.value.models_to_download.length > 0 && !b.value,
          loading: v.value,
          onClick: S
        }, {
          default: a(() => [...w[8] || (w[8] = [
            f(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Jn = /* @__PURE__ */ W(Kn, [["__scopeId", "data-v-d68efb14"]]), Yn = { class: "search-input-wrapper" }, Xn = ["value", "placeholder"], Qn = /* @__PURE__ */ A({
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
    const s = t, i = c, u = L(null);
    let h;
    function m(v) {
      const y = v.target.value;
      s.debounce > 0 ? (clearTimeout(h), h = window.setTimeout(() => {
        i("update:modelValue", y);
      }, s.debounce)) : i("update:modelValue", y);
    }
    function g() {
      var v;
      i("update:modelValue", ""), i("clear"), (v = u.value) == null || v.focus();
    }
    return ue(() => {
      s.autoFocus && u.value && u.value.focus();
    }), (v, y) => (o(), n("div", Yn, [
      e("input", {
        ref_key: "inputRef",
        ref: u,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: Se(g, ["escape"])
      }, null, 40, Xn),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: g,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Zn = /* @__PURE__ */ W(Qn, [["__scopeId", "data-v-266f857a"]]), el = { class: "search-bar" }, tl = /* @__PURE__ */ A({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, s) => (o(), n("div", el, [
      l(Zn, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Ge = /* @__PURE__ */ W(tl, [["__scopeId", "data-v-3d51bbfd"]]), ol = { class: "section-group" }, sl = {
  key: 0,
  class: "section-content"
}, al = /* @__PURE__ */ A({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const s = t, i = c, u = L(s.initiallyExpanded);
    function h() {
      s.collapsible && (u.value = !u.value, i("toggle", u.value));
    }
    return (m, g) => (o(), n("section", ol, [
      l(we, {
        count: t.count,
        clickable: t.collapsible,
        expanded: u.value,
        onClick: h
      }, {
        default: a(() => [
          f(r(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || u.value ? (o(), n("div", sl, [
        ee(m.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ie = /* @__PURE__ */ W(al, [["__scopeId", "data-v-c48e33ed"]]), nl = { class: "item-header" }, ll = {
  key: 0,
  class: "item-icon"
}, il = { class: "item-info" }, rl = {
  key: 0,
  class: "item-title"
}, cl = {
  key: 1,
  class: "item-subtitle"
}, dl = {
  key: 0,
  class: "item-details"
}, ul = {
  key: 1,
  class: "item-actions"
}, ml = /* @__PURE__ */ A({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const s = t, i = V(() => s.status ? `status-${s.status}` : "");
    return (u, h) => (o(), n("div", {
      class: q(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: h[0] || (h[0] = (m) => t.clickable && u.$emit("click"))
    }, [
      e("div", nl, [
        u.$slots.icon ? (o(), n("span", ll, [
          ee(u.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", il, [
          u.$slots.title ? (o(), n("div", rl, [
            ee(u.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          u.$slots.subtitle ? (o(), n("div", cl, [
            ee(u.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      u.$slots.details ? (o(), n("div", dl, [
        ee(u.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      u.$slots.actions ? (o(), n("div", ul, [
        ee(u.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ W(ml, [["__scopeId", "data-v-cc435e0e"]]), vl = { class: "loading-state" }, fl = { class: "loading-message" }, gl = /* @__PURE__ */ A({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, s) => (o(), n("div", vl, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", fl, r(t.message), 1)
    ]));
  }
}), Ie = /* @__PURE__ */ W(gl, [["__scopeId", "data-v-ad8436c9"]]), hl = { class: "error-state" }, pl = { class: "error-message" }, yl = /* @__PURE__ */ A({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, s) => (o(), n("div", hl, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", pl, r(t.message), 1),
      t.retry ? (o(), p(T, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => c.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Ee = /* @__PURE__ */ W(yl, [["__scopeId", "data-v-5397be48"]]), wl = /* @__PURE__ */ A({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const s = c, { getWorkflows: i } = pe(), u = L([]), h = L(!1), m = L(null), g = L(""), v = L(!1), y = L(!1), b = L(!1), $ = L(!1), M = L(null), z = V(
      () => u.value.filter((H) => H.status === "broken")
    ), B = V(
      () => u.value.filter((H) => H.status === "new")
    ), P = V(
      () => u.value.filter((H) => H.status === "modified")
    ), I = V(
      () => u.value.filter((H) => H.status === "synced")
    ), E = V(() => {
      if (!g.value.trim()) return u.value;
      const H = g.value.toLowerCase();
      return u.value.filter((N) => N.name.toLowerCase().includes(H));
    }), U = V(
      () => z.value.filter(
        (H) => !g.value.trim() || H.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), j = V(
      () => B.value.filter(
        (H) => !g.value.trim() || H.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), S = V(
      () => P.value.filter(
        (H) => !g.value.trim() || H.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), x = V(
      () => I.value.filter(
        (H) => !g.value.trim() || H.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), w = V(
      () => y.value ? x.value : x.value.slice(0, 5)
    );
    async function _() {
      h.value = !0, m.value = null;
      try {
        u.value = await i();
      } catch (H) {
        m.value = H instanceof Error ? H.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    function k(H) {
      M.value = H, b.value = !0;
    }
    function R(H) {
      M.value = H, $.value = !0;
    }
    function O() {
      alert("Bulk resolution not yet implemented");
    }
    function re() {
      s("refresh");
    }
    return ue(_), (H, N) => (o(), n(G, null, [
      l(ge, null, {
        header: a(() => [
          l(he, { title: "WORKFLOWS" }, {
            actions: a(() => [
              z.value.length > 0 ? (o(), p(T, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: a(() => [...N[7] || (N[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          l(Ge, {
            modelValue: g.value,
            "onUpdate:modelValue": N[0] || (N[0] = (J) => g.value = J),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), p(Ee, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            U.value.length ? (o(), p(ie, {
              key: 0,
              title: "BROKEN",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(U.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "broken"
                }, {
                  icon: a(() => [...N[8] || (N[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(r(J.name), 1)
                  ]),
                  subtitle: a(() => [
                    f(" Missing: " + r(J.missing_nodes) + " nodes, " + r(J.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => R(J.name)
                    }, {
                      default: a(() => [...N[9] || (N[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => k(J.name)
                    }, {
                      default: a(() => [...N[10] || (N[10] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            j.value.length ? (o(), p(ie, {
              key: 1,
              title: "NEW",
              count: j.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(j.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "new"
                }, {
                  icon: a(() => [...N[11] || (N[11] = [
                    f("●", -1)
                  ])]),
                  title: a(() => [
                    f(r(J.name), 1)
                  ]),
                  subtitle: a(() => [...N[12] || (N[12] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => k(J.name)
                    }, {
                      default: a(() => [...N[13] || (N[13] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            S.value.length ? (o(), p(ie, {
              key: 2,
              title: "MODIFIED",
              count: S.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(S.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "modified"
                }, {
                  icon: a(() => [...N[14] || (N[14] = [
                    f("⚡", -1)
                  ])]),
                  title: a(() => [
                    f(r(J.name), 1)
                  ]),
                  subtitle: a(() => [...N[15] || (N[15] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => k(J.name)
                    }, {
                      default: a(() => [...N[16] || (N[16] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            x.value.length ? (o(), p(ie, {
              key: 3,
              title: "SYNCED",
              count: x.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: N[2] || (N[2] = (J) => v.value = J)
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(w.value, (J) => (o(), p(de, {
                  key: J.name,
                  status: "synced"
                }, {
                  icon: a(() => [...N[17] || (N[17] = [
                    f("✓", -1)
                  ])]),
                  title: a(() => [
                    f(r(J.name), 1)
                  ]),
                  subtitle: a(() => [...N[18] || (N[18] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => k(J.name)
                    }, {
                      default: a(() => [...N[19] || (N[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !y.value && x.value.length > 5 ? (o(), p(T, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (J) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    f(" View all " + r(x.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            E.value.length ? d("", !0) : (o(), p(be, {
              key: 4,
              icon: "📭",
              message: g.value ? `No workflows match '${g.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b.value && M.value ? (o(), p(bn, {
        key: 0,
        "workflow-name": M.value,
        onClose: N[3] || (N[3] = (J) => b.value = !1),
        onResolve: N[4] || (N[4] = (J) => R(M.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      $.value && M.value ? (o(), p(Jn, {
        key: 1,
        "workflow-name": M.value,
        onClose: N[5] || (N[5] = (J) => $.value = !1),
        onInstall: re,
        onRefresh: N[6] || (N[6] = (J) => s("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), bl = /* @__PURE__ */ W(wl, [["__scopeId", "data-v-2251d776"]]), kl = /* @__PURE__ */ A({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: q(["summary-bar", t.variant])
    }, [
      ee(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ze = /* @__PURE__ */ W(kl, [["__scopeId", "data-v-ccb7816e"]]), $l = { class: "popover-header" }, _l = { class: "popover-title" }, Cl = { class: "popover-content" }, xl = {
  key: 0,
  class: "popover-actions"
}, Sl = /* @__PURE__ */ A({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, s) => (o(), p(Ue, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Je({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", $l, [
            e("h4", _l, r(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Cl, [
            ee(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), n("div", xl, [
            ee(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Re = /* @__PURE__ */ W(Sl, [["__scopeId", "data-v-057df510"]]), Il = /* @__PURE__ */ A({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const s = c, { getEnvironmentModels: i, getStatus: u } = pe(), h = L([]), m = L([]), g = L("production"), v = L(!1), y = L(null), b = L(""), $ = L(!1);
    function M() {
      $.value = !1, s("navigate", "model-index");
    }
    const z = V(
      () => h.value.reduce((k, R) => k + (R.size_mb || R.size || 0), 0)
    ), B = V(() => {
      if (!b.value.trim()) return h.value;
      const k = b.value.toLowerCase();
      return h.value.filter((R) => R.filename.toLowerCase().includes(k));
    }), P = V(() => {
      if (!b.value.trim()) return m.value;
      const k = b.value.toLowerCase();
      return m.value.filter((R) => R.filename.toLowerCase().includes(k));
    }), I = V(
      () => B.value.filter((k) => k.type === "checkpoints" || k.category === "checkpoints")
    ), E = V(
      () => B.value.filter((k) => k.type === "loras" || k.category === "loras")
    ), U = V(
      () => B.value.filter(
        (k) => k.type !== "checkpoints" && k.category !== "checkpoints" && k.type !== "loras" && k.category !== "loras"
      )
    );
    function j(k) {
      return k ? k >= 1024 ? `${(k / 1024).toFixed(1)} GB` : `${k.toFixed(0)} MB` : "Unknown";
    }
    function S(k) {
      s("navigate", "model-index");
    }
    function x(k) {
      s("navigate", "model-index");
    }
    function w(k) {
      alert(`Download functionality not yet implemented for ${k}`);
    }
    async function _() {
      v.value = !0, y.value = null;
      try {
        const k = await i();
        h.value = k, m.value = [];
        const R = await u();
        g.value = R.environment || "production";
      } catch (k) {
        y.value = k instanceof Error ? k.message : "Failed to load models";
      } finally {
        v.value = !1;
      }
    }
    return ue(_), (k, R) => (o(), n(G, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (O) => $.value = !0)
          })
        ]),
        search: a(() => [
          l(Ge, {
            modelValue: b.value,
            "onUpdate:modelValue": R[1] || (R[1] = (O) => b.value = O),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          v.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading environment models..."
          })) : y.value ? (o(), p(Ee, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            h.value.length ? (o(), p(ze, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + r(h.value.length) + " models • " + r(j(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            I.value.length ? (o(), p(ie, {
              key: 1,
              title: "CHECKPOINTS",
              count: I.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(I.value, (O) => (o(), p(de, {
                  key: O.sha256 || O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...R[3] || (R[3] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(r(O.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(r(j(O.size_mb || O.size)), 1)
                  ]),
                  details: a(() => [
                    l(Q, {
                      label: "Used by:",
                      value: (O.used_by || O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(Q, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => S(O.sha256 || O.sha256_hash || O.hash || "")
                    }, {
                      default: a(() => [...R[4] || (R[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            E.value.length ? (o(), p(ie, {
              key: 2,
              title: "LORAS",
              count: E.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(E.value, (O) => (o(), p(de, {
                  key: O.sha256 || O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...R[5] || (R[5] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(r(O.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(r(j(O.size_mb || O.size)), 1)
                  ]),
                  details: a(() => [
                    l(Q, {
                      label: "Used by:",
                      value: (O.used_by || O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(Q, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => S(O.sha256 || O.sha256_hash || O.hash || "")
                    }, {
                      default: a(() => [...R[6] || (R[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            U.value.length ? (o(), p(ie, {
              key: 3,
              title: "OTHER",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(U.value, (O) => (o(), p(de, {
                  key: O.sha256 || O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...R[7] || (R[7] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(r(O.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(r(j(O.size_mb || O.size)), 1)
                  ]),
                  details: a(() => [
                    l(Q, {
                      label: "Type:",
                      value: O.type
                    }, null, 8, ["value"]),
                    l(Q, {
                      label: "Used by:",
                      value: (O.used_by || O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => S(O.sha256 || O.sha256_hash || O.hash || "")
                    }, {
                      default: a(() => [...R[8] || (R[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            P.value.length ? (o(), p(ie, {
              key: 4,
              title: "MISSING",
              count: P.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(P.value, (O) => (o(), p(de, {
                  key: O.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...R[9] || (R[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(r(O.filename), 1)
                  ]),
                  subtitle: a(() => [...R[10] || (R[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var re;
                    return [
                      l(Q, {
                        label: "Required by:",
                        value: ((re = O.workflow_names) == null ? void 0 : re.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    l(T, {
                      variant: "primary",
                      size: "sm",
                      onClick: (re) => w(O.filename)
                    }, {
                      default: a(() => [...R[11] || (R[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => x(O.filename)
                    }, {
                      default: a(() => [...R[12] || (R[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !B.value.length && !P.value.length ? (o(), p(be, {
              key: 5,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: $.value,
        title: "About Environment Models",
        onClose: R[2] || (R[2] = (O) => $.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            R[13] || (R[13] = f(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + r(g.value) + '"', 1),
            R[14] || (R[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: M
          }, {
            default: a(() => [...R[15] || (R[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), El = /* @__PURE__ */ W(Il, [["__scopeId", "data-v-865641a4"]]), Ll = /* @__PURE__ */ A({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: c } = pe(), s = L([]), i = L(!1), u = L(null), h = L(""), m = L(!1), g = V(
      () => s.value.reduce((w, _) => w + (_.size_mb || _.size || 0), 0)
    ), v = V(() => {
      const w = /* @__PURE__ */ new Set();
      return s.value.forEach((_) => {
        _.used_in_environments && _.used_in_environments.length > 0 && _.used_in_environments.forEach((k) => w.add(k.env_name));
      }), w.size;
    }), y = V(() => {
      if (!h.value.trim()) return s.value;
      const w = h.value.toLowerCase();
      return s.value.filter((_) => {
        const k = _, R = _.sha256 || k.sha256_hash || "";
        return _.filename.toLowerCase().includes(w) || R.toLowerCase().includes(w);
      });
    }), b = V(
      () => y.value.filter((w) => w.type === "checkpoints")
    ), $ = V(
      () => y.value.filter((w) => w.type === "loras")
    ), M = V(
      () => y.value.filter((w) => w.type !== "checkpoints" && w.type !== "loras")
    );
    function z(w) {
      return w ? w >= 1024 ? `${(w / 1024).toFixed(1)} GB` : `${w.toFixed(0)} MB` : "Unknown";
    }
    function B(w) {
      const _ = w, k = w.used_in_workflows || _.used_by || [];
      return !k || k.length === 0 ? "Not used" : `${k.length} workflow(s)`;
    }
    function P(w) {
      navigator.clipboard.writeText(w), alert("Hash copied to clipboard");
    }
    function I(w) {
      prompt("Enter model source URL:", w.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function E(w) {
      const _ = w, k = w.used_in_workflows || _.used_by || [], R = k && k.length > 0 ? `

⚠ WARNING: This model is used by ${k.length} workflow(s):
${k.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${w.filename}?${R}

This will free ${z(_.size_mb || w.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function U() {
      alert("Scan for models not yet implemented");
    }
    function j() {
      alert("Change directory not yet implemented");
    }
    function S() {
      alert("Download new model not yet implemented");
    }
    async function x() {
      i.value = !0, u.value = null;
      try {
        s.value = await c(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", b.value), console.log("Filtered loras:", $.value), console.log("Filtered other:", M.value);
      } catch (w) {
        u.value = w instanceof Error ? w.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return ue(x), (w, _) => (o(), n(G, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: _[0] || (_[0] = (k) => m.value = !0)
          }, {
            actions: a(() => [
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: a(() => [..._[3] || (_[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: a(() => [..._[4] || (_[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: a(() => [..._[5] || (_[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  f(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          l(Ge, {
            modelValue: h.value,
            "onUpdate:modelValue": _[1] || (_[1] = (k) => h.value = k),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          i.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading workspace models..."
          })) : u.value ? (o(), p(Ee, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            s.value.length ? (o(), p(ze, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + r(s.value.length) + " models • " + r(z(g.value)) + " • Used in " + r(v.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            b.value.length ? (o(), p(ie, {
              key: 1,
              title: "CHECKPOINTS",
              count: b.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(b.value, (k) => (o(), p(de, {
                  key: k.sha256 || k.filename,
                  status: "synced"
                }, {
                  icon: a(() => [..._[6] || (_[6] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(r(k.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(r(z(k.size_mb || k.size)), 1)
                  ]),
                  details: a(() => {
                    var R, O;
                    return [
                      k.sha256 || k.sha256_hash ? (o(), p(Q, {
                        key: 0,
                        label: "SHA256:",
                        value: (k.sha256 || k.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      l(Q, {
                        label: "Used in:",
                        value: B(k)
                      }, null, 8, ["value"]),
                      k.source_url || (R = k.sources) != null && R[0] ? (o(), p(Q, {
                        key: 1,
                        label: "Source URL:",
                        value: k.source_url || ((O = k.sources) == null ? void 0 : O[0])
                      }, null, 8, ["value"])) : (o(), p(Q, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [..._[7] || (_[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => I(k)
                    }, {
                      default: a(() => [..._[8] || (_[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k.sha256 || k.sha256_hash ? (o(), p(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => P(k.sha256 || k.sha256_hash)
                    }, {
                      default: a(() => [..._[9] || (_[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(T, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => E(k)
                    }, {
                      default: a(() => [..._[10] || (_[10] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            $.value.length ? (o(), p(ie, {
              key: 2,
              title: "LORAS",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K($.value, (k) => (o(), p(de, {
                  key: k.sha256 || k.filename,
                  status: "synced"
                }, {
                  icon: a(() => [..._[11] || (_[11] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(r(k.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(r(z(k.size_mb || k.size)), 1)
                  ]),
                  details: a(() => {
                    var R, O;
                    return [
                      k.sha256 || k.sha256_hash ? (o(), p(Q, {
                        key: 0,
                        label: "SHA256:",
                        value: (k.sha256 || k.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      l(Q, {
                        label: "Used in:",
                        value: B(k)
                      }, null, 8, ["value"]),
                      k.source_url || (R = k.sources) != null && R[0] ? (o(), p(Q, {
                        key: 1,
                        label: "Source URL:",
                        value: k.source_url || ((O = k.sources) == null ? void 0 : O[0])
                      }, null, 8, ["value"])) : (o(), p(Q, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [..._[12] || (_[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => I(k)
                    }, {
                      default: a(() => [..._[13] || (_[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k.sha256 || k.sha256_hash ? (o(), p(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => P(k.sha256 || k.sha256_hash)
                    }, {
                      default: a(() => [..._[14] || (_[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(T, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => E(k)
                    }, {
                      default: a(() => [..._[15] || (_[15] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            M.value.length ? (o(), p(ie, {
              key: 3,
              title: "OTHER",
              count: M.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(M.value, (k) => (o(), p(de, {
                  key: k.sha256 || k.filename,
                  status: "synced"
                }, {
                  icon: a(() => [..._[16] || (_[16] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(r(k.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(r(z(k.size_mb || k.size)), 1)
                  ]),
                  details: a(() => [
                    l(Q, {
                      label: "Type:",
                      value: k.type
                    }, null, 8, ["value"]),
                    k.sha256 || k.sha256_hash ? (o(), p(Q, {
                      key: 0,
                      label: "SHA256:",
                      value: (k.sha256 || k.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    l(Q, {
                      label: "Used in:",
                      value: B(k)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => I(k)
                    }, {
                      default: a(() => [..._[17] || (_[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k.sha256 || k.sha256_hash ? (o(), p(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => P(k.sha256 || k.sha256_hash)
                    }, {
                      default: a(() => [..._[18] || (_[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    l(T, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => E(k)
                    }, {
                      default: a(() => [..._[19] || (_[19] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            y.value.length ? d("", !0) : (o(), p(be, {
              key: 4,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: m.value,
        title: "About Workspace Model Index",
        onClose: _[2] || (_[2] = (k) => m.value = !1)
      }, {
        content: a(() => [..._[20] || (_[20] = [
          e("p", null, [
            f(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            f(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Nl = /* @__PURE__ */ W(Ll, [["__scopeId", "data-v-5a24af01"]]), Ml = { key: 0 }, zl = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Rl = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Dl = /* @__PURE__ */ A({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: c, installNode: s, updateNode: i, uninstallNode: u } = pe(), h = L({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), m = L(!1), g = L(null), v = L(""), y = L(!1), b = V(() => {
      if (!v.value.trim()) return h.value.nodes;
      const S = v.value.toLowerCase();
      return h.value.nodes.filter(
        (x) => {
          var w, _;
          return x.name.toLowerCase().includes(S) || ((w = x.description) == null ? void 0 : w.toLowerCase().includes(S)) || ((_ = x.repository) == null ? void 0 : _.toLowerCase().includes(S));
        }
      );
    }), $ = V(
      () => b.value.filter((S) => S.installed)
    ), M = V(
      () => b.value.filter((S) => !S.installed)
    );
    function z(S) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[S] || S;
    }
    function B(S) {
      return !S.used_in_workflows || S.used_in_workflows.length === 0 ? "Not used in any workflows" : S.used_in_workflows.length === 1 ? S.used_in_workflows[0] : `${S.used_in_workflows.length} workflows`;
    }
    function P(S) {
      window.open(S, "_blank");
    }
    async function I(S) {
      if (confirm(`Install node "${S}"?

This will download and install the node from its repository.`))
        try {
          m.value = !0;
          const x = await s(S);
          x.status === "success" ? (alert(`Node "${S}" installed successfully!`), await j()) : alert(`Failed to install node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error installing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function E(S) {
      if (confirm(`Check for updates for "${S}"?`))
        try {
          m.value = !0;
          const x = await i(S);
          x.status === "success" ? (alert(`Node "${S}" is up to date or has been updated!`), await j()) : alert(`Update check failed: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error checking for updates: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function U(S) {
      if (confirm(`Uninstall node "${S}"?

This will remove the node from this environment.`))
        try {
          m.value = !0;
          const x = await u(S);
          x.status === "success" ? (alert(`Node "${S}" uninstalled successfully!`), await j()) : alert(`Failed to uninstall node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error uninstalling node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function j() {
      m.value = !0, g.value = null;
      try {
        h.value = await c();
      } catch (S) {
        g.value = S instanceof Error ? S.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return ue(j), (S, x) => (o(), n(G, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (w) => y.value = !0)
          })
        ]),
        search: a(() => [
          l(Ge, {
            modelValue: v.value,
            "onUpdate:modelValue": x[1] || (x[1] = (w) => v.value = w),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : g.value ? (o(), p(Ee, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            h.value.total_count ? (o(), p(ze, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + r(h.value.total_count) + " nodes • " + r(h.value.installed_count) + " installed • " + r(h.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : d("", !0),
            $.value.length ? (o(), p(ie, {
              key: 1,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(G, null, K($.value, (w) => (o(), p(de, {
                  key: w.name,
                  status: "synced"
                }, {
                  icon: a(() => [...x[4] || (x[4] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(r(w.name), 1)
                  ]),
                  subtitle: a(() => [
                    w.version ? (o(), n("span", Ml, "v" + r(w.version), 1)) : (o(), n("span", zl, "version unknown")),
                    w.source ? (o(), n("span", Rl, " • " + r(z(w.source)), 1)) : d("", !0)
                  ]),
                  details: a(() => [
                    w.description ? (o(), p(Q, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : d("", !0),
                    w.repository ? (o(), p(Q, {
                      key: 1,
                      label: "Repository:",
                      value: w.repository
                    }, null, 8, ["value"])) : d("", !0),
                    l(Q, {
                      label: "Used by:",
                      value: B(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    w.repository ? (o(), p(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (_) => P(w.repository)
                    }, {
                      default: a(() => [...x[5] || (x[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    w.source === "registry" ? (o(), p(T, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (_) => E(w.name)
                    }, {
                      default: a(() => [...x[6] || (x[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    w.source !== "unknown" ? (o(), p(T, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (_) => U(w.name)
                    }, {
                      default: a(() => [...x[7] || (x[7] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            M.value.length ? (o(), p(ie, {
              key: 2,
              title: "MISSING",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(M.value, (w) => (o(), p(de, {
                  key: w.name,
                  status: "missing"
                }, {
                  icon: a(() => [...x[8] || (x[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(r(w.name), 1)
                  ]),
                  subtitle: a(() => [...x[9] || (x[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    w.description ? (o(), p(Q, {
                      key: 0,
                      label: "Description:",
                      value: w.description
                    }, null, 8, ["value"])) : d("", !0),
                    w.repository ? (o(), p(Q, {
                      key: 1,
                      label: "Repository:",
                      value: w.repository
                    }, null, 8, ["value"])) : d("", !0),
                    l(Q, {
                      label: "Required by:",
                      value: B(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    w.download_url ? (o(), p(T, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (_) => I(w.name)
                    }, {
                      default: a(() => [...x[10] || (x[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    w.repository ? (o(), p(T, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (_) => P(w.repository)
                    }, {
                      default: a(() => [...x[11] || (x[11] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !$.value.length && !M.value.length ? (o(), p(be, {
              key: 3,
              icon: "📭",
              message: v.value ? `No nodes match '${v.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: y.value,
        title: "About Git-Tracked Nodes",
        onClose: x[3] || (x[3] = (w) => y.value = !1)
      }, {
        content: a(() => [...x[12] || (x[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            f(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            f(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: x[2] || (x[2] = (w) => y.value = !1)
          }, {
            default: a(() => [...x[13] || (x[13] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Tl = /* @__PURE__ */ W(Dl, [["__scopeId", "data-v-c480e2c1"]]), Bl = { class: "remote-url-display" }, Vl = ["title"], Ul = ["title"], Ol = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Pl = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Fl = /* @__PURE__ */ A({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, s = L(!1), i = V(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const h = c.url.slice(0, Math.floor(c.maxLength * 0.6)), m = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${h}...${m}`;
    });
    async function u() {
      try {
        await navigator.clipboard.writeText(c.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy URL:", h);
      }
    }
    return (h, m) => (o(), n("div", Bl, [
      e("span", {
        class: "url-text",
        title: t.url
      }, r(i.value), 9, Vl),
      e("button", {
        class: q(["copy-btn", { copied: s.value }]),
        onClick: u,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", Pl, [...m[1] || (m[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Ol, [...m[0] || (m[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Ul)
    ]));
  }
}), pt = /* @__PURE__ */ W(Fl, [["__scopeId", "data-v-7768a58d"]]), Al = { class: "remote-title" }, Wl = {
  key: 0,
  class: "default-badge"
}, Gl = {
  key: 1,
  class: "sync-badge"
}, Hl = {
  key: 0,
  class: "ahead"
}, jl = {
  key: 1,
  class: "behind"
}, ql = {
  key: 0,
  class: "tracking-info"
}, Kl = /* @__PURE__ */ A({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const s = t, i = V(() => s.fetchingRemote === s.remote.name), u = V(() => s.remote.is_default), h = V(() => !!s.trackingBranch);
    function m(g) {
      const v = new Date(g), b = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), $ = Math.floor(b / 6e4);
      if ($ < 1) return "Just now";
      if ($ < 60) return `${$}m ago`;
      const M = Math.floor($ / 60);
      if (M < 24) return `${M}h ago`;
      const z = Math.floor(M / 24);
      return z < 7 ? `${z}d ago` : v.toLocaleDateString();
    }
    return (g, v) => (o(), p(de, {
      status: u.value ? "synced" : void 0
    }, {
      icon: a(() => [
        f(r(u.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", Al, [
          e("span", null, r(t.remote.name), 1),
          u.value ? (o(), n("span", Wl, "DEFAULT")) : d("", !0),
          t.syncStatus ? (o(), n("span", Gl, [
            t.syncStatus.ahead > 0 ? (o(), n("span", Hl, "↑" + r(t.syncStatus.ahead), 1)) : d("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", jl, "↓" + r(t.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: a(() => [
        h.value ? (o(), n("span", ql, " Tracking: " + r(t.trackingBranch), 1)) : d("", !0)
      ]),
      details: a(() => {
        var y;
        return [
          l(Q, { label: "Fetch:" }, {
            default: a(() => [
              l(pt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), p(Q, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              l(pt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (y = t.syncStatus) != null && y.last_fetch ? (o(), p(Q, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              e("span", null, r(m(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: a(() => [
        l(T, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: v[0] || (v[0] = (y) => g.$emit("fetch", t.remote.name))
        }, {
          default: a(() => [...v[3] || (v[3] = [
            f(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        l(T, {
          variant: "secondary",
          size: "xs",
          onClick: v[1] || (v[1] = (y) => g.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...v[4] || (v[4] = [
            f(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        u.value ? d("", !0) : (o(), p(T, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[2] || (v[2] = (y) => g.$emit("remove", t.remote.name))
        }, {
          default: a(() => [...v[5] || (v[5] = [
            f(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Jl = /* @__PURE__ */ W(Kl, [["__scopeId", "data-v-17362e45"]]), Yl = ["for"], Xl = {
  key: 0,
  class: "base-form-field-required"
}, Ql = { class: "base-form-field-input" }, Zl = {
  key: 1,
  class: "base-form-field-error"
}, ei = {
  key: 2,
  class: "base-form-field-hint"
}, ti = /* @__PURE__ */ A({
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
    const c = t, s = V(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, u) => (o(), n("div", {
      class: q(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        f(r(t.label) + " ", 1),
        t.required ? (o(), n("span", Xl, "*")) : d("", !0)
      ], 8, Yl)) : d("", !0),
      e("div", Ql, [
        ee(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", Zl, r(t.error), 1)) : t.hint ? (o(), n("span", ei, r(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ W(ti, [["__scopeId", "data-v-9a1cf296"]]), oi = ["type", "value", "placeholder", "disabled"], si = {
  key: 0,
  class: "base-input-error"
}, ai = /* @__PURE__ */ A({
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
    return (c, s) => (o(), n("div", {
      class: q(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: q(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Se((i) => c.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Se((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, oi),
      t.error ? (o(), n("span", si, r(t.error), 1)) : d("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ W(ai, [["__scopeId", "data-v-9ba02cdc"]]), ni = { class: "remote-form" }, li = { class: "form-header" }, ii = { class: "form-body" }, ri = {
  key: 0,
  class: "form-error"
}, ci = { class: "form-actions" }, di = /* @__PURE__ */ A({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const s = t, i = c, u = L({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), h = L(!1), m = L(null);
    wt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      u.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const g = V(() => u.value.name.trim() !== "" && u.value.fetchUrl.trim() !== "");
    async function v() {
      if (!(!g.value || h.value)) {
        m.value = null, h.value = !0;
        try {
          i("submit", u.value);
        } catch (y) {
          m.value = y instanceof Error ? y.message : "Failed to submit form";
        } finally {
          h.value = !1;
        }
      }
    }
    return (y, b) => (o(), n("div", ni, [
      e("div", li, [
        l(we, null, {
          default: a(() => [
            f(r(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", ii, [
        l(lt, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            l(it, {
              modelValue: u.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = ($) => u.value.name = $),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        l(lt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            l(it, {
              modelValue: u.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = ($) => u.value.fetchUrl = $),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        l(lt, { label: "Push URL (optional)" }, {
          default: a(() => [
            l(it, {
              modelValue: u.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = ($) => u.value.pushUrl = $),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (o(), n("div", ri, r(m.value), 1)) : d("", !0)
      ]),
      e("div", ci, [
        l(T, {
          variant: "primary",
          size: "md",
          disabled: !g.value,
          loading: h.value,
          onClick: v
        }, {
          default: a(() => [
            f(r(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        l(T, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = ($) => y.$emit("cancel"))
        }, {
          default: a(() => [...b[4] || (b[4] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ui = /* @__PURE__ */ W(di, [["__scopeId", "data-v-56021b18"]]), mi = { key: 0 }, vi = /* @__PURE__ */ A({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: u,
      fetchRemote: h,
      getRemoteSyncStatus: m
    } = pe(), g = L([]), v = L(null), y = L({}), b = L(!1), $ = L(null), M = L(""), z = L(!1), B = L(null), P = L(!1), I = L("add"), E = L({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), U = V(() => {
      if (!M.value.trim()) return g.value;
      const H = M.value.toLowerCase();
      return g.value.filter(
        (N) => N.name.toLowerCase().includes(H) || N.fetch_url.toLowerCase().includes(H) || N.push_url.toLowerCase().includes(H)
      );
    });
    function j(H) {
      var N;
      return ((N = v.value) == null ? void 0 : N.remote) === H;
    }
    async function S() {
      b.value = !0, $.value = null;
      try {
        const H = await c();
        g.value = H.remotes, v.value = H.current_branch_tracking || null, await Promise.all(
          H.remotes.map(async (N) => {
            const J = await m(N.name);
            J && (y.value[N.name] = J);
          })
        );
      } catch (H) {
        $.value = H instanceof Error ? H.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function x() {
      I.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, P.value = !0;
    }
    function w(H) {
      const N = g.value.find((J) => J.name === H);
      N && (I.value = "edit", E.value = {
        name: N.name,
        fetchUrl: N.fetch_url,
        pushUrl: N.push_url
      }, P.value = !0);
    }
    async function _(H) {
      try {
        I.value === "add" ? await s(H.name, H.fetchUrl) : await u(H.name, H.fetchUrl, H.pushUrl || void 0), P.value = !1, await S();
      } catch (N) {
        $.value = N instanceof Error ? N.message : "Operation failed";
      }
    }
    function k() {
      P.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function R(H) {
      B.value = H;
      try {
        await h(H);
        const N = await m(H);
        N && (y.value[H] = N);
      } catch (N) {
        $.value = N instanceof Error ? N.message : "Fetch failed";
      } finally {
        B.value = null;
      }
    }
    async function O(H) {
      if (confirm(`Remove remote "${H}"?`))
        try {
          await i(H), await S();
        } catch (N) {
          $.value = N instanceof Error ? N.message : "Failed to remove remote";
        }
    }
    function re() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ue(S), (H, N) => (o(), n(G, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (J) => z.value = !0)
          }, {
            actions: a(() => [
              P.value ? d("", !0) : (o(), p(T, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: x
              }, {
                default: a(() => [...N[3] || (N[3] = [
                  f(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          P.value ? d("", !0) : (o(), p(Ge, {
            key: 0,
            modelValue: M.value,
            "onUpdate:modelValue": N[1] || (N[1] = (J) => M.value = J),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          b.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading remotes..."
          })) : $.value ? (o(), p(Ee, {
            key: 1,
            message: $.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            P.value ? (o(), p(ui, {
              key: 0,
              mode: I.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: _,
              onCancel: k
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            g.value.length && !P.value ? (o(), p(ze, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + r(g.value.length) + " remote" + r(g.value.length !== 1 ? "s" : "") + " ", 1),
                v.value ? (o(), n("span", mi, " • Tracking: " + r(v.value.remote) + "/" + r(v.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            U.value.length && !P.value ? (o(), p(ie, {
              key: 2,
              title: "REMOTES",
              count: U.value.length
            }, {
              default: a(() => [
                (o(!0), n(G, null, K(U.value, (J) => {
                  var te;
                  return o(), p(Jl, {
                    key: J.name,
                    remote: J,
                    "sync-status": y.value[J.name],
                    "tracking-branch": j(J.name) ? (te = v.value) == null ? void 0 : te.branch : void 0,
                    "fetching-remote": B.value,
                    onFetch: R,
                    onEdit: w,
                    onRemove: O
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !U.value.length && !P.value ? (o(), p(be, {
              key: 3,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                l(T, {
                  variant: "primary",
                  onClick: x
                }, {
                  default: a(() => [...N[4] || (N[4] = [
                    f(" Add Your First Remote ", -1)
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
      l(Re, {
        show: z.value,
        title: "About Git Remotes",
        onClose: N[2] || (N[2] = (J) => z.value = !1)
      }, {
        content: a(() => [...N[5] || (N[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            f(" The "),
            e("strong", null, '"origin"'),
            f(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          l(T, {
            variant: "link",
            onClick: re
          }, {
            default: a(() => [...N[6] || (N[6] = [
              f(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), fi = /* @__PURE__ */ W(vi, [["__scopeId", "data-v-a75719bb"]]), gi = { class: "setting-info" }, hi = { class: "setting-label" }, pi = {
  key: 0,
  class: "required-marker"
}, yi = {
  key: 0,
  class: "setting-description"
}, wi = { class: "setting-control" }, bi = /* @__PURE__ */ A({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, s) => (o(), n("div", {
      class: q(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", gi, [
        e("div", hi, [
          f(r(t.label) + " ", 1),
          t.required ? (o(), n("span", pi, "*")) : d("", !0)
        ]),
        t.description ? (o(), n("div", yi, r(t.description), 1)) : d("", !0)
      ]),
      e("div", wi, [
        ee(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ne = /* @__PURE__ */ W(bi, [["__scopeId", "data-v-cb5d236c"]]), ki = { class: "toggle" }, $i = ["checked", "disabled"], _i = /* @__PURE__ */ A({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, s) => (o(), n("label", ki, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, $i),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ve = /* @__PURE__ */ W(_i, [["__scopeId", "data-v-71c0f550"]]), Ci = { class: "settings-section" }, xi = { class: "settings-section" }, Si = { class: "settings-section" }, Ii = { class: "settings-section" }, Ei = { class: "settings-section" }, Li = { class: "settings-section" }, Ni = /* @__PURE__ */ A({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = L(!1), s = L(null), i = L(null), u = L({
      git: {
        userName: "",
        userEmail: "",
        defaultBranch: "main",
        autoCommit: !1
      },
      paths: {
        workspaceRoot: "/path/to/workspace",
        environmentsDir: "environments",
        modelsDir: "models"
      },
      modelIndex: {
        autoIndex: !0,
        indexOnStartup: !0,
        scanInterval: 30,
        deepScan: !1
      },
      environment: {
        defaultComfyUIVersion: "latest",
        pythonVersion: "3.11",
        autoCreateVenv: !0,
        autoInstallDeps: !0
      },
      ui: {
        theme: "comfy",
        compactMode: !1,
        showFileExtensions: !0,
        confirmDestructive: !0
      },
      advanced: {
        debugMode: !1,
        maxHistoryItems: 50,
        cacheDuration: 300
      }
    }), h = L(null), m = V(() => h.value ? JSON.stringify(u.value) !== JSON.stringify(h.value) : !1), g = [
      { label: "15 minutes", value: 15 },
      { label: "30 minutes", value: 30 },
      { label: "1 hour", value: 60 },
      { label: "2 hours", value: 120 },
      { label: "Manual only", value: 0 }
    ], v = [
      { label: "Latest", value: "latest" },
      { label: "Stable", value: "stable" },
      { label: "v0.2.0", value: "v0.2.0" },
      { label: "v0.1.0", value: "v0.1.0" }
    ], y = [
      { label: "Python 3.11", value: "3.11" },
      { label: "Python 3.10", value: "3.10" },
      { label: "Python 3.9", value: "3.9" }
    ], b = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], $ = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], M = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function z() {
      c.value = !0, s.value = null;
      try {
        await new Promise((I) => setTimeout(I, 500)), h.value = JSON.parse(JSON.stringify(u.value));
      } catch (I) {
        s.value = I instanceof Error ? I.message : "Failed to load settings";
      } finally {
        c.value = !1;
      }
    }
    async function B() {
      i.value = null;
      try {
        await new Promise((I) => setTimeout(I, 300)), h.value = JSON.parse(JSON.stringify(u.value)), i.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          i.value = null;
        }, 3e3);
      } catch (I) {
        i.value = {
          type: "error",
          message: I instanceof Error ? I.message : "Failed to save settings"
        };
      }
    }
    function P() {
      h.value && (u.value = JSON.parse(JSON.stringify(h.value)), i.value = null);
    }
    return ue(z), (I, E) => (o(), p(ge, null, {
      header: a(() => [
        l(he, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            l(T, {
              variant: "primary",
              size: "sm",
              disabled: !m.value,
              onClick: B
            }, {
              default: a(() => [...E[19] || (E[19] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            m.value ? (o(), p(T, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: P
            }, {
              default: a(() => [...E[20] || (E[20] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        c.value ? (o(), p(Ie, {
          key: 0,
          message: "Loading workspace settings..."
        })) : s.value ? (o(), p(Ee, {
          key: 1,
          message: s.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
          l(ie, { title: "GIT CONFIGURATION" }, {
            default: a(() => [
              e("div", Ci, [
                l(ne, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    l(Ae, {
                      modelValue: u.value.git.userName,
                      "onUpdate:modelValue": E[0] || (E[0] = (U) => u.value.git.userName = U),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    l(Ae, {
                      modelValue: u.value.git.userEmail,
                      "onUpdate:modelValue": E[1] || (E[1] = (U) => u.value.git.userEmail = U),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: a(() => [
                    l(Ae, {
                      modelValue: u.value.git.defaultBranch,
                      "onUpdate:modelValue": E[2] || (E[2] = (U) => u.value.git.defaultBranch = U),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.git.autoCommit,
                      "onUpdate:modelValue": E[3] || (E[3] = (U) => u.value.git.autoCommit = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ie, { title: "WORKSPACE PATHS" }, {
            default: a(() => [
              e("div", xi, [
                l(ne, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: a(() => [
                    l(Fe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(r(u.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: a(() => [
                    l(Fe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(r(u.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: a(() => [
                    l(Fe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(r(u.value.paths.modelsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ie, { title: "MODEL INDEX" }, {
            default: a(() => [
              e("div", Si, [
                l(ne, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": E[4] || (E[4] = (U) => u.value.modelIndex.autoIndex = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !u.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": E[5] || (E[5] = (U) => u.value.modelIndex.indexOnStartup = U),
                      disabled: !u.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(ne, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !u.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": E[6] || (E[6] = (U) => u.value.modelIndex.scanInterval = U),
                      options: g,
                      disabled: !u.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(ne, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.modelIndex.deepScan,
                      "onUpdate:modelValue": E[7] || (E[7] = (U) => u.value.modelIndex.deepScan = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ie, { title: "ENVIRONMENT DEFAULTS" }, {
            default: a(() => [
              e("div", Ii, [
                l(ne, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": E[8] || (E[8] = (U) => u.value.environment.defaultComfyUIVersion = U),
                      options: v,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.environment.pythonVersion,
                      "onUpdate:modelValue": E[9] || (E[9] = (U) => u.value.environment.pythonVersion = U),
                      options: y,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": E[10] || (E[10] = (U) => u.value.environment.autoCreateVenv = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": E[11] || (E[11] = (U) => u.value.environment.autoInstallDeps = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ie, { title: "UI PREFERENCES" }, {
            default: a(() => [
              e("div", Ei, [
                l(ne, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.ui.theme,
                      "onUpdate:modelValue": E[12] || (E[12] = (U) => u.value.ui.theme = U),
                      options: b,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.ui.compactMode,
                      "onUpdate:modelValue": E[13] || (E[13] = (U) => u.value.ui.compactMode = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.ui.showFileExtensions,
                      "onUpdate:modelValue": E[14] || (E[14] = (U) => u.value.ui.showFileExtensions = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.ui.confirmDestructive,
                      "onUpdate:modelValue": E[15] || (E[15] = (U) => u.value.ui.confirmDestructive = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ie, { title: "ADVANCED" }, {
            default: a(() => [
              e("div", Li, [
                l(ne, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: a(() => [
                    l(ve, {
                      modelValue: u.value.advanced.debugMode,
                      "onUpdate:modelValue": E[16] || (E[16] = (U) => u.value.advanced.debugMode = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": E[17] || (E[17] = (U) => u.value.advanced.maxHistoryItems = U),
                      options: $,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(ne, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: u.value.advanced.cacheDuration,
                      "onUpdate:modelValue": E[18] || (E[18] = (U) => u.value.advanced.cacheDuration = U),
                      options: M,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i.value ? (o(), p(ze, {
            key: 0,
            variant: (i.value.type === "success", "compact")
          }, {
            default: a(() => [
              e("span", {
                style: Je({ color: i.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, r(i.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Mi = /* @__PURE__ */ W(Ni, [["__scopeId", "data-v-74f65bd5"]]), zi = { class: "log-filter-bar" }, Ri = { class: "log-filter-bar__options" }, Di = ["onClick"], Ti = /* @__PURE__ */ A({
  __name: "LogFilterBar",
  props: {
    activeLevels: {}
  },
  emits: ["toggle", "clear"],
  setup(t, { emit: c }) {
    const s = t, i = c, u = ["ERROR", "WARNING", "INFO", "DEBUG"];
    function h(g) {
      return s.activeLevels.includes(g);
    }
    function m(g) {
      i("toggle", g);
    }
    return (g, v) => (o(), n("div", zi, [
      v[1] || (v[1] = e("div", { class: "log-filter-bar__label" }, "FILTER:", -1)),
      e("div", Ri, [
        (o(), n(G, null, K(u, (y) => e("button", {
          key: y,
          class: q(["filter-option", { active: h(y) }]),
          onClick: (b) => m(y)
        }, r(y), 11, Di)), 64)),
        e("button", {
          class: "filter-option filter-option--clear",
          onClick: v[0] || (v[0] = (y) => g.$emit("clear"))
        }, " CLEAR ")
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ W(Ti, [["__scopeId", "data-v-9052edf8"]]), Bi = { class: "log-list" }, Vi = /* @__PURE__ */ A({
  __name: "LogList",
  setup(t) {
    return (c, s) => (o(), n("div", Bi, [
      ee(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), xt = /* @__PURE__ */ W(Vi, [["__scopeId", "data-v-0061c330"]]), Ui = { class: "log-level__icon" }, Oi = { class: "log-level__text" }, Pi = /* @__PURE__ */ A({
  __name: "LogLevel",
  props: {
    level: {}
  },
  setup(t) {
    const c = t, s = V(() => `log-level--${c.level.toLowerCase()}`), i = V(() => {
      switch (c.level) {
        case "ERROR":
          return "✕";
        case "WARNING":
          return "!";
        case "INFO":
          return "→";
        case "DEBUG":
          return "·";
        default:
          return "·";
      }
    });
    return (u, h) => (o(), n("span", {
      class: q(["log-level", s.value])
    }, [
      e("span", Ui, r(i.value), 1),
      e("span", Oi, r(t.level), 1)
    ], 2));
  }
}), Fi = /* @__PURE__ */ W(Pi, [["__scopeId", "data-v-8547c115"]]), Ai = { class: "log-item__header" }, Wi = { class: "log-item__timestamp" }, Gi = {
  key: 0,
  class: "log-item__context"
}, Hi = { class: "log-item__message" }, ji = /* @__PURE__ */ A({
  __name: "LogItem",
  props: {
    level: {},
    timestamp: {},
    message: {},
    context: {},
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const s = t, i = V(() => `log-item--${s.level.toLowerCase()}`);
    return (u, h) => (o(), n("div", {
      class: q(["log-item", i.value, { clickable: t.clickable }]),
      onClick: h[0] || (h[0] = (m) => t.clickable && u.$emit("click"))
    }, [
      e("div", Ai, [
        l(Fi, { level: t.level }, null, 8, ["level"]),
        e("span", Wi, r(t.timestamp), 1),
        t.context ? (o(), n("span", Gi, r(t.context), 1)) : d("", !0)
      ]),
      e("div", Hi, r(t.message), 1)
    ], 2));
  }
}), St = /* @__PURE__ */ W(ji, [["__scopeId", "data-v-adb291b1"]]), qi = {
  key: 2,
  class: "load-more"
}, Ki = /* @__PURE__ */ A({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = pe(), s = L([]), i = L(!1), u = L(null), h = L(!1), m = L(["ERROR", "WARNING", "INFO", "DEBUG"]), g = L(100), v = V(() => s.value.filter((S) => S.level === "ERROR").length), y = V(() => s.value.filter((S) => S.level === "WARNING").length), b = V(() => s.value.filter((S) => S.level === "INFO").length), $ = V(() => s.value.filter((S) => S.level === "DEBUG").length), M = V(() => s.value.filter((S) => m.value.includes(S.level))), z = V(() => M.value.slice(0, g.value)), B = V(() => M.value.length > g.value);
    function P(S) {
      const x = m.value.indexOf(S);
      x >= 0 ? m.value.splice(x, 1) : m.value.push(S);
    }
    function I() {
      m.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function E() {
      g.value += 100;
    }
    function U(S) {
      try {
        return new Date(S).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1
        });
      } catch {
        return S;
      }
    }
    async function j() {
      i.value = !0, u.value = null;
      try {
        s.value = await c(void 0, 500);
      } catch (S) {
        u.value = S instanceof Error ? S.message : "Failed to load workspace logs";
      } finally {
        i.value = !1;
      }
    }
    return ue(j), (S, x) => (o(), n(G, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (w) => h.value = !0)
          })
        ]),
        content: a(() => [
          i.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (o(), p(Ee, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            s.value.length > 0 ? (o(), p(ze, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + r(s.value.length) + " entries • " + r(v.value) + " errors • " + r(y.value) + " warnings • " + r(b.value) + " info • " + r($.value) + " debug ", 1)
              ]),
              _: 1
            })) : d("", !0),
            l(Ct, {
              "active-levels": m.value,
              onToggle: P,
              onClear: I
            }, null, 8, ["active-levels"]),
            M.value.length > 0 ? (o(), p(xt, { key: 1 }, {
              default: a(() => [
                (o(!0), n(G, null, K(z.value, (w, _) => (o(), p(St, {
                  key: `${w.timestamp}-${_}`,
                  level: w.level,
                  timestamp: U(w.timestamp),
                  message: w.message,
                  context: w.context
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : d("", !0),
            B.value ? (o(), n("div", qi, [
              l(T, {
                variant: "secondary",
                onClick: E
              }, {
                default: a(() => [
                  f(" Load More (" + r(M.value.length - g.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : d("", !0),
            s.value.length > 0 && M.value.length === 0 ? (o(), p(be, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : d("", !0),
            s.value.length === 0 ? (o(), p(be, {
              key: 4,
              icon: "📝",
              message: "No workspace logs available"
            })) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: h.value,
        title: "About Workspace Logs",
        onClose: x[2] || (x[2] = (w) => h.value = !1)
      }, {
        content: a(() => [...x[3] || (x[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            f(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            f(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: x[1] || (x[1] = (w) => h.value = !1)
          }, {
            default: a(() => [...x[4] || (x[4] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ji = /* @__PURE__ */ W(Ki, [["__scopeId", "data-v-55d656f1"]]), Yi = {
  key: 2,
  class: "load-more"
}, Xi = /* @__PURE__ */ A({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: s } = pe(), i = L([]), u = L(!1), h = L(null), m = L(!1), g = L(["ERROR", "WARNING", "INFO", "DEBUG"]), v = L(50), y = L("production"), b = V(() => i.value.filter((_) => g.value.includes(_.level.toUpperCase()))), $ = V(() => b.value.slice(0, v.value)), M = V(() => b.value.length > v.value), z = V(
      () => i.value.filter((_) => _.level.toUpperCase() === "ERROR").length
    ), B = V(
      () => i.value.filter((_) => _.level.toUpperCase() === "WARNING").length
    ), P = V(
      () => i.value.filter((_) => _.level.toUpperCase() === "INFO").length
    ), I = V(
      () => i.value.filter((_) => _.level.toUpperCase() === "DEBUG").length
    );
    function E(_) {
      const k = g.value.indexOf(_);
      k > -1 ? g.value.splice(k, 1) : g.value.push(_);
    }
    function U() {
      g.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function j() {
      v.value += 50;
    }
    function S(_) {
      return new Date(_).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      });
    }
    function x(_) {
      if (!_) return;
      const k = Object.entries(_);
      if (k.length === 0) return;
      const [R, O] = k[0];
      return typeof O == "string" || typeof O == "number" ? `${R}: ${O}` : R;
    }
    async function w() {
      u.value = !0, h.value = null;
      try {
        i.value = await c(void 0, 200), i.value.sort((_, k) => new Date(k.timestamp).getTime() - new Date(_.timestamp).getTime());
        try {
          const _ = await s();
          y.value = _.environment || "production";
        } catch {
        }
      } catch (_) {
        h.value = _ instanceof Error ? _.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    return ue(w), (_, k) => (o(), n(G, null, [
      l(ge, null, {
        header: a(() => [
          l(he, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = (R) => m.value = !0)
          })
        ]),
        content: a(() => [
          u.value ? (o(), p(Ie, {
            key: 0,
            message: "Loading environment logs..."
          })) : h.value ? (o(), p(Ee, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
            i.value.length > 0 ? (o(), p(ze, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + r(i.value.length) + " entries • " + r(z.value) + " errors • " + r(B.value) + " warnings • " + r(P.value) + " info • " + r(I.value) + " debug ", 1)
              ]),
              _: 1
            })) : d("", !0),
            l(Ct, {
              "active-levels": g.value,
              onToggle: E,
              onClear: U
            }, null, 8, ["active-levels"]),
            b.value.length > 0 ? (o(), p(xt, { key: 1 }, {
              default: a(() => [
                (o(!0), n(G, null, K($.value, (R, O) => (o(), p(St, {
                  key: `${R.timestamp}-${O}`,
                  level: R.level,
                  timestamp: S(R.timestamp),
                  message: R.message,
                  context: x(R.context)
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : d("", !0),
            M.value ? (o(), n("div", Yi, [
              l(T, {
                variant: "secondary",
                onClick: j
              }, {
                default: a(() => [
                  f(" Load More (" + r(b.value.length - v.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : d("", !0),
            i.value.length > 0 && b.value.length === 0 ? (o(), p(be, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : d("", !0),
            i.value.length === 0 ? (o(), p(be, {
              key: 4,
              icon: "📝",
              message: "No environment logs available"
            })) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: m.value,
        title: "About Environment Logs",
        onClose: k[2] || (k[2] = (R) => m.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            k[3] || (k[3] = f(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, r(y.value), 1),
            k[4] || (k[4] = f(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          k[5] || (k[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            f(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            f(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1)),
          k[6] || (k[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: k[1] || (k[1] = (R) => m.value = !1)
          }, {
            default: a(() => [...k[7] || (k[7] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qi = /* @__PURE__ */ W(Xi, [["__scopeId", "data-v-456b4c97"]]), Zi = { class: "env-title" }, er = {
  key: 0,
  class: "current-badge"
}, tr = {
  key: 0,
  class: "branch-info"
}, or = /* @__PURE__ */ A({
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
    return (c, s) => (o(), p(de, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        f(r(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", Zi, [
          e("span", null, r(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", er, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", tr, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          f(" " + r(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      details: a(() => [
        l(Q, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        l(Q, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        l(Q, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), p(Q, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : d("", !0)
      ]),
      actions: a(() => [
        ee(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), sr = /* @__PURE__ */ W(or, [["__scopeId", "data-v-5238e57c"]]), ar = {
  key: 0,
  class: "create-form"
}, nr = { class: "create-form__header" }, lr = { class: "create-form__body" }, ir = { class: "create-form__actions" }, rr = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, cr = /* @__PURE__ */ A({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: c }) {
    const s = c, { getEnvironments: i } = pe(), u = L([]), h = L(!1), m = L(null), g = L(""), v = L(!1), y = L(!1), b = L(""), $ = V(
      () => u.value.find((j) => j.is_current)
    ), M = V(() => {
      if (!g.value.trim()) return u.value;
      const j = g.value.toLowerCase();
      return u.value.filter(
        (S) => {
          var x;
          return S.name.toLowerCase().includes(j) || ((x = S.current_branch) == null ? void 0 : x.toLowerCase().includes(j));
        }
      );
    });
    function z(j) {
      if (!j) return "";
      try {
        const S = new Date(j), w = (/* @__PURE__ */ new Date()).getTime() - S.getTime(), _ = Math.floor(w / 6e4), k = Math.floor(w / 36e5), R = Math.floor(w / 864e5);
        return _ < 1 ? "just now" : _ < 60 ? `${_} ${_ === 1 ? "minute" : "minutes"} ago` : k < 24 ? `${k} ${k === 1 ? "hour" : "hours"} ago` : R < 30 ? `${R} ${R === 1 ? "day" : "days"} ago` : S.toLocaleDateString();
      } catch {
        return j;
      }
    }
    function B() {
      const j = b.value.trim();
      j && (s("create", j), b.value = "", y.value = !1);
    }
    function P() {
      b.value = "", y.value = !1;
    }
    function I(j) {
      s("viewDetails", j);
    }
    function E(j) {
      confirm(`Delete environment "${j}"?

This action cannot be undone.`) && s("delete", j);
    }
    async function U() {
      h.value = !0, m.value = null;
      try {
        u.value = await i();
      } catch (j) {
        m.value = j instanceof Error ? j.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return ue(U), (j, S) => {
      const x = Ht("SectionGroup");
      return o(), n(G, null, [
        l(ge, null, {
          header: a(() => [
            l(he, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: S[1] || (S[1] = (w) => v.value = !0)
            }, {
              actions: a(() => [
                l(T, {
                  variant: "ghost",
                  size: "sm",
                  onClick: S[0] || (S[0] = (w) => y.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...S[7] || (S[7] = [
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
                l(T, {
                  variant: "ghost",
                  size: "sm",
                  onClick: U,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...S[8] || (S[8] = [
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
            l(Ge, {
              modelValue: g.value,
              "onUpdate:modelValue": S[2] || (S[2] = (w) => g.value = w),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            h.value ? (o(), p(Ie, {
              key: 0,
              message: "Loading environments..."
            })) : m.value ? (o(), p(Ee, {
              key: 1,
              message: m.value,
              retry: !0,
              onRetry: U
            }, null, 8, ["message"])) : (o(), n(G, { key: 2 }, [
              y.value ? (o(), n("div", ar, [
                e("div", nr, [
                  S[10] || (S[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  l(T, {
                    variant: "ghost",
                    size: "xs",
                    onClick: P
                  }, {
                    default: a(() => [...S[9] || (S[9] = [
                      f(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", lr, [
                  l(Ae, {
                    modelValue: b.value,
                    "onUpdate:modelValue": S[3] || (S[3] = (w) => b.value = w),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Se(B, ["enter"]),
                      Se(P, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", ir, [
                    l(T, {
                      variant: "primary",
                      size: "sm",
                      onClick: B,
                      disabled: !b.value.trim()
                    }, {
                      default: a(() => [...S[11] || (S[11] = [
                        f(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: a(() => [...S[12] || (S[12] = [
                        f(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : d("", !0),
              u.value.length ? (o(), p(ze, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  f(" Total: " + r(u.value.length) + " " + r(u.value.length === 1 ? "environment" : "environments") + " ", 1),
                  $.value ? (o(), n(G, { key: 0 }, [
                    S[13] || (S[13] = f(" • Current: ", -1)),
                    e("strong", null, r($.value.name), 1)
                  ], 64)) : d("", !0)
                ]),
                _: 1
              })) : d("", !0),
              M.value.length ? (o(), p(x, {
                key: 2,
                title: "ENVIRONMENTS",
                count: M.value.length
              }, {
                default: a(() => [
                  (o(!0), n(G, null, K(M.value, (w) => (o(), p(sr, {
                    key: w.name,
                    "environment-name": w.name,
                    "is-current": w.is_current,
                    "current-branch": w.current_branch,
                    "workflow-count": w.workflow_count,
                    "node-count": w.node_count,
                    "model-count": w.model_count,
                    "last-used": z(w.last_used),
                    "show-last-used": !!w.last_used
                  }, {
                    actions: a(() => [
                      w.is_current ? d("", !0) : (o(), p(T, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (_) => j.$emit("switch", w.name)
                      }, {
                        default: a(() => [...S[14] || (S[14] = [
                          f(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      l(T, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (_) => I(w.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...S[15] || (S[15] = [
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
                      !w.is_current && u.value.length > 1 ? (o(), p(T, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (_) => E(w.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", rr, [...S[16] || (S[16] = [
                            e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : d("", !0),
              M.value.length ? d("", !0) : (o(), p(be, {
                key: 3,
                icon: "🌍",
                message: g.value ? `No environments match '${g.value}'` : "No environments found. Create one to get started!"
              }, bt({ _: 2 }, [
                g.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    l(T, {
                      variant: "primary",
                      onClick: S[4] || (S[4] = (w) => y.value = !0)
                    }, {
                      default: a(() => [...S[17] || (S[17] = [
                        f(" Create Environment ", -1)
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
        l(Re, {
          show: v.value,
          title: "About Environments",
          onClose: S[6] || (S[6] = (w) => v.value = !1)
        }, {
          content: a(() => [...S[18] || (S[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              f(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
            l(T, {
              variant: "secondary",
              onClick: S[5] || (S[5] = (w) => v.value = !1)
            }, {
              default: a(() => [...S[19] || (S[19] = [
                f(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), dr = /* @__PURE__ */ W(cr, [["__scopeId", "data-v-97d6527d"]]), ur = { class: "file-path" }, mr = { class: "file-path-text" }, vr = ["title"], fr = /* @__PURE__ */ A({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, s = L(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (u) {
        console.error("Failed to copy:", u);
      }
    }
    return (u, h) => (o(), n("div", ur, [
      h[0] || (h[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", mr, r(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, r(s.value ? "✓" : "📋"), 9, vr)) : d("", !0)
    ]));
  }
}), gr = /* @__PURE__ */ W(fr, [["__scopeId", "data-v-f0982173"]]), hr = { class: "output-path-input" }, pr = { class: "export-actions" }, yr = {
  key: 1,
  class: "export-warning"
}, wr = /* @__PURE__ */ A({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = pe(), s = L(""), i = L(!1), u = L(null), h = L(!1);
    async function m() {
      i.value = !0, u.value = null;
      try {
        const v = await c(s.value || void 0);
        u.value = v;
      } catch (v) {
        u.value = {
          status: "error",
          message: v instanceof Error ? v.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function g() {
      var v;
      if ((v = u.value) != null && v.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (y) {
          console.error("Failed to copy path:", y);
        }
    }
    return (v, y) => (o(), n(G, null, [
      l(ge, null, {
        header: a(() => [
          l(he, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              l(T, {
                variant: "ghost",
                size: "sm",
                onClick: y[0] || (y[0] = (b) => h.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...y[5] || (y[5] = [
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
          l(ie, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              l(de, { status: "synced" }, {
                icon: a(() => [...y[6] || (y[6] = [
                  f("📦", -1)
                ])]),
                title: a(() => [...y[7] || (y[7] = [
                  f("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...y[8] || (y[8] = [
                  f(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  l(Q, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  l(Q, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  l(Q, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  l(Q, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(ie, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              l(de, { status: "synced" }, {
                icon: a(() => [...y[9] || (y[9] = [
                  f("📁", -1)
                ])]),
                title: a(() => [...y[10] || (y[10] = [
                  f("Output Destination", -1)
                ])]),
                subtitle: a(() => [...y[11] || (y[11] = [
                  f(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", hr, [
                    l(Ae, {
                      modelValue: s.value,
                      "onUpdate:modelValue": y[1] || (y[1] = (b) => s.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(ie, { title: "EXPORT" }, {
            default: a(() => [
              e("div", pr, [
                l(T, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: m
                }, {
                  default: a(() => [
                    y[12] || (y[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    f(" " + r(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), p(T, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: y[2] || (y[2] = (b) => s.value = "")
                }, {
                  default: a(() => [...y[13] || (y[13] = [
                    f(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          u.value ? (o(), p(ie, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              l(de, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, bt({
                icon: a(() => [
                  f(r(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  f(r(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  f(r(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    l(Q, { label: "Saved to:" }, {
                      default: a(() => [
                        l(gr, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (o(), p(Q, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (o(), n("div", yr, [...y[14] || (y[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: g
                    }, {
                      default: a(() => [...y[15] || (y[15] = [
                        f(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    l(T, {
                      variant: "ghost",
                      size: "sm",
                      onClick: y[3] || (y[3] = (b) => u.value = null)
                    }, {
                      default: a(() => [...y[16] || (y[16] = [
                        f(" Dismiss ", -1)
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
      l(Re, {
        show: h.value,
        title: "About Environment Export",
        onClose: y[4] || (y[4] = (b) => h.value = !1)
      }, {
        content: a(() => [...y[17] || (y[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            f(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), br = /* @__PURE__ */ W(wr, [["__scopeId", "data-v-1777a9d5"]]), kr = { class: "file-input-wrapper" }, $r = ["accept", "multiple", "disabled"], _r = /* @__PURE__ */ A({
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
  setup(t, { expose: c, emit: s }) {
    const i = s, u = L(null);
    function h() {
      var g;
      (g = u.value) == null || g.click();
    }
    function m(g) {
      const v = g.target;
      v.files && v.files.length > 0 && (i("change", v.files), v.value = "");
    }
    return c({
      triggerInput: h
    }), (g, v) => (o(), n("div", kr, [
      e("input", {
        ref_key: "fileInputRef",
        ref: u,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, $r),
      l(T, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: h
      }, {
        default: a(() => [
          ee(g.$slots, "default", {}, () => [
            v[0] || (v[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            f(" " + r(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Cr = /* @__PURE__ */ W(_r, [["__scopeId", "data-v-cd192091"]]), xr = {
  key: 0,
  class: "drop-zone-empty"
}, Sr = { class: "drop-zone-text" }, Ir = { class: "drop-zone-primary" }, Er = { class: "drop-zone-secondary" }, Lr = { class: "drop-zone-actions" }, Nr = {
  key: 1,
  class: "drop-zone-file"
}, Mr = { class: "file-info" }, zr = { class: "file-details" }, Rr = { class: "file-name" }, Dr = { class: "file-size" }, Tr = /* @__PURE__ */ A({
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
    const s = c, i = L(!1), u = L(null), h = L(0), m = V(() => u.value !== null), g = V(() => {
      var I;
      return ((I = u.value) == null ? void 0 : I.name) || "";
    }), v = V(() => {
      if (!u.value) return "";
      const I = u.value.size;
      return I < 1024 ? `${I} B` : I < 1024 * 1024 ? `${(I / 1024).toFixed(1)} KB` : I < 1024 * 1024 * 1024 ? `${(I / (1024 * 1024)).toFixed(1)} MB` : `${(I / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function y(I) {
      var E;
      h.value++, (E = I.dataTransfer) != null && E.types.includes("Files") && (i.value = !0);
    }
    function b(I) {
      I.dataTransfer && (I.dataTransfer.dropEffect = "copy");
    }
    function $() {
      h.value--, h.value === 0 && (i.value = !1);
    }
    function M(I) {
      var U;
      h.value = 0, i.value = !1;
      const E = (U = I.dataTransfer) == null ? void 0 : U.files;
      E && E.length > 0 && B(E[0]);
    }
    function z(I) {
      I.length > 0 && B(I[0]);
    }
    function B(I) {
      u.value = I, s("fileSelected", I);
    }
    function P() {
      u.value = null, s("clear");
    }
    return (I, E) => (o(), n("div", {
      class: q(["file-drop-zone", { "drop-active": i.value, "has-file": m.value }]),
      onDragenter: fe(y, ["prevent"]),
      onDragover: fe(b, ["prevent"]),
      onDragleave: fe($, ["prevent"]),
      onDrop: fe(M, ["prevent"])
    }, [
      m.value ? (o(), n("div", Nr, [
        e("div", Mr, [
          E[1] || (E[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", zr, [
            e("div", Rr, r(g.value), 1),
            e("div", Dr, r(v.value), 1)
          ])
        ]),
        l(T, {
          variant: "ghost",
          size: "xs",
          onClick: P,
          title: "Remove file"
        }, {
          default: a(() => [...E[2] || (E[2] = [
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
      ])) : (o(), n("div", xr, [
        E[0] || (E[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Sr, [
          e("p", Ir, r(t.primaryText), 1),
          e("p", Er, r(t.secondaryText), 1)
        ]),
        e("div", Lr, [
          l(Cr, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: z
          }, {
            default: a(() => [
              f(r(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Br = /* @__PURE__ */ W(Tr, [["__scopeId", "data-v-e00abbca"]]), Vr = { class: "import-preview" }, Ur = { class: "preview-header" }, Or = {
  key: 0,
  class: "source-env"
}, Pr = { class: "preview-content" }, Fr = { class: "preview-section" }, Ar = { class: "section-header" }, Wr = { class: "section-info" }, Gr = { class: "section-count" }, Hr = {
  key: 0,
  class: "item-list"
}, jr = { class: "item-name" }, qr = {
  key: 0,
  class: "item-more"
}, Kr = { class: "preview-section" }, Jr = { class: "section-header" }, Yr = { class: "section-info" }, Xr = { class: "section-count" }, Qr = {
  key: 0,
  class: "item-list"
}, Zr = { class: "item-details" }, ec = { class: "item-name" }, tc = { class: "item-meta" }, oc = {
  key: 0,
  class: "item-more"
}, sc = { class: "preview-section" }, ac = { class: "section-header" }, nc = { class: "section-info" }, lc = { class: "section-count" }, ic = {
  key: 0,
  class: "item-list"
}, rc = { class: "item-name" }, cc = {
  key: 0,
  class: "item-more"
}, dc = {
  key: 0,
  class: "preview-section"
}, uc = { class: "git-info" }, mc = /* @__PURE__ */ A({
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
    const c = t, s = V(() => c.workflows.length), i = V(() => c.models.length), u = V(() => c.nodes.length);
    function h(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, g) => (o(), n("div", Vr, [
      e("div", Ur, [
        l(we, null, {
          default: a(() => [...g[0] || (g[0] = [
            f("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", Or, [
          g[1] || (g[1] = f(" From: ", -1)),
          l(Fe, null, {
            default: a(() => [
              f(r(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", Pr, [
        e("div", Fr, [
          e("div", Ar, [
            g[3] || (g[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Wr, [
              g[2] || (g[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Gr, r(s.value) + " file" + r(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", Hr, [
            (o(!0), n(G, null, K(t.workflows.slice(0, t.maxPreviewItems), (v) => (o(), n("div", {
              key: v,
              class: "preview-item"
            }, [
              g[4] || (g[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", jr, r(v), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", qr, " +" + r(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Kr, [
          e("div", Jr, [
            g[6] || (g[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Yr, [
              g[5] || (g[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Xr, r(i.value) + " file" + r(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Qr, [
            (o(!0), n(G, null, K(t.models.slice(0, t.maxPreviewItems), (v) => (o(), n("div", {
              key: v.filename,
              class: "preview-item"
            }, [
              g[7] || (g[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Zr, [
                e("span", ec, r(v.filename), 1),
                e("span", tc, r(h(v.size)) + " • " + r(v.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", oc, " +" + r(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", sc, [
          e("div", ac, [
            g[9] || (g[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", nc, [
              g[8] || (g[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", lc, r(u.value) + " node" + r(u.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", ic, [
            (o(!0), n(G, null, K(t.nodes.slice(0, t.maxPreviewItems), (v) => (o(), n("div", {
              key: v,
              class: "preview-item"
            }, [
              g[10] || (g[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", rc, r(v), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", cc, " +" + r(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", dc, [
          g[11] || (g[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", uc, [
            t.gitBranch ? (o(), p(Q, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                l(Fe, null, {
                  default: a(() => [
                    f(r(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (o(), p(Q, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                l(_t, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), vc = /* @__PURE__ */ W(mc, [["__scopeId", "data-v-182fe113"]]), fc = { class: "import-options" }, gc = { class: "options-container" }, hc = { class: "option-section" }, pc = { class: "conflict-options" }, yc = ["value", "checked", "onChange"], wc = { class: "conflict-content" }, bc = { class: "conflict-label" }, kc = { class: "conflict-description" }, $c = { class: "option-section" }, _c = { class: "component-toggles" }, Cc = /* @__PURE__ */ A({
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
    const s = c, i = [
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
    return (u, h) => (o(), n("div", fc, [
      l(we, null, {
        default: a(() => [...h[4] || (h[4] = [
          f("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", gc, [
        e("div", hc, [
          l(ct, null, {
            default: a(() => [...h[5] || (h[5] = [
              f("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", pc, [
            (o(), n(G, null, K(i, (m) => e("label", {
              key: m.value,
              class: q(["conflict-option", { active: t.conflictMode === m.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: m.value,
                checked: t.conflictMode === m.value,
                onChange: (g) => s("update:conflictMode", m.value)
              }, null, 40, yc),
              e("div", wc, [
                e("span", bc, r(m.label), 1),
                e("span", kc, r(m.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", $c, [
          l(ct, null, {
            default: a(() => [...h[6] || (h[6] = [
              f("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", _c, [
            l(ne, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                l(ve, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": h[0] || (h[0] = (m) => s("update:includeWorkflows", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(ne, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                l(ve, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": h[1] || (h[1] = (m) => s("update:includeModels", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(ne, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                l(ve, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": h[2] || (h[2] = (m) => s("update:includeNodes", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(ne, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                l(ve, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": h[3] || (h[3] = (m) => s("update:includeGitHistory", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), xc = /* @__PURE__ */ W(Cc, [["__scopeId", "data-v-0ec212b0"]]), Sc = {
  key: 0,
  class: "import-empty"
}, Ic = { class: "import-help" }, Ec = {
  key: 1,
  class: "import-configure"
}, Lc = { class: "selected-file-bar" }, Nc = { class: "file-bar-content" }, Mc = { class: "file-bar-info" }, zc = { class: "file-bar-name" }, Rc = { class: "file-bar-size" }, Dc = { class: "import-actions" }, Tc = {
  key: 2,
  class: "import-progress"
}, Bc = { class: "progress-content" }, Vc = { class: "progress-info" }, Uc = { class: "progress-title" }, Oc = { class: "progress-detail" }, Pc = { class: "progress-bar" }, Fc = { class: "progress-status" }, Ac = {
  key: 3,
  class: "import-complete"
}, Wc = { class: "complete-message" }, Gc = { class: "complete-title" }, Hc = { class: "complete-details" }, jc = { class: "complete-actions" }, qc = /* @__PURE__ */ A({
  __name: "ImportSection",
  setup(t) {
    const c = L(null), s = L(!1), i = L(!1), u = L(!1), h = L(""), m = L({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), g = L({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), v = L({
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
    }), y = V(() => m.value.includeWorkflows || m.value.includeModels || m.value.includeNodes || m.value.includeGitHistory);
    function b(P) {
      c.value = P;
    }
    function $() {
      c.value = null, i.value = !1, u.value = !1, h.value = "";
    }
    function M() {
      $(), s.value = !1, g.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function z() {
      if (c.value) {
        s.value = !0, i.value = !1;
        try {
          const P = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${v.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${v.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${v.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const I of P)
            g.value = I, await new Promise((E) => setTimeout(E, 800));
          g.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((I) => setTimeout(I, 500)), u.value = !0, h.value = `Successfully imported ${v.value.workflows.length} workflows, ${v.value.models.length} models, and ${v.value.nodes.length} custom nodes.`;
        } catch (P) {
          u.value = !1, h.value = P instanceof Error ? P.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function B(P) {
      return P < 1024 ? `${P} B` : P < 1024 * 1024 ? `${(P / 1024).toFixed(1)} KB` : P < 1024 * 1024 * 1024 ? `${(P / (1024 * 1024)).toFixed(1)} MB` : `${(P / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (P, I) => (o(), p(ge, null, {
      header: a(() => [
        l(he, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !c.value && !s.value ? (o(), n("div", Sc, [
          l(Br, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Ic, [
            l(we, null, {
              default: a(() => [...I[5] || (I[5] = [
                f("How to Import", -1)
              ])]),
              _: 1
            }),
            I[6] || (I[6] = e("div", { class: "help-content" }, [
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
        ])) : c.value && !s.value && !i.value ? (o(), n("div", Ec, [
          e("div", Lc, [
            e("div", Nc, [
              I[7] || (I[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Mc, [
                e("div", zc, r(c.value.name), 1),
                e("div", Rc, r(B(c.value.size)), 1)
              ])
            ]),
            l(T, {
              variant: "ghost",
              size: "sm",
              onClick: $
            }, {
              default: a(() => [...I[8] || (I[8] = [
                f(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          l(vc, {
            "source-environment": v.value.sourceEnvironment,
            workflows: v.value.workflows,
            models: v.value.models,
            nodes: v.value.nodes,
            "git-branch": v.value.gitBranch,
            "git-commit": v.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          l(xc, {
            "conflict-mode": m.value.conflictMode,
            "onUpdate:conflictMode": I[0] || (I[0] = (E) => m.value.conflictMode = E),
            "include-workflows": m.value.includeWorkflows,
            "onUpdate:includeWorkflows": I[1] || (I[1] = (E) => m.value.includeWorkflows = E),
            "include-models": m.value.includeModels,
            "onUpdate:includeModels": I[2] || (I[2] = (E) => m.value.includeModels = E),
            "include-nodes": m.value.includeNodes,
            "onUpdate:includeNodes": I[3] || (I[3] = (E) => m.value.includeNodes = E),
            "include-git-history": m.value.includeGitHistory,
            "onUpdate:includeGitHistory": I[4] || (I[4] = (E) => m.value.includeGitHistory = E)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !m.value.includeModels && v.value.models.length > 0 ? (o(), p(Ze, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${v.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", Dc, [
            l(T, {
              variant: "primary",
              size: "md",
              disabled: !y.value,
              onClick: z
            }, {
              default: a(() => [...I[9] || (I[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                f(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            l(T, {
              variant: "secondary",
              size: "md",
              onClick: $
            }, {
              default: a(() => [...I[10] || (I[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", Tc, [
          e("div", Bc, [
            I[11] || (I[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Vc, [
              e("div", Uc, r(g.value.message), 1),
              e("div", Oc, r(g.value.detail), 1)
            ])
          ]),
          e("div", Pc, [
            e("div", {
              class: "progress-bar-fill",
              style: Je({ width: `${g.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Fc, r(g.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), n("div", Ac, [
          e("div", {
            class: q(["complete-icon", u.value ? "success" : "error"])
          }, r(u.value ? "✓" : "✕"), 3),
          e("div", Wc, [
            e("div", Gc, r(u.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Hc, r(h.value), 1)
          ]),
          e("div", jc, [
            l(T, {
              variant: "primary",
              size: "md",
              onClick: M
            }, {
              default: a(() => [...I[12] || (I[12] = [
                f(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]),
      _: 1
    }));
  }
}), Kc = /* @__PURE__ */ W(qc, [["__scopeId", "data-v-18e18eb5"]]), Jc = { class: "header-info" }, Yc = { class: "commit-hash" }, Xc = {
  key: 0,
  class: "commit-refs"
}, Qc = { class: "commit-message" }, Zc = { class: "commit-date" }, ed = {
  key: 0,
  class: "loading"
}, td = {
  key: 1,
  class: "changes-section"
}, od = { class: "stats-row" }, sd = { class: "stat" }, ad = { class: "stat insertions" }, nd = { class: "stat deletions" }, ld = {
  key: 0,
  class: "change-group"
}, id = {
  key: 1,
  class: "change-group"
}, rd = {
  key: 0,
  class: "version"
}, cd = {
  key: 2,
  class: "change-group"
}, dd = { class: "change-item" }, ud = /* @__PURE__ */ A({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: s } = pe(), i = L(null), u = L(!0), h = V(() => {
      if (!i.value) return !1;
      const g = i.value.changes.workflows;
      return g.added.length > 0 || g.modified.length > 0 || g.deleted.length > 0;
    }), m = V(() => {
      if (!i.value) return !1;
      const g = i.value.changes.nodes;
      return g.added.length > 0 || g.removed.length > 0;
    });
    return ue(async () => {
      try {
        i.value = await s(c.commit.hash);
      } finally {
        u.value = !1;
      }
    }), (g, v) => (o(), p(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: v[3] || (v[3] = (y) => g.$emit("close"))
    }, {
      header: a(() => {
        var y, b, $, M;
        return [
          e("div", Jc, [
            v[4] || (v[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Yc, r(((y = i.value) == null ? void 0 : y.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (M = ($ = i.value) == null ? void 0 : $.refs) != null && M.length ? (o(), n("span", Xc, [
              (o(!0), n(G, null, K(i.value.refs, (z) => (o(), n("span", {
                key: z,
                class: "ref-badge"
              }, r(z), 1))), 128))
            ])) : d("", !0)
          ]),
          l(me, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (z) => g.$emit("close"))
          }, {
            default: a(() => [...v[5] || (v[5] = [
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
        var y, b;
        return [
          e("div", Qc, r(((y = i.value) == null ? void 0 : y.message) || t.commit.message), 1),
          e("div", Zc, r(((b = i.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          u.value ? (o(), n("div", ed, "Loading details...")) : i.value ? (o(), n("div", td, [
            e("div", od, [
              e("span", sd, r(i.value.stats.files_changed) + " files", 1),
              e("span", ad, "+" + r(i.value.stats.insertions), 1),
              e("span", nd, "-" + r(i.value.stats.deletions), 1)
            ]),
            h.value ? (o(), n("div", ld, [
              l(Me, { variant: "section" }, {
                default: a(() => [...v[6] || (v[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(G, null, K(i.value.changes.workflows.added, ($) => (o(), n("div", {
                key: "add-" + $,
                class: "change-item added"
              }, [
                v[7] || (v[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, r($), 1)
              ]))), 128)),
              (o(!0), n(G, null, K(i.value.changes.workflows.modified, ($) => (o(), n("div", {
                key: "mod-" + $,
                class: "change-item modified"
              }, [
                v[8] || (v[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, r($), 1)
              ]))), 128)),
              (o(!0), n(G, null, K(i.value.changes.workflows.deleted, ($) => (o(), n("div", {
                key: "del-" + $,
                class: "change-item deleted"
              }, [
                v[9] || (v[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, r($), 1)
              ]))), 128))
            ])) : d("", !0),
            m.value ? (o(), n("div", id, [
              l(Me, { variant: "section" }, {
                default: a(() => [...v[10] || (v[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(G, null, K(i.value.changes.nodes.added, ($) => (o(), n("div", {
                key: "add-" + $.name,
                class: "change-item added"
              }, [
                v[11] || (v[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, r($.name), 1),
                $.version ? (o(), n("span", rd, "(" + r($.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (o(!0), n(G, null, K(i.value.changes.nodes.removed, ($) => (o(), n("div", {
                key: "rem-" + $.name,
                class: "change-item deleted"
              }, [
                v[12] || (v[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, r($.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (o(), n("div", cd, [
              l(Me, { variant: "section" }, {
                default: a(() => [...v[13] || (v[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", dd, [
                v[14] || (v[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, r(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: a(() => [
        l(me, {
          variant: "secondary",
          onClick: v[1] || (v[1] = (y) => g.$emit("createBranch", t.commit))
        }, {
          default: a(() => [...v[15] || (v[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        l(me, {
          variant: "primary",
          onClick: v[2] || (v[2] = (y) => g.$emit("checkout", t.commit))
        }, {
          default: a(() => [...v[16] || (v[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), md = /* @__PURE__ */ W(ud, [["__scopeId", "data-v-d256ff6d"]]), vd = { class: "dialog-message" }, fd = {
  key: 0,
  class: "dialog-details"
}, gd = {
  key: 1,
  class: "dialog-warning"
}, hd = /* @__PURE__ */ A({
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
    return (c, s) => (o(), p(tt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => c.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", vd, r(t.message), 1),
        t.details && t.details.length ? (o(), n("div", fd, [
          (o(!0), n(G, null, K(t.details, (i, u) => (o(), n("div", {
            key: u,
            class: "detail-item"
          }, " • " + r(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (o(), n("p", gd, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + r(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: a(() => [
        l(me, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => c.$emit("cancel"))
        }, {
          default: a(() => [
            f(r(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), p(me, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => c.$emit("secondary"))
        }, {
          default: a(() => [
            f(r(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        l(me, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
        }, {
          default: a(() => [
            f(r(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), pd = /* @__PURE__ */ W(hd, [["__scopeId", "data-v-3670b9f5"]]), yd = { class: "base-textarea-wrapper" }, wd = ["value", "rows", "placeholder", "disabled", "maxlength"], bd = {
  key: 0,
  class: "base-textarea-count"
}, kd = /* @__PURE__ */ A({
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
    return (c, s) => (o(), n("div", yd, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Se(fe((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Se(fe((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, wd),
      t.showCharCount && t.maxLength ? (o(), n("div", bd, r(t.modelValue.length) + " / " + r(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ W(kd, [["__scopeId", "data-v-5516e6fc"]]), $d = { class: "popover-header" }, _d = { class: "popover-body" }, Cd = {
  key: 0,
  class: "changes-summary"
}, xd = {
  key: 0,
  class: "change-item"
}, Sd = {
  key: 1,
  class: "change-item"
}, Id = {
  key: 2,
  class: "change-item"
}, Ed = {
  key: 3,
  class: "change-item"
}, Ld = {
  key: 4,
  class: "change-item"
}, Nd = {
  key: 1,
  class: "no-changes"
}, Md = {
  key: 2,
  class: "loading"
}, zd = { class: "message-section" }, Rd = { class: "popover-footer" }, Dd = {
  key: 1,
  class: "commit-popover"
}, Td = { class: "popover-header" }, Bd = { class: "popover-body" }, Vd = {
  key: 0,
  class: "changes-summary"
}, Ud = {
  key: 0,
  class: "change-item"
}, Od = {
  key: 1,
  class: "change-item"
}, Pd = {
  key: 2,
  class: "change-item"
}, Fd = {
  key: 3,
  class: "change-item"
}, Ad = {
  key: 4,
  class: "change-item"
}, Wd = {
  key: 1,
  class: "no-changes"
}, Gd = {
  key: 2,
  class: "loading"
}, Hd = { class: "message-section" }, jd = { class: "popover-footer" }, qd = /* @__PURE__ */ A({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const s = t, i = c, { commit: u } = pe(), h = L(""), m = L(!1), g = L(null), v = V(() => {
      if (!s.status) return !1;
      const b = s.status.workflows;
      return b.new.length > 0 || b.modified.length > 0 || b.deleted.length > 0 || s.status.has_changes;
    });
    async function y() {
      var b, $, M;
      if (!(!v.value || !h.value.trim() || m.value)) {
        m.value = !0, g.value = null;
        try {
          const z = await u(h.value.trim());
          z.status === "success" ? (g.value = {
            type: "success",
            message: `Committed: ${((b = z.summary) == null ? void 0 : b.new) || 0} new, ${(($ = z.summary) == null ? void 0 : $.modified) || 0} modified, ${((M = z.summary) == null ? void 0 : M.deleted) || 0} deleted`
          }, h.value = "", setTimeout(() => i("committed"), 1e3)) : z.status === "no_changes" ? g.value = { type: "error", message: "No changes to commit" } : g.value = { type: "error", message: z.message || "Commit failed" };
        } catch (z) {
          g.value = { type: "error", message: z instanceof Error ? z.message : "Commit failed" };
        } finally {
          m.value = !1;
        }
      }
    }
    return (b, $) => t.asModal ? (o(), p(Ue, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: $[4] || ($[4] = (M) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: $[3] || ($[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", $d, [
            $[9] || ($[9] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: $[0] || ($[0] = (M) => i("close"))
            }, [...$[8] || ($[8] = [
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
          e("div", _d, [
            t.status && v.value ? (o(), n("div", Cd, [
              t.status.workflows.new.length ? (o(), n("div", xd, [
                $[10] || ($[10] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, r(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (o(), n("div", Sd, [
                $[11] || ($[11] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, r(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", Id, [
                $[12] || ($[12] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, r(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", Ed, [
                $[13] || ($[13] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, r(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", Ld, [
                $[14] || ($[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, r(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0)
            ])) : t.status ? (o(), n("div", Nd, " No changes to commit ")) : (o(), n("div", Md, " Loading... ")),
            e("div", zd, [
              l(yt, {
                modelValue: h.value,
                "onUpdate:modelValue": $[1] || ($[1] = (M) => h.value = M),
                placeholder: v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || m.value,
                rows: 3,
                onCtrlEnter: y
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            g.value ? (o(), n("div", {
              key: 3,
              class: q(["result", g.value.type])
            }, r(g.value.message), 3)) : d("", !0)
          ]),
          e("div", Rd, [
            l(me, {
              variant: "secondary",
              onClick: $[2] || ($[2] = (M) => i("close"))
            }, {
              default: a(() => [...$[15] || ($[15] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(me, {
              variant: "primary",
              disabled: !v.value || !h.value.trim() || m.value,
              loading: m.value,
              onClick: y
            }, {
              default: a(() => [
                f(r(m.value ? "Committing..." : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", Dd, [
      e("div", Td, [
        $[17] || ($[17] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: $[5] || ($[5] = (M) => i("close"))
        }, [...$[16] || ($[16] = [
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
      e("div", Bd, [
        t.status && v.value ? (o(), n("div", Vd, [
          t.status.workflows.new.length ? (o(), n("div", Ud, [
            $[18] || ($[18] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, r(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (o(), n("div", Od, [
            $[19] || ($[19] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, r(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", Pd, [
            $[20] || ($[20] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, r(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", Fd, [
            $[21] || ($[21] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, r(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", Ad, [
            $[22] || ($[22] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, r(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : t.status ? (o(), n("div", Wd, " No changes to commit ")) : (o(), n("div", Gd, " Loading... ")),
        e("div", Hd, [
          l(yt, {
            modelValue: h.value,
            "onUpdate:modelValue": $[6] || ($[6] = (M) => h.value = M),
            placeholder: v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || m.value,
            rows: 3,
            onCtrlEnter: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        g.value ? (o(), n("div", {
          key: 3,
          class: q(["result", g.value.type])
        }, r(g.value.message), 3)) : d("", !0)
      ]),
      e("div", jd, [
        l(me, {
          variant: "secondary",
          onClick: $[7] || ($[7] = (M) => i("close"))
        }, {
          default: a(() => [...$[23] || ($[23] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        l(me, {
          variant: "primary",
          disabled: !v.value || !h.value.trim() || m.value,
          loading: m.value,
          onClick: y
        }, {
          default: a(() => [
            f(r(m.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), It = /* @__PURE__ */ W(qd, [["__scopeId", "data-v-a8e2ae3a"]]), Kd = { class: "modal-header" }, Jd = { class: "modal-body" }, Yd = { class: "switch-message" }, Xd = { class: "switch-details" }, Qd = { class: "modal-actions" }, Zd = /* @__PURE__ */ A({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, s) => (o(), p(Ue, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Kd, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Jd, [
            e("p", Yd, [
              s[6] || (s[6] = f(" Switch from ", -1)),
              e("strong", null, r(t.fromEnvironment), 1),
              s[7] || (s[7] = f(" to ", -1)),
              e("strong", null, r(t.toEnvironment), 1),
              s[8] || (s[8] = f("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Xd, ' Your current work will be preserved. You can switch back to "' + r(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Qd, [
            l(T, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => c.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(T, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                f(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), eu = /* @__PURE__ */ W(Zd, [["__scopeId", "data-v-e9c5253e"]]), tu = { class: "progress-bar" }, ou = /* @__PURE__ */ A({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, s = V(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, u) => (o(), n("div", tu, [
      e("div", {
        class: q(["progress-fill", t.variant]),
        style: Je({ width: s.value })
      }, null, 6)
    ]));
  }
}), su = /* @__PURE__ */ W(ou, [["__scopeId", "data-v-1beb0512"]]), au = {
  key: 0,
  class: "modal-overlay"
}, nu = { class: "modal-content" }, lu = { class: "modal-body" }, iu = { class: "progress-info" }, ru = { class: "progress-percentage" }, cu = { class: "progress-state" }, du = { class: "switch-steps" }, uu = { class: "step-icon" }, mu = { class: "step-label" }, vu = /* @__PURE__ */ A({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, s = V(() => {
      const h = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return c.message || h[c.state] || c.state;
    }), i = V(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), u = V(() => {
      const h = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = h.findIndex((g) => g.state === c.state);
      return h.map((g, v) => {
        let y = "pending", b = "○";
        return v < m ? (y = "completed", b = "✓") : v === m && (y = "active", b = "⟳"), {
          ...g,
          status: y,
          icon: b
        };
      });
    });
    return (h, m) => (o(), p(Ue, { to: "body" }, [
      t.show ? (o(), n("div", au, [
        e("div", nu, [
          m[1] || (m[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", lu, [
            l(su, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", iu, [
              e("div", ru, r(t.progress) + "%", 1),
              e("div", cu, r(s.value), 1)
            ]),
            e("div", du, [
              (o(!0), n(G, null, K(u.value, (g) => (o(), n("div", {
                key: g.state,
                class: q(["switch-step", g.status])
              }, [
                e("span", uu, r(g.icon), 1),
                e("span", mu, r(g.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), fu = /* @__PURE__ */ W(vu, [["__scopeId", "data-v-768a5078"]]), gu = { class: "modal-header" }, hu = { class: "modal-body" }, pu = {
  key: 0,
  class: "node-section"
}, yu = { class: "node-list" }, wu = {
  key: 1,
  class: "node-section"
}, bu = { class: "node-list" }, ku = { class: "modal-actions" }, $u = /* @__PURE__ */ A({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, s) => (o(), p(Ue, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", gu, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", hu, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", pu, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", yu, [
                (o(!0), n(G, null, K(t.mismatchDetails.missing_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + r(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", wu, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", bu, [
                (o(!0), n(G, null, K(t.mismatchDetails.extra_nodes, (i) => (o(), n("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + r(i), 1))), 128))
              ])
            ])) : d("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", ku, [
            l(T, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => c.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(T, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => c.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                f(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), _u = /* @__PURE__ */ W($u, [["__scopeId", "data-v-7cad7518"]]);
async function je(t, c = {}, s = 5e3) {
  const i = new AbortController(), u = setTimeout(() => i.abort(), s);
  try {
    const h = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(u), h;
  } catch (h) {
    throw clearTimeout(u), h.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : h;
  }
}
function Cu() {
  const t = L(null);
  async function c() {
    try {
      const m = await je(
        "http://127.0.0.1:8188/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (m.ok)
        return (await m.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const m = await je(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Health check failed");
      return await m.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const m = await je(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Failed to get status");
      return await m.json();
    } catch {
      return null;
    }
  }
  async function u() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await je(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function h() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await je(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: c,
    checkHealth: s,
    getStatus: i,
    restart: u,
    kill: h
  };
}
const xu = { class: "comfygit-panel" }, Su = { class: "panel-header" }, Iu = { class: "header-left" }, Eu = {
  key: 0,
  class: "header-info"
}, Lu = { class: "header-actions" }, Nu = { class: "env-switcher" }, Mu = {
  key: 0,
  class: "header-info"
}, zu = { class: "branch-name" }, Ru = { class: "panel-main" }, Du = { class: "sidebar" }, Tu = { class: "sidebar-section" }, Bu = { class: "sidebar-section" }, Vu = { class: "sidebar-section" }, Uu = { class: "content-area" }, Ou = {
  key: 0,
  class: "error-message"
}, Pu = {
  key: 1,
  class: "loading"
}, Fu = { class: "dialog-content env-selector-dialog" }, Au = { class: "dialog-header" }, Wu = { class: "dialog-body" }, Gu = { class: "env-list" }, Hu = { class: "env-info" }, ju = { class: "env-name-row" }, qu = { class: "env-indicator" }, Ku = { class: "env-name" }, Ju = {
  key: 0,
  class: "env-branch"
}, Yu = {
  key: 1,
  class: "current-label"
}, Xu = { class: "env-stats" }, Qu = ["onClick"], Zu = { class: "toast-container" }, em = { class: "toast-icon" }, tm = { class: "toast-message" }, om = /* @__PURE__ */ A({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const s = c, {
      getStatus: i,
      getHistory: u,
      getBranches: h,
      checkout: m,
      createBranch: g,
      switchBranch: v,
      getEnvironments: y,
      switchEnvironment: b,
      getSwitchProgress: $,
      syncEnvironmentManually: M
    } = pe(), z = Cu(), B = L(null), P = L([]), I = L([]), E = L([]), U = V(() => E.value.find((D) => D.is_current)), j = L(!1), S = L(null), x = L(null), w = L(!1), _ = L(!1), k = L(!1), R = L(""), O = L({ state: "idle", progress: 0, message: "" });
    let re = null, H = null;
    const N = L("status"), J = L("this-env");
    function te(D, C) {
      N.value = D, J.value = C;
    }
    function Oe(D) {
      const oe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[D];
      oe && te(oe.view, oe.section);
    }
    function Pe() {
      te("branches", "this-env");
    }
    const ce = L(null), Z = L(!1), De = L(!1), Le = L([]);
    let ot = 0;
    function ae(D, C = "info", oe = 3e3) {
      const le = ++ot;
      return Le.value.push({ id: le, message: D, type: C }), oe > 0 && setTimeout(() => {
        Le.value = Le.value.filter((ke) => ke.id !== le);
      }, oe), le;
    }
    function Ce(D) {
      Le.value = Le.value.filter((C) => C.id !== D);
    }
    function st(D) {
      switch (D) {
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
    const F = V(() => {
      if (!B.value) return "neutral";
      const D = B.value.workflows, C = D.new.length > 0 || D.modified.length > 0 || D.deleted.length > 0 || B.value.has_changes;
      return B.value.comparison.is_synced ? C ? "warning" : "success" : "error";
    });
    V(() => B.value ? F.value === "success" ? "All synced" : F.value === "warning" ? "Uncommitted changes" : F.value === "error" ? "Not synced" : "" : "");
    async function Y() {
      j.value = !0, S.value = null;
      try {
        const [D, C, oe, le] = await Promise.all([
          i(),
          u(),
          h(),
          y()
        ]);
        B.value = D, P.value = C.commits, I.value = oe.branches, E.value = le, s("statusUpdate", D);
      } catch (D) {
        S.value = D instanceof Error ? D.message : "Failed to load status", B.value = null, P.value = [], I.value = [];
      } finally {
        j.value = !1;
      }
    }
    function se(D) {
      x.value = D;
    }
    async function He(D) {
      var oe;
      x.value = null;
      const C = B.value && (B.value.workflows.new.length > 0 || B.value.workflows.modified.length > 0 || B.value.workflows.deleted.length > 0 || B.value.has_changes);
      ce.value = {
        title: C ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: C ? "You have uncommitted changes that will be lost." : `Checkout commit ${D.short_hash || ((oe = D.hash) == null ? void 0 : oe.slice(0, 7))}?`,
        details: C ? gt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: C ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: C,
        onConfirm: async () => {
          var $e;
          ce.value = null;
          const le = ae(`Checking out ${D.short_hash || (($e = D.hash) == null ? void 0 : $e.slice(0, 7))}...`, "info", 0), ke = await m(D.hash, C);
          Ce(le), ke.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(ke.message || "Checkout failed", "error");
        }
      };
    }
    async function Ye(D) {
      const C = B.value && (B.value.workflows.new.length > 0 || B.value.workflows.modified.length > 0 || B.value.workflows.deleted.length > 0 || B.value.has_changes);
      ce.value = {
        title: C ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: C ? "You have uncommitted changes." : `Switch to branch "${D}"?`,
        details: C ? gt() : void 0,
        warning: C ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: C ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ce.value = null;
          const oe = ae(`Switching to ${D}...`, "info", 0), le = await v(D, C);
          Ce(oe), le.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(le.message || "Branch switch failed", "error");
        }
      };
    }
    async function zt(D) {
      const C = ae(`Creating branch ${D}...`, "info", 0), oe = await g(D);
      Ce(C), oe.status === "success" ? (ae(`Branch "${D}" created`, "success"), await Y()) : ae(oe.message || "Failed to create branch", "error");
    }
    async function Rt(D) {
      x.value = null;
      const C = prompt("Enter branch name:");
      if (C) {
        const oe = ae(`Creating branch ${C}...`, "info", 0), le = await g(C, D.hash);
        Ce(oe), le.status === "success" ? (ae(`Branch "${C}" created from ${D.short_hash}`, "success"), await Y()) : ae(le.message || "Failed to create branch", "error");
      }
    }
    async function ft(D) {
      w.value = !1, R.value = D, _.value = !0;
    }
    async function Dt() {
      _.value = !1, k.value = !0, O.value = {
        progress: 10,
        state: Xe(10),
        message: Qe(10)
      };
      try {
        await b(R.value), Tt(), Bt();
      } catch (D) {
        Te(), k.value = !1, ae(`Failed to initiate switch: ${D instanceof Error ? D.message : "Unknown error"}`, "error"), O.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Xe(D) {
      return D >= 100 ? "complete" : D >= 80 ? "validating" : D >= 60 ? "starting" : D >= 30 ? "syncing" : "preparing";
    }
    function Qe(D) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Xe(D)] || "";
    }
    function Tt() {
      if (H) return;
      let D = 10;
      const C = 60, oe = 5e3, le = 100, ke = (C - D) / (oe / le);
      H = window.setInterval(() => {
        if (D += ke, D >= C && (D = C, Te()), O.value.progress < C) {
          const $e = Math.floor(D);
          O.value = {
            progress: $e,
            state: Xe($e),
            message: Qe($e)
          };
        }
      }, le);
    }
    function Te() {
      H && (clearInterval(H), H = null);
    }
    function Bt() {
      re || (re = window.setInterval(async () => {
        try {
          let D = await z.getStatus();
          if ((!D || D.state === "idle") && (D = await $()), !D)
            return;
          const C = D.progress || 0;
          C >= 60 && Te();
          const oe = Math.max(C, O.value.progress), le = D.state && D.state !== "idle" && D.state !== "unknown", ke = le ? D.state : Xe(oe), $e = le && D.message || Qe(oe);
          O.value = {
            state: ke,
            progress: oe,
            message: $e
          }, D.state === "complete" ? (Te(), at(), k.value = !1, ae(`✓ Switched to ${R.value}`, "success"), await Y(), R.value = "") : D.state === "rolled_back" ? (Te(), at(), k.value = !1, ae("Switch failed, restored previous environment", "warning"), R.value = "") : D.state === "critical_failure" && (Te(), at(), k.value = !1, ae(`Critical error during switch: ${D.message}`, "error"), R.value = "");
        } catch (D) {
          console.error("Failed to poll switch progress:", D);
        }
      }, 1e3));
    }
    function at() {
      Te(), re && (clearInterval(re), re = null);
    }
    function Vt() {
      _.value = !1, R.value = "";
    }
    async function Ut() {
      Z.value = !1, await Y(), ae("✓ Changes committed", "success");
    }
    async function Ot() {
      De.value = !1;
      const D = ae("Syncing environment...", "info", 0);
      try {
        const C = await M("skip", !0);
        if (Ce(D), C.status === "success") {
          const oe = [];
          C.nodes_installed.length && oe.push(`${C.nodes_installed.length} installed`), C.nodes_removed.length && oe.push(`${C.nodes_removed.length} removed`);
          const le = oe.length ? `: ${oe.join(", ")}` : "";
          ae(`✓ Environment synced${le}`, "success"), await Y();
        } else {
          const oe = C.errors.length ? C.errors.join("; ") : C.message;
          ae(`Sync failed: ${oe}`, "error");
        }
      } catch (C) {
        Ce(D), ae(`Sync error: ${C instanceof Error ? C.message : "Unknown error"}`, "error");
      }
    }
    async function Pt(D) {
      const C = ae(`Creating environment "${D}"...`, "info", 0);
      Ce(C), ae("Environment creation not yet implemented", "warning");
    }
    async function Ft(D) {
      const C = ae(`Deleting environment "${D}"...`, "info", 0);
      Ce(C), ae("Environment deletion not yet implemented", "warning");
    }
    function At(D) {
      ae(`Viewing details for "${D}"`, "info"), te("models-env", "this-env");
    }
    function gt() {
      if (!B.value) return [];
      const D = [], C = B.value.workflows;
      return C.new.length && D.push(`${C.new.length} new workflow(s)`), C.modified.length && D.push(`${C.modified.length} modified workflow(s)`), C.deleted.length && D.push(`${C.deleted.length} deleted workflow(s)`), D;
    }
    return ue(Y), (D, C) => {
      var oe, le, ke, $e;
      return o(), n("div", xu, [
        e("div", Su, [
          e("div", Iu, [
            C[28] || (C[28] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            B.value ? (o(), n("div", Eu)) : d("", !0)
          ]),
          e("div", Lu, [
            e("button", {
              class: q(["icon-btn", { spinning: j.value }]),
              onClick: Y,
              title: "Refresh"
            }, [...C[29] || (C[29] = [
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
              onClick: C[0] || (C[0] = (X) => s("close")),
              title: "Close"
            }, [...C[30] || (C[30] = [
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
        e("div", Nu, [
          C[32] || (C[32] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: C[1] || (C[1] = (X) => te("environments", "all-envs"))
          }, [
            B.value ? (o(), n("div", Mu, [
              e("span", null, r(((oe = U.value) == null ? void 0 : oe.name) || ((le = B.value) == null ? void 0 : le.environment) || "Loading..."), 1),
              e("span", zu, "(" + r(B.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            C[31] || (C[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Ru, [
          e("div", Du, [
            e("div", Tu, [
              C[33] || (C[33] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "status" && J.value === "this-env" }]),
                onClick: C[2] || (C[2] = (X) => te("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "workflows" }]),
                onClick: C[3] || (C[3] = (X) => te("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "models-env" }]),
                onClick: C[4] || (C[4] = (X) => te("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "branches" }]),
                onClick: C[5] || (C[5] = (X) => te("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "history" }]),
                onClick: C[6] || (C[6] = (X) => te("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "nodes" }]),
                onClick: C[7] || (C[7] = (X) => te("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "debug-env" }]),
                onClick: C[8] || (C[8] = (X) => te("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            C[36] || (C[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Bu, [
              C[34] || (C[34] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "environments" }]),
                onClick: C[9] || (C[9] = (X) => te("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "model-index" }]),
                onClick: C[10] || (C[10] = (X) => te("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "settings" }]),
                onClick: C[11] || (C[11] = (X) => te("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "debug-workspace" }]),
                onClick: C[12] || (C[12] = (X) => te("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            C[37] || (C[37] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Vu, [
              C[35] || (C[35] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "export" }]),
                onClick: C[13] || (C[13] = (X) => te("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "import" }]),
                onClick: C[14] || (C[14] = (X) => te("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: q(["sidebar-item", { active: N.value === "remotes" }]),
                onClick: C[15] || (C[15] = (X) => te("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Uu, [
            S.value ? (o(), n("div", Ou, r(S.value), 1)) : !B.value && N.value === "status" ? (o(), n("div", Pu, " Loading status... ")) : (o(), n(G, { key: 2 }, [
              N.value === "status" ? (o(), p(ua, {
                key: 0,
                status: B.value,
                onSwitchBranch: Pe,
                onCommitChanges: C[16] || (C[16] = (X) => Z.value = !0),
                onSyncEnvironment: C[17] || (C[17] = (X) => De.value = !0),
                onViewWorkflows: C[18] || (C[18] = (X) => te("workflows", "this-env")),
                onViewHistory: C[19] || (C[19] = (X) => te("history", "this-env")),
                onViewDebug: C[20] || (C[20] = (X) => te("debug-env", "this-env")),
                onResolveModels: C[21] || (C[21] = (X) => te("workflows", "this-env"))
              }, null, 8, ["status"])) : N.value === "workflows" ? (o(), p(bl, {
                key: 1,
                onRefresh: Y
              })) : N.value === "models-env" ? (o(), p(El, {
                key: 2,
                onNavigate: Oe
              })) : N.value === "branches" ? (o(), p(Sa, {
                key: 3,
                branches: I.value,
                current: ((ke = B.value) == null ? void 0 : ke.branch) || null,
                onSwitch: Ye,
                onCreate: zt
              }, null, 8, ["branches", "current"])) : N.value === "history" ? (o(), p(Va, {
                key: 4,
                commits: P.value,
                onSelect: se,
                onCheckout: He
              }, null, 8, ["commits"])) : N.value === "nodes" ? (o(), p(Tl, { key: 5 })) : N.value === "debug-env" ? (o(), p(Qi, { key: 6 })) : N.value === "environments" ? (o(), p(dr, {
                key: 7,
                onSwitch: ft,
                onCreate: Pt,
                onDelete: Ft,
                onViewDetails: At
              })) : N.value === "model-index" ? (o(), p(Nl, { key: 8 })) : N.value === "settings" ? (o(), p(Mi, { key: 9 })) : N.value === "debug-workspace" ? (o(), p(Ji, { key: 10 })) : N.value === "export" ? (o(), p(br, { key: 11 })) : N.value === "import" ? (o(), p(Kc, { key: 12 })) : N.value === "remotes" ? (o(), p(fi, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        x.value ? (o(), p(md, {
          key: 0,
          commit: x.value,
          onClose: C[22] || (C[22] = (X) => x.value = null),
          onCheckout: He,
          onCreateBranch: Rt
        }, null, 8, ["commit"])) : d("", !0),
        ce.value ? (o(), p(pd, {
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
          onCancel: C[23] || (C[23] = (X) => ce.value = null),
          onSecondary: ce.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        l(eu, {
          show: _.value,
          "from-environment": (($e = U.value) == null ? void 0 : $e.name) || "unknown",
          "to-environment": R.value,
          onConfirm: Dt,
          onClose: Vt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Z.value && B.value ? (o(), p(It, {
          key: 2,
          status: B.value,
          "as-modal": !0,
          onClose: C[24] || (C[24] = (X) => Z.value = !1),
          onCommitted: Ut
        }, null, 8, ["status"])) : d("", !0),
        De.value && B.value ? (o(), p(_u, {
          key: 3,
          show: De.value,
          "mismatch-details": {
            missing_nodes: B.value.comparison.missing_nodes,
            extra_nodes: B.value.comparison.extra_nodes
          },
          onConfirm: Ot,
          onClose: C[25] || (C[25] = (X) => De.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        l(fu, {
          show: k.value,
          state: O.value.state,
          progress: O.value.progress,
          message: O.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        w.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: C[27] || (C[27] = fe((X) => w.value = !1, ["self"]))
        }, [
          e("div", Fu, [
            e("div", Au, [
              C[39] || (C[39] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: C[26] || (C[26] = (X) => w.value = !1)
              }, [...C[38] || (C[38] = [
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
            e("div", Wu, [
              C[40] || (C[40] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Gu, [
                (o(!0), n(G, null, K(E.value, (X) => (o(), n("div", {
                  key: X.name,
                  class: q(["env-item", { current: X.is_current }])
                }, [
                  e("div", Hu, [
                    e("div", ju, [
                      e("span", qu, r(X.is_current ? "●" : "○"), 1),
                      e("span", Ku, r(X.name), 1),
                      X.current_branch ? (o(), n("span", Ju, "(" + r(X.current_branch) + ")", 1)) : d("", !0),
                      X.is_current ? (o(), n("span", Yu, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Xu, r(X.workflow_count) + " workflows • " + r(X.node_count) + " nodes ", 1)
                  ]),
                  X.is_current ? d("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (fm) => ft(X.name)
                  }, " SWITCH ", 8, Qu))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        e("div", Zu, [
          l(jt, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(G, null, K(Le.value, (X) => (o(), n("div", {
                key: X.id,
                class: q(["toast", X.type])
              }, [
                e("span", em, r(st(X.type)), 1),
                e("span", tm, r(X.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), sm = /* @__PURE__ */ W(om, [["__scopeId", "data-v-0bc7ca73"]]), am = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', nm = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', lm = {
  comfy: am,
  phosphor: nm
}, mt = "comfy", Et = "comfygit-theme";
let Be = null, Lt = mt;
function im() {
  try {
    const t = localStorage.getItem(Et);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return mt;
}
function Nt(t = mt) {
  Be && Be.remove(), Be = document.createElement("style"), Be.id = "comfygit-theme-styles", Be.setAttribute("data-theme", t), Be.textContent = lm[t], document.head.appendChild(Be), document.body.setAttribute("data-comfygit-theme", t), Lt = t;
  try {
    localStorage.setItem(Et, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function rm() {
  return Lt;
}
function cm(t) {
  Nt(t);
}
const vt = document.createElement("link");
vt.rel = "stylesheet";
vt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(vt);
const dm = im();
Nt(dm);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), cm(t);
  },
  getTheme: () => {
    const t = rm();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let _e = null, ye = null, Ke = null;
const We = L(null);
async function dt() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const c = await window.app.api.fetchApi("/v2/comfygit/status");
    c.ok && (We.value = await c.json());
  } catch {
  }
}
function um() {
  if (!We.value) return !1;
  const t = We.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || We.value.has_changes;
}
function mm() {
  _e && _e.remove(), _e = document.createElement("div"), _e.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", _e.appendChild(t), _e.addEventListener("click", (i) => {
    i.target === _e && rt();
  });
  const c = (i) => {
    i.key === "Escape" && (rt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), kt({
    render: () => $t(sm, {
      onClose: rt,
      onStatusUpdate: (i) => {
        We.value = i, et();
      }
    })
  }).mount(t), document.body.appendChild(_e);
}
function rt() {
  _e && (_e.remove(), _e = null);
}
function vm(t) {
  qe(), ye = document.createElement("div"), ye.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  ye.style.position = "fixed", ye.style.top = `${c.bottom + 8}px`, ye.style.right = `${window.innerWidth - c.right}px`, ye.style.zIndex = "10001";
  const s = (u) => {
    ye && !ye.contains(u.target) && u.target !== t && (qe(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (u) => {
    u.key === "Escape" && (qe(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Ke = kt({
    render: () => $t(It, {
      status: We.value,
      onClose: qe,
      onCommitted: () => {
        qe(), dt().then(et);
      }
    })
  }), Ke.mount(ye), document.body.appendChild(ye);
}
function qe() {
  Ke && (Ke.unmount(), Ke = null), ye && (ye.remove(), ye = null);
}
let xe = null;
function et() {
  if (!xe) return;
  const t = xe.querySelector(".commit-indicator");
  t && (t.style.display = um() ? "block" : "none");
}
const Mt = document.createElement("style");
Mt.textContent = `
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
document.head.appendChild(Mt);
nt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, i;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = mm, xe = document.createElement("button"), xe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", xe.innerHTML = 'Commit <span class="commit-indicator"></span>', xe.title = "Quick Commit", xe.onclick = () => vm(xe), t.appendChild(c), t.appendChild(xe), (i = (s = nt.menu) == null ? void 0 : s.settingsGroup) != null && i.element && (nt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await dt(), et(), setInterval(async () => {
      await dt(), et();
    }, 3e4);
  }
});
