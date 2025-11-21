import { app as Ce } from "../../scripts/app.js";
import { defineComponent as W, computed as V, createElementBlock as s, openBlock as o, createElementVNode as e, createCommentVNode as c, toDisplayString as n, ref as x, nextTick as Ye, withDirectives as Le, withKeys as be, vModelText as Me, Fragment as P, renderList as K, normalizeClass as R, withModifiers as fe, onMounted as de, onUnmounted as Ze, createBlock as L, Teleport as Re, renderSlot as j, resolveDynamicComponent as Be, withCtx as w, createVNode as O, createTextVNode as _, normalizeStyle as We, TransitionGroup as Xe, createApp as Ae, h as Ue } from "vue";
const Je = { class: "status-section" }, Qe = { class: "status-grid" }, et = { class: "status-column" }, tt = {
  key: 0,
  class: "status-item"
}, ot = { class: "count new" }, st = {
  key: 1,
  class: "status-item"
}, at = { class: "count modified" }, nt = {
  key: 2,
  class: "status-item"
}, lt = { class: "count deleted" }, rt = { class: "status-item synced-item" }, it = { class: "count synced" }, ct = { class: "status-column" }, dt = {
  key: 0,
  class: "status-item"
}, ut = { class: "count new" }, mt = {
  key: 1,
  class: "status-item"
}, gt = { class: "count deleted" }, vt = {
  key: 2,
  class: "status-item"
}, ft = {
  key: 3,
  class: "status-item ok"
}, ht = {
  key: 0,
  class: "warning-box"
}, pt = {
  key: 1,
  class: "warning-box error"
}, yt = /* @__PURE__ */ W({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(t) {
    const i = t, a = V(() => {
      const h = i.status.git_changes;
      return h.nodes_added.length > 0 || h.nodes_removed.length > 0 || h.workflow_changes || h.has_other_changes;
    }), l = V(() => {
      const h = i.status.git_changes, u = i.status.workflows;
      return (h.workflow_changes || h.has_other_changes) && u.new.length === 0 && u.modified.length === 0 && u.deleted.length === 0;
    });
    return (h, u) => (o(), s("div", Je, [
      u[18] || (u[18] = e("h3", { class: "view-title" }, "STATUS", -1)),
      e("div", Qe, [
        e("div", et, [
          u[8] || (u[8] = e("h4", { class: "column-title" }, "Workflows", -1)),
          t.status.workflows.new.length ? (o(), s("div", tt, [
            u[0] || (u[0] = e("span", { class: "icon" }, "●", -1)),
            e("span", ot, n(t.status.workflows.new.length), 1),
            u[1] || (u[1] = e("span", { class: "label" }, "new", -1))
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", st, [
            u[2] || (u[2] = e("span", { class: "icon" }, "●", -1)),
            e("span", at, n(t.status.workflows.modified.length), 1),
            u[3] || (u[3] = e("span", { class: "label" }, "modified", -1))
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", nt, [
            u[4] || (u[4] = e("span", { class: "icon" }, "●", -1)),
            e("span", lt, n(t.status.workflows.deleted.length), 1),
            u[5] || (u[5] = e("span", { class: "label" }, "deleted", -1))
          ])) : c("", !0),
          e("div", rt, [
            u[6] || (u[6] = e("span", { class: "icon synced" }, "✓", -1)),
            e("span", it, n(t.status.workflows.synced.length), 1),
            u[7] || (u[7] = e("span", { class: "label" }, "synced", -1))
          ])
        ]),
        e("div", ct, [
          u[15] || (u[15] = e("h4", { class: "column-title" }, "Git Changes", -1)),
          t.status.git_changes.nodes_added.length ? (o(), s("div", dt, [
            u[9] || (u[9] = e("span", { class: "icon" }, "●", -1)),
            e("span", ut, n(t.status.git_changes.nodes_added.length), 1),
            u[10] || (u[10] = e("span", { class: "label" }, "node added", -1))
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", mt, [
            u[11] || (u[11] = e("span", { class: "icon" }, "●", -1)),
            e("span", gt, n(t.status.git_changes.nodes_removed.length), 1),
            u[12] || (u[12] = e("span", { class: "label" }, "node removed", -1))
          ])) : c("", !0),
          l.value ? (o(), s("div", vt, [...u[13] || (u[13] = [
            e("span", { class: "icon" }, "●", -1),
            e("span", { class: "count modified" }, "●", -1),
            e("span", { class: "label" }, "other changes", -1)
          ])])) : c("", !0),
          a.value ? c("", !0) : (o(), s("div", ft, [...u[14] || (u[14] = [
            e("span", { class: "icon" }, "✓", -1),
            e("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      t.status.missing_models_count > 0 ? (o(), s("div", ht, [
        u[16] || (u[16] = e("span", { class: "warning-icon" }, "⚠", -1)),
        e("span", null, n(t.status.missing_models_count) + " missing model(s)", 1)
      ])) : c("", !0),
      t.status.comparison.is_synced ? c("", !0) : (o(), s("div", pt, [...u[17] || (u[17] = [
        e("span", { class: "warning-icon" }, "⚠", -1),
        e("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), A = (t, i) => {
  const a = t.__vccOpts || t;
  for (const [l, h] of i)
    a[l] = h;
  return a;
}, bt = /* @__PURE__ */ A(yt, [["__scopeId", "data-v-ff523fe5"]]), wt = { class: "branch-section" }, kt = { class: "section-header" }, _t = {
  key: 0,
  class: "create-branch-row"
}, $t = ["disabled"], xt = {
  key: 1,
  class: "empty"
}, Ct = {
  key: 2,
  class: "branch-list"
}, St = { class: "branch-indicator" }, Et = { class: "branch-name" }, It = ["onClick"], zt = {
  key: 1,
  class: "current-label"
}, Lt = /* @__PURE__ */ W({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: i }) {
    const a = i, l = x(!1), h = x(""), u = x(null);
    function f() {
      h.value.trim() && (a("create", h.value.trim()), k());
    }
    function k() {
      l.value = !1, h.value = "";
    }
    return Ye(() => {
      l.value && u.value && u.value.focus();
    }), (b, C) => (o(), s("div", wt, [
      e("div", kt, [
        C[3] || (C[3] = e("h3", { class: "view-title" }, "BRANCHES", -1)),
        e("button", {
          class: "add-btn",
          onClick: C[0] || (C[0] = (S) => l.value = !0),
          title: "New Branch"
        }, [...C[2] || (C[2] = [
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
      l.value ? (o(), s("div", _t, [
        Le(e("input", {
          ref_key: "createInput",
          ref: u,
          "onUpdate:modelValue": C[1] || (C[1] = (S) => h.value = S),
          class: "branch-input",
          placeholder: "Branch name...",
          onKeyup: [
            be(f, ["enter"]),
            be(k, ["escape"])
          ]
        }, null, 544), [
          [Me, h.value]
        ]),
        e("button", {
          class: "action-btn create",
          onClick: f,
          disabled: !h.value.trim()
        }, " Create ", 8, $t),
        e("button", {
          class: "action-btn cancel",
          onClick: k
        }, " Cancel ")
      ])) : c("", !0),
      t.branches.length === 0 ? (o(), s("div", xt, " No branches found ")) : (o(), s("div", Ct, [
        (o(!0), s(P, null, K(t.branches, (S) => (o(), s("div", {
          key: S.name,
          class: R(["branch-item", { current: S.is_current }])
        }, [
          e("span", St, n(S.is_current ? "●" : "○"), 1),
          e("span", Et, n(S.name), 1),
          S.is_current ? (o(), s("span", zt, "current")) : (o(), s("button", {
            key: 0,
            class: "switch-btn",
            onClick: (v) => b.$emit("switch", S.name)
          }, " Switch ", 8, It))
        ], 2))), 128))
      ]))
    ]));
  }
}), Mt = /* @__PURE__ */ A(Lt, [["__scopeId", "data-v-e2bd816d"]]), Bt = { class: "history-section" }, Tt = {
  key: 0,
  class: "empty"
}, Ot = {
  key: 1,
  class: "commit-list"
}, Dt = ["onClick"], Nt = { class: "commit-hash" }, Rt = { class: "commit-message" }, Wt = { class: "commit-date" }, At = ["onClick"], Ut = /* @__PURE__ */ W({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (i, a) => (o(), s("div", Bt, [
      a[2] || (a[2] = e("h3", { class: "view-title" }, "HISTORY", -1)),
      t.commits.length === 0 ? (o(), s("div", Tt, " No commits yet ")) : (o(), s("div", Ot, [
        (o(!0), s(P, null, K(t.commits, (l) => {
          var h;
          return o(), s("div", {
            key: l.hash,
            class: "commit-item",
            onClick: (u) => i.$emit("select", l)
          }, [
            e("span", Nt, n(l.short_hash || ((h = l.hash) == null ? void 0 : h.slice(0, 7))), 1),
            e("span", Rt, n(l.message), 1),
            e("span", Wt, n(l.date_relative || l.relative_date), 1),
            e("div", {
              class: "commit-actions",
              onClick: a[0] || (a[0] = fe(() => {
              }, ["stop"]))
            }, [
              e("button", {
                class: "action-btn",
                onClick: (u) => i.$emit("checkout", l),
                title: "Checkout this commit"
              }, [...a[1] || (a[1] = [
                e("svg", {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                ], -1)
              ])], 8, At)
            ])
          ], 8, Dt);
        }), 128))
      ]))
    ]));
  }
}), Vt = /* @__PURE__ */ A(Ut, [["__scopeId", "data-v-97388106"]]), Ne = [
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
  ...Array(12).fill(null).map((t, i) => ({
    name: `synced-workflow-${i + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + i,
    model_count: 1 + i % 3,
    sync_state: "synced"
  }))
], Pt = {
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
}, Ve = [
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
], Ht = [
  ...Ve,
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
], Gt = [
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
], _e = [
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
], Z = {
  // Environment Management
  getEnvironments: async () => (await X(300), [
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
    await X(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, i, a) => {
    await X(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${i}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (t) => {
    await X(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await X(400), Ne),
  getWorkflowDetails: async (t) => (await X(300), Pt[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await X(800), {
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
  installWorkflowDeps: async (t, i, a) => {
    await X(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${i}, models=${a}`);
  },
  setModelImportance: async (t, i, a) => {
    await X(200), console.log(`[MOCK] Setting ${i} importance to ${a} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await X(350), Ve),
  getWorkspaceModels: async () => (await X(400), Ht),
  updateModelSource: async (t, i) => {
    await X(300), console.log(`[MOCK] Updating source for ${t}: ${i}`);
  },
  deleteModel: async (t) => {
    await X(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await X(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Settings & Debug
  getConfig: async () => (await X(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await X(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, i) => (await X(250), (t ? _e.filter((l) => l.level === t) : _e).slice(0, i || 100)),
  getWorkspaceLogs: async (t, i) => {
    await X(300);
    const a = [..._e, ..._e.map((h) => ({
      ...h,
      context: { ...h.context, environment: "testing" }
    }))];
    return (t ? a.filter((h) => h.level === t) : a).slice(0, i || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await X(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: Ne.filter((t) => t.status === "synced").map((t) => t.name),
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
  getCommitHistory: async (t = 10) => (await X(300), Gt.slice(0, t)),
  getBranches: async () => (await X(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  })
};
function X(t) {
  return new Promise((i) => setTimeout(i, t));
}
function me() {
  const t = x(!1), i = x(null);
  async function a(I, F) {
    var we;
    if (!((we = window.app) != null && we.api))
      throw new Error("ComfyUI API not available");
    const te = await window.app.api.fetchApi(I, F);
    if (!te.ok) {
      const ke = await te.json().catch(() => ({}));
      throw new Error(ke.error || ke.message || `Request failed: ${te.status}`);
    }
    return te.json();
  }
  async function l() {
    return Z.getStatus();
  }
  async function h(I, F = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: I, allow_issues: F })
    });
  }
  async function u(I = 10, F = 0) {
    {
      const te = await Z.getCommitHistory(I);
      return {
        commits: te,
        total: te.length,
        offset: F
      };
    }
  }
  async function f(I) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: I })
    });
  }
  async function k() {
    return Z.getBranches();
  }
  async function b(I) {
    return a(`/v2/comfygit/commit/${I}`);
  }
  async function C(I, F = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: I, force: F })
    });
  }
  async function S(I, F = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: I, start_point: F })
    });
  }
  async function v(I, F = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: I, force: F })
    });
  }
  async function D() {
    return Z.getEnvironments();
  }
  async function U(I) {
    return Z.switchEnvironment(I);
  }
  async function Q() {
    return null;
  }
  async function G(I, F, te) {
    return await Z.createEnvironment(I, F, te), { status: "success" };
  }
  async function M(I) {
    return await Z.deleteEnvironment(I), { status: "success" };
  }
  async function T() {
    return Z.getWorkflows();
  }
  async function q(I) {
    return Z.getWorkflowDetails(I);
  }
  async function J(I) {
    return Z.resolveWorkflow(I);
  }
  async function B(I, F, te) {
    return await Z.installWorkflowDeps(I, F, te), { status: "success" };
  }
  async function z(I, F, te) {
    return Z.setModelImportance(I, F, te);
  }
  async function g() {
    return Z.getEnvironmentModels();
  }
  async function m() {
    return Z.getWorkspaceModels();
  }
  async function d(I, F) {
    return Z.updateModelSource(I, F);
  }
  async function H(I) {
    return Z.deleteModel(I);
  }
  async function se(I) {
    return await Z.downloadModel(I), { status: "success" };
  }
  async function p() {
    return Z.getConfig();
  }
  async function y(I) {
    return Z.updateConfig(I);
  }
  async function $(I, F) {
    return Z.getEnvironmentLogs(I, F);
  }
  async function ee(I, F) {
    return Z.getWorkspaceLogs(I, F);
  }
  return {
    isLoading: t,
    error: i,
    getStatus: l,
    commit: h,
    getHistory: u,
    exportEnv: f,
    // Git Operations
    getBranches: k,
    getCommitDetail: b,
    checkout: C,
    createBranch: S,
    switchBranch: v,
    // Environment Management
    getEnvironments: D,
    switchEnvironment: U,
    getSwitchProgress: Q,
    createEnvironment: G,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: T,
    getWorkflowDetails: q,
    resolveWorkflow: J,
    installWorkflowDeps: B,
    setModelImportance: z,
    // Model Management
    getEnvironmentModels: g,
    getWorkspaceModels: m,
    updateModelSource: d,
    deleteModel: H,
    downloadModel: se,
    // Settings
    getConfig: p,
    updateConfig: y,
    // Debug/Logs
    getEnvironmentLogs: $,
    getWorkspaceLogs: ee
  };
}
const Kt = { class: "base-modal-header" }, Ft = {
  key: 0,
  class: "base-modal-title"
}, jt = { class: "base-modal-body" }, qt = {
  key: 0,
  class: "base-modal-loading"
}, Yt = {
  key: 1,
  class: "base-modal-error"
}, Zt = {
  key: 0,
  class: "base-modal-footer"
}, Xt = /* @__PURE__ */ W({
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
  setup(t, { emit: i }) {
    const a = t, l = i;
    function h() {
      a.closeOnOverlayClick && l("close");
    }
    function u(f) {
      f.key === "Escape" && l("close");
    }
    return de(() => {
      document.addEventListener("keydown", u), document.body.style.overflow = "hidden";
    }), Ze(() => {
      document.removeEventListener("keydown", u), document.body.style.overflow = "";
    }), (f, k) => (o(), L(Re, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: R(["base-modal-content", t.size]),
          onClick: k[1] || (k[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Kt, [
            j(f.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", Ft, n(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: k[0] || (k[0] = (b) => f.$emit("close"))
            }, [...k[2] || (k[2] = [
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
          e("div", jt, [
            t.loading ? (o(), s("div", qt, "Loading...")) : t.error ? (o(), s("div", Yt, n(t.error), 1)) : j(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (o(), s("div", Zt, [
            j(f.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), xe = /* @__PURE__ */ A(Xt, [["__scopeId", "data-v-700d367b"]]), Jt = ["type", "disabled"], Qt = {
  key: 0,
  class: "spinner"
}, eo = /* @__PURE__ */ W({
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
    return (i, a) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: R(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: a[0] || (a[0] = (l) => i.$emit("click", l))
    }, [
      t.loading ? (o(), s("span", Qt)) : c("", !0),
      j(i.$slots, "default", {}, void 0, !0)
    ], 10, Jt));
  }
}), ne = /* @__PURE__ */ A(eo, [["__scopeId", "data-v-f3452606"]]), to = {
  key: 0,
  class: "base-title-count"
}, oo = /* @__PURE__ */ W({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (i, a) => (o(), L(Be(`h${t.level}`), {
      class: R(["base-title", t.variant])
    }, {
      default: w(() => [
        j(i.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", to, "(" + n(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ue = /* @__PURE__ */ A(oo, [["__scopeId", "data-v-5a01561d"]]), so = ["value", "disabled"], ao = {
  key: 0,
  value: "",
  disabled: ""
}, no = ["value"], lo = {
  key: 0,
  class: "base-select-error"
}, ro = /* @__PURE__ */ W({
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
    function i(l) {
      return typeof l == "string" ? l : l.value;
    }
    function a(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, h) => (o(), s("div", {
      class: R(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: R(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (u) => l.$emit("update:modelValue", u.target.value))
      }, [
        t.placeholder ? (o(), s("option", ao, n(t.placeholder), 1)) : c("", !0),
        (o(!0), s(P, null, K(t.options, (u) => (o(), s("option", {
          key: i(u),
          value: i(u)
        }, n(a(u)), 9, no))), 128))
      ], 42, so),
      t.error ? (o(), s("span", lo, n(t.error), 1)) : c("", !0)
    ], 2));
  }
}), io = /* @__PURE__ */ A(ro, [["__scopeId", "data-v-7436d745"]]), co = { class: "detail-section" }, uo = {
  key: 0,
  class: "empty-message"
}, mo = { class: "model-header" }, go = { class: "model-name" }, vo = { class: "model-details" }, fo = { class: "model-row" }, ho = { class: "model-row" }, po = {
  key: 0,
  class: "model-row"
}, yo = { class: "value" }, bo = {
  key: 1,
  class: "model-row"
}, wo = { class: "value" }, ko = {
  key: 0,
  class: "model-actions"
}, _o = { class: "detail-section" }, $o = {
  key: 0,
  class: "empty-message"
}, xo = { class: "node-name" }, Co = {
  key: 0,
  class: "node-version"
}, So = /* @__PURE__ */ W({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(t, { emit: i }) {
    const a = t, l = i, { getWorkflowDetails: h, setModelImportance: u } = me(), f = x(null), k = x(!1), b = x(null), C = x(!1), S = x({}), v = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function D() {
      k.value = !0, b.value = null;
      try {
        f.value = await h(a.workflowName);
      } catch (G) {
        b.value = G instanceof Error ? G.message : "Failed to load workflow details";
      } finally {
        k.value = !1;
      }
    }
    function U(G, M) {
      S.value[G] = M, C.value = !0;
    }
    async function Q() {
      if (!C.value) {
        l("close");
        return;
      }
      k.value = !0, b.value = null;
      try {
        for (const [G, M] of Object.entries(S.value))
          await u(a.workflowName, G, M);
        l("close");
      } catch (G) {
        b.value = G instanceof Error ? G.message : "Failed to save changes";
      } finally {
        k.value = !1;
      }
    }
    return de(D), (G, M) => (o(), L(xe, {
      title: `WORKFLOW DETAILS: ${t.workflowName}`,
      size: "lg",
      loading: k.value,
      error: b.value || void 0,
      onClose: M[2] || (M[2] = (T) => l("close"))
    }, {
      body: w(() => [
        f.value ? (o(), s(P, { key: 0 }, [
          e("section", co, [
            O(ue, { variant: "section" }, {
              default: w(() => [
                _("MODELS USED (" + n(f.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            f.value.models.length === 0 ? (o(), s("div", uo, " No models used in this workflow ")) : c("", !0),
            (o(!0), s(P, null, K(f.value.models, (T) => (o(), s("div", {
              key: T.hash,
              class: "model-card"
            }, [
              e("div", mo, [
                M[3] || (M[3] = e("span", { class: "model-icon" }, "📦", -1)),
                e("span", go, n(T.filename), 1)
              ]),
              e("div", vo, [
                e("div", fo, [
                  M[4] || (M[4] = e("span", { class: "label" }, "Status:", -1)),
                  e("span", {
                    class: R(["value", T.status === "available" ? "success" : "error"])
                  }, n(T.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                e("div", ho, [
                  M[5] || (M[5] = e("span", { class: "label" }, "Importance:", -1)),
                  O(io, {
                    "model-value": S.value[T.hash] || T.importance,
                    options: v,
                    "onUpdate:modelValue": (q) => U(T.hash, q)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                T.node_type ? (o(), s("div", po, [
                  M[6] || (M[6] = e("span", { class: "label" }, "Used in:", -1)),
                  e("span", yo, n(T.node_type) + " (Node " + n(T.node_id) + ")", 1)
                ])) : c("", !0),
                T.size_mb ? (o(), s("div", bo, [
                  M[7] || (M[7] = e("span", { class: "label" }, "Size:", -1)),
                  e("span", wo, n(T.size_mb) + " MB", 1)
                ])) : c("", !0)
              ]),
              T.status === "missing" ? (o(), s("div", ko, [
                O(ne, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[0] || (M[0] = (q) => l("resolve"))
                }, {
                  default: w(() => [...M[8] || (M[8] = [
                    _(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : c("", !0)
            ]))), 128))
          ]),
          M[9] || (M[9] = e("div", { class: "info-box" }, [
            e("div", { class: "info-title" }, "Importance options:"),
            e("ul", { class: "info-list" }, [
              e("li", null, [
                e("strong", null, "Required"),
                _(" — Must have for workflow to run")
              ]),
              e("li", null, [
                e("strong", null, "Flexible"),
                _(" — Workflow adapts if missing")
              ]),
              e("li", null, [
                e("strong", null, "Optional"),
                _(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          e("section", _o, [
            O(ue, { variant: "section" }, {
              default: w(() => [
                _("NODES USED (" + n(f.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            f.value.nodes.length === 0 ? (o(), s("div", $o, " No custom nodes used in this workflow ")) : c("", !0),
            (o(!0), s(P, null, K(f.value.nodes, (T) => (o(), s("div", {
              key: T.name,
              class: "node-item"
            }, [
              e("span", {
                class: R(["node-status", T.installed ? "installed" : "missing"])
              }, n(T.installed ? "✓" : "✕"), 3),
              e("span", xo, n(T.name), 1),
              T.version ? (o(), s("span", Co, "v" + n(T.version), 1)) : c("", !0)
            ]))), 128))
          ])
        ], 64)) : c("", !0)
      ]),
      footer: w(() => [
        O(ne, {
          variant: "secondary",
          onClick: M[1] || (M[1] = (T) => l("close"))
        }, {
          default: w(() => [...M[10] || (M[10] = [
            _(" Close ", -1)
          ])]),
          _: 1
        }),
        C.value ? (o(), L(ne, {
          key: 0,
          variant: "primary",
          onClick: Q
        }, {
          default: w(() => [...M[11] || (M[11] = [
            _(" Save Changes ", -1)
          ])]),
          _: 1
        })) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Eo = /* @__PURE__ */ A(So, [["__scopeId", "data-v-6ce9a41c"]]), Io = {
  key: 0,
  class: "resolve-section"
}, zo = { class: "resolve-card success-card" }, Lo = { class: "items-list" }, Mo = { class: "item-info" }, Bo = { class: "item-name" }, To = {
  key: 0,
  class: "item-meta"
}, Oo = { class: "match-type" }, Do = { class: "source" }, No = {
  key: 1,
  class: "resolve-section"
}, Ro = { class: "resolve-card warning-card" }, Wo = { class: "items-list" }, Ao = { class: "item-info" }, Uo = { class: "item-name" }, Vo = { class: "item-meta" }, Po = { key: 0 }, Ho = { key: 1 }, Go = {
  key: 0,
  class: "item-warning"
}, Ko = {
  key: 0,
  class: "item-action"
}, Fo = ["onClick"], jo = {
  key: 2,
  class: "resolve-section"
}, qo = { class: "info-text" }, Yo = { class: "actions-summary" }, Zo = { class: "summary-list" }, Xo = { key: 0 }, Jo = { key: 1 }, Qo = { key: 2 }, es = {
  key: 0,
  class: "estimated-size"
}, ts = /* @__PURE__ */ W({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(t, { emit: i }) {
    const a = t, l = i, { resolveWorkflow: h, installWorkflowDeps: u } = me(), f = x(null), k = x(!1), b = x(!1), C = x(null), S = V(() => {
      var z;
      return f.value ? ((z = f.value.download_results) == null ? void 0 : z.every((g) => g.can_download)) ?? !1 : !1;
    });
    async function v() {
      k.value = !0, C.value = null;
      try {
        f.value = await h(a.workflowName);
      } catch (z) {
        C.value = z instanceof Error ? z.message : "Failed to analyze workflow";
      } finally {
        k.value = !1;
      }
    }
    function D(z) {
      return !z.possible_matches || z.possible_matches.length === 0 ? null : z.possible_matches.reduce(
        (g, m) => m.match_confidence > g.match_confidence ? m : g
      );
    }
    function U(z) {
      return z >= 0.9 ? "high" : z >= 0.7 ? "medium" : "low";
    }
    function Q(z) {
      const g = D(z);
      return g ? g.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function G(z) {
      var g, m;
      return (m = (g = f.value) == null ? void 0 : g.download_results) == null ? void 0 : m.find((d) => d.model === z);
    }
    function M(z) {
      const g = G(z);
      return (g == null ? void 0 : g.can_download) ?? !1;
    }
    function T(z) {
      const g = G(z);
      return (g == null ? void 0 : g.source_url) || null;
    }
    function q(z) {
      window.open(z, "_blank");
    }
    async function J() {
      if (!(!f.value || b.value)) {
        b.value = !0, C.value = null;
        try {
          await u(
            a.workflowName,
            f.value.nodes_to_install,
            []
          ), l("install"), l("refresh"), l("close");
        } catch (z) {
          C.value = z instanceof Error ? z.message : "Installation failed";
        } finally {
          b.value = !1;
        }
      }
    }
    async function B() {
      if (!(!f.value || b.value)) {
        b.value = !0, C.value = null;
        try {
          await u(
            a.workflowName,
            f.value.nodes_to_install,
            f.value.models_to_download
          ), l("install"), l("refresh"), l("close");
        } catch (z) {
          C.value = z instanceof Error ? z.message : "Installation failed";
        } finally {
          b.value = !1;
        }
      }
    }
    return de(v), (z, g) => (o(), L(xe, {
      title: `RESOLVE DEPENDENCIES: ${t.workflowName}`,
      size: "lg",
      loading: k.value,
      error: C.value || void 0,
      onClose: g[1] || (g[1] = (m) => l("close"))
    }, {
      body: w(() => [
        f.value ? (o(), s(P, { key: 0 }, [
          g[5] || (g[5] = e("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          f.value.nodes_unresolved.length > 0 ? (o(), s("section", Io, [
            O(ue, { variant: "section" }, {
              default: w(() => [
                _("NODES (" + n(f.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", zo, [
              g[2] || (g[2] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "✓"),
                e("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              e("div", Lo, [
                (o(!0), s(P, null, K(f.value.nodes_unresolved, (m) => {
                  var d;
                  return o(), s("div", {
                    key: m.node_type,
                    class: "item"
                  }, [
                    e("div", Mo, [
                      e("div", Bo, n(((d = D(m)) == null ? void 0 : d.package_id) || m.node_type), 1),
                      D(m) ? (o(), s("div", To, [
                        e("span", {
                          class: R(["confidence-badge", U(D(m).match_confidence)])
                        }, n(Math.round(D(m).match_confidence * 100)) + "% match ", 3),
                        e("span", Oo, n(D(m).match_type), 1),
                        e("span", Do, "Source: " + n(Q(m)), 1)
                      ])) : c("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : c("", !0),
          f.value.models_unresolved.length > 0 ? (o(), s("section", No, [
            O(ue, { variant: "section" }, {
              default: w(() => [
                _("MODELS (" + n(f.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            e("div", Ro, [
              g[3] || (g[3] = e("div", { class: "card-header" }, [
                e("span", { class: "status-icon" }, "⚠"),
                e("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              e("div", Wo, [
                (o(!0), s(P, null, K(f.value.models_unresolved, (m) => (o(), s("div", {
                  key: m.filename,
                  class: "item"
                }, [
                  e("div", Ao, [
                    e("div", Uo, n(m.filename), 1),
                    e("div", Vo, [
                      m.expected_category ? (o(), s("span", Po, "Type: " + n(m.expected_category), 1)) : c("", !0),
                      G(m.filename) ? (o(), s("span", Ho, " Size: ~" + n(G(m.filename).estimated_size_mb) + " MB ", 1)) : c("", !0)
                    ]),
                    M(m.filename) ? c("", !0) : (o(), s("div", Go, " No auto-download source configured "))
                  ]),
                  T(m.filename) ? (o(), s("div", Ko, [
                    e("button", {
                      class: "link-btn",
                      onClick: (d) => q(T(m.filename))
                    }, " Open Source ↗ ", 8, Fo)
                  ])) : c("", !0)
                ]))), 128))
              ])
            ])
          ])) : c("", !0),
          f.value.nodes_resolved.length > 0 || f.value.models_resolved.length > 0 ? (o(), s("section", jo, [
            O(ue, { variant: "section" }, {
              default: w(() => [
                _(" ALREADY AVAILABLE (" + n(f.value.nodes_resolved.length + f.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            e("div", qo, n(f.value.nodes_resolved.length) + " nodes and " + n(f.value.models_resolved.length) + " models are already installed ", 1)
          ])) : c("", !0),
          e("div", Yo, [
            g[4] || (g[4] = e("div", { class: "summary-title" }, "This will:", -1)),
            e("ol", Zo, [
              f.value.nodes_to_install.length ? (o(), s("li", Xo, " Install " + n(f.value.nodes_to_install.length) + " nodes (~" + n(f.value.estimated_time_seconds) + "s) ", 1)) : c("", !0),
              f.value.nodes_to_install.length ? (o(), s("li", Jo, " Restart ComfyUI to load new nodes ")) : c("", !0),
              f.value.models_to_download.length ? (o(), s("li", Qo, " You'll still need to download " + n(f.value.models_to_download.length) + " model(s) manually ", 1)) : c("", !0)
            ]),
            f.value.estimated_size_mb ? (o(), s("div", es, " Estimated download: " + n(f.value.estimated_size_mb) + " MB ", 1)) : c("", !0)
          ])
        ], 64)) : c("", !0)
      ]),
      footer: w(() => [
        O(ne, {
          variant: "secondary",
          onClick: g[0] || (g[0] = (m) => l("close"))
        }, {
          default: w(() => [...g[6] || (g[6] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f.value && f.value.nodes_to_install.length && f.value.models_to_download.length ? (o(), L(ne, {
          key: 0,
          variant: "secondary",
          disabled: b.value,
          loading: b.value,
          onClick: J
        }, {
          default: w(() => [...g[7] || (g[7] = [
            _(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0),
        f.value && (f.value.nodes_to_install.length || f.value.models_to_download.length) ? (o(), L(ne, {
          key: 1,
          variant: "primary",
          disabled: b.value || f.value.models_to_download.length > 0 && !S.value,
          loading: b.value,
          onClick: B
        }, {
          default: w(() => [...g[8] || (g[8] = [
            _(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), os = /* @__PURE__ */ A(ts, [["__scopeId", "data-v-d68efb14"]]), ss = { class: "workflows-section" }, as = { class: "section-header" }, ns = { class: "search-bar" }, ls = {
  key: 0,
  class: "loading"
}, rs = {
  key: 1,
  class: "error-message"
}, is = {
  key: 2,
  class: "workflows-content"
}, cs = {
  key: 0,
  class: "workflow-group"
}, ds = { class: "group-title" }, us = { class: "workflow-info" }, ms = { class: "workflow-name" }, gs = { class: "workflow-status" }, vs = { class: "workflow-actions" }, fs = ["onClick"], hs = ["onClick"], ps = {
  key: 1,
  class: "workflow-group"
}, ys = { class: "group-title" }, bs = { class: "workflow-info" }, ws = { class: "workflow-name" }, ks = { class: "workflow-actions" }, _s = ["onClick"], $s = {
  key: 2,
  class: "workflow-group"
}, xs = { class: "group-title" }, Cs = { class: "workflow-info" }, Ss = { class: "workflow-name" }, Es = { class: "workflow-actions" }, Is = ["onClick"], zs = {
  key: 3,
  class: "workflow-group"
}, Ls = { class: "workflow-info" }, Ms = { class: "workflow-name" }, Bs = { class: "workflow-actions" }, Ts = ["onClick"], Os = {
  key: 4,
  class: "empty-state"
}, Ds = { key: 0 }, Ns = { key: 1 }, Rs = /* @__PURE__ */ W({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { emit: i }) {
    const a = i, { getWorkflows: l } = me(), h = x([]), u = x(!1), f = x(null), k = x(""), b = x(!1), C = x(!1), S = x(!1), v = x(!1), D = x(null), U = V(
      () => h.value.filter((p) => p.status === "broken")
    ), Q = V(
      () => h.value.filter((p) => p.status === "new")
    ), G = V(
      () => h.value.filter((p) => p.status === "modified")
    ), M = V(
      () => h.value.filter((p) => p.status === "synced")
    ), T = V(() => {
      if (!k.value.trim()) return h.value;
      const p = k.value.toLowerCase();
      return h.value.filter((y) => y.name.toLowerCase().includes(p));
    }), q = V(
      () => U.value.filter(
        (p) => !k.value.trim() || p.name.toLowerCase().includes(k.value.toLowerCase())
      )
    ), J = V(
      () => Q.value.filter(
        (p) => !k.value.trim() || p.name.toLowerCase().includes(k.value.toLowerCase())
      )
    ), B = V(
      () => G.value.filter(
        (p) => !k.value.trim() || p.name.toLowerCase().includes(k.value.toLowerCase())
      )
    ), z = V(
      () => M.value.filter(
        (p) => !k.value.trim() || p.name.toLowerCase().includes(k.value.toLowerCase())
      )
    );
    async function g() {
      u.value = !0, f.value = null;
      try {
        h.value = await l();
      } catch (p) {
        f.value = p instanceof Error ? p.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    function m(p) {
      D.value = p, S.value = !0;
    }
    function d(p) {
      D.value = p, v.value = !0;
    }
    function H() {
      alert("Bulk resolution not yet implemented");
    }
    function se() {
      a("refresh");
    }
    return de(g), (p, y) => (o(), s("div", ss, [
      e("div", as, [
        y[7] || (y[7] = e("h3", { class: "view-title" }, "WORKFLOWS", -1)),
        U.value.length > 0 ? (o(), s("button", {
          key: 0,
          class: "resolve-all-btn",
          onClick: H
        }, " RESOLVE ALL ISSUES ")) : c("", !0)
      ]),
      e("div", ns, [
        Le(e("input", {
          "onUpdate:modelValue": y[0] || (y[0] = ($) => k.value = $),
          type: "text",
          placeholder: "🔍 Search workflows...",
          class: "search-input"
        }, null, 512), [
          [Me, k.value]
        ])
      ]),
      u.value ? (o(), s("div", ls, "Loading workflows...")) : f.value ? (o(), s("div", rs, n(f.value), 1)) : (o(), s("div", is, [
        q.value.length ? (o(), s("section", cs, [
          e("h4", ds, "BROKEN (" + n(q.value.length) + ")", 1),
          (o(!0), s(P, null, K(q.value, ($) => (o(), s("div", {
            key: $.name,
            class: "workflow-item broken"
          }, [
            e("div", us, [
              e("div", ms, "⚠ " + n($.name), 1),
              e("div", gs, " Missing: " + n($.missing_nodes) + " nodes, " + n($.missing_models) + " models ", 1)
            ]),
            e("div", vs, [
              e("button", {
                class: "action-btn",
                onClick: (ee) => d($.name)
              }, " Resolve ▸ ", 8, fs),
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => m($.name)
              }, " Details ▸ ", 8, hs)
            ])
          ]))), 128))
        ])) : c("", !0),
        J.value.length ? (o(), s("section", ps, [
          e("h4", ys, "NEW (" + n(J.value.length) + ")", 1),
          (o(!0), s(P, null, K(J.value, ($) => (o(), s("div", {
            key: $.name,
            class: "workflow-item new"
          }, [
            e("div", bs, [
              e("div", ws, "● " + n($.name), 1),
              y[8] || (y[8] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            e("div", ks, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => m($.name)
              }, " Details ", 8, _s)
            ])
          ]))), 128))
        ])) : c("", !0),
        B.value.length ? (o(), s("section", $s, [
          e("h4", xs, "MODIFIED (" + n(B.value.length) + ")", 1),
          (o(!0), s(P, null, K(B.value, ($) => (o(), s("div", {
            key: $.name,
            class: "workflow-item modified"
          }, [
            e("div", Cs, [
              e("div", Ss, "⚡ " + n($.name), 1),
              y[9] || (y[9] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            e("div", Es, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => m($.name)
              }, " Details ", 8, Is)
            ])
          ]))), 128))
        ])) : c("", !0),
        z.value.length ? (o(), s("section", zs, [
          e("h4", {
            class: "group-title clickable",
            onClick: y[1] || (y[1] = ($) => b.value = !b.value)
          }, " SYNCED (" + n(z.value.length) + ") " + n(b.value ? "▼" : "▸"), 1),
          b.value ? (o(), s(P, { key: 0 }, [
            (o(!0), s(P, null, K(z.value.slice(0, C.value ? void 0 : 5), ($) => (o(), s("div", {
              key: $.name,
              class: "workflow-item synced"
            }, [
              e("div", Ls, [
                e("div", Ms, n($.name), 1),
                y[10] || (y[10] = e("div", { class: "workflow-status" }, "✓ Ready", -1))
              ]),
              e("div", Bs, [
                e("button", {
                  class: "action-btn secondary",
                  onClick: (ee) => m($.name)
                }, " Details ", 8, Ts)
              ])
            ]))), 128)),
            !C.value && z.value.length > 5 ? (o(), s("button", {
              key: 0,
              class: "show-more-btn",
              onClick: y[2] || (y[2] = ($) => C.value = !0)
            }, " View all " + n(z.value.length) + " → ", 1)) : c("", !0)
          ], 64)) : c("", !0)
        ])) : c("", !0),
        T.value.length ? c("", !0) : (o(), s("div", Os, [
          k.value ? (o(), s("p", Ds, 'No workflows match "' + n(k.value) + '"', 1)) : (o(), s("p", Ns, "No workflows found in this environment."))
        ]))
      ])),
      S.value && D.value ? (o(), L(Eo, {
        key: 3,
        "workflow-name": D.value,
        onClose: y[3] || (y[3] = ($) => S.value = !1),
        onResolve: y[4] || (y[4] = ($) => d(D.value))
      }, null, 8, ["workflow-name"])) : c("", !0),
      v.value && D.value ? (o(), L(os, {
        key: 4,
        "workflow-name": D.value,
        onClose: y[5] || (y[5] = ($) => v.value = !1),
        onInstall: se,
        onRefresh: y[6] || (y[6] = ($) => a("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ]));
  }
}), Ws = /* @__PURE__ */ A(Rs, [["__scopeId", "data-v-abf8513b"]]), As = { class: "models-env-section" }, Us = { class: "title-row" }, Vs = { class: "popover-header" }, Ps = { class: "popover-content" }, Hs = { class: "popover-text" }, Gs = { class: "search-bar" }, Ks = {
  key: 1,
  class: "loading"
}, Fs = {
  key: 2,
  class: "error-message"
}, js = {
  key: 3,
  class: "models-content"
}, qs = {
  key: 0,
  class: "model-group"
}, Ys = { class: "group-title" }, Zs = { class: "model-header" }, Xs = { class: "model-info" }, Js = { class: "model-name" }, Qs = { class: "model-size" }, ea = { class: "model-details" }, ta = { class: "detail-row" }, oa = { class: "value" }, sa = { class: "model-actions" }, aa = ["onClick"], na = {
  key: 1,
  class: "model-group"
}, la = { class: "group-title" }, ra = { class: "model-header" }, ia = { class: "model-info" }, ca = { class: "model-name" }, da = { class: "model-size" }, ua = { class: "model-details" }, ma = { class: "detail-row" }, ga = { class: "value" }, va = { class: "model-actions" }, fa = ["onClick"], ha = {
  key: 2,
  class: "model-group"
}, pa = { class: "group-title" }, ya = { class: "model-header" }, ba = { class: "model-info" }, wa = { class: "model-name" }, ka = { class: "model-size" }, _a = { class: "model-details" }, $a = { class: "detail-row" }, xa = { class: "value" }, Ca = { class: "detail-row" }, Sa = { class: "value" }, Ea = { class: "model-actions" }, Ia = ["onClick"], za = {
  key: 3,
  class: "model-group"
}, La = { class: "group-title" }, Ma = { class: "model-header" }, Ba = { class: "model-info" }, Ta = { class: "model-name" }, Oa = { class: "model-details" }, Da = { class: "detail-row" }, Na = { class: "value" }, Ra = { class: "model-actions" }, Wa = ["onClick"], Aa = ["onClick"], Ua = {
  key: 4,
  class: "empty-state"
}, Va = { key: 0 }, Pa = { key: 1 }, Ha = {
  key: 5,
  class: "summary"
}, Ga = /* @__PURE__ */ W({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: i }) {
    const a = i, { getEnvironmentModels: l, getStatus: h } = me(), u = x([]), f = x([]), k = x("production"), b = x(!1), C = x(null), S = x(""), v = x(!1), D = x(null), U = x(null);
    function Q() {
      v.value = !v.value;
    }
    function G() {
      v.value = !1, a("navigate", "model-index");
    }
    V(
      () => u.value.filter((p) => p.type === "checkpoints" || p.category === "checkpoints")
    ), V(
      () => u.value.filter((p) => p.type === "loras" || p.category === "loras")
    ), V(
      () => u.value.filter(
        (p) => p.type !== "checkpoints" && p.category !== "checkpoints" && p.type !== "loras" && p.category !== "loras"
      )
    );
    const M = V(
      () => u.value.reduce((p, y) => p + (y.size_mb || 0), 0)
    ), T = V(() => {
      if (!S.value.trim()) return u.value;
      const p = S.value.toLowerCase();
      return u.value.filter((y) => y.filename.toLowerCase().includes(p));
    }), q = V(() => {
      if (!S.value.trim()) return f.value;
      const p = S.value.toLowerCase();
      return f.value.filter((y) => y.filename.toLowerCase().includes(p));
    }), J = V(
      () => T.value.filter((p) => p.type === "checkpoints" || p.category === "checkpoints")
    ), B = V(
      () => T.value.filter((p) => p.type === "loras" || p.category === "loras")
    ), z = V(
      () => T.value.filter(
        (p) => p.type !== "checkpoints" && p.category !== "checkpoints" && p.type !== "loras" && p.category !== "loras"
      )
    );
    function g(p) {
      return p >= 1024 ? `${(p / 1024).toFixed(1)} GB` : `${p} MB`;
    }
    function m(p) {
      a("navigate", "model-index");
    }
    function d(p) {
      a("navigate", "model-index");
    }
    function H(p) {
      alert(`Download functionality not yet implemented for ${p}`);
    }
    async function se() {
      b.value = !0, C.value = null;
      try {
        const [p, y] = await Promise.all([
          l(),
          h()
        ]);
        u.value = p, f.value = y.missing_models || [], k.value = y.environment || "production";
      } catch (p) {
        C.value = p instanceof Error ? p.message : "Failed to load models";
      } finally {
        b.value = !1;
      }
    }
    return de(se), (p, y) => (o(), s("div", As, [
      e("div", Us, [
        y[5] || (y[5] = e("h3", { class: "view-title" }, "MODELS IN THIS ENVIRONMENT", -1)),
        e("button", {
          ref_key: "infoButton",
          ref: D,
          class: "info-icon",
          onClick: Q,
          title: "About this section"
        }, [...y[4] || (y[4] = [
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
      v.value ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: y[2] || (y[2] = ($) => v.value = !1)
      }, [
        e("div", {
          ref_key: "popover",
          ref: U,
          class: "popover",
          onClick: y[1] || (y[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", Vs, [
            y[6] || (y[6] = e("h4", { class: "popover-title" }, "About Environment Models", -1)),
            e("button", {
              class: "popover-close",
              onClick: y[0] || (y[0] = ($) => v.value = !1)
            }, "✕")
          ]),
          e("div", Ps, [
            e("p", Hs, [
              y[7] || (y[7] = _(" These are models currently used by workflows in ", -1)),
              e("strong", null, '"' + n(k.value) + '"', 1),
              y[8] || (y[8] = _(". All models are symlinked from the workspace model index. ", -1))
            ]),
            e("button", {
              class: "popover-link-btn",
              onClick: G
            }, " View Workspace Model Index ↗ ")
          ])
        ], 512)
      ])) : c("", !0),
      e("div", Gs, [
        Le(e("input", {
          "onUpdate:modelValue": y[3] || (y[3] = ($) => S.value = $),
          type: "text",
          placeholder: "🔍 Search models used in this environment...",
          class: "search-input"
        }, null, 512), [
          [Me, S.value]
        ])
      ]),
      b.value ? (o(), s("div", Ks, "Loading models...")) : C.value ? (o(), s("div", Fs, n(C.value), 1)) : (o(), s("div", js, [
        J.value.length ? (o(), s("section", qs, [
          e("h4", Ys, "CHECKPOINTS (" + n(J.value.length) + ")", 1),
          (o(!0), s(P, null, K(J.value, ($) => (o(), s("div", {
            key: $.hash,
            class: "model-card"
          }, [
            e("div", Zs, [
              y[9] || (y[9] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", Xs, [
                e("div", Js, n($.filename), 1),
                e("div", Qs, n(g($.size_mb)), 1)
              ])
            ]),
            e("div", ea, [
              e("div", ta, [
                y[10] || (y[10] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", oa, n($.used_by.join(", ")), 1)
              ]),
              y[11] || (y[11] = e("div", { class: "detail-row" }, [
                e("span", { class: "label" }, "Source:"),
                e("span", { class: "value" }, "Workspace index")
              ], -1))
            ]),
            e("div", sa, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => m($.hash)
              }, " View in Workspace Index ↗ ", 8, aa)
            ])
          ]))), 128))
        ])) : c("", !0),
        B.value.length ? (o(), s("section", na, [
          e("h4", la, "LORAS (" + n(B.value.length) + ")", 1),
          (o(!0), s(P, null, K(B.value, ($) => (o(), s("div", {
            key: $.hash,
            class: "model-card"
          }, [
            e("div", ra, [
              y[12] || (y[12] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", ia, [
                e("div", ca, n($.filename), 1),
                e("div", da, n(g($.size_mb)), 1)
              ])
            ]),
            e("div", ua, [
              e("div", ma, [
                y[13] || (y[13] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", ga, n($.used_by.join(", ")), 1)
              ]),
              y[14] || (y[14] = e("div", { class: "detail-row" }, [
                e("span", { class: "label" }, "Source:"),
                e("span", { class: "value" }, "Workspace index")
              ], -1))
            ]),
            e("div", va, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => m($.hash)
              }, " View in Workspace Index ↗ ", 8, fa)
            ])
          ]))), 128))
        ])) : c("", !0),
        z.value.length ? (o(), s("section", ha, [
          e("h4", pa, "OTHER (" + n(z.value.length) + ")", 1),
          (o(!0), s(P, null, K(z.value, ($) => (o(), s("div", {
            key: $.hash,
            class: "model-card"
          }, [
            e("div", ya, [
              y[15] || (y[15] = e("span", { class: "model-icon" }, "📦", -1)),
              e("div", ba, [
                e("div", wa, n($.filename), 1),
                e("div", ka, n(g($.size_mb)), 1)
              ])
            ]),
            e("div", _a, [
              e("div", $a, [
                y[16] || (y[16] = e("span", { class: "label" }, "Type:", -1)),
                e("span", xa, n($.type), 1)
              ]),
              e("div", Ca, [
                y[17] || (y[17] = e("span", { class: "label" }, "Used by:", -1)),
                e("span", Sa, n($.used_by.join(", ")), 1)
              ])
            ]),
            e("div", Ea, [
              e("button", {
                class: "action-btn secondary",
                onClick: (ee) => m($.hash)
              }, " View in Workspace Index ↗ ", 8, Ia)
            ])
          ]))), 128))
        ])) : c("", !0),
        q.value.length ? (o(), s("section", za, [
          e("h4", La, "MISSING (" + n(q.value.length) + ")", 1),
          (o(!0), s(P, null, K(q.value, ($) => {
            var ee;
            return o(), s("div", {
              key: $.filename,
              class: "model-card missing"
            }, [
              e("div", Ma, [
                y[19] || (y[19] = e("span", { class: "model-icon" }, "⚠", -1)),
                e("div", Ba, [
                  e("div", Ta, n($.filename), 1),
                  y[18] || (y[18] = e("div", { class: "model-status error" }, "Not found in workspace index", -1))
                ])
              ]),
              e("div", Oa, [
                e("div", Da, [
                  y[20] || (y[20] = e("span", { class: "label" }, "Required by:", -1)),
                  e("span", Na, n(((ee = $.workflow_names) == null ? void 0 : ee.join(", ")) || "Unknown"), 1)
                ])
              ]),
              e("div", Ra, [
                e("button", {
                  class: "action-btn",
                  onClick: (I) => H($.filename)
                }, " Download ", 8, Wa),
                e("button", {
                  class: "action-btn secondary",
                  onClick: (I) => d($.filename)
                }, " Search Workspace Index ", 8, Aa)
              ])
            ]);
          }), 128))
        ])) : c("", !0),
        T.value.length ? c("", !0) : (o(), s("div", Ua, [
          S.value ? (o(), s("p", Va, 'No models match "' + n(S.value) + '"', 1)) : (o(), s("p", Pa, "No models in this environment."))
        ])),
        u.value.length ? (o(), s("div", Ha, " Total: " + n(u.value.length) + " models • " + n(g(M.value)) + " (symlinked from workspace) ", 1)) : c("", !0)
      ]))
    ]));
  }
}), Ka = /* @__PURE__ */ A(Ga, [["__scopeId", "data-v-1a582577"]]), Fa = { class: "panel-layout" }, ja = {
  key: 0,
  class: "panel-layout-header"
}, qa = {
  key: 1,
  class: "panel-layout-search"
}, Ya = { class: "panel-layout-content" }, Za = {
  key: 2,
  class: "panel-layout-footer"
}, Xa = /* @__PURE__ */ W({
  __name: "PanelLayout",
  setup(t) {
    return (i, a) => (o(), s("div", Fa, [
      i.$slots.header ? (o(), s("div", ja, [
        j(i.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      i.$slots.search ? (o(), s("div", qa, [
        j(i.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", Ya, [
        j(i.$slots, "content", {}, void 0, !0)
      ]),
      i.$slots.footer ? (o(), s("div", Za, [
        j(i.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Ja = /* @__PURE__ */ A(Xa, [["__scopeId", "data-v-21565df9"]]), Qa = {
  key: 0,
  class: "panel-title-prefix"
}, en = {
  key: 1,
  class: "panel-title-prefix-theme"
}, tn = /* @__PURE__ */ W({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (i, a) => (o(), L(Be(`h${t.level}`), {
      class: R(["panel-title", t.variant])
    }, {
      default: w(() => [
        t.showPrefix ? (o(), s("span", Qa, n(t.prefix), 1)) : (o(), s("span", en)),
        j(i.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), on = /* @__PURE__ */ A(tn, [["__scopeId", "data-v-c3875efc"]]), sn = ["title"], an = ["width", "height"], nn = /* @__PURE__ */ W({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (i, a) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: a[0] || (a[0] = (l) => i.$emit("click"))
    }, [
      (o(), s("svg", {
        width: t.size,
        height: t.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...a[1] || (a[1] = [
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
      ])], 8, an))
    ], 8, sn));
  }
}), ln = /* @__PURE__ */ A(nn, [["__scopeId", "data-v-6fc7f16d"]]), rn = { class: "header-left" }, cn = {
  key: 0,
  class: "header-actions"
}, dn = /* @__PURE__ */ W({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (i, a) => (o(), s("div", {
      class: R(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", rn, [
        O(on, { "show-prefix": t.showPrefix }, {
          default: w(() => [
            _(n(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), L(ln, {
          key: 0,
          onClick: a[0] || (a[0] = (l) => i.$emit("info-click"))
        })) : c("", !0)
      ]),
      i.$slots.actions ? (o(), s("div", cn, [
        j(i.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), un = /* @__PURE__ */ A(dn, [["__scopeId", "data-v-55a62cd6"]]), mn = { class: "search-input-wrapper" }, gn = ["value", "placeholder"], vn = /* @__PURE__ */ W({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: i }) {
    const a = t, l = i, h = x(null);
    let u;
    function f(b) {
      const C = b.target.value;
      a.debounce > 0 ? (clearTimeout(u), u = window.setTimeout(() => {
        l("update:modelValue", C);
      }, a.debounce)) : l("update:modelValue", C);
    }
    function k() {
      var b;
      l("update:modelValue", ""), l("clear"), (b = h.value) == null || b.focus();
    }
    return de(() => {
      a.autoFocus && h.value && h.value.focus();
    }), (b, C) => (o(), s("div", mn, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: be(k, ["escape"])
      }, null, 40, gn),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: k,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), fn = /* @__PURE__ */ A(vn, [["__scopeId", "data-v-266f857a"]]), hn = { class: "search-bar" }, pn = /* @__PURE__ */ W({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (i, a) => (o(), s("div", hn, [
      O(fn, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (l) => i.$emit("update:modelValue", l)),
        onClear: a[1] || (a[1] = (l) => i.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), yn = /* @__PURE__ */ A(pn, [["__scopeId", "data-v-3d51bbfd"]]), bn = {
  key: 0,
  class: "section-title-count"
}, wn = {
  key: 1,
  class: "section-title-icon"
}, kn = /* @__PURE__ */ W({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (i, a) => (o(), L(Be(`h${t.level}`), {
      class: R(["section-title", { clickable: t.clickable }]),
      onClick: a[0] || (a[0] = (l) => t.clickable && i.$emit("click"))
    }, {
      default: w(() => [
        j(i.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", bn, "(" + n(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), s("span", wn, n(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _n = /* @__PURE__ */ A(kn, [["__scopeId", "data-v-559361eb"]]), $n = { class: "section-group" }, xn = {
  key: 0,
  class: "section-content"
}, Cn = /* @__PURE__ */ W({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: i }) {
    const a = t, l = i, h = x(a.initiallyExpanded);
    function u() {
      a.collapsible && (h.value = !h.value, l("toggle", h.value));
    }
    return (f, k) => (o(), s("section", $n, [
      O(_n, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: u
      }, {
        default: w(() => [
          _(n(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (o(), s("div", xn, [
        j(f.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Se = /* @__PURE__ */ A(Cn, [["__scopeId", "data-v-c48e33ed"]]), Sn = { class: "item-header" }, En = {
  key: 0,
  class: "item-icon"
}, In = { class: "item-info" }, zn = {
  key: 0,
  class: "item-title"
}, Ln = {
  key: 1,
  class: "item-subtitle"
}, Mn = {
  key: 0,
  class: "item-details"
}, Bn = {
  key: 1,
  class: "item-actions"
}, Tn = /* @__PURE__ */ W({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: i }) {
    const a = t, l = V(() => a.status ? `status-${a.status}` : "");
    return (h, u) => (o(), s("div", {
      class: R(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: u[0] || (u[0] = (f) => t.clickable && h.$emit("click"))
    }, [
      e("div", Sn, [
        h.$slots.icon ? (o(), s("span", En, [
          j(h.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", In, [
          h.$slots.title ? (o(), s("div", zn, [
            j(h.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          h.$slots.subtitle ? (o(), s("div", Ln, [
            j(h.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      h.$slots.details ? (o(), s("div", Mn, [
        j(h.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      h.$slots.actions ? (o(), s("div", Bn, [
        j(h.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ee = /* @__PURE__ */ A(Tn, [["__scopeId", "data-v-cc435e0e"]]), On = /* @__PURE__ */ W({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (i, a) => (o(), s("span", {
      class: R(["detail-label"]),
      style: We({ minWidth: t.minWidth })
    }, [
      j(i.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Dn = /* @__PURE__ */ A(On, [["__scopeId", "data-v-75e9eeb8"]]), Nn = /* @__PURE__ */ W({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (i, a) => (o(), s("span", {
      class: R(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      j(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Rn = /* @__PURE__ */ A(Nn, [["__scopeId", "data-v-2f186e4c"]]), Wn = { class: "detail-row" }, An = /* @__PURE__ */ W({
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
    return (i, a) => (o(), s("div", Wn, [
      O(Dn, { "min-width": t.labelMinWidth }, {
        default: w(() => [
          _(n(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), L(Rn, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: w(() => [
          _(n(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : j(i.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), re = /* @__PURE__ */ A(An, [["__scopeId", "data-v-ef15664a"]]), Un = ["type", "disabled"], Vn = {
  key: 0,
  class: "spinner"
}, Pn = /* @__PURE__ */ W({
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
    return (i, a) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: R(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: a[0] || (a[0] = (l) => i.$emit("click", l))
    }, [
      t.loading ? (o(), s("span", Vn)) : c("", !0),
      t.loading ? c("", !0) : j(i.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Un));
  }
}), ae = /* @__PURE__ */ A(Pn, [["__scopeId", "data-v-772abe47"]]), Hn = /* @__PURE__ */ W({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (i, a) => (o(), s("div", {
      class: R(["summary-bar", t.variant])
    }, [
      j(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Gn = /* @__PURE__ */ A(Hn, [["__scopeId", "data-v-ccb7816e"]]), Kn = { class: "empty-state" }, Fn = {
  key: 0,
  class: "empty-icon"
}, jn = { class: "empty-message" }, qn = /* @__PURE__ */ W({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (i, a) => (o(), s("div", Kn, [
      t.icon ? (o(), s("div", Fn, n(t.icon), 1)) : c("", !0),
      e("p", jn, n(t.message), 1),
      t.actionLabel ? (o(), L(ae, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (l) => i.$emit("action"))
      }, {
        default: w(() => [
          _(n(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Yn = /* @__PURE__ */ A(qn, [["__scopeId", "data-v-4466284f"]]), Zn = { class: "loading-state" }, Xn = { class: "loading-message" }, Jn = /* @__PURE__ */ W({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (i, a) => (o(), s("div", Zn, [
      a[0] || (a[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Xn, n(t.message), 1)
    ]));
  }
}), Qn = /* @__PURE__ */ A(Jn, [["__scopeId", "data-v-ad8436c9"]]), el = { class: "error-state" }, tl = { class: "error-message" }, ol = /* @__PURE__ */ W({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (i, a) => (o(), s("div", el, [
      a[2] || (a[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", tl, n(t.message), 1),
      t.retry ? (o(), L(ae, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (l) => i.$emit("retry"))
      }, {
        default: w(() => [...a[1] || (a[1] = [
          _(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), sl = /* @__PURE__ */ A(ol, [["__scopeId", "data-v-5397be48"]]), al = { class: "popover-header" }, nl = { class: "popover-title" }, ll = { class: "popover-content" }, rl = {
  key: 0,
  class: "popover-actions"
}, il = /* @__PURE__ */ W({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (i, a) => (o(), L(Re, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (l) => i.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: We({ maxWidth: t.maxWidth }),
          onClick: a[1] || (a[1] = fe(() => {
          }, ["stop"]))
        }, [
          e("div", al, [
            e("h4", nl, n(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (l) => i.$emit("close"))
            }, "✕")
          ]),
          e("div", ll, [
            j(i.$slots, "content", {}, void 0, !0)
          ]),
          i.$slots.actions ? (o(), s("div", rl, [
            j(i.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), cl = /* @__PURE__ */ A(il, [["__scopeId", "data-v-057df510"]]), dl = /* @__PURE__ */ W({
  __name: "ModelIndexSection",
  setup(t) {
    const { getWorkspaceModels: i } = me(), a = x([]), l = x(!1), h = x(null), u = x(""), f = x(!1), k = V(
      () => a.value.reduce((g, m) => g + (m.size_mb || m.size || 0), 0)
    ), b = V(() => {
      const g = /* @__PURE__ */ new Set();
      return a.value.forEach((m) => {
        m.used_in_environments && m.used_in_environments.length > 0 && m.used_in_environments.forEach((d) => g.add(d.env_name));
      }), g.size;
    }), C = V(() => {
      if (!u.value.trim()) return a.value;
      const g = u.value.toLowerCase();
      return a.value.filter((m) => {
        const d = m, H = m.sha256 || d.sha256_hash || "";
        return m.filename.toLowerCase().includes(g) || H.toLowerCase().includes(g);
      });
    }), S = V(
      () => C.value.filter((g) => g.type === "checkpoints")
    ), v = V(
      () => C.value.filter((g) => g.type === "loras")
    ), D = V(
      () => C.value.filter((g) => g.type !== "checkpoints" && g.type !== "loras")
    );
    function U(g) {
      return g ? g >= 1024 ? `${(g / 1024).toFixed(1)} GB` : `${g.toFixed(0)} MB` : "Unknown";
    }
    function Q(g) {
      const m = g, d = g.used_in_workflows || m.used_by || [];
      return !d || d.length === 0 ? "Not used" : `${d.length} workflow(s)`;
    }
    function G(g) {
      navigator.clipboard.writeText(g), alert("Hash copied to clipboard");
    }
    function M(g) {
      prompt("Enter model source URL:", g.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function T(g) {
      const m = g, d = g.used_in_workflows || m.used_by || [], H = d && d.length > 0 ? `

⚠ WARNING: This model is used by ${d.length} workflow(s):
${d.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${g.filename}?${H}

This will free ${U(m.size_mb || g.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function q() {
      alert("Scan for models not yet implemented");
    }
    function J() {
      alert("Add directory not yet implemented");
    }
    function B() {
      alert("Download new model not yet implemented");
    }
    async function z() {
      l.value = !0, h.value = null;
      try {
        a.value = await i(), console.log("Loaded models:", a.value), console.log("Filtered checkpoints:", S.value), console.log("Filtered loras:", v.value), console.log("Filtered other:", D.value);
      } catch (g) {
        h.value = g instanceof Error ? g.message : "Failed to load workspace models";
      } finally {
        l.value = !1;
      }
    }
    return de(z), (g, m) => (o(), s(P, null, [
      O(Ja, null, {
        header: w(() => [
          O(un, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: m[0] || (m[0] = (d) => f.value = !0)
          }, {
            actions: w(() => [
              O(ae, {
                variant: "primary",
                size: "sm",
                onClick: q
              }, {
                default: w(() => [...m[3] || (m[3] = [
                  _(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              O(ae, {
                variant: "primary",
                size: "sm",
                onClick: J
              }, {
                default: w(() => [...m[4] || (m[4] = [
                  _(" Add Directory ", -1)
                ])]),
                _: 1
              }),
              O(ae, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: w(() => [...m[5] || (m[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  _(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: w(() => [
          O(yn, {
            modelValue: u.value,
            "onUpdate:modelValue": m[1] || (m[1] = (d) => u.value = d),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: w(() => [
          l.value ? (o(), L(Qn, {
            key: 0,
            message: "Loading workspace models..."
          })) : h.value ? (o(), L(sl, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(P, { key: 2 }, [
            a.value.length ? (o(), L(Gn, {
              key: 0,
              variant: "compact"
            }, {
              default: w(() => [
                _(" Total: " + n(a.value.length) + " models • " + n(U(k.value)) + " • Used in " + n(b.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            S.value.length ? (o(), L(Se, {
              key: 1,
              title: "CHECKPOINTS",
              count: S.value.length
            }, {
              default: w(() => [
                (o(!0), s(P, null, K(S.value, (d) => (o(), L(Ee, {
                  key: d.sha256 || d.filename,
                  status: "synced"
                }, {
                  icon: w(() => [...m[6] || (m[6] = [
                    _("📦", -1)
                  ])]),
                  title: w(() => [
                    _(n(d.filename), 1)
                  ]),
                  subtitle: w(() => [
                    _(n(U(d.size_mb || d.size)), 1)
                  ]),
                  details: w(() => {
                    var H, se;
                    return [
                      d.sha256 || d.sha256_hash ? (o(), L(re, {
                        key: 0,
                        label: "SHA256:",
                        value: (d.sha256 || d.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      O(re, {
                        label: "Used in:",
                        value: Q(d)
                      }, null, 8, ["value"]),
                      d.source_url || (H = d.sources) != null && H[0] ? (o(), L(re, {
                        key: 1,
                        label: "Source URL:",
                        value: d.source_url || ((se = d.sources) == null ? void 0 : se[0])
                      }, null, 8, ["value"])) : (o(), L(re, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: w(() => [...m[7] || (m[7] = [
                          _("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: w(() => [
                    O(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => M(d)
                    }, {
                      default: w(() => [...m[8] || (m[8] = [
                        _(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d.sha256 || d.sha256_hash ? (o(), L(ae, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => G(d.sha256 || d.sha256_hash)
                    }, {
                      default: w(() => [...m[9] || (m[9] = [
                        _(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    O(ae, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (H) => T(d)
                    }, {
                      default: w(() => [...m[10] || (m[10] = [
                        _(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            v.value.length ? (o(), L(Se, {
              key: 2,
              title: "LORAS",
              count: v.value.length
            }, {
              default: w(() => [
                (o(!0), s(P, null, K(v.value, (d) => (o(), L(Ee, {
                  key: d.sha256 || d.filename,
                  status: "synced"
                }, {
                  icon: w(() => [...m[11] || (m[11] = [
                    _("📦", -1)
                  ])]),
                  title: w(() => [
                    _(n(d.filename), 1)
                  ]),
                  subtitle: w(() => [
                    _(n(U(d.size_mb || d.size)), 1)
                  ]),
                  details: w(() => {
                    var H, se;
                    return [
                      d.sha256 || d.sha256_hash ? (o(), L(re, {
                        key: 0,
                        label: "SHA256:",
                        value: (d.sha256 || d.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      O(re, {
                        label: "Used in:",
                        value: Q(d)
                      }, null, 8, ["value"]),
                      d.source_url || (H = d.sources) != null && H[0] ? (o(), L(re, {
                        key: 1,
                        label: "Source URL:",
                        value: d.source_url || ((se = d.sources) == null ? void 0 : se[0])
                      }, null, 8, ["value"])) : (o(), L(re, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: w(() => [...m[12] || (m[12] = [
                          _("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: w(() => [
                    O(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => M(d)
                    }, {
                      default: w(() => [...m[13] || (m[13] = [
                        _(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d.sha256 || d.sha256_hash ? (o(), L(ae, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => G(d.sha256 || d.sha256_hash)
                    }, {
                      default: w(() => [...m[14] || (m[14] = [
                        _(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    O(ae, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (H) => T(d)
                    }, {
                      default: w(() => [...m[15] || (m[15] = [
                        _(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            D.value.length ? (o(), L(Se, {
              key: 3,
              title: "OTHER",
              count: D.value.length
            }, {
              default: w(() => [
                (o(!0), s(P, null, K(D.value, (d) => (o(), L(Ee, {
                  key: d.sha256 || d.filename,
                  status: "synced"
                }, {
                  icon: w(() => [...m[16] || (m[16] = [
                    _("📦", -1)
                  ])]),
                  title: w(() => [
                    _(n(d.filename), 1)
                  ]),
                  subtitle: w(() => [
                    _(n(U(d.size_mb || d.size)), 1)
                  ]),
                  details: w(() => [
                    O(re, {
                      label: "Type:",
                      value: d.type
                    }, null, 8, ["value"]),
                    d.sha256 || d.sha256_hash ? (o(), L(re, {
                      key: 0,
                      label: "SHA256:",
                      value: (d.sha256 || d.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    O(re, {
                      label: "Used in:",
                      value: Q(d)
                    }, null, 8, ["value"])
                  ]),
                  actions: w(() => [
                    O(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => M(d)
                    }, {
                      default: w(() => [...m[17] || (m[17] = [
                        _(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d.sha256 || d.sha256_hash ? (o(), L(ae, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => G(d.sha256 || d.sha256_hash)
                    }, {
                      default: w(() => [...m[18] || (m[18] = [
                        _(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    O(ae, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (H) => T(d)
                    }, {
                      default: w(() => [...m[19] || (m[19] = [
                        _(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            C.value.length ? c("", !0) : (o(), L(Yn, {
              key: 4,
              icon: "📭",
              message: u.value ? `No models match '${u.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      O(cl, {
        show: f.value,
        title: "About Workspace Model Index",
        onClose: m[2] || (m[2] = (d) => f.value = !1)
      }, {
        content: w(() => [...m[20] || (m[20] = [
          e("p", null, [
            _(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            _(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ul = /* @__PURE__ */ A(dl, [["__scopeId", "data-v-15939d24"]]), ml = { class: "header-info" }, gl = { class: "commit-hash" }, vl = {
  key: 0,
  class: "commit-refs"
}, fl = { class: "commit-message" }, hl = { class: "commit-date" }, pl = {
  key: 0,
  class: "loading"
}, yl = {
  key: 1,
  class: "changes-section"
}, bl = { class: "stats-row" }, wl = { class: "stat" }, kl = { class: "stat insertions" }, _l = { class: "stat deletions" }, $l = {
  key: 0,
  class: "change-group"
}, xl = {
  key: 1,
  class: "change-group"
}, Cl = {
  key: 0,
  class: "version"
}, Sl = {
  key: 2,
  class: "change-group"
}, El = { class: "change-item" }, Il = /* @__PURE__ */ W({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const i = t, { getCommitDetail: a } = me(), l = x(null), h = x(!0), u = V(() => {
      if (!l.value) return !1;
      const k = l.value.changes.workflows;
      return k.added.length > 0 || k.modified.length > 0 || k.deleted.length > 0;
    }), f = V(() => {
      if (!l.value) return !1;
      const k = l.value.changes.nodes;
      return k.added.length > 0 || k.removed.length > 0;
    });
    return de(async () => {
      try {
        l.value = await a(i.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (k, b) => (o(), L(xe, {
      size: "md",
      "show-close-button": !1,
      onClose: b[3] || (b[3] = (C) => k.$emit("close"))
    }, {
      header: w(() => {
        var C, S, v, D;
        return [
          e("div", ml, [
            b[4] || (b[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", gl, n(((C = l.value) == null ? void 0 : C.short_hash) || t.commit.short_hash || ((S = t.commit.hash) == null ? void 0 : S.slice(0, 7))), 1),
            (D = (v = l.value) == null ? void 0 : v.refs) != null && D.length ? (o(), s("span", vl, [
              (o(!0), s(P, null, K(l.value.refs, (U) => (o(), s("span", {
                key: U,
                class: "ref-badge"
              }, n(U), 1))), 128))
            ])) : c("", !0)
          ]),
          O(ne, {
            variant: "ghost",
            size: "sm",
            onClick: b[0] || (b[0] = (U) => k.$emit("close"))
          }, {
            default: w(() => [...b[5] || (b[5] = [
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
      body: w(() => {
        var C, S;
        return [
          e("div", fl, n(((C = l.value) == null ? void 0 : C.message) || t.commit.message), 1),
          e("div", hl, n(((S = l.value) == null ? void 0 : S.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (o(), s("div", pl, "Loading details...")) : l.value ? (o(), s("div", yl, [
            e("div", bl, [
              e("span", wl, n(l.value.stats.files_changed) + " files", 1),
              e("span", kl, "+" + n(l.value.stats.insertions), 1),
              e("span", _l, "-" + n(l.value.stats.deletions), 1)
            ]),
            u.value ? (o(), s("div", $l, [
              O(ue, { variant: "section" }, {
                default: w(() => [...b[6] || (b[6] = [
                  _("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(P, null, K(l.value.changes.workflows.added, (v) => (o(), s("div", {
                key: "add-" + v,
                class: "change-item added"
              }, [
                b[7] || (b[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(v), 1)
              ]))), 128)),
              (o(!0), s(P, null, K(l.value.changes.workflows.modified, (v) => (o(), s("div", {
                key: "mod-" + v,
                class: "change-item modified"
              }, [
                b[8] || (b[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, n(v), 1)
              ]))), 128)),
              (o(!0), s(P, null, K(l.value.changes.workflows.deleted, (v) => (o(), s("div", {
                key: "del-" + v,
                class: "change-item deleted"
              }, [
                b[9] || (b[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(v), 1)
              ]))), 128))
            ])) : c("", !0),
            f.value ? (o(), s("div", xl, [
              O(ue, { variant: "section" }, {
                default: w(() => [...b[10] || (b[10] = [
                  _("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(P, null, K(l.value.changes.nodes.added, (v) => (o(), s("div", {
                key: "add-" + v.name,
                class: "change-item added"
              }, [
                b[11] || (b[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, n(v.name), 1),
                v.version ? (o(), s("span", Cl, "(" + n(v.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), s(P, null, K(l.value.changes.nodes.removed, (v) => (o(), s("div", {
                key: "rem-" + v.name,
                class: "change-item deleted"
              }, [
                b[12] || (b[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, n(v.name), 1)
              ]))), 128))
            ])) : c("", !0),
            l.value.changes.models.resolved > 0 ? (o(), s("div", Sl, [
              O(ue, { variant: "section" }, {
                default: w(() => [...b[13] || (b[13] = [
                  _("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", El, [
                b[14] || (b[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, n(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: w(() => [
        O(ne, {
          variant: "secondary",
          onClick: b[1] || (b[1] = (C) => k.$emit("createBranch", t.commit))
        }, {
          default: w(() => [...b[15] || (b[15] = [
            _(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        O(ne, {
          variant: "primary",
          onClick: b[2] || (b[2] = (C) => k.$emit("checkout", t.commit))
        }, {
          default: w(() => [...b[16] || (b[16] = [
            _(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), zl = /* @__PURE__ */ A(Il, [["__scopeId", "data-v-d256ff6d"]]), Ll = { class: "dialog-message" }, Ml = {
  key: 0,
  class: "dialog-details"
}, Bl = {
  key: 1,
  class: "dialog-warning"
}, Tl = /* @__PURE__ */ W({
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
    return (i, a) => (o(), L(xe, {
      title: t.title,
      size: "sm",
      onClose: a[3] || (a[3] = (l) => i.$emit("cancel"))
    }, {
      body: w(() => [
        e("p", Ll, n(t.message), 1),
        t.details && t.details.length ? (o(), s("div", Ml, [
          (o(!0), s(P, null, K(t.details, (l, h) => (o(), s("div", {
            key: h,
            class: "detail-item"
          }, " • " + n(l), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), s("p", Bl, [
          a[4] || (a[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          _(" " + n(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: w(() => [
        O(ne, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (l) => i.$emit("cancel"))
        }, {
          default: w(() => [
            _(n(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), L(ne, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (l) => i.$emit("secondary"))
        }, {
          default: w(() => [
            _(n(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        O(ne, {
          variant: t.destructive ? "danger" : "primary",
          onClick: a[2] || (a[2] = (l) => i.$emit("confirm"))
        }, {
          default: w(() => [
            _(n(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ol = /* @__PURE__ */ A(Tl, [["__scopeId", "data-v-3670b9f5"]]), Dl = { class: "comfygit-panel" }, Nl = { class: "panel-header" }, Rl = { class: "header-left" }, Wl = {
  key: 0,
  class: "header-info"
}, Al = { class: "header-actions" }, Ul = { class: "env-switcher" }, Vl = {
  key: 0,
  class: "header-info"
}, Pl = { class: "branch-name" }, Hl = { class: "panel-main" }, Gl = { class: "sidebar" }, Kl = { class: "sidebar-section" }, Fl = { class: "sidebar-section" }, jl = { class: "sidebar-section" }, ql = { class: "content-area" }, Yl = {
  key: 0,
  class: "error-message"
}, Zl = {
  key: 1,
  class: "loading"
}, Xl = {
  key: 5,
  class: "view-placeholder"
}, Jl = {
  key: 6,
  class: "view-placeholder"
}, Ql = {
  key: 7,
  class: "view-placeholder"
}, er = {
  key: 9,
  class: "view-placeholder"
}, tr = {
  key: 10,
  class: "view-placeholder"
}, or = {
  key: 11,
  class: "view-placeholder"
}, sr = {
  key: 12,
  class: "view-placeholder"
}, ar = {
  key: 13,
  class: "view-placeholder"
}, nr = { class: "dialog-content env-selector-dialog" }, lr = { class: "dialog-header" }, rr = { class: "dialog-body" }, ir = { class: "env-list" }, cr = { class: "env-info" }, dr = { class: "env-name-row" }, ur = { class: "env-indicator" }, mr = { class: "env-name" }, gr = {
  key: 0,
  class: "env-branch"
}, vr = {
  key: 1,
  class: "current-label"
}, fr = { class: "env-stats" }, hr = ["onClick"], pr = { class: "toast-container" }, yr = { class: "toast-icon" }, br = { class: "toast-message" }, wr = /* @__PURE__ */ W({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: i }) {
    const a = i, {
      getStatus: l,
      getHistory: h,
      exportEnv: u,
      getBranches: f,
      checkout: k,
      createBranch: b,
      switchBranch: C,
      getEnvironments: S
    } = me(), v = x(null), D = x([]), U = x([]), Q = x([]), G = V(() => Q.value.find((E) => E.is_current)), M = x(!1), T = x(null), q = x(null), J = x(!1), B = x("status"), z = x("this-env");
    function g(E, r) {
      B.value = E, z.value = r;
    }
    function m(E) {
      const Y = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[E];
      Y && g(Y.view, Y.section);
    }
    const d = x(null), H = x([]);
    let se = 0;
    function p(E, r = "info", Y = 3e3) {
      const oe = ++se;
      return H.value.push({ id: oe, message: E, type: r }), Y > 0 && setTimeout(() => {
        H.value = H.value.filter((ge) => ge.id !== oe);
      }, Y), oe;
    }
    function y(E) {
      H.value = H.value.filter((r) => r.id !== E);
    }
    function $(E) {
      switch (E) {
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
    const ee = V(() => {
      if (!v.value) return "neutral";
      const E = v.value.workflows, r = E.new.length > 0 || E.modified.length > 0 || E.deleted.length > 0 || v.value.has_changes;
      return v.value.comparison.is_synced ? r ? "warning" : "success" : "error";
    });
    V(() => v.value ? ee.value === "success" ? "All synced" : ee.value === "warning" ? "Uncommitted changes" : ee.value === "error" ? "Not synced" : "" : "");
    async function I() {
      M.value = !0, T.value = null;
      try {
        const [E, r, Y, oe] = await Promise.all([
          l(),
          h(),
          f(),
          S()
        ]);
        v.value = E, D.value = r.commits, U.value = Y.branches, Q.value = oe, a("statusUpdate", E);
      } catch (E) {
        T.value = E instanceof Error ? E.message : "Failed to load status", v.value = null, D.value = [], U.value = [];
      } finally {
        M.value = !1;
      }
    }
    function F(E) {
      q.value = E;
    }
    async function te(E) {
      var Y;
      q.value = null;
      const r = v.value && (v.value.workflows.new.length > 0 || v.value.workflows.modified.length > 0 || v.value.workflows.deleted.length > 0 || v.value.has_changes);
      d.value = {
        title: r ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: r ? "You have uncommitted changes that will be lost." : `Checkout commit ${E.short_hash || ((Y = E.hash) == null ? void 0 : Y.slice(0, 7))}?`,
        details: r ? De() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: r ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: r,
        onConfirm: async () => {
          var N;
          d.value = null;
          const oe = p(`Checking out ${E.short_hash || ((N = E.hash) == null ? void 0 : N.slice(0, 7))}...`, "info", 0), ge = await k(E.hash, r);
          y(oe), ge.status === "success" ? p("Restarting ComfyUI...", "success") : p(ge.message || "Checkout failed", "error");
        }
      };
    }
    async function we(E) {
      const r = v.value && (v.value.workflows.new.length > 0 || v.value.workflows.modified.length > 0 || v.value.workflows.deleted.length > 0 || v.value.has_changes);
      d.value = {
        title: r ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: r ? "You have uncommitted changes." : `Switch to branch "${E}"?`,
        details: r ? De() : void 0,
        warning: r ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: r ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          d.value = null;
          const Y = p(`Switching to ${E}...`, "info", 0), oe = await C(E, r);
          y(Y), oe.status === "success" ? p("Restarting ComfyUI...", "success") : p(oe.message || "Branch switch failed", "error");
        }
      };
    }
    async function ke(E) {
      const r = p(`Creating branch ${E}...`, "info", 0), Y = await b(E);
      y(r), Y.status === "success" ? (p(`Branch "${E}" created`, "success"), await I()) : p(Y.message || "Failed to create branch", "error");
    }
    async function Fe(E) {
      q.value = null;
      const r = prompt("Enter branch name:");
      if (r) {
        const Y = p(`Creating branch ${r}...`, "info", 0), oe = await b(r, E.hash);
        y(Y), oe.status === "success" ? (p(`Branch "${r}" created from ${E.short_hash}`, "success"), await I()) : p(oe.message || "Failed to create branch", "error");
      }
    }
    async function je(E) {
      J.value = !1, p("Environment switching not yet implemented", "warning");
    }
    function De() {
      if (!v.value) return [];
      const E = [], r = v.value.workflows;
      return r.new.length && E.push(`${r.new.length} new workflow(s)`), r.modified.length && E.push(`${r.modified.length} modified workflow(s)`), r.deleted.length && E.push(`${r.deleted.length} deleted workflow(s)`), E;
    }
    async function qe() {
      const E = p("Exporting environment...", "info", 0);
      try {
        const r = await u();
        y(E), r.status === "success" ? (p("Export complete", "success"), alert(`Export successful!

Saved to: ${r.path}

Models without sources: ${r.models_without_sources}`)) : (p("Export failed", "error"), alert(`Export failed: ${r.message}`));
      } catch (r) {
        y(E), p("Export error", "error"), alert(`Export error: ${r instanceof Error ? r.message : "Unknown error"}`);
      }
    }
    return de(I), (E, r) => {
      var Y, oe, ge;
      return o(), s("div", Dl, [
        e("div", Nl, [
          e("div", Rl, [
            r[20] || (r[20] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            v.value ? (o(), s("div", Wl)) : c("", !0)
          ]),
          e("div", Al, [
            e("button", {
              class: R(["icon-btn", { spinning: M.value }]),
              onClick: I,
              title: "Refresh"
            }, [...r[21] || (r[21] = [
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
              onClick: r[0] || (r[0] = (N) => a("close")),
              title: "Close"
            }, [...r[22] || (r[22] = [
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
        e("div", Ul, [
          r[24] || (r[24] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: r[1] || (r[1] = (N) => J.value = !0)
          }, [
            v.value ? (o(), s("div", Vl, [
              e("span", null, n(((Y = G.value) == null ? void 0 : Y.name) || ((oe = v.value) == null ? void 0 : oe.environment) || "Loading..."), 1),
              e("span", Pl, "(" + n(v.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            r[23] || (r[23] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Hl, [
          e("div", Gl, [
            e("div", Kl, [
              r[25] || (r[25] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "status" && z.value === "this-env" }]),
                onClick: r[2] || (r[2] = (N) => g("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "workflows" }]),
                onClick: r[3] || (r[3] = (N) => g("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "models-env" }]),
                onClick: r[4] || (r[4] = (N) => g("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "branches" }]),
                onClick: r[5] || (r[5] = (N) => g("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "history" }]),
                onClick: r[6] || (r[6] = (N) => g("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "nodes" }]),
                onClick: r[7] || (r[7] = (N) => g("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "debug-env" }]),
                onClick: r[8] || (r[8] = (N) => g("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            r[28] || (r[28] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Fl, [
              r[26] || (r[26] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "environments" }]),
                onClick: r[9] || (r[9] = (N) => g("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "model-index" }]),
                onClick: r[10] || (r[10] = (N) => g("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "settings" }]),
                onClick: r[11] || (r[11] = (N) => g("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "debug-workspace" }]),
                onClick: r[12] || (r[12] = (N) => g("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            r[29] || (r[29] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", jl, [
              r[27] || (r[27] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "export" }]),
                onClick: r[13] || (r[13] = (N) => g("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "import" }]),
                onClick: r[14] || (r[14] = (N) => g("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: R(["sidebar-item", { active: B.value === "remotes" }]),
                onClick: r[15] || (r[15] = (N) => g("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", ql, [
            T.value ? (o(), s("div", Yl, n(T.value), 1)) : !v.value && B.value === "status" ? (o(), s("div", Zl, " Loading status... ")) : (o(), s(P, { key: 2 }, [
              B.value === "status" ? (o(), L(bt, {
                key: 0,
                status: v.value
              }, null, 8, ["status"])) : B.value === "workflows" ? (o(), L(Ws, {
                key: 1,
                onRefresh: I
              })) : B.value === "models-env" ? (o(), L(Ka, {
                key: 2,
                onNavigate: m
              })) : B.value === "branches" ? (o(), L(Mt, {
                key: 3,
                branches: U.value,
                current: ((ge = v.value) == null ? void 0 : ge.branch) || null,
                onSwitch: we,
                onCreate: ke
              }, null, 8, ["branches", "current"])) : B.value === "history" ? (o(), L(Vt, {
                key: 4,
                commits: D.value,
                onSelect: F,
                onCheckout: te
              }, null, 8, ["commits"])) : B.value === "nodes" ? (o(), s("div", Xl, [...r[30] || (r[30] = [
                e("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                e("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : B.value === "debug-env" ? (o(), s("div", Jl, [...r[31] || (r[31] = [
                e("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                e("p", null, "Environment logs view coming soon...", -1)
              ])])) : B.value === "environments" ? (o(), s("div", Ql, [...r[32] || (r[32] = [
                e("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                e("p", null, "Environment management UI coming soon...", -1)
              ])])) : B.value === "model-index" ? (o(), L(ul, { key: 8 })) : B.value === "settings" ? (o(), s("div", er, [...r[33] || (r[33] = [
                e("h3", { class: "view-title" }, "SETTINGS", -1),
                e("p", null, "Settings UI coming soon...", -1)
              ])])) : B.value === "debug-workspace" ? (o(), s("div", tr, [...r[34] || (r[34] = [
                e("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                e("p", null, "Workspace logs view coming soon...", -1)
              ])])) : B.value === "export" ? (o(), s("div", or, [
                r[36] || (r[36] = e("h3", { class: "view-title" }, "EXPORT", -1)),
                e("button", {
                  class: "export-btn",
                  onClick: qe
                }, [...r[35] || (r[35] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  _(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : B.value === "import" ? (o(), s("div", sr, [...r[37] || (r[37] = [
                e("h3", { class: "view-title" }, "IMPORT", -1),
                e("p", null, "Import UI coming soon...", -1)
              ])])) : B.value === "remotes" ? (o(), s("div", ar, [...r[38] || (r[38] = [
                e("h3", { class: "view-title" }, "REMOTES", -1),
                e("p", null, "Git remotes UI coming soon...", -1)
              ])])) : c("", !0)
            ], 64))
          ])
        ]),
        q.value ? (o(), L(zl, {
          key: 0,
          commit: q.value,
          onClose: r[16] || (r[16] = (N) => q.value = null),
          onCheckout: te,
          onCreateBranch: Fe
        }, null, 8, ["commit"])) : c("", !0),
        d.value ? (o(), L(Ol, {
          key: 1,
          title: d.value.title,
          message: d.value.message,
          details: d.value.details,
          warning: d.value.warning,
          confirmLabel: d.value.confirmLabel,
          cancelLabel: d.value.cancelLabel,
          secondaryLabel: d.value.secondaryLabel,
          secondaryAction: d.value.secondaryAction,
          destructive: d.value.destructive,
          onConfirm: d.value.onConfirm,
          onCancel: r[17] || (r[17] = (N) => d.value = null),
          onSecondary: d.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        J.value ? (o(), s("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: r[19] || (r[19] = fe((N) => J.value = !1, ["self"]))
        }, [
          e("div", nr, [
            e("div", lr, [
              r[40] || (r[40] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: r[18] || (r[18] = (N) => J.value = !1)
              }, [...r[39] || (r[39] = [
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
            e("div", rr, [
              r[41] || (r[41] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", ir, [
                (o(!0), s(P, null, K(Q.value, (N) => (o(), s("div", {
                  key: N.name,
                  class: R(["env-item", { current: N.is_current }])
                }, [
                  e("div", cr, [
                    e("div", dr, [
                      e("span", ur, n(N.is_current ? "●" : "○"), 1),
                      e("span", mr, n(N.name), 1),
                      N.current_branch ? (o(), s("span", gr, "(" + n(N.current_branch) + ")", 1)) : c("", !0),
                      N.is_current ? (o(), s("span", vr, "CURRENT")) : c("", !0)
                    ]),
                    e("div", fr, n(N.workflow_count) + " workflows • " + n(N.node_count) + " nodes ", 1)
                  ]),
                  N.is_current ? c("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Jr) => je(N.name)
                  }, " SWITCH ", 8, hr))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", pr, [
          O(Xe, { name: "toast" }, {
            default: w(() => [
              (o(!0), s(P, null, K(H.value, (N) => (o(), s("div", {
                key: N.id,
                class: R(["toast", N.type])
              }, [
                e("span", yr, n($(N.type)), 1),
                e("span", br, n(N.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), kr = /* @__PURE__ */ A(wr, [["__scopeId", "data-v-315c8db1"]]), _r = { class: "base-textarea-wrapper" }, $r = ["value", "rows", "placeholder", "disabled", "maxlength"], xr = {
  key: 0,
  class: "base-textarea-count"
}, Cr = /* @__PURE__ */ W({
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
    return (i, a) => (o(), s("div", _r, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (l) => i.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          a[1] || (a[1] = be(fe((l) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = be(fe((l) => i.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, $r),
      t.showCharCount && t.maxLength ? (o(), s("div", xr, n(t.modelValue.length) + " / " + n(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Sr = /* @__PURE__ */ A(Cr, [["__scopeId", "data-v-5516e6fc"]]), Er = { class: "commit-popover" }, Ir = { class: "popover-header" }, zr = { class: "popover-body" }, Lr = {
  key: 0,
  class: "changes-summary"
}, Mr = {
  key: 0,
  class: "change-item"
}, Br = {
  key: 1,
  class: "change-item"
}, Tr = {
  key: 2,
  class: "change-item"
}, Or = {
  key: 3,
  class: "change-item"
}, Dr = {
  key: 4,
  class: "change-item"
}, Nr = {
  key: 1,
  class: "no-changes"
}, Rr = {
  key: 2,
  class: "loading"
}, Wr = { class: "message-section" }, Ar = { class: "popover-footer" }, Ur = /* @__PURE__ */ W({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(t, { emit: i }) {
    const a = t, l = i, { commit: h } = me(), u = x(""), f = x(!1), k = x(null), b = V(() => {
      if (!a.status) return !1;
      const S = a.status.workflows;
      return S.new.length > 0 || S.modified.length > 0 || S.deleted.length > 0 || a.status.has_changes;
    });
    async function C() {
      var S, v, D;
      if (!(!b.value || !u.value.trim() || f.value)) {
        f.value = !0, k.value = null;
        try {
          const U = await h(u.value.trim());
          U.status === "success" ? (k.value = {
            type: "success",
            message: `Committed: ${((S = U.summary) == null ? void 0 : S.new) || 0} new, ${((v = U.summary) == null ? void 0 : v.modified) || 0} modified, ${((D = U.summary) == null ? void 0 : D.deleted) || 0} deleted`
          }, u.value = "", setTimeout(() => l("committed"), 1e3)) : U.status === "no_changes" ? k.value = { type: "error", message: "No changes to commit" } : k.value = { type: "error", message: U.message || "Commit failed" };
        } catch (U) {
          k.value = { type: "error", message: U instanceof Error ? U.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (S, v) => (o(), s("div", Er, [
      e("div", Ir, [
        v[4] || (v[4] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: v[0] || (v[0] = (D) => l("close"))
        }, [...v[3] || (v[3] = [
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
      e("div", zr, [
        t.status && b.value ? (o(), s("div", Lr, [
          t.status.workflows.new.length ? (o(), s("div", Mr, [
            v[5] || (v[5] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", Br, [
            v[6] || (v[6] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, n(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", Tr, [
            v[7] || (v[7] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", Or, [
            v[8] || (v[8] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, n(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", Dr, [
            v[9] || (v[9] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, n(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), s("div", Nr, " No changes to commit ")) : (o(), s("div", Rr, " Loading... ")),
        e("div", Wr, [
          O(Sr, {
            modelValue: u.value,
            "onUpdate:modelValue": v[1] || (v[1] = (D) => u.value = D),
            placeholder: b.value ? "Describe your changes..." : "No changes",
            disabled: !b.value || f.value,
            rows: 3,
            onCtrlEnter: C
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        k.value ? (o(), s("div", {
          key: 3,
          class: R(["result", k.value.type])
        }, n(k.value.message), 3)) : c("", !0)
      ]),
      e("div", Ar, [
        O(ne, {
          variant: "secondary",
          onClick: v[2] || (v[2] = (D) => l("close"))
        }, {
          default: w(() => [...v[10] || (v[10] = [
            _(" Cancel ", -1)
          ])]),
          _: 1
        }),
        O(ne, {
          variant: "primary",
          disabled: !b.value || !u.value.trim() || f.value,
          loading: f.value,
          onClick: C
        }, {
          default: w(() => [
            _(n(f.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Vr = /* @__PURE__ */ A(Ur, [["__scopeId", "data-v-4f587977"]]), Pr = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .commit-item{border-radius:var(--cg-radius-md);border-left:3px solid var(--cg-color-border-subtle);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', Hr = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Gr = {
  comfy: Pr,
  phosphor: Hr
}, Te = "comfy", Pe = "comfygit-theme";
let ve = null, He = Te;
function Kr() {
  try {
    const t = localStorage.getItem(Pe);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Te;
}
function Ge(t = Te) {
  ve && ve.remove(), ve = document.createElement("style"), ve.id = "comfygit-theme-styles", ve.setAttribute("data-theme", t), ve.textContent = Gr[t], document.head.appendChild(ve), document.body.setAttribute("data-comfygit-theme", t), He = t;
  try {
    localStorage.setItem(Pe, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Fr() {
  return He;
}
function jr(t) {
  Ge(t);
}
const Oe = document.createElement("link");
Oe.rel = "stylesheet";
Oe.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Oe);
const qr = Kr();
Ge(qr);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), jr(t);
  },
  getTheme: () => {
    const t = Fr();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let ie = null, le = null, ye = null;
const he = x(null);
async function ze() {
  var t;
  if (!((t = window.app) != null && t.api)) return null;
  try {
    const i = await window.app.api.fetchApi("/v2/comfygit/status");
    i.ok && (he.value = await i.json());
  } catch {
  }
}
function Yr() {
  if (!he.value) return !1;
  const t = he.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || he.value.has_changes;
}
function Zr() {
  ie && ie.remove(), ie = document.createElement("div"), ie.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", ie.appendChild(t), ie.addEventListener("click", (l) => {
    l.target === ie && Ie();
  });
  const i = (l) => {
    l.key === "Escape" && (Ie(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Ae({
    render: () => Ue(kr, {
      onClose: Ie,
      onStatusUpdate: (l) => {
        he.value = l, $e();
      }
    })
  }).mount(t), document.body.appendChild(ie);
}
function Ie() {
  ie && (ie.remove(), ie = null);
}
function Xr(t) {
  pe(), le = document.createElement("div"), le.className = "comfygit-commit-popover-container";
  const i = t.getBoundingClientRect();
  le.style.position = "fixed", le.style.top = `${i.bottom + 8}px`, le.style.right = `${window.innerWidth - i.right}px`, le.style.zIndex = "10001";
  const a = (h) => {
    le && !le.contains(h.target) && h.target !== t && (pe(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const l = (h) => {
    h.key === "Escape" && (pe(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), ye = Ae({
    render: () => Ue(Vr, {
      status: he.value,
      onClose: pe,
      onCommitted: () => {
        pe(), ze().then($e);
      }
    })
  }), ye.mount(le), document.body.appendChild(le);
}
function pe() {
  ye && (ye.unmount(), ye = null), le && (le.remove(), le = null);
}
let ce = null;
function $e() {
  if (!ce) return;
  const t = ce.querySelector(".commit-indicator");
  t && (t.style.display = Yr() ? "block" : "none");
}
const Ke = document.createElement("style");
Ke.textContent = `
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
document.head.appendChild(Ke);
Ce.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var a, l;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const i = document.createElement("button");
    i.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", i.textContent = "ComfyGit", i.title = "ComfyGit Control Panel", i.onclick = Zr, ce = document.createElement("button"), ce.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ce.innerHTML = 'Commit <span class="commit-indicator"></span>', ce.title = "Quick Commit", ce.onclick = () => Xr(ce), t.appendChild(i), t.appendChild(ce), (l = (a = Ce.menu) == null ? void 0 : a.settingsGroup) != null && l.element && (Ce.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ze(), $e(), setInterval(async () => {
      await ze(), $e();
    }, 3e4);
  }
});
