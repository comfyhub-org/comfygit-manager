import { app as Se } from "../../scripts/app.js";
import { defineComponent as X, computed as I, createElementBlock as s, openBlock as t, createElementVNode as e, createCommentVNode as g, toDisplayString as n, ref as w, nextTick as Ge, withDirectives as $e, withKeys as _e, vModelText as xe, Fragment as N, renderList as V, normalizeClass as U, withModifiers as ye, onMounted as re, onUnmounted as Ke, createBlock as q, Teleport as je, renderSlot as fe, resolveDynamicComponent as Fe, withCtx as T, createVNode as F, createTextVNode as A, TransitionGroup as qe, createApp as De, h as Te } from "vue";
const Ye = { class: "status-section" }, Ze = { class: "status-grid" }, Xe = { class: "status-column" }, Je = {
  key: 0,
  class: "status-item"
}, Qe = { class: "count new" }, et = {
  key: 1,
  class: "status-item"
}, tt = { class: "count modified" }, ot = {
  key: 2,
  class: "status-item"
}, st = { class: "count deleted" }, at = { class: "status-item synced-item" }, nt = { class: "count synced" }, lt = { class: "status-column" }, rt = {
  key: 0,
  class: "status-item"
}, it = { class: "count new" }, ct = {
  key: 1,
  class: "status-item"
}, dt = { class: "count deleted" }, ut = {
  key: 2,
  class: "status-item"
}, mt = {
  key: 3,
  class: "status-item ok"
}, gt = {
  key: 0,
  class: "warning-box"
}, ht = {
  key: 1,
  class: "warning-box error"
}, vt = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(o) {
    const v = o, c = I(() => {
      const p = v.status.git_changes;
      return p.nodes_added.length > 0 || p.nodes_removed.length > 0 || p.workflow_changes || p.has_other_changes;
    }), i = I(() => {
      const p = v.status.git_changes, d = v.status.workflows;
      return (p.workflow_changes || p.has_other_changes) && d.new.length === 0 && d.modified.length === 0 && d.deleted.length === 0;
    });
    return (p, d) => (t(), s("div", Ye, [
      d[18] || (d[18] = e("h3", { class: "section-title" }, "Status", -1)),
      e("div", Ze, [
        e("div", Xe, [
          d[8] || (d[8] = e("h4", { class: "column-title" }, "Workflows", -1)),
          o.status.workflows.new.length ? (t(), s("div", Je, [
            d[0] || (d[0] = e("span", { class: "icon" }, "●", -1)),
            e("span", Qe, n(o.status.workflows.new.length), 1),
            d[1] || (d[1] = e("span", { class: "label" }, "new", -1))
          ])) : g("", !0),
          o.status.workflows.modified.length ? (t(), s("div", et, [
            d[2] || (d[2] = e("span", { class: "icon" }, "●", -1)),
            e("span", tt, n(o.status.workflows.modified.length), 1),
            d[3] || (d[3] = e("span", { class: "label" }, "modified", -1))
          ])) : g("", !0),
          o.status.workflows.deleted.length ? (t(), s("div", ot, [
            d[4] || (d[4] = e("span", { class: "icon" }, "●", -1)),
            e("span", st, n(o.status.workflows.deleted.length), 1),
            d[5] || (d[5] = e("span", { class: "label" }, "deleted", -1))
          ])) : g("", !0),
          e("div", at, [
            d[6] || (d[6] = e("span", { class: "icon synced" }, "✓", -1)),
            e("span", nt, n(o.status.workflows.synced.length), 1),
            d[7] || (d[7] = e("span", { class: "label" }, "synced", -1))
          ])
        ]),
        e("div", lt, [
          d[15] || (d[15] = e("h4", { class: "column-title" }, "Git Changes", -1)),
          o.status.git_changes.nodes_added.length ? (t(), s("div", rt, [
            d[9] || (d[9] = e("span", { class: "icon" }, "●", -1)),
            e("span", it, n(o.status.git_changes.nodes_added.length), 1),
            d[10] || (d[10] = e("span", { class: "label" }, "node added", -1))
          ])) : g("", !0),
          o.status.git_changes.nodes_removed.length ? (t(), s("div", ct, [
            d[11] || (d[11] = e("span", { class: "icon" }, "●", -1)),
            e("span", dt, n(o.status.git_changes.nodes_removed.length), 1),
            d[12] || (d[12] = e("span", { class: "label" }, "node removed", -1))
          ])) : g("", !0),
          i.value ? (t(), s("div", ut, [...d[13] || (d[13] = [
            e("span", { class: "icon" }, "●", -1),
            e("span", { class: "count modified" }, "●", -1),
            e("span", { class: "label" }, "other changes", -1)
          ])])) : g("", !0),
          c.value ? g("", !0) : (t(), s("div", mt, [...d[14] || (d[14] = [
            e("span", { class: "icon" }, "✓", -1),
            e("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      o.status.missing_models_count > 0 ? (t(), s("div", gt, [
        d[16] || (d[16] = e("span", { class: "warning-icon" }, "⚠", -1)),
        e("span", null, n(o.status.missing_models_count) + " missing model(s)", 1)
      ])) : g("", !0),
      o.status.comparison.is_synced ? g("", !0) : (t(), s("div", ht, [...d[17] || (d[17] = [
        e("span", { class: "warning-icon" }, "⚠", -1),
        e("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), J = (o, v) => {
  const c = o.__vccOpts || o;
  for (const [i, p] of v)
    c[i] = p;
  return c;
}, ft = /* @__PURE__ */ J(vt, [["__scopeId", "data-v-a72d538b"]]), pt = { class: "branch-section" }, yt = { class: "section-header" }, bt = {
  key: 0,
  class: "create-branch-row"
}, wt = ["disabled"], _t = {
  key: 1,
  class: "empty"
}, kt = {
  key: 2,
  class: "branch-list"
}, $t = { class: "branch-indicator" }, xt = { class: "branch-name" }, Ct = ["onClick"], St = {
  key: 1,
  class: "current-label"
}, Et = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(o, { emit: v }) {
    const c = v, i = w(!1), p = w(""), d = w(null);
    function h() {
      p.value.trim() && (c("create", p.value.trim()), y());
    }
    function y() {
      i.value = !1, p.value = "";
    }
    return Ge(() => {
      i.value && d.value && d.value.focus();
    }), (f, $) => (t(), s("div", pt, [
      e("div", yt, [
        $[3] || ($[3] = e("h3", { class: "view-title" }, "BRANCHES", -1)),
        e("button", {
          class: "add-btn",
          onClick: $[0] || ($[0] = (_) => i.value = !0),
          title: "New Branch"
        }, [...$[2] || ($[2] = [
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
      i.value ? (t(), s("div", bt, [
        $e(e("input", {
          ref_key: "createInput",
          ref: d,
          "onUpdate:modelValue": $[1] || ($[1] = (_) => p.value = _),
          class: "branch-input",
          placeholder: "Branch name...",
          onKeyup: [
            _e(h, ["enter"]),
            _e(y, ["escape"])
          ]
        }, null, 544), [
          [xe, p.value]
        ]),
        e("button", {
          class: "action-btn create",
          onClick: h,
          disabled: !p.value.trim()
        }, " Create ", 8, wt),
        e("button", {
          class: "action-btn cancel",
          onClick: y
        }, " Cancel ")
      ])) : g("", !0),
      o.branches.length === 0 ? (t(), s("div", _t, " No branches found ")) : (t(), s("div", kt, [
        (t(!0), s(N, null, V(o.branches, (_) => (t(), s("div", {
          key: _.name,
          class: U(["branch-item", { current: _.is_current }])
        }, [
          e("span", $t, n(_.is_current ? "●" : "○"), 1),
          e("span", xt, n(_.name), 1),
          _.is_current ? (t(), s("span", St, "current")) : (t(), s("button", {
            key: 0,
            class: "switch-btn",
            onClick: (m) => f.$emit("switch", _.name)
          }, " Switch ", 8, Ct))
        ], 2))), 128))
      ]))
    ]));
  }
}), Lt = /* @__PURE__ */ J(Et, [["__scopeId", "data-v-e2bd816d"]]), Mt = { class: "history-section" }, zt = {
  key: 0,
  class: "empty"
}, It = {
  key: 1,
  class: "commit-list"
}, Ot = ["onClick"], Dt = { class: "commit-hash" }, Tt = { class: "commit-message" }, Nt = { class: "commit-date" }, Bt = ["onClick"], Rt = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(o) {
    return (v, c) => (t(), s("div", Mt, [
      c[2] || (c[2] = e("h3", { class: "view-title" }, "HISTORY", -1)),
      o.commits.length === 0 ? (t(), s("div", zt, " No commits yet ")) : (t(), s("div", It, [
        (t(!0), s(N, null, V(o.commits, (i) => {
          var p;
          return t(), s("div", {
            key: i.hash,
            class: "commit-item",
            onClick: (d) => v.$emit("select", i)
          }, [
            e("span", Dt, n(i.short_hash || ((p = i.hash) == null ? void 0 : p.slice(0, 7))), 1),
            e("span", Tt, n(i.message), 1),
            e("span", Nt, n(i.date_relative || i.relative_date), 1),
            e("div", {
              class: "commit-actions",
              onClick: c[0] || (c[0] = ye(() => {
              }, ["stop"]))
            }, [
              e("button", {
                class: "action-btn",
                onClick: (d) => v.$emit("checkout", i),
                title: "Checkout this commit"
              }, [...c[1] || (c[1] = [
                e("svg", {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                ], -1)
              ])], 8, Bt)
            ])
          ], 8, Ot);
        }), 128))
      ]))
    ]));
  }
}), Wt = /* @__PURE__ */ J(Rt, [["__scopeId", "data-v-97388106"]]), Oe = [
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
  ...Array(12).fill(null).map((o, v) => ({
    name: `synced-workflow-${v + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + v,
    model_count: 1 + v % 3,
    sync_state: "synced"
  }))
], Ut = {
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
}, Ne = [
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
], At = [
  ...Ne,
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
], Vt = [
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
], we = [
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
], K = {
  // Environment Management
  getEnvironments: async () => (await j(300), [
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
    await j(500), console.log(`[MOCK] Switching to environment: ${o}`);
  },
  createEnvironment: async (o, v, c) => {
    await j(1e3), console.log(`[MOCK] Creating environment: ${o} with backend ${v}`, c ? `cloned from ${c}` : "");
  },
  deleteEnvironment: async (o) => {
    await j(500), console.log(`[MOCK] Deleting environment: ${o}`);
  },
  // Workflow Management
  getWorkflows: async () => (await j(400), Oe),
  getWorkflowDetails: async (o) => (await j(300), Ut[o] || {
    name: o,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (o) => (await j(800), {
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
  installWorkflowDeps: async (o, v, c) => {
    await j(2e3), console.log(`[MOCK] Installing deps for ${o}: nodes=${v}, models=${c}`);
  },
  setModelImportance: async (o, v, c) => {
    await j(200), console.log(`[MOCK] Setting ${v} importance to ${c} in ${o}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await j(350), Ne),
  getWorkspaceModels: async () => (await j(400), At),
  updateModelSource: async (o, v) => {
    await j(300), console.log(`[MOCK] Updating source for ${o}: ${v}`);
  },
  deleteModel: async (o) => {
    await j(500), console.log(`[MOCK] Deleting model: ${o}`);
  },
  downloadModel: async (o) => {
    await j(3e3), console.log("[MOCK] Downloading model:", o);
  },
  // Settings & Debug
  getConfig: async () => (await j(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (o) => {
    await j(300), console.log("[MOCK] Updating config:", o);
  },
  getEnvironmentLogs: async (o, v) => (await j(250), (o ? we.filter((i) => i.level === o) : we).slice(0, v || 100)),
  getWorkspaceLogs: async (o, v) => {
    await j(300);
    const c = [...we, ...we.map((p) => ({
      ...p,
      context: { ...p.context, environment: "testing" }
    }))];
    return (o ? c.filter((p) => p.level === o) : c).slice(0, v || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await j(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: Oe.filter((o) => o.status === "synced").map((o) => o.name),
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
  getCommitHistory: async (o = 10) => (await j(300), Vt.slice(0, o)),
  getBranches: async () => (await j(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  })
};
function j(o) {
  return new Promise((v) => setTimeout(v, o));
}
function ie() {
  const o = w(!1), v = w(null);
  async function c(E, W) {
    var ge;
    if (!((ge = window.app) != null && ge.api))
      throw new Error("ComfyUI API not available");
    const ee = await window.app.api.fetchApi(E, W);
    if (!ee.ok) {
      const be = await ee.json().catch(() => ({}));
      throw new Error(be.error || be.message || `Request failed: ${ee.status}`);
    }
    return ee.json();
  }
  async function i() {
    return K.getStatus();
  }
  async function p(E, W = !1) {
    return c("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: E, allow_issues: W })
    });
  }
  async function d(E = 10, W = 0) {
    {
      const ee = await K.getCommitHistory(E);
      return {
        commits: ee,
        total: ee.length,
        offset: W
      };
    }
  }
  async function h(E) {
    return c("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: E })
    });
  }
  async function y() {
    return K.getBranches();
  }
  async function f(E) {
    return c(`/v2/comfygit/commit/${E}`);
  }
  async function $(E, W = !1) {
    return c("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: E, force: W })
    });
  }
  async function _(E, W = "HEAD") {
    return c("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: E, start_point: W })
    });
  }
  async function m(E, W = !1) {
    return c("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: E, force: W })
    });
  }
  async function S() {
    return K.getEnvironments();
  }
  async function O(E) {
    return K.switchEnvironment(E);
  }
  async function Y() {
    return null;
  }
  async function B(E, W, ee) {
    return await K.createEnvironment(E, W, ee), { status: "success" };
  }
  async function x(E) {
    return await K.deleteEnvironment(E), { status: "success" };
  }
  async function M() {
    return K.getWorkflows();
  }
  async function P(E) {
    return K.getWorkflowDetails(E);
  }
  async function Z(E) {
    return K.resolveWorkflow(E);
  }
  async function L(E, W, ee) {
    return await K.installWorkflowDeps(E, W, ee), { status: "success" };
  }
  async function u(E, W, ee) {
    return K.setModelImportance(E, W, ee);
  }
  async function a() {
    return K.getEnvironmentModels();
  }
  async function r() {
    return K.getWorkspaceModels();
  }
  async function b(E, W) {
    return K.updateModelSource(E, W);
  }
  async function H(E) {
    return K.deleteModel(E);
  }
  async function ce(E) {
    return await K.downloadModel(E), { status: "success" };
  }
  async function C() {
    return K.getConfig();
  }
  async function D(E) {
    return K.updateConfig(E);
  }
  async function R(E, W) {
    return K.getEnvironmentLogs(E, W);
  }
  async function se(E, W) {
    return K.getWorkspaceLogs(E, W);
  }
  return {
    isLoading: o,
    error: v,
    getStatus: i,
    commit: p,
    getHistory: d,
    exportEnv: h,
    // Git Operations
    getBranches: y,
    getCommitDetail: f,
    checkout: $,
    createBranch: _,
    switchBranch: m,
    // Environment Management
    getEnvironments: S,
    switchEnvironment: O,
    getSwitchProgress: Y,
    createEnvironment: B,
    deleteEnvironment: x,
    // Workflow Management
    getWorkflows: M,
    getWorkflowDetails: P,
    resolveWorkflow: Z,
    installWorkflowDeps: L,
    setModelImportance: u,
    // Model Management
    getEnvironmentModels: a,
    getWorkspaceModels: r,
    updateModelSource: b,
    deleteModel: H,
    downloadModel: ce,
    // Settings
    getConfig: C,
    updateConfig: D,
    // Debug/Logs
    getEnvironmentLogs: R,
    getWorkspaceLogs: se
  };
}
const Ht = { class: "base-modal-header" }, Pt = {
  key: 0,
  class: "base-modal-title"
}, Gt = { class: "base-modal-body" }, Kt = {
  key: 0,
  class: "base-modal-loading"
}, jt = {
  key: 1,
  class: "base-modal-error"
}, Ft = {
  key: 0,
  class: "base-modal-footer"
}, qt = /* @__PURE__ */ X({
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
  setup(o, { emit: v }) {
    const c = o, i = v;
    function p() {
      c.closeOnOverlayClick && i("close");
    }
    function d(h) {
      h.key === "Escape" && i("close");
    }
    return re(() => {
      document.addEventListener("keydown", d), document.body.style.overflow = "hidden";
    }), Ke(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = "";
    }), (h, y) => (t(), q(je, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: U(["base-modal-content", o.size]),
          onClick: y[1] || (y[1] = ye(() => {
          }, ["stop"]))
        }, [
          e("div", Ht, [
            fe(h.$slots, "header", {}, () => [
              o.title ? (t(), s("h3", Pt, n(o.title), 1)) : g("", !0)
            ], !0),
            o.showCloseButton ? (t(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: y[0] || (y[0] = (f) => h.$emit("close"))
            }, [...y[2] || (y[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : g("", !0)
          ]),
          e("div", Gt, [
            o.loading ? (t(), s("div", Kt, "Loading...")) : o.error ? (t(), s("div", jt, n(o.error), 1)) : fe(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (t(), s("div", Ft, [
            fe(h.$slots, "footer", {}, void 0, !0)
          ])) : g("", !0)
        ], 2)
      ])
    ]));
  }
}), Ce = /* @__PURE__ */ J(qt, [["__scopeId", "data-v-700d367b"]]), Yt = ["type", "disabled"], Zt = {
  key: 0,
  class: "spinner"
}, Xt = /* @__PURE__ */ X({
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
    return (v, c) => (t(), s("button", {
      type: o.type,
      disabled: o.disabled || o.loading,
      class: U(["base-btn", o.variant, o.size, { "full-width": o.fullWidth, loading: o.loading }]),
      onClick: c[0] || (c[0] = (i) => v.$emit("click", i))
    }, [
      o.loading ? (t(), s("span", Zt)) : g("", !0),
      fe(v.$slots, "default", {}, void 0, !0)
    ], 10, Yt));
  }
}), te = /* @__PURE__ */ J(Xt, [["__scopeId", "data-v-f3452606"]]), Jt = {
  key: 0,
  class: "base-title-count"
}, Qt = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(o) {
    return (v, c) => (t(), q(Fe(`h${o.level}`), {
      class: U(["base-title", o.variant])
    }, {
      default: T(() => [
        fe(v.$slots, "default", {}, void 0, !0),
        o.count !== void 0 ? (t(), s("span", Jt, "(" + n(o.count) + ")", 1)) : g("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), le = /* @__PURE__ */ J(Qt, [["__scopeId", "data-v-5a01561d"]]), eo = ["value", "disabled"], to = {
  key: 0,
  value: "",
  disabled: ""
}, oo = ["value"], so = {
  key: 0,
  class: "base-select-error"
}, ao = /* @__PURE__ */ X({
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
    function v(i) {
      return typeof i == "string" ? i : i.value;
    }
    function c(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, p) => (t(), s("div", {
      class: U(["base-select-wrapper", { "full-width": o.fullWidth, error: !!o.error }])
    }, [
      e("select", {
        value: o.modelValue,
        disabled: o.disabled,
        class: U(["base-select", { error: !!o.error }]),
        onChange: p[0] || (p[0] = (d) => i.$emit("update:modelValue", d.target.value))
      }, [
        o.placeholder ? (t(), s("option", to, n(o.placeholder), 1)) : g("", !0),
        (t(!0), s(N, null, V(o.options, (d) => (t(), s("option", {
          key: v(d),
          value: v(d)
        }, n(c(d)), 9, oo))), 128))
      ], 42, eo),
      o.error ? (t(), s("span", so, n(o.error), 1)) : g("", !0)
    ], 2));
  }
}), no = /* @__PURE__ */ J(ao, [["__scopeId", "data-v-7436d745"]]), lo = { class: "detail-section" }, ro = {
  key: 0,
  class: "empty-message"
}, io = { class: "model-header" }, co = { class: "model-name" }, uo = { class: "model-details" }, mo = { class: "model-row" }, go = { class: "model-row" }, ho = {
  key: 0,
  class: "model-row"
}, vo = { class: "value" }, fo = {
  key: 1,
  class: "model-row"
}, po = { class: "value" }, yo = {
  key: 0,
  class: "model-actions"
}, bo = { class: "detail-section" }, wo = {
  key: 0,
  class: "empty-message"
}, _o = { class: "node-name" }, ko = {
  key: 0,
  class: "node-version"
}, $o = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(o, { emit: v }) {
    const c = o, i = v, { getWorkflowDetails: p, setModelImportance: d } = ie(), h = w(null), y = w(!1), f = w(null), $ = w(!1), _ = w({}), m = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function S() {
      y.value = !0, f.value = null;
      try {
        h.value = await p(c.workflowName);
      } catch (B) {
        f.value = B instanceof Error ? B.message : "Failed to load workflow details";
      } finally {
        y.value = !1;
      }
    }
    function O(B, x) {
      _.value[B] = x, $.value = !0;
    }
    async function Y() {
      if (!$.value) {
        i("close");
        return;
      }
      y.value = !0, f.value = null;
      try {
        for (const [B, x] of Object.entries(_.value))
          await d(c.workflowName, B, x);
        i("close");
      } catch (B) {
        f.value = B instanceof Error ? B.message : "Failed to save changes";
      } finally {
        y.value = !1;
      }
    }
    return re(S), (B, x) => (t(), q(Ce, {
      title: `WORKFLOW DETAILS: ${o.workflowName}`,
      size: "lg",
      loading: y.value,
      error: f.value || void 0,
      onClose: x[2] || (x[2] = (M) => i("close"))
    }, {
      body: T(() => [
        h.value ? (t(), s(N, { key: 0 }, [
          e("section", lo, [
            F(le, { variant: "section" }, {
              default: T(() => [
                A("MODELS USED (" + n(h.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.models.length === 0 ? (t(), s("div", ro, " No models used in this workflow ")) : g("", !0),
            (t(!0), s(N, null, V(h.value.models, (M) => (t(), s("div", {
              key: M.hash,
              class: "model-card"
            }, [
              e("div", io, [
                x[3] || (x[3] = e("span", { class: "model-icon" }, "📦", -1)),
                e("span", co, n(M.filename), 1)
              ]),
              e("div", uo, [
                e("div", mo, [
                  x[4] || (x[4] = e("span", { class: "label" }, "Status:", -1)),
                  e("span", {
                    class: U(["value", M.status === "available" ? "success" : "error"])
                  }, n(M.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                e("div", go, [
                  x[5] || (x[5] = e("span", { class: "label" }, "Importance:", -1)),
                  F(no, {
                    "model-value": _.value[M.hash] || M.importance,
                    options: m,
                    "onUpdate:modelValue": (P) => O(M.hash, P)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                M.node_type ? (t(), s("div", ho, [
                  x[6] || (x[6] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", vo, n(M.node_type) + " (Node " + n(M.node_id) + ")", 1)
                ])) : g("", !0),
                M.size_mb ? (t(), s("div", fo, [
                  x[7] || (x[7] = e("span", { class: "label" }, "Size:", -1)),
                  e("span", po, n(M.size_mb) + " MB", 1)
                ])) : g("", !0)
              ]),
              M.status === "missing" ? (t(), s("div", yo, [
                F(te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: x[0] || (x[0] = (P) => i("resolve"))
                }, {
                  default: T(() => [...x[8] || (x[8] = [
                    A(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : g("", !0)
            ]))), 128))
          ]),
          x[9] || (x[9] = e("div", { class: "info-box" }, [
            e("div", { class: "info-title" }, "Importance options:"),
            e("ul", { class: "info-list" }, [
              e("li", null, [
                e("strong", null, "Required"),
                A(" — Must have for workflow to run")
              ]),
              e("li", null, [
                e("strong", null, "Flexible"),
                A(" — Workflow adapts if missing")
              ]),
              e("li", null, [
                e("strong", null, "Optional"),
                A(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          e("section", bo, [
            F(le, { variant: "section" }, {
              default: T(() => [
                A("NODES USED (" + n(h.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.nodes.length === 0 ? (t(), s("div", wo, " No custom nodes used in this workflow ")) : g("", !0),
            (t(!0), s(N, null, V(h.value.nodes, (M) => (t(), s("div", {
              key: M.name,
              class: "node-item"
            }, [
              e("span", {
                class: U(["node-status", M.installed ? "installed" : "missing"])
              }, n(M.installed ? "✓" : "✕"), 3),
              e("span", _o, n(M.name), 1),
              M.version ? (t(), s("span", ko, "v" + n(M.version), 1)) : g("", !0)
            ]))), 128))
          ])
        ], 64)) : g("", !0)
      ]),
      footer: T(() => [
        F(te, {
          variant: "secondary",
          onClick: x[1] || (x[1] = (M) => i("close"))
        }, {
          default: T(() => [...x[10] || (x[10] = [
            A(" Close ", -1)
          ])]),
          _: 1
        }),
        $.value ? (t(), q(te, {
          key: 0,
          variant: "primary",
          onClick: Y
        }, {
          default: T(() => [...x[11] || (x[11] = [
            A(" Save Changes ", -1)
          ])]),
          _: 1
        })) : g("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), xo = /* @__PURE__ */ J($o, [["__scopeId", "data-v-6ce9a41c"]]), Co = {
  key: 0,
  class: "resolve-section"
}, So = { class: "resolve-card success-card" }, Eo = { class: "items-list" }, Lo = { class: "item-info" }, Mo = { class: "item-name" }, zo = {
  key: 0,
  class: "item-meta"
}, Io = { class: "match-type" }, Oo = { class: "source" }, Do = {
  key: 1,
  class: "resolve-section"
}, To = { class: "resolve-card warning-card" }, No = { class: "items-list" }, Bo = { class: "item-info" }, Ro = { class: "item-name" }, Wo = { class: "item-meta" }, Uo = { key: 0 }, Ao = { key: 1 }, Vo = {
  key: 0,
  class: "item-warning"
}, Ho = {
  key: 0,
  class: "item-action"
}, Po = ["onClick"], Go = {
  key: 2,
  class: "resolve-section"
}, Ko = { class: "info-text" }, jo = { class: "actions-summary" }, Fo = { class: "summary-list" }, qo = { key: 0 }, Yo = { key: 1 }, Zo = { key: 2 }, Xo = {
  key: 0,
  class: "estimated-size"
}, Jo = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(o, { emit: v }) {
    const c = o, i = v, { resolveWorkflow: p, installWorkflowDeps: d } = ie(), h = w(null), y = w(!1), f = w(!1), $ = w(null), _ = I(() => {
      var u;
      return h.value ? ((u = h.value.download_results) == null ? void 0 : u.every((a) => a.can_download)) ?? !1 : !1;
    });
    async function m() {
      y.value = !0, $.value = null;
      try {
        h.value = await p(c.workflowName);
      } catch (u) {
        $.value = u instanceof Error ? u.message : "Failed to analyze workflow";
      } finally {
        y.value = !1;
      }
    }
    function S(u) {
      return !u.possible_matches || u.possible_matches.length === 0 ? null : u.possible_matches.reduce(
        (a, r) => r.match_confidence > a.match_confidence ? r : a
      );
    }
    function O(u) {
      return u >= 0.9 ? "high" : u >= 0.7 ? "medium" : "low";
    }
    function Y(u) {
      const a = S(u);
      return a ? a.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function B(u) {
      var a, r;
      return (r = (a = h.value) == null ? void 0 : a.download_results) == null ? void 0 : r.find((b) => b.model === u);
    }
    function x(u) {
      const a = B(u);
      return (a == null ? void 0 : a.can_download) ?? !1;
    }
    function M(u) {
      const a = B(u);
      return (a == null ? void 0 : a.source_url) || null;
    }
    function P(u) {
      window.open(u, "_blank");
    }
    async function Z() {
      if (!(!h.value || f.value)) {
        f.value = !0, $.value = null;
        try {
          await d(
            c.workflowName,
            h.value.nodes_to_install,
            []
          ), i("install"), i("refresh"), i("close");
        } catch (u) {
          $.value = u instanceof Error ? u.message : "Installation failed";
        } finally {
          f.value = !1;
        }
      }
    }
    async function L() {
      if (!(!h.value || f.value)) {
        f.value = !0, $.value = null;
        try {
          await d(
            c.workflowName,
            h.value.nodes_to_install,
            h.value.models_to_download
          ), i("install"), i("refresh"), i("close");
        } catch (u) {
          $.value = u instanceof Error ? u.message : "Installation failed";
        } finally {
          f.value = !1;
        }
      }
    }
    return re(m), (u, a) => (t(), q(Ce, {
      title: `RESOLVE DEPENDENCIES: ${o.workflowName}`,
      size: "lg",
      loading: y.value,
      error: $.value || void 0,
      onClose: a[1] || (a[1] = (r) => i("close"))
    }, {
      body: T(() => [
        h.value ? (t(), s(N, { key: 0 }, [
          a[5] || (a[5] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          h.value.nodes_unresolved.length > 0 ? (t(), s("section", Co, [
            F(le, { variant: "section" }, {
              default: T(() => [
                A("NODES (" + n(h.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", So, [
              a[2] || (a[2] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "✓"),
                e("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              e("div", Eo, [
                (t(!0), s(N, null, V(h.value.nodes_unresolved, (r) => {
                  var b;
                  return t(), s("div", {
                    key: r.node_type,
                    class: "item"
                  }, [
                    e("div", Lo, [
                      e("div", Mo, n(((b = S(r)) == null ? void 0 : b.package_id) || r.node_type), 1),
                      S(r) ? (t(), s("div", zo, [
                        e("span", {
                          class: U(["confidence-badge", O(S(r).match_confidence)])
                        }, n(Math.round(S(r).match_confidence * 100)) + "% match ", 3),
                        e("span", Io, n(S(r).match_type), 1),
                        e("span", Oo, "Source: " + n(Y(r)), 1)
                      ])) : g("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : g("", !0),
          h.value.models_unresolved.length > 0 ? (t(), s("section", Do, [
            F(le, { variant: "section" }, {
              default: T(() => [
                A("MODELS (" + n(h.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", To, [
              a[3] || (a[3] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "⚠"),
                e("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              e("div", No, [
                (t(!0), s(N, null, V(h.value.models_unresolved, (r) => (t(), s("div", {
                  key: r.filename,
                  class: "item"
                }, [
                  e("div", Bo, [
                    e("div", Ro, n(r.filename), 1),
                    e("div", Wo, [
                      r.expected_category ? (t(), s("span", Uo, "Type: " + n(r.expected_category), 1)) : g("", !0),
                      B(r.filename) ? (t(), s("span", Ao, " Size: ~" + n(B(r.filename).estimated_size_mb) + " MB ", 1)) : g("", !0)
                    ]),
                    x(r.filename) ? g("", !0) : (t(), s("div", Vo, " No auto-download source configured "))
                  ]),
                  M(r.filename) ? (t(), s("div", Ho, [
                    e("button", {
                      class: "link-btn",
                      onClick: (b) => P(M(r.filename))
                    }, " Open Source ↗ ", 8, Po)
                  ])) : g("", !0)
                ]))), 128))
              ])
            ])
          ])) : g("", !0),
          h.value.nodes_resolved.length > 0 || h.value.models_resolved.length > 0 ? (t(), s("section", Go, [
            F(le, { variant: "section" }, {
              default: T(() => [
                A(" ALREADY AVAILABLE (" + n(h.value.nodes_resolved.length + h.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            e("div", Ko, n(h.value.nodes_resolved.length) + " nodes and " + n(h.value.models_resolved.length) + " models are already installed ", 1)
          ])) : g("", !0),
          e("div", jo, [
            a[4] || (a[4] = e("div", { class: "summary-title" }, "This will:", -1)),
            e("ol", Fo, [
              h.value.nodes_to_install.length ? (t(), s("li", qo, " Install " + n(h.value.nodes_to_install.length) + " nodes (~" + n(h.value.estimated_time_seconds) + "s) ", 1)) : g("", !0),
              h.value.nodes_to_install.length ? (t(), s("li", Yo, " Restart ComfyUI to load new nodes ")) : g("", !0),
              h.value.models_to_download.length ? (t(), s("li", Zo, " You'll still need to download " + n(h.value.models_to_download.length) + " model(s) manually ", 1)) : g("", !0)
            ]),
            h.value.estimated_size_mb ? (t(), s("div", Xo, " Estimated download: " + n(h.value.estimated_size_mb) + " MB ", 1)) : g("", !0)
          ])
        ], 64)) : g("", !0)
      ]),
      footer: T(() => [
        F(te, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (r) => i("close"))
        }, {
          default: T(() => [...a[6] || (a[6] = [
            A(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h.value && h.value.nodes_to_install.length && h.value.models_to_download.length ? (t(), q(te, {
          key: 0,
          variant: "secondary",
          disabled: f.value,
          loading: f.value,
          onClick: Z
        }, {
          default: T(() => [...a[7] || (a[7] = [
            A(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : g("", !0),
        h.value && (h.value.nodes_to_install.length || h.value.models_to_download.length) ? (t(), q(te, {
          key: 1,
          variant: "primary",
          disabled: f.value || h.value.models_to_download.length > 0 && !_.value,
          loading: f.value,
          onClick: L
        }, {
          default: T(() => [...a[8] || (a[8] = [
            A(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : g("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Qo = /* @__PURE__ */ J(Jo, [["__scopeId", "data-v-d68efb14"]]), es = { class: "workflows-section" }, ts = { class: "section-header" }, os = { class: "search-bar" }, ss = {
  key: 0,
  class: "loading"
}, as = {
  key: 1,
  class: "error-message"
}, ns = {
  key: 2,
  class: "workflows-content"
}, ls = {
  key: 0,
  class: "workflow-group"
}, rs = { class: "group-title" }, is = { class: "workflow-info" }, cs = { class: "workflow-name" }, ds = { class: "workflow-status" }, us = { class: "workflow-actions" }, ms = ["onClick"], gs = ["onClick"], hs = {
  key: 1,
  class: "workflow-group"
}, vs = { class: "group-title" }, fs = { class: "workflow-info" }, ps = { class: "workflow-name" }, ys = { class: "workflow-actions" }, bs = ["onClick"], ws = {
  key: 2,
  class: "workflow-group"
}, _s = { class: "group-title" }, ks = { class: "workflow-info" }, $s = { class: "workflow-name" }, xs = { class: "workflow-actions" }, Cs = ["onClick"], Ss = {
  key: 3,
  class: "workflow-group"
}, Es = { class: "workflow-info" }, Ls = { class: "workflow-name" }, Ms = { class: "workflow-actions" }, zs = ["onClick"], Is = {
  key: 4,
  class: "empty-state"
}, Os = { key: 0 }, Ds = { key: 1 }, Ts = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(o, { emit: v }) {
    const c = v, { getWorkflows: i } = ie(), p = w([]), d = w(!1), h = w(null), y = w(""), f = w(!1), $ = w(!1), _ = w(!1), m = w(!1), S = w(null), O = I(
      () => p.value.filter((C) => C.status === "broken")
    ), Y = I(
      () => p.value.filter((C) => C.status === "new")
    ), B = I(
      () => p.value.filter((C) => C.status === "modified")
    ), x = I(
      () => p.value.filter((C) => C.status === "synced")
    ), M = I(() => {
      if (!y.value.trim()) return p.value;
      const C = y.value.toLowerCase();
      return p.value.filter((D) => D.name.toLowerCase().includes(C));
    }), P = I(
      () => O.value.filter(
        (C) => !y.value.trim() || C.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), Z = I(
      () => Y.value.filter(
        (C) => !y.value.trim() || C.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), L = I(
      () => B.value.filter(
        (C) => !y.value.trim() || C.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), u = I(
      () => x.value.filter(
        (C) => !y.value.trim() || C.name.toLowerCase().includes(y.value.toLowerCase())
      )
    );
    async function a() {
      d.value = !0, h.value = null;
      try {
        p.value = await i();
      } catch (C) {
        h.value = C instanceof Error ? C.message : "Failed to load workflows";
      } finally {
        d.value = !1;
      }
    }
    function r(C) {
      S.value = C, _.value = !0;
    }
    function b(C) {
      S.value = C, m.value = !0;
    }
    function H() {
      alert("Bulk resolution not yet implemented");
    }
    function ce() {
      c("refresh");
    }
    return re(a), (C, D) => (t(), s("div", es, [
      e("div", ts, [
        D[7] || (D[7] = e("h3", { class: "view-title" }, "WORKFLOWS", -1)),
        O.value.length > 0 ? (t(), s("button", {
          key: 0,
          class: "resolve-all-btn",
          onClick: H
        }, " RESOLVE ALL ISSUES ")) : g("", !0)
      ]),
      e("div", os, [
        $e(e("input", {
          "onUpdate:modelValue": D[0] || (D[0] = (R) => y.value = R),
          type: "text",
          placeholder: "🔍 Search workflows...",
          class: "search-input"
        }, null, 512), [
          [xe, y.value]
        ])
      ]),
      d.value ? (t(), s("div", ss, "Loading workflows...")) : h.value ? (t(), s("div", as, n(h.value), 1)) : (t(), s("div", ns, [
        P.value.length ? (t(), s("section", ls, [
          e("h4", rs, "BROKEN (" + n(P.value.length) + ")", 1),
          (t(!0), s(N, null, V(P.value, (R) => (t(), s("div", {
            key: R.name,
            class: "workflow-item broken"
          }, [
            e("div", is, [
              e("div", cs, "⚠ " + n(R.name), 1),
              e("div", ds, " Missing: " + n(R.missing_nodes) + " nodes, " + n(R.missing_models) + " models ", 1)
            ]),
            e("div", us, [
              e("button", {
                class: "action-btn",
                onClick: (se) => b(R.name)
              }, " Resolve ▸ ", 8, ms),
              e("button", {
                class: "action-btn secondary",
                onClick: (se) => r(R.name)
              }, " Details ▸ ", 8, gs)
            ])
          ]))), 128))
        ])) : g("", !0),
        Z.value.length ? (t(), s("section", hs, [
          e("h4", vs, "NEW (" + n(Z.value.length) + ")", 1),
          (t(!0), s(N, null, V(Z.value, (R) => (t(), s("div", {
            key: R.name,
            class: "workflow-item new"
          }, [
            e("div", fs, [
              e("div", ps, "● " + n(R.name), 1),
              D[8] || (D[8] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            e("div", ys, [
              e("button", {
                class: "action-btn secondary",
                onClick: (se) => r(R.name)
              }, " Details ", 8, bs)
            ])
          ]))), 128))
        ])) : g("", !0),
        L.value.length ? (t(), s("section", ws, [
          e("h4", _s, "MODIFIED (" + n(L.value.length) + ")", 1),
          (t(!0), s(N, null, V(L.value, (R) => (t(), s("div", {
            key: R.name,
            class: "workflow-item modified"
          }, [
            e("div", ks, [
              e("div", $s, "⚡ " + n(R.name), 1),
              D[9] || (D[9] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            e("div", xs, [
              e("button", {
                class: "action-btn secondary",
                onClick: (se) => r(R.name)
              }, " Details ", 8, Cs)
            ])
          ]))), 128))
        ])) : g("", !0),
        u.value.length ? (t(), s("section", Ss, [
          e("h4", {
            class: "group-title clickable",
            onClick: D[1] || (D[1] = (R) => f.value = !f.value)
          }, " SYNCED (" + n(u.value.length) + ") " + n(f.value ? "▼" : "▸"), 1),
          f.value ? (t(), s(N, { key: 0 }, [
            (t(!0), s(N, null, V(u.value.slice(0, $.value ? void 0 : 5), (R) => (t(), s("div", {
              key: R.name,
              class: "workflow-item synced"
            }, [
              e("div", Es, [
                e("div", Ls, n(R.name), 1),
                D[10] || (D[10] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
              ]),
              e("div", Ms, [
                e("button", {
                  class: "action-btn secondary",
                  onClick: (se) => r(R.name)
                }, " Details ", 8, zs)
              ])
            ]))), 128)),
            !$.value && u.value.length > 5 ? (t(), s("button", {
              key: 0,
              class: "show-more-btn",
              onClick: D[2] || (D[2] = (R) => $.value = !0)
            }, " View all " + n(u.value.length) + " → ", 1)) : g("", !0)
          ], 64)) : g("", !0)
        ])) : g("", !0),
        M.value.length ? g("", !0) : (t(), s("div", Is, [
          y.value ? (t(), s("p", Os, 'No workflows match "' + n(y.value) + '"', 1)) : (t(), s("p", Ds, "No workflows found in this environment."))
        ]))
      ])),
      _.value && S.value ? (t(), q(xo, {
        key: 3,
        "workflow-name": S.value,
        onClose: D[3] || (D[3] = (R) => _.value = !1),
        onResolve: D[4] || (D[4] = (R) => b(S.value))
      }, null, 8, ["workflow-name"])) : g("", !0),
      m.value && S.value ? (t(), q(Qo, {
        key: 4,
        "workflow-name": S.value,
        onClose: D[5] || (D[5] = (R) => m.value = !1),
        onInstall: ce,
        onRefresh: D[6] || (D[6] = (R) => c("refresh"))
      }, null, 8, ["workflow-name"])) : g("", !0)
    ]));
  }
}), Ns = /* @__PURE__ */ J(Ts, [["__scopeId", "data-v-abf8513b"]]), Bs = { class: "models-env-section" }, Rs = { class: "section-intro" }, Ws = { class: "intro-text" }, Us = { class: "search-bar" }, As = {
  key: 0,
  class: "loading"
}, Vs = {
  key: 1,
  class: "error-message"
}, Hs = {
  key: 2,
  class: "models-content"
}, Ps = {
  key: 0,
  class: "model-group"
}, Gs = { class: "group-title" }, Ks = { class: "model-header" }, js = { class: "model-info" }, Fs = { class: "model-name" }, qs = { class: "model-size" }, Ys = { class: "model-details" }, Zs = { class: "detail-row" }, Xs = { class: "value" }, Js = { class: "model-actions" }, Qs = ["onClick"], ea = {
  key: 1,
  class: "model-group"
}, ta = { class: "group-title" }, oa = { class: "model-header" }, sa = { class: "model-info" }, aa = { class: "model-name" }, na = { class: "model-size" }, la = { class: "model-details" }, ra = { class: "detail-row" }, ia = { class: "value" }, ca = { class: "model-actions" }, da = ["onClick"], ua = {
  key: 2,
  class: "model-group"
}, ma = { class: "group-title" }, ga = { class: "model-header" }, ha = { class: "model-info" }, va = { class: "model-name" }, fa = { class: "model-size" }, pa = { class: "model-details" }, ya = { class: "detail-row" }, ba = { class: "value" }, wa = { class: "detail-row" }, _a = { class: "value" }, ka = { class: "model-actions" }, $a = ["onClick"], xa = {
  key: 3,
  class: "model-group"
}, Ca = { class: "group-title" }, Sa = { class: "model-header" }, Ea = { class: "model-info" }, La = { class: "model-name" }, Ma = { class: "model-details" }, za = { class: "detail-row" }, Ia = { class: "value" }, Oa = { class: "model-actions" }, Da = ["onClick"], Ta = ["onClick"], Na = {
  key: 4,
  class: "empty-state"
}, Ba = { key: 0 }, Ra = { key: 1 }, Wa = {
  key: 5,
  class: "summary"
}, Ua = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(o, { emit: v }) {
    const c = v, { getEnvironmentModels: i, getStatus: p } = ie(), d = w([]), h = w([]), y = w("production"), f = w(!1), $ = w(null), _ = w("");
    I(
      () => d.value.filter((a) => a.type === "checkpoints" || a.category === "checkpoints")
    ), I(
      () => d.value.filter((a) => a.type === "loras" || a.category === "loras")
    ), I(
      () => d.value.filter(
        (a) => a.type !== "checkpoints" && a.category !== "checkpoints" && a.type !== "loras" && a.category !== "loras"
      )
    );
    const m = I(
      () => d.value.reduce((a, r) => a + (r.size_mb || 0), 0)
    ), S = I(() => {
      if (!_.value.trim()) return d.value;
      const a = _.value.toLowerCase();
      return d.value.filter((r) => r.filename.toLowerCase().includes(a));
    }), O = I(() => {
      if (!_.value.trim()) return h.value;
      const a = _.value.toLowerCase();
      return h.value.filter((r) => r.filename.toLowerCase().includes(a));
    }), Y = I(
      () => S.value.filter((a) => a.type === "checkpoints" || a.category === "checkpoints")
    ), B = I(
      () => S.value.filter((a) => a.type === "loras" || a.category === "loras")
    ), x = I(
      () => S.value.filter(
        (a) => a.type !== "checkpoints" && a.category !== "checkpoints" && a.type !== "loras" && a.category !== "loras"
      )
    );
    function M(a) {
      return a >= 1024 ? `${(a / 1024).toFixed(1)} GB` : `${a} MB`;
    }
    function P(a) {
      c("navigate", "model-index");
    }
    function Z(a) {
      c("navigate", "model-index");
    }
    function L(a) {
      alert(`Download functionality not yet implemented for ${a}`);
    }
    async function u() {
      f.value = !0, $.value = null;
      try {
        const [a, r] = await Promise.all([
          i(),
          p()
        ]);
        d.value = a, h.value = r.missing_models || [], y.value = r.environment || "production";
      } catch (a) {
        $.value = a instanceof Error ? a.message : "Failed to load models";
      } finally {
        f.value = !1;
      }
    }
    return re(u), (a, r) => (t(), s("div", Bs, [
      r[14] || (r[14] = e("h3", { class: "view-title" }, "MODELS IN THIS ENVIRONMENT", -1)),
      e("div", Rs, [
        e("p", Ws, ' These are models currently used by workflows in "' + n(y.value) + '". All models are symlinked from the workspace model index. ', 1),
        e("button", {
          class: "link-btn",
          onClick: r[0] || (r[0] = (b) => a.$emit("navigate", "model-index"))
        }, " View Workspace Model Index ↗ ")
      ]),
      e("div", Us, [
        $e(e("input", {
          "onUpdate:modelValue": r[1] || (r[1] = (b) => _.value = b),
          type: "text",
          placeholder: "🔍 Search models used in this environment...",
          class: "search-input"
        }, null, 512), [
          [xe, _.value]
        ])
      ]),
      f.value ? (t(), s("div", As, "Loading models...")) : $.value ? (t(), s("div", Vs, n($.value), 1)) : (t(), s("div", Hs, [
        Y.value.length ? (t(), s("section", Ps, [
          e("h4", Gs, "CHECKPOINTS (" + n(Y.value.length) + ")", 1),
          (t(!0), s(N, null, V(Y.value, (b) => (t(), s("div", {
            key: b.hash,
            class: "model-card"
          }, [
            e("div", Ks, [
              r[2] || (r[2] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", js, [
                e("div", Fs, n(b.filename), 1),
                e("div", qs, n(M(b.size_mb)), 1)
              ])
            ]),
            e("div", Ys, [
              e("div", Zs, [
                r[3] || (r[3] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", Xs, n(b.used_by.join(", ")), 1)
              ]),
              r[4] || (r[4] = e("div", { class: "detail-row" }, [
                e("span", { class: "label" }, "Source:"),
                e("span", { class: "value" }, "Workspace index")
              ], -1))
            ]),
            e("div", Js, [
              e("button", {
                class: "action-btn secondary",
                onClick: (H) => P(b.hash)
              }, " View in Workspace Index ↗ ", 8, Qs)
            ])
          ]))), 128))
        ])) : g("", !0),
        B.value.length ? (t(), s("section", ea, [
          e("h4", ta, "LORAS (" + n(B.value.length) + ")", 1),
          (t(!0), s(N, null, V(B.value, (b) => (t(), s("div", {
            key: b.hash,
            class: "model-card"
          }, [
            e("div", oa, [
              r[5] || (r[5] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", sa, [
                e("div", aa, n(b.filename), 1),
                e("div", na, n(M(b.size_mb)), 1)
              ])
            ]),
            e("div", la, [
              e("div", ra, [
                r[6] || (r[6] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", ia, n(b.used_by.join(", ")), 1)
              ]),
              r[7] || (r[7] = e("div", { class: "detail-row" }, [
                e("span", { class: "label" }, "Source:"),
                e("span", { class: "value" }, "Workspace index")
              ], -1))
            ]),
            e("div", ca, [
              e("button", {
                class: "action-btn secondary",
                onClick: (H) => P(b.hash)
              }, " View in Workspace Index ↗ ", 8, da)
            ])
          ]))), 128))
        ])) : g("", !0),
        x.value.length ? (t(), s("section", ua, [
          e("h4", ma, "OTHER (" + n(x.value.length) + ")", 1),
          (t(!0), s(N, null, V(x.value, (b) => (t(), s("div", {
            key: b.hash,
            class: "model-card"
          }, [
            e("div", ga, [
              r[8] || (r[8] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", ha, [
                e("div", va, n(b.filename), 1),
                e("div", fa, n(M(b.size_mb)), 1)
              ])
            ]),
            e("div", pa, [
              e("div", ya, [
                r[9] || (r[9] = e("span", { class: "label" }, "Type:", -1)),
                e("span", ba, n(b.type), 1)
              ]),
              e("div", wa, [
                r[10] || (r[10] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", _a, n(b.used_by.join(", ")), 1)
              ])
            ]),
            e("div", ka, [
              e("button", {
                class: "action-btn secondary",
                onClick: (H) => P(b.hash)
              }, " View in Workspace Index ↗ ", 8, $a)
            ])
          ]))), 128))
        ])) : g("", !0),
        O.value.length ? (t(), s("section", xa, [
          e("h4", Ca, "MISSING (" + n(O.value.length) + ")", 1),
          (t(!0), s(N, null, V(O.value, (b) => {
            var H;
            return t(), s("div", {
              key: b.filename,
              class: "model-card missing"
            }, [
              e("div", Sa, [
                r[12] || (r[12] = e("span", { class: "model-icon" }, "⚠", -1)),
                e("div", Ea, [
                  e("div", La, n(b.filename), 1),
                  r[11] || (r[11] = e("div", { class: "model-status error" }, "Not found in workspace index", -1))
                ])
              ]),
              e("div", Ma, [
                e("div", za, [
                  r[13] || (r[13] = e("span", { class: "label" }, "Required by:", -1)),
                  e("span", Ia, n(((H = b.workflow_names) == null ? void 0 : H.join(", ")) || "Unknown"), 1)
                ])
              ]),
              e("div", Oa, [
                e("button", {
                  class: "action-btn",
                  onClick: (ce) => L(b.filename)
                }, " Download ", 8, Da),
                e("button", {
                  class: "action-btn secondary",
                  onClick: (ce) => Z(b.filename)
                }, " Search Workspace Index ", 8, Ta)
              ])
            ]);
          }), 128))
        ])) : g("", !0),
        S.value.length ? g("", !0) : (t(), s("div", Na, [
          _.value ? (t(), s("p", Ba, 'No models match "' + n(_.value) + '"', 1)) : (t(), s("p", Ra, "No models in this environment."))
        ])),
        d.value.length ? (t(), s("div", Wa, " Total: " + n(d.value.length) + " models • " + n(M(m.value)) + " (symlinked from workspace) ", 1)) : g("", !0)
      ]))
    ]));
  }
}), Aa = /* @__PURE__ */ J(Ua, [["__scopeId", "data-v-75454b46"]]), Va = { class: "model-index-section" }, Ha = { class: "search-bar" }, Pa = {
  key: 0,
  class: "loading"
}, Ga = {
  key: 1,
  class: "error-message"
}, Ka = {
  key: 2,
  class: "models-content"
}, ja = {
  key: 0,
  class: "summary-header"
}, Fa = {
  key: 1,
  class: "model-group"
}, qa = { class: "group-title" }, Ya = { class: "model-header" }, Za = { class: "model-info" }, Xa = { class: "model-name" }, Ja = { class: "model-size" }, Qa = { class: "model-details" }, en = { class: "detail-row" }, tn = { class: "value hash" }, on = { class: "detail-row" }, sn = { class: "value" }, an = {
  key: 0,
  class: "detail-row"
}, nn = { class: "value" }, ln = {
  key: 1,
  class: "detail-row"
}, rn = { class: "model-actions" }, cn = ["onClick"], dn = ["onClick"], un = ["onClick"], mn = {
  key: 2,
  class: "model-group"
}, gn = { class: "group-title" }, hn = { class: "model-header" }, vn = { class: "model-info" }, fn = { class: "model-name" }, pn = { class: "model-size" }, yn = { class: "model-details" }, bn = { class: "detail-row" }, wn = { class: "value hash" }, _n = { class: "detail-row" }, kn = { class: "value" }, $n = {
  key: 0,
  class: "detail-row"
}, xn = { class: "value" }, Cn = {
  key: 1,
  class: "detail-row"
}, Sn = { class: "model-actions" }, En = ["onClick"], Ln = ["onClick"], Mn = ["onClick"], zn = {
  key: 3,
  class: "model-group"
}, In = { class: "group-title" }, On = { class: "model-header" }, Dn = { class: "model-info" }, Tn = { class: "model-name" }, Nn = { class: "model-size" }, Bn = { class: "model-details" }, Rn = { class: "detail-row" }, Wn = { class: "value" }, Un = { class: "detail-row" }, An = { class: "value hash" }, Vn = { class: "detail-row" }, Hn = { class: "value" }, Pn = { class: "model-actions" }, Gn = ["onClick"], Kn = ["onClick"], jn = ["onClick"], Fn = {
  key: 4,
  class: "empty-state"
}, qn = { key: 0 }, Yn = { key: 1 }, Zn = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  setup(o) {
    const { getWorkspaceModels: v } = ie(), c = w([]), i = w(!1), p = w(null), d = w("");
    I(
      () => c.value.filter((u) => u.type === "checkpoints" || u.category === "checkpoints")
    ), I(
      () => c.value.filter((u) => u.type === "loras" || u.category === "loras")
    ), I(
      () => c.value.filter(
        (u) => u.type !== "checkpoints" && u.category !== "checkpoints" && u.type !== "loras" && u.category !== "loras"
      )
    );
    const h = I(
      () => c.value.reduce((u, a) => u + (a.size_mb || 0), 0)
    ), y = I(() => {
      const u = /* @__PURE__ */ new Set();
      return c.value.forEach((a) => {
        a.used_by && a.used_by.length > 0 && u.add("production");
      }), u.size;
    }), f = I(() => {
      if (!d.value.trim()) return c.value;
      const u = d.value.toLowerCase();
      return c.value.filter(
        (a) => a.filename.toLowerCase().includes(u) || a.sha256_hash && a.sha256_hash.toLowerCase().includes(u) || a.hash.toLowerCase().includes(u)
      );
    }), $ = I(
      () => f.value.filter((u) => u.type === "checkpoints" || u.category === "checkpoints")
    ), _ = I(
      () => f.value.filter((u) => u.type === "loras" || u.category === "loras")
    ), m = I(
      () => f.value.filter(
        (u) => u.type !== "checkpoints" && u.category !== "checkpoints" && u.type !== "loras" && u.category !== "loras"
      )
    );
    function S(u) {
      return u >= 1024 ? `${(u / 1024).toFixed(1)} GB` : `${u} MB`;
    }
    function O(u) {
      return !u.used_by || u.used_by.length === 0 ? "Not used" : `${u.used_by.length} workflow(s)`;
    }
    function Y(u) {
      navigator.clipboard.writeText(u), alert("Hash copied to clipboard");
    }
    function B(u) {
      var r;
      prompt("Enter model source URL:", ((r = u.sources) == null ? void 0 : r[0]) || "") !== null && alert("URL update not yet implemented");
    }
    function x(u) {
      const a = u.used_by && u.used_by.length > 0 ? `

⚠ WARNING: This model is used by ${u.used_by.length} workflow(s):
${u.used_by.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${u.filename}?${a}

This will free ${S(u.size_mb || 0)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function M() {
      alert("Scan for models not yet implemented");
    }
    function P() {
      alert("Add directory not yet implemented");
    }
    function Z() {
      alert("Download new model not yet implemented");
    }
    async function L() {
      i.value = !0, p.value = null;
      try {
        c.value = await v();
      } catch (u) {
        p.value = u instanceof Error ? u.message : "Failed to load workspace models";
      } finally {
        i.value = !1;
      }
    }
    return re(L), (u, a) => (t(), s("div", Va, [
      e("div", { class: "section-header" }, [
        a[2] || (a[2] = e("h3", { class: "view-title" }, "WORKSPACE MODEL INDEX", -1)),
        e("div", { class: "header-actions" }, [
          e("button", {
            class: "action-btn",
            onClick: M
          }, " Scan for Models "),
          e("button", {
            class: "action-btn",
            onClick: P
          }, " Add Directory "),
          e("button", {
            class: "action-btn primary",
            onClick: Z
          }, [...a[1] || (a[1] = [
            e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
              e("path", { d: "M14 14H2v-2h12v2z" })
            ], -1),
            A(" DOWNLOAD + ", -1)
          ])])
        ])
      ]),
      a[17] || (a[17] = e("div", { class: "section-intro" }, [
        e("p", { class: "intro-text" }, " Content-addressable model storage shared across all environments. Models are deduplicated by SHA256 hash. ")
      ], -1)),
      e("div", Ha, [
        $e(e("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (r) => d.value = r),
          type: "text",
          placeholder: "🔍 Search all indexed models...",
          class: "search-input"
        }, null, 512), [
          [xe, d.value]
        ])
      ]),
      i.value ? (t(), s("div", Pa, "Loading workspace models...")) : p.value ? (t(), s("div", Ga, n(p.value), 1)) : (t(), s("div", Ka, [
        c.value.length ? (t(), s("div", ja, " Total: " + n(c.value.length) + " models • " + n(S(h.value)) + " • Used in " + n(y.value) + " environments ", 1)) : g("", !0),
        $.value.length ? (t(), s("section", Fa, [
          e("h4", qa, "/* CHECKPOINTS (" + n($.value.length) + ") */", 1),
          (t(!0), s(N, null, V($.value, (r) => {
            var b;
            return t(), s("div", {
              key: r.sha256_hash || r.hash,
              class: "model-card"
            }, [
              e("div", Ya, [
                a[3] || (a[3] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", Za, [
                  e("div", Xa, n(r.filename), 1),
                  e("div", Ja, n(S(r.size_mb)), 1)
                ])
              ]),
              e("div", Qa, [
                e("div", en, [
                  a[4] || (a[4] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", tn, n(((b = r.sha256_hash) == null ? void 0 : b.substring(0, 16)) || r.hash) + "...", 1)
                ]),
                e("div", on, [
                  a[5] || (a[5] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", sn, n(O(r)), 1)
                ]),
                r.sources && r.sources.length ? (t(), s("div", an, [
                  a[6] || (a[6] = e("span", { class: "label" }, "Source URL:", -1)),
                  e("span", nn, n(r.sources[0]), 1)
                ])) : (t(), s("div", ln, [...a[7] || (a[7] = [
                  e("span", { class: "label" }, "Source URL:", -1),
                  e("span", { class: "value warning" }, "(none)", -1)
                ])]))
              ]),
              e("div", rn, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (H) => B(r)
                }, " Edit URL ", 8, cn),
                e("button", {
                  class: "action-btn-small",
                  onClick: (H) => Y(r.sha256_hash || r.hash)
                }, " Copy Hash ", 8, dn),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (H) => x(r)
                }, " Delete ", 8, un)
              ])
            ]);
          }), 128))
        ])) : g("", !0),
        _.value.length ? (t(), s("section", mn, [
          e("h4", gn, "/* LORAS (" + n(_.value.length) + ") */", 1),
          (t(!0), s(N, null, V(_.value, (r) => {
            var b;
            return t(), s("div", {
              key: r.sha256_hash || r.hash,
              class: "model-card"
            }, [
              e("div", hn, [
                a[8] || (a[8] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", vn, [
                  e("div", fn, n(r.filename), 1),
                  e("div", pn, n(S(r.size_mb)), 1)
                ])
              ]),
              e("div", yn, [
                e("div", bn, [
                  a[9] || (a[9] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", wn, n(((b = r.sha256_hash) == null ? void 0 : b.substring(0, 16)) || r.hash) + "...", 1)
                ]),
                e("div", _n, [
                  a[10] || (a[10] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", kn, n(O(r)), 1)
                ]),
                r.sources && r.sources.length ? (t(), s("div", $n, [
                  a[11] || (a[11] = e("span", { class: "label" }, "Source URL:", -1)),
                  e("span", xn, n(r.sources[0]), 1)
                ])) : (t(), s("div", Cn, [...a[12] || (a[12] = [
                  e("span", { class: "label" }, "Source URL:", -1),
                  e("span", { class: "value warning" }, "(none)", -1)
                ])]))
              ]),
              e("div", Sn, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (H) => B(r)
                }, " Edit URL ", 8, En),
                e("button", {
                  class: "action-btn-small",
                  onClick: (H) => Y(r.sha256_hash || r.hash)
                }, " Copy Hash ", 8, Ln),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (H) => x(r)
                }, " Delete ", 8, Mn)
              ])
            ]);
          }), 128))
        ])) : g("", !0),
        m.value.length ? (t(), s("section", zn, [
          e("h4", In, "/* OTHER (" + n(m.value.length) + ") */", 1),
          (t(!0), s(N, null, V(m.value, (r) => {
            var b;
            return t(), s("div", {
              key: r.sha256_hash || r.hash,
              class: "model-card"
            }, [
              e("div", On, [
                a[13] || (a[13] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", Dn, [
                  e("div", Tn, n(r.filename), 1),
                  e("div", Nn, n(S(r.size_mb)), 1)
                ])
              ]),
              e("div", Bn, [
                e("div", Rn, [
                  a[14] || (a[14] = e("span", { class: "label" }, "Type:", -1)),
                  e("span", Wn, n(r.type), 1)
                ]),
                e("div", Un, [
                  a[15] || (a[15] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", An, n(((b = r.sha256_hash) == null ? void 0 : b.substring(0, 16)) || r.hash) + "...", 1)
                ]),
                e("div", Vn, [
                  a[16] || (a[16] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", Hn, n(O(r)), 1)
                ])
              ]),
              e("div", Pn, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (H) => B(r)
                }, " Edit URL ", 8, Gn),
                e("button", {
                  class: "action-btn-small",
                  onClick: (H) => Y(r.sha256_hash || r.hash)
                }, " Copy Hash ", 8, Kn),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (H) => x(r)
                }, " Delete ", 8, jn)
              ])
            ]);
          }), 128))
        ])) : g("", !0),
        f.value.length ? g("", !0) : (t(), s("div", Fn, [
          d.value ? (t(), s("p", qn, 'No models match "' + n(d.value) + '"', 1)) : (t(), s("p", Yn, "No models in workspace index."))
        ]))
      ]))
    ]));
  }
}), Xn = /* @__PURE__ */ J(Zn, [["__scopeId", "data-v-5f7a38f2"]]), Jn = { class: "header-info" }, Qn = { class: "commit-hash" }, el = {
  key: 0,
  class: "commit-refs"
}, tl = { class: "commit-message" }, ol = { class: "commit-date" }, sl = {
  key: 0,
  class: "loading"
}, al = {
  key: 1,
  class: "changes-section"
}, nl = { class: "stats-row" }, ll = { class: "stat" }, rl = { class: "stat insertions" }, il = { class: "stat deletions" }, cl = {
  key: 0,
  class: "change-group"
}, dl = {
  key: 1,
  class: "change-group"
}, ul = {
  key: 0,
  class: "version"
}, ml = {
  key: 2,
  class: "change-group"
}, gl = { class: "change-item" }, hl = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(o) {
    const v = o, { getCommitDetail: c } = ie(), i = w(null), p = w(!0), d = I(() => {
      if (!i.value) return !1;
      const y = i.value.changes.workflows;
      return y.added.length > 0 || y.modified.length > 0 || y.deleted.length > 0;
    }), h = I(() => {
      if (!i.value) return !1;
      const y = i.value.changes.nodes;
      return y.added.length > 0 || y.removed.length > 0;
    });
    return re(async () => {
      try {
        i.value = await c(v.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (y, f) => (t(), q(Ce, {
      size: "md",
      "show-close-button": !1,
      onClose: f[3] || (f[3] = ($) => y.$emit("close"))
    }, {
      header: T(() => {
        var $, _, m, S;
        return [
          e("div", Jn, [
            f[4] || (f[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Qn, n((($ = i.value) == null ? void 0 : $.short_hash) || o.commit.short_hash || ((_ = o.commit.hash) == null ? void 0 : _.slice(0, 7))), 1),
            (S = (m = i.value) == null ? void 0 : m.refs) != null && S.length ? (t(), s("span", el, [
              (t(!0), s(N, null, V(i.value.refs, (O) => (t(), s("span", {
                key: O,
                class: "ref-badge"
              }, n(O), 1))), 128))
            ])) : g("", !0)
          ]),
          F(te, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (O) => y.$emit("close"))
          }, {
            default: T(() => [...f[5] || (f[5] = [
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
      body: T(() => {
        var $, _;
        return [
          e("div", tl, n((($ = i.value) == null ? void 0 : $.message) || o.commit.message), 1),
          e("div", ol, n(((_ = i.value) == null ? void 0 : _.date_relative) || o.commit.date_relative || o.commit.relative_date), 1),
          p.value ? (t(), s("div", sl, "Loading details...")) : i.value ? (t(), s("div", al, [
            e("div", nl, [
              e("span", ll, n(i.value.stats.files_changed) + " files", 1),
              e("span", rl, "+" + n(i.value.stats.insertions), 1),
              e("span", il, "-" + n(i.value.stats.deletions), 1)
            ]),
            d.value ? (t(), s("div", cl, [
              F(le, { variant: "section" }, {
                default: T(() => [...f[6] || (f[6] = [
                  A("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(N, null, V(i.value.changes.workflows.added, (m) => (t(), s("div", {
                key: "add-" + m,
                class: "change-item added"
              }, [
                f[7] || (f[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(m), 1)
              ]))), 128)),
              (t(!0), s(N, null, V(i.value.changes.workflows.modified, (m) => (t(), s("div", {
                key: "mod-" + m,
                class: "change-item modified"
              }, [
                f[8] || (f[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, n(m), 1)
              ]))), 128)),
              (t(!0), s(N, null, V(i.value.changes.workflows.deleted, (m) => (t(), s("div", {
                key: "del-" + m,
                class: "change-item deleted"
              }, [
                f[9] || (f[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(m), 1)
              ]))), 128))
            ])) : g("", !0),
            h.value ? (t(), s("div", dl, [
              F(le, { variant: "section" }, {
                default: T(() => [...f[10] || (f[10] = [
                  A("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(N, null, V(i.value.changes.nodes.added, (m) => (t(), s("div", {
                key: "add-" + m.name,
                class: "change-item added"
              }, [
                f[11] || (f[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(m.name), 1),
                m.version ? (t(), s("span", ul, "(" + n(m.version) + ")", 1)) : g("", !0)
              ]))), 128)),
              (t(!0), s(N, null, V(i.value.changes.nodes.removed, (m) => (t(), s("div", {
                key: "rem-" + m.name,
                class: "change-item deleted"
              }, [
                f[12] || (f[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(m.name), 1)
              ]))), 128))
            ])) : g("", !0),
            i.value.changes.models.resolved > 0 ? (t(), s("div", ml, [
              F(le, { variant: "section" }, {
                default: T(() => [...f[13] || (f[13] = [
                  A("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", gl, [
                f[14] || (f[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, n(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : g("", !0)
          ])) : g("", !0)
        ];
      }),
      footer: T(() => [
        F(te, {
          variant: "secondary",
          onClick: f[1] || (f[1] = ($) => y.$emit("createBranch", o.commit))
        }, {
          default: T(() => [...f[15] || (f[15] = [
            A(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        F(te, {
          variant: "primary",
          onClick: f[2] || (f[2] = ($) => y.$emit("checkout", o.commit))
        }, {
          default: T(() => [...f[16] || (f[16] = [
            A(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), vl = /* @__PURE__ */ J(hl, [["__scopeId", "data-v-d256ff6d"]]), fl = { class: "dialog-message" }, pl = {
  key: 0,
  class: "dialog-details"
}, yl = {
  key: 1,
  class: "dialog-warning"
}, bl = /* @__PURE__ */ X({
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
    return (v, c) => (t(), q(Ce, {
      title: o.title,
      size: "sm",
      onClose: c[3] || (c[3] = (i) => v.$emit("cancel"))
    }, {
      body: T(() => [
        e("p", fl, n(o.message), 1),
        o.details && o.details.length ? (t(), s("div", pl, [
          (t(!0), s(N, null, V(o.details, (i, p) => (t(), s("div", {
            key: p,
            class: "detail-item"
          }, " • " + n(i), 1))), 128))
        ])) : g("", !0),
        o.warning ? (t(), s("p", yl, [
          c[4] || (c[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          A(" " + n(o.warning), 1)
        ])) : g("", !0)
      ]),
      footer: T(() => [
        F(te, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (i) => v.$emit("cancel"))
        }, {
          default: T(() => [
            A(n(o.cancelLabel), 1)
          ]),
          _: 1
        }),
        o.secondaryAction ? (t(), q(te, {
          key: 0,
          variant: "secondary",
          onClick: c[1] || (c[1] = (i) => v.$emit("secondary"))
        }, {
          default: T(() => [
            A(n(o.secondaryLabel), 1)
          ]),
          _: 1
        })) : g("", !0),
        F(te, {
          variant: o.destructive ? "danger" : "primary",
          onClick: c[2] || (c[2] = (i) => v.$emit("confirm"))
        }, {
          default: T(() => [
            A(n(o.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), wl = /* @__PURE__ */ J(bl, [["__scopeId", "data-v-3670b9f5"]]), _l = { class: "comfygit-panel" }, kl = { class: "panel-header" }, $l = { class: "header-left" }, xl = {
  key: 0,
  class: "header-info"
}, Cl = { class: "env-name" }, Sl = { class: "branch-name" }, El = ["title"], Ll = { class: "header-actions" }, Ml = { class: "env-switcher" }, zl = { class: "panel-main" }, Il = { class: "sidebar" }, Ol = { class: "sidebar-section" }, Dl = { class: "sidebar-section" }, Tl = { class: "sidebar-section" }, Nl = { class: "content-area" }, Bl = {
  key: 0,
  class: "error-message"
}, Rl = {
  key: 1,
  class: "loading"
}, Wl = {
  key: 5,
  class: "view-placeholder"
}, Ul = {
  key: 6,
  class: "view-placeholder"
}, Al = {
  key: 7,
  class: "view-placeholder"
}, Vl = {
  key: 9,
  class: "view-placeholder"
}, Hl = {
  key: 10,
  class: "view-placeholder"
}, Pl = {
  key: 11,
  class: "view-placeholder"
}, Gl = {
  key: 12,
  class: "view-placeholder"
}, Kl = {
  key: 13,
  class: "view-placeholder"
}, jl = { class: "dialog-content env-selector-dialog" }, Fl = { class: "dialog-header" }, ql = { class: "dialog-body" }, Yl = { class: "env-list" }, Zl = { class: "env-info" }, Xl = { class: "env-name-row" }, Jl = { class: "env-indicator" }, Ql = { class: "env-name" }, er = {
  key: 0,
  class: "env-branch"
}, tr = {
  key: 1,
  class: "current-label"
}, or = { class: "env-stats" }, sr = ["onClick"], ar = { class: "toast-container" }, nr = { class: "toast-icon" }, lr = { class: "toast-message" }, rr = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(o, { emit: v }) {
    const c = v, {
      getStatus: i,
      getHistory: p,
      exportEnv: d,
      getBranches: h,
      checkout: y,
      createBranch: f,
      switchBranch: $,
      getEnvironments: _
    } = ie(), m = w(null), S = w([]), O = w([]), Y = w([]), B = I(() => Y.value.find((k) => k.is_current)), x = w(!1), M = w(null), P = w(null), Z = w(!1), L = w("status"), u = w("this-env");
    function a(k, l) {
      L.value = k, u.value = l;
    }
    function r(k) {
      const G = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[k];
      G && a(G.view, G.section);
    }
    const b = w(null), H = w([]);
    let ce = 0;
    function C(k, l = "info", G = 3e3) {
      const Q = ++ce;
      return H.value.push({ id: Q, message: k, type: l }), G > 0 && setTimeout(() => {
        H.value = H.value.filter((de) => de.id !== Q);
      }, G), Q;
    }
    function D(k) {
      H.value = H.value.filter((l) => l.id !== k);
    }
    function R(k) {
      switch (k) {
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
    const se = I(() => {
      if (!m.value) return "neutral";
      const k = m.value.workflows, l = k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || m.value.has_changes;
      return m.value.comparison.is_synced ? l ? "warning" : "success" : "error";
    }), E = I(() => m.value ? se.value === "success" ? "All synced" : se.value === "warning" ? "Uncommitted changes" : se.value === "error" ? "Not synced" : "" : "");
    async function W() {
      x.value = !0, M.value = null;
      try {
        const [k, l, G, Q] = await Promise.all([
          i(),
          p(),
          h(),
          _()
        ]);
        m.value = k, S.value = l.commits, O.value = G.branches, Y.value = Q, c("statusUpdate", k);
      } catch (k) {
        M.value = k instanceof Error ? k.message : "Failed to load status", m.value = null, S.value = [], O.value = [];
      } finally {
        x.value = !1;
      }
    }
    function ee(k) {
      P.value = k;
    }
    async function ge(k) {
      var G;
      P.value = null;
      const l = m.value && (m.value.workflows.new.length > 0 || m.value.workflows.modified.length > 0 || m.value.workflows.deleted.length > 0 || m.value.has_changes);
      b.value = {
        title: l ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: l ? "You have uncommitted changes that will be lost." : `Checkout commit ${k.short_hash || ((G = k.hash) == null ? void 0 : G.slice(0, 7))}?`,
        details: l ? Ie() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: l ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: l,
        onConfirm: async () => {
          var he;
          b.value = null;
          const Q = C(`Checking out ${k.short_hash || ((he = k.hash) == null ? void 0 : he.slice(0, 7))}...`, "info", 0), de = await y(k.hash, l);
          D(Q), de.status === "success" ? C("Restarting ComfyUI...", "success") : C(de.message || "Checkout failed", "error");
        }
      };
    }
    async function be(k) {
      const l = m.value && (m.value.workflows.new.length > 0 || m.value.workflows.modified.length > 0 || m.value.workflows.deleted.length > 0 || m.value.has_changes);
      b.value = {
        title: l ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: l ? "You have uncommitted changes." : `Switch to branch "${k}"?`,
        details: l ? Ie() : void 0,
        warning: l ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: l ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          b.value = null;
          const G = C(`Switching to ${k}...`, "info", 0), Q = await $(k, l);
          D(G), Q.status === "success" ? C("Restarting ComfyUI...", "success") : C(Q.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ae(k) {
      const l = C(`Creating branch ${k}...`, "info", 0), G = await f(k);
      D(l), G.status === "success" ? (C(`Branch "${k}" created`, "success"), await W()) : C(G.message || "Failed to create branch", "error");
    }
    async function Ve(k) {
      P.value = null;
      const l = prompt("Enter branch name:");
      if (l) {
        const G = C(`Creating branch ${l}...`, "info", 0), Q = await f(l, k.hash);
        D(G), Q.status === "success" ? (C(`Branch "${l}" created from ${k.short_hash}`, "success"), await W()) : C(Q.message || "Failed to create branch", "error");
      }
    }
    async function He(k) {
      Z.value = !1, C("Environment switching not yet implemented", "warning");
    }
    function Ie() {
      if (!m.value) return [];
      const k = [], l = m.value.workflows;
      return l.new.length && k.push(`${l.new.length} new workflow(s)`), l.modified.length && k.push(`${l.modified.length} modified workflow(s)`), l.deleted.length && k.push(`${l.deleted.length} deleted workflow(s)`), k;
    }
    async function Pe() {
      const k = C("Exporting environment...", "info", 0);
      try {
        const l = await d();
        D(k), l.status === "success" ? (C("Export complete", "success"), alert(`Export successful!

Saved to: ${l.path}

Models without sources: ${l.models_without_sources}`)) : (C("Export failed", "error"), alert(`Export failed: ${l.message}`));
      } catch (l) {
        D(k), C("Export error", "error"), alert(`Export error: ${l instanceof Error ? l.message : "Unknown error"}`);
      }
    }
    return re(W), (k, l) => {
      var G, Q, de, he;
      return t(), s("div", _l, [
        e("div", kl, [
          e("div", $l, [
            l[20] || (l[20] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            m.value ? (t(), s("div", xl, [
              e("span", Cl, n(((G = B.value) == null ? void 0 : G.name) || m.value.environment), 1),
              e("span", Sl, n(m.value.branch || "detached"), 1),
              e("span", {
                class: U(["status-dot", se.value]),
                title: E.value
              }, null, 10, El)
            ])) : g("", !0)
          ]),
          e("div", Ll, [
            e("button", {
              class: U(["icon-btn", { spinning: x.value }]),
              onClick: W,
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
              onClick: l[0] || (l[0] = (z) => c("close")),
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
        e("div", Ml, [
          l[24] || (l[24] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: l[1] || (l[1] = (z) => Z.value = !0)
          }, [
            e("span", null, n(((Q = B.value) == null ? void 0 : Q.name) || ((de = m.value) == null ? void 0 : de.environment) || "Loading..."), 1),
            l[23] || (l[23] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", zl, [
          e("div", Il, [
            e("div", Ol, [
              l[25] || (l[25] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "status" && u.value === "this-env" }]),
                onClick: l[2] || (l[2] = (z) => a("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "workflows" }]),
                onClick: l[3] || (l[3] = (z) => a("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "models-env" }]),
                onClick: l[4] || (l[4] = (z) => a("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "branches" }]),
                onClick: l[5] || (l[5] = (z) => a("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "history" }]),
                onClick: l[6] || (l[6] = (z) => a("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "nodes" }]),
                onClick: l[7] || (l[7] = (z) => a("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "debug-env" }]),
                onClick: l[8] || (l[8] = (z) => a("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            l[28] || (l[28] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Dl, [
              l[26] || (l[26] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "environments" }]),
                onClick: l[9] || (l[9] = (z) => a("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "model-index" }]),
                onClick: l[10] || (l[10] = (z) => a("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "settings" }]),
                onClick: l[11] || (l[11] = (z) => a("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "debug-workspace" }]),
                onClick: l[12] || (l[12] = (z) => a("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            l[29] || (l[29] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Tl, [
              l[27] || (l[27] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "export" }]),
                onClick: l[13] || (l[13] = (z) => a("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "import" }]),
                onClick: l[14] || (l[14] = (z) => a("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: U(["sidebar-item", { active: L.value === "remotes" }]),
                onClick: l[15] || (l[15] = (z) => a("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Nl, [
            M.value ? (t(), s("div", Bl, n(M.value), 1)) : !m.value && L.value === "status" ? (t(), s("div", Rl, " Loading status... ")) : (t(), s(N, { key: 2 }, [
              L.value === "status" ? (t(), q(ft, {
                key: 0,
                status: m.value
              }, null, 8, ["status"])) : L.value === "workflows" ? (t(), q(Ns, {
                key: 1,
                onRefresh: W
              })) : L.value === "models-env" ? (t(), q(Aa, {
                key: 2,
                onNavigate: r
              })) : L.value === "branches" ? (t(), q(Lt, {
                key: 3,
                branches: O.value,
                current: ((he = m.value) == null ? void 0 : he.branch) || null,
                onSwitch: be,
                onCreate: Ae
              }, null, 8, ["branches", "current"])) : L.value === "history" ? (t(), q(Wt, {
                key: 4,
                commits: S.value,
                onSelect: ee,
                onCheckout: ge
              }, null, 8, ["commits"])) : L.value === "nodes" ? (t(), s("div", Wl, [...l[30] || (l[30] = [
                e("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                e("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : L.value === "debug-env" ? (t(), s("div", Ul, [...l[31] || (l[31] = [
                e("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                e("p", null, "Environment logs view coming soon...", -1)
              ])])) : L.value === "environments" ? (t(), s("div", Al, [...l[32] || (l[32] = [
                e("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                e("p", null, "Environment management UI coming soon...", -1)
              ])])) : L.value === "model-index" ? (t(), q(Xn, { key: 8 })) : L.value === "settings" ? (t(), s("div", Vl, [...l[33] || (l[33] = [
                e("h3", { class: "view-title" }, "SETTINGS", -1),
                e("p", null, "Settings UI coming soon...", -1)
              ])])) : L.value === "debug-workspace" ? (t(), s("div", Hl, [...l[34] || (l[34] = [
                e("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                e("p", null, "Workspace logs view coming soon...", -1)
              ])])) : L.value === "export" ? (t(), s("div", Pl, [
                l[36] || (l[36] = e("h3", { class: "view-title" }, "EXPORT", -1)),
                e("button", {
                  class: "export-btn",
                  onClick: Pe
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
                  A(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : L.value === "import" ? (t(), s("div", Gl, [...l[37] || (l[37] = [
                e("h3", { class: "view-title" }, "IMPORT", -1),
                e("p", null, "Import UI coming soon...", -1)
              ])])) : L.value === "remotes" ? (t(), s("div", Kl, [...l[38] || (l[38] = [
                e("h3", { class: "view-title" }, "REMOTES", -1),
                e("p", null, "Git remotes UI coming soon...", -1)
              ])])) : g("", !0)
            ], 64))
          ])
        ]),
        P.value ? (t(), q(vl, {
          key: 0,
          commit: P.value,
          onClose: l[16] || (l[16] = (z) => P.value = null),
          onCheckout: ge,
          onCreateBranch: Ve
        }, null, 8, ["commit"])) : g("", !0),
        b.value ? (t(), q(wl, {
          key: 1,
          title: b.value.title,
          message: b.value.message,
          details: b.value.details,
          warning: b.value.warning,
          confirmLabel: b.value.confirmLabel,
          cancelLabel: b.value.cancelLabel,
          secondaryLabel: b.value.secondaryLabel,
          secondaryAction: b.value.secondaryAction,
          destructive: b.value.destructive,
          onConfirm: b.value.onConfirm,
          onCancel: l[17] || (l[17] = (z) => b.value = null),
          onSecondary: b.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : g("", !0),
        Z.value ? (t(), s("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: l[19] || (l[19] = ye((z) => Z.value = !1, ["self"]))
        }, [
          e("div", jl, [
            e("div", Fl, [
              l[40] || (l[40] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: l[18] || (l[18] = (z) => Z.value = !1)
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
            e("div", ql, [
              l[41] || (l[41] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Yl, [
                (t(!0), s(N, null, V(Y.value, (z) => (t(), s("div", {
                  key: z.name,
                  class: U(["env-item", { current: z.is_current }])
                }, [
                  e("div", Zl, [
                    e("div", Xl, [
                      e("span", Jl, n(z.is_current ? "●" : "○"), 1),
                      e("span", Ql, n(z.name), 1),
                      z.current_branch ? (t(), s("span", er, "(" + n(z.current_branch) + ")", 1)) : g("", !0),
                      z.is_current ? (t(), s("span", tr, "CURRENT")) : g("", !0)
                    ]),
                    e("div", or, n(z.workflow_count) + " workflows • " + n(z.node_count) + " nodes ", 1)
                  ]),
                  z.is_current ? g("", !0) : (t(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ur) => He(z.name)
                  }, " SWITCH ", 8, sr))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : g("", !0),
        e("div", ar, [
          F(qe, { name: "toast" }, {
            default: T(() => [
              (t(!0), s(N, null, V(H.value, (z) => (t(), s("div", {
                key: z.id,
                class: U(["toast", z.type])
              }, [
                e("span", nr, n(R(z.type)), 1),
                e("span", lr, n(z.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), ir = /* @__PURE__ */ J(rr, [["__scopeId", "data-v-fd3a3e33"]]), cr = { class: "base-textarea-wrapper" }, dr = ["value", "rows", "placeholder", "disabled", "maxlength"], ur = {
  key: 0,
  class: "base-textarea-count"
}, mr = /* @__PURE__ */ X({
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
    return (v, c) => (t(), s("div", cr, [
      e("textarea", {
        value: o.modelValue,
        rows: o.rows,
        placeholder: o.placeholder,
        disabled: o.disabled,
        maxlength: o.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (i) => v.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          c[1] || (c[1] = _e(ye((i) => v.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = _e(ye((i) => v.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, dr),
      o.showCharCount && o.maxLength ? (t(), s("div", ur, n(o.modelValue.length) + " / " + n(o.maxLength), 1)) : g("", !0)
    ]));
  }
}), gr = /* @__PURE__ */ J(mr, [["__scopeId", "data-v-5516e6fc"]]), hr = { class: "commit-popover" }, vr = { class: "popover-header" }, fr = { class: "popover-body" }, pr = {
  key: 0,
  class: "changes-summary"
}, yr = {
  key: 0,
  class: "change-item"
}, br = {
  key: 1,
  class: "change-item"
}, wr = {
  key: 2,
  class: "change-item"
}, _r = {
  key: 3,
  class: "change-item"
}, kr = {
  key: 4,
  class: "change-item"
}, $r = {
  key: 1,
  class: "no-changes"
}, xr = {
  key: 2,
  class: "loading"
}, Cr = { class: "message-section" }, Sr = { class: "popover-footer" }, Er = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(o, { emit: v }) {
    const c = o, i = v, { commit: p } = ie(), d = w(""), h = w(!1), y = w(null), f = I(() => {
      if (!c.status) return !1;
      const _ = c.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || c.status.has_changes;
    });
    async function $() {
      var _, m, S;
      if (!(!f.value || !d.value.trim() || h.value)) {
        h.value = !0, y.value = null;
        try {
          const O = await p(d.value.trim());
          O.status === "success" ? (y.value = {
            type: "success",
            message: `Committed: ${((_ = O.summary) == null ? void 0 : _.new) || 0} new, ${((m = O.summary) == null ? void 0 : m.modified) || 0} modified, ${((S = O.summary) == null ? void 0 : S.deleted) || 0} deleted`
          }, d.value = "", setTimeout(() => i("committed"), 1e3)) : O.status === "no_changes" ? y.value = { type: "error", message: "No changes to commit" } : y.value = { type: "error", message: O.message || "Commit failed" };
        } catch (O) {
          y.value = { type: "error", message: O instanceof Error ? O.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (_, m) => (t(), s("div", hr, [
      e("div", vr, [
        m[4] || (m[4] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: m[0] || (m[0] = (S) => i("close"))
        }, [...m[3] || (m[3] = [
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
      e("div", fr, [
        o.status && f.value ? (t(), s("div", pr, [
          o.status.workflows.new.length ? (t(), s("div", yr, [
            m[5] || (m[5] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(o.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : g("", !0),
          o.status.workflows.modified.length ? (t(), s("div", br, [
            m[6] || (m[6] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, n(o.status.workflows.modified.length) + " modified", 1)
          ])) : g("", !0),
          o.status.workflows.deleted.length ? (t(), s("div", wr, [
            m[7] || (m[7] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(o.status.workflows.deleted.length) + " deleted", 1)
          ])) : g("", !0),
          o.status.git_changes.nodes_added.length ? (t(), s("div", _r, [
            m[8] || (m[8] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(o.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : g("", !0),
          o.status.git_changes.nodes_removed.length ? (t(), s("div", kr, [
            m[9] || (m[9] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(o.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : g("", !0)
        ])) : o.status ? (t(), s("div", $r, " No changes to commit ")) : (t(), s("div", xr, " Loading... ")),
        e("div", Cr, [
          F(gr, {
            modelValue: d.value,
            "onUpdate:modelValue": m[1] || (m[1] = (S) => d.value = S),
            placeholder: f.value ? "Describe your changes..." : "No changes",
            disabled: !f.value || h.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        y.value ? (t(), s("div", {
          key: 3,
          class: U(["result", y.value.type])
        }, n(y.value.message), 3)) : g("", !0)
      ]),
      e("div", Sr, [
        F(te, {
          variant: "secondary",
          onClick: m[2] || (m[2] = (S) => i("close"))
        }, {
          default: T(() => [...m[10] || (m[10] = [
            A(" Cancel ", -1)
          ])]),
          _: 1
        }),
        F(te, {
          variant: "primary",
          disabled: !f.value || !d.value.trim() || h.value,
          loading: h.value,
          onClick: $
        }, {
          default: T(() => [
            A(n(h.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Lr = /* @__PURE__ */ J(Er, [["__scopeId", "data-v-4f587977"]]), Mr = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 11px;--cg-font-size-sm: 13px;--cg-font-size-base: 14px;--cg-font-size-lg: 16px;--cg-font-size-xl: 18px;--cg-font-size-2xl: 20px;--cg-panel-width: 680px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .commit-item{border-radius:var(--cg-radius-md);border-left:3px solid var(--cg-color-border-subtle);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', zr = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 12px;--cg-font-size-sm: 14px;--cg-font-size-base: 17px;--cg-font-size-lg: 20px;--cg-font-size-xl: 24px;--cg-font-size-2xl: 28px;--cg-panel-width: 754px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Ir = {
  comfy: Mr,
  phosphor: zr
}, Me = "comfy", Be = "comfygit-theme";
let ue = null, Re = Me;
function Or() {
  try {
    const o = localStorage.getItem(Be);
    if (o && (o === "comfy" || o === "phosphor"))
      return o;
  } catch {
  }
  return Me;
}
function We(o = Me) {
  ue && ue.remove(), ue = document.createElement("style"), ue.id = "comfygit-theme-styles", ue.setAttribute("data-theme", o), ue.textContent = Ir[o], document.head.appendChild(ue), document.body.setAttribute("data-comfygit-theme", o), Re = o;
  try {
    localStorage.setItem(Be, o);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${o}`);
}
function Dr() {
  return Re;
}
function Tr(o) {
  We(o);
}
const ze = document.createElement("link");
ze.rel = "stylesheet";
ze.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ze);
const Nr = Or();
We(Nr);
window.ComfyGit = {
  setTheme: (o) => {
    console.log(`[ComfyGit] Switching to theme: ${o}`), Tr(o);
  },
  getTheme: () => {
    const o = Dr();
    return console.log(`[ComfyGit] Current theme: ${o}`), o;
  }
};
let ae = null, oe = null, pe = null;
const me = w(null);
async function Le() {
  var o;
  if (!((o = window.app) != null && o.api)) return null;
  try {
    const v = await window.app.api.fetchApi("/v2/comfygit/status");
    v.ok && (me.value = await v.json());
  } catch {
  }
}
function Br() {
  if (!me.value) return !1;
  const o = me.value.workflows;
  return o.new.length > 0 || o.modified.length > 0 || o.deleted.length > 0 || me.value.has_changes;
}
function Rr() {
  ae && ae.remove(), ae = document.createElement("div"), ae.className = "comfygit-panel-overlay";
  const o = document.createElement("div");
  o.className = "comfygit-panel-container", ae.appendChild(o), ae.addEventListener("click", (i) => {
    i.target === ae && Ee();
  });
  const v = (i) => {
    i.key === "Escape" && (Ee(), document.removeEventListener("keydown", v));
  };
  document.addEventListener("keydown", v), De({
    render: () => Te(ir, {
      onClose: Ee,
      onStatusUpdate: (i) => {
        me.value = i, ke();
      }
    })
  }).mount(o), document.body.appendChild(ae);
}
function Ee() {
  ae && (ae.remove(), ae = null);
}
function Wr(o) {
  ve(), oe = document.createElement("div"), oe.className = "comfygit-commit-popover-container";
  const v = o.getBoundingClientRect();
  oe.style.position = "fixed", oe.style.top = `${v.bottom + 8}px`, oe.style.right = `${window.innerWidth - v.right}px`, oe.style.zIndex = "10001";
  const c = (p) => {
    oe && !oe.contains(p.target) && p.target !== o && (ve(), document.removeEventListener("mousedown", c));
  };
  setTimeout(() => document.addEventListener("mousedown", c), 0);
  const i = (p) => {
    p.key === "Escape" && (ve(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), pe = De({
    render: () => Te(Lr, {
      status: me.value,
      onClose: ve,
      onCommitted: () => {
        ve(), Le().then(ke);
      }
    })
  }), pe.mount(oe), document.body.appendChild(oe);
}
function ve() {
  pe && (pe.unmount(), pe = null), oe && (oe.remove(), oe = null);
}
let ne = null;
function ke() {
  if (!ne) return;
  const o = ne.querySelector(".commit-indicator");
  o && (o.style.display = Br() ? "block" : "none");
}
const Ue = document.createElement("style");
Ue.textContent = `
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
document.head.appendChild(Ue);
Se.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var c, i;
    const o = document.createElement("div");
    o.className = "comfygit-btn-group";
    const v = document.createElement("button");
    v.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", v.textContent = "ComfyGit", v.title = "ComfyGit Control Panel", v.onclick = Rr, ne = document.createElement("button"), ne.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ne.innerHTML = 'Commit <span class="commit-indicator"></span>', ne.title = "Quick Commit", ne.onclick = () => Wr(ne), o.appendChild(v), o.appendChild(ne), (i = (c = Se.menu) == null ? void 0 : c.settingsGroup) != null && i.element && (Se.menu.settingsGroup.element.before(o), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Le(), ke(), setInterval(async () => {
      await Le(), ke();
    }, 3e4);
  }
});
