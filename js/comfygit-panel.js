import { app as vt } from "../../scripts/app.js";
import { defineComponent as G, createElementBlock as a, openBlock as o, createCommentVNode as d, createElementVNode as e, renderSlot as le, createBlock as w, resolveDynamicComponent as wt, normalizeClass as ee, withCtx as n, toDisplayString as i, createVNode as c, createTextVNode as u, computed as B, Fragment as H, renderList as Q, normalizeStyle as qe, ref as C, onMounted as be, watch as zt, Teleport as Ne, withModifiers as we, Transition as Xt, withKeys as De, onUnmounted as Zt, nextTick as Mt, resolveComponent as Jt, createSlots as Lt, TransitionGroup as Qt, createApp as Rt, h as Nt } from "vue";
const eo = { class: "panel-layout" }, to = {
  key: 0,
  class: "panel-layout-header"
}, oo = {
  key: 1,
  class: "panel-layout-search"
}, so = { class: "panel-layout-content" }, ao = {
  key: 2,
  class: "panel-layout-footer"
}, no = /* @__PURE__ */ G({
  __name: "PanelLayout",
  setup(t) {
    return (r, s) => (o(), a("div", eo, [
      r.$slots.header ? (o(), a("div", to, [
        le(r.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      r.$slots.search ? (o(), a("div", oo, [
        le(r.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", so, [
        le(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (o(), a("div", ao, [
        le(r.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), j = (t, r) => {
  const s = t.__vccOpts || t;
  for (const [l, h] of r)
    s[l] = h;
  return s;
}, $e = /* @__PURE__ */ j(no, [["__scopeId", "data-v-21565df9"]]), lo = {
  key: 0,
  class: "panel-title-prefix"
}, io = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ro = /* @__PURE__ */ G({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, s) => (o(), w(wt(`h${t.level}`), {
      class: ee(["panel-title", t.variant])
    }, {
      default: n(() => [
        t.showPrefix ? (o(), a("span", lo, i(t.prefix), 1)) : (o(), a("span", io)),
        le(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), co = /* @__PURE__ */ j(ro, [["__scopeId", "data-v-c3875efc"]]), uo = ["title"], mo = ["width", "height"], vo = /* @__PURE__ */ G({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (r, s) => (o(), a("button", {
      class: "info-button",
      title: t.title,
      onClick: s[0] || (s[0] = (l) => r.$emit("click"))
    }, [
      (o(), a("svg", {
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
      ])], 8, mo))
    ], 8, uo));
  }
}), Ut = /* @__PURE__ */ j(vo, [["__scopeId", "data-v-6fc7f16d"]]), fo = { class: "header-left" }, go = {
  key: 0,
  class: "header-actions"
}, ho = /* @__PURE__ */ G({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (r, s) => (o(), a("div", {
      class: ee(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", fo, [
        c(co, { "show-prefix": t.showPrefix }, {
          default: n(() => [
            u(i(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), w(Ut, {
          key: 0,
          onClick: s[0] || (s[0] = (l) => r.$emit("info-click"))
        })) : d("", !0)
      ]),
      r.$slots.actions ? (o(), a("div", go, [
        le(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ce = /* @__PURE__ */ j(ho, [["__scopeId", "data-v-55a62cd6"]]), po = {
  key: 0,
  class: "section-title-count"
}, yo = {
  key: 1,
  class: "section-title-icon"
}, wo = /* @__PURE__ */ G({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, s) => (o(), w(wt(`h${t.level}`), {
      class: ee(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (l) => t.clickable && r.$emit("click"))
    }, {
      default: n(() => [
        le(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), a("span", po, "(" + i(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (o(), a("span", yo, i(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ee = /* @__PURE__ */ j(wo, [["__scopeId", "data-v-559361eb"]]), ko = { class: "status-grid" }, bo = { class: "status-grid__column" }, _o = { class: "status-grid__title" }, $o = { class: "status-grid__column status-grid__column--right" }, Co = { class: "status-grid__title" }, xo = /* @__PURE__ */ G({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, s) => (o(), a("div", ko, [
      e("div", bo, [
        e("h4", _o, i(t.leftTitle), 1),
        le(r.$slots, "left", {}, void 0, !0)
      ]),
      e("div", $o, [
        e("h4", Co, i(t.rightTitle), 1),
        le(r.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), So = /* @__PURE__ */ j(xo, [["__scopeId", "data-v-fe556068"]]), Io = {
  key: 0,
  class: "status-item__icon"
}, Eo = {
  key: 1,
  class: "status-item__count"
}, zo = { class: "status-item__label" }, Mo = /* @__PURE__ */ G({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, s = B(() => `status-item--${r.variant}`);
    return (l, h) => (o(), a("div", {
      class: ee(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), a("span", Io, i(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (o(), a("span", Eo, i(t.count), 1)) : d("", !0),
      e("span", zo, i(t.label), 1)
    ], 2));
  }
}), Be = /* @__PURE__ */ j(Mo, [["__scopeId", "data-v-6f929183"]]), Lo = { class: "issue-card__header" }, Ro = { class: "issue-card__icon" }, No = { class: "issue-card__title" }, Uo = {
  key: 0,
  class: "issue-card__content"
}, Bo = {
  key: 0,
  class: "issue-card__description"
}, To = {
  key: 1,
  class: "issue-card__items"
}, Do = {
  key: 2,
  class: "issue-card__actions"
}, Oo = /* @__PURE__ */ G({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, s = B(() => `issue-card--${r.severity}`);
    return (l, h) => (o(), a("div", {
      class: ee(["issue-card", s.value])
    }, [
      e("div", Lo, [
        e("span", Ro, i(t.icon), 1),
        e("h4", No, i(t.title), 1)
      ]),
      l.$slots.default || t.description ? (o(), a("div", Uo, [
        t.description ? (o(), a("p", Bo, i(t.description), 1)) : d("", !0),
        le(l.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (o(), a("div", To, [
        (o(!0), a(H, null, Q(t.items, (p, v) => (o(), a("div", {
          key: v,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, i(p), 1)
        ]))), 128))
      ])) : d("", !0),
      l.$slots.actions ? (o(), a("div", Do, [
        le(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ j(Oo, [["__scopeId", "data-v-df6aa348"]]), Vo = ["type", "disabled"], Ao = {
  key: 0,
  class: "spinner"
}, Wo = /* @__PURE__ */ G({
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
    return (r, s) => (o(), a("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ee(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (l) => r.$emit("click", l))
    }, [
      t.loading ? (o(), a("span", Ao)) : d("", !0),
      t.loading ? d("", !0) : le(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Vo));
  }
}), A = /* @__PURE__ */ j(Wo, [["__scopeId", "data-v-772abe47"]]), Fo = { class: "empty-state" }, Po = {
  key: 0,
  class: "empty-icon"
}, Ho = { class: "empty-message" }, Go = /* @__PURE__ */ G({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, s) => (o(), a("div", Fo, [
      t.icon ? (o(), a("div", Po, i(t.icon), 1)) : d("", !0),
      e("p", Ho, i(t.message), 1),
      t.actionLabel ? (o(), w(A, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => r.$emit("action"))
      }, {
        default: n(() => [
          u(i(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), Ue = /* @__PURE__ */ j(Go, [["__scopeId", "data-v-4466284f"]]), jo = { class: "branch-indicator" }, Ko = { class: "branch-indicator__info" }, qo = { class: "branch-indicator__label" }, Yo = { class: "branch-indicator__name" }, Xo = {
  key: 0,
  class: "branch-indicator__remote"
}, Zo = {
  key: 0,
  class: "branch-indicator__status"
}, Jo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Qo = {
  key: 1,
  class: "branch-indicator__behind"
}, es = {
  key: 1,
  class: "branch-indicator__actions"
}, ts = /* @__PURE__ */ G({
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
    return (r, s) => (o(), a("div", jo, [
      e("div", Ko, [
        e("span", qo, i(t.label), 1),
        e("span", Yo, i(t.branchName), 1),
        t.remote ? (o(), a("span", Xo, "@" + i(t.remote), 1)) : d("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), a("div", Zo, [
        t.commitsAhead ? (o(), a("span", Jo, " ↑ " + i(t.commitsAhead) + " ahead ", 1)) : d("", !0),
        t.commitsBehind ? (o(), a("span", Qo, " ↓ " + i(t.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      r.$slots.actions ? (o(), a("div", es, [
        le(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), os = /* @__PURE__ */ j(ts, [["__scopeId", "data-v-cb8dd50e"]]), ss = /* @__PURE__ */ G({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, s) => (o(), a("span", {
      class: ee(["detail-label"]),
      style: qe({ minWidth: t.minWidth })
    }, [
      le(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ht = /* @__PURE__ */ j(ss, [["__scopeId", "data-v-75e9eeb8"]]), as = /* @__PURE__ */ G({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, s) => (o(), a("span", {
      class: ee(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      le(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ j(as, [["__scopeId", "data-v-2f186e4c"]]), ns = { class: "detail-row" }, ls = /* @__PURE__ */ G({
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
    return (r, s) => (o(), a("div", ns, [
      c(ht, { "min-width": t.labelMinWidth }, {
        default: n(() => [
          u(i(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), w(pt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: n(() => [
          u(i(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : le(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), se = /* @__PURE__ */ j(ls, [["__scopeId", "data-v-ef15664a"]]), is = { class: "modal-header" }, rs = { class: "modal-body" }, ds = { class: "status-section" }, cs = {
  key: 0,
  class: "status-section"
}, us = {
  key: 0,
  class: "workflow-group"
}, ms = { class: "workflow-group-header" }, vs = { class: "workflow-group-title" }, fs = { class: "workflow-list" }, gs = { class: "workflow-name" }, hs = { class: "workflow-issue" }, ps = {
  key: 1,
  class: "workflow-group"
}, ys = { class: "workflow-group-header" }, ws = { class: "workflow-group-title" }, ks = { class: "workflow-list" }, bs = { class: "workflow-name" }, _s = { class: "workflow-issue" }, $s = {
  key: 2,
  class: "workflow-group"
}, Cs = { class: "workflow-group-header" }, xs = { class: "workflow-group-title" }, Ss = { class: "workflow-list" }, Is = { class: "workflow-name" }, Es = {
  key: 3,
  class: "workflow-group"
}, zs = { class: "workflow-group-header" }, Ms = { class: "workflow-group-title" }, Ls = { class: "workflow-list" }, Rs = { class: "workflow-name" }, Ns = {
  key: 4,
  class: "workflow-group"
}, Us = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Ts = { class: "workflow-list" }, Ds = { class: "workflow-name" }, Os = {
  key: 5,
  class: "workflow-group"
}, Vs = { class: "workflow-group-title" }, As = { class: "expand-icon" }, Ws = {
  key: 0,
  class: "workflow-list"
}, Fs = { class: "workflow-name" }, Ps = {
  key: 1,
  class: "status-section"
}, Hs = {
  key: 0,
  class: "change-group"
}, Gs = { class: "change-group-header" }, js = { class: "change-group-title" }, Ks = { class: "change-list" }, qs = { class: "node-name" }, Ys = {
  key: 0,
  class: "dev-badge"
}, Xs = {
  key: 1,
  class: "change-group"
}, Zs = { class: "change-group-header" }, Js = { class: "change-group-title" }, Qs = { class: "change-list" }, ea = { class: "node-name" }, ta = {
  key: 0,
  class: "dev-badge"
}, oa = {
  key: 2,
  class: "change-group"
}, sa = { class: "change-list" }, aa = { class: "change-item" }, na = { class: "node-name" }, la = {
  key: 3,
  class: "change-group"
}, ia = {
  key: 2,
  class: "status-section"
}, ra = {
  key: 0,
  class: "drift-item"
}, da = { class: "drift-list" }, ca = {
  key: 0,
  class: "drift-list-more"
}, ua = {
  key: 1,
  class: "drift-item"
}, ma = { class: "drift-list" }, va = {
  key: 0,
  class: "drift-list-more"
}, fa = {
  key: 2,
  class: "drift-item"
}, ga = {
  key: 3,
  class: "drift-item"
}, ha = {
  key: 3,
  class: "status-section"
}, pa = { class: "info-box" }, ya = { class: "drift-list" }, wa = {
  key: 0,
  class: "drift-list-more"
}, ka = {
  key: 4,
  class: "status-section"
}, ba = { class: "warning-box" }, _a = {
  key: 5,
  class: "empty-state-inline"
}, $a = { class: "modal-actions" }, Ca = /* @__PURE__ */ G({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close"],
  setup(t) {
    const r = t, s = C(!1);
    be(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), zt(() => r.show, (_, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", _);
    }, { immediate: !0 });
    const l = B(() => {
      var _, k, x;
      return ((x = (k = (_ = r.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : x.filter(
        ($) => $.status === "broken" && $.sync_state === "synced"
      )) || [];
    }), h = B(() => {
      var _, k, x;
      return ((x = (k = (_ = r.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : x.filter(
        ($) => $.status === "broken" && $.sync_state !== "synced"
      )) || [];
    }), p = B(() => {
      var _, k, x;
      return ((x = (k = (_ = r.status) == null ? void 0 : _.workflows) == null ? void 0 : k.synced) == null ? void 0 : x.filter(($) => {
        var E, T, P;
        const I = (P = (T = (E = r.status) == null ? void 0 : E.workflows) == null ? void 0 : T.analyzed) == null ? void 0 : P.find((N) => N.name === $);
        return !I || I.status !== "broken";
      })) || [];
    }), v = B(() => {
      var _, k, x, $, I;
      return (_ = r.status) != null && _.workflows ? (((k = r.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((x = r.status.workflows.modified) == null ? void 0 : x.length) ?? 0) > 0 || ((($ = r.status.workflows.deleted) == null ? void 0 : $.length) ?? 0) > 0 || (((I = r.status.workflows.synced) == null ? void 0 : I.length) ?? 0) > 0 : !1;
    }), g = B(() => {
      var k, x, $;
      const _ = (k = r.status) == null ? void 0 : k.git_changes;
      return _ ? (((x = _.nodes_added) == null ? void 0 : x.length) ?? 0) > 0 || ((($ = _.nodes_removed) == null ? void 0 : $.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), m = B(() => {
      var _, k, x, $, I, E;
      return !v.value && !g.value && ((k = (_ = r.status) == null ? void 0 : _.comparison) == null ? void 0 : k.is_synced) && (((x = r.status) == null ? void 0 : x.missing_models_count) ?? 0) === 0 && (((E = (I = ($ = r.status) == null ? void 0 : $.comparison) == null ? void 0 : I.disabled_nodes) == null ? void 0 : E.length) ?? 0) === 0;
    }), f = B(() => {
      var k, x;
      const _ = (x = (k = r.status) == null ? void 0 : k.git_changes) == null ? void 0 : x.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function y(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function b(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, k) => {
      var x, $, I, E, T, P, N, O, L, D, z, R, U, X, F, M, J, q, _e, ve, K, ye;
      return o(), w(Ne, { to: "body" }, [
        t.show ? (o(), a("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[4] || (k[4] = (te) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[3] || (k[3] = we(() => {
            }, ["stop"]))
          }, [
            e("div", is, [
              k[5] || (k[5] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (te) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", rs, [
              e("div", ds, [
                c(Ee, { level: "4" }, {
                  default: n(() => [...k[6] || (k[6] = [
                    u("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                c(se, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              v.value ? (o(), a("div", cs, [
                c(Ee, { level: "4" }, {
                  default: n(() => [...k[7] || (k[7] = [
                    u("WORKFLOWS", -1)
                  ])]),
                  _: 1
                }),
                l.value.length ? (o(), a("div", us, [
                  e("div", ms, [
                    k[8] || (k[8] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", vs, "BROKEN (COMMITTED) (" + i(l.value.length) + ")", 1)
                  ]),
                  e("div", fs, [
                    (o(!0), a(H, null, Q(l.value, (te) => (o(), a("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", gs, i(te.name), 1),
                      e("span", hs, i(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                h.value.length ? (o(), a("div", ps, [
                  e("div", ys, [
                    k[9] || (k[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ws, "BROKEN (UNCOMMITTED) (" + i(h.value.length) + ")", 1)
                  ]),
                  e("div", ks, [
                    (o(!0), a(H, null, Q(h.value, (te) => (o(), a("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", bs, i(te.name), 1),
                      e("span", _s, i(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                ($ = (x = t.status.workflows) == null ? void 0 : x.new) != null && $.length ? (o(), a("div", $s, [
                  e("div", Cs, [
                    k[10] || (k[10] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", xs, "NEW (" + i(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ss, [
                    (o(!0), a(H, null, Q(t.status.workflows.new, (te) => (o(), a("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Is, i(te), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (E = (I = t.status.workflows) == null ? void 0 : I.modified) != null && E.length ? (o(), a("div", Es, [
                  e("div", zs, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ms, "MODIFIED (" + i(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ls, [
                    (o(!0), a(H, null, Q(t.status.workflows.modified, (te) => (o(), a("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Rs, i(te), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (P = (T = t.status.workflows) == null ? void 0 : T.deleted) != null && P.length ? (o(), a("div", Ns, [
                  e("div", Us, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Bs, "DELETED (" + i(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ts, [
                    (o(!0), a(H, null, Q(t.status.workflows.deleted, (te) => (o(), a("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Ds, i(te), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                p.value.length ? (o(), a("div", Os, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[1] || (k[1] = (te) => s.value = !s.value)
                  }, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Vs, "SYNCED (" + i(p.value.length) + ")", 1),
                    e("span", As, i(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), a("div", Ws, [
                    (o(!0), a(H, null, Q(p.value, (te) => (o(), a("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Fs, i(te), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              g.value ? (o(), a("div", Ps, [
                c(Ee, { level: "4" }, {
                  default: n(() => [...k[14] || (k[14] = [
                    u("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (O = (N = t.status.git_changes) == null ? void 0 : N.nodes_added) != null && O.length ? (o(), a("div", Hs, [
                  e("div", Gs, [
                    k[15] || (k[15] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", js, "NODES ADDED (" + i(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Ks, [
                    (o(!0), a(H, null, Q(t.status.git_changes.nodes_added, (te) => (o(), a("div", {
                      key: y(te),
                      class: "change-item"
                    }, [
                      e("span", qs, i(y(te)), 1),
                      b(te) ? (o(), a("span", Ys, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (D = (L = t.status.git_changes) == null ? void 0 : L.nodes_removed) != null && D.length ? (o(), a("div", Xs, [
                  e("div", Zs, [
                    k[16] || (k[16] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Js, "NODES REMOVED (" + i(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Qs, [
                    (o(!0), a(H, null, Q(t.status.git_changes.nodes_removed, (te) => (o(), a("div", {
                      key: y(te),
                      class: "change-item"
                    }, [
                      e("span", ea, i(y(te)), 1),
                      b(te) ? (o(), a("span", ta, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (z = t.status.git_changes) != null && z.workflow_changes ? (o(), a("div", oa, [
                  k[17] || (k[17] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", sa, [
                    e("div", aa, [
                      e("span", na, i(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (R = t.status.git_changes) != null && R.has_other_changes ? (o(), a("div", la, [...k[18] || (k[18] = [
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
              (U = t.status.comparison) != null && U.is_synced ? d("", !0) : (o(), a("div", ia, [
                c(Ee, { level: "4" }, {
                  default: n(() => [...k[19] || (k[19] = [
                    u("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                k[20] || (k[20] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (F = (X = t.status.comparison) == null ? void 0 : X.missing_nodes) != null && F.length ? (o(), a("div", ra, [
                  c(se, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", da, [
                    (o(!0), a(H, null, Q(t.status.comparison.missing_nodes.slice(0, 10), (te) => (o(), a("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + i(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), a("div", ca, " ... and " + i(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (J = (M = t.status.comparison) == null ? void 0 : M.extra_nodes) != null && J.length ? (o(), a("div", ua, [
                  c(se, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", ma, [
                    (o(!0), a(H, null, Q(t.status.comparison.extra_nodes.slice(0, 10), (te) => (o(), a("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + i(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), a("div", va, " ... and " + i(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (_e = (q = t.status.comparison) == null ? void 0 : q.version_mismatches) != null && _e.length ? (o(), a("div", fa, [
                  c(se, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (ve = t.status.comparison) != null && ve.packages_in_sync ? d("", !0) : (o(), a("div", ga, [
                  c(se, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ye = (K = t.status.comparison) == null ? void 0 : K.disabled_nodes) != null && ye.length ? (o(), a("div", ha, [
                c(Ee, { level: "4" }, {
                  default: n(() => [...k[21] || (k[21] = [
                    u("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", pa, [
                  k[22] || (k[22] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, i(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", ya, [
                  (o(!0), a(H, null, Q(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (o(), a("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + i(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), a("div", wa, " ... and " + i(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), a("div", ka, [
                c(Ee, { level: "4" }, {
                  default: n(() => [...k[23] || (k[23] = [
                    u("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", ba, [
                  k[24] || (k[24] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, i(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[25] || (k[25] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              m.value ? (o(), a("div", _a, [...k[26] || (k[26] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", $a, [
              c(A, {
                variant: "secondary",
                onClick: k[2] || (k[2] = (te) => _.$emit("close"))
              }, {
                default: n(() => [...k[27] || (k[27] = [
                  u(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Ct = /* @__PURE__ */ j(Ca, [["__scopeId", "data-v-c2264f66"]]), xa = { class: "health-section-header" }, Sa = { style: { "margin-top": "var(--cg-space-1)" } }, Ia = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Ea = /* @__PURE__ */ G({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: r }) {
    const s = t, l = C(!1), h = C(!1);
    be(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Ct);
    });
    function p() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    function v() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", l.value), l.value = !0, console.log("showDetailModal after:", l.value);
    }
    const g = B(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), m = B(() => {
      const E = s.status.git_changes;
      return E.nodes_added.length > 0 || E.nodes_removed.length > 0 || E.workflow_changes || E.has_other_changes;
    }), f = B(() => g.value || m.value), y = B(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), b = B(() => s.status.git_changes.has_other_changes), _ = B(() => {
      var E;
      return ((E = s.status.workflows.analyzed) == null ? void 0 : E.filter(
        (T) => T.status === "broken" && T.sync_state === "synced"
      )) || [];
    }), k = B(() => {
      var E;
      return ((E = s.status.workflows.analyzed) == null ? void 0 : E.filter(
        (T) => T.status === "broken" && T.sync_state !== "synced"
      )) || [];
    }), x = B(() => _.value.length > 0 || k.value.length > 0), $ = B(() => x.value || s.status.missing_models_count > 0 || f.value || !s.status.comparison.is_synced), I = B(() => {
      const E = [];
      return s.status.workflows.new.length > 0 && E.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && E.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && E.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && E.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && E.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${E.length > 0 ? E.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (E, T) => (o(), a(H, null, [
      c($e, null, {
        header: n(() => [
          c(Ce, { title: "STATUS" })
        ]),
        content: n(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[0] || (T[0] = (P) => h.value = !0),
            onMouseleave: T[1] || (T[1] = (P) => h.value = !1)
          }, [
            e("div", xa, [
              c(Ee, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: n(() => [...T[11] || (T[11] = [
                  u(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              c(Xt, { name: "fade" }, {
                default: n(() => [
                  h.value ? (o(), w(A, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: n(() => [...T[12] || (T[12] = [
                      u(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            c(So, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: n(() => [
                t.status.workflows.new.length ? (o(), w(Be, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (o(), w(Be, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (o(), w(Be, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                c(Be, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: g.value
                }, null, 8, ["count", "separator"])
              ]),
              right: n(() => [
                t.status.git_changes.nodes_added.length ? (o(), w(Be, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), w(Be, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (o(), w(Be, {
                  key: 2,
                  icon: "●",
                  count: y.value,
                  label: y.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                b.value ? (o(), w(Be, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                m.value ? d("", !0) : (o(), w(Be, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", Sa, [
            c(os, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: n(() => [
                c(A, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[2] || (T[2] = (P) => E.$emit("switch-branch"))
                }, {
                  default: n(() => [...T[13] || (T[13] = [
                    u(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), w(Ke, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: n(() => [
              c(A, {
                variant: "primary",
                size: "sm",
                onClick: T[3] || (T[3] = (P) => E.$emit("create-branch"))
              }, {
                default: n(() => [...T[14] || (T[14] = [
                  u(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          $.value ? (o(), a("div", Ia, [
            c(Ee, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: n(() => [...T[15] || (T[15] = [
                u(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            _.value.length > 0 ? (o(), w(Ke, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${_.value.length} committed workflow${_.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: _.value.map((P) => `${P.name} — ${P.issue_summary}`)
            }, {
              actions: n(() => [
                c(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[4] || (T[4] = (P) => E.$emit("view-workflows"))
                }, {
                  default: n(() => [...T[16] || (T[16] = [
                    u(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : d("", !0),
            k.value.length > 0 ? (o(), w(Ke, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: k.value.map((P) => `${P.name} — ${P.issue_summary}`)
            }, {
              actions: n(() => [
                c(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[5] || (T[5] = (P) => E.$emit("view-workflows"))
                }, {
                  default: n(() => [...T[17] || (T[17] = [
                    u(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : d("", !0),
            t.status.missing_models_count > 0 && !x.value ? (o(), w(Ke, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: n(() => [
                c(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (P) => E.$emit("view-workflows"))
                }, {
                  default: n(() => [...T[18] || (T[18] = [
                    u(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : d("", !0),
            f.value ? (o(), w(Ke, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: I.value
            }, {
              actions: n(() => [
                c(A, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: n(() => [...T[19] || (T[19] = [
                    u(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                c(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (P) => E.$emit("commit-changes"))
                }, {
                  default: n(() => [...T[20] || (T[20] = [
                    u(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : d("", !0),
            t.status.comparison.is_synced ? d("", !0) : (o(), w(Ke, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: n(() => [
                c(A, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[8] || (T[8] = (P) => E.$emit("view-debug"))
                }, {
                  default: n(() => [...T[21] || (T[21] = [
                    u(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                c(A, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[9] || (T[9] = (P) => E.$emit("sync-environment"))
                }, {
                  default: n(() => [...T[22] || (T[22] = [
                    u(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : d("", !0),
          !$.value && !m.value ? (o(), w(Ue, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : d("", !0)
        ]),
        _: 1
      }),
      c(Ct, {
        show: l.value,
        status: t.status,
        onClose: T[10] || (T[10] = (P) => l.value = !1)
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), za = /* @__PURE__ */ j(Ea, [["__scopeId", "data-v-aabebf39"]]), Ma = ["type", "value", "placeholder", "disabled"], La = /* @__PURE__ */ G({
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
    const l = t, h = s, p = C(null);
    function v(g) {
      const m = g.target.value;
      h("update:modelValue", m);
    }
    return be(() => {
      l.autoFocus && p.value && p.value.focus();
    }), r({
      focus: () => {
        var g;
        return (g = p.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = p.value) == null ? void 0 : g.blur();
      }
    }), (g, m) => (o(), a("input", {
      ref_key: "inputRef",
      ref: p,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ee(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: v,
      onKeyup: [
        m[0] || (m[0] = De((f) => g.$emit("enter"), ["enter"])),
        m[1] || (m[1] = De((f) => g.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (f) => g.$emit("focus")),
      onBlur: m[3] || (m[3] = (f) => g.$emit("blur"))
    }, null, 42, Ma));
  }
}), nt = /* @__PURE__ */ j(La, [["__scopeId", "data-v-0380d08f"]]), Ra = { class: "branch-create-form" }, Na = { class: "form-actions" }, Ua = /* @__PURE__ */ G({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const s = r, l = C(""), h = B(() => {
      const g = l.value.trim();
      return g.length > 0 && !g.startsWith("-") && !g.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(g);
    });
    function p() {
      h.value && (s("create", l.value.trim()), l.value = "");
    }
    function v() {
      l.value = "", s("cancel");
    }
    return (g, m) => (o(), a("div", Ra, [
      c(nt, {
        modelValue: l.value,
        "onUpdate:modelValue": m[0] || (m[0] = (f) => l.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: v
      }, null, 8, ["modelValue"]),
      e("div", Na, [
        c(A, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: p
        }, {
          default: n(() => [...m[1] || (m[1] = [
            u(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        c(A, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: n(() => [...m[2] || (m[2] = [
            u(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ba = /* @__PURE__ */ j(Ua, [["__scopeId", "data-v-7c500394"]]), Ta = { class: "branch-list-item__indicator" }, Da = { class: "branch-list-item__name" }, Oa = {
  key: 0,
  class: "branch-list-item__actions"
}, Va = {
  key: 0,
  class: "branch-list-item__current-label"
}, Aa = /* @__PURE__ */ G({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (r, s) => (o(), a("div", {
      class: ee(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (l) => t.clickable && r.$emit("click"))
    }, [
      e("span", Ta, i(t.isCurrent ? "●" : "○"), 1),
      e("span", Da, i(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (o(), a("div", Oa, [
        le(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), a("span", Va, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Wa = /* @__PURE__ */ j(Aa, [["__scopeId", "data-v-c6581a24"]]), Fa = {
  key: 2,
  class: "branch-list"
}, Pa = /* @__PURE__ */ G({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: r }) {
    const s = r, l = C(!1);
    function h(v) {
      s("create", v), p();
    }
    function p() {
      l.value = !1;
    }
    return (v, g) => (o(), w($e, null, {
      header: n(() => [
        c(Ce, { title: "BRANCHES" }, {
          actions: n(() => [
            c(A, {
              variant: "ghost",
              size: "sm",
              onClick: g[0] || (g[0] = (m) => l.value = !0),
              title: "Create new branch"
            }, {
              default: n(() => [...g[1] || (g[1] = [
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
      content: n(() => [
        l.value ? (o(), w(Ba, {
          key: 0,
          onCreate: h,
          onCancel: p
        })) : d("", !0),
        t.branches.length === 0 ? (o(), w(Ue, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), a("div", Fa, [
          (o(!0), a(H, null, Q(t.branches, (m) => (o(), w(Wa, {
            key: m.name,
            "branch-name": m.name,
            "is-current": m.is_current
          }, {
            actions: n(() => [
              m.is_current ? d("", !0) : (o(), w(A, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (f) => v.$emit("switch", m.name)
              }, {
                default: n(() => [...g[2] || (g[2] = [
                  u(" Switch ", -1)
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
}), Ha = /* @__PURE__ */ j(Pa, [["__scopeId", "data-v-763d6ec4"]]), Ga = { class: "commit-list" }, ja = /* @__PURE__ */ G({
  __name: "CommitList",
  setup(t) {
    return (r, s) => (o(), a("div", Ga, [
      le(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ka = /* @__PURE__ */ j(ja, [["__scopeId", "data-v-8c5ee761"]]), qa = { class: "commit-hash" }, Ya = /* @__PURE__ */ G({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, s = B(() => r.hash.slice(0, r.length));
    return (l, h) => (o(), a("span", qa, i(s.value), 1));
  }
}), Bt = /* @__PURE__ */ j(Ya, [["__scopeId", "data-v-7c333cc6"]]), Xa = { class: "commit-message" }, Za = { class: "commit-date" }, Ja = /* @__PURE__ */ G({
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
    function h() {
      s.clickable && l("click");
    }
    return (p, v) => (o(), a("div", {
      class: ee(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      c(Bt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Xa, i(t.message), 1),
      e("span", Za, i(t.relativeDate), 1),
      p.$slots.actions ? (o(), a("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = we(() => {
        }, ["stop"]))
      }, [
        le(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Qa = /* @__PURE__ */ j(Ja, [["__scopeId", "data-v-dd7c621b"]]), en = /* @__PURE__ */ G({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, s) => (o(), w($e, null, {
      header: n(() => [
        c(Ce, { title: "HISTORY" })
      ]),
      content: n(() => [
        t.commits.length === 0 ? (o(), w(Ue, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), w(Ka, { key: 1 }, {
          default: n(() => [
            (o(!0), a(H, null, Q(t.commits, (l) => (o(), w(Qa, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (h) => r.$emit("select", l)
            }, {
              actions: n(() => [
                c(A, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (h) => r.$emit("checkout", l),
                  title: "Checkout this commit"
                }, {
                  default: n(() => [...s[0] || (s[0] = [
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
}), tn = /* @__PURE__ */ j(en, [["__scopeId", "data-v-981c3c64"]]), xt = [
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
  ...Array(12).fill(null).map((t, r) => ({
    name: `synced-workflow-${r + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + r,
    model_count: 1 + r % 3,
    sync_state: "synced"
  }))
], on = {
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
}, Tt = [
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
], sn = [
  ...Tt,
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
], it = [
  {
    name: "ComfyUI-Manager",
    installed: !0,
    registry_id: "comfyui-manager",
    repository: "https://github.com/ltdrdata/ComfyUI-Manager",
    version: "2.8.5",
    source: "registry",
    download_url: null,
    description: "ComfyUI extension for managing custom nodes",
    used_in_workflows: ["flux-dev-img2img.json", "sdxl-lightning.json", "flux-schnell.json"]
  },
  {
    name: "comfyui_flux",
    installed: !0,
    registry_id: "comfyui_flux",
    repository: "https://github.com/black-forest-labs/flux",
    version: "1.2.0",
    source: "registry",
    download_url: null,
    description: "FLUX.1 model support for ComfyUI",
    used_in_workflows: ["flux-dev-img2img.json", "flux-schnell.json"]
  },
  {
    name: "comfyui-controlnet-aux",
    installed: !0,
    registry_id: "comfyui-controlnet-aux",
    repository: "https://github.com/Fannovel16/comfyui_controlnet_aux",
    version: "1.0.3",
    source: "registry",
    download_url: null,
    description: "ControlNet auxiliary preprocessors",
    used_in_workflows: ["controlnet-pose.json"]
  },
  {
    name: "rgthree-comfy",
    installed: !1,
    registry_id: "rgthree-comfy",
    repository: "https://github.com/rgthree/rgthree-comfy",
    version: null,
    source: "registry",
    download_url: "https://github.com/rgthree/rgthree-comfy/archive/refs/heads/main.zip",
    description: "Power user nodes for ComfyUI workflows",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-image-saver",
    installed: !1,
    registry_id: "comfyui-image-saver",
    repository: "https://github.com/girish946/ComfyUI-Image-Saver",
    version: null,
    source: "registry",
    download_url: "https://github.com/girish946/ComfyUI-Image-Saver/archive/refs/heads/main.zip",
    description: "Advanced image saving options",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-impact-pack",
    installed: !0,
    registry_id: "comfyui-impact-pack",
    repository: "https://github.com/ltdrdata/ComfyUI-Impact-Pack",
    version: "4.12.1",
    source: "registry",
    download_url: null,
    description: "Custom nodes for ComfyUI impact pack",
    used_in_workflows: ["sd15-upscale.json"]
  },
  {
    name: "ComfyUI-KJNodes",
    installed: !0,
    registry_id: "comfyui-kjnodes",
    repository: "https://github.com/kijai/ComfyUI-KJNodes",
    version: "1.1.2",
    source: "registry",
    download_url: null,
    description: "KJ utility nodes collection",
    used_in_workflows: []
  },
  {
    name: "custom-dev-nodes",
    installed: !0,
    registry_id: void 0,
    repository: void 0,
    version: "0.1.0-dev",
    source: "development",
    download_url: null,
    description: "Local development nodes",
    used_in_workflows: []
  },
  {
    name: "comfyui-easy-use",
    installed: !1,
    registry_id: "comfyui-easy-use",
    repository: "https://github.com/yolain/ComfyUI-Easy-Use",
    version: null,
    source: "registry",
    download_url: "https://github.com/yolain/ComfyUI-Easy-Use/archive/refs/heads/main.zip",
    description: "Simplified workflow nodes",
    used_in_workflows: ["sd15-upscale.json"]
  }
], an = [
  {
    hash: "e719c9c",
    message: "refactor: Improve UI consistency and fix display issues",
    author: "Alex Katz",
    date: "2024-01-15T10:30:00Z",
    date_relative: "5 days ago"
  },
  {
    hash: "781a023",
    message: "refactor: Remove multi-theme system, commit to Phosphor Terminal aesthetic",
    author: "Alex Katz",
    date: "2024-01-14T15:20:00Z",
    date_relative: "6 days ago"
  },
  {
    hash: "19f7898",
    message: "Merge branch 'design/phosphor' into feature/comfygit-ui",
    author: "Alex Katz",
    date: "2024-01-13T09:15:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "426fe3c",
    message: "Merge branch 'feature/comfygit-ui' into main",
    author: "Alex Katz",
    date: "2024-01-12T14:45:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "8c21deb",
    message: "Add initial agpl 3 license",
    author: "Alex Katz",
    date: "2024-01-10T11:00:00Z",
    date_relative: "2 weeks ago"
  }
], rt = [
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.core.environment",
    level: "INFO",
    func: "sync",
    line: "306",
    message: "Restored workflows from .cec/"
  },
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.managers.workflow_manager",
    level: "INFO",
    func: "restore_from_cec",
    line: "554",
    message: "Restored workflow 'default' to ComfyUI"
  },
  {
    timestamp: "2025-11-23 13:07:40,286",
    name: "comfygit_core.core.environment",
    level: "DEBUG",
    func: "sync",
    line: "399",
    message: "User content symlinks configured"
  },
  {
    timestamp: "2025-11-23 13:07:42,130",
    name: "comfygit_core.managers.workflow_manager",
    level: "DEBUG",
    func: "resolve_workflow",
    line: "884",
    message: "Resolved node: ResolvedNodePackage(package='comfyui-basic-math', node='FloatInput', match=exact, confidence=1.00, 3 version(s), rank=1)"
  },
  {
    timestamp: "2025-11-23 13:07:42,157",
    name: "comfygit.command",
    level: "INFO",
    func: "log_command",
    line: "180",
    message: "Command 'env status' completed successfully"
  }
], ce = {
  // Environment Management
  getEnvironments: async () => (await de(300), [
    {
      name: "production",
      is_current: !0,
      path: "~/comfygit/environments/production",
      workflow_count: 18,
      node_count: 45,
      model_count: 3,
      current_branch: "main",
      created_at: "2024-01-01T00:00:00Z",
      last_used: (/* @__PURE__ */ new Date()).toISOString(),
      last_commit: "e719c9c",
      last_commit_date: "2024-01-15T10:30:00Z"
    },
    {
      name: "testing",
      is_current: !1,
      path: "~/comfygit/environments/testing",
      workflow_count: 12,
      node_count: 32,
      model_count: 2,
      current_branch: "develop",
      created_at: "2024-01-05T00:00:00Z",
      last_used: new Date(Date.now() - 864e5 * 2).toISOString(),
      // 2 days ago
      last_commit: "426fe3c",
      last_commit_date: "2024-01-12T14:45:00Z"
    },
    {
      name: "experimental",
      is_current: !1,
      path: "~/comfygit/environments/experimental",
      workflow_count: 5,
      node_count: 18,
      model_count: 1,
      current_branch: "feature/new-nodes",
      created_at: "2024-01-10T00:00:00Z",
      last_used: new Date(Date.now() - 864e5).toISOString(),
      // 1 day ago
      last_commit: "781a023",
      last_commit_date: "2024-01-14T15:20:00Z"
    }
  ]),
  switchEnvironment: async (t) => {
    await de(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, s) => {
    await de(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (t) => {
    await de(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await de(400), xt),
  getWorkflowDetails: async (t) => (await de(300), on[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await de(800), {
    workflow_name: t,
    // Nodes resolved with confidence scores
    nodes_resolved: [
      {
        node_type: "ComfyUI-Flux",
        match_type: "exact",
        package_id: "comfyui_flux",
        match_confidence: 1,
        is_optional: !1,
        rank: 5,
        // Registry popularity
        versions: ["1.2.0", "1.1.0", "1.0.0"]
      }
    ],
    // Nodes that need installation
    nodes_unresolved: [
      {
        node_type: "RgthreeNodeSet",
        possible_matches: [
          {
            package_id: "rgthree-comfy",
            match_type: "fuzzy",
            match_confidence: 0.85,
            rank: 12
          }
        ]
      },
      {
        node_type: "ImageSaver",
        possible_matches: [
          {
            package_id: "comfyui-image-saver",
            match_type: "type_only",
            match_confidence: 0.7,
            rank: 45
          }
        ]
      }
    ],
    nodes_ambiguous: [],
    // Multiple equally-matched candidates
    // Models resolved
    models_resolved: [
      {
        workflow: t,
        filename: "flux1-dev-fp8.safetensors",
        resolved_model: {
          hash: "a11e2e7b",
          sha256_hash: "a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      },
      {
        workflow: t,
        filename: "clip_l.safetensors",
        resolved_model: {
          hash: "3e9f12a7",
          sha256_hash: "3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      }
    ],
    // Models that need downloading
    models_unresolved: [
      {
        workflow: t,
        filename: "flux_vae.safetensors",
        node_type: "VAELoader",
        node_id: "10",
        expected_category: "vae"
      }
    ],
    models_ambiguous: [],
    // Multiple models match same name
    // Download intents (models queued for download)
    download_results: [
      {
        model: "flux_vae.safetensors",
        status: "pending",
        source_url: null,
        // No source configured
        can_download: !1,
        estimated_size_mb: 335
      }
    ],
    // Summary fields
    has_issues: !0,
    // Has unresolved nodes and models
    has_download_intents: !0,
    summary: "Missing: 2 nodes, 1 model",
    // Installation plan preview
    nodes_to_install: ["rgthree-comfy", "comfyui-image-saver"],
    models_to_download: ["flux_vae.safetensors"],
    estimated_size_mb: 335,
    estimated_time_seconds: 120
  }),
  installWorkflowDeps: async (t, r, s) => {
    await de(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${s}`);
  },
  setModelImportance: async (t, r, s) => {
    await de(200), console.log(`[MOCK] Setting ${r} importance to ${s} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await de(350), Tt),
  getWorkspaceModels: async () => (await de(400), sn),
  updateModelSource: async (t, r) => {
    await de(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await de(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await de(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await de(350);
    const t = it.filter((s) => s.installed), r = it.filter((s) => !s.installed);
    return {
      nodes: it,
      total_count: it.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await de(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await de(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await de(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await de(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await de(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await de(250), (t ? rt.filter((l) => l.level === t) : rt).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await de(300);
    const s = [...rt, ...rt.map((h) => ({
      ...h,
      name: "comfygit.workspace"
    }))];
    return (t ? s.filter((h) => h.level === t) : s).slice(0, r || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   *
   * To test detached HEAD warning:
   * - Set branch: null
   * - Set is_detached_head: true
   */
  getStatus: async () => (await de(400), {
    environment: "production",
    branch: "main",
    // Set to null to test detached HEAD
    is_detached_head: !1,
    // Set to true to test detached HEAD warning
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: xt.filter((t) => t.status === "synced").map((t) => t.name),
      total: 18,
      analyzed: [
        {
          name: "img2img-basic.json",
          sync_state: "new",
          status: "new",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 8,
          model_count: 2
        },
        {
          name: "controlnet-pose.json",
          sync_state: "new",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 1,
          unresolved_nodes_count: 1,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "1 unresolved node",
          node_count: 12,
          model_count: 3
        },
        {
          name: "flux-schnell.json",
          sync_state: "modified",
          status: "modified",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 15,
          model_count: 4
        },
        {
          name: "sdxl-lightning.json",
          sync_state: "synced",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 2,
          unresolved_models_count: 1,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "2 unresolved nodes, 1 missing model",
          node_count: 20,
          model_count: 5
        },
        {
          name: "flux-dev-img2img.json",
          sync_state: "synced",
          status: "synced",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 18,
          model_count: 3
        }
      ]
    },
    git_changes: {
      nodes_added: [],
      nodes_removed: [],
      workflow_changes: !1,
      has_other_changes: !1
    },
    comparison: {
      is_synced: !1,
      missing_nodes: ["rgthree-comfy", "comfyui-image-saver"],
      extra_nodes: []
    },
    missing_models_count: 1
  }),
  getCommitHistory: async (t = 10) => (await de(300), an.slice(0, t)),
  getBranches: async () => (await de(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  // Git Remotes Management
  getRemotes: async () => (await de(300), {
    remotes: [
      {
        name: "origin",
        fetch_url: "https://github.com/comfyhub/comfygit-demo.git",
        push_url: "https://github.com/comfyhub/comfygit-demo.git",
        is_default: !0
      },
      {
        name: "upstream",
        fetch_url: "https://github.com/comfyhub/comfygit.git",
        push_url: "https://github.com/comfyhub/comfygit.git",
        is_default: !1
      }
    ],
    current_branch_tracking: {
      remote: "origin",
      branch: "main"
    }
  }),
  addRemote: async (t, r) => {
    await de(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await de(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, s) => {
    await de(400), console.log(`[MOCK] Updating remote ${t}: ${r}${s ? ` (push: ${s})` : ""}`);
  },
  fetchRemote: async (t) => {
    await de(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await de(300), {
    remote: t,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  }),
  // =============================================================================
  // NEW: Interactive Workflow Resolution Endpoints
  // =============================================================================
  /**
   * Analyze Workflow - Returns full resolution analysis
   * POST /v2/comfygit/workflow/{name}/analyze
   *
   * Test scenarios by using different workflow names:
   * - "test-unresolved-nodes.json" - Only unresolved nodes
   * - "test-unresolved-models.json" - Only unresolved models
   * - "test-ambiguous-nodes.json" - Multiple node options to choose from
   * - "test-ambiguous-models.json" - Multiple model options to choose from
   * - "test-mixed-complex.json" - Complex scenario with all types
   * - "test-all-resolved.json" - Everything perfect, no user input needed
   * - Default: Returns a realistic mixed scenario
   */
  analyzeWorkflow: async (t) => (await de(600), {
    // Scenario 1: Only unresolved nodes (no matching packages found)
    "test-unresolved-nodes.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "CustomUpscaler", workflow: t, node_id: "node1" },
            reason: "not_found_in_registry"
          },
          {
            reference: { node_type: "MagicNode", workflow: t, node_id: "node2" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 2,
        nodes_ambiguous: 0,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 2: Only unresolved models (not found in index)
    "test-unresolved-models.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "LoadCheckpoint", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [
          {
            reference: {
              workflow: t,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "super_rare_model.safetensors"
            },
            reason: "not_found_in_index"
          },
          {
            reference: {
              workflow: t,
              node_id: "node4",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "custom_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: []
      },
      stats: {
        total_nodes: 1,
        total_models: 2,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 2,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 3: Ambiguous nodes (multiple matching packages)
    "test-ambiguous-nodes.json": {
      workflow: t,
      nodes: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: { node_type: "FluxLoader", workflow: t, node_id: "node1" },
            options: [
              {
                package: { package_id: "comfyui-flux-official", title: "FLUX Official Nodes" },
                match_confidence: 0.95,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-community-nodes", title: "FLUX Community Pack" },
                match_confidence: 0.9,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "advanced-flux-toolkit", title: "Advanced FLUX Toolkit" },
                match_confidence: 0.85,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          },
          {
            reference: { node_type: "ImageEnhancer", workflow: t, node_id: "node2" },
            options: [
              {
                package: { package_id: "comfyui-image-enhance", title: "Image Enhancement Suite" },
                match_confidence: 0.88,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "ultimate-image-toolkit", title: "Ultimate Image Toolkit" },
                match_confidence: 0.82,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "5", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "def456", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 2,
        total_models: 1,
        nodes_resolved: 0,
        nodes_unresolved: 0,
        nodes_ambiguous: 2,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 4: Ambiguous models (multiple files match the name)
    "test-ambiguous-models.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "CheckpointLoader", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: {
              workflow: t,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl_model.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "aaa111",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.95,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "bbb222",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.85,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_turbo.safetensors",
                  hash: "ccc333",
                  size: 67e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_turbo.safetensors"
                },
                match_confidence: 0.75,
                match_type: "fuzzy",
                has_download_source: !1
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 1,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 0,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 5: Complex mixed scenario (everything)
    "test-mixed-complex.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "UltraUpscaler", workflow: t, node_id: "node1" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: [
          {
            reference: { node_type: "FluxSampler", workflow: t, node_id: "node2" },
            options: [
              {
                package: { package_id: "flux-samplers-pro", title: "FLUX Samplers Pro" },
                match_confidence: 0.92,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-toolkit", title: "FLUX Toolkit" },
                match_confidence: 0.87,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [
          {
            reference: {
              workflow: t,
              node_id: "node5",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "flux_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: [
          {
            reference: {
              workflow: t,
              node_id: "node6",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "ddd444",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.9,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "eee555",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.8,
                match_type: "fuzzy",
                has_download_source: !0
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 3,
        total_models: 3,
        nodes_resolved: 1,
        nodes_unresolved: 1,
        nodes_ambiguous: 1,
        models_resolved: 1,
        models_unresolved: 1,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 6: All resolved (perfect workflow, no user input needed)
    "test-all-resolved.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "CLIPTextEncode", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "VAEDecode", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "1", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "fff666", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          },
          {
            reference: { workflow: t, node_id: "2", node_type: "VAELoader", widget_name: "vae", widget_value: "sdxl_vae.safetensors" },
            model: { filename: "sdxl_vae.safetensors", hash: "ggg777", size: 335e6, category: "vae", relative_path: "vae/sdxl_vae.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 2,
        nodes_resolved: 3,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 2,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !1
      }
    }
  }[t] || {
    workflow: t,
    nodes: {
      resolved: [
        {
          reference: { node_type: "KSampler", workflow: t },
          package: { package_id: "comfyui-core", title: "ComfyUI Core" },
          match_confidence: 1,
          match_type: "builtin",
          is_installed: !0
        }
      ],
      unresolved: [
        {
          reference: { node_type: "CustomNode1", workflow: t, node_id: "node1" },
          reason: "not_found_in_registry"
        }
      ],
      ambiguous: [
        {
          reference: { node_type: "FluxNode", workflow: t, node_id: "node2" },
          options: [
            {
              package: { package_id: "flux-package-a", title: "FLUX Package A" },
              match_confidence: 0.92,
              match_type: "fuzzy",
              is_installed: !1
            },
            {
              package: { package_id: "flux-package-b", title: "FLUX Package B" },
              match_confidence: 0.85,
              match_type: "fuzzy",
              is_installed: !1
            }
          ]
        }
      ]
    },
    models: {
      resolved: [],
      unresolved: [
        {
          reference: {
            workflow: t,
            node_id: "node3",
            node_type: "CheckpointLoader",
            widget_name: "model",
            widget_value: "test_model.safetensors"
          },
          reason: "not_found_in_index"
        }
      ],
      ambiguous: []
    },
    stats: {
      total_nodes: 3,
      total_models: 1,
      nodes_resolved: 1,
      nodes_unresolved: 1,
      nodes_ambiguous: 1,
      models_resolved: 0,
      models_unresolved: 1,
      models_ambiguous: 0,
      needs_user_input: !0
    }
  }),
  /**
   * Apply Resolution - Apply user choices and return installation plan
   * POST /v2/comfygit/workflow/{name}/apply-resolution
   */
  applyResolution: async (t, r, s) => {
    await de(800);
    const l = [], h = [];
    return r.forEach((p, v) => {
      p.action === "install" && p.package_id && l.push(p.package_id);
    }), s.forEach((p, v) => {
      p.action === "download" && p.url ? h.push({
        filename: v,
        url: p.url,
        size: 65e8,
        target_path: p.target_path || `models/${v}`
      }) : p.action === "select" && p.selected_model && console.log(`[MOCK] Selected existing model: ${p.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: l,
      models_to_download: h,
      estimated_time_seconds: l.length * 30 + h.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await de(400);
    const s = [
      {
        package_id: "comfyui-flux-official",
        match_confidence: 0.95,
        match_type: "fuzzy",
        description: "Official FLUX model support for ComfyUI with optimized samplers",
        repository: "https://github.com/black-forest-labs/flux-comfy",
        is_installed: !1
      },
      {
        package_id: "flux-advanced-toolkit",
        match_confidence: 0.88,
        match_type: "fuzzy",
        description: "Advanced FLUX tools including custom schedulers and samplers",
        repository: "https://github.com/community/flux-toolkit",
        is_installed: !1
      },
      {
        package_id: "comfyui-upscaler-pack",
        match_confidence: 0.82,
        match_type: "fuzzy",
        description: "Collection of upscaling nodes with various models",
        repository: "https://github.com/upscaler/comfyui-pack",
        is_installed: !1
      },
      {
        package_id: "ultimate-image-tools",
        match_confidence: 0.75,
        match_type: "partial",
        description: "Ultimate image processing toolkit for ComfyUI",
        repository: "https://github.com/tools/ultimate-image",
        is_installed: !0
      },
      {
        package_id: "comfyui-controlnet-aux",
        match_confidence: 0.7,
        match_type: "partial",
        description: "Auxiliary ControlNet preprocessors",
        repository: "https://github.com/fannovel16/controlnet-aux",
        is_installed: !0
      }
    ];
    return {
      results: s.slice(0, r),
      total: s.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (t, r = 10) => {
    await de(400);
    const s = [
      {
        filename: "flux1-dev-fp8.safetensors",
        hash: "abc123def456",
        size: 11725e6,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/flux1-dev-fp8.safetensors",
        match_confidence: 0.95
      },
      {
        filename: "sdxl_base_1.0.safetensors",
        hash: "def456abc789",
        size: 65e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_base_1.0.safetensors",
        match_confidence: 0.9
      },
      {
        filename: "sdxl_refiner_1.0.safetensors",
        hash: "ghi789jkl012",
        size: 61e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_refiner_1.0.safetensors",
        match_confidence: 0.85
      },
      {
        filename: "flux_vae.safetensors",
        hash: "mno345pqr678",
        size: 335e6,
        category: "vae",
        has_download_source: !1,
        relative_path: "vae/flux_vae.safetensors",
        match_confidence: 0.8
      },
      {
        filename: "controlnet_openpose.safetensors",
        hash: "stu901vwx234",
        size: 145e7,
        category: "controlnet",
        has_download_source: !0,
        relative_path: "controlnet/controlnet_openpose.safetensors",
        match_confidence: 0.75
      }
    ];
    return {
      results: s.slice(0, r),
      total: s.length
    };
  }
};
function de(t) {
  return new Promise((r) => setTimeout(r, t));
}
function dt() {
  return !0;
}
function xe() {
  const t = C(!1), r = C(null);
  async function s(Y, ne) {
    var Pe;
    if (!((Pe = window.app) != null && Pe.api))
      throw new Error("ComfyUI API not available");
    const he = await window.app.api.fetchApi(Y, ne);
    if (!he.ok) {
      const Ye = await he.json().catch(() => ({}));
      throw new Error(Ye.error || Ye.message || `Request failed: ${he.status}`);
    }
    return he.json();
  }
  async function l() {
    return ce.getStatus();
  }
  async function h(Y, ne = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: ne })
    });
  }
  async function p(Y = 10, ne = 0) {
    {
      const he = await ce.getCommitHistory(Y);
      return {
        commits: he,
        total: he.length,
        offset: ne
      };
    }
  }
  async function v(Y) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function g() {
    return ce.getBranches();
  }
  async function m(Y) {
    return s(`/v2/comfygit/commit/${Y}`);
  }
  async function f(Y, ne = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: ne })
    });
  }
  async function y(Y, ne = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: ne })
    });
  }
  async function b(Y, ne = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: ne })
    });
  }
  async function _() {
    return ce.getEnvironments();
  }
  async function k(Y) {
    return ce.switchEnvironment(Y);
  }
  async function x() {
    return null;
  }
  async function $(Y, ne, he) {
    return await ce.createEnvironment(Y, ne, he), { status: "success" };
  }
  async function I(Y) {
    return await ce.deleteEnvironment(Y), { status: "success" };
  }
  async function E() {
    return ce.getWorkflows();
  }
  async function T(Y) {
    return ce.getWorkflowDetails(Y);
  }
  async function P(Y) {
    return ce.resolveWorkflow(Y);
  }
  async function N(Y, ne, he) {
    return await ce.installWorkflowDeps(Y, ne, he), { status: "success" };
  }
  async function O(Y, ne, he) {
    return ce.setModelImportance(Y, ne, he);
  }
  async function L() {
    return ce.getEnvironmentModels();
  }
  async function D() {
    return ce.getWorkspaceModels();
  }
  async function z(Y, ne) {
    return ce.updateModelSource(Y, ne);
  }
  async function R(Y) {
    return ce.deleteModel(Y);
  }
  async function U(Y) {
    return await ce.downloadModel(Y), { status: "success" };
  }
  async function X() {
    return ce.getConfig();
  }
  async function F(Y) {
    return ce.updateConfig(Y);
  }
  async function M(Y, ne) {
    return ce.getEnvironmentLogs(Y, ne);
  }
  async function J(Y, ne) {
    return ce.getWorkspaceLogs(Y, ne);
  }
  async function q() {
    return ce.getNodes();
  }
  async function _e(Y) {
    return await ce.installNode(Y), { status: "success" };
  }
  async function ve(Y) {
    return await ce.updateNode(Y), { status: "success" };
  }
  async function K(Y) {
    return await ce.uninstallNode(Y), { status: "success" };
  }
  async function ye() {
    return ce.getRemotes();
  }
  async function te(Y, ne) {
    return await ce.addRemote(Y, ne), { status: "success", remote_name: Y };
  }
  async function Se(Y) {
    return await ce.removeRemote(Y), { status: "success", remote_name: Y };
  }
  async function ge(Y, ne, he) {
    return await ce.updateRemoteUrl(Y, ne, he), { status: "success", remote_name: Y };
  }
  async function ue(Y) {
    return await ce.fetchRemote(Y), { status: "success", remote_name: Y };
  }
  async function ze(Y) {
    return ce.getRemoteSyncStatus(Y);
  }
  async function et(Y = "skip", ne = !0) {
    return await new Promise((he) => setTimeout(he, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  return {
    isLoading: t,
    error: r,
    getStatus: l,
    commit: h,
    getHistory: p,
    exportEnv: v,
    // Git Operations
    getBranches: g,
    getCommitDetail: m,
    checkout: f,
    createBranch: y,
    switchBranch: b,
    // Environment Management
    getEnvironments: _,
    switchEnvironment: k,
    getSwitchProgress: x,
    createEnvironment: $,
    deleteEnvironment: I,
    // Workflow Management
    getWorkflows: E,
    getWorkflowDetails: T,
    resolveWorkflow: P,
    installWorkflowDeps: N,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: L,
    getWorkspaceModels: D,
    updateModelSource: z,
    deleteModel: R,
    downloadModel: U,
    // Settings
    getConfig: X,
    updateConfig: F,
    // Debug/Logs
    getEnvironmentLogs: M,
    getWorkspaceLogs: J,
    // Node Management
    getNodes: q,
    installNode: _e,
    updateNode: ve,
    uninstallNode: K,
    // Git Remotes
    getRemotes: ye,
    addRemote: te,
    removeRemote: Se,
    updateRemoteUrl: ge,
    fetchRemote: ue,
    getRemoteSyncStatus: ze,
    // Environment Sync
    syncEnvironmentManually: et
  };
}
const nn = { class: "base-modal-header" }, ln = {
  key: 0,
  class: "base-modal-title"
}, rn = { class: "base-modal-body" }, dn = {
  key: 0,
  class: "base-modal-loading"
}, cn = {
  key: 1,
  class: "base-modal-error"
}, un = {
  key: 0,
  class: "base-modal-footer"
}, mn = /* @__PURE__ */ G({
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
    function h() {
      s.closeOnOverlayClick && l("close");
    }
    function p(v) {
      v.key === "Escape" && l("close");
    }
    return be(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), Zt(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (v, g) => (o(), w(Ne, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: ee(["base-modal-content", t.size]),
          onClick: g[1] || (g[1] = we(() => {
          }, ["stop"]))
        }, [
          e("div", nn, [
            le(v.$slots, "header", {}, () => [
              t.title ? (o(), a("h3", ln, i(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (o(), a("button", {
              key: 0,
              class: "base-modal-close",
              onClick: g[0] || (g[0] = (m) => v.$emit("close"))
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
          e("div", rn, [
            t.loading ? (o(), a("div", dn, "Loading...")) : t.error ? (o(), a("div", cn, i(t.error), 1)) : le(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (o(), a("div", un, [
            le(v.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), ut = /* @__PURE__ */ j(mn, [["__scopeId", "data-v-700d367b"]]), vn = ["type", "disabled"], fn = {
  key: 0,
  class: "spinner"
}, gn = /* @__PURE__ */ G({
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
    return (r, s) => (o(), a("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ee(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (l) => r.$emit("click", l))
    }, [
      t.loading ? (o(), a("span", fn)) : d("", !0),
      le(r.$slots, "default", {}, void 0, !0)
    ], 10, vn));
  }
}), oe = /* @__PURE__ */ j(gn, [["__scopeId", "data-v-f3452606"]]), hn = {
  key: 0,
  class: "base-title-count"
}, pn = /* @__PURE__ */ G({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, s) => (o(), w(wt(`h${t.level}`), {
      class: ee(["base-title", t.variant])
    }, {
      default: n(() => [
        le(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), a("span", hn, "(" + i(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), st = /* @__PURE__ */ j(pn, [["__scopeId", "data-v-5a01561d"]]), yn = ["value", "disabled"], wn = {
  key: 0,
  value: "",
  disabled: ""
}, kn = ["value"], bn = {
  key: 0,
  class: "base-select-error"
}, _n = /* @__PURE__ */ G({
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
    return (l, h) => (o(), a("div", {
      class: ee(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ee(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (p) => l.$emit("update:modelValue", p.target.value))
      }, [
        t.placeholder ? (o(), a("option", wn, i(t.placeholder), 1)) : d("", !0),
        (o(!0), a(H, null, Q(t.options, (p) => (o(), a("option", {
          key: r(p),
          value: r(p)
        }, i(s(p)), 9, kn))), 128))
      ], 42, yn),
      t.error ? (o(), a("span", bn, i(t.error), 1)) : d("", !0)
    ], 2));
  }
}), $n = /* @__PURE__ */ j(_n, [["__scopeId", "data-v-7436d745"]]), Cn = { class: "popover-header" }, xn = { class: "popover-title" }, Sn = { class: "popover-content" }, In = {
  key: 0,
  class: "popover-actions"
}, En = /* @__PURE__ */ G({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, s) => (o(), w(Ne, { to: "body" }, [
      t.show ? (o(), a("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: qe({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = we(() => {
          }, ["stop"]))
        }, [
          e("div", Cn, [
            e("h4", xn, i(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Sn, [
            le(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (o(), a("div", In, [
            le(r.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ j(En, [["__scopeId", "data-v-42815ace"]]), zn = { class: "detail-section" }, Mn = {
  key: 0,
  class: "empty-message"
}, Ln = { class: "model-header" }, Rn = { class: "model-name" }, Nn = { class: "model-details" }, Un = { class: "model-row" }, Bn = { class: "model-row" }, Tn = { class: "label" }, Dn = {
  key: 0,
  class: "model-row model-row-nodes"
}, On = { class: "node-list" }, Vn = ["onClick"], An = {
  key: 1,
  class: "model-row"
}, Wn = { class: "value" }, Fn = {
  key: 0,
  class: "model-actions"
}, Pn = { class: "detail-section" }, Hn = {
  key: 0,
  class: "empty-message"
}, Gn = { class: "node-name" }, jn = {
  key: 0,
  class: "node-version"
}, Kn = /* @__PURE__ */ G({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: r }) {
    const s = t, l = r, { getWorkflowDetails: h, setModelImportance: p, installWorkflowDeps: v } = xe(), g = C(null), m = C(!1), f = C(null), y = C(!1), b = C({}), _ = C({}), k = C(!1), x = C(/* @__PURE__ */ new Set()), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function I(R) {
      switch (R) {
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
    function E(R) {
      switch (R) {
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
    function T(R) {
      if (!R.loaded_by || R.loaded_by.length === 0) return [];
      const U = R.hash || R.filename;
      return x.value.has(U) ? R.loaded_by : R.loaded_by.slice(0, 3);
    }
    function P(R) {
      return x.value.has(R);
    }
    function N(R) {
      x.value.has(R) ? x.value.delete(R) : x.value.add(R), x.value = new Set(x.value);
    }
    async function O() {
      m.value = !0, f.value = null;
      try {
        g.value = await h(s.workflowName);
      } catch (R) {
        f.value = R instanceof Error ? R.message : "Failed to load workflow details";
      } finally {
        m.value = !1;
      }
    }
    function L(R, U) {
      b.value[R] = U, y.value = !0;
    }
    async function D() {
      if (!y.value) {
        l("close");
        return;
      }
      m.value = !0, f.value = null;
      try {
        for (const [R, U] of Object.entries(b.value))
          await p(s.workflowName, R, U);
        l("close");
      } catch (R) {
        f.value = R instanceof Error ? R.message : "Failed to save changes";
      } finally {
        m.value = !1;
      }
    }
    async function z(R) {
      _.value[R] = !0, f.value = null;
      try {
        await v(s.workflowName, !0, !1), await O();
      } catch (U) {
        f.value = U instanceof Error ? U.message : "Failed to install node";
      } finally {
        _.value[R] = !1;
      }
    }
    return be(O), (R, U) => (o(), a(H, null, [
      c(ut, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: m.value,
        error: f.value || void 0,
        onClose: U[5] || (U[5] = (X) => l("close"))
      }, {
        body: n(() => [
          g.value ? (o(), a(H, { key: 0 }, [
            e("section", zn, [
              c(st, { variant: "section" }, {
                default: n(() => [
                  u("MODELS USED (" + i(g.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              g.value.models.length === 0 ? (o(), a("div", Mn, " No models used in this workflow ")) : d("", !0),
              (o(!0), a(H, null, Q(g.value.models, (X) => (o(), a("div", {
                key: X.hash,
                class: "model-card"
              }, [
                e("div", Ln, [
                  U[7] || (U[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Rn, i(X.filename), 1)
                ]),
                e("div", Nn, [
                  e("div", Un, [
                    U[8] || (U[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ee(["value", I(X.status)])
                    }, i(E(X.status)), 3)
                  ]),
                  e("div", Bn, [
                    e("span", Tn, [
                      U[9] || (U[9] = u(" Importance: ", -1)),
                      c(Ut, {
                        size: 14,
                        title: "About importance levels",
                        onClick: U[0] || (U[0] = (F) => k.value = !0)
                      })
                    ]),
                    c($n, {
                      "model-value": b.value[X.hash] || X.importance,
                      options: $,
                      "onUpdate:modelValue": (F) => L(X.hash, F)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  X.loaded_by && X.loaded_by.length > 0 ? (o(), a("div", Dn, [
                    U[10] || (U[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", On, [
                      (o(!0), a(H, null, Q(T(X), (F, M) => (o(), a("div", {
                        key: `${F.node_id}-${M}`,
                        class: "node-reference"
                      }, i(F.node_type) + " (Node #" + i(F.node_id) + ") ", 1))), 128)),
                      X.loaded_by.length > 3 ? (o(), a("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (F) => N(X.hash || X.filename)
                      }, i(P(X.hash || X.filename) ? "▼ Show less" : `▶ View all (${X.loaded_by.length})`), 9, Vn)) : d("", !0)
                    ])
                  ])) : d("", !0),
                  X.size_mb ? (o(), a("div", An, [
                    U[11] || (U[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Wn, i(X.size_mb) + " MB", 1)
                  ])) : d("", !0)
                ]),
                X.status !== "available" ? (o(), a("div", Fn, [
                  X.status === "downloadable" ? (o(), w(oe, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: U[1] || (U[1] = (F) => l("resolve"))
                  }, {
                    default: n(() => [...U[12] || (U[12] = [
                      u(" Download ", -1)
                    ])]),
                    _: 1
                  })) : X.status === "path_mismatch" ? (o(), w(oe, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: U[2] || (U[2] = (F) => l("resolve"))
                  }, {
                    default: n(() => [...U[13] || (U[13] = [
                      u(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), w(oe, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: U[3] || (U[3] = (F) => l("resolve"))
                  }, {
                    default: n(() => [...U[14] || (U[14] = [
                      u(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : d("", !0)
              ]))), 128))
            ]),
            e("section", Pn, [
              c(st, { variant: "section" }, {
                default: n(() => [
                  u("NODES USED (" + i(g.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              g.value.nodes.length === 0 ? (o(), a("div", Hn, " No custom nodes used in this workflow ")) : d("", !0),
              (o(!0), a(H, null, Q(g.value.nodes, (X) => (o(), a("div", {
                key: X.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ee(["node-status", X.status === "installed" ? "installed" : "missing"])
                }, i(X.status === "installed" ? "✓" : "✕"), 3),
                e("span", Gn, i(X.name), 1),
                X.version ? (o(), a("span", jn, "v" + i(X.version), 1)) : d("", !0),
                X.status === "missing" ? (o(), w(oe, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: _.value[X.name],
                  onClick: (F) => z(X.name),
                  class: "node-install-btn"
                }, {
                  default: n(() => [...U[15] || (U[15] = [
                    u(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: n(() => [
          c(oe, {
            variant: "secondary",
            onClick: U[4] || (U[4] = (X) => l("close"))
          }, {
            default: n(() => [...U[16] || (U[16] = [
              u(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (o(), w(oe, {
            key: 0,
            variant: "primary",
            onClick: D
          }, {
            default: n(() => [...U[17] || (U[17] = [
              u(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      c(Oe, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: U[6] || (U[6] = (X) => k.value = !1)
      }, {
        content: n(() => [...U[18] || (U[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              u(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              u(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              u(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), qn = /* @__PURE__ */ j(Kn, [["__scopeId", "data-v-1325d542"]]);
function Yn() {
  const t = C(null), r = C(null), s = C([]), l = C([]), h = C(!1), p = C(null);
  async function v(b, _) {
    var x;
    if (!((x = window.app) != null && x.api))
      throw new Error("ComfyUI API not available");
    const k = await window.app.api.fetchApi(b, _);
    if (!k.ok) {
      const $ = await k.json().catch(() => ({})), I = $.error || $.message || `Request failed: ${k.status}`;
      throw new Error(I);
    }
    return k.json();
  }
  async function g(b) {
    h.value = !0, p.value = null;
    try {
      let _;
      return dt() && (_ = await ce.analyzeWorkflow(b)), t.value = _, _;
    } catch (_) {
      const k = _ instanceof Error ? _.message : "Unknown error occurred";
      throw p.value = k, _;
    } finally {
      h.value = !1;
    }
  }
  async function m(b, _, k) {
    h.value = !0, p.value = null;
    try {
      let x;
      return dt() && (x = await ce.applyResolution(b, _, k)), r.value = x, x;
    } catch (x) {
      const $ = x instanceof Error ? x.message : "Unknown error occurred";
      throw p.value = $, x;
    } finally {
      h.value = !1;
    }
  }
  async function f(b, _ = 10) {
    h.value = !0, p.value = null;
    try {
      let k;
      return dt() && (k = await ce.searchNodes(b, _)), s.value = k.results, k.results;
    } catch (k) {
      const x = k instanceof Error ? k.message : "Unknown error occurred";
      throw p.value = x, k;
    } finally {
      h.value = !1;
    }
  }
  async function y(b, _ = 10) {
    h.value = !0, p.value = null;
    try {
      let k;
      return dt() && (k = await ce.searchModels(b, _)), l.value = k.results, k.results;
    } catch (k) {
      const x = k instanceof Error ? k.message : "Unknown error occurred";
      throw p.value = x, k;
    } finally {
      h.value = !1;
    }
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: s,
    modelSearchResults: l,
    isLoading: h,
    error: p,
    // Methods
    analyzeWorkflow: g,
    applyResolution: m,
    searchNodes: f,
    searchModels: y
  };
}
const Xn = { class: "resolution-stepper" }, Zn = { class: "stepper-header" }, Jn = ["onClick"], Qn = { class: "step-indicator" }, el = {
  key: 0,
  class: "step-icon"
}, tl = {
  key: 1,
  class: "step-number"
}, ol = { class: "step-label" }, sl = {
  key: 0,
  class: "step-connector"
}, al = { class: "stepper-content" }, nl = /* @__PURE__ */ G({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const s = t, l = r;
    function h(v) {
      return s.completedSteps.includes(v);
    }
    function p(v) {
      const g = s.steps.findIndex((f) => f.id === s.currentStep);
      return s.steps.findIndex((f) => f.id === v) > g;
    }
    return (v, g) => (o(), a("div", Xn, [
      e("div", Zn, [
        (o(!0), a(H, null, Q(t.steps, (m, f) => (o(), a("div", {
          key: m.id,
          class: ee(["step", {
            active: t.currentStep === m.id,
            completed: h(m.id),
            disabled: p(m.id)
          }]),
          onClick: (y) => !p(m.id) && l("step-change", m.id)
        }, [
          e("div", Qn, [
            h(m.id) ? (o(), a("span", el, "✓")) : (o(), a("span", tl, i(f + 1), 1))
          ]),
          e("div", ol, i(m.label), 1),
          f < t.steps.length - 1 ? (o(), a("div", sl)) : d("", !0)
        ], 10, Jn))), 128))
      ]),
      e("div", al, [
        le(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ll = /* @__PURE__ */ j(nl, [["__scopeId", "data-v-0508e462"]]), il = /* @__PURE__ */ G({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, s = B(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), l = B(() => `confidence-${s.value}`), h = B(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (p, v) => (o(), a("span", {
      class: ee(["confidence-badge", l.value, t.size])
    }, i(h.value), 3));
  }
}), kt = /* @__PURE__ */ j(il, [["__scopeId", "data-v-17ec4b80"]]), rl = { class: "item-header" }, dl = { class: "item-title" }, cl = { class: "node-type" }, ul = {
  key: 0,
  class: "choice-status"
}, ml = {
  key: 0,
  class: "status-badge install"
}, vl = {
  key: 1,
  class: "status-badge optional"
}, fl = {
  key: 2,
  class: "status-badge skip"
}, gl = {
  key: 0,
  class: "item-status"
}, hl = {
  key: 0,
  class: "status-badge ambiguous"
}, pl = {
  key: 1,
  class: "status-badge unresolved"
}, yl = { class: "item-body" }, wl = {
  key: 0,
  class: "resolved-state"
}, kl = {
  key: 1,
  class: "multiple-options"
}, bl = { class: "options-list" }, _l = ["onClick"], $l = ["name", "value", "checked", "onChange"], Cl = { class: "option-content" }, xl = { class: "option-header" }, Sl = { class: "option-package-id" }, Il = {
  key: 0,
  class: "option-title"
}, El = { class: "option-meta" }, zl = {
  key: 0,
  class: "installed-badge"
}, Ml = { class: "action-buttons" }, Ll = {
  key: 2,
  class: "unresolved"
}, Rl = { class: "action-buttons" }, Nl = /* @__PURE__ */ G({
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
    choice: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice"],
  setup(t, { emit: r }) {
    const s = t, l = r, h = B(() => !!s.choice), p = B(() => {
      var m;
      return (m = s.choice) == null ? void 0 : m.action;
    }), v = B(() => {
      var m;
      return (m = s.choice) == null ? void 0 : m.package_id;
    });
    function g(m) {
      l("option-selected", m);
    }
    return (m, f) => {
      var y;
      return o(), a("div", {
        class: ee(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: h.value }])
      }, [
        e("div", rl, [
          e("div", dl, [
            e("code", cl, i(t.nodeType), 1),
            h.value ? (o(), a("span", ul, [
              p.value === "install" ? (o(), a("span", ml, "Installing: " + i(v.value), 1)) : p.value === "optional" ? (o(), a("span", vl, "Marked Optional")) : p.value === "skip" ? (o(), a("span", fl, "Skipped")) : d("", !0)
            ])) : d("", !0)
          ]),
          h.value ? d("", !0) : (o(), a("div", gl, [
            t.hasMultipleOptions ? (o(), a("span", hl, i((y = t.options) == null ? void 0 : y.length) + " matches", 1)) : t.packageId ? d("", !0) : (o(), a("span", pl, "Not Found"))
          ]))
        ]),
        e("div", yl, [
          h.value ? (o(), a("div", wl, [
            c(oe, {
              variant: "ghost",
              size: "sm",
              onClick: f[0] || (f[0] = (b) => l("clear-choice"))
            }, {
              default: n(() => [...f[9] || (f[9] = [
                u(" Change Selection ", -1)
              ])]),
              _: 1
            })
          ])) : t.hasMultipleOptions && t.options ? (o(), a("div", kl, [
            f[14] || (f[14] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
            e("div", bl, [
              (o(!0), a(H, null, Q(t.options, (b, _) => (o(), a("label", {
                key: b.package_id,
                class: ee(["option-card", { selected: t.selectedOptionIndex === _ }]),
                onClick: (k) => g(_)
              }, [
                e("input", {
                  type: "radio",
                  name: `node-option-${t.nodeType}`,
                  value: _,
                  checked: t.selectedOptionIndex === _,
                  onChange: (k) => g(_)
                }, null, 40, $l),
                e("div", Cl, [
                  e("div", xl, [
                    e("span", Sl, i(b.package_id), 1),
                    c(kt, {
                      confidence: b.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  b.title && b.title !== b.package_id ? (o(), a("div", Il, i(b.title), 1)) : d("", !0),
                  e("div", El, [
                    b.is_installed ? (o(), a("span", zl, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 10, _l))), 128))
            ]),
            e("div", Ml, [
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: f[1] || (f[1] = (b) => l("search"))
              }, {
                default: n(() => [...f[10] || (f[10] = [
                  u(" Search Registry ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: f[2] || (f[2] = (b) => l("manual-entry"))
              }, {
                default: n(() => [...f[11] || (f[11] = [
                  u(" Enter Manually ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: f[3] || (f[3] = (b) => l("mark-optional"))
              }, {
                default: n(() => [...f[12] || (f[12] = [
                  u(" Mark Optional ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: f[4] || (f[4] = (b) => l("skip"))
              }, {
                default: n(() => [...f[13] || (f[13] = [
                  u(" Skip ", -1)
                ])]),
                _: 1
              })
            ])
          ])) : (o(), a("div", Ll, [
            f[19] || (f[19] = e("div", { class: "unresolved-message" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "No matching package found in registry")
            ], -1)),
            e("div", Rl, [
              c(oe, {
                variant: "primary",
                size: "sm",
                onClick: f[5] || (f[5] = (b) => l("search"))
              }, {
                default: n(() => [...f[15] || (f[15] = [
                  u(" Search Registry ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: f[6] || (f[6] = (b) => l("manual-entry"))
              }, {
                default: n(() => [...f[16] || (f[16] = [
                  u(" Enter Manually ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: f[7] || (f[7] = (b) => l("mark-optional"))
              }, {
                default: n(() => [...f[17] || (f[17] = [
                  u(" Mark Optional ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: f[8] || (f[8] = (b) => l("skip"))
              }, {
                default: n(() => [...f[18] || (f[18] = [
                  u(" Skip ", -1)
                ])]),
                _: 1
              })
            ])
          ]))
        ])
      ], 2);
    };
  }
}), Ul = /* @__PURE__ */ j(Nl, [["__scopeId", "data-v-e95498d2"]]), Bl = ["type", "value", "placeholder", "disabled"], Tl = {
  key: 0,
  class: "base-input-error"
}, Dl = /* @__PURE__ */ G({
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
    return (r, s) => (o(), a("div", {
      class: ee(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ee(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeyup: [
          s[1] || (s[1] = De((l) => r.$emit("enter"), ["enter"])),
          s[2] || (s[2] = De((l) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Bl),
      t.error ? (o(), a("span", Tl, i(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ j(Dl, [["__scopeId", "data-v-9ba02cdc"]]), Ol = { class: "node-resolution-step" }, Vl = { class: "step-header" }, Al = { class: "step-progress" }, Wl = { class: "progress-text" }, Fl = { class: "progress-bar" }, Pl = {
  key: 0,
  class: "step-body"
}, Hl = { class: "current-indicator" }, Gl = { class: "indicator-count" }, jl = { class: "step-footer" }, Kl = { class: "footer-right" }, ql = { class: "node-search-modal" }, Yl = { class: "node-modal-body" }, Xl = {
  key: 0,
  class: "node-search-results"
}, Zl = ["onClick"], Jl = { class: "node-result-header" }, Ql = { class: "node-result-package-id" }, ei = {
  key: 0,
  class: "node-result-description"
}, ti = {
  key: 1,
  class: "node-no-results"
}, oi = {
  key: 2,
  class: "node-searching"
}, si = { class: "node-manual-entry-modal" }, ai = { class: "node-modal-body" }, ni = { class: "node-modal-actions" }, li = /* @__PURE__ */ G({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    currentIndex: {},
    nodeChoices: {},
    hasModels: { type: Boolean }
  },
  emits: ["previous", "next", "complete", "mark-optional", "skip", "option-selected", "search", "manual-entry"],
  setup(t, { emit: r }) {
    const s = t, l = r, h = C(!1), p = C(!1), v = C(""), g = C(""), m = C([]), f = C(!1), y = B(() => s.nodes[s.currentIndex]), b = B(() => s.nodes.length), _ = B(() => s.currentIndex === b.value - 1), k = B(() => s.nodes.filter((J) => s.nodeChoices.has(J.node_type)).length), x = B(
      () => b.value > 0 ? k.value / b.value * 100 : 0
    ), $ = B(() => y.value ? s.nodeChoices.has(y.value.node_type) : !1), I = B(() => k.value === b.value);
    function E() {
      y.value && (l("mark-optional", y.value.node_type), M());
    }
    function T() {
      y.value && (l("skip", y.value.node_type), M());
    }
    function P(J) {
      y.value && (l("option-selected", y.value.node_type, J), M());
    }
    function N() {
    }
    function O() {
      y.value && (v.value = y.value.node_type, h.value = !0);
    }
    function L() {
      g.value = "", p.value = !0;
    }
    function D() {
      h.value = !1, v.value = "", m.value = [];
    }
    function z() {
      p.value = !1, g.value = "";
    }
    function R() {
      f.value = !0, setTimeout(() => {
        f.value = !1;
      }, 300);
    }
    function U(J) {
      y.value && (l("search", y.value.node_type), D(), M());
    }
    function X() {
      !y.value || !g.value.trim() || (l("manual-entry", y.value.node_type), z(), M());
    }
    function F() {
      for (const J of s.nodes)
        s.nodeChoices.has(J.node_type) || l("skip", J.node_type);
    }
    function M() {
      Mt(() => {
        if (I.value)
          return;
        s.nodes.findIndex(
          (q, _e) => _e > s.currentIndex && !s.nodeChoices.has(q.node_type)
        ) !== -1 ? l("next") : _.value || l("next");
      });
    }
    return (J, q) => {
      var _e, ve;
      return o(), a("div", Ol, [
        e("div", Vl, [
          q[5] || (q[5] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, "Choose how to handle each unresolved node dependency")
          ], -1)),
          e("div", Al, [
            e("span", Wl, i(k.value) + " / " + i(b.value) + " resolved", 1),
            e("div", Fl, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${x.value}%` })
              }, null, 4)
            ])
          ])
        ]),
        y.value ? (o(), a("div", Pl, [
          e("div", Hl, [
            q[6] || (q[6] = e("span", { class: "indicator-label" }, "Currently resolving:", -1)),
            e("span", Gl, i(t.currentIndex + 1) + " of " + i(b.value), 1)
          ]),
          c(Ul, {
            "node-type": y.value.node_type,
            "has-multiple-options": !!((_e = y.value.options) != null && _e.length),
            options: y.value.options,
            choice: (ve = t.nodeChoices) == null ? void 0 : ve.get(y.value.node_type),
            onMarkOptional: E,
            onSkip: T,
            onManualEntry: L,
            onSearch: O,
            onOptionSelected: P,
            onClearChoice: N
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice"])
        ])) : d("", !0),
        e("div", jl, [
          c(oe, {
            variant: "secondary",
            disabled: t.currentIndex === 0,
            onClick: q[0] || (q[0] = (K) => l("previous"))
          }, {
            default: n(() => [...q[7] || (q[7] = [
              u(" ← Previous ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          e("div", Kl, [
            I.value ? d("", !0) : (o(), w(oe, {
              key: 0,
              variant: "ghost",
              onClick: F
            }, {
              default: n(() => [...q[8] || (q[8] = [
                u(" Skip All Remaining ", -1)
              ])]),
              _: 1
            })),
            _.value || I.value ? (o(), w(oe, {
              key: 1,
              variant: "primary",
              disabled: !I.value,
              onClick: q[1] || (q[1] = (K) => l("complete"))
            }, {
              default: n(() => [
                u(" Continue to " + i(t.hasModels ? "Models" : "Review") + " → ", 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : (o(), w(oe, {
              key: 2,
              variant: "primary",
              disabled: !$.value,
              onClick: q[2] || (q[2] = (K) => l("next"))
            }, {
              default: n(() => [...q[9] || (q[9] = [
                u(" Next → ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]))
          ])
        ]),
        (o(), w(Ne, { to: "body" }, [
          h.value ? (o(), a("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: we(D, ["self"])
          }, [
            e("div", ql, [
              e("div", { class: "node-modal-header" }, [
                q[10] || (q[10] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: D
                }, "✕")
              ]),
              e("div", Yl, [
                c(Fe, {
                  modelValue: v.value,
                  "onUpdate:modelValue": q[3] || (q[3] = (K) => v.value = K),
                  placeholder: "Search by node type, package name...",
                  onInput: R
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (o(), a("div", Xl, [
                  (o(!0), a(H, null, Q(m.value, (K) => (o(), a("div", {
                    key: K.package_id,
                    class: "node-search-result-item",
                    onClick: (ye) => U()
                  }, [
                    e("div", Jl, [
                      e("code", Ql, i(K.package_id), 1),
                      K.match_confidence ? (o(), w(kt, {
                        key: 0,
                        confidence: K.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : d("", !0)
                    ]),
                    K.description ? (o(), a("div", ei, i(K.description), 1)) : d("", !0)
                  ], 8, Zl))), 128))
                ])) : v.value && !f.value ? (o(), a("div", ti, ' No packages found matching "' + i(v.value) + '" ', 1)) : d("", !0),
                f.value ? (o(), a("div", oi, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), w(Ne, { to: "body" }, [
          p.value ? (o(), a("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: we(z, ["self"])
          }, [
            e("div", si, [
              e("div", { class: "node-modal-header" }, [
                q[11] || (q[11] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              e("div", ai, [
                c(Fe, {
                  modelValue: g.value,
                  "onUpdate:modelValue": q[4] || (q[4] = (K) => g.value = K),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", ni, [
                  c(oe, {
                    variant: "secondary",
                    onClick: z
                  }, {
                    default: n(() => [...q[12] || (q[12] = [
                      u("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  c(oe, {
                    variant: "primary",
                    disabled: !g.value.trim(),
                    onClick: X
                  }, {
                    default: n(() => [...q[13] || (q[13] = [
                      u(" Add Package ", -1)
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
}), ii = /* @__PURE__ */ j(li, [["__scopeId", "data-v-8fa1acfe"]]), ri = { class: "item-header" }, di = { class: "item-title" }, ci = { class: "model-filename" }, ui = {
  key: 0,
  class: "choice-status"
}, mi = {
  key: 0,
  class: "status-badge select"
}, vi = {
  key: 1,
  class: "status-badge download"
}, fi = {
  key: 2,
  class: "status-badge optional"
}, gi = {
  key: 3,
  class: "status-badge skip"
}, hi = {
  key: 0,
  class: "item-status"
}, pi = {
  key: 0,
  class: "status-badge ambiguous"
}, yi = {
  key: 1,
  class: "status-badge unresolved"
}, wi = { class: "node-info" }, ki = { class: "item-body" }, bi = {
  key: 0,
  class: "resolved-state"
}, _i = {
  key: 1,
  class: "multiple-options"
}, $i = { class: "options-list" }, Ci = ["onClick"], xi = ["name", "value", "checked", "onChange"], Si = { class: "option-content" }, Ii = { class: "option-header" }, Ei = { class: "option-filename" }, zi = { class: "option-meta" }, Mi = { class: "option-size" }, Li = { class: "option-category" }, Ri = { class: "option-path" }, Ni = { class: "action-buttons" }, Ui = {
  key: 2,
  class: "unresolved"
}, Bi = { class: "action-buttons" }, Ti = /* @__PURE__ */ G({
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
    choice: {}
  },
  emits: ["mark-optional", "skip", "download-url", "search", "option-selected", "clear-choice"],
  setup(t, { emit: r }) {
    const s = t, l = r, h = B(() => !!s.choice), p = B(() => {
      var f;
      return (f = s.choice) == null ? void 0 : f.action;
    }), v = B(() => {
      var f, y;
      return ((y = (f = s.choice) == null ? void 0 : f.selected_model) == null ? void 0 : y.filename) || "selected";
    });
    function g(f) {
      l("option-selected", f);
    }
    function m(f) {
      if (!f) return "Unknown";
      const y = f / (1024 * 1024 * 1024);
      return y >= 1 ? `${y.toFixed(2)} GB` : `${(f / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (f, y) => {
      var b;
      return o(), a("div", {
        class: ee(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
      }, [
        e("div", ri, [
          e("div", di, [
            e("code", ci, i(t.filename), 1),
            h.value ? (o(), a("span", ui, [
              p.value === "select" ? (o(), a("span", mi, "Using: " + i(v.value), 1)) : p.value === "download" ? (o(), a("span", vi, "Downloading")) : p.value === "optional" ? (o(), a("span", fi, "Marked Optional")) : p.value === "skip" ? (o(), a("span", gi, "Skipped")) : d("", !0)
            ])) : d("", !0)
          ]),
          h.value ? d("", !0) : (o(), a("div", hi, [
            t.hasMultipleOptions ? (o(), a("span", pi, i((b = t.options) == null ? void 0 : b.length) + " matches", 1)) : (o(), a("span", yi, "Not Found"))
          ]))
        ]),
        e("div", wi, [
          y[9] || (y[9] = u(" Used by: ", -1)),
          e("code", null, i(t.nodeType), 1)
        ]),
        e("div", ki, [
          h.value ? (o(), a("div", bi, [
            c(oe, {
              variant: "ghost",
              size: "sm",
              onClick: y[0] || (y[0] = (_) => l("clear-choice"))
            }, {
              default: n(() => [...y[10] || (y[10] = [
                u(" Change Selection ", -1)
              ])]),
              _: 1
            })
          ])) : t.hasMultipleOptions && t.options ? (o(), a("div", _i, [
            y[15] || (y[15] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
            e("div", $i, [
              (o(!0), a(H, null, Q(t.options, (_, k) => (o(), a("label", {
                key: _.model.hash,
                class: ee(["option-card", { selected: t.selectedOptionIndex === k }]),
                onClick: (x) => g(k)
              }, [
                e("input", {
                  type: "radio",
                  name: `model-option-${t.filename}`,
                  value: k,
                  checked: t.selectedOptionIndex === k,
                  onChange: (x) => g(k)
                }, null, 40, xi),
                e("div", Si, [
                  e("div", Ii, [
                    e("span", Ei, i(_.model.filename), 1),
                    c(kt, {
                      confidence: _.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  e("div", zi, [
                    e("span", Mi, i(m(_.model.size)), 1),
                    e("span", Li, i(_.model.category), 1)
                  ]),
                  e("div", Ri, i(_.model.relative_path), 1)
                ])
              ], 10, Ci))), 128))
            ]),
            e("div", Ni, [
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: y[1] || (y[1] = (_) => l("search"))
              }, {
                default: n(() => [...y[11] || (y[11] = [
                  u(" Search Workspace ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: y[2] || (y[2] = (_) => l("download-url"))
              }, {
                default: n(() => [...y[12] || (y[12] = [
                  u(" Download URL ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: y[3] || (y[3] = (_) => l("mark-optional"))
              }, {
                default: n(() => [...y[13] || (y[13] = [
                  u(" Mark Optional ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: y[4] || (y[4] = (_) => l("skip"))
              }, {
                default: n(() => [...y[14] || (y[14] = [
                  u(" Skip ", -1)
                ])]),
                _: 1
              })
            ])
          ])) : (o(), a("div", Ui, [
            y[20] || (y[20] = e("div", { class: "unresolved-message" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "Model not found in workspace")
            ], -1)),
            e("div", Bi, [
              c(oe, {
                variant: "primary",
                size: "sm",
                onClick: y[5] || (y[5] = (_) => l("search"))
              }, {
                default: n(() => [...y[16] || (y[16] = [
                  u(" Search Workspace ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: y[6] || (y[6] = (_) => l("download-url"))
              }, {
                default: n(() => [...y[17] || (y[17] = [
                  u(" Download URL ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "secondary",
                size: "sm",
                onClick: y[7] || (y[7] = (_) => l("mark-optional"))
              }, {
                default: n(() => [...y[18] || (y[18] = [
                  u(" Mark Optional ", -1)
                ])]),
                _: 1
              }),
              c(oe, {
                variant: "ghost",
                size: "sm",
                onClick: y[8] || (y[8] = (_) => l("skip"))
              }, {
                default: n(() => [...y[19] || (y[19] = [
                  u(" Skip ", -1)
                ])]),
                _: 1
              })
            ])
          ]))
        ])
      ], 2);
    };
  }
}), Di = /* @__PURE__ */ j(Ti, [["__scopeId", "data-v-e250f0b3"]]), Oi = { class: "model-resolution-step" }, Vi = { class: "step-header" }, Ai = { class: "step-progress" }, Wi = { class: "progress-text" }, Fi = { class: "progress-bar" }, Pi = {
  key: 0,
  class: "step-body"
}, Hi = { class: "current-indicator" }, Gi = { class: "indicator-count" }, ji = { class: "step-footer" }, Ki = { class: "footer-right" }, qi = { class: "model-search-modal" }, Yi = { class: "model-modal-body" }, Xi = {
  key: 0,
  class: "model-search-results"
}, Zi = ["onClick"], Ji = { class: "model-result-header" }, Qi = { class: "model-result-filename" }, er = { class: "model-result-meta" }, tr = { class: "model-result-category" }, or = { class: "model-result-size" }, sr = {
  key: 0,
  class: "model-result-path"
}, ar = {
  key: 1,
  class: "model-no-results"
}, nr = {
  key: 2,
  class: "model-searching"
}, lr = { class: "model-download-url-modal" }, ir = { class: "model-modal-body" }, rr = { class: "model-modal-actions" }, dr = /* @__PURE__ */ G({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    currentIndex: {},
    modelChoices: {}
  },
  emits: ["previous", "next", "complete", "mark-optional", "skip", "option-selected", "search", "download-url"],
  setup(t, { emit: r }) {
    const s = t, l = r, h = C(!1), p = C(!1), v = C(""), g = C(""), m = C(""), f = C([]), y = C(!1), b = B(() => s.models[s.currentIndex]), _ = B(() => s.models.length), k = B(() => s.currentIndex === _.value - 1), x = B(() => s.models.filter((ve) => s.modelChoices.has(ve.filename)).length), $ = B(
      () => _.value > 0 ? x.value / _.value * 100 : 0
    ), I = B(() => b.value ? s.modelChoices.has(b.value.filename) : !1), E = B(() => x.value === _.value), T = B(() => b.value ? `checkpoints/${b.value.filename}` : "checkpoints/");
    function P() {
      b.value && (l("mark-optional", b.value.filename), q());
    }
    function N() {
      b.value && (l("skip", b.value.filename), q());
    }
    function O(ve) {
      b.value && (l("option-selected", b.value.filename, ve), q());
    }
    function L() {
    }
    function D() {
      b.value && (v.value = b.value.filename, h.value = !0);
    }
    function z() {
      g.value = "", m.value = T.value, p.value = !0;
    }
    function R() {
      h.value = !1, v.value = "", f.value = [];
    }
    function U() {
      p.value = !1, g.value = "", m.value = "";
    }
    function X() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function F(ve) {
      b.value && (l("search", b.value.filename), R(), q());
    }
    function M() {
      !b.value || !g.value.trim() || (l("download-url", b.value.filename, g.value.trim(), m.value.trim() || void 0), U(), q());
    }
    function J() {
      for (const ve of s.models)
        s.modelChoices.has(ve.filename) || l("skip", ve.filename);
    }
    function q() {
      Mt(() => {
        if (E.value)
          return;
        s.models.findIndex(
          (K, ye) => ye > s.currentIndex && !s.modelChoices.has(K.filename)
        ) !== -1 ? l("next") : k.value || l("next");
      });
    }
    function _e(ve) {
      if (!ve) return "Unknown";
      const K = ve / (1024 * 1024 * 1024);
      return K >= 1 ? `${K.toFixed(2)} GB` : `${(ve / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ve, K) => {
      var ye, te, Se;
      return o(), a("div", Oi, [
        e("div", Vi, [
          K[6] || (K[6] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Models"),
            e("p", { class: "step-description" }, "Choose how to handle each unresolved model dependency")
          ], -1)),
          e("div", Ai, [
            e("span", Wi, i(x.value) + " / " + i(_.value) + " resolved", 1),
            e("div", Fi, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${$.value}%` })
              }, null, 4)
            ])
          ])
        ]),
        b.value ? (o(), a("div", Pi, [
          e("div", Hi, [
            K[7] || (K[7] = e("span", { class: "indicator-label" }, "Currently resolving:", -1)),
            e("span", Gi, i(t.currentIndex + 1) + " of " + i(_.value), 1)
          ]),
          c(Di, {
            filename: b.value.filename,
            "node-type": ((ye = b.value.reference) == null ? void 0 : ye.node_type) || "Unknown",
            "has-multiple-options": !!((te = b.value.options) != null && te.length),
            options: b.value.options,
            choice: (Se = t.modelChoices) == null ? void 0 : Se.get(b.value.filename),
            onMarkOptional: P,
            onSkip: N,
            onDownloadUrl: z,
            onSearch: D,
            onOptionSelected: O,
            onClearChoice: L
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice"])
        ])) : d("", !0),
        e("div", ji, [
          c(oe, {
            variant: "secondary",
            disabled: t.currentIndex === 0,
            onClick: K[0] || (K[0] = (ge) => l("previous"))
          }, {
            default: n(() => [...K[8] || (K[8] = [
              u(" ← Previous ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          e("div", Ki, [
            E.value ? d("", !0) : (o(), w(oe, {
              key: 0,
              variant: "ghost",
              onClick: J
            }, {
              default: n(() => [...K[9] || (K[9] = [
                u(" Skip All Remaining ", -1)
              ])]),
              _: 1
            })),
            k.value || E.value ? (o(), w(oe, {
              key: 1,
              variant: "primary",
              disabled: !E.value,
              onClick: K[1] || (K[1] = (ge) => l("complete"))
            }, {
              default: n(() => [...K[10] || (K[10] = [
                u(" Continue to Review → ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (o(), w(oe, {
              key: 2,
              variant: "primary",
              disabled: !I.value,
              onClick: K[2] || (K[2] = (ge) => l("next"))
            }, {
              default: n(() => [...K[11] || (K[11] = [
                u(" Next → ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]))
          ])
        ]),
        (o(), w(Ne, { to: "body" }, [
          h.value ? (o(), a("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: we(R, ["self"])
          }, [
            e("div", qi, [
              e("div", { class: "model-modal-header" }, [
                K[12] || (K[12] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              e("div", Yi, [
                c(Fe, {
                  modelValue: v.value,
                  "onUpdate:modelValue": K[3] || (K[3] = (ge) => v.value = ge),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                f.value.length > 0 ? (o(), a("div", Xi, [
                  (o(!0), a(H, null, Q(f.value, (ge) => (o(), a("div", {
                    key: ge.hash,
                    class: "model-search-result-item",
                    onClick: (ue) => F()
                  }, [
                    e("div", Ji, [
                      e("code", Qi, i(ge.filename), 1)
                    ]),
                    e("div", er, [
                      e("span", tr, i(ge.category), 1),
                      e("span", or, i(_e(ge.size)), 1)
                    ]),
                    ge.relative_path ? (o(), a("div", sr, i(ge.relative_path), 1)) : d("", !0)
                  ], 8, Zi))), 128))
                ])) : v.value && !y.value ? (o(), a("div", ar, ' No models found matching "' + i(v.value) + '" ', 1)) : d("", !0),
                y.value ? (o(), a("div", nr, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), w(Ne, { to: "body" }, [
          p.value ? (o(), a("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: we(U, ["self"])
          }, [
            e("div", lr, [
              e("div", { class: "model-modal-header" }, [
                K[13] || (K[13] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", ir, [
                c(Fe, {
                  modelValue: g.value,
                  "onUpdate:modelValue": K[4] || (K[4] = (ge) => g.value = ge),
                  label: "Download URL",
                  placeholder: "https://civitai.com/api/download/..."
                }, null, 8, ["modelValue"]),
                c(Fe, {
                  modelValue: m.value,
                  "onUpdate:modelValue": K[5] || (K[5] = (ge) => m.value = ge),
                  label: "Target Path (relative to models folder)",
                  placeholder: T.value
                }, null, 8, ["modelValue", "placeholder"]),
                e("div", rr, [
                  c(oe, {
                    variant: "secondary",
                    onClick: U
                  }, {
                    default: n(() => [...K[14] || (K[14] = [
                      u("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  c(oe, {
                    variant: "primary",
                    disabled: !g.value.trim(),
                    onClick: M
                  }, {
                    default: n(() => [...K[15] || (K[15] = [
                      u(" Queue Download ", -1)
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
}), cr = /* @__PURE__ */ j(dr, [["__scopeId", "data-v-85ea30f8"]]), ur = {
  key: 0,
  class: "loading-state"
}, mr = {
  key: 1,
  class: "wizard-content"
}, vr = {
  key: 0,
  class: "step-content"
}, fr = { class: "analysis-summary" }, gr = { class: "analysis-header" }, hr = { class: "summary-description" }, pr = { class: "stats-grid" }, yr = { class: "stat-card" }, wr = { class: "stat-items" }, kr = { class: "stat-item success" }, br = { class: "stat-count" }, _r = {
  key: 0,
  class: "stat-item warning"
}, $r = { class: "stat-count" }, Cr = {
  key: 1,
  class: "stat-item error"
}, xr = { class: "stat-count" }, Sr = { class: "stat-card" }, Ir = { class: "stat-items" }, Er = { class: "stat-item success" }, zr = { class: "stat-count" }, Mr = {
  key: 0,
  class: "stat-item warning"
}, Lr = { class: "stat-count" }, Rr = {
  key: 1,
  class: "stat-item error"
}, Nr = { class: "stat-count" }, Ur = {
  key: 0,
  class: "status-message warning"
}, Br = { class: "status-text" }, Tr = {
  key: 1,
  class: "status-message success"
}, Dr = {
  key: 3,
  class: "step-content"
}, Or = { class: "review-summary" }, Vr = { class: "review-stats" }, Ar = { class: "review-stat" }, Wr = { class: "stat-value" }, Fr = { class: "review-stat" }, Pr = { class: "stat-value" }, Hr = { class: "review-stat" }, Gr = { class: "stat-value" }, jr = { class: "review-stat" }, Kr = { class: "stat-value" }, qr = {
  key: 0,
  class: "review-section"
}, Yr = { class: "section-title" }, Xr = { class: "review-items" }, Zr = { class: "item-name" }, Jr = { class: "item-choice" }, Qr = {
  key: 0,
  class: "choice-badge install"
}, ed = {
  key: 1,
  class: "choice-badge optional"
}, td = {
  key: 2,
  class: "choice-badge skip"
}, od = {
  key: 1,
  class: "review-section"
}, sd = { class: "section-title" }, ad = { class: "review-items" }, nd = { class: "item-name" }, ld = { class: "item-choice" }, id = {
  key: 0,
  class: "choice-badge install"
}, rd = {
  key: 1,
  class: "choice-badge download"
}, dd = {
  key: 2,
  class: "choice-badge optional"
}, cd = {
  key: 3,
  class: "choice-badge skip"
}, ud = {
  key: 2,
  class: "no-choices"
}, md = /* @__PURE__ */ G({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: r }) {
    const s = t, l = r, { analyzeWorkflow: h, applyResolution: p } = Yn(), v = C(null), g = C(!1), m = C(!1), f = C(null), y = C("analysis"), b = C([]), _ = C(0), k = C(0), x = C(/* @__PURE__ */ new Map()), $ = C(/* @__PURE__ */ new Map()), I = B(() => {
      const Z = [
        { id: "analysis", label: "Analysis" }
      ];
      return T.value && Z.push({ id: "nodes", label: "Nodes" }), P.value && Z.push({ id: "models", label: "Models" }), Z.push({ id: "review", label: "Review" }), Z;
    }), E = B(() => v.value ? v.value.stats.needs_user_input : !1), T = B(() => v.value ? v.value.nodes.unresolved.length > 0 || v.value.nodes.ambiguous.length > 0 : !1), P = B(() => v.value ? v.value.models.unresolved.length > 0 || v.value.models.ambiguous.length > 0 : !1), N = B(() => {
      if (!v.value) return [];
      const Z = v.value.nodes.unresolved.map((ie) => ({
        node_type: ie.reference.node_type,
        reason: ie.reason,
        is_unresolved: !0
      })), W = v.value.nodes.ambiguous.map((ie) => ({
        node_type: ie.reference.node_type,
        has_multiple_options: !0,
        options: ie.options.map((me) => ({
          package_id: me.package.package_id,
          title: me.package.title,
          match_confidence: me.match_confidence,
          match_type: me.match_type,
          is_installed: me.is_installed
        }))
      }));
      return [...Z, ...W];
    }), O = B(() => {
      if (!v.value) return [];
      const Z = v.value.models.unresolved.map((ie) => ({
        filename: ie.reference.widget_value,
        reference: ie.reference,
        reason: ie.reason,
        is_unresolved: !0
      })), W = v.value.models.ambiguous.map((ie) => ({
        filename: ie.reference.widget_value,
        reference: ie.reference,
        has_multiple_options: !0,
        options: ie.options.map((me) => ({
          model: me.model,
          match_confidence: me.match_confidence,
          match_type: me.match_type,
          has_download_source: me.has_download_source
        }))
      }));
      return [...Z, ...W];
    }), L = B(() => {
      let Z = 0;
      for (const W of x.value.values())
        W.action === "install" && Z++;
      for (const W of $.value.values())
        W.action === "select" && Z++;
      return Z;
    }), D = B(() => {
      let Z = 0;
      for (const W of $.value.values())
        W.action === "download" && Z++;
      return Z;
    }), z = B(() => {
      let Z = 0;
      for (const W of x.value.values())
        W.action === "optional" && Z++;
      for (const W of $.value.values())
        W.action === "optional" && Z++;
      return Z;
    }), R = B(() => {
      let Z = 0;
      for (const W of x.value.values())
        W.action === "skip" && Z++;
      for (const W of $.value.values())
        W.action === "skip" && Z++;
      return Z;
    });
    async function U() {
      g.value = !0, f.value = null;
      try {
        v.value = await h(s.workflowName);
      } catch (Z) {
        f.value = Z instanceof Error ? Z.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function X() {
      b.value.push("analysis"), T.value ? y.value = "nodes" : P.value ? y.value = "models" : y.value = "review";
    }
    function F(Z) {
      y.value = Z;
    }
    function M() {
      const Z = I.value.findIndex((W) => W.id === y.value);
      Z > 0 && (y.value = I.value[Z - 1].id);
    }
    function J() {
      _.value++;
    }
    function q() {
      _.value > 0 ? _.value-- : y.value = "analysis";
    }
    function _e() {
      b.value.push("nodes"), P.value ? y.value = "models" : y.value = "review";
    }
    function ve(Z) {
      console.log("Node search:", Z), x.value.set(Z, {
        action: "skip"
      });
    }
    function K(Z) {
      console.log("Manual entry for:", Z), x.value.set(Z, {
        action: "skip"
      });
    }
    function ye(Z) {
      console.log("[WorkflowResolveModal] handleNodeMarkOptional called with:", Z), x.value.set(Z, {
        action: "optional"
      }), console.log("[WorkflowResolveModal] nodeChoices after optional:", Array.from(x.value.entries()));
    }
    function te(Z) {
      console.log("[WorkflowResolveModal] handleNodeSkip called with:", Z), x.value.set(Z, {
        action: "skip"
      }), console.log("[WorkflowResolveModal] nodeChoices after skip:", Array.from(x.value.entries()));
    }
    function Se(Z, W) {
      const ie = N.value.find((me) => me.node_type === Z);
      if (ie && ie.options && ie.options[W]) {
        const me = ie.options[W];
        x.value.set(Z, {
          action: "install",
          package_id: me.package_id
        });
      }
    }
    function ge() {
      k.value++;
    }
    function ue() {
      k.value > 0 ? k.value-- : y.value = T.value ? "nodes" : "analysis";
    }
    function ze() {
      b.value.push("models"), y.value = "review";
    }
    function et(Z) {
      console.log("Model search:", Z), $.value.set(Z, {
        action: "skip"
      });
    }
    function Y(Z, W, ie) {
      $.value.set(Z, {
        action: "download",
        url: W,
        target_path: ie
      });
    }
    function ne(Z) {
      $.value.set(Z, {
        action: "optional"
      });
    }
    function he(Z) {
      $.value.set(Z, {
        action: "skip"
      });
    }
    function Pe(Z, W) {
      const ie = O.value.find((me) => me.filename === Z);
      if (ie && ie.options && ie.options[W]) {
        const me = ie.options[W];
        $.value.set(Z, {
          action: "select",
          selected_model: me.model
        });
      }
    }
    async function Ye() {
      m.value = !0, f.value = null;
      try {
        await p(s.workflowName, x.value, $.value), l("install"), l("refresh"), l("close");
      } catch (Z) {
        f.value = Z instanceof Error ? Z.message : "Failed to apply resolution";
      } finally {
        m.value = !1;
      }
    }
    return be(U), (Z, W) => (o(), w(ut, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: g.value,
      error: f.value || void 0,
      onClose: W[1] || (W[1] = (ie) => l("close"))
    }, {
      body: n(() => [
        g.value && !v.value ? (o(), a("div", ur, [...W[2] || (W[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : v.value ? (o(), a("div", mr, [
          c(ll, {
            steps: I.value,
            "current-step": y.value,
            "completed-steps": b.value,
            onStepChange: F
          }, null, 8, ["steps", "current-step", "completed-steps"]),
          y.value === "analysis" ? (o(), a("div", vr, [
            e("div", fr, [
              e("div", gr, [
                W[3] || (W[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", hr, " Found " + i(v.value.stats.total_nodes) + " nodes and " + i(v.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", pr, [
                e("div", yr, [
                  W[10] || (W[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", wr, [
                    e("div", kr, [
                      W[4] || (W[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", br, i(v.value.nodes.resolved.length), 1),
                      W[5] || (W[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    v.value.nodes.ambiguous.length > 0 ? (o(), a("div", _r, [
                      W[6] || (W[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", $r, i(v.value.nodes.ambiguous.length), 1),
                      W[7] || (W[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    v.value.nodes.unresolved.length > 0 ? (o(), a("div", Cr, [
                      W[8] || (W[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", xr, i(v.value.nodes.unresolved.length), 1),
                      W[9] || (W[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Sr, [
                  W[17] || (W[17] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Ir, [
                    e("div", Er, [
                      W[11] || (W[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zr, i(v.value.models.resolved.length), 1),
                      W[12] || (W[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    v.value.models.ambiguous.length > 0 ? (o(), a("div", Mr, [
                      W[13] || (W[13] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Lr, i(v.value.models.ambiguous.length), 1),
                      W[14] || (W[14] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    v.value.models.unresolved.length > 0 ? (o(), a("div", Rr, [
                      W[15] || (W[15] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Nr, i(v.value.models.unresolved.length), 1),
                      W[16] || (W[16] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              E.value ? (o(), a("div", Ur, [
                W[18] || (W[18] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Br, i(N.value.length + O.value.length) + " items need your input", 1)
              ])) : (o(), a("div", Tr, [...W[19] || (W[19] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : d("", !0),
          y.value === "nodes" ? (o(), w(ii, {
            key: 1,
            nodes: N.value,
            "current-index": _.value,
            "node-choices": x.value,
            "has-models": P.value,
            onNext: J,
            onPrevious: q,
            onComplete: _e,
            onSearch: ve,
            onManualEntry: K,
            onMarkOptional: ye,
            onSkip: te,
            onOptionSelected: Se
          }, null, 8, ["nodes", "current-index", "node-choices", "has-models"])) : d("", !0),
          y.value === "models" ? (o(), w(cr, {
            key: 2,
            models: O.value,
            "current-index": k.value,
            "model-choices": $.value,
            onNext: ge,
            onPrevious: ue,
            onComplete: ze,
            onSearch: et,
            onDownloadUrl: Y,
            onMarkOptional: ne,
            onSkip: he,
            onOptionSelected: Pe
          }, null, 8, ["models", "current-index", "model-choices"])) : d("", !0),
          y.value === "review" ? (o(), a("div", Dr, [
            e("div", Or, [
              W[24] || (W[24] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take for resolving this workflow's dependencies. ")
              ], -1)),
              e("div", Vr, [
                e("div", Ar, [
                  e("span", Wr, i(L.value), 1),
                  W[20] || (W[20] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Fr, [
                  e("span", Pr, i(D.value), 1),
                  W[21] || (W[21] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Hr, [
                  e("span", Gr, i(z.value), 1),
                  W[22] || (W[22] = e("span", { class: "stat-label" }, "marked optional", -1))
                ]),
                e("div", jr, [
                  e("span", Kr, i(R.value), 1),
                  W[23] || (W[23] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              x.value.size > 0 ? (o(), a("div", qr, [
                e("h4", Yr, "Node Packages (" + i(x.value.size) + ")", 1),
                e("div", Xr, [
                  (o(!0), a(H, null, Q(x.value, ([ie, me]) => (o(), a("div", {
                    key: ie,
                    class: "review-item"
                  }, [
                    e("code", Zr, i(ie), 1),
                    e("div", Jr, [
                      me.action === "install" ? (o(), a("span", Qr, i(me.package_id), 1)) : me.action === "optional" ? (o(), a("span", ed, " Optional ")) : me.action === "skip" ? (o(), a("span", td, " Skip ")) : d("", !0)
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              $.value.size > 0 ? (o(), a("div", od, [
                e("h4", sd, "Models (" + i($.value.size) + ")", 1),
                e("div", ad, [
                  (o(!0), a(H, null, Q($.value, ([ie, me]) => {
                    var He;
                    return o(), a("div", {
                      key: ie,
                      class: "review-item"
                    }, [
                      e("code", nd, i(ie), 1),
                      e("div", ld, [
                        me.action === "select" ? (o(), a("span", id, i((He = me.selected_model) == null ? void 0 : He.filename), 1)) : me.action === "download" ? (o(), a("span", rd, " Download ")) : me.action === "optional" ? (o(), a("span", dd, " Optional ")) : me.action === "skip" ? (o(), a("span", cd, " Skip ")) : d("", !0)
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              x.value.size === 0 && $.value.size === 0 ? (o(), a("div", ud, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: n(() => [
        c(oe, {
          variant: "secondary",
          onClick: W[0] || (W[0] = (ie) => l("close"))
        }, {
          default: n(() => [...W[25] || (W[25] = [
            u(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y.value === "analysis" ? (o(), w(oe, {
          key: 0,
          variant: "primary",
          disabled: g.value,
          onClick: X
        }, {
          default: n(() => [
            u(i(E.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        y.value === "review" ? (o(), w(oe, {
          key: 1,
          variant: "secondary",
          disabled: m.value,
          onClick: M
        }, {
          default: n(() => [...W[26] || (W[26] = [
            u(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        y.value === "review" ? (o(), w(oe, {
          key: 2,
          variant: "primary",
          disabled: m.value,
          loading: m.value,
          onClick: Ye
        }, {
          default: n(() => [...W[27] || (W[27] = [
            u(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), vd = /* @__PURE__ */ j(md, [["__scopeId", "data-v-eab8fcba"]]), fd = { class: "search-input-wrapper" }, gd = ["value", "placeholder"], hd = /* @__PURE__ */ G({
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
    const s = t, l = r, h = C(null);
    let p;
    function v(m) {
      const f = m.target.value;
      s.debounce > 0 ? (clearTimeout(p), p = window.setTimeout(() => {
        l("update:modelValue", f);
      }, s.debounce)) : l("update:modelValue", f);
    }
    function g() {
      var m;
      l("update:modelValue", ""), l("clear"), (m = h.value) == null || m.focus();
    }
    return be(() => {
      s.autoFocus && h.value && h.value.focus();
    }), (m, f) => (o(), a("div", fd, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: De(g, ["escape"])
      }, null, 40, gd),
      t.clearable && t.modelValue ? (o(), a("button", {
        key: 0,
        class: "clear-button",
        onClick: g,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), pd = /* @__PURE__ */ j(hd, [["__scopeId", "data-v-266f857a"]]), yd = { class: "search-bar" }, wd = /* @__PURE__ */ G({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, s) => (o(), a("div", yd, [
      c(pd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (l) => r.$emit("update:modelValue", l)),
        onClear: s[1] || (s[1] = (l) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Je = /* @__PURE__ */ j(wd, [["__scopeId", "data-v-3d51bbfd"]]), kd = { class: "section-group" }, bd = {
  key: 0,
  class: "section-content"
}, _d = /* @__PURE__ */ G({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const s = t, l = r, h = C(s.initiallyExpanded);
    function p() {
      s.collapsible && (h.value = !h.value, l("toggle", h.value));
    }
    return (v, g) => (o(), a("section", kd, [
      c(Ee, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: p
      }, {
        default: n(() => [
          u(i(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (o(), a("div", bd, [
        le(v.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), pe = /* @__PURE__ */ j(_d, [["__scopeId", "data-v-c48e33ed"]]), $d = { class: "item-header" }, Cd = {
  key: 0,
  class: "item-icon"
}, xd = { class: "item-info" }, Sd = {
  key: 0,
  class: "item-title"
}, Id = {
  key: 1,
  class: "item-subtitle"
}, Ed = {
  key: 0,
  class: "item-details"
}, zd = {
  key: 1,
  class: "item-actions"
}, Md = /* @__PURE__ */ G({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const s = t, l = B(() => s.status ? `status-${s.status}` : "");
    return (h, p) => (o(), a("div", {
      class: ee(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: p[0] || (p[0] = (v) => t.clickable && h.$emit("click"))
    }, [
      e("div", $d, [
        h.$slots.icon ? (o(), a("span", Cd, [
          le(h.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", xd, [
          h.$slots.title ? (o(), a("div", Sd, [
            le(h.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          h.$slots.subtitle ? (o(), a("div", Id, [
            le(h.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      h.$slots.details ? (o(), a("div", Ed, [
        le(h.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      h.$slots.actions ? (o(), a("div", zd, [
        le(h.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ke = /* @__PURE__ */ j(Md, [["__scopeId", "data-v-cc435e0e"]]), Ld = { class: "loading-state" }, Rd = { class: "loading-message" }, Nd = /* @__PURE__ */ G({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, s) => (o(), a("div", Ld, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Rd, i(t.message), 1)
    ]));
  }
}), Ve = /* @__PURE__ */ j(Nd, [["__scopeId", "data-v-ad8436c9"]]), Ud = { class: "error-state" }, Bd = { class: "error-message" }, Td = /* @__PURE__ */ G({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, s) => (o(), a("div", Ud, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Bd, i(t.message), 1),
      t.retry ? (o(), w(A, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => r.$emit("retry"))
      }, {
        default: n(() => [...s[1] || (s[1] = [
          u(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Ae = /* @__PURE__ */ j(Td, [["__scopeId", "data-v-5397be48"]]), Dd = /* @__PURE__ */ G({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const s = r, { getWorkflows: l } = xe(), h = C([]), p = C(!1), v = C(null), g = C(""), m = C(!0), f = C(!1), y = C(!1), b = C(!1), _ = C(null), k = B(
      () => h.value.filter((F) => F.status === "broken")
    ), x = B(
      () => h.value.filter((F) => F.status === "new")
    ), $ = B(
      () => h.value.filter((F) => F.status === "modified")
    ), I = B(
      () => h.value.filter((F) => F.status === "synced")
    ), E = B(() => {
      if (!g.value.trim()) return h.value;
      const F = g.value.toLowerCase();
      return h.value.filter((M) => M.name.toLowerCase().includes(F));
    }), T = B(
      () => k.value.filter(
        (F) => !g.value.trim() || F.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), P = B(
      () => x.value.filter(
        (F) => !g.value.trim() || F.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), N = B(
      () => $.value.filter(
        (F) => !g.value.trim() || F.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), O = B(
      () => I.value.filter(
        (F) => !g.value.trim() || F.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), L = B(
      () => f.value ? O.value : O.value.slice(0, 5)
    );
    async function D() {
      p.value = !0, v.value = null;
      try {
        h.value = await l();
      } catch (F) {
        v.value = F instanceof Error ? F.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    function z(F) {
      _.value = F, y.value = !0;
    }
    function R(F) {
      _.value = F, b.value = !0;
    }
    function U() {
      alert("Bulk resolution not yet implemented");
    }
    function X() {
      s("refresh");
    }
    return be(D), (F, M) => (o(), a(H, null, [
      c($e, null, {
        header: n(() => [
          c(Ce, { title: "WORKFLOWS" }, {
            actions: n(() => [
              k.value.length > 0 ? (o(), w(A, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: n(() => [...M[7] || (M[7] = [
                  u(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          c(Je, {
            modelValue: g.value,
            "onUpdate:modelValue": M[0] || (M[0] = (J) => g.value = J),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          p.value ? (o(), w(Ve, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), w(Ae, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            T.value.length ? (o(), w(pe, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(T.value, (J) => (o(), w(ke, {
                  key: J.name,
                  status: "broken"
                }, {
                  icon: n(() => [...M[8] || (M[8] = [
                    u("⚠", -1)
                  ])]),
                  title: n(() => [
                    u(i(J.name), 1)
                  ]),
                  subtitle: n(() => [
                    u(" Missing: " + i(J.missing_nodes) + " nodes, " + i(J.missing_models) + " models ", 1)
                  ]),
                  actions: n(() => [
                    c(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => R(J.name)
                    }, {
                      default: n(() => [...M[9] || (M[9] = [
                        u(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    c(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => z(J.name)
                    }, {
                      default: n(() => [...M[10] || (M[10] = [
                        u(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            P.value.length ? (o(), w(pe, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(P.value, (J) => (o(), w(ke, {
                  key: J.name,
                  status: "new"
                }, {
                  icon: n(() => [...M[11] || (M[11] = [
                    u("●", -1)
                  ])]),
                  title: n(() => [
                    u(i(J.name), 1)
                  ]),
                  subtitle: n(() => [...M[12] || (M[12] = [
                    u("New", -1)
                  ])]),
                  actions: n(() => [
                    c(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => z(J.name)
                    }, {
                      default: n(() => [...M[13] || (M[13] = [
                        u(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            N.value.length ? (o(), w(pe, {
              key: 2,
              title: "MODIFIED",
              count: N.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(N.value, (J) => (o(), w(ke, {
                  key: J.name,
                  status: "modified"
                }, {
                  icon: n(() => [...M[14] || (M[14] = [
                    u("⚡", -1)
                  ])]),
                  title: n(() => [
                    u(i(J.name), 1)
                  ]),
                  subtitle: n(() => [...M[15] || (M[15] = [
                    u("Modified", -1)
                  ])]),
                  actions: n(() => [
                    c(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => z(J.name)
                    }, {
                      default: n(() => [...M[16] || (M[16] = [
                        u(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            O.value.length ? (o(), w(pe, {
              key: 3,
              title: "SYNCED",
              count: O.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: M[2] || (M[2] = (J) => m.value = J)
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(L.value, (J) => (o(), w(ke, {
                  key: J.name,
                  status: "synced"
                }, {
                  icon: n(() => [...M[17] || (M[17] = [
                    u("✓", -1)
                  ])]),
                  title: n(() => [
                    u(i(J.name), 1)
                  ]),
                  subtitle: n(() => [...M[18] || (M[18] = [
                    u("Synced", -1)
                  ])]),
                  actions: n(() => [
                    c(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => z(J.name)
                    }, {
                      default: n(() => [...M[19] || (M[19] = [
                        u(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !f.value && O.value.length > 5 ? (o(), w(A, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: M[1] || (M[1] = (J) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: n(() => [
                    u(" View all " + i(O.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            E.value.length ? d("", !0) : (o(), w(Ue, {
              key: 4,
              icon: "📭",
              message: g.value ? `No workflows match '${g.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y.value && _.value ? (o(), w(qn, {
        key: 0,
        "workflow-name": _.value,
        onClose: M[3] || (M[3] = (J) => y.value = !1),
        onResolve: M[4] || (M[4] = (J) => R(_.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && _.value ? (o(), w(vd, {
        key: 1,
        "workflow-name": _.value,
        onClose: M[5] || (M[5] = (J) => b.value = !1),
        onInstall: X,
        onRefresh: M[6] || (M[6] = (J) => s("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Od = /* @__PURE__ */ j(Dd, [["__scopeId", "data-v-ee63730e"]]), Vd = /* @__PURE__ */ G({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, s) => (o(), a("div", {
      class: ee(["summary-bar", t.variant])
    }, [
      le(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Qe = /* @__PURE__ */ j(Vd, [["__scopeId", "data-v-ccb7816e"]]), Ad = /* @__PURE__ */ G({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const s = r, { getEnvironmentModels: l, getStatus: h } = xe(), p = C([]), v = C([]), g = C("production"), m = C(!1), f = C(null), y = C(""), b = C(!1);
    function _() {
      b.value = !1, s("navigate", "model-index");
    }
    const k = B(
      () => p.value.reduce((z, R) => z + (R.size || 0), 0)
    ), x = B(() => {
      if (!y.value.trim()) return p.value;
      const z = y.value.toLowerCase();
      return p.value.filter((R) => R.filename.toLowerCase().includes(z));
    }), $ = B(() => {
      if (!y.value.trim()) return v.value;
      const z = y.value.toLowerCase();
      return v.value.filter((R) => R.filename.toLowerCase().includes(z));
    }), I = B(
      () => x.value.filter((z) => z.type === "checkpoints")
    ), E = B(
      () => x.value.filter((z) => z.type === "loras")
    ), T = B(
      () => x.value.filter((z) => z.type !== "checkpoints" && z.type !== "loras")
    );
    function P(z) {
      if (!z) return "Unknown";
      const R = z / (1024 * 1024);
      return R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB`;
    }
    function N(z) {
      s("navigate", "model-index");
    }
    function O(z) {
      s("navigate", "model-index");
    }
    function L(z) {
      alert(`Download functionality not yet implemented for ${z}`);
    }
    async function D() {
      m.value = !0, f.value = null;
      try {
        const z = await l();
        p.value = z, v.value = [];
        const R = await h();
        g.value = R.environment || "production";
      } catch (z) {
        f.value = z instanceof Error ? z.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return be(D), (z, R) => (o(), a(H, null, [
      c($e, null, {
        header: n(() => [
          c(Ce, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (U) => b.value = !0)
          })
        ]),
        search: n(() => [
          c(Je, {
            modelValue: y.value,
            "onUpdate:modelValue": R[1] || (R[1] = (U) => y.value = U),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          m.value ? (o(), w(Ve, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (o(), w(Ae, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            p.value.length ? (o(), w(Qe, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                u(" Total: " + i(p.value.length) + " models • " + i(P(k.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            I.value.length ? (o(), w(pe, {
              key: 1,
              title: "CHECKPOINTS",
              count: I.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(I.value, (U) => (o(), w(ke, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...R[3] || (R[3] = [
                    u("📦", -1)
                  ])]),
                  title: n(() => [
                    u(i(U.filename), 1)
                  ]),
                  subtitle: n(() => [
                    u(i(P(U.size)), 1)
                  ]),
                  details: n(() => [
                    c(se, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    c(se, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    c(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => N(U.hash)
                    }, {
                      default: n(() => [...R[4] || (R[4] = [
                        u(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            E.value.length ? (o(), w(pe, {
              key: 2,
              title: "LORAS",
              count: E.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(E.value, (U) => (o(), w(ke, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...R[5] || (R[5] = [
                    u("📦", -1)
                  ])]),
                  title: n(() => [
                    u(i(U.filename), 1)
                  ]),
                  subtitle: n(() => [
                    u(i(P(U.size)), 1)
                  ]),
                  details: n(() => [
                    c(se, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    c(se, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    c(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => N(U.hash)
                    }, {
                      default: n(() => [...R[6] || (R[6] = [
                        u(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            T.value.length ? (o(), w(pe, {
              key: 3,
              title: "OTHER",
              count: T.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(T.value, (U) => (o(), w(ke, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...R[7] || (R[7] = [
                    u("📦", -1)
                  ])]),
                  title: n(() => [
                    u(i(U.filename), 1)
                  ]),
                  subtitle: n(() => [
                    u(i(P(U.size)), 1)
                  ]),
                  details: n(() => [
                    c(se, {
                      label: "Type:",
                      value: U.type
                    }, null, 8, ["value"]),
                    c(se, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    c(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => N(U.hash)
                    }, {
                      default: n(() => [...R[8] || (R[8] = [
                        u(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            $.value.length ? (o(), w(pe, {
              key: 4,
              title: "MISSING",
              count: $.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q($.value, (U) => (o(), w(ke, {
                  key: U.filename,
                  status: "broken"
                }, {
                  icon: n(() => [...R[9] || (R[9] = [
                    u("⚠", -1)
                  ])]),
                  title: n(() => [
                    u(i(U.filename), 1)
                  ]),
                  subtitle: n(() => [...R[10] || (R[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: n(() => {
                    var X;
                    return [
                      c(se, {
                        label: "Required by:",
                        value: ((X = U.workflow_names) == null ? void 0 : X.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: n(() => [
                    c(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => L(U.filename)
                    }, {
                      default: n(() => [...R[11] || (R[11] = [
                        u(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    c(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (X) => O(U.filename)
                    }, {
                      default: n(() => [...R[12] || (R[12] = [
                        u(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !x.value.length && !$.value.length ? (o(), w(Ue, {
              key: 5,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      c(Oe, {
        show: b.value,
        title: "About Environment Models",
        onClose: R[2] || (R[2] = (U) => b.value = !1)
      }, {
        content: n(() => [
          e("p", null, [
            R[13] || (R[13] = u(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + i(g.value) + '"', 1),
            R[14] || (R[14] = u(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: n(() => [
          c(A, {
            variant: "primary",
            onClick: _
          }, {
            default: n(() => [...R[15] || (R[15] = [
              u(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Wd = /* @__PURE__ */ j(Ad, [["__scopeId", "data-v-72675609"]]), Fd = /* @__PURE__ */ G({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: r } = xe(), s = C([]), l = C(!1), h = C(null), p = C(""), v = C(!1), g = B(
      () => s.value.reduce((L, D) => L + (D.size_mb || D.size || 0), 0)
    ), m = B(() => {
      const L = /* @__PURE__ */ new Set();
      return s.value.forEach((D) => {
        D.used_in_environments && D.used_in_environments.length > 0 && D.used_in_environments.forEach((z) => L.add(z.env_name));
      }), L.size;
    }), f = B(() => {
      if (!p.value.trim()) return s.value;
      const L = p.value.toLowerCase();
      return s.value.filter((D) => {
        const z = D, R = D.sha256 || z.sha256_hash || "";
        return D.filename.toLowerCase().includes(L) || R.toLowerCase().includes(L);
      });
    }), y = B(
      () => f.value.filter((L) => L.type === "checkpoints")
    ), b = B(
      () => f.value.filter((L) => L.type === "loras")
    ), _ = B(
      () => f.value.filter((L) => L.type !== "checkpoints" && L.type !== "loras")
    );
    function k(L) {
      return L ? L >= 1024 ? `${(L / 1024).toFixed(1)} GB` : `${L.toFixed(0)} MB` : "Unknown";
    }
    function x(L) {
      const D = L, z = L.used_in_workflows || D.used_by || [];
      return !z || z.length === 0 ? "Not used" : `${z.length} workflow(s)`;
    }
    function $(L) {
      navigator.clipboard.writeText(L), alert("Hash copied to clipboard");
    }
    function I(L) {
      prompt("Enter model source URL:", L.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function E(L) {
      const D = L, z = L.used_in_workflows || D.used_by || [], R = z && z.length > 0 ? `

⚠ WARNING: This model is used by ${z.length} workflow(s):
${z.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${L.filename}?${R}

This will free ${k(D.size_mb || L.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function T() {
      alert("Scan for models not yet implemented");
    }
    function P() {
      alert("Change directory not yet implemented");
    }
    function N() {
      alert("Download new model not yet implemented");
    }
    async function O() {
      l.value = !0, h.value = null;
      try {
        s.value = await r(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", y.value), console.log("Filtered loras:", b.value), console.log("Filtered other:", _.value);
      } catch (L) {
        h.value = L instanceof Error ? L.message : "Failed to load workspace models";
      } finally {
        l.value = !1;
      }
    }
    return be(O), (L, D) => (o(), a(H, null, [
      c($e, null, {
        header: n(() => [
          c(Ce, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: D[0] || (D[0] = (z) => v.value = !0)
          }, {
            actions: n(() => [
              c(A, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: n(() => [...D[3] || (D[3] = [
                  u(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              c(A, {
                variant: "primary",
                size: "sm",
                onClick: P
              }, {
                default: n(() => [...D[4] || (D[4] = [
                  u(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              c(A, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: n(() => [...D[5] || (D[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  u(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          c(Je, {
            modelValue: p.value,
            "onUpdate:modelValue": D[1] || (D[1] = (z) => p.value = z),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          l.value ? (o(), w(Ve, {
            key: 0,
            message: "Loading workspace models..."
          })) : h.value ? (o(), w(Ae, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            s.value.length ? (o(), w(Qe, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                u(" Total: " + i(s.value.length) + " models • " + i(k(g.value)) + " • Used in " + i(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            y.value.length ? (o(), w(pe, {
              key: 1,
              title: "CHECKPOINTS",
              count: y.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(y.value, (z) => (o(), w(ke, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...D[6] || (D[6] = [
                    u("📦", -1)
                  ])]),
                  title: n(() => [
                    u(i(z.filename), 1)
                  ]),
                  subtitle: n(() => [
                    u(i(k(z.size_mb || z.size)), 1)
                  ]),
                  details: n(() => {
                    var R, U;
                    return [
                      z.sha256 || z.sha256_hash ? (o(), w(se, {
                        key: 0,
                        label: "SHA256:",
                        value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      c(se, {
                        label: "Used in:",
                        value: x(z)
                      }, null, 8, ["value"]),
                      z.source_url || (R = z.sources) != null && R[0] ? (o(), w(se, {
                        key: 1,
                        label: "Source URL:",
                        value: z.source_url || ((U = z.sources) == null ? void 0 : U[0])
                      }, null, 8, ["value"])) : (o(), w(se, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...D[7] || (D[7] = [
                          u("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    c(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => I(z)
                    }, {
                      default: n(() => [...D[8] || (D[8] = [
                        u(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), w(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => $(z.sha256 || z.sha256_hash)
                    }, {
                      default: n(() => [...D[9] || (D[9] = [
                        u(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    c(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => E(z)
                    }, {
                      default: n(() => [...D[10] || (D[10] = [
                        u(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            b.value.length ? (o(), w(pe, {
              key: 2,
              title: "LORAS",
              count: b.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(b.value, (z) => (o(), w(ke, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...D[11] || (D[11] = [
                    u("📦", -1)
                  ])]),
                  title: n(() => [
                    u(i(z.filename), 1)
                  ]),
                  subtitle: n(() => [
                    u(i(k(z.size_mb || z.size)), 1)
                  ]),
                  details: n(() => {
                    var R, U;
                    return [
                      z.sha256 || z.sha256_hash ? (o(), w(se, {
                        key: 0,
                        label: "SHA256:",
                        value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      c(se, {
                        label: "Used in:",
                        value: x(z)
                      }, null, 8, ["value"]),
                      z.source_url || (R = z.sources) != null && R[0] ? (o(), w(se, {
                        key: 1,
                        label: "Source URL:",
                        value: z.source_url || ((U = z.sources) == null ? void 0 : U[0])
                      }, null, 8, ["value"])) : (o(), w(se, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...D[12] || (D[12] = [
                          u("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    c(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => I(z)
                    }, {
                      default: n(() => [...D[13] || (D[13] = [
                        u(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), w(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => $(z.sha256 || z.sha256_hash)
                    }, {
                      default: n(() => [...D[14] || (D[14] = [
                        u(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    c(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => E(z)
                    }, {
                      default: n(() => [...D[15] || (D[15] = [
                        u(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            _.value.length ? (o(), w(pe, {
              key: 3,
              title: "OTHER",
              count: _.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(_.value, (z) => (o(), w(ke, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...D[16] || (D[16] = [
                    u("📦", -1)
                  ])]),
                  title: n(() => [
                    u(i(z.filename), 1)
                  ]),
                  subtitle: n(() => [
                    u(i(k(z.size_mb || z.size)), 1)
                  ]),
                  details: n(() => [
                    c(se, {
                      label: "Type:",
                      value: z.type
                    }, null, 8, ["value"]),
                    z.sha256 || z.sha256_hash ? (o(), w(se, {
                      key: 0,
                      label: "SHA256:",
                      value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    c(se, {
                      label: "Used in:",
                      value: x(z)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    c(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => I(z)
                    }, {
                      default: n(() => [...D[17] || (D[17] = [
                        u(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), w(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (R) => $(z.sha256 || z.sha256_hash)
                    }, {
                      default: n(() => [...D[18] || (D[18] = [
                        u(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    c(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (R) => E(z)
                    }, {
                      default: n(() => [...D[19] || (D[19] = [
                        u(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            f.value.length ? d("", !0) : (o(), w(Ue, {
              key: 4,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      c(Oe, {
        show: v.value,
        title: "About Workspace Model Index",
        onClose: D[2] || (D[2] = (z) => v.value = !1)
      }, {
        content: n(() => [...D[20] || (D[20] = [
          e("p", null, [
            u(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            u(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Pd = /* @__PURE__ */ j(Fd, [["__scopeId", "data-v-5a24af01"]]), Hd = { key: 0 }, Gd = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, jd = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Kd = /* @__PURE__ */ G({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: r, installNode: s, updateNode: l, uninstallNode: h } = xe(), p = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), v = C(!1), g = C(null), m = C(""), f = C(!1), y = B(() => {
      if (!m.value.trim()) return p.value.nodes;
      const N = m.value.toLowerCase();
      return p.value.nodes.filter(
        (O) => {
          var L, D;
          return O.name.toLowerCase().includes(N) || ((L = O.description) == null ? void 0 : L.toLowerCase().includes(N)) || ((D = O.repository) == null ? void 0 : D.toLowerCase().includes(N));
        }
      );
    }), b = B(
      () => y.value.filter((N) => N.installed)
    ), _ = B(
      () => y.value.filter((N) => !N.installed)
    );
    function k(N) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[N] || N;
    }
    function x(N) {
      return !N.used_in_workflows || N.used_in_workflows.length === 0 ? "Not used in any workflows" : N.used_in_workflows.length === 1 ? N.used_in_workflows[0] : `${N.used_in_workflows.length} workflows`;
    }
    function $(N) {
      window.open(N, "_blank");
    }
    async function I(N) {
      if (confirm(`Install node "${N}"?

This will download and install the node from its repository.`))
        try {
          v.value = !0;
          const O = await s(N);
          O.status === "success" ? (alert(`Node "${N}" installed successfully!`), await P()) : alert(`Failed to install node: ${O.message || "Unknown error"}`);
        } catch (O) {
          alert(`Error installing node: ${O instanceof Error ? O.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function E(N) {
      if (confirm(`Check for updates for "${N}"?`))
        try {
          v.value = !0;
          const O = await l(N);
          O.status === "success" ? (alert(`Node "${N}" is up to date or has been updated!`), await P()) : alert(`Update check failed: ${O.message || "Unknown error"}`);
        } catch (O) {
          alert(`Error checking for updates: ${O instanceof Error ? O.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function T(N) {
      if (confirm(`Uninstall node "${N}"?

This will remove the node from this environment.`))
        try {
          v.value = !0;
          const O = await h(N);
          O.status === "success" ? (alert(`Node "${N}" uninstalled successfully!`), await P()) : alert(`Failed to uninstall node: ${O.message || "Unknown error"}`);
        } catch (O) {
          alert(`Error uninstalling node: ${O instanceof Error ? O.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function P() {
      v.value = !0, g.value = null;
      try {
        p.value = await r();
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return be(P), (N, O) => (o(), a(H, null, [
      c($e, null, {
        header: n(() => [
          c(Ce, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (L) => f.value = !0)
          })
        ]),
        search: n(() => [
          c(Je, {
            modelValue: m.value,
            "onUpdate:modelValue": O[1] || (O[1] = (L) => m.value = L),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          v.value ? (o(), w(Ve, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : g.value ? (o(), w(Ae, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            p.value.total_count ? (o(), w(Qe, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                u(" Total: " + i(p.value.total_count) + " nodes • " + i(p.value.installed_count) + " installed • " + i(p.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : d("", !0),
            b.value.length ? (o(), w(pe, {
              key: 1,
              title: "INSTALLED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(b.value, (L) => (o(), w(ke, {
                  key: L.name,
                  status: "synced"
                }, {
                  icon: n(() => [...O[4] || (O[4] = [
                    u("📦", -1)
                  ])]),
                  title: n(() => [
                    u(i(L.name), 1)
                  ]),
                  subtitle: n(() => [
                    L.version ? (o(), a("span", Hd, "v" + i(L.version), 1)) : (o(), a("span", Gd, "version unknown")),
                    L.source ? (o(), a("span", jd, " • " + i(k(L.source)), 1)) : d("", !0)
                  ]),
                  details: n(() => [
                    L.description ? (o(), w(se, {
                      key: 0,
                      label: "Description:",
                      value: L.description
                    }, null, 8, ["value"])) : d("", !0),
                    L.repository ? (o(), w(se, {
                      key: 1,
                      label: "Repository:",
                      value: L.repository
                    }, null, 8, ["value"])) : d("", !0),
                    c(se, {
                      label: "Used by:",
                      value: x(L)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    L.repository ? (o(), w(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => $(L.repository)
                    }, {
                      default: n(() => [...O[5] || (O[5] = [
                        u(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    L.source === "registry" ? (o(), w(A, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (D) => E(L.name)
                    }, {
                      default: n(() => [...O[6] || (O[6] = [
                        u(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    L.source !== "unknown" ? (o(), w(A, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (D) => T(L.name)
                    }, {
                      default: n(() => [...O[7] || (O[7] = [
                        u(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            _.value.length ? (o(), w(pe, {
              key: 2,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(_.value, (L) => (o(), w(ke, {
                  key: L.name,
                  status: "missing"
                }, {
                  icon: n(() => [...O[8] || (O[8] = [
                    u("⚠", -1)
                  ])]),
                  title: n(() => [
                    u(i(L.name), 1)
                  ]),
                  subtitle: n(() => [...O[9] || (O[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: n(() => [
                    L.description ? (o(), w(se, {
                      key: 0,
                      label: "Description:",
                      value: L.description
                    }, null, 8, ["value"])) : d("", !0),
                    L.repository ? (o(), w(se, {
                      key: 1,
                      label: "Repository:",
                      value: L.repository
                    }, null, 8, ["value"])) : d("", !0),
                    c(se, {
                      label: "Required by:",
                      value: x(L)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    L.download_url ? (o(), w(A, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (D) => I(L.name)
                    }, {
                      default: n(() => [...O[10] || (O[10] = [
                        u(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    L.repository ? (o(), w(A, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (D) => $(L.repository)
                    }, {
                      default: n(() => [...O[11] || (O[11] = [
                        u(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !b.value.length && !_.value.length ? (o(), w(Ue, {
              key: 3,
              icon: "📭",
              message: m.value ? `No nodes match '${m.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      c(Oe, {
        show: f.value,
        title: "About Git-Tracked Nodes",
        onClose: O[3] || (O[3] = (L) => f.value = !1)
      }, {
        content: n(() => [...O[12] || (O[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            u(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            u(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: n(() => [
          c(A, {
            variant: "primary",
            onClick: O[2] || (O[2] = (L) => f.value = !1)
          }, {
            default: n(() => [...O[13] || (O[13] = [
              u(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), qd = /* @__PURE__ */ j(Kd, [["__scopeId", "data-v-c480e2c1"]]), Yd = { class: "remote-url-display" }, Xd = ["title"], Zd = ["title"], Jd = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Qd = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ec = /* @__PURE__ */ G({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, s = C(!1), l = B(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const p = r.url.slice(0, Math.floor(r.maxLength * 0.6)), v = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${p}...${v}`;
    });
    async function h() {
      try {
        await navigator.clipboard.writeText(r.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy URL:", p);
      }
    }
    return (p, v) => (o(), a("div", Yd, [
      e("span", {
        class: "url-text",
        title: t.url
      }, i(l.value), 9, Xd),
      e("button", {
        class: ee(["copy-btn", { copied: s.value }]),
        onClick: h,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), a("svg", Qd, [...v[1] || (v[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), a("svg", Jd, [...v[0] || (v[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Zd)
    ]));
  }
}), St = /* @__PURE__ */ j(ec, [["__scopeId", "data-v-7768a58d"]]), tc = { class: "remote-title" }, oc = {
  key: 0,
  class: "default-badge"
}, sc = {
  key: 1,
  class: "sync-badge"
}, ac = {
  key: 0,
  class: "ahead"
}, nc = {
  key: 1,
  class: "behind"
}, lc = {
  key: 0,
  class: "tracking-info"
}, ic = /* @__PURE__ */ G({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const s = t, l = B(() => s.fetchingRemote === s.remote.name), h = B(() => s.remote.is_default), p = B(() => !!s.trackingBranch);
    function v(g) {
      const m = new Date(g), y = (/* @__PURE__ */ new Date()).getTime() - m.getTime(), b = Math.floor(y / 6e4);
      if (b < 1) return "Just now";
      if (b < 60) return `${b}m ago`;
      const _ = Math.floor(b / 60);
      if (_ < 24) return `${_}h ago`;
      const k = Math.floor(_ / 24);
      return k < 7 ? `${k}d ago` : m.toLocaleDateString();
    }
    return (g, m) => (o(), w(ke, {
      status: h.value ? "synced" : void 0
    }, {
      icon: n(() => [
        u(i(h.value ? "🔗" : "🌐"), 1)
      ]),
      title: n(() => [
        e("div", tc, [
          e("span", null, i(t.remote.name), 1),
          h.value ? (o(), a("span", oc, "DEFAULT")) : d("", !0),
          t.syncStatus ? (o(), a("span", sc, [
            t.syncStatus.ahead > 0 ? (o(), a("span", ac, "↑" + i(t.syncStatus.ahead), 1)) : d("", !0),
            t.syncStatus.behind > 0 ? (o(), a("span", nc, "↓" + i(t.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: n(() => [
        p.value ? (o(), a("span", lc, " Tracking: " + i(t.trackingBranch), 1)) : d("", !0)
      ]),
      details: n(() => {
        var f;
        return [
          c(se, { label: "Fetch:" }, {
            default: n(() => [
              c(St, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), w(se, {
            key: 0,
            label: "Push:"
          }, {
            default: n(() => [
              c(St, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (f = t.syncStatus) != null && f.last_fetch ? (o(), w(se, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: n(() => [
              e("span", null, i(v(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: n(() => [
        c(A, {
          variant: "primary",
          size: "xs",
          loading: l.value,
          onClick: m[0] || (m[0] = (f) => g.$emit("fetch", t.remote.name))
        }, {
          default: n(() => [...m[3] || (m[3] = [
            u(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        c(A, {
          variant: "secondary",
          size: "xs",
          onClick: m[1] || (m[1] = (f) => g.$emit("edit", t.remote.name))
        }, {
          default: n(() => [...m[4] || (m[4] = [
            u(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        h.value ? d("", !0) : (o(), w(A, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[2] || (m[2] = (f) => g.$emit("remove", t.remote.name))
        }, {
          default: n(() => [...m[5] || (m[5] = [
            u(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), rc = /* @__PURE__ */ j(ic, [["__scopeId", "data-v-17362e45"]]), dc = ["for"], cc = {
  key: 0,
  class: "base-form-field-required"
}, uc = { class: "base-form-field-input" }, mc = {
  key: 1,
  class: "base-form-field-error"
}, vc = {
  key: 2,
  class: "base-form-field-hint"
}, fc = /* @__PURE__ */ G({
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
    const r = t, s = B(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (l, h) => (o(), a("div", {
      class: ee(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), a("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        u(i(t.label) + " ", 1),
        t.required ? (o(), a("span", cc, "*")) : d("", !0)
      ], 8, dc)) : d("", !0),
      e("div", uc, [
        le(l.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), a("span", mc, i(t.error), 1)) : t.hint ? (o(), a("span", vc, i(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), ft = /* @__PURE__ */ j(fc, [["__scopeId", "data-v-9a1cf296"]]), gc = { class: "remote-form" }, hc = { class: "form-header" }, pc = { class: "form-body" }, yc = {
  key: 0,
  class: "form-error"
}, wc = { class: "form-actions" }, kc = /* @__PURE__ */ G({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const s = t, l = r, h = C({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), p = C(!1), v = C(null);
    zt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      h.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const g = B(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function m() {
      if (!(!g.value || p.value)) {
        v.value = null, p.value = !0;
        try {
          l("submit", h.value);
        } catch (f) {
          v.value = f instanceof Error ? f.message : "Failed to submit form";
        } finally {
          p.value = !1;
        }
      }
    }
    return (f, y) => (o(), a("div", gc, [
      e("div", hc, [
        c(Ee, null, {
          default: n(() => [
            u(i(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", pc, [
        c(ft, {
          label: "Remote Name",
          required: ""
        }, {
          default: n(() => [
            c(Fe, {
              modelValue: h.value.name,
              "onUpdate:modelValue": y[0] || (y[0] = (b) => h.value.name = b),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        c(ft, {
          label: "Fetch URL",
          required: ""
        }, {
          default: n(() => [
            c(Fe, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (b) => h.value.fetchUrl = b),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c(ft, { label: "Push URL (optional)" }, {
          default: n(() => [
            c(Fe, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": y[2] || (y[2] = (b) => h.value.pushUrl = b),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (o(), a("div", yc, i(v.value), 1)) : d("", !0)
      ]),
      e("div", wc, [
        c(A, {
          variant: "primary",
          size: "md",
          disabled: !g.value,
          loading: p.value,
          onClick: m
        }, {
          default: n(() => [
            u(i(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        c(A, {
          variant: "ghost",
          size: "md",
          onClick: y[3] || (y[3] = (b) => f.$emit("cancel"))
        }, {
          default: n(() => [...y[4] || (y[4] = [
            u(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), bc = /* @__PURE__ */ j(kc, [["__scopeId", "data-v-56021b18"]]), _c = { key: 0 }, $c = /* @__PURE__ */ G({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: s,
      removeRemote: l,
      updateRemoteUrl: h,
      fetchRemote: p,
      getRemoteSyncStatus: v
    } = xe(), g = C([]), m = C(null), f = C({}), y = C(!1), b = C(null), _ = C(""), k = C(!1), x = C(null), $ = C(!1), I = C("add"), E = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = B(() => {
      if (!_.value.trim()) return g.value;
      const F = _.value.toLowerCase();
      return g.value.filter(
        (M) => M.name.toLowerCase().includes(F) || M.fetch_url.toLowerCase().includes(F) || M.push_url.toLowerCase().includes(F)
      );
    });
    function P(F) {
      var M;
      return ((M = m.value) == null ? void 0 : M.remote) === F;
    }
    async function N() {
      y.value = !0, b.value = null;
      try {
        const F = await r();
        g.value = F.remotes, m.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (M) => {
            const J = await v(M.name);
            J && (f.value[M.name] = J);
          })
        );
      } catch (F) {
        b.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        y.value = !1;
      }
    }
    function O() {
      I.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, $.value = !0;
    }
    function L(F) {
      const M = g.value.find((J) => J.name === F);
      M && (I.value = "edit", E.value = {
        name: M.name,
        fetchUrl: M.fetch_url,
        pushUrl: M.push_url
      }, $.value = !0);
    }
    async function D(F) {
      try {
        I.value === "add" ? await s(F.name, F.fetchUrl) : await h(F.name, F.fetchUrl, F.pushUrl || void 0), $.value = !1, await N();
      } catch (M) {
        b.value = M instanceof Error ? M.message : "Operation failed";
      }
    }
    function z() {
      $.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function R(F) {
      x.value = F;
      try {
        await p(F);
        const M = await v(F);
        M && (f.value[F] = M);
      } catch (M) {
        b.value = M instanceof Error ? M.message : "Fetch failed";
      } finally {
        x.value = null;
      }
    }
    async function U(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await l(F), await N();
        } catch (M) {
          b.value = M instanceof Error ? M.message : "Failed to remove remote";
        }
    }
    function X() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return be(N), (F, M) => (o(), a(H, null, [
      c($e, null, {
        header: n(() => [
          c(Ce, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (J) => k.value = !0)
          }, {
            actions: n(() => [
              $.value ? d("", !0) : (o(), w(A, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: n(() => [...M[3] || (M[3] = [
                  u(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          $.value ? d("", !0) : (o(), w(Je, {
            key: 0,
            modelValue: _.value,
            "onUpdate:modelValue": M[1] || (M[1] = (J) => _.value = J),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: n(() => [
          y.value ? (o(), w(Ve, {
            key: 0,
            message: "Loading remotes..."
          })) : b.value ? (o(), w(Ae, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            $.value ? (o(), w(bc, {
              key: 0,
              mode: I.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: D,
              onCancel: z
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            g.value.length && !$.value ? (o(), w(Qe, {
              key: 1,
              variant: "compact"
            }, {
              default: n(() => [
                u(" Total: " + i(g.value.length) + " remote" + i(g.value.length !== 1 ? "s" : "") + " ", 1),
                m.value ? (o(), a("span", _c, " • Tracking: " + i(m.value.remote) + "/" + i(m.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            T.value.length && !$.value ? (o(), w(pe, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: n(() => [
                (o(!0), a(H, null, Q(T.value, (J) => {
                  var q;
                  return o(), w(rc, {
                    key: J.name,
                    remote: J,
                    "sync-status": f.value[J.name],
                    "tracking-branch": P(J.name) ? (q = m.value) == null ? void 0 : q.branch : void 0,
                    "fetching-remote": x.value,
                    onFetch: R,
                    onEdit: L,
                    onRemove: U
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !T.value.length && !$.value ? (o(), w(Ue, {
              key: 3,
              icon: "🌐",
              message: _.value ? `No remotes match '${_.value}'` : "No remotes configured."
            }, {
              actions: n(() => [
                c(A, {
                  variant: "primary",
                  onClick: O
                }, {
                  default: n(() => [...M[4] || (M[4] = [
                    u(" Add Your First Remote ", -1)
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
      c(Oe, {
        show: k.value,
        title: "About Git Remotes",
        onClose: M[2] || (M[2] = (J) => k.value = !1)
      }, {
        content: n(() => [...M[5] || (M[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            u(" The "),
            e("strong", null, '"origin"'),
            u(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: n(() => [
          c(A, {
            variant: "link",
            onClick: X
          }, {
            default: n(() => [...M[6] || (M[6] = [
              u(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Cc = /* @__PURE__ */ j($c, [["__scopeId", "data-v-a75719bb"]]), xc = { class: "setting-info" }, Sc = { class: "setting-label" }, Ic = {
  key: 0,
  class: "required-marker"
}, Ec = {
  key: 0,
  class: "setting-description"
}, zc = { class: "setting-control" }, Mc = /* @__PURE__ */ G({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, s) => (o(), a("div", {
      class: ee(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", xc, [
        e("div", Sc, [
          u(i(t.label) + " ", 1),
          t.required ? (o(), a("span", Ic, "*")) : d("", !0)
        ]),
        t.description ? (o(), a("div", Ec, i(t.description), 1)) : d("", !0)
      ]),
      e("div", zc, [
        le(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), We = /* @__PURE__ */ j(Mc, [["__scopeId", "data-v-cb5d236c"]]), Lc = { class: "toggle" }, Rc = ["checked", "disabled"], Nc = /* @__PURE__ */ G({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, s) => (o(), a("label", Lc, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.checked)),
        class: "toggle-input"
      }, null, 40, Rc),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Xe = /* @__PURE__ */ j(Nc, [["__scopeId", "data-v-71c0f550"]]), Uc = { class: "settings-section" }, Bc = { class: "path-setting" }, Tc = { class: "path-value" }, Dc = { class: "path-setting" }, Oc = { class: "path-value" }, Vc = { class: "settings-section" }, Ac = { class: "settings-section" }, Wc = /* @__PURE__ */ G({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: s } = xe(), l = C(!1), h = C(null), p = C(null), v = C(null), g = C(null), m = C(""), f = C(""), y = C(!0), b = C(!0), _ = B(() => g.value ? m.value !== (g.value.civitai_api_key || "") : !1);
    async function k() {
      l.value = !0, h.value = null;
      try {
        v.value = await r(), g.value = { ...v.value }, m.value = v.value.civitai_api_key || "", f.value = v.value.huggingface_token || "", y.value = v.value.auto_sync_models, b.value = v.value.confirm_destructive;
      } catch (I) {
        h.value = I instanceof Error ? I.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function x() {
      var I;
      p.value = null;
      try {
        const E = {};
        m.value !== (((I = g.value) == null ? void 0 : I.civitai_api_key) || "") && (E.civitai_api_key = m.value || null), await s(E), await k(), p.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          p.value = null;
        }, 3e3);
      } catch (E) {
        p.value = {
          type: "error",
          message: E instanceof Error ? E.message : "Failed to save settings"
        };
      }
    }
    function $() {
      g.value && (m.value = g.value.civitai_api_key || "", f.value = g.value.huggingface_token || "", y.value = g.value.auto_sync_models, b.value = g.value.confirm_destructive, p.value = null);
    }
    return be(k), (I, E) => (o(), w($e, null, {
      header: n(() => [
        c(Ce, { title: "WORKSPACE SETTINGS" }, {
          actions: n(() => [
            c(A, {
              variant: "primary",
              size: "sm",
              disabled: !_.value,
              onClick: x
            }, {
              default: n(() => [...E[4] || (E[4] = [
                u(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            _.value ? (o(), w(A, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: $
            }, {
              default: n(() => [...E[5] || (E[5] = [
                u(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: n(() => [
        l.value ? (o(), w(Ve, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (o(), w(Ae, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: k
        }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
          c(pe, { title: "WORKSPACE PATHS" }, {
            default: n(() => {
              var T, P;
              return [
                e("div", Uc, [
                  e("div", Bc, [
                    E[6] || (E[6] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    E[7] || (E[7] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Tc, i(((T = v.value) == null ? void 0 : T.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Dc, [
                    E[8] || (E[8] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    E[9] || (E[9] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Oc, i(((P = v.value) == null ? void 0 : P.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          c(pe, { title: "API CREDENTIALS" }, {
            default: n(() => [
              e("div", Vc, [
                c(We, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: n(() => [
                    c(nt, {
                      modelValue: m.value,
                      "onUpdate:modelValue": E[0] || (E[0] = (T) => m.value = T),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(We, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    c(nt, {
                      modelValue: f.value,
                      "onUpdate:modelValue": E[1] || (E[1] = (T) => f.value = T),
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
          c(pe, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: n(() => [
              e("div", Ac, [
                c(We, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    c(Xe, {
                      modelValue: y.value,
                      "onUpdate:modelValue": E[2] || (E[2] = (T) => y.value = T),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                c(We, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    c(Xe, {
                      modelValue: b.value,
                      "onUpdate:modelValue": E[3] || (E[3] = (T) => b.value = T),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          p.value ? (o(), w(Qe, {
            key: 0,
            variant: (p.value.type === "success", "compact")
          }, {
            default: n(() => [
              e("span", {
                style: qe({ color: p.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, i(p.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Fc = /* @__PURE__ */ j(Wc, [["__scopeId", "data-v-8b092643"]]), Pc = /* @__PURE__ */ G({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = xe(), s = C([]), l = C(!1), h = C(null), p = C(!1), v = C(null), g = B(() => s.value.length === 0 ? [] : s.value.map((f) => ({
      text: `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function m() {
      l.value = !0, h.value = null;
      try {
        s.value = await r(void 0, 500);
      } catch (f) {
        h.value = f instanceof Error ? f.message : "Failed to load workspace logs";
      } finally {
        l.value = !1, setTimeout(() => {
          var f;
          (f = v.value) != null && f.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(m), (f, y) => (o(), a(H, null, [
      c($e, null, {
        header: n(() => [
          c(Ce, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: y[0] || (y[0] = (b) => p.value = !0)
          }, {
            actions: n(() => [
              c(A, {
                variant: "secondary",
                size: "sm",
                onClick: m,
                disabled: l.value
              }, {
                default: n(() => [
                  u(i(l.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: n(() => [
          l.value ? (o(), w(Ve, {
            key: 0,
            message: "Loading workspace logs..."
          })) : h.value ? (o(), w(Ae, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: m
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            s.value.length === 0 ? (o(), w(Ue, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), a("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (o(!0), a(H, null, Q(g.value, (b, _) => (o(), a("div", {
                key: _,
                class: ee(`log-line log-level-${b.level.toLowerCase()}`)
              }, i(b.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      c(Oe, {
        show: p.value,
        title: "About Workspace Logs",
        onClose: y[2] || (y[2] = (b) => p.value = !1)
      }, {
        content: n(() => [...y[3] || (y[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            u(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            u(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            u(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            u(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: n(() => [
          c(A, {
            variant: "primary",
            onClick: y[1] || (y[1] = (b) => p.value = !1)
          }, {
            default: n(() => [...y[4] || (y[4] = [
              u(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Hc = /* @__PURE__ */ j(Pc, [["__scopeId", "data-v-39f6a756"]]), Gc = /* @__PURE__ */ G({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: s } = xe(), l = C([]), h = C(!1), p = C(null), v = C(!1), g = C("production"), m = C(null), f = B(() => l.value.length === 0 ? [] : l.value.map((b) => ({
      text: `${b.timestamp} - ${b.name} - ${b.level} - ${b.func}:${b.line} - ${b.message}`,
      level: b.level
    })));
    async function y() {
      h.value = !0, p.value = null;
      try {
        l.value = await r(void 0, 500);
        try {
          const b = await s();
          g.value = b.environment || "production";
        } catch {
        }
      } catch (b) {
        p.value = b instanceof Error ? b.message : "Failed to load environment logs";
      } finally {
        h.value = !1, setTimeout(() => {
          var b;
          (b = m.value) != null && b.parentElement && (m.value.parentElement.scrollTop = m.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return be(y), (b, _) => (o(), a(H, null, [
      c($e, null, {
        header: n(() => [
          c(Ce, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (k) => v.value = !0)
          }, {
            actions: n(() => [
              c(A, {
                variant: "secondary",
                size: "sm",
                onClick: y,
                disabled: h.value
              }, {
                default: n(() => [
                  u(i(h.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: n(() => [
          h.value ? (o(), w(Ve, {
            key: 0,
            message: "Loading environment logs..."
          })) : p.value ? (o(), w(Ae, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: y
          }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
            l.value.length === 0 ? (o(), w(Ue, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), a("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: m,
              class: "log-output"
            }, [
              (o(!0), a(H, null, Q(f.value, (k, x) => (o(), a("div", {
                key: x,
                class: ee(`log-line log-level-${k.level.toLowerCase()}`)
              }, i(k.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      c(Oe, {
        show: v.value,
        title: "About Environment Logs",
        onClose: _[2] || (_[2] = (k) => v.value = !1)
      }, {
        content: n(() => [
          e("p", null, [
            _[3] || (_[3] = u(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, i(g.value), 1),
            _[4] || (_[4] = u(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          _[5] || (_[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            u(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            u(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            u(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            u(" Detailed debugging information ")
          ], -1)),
          _[6] || (_[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: n(() => [
          c(A, {
            variant: "primary",
            onClick: _[1] || (_[1] = (k) => v.value = !1)
          }, {
            default: n(() => [..._[7] || (_[7] = [
              u(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jc = /* @__PURE__ */ j(Gc, [["__scopeId", "data-v-4f1e6f72"]]), Kc = { class: "env-title" }, qc = {
  key: 0,
  class: "current-badge"
}, Yc = {
  key: 0,
  class: "branch-info"
}, Xc = /* @__PURE__ */ G({
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
    return (r, s) => (o(), w(ke, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: n(() => [
        u(i(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: n(() => [
        e("div", Kc, [
          e("span", null, i(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), a("span", qc, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: n(() => [
        t.currentBranch ? (o(), a("span", Yc, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          u(" " + i(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      details: n(() => [
        c(se, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        c(se, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        c(se, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), w(se, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : d("", !0)
      ]),
      actions: n(() => [
        le(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Zc = /* @__PURE__ */ j(Xc, [["__scopeId", "data-v-5238e57c"]]), Jc = {
  key: 0,
  class: "create-form"
}, Qc = { class: "create-form__header" }, eu = { class: "create-form__body" }, tu = { class: "create-form__actions" }, ou = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, su = /* @__PURE__ */ G({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: r }) {
    const s = r, { getEnvironments: l } = xe(), h = C([]), p = C(!1), v = C(null), g = C(""), m = C(!1), f = C(!1), y = C(""), b = B(
      () => h.value.find((P) => P.is_current)
    ), _ = B(() => {
      if (!g.value.trim()) return h.value;
      const P = g.value.toLowerCase();
      return h.value.filter(
        (N) => {
          var O;
          return N.name.toLowerCase().includes(P) || ((O = N.current_branch) == null ? void 0 : O.toLowerCase().includes(P));
        }
      );
    });
    function k(P) {
      if (!P) return "";
      try {
        const N = new Date(P), L = (/* @__PURE__ */ new Date()).getTime() - N.getTime(), D = Math.floor(L / 6e4), z = Math.floor(L / 36e5), R = Math.floor(L / 864e5);
        return D < 1 ? "just now" : D < 60 ? `${D} ${D === 1 ? "minute" : "minutes"} ago` : z < 24 ? `${z} ${z === 1 ? "hour" : "hours"} ago` : R < 30 ? `${R} ${R === 1 ? "day" : "days"} ago` : N.toLocaleDateString();
      } catch {
        return P;
      }
    }
    function x() {
      const P = y.value.trim();
      P && (s("create", P), y.value = "", f.value = !1);
    }
    function $() {
      y.value = "", f.value = !1;
    }
    function I(P) {
      s("viewDetails", P);
    }
    function E(P) {
      confirm(`Delete environment "${P}"?

This action cannot be undone.`) && s("delete", P);
    }
    async function T() {
      p.value = !0, v.value = null;
      try {
        h.value = await l();
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load environments";
      } finally {
        p.value = !1;
      }
    }
    return be(T), (P, N) => {
      const O = Jt("SectionGroup");
      return o(), a(H, null, [
        c($e, null, {
          header: n(() => [
            c(Ce, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: N[1] || (N[1] = (L) => m.value = !0)
            }, {
              actions: n(() => [
                c(A, {
                  variant: "ghost",
                  size: "sm",
                  onClick: N[0] || (N[0] = (L) => f.value = !0),
                  title: "Create new environment"
                }, {
                  default: n(() => [...N[7] || (N[7] = [
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
                c(A, {
                  variant: "ghost",
                  size: "sm",
                  onClick: T,
                  title: "Refresh environments"
                }, {
                  default: n(() => [...N[8] || (N[8] = [
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
          search: n(() => [
            c(Je, {
              modelValue: g.value,
              "onUpdate:modelValue": N[2] || (N[2] = (L) => g.value = L),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: n(() => [
            p.value ? (o(), w(Ve, {
              key: 0,
              message: "Loading environments..."
            })) : v.value ? (o(), w(Ae, {
              key: 1,
              message: v.value,
              retry: !0,
              onRetry: T
            }, null, 8, ["message"])) : (o(), a(H, { key: 2 }, [
              f.value ? (o(), a("div", Jc, [
                e("div", Qc, [
                  N[10] || (N[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  c(A, {
                    variant: "ghost",
                    size: "xs",
                    onClick: $
                  }, {
                    default: n(() => [...N[9] || (N[9] = [
                      u(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", eu, [
                  c(nt, {
                    modelValue: y.value,
                    "onUpdate:modelValue": N[3] || (N[3] = (L) => y.value = L),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      De(x, ["enter"]),
                      De($, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", tu, [
                    c(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: x,
                      disabled: !y.value.trim()
                    }, {
                      default: n(() => [...N[11] || (N[11] = [
                        u(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    c(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: $
                    }, {
                      default: n(() => [...N[12] || (N[12] = [
                        u(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : d("", !0),
              h.value.length ? (o(), w(Qe, {
                key: 1,
                variant: "compact"
              }, {
                default: n(() => [
                  u(" Total: " + i(h.value.length) + " " + i(h.value.length === 1 ? "environment" : "environments") + " ", 1),
                  b.value ? (o(), a(H, { key: 0 }, [
                    N[13] || (N[13] = u(" • Current: ", -1)),
                    e("strong", null, i(b.value.name), 1)
                  ], 64)) : d("", !0)
                ]),
                _: 1
              })) : d("", !0),
              _.value.length ? (o(), w(O, {
                key: 2,
                title: "ENVIRONMENTS",
                count: _.value.length
              }, {
                default: n(() => [
                  (o(!0), a(H, null, Q(_.value, (L) => (o(), w(Zc, {
                    key: L.name,
                    "environment-name": L.name,
                    "is-current": L.is_current,
                    "current-branch": L.current_branch,
                    "workflow-count": L.workflow_count,
                    "node-count": L.node_count,
                    "model-count": L.model_count,
                    "last-used": k(L.last_used),
                    "show-last-used": !!L.last_used
                  }, {
                    actions: n(() => [
                      L.is_current ? d("", !0) : (o(), w(A, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (D) => P.$emit("switch", L.name)
                      }, {
                        default: n(() => [...N[14] || (N[14] = [
                          u(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      c(A, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (D) => I(L.name),
                        title: "View environment details"
                      }, {
                        default: n(() => [...N[15] || (N[15] = [
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
                      !L.is_current && h.value.length > 1 ? (o(), w(A, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (D) => E(L.name),
                        title: "Delete environment"
                      }, {
                        default: n(() => [
                          (o(), a("svg", ou, [...N[16] || (N[16] = [
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
              _.value.length ? d("", !0) : (o(), w(Ue, {
                key: 3,
                icon: "🌍",
                message: g.value ? `No environments match '${g.value}'` : "No environments found. Create one to get started!"
              }, Lt({ _: 2 }, [
                g.value ? void 0 : {
                  name: "actions",
                  fn: n(() => [
                    c(A, {
                      variant: "primary",
                      onClick: N[4] || (N[4] = (L) => f.value = !0)
                    }, {
                      default: n(() => [...N[17] || (N[17] = [
                        u(" Create Environment ", -1)
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
        c(Oe, {
          show: m.value,
          title: "About Environments",
          onClose: N[6] || (N[6] = (L) => m.value = !1)
        }, {
          content: n(() => [...N[18] || (N[18] = [
            e("p", null, [
              e("strong", null, "Environments"),
              u(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          actions: n(() => [
            c(A, {
              variant: "secondary",
              onClick: N[5] || (N[5] = (L) => m.value = !1)
            }, {
              default: n(() => [...N[19] || (N[19] = [
                u(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), au = /* @__PURE__ */ j(su, [["__scopeId", "data-v-97d6527d"]]), nu = { class: "file-path" }, lu = { class: "file-path-text" }, iu = ["title"], ru = /* @__PURE__ */ G({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, s = C(!1);
    async function l() {
      try {
        await navigator.clipboard.writeText(r.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy:", h);
      }
    }
    return (h, p) => (o(), a("div", nu, [
      p[0] || (p[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", lu, i(t.path), 1),
      t.copyable ? (o(), a("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: l
      }, i(s.value ? "✓" : "📋"), 9, iu)) : d("", !0)
    ]));
  }
}), du = /* @__PURE__ */ j(ru, [["__scopeId", "data-v-f0982173"]]), cu = { class: "output-path-input" }, uu = { class: "export-actions" }, mu = {
  key: 1,
  class: "export-warning"
}, vu = /* @__PURE__ */ G({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = xe(), s = C(""), l = C(!1), h = C(null), p = C(!1);
    async function v() {
      l.value = !0, h.value = null;
      try {
        const m = await r(s.value || void 0);
        h.value = m;
      } catch (m) {
        h.value = {
          status: "error",
          message: m instanceof Error ? m.message : "Unknown error occurred"
        };
      } finally {
        l.value = !1;
      }
    }
    async function g() {
      var m;
      if ((m = h.value) != null && m.path)
        try {
          await navigator.clipboard.writeText(h.value.path);
        } catch (f) {
          console.error("Failed to copy path:", f);
        }
    }
    return (m, f) => (o(), a(H, null, [
      c($e, null, {
        header: n(() => [
          c(Ce, { title: "EXPORT ENVIRONMENT" }, {
            actions: n(() => [
              c(A, {
                variant: "ghost",
                size: "sm",
                onClick: f[0] || (f[0] = (y) => p.value = !0),
                title: "About exporting"
              }, {
                default: n(() => [...f[5] || (f[5] = [
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
        content: n(() => [
          c(pe, { title: "WHAT WILL BE EXPORTED" }, {
            default: n(() => [
              c(ke, { status: "synced" }, {
                icon: n(() => [...f[6] || (f[6] = [
                  u("📦", -1)
                ])]),
                title: n(() => [...f[7] || (f[7] = [
                  u("Environment Snapshot", -1)
                ])]),
                subtitle: n(() => [...f[8] || (f[8] = [
                  u(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: n(() => [
                  c(se, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  c(se, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  c(se, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  c(se, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          c(pe, { title: "EXPORT OPTIONS" }, {
            default: n(() => [
              c(ke, { status: "synced" }, {
                icon: n(() => [...f[9] || (f[9] = [
                  u("📁", -1)
                ])]),
                title: n(() => [...f[10] || (f[10] = [
                  u("Output Destination", -1)
                ])]),
                subtitle: n(() => [...f[11] || (f[11] = [
                  u(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: n(() => [
                  e("div", cu, [
                    c(nt, {
                      modelValue: s.value,
                      "onUpdate:modelValue": f[1] || (f[1] = (y) => s.value = y),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          c(pe, { title: "EXPORT" }, {
            default: n(() => [
              e("div", uu, [
                c(A, {
                  variant: "primary",
                  size: "md",
                  loading: l.value,
                  disabled: l.value,
                  onClick: v
                }, {
                  default: n(() => [
                    f[12] || (f[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    u(" " + i(l.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), w(A, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: l.value,
                  onClick: f[2] || (f[2] = (y) => s.value = "")
                }, {
                  default: n(() => [...f[13] || (f[13] = [
                    u(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          h.value ? (o(), w(pe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: n(() => [
              c(ke, {
                status: h.value.status === "success" ? "synced" : "broken"
              }, Lt({
                icon: n(() => [
                  u(i(h.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: n(() => [
                  u(i(h.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: n(() => [
                  u(i(h.value.status === "success" ? "Your environment has been exported" : h.value.message), 1)
                ]),
                _: 2
              }, [
                h.value.status === "success" ? {
                  name: "details",
                  fn: n(() => [
                    c(se, { label: "Saved to:" }, {
                      default: n(() => [
                        c(du, {
                          path: h.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    h.value.models_without_sources !== void 0 ? (o(), w(se, {
                      key: 0,
                      label: "Models without sources:",
                      value: h.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    h.value.models_without_sources && h.value.models_without_sources > 0 ? (o(), a("div", mu, [...f[14] || (f[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                h.value.status === "success" ? {
                  name: "actions",
                  fn: n(() => [
                    c(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: g
                    }, {
                      default: n(() => [...f[15] || (f[15] = [
                        u(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    c(A, {
                      variant: "ghost",
                      size: "sm",
                      onClick: f[3] || (f[3] = (y) => h.value = null)
                    }, {
                      default: n(() => [...f[16] || (f[16] = [
                        u(" Dismiss ", -1)
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
      c(Oe, {
        show: p.value,
        title: "About Environment Export",
        onClose: f[4] || (f[4] = (y) => p.value = !1)
      }, {
        content: n(() => [...f[17] || (f[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            u(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), fu = /* @__PURE__ */ j(vu, [["__scopeId", "data-v-1777a9d5"]]), gu = { class: "file-input-wrapper" }, hu = ["accept", "multiple", "disabled"], pu = /* @__PURE__ */ G({
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
    const l = s, h = C(null);
    function p() {
      var g;
      (g = h.value) == null || g.click();
    }
    function v(g) {
      const m = g.target;
      m.files && m.files.length > 0 && (l("change", m.files), m.value = "");
    }
    return r({
      triggerInput: p
    }), (g, m) => (o(), a("div", gu, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, hu),
      c(A, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: p
      }, {
        default: n(() => [
          le(g.$slots, "default", {}, () => [
            m[0] || (m[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            u(" " + i(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), yu = /* @__PURE__ */ j(pu, [["__scopeId", "data-v-cd192091"]]), wu = {
  key: 0,
  class: "drop-zone-empty"
}, ku = { class: "drop-zone-text" }, bu = { class: "drop-zone-primary" }, _u = { class: "drop-zone-secondary" }, $u = { class: "drop-zone-actions" }, Cu = {
  key: 1,
  class: "drop-zone-file"
}, xu = { class: "file-info" }, Su = { class: "file-details" }, Iu = { class: "file-name" }, Eu = { class: "file-size" }, zu = /* @__PURE__ */ G({
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
    const s = r, l = C(!1), h = C(null), p = C(0), v = B(() => h.value !== null), g = B(() => {
      var I;
      return ((I = h.value) == null ? void 0 : I.name) || "";
    }), m = B(() => {
      if (!h.value) return "";
      const I = h.value.size;
      return I < 1024 ? `${I} B` : I < 1024 * 1024 ? `${(I / 1024).toFixed(1)} KB` : I < 1024 * 1024 * 1024 ? `${(I / (1024 * 1024)).toFixed(1)} MB` : `${(I / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f(I) {
      var E;
      p.value++, (E = I.dataTransfer) != null && E.types.includes("Files") && (l.value = !0);
    }
    function y(I) {
      I.dataTransfer && (I.dataTransfer.dropEffect = "copy");
    }
    function b() {
      p.value--, p.value === 0 && (l.value = !1);
    }
    function _(I) {
      var T;
      p.value = 0, l.value = !1;
      const E = (T = I.dataTransfer) == null ? void 0 : T.files;
      E && E.length > 0 && x(E[0]);
    }
    function k(I) {
      I.length > 0 && x(I[0]);
    }
    function x(I) {
      h.value = I, s("fileSelected", I);
    }
    function $() {
      h.value = null, s("clear");
    }
    return (I, E) => (o(), a("div", {
      class: ee(["file-drop-zone", { "drop-active": l.value, "has-file": v.value }]),
      onDragenter: we(f, ["prevent"]),
      onDragover: we(y, ["prevent"]),
      onDragleave: we(b, ["prevent"]),
      onDrop: we(_, ["prevent"])
    }, [
      v.value ? (o(), a("div", Cu, [
        e("div", xu, [
          E[1] || (E[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Su, [
            e("div", Iu, i(g.value), 1),
            e("div", Eu, i(m.value), 1)
          ])
        ]),
        c(A, {
          variant: "ghost",
          size: "xs",
          onClick: $,
          title: "Remove file"
        }, {
          default: n(() => [...E[2] || (E[2] = [
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
      ])) : (o(), a("div", wu, [
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
        e("div", ku, [
          e("p", bu, i(t.primaryText), 1),
          e("p", _u, i(t.secondaryText), 1)
        ]),
        e("div", $u, [
          c(yu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: k
          }, {
            default: n(() => [
              u(i(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Mu = /* @__PURE__ */ j(zu, [["__scopeId", "data-v-e00abbca"]]), Lu = { class: "import-preview" }, Ru = { class: "preview-header" }, Nu = {
  key: 0,
  class: "source-env"
}, Uu = { class: "preview-content" }, Bu = { class: "preview-section" }, Tu = { class: "section-header" }, Du = { class: "section-info" }, Ou = { class: "section-count" }, Vu = {
  key: 0,
  class: "item-list"
}, Au = { class: "item-name" }, Wu = {
  key: 0,
  class: "item-more"
}, Fu = { class: "preview-section" }, Pu = { class: "section-header" }, Hu = { class: "section-info" }, Gu = { class: "section-count" }, ju = {
  key: 0,
  class: "item-list"
}, Ku = { class: "item-details" }, qu = { class: "item-name" }, Yu = { class: "item-meta" }, Xu = {
  key: 0,
  class: "item-more"
}, Zu = { class: "preview-section" }, Ju = { class: "section-header" }, Qu = { class: "section-info" }, em = { class: "section-count" }, tm = {
  key: 0,
  class: "item-list"
}, om = { class: "item-name" }, sm = {
  key: 0,
  class: "item-more"
}, am = {
  key: 0,
  class: "preview-section"
}, nm = { class: "git-info" }, lm = /* @__PURE__ */ G({
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
    const r = t, s = B(() => r.workflows.length), l = B(() => r.models.length), h = B(() => r.nodes.length);
    function p(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, g) => (o(), a("div", Lu, [
      e("div", Ru, [
        c(Ee, null, {
          default: n(() => [...g[0] || (g[0] = [
            u("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), a("span", Nu, [
          g[1] || (g[1] = u(" From: ", -1)),
          c(pt, null, {
            default: n(() => [
              u(i(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", Uu, [
        e("div", Bu, [
          e("div", Tu, [
            g[3] || (g[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Du, [
              g[2] || (g[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Ou, i(s.value) + " file" + i(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), a("div", Vu, [
            (o(!0), a(H, null, Q(t.workflows.slice(0, t.maxPreviewItems), (m) => (o(), a("div", {
              key: m,
              class: "preview-item"
            }, [
              g[4] || (g[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Au, i(m), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), a("div", Wu, " +" + i(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Fu, [
          e("div", Pu, [
            g[6] || (g[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Hu, [
              g[5] || (g[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Gu, i(l.value) + " file" + i(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), a("div", ju, [
            (o(!0), a(H, null, Q(t.models.slice(0, t.maxPreviewItems), (m) => (o(), a("div", {
              key: m.filename,
              class: "preview-item"
            }, [
              g[7] || (g[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Ku, [
                e("span", qu, i(m.filename), 1),
                e("span", Yu, i(p(m.size)) + " • " + i(m.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), a("div", Xu, " +" + i(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Zu, [
          e("div", Ju, [
            g[9] || (g[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Qu, [
              g[8] || (g[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", em, i(h.value) + " node" + i(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), a("div", tm, [
            (o(!0), a(H, null, Q(t.nodes.slice(0, t.maxPreviewItems), (m) => (o(), a("div", {
              key: m,
              class: "preview-item"
            }, [
              g[10] || (g[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", om, i(m), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), a("div", sm, " +" + i(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), a("div", am, [
          g[11] || (g[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", nm, [
            t.gitBranch ? (o(), w(se, {
              key: 0,
              label: "Branch"
            }, {
              default: n(() => [
                c(pt, null, {
                  default: n(() => [
                    u(i(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (o(), w(se, {
              key: 1,
              label: "Commit"
            }, {
              default: n(() => [
                c(Bt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), im = /* @__PURE__ */ j(lm, [["__scopeId", "data-v-182fe113"]]), rm = { class: "import-options" }, dm = { class: "options-container" }, cm = { class: "option-section" }, um = { class: "conflict-options" }, mm = ["value", "checked", "onChange"], vm = { class: "conflict-content" }, fm = { class: "conflict-label" }, gm = { class: "conflict-description" }, hm = { class: "option-section" }, pm = { class: "component-toggles" }, ym = /* @__PURE__ */ G({
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
    return (h, p) => (o(), a("div", rm, [
      c(Ee, null, {
        default: n(() => [...p[4] || (p[4] = [
          u("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", dm, [
        e("div", cm, [
          c(ht, null, {
            default: n(() => [...p[5] || (p[5] = [
              u("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", um, [
            (o(), a(H, null, Q(l, (v) => e("label", {
              key: v.value,
              class: ee(["conflict-option", { active: t.conflictMode === v.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: v.value,
                checked: t.conflictMode === v.value,
                onChange: (g) => s("update:conflictMode", v.value)
              }, null, 40, mm),
              e("div", vm, [
                e("span", fm, i(v.label), 1),
                e("span", gm, i(v.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", hm, [
          c(ht, null, {
            default: n(() => [...p[6] || (p[6] = [
              u("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", pm, [
            c(We, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: n(() => [
                c(Xe, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": p[0] || (p[0] = (v) => s("update:includeWorkflows", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            c(We, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: n(() => [
                c(Xe, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": p[1] || (p[1] = (v) => s("update:includeModels", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            c(We, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: n(() => [
                c(Xe, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": p[2] || (p[2] = (v) => s("update:includeNodes", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            c(We, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: n(() => [
                c(Xe, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": p[3] || (p[3] = (v) => s("update:includeGitHistory", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), wm = /* @__PURE__ */ j(ym, [["__scopeId", "data-v-0ec212b0"]]), km = {
  key: 0,
  class: "import-empty"
}, bm = { class: "import-help" }, _m = {
  key: 1,
  class: "import-configure"
}, $m = { class: "selected-file-bar" }, Cm = { class: "file-bar-content" }, xm = { class: "file-bar-info" }, Sm = { class: "file-bar-name" }, Im = { class: "file-bar-size" }, Em = { class: "import-actions" }, zm = {
  key: 2,
  class: "import-progress"
}, Mm = { class: "progress-content" }, Lm = { class: "progress-info" }, Rm = { class: "progress-title" }, Nm = { class: "progress-detail" }, Um = { class: "progress-bar" }, Bm = { class: "progress-status" }, Tm = {
  key: 3,
  class: "import-complete"
}, Dm = { class: "complete-message" }, Om = { class: "complete-title" }, Vm = { class: "complete-details" }, Am = { class: "complete-actions" }, Wm = /* @__PURE__ */ G({
  __name: "ImportSection",
  setup(t) {
    const r = C(null), s = C(!1), l = C(!1), h = C(!1), p = C(""), v = C({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), g = C({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), m = C({
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
    }), f = B(() => v.value.includeWorkflows || v.value.includeModels || v.value.includeNodes || v.value.includeGitHistory);
    function y($) {
      r.value = $;
    }
    function b() {
      r.value = null, l.value = !1, h.value = !1, p.value = "";
    }
    function _() {
      b(), s.value = !1, g.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function k() {
      if (r.value) {
        s.value = !0, l.value = !1;
        try {
          const $ = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${m.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${m.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${m.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const I of $)
            g.value = I, await new Promise((E) => setTimeout(E, 800));
          g.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((I) => setTimeout(I, 500)), h.value = !0, p.value = `Successfully imported ${m.value.workflows.length} workflows, ${m.value.models.length} models, and ${m.value.nodes.length} custom nodes.`;
        } catch ($) {
          h.value = !1, p.value = $ instanceof Error ? $.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, l.value = !0;
        }
      }
    }
    function x($) {
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ($, I) => (o(), w($e, null, {
      header: n(() => [
        c(Ce, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: n(() => [
        !r.value && !s.value ? (o(), a("div", km, [
          c(Mu, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: y
          }),
          e("div", bm, [
            c(Ee, null, {
              default: n(() => [...I[5] || (I[5] = [
                u("How to Import", -1)
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
        ])) : r.value && !s.value && !l.value ? (o(), a("div", _m, [
          e("div", $m, [
            e("div", Cm, [
              I[7] || (I[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", xm, [
                e("div", Sm, i(r.value.name), 1),
                e("div", Im, i(x(r.value.size)), 1)
              ])
            ]),
            c(A, {
              variant: "ghost",
              size: "sm",
              onClick: b
            }, {
              default: n(() => [...I[8] || (I[8] = [
                u(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          c(im, {
            "source-environment": m.value.sourceEnvironment,
            workflows: m.value.workflows,
            models: m.value.models,
            nodes: m.value.nodes,
            "git-branch": m.value.gitBranch,
            "git-commit": m.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          c(wm, {
            "conflict-mode": v.value.conflictMode,
            "onUpdate:conflictMode": I[0] || (I[0] = (E) => v.value.conflictMode = E),
            "include-workflows": v.value.includeWorkflows,
            "onUpdate:includeWorkflows": I[1] || (I[1] = (E) => v.value.includeWorkflows = E),
            "include-models": v.value.includeModels,
            "onUpdate:includeModels": I[2] || (I[2] = (E) => v.value.includeModels = E),
            "include-nodes": v.value.includeNodes,
            "onUpdate:includeNodes": I[3] || (I[3] = (E) => v.value.includeNodes = E),
            "include-git-history": v.value.includeGitHistory,
            "onUpdate:includeGitHistory": I[4] || (I[4] = (E) => v.value.includeGitHistory = E)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !v.value.includeModels && m.value.models.length > 0 ? (o(), w(Ke, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${m.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", Em, [
            c(A, {
              variant: "primary",
              size: "md",
              disabled: !f.value,
              onClick: k
            }, {
              default: n(() => [...I[9] || (I[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                u(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            c(A, {
              variant: "secondary",
              size: "md",
              onClick: b
            }, {
              default: n(() => [...I[10] || (I[10] = [
                u(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), a("div", zm, [
          e("div", Mm, [
            I[11] || (I[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Lm, [
              e("div", Rm, i(g.value.message), 1),
              e("div", Nm, i(g.value.detail), 1)
            ])
          ]),
          e("div", Um, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${g.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Bm, i(g.value.percent) + "% complete ", 1)
        ])) : l.value ? (o(), a("div", Tm, [
          e("div", {
            class: ee(["complete-icon", h.value ? "success" : "error"])
          }, i(h.value ? "✓" : "✕"), 3),
          e("div", Dm, [
            e("div", Om, i(h.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Vm, i(p.value), 1)
          ]),
          e("div", Am, [
            c(A, {
              variant: "primary",
              size: "md",
              onClick: _
            }, {
              default: n(() => [...I[12] || (I[12] = [
                u(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]),
      _: 1
    }));
  }
}), Fm = /* @__PURE__ */ j(Wm, [["__scopeId", "data-v-18e18eb5"]]), Pm = { class: "header-info" }, Hm = { class: "commit-hash" }, Gm = {
  key: 0,
  class: "commit-refs"
}, jm = { class: "commit-message" }, Km = { class: "commit-date" }, qm = {
  key: 0,
  class: "loading"
}, Ym = {
  key: 1,
  class: "changes-section"
}, Xm = { class: "stats-row" }, Zm = { class: "stat" }, Jm = { class: "stat insertions" }, Qm = { class: "stat deletions" }, ev = {
  key: 0,
  class: "change-group"
}, tv = {
  key: 1,
  class: "change-group"
}, ov = {
  key: 0,
  class: "version"
}, sv = {
  key: 2,
  class: "change-group"
}, av = { class: "change-item" }, nv = /* @__PURE__ */ G({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: s } = xe(), l = C(null), h = C(!0), p = B(() => {
      if (!l.value) return !1;
      const g = l.value.changes.workflows;
      return g.added.length > 0 || g.modified.length > 0 || g.deleted.length > 0;
    }), v = B(() => {
      if (!l.value) return !1;
      const g = l.value.changes.nodes;
      return g.added.length > 0 || g.removed.length > 0;
    });
    return be(async () => {
      try {
        l.value = await s(r.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (g, m) => (o(), w(ut, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (f) => g.$emit("close"))
    }, {
      header: n(() => {
        var f, y, b, _;
        return [
          e("div", Pm, [
            m[4] || (m[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Hm, i(((f = l.value) == null ? void 0 : f.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (_ = (b = l.value) == null ? void 0 : b.refs) != null && _.length ? (o(), a("span", Gm, [
              (o(!0), a(H, null, Q(l.value.refs, (k) => (o(), a("span", {
                key: k,
                class: "ref-badge"
              }, i(k), 1))), 128))
            ])) : d("", !0)
          ]),
          c(oe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (k) => g.$emit("close"))
          }, {
            default: n(() => [...m[5] || (m[5] = [
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
      body: n(() => {
        var f, y;
        return [
          e("div", jm, i(((f = l.value) == null ? void 0 : f.message) || t.commit.message), 1),
          e("div", Km, i(((y = l.value) == null ? void 0 : y.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (o(), a("div", qm, "Loading details...")) : l.value ? (o(), a("div", Ym, [
            e("div", Xm, [
              e("span", Zm, i(l.value.stats.files_changed) + " files", 1),
              e("span", Jm, "+" + i(l.value.stats.insertions), 1),
              e("span", Qm, "-" + i(l.value.stats.deletions), 1)
            ]),
            p.value ? (o(), a("div", ev, [
              c(st, { variant: "section" }, {
                default: n(() => [...m[6] || (m[6] = [
                  u("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), a(H, null, Q(l.value.changes.workflows.added, (b) => (o(), a("div", {
                key: "add-" + b,
                class: "change-item added"
              }, [
                m[7] || (m[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, i(b), 1)
              ]))), 128)),
              (o(!0), a(H, null, Q(l.value.changes.workflows.modified, (b) => (o(), a("div", {
                key: "mod-" + b,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, i(b), 1)
              ]))), 128)),
              (o(!0), a(H, null, Q(l.value.changes.workflows.deleted, (b) => (o(), a("div", {
                key: "del-" + b,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, i(b), 1)
              ]))), 128))
            ])) : d("", !0),
            v.value ? (o(), a("div", tv, [
              c(st, { variant: "section" }, {
                default: n(() => [...m[10] || (m[10] = [
                  u("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), a(H, null, Q(l.value.changes.nodes.added, (b) => (o(), a("div", {
                key: "add-" + b.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, i(b.name), 1),
                b.version ? (o(), a("span", ov, "(" + i(b.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (o(!0), a(H, null, Q(l.value.changes.nodes.removed, (b) => (o(), a("div", {
                key: "rem-" + b.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, i(b.name), 1)
              ]))), 128))
            ])) : d("", !0),
            l.value.changes.models.resolved > 0 ? (o(), a("div", sv, [
              c(st, { variant: "section" }, {
                default: n(() => [...m[13] || (m[13] = [
                  u("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", av, [
                m[14] || (m[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, i(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: n(() => [
        c(oe, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => g.$emit("createBranch", t.commit))
        }, {
          default: n(() => [...m[15] || (m[15] = [
            u(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        c(oe, {
          variant: "primary",
          onClick: m[2] || (m[2] = (f) => g.$emit("checkout", t.commit))
        }, {
          default: n(() => [...m[16] || (m[16] = [
            u(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), lv = /* @__PURE__ */ j(nv, [["__scopeId", "data-v-d256ff6d"]]), iv = { class: "dialog-message" }, rv = {
  key: 0,
  class: "dialog-details"
}, dv = {
  key: 1,
  class: "dialog-warning"
}, cv = /* @__PURE__ */ G({
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
    return (r, s) => (o(), w(ut, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (l) => r.$emit("cancel"))
    }, {
      body: n(() => [
        e("p", iv, i(t.message), 1),
        t.details && t.details.length ? (o(), a("div", rv, [
          (o(!0), a(H, null, Q(t.details, (l, h) => (o(), a("div", {
            key: h,
            class: "detail-item"
          }, " • " + i(l), 1))), 128))
        ])) : d("", !0),
        t.warning ? (o(), a("p", dv, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          u(" " + i(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: n(() => [
        c(oe, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (l) => r.$emit("cancel"))
        }, {
          default: n(() => [
            u(i(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), w(oe, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (l) => r.$emit("secondary"))
        }, {
          default: n(() => [
            u(i(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        c(oe, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
        }, {
          default: n(() => [
            u(i(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), uv = /* @__PURE__ */ j(cv, [["__scopeId", "data-v-3670b9f5"]]), mv = { class: "base-textarea-wrapper" }, vv = ["value", "rows", "placeholder", "disabled", "maxlength"], fv = {
  key: 0,
  class: "base-textarea-count"
}, gv = /* @__PURE__ */ G({
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
    return (r, s) => (o(), a("div", mv, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          s[1] || (s[1] = De(we((l) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = De(we((l) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, vv),
      t.showCharCount && t.maxLength ? (o(), a("div", fv, i(t.modelValue.length) + " / " + i(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), It = /* @__PURE__ */ j(gv, [["__scopeId", "data-v-5516e6fc"]]), hv = ["checked", "disabled"], pv = { class: "base-checkbox-box" }, yv = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, wv = {
  key: 0,
  class: "base-checkbox-label"
}, kv = /* @__PURE__ */ G({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, s) => (o(), a("label", {
      class: ee(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.checked))
      }, null, 40, hv),
      e("span", pv, [
        t.modelValue ? (o(), a("svg", yv, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      r.$slots.default ? (o(), a("span", wv, [
        le(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ j(kv, [["__scopeId", "data-v-bf17c831"]]), bv = { class: "popover-header" }, _v = { class: "popover-body" }, $v = {
  key: 0,
  class: "changes-summary"
}, Cv = {
  key: 0,
  class: "change-item"
}, xv = {
  key: 1,
  class: "change-item"
}, Sv = {
  key: 2,
  class: "change-item"
}, Iv = {
  key: 3,
  class: "change-item"
}, Ev = {
  key: 4,
  class: "change-item"
}, zv = {
  key: 1,
  class: "no-changes"
}, Mv = {
  key: 2,
  class: "loading"
}, Lv = {
  key: 3,
  class: "issues-warning"
}, Rv = { class: "warning-header" }, Nv = { class: "warning-title" }, Uv = { class: "issues-list" }, Bv = { class: "message-section" }, Tv = { class: "popover-footer" }, Dv = {
  key: 1,
  class: "commit-popover"
}, Ov = { class: "popover-header" }, Vv = { class: "popover-body" }, Av = {
  key: 0,
  class: "changes-summary"
}, Wv = {
  key: 0,
  class: "change-item"
}, Fv = {
  key: 1,
  class: "change-item"
}, Pv = {
  key: 2,
  class: "change-item"
}, Hv = {
  key: 3,
  class: "change-item"
}, Gv = {
  key: 4,
  class: "change-item"
}, jv = {
  key: 1,
  class: "no-changes"
}, Kv = {
  key: 2,
  class: "loading"
}, qv = {
  key: 3,
  class: "issues-warning"
}, Yv = { class: "warning-header" }, Xv = { class: "warning-title" }, Zv = { class: "issues-list" }, Jv = { class: "message-section" }, Qv = { class: "popover-footer" }, ef = /* @__PURE__ */ G({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const s = t, l = r, { commit: h } = xe(), p = C(""), v = C(!1), g = C(!1), m = C(null), f = B(() => {
      if (!s.status) return !1;
      const x = s.status.workflows;
      return x.new.length > 0 || x.modified.length > 0 || x.deleted.length > 0 || s.status.has_changes;
    }), y = B(() => {
      var x;
      return (x = s.status) != null && x.workflows.analyzed ? s.status.workflows.analyzed.filter(
        ($) => $.has_issues && ($.sync_state === "new" || $.sync_state === "modified")
      ) : [];
    }), b = B(() => y.value.length > 0), _ = B(() => b.value && !g.value);
    async function k() {
      var x, $, I;
      if (!(b.value && !g.value) && !(!f.value || !p.value.trim() || v.value)) {
        v.value = !0, m.value = null;
        try {
          const E = await h(p.value.trim(), g.value);
          E.status === "success" ? (m.value = {
            type: "success",
            message: `Committed: ${((x = E.summary) == null ? void 0 : x.new) || 0} new, ${(($ = E.summary) == null ? void 0 : $.modified) || 0} modified, ${((I = E.summary) == null ? void 0 : I.deleted) || 0} deleted`
          }, p.value = "", g.value = !1, setTimeout(() => l("committed"), 1e3)) : E.status === "no_changes" ? m.value = { type: "error", message: "No changes to commit" } : E.status === "blocked" ? m.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : m.value = { type: "error", message: E.message || "Commit failed" };
        } catch (E) {
          m.value = { type: "error", message: E instanceof Error ? E.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (x, $) => t.asModal ? (o(), w(Ne, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (I) => l("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = we(() => {
          }, ["stop"]))
        }, [
          e("div", bv, [
            $[11] || ($[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: $[0] || ($[0] = (I) => l("close"))
            }, [...$[10] || ($[10] = [
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
          e("div", _v, [
            t.status && f.value ? (o(), a("div", $v, [
              t.status.workflows.new.length ? (o(), a("div", Cv, [
                $[12] || ($[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, i(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (o(), a("div", xv, [
                $[13] || ($[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, i(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (o(), a("div", Sv, [
                $[14] || ($[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, i(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (o(), a("div", Iv, [
                $[15] || ($[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, i(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), a("div", Ev, [
                $[16] || ($[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, i(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0)
            ])) : t.status ? (o(), a("div", zv, " No changes to commit ")) : (o(), a("div", Mv, " Loading... ")),
            b.value ? (o(), a("div", Lv, [
              e("div", Rv, [
                $[17] || ($[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", Nv, i(y.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", Uv, [
                (o(!0), a(H, null, Q(y.value, (I) => (o(), a("div", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  e("strong", null, i(I.name), 1),
                  u(": " + i(I.issue_summary), 1)
                ]))), 128))
              ]),
              c(Et, {
                modelValue: g.value,
                "onUpdate:modelValue": $[1] || ($[1] = (I) => g.value = I),
                class: "allow-issues-toggle"
              }, {
                default: n(() => [...$[18] || ($[18] = [
                  u(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", Bv, [
              c(It, {
                modelValue: p.value,
                "onUpdate:modelValue": $[2] || ($[2] = (I) => p.value = I),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : f.value ? "Describe your changes..." : "No changes",
                disabled: !f.value || v.value || _.value,
                rows: 3,
                onCtrlEnter: k
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            m.value ? (o(), a("div", {
              key: 4,
              class: ee(["result", m.value.type])
            }, i(m.value.message), 3)) : d("", !0)
          ]),
          e("div", Tv, [
            c(oe, {
              variant: "secondary",
              onClick: $[3] || ($[3] = (I) => l("close"))
            }, {
              default: n(() => [...$[19] || ($[19] = [
                u(" Cancel ", -1)
              ])]),
              _: 1
            }),
            c(oe, {
              variant: g.value ? "danger" : "primary",
              disabled: !f.value || !p.value.trim() || v.value || _.value,
              loading: v.value,
              onClick: k
            }, {
              default: n(() => [
                u(i(v.value ? "Committing..." : g.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), a("div", Dv, [
      e("div", Ov, [
        $[21] || ($[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: $[6] || ($[6] = (I) => l("close"))
        }, [...$[20] || ($[20] = [
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
      e("div", Vv, [
        t.status && f.value ? (o(), a("div", Av, [
          t.status.workflows.new.length ? (o(), a("div", Wv, [
            $[22] || ($[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, i(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (o(), a("div", Fv, [
            $[23] || ($[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, i(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (o(), a("div", Pv, [
            $[24] || ($[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, i(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (o(), a("div", Hv, [
            $[25] || ($[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, i(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), a("div", Gv, [
            $[26] || ($[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, i(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : t.status ? (o(), a("div", jv, " No changes to commit ")) : (o(), a("div", Kv, " Loading... ")),
        b.value ? (o(), a("div", qv, [
          e("div", Yv, [
            $[27] || ($[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", Xv, i(y.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", Zv, [
            (o(!0), a(H, null, Q(y.value, (I) => (o(), a("div", {
              key: I.name,
              class: "issue-item"
            }, [
              e("strong", null, i(I.name), 1),
              u(": " + i(I.issue_summary), 1)
            ]))), 128))
          ]),
          c(Et, {
            modelValue: g.value,
            "onUpdate:modelValue": $[7] || ($[7] = (I) => g.value = I),
            class: "allow-issues-toggle"
          }, {
            default: n(() => [...$[28] || ($[28] = [
              u(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", Jv, [
          c(It, {
            modelValue: p.value,
            "onUpdate:modelValue": $[8] || ($[8] = (I) => p.value = I),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : f.value ? "Describe your changes..." : "No changes",
            disabled: !f.value || v.value || _.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        m.value ? (o(), a("div", {
          key: 4,
          class: ee(["result", m.value.type])
        }, i(m.value.message), 3)) : d("", !0)
      ]),
      e("div", Qv, [
        c(oe, {
          variant: "secondary",
          onClick: $[9] || ($[9] = (I) => l("close"))
        }, {
          default: n(() => [...$[29] || ($[29] = [
            u(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c(oe, {
          variant: g.value ? "danger" : "primary",
          disabled: !f.value || !p.value.trim() || v.value || _.value,
          loading: v.value,
          onClick: k
        }, {
          default: n(() => [
            u(i(v.value ? "Committing..." : g.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Dt = /* @__PURE__ */ j(ef, [["__scopeId", "data-v-38b45183"]]), tf = { class: "modal-header" }, of = { class: "modal-body" }, sf = { class: "switch-message" }, af = { class: "switch-details" }, nf = { class: "modal-actions" }, lf = /* @__PURE__ */ G({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, s) => (o(), w(Ne, { to: "body" }, [
      t.show ? (o(), a("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = we(() => {
          }, ["stop"]))
        }, [
          e("div", tf, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", of, [
            e("p", sf, [
              s[6] || (s[6] = u(" Switch from ", -1)),
              e("strong", null, i(t.fromEnvironment), 1),
              s[7] || (s[7] = u(" to ", -1)),
              e("strong", null, i(t.toEnvironment), 1),
              s[8] || (s[8] = u("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", af, ' Your current work will be preserved. You can switch back to "' + i(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", nf, [
            c(A, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (l) => r.$emit("close"))
            }, {
              default: n(() => [...s[11] || (s[11] = [
                u(" Cancel ", -1)
              ])]),
              _: 1
            }),
            c(A, {
              variant: "primary",
              onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
            }, {
              default: n(() => [...s[12] || (s[12] = [
                u(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), rf = /* @__PURE__ */ j(lf, [["__scopeId", "data-v-e9c5253e"]]), df = { class: "progress-bar" }, cf = /* @__PURE__ */ G({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, s = B(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (l, h) => (o(), a("div", df, [
      e("div", {
        class: ee(["progress-fill", t.variant]),
        style: qe({ width: s.value })
      }, null, 6)
    ]));
  }
}), uf = /* @__PURE__ */ j(cf, [["__scopeId", "data-v-1beb0512"]]), mf = {
  key: 0,
  class: "modal-overlay"
}, vf = { class: "modal-content" }, ff = { class: "modal-body" }, gf = { class: "progress-info" }, hf = { class: "progress-percentage" }, pf = { class: "progress-state" }, yf = { class: "switch-steps" }, wf = { class: "step-icon" }, kf = { class: "step-label" }, bf = /* @__PURE__ */ G({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, s = B(() => {
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
      return r.message || p[r.state] || r.state;
    }), l = B(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), h = B(() => {
      const p = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], v = p.findIndex((g) => g.state === r.state);
      return p.map((g, m) => {
        let f = "pending", y = "○";
        return m < v ? (f = "completed", y = "✓") : m === v && (f = "active", y = "⟳"), {
          ...g,
          status: f,
          icon: y
        };
      });
    });
    return (p, v) => (o(), w(Ne, { to: "body" }, [
      t.show ? (o(), a("div", mf, [
        e("div", vf, [
          v[1] || (v[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", ff, [
            c(uf, {
              progress: t.progress,
              variant: l.value
            }, null, 8, ["progress", "variant"]),
            e("div", gf, [
              e("div", hf, i(t.progress) + "%", 1),
              e("div", pf, i(s.value), 1)
            ]),
            e("div", yf, [
              (o(!0), a(H, null, Q(h.value, (g) => (o(), a("div", {
                key: g.state,
                class: ee(["switch-step", g.status])
              }, [
                e("span", wf, i(g.icon), 1),
                e("span", kf, i(g.label), 1)
              ], 2))), 128))
            ]),
            v[0] || (v[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), _f = /* @__PURE__ */ j(bf, [["__scopeId", "data-v-768a5078"]]), $f = { class: "modal-header" }, Cf = { class: "modal-body" }, xf = {
  key: 0,
  class: "node-section"
}, Sf = { class: "node-list" }, If = {
  key: 1,
  class: "node-section"
}, Ef = { class: "node-list" }, zf = { class: "modal-actions" }, Mf = /* @__PURE__ */ G({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, s) => (o(), w(Ne, { to: "body" }, [
      t.show ? (o(), a("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (l) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = we(() => {
          }, ["stop"]))
        }, [
          e("div", $f, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Cf, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), a("div", xf, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Sf, [
                (o(!0), a(H, null, Q(t.mismatchDetails.missing_nodes, (l) => (o(), a("div", {
                  key: l,
                  class: "node-item add"
                }, " + " + i(l), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), a("div", If, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Ef, [
                (o(!0), a(H, null, Q(t.mismatchDetails.extra_nodes, (l) => (o(), a("div", {
                  key: l,
                  class: "node-item remove"
                }, " - " + i(l), 1))), 128))
              ])
            ])) : d("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", zf, [
            c(A, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (l) => r.$emit("close"))
            }, {
              default: n(() => [...s[10] || (s[10] = [
                u(" Cancel ", -1)
              ])]),
              _: 1
            }),
            c(A, {
              variant: "primary",
              onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
            }, {
              default: n(() => [...s[11] || (s[11] = [
                u(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Lf = /* @__PURE__ */ j(Mf, [["__scopeId", "data-v-7cad7518"]]);
async function tt(t, r = {}, s = 5e3) {
  const l = new AbortController(), h = setTimeout(() => l.abort(), s);
  try {
    const p = await fetch(t, {
      ...r,
      signal: l.signal
    });
    return clearTimeout(h), p;
  } catch (p) {
    throw clearTimeout(h), p.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : p;
  }
}
function Rf() {
  const t = C(null);
  async function r() {
    try {
      const v = await tt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (v.ok)
        return (await v.json()).port;
    } catch {
    }
    return 8189;
  }
  async function s() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const v = await tt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Health check failed");
      return await v.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function l() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const v = await tt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!v.ok) throw new Error("Failed to get status");
      return await v.json();
    } catch {
      return null;
    }
  }
  async function h() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await tt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await tt(
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
    restart: h,
    kill: p
  };
}
const Nf = { class: "comfygit-panel" }, Uf = { class: "panel-header" }, Bf = { class: "header-left" }, Tf = {
  key: 0,
  class: "header-info"
}, Df = { class: "header-actions" }, Of = { class: "env-switcher" }, Vf = {
  key: 0,
  class: "header-info"
}, Af = { class: "branch-name" }, Wf = { class: "panel-main" }, Ff = { class: "sidebar" }, Pf = { class: "sidebar-section" }, Hf = { class: "sidebar-section" }, Gf = { class: "sidebar-section" }, jf = { class: "content-area" }, Kf = {
  key: 0,
  class: "error-message"
}, qf = {
  key: 1,
  class: "loading"
}, Yf = { class: "dialog-content env-selector-dialog" }, Xf = { class: "dialog-header" }, Zf = { class: "dialog-body" }, Jf = { class: "env-list" }, Qf = { class: "env-info" }, eg = { class: "env-name-row" }, tg = { class: "env-indicator" }, og = { class: "env-name" }, sg = {
  key: 0,
  class: "env-branch"
}, ag = {
  key: 1,
  class: "current-label"
}, ng = { class: "env-stats" }, lg = ["onClick"], ig = { class: "toast-container" }, rg = { class: "toast-icon" }, dg = { class: "toast-message" }, cg = /* @__PURE__ */ G({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const s = r, {
      getStatus: l,
      getHistory: h,
      getBranches: p,
      checkout: v,
      createBranch: g,
      switchBranch: m,
      getEnvironments: f,
      switchEnvironment: y,
      getSwitchProgress: b,
      syncEnvironmentManually: _
    } = xe(), k = Rf(), x = C(null), $ = C([]), I = C([]), E = C([]), T = B(() => E.value.find((V) => V.is_current)), P = C(!1), N = C(null), O = C(null), L = C(!1), D = C(!1), z = C(!1), R = C(""), U = C({ state: "idle", progress: 0, message: "" });
    let X = null, F = null;
    const M = C("status"), J = C("this-env");
    function q(V, S) {
      M.value = V, J.value = S;
    }
    function _e(V) {
      const re = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[V];
      re && q(re.view, re.section);
    }
    function ve() {
      q("branches", "this-env");
    }
    const K = C(null), ye = C(!1), te = C(!1), Se = C([]);
    let ge = 0;
    function ue(V, S = "info", re = 3e3) {
      const fe = ++ge;
      return Se.value.push({ id: fe, message: V, type: S }), re > 0 && setTimeout(() => {
        Se.value = Se.value.filter((Me) => Me.id !== fe);
      }, re), fe;
    }
    function ze(V) {
      Se.value = Se.value.filter((S) => S.id !== V);
    }
    function et(V) {
      switch (V) {
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
    const Y = B(() => {
      if (!x.value) return "neutral";
      const V = x.value.workflows, S = V.new.length > 0 || V.modified.length > 0 || V.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? S ? "warning" : "success" : "error";
    });
    B(() => x.value ? Y.value === "success" ? "All synced" : Y.value === "warning" ? "Uncommitted changes" : Y.value === "error" ? "Not synced" : "" : "");
    async function ne() {
      P.value = !0, N.value = null;
      try {
        const [V, S, re, fe] = await Promise.all([
          l(),
          h(),
          p(),
          f()
        ]);
        x.value = V, $.value = S.commits, I.value = re.branches, E.value = fe, s("statusUpdate", V);
      } catch (V) {
        N.value = V instanceof Error ? V.message : "Failed to load status", x.value = null, $.value = [], I.value = [];
      } finally {
        P.value = !1;
      }
    }
    function he(V) {
      O.value = V;
    }
    async function Pe(V) {
      var re;
      O.value = null;
      const S = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      K.value = {
        title: S ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: S ? "You have uncommitted changes that will be lost." : `Checkout commit ${V.short_hash || ((re = V.hash) == null ? void 0 : re.slice(0, 7))}?`,
        details: S ? $t() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: S ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: S,
        onConfirm: async () => {
          var Le;
          K.value = null;
          const fe = ue(`Checking out ${V.short_hash || ((Le = V.hash) == null ? void 0 : Le.slice(0, 7))}...`, "info", 0), Me = await v(V.hash, S);
          ze(fe), Me.status === "success" ? ue("Restarting ComfyUI...", "success") : ue(Me.message || "Checkout failed", "error");
        }
      };
    }
    async function Ye(V) {
      const S = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      K.value = {
        title: S ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: S ? "You have uncommitted changes." : `Switch to branch "${V}"?`,
        details: S ? $t() : void 0,
        warning: S ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: S ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          K.value = null;
          const re = ue(`Switching to ${V}...`, "info", 0), fe = await m(V, S);
          ze(re), fe.status === "success" ? ue("Restarting ComfyUI...", "success") : ue(fe.message || "Branch switch failed", "error");
        }
      };
    }
    async function Z(V) {
      const S = ue(`Creating branch ${V}...`, "info", 0), re = await g(V);
      ze(S), re.status === "success" ? (ue(`Branch "${V}" created`, "success"), await ne()) : ue(re.message || "Failed to create branch", "error");
    }
    async function W(V) {
      O.value = null;
      const S = prompt("Enter branch name:");
      if (S) {
        const re = ue(`Creating branch ${S}...`, "info", 0), fe = await g(S, V.hash);
        ze(re), fe.status === "success" ? (ue(`Branch "${S}" created from ${V.short_hash}`, "success"), await ne()) : ue(fe.message || "Failed to create branch", "error");
      }
    }
    async function ie(V) {
      L.value = !1, R.value = V, D.value = !0;
    }
    async function me() {
      D.value = !1, z.value = !0, U.value = {
        progress: 10,
        state: He(10),
        message: lt(10)
      };
      try {
        await y(R.value), Ft(), Pt();
      } catch (V) {
        Ge(), z.value = !1, ue(`Failed to initiate switch: ${V instanceof Error ? V.message : "Unknown error"}`, "error"), U.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function He(V) {
      return V >= 100 ? "complete" : V >= 80 ? "validating" : V >= 60 ? "starting" : V >= 30 ? "syncing" : "preparing";
    }
    function lt(V) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[He(V)] || "";
    }
    function Ft() {
      if (F) return;
      let V = 10;
      const S = 60, re = 5e3, fe = 100, Me = (S - V) / (re / fe);
      F = window.setInterval(() => {
        if (V += Me, V >= S && (V = S, Ge()), U.value.progress < S) {
          const Le = Math.floor(V);
          U.value = {
            progress: Le,
            state: He(Le),
            message: lt(Le)
          };
        }
      }, fe);
    }
    function Ge() {
      F && (clearInterval(F), F = null);
    }
    function Pt() {
      X || (X = window.setInterval(async () => {
        try {
          let V = await k.getStatus();
          if ((!V || V.state === "idle") && (V = await b()), !V)
            return;
          const S = V.progress || 0;
          S >= 60 && Ge();
          const re = Math.max(S, U.value.progress), fe = V.state && V.state !== "idle" && V.state !== "unknown", Me = fe ? V.state : He(re), Le = fe && V.message || lt(re);
          U.value = {
            state: Me,
            progress: re,
            message: Le
          }, V.state === "complete" ? (Ge(), mt(), z.value = !1, ue(`✓ Switched to ${R.value}`, "success"), await ne(), R.value = "") : V.state === "rolled_back" ? (Ge(), mt(), z.value = !1, ue("Switch failed, restored previous environment", "warning"), R.value = "") : V.state === "critical_failure" && (Ge(), mt(), z.value = !1, ue(`Critical error during switch: ${V.message}`, "error"), R.value = "");
        } catch (V) {
          console.error("Failed to poll switch progress:", V);
        }
      }, 1e3));
    }
    function mt() {
      Ge(), X && (clearInterval(X), X = null);
    }
    function Ht() {
      D.value = !1, R.value = "";
    }
    async function Gt() {
      ye.value = !1, await ne(), ue("✓ Changes committed", "success");
    }
    async function jt() {
      te.value = !1;
      const V = ue("Syncing environment...", "info", 0);
      try {
        const S = await _("skip", !0);
        if (ze(V), S.status === "success") {
          const re = [];
          S.nodes_installed.length && re.push(`${S.nodes_installed.length} installed`), S.nodes_removed.length && re.push(`${S.nodes_removed.length} removed`);
          const fe = re.length ? `: ${re.join(", ")}` : "";
          ue(`✓ Environment synced${fe}`, "success"), await ne();
        } else {
          const re = S.errors.length ? S.errors.join("; ") : S.message;
          ue(`Sync failed: ${re}`, "error");
        }
      } catch (S) {
        ze(V), ue(`Sync error: ${S instanceof Error ? S.message : "Unknown error"}`, "error");
      }
    }
    async function Kt(V) {
      const S = ue(`Creating environment "${V}"...`, "info", 0);
      ze(S), ue("Environment creation not yet implemented", "warning");
    }
    async function qt(V) {
      const S = ue(`Deleting environment "${V}"...`, "info", 0);
      ze(S), ue("Environment deletion not yet implemented", "warning");
    }
    function Yt(V) {
      ue(`Viewing details for "${V}"`, "info"), q("models-env", "this-env");
    }
    function $t() {
      if (!x.value) return [];
      const V = [], S = x.value.workflows;
      return S.new.length && V.push(`${S.new.length} new workflow(s)`), S.modified.length && V.push(`${S.modified.length} modified workflow(s)`), S.deleted.length && V.push(`${S.deleted.length} deleted workflow(s)`), V;
    }
    return be(ne), (V, S) => {
      var re, fe, Me, Le;
      return o(), a("div", Nf, [
        e("div", Uf, [
          e("div", Bf, [
            S[27] || (S[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (o(), a("div", Tf)) : d("", !0)
          ]),
          e("div", Df, [
            e("button", {
              class: ee(["icon-btn", { spinning: P.value }]),
              onClick: ne,
              title: "Refresh"
            }, [...S[28] || (S[28] = [
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
              onClick: S[0] || (S[0] = (ae) => s("close")),
              title: "Close"
            }, [...S[29] || (S[29] = [
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
        e("div", Of, [
          S[31] || (S[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: S[1] || (S[1] = (ae) => q("environments", "all-envs"))
          }, [
            x.value ? (o(), a("div", Vf, [
              e("span", null, i(((re = T.value) == null ? void 0 : re.name) || ((fe = x.value) == null ? void 0 : fe.environment) || "Loading..."), 1),
              e("span", Af, "(" + i(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            S[30] || (S[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Wf, [
          e("div", Ff, [
            e("div", Pf, [
              S[32] || (S[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "status" && J.value === "this-env" }]),
                onClick: S[2] || (S[2] = (ae) => q("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "workflows" }]),
                onClick: S[3] || (S[3] = (ae) => q("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "models-env" }]),
                onClick: S[4] || (S[4] = (ae) => q("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "branches" }]),
                onClick: S[5] || (S[5] = (ae) => q("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "history" }]),
                onClick: S[6] || (S[6] = (ae) => q("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "nodes" }]),
                onClick: S[7] || (S[7] = (ae) => q("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "debug-env" }]),
                onClick: S[8] || (S[8] = (ae) => q("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            S[35] || (S[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Hf, [
              S[33] || (S[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "environments" }]),
                onClick: S[9] || (S[9] = (ae) => q("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "model-index" }]),
                onClick: S[10] || (S[10] = (ae) => q("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "settings" }]),
                onClick: S[11] || (S[11] = (ae) => q("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "debug-workspace" }]),
                onClick: S[12] || (S[12] = (ae) => q("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            S[36] || (S[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Gf, [
              S[34] || (S[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "export" }]),
                onClick: S[13] || (S[13] = (ae) => q("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "import" }]),
                onClick: S[14] || (S[14] = (ae) => q("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ee(["sidebar-item", { active: M.value === "remotes" }]),
                onClick: S[15] || (S[15] = (ae) => q("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", jf, [
            N.value ? (o(), a("div", Kf, i(N.value), 1)) : !x.value && M.value === "status" ? (o(), a("div", qf, " Loading status... ")) : (o(), a(H, { key: 2 }, [
              M.value === "status" ? (o(), w(za, {
                key: 0,
                status: x.value,
                onSwitchBranch: ve,
                onCommitChanges: S[16] || (S[16] = (ae) => ye.value = !0),
                onSyncEnvironment: S[17] || (S[17] = (ae) => te.value = !0),
                onViewWorkflows: S[18] || (S[18] = (ae) => q("workflows", "this-env")),
                onViewHistory: S[19] || (S[19] = (ae) => q("history", "this-env")),
                onViewDebug: S[20] || (S[20] = (ae) => q("debug-env", "this-env"))
              }, null, 8, ["status"])) : M.value === "workflows" ? (o(), w(Od, {
                key: 1,
                onRefresh: ne
              })) : M.value === "models-env" ? (o(), w(Wd, {
                key: 2,
                onNavigate: _e
              })) : M.value === "branches" ? (o(), w(Ha, {
                key: 3,
                branches: I.value,
                current: ((Me = x.value) == null ? void 0 : Me.branch) || null,
                onSwitch: Ye,
                onCreate: Z
              }, null, 8, ["branches", "current"])) : M.value === "history" ? (o(), w(tn, {
                key: 4,
                commits: $.value,
                onSelect: he,
                onCheckout: Pe
              }, null, 8, ["commits"])) : M.value === "nodes" ? (o(), w(qd, { key: 5 })) : M.value === "debug-env" ? (o(), w(jc, { key: 6 })) : M.value === "environments" ? (o(), w(au, {
                key: 7,
                onSwitch: ie,
                onCreate: Kt,
                onDelete: qt,
                onViewDetails: Yt
              })) : M.value === "model-index" ? (o(), w(Pd, { key: 8 })) : M.value === "settings" ? (o(), w(Fc, { key: 9 })) : M.value === "debug-workspace" ? (o(), w(Hc, { key: 10 })) : M.value === "export" ? (o(), w(fu, { key: 11 })) : M.value === "import" ? (o(), w(Fm, { key: 12 })) : M.value === "remotes" ? (o(), w(Cc, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        O.value ? (o(), w(lv, {
          key: 0,
          commit: O.value,
          onClose: S[21] || (S[21] = (ae) => O.value = null),
          onCheckout: Pe,
          onCreateBranch: W
        }, null, 8, ["commit"])) : d("", !0),
        K.value ? (o(), w(uv, {
          key: 1,
          title: K.value.title,
          message: K.value.message,
          details: K.value.details,
          warning: K.value.warning,
          confirmLabel: K.value.confirmLabel,
          cancelLabel: K.value.cancelLabel,
          secondaryLabel: K.value.secondaryLabel,
          secondaryAction: K.value.secondaryAction,
          destructive: K.value.destructive,
          onConfirm: K.value.onConfirm,
          onCancel: S[22] || (S[22] = (ae) => K.value = null),
          onSecondary: K.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        c(rf, {
          show: D.value,
          "from-environment": ((Le = T.value) == null ? void 0 : Le.name) || "unknown",
          "to-environment": R.value,
          onConfirm: me,
          onClose: Ht
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ye.value && x.value ? (o(), w(Dt, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: S[23] || (S[23] = (ae) => ye.value = !1),
          onCommitted: Gt
        }, null, 8, ["status"])) : d("", !0),
        te.value && x.value ? (o(), w(Lf, {
          key: 3,
          show: te.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: jt,
          onClose: S[24] || (S[24] = (ae) => te.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        c(_f, {
          show: z.value,
          state: U.value.state,
          progress: U.value.progress,
          message: U.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        L.value ? (o(), a("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: S[26] || (S[26] = we((ae) => L.value = !1, ["self"]))
        }, [
          e("div", Yf, [
            e("div", Xf, [
              S[38] || (S[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: S[25] || (S[25] = (ae) => L.value = !1)
              }, [...S[37] || (S[37] = [
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
            e("div", Zf, [
              S[39] || (S[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Jf, [
                (o(!0), a(H, null, Q(E.value, (ae) => (o(), a("div", {
                  key: ae.name,
                  class: ee(["env-item", { current: ae.is_current }])
                }, [
                  e("div", Qf, [
                    e("div", eg, [
                      e("span", tg, i(ae.is_current ? "●" : "○"), 1),
                      e("span", og, i(ae.name), 1),
                      ae.current_branch ? (o(), a("span", sg, "(" + i(ae.current_branch) + ")", 1)) : d("", !0),
                      ae.is_current ? (o(), a("span", ag, "CURRENT")) : d("", !0)
                    ]),
                    e("div", ng, i(ae.workflow_count) + " workflows • " + i(ae.node_count) + " nodes ", 1)
                  ]),
                  ae.is_current ? d("", !0) : (o(), a("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (_g) => ie(ae.name)
                  }, " SWITCH ", 8, lg))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        e("div", ig, [
          c(Qt, { name: "toast" }, {
            default: n(() => [
              (o(!0), a(H, null, Q(Se.value, (ae) => (o(), a("div", {
                key: ae.id,
                class: ee(["toast", ae.type])
              }, [
                e("span", rg, i(et(ae.type)), 1),
                e("span", dg, i(ae.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), ug = /* @__PURE__ */ j(cg, [["__scopeId", "data-v-2c8b25b1"]]), mg = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', vg = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', fg = {
  comfy: mg,
  phosphor: vg
}, bt = "comfy", Ot = "comfygit-theme";
let je = null, Vt = bt;
function gg() {
  try {
    const t = localStorage.getItem(Ot);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return bt;
}
function At(t = bt) {
  je && je.remove(), je = document.createElement("style"), je.id = "comfygit-theme-styles", je.setAttribute("data-theme", t), je.textContent = fg[t], document.head.appendChild(je), document.body.setAttribute("data-comfygit-theme", t), Vt = t;
  try {
    localStorage.setItem(Ot, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function hg() {
  return Vt;
}
function pg(t) {
  At(t);
}
const _t = document.createElement("link");
_t.rel = "stylesheet";
_t.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(_t);
const yg = gg();
At(yg);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), pg(t);
  },
  getTheme: () => {
    const t = hg();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Re = null, Ie = null, at = null;
const Ze = C(null);
async function yt() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const r = await window.app.api.fetchApi("/v2/comfygit/status");
    r.ok && (Ze.value = await r.json());
  } catch {
  }
}
function wg() {
  if (!Ze.value) return !1;
  const t = Ze.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ze.value.has_changes;
}
function kg() {
  Re && Re.remove(), Re = document.createElement("div"), Re.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Re.appendChild(t), Re.addEventListener("click", (l) => {
    l.target === Re && gt();
  });
  const r = (l) => {
    l.key === "Escape" && (gt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Rt({
    render: () => Nt(ug, {
      onClose: gt,
      onStatusUpdate: (l) => {
        Ze.value = l, ct();
      }
    })
  }).mount(t), document.body.appendChild(Re);
}
function gt() {
  Re && (Re.remove(), Re = null);
}
function bg(t) {
  ot(), Ie = document.createElement("div"), Ie.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  Ie.style.position = "fixed", Ie.style.top = `${r.bottom + 8}px`, Ie.style.right = `${window.innerWidth - r.right}px`, Ie.style.zIndex = "10001";
  const s = (h) => {
    Ie && !Ie.contains(h.target) && h.target !== t && (ot(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const l = (h) => {
    h.key === "Escape" && (ot(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), at = Rt({
    render: () => Nt(Dt, {
      status: Ze.value,
      onClose: ot,
      onCommitted: () => {
        ot(), yt().then(ct);
      }
    })
  }), at.mount(Ie), document.body.appendChild(Ie);
}
function ot() {
  at && (at.unmount(), at = null), Ie && (Ie.remove(), Ie = null);
}
let Te = null;
function ct() {
  if (!Te) return;
  const t = Te.querySelector(".commit-indicator");
  t && (t.style.display = wg() ? "block" : "none");
}
const Wt = document.createElement("style");
Wt.textContent = `
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
document.head.appendChild(Wt);
vt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, l;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = kg, Te = document.createElement("button"), Te.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Te.innerHTML = 'Commit <span class="commit-indicator"></span>', Te.title = "Quick Commit", Te.onclick = () => bg(Te), t.appendChild(r), t.appendChild(Te), (l = (s = vt.menu) == null ? void 0 : s.settingsGroup) != null && l.element && (vt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await yt(), ct(), setInterval(async () => {
      await yt(), ct();
    }, 3e4);
  }
});
