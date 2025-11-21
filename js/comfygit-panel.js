import { app as _e } from "../../scripts/app.js";
import { defineComponent as Z, computed as z, createElementBlock as o, openBlock as t, createElementVNode as e, createCommentVNode as m, toDisplayString as n, ref as w, nextTick as Ue, withDirectives as he, withKeys as ye, vModelText as ve, Fragment as R, renderList as U, normalizeClass as B, withModifiers as oe, onMounted as ie, createTextVNode as re, createBlock as ee, createVNode as Ae, TransitionGroup as Be, withCtx as He, createApp as Ee, h as Le } from "vue";
const Pe = { class: "status-section" }, Ke = { class: "status-grid" }, Ge = { class: "status-column" }, Ve = {
  key: 0,
  class: "status-item"
}, je = { class: "count new" }, Fe = {
  key: 1,
  class: "status-item"
}, qe = { class: "count modified" }, Ye = {
  key: 2,
  class: "status-item"
}, Ze = { class: "count deleted" }, Xe = { class: "status-item synced-item" }, Je = { class: "count synced" }, Qe = { class: "status-column" }, et = {
  key: 0,
  class: "status-item"
}, tt = { class: "count new" }, ot = {
  key: 1,
  class: "status-item"
}, st = { class: "count deleted" }, at = {
  key: 2,
  class: "status-item"
}, nt = {
  key: 3,
  class: "status-item ok"
}, lt = {
  key: 0,
  class: "warning-box"
}, it = {
  key: 1,
  class: "warning-box error"
}, rt = /* @__PURE__ */ Z({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(s) {
    const f = s, u = z(() => {
      const b = f.status.git_changes;
      return b.nodes_added.length > 0 || b.nodes_removed.length > 0 || b.workflow_changes || b.has_other_changes;
    }), c = z(() => {
      const b = f.status.git_changes, d = f.status.workflows;
      return (b.workflow_changes || b.has_other_changes) && d.new.length === 0 && d.modified.length === 0 && d.deleted.length === 0;
    });
    return (b, d) => (t(), o("div", Pe, [
      d[18] || (d[18] = e("h3", { class: "section-title" }, "Status", -1)),
      e("div", Ke, [
        e("div", Ge, [
          d[8] || (d[8] = e("h4", { class: "column-title" }, "Workflows", -1)),
          s.status.workflows.new.length ? (t(), o("div", Ve, [
            d[0] || (d[0] = e("span", { class: "icon" }, "●", -1)),
            e("span", je, n(s.status.workflows.new.length), 1),
            d[1] || (d[1] = e("span", { class: "label" }, "new", -1))
          ])) : m("", !0),
          s.status.workflows.modified.length ? (t(), o("div", Fe, [
            d[2] || (d[2] = e("span", { class: "icon" }, "●", -1)),
            e("span", qe, n(s.status.workflows.modified.length), 1),
            d[3] || (d[3] = e("span", { class: "label" }, "modified", -1))
          ])) : m("", !0),
          s.status.workflows.deleted.length ? (t(), o("div", Ye, [
            d[4] || (d[4] = e("span", { class: "icon" }, "●", -1)),
            e("span", Ze, n(s.status.workflows.deleted.length), 1),
            d[5] || (d[5] = e("span", { class: "label" }, "deleted", -1))
          ])) : m("", !0),
          e("div", Xe, [
            d[6] || (d[6] = e("span", { class: "icon synced" }, "✓", -1)),
            e("span", Je, n(s.status.workflows.synced.length), 1),
            d[7] || (d[7] = e("span", { class: "label" }, "synced", -1))
          ])
        ]),
        e("div", Qe, [
          d[15] || (d[15] = e("h4", { class: "column-title" }, "Git Changes", -1)),
          s.status.git_changes.nodes_added.length ? (t(), o("div", et, [
            d[9] || (d[9] = e("span", { class: "icon" }, "●", -1)),
            e("span", tt, n(s.status.git_changes.nodes_added.length), 1),
            d[10] || (d[10] = e("span", { class: "label" }, "node added", -1))
          ])) : m("", !0),
          s.status.git_changes.nodes_removed.length ? (t(), o("div", ot, [
            d[11] || (d[11] = e("span", { class: "icon" }, "●", -1)),
            e("span", st, n(s.status.git_changes.nodes_removed.length), 1),
            d[12] || (d[12] = e("span", { class: "label" }, "node removed", -1))
          ])) : m("", !0),
          c.value ? (t(), o("div", at, [...d[13] || (d[13] = [
            e("span", { class: "icon" }, "●", -1),
            e("span", { class: "count modified" }, "●", -1),
            e("span", { class: "label" }, "other changes", -1)
          ])])) : m("", !0),
          u.value ? m("", !0) : (t(), o("div", nt, [...d[14] || (d[14] = [
            e("span", { class: "icon" }, "✓", -1),
            e("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      s.status.missing_models_count > 0 ? (t(), o("div", lt, [
        d[16] || (d[16] = e("span", { class: "warning-icon" }, "⚠", -1)),
        e("span", null, n(s.status.missing_models_count) + " missing model(s)", 1)
      ])) : m("", !0),
      s.status.comparison.is_synced ? m("", !0) : (t(), o("div", it, [...d[17] || (d[17] = [
        e("span", { class: "warning-icon" }, "⚠", -1),
        e("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), X = (s, f) => {
  const u = s.__vccOpts || s;
  for (const [c, b] of f)
    u[c] = b;
  return u;
}, ct = /* @__PURE__ */ X(rt, [["__scopeId", "data-v-a72d538b"]]), dt = { class: "branch-section" }, ut = { class: "section-header" }, mt = {
  key: 0,
  class: "create-branch-row"
}, gt = ["disabled"], ht = {
  key: 1,
  class: "empty"
}, vt = {
  key: 2,
  class: "branch-list"
}, ft = { class: "branch-indicator" }, pt = { class: "branch-name" }, yt = ["onClick"], bt = {
  key: 1,
  class: "current-label"
}, _t = /* @__PURE__ */ Z({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(s, { emit: f }) {
    const u = f, c = w(!1), b = w(""), d = w(null);
    function h() {
      b.value.trim() && (u("create", b.value.trim()), _());
    }
    function _() {
      c.value = !1, b.value = "";
    }
    return Ue(() => {
      c.value && d.value && d.value.focus();
    }), (g, x) => (t(), o("div", dt, [
      e("div", ut, [
        x[3] || (x[3] = e("h3", { class: "view-title" }, "BRANCHES", -1)),
        e("button", {
          class: "add-btn",
          onClick: x[0] || (x[0] = ($) => c.value = !0),
          title: "New Branch"
        }, [...x[2] || (x[2] = [
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
      c.value ? (t(), o("div", mt, [
        he(e("input", {
          ref_key: "createInput",
          ref: d,
          "onUpdate:modelValue": x[1] || (x[1] = ($) => b.value = $),
          class: "branch-input",
          placeholder: "Branch name...",
          onKeyup: [
            ye(h, ["enter"]),
            ye(_, ["escape"])
          ]
        }, null, 544), [
          [ve, b.value]
        ]),
        e("button", {
          class: "action-btn create",
          onClick: h,
          disabled: !b.value.trim()
        }, " Create ", 8, gt),
        e("button", {
          class: "action-btn cancel",
          onClick: _
        }, " Cancel ")
      ])) : m("", !0),
      s.branches.length === 0 ? (t(), o("div", ht, " No branches found ")) : (t(), o("div", vt, [
        (t(!0), o(R, null, U(s.branches, ($) => (t(), o("div", {
          key: $.name,
          class: B(["branch-item", { current: $.is_current }])
        }, [
          e("span", ft, n($.is_current ? "●" : "○"), 1),
          e("span", pt, n($.name), 1),
          $.is_current ? (t(), o("span", bt, "current")) : (t(), o("button", {
            key: 0,
            class: "switch-btn",
            onClick: (p) => g.$emit("switch", $.name)
          }, " Switch ", 8, yt))
        ], 2))), 128))
      ]))
    ]));
  }
}), wt = /* @__PURE__ */ X(_t, [["__scopeId", "data-v-e2bd816d"]]), kt = { class: "history-section" }, $t = {
  key: 0,
  class: "empty"
}, xt = {
  key: 1,
  class: "commit-list"
}, Ct = ["onClick"], St = { class: "commit-hash" }, Et = { class: "commit-message" }, Lt = { class: "commit-date" }, Mt = ["onClick"], It = /* @__PURE__ */ Z({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(s) {
    return (f, u) => (t(), o("div", kt, [
      u[2] || (u[2] = e("h3", { class: "view-title" }, "HISTORY", -1)),
      s.commits.length === 0 ? (t(), o("div", $t, " No commits yet ")) : (t(), o("div", xt, [
        (t(!0), o(R, null, U(s.commits, (c) => {
          var b;
          return t(), o("div", {
            key: c.hash,
            class: "commit-item",
            onClick: (d) => f.$emit("select", c)
          }, [
            e("span", St, n(c.short_hash || ((b = c.hash) == null ? void 0 : b.slice(0, 7))), 1),
            e("span", Et, n(c.message), 1),
            e("span", Lt, n(c.date_relative || c.relative_date), 1),
            e("div", {
              class: "commit-actions",
              onClick: u[0] || (u[0] = oe(() => {
              }, ["stop"]))
            }, [
              e("button", {
                class: "action-btn",
                onClick: (d) => f.$emit("checkout", c),
                title: "Checkout this commit"
              }, [...u[1] || (u[1] = [
                e("svg", {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                ], -1)
              ])], 8, Mt)
            ])
          ], 8, Ct);
        }), 128))
      ]))
    ]));
  }
}), zt = /* @__PURE__ */ X(It, [["__scopeId", "data-v-97388106"]]), Se = [
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
  ...Array(12).fill(null).map((s, f) => ({
    name: `synced-workflow-${f + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + f,
    model_count: 1 + f % 3,
    sync_state: "synced"
  }))
], Dt = {
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
}, Me = [
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
], Ot = [
  ...Me,
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
], Nt = [
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
], pe = [
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
  getEnvironments: async () => (await G(300), [
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
  switchEnvironment: async (s) => {
    await G(500), console.log(`[MOCK] Switching to environment: ${s}`);
  },
  createEnvironment: async (s, f, u) => {
    await G(1e3), console.log(`[MOCK] Creating environment: ${s} with backend ${f}`, u ? `cloned from ${u}` : "");
  },
  deleteEnvironment: async (s) => {
    await G(500), console.log(`[MOCK] Deleting environment: ${s}`);
  },
  // Workflow Management
  getWorkflows: async () => (await G(400), Se),
  getWorkflowDetails: async (s) => (await G(300), Dt[s] || {
    name: s,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (s) => (await G(800), {
    workflow_name: s,
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
        workflow: s,
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
        workflow: s,
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
        workflow: s,
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
  installWorkflowDeps: async (s, f, u) => {
    await G(2e3), console.log(`[MOCK] Installing deps for ${s}: nodes=${f}, models=${u}`);
  },
  setModelImportance: async (s, f, u) => {
    await G(200), console.log(`[MOCK] Setting ${f} importance to ${u} in ${s}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await G(350), Me),
  getWorkspaceModels: async () => (await G(400), Ot),
  updateModelSource: async (s, f) => {
    await G(300), console.log(`[MOCK] Updating source for ${s}: ${f}`);
  },
  deleteModel: async (s) => {
    await G(500), console.log(`[MOCK] Deleting model: ${s}`);
  },
  downloadModel: async (s) => {
    await G(3e3), console.log("[MOCK] Downloading model:", s);
  },
  // Settings & Debug
  getConfig: async () => (await G(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (s) => {
    await G(300), console.log("[MOCK] Updating config:", s);
  },
  getEnvironmentLogs: async (s, f) => (await G(250), (s ? pe.filter((c) => c.level === s) : pe).slice(0, f || 100)),
  getWorkspaceLogs: async (s, f) => {
    await G(300);
    const u = [...pe, ...pe.map((b) => ({
      ...b,
      context: { ...b.context, environment: "testing" }
    }))];
    return (s ? u.filter((b) => b.level === s) : u).slice(0, f || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await G(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: Se.filter((s) => s.status === "synced").map((s) => s.name),
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
  getCommitHistory: async (s = 10) => (await G(300), Nt.slice(0, s)),
  getBranches: async () => (await G(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  })
};
function G(s) {
  return new Promise((f) => setTimeout(f, s));
}
function se() {
  const s = w(!1), f = w(null);
  async function u(S, W) {
    var de;
    if (!((de = window.app) != null && de.api))
      throw new Error("ComfyUI API not available");
    const q = await window.app.api.fetchApi(S, W);
    if (!q.ok) {
      const fe = await q.json().catch(() => ({}));
      throw new Error(fe.error || fe.message || `Request failed: ${q.status}`);
    }
    return q.json();
  }
  async function c() {
    return K.getStatus();
  }
  async function b(S, W = !1) {
    return u("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: S, allow_issues: W })
    });
  }
  async function d(S = 10, W = 0) {
    {
      const q = await K.getCommitHistory(S);
      return {
        commits: q,
        total: q.length,
        offset: W
      };
    }
  }
  async function h(S) {
    return u("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: S })
    });
  }
  async function _() {
    return K.getBranches();
  }
  async function g(S) {
    return u(`/v2/comfygit/commit/${S}`);
  }
  async function x(S, W = !1) {
    return u("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: S, force: W })
    });
  }
  async function $(S, W = "HEAD") {
    return u("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: S, start_point: W })
    });
  }
  async function p(S, W = !1) {
    return u("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: S, force: W })
    });
  }
  async function E() {
    return K.getEnvironments();
  }
  async function D(S) {
    return K.switchEnvironment(S);
  }
  async function N() {
    return null;
  }
  async function v(S, W, q) {
    return await K.createEnvironment(S, W, q), { status: "success" };
  }
  async function M(S) {
    return await K.deleteEnvironment(S), { status: "success" };
  }
  async function H() {
    return K.getWorkflows();
  }
  async function V(S) {
    return K.getWorkflowDetails(S);
  }
  async function j(S) {
    return K.resolveWorkflow(S);
  }
  async function L(S, W, q) {
    return await K.installWorkflowDeps(S, W, q), { status: "success" };
  }
  async function r(S, W, q) {
    return K.setModelImportance(S, W, q);
  }
  async function a() {
    return K.getEnvironmentModels();
  }
  async function i() {
    return K.getWorkspaceModels();
  }
  async function y(S, W) {
    return K.updateModelSource(S, W);
  }
  async function A(S) {
    return K.deleteModel(S);
  }
  async function ae(S) {
    return await K.downloadModel(S), { status: "success" };
  }
  async function C() {
    return K.getConfig();
  }
  async function O(S) {
    return K.updateConfig(S);
  }
  async function T(S, W) {
    return K.getEnvironmentLogs(S, W);
  }
  async function J(S, W) {
    return K.getWorkspaceLogs(S, W);
  }
  return {
    isLoading: s,
    error: f,
    getStatus: c,
    commit: b,
    getHistory: d,
    exportEnv: h,
    // Git Operations
    getBranches: _,
    getCommitDetail: g,
    checkout: x,
    createBranch: $,
    switchBranch: p,
    // Environment Management
    getEnvironments: E,
    switchEnvironment: D,
    getSwitchProgress: N,
    createEnvironment: v,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: H,
    getWorkflowDetails: V,
    resolveWorkflow: j,
    installWorkflowDeps: L,
    setModelImportance: r,
    // Model Management
    getEnvironmentModels: a,
    getWorkspaceModels: i,
    updateModelSource: y,
    deleteModel: A,
    downloadModel: ae,
    // Settings
    getConfig: C,
    updateConfig: O,
    // Debug/Logs
    getEnvironmentLogs: T,
    getWorkspaceLogs: J
  };
}
const Tt = { class: "dialog-content workflow-details-modal" }, Rt = { class: "dialog-header" }, Wt = { class: "dialog-title" }, Ut = { class: "dialog-body" }, At = {
  key: 0,
  class: "loading"
}, Bt = {
  key: 1,
  class: "error-message"
}, Ht = { class: "detail-section" }, Pt = { class: "section-title" }, Kt = {
  key: 0,
  class: "empty-message"
}, Gt = { class: "model-header" }, Vt = { class: "model-name" }, jt = { class: "model-details" }, Ft = { class: "model-row" }, qt = { class: "model-row" }, Yt = ["value", "onChange"], Zt = {
  key: 0,
  class: "model-row"
}, Xt = { class: "value" }, Jt = {
  key: 1,
  class: "model-row"
}, Qt = { class: "value" }, eo = {
  key: 0,
  class: "model-actions"
}, to = { class: "detail-section" }, oo = { class: "section-title" }, so = {
  key: 0,
  class: "empty-message"
}, ao = { class: "node-name" }, no = {
  key: 0,
  class: "node-version"
}, lo = { class: "dialog-footer" }, io = /* @__PURE__ */ Z({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(s, { emit: f }) {
    const u = s, c = f, { getWorkflowDetails: b, setModelImportance: d } = se(), h = w(null), _ = w(!1), g = w(null), x = w(!1), $ = w({});
    async function p() {
      _.value = !0, g.value = null;
      try {
        h.value = await b(u.workflowName);
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to load workflow details";
      } finally {
        _.value = !1;
      }
    }
    function E(N, v) {
      $.value[N] = v, x.value = !0;
    }
    async function D() {
      if (!x.value) {
        c("close");
        return;
      }
      _.value = !0, g.value = null;
      try {
        for (const [N, v] of Object.entries($.value))
          await d(u.workflowName, N, v);
        c("close");
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to save changes";
      } finally {
        _.value = !1;
      }
    }
    return ie(p), (N, v) => (t(), o("div", {
      class: "dialog-overlay",
      onClick: v[3] || (v[3] = oe((M) => c("close"), ["self"]))
    }, [
      e("div", Tt, [
        e("div", Rt, [
          e("h3", Wt, "WORKFLOW DETAILS: " + n(s.workflowName), 1),
          e("button", {
            class: "icon-btn",
            onClick: v[0] || (v[0] = (M) => c("close"))
          }, [...v[4] || (v[4] = [
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
        e("div", Ut, [
          _.value ? (t(), o("div", At, "Loading workflow details...")) : g.value ? (t(), o("div", Bt, n(g.value), 1)) : h.value ? (t(), o(R, { key: 2 }, [
            e("section", Ht, [
              e("h4", Pt, "/* MODELS USED (" + n(h.value.models.length) + ") */", 1),
              h.value.models.length === 0 ? (t(), o("div", Kt, " No models used in this workflow ")) : m("", !0),
              (t(!0), o(R, null, U(h.value.models, (M) => (t(), o("div", {
                key: M.hash,
                class: "model-card"
              }, [
                e("div", Gt, [
                  v[5] || (v[5] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Vt, n(M.filename), 1)
                ]),
                e("div", jt, [
                  e("div", Ft, [
                    v[6] || (v[6] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: B(["value", M.status === "available" ? "success" : "error"])
                    }, n(M.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                  ]),
                  e("div", qt, [
                    v[8] || (v[8] = e("span", { class: "label" }, "Importance:", -1)),
                    e("select", {
                      value: M.importance,
                      class: "importance-select",
                      onChange: (H) => E(M.hash, H.target.value)
                    }, [...v[7] || (v[7] = [
                      e("option", { value: "required" }, "Required", -1),
                      e("option", { value: "flexible" }, "Flexible", -1),
                      e("option", { value: "optional" }, "Optional", -1)
                    ])], 40, Yt)
                  ]),
                  M.node_type ? (t(), o("div", Zt, [
                    v[9] || (v[9] = e("span", { class: "label" }, "Used in:", -1)),
                    e("span", Xt, n(M.node_type) + " (Node " + n(M.node_id) + ")", 1)
                  ])) : m("", !0),
                  M.size_mb ? (t(), o("div", Jt, [
                    v[10] || (v[10] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Qt, n(M.size_mb) + " MB", 1)
                  ])) : m("", !0)
                ]),
                M.status === "missing" ? (t(), o("div", eo, [
                  e("button", {
                    class: "action-btn",
                    onClick: v[1] || (v[1] = (H) => c("resolve"))
                  }, " Resolve ")
                ])) : m("", !0)
              ]))), 128))
            ]),
            v[11] || (v[11] = e("div", { class: "info-box" }, [
              e("div", { class: "info-title" }, "Importance options:"),
              e("ul", { class: "info-list" }, [
                e("li", null, [
                  e("strong", null, "Required"),
                  re(" — Must have for workflow to run")
                ]),
                e("li", null, [
                  e("strong", null, "Flexible"),
                  re(" — Workflow adapts if missing")
                ]),
                e("li", null, [
                  e("strong", null, "Optional"),
                  re(" — Nice to have, can be skipped")
                ])
              ])
            ], -1)),
            e("section", to, [
              e("h4", oo, "/* NODES USED (" + n(h.value.nodes.length) + ") */", 1),
              h.value.nodes.length === 0 ? (t(), o("div", so, " No custom nodes used in this workflow ")) : m("", !0),
              (t(!0), o(R, null, U(h.value.nodes, (M) => (t(), o("div", {
                key: M.name,
                class: "node-item"
              }, [
                e("span", {
                  class: B(["node-status", M.installed ? "installed" : "missing"])
                }, n(M.installed ? "✓" : "✕"), 3),
                e("span", ao, n(M.name), 1),
                M.version ? (t(), o("span", no, "v" + n(M.version), 1)) : m("", !0)
              ]))), 128))
            ])
          ], 64)) : m("", !0)
        ]),
        e("div", lo, [
          e("button", {
            class: "btn secondary",
            onClick: v[2] || (v[2] = (M) => c("close"))
          }, "Close"),
          x.value ? (t(), o("button", {
            key: 0,
            class: "btn primary",
            onClick: D
          }, " Save Changes ")) : m("", !0)
        ])
      ])
    ]));
  }
}), ro = /* @__PURE__ */ X(io, [["__scopeId", "data-v-329ee01e"]]), co = { class: "dialog-content workflow-resolve-modal" }, uo = { class: "dialog-header" }, mo = { class: "dialog-title" }, go = { class: "dialog-body" }, ho = {
  key: 0,
  class: "loading"
}, vo = {
  key: 1,
  class: "error-message"
}, fo = {
  key: 0,
  class: "resolve-section"
}, po = { class: "section-title" }, yo = { class: "resolve-card success-card" }, bo = { class: "items-list" }, _o = { class: "item-info" }, wo = { class: "item-name" }, ko = {
  key: 0,
  class: "item-meta"
}, $o = { class: "match-type" }, xo = { class: "source" }, Co = {
  key: 1,
  class: "resolve-section"
}, So = { class: "section-title" }, Eo = { class: "resolve-card warning-card" }, Lo = { class: "items-list" }, Mo = { class: "item-info" }, Io = { class: "item-name" }, zo = { class: "item-meta" }, Do = { key: 0 }, Oo = { key: 1 }, No = {
  key: 0,
  class: "item-warning"
}, To = {
  key: 0,
  class: "item-action"
}, Ro = ["onClick"], Wo = {
  key: 2,
  class: "resolve-section"
}, Uo = { class: "section-title" }, Ao = { class: "info-text" }, Bo = { class: "actions-summary" }, Ho = { class: "summary-list" }, Po = { key: 0 }, Ko = { key: 1 }, Go = { key: 2 }, Vo = {
  key: 0,
  class: "estimated-size"
}, jo = { class: "dialog-footer" }, Fo = ["disabled"], qo = ["disabled"], Yo = /* @__PURE__ */ Z({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(s, { emit: f }) {
    const u = s, c = f, { resolveWorkflow: b, installWorkflowDeps: d } = se(), h = w(null), _ = w(!1), g = w(!1), x = w(null), $ = z(() => {
      var r;
      return h.value ? ((r = h.value.download_results) == null ? void 0 : r.every((a) => a.can_download)) ?? !1 : !1;
    });
    async function p() {
      _.value = !0, x.value = null;
      try {
        h.value = await b(u.workflowName);
      } catch (r) {
        x.value = r instanceof Error ? r.message : "Failed to analyze workflow";
      } finally {
        _.value = !1;
      }
    }
    function E(r) {
      return !r.possible_matches || r.possible_matches.length === 0 ? null : r.possible_matches.reduce(
        (a, i) => i.match_confidence > a.match_confidence ? i : a
      );
    }
    function D(r) {
      return r >= 0.9 ? "high" : r >= 0.7 ? "medium" : "low";
    }
    function N(r) {
      const a = E(r);
      return a ? a.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function v(r) {
      var a, i;
      return (i = (a = h.value) == null ? void 0 : a.download_results) == null ? void 0 : i.find((y) => y.model === r);
    }
    function M(r) {
      const a = v(r);
      return (a == null ? void 0 : a.can_download) ?? !1;
    }
    function H(r) {
      const a = v(r);
      return (a == null ? void 0 : a.source_url) || null;
    }
    function V(r) {
      window.open(r, "_blank");
    }
    async function j() {
      if (!(!h.value || g.value)) {
        g.value = !0, x.value = null;
        try {
          await d(
            u.workflowName,
            h.value.nodes_to_install,
            []
          ), c("install"), c("refresh"), c("close");
        } catch (r) {
          x.value = r instanceof Error ? r.message : "Installation failed";
        } finally {
          g.value = !1;
        }
      }
    }
    async function L() {
      if (!(!h.value || g.value)) {
        g.value = !0, x.value = null;
        try {
          await d(
            u.workflowName,
            h.value.nodes_to_install,
            h.value.models_to_download
          ), c("install"), c("refresh"), c("close");
        } catch (r) {
          x.value = r instanceof Error ? r.message : "Installation failed";
        } finally {
          g.value = !1;
        }
      }
    }
    return ie(p), (r, a) => (t(), o("div", {
      class: "dialog-overlay",
      onClick: a[2] || (a[2] = oe((i) => c("close"), ["self"]))
    }, [
      e("div", co, [
        e("div", uo, [
          e("h3", mo, "RESOLVE DEPENDENCIES: " + n(s.workflowName), 1),
          e("button", {
            class: "icon-btn",
            onClick: a[0] || (a[0] = (i) => c("close"))
          }, [...a[3] || (a[3] = [
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
        e("div", go, [
          _.value ? (t(), o("div", ho, "Analyzing dependencies...")) : x.value ? (t(), o("div", vo, n(x.value), 1)) : h.value ? (t(), o(R, { key: 2 }, [
            a[7] || (a[7] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
            h.value.nodes_unresolved.length > 0 ? (t(), o("section", fo, [
              e("h4", po, "/* NODES (" + n(h.value.nodes_unresolved.length) + ") */", 1),
              e("div", yo, [
                a[4] || (a[4] = e("div", { class: "card-header" }, [
                  e("span", { class: "status-icon" }, "✓"),
                  e("span", { class: "card-title" }, "Can install automatically")
                ], -1)),
                e("div", bo, [
                  (t(!0), o(R, null, U(h.value.nodes_unresolved, (i) => {
                    var y;
                    return t(), o("div", {
                      key: i.node_type,
                      class: "item"
                    }, [
                      e("div", _o, [
                        e("div", wo, n(((y = E(i)) == null ? void 0 : y.package_id) || i.node_type), 1),
                        E(i) ? (t(), o("div", ko, [
                          e("span", {
                            class: B(["confidence-badge", D(E(i).match_confidence)])
                          }, n(Math.round(E(i).match_confidence * 100)) + "% match ", 3),
                          e("span", $o, n(E(i).match_type), 1),
                          e("span", xo, "Source: " + n(N(i)), 1)
                        ])) : m("", !0)
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])) : m("", !0),
            h.value.models_unresolved.length > 0 ? (t(), o("section", Co, [
              e("h4", So, "/* MODELS (" + n(h.value.models_unresolved.length) + ") */", 1),
              e("div", Eo, [
                a[5] || (a[5] = e("div", { class: "card-header" }, [
                  e("span", { class: "status-icon" }, "⚠"),
                  e("span", { class: "card-title" }, "Manual download required")
                ], -1)),
                e("div", Lo, [
                  (t(!0), o(R, null, U(h.value.models_unresolved, (i) => (t(), o("div", {
                    key: i.filename,
                    class: "item"
                  }, [
                    e("div", Mo, [
                      e("div", Io, n(i.filename), 1),
                      e("div", zo, [
                        i.expected_category ? (t(), o("span", Do, "Type: " + n(i.expected_category), 1)) : m("", !0),
                        v(i.filename) ? (t(), o("span", Oo, " Size: ~" + n(v(i.filename).estimated_size_mb) + " MB ", 1)) : m("", !0)
                      ]),
                      M(i.filename) ? m("", !0) : (t(), o("div", No, " No auto-download source configured "))
                    ]),
                    H(i.filename) ? (t(), o("div", To, [
                      e("button", {
                        class: "link-btn",
                        onClick: (y) => V(H(i.filename))
                      }, " Open Source ↗ ", 8, Ro)
                    ])) : m("", !0)
                  ]))), 128))
                ])
              ])
            ])) : m("", !0),
            h.value.nodes_resolved.length > 0 || h.value.models_resolved.length > 0 ? (t(), o("section", Wo, [
              e("h4", Uo, " /* ALREADY AVAILABLE (" + n(h.value.nodes_resolved.length + h.value.models_resolved.length) + ") */ ", 1),
              e("div", Ao, n(h.value.nodes_resolved.length) + " nodes and " + n(h.value.models_resolved.length) + " models are already installed ", 1)
            ])) : m("", !0),
            e("div", Bo, [
              a[6] || (a[6] = e("div", { class: "summary-title" }, "This will:", -1)),
              e("ol", Ho, [
                h.value.nodes_to_install.length ? (t(), o("li", Po, " Install " + n(h.value.nodes_to_install.length) + " nodes (~" + n(h.value.estimated_time_seconds) + "s) ", 1)) : m("", !0),
                h.value.nodes_to_install.length ? (t(), o("li", Ko, " Restart ComfyUI to load new nodes ")) : m("", !0),
                h.value.models_to_download.length ? (t(), o("li", Go, " You'll still need to download " + n(h.value.models_to_download.length) + " model(s) manually ", 1)) : m("", !0)
              ]),
              h.value.estimated_size_mb ? (t(), o("div", Vo, " Estimated download: " + n(h.value.estimated_size_mb) + " MB ", 1)) : m("", !0)
            ])
          ], 64)) : m("", !0)
        ]),
        e("div", jo, [
          e("button", {
            class: "btn secondary",
            onClick: a[1] || (a[1] = (i) => c("close"))
          }, "Cancel"),
          h.value && h.value.nodes_to_install.length && h.value.models_to_download.length ? (t(), o("button", {
            key: 0,
            class: "btn primary",
            disabled: g.value,
            onClick: j
          }, n(g.value ? "Installing..." : "Install Nodes Only"), 9, Fo)) : m("", !0),
          h.value && (h.value.nodes_to_install.length || h.value.models_to_download.length) ? (t(), o("button", {
            key: 1,
            class: "btn primary",
            disabled: g.value || h.value.models_to_download.length > 0 && !$.value,
            onClick: L
          }, n(g.value ? "Installing..." : "Install All"), 9, qo)) : m("", !0)
        ])
      ])
    ]));
  }
}), Zo = /* @__PURE__ */ X(Yo, [["__scopeId", "data-v-95fac5e2"]]), Xo = { class: "workflows-section" }, Jo = { class: "section-header" }, Qo = { class: "search-bar" }, es = {
  key: 0,
  class: "loading"
}, ts = {
  key: 1,
  class: "error-message"
}, os = {
  key: 2,
  class: "workflows-content"
}, ss = {
  key: 0,
  class: "workflow-group"
}, as = { class: "group-title" }, ns = { class: "workflow-info" }, ls = { class: "workflow-name" }, is = { class: "workflow-status" }, rs = { class: "workflow-actions" }, cs = ["onClick"], ds = ["onClick"], us = {
  key: 1,
  class: "workflow-group"
}, ms = { class: "group-title" }, gs = { class: "workflow-info" }, hs = { class: "workflow-name" }, vs = { class: "workflow-actions" }, fs = ["onClick"], ps = {
  key: 2,
  class: "workflow-group"
}, ys = { class: "group-title" }, bs = { class: "workflow-info" }, _s = { class: "workflow-name" }, ws = { class: "workflow-actions" }, ks = ["onClick"], $s = {
  key: 3,
  class: "workflow-group"
}, xs = { class: "workflow-info" }, Cs = { class: "workflow-name" }, Ss = { class: "workflow-actions" }, Es = ["onClick"], Ls = {
  key: 4,
  class: "empty-state"
}, Ms = { key: 0 }, Is = { key: 1 }, zs = /* @__PURE__ */ Z({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(s, { emit: f }) {
    const u = f, { getWorkflows: c } = se(), b = w([]), d = w(!1), h = w(null), _ = w(""), g = w(!1), x = w(!1), $ = w(!1), p = w(!1), E = w(null), D = z(
      () => b.value.filter((C) => C.status === "broken")
    ), N = z(
      () => b.value.filter((C) => C.status === "new")
    ), v = z(
      () => b.value.filter((C) => C.status === "modified")
    ), M = z(
      () => b.value.filter((C) => C.status === "synced")
    ), H = z(() => {
      if (!_.value.trim()) return b.value;
      const C = _.value.toLowerCase();
      return b.value.filter((O) => O.name.toLowerCase().includes(C));
    }), V = z(
      () => D.value.filter(
        (C) => !_.value.trim() || C.name.toLowerCase().includes(_.value.toLowerCase())
      )
    ), j = z(
      () => N.value.filter(
        (C) => !_.value.trim() || C.name.toLowerCase().includes(_.value.toLowerCase())
      )
    ), L = z(
      () => v.value.filter(
        (C) => !_.value.trim() || C.name.toLowerCase().includes(_.value.toLowerCase())
      )
    ), r = z(
      () => M.value.filter(
        (C) => !_.value.trim() || C.name.toLowerCase().includes(_.value.toLowerCase())
      )
    );
    async function a() {
      d.value = !0, h.value = null;
      try {
        b.value = await c();
      } catch (C) {
        h.value = C instanceof Error ? C.message : "Failed to load workflows";
      } finally {
        d.value = !1;
      }
    }
    function i(C) {
      E.value = C, $.value = !0;
    }
    function y(C) {
      E.value = C, p.value = !0;
    }
    function A() {
      alert("Bulk resolution not yet implemented");
    }
    function ae() {
      u("refresh");
    }
    return ie(a), (C, O) => (t(), o("div", Xo, [
      e("div", Jo, [
        O[7] || (O[7] = e("h3", { class: "view-title" }, "WORKFLOWS", -1)),
        D.value.length > 0 ? (t(), o("button", {
          key: 0,
          class: "resolve-all-btn",
          onClick: A
        }, " RESOLVE ALL ISSUES ")) : m("", !0)
      ]),
      e("div", Qo, [
        he(e("input", {
          "onUpdate:modelValue": O[0] || (O[0] = (T) => _.value = T),
          type: "text",
          placeholder: "🔍 Search workflows...",
          class: "search-input"
        }, null, 512), [
          [ve, _.value]
        ])
      ]),
      d.value ? (t(), o("div", es, "Loading workflows...")) : h.value ? (t(), o("div", ts, n(h.value), 1)) : (t(), o("div", os, [
        V.value.length ? (t(), o("section", ss, [
          e("h4", as, "BROKEN (" + n(V.value.length) + ")", 1),
          (t(!0), o(R, null, U(V.value, (T) => (t(), o("div", {
            key: T.name,
            class: "workflow-item broken"
          }, [
            e("div", ns, [
              e("div", ls, "⚠ " + n(T.name), 1),
              e("div", is, " Missing: " + n(T.missing_nodes) + " nodes, " + n(T.missing_models) + " models ", 1)
            ]),
            e("div", rs, [
              e("button", {
                class: "action-btn",
                onClick: (J) => y(T.name)
              }, " Resolve ▸ ", 8, cs),
              e("button", {
                class: "action-btn secondary",
                onClick: (J) => i(T.name)
              }, " Details ▸ ", 8, ds)
            ])
          ]))), 128))
        ])) : m("", !0),
        j.value.length ? (t(), o("section", us, [
          e("h4", ms, "NEW (" + n(j.value.length) + ")", 1),
          (t(!0), o(R, null, U(j.value, (T) => (t(), o("div", {
            key: T.name,
            class: "workflow-item new"
          }, [
            e("div", gs, [
              e("div", hs, "● " + n(T.name), 1),
              O[8] || (O[8] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            e("div", vs, [
              e("button", {
                class: "action-btn secondary",
                onClick: (J) => i(T.name)
              }, " Details ", 8, fs)
            ])
          ]))), 128))
        ])) : m("", !0),
        L.value.length ? (t(), o("section", ps, [
          e("h4", ys, "MODIFIED (" + n(L.value.length) + ")", 1),
          (t(!0), o(R, null, U(L.value, (T) => (t(), o("div", {
            key: T.name,
            class: "workflow-item modified"
          }, [
            e("div", bs, [
              e("div", _s, "⚡ " + n(T.name), 1),
              O[9] || (O[9] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            e("div", ws, [
              e("button", {
                class: "action-btn secondary",
                onClick: (J) => i(T.name)
              }, " Details ", 8, ks)
            ])
          ]))), 128))
        ])) : m("", !0),
        r.value.length ? (t(), o("section", $s, [
          e("h4", {
            class: "group-title clickable",
            onClick: O[1] || (O[1] = (T) => g.value = !g.value)
          }, " SYNCED (" + n(r.value.length) + ") " + n(g.value ? "▼" : "▸"), 1),
          g.value ? (t(), o(R, { key: 0 }, [
            (t(!0), o(R, null, U(r.value.slice(0, x.value ? void 0 : 5), (T) => (t(), o("div", {
              key: T.name,
              class: "workflow-item synced"
            }, [
              e("div", xs, [
                e("div", Cs, n(T.name), 1),
                O[10] || (O[10] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
              ]),
              e("div", Ss, [
                e("button", {
                  class: "action-btn secondary",
                  onClick: (J) => i(T.name)
                }, " Details ", 8, Es)
              ])
            ]))), 128)),
            !x.value && r.value.length > 5 ? (t(), o("button", {
              key: 0,
              class: "show-more-btn",
              onClick: O[2] || (O[2] = (T) => x.value = !0)
            }, " View all " + n(r.value.length) + " → ", 1)) : m("", !0)
          ], 64)) : m("", !0)
        ])) : m("", !0),
        H.value.length ? m("", !0) : (t(), o("div", Ls, [
          _.value ? (t(), o("p", Ms, 'No workflows match "' + n(_.value) + '"', 1)) : (t(), o("p", Is, "No workflows found in this environment."))
        ]))
      ])),
      $.value && E.value ? (t(), ee(ro, {
        key: 3,
        "workflow-name": E.value,
        onClose: O[3] || (O[3] = (T) => $.value = !1),
        onResolve: O[4] || (O[4] = (T) => y(E.value))
      }, null, 8, ["workflow-name"])) : m("", !0),
      p.value && E.value ? (t(), ee(Zo, {
        key: 4,
        "workflow-name": E.value,
        onClose: O[5] || (O[5] = (T) => p.value = !1),
        onInstall: ae,
        onRefresh: O[6] || (O[6] = (T) => u("refresh"))
      }, null, 8, ["workflow-name"])) : m("", !0)
    ]));
  }
}), Ds = /* @__PURE__ */ X(zs, [["__scopeId", "data-v-abf8513b"]]), Os = { class: "models-env-section" }, Ns = { class: "section-intro" }, Ts = { class: "intro-text" }, Rs = { class: "search-bar" }, Ws = {
  key: 0,
  class: "loading"
}, Us = {
  key: 1,
  class: "error-message"
}, As = {
  key: 2,
  class: "models-content"
}, Bs = {
  key: 0,
  class: "model-group"
}, Hs = { class: "group-title" }, Ps = { class: "model-header" }, Ks = { class: "model-info" }, Gs = { class: "model-name" }, Vs = { class: "model-size" }, js = { class: "model-details" }, Fs = { class: "detail-row" }, qs = { class: "value" }, Ys = { class: "model-actions" }, Zs = ["onClick"], Xs = {
  key: 1,
  class: "model-group"
}, Js = { class: "group-title" }, Qs = { class: "model-header" }, ea = { class: "model-info" }, ta = { class: "model-name" }, oa = { class: "model-size" }, sa = { class: "model-details" }, aa = { class: "detail-row" }, na = { class: "value" }, la = { class: "model-actions" }, ia = ["onClick"], ra = {
  key: 2,
  class: "model-group"
}, ca = { class: "group-title" }, da = { class: "model-header" }, ua = { class: "model-info" }, ma = { class: "model-name" }, ga = { class: "model-size" }, ha = { class: "model-details" }, va = { class: "detail-row" }, fa = { class: "value" }, pa = { class: "detail-row" }, ya = { class: "value" }, ba = { class: "model-actions" }, _a = ["onClick"], wa = {
  key: 3,
  class: "model-group"
}, ka = { class: "group-title" }, $a = { class: "model-header" }, xa = { class: "model-info" }, Ca = { class: "model-name" }, Sa = { class: "model-details" }, Ea = { class: "detail-row" }, La = { class: "value" }, Ma = { class: "model-actions" }, Ia = ["onClick"], za = ["onClick"], Da = {
  key: 4,
  class: "empty-state"
}, Oa = { key: 0 }, Na = { key: 1 }, Ta = {
  key: 5,
  class: "summary"
}, Ra = /* @__PURE__ */ Z({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(s, { emit: f }) {
    const u = f, { getEnvironmentModels: c, getStatus: b } = se(), d = w([]), h = w([]), _ = w("production"), g = w(!1), x = w(null), $ = w("");
    z(
      () => d.value.filter((a) => a.type === "checkpoints" || a.category === "checkpoints")
    ), z(
      () => d.value.filter((a) => a.type === "loras" || a.category === "loras")
    ), z(
      () => d.value.filter(
        (a) => a.type !== "checkpoints" && a.category !== "checkpoints" && a.type !== "loras" && a.category !== "loras"
      )
    );
    const p = z(
      () => d.value.reduce((a, i) => a + (i.size_mb || 0), 0)
    ), E = z(() => {
      if (!$.value.trim()) return d.value;
      const a = $.value.toLowerCase();
      return d.value.filter((i) => i.filename.toLowerCase().includes(a));
    }), D = z(() => {
      if (!$.value.trim()) return h.value;
      const a = $.value.toLowerCase();
      return h.value.filter((i) => i.filename.toLowerCase().includes(a));
    }), N = z(
      () => E.value.filter((a) => a.type === "checkpoints" || a.category === "checkpoints")
    ), v = z(
      () => E.value.filter((a) => a.type === "loras" || a.category === "loras")
    ), M = z(
      () => E.value.filter(
        (a) => a.type !== "checkpoints" && a.category !== "checkpoints" && a.type !== "loras" && a.category !== "loras"
      )
    );
    function H(a) {
      return a >= 1024 ? `${(a / 1024).toFixed(1)} GB` : `${a} MB`;
    }
    function V(a) {
      u("navigate", "model-index");
    }
    function j(a) {
      u("navigate", "model-index");
    }
    function L(a) {
      alert(`Download functionality not yet implemented for ${a}`);
    }
    async function r() {
      g.value = !0, x.value = null;
      try {
        const [a, i] = await Promise.all([
          c(),
          b()
        ]);
        d.value = a, h.value = i.missing_models || [], _.value = i.environment || "production";
      } catch (a) {
        x.value = a instanceof Error ? a.message : "Failed to load models";
      } finally {
        g.value = !1;
      }
    }
    return ie(r), (a, i) => (t(), o("div", Os, [
      i[14] || (i[14] = e("h3", { class: "view-title" }, "MODELS IN THIS ENVIRONMENT", -1)),
      e("div", Ns, [
        e("p", Ts, ' These are models currently used by workflows in "' + n(_.value) + '". All models are symlinked from the workspace model index. ', 1),
        e("button", {
          class: "link-btn",
          onClick: i[0] || (i[0] = (y) => a.$emit("navigate", "model-index"))
        }, " View Workspace Model Index ↗ ")
      ]),
      e("div", Rs, [
        he(e("input", {
          "onUpdate:modelValue": i[1] || (i[1] = (y) => $.value = y),
          type: "text",
          placeholder: "🔍 Search models used in this environment...",
          class: "search-input"
        }, null, 512), [
          [ve, $.value]
        ])
      ]),
      g.value ? (t(), o("div", Ws, "Loading models...")) : x.value ? (t(), o("div", Us, n(x.value), 1)) : (t(), o("div", As, [
        N.value.length ? (t(), o("section", Bs, [
          e("h4", Hs, "CHECKPOINTS (" + n(N.value.length) + ")", 1),
          (t(!0), o(R, null, U(N.value, (y) => (t(), o("div", {
            key: y.hash,
            class: "model-card"
          }, [
            e("div", Ps, [
              i[2] || (i[2] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", Ks, [
                e("div", Gs, n(y.filename), 1),
                e("div", Vs, n(H(y.size_mb)), 1)
              ])
            ]),
            e("div", js, [
              e("div", Fs, [
                i[3] || (i[3] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", qs, n(y.used_by.join(", ")), 1)
              ]),
              i[4] || (i[4] = e("div", { class: "detail-row" }, [
                e("span", { class: "label" }, "Source:"),
                e("span", { class: "value" }, "Workspace index")
              ], -1))
            ]),
            e("div", Ys, [
              e("button", {
                class: "action-btn secondary",
                onClick: (A) => V(y.hash)
              }, " View in Workspace Index ↗ ", 8, Zs)
            ])
          ]))), 128))
        ])) : m("", !0),
        v.value.length ? (t(), o("section", Xs, [
          e("h4", Js, "LORAS (" + n(v.value.length) + ")", 1),
          (t(!0), o(R, null, U(v.value, (y) => (t(), o("div", {
            key: y.hash,
            class: "model-card"
          }, [
            e("div", Qs, [
              i[5] || (i[5] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", ea, [
                e("div", ta, n(y.filename), 1),
                e("div", oa, n(H(y.size_mb)), 1)
              ])
            ]),
            e("div", sa, [
              e("div", aa, [
                i[6] || (i[6] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", na, n(y.used_by.join(", ")), 1)
              ]),
              i[7] || (i[7] = e("div", { class: "detail-row" }, [
                e("span", { class: "label" }, "Source:"),
                e("span", { class: "value" }, "Workspace index")
              ], -1))
            ]),
            e("div", la, [
              e("button", {
                class: "action-btn secondary",
                onClick: (A) => V(y.hash)
              }, " View in Workspace Index ↗ ", 8, ia)
            ])
          ]))), 128))
        ])) : m("", !0),
        M.value.length ? (t(), o("section", ra, [
          e("h4", ca, "OTHER (" + n(M.value.length) + ")", 1),
          (t(!0), o(R, null, U(M.value, (y) => (t(), o("div", {
            key: y.hash,
            class: "model-card"
          }, [
            e("div", da, [
              i[8] || (i[8] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", ua, [
                e("div", ma, n(y.filename), 1),
                e("div", ga, n(H(y.size_mb)), 1)
              ])
            ]),
            e("div", ha, [
              e("div", va, [
                i[9] || (i[9] = e("span", { class: "label" }, "Type:", -1)),
                e("span", fa, n(y.type), 1)
              ]),
              e("div", pa, [
                i[10] || (i[10] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", ya, n(y.used_by.join(", ")), 1)
              ])
            ]),
            e("div", ba, [
              e("button", {
                class: "action-btn secondary",
                onClick: (A) => V(y.hash)
              }, " View in Workspace Index ↗ ", 8, _a)
            ])
          ]))), 128))
        ])) : m("", !0),
        D.value.length ? (t(), o("section", wa, [
          e("h4", ka, "MISSING (" + n(D.value.length) + ")", 1),
          (t(!0), o(R, null, U(D.value, (y) => {
            var A;
            return t(), o("div", {
              key: y.filename,
              class: "model-card missing"
            }, [
              e("div", $a, [
                i[12] || (i[12] = e("span", { class: "model-icon" }, "⚠", -1)),
                e("div", xa, [
                  e("div", Ca, n(y.filename), 1),
                  i[11] || (i[11] = e("div", { class: "model-status error" }, "Not found in workspace index", -1))
                ])
              ]),
              e("div", Sa, [
                e("div", Ea, [
                  i[13] || (i[13] = e("span", { class: "label" }, "Required by:", -1)),
                  e("span", La, n(((A = y.workflow_names) == null ? void 0 : A.join(", ")) || "Unknown"), 1)
                ])
              ]),
              e("div", Ma, [
                e("button", {
                  class: "action-btn",
                  onClick: (ae) => L(y.filename)
                }, " Download ", 8, Ia),
                e("button", {
                  class: "action-btn secondary",
                  onClick: (ae) => j(y.filename)
                }, " Search Workspace Index ", 8, za)
              ])
            ]);
          }), 128))
        ])) : m("", !0),
        E.value.length ? m("", !0) : (t(), o("div", Da, [
          $.value ? (t(), o("p", Oa, 'No models match "' + n($.value) + '"', 1)) : (t(), o("p", Na, "No models in this environment."))
        ])),
        d.value.length ? (t(), o("div", Ta, " Total: " + n(d.value.length) + " models • " + n(H(p.value)) + " (symlinked from workspace) ", 1)) : m("", !0)
      ]))
    ]));
  }
}), Wa = /* @__PURE__ */ X(Ra, [["__scopeId", "data-v-75454b46"]]), Ua = { class: "model-index-section" }, Aa = { class: "search-bar" }, Ba = {
  key: 0,
  class: "loading"
}, Ha = {
  key: 1,
  class: "error-message"
}, Pa = {
  key: 2,
  class: "models-content"
}, Ka = {
  key: 0,
  class: "summary-header"
}, Ga = {
  key: 1,
  class: "model-group"
}, Va = { class: "group-title" }, ja = { class: "model-header" }, Fa = { class: "model-info" }, qa = { class: "model-name" }, Ya = { class: "model-size" }, Za = { class: "model-details" }, Xa = { class: "detail-row" }, Ja = { class: "value hash" }, Qa = { class: "detail-row" }, en = { class: "value" }, tn = {
  key: 0,
  class: "detail-row"
}, on = { class: "value" }, sn = {
  key: 1,
  class: "detail-row"
}, an = { class: "model-actions" }, nn = ["onClick"], ln = ["onClick"], rn = ["onClick"], cn = {
  key: 2,
  class: "model-group"
}, dn = { class: "group-title" }, un = { class: "model-header" }, mn = { class: "model-info" }, gn = { class: "model-name" }, hn = { class: "model-size" }, vn = { class: "model-details" }, fn = { class: "detail-row" }, pn = { class: "value hash" }, yn = { class: "detail-row" }, bn = { class: "value" }, _n = {
  key: 0,
  class: "detail-row"
}, wn = { class: "value" }, kn = {
  key: 1,
  class: "detail-row"
}, $n = { class: "model-actions" }, xn = ["onClick"], Cn = ["onClick"], Sn = ["onClick"], En = {
  key: 3,
  class: "model-group"
}, Ln = { class: "group-title" }, Mn = { class: "model-header" }, In = { class: "model-info" }, zn = { class: "model-name" }, Dn = { class: "model-size" }, On = { class: "model-details" }, Nn = { class: "detail-row" }, Tn = { class: "value" }, Rn = { class: "detail-row" }, Wn = { class: "value hash" }, Un = { class: "detail-row" }, An = { class: "value" }, Bn = { class: "model-actions" }, Hn = ["onClick"], Pn = ["onClick"], Kn = ["onClick"], Gn = {
  key: 4,
  class: "empty-state"
}, Vn = { key: 0 }, jn = { key: 1 }, Fn = /* @__PURE__ */ Z({
  __name: "ModelIndexSection",
  setup(s) {
    const { getWorkspaceModels: f } = se(), u = w([]), c = w(!1), b = w(null), d = w("");
    z(
      () => u.value.filter((r) => r.type === "checkpoints" || r.category === "checkpoints")
    ), z(
      () => u.value.filter((r) => r.type === "loras" || r.category === "loras")
    ), z(
      () => u.value.filter(
        (r) => r.type !== "checkpoints" && r.category !== "checkpoints" && r.type !== "loras" && r.category !== "loras"
      )
    );
    const h = z(
      () => u.value.reduce((r, a) => r + (a.size_mb || 0), 0)
    ), _ = z(() => {
      const r = /* @__PURE__ */ new Set();
      return u.value.forEach((a) => {
        a.used_by && a.used_by.length > 0 && r.add("production");
      }), r.size;
    }), g = z(() => {
      if (!d.value.trim()) return u.value;
      const r = d.value.toLowerCase();
      return u.value.filter(
        (a) => a.filename.toLowerCase().includes(r) || a.sha256_hash && a.sha256_hash.toLowerCase().includes(r) || a.hash.toLowerCase().includes(r)
      );
    }), x = z(
      () => g.value.filter((r) => r.type === "checkpoints" || r.category === "checkpoints")
    ), $ = z(
      () => g.value.filter((r) => r.type === "loras" || r.category === "loras")
    ), p = z(
      () => g.value.filter(
        (r) => r.type !== "checkpoints" && r.category !== "checkpoints" && r.type !== "loras" && r.category !== "loras"
      )
    );
    function E(r) {
      return r >= 1024 ? `${(r / 1024).toFixed(1)} GB` : `${r} MB`;
    }
    function D(r) {
      return !r.used_by || r.used_by.length === 0 ? "Not used" : `${r.used_by.length} workflow(s)`;
    }
    function N(r) {
      navigator.clipboard.writeText(r), alert("Hash copied to clipboard");
    }
    function v(r) {
      var i;
      prompt("Enter model source URL:", ((i = r.sources) == null ? void 0 : i[0]) || "") !== null && alert("URL update not yet implemented");
    }
    function M(r) {
      const a = r.used_by && r.used_by.length > 0 ? `

⚠ WARNING: This model is used by ${r.used_by.length} workflow(s):
${r.used_by.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${r.filename}?${a}

This will free ${E(r.size_mb || 0)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function H() {
      alert("Scan for models not yet implemented");
    }
    function V() {
      alert("Add directory not yet implemented");
    }
    function j() {
      alert("Download new model not yet implemented");
    }
    async function L() {
      c.value = !0, b.value = null;
      try {
        u.value = await f();
      } catch (r) {
        b.value = r instanceof Error ? r.message : "Failed to load workspace models";
      } finally {
        c.value = !1;
      }
    }
    return ie(L), (r, a) => (t(), o("div", Ua, [
      e("div", { class: "section-header" }, [
        a[2] || (a[2] = e("h3", { class: "view-title" }, "WORKSPACE MODEL INDEX", -1)),
        e("div", { class: "header-actions" }, [
          e("button", {
            class: "action-btn",
            onClick: H
          }, " Scan for Models "),
          e("button", {
            class: "action-btn",
            onClick: V
          }, " Add Directory "),
          e("button", {
            class: "action-btn primary",
            onClick: j
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
            re(" DOWNLOAD + ", -1)
          ])])
        ])
      ]),
      a[17] || (a[17] = e("div", { class: "section-intro" }, [
        e("p", { class: "intro-text" }, " Content-addressable model storage shared across all environments. Models are deduplicated by SHA256 hash. ")
      ], -1)),
      e("div", Aa, [
        he(e("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (i) => d.value = i),
          type: "text",
          placeholder: "🔍 Search all indexed models...",
          class: "search-input"
        }, null, 512), [
          [ve, d.value]
        ])
      ]),
      c.value ? (t(), o("div", Ba, "Loading workspace models...")) : b.value ? (t(), o("div", Ha, n(b.value), 1)) : (t(), o("div", Pa, [
        u.value.length ? (t(), o("div", Ka, " Total: " + n(u.value.length) + " models • " + n(E(h.value)) + " • Used in " + n(_.value) + " environments ", 1)) : m("", !0),
        x.value.length ? (t(), o("section", Ga, [
          e("h4", Va, "/* CHECKPOINTS (" + n(x.value.length) + ") */", 1),
          (t(!0), o(R, null, U(x.value, (i) => {
            var y;
            return t(), o("div", {
              key: i.sha256_hash || i.hash,
              class: "model-card"
            }, [
              e("div", ja, [
                a[3] || (a[3] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", Fa, [
                  e("div", qa, n(i.filename), 1),
                  e("div", Ya, n(E(i.size_mb)), 1)
                ])
              ]),
              e("div", Za, [
                e("div", Xa, [
                  a[4] || (a[4] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", Ja, n(((y = i.sha256_hash) == null ? void 0 : y.substring(0, 16)) || i.hash) + "...", 1)
                ]),
                e("div", Qa, [
                  a[5] || (a[5] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", en, n(D(i)), 1)
                ]),
                i.sources && i.sources.length ? (t(), o("div", tn, [
                  a[6] || (a[6] = e("span", { class: "label" }, "Source URL:", -1)),
                  e("span", on, n(i.sources[0]), 1)
                ])) : (t(), o("div", sn, [...a[7] || (a[7] = [
                  e("span", { class: "label" }, "Source URL:", -1),
                  e("span", { class: "value warning" }, "(none)", -1)
                ])]))
              ]),
              e("div", an, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (A) => v(i)
                }, " Edit URL ", 8, nn),
                e("button", {
                  class: "action-btn-small",
                  onClick: (A) => N(i.sha256_hash || i.hash)
                }, " Copy Hash ", 8, ln),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (A) => M(i)
                }, " Delete ", 8, rn)
              ])
            ]);
          }), 128))
        ])) : m("", !0),
        $.value.length ? (t(), o("section", cn, [
          e("h4", dn, "/* LORAS (" + n($.value.length) + ") */", 1),
          (t(!0), o(R, null, U($.value, (i) => {
            var y;
            return t(), o("div", {
              key: i.sha256_hash || i.hash,
              class: "model-card"
            }, [
              e("div", un, [
                a[8] || (a[8] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", mn, [
                  e("div", gn, n(i.filename), 1),
                  e("div", hn, n(E(i.size_mb)), 1)
                ])
              ]),
              e("div", vn, [
                e("div", fn, [
                  a[9] || (a[9] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", pn, n(((y = i.sha256_hash) == null ? void 0 : y.substring(0, 16)) || i.hash) + "...", 1)
                ]),
                e("div", yn, [
                  a[10] || (a[10] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", bn, n(D(i)), 1)
                ]),
                i.sources && i.sources.length ? (t(), o("div", _n, [
                  a[11] || (a[11] = e("span", { class: "label" }, "Source URL:", -1)),
                  e("span", wn, n(i.sources[0]), 1)
                ])) : (t(), o("div", kn, [...a[12] || (a[12] = [
                  e("span", { class: "label" }, "Source URL:", -1),
                  e("span", { class: "value warning" }, "(none)", -1)
                ])]))
              ]),
              e("div", $n, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (A) => v(i)
                }, " Edit URL ", 8, xn),
                e("button", {
                  class: "action-btn-small",
                  onClick: (A) => N(i.sha256_hash || i.hash)
                }, " Copy Hash ", 8, Cn),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (A) => M(i)
                }, " Delete ", 8, Sn)
              ])
            ]);
          }), 128))
        ])) : m("", !0),
        p.value.length ? (t(), o("section", En, [
          e("h4", Ln, "/* OTHER (" + n(p.value.length) + ") */", 1),
          (t(!0), o(R, null, U(p.value, (i) => {
            var y;
            return t(), o("div", {
              key: i.sha256_hash || i.hash,
              class: "model-card"
            }, [
              e("div", Mn, [
                a[13] || (a[13] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", In, [
                  e("div", zn, n(i.filename), 1),
                  e("div", Dn, n(E(i.size_mb)), 1)
                ])
              ]),
              e("div", On, [
                e("div", Nn, [
                  a[14] || (a[14] = e("span", { class: "label" }, "Type:", -1)),
                  e("span", Tn, n(i.type), 1)
                ]),
                e("div", Rn, [
                  a[15] || (a[15] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", Wn, n(((y = i.sha256_hash) == null ? void 0 : y.substring(0, 16)) || i.hash) + "...", 1)
                ]),
                e("div", Un, [
                  a[16] || (a[16] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", An, n(D(i)), 1)
                ])
              ]),
              e("div", Bn, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (A) => v(i)
                }, " Edit URL ", 8, Hn),
                e("button", {
                  class: "action-btn-small",
                  onClick: (A) => N(i.sha256_hash || i.hash)
                }, " Copy Hash ", 8, Pn),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (A) => M(i)
                }, " Delete ", 8, Kn)
              ])
            ]);
          }), 128))
        ])) : m("", !0),
        g.value.length ? m("", !0) : (t(), o("div", Gn, [
          d.value ? (t(), o("p", Vn, 'No models match "' + n(d.value) + '"', 1)) : (t(), o("p", jn, "No models in workspace index."))
        ]))
      ]))
    ]));
  }
}), qn = /* @__PURE__ */ X(Fn, [["__scopeId", "data-v-5f7a38f2"]]), Yn = { class: "dialog-content" }, Zn = { class: "dialog-header" }, Xn = { class: "header-info" }, Jn = { class: "commit-hash" }, Qn = {
  key: 0,
  class: "commit-refs"
}, el = { class: "dialog-body" }, tl = { class: "commit-message" }, ol = { class: "commit-date" }, sl = {
  key: 0,
  class: "loading"
}, al = {
  key: 1,
  class: "changes-section"
}, nl = { class: "stats-row" }, ll = { class: "stat" }, il = { class: "stat insertions" }, rl = { class: "stat deletions" }, cl = {
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
}, gl = { class: "change-item" }, hl = { class: "dialog-footer" }, vl = /* @__PURE__ */ Z({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(s) {
    const f = s, { getCommitDetail: u } = se(), c = w(null), b = w(!0), d = z(() => {
      if (!c.value) return !1;
      const _ = c.value.changes.workflows;
      return _.added.length > 0 || _.modified.length > 0 || _.deleted.length > 0;
    }), h = z(() => {
      if (!c.value) return !1;
      const _ = c.value.changes.nodes;
      return _.added.length > 0 || _.removed.length > 0;
    });
    return ie(async () => {
      try {
        c.value = await u(f.commit.hash);
      } finally {
        b.value = !1;
      }
    }), (_, g) => {
      var x, $, p, E, D, N;
      return t(), o("div", {
        class: "dialog-overlay",
        onClick: g[3] || (g[3] = oe((v) => _.$emit("close"), ["self"]))
      }, [
        e("div", Yn, [
          e("div", Zn, [
            e("div", Xn, [
              g[4] || (g[4] = e("h3", { class: "dialog-title" }, "COMMIT DETAILS", -1)),
              e("span", Jn, n(((x = c.value) == null ? void 0 : x.short_hash) || s.commit.short_hash || (($ = s.commit.hash) == null ? void 0 : $.slice(0, 7))), 1),
              (E = (p = c.value) == null ? void 0 : p.refs) != null && E.length ? (t(), o("span", Qn, [
                (t(!0), o(R, null, U(c.value.refs, (v) => (t(), o("span", {
                  key: v,
                  class: "ref-badge"
                }, n(v), 1))), 128))
              ])) : m("", !0)
            ]),
            e("button", {
              class: "icon-btn",
              onClick: g[0] || (g[0] = (v) => _.$emit("close"))
            }, [...g[5] || (g[5] = [
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
          e("div", el, [
            e("div", tl, n(((D = c.value) == null ? void 0 : D.message) || s.commit.message), 1),
            e("div", ol, n(((N = c.value) == null ? void 0 : N.date_relative) || s.commit.date_relative || s.commit.relative_date), 1),
            b.value ? (t(), o("div", sl, "Loading details...")) : c.value ? (t(), o("div", al, [
              e("div", nl, [
                e("span", ll, n(c.value.stats.files_changed) + " files", 1),
                e("span", il, "+" + n(c.value.stats.insertions), 1),
                e("span", rl, "-" + n(c.value.stats.deletions), 1)
              ]),
              d.value ? (t(), o("div", cl, [
                g[9] || (g[9] = e("h4", { class: "change-title" }, "/* WORKFLOWS */", -1)),
                (t(!0), o(R, null, U(c.value.changes.workflows.added, (v) => (t(), o("div", {
                  key: "add-" + v,
                  class: "change-item added"
                }, [
                  g[6] || (g[6] = e("span", { class: "change-icon" }, "+", -1)),
                  e("span", null, n(v), 1)
                ]))), 128)),
                (t(!0), o(R, null, U(c.value.changes.workflows.modified, (v) => (t(), o("div", {
                  key: "mod-" + v,
                  class: "change-item modified"
                }, [
                  g[7] || (g[7] = e("span", { class: "change-icon" }, "~", -1)),
                  e("span", null, n(v), 1)
                ]))), 128)),
                (t(!0), o(R, null, U(c.value.changes.workflows.deleted, (v) => (t(), o("div", {
                  key: "del-" + v,
                  class: "change-item deleted"
                }, [
                  g[8] || (g[8] = e("span", { class: "change-icon" }, "-", -1)),
                  e("span", null, n(v), 1)
                ]))), 128))
              ])) : m("", !0),
              h.value ? (t(), o("div", dl, [
                g[12] || (g[12] = e("h4", { class: "change-title" }, "/* NODES */", -1)),
                (t(!0), o(R, null, U(c.value.changes.nodes.added, (v) => (t(), o("div", {
                  key: "add-" + v.name,
                  class: "change-item added"
                }, [
                  g[10] || (g[10] = e("span", { class: "change-icon" }, "+", -1)),
                  e("span", null, n(v.name), 1),
                  v.version ? (t(), o("span", ul, "(" + n(v.version) + ")", 1)) : m("", !0)
                ]))), 128)),
                (t(!0), o(R, null, U(c.value.changes.nodes.removed, (v) => (t(), o("div", {
                  key: "rem-" + v.name,
                  class: "change-item deleted"
                }, [
                  g[11] || (g[11] = e("span", { class: "change-icon" }, "-", -1)),
                  e("span", null, n(v.name), 1)
                ]))), 128))
              ])) : m("", !0),
              c.value.changes.models.resolved > 0 ? (t(), o("div", ml, [
                g[14] || (g[14] = e("h4", { class: "change-title" }, "/* MODELS */", -1)),
                e("div", gl, [
                  g[13] || (g[13] = e("span", { class: "change-icon" }, "●", -1)),
                  e("span", null, n(c.value.changes.models.resolved) + " model(s) resolved", 1)
                ])
              ])) : m("", !0)
            ])) : m("", !0)
          ]),
          e("div", hl, [
            e("button", {
              class: "btn secondary",
              onClick: g[1] || (g[1] = (v) => _.$emit("createBranch", s.commit))
            }, " Create Branch From Here "),
            e("button", {
              class: "btn primary",
              onClick: g[2] || (g[2] = (v) => _.$emit("checkout", s.commit))
            }, " Checkout ")
          ])
        ])
      ]);
    };
  }
}), fl = /* @__PURE__ */ X(vl, [["__scopeId", "data-v-fed4313a"]]), pl = { class: "dialog-content" }, yl = { class: "dialog-header" }, bl = { class: "dialog-title" }, _l = { class: "dialog-body" }, wl = { class: "dialog-message" }, kl = {
  key: 0,
  class: "dialog-details"
}, $l = {
  key: 1,
  class: "dialog-warning"
}, xl = { class: "dialog-footer" }, Cl = /* @__PURE__ */ Z({
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
  setup(s) {
    return (f, u) => (t(), o("div", {
      class: "dialog-overlay",
      onClick: u[3] || (u[3] = oe((c) => f.$emit("cancel"), ["self"]))
    }, [
      e("div", pl, [
        e("div", yl, [
          e("h3", bl, n(s.title), 1)
        ]),
        e("div", _l, [
          e("p", wl, n(s.message), 1),
          s.details && s.details.length ? (t(), o("div", kl, [
            (t(!0), o(R, null, U(s.details, (c, b) => (t(), o("div", {
              key: b,
              class: "detail-item"
            }, " • " + n(c), 1))), 128))
          ])) : m("", !0),
          s.warning ? (t(), o("p", $l, [
            u[4] || (u[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
            re(" " + n(s.warning), 1)
          ])) : m("", !0)
        ]),
        e("div", xl, [
          e("button", {
            class: "dialog-btn cancel",
            onClick: u[0] || (u[0] = (c) => f.$emit("cancel"))
          }, n(s.cancelLabel), 1),
          s.secondaryAction ? (t(), o("button", {
            key: 0,
            class: "dialog-btn secondary",
            onClick: u[1] || (u[1] = (c) => f.$emit("secondary"))
          }, n(s.secondaryLabel), 1)) : m("", !0),
          e("button", {
            class: B(["dialog-btn primary", { destructive: s.destructive }]),
            onClick: u[2] || (u[2] = (c) => f.$emit("confirm"))
          }, n(s.confirmLabel), 3)
        ])
      ])
    ]));
  }
}), Sl = /* @__PURE__ */ X(Cl, [["__scopeId", "data-v-d24c6c0b"]]), El = { class: "comfygit-panel" }, Ll = { class: "panel-header" }, Ml = { class: "header-left" }, Il = {
  key: 0,
  class: "header-info"
}, zl = { class: "env-name" }, Dl = { class: "branch-name" }, Ol = ["title"], Nl = { class: "header-actions" }, Tl = { class: "env-switcher" }, Rl = { class: "panel-main" }, Wl = { class: "sidebar" }, Ul = { class: "sidebar-section" }, Al = { class: "sidebar-section" }, Bl = { class: "sidebar-section" }, Hl = { class: "content-area" }, Pl = {
  key: 0,
  class: "error-message"
}, Kl = {
  key: 1,
  class: "loading"
}, Gl = {
  key: 5,
  class: "view-placeholder"
}, Vl = {
  key: 6,
  class: "view-placeholder"
}, jl = {
  key: 7,
  class: "view-placeholder"
}, Fl = {
  key: 9,
  class: "view-placeholder"
}, ql = {
  key: 10,
  class: "view-placeholder"
}, Yl = {
  key: 11,
  class: "view-placeholder"
}, Zl = {
  key: 12,
  class: "view-placeholder"
}, Xl = {
  key: 13,
  class: "view-placeholder"
}, Jl = { class: "dialog-content env-selector-dialog" }, Ql = { class: "dialog-header" }, ei = { class: "dialog-body" }, ti = { class: "env-list" }, oi = { class: "env-info" }, si = { class: "env-name-row" }, ai = { class: "env-indicator" }, ni = { class: "env-name" }, li = {
  key: 0,
  class: "env-branch"
}, ii = {
  key: 1,
  class: "current-label"
}, ri = { class: "env-stats" }, ci = ["onClick"], di = { class: "toast-container" }, ui = { class: "toast-icon" }, mi = { class: "toast-message" }, gi = /* @__PURE__ */ Z({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(s, { emit: f }) {
    const u = f, {
      getStatus: c,
      getHistory: b,
      exportEnv: d,
      getBranches: h,
      checkout: _,
      createBranch: g,
      switchBranch: x,
      getEnvironments: $
    } = se(), p = w(null), E = w([]), D = w([]), N = w([]), v = z(() => N.value.find((k) => k.is_current)), M = w(!1), H = w(null), V = w(null), j = w(!1), L = w("status"), r = w("this-env");
    function a(k, l) {
      L.value = k, r.value = l;
    }
    function i(k) {
      const P = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[k];
      P && a(P.view, P.section);
    }
    const y = w(null), A = w([]);
    let ae = 0;
    function C(k, l = "info", P = 3e3) {
      const F = ++ae;
      return A.value.push({ id: F, message: k, type: l }), P > 0 && setTimeout(() => {
        A.value = A.value.filter((ne) => ne.id !== F);
      }, P), F;
    }
    function O(k) {
      A.value = A.value.filter((l) => l.id !== k);
    }
    function T(k) {
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
    const J = z(() => {
      if (!p.value) return "neutral";
      const k = p.value.workflows, l = k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || p.value.has_changes;
      return p.value.comparison.is_synced ? l ? "warning" : "success" : "error";
    }), S = z(() => p.value ? J.value === "success" ? "All synced" : J.value === "warning" ? "Uncommitted changes" : J.value === "error" ? "Not synced" : "" : "");
    async function W() {
      M.value = !0, H.value = null;
      try {
        const [k, l, P, F] = await Promise.all([
          c(),
          b(),
          h(),
          $()
        ]);
        p.value = k, E.value = l.commits, D.value = P.branches, N.value = F, u("statusUpdate", k);
      } catch (k) {
        H.value = k instanceof Error ? k.message : "Failed to load status", p.value = null, E.value = [], D.value = [];
      } finally {
        M.value = !1;
      }
    }
    function q(k) {
      V.value = k;
    }
    async function de(k) {
      var P;
      V.value = null;
      const l = p.value && (p.value.workflows.new.length > 0 || p.value.workflows.modified.length > 0 || p.value.workflows.deleted.length > 0 || p.value.has_changes);
      y.value = {
        title: l ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: l ? "You have uncommitted changes that will be lost." : `Checkout commit ${k.short_hash || ((P = k.hash) == null ? void 0 : P.slice(0, 7))}?`,
        details: l ? Ce() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: l ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: l,
        onConfirm: async () => {
          var ue;
          y.value = null;
          const F = C(`Checking out ${k.short_hash || ((ue = k.hash) == null ? void 0 : ue.slice(0, 7))}...`, "info", 0), ne = await _(k.hash, l);
          O(F), ne.status === "success" ? C("Restarting ComfyUI...", "success") : C(ne.message || "Checkout failed", "error");
        }
      };
    }
    async function fe(k) {
      const l = p.value && (p.value.workflows.new.length > 0 || p.value.workflows.modified.length > 0 || p.value.workflows.deleted.length > 0 || p.value.has_changes);
      y.value = {
        title: l ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: l ? "You have uncommitted changes." : `Switch to branch "${k}"?`,
        details: l ? Ce() : void 0,
        warning: l ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: l ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          y.value = null;
          const P = C(`Switching to ${k}...`, "info", 0), F = await x(k, l);
          O(P), F.status === "success" ? C("Restarting ComfyUI...", "success") : C(F.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ne(k) {
      const l = C(`Creating branch ${k}...`, "info", 0), P = await g(k);
      O(l), P.status === "success" ? (C(`Branch "${k}" created`, "success"), await W()) : C(P.message || "Failed to create branch", "error");
    }
    async function Te(k) {
      V.value = null;
      const l = prompt("Enter branch name:");
      if (l) {
        const P = C(`Creating branch ${l}...`, "info", 0), F = await g(l, k.hash);
        O(P), F.status === "success" ? (C(`Branch "${l}" created from ${k.short_hash}`, "success"), await W()) : C(F.message || "Failed to create branch", "error");
      }
    }
    async function Re(k) {
      j.value = !1, C("Environment switching not yet implemented", "warning");
    }
    function Ce() {
      if (!p.value) return [];
      const k = [], l = p.value.workflows;
      return l.new.length && k.push(`${l.new.length} new workflow(s)`), l.modified.length && k.push(`${l.modified.length} modified workflow(s)`), l.deleted.length && k.push(`${l.deleted.length} deleted workflow(s)`), k;
    }
    async function We() {
      const k = C("Exporting environment...", "info", 0);
      try {
        const l = await d();
        O(k), l.status === "success" ? (C("Export complete", "success"), alert(`Export successful!

Saved to: ${l.path}

Models without sources: ${l.models_without_sources}`)) : (C("Export failed", "error"), alert(`Export failed: ${l.message}`));
      } catch (l) {
        O(k), C("Export error", "error"), alert(`Export error: ${l instanceof Error ? l.message : "Unknown error"}`);
      }
    }
    return ie(W), (k, l) => {
      var P, F, ne, ue;
      return t(), o("div", El, [
        e("div", Ll, [
          e("div", Ml, [
            l[20] || (l[20] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            p.value ? (t(), o("div", Il, [
              e("span", zl, n(((P = v.value) == null ? void 0 : P.name) || p.value.environment), 1),
              e("span", Dl, n(p.value.branch || "detached"), 1),
              e("span", {
                class: B(["status-dot", J.value]),
                title: S.value
              }, null, 10, Ol)
            ])) : m("", !0)
          ]),
          e("div", Nl, [
            e("button", {
              class: B(["icon-btn", { spinning: M.value }]),
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
              onClick: l[0] || (l[0] = (I) => u("close")),
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
        e("div", Tl, [
          l[24] || (l[24] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: l[1] || (l[1] = (I) => j.value = !0)
          }, [
            e("span", null, n(((F = v.value) == null ? void 0 : F.name) || ((ne = p.value) == null ? void 0 : ne.environment) || "Loading..."), 1),
            l[23] || (l[23] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Rl, [
          e("div", Wl, [
            e("div", Ul, [
              l[25] || (l[25] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "status" && r.value === "this-env" }]),
                onClick: l[2] || (l[2] = (I) => a("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "workflows" }]),
                onClick: l[3] || (l[3] = (I) => a("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "models-env" }]),
                onClick: l[4] || (l[4] = (I) => a("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "branches" }]),
                onClick: l[5] || (l[5] = (I) => a("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "history" }]),
                onClick: l[6] || (l[6] = (I) => a("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "nodes" }]),
                onClick: l[7] || (l[7] = (I) => a("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "debug-env" }]),
                onClick: l[8] || (l[8] = (I) => a("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            l[28] || (l[28] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Al, [
              l[26] || (l[26] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "environments" }]),
                onClick: l[9] || (l[9] = (I) => a("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "model-index" }]),
                onClick: l[10] || (l[10] = (I) => a("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "settings" }]),
                onClick: l[11] || (l[11] = (I) => a("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "debug-workspace" }]),
                onClick: l[12] || (l[12] = (I) => a("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            l[29] || (l[29] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Bl, [
              l[27] || (l[27] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "export" }]),
                onClick: l[13] || (l[13] = (I) => a("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "import" }]),
                onClick: l[14] || (l[14] = (I) => a("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: B(["sidebar-item", { active: L.value === "remotes" }]),
                onClick: l[15] || (l[15] = (I) => a("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Hl, [
            H.value ? (t(), o("div", Pl, n(H.value), 1)) : !p.value && L.value === "status" ? (t(), o("div", Kl, " Loading status... ")) : (t(), o(R, { key: 2 }, [
              L.value === "status" ? (t(), ee(ct, {
                key: 0,
                status: p.value
              }, null, 8, ["status"])) : L.value === "workflows" ? (t(), ee(Ds, {
                key: 1,
                onRefresh: W
              })) : L.value === "models-env" ? (t(), ee(Wa, {
                key: 2,
                onNavigate: i
              })) : L.value === "branches" ? (t(), ee(wt, {
                key: 3,
                branches: D.value,
                current: ((ue = p.value) == null ? void 0 : ue.branch) || null,
                onSwitch: fe,
                onCreate: Ne
              }, null, 8, ["branches", "current"])) : L.value === "history" ? (t(), ee(zt, {
                key: 4,
                commits: E.value,
                onSelect: q,
                onCheckout: de
              }, null, 8, ["commits"])) : L.value === "nodes" ? (t(), o("div", Gl, [...l[30] || (l[30] = [
                e("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                e("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : L.value === "debug-env" ? (t(), o("div", Vl, [...l[31] || (l[31] = [
                e("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                e("p", null, "Environment logs view coming soon...", -1)
              ])])) : L.value === "environments" ? (t(), o("div", jl, [...l[32] || (l[32] = [
                e("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                e("p", null, "Environment management UI coming soon...", -1)
              ])])) : L.value === "model-index" ? (t(), ee(qn, { key: 8 })) : L.value === "settings" ? (t(), o("div", Fl, [...l[33] || (l[33] = [
                e("h3", { class: "view-title" }, "SETTINGS", -1),
                e("p", null, "Settings UI coming soon...", -1)
              ])])) : L.value === "debug-workspace" ? (t(), o("div", ql, [...l[34] || (l[34] = [
                e("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                e("p", null, "Workspace logs view coming soon...", -1)
              ])])) : L.value === "export" ? (t(), o("div", Yl, [
                l[36] || (l[36] = e("h3", { class: "view-title" }, "EXPORT", -1)),
                e("button", {
                  class: "export-btn",
                  onClick: We
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
                  re(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : L.value === "import" ? (t(), o("div", Zl, [...l[37] || (l[37] = [
                e("h3", { class: "view-title" }, "IMPORT", -1),
                e("p", null, "Import UI coming soon...", -1)
              ])])) : L.value === "remotes" ? (t(), o("div", Xl, [...l[38] || (l[38] = [
                e("h3", { class: "view-title" }, "REMOTES", -1),
                e("p", null, "Git remotes UI coming soon...", -1)
              ])])) : m("", !0)
            ], 64))
          ])
        ]),
        V.value ? (t(), ee(fl, {
          key: 0,
          commit: V.value,
          onClose: l[16] || (l[16] = (I) => V.value = null),
          onCheckout: de,
          onCreateBranch: Te
        }, null, 8, ["commit"])) : m("", !0),
        y.value ? (t(), ee(Sl, {
          key: 1,
          title: y.value.title,
          message: y.value.message,
          details: y.value.details,
          warning: y.value.warning,
          confirmLabel: y.value.confirmLabel,
          cancelLabel: y.value.cancelLabel,
          secondaryLabel: y.value.secondaryLabel,
          secondaryAction: y.value.secondaryAction,
          destructive: y.value.destructive,
          onConfirm: y.value.onConfirm,
          onCancel: l[17] || (l[17] = (I) => y.value = null),
          onSecondary: y.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : m("", !0),
        j.value ? (t(), o("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: l[19] || (l[19] = oe((I) => j.value = !1, ["self"]))
        }, [
          e("div", Jl, [
            e("div", Ql, [
              l[40] || (l[40] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: l[18] || (l[18] = (I) => j.value = !1)
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
            e("div", ei, [
              l[41] || (l[41] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", ti, [
                (t(!0), o(R, null, U(N.value, (I) => (t(), o("div", {
                  key: I.name,
                  class: B(["env-item", { current: I.is_current }])
                }, [
                  e("div", oi, [
                    e("div", si, [
                      e("span", ai, n(I.is_current ? "●" : "○"), 1),
                      e("span", ni, n(I.name), 1),
                      I.current_branch ? (t(), o("span", li, "(" + n(I.current_branch) + ")", 1)) : m("", !0),
                      I.is_current ? (t(), o("span", ii, "CURRENT")) : m("", !0)
                    ]),
                    e("div", ri, n(I.workflow_count) + " workflows • " + n(I.node_count) + " nodes ", 1)
                  ]),
                  I.is_current ? m("", !0) : (t(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Hi) => Re(I.name)
                  }, " SWITCH ", 8, ci))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : m("", !0),
        e("div", di, [
          Ae(Be, { name: "toast" }, {
            default: He(() => [
              (t(!0), o(R, null, U(A.value, (I) => (t(), o("div", {
                key: I.id,
                class: B(["toast", I.type])
              }, [
                e("span", ui, n(T(I.type)), 1),
                e("span", mi, n(I.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), hi = /* @__PURE__ */ X(gi, [["__scopeId", "data-v-fd3a3e33"]]), vi = { class: "commit-popover" }, fi = { class: "popover-content" }, pi = {
  key: 0,
  class: "changes-summary"
}, yi = {
  key: 0,
  class: "change-item"
}, bi = {
  key: 1,
  class: "change-item"
}, _i = {
  key: 2,
  class: "change-item"
}, wi = {
  key: 3,
  class: "change-item"
}, ki = {
  key: 4,
  class: "change-item"
}, $i = {
  key: 1,
  class: "no-changes"
}, xi = {
  key: 2,
  class: "loading"
}, Ci = { class: "message-section" }, Si = ["placeholder", "disabled", "onKeydown"], Ei = { class: "popover-footer" }, Li = ["disabled"], Mi = /* @__PURE__ */ Z({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(s, { emit: f }) {
    const u = s, c = f, { commit: b } = se(), d = w(""), h = w(!1), _ = w(null), g = z(() => {
      if (!u.status) return !1;
      const $ = u.status.workflows;
      return $.new.length > 0 || $.modified.length > 0 || $.deleted.length > 0 || u.status.has_changes;
    });
    async function x() {
      var $, p, E;
      if (!(!g.value || !d.value.trim() || h.value)) {
        h.value = !0, _.value = null;
        try {
          const D = await b(d.value.trim());
          D.status === "success" ? (_.value = {
            type: "success",
            message: `Committed: ${(($ = D.summary) == null ? void 0 : $.new) || 0} new, ${((p = D.summary) == null ? void 0 : p.modified) || 0} modified, ${((E = D.summary) == null ? void 0 : E.deleted) || 0} deleted`
          }, d.value = "", setTimeout(() => c("committed"), 1e3)) : D.status === "no_changes" ? _.value = { type: "error", message: "No changes to commit" } : _.value = { type: "error", message: D.message || "Commit failed" };
        } catch (D) {
          _.value = { type: "error", message: D instanceof Error ? D.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return ($, p) => (t(), o("div", vi, [
      p[7] || (p[7] = e("div", { class: "popover-header" }, [
        e("h3", { class: "popover-title" }, "Commit Changes")
      ], -1)),
      e("div", fi, [
        s.status && g.value ? (t(), o("div", pi, [
          s.status.workflows.new.length ? (t(), o("div", yi, [
            p[2] || (p[2] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(s.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : m("", !0),
          s.status.workflows.modified.length ? (t(), o("div", bi, [
            p[3] || (p[3] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, n(s.status.workflows.modified.length) + " modified", 1)
          ])) : m("", !0),
          s.status.workflows.deleted.length ? (t(), o("div", _i, [
            p[4] || (p[4] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(s.status.workflows.deleted.length) + " deleted", 1)
          ])) : m("", !0),
          s.status.git_changes.nodes_added.length ? (t(), o("div", wi, [
            p[5] || (p[5] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(s.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : m("", !0),
          s.status.git_changes.nodes_removed.length ? (t(), o("div", ki, [
            p[6] || (p[6] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(s.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : m("", !0)
        ])) : s.status ? (t(), o("div", $i, " No changes to commit ")) : (t(), o("div", xi, " Loading... ")),
        e("div", Ci, [
          he(e("textarea", {
            "onUpdate:modelValue": p[0] || (p[0] = (E) => d.value = E),
            class: "commit-input",
            placeholder: g.value ? "Describe your changes..." : "No changes",
            disabled: !g.value || h.value,
            rows: "3",
            onKeydown: [
              ye(oe(x, ["ctrl"]), ["enter"]),
              ye(oe(x, ["meta"]), ["enter"])
            ]
          }, null, 40, Si), [
            [ve, d.value]
          ])
        ]),
        _.value ? (t(), o("div", {
          key: 3,
          class: B(["result", _.value.type])
        }, n(_.value.message), 3)) : m("", !0)
      ]),
      e("div", Ei, [
        e("button", {
          class: "cancel-btn",
          onClick: p[1] || (p[1] = (E) => c("close"))
        }, "Cancel"),
        e("button", {
          class: "commit-btn",
          disabled: !g.value || !d.value.trim() || h.value,
          onClick: x
        }, n(h.value ? "Committing..." : "Commit"), 9, Li)
      ])
    ]));
  }
}), Ii = /* @__PURE__ */ X(Mi, [["__scopeId", "data-v-940bff74"]]), zi = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 11px;--cg-font-size-sm: 13px;--cg-font-size-base: 14px;--cg-font-size-lg: 16px;--cg-font-size-xl: 18px;--cg-font-size-2xl: 20px;--cg-panel-width: 680px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .commit-item{border-radius:var(--cg-radius-md);border-left:3px solid var(--cg-color-border-subtle);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', Di = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 12px;--cg-font-size-sm: 14px;--cg-font-size-base: 17px;--cg-font-size-lg: 20px;--cg-font-size-xl: 24px;--cg-font-size-2xl: 28px;--cg-panel-width: 754px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}', Oi = {
  comfy: zi,
  phosphor: Di
}, $e = "comfy", Ie = "comfygit-theme";
let le = null, ze = $e;
function Ni() {
  try {
    const s = localStorage.getItem(Ie);
    if (s && (s === "comfy" || s === "phosphor"))
      return s;
  } catch {
  }
  return $e;
}
function De(s = $e) {
  le && le.remove(), le = document.createElement("style"), le.id = "comfygit-theme-styles", le.setAttribute("data-theme", s), le.textContent = Oi[s], document.head.appendChild(le), document.body.setAttribute("data-comfygit-theme", s), ze = s;
  try {
    localStorage.setItem(Ie, s);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${s}`);
}
function Ti() {
  return ze;
}
function Ri(s) {
  De(s);
}
const xe = document.createElement("link");
xe.rel = "stylesheet";
xe.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(xe);
const Wi = Ni();
De(Wi);
window.ComfyGit = {
  setTheme: (s) => {
    console.log(`[ComfyGit] Switching to theme: ${s}`), Ri(s);
  },
  getTheme: () => {
    const s = Ti();
    return console.log(`[ComfyGit] Current theme: ${s}`), s;
  }
};
let Q = null, Y = null, ge = null;
const ce = w(null);
async function ke() {
  var s;
  if (!((s = window.app) != null && s.api)) return null;
  try {
    const f = await window.app.api.fetchApi("/v2/comfygit/status");
    f.ok && (ce.value = await f.json());
  } catch {
  }
}
function Ui() {
  if (!ce.value) return !1;
  const s = ce.value.workflows;
  return s.new.length > 0 || s.modified.length > 0 || s.deleted.length > 0 || ce.value.has_changes;
}
function Ai() {
  Q && Q.remove(), Q = document.createElement("div"), Q.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Q.appendChild(s), Q.addEventListener("click", (c) => {
    c.target === Q && we();
  });
  const f = (c) => {
    c.key === "Escape" && (we(), document.removeEventListener("keydown", f));
  };
  document.addEventListener("keydown", f), Ee({
    render: () => Le(hi, {
      onClose: we,
      onStatusUpdate: (c) => {
        ce.value = c, be();
      }
    })
  }).mount(s), document.body.appendChild(Q);
}
function we() {
  Q && (Q.remove(), Q = null);
}
function Bi(s) {
  me(), Y = document.createElement("div"), Y.className = "comfygit-commit-popover-container";
  const f = s.getBoundingClientRect();
  Y.style.position = "fixed", Y.style.top = `${f.bottom + 8}px`, Y.style.right = `${window.innerWidth - f.right}px`, Y.style.zIndex = "10001";
  const u = (b) => {
    Y && !Y.contains(b.target) && b.target !== s && (me(), document.removeEventListener("mousedown", u));
  };
  setTimeout(() => document.addEventListener("mousedown", u), 0);
  const c = (b) => {
    b.key === "Escape" && (me(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), ge = Ee({
    render: () => Le(Ii, {
      status: ce.value,
      onClose: me,
      onCommitted: () => {
        me(), ke().then(be);
      }
    })
  }), ge.mount(Y), document.body.appendChild(Y);
}
function me() {
  ge && (ge.unmount(), ge = null), Y && (Y.remove(), Y = null);
}
let te = null;
function be() {
  if (!te) return;
  const s = te.querySelector(".commit-indicator");
  s && (s.style.display = Ui() ? "block" : "none");
}
const Oe = document.createElement("style");
Oe.textContent = `
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
document.head.appendChild(Oe);
_e.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var u, c;
    const s = document.createElement("div");
    s.className = "comfygit-btn-group";
    const f = document.createElement("button");
    f.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", f.textContent = "ComfyGit", f.title = "ComfyGit Control Panel", f.onclick = Ai, te = document.createElement("button"), te.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", te.innerHTML = 'Commit <span class="commit-indicator"></span>', te.title = "Quick Commit", te.onclick = () => Bi(te), s.appendChild(f), s.appendChild(te), (c = (u = _e.menu) == null ? void 0 : u.settingsGroup) != null && c.element && (_e.menu.settingsGroup.element.before(s), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ke(), be(), setInterval(async () => {
      await ke(), be();
    }, 3e4);
  }
});
