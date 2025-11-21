import { app as Ce } from "../../scripts/app.js";
import { defineComponent as X, computed as I, createElementBlock as s, openBlock as t, createElementVNode as e, createCommentVNode as g, toDisplayString as n, ref as w, nextTick as He, withDirectives as ke, withKeys as we, vModelText as $e, Fragment as T, renderList as A, normalizeClass as W, withModifiers as fe, onMounted as re, onUnmounted as Pe, createBlock as q, Teleport as Ge, renderSlot as he, resolveDynamicComponent as Ke, withCtx as N, createVNode as F, createTextVNode as U, TransitionGroup as je, createApp as Oe, h as De } from "vue";
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
}, gt = /* @__PURE__ */ X({
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
    return (p, d) => (t(), s("div", Fe, [
      d[18] || (d[18] = e("h3", { class: "section-title" }, "Status", -1)),
      e("div", qe, [
        e("div", Ye, [
          d[8] || (d[8] = e("h4", { class: "column-title" }, "Workflows", -1)),
          o.status.workflows.new.length ? (t(), s("div", Ze, [
            d[0] || (d[0] = e("span", { class: "icon" }, "●", -1)),
            e("span", Xe, n(o.status.workflows.new.length), 1),
            d[1] || (d[1] = e("span", { class: "label" }, "new", -1))
          ])) : g("", !0),
          o.status.workflows.modified.length ? (t(), s("div", Je, [
            d[2] || (d[2] = e("span", { class: "icon" }, "●", -1)),
            e("span", Qe, n(o.status.workflows.modified.length), 1),
            d[3] || (d[3] = e("span", { class: "label" }, "modified", -1))
          ])) : g("", !0),
          o.status.workflows.deleted.length ? (t(), s("div", et, [
            d[4] || (d[4] = e("span", { class: "icon" }, "●", -1)),
            e("span", tt, n(o.status.workflows.deleted.length), 1),
            d[5] || (d[5] = e("span", { class: "label" }, "deleted", -1))
          ])) : g("", !0),
          e("div", ot, [
            d[6] || (d[6] = e("span", { class: "icon synced" }, "✓", -1)),
            e("span", st, n(o.status.workflows.synced.length), 1),
            d[7] || (d[7] = e("span", { class: "label" }, "synced", -1))
          ])
        ]),
        e("div", at, [
          d[15] || (d[15] = e("h4", { class: "column-title" }, "Git Changes", -1)),
          o.status.git_changes.nodes_added.length ? (t(), s("div", nt, [
            d[9] || (d[9] = e("span", { class: "icon" }, "●", -1)),
            e("span", lt, n(o.status.git_changes.nodes_added.length), 1),
            d[10] || (d[10] = e("span", { class: "label" }, "node added", -1))
          ])) : g("", !0),
          o.status.git_changes.nodes_removed.length ? (t(), s("div", rt, [
            d[11] || (d[11] = e("span", { class: "icon" }, "●", -1)),
            e("span", it, n(o.status.git_changes.nodes_removed.length), 1),
            d[12] || (d[12] = e("span", { class: "label" }, "node removed", -1))
          ])) : g("", !0),
          i.value ? (t(), s("div", ct, [...d[13] || (d[13] = [
            e("span", { class: "icon" }, "●", -1),
            e("span", { class: "count modified" }, "●", -1),
            e("span", { class: "label" }, "other changes", -1)
          ])])) : g("", !0),
          c.value ? g("", !0) : (t(), s("div", dt, [...d[14] || (d[14] = [
            e("span", { class: "icon" }, "✓", -1),
            e("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      o.status.missing_models_count > 0 ? (t(), s("div", ut, [
        d[16] || (d[16] = e("span", { class: "warning-icon" }, "⚠", -1)),
        e("span", null, n(o.status.missing_models_count) + " missing model(s)", 1)
      ])) : g("", !0),
      o.status.comparison.is_synced ? g("", !0) : (t(), s("div", mt, [...d[17] || (d[17] = [
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
}, ht = /* @__PURE__ */ J(gt, [["__scopeId", "data-v-a72d538b"]]), vt = { class: "branch-section" }, ft = { class: "section-header" }, pt = {
  key: 0,
  class: "create-branch-row"
}, yt = ["disabled"], bt = {
  key: 1,
  class: "empty"
}, wt = {
  key: 2,
  class: "branch-list"
}, _t = { class: "branch-indicator" }, kt = { class: "branch-name" }, $t = ["onClick"], xt = {
  key: 1,
  class: "current-label"
}, Ct = /* @__PURE__ */ X({
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
    return He(() => {
      i.value && d.value && d.value.focus();
    }), (f, $) => (t(), s("div", vt, [
      e("div", ft, [
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
      i.value ? (t(), s("div", pt, [
        ke(e("input", {
          ref_key: "createInput",
          ref: d,
          "onUpdate:modelValue": $[1] || ($[1] = (_) => p.value = _),
          class: "branch-input",
          placeholder: "Branch name...",
          onKeyup: [
            we(h, ["enter"]),
            we(y, ["escape"])
          ]
        }, null, 544), [
          [$e, p.value]
        ]),
        e("button", {
          class: "action-btn create",
          onClick: h,
          disabled: !p.value.trim()
        }, " Create ", 8, yt),
        e("button", {
          class: "action-btn cancel",
          onClick: y
        }, " Cancel ")
      ])) : g("", !0),
      o.branches.length === 0 ? (t(), s("div", bt, " No branches found ")) : (t(), s("div", wt, [
        (t(!0), s(T, null, A(o.branches, (_) => (t(), s("div", {
          key: _.name,
          class: W(["branch-item", { current: _.is_current }])
        }, [
          e("span", _t, n(_.is_current ? "●" : "○"), 1),
          e("span", kt, n(_.name), 1),
          _.is_current ? (t(), s("span", xt, "current")) : (t(), s("button", {
            key: 0,
            class: "switch-btn",
            onClick: (m) => f.$emit("switch", _.name)
          }, " Switch ", 8, $t))
        ], 2))), 128))
      ]))
    ]));
  }
}), St = /* @__PURE__ */ J(Ct, [["__scopeId", "data-v-e2bd816d"]]), Et = { class: "history-section" }, Lt = {
  key: 0,
  class: "empty"
}, Mt = {
  key: 1,
  class: "commit-list"
}, zt = ["onClick"], It = { class: "commit-hash" }, Ot = { class: "commit-message" }, Dt = { class: "commit-date" }, Nt = ["onClick"], Tt = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(o) {
    return (v, c) => (t(), s("div", Et, [
      c[2] || (c[2] = e("h3", { class: "view-title" }, "HISTORY", -1)),
      o.commits.length === 0 ? (t(), s("div", Lt, " No commits yet ")) : (t(), s("div", Mt, [
        (t(!0), s(T, null, A(o.commits, (i) => {
          var p;
          return t(), s("div", {
            key: i.hash,
            class: "commit-item",
            onClick: (d) => v.$emit("select", i)
          }, [
            e("span", It, n(i.short_hash || ((p = i.hash) == null ? void 0 : p.slice(0, 7))), 1),
            e("span", Ot, n(i.message), 1),
            e("span", Dt, n(i.date_relative || i.relative_date), 1),
            e("div", {
              class: "commit-actions",
              onClick: c[0] || (c[0] = fe(() => {
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
              ])], 8, Nt)
            ])
          ], 8, zt);
        }), 128))
      ]))
    ]));
  }
}), Bt = /* @__PURE__ */ J(Tt, [["__scopeId", "data-v-97388106"]]), Ie = [
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
], Wt = [
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
  getWorkflows: async () => (await j(400), Ie),
  getWorkflowDetails: async (o) => (await j(300), Rt[o] || {
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
  getWorkspaceModels: async () => (await j(400), Wt),
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
  getEnvironmentLogs: async (o, v) => (await j(250), (o ? be.filter((i) => i.level === o) : be).slice(0, v || 100)),
  getWorkspaceLogs: async (o, v) => {
    await j(300);
    const c = [...be, ...be.map((p) => ({
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
  getCommitHistory: async (o = 10) => (await j(300), Ut.slice(0, o)),
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
  async function c(x, H) {
    var pe;
    if (!((pe = window.app) != null && pe.api))
      throw new Error("ComfyUI API not available");
    const Q = await window.app.api.fetchApi(x, H);
    if (!Q.ok) {
      const ye = await Q.json().catch(() => ({}));
      throw new Error(ye.error || ye.message || `Request failed: ${Q.status}`);
    }
    return Q.json();
  }
  async function i() {
    return K.getStatus();
  }
  async function p(x, H = !1) {
    return c("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: x, allow_issues: H })
    });
  }
  async function d(x = 10, H = 0) {
    {
      const Q = await K.getCommitHistory(x);
      return {
        commits: Q,
        total: Q.length,
        offset: H
      };
    }
  }
  async function h(x) {
    return c("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: x })
    });
  }
  async function y() {
    return K.getBranches();
  }
  async function f(x) {
    return c(`/v2/comfygit/commit/${x}`);
  }
  async function $(x, H = !1) {
    return c("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: x, force: H })
    });
  }
  async function _(x, H = "HEAD") {
    return c("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: x, start_point: H })
    });
  }
  async function m(x, H = !1) {
    return c("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: x, force: H })
    });
  }
  async function E() {
    return K.getEnvironments();
  }
  async function O(x) {
    return K.switchEnvironment(x);
  }
  async function Y() {
    return null;
  }
  async function R(x, H, Q) {
    return await K.createEnvironment(x, H, Q), { status: "success" };
  }
  async function C(x) {
    return await K.deleteEnvironment(x), { status: "success" };
  }
  async function M() {
    return K.getWorkflows();
  }
  async function P(x) {
    return K.getWorkflowDetails(x);
  }
  async function Z(x) {
    return K.resolveWorkflow(x);
  }
  async function L(x, H, Q) {
    return await K.installWorkflowDeps(x, H, Q), { status: "success" };
  }
  async function u(x, H, Q) {
    return K.setModelImportance(x, H, Q);
  }
  async function a() {
    return K.getEnvironmentModels();
  }
  async function r() {
    return K.getWorkspaceModels();
  }
  async function b(x, H) {
    return K.updateModelSource(x, H);
  }
  async function V(x) {
    return K.deleteModel(x);
  }
  async function ce(x) {
    return await K.downloadModel(x), { status: "success" };
  }
  async function S() {
    return K.getConfig();
  }
  async function D(x) {
    return K.updateConfig(x);
  }
  async function B(x, H) {
    return K.getEnvironmentLogs(x, H);
  }
  async function ae(x, H) {
    return K.getWorkspaceLogs(x, H);
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
    getEnvironments: E,
    switchEnvironment: O,
    getSwitchProgress: Y,
    createEnvironment: R,
    deleteEnvironment: C,
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
    deleteModel: V,
    downloadModel: ce,
    // Settings
    getConfig: S,
    updateConfig: D,
    // Debug/Logs
    getEnvironmentLogs: B,
    getWorkspaceLogs: ae
  };
}
const At = { class: "base-modal-header" }, Vt = {
  key: 0,
  class: "base-modal-title"
}, Ht = { class: "base-modal-body" }, Pt = {
  key: 0,
  class: "base-modal-loading"
}, Gt = {
  key: 1,
  class: "base-modal-error"
}, Kt = {
  key: 0,
  class: "base-modal-footer"
}, jt = /* @__PURE__ */ X({
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
    }), Pe(() => {
      document.removeEventListener("keydown", d), document.body.style.overflow = "";
    }), (h, y) => (t(), q(Ge, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: W(["base-modal-content", o.size]),
          onClick: y[1] || (y[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", At, [
            he(h.$slots, "header", {}, () => [
              o.title ? (t(), s("h3", Vt, n(o.title), 1)) : g("", !0)
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
          e("div", Ht, [
            o.loading ? (t(), s("div", Pt, "Loading...")) : o.error ? (t(), s("div", Gt, n(o.error), 1)) : he(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (t(), s("div", Kt, [
            he(h.$slots, "footer", {}, void 0, !0)
          ])) : g("", !0)
        ], 2)
      ])
    ]));
  }
}), xe = /* @__PURE__ */ J(jt, [["__scopeId", "data-v-700d367b"]]), Ft = ["type", "disabled"], qt = {
  key: 0,
  class: "spinner"
}, Yt = /* @__PURE__ */ X({
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
      class: W(["base-btn", o.variant, o.size, { "full-width": o.fullWidth, loading: o.loading }]),
      onClick: c[0] || (c[0] = (i) => v.$emit("click", i))
    }, [
      o.loading ? (t(), s("span", qt)) : g("", !0),
      he(v.$slots, "default", {}, void 0, !0)
    ], 10, Ft));
  }
}), te = /* @__PURE__ */ J(Yt, [["__scopeId", "data-v-f3452606"]]), Zt = {
  key: 0,
  class: "base-title-count"
}, Xt = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(o) {
    return (v, c) => (t(), q(Ke(`h${o.level}`), {
      class: W(["base-title", o.variant])
    }, {
      default: N(() => [
        he(v.$slots, "default", {}, void 0, !0),
        o.count !== void 0 ? (t(), s("span", Zt, "(" + n(o.count) + ")", 1)) : g("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), le = /* @__PURE__ */ J(Xt, [["__scopeId", "data-v-5a01561d"]]), Jt = ["value", "disabled"], Qt = {
  key: 0,
  value: "",
  disabled: ""
}, eo = ["value"], to = {
  key: 0,
  class: "base-select-error"
}, oo = /* @__PURE__ */ X({
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
      class: W(["base-select-wrapper", { "full-width": o.fullWidth, error: !!o.error }])
    }, [
      e("select", {
        value: o.modelValue,
        disabled: o.disabled,
        class: W(["base-select", { error: !!o.error }]),
        onChange: p[0] || (p[0] = (d) => i.$emit("update:modelValue", d.target.value))
      }, [
        o.placeholder ? (t(), s("option", Qt, n(o.placeholder), 1)) : g("", !0),
        (t(!0), s(T, null, A(o.options, (d) => (t(), s("option", {
          key: v(d),
          value: v(d)
        }, n(c(d)), 9, eo))), 128))
      ], 42, Jt),
      o.error ? (t(), s("span", to, n(o.error), 1)) : g("", !0)
    ], 2));
  }
}), so = /* @__PURE__ */ J(oo, [["__scopeId", "data-v-7436d745"]]), ao = { class: "detail-section" }, no = {
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
}, _o = /* @__PURE__ */ X({
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
    async function E() {
      y.value = !0, f.value = null;
      try {
        h.value = await p(c.workflowName);
      } catch (R) {
        f.value = R instanceof Error ? R.message : "Failed to load workflow details";
      } finally {
        y.value = !1;
      }
    }
    function O(R, C) {
      _.value[R] = C, $.value = !0;
    }
    async function Y() {
      if (!$.value) {
        i("close");
        return;
      }
      y.value = !0, f.value = null;
      try {
        for (const [R, C] of Object.entries(_.value))
          await d(c.workflowName, R, C);
        i("close");
      } catch (R) {
        f.value = R instanceof Error ? R.message : "Failed to save changes";
      } finally {
        y.value = !1;
      }
    }
    return re(E), (R, C) => (t(), q(xe, {
      title: `WORKFLOW DETAILS: ${o.workflowName}`,
      size: "lg",
      loading: y.value,
      error: f.value || void 0,
      onClose: C[2] || (C[2] = (M) => i("close"))
    }, {
      body: N(() => [
        h.value ? (t(), s(T, { key: 0 }, [
          e("section", ao, [
            F(le, { variant: "section" }, {
              default: N(() => [
                U("MODELS USED (" + n(h.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.models.length === 0 ? (t(), s("div", no, " No models used in this workflow ")) : g("", !0),
            (t(!0), s(T, null, A(h.value.models, (M) => (t(), s("div", {
              key: M.hash,
              class: "model-card"
            }, [
              e("div", lo, [
                C[3] || (C[3] = e("span", { class: "model-icon" }, "📦", -1)),
                e("span", ro, n(M.filename), 1)
              ]),
              e("div", io, [
                e("div", co, [
                  C[4] || (C[4] = e("span", { class: "label" }, "Status:", -1)),
                  e("span", {
                    class: W(["value", M.status === "available" ? "success" : "error"])
                  }, n(M.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                e("div", uo, [
                  C[5] || (C[5] = e("span", { class: "label" }, "Importance:", -1)),
                  F(so, {
                    "model-value": _.value[M.hash] || M.importance,
                    options: m,
                    "onUpdate:modelValue": (P) => O(M.hash, P)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                M.node_type ? (t(), s("div", mo, [
                  C[6] || (C[6] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", go, n(M.node_type) + " (Node " + n(M.node_id) + ")", 1)
                ])) : g("", !0),
                M.size_mb ? (t(), s("div", ho, [
                  C[7] || (C[7] = e("span", { class: "label" }, "Size:", -1)),
                  e("span", vo, n(M.size_mb) + " MB", 1)
                ])) : g("", !0)
              ]),
              M.status === "missing" ? (t(), s("div", fo, [
                F(te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C[0] || (C[0] = (P) => i("resolve"))
                }, {
                  default: N(() => [...C[8] || (C[8] = [
                    U(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : g("", !0)
            ]))), 128))
          ]),
          C[9] || (C[9] = e("div", { class: "info-box" }, [
            e("div", { class: "info-title" }, "Importance options:"),
            e("ul", { class: "info-list" }, [
              e("li", null, [
                e("strong", null, "Required"),
                U(" — Must have for workflow to run")
              ]),
              e("li", null, [
                e("strong", null, "Flexible"),
                U(" — Workflow adapts if missing")
              ]),
              e("li", null, [
                e("strong", null, "Optional"),
                U(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          e("section", po, [
            F(le, { variant: "section" }, {
              default: N(() => [
                U("NODES USED (" + n(h.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.nodes.length === 0 ? (t(), s("div", yo, " No custom nodes used in this workflow ")) : g("", !0),
            (t(!0), s(T, null, A(h.value.nodes, (M) => (t(), s("div", {
              key: M.name,
              class: "node-item"
            }, [
              e("span", {
                class: W(["node-status", M.installed ? "installed" : "missing"])
              }, n(M.installed ? "✓" : "✕"), 3),
              e("span", bo, n(M.name), 1),
              M.version ? (t(), s("span", wo, "v" + n(M.version), 1)) : g("", !0)
            ]))), 128))
          ])
        ], 64)) : g("", !0)
      ]),
      footer: N(() => [
        F(te, {
          variant: "secondary",
          onClick: C[1] || (C[1] = (M) => i("close"))
        }, {
          default: N(() => [...C[10] || (C[10] = [
            U(" Close ", -1)
          ])]),
          _: 1
        }),
        $.value ? (t(), q(te, {
          key: 0,
          variant: "primary",
          onClick: Y
        }, {
          default: N(() => [...C[11] || (C[11] = [
            U(" Save Changes ", -1)
          ])]),
          _: 1
        })) : g("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), ko = /* @__PURE__ */ J(_o, [["__scopeId", "data-v-6ce9a41c"]]), $o = {
  key: 0,
  class: "resolve-section"
}, xo = { class: "resolve-card success-card" }, Co = { class: "items-list" }, So = { class: "item-info" }, Eo = { class: "item-name" }, Lo = {
  key: 0,
  class: "item-meta"
}, Mo = { class: "match-type" }, zo = { class: "source" }, Io = {
  key: 1,
  class: "resolve-section"
}, Oo = { class: "resolve-card warning-card" }, Do = { class: "items-list" }, No = { class: "item-info" }, To = { class: "item-name" }, Bo = { class: "item-meta" }, Ro = { key: 0 }, Wo = { key: 1 }, Uo = {
  key: 0,
  class: "item-warning"
}, Ao = {
  key: 0,
  class: "item-action"
}, Vo = ["onClick"], Ho = {
  key: 2,
  class: "resolve-section"
}, Po = { class: "info-text" }, Go = { class: "actions-summary" }, Ko = { class: "summary-list" }, jo = { key: 0 }, Fo = { key: 1 }, qo = { key: 2 }, Yo = {
  key: 0,
  class: "estimated-size"
}, Zo = /* @__PURE__ */ X({
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
    function E(u) {
      return !u.possible_matches || u.possible_matches.length === 0 ? null : u.possible_matches.reduce(
        (a, r) => r.match_confidence > a.match_confidence ? r : a
      );
    }
    function O(u) {
      return u >= 0.9 ? "high" : u >= 0.7 ? "medium" : "low";
    }
    function Y(u) {
      const a = E(u);
      return a ? a.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function R(u) {
      var a, r;
      return (r = (a = h.value) == null ? void 0 : a.download_results) == null ? void 0 : r.find((b) => b.model === u);
    }
    function C(u) {
      const a = R(u);
      return (a == null ? void 0 : a.can_download) ?? !1;
    }
    function M(u) {
      const a = R(u);
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
    return re(m), (u, a) => (t(), q(xe, {
      title: `RESOLVE DEPENDENCIES: ${o.workflowName}`,
      size: "lg",
      loading: y.value,
      error: $.value || void 0,
      onClose: a[1] || (a[1] = (r) => i("close"))
    }, {
      body: N(() => [
        h.value ? (t(), s(T, { key: 0 }, [
          a[5] || (a[5] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          h.value.nodes_unresolved.length > 0 ? (t(), s("section", $o, [
            F(le, { variant: "section" }, {
              default: N(() => [
                U("NODES (" + n(h.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", xo, [
              a[2] || (a[2] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "✓"),
                e("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              e("div", Co, [
                (t(!0), s(T, null, A(h.value.nodes_unresolved, (r) => {
                  var b;
                  return t(), s("div", {
                    key: r.node_type,
                    class: "item"
                  }, [
                    e("div", So, [
                      e("div", Eo, n(((b = E(r)) == null ? void 0 : b.package_id) || r.node_type), 1),
                      E(r) ? (t(), s("div", Lo, [
                        e("span", {
                          class: W(["confidence-badge", O(E(r).match_confidence)])
                        }, n(Math.round(E(r).match_confidence * 100)) + "% match ", 3),
                        e("span", Mo, n(E(r).match_type), 1),
                        e("span", zo, "Source: " + n(Y(r)), 1)
                      ])) : g("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : g("", !0),
          h.value.models_unresolved.length > 0 ? (t(), s("section", Io, [
            F(le, { variant: "section" }, {
              default: N(() => [
                U("MODELS (" + n(h.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", Oo, [
              a[3] || (a[3] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "⚠"),
                e("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              e("div", Do, [
                (t(!0), s(T, null, A(h.value.models_unresolved, (r) => (t(), s("div", {
                  key: r.filename,
                  class: "item"
                }, [
                  e("div", No, [
                    e("div", To, n(r.filename), 1),
                    e("div", Bo, [
                      r.expected_category ? (t(), s("span", Ro, "Type: " + n(r.expected_category), 1)) : g("", !0),
                      R(r.filename) ? (t(), s("span", Wo, " Size: ~" + n(R(r.filename).estimated_size_mb) + " MB ", 1)) : g("", !0)
                    ]),
                    C(r.filename) ? g("", !0) : (t(), s("div", Uo, " No auto-download source configured "))
                  ]),
                  M(r.filename) ? (t(), s("div", Ao, [
                    e("button", {
                      class: "link-btn",
                      onClick: (b) => P(M(r.filename))
                    }, " Open Source ↗ ", 8, Vo)
                  ])) : g("", !0)
                ]))), 128))
              ])
            ])
          ])) : g("", !0),
          h.value.nodes_resolved.length > 0 || h.value.models_resolved.length > 0 ? (t(), s("section", Ho, [
            F(le, { variant: "section" }, {
              default: N(() => [
                U(" ALREADY AVAILABLE (" + n(h.value.nodes_resolved.length + h.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            e("div", Po, n(h.value.nodes_resolved.length) + " nodes and " + n(h.value.models_resolved.length) + " models are already installed ", 1)
          ])) : g("", !0),
          e("div", Go, [
            a[4] || (a[4] = e("div", { class: "summary-title" }, "This will:", -1)),
            e("ol", Ko, [
              h.value.nodes_to_install.length ? (t(), s("li", jo, " Install " + n(h.value.nodes_to_install.length) + " nodes (~" + n(h.value.estimated_time_seconds) + "s) ", 1)) : g("", !0),
              h.value.nodes_to_install.length ? (t(), s("li", Fo, " Restart ComfyUI to load new nodes ")) : g("", !0),
              h.value.models_to_download.length ? (t(), s("li", qo, " You'll still need to download " + n(h.value.models_to_download.length) + " model(s) manually ", 1)) : g("", !0)
            ]),
            h.value.estimated_size_mb ? (t(), s("div", Yo, " Estimated download: " + n(h.value.estimated_size_mb) + " MB ", 1)) : g("", !0)
          ])
        ], 64)) : g("", !0)
      ]),
      footer: N(() => [
        F(te, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (r) => i("close"))
        }, {
          default: N(() => [...a[6] || (a[6] = [
            U(" Cancel ", -1)
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
          default: N(() => [...a[7] || (a[7] = [
            U(" Install Nodes Only ", -1)
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
          default: N(() => [...a[8] || (a[8] = [
            U(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : g("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Xo = /* @__PURE__ */ J(Zo, [["__scopeId", "data-v-d68efb14"]]), Jo = { class: "workflows-section" }, Qo = { class: "section-header" }, es = { class: "search-bar" }, ts = {
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
}, bs = { class: "group-title" }, ws = { class: "workflow-info" }, _s = { class: "workflow-name" }, ks = { class: "workflow-actions" }, $s = ["onClick"], xs = {
  key: 3,
  class: "workflow-group"
}, Cs = { class: "workflow-info" }, Ss = { class: "workflow-name" }, Es = { class: "workflow-actions" }, Ls = ["onClick"], Ms = {
  key: 4,
  class: "empty-state"
}, zs = { key: 0 }, Is = { key: 1 }, Os = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(o, { emit: v }) {
    const c = v, { getWorkflows: i } = ie(), p = w([]), d = w(!1), h = w(null), y = w(""), f = w(!1), $ = w(!1), _ = w(!1), m = w(!1), E = w(null), O = I(
      () => p.value.filter((S) => S.status === "broken")
    ), Y = I(
      () => p.value.filter((S) => S.status === "new")
    ), R = I(
      () => p.value.filter((S) => S.status === "modified")
    ), C = I(
      () => p.value.filter((S) => S.status === "synced")
    ), M = I(() => {
      if (!y.value.trim()) return p.value;
      const S = y.value.toLowerCase();
      return p.value.filter((D) => D.name.toLowerCase().includes(S));
    }), P = I(
      () => O.value.filter(
        (S) => !y.value.trim() || S.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), Z = I(
      () => Y.value.filter(
        (S) => !y.value.trim() || S.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), L = I(
      () => R.value.filter(
        (S) => !y.value.trim() || S.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), u = I(
      () => C.value.filter(
        (S) => !y.value.trim() || S.name.toLowerCase().includes(y.value.toLowerCase())
      )
    );
    async function a() {
      d.value = !0, h.value = null;
      try {
        p.value = await i();
      } catch (S) {
        h.value = S instanceof Error ? S.message : "Failed to load workflows";
      } finally {
        d.value = !1;
      }
    }
    function r(S) {
      E.value = S, _.value = !0;
    }
    function b(S) {
      E.value = S, m.value = !0;
    }
    function V() {
      alert("Bulk resolution not yet implemented");
    }
    function ce() {
      c("refresh");
    }
    return re(a), (S, D) => (t(), s("div", Jo, [
      e("div", Qo, [
        D[7] || (D[7] = e("h3", { class: "view-title" }, "WORKFLOWS", -1)),
        O.value.length > 0 ? (t(), s("button", {
          key: 0,
          class: "resolve-all-btn",
          onClick: V
        }, " RESOLVE ALL ISSUES ")) : g("", !0)
      ]),
      e("div", es, [
        ke(e("input", {
          "onUpdate:modelValue": D[0] || (D[0] = (B) => y.value = B),
          type: "text",
          placeholder: "🔍 Search workflows...",
          class: "search-input"
        }, null, 512), [
          [$e, y.value]
        ])
      ]),
      d.value ? (t(), s("div", ts, "Loading workflows...")) : h.value ? (t(), s("div", os, n(h.value), 1)) : (t(), s("div", ss, [
        P.value.length ? (t(), s("section", as, [
          e("h4", ns, "BROKEN (" + n(P.value.length) + ")", 1),
          (t(!0), s(T, null, A(P.value, (B) => (t(), s("div", {
            key: B.name,
            class: "workflow-item broken"
          }, [
            e("div", ls, [
              e("div", rs, "⚠ " + n(B.name), 1),
              e("div", is, " Missing: " + n(B.missing_nodes) + " nodes, " + n(B.missing_models) + " models ", 1)
            ]),
            e("div", cs, [
              e("button", {
                class: "action-btn",
                onClick: (ae) => b(B.name)
              }, " Resolve ▸ ", 8, ds),
              e("button", {
                class: "action-btn secondary",
                onClick: (ae) => r(B.name)
              }, " Details ▸ ", 8, us)
            ])
          ]))), 128))
        ])) : g("", !0),
        Z.value.length ? (t(), s("section", ms, [
          e("h4", gs, "NEW (" + n(Z.value.length) + ")", 1),
          (t(!0), s(T, null, A(Z.value, (B) => (t(), s("div", {
            key: B.name,
            class: "workflow-item new"
          }, [
            e("div", hs, [
              e("div", vs, "● " + n(B.name), 1),
              D[8] || (D[8] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            e("div", fs, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ae) => r(B.name)
              }, " Details ", 8, ps)
            ])
          ]))), 128))
        ])) : g("", !0),
        L.value.length ? (t(), s("section", ys, [
          e("h4", bs, "MODIFIED (" + n(L.value.length) + ")", 1),
          (t(!0), s(T, null, A(L.value, (B) => (t(), s("div", {
            key: B.name,
            class: "workflow-item modified"
          }, [
            e("div", ws, [
              e("div", _s, "⚡ " + n(B.name), 1),
              D[9] || (D[9] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            e("div", ks, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ae) => r(B.name)
              }, " Details ", 8, $s)
            ])
          ]))), 128))
        ])) : g("", !0),
        u.value.length ? (t(), s("section", xs, [
          e("h4", {
            class: "group-title clickable",
            onClick: D[1] || (D[1] = (B) => f.value = !f.value)
          }, " SYNCED (" + n(u.value.length) + ") " + n(f.value ? "▼" : "▸"), 1),
          f.value ? (t(), s(T, { key: 0 }, [
            (t(!0), s(T, null, A(u.value.slice(0, $.value ? void 0 : 5), (B) => (t(), s("div", {
              key: B.name,
              class: "workflow-item synced"
            }, [
              e("div", Cs, [
                e("div", Ss, n(B.name), 1),
                D[10] || (D[10] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
              ]),
              e("div", Es, [
                e("button", {
                  class: "action-btn secondary",
                  onClick: (ae) => r(B.name)
                }, " Details ", 8, Ls)
              ])
            ]))), 128)),
            !$.value && u.value.length > 5 ? (t(), s("button", {
              key: 0,
              class: "show-more-btn",
              onClick: D[2] || (D[2] = (B) => $.value = !0)
            }, " View all " + n(u.value.length) + " → ", 1)) : g("", !0)
          ], 64)) : g("", !0)
        ])) : g("", !0),
        M.value.length ? g("", !0) : (t(), s("div", Ms, [
          y.value ? (t(), s("p", zs, 'No workflows match "' + n(y.value) + '"', 1)) : (t(), s("p", Is, "No workflows found in this environment."))
        ]))
      ])),
      _.value && E.value ? (t(), q(ko, {
        key: 3,
        "workflow-name": E.value,
        onClose: D[3] || (D[3] = (B) => _.value = !1),
        onResolve: D[4] || (D[4] = (B) => b(E.value))
      }, null, 8, ["workflow-name"])) : g("", !0),
      m.value && E.value ? (t(), q(Xo, {
        key: 4,
        "workflow-name": E.value,
        onClose: D[5] || (D[5] = (B) => m.value = !1),
        onInstall: ce,
        onRefresh: D[6] || (D[6] = (B) => c("refresh"))
      }, null, 8, ["workflow-name"])) : g("", !0)
    ]));
  }
}), Ds = /* @__PURE__ */ J(Os, [["__scopeId", "data-v-abf8513b"]]), Ns = { class: "models-env-section" }, Ts = { class: "section-intro" }, Bs = { class: "intro-text" }, Rs = { class: "search-bar" }, Ws = {
  key: 0,
  class: "loading"
}, Us = {
  key: 1,
  class: "error-message"
}, As = {
  key: 2,
  class: "models-content"
}, Vs = {
  key: 0,
  class: "model-group"
}, Hs = { class: "group-title" }, Ps = { class: "model-header" }, Gs = { class: "model-info" }, Ks = { class: "model-name" }, js = { class: "model-size" }, Fs = { class: "model-details" }, qs = { class: "detail-row" }, Ys = { class: "value" }, Zs = { class: "model-actions" }, Xs = ["onClick"], Js = {
  key: 1,
  class: "model-group"
}, Qs = { class: "group-title" }, ea = { class: "model-header" }, ta = { class: "model-info" }, oa = { class: "model-name" }, sa = { class: "model-size" }, aa = { class: "model-details" }, na = { class: "detail-row" }, la = { class: "value" }, ra = { class: "model-actions" }, ia = ["onClick"], ca = {
  key: 2,
  class: "model-group"
}, da = { class: "group-title" }, ua = { class: "model-header" }, ma = { class: "model-info" }, ga = { class: "model-name" }, ha = { class: "model-size" }, va = { class: "model-details" }, fa = { class: "detail-row" }, pa = { class: "value" }, ya = { class: "detail-row" }, ba = { class: "value" }, wa = { class: "model-actions" }, _a = ["onClick"], ka = {
  key: 3,
  class: "model-group"
}, $a = { class: "group-title" }, xa = { class: "model-header" }, Ca = { class: "model-info" }, Sa = { class: "model-name" }, Ea = { class: "model-details" }, La = { class: "detail-row" }, Ma = { class: "value" }, za = { class: "model-actions" }, Ia = ["onClick"], Oa = ["onClick"], Da = {
  key: 4,
  class: "empty-state"
}, Na = { key: 0 }, Ta = { key: 1 }, Ba = {
  key: 5,
  class: "summary"
}, Ra = /* @__PURE__ */ X({
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
    ), E = I(() => {
      if (!_.value.trim()) return d.value;
      const a = _.value.toLowerCase();
      return d.value.filter((r) => r.filename.toLowerCase().includes(a));
    }), O = I(() => {
      if (!_.value.trim()) return h.value;
      const a = _.value.toLowerCase();
      return h.value.filter((r) => r.filename.toLowerCase().includes(a));
    }), Y = I(
      () => E.value.filter((a) => a.type === "checkpoints" || a.category === "checkpoints")
    ), R = I(
      () => E.value.filter((a) => a.type === "loras" || a.category === "loras")
    ), C = I(
      () => E.value.filter(
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
    return re(u), (a, r) => (t(), s("div", Ns, [
      r[14] || (r[14] = e("h3", { class: "view-title" }, "MODELS IN THIS ENVIRONMENT", -1)),
      e("div", Ts, [
        e("p", Bs, ' These are models currently used by workflows in "' + n(y.value) + '". All models are symlinked from the workspace model index. ', 1),
        e("button", {
          class: "link-btn",
          onClick: r[0] || (r[0] = (b) => a.$emit("navigate", "model-index"))
        }, " View Workspace Model Index ↗ ")
      ]),
      e("div", Rs, [
        ke(e("input", {
          "onUpdate:modelValue": r[1] || (r[1] = (b) => _.value = b),
          type: "text",
          placeholder: "🔍 Search models used in this environment...",
          class: "search-input"
        }, null, 512), [
          [$e, _.value]
        ])
      ]),
      f.value ? (t(), s("div", Ws, "Loading models...")) : $.value ? (t(), s("div", Us, n($.value), 1)) : (t(), s("div", As, [
        Y.value.length ? (t(), s("section", Vs, [
          e("h4", Hs, "CHECKPOINTS (" + n(Y.value.length) + ")", 1),
          (t(!0), s(T, null, A(Y.value, (b) => (t(), s("div", {
            key: b.hash,
            class: "model-card"
          }, [
            e("div", Ps, [
              r[2] || (r[2] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", Gs, [
                e("div", Ks, n(b.filename), 1),
                e("div", js, n(M(b.size_mb)), 1)
              ])
            ]),
            e("div", Fs, [
              e("div", qs, [
                r[3] || (r[3] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", Ys, n(b.used_by.join(", ")), 1)
              ]),
              r[4] || (r[4] = e("div", { class: "detail-row" }, [
                e("span", { class: "label" }, "Source:"),
                e("span", { class: "value" }, "Workspace index")
              ], -1))
            ]),
            e("div", Zs, [
              e("button", {
                class: "action-btn secondary",
                onClick: (V) => P(b.hash)
              }, " View in Workspace Index ↗ ", 8, Xs)
            ])
          ]))), 128))
        ])) : g("", !0),
        R.value.length ? (t(), s("section", Js, [
          e("h4", Qs, "LORAS (" + n(R.value.length) + ")", 1),
          (t(!0), s(T, null, A(R.value, (b) => (t(), s("div", {
            key: b.hash,
            class: "model-card"
          }, [
            e("div", ea, [
              r[5] || (r[5] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", ta, [
                e("div", oa, n(b.filename), 1),
                e("div", sa, n(M(b.size_mb)), 1)
              ])
            ]),
            e("div", aa, [
              e("div", na, [
                r[6] || (r[6] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", la, n(b.used_by.join(", ")), 1)
              ]),
              r[7] || (r[7] = e("div", { class: "detail-row" }, [
                e("span", { class: "label" }, "Source:"),
                e("span", { class: "value" }, "Workspace index")
              ], -1))
            ]),
            e("div", ra, [
              e("button", {
                class: "action-btn secondary",
                onClick: (V) => P(b.hash)
              }, " View in Workspace Index ↗ ", 8, ia)
            ])
          ]))), 128))
        ])) : g("", !0),
        C.value.length ? (t(), s("section", ca, [
          e("h4", da, "OTHER (" + n(C.value.length) + ")", 1),
          (t(!0), s(T, null, A(C.value, (b) => (t(), s("div", {
            key: b.hash,
            class: "model-card"
          }, [
            e("div", ua, [
              r[8] || (r[8] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", ma, [
                e("div", ga, n(b.filename), 1),
                e("div", ha, n(M(b.size_mb)), 1)
              ])
            ]),
            e("div", va, [
              e("div", fa, [
                r[9] || (r[9] = e("span", { class: "label" }, "Type:", -1)),
                e("span", pa, n(b.type), 1)
              ]),
              e("div", ya, [
                r[10] || (r[10] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", ba, n(b.used_by.join(", ")), 1)
              ])
            ]),
            e("div", wa, [
              e("button", {
                class: "action-btn secondary",
                onClick: (V) => P(b.hash)
              }, " View in Workspace Index ↗ ", 8, _a)
            ])
          ]))), 128))
        ])) : g("", !0),
        O.value.length ? (t(), s("section", ka, [
          e("h4", $a, "MISSING (" + n(O.value.length) + ")", 1),
          (t(!0), s(T, null, A(O.value, (b) => {
            var V;
            return t(), s("div", {
              key: b.filename,
              class: "model-card missing"
            }, [
              e("div", xa, [
                r[12] || (r[12] = e("span", { class: "model-icon" }, "⚠", -1)),
                e("div", Ca, [
                  e("div", Sa, n(b.filename), 1),
                  r[11] || (r[11] = e("div", { class: "model-status error" }, "Not found in workspace index", -1))
                ])
              ]),
              e("div", Ea, [
                e("div", La, [
                  r[13] || (r[13] = e("span", { class: "label" }, "Required by:", -1)),
                  e("span", Ma, n(((V = b.workflow_names) == null ? void 0 : V.join(", ")) || "Unknown"), 1)
                ])
              ]),
              e("div", za, [
                e("button", {
                  class: "action-btn",
                  onClick: (ce) => L(b.filename)
                }, " Download ", 8, Ia),
                e("button", {
                  class: "action-btn secondary",
                  onClick: (ce) => Z(b.filename)
                }, " Search Workspace Index ", 8, Oa)
              ])
            ]);
          }), 128))
        ])) : g("", !0),
        E.value.length ? g("", !0) : (t(), s("div", Da, [
          _.value ? (t(), s("p", Na, 'No models match "' + n(_.value) + '"', 1)) : (t(), s("p", Ta, "No models in this environment."))
        ])),
        d.value.length ? (t(), s("div", Ba, " Total: " + n(d.value.length) + " models • " + n(M(m.value)) + " (symlinked from workspace) ", 1)) : g("", !0)
      ]))
    ]));
  }
}), Wa = /* @__PURE__ */ J(Ra, [["__scopeId", "data-v-75454b46"]]), Ua = { class: "model-index-section" }, Aa = { class: "search-bar" }, Va = {
  key: 0,
  class: "loading"
}, Ha = {
  key: 1,
  class: "error-message"
}, Pa = {
  key: 2,
  class: "models-content"
}, Ga = {
  key: 0,
  class: "summary-header"
}, Ka = {
  key: 1,
  class: "model-group"
}, ja = { class: "group-title" }, Fa = { class: "model-header" }, qa = { class: "model-info" }, Ya = { class: "model-name" }, Za = { class: "model-size" }, Xa = { class: "model-details" }, Ja = { class: "detail-row" }, Qa = { class: "value hash" }, en = { class: "detail-row" }, tn = { class: "value" }, on = {
  key: 0,
  class: "detail-row"
}, sn = { class: "value" }, an = {
  key: 1,
  class: "detail-row"
}, nn = { class: "model-actions" }, ln = ["onClick"], rn = ["onClick"], cn = ["onClick"], dn = {
  key: 2,
  class: "model-group"
}, un = { class: "group-title" }, mn = { class: "model-header" }, gn = { class: "model-info" }, hn = { class: "model-name" }, vn = { class: "model-size" }, fn = { class: "model-details" }, pn = { class: "detail-row" }, yn = { class: "value hash" }, bn = { class: "detail-row" }, wn = { class: "value" }, _n = {
  key: 0,
  class: "detail-row"
}, kn = { class: "value" }, $n = {
  key: 1,
  class: "detail-row"
}, xn = { class: "model-actions" }, Cn = ["onClick"], Sn = ["onClick"], En = ["onClick"], Ln = {
  key: 3,
  class: "model-group"
}, Mn = { class: "group-title" }, zn = { class: "model-header" }, In = { class: "model-info" }, On = { class: "model-name" }, Dn = { class: "model-size" }, Nn = { class: "model-details" }, Tn = { class: "detail-row" }, Bn = { class: "value" }, Rn = { class: "detail-row" }, Wn = { class: "value hash" }, Un = { class: "detail-row" }, An = { class: "value" }, Vn = { class: "model-actions" }, Hn = ["onClick"], Pn = ["onClick"], Gn = ["onClick"], Kn = {
  key: 4,
  class: "empty-state"
}, jn = { key: 0 }, Fn = { key: 1 }, qn = /* @__PURE__ */ X({
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
    function E(u) {
      return u >= 1024 ? `${(u / 1024).toFixed(1)} GB` : `${u} MB`;
    }
    function O(u) {
      return !u.used_by || u.used_by.length === 0 ? "Not used" : `${u.used_by.length} workflow(s)`;
    }
    function Y(u) {
      navigator.clipboard.writeText(u), alert("Hash copied to clipboard");
    }
    function R(u) {
      var r;
      prompt("Enter model source URL:", ((r = u.sources) == null ? void 0 : r[0]) || "") !== null && alert("URL update not yet implemented");
    }
    function C(u) {
      const a = u.used_by && u.used_by.length > 0 ? `

⚠ WARNING: This model is used by ${u.used_by.length} workflow(s):
${u.used_by.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${u.filename}?${a}

This will free ${E(u.size_mb || 0)} of space.`
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
    return re(L), (u, a) => (t(), s("div", Ua, [
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
            U(" DOWNLOAD + ", -1)
          ])])
        ])
      ]),
      a[17] || (a[17] = e("div", { class: "section-intro" }, [
        e("p", { class: "intro-text" }, " Content-addressable model storage shared across all environments. Models are deduplicated by SHA256 hash. ")
      ], -1)),
      e("div", Aa, [
        ke(e("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (r) => d.value = r),
          type: "text",
          placeholder: "🔍 Search all indexed models...",
          class: "search-input"
        }, null, 512), [
          [$e, d.value]
        ])
      ]),
      i.value ? (t(), s("div", Va, "Loading workspace models...")) : p.value ? (t(), s("div", Ha, n(p.value), 1)) : (t(), s("div", Pa, [
        c.value.length ? (t(), s("div", Ga, " Total: " + n(c.value.length) + " models • " + n(E(h.value)) + " • Used in " + n(y.value) + " environments ", 1)) : g("", !0),
        $.value.length ? (t(), s("section", Ka, [
          e("h4", ja, "/* CHECKPOINTS (" + n($.value.length) + ") */", 1),
          (t(!0), s(T, null, A($.value, (r) => {
            var b;
            return t(), s("div", {
              key: r.sha256_hash || r.hash,
              class: "model-card"
            }, [
              e("div", Fa, [
                a[3] || (a[3] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", qa, [
                  e("div", Ya, n(r.filename), 1),
                  e("div", Za, n(E(r.size_mb)), 1)
                ])
              ]),
              e("div", Xa, [
                e("div", Ja, [
                  a[4] || (a[4] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", Qa, n(((b = r.sha256_hash) == null ? void 0 : b.substring(0, 16)) || r.hash) + "...", 1)
                ]),
                e("div", en, [
                  a[5] || (a[5] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", tn, n(O(r)), 1)
                ]),
                r.sources && r.sources.length ? (t(), s("div", on, [
                  a[6] || (a[6] = e("span", { class: "label" }, "Source URL:", -1)),
                  e("span", sn, n(r.sources[0]), 1)
                ])) : (t(), s("div", an, [...a[7] || (a[7] = [
                  e("span", { class: "label" }, "Source URL:", -1),
                  e("span", { class: "value warning" }, "(none)", -1)
                ])]))
              ]),
              e("div", nn, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (V) => R(r)
                }, " Edit URL ", 8, ln),
                e("button", {
                  class: "action-btn-small",
                  onClick: (V) => Y(r.sha256_hash || r.hash)
                }, " Copy Hash ", 8, rn),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (V) => C(r)
                }, " Delete ", 8, cn)
              ])
            ]);
          }), 128))
        ])) : g("", !0),
        _.value.length ? (t(), s("section", dn, [
          e("h4", un, "/* LORAS (" + n(_.value.length) + ") */", 1),
          (t(!0), s(T, null, A(_.value, (r) => {
            var b;
            return t(), s("div", {
              key: r.sha256_hash || r.hash,
              class: "model-card"
            }, [
              e("div", mn, [
                a[8] || (a[8] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", gn, [
                  e("div", hn, n(r.filename), 1),
                  e("div", vn, n(E(r.size_mb)), 1)
                ])
              ]),
              e("div", fn, [
                e("div", pn, [
                  a[9] || (a[9] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", yn, n(((b = r.sha256_hash) == null ? void 0 : b.substring(0, 16)) || r.hash) + "...", 1)
                ]),
                e("div", bn, [
                  a[10] || (a[10] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", wn, n(O(r)), 1)
                ]),
                r.sources && r.sources.length ? (t(), s("div", _n, [
                  a[11] || (a[11] = e("span", { class: "label" }, "Source URL:", -1)),
                  e("span", kn, n(r.sources[0]), 1)
                ])) : (t(), s("div", $n, [...a[12] || (a[12] = [
                  e("span", { class: "label" }, "Source URL:", -1),
                  e("span", { class: "value warning" }, "(none)", -1)
                ])]))
              ]),
              e("div", xn, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (V) => R(r)
                }, " Edit URL ", 8, Cn),
                e("button", {
                  class: "action-btn-small",
                  onClick: (V) => Y(r.sha256_hash || r.hash)
                }, " Copy Hash ", 8, Sn),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (V) => C(r)
                }, " Delete ", 8, En)
              ])
            ]);
          }), 128))
        ])) : g("", !0),
        m.value.length ? (t(), s("section", Ln, [
          e("h4", Mn, "/* OTHER (" + n(m.value.length) + ") */", 1),
          (t(!0), s(T, null, A(m.value, (r) => {
            var b;
            return t(), s("div", {
              key: r.sha256_hash || r.hash,
              class: "model-card"
            }, [
              e("div", zn, [
                a[13] || (a[13] = e("span", { class: "model-icon" }, "📦", -1)),
                e("div", In, [
                  e("div", On, n(r.filename), 1),
                  e("div", Dn, n(E(r.size_mb)), 1)
                ])
              ]),
              e("div", Nn, [
                e("div", Tn, [
                  a[14] || (a[14] = e("span", { class: "label" }, "Type:", -1)),
                  e("span", Bn, n(r.type), 1)
                ]),
                e("div", Rn, [
                  a[15] || (a[15] = e("span", { class: "label" }, "SHA256:", -1)),
                  e("span", Wn, n(((b = r.sha256_hash) == null ? void 0 : b.substring(0, 16)) || r.hash) + "...", 1)
                ]),
                e("div", Un, [
                  a[16] || (a[16] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", An, n(O(r)), 1)
                ])
              ]),
              e("div", Vn, [
                e("button", {
                  class: "action-btn-small",
                  onClick: (V) => R(r)
                }, " Edit URL ", 8, Hn),
                e("button", {
                  class: "action-btn-small",
                  onClick: (V) => Y(r.sha256_hash || r.hash)
                }, " Copy Hash ", 8, Pn),
                e("button", {
                  class: "action-btn-small destructive",
                  onClick: (V) => C(r)
                }, " Delete ", 8, Gn)
              ])
            ]);
          }), 128))
        ])) : g("", !0),
        f.value.length ? g("", !0) : (t(), s("div", Kn, [
          d.value ? (t(), s("p", jn, 'No models match "' + n(d.value) + '"', 1)) : (t(), s("p", Fn, "No models in workspace index."))
        ]))
      ]))
    ]));
  }
}), Yn = /* @__PURE__ */ J(qn, [["__scopeId", "data-v-5f7a38f2"]]), Zn = { class: "header-info" }, Xn = { class: "commit-hash" }, Jn = {
  key: 0,
  class: "commit-refs"
}, Qn = { class: "commit-message" }, el = { class: "commit-date" }, tl = {
  key: 0,
  class: "loading"
}, ol = {
  key: 1,
  class: "changes-section"
}, sl = { class: "stats-row" }, al = { class: "stat" }, nl = { class: "stat insertions" }, ll = { class: "stat deletions" }, rl = {
  key: 0,
  class: "change-group"
}, il = {
  key: 1,
  class: "change-group"
}, cl = {
  key: 0,
  class: "version"
}, dl = {
  key: 2,
  class: "change-group"
}, ul = { class: "change-item" }, ml = /* @__PURE__ */ X({
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
    }), (y, f) => (t(), q(xe, {
      size: "md",
      "show-close-button": !1,
      onClose: f[3] || (f[3] = ($) => y.$emit("close"))
    }, {
      header: N(() => {
        var $, _, m, E;
        return [
          e("div", Zn, [
            f[4] || (f[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Xn, n((($ = i.value) == null ? void 0 : $.short_hash) || o.commit.short_hash || ((_ = o.commit.hash) == null ? void 0 : _.slice(0, 7))), 1),
            (E = (m = i.value) == null ? void 0 : m.refs) != null && E.length ? (t(), s("span", Jn, [
              (t(!0), s(T, null, A(i.value.refs, (O) => (t(), s("span", {
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
            default: N(() => [...f[5] || (f[5] = [
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
        var $, _;
        return [
          e("div", Qn, n((($ = i.value) == null ? void 0 : $.message) || o.commit.message), 1),
          e("div", el, n(((_ = i.value) == null ? void 0 : _.date_relative) || o.commit.date_relative || o.commit.relative_date), 1),
          p.value ? (t(), s("div", tl, "Loading details...")) : i.value ? (t(), s("div", ol, [
            e("div", sl, [
              e("span", al, n(i.value.stats.files_changed) + " files", 1),
              e("span", nl, "+" + n(i.value.stats.insertions), 1),
              e("span", ll, "-" + n(i.value.stats.deletions), 1)
            ]),
            d.value ? (t(), s("div", rl, [
              F(le, { variant: "section" }, {
                default: N(() => [...f[6] || (f[6] = [
                  U("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(T, null, A(i.value.changes.workflows.added, (m) => (t(), s("div", {
                key: "add-" + m,
                class: "change-item added"
              }, [
                f[7] || (f[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(m), 1)
              ]))), 128)),
              (t(!0), s(T, null, A(i.value.changes.workflows.modified, (m) => (t(), s("div", {
                key: "mod-" + m,
                class: "change-item modified"
              }, [
                f[8] || (f[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, n(m), 1)
              ]))), 128)),
              (t(!0), s(T, null, A(i.value.changes.workflows.deleted, (m) => (t(), s("div", {
                key: "del-" + m,
                class: "change-item deleted"
              }, [
                f[9] || (f[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(m), 1)
              ]))), 128))
            ])) : g("", !0),
            h.value ? (t(), s("div", il, [
              F(le, { variant: "section" }, {
                default: N(() => [...f[10] || (f[10] = [
                  U("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(T, null, A(i.value.changes.nodes.added, (m) => (t(), s("div", {
                key: "add-" + m.name,
                class: "change-item added"
              }, [
                f[11] || (f[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(m.name), 1),
                m.version ? (t(), s("span", cl, "(" + n(m.version) + ")", 1)) : g("", !0)
              ]))), 128)),
              (t(!0), s(T, null, A(i.value.changes.nodes.removed, (m) => (t(), s("div", {
                key: "rem-" + m.name,
                class: "change-item deleted"
              }, [
                f[12] || (f[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(m.name), 1)
              ]))), 128))
            ])) : g("", !0),
            i.value.changes.models.resolved > 0 ? (t(), s("div", dl, [
              F(le, { variant: "section" }, {
                default: N(() => [...f[13] || (f[13] = [
                  U("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", ul, [
                f[14] || (f[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, n(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : g("", !0)
          ])) : g("", !0)
        ];
      }),
      footer: N(() => [
        F(te, {
          variant: "secondary",
          onClick: f[1] || (f[1] = ($) => y.$emit("createBranch", o.commit))
        }, {
          default: N(() => [...f[15] || (f[15] = [
            U(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        F(te, {
          variant: "primary",
          onClick: f[2] || (f[2] = ($) => y.$emit("checkout", o.commit))
        }, {
          default: N(() => [...f[16] || (f[16] = [
            U(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), gl = /* @__PURE__ */ J(ml, [["__scopeId", "data-v-d256ff6d"]]), hl = { class: "dialog-message" }, vl = {
  key: 0,
  class: "dialog-details"
}, fl = {
  key: 1,
  class: "dialog-warning"
}, pl = /* @__PURE__ */ X({
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
    return (v, c) => (t(), q(xe, {
      title: o.title,
      size: "sm",
      onClose: c[3] || (c[3] = (i) => v.$emit("cancel"))
    }, {
      body: N(() => [
        e("p", hl, n(o.message), 1),
        o.details && o.details.length ? (t(), s("div", vl, [
          (t(!0), s(T, null, A(o.details, (i, p) => (t(), s("div", {
            key: p,
            class: "detail-item"
          }, " • " + n(i), 1))), 128))
        ])) : g("", !0),
        o.warning ? (t(), s("p", fl, [
          c[4] || (c[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          U(" " + n(o.warning), 1)
        ])) : g("", !0)
      ]),
      footer: N(() => [
        F(te, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (i) => v.$emit("cancel"))
        }, {
          default: N(() => [
            U(n(o.cancelLabel), 1)
          ]),
          _: 1
        }),
        o.secondaryAction ? (t(), q(te, {
          key: 0,
          variant: "secondary",
          onClick: c[1] || (c[1] = (i) => v.$emit("secondary"))
        }, {
          default: N(() => [
            U(n(o.secondaryLabel), 1)
          ]),
          _: 1
        })) : g("", !0),
        F(te, {
          variant: o.destructive ? "danger" : "primary",
          onClick: c[2] || (c[2] = (i) => v.$emit("confirm"))
        }, {
          default: N(() => [
            U(n(o.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), yl = /* @__PURE__ */ J(pl, [["__scopeId", "data-v-3670b9f5"]]), bl = { class: "comfygit-panel" }, wl = { class: "panel-header" }, _l = { class: "header-left" }, kl = {
  key: 0,
  class: "header-info"
}, $l = { class: "header-actions" }, xl = { class: "env-switcher" }, Cl = {
  key: 0,
  class: "header-info"
}, Sl = { class: "branch-name" }, El = { class: "panel-main" }, Ll = { class: "sidebar" }, Ml = { class: "sidebar-section" }, zl = { class: "sidebar-section" }, Il = { class: "sidebar-section" }, Ol = { class: "content-area" }, Dl = {
  key: 0,
  class: "error-message"
}, Nl = {
  key: 1,
  class: "loading"
}, Tl = {
  key: 5,
  class: "view-placeholder"
}, Bl = {
  key: 6,
  class: "view-placeholder"
}, Rl = {
  key: 7,
  class: "view-placeholder"
}, Wl = {
  key: 9,
  class: "view-placeholder"
}, Ul = {
  key: 10,
  class: "view-placeholder"
}, Al = {
  key: 11,
  class: "view-placeholder"
}, Vl = {
  key: 12,
  class: "view-placeholder"
}, Hl = {
  key: 13,
  class: "view-placeholder"
}, Pl = { class: "dialog-content env-selector-dialog" }, Gl = { class: "dialog-header" }, Kl = { class: "dialog-body" }, jl = { class: "env-list" }, Fl = { class: "env-info" }, ql = { class: "env-name-row" }, Yl = { class: "env-indicator" }, Zl = { class: "env-name" }, Xl = {
  key: 0,
  class: "env-branch"
}, Jl = {
  key: 1,
  class: "current-label"
}, Ql = { class: "env-stats" }, er = ["onClick"], tr = { class: "toast-container" }, or = { class: "toast-icon" }, sr = { class: "toast-message" }, ar = /* @__PURE__ */ X({
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
    } = ie(), m = w(null), E = w([]), O = w([]), Y = w([]), R = I(() => Y.value.find((k) => k.is_current)), C = w(!1), M = w(null), P = w(null), Z = w(!1), L = w("status"), u = w("this-env");
    function a(k, l) {
      L.value = k, u.value = l;
    }
    function r(k) {
      const G = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[k];
      G && a(G.view, G.section);
    }
    const b = w(null), V = w([]);
    let ce = 0;
    function S(k, l = "info", G = 3e3) {
      const ee = ++ce;
      return V.value.push({ id: ee, message: k, type: l }), G > 0 && setTimeout(() => {
        V.value = V.value.filter((de) => de.id !== ee);
      }, G), ee;
    }
    function D(k) {
      V.value = V.value.filter((l) => l.id !== k);
    }
    function B(k) {
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
    const ae = I(() => {
      if (!m.value) return "neutral";
      const k = m.value.workflows, l = k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || m.value.has_changes;
      return m.value.comparison.is_synced ? l ? "warning" : "success" : "error";
    });
    I(() => m.value ? ae.value === "success" ? "All synced" : ae.value === "warning" ? "Uncommitted changes" : ae.value === "error" ? "Not synced" : "" : "");
    async function x() {
      C.value = !0, M.value = null;
      try {
        const [k, l, G, ee] = await Promise.all([
          i(),
          p(),
          h(),
          _()
        ]);
        m.value = k, E.value = l.commits, O.value = G.branches, Y.value = ee, c("statusUpdate", k);
      } catch (k) {
        M.value = k instanceof Error ? k.message : "Failed to load status", m.value = null, E.value = [], O.value = [];
      } finally {
        C.value = !1;
      }
    }
    function H(k) {
      P.value = k;
    }
    async function Q(k) {
      var G;
      P.value = null;
      const l = m.value && (m.value.workflows.new.length > 0 || m.value.workflows.modified.length > 0 || m.value.workflows.deleted.length > 0 || m.value.has_changes);
      b.value = {
        title: l ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: l ? "You have uncommitted changes that will be lost." : `Checkout commit ${k.short_hash || ((G = k.hash) == null ? void 0 : G.slice(0, 7))}?`,
        details: l ? ze() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: l ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: l,
        onConfirm: async () => {
          var z;
          b.value = null;
          const ee = S(`Checking out ${k.short_hash || ((z = k.hash) == null ? void 0 : z.slice(0, 7))}...`, "info", 0), de = await y(k.hash, l);
          D(ee), de.status === "success" ? S("Restarting ComfyUI...", "success") : S(de.message || "Checkout failed", "error");
        }
      };
    }
    async function pe(k) {
      const l = m.value && (m.value.workflows.new.length > 0 || m.value.workflows.modified.length > 0 || m.value.workflows.deleted.length > 0 || m.value.has_changes);
      b.value = {
        title: l ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: l ? "You have uncommitted changes." : `Switch to branch "${k}"?`,
        details: l ? ze() : void 0,
        warning: l ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: l ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          b.value = null;
          const G = S(`Switching to ${k}...`, "info", 0), ee = await $(k, l);
          D(G), ee.status === "success" ? S("Restarting ComfyUI...", "success") : S(ee.message || "Branch switch failed", "error");
        }
      };
    }
    async function ye(k) {
      const l = S(`Creating branch ${k}...`, "info", 0), G = await f(k);
      D(l), G.status === "success" ? (S(`Branch "${k}" created`, "success"), await x()) : S(G.message || "Failed to create branch", "error");
    }
    async function Ue(k) {
      P.value = null;
      const l = prompt("Enter branch name:");
      if (l) {
        const G = S(`Creating branch ${l}...`, "info", 0), ee = await f(l, k.hash);
        D(G), ee.status === "success" ? (S(`Branch "${l}" created from ${k.short_hash}`, "success"), await x()) : S(ee.message || "Failed to create branch", "error");
      }
    }
    async function Ae(k) {
      Z.value = !1, S("Environment switching not yet implemented", "warning");
    }
    function ze() {
      if (!m.value) return [];
      const k = [], l = m.value.workflows;
      return l.new.length && k.push(`${l.new.length} new workflow(s)`), l.modified.length && k.push(`${l.modified.length} modified workflow(s)`), l.deleted.length && k.push(`${l.deleted.length} deleted workflow(s)`), k;
    }
    async function Ve() {
      const k = S("Exporting environment...", "info", 0);
      try {
        const l = await d();
        D(k), l.status === "success" ? (S("Export complete", "success"), alert(`Export successful!

Saved to: ${l.path}

Models without sources: ${l.models_without_sources}`)) : (S("Export failed", "error"), alert(`Export failed: ${l.message}`));
      } catch (l) {
        D(k), S("Export error", "error"), alert(`Export error: ${l instanceof Error ? l.message : "Unknown error"}`);
      }
    }
    return re(x), (k, l) => {
      var G, ee, de;
      return t(), s("div", bl, [
        e("div", wl, [
          e("div", _l, [
            l[20] || (l[20] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            m.value ? (t(), s("div", kl)) : g("", !0)
          ]),
          e("div", $l, [
            e("button", {
              class: W(["icon-btn", { spinning: C.value }]),
              onClick: x,
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
        e("div", xl, [
          l[24] || (l[24] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: l[1] || (l[1] = (z) => Z.value = !0)
          }, [
            m.value ? (t(), s("div", Cl, [
              e("span", null, n(((G = R.value) == null ? void 0 : G.name) || ((ee = m.value) == null ? void 0 : ee.environment) || "Loading..."), 1),
              e("span", Sl, "(" + n(m.value.branch || "detached") + ")", 1)
            ])) : g("", !0),
            l[23] || (l[23] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", El, [
          e("div", Ll, [
            e("div", Ml, [
              l[25] || (l[25] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "status" && u.value === "this-env" }]),
                onClick: l[2] || (l[2] = (z) => a("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "workflows" }]),
                onClick: l[3] || (l[3] = (z) => a("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "models-env" }]),
                onClick: l[4] || (l[4] = (z) => a("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "branches" }]),
                onClick: l[5] || (l[5] = (z) => a("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "history" }]),
                onClick: l[6] || (l[6] = (z) => a("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "nodes" }]),
                onClick: l[7] || (l[7] = (z) => a("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "debug-env" }]),
                onClick: l[8] || (l[8] = (z) => a("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            l[28] || (l[28] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", zl, [
              l[26] || (l[26] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "environments" }]),
                onClick: l[9] || (l[9] = (z) => a("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "model-index" }]),
                onClick: l[10] || (l[10] = (z) => a("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "settings" }]),
                onClick: l[11] || (l[11] = (z) => a("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "debug-workspace" }]),
                onClick: l[12] || (l[12] = (z) => a("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            l[29] || (l[29] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Il, [
              l[27] || (l[27] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "export" }]),
                onClick: l[13] || (l[13] = (z) => a("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "import" }]),
                onClick: l[14] || (l[14] = (z) => a("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: W(["sidebar-item", { active: L.value === "remotes" }]),
                onClick: l[15] || (l[15] = (z) => a("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Ol, [
            M.value ? (t(), s("div", Dl, n(M.value), 1)) : !m.value && L.value === "status" ? (t(), s("div", Nl, " Loading status... ")) : (t(), s(T, { key: 2 }, [
              L.value === "status" ? (t(), q(ht, {
                key: 0,
                status: m.value
              }, null, 8, ["status"])) : L.value === "workflows" ? (t(), q(Ds, {
                key: 1,
                onRefresh: x
              })) : L.value === "models-env" ? (t(), q(Wa, {
                key: 2,
                onNavigate: r
              })) : L.value === "branches" ? (t(), q(St, {
                key: 3,
                branches: O.value,
                current: ((de = m.value) == null ? void 0 : de.branch) || null,
                onSwitch: pe,
                onCreate: ye
              }, null, 8, ["branches", "current"])) : L.value === "history" ? (t(), q(Bt, {
                key: 4,
                commits: E.value,
                onSelect: H,
                onCheckout: Q
              }, null, 8, ["commits"])) : L.value === "nodes" ? (t(), s("div", Tl, [...l[30] || (l[30] = [
                e("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                e("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : L.value === "debug-env" ? (t(), s("div", Bl, [...l[31] || (l[31] = [
                e("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                e("p", null, "Environment logs view coming soon...", -1)
              ])])) : L.value === "environments" ? (t(), s("div", Rl, [...l[32] || (l[32] = [
                e("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                e("p", null, "Environment management UI coming soon...", -1)
              ])])) : L.value === "model-index" ? (t(), q(Yn, { key: 8 })) : L.value === "settings" ? (t(), s("div", Wl, [...l[33] || (l[33] = [
                e("h3", { class: "view-title" }, "SETTINGS", -1),
                e("p", null, "Settings UI coming soon...", -1)
              ])])) : L.value === "debug-workspace" ? (t(), s("div", Ul, [...l[34] || (l[34] = [
                e("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                e("p", null, "Workspace logs view coming soon...", -1)
              ])])) : L.value === "export" ? (t(), s("div", Al, [
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
                  U(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : L.value === "import" ? (t(), s("div", Vl, [...l[37] || (l[37] = [
                e("h3", { class: "view-title" }, "IMPORT", -1),
                e("p", null, "Import UI coming soon...", -1)
              ])])) : L.value === "remotes" ? (t(), s("div", Hl, [...l[38] || (l[38] = [
                e("h3", { class: "view-title" }, "REMOTES", -1),
                e("p", null, "Git remotes UI coming soon...", -1)
              ])])) : g("", !0)
            ], 64))
          ])
        ]),
        P.value ? (t(), q(gl, {
          key: 0,
          commit: P.value,
          onClose: l[16] || (l[16] = (z) => P.value = null),
          onCheckout: Q,
          onCreateBranch: Ue
        }, null, 8, ["commit"])) : g("", !0),
        b.value ? (t(), q(yl, {
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
          onClick: l[19] || (l[19] = fe((z) => Z.value = !1, ["self"]))
        }, [
          e("div", Pl, [
            e("div", Gl, [
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
            e("div", Kl, [
              l[41] || (l[41] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", jl, [
                (t(!0), s(T, null, A(Y.value, (z) => (t(), s("div", {
                  key: z.name,
                  class: W(["env-item", { current: z.is_current }])
                }, [
                  e("div", Fl, [
                    e("div", ql, [
                      e("span", Yl, n(z.is_current ? "●" : "○"), 1),
                      e("span", Zl, n(z.name), 1),
                      z.current_branch ? (t(), s("span", Xl, "(" + n(z.current_branch) + ")", 1)) : g("", !0),
                      z.is_current ? (t(), s("span", Jl, "CURRENT")) : g("", !0)
                    ]),
                    e("div", Ql, n(z.workflow_count) + " workflows • " + n(z.node_count) + " nodes ", 1)
                  ]),
                  z.is_current ? g("", !0) : (t(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Br) => Ae(z.name)
                  }, " SWITCH ", 8, er))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : g("", !0),
        e("div", tr, [
          F(je, { name: "toast" }, {
            default: N(() => [
              (t(!0), s(T, null, A(V.value, (z) => (t(), s("div", {
                key: z.id,
                class: W(["toast", z.type])
              }, [
                e("span", or, n(B(z.type)), 1),
                e("span", sr, n(z.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), nr = /* @__PURE__ */ J(ar, [["__scopeId", "data-v-315c8db1"]]), lr = { class: "base-textarea-wrapper" }, rr = ["value", "rows", "placeholder", "disabled", "maxlength"], ir = {
  key: 0,
  class: "base-textarea-count"
}, cr = /* @__PURE__ */ X({
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
    return (v, c) => (t(), s("div", lr, [
      e("textarea", {
        value: o.modelValue,
        rows: o.rows,
        placeholder: o.placeholder,
        disabled: o.disabled,
        maxlength: o.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (i) => v.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          c[1] || (c[1] = we(fe((i) => v.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = we(fe((i) => v.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, rr),
      o.showCharCount && o.maxLength ? (t(), s("div", ir, n(o.modelValue.length) + " / " + n(o.maxLength), 1)) : g("", !0)
    ]));
  }
}), dr = /* @__PURE__ */ J(cr, [["__scopeId", "data-v-5516e6fc"]]), ur = { class: "commit-popover" }, mr = { class: "popover-header" }, gr = { class: "popover-body" }, hr = {
  key: 0,
  class: "changes-summary"
}, vr = {
  key: 0,
  class: "change-item"
}, fr = {
  key: 1,
  class: "change-item"
}, pr = {
  key: 2,
  class: "change-item"
}, yr = {
  key: 3,
  class: "change-item"
}, br = {
  key: 4,
  class: "change-item"
}, wr = {
  key: 1,
  class: "no-changes"
}, _r = {
  key: 2,
  class: "loading"
}, kr = { class: "message-section" }, $r = { class: "popover-footer" }, xr = /* @__PURE__ */ X({
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
      var _, m, E;
      if (!(!f.value || !d.value.trim() || h.value)) {
        h.value = !0, y.value = null;
        try {
          const O = await p(d.value.trim());
          O.status === "success" ? (y.value = {
            type: "success",
            message: `Committed: ${((_ = O.summary) == null ? void 0 : _.new) || 0} new, ${((m = O.summary) == null ? void 0 : m.modified) || 0} modified, ${((E = O.summary) == null ? void 0 : E.deleted) || 0} deleted`
          }, d.value = "", setTimeout(() => i("committed"), 1e3)) : O.status === "no_changes" ? y.value = { type: "error", message: "No changes to commit" } : y.value = { type: "error", message: O.message || "Commit failed" };
        } catch (O) {
          y.value = { type: "error", message: O instanceof Error ? O.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (_, m) => (t(), s("div", ur, [
      e("div", mr, [
        m[4] || (m[4] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: m[0] || (m[0] = (E) => i("close"))
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
      e("div", gr, [
        o.status && f.value ? (t(), s("div", hr, [
          o.status.workflows.new.length ? (t(), s("div", vr, [
            m[5] || (m[5] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(o.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : g("", !0),
          o.status.workflows.modified.length ? (t(), s("div", fr, [
            m[6] || (m[6] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, n(o.status.workflows.modified.length) + " modified", 1)
          ])) : g("", !0),
          o.status.workflows.deleted.length ? (t(), s("div", pr, [
            m[7] || (m[7] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(o.status.workflows.deleted.length) + " deleted", 1)
          ])) : g("", !0),
          o.status.git_changes.nodes_added.length ? (t(), s("div", yr, [
            m[8] || (m[8] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(o.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : g("", !0),
          o.status.git_changes.nodes_removed.length ? (t(), s("div", br, [
            m[9] || (m[9] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(o.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : g("", !0)
        ])) : o.status ? (t(), s("div", wr, " No changes to commit ")) : (t(), s("div", _r, " Loading... ")),
        e("div", kr, [
          F(dr, {
            modelValue: d.value,
            "onUpdate:modelValue": m[1] || (m[1] = (E) => d.value = E),
            placeholder: f.value ? "Describe your changes..." : "No changes",
            disabled: !f.value || h.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        y.value ? (t(), s("div", {
          key: 3,
          class: W(["result", y.value.type])
        }, n(y.value.message), 3)) : g("", !0)
      ]),
      e("div", $r, [
        F(te, {
          variant: "secondary",
          onClick: m[2] || (m[2] = (E) => i("close"))
        }, {
          default: N(() => [...m[10] || (m[10] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        }),
        F(te, {
          variant: "primary",
          disabled: !f.value || !d.value.trim() || h.value,
          loading: h.value,
          onClick: $
        }, {
          default: N(() => [
            U(n(h.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Cr = /* @__PURE__ */ J(xr, [["__scopeId", "data-v-4f587977"]]), Sr = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .commit-item{border-radius:var(--cg-radius-md);border-left:3px solid var(--cg-color-border-subtle);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', Er = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Lr = {
  comfy: Sr,
  phosphor: Er
}, Le = "comfy", Te = "comfygit-theme";
let ue = null, Be = Le;
function Mr() {
  try {
    const o = localStorage.getItem(Te);
    if (o && (o === "comfy" || o === "phosphor"))
      return o;
  } catch {
  }
  return Le;
}
function Re(o = Le) {
  ue && ue.remove(), ue = document.createElement("style"), ue.id = "comfygit-theme-styles", ue.setAttribute("data-theme", o), ue.textContent = Lr[o], document.head.appendChild(ue), document.body.setAttribute("data-comfygit-theme", o), Be = o;
  try {
    localStorage.setItem(Te, o);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${o}`);
}
function zr() {
  return Be;
}
function Ir(o) {
  Re(o);
}
const Me = document.createElement("link");
Me.rel = "stylesheet";
Me.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Me);
const Or = Mr();
Re(Or);
window.ComfyGit = {
  setTheme: (o) => {
    console.log(`[ComfyGit] Switching to theme: ${o}`), Ir(o);
  },
  getTheme: () => {
    const o = zr();
    return console.log(`[ComfyGit] Current theme: ${o}`), o;
  }
};
let se = null, oe = null, ve = null;
const me = w(null);
async function Ee() {
  var o;
  if (!((o = window.app) != null && o.api)) return null;
  try {
    const v = await window.app.api.fetchApi("/v2/comfygit/status");
    v.ok && (me.value = await v.json());
  } catch {
  }
}
function Dr() {
  if (!me.value) return !1;
  const o = me.value.workflows;
  return o.new.length > 0 || o.modified.length > 0 || o.deleted.length > 0 || me.value.has_changes;
}
function Nr() {
  se && se.remove(), se = document.createElement("div"), se.className = "comfygit-panel-overlay";
  const o = document.createElement("div");
  o.className = "comfygit-panel-container", se.appendChild(o), se.addEventListener("click", (i) => {
    i.target === se && Se();
  });
  const v = (i) => {
    i.key === "Escape" && (Se(), document.removeEventListener("keydown", v));
  };
  document.addEventListener("keydown", v), Oe({
    render: () => De(nr, {
      onClose: Se,
      onStatusUpdate: (i) => {
        me.value = i, _e();
      }
    })
  }).mount(o), document.body.appendChild(se);
}
function Se() {
  se && (se.remove(), se = null);
}
function Tr(o) {
  ge(), oe = document.createElement("div"), oe.className = "comfygit-commit-popover-container";
  const v = o.getBoundingClientRect();
  oe.style.position = "fixed", oe.style.top = `${v.bottom + 8}px`, oe.style.right = `${window.innerWidth - v.right}px`, oe.style.zIndex = "10001";
  const c = (p) => {
    oe && !oe.contains(p.target) && p.target !== o && (ge(), document.removeEventListener("mousedown", c));
  };
  setTimeout(() => document.addEventListener("mousedown", c), 0);
  const i = (p) => {
    p.key === "Escape" && (ge(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), ve = Oe({
    render: () => De(Cr, {
      status: me.value,
      onClose: ge,
      onCommitted: () => {
        ge(), Ee().then(_e);
      }
    })
  }), ve.mount(oe), document.body.appendChild(oe);
}
function ge() {
  ve && (ve.unmount(), ve = null), oe && (oe.remove(), oe = null);
}
let ne = null;
function _e() {
  if (!ne) return;
  const o = ne.querySelector(".commit-indicator");
  o && (o.style.display = Dr() ? "block" : "none");
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
    var c, i;
    const o = document.createElement("div");
    o.className = "comfygit-btn-group";
    const v = document.createElement("button");
    v.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", v.textContent = "ComfyGit", v.title = "ComfyGit Control Panel", v.onclick = Nr, ne = document.createElement("button"), ne.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ne.innerHTML = 'Commit <span class="commit-indicator"></span>', ne.title = "Quick Commit", ne.onclick = () => Tr(ne), o.appendChild(v), o.appendChild(ne), (i = (c = Ce.menu) == null ? void 0 : c.settingsGroup) != null && i.element && (Ce.menu.settingsGroup.element.before(o), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Ee(), _e(), setInterval(async () => {
      await Ee(), _e();
    }, 3e4);
  }
});
