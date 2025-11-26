import { app as tt } from "../../scripts/app.js";
import { defineComponent as Q, createElementBlock as n, openBlock as o, createCommentVNode as u, createElementVNode as e, renderSlot as re, createBlock as E, resolveDynamicComponent as It, normalizeClass as se, withCtx as a, toDisplayString as l, createVNode as v, createTextVNode as h, computed as B, Fragment as j, renderList as oe, normalizeStyle as qe, ref as C, onMounted as we, watch as Et, Teleport as _e, withModifiers as pe, Transition as ao, withKeys as We, onUnmounted as lo, reactive as Vt, readonly as io, unref as ce, withDirectives as ro, vModelText as co, resolveComponent as uo, createSlots as At, TransitionGroup as mo, createApp as Mt, h as zt } from "vue";
const vo = { class: "panel-layout" }, fo = {
  key: 0,
  class: "panel-layout-header"
}, go = {
  key: 1,
  class: "panel-layout-search"
}, ho = { class: "panel-layout-content" }, po = {
  key: 2,
  class: "panel-layout-footer"
}, yo = /* @__PURE__ */ Q({
  __name: "PanelLayout",
  setup(t) {
    return (d, s) => (o(), n("div", vo, [
      d.$slots.header ? (o(), n("div", fo, [
        re(d.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      d.$slots.search ? (o(), n("div", go, [
        re(d.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      e("div", ho, [
        re(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), n("div", po, [
        re(d.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), X = (t, d) => {
  const s = t.__vccOpts || t;
  for (const [r, f] of d)
    s[r] = f;
  return s;
}, Ce = /* @__PURE__ */ X(yo, [["__scopeId", "data-v-21565df9"]]), wo = {
  key: 0,
  class: "panel-title-prefix"
}, bo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ko = /* @__PURE__ */ Q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (d, s) => (o(), E(It(`h${t.level}`), {
      class: se(["panel-title", t.variant])
    }, {
      default: a(() => [
        t.showPrefix ? (o(), n("span", wo, l(t.prefix), 1)) : (o(), n("span", bo)),
        re(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _o = /* @__PURE__ */ X(ko, [["__scopeId", "data-v-c3875efc"]]), $o = ["title"], Co = ["width", "height"], xo = /* @__PURE__ */ Q({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), n("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (r) => d.$emit("click"))
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
      ])], 8, Co))
    ], 8, $o));
  }
}), Ft = /* @__PURE__ */ X(xo, [["__scopeId", "data-v-6fc7f16d"]]), So = { class: "header-left" }, Io = {
  key: 0,
  class: "header-actions"
}, Eo = /* @__PURE__ */ Q({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: se(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", So, [
        v(_o, { "show-prefix": t.showPrefix }, {
          default: a(() => [
            h(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), E(Ft, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => d.$emit("info-click"))
        })) : u("", !0)
      ]),
      d.$slots.actions ? (o(), n("div", Io, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ X(Eo, [["__scopeId", "data-v-55a62cd6"]]), Mo = {
  key: 0,
  class: "section-title-count"
}, zo = {
  key: 1,
  class: "section-title-icon"
}, Lo = /* @__PURE__ */ Q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), E(It(`h${t.level}`), {
      class: se(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (r) => t.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Mo, "(" + l(t.count) + ")", 1)) : u("", !0),
        t.clickable ? (o(), n("span", zo, l(t.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ee = /* @__PURE__ */ X(Lo, [["__scopeId", "data-v-559361eb"]]), Do = { class: "status-grid" }, To = { class: "status-grid__column" }, Ro = { class: "status-grid__title" }, No = { class: "status-grid__column status-grid__column--right" }, Oo = { class: "status-grid__title" }, Uo = /* @__PURE__ */ Q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", Do, [
      e("div", To, [
        e("h4", Ro, l(t.leftTitle), 1),
        re(d.$slots, "left", {}, void 0, !0)
      ]),
      e("div", No, [
        e("h4", Oo, l(t.rightTitle), 1),
        re(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Bo = /* @__PURE__ */ X(Uo, [["__scopeId", "data-v-fe556068"]]), Po = {
  key: 0,
  class: "status-item__icon"
}, Vo = {
  key: 1,
  class: "status-item__count"
}, Ao = { class: "status-item__label" }, Fo = /* @__PURE__ */ Q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const d = t, s = B(() => `status-item--${d.variant}`);
    return (r, f) => (o(), n("div", {
      class: se(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), n("span", Po, l(t.icon), 1)) : u("", !0),
      t.count !== void 0 ? (o(), n("span", Vo, l(t.count), 1)) : u("", !0),
      e("span", Ao, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ X(Fo, [["__scopeId", "data-v-6f929183"]]), Wo = { class: "issue-card__header" }, Go = { class: "issue-card__icon" }, jo = { class: "issue-card__title" }, Ho = {
  key: 0,
  class: "issue-card__content"
}, qo = {
  key: 0,
  class: "issue-card__description"
}, Ko = {
  key: 1,
  class: "issue-card__items"
}, Jo = {
  key: 2,
  class: "issue-card__actions"
}, Yo = /* @__PURE__ */ Q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const d = t, s = B(() => `issue-card--${d.severity}`);
    return (r, f) => (o(), n("div", {
      class: se(["issue-card", s.value])
    }, [
      e("div", Wo, [
        e("span", Go, l(t.icon), 1),
        e("h4", jo, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), n("div", Ho, [
        t.description ? (o(), n("p", qo, l(t.description), 1)) : u("", !0),
        re(r.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      t.items && t.items.length ? (o(), n("div", Ko, [
        (o(!0), n(j, null, oe(t.items, (y, p) => (o(), n("div", {
          key: p,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(y), 1)
        ]))), 128))
      ])) : u("", !0),
      r.$slots.actions ? (o(), n("div", Jo, [
        re(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Qe = /* @__PURE__ */ X(Yo, [["__scopeId", "data-v-df6aa348"]]), Qo = ["type", "disabled"], Xo = {
  key: 0,
  class: "spinner"
}, Zo = /* @__PURE__ */ Q({
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
    return (d, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: se(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (o(), n("span", Xo)) : u("", !0),
      t.loading ? u("", !0) : re(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Qo));
  }
}), Z = /* @__PURE__ */ X(Zo, [["__scopeId", "data-v-772abe47"]]), es = { class: "empty-state" }, ts = {
  key: 0,
  class: "empty-icon"
}, os = { class: "empty-message" }, ss = /* @__PURE__ */ Q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (d, s) => (o(), n("div", es, [
      t.icon ? (o(), n("div", ts, l(t.icon), 1)) : u("", !0),
      e("p", os, l(t.message), 1),
      t.actionLabel ? (o(), E(Z, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => d.$emit("action"))
      }, {
        default: a(() => [
          h(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Ne = /* @__PURE__ */ X(ss, [["__scopeId", "data-v-4466284f"]]), ns = { class: "branch-indicator" }, as = { class: "branch-indicator__info" }, ls = { class: "branch-indicator__label" }, is = { class: "branch-indicator__name" }, rs = {
  key: 0,
  class: "branch-indicator__remote"
}, ds = {
  key: 0,
  class: "branch-indicator__status"
}, cs = {
  key: 0,
  class: "branch-indicator__ahead"
}, us = {
  key: 1,
  class: "branch-indicator__behind"
}, ms = {
  key: 1,
  class: "branch-indicator__actions"
}, vs = /* @__PURE__ */ Q({
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
    return (d, s) => (o(), n("div", ns, [
      e("div", as, [
        e("span", ls, l(t.label), 1),
        e("span", is, l(t.branchName), 1),
        t.remote ? (o(), n("span", rs, "@" + l(t.remote), 1)) : u("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), n("div", ds, [
        t.commitsAhead ? (o(), n("span", cs, " ↑ " + l(t.commitsAhead) + " ahead ", 1)) : u("", !0),
        t.commitsBehind ? (o(), n("span", us, " ↓ " + l(t.commitsBehind) + " behind ", 1)) : u("", !0)
      ])) : u("", !0),
      d.$slots.actions ? (o(), n("div", ms, [
        re(d.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), fs = /* @__PURE__ */ X(vs, [["__scopeId", "data-v-cb8dd50e"]]), gs = /* @__PURE__ */ Q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: se(["detail-label"]),
      style: qe({ minWidth: t.minWidth })
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), xt = /* @__PURE__ */ X(gs, [["__scopeId", "data-v-75e9eeb8"]]), hs = /* @__PURE__ */ Q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("span", {
      class: se(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), St = /* @__PURE__ */ X(hs, [["__scopeId", "data-v-2f186e4c"]]), ps = { class: "detail-row" }, ys = /* @__PURE__ */ Q({
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
    return (d, s) => (o(), n("div", ps, [
      v(xt, { "min-width": t.labelMinWidth }, {
        default: a(() => [
          h(l(t.label), 1)
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
          h(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : re(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), fe = /* @__PURE__ */ X(ys, [["__scopeId", "data-v-ef15664a"]]), ws = { class: "modal-header" }, bs = { class: "modal-body" }, ks = { class: "status-section" }, _s = {
  key: 0,
  class: "status-section"
}, $s = { class: "section-header-row" }, Cs = {
  key: 0,
  class: "workflow-group"
}, xs = { class: "workflow-group-header" }, Ss = { class: "workflow-group-title" }, Is = { class: "workflow-list" }, Es = { class: "workflow-name" }, Ms = { class: "workflow-issue" }, zs = {
  key: 1,
  class: "workflow-group"
}, Ls = { class: "workflow-group-header" }, Ds = { class: "workflow-group-title" }, Ts = { class: "workflow-list" }, Rs = { class: "workflow-name" }, Ns = { class: "workflow-issue" }, Os = {
  key: 2,
  class: "workflow-group"
}, Us = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Ps = { class: "workflow-list" }, Vs = { class: "workflow-name" }, As = {
  key: 3,
  class: "workflow-group"
}, Fs = { class: "workflow-group-header" }, Ws = { class: "workflow-group-title" }, Gs = { class: "workflow-list" }, js = { class: "workflow-name" }, Hs = {
  key: 4,
  class: "workflow-group"
}, qs = { class: "workflow-group-header" }, Ks = { class: "workflow-group-title" }, Js = { class: "workflow-list" }, Ys = { class: "workflow-name" }, Qs = {
  key: 5,
  class: "workflow-group"
}, Xs = { class: "workflow-group-title" }, Zs = { class: "expand-icon" }, en = {
  key: 0,
  class: "workflow-list"
}, tn = { class: "workflow-name" }, on = {
  key: 1,
  class: "status-section"
}, sn = {
  key: 0,
  class: "change-group"
}, nn = { class: "change-group-header" }, an = { class: "change-group-title" }, ln = { class: "change-list" }, rn = { class: "node-name" }, dn = {
  key: 0,
  class: "dev-badge"
}, cn = {
  key: 1,
  class: "change-group"
}, un = { class: "change-group-header" }, mn = { class: "change-group-title" }, vn = { class: "change-list" }, fn = { class: "node-name" }, gn = {
  key: 0,
  class: "dev-badge"
}, hn = {
  key: 2,
  class: "change-group"
}, pn = { class: "change-list" }, yn = { class: "change-item" }, wn = { class: "node-name" }, bn = {
  key: 3,
  class: "change-group"
}, kn = {
  key: 2,
  class: "status-section"
}, _n = { class: "section-header-row" }, $n = {
  key: 0,
  class: "drift-item"
}, Cn = { class: "drift-list" }, xn = {
  key: 0,
  class: "drift-list-more"
}, Sn = {
  key: 1,
  class: "drift-item"
}, In = { class: "drift-list" }, En = {
  key: 0,
  class: "drift-list-more"
}, Mn = {
  key: 2,
  class: "drift-item"
}, zn = {
  key: 3,
  class: "drift-item"
}, Ln = {
  key: 3,
  class: "status-section"
}, Dn = { class: "info-box" }, Tn = { class: "drift-list" }, Rn = {
  key: 0,
  class: "drift-list-more"
}, Nn = {
  key: 4,
  class: "status-section"
}, On = { class: "warning-box" }, Un = {
  key: 5,
  class: "empty-state-inline"
}, Bn = { class: "modal-actions" }, Pn = /* @__PURE__ */ Q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const d = t, s = C(!1);
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
        var $, F, P;
        const b = (P = (F = ($ = d.status) == null ? void 0 : $.workflows) == null ? void 0 : F.analyzed) == null ? void 0 : P.find((R) => R.name === x);
        return !b || b.status !== "broken";
      })) || [];
    }), p = B(() => {
      var z, I, _, x, b;
      return (z = d.status) != null && z.workflows ? (((I = d.status.workflows.new) == null ? void 0 : I.length) ?? 0) > 0 || (((_ = d.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = d.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((b = d.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), c = B(() => {
      var I, _, x;
      const z = (I = d.status) == null ? void 0 : I.git_changes;
      return z ? (((_ = z.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = z.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || z.workflow_changes || z.has_other_changes : !1;
    }), i = B(() => {
      var z, I, _, x, b, $;
      return !p.value && !c.value && ((I = (z = d.status) == null ? void 0 : z.comparison) == null ? void 0 : I.is_synced) && (((_ = d.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && ((($ = (b = (x = d.status) == null ? void 0 : x.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
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
      var _, x, b, $, F, P, R, q, L, T, N, M, S, O, V, te, W, A, ee, J, U, ae;
      return o(), E(_e, { to: "body" }, [
        t.show ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[6] || (I[6] = (Y) => z.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: I[5] || (I[5] = pe(() => {
            }, ["stop"]))
          }, [
            e("div", ws, [
              I[7] || (I[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (Y) => z.$emit("close"))
              }, "✕")
            ]),
            e("div", bs, [
              e("div", ks, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[8] || (I[8] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                v(fe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              p.value ? (o(), n("div", _s, [
                e("div", $s, [
                  v(Ee, { level: "4" }, {
                    default: a(() => [...I[9] || (I[9] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: I[1] || (I[1] = (Y) => z.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), n("div", Cs, [
                  e("div", xs, [
                    I[10] || (I[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ss, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", Is, [
                    (o(!0), n(j, null, oe(r.value, (Y) => (o(), n("div", {
                      key: Y.name,
                      class: "workflow-item"
                    }, [
                      e("span", Es, l(Y.name), 1),
                      e("span", Ms, l(Y.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                f.value.length ? (o(), n("div", zs, [
                  e("div", Ls, [
                    I[11] || (I[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ds, "BROKEN (UNCOMMITTED) (" + l(f.value.length) + ")", 1)
                  ]),
                  e("div", Ts, [
                    (o(!0), n(j, null, oe(f.value, (Y) => (o(), n("div", {
                      key: Y.name,
                      class: "workflow-item"
                    }, [
                      e("span", Rs, l(Y.name), 1),
                      e("span", Ns, l(Y.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (x = (_ = t.status.workflows) == null ? void 0 : _.new) != null && x.length ? (o(), n("div", Os, [
                  e("div", Us, [
                    I[12] || (I[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Bs, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ps, [
                    (o(!0), n(j, null, oe(t.status.workflows.new, (Y) => (o(), n("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, l(Y), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                ($ = (b = t.status.workflows) == null ? void 0 : b.modified) != null && $.length ? (o(), n("div", As, [
                  e("div", Fs, [
                    I[13] || (I[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ws, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Gs, [
                    (o(!0), n(j, null, oe(t.status.workflows.modified, (Y) => (o(), n("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      e("span", js, l(Y), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (P = (F = t.status.workflows) == null ? void 0 : F.deleted) != null && P.length ? (o(), n("div", Hs, [
                  e("div", qs, [
                    I[14] || (I[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Ks, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Js, [
                    (o(!0), n(j, null, oe(t.status.workflows.deleted, (Y) => (o(), n("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      e("span", Ys, l(Y), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                y.value.length ? (o(), n("div", Qs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: I[2] || (I[2] = (Y) => s.value = !s.value)
                  }, [
                    I[15] || (I[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Xs, "SYNCED (" + l(y.value.length) + ")", 1),
                    e("span", Zs, l(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), n("div", en, [
                    (o(!0), n(j, null, oe(y.value, (Y) => (o(), n("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      e("span", tn, l(Y), 1)
                    ]))), 128))
                  ])) : u("", !0)
                ])) : u("", !0)
              ])) : u("", !0),
              c.value ? (o(), n("div", on, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[16] || (I[16] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (R = t.status.git_changes) == null ? void 0 : R.nodes_added) != null && q.length ? (o(), n("div", sn, [
                  e("div", nn, [
                    I[17] || (I[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", an, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ln, [
                    (o(!0), n(j, null, oe(t.status.git_changes.nodes_added, (Y) => (o(), n("div", {
                      key: w(Y),
                      class: "change-item"
                    }, [
                      e("span", rn, l(w(Y)), 1),
                      g(Y) ? (o(), n("span", dn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (T = (L = t.status.git_changes) == null ? void 0 : L.nodes_removed) != null && T.length ? (o(), n("div", cn, [
                  e("div", un, [
                    I[18] || (I[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", mn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", vn, [
                    (o(!0), n(j, null, oe(t.status.git_changes.nodes_removed, (Y) => (o(), n("div", {
                      key: w(Y),
                      class: "change-item"
                    }, [
                      e("span", fn, l(w(Y)), 1),
                      g(Y) ? (o(), n("span", gn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (N = t.status.git_changes) != null && N.workflow_changes ? (o(), n("div", hn, [
                  I[19] || (I[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", pn, [
                    e("div", yn, [
                      e("span", wn, l(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : u("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (o(), n("div", bn, [...I[20] || (I[20] = [
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
              (S = t.status.comparison) != null && S.is_synced ? u("", !0) : (o(), n("div", kn, [
                e("div", _n, [
                  v(Ee, { level: "4" }, {
                    default: a(() => [...I[21] || (I[21] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: I[3] || (I[3] = (Y) => z.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                I[22] || (I[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (V = (O = t.status.comparison) == null ? void 0 : O.missing_nodes) != null && V.length ? (o(), n("div", $n, [
                  v(fe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Cn, [
                    (o(!0), n(j, null, oe(t.status.comparison.missing_nodes.slice(0, 10), (Y) => (o(), n("div", {
                      key: Y,
                      class: "drift-list-item"
                    }, " - " + l(Y), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), n("div", xn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (W = (te = t.status.comparison) == null ? void 0 : te.extra_nodes) != null && W.length ? (o(), n("div", Sn, [
                  v(fe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", In, [
                    (o(!0), n(j, null, oe(t.status.comparison.extra_nodes.slice(0, 10), (Y) => (o(), n("div", {
                      key: Y,
                      class: "drift-list-item"
                    }, " - " + l(Y), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), n("div", En, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (ee = (A = t.status.comparison) == null ? void 0 : A.version_mismatches) != null && ee.length ? (o(), n("div", Mn, [
                  v(fe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : u("", !0),
                (J = t.status.comparison) != null && J.packages_in_sync ? u("", !0) : (o(), n("div", zn, [
                  v(fe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (U = t.status.comparison) == null ? void 0 : U.disabled_nodes) != null && ae.length ? (o(), n("div", Ln, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[23] || (I[23] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Dn, [
                  I[24] || (I[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Tn, [
                  (o(!0), n(j, null, oe(t.status.comparison.disabled_nodes.slice(0, 10), (Y) => (o(), n("div", {
                    key: Y,
                    class: "drift-list-item"
                  }, " • " + l(Y), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), n("div", Rn, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : u("", !0)
                ])
              ])) : u("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), n("div", Nn, [
                v(Ee, { level: "4" }, {
                  default: a(() => [...I[25] || (I[25] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", On, [
                  I[26] || (I[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                I[27] || (I[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : u("", !0),
              i.value ? (o(), n("div", Un, [...I[28] || (I[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : u("", !0)
            ]),
            e("div", Bn, [
              v(Z, {
                variant: "secondary",
                onClick: I[4] || (I[4] = (Y) => z.$emit("close"))
              }, {
                default: a(() => [...I[29] || (I[29] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), Nt = /* @__PURE__ */ X(Pn, [["__scopeId", "data-v-c67eed17"]]), Vn = { class: "health-section-header" }, An = { style: { "margin-top": "var(--cg-space-1)" } }, Fn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Wn = /* @__PURE__ */ Q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch", "view-nodes"],
  setup(t, { emit: d }) {
    const s = t, r = C(!1), f = C(!1);
    we(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Nt);
    });
    function y() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function p() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", r.value), r.value = !0, console.log("showDetailModal after:", r.value);
    }
    function c() {
      r.value = !1, m("view-workflows");
    }
    function i() {
      r.value = !1, m("view-nodes");
    }
    const m = d, w = B(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), g = B(() => {
      const L = s.status.git_changes;
      return L.nodes_added.length > 0 || L.nodes_removed.length > 0 || L.workflow_changes || L.has_other_changes;
    }), z = B(() => w.value || g.value), I = B(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), _ = B(() => s.status.git_changes.has_other_changes), x = B(() => {
      var L;
      return ((L = s.status.workflows.analyzed) == null ? void 0 : L.filter(
        (T) => T.status === "broken" && T.sync_state === "synced"
      )) || [];
    }), b = B(() => {
      var L;
      return ((L = s.status.workflows.analyzed) == null ? void 0 : L.filter(
        (T) => T.status === "broken" && T.sync_state !== "synced"
      )) || [];
    }), $ = B(() => x.value.length > 0 || b.value.length > 0), F = B(() => $.value || s.status.missing_models_count > 0 || z.value || !s.status.comparison.is_synced), P = B(() => {
      const L = [];
      return s.status.workflows.new.length > 0 && L.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && L.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && L.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && L.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && L.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${L.length > 0 ? L.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    }), R = B(() => {
      var N, M;
      const L = [], T = s.status.comparison;
      return (N = T.missing_nodes) != null && N.length && L.push(`${T.missing_nodes.length} missing node${T.missing_nodes.length === 1 ? "" : "s"}`), (M = T.extra_nodes) != null && M.length && L.push(`${T.extra_nodes.length} untracked node${T.extra_nodes.length === 1 ? "" : "s"}`), L.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${L.join(" and ")}.`;
    }), q = B(() => {
      var N, M;
      const L = [], T = s.status.comparison;
      return (N = T.extra_nodes) != null && N.length && (T.extra_nodes.slice(0, 3).forEach((S) => {
        L.push(`Untracked: ${S}`);
      }), T.extra_nodes.length > 3 && L.push(`...and ${T.extra_nodes.length - 3} more untracked`)), (M = T.missing_nodes) != null && M.length && (T.missing_nodes.slice(0, 3).forEach((S) => {
        L.push(`Missing: ${S}`);
      }), T.missing_nodes.length > 3 && L.push(`...and ${T.missing_nodes.length - 3} more missing`)), L;
    });
    return (L, T) => (o(), n(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "STATUS" })
        ]),
        content: a(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[0] || (T[0] = (N) => f.value = !0),
            onMouseleave: T[1] || (T[1] = (N) => f.value = !1)
          }, [
            e("div", Vn, [
              v(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: a(() => [...T[10] || (T[10] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              v(ao, { name: "fade" }, {
                default: a(() => [
                  f.value ? (o(), E(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: a(() => [...T[11] || (T[11] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : u("", !0)
                ]),
                _: 1
              })
            ]),
            v(Bo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: a(() => [
                t.status.workflows.new.length ? (o(), E(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.modified.length ? (o(), E(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.deleted.length ? (o(), E(Ve, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : u("", !0),
                v(Ve, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: w.value
                }, null, 8, ["count", "separator"])
              ]),
              right: a(() => [
                t.status.git_changes.nodes_added.length ? (o(), E(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), E(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.workflow_changes ? (o(), E(Ve, {
                  key: 2,
                  icon: "●",
                  count: I.value,
                  label: I.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : u("", !0),
                _.value ? (o(), E(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : u("", !0),
                g.value ? u("", !0) : (o(), E(Ve, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", An, [
            v(fs, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[2] || (T[2] = (N) => L.$emit("switch-branch"))
                }, {
                  default: a(() => [...T[12] || (T[12] = [
                    h(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), E(Qe, {
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
                onClick: T[3] || (T[3] = (N) => L.$emit("create-branch"))
              }, {
                default: a(() => [...T[13] || (T[13] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : u("", !0),
          F.value ? (o(), n("div", Fn, [
            v(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: a(() => [...T[14] || (T[14] = [
                h(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            x.value.length > 0 ? (o(), E(Qe, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${x.value.length} committed workflow${x.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: x.value.map((N) => `${N.name} — ${N.issue_summary}`)
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[4] || (T[4] = (N) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...T[15] || (T[15] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            b.value.length > 0 ? (o(), E(Qe, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${b.value.length} workflow${b.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: b.value.map((N) => `${N.name} — ${N.issue_summary}`)
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[5] || (T[5] = (N) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...T[16] || (T[16] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            t.status.missing_models_count > 0 && !$.value ? (o(), E(Qe, {
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
                  onClick: T[6] || (T[6] = (N) => L.$emit("view-workflows"))
                }, {
                  default: a(() => [...T[17] || (T[17] = [
                    h(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : u("", !0),
            z.value ? (o(), E(Qe, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: P.value
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "secondary",
                  size: "sm",
                  onClick: p
                }, {
                  default: a(() => [...T[18] || (T[18] = [
                    h(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                v(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (N) => L.$emit("commit-changes"))
                }, {
                  default: a(() => [...T[19] || (T[19] = [
                    h(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : u("", !0),
            t.status.comparison.is_synced ? u("", !0) : (o(), E(Qe, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: R.value,
              items: q.value
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y
                }, {
                  default: a(() => [...T[20] || (T[20] = [
                    h(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                v(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[8] || (T[8] = (N) => L.$emit("view-nodes"))
                }, {
                  default: a(() => [...T[21] || (T[21] = [
                    h(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : u("", !0),
          !F.value && !g.value ? (o(), E(Ne, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : u("", !0)
        ]),
        _: 1
      }),
      v(Nt, {
        show: r.value,
        status: t.status,
        onClose: T[9] || (T[9] = (N) => r.value = !1),
        onNavigateWorkflows: c,
        onNavigateNodes: i
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Gn = /* @__PURE__ */ X(Wn, [["__scopeId", "data-v-d1cf48a7"]]), jn = ["type", "value", "placeholder", "disabled"], Hn = /* @__PURE__ */ Q({
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
  setup(t, { expose: d, emit: s }) {
    const r = t, f = s, y = C(null);
    function p(c) {
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
    }), (c, i) => (o(), n("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: se(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: p,
      onKeyup: [
        i[0] || (i[0] = We((m) => c.$emit("enter"), ["enter"])),
        i[1] || (i[1] = We((m) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: i[2] || (i[2] = (m) => c.$emit("focus")),
      onBlur: i[3] || (i[3] = (m) => c.$emit("blur"))
    }, null, 42, jn));
  }
}), ht = /* @__PURE__ */ X(Hn, [["__scopeId", "data-v-0380d08f"]]), qn = { class: "branch-create-form" }, Kn = { class: "form-actions" }, Jn = /* @__PURE__ */ Q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: d }) {
    const s = d, r = C(""), f = B(() => {
      const c = r.value.trim();
      return c.length > 0 && !c.startsWith("-") && !c.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(c);
    });
    function y() {
      f.value && (s("create", r.value.trim()), r.value = "");
    }
    function p() {
      r.value = "", s("cancel");
    }
    return (c, i) => (o(), n("div", qn, [
      v(ht, {
        modelValue: r.value,
        "onUpdate:modelValue": i[0] || (i[0] = (m) => r.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: p
      }, null, 8, ["modelValue"]),
      e("div", Kn, [
        v(Z, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: y
        }, {
          default: a(() => [...i[1] || (i[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        v(Z, {
          variant: "secondary",
          size: "sm",
          onClick: p
        }, {
          default: a(() => [...i[2] || (i[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Yn = /* @__PURE__ */ X(Jn, [["__scopeId", "data-v-7c500394"]]), Qn = { class: "branch-list-item__indicator" }, Xn = { class: "branch-list-item__name" }, Zn = {
  key: 0,
  class: "branch-list-item__actions"
}, ea = {
  key: 0,
  class: "branch-list-item__current-label"
}, ta = /* @__PURE__ */ Q({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: se(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (r) => t.clickable && d.$emit("click"))
    }, [
      e("span", Qn, l(t.isCurrent ? "●" : "○"), 1),
      e("span", Xn, l(t.branchName), 1),
      d.$slots.actions || t.showCurrentLabel ? (o(), n("div", Zn, [
        re(d.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), n("span", ea, " current ")) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), oa = /* @__PURE__ */ X(ta, [["__scopeId", "data-v-c6581a24"]]), sa = {
  key: 2,
  class: "branch-list"
}, na = /* @__PURE__ */ Q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: d }) {
    const s = d, r = C(!1);
    function f(p) {
      s("create", p), y();
    }
    function y() {
      r.value = !1;
    }
    return (p, c) => (o(), E(Ce, null, {
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
        r.value ? (o(), E(Yn, {
          key: 0,
          onCreate: f,
          onCancel: y
        })) : u("", !0),
        t.branches.length === 0 ? (o(), E(Ne, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), n("div", sa, [
          (o(!0), n(j, null, oe(t.branches, (i) => (o(), E(oa, {
            key: i.name,
            "branch-name": i.name,
            "is-current": i.is_current
          }, {
            actions: a(() => [
              i.is_current ? u("", !0) : (o(), E(Z, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (m) => p.$emit("switch", i.name)
              }, {
                default: a(() => [...c[2] || (c[2] = [
                  h(" Switch ", -1)
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
}), aa = /* @__PURE__ */ X(na, [["__scopeId", "data-v-763d6ec4"]]), la = { class: "commit-list" }, ia = /* @__PURE__ */ Q({
  __name: "CommitList",
  setup(t) {
    return (d, s) => (o(), n("div", la, [
      re(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ra = /* @__PURE__ */ X(ia, [["__scopeId", "data-v-8c5ee761"]]), da = { class: "commit-hash" }, ca = /* @__PURE__ */ Q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const d = t, s = B(() => d.hash.slice(0, d.length));
    return (r, f) => (o(), n("span", da, l(s.value), 1));
  }
}), Wt = /* @__PURE__ */ X(ca, [["__scopeId", "data-v-7c333cc6"]]), ua = { class: "commit-message" }, ma = { class: "commit-date" }, va = /* @__PURE__ */ Q({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, r = d;
    function f() {
      s.clickable && r("click");
    }
    return (y, p) => (o(), n("div", {
      class: se(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      v(Wt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ua, l(t.message), 1),
      e("span", ma, l(t.relativeDate), 1),
      y.$slots.actions ? (o(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: p[0] || (p[0] = pe(() => {
        }, ["stop"]))
      }, [
        re(y.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), fa = /* @__PURE__ */ X(va, [["__scopeId", "data-v-dd7c621b"]]), ga = /* @__PURE__ */ Q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (d, s) => (o(), E(Ce, null, {
      header: a(() => [
        v(xe, { title: "HISTORY" })
      ]),
      content: a(() => [
        t.commits.length === 0 ? (o(), E(Ne, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), E(ra, { key: 1 }, {
          default: a(() => [
            (o(!0), n(j, null, oe(t.commits, (r) => (o(), E(fa, {
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
}), ha = /* @__PURE__ */ X(ga, [["__scopeId", "data-v-981c3c64"]]), Xp = [
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
], Zp = {
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
}, pa = [
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
], e1 = [
  ...pa,
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
  async function s(k, G) {
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
    return s(k ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(k, G = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: k, allow_issues: G })
    });
  }
  async function y(k = 10, G = 0) {
    return s(`/v2/comfygit/log?limit=${k}&offset=${G}`);
  }
  async function p(k) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: k })
    });
  }
  async function c() {
    return s("/v2/comfygit/branches");
  }
  async function i(k) {
    return s(`/v2/comfygit/commit/${k}`);
  }
  async function m(k, G = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: k, force: G })
    });
  }
  async function w(k, G = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: k, start_point: G })
    });
  }
  async function g(k, G = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: k, force: G })
    });
  }
  async function z() {
    try {
      return (await s("/v2/comfygit/environments")).environments;
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
    return s("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: k })
    });
  }
  async function _() {
    try {
      return s("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function x(k, G, ne) {
    return s("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: k, pytorch_backend: G, clone_from: ne })
    });
  }
  async function b(k) {
    return s(`/v2/workspace/environments/${k}`, {
      method: "DELETE"
    });
  }
  async function $(k = !1) {
    try {
      return s(k ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
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
  async function F(k) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(k)}/details`);
  }
  async function P(k) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(k)}/resolve`, {
      method: "POST"
    });
  }
  async function R(k, G, ne) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(k)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: G, install_models: ne })
    });
  }
  async function q(k, G, ne) {
    return s(`/v2/comfygit/workflow/${encodeURIComponent(k)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: G, importance: ne })
    });
  }
  async function L() {
    try {
      return s("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function T() {
    try {
      return s("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function N(k) {
    return s(`/v2/workspace/models/details/${encodeURIComponent(k)}`);
  }
  async function M(k) {
    return s("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: k })
    });
  }
  async function S(k, G) {
    return s(`/v2/workspace/models/${k}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: G })
    });
  }
  async function O(k, G) {
    return s(`/v2/workspace/models/${k}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: G })
    });
  }
  async function V(k) {
    return s(`/v2/workspace/models/${k}`, {
      method: "DELETE"
    });
  }
  async function te(k) {
    return s("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(k)
    });
  }
  async function W() {
    return s("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function A() {
    return s("/v2/workspace/models/directory");
  }
  async function ee(k) {
    return s("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: k })
    });
  }
  async function J() {
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
  async function U(k) {
    return s("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(k)
    });
  }
  async function ae(k, G) {
    try {
      const ne = new URLSearchParams();
      return k && ne.append("level", k), G && ne.append("lines", G.toString()), s(`/v2/comfygit/debug/logs?${ne}`);
    } catch {
      return [];
    }
  }
  async function Y(k, G) {
    try {
      const ne = new URLSearchParams();
      return k && ne.append("level", k), G && ne.append("lines", G.toString()), s(`/v2/workspace/debug/logs?${ne}`);
    } catch {
      return [];
    }
  }
  async function be() {
    try {
      return s("/v2/comfygit/nodes");
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
    return s(`/v2/comfygit/nodes/${encodeURIComponent(k)}/track-dev`, {
      method: "POST"
    });
  }
  async function ze(k) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(k)}/install`, {
      method: "POST"
    });
  }
  async function lt(k) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(k)}/update`, {
      method: "POST"
    });
  }
  async function me(k) {
    return s(`/v2/comfygit/nodes/${encodeURIComponent(k)}`, {
      method: "DELETE"
    });
  }
  async function Me() {
    try {
      return s("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function it(k, G) {
    return s("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: k, url: G })
    });
  }
  async function Ke(k) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(k)}`, {
      method: "DELETE"
    });
  }
  async function Se(k, G, ne) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(k)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: G, push_url: ne })
    });
  }
  async function rt(k) {
    return s(`/v2/comfygit/remotes/${encodeURIComponent(k)}/fetch`, {
      method: "POST"
    });
  }
  async function Ze(k) {
    try {
      return s(`/v2/comfygit/remotes/${encodeURIComponent(k)}/status`);
    } catch {
      return null;
    }
  }
  async function K(k = "skip", G = !0) {
    return s("/v2/comfygit/sync", {
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
    exportEnv: p,
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
    getWorkflowDetails: F,
    resolveWorkflow: P,
    installWorkflowDeps: R,
    setModelImportance: q,
    // Model Management
    getEnvironmentModels: L,
    getWorkspaceModels: T,
    getModelDetails: N,
    openFileLocation: M,
    addModelSource: S,
    removeModelSource: O,
    deleteModel: V,
    downloadModel: te,
    scanWorkspaceModels: W,
    getModelsDirectory: A,
    setModelsDirectory: ee,
    // Settings
    getConfig: J,
    updateConfig: U,
    // Debug/Logs
    getEnvironmentLogs: ae,
    getWorkspaceLogs: Y,
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
    getRemoteSyncStatus: Ze,
    // Environment Sync
    syncEnvironmentManually: K
  };
}
const ya = { class: "base-modal-header" }, wa = {
  key: 0,
  class: "base-modal-title"
}, ba = { class: "base-modal-body" }, ka = {
  key: 0,
  class: "base-modal-loading"
}, _a = {
  key: 1,
  class: "base-modal-error"
}, $a = {
  key: 0,
  class: "base-modal-footer"
}, Ca = /* @__PURE__ */ Q({
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
    const s = t, r = d;
    function f() {
      s.closeOnOverlayClick && r("close");
    }
    function y(p) {
      p.key === "Escape" && r("close");
    }
    return we(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), lo(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (p, c) => (o(), E(_e, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: se(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: c[1] || (c[1] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", ya, [
            re(p.$slots, "header", {}, () => [
              t.title ? (o(), n("h3", wa, l(t.title), 1)) : u("", !0)
            ], !0),
            t.showCloseButton ? (o(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: c[0] || (c[0] = (i) => p.$emit("close"))
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
          e("div", ba, [
            t.loading ? (o(), n("div", ka, "Loading...")) : t.error ? (o(), n("div", _a, l(t.error), 1)) : re(p.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          p.$slots.footer ? (o(), n("div", $a, [
            re(p.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), st = /* @__PURE__ */ X(Ca, [["__scopeId", "data-v-2125a0e6"]]), xa = ["type", "disabled"], Sa = {
  key: 0,
  class: "spinner"
}, Ia = /* @__PURE__ */ Q({
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
    return (d, s) => (o(), n("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: se(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (r) => d.$emit("click", r))
    }, [
      t.loading ? (o(), n("span", Sa)) : u("", !0),
      re(d.$slots, "default", {}, void 0, !0)
    ], 10, xa));
  }
}), le = /* @__PURE__ */ X(Ia, [["__scopeId", "data-v-f3452606"]]), Ea = {
  key: 0,
  class: "base-title-count"
}, Ma = /* @__PURE__ */ Q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (d, s) => (o(), E(It(`h${t.level}`), {
      class: se(["base-title", t.variant])
    }, {
      default: a(() => [
        re(d.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), n("span", Ea, "(" + l(t.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vt = /* @__PURE__ */ X(Ma, [["__scopeId", "data-v-5a01561d"]]), za = ["value", "disabled"], La = {
  key: 0,
  value: "",
  disabled: ""
}, Da = ["value"], Ta = {
  key: 0,
  class: "base-select-error"
}, Ra = /* @__PURE__ */ Q({
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
    function s(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, f) => (o(), n("div", {
      class: se(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: se(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (y) => r.$emit("update:modelValue", y.target.value))
      }, [
        t.placeholder ? (o(), n("option", La, l(t.placeholder), 1)) : u("", !0),
        (o(!0), n(j, null, oe(t.options, (y) => (o(), n("option", {
          key: d(y),
          value: d(y)
        }, l(s(y)), 9, Da))), 128))
      ], 42, za),
      t.error ? (o(), n("span", Ta, l(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Na = /* @__PURE__ */ X(Ra, [["__scopeId", "data-v-7436d745"]]), Oa = { class: "popover-header" }, Ua = { class: "popover-title" }, Ba = { class: "popover-content" }, Pa = {
  key: 0,
  class: "popover-actions"
}, Va = /* @__PURE__ */ Q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (d, s) => (o(), E(_e, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: qe({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Oa, [
            e("h4", Ua, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Ba, [
            re(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), n("div", Pa, [
            re(d.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), Ge = /* @__PURE__ */ X(Va, [["__scopeId", "data-v-42815ace"]]), Aa = { class: "detail-section" }, Fa = {
  key: 0,
  class: "empty-message"
}, Wa = { class: "model-header" }, Ga = { class: "model-name" }, ja = { class: "model-details" }, Ha = { class: "model-row" }, qa = { class: "model-row" }, Ka = { class: "label" }, Ja = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ya = { class: "node-list" }, Qa = ["onClick"], Xa = {
  key: 1,
  class: "model-row"
}, Za = { class: "value" }, el = {
  key: 0,
  class: "model-actions"
}, tl = { class: "detail-section" }, ol = {
  key: 0,
  class: "empty-message"
}, sl = { class: "node-name" }, nl = {
  key: 0,
  class: "node-version"
}, al = /* @__PURE__ */ Q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: d }) {
    const s = t, r = d, { getWorkflowDetails: f, setModelImportance: y, installWorkflowDeps: p } = $e(), c = C(null), i = C(!1), m = C(null), w = C(!1), g = C({}), z = C({}), I = C(!1), _ = C(/* @__PURE__ */ new Set()), x = [
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
    function F(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const S = M.hash || M.filename;
      return _.value.has(S) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function P(M) {
      return _.value.has(M);
    }
    function R(M) {
      _.value.has(M) ? _.value.delete(M) : _.value.add(M), _.value = new Set(_.value);
    }
    async function q() {
      i.value = !0, m.value = null;
      try {
        c.value = await f(s.workflowName);
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        i.value = !1;
      }
    }
    function L(M, S) {
      g.value[M] = S, w.value = !0;
    }
    async function T() {
      if (!w.value) {
        r("close");
        return;
      }
      i.value = !0, m.value = null;
      try {
        for (const [M, S] of Object.entries(g.value))
          await y(s.workflowName, M, S);
        r("refresh"), r("close");
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        i.value = !1;
      }
    }
    async function N(M) {
      z.value[M] = !0, m.value = null;
      try {
        await p(s.workflowName, !0, !1), await q();
      } catch (S) {
        m.value = S instanceof Error ? S.message : "Failed to install node";
      } finally {
        z.value[M] = !1;
      }
    }
    return we(q), (M, S) => (o(), n(j, null, [
      v(st, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: i.value,
        error: m.value || void 0,
        onClose: S[5] || (S[5] = (O) => r("close"))
      }, {
        body: a(() => [
          c.value ? (o(), n(j, { key: 0 }, [
            e("section", Aa, [
              v(vt, { variant: "section" }, {
                default: a(() => [
                  h("MODELS USED (" + l(c.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              c.value.models.length === 0 ? (o(), n("div", Fa, " No models used in this workflow ")) : u("", !0),
              (o(!0), n(j, null, oe(c.value.models, (O) => (o(), n("div", {
                key: O.hash || O.filename,
                class: "model-card"
              }, [
                e("div", Wa, [
                  S[7] || (S[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Ga, l(O.filename), 1)
                ]),
                e("div", ja, [
                  e("div", Ha, [
                    S[8] || (S[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: se(["value", b(O.status)])
                    }, l($(O.status)), 3)
                  ]),
                  e("div", qa, [
                    e("span", Ka, [
                      S[9] || (S[9] = h(" Importance: ", -1)),
                      v(Ft, {
                        size: 14,
                        title: "About importance levels",
                        onClick: S[0] || (S[0] = (V) => I.value = !0)
                      })
                    ]),
                    v(Na, {
                      "model-value": g.value[O.filename] || O.importance,
                      options: x,
                      "onUpdate:modelValue": (V) => L(O.filename, V)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  O.loaded_by && O.loaded_by.length > 0 ? (o(), n("div", Ja, [
                    S[10] || (S[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", Ya, [
                      (o(!0), n(j, null, oe(F(O), (V, te) => (o(), n("div", {
                        key: `${V.node_id}-${te}`,
                        class: "node-reference"
                      }, l(V.node_type) + " (Node #" + l(V.node_id) + ") ", 1))), 128)),
                      O.loaded_by.length > 3 ? (o(), n("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (V) => R(O.hash || O.filename)
                      }, l(P(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, Qa)) : u("", !0)
                    ])
                  ])) : u("", !0),
                  O.size_mb ? (o(), n("div", Xa, [
                    S[11] || (S[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Za, l(O.size_mb) + " MB", 1)
                  ])) : u("", !0)
                ]),
                O.status !== "available" ? (o(), n("div", el, [
                  O.status === "downloadable" ? (o(), E(le, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: S[1] || (S[1] = (V) => r("resolve"))
                  }, {
                    default: a(() => [...S[12] || (S[12] = [
                      h(" Download ", -1)
                    ])]),
                    _: 1
                  })) : O.status === "path_mismatch" ? (o(), E(le, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[2] || (S[2] = (V) => r("resolve"))
                  }, {
                    default: a(() => [...S[13] || (S[13] = [
                      h(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), E(le, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[3] || (S[3] = (V) => r("resolve"))
                  }, {
                    default: a(() => [...S[14] || (S[14] = [
                      h(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : u("", !0)
              ]))), 128))
            ]),
            e("section", tl, [
              v(vt, { variant: "section" }, {
                default: a(() => [
                  h("NODES USED (" + l(c.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              c.value.nodes.length === 0 ? (o(), n("div", ol, " No custom nodes used in this workflow ")) : u("", !0),
              (o(!0), n(j, null, oe(c.value.nodes, (O) => (o(), n("div", {
                key: O.name,
                class: "node-item"
              }, [
                e("span", {
                  class: se(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, l(O.status === "installed" ? "✓" : "✕"), 3),
                e("span", sl, l(O.name), 1),
                O.version ? (o(), n("span", nl, "v" + l(O.version), 1)) : u("", !0),
                O.status === "missing" ? (o(), E(le, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: z.value[O.name],
                  onClick: (V) => N(O.name),
                  class: "node-install-btn"
                }, {
                  default: a(() => [...S[15] || (S[15] = [
                    h(" Install ", -1)
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
            onClick: S[4] || (S[4] = (O) => r("close"))
          }, {
            default: a(() => [...S[16] || (S[16] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (o(), E(le, {
            key: 0,
            variant: "primary",
            onClick: T
          }, {
            default: a(() => [...S[17] || (S[17] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      v(Ge, {
        show: I.value,
        title: "Model Importance Levels",
        onClose: S[6] || (S[6] = (O) => I.value = !1)
      }, {
        content: a(() => [...S[18] || (S[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              h(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              h(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              h(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ll = /* @__PURE__ */ X(al, [["__scopeId", "data-v-0b14d32e"]]), ue = Vt({
  items: [],
  status: "idle"
});
let Pe = null;
function Gt() {
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
    await il(t), t.status = "completed", t.progress = 100;
  } catch (d) {
    t.status = "failed", t.error = d instanceof Error ? d.message : "Download failed", t.retries++;
  } finally {
    ue.status = "idle", et();
  }
}
async function il(t) {
  return new Promise((d, s) => {
    Pe && (Pe.close(), Pe = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Pe = f;
    let y = Date.now(), p = 0, c = !1;
    f.onmessage = (i) => {
      try {
        const m = JSON.parse(i.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const w = Date.now(), g = (w - y) / 1e3;
            if (g > 0.5) {
              const z = t.downloaded - p;
              if (t.speed = z / g, y = w, p = t.downloaded, t.speed > 0 && t.size > 0) {
                const I = t.size - t.downloaded;
                t.eta = I / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            c = !0, f.close(), Pe = null, d();
            break;
          case "error":
            c = !0, f.close(), Pe = null, s(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Pe = null, c || s(new Error("Connection lost"));
    };
  });
}
async function rl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const d = await t.json();
    if (!d.pending_downloads || d.pending_downloads.length === 0) return;
    for (const s of d.pending_downloads) {
      if (ue.items.some((f) => f.url === s.url && f.filename === s.filename))
        continue;
      const r = {
        id: Gt(),
        workflow: s.workflow,
        filename: s.filename,
        url: s.url,
        targetPath: s.target_path,
        size: s.size || 0,
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
        (R) => R.url === $.url && R.targetPath === $.targetPath && ["queued", "downloading", "paused", "completed"].includes(R.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${$.filename}`);
        continue;
      }
      const P = {
        id: Gt(),
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
        Pe && (Pe.close(), Pe = null), $.status = "failed", $.error = "Cancelled by user", ue.status = "idle", et();
      } else if ($.status === "queued") {
        const F = ue.items.findIndex((P) => P.id === b);
        F >= 0 && ue.items.splice(F, 1);
      }
    }
  }
  function s(b) {
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
    const $ = ue.items.findIndex((F) => F.id === b);
    $ >= 0 && ["completed", "failed", "paused"].includes(ue.items[$].status) && ue.items.splice($, 1);
  }
  function p() {
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
    queue: io(ue),
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
    retryDownload: s,
    resumeDownload: r,
    resumeAllPaused: f,
    removeItem: y,
    clearCompleted: p,
    clearFailed: c,
    loadPendingDownloads: rl
  };
}
function dl() {
  const t = C(null), d = C(null), s = C([]), r = C([]), f = C(!1), y = C(null);
  async function p(b, $) {
    var P;
    if (!((P = window.app) != null && P.api))
      throw new Error("ComfyUI API not available");
    const F = await window.app.api.fetchApi(b, $);
    if (!F.ok) {
      const R = await F.json().catch(() => ({})), q = R.error || R.message || `Request failed: ${F.status}`;
      throw new Error(q);
    }
    return F.json();
  }
  async function c(b) {
    f.value = !0, y.value = null;
    try {
      let $;
      return wt() || ($ = await p(
        `/v2/comfygit/workflow/${b}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = $, $;
    } catch ($) {
      const F = $ instanceof Error ? $.message : "Unknown error occurred";
      throw y.value = F, $;
    } finally {
      f.value = !1;
    }
  }
  async function i(b, $, F) {
    f.value = !0, y.value = null;
    try {
      let P;
      if (!wt()) {
        const R = Object.fromEntries($), q = Object.fromEntries(F);
        P = await p(
          `/v2/comfygit/workflow/${b}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: R,
              model_choices: q
            })
          }
        );
      }
      return d.value = P, P;
    } catch (P) {
      const R = P instanceof Error ? P.message : "Unknown error occurred";
      throw y.value = R, P;
    } finally {
      f.value = !1;
    }
  }
  async function m(b, $ = 10) {
    f.value = !0, y.value = null;
    try {
      let F;
      return wt() || (F = await p(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: b, limit: $ })
        }
      )), s.value = F.results, F.results;
    } catch (F) {
      const P = F instanceof Error ? F.message : "Unknown error occurred";
      throw y.value = P, F;
    } finally {
      f.value = !1;
    }
  }
  async function w(b, $ = 10) {
    f.value = !0, y.value = null;
    try {
      let F;
      return wt() || (F = await p(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: b, limit: $ })
        }
      )), r.value = F.results, F.results;
    } catch (F) {
      const P = F instanceof Error ? F.message : "Unknown error occurred";
      throw y.value = P, F;
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
  async function I(b, $, F) {
    z(), g.phase = "resolving", y.value = null;
    const P = Object.fromEntries($), R = Object.fromEntries(F);
    try {
      const q = await fetch(`/v2/comfygit/workflow/${b}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: P,
          model_choices: R
        })
      });
      if (!q.ok)
        throw new Error(`Request failed: ${q.status}`);
      if (!q.body)
        throw new Error("No response body");
      const L = q.body.getReader(), T = new TextDecoder();
      let N = "";
      for (; ; ) {
        const { done: M, value: S } = await L.read();
        if (M) break;
        N += T.decode(S, { stream: !0 });
        const O = N.split(`

`);
        N = O.pop() || "";
        for (const V of O) {
          if (!V.trim()) continue;
          const te = V.split(`
`);
          let W = "", A = "";
          for (const ee of te)
            ee.startsWith("event: ") ? W = ee.slice(7) : ee.startsWith("data: ") && (A = ee.slice(6));
          if (A)
            try {
              const ee = JSON.parse(A);
              _(W, ee);
            } catch (ee) {
              console.warn("Failed to parse SSE event:", ee);
            }
        }
      }
    } catch (q) {
      const L = q instanceof Error ? q.message : "Unknown error occurred";
      throw y.value = L, g.error = L, g.phase = "error", q;
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
    const { addToQueue: F } = pt(), P = $.filter((R) => R.url && R.target_path).map((R) => ({
      workflow: b,
      filename: R.filename,
      url: R.url,
      targetPath: R.target_path,
      size: R.size || 0,
      type: "model"
    }));
    return P.length > 0 && F(P), P.length;
  }
  return {
    // State
    result: t,
    appliedResult: d,
    searchResults: s,
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
const cl = { class: "resolution-stepper" }, ul = { class: "stepper-header" }, ml = ["onClick"], vl = {
  key: 0,
  class: "step-icon"
}, fl = {
  key: 1,
  class: "step-number"
}, gl = { class: "step-label" }, hl = {
  key: 0,
  class: "step-connector"
}, pl = { class: "stepper-content" }, yl = /* @__PURE__ */ Q({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: d }) {
    const s = t, r = d;
    function f(m) {
      var w;
      if ((w = s.stepStats) != null && w[m]) {
        const g = s.stepStats[m];
        return g.total > 0 && g.resolved === g.total;
      }
      return s.completedSteps.includes(m);
    }
    function y(m) {
      var w;
      if ((w = s.stepStats) != null && w[m]) {
        const g = s.stepStats[m];
        return g.resolved > 0 && g.resolved < g.total;
      }
      return !1;
    }
    function p(m) {
      return f(m) ? "state-complete" : y(m) ? "state-partial" : "state-pending";
    }
    function c(m) {
      return !1;
    }
    function i(m) {
      r("step-change", m);
    }
    return (m, w) => (o(), n("div", cl, [
      e("div", ul, [
        (o(!0), n(j, null, oe(t.steps, (g, z) => (o(), n("div", {
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
            class: se(["step-indicator", p(g.id)])
          }, [
            f(g.id) ? (o(), n("span", vl, "✓")) : (o(), n("span", fl, l(z + 1), 1))
          ], 2),
          e("div", gl, l(g.label), 1),
          z < t.steps.length - 1 ? (o(), n("div", hl)) : u("", !0)
        ], 10, ml))), 128))
      ]),
      e("div", pl, [
        re(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), wl = /* @__PURE__ */ X(yl, [["__scopeId", "data-v-2a7b3af8"]]), bl = /* @__PURE__ */ Q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = B(() => d.confidence >= 0.9 ? "high" : d.confidence >= 0.7 ? "medium" : "low"), r = B(() => `confidence-${s.value}`), f = B(() => d.showPercentage ? `${Math.round(d.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (y, p) => (o(), n("span", {
      class: se(["confidence-badge", r.value, t.size])
    }, l(f.value), 3));
  }
}), Lt = /* @__PURE__ */ X(bl, [["__scopeId", "data-v-17ec4b80"]]), kl = { class: "node-info" }, _l = { class: "node-info-text" }, $l = { class: "item-body" }, Cl = {
  key: 0,
  class: "resolved-state"
}, xl = {
  key: 1,
  class: "multiple-options"
}, Sl = { class: "options-list" }, Il = ["onClick"], El = ["name", "value", "checked", "onChange"], Ml = { class: "option-content" }, zl = { class: "option-header" }, Ll = { class: "option-package-id" }, Dl = {
  key: 0,
  class: "option-title"
}, Tl = { class: "option-meta" }, Rl = {
  key: 0,
  class: "installed-badge"
}, Nl = { class: "action-buttons" }, Ol = {
  key: 2,
  class: "unresolved"
}, Ul = { class: "action-buttons" }, Bl = /* @__PURE__ */ Q({
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
    const s = t, r = d, f = B(() => !!s.choice);
    B(() => {
      var c;
      return (c = s.choice) == null ? void 0 : c.action;
    }), B(() => {
      var c;
      return (c = s.choice) == null ? void 0 : c.package_id;
    });
    const y = B(() => {
      switch (s.status) {
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
    function p(c) {
      r("option-selected", c);
    }
    return (c, i) => (o(), n("div", {
      class: se(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: f.value }])
    }, [
      e("div", kl, [
        e("span", _l, [
          i[7] || (i[7] = h("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: se(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", $l, [
        f.value ? (o(), n("div", Cl, [
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (m) => r("clear-choice"))
          }, {
            default: a(() => [...i[8] || (i[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", xl, [
          i[12] || (i[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Sl, [
            (o(!0), n(j, null, oe(t.options, (m, w) => (o(), n("label", {
              key: m.package_id,
              class: se(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (g) => p(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (g) => p(w)
              }, null, 40, El),
              e("div", Ml, [
                e("div", zl, [
                  e("span", Ll, l(m.package_id), 1),
                  v(Lt, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                m.title && m.title !== m.package_id ? (o(), n("div", Dl, l(m.title), 1)) : u("", !0),
                e("div", Tl, [
                  m.is_installed ? (o(), n("span", Rl, "Already Installed")) : u("", !0)
                ])
              ])
            ], 10, Il))), 128))
          ]),
          e("div", Nl, [
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: i[1] || (i[1] = (m) => r("search"))
            }, {
              default: a(() => [...i[9] || (i[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: i[2] || (i[2] = (m) => r("manual-entry"))
            }, {
              default: a(() => [...i[10] || (i[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[3] || (i[3] = (m) => r("mark-optional"))
            }, {
              default: a(() => [...i[11] || (i[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Ol, [
          i[16] || (i[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Ul, [
            v(le, {
              variant: "primary",
              size: "sm",
              onClick: i[4] || (i[4] = (m) => r("search"))
            }, {
              default: a(() => [...i[13] || (i[13] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[5] || (i[5] = (m) => r("manual-entry"))
            }, {
              default: a(() => [...i[14] || (i[14] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: i[6] || (i[6] = (m) => r("mark-optional"))
            }, {
              default: a(() => [...i[15] || (i[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Pl = /* @__PURE__ */ X(Bl, [["__scopeId", "data-v-e02629e7"]]), Vl = { class: "item-navigator" }, Al = { class: "nav-item-info" }, Fl = ["title"], Wl = { class: "nav-controls" }, Gl = { class: "nav-arrows" }, jl = ["disabled"], Hl = ["disabled"], ql = { class: "nav-position" }, Kl = /* @__PURE__ */ Q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: d }) {
    const s = d;
    return (r, f) => (o(), n("div", Vl, [
      e("div", Al, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Fl)
      ]),
      e("div", Wl, [
        e("div", Gl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (y) => s("prev")),
            title: "Previous item"
          }, " ← ", 8, jl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (y) => s("next")),
            title: "Next item"
          }, " → ", 8, Hl)
        ]),
        e("span", ql, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), jt = /* @__PURE__ */ X(Kl, [["__scopeId", "data-v-74af7920"]]), Jl = ["type", "value", "placeholder", "disabled"], Yl = {
  key: 0,
  class: "base-input-error"
}, Ql = /* @__PURE__ */ Q({
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
    return (d, s) => (o(), n("div", {
      class: se(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: se(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          s[1] || (s[1] = We((r) => d.$emit("enter"), ["enter"])),
          s[2] || (s[2] = We((r) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Jl),
      t.error ? (o(), n("span", Yl, l(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Re = /* @__PURE__ */ X(Ql, [["__scopeId", "data-v-9ba02cdc"]]), Xl = { class: "node-resolution-step" }, Zl = { class: "step-header" }, ei = { class: "stat-badge" }, ti = {
  key: 1,
  class: "step-body"
}, oi = {
  key: 2,
  class: "empty-state"
}, si = { class: "node-search-modal" }, ni = { class: "node-modal-body" }, ai = {
  key: 0,
  class: "node-search-results"
}, li = ["onClick"], ii = { class: "node-result-header" }, ri = { class: "node-result-package-id" }, di = {
  key: 0,
  class: "node-result-description"
}, ci = {
  key: 1,
  class: "node-no-results"
}, ui = {
  key: 2,
  class: "node-searching"
}, mi = { class: "node-manual-entry-modal" }, vi = { class: "node-modal-body" }, fi = { class: "node-modal-actions" }, gi = /* @__PURE__ */ Q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: d }) {
    const s = t, r = d, f = C(0), y = C(!1), p = C(!1), c = C(""), i = C(""), m = C([]), w = C(!1), g = B(() => s.nodes[f.value]), z = B(() => s.nodes.filter((O) => s.nodeChoices.has(O.node_type)).length), I = B(() => {
      var V;
      if (!g.value) return "not-found";
      const O = s.nodeChoices.get(g.value.node_type);
      if (O)
        switch (O.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (V = g.value.options) != null && V.length ? "ambiguous" : "not-found";
    }), _ = B(() => {
      var V;
      if (!g.value) return;
      const O = s.nodeChoices.get(g.value.node_type);
      if (O)
        switch (O.action) {
          case "install":
            return O.package_id ? `→ ${O.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (V = g.value.options) != null && V.length ? `${g.value.options.length} matches` : "Not Found";
    });
    function x(O) {
      O >= 0 && O < s.nodes.length && (f.value = O);
    }
    function b() {
      g.value && r("mark-optional", g.value.node_type);
    }
    function $() {
      g.value && r("skip", g.value.node_type);
    }
    function F(O) {
      g.value && r("option-selected", g.value.node_type, O);
    }
    function P() {
      g.value && r("clear-choice", g.value.node_type);
    }
    function R() {
      g.value && (c.value = g.value.node_type, y.value = !0);
    }
    function q() {
      i.value = "", p.value = !0;
    }
    function L() {
      y.value = !1, c.value = "", m.value = [];
    }
    function T() {
      p.value = !1, i.value = "";
    }
    function N() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function M(O) {
      g.value && (r("manual-entry", g.value.node_type, O.package_id), L());
    }
    function S() {
      !g.value || !i.value.trim() || (r("manual-entry", g.value.node_type, i.value.trim()), T());
    }
    return (O, V) => {
      var te, W;
      return o(), n("div", Xl, [
        e("div", Zl, [
          V[4] || (V[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", ei, l(z.value) + "/" + l(t.nodes.length) + " resolved", 1)
        ]),
        g.value ? (o(), E(jt, {
          key: 0,
          "item-name": g.value.node_type,
          "current-index": f.value,
          "total-items": t.nodes.length,
          onPrev: V[0] || (V[0] = (A) => x(f.value - 1)),
          onNext: V[1] || (V[1] = (A) => x(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        g.value ? (o(), n("div", ti, [
          v(Pl, {
            "node-type": g.value.node_type,
            "has-multiple-options": !!((te = g.value.options) != null && te.length),
            options: g.value.options,
            choice: (W = t.nodeChoices) == null ? void 0 : W.get(g.value.node_type),
            status: I.value,
            "status-label": _.value,
            onMarkOptional: b,
            onSkip: $,
            onManualEntry: q,
            onSearch: R,
            onOptionSelected: F,
            onClearChoice: P
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", oi, [...V[5] || (V[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), E(_e, { to: "body" }, [
          y.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pe(L, ["self"])
          }, [
            e("div", si, [
              e("div", { class: "node-modal-header" }, [
                V[6] || (V[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", ni, [
                v(Re, {
                  modelValue: c.value,
                  "onUpdate:modelValue": V[2] || (V[2] = (A) => c.value = A),
                  placeholder: "Search by node type, package name...",
                  onInput: N
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (o(), n("div", ai, [
                  (o(!0), n(j, null, oe(m.value, (A) => (o(), n("div", {
                    key: A.package_id,
                    class: "node-search-result-item",
                    onClick: (ee) => M(A)
                  }, [
                    e("div", ii, [
                      e("code", ri, l(A.package_id), 1),
                      A.match_confidence ? (o(), E(Lt, {
                        key: 0,
                        confidence: A.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : u("", !0)
                    ]),
                    A.description ? (o(), n("div", di, l(A.description), 1)) : u("", !0)
                  ], 8, li))), 128))
                ])) : c.value && !w.value ? (o(), n("div", ci, ' No packages found matching "' + l(c.value) + '" ', 1)) : u("", !0),
                w.value ? (o(), n("div", ui, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), E(_e, { to: "body" }, [
          p.value ? (o(), n("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pe(T, ["self"])
          }, [
            e("div", mi, [
              e("div", { class: "node-modal-header" }, [
                V[7] || (V[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", vi, [
                v(Re, {
                  modelValue: i.value,
                  "onUpdate:modelValue": V[3] || (V[3] = (A) => i.value = A),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", fi, [
                  v(le, {
                    variant: "secondary",
                    onClick: T
                  }, {
                    default: a(() => [...V[8] || (V[8] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(le, {
                    variant: "primary",
                    disabled: !i.value.trim(),
                    onClick: S
                  }, {
                    default: a(() => [...V[9] || (V[9] = [
                      h(" Add Package ", -1)
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
}), hi = /* @__PURE__ */ X(gi, [["__scopeId", "data-v-4fb196b1"]]), pi = { class: "node-info" }, yi = { class: "node-info-text" }, wi = { class: "item-body" }, bi = {
  key: 0,
  class: "resolved-state"
}, ki = {
  key: 1,
  class: "multiple-options"
}, _i = { class: "options-list" }, $i = ["onClick"], Ci = ["name", "value", "checked", "onChange"], xi = { class: "option-content" }, Si = { class: "option-header" }, Ii = { class: "option-filename" }, Ei = { class: "option-meta" }, Mi = { class: "option-size" }, zi = { class: "option-category" }, Li = { class: "option-path" }, Di = { class: "action-buttons" }, Ti = {
  key: 2,
  class: "unresolved"
}, Ri = { class: "action-buttons" }, Ni = /* @__PURE__ */ Q({
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
    const s = t, r = d, f = B(() => !!s.choice);
    B(() => {
      var i;
      return (i = s.choice) == null ? void 0 : i.action;
    }), B(() => {
      var i, m;
      return ((m = (i = s.choice) == null ? void 0 : i.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const y = B(() => {
      switch (s.status) {
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
    function p(i) {
      r("option-selected", i);
    }
    function c(i) {
      if (!i) return "Unknown";
      const m = i / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, m) => (o(), n("div", {
      class: se(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", pi, [
        e("span", yi, [
          m[7] || (m[7] = h("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), n("span", {
          key: 0,
          class: se(["status-badge", y.value])
        }, l(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", wi, [
        f.value ? (o(), n("div", bi, [
          v(le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (w) => r("clear-choice"))
          }, {
            default: a(() => [...m[8] || (m[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), n("div", ki, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", _i, [
            (o(!0), n(j, null, oe(t.options, (w, g) => (o(), n("label", {
              key: w.model.hash,
              class: se(["option-card", { selected: t.selectedOptionIndex === g }]),
              onClick: (z) => p(g)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: g,
                checked: t.selectedOptionIndex === g,
                onChange: (z) => p(g)
              }, null, 40, Ci),
              e("div", xi, [
                e("div", Si, [
                  e("span", Ii, l(w.model.filename), 1),
                  v(Lt, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Ei, [
                  e("span", Mi, l(c(w.model.size)), 1),
                  e("span", zi, l(w.model.category), 1)
                ]),
                e("div", Li, l(w.model.relative_path), 1)
              ])
            ], 10, $i))), 128))
          ]),
          e("div", Di, [
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (w) => r("search"))
            }, {
              default: a(() => [...m[9] || (m[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (w) => r("download-url"))
            }, {
              default: a(() => [...m[10] || (m[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (w) => r("mark-optional"))
            }, {
              default: a(() => [...m[11] || (m[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), n("div", Ti, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Ri, [
            v(le, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (w) => r("search"))
            }, {
              default: a(() => [...m[13] || (m[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (w) => r("download-url"))
            }, {
              default: a(() => [...m[14] || (m[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (w) => r("mark-optional"))
            }, {
              default: a(() => [...m[15] || (m[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Oi = /* @__PURE__ */ X(Ni, [["__scopeId", "data-v-8a82fefa"]]), Ui = { class: "model-resolution-step" }, Bi = { class: "step-header" }, Pi = { class: "step-info" }, Vi = { class: "step-title" }, Ai = { class: "step-description" }, Fi = { class: "stat-badge" }, Wi = {
  key: 1,
  class: "step-body"
}, Gi = {
  key: 2,
  class: "empty-state"
}, ji = { class: "model-search-modal" }, Hi = { class: "model-modal-body" }, qi = {
  key: 0,
  class: "model-search-results"
}, Ki = ["onClick"], Ji = { class: "model-result-header" }, Yi = { class: "model-result-filename" }, Qi = { class: "model-result-meta" }, Xi = { class: "model-result-category" }, Zi = { class: "model-result-size" }, er = {
  key: 0,
  class: "model-result-path"
}, tr = {
  key: 1,
  class: "model-no-results"
}, or = {
  key: 2,
  class: "model-searching"
}, sr = { class: "model-download-url-modal" }, nr = { class: "model-modal-body" }, ar = { class: "model-input-group" }, lr = { class: "model-input-group" }, ir = { class: "model-modal-actions" }, rr = /* @__PURE__ */ Q({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: d }) {
    const s = {
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
    function r(J) {
      var U;
      return J && ((U = s[J]) == null ? void 0 : U[0]) || null;
    }
    const f = t, y = d, p = C(0), c = C(!1), i = C(!1), m = C(""), w = C(""), g = C(""), z = C([]), I = C(!1), _ = B(() => f.models[p.value]), x = B(() => f.models.some((J) => J.is_download_intent)), b = B(() => f.models.filter(
      (J) => f.modelChoices.has(J.filename) || J.is_download_intent
    ).length), $ = B(() => {
      var U;
      if (!_.value) return "";
      const J = r((U = _.value.reference) == null ? void 0 : U.node_type);
      return J ? `${J}/${_.value.filename}` : "";
    }), F = B(() => {
      var U;
      if (!_.value) return "not-found";
      const J = f.modelChoices.get(_.value.filename);
      if (J)
        switch (J.action) {
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
      return _.value.is_download_intent ? "download" : (U = _.value.options) != null && U.length ? "ambiguous" : "not-found";
    }), P = B(() => {
      var U, ae;
      if (!_.value) return;
      const J = f.modelChoices.get(_.value.filename);
      if (J)
        switch (J.action) {
          case "select":
            return (U = J.selected_model) != null && U.filename ? `→ ${J.selected_model.filename}` : "Selected";
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
    function R(J) {
      J >= 0 && J < f.models.length && (p.value = J);
    }
    function q() {
      _.value && y("mark-optional", _.value.filename);
    }
    function L() {
      _.value && y("skip", _.value.filename);
    }
    function T(J) {
      _.value && y("option-selected", _.value.filename, J);
    }
    function N() {
      _.value && y("clear-choice", _.value.filename);
    }
    function M() {
      _.value && (m.value = _.value.filename, c.value = !0);
    }
    function S() {
      _.value && (w.value = _.value.download_source || "", g.value = _.value.target_path || $.value, i.value = !0);
    }
    function O() {
      c.value = !1, m.value = "", z.value = [];
    }
    function V() {
      i.value = !1, w.value = "", g.value = "";
    }
    function te() {
      I.value = !0, setTimeout(() => {
        I.value = !1;
      }, 300);
    }
    function W(J) {
      _.value && O();
    }
    function A() {
      !_.value || !w.value.trim() || (y("download-url", _.value.filename, w.value.trim(), g.value.trim() || void 0), V());
    }
    function ee(J) {
      if (!J) return "Unknown";
      const U = J / (1024 * 1024 * 1024);
      return U >= 1 ? `${U.toFixed(2)} GB` : `${(J / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (J, U) => {
      var ae, Y, be;
      return o(), n("div", Ui, [
        e("div", Bi, [
          e("div", Pi, [
            e("h3", Vi, l(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Ai, l(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Fi, l(b.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        _.value ? (o(), E(jt, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": p.value,
          "total-items": t.models.length,
          onPrev: U[0] || (U[0] = (ve) => R(p.value - 1)),
          onNext: U[1] || (U[1] = (ve) => R(p.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        _.value ? (o(), n("div", Wi, [
          v(Oi, {
            filename: _.value.filename,
            "node-type": ((ae = _.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((Y = _.value.options) != null && Y.length),
            options: _.value.options,
            choice: (be = t.modelChoices) == null ? void 0 : be.get(_.value.filename),
            status: F.value,
            "status-label": P.value,
            onMarkOptional: q,
            onSkip: L,
            onDownloadUrl: S,
            onSearch: M,
            onOptionSelected: T,
            onClearChoice: N
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), n("div", Gi, [...U[5] || (U[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), E(_e, { to: "body" }, [
          c.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pe(O, ["self"])
          }, [
            e("div", ji, [
              e("div", { class: "model-modal-header" }, [
                U[6] || (U[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", Hi, [
                v(Re, {
                  modelValue: m.value,
                  "onUpdate:modelValue": U[2] || (U[2] = (ve) => m.value = ve),
                  placeholder: "Search by filename, category...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                z.value.length > 0 ? (o(), n("div", qi, [
                  (o(!0), n(j, null, oe(z.value, (ve) => (o(), n("div", {
                    key: ve.hash,
                    class: "model-search-result-item",
                    onClick: (ze) => W()
                  }, [
                    e("div", Ji, [
                      e("code", Yi, l(ve.filename), 1)
                    ]),
                    e("div", Qi, [
                      e("span", Xi, l(ve.category), 1),
                      e("span", Zi, l(ee(ve.size)), 1)
                    ]),
                    ve.relative_path ? (o(), n("div", er, l(ve.relative_path), 1)) : u("", !0)
                  ], 8, Ki))), 128))
                ])) : m.value && !I.value ? (o(), n("div", tr, ' No models found matching "' + l(m.value) + '" ', 1)) : u("", !0),
                I.value ? (o(), n("div", or, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), E(_e, { to: "body" }, [
          i.value ? (o(), n("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pe(V, ["self"])
          }, [
            e("div", sr, [
              e("div", { class: "model-modal-header" }, [
                U[7] || (U[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", nr, [
                e("div", ar, [
                  U[8] || (U[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  v(Re, {
                    modelValue: w.value,
                    "onUpdate:modelValue": U[3] || (U[3] = (ve) => w.value = ve),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", lr, [
                  U[9] || (U[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  v(Re, {
                    modelValue: g.value,
                    "onUpdate:modelValue": U[4] || (U[4] = (ve) => g.value = ve),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", ir, [
                  v(le, {
                    variant: "secondary",
                    onClick: V
                  }, {
                    default: a(() => [...U[10] || (U[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  v(le, {
                    variant: "primary",
                    disabled: !w.value.trim() || !g.value.trim(),
                    onClick: A
                  }, {
                    default: a(() => [...U[11] || (U[11] = [
                      h(" Queue Download ", -1)
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
}), dr = /* @__PURE__ */ X(rr, [["__scopeId", "data-v-c6acbada"]]), cr = { class: "applying-step" }, ur = {
  key: 0,
  class: "phase-content"
}, mr = {
  key: 1,
  class: "phase-content"
}, vr = { class: "completion-summary" }, fr = {
  key: 0,
  class: "summary-item info"
}, gr = { class: "summary-text" }, hr = {
  key: 2,
  class: "phase-content error"
}, pr = { class: "error-message" }, yr = /* @__PURE__ */ Q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  setup(t) {
    return (d, s) => (o(), n("div", cr, [
      t.progress.phase === "resolving" ? (o(), n("div", ur, [...s[0] || (s[0] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "complete" ? (o(), n("div", mr, [
        s[4] || (s[4] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", vr, [
          t.progress.nodesToInstall.length > 0 ? (o(), n("div", fr, [
            s[1] || (s[1] = e("span", { class: "summary-icon" }, "→", -1)),
            e("span", gr, l(t.progress.nodesToInstall.length) + " node(s) need installation", 1)
          ])) : u("", !0),
          s[2] || (s[2] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          s[3] || (s[3] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1))
        ])
      ])) : t.progress.phase === "error" ? (o(), n("div", hr, [
        s[5] || (s[5] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", pr, l(t.progress.error), 1)
      ])) : u("", !0)
    ]));
  }
}), wr = /* @__PURE__ */ X(yr, [["__scopeId", "data-v-b4d7e0eb"]]), br = {
  key: 0,
  class: "loading-state"
}, kr = {
  key: 1,
  class: "wizard-content"
}, _r = {
  key: 0,
  class: "step-content"
}, $r = { class: "analysis-summary" }, Cr = { class: "analysis-header" }, xr = { class: "summary-description" }, Sr = { class: "stats-grid" }, Ir = { class: "stat-card" }, Er = { class: "stat-items" }, Mr = { class: "stat-item success" }, zr = { class: "stat-count" }, Lr = {
  key: 0,
  class: "stat-item warning"
}, Dr = { class: "stat-count" }, Tr = {
  key: 1,
  class: "stat-item error"
}, Rr = { class: "stat-count" }, Nr = { class: "stat-card" }, Or = { class: "stat-items" }, Ur = { class: "stat-item success" }, Br = { class: "stat-count" }, Pr = {
  key: 0,
  class: "stat-item info"
}, Vr = { class: "stat-count" }, Ar = {
  key: 1,
  class: "stat-item warning"
}, Fr = { class: "stat-count" }, Wr = {
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
  class: "status-message success"
}, Yr = {
  key: 3,
  class: "step-content"
}, Qr = { class: "review-summary" }, Xr = { class: "review-stats" }, Zr = { class: "review-stat" }, ed = { class: "stat-value" }, td = { class: "review-stat" }, od = { class: "stat-value" }, sd = { class: "review-stat" }, nd = { class: "stat-value" }, ad = { class: "review-stat" }, ld = { class: "stat-value" }, id = {
  key: 0,
  class: "review-section"
}, rd = { class: "section-title" }, dd = { class: "review-items" }, cd = { class: "item-name" }, ud = { class: "item-choice" }, md = {
  key: 0,
  class: "choice-badge install"
}, vd = {
  key: 1,
  class: "choice-badge optional"
}, fd = {
  key: 2,
  class: "choice-badge skip"
}, gd = {
  key: 1,
  class: "choice-badge pending"
}, hd = {
  key: 1,
  class: "review-section"
}, pd = { class: "section-title" }, yd = { class: "review-items" }, wd = { class: "item-name" }, bd = { class: "item-choice" }, kd = {
  key: 0,
  class: "choice-badge install"
}, _d = {
  key: 1,
  class: "choice-badge download"
}, $d = {
  key: 2,
  class: "choice-badge optional"
}, Cd = {
  key: 3,
  class: "choice-badge skip"
}, xd = {
  key: 4,
  class: "choice-badge skip"
}, Sd = {
  key: 1,
  class: "choice-badge download"
}, Id = {
  key: 2,
  class: "choice-badge pending"
}, Ed = {
  key: 2,
  class: "no-choices"
}, Md = /* @__PURE__ */ Q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: d }) {
    const s = t, r = d, { analyzeWorkflow: f, applyResolution: y, queueModelDownloads: p, progress: c, resetProgress: i } = dl(), { loadPendingDownloads: m } = pt(), w = C(null), g = C(!1), z = C(!1), I = C(null), _ = C("analysis"), x = C([]), b = C(/* @__PURE__ */ new Map()), $ = C(/* @__PURE__ */ new Map()), F = B(() => {
      const K = [
        { id: "analysis", label: "Analysis" }
      ];
      return R.value && K.push({ id: "nodes", label: "Nodes" }), (q.value || L.value) && K.push({ id: "models", label: "Models" }), K.push({ id: "review", label: "Review" }), _.value === "applying" && K.push({ id: "applying", label: "Applying" }), K;
    }), P = B(() => w.value ? w.value.stats.needs_user_input : !1), R = B(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), q = B(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), L = B(() => w.value ? w.value.stats.download_intents > 0 : !1), T = B(() => w.value ? w.value.models.resolved.filter((K) => K.match_type === "download_intent").map((K) => ({
      filename: K.reference.widget_value,
      reference: K.reference,
      is_download_intent: !0,
      resolved_model: K.model,
      download_source: K.download_source,
      target_path: K.target_path
    })) : []), N = B(() => {
      if (!w.value) return [];
      const K = w.value.nodes.unresolved.map((G) => ({
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
      return [...K, ...k];
    }), M = B(() => {
      if (!w.value) return [];
      const K = w.value.models.unresolved.map((G) => ({
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
      return [...K, ...k];
    }), S = B(() => {
      const K = M.value, k = T.value.map((G) => ({
        filename: G.filename,
        reference: G.reference,
        is_download_intent: !0,
        resolved_model: G.resolved_model,
        download_source: G.download_source,
        target_path: G.target_path,
        options: void 0
      }));
      return [...K, ...k];
    }), O = B(() => {
      let K = 0;
      for (const k of b.value.values())
        k.action === "install" && K++;
      for (const k of $.value.values())
        k.action === "select" && K++;
      return K;
    }), V = B(() => {
      let K = 0;
      for (const k of $.value.values())
        k.action === "download" && K++;
      return K;
    }), te = B(() => {
      let K = 0;
      for (const k of b.value.values())
        k.action === "optional" && K++;
      for (const k of $.value.values())
        k.action === "optional" && K++;
      return K;
    }), W = B(() => {
      let K = 0;
      for (const k of b.value.values())
        k.action === "skip" && K++;
      for (const k of $.value.values())
        k.action === "skip" && K++;
      for (const k of N.value)
        b.value.has(k.node_type) || K++;
      for (const k of M.value)
        $.value.has(k.filename) || K++;
      return K;
    }), A = B(() => {
      const K = {};
      if (K.analysis = { resolved: 1, total: 1 }, R.value) {
        const k = N.value.length, G = N.value.filter(
          (ne) => b.value.has(ne.node_type)
        ).length;
        K.nodes = { resolved: G, total: k };
      }
      if (q.value || L.value) {
        const k = S.value.length, G = S.value.filter(
          (ne) => $.value.has(ne.filename) || ne.is_download_intent
        ).length;
        K.models = { resolved: G, total: k };
      }
      if (K.review = { resolved: 1, total: 1 }, _.value === "applying") {
        const k = c.totalFiles || 1, G = c.completedFiles.length;
        K.applying = { resolved: G, total: k };
      }
      return K;
    });
    function ee(K) {
      _.value = K;
    }
    function J() {
      const K = F.value.findIndex((k) => k.id === _.value);
      K > 0 && (_.value = F.value[K - 1].id);
    }
    function U() {
      const K = F.value.findIndex((k) => k.id === _.value);
      K < F.value.length - 1 && (_.value = F.value[K + 1].id);
    }
    async function ae() {
      g.value = !0, I.value = null;
      try {
        w.value = await f(s.workflowName);
      } catch (K) {
        I.value = K instanceof Error ? K.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function Y() {
      x.value.includes("analysis") || x.value.push("analysis"), R.value ? _.value = "nodes" : q.value || L.value ? _.value = "models" : _.value = "review";
    }
    function be(K) {
      b.value.set(K, { action: "optional" });
    }
    function ve(K) {
      b.value.set(K, { action: "skip" });
    }
    function ze(K, k) {
      var ne;
      const G = N.value.find((ge) => ge.node_type === K);
      (ne = G == null ? void 0 : G.options) != null && ne[k] && b.value.set(K, {
        action: "install",
        package_id: G.options[k].package_id
      });
    }
    function lt(K, k) {
      b.value.set(K, {
        action: "install",
        package_id: k
      });
    }
    function me(K) {
      b.value.delete(K);
    }
    function Me(K) {
      $.value.set(K, { action: "optional" });
    }
    function it(K) {
      $.value.set(K, { action: "skip" });
    }
    function Ke(K, k) {
      var ne;
      const G = M.value.find((ge) => ge.filename === K);
      (ne = G == null ? void 0 : G.options) != null && ne[k] && $.value.set(K, {
        action: "select",
        selected_model: G.options[k].model
      });
    }
    function Se(K, k, G) {
      $.value.set(K, {
        action: "download",
        url: k,
        target_path: G
      });
    }
    function rt(K) {
      $.value.delete(K);
    }
    async function Ze() {
      z.value = !0, I.value = null, i(), c.phase = "resolving", _.value = "applying";
      try {
        const K = await y(s.workflowName, b.value, $.value);
        K.models_to_download && K.models_to_download.length > 0 && p(s.workflowName, K.models_to_download), c.nodesToInstall = K.nodes_to_install || [], c.phase = "complete", await m(), setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (K) {
        I.value = K instanceof Error ? K.message : "Failed to apply resolution", c.error = I.value, c.phase = "error";
      } finally {
        z.value = !1;
      }
    }
    return we(ae), (K, k) => (o(), E(st, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: g.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: k[1] || (k[1] = (G) => r("close"))
    }, {
      body: a(() => [
        g.value && !w.value ? (o(), n("div", br, [...k[2] || (k[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (o(), n("div", kr, [
          v(wl, {
            steps: F.value,
            "current-step": _.value,
            "completed-steps": x.value,
            "step-stats": A.value,
            onStepChange: ee
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          _.value === "analysis" ? (o(), n("div", _r, [
            e("div", $r, [
              e("div", Cr, [
                k[3] || (k[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", xr, " Found " + l(w.value.stats.total_nodes) + " nodes and " + l(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Sr, [
                e("div", Ir, [
                  k[10] || (k[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Er, [
                    e("div", Mr, [
                      k[4] || (k[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zr, l(w.value.nodes.resolved.length), 1),
                      k[5] || (k[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.nodes.ambiguous.length > 0 ? (o(), n("div", Lr, [
                      k[6] || (k[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Dr, l(w.value.nodes.ambiguous.length), 1),
                      k[7] || (k[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    w.value.nodes.unresolved.length > 0 ? (o(), n("div", Tr, [
                      k[8] || (k[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Rr, l(w.value.nodes.unresolved.length), 1),
                      k[9] || (k[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ]),
                e("div", Nr, [
                  k[19] || (k[19] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Or, [
                    e("div", Ur, [
                      k[11] || (k[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Br, l(w.value.models.resolved.length - w.value.stats.download_intents), 1),
                      k[12] || (k[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (o(), n("div", Pr, [
                      k[13] || (k[13] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Vr, l(w.value.stats.download_intents), 1),
                      k[14] || (k[14] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : u("", !0),
                    w.value.models.ambiguous.length > 0 ? (o(), n("div", Ar, [
                      k[15] || (k[15] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Fr, l(w.value.models.ambiguous.length), 1),
                      k[16] || (k[16] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    w.value.models.unresolved.length > 0 ? (o(), n("div", Wr, [
                      k[17] || (k[17] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Gr, l(w.value.models.unresolved.length), 1),
                      k[18] || (k[18] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ])
              ]),
              P.value ? (o(), n("div", jr, [
                k[20] || (k[20] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Hr, l(N.value.length + M.value.length) + " items need your input", 1)
              ])) : L.value ? (o(), n("div", qr, [
                k[21] || (k[21] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Kr, l(w.value.stats.download_intents) + " model" + l(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), n("div", Jr, [...k[22] || (k[22] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : u("", !0),
          _.value === "nodes" ? (o(), E(hi, {
            key: 1,
            nodes: N.value,
            "node-choices": b.value,
            onMarkOptional: be,
            onSkip: ve,
            onOptionSelected: ze,
            onManualEntry: lt,
            onClearChoice: me
          }, null, 8, ["nodes", "node-choices"])) : u("", !0),
          _.value === "models" ? (o(), E(dr, {
            key: 2,
            models: S.value,
            "model-choices": $.value,
            onMarkOptional: Me,
            onSkip: it,
            onOptionSelected: Ke,
            onDownloadUrl: Se,
            onClearChoice: rt
          }, null, 8, ["models", "model-choices"])) : u("", !0),
          _.value === "review" ? (o(), n("div", Yr, [
            e("div", Qr, [
              k[27] || (k[27] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Xr, [
                e("div", Zr, [
                  e("span", ed, l(O.value), 1),
                  k[23] || (k[23] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", td, [
                  e("span", od, l(V.value), 1),
                  k[24] || (k[24] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", sd, [
                  e("span", nd, l(te.value), 1),
                  k[25] || (k[25] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", ad, [
                  e("span", ld, l(W.value), 1),
                  k[26] || (k[26] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              N.value.length > 0 ? (o(), n("div", id, [
                e("h4", rd, "Node Packages (" + l(N.value.length) + ")", 1),
                e("div", dd, [
                  (o(!0), n(j, null, oe(N.value, (G) => {
                    var ne, ge, Oe, Ue;
                    return o(), n("div", {
                      key: G.node_type,
                      class: "review-item"
                    }, [
                      e("code", cd, l(G.node_type), 1),
                      e("div", ud, [
                        b.value.has(G.node_type) ? (o(), n(j, { key: 0 }, [
                          ((ne = b.value.get(G.node_type)) == null ? void 0 : ne.action) === "install" ? (o(), n("span", md, l((ge = b.value.get(G.node_type)) == null ? void 0 : ge.package_id), 1)) : ((Oe = b.value.get(G.node_type)) == null ? void 0 : Oe.action) === "optional" ? (o(), n("span", vd, " Optional ")) : ((Ue = b.value.get(G.node_type)) == null ? void 0 : Ue.action) === "skip" ? (o(), n("span", fd, " Skip ")) : u("", !0)
                        ], 64)) : (o(), n("span", gd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              S.value.length > 0 ? (o(), n("div", hd, [
                e("h4", pd, "Models (" + l(S.value.length) + ")", 1),
                e("div", yd, [
                  (o(!0), n(j, null, oe(S.value, (G) => {
                    var ne, ge, Oe, Ue, Je, yt, Be;
                    return o(), n("div", {
                      key: G.filename,
                      class: "review-item"
                    }, [
                      e("code", wd, l(G.filename), 1),
                      e("div", bd, [
                        $.value.has(G.filename) ? (o(), n(j, { key: 0 }, [
                          ((ne = $.value.get(G.filename)) == null ? void 0 : ne.action) === "select" ? (o(), n("span", kd, l((Oe = (ge = $.value.get(G.filename)) == null ? void 0 : ge.selected_model) == null ? void 0 : Oe.filename), 1)) : ((Ue = $.value.get(G.filename)) == null ? void 0 : Ue.action) === "download" ? (o(), n("span", _d, " Download ")) : ((Je = $.value.get(G.filename)) == null ? void 0 : Je.action) === "optional" ? (o(), n("span", $d, " Optional ")) : ((yt = $.value.get(G.filename)) == null ? void 0 : yt.action) === "skip" ? (o(), n("span", Cd, " Skip ")) : ((Be = $.value.get(G.filename)) == null ? void 0 : Be.action) === "cancel_download" ? (o(), n("span", xd, " Cancel Download ")) : u("", !0)
                        ], 64)) : G.is_download_intent ? (o(), n("span", Sd, " Pending Download ")) : (o(), n("span", Id, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              N.value.length === 0 && S.value.length === 0 ? (o(), n("div", Ed, " No dependencies need resolution. ")) : u("", !0)
            ])
          ])) : u("", !0),
          _.value === "applying" ? (o(), E(wr, {
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
          onClick: J
        }, {
          default: a(() => [...k[28] || (k[28] = [
            h(" ← Back ", -1)
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
            h(l(ce(c).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : u("", !0),
        _.value === "analysis" ? (o(), E(le, {
          key: 2,
          variant: "primary",
          disabled: g.value,
          onClick: Y
        }, {
          default: a(() => [
            h(l(P.value || L.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        _.value === "nodes" ? (o(), E(le, {
          key: 3,
          variant: "primary",
          onClick: U
        }, {
          default: a(() => [
            h(l(q.value || L.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : u("", !0),
        _.value === "models" ? (o(), E(le, {
          key: 4,
          variant: "primary",
          onClick: U
        }, {
          default: a(() => [...k[29] || (k[29] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : u("", !0),
        _.value === "review" ? (o(), E(le, {
          key: 5,
          variant: "primary",
          disabled: z.value,
          loading: z.value,
          onClick: Ze
        }, {
          default: a(() => [...k[30] || (k[30] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), zd = /* @__PURE__ */ X(Md, [["__scopeId", "data-v-08beb8e3"]]), Ld = { class: "search-input-wrapper" }, Dd = ["value", "placeholder"], Td = /* @__PURE__ */ Q({
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
    const s = t, r = d, f = C(null);
    let y;
    function p(i) {
      const m = i.target.value;
      s.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", m);
      }, s.debounce)) : r("update:modelValue", m);
    }
    function c() {
      var i;
      r("update:modelValue", ""), r("clear"), (i = f.value) == null || i.focus();
    }
    return we(() => {
      s.autoFocus && f.value && f.value.focus();
    }), (i, m) => (o(), n("div", Ld, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: p,
        onKeyup: We(c, ["escape"])
      }, null, 40, Dd),
      t.clearable && t.modelValue ? (o(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), Rd = /* @__PURE__ */ X(Td, [["__scopeId", "data-v-266f857a"]]), Nd = { class: "search-bar" }, Od = /* @__PURE__ */ Q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (d, s) => (o(), n("div", Nd, [
      v(Rd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => d.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), nt = /* @__PURE__ */ X(Od, [["__scopeId", "data-v-3d51bbfd"]]), Ud = { class: "section-group" }, Bd = {
  key: 0,
  class: "section-content"
}, Pd = /* @__PURE__ */ Q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: d }) {
    const s = t, r = d, f = C(s.initiallyExpanded);
    function y() {
      s.collapsible && (f.value = !f.value, r("toggle", f.value));
    }
    return (p, c) => (o(), n("section", Ud, [
      v(Ee, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: y
      }, {
        default: a(() => [
          h(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (o(), n("div", Bd, [
        re(p.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), ye = /* @__PURE__ */ X(Pd, [["__scopeId", "data-v-c48e33ed"]]), Vd = { class: "item-header" }, Ad = {
  key: 0,
  class: "item-icon"
}, Fd = { class: "item-info" }, Wd = {
  key: 0,
  class: "item-title"
}, Gd = {
  key: 1,
  class: "item-subtitle"
}, jd = {
  key: 0,
  class: "item-details"
}, Hd = {
  key: 1,
  class: "item-actions"
}, qd = /* @__PURE__ */ Q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: d }) {
    const s = t, r = B(() => s.status ? `status-${s.status}` : "");
    return (f, y) => (o(), n("div", {
      class: se(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (p) => t.clickable && f.$emit("click"))
    }, [
      e("div", Vd, [
        f.$slots.icon ? (o(), n("span", Ad, [
          re(f.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        e("div", Fd, [
          f.$slots.title ? (o(), n("div", Wd, [
            re(f.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          f.$slots.subtitle ? (o(), n("div", Gd, [
            re(f.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      f.$slots.details ? (o(), n("div", jd, [
        re(f.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      f.$slots.actions ? (o(), n("div", Hd, [
        re(f.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ X(qd, [["__scopeId", "data-v-cc435e0e"]]), Kd = { class: "loading-state" }, Jd = { class: "loading-message" }, Yd = /* @__PURE__ */ Q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (d, s) => (o(), n("div", Kd, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Jd, l(t.message), 1)
    ]));
  }
}), je = /* @__PURE__ */ X(Yd, [["__scopeId", "data-v-ad8436c9"]]), Qd = { class: "error-state" }, Xd = { class: "error-message" }, Zd = /* @__PURE__ */ Q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (d, s) => (o(), n("div", Qd, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Xd, l(t.message), 1),
      t.retry ? (o(), E(Z, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => d.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), He = /* @__PURE__ */ X(Zd, [["__scopeId", "data-v-5397be48"]]), ec = /* @__PURE__ */ Q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: d, emit: s }) {
    const r = s, { getWorkflows: f } = $e(), y = C([]), p = C(!1), c = C(null), i = C(""), m = C(!0), w = C(!1), g = C(!1), z = C(!1), I = C(null), _ = B(
      () => y.value.filter((W) => W.status === "broken")
    ), x = B(
      () => y.value.filter((W) => W.status === "new")
    ), b = B(
      () => y.value.filter((W) => W.status === "modified")
    ), $ = B(
      () => y.value.filter((W) => W.status === "synced")
    ), F = B(() => {
      if (!i.value.trim()) return y.value;
      const W = i.value.toLowerCase();
      return y.value.filter((A) => A.name.toLowerCase().includes(W));
    }), P = B(
      () => _.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), R = B(
      () => x.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), q = B(
      () => b.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), L = B(
      () => $.value.filter(
        (W) => !i.value.trim() || W.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), T = B(
      () => w.value ? L.value : L.value.slice(0, 5)
    );
    async function N(W = !1) {
      p.value = !0, c.value = null;
      try {
        y.value = await f(W);
      } catch (A) {
        c.value = A instanceof Error ? A.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    d({ loadWorkflows: N });
    function M(W) {
      I.value = W, g.value = !0;
    }
    function S(W) {
      I.value = W, z.value = !0;
    }
    function O() {
      alert("Bulk resolution not yet implemented");
    }
    function V() {
      r("refresh");
    }
    function te(W) {
      const A = [];
      return W.missing_nodes > 0 && A.push(`${W.missing_nodes} missing node${W.missing_nodes > 1 ? "s" : ""}`), W.missing_models > 0 && A.push(`${W.missing_models} missing model${W.missing_models > 1 ? "s" : ""}`), W.pending_downloads && W.pending_downloads > 0 && A.push(`${W.pending_downloads} pending download${W.pending_downloads > 1 ? "s" : ""}`), A.length > 0 ? A.join(", ") : "Has issues";
    }
    return we(N), (W, A) => (o(), n(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, { title: "WORKFLOWS" }, {
            actions: a(() => [
              _.value.length > 0 ? (o(), E(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: a(() => [...A[8] || (A[8] = [
                  h(" Resolve All Issues ", -1)
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
            "onUpdate:modelValue": A[0] || (A[0] = (ee) => i.value = ee),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          p.value ? (o(), E(je, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (o(), E(He, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (o(), n(j, { key: 2 }, [
            P.value.length ? (o(), E(ye, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: a(() => [
                (o(!0), n(j, null, oe(P.value, (ee) => (o(), E(ke, {
                  key: ee.name,
                  status: "broken"
                }, {
                  icon: a(() => [...A[9] || (A[9] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(l(ee.name), 1)
                  ]),
                  subtitle: a(() => [
                    h(l(te(ee)), 1)
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => S(ee.name)
                    }, {
                      default: a(() => [...A[10] || (A[10] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (J) => M(ee.name)
                    }, {
                      default: a(() => [...A[11] || (A[11] = [
                        h(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            R.value.length ? (o(), E(ye, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: a(() => [
                (o(!0), n(j, null, oe(R.value, (ee) => (o(), E(ke, {
                  key: ee.name,
                  status: "new"
                }, {
                  icon: a(() => [...A[12] || (A[12] = [
                    h("●", -1)
                  ])]),
                  title: a(() => [
                    h(l(ee.name), 1)
                  ]),
                  subtitle: a(() => [...A[13] || (A[13] = [
                    h("New", -1)
                  ])]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (J) => M(ee.name)
                    }, {
                      default: a(() => [...A[14] || (A[14] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            q.value.length ? (o(), E(ye, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: a(() => [
                (o(!0), n(j, null, oe(q.value, (ee) => (o(), E(ke, {
                  key: ee.name,
                  status: "modified"
                }, {
                  icon: a(() => [...A[15] || (A[15] = [
                    h("⚡", -1)
                  ])]),
                  title: a(() => [
                    h(l(ee.name), 1)
                  ]),
                  subtitle: a(() => [...A[16] || (A[16] = [
                    h("Modified", -1)
                  ])]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (J) => M(ee.name)
                    }, {
                      default: a(() => [...A[17] || (A[17] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            L.value.length ? (o(), E(ye, {
              key: 3,
              title: "SYNCED",
              count: L.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: A[2] || (A[2] = (ee) => m.value = ee)
            }, {
              default: a(() => [
                (o(!0), n(j, null, oe(T.value, (ee) => (o(), E(ke, {
                  key: ee.name,
                  status: "synced"
                }, {
                  icon: a(() => [...A[18] || (A[18] = [
                    h("✓", -1)
                  ])]),
                  title: a(() => [
                    h(l(ee.name), 1)
                  ]),
                  subtitle: a(() => [...A[19] || (A[19] = [
                    h("Synced", -1)
                  ])]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (J) => M(ee.name)
                    }, {
                      default: a(() => [...A[20] || (A[20] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !w.value && L.value.length > 5 ? (o(), E(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: A[1] || (A[1] = (ee) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    h(" View all " + l(L.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : u("", !0),
            F.value.length ? u("", !0) : (o(), E(Ne, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && I.value ? (o(), E(ll, {
        key: 0,
        "workflow-name": I.value,
        onClose: A[3] || (A[3] = (ee) => g.value = !1),
        onResolve: A[4] || (A[4] = (ee) => S(I.value)),
        onRefresh: A[5] || (A[5] = (ee) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0),
      z.value && I.value ? (o(), E(zd, {
        key: 1,
        "workflow-name": I.value,
        onClose: A[6] || (A[6] = (ee) => z.value = !1),
        onInstall: V,
        onRefresh: A[7] || (A[7] = (ee) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ], 64));
  }
}), tc = /* @__PURE__ */ X(ec, [["__scopeId", "data-v-af6b1cd7"]]), oc = /* @__PURE__ */ Q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: se(["summary-bar", t.variant])
    }, [
      re(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), at = /* @__PURE__ */ X(oc, [["__scopeId", "data-v-ccb7816e"]]), sc = {
  key: 0,
  class: "model-details"
}, nc = { class: "detail-section" }, ac = { class: "detail-row" }, lc = { class: "detail-value mono" }, ic = { class: "detail-row" }, rc = { class: "detail-value mono" }, dc = { class: "detail-row" }, cc = { class: "detail-value mono" }, uc = { class: "detail-row" }, mc = { class: "detail-value" }, vc = { class: "detail-row" }, fc = { class: "detail-value" }, gc = { class: "detail-row" }, hc = { class: "detail-value" }, pc = { class: "detail-section" }, yc = { class: "section-header" }, wc = {
  key: 0,
  class: "locations-list"
}, bc = { class: "location-path mono" }, kc = {
  key: 0,
  class: "location-modified"
}, _c = ["onClick"], $c = {
  key: 1,
  class: "empty-state"
}, Cc = { class: "detail-section" }, xc = { class: "section-header" }, Sc = {
  key: 0,
  class: "sources-list"
}, Ic = { class: "source-type" }, Ec = ["href"], Mc = ["disabled", "onClick"], zc = {
  key: 1,
  class: "empty-state"
}, Lc = { class: "add-source-form" }, Dc = ["disabled"], Tc = {
  key: 2,
  class: "source-error"
}, Rc = {
  key: 3,
  class: "source-success"
}, Nc = /* @__PURE__ */ Q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const s = t, { getModelDetails: r, addModelSource: f, removeModelSource: y, openFileLocation: p } = $e(), c = C(null), i = C(!0), m = C(null), w = C(""), g = C(!1), z = C(null), I = C(null), _ = C(null), x = C(null);
    let b = null;
    function $(N, M = "success", S = 2e3) {
      b && clearTimeout(b), x.value = { message: N, type: M }, b = setTimeout(() => {
        x.value = null;
      }, S);
    }
    function F(N) {
      if (!N) return "Unknown";
      const M = 1024 * 1024 * 1024, S = 1024 * 1024;
      return N >= M ? `${(N / M).toFixed(1)} GB` : N >= S ? `${(N / S).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function P(N) {
      navigator.clipboard.writeText(N), $("Copied to clipboard!");
    }
    async function R(N) {
      try {
        await p(N), $("Opening file location...");
      } catch {
        $("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!w.value.trim() || !c.value)) {
        g.value = !0, I.value = null, _.value = null;
        try {
          await f(c.value.hash, w.value.trim()), _.value = "Source added successfully!", w.value = "", await T();
        } catch (N) {
          I.value = N instanceof Error ? N.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function L(N) {
      if (c.value) {
        z.value = N, I.value = null, _.value = null;
        try {
          await y(c.value.hash, N), $("Source removed"), await T();
        } catch (M) {
          I.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          z.value = null;
        }
      }
    }
    async function T() {
      i.value = !0, m.value = null;
      try {
        c.value = await r(s.identifier);
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to load model details";
      } finally {
        i.value = !1;
      }
    }
    return we(T), (N, M) => {
      var S;
      return o(), n(j, null, [
        v(st, {
          title: `Model Details: ${((S = c.value) == null ? void 0 : S.filename) || "Loading..."}`,
          size: "lg",
          loading: i.value,
          error: m.value,
          onClose: M[5] || (M[5] = (O) => N.$emit("close"))
        }, {
          body: a(() => {
            var O, V, te, W;
            return [
              c.value ? (o(), n("div", sc, [
                e("section", nc, [
                  e("div", ac, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", lc, l(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (A) => P(c.value.hash))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", ic, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", rc, l(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (A) => P(c.value.blake3))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", dc, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", cc, l(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (o(), n("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (A) => P(c.value.sha256))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", uc, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", mc, l(F(c.value.size)), 1)
                  ]),
                  e("div", vc, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", fc, l(c.value.category), 1)
                  ]),
                  e("div", gc, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", hc, l(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", pc, [
                  e("h4", yc, "Locations (" + l(((O = c.value.locations) == null ? void 0 : O.length) || 0) + ")", 1),
                  (V = c.value.locations) != null && V.length ? (o(), n("div", wc, [
                    (o(!0), n(j, null, oe(c.value.locations, (A, ee) => (o(), n("div", {
                      key: ee,
                      class: "location-item"
                    }, [
                      e("span", bc, l(A.path), 1),
                      A.modified ? (o(), n("span", kc, "Modified: " + l(A.modified), 1)) : u("", !0),
                      A.path ? (o(), n("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (J) => R(A.path)
                      }, " Open File Location ", 8, _c)) : u("", !0)
                    ]))), 128))
                  ])) : (o(), n("div", $c, "No locations found"))
                ]),
                e("section", Cc, [
                  e("h4", xc, "Download Sources (" + l(((te = c.value.sources) == null ? void 0 : te.length) || 0) + ")", 1),
                  (W = c.value.sources) != null && W.length ? (o(), n("div", Sc, [
                    (o(!0), n(j, null, oe(c.value.sources, (A, ee) => (o(), n("div", {
                      key: ee,
                      class: "source-item"
                    }, [
                      e("span", Ic, l(A.type) + ":", 1),
                      e("a", {
                        href: A.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(A.url), 9, Ec),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: z.value === A.url,
                        onClick: (J) => L(A.url)
                      }, l(z.value === A.url ? "..." : "×"), 9, Mc)
                    ]))), 128))
                  ])) : (o(), n("div", zc, " No download sources configured ")),
                  e("div", Lc, [
                    ro(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (A) => w.value = A),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [co, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || g.value,
                      onClick: q
                    }, l(g.value ? "Adding..." : "Add Source"), 9, Dc)
                  ]),
                  I.value ? (o(), n("p", Tc, l(I.value), 1)) : u("", !0),
                  _.value ? (o(), n("p", Rc, l(_.value), 1)) : u("", !0)
                ])
              ])) : u("", !0)
            ];
          }),
          footer: a(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (O) => N.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), E(_e, { to: "body" }, [
          x.value ? (o(), n("div", {
            key: 0,
            class: se(["toast", x.value.type])
          }, l(x.value.message), 3)) : u("", !0)
        ]))
      ], 64);
    };
  }
}), Ht = /* @__PURE__ */ X(Nc, [["__scopeId", "data-v-f15cbb56"]]), Oc = /* @__PURE__ */ Q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironmentModels: r, getStatus: f } = $e(), y = C([]), p = C([]), c = C("production"), i = C(!1), m = C(null), w = C(""), g = C(!1), z = C(null);
    function I() {
      g.value = !1, s("navigate", "model-index");
    }
    const _ = B(
      () => y.value.reduce((T, N) => T + (N.size || 0), 0)
    ), x = B(() => {
      if (!w.value.trim()) return y.value;
      const T = w.value.toLowerCase();
      return y.value.filter((N) => N.filename.toLowerCase().includes(T));
    }), b = B(() => {
      if (!w.value.trim()) return p.value;
      const T = w.value.toLowerCase();
      return p.value.filter((N) => N.filename.toLowerCase().includes(T));
    }), $ = B(() => {
      const T = {};
      for (const M of x.value) {
        const S = M.type || "other";
        T[S] || (T[S] = []), T[S].push(M);
      }
      const N = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(T).sort(([M], [S]) => {
        const O = N.indexOf(M), V = N.indexOf(S);
        return O >= 0 && V >= 0 ? O - V : O >= 0 ? -1 : V >= 0 ? 1 : M.localeCompare(S);
      }).map(([M, S]) => ({ type: M, models: S }));
    });
    function F(T) {
      if (!T) return "Unknown";
      const N = T / (1024 * 1024);
      return N >= 1024 ? `${(N / 1024).toFixed(1)} GB` : `${N.toFixed(0)} MB`;
    }
    function P(T) {
      z.value = T.hash || T.filename;
    }
    function R(T) {
      s("navigate", "model-index");
    }
    function q(T) {
      alert(`Download functionality not yet implemented for ${T}`);
    }
    async function L() {
      i.value = !0, m.value = null;
      try {
        const T = await r();
        y.value = T, p.value = [];
        const N = await f();
        c.value = N.environment || "production";
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load models";
      } finally {
        i.value = !1;
      }
    }
    return we(L), (T, N) => (o(), n(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (M) => g.value = !0)
          })
        ]),
        search: a(() => [
          v(nt, {
            modelValue: w.value,
            "onUpdate:modelValue": N[1] || (N[1] = (M) => w.value = M),
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
          }, null, 8, ["message"])) : (o(), n(j, { key: 2 }, [
            y.value.length ? (o(), E(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + l(y.value.length) + " models • " + l(F(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), n(j, null, oe($.value, (M) => (o(), E(ye, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), n(j, null, oe(M.models, (S) => (o(), E(ke, {
                  key: S.hash || S.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...N[4] || (N[4] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(l(S.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(l(F(S.size)), 1)
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
                      onClick: (O) => P(S)
                    }, {
                      default: a(() => [...N[5] || (N[5] = [
                        h(" View Details ", -1)
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
                (o(!0), n(j, null, oe(b.value, (M) => (o(), E(ke, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...N[6] || (N[6] = [
                    h("⚠", -1)
                  ])]),
                  title: a(() => [
                    h(l(M.filename), 1)
                  ]),
                  subtitle: a(() => [...N[7] || (N[7] = [
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
                      onClick: (S) => q(M.filename)
                    }, {
                      default: a(() => [...N[8] || (N[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (S) => R(M.filename)
                    }, {
                      default: a(() => [...N[9] || (N[9] = [
                        h(" Search Workspace Index ", -1)
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
        onClose: N[2] || (N[2] = (M) => g.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            N[10] || (N[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(c.value) + '"', 1),
            N[11] || (N[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          v(Z, {
            variant: "primary",
            onClick: I
          }, {
            default: a(() => [...N[12] || (N[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      z.value ? (o(), E(Ht, {
        key: 0,
        identifier: z.value,
        onClose: N[3] || (N[3] = (M) => z.value = null)
      }, null, 8, ["identifier"])) : u("", !0)
    ], 64));
  }
}), Uc = /* @__PURE__ */ X(Oc, [["__scopeId", "data-v-cb4f12b3"]]), Bc = {
  key: 0,
  class: "indexing-progress"
}, Pc = { class: "progress-info" }, Vc = { class: "progress-label" }, Ac = { class: "progress-count" }, Fc = { class: "progress-bar" }, Wc = { class: "modal-content" }, Gc = { class: "modal-header" }, jc = { class: "modal-body" }, Hc = { class: "input-group" }, qc = { class: "current-path" }, Kc = { class: "input-group" }, Jc = { class: "modal-footer" }, Yc = { class: "modal-content" }, Qc = { class: "modal-header" }, Xc = { class: "modal-body" }, Zc = { class: "input-group" }, eu = { class: "input-group" }, tu = { class: "modal-footer" }, ou = /* @__PURE__ */ Q({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: d }) {
    const {
      getWorkspaceModels: s,
      scanWorkspaceModels: r,
      getModelsDirectory: f,
      setModelsDirectory: y
    } = $e(), { addToQueue: p } = pt(), c = d, i = C([]), m = C(!1), w = C(!1), g = C(null), z = C(""), I = C(!1), _ = C(null), x = C(!1), b = C(null), $ = C(""), F = C(!1), P = C(!1), R = C(""), q = C(""), L = C(null), T = B(
      () => i.value.reduce((J, U) => J + (U.size || 0), 0)
    ), N = B(() => {
      if (!z.value.trim()) return i.value;
      const J = z.value.toLowerCase();
      return i.value.filter((U) => {
        const ae = U, Y = U.sha256 || ae.sha256_hash || "";
        return U.filename.toLowerCase().includes(J) || Y.toLowerCase().includes(J);
      });
    }), M = B(() => {
      const J = {};
      for (const ae of N.value) {
        const Y = ae.type || "other";
        J[Y] || (J[Y] = []), J[Y].push(ae);
      }
      const U = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(J).sort(([ae], [Y]) => {
        const be = U.indexOf(ae), ve = U.indexOf(Y);
        return be >= 0 && ve >= 0 ? be - ve : be >= 0 ? -1 : ve >= 0 ? 1 : ae.localeCompare(Y);
      }).map(([ae, Y]) => ({ type: ae, models: Y }));
    });
    function S(J) {
      if (!J) return "Unknown";
      const U = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return J >= U ? `${(J / U).toFixed(1)} GB` : J >= ae ? `${(J / ae).toFixed(0)} MB` : `${(J / 1024).toFixed(0)} KB`;
    }
    function O(J) {
      _.value = J.hash || J.filename;
    }
    async function V() {
      w.value = !0, g.value = null;
      try {
        const J = await r();
        await A(), J.changes > 0 && console.log(`Scan complete: ${J.changes} changes detected`);
      } catch (J) {
        g.value = J instanceof Error ? J.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function te() {
      if ($.value.trim()) {
        F.value = !0, g.value = null;
        try {
          const J = await y($.value.trim());
          b.value = J.path, x.value = !1, $.value = "", await A(), console.log(`Directory changed: ${J.models_indexed} models indexed`), c("refresh");
        } catch (J) {
          g.value = J instanceof Error ? J.message : "Failed to change directory";
        } finally {
          F.value = !1;
        }
      }
    }
    function W() {
      if (!R.value.trim() || !q.value.trim()) return;
      const J = q.value.split("/").pop() || "model.safetensors";
      p([{
        workflow: "__manual__",
        filename: J,
        url: R.value.trim(),
        targetPath: q.value.trim()
      }]), R.value = "", q.value = "", P.value = !1;
    }
    async function A() {
      m.value = !0, g.value = null;
      try {
        i.value = await s();
      } catch (J) {
        g.value = J instanceof Error ? J.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function ee() {
      try {
        const J = await f();
        b.value = J.path;
      } catch {
      }
    }
    return we(() => {
      A(), ee();
    }), (J, U) => (o(), n(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: U[2] || (U[2] = (ae) => I.value = !0)
          }, {
            actions: a(() => [
              v(Z, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: V
              }, {
                default: a(() => [
                  h(l(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              v(Z, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (ae) => x.value = !0)
              }, {
                default: a(() => [...U[15] || (U[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              v(Z, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (ae) => P.value = !0)
              }, {
                default: a(() => [...U[16] || (U[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  h(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          L.value ? (o(), n("div", Bc, [
            e("div", Pc, [
              e("span", Vc, l(L.value.message), 1),
              e("span", Ac, l(L.value.current) + "/" + l(L.value.total), 1)
            ]),
            e("div", Fc, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${L.value.current / L.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : u("", !0),
          v(nt, {
            modelValue: z.value,
            "onUpdate:modelValue": U[3] || (U[3] = (ae) => z.value = ae),
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
            onRetry: A
          }, null, 8, ["message"])) : (o(), n(j, { key: 2 }, [
            i.value.length ? (o(), E(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + l(i.value.length) + " models • " + l(S(T.value)), 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), n(j, null, oe(M.value, (ae) => (o(), E(ye, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: a(() => [
                (o(!0), n(j, null, oe(ae.models, (Y) => (o(), E(ke, {
                  key: Y.sha256 || Y.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...U[17] || (U[17] = [
                    h("📦", -1)
                  ])]),
                  title: a(() => [
                    h(l(Y.filename), 1)
                  ]),
                  subtitle: a(() => [
                    h(l(S(Y.size)), 1)
                  ]),
                  details: a(() => [
                    v(fe, {
                      label: "Hash:",
                      value: Y.hash ? Y.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (be) => O(Y)
                    }, {
                      default: a(() => [...U[18] || (U[18] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            N.value.length ? u("", !0) : (o(), E(Ne, {
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
        onClose: U[4] || (U[4] = (ae) => I.value = !1)
      }, {
        content: a(() => [...U[19] || (U[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (o(), E(Ht, {
        key: 0,
        identifier: _.value,
        onClose: U[5] || (U[5] = (ae) => _.value = null)
      }, null, 8, ["identifier"])) : u("", !0),
      (o(), E(_e, { to: "body" }, [
        x.value ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: U[9] || (U[9] = pe((ae) => x.value = !1, ["self"]))
        }, [
          e("div", Wc, [
            e("div", Gc, [
              U[20] || (U[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: U[6] || (U[6] = (ae) => x.value = !1)
              }, "✕")
            ]),
            e("div", jc, [
              e("div", Hc, [
                U[21] || (U[21] = e("label", null, "Current Directory", -1)),
                e("code", qc, l(b.value || "Not set"), 1)
              ]),
              e("div", Kc, [
                U[22] || (U[22] = e("label", null, "New Directory Path", -1)),
                v(Re, {
                  modelValue: $.value,
                  "onUpdate:modelValue": U[7] || (U[7] = (ae) => $.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              U[23] || (U[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Jc, [
              v(le, {
                variant: "secondary",
                onClick: U[8] || (U[8] = (ae) => x.value = !1)
              }, {
                default: a(() => [...U[24] || (U[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              v(le, {
                variant: "primary",
                disabled: !$.value.trim() || F.value,
                loading: F.value,
                onClick: te
              }, {
                default: a(() => [
                  h(l(F.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : u("", !0)
      ])),
      (o(), E(_e, { to: "body" }, [
        P.value ? (o(), n("div", {
          key: 0,
          class: "modal-overlay",
          onClick: U[14] || (U[14] = pe((ae) => P.value = !1, ["self"]))
        }, [
          e("div", Yc, [
            e("div", Qc, [
              U[25] || (U[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: U[10] || (U[10] = (ae) => P.value = !1)
              }, "✕")
            ]),
            e("div", Xc, [
              e("div", Zc, [
                U[26] || (U[26] = e("label", null, "Download URL", -1)),
                v(Re, {
                  modelValue: R.value,
                  "onUpdate:modelValue": U[11] || (U[11] = (ae) => R.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", eu, [
                U[27] || (U[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                v(Re, {
                  modelValue: q.value,
                  "onUpdate:modelValue": U[12] || (U[12] = (ae) => q.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              U[28] || (U[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", tu, [
              v(le, {
                variant: "secondary",
                onClick: U[13] || (U[13] = (ae) => P.value = !1)
              }, {
                default: a(() => [...U[29] || (U[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              v(le, {
                variant: "primary",
                disabled: !R.value.trim() || !q.value.trim(),
                onClick: W
              }, {
                default: a(() => [...U[30] || (U[30] = [
                  h(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : u("", !0)
      ]))
    ], 64));
  }
}), su = /* @__PURE__ */ X(ou, [["__scopeId", "data-v-73b78d84"]]), nu = { class: "node-details" }, au = { class: "status-row" }, lu = {
  key: 0,
  class: "detail-row"
}, iu = { class: "value" }, ru = { class: "detail-row" }, du = { class: "value" }, cu = {
  key: 1,
  class: "detail-row"
}, uu = { class: "value mono" }, mu = {
  key: 2,
  class: "detail-row"
}, vu = ["href"], fu = {
  key: 3,
  class: "detail-row"
}, gu = { class: "value mono small" }, hu = { class: "detail-row" }, pu = {
  key: 0,
  class: "value"
}, yu = {
  key: 1,
  class: "workflow-list"
}, wu = /* @__PURE__ */ Q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: d }) {
    const s = t, r = d, f = B(() => s.node.installed ? s.node.tracked ? s.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), y = B(() => s.node.installed ? s.node.tracked ? s.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), p = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[s.node.source] || s.node.source);
    return (c, i) => (o(), E(st, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: i[1] || (i[1] = (m) => r("close"))
    }, {
      body: a(() => [
        e("div", nu, [
          e("div", au, [
            i[2] || (i[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", f.value])
            }, l(y.value), 3)
          ]),
          t.node.version ? (o(), n("div", lu, [
            i[3] || (i[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", iu, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : u("", !0),
          e("div", ru, [
            i[4] || (i[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", du, l(p.value), 1)
          ]),
          t.node.registry_id ? (o(), n("div", cu, [
            i[5] || (i[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", uu, l(t.node.registry_id), 1)
          ])) : u("", !0),
          t.node.repository ? (o(), n("div", mu, [
            i[7] || (i[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              h(l(t.node.repository) + " ", 1),
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
            ], 8, vu)
          ])) : u("", !0),
          t.node.download_url ? (o(), n("div", fu, [
            i[8] || (i[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", gu, l(t.node.download_url), 1)
          ])) : u("", !0),
          i[10] || (i[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", hu, [
            i[9] || (i[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), n("span", pu, " Not used in any workflows ")) : (o(), n("div", yu, [
              (o(!0), n(j, null, oe(t.node.used_in_workflows, (m) => (o(), n("span", {
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
            h(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), bu = /* @__PURE__ */ X(wu, [["__scopeId", "data-v-b342f626"]]), ku = { key: 0 }, _u = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, $u = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Cu = /* @__PURE__ */ Q({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: d }) {
    const s = d, { getNodes: r, trackNodeAsDev: f, installNode: y, uninstallNode: p } = $e(), c = C({
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
          var O, V;
          return S.name.toLowerCase().includes(M) || ((O = S.description) == null ? void 0 : O.toLowerCase().includes(M)) || ((V = S.repository) == null ? void 0 : V.toLowerCase().includes(M));
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
    function F(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function P(M) {
      z.value = M;
    }
    function R() {
      s("open-node-manager");
    }
    async function q(M) {
      if (confirm(`Track "${M}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          i.value = !0;
          const S = await f(M);
          S.status === "success" ? (alert(`Node "${M}" is now tracked as development!`), await N()) : alert(`Failed to track node: ${S.message || "Unknown error"}`);
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
          const S = await p(M);
          S.status === "success" ? (alert(`Node "${M}" removed!`), await N()) : alert(`Failed to remove node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error removing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function T(M) {
      if (confirm(`Install node "${M}"?

This will download and install the node.`))
        try {
          i.value = !0;
          const S = await y(M);
          S.status === "success" ? (alert(`Node "${M}" installed successfully!`), await N()) : alert(`Failed to install node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error installing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function N() {
      i.value = !0, m.value = null;
      try {
        c.value = await r();
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        i.value = !1;
      }
    }
    return we(N), (M, S) => (o(), n(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (O) => g.value = !0)
          }, {
            actions: a(() => [
              v(Z, {
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: a(() => [...S[5] || (S[5] = [
                  h(" Browse Nodes ", -1)
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
            "onUpdate:modelValue": S[1] || (S[1] = (O) => w.value = O),
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
            onRetry: N
          }, null, 8, ["message"])) : (o(), n(j, { key: 2 }, [
            c.value.total_count ? (o(), E(at, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                h(l(c.value.installed_count) + " installed ", 1),
                c.value.missing_count ? (o(), n(j, { key: 0 }, [
                  h(" • " + l(c.value.missing_count) + " missing", 1)
                ], 64)) : u("", !0),
                c.value.untracked_count ? (o(), n(j, { key: 1 }, [
                  h(" • " + l(c.value.untracked_count) + " untracked", 1)
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
                (o(!0), n(j, null, oe(b.value, (O) => (o(), E(ke, {
                  key: O.name,
                  status: "warning"
                }, {
                  icon: a(() => [...S[6] || (S[6] = [
                    h("?", -1)
                  ])]),
                  title: a(() => [
                    h(l(O.name), 1)
                  ]),
                  subtitle: a(() => [...S[7] || (S[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: a(() => [
                    v(fe, {
                      label: "Used by:",
                      value: F(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => P(O)
                    }, {
                      default: a(() => [...S[8] || (S[8] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => q(O.name)
                    }, {
                      default: a(() => [...S[9] || (S[9] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (V) => L(O.name)
                    }, {
                      default: a(() => [...S[10] || (S[10] = [
                        h(" Remove ", -1)
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
                (o(!0), n(j, null, oe(_.value, (O) => (o(), E(ke, {
                  key: O.name,
                  status: "synced"
                }, {
                  icon: a(() => [
                    h(l(O.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: a(() => [
                    h(l(O.name), 1)
                  ]),
                  subtitle: a(() => [
                    O.version ? (o(), n("span", ku, l(O.source === "development" ? "" : "v") + l(O.version), 1)) : (o(), n("span", _u, "version unknown")),
                    e("span", $u, " • " + l($(O.source)), 1)
                  ]),
                  details: a(() => [
                    v(fe, {
                      label: "Used by:",
                      value: F(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => P(O)
                    }, {
                      default: a(() => [...S[11] || (S[11] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: R
                    }, {
                      default: a(() => [...S[12] || (S[12] = [
                        h(" Manage ", -1)
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
                (o(!0), n(j, null, oe(x.value, (O) => (o(), E(ke, {
                  key: O.name,
                  status: "missing"
                }, {
                  icon: a(() => [...S[13] || (S[13] = [
                    h("!", -1)
                  ])]),
                  title: a(() => [
                    h(l(O.name), 1)
                  ]),
                  subtitle: a(() => [...S[14] || (S[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: a(() => [
                    v(fe, {
                      label: "Required by:",
                      value: F(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => P(O)
                    }, {
                      default: a(() => [...S[15] || (S[15] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => T(O.name)
                    }, {
                      default: a(() => [...S[16] || (S[16] = [
                        h(" Install ", -1)
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
        onClose: S[3] || (S[3] = (O) => g.value = !1)
      }, {
        content: a(() => [...S[17] || (S[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            h(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            h(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            h(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: a(() => [
          v(Z, {
            variant: "primary",
            onClick: S[2] || (S[2] = (O) => g.value = !1)
          }, {
            default: a(() => [...S[18] || (S[18] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      z.value ? (o(), E(bu, {
        key: 0,
        node: z.value,
        onClose: S[4] || (S[4] = (O) => z.value = null)
      }, null, 8, ["node"])) : u("", !0)
    ], 64));
  }
}), xu = /* @__PURE__ */ X(Cu, [["__scopeId", "data-v-4ac1465a"]]), Su = { class: "remote-url-display" }, Iu = ["title"], Eu = ["title"], Mu = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, zu = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Lu = /* @__PURE__ */ Q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const d = t, s = C(!1), r = B(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const y = d.url.slice(0, Math.floor(d.maxLength * 0.6)), p = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${y}...${p}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(d.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, p) => (o(), n("div", Su, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, Iu),
      e("button", {
        class: se(["copy-btn", { copied: s.value }]),
        onClick: f,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), n("svg", zu, [...p[1] || (p[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), n("svg", Mu, [...p[0] || (p[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Eu)
    ]));
  }
}), Ot = /* @__PURE__ */ X(Lu, [["__scopeId", "data-v-7768a58d"]]), Du = { class: "remote-title" }, Tu = {
  key: 0,
  class: "default-badge"
}, Ru = {
  key: 1,
  class: "sync-badge"
}, Nu = {
  key: 0,
  class: "ahead"
}, Ou = {
  key: 1,
  class: "behind"
}, Uu = {
  key: 0,
  class: "tracking-info"
}, Bu = /* @__PURE__ */ Q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: d }) {
    const s = t, r = B(() => s.fetchingRemote === s.remote.name), f = B(() => s.remote.is_default), y = B(() => !!s.trackingBranch);
    function p(c) {
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
        h(l(f.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        e("div", Du, [
          e("span", null, l(t.remote.name), 1),
          f.value ? (o(), n("span", Tu, "DEFAULT")) : u("", !0),
          t.syncStatus ? (o(), n("span", Ru, [
            t.syncStatus.ahead > 0 ? (o(), n("span", Nu, "↑" + l(t.syncStatus.ahead), 1)) : u("", !0),
            t.syncStatus.behind > 0 ? (o(), n("span", Ou, "↓" + l(t.syncStatus.behind), 1)) : u("", !0)
          ])) : u("", !0)
        ])
      ]),
      subtitle: a(() => [
        y.value ? (o(), n("span", Uu, " Tracking: " + l(t.trackingBranch), 1)) : u("", !0)
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
              e("span", null, l(p(t.syncStatus.last_fetch)), 1)
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
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        v(Z, {
          variant: "secondary",
          size: "xs",
          onClick: i[1] || (i[1] = (m) => c.$emit("edit", t.remote.name))
        }, {
          default: a(() => [...i[4] || (i[4] = [
            h(" Edit URL ", -1)
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
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Pu = /* @__PURE__ */ X(Bu, [["__scopeId", "data-v-17362e45"]]), Vu = ["for"], Au = {
  key: 0,
  class: "base-form-field-required"
}, Fu = { class: "base-form-field-input" }, Wu = {
  key: 1,
  class: "base-form-field-error"
}, Gu = {
  key: 2,
  class: "base-form-field-hint"
}, ju = /* @__PURE__ */ Q({
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
    const d = t, s = B(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, f) => (o(), n("div", {
      class: se(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        h(l(t.label) + " ", 1),
        t.required ? (o(), n("span", Au, "*")) : u("", !0)
      ], 8, Vu)) : u("", !0),
      e("div", Fu, [
        re(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), n("span", Wu, l(t.error), 1)) : t.hint ? (o(), n("span", Gu, l(t.hint), 1)) : u("", !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ X(ju, [["__scopeId", "data-v-9a1cf296"]]), Hu = { class: "remote-form" }, qu = { class: "form-header" }, Ku = { class: "form-body" }, Ju = {
  key: 0,
  class: "form-error"
}, Yu = { class: "form-actions" }, Qu = /* @__PURE__ */ Q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: d }) {
    const s = t, r = d, f = C({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), y = C(!1), p = C(null);
    Et(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      f.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const c = B(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function i() {
      if (!(!c.value || y.value)) {
        p.value = null, y.value = !0;
        try {
          r("submit", f.value);
        } catch (m) {
          p.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (m, w) => (o(), n("div", Hu, [
      e("div", qu, [
        v(Ee, null, {
          default: a(() => [
            h(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Ku, [
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
        p.value ? (o(), n("div", Ju, l(p.value), 1)) : u("", !0)
      ]),
      e("div", Yu, [
        v(Z, {
          variant: "primary",
          size: "md",
          disabled: !c.value,
          loading: y.value,
          onClick: i
        }, {
          default: a(() => [
            h(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        v(Z, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (g) => m.$emit("cancel"))
        }, {
          default: a(() => [...w[4] || (w[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Xu = /* @__PURE__ */ X(Qu, [["__scopeId", "data-v-56021b18"]]), Zu = { key: 0 }, em = /* @__PURE__ */ Q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: d,
      addRemote: s,
      removeRemote: r,
      updateRemoteUrl: f,
      fetchRemote: y,
      getRemoteSyncStatus: p
    } = $e(), c = C([]), i = C(null), m = C({}), w = C(!1), g = C(null), z = C(""), I = C(!1), _ = C(null), x = C(!1), b = C("add"), $ = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), F = B(() => {
      if (!z.value.trim()) return c.value;
      const V = z.value.toLowerCase();
      return c.value.filter(
        (te) => te.name.toLowerCase().includes(V) || te.fetch_url.toLowerCase().includes(V) || te.push_url.toLowerCase().includes(V)
      );
    });
    function P(V) {
      var te;
      return ((te = i.value) == null ? void 0 : te.remote) === V;
    }
    async function R() {
      w.value = !0, g.value = null;
      try {
        const V = await d();
        c.value = V.remotes, i.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (te) => {
            const W = await p(te.name);
            W && (m.value[te.name] = W);
          })
        );
      } catch (V) {
        g.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        w.value = !1;
      }
    }
    function q() {
      b.value = "add", $.value = { name: "", fetchUrl: "", pushUrl: "" }, x.value = !0;
    }
    function L(V) {
      const te = c.value.find((W) => W.name === V);
      te && (b.value = "edit", $.value = {
        name: te.name,
        fetchUrl: te.fetch_url,
        pushUrl: te.push_url
      }, x.value = !0);
    }
    async function T(V) {
      try {
        b.value === "add" ? await s(V.name, V.fetchUrl) : await f(V.name, V.fetchUrl, V.pushUrl || void 0), x.value = !1, await R();
      } catch (te) {
        g.value = te instanceof Error ? te.message : "Operation failed";
      }
    }
    function N() {
      x.value = !1, $.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function M(V) {
      _.value = V;
      try {
        await y(V);
        const te = await p(V);
        te && (m.value[V] = te);
      } catch (te) {
        g.value = te instanceof Error ? te.message : "Fetch failed";
      } finally {
        _.value = null;
      }
    }
    async function S(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await r(V), await R();
        } catch (te) {
          g.value = te instanceof Error ? te.message : "Failed to remove remote";
        }
    }
    function O() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return we(R), (V, te) => (o(), n(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: te[0] || (te[0] = (W) => I.value = !0)
          }, {
            actions: a(() => [
              x.value ? u("", !0) : (o(), E(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: q
              }, {
                default: a(() => [...te[3] || (te[3] = [
                  h(" + Add Remote ", -1)
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
            "onUpdate:modelValue": te[1] || (te[1] = (W) => z.value = W),
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
            onRetry: R
          }, null, 8, ["message"])) : (o(), n(j, { key: 2 }, [
            x.value ? (o(), E(Xu, {
              key: 0,
              mode: b.value,
              "remote-name": $.value.name,
              "fetch-url": $.value.fetchUrl,
              "push-url": $.value.pushUrl,
              onSubmit: T,
              onCancel: N
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : u("", !0),
            c.value.length && !x.value ? (o(), E(at, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                h(" Total: " + l(c.value.length) + " remote" + l(c.value.length !== 1 ? "s" : "") + " ", 1),
                i.value ? (o(), n("span", Zu, " • Tracking: " + l(i.value.remote) + "/" + l(i.value.branch), 1)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            F.value.length && !x.value ? (o(), E(ye, {
              key: 2,
              title: "REMOTES",
              count: F.value.length
            }, {
              default: a(() => [
                (o(!0), n(j, null, oe(F.value, (W) => {
                  var A;
                  return o(), E(Pu, {
                    key: W.name,
                    remote: W,
                    "sync-status": m.value[W.name],
                    "tracking-branch": P(W.name) ? (A = i.value) == null ? void 0 : A.branch : void 0,
                    "fetching-remote": _.value,
                    onFetch: M,
                    onEdit: L,
                    onRemove: S
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !F.value.length && !x.value ? (o(), E(Ne, {
              key: 3,
              icon: "🌐",
              message: z.value ? `No remotes match '${z.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "primary",
                  onClick: q
                }, {
                  default: a(() => [...te[4] || (te[4] = [
                    h(" Add Your First Remote ", -1)
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
        onClose: te[2] || (te[2] = (W) => I.value = !1)
      }, {
        content: a(() => [...te[5] || (te[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          v(Z, {
            variant: "link",
            onClick: O
          }, {
            default: a(() => [...te[6] || (te[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tm = /* @__PURE__ */ X(em, [["__scopeId", "data-v-a75719bb"]]), om = { class: "setting-info" }, sm = { class: "setting-label" }, nm = {
  key: 0,
  class: "required-marker"
}, am = {
  key: 0,
  class: "setting-description"
}, lm = { class: "setting-control" }, im = /* @__PURE__ */ Q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (d, s) => (o(), n("div", {
      class: se(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", om, [
        e("div", sm, [
          h(l(t.label) + " ", 1),
          t.required ? (o(), n("span", nm, "*")) : u("", !0)
        ]),
        t.description ? (o(), n("div", am, l(t.description), 1)) : u("", !0)
      ]),
      e("div", lm, [
        re(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Fe = /* @__PURE__ */ X(im, [["__scopeId", "data-v-cb5d236c"]]), rm = { class: "toggle" }, dm = ["checked", "disabled"], cm = /* @__PURE__ */ Q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", rm, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, dm),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Xe = /* @__PURE__ */ X(cm, [["__scopeId", "data-v-71c0f550"]]), um = { class: "settings-section" }, mm = { class: "path-setting" }, vm = { class: "path-value" }, fm = { class: "path-setting" }, gm = { class: "path-value" }, hm = { class: "settings-section" }, pm = { class: "settings-section" }, ym = { class: "settings-section" }, wm = /* @__PURE__ */ Q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: d, updateConfig: s } = $e(), r = C(!1), f = C(null), y = C(null), p = C(null), c = C(null), i = C(""), m = C(""), w = C(!0), g = C(!0), z = C(!1), I = B(() => c.value ? i.value !== (c.value.civitai_api_key || "") : !1);
    async function _() {
      r.value = !0, f.value = null;
      try {
        p.value = await d(), c.value = { ...p.value }, i.value = p.value.civitai_api_key || "", m.value = p.value.huggingface_token || "", w.value = p.value.auto_sync_models, g.value = p.value.confirm_destructive;
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        z.value = F === "true";
      } catch (F) {
        f.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function x() {
      var F;
      y.value = null;
      try {
        const P = {};
        i.value !== (((F = c.value) == null ? void 0 : F.civitai_api_key) || "") && (P.civitai_api_key = i.value || null), await s(P), await _(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
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
    function $(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return we(_), (F, P) => (o(), E(Ce, null, {
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
                h(" Save Changes ", -1)
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
                h(" Reset ", -1)
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
        }, null, 8, ["message"])) : (o(), n(j, { key: 2 }, [
          v(ye, { title: "WORKSPACE PATHS" }, {
            default: a(() => {
              var R, q;
              return [
                e("div", um, [
                  e("div", mm, [
                    P[7] || (P[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    P[8] || (P[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", vm, l(((R = p.value) == null ? void 0 : R.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", fm, [
                    P[9] || (P[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    P[10] || (P[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", gm, l(((q = p.value) == null ? void 0 : q.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          v(ye, { title: "API CREDENTIALS" }, {
            default: a(() => [
              e("div", hm, [
                v(Fe, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: a(() => [
                    v(ht, {
                      modelValue: i.value,
                      "onUpdate:modelValue": P[0] || (P[0] = (R) => i.value = R),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(Fe, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(ht, {
                      modelValue: m.value,
                      "onUpdate:modelValue": P[1] || (P[1] = (R) => m.value = R),
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
              e("div", pm, [
                v(Fe, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: a(() => [
                    v(Xe, {
                      modelValue: z.value,
                      "onUpdate:modelValue": [
                        P[2] || (P[2] = (R) => z.value = R),
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
              e("div", ym, [
                v(Fe, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Xe, {
                      modelValue: w.value,
                      "onUpdate:modelValue": P[3] || (P[3] = (R) => w.value = R),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(Fe, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: a(() => [
                    v(Xe, {
                      modelValue: g.value,
                      "onUpdate:modelValue": P[4] || (P[4] = (R) => g.value = R),
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
}), bm = /* @__PURE__ */ X(wm, [["__scopeId", "data-v-7861bd35"]]), km = /* @__PURE__ */ Q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: d } = $e(), s = C([]), r = C(!1), f = C(null), y = C(!1), p = C(null), c = B(() => s.value.length === 0 ? [] : s.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      r.value = !0, f.value = null;
      try {
        s.value = await d(void 0, 500);
      } catch (m) {
        f.value = m instanceof Error ? m.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var m;
          (m = p.value) != null && m.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return we(i), (m, w) => (o(), n(j, null, [
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
                  h(l(r.value ? "Loading..." : "Refresh"), 1)
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
          }, null, 8, ["message"])) : (o(), n(j, { key: 2 }, [
            s.value.length === 0 ? (o(), E(Ne, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (o(!0), n(j, null, oe(c.value, (g, z) => (o(), n("div", {
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
            h(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            h(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            h(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          v(Z, {
            variant: "primary",
            onClick: w[1] || (w[1] = (g) => y.value = !1)
          }, {
            default: a(() => [...w[4] || (w[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _m = /* @__PURE__ */ X(km, [["__scopeId", "data-v-39f6a756"]]), $m = /* @__PURE__ */ Q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: d, getStatus: s } = $e(), r = C([]), f = C(!1), y = C(null), p = C(!1), c = C("production"), i = C(null), m = B(() => r.value.length === 0 ? [] : r.value.map((g) => ({
      text: `${g.timestamp} - ${g.name} - ${g.level} - ${g.func}:${g.line} - ${g.message}`,
      level: g.level
    })));
    async function w() {
      f.value = !0, y.value = null;
      try {
        r.value = await d(void 0, 500);
        try {
          const g = await s();
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
    return we(w), (g, z) => (o(), n(j, null, [
      v(Ce, null, {
        header: a(() => [
          v(xe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (I) => p.value = !0)
          }, {
            actions: a(() => [
              v(Z, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: f.value
              }, {
                default: a(() => [
                  h(l(f.value ? "Loading..." : "Refresh"), 1)
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
          }, null, 8, ["message"])) : (o(), n(j, { key: 2 }, [
            r.value.length === 0 ? (o(), E(Ne, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), n("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: i,
              class: "log-output"
            }, [
              (o(!0), n(j, null, oe(m.value, (I, _) => (o(), n("div", {
                key: _,
                class: se(`log-line log-level-${I.level.toLowerCase()}`)
              }, l(I.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      v(Ge, {
        show: p.value,
        title: "About Environment Logs",
        onClose: z[2] || (z[2] = (I) => p.value = !1)
      }, {
        content: a(() => [
          e("p", null, [
            z[3] || (z[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(c.value), 1),
            z[4] || (z[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          z[5] || (z[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            h(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            h(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1)),
          z[6] || (z[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          v(Z, {
            variant: "primary",
            onClick: z[1] || (z[1] = (I) => p.value = !1)
          }, {
            default: a(() => [...z[7] || (z[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Cm = /* @__PURE__ */ X($m, [["__scopeId", "data-v-4f1e6f72"]]), xm = { class: "env-title" }, Sm = {
  key: 0,
  class: "current-badge"
}, Im = {
  key: 0,
  class: "branch-info"
}, Em = /* @__PURE__ */ Q({
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
    return (d, s) => (o(), E(ke, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        h(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        e("div", xm, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), n("span", Sm, "CURRENT")) : u("", !0)
        ])
      ]),
      subtitle: a(() => [
        t.currentBranch ? (o(), n("span", Im, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + l(t.currentBranch), 1)
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
}), Mm = /* @__PURE__ */ X(Em, [["__scopeId", "data-v-5238e57c"]]), zm = {
  key: 0,
  class: "create-form"
}, Lm = { class: "create-form__header" }, Dm = { class: "create-form__body" }, Tm = { class: "create-form__actions" }, Rm = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Nm = /* @__PURE__ */ Q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: d }) {
    const s = d, { getEnvironments: r } = $e(), f = C([]), y = C(!1), p = C(null), c = C(""), i = C(!1), m = C(!1), w = C(""), g = B(
      () => f.value.find((P) => P.is_current)
    ), z = B(() => {
      if (!c.value.trim()) return f.value;
      const P = c.value.toLowerCase();
      return f.value.filter(
        (R) => {
          var q;
          return R.name.toLowerCase().includes(P) || ((q = R.current_branch) == null ? void 0 : q.toLowerCase().includes(P));
        }
      );
    });
    function I(P) {
      if (!P) return "";
      try {
        const R = new Date(P), L = (/* @__PURE__ */ new Date()).getTime() - R.getTime(), T = Math.floor(L / 6e4), N = Math.floor(L / 36e5), M = Math.floor(L / 864e5);
        return T < 1 ? "just now" : T < 60 ? `${T} ${T === 1 ? "minute" : "minutes"} ago` : N < 24 ? `${N} ${N === 1 ? "hour" : "hours"} ago` : M < 30 ? `${M} ${M === 1 ? "day" : "days"} ago` : R.toLocaleDateString();
      } catch {
        return P;
      }
    }
    function _() {
      const P = w.value.trim();
      P && (s("create", P), w.value = "", m.value = !1);
    }
    function x() {
      w.value = "", m.value = !1;
    }
    function b(P) {
      s("viewDetails", P);
    }
    function $(P) {
      confirm(`Delete environment "${P}"?

This action cannot be undone.`) && s("delete", P);
    }
    async function F() {
      y.value = !0, p.value = null;
      try {
        f.value = await r();
      } catch (P) {
        p.value = P instanceof Error ? P.message : "Failed to load environments";
      } finally {
        y.value = !1;
      }
    }
    return we(F), (P, R) => {
      const q = uo("SectionGroup");
      return o(), n(j, null, [
        v(Ce, null, {
          header: a(() => [
            v(xe, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: R[1] || (R[1] = (L) => i.value = !0)
            }, {
              actions: a(() => [
                v(Z, {
                  variant: "ghost",
                  size: "sm",
                  onClick: R[0] || (R[0] = (L) => m.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...R[7] || (R[7] = [
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
                  onClick: F,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...R[8] || (R[8] = [
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
              "onUpdate:modelValue": R[2] || (R[2] = (L) => c.value = L),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            y.value ? (o(), E(je, {
              key: 0,
              message: "Loading environments..."
            })) : p.value ? (o(), E(He, {
              key: 1,
              message: p.value,
              retry: !0,
              onRetry: F
            }, null, 8, ["message"])) : (o(), n(j, { key: 2 }, [
              m.value ? (o(), n("div", zm, [
                e("div", Lm, [
                  R[10] || (R[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  v(Z, {
                    variant: "ghost",
                    size: "xs",
                    onClick: x
                  }, {
                    default: a(() => [...R[9] || (R[9] = [
                      h(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", Dm, [
                  v(ht, {
                    modelValue: w.value,
                    "onUpdate:modelValue": R[3] || (R[3] = (L) => w.value = L),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      We(_, ["enter"]),
                      We(x, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Tm, [
                    v(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: _,
                      disabled: !w.value.trim()
                    }, {
                      default: a(() => [...R[11] || (R[11] = [
                        h(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    v(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: x
                    }, {
                      default: a(() => [...R[12] || (R[12] = [
                        h(" Cancel ", -1)
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
                  h(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                  g.value ? (o(), n(j, { key: 0 }, [
                    R[13] || (R[13] = h(" • Current: ", -1)),
                    e("strong", null, l(g.value.name), 1)
                  ], 64)) : u("", !0)
                ]),
                _: 1
              })) : u("", !0),
              z.value.length ? (o(), E(q, {
                key: 2,
                title: "ENVIRONMENTS",
                count: z.value.length
              }, {
                default: a(() => [
                  (o(!0), n(j, null, oe(z.value, (L) => (o(), E(Mm, {
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
                        onClick: (T) => P.$emit("switch", L.name)
                      }, {
                        default: a(() => [...R[14] || (R[14] = [
                          h(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      v(Z, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (T) => b(L.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...R[15] || (R[15] = [
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
                        onClick: (T) => $(L.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), n("svg", Rm, [...R[16] || (R[16] = [
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
              }, At({ _: 2 }, [
                c.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    v(Z, {
                      variant: "primary",
                      onClick: R[4] || (R[4] = (L) => m.value = !0)
                    }, {
                      default: a(() => [...R[17] || (R[17] = [
                        h(" Create Environment ", -1)
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
          onClose: R[6] || (R[6] = (L) => i.value = !1)
        }, {
          content: a(() => [...R[18] || (R[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              h(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
              onClick: R[5] || (R[5] = (L) => i.value = !1)
            }, {
              default: a(() => [...R[19] || (R[19] = [
                h(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), Om = /* @__PURE__ */ X(Nm, [["__scopeId", "data-v-97d6527d"]]), Um = { class: "file-path" }, Bm = { class: "file-path-text" }, Pm = ["title"], Vm = /* @__PURE__ */ Q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const d = t, s = C(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(d.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, y) => (o(), n("div", Um, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Bm, l(t.path), 1),
      t.copyable ? (o(), n("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(s.value ? "✓" : "📋"), 9, Pm)) : u("", !0)
    ]));
  }
}), Am = /* @__PURE__ */ X(Vm, [["__scopeId", "data-v-f0982173"]]), Fm = { class: "output-path-input" }, Wm = { class: "export-actions" }, Gm = {
  key: 1,
  class: "export-warning"
}, jm = /* @__PURE__ */ Q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: d } = $e(), s = C(""), r = C(!1), f = C(null), y = C(!1);
    async function p() {
      r.value = !0, f.value = null;
      try {
        const i = await d(s.value || void 0);
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
    return (i, m) => (o(), n(j, null, [
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
                  h("📦", -1)
                ])]),
                title: a(() => [...m[7] || (m[7] = [
                  h("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...m[8] || (m[8] = [
                  h(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
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
                  h("📁", -1)
                ])]),
                title: a(() => [...m[10] || (m[10] = [
                  h("Output Destination", -1)
                ])]),
                subtitle: a(() => [...m[11] || (m[11] = [
                  h(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  e("div", Fm, [
                    v(ht, {
                      modelValue: s.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (w) => s.value = w),
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
              e("div", Wm, [
                v(Z, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: p
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
                    h(" " + l(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), E(Z, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: m[2] || (m[2] = (w) => s.value = "")
                }, {
                  default: a(() => [...m[13] || (m[13] = [
                    h(" Clear Path ", -1)
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
              }, At({
                icon: a(() => [
                  h(l(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  h(l(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  h(l(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    v(fe, { label: "Saved to:" }, {
                      default: a(() => [
                        v(Am, {
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
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (o(), n("div", Gm, [...m[14] || (m[14] = [
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
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    v(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m[3] || (m[3] = (w) => f.value = null)
                    }, {
                      default: a(() => [...m[16] || (m[16] = [
                        h(" Dismiss ", -1)
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
            h(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Hm = /* @__PURE__ */ X(jm, [["__scopeId", "data-v-1777a9d5"]]), qm = { class: "file-input-wrapper" }, Km = ["accept", "multiple", "disabled"], Jm = /* @__PURE__ */ Q({
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
  setup(t, { expose: d, emit: s }) {
    const r = s, f = C(null);
    function y() {
      var c;
      (c = f.value) == null || c.click();
    }
    function p(c) {
      const i = c.target;
      i.files && i.files.length > 0 && (r("change", i.files), i.value = "");
    }
    return d({
      triggerInput: y
    }), (c, i) => (o(), n("div", qm, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: p
      }, null, 40, Km),
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
            h(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Ym = /* @__PURE__ */ X(Jm, [["__scopeId", "data-v-cd192091"]]), Qm = {
  key: 0,
  class: "drop-zone-empty"
}, Xm = { class: "drop-zone-text" }, Zm = { class: "drop-zone-primary" }, ev = { class: "drop-zone-secondary" }, tv = { class: "drop-zone-actions" }, ov = {
  key: 1,
  class: "drop-zone-file"
}, sv = { class: "file-info" }, nv = { class: "file-details" }, av = { class: "file-name" }, lv = { class: "file-size" }, iv = /* @__PURE__ */ Q({
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
    const s = d, r = C(!1), f = C(null), y = C(0), p = B(() => f.value !== null), c = B(() => {
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
      var F;
      y.value = 0, r.value = !1;
      const $ = (F = b.dataTransfer) == null ? void 0 : F.files;
      $ && $.length > 0 && _($[0]);
    }
    function I(b) {
      b.length > 0 && _(b[0]);
    }
    function _(b) {
      f.value = b, s("fileSelected", b);
    }
    function x() {
      f.value = null, s("clear");
    }
    return (b, $) => (o(), n("div", {
      class: se(["file-drop-zone", { "drop-active": r.value, "has-file": p.value }]),
      onDragenter: pe(m, ["prevent"]),
      onDragover: pe(w, ["prevent"]),
      onDragleave: pe(g, ["prevent"]),
      onDrop: pe(z, ["prevent"])
    }, [
      p.value ? (o(), n("div", ov, [
        e("div", sv, [
          $[1] || ($[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", nv, [
            e("div", av, l(c.value), 1),
            e("div", lv, l(i.value), 1)
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
      ])) : (o(), n("div", Qm, [
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
        e("div", Xm, [
          e("p", Zm, l(t.primaryText), 1),
          e("p", ev, l(t.secondaryText), 1)
        ]),
        e("div", tv, [
          v(Ym, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: I
          }, {
            default: a(() => [
              h(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), rv = /* @__PURE__ */ X(iv, [["__scopeId", "data-v-e00abbca"]]), dv = { class: "import-preview" }, cv = { class: "preview-header" }, uv = {
  key: 0,
  class: "source-env"
}, mv = { class: "preview-content" }, vv = { class: "preview-section" }, fv = { class: "section-header" }, gv = { class: "section-info" }, hv = { class: "section-count" }, pv = {
  key: 0,
  class: "item-list"
}, yv = { class: "item-name" }, wv = {
  key: 0,
  class: "item-more"
}, bv = { class: "preview-section" }, kv = { class: "section-header" }, _v = { class: "section-info" }, $v = { class: "section-count" }, Cv = {
  key: 0,
  class: "item-list"
}, xv = { class: "item-details" }, Sv = { class: "item-name" }, Iv = { class: "item-meta" }, Ev = {
  key: 0,
  class: "item-more"
}, Mv = { class: "preview-section" }, zv = { class: "section-header" }, Lv = { class: "section-info" }, Dv = { class: "section-count" }, Tv = {
  key: 0,
  class: "item-list"
}, Rv = { class: "item-name" }, Nv = {
  key: 0,
  class: "item-more"
}, Ov = {
  key: 0,
  class: "preview-section"
}, Uv = { class: "git-info" }, Bv = /* @__PURE__ */ Q({
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
    const d = t, s = B(() => d.workflows.length), r = B(() => d.models.length), f = B(() => d.nodes.length);
    function y(p) {
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (p, c) => (o(), n("div", dv, [
      e("div", cv, [
        v(Ee, null, {
          default: a(() => [...c[0] || (c[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), n("span", uv, [
          c[1] || (c[1] = h(" From: ", -1)),
          v(St, null, {
            default: a(() => [
              h(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : u("", !0)
      ]),
      e("div", mv, [
        e("div", vv, [
          e("div", fv, [
            c[3] || (c[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", gv, [
              c[2] || (c[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", hv, l(s.value) + " file" + l(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), n("div", pv, [
            (o(!0), n(j, null, oe(t.workflows.slice(0, t.maxPreviewItems), (i) => (o(), n("div", {
              key: i,
              class: "preview-item"
            }, [
              c[4] || (c[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", yv, l(i), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), n("div", wv, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", bv, [
          e("div", kv, [
            c[6] || (c[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", _v, [
              c[5] || (c[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", $v, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), n("div", Cv, [
            (o(!0), n(j, null, oe(t.models.slice(0, t.maxPreviewItems), (i) => (o(), n("div", {
              key: i.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", xv, [
                e("span", Sv, l(i.filename), 1),
                e("span", Iv, l(y(i.size)) + " • " + l(i.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), n("div", Ev, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", Mv, [
          e("div", zv, [
            c[9] || (c[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Lv, [
              c[8] || (c[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Dv, l(f.value) + " node" + l(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), n("div", Tv, [
            (o(!0), n(j, null, oe(t.nodes.slice(0, t.maxPreviewItems), (i) => (o(), n("div", {
              key: i,
              class: "preview-item"
            }, [
              c[10] || (c[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Rv, l(i), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), n("div", Nv, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), n("div", Ov, [
          c[11] || (c[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Uv, [
            t.gitBranch ? (o(), E(fe, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                v(St, null, {
                  default: a(() => [
                    h(l(t.gitBranch), 1)
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
                v(Wt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : u("", !0)
          ])
        ])) : u("", !0)
      ])
    ]));
  }
}), Pv = /* @__PURE__ */ X(Bv, [["__scopeId", "data-v-182fe113"]]), Vv = { class: "import-options" }, Av = { class: "options-container" }, Fv = { class: "option-section" }, Wv = { class: "conflict-options" }, Gv = ["value", "checked", "onChange"], jv = { class: "conflict-content" }, Hv = { class: "conflict-label" }, qv = { class: "conflict-description" }, Kv = { class: "option-section" }, Jv = { class: "component-toggles" }, Yv = /* @__PURE__ */ Q({
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
    const s = d, r = [
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
    return (f, y) => (o(), n("div", Vv, [
      v(Ee, null, {
        default: a(() => [...y[4] || (y[4] = [
          h("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Av, [
        e("div", Fv, [
          v(xt, null, {
            default: a(() => [...y[5] || (y[5] = [
              h("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Wv, [
            (o(), n(j, null, oe(r, (p) => e("label", {
              key: p.value,
              class: se(["conflict-option", { active: t.conflictMode === p.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: p.value,
                checked: t.conflictMode === p.value,
                onChange: (c) => s("update:conflictMode", p.value)
              }, null, 40, Gv),
              e("div", jv, [
                e("span", Hv, l(p.label), 1),
                e("span", qv, l(p.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Kv, [
          v(xt, null, {
            default: a(() => [...y[6] || (y[6] = [
              h("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Jv, [
            v(Fe, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (p) => s("update:includeWorkflows", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Fe, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (p) => s("update:includeModels", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Fe, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (p) => s("update:includeNodes", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            v(Fe, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                v(Xe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": y[3] || (y[3] = (p) => s("update:includeGitHistory", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Qv = /* @__PURE__ */ X(Yv, [["__scopeId", "data-v-0ec212b0"]]), Xv = {
  key: 0,
  class: "import-empty"
}, Zv = { class: "import-help" }, ef = {
  key: 1,
  class: "import-configure"
}, tf = { class: "selected-file-bar" }, of = { class: "file-bar-content" }, sf = { class: "file-bar-info" }, nf = { class: "file-bar-name" }, af = { class: "file-bar-size" }, lf = { class: "import-actions" }, rf = {
  key: 2,
  class: "import-progress"
}, df = { class: "progress-content" }, cf = { class: "progress-info" }, uf = { class: "progress-title" }, mf = { class: "progress-detail" }, vf = { class: "progress-bar" }, ff = { class: "progress-status" }, gf = {
  key: 3,
  class: "import-complete"
}, hf = { class: "complete-message" }, pf = { class: "complete-title" }, yf = { class: "complete-details" }, wf = { class: "complete-actions" }, bf = /* @__PURE__ */ Q({
  __name: "ImportSection",
  setup(t) {
    const d = C(null), s = C(!1), r = C(!1), f = C(!1), y = C(""), p = C({
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
    }), m = B(() => p.value.includeWorkflows || p.value.includeModels || p.value.includeNodes || p.value.includeGitHistory);
    function w(x) {
      d.value = x;
    }
    function g() {
      d.value = null, r.value = !1, f.value = !1, y.value = "";
    }
    function z() {
      g(), s.value = !1, c.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function I() {
      if (d.value) {
        s.value = !0, r.value = !1;
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
          s.value = !1, r.value = !0;
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
        !d.value && !s.value ? (o(), n("div", Xv, [
          v(rv, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: w
          }),
          e("div", Zv, [
            v(Ee, null, {
              default: a(() => [...b[5] || (b[5] = [
                h("How to Import", -1)
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
        ])) : d.value && !s.value && !r.value ? (o(), n("div", ef, [
          e("div", tf, [
            e("div", of, [
              b[7] || (b[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", sf, [
                e("div", nf, l(d.value.name), 1),
                e("div", af, l(_(d.value.size)), 1)
              ])
            ]),
            v(Z, {
              variant: "ghost",
              size: "sm",
              onClick: g
            }, {
              default: a(() => [...b[8] || (b[8] = [
                h(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          v(Pv, {
            "source-environment": i.value.sourceEnvironment,
            workflows: i.value.workflows,
            models: i.value.models,
            nodes: i.value.nodes,
            "git-branch": i.value.gitBranch,
            "git-commit": i.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          v(Qv, {
            "conflict-mode": p.value.conflictMode,
            "onUpdate:conflictMode": b[0] || (b[0] = ($) => p.value.conflictMode = $),
            "include-workflows": p.value.includeWorkflows,
            "onUpdate:includeWorkflows": b[1] || (b[1] = ($) => p.value.includeWorkflows = $),
            "include-models": p.value.includeModels,
            "onUpdate:includeModels": b[2] || (b[2] = ($) => p.value.includeModels = $),
            "include-nodes": p.value.includeNodes,
            "onUpdate:includeNodes": b[3] || (b[3] = ($) => p.value.includeNodes = $),
            "include-git-history": p.value.includeGitHistory,
            "onUpdate:includeGitHistory": b[4] || (b[4] = ($) => p.value.includeGitHistory = $)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !p.value.includeModels && i.value.models.length > 0 ? (o(), E(Qe, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${i.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : u("", !0),
          e("div", lf, [
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
                h(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            v(Z, {
              variant: "secondary",
              size: "md",
              onClick: g
            }, {
              default: a(() => [...b[10] || (b[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), n("div", rf, [
          e("div", df, [
            b[11] || (b[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", cf, [
              e("div", uf, l(c.value.message), 1),
              e("div", mf, l(c.value.detail), 1)
            ])
          ]),
          e("div", vf, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${c.value.percent}%` })
            }, null, 4)
          ]),
          e("div", ff, l(c.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), n("div", gf, [
          e("div", {
            class: se(["complete-icon", f.value ? "success" : "error"])
          }, l(f.value ? "✓" : "✕"), 3),
          e("div", hf, [
            e("div", pf, l(f.value ? "Import Successful" : "Import Failed"), 1),
            e("div", yf, l(y.value), 1)
          ]),
          e("div", wf, [
            v(Z, {
              variant: "primary",
              size: "md",
              onClick: z
            }, {
              default: a(() => [...b[12] || (b[12] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : u("", !0)
      ]),
      _: 1
    }));
  }
}), kf = /* @__PURE__ */ X(bf, [["__scopeId", "data-v-18e18eb5"]]), _f = { class: "header-info" }, $f = { class: "commit-hash" }, Cf = {
  key: 0,
  class: "commit-refs"
}, xf = { class: "commit-message" }, Sf = { class: "commit-date" }, If = {
  key: 0,
  class: "loading"
}, Ef = {
  key: 1,
  class: "changes-section"
}, Mf = { class: "stats-row" }, zf = { class: "stat" }, Lf = { class: "stat insertions" }, Df = { class: "stat deletions" }, Tf = {
  key: 0,
  class: "change-group"
}, Rf = {
  key: 1,
  class: "change-group"
}, Nf = {
  key: 0,
  class: "version"
}, Of = {
  key: 2,
  class: "change-group"
}, Uf = { class: "change-item" }, Bf = /* @__PURE__ */ Q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const d = t, { getCommitDetail: s } = $e(), r = C(null), f = C(!0), y = B(() => {
      if (!r.value) return !1;
      const c = r.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), p = B(() => {
      if (!r.value) return !1;
      const c = r.value.changes.nodes;
      return c.added.length > 0 || c.removed.length > 0;
    });
    return we(async () => {
      try {
        r.value = await s(d.commit.hash);
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
          e("div", _f, [
            i[4] || (i[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", $f, l(((m = r.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (z = (g = r.value) == null ? void 0 : g.refs) != null && z.length ? (o(), n("span", Cf, [
              (o(!0), n(j, null, oe(r.value.refs, (I) => (o(), n("span", {
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
          e("div", xf, l(((m = r.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", Sf, l(((w = r.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (o(), n("div", If, "Loading details...")) : r.value ? (o(), n("div", Ef, [
            e("div", Mf, [
              e("span", zf, l(r.value.stats.files_changed) + " files", 1),
              e("span", Lf, "+" + l(r.value.stats.insertions), 1),
              e("span", Df, "-" + l(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), n("div", Tf, [
              v(vt, { variant: "section" }, {
                default: a(() => [...i[6] || (i[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(j, null, oe(r.value.changes.workflows.added, (g) => (o(), n("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                i[7] || (i[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(g), 1)
              ]))), 128)),
              (o(!0), n(j, null, oe(r.value.changes.workflows.modified, (g) => (o(), n("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                i[8] || (i[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(g), 1)
              ]))), 128)),
              (o(!0), n(j, null, oe(r.value.changes.workflows.deleted, (g) => (o(), n("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                i[9] || (i[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(g), 1)
              ]))), 128))
            ])) : u("", !0),
            p.value ? (o(), n("div", Rf, [
              v(vt, { variant: "section" }, {
                default: a(() => [...i[10] || (i[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), n(j, null, oe(r.value.changes.nodes.added, (g) => (o(), n("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                i[11] || (i[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(g.name), 1),
                g.version ? (o(), n("span", Nf, "(" + l(g.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), n(j, null, oe(r.value.changes.nodes.removed, (g) => (o(), n("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                i[12] || (i[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(g.name), 1)
              ]))), 128))
            ])) : u("", !0),
            r.value.changes.models.resolved > 0 ? (o(), n("div", Of, [
              v(vt, { variant: "section" }, {
                default: a(() => [...i[13] || (i[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Uf, [
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
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        v(le, {
          variant: "primary",
          onClick: i[2] || (i[2] = (m) => c.$emit("checkout", t.commit))
        }, {
          default: a(() => [...i[16] || (i[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Pf = /* @__PURE__ */ X(Bf, [["__scopeId", "data-v-d256ff6d"]]), Vf = { class: "dialog-message" }, Af = {
  key: 0,
  class: "dialog-details"
}, Ff = {
  key: 1,
  class: "dialog-warning"
}, Wf = /* @__PURE__ */ Q({
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
    return (d, s) => (o(), E(st, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => d.$emit("cancel"))
    }, {
      body: a(() => [
        e("p", Vf, l(t.message), 1),
        t.details && t.details.length ? (o(), n("div", Af, [
          (o(!0), n(j, null, oe(t.details, (r, f) => (o(), n("div", {
            key: f,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : u("", !0),
        t.warning ? (o(), n("p", Ff, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + l(t.warning), 1)
        ])) : u("", !0)
      ]),
      footer: a(() => [
        v(le, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => d.$emit("cancel"))
        }, {
          default: a(() => [
            h(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), E(le, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => d.$emit("secondary"))
        }, {
          default: a(() => [
            h(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        v(le, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => d.$emit("confirm"))
        }, {
          default: a(() => [
            h(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Gf = /* @__PURE__ */ X(Wf, [["__scopeId", "data-v-3670b9f5"]]), jf = { class: "base-textarea-wrapper" }, Hf = ["value", "rows", "placeholder", "disabled", "maxlength"], qf = {
  key: 0,
  class: "base-textarea-count"
}, Kf = /* @__PURE__ */ Q({
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
    return (d, s) => (o(), n("div", jf, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = We(pe((r) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = We(pe((r) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Hf),
      t.showCharCount && t.maxLength ? (o(), n("div", qf, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : u("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ X(Kf, [["__scopeId", "data-v-5516e6fc"]]), Jf = ["checked", "disabled"], Yf = { class: "base-checkbox-box" }, Qf = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Xf = {
  key: 0,
  class: "base-checkbox-label"
}, Zf = /* @__PURE__ */ Q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (d, s) => (o(), n("label", {
      class: se(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (r) => d.$emit("update:modelValue", r.target.checked))
      }, null, 40, Jf),
      e("span", Yf, [
        t.modelValue ? (o(), n("svg", Qf, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : u("", !0)
      ]),
      d.$slots.default ? (o(), n("span", Xf, [
        re(d.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ X(Zf, [["__scopeId", "data-v-bf17c831"]]), eg = { class: "popover-header" }, tg = { class: "popover-body" }, og = {
  key: 0,
  class: "changes-summary"
}, sg = {
  key: 0,
  class: "change-item"
}, ng = {
  key: 1,
  class: "change-item"
}, ag = {
  key: 2,
  class: "change-item"
}, lg = {
  key: 3,
  class: "change-item"
}, ig = {
  key: 4,
  class: "change-item"
}, rg = {
  key: 1,
  class: "no-changes"
}, dg = {
  key: 2,
  class: "loading"
}, cg = {
  key: 3,
  class: "issues-warning"
}, ug = { class: "warning-header" }, mg = { class: "warning-title" }, vg = { class: "issues-list" }, fg = { class: "message-section" }, gg = { class: "popover-footer" }, hg = {
  key: 1,
  class: "commit-popover"
}, pg = { class: "popover-header" }, yg = { class: "popover-body" }, wg = {
  key: 0,
  class: "changes-summary"
}, bg = {
  key: 0,
  class: "change-item"
}, kg = {
  key: 1,
  class: "change-item"
}, _g = {
  key: 2,
  class: "change-item"
}, $g = {
  key: 3,
  class: "change-item"
}, Cg = {
  key: 4,
  class: "change-item"
}, xg = {
  key: 1,
  class: "no-changes"
}, Sg = {
  key: 2,
  class: "loading"
}, Ig = {
  key: 3,
  class: "issues-warning"
}, Eg = { class: "warning-header" }, Mg = { class: "warning-title" }, zg = { class: "issues-list" }, Lg = { class: "message-section" }, Dg = { class: "popover-footer" }, Tg = /* @__PURE__ */ Q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: d }) {
    const s = t, r = d, { commit: f } = $e(), y = C(""), p = C(!1), c = C(!1), i = C(null), m = B(() => {
      if (!s.status) return !1;
      const _ = s.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || s.status.has_changes;
    }), w = B(() => {
      var _;
      return (_ = s.status) != null && _.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (x) => x.has_issues && (x.sync_state === "new" || x.sync_state === "modified")
      ) : [];
    }), g = B(() => w.value.length > 0), z = B(() => g.value && !c.value);
    async function I() {
      var _, x, b;
      if (!(g.value && !c.value) && !(!m.value || !y.value.trim() || p.value)) {
        p.value = !0, i.value = null;
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
          p.value = !1;
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
          e("div", eg, [
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
          e("div", tg, [
            t.status && m.value ? (o(), n("div", og, [
              t.status.workflows.new.length ? (o(), n("div", sg, [
                x[12] || (x[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : u("", !0),
              t.status.workflows.modified.length ? (o(), n("div", ng, [
                x[13] || (x[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : u("", !0),
              t.status.workflows.deleted.length ? (o(), n("div", ag, [
                x[14] || (x[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_added.length ? (o(), n("div", lg, [
                x[15] || (x[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), n("div", ig, [
                x[16] || (x[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : u("", !0)
            ])) : t.status ? (o(), n("div", rg, " No changes to commit ")) : (o(), n("div", dg, " Loading... ")),
            g.value ? (o(), n("div", cg, [
              e("div", ug, [
                x[17] || (x[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", mg, l(w.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", vg, [
                (o(!0), n(j, null, oe(w.value, (b) => (o(), n("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(b.name), 1),
                  h(": " + l(b.issue_summary), 1)
                ]))), 128))
              ]),
              v(Bt, {
                modelValue: c.value,
                "onUpdate:modelValue": x[1] || (x[1] = (b) => c.value = b),
                class: "allow-issues-toggle"
              }, {
                default: a(() => [...x[18] || (x[18] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : u("", !0),
            e("div", fg, [
              v(Ut, {
                modelValue: y.value,
                "onUpdate:modelValue": x[2] || (x[2] = (b) => y.value = b),
                placeholder: z.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || p.value || z.value,
                rows: 3,
                onCtrlEnter: I
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            i.value ? (o(), n("div", {
              key: 4,
              class: se(["result", i.value.type])
            }, l(i.value.message), 3)) : u("", !0)
          ]),
          e("div", gg, [
            v(le, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (b) => r("close"))
            }, {
              default: a(() => [...x[19] || (x[19] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(le, {
              variant: c.value ? "danger" : "primary",
              disabled: !m.value || !y.value.trim() || p.value || z.value,
              loading: p.value,
              onClick: I
            }, {
              default: a(() => [
                h(l(p.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), n("div", hg, [
      e("div", pg, [
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
      e("div", yg, [
        t.status && m.value ? (o(), n("div", wg, [
          t.status.workflows.new.length ? (o(), n("div", bg, [
            x[22] || (x[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          t.status.workflows.modified.length ? (o(), n("div", kg, [
            x[23] || (x[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          t.status.workflows.deleted.length ? (o(), n("div", _g, [
            x[24] || (x[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_added.length ? (o(), n("div", $g, [
            x[25] || (x[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), n("div", Cg, [
            x[26] || (x[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : t.status ? (o(), n("div", xg, " No changes to commit ")) : (o(), n("div", Sg, " Loading... ")),
        g.value ? (o(), n("div", Ig, [
          e("div", Eg, [
            x[27] || (x[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", Mg, l(w.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", zg, [
            (o(!0), n(j, null, oe(w.value, (b) => (o(), n("div", {
              key: b.name,
              class: "issue-item"
            }, [
              e("strong", null, l(b.name), 1),
              h(": " + l(b.issue_summary), 1)
            ]))), 128))
          ]),
          v(Bt, {
            modelValue: c.value,
            "onUpdate:modelValue": x[7] || (x[7] = (b) => c.value = b),
            class: "allow-issues-toggle"
          }, {
            default: a(() => [...x[28] || (x[28] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : u("", !0),
        e("div", Lg, [
          v(Ut, {
            modelValue: y.value,
            "onUpdate:modelValue": x[8] || (x[8] = (b) => y.value = b),
            placeholder: z.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || p.value || z.value,
            rows: 3,
            onCtrlEnter: I
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        i.value ? (o(), n("div", {
          key: 4,
          class: se(["result", i.value.type])
        }, l(i.value.message), 3)) : u("", !0)
      ]),
      e("div", Dg, [
        v(le, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (b) => r("close"))
        }, {
          default: a(() => [...x[29] || (x[29] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v(le, {
          variant: c.value ? "danger" : "primary",
          disabled: !m.value || !y.value.trim() || p.value || z.value,
          loading: p.value,
          onClick: I
        }, {
          default: a(() => [
            h(l(p.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), qt = /* @__PURE__ */ X(Tg, [["__scopeId", "data-v-38b45183"]]), Rg = { class: "modal-header" }, Ng = { class: "modal-body" }, Og = { class: "switch-message" }, Ug = { class: "switch-details" }, Bg = { class: "modal-actions" }, Pg = /* @__PURE__ */ Q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), E(_e, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", Rg, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", Ng, [
            e("p", Og, [
              s[6] || (s[6] = h(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              s[7] || (s[7] = h(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              s[8] || (s[8] = h("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Ug, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Bg, [
            v(Z, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(Z, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[12] || (s[12] = [
                h(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Vg = /* @__PURE__ */ X(Pg, [["__scopeId", "data-v-e9c5253e"]]), Ag = { class: "progress-bar" }, Fg = /* @__PURE__ */ Q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const d = t, s = B(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (r, f) => (o(), n("div", Ag, [
      e("div", {
        class: se(["progress-fill", t.variant]),
        style: qe({ width: s.value })
      }, null, 6)
    ]));
  }
}), Wg = /* @__PURE__ */ X(Fg, [["__scopeId", "data-v-1beb0512"]]), Gg = {
  key: 0,
  class: "modal-overlay"
}, jg = { class: "modal-content" }, Hg = { class: "modal-body" }, qg = { class: "progress-info" }, Kg = { class: "progress-percentage" }, Jg = { class: "progress-state" }, Yg = { class: "switch-steps" }, Qg = { class: "step-icon" }, Xg = { class: "step-label" }, Zg = /* @__PURE__ */ Q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const d = t, s = B(() => {
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
      ], p = y.findIndex((c) => c.state === d.state);
      return y.map((c, i) => {
        let m = "pending", w = "○";
        return i < p ? (m = "completed", w = "✓") : i === p && (m = "active", w = "⟳"), {
          ...c,
          status: m,
          icon: w
        };
      });
    });
    return (y, p) => (o(), E(_e, { to: "body" }, [
      t.show ? (o(), n("div", Gg, [
        e("div", jg, [
          p[1] || (p[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Hg, [
            v(Wg, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", qg, [
              e("div", Kg, l(t.progress) + "%", 1),
              e("div", Jg, l(s.value), 1)
            ]),
            e("div", Yg, [
              (o(!0), n(j, null, oe(f.value, (c) => (o(), n("div", {
                key: c.state,
                class: se(["switch-step", c.status])
              }, [
                e("span", Qg, l(c.icon), 1),
                e("span", Xg, l(c.label), 1)
              ], 2))), 128))
            ]),
            p[0] || (p[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), eh = /* @__PURE__ */ X(Zg, [["__scopeId", "data-v-768a5078"]]), th = { class: "modal-header" }, oh = { class: "modal-body" }, sh = {
  key: 0,
  class: "node-section"
}, nh = { class: "node-list" }, ah = {
  key: 1,
  class: "node-section"
}, lh = { class: "node-list" }, ih = { class: "modal-actions" }, rh = /* @__PURE__ */ Q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (d, s) => (o(), E(_e, { to: "body" }, [
      t.show ? (o(), n("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (r) => d.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = pe(() => {
          }, ["stop"]))
        }, [
          e("div", th, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          e("div", oh, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), n("div", sh, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", nh, [
                (o(!0), n(j, null, oe(t.mismatchDetails.missing_nodes, (r) => (o(), n("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : u("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), n("div", ah, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", lh, [
                (o(!0), n(j, null, oe(t.mismatchDetails.extra_nodes, (r) => (o(), n("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + l(r), 1))), 128))
              ])
            ])) : u("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", ih, [
            v(Z, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...s[10] || (s[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            v(Z, {
              variant: "primary",
              onClick: s[2] || (s[2] = (r) => d.$emit("confirm"))
            }, {
              default: a(() => [...s[11] || (s[11] = [
                h(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), dh = /* @__PURE__ */ X(rh, [["__scopeId", "data-v-7cad7518"]]);
async function dt(t, d = {}, s = 5e3) {
  const r = new AbortController(), f = setTimeout(() => r.abort(), s);
  try {
    const y = await fetch(t, {
      ...d,
      signal: r.signal
    });
    return clearTimeout(f), y;
  } catch (y) {
    throw clearTimeout(f), y.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : y;
  }
}
function ch() {
  const t = C(null);
  async function d() {
    try {
      const p = await dt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (p.ok)
        return (await p.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const p = await dt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Health check failed");
      return await p.json();
    } catch {
      return t.value = await d(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await d()), !t.value)
      return null;
    try {
      const p = await dt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Failed to get status");
      return await p.json();
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
    checkHealth: s,
    getStatus: r,
    restart: f,
    kill: y
  };
}
const uh = { class: "comfygit-panel" }, mh = { class: "panel-header" }, vh = { class: "header-left" }, fh = {
  key: 0,
  class: "header-info"
}, gh = { class: "header-actions" }, hh = { class: "env-switcher" }, ph = {
  key: 0,
  class: "header-info"
}, yh = { class: "branch-name" }, wh = { class: "panel-main" }, bh = { class: "sidebar" }, kh = { class: "sidebar-section" }, _h = { class: "sidebar-section" }, $h = { class: "sidebar-section" }, Ch = { class: "content-area" }, xh = {
  key: 0,
  class: "error-message"
}, Sh = {
  key: 1,
  class: "loading"
}, Ih = { class: "dialog-content env-selector-dialog" }, Eh = { class: "dialog-header" }, Mh = { class: "dialog-body" }, zh = { class: "env-list" }, Lh = { class: "env-info" }, Dh = { class: "env-name-row" }, Th = { class: "env-indicator" }, Rh = { class: "env-name" }, Nh = {
  key: 0,
  class: "env-branch"
}, Oh = {
  key: 1,
  class: "current-label"
}, Uh = { class: "env-stats" }, Bh = ["onClick"], Ph = { class: "toast-container" }, Vh = { class: "toast-icon" }, Ah = { class: "toast-message" }, Fh = /* @__PURE__ */ Q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: d }) {
    const s = d, {
      getStatus: r,
      getHistory: f,
      getBranches: y,
      checkout: p,
      createBranch: c,
      switchBranch: i,
      getEnvironments: m,
      switchEnvironment: w,
      getSwitchProgress: g,
      syncEnvironmentManually: z
    } = $e(), I = ch(), _ = C(null), x = C([]), b = C([]), $ = C([]), F = B(() => $.value.find((H) => H.is_current)), P = C(!1), R = C(null), q = C(null), L = C(!1), T = C(null), N = C(!1), M = C(!1), S = C(""), O = C({ state: "idle", progress: 0, message: "" });
    let V = null, te = null;
    const W = C("status"), A = C("this-env");
    function ee(H, D) {
      W.value = H, A.value = D;
    }
    function J(H) {
      const de = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[H];
      de && ee(de.view, de.section);
    }
    function U() {
      ee("branches", "this-env");
    }
    function ae() {
      s("close"), setTimeout(() => {
        var D;
        const H = document.querySelectorAll("button.comfyui-button");
        for (const de of H)
          if (((D = de.textContent) == null ? void 0 : D.trim()) === "Manager") {
            de.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Y = C(null), be = C(!1), ve = C(!1), ze = C([]);
    let lt = 0;
    function me(H, D = "info", de = 3e3) {
      const he = ++lt;
      return ze.value.push({ id: he, message: H, type: D }), de > 0 && setTimeout(() => {
        ze.value = ze.value.filter((Le) => Le.id !== he);
      }, de), he;
    }
    function Me(H) {
      ze.value = ze.value.filter((D) => D.id !== H);
    }
    function it(H) {
      switch (H) {
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
      const H = _.value.workflows, D = H.new.length > 0 || H.modified.length > 0 || H.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? D ? "warning" : "success" : "error";
    });
    B(() => _.value ? Ke.value === "success" ? "All synced" : Ke.value === "warning" ? "Uncommitted changes" : Ke.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      P.value = !0, R.value = null;
      try {
        const [H, D, de, he] = await Promise.all([
          r(!0),
          f(),
          y(),
          m()
        ]);
        _.value = H, x.value = D.commits, b.value = de.branches, $.value = he, s("statusUpdate", H), T.value && await T.value.loadWorkflows(!0);
      } catch (H) {
        R.value = H instanceof Error ? H.message : "Failed to load status", _.value = null, x.value = [], b.value = [];
      } finally {
        P.value = !1;
      }
    }
    function rt(H) {
      q.value = H;
    }
    async function Ze(H) {
      var de;
      q.value = null;
      const D = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      Y.value = {
        title: D ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: D ? "You have uncommitted changes that will be lost." : `Checkout commit ${H.short_hash || ((de = H.hash) == null ? void 0 : de.slice(0, 7))}?`,
        details: D ? Rt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: D ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: D,
        onConfirm: async () => {
          var De;
          Y.value = null, ne();
          const he = me(`Checking out ${H.short_hash || ((De = H.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Le = await p(H.hash, D);
          Me(he), Le.status === "success" ? me("Restarting ComfyUI...", "success") : me(Le.message || "Checkout failed", "error");
        }
      };
    }
    async function K(H) {
      const D = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      Y.value = {
        title: D ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: D ? "You have uncommitted changes." : `Switch to branch "${H}"?`,
        details: D ? Rt() : void 0,
        warning: D ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: D ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Y.value = null, ne();
          const de = me(`Switching to ${H}...`, "info", 0), he = await i(H, D);
          Me(de), he.status === "success" ? me("Restarting ComfyUI...", "success") : me(he.message || "Branch switch failed", "error");
        }
      };
    }
    async function k(H) {
      const D = me(`Creating branch ${H}...`, "info", 0), de = await c(H);
      Me(D), de.status === "success" ? (me(`Branch "${H}" created`, "success"), await Se()) : me(de.message || "Failed to create branch", "error");
    }
    async function G(H) {
      q.value = null;
      const D = prompt("Enter branch name:");
      if (D) {
        const de = me(`Creating branch ${D}...`, "info", 0), he = await c(D, H.hash);
        Me(de), he.status === "success" ? (me(`Branch "${D}" created from ${H.short_hash}`, "success"), await Se()) : me(he.message || "Failed to create branch", "error");
      }
    }
    function ne() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ge(H) {
      L.value = !1, S.value = H, N.value = !0;
    }
    async function Oe() {
      N.value = !1, M.value = !0, ne(), O.value = {
        progress: 10,
        state: Ue(10),
        message: Je(10)
      };
      try {
        await w(S.value), yt(), Xt();
      } catch (H) {
        Be(), M.value = !1, me(`Failed to initiate switch: ${H instanceof Error ? H.message : "Unknown error"}`, "error"), O.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ue(H) {
      return H >= 100 ? "complete" : H >= 80 ? "validating" : H >= 60 ? "starting" : H >= 30 ? "syncing" : "preparing";
    }
    function Je(H) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ue(H)] || "";
    }
    function yt() {
      if (te) return;
      let H = 10;
      const D = 60, de = 5e3, he = 100, Le = (D - H) / (de / he);
      te = window.setInterval(() => {
        if (H += Le, H >= D && (H = D, Be()), O.value.progress < D) {
          const De = Math.floor(H);
          O.value = {
            progress: De,
            state: Ue(De),
            message: Je(De)
          };
        }
      }, he);
    }
    function Be() {
      te && (clearInterval(te), te = null);
    }
    function Xt() {
      V || (V = window.setInterval(async () => {
        try {
          let H = await I.getStatus();
          if ((!H || H.state === "idle") && (H = await g()), !H)
            return;
          const D = H.progress || 0;
          D >= 60 && Be();
          const de = Math.max(D, O.value.progress), he = H.state && H.state !== "idle" && H.state !== "unknown", Le = he ? H.state : Ue(de), De = he && H.message || Je(de);
          O.value = {
            state: Le,
            progress: de,
            message: De
          }, H.state === "complete" ? (Be(), kt(), M.value = !1, me(`✓ Switched to ${S.value}`, "success"), await Se(), S.value = "") : H.state === "rolled_back" ? (Be(), kt(), M.value = !1, me("Switch failed, restored previous environment", "warning"), S.value = "") : H.state === "critical_failure" && (Be(), kt(), M.value = !1, me(`Critical error during switch: ${H.message}`, "error"), S.value = "");
        } catch (H) {
          console.error("Failed to poll switch progress:", H);
        }
      }, 1e3));
    }
    function kt() {
      Be(), V && (clearInterval(V), V = null);
    }
    function Zt() {
      N.value = !1, S.value = "";
    }
    async function eo() {
      be.value = !1, await Se(), me("✓ Changes committed", "success");
    }
    async function to() {
      ve.value = !1;
      const H = me("Syncing environment...", "info", 0);
      try {
        const D = await z("skip", !0);
        if (Me(H), D.status === "success") {
          const de = [];
          D.nodes_installed.length && de.push(`${D.nodes_installed.length} installed`), D.nodes_removed.length && de.push(`${D.nodes_removed.length} removed`);
          const he = de.length ? `: ${de.join(", ")}` : "";
          me(`✓ Environment synced${he}`, "success"), await Se();
        } else {
          const de = D.errors.length ? D.errors.join("; ") : D.message;
          me(`Sync failed: ${de}`, "error");
        }
      } catch (D) {
        Me(H), me(`Sync error: ${D instanceof Error ? D.message : "Unknown error"}`, "error");
      }
    }
    async function oo(H) {
      const D = me(`Creating environment "${H}"...`, "info", 0);
      Me(D), me("Environment creation not yet implemented", "warning");
    }
    async function so(H) {
      const D = me(`Deleting environment "${H}"...`, "info", 0);
      Me(D), me("Environment deletion not yet implemented", "warning");
    }
    function no(H) {
      me(`Viewing details for "${H}"`, "info"), ee("models-env", "this-env");
    }
    function Rt() {
      if (!_.value) return [];
      const H = [], D = _.value.workflows;
      return D.new.length && H.push(`${D.new.length} new workflow(s)`), D.modified.length && H.push(`${D.modified.length} modified workflow(s)`), D.deleted.length && H.push(`${D.deleted.length} deleted workflow(s)`), H;
    }
    return we(Se), (H, D) => {
      var de, he, Le, De;
      return o(), n("div", uh, [
        e("div", mh, [
          e("div", vh, [
            D[27] || (D[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (o(), n("div", fh)) : u("", !0)
          ]),
          e("div", gh, [
            e("button", {
              class: se(["icon-btn", { spinning: P.value }]),
              onClick: Se,
              title: "Refresh"
            }, [...D[28] || (D[28] = [
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
              onClick: D[0] || (D[0] = (ie) => s("close")),
              title: "Close"
            }, [...D[29] || (D[29] = [
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
        e("div", hh, [
          D[31] || (D[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: D[1] || (D[1] = (ie) => ee("environments", "all-envs"))
          }, [
            _.value ? (o(), n("div", ph, [
              e("span", null, l(((de = F.value) == null ? void 0 : de.name) || ((he = _.value) == null ? void 0 : he.environment) || "Loading..."), 1),
              e("span", yh, "(" + l(_.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            D[30] || (D[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", wh, [
          e("div", bh, [
            e("div", kh, [
              D[32] || (D[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "status" && A.value === "this-env" }]),
                onClick: D[2] || (D[2] = (ie) => ee("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "workflows" }]),
                onClick: D[3] || (D[3] = (ie) => ee("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "models-env" }]),
                onClick: D[4] || (D[4] = (ie) => ee("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "branches" }]),
                onClick: D[5] || (D[5] = (ie) => ee("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "history" }]),
                onClick: D[6] || (D[6] = (ie) => ee("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "nodes" }]),
                onClick: D[7] || (D[7] = (ie) => ee("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "debug-env" }]),
                onClick: D[8] || (D[8] = (ie) => ee("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            D[35] || (D[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", _h, [
              D[33] || (D[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "environments" }]),
                onClick: D[9] || (D[9] = (ie) => ee("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "model-index" }]),
                onClick: D[10] || (D[10] = (ie) => ee("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "settings" }]),
                onClick: D[11] || (D[11] = (ie) => ee("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "debug-workspace" }]),
                onClick: D[12] || (D[12] = (ie) => ee("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            D[36] || (D[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", $h, [
              D[34] || (D[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "export" }]),
                onClick: D[13] || (D[13] = (ie) => ee("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "import" }]),
                onClick: D[14] || (D[14] = (ie) => ee("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: W.value === "remotes" }]),
                onClick: D[15] || (D[15] = (ie) => ee("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Ch, [
            R.value ? (o(), n("div", xh, l(R.value), 1)) : !_.value && W.value === "status" ? (o(), n("div", Sh, " Loading status... ")) : (o(), n(j, { key: 2 }, [
              W.value === "status" ? (o(), E(Gn, {
                key: 0,
                status: _.value,
                onSwitchBranch: U,
                onCommitChanges: D[16] || (D[16] = (ie) => be.value = !0),
                onSyncEnvironment: D[17] || (D[17] = (ie) => ve.value = !0),
                onViewWorkflows: D[18] || (D[18] = (ie) => ee("workflows", "this-env")),
                onViewHistory: D[19] || (D[19] = (ie) => ee("history", "this-env")),
                onViewDebug: D[20] || (D[20] = (ie) => ee("debug-env", "this-env"))
              }, null, 8, ["status"])) : W.value === "workflows" ? (o(), E(tc, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: T,
                onRefresh: Se
              }, null, 512)) : W.value === "models-env" ? (o(), E(Uc, {
                key: 2,
                onNavigate: J
              })) : W.value === "branches" ? (o(), E(aa, {
                key: 3,
                branches: b.value,
                current: ((Le = _.value) == null ? void 0 : Le.branch) || null,
                onSwitch: K,
                onCreate: k
              }, null, 8, ["branches", "current"])) : W.value === "history" ? (o(), E(ha, {
                key: 4,
                commits: x.value,
                onSelect: rt,
                onCheckout: Ze
              }, null, 8, ["commits"])) : W.value === "nodes" ? (o(), E(xu, {
                key: 5,
                onOpenNodeManager: ae
              })) : W.value === "debug-env" ? (o(), E(Cm, { key: 6 })) : W.value === "environments" ? (o(), E(Om, {
                key: 7,
                onSwitch: ge,
                onCreate: oo,
                onDelete: so,
                onViewDetails: no
              })) : W.value === "model-index" ? (o(), E(su, {
                key: 8,
                onRefresh: Se
              })) : W.value === "settings" ? (o(), E(bm, { key: 9 })) : W.value === "debug-workspace" ? (o(), E(_m, { key: 10 })) : W.value === "export" ? (o(), E(Hm, { key: 11 })) : W.value === "import" ? (o(), E(kf, { key: 12 })) : W.value === "remotes" ? (o(), E(tm, { key: 13 })) : u("", !0)
            ], 64))
          ])
        ]),
        q.value ? (o(), E(Pf, {
          key: 0,
          commit: q.value,
          onClose: D[21] || (D[21] = (ie) => q.value = null),
          onCheckout: Ze,
          onCreateBranch: G
        }, null, 8, ["commit"])) : u("", !0),
        Y.value ? (o(), E(Gf, {
          key: 1,
          title: Y.value.title,
          message: Y.value.message,
          details: Y.value.details,
          warning: Y.value.warning,
          confirmLabel: Y.value.confirmLabel,
          cancelLabel: Y.value.cancelLabel,
          secondaryLabel: Y.value.secondaryLabel,
          secondaryAction: Y.value.secondaryAction,
          destructive: Y.value.destructive,
          onConfirm: Y.value.onConfirm,
          onCancel: D[22] || (D[22] = (ie) => Y.value = null),
          onSecondary: Y.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        v(Vg, {
          show: N.value,
          "from-environment": ((De = F.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": S.value,
          onConfirm: Oe,
          onClose: Zt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        be.value && _.value ? (o(), E(qt, {
          key: 2,
          status: _.value,
          "as-modal": !0,
          onClose: D[23] || (D[23] = (ie) => be.value = !1),
          onCommitted: eo
        }, null, 8, ["status"])) : u("", !0),
        ve.value && _.value ? (o(), E(dh, {
          key: 3,
          show: ve.value,
          "mismatch-details": {
            missing_nodes: _.value.comparison.missing_nodes,
            extra_nodes: _.value.comparison.extra_nodes
          },
          onConfirm: to,
          onClose: D[24] || (D[24] = (ie) => ve.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : u("", !0),
        v(eh, {
          show: M.value,
          state: O.value.state,
          progress: O.value.progress,
          message: O.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        L.value ? (o(), n("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: D[26] || (D[26] = pe((ie) => L.value = !1, ["self"]))
        }, [
          e("div", Ih, [
            e("div", Eh, [
              D[38] || (D[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: D[25] || (D[25] = (ie) => L.value = !1)
              }, [...D[37] || (D[37] = [
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
            e("div", Mh, [
              D[39] || (D[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", zh, [
                (o(!0), n(j, null, oe($.value, (ie) => (o(), n("div", {
                  key: ie.name,
                  class: se(["env-item", { current: ie.is_current }])
                }, [
                  e("div", Lh, [
                    e("div", Dh, [
                      e("span", Th, l(ie.is_current ? "●" : "○"), 1),
                      e("span", Rh, l(ie.name), 1),
                      ie.current_branch ? (o(), n("span", Nh, "(" + l(ie.current_branch) + ")", 1)) : u("", !0),
                      ie.is_current ? (o(), n("span", Oh, "CURRENT")) : u("", !0)
                    ]),
                    e("div", Uh, l(ie.workflow_count) + " workflows • " + l(ie.node_count) + " nodes ", 1)
                  ]),
                  ie.is_current ? u("", !0) : (o(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Jp) => ge(ie.name)
                  }, " SWITCH ", 8, Bh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        e("div", Ph, [
          v(mo, { name: "toast" }, {
            default: a(() => [
              (o(!0), n(j, null, oe(ze.value, (ie) => (o(), n("div", {
                key: ie.id,
                class: se(["toast", ie.type])
              }, [
                e("span", Vh, l(it(ie.type)), 1),
                e("span", Ah, l(ie.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Wh = /* @__PURE__ */ X(Fh, [["__scopeId", "data-v-99b7a544"]]), Gh = { class: "item-header" }, jh = { class: "item-info" }, Hh = { class: "filename" }, qh = { class: "metadata" }, Kh = { class: "size" }, Jh = {
  key: 0,
  class: "type"
}, Yh = { class: "item-actions" }, Qh = {
  key: 0,
  class: "progress-section"
}, Xh = { class: "progress-bar" }, Zh = { class: "progress-stats" }, ep = { class: "downloaded" }, tp = { class: "speed" }, op = {
  key: 0,
  class: "eta"
}, sp = {
  key: 1,
  class: "status-msg paused"
}, np = {
  key: 2,
  class: "status-msg queued"
}, ap = {
  key: 3,
  class: "status-msg completed"
}, lp = {
  key: 4,
  class: "status-msg failed"
}, ip = {
  key: 0,
  class: "retries"
}, rp = /* @__PURE__ */ Q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: d }) {
    const s = d;
    function r(p) {
      if (p === 0) return "?";
      const c = p / (1024 * 1024 * 1024);
      return c >= 1 ? `${c.toFixed(2)} GB` : `${(p / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(p) {
      return p === 0 ? "-" : `${(p / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(p) {
      if (p < 60) return `${Math.round(p)}s`;
      const c = Math.floor(p / 60);
      return c < 60 ? `${c}m` : `${Math.floor(c / 60)}h ${c % 60}m`;
    }
    return (p, c) => (o(), n("div", {
      class: se(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Gh, [
        e("div", jh, [
          e("div", Hh, l(t.item.filename), 1),
          e("div", qh, [
            e("span", Kh, l(r(t.item.size)), 1),
            t.item.type ? (o(), n("span", Jh, l(t.item.type), 1)) : u("", !0)
          ])
        ]),
        e("div", Yh, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), n("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: c[0] || (c[0] = (i) => s("cancel")),
            title: "Cancel"
          }, " × ")) : u("", !0),
          t.item.status === "paused" ? (o(), n("button", {
            key: 1,
            class: "action-icon resume",
            onClick: c[1] || (c[1] = (i) => s("resume")),
            title: "Resume"
          }, " ▶ ")) : u("", !0),
          t.item.status === "failed" ? (o(), n("button", {
            key: 2,
            class: "action-icon retry",
            onClick: c[2] || (c[2] = (i) => s("retry")),
            title: "Retry"
          }, " ↻ ")) : u("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), n("button", {
            key: 3,
            class: "action-icon remove",
            onClick: c[3] || (c[3] = (i) => s("remove")),
            title: "Remove"
          }, " × ")) : u("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), n("div", Qh, [
        e("div", Xh, [
          e("div", {
            class: "progress-fill",
            style: qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Zh, [
          e("span", ep, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", tp, l(f(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), n("span", op, l(y(t.item.eta)), 1)) : u("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), n("div", sp, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), n("div", np, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), n("div", ap, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), n("div", lp, [
        h(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), n("span", ip, "(" + l(t.item.retries) + " retries)", 1)) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ X(rp, [["__scopeId", "data-v-2110df65"]]), dp = { class: "queue-title" }, cp = { class: "count" }, up = { class: "queue-actions" }, mp = { class: "action-label" }, vp = {
  key: 0,
  class: "overall-progress"
}, fp = { class: "progress-bar" }, gp = {
  key: 0,
  class: "current-mini"
}, hp = { class: "filename" }, pp = { class: "speed" }, yp = {
  key: 1,
  class: "queue-content"
}, wp = {
  key: 0,
  class: "section"
}, bp = {
  key: 1,
  class: "section"
}, kp = { class: "section-header" }, _p = { class: "section-label paused" }, $p = { class: "items-list" }, Cp = {
  key: 2,
  class: "section"
}, xp = { class: "section-header" }, Sp = { class: "section-label" }, Ip = { class: "items-list" }, Ep = {
  key: 3,
  class: "section"
}, Mp = { class: "section-header" }, zp = { class: "section-label" }, Lp = { class: "items-list" }, Dp = {
  key: 4,
  class: "section"
}, Tp = { class: "section-header" }, Rp = { class: "section-label failed" }, Np = { class: "items-list" }, Op = /* @__PURE__ */ Q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: d,
      currentDownload: s,
      queuedItems: r,
      completedItems: f,
      failedItems: y,
      pausedItems: p,
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
        paused: p.value.length,
        completed: f.value.length
      }),
      (R, q) => {
        b && (clearTimeout(b), b = null);
        const L = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, T = q && (q.active > 0 || q.paused > 0);
        L && T && (b = setTimeout(() => {
          _(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = B(() => {
      var L;
      if (d.items.length === 0) return 0;
      const R = f.value.length, q = ((L = s.value) == null ? void 0 : L.progress) || 0;
      return Math.round((R + q / 100) / d.items.length * 100);
    });
    function F(R) {
      m(R);
    }
    function P(R) {
      return R === 0 ? "" : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, q) => (o(), E(_e, { to: "body" }, [
      ce(c) ? (o(), n("div", {
        key: 0,
        class: se(["model-download-queue", { minimized: !x.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (L) => x.value = !x.value)
        }, [
          e("div", dp, [
            q[4] || (q[4] = e("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", cp, "(" + l(ce(i)) + "/" + l(ce(d).items.length) + ")", 1)
          ]),
          e("div", up, [
            e("span", mp, l(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (o(), n("div", yp, [
          ce(s) ? (o(), n("div", wp, [
            q[6] || (q[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            v(ct, {
              item: ce(s),
              onCancel: q[1] || (q[1] = (L) => F(ce(s).id))
            }, null, 8, ["item"])
          ])) : u("", !0),
          ce(p).length > 0 ? (o(), n("div", bp, [
            e("div", kp, [
              e("span", _p, "Paused (" + l(ce(p).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...L) => ce(z) && ce(z)(...L))
              }, "Resume All")
            ]),
            e("div", $p, [
              (o(!0), n(j, null, oe(ce(p), (L) => (o(), E(ct, {
                key: L.id,
                item: L,
                onResume: (T) => ce(g)(L.id),
                onRemove: (T) => ce(I)(L.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          ce(r).length > 0 ? (o(), n("div", Cp, [
            e("div", xp, [
              e("span", Sp, "Queued (" + l(ce(r).length) + ")", 1)
            ]),
            e("div", Ip, [
              (o(!0), n(j, null, oe(ce(r), (L) => (o(), E(ct, {
                key: L.id,
                item: L,
                onCancel: (T) => F(L.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : u("", !0),
          ce(f).length > 0 ? (o(), n("div", Ep, [
            e("div", Mp, [
              e("span", zp, "Completed (" + l(ce(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...L) => ce(_) && ce(_)(...L))
              }, "Clear")
            ]),
            e("div", Lp, [
              (o(!0), n(j, null, oe(ce(f).slice(0, 3), (L) => (o(), E(ct, {
                key: L.id,
                item: L,
                onRemove: (T) => ce(I)(L.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          ce(y).length > 0 ? (o(), n("div", Dp, [
            e("div", Tp, [
              e("span", Rp, "Failed (" + l(ce(y).length) + ")", 1)
            ]),
            e("div", Np, [
              (o(!0), n(j, null, oe(ce(y), (L) => (o(), E(ct, {
                key: L.id,
                item: L,
                onRetry: (T) => ce(w)(L.id),
                onRemove: (T) => ce(I)(L.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : u("", !0)
        ])) : (o(), n("div", vp, [
          e("div", fp, [
            e("div", {
              class: "progress-fill",
              style: qe({ width: `${$.value}%` })
            }, null, 4)
          ]),
          ce(s) ? (o(), n("div", gp, [
            e("span", hp, l(ce(s).filename), 1),
            e("span", pp, l(P(ce(s).speed)), 1)
          ])) : u("", !0)
        ]))
      ], 2)) : u("", !0)
    ]));
  }
}), Up = /* @__PURE__ */ X(Op, [["__scopeId", "data-v-60751cfa"]]), Bp = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Pp = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Vp = {
  comfy: Bp,
  phosphor: Pp
}, Dt = "comfy", Kt = "comfygit-theme";
let Ye = null, Jt = Dt;
function Ap() {
  try {
    const t = localStorage.getItem(Kt);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Dt;
}
function Yt(t = Dt) {
  Ye && Ye.remove(), Ye = document.createElement("style"), Ye.id = "comfygit-theme-styles", Ye.setAttribute("data-theme", t), Ye.textContent = Vp[t], document.head.appendChild(Ye), document.body.setAttribute("data-comfygit-theme", t), Jt = t;
  try {
    localStorage.setItem(Kt, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Fp() {
  return Jt;
}
function Wp(t) {
  Yt(t);
}
const Tt = document.createElement("link");
Tt.rel = "stylesheet";
Tt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Tt);
const Gp = Ap();
Yt(Gp);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Wp(t);
  },
  getTheme: () => {
    const t = Fp();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Te = null, Ie = null, ft = null, ut = null, Pt = null;
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
function jp() {
  if (!ot.value) return !1;
  const t = ot.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || ot.value.has_changes;
}
function Hp() {
  Te && Te.remove(), Te = document.createElement("div"), Te.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Te.appendChild(t), Te.addEventListener("click", (r) => {
    r.target === Te && Ct();
  });
  const d = (r) => {
    r.key === "Escape" && (Ct(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Mt({
    render: () => zt(Wh, {
      onClose: Ct,
      onStatusUpdate: (r) => {
        ot.value = r, gt();
      }
    })
  }).mount(t), document.body.appendChild(Te);
}
function Ct() {
  Te && (Te.remove(), Te = null);
}
function qp(t) {
  mt(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const d = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${d.bottom + 8}px`, Ie.style.right = `${window.innerWidth - d.right}px`, Ie.style.zIndex = "10001";
  const s = (f) => {
    Ie && !Ie.contains(f.target) && f.target !== t && (mt(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (f) => {
    f.key === "Escape" && (mt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), ft = Mt({
    render: () => zt(qt, {
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
function Kp() {
  ut || (ut = document.createElement("div"), ut.className = "comfygit-download-queue-root", Pt = Mt({
    render: () => zt(Up)
  }), Pt.mount(ut), document.body.appendChild(ut), console.log("[ComfyGit] Model download queue mounted"));
}
let Ae = null;
function gt() {
  if (!Ae) return;
  const t = Ae.querySelector(".commit-indicator");
  t && (t.style.display = jp() ? "block" : "none");
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
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Hp, Ae = document.createElement("button"), Ae.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ae.innerHTML = 'Commit <span class="commit-indicator"></span>', Ae.title = "Quick Commit", Ae.onclick = () => qp(Ae), t.appendChild(d), t.appendChild(Ae), (y = (f = tt.menu) == null ? void 0 : f.settingsGroup) != null && y.element && (tt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Kp();
    const { loadPendingDownloads: s } = pt();
    s(), await bt(), gt(), setInterval(async () => {
      await bt(), gt();
    }, 3e4);
    const r = tt.api;
    if (r) {
      let p = function() {
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
        `, g.onmouseover = () => g.style.background = "var(--comfy-input-bg)", g.onmouseout = () => g.style.background = "var(--comfy-menu-bg)", g.onclick = () => p(), m.appendChild(g);
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
        w && !i && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), p()) : c()), i = w;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
