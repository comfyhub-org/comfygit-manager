import { app as Ke } from "../../scripts/app.js";
import { defineComponent as K, createElementBlock as a, openBlock as o, createCommentVNode as u, createElementVNode as e, renderSlot as ne, createBlock as k, resolveDynamicComponent as yt, normalizeClass as J, withCtx as n, toDisplayString as c, createVNode as m, createTextVNode as f, computed as D, Fragment as G, renderList as Q, normalizeStyle as at, ref as S, onMounted as he, watch as zt, Teleport as ze, withModifiers as fe, Transition as Zt, withKeys as Be, onUnmounted as Jt, resolveComponent as Qt, createSlots as Mt, TransitionGroup as eo, createApp as Lt, h as Rt } from "vue";
const to = { class: "panel-layout" }, oo = {
  key: 0,
  class: "panel-layout-header"
}, so = {
  key: 1,
  class: "panel-layout-search"
}, ao = { class: "panel-layout-content" }, no = {
  key: 2,
  class: "panel-layout-footer"
}, lo = /* @__PURE__ */ K({
  __name: "PanelLayout",
  setup(t) {
    return (r, s) => (o(), a("div", to, [
      r.$slots.header ? (o(), a("div", oo, [
        ne(r.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      r.$slots.search ? (o(), a("div", so, [
        ne(r.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      e("div", ao, [
        ne(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (o(), a("div", no, [
        ne(r.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), q = (t, r) => {
  const s = t.__vccOpts || t;
  for (const [i, g] of r)
    s[i] = g;
  return s;
}, we = /* @__PURE__ */ q(lo, [["__scopeId", "data-v-21565df9"]]), io = {
  key: 0,
  class: "panel-title-prefix"
}, ro = {
  key: 1,
  class: "panel-title-prefix-theme"
}, co = /* @__PURE__ */ K({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, s) => (o(), k(yt(`h${t.level}`), {
      class: J(["panel-title", t.variant])
    }, {
      default: n(() => [
        t.showPrefix ? (o(), a("span", io, c(t.prefix), 1)) : (o(), a("span", ro)),
        ne(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), uo = /* @__PURE__ */ q(co, [["__scopeId", "data-v-c3875efc"]]), mo = ["title"], vo = ["width", "height"], fo = /* @__PURE__ */ K({
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
      onClick: s[0] || (s[0] = (i) => r.$emit("click"))
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
      ])], 8, vo))
    ], 8, mo));
  }
}), Nt = /* @__PURE__ */ q(fo, [["__scopeId", "data-v-6fc7f16d"]]), go = { class: "header-left" }, ho = {
  key: 0,
  class: "header-actions"
}, po = /* @__PURE__ */ K({
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
      class: J(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", go, [
        m(uo, { "show-prefix": t.showPrefix }, {
          default: n(() => [
            f(c(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), k(Nt, {
          key: 0,
          onClick: s[0] || (s[0] = (i) => r.$emit("info-click"))
        })) : u("", !0)
      ]),
      r.$slots.actions ? (o(), a("div", ho, [
        ne(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), be = /* @__PURE__ */ q(po, [["__scopeId", "data-v-55a62cd6"]]), yo = {
  key: 0,
  class: "section-title-count"
}, wo = {
  key: 1,
  class: "section-title-icon"
}, bo = /* @__PURE__ */ K({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, s) => (o(), k(yt(`h${t.level}`), {
      class: J(["section-title", { clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && r.$emit("click"))
    }, {
      default: n(() => [
        ne(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), a("span", yo, "(" + c(t.count) + ")", 1)) : u("", !0),
        t.clickable ? (o(), a("span", wo, c(t.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $e = /* @__PURE__ */ q(bo, [["__scopeId", "data-v-559361eb"]]), ko = { class: "status-grid" }, _o = { class: "status-grid__column" }, $o = { class: "status-grid__title" }, Co = { class: "status-grid__column status-grid__column--right" }, xo = { class: "status-grid__title" }, So = /* @__PURE__ */ K({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, s) => (o(), a("div", ko, [
      e("div", _o, [
        e("h4", $o, c(t.leftTitle), 1),
        ne(r.$slots, "left", {}, void 0, !0)
      ]),
      e("div", Co, [
        e("h4", xo, c(t.rightTitle), 1),
        ne(r.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Io = /* @__PURE__ */ q(So, [["__scopeId", "data-v-fe556068"]]), Eo = {
  key: 0,
  class: "status-item__icon"
}, zo = {
  key: 1,
  class: "status-item__count"
}, Mo = { class: "status-item__label" }, Lo = /* @__PURE__ */ K({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, s = D(() => `status-item--${r.variant}`);
    return (i, g) => (o(), a("div", {
      class: J(["status-item", s.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), a("span", Eo, c(t.icon), 1)) : u("", !0),
      t.count !== void 0 ? (o(), a("span", zo, c(t.count), 1)) : u("", !0),
      e("span", Mo, c(t.label), 1)
    ], 2));
  }
}), Ne = /* @__PURE__ */ q(Lo, [["__scopeId", "data-v-6f929183"]]), Ro = { class: "issue-card__header" }, No = { class: "issue-card__icon" }, To = { class: "issue-card__title" }, Uo = {
  key: 0,
  class: "issue-card__content"
}, Bo = {
  key: 0,
  class: "issue-card__description"
}, Do = {
  key: 1,
  class: "issue-card__items"
}, Oo = {
  key: 2,
  class: "issue-card__actions"
}, Vo = /* @__PURE__ */ K({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, s = D(() => `issue-card--${r.severity}`);
    return (i, g) => (o(), a("div", {
      class: J(["issue-card", s.value])
    }, [
      e("div", Ro, [
        e("span", No, c(t.icon), 1),
        e("h4", To, c(t.title), 1)
      ]),
      i.$slots.default || t.description ? (o(), a("div", Uo, [
        t.description ? (o(), a("p", Bo, c(t.description), 1)) : u("", !0),
        ne(i.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      t.items && t.items.length ? (o(), a("div", Do, [
        (o(!0), a(G, null, Q(t.items, (h, v) => (o(), a("div", {
          key: v,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, c(h), 1)
        ]))), 128))
      ])) : u("", !0),
      i.$slots.actions ? (o(), a("div", Oo, [
        ne(i.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Ge = /* @__PURE__ */ q(Vo, [["__scopeId", "data-v-df6aa348"]]), Ao = ["type", "disabled"], Wo = {
  key: 0,
  class: "spinner"
}, Fo = /* @__PURE__ */ K({
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
      class: J(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => r.$emit("click", i))
    }, [
      t.loading ? (o(), a("span", Wo)) : u("", !0),
      t.loading ? u("", !0) : ne(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ao));
  }
}), F = /* @__PURE__ */ q(Fo, [["__scopeId", "data-v-772abe47"]]), Po = { class: "empty-state" }, Go = {
  key: 0,
  class: "empty-icon"
}, Ho = { class: "empty-message" }, jo = /* @__PURE__ */ K({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, s) => (o(), a("div", Po, [
      t.icon ? (o(), a("div", Go, c(t.icon), 1)) : u("", !0),
      e("p", Ho, c(t.message), 1),
      t.actionLabel ? (o(), k(F, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => r.$emit("action"))
      }, {
        default: n(() => [
          f(c(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ q(jo, [["__scopeId", "data-v-4466284f"]]), Ko = { class: "branch-indicator" }, qo = { class: "branch-indicator__info" }, Xo = { class: "branch-indicator__label" }, Yo = { class: "branch-indicator__name" }, Zo = {
  key: 0,
  class: "branch-indicator__remote"
}, Jo = {
  key: 0,
  class: "branch-indicator__status"
}, Qo = {
  key: 0,
  class: "branch-indicator__ahead"
}, es = {
  key: 1,
  class: "branch-indicator__behind"
}, ts = {
  key: 1,
  class: "branch-indicator__actions"
}, os = /* @__PURE__ */ K({
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
    return (r, s) => (o(), a("div", Ko, [
      e("div", qo, [
        e("span", Xo, c(t.label), 1),
        e("span", Yo, c(t.branchName), 1),
        t.remote ? (o(), a("span", Zo, "@" + c(t.remote), 1)) : u("", !0)
      ]),
      t.showStatus && (t.commitsAhead || t.commitsBehind) ? (o(), a("div", Jo, [
        t.commitsAhead ? (o(), a("span", Qo, " ↑ " + c(t.commitsAhead) + " ahead ", 1)) : u("", !0),
        t.commitsBehind ? (o(), a("span", es, " ↓ " + c(t.commitsBehind) + " behind ", 1)) : u("", !0)
      ])) : u("", !0),
      r.$slots.actions ? (o(), a("div", ts, [
        ne(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ q(os, [["__scopeId", "data-v-cb8dd50e"]]), as = /* @__PURE__ */ K({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, s) => (o(), a("span", {
      class: J(["detail-label"]),
      style: at({ minWidth: t.minWidth })
    }, [
      ne(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ht = /* @__PURE__ */ q(as, [["__scopeId", "data-v-75e9eeb8"]]), ns = /* @__PURE__ */ K({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, s) => (o(), a("span", {
      class: J(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ne(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ q(ns, [["__scopeId", "data-v-2f186e4c"]]), ls = { class: "detail-row" }, is = /* @__PURE__ */ K({
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
    return (r, s) => (o(), a("div", ls, [
      m(ht, { "min-width": t.labelMinWidth }, {
        default: n(() => [
          f(c(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), k(pt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: n(() => [
          f(c(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ne(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), oe = /* @__PURE__ */ q(is, [["__scopeId", "data-v-ef15664a"]]), rs = { class: "modal-header" }, cs = { class: "modal-body" }, ds = { class: "status-section" }, us = {
  key: 0,
  class: "status-section"
}, ms = { class: "section-header-row" }, vs = {
  key: 0,
  class: "workflow-group"
}, fs = { class: "workflow-group-header" }, gs = { class: "workflow-group-title" }, hs = { class: "workflow-list" }, ps = { class: "workflow-name" }, ys = { class: "workflow-issue" }, ws = {
  key: 1,
  class: "workflow-group"
}, bs = { class: "workflow-group-header" }, ks = { class: "workflow-group-title" }, _s = { class: "workflow-list" }, $s = { class: "workflow-name" }, Cs = { class: "workflow-issue" }, xs = {
  key: 2,
  class: "workflow-group"
}, Ss = { class: "workflow-group-header" }, Is = { class: "workflow-group-title" }, Es = { class: "workflow-list" }, zs = { class: "workflow-name" }, Ms = {
  key: 3,
  class: "workflow-group"
}, Ls = { class: "workflow-group-header" }, Rs = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Ts = { class: "workflow-name" }, Us = {
  key: 4,
  class: "workflow-group"
}, Bs = { class: "workflow-group-header" }, Ds = { class: "workflow-group-title" }, Os = { class: "workflow-list" }, Vs = { class: "workflow-name" }, As = {
  key: 5,
  class: "workflow-group"
}, Ws = { class: "workflow-group-title" }, Fs = { class: "expand-icon" }, Ps = {
  key: 0,
  class: "workflow-list"
}, Gs = { class: "workflow-name" }, Hs = {
  key: 1,
  class: "status-section"
}, js = {
  key: 0,
  class: "change-group"
}, Ks = { class: "change-group-header" }, qs = { class: "change-group-title" }, Xs = { class: "change-list" }, Ys = { class: "node-name" }, Zs = {
  key: 0,
  class: "dev-badge"
}, Js = {
  key: 1,
  class: "change-group"
}, Qs = { class: "change-group-header" }, ea = { class: "change-group-title" }, ta = { class: "change-list" }, oa = { class: "node-name" }, sa = {
  key: 0,
  class: "dev-badge"
}, aa = {
  key: 2,
  class: "change-group"
}, na = { class: "change-list" }, la = { class: "change-item" }, ia = { class: "node-name" }, ra = {
  key: 3,
  class: "change-group"
}, ca = {
  key: 2,
  class: "status-section"
}, da = {
  key: 0,
  class: "drift-item"
}, ua = { class: "drift-list" }, ma = {
  key: 0,
  class: "drift-list-more"
}, va = {
  key: 1,
  class: "drift-item"
}, fa = { class: "drift-list" }, ga = {
  key: 0,
  class: "drift-list-more"
}, ha = {
  key: 2,
  class: "drift-item"
}, pa = {
  key: 3,
  class: "drift-item"
}, ya = {
  key: 3,
  class: "status-section"
}, wa = { class: "info-box" }, ba = { class: "drift-list" }, ka = {
  key: 0,
  class: "drift-list-more"
}, _a = {
  key: 4,
  class: "status-section"
}, $a = { class: "warning-box" }, Ca = {
  key: 5,
  class: "empty-state-inline"
}, xa = { class: "modal-actions" }, Sa = /* @__PURE__ */ K({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows"],
  setup(t) {
    const r = t, s = S(!1);
    he(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), zt(() => r.show, (y, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", y);
    }, { immediate: !0 });
    const i = D(() => {
      var y, b, E;
      return ((E = (b = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : E.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), g = D(() => {
      var y, b, E;
      return ((E = (b = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : E.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), h = D(() => {
      var y, b, E;
      return ((E = (b = (y = r.status) == null ? void 0 : y.workflows) == null ? void 0 : b.synced) == null ? void 0 : E.filter((x) => {
        var W, Z, N;
        const M = (N = (Z = (W = r.status) == null ? void 0 : W.workflows) == null ? void 0 : Z.analyzed) == null ? void 0 : N.find((_) => _.name === x);
        return !M || M.status !== "broken";
      })) || [];
    }), v = D(() => {
      var y, b, E, x, M;
      return (y = r.status) != null && y.workflows ? (((b = r.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((E = r.status.workflows.modified) == null ? void 0 : E.length) ?? 0) > 0 || (((x = r.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((M = r.status.workflows.synced) == null ? void 0 : M.length) ?? 0) > 0 : !1;
    }), d = D(() => {
      var b, E, x;
      const y = (b = r.status) == null ? void 0 : b.git_changes;
      return y ? (((E = y.nodes_added) == null ? void 0 : E.length) ?? 0) > 0 || (((x = y.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || y.workflow_changes || y.has_other_changes : !1;
    }), l = D(() => {
      var y, b, E, x, M, W;
      return !v.value && !d.value && ((b = (y = r.status) == null ? void 0 : y.comparison) == null ? void 0 : b.is_synced) && (((E = r.status) == null ? void 0 : E.missing_models_count) ?? 0) === 0 && (((W = (M = (x = r.status) == null ? void 0 : x.comparison) == null ? void 0 : M.disabled_nodes) == null ? void 0 : W.length) ?? 0) === 0;
    }), p = D(() => {
      var b, E;
      const y = (E = (b = r.status) == null ? void 0 : b.git_changes) == null ? void 0 : E.workflow_changes;
      return y ? typeof y == "number" ? y : Object.keys(y).length : 0;
    });
    function C(y) {
      return typeof y == "string" ? y : y.name;
    }
    function w(y) {
      return typeof y == "object" && y.is_development === !0;
    }
    return (y, b) => {
      var E, x, M, W, Z, N, _, U, R, V, z, T, B, H, O, L, X, j, pe, xe, de, ue;
      return o(), k(ze, { to: "body" }, [
        t.show ? (o(), a("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[5] || (b[5] = (ee) => y.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[4] || (b[4] = fe(() => {
            }, ["stop"]))
          }, [
            e("div", rs, [
              b[6] || (b[6] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (ee) => y.$emit("close"))
              }, "✕")
            ]),
            e("div", cs, [
              e("div", ds, [
                m($e, { level: "4" }, {
                  default: n(() => [...b[7] || (b[7] = [
                    f("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                m(oe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              v.value ? (o(), a("div", us, [
                e("div", ms, [
                  m($e, { level: "4" }, {
                    default: n(() => [...b[8] || (b[8] = [
                      f("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[1] || (b[1] = (ee) => y.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (o(), a("div", vs, [
                  e("div", fs, [
                    b[9] || (b[9] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", gs, "BROKEN (COMMITTED) (" + c(i.value.length) + ")", 1)
                  ]),
                  e("div", hs, [
                    (o(!0), a(G, null, Q(i.value, (ee) => (o(), a("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", ps, c(ee.name), 1),
                      e("span", ys, c(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                g.value.length ? (o(), a("div", ws, [
                  e("div", bs, [
                    b[10] || (b[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", ks, "BROKEN (UNCOMMITTED) (" + c(g.value.length) + ")", 1)
                  ]),
                  e("div", _s, [
                    (o(!0), a(G, null, Q(g.value, (ee) => (o(), a("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", $s, c(ee.name), 1),
                      e("span", Cs, c(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (x = (E = t.status.workflows) == null ? void 0 : E.new) != null && x.length ? (o(), a("div", xs, [
                  e("div", Ss, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Is, "NEW (" + c(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Es, [
                    (o(!0), a(G, null, Q(t.status.workflows.new, (ee) => (o(), a("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", zs, c(ee), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (W = (M = t.status.workflows) == null ? void 0 : M.modified) != null && W.length ? (o(), a("div", Ms, [
                  e("div", Ls, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Rs, "MODIFIED (" + c(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), a(G, null, Q(t.status.workflows.modified, (ee) => (o(), a("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Ts, c(ee), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (N = (Z = t.status.workflows) == null ? void 0 : Z.deleted) != null && N.length ? (o(), a("div", Us, [
                  e("div", Bs, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Ds, "DELETED (" + c(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Os, [
                    (o(!0), a(G, null, Q(t.status.workflows.deleted, (ee) => (o(), a("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Vs, c(ee), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                h.value.length ? (o(), a("div", As, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (ee) => s.value = !s.value)
                  }, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Ws, "SYNCED (" + c(h.value.length) + ")", 1),
                    e("span", Fs, c(s.value ? "▼" : "▶"), 1)
                  ]),
                  s.value ? (o(), a("div", Ps, [
                    (o(!0), a(G, null, Q(h.value, (ee) => (o(), a("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Gs, c(ee), 1)
                    ]))), 128))
                  ])) : u("", !0)
                ])) : u("", !0)
              ])) : u("", !0),
              d.value ? (o(), a("div", Hs, [
                m($e, { level: "4" }, {
                  default: n(() => [...b[15] || (b[15] = [
                    f("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (U = (_ = t.status.git_changes) == null ? void 0 : _.nodes_added) != null && U.length ? (o(), a("div", js, [
                  e("div", Ks, [
                    b[16] || (b[16] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", qs, "NODES ADDED (" + c(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Xs, [
                    (o(!0), a(G, null, Q(t.status.git_changes.nodes_added, (ee) => (o(), a("div", {
                      key: C(ee),
                      class: "change-item"
                    }, [
                      e("span", Ys, c(C(ee)), 1),
                      w(ee) ? (o(), a("span", Zs, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (V = (R = t.status.git_changes) == null ? void 0 : R.nodes_removed) != null && V.length ? (o(), a("div", Js, [
                  e("div", Qs, [
                    b[17] || (b[17] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ea, "NODES REMOVED (" + c(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", ta, [
                    (o(!0), a(G, null, Q(t.status.git_changes.nodes_removed, (ee) => (o(), a("div", {
                      key: C(ee),
                      class: "change-item"
                    }, [
                      e("span", oa, c(C(ee)), 1),
                      w(ee) ? (o(), a("span", sa, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (z = t.status.git_changes) != null && z.workflow_changes ? (o(), a("div", aa, [
                  b[18] || (b[18] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", na, [
                    e("div", la, [
                      e("span", ia, c(p.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : u("", !0),
                (T = t.status.git_changes) != null && T.has_other_changes ? (o(), a("div", ra, [...b[19] || (b[19] = [
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
              (B = t.status.comparison) != null && B.is_synced ? u("", !0) : (o(), a("div", ca, [
                m($e, { level: "4" }, {
                  default: n(() => [...b[20] || (b[20] = [
                    f("ENVIRONMENT DRIFT", -1)
                  ])]),
                  _: 1
                }),
                b[21] || (b[21] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (O = (H = t.status.comparison) == null ? void 0 : H.missing_nodes) != null && O.length ? (o(), a("div", da, [
                  m(oe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ua, [
                    (o(!0), a(G, null, Q(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), a("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + c(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), a("div", ma, " ... and " + c(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (X = (L = t.status.comparison) == null ? void 0 : L.extra_nodes) != null && X.length ? (o(), a("div", va, [
                  m(oe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", fa, [
                    (o(!0), a(G, null, Q(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), a("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + c(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), a("div", ga, " ... and " + c(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (pe = (j = t.status.comparison) == null ? void 0 : j.version_mismatches) != null && pe.length ? (o(), a("div", ha, [
                  m(oe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : u("", !0),
                (xe = t.status.comparison) != null && xe.packages_in_sync ? u("", !0) : (o(), a("div", pa, [
                  m(oe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ue = (de = t.status.comparison) == null ? void 0 : de.disabled_nodes) != null && ue.length ? (o(), a("div", ya, [
                m($e, { level: "4" }, {
                  default: n(() => [...b[22] || (b[22] = [
                    f("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", wa, [
                  b[23] || (b[23] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, c(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", ba, [
                  (o(!0), a(G, null, Q(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), a("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + c(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), a("div", ka, " ... and " + c(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : u("", !0)
                ])
              ])) : u("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), a("div", _a, [
                m($e, { level: "4" }, {
                  default: n(() => [...b[24] || (b[24] = [
                    f("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", $a, [
                  b[25] || (b[25] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, c(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[26] || (b[26] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : u("", !0),
              l.value ? (o(), a("div", Ca, [...b[27] || (b[27] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : u("", !0)
            ]),
            e("div", xa, [
              m(F, {
                variant: "secondary",
                onClick: b[3] || (b[3] = (ee) => y.$emit("close"))
              }, {
                default: n(() => [...b[28] || (b[28] = [
                  f(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), Ct = /* @__PURE__ */ q(Sa, [["__scopeId", "data-v-cbde957e"]]), Ia = { class: "health-section-header" }, Ea = { style: { "margin-top": "var(--cg-space-1)" } }, za = {
  key: 1,
  style: { "margin-top": "var(--cg-space-4)" }
}, Ma = /* @__PURE__ */ K({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch", "create-branch"],
  setup(t, { emit: r }) {
    const s = t, i = S(!1), g = S(!1);
    he(() => {
      console.log("StatusSection mounted with status:", s.status), console.log("StatusDetailModal component imported:", Ct);
    });
    function h() {
      console.log("Show All clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function v() {
      console.log("View Changes clicked, opening modal"), console.log("showDetailModal before:", i.value), i.value = !0, console.log("showDetailModal after:", i.value);
    }
    function d() {
      i.value = !1, l("view-workflows");
    }
    const l = r, p = D(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), C = D(() => {
      const N = s.status.git_changes;
      return N.nodes_added.length > 0 || N.nodes_removed.length > 0 || N.workflow_changes || N.has_other_changes;
    }), w = D(() => p.value || C.value), y = D(() => Object.keys(s.status.git_changes.workflow_changes_detail).length), b = D(() => s.status.git_changes.has_other_changes), E = D(() => {
      var N;
      return ((N = s.status.workflows.analyzed) == null ? void 0 : N.filter(
        (_) => _.status === "broken" && _.sync_state === "synced"
      )) || [];
    }), x = D(() => {
      var N;
      return ((N = s.status.workflows.analyzed) == null ? void 0 : N.filter(
        (_) => _.status === "broken" && _.sync_state !== "synced"
      )) || [];
    }), M = D(() => E.value.length > 0 || x.value.length > 0), W = D(() => M.value || s.status.missing_models_count > 0 || w.value || !s.status.comparison.is_synced), Z = D(() => {
      const N = [];
      return s.status.workflows.new.length > 0 && N.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && N.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && N.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && N.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && N.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${N.length > 0 ? N.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (N, _) => (o(), a(G, null, [
      m(we, null, {
        header: n(() => [
          m(be, { title: "STATUS" })
        ]),
        content: n(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: _[0] || (_[0] = (U) => g.value = !0),
            onMouseleave: _[1] || (_[1] = (U) => g.value = !1)
          }, [
            e("div", Ia, [
              m($e, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: n(() => [..._[11] || (_[11] = [
                  f(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              m(Zt, { name: "fade" }, {
                default: n(() => [
                  g.value ? (o(), k(F, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: h
                  }, {
                    default: n(() => [..._[12] || (_[12] = [
                      f(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : u("", !0)
                ]),
                _: 1
              })
            ]),
            m(Io, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, {
              left: n(() => [
                t.status.workflows.new.length ? (o(), k(Ne, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.modified.length ? (o(), k(Ne, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.deleted.length ? (o(), k(Ne, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : u("", !0),
                m(Ne, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: p.value
                }, null, 8, ["count", "separator"])
              ]),
              right: n(() => [
                t.status.git_changes.nodes_added.length ? (o(), k(Ne, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), k(Ne, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.workflow_changes ? (o(), k(Ne, {
                  key: 2,
                  icon: "●",
                  count: y.value,
                  label: y.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : u("", !0),
                b.value ? (o(), k(Ne, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : u("", !0),
                C.value ? u("", !0) : (o(), k(Ne, {
                  key: 4,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 1
            })
          ], 32),
          e("div", Ea, [
            m(ss, {
              "branch-name": t.status.branch || "Detached HEAD"
            }, {
              actions: n(() => [
                m(F, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _[2] || (_[2] = (U) => N.$emit("switch-branch"))
                }, {
                  default: n(() => [..._[13] || (_[13] = [
                    f(" Switch Branch ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["branch-name"])
          ]),
          t.status.is_detached_head ? (o(), k(Ge, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: n(() => [
              m(F, {
                variant: "primary",
                size: "sm",
                onClick: _[3] || (_[3] = (U) => N.$emit("create-branch"))
              }, {
                default: n(() => [..._[14] || (_[14] = [
                  f(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : u("", !0),
          W.value ? (o(), a("div", za, [
            m($e, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: n(() => [..._[15] || (_[15] = [
                f(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            E.value.length > 0 ? (o(), k(Ge, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${E.value.length} committed workflow${E.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows were committed but dependencies are now missing. They need to be fixed to run.",
              items: E.value.map((U) => `${U.name} — ${U.issue_summary}`)
            }, {
              actions: n(() => [
                m(F, {
                  variant: "primary",
                  size: "sm",
                  onClick: _[4] || (_[4] = (U) => N.$emit("view-workflows"))
                }, {
                  default: n(() => [..._[16] || (_[16] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            x.value.length > 0 ? (o(), k(Ge, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${x.value.length} workflow${x.value.length === 1 ? "" : "s"} with issues`,
              description: "Fix dependencies before committing these workflows.",
              items: x.value.map((U) => `${U.name} — ${U.issue_summary}`)
            }, {
              actions: n(() => [
                m(F, {
                  variant: "primary",
                  size: "sm",
                  onClick: _[5] || (_[5] = (U) => N.$emit("view-workflows"))
                }, {
                  default: n(() => [..._[17] || (_[17] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            t.status.missing_models_count > 0 && !M.value ? (o(), k(Ge, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: n(() => [
                m(F, {
                  variant: "primary",
                  size: "sm",
                  onClick: _[6] || (_[6] = (U) => N.$emit("view-workflows"))
                }, {
                  default: n(() => [..._[18] || (_[18] = [
                    f(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : u("", !0),
            w.value ? (o(), k(Ge, {
              key: 3,
              severity: "warning",
              icon: "⚠",
              title: "You have uncommitted changes",
              description: Z.value
            }, {
              actions: n(() => [
                m(F, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: n(() => [..._[19] || (_[19] = [
                    f(" View Changes ", -1)
                  ])]),
                  _: 1
                }),
                m(F, {
                  variant: "primary",
                  size: "sm",
                  onClick: _[7] || (_[7] = (U) => N.$emit("commit-changes"))
                }, {
                  default: n(() => [..._[20] || (_[20] = [
                    f(" Commit Changes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description"])) : u("", !0),
            t.status.comparison.is_synced ? u("", !0) : (o(), k(Ge, {
              key: 4,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
            }, {
              actions: n(() => [
                m(F, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _[8] || (_[8] = (U) => N.$emit("view-debug"))
                }, {
                  default: n(() => [..._[21] || (_[21] = [
                    f(" View Logs ", -1)
                  ])]),
                  _: 1
                }),
                m(F, {
                  variant: "primary",
                  size: "sm",
                  onClick: _[9] || (_[9] = (U) => N.$emit("sync-environment"))
                }, {
                  default: n(() => [..._[22] || (_[22] = [
                    f(" Sync Now ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }))
          ])) : u("", !0),
          !W.value && !C.value ? (o(), k(Me, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : u("", !0)
        ]),
        _: 1
      }),
      m(Ct, {
        show: i.value,
        status: t.status,
        onClose: _[10] || (_[10] = (U) => i.value = !1),
        onNavigateWorkflows: d
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), La = /* @__PURE__ */ q(Ma, [["__scopeId", "data-v-05737be6"]]), Ra = ["type", "value", "placeholder", "disabled"], Na = /* @__PURE__ */ K({
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
    const i = t, g = s, h = S(null);
    function v(d) {
      const l = d.target.value;
      g("update:modelValue", l);
    }
    return he(() => {
      i.autoFocus && h.value && h.value.focus();
    }), r({
      focus: () => {
        var d;
        return (d = h.value) == null ? void 0 : d.focus();
      },
      blur: () => {
        var d;
        return (d = h.value) == null ? void 0 : d.blur();
      }
    }), (d, l) => (o(), a("input", {
      ref_key: "inputRef",
      ref: h,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: J(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: v,
      onKeyup: [
        l[0] || (l[0] = Be((p) => d.$emit("enter"), ["enter"])),
        l[1] || (l[1] = Be((p) => d.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (p) => d.$emit("focus")),
      onBlur: l[3] || (l[3] = (p) => d.$emit("blur"))
    }, null, 42, Ra));
  }
}), st = /* @__PURE__ */ q(Na, [["__scopeId", "data-v-0380d08f"]]), Ta = { class: "branch-create-form" }, Ua = { class: "form-actions" }, Ba = /* @__PURE__ */ K({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const s = r, i = S(""), g = D(() => {
      const d = i.value.trim();
      return d.length > 0 && !d.startsWith("-") && !d.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(d);
    });
    function h() {
      g.value && (s("create", i.value.trim()), i.value = "");
    }
    function v() {
      i.value = "", s("cancel");
    }
    return (d, l) => (o(), a("div", Ta, [
      m(st, {
        modelValue: i.value,
        "onUpdate:modelValue": l[0] || (l[0] = (p) => i.value = p),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: h,
        onEscape: v
      }, null, 8, ["modelValue"]),
      e("div", Ua, [
        m(F, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: h
        }, {
          default: n(() => [...l[1] || (l[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        m(F, {
          variant: "secondary",
          size: "sm",
          onClick: v
        }, {
          default: n(() => [...l[2] || (l[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Da = /* @__PURE__ */ q(Ba, [["__scopeId", "data-v-7c500394"]]), Oa = { class: "branch-list-item__indicator" }, Va = { class: "branch-list-item__name" }, Aa = {
  key: 0,
  class: "branch-list-item__actions"
}, Wa = {
  key: 0,
  class: "branch-list-item__current-label"
}, Fa = /* @__PURE__ */ K({
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
      class: J(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: s[0] || (s[0] = (i) => t.clickable && r.$emit("click"))
    }, [
      e("span", Oa, c(t.isCurrent ? "●" : "○"), 1),
      e("span", Va, c(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (o(), a("div", Aa, [
        ne(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), a("span", Wa, " current ")) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), Pa = /* @__PURE__ */ q(Fa, [["__scopeId", "data-v-c6581a24"]]), Ga = {
  key: 2,
  class: "branch-list"
}, Ha = /* @__PURE__ */ K({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: r }) {
    const s = r, i = S(!1);
    function g(v) {
      s("create", v), h();
    }
    function h() {
      i.value = !1;
    }
    return (v, d) => (o(), k(we, null, {
      header: n(() => [
        m(be, { title: "BRANCHES" }, {
          actions: n(() => [
            m(F, {
              variant: "ghost",
              size: "sm",
              onClick: d[0] || (d[0] = (l) => i.value = !0),
              title: "Create new branch"
            }, {
              default: n(() => [...d[1] || (d[1] = [
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
        i.value ? (o(), k(Da, {
          key: 0,
          onCreate: g,
          onCancel: h
        })) : u("", !0),
        t.branches.length === 0 ? (o(), k(Me, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), a("div", Ga, [
          (o(!0), a(G, null, Q(t.branches, (l) => (o(), k(Pa, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: n(() => [
              l.is_current ? u("", !0) : (o(), k(F, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (p) => v.$emit("switch", l.name)
              }, {
                default: n(() => [...d[2] || (d[2] = [
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
}), ja = /* @__PURE__ */ q(Ha, [["__scopeId", "data-v-763d6ec4"]]), Ka = { class: "commit-list" }, qa = /* @__PURE__ */ K({
  __name: "CommitList",
  setup(t) {
    return (r, s) => (o(), a("div", Ka, [
      ne(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Xa = /* @__PURE__ */ q(qa, [["__scopeId", "data-v-8c5ee761"]]), Ya = { class: "commit-hash" }, Za = /* @__PURE__ */ K({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, s = D(() => r.hash.slice(0, r.length));
    return (i, g) => (o(), a("span", Ya, c(s.value), 1));
  }
}), Tt = /* @__PURE__ */ q(Za, [["__scopeId", "data-v-7c333cc6"]]), Ja = { class: "commit-message" }, Qa = { class: "commit-date" }, en = /* @__PURE__ */ K({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const s = t, i = r;
    function g() {
      s.clickable && i("click");
    }
    return (h, v) => (o(), a("div", {
      class: J(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      m(Tt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Ja, c(t.message), 1),
      e("span", Qa, c(t.relativeDate), 1),
      h.$slots.actions ? (o(), a("div", {
        key: 0,
        class: "commit-actions",
        onClick: v[0] || (v[0] = fe(() => {
        }, ["stop"]))
      }, [
        ne(h.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), tn = /* @__PURE__ */ q(en, [["__scopeId", "data-v-dd7c621b"]]), on = /* @__PURE__ */ K({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, s) => (o(), k(we, null, {
      header: n(() => [
        m(be, { title: "HISTORY" })
      ]),
      content: n(() => [
        t.commits.length === 0 ? (o(), k(Me, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), k(Xa, { key: 1 }, {
          default: n(() => [
            (o(!0), a(G, null, Q(t.commits, (i) => (o(), k(tn, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (g) => r.$emit("select", i)
            }, {
              actions: n(() => [
                m(F, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => r.$emit("checkout", i),
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
}), sn = /* @__PURE__ */ q(on, [["__scopeId", "data-v-981c3c64"]]), xt = [
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
], an = {
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
}, Ut = [
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
], nn = [
  ...Ut,
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
], rt = [
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
], ln = [
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
], ct = [
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
], re = {
  // Environment Management
  getEnvironments: async () => (await ie(300), [
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
    await ie(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, s) => {
    await ie(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (t) => {
    await ie(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ie(400), xt),
  getWorkflowDetails: async (t) => (await ie(300), an[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await ie(800), {
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
    await ie(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${s}`);
  },
  setModelImportance: async (t, r, s) => {
    await ie(200), console.log(`[MOCK] Setting ${r} importance to ${s} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ie(350), Ut),
  getWorkspaceModels: async () => (await ie(400), nn),
  updateModelSource: async (t, r) => {
    await ie(300), console.log(`[MOCK] Updating source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await ie(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await ie(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await ie(350);
    const t = rt.filter((s) => s.installed), r = rt.filter((s) => !s.installed);
    return {
      nodes: rt,
      total_count: rt.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await ie(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await ie(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await ie(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await ie(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await ie(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await ie(250), (t ? ct.filter((i) => i.level === t) : ct).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await ie(300);
    const s = [...ct, ...ct.map((g) => ({
      ...g,
      name: "comfygit.workspace"
    }))];
    return (t ? s.filter((g) => g.level === t) : s).slice(0, r || 100);
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
  getStatus: async () => (await ie(400), {
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
  getCommitHistory: async (t = 10) => (await ie(300), ln.slice(0, t)),
  getBranches: async () => (await ie(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  // Git Remotes Management
  getRemotes: async () => (await ie(300), {
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
    await ie(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await ie(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, s) => {
    await ie(400), console.log(`[MOCK] Updating remote ${t}: ${r}${s ? ` (push: ${s})` : ""}`);
  },
  fetchRemote: async (t) => {
    await ie(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await ie(300), {
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
  analyzeWorkflow: async (t) => (await ie(600), {
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
    await ie(800);
    const i = [], g = [];
    return r.forEach((h, v) => {
      h.action === "install" && h.package_id && i.push(h.package_id);
    }), s.forEach((h, v) => {
      h.action === "download" && h.url ? g.push({
        filename: v,
        url: h.url,
        size: 65e8,
        target_path: h.target_path || `models/${v}`
      }) : h.action === "select" && h.selected_model && console.log(`[MOCK] Selected existing model: ${h.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: i,
      models_to_download: g,
      estimated_time_seconds: i.length * 30 + g.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await ie(400);
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
    await ie(400);
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
function ie(t) {
  return new Promise((r) => setTimeout(r, t));
}
function dt() {
  return !0;
}
function ke() {
  const t = S(!1), r = S(null);
  async function s($, P) {
    var ye;
    if (!((ye = window.app) != null && ye.api))
      throw new Error("ComfyUI API not available");
    const te = await window.app.api.fetchApi($, P);
    if (!te.ok) {
      const Re = await te.json().catch(() => ({}));
      throw new Error(Re.error || Re.message || `Request failed: ${te.status}`);
    }
    return te.json();
  }
  async function i() {
    return re.getStatus();
  }
  async function g($, P = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: $, allow_issues: P })
    });
  }
  async function h($ = 10, P = 0) {
    {
      const te = await re.getCommitHistory($);
      return {
        commits: te,
        total: te.length,
        offset: P
      };
    }
  }
  async function v($) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: $ })
    });
  }
  async function d() {
    return re.getBranches();
  }
  async function l($) {
    return s(`/v2/comfygit/commit/${$}`);
  }
  async function p($, P = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: $, force: P })
    });
  }
  async function C($, P = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: $, start_point: P })
    });
  }
  async function w($, P = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: $, force: P })
    });
  }
  async function y() {
    return re.getEnvironments();
  }
  async function b($) {
    return re.switchEnvironment($);
  }
  async function E() {
    return null;
  }
  async function x($, P, te) {
    return await re.createEnvironment($, P, te), { status: "success" };
  }
  async function M($) {
    return await re.deleteEnvironment($), { status: "success" };
  }
  async function W() {
    return re.getWorkflows();
  }
  async function Z($) {
    return re.getWorkflowDetails($);
  }
  async function N($) {
    return re.resolveWorkflow($);
  }
  async function _($, P, te) {
    return await re.installWorkflowDeps($, P, te), { status: "success" };
  }
  async function U($, P, te) {
    return re.setModelImportance($, P, te);
  }
  async function R() {
    return re.getEnvironmentModels();
  }
  async function V() {
    return re.getWorkspaceModels();
  }
  async function z($, P) {
    return re.updateModelSource($, P);
  }
  async function T($) {
    return re.deleteModel($);
  }
  async function B($) {
    return await re.downloadModel($), { status: "success" };
  }
  async function H() {
    return re.getConfig();
  }
  async function O($) {
    return re.updateConfig($);
  }
  async function L($, P) {
    return re.getEnvironmentLogs($, P);
  }
  async function X($, P) {
    return re.getWorkspaceLogs($, P);
  }
  async function j() {
    return re.getNodes();
  }
  async function pe($) {
    return await re.installNode($), { status: "success" };
  }
  async function xe($) {
    return await re.updateNode($), { status: "success" };
  }
  async function de($) {
    return await re.uninstallNode($), { status: "success" };
  }
  async function ue() {
    return re.getRemotes();
  }
  async function ee($, P) {
    return await re.addRemote($, P), { status: "success", remote_name: $ };
  }
  async function Le($) {
    return await re.removeRemote($), { status: "success", remote_name: $ };
  }
  async function Ze($, P, te) {
    return await re.updateRemoteUrl($, P, te), { status: "success", remote_name: $ };
  }
  async function ce($) {
    return await re.fetchRemote($), { status: "success", remote_name: $ };
  }
  async function Ce($) {
    return re.getRemoteSyncStatus($);
  }
  async function Y($ = "skip", P = !0) {
    return await new Promise((te) => setTimeout(te, 1500)), {
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
    getStatus: i,
    commit: g,
    getHistory: h,
    exportEnv: v,
    // Git Operations
    getBranches: d,
    getCommitDetail: l,
    checkout: p,
    createBranch: C,
    switchBranch: w,
    // Environment Management
    getEnvironments: y,
    switchEnvironment: b,
    getSwitchProgress: E,
    createEnvironment: x,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: W,
    getWorkflowDetails: Z,
    resolveWorkflow: N,
    installWorkflowDeps: _,
    setModelImportance: U,
    // Model Management
    getEnvironmentModels: R,
    getWorkspaceModels: V,
    updateModelSource: z,
    deleteModel: T,
    downloadModel: B,
    // Settings
    getConfig: H,
    updateConfig: O,
    // Debug/Logs
    getEnvironmentLogs: L,
    getWorkspaceLogs: X,
    // Node Management
    getNodes: j,
    installNode: pe,
    updateNode: xe,
    uninstallNode: de,
    // Git Remotes
    getRemotes: ue,
    addRemote: ee,
    removeRemote: Le,
    updateRemoteUrl: Ze,
    fetchRemote: ce,
    getRemoteSyncStatus: Ce,
    // Environment Sync
    syncEnvironmentManually: Y
  };
}
const rn = { class: "base-modal-header" }, cn = {
  key: 0,
  class: "base-modal-title"
}, dn = { class: "base-modal-body" }, un = {
  key: 0,
  class: "base-modal-loading"
}, mn = {
  key: 1,
  class: "base-modal-error"
}, vn = {
  key: 0,
  class: "base-modal-footer"
}, fn = /* @__PURE__ */ K({
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
  setup(t, { emit: r }) {
    const s = t, i = r;
    function g() {
      s.closeOnOverlayClick && i("close");
    }
    function h(v) {
      v.key === "Escape" && i("close");
    }
    return he(() => {
      document.addEventListener("keydown", h), document.body.style.overflow = "hidden";
    }), Jt(() => {
      document.removeEventListener("keydown", h), document.body.style.overflow = "";
    }), (v, d) => (o(), k(ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: J(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: d[1] || (d[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", rn, [
            ne(v.$slots, "header", {}, () => [
              t.title ? (o(), a("h3", cn, c(t.title), 1)) : u("", !0)
            ], !0),
            t.showCloseButton ? (o(), a("button", {
              key: 0,
              class: "base-modal-close",
              onClick: d[0] || (d[0] = (l) => v.$emit("close"))
            }, [...d[2] || (d[2] = [
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
          e("div", dn, [
            t.loading ? (o(), a("div", un, "Loading...")) : t.error ? (o(), a("div", mn, c(t.error), 1)) : ne(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (o(), a("div", vn, [
            ne(v.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), mt = /* @__PURE__ */ q(fn, [["__scopeId", "data-v-2125a0e6"]]), gn = ["type", "disabled"], hn = {
  key: 0,
  class: "spinner"
}, pn = /* @__PURE__ */ K({
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
      class: J(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: s[0] || (s[0] = (i) => r.$emit("click", i))
    }, [
      t.loading ? (o(), a("span", hn)) : u("", !0),
      ne(r.$slots, "default", {}, void 0, !0)
    ], 10, gn));
  }
}), ae = /* @__PURE__ */ q(pn, [["__scopeId", "data-v-f3452606"]]), yn = {
  key: 0,
  class: "base-title-count"
}, wn = /* @__PURE__ */ K({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, s) => (o(), k(yt(`h${t.level}`), {
      class: J(["base-title", t.variant])
    }, {
      default: n(() => [
        ne(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), a("span", yn, "(" + c(t.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), et = /* @__PURE__ */ q(wn, [["__scopeId", "data-v-5a01561d"]]), bn = ["value", "disabled"], kn = {
  key: 0,
  value: "",
  disabled: ""
}, _n = ["value"], $n = {
  key: 0,
  class: "base-select-error"
}, Cn = /* @__PURE__ */ K({
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
    function r(i) {
      return typeof i == "string" ? i : i.value;
    }
    function s(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, g) => (o(), a("div", {
      class: J(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: J(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (h) => i.$emit("update:modelValue", h.target.value))
      }, [
        t.placeholder ? (o(), a("option", kn, c(t.placeholder), 1)) : u("", !0),
        (o(!0), a(G, null, Q(t.options, (h) => (o(), a("option", {
          key: r(h),
          value: r(h)
        }, c(s(h)), 9, _n))), 128))
      ], 42, bn),
      t.error ? (o(), a("span", $n, c(t.error), 1)) : u("", !0)
    ], 2));
  }
}), xn = /* @__PURE__ */ q(Cn, [["__scopeId", "data-v-7436d745"]]), Sn = { class: "popover-header" }, In = { class: "popover-title" }, En = { class: "popover-content" }, zn = {
  key: 0,
  class: "popover-actions"
}, Mn = /* @__PURE__ */ K({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, s) => (o(), k(ze, { to: "body" }, [
      t.show ? (o(), a("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: at({ maxWidth: t.maxWidth }),
          onClick: s[1] || (s[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Sn, [
            e("h4", In, c(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", En, [
            ne(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (o(), a("div", zn, [
            ne(r.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), De = /* @__PURE__ */ q(Mn, [["__scopeId", "data-v-42815ace"]]), Ln = { class: "detail-section" }, Rn = {
  key: 0,
  class: "empty-message"
}, Nn = { class: "model-header" }, Tn = { class: "model-name" }, Un = { class: "model-details" }, Bn = { class: "model-row" }, Dn = { class: "model-row" }, On = { class: "label" }, Vn = {
  key: 0,
  class: "model-row model-row-nodes"
}, An = { class: "node-list" }, Wn = ["onClick"], Fn = {
  key: 1,
  class: "model-row"
}, Pn = { class: "value" }, Gn = {
  key: 0,
  class: "model-actions"
}, Hn = { class: "detail-section" }, jn = {
  key: 0,
  class: "empty-message"
}, Kn = { class: "node-name" }, qn = {
  key: 0,
  class: "node-version"
}, Xn = /* @__PURE__ */ K({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: r }) {
    const s = t, i = r, { getWorkflowDetails: g, setModelImportance: h, installWorkflowDeps: v } = ke(), d = S(null), l = S(!1), p = S(null), C = S(!1), w = S({}), y = S({}), b = S(!1), E = S(/* @__PURE__ */ new Set()), x = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function M(T) {
      switch (T) {
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
    function W(T) {
      switch (T) {
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
    function Z(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const B = T.hash || T.filename;
      return E.value.has(B) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function N(T) {
      return E.value.has(T);
    }
    function _(T) {
      E.value.has(T) ? E.value.delete(T) : E.value.add(T), E.value = new Set(E.value);
    }
    async function U() {
      l.value = !0, p.value = null;
      try {
        d.value = await g(s.workflowName);
      } catch (T) {
        p.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function R(T, B) {
      w.value[T] = B, C.value = !0;
    }
    async function V() {
      if (!C.value) {
        i("close");
        return;
      }
      l.value = !0, p.value = null;
      try {
        for (const [T, B] of Object.entries(w.value))
          await h(s.workflowName, T, B);
        i("close");
      } catch (T) {
        p.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function z(T) {
      y.value[T] = !0, p.value = null;
      try {
        await v(s.workflowName, !0, !1), await U();
      } catch (B) {
        p.value = B instanceof Error ? B.message : "Failed to install node";
      } finally {
        y.value[T] = !1;
      }
    }
    return he(U), (T, B) => (o(), a(G, null, [
      m(mt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: p.value || void 0,
        onClose: B[5] || (B[5] = (H) => i("close"))
      }, {
        body: n(() => [
          d.value ? (o(), a(G, { key: 0 }, [
            e("section", Ln, [
              m(et, { variant: "section" }, {
                default: n(() => [
                  f("MODELS USED (" + c(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (o(), a("div", Rn, " No models used in this workflow ")) : u("", !0),
              (o(!0), a(G, null, Q(d.value.models, (H) => (o(), a("div", {
                key: H.hash,
                class: "model-card"
              }, [
                e("div", Nn, [
                  B[7] || (B[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Tn, c(H.filename), 1)
                ]),
                e("div", Un, [
                  e("div", Bn, [
                    B[8] || (B[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: J(["value", M(H.status)])
                    }, c(W(H.status)), 3)
                  ]),
                  e("div", Dn, [
                    e("span", On, [
                      B[9] || (B[9] = f(" Importance: ", -1)),
                      m(Nt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: B[0] || (B[0] = (O) => b.value = !0)
                      })
                    ]),
                    m(xn, {
                      "model-value": w.value[H.hash] || H.importance,
                      options: x,
                      "onUpdate:modelValue": (O) => R(H.hash, O)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  H.loaded_by && H.loaded_by.length > 0 ? (o(), a("div", Vn, [
                    B[10] || (B[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", An, [
                      (o(!0), a(G, null, Q(Z(H), (O, L) => (o(), a("div", {
                        key: `${O.node_id}-${L}`,
                        class: "node-reference"
                      }, c(O.node_type) + " (Node #" + c(O.node_id) + ") ", 1))), 128)),
                      H.loaded_by.length > 3 ? (o(), a("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (O) => _(H.hash || H.filename)
                      }, c(N(H.hash || H.filename) ? "▼ Show less" : `▶ View all (${H.loaded_by.length})`), 9, Wn)) : u("", !0)
                    ])
                  ])) : u("", !0),
                  H.size_mb ? (o(), a("div", Fn, [
                    B[11] || (B[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Pn, c(H.size_mb) + " MB", 1)
                  ])) : u("", !0)
                ]),
                H.status !== "available" ? (o(), a("div", Gn, [
                  H.status === "downloadable" ? (o(), k(ae, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: B[1] || (B[1] = (O) => i("resolve"))
                  }, {
                    default: n(() => [...B[12] || (B[12] = [
                      f(" Download ", -1)
                    ])]),
                    _: 1
                  })) : H.status === "path_mismatch" ? (o(), k(ae, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[2] || (B[2] = (O) => i("resolve"))
                  }, {
                    default: n(() => [...B[13] || (B[13] = [
                      f(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), k(ae, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: B[3] || (B[3] = (O) => i("resolve"))
                  }, {
                    default: n(() => [...B[14] || (B[14] = [
                      f(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : u("", !0)
              ]))), 128))
            ]),
            e("section", Hn, [
              m(et, { variant: "section" }, {
                default: n(() => [
                  f("NODES USED (" + c(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (o(), a("div", jn, " No custom nodes used in this workflow ")) : u("", !0),
              (o(!0), a(G, null, Q(d.value.nodes, (H) => (o(), a("div", {
                key: H.name,
                class: "node-item"
              }, [
                e("span", {
                  class: J(["node-status", H.status === "installed" ? "installed" : "missing"])
                }, c(H.status === "installed" ? "✓" : "✕"), 3),
                e("span", Kn, c(H.name), 1),
                H.version ? (o(), a("span", qn, "v" + c(H.version), 1)) : u("", !0),
                H.status === "missing" ? (o(), k(ae, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: y.value[H.name],
                  onClick: (O) => z(H.name),
                  class: "node-install-btn"
                }, {
                  default: n(() => [...B[15] || (B[15] = [
                    f(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : u("", !0)
              ]))), 128))
            ])
          ], 64)) : u("", !0)
        ]),
        footer: n(() => [
          m(ae, {
            variant: "secondary",
            onClick: B[4] || (B[4] = (H) => i("close"))
          }, {
            default: n(() => [...B[16] || (B[16] = [
              f(" Close ", -1)
            ])]),
            _: 1
          }),
          C.value ? (o(), k(ae, {
            key: 0,
            variant: "primary",
            onClick: V
          }, {
            default: n(() => [...B[17] || (B[17] = [
              f(" Save Changes ", -1)
            ])]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      m(De, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: B[6] || (B[6] = (H) => b.value = !1)
      }, {
        content: n(() => [...B[18] || (B[18] = [
          e("ul", { class: "importance-info-list" }, [
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
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yn = /* @__PURE__ */ q(Xn, [["__scopeId", "data-v-1325d542"]]);
function Zn() {
  const t = S(null), r = S(null), s = S([]), i = S([]), g = S(!1), h = S(null);
  async function v(w, y) {
    var E;
    if (!((E = window.app) != null && E.api))
      throw new Error("ComfyUI API not available");
    const b = await window.app.api.fetchApi(w, y);
    if (!b.ok) {
      const x = await b.json().catch(() => ({})), M = x.error || x.message || `Request failed: ${b.status}`;
      throw new Error(M);
    }
    return b.json();
  }
  async function d(w) {
    g.value = !0, h.value = null;
    try {
      let y;
      return dt() && (y = await re.analyzeWorkflow(w)), t.value = y, y;
    } catch (y) {
      const b = y instanceof Error ? y.message : "Unknown error occurred";
      throw h.value = b, y;
    } finally {
      g.value = !1;
    }
  }
  async function l(w, y, b) {
    g.value = !0, h.value = null;
    try {
      let E;
      return dt() && (E = await re.applyResolution(w, y, b)), r.value = E, E;
    } catch (E) {
      const x = E instanceof Error ? E.message : "Unknown error occurred";
      throw h.value = x, E;
    } finally {
      g.value = !1;
    }
  }
  async function p(w, y = 10) {
    g.value = !0, h.value = null;
    try {
      let b;
      return dt() && (b = await re.searchNodes(w, y)), s.value = b.results, b.results;
    } catch (b) {
      const E = b instanceof Error ? b.message : "Unknown error occurred";
      throw h.value = E, b;
    } finally {
      g.value = !1;
    }
  }
  async function C(w, y = 10) {
    g.value = !0, h.value = null;
    try {
      let b;
      return dt() && (b = await re.searchModels(w, y)), i.value = b.results, b.results;
    } catch (b) {
      const E = b instanceof Error ? b.message : "Unknown error occurred";
      throw h.value = E, b;
    } finally {
      g.value = !1;
    }
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: s,
    modelSearchResults: i,
    isLoading: g,
    error: h,
    // Methods
    analyzeWorkflow: d,
    applyResolution: l,
    searchNodes: p,
    searchModels: C
  };
}
const Jn = { class: "resolution-stepper" }, Qn = { class: "stepper-header" }, el = ["onClick"], tl = {
  key: 0,
  class: "step-icon"
}, ol = {
  key: 1,
  class: "step-number"
}, sl = { class: "step-label" }, al = {
  key: 0,
  class: "step-connector"
}, nl = { class: "stepper-content" }, ll = /* @__PURE__ */ K({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const s = t, i = r;
    function g(p) {
      var C;
      if ((C = s.stepStats) != null && C[p]) {
        const w = s.stepStats[p];
        return w.total > 0 && w.resolved === w.total;
      }
      return s.completedSteps.includes(p);
    }
    function h(p) {
      var C;
      if ((C = s.stepStats) != null && C[p]) {
        const w = s.stepStats[p];
        return w.resolved > 0 && w.resolved < w.total;
      }
      return !1;
    }
    function v(p) {
      return g(p) ? "state-complete" : h(p) ? "state-partial" : "state-pending";
    }
    function d(p) {
      return !1;
    }
    function l(p) {
      i("step-change", p);
    }
    return (p, C) => (o(), a("div", Jn, [
      e("div", Qn, [
        (o(!0), a(G, null, Q(t.steps, (w, y) => (o(), a("div", {
          key: w.id,
          class: J(["step", {
            active: t.currentStep === w.id,
            completed: g(w.id),
            "in-progress": h(w.id),
            disabled: d(w.id)
          }]),
          onClick: (b) => l(w.id)
        }, [
          e("div", {
            class: J(["step-indicator", v(w.id)])
          }, [
            g(w.id) ? (o(), a("span", tl, "✓")) : (o(), a("span", ol, c(y + 1), 1))
          ], 2),
          e("div", sl, c(w.label), 1),
          y < t.steps.length - 1 ? (o(), a("div", al)) : u("", !0)
        ], 10, el))), 128))
      ]),
      e("div", nl, [
        ne(p.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), il = /* @__PURE__ */ q(ll, [["__scopeId", "data-v-2a7b3af8"]]), rl = /* @__PURE__ */ K({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, s = D(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), i = D(() => `confidence-${s.value}`), g = D(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : s.value.charAt(0).toUpperCase() + s.value.slice(1));
    return (h, v) => (o(), a("span", {
      class: J(["confidence-badge", i.value, t.size])
    }, c(g.value), 3));
  }
}), wt = /* @__PURE__ */ q(rl, [["__scopeId", "data-v-17ec4b80"]]), cl = { class: "item-body" }, dl = {
  key: 0,
  class: "resolved-state"
}, ul = {
  key: 1,
  class: "multiple-options"
}, ml = { class: "options-list" }, vl = ["onClick"], fl = ["name", "value", "checked", "onChange"], gl = { class: "option-content" }, hl = { class: "option-header" }, pl = { class: "option-package-id" }, yl = {
  key: 0,
  class: "option-title"
}, wl = { class: "option-meta" }, bl = {
  key: 0,
  class: "installed-badge"
}, kl = { class: "action-buttons" }, _l = {
  key: 2,
  class: "unresolved"
}, $l = { class: "action-buttons" }, Cl = /* @__PURE__ */ K({
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
    const s = t, i = r, g = D(() => !!s.choice);
    D(() => {
      var v;
      return (v = s.choice) == null ? void 0 : v.action;
    }), D(() => {
      var v;
      return (v = s.choice) == null ? void 0 : v.package_id;
    });
    function h(v) {
      i("option-selected", v);
    }
    return (v, d) => (o(), a("div", {
      class: J(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", cl, [
        g.value ? (o(), a("div", dl, [
          m(ae, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (l) => i("clear-choice"))
          }, {
            default: n(() => [...d[7] || (d[7] = [
              f(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), a("div", ul, [
          d[11] || (d[11] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", ml, [
            (o(!0), a(G, null, Q(t.options, (l, p) => (o(), a("label", {
              key: l.package_id,
              class: J(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: (C) => h(p)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: (C) => h(p)
              }, null, 40, fl),
              e("div", gl, [
                e("div", hl, [
                  e("span", pl, c(l.package_id), 1),
                  m(wt, {
                    confidence: l.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                l.title && l.title !== l.package_id ? (o(), a("div", yl, c(l.title), 1)) : u("", !0),
                e("div", wl, [
                  l.is_installed ? (o(), a("span", bl, "Already Installed")) : u("", !0)
                ])
              ])
            ], 10, vl))), 128))
          ]),
          e("div", kl, [
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: d[1] || (d[1] = (l) => i("search"))
            }, {
              default: n(() => [...d[8] || (d[8] = [
                f(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: d[2] || (d[2] = (l) => i("manual-entry"))
            }, {
              default: n(() => [...d[9] || (d[9] = [
                f(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: d[3] || (d[3] = (l) => i("mark-optional"))
            }, {
              default: n(() => [...d[10] || (d[10] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), a("div", _l, [
          d[15] || (d[15] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", $l, [
            m(ae, {
              variant: "primary",
              size: "sm",
              onClick: d[4] || (d[4] = (l) => i("search"))
            }, {
              default: n(() => [...d[12] || (d[12] = [
                f(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: d[5] || (d[5] = (l) => i("manual-entry"))
            }, {
              default: n(() => [...d[13] || (d[13] = [
                f(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: d[6] || (d[6] = (l) => i("mark-optional"))
            }, {
              default: n(() => [...d[14] || (d[14] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), xl = /* @__PURE__ */ q(Cl, [["__scopeId", "data-v-dbefa408"]]), Sl = { class: "item-navigator" }, Il = { class: "nav-item-info" }, El = { class: "item-name" }, zl = { class: "nav-controls" }, Ml = { class: "nav-arrows" }, Ll = ["disabled"], Rl = ["disabled"], Nl = { class: "nav-position" }, Tl = /* @__PURE__ */ K({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    status: {},
    currentIndex: {},
    totalItems: {},
    statusLabelOverride: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: r }) {
    const s = t, i = r, g = D(() => {
      if (s.statusLabelOverride) return s.statusLabelOverride;
      switch (s.status) {
        case "not-found":
          return "Not Found";
        case "ambiguous":
          return "Multiple Matches";
        case "install":
          return "Installing";
        case "select":
          return "Selected";
        case "download":
          return "Downloading";
        case "optional":
          return "Optional";
        case "skip":
          return "Skipped";
        default:
          return "Pending";
      }
    }), h = D(() => {
      switch (s.status) {
        case "not-found":
          return "unresolved";
        case "ambiguous":
          return "ambiguous";
        case "install":
        case "select":
        case "download":
          return "resolved";
        case "optional":
          return "optional";
        case "skip":
          return "skip";
        default:
          return "unresolved";
      }
    });
    return (v, d) => (o(), a("div", Sl, [
      e("div", Il, [
        e("code", El, c(t.itemName), 1),
        e("span", {
          class: J(["status-badge", h.value])
        }, c(g.value), 3)
      ]),
      e("div", zl, [
        e("div", Ml, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: d[0] || (d[0] = (l) => i("prev")),
            title: "Previous item"
          }, " ← ", 8, Ll),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: d[1] || (d[1] = (l) => i("next")),
            title: "Next item"
          }, " → ", 8, Rl)
        ]),
        e("span", Nl, c(t.currentIndex + 1) + "/" + c(t.totalItems), 1)
      ])
    ]));
  }
}), Bt = /* @__PURE__ */ q(Tl, [["__scopeId", "data-v-4cda6265"]]), Ul = ["type", "value", "placeholder", "disabled"], Bl = {
  key: 0,
  class: "base-input-error"
}, Dl = /* @__PURE__ */ K({
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
      class: J(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: J(["base-input", { error: !!t.error }]),
        onInput: s[0] || (s[0] = (i) => r.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          s[1] || (s[1] = Be((i) => r.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Be((i) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ul),
      t.error ? (o(), a("span", Bl, c(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ q(Dl, [["__scopeId", "data-v-9ba02cdc"]]), Ol = { class: "node-resolution-step" }, Vl = { class: "step-header" }, Al = { class: "stat-badge" }, Wl = {
  key: 1,
  class: "step-body"
}, Fl = {
  key: 2,
  class: "empty-state"
}, Pl = { class: "node-search-modal" }, Gl = { class: "node-modal-body" }, Hl = {
  key: 0,
  class: "node-search-results"
}, jl = ["onClick"], Kl = { class: "node-result-header" }, ql = { class: "node-result-package-id" }, Xl = {
  key: 0,
  class: "node-result-description"
}, Yl = {
  key: 1,
  class: "node-no-results"
}, Zl = {
  key: 2,
  class: "node-searching"
}, Jl = { class: "node-manual-entry-modal" }, Ql = { class: "node-modal-body" }, ei = { class: "node-modal-actions" }, ti = /* @__PURE__ */ K({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: r }) {
    const s = t, i = r, g = S(0), h = S(!1), v = S(!1), d = S(""), l = S(""), p = S([]), C = S(!1), w = D(() => s.nodes[g.value]), y = D(() => s.nodes.filter((H) => s.nodeChoices.has(H.node_type)).length), b = D(() => {
      var O;
      if (!w.value) return "not-found";
      const H = s.nodeChoices.get(w.value.node_type);
      if (H)
        switch (H.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (O = w.value.options) != null && O.length ? "ambiguous" : "not-found";
    }), E = D(() => {
      var O;
      if (!w.value) return;
      const H = s.nodeChoices.get(w.value.node_type);
      if (H)
        switch (H.action) {
          case "install":
            return H.package_id ? `→ ${H.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (O = w.value.options) != null && O.length ? `${w.value.options.length} matches` : "Not Found";
    });
    function x(H) {
      H >= 0 && H < s.nodes.length && (g.value = H);
    }
    function M() {
      w.value && i("mark-optional", w.value.node_type);
    }
    function W() {
      w.value && i("skip", w.value.node_type);
    }
    function Z(H) {
      w.value && i("option-selected", w.value.node_type, H);
    }
    function N() {
      w.value && i("clear-choice", w.value.node_type);
    }
    function _() {
      w.value && (d.value = w.value.node_type, h.value = !0);
    }
    function U() {
      l.value = "", v.value = !0;
    }
    function R() {
      h.value = !1, d.value = "", p.value = [];
    }
    function V() {
      v.value = !1, l.value = "";
    }
    function z() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function T(H) {
      w.value && (i("manual-entry", w.value.node_type, H.package_id), R());
    }
    function B() {
      !w.value || !l.value.trim() || (i("manual-entry", w.value.node_type, l.value.trim()), V());
    }
    return (H, O) => {
      var L, X;
      return o(), a("div", Ol, [
        e("div", Vl, [
          O[4] || (O[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Al, c(y.value) + "/" + c(t.nodes.length) + " resolved", 1)
        ]),
        w.value ? (o(), k(Bt, {
          key: 0,
          "item-name": w.value.node_type,
          status: b.value,
          "status-label-override": E.value,
          "current-index": g.value,
          "total-items": t.nodes.length,
          onPrev: O[0] || (O[0] = (j) => x(g.value - 1)),
          onNext: O[1] || (O[1] = (j) => x(g.value + 1))
        }, null, 8, ["item-name", "status", "status-label-override", "current-index", "total-items"])) : u("", !0),
        w.value ? (o(), a("div", Wl, [
          m(xl, {
            "node-type": w.value.node_type,
            "has-multiple-options": !!((L = w.value.options) != null && L.length),
            options: w.value.options,
            choice: (X = t.nodeChoices) == null ? void 0 : X.get(w.value.node_type),
            onMarkOptional: M,
            onSkip: W,
            onManualEntry: U,
            onSearch: _,
            onOptionSelected: Z,
            onClearChoice: N
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice"])
        ])) : (o(), a("div", Fl, [...O[5] || (O[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), k(ze, { to: "body" }, [
          h.value ? (o(), a("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: fe(R, ["self"])
          }, [
            e("div", Pl, [
              e("div", { class: "node-modal-header" }, [
                O[6] || (O[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              e("div", Gl, [
                m(Ae, {
                  modelValue: d.value,
                  "onUpdate:modelValue": O[2] || (O[2] = (j) => d.value = j),
                  placeholder: "Search by node type, package name...",
                  onInput: z
                }, null, 8, ["modelValue"]),
                p.value.length > 0 ? (o(), a("div", Hl, [
                  (o(!0), a(G, null, Q(p.value, (j) => (o(), a("div", {
                    key: j.package_id,
                    class: "node-search-result-item",
                    onClick: (pe) => T(j)
                  }, [
                    e("div", Kl, [
                      e("code", ql, c(j.package_id), 1),
                      j.match_confidence ? (o(), k(wt, {
                        key: 0,
                        confidence: j.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : u("", !0)
                    ]),
                    j.description ? (o(), a("div", Xl, c(j.description), 1)) : u("", !0)
                  ], 8, jl))), 128))
                ])) : d.value && !C.value ? (o(), a("div", Yl, ' No packages found matching "' + c(d.value) + '" ', 1)) : u("", !0),
                C.value ? (o(), a("div", Zl, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), k(ze, { to: "body" }, [
          v.value ? (o(), a("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: fe(V, ["self"])
          }, [
            e("div", Jl, [
              e("div", { class: "node-modal-header" }, [
                O[7] || (O[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", Ql, [
                m(Ae, {
                  modelValue: l.value,
                  "onUpdate:modelValue": O[3] || (O[3] = (j) => l.value = j),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", ei, [
                  m(ae, {
                    variant: "secondary",
                    onClick: V
                  }, {
                    default: n(() => [...O[8] || (O[8] = [
                      f("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(ae, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: B
                  }, {
                    default: n(() => [...O[9] || (O[9] = [
                      f(" Add Package ", -1)
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
}), oi = /* @__PURE__ */ q(ti, [["__scopeId", "data-v-dd0cf680"]]), si = { class: "node-info" }, ai = { class: "item-body" }, ni = {
  key: 0,
  class: "resolved-state"
}, li = {
  key: 1,
  class: "multiple-options"
}, ii = { class: "options-list" }, ri = ["onClick"], ci = ["name", "value", "checked", "onChange"], di = { class: "option-content" }, ui = { class: "option-header" }, mi = { class: "option-filename" }, vi = { class: "option-meta" }, fi = { class: "option-size" }, gi = { class: "option-category" }, hi = { class: "option-path" }, pi = { class: "action-buttons" }, yi = {
  key: 2,
  class: "unresolved"
}, wi = { class: "action-buttons" }, bi = /* @__PURE__ */ K({
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
    const s = t, i = r, g = D(() => !!s.choice);
    D(() => {
      var d;
      return (d = s.choice) == null ? void 0 : d.action;
    }), D(() => {
      var d, l;
      return ((l = (d = s.choice) == null ? void 0 : d.selected_model) == null ? void 0 : l.filename) || "selected";
    });
    function h(d) {
      i("option-selected", d);
    }
    function v(d) {
      if (!d) return "Unknown";
      const l = d / (1024 * 1024 * 1024);
      return l >= 1 ? `${l.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, l) => (o(), a("div", {
      class: J(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", si, [
        l[7] || (l[7] = f(" Used by: ", -1)),
        e("code", null, c(t.nodeType), 1)
      ]),
      e("div", ai, [
        g.value ? (o(), a("div", ni, [
          m(ae, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (p) => i("clear-choice"))
          }, {
            default: n(() => [...l[8] || (l[8] = [
              f(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), a("div", li, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", ii, [
            (o(!0), a(G, null, Q(t.options, (p, C) => (o(), a("label", {
              key: p.model.hash,
              class: J(["option-card", { selected: t.selectedOptionIndex === C }]),
              onClick: (w) => h(C)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: C,
                checked: t.selectedOptionIndex === C,
                onChange: (w) => h(C)
              }, null, 40, ci),
              e("div", di, [
                e("div", ui, [
                  e("span", mi, c(p.model.filename), 1),
                  m(wt, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", vi, [
                  e("span", fi, c(v(p.model.size)), 1),
                  e("span", gi, c(p.model.category), 1)
                ]),
                e("div", hi, c(p.model.relative_path), 1)
              ])
            ], 10, ri))), 128))
          ]),
          e("div", pi, [
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (p) => i("search"))
            }, {
              default: n(() => [...l[9] || (l[9] = [
                f(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (p) => i("download-url"))
            }, {
              default: n(() => [...l[10] || (l[10] = [
                f(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (p) => i("mark-optional"))
            }, {
              default: n(() => [...l[11] || (l[11] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), a("div", yi, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", wi, [
            m(ae, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (p) => i("search"))
            }, {
              default: n(() => [...l[13] || (l[13] = [
                f(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (p) => i("download-url"))
            }, {
              default: n(() => [...l[14] || (l[14] = [
                f(" Download URL ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (p) => i("mark-optional"))
            }, {
              default: n(() => [...l[15] || (l[15] = [
                f(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ki = /* @__PURE__ */ q(bi, [["__scopeId", "data-v-00deda48"]]), _i = { class: "model-resolution-step" }, $i = { class: "step-header" }, Ci = { class: "stat-badge" }, xi = {
  key: 1,
  class: "step-body"
}, Si = {
  key: 2,
  class: "empty-state"
}, Ii = { class: "model-search-modal" }, Ei = { class: "model-modal-body" }, zi = {
  key: 0,
  class: "model-search-results"
}, Mi = ["onClick"], Li = { class: "model-result-header" }, Ri = { class: "model-result-filename" }, Ni = { class: "model-result-meta" }, Ti = { class: "model-result-category" }, Ui = { class: "model-result-size" }, Bi = {
  key: 0,
  class: "model-result-path"
}, Di = {
  key: 1,
  class: "model-no-results"
}, Oi = {
  key: 2,
  class: "model-searching"
}, Vi = { class: "model-download-url-modal" }, Ai = { class: "model-modal-body" }, Wi = { class: "model-modal-actions" }, Fi = /* @__PURE__ */ K({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: r }) {
    const s = t, i = r, g = S(0), h = S(!1), v = S(!1), d = S(""), l = S(""), p = S(""), C = S([]), w = S(!1), y = D(() => s.models[g.value]), b = D(() => s.models.filter((X) => s.modelChoices.has(X.filename)).length), E = D(() => y.value ? `checkpoints/${y.value.filename}` : "checkpoints/"), x = D(() => {
      var j;
      if (!y.value) return "not-found";
      const X = s.modelChoices.get(y.value.filename);
      if (X)
        switch (X.action) {
          case "select":
            return "select";
          case "download":
            return "download";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (j = y.value.options) != null && j.length ? "ambiguous" : "not-found";
    }), M = D(() => {
      var j, pe;
      if (!y.value) return;
      const X = s.modelChoices.get(y.value.filename);
      if (X)
        switch (X.action) {
          case "select":
            return (j = X.selected_model) != null && j.filename ? `→ ${X.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (pe = y.value.options) != null && pe.length ? `${y.value.options.length} matches` : "Not Found";
    });
    function W(X) {
      X >= 0 && X < s.models.length && (g.value = X);
    }
    function Z() {
      y.value && i("mark-optional", y.value.filename);
    }
    function N() {
      y.value && i("skip", y.value.filename);
    }
    function _(X) {
      y.value && i("option-selected", y.value.filename, X);
    }
    function U() {
      y.value && i("clear-choice", y.value.filename);
    }
    function R() {
      y.value && (d.value = y.value.filename, h.value = !0);
    }
    function V() {
      l.value = "", p.value = E.value, v.value = !0;
    }
    function z() {
      h.value = !1, d.value = "", C.value = [];
    }
    function T() {
      v.value = !1, l.value = "", p.value = "";
    }
    function B() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function H(X) {
      y.value && z();
    }
    function O() {
      !y.value || !l.value.trim() || (i("download-url", y.value.filename, l.value.trim(), p.value.trim() || void 0), T());
    }
    function L(X) {
      if (!X) return "Unknown";
      const j = X / (1024 * 1024 * 1024);
      return j >= 1 ? `${j.toFixed(2)} GB` : `${(X / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (X, j) => {
      var pe, xe, de;
      return o(), a("div", _i, [
        e("div", $i, [
          j[5] || (j[5] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Models"),
            e("p", { class: "step-description" }, " Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", Ci, c(b.value) + "/" + c(t.models.length) + " resolved", 1)
        ]),
        y.value ? (o(), k(Bt, {
          key: 0,
          "item-name": y.value.filename,
          status: x.value,
          "status-label-override": M.value,
          "current-index": g.value,
          "total-items": t.models.length,
          onPrev: j[0] || (j[0] = (ue) => W(g.value - 1)),
          onNext: j[1] || (j[1] = (ue) => W(g.value + 1))
        }, null, 8, ["item-name", "status", "status-label-override", "current-index", "total-items"])) : u("", !0),
        y.value ? (o(), a("div", xi, [
          m(ki, {
            filename: y.value.filename,
            "node-type": ((pe = y.value.reference) == null ? void 0 : pe.node_type) || "Unknown",
            "has-multiple-options": !!((xe = y.value.options) != null && xe.length),
            options: y.value.options,
            choice: (de = t.modelChoices) == null ? void 0 : de.get(y.value.filename),
            onMarkOptional: Z,
            onSkip: N,
            onDownloadUrl: V,
            onSearch: R,
            onOptionSelected: _,
            onClearChoice: U
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice"])
        ])) : (o(), a("div", Si, [...j[6] || (j[6] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), k(ze, { to: "body" }, [
          h.value ? (o(), a("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: fe(z, ["self"])
          }, [
            e("div", Ii, [
              e("div", { class: "model-modal-header" }, [
                j[7] || (j[7] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              e("div", Ei, [
                m(Ae, {
                  modelValue: d.value,
                  "onUpdate:modelValue": j[2] || (j[2] = (ue) => d.value = ue),
                  placeholder: "Search by filename, category...",
                  onInput: B
                }, null, 8, ["modelValue"]),
                C.value.length > 0 ? (o(), a("div", zi, [
                  (o(!0), a(G, null, Q(C.value, (ue) => (o(), a("div", {
                    key: ue.hash,
                    class: "model-search-result-item",
                    onClick: (ee) => H()
                  }, [
                    e("div", Li, [
                      e("code", Ri, c(ue.filename), 1)
                    ]),
                    e("div", Ni, [
                      e("span", Ti, c(ue.category), 1),
                      e("span", Ui, c(L(ue.size)), 1)
                    ]),
                    ue.relative_path ? (o(), a("div", Bi, c(ue.relative_path), 1)) : u("", !0)
                  ], 8, Mi))), 128))
                ])) : d.value && !w.value ? (o(), a("div", Di, ' No models found matching "' + c(d.value) + '" ', 1)) : u("", !0),
                w.value ? (o(), a("div", Oi, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), k(ze, { to: "body" }, [
          v.value ? (o(), a("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: fe(T, ["self"])
          }, [
            e("div", Vi, [
              e("div", { class: "model-modal-header" }, [
                j[8] || (j[8] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", Ai, [
                m(Ae, {
                  modelValue: l.value,
                  "onUpdate:modelValue": j[3] || (j[3] = (ue) => l.value = ue),
                  label: "Download URL",
                  placeholder: "https://civitai.com/api/download/..."
                }, null, 8, ["modelValue"]),
                m(Ae, {
                  modelValue: p.value,
                  "onUpdate:modelValue": j[4] || (j[4] = (ue) => p.value = ue),
                  label: "Target Path (relative to models folder)",
                  placeholder: E.value
                }, null, 8, ["modelValue", "placeholder"]),
                e("div", Wi, [
                  m(ae, {
                    variant: "secondary",
                    onClick: T
                  }, {
                    default: n(() => [...j[9] || (j[9] = [
                      f("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  m(ae, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: O
                  }, {
                    default: n(() => [...j[10] || (j[10] = [
                      f(" Queue Download ", -1)
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
}), Pi = /* @__PURE__ */ q(Fi, [["__scopeId", "data-v-189cb6c5"]]), Gi = {
  key: 0,
  class: "loading-state"
}, Hi = {
  key: 1,
  class: "wizard-content"
}, ji = {
  key: 0,
  class: "step-content"
}, Ki = { class: "analysis-summary" }, qi = { class: "analysis-header" }, Xi = { class: "summary-description" }, Yi = { class: "stats-grid" }, Zi = { class: "stat-card" }, Ji = { class: "stat-items" }, Qi = { class: "stat-item success" }, er = { class: "stat-count" }, tr = {
  key: 0,
  class: "stat-item warning"
}, or = { class: "stat-count" }, sr = {
  key: 1,
  class: "stat-item error"
}, ar = { class: "stat-count" }, nr = { class: "stat-card" }, lr = { class: "stat-items" }, ir = { class: "stat-item success" }, rr = { class: "stat-count" }, cr = {
  key: 0,
  class: "stat-item warning"
}, dr = { class: "stat-count" }, ur = {
  key: 1,
  class: "stat-item error"
}, mr = { class: "stat-count" }, vr = {
  key: 0,
  class: "status-message warning"
}, fr = { class: "status-text" }, gr = {
  key: 1,
  class: "status-message success"
}, hr = {
  key: 3,
  class: "step-content"
}, pr = { class: "review-summary" }, yr = { class: "review-stats" }, wr = { class: "review-stat" }, br = { class: "stat-value" }, kr = { class: "review-stat" }, _r = { class: "stat-value" }, $r = { class: "review-stat" }, Cr = { class: "stat-value" }, xr = { class: "review-stat" }, Sr = { class: "stat-value" }, Ir = {
  key: 0,
  class: "review-section"
}, Er = { class: "section-title" }, zr = { class: "review-items" }, Mr = { class: "item-name" }, Lr = { class: "item-choice" }, Rr = {
  key: 0,
  class: "choice-badge install"
}, Nr = {
  key: 1,
  class: "choice-badge optional"
}, Tr = {
  key: 2,
  class: "choice-badge skip"
}, Ur = {
  key: 1,
  class: "choice-badge pending"
}, Br = {
  key: 1,
  class: "review-section"
}, Dr = { class: "section-title" }, Or = { class: "review-items" }, Vr = { class: "item-name" }, Ar = { class: "item-choice" }, Wr = {
  key: 0,
  class: "choice-badge install"
}, Fr = {
  key: 1,
  class: "choice-badge download"
}, Pr = {
  key: 2,
  class: "choice-badge optional"
}, Gr = {
  key: 3,
  class: "choice-badge skip"
}, Hr = {
  key: 1,
  class: "choice-badge pending"
}, jr = {
  key: 2,
  class: "no-choices"
}, Kr = /* @__PURE__ */ K({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: r }) {
    const s = t, i = r, { analyzeWorkflow: g, applyResolution: h } = Zn(), v = S(null), d = S(!1), l = S(!1), p = S(null), C = S("analysis"), w = S([]), y = S(/* @__PURE__ */ new Map()), b = S(/* @__PURE__ */ new Map()), E = D(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return M.value && Y.push({ id: "nodes", label: "Nodes" }), W.value && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), Y;
    }), x = D(() => v.value ? v.value.stats.needs_user_input : !1), M = D(() => v.value ? v.value.nodes.unresolved.length > 0 || v.value.nodes.ambiguous.length > 0 : !1), W = D(() => v.value ? v.value.models.unresolved.length > 0 || v.value.models.ambiguous.length > 0 : !1), Z = D(() => {
      if (!v.value) return [];
      const Y = v.value.nodes.unresolved.map((P) => ({
        node_type: P.reference.node_type,
        reason: P.reason,
        is_unresolved: !0,
        options: void 0
      })), $ = v.value.nodes.ambiguous.map((P) => ({
        node_type: P.reference.node_type,
        has_multiple_options: !0,
        options: P.options.map((te) => ({
          package_id: te.package.package_id,
          title: te.package.title,
          match_confidence: te.match_confidence,
          match_type: te.match_type,
          is_installed: te.is_installed
        }))
      }));
      return [...Y, ...$];
    }), N = D(() => {
      if (!v.value) return [];
      const Y = v.value.models.unresolved.map((P) => ({
        filename: P.reference.widget_value,
        reference: P.reference,
        reason: P.reason,
        is_unresolved: !0,
        options: void 0
      })), $ = v.value.models.ambiguous.map((P) => ({
        filename: P.reference.widget_value,
        reference: P.reference,
        has_multiple_options: !0,
        options: P.options.map((te) => ({
          model: te.model,
          match_confidence: te.match_confidence,
          match_type: te.match_type,
          has_download_source: te.has_download_source
        }))
      }));
      return [...Y, ...$];
    }), _ = D(() => {
      let Y = 0;
      for (const $ of y.value.values())
        $.action === "install" && Y++;
      for (const $ of b.value.values())
        $.action === "select" && Y++;
      return Y;
    }), U = D(() => {
      let Y = 0;
      for (const $ of b.value.values())
        $.action === "download" && Y++;
      return Y;
    }), R = D(() => {
      let Y = 0;
      for (const $ of y.value.values())
        $.action === "optional" && Y++;
      for (const $ of b.value.values())
        $.action === "optional" && Y++;
      return Y;
    }), V = D(() => {
      let Y = 0;
      for (const $ of y.value.values())
        $.action === "skip" && Y++;
      for (const $ of b.value.values())
        $.action === "skip" && Y++;
      for (const $ of Z.value)
        y.value.has($.node_type) || Y++;
      for (const $ of N.value)
        b.value.has($.filename) || Y++;
      return Y;
    }), z = D(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, M.value) {
        const $ = Z.value.length, P = Z.value.filter(
          (te) => y.value.has(te.node_type)
        ).length;
        Y.nodes = { resolved: P, total: $ };
      }
      if (W.value) {
        const $ = N.value.length, P = N.value.filter(
          (te) => b.value.has(te.filename)
        ).length;
        Y.models = { resolved: P, total: $ };
      }
      return Y.review = { resolved: 1, total: 1 }, Y;
    });
    function T(Y) {
      C.value = Y;
    }
    function B() {
      const Y = E.value.findIndex(($) => $.id === C.value);
      Y > 0 && (C.value = E.value[Y - 1].id);
    }
    function H() {
      const Y = E.value.findIndex(($) => $.id === C.value);
      Y < E.value.length - 1 && (C.value = E.value[Y + 1].id);
    }
    async function O() {
      d.value = !0, p.value = null;
      try {
        v.value = await g(s.workflowName);
      } catch (Y) {
        p.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        d.value = !1;
      }
    }
    function L() {
      w.value.includes("analysis") || w.value.push("analysis"), M.value ? C.value = "nodes" : W.value ? C.value = "models" : C.value = "review";
    }
    function X(Y) {
      y.value.set(Y, { action: "optional" });
    }
    function j(Y) {
      y.value.set(Y, { action: "skip" });
    }
    function pe(Y, $) {
      var te;
      const P = Z.value.find((ye) => ye.node_type === Y);
      (te = P == null ? void 0 : P.options) != null && te[$] && y.value.set(Y, {
        action: "install",
        package_id: P.options[$].package_id
      });
    }
    function xe(Y, $) {
      y.value.set(Y, {
        action: "install",
        package_id: $
      });
    }
    function de(Y) {
      y.value.delete(Y);
    }
    function ue(Y) {
      b.value.set(Y, { action: "optional" });
    }
    function ee(Y) {
      b.value.set(Y, { action: "skip" });
    }
    function Le(Y, $) {
      var te;
      const P = N.value.find((ye) => ye.filename === Y);
      (te = P == null ? void 0 : P.options) != null && te[$] && b.value.set(Y, {
        action: "select",
        selected_model: P.options[$].model
      });
    }
    function Ze(Y, $, P) {
      b.value.set(Y, {
        action: "download",
        url: $,
        target_path: P
      });
    }
    function ce(Y) {
      b.value.delete(Y);
    }
    async function Ce() {
      l.value = !0, p.value = null;
      try {
        await h(s.workflowName, y.value, b.value), i("install"), i("refresh"), i("close");
      } catch (Y) {
        p.value = Y instanceof Error ? Y.message : "Failed to apply resolution";
      } finally {
        l.value = !1;
      }
    }
    return he(O), (Y, $) => (o(), k(mt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: d.value,
      error: p.value || void 0,
      "fixed-height": !0,
      onClose: $[1] || ($[1] = (P) => i("close"))
    }, {
      body: n(() => [
        d.value && !v.value ? (o(), a("div", Gi, [...$[2] || ($[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : v.value ? (o(), a("div", Hi, [
          m(il, {
            steps: E.value,
            "current-step": C.value,
            "completed-steps": w.value,
            "step-stats": z.value,
            onStepChange: T
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          C.value === "analysis" ? (o(), a("div", ji, [
            e("div", Ki, [
              e("div", qi, [
                $[3] || ($[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Xi, " Found " + c(v.value.stats.total_nodes) + " nodes and " + c(v.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Yi, [
                e("div", Zi, [
                  $[10] || ($[10] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Ji, [
                    e("div", Qi, [
                      $[4] || ($[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", er, c(v.value.nodes.resolved.length), 1),
                      $[5] || ($[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    v.value.nodes.ambiguous.length > 0 ? (o(), a("div", tr, [
                      $[6] || ($[6] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", or, c(v.value.nodes.ambiguous.length), 1),
                      $[7] || ($[7] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    v.value.nodes.unresolved.length > 0 ? (o(), a("div", sr, [
                      $[8] || ($[8] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", ar, c(v.value.nodes.unresolved.length), 1),
                      $[9] || ($[9] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ]),
                e("div", nr, [
                  $[17] || ($[17] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", lr, [
                    e("div", ir, [
                      $[11] || ($[11] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", rr, c(v.value.models.resolved.length), 1),
                      $[12] || ($[12] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    v.value.models.ambiguous.length > 0 ? (o(), a("div", cr, [
                      $[13] || ($[13] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", dr, c(v.value.models.ambiguous.length), 1),
                      $[14] || ($[14] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    v.value.models.unresolved.length > 0 ? (o(), a("div", ur, [
                      $[15] || ($[15] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", mr, c(v.value.models.unresolved.length), 1),
                      $[16] || ($[16] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ])
              ]),
              x.value ? (o(), a("div", vr, [
                $[18] || ($[18] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", fr, c(Z.value.length + N.value.length) + " items need your input", 1)
              ])) : (o(), a("div", gr, [...$[19] || ($[19] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : u("", !0),
          C.value === "nodes" ? (o(), k(oi, {
            key: 1,
            nodes: Z.value,
            "node-choices": y.value,
            onMarkOptional: X,
            onSkip: j,
            onOptionSelected: pe,
            onManualEntry: xe,
            onClearChoice: de
          }, null, 8, ["nodes", "node-choices"])) : u("", !0),
          C.value === "models" ? (o(), k(Pi, {
            key: 2,
            models: N.value,
            "model-choices": b.value,
            onMarkOptional: ue,
            onSkip: ee,
            onOptionSelected: Le,
            onDownloadUrl: Ze,
            onClearChoice: ce
          }, null, 8, ["models", "model-choices"])) : u("", !0),
          C.value === "review" ? (o(), a("div", hr, [
            e("div", pr, [
              $[24] || ($[24] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", yr, [
                e("div", wr, [
                  e("span", br, c(_.value), 1),
                  $[20] || ($[20] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", kr, [
                  e("span", _r, c(U.value), 1),
                  $[21] || ($[21] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", $r, [
                  e("span", Cr, c(R.value), 1),
                  $[22] || ($[22] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", xr, [
                  e("span", Sr, c(V.value), 1),
                  $[23] || ($[23] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Z.value.length > 0 ? (o(), a("div", Ir, [
                e("h4", Er, "Node Packages (" + c(Z.value.length) + ")", 1),
                e("div", zr, [
                  (o(!0), a(G, null, Q(Z.value, (P) => {
                    var te, ye, Re, We;
                    return o(), a("div", {
                      key: P.node_type,
                      class: "review-item"
                    }, [
                      e("code", Mr, c(P.node_type), 1),
                      e("div", Lr, [
                        y.value.has(P.node_type) ? (o(), a(G, { key: 0 }, [
                          ((te = y.value.get(P.node_type)) == null ? void 0 : te.action) === "install" ? (o(), a("span", Rr, c((ye = y.value.get(P.node_type)) == null ? void 0 : ye.package_id), 1)) : ((Re = y.value.get(P.node_type)) == null ? void 0 : Re.action) === "optional" ? (o(), a("span", Nr, " Optional ")) : ((We = y.value.get(P.node_type)) == null ? void 0 : We.action) === "skip" ? (o(), a("span", Tr, " Skip ")) : u("", !0)
                        ], 64)) : (o(), a("span", Ur, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              N.value.length > 0 ? (o(), a("div", Br, [
                e("h4", Dr, "Models (" + c(N.value.length) + ")", 1),
                e("div", Or, [
                  (o(!0), a(G, null, Q(N.value, (P) => {
                    var te, ye, Re, We, nt, je;
                    return o(), a("div", {
                      key: P.filename,
                      class: "review-item"
                    }, [
                      e("code", Vr, c(P.filename), 1),
                      e("div", Ar, [
                        b.value.has(P.filename) ? (o(), a(G, { key: 0 }, [
                          ((te = b.value.get(P.filename)) == null ? void 0 : te.action) === "select" ? (o(), a("span", Wr, c((Re = (ye = b.value.get(P.filename)) == null ? void 0 : ye.selected_model) == null ? void 0 : Re.filename), 1)) : ((We = b.value.get(P.filename)) == null ? void 0 : We.action) === "download" ? (o(), a("span", Fr, " Download ")) : ((nt = b.value.get(P.filename)) == null ? void 0 : nt.action) === "optional" ? (o(), a("span", Pr, " Optional ")) : ((je = b.value.get(P.filename)) == null ? void 0 : je.action) === "skip" ? (o(), a("span", Gr, " Skip ")) : u("", !0)
                        ], 64)) : (o(), a("span", Hr, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              Z.value.length === 0 && N.value.length === 0 ? (o(), a("div", jr, " No dependencies need resolution. ")) : u("", !0)
            ])
          ])) : u("", !0)
        ])) : u("", !0)
      ]),
      footer: n(() => [
        C.value !== "analysis" ? (o(), k(ae, {
          key: 0,
          variant: "secondary",
          disabled: l.value,
          onClick: B
        }, {
          default: n(() => [...$[25] || ($[25] = [
            f(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        $[29] || ($[29] = e("div", { class: "footer-spacer" }, null, -1)),
        m(ae, {
          variant: "secondary",
          onClick: $[0] || ($[0] = (P) => i("close"))
        }, {
          default: n(() => [...$[26] || ($[26] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C.value === "analysis" ? (o(), k(ae, {
          key: 1,
          variant: "primary",
          disabled: d.value,
          onClick: L
        }, {
          default: n(() => [
            f(c(x.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        C.value === "nodes" ? (o(), k(ae, {
          key: 2,
          variant: "primary",
          onClick: H
        }, {
          default: n(() => [
            f(c(W.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : u("", !0),
        C.value === "models" ? (o(), k(ae, {
          key: 3,
          variant: "primary",
          onClick: H
        }, {
          default: n(() => [...$[27] || ($[27] = [
            f(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : u("", !0),
        C.value === "review" ? (o(), k(ae, {
          key: 4,
          variant: "primary",
          disabled: l.value,
          loading: l.value,
          onClick: Ce
        }, {
          default: n(() => [...$[28] || ($[28] = [
            f(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), qr = /* @__PURE__ */ q(Kr, [["__scopeId", "data-v-c12ca3e4"]]), Xr = { class: "search-input-wrapper" }, Yr = ["value", "placeholder"], Zr = /* @__PURE__ */ K({
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
    const s = t, i = r, g = S(null);
    let h;
    function v(l) {
      const p = l.target.value;
      s.debounce > 0 ? (clearTimeout(h), h = window.setTimeout(() => {
        i("update:modelValue", p);
      }, s.debounce)) : i("update:modelValue", p);
    }
    function d() {
      var l;
      i("update:modelValue", ""), i("clear"), (l = g.value) == null || l.focus();
    }
    return he(() => {
      s.autoFocus && g.value && g.value.focus();
    }), (l, p) => (o(), a("div", Xr, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: Be(d, ["escape"])
      }, null, 40, Yr),
      t.clearable && t.modelValue ? (o(), a("button", {
        key: 0,
        class: "clear-button",
        onClick: d,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), Jr = /* @__PURE__ */ q(Zr, [["__scopeId", "data-v-266f857a"]]), Qr = { class: "search-bar" }, ec = /* @__PURE__ */ K({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, s) => (o(), a("div", Qr, [
      m(Jr, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => r.$emit("update:modelValue", i)),
        onClear: s[1] || (s[1] = (i) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Xe = /* @__PURE__ */ q(ec, [["__scopeId", "data-v-3d51bbfd"]]), tc = { class: "section-group" }, oc = {
  key: 0,
  class: "section-content"
}, sc = /* @__PURE__ */ K({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const s = t, i = r, g = S(s.initiallyExpanded);
    function h() {
      s.collapsible && (g.value = !g.value, i("toggle", g.value));
    }
    return (v, d) => (o(), a("section", tc, [
      m($e, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: h
      }, {
        default: n(() => [
          f(c(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), a("div", oc, [
        ne(v.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), ve = /* @__PURE__ */ q(sc, [["__scopeId", "data-v-c48e33ed"]]), ac = { class: "item-header" }, nc = {
  key: 0,
  class: "item-icon"
}, lc = { class: "item-info" }, ic = {
  key: 0,
  class: "item-title"
}, rc = {
  key: 1,
  class: "item-subtitle"
}, cc = {
  key: 0,
  class: "item-details"
}, dc = {
  key: 1,
  class: "item-actions"
}, uc = /* @__PURE__ */ K({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const s = t, i = D(() => s.status ? `status-${s.status}` : "");
    return (g, h) => (o(), a("div", {
      class: J(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: h[0] || (h[0] = (v) => t.clickable && g.$emit("click"))
    }, [
      e("div", ac, [
        g.$slots.icon ? (o(), a("span", nc, [
          ne(g.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        e("div", lc, [
          g.$slots.title ? (o(), a("div", ic, [
            ne(g.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          g.$slots.subtitle ? (o(), a("div", rc, [
            ne(g.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      g.$slots.details ? (o(), a("div", cc, [
        ne(g.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      g.$slots.actions ? (o(), a("div", dc, [
        ne(g.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), ge = /* @__PURE__ */ q(uc, [["__scopeId", "data-v-cc435e0e"]]), mc = { class: "loading-state" }, vc = { class: "loading-message" }, fc = /* @__PURE__ */ K({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, s) => (o(), a("div", mc, [
      s[0] || (s[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", vc, c(t.message), 1)
    ]));
  }
}), Oe = /* @__PURE__ */ q(fc, [["__scopeId", "data-v-ad8436c9"]]), gc = { class: "error-state" }, hc = { class: "error-message" }, pc = /* @__PURE__ */ K({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, s) => (o(), a("div", gc, [
      s[2] || (s[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", hc, c(t.message), 1),
      t.retry ? (o(), k(F, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (i) => r.$emit("retry"))
      }, {
        default: n(() => [...s[1] || (s[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), Ve = /* @__PURE__ */ q(pc, [["__scopeId", "data-v-5397be48"]]), yc = /* @__PURE__ */ K({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const s = r, { getWorkflows: i } = ke(), g = S([]), h = S(!1), v = S(null), d = S(""), l = S(!0), p = S(!1), C = S(!1), w = S(!1), y = S(null), b = D(
      () => g.value.filter((O) => O.status === "broken")
    ), E = D(
      () => g.value.filter((O) => O.status === "new")
    ), x = D(
      () => g.value.filter((O) => O.status === "modified")
    ), M = D(
      () => g.value.filter((O) => O.status === "synced")
    ), W = D(() => {
      if (!d.value.trim()) return g.value;
      const O = d.value.toLowerCase();
      return g.value.filter((L) => L.name.toLowerCase().includes(O));
    }), Z = D(
      () => b.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = D(
      () => E.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), _ = D(
      () => x.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), U = D(
      () => M.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), R = D(
      () => p.value ? U.value : U.value.slice(0, 5)
    );
    async function V() {
      h.value = !0, v.value = null;
      try {
        g.value = await i();
      } catch (O) {
        v.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    function z(O) {
      y.value = O, C.value = !0;
    }
    function T(O) {
      y.value = O, w.value = !0;
    }
    function B() {
      alert("Bulk resolution not yet implemented");
    }
    function H() {
      s("refresh");
    }
    return he(V), (O, L) => (o(), a(G, null, [
      m(we, null, {
        header: n(() => [
          m(be, { title: "WORKFLOWS" }, {
            actions: n(() => [
              b.value.length > 0 ? (o(), k(F, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: n(() => [...L[7] || (L[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : u("", !0)
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          m(Xe, {
            modelValue: d.value,
            "onUpdate:modelValue": L[0] || (L[0] = (X) => d.value = X),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          h.value ? (o(), k(Oe, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), k(Ve, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), a(G, { key: 2 }, [
            Z.value.length ? (o(), k(ve, {
              key: 0,
              title: "BROKEN",
              count: Z.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(Z.value, (X) => (o(), k(ge, {
                  key: X.name,
                  status: "broken"
                }, {
                  icon: n(() => [...L[8] || (L[8] = [
                    f("⚠", -1)
                  ])]),
                  title: n(() => [
                    f(c(X.name), 1)
                  ]),
                  subtitle: n(() => [
                    f(" Missing: " + c(X.missing_nodes) + " nodes, " + c(X.missing_models) + " models ", 1)
                  ]),
                  actions: n(() => [
                    m(F, {
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => T(X.name)
                    }, {
                      default: n(() => [...L[9] || (L[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(F, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => z(X.name)
                    }, {
                      default: n(() => [...L[10] || (L[10] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            N.value.length ? (o(), k(ve, {
              key: 1,
              title: "NEW",
              count: N.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(N.value, (X) => (o(), k(ge, {
                  key: X.name,
                  status: "new"
                }, {
                  icon: n(() => [...L[11] || (L[11] = [
                    f("●", -1)
                  ])]),
                  title: n(() => [
                    f(c(X.name), 1)
                  ]),
                  subtitle: n(() => [...L[12] || (L[12] = [
                    f("New", -1)
                  ])]),
                  actions: n(() => [
                    m(F, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => z(X.name)
                    }, {
                      default: n(() => [...L[13] || (L[13] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            _.value.length ? (o(), k(ve, {
              key: 2,
              title: "MODIFIED",
              count: _.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(_.value, (X) => (o(), k(ge, {
                  key: X.name,
                  status: "modified"
                }, {
                  icon: n(() => [...L[14] || (L[14] = [
                    f("⚡", -1)
                  ])]),
                  title: n(() => [
                    f(c(X.name), 1)
                  ]),
                  subtitle: n(() => [...L[15] || (L[15] = [
                    f("Modified", -1)
                  ])]),
                  actions: n(() => [
                    m(F, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => z(X.name)
                    }, {
                      default: n(() => [...L[16] || (L[16] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            U.value.length ? (o(), k(ve, {
              key: 3,
              title: "SYNCED",
              count: U.value.length,
              collapsible: !0,
              "initially-expanded": l.value,
              onToggle: L[2] || (L[2] = (X) => l.value = X)
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(R.value, (X) => (o(), k(ge, {
                  key: X.name,
                  status: "synced"
                }, {
                  icon: n(() => [...L[17] || (L[17] = [
                    f("✓", -1)
                  ])]),
                  title: n(() => [
                    f(c(X.name), 1)
                  ]),
                  subtitle: n(() => [...L[18] || (L[18] = [
                    f("Synced", -1)
                  ])]),
                  actions: n(() => [
                    m(F, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => z(X.name)
                    }, {
                      default: n(() => [...L[19] || (L[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !p.value && U.value.length > 5 ? (o(), k(F, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (X) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: n(() => [
                    f(" View all " + c(U.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : u("", !0),
            W.value.length ? u("", !0) : (o(), k(Me, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C.value && y.value ? (o(), k(Yn, {
        key: 0,
        "workflow-name": y.value,
        onClose: L[3] || (L[3] = (X) => C.value = !1),
        onResolve: L[4] || (L[4] = (X) => T(y.value))
      }, null, 8, ["workflow-name"])) : u("", !0),
      w.value && y.value ? (o(), k(qr, {
        key: 1,
        "workflow-name": y.value,
        onClose: L[5] || (L[5] = (X) => w.value = !1),
        onInstall: H,
        onRefresh: L[6] || (L[6] = (X) => s("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ], 64));
  }
}), wc = /* @__PURE__ */ q(yc, [["__scopeId", "data-v-ee63730e"]]), bc = /* @__PURE__ */ K({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, s) => (o(), a("div", {
      class: J(["summary-bar", t.variant])
    }, [
      ne(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ q(bc, [["__scopeId", "data-v-ccb7816e"]]), kc = /* @__PURE__ */ K({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const s = r, { getEnvironmentModels: i, getStatus: g } = ke(), h = S([]), v = S([]), d = S("production"), l = S(!1), p = S(null), C = S(""), w = S(!1);
    function y() {
      w.value = !1, s("navigate", "model-index");
    }
    const b = D(
      () => h.value.reduce((z, T) => z + (T.size || 0), 0)
    ), E = D(() => {
      if (!C.value.trim()) return h.value;
      const z = C.value.toLowerCase();
      return h.value.filter((T) => T.filename.toLowerCase().includes(z));
    }), x = D(() => {
      if (!C.value.trim()) return v.value;
      const z = C.value.toLowerCase();
      return v.value.filter((T) => T.filename.toLowerCase().includes(z));
    }), M = D(
      () => E.value.filter((z) => z.type === "checkpoints")
    ), W = D(
      () => E.value.filter((z) => z.type === "loras")
    ), Z = D(
      () => E.value.filter((z) => z.type !== "checkpoints" && z.type !== "loras")
    );
    function N(z) {
      if (!z) return "Unknown";
      const T = z / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function _(z) {
      s("navigate", "model-index");
    }
    function U(z) {
      s("navigate", "model-index");
    }
    function R(z) {
      alert(`Download functionality not yet implemented for ${z}`);
    }
    async function V() {
      l.value = !0, p.value = null;
      try {
        const z = await i();
        h.value = z, v.value = [];
        const T = await g();
        d.value = T.environment || "production";
      } catch (z) {
        p.value = z instanceof Error ? z.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return he(V), (z, T) => (o(), a(G, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (B) => w.value = !0)
          })
        ]),
        search: n(() => [
          m(Xe, {
            modelValue: C.value,
            "onUpdate:modelValue": T[1] || (T[1] = (B) => C.value = B),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          l.value ? (o(), k(Oe, {
            key: 0,
            message: "Loading environment models..."
          })) : p.value ? (o(), k(Ve, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), a(G, { key: 2 }, [
            h.value.length ? (o(), k(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                f(" Total: " + c(h.value.length) + " models • " + c(N(b.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            M.value.length ? (o(), k(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: M.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(M.value, (B) => (o(), k(ge, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...T[3] || (T[3] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(c(B.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(c(N(B.size)), 1)
                  ]),
                  details: n(() => [
                    m(oe, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    m(F, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => _(B.hash)
                    }, {
                      default: n(() => [...T[4] || (T[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            W.value.length ? (o(), k(ve, {
              key: 2,
              title: "LORAS",
              count: W.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(W.value, (B) => (o(), k(ge, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...T[5] || (T[5] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(c(B.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(c(N(B.size)), 1)
                  ]),
                  details: n(() => [
                    m(oe, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    m(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    m(F, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => _(B.hash)
                    }, {
                      default: n(() => [...T[6] || (T[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            Z.value.length ? (o(), k(ve, {
              key: 3,
              title: "OTHER",
              count: Z.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(Z.value, (B) => (o(), k(ge, {
                  key: B.hash || B.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...T[7] || (T[7] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(c(B.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(c(N(B.size)), 1)
                  ]),
                  details: n(() => [
                    m(oe, {
                      label: "Type:",
                      value: B.type
                    }, null, 8, ["value"]),
                    m(oe, {
                      label: "Used by:",
                      value: (B.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    m(F, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => _(B.hash)
                    }, {
                      default: n(() => [...T[8] || (T[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            x.value.length ? (o(), k(ve, {
              key: 4,
              title: "MISSING",
              count: x.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(x.value, (B) => (o(), k(ge, {
                  key: B.filename,
                  status: "broken"
                }, {
                  icon: n(() => [...T[9] || (T[9] = [
                    f("⚠", -1)
                  ])]),
                  title: n(() => [
                    f(c(B.filename), 1)
                  ]),
                  subtitle: n(() => [...T[10] || (T[10] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: n(() => {
                    var H;
                    return [
                      m(oe, {
                        label: "Required by:",
                        value: ((H = B.workflow_names) == null ? void 0 : H.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: n(() => [
                    m(F, {
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => R(B.filename)
                    }, {
                      default: n(() => [...T[11] || (T[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m(F, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => U(B.filename)
                    }, {
                      default: n(() => [...T[12] || (T[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !E.value.length && !x.value.length ? (o(), k(Me, {
              key: 5,
              icon: "📭",
              message: C.value ? `No models match '${C.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(De, {
        show: w.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (B) => w.value = !1)
      }, {
        content: n(() => [
          e("p", null, [
            T[13] || (T[13] = f(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + c(d.value) + '"', 1),
            T[14] || (T[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: n(() => [
          m(F, {
            variant: "primary",
            onClick: y
          }, {
            default: n(() => [...T[15] || (T[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _c = /* @__PURE__ */ q(kc, [["__scopeId", "data-v-72675609"]]), $c = /* @__PURE__ */ K({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: r } = ke(), s = S([]), i = S(!1), g = S(null), h = S(""), v = S(!1), d = D(
      () => s.value.reduce((R, V) => R + (V.size_mb || V.size || 0), 0)
    ), l = D(() => {
      const R = /* @__PURE__ */ new Set();
      return s.value.forEach((V) => {
        V.used_in_environments && V.used_in_environments.length > 0 && V.used_in_environments.forEach((z) => R.add(z.env_name));
      }), R.size;
    }), p = D(() => {
      if (!h.value.trim()) return s.value;
      const R = h.value.toLowerCase();
      return s.value.filter((V) => {
        const z = V, T = V.sha256 || z.sha256_hash || "";
        return V.filename.toLowerCase().includes(R) || T.toLowerCase().includes(R);
      });
    }), C = D(
      () => p.value.filter((R) => R.type === "checkpoints")
    ), w = D(
      () => p.value.filter((R) => R.type === "loras")
    ), y = D(
      () => p.value.filter((R) => R.type !== "checkpoints" && R.type !== "loras")
    );
    function b(R) {
      return R ? R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB` : "Unknown";
    }
    function E(R) {
      const V = R, z = R.used_in_workflows || V.used_by || [];
      return !z || z.length === 0 ? "Not used" : `${z.length} workflow(s)`;
    }
    function x(R) {
      navigator.clipboard.writeText(R), alert("Hash copied to clipboard");
    }
    function M(R) {
      prompt("Enter model source URL:", R.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function W(R) {
      const V = R, z = R.used_in_workflows || V.used_by || [], T = z && z.length > 0 ? `

⚠ WARNING: This model is used by ${z.length} workflow(s):
${z.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${R.filename}?${T}

This will free ${b(V.size_mb || R.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function Z() {
      alert("Scan for models not yet implemented");
    }
    function N() {
      alert("Change directory not yet implemented");
    }
    function _() {
      alert("Download new model not yet implemented");
    }
    async function U() {
      i.value = !0, g.value = null;
      try {
        s.value = await r(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", C.value), console.log("Filtered loras:", w.value), console.log("Filtered other:", y.value);
      } catch (R) {
        g.value = R instanceof Error ? R.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return he(U), (R, V) => (o(), a(G, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: V[0] || (V[0] = (z) => v.value = !0)
          }, {
            actions: n(() => [
              m(F, {
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: n(() => [...V[3] || (V[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              m(F, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: n(() => [...V[4] || (V[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              m(F, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: n(() => [...V[5] || (V[5] = [
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
        search: n(() => [
          m(Xe, {
            modelValue: h.value,
            "onUpdate:modelValue": V[1] || (V[1] = (z) => h.value = z),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          i.value ? (o(), k(Oe, {
            key: 0,
            message: "Loading workspace models..."
          })) : g.value ? (o(), k(Ve, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), a(G, { key: 2 }, [
            s.value.length ? (o(), k(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                f(" Total: " + c(s.value.length) + " models • " + c(b(d.value)) + " • Used in " + c(l.value) + " environments ", 1)
              ]),
              _: 1
            })) : u("", !0),
            C.value.length ? (o(), k(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: C.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(C.value, (z) => (o(), k(ge, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...V[6] || (V[6] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(c(z.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(c(b(z.size_mb || z.size)), 1)
                  ]),
                  details: n(() => {
                    var T, B;
                    return [
                      z.sha256 || z.sha256_hash ? (o(), k(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : u("", !0),
                      m(oe, {
                        label: "Used in:",
                        value: E(z)
                      }, null, 8, ["value"]),
                      z.source_url || (T = z.sources) != null && T[0] ? (o(), k(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: z.source_url || ((B = z.sources) == null ? void 0 : B[0])
                      }, null, 8, ["value"])) : (o(), k(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...V[7] || (V[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    m(F, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => M(z)
                    }, {
                      default: n(() => [...V[8] || (V[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), k(F, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => x(z.sha256 || z.sha256_hash)
                    }, {
                      default: n(() => [...V[9] || (V[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    m(F, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => W(z)
                    }, {
                      default: n(() => [...V[10] || (V[10] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            w.value.length ? (o(), k(ve, {
              key: 2,
              title: "LORAS",
              count: w.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(w.value, (z) => (o(), k(ge, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...V[11] || (V[11] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(c(z.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(c(b(z.size_mb || z.size)), 1)
                  ]),
                  details: n(() => {
                    var T, B;
                    return [
                      z.sha256 || z.sha256_hash ? (o(), k(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : u("", !0),
                      m(oe, {
                        label: "Used in:",
                        value: E(z)
                      }, null, 8, ["value"]),
                      z.source_url || (T = z.sources) != null && T[0] ? (o(), k(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: z.source_url || ((B = z.sources) == null ? void 0 : B[0])
                      }, null, 8, ["value"])) : (o(), k(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...V[12] || (V[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    m(F, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => M(z)
                    }, {
                      default: n(() => [...V[13] || (V[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), k(F, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => x(z.sha256 || z.sha256_hash)
                    }, {
                      default: n(() => [...V[14] || (V[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    m(F, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => W(z)
                    }, {
                      default: n(() => [...V[15] || (V[15] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            y.value.length ? (o(), k(ve, {
              key: 3,
              title: "OTHER",
              count: y.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(y.value, (z) => (o(), k(ge, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...V[16] || (V[16] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(c(z.filename), 1)
                  ]),
                  subtitle: n(() => [
                    f(c(b(z.size_mb || z.size)), 1)
                  ]),
                  details: n(() => [
                    m(oe, {
                      label: "Type:",
                      value: z.type
                    }, null, 8, ["value"]),
                    z.sha256 || z.sha256_hash ? (o(), k(oe, {
                      key: 0,
                      label: "SHA256:",
                      value: (z.sha256 || z.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : u("", !0),
                    m(oe, {
                      label: "Used in:",
                      value: E(z)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    m(F, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => M(z)
                    }, {
                      default: n(() => [...V[17] || (V[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    z.sha256 || z.sha256_hash ? (o(), k(F, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (T) => x(z.sha256 || z.sha256_hash)
                    }, {
                      default: n(() => [...V[18] || (V[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    m(F, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (T) => W(z)
                    }, {
                      default: n(() => [...V[19] || (V[19] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            p.value.length ? u("", !0) : (o(), k(Me, {
              key: 4,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      m(De, {
        show: v.value,
        title: "About Workspace Model Index",
        onClose: V[2] || (V[2] = (z) => v.value = !1)
      }, {
        content: n(() => [...V[20] || (V[20] = [
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
}), Cc = /* @__PURE__ */ q($c, [["__scopeId", "data-v-5a24af01"]]), xc = { key: 0 }, Sc = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Ic = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, Ec = /* @__PURE__ */ K({
  __name: "NodesSection",
  setup(t) {
    const { getNodes: r, installNode: s, updateNode: i, uninstallNode: g } = ke(), h = S({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), v = S(!1), d = S(null), l = S(""), p = S(!1), C = D(() => {
      if (!l.value.trim()) return h.value.nodes;
      const _ = l.value.toLowerCase();
      return h.value.nodes.filter(
        (U) => {
          var R, V;
          return U.name.toLowerCase().includes(_) || ((R = U.description) == null ? void 0 : R.toLowerCase().includes(_)) || ((V = U.repository) == null ? void 0 : V.toLowerCase().includes(_));
        }
      );
    }), w = D(
      () => C.value.filter((_) => _.installed)
    ), y = D(
      () => C.value.filter((_) => !_.installed)
    );
    function b(_) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[_] || _;
    }
    function E(_) {
      return !_.used_in_workflows || _.used_in_workflows.length === 0 ? "Not used in any workflows" : _.used_in_workflows.length === 1 ? _.used_in_workflows[0] : `${_.used_in_workflows.length} workflows`;
    }
    function x(_) {
      window.open(_, "_blank");
    }
    async function M(_) {
      if (confirm(`Install node "${_}"?

This will download and install the node from its repository.`))
        try {
          v.value = !0;
          const U = await s(_);
          U.status === "success" ? (alert(`Node "${_}" installed successfully!`), await N()) : alert(`Failed to install node: ${U.message || "Unknown error"}`);
        } catch (U) {
          alert(`Error installing node: ${U instanceof Error ? U.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function W(_) {
      if (confirm(`Check for updates for "${_}"?`))
        try {
          v.value = !0;
          const U = await i(_);
          U.status === "success" ? (alert(`Node "${_}" is up to date or has been updated!`), await N()) : alert(`Update check failed: ${U.message || "Unknown error"}`);
        } catch (U) {
          alert(`Error checking for updates: ${U instanceof Error ? U.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function Z(_) {
      if (confirm(`Uninstall node "${_}"?

This will remove the node from this environment.`))
        try {
          v.value = !0;
          const U = await g(_);
          U.status === "success" ? (alert(`Node "${_}" uninstalled successfully!`), await N()) : alert(`Failed to uninstall node: ${U.message || "Unknown error"}`);
        } catch (U) {
          alert(`Error uninstalling node: ${U instanceof Error ? U.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
    }
    async function N() {
      v.value = !0, d.value = null;
      try {
        h.value = await r();
      } catch (_) {
        d.value = _ instanceof Error ? _.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return he(N), (_, U) => (o(), a(G, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: U[0] || (U[0] = (R) => p.value = !0)
          })
        ]),
        search: n(() => [
          m(Xe, {
            modelValue: l.value,
            "onUpdate:modelValue": U[1] || (U[1] = (R) => l.value = R),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          v.value ? (o(), k(Oe, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : d.value ? (o(), k(Ve, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (o(), a(G, { key: 2 }, [
            h.value.total_count ? (o(), k(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                f(" Total: " + c(h.value.total_count) + " nodes • " + c(h.value.installed_count) + " installed • " + c(h.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : u("", !0),
            w.value.length ? (o(), k(ve, {
              key: 1,
              title: "INSTALLED",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(w.value, (R) => (o(), k(ge, {
                  key: R.name,
                  status: "synced"
                }, {
                  icon: n(() => [...U[4] || (U[4] = [
                    f("📦", -1)
                  ])]),
                  title: n(() => [
                    f(c(R.name), 1)
                  ]),
                  subtitle: n(() => [
                    R.version ? (o(), a("span", xc, "v" + c(R.version), 1)) : (o(), a("span", Sc, "version unknown")),
                    R.source ? (o(), a("span", Ic, " • " + c(b(R.source)), 1)) : u("", !0)
                  ]),
                  details: n(() => [
                    R.description ? (o(), k(oe, {
                      key: 0,
                      label: "Description:",
                      value: R.description
                    }, null, 8, ["value"])) : u("", !0),
                    R.repository ? (o(), k(oe, {
                      key: 1,
                      label: "Repository:",
                      value: R.repository
                    }, null, 8, ["value"])) : u("", !0),
                    m(oe, {
                      label: "Used by:",
                      value: E(R)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    R.repository ? (o(), k(F, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => x(R.repository)
                    }, {
                      default: n(() => [...U[5] || (U[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    R.source === "registry" ? (o(), k(F, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => W(R.name)
                    }, {
                      default: n(() => [...U[6] || (U[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    R.source !== "unknown" ? (o(), k(F, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (V) => Z(R.name)
                    }, {
                      default: n(() => [...U[7] || (U[7] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            y.value.length ? (o(), k(ve, {
              key: 2,
              title: "MISSING",
              count: y.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(y.value, (R) => (o(), k(ge, {
                  key: R.name,
                  status: "missing"
                }, {
                  icon: n(() => [...U[8] || (U[8] = [
                    f("⚠", -1)
                  ])]),
                  title: n(() => [
                    f(c(R.name), 1)
                  ]),
                  subtitle: n(() => [...U[9] || (U[9] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: n(() => [
                    R.description ? (o(), k(oe, {
                      key: 0,
                      label: "Description:",
                      value: R.description
                    }, null, 8, ["value"])) : u("", !0),
                    R.repository ? (o(), k(oe, {
                      key: 1,
                      label: "Repository:",
                      value: R.repository
                    }, null, 8, ["value"])) : u("", !0),
                    m(oe, {
                      label: "Required by:",
                      value: E(R)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    R.download_url ? (o(), k(F, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => M(R.name)
                    }, {
                      default: n(() => [...U[10] || (U[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    R.repository ? (o(), k(F, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => x(R.repository)
                    }, {
                      default: n(() => [...U[11] || (U[11] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !w.value.length && !y.value.length ? (o(), k(Me, {
              key: 3,
              icon: "📭",
              message: l.value ? `No nodes match '${l.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      m(De, {
        show: p.value,
        title: "About Git-Tracked Nodes",
        onClose: U[3] || (U[3] = (R) => p.value = !1)
      }, {
        content: n(() => [...U[12] || (U[12] = [
          e("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            f(" Nodes currently available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            f(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: n(() => [
          m(F, {
            variant: "primary",
            onClick: U[2] || (U[2] = (R) => p.value = !1)
          }, {
            default: n(() => [...U[13] || (U[13] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), zc = /* @__PURE__ */ q(Ec, [["__scopeId", "data-v-c480e2c1"]]), Mc = { class: "remote-url-display" }, Lc = ["title"], Rc = ["title"], Nc = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Tc = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Uc = /* @__PURE__ */ K({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, s = S(!1), i = D(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const h = r.url.slice(0, Math.floor(r.maxLength * 0.6)), v = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${h}...${v}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(r.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy URL:", h);
      }
    }
    return (h, v) => (o(), a("div", Mc, [
      e("span", {
        class: "url-text",
        title: t.url
      }, c(i.value), 9, Lc),
      e("button", {
        class: J(["copy-btn", { copied: s.value }]),
        onClick: g,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (o(), a("svg", Tc, [...v[1] || (v[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), a("svg", Nc, [...v[0] || (v[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Rc)
    ]));
  }
}), St = /* @__PURE__ */ q(Uc, [["__scopeId", "data-v-7768a58d"]]), Bc = { class: "remote-title" }, Dc = {
  key: 0,
  class: "default-badge"
}, Oc = {
  key: 1,
  class: "sync-badge"
}, Vc = {
  key: 0,
  class: "ahead"
}, Ac = {
  key: 1,
  class: "behind"
}, Wc = {
  key: 0,
  class: "tracking-info"
}, Fc = /* @__PURE__ */ K({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: r }) {
    const s = t, i = D(() => s.fetchingRemote === s.remote.name), g = D(() => s.remote.is_default), h = D(() => !!s.trackingBranch);
    function v(d) {
      const l = new Date(d), C = (/* @__PURE__ */ new Date()).getTime() - l.getTime(), w = Math.floor(C / 6e4);
      if (w < 1) return "Just now";
      if (w < 60) return `${w}m ago`;
      const y = Math.floor(w / 60);
      if (y < 24) return `${y}h ago`;
      const b = Math.floor(y / 24);
      return b < 7 ? `${b}d ago` : l.toLocaleDateString();
    }
    return (d, l) => (o(), k(ge, {
      status: g.value ? "synced" : void 0
    }, {
      icon: n(() => [
        f(c(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: n(() => [
        e("div", Bc, [
          e("span", null, c(t.remote.name), 1),
          g.value ? (o(), a("span", Dc, "DEFAULT")) : u("", !0),
          t.syncStatus ? (o(), a("span", Oc, [
            t.syncStatus.ahead > 0 ? (o(), a("span", Vc, "↑" + c(t.syncStatus.ahead), 1)) : u("", !0),
            t.syncStatus.behind > 0 ? (o(), a("span", Ac, "↓" + c(t.syncStatus.behind), 1)) : u("", !0)
          ])) : u("", !0)
        ])
      ]),
      subtitle: n(() => [
        h.value ? (o(), a("span", Wc, " Tracking: " + c(t.trackingBranch), 1)) : u("", !0)
      ]),
      details: n(() => {
        var p;
        return [
          m(oe, { label: "Fetch:" }, {
            default: n(() => [
              m(St, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), k(oe, {
            key: 0,
            label: "Push:"
          }, {
            default: n(() => [
              m(St, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : u("", !0),
          (p = t.syncStatus) != null && p.last_fetch ? (o(), k(oe, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: n(() => [
              e("span", null, c(v(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : u("", !0)
        ];
      }),
      actions: n(() => [
        m(F, {
          variant: "primary",
          size: "xs",
          loading: i.value,
          onClick: l[0] || (l[0] = (p) => d.$emit("fetch", t.remote.name))
        }, {
          default: n(() => [...l[3] || (l[3] = [
            f(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        m(F, {
          variant: "secondary",
          size: "xs",
          onClick: l[1] || (l[1] = (p) => d.$emit("edit", t.remote.name))
        }, {
          default: n(() => [...l[4] || (l[4] = [
            f(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? u("", !0) : (o(), k(F, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: l[2] || (l[2] = (p) => d.$emit("remove", t.remote.name))
        }, {
          default: n(() => [...l[5] || (l[5] = [
            f(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Pc = /* @__PURE__ */ q(Fc, [["__scopeId", "data-v-17362e45"]]), Gc = ["for"], Hc = {
  key: 0,
  class: "base-form-field-required"
}, jc = { class: "base-form-field-input" }, Kc = {
  key: 1,
  class: "base-form-field-error"
}, qc = {
  key: 2,
  class: "base-form-field-hint"
}, Xc = /* @__PURE__ */ K({
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
    const r = t, s = D(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, g) => (o(), a("div", {
      class: J(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), a("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        f(c(t.label) + " ", 1),
        t.required ? (o(), a("span", Hc, "*")) : u("", !0)
      ], 8, Gc)) : u("", !0),
      e("div", jc, [
        ne(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), a("span", Kc, c(t.error), 1)) : t.hint ? (o(), a("span", qc, c(t.hint), 1)) : u("", !0)
    ], 2));
  }
}), ft = /* @__PURE__ */ q(Xc, [["__scopeId", "data-v-9a1cf296"]]), Yc = { class: "remote-form" }, Zc = { class: "form-header" }, Jc = { class: "form-body" }, Qc = {
  key: 0,
  class: "form-error"
}, ed = { class: "form-actions" }, td = /* @__PURE__ */ K({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const s = t, i = r, g = S({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), h = S(!1), v = S(null);
    zt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      g.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const d = D(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!d.value || h.value)) {
        v.value = null, h.value = !0;
        try {
          i("submit", g.value);
        } catch (p) {
          v.value = p instanceof Error ? p.message : "Failed to submit form";
        } finally {
          h.value = !1;
        }
      }
    }
    return (p, C) => (o(), a("div", Yc, [
      e("div", Zc, [
        m($e, null, {
          default: n(() => [
            f(c(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Jc, [
        m(ft, {
          label: "Remote Name",
          required: ""
        }, {
          default: n(() => [
            m(Ae, {
              modelValue: g.value.name,
              "onUpdate:modelValue": C[0] || (C[0] = (w) => g.value.name = w),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        m(ft, {
          label: "Fetch URL",
          required: ""
        }, {
          default: n(() => [
            m(Ae, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": C[1] || (C[1] = (w) => g.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m(ft, { label: "Push URL (optional)" }, {
          default: n(() => [
            m(Ae, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": C[2] || (C[2] = (w) => g.value.pushUrl = w),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        v.value ? (o(), a("div", Qc, c(v.value), 1)) : u("", !0)
      ]),
      e("div", ed, [
        m(F, {
          variant: "primary",
          size: "md",
          disabled: !d.value,
          loading: h.value,
          onClick: l
        }, {
          default: n(() => [
            f(c(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        m(F, {
          variant: "ghost",
          size: "md",
          onClick: C[3] || (C[3] = (w) => p.$emit("cancel"))
        }, {
          default: n(() => [...C[4] || (C[4] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), od = /* @__PURE__ */ q(td, [["__scopeId", "data-v-56021b18"]]), sd = { key: 0 }, ad = /* @__PURE__ */ K({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: r,
      addRemote: s,
      removeRemote: i,
      updateRemoteUrl: g,
      fetchRemote: h,
      getRemoteSyncStatus: v
    } = ke(), d = S([]), l = S(null), p = S({}), C = S(!1), w = S(null), y = S(""), b = S(!1), E = S(null), x = S(!1), M = S("add"), W = S({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), Z = D(() => {
      if (!y.value.trim()) return d.value;
      const O = y.value.toLowerCase();
      return d.value.filter(
        (L) => L.name.toLowerCase().includes(O) || L.fetch_url.toLowerCase().includes(O) || L.push_url.toLowerCase().includes(O)
      );
    });
    function N(O) {
      var L;
      return ((L = l.value) == null ? void 0 : L.remote) === O;
    }
    async function _() {
      C.value = !0, w.value = null;
      try {
        const O = await r();
        d.value = O.remotes, l.value = O.current_branch_tracking || null, await Promise.all(
          O.remotes.map(async (L) => {
            const X = await v(L.name);
            X && (p.value[L.name] = X);
          })
        );
      } catch (O) {
        w.value = O instanceof Error ? O.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function U() {
      M.value = "add", W.value = { name: "", fetchUrl: "", pushUrl: "" }, x.value = !0;
    }
    function R(O) {
      const L = d.value.find((X) => X.name === O);
      L && (M.value = "edit", W.value = {
        name: L.name,
        fetchUrl: L.fetch_url,
        pushUrl: L.push_url
      }, x.value = !0);
    }
    async function V(O) {
      try {
        M.value === "add" ? await s(O.name, O.fetchUrl) : await g(O.name, O.fetchUrl, O.pushUrl || void 0), x.value = !1, await _();
      } catch (L) {
        w.value = L instanceof Error ? L.message : "Operation failed";
      }
    }
    function z() {
      x.value = !1, W.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function T(O) {
      E.value = O;
      try {
        await h(O);
        const L = await v(O);
        L && (p.value[O] = L);
      } catch (L) {
        w.value = L instanceof Error ? L.message : "Fetch failed";
      } finally {
        E.value = null;
      }
    }
    async function B(O) {
      if (confirm(`Remove remote "${O}"?`))
        try {
          await i(O), await _();
        } catch (L) {
          w.value = L instanceof Error ? L.message : "Failed to remove remote";
        }
    }
    function H() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return he(_), (O, L) => (o(), a(G, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (X) => b.value = !0)
          }, {
            actions: n(() => [
              x.value ? u("", !0) : (o(), k(F, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: n(() => [...L[3] || (L[3] = [
                  f(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          x.value ? u("", !0) : (o(), k(Xe, {
            key: 0,
            modelValue: y.value,
            "onUpdate:modelValue": L[1] || (L[1] = (X) => y.value = X),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: n(() => [
          C.value ? (o(), k(Oe, {
            key: 0,
            message: "Loading remotes..."
          })) : w.value ? (o(), k(Ve, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (o(), a(G, { key: 2 }, [
            x.value ? (o(), k(od, {
              key: 0,
              mode: M.value,
              "remote-name": W.value.name,
              "fetch-url": W.value.fetchUrl,
              "push-url": W.value.pushUrl,
              onSubmit: V,
              onCancel: z
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : u("", !0),
            d.value.length && !x.value ? (o(), k(Ye, {
              key: 1,
              variant: "compact"
            }, {
              default: n(() => [
                f(" Total: " + c(d.value.length) + " remote" + c(d.value.length !== 1 ? "s" : "") + " ", 1),
                l.value ? (o(), a("span", sd, " • Tracking: " + c(l.value.remote) + "/" + c(l.value.branch), 1)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            Z.value.length && !x.value ? (o(), k(ve, {
              key: 2,
              title: "REMOTES",
              count: Z.value.length
            }, {
              default: n(() => [
                (o(!0), a(G, null, Q(Z.value, (X) => {
                  var j;
                  return o(), k(Pc, {
                    key: X.name,
                    remote: X,
                    "sync-status": p.value[X.name],
                    "tracking-branch": N(X.name) ? (j = l.value) == null ? void 0 : j.branch : void 0,
                    "fetching-remote": E.value,
                    onFetch: T,
                    onEdit: R,
                    onRemove: B
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !Z.value.length && !x.value ? (o(), k(Me, {
              key: 3,
              icon: "🌐",
              message: y.value ? `No remotes match '${y.value}'` : "No remotes configured."
            }, {
              actions: n(() => [
                m(F, {
                  variant: "primary",
                  onClick: U
                }, {
                  default: n(() => [...L[4] || (L[4] = [
                    f(" Add Your First Remote ", -1)
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
      m(De, {
        show: b.value,
        title: "About Git Remotes",
        onClose: L[2] || (L[2] = (X) => b.value = !1)
      }, {
        content: n(() => [...L[5] || (L[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            f(" The "),
            e("strong", null, '"origin"'),
            f(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: n(() => [
          m(F, {
            variant: "link",
            onClick: H
          }, {
            default: n(() => [...L[6] || (L[6] = [
              f(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), nd = /* @__PURE__ */ q(ad, [["__scopeId", "data-v-a75719bb"]]), ld = { class: "setting-info" }, id = { class: "setting-label" }, rd = {
  key: 0,
  class: "required-marker"
}, cd = {
  key: 0,
  class: "setting-description"
}, dd = { class: "setting-control" }, ud = /* @__PURE__ */ K({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, s) => (o(), a("div", {
      class: J(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", ld, [
        e("div", id, [
          f(c(t.label) + " ", 1),
          t.required ? (o(), a("span", rd, "*")) : u("", !0)
        ]),
        t.description ? (o(), a("div", cd, c(t.description), 1)) : u("", !0)
      ]),
      e("div", dd, [
        ne(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ue = /* @__PURE__ */ q(ud, [["__scopeId", "data-v-cb5d236c"]]), md = { class: "toggle" }, vd = ["checked", "disabled"], fd = /* @__PURE__ */ K({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, s) => (o(), a("label", md, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: s[0] || (s[0] = (i) => r.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, vd),
      s[1] || (s[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), He = /* @__PURE__ */ q(fd, [["__scopeId", "data-v-71c0f550"]]), gd = { class: "settings-section" }, hd = { class: "path-setting" }, pd = { class: "path-value" }, yd = { class: "path-setting" }, wd = { class: "path-value" }, bd = { class: "settings-section" }, kd = { class: "settings-section" }, _d = { class: "settings-section" }, $d = /* @__PURE__ */ K({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: s } = ke(), i = S(!1), g = S(null), h = S(null), v = S(null), d = S(null), l = S(""), p = S(""), C = S(!0), w = S(!0), y = S(!1), b = D(() => d.value ? l.value !== (d.value.civitai_api_key || "") : !1);
    async function E() {
      i.value = !0, g.value = null;
      try {
        v.value = await r(), d.value = { ...v.value }, l.value = v.value.civitai_api_key || "", p.value = v.value.huggingface_token || "", C.value = v.value.auto_sync_models, w.value = v.value.confirm_destructive;
        const Z = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        y.value = Z === "true";
      } catch (Z) {
        g.value = Z instanceof Error ? Z.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function x() {
      var Z;
      h.value = null;
      try {
        const N = {};
        l.value !== (((Z = d.value) == null ? void 0 : Z.civitai_api_key) || "") && (N.civitai_api_key = l.value || null), await s(N), await E(), h.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          h.value = null;
        }, 3e3);
      } catch (N) {
        h.value = {
          type: "error",
          message: N instanceof Error ? N.message : "Failed to save settings"
        };
      }
    }
    function M() {
      d.value && (l.value = d.value.civitai_api_key || "", p.value = d.value.huggingface_token || "", C.value = d.value.auto_sync_models, w.value = d.value.confirm_destructive, h.value = null);
    }
    function W(Z) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Z)), console.log("[ComfyGit] Auto-refresh setting saved:", Z);
    }
    return he(E), (Z, N) => (o(), k(we, null, {
      header: n(() => [
        m(be, { title: "WORKSPACE SETTINGS" }, {
          actions: n(() => [
            m(F, {
              variant: "primary",
              size: "sm",
              disabled: !b.value,
              onClick: x
            }, {
              default: n(() => [...N[5] || (N[5] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            b.value ? (o(), k(F, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: M
            }, {
              default: n(() => [...N[6] || (N[6] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : u("", !0)
          ]),
          _: 1
        })
      ]),
      content: n(() => [
        i.value ? (o(), k(Oe, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), k(Ve, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: E
        }, null, 8, ["message"])) : (o(), a(G, { key: 2 }, [
          m(ve, { title: "WORKSPACE PATHS" }, {
            default: n(() => {
              var _, U;
              return [
                e("div", gd, [
                  e("div", hd, [
                    N[7] || (N[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    N[8] || (N[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", pd, c(((_ = v.value) == null ? void 0 : _.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", yd, [
                    N[9] || (N[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    N[10] || (N[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", wd, c(((U = v.value) == null ? void 0 : U.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          m(ve, { title: "API CREDENTIALS" }, {
            default: n(() => [
              e("div", bd, [
                m(Ue, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: n(() => [
                    m(st, {
                      modelValue: l.value,
                      "onUpdate:modelValue": N[0] || (N[0] = (_) => l.value = _),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(Ue, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    m(st, {
                      modelValue: p.value,
                      "onUpdate:modelValue": N[1] || (N[1] = (_) => p.value = _),
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
          m(ve, { title: "UI SETTINGS" }, {
            default: n(() => [
              e("div", kd, [
                m(Ue, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: n(() => [
                    m(He, {
                      modelValue: y.value,
                      "onUpdate:modelValue": [
                        N[2] || (N[2] = (_) => y.value = _),
                        W
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          m(ve, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: n(() => [
              e("div", _d, [
                m(Ue, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    m(He, {
                      modelValue: C.value,
                      "onUpdate:modelValue": N[3] || (N[3] = (_) => C.value = _),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(Ue, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: n(() => [
                    m(He, {
                      modelValue: w.value,
                      "onUpdate:modelValue": N[4] || (N[4] = (_) => w.value = _),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          h.value ? (o(), k(Ye, {
            key: 0,
            variant: (h.value.type === "success", "compact")
          }, {
            default: n(() => [
              e("span", {
                style: at({ color: h.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, c(h.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : u("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Cd = /* @__PURE__ */ q($d, [["__scopeId", "data-v-7861bd35"]]), xd = /* @__PURE__ */ K({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = ke(), s = S([]), i = S(!1), g = S(null), h = S(!1), v = S(null), d = D(() => s.value.length === 0 ? [] : s.value.map((p) => ({
      text: `${p.timestamp} - ${p.name} - ${p.level} - ${p.func}:${p.line} - ${p.message}`,
      level: p.level
    })));
    async function l() {
      i.value = !0, g.value = null;
      try {
        s.value = await r(void 0, 500);
      } catch (p) {
        g.value = p instanceof Error ? p.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var p;
          (p = v.value) != null && p.parentElement && (v.value.parentElement.scrollTop = v.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return he(l), (p, C) => (o(), a(G, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (w) => h.value = !0)
          }, {
            actions: n(() => [
              m(F, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: i.value
              }, {
                default: n(() => [
                  f(c(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: n(() => [
          i.value ? (o(), k(Oe, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), k(Ve, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (o(), a(G, { key: 2 }, [
            s.value.length === 0 ? (o(), k(Me, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), a("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: v,
              class: "log-output"
            }, [
              (o(!0), a(G, null, Q(d.value, (w, y) => (o(), a("div", {
                key: y,
                class: J(`log-line log-level-${w.level.toLowerCase()}`)
              }, c(w.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(De, {
        show: h.value,
        title: "About Workspace Logs",
        onClose: C[2] || (C[2] = (w) => h.value = !1)
      }, {
        content: n(() => [...C[3] || (C[3] = [
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
        actions: n(() => [
          m(F, {
            variant: "primary",
            onClick: C[1] || (C[1] = (w) => h.value = !1)
          }, {
            default: n(() => [...C[4] || (C[4] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Sd = /* @__PURE__ */ q(xd, [["__scopeId", "data-v-39f6a756"]]), Id = /* @__PURE__ */ K({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: s } = ke(), i = S([]), g = S(!1), h = S(null), v = S(!1), d = S("production"), l = S(null), p = D(() => i.value.length === 0 ? [] : i.value.map((w) => ({
      text: `${w.timestamp} - ${w.name} - ${w.level} - ${w.func}:${w.line} - ${w.message}`,
      level: w.level
    })));
    async function C() {
      g.value = !0, h.value = null;
      try {
        i.value = await r(void 0, 500);
        try {
          const w = await s();
          d.value = w.environment || "production";
        } catch {
        }
      } catch (w) {
        h.value = w instanceof Error ? w.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var w;
          (w = l.value) != null && w.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return he(C), (w, y) => (o(), a(G, null, [
      m(we, null, {
        header: n(() => [
          m(be, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: y[0] || (y[0] = (b) => v.value = !0)
          }, {
            actions: n(() => [
              m(F, {
                variant: "secondary",
                size: "sm",
                onClick: C,
                disabled: g.value
              }, {
                default: n(() => [
                  f(c(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: n(() => [
          g.value ? (o(), k(Oe, {
            key: 0,
            message: "Loading environment logs..."
          })) : h.value ? (o(), k(Ve, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (o(), a(G, { key: 2 }, [
            i.value.length === 0 ? (o(), k(Me, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), a("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (o(!0), a(G, null, Q(p.value, (b, E) => (o(), a("div", {
                key: E,
                class: J(`log-line log-level-${b.level.toLowerCase()}`)
              }, c(b.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      m(De, {
        show: v.value,
        title: "About Environment Logs",
        onClose: y[2] || (y[2] = (b) => v.value = !1)
      }, {
        content: n(() => [
          e("p", null, [
            y[3] || (y[3] = f(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, c(d.value), 1),
            y[4] || (y[4] = f(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          y[5] || (y[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          y[6] || (y[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: n(() => [
          m(F, {
            variant: "primary",
            onClick: y[1] || (y[1] = (b) => v.value = !1)
          }, {
            default: n(() => [...y[7] || (y[7] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ed = /* @__PURE__ */ q(Id, [["__scopeId", "data-v-4f1e6f72"]]), zd = { class: "env-title" }, Md = {
  key: 0,
  class: "current-badge"
}, Ld = {
  key: 0,
  class: "branch-info"
}, Rd = /* @__PURE__ */ K({
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
    return (r, s) => (o(), k(ge, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: n(() => [
        f(c(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: n(() => [
        e("div", zd, [
          e("span", null, c(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), a("span", Md, "CURRENT")) : u("", !0)
        ])
      ]),
      subtitle: n(() => [
        t.currentBranch ? (o(), a("span", Ld, [
          s[0] || (s[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          f(" " + c(t.currentBranch), 1)
        ])) : u("", !0)
      ]),
      details: n(() => [
        m(oe, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        m(oe, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        m(oe, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), k(oe, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : u("", !0)
      ]),
      actions: n(() => [
        ne(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Nd = /* @__PURE__ */ q(Rd, [["__scopeId", "data-v-5238e57c"]]), Td = {
  key: 0,
  class: "create-form"
}, Ud = { class: "create-form__header" }, Bd = { class: "create-form__body" }, Dd = { class: "create-form__actions" }, Od = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Vd = /* @__PURE__ */ K({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { emit: r }) {
    const s = r, { getEnvironments: i } = ke(), g = S([]), h = S(!1), v = S(null), d = S(""), l = S(!1), p = S(!1), C = S(""), w = D(
      () => g.value.find((N) => N.is_current)
    ), y = D(() => {
      if (!d.value.trim()) return g.value;
      const N = d.value.toLowerCase();
      return g.value.filter(
        (_) => {
          var U;
          return _.name.toLowerCase().includes(N) || ((U = _.current_branch) == null ? void 0 : U.toLowerCase().includes(N));
        }
      );
    });
    function b(N) {
      if (!N) return "";
      try {
        const _ = new Date(N), R = (/* @__PURE__ */ new Date()).getTime() - _.getTime(), V = Math.floor(R / 6e4), z = Math.floor(R / 36e5), T = Math.floor(R / 864e5);
        return V < 1 ? "just now" : V < 60 ? `${V} ${V === 1 ? "minute" : "minutes"} ago` : z < 24 ? `${z} ${z === 1 ? "hour" : "hours"} ago` : T < 30 ? `${T} ${T === 1 ? "day" : "days"} ago` : _.toLocaleDateString();
      } catch {
        return N;
      }
    }
    function E() {
      const N = C.value.trim();
      N && (s("create", N), C.value = "", p.value = !1);
    }
    function x() {
      C.value = "", p.value = !1;
    }
    function M(N) {
      s("viewDetails", N);
    }
    function W(N) {
      confirm(`Delete environment "${N}"?

This action cannot be undone.`) && s("delete", N);
    }
    async function Z() {
      h.value = !0, v.value = null;
      try {
        g.value = await i();
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return he(Z), (N, _) => {
      const U = Qt("SectionGroup");
      return o(), a(G, null, [
        m(we, null, {
          header: n(() => [
            m(be, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: _[1] || (_[1] = (R) => l.value = !0)
            }, {
              actions: n(() => [
                m(F, {
                  variant: "ghost",
                  size: "sm",
                  onClick: _[0] || (_[0] = (R) => p.value = !0),
                  title: "Create new environment"
                }, {
                  default: n(() => [..._[7] || (_[7] = [
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
                m(F, {
                  variant: "ghost",
                  size: "sm",
                  onClick: Z,
                  title: "Refresh environments"
                }, {
                  default: n(() => [..._[8] || (_[8] = [
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
            m(Xe, {
              modelValue: d.value,
              "onUpdate:modelValue": _[2] || (_[2] = (R) => d.value = R),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: n(() => [
            h.value ? (o(), k(Oe, {
              key: 0,
              message: "Loading environments..."
            })) : v.value ? (o(), k(Ve, {
              key: 1,
              message: v.value,
              retry: !0,
              onRetry: Z
            }, null, 8, ["message"])) : (o(), a(G, { key: 2 }, [
              p.value ? (o(), a("div", Td, [
                e("div", Ud, [
                  _[10] || (_[10] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  m(F, {
                    variant: "ghost",
                    size: "xs",
                    onClick: x
                  }, {
                    default: n(() => [..._[9] || (_[9] = [
                      f(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                e("div", Bd, [
                  m(st, {
                    modelValue: C.value,
                    "onUpdate:modelValue": _[3] || (_[3] = (R) => C.value = R),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      Be(E, ["enter"]),
                      Be(x, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  e("div", Dd, [
                    m(F, {
                      variant: "primary",
                      size: "sm",
                      onClick: E,
                      disabled: !C.value.trim()
                    }, {
                      default: n(() => [..._[11] || (_[11] = [
                        f(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    m(F, {
                      variant: "secondary",
                      size: "sm",
                      onClick: x
                    }, {
                      default: n(() => [..._[12] || (_[12] = [
                        f(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : u("", !0),
              g.value.length ? (o(), k(Ye, {
                key: 1,
                variant: "compact"
              }, {
                default: n(() => [
                  f(" Total: " + c(g.value.length) + " " + c(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                  w.value ? (o(), a(G, { key: 0 }, [
                    _[13] || (_[13] = f(" • Current: ", -1)),
                    e("strong", null, c(w.value.name), 1)
                  ], 64)) : u("", !0)
                ]),
                _: 1
              })) : u("", !0),
              y.value.length ? (o(), k(U, {
                key: 2,
                title: "ENVIRONMENTS",
                count: y.value.length
              }, {
                default: n(() => [
                  (o(!0), a(G, null, Q(y.value, (R) => (o(), k(Nd, {
                    key: R.name,
                    "environment-name": R.name,
                    "is-current": R.is_current,
                    "current-branch": R.current_branch,
                    "workflow-count": R.workflow_count,
                    "node-count": R.node_count,
                    "model-count": R.model_count,
                    "last-used": b(R.last_used),
                    "show-last-used": !!R.last_used
                  }, {
                    actions: n(() => [
                      R.is_current ? u("", !0) : (o(), k(F, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (V) => N.$emit("switch", R.name)
                      }, {
                        default: n(() => [..._[14] || (_[14] = [
                          f(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      m(F, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (V) => M(R.name),
                        title: "View environment details"
                      }, {
                        default: n(() => [..._[15] || (_[15] = [
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
                      !R.is_current && g.value.length > 1 ? (o(), k(F, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (V) => W(R.name),
                        title: "Delete environment"
                      }, {
                        default: n(() => [
                          (o(), a("svg", Od, [..._[16] || (_[16] = [
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
              y.value.length ? u("", !0) : (o(), k(Me, {
                key: 3,
                icon: "🌍",
                message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
              }, Mt({ _: 2 }, [
                d.value ? void 0 : {
                  name: "actions",
                  fn: n(() => [
                    m(F, {
                      variant: "primary",
                      onClick: _[4] || (_[4] = (R) => p.value = !0)
                    }, {
                      default: n(() => [..._[17] || (_[17] = [
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
        m(De, {
          show: l.value,
          title: "About Environments",
          onClose: _[6] || (_[6] = (R) => l.value = !1)
        }, {
          content: n(() => [..._[18] || (_[18] = [
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
          actions: n(() => [
            m(F, {
              variant: "secondary",
              onClick: _[5] || (_[5] = (R) => l.value = !1)
            }, {
              default: n(() => [..._[19] || (_[19] = [
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
}), Ad = /* @__PURE__ */ q(Vd, [["__scopeId", "data-v-97d6527d"]]), Wd = { class: "file-path" }, Fd = { class: "file-path-text" }, Pd = ["title"], Gd = /* @__PURE__ */ K({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, s = S(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(r.path), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, h) => (o(), a("div", Wd, [
      h[0] || (h[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Fd, c(t.path), 1),
      t.copyable ? (o(), a("button", {
        key: 0,
        class: "copy-btn",
        title: s.value ? "Copied!" : "Copy path",
        onClick: i
      }, c(s.value ? "✓" : "📋"), 9, Pd)) : u("", !0)
    ]));
  }
}), Hd = /* @__PURE__ */ q(Gd, [["__scopeId", "data-v-f0982173"]]), jd = { class: "output-path-input" }, Kd = { class: "export-actions" }, qd = {
  key: 1,
  class: "export-warning"
}, Xd = /* @__PURE__ */ K({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: r } = ke(), s = S(""), i = S(!1), g = S(null), h = S(!1);
    async function v() {
      i.value = !0, g.value = null;
      try {
        const l = await r(s.value || void 0);
        g.value = l;
      } catch (l) {
        g.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        i.value = !1;
      }
    }
    async function d() {
      var l;
      if ((l = g.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (p) {
          console.error("Failed to copy path:", p);
        }
    }
    return (l, p) => (o(), a(G, null, [
      m(we, null, {
        header: n(() => [
          m(be, { title: "EXPORT ENVIRONMENT" }, {
            actions: n(() => [
              m(F, {
                variant: "ghost",
                size: "sm",
                onClick: p[0] || (p[0] = (C) => h.value = !0),
                title: "About exporting"
              }, {
                default: n(() => [...p[5] || (p[5] = [
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
          m(ve, { title: "WHAT WILL BE EXPORTED" }, {
            default: n(() => [
              m(ge, { status: "synced" }, {
                icon: n(() => [...p[6] || (p[6] = [
                  f("📦", -1)
                ])]),
                title: n(() => [...p[7] || (p[7] = [
                  f("Environment Snapshot", -1)
                ])]),
                subtitle: n(() => [...p[8] || (p[8] = [
                  f(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: n(() => [
                  m(oe, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  m(oe, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  m(oe, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  m(oe, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(ve, { title: "EXPORT OPTIONS" }, {
            default: n(() => [
              m(ge, { status: "synced" }, {
                icon: n(() => [...p[9] || (p[9] = [
                  f("📁", -1)
                ])]),
                title: n(() => [...p[10] || (p[10] = [
                  f("Output Destination", -1)
                ])]),
                subtitle: n(() => [...p[11] || (p[11] = [
                  f(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: n(() => [
                  e("div", jd, [
                    m(st, {
                      modelValue: s.value,
                      "onUpdate:modelValue": p[1] || (p[1] = (C) => s.value = C),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          m(ve, { title: "EXPORT" }, {
            default: n(() => [
              e("div", Kd, [
                m(F, {
                  variant: "primary",
                  size: "md",
                  loading: i.value,
                  disabled: i.value,
                  onClick: v
                }, {
                  default: n(() => [
                    p[12] || (p[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    f(" " + c(i.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                s.value ? (o(), k(F, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: i.value,
                  onClick: p[2] || (p[2] = (C) => s.value = "")
                }, {
                  default: n(() => [...p[13] || (p[13] = [
                    f(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : u("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), k(ve, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: n(() => [
              m(ge, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, Mt({
                icon: n(() => [
                  f(c(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: n(() => [
                  f(c(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: n(() => [
                  f(c(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: n(() => [
                    m(oe, { label: "Saved to:" }, {
                      default: n(() => [
                        m(Hd, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), k(oe, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : u("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), a("div", qd, [...p[14] || (p[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : u("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: n(() => [
                    m(F, {
                      variant: "secondary",
                      size: "sm",
                      onClick: d
                    }, {
                      default: n(() => [...p[15] || (p[15] = [
                        f(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    m(F, {
                      variant: "ghost",
                      size: "sm",
                      onClick: p[3] || (p[3] = (C) => g.value = null)
                    }, {
                      default: n(() => [...p[16] || (p[16] = [
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
          })) : u("", !0)
        ]),
        _: 1
      }),
      m(De, {
        show: h.value,
        title: "About Environment Export",
        onClose: p[4] || (p[4] = (C) => h.value = !1)
      }, {
        content: n(() => [...p[17] || (p[17] = [
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
}), Yd = /* @__PURE__ */ q(Xd, [["__scopeId", "data-v-1777a9d5"]]), Zd = { class: "file-input-wrapper" }, Jd = ["accept", "multiple", "disabled"], Qd = /* @__PURE__ */ K({
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
    const i = s, g = S(null);
    function h() {
      var d;
      (d = g.value) == null || d.click();
    }
    function v(d) {
      const l = d.target;
      l.files && l.files.length > 0 && (i("change", l.files), l.value = "");
    }
    return r({
      triggerInput: h
    }), (d, l) => (o(), a("div", Zd, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: v
      }, null, 40, Jd),
      m(F, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: h
      }, {
        default: n(() => [
          ne(d.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            f(" " + c(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), eu = /* @__PURE__ */ q(Qd, [["__scopeId", "data-v-cd192091"]]), tu = {
  key: 0,
  class: "drop-zone-empty"
}, ou = { class: "drop-zone-text" }, su = { class: "drop-zone-primary" }, au = { class: "drop-zone-secondary" }, nu = { class: "drop-zone-actions" }, lu = {
  key: 1,
  class: "drop-zone-file"
}, iu = { class: "file-info" }, ru = { class: "file-details" }, cu = { class: "file-name" }, du = { class: "file-size" }, uu = /* @__PURE__ */ K({
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
    const s = r, i = S(!1), g = S(null), h = S(0), v = D(() => g.value !== null), d = D(() => {
      var M;
      return ((M = g.value) == null ? void 0 : M.name) || "";
    }), l = D(() => {
      if (!g.value) return "";
      const M = g.value.size;
      return M < 1024 ? `${M} B` : M < 1024 * 1024 ? `${(M / 1024).toFixed(1)} KB` : M < 1024 * 1024 * 1024 ? `${(M / (1024 * 1024)).toFixed(1)} MB` : `${(M / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function p(M) {
      var W;
      h.value++, (W = M.dataTransfer) != null && W.types.includes("Files") && (i.value = !0);
    }
    function C(M) {
      M.dataTransfer && (M.dataTransfer.dropEffect = "copy");
    }
    function w() {
      h.value--, h.value === 0 && (i.value = !1);
    }
    function y(M) {
      var Z;
      h.value = 0, i.value = !1;
      const W = (Z = M.dataTransfer) == null ? void 0 : Z.files;
      W && W.length > 0 && E(W[0]);
    }
    function b(M) {
      M.length > 0 && E(M[0]);
    }
    function E(M) {
      g.value = M, s("fileSelected", M);
    }
    function x() {
      g.value = null, s("clear");
    }
    return (M, W) => (o(), a("div", {
      class: J(["file-drop-zone", { "drop-active": i.value, "has-file": v.value }]),
      onDragenter: fe(p, ["prevent"]),
      onDragover: fe(C, ["prevent"]),
      onDragleave: fe(w, ["prevent"]),
      onDrop: fe(y, ["prevent"])
    }, [
      v.value ? (o(), a("div", lu, [
        e("div", iu, [
          W[1] || (W[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", ru, [
            e("div", cu, c(d.value), 1),
            e("div", du, c(l.value), 1)
          ])
        ]),
        m(F, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: n(() => [...W[2] || (W[2] = [
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
      ])) : (o(), a("div", tu, [
        W[0] || (W[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", ou, [
          e("p", su, c(t.primaryText), 1),
          e("p", au, c(t.secondaryText), 1)
        ]),
        e("div", nu, [
          m(eu, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: b
          }, {
            default: n(() => [
              f(c(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), mu = /* @__PURE__ */ q(uu, [["__scopeId", "data-v-e00abbca"]]), vu = { class: "import-preview" }, fu = { class: "preview-header" }, gu = {
  key: 0,
  class: "source-env"
}, hu = { class: "preview-content" }, pu = { class: "preview-section" }, yu = { class: "section-header" }, wu = { class: "section-info" }, bu = { class: "section-count" }, ku = {
  key: 0,
  class: "item-list"
}, _u = { class: "item-name" }, $u = {
  key: 0,
  class: "item-more"
}, Cu = { class: "preview-section" }, xu = { class: "section-header" }, Su = { class: "section-info" }, Iu = { class: "section-count" }, Eu = {
  key: 0,
  class: "item-list"
}, zu = { class: "item-details" }, Mu = { class: "item-name" }, Lu = { class: "item-meta" }, Ru = {
  key: 0,
  class: "item-more"
}, Nu = { class: "preview-section" }, Tu = { class: "section-header" }, Uu = { class: "section-info" }, Bu = { class: "section-count" }, Du = {
  key: 0,
  class: "item-list"
}, Ou = { class: "item-name" }, Vu = {
  key: 0,
  class: "item-more"
}, Au = {
  key: 0,
  class: "preview-section"
}, Wu = { class: "git-info" }, Fu = /* @__PURE__ */ K({
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
    const r = t, s = D(() => r.workflows.length), i = D(() => r.models.length), g = D(() => r.nodes.length);
    function h(v) {
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (v, d) => (o(), a("div", vu, [
      e("div", fu, [
        m($e, null, {
          default: n(() => [...d[0] || (d[0] = [
            f("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), a("span", gu, [
          d[1] || (d[1] = f(" From: ", -1)),
          m(pt, null, {
            default: n(() => [
              f(c(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : u("", !0)
      ]),
      e("div", hu, [
        e("div", pu, [
          e("div", yu, [
            d[3] || (d[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", wu, [
              d[2] || (d[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", bu, c(s.value) + " file" + c(s.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), a("div", ku, [
            (o(!0), a(G, null, Q(t.workflows.slice(0, t.maxPreviewItems), (l) => (o(), a("div", {
              key: l,
              class: "preview-item"
            }, [
              d[4] || (d[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", _u, c(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), a("div", $u, " +" + c(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", Cu, [
          e("div", xu, [
            d[6] || (d[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Su, [
              d[5] || (d[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Iu, c(i.value) + " file" + c(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), a("div", Eu, [
            (o(!0), a(G, null, Q(t.models.slice(0, t.maxPreviewItems), (l) => (o(), a("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              d[7] || (d[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", zu, [
                e("span", Mu, c(l.filename), 1),
                e("span", Lu, c(h(l.size)) + " • " + c(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), a("div", Ru, " +" + c(t.models.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", Nu, [
          e("div", Tu, [
            d[9] || (d[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Uu, [
              d[8] || (d[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Bu, c(g.value) + " node" + c(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), a("div", Du, [
            (o(!0), a(G, null, Q(t.nodes.slice(0, t.maxPreviewItems), (l) => (o(), a("div", {
              key: l,
              class: "preview-item"
            }, [
              d[10] || (d[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Ou, c(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), a("div", Vu, " +" + c(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), a("div", Au, [
          d[11] || (d[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Wu, [
            t.gitBranch ? (o(), k(oe, {
              key: 0,
              label: "Branch"
            }, {
              default: n(() => [
                m(pt, null, {
                  default: n(() => [
                    f(c(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : u("", !0),
            t.gitCommit ? (o(), k(oe, {
              key: 1,
              label: "Commit"
            }, {
              default: n(() => [
                m(Tt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : u("", !0)
          ])
        ])) : u("", !0)
      ])
    ]));
  }
}), Pu = /* @__PURE__ */ q(Fu, [["__scopeId", "data-v-182fe113"]]), Gu = { class: "import-options" }, Hu = { class: "options-container" }, ju = { class: "option-section" }, Ku = { class: "conflict-options" }, qu = ["value", "checked", "onChange"], Xu = { class: "conflict-content" }, Yu = { class: "conflict-label" }, Zu = { class: "conflict-description" }, Ju = { class: "option-section" }, Qu = { class: "component-toggles" }, em = /* @__PURE__ */ K({
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
    const s = r, i = [
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
    return (g, h) => (o(), a("div", Gu, [
      m($e, null, {
        default: n(() => [...h[4] || (h[4] = [
          f("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Hu, [
        e("div", ju, [
          m(ht, null, {
            default: n(() => [...h[5] || (h[5] = [
              f("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Ku, [
            (o(), a(G, null, Q(i, (v) => e("label", {
              key: v.value,
              class: J(["conflict-option", { active: t.conflictMode === v.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: v.value,
                checked: t.conflictMode === v.value,
                onChange: (d) => s("update:conflictMode", v.value)
              }, null, 40, qu),
              e("div", Xu, [
                e("span", Yu, c(v.label), 1),
                e("span", Zu, c(v.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Ju, [
          m(ht, null, {
            default: n(() => [...h[6] || (h[6] = [
              f("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Qu, [
            m(Ue, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: n(() => [
                m(He, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": h[0] || (h[0] = (v) => s("update:includeWorkflows", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(Ue, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: n(() => [
                m(He, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": h[1] || (h[1] = (v) => s("update:includeModels", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(Ue, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: n(() => [
                m(He, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": h[2] || (h[2] = (v) => s("update:includeNodes", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            m(Ue, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: n(() => [
                m(He, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": h[3] || (h[3] = (v) => s("update:includeGitHistory", v))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), tm = /* @__PURE__ */ q(em, [["__scopeId", "data-v-0ec212b0"]]), om = {
  key: 0,
  class: "import-empty"
}, sm = { class: "import-help" }, am = {
  key: 1,
  class: "import-configure"
}, nm = { class: "selected-file-bar" }, lm = { class: "file-bar-content" }, im = { class: "file-bar-info" }, rm = { class: "file-bar-name" }, cm = { class: "file-bar-size" }, dm = { class: "import-actions" }, um = {
  key: 2,
  class: "import-progress"
}, mm = { class: "progress-content" }, vm = { class: "progress-info" }, fm = { class: "progress-title" }, gm = { class: "progress-detail" }, hm = { class: "progress-bar" }, pm = { class: "progress-status" }, ym = {
  key: 3,
  class: "import-complete"
}, wm = { class: "complete-message" }, bm = { class: "complete-title" }, km = { class: "complete-details" }, _m = { class: "complete-actions" }, $m = /* @__PURE__ */ K({
  __name: "ImportSection",
  setup(t) {
    const r = S(null), s = S(!1), i = S(!1), g = S(!1), h = S(""), v = S({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), d = S({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), l = S({
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
    }), p = D(() => v.value.includeWorkflows || v.value.includeModels || v.value.includeNodes || v.value.includeGitHistory);
    function C(x) {
      r.value = x;
    }
    function w() {
      r.value = null, i.value = !1, g.value = !1, h.value = "";
    }
    function y() {
      w(), s.value = !1, d.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function b() {
      if (r.value) {
        s.value = !0, i.value = !1;
        try {
          const x = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${l.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${l.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${l.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const M of x)
            d.value = M, await new Promise((W) => setTimeout(W, 800));
          d.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((M) => setTimeout(M, 500)), g.value = !0, h.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (x) {
          g.value = !1, h.value = x instanceof Error ? x.message : "Unknown error occurred during import";
        } finally {
          s.value = !1, i.value = !0;
        }
      }
    }
    function E(x) {
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (x, M) => (o(), k(we, null, {
      header: n(() => [
        m(be, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: n(() => [
        !r.value && !s.value ? (o(), a("div", om, [
          m(mu, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: C
          }),
          e("div", sm, [
            m($e, null, {
              default: n(() => [...M[5] || (M[5] = [
                f("How to Import", -1)
              ])]),
              _: 1
            }),
            M[6] || (M[6] = e("div", { class: "help-content" }, [
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
        ])) : r.value && !s.value && !i.value ? (o(), a("div", am, [
          e("div", nm, [
            e("div", lm, [
              M[7] || (M[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", im, [
                e("div", rm, c(r.value.name), 1),
                e("div", cm, c(E(r.value.size)), 1)
              ])
            ]),
            m(F, {
              variant: "ghost",
              size: "sm",
              onClick: w
            }, {
              default: n(() => [...M[8] || (M[8] = [
                f(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          m(Pu, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          m(tm, {
            "conflict-mode": v.value.conflictMode,
            "onUpdate:conflictMode": M[0] || (M[0] = (W) => v.value.conflictMode = W),
            "include-workflows": v.value.includeWorkflows,
            "onUpdate:includeWorkflows": M[1] || (M[1] = (W) => v.value.includeWorkflows = W),
            "include-models": v.value.includeModels,
            "onUpdate:includeModels": M[2] || (M[2] = (W) => v.value.includeModels = W),
            "include-nodes": v.value.includeNodes,
            "onUpdate:includeNodes": M[3] || (M[3] = (W) => v.value.includeNodes = W),
            "include-git-history": v.value.includeGitHistory,
            "onUpdate:includeGitHistory": M[4] || (M[4] = (W) => v.value.includeGitHistory = W)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !v.value.includeModels && l.value.models.length > 0 ? (o(), k(Ge, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : u("", !0),
          e("div", dm, [
            m(F, {
              variant: "primary",
              size: "md",
              disabled: !p.value,
              onClick: b
            }, {
              default: n(() => [...M[9] || (M[9] = [
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
            m(F, {
              variant: "secondary",
              size: "md",
              onClick: w
            }, {
              default: n(() => [...M[10] || (M[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : s.value ? (o(), a("div", um, [
          e("div", mm, [
            M[11] || (M[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", vm, [
              e("div", fm, c(d.value.message), 1),
              e("div", gm, c(d.value.detail), 1)
            ])
          ]),
          e("div", hm, [
            e("div", {
              class: "progress-bar-fill",
              style: at({ width: `${d.value.percent}%` })
            }, null, 4)
          ]),
          e("div", pm, c(d.value.percent) + "% complete ", 1)
        ])) : i.value ? (o(), a("div", ym, [
          e("div", {
            class: J(["complete-icon", g.value ? "success" : "error"])
          }, c(g.value ? "✓" : "✕"), 3),
          e("div", wm, [
            e("div", bm, c(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", km, c(h.value), 1)
          ]),
          e("div", _m, [
            m(F, {
              variant: "primary",
              size: "md",
              onClick: y
            }, {
              default: n(() => [...M[12] || (M[12] = [
                f(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : u("", !0)
      ]),
      _: 1
    }));
  }
}), Cm = /* @__PURE__ */ q($m, [["__scopeId", "data-v-18e18eb5"]]), xm = { class: "header-info" }, Sm = { class: "commit-hash" }, Im = {
  key: 0,
  class: "commit-refs"
}, Em = { class: "commit-message" }, zm = { class: "commit-date" }, Mm = {
  key: 0,
  class: "loading"
}, Lm = {
  key: 1,
  class: "changes-section"
}, Rm = { class: "stats-row" }, Nm = { class: "stat" }, Tm = { class: "stat insertions" }, Um = { class: "stat deletions" }, Bm = {
  key: 0,
  class: "change-group"
}, Dm = {
  key: 1,
  class: "change-group"
}, Om = {
  key: 0,
  class: "version"
}, Vm = {
  key: 2,
  class: "change-group"
}, Am = { class: "change-item" }, Wm = /* @__PURE__ */ K({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: s } = ke(), i = S(null), g = S(!0), h = D(() => {
      if (!i.value) return !1;
      const d = i.value.changes.workflows;
      return d.added.length > 0 || d.modified.length > 0 || d.deleted.length > 0;
    }), v = D(() => {
      if (!i.value) return !1;
      const d = i.value.changes.nodes;
      return d.added.length > 0 || d.removed.length > 0;
    });
    return he(async () => {
      try {
        i.value = await s(r.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (d, l) => (o(), k(mt, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (p) => d.$emit("close"))
    }, {
      header: n(() => {
        var p, C, w, y;
        return [
          e("div", xm, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Sm, c(((p = i.value) == null ? void 0 : p.short_hash) || t.commit.short_hash || ((C = t.commit.hash) == null ? void 0 : C.slice(0, 7))), 1),
            (y = (w = i.value) == null ? void 0 : w.refs) != null && y.length ? (o(), a("span", Im, [
              (o(!0), a(G, null, Q(i.value.refs, (b) => (o(), a("span", {
                key: b,
                class: "ref-badge"
              }, c(b), 1))), 128))
            ])) : u("", !0)
          ]),
          m(ae, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (b) => d.$emit("close"))
          }, {
            default: n(() => [...l[5] || (l[5] = [
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
        var p, C;
        return [
          e("div", Em, c(((p = i.value) == null ? void 0 : p.message) || t.commit.message), 1),
          e("div", zm, c(((C = i.value) == null ? void 0 : C.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), a("div", Mm, "Loading details...")) : i.value ? (o(), a("div", Lm, [
            e("div", Rm, [
              e("span", Nm, c(i.value.stats.files_changed) + " files", 1),
              e("span", Tm, "+" + c(i.value.stats.insertions), 1),
              e("span", Um, "-" + c(i.value.stats.deletions), 1)
            ]),
            h.value ? (o(), a("div", Bm, [
              m(et, { variant: "section" }, {
                default: n(() => [...l[6] || (l[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), a(G, null, Q(i.value.changes.workflows.added, (w) => (o(), a("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, c(w), 1)
              ]))), 128)),
              (o(!0), a(G, null, Q(i.value.changes.workflows.modified, (w) => (o(), a("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, c(w), 1)
              ]))), 128)),
              (o(!0), a(G, null, Q(i.value.changes.workflows.deleted, (w) => (o(), a("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, c(w), 1)
              ]))), 128))
            ])) : u("", !0),
            v.value ? (o(), a("div", Dm, [
              m(et, { variant: "section" }, {
                default: n(() => [...l[10] || (l[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), a(G, null, Q(i.value.changes.nodes.added, (w) => (o(), a("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, c(w.name), 1),
                w.version ? (o(), a("span", Om, "(" + c(w.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), a(G, null, Q(i.value.changes.nodes.removed, (w) => (o(), a("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, c(w.name), 1)
              ]))), 128))
            ])) : u("", !0),
            i.value.changes.models.resolved > 0 ? (o(), a("div", Vm, [
              m(et, { variant: "section" }, {
                default: n(() => [...l[13] || (l[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Am, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, c(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: n(() => [
        m(ae, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (p) => d.$emit("createBranch", t.commit))
        }, {
          default: n(() => [...l[15] || (l[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        m(ae, {
          variant: "primary",
          onClick: l[2] || (l[2] = (p) => d.$emit("checkout", t.commit))
        }, {
          default: n(() => [...l[16] || (l[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Fm = /* @__PURE__ */ q(Wm, [["__scopeId", "data-v-d256ff6d"]]), Pm = { class: "dialog-message" }, Gm = {
  key: 0,
  class: "dialog-details"
}, Hm = {
  key: 1,
  class: "dialog-warning"
}, jm = /* @__PURE__ */ K({
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
    return (r, s) => (o(), k(mt, {
      title: t.title,
      size: "sm",
      onClose: s[3] || (s[3] = (i) => r.$emit("cancel"))
    }, {
      body: n(() => [
        e("p", Pm, c(t.message), 1),
        t.details && t.details.length ? (o(), a("div", Gm, [
          (o(!0), a(G, null, Q(t.details, (i, g) => (o(), a("div", {
            key: g,
            class: "detail-item"
          }, " • " + c(i), 1))), 128))
        ])) : u("", !0),
        t.warning ? (o(), a("p", Hm, [
          s[4] || (s[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + c(t.warning), 1)
        ])) : u("", !0)
      ]),
      footer: n(() => [
        m(ae, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (i) => r.$emit("cancel"))
        }, {
          default: n(() => [
            f(c(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), k(ae, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (i) => r.$emit("secondary"))
        }, {
          default: n(() => [
            f(c(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        m(ae, {
          variant: t.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (i) => r.$emit("confirm"))
        }, {
          default: n(() => [
            f(c(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Km = /* @__PURE__ */ q(jm, [["__scopeId", "data-v-3670b9f5"]]), qm = { class: "base-textarea-wrapper" }, Xm = ["value", "rows", "placeholder", "disabled", "maxlength"], Ym = {
  key: 0,
  class: "base-textarea-count"
}, Zm = /* @__PURE__ */ K({
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
    return (r, s) => (o(), a("div", qm, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (i) => r.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          s[1] || (s[1] = Be(fe((i) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Be(fe((i) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Xm),
      t.showCharCount && t.maxLength ? (o(), a("div", Ym, c(t.modelValue.length) + " / " + c(t.maxLength), 1)) : u("", !0)
    ]));
  }
}), It = /* @__PURE__ */ q(Zm, [["__scopeId", "data-v-5516e6fc"]]), Jm = ["checked", "disabled"], Qm = { class: "base-checkbox-box" }, ev = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, tv = {
  key: 0,
  class: "base-checkbox-label"
}, ov = /* @__PURE__ */ K({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, s) => (o(), a("label", {
      class: J(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: s[0] || (s[0] = (i) => r.$emit("update:modelValue", i.target.checked))
      }, null, 40, Jm),
      e("span", Qm, [
        t.modelValue ? (o(), a("svg", ev, [...s[1] || (s[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : u("", !0)
      ]),
      r.$slots.default ? (o(), a("span", tv, [
        ne(r.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ q(ov, [["__scopeId", "data-v-bf17c831"]]), sv = { class: "popover-header" }, av = { class: "popover-body" }, nv = {
  key: 0,
  class: "changes-summary"
}, lv = {
  key: 0,
  class: "change-item"
}, iv = {
  key: 1,
  class: "change-item"
}, rv = {
  key: 2,
  class: "change-item"
}, cv = {
  key: 3,
  class: "change-item"
}, dv = {
  key: 4,
  class: "change-item"
}, uv = {
  key: 1,
  class: "no-changes"
}, mv = {
  key: 2,
  class: "loading"
}, vv = {
  key: 3,
  class: "issues-warning"
}, fv = { class: "warning-header" }, gv = { class: "warning-title" }, hv = { class: "issues-list" }, pv = { class: "message-section" }, yv = { class: "popover-footer" }, wv = {
  key: 1,
  class: "commit-popover"
}, bv = { class: "popover-header" }, kv = { class: "popover-body" }, _v = {
  key: 0,
  class: "changes-summary"
}, $v = {
  key: 0,
  class: "change-item"
}, Cv = {
  key: 1,
  class: "change-item"
}, xv = {
  key: 2,
  class: "change-item"
}, Sv = {
  key: 3,
  class: "change-item"
}, Iv = {
  key: 4,
  class: "change-item"
}, Ev = {
  key: 1,
  class: "no-changes"
}, zv = {
  key: 2,
  class: "loading"
}, Mv = {
  key: 3,
  class: "issues-warning"
}, Lv = { class: "warning-header" }, Rv = { class: "warning-title" }, Nv = { class: "issues-list" }, Tv = { class: "message-section" }, Uv = { class: "popover-footer" }, Bv = /* @__PURE__ */ K({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const s = t, i = r, { commit: g } = ke(), h = S(""), v = S(!1), d = S(!1), l = S(null), p = D(() => {
      if (!s.status) return !1;
      const E = s.status.workflows;
      return E.new.length > 0 || E.modified.length > 0 || E.deleted.length > 0 || s.status.has_changes;
    }), C = D(() => {
      var E;
      return (E = s.status) != null && E.workflows.analyzed ? s.status.workflows.analyzed.filter(
        (x) => x.has_issues && (x.sync_state === "new" || x.sync_state === "modified")
      ) : [];
    }), w = D(() => C.value.length > 0), y = D(() => w.value && !d.value);
    async function b() {
      var E, x, M;
      if (!(w.value && !d.value) && !(!p.value || !h.value.trim() || v.value)) {
        v.value = !0, l.value = null;
        try {
          const W = await g(h.value.trim(), d.value);
          W.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((E = W.summary) == null ? void 0 : E.new) || 0} new, ${((x = W.summary) == null ? void 0 : x.modified) || 0} modified, ${((M = W.summary) == null ? void 0 : M.deleted) || 0} deleted`
          }, h.value = "", d.value = !1, setTimeout(() => i("committed"), 1e3)) : W.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : W.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: W.message || "Commit failed" };
        } catch (W) {
          l.value = { type: "error", message: W instanceof Error ? W.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (E, x) => t.asModal ? (o(), k(ze, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (M) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", sv, [
            x[11] || (x[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (M) => i("close"))
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
          e("div", av, [
            t.status && p.value ? (o(), a("div", nv, [
              t.status.workflows.new.length ? (o(), a("div", lv, [
                x[12] || (x[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, c(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : u("", !0),
              t.status.workflows.modified.length ? (o(), a("div", iv, [
                x[13] || (x[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, c(t.status.workflows.modified.length) + " modified", 1)
              ])) : u("", !0),
              t.status.workflows.deleted.length ? (o(), a("div", rv, [
                x[14] || (x[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, c(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_added.length ? (o(), a("div", cv, [
                x[15] || (x[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, c(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), a("div", dv, [
                x[16] || (x[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, c(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : u("", !0)
            ])) : t.status ? (o(), a("div", uv, " No changes to commit ")) : (o(), a("div", mv, " Loading... ")),
            w.value ? (o(), a("div", vv, [
              e("div", fv, [
                x[17] || (x[17] = e("span", { class: "warning-icon" }, "⚠️", -1)),
                e("span", gv, c(C.value.length) + " workflow(s) with unresolved issues", 1)
              ]),
              e("div", hv, [
                (o(!0), a(G, null, Q(C.value, (M) => (o(), a("div", {
                  key: M.name,
                  class: "issue-item"
                }, [
                  e("strong", null, c(M.name), 1),
                  f(": " + c(M.issue_summary), 1)
                ]))), 128))
              ]),
              m(Et, {
                modelValue: d.value,
                "onUpdate:modelValue": x[1] || (x[1] = (M) => d.value = M),
                class: "allow-issues-toggle"
              }, {
                default: n(() => [...x[18] || (x[18] = [
                  f(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : u("", !0),
            e("div", pv, [
              m(It, {
                modelValue: h.value,
                "onUpdate:modelValue": x[2] || (x[2] = (M) => h.value = M),
                placeholder: y.value ? "Enable 'Allow issues' to commit" : p.value ? "Describe your changes..." : "No changes",
                disabled: !p.value || v.value || y.value,
                rows: 3,
                onCtrlEnter: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (o(), a("div", {
              key: 4,
              class: J(["result", l.value.type])
            }, c(l.value.message), 3)) : u("", !0)
          ]),
          e("div", yv, [
            m(ae, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (M) => i("close"))
            }, {
              default: n(() => [...x[19] || (x[19] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(ae, {
              variant: d.value ? "danger" : "primary",
              disabled: !p.value || !h.value.trim() || v.value || y.value,
              loading: v.value,
              onClick: b
            }, {
              default: n(() => [
                f(c(v.value ? "Committing..." : d.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), a("div", wv, [
      e("div", bv, [
        x[21] || (x[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (M) => i("close"))
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
      e("div", kv, [
        t.status && p.value ? (o(), a("div", _v, [
          t.status.workflows.new.length ? (o(), a("div", $v, [
            x[22] || (x[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, c(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          t.status.workflows.modified.length ? (o(), a("div", Cv, [
            x[23] || (x[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, c(t.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          t.status.workflows.deleted.length ? (o(), a("div", xv, [
            x[24] || (x[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, c(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_added.length ? (o(), a("div", Sv, [
            x[25] || (x[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, c(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), a("div", Iv, [
            x[26] || (x[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, c(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : t.status ? (o(), a("div", Ev, " No changes to commit ")) : (o(), a("div", zv, " Loading... ")),
        w.value ? (o(), a("div", Mv, [
          e("div", Lv, [
            x[27] || (x[27] = e("span", { class: "warning-icon" }, "⚠️", -1)),
            e("span", Rv, c(C.value.length) + " workflow(s) with unresolved issues", 1)
          ]),
          e("div", Nv, [
            (o(!0), a(G, null, Q(C.value, (M) => (o(), a("div", {
              key: M.name,
              class: "issue-item"
            }, [
              e("strong", null, c(M.name), 1),
              f(": " + c(M.issue_summary), 1)
            ]))), 128))
          ]),
          m(Et, {
            modelValue: d.value,
            "onUpdate:modelValue": x[7] || (x[7] = (M) => d.value = M),
            class: "allow-issues-toggle"
          }, {
            default: n(() => [...x[28] || (x[28] = [
              f(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : u("", !0),
        e("div", Tv, [
          m(It, {
            modelValue: h.value,
            "onUpdate:modelValue": x[8] || (x[8] = (M) => h.value = M),
            placeholder: y.value ? "Enable 'Allow issues' to commit" : p.value ? "Describe your changes..." : "No changes",
            disabled: !p.value || v.value || y.value,
            rows: 3,
            onCtrlEnter: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (o(), a("div", {
          key: 4,
          class: J(["result", l.value.type])
        }, c(l.value.message), 3)) : u("", !0)
      ]),
      e("div", Uv, [
        m(ae, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (M) => i("close"))
        }, {
          default: n(() => [...x[29] || (x[29] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m(ae, {
          variant: d.value ? "danger" : "primary",
          disabled: !p.value || !h.value.trim() || v.value || y.value,
          loading: v.value,
          onClick: b
        }, {
          default: n(() => [
            f(c(v.value ? "Committing..." : d.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Dt = /* @__PURE__ */ q(Bv, [["__scopeId", "data-v-38b45183"]]), Dv = { class: "modal-header" }, Ov = { class: "modal-body" }, Vv = { class: "switch-message" }, Av = { class: "switch-details" }, Wv = { class: "modal-actions" }, Fv = /* @__PURE__ */ K({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, s) => (o(), k(ze, { to: "body" }, [
      t.show ? (o(), a("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Dv, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", Ov, [
            e("p", Vv, [
              s[6] || (s[6] = f(" Switch from ", -1)),
              e("strong", null, c(t.fromEnvironment), 1),
              s[7] || (s[7] = f(" to ", -1)),
              e("strong", null, c(t.toEnvironment), 1),
              s[8] || (s[8] = f("? ", -1))
            ]),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Av, ' Your current work will be preserved. You can switch back to "' + c(t.fromEnvironment) + '" anytime. ', 1),
            s[10] || (s[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Wv, [
            m(F, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => r.$emit("close"))
            }, {
              default: n(() => [...s[11] || (s[11] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(F, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => r.$emit("confirm"))
            }, {
              default: n(() => [...s[12] || (s[12] = [
                f(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Pv = /* @__PURE__ */ q(Fv, [["__scopeId", "data-v-e9c5253e"]]), Gv = { class: "progress-bar" }, Hv = /* @__PURE__ */ K({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, s = D(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (i, g) => (o(), a("div", Gv, [
      e("div", {
        class: J(["progress-fill", t.variant]),
        style: at({ width: s.value })
      }, null, 6)
    ]));
  }
}), jv = /* @__PURE__ */ q(Hv, [["__scopeId", "data-v-1beb0512"]]), Kv = {
  key: 0,
  class: "modal-overlay"
}, qv = { class: "modal-content" }, Xv = { class: "modal-body" }, Yv = { class: "progress-info" }, Zv = { class: "progress-percentage" }, Jv = { class: "progress-state" }, Qv = { class: "switch-steps" }, ef = { class: "step-icon" }, tf = { class: "step-label" }, of = /* @__PURE__ */ K({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, s = D(() => {
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
      return r.message || h[r.state] || r.state;
    }), i = D(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), g = D(() => {
      const h = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], v = h.findIndex((d) => d.state === r.state);
      return h.map((d, l) => {
        let p = "pending", C = "○";
        return l < v ? (p = "completed", C = "✓") : l === v && (p = "active", C = "⟳"), {
          ...d,
          status: p,
          icon: C
        };
      });
    });
    return (h, v) => (o(), k(ze, { to: "body" }, [
      t.show ? (o(), a("div", Kv, [
        e("div", qv, [
          v[1] || (v[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Xv, [
            m(jv, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", Yv, [
              e("div", Zv, c(t.progress) + "%", 1),
              e("div", Jv, c(s.value), 1)
            ]),
            e("div", Qv, [
              (o(!0), a(G, null, Q(g.value, (d) => (o(), a("div", {
                key: d.state,
                class: J(["switch-step", d.status])
              }, [
                e("span", ef, c(d.icon), 1),
                e("span", tf, c(d.label), 1)
              ], 2))), 128))
            ]),
            v[0] || (v[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), sf = /* @__PURE__ */ q(of, [["__scopeId", "data-v-768a5078"]]), af = { class: "modal-header" }, nf = { class: "modal-body" }, lf = {
  key: 0,
  class: "node-section"
}, rf = { class: "node-list" }, cf = {
  key: 1,
  class: "node-section"
}, df = { class: "node-list" }, uf = { class: "modal-actions" }, mf = /* @__PURE__ */ K({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, s) => (o(), k(ze, { to: "body" }, [
      t.show ? (o(), a("div", {
        key: 0,
        class: "modal-overlay",
        onClick: s[4] || (s[4] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: s[3] || (s[3] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", af, [
            s[5] || (s[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: s[0] || (s[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", nf, [
            s[8] || (s[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), a("div", lf, [
              s[6] || (s[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", rf, [
                (o(!0), a(G, null, Q(t.mismatchDetails.missing_nodes, (i) => (o(), a("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + c(i), 1))), 128))
              ])
            ])) : u("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), a("div", cf, [
              s[7] || (s[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", df, [
                (o(!0), a(G, null, Q(t.mismatchDetails.extra_nodes, (i) => (o(), a("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + c(i), 1))), 128))
              ])
            ])) : u("", !0),
            s[9] || (s[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", uf, [
            m(F, {
              variant: "secondary",
              onClick: s[1] || (s[1] = (i) => r.$emit("close"))
            }, {
              default: n(() => [...s[10] || (s[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            m(F, {
              variant: "primary",
              onClick: s[2] || (s[2] = (i) => r.$emit("confirm"))
            }, {
              default: n(() => [...s[11] || (s[11] = [
                f(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), vf = /* @__PURE__ */ q(mf, [["__scopeId", "data-v-7cad7518"]]);
async function Je(t, r = {}, s = 5e3) {
  const i = new AbortController(), g = setTimeout(() => i.abort(), s);
  try {
    const h = await fetch(t, {
      ...r,
      signal: i.signal
    });
    return clearTimeout(g), h;
  } catch (h) {
    throw clearTimeout(g), h.name === "AbortError" ? new Error(`Request timeout after ${s}ms`) : h;
  }
}
function ff() {
  const t = S(null);
  async function r() {
    try {
      const v = await Je(
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
      const v = await Je(
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
  async function i() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const v = await Je(
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
  async function g() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await Je(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function h() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await Je(
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
    getStatus: i,
    restart: g,
    kill: h
  };
}
const gf = { class: "comfygit-panel" }, hf = { class: "panel-header" }, pf = { class: "header-left" }, yf = {
  key: 0,
  class: "header-info"
}, wf = { class: "header-actions" }, bf = { class: "env-switcher" }, kf = {
  key: 0,
  class: "header-info"
}, _f = { class: "branch-name" }, $f = { class: "panel-main" }, Cf = { class: "sidebar" }, xf = { class: "sidebar-section" }, Sf = { class: "sidebar-section" }, If = { class: "sidebar-section" }, Ef = { class: "content-area" }, zf = {
  key: 0,
  class: "error-message"
}, Mf = {
  key: 1,
  class: "loading"
}, Lf = { class: "dialog-content env-selector-dialog" }, Rf = { class: "dialog-header" }, Nf = { class: "dialog-body" }, Tf = { class: "env-list" }, Uf = { class: "env-info" }, Bf = { class: "env-name-row" }, Df = { class: "env-indicator" }, Of = { class: "env-name" }, Vf = {
  key: 0,
  class: "env-branch"
}, Af = {
  key: 1,
  class: "current-label"
}, Wf = { class: "env-stats" }, Ff = ["onClick"], Pf = { class: "toast-container" }, Gf = { class: "toast-icon" }, Hf = { class: "toast-message" }, jf = /* @__PURE__ */ K({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const s = r, {
      getStatus: i,
      getHistory: g,
      getBranches: h,
      checkout: v,
      createBranch: d,
      switchBranch: l,
      getEnvironments: p,
      switchEnvironment: C,
      getSwitchProgress: w,
      syncEnvironmentManually: y
    } = ke(), b = ff(), E = S(null), x = S([]), M = S([]), W = S([]), Z = D(() => W.value.find((A) => A.is_current)), N = S(!1), _ = S(null), U = S(null), R = S(!1), V = S(!1), z = S(!1), T = S(""), B = S({ state: "idle", progress: 0, message: "" });
    let H = null, O = null;
    const L = S("status"), X = S("this-env");
    function j(A, I) {
      L.value = A, X.value = I;
    }
    function pe(A) {
      const le = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[A];
      le && j(le.view, le.section);
    }
    function xe() {
      j("branches", "this-env");
    }
    const de = S(null), ue = S(!1), ee = S(!1), Le = S([]);
    let Ze = 0;
    function ce(A, I = "info", le = 3e3) {
      const me = ++Ze;
      return Le.value.push({ id: me, message: A, type: I }), le > 0 && setTimeout(() => {
        Le.value = Le.value.filter((Se) => Se.id !== me);
      }, le), me;
    }
    function Ce(A) {
      Le.value = Le.value.filter((I) => I.id !== A);
    }
    function Y(A) {
      switch (A) {
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
    const $ = D(() => {
      if (!E.value) return "neutral";
      const A = E.value.workflows, I = A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? I ? "warning" : "success" : "error";
    });
    D(() => E.value ? $.value === "success" ? "All synced" : $.value === "warning" ? "Uncommitted changes" : $.value === "error" ? "Not synced" : "" : "");
    async function P() {
      N.value = !0, _.value = null;
      try {
        const [A, I, le, me] = await Promise.all([
          i(),
          g(),
          h(),
          p()
        ]);
        E.value = A, x.value = I.commits, M.value = le.branches, W.value = me, s("statusUpdate", A);
      } catch (A) {
        _.value = A instanceof Error ? A.message : "Failed to load status", E.value = null, x.value = [], M.value = [];
      } finally {
        N.value = !1;
      }
    }
    function te(A) {
      U.value = A;
    }
    async function ye(A) {
      var le;
      U.value = null;
      const I = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      de.value = {
        title: I ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: I ? "You have uncommitted changes that will be lost." : `Checkout commit ${A.short_hash || ((le = A.hash) == null ? void 0 : le.slice(0, 7))}?`,
        details: I ? $t() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: I,
        onConfirm: async () => {
          var Ie;
          de.value = null, je();
          const me = ce(`Checking out ${A.short_hash || ((Ie = A.hash) == null ? void 0 : Ie.slice(0, 7))}...`, "info", 0), Se = await v(A.hash, I);
          Ce(me), Se.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(Se.message || "Checkout failed", "error");
        }
      };
    }
    async function Re(A) {
      const I = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      de.value = {
        title: I ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: I ? "You have uncommitted changes." : `Switch to branch "${A}"?`,
        details: I ? $t() : void 0,
        warning: I ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          de.value = null, je();
          const le = ce(`Switching to ${A}...`, "info", 0), me = await l(A, I);
          Ce(le), me.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(me.message || "Branch switch failed", "error");
        }
      };
    }
    async function We(A) {
      const I = ce(`Creating branch ${A}...`, "info", 0), le = await d(A);
      Ce(I), le.status === "success" ? (ce(`Branch "${A}" created`, "success"), await P()) : ce(le.message || "Failed to create branch", "error");
    }
    async function nt(A) {
      U.value = null;
      const I = prompt("Enter branch name:");
      if (I) {
        const le = ce(`Creating branch ${I}...`, "info", 0), me = await d(I, A.hash);
        Ce(le), me.status === "success" ? (ce(`Branch "${I}" created from ${A.short_hash}`, "success"), await P()) : ce(me.message || "Failed to create branch", "error");
      }
    }
    function je() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function _t(A) {
      R.value = !1, T.value = A, V.value = !0;
    }
    async function Ft() {
      V.value = !1, z.value = !0, je(), B.value = {
        progress: 10,
        state: lt(10),
        message: it(10)
      };
      try {
        await C(T.value), Pt(), Gt();
      } catch (A) {
        Fe(), z.value = !1, ce(`Failed to initiate switch: ${A instanceof Error ? A.message : "Unknown error"}`, "error"), B.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function lt(A) {
      return A >= 100 ? "complete" : A >= 80 ? "validating" : A >= 60 ? "starting" : A >= 30 ? "syncing" : "preparing";
    }
    function it(A) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[lt(A)] || "";
    }
    function Pt() {
      if (O) return;
      let A = 10;
      const I = 60, le = 5e3, me = 100, Se = (I - A) / (le / me);
      O = window.setInterval(() => {
        if (A += Se, A >= I && (A = I, Fe()), B.value.progress < I) {
          const Ie = Math.floor(A);
          B.value = {
            progress: Ie,
            state: lt(Ie),
            message: it(Ie)
          };
        }
      }, me);
    }
    function Fe() {
      O && (clearInterval(O), O = null);
    }
    function Gt() {
      H || (H = window.setInterval(async () => {
        try {
          let A = await b.getStatus();
          if ((!A || A.state === "idle") && (A = await w()), !A)
            return;
          const I = A.progress || 0;
          I >= 60 && Fe();
          const le = Math.max(I, B.value.progress), me = A.state && A.state !== "idle" && A.state !== "unknown", Se = me ? A.state : lt(le), Ie = me && A.message || it(le);
          B.value = {
            state: Se,
            progress: le,
            message: Ie
          }, A.state === "complete" ? (Fe(), vt(), z.value = !1, ce(`✓ Switched to ${T.value}`, "success"), await P(), T.value = "") : A.state === "rolled_back" ? (Fe(), vt(), z.value = !1, ce("Switch failed, restored previous environment", "warning"), T.value = "") : A.state === "critical_failure" && (Fe(), vt(), z.value = !1, ce(`Critical error during switch: ${A.message}`, "error"), T.value = "");
        } catch (A) {
          console.error("Failed to poll switch progress:", A);
        }
      }, 1e3));
    }
    function vt() {
      Fe(), H && (clearInterval(H), H = null);
    }
    function Ht() {
      V.value = !1, T.value = "";
    }
    async function jt() {
      ue.value = !1, await P(), ce("✓ Changes committed", "success");
    }
    async function Kt() {
      ee.value = !1;
      const A = ce("Syncing environment...", "info", 0);
      try {
        const I = await y("skip", !0);
        if (Ce(A), I.status === "success") {
          const le = [];
          I.nodes_installed.length && le.push(`${I.nodes_installed.length} installed`), I.nodes_removed.length && le.push(`${I.nodes_removed.length} removed`);
          const me = le.length ? `: ${le.join(", ")}` : "";
          ce(`✓ Environment synced${me}`, "success"), await P();
        } else {
          const le = I.errors.length ? I.errors.join("; ") : I.message;
          ce(`Sync failed: ${le}`, "error");
        }
      } catch (I) {
        Ce(A), ce(`Sync error: ${I instanceof Error ? I.message : "Unknown error"}`, "error");
      }
    }
    async function qt(A) {
      const I = ce(`Creating environment "${A}"...`, "info", 0);
      Ce(I), ce("Environment creation not yet implemented", "warning");
    }
    async function Xt(A) {
      const I = ce(`Deleting environment "${A}"...`, "info", 0);
      Ce(I), ce("Environment deletion not yet implemented", "warning");
    }
    function Yt(A) {
      ce(`Viewing details for "${A}"`, "info"), j("models-env", "this-env");
    }
    function $t() {
      if (!E.value) return [];
      const A = [], I = E.value.workflows;
      return I.new.length && A.push(`${I.new.length} new workflow(s)`), I.modified.length && A.push(`${I.modified.length} modified workflow(s)`), I.deleted.length && A.push(`${I.deleted.length} deleted workflow(s)`), A;
    }
    return he(P), (A, I) => {
      var le, me, Se, Ie;
      return o(), a("div", gf, [
        e("div", hf, [
          e("div", pf, [
            I[27] || (I[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (o(), a("div", yf)) : u("", !0)
          ]),
          e("div", wf, [
            e("button", {
              class: J(["icon-btn", { spinning: N.value }]),
              onClick: P,
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
              onClick: I[0] || (I[0] = (se) => s("close")),
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
        e("div", bf, [
          I[31] || (I[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: I[1] || (I[1] = (se) => j("environments", "all-envs"))
          }, [
            E.value ? (o(), a("div", kf, [
              e("span", null, c(((le = Z.value) == null ? void 0 : le.name) || ((me = E.value) == null ? void 0 : me.environment) || "Loading..."), 1),
              e("span", _f, "(" + c(E.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            I[30] || (I[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", $f, [
          e("div", Cf, [
            e("div", xf, [
              I[32] || (I[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "status" && X.value === "this-env" }]),
                onClick: I[2] || (I[2] = (se) => j("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "workflows" }]),
                onClick: I[3] || (I[3] = (se) => j("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "models-env" }]),
                onClick: I[4] || (I[4] = (se) => j("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "branches" }]),
                onClick: I[5] || (I[5] = (se) => j("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "history" }]),
                onClick: I[6] || (I[6] = (se) => j("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "nodes" }]),
                onClick: I[7] || (I[7] = (se) => j("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "debug-env" }]),
                onClick: I[8] || (I[8] = (se) => j("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            I[35] || (I[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Sf, [
              I[33] || (I[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "environments" }]),
                onClick: I[9] || (I[9] = (se) => j("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "model-index" }]),
                onClick: I[10] || (I[10] = (se) => j("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "settings" }]),
                onClick: I[11] || (I[11] = (se) => j("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "debug-workspace" }]),
                onClick: I[12] || (I[12] = (se) => j("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            I[36] || (I[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", If, [
              I[34] || (I[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "export" }]),
                onClick: I[13] || (I[13] = (se) => j("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "import" }]),
                onClick: I[14] || (I[14] = (se) => j("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: J(["sidebar-item", { active: L.value === "remotes" }]),
                onClick: I[15] || (I[15] = (se) => j("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Ef, [
            _.value ? (o(), a("div", zf, c(_.value), 1)) : !E.value && L.value === "status" ? (o(), a("div", Mf, " Loading status... ")) : (o(), a(G, { key: 2 }, [
              L.value === "status" ? (o(), k(La, {
                key: 0,
                status: E.value,
                onSwitchBranch: xe,
                onCommitChanges: I[16] || (I[16] = (se) => ue.value = !0),
                onSyncEnvironment: I[17] || (I[17] = (se) => ee.value = !0),
                onViewWorkflows: I[18] || (I[18] = (se) => j("workflows", "this-env")),
                onViewHistory: I[19] || (I[19] = (se) => j("history", "this-env")),
                onViewDebug: I[20] || (I[20] = (se) => j("debug-env", "this-env"))
              }, null, 8, ["status"])) : L.value === "workflows" ? (o(), k(wc, {
                key: 1,
                onRefresh: P
              })) : L.value === "models-env" ? (o(), k(_c, {
                key: 2,
                onNavigate: pe
              })) : L.value === "branches" ? (o(), k(ja, {
                key: 3,
                branches: M.value,
                current: ((Se = E.value) == null ? void 0 : Se.branch) || null,
                onSwitch: Re,
                onCreate: We
              }, null, 8, ["branches", "current"])) : L.value === "history" ? (o(), k(sn, {
                key: 4,
                commits: x.value,
                onSelect: te,
                onCheckout: ye
              }, null, 8, ["commits"])) : L.value === "nodes" ? (o(), k(zc, { key: 5 })) : L.value === "debug-env" ? (o(), k(Ed, { key: 6 })) : L.value === "environments" ? (o(), k(Ad, {
                key: 7,
                onSwitch: _t,
                onCreate: qt,
                onDelete: Xt,
                onViewDetails: Yt
              })) : L.value === "model-index" ? (o(), k(Cc, { key: 8 })) : L.value === "settings" ? (o(), k(Cd, { key: 9 })) : L.value === "debug-workspace" ? (o(), k(Sd, { key: 10 })) : L.value === "export" ? (o(), k(Yd, { key: 11 })) : L.value === "import" ? (o(), k(Cm, { key: 12 })) : L.value === "remotes" ? (o(), k(nd, { key: 13 })) : u("", !0)
            ], 64))
          ])
        ]),
        U.value ? (o(), k(Fm, {
          key: 0,
          commit: U.value,
          onClose: I[21] || (I[21] = (se) => U.value = null),
          onCheckout: ye,
          onCreateBranch: nt
        }, null, 8, ["commit"])) : u("", !0),
        de.value ? (o(), k(Km, {
          key: 1,
          title: de.value.title,
          message: de.value.message,
          details: de.value.details,
          warning: de.value.warning,
          confirmLabel: de.value.confirmLabel,
          cancelLabel: de.value.cancelLabel,
          secondaryLabel: de.value.secondaryLabel,
          secondaryAction: de.value.secondaryAction,
          destructive: de.value.destructive,
          onConfirm: de.value.onConfirm,
          onCancel: I[22] || (I[22] = (se) => de.value = null),
          onSecondary: de.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        m(Pv, {
          show: V.value,
          "from-environment": ((Ie = Z.value) == null ? void 0 : Ie.name) || "unknown",
          "to-environment": T.value,
          onConfirm: Ft,
          onClose: Ht
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ue.value && E.value ? (o(), k(Dt, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: I[23] || (I[23] = (se) => ue.value = !1),
          onCommitted: jt
        }, null, 8, ["status"])) : u("", !0),
        ee.value && E.value ? (o(), k(vf, {
          key: 3,
          show: ee.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: Kt,
          onClose: I[24] || (I[24] = (se) => ee.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : u("", !0),
        m(sf, {
          show: z.value,
          state: B.value.state,
          progress: B.value.progress,
          message: B.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        R.value ? (o(), a("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: I[26] || (I[26] = fe((se) => R.value = !1, ["self"]))
        }, [
          e("div", Lf, [
            e("div", Rf, [
              I[38] || (I[38] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: I[25] || (I[25] = (se) => R.value = !1)
              }, [...I[37] || (I[37] = [
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
            e("div", Nf, [
              I[39] || (I[39] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Tf, [
                (o(!0), a(G, null, Q(W.value, (se) => (o(), a("div", {
                  key: se.name,
                  class: J(["env-item", { current: se.is_current }])
                }, [
                  e("div", Uf, [
                    e("div", Bf, [
                      e("span", Df, c(se.is_current ? "●" : "○"), 1),
                      e("span", Of, c(se.name), 1),
                      se.current_branch ? (o(), a("span", Vf, "(" + c(se.current_branch) + ")", 1)) : u("", !0),
                      se.is_current ? (o(), a("span", Af, "CURRENT")) : u("", !0)
                    ]),
                    e("div", Wf, c(se.workflow_count) + " workflows • " + c(se.node_count) + " nodes ", 1)
                  ]),
                  se.is_current ? u("", !0) : (o(), a("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ag) => _t(se.name)
                  }, " SWITCH ", 8, Ff))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        e("div", Pf, [
          m(eo, { name: "toast" }, {
            default: n(() => [
              (o(!0), a(G, null, Q(Le.value, (se) => (o(), a("div", {
                key: se.id,
                class: J(["toast", se.type])
              }, [
                e("span", Gf, c(Y(se.type)), 1),
                e("span", Hf, c(se.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Kf = /* @__PURE__ */ q(jf, [["__scopeId", "data-v-d9e68767"]]), qf = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Xf = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Yf = {
  comfy: qf,
  phosphor: Xf
}, bt = "comfy", Ot = "comfygit-theme";
let Pe = null, Vt = bt;
function Zf() {
  try {
    const t = localStorage.getItem(Ot);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return bt;
}
function At(t = bt) {
  Pe && Pe.remove(), Pe = document.createElement("style"), Pe.id = "comfygit-theme-styles", Pe.setAttribute("data-theme", t), Pe.textContent = Yf[t], document.head.appendChild(Pe), document.body.setAttribute("data-comfygit-theme", t), Vt = t;
  try {
    localStorage.setItem(Ot, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Jf() {
  return Vt;
}
function Qf(t) {
  At(t);
}
const kt = document.createElement("link");
kt.rel = "stylesheet";
kt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(kt);
const eg = Zf();
At(eg);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Qf(t);
  },
  getTheme: () => {
    const t = Jf();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ee = null, _e = null, tt = null;
const qe = S(null);
async function ut() {
  var t;
  if (!((t = Ke) != null && t.api)) return null;
  try {
    const r = await Ke.api.fetchApi("/v2/comfygit/status");
    r.ok && (qe.value = await r.json());
  } catch {
  }
}
function tg() {
  if (!qe.value) return !1;
  const t = qe.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || qe.value.has_changes;
}
function og() {
  Ee && Ee.remove(), Ee = document.createElement("div"), Ee.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ee.appendChild(t), Ee.addEventListener("click", (i) => {
    i.target === Ee && gt();
  });
  const r = (i) => {
    i.key === "Escape" && (gt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Lt({
    render: () => Rt(Kf, {
      onClose: gt,
      onStatusUpdate: (i) => {
        qe.value = i, ot();
      }
    })
  }).mount(t), document.body.appendChild(Ee);
}
function gt() {
  Ee && (Ee.remove(), Ee = null);
}
function sg(t) {
  Qe(), _e = document.createElement("div"), _e.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  _e.style.position = "fixed", _e.style.top = `${r.bottom + 8}px`, _e.style.right = `${window.innerWidth - r.right}px`, _e.style.zIndex = "10001";
  const s = (g) => {
    _e && !_e.contains(g.target) && g.target !== t && (Qe(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const i = (g) => {
    g.key === "Escape" && (Qe(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), tt = Lt({
    render: () => Rt(Dt, {
      status: qe.value,
      onClose: Qe,
      onCommitted: () => {
        Qe(), ut().then(ot);
      }
    })
  }), tt.mount(_e), document.body.appendChild(_e);
}
function Qe() {
  tt && (tt.unmount(), tt = null), _e && (_e.remove(), _e = null);
}
let Te = null;
function ot() {
  if (!Te) return;
  const t = Te.querySelector(".commit-indicator");
  t && (t.style.display = tg() ? "block" : "none");
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
Ke.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var i, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = og, Te = document.createElement("button"), Te.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Te.innerHTML = 'Commit <span class="commit-indicator"></span>', Te.title = "Quick Commit", Te.onclick = () => sg(Te), t.appendChild(r), t.appendChild(Te), (g = (i = Ke.menu) == null ? void 0 : i.settingsGroup) != null && g.element && (Ke.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ut(), ot(), setInterval(async () => {
      await ut(), ot();
    }, 3e4);
    const s = Ke.api;
    if (s) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((l) => {
          (l.startsWith("workflow:") || l.startsWith("Comfy.OpenWorkflowsPaths:") || l.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(l);
        }), window.location.reload();
      }, v = function() {
        const l = document.createElement("div");
        l.style.cssText = `
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
        const p = document.createElement("span");
        p.textContent = "Workflows updated - refresh required", l.appendChild(p);
        const C = document.createElement("button");
        C.textContent = "Refresh", C.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, C.onmouseover = () => C.style.background = "var(--comfy-input-bg)", C.onmouseout = () => C.style.background = "var(--comfy-menu-bg)", C.onclick = () => h(), l.appendChild(C);
        const w = document.createElement("button");
        w.textContent = "×", w.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, w.onmouseover = () => w.style.opacity = "1", w.onmouseout = () => w.style.opacity = "0.6", w.onclick = () => l.remove(), l.appendChild(w), document.body.appendChild(l), console.log("[ComfyGit] Refresh notification displayed");
      };
      s.addEventListener("comfygit:workflow-changed", async (l) => {
        const { change_type: p, workflow_name: C } = l.detail;
        console.log(`[ComfyGit] Workflow ${p}: ${C}`), await ut(), ot();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let d = !1;
      s.addEventListener("status", async (l) => {
        const p = l.detail != null;
        p && !d && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : v()), d = p;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
