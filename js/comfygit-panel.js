import { app as Ce } from "../../scripts/app.js";
import { defineComponent as J, computed as T, createElementBlock as s, openBlock as t, createElementVNode as e, createCommentVNode as m, toDisplayString as a, ref as k, nextTick as Pe, withDirectives as ke, withKeys as we, vModelText as xe, Fragment as U, renderList as P, normalizeClass as V, withModifiers as me, onMounted as ie, onUnmounted as He, createBlock as Z, Teleport as Ge, renderSlot as ve, resolveDynamicComponent as Ke, withCtx as N, createVNode as Y, createTextVNode as W, TransitionGroup as je, createApp as Oe, h as De } from "vue";
const Fe = { class: "status-section" }, qe = { class: "status-grid" }, Ye = { class: "status-column" }, Ze = {
  key: 0,
  class: "status-item"
}, Xe = { class: "count new" }, Je = {
  key: 1,
  class: "status-item"
}, Qe = { class: "count modified" }, et = {
  key: 2,
  class: "status-item"
}, tt = { class: "count deleted" }, ot = { class: "status-item synced-item" }, st = { class: "count synced" }, at = { class: "status-column" }, nt = {
  key: 0,
  class: "status-item"
}, lt = { class: "count new" }, rt = {
  key: 1,
  class: "status-item"
}, it = { class: "count deleted" }, ct = {
  key: 2,
  class: "status-item"
}, dt = {
  key: 3,
  class: "status-item ok"
}, ut = {
  key: 0,
  class: "warning-box"
}, mt = {
  key: 1,
  class: "warning-box error"
}, gt = /* @__PURE__ */ J({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(o) {
    const h = o, i = T(() => {
      const b = h.status.git_changes;
      return b.nodes_added.length > 0 || b.nodes_removed.length > 0 || b.workflow_changes || b.has_other_changes;
    }), r = T(() => {
      const b = h.status.git_changes, c = h.status.workflows;
      return (b.workflow_changes || b.has_other_changes) && c.new.length === 0 && c.modified.length === 0 && c.deleted.length === 0;
    });
    return (b, c) => (t(), s("div", Fe, [
      c[18] || (c[18] = e("h3", { class: "view-title" }, "STATUS", -1)),
      e("div", qe, [
        e("div", Ye, [
          c[8] || (c[8] = e("h4", { class: "column-title" }, "Workflows", -1)),
          o.status.workflows.new.length ? (t(), s("div", Ze, [
            c[0] || (c[0] = e("span", { class: "icon" }, "●", -1)),
            e("span", Xe, a(o.status.workflows.new.length), 1),
            c[1] || (c[1] = e("span", { class: "label" }, "new", -1))
          ])) : m("", !0),
          o.status.workflows.modified.length ? (t(), s("div", Je, [
            c[2] || (c[2] = e("span", { class: "icon" }, "●", -1)),
            e("span", Qe, a(o.status.workflows.modified.length), 1),
            c[3] || (c[3] = e("span", { class: "label" }, "modified", -1))
          ])) : m("", !0),
          o.status.workflows.deleted.length ? (t(), s("div", et, [
            c[4] || (c[4] = e("span", { class: "icon" }, "●", -1)),
            e("span", tt, a(o.status.workflows.deleted.length), 1),
            c[5] || (c[5] = e("span", { class: "label" }, "deleted", -1))
          ])) : m("", !0),
          e("div", ot, [
            c[6] || (c[6] = e("span", { class: "icon synced" }, "✓", -1)),
            e("span", st, a(o.status.workflows.synced.length), 1),
            c[7] || (c[7] = e("span", { class: "label" }, "synced", -1))
          ])
        ]),
        e("div", at, [
          c[15] || (c[15] = e("h4", { class: "column-title" }, "Git Changes", -1)),
          o.status.git_changes.nodes_added.length ? (t(), s("div", nt, [
            c[9] || (c[9] = e("span", { class: "icon" }, "●", -1)),
            e("span", lt, a(o.status.git_changes.nodes_added.length), 1),
            c[10] || (c[10] = e("span", { class: "label" }, "node added", -1))
          ])) : m("", !0),
          o.status.git_changes.nodes_removed.length ? (t(), s("div", rt, [
            c[11] || (c[11] = e("span", { class: "icon" }, "●", -1)),
            e("span", it, a(o.status.git_changes.nodes_removed.length), 1),
            c[12] || (c[12] = e("span", { class: "label" }, "node removed", -1))
          ])) : m("", !0),
          r.value ? (t(), s("div", ct, [...c[13] || (c[13] = [
            e("span", { class: "icon" }, "●", -1),
            e("span", { class: "count modified" }, "●", -1),
            e("span", { class: "label" }, "other changes", -1)
          ])])) : m("", !0),
          i.value ? m("", !0) : (t(), s("div", dt, [...c[14] || (c[14] = [
            e("span", { class: "icon" }, "✓", -1),
            e("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      o.status.missing_models_count > 0 ? (t(), s("div", ut, [
        c[16] || (c[16] = e("span", { class: "warning-icon" }, "⚠", -1)),
        e("span", null, a(o.status.missing_models_count) + " missing model(s)", 1)
      ])) : m("", !0),
      o.status.comparison.is_synced ? m("", !0) : (t(), s("div", mt, [...c[17] || (c[17] = [
        e("span", { class: "warning-icon" }, "⚠", -1),
        e("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), Q = (o, h) => {
  const i = o.__vccOpts || o;
  for (const [r, b] of h)
    i[r] = b;
  return i;
}, ht = /* @__PURE__ */ Q(gt, [["__scopeId", "data-v-ff523fe5"]]), vt = { class: "branch-section" }, ft = { class: "section-header" }, pt = {
  key: 0,
  class: "create-branch-row"
}, yt = ["disabled"], bt = {
  key: 1,
  class: "empty"
}, wt = {
  key: 2,
  class: "branch-list"
}, _t = { class: "branch-indicator" }, kt = { class: "branch-name" }, xt = ["onClick"], $t = {
  key: 1,
  class: "current-label"
}, Ct = /* @__PURE__ */ J({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(o, { emit: h }) {
    const i = h, r = k(!1), b = k(""), c = k(null);
    function g() {
      b.value.trim() && (i("create", b.value.trim()), w());
    }
    function w() {
      r.value = !1, b.value = "";
    }
    return Pe(() => {
      r.value && c.value && c.value.focus();
    }), (v, S) => (t(), s("div", vt, [
      e("div", ft, [
        S[3] || (S[3] = e("h3", { class: "view-title" }, "BRANCHES", -1)),
        e("button", {
          class: "add-btn",
          onClick: S[0] || (S[0] = (C) => r.value = !0),
          title: "New Branch"
        }, [...S[2] || (S[2] = [
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
        ])])
      ]),
      r.value ? (t(), s("div", pt, [
        ke(e("input", {
          ref_key: "createInput",
          ref: c,
          "onUpdate:modelValue": S[1] || (S[1] = (C) => b.value = C),
          class: "branch-input",
          placeholder: "Branch name...",
          onKeyup: [
            we(g, ["enter"]),
            we(w, ["escape"])
          ]
        }, null, 544), [
          [xe, b.value]
        ]),
        e("button", {
          class: "action-btn create",
          onClick: g,
          disabled: !b.value.trim()
        }, " Create ", 8, yt),
        e("button", {
          class: "action-btn cancel",
          onClick: w
        }, " Cancel ")
      ])) : m("", !0),
      o.branches.length === 0 ? (t(), s("div", bt, " No branches found ")) : (t(), s("div", wt, [
        (t(!0), s(U, null, P(o.branches, (C) => (t(), s("div", {
          key: C.name,
          class: V(["branch-item", { current: C.is_current }])
        }, [
          e("span", _t, a(C.is_current ? "●" : "○"), 1),
          e("span", kt, a(C.name), 1),
          C.is_current ? (t(), s("span", $t, "current")) : (t(), s("button", {
            key: 0,
            class: "switch-btn",
            onClick: (u) => v.$emit("switch", C.name)
          }, " Switch ", 8, xt))
        ], 2))), 128))
      ]))
    ]));
  }
}), St = /* @__PURE__ */ Q(Ct, [["__scopeId", "data-v-e2bd816d"]]), Et = { class: "history-section" }, Lt = {
  key: 0,
  class: "empty"
}, Mt = {
  key: 1,
  class: "commit-list"
}, zt = ["onClick"], It = { class: "commit-hash" }, Ot = { class: "commit-message" }, Dt = { class: "commit-date" }, Tt = ["onClick"], Nt = /* @__PURE__ */ J({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(o) {
    return (h, i) => (t(), s("div", Et, [
      i[2] || (i[2] = e("h3", { class: "view-title" }, "HISTORY", -1)),
      o.commits.length === 0 ? (t(), s("div", Lt, " No commits yet ")) : (t(), s("div", Mt, [
        (t(!0), s(U, null, P(o.commits, (r) => {
          var b;
          return t(), s("div", {
            key: r.hash,
            class: "commit-item",
            onClick: (c) => h.$emit("select", r)
          }, [
            e("span", It, a(r.short_hash || ((b = r.hash) == null ? void 0 : b.slice(0, 7))), 1),
            e("span", Ot, a(r.message), 1),
            e("span", Dt, a(r.date_relative || r.relative_date), 1),
            e("div", {
              class: "commit-actions",
              onClick: i[0] || (i[0] = me(() => {
              }, ["stop"]))
            }, [
              e("button", {
                class: "action-btn",
                onClick: (c) => h.$emit("checkout", r),
                title: "Checkout this commit"
              }, [...i[1] || (i[1] = [
                e("svg", {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                ], -1)
              ])], 8, Tt)
            ])
          ], 8, zt);
        }), 128))
      ]))
    ]));
  }
}), Bt = /* @__PURE__ */ Q(Nt, [["__scopeId", "data-v-97388106"]]), Ie = [
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
  ...Array(12).fill(null).map((o, h) => ({
    name: `synced-workflow-${h + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + h,
    model_count: 1 + h % 3,
    sync_state: "synced"
  }))
], Rt = {
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
}, Te = [
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
], Wt = [
  ...Te,
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
], Ut = [
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
], be = [
  {
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: "info",
    message: "Environment synced successfully",
    context: { duration_ms: 2340 }
  },
  {
    timestamp: new Date(Date.now() - 6e4).toISOString(),
    level: "warning",
    message: "Model not found in index: flux_vae.safetensors",
    context: { workflow: "flux-dev-img2img.json" }
  },
  {
    timestamp: new Date(Date.now() - 12e4).toISOString(),
    level: "error",
    message: "Failed to install node: rgthree-comfy",
    context: { error: "Connection timeout" }
  },
  {
    timestamp: new Date(Date.now() - 18e4).toISOString(),
    level: "debug",
    message: "Resolving workflow dependencies",
    context: { workflow: "sdxl-lightning.json", node_count: 8 }
  }
], F = {
  // Environment Management
  getEnvironments: async () => (await q(300), [
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
  switchEnvironment: async (o) => {
    await q(500), console.log(`[MOCK] Switching to environment: ${o}`);
  },
  createEnvironment: async (o, h, i) => {
    await q(1e3), console.log(`[MOCK] Creating environment: ${o} with backend ${h}`, i ? `cloned from ${i}` : "");
  },
  deleteEnvironment: async (o) => {
    await q(500), console.log(`[MOCK] Deleting environment: ${o}`);
  },
  // Workflow Management
  getWorkflows: async () => (await q(400), Ie),
  getWorkflowDetails: async (o) => (await q(300), Rt[o] || {
    name: o,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (o) => (await q(800), {
    workflow_name: o,
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
        workflow: o,
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
        workflow: o,
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
        workflow: o,
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
  installWorkflowDeps: async (o, h, i) => {
    await q(2e3), console.log(`[MOCK] Installing deps for ${o}: nodes=${h}, models=${i}`);
  },
  setModelImportance: async (o, h, i) => {
    await q(200), console.log(`[MOCK] Setting ${h} importance to ${i} in ${o}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await q(350), Te),
  getWorkspaceModels: async () => (await q(400), Wt),
  updateModelSource: async (o, h) => {
    await q(300), console.log(`[MOCK] Updating source for ${o}: ${h}`);
  },
  deleteModel: async (o) => {
    await q(500), console.log(`[MOCK] Deleting model: ${o}`);
  },
  downloadModel: async (o) => {
    await q(3e3), console.log("[MOCK] Downloading model:", o);
  },
  // Settings & Debug
  getConfig: async () => (await q(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (o) => {
    await q(300), console.log("[MOCK] Updating config:", o);
  },
  getEnvironmentLogs: async (o, h) => (await q(250), (o ? be.filter((r) => r.level === o) : be).slice(0, h || 100)),
  getWorkspaceLogs: async (o, h) => {
    await q(300);
    const i = [...be, ...be.map((b) => ({
      ...b,
      context: { ...b.context, environment: "testing" }
    }))];
    return (o ? i.filter((b) => b.level === o) : i).slice(0, h || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await q(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: Ie.filter((o) => o.status === "synced").map((o) => o.name),
      total: 18
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
  getCommitHistory: async (o = 10) => (await q(300), Ut.slice(0, o)),
  getBranches: async () => (await q(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  })
};
function q(o) {
  return new Promise((h) => setTimeout(h, o));
}
function ce() {
  const o = k(!1), h = k(null);
  async function i($, G) {
    var pe;
    if (!((pe = window.app) != null && pe.api))
      throw new Error("ComfyUI API not available");
    const te = await window.app.api.fetchApi($, G);
    if (!te.ok) {
      const ye = await te.json().catch(() => ({}));
      throw new Error(ye.error || ye.message || `Request failed: ${te.status}`);
    }
    return te.json();
  }
  async function r() {
    return F.getStatus();
  }
  async function b($, G = !1) {
    return i("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: $, allow_issues: G })
    });
  }
  async function c($ = 10, G = 0) {
    {
      const te = await F.getCommitHistory($);
      return {
        commits: te,
        total: te.length,
        offset: G
      };
    }
  }
  async function g($) {
    return i("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: $ })
    });
  }
  async function w() {
    return F.getBranches();
  }
  async function v($) {
    return i(`/v2/comfygit/commit/${$}`);
  }
  async function S($, G = !1) {
    return i("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: $, force: G })
    });
  }
  async function C($, G = "HEAD") {
    return i("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: $, start_point: G })
    });
  }
  async function u($, G = !1) {
    return i("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: $, force: G })
    });
  }
  async function O() {
    return F.getEnvironments();
  }
  async function B($) {
    return F.switchEnvironment($);
  }
  async function X() {
    return null;
  }
  async function A($, G, te) {
    return await F.createEnvironment($, G, te), { status: "success" };
  }
  async function E($) {
    return await F.deleteEnvironment($), { status: "success" };
  }
  async function z() {
    return F.getWorkflows();
  }
  async function H($) {
    return F.getWorkflowDetails($);
  }
  async function K($) {
    return F.resolveWorkflow($);
  }
  async function L($, G, te) {
    return await F.installWorkflowDeps($, G, te), { status: "success" };
  }
  async function M($, G, te) {
    return F.setModelImportance($, G, te);
  }
  async function _() {
    return F.getEnvironmentModels();
  }
  async function I() {
    return F.getWorkspaceModels();
  }
  async function R($, G) {
    return F.updateModelSource($, G);
  }
  async function y($) {
    return F.deleteModel($);
  }
  async function f($) {
    return await F.downloadModel($), { status: "success" };
  }
  async function n() {
    return F.getConfig();
  }
  async function d($) {
    return F.updateConfig($);
  }
  async function p($, G) {
    return F.getEnvironmentLogs($, G);
  }
  async function ee($, G) {
    return F.getWorkspaceLogs($, G);
  }
  return {
    isLoading: o,
    error: h,
    getStatus: r,
    commit: b,
    getHistory: c,
    exportEnv: g,
    // Git Operations
    getBranches: w,
    getCommitDetail: v,
    checkout: S,
    createBranch: C,
    switchBranch: u,
    // Environment Management
    getEnvironments: O,
    switchEnvironment: B,
    getSwitchProgress: X,
    createEnvironment: A,
    deleteEnvironment: E,
    // Workflow Management
    getWorkflows: z,
    getWorkflowDetails: H,
    resolveWorkflow: K,
    installWorkflowDeps: L,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: _,
    getWorkspaceModels: I,
    updateModelSource: R,
    deleteModel: y,
    downloadModel: f,
    // Settings
    getConfig: n,
    updateConfig: d,
    // Debug/Logs
    getEnvironmentLogs: p,
    getWorkspaceLogs: ee
  };
}
const At = { class: "base-modal-header" }, Vt = {
  key: 0,
  class: "base-modal-title"
}, Pt = { class: "base-modal-body" }, Ht = {
  key: 0,
  class: "base-modal-loading"
}, Gt = {
  key: 1,
  class: "base-modal-error"
}, Kt = {
  key: 0,
  class: "base-modal-footer"
}, jt = /* @__PURE__ */ J({
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
  setup(o, { emit: h }) {
    const i = o, r = h;
    function b() {
      i.closeOnOverlayClick && r("close");
    }
    function c(g) {
      g.key === "Escape" && r("close");
    }
    return ie(() => {
      document.addEventListener("keydown", c), document.body.style.overflow = "hidden";
    }), He(() => {
      document.removeEventListener("keydown", c), document.body.style.overflow = "";
    }), (g, w) => (t(), Z(Ge, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: b
      }, [
        e("div", {
          class: V(["base-modal-content", o.size]),
          onClick: w[1] || (w[1] = me(() => {
          }, ["stop"]))
        }, [
          e("div", At, [
            ve(g.$slots, "header", {}, () => [
              o.title ? (t(), s("h3", Vt, a(o.title), 1)) : m("", !0)
            ], !0),
            o.showCloseButton ? (t(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: w[0] || (w[0] = (v) => g.$emit("close"))
            }, [...w[2] || (w[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : m("", !0)
          ]),
          e("div", Pt, [
            o.loading ? (t(), s("div", Ht, "Loading...")) : o.error ? (t(), s("div", Gt, a(o.error), 1)) : ve(g.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          g.$slots.footer ? (t(), s("div", Kt, [
            ve(g.$slots, "footer", {}, void 0, !0)
          ])) : m("", !0)
        ], 2)
      ])
    ]));
  }
}), $e = /* @__PURE__ */ Q(jt, [["__scopeId", "data-v-700d367b"]]), Ft = ["type", "disabled"], qt = {
  key: 0,
  class: "spinner"
}, Yt = /* @__PURE__ */ J({
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
  setup(o) {
    return (h, i) => (t(), s("button", {
      type: o.type,
      disabled: o.disabled || o.loading,
      class: V(["base-btn", o.variant, o.size, { "full-width": o.fullWidth, loading: o.loading }]),
      onClick: i[0] || (i[0] = (r) => h.$emit("click", r))
    }, [
      o.loading ? (t(), s("span", qt)) : m("", !0),
      ve(h.$slots, "default", {}, void 0, !0)
    ], 10, Ft));
  }
}), se = /* @__PURE__ */ Q(Yt, [["__scopeId", "data-v-f3452606"]]), Zt = {
  key: 0,
  class: "base-title-count"
}, Xt = /* @__PURE__ */ J({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(o) {
    return (h, i) => (t(), Z(Ke(`h${o.level}`), {
      class: V(["base-title", o.variant])
    }, {
      default: N(() => [
        ve(h.$slots, "default", {}, void 0, !0),
        o.count !== void 0 ? (t(), s("span", Zt, "(" + a(o.count) + ")", 1)) : m("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), re = /* @__PURE__ */ Q(Xt, [["__scopeId", "data-v-5a01561d"]]), Jt = ["value", "disabled"], Qt = {
  key: 0,
  value: "",
  disabled: ""
}, eo = ["value"], to = {
  key: 0,
  class: "base-select-error"
}, oo = /* @__PURE__ */ J({
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
  setup(o) {
    function h(r) {
      return typeof r == "string" ? r : r.value;
    }
    function i(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, b) => (t(), s("div", {
      class: V(["base-select-wrapper", { "full-width": o.fullWidth, error: !!o.error }])
    }, [
      e("select", {
        value: o.modelValue,
        disabled: o.disabled,
        class: V(["base-select", { error: !!o.error }]),
        onChange: b[0] || (b[0] = (c) => r.$emit("update:modelValue", c.target.value))
      }, [
        o.placeholder ? (t(), s("option", Qt, a(o.placeholder), 1)) : m("", !0),
        (t(!0), s(U, null, P(o.options, (c) => (t(), s("option", {
          key: h(c),
          value: h(c)
        }, a(i(c)), 9, eo))), 128))
      ], 42, Jt),
      o.error ? (t(), s("span", to, a(o.error), 1)) : m("", !0)
    ], 2));
  }
}), so = /* @__PURE__ */ Q(oo, [["__scopeId", "data-v-7436d745"]]), ao = { class: "detail-section" }, no = {
  key: 0,
  class: "empty-message"
}, lo = { class: "model-header" }, ro = { class: "model-name" }, io = { class: "model-details" }, co = { class: "model-row" }, uo = { class: "model-row" }, mo = {
  key: 0,
  class: "model-row"
}, go = { class: "value" }, ho = {
  key: 1,
  class: "model-row"
}, vo = { class: "value" }, fo = {
  key: 0,
  class: "model-actions"
}, po = { class: "detail-section" }, yo = {
  key: 0,
  class: "empty-message"
}, bo = { class: "node-name" }, wo = {
  key: 0,
  class: "node-version"
}, _o = /* @__PURE__ */ J({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(o, { emit: h }) {
    const i = o, r = h, { getWorkflowDetails: b, setModelImportance: c } = ce(), g = k(null), w = k(!1), v = k(null), S = k(!1), C = k({}), u = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function O() {
      w.value = !0, v.value = null;
      try {
        g.value = await b(i.workflowName);
      } catch (A) {
        v.value = A instanceof Error ? A.message : "Failed to load workflow details";
      } finally {
        w.value = !1;
      }
    }
    function B(A, E) {
      C.value[A] = E, S.value = !0;
    }
    async function X() {
      if (!S.value) {
        r("close");
        return;
      }
      w.value = !0, v.value = null;
      try {
        for (const [A, E] of Object.entries(C.value))
          await c(i.workflowName, A, E);
        r("close");
      } catch (A) {
        v.value = A instanceof Error ? A.message : "Failed to save changes";
      } finally {
        w.value = !1;
      }
    }
    return ie(O), (A, E) => (t(), Z($e, {
      title: `WORKFLOW DETAILS: ${o.workflowName}`,
      size: "lg",
      loading: w.value,
      error: v.value || void 0,
      onClose: E[2] || (E[2] = (z) => r("close"))
    }, {
      body: N(() => [
        g.value ? (t(), s(U, { key: 0 }, [
          e("section", ao, [
            Y(re, { variant: "section" }, {
              default: N(() => [
                W("MODELS USED (" + a(g.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            g.value.models.length === 0 ? (t(), s("div", no, " No models used in this workflow ")) : m("", !0),
            (t(!0), s(U, null, P(g.value.models, (z) => (t(), s("div", {
              key: z.hash,
              class: "model-card"
            }, [
              e("div", lo, [
                E[3] || (E[3] = e("span", { class: "model-icon" }, "📦", -1)),
                e("span", ro, a(z.filename), 1)
              ]),
              e("div", io, [
                e("div", co, [
                  E[4] || (E[4] = e("span", { class: "label" }, "Status:", -1)),
                  e("span", {
                    class: V(["value", z.status === "available" ? "success" : "error"])
                  }, a(z.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                e("div", uo, [
                  E[5] || (E[5] = e("span", { class: "label" }, "Importance:", -1)),
                  Y(so, {
                    "model-value": C.value[z.hash] || z.importance,
                    options: u,
                    "onUpdate:modelValue": (H) => B(z.hash, H)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                z.node_type ? (t(), s("div", mo, [
                  E[6] || (E[6] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", go, a(z.node_type) + " (Node " + a(z.node_id) + ")", 1)
                ])) : m("", !0),
                z.size_mb ? (t(), s("div", ho, [
                  E[7] || (E[7] = e("span", { class: "label" }, "Size:", -1)),
                  e("span", vo, a(z.size_mb) + " MB", 1)
                ])) : m("", !0)
              ]),
              z.status === "missing" ? (t(), s("div", fo, [
                Y(se, {
                  variant: "secondary",
                  size: "sm",
                  onClick: E[0] || (E[0] = (H) => r("resolve"))
                }, {
                  default: N(() => [...E[8] || (E[8] = [
                    W(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : m("", !0)
            ]))), 128))
          ]),
          E[9] || (E[9] = e("div", { class: "info-box" }, [
            e("div", { class: "info-title" }, "Importance options:"),
            e("ul", { class: "info-list" }, [
              e("li", null, [
                e("strong", null, "Required"),
                W(" — Must have for workflow to run")
              ]),
              e("li", null, [
                e("strong", null, "Flexible"),
                W(" — Workflow adapts if missing")
              ]),
              e("li", null, [
                e("strong", null, "Optional"),
                W(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          e("section", po, [
            Y(re, { variant: "section" }, {
              default: N(() => [
                W("NODES USED (" + a(g.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            g.value.nodes.length === 0 ? (t(), s("div", yo, " No custom nodes used in this workflow ")) : m("", !0),
            (t(!0), s(U, null, P(g.value.nodes, (z) => (t(), s("div", {
              key: z.name,
              class: "node-item"
            }, [
              e("span", {
                class: V(["node-status", z.installed ? "installed" : "missing"])
              }, a(z.installed ? "✓" : "✕"), 3),
              e("span", bo, a(z.name), 1),
              z.version ? (t(), s("span", wo, "v" + a(z.version), 1)) : m("", !0)
            ]))), 128))
          ])
        ], 64)) : m("", !0)
      ]),
      footer: N(() => [
        Y(se, {
          variant: "secondary",
          onClick: E[1] || (E[1] = (z) => r("close"))
        }, {
          default: N(() => [...E[10] || (E[10] = [
            W(" Close ", -1)
          ])]),
          _: 1
        }),
        S.value ? (t(), Z(se, {
          key: 0,
          variant: "primary",
          onClick: X
        }, {
          default: N(() => [...E[11] || (E[11] = [
            W(" Save Changes ", -1)
          ])]),
          _: 1
        })) : m("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), ko = /* @__PURE__ */ Q(_o, [["__scopeId", "data-v-6ce9a41c"]]), xo = {
  key: 0,
  class: "resolve-section"
}, $o = { class: "resolve-card success-card" }, Co = { class: "items-list" }, So = { class: "item-info" }, Eo = { class: "item-name" }, Lo = {
  key: 0,
  class: "item-meta"
}, Mo = { class: "match-type" }, zo = { class: "source" }, Io = {
  key: 1,
  class: "resolve-section"
}, Oo = { class: "resolve-card warning-card" }, Do = { class: "items-list" }, To = { class: "item-info" }, No = { class: "item-name" }, Bo = { class: "item-meta" }, Ro = { key: 0 }, Wo = { key: 1 }, Uo = {
  key: 0,
  class: "item-warning"
}, Ao = {
  key: 0,
  class: "item-action"
}, Vo = ["onClick"], Po = {
  key: 2,
  class: "resolve-section"
}, Ho = { class: "info-text" }, Go = { class: "actions-summary" }, Ko = { class: "summary-list" }, jo = { key: 0 }, Fo = { key: 1 }, qo = { key: 2 }, Yo = {
  key: 0,
  class: "estimated-size"
}, Zo = /* @__PURE__ */ J({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(o, { emit: h }) {
    const i = o, r = h, { resolveWorkflow: b, installWorkflowDeps: c } = ce(), g = k(null), w = k(!1), v = k(!1), S = k(null), C = T(() => {
      var M;
      return g.value ? ((M = g.value.download_results) == null ? void 0 : M.every((_) => _.can_download)) ?? !1 : !1;
    });
    async function u() {
      w.value = !0, S.value = null;
      try {
        g.value = await b(i.workflowName);
      } catch (M) {
        S.value = M instanceof Error ? M.message : "Failed to analyze workflow";
      } finally {
        w.value = !1;
      }
    }
    function O(M) {
      return !M.possible_matches || M.possible_matches.length === 0 ? null : M.possible_matches.reduce(
        (_, I) => I.match_confidence > _.match_confidence ? I : _
      );
    }
    function B(M) {
      return M >= 0.9 ? "high" : M >= 0.7 ? "medium" : "low";
    }
    function X(M) {
      const _ = O(M);
      return _ ? _.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function A(M) {
      var _, I;
      return (I = (_ = g.value) == null ? void 0 : _.download_results) == null ? void 0 : I.find((R) => R.model === M);
    }
    function E(M) {
      const _ = A(M);
      return (_ == null ? void 0 : _.can_download) ?? !1;
    }
    function z(M) {
      const _ = A(M);
      return (_ == null ? void 0 : _.source_url) || null;
    }
    function H(M) {
      window.open(M, "_blank");
    }
    async function K() {
      if (!(!g.value || v.value)) {
        v.value = !0, S.value = null;
        try {
          await c(
            i.workflowName,
            g.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (M) {
          S.value = M instanceof Error ? M.message : "Installation failed";
        } finally {
          v.value = !1;
        }
      }
    }
    async function L() {
      if (!(!g.value || v.value)) {
        v.value = !0, S.value = null;
        try {
          await c(
            i.workflowName,
            g.value.nodes_to_install,
            g.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (M) {
          S.value = M instanceof Error ? M.message : "Installation failed";
        } finally {
          v.value = !1;
        }
      }
    }
    return ie(u), (M, _) => (t(), Z($e, {
      title: `RESOLVE DEPENDENCIES: ${o.workflowName}`,
      size: "lg",
      loading: w.value,
      error: S.value || void 0,
      onClose: _[1] || (_[1] = (I) => r("close"))
    }, {
      body: N(() => [
        g.value ? (t(), s(U, { key: 0 }, [
          _[5] || (_[5] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          g.value.nodes_unresolved.length > 0 ? (t(), s("section", xo, [
            Y(re, { variant: "section" }, {
              default: N(() => [
                W("NODES (" + a(g.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", $o, [
              _[2] || (_[2] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "✓"),
                e("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              e("div", Co, [
                (t(!0), s(U, null, P(g.value.nodes_unresolved, (I) => {
                  var R;
                  return t(), s("div", {
                    key: I.node_type,
                    class: "item"
                  }, [
                    e("div", So, [
                      e("div", Eo, a(((R = O(I)) == null ? void 0 : R.package_id) || I.node_type), 1),
                      O(I) ? (t(), s("div", Lo, [
                        e("span", {
                          class: V(["confidence-badge", B(O(I).match_confidence)])
                        }, a(Math.round(O(I).match_confidence * 100)) + "% match ", 3),
                        e("span", Mo, a(O(I).match_type), 1),
                        e("span", zo, "Source: " + a(X(I)), 1)
                      ])) : m("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : m("", !0),
          g.value.models_unresolved.length > 0 ? (t(), s("section", Io, [
            Y(re, { variant: "section" }, {
              default: N(() => [
                W("MODELS (" + a(g.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", Oo, [
              _[3] || (_[3] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "⚠"),
                e("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              e("div", Do, [
                (t(!0), s(U, null, P(g.value.models_unresolved, (I) => (t(), s("div", {
                  key: I.filename,
                  class: "item"
                }, [
                  e("div", To, [
                    e("div", No, a(I.filename), 1),
                    e("div", Bo, [
                      I.expected_category ? (t(), s("span", Ro, "Type: " + a(I.expected_category), 1)) : m("", !0),
                      A(I.filename) ? (t(), s("span", Wo, " Size: ~" + a(A(I.filename).estimated_size_mb) + " MB ", 1)) : m("", !0)
                    ]),
                    E(I.filename) ? m("", !0) : (t(), s("div", Uo, " No auto-download source configured "))
                  ]),
                  z(I.filename) ? (t(), s("div", Ao, [
                    e("button", {
                      class: "link-btn",
                      onClick: (R) => H(z(I.filename))
                    }, " Open Source ↗ ", 8, Vo)
                  ])) : m("", !0)
                ]))), 128))
              ])
            ])
          ])) : m("", !0),
          g.value.nodes_resolved.length > 0 || g.value.models_resolved.length > 0 ? (t(), s("section", Po, [
            Y(re, { variant: "section" }, {
              default: N(() => [
                W(" ALREADY AVAILABLE (" + a(g.value.nodes_resolved.length + g.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            e("div", Ho, a(g.value.nodes_resolved.length) + " nodes and " + a(g.value.models_resolved.length) + " models are already installed ", 1)
          ])) : m("", !0),
          e("div", Go, [
            _[4] || (_[4] = e("div", { class: "summary-title" }, "This will:", -1)),
            e("ol", Ko, [
              g.value.nodes_to_install.length ? (t(), s("li", jo, " Install " + a(g.value.nodes_to_install.length) + " nodes (~" + a(g.value.estimated_time_seconds) + "s) ", 1)) : m("", !0),
              g.value.nodes_to_install.length ? (t(), s("li", Fo, " Restart ComfyUI to load new nodes ")) : m("", !0),
              g.value.models_to_download.length ? (t(), s("li", qo, " You'll still need to download " + a(g.value.models_to_download.length) + " model(s) manually ", 1)) : m("", !0)
            ]),
            g.value.estimated_size_mb ? (t(), s("div", Yo, " Estimated download: " + a(g.value.estimated_size_mb) + " MB ", 1)) : m("", !0)
          ])
        ], 64)) : m("", !0)
      ]),
      footer: N(() => [
        Y(se, {
          variant: "secondary",
          onClick: _[0] || (_[0] = (I) => r("close"))
        }, {
          default: N(() => [..._[6] || (_[6] = [
            W(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g.value && g.value.nodes_to_install.length && g.value.models_to_download.length ? (t(), Z(se, {
          key: 0,
          variant: "secondary",
          disabled: v.value,
          loading: v.value,
          onClick: K
        }, {
          default: N(() => [..._[7] || (_[7] = [
            W(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : m("", !0),
        g.value && (g.value.nodes_to_install.length || g.value.models_to_download.length) ? (t(), Z(se, {
          key: 1,
          variant: "primary",
          disabled: v.value || g.value.models_to_download.length > 0 && !C.value,
          loading: v.value,
          onClick: L
        }, {
          default: N(() => [..._[8] || (_[8] = [
            W(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : m("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Xo = /* @__PURE__ */ Q(Zo, [["__scopeId", "data-v-d68efb14"]]), Jo = { class: "workflows-section" }, Qo = { class: "section-header" }, es = { class: "search-bar" }, ts = {
  key: 0,
  class: "loading"
}, os = {
  key: 1,
  class: "error-message"
}, ss = {
  key: 2,
  class: "workflows-content"
}, as = {
  key: 0,
  class: "workflow-group"
}, ns = { class: "group-title" }, ls = { class: "workflow-info" }, rs = { class: "workflow-name" }, is = { class: "workflow-status" }, cs = { class: "workflow-actions" }, ds = ["onClick"], us = ["onClick"], ms = {
  key: 1,
  class: "workflow-group"
}, gs = { class: "group-title" }, hs = { class: "workflow-info" }, vs = { class: "workflow-name" }, fs = { class: "workflow-actions" }, ps = ["onClick"], ys = {
  key: 2,
  class: "workflow-group"
}, bs = { class: "group-title" }, ws = { class: "workflow-info" }, _s = { class: "workflow-name" }, ks = { class: "workflow-actions" }, xs = ["onClick"], $s = {
  key: 3,
  class: "workflow-group"
}, Cs = { class: "workflow-info" }, Ss = { class: "workflow-name" }, Es = { class: "workflow-actions" }, Ls = ["onClick"], Ms = {
  key: 4,
  class: "empty-state"
}, zs = { key: 0 }, Is = { key: 1 }, Os = /* @__PURE__ */ J({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(o, { emit: h }) {
    const i = h, { getWorkflows: r } = ce(), b = k([]), c = k(!1), g = k(null), w = k(""), v = k(!1), S = k(!1), C = k(!1), u = k(!1), O = k(null), B = T(
      () => b.value.filter((n) => n.status === "broken")
    ), X = T(
      () => b.value.filter((n) => n.status === "new")
    ), A = T(
      () => b.value.filter((n) => n.status === "modified")
    ), E = T(
      () => b.value.filter((n) => n.status === "synced")
    ), z = T(() => {
      if (!w.value.trim()) return b.value;
      const n = w.value.toLowerCase();
      return b.value.filter((d) => d.name.toLowerCase().includes(n));
    }), H = T(
      () => B.value.filter(
        (n) => !w.value.trim() || n.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), K = T(
      () => X.value.filter(
        (n) => !w.value.trim() || n.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), L = T(
      () => A.value.filter(
        (n) => !w.value.trim() || n.name.toLowerCase().includes(w.value.toLowerCase())
      )
    ), M = T(
      () => E.value.filter(
        (n) => !w.value.trim() || n.name.toLowerCase().includes(w.value.toLowerCase())
      )
    );
    async function _() {
      c.value = !0, g.value = null;
      try {
        b.value = await r();
      } catch (n) {
        g.value = n instanceof Error ? n.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    function I(n) {
      O.value = n, C.value = !0;
    }
    function R(n) {
      O.value = n, u.value = !0;
    }
    function y() {
      alert("Bulk resolution not yet implemented");
    }
    function f() {
      i("refresh");
    }
    return ie(_), (n, d) => (t(), s("div", Jo, [
      e("div", Qo, [
        d[7] || (d[7] = e("h3", { class: "view-title" }, "WORKFLOWS", -1)),
        B.value.length > 0 ? (t(), s("button", {
          key: 0,
          class: "resolve-all-btn",
          onClick: y
        }, " RESOLVE ALL ISSUES ")) : m("", !0)
      ]),
      e("div", es, [
        ke(e("input", {
          "onUpdate:modelValue": d[0] || (d[0] = (p) => w.value = p),
          type: "text",
          placeholder: "🔍 Search workflows...",
          class: "search-input"
        }, null, 512), [
          [xe, w.value]
        ])
      ]),
      c.value ? (t(), s("div", ts, "Loading workflows...")) : g.value ? (t(), s("div", os, a(g.value), 1)) : (t(), s("div", ss, [
        H.value.length ? (t(), s("section", as, [
          e("h4", ns, "BROKEN (" + a(H.value.length) + ")", 1),
          (t(!0), s(U, null, P(H.value, (p) => (t(), s("div", {
            key: p.name,
            class: "workflow-item broken"
          }, [
            e("div", ls, [
              e("div", rs, "⚠ " + a(p.name), 1),
              e("div", is, " Missing: " + a(p.missing_nodes) + " nodes, " + a(p.missing_models) + " models ", 1)
            ]),
            e("div", cs, [
              e("button", {
                class: "action-btn",
                onClick: (ee) => R(p.name)
              }, " Resolve ▸ ", 8, ds),
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => I(p.name)
              }, " Details ▸ ", 8, us)
            ])
          ]))), 128))
        ])) : m("", !0),
        K.value.length ? (t(), s("section", ms, [
          e("h4", gs, "NEW (" + a(K.value.length) + ")", 1),
          (t(!0), s(U, null, P(K.value, (p) => (t(), s("div", {
            key: p.name,
            class: "workflow-item new"
          }, [
            e("div", hs, [
              e("div", vs, "● " + a(p.name), 1),
              d[8] || (d[8] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            e("div", fs, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => I(p.name)
              }, " Details ", 8, ps)
            ])
          ]))), 128))
        ])) : m("", !0),
        L.value.length ? (t(), s("section", ys, [
          e("h4", bs, "MODIFIED (" + a(L.value.length) + ")", 1),
          (t(!0), s(U, null, P(L.value, (p) => (t(), s("div", {
            key: p.name,
            class: "workflow-item modified"
          }, [
            e("div", ws, [
              e("div", _s, "⚡ " + a(p.name), 1),
              d[9] || (d[9] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            e("div", ks, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => I(p.name)
              }, " Details ", 8, xs)
            ])
          ]))), 128))
        ])) : m("", !0),
        M.value.length ? (t(), s("section", $s, [
          e("h4", {
            class: "group-title clickable",
            onClick: d[1] || (d[1] = (p) => v.value = !v.value)
          }, " SYNCED (" + a(M.value.length) + ") " + a(v.value ? "▼" : "▸"), 1),
          v.value ? (t(), s(U, { key: 0 }, [
            (t(!0), s(U, null, P(M.value.slice(0, S.value ? void 0 : 5), (p) => (t(), s("div", {
              key: p.name,
              class: "workflow-item synced"
            }, [
              e("div", Cs, [
                e("div", Ss, a(p.name), 1),
                d[10] || (d[10] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
              ]),
              e("div", Es, [
                e("button", {
                  class: "action-btn secondary",
                  onClick: (ee) => I(p.name)
                }, " Details ", 8, Ls)
              ])
            ]))), 128)),
            !S.value && M.value.length > 5 ? (t(), s("button", {
              key: 0,
              class: "show-more-btn",
              onClick: d[2] || (d[2] = (p) => S.value = !0)
            }, " View all " + a(M.value.length) + " → ", 1)) : m("", !0)
          ], 64)) : m("", !0)
        ])) : m("", !0),
        z.value.length ? m("", !0) : (t(), s("div", Ms, [
          w.value ? (t(), s("p", zs, 'No workflows match "' + a(w.value) + '"', 1)) : (t(), s("p", Is, "No workflows found in this environment."))
        ]))
      ])),
      C.value && O.value ? (t(), Z(ko, {
        key: 3,
        "workflow-name": O.value,
        onClose: d[3] || (d[3] = (p) => C.value = !1),
        onResolve: d[4] || (d[4] = (p) => R(O.value))
      }, null, 8, ["workflow-name"])) : m("", !0),
      u.value && O.value ? (t(), Z(Xo, {
        key: 4,
        "workflow-name": O.value,
        onClose: d[5] || (d[5] = (p) => u.value = !1),
        onInstall: f,
        onRefresh: d[6] || (d[6] = (p) => i("refresh"))
      }, null, 8, ["workflow-name"])) : m("", !0)
    ]));
  }
}), Ds = /* @__PURE__ */ Q(Os, [["__scopeId", "data-v-abf8513b"]]), Ts = { class: "models-env-section" }, Ns = { class: "title-row" }, Bs = { class: "popover-header" }, Rs = { class: "popover-content" }, Ws = { class: "popover-text" }, Us = { class: "search-bar" }, As = {
  key: 1,
  class: "loading"
}, Vs = {
  key: 2,
  class: "error-message"
}, Ps = {
  key: 3,
  class: "models-content"
}, Hs = {
  key: 0,
  class: "model-group"
}, Gs = { class: "group-title" }, Ks = { class: "model-header" }, js = { class: "model-info" }, Fs = { class: "model-name" }, qs = { class: "model-size" }, Ys = { class: "model-details" }, Zs = { class: "detail-row" }, Xs = { class: "value" }, Js = { class: "model-actions" }, Qs = ["onClick"], ea = {
  key: 1,
  class: "model-group"
}, ta = { class: "group-title" }, oa = { class: "model-header" }, sa = { class: "model-info" }, aa = { class: "model-name" }, na = { class: "model-size" }, la = { class: "model-details" }, ra = { class: "detail-row" }, ia = { class: "value" }, ca = { class: "model-actions" }, da = ["onClick"], ua = {
  key: 2,
  class: "model-group"
}, ma = { class: "group-title" }, ga = { class: "model-header" }, ha = { class: "model-info" }, va = { class: "model-name" }, fa = { class: "model-size" }, pa = { class: "model-details" }, ya = { class: "detail-row" }, ba = { class: "value" }, wa = { class: "detail-row" }, _a = { class: "value" }, ka = { class: "model-actions" }, xa = ["onClick"], $a = {
  key: 3,
  class: "model-group"
}, Ca = { class: "group-title" }, Sa = { class: "model-header" }, Ea = { class: "model-info" }, La = { class: "model-name" }, Ma = { class: "model-details" }, za = { class: "detail-row" }, Ia = { class: "value" }, Oa = { class: "model-actions" }, Da = ["onClick"], Ta = ["onClick"], Na = {
  key: 4,
  class: "empty-state"
}, Ba = { key: 0 }, Ra = { key: 1 }, Wa = {
  key: 5,
  class: "summary"
}, Ua = /* @__PURE__ */ J({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(o, { emit: h }) {
    const i = h, { getEnvironmentModels: r, getStatus: b } = ce(), c = k([]), g = k([]), w = k("production"), v = k(!1), S = k(null), C = k(""), u = k(!1), O = k(null), B = k(null);
    function X() {
      u.value = !u.value;
    }
    function A() {
      u.value = !1, i("navigate", "model-index");
    }
    T(
      () => c.value.filter((n) => n.type === "checkpoints" || n.category === "checkpoints")
    ), T(
      () => c.value.filter((n) => n.type === "loras" || n.category === "loras")
    ), T(
      () => c.value.filter(
        (n) => n.type !== "checkpoints" && n.category !== "checkpoints" && n.type !== "loras" && n.category !== "loras"
      )
    );
    const E = T(
      () => c.value.reduce((n, d) => n + (d.size_mb || 0), 0)
    ), z = T(() => {
      if (!C.value.trim()) return c.value;
      const n = C.value.toLowerCase();
      return c.value.filter((d) => d.filename.toLowerCase().includes(n));
    }), H = T(() => {
      if (!C.value.trim()) return g.value;
      const n = C.value.toLowerCase();
      return g.value.filter((d) => d.filename.toLowerCase().includes(n));
    }), K = T(
      () => z.value.filter((n) => n.type === "checkpoints" || n.category === "checkpoints")
    ), L = T(
      () => z.value.filter((n) => n.type === "loras" || n.category === "loras")
    ), M = T(
      () => z.value.filter(
        (n) => n.type !== "checkpoints" && n.category !== "checkpoints" && n.type !== "loras" && n.category !== "loras"
      )
    );
    function _(n) {
      return n >= 1024 ? `${(n / 1024).toFixed(1)} GB` : `${n} MB`;
    }
    function I(n) {
      i("navigate", "model-index");
    }
    function R(n) {
      i("navigate", "model-index");
    }
    function y(n) {
      alert(`Download functionality not yet implemented for ${n}`);
    }
    async function f() {
      v.value = !0, S.value = null;
      try {
        const [n, d] = await Promise.all([
          r(),
          b()
        ]);
        c.value = n, g.value = d.missing_models || [], w.value = d.environment || "production";
      } catch (n) {
        S.value = n instanceof Error ? n.message : "Failed to load models";
      } finally {
        v.value = !1;
      }
    }
    return ie(f), (n, d) => (t(), s("div", Ts, [
      e("div", Ns, [
        d[5] || (d[5] = e("h3", { class: "view-title" }, "MODELS IN THIS ENVIRONMENT", -1)),
        e("button", {
          ref_key: "infoButton",
          ref: O,
          class: "info-icon",
          onClick: X,
          title: "About this section"
        }, [...d[4] || (d[4] = [
          e("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              stroke: "currentColor",
              "stroke-width": "1.5",
              fill: "none"
            }),
            e("text", {
              x: "8",
              y: "11",
              "text-anchor": "middle",
              "font-size": "10",
              "font-weight": "bold",
              fill: "currentColor"
            }, "i")
          ], -1)
        ])], 512)
      ]),
      u.value ? (t(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: d[2] || (d[2] = (p) => u.value = !1)
      }, [
        e("div", {
          ref_key: "popover",
          ref: B,
          class: "popover",
          onClick: d[1] || (d[1] = me(() => {
          }, ["stop"]))
        }, [
          e("div", Bs, [
            d[6] || (d[6] = e("h4", { class: "popover-title" }, "About Environment Models", -1)),
            e("button", {
              class: "popover-close",
              onClick: d[0] || (d[0] = (p) => u.value = !1)
            }, "✕")
          ]),
          e("div", Rs, [
            e("p", Ws, [
              d[7] || (d[7] = W(" These are models currently used by workflows in ", -1)),
              e("strong", null, '"' + a(w.value) + '"', 1),
              d[8] || (d[8] = W(". All models are symlinked from the workspace model index. ", -1))
            ]),
            e("button", {
              class: "popover-link-btn",
              onClick: A
            }, " View Workspace Model Index ↗ ")
          ])
        ], 512)
      ])) : m("", !0),
      e("div", Us, [
        ke(e("input", {
          "onUpdate:modelValue": d[3] || (d[3] = (p) => C.value = p),
          type: "text",
          placeholder: "🔍 Search models used in this environment...",
          class: "search-input"
        }, null, 512), [
          [xe, C.value]
        ])
      ]),
      v.value ? (t(), s("div", As, "Loading models...")) : S.value ? (t(), s("div", Vs, a(S.value), 1)) : (t(), s("div", Ps, [
        K.value.length ? (t(), s("section", Hs, [
          e("h4", Gs, "CHECKPOINTS (" + a(K.value.length) + ")", 1),
          (t(!0), s(U, null, P(K.value, (p) => (t(), s("div", {
            key: p.hash,
            class: "model-card"
          }, [
            e("div", Ks, [
              d[9] || (d[9] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", js, [
                e("div", Fs, a(p.filename), 1),
                e("div", qs, a(_(p.size_mb)), 1)
              ])
            ]),
            e("div", Ys, [
              e("div", Zs, [
                d[10] || (d[10] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", Xs, a(p.used_by.join(", ")), 1)
              ]),
              d[11] || (d[11] = e("div", { class: "detail-row" }, [
                e("span", { class: "label" }, "Source:"),
                e("span", { class: "value" }, "Workspace index")
              ], -1))
            ]),
            e("div", Js, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => I(p.hash)
              }, " View in Workspace Index ↗ ", 8, Qs)
            ])
          ]))), 128))
        ])) : m("", !0),
        L.value.length ? (t(), s("section", ea, [
          e("h4", ta, "LORAS (" + a(L.value.length) + ")", 1),
          (t(!0), s(U, null, P(L.value, (p) => (t(), s("div", {
            key: p.hash,
            class: "model-card"
          }, [
            e("div", oa, [
              d[12] || (d[12] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", sa, [
                e("div", aa, a(p.filename), 1),
                e("div", na, a(_(p.size_mb)), 1)
              ])
            ]),
            e("div", la, [
              e("div", ra, [
                d[13] || (d[13] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", ia, a(p.used_by.join(", ")), 1)
              ]),
              d[14] || (d[14] = e("div", { class: "detail-row" }, [
                e("span", { class: "label" }, "Source:"),
                e("span", { class: "value" }, "Workspace index")
              ], -1))
            ]),
            e("div", ca, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => I(p.hash)
              }, " View in Workspace Index ↗ ", 8, da)
            ])
          ]))), 128))
        ])) : m("", !0),
        M.value.length ? (t(), s("section", ua, [
          e("h4", ma, "OTHER (" + a(M.value.length) + ")", 1),
          (t(!0), s(U, null, P(M.value, (p) => (t(), s("div", {
            key: p.hash,
            class: "model-card"
          }, [
            e("div", ga, [
              d[15] || (d[15] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", ha, [
                e("div", va, a(p.filename), 1),
                e("div", fa, a(_(p.size_mb)), 1)
              ])
            ]),
            e("div", pa, [
              e("div", ya, [
                d[16] || (d[16] = e("span", { class: "label" }, "Type:", -1)),
                e("span", ba, a(p.type), 1)
              ]),
              e("div", wa, [
                d[17] || (d[17] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", _a, a(p.used_by.join(", ")), 1)
              ])
            ]),
            e("div", ka, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => I(p.hash)
              }, " View in Workspace Index ↗ ", 8, xa)
            ])
          ]))), 128))
        ])) : m("", !0),
        H.value.length ? (t(), s("section", $a, [
          e("h4", Ca, "MISSING (" + a(H.value.length) + ")", 1),
          (t(!0), s(U, null, P(H.value, (p) => {
            var ee;
            return t(), s("div", {
              key: p.filename,
              class: "model-card missing"
            }, [
              e("div", Sa, [
                d[19] || (d[19] = e("span", { class: "model-icon" }, "⚠", -1)),
                e("div", Ea, [
                  e("div", La, a(p.filename), 1),
                  d[18] || (d[18] = e("div", { class: "model-status error" }, "Not found in workspace index", -1))
                ])
              ]),
              e("div", Ma, [
                e("div", za, [
                  d[20] || (d[20] = e("span", { class: "label" }, "Required by:", -1)),
                  e("span", Ia, a(((ee = p.workflow_names) == null ? void 0 : ee.join(", ")) || "Unknown"), 1)
                ])
              ]),
              e("div", Oa, [
                e("button", {
                  class: "action-btn",
                  onClick: ($) => y(p.filename)
                }, " Download ", 8, Da),
                e("button", {
                  class: "action-btn secondary",
                  onClick: ($) => R(p.filename)
                }, " Search Workspace Index ", 8, Ta)
              ])
            ]);
          }), 128))
        ])) : m("", !0),
        z.value.length ? m("", !0) : (t(), s("div", Na, [
          C.value ? (t(), s("p", Ba, 'No models match "' + a(C.value) + '"', 1)) : (t(), s("p", Ra, "No models in this environment."))
        ])),
        c.value.length ? (t(), s("div", Wa, " Total: " + a(c.value.length) + " models • " + a(_(E.value)) + " (symlinked from workspace) ", 1)) : m("", !0)
      ]))
    ]));
  }
}), Aa = /* @__PURE__ */ Q(Ua, [["__scopeId", "data-v-1a582577"]]), Va = { class: "model-index-section" }, Pa = { class: "title-row" }, Ha = { class: "popover-header" }, Ga = { class: "search-bar" }, Ka = {
  key: 1,
  class: "loading"
}, ja = {
  key: 2,
  class: "error-message"
}, Fa = {
  key: 3,
  class: "models-content"
}, qa = {
  key: 0,
  class: "summary-header"
}, Ya = {
  key: 1,
  class: "model-group"
}, Za = { class: "group-title" }, Xa = { class: "model-header" }, Ja = { class: "model-info" }, Qa = { class: "model-name" }, en = { class: "model-size" }, tn = { class: "model-details" }, on = { class: "detail-row" }, sn = { class: "value hash" }, an = { class: "detail-row" }, nn = { class: "value" }, ln = {
  key: 0,
  class: "detail-row"
}, rn = { class: "value" }, cn = {
  key: 1,
  class: "detail-row"
}, dn = { class: "model-actions" }, un = ["onClick"], mn = ["onClick"], gn = ["onClick"], hn = {
  key: 2,
  class: "model-group"
}, vn = { class: "group-title" }, fn = { class: "model-header" }, pn = { class: "model-info" }, yn = { class: "model-name" }, bn = { class: "model-size" }, wn = { class: "model-details" }, _n = { class: "detail-row" }, kn = { class: "value hash" }, xn = { class: "detail-row" }, $n = { class: "value" }, Cn = {
  key: 0,
  class: "detail-row"
}, Sn = { class: "value" }, En = {
  key: 1,
  class: "detail-row"
}, Ln = { class: "model-actions" }, Mn = ["onClick"], zn = ["onClick"], In = ["onClick"], On = {
  key: 3,
  class: "model-group"
}, Dn = { class: "group-title" }, Tn = { class: "model-header" }, Nn = { class: "model-info" }, Bn = { class: "model-name" }, Rn = { class: "model-size" }, Wn = { class: "model-details" }, Un = { class: "detail-row" }, An = { class: "value" }, Vn = { class: "detail-row" }, Pn = { class: "value hash" }, Hn = { class: "detail-row" }, Gn = { class: "value" }, Kn = { class: "model-actions" }, jn = ["onClick"], Fn = ["onClick"], qn = ["onClick"], Yn = {
  key: 4,
  class: "empty-state"
}, Zn = { key: 0 }, Xn = { key: 1 }, Jn = /* @__PURE__ */ J({
  __name: "ModelIndexSection",
  setup(o) {
    const { getWorkspaceModels: h } = ce(), i = k([]), r = k(!1), b = k(null), c = k(""), g = k(!1), w = k(null), v = k(null);
    function S() {
      g.value = !g.value;
    }
    T(
      () => i.value.filter((y) => y.type === "checkpoints" || y.category === "checkpoints")
    ), T(
      () => i.value.filter((y) => y.type === "loras" || y.category === "loras")
    ), T(
      () => i.value.filter(
        (y) => y.type !== "checkpoints" && y.category !== "checkpoints" && y.type !== "loras" && y.category !== "loras"
      )
    );
    const C = T(
      () => i.value.reduce((y, f) => y + (f.size_mb || 0), 0)
    ), u = T(() => {
      const y = /* @__PURE__ */ new Set();
      return i.value.forEach((f) => {
        f.used_by && f.used_by.length > 0 && y.add("production");
      }), y.size;
    }), O = T(() => {
      if (!c.value.trim()) return i.value;
      const y = c.value.toLowerCase();
      return i.value.filter(
        (f) => f.filename.toLowerCase().includes(y) || f.sha256_hash && f.sha256_hash.toLowerCase().includes(y) || f.hash.toLowerCase().includes(y)
      );
    }), B = T(
      () => O.value.filter((y) => y.type === "checkpoints" || y.category === "checkpoints")
    ), X = T(
      () => O.value.filter((y) => y.type === "loras" || y.category === "loras")
    ), A = T(
      () => O.value.filter(
        (y) => y.type !== "checkpoints" && y.category !== "checkpoints" && y.type !== "loras" && y.category !== "loras"
      )
    );
    function E(y) {
      return y >= 1024 ? `${(y / 1024).toFixed(1)} GB` : `${y} MB`;
    }
    function z(y) {
      return !y.used_by || y.used_by.length === 0 ? "Not used" : `${y.used_by.length} workflow(s)`;
    }
    function H(y) {
      navigator.clipboard.writeText(y), alert("Hash copied to clipboard");
    }
    function K(y) {
      var n;
      prompt("Enter model source URL:", ((n = y.sources) == null ? void 0 : n[0]) || "") !== null && alert("URL update not yet implemented");
    }
    function L(y) {
      const f = y.used_by && y.used_by.length > 0 ? `

⚠ WARNING: This model is used by ${y.used_by.length} workflow(s):
${y.used_by.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${y.filename}?${f}

This will free ${E(y.size_mb || 0)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function M() {
      alert("Scan for models not yet implemented");
    }
    function _() {
      alert("Add directory not yet implemented");
    }
    function I() {
      alert("Download new model not yet implemented");
    }
    async function R() {
      r.value = !0, b.value = null;
      try {
        i.value = await h();
      } catch (y) {
        b.value = y instanceof Error ? y.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return ie(R), (y, f) => (t(), s("div", Va, [
      e("div", Pa, [
        f[5] || (f[5] = e("h3", { class: "view-title" }, "WORKSPACE MODEL INDEX", -1)),
        e("button", {
          ref_key: "infoButton",
          ref: w,
          class: "info-icon",
          onClick: S,
          title: "About this section"
        }, [...f[4] || (f[4] = [
          e("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              stroke: "currentColor",
              "stroke-width": "1.5",
              fill: "none"
            }),
            e("text", {
              x: "8",
              y: "11",
              "text-anchor": "middle",
              "font-size": "10",
              "font-weight": "bold",
              fill: "currentColor"
            }, "i")
          ], -1)
        ])], 512)
      ]),
      g.value ? (t(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: f[2] || (f[2] = (n) => g.value = !1)
      }, [
        e("div", {
          ref_key: "popover",
          ref: v,
          class: "popover",
          onClick: f[1] || (f[1] = me(() => {
          }, ["stop"]))
        }, [
          e("div", Ha, [
            f[6] || (f[6] = e("h4", { class: "popover-title" }, "About Workspace Model Index", -1)),
            e("button", {
              class: "popover-close",
              onClick: f[0] || (f[0] = (n) => g.value = !1)
            }, "✕")
          ]),
          f[7] || (f[7] = e("div", { class: "popover-content" }, [
            e("p", { class: "popover-text" }, [
              W(" Content-addressable model storage shared across "),
              e("strong", null, "all environments"),
              W(". Models are deduplicated by SHA256 hash. ")
            ])
          ], -1))
        ], 512)
      ])) : m("", !0),
      e("div", { class: "section-header" }, [
        e("div", { class: "header-actions" }, [
          e("button", {
            class: "action-btn",
            onClick: M
          }, " Scan for Models "),
          e("button", {
            class: "action-btn",
            onClick: _
          }, " Add Directory "),
          e("button", {
            class: "action-btn primary",
            onClick: I
          }, [...f[8] || (f[8] = [
            e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
              e("path", { d: "M14 14H2v-2h12v2z" })
            ], -1),
            W(" DOWNLOAD + ", -1)
          ])])
        ])
      ]),
      e("div", Ga, [
        ke(e("input", {
          "onUpdate:modelValue": f[3] || (f[3] = (n) => c.value = n),
          type: "text",
          placeholder: "🔍 Search all indexed models...",
          class: "search-input"
        }, null, 512), [
          [xe, c.value]
        ])
      ]),
      r.value ? (t(), s("div", Ka, "Loading workspace models...")) : b.value ? (t(), s("div", ja, a(b.value), 1)) : (t(), s("div", Fa, [
        i.value.length ? (t(), s("div", qa, " Total: " + a(i.value.length) + " models • " + a(E(C.value)) + " • Used in " + a(u.value) + " environments ", 1)) : m("", !0),
        B.value.length ? (t(), s("section", Ya, [
          e("h4", Za, "/* CHECKPOINTS (" + a(B.value.length) + ") */", 1),
          (t(!0), s(U, null, P(B.value, (n) => {
            var d;
            return t(), s("div", {
              key: n.sha256_hash || n.hash,
              class: "model-card"
            }, [
              e("div", Xa, [
                f[9] || (f[9] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", Ja, [
                  e("div", Qa, a(n.filename), 1),
                  e("div", en, a(E(n.size_mb)), 1)
                ])
              ]),
              e("div", tn, [
                e("div", on, [
                  f[10] || (f[10] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", sn, a(((d = n.sha256_hash) == null ? void 0 : d.substring(0, 16)) || n.hash) + "...", 1)
                ]),
                e("div", an, [
                  f[11] || (f[11] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", nn, a(z(n)), 1)
                ]),
                n.sources && n.sources.length ? (t(), s("div", ln, [
                  f[12] || (f[12] = e("span", { class: "label" }, "Source URL:", -1)),
                  e("span", rn, a(n.sources[0]), 1)
                ])) : (t(), s("div", cn, [...f[13] || (f[13] = [
                  e("span", { class: "label" }, "Source URL:", -1),
                  e("span", { class: "value warning" }, "(none)", -1)
                ])]))
              ]),
              e("div", dn, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (p) => K(n)
                }, " Edit URL ", 8, un),
                e("button", {
                  class: "action-btn-small",
                  onClick: (p) => H(n.sha256_hash || n.hash)
                }, " Copy Hash ", 8, mn),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (p) => L(n)
                }, " Delete ", 8, gn)
              ])
            ]);
          }), 128))
        ])) : m("", !0),
        X.value.length ? (t(), s("section", hn, [
          e("h4", vn, "/* LORAS (" + a(X.value.length) + ") */", 1),
          (t(!0), s(U, null, P(X.value, (n) => {
            var d;
            return t(), s("div", {
              key: n.sha256_hash || n.hash,
              class: "model-card"
            }, [
              e("div", fn, [
                f[14] || (f[14] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", pn, [
                  e("div", yn, a(n.filename), 1),
                  e("div", bn, a(E(n.size_mb)), 1)
                ])
              ]),
              e("div", wn, [
                e("div", _n, [
                  f[15] || (f[15] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", kn, a(((d = n.sha256_hash) == null ? void 0 : d.substring(0, 16)) || n.hash) + "...", 1)
                ]),
                e("div", xn, [
                  f[16] || (f[16] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", $n, a(z(n)), 1)
                ]),
                n.sources && n.sources.length ? (t(), s("div", Cn, [
                  f[17] || (f[17] = e("span", { class: "label" }, "Source URL:", -1)),
                  e("span", Sn, a(n.sources[0]), 1)
                ])) : (t(), s("div", En, [...f[18] || (f[18] = [
                  e("span", { class: "label" }, "Source URL:", -1),
                  e("span", { class: "value warning" }, "(none)", -1)
                ])]))
              ]),
              e("div", Ln, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (p) => K(n)
                }, " Edit URL ", 8, Mn),
                e("button", {
                  class: "action-btn-small",
                  onClick: (p) => H(n.sha256_hash || n.hash)
                }, " Copy Hash ", 8, zn),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (p) => L(n)
                }, " Delete ", 8, In)
              ])
            ]);
          }), 128))
        ])) : m("", !0),
        A.value.length ? (t(), s("section", On, [
          e("h4", Dn, "/* OTHER (" + a(A.value.length) + ") */", 1),
          (t(!0), s(U, null, P(A.value, (n) => {
            var d;
            return t(), s("div", {
              key: n.sha256_hash || n.hash,
              class: "model-card"
            }, [
              e("div", Tn, [
                f[19] || (f[19] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", Nn, [
                  e("div", Bn, a(n.filename), 1),
                  e("div", Rn, a(E(n.size_mb)), 1)
                ])
              ]),
              e("div", Wn, [
                e("div", Un, [
                  f[20] || (f[20] = e("span", { class: "label" }, "Type:", -1)),
                  e("span", An, a(n.type), 1)
                ]),
                e("div", Vn, [
                  f[21] || (f[21] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", Pn, a(((d = n.sha256_hash) == null ? void 0 : d.substring(0, 16)) || n.hash) + "...", 1)
                ]),
                e("div", Hn, [
                  f[22] || (f[22] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", Gn, a(z(n)), 1)
                ])
              ]),
              e("div", Kn, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (p) => K(n)
                }, " Edit URL ", 8, jn),
                e("button", {
                  class: "action-btn-small",
                  onClick: (p) => H(n.sha256_hash || n.hash)
                }, " Copy Hash ", 8, Fn),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (p) => L(n)
                }, " Delete ", 8, qn)
              ])
            ]);
          }), 128))
        ])) : m("", !0),
        O.value.length ? m("", !0) : (t(), s("div", Yn, [
          c.value ? (t(), s("p", Zn, 'No models match "' + a(c.value) + '"', 1)) : (t(), s("p", Xn, "No models in workspace index."))
        ]))
      ]))
    ]));
  }
}), Qn = /* @__PURE__ */ Q(Jn, [["__scopeId", "data-v-b838073f"]]), el = { class: "header-info" }, tl = { class: "commit-hash" }, ol = {
  key: 0,
  class: "commit-refs"
}, sl = { class: "commit-message" }, al = { class: "commit-date" }, nl = {
  key: 0,
  class: "loading"
}, ll = {
  key: 1,
  class: "changes-section"
}, rl = { class: "stats-row" }, il = { class: "stat" }, cl = { class: "stat insertions" }, dl = { class: "stat deletions" }, ul = {
  key: 0,
  class: "change-group"
}, ml = {
  key: 1,
  class: "change-group"
}, gl = {
  key: 0,
  class: "version"
}, hl = {
  key: 2,
  class: "change-group"
}, vl = { class: "change-item" }, fl = /* @__PURE__ */ J({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(o) {
    const h = o, { getCommitDetail: i } = ce(), r = k(null), b = k(!0), c = T(() => {
      if (!r.value) return !1;
      const w = r.value.changes.workflows;
      return w.added.length > 0 || w.modified.length > 0 || w.deleted.length > 0;
    }), g = T(() => {
      if (!r.value) return !1;
      const w = r.value.changes.nodes;
      return w.added.length > 0 || w.removed.length > 0;
    });
    return ie(async () => {
      try {
        r.value = await i(h.commit.hash);
      } finally {
        b.value = !1;
      }
    }), (w, v) => (t(), Z($e, {
      size: "md",
      "show-close-button": !1,
      onClose: v[3] || (v[3] = (S) => w.$emit("close"))
    }, {
      header: N(() => {
        var S, C, u, O;
        return [
          e("div", el, [
            v[4] || (v[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", tl, a(((S = r.value) == null ? void 0 : S.short_hash) || o.commit.short_hash || ((C = o.commit.hash) == null ? void 0 : C.slice(0, 7))), 1),
            (O = (u = r.value) == null ? void 0 : u.refs) != null && O.length ? (t(), s("span", ol, [
              (t(!0), s(U, null, P(r.value.refs, (B) => (t(), s("span", {
                key: B,
                class: "ref-badge"
              }, a(B), 1))), 128))
            ])) : m("", !0)
          ]),
          Y(se, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (B) => w.$emit("close"))
          }, {
            default: N(() => [...v[5] || (v[5] = [
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
      body: N(() => {
        var S, C;
        return [
          e("div", sl, a(((S = r.value) == null ? void 0 : S.message) || o.commit.message), 1),
          e("div", al, a(((C = r.value) == null ? void 0 : C.date_relative) || o.commit.date_relative || o.commit.relative_date), 1),
          b.value ? (t(), s("div", nl, "Loading details...")) : r.value ? (t(), s("div", ll, [
            e("div", rl, [
              e("span", il, a(r.value.stats.files_changed) + " files", 1),
              e("span", cl, "+" + a(r.value.stats.insertions), 1),
              e("span", dl, "-" + a(r.value.stats.deletions), 1)
            ]),
            c.value ? (t(), s("div", ul, [
              Y(re, { variant: "section" }, {
                default: N(() => [...v[6] || (v[6] = [
                  W("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(U, null, P(r.value.changes.workflows.added, (u) => (t(), s("div", {
                key: "add-" + u,
                class: "change-item added"
              }, [
                v[7] || (v[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(u), 1)
              ]))), 128)),
              (t(!0), s(U, null, P(r.value.changes.workflows.modified, (u) => (t(), s("div", {
                key: "mod-" + u,
                class: "change-item modified"
              }, [
                v[8] || (v[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(u), 1)
              ]))), 128)),
              (t(!0), s(U, null, P(r.value.changes.workflows.deleted, (u) => (t(), s("div", {
                key: "del-" + u,
                class: "change-item deleted"
              }, [
                v[9] || (v[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(u), 1)
              ]))), 128))
            ])) : m("", !0),
            g.value ? (t(), s("div", ml, [
              Y(re, { variant: "section" }, {
                default: N(() => [...v[10] || (v[10] = [
                  W("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(U, null, P(r.value.changes.nodes.added, (u) => (t(), s("div", {
                key: "add-" + u.name,
                class: "change-item added"
              }, [
                v[11] || (v[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(u.name), 1),
                u.version ? (t(), s("span", gl, "(" + a(u.version) + ")", 1)) : m("", !0)
              ]))), 128)),
              (t(!0), s(U, null, P(r.value.changes.nodes.removed, (u) => (t(), s("div", {
                key: "rem-" + u.name,
                class: "change-item deleted"
              }, [
                v[12] || (v[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(u.name), 1)
              ]))), 128))
            ])) : m("", !0),
            r.value.changes.models.resolved > 0 ? (t(), s("div", hl, [
              Y(re, { variant: "section" }, {
                default: N(() => [...v[13] || (v[13] = [
                  W("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", vl, [
                v[14] || (v[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : m("", !0)
          ])) : m("", !0)
        ];
      }),
      footer: N(() => [
        Y(se, {
          variant: "secondary",
          onClick: v[1] || (v[1] = (S) => w.$emit("createBranch", o.commit))
        }, {
          default: N(() => [...v[15] || (v[15] = [
            W(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        Y(se, {
          variant: "primary",
          onClick: v[2] || (v[2] = (S) => w.$emit("checkout", o.commit))
        }, {
          default: N(() => [...v[16] || (v[16] = [
            W(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), pl = /* @__PURE__ */ Q(fl, [["__scopeId", "data-v-d256ff6d"]]), yl = { class: "dialog-message" }, bl = {
  key: 0,
  class: "dialog-details"
}, wl = {
  key: 1,
  class: "dialog-warning"
}, _l = /* @__PURE__ */ J({
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
  setup(o) {
    return (h, i) => (t(), Z($e, {
      title: o.title,
      size: "sm",
      onClose: i[3] || (i[3] = (r) => h.$emit("cancel"))
    }, {
      body: N(() => [
        e("p", yl, a(o.message), 1),
        o.details && o.details.length ? (t(), s("div", bl, [
          (t(!0), s(U, null, P(o.details, (r, b) => (t(), s("div", {
            key: b,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : m("", !0),
        o.warning ? (t(), s("p", wl, [
          i[4] || (i[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          W(" " + a(o.warning), 1)
        ])) : m("", !0)
      ]),
      footer: N(() => [
        Y(se, {
          variant: "secondary",
          onClick: i[0] || (i[0] = (r) => h.$emit("cancel"))
        }, {
          default: N(() => [
            W(a(o.cancelLabel), 1)
          ]),
          _: 1
        }),
        o.secondaryAction ? (t(), Z(se, {
          key: 0,
          variant: "secondary",
          onClick: i[1] || (i[1] = (r) => h.$emit("secondary"))
        }, {
          default: N(() => [
            W(a(o.secondaryLabel), 1)
          ]),
          _: 1
        })) : m("", !0),
        Y(se, {
          variant: o.destructive ? "danger" : "primary",
          onClick: i[2] || (i[2] = (r) => h.$emit("confirm"))
        }, {
          default: N(() => [
            W(a(o.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), kl = /* @__PURE__ */ Q(_l, [["__scopeId", "data-v-3670b9f5"]]), xl = { class: "comfygit-panel" }, $l = { class: "panel-header" }, Cl = { class: "header-left" }, Sl = {
  key: 0,
  class: "header-info"
}, El = { class: "header-actions" }, Ll = { class: "env-switcher" }, Ml = {
  key: 0,
  class: "header-info"
}, zl = { class: "branch-name" }, Il = { class: "panel-main" }, Ol = { class: "sidebar" }, Dl = { class: "sidebar-section" }, Tl = { class: "sidebar-section" }, Nl = { class: "sidebar-section" }, Bl = { class: "content-area" }, Rl = {
  key: 0,
  class: "error-message"
}, Wl = {
  key: 1,
  class: "loading"
}, Ul = {
  key: 5,
  class: "view-placeholder"
}, Al = {
  key: 6,
  class: "view-placeholder"
}, Vl = {
  key: 7,
  class: "view-placeholder"
}, Pl = {
  key: 9,
  class: "view-placeholder"
}, Hl = {
  key: 10,
  class: "view-placeholder"
}, Gl = {
  key: 11,
  class: "view-placeholder"
}, Kl = {
  key: 12,
  class: "view-placeholder"
}, jl = {
  key: 13,
  class: "view-placeholder"
}, Fl = { class: "dialog-content env-selector-dialog" }, ql = { class: "dialog-header" }, Yl = { class: "dialog-body" }, Zl = { class: "env-list" }, Xl = { class: "env-info" }, Jl = { class: "env-name-row" }, Ql = { class: "env-indicator" }, er = { class: "env-name" }, tr = {
  key: 0,
  class: "env-branch"
}, or = {
  key: 1,
  class: "current-label"
}, sr = { class: "env-stats" }, ar = ["onClick"], nr = { class: "toast-container" }, lr = { class: "toast-icon" }, rr = { class: "toast-message" }, ir = /* @__PURE__ */ J({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(o, { emit: h }) {
    const i = h, {
      getStatus: r,
      getHistory: b,
      exportEnv: c,
      getBranches: g,
      checkout: w,
      createBranch: v,
      switchBranch: S,
      getEnvironments: C
    } = ce(), u = k(null), O = k([]), B = k([]), X = k([]), A = T(() => X.value.find((x) => x.is_current)), E = k(!1), z = k(null), H = k(null), K = k(!1), L = k("status"), M = k("this-env");
    function _(x, l) {
      L.value = x, M.value = l;
    }
    function I(x) {
      const j = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[x];
      j && _(j.view, j.section);
    }
    const R = k(null), y = k([]);
    let f = 0;
    function n(x, l = "info", j = 3e3) {
      const oe = ++f;
      return y.value.push({ id: oe, message: x, type: l }), j > 0 && setTimeout(() => {
        y.value = y.value.filter((de) => de.id !== oe);
      }, j), oe;
    }
    function d(x) {
      y.value = y.value.filter((l) => l.id !== x);
    }
    function p(x) {
      switch (x) {
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
    const ee = T(() => {
      if (!u.value) return "neutral";
      const x = u.value.workflows, l = x.new.length > 0 || x.modified.length > 0 || x.deleted.length > 0 || u.value.has_changes;
      return u.value.comparison.is_synced ? l ? "warning" : "success" : "error";
    });
    T(() => u.value ? ee.value === "success" ? "All synced" : ee.value === "warning" ? "Uncommitted changes" : ee.value === "error" ? "Not synced" : "" : "");
    async function $() {
      E.value = !0, z.value = null;
      try {
        const [x, l, j, oe] = await Promise.all([
          r(),
          b(),
          g(),
          C()
        ]);
        u.value = x, O.value = l.commits, B.value = j.branches, X.value = oe, i("statusUpdate", x);
      } catch (x) {
        z.value = x instanceof Error ? x.message : "Failed to load status", u.value = null, O.value = [], B.value = [];
      } finally {
        E.value = !1;
      }
    }
    function G(x) {
      H.value = x;
    }
    async function te(x) {
      var j;
      H.value = null;
      const l = u.value && (u.value.workflows.new.length > 0 || u.value.workflows.modified.length > 0 || u.value.workflows.deleted.length > 0 || u.value.has_changes);
      R.value = {
        title: l ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: l ? "You have uncommitted changes that will be lost." : `Checkout commit ${x.short_hash || ((j = x.hash) == null ? void 0 : j.slice(0, 7))}?`,
        details: l ? ze() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: l ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: l,
        onConfirm: async () => {
          var D;
          R.value = null;
          const oe = n(`Checking out ${x.short_hash || ((D = x.hash) == null ? void 0 : D.slice(0, 7))}...`, "info", 0), de = await w(x.hash, l);
          d(oe), de.status === "success" ? n("Restarting ComfyUI...", "success") : n(de.message || "Checkout failed", "error");
        }
      };
    }
    async function pe(x) {
      const l = u.value && (u.value.workflows.new.length > 0 || u.value.workflows.modified.length > 0 || u.value.workflows.deleted.length > 0 || u.value.has_changes);
      R.value = {
        title: l ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: l ? "You have uncommitted changes." : `Switch to branch "${x}"?`,
        details: l ? ze() : void 0,
        warning: l ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: l ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          R.value = null;
          const j = n(`Switching to ${x}...`, "info", 0), oe = await S(x, l);
          d(j), oe.status === "success" ? n("Restarting ComfyUI...", "success") : n(oe.message || "Branch switch failed", "error");
        }
      };
    }
    async function ye(x) {
      const l = n(`Creating branch ${x}...`, "info", 0), j = await v(x);
      d(l), j.status === "success" ? (n(`Branch "${x}" created`, "success"), await $()) : n(j.message || "Failed to create branch", "error");
    }
    async function Ue(x) {
      H.value = null;
      const l = prompt("Enter branch name:");
      if (l) {
        const j = n(`Creating branch ${l}...`, "info", 0), oe = await v(l, x.hash);
        d(j), oe.status === "success" ? (n(`Branch "${l}" created from ${x.short_hash}`, "success"), await $()) : n(oe.message || "Failed to create branch", "error");
      }
    }
    async function Ae(x) {
      K.value = !1, n("Environment switching not yet implemented", "warning");
    }
    function ze() {
      if (!u.value) return [];
      const x = [], l = u.value.workflows;
      return l.new.length && x.push(`${l.new.length} new workflow(s)`), l.modified.length && x.push(`${l.modified.length} modified workflow(s)`), l.deleted.length && x.push(`${l.deleted.length} deleted workflow(s)`), x;
    }
    async function Ve() {
      const x = n("Exporting environment...", "info", 0);
      try {
        const l = await c();
        d(x), l.status === "success" ? (n("Export complete", "success"), alert(`Export successful!

Saved to: ${l.path}

Models without sources: ${l.models_without_sources}`)) : (n("Export failed", "error"), alert(`Export failed: ${l.message}`));
      } catch (l) {
        d(x), n("Export error", "error"), alert(`Export error: ${l instanceof Error ? l.message : "Unknown error"}`);
      }
    }
    return ie($), (x, l) => {
      var j, oe, de;
      return t(), s("div", xl, [
        e("div", $l, [
          e("div", Cl, [
            l[20] || (l[20] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            u.value ? (t(), s("div", Sl)) : m("", !0)
          ]),
          e("div", El, [
            e("button", {
              class: V(["icon-btn", { spinning: E.value }]),
              onClick: $,
              title: "Refresh"
            }, [...l[21] || (l[21] = [
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
              onClick: l[0] || (l[0] = (D) => i("close")),
              title: "Close"
            }, [...l[22] || (l[22] = [
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
        e("div", Ll, [
          l[24] || (l[24] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: l[1] || (l[1] = (D) => K.value = !0)
          }, [
            u.value ? (t(), s("div", Ml, [
              e("span", null, a(((j = A.value) == null ? void 0 : j.name) || ((oe = u.value) == null ? void 0 : oe.environment) || "Loading..."), 1),
              e("span", zl, "(" + a(u.value.branch || "detached") + ")", 1)
            ])) : m("", !0),
            l[23] || (l[23] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Il, [
          e("div", Ol, [
            e("div", Dl, [
              l[25] || (l[25] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "status" && M.value === "this-env" }]),
                onClick: l[2] || (l[2] = (D) => _("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "workflows" }]),
                onClick: l[3] || (l[3] = (D) => _("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "models-env" }]),
                onClick: l[4] || (l[4] = (D) => _("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "branches" }]),
                onClick: l[5] || (l[5] = (D) => _("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "history" }]),
                onClick: l[6] || (l[6] = (D) => _("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "nodes" }]),
                onClick: l[7] || (l[7] = (D) => _("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "debug-env" }]),
                onClick: l[8] || (l[8] = (D) => _("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            l[28] || (l[28] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Tl, [
              l[26] || (l[26] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "environments" }]),
                onClick: l[9] || (l[9] = (D) => _("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "model-index" }]),
                onClick: l[10] || (l[10] = (D) => _("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "settings" }]),
                onClick: l[11] || (l[11] = (D) => _("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "debug-workspace" }]),
                onClick: l[12] || (l[12] = (D) => _("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            l[29] || (l[29] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Nl, [
              l[27] || (l[27] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "export" }]),
                onClick: l[13] || (l[13] = (D) => _("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "import" }]),
                onClick: l[14] || (l[14] = (D) => _("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: V(["sidebar-item", { active: L.value === "remotes" }]),
                onClick: l[15] || (l[15] = (D) => _("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Bl, [
            z.value ? (t(), s("div", Rl, a(z.value), 1)) : !u.value && L.value === "status" ? (t(), s("div", Wl, " Loading status... ")) : (t(), s(U, { key: 2 }, [
              L.value === "status" ? (t(), Z(ht, {
                key: 0,
                status: u.value
              }, null, 8, ["status"])) : L.value === "workflows" ? (t(), Z(Ds, {
                key: 1,
                onRefresh: $
              })) : L.value === "models-env" ? (t(), Z(Aa, {
                key: 2,
                onNavigate: I
              })) : L.value === "branches" ? (t(), Z(St, {
                key: 3,
                branches: B.value,
                current: ((de = u.value) == null ? void 0 : de.branch) || null,
                onSwitch: pe,
                onCreate: ye
              }, null, 8, ["branches", "current"])) : L.value === "history" ? (t(), Z(Bt, {
                key: 4,
                commits: O.value,
                onSelect: G,
                onCheckout: te
              }, null, 8, ["commits"])) : L.value === "nodes" ? (t(), s("div", Ul, [...l[30] || (l[30] = [
                e("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                e("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : L.value === "debug-env" ? (t(), s("div", Al, [...l[31] || (l[31] = [
                e("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                e("p", null, "Environment logs view coming soon...", -1)
              ])])) : L.value === "environments" ? (t(), s("div", Vl, [...l[32] || (l[32] = [
                e("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                e("p", null, "Environment management UI coming soon...", -1)
              ])])) : L.value === "model-index" ? (t(), Z(Qn, { key: 8 })) : L.value === "settings" ? (t(), s("div", Pl, [...l[33] || (l[33] = [
                e("h3", { class: "view-title" }, "SETTINGS", -1),
                e("p", null, "Settings UI coming soon...", -1)
              ])])) : L.value === "debug-workspace" ? (t(), s("div", Hl, [...l[34] || (l[34] = [
                e("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                e("p", null, "Workspace logs view coming soon...", -1)
              ])])) : L.value === "export" ? (t(), s("div", Gl, [
                l[36] || (l[36] = e("h3", { class: "view-title" }, "EXPORT", -1)),
                e("button", {
                  class: "export-btn",
                  onClick: Ve
                }, [...l[35] || (l[35] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  W(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : L.value === "import" ? (t(), s("div", Kl, [...l[37] || (l[37] = [
                e("h3", { class: "view-title" }, "IMPORT", -1),
                e("p", null, "Import UI coming soon...", -1)
              ])])) : L.value === "remotes" ? (t(), s("div", jl, [...l[38] || (l[38] = [
                e("h3", { class: "view-title" }, "REMOTES", -1),
                e("p", null, "Git remotes UI coming soon...", -1)
              ])])) : m("", !0)
            ], 64))
          ])
        ]),
        H.value ? (t(), Z(pl, {
          key: 0,
          commit: H.value,
          onClose: l[16] || (l[16] = (D) => H.value = null),
          onCheckout: te,
          onCreateBranch: Ue
        }, null, 8, ["commit"])) : m("", !0),
        R.value ? (t(), Z(kl, {
          key: 1,
          title: R.value.title,
          message: R.value.message,
          details: R.value.details,
          warning: R.value.warning,
          confirmLabel: R.value.confirmLabel,
          cancelLabel: R.value.cancelLabel,
          secondaryLabel: R.value.secondaryLabel,
          secondaryAction: R.value.secondaryAction,
          destructive: R.value.destructive,
          onConfirm: R.value.onConfirm,
          onCancel: l[17] || (l[17] = (D) => R.value = null),
          onSecondary: R.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : m("", !0),
        K.value ? (t(), s("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: l[19] || (l[19] = me((D) => K.value = !1, ["self"]))
        }, [
          e("div", Fl, [
            e("div", ql, [
              l[40] || (l[40] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: l[18] || (l[18] = (D) => K.value = !1)
              }, [...l[39] || (l[39] = [
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
            e("div", Yl, [
              l[41] || (l[41] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Zl, [
                (t(!0), s(U, null, P(X.value, (D) => (t(), s("div", {
                  key: D.name,
                  class: V(["env-item", { current: D.is_current }])
                }, [
                  e("div", Xl, [
                    e("div", Jl, [
                      e("span", Ql, a(D.is_current ? "●" : "○"), 1),
                      e("span", er, a(D.name), 1),
                      D.current_branch ? (t(), s("span", tr, "(" + a(D.current_branch) + ")", 1)) : m("", !0),
                      D.is_current ? (t(), s("span", or, "CURRENT")) : m("", !0)
                    ]),
                    e("div", sr, a(D.workflow_count) + " workflows • " + a(D.node_count) + " nodes ", 1)
                  ]),
                  D.is_current ? m("", !0) : (t(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ar) => Ae(D.name)
                  }, " SWITCH ", 8, ar))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : m("", !0),
        e("div", nr, [
          Y(je, { name: "toast" }, {
            default: N(() => [
              (t(!0), s(U, null, P(y.value, (D) => (t(), s("div", {
                key: D.id,
                class: V(["toast", D.type])
              }, [
                e("span", lr, a(p(D.type)), 1),
                e("span", rr, a(D.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), cr = /* @__PURE__ */ Q(ir, [["__scopeId", "data-v-315c8db1"]]), dr = { class: "base-textarea-wrapper" }, ur = ["value", "rows", "placeholder", "disabled", "maxlength"], mr = {
  key: 0,
  class: "base-textarea-count"
}, gr = /* @__PURE__ */ J({
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
  setup(o) {
    return (h, i) => (t(), s("div", dr, [
      e("textarea", {
        value: o.modelValue,
        rows: o.rows,
        placeholder: o.placeholder,
        disabled: o.disabled,
        maxlength: o.maxLength,
        class: "base-textarea",
        onInput: i[0] || (i[0] = (r) => h.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          i[1] || (i[1] = we(me((r) => h.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          i[2] || (i[2] = we(me((r) => h.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, ur),
      o.showCharCount && o.maxLength ? (t(), s("div", mr, a(o.modelValue.length) + " / " + a(o.maxLength), 1)) : m("", !0)
    ]));
  }
}), hr = /* @__PURE__ */ Q(gr, [["__scopeId", "data-v-5516e6fc"]]), vr = { class: "commit-popover" }, fr = { class: "popover-header" }, pr = { class: "popover-body" }, yr = {
  key: 0,
  class: "changes-summary"
}, br = {
  key: 0,
  class: "change-item"
}, wr = {
  key: 1,
  class: "change-item"
}, _r = {
  key: 2,
  class: "change-item"
}, kr = {
  key: 3,
  class: "change-item"
}, xr = {
  key: 4,
  class: "change-item"
}, $r = {
  key: 1,
  class: "no-changes"
}, Cr = {
  key: 2,
  class: "loading"
}, Sr = { class: "message-section" }, Er = { class: "popover-footer" }, Lr = /* @__PURE__ */ J({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(o, { emit: h }) {
    const i = o, r = h, { commit: b } = ce(), c = k(""), g = k(!1), w = k(null), v = T(() => {
      if (!i.status) return !1;
      const C = i.status.workflows;
      return C.new.length > 0 || C.modified.length > 0 || C.deleted.length > 0 || i.status.has_changes;
    });
    async function S() {
      var C, u, O;
      if (!(!v.value || !c.value.trim() || g.value)) {
        g.value = !0, w.value = null;
        try {
          const B = await b(c.value.trim());
          B.status === "success" ? (w.value = {
            type: "success",
            message: `Committed: ${((C = B.summary) == null ? void 0 : C.new) || 0} new, ${((u = B.summary) == null ? void 0 : u.modified) || 0} modified, ${((O = B.summary) == null ? void 0 : O.deleted) || 0} deleted`
          }, c.value = "", setTimeout(() => r("committed"), 1e3)) : B.status === "no_changes" ? w.value = { type: "error", message: "No changes to commit" } : w.value = { type: "error", message: B.message || "Commit failed" };
        } catch (B) {
          w.value = { type: "error", message: B instanceof Error ? B.message : "Commit failed" };
        } finally {
          g.value = !1;
        }
      }
    }
    return (C, u) => (t(), s("div", vr, [
      e("div", fr, [
        u[4] || (u[4] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: u[0] || (u[0] = (O) => r("close"))
        }, [...u[3] || (u[3] = [
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
      e("div", pr, [
        o.status && v.value ? (t(), s("div", yr, [
          o.status.workflows.new.length ? (t(), s("div", br, [
            u[5] || (u[5] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(o.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : m("", !0),
          o.status.workflows.modified.length ? (t(), s("div", wr, [
            u[6] || (u[6] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(o.status.workflows.modified.length) + " modified", 1)
          ])) : m("", !0),
          o.status.workflows.deleted.length ? (t(), s("div", _r, [
            u[7] || (u[7] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(o.status.workflows.deleted.length) + " deleted", 1)
          ])) : m("", !0),
          o.status.git_changes.nodes_added.length ? (t(), s("div", kr, [
            u[8] || (u[8] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(o.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : m("", !0),
          o.status.git_changes.nodes_removed.length ? (t(), s("div", xr, [
            u[9] || (u[9] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(o.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : m("", !0)
        ])) : o.status ? (t(), s("div", $r, " No changes to commit ")) : (t(), s("div", Cr, " Loading... ")),
        e("div", Sr, [
          Y(hr, {
            modelValue: c.value,
            "onUpdate:modelValue": u[1] || (u[1] = (O) => c.value = O),
            placeholder: v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || g.value,
            rows: 3,
            onCtrlEnter: S
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        w.value ? (t(), s("div", {
          key: 3,
          class: V(["result", w.value.type])
        }, a(w.value.message), 3)) : m("", !0)
      ]),
      e("div", Er, [
        Y(se, {
          variant: "secondary",
          onClick: u[2] || (u[2] = (O) => r("close"))
        }, {
          default: N(() => [...u[10] || (u[10] = [
            W(" Cancel ", -1)
          ])]),
          _: 1
        }),
        Y(se, {
          variant: "primary",
          disabled: !v.value || !c.value.trim() || g.value,
          loading: g.value,
          onClick: S
        }, {
          default: N(() => [
            W(a(g.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Mr = /* @__PURE__ */ Q(Lr, [["__scopeId", "data-v-4f587977"]]), zr = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .commit-item{border-radius:var(--cg-radius-md);border-left:3px solid var(--cg-color-border-subtle);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', Ir = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Or = {
  comfy: zr,
  phosphor: Ir
}, Le = "comfy", Ne = "comfygit-theme";
let ue = null, Be = Le;
function Dr() {
  try {
    const o = localStorage.getItem(Ne);
    if (o && (o === "comfy" || o === "phosphor"))
      return o;
  } catch {
  }
  return Le;
}
function Re(o = Le) {
  ue && ue.remove(), ue = document.createElement("style"), ue.id = "comfygit-theme-styles", ue.setAttribute("data-theme", o), ue.textContent = Or[o], document.head.appendChild(ue), document.body.setAttribute("data-comfygit-theme", o), Be = o;
  try {
    localStorage.setItem(Ne, o);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${o}`);
}
function Tr() {
  return Be;
}
function Nr(o) {
  Re(o);
}
const Me = document.createElement("link");
Me.rel = "stylesheet";
Me.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Me);
const Br = Dr();
Re(Br);
window.ComfyGit = {
  setTheme: (o) => {
    console.log(`[ComfyGit] Switching to theme: ${o}`), Nr(o);
  },
  getTheme: () => {
    const o = Tr();
    return console.log(`[ComfyGit] Current theme: ${o}`), o;
  }
};
let ne = null, ae = null, fe = null;
const ge = k(null);
async function Ee() {
  var o;
  if (!((o = window.app) != null && o.api)) return null;
  try {
    const h = await window.app.api.fetchApi("/v2/comfygit/status");
    h.ok && (ge.value = await h.json());
  } catch {
  }
}
function Rr() {
  if (!ge.value) return !1;
  const o = ge.value.workflows;
  return o.new.length > 0 || o.modified.length > 0 || o.deleted.length > 0 || ge.value.has_changes;
}
function Wr() {
  ne && ne.remove(), ne = document.createElement("div"), ne.className = "comfygit-panel-overlay";
  const o = document.createElement("div");
  o.className = "comfygit-panel-container", ne.appendChild(o), ne.addEventListener("click", (r) => {
    r.target === ne && Se();
  });
  const h = (r) => {
    r.key === "Escape" && (Se(), document.removeEventListener("keydown", h));
  };
  document.addEventListener("keydown", h), Oe({
    render: () => De(cr, {
      onClose: Se,
      onStatusUpdate: (r) => {
        ge.value = r, _e();
      }
    })
  }).mount(o), document.body.appendChild(ne);
}
function Se() {
  ne && (ne.remove(), ne = null);
}
function Ur(o) {
  he(), ae = document.createElement("div"), ae.className = "comfygit-commit-popover-container";
  const h = o.getBoundingClientRect();
  ae.style.position = "fixed", ae.style.top = `${h.bottom + 8}px`, ae.style.right = `${window.innerWidth - h.right}px`, ae.style.zIndex = "10001";
  const i = (b) => {
    ae && !ae.contains(b.target) && b.target !== o && (he(), document.removeEventListener("mousedown", i));
  };
  setTimeout(() => document.addEventListener("mousedown", i), 0);
  const r = (b) => {
    b.key === "Escape" && (he(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), fe = Oe({
    render: () => De(Mr, {
      status: ge.value,
      onClose: he,
      onCommitted: () => {
        he(), Ee().then(_e);
      }
    })
  }), fe.mount(ae), document.body.appendChild(ae);
}
function he() {
  fe && (fe.unmount(), fe = null), ae && (ae.remove(), ae = null);
}
let le = null;
function _e() {
  if (!le) return;
  const o = le.querySelector(".commit-indicator");
  o && (o.style.display = Rr() ? "block" : "none");
}
const We = document.createElement("style");
We.textContent = `
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
document.head.appendChild(We);
Ce.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var i, r;
    const o = document.createElement("div");
    o.className = "comfygit-btn-group";
    const h = document.createElement("button");
    h.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", h.textContent = "ComfyGit", h.title = "ComfyGit Control Panel", h.onclick = Wr, le = document.createElement("button"), le.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", le.innerHTML = 'Commit <span class="commit-indicator"></span>', le.title = "Quick Commit", le.onclick = () => Ur(le), o.appendChild(h), o.appendChild(le), (r = (i = Ce.menu) == null ? void 0 : i.settingsGroup) != null && r.element && (Ce.menu.settingsGroup.element.before(o), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Ee(), _e(), setInterval(async () => {
      await Ee(), _e();
    }, 3e4);
  }
});
