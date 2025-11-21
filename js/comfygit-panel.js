import { app as Ee } from "../../scripts/app.js";
import { defineComponent as U, computed as H, createElementBlock as a, openBlock as o, createElementVNode as t, createCommentVNode as u, toDisplayString as c, ref as C, nextTick as at, withDirectives as De, withKeys as ke, vModelText as Ne, Fragment as W, renderList as K, normalizeClass as R, withModifiers as ye, onMounted as de, onUnmounted as st, createBlock as x, Teleport as Re, renderSlot as q, resolveDynamicComponent as Le, withCtx as d, createVNode as $, createTextVNode as b, normalizeStyle as We, TransitionGroup as nt, createApp as Ue, h as Ae } from "vue";
const lt = { class: "status-section" }, rt = { class: "status-grid" }, it = { class: "status-column" }, ct = {
  key: 0,
  class: "status-item"
}, dt = { class: "count new" }, ut = {
  key: 1,
  class: "status-item"
}, mt = { class: "count modified" }, gt = {
  key: 2,
  class: "status-item"
}, ft = { class: "count deleted" }, vt = { class: "status-item synced-item" }, ht = { class: "count synced" }, pt = { class: "status-column" }, yt = {
  key: 0,
  class: "status-item"
}, bt = { class: "count new" }, wt = {
  key: 1,
  class: "status-item"
}, kt = { class: "count deleted" }, _t = {
  key: 2,
  class: "status-item"
}, xt = {
  key: 3,
  class: "status-item ok"
}, $t = {
  key: 0,
  class: "warning-box"
}, Ct = {
  key: 1,
  class: "warning-box error"
}, St = /* @__PURE__ */ U({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(e) {
    const i = e, s = H(() => {
      const p = i.status.git_changes;
      return p.nodes_added.length > 0 || p.nodes_removed.length > 0 || p.workflow_changes || p.has_other_changes;
    }), l = H(() => {
      const p = i.status.git_changes, m = i.status.workflows;
      return (p.workflow_changes || p.has_other_changes) && m.new.length === 0 && m.modified.length === 0 && m.deleted.length === 0;
    });
    return (p, m) => (o(), a("div", lt, [
      m[18] || (m[18] = t("h3", { class: "view-title" }, "STATUS", -1)),
      t("div", rt, [
        t("div", it, [
          m[8] || (m[8] = t("h4", { class: "column-title" }, "Workflows", -1)),
          e.status.workflows.new.length ? (o(), a("div", ct, [
            m[0] || (m[0] = t("span", { class: "icon" }, "●", -1)),
            t("span", dt, c(e.status.workflows.new.length), 1),
            m[1] || (m[1] = t("span", { class: "label" }, "new", -1))
          ])) : u("", !0),
          e.status.workflows.modified.length ? (o(), a("div", ut, [
            m[2] || (m[2] = t("span", { class: "icon" }, "●", -1)),
            t("span", mt, c(e.status.workflows.modified.length), 1),
            m[3] || (m[3] = t("span", { class: "label" }, "modified", -1))
          ])) : u("", !0),
          e.status.workflows.deleted.length ? (o(), a("div", gt, [
            m[4] || (m[4] = t("span", { class: "icon" }, "●", -1)),
            t("span", ft, c(e.status.workflows.deleted.length), 1),
            m[5] || (m[5] = t("span", { class: "label" }, "deleted", -1))
          ])) : u("", !0),
          t("div", vt, [
            m[6] || (m[6] = t("span", { class: "icon synced" }, "✓", -1)),
            t("span", ht, c(e.status.workflows.synced.length), 1),
            m[7] || (m[7] = t("span", { class: "label" }, "synced", -1))
          ])
        ]),
        t("div", pt, [
          m[15] || (m[15] = t("h4", { class: "column-title" }, "Git Changes", -1)),
          e.status.git_changes.nodes_added.length ? (o(), a("div", yt, [
            m[9] || (m[9] = t("span", { class: "icon" }, "●", -1)),
            t("span", bt, c(e.status.git_changes.nodes_added.length), 1),
            m[10] || (m[10] = t("span", { class: "label" }, "node added", -1))
          ])) : u("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), a("div", wt, [
            m[11] || (m[11] = t("span", { class: "icon" }, "●", -1)),
            t("span", kt, c(e.status.git_changes.nodes_removed.length), 1),
            m[12] || (m[12] = t("span", { class: "label" }, "node removed", -1))
          ])) : u("", !0),
          l.value ? (o(), a("div", _t, [...m[13] || (m[13] = [
            t("span", { class: "icon" }, "●", -1),
            t("span", { class: "count modified" }, "●", -1),
            t("span", { class: "label" }, "other changes", -1)
          ])])) : u("", !0),
          s.value ? u("", !0) : (o(), a("div", xt, [...m[14] || (m[14] = [
            t("span", { class: "icon" }, "✓", -1),
            t("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      e.status.missing_models_count > 0 ? (o(), a("div", $t, [
        m[16] || (m[16] = t("span", { class: "warning-icon" }, "⚠", -1)),
        t("span", null, c(e.status.missing_models_count) + " missing model(s)", 1)
      ])) : u("", !0),
      e.status.comparison.is_synced ? u("", !0) : (o(), a("div", Ct, [...m[17] || (m[17] = [
        t("span", { class: "warning-icon" }, "⚠", -1),
        t("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), A = (e, i) => {
  const s = e.__vccOpts || e;
  for (const [l, p] of i)
    s[l] = p;
  return s;
}, Et = /* @__PURE__ */ A(St, [["__scopeId", "data-v-ff523fe5"]]), It = { class: "branch-section" }, zt = { class: "section-header" }, Lt = {
  key: 0,
  class: "create-branch-row"
}, Mt = ["disabled"], Bt = {
  key: 1,
  class: "empty"
}, Tt = {
  key: 2,
  class: "branch-list"
}, Ot = { class: "branch-indicator" }, Dt = { class: "branch-name" }, Nt = ["onClick"], Rt = {
  key: 1,
  class: "current-label"
}, Wt = /* @__PURE__ */ U({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: i }) {
    const s = i, l = C(!1), p = C(""), m = C(null);
    function h() {
      p.value.trim() && (s("create", p.value.trim()), k());
    }
    function k() {
      l.value = !1, p.value = "";
    }
    return at(() => {
      l.value && m.value && m.value.focus();
    }), (y, S) => (o(), a("div", It, [
      t("div", zt, [
        S[3] || (S[3] = t("h3", { class: "view-title" }, "BRANCHES", -1)),
        t("button", {
          class: "add-btn",
          onClick: S[0] || (S[0] = (I) => l.value = !0),
          title: "New Branch"
        }, [...S[2] || (S[2] = [
          t("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", {
              d: "M8 2v12M2 8h12",
              stroke: "currentColor",
              "stroke-width": "2",
              fill: "none"
            })
          ], -1)
        ])])
      ]),
      l.value ? (o(), a("div", Lt, [
        De(t("input", {
          ref_key: "createInput",
          ref: m,
          "onUpdate:modelValue": S[1] || (S[1] = (I) => p.value = I),
          class: "branch-input",
          placeholder: "Branch name...",
          onKeyup: [
            ke(h, ["enter"]),
            ke(k, ["escape"])
          ]
        }, null, 544), [
          [Ne, p.value]
        ]),
        t("button", {
          class: "action-btn create",
          onClick: h,
          disabled: !p.value.trim()
        }, " Create ", 8, Mt),
        t("button", {
          class: "action-btn cancel",
          onClick: k
        }, " Cancel ")
      ])) : u("", !0),
      e.branches.length === 0 ? (o(), a("div", Bt, " No branches found ")) : (o(), a("div", Tt, [
        (o(!0), a(W, null, K(e.branches, (I) => (o(), a("div", {
          key: I.name,
          class: R(["branch-item", { current: I.is_current }])
        }, [
          t("span", Ot, c(I.is_current ? "●" : "○"), 1),
          t("span", Dt, c(I.name), 1),
          I.is_current ? (o(), a("span", Rt, "current")) : (o(), a("button", {
            key: 0,
            class: "switch-btn",
            onClick: (v) => y.$emit("switch", I.name)
          }, " Switch ", 8, Nt))
        ], 2))), 128))
      ]))
    ]));
  }
}), Ut = /* @__PURE__ */ A(Wt, [["__scopeId", "data-v-e2bd816d"]]), At = { class: "history-section" }, Vt = {
  key: 0,
  class: "empty"
}, Pt = {
  key: 1,
  class: "commit-list"
}, Ht = ["onClick"], Gt = { class: "commit-hash" }, Ft = { class: "commit-message" }, Kt = { class: "commit-date" }, jt = ["onClick"], qt = /* @__PURE__ */ U({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (i, s) => (o(), a("div", At, [
      s[2] || (s[2] = t("h3", { class: "view-title" }, "HISTORY", -1)),
      e.commits.length === 0 ? (o(), a("div", Vt, " No commits yet ")) : (o(), a("div", Pt, [
        (o(!0), a(W, null, K(e.commits, (l) => {
          var p;
          return o(), a("div", {
            key: l.hash,
            class: "commit-item",
            onClick: (m) => i.$emit("select", l)
          }, [
            t("span", Gt, c(l.short_hash || ((p = l.hash) == null ? void 0 : p.slice(0, 7))), 1),
            t("span", Ft, c(l.message), 1),
            t("span", Kt, c(l.date_relative || l.relative_date), 1),
            t("div", {
              class: "commit-actions",
              onClick: s[0] || (s[0] = ye(() => {
              }, ["stop"]))
            }, [
              t("button", {
                class: "action-btn",
                onClick: (m) => i.$emit("checkout", l),
                title: "Checkout this commit"
              }, [...s[1] || (s[1] = [
                t("svg", {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                ], -1)
              ])], 8, jt)
            ])
          ], 8, Ht);
        }), 128))
      ]))
    ]));
  }
}), Yt = /* @__PURE__ */ A(qt, [["__scopeId", "data-v-97388106"]]), Oe = [
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
  ...Array(12).fill(null).map((e, i) => ({
    name: `synced-workflow-${i + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + i,
    model_count: 1 + i % 3,
    sync_state: "synced"
  }))
], Zt = {
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
], Xt = [
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
], Jt = [
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
], $e = [
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
], X = {
  // Environment Management
  getEnvironments: async () => (await J(300), [
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
  switchEnvironment: async (e) => {
    await J(500), console.log(`[MOCK] Switching to environment: ${e}`);
  },
  createEnvironment: async (e, i, s) => {
    await J(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${i}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (e) => {
    await J(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await J(400), Oe),
  getWorkflowDetails: async (e) => (await J(300), Zt[e] || {
    name: e,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (e) => (await J(800), {
    workflow_name: e,
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
        workflow: e,
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
        workflow: e,
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
        workflow: e,
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
  installWorkflowDeps: async (e, i, s) => {
    await J(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${i}, models=${s}`);
  },
  setModelImportance: async (e, i, s) => {
    await J(200), console.log(`[MOCK] Setting ${i} importance to ${s} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await J(350), Ve),
  getWorkspaceModels: async () => (await J(400), Xt),
  updateModelSource: async (e, i) => {
    await J(300), console.log(`[MOCK] Updating source for ${e}: ${i}`);
  },
  deleteModel: async (e) => {
    await J(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await J(3e3), console.log("[MOCK] Downloading model:", e);
  },
  // Settings & Debug
  getConfig: async () => (await J(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (e) => {
    await J(300), console.log("[MOCK] Updating config:", e);
  },
  getEnvironmentLogs: async (e, i) => (await J(250), (e ? $e.filter((l) => l.level === e) : $e).slice(0, i || 100)),
  getWorkspaceLogs: async (e, i) => {
    await J(300);
    const s = [...$e, ...$e.map((p) => ({
      ...p,
      context: { ...p.context, environment: "testing" }
    }))];
    return (e ? s.filter((p) => p.level === e) : s).slice(0, i || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await J(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: Oe.filter((e) => e.status === "synced").map((e) => e.name),
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
  getCommitHistory: async (e = 10) => (await J(300), Jt.slice(0, e)),
  getBranches: async () => (await J(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  })
};
function J(e) {
  return new Promise((i) => setTimeout(i, e));
}
function me() {
  const e = C(!1), i = C(null);
  async function s(L, j) {
    var _e;
    if (!((_e = window.app) != null && _e.api))
      throw new Error("ComfyUI API not available");
    const ae = await window.app.api.fetchApi(L, j);
    if (!ae.ok) {
      const xe = await ae.json().catch(() => ({}));
      throw new Error(xe.error || xe.message || `Request failed: ${ae.status}`);
    }
    return ae.json();
  }
  async function l() {
    return X.getStatus();
  }
  async function p(L, j = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: L, allow_issues: j })
    });
  }
  async function m(L = 10, j = 0) {
    {
      const ae = await X.getCommitHistory(L);
      return {
        commits: ae,
        total: ae.length,
        offset: j
      };
    }
  }
  async function h(L) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: L })
    });
  }
  async function k() {
    return X.getBranches();
  }
  async function y(L) {
    return s(`/v2/comfygit/commit/${L}`);
  }
  async function S(L, j = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: L, force: j })
    });
  }
  async function I(L, j = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: L, start_point: j })
    });
  }
  async function v(L, j = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: L, force: j })
    });
  }
  async function D() {
    return X.getEnvironments();
  }
  async function V(L) {
    return X.switchEnvironment(L);
  }
  async function Q() {
    return null;
  }
  async function G(L, j, ae) {
    return await X.createEnvironment(L, j, ae), { status: "success" };
  }
  async function M(L) {
    return await X.deleteEnvironment(L), { status: "success" };
  }
  async function O() {
    return X.getWorkflows();
  }
  async function Y(L) {
    return X.getWorkflowDetails(L);
  }
  async function ee(L) {
    return X.resolveWorkflow(L);
  }
  async function T(L, j, ae) {
    return await X.installWorkflowDeps(L, j, ae), { status: "success" };
  }
  async function B(L, j, ae) {
    return X.setModelImportance(L, j, ae);
  }
  async function f() {
    return X.getEnvironmentModels();
  }
  async function g() {
    return X.getWorkspaceModels();
  }
  async function n(L, j) {
    return X.updateModelSource(L, j);
  }
  async function w(L) {
    return X.deleteModel(L);
  }
  async function _(L) {
    return await X.downloadModel(L), { status: "success" };
  }
  async function E() {
    return X.getConfig();
  }
  async function P(L) {
    return X.updateConfig(L);
  }
  async function F(L, j) {
    return X.getEnvironmentLogs(L, j);
  }
  async function ie(L, j) {
    return X.getWorkspaceLogs(L, j);
  }
  return {
    isLoading: e,
    error: i,
    getStatus: l,
    commit: p,
    getHistory: m,
    exportEnv: h,
    // Git Operations
    getBranches: k,
    getCommitDetail: y,
    checkout: S,
    createBranch: I,
    switchBranch: v,
    // Environment Management
    getEnvironments: D,
    switchEnvironment: V,
    getSwitchProgress: Q,
    createEnvironment: G,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: O,
    getWorkflowDetails: Y,
    resolveWorkflow: ee,
    installWorkflowDeps: T,
    setModelImportance: B,
    // Model Management
    getEnvironmentModels: f,
    getWorkspaceModels: g,
    updateModelSource: n,
    deleteModel: w,
    downloadModel: _,
    // Settings
    getConfig: E,
    updateConfig: P,
    // Debug/Logs
    getEnvironmentLogs: F,
    getWorkspaceLogs: ie
  };
}
const Qt = { class: "base-modal-header" }, eo = {
  key: 0,
  class: "base-modal-title"
}, to = { class: "base-modal-body" }, oo = {
  key: 0,
  class: "base-modal-loading"
}, ao = {
  key: 1,
  class: "base-modal-error"
}, so = {
  key: 0,
  class: "base-modal-footer"
}, no = /* @__PURE__ */ U({
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
  setup(e, { emit: i }) {
    const s = e, l = i;
    function p() {
      s.closeOnOverlayClick && l("close");
    }
    function m(h) {
      h.key === "Escape" && l("close");
    }
    return de(() => {
      document.addEventListener("keydown", m), document.body.style.overflow = "hidden";
    }), st(() => {
      document.removeEventListener("keydown", m), document.body.style.overflow = "";
    }), (h, k) => (o(), x(Re, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        t("div", {
          class: R(["base-modal-content", e.size]),
          onClick: k[1] || (k[1] = ye(() => {
          }, ["stop"]))
        }, [
          t("div", Qt, [
            q(h.$slots, "header", {}, () => [
              e.title ? (o(), a("h3", eo, c(e.title), 1)) : u("", !0)
            ], !0),
            e.showCloseButton ? (o(), a("button", {
              key: 0,
              class: "base-modal-close",
              onClick: k[0] || (k[0] = (y) => h.$emit("close"))
            }, [...k[2] || (k[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : u("", !0)
          ]),
          t("div", to, [
            e.loading ? (o(), a("div", oo, "Loading...")) : e.error ? (o(), a("div", ao, c(e.error), 1)) : q(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), a("div", so, [
            q(h.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), Se = /* @__PURE__ */ A(no, [["__scopeId", "data-v-700d367b"]]), lo = ["type", "disabled"], ro = {
  key: 0,
  class: "spinner"
}, io = /* @__PURE__ */ U({
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
  setup(e) {
    return (i, s) => (o(), a("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: R(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (l) => i.$emit("click", l))
    }, [
      e.loading ? (o(), a("span", ro)) : u("", !0),
      q(i.$slots, "default", {}, void 0, !0)
    ], 10, lo));
  }
}), ne = /* @__PURE__ */ A(io, [["__scopeId", "data-v-f3452606"]]), co = {
  key: 0,
  class: "base-title-count"
}, uo = /* @__PURE__ */ U({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (i, s) => (o(), x(Le(`h${e.level}`), {
      class: R(["base-title", e.variant])
    }, {
      default: d(() => [
        q(i.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), a("span", co, "(" + c(e.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ue = /* @__PURE__ */ A(uo, [["__scopeId", "data-v-5a01561d"]]), mo = ["value", "disabled"], go = {
  key: 0,
  value: "",
  disabled: ""
}, fo = ["value"], vo = {
  key: 0,
  class: "base-select-error"
}, ho = /* @__PURE__ */ U({
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
  setup(e) {
    function i(l) {
      return typeof l == "string" ? l : l.value;
    }
    function s(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, p) => (o(), a("div", {
      class: R(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: R(["base-select", { error: !!e.error }]),
        onChange: p[0] || (p[0] = (m) => l.$emit("update:modelValue", m.target.value))
      }, [
        e.placeholder ? (o(), a("option", go, c(e.placeholder), 1)) : u("", !0),
        (o(!0), a(W, null, K(e.options, (m) => (o(), a("option", {
          key: i(m),
          value: i(m)
        }, c(s(m)), 9, fo))), 128))
      ], 42, mo),
      e.error ? (o(), a("span", vo, c(e.error), 1)) : u("", !0)
    ], 2));
  }
}), po = /* @__PURE__ */ A(ho, [["__scopeId", "data-v-7436d745"]]), yo = { class: "detail-section" }, bo = {
  key: 0,
  class: "empty-message"
}, wo = { class: "model-header" }, ko = { class: "model-name" }, _o = { class: "model-details" }, xo = { class: "model-row" }, $o = { class: "model-row" }, Co = {
  key: 0,
  class: "model-row"
}, So = { class: "value" }, Eo = {
  key: 1,
  class: "model-row"
}, Io = { class: "value" }, zo = {
  key: 0,
  class: "model-actions"
}, Lo = { class: "detail-section" }, Mo = {
  key: 0,
  class: "empty-message"
}, Bo = { class: "node-name" }, To = {
  key: 0,
  class: "node-version"
}, Oo = /* @__PURE__ */ U({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: i }) {
    const s = e, l = i, { getWorkflowDetails: p, setModelImportance: m } = me(), h = C(null), k = C(!1), y = C(null), S = C(!1), I = C({}), v = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function D() {
      k.value = !0, y.value = null;
      try {
        h.value = await p(s.workflowName);
      } catch (G) {
        y.value = G instanceof Error ? G.message : "Failed to load workflow details";
      } finally {
        k.value = !1;
      }
    }
    function V(G, M) {
      I.value[G] = M, S.value = !0;
    }
    async function Q() {
      if (!S.value) {
        l("close");
        return;
      }
      k.value = !0, y.value = null;
      try {
        for (const [G, M] of Object.entries(I.value))
          await m(s.workflowName, G, M);
        l("close");
      } catch (G) {
        y.value = G instanceof Error ? G.message : "Failed to save changes";
      } finally {
        k.value = !1;
      }
    }
    return de(D), (G, M) => (o(), x(Se, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: k.value,
      error: y.value || void 0,
      onClose: M[2] || (M[2] = (O) => l("close"))
    }, {
      body: d(() => [
        h.value ? (o(), a(W, { key: 0 }, [
          t("section", yo, [
            $(ue, { variant: "section" }, {
              default: d(() => [
                b("MODELS USED (" + c(h.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.models.length === 0 ? (o(), a("div", bo, " No models used in this workflow ")) : u("", !0),
            (o(!0), a(W, null, K(h.value.models, (O) => (o(), a("div", {
              key: O.hash,
              class: "model-card"
            }, [
              t("div", wo, [
                M[3] || (M[3] = t("span", { class: "model-icon" }, "📦", -1)),
                t("span", ko, c(O.filename), 1)
              ]),
              t("div", _o, [
                t("div", xo, [
                  M[4] || (M[4] = t("span", { class: "label" }, "Status:", -1)),
                  t("span", {
                    class: R(["value", O.status === "available" ? "success" : "error"])
                  }, c(O.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                t("div", $o, [
                  M[5] || (M[5] = t("span", { class: "label" }, "Importance:", -1)),
                  $(po, {
                    "model-value": I.value[O.hash] || O.importance,
                    options: v,
                    "onUpdate:modelValue": (Y) => V(O.hash, Y)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                O.node_type ? (o(), a("div", Co, [
                  M[6] || (M[6] = t("span", { class: "label" }, "Used in:", -1)),
                  t("span", So, c(O.node_type) + " (Node " + c(O.node_id) + ")", 1)
                ])) : u("", !0),
                O.size_mb ? (o(), a("div", Eo, [
                  M[7] || (M[7] = t("span", { class: "label" }, "Size:", -1)),
                  t("span", Io, c(O.size_mb) + " MB", 1)
                ])) : u("", !0)
              ]),
              O.status === "missing" ? (o(), a("div", zo, [
                $(ne, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[0] || (M[0] = (Y) => l("resolve"))
                }, {
                  default: d(() => [...M[8] || (M[8] = [
                    b(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : u("", !0)
            ]))), 128))
          ]),
          M[9] || (M[9] = t("div", { class: "info-box" }, [
            t("div", { class: "info-title" }, "Importance options:"),
            t("ul", { class: "info-list" }, [
              t("li", null, [
                t("strong", null, "Required"),
                b(" — Must have for workflow to run")
              ]),
              t("li", null, [
                t("strong", null, "Flexible"),
                b(" — Workflow adapts if missing")
              ]),
              t("li", null, [
                t("strong", null, "Optional"),
                b(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          t("section", Lo, [
            $(ue, { variant: "section" }, {
              default: d(() => [
                b("NODES USED (" + c(h.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.nodes.length === 0 ? (o(), a("div", Mo, " No custom nodes used in this workflow ")) : u("", !0),
            (o(!0), a(W, null, K(h.value.nodes, (O) => (o(), a("div", {
              key: O.name,
              class: "node-item"
            }, [
              t("span", {
                class: R(["node-status", O.installed ? "installed" : "missing"])
              }, c(O.installed ? "✓" : "✕"), 3),
              t("span", Bo, c(O.name), 1),
              O.version ? (o(), a("span", To, "v" + c(O.version), 1)) : u("", !0)
            ]))), 128))
          ])
        ], 64)) : u("", !0)
      ]),
      footer: d(() => [
        $(ne, {
          variant: "secondary",
          onClick: M[1] || (M[1] = (O) => l("close"))
        }, {
          default: d(() => [...M[10] || (M[10] = [
            b(" Close ", -1)
          ])]),
          _: 1
        }),
        S.value ? (o(), x(ne, {
          key: 0,
          variant: "primary",
          onClick: Q
        }, {
          default: d(() => [...M[11] || (M[11] = [
            b(" Save Changes ", -1)
          ])]),
          _: 1
        })) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Do = /* @__PURE__ */ A(Oo, [["__scopeId", "data-v-6ce9a41c"]]), No = {
  key: 0,
  class: "resolve-section"
}, Ro = { class: "resolve-card success-card" }, Wo = { class: "items-list" }, Uo = { class: "item-info" }, Ao = { class: "item-name" }, Vo = {
  key: 0,
  class: "item-meta"
}, Po = { class: "match-type" }, Ho = { class: "source" }, Go = {
  key: 1,
  class: "resolve-section"
}, Fo = { class: "resolve-card warning-card" }, Ko = { class: "items-list" }, jo = { class: "item-info" }, qo = { class: "item-name" }, Yo = { class: "item-meta" }, Zo = { key: 0 }, Xo = { key: 1 }, Jo = {
  key: 0,
  class: "item-warning"
}, Qo = {
  key: 0,
  class: "item-action"
}, ea = ["onClick"], ta = {
  key: 2,
  class: "resolve-section"
}, oa = { class: "info-text" }, aa = { class: "actions-summary" }, sa = { class: "summary-list" }, na = { key: 0 }, la = { key: 1 }, ra = { key: 2 }, ia = {
  key: 0,
  class: "estimated-size"
}, ca = /* @__PURE__ */ U({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: i }) {
    const s = e, l = i, { resolveWorkflow: p, installWorkflowDeps: m } = me(), h = C(null), k = C(!1), y = C(!1), S = C(null), I = H(() => {
      var B;
      return h.value ? ((B = h.value.download_results) == null ? void 0 : B.every((f) => f.can_download)) ?? !1 : !1;
    });
    async function v() {
      k.value = !0, S.value = null;
      try {
        h.value = await p(s.workflowName);
      } catch (B) {
        S.value = B instanceof Error ? B.message : "Failed to analyze workflow";
      } finally {
        k.value = !1;
      }
    }
    function D(B) {
      return !B.possible_matches || B.possible_matches.length === 0 ? null : B.possible_matches.reduce(
        (f, g) => g.match_confidence > f.match_confidence ? g : f
      );
    }
    function V(B) {
      return B >= 0.9 ? "high" : B >= 0.7 ? "medium" : "low";
    }
    function Q(B) {
      const f = D(B);
      return f ? f.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function G(B) {
      var f, g;
      return (g = (f = h.value) == null ? void 0 : f.download_results) == null ? void 0 : g.find((n) => n.model === B);
    }
    function M(B) {
      const f = G(B);
      return (f == null ? void 0 : f.can_download) ?? !1;
    }
    function O(B) {
      const f = G(B);
      return (f == null ? void 0 : f.source_url) || null;
    }
    function Y(B) {
      window.open(B, "_blank");
    }
    async function ee() {
      if (!(!h.value || y.value)) {
        y.value = !0, S.value = null;
        try {
          await m(
            s.workflowName,
            h.value.nodes_to_install,
            []
          ), l("install"), l("refresh"), l("close");
        } catch (B) {
          S.value = B instanceof Error ? B.message : "Installation failed";
        } finally {
          y.value = !1;
        }
      }
    }
    async function T() {
      if (!(!h.value || y.value)) {
        y.value = !0, S.value = null;
        try {
          await m(
            s.workflowName,
            h.value.nodes_to_install,
            h.value.models_to_download
          ), l("install"), l("refresh"), l("close");
        } catch (B) {
          S.value = B instanceof Error ? B.message : "Installation failed";
        } finally {
          y.value = !1;
        }
      }
    }
    return de(v), (B, f) => (o(), x(Se, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: k.value,
      error: S.value || void 0,
      onClose: f[1] || (f[1] = (g) => l("close"))
    }, {
      body: d(() => [
        h.value ? (o(), a(W, { key: 0 }, [
          f[5] || (f[5] = t("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          h.value.nodes_unresolved.length > 0 ? (o(), a("section", No, [
            $(ue, { variant: "section" }, {
              default: d(() => [
                b("NODES (" + c(h.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", Ro, [
              f[2] || (f[2] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "✓"),
                t("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              t("div", Wo, [
                (o(!0), a(W, null, K(h.value.nodes_unresolved, (g) => {
                  var n;
                  return o(), a("div", {
                    key: g.node_type,
                    class: "item"
                  }, [
                    t("div", Uo, [
                      t("div", Ao, c(((n = D(g)) == null ? void 0 : n.package_id) || g.node_type), 1),
                      D(g) ? (o(), a("div", Vo, [
                        t("span", {
                          class: R(["confidence-badge", V(D(g).match_confidence)])
                        }, c(Math.round(D(g).match_confidence * 100)) + "% match ", 3),
                        t("span", Po, c(D(g).match_type), 1),
                        t("span", Ho, "Source: " + c(Q(g)), 1)
                      ])) : u("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : u("", !0),
          h.value.models_unresolved.length > 0 ? (o(), a("section", Go, [
            $(ue, { variant: "section" }, {
              default: d(() => [
                b("MODELS (" + c(h.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", Fo, [
              f[3] || (f[3] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "⚠"),
                t("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              t("div", Ko, [
                (o(!0), a(W, null, K(h.value.models_unresolved, (g) => (o(), a("div", {
                  key: g.filename,
                  class: "item"
                }, [
                  t("div", jo, [
                    t("div", qo, c(g.filename), 1),
                    t("div", Yo, [
                      g.expected_category ? (o(), a("span", Zo, "Type: " + c(g.expected_category), 1)) : u("", !0),
                      G(g.filename) ? (o(), a("span", Xo, " Size: ~" + c(G(g.filename).estimated_size_mb) + " MB ", 1)) : u("", !0)
                    ]),
                    M(g.filename) ? u("", !0) : (o(), a("div", Jo, " No auto-download source configured "))
                  ]),
                  O(g.filename) ? (o(), a("div", Qo, [
                    t("button", {
                      class: "link-btn",
                      onClick: (n) => Y(O(g.filename))
                    }, " Open Source ↗ ", 8, ea)
                  ])) : u("", !0)
                ]))), 128))
              ])
            ])
          ])) : u("", !0),
          h.value.nodes_resolved.length > 0 || h.value.models_resolved.length > 0 ? (o(), a("section", ta, [
            $(ue, { variant: "section" }, {
              default: d(() => [
                b(" ALREADY AVAILABLE (" + c(h.value.nodes_resolved.length + h.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            t("div", oa, c(h.value.nodes_resolved.length) + " nodes and " + c(h.value.models_resolved.length) + " models are already installed ", 1)
          ])) : u("", !0),
          t("div", aa, [
            f[4] || (f[4] = t("div", { class: "summary-title" }, "This will:", -1)),
            t("ol", sa, [
              h.value.nodes_to_install.length ? (o(), a("li", na, " Install " + c(h.value.nodes_to_install.length) + " nodes (~" + c(h.value.estimated_time_seconds) + "s) ", 1)) : u("", !0),
              h.value.nodes_to_install.length ? (o(), a("li", la, " Restart ComfyUI to load new nodes ")) : u("", !0),
              h.value.models_to_download.length ? (o(), a("li", ra, " You'll still need to download " + c(h.value.models_to_download.length) + " model(s) manually ", 1)) : u("", !0)
            ]),
            h.value.estimated_size_mb ? (o(), a("div", ia, " Estimated download: " + c(h.value.estimated_size_mb) + " MB ", 1)) : u("", !0)
          ])
        ], 64)) : u("", !0)
      ]),
      footer: d(() => [
        $(ne, {
          variant: "secondary",
          onClick: f[0] || (f[0] = (g) => l("close"))
        }, {
          default: d(() => [...f[6] || (f[6] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h.value && h.value.nodes_to_install.length && h.value.models_to_download.length ? (o(), x(ne, {
          key: 0,
          variant: "secondary",
          disabled: y.value,
          loading: y.value,
          onClick: ee
        }, {
          default: d(() => [...f[7] || (f[7] = [
            b(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0),
        h.value && (h.value.nodes_to_install.length || h.value.models_to_download.length) ? (o(), x(ne, {
          key: 1,
          variant: "primary",
          disabled: y.value || h.value.models_to_download.length > 0 && !I.value,
          loading: y.value,
          onClick: T
        }, {
          default: d(() => [...f[8] || (f[8] = [
            b(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), da = /* @__PURE__ */ A(ca, [["__scopeId", "data-v-d68efb14"]]), ua = { class: "workflows-section" }, ma = { class: "section-header" }, ga = { class: "search-bar" }, fa = {
  key: 0,
  class: "loading"
}, va = {
  key: 1,
  class: "error-message"
}, ha = {
  key: 2,
  class: "workflows-content"
}, pa = {
  key: 0,
  class: "workflow-group"
}, ya = { class: "group-title" }, ba = { class: "workflow-info" }, wa = { class: "workflow-name" }, ka = { class: "workflow-status" }, _a = { class: "workflow-actions" }, xa = ["onClick"], $a = ["onClick"], Ca = {
  key: 1,
  class: "workflow-group"
}, Sa = { class: "group-title" }, Ea = { class: "workflow-info" }, Ia = { class: "workflow-name" }, za = { class: "workflow-actions" }, La = ["onClick"], Ma = {
  key: 2,
  class: "workflow-group"
}, Ba = { class: "group-title" }, Ta = { class: "workflow-info" }, Oa = { class: "workflow-name" }, Da = { class: "workflow-actions" }, Na = ["onClick"], Ra = {
  key: 3,
  class: "workflow-group"
}, Wa = { class: "workflow-info" }, Ua = { class: "workflow-name" }, Aa = { class: "workflow-actions" }, Va = ["onClick"], Pa = {
  key: 4,
  class: "empty-state"
}, Ha = { key: 0 }, Ga = { key: 1 }, Fa = /* @__PURE__ */ U({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: i }) {
    const s = i, { getWorkflows: l } = me(), p = C([]), m = C(!1), h = C(null), k = C(""), y = C(!1), S = C(!1), I = C(!1), v = C(!1), D = C(null), V = H(
      () => p.value.filter((E) => E.status === "broken")
    ), Q = H(
      () => p.value.filter((E) => E.status === "new")
    ), G = H(
      () => p.value.filter((E) => E.status === "modified")
    ), M = H(
      () => p.value.filter((E) => E.status === "synced")
    ), O = H(() => {
      if (!k.value.trim()) return p.value;
      const E = k.value.toLowerCase();
      return p.value.filter((P) => P.name.toLowerCase().includes(E));
    }), Y = H(
      () => V.value.filter(
        (E) => !k.value.trim() || E.name.toLowerCase().includes(k.value.toLowerCase())
      )
    ), ee = H(
      () => Q.value.filter(
        (E) => !k.value.trim() || E.name.toLowerCase().includes(k.value.toLowerCase())
      )
    ), T = H(
      () => G.value.filter(
        (E) => !k.value.trim() || E.name.toLowerCase().includes(k.value.toLowerCase())
      )
    ), B = H(
      () => M.value.filter(
        (E) => !k.value.trim() || E.name.toLowerCase().includes(k.value.toLowerCase())
      )
    );
    async function f() {
      m.value = !0, h.value = null;
      try {
        p.value = await l();
      } catch (E) {
        h.value = E instanceof Error ? E.message : "Failed to load workflows";
      } finally {
        m.value = !1;
      }
    }
    function g(E) {
      D.value = E, I.value = !0;
    }
    function n(E) {
      D.value = E, v.value = !0;
    }
    function w() {
      alert("Bulk resolution not yet implemented");
    }
    function _() {
      s("refresh");
    }
    return de(f), (E, P) => (o(), a("div", ua, [
      t("div", ma, [
        P[7] || (P[7] = t("h3", { class: "view-title" }, "WORKFLOWS", -1)),
        V.value.length > 0 ? (o(), a("button", {
          key: 0,
          class: "resolve-all-btn",
          onClick: w
        }, " RESOLVE ALL ISSUES ")) : u("", !0)
      ]),
      t("div", ga, [
        De(t("input", {
          "onUpdate:modelValue": P[0] || (P[0] = (F) => k.value = F),
          type: "text",
          placeholder: "🔍 Search workflows...",
          class: "search-input"
        }, null, 512), [
          [Ne, k.value]
        ])
      ]),
      m.value ? (o(), a("div", fa, "Loading workflows...")) : h.value ? (o(), a("div", va, c(h.value), 1)) : (o(), a("div", ha, [
        Y.value.length ? (o(), a("section", pa, [
          t("h4", ya, "BROKEN (" + c(Y.value.length) + ")", 1),
          (o(!0), a(W, null, K(Y.value, (F) => (o(), a("div", {
            key: F.name,
            class: "workflow-item broken"
          }, [
            t("div", ba, [
              t("div", wa, "⚠ " + c(F.name), 1),
              t("div", ka, " Missing: " + c(F.missing_nodes) + " nodes, " + c(F.missing_models) + " models ", 1)
            ]),
            t("div", _a, [
              t("button", {
                class: "action-btn",
                onClick: (ie) => n(F.name)
              }, " Resolve ▸ ", 8, xa),
              t("button", {
                class: "action-btn secondary",
                onClick: (ie) => g(F.name)
              }, " Details ▸ ", 8, $a)
            ])
          ]))), 128))
        ])) : u("", !0),
        ee.value.length ? (o(), a("section", Ca, [
          t("h4", Sa, "NEW (" + c(ee.value.length) + ")", 1),
          (o(!0), a(W, null, K(ee.value, (F) => (o(), a("div", {
            key: F.name,
            class: "workflow-item new"
          }, [
            t("div", Ea, [
              t("div", Ia, "● " + c(F.name), 1),
              P[8] || (P[8] = t("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            t("div", za, [
              t("button", {
                class: "action-btn secondary",
                onClick: (ie) => g(F.name)
              }, " Details ", 8, La)
            ])
          ]))), 128))
        ])) : u("", !0),
        T.value.length ? (o(), a("section", Ma, [
          t("h4", Ba, "MODIFIED (" + c(T.value.length) + ")", 1),
          (o(!0), a(W, null, K(T.value, (F) => (o(), a("div", {
            key: F.name,
            class: "workflow-item modified"
          }, [
            t("div", Ta, [
              t("div", Oa, "⚡ " + c(F.name), 1),
              P[9] || (P[9] = t("div", { class: "workflow-status" }, "✓ Ready", -1))
            ]),
            t("div", Da, [
              t("button", {
                class: "action-btn secondary",
                onClick: (ie) => g(F.name)
              }, " Details ", 8, Na)
            ])
          ]))), 128))
        ])) : u("", !0),
        B.value.length ? (o(), a("section", Ra, [
          t("h4", {
            class: "group-title clickable",
            onClick: P[1] || (P[1] = (F) => y.value = !y.value)
          }, " SYNCED (" + c(B.value.length) + ") " + c(y.value ? "▼" : "▸"), 1),
          y.value ? (o(), a(W, { key: 0 }, [
            (o(!0), a(W, null, K(B.value.slice(0, S.value ? void 0 : 5), (F) => (o(), a("div", {
              key: F.name,
              class: "workflow-item synced"
            }, [
              t("div", Wa, [
                t("div", Ua, c(F.name), 1),
                P[10] || (P[10] = t("div", { class: "workflow-status" }, "✓ Ready", -1))
              ]),
              t("div", Aa, [
                t("button", {
                  class: "action-btn secondary",
                  onClick: (ie) => g(F.name)
                }, " Details ", 8, Va)
              ])
            ]))), 128)),
            !S.value && B.value.length > 5 ? (o(), a("button", {
              key: 0,
              class: "show-more-btn",
              onClick: P[2] || (P[2] = (F) => S.value = !0)
            }, " View all " + c(B.value.length) + " → ", 1)) : u("", !0)
          ], 64)) : u("", !0)
        ])) : u("", !0),
        O.value.length ? u("", !0) : (o(), a("div", Pa, [
          k.value ? (o(), a("p", Ha, 'No workflows match "' + c(k.value) + '"', 1)) : (o(), a("p", Ga, "No workflows found in this environment."))
        ]))
      ])),
      I.value && D.value ? (o(), x(Do, {
        key: 3,
        "workflow-name": D.value,
        onClose: P[3] || (P[3] = (F) => I.value = !1),
        onResolve: P[4] || (P[4] = (F) => n(D.value))
      }, null, 8, ["workflow-name"])) : u("", !0),
      v.value && D.value ? (o(), x(da, {
        key: 4,
        "workflow-name": D.value,
        onClose: P[5] || (P[5] = (F) => v.value = !1),
        onInstall: _,
        onRefresh: P[6] || (P[6] = (F) => s("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ]));
  }
}), Ka = /* @__PURE__ */ A(Fa, [["__scopeId", "data-v-abf8513b"]]), ja = { class: "panel-layout" }, qa = {
  key: 0,
  class: "panel-layout-header"
}, Ya = {
  key: 1,
  class: "panel-layout-search"
}, Za = { class: "panel-layout-content" }, Xa = {
  key: 2,
  class: "panel-layout-footer"
}, Ja = /* @__PURE__ */ U({
  __name: "PanelLayout",
  setup(e) {
    return (i, s) => (o(), a("div", ja, [
      i.$slots.header ? (o(), a("div", qa, [
        q(i.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      i.$slots.search ? (o(), a("div", Ya, [
        q(i.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      t("div", Za, [
        q(i.$slots, "content", {}, void 0, !0)
      ]),
      i.$slots.footer ? (o(), a("div", Xa, [
        q(i.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), Pe = /* @__PURE__ */ A(Ja, [["__scopeId", "data-v-21565df9"]]), Qa = {
  key: 0,
  class: "panel-title-prefix"
}, es = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ts = /* @__PURE__ */ U({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (i, s) => (o(), x(Le(`h${e.level}`), {
      class: R(["panel-title", e.variant])
    }, {
      default: d(() => [
        e.showPrefix ? (o(), a("span", Qa, c(e.prefix), 1)) : (o(), a("span", es)),
        q(i.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), os = /* @__PURE__ */ A(ts, [["__scopeId", "data-v-c3875efc"]]), as = ["title"], ss = ["width", "height"], ns = /* @__PURE__ */ U({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (i, s) => (o(), a("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (l) => i.$emit("click"))
    }, [
      (o(), a("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...s[1] || (s[1] = [
        t("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        t("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, ss))
    ], 8, as));
  }
}), ls = /* @__PURE__ */ A(ns, [["__scopeId", "data-v-6fc7f16d"]]), rs = { class: "header-left" }, is = {
  key: 0,
  class: "header-actions"
}, cs = /* @__PURE__ */ U({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (i, s) => (o(), a("div", {
      class: R(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", rs, [
        $(os, { "show-prefix": e.showPrefix }, {
          default: d(() => [
            b(c(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), x(ls, {
          key: 0,
          onClick: s[0] || (s[0] = (l) => i.$emit("info-click"))
        })) : u("", !0)
      ]),
      i.$slots.actions ? (o(), a("div", is, [
        q(i.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ A(cs, [["__scopeId", "data-v-55a62cd6"]]), ds = { class: "search-input-wrapper" }, us = ["value", "placeholder"], ms = /* @__PURE__ */ U({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: i }) {
    const s = e, l = i, p = C(null);
    let m;
    function h(y) {
      const S = y.target.value;
      s.debounce > 0 ? (clearTimeout(m), m = window.setTimeout(() => {
        l("update:modelValue", S);
      }, s.debounce)) : l("update:modelValue", S);
    }
    function k() {
      var y;
      l("update:modelValue", ""), l("clear"), (y = p.value) == null || y.focus();
    }
    return de(() => {
      s.autoFocus && p.value && p.value.focus();
    }), (y, S) => (o(), a("div", ds, [
      t("input", {
        ref_key: "inputRef",
        ref: p,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: ke(k, ["escape"])
      }, null, 40, us),
      e.clearable && e.modelValue ? (o(), a("button", {
        key: 0,
        class: "clear-button",
        onClick: k,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), gs = /* @__PURE__ */ A(ms, [["__scopeId", "data-v-266f857a"]]), fs = { class: "search-bar" }, vs = /* @__PURE__ */ U({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (i, s) => (o(), a("div", fs, [
      $(gs, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (l) => i.$emit("update:modelValue", l)),
        onClear: s[1] || (s[1] = (l) => i.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Ge = /* @__PURE__ */ A(vs, [["__scopeId", "data-v-3d51bbfd"]]), hs = {
  key: 0,
  class: "section-title-count"
}, ps = {
  key: 1,
  class: "section-title-icon"
}, ys = /* @__PURE__ */ U({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (i, s) => (o(), x(Le(`h${e.level}`), {
      class: R(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (l) => e.clickable && i.$emit("click"))
    }, {
      default: d(() => [
        q(i.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), a("span", hs, "(" + c(e.count) + ")", 1)) : u("", !0),
        e.clickable ? (o(), a("span", ps, c(e.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bs = /* @__PURE__ */ A(ys, [["__scopeId", "data-v-559361eb"]]), ws = { class: "section-group" }, ks = {
  key: 0,
  class: "section-content"
}, _s = /* @__PURE__ */ U({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: i }) {
    const s = e, l = i, p = C(s.initiallyExpanded);
    function m() {
      s.collapsible && (p.value = !p.value, l("toggle", p.value));
    }
    return (h, k) => (o(), a("section", ws, [
      $(bs, {
        count: e.count,
        clickable: e.collapsible,
        expanded: p.value,
        onClick: m
      }, {
        default: d(() => [
          b(c(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || p.value ? (o(), a("div", ks, [
        q(h.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), ve = /* @__PURE__ */ A(_s, [["__scopeId", "data-v-c48e33ed"]]), xs = { class: "item-header" }, $s = {
  key: 0,
  class: "item-icon"
}, Cs = { class: "item-info" }, Ss = {
  key: 0,
  class: "item-title"
}, Es = {
  key: 1,
  class: "item-subtitle"
}, Is = {
  key: 0,
  class: "item-details"
}, zs = {
  key: 1,
  class: "item-actions"
}, Ls = /* @__PURE__ */ U({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: i }) {
    const s = e, l = H(() => s.status ? `status-${s.status}` : "");
    return (p, m) => (o(), a("div", {
      class: R(["item-card", { clickable: e.clickable, compact: e.compact }, l.value]),
      onClick: m[0] || (m[0] = (h) => e.clickable && p.$emit("click"))
    }, [
      t("div", xs, [
        p.$slots.icon ? (o(), a("span", $s, [
          q(p.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        t("div", Cs, [
          p.$slots.title ? (o(), a("div", Ss, [
            q(p.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          p.$slots.subtitle ? (o(), a("div", Es, [
            q(p.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      p.$slots.details ? (o(), a("div", Is, [
        q(p.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      p.$slots.actions ? (o(), a("div", zs, [
        q(p.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), he = /* @__PURE__ */ A(Ls, [["__scopeId", "data-v-cc435e0e"]]), Ms = /* @__PURE__ */ U({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (i, s) => (o(), a("span", {
      class: R(["detail-label"]),
      style: We({ minWidth: e.minWidth })
    }, [
      q(i.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Bs = /* @__PURE__ */ A(Ms, [["__scopeId", "data-v-75e9eeb8"]]), Ts = /* @__PURE__ */ U({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (i, s) => (o(), a("span", {
      class: R(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      q(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Os = /* @__PURE__ */ A(Ts, [["__scopeId", "data-v-2f186e4c"]]), Ds = { class: "detail-row" }, Ns = /* @__PURE__ */ U({
  __name: "DetailRow",
  props: {
    label: {},
    value: {},
    mono: { type: Boolean, default: !1 },
    valueVariant: { default: "default" },
    truncate: { type: Boolean, default: !1 },
    labelMinWidth: { default: "70px" }
  },
  setup(e) {
    return (i, s) => (o(), a("div", Ds, [
      $(Bs, { "min-width": e.labelMinWidth }, {
        default: d(() => [
          b(c(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), x(Os, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: d(() => [
          b(c(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : q(i.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), oe = /* @__PURE__ */ A(Ns, [["__scopeId", "data-v-ef15664a"]]), Rs = ["type", "disabled"], Ws = {
  key: 0,
  class: "spinner"
}, Us = /* @__PURE__ */ U({
  __name: "ActionButton",
  props: {
    variant: { default: "primary" },
    size: { default: "sm" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e) {
    return (i, s) => (o(), a("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: R(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (l) => i.$emit("click", l))
    }, [
      e.loading ? (o(), a("span", Ws)) : u("", !0),
      e.loading ? u("", !0) : q(i.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Rs));
  }
}), te = /* @__PURE__ */ A(Us, [["__scopeId", "data-v-772abe47"]]), As = /* @__PURE__ */ U({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (i, s) => (o(), a("div", {
      class: R(["summary-bar", e.variant])
    }, [
      q(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ A(As, [["__scopeId", "data-v-ccb7816e"]]), Vs = { class: "empty-state" }, Ps = {
  key: 0,
  class: "empty-icon"
}, Hs = { class: "empty-message" }, Gs = /* @__PURE__ */ U({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (i, s) => (o(), a("div", Vs, [
      e.icon ? (o(), a("div", Ps, c(e.icon), 1)) : u("", !0),
      t("p", Hs, c(e.message), 1),
      e.actionLabel ? (o(), x(te, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => i.$emit("action"))
      }, {
        default: d(() => [
          b(c(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ A(Gs, [["__scopeId", "data-v-4466284f"]]), Fs = { class: "loading-state" }, Ks = { class: "loading-message" }, js = /* @__PURE__ */ U({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (i, s) => (o(), a("div", Fs, [
      s[0] || (s[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", Ks, c(e.message), 1)
    ]));
  }
}), je = /* @__PURE__ */ A(js, [["__scopeId", "data-v-ad8436c9"]]), qs = { class: "error-state" }, Ys = { class: "error-message" }, Zs = /* @__PURE__ */ U({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (i, s) => (o(), a("div", qs, [
      s[2] || (s[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", Ys, c(e.message), 1),
      e.retry ? (o(), x(te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => i.$emit("retry"))
      }, {
        default: d(() => [...s[1] || (s[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), qe = /* @__PURE__ */ A(Zs, [["__scopeId", "data-v-5397be48"]]), Xs = { class: "popover-header" }, Js = { class: "popover-title" }, Qs = { class: "popover-content" }, en = {
  key: 0,
  class: "popover-actions"
}, tn = /* @__PURE__ */ U({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (i, s) => (o(), x(Re, { to: "body" }, [
      e.show ? (o(), a("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (l) => i.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: We({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = ye(() => {
          }, ["stop"]))
        }, [
          t("div", Xs, [
            t("h4", Js, c(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (l) => i.$emit("close"))
            }, "✕")
          ]),
          t("div", Qs, [
            q(i.$slots, "content", {}, void 0, !0)
          ]),
          i.$slots.actions ? (o(), a("div", en, [
            q(i.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), Ye = /* @__PURE__ */ A(tn, [["__scopeId", "data-v-057df510"]]), on = /* @__PURE__ */ U({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: i }) {
    const s = i, { getEnvironmentModels: l, getStatus: p } = me(), m = C([]), h = C([]), k = C("production"), y = C(!1), S = C(null), I = C(""), v = C(!1);
    function D() {
      v.value = !1, s("navigate", "model-index");
    }
    const V = H(
      () => m.value.reduce((n, w) => n + (w.size_mb || w.size || 0), 0)
    ), Q = H(() => {
      if (!I.value.trim()) return m.value;
      const n = I.value.toLowerCase();
      return m.value.filter((w) => w.filename.toLowerCase().includes(n));
    }), G = H(() => {
      if (!I.value.trim()) return h.value;
      const n = I.value.toLowerCase();
      return h.value.filter((w) => w.filename.toLowerCase().includes(n));
    }), M = H(
      () => Q.value.filter((n) => n.type === "checkpoints" || n.category === "checkpoints")
    ), O = H(
      () => Q.value.filter((n) => n.type === "loras" || n.category === "loras")
    ), Y = H(
      () => Q.value.filter(
        (n) => n.type !== "checkpoints" && n.category !== "checkpoints" && n.type !== "loras" && n.category !== "loras"
      )
    );
    function ee(n) {
      return n ? n >= 1024 ? `${(n / 1024).toFixed(1)} GB` : `${n.toFixed(0)} MB` : "Unknown";
    }
    function T(n) {
      s("navigate", "model-index");
    }
    function B(n) {
      s("navigate", "model-index");
    }
    function f(n) {
      alert(`Download functionality not yet implemented for ${n}`);
    }
    async function g() {
      y.value = !0, S.value = null;
      try {
        const n = await l();
        m.value = n, h.value = [];
        const w = await p();
        k.value = w.environment || "production";
      } catch (n) {
        S.value = n instanceof Error ? n.message : "Failed to load models";
      } finally {
        y.value = !1;
      }
    }
    return de(g), (n, w) => (o(), a(W, null, [
      $(Pe, null, {
        header: d(() => [
          $(He, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (_) => v.value = !0)
          })
        ]),
        search: d(() => [
          $(Ge, {
            modelValue: I.value,
            "onUpdate:modelValue": w[1] || (w[1] = (_) => I.value = _),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          y.value ? (o(), x(je, {
            key: 0,
            message: "Loading environment models..."
          })) : S.value ? (o(), x(qe, {
            key: 1,
            message: S.value,
            retry: !0,
            onRetry: g
          }, null, 8, ["message"])) : (o(), a(W, { key: 2 }, [
            m.value.length ? (o(), x(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                b(" Total: " + c(m.value.length) + " models • " + c(ee(V.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            M.value.length ? (o(), x(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: M.value.length
            }, {
              default: d(() => [
                (o(!0), a(W, null, K(M.value, (_) => (o(), x(he, {
                  key: _.sha256 || _.hash || _.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...w[3] || (w[3] = [
                    b("📦", -1)
                  ])]),
                  title: d(() => [
                    b(c(_.filename), 1)
                  ]),
                  subtitle: d(() => [
                    b(c(ee(_.size_mb || _.size)), 1)
                  ]),
                  details: d(() => [
                    $(oe, {
                      label: "Used by:",
                      value: (_.used_by || _.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    $(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: d(() => [
                    $(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => T(_.sha256 || _.sha256_hash || _.hash || "")
                    }, {
                      default: d(() => [...w[4] || (w[4] = [
                        b(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            O.value.length ? (o(), x(ve, {
              key: 2,
              title: "LORAS",
              count: O.value.length
            }, {
              default: d(() => [
                (o(!0), a(W, null, K(O.value, (_) => (o(), x(he, {
                  key: _.sha256 || _.hash || _.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...w[5] || (w[5] = [
                    b("📦", -1)
                  ])]),
                  title: d(() => [
                    b(c(_.filename), 1)
                  ]),
                  subtitle: d(() => [
                    b(c(ee(_.size_mb || _.size)), 1)
                  ]),
                  details: d(() => [
                    $(oe, {
                      label: "Used by:",
                      value: (_.used_by || _.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    $(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: d(() => [
                    $(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => T(_.sha256 || _.sha256_hash || _.hash || "")
                    }, {
                      default: d(() => [...w[6] || (w[6] = [
                        b(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            Y.value.length ? (o(), x(ve, {
              key: 3,
              title: "OTHER",
              count: Y.value.length
            }, {
              default: d(() => [
                (o(!0), a(W, null, K(Y.value, (_) => (o(), x(he, {
                  key: _.sha256 || _.hash || _.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...w[7] || (w[7] = [
                    b("📦", -1)
                  ])]),
                  title: d(() => [
                    b(c(_.filename), 1)
                  ]),
                  subtitle: d(() => [
                    b(c(ee(_.size_mb || _.size)), 1)
                  ]),
                  details: d(() => [
                    $(oe, {
                      label: "Type:",
                      value: _.type
                    }, null, 8, ["value"]),
                    $(oe, {
                      label: "Used by:",
                      value: (_.used_by || _.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    $(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => T(_.sha256 || _.sha256_hash || _.hash || "")
                    }, {
                      default: d(() => [...w[8] || (w[8] = [
                        b(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            G.value.length ? (o(), x(ve, {
              key: 4,
              title: "MISSING",
              count: G.value.length
            }, {
              default: d(() => [
                (o(!0), a(W, null, K(G.value, (_) => (o(), x(he, {
                  key: _.filename,
                  status: "broken"
                }, {
                  icon: d(() => [...w[9] || (w[9] = [
                    b("⚠", -1)
                  ])]),
                  title: d(() => [
                    b(c(_.filename), 1)
                  ]),
                  subtitle: d(() => [...w[10] || (w[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: d(() => {
                    var E;
                    return [
                      $(oe, {
                        label: "Required by:",
                        value: ((E = _.workflow_names) == null ? void 0 : E.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: d(() => [
                    $(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (E) => f(_.filename)
                    }, {
                      default: d(() => [...w[11] || (w[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => B(_.filename)
                    }, {
                      default: d(() => [...w[12] || (w[12] = [
                        b(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !Q.value.length && !G.value.length ? (o(), x(Ke, {
              key: 5,
              icon: "📭",
              message: I.value ? `No models match '${I.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $(Ye, {
        show: v.value,
        title: "About Environment Models",
        onClose: w[2] || (w[2] = (_) => v.value = !1)
      }, {
        content: d(() => [
          t("p", null, [
            w[13] || (w[13] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + c(k.value) + '"', 1),
            w[14] || (w[14] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: d(() => [
          $(te, {
            variant: "primary",
            onClick: D
          }, {
            default: d(() => [...w[15] || (w[15] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), an = /* @__PURE__ */ A(on, [["__scopeId", "data-v-865641a4"]]), sn = /* @__PURE__ */ U({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: i } = me(), s = C([]), l = C(!1), p = C(null), m = C(""), h = C(!1), k = H(
      () => s.value.reduce((f, g) => f + (g.size_mb || g.size || 0), 0)
    ), y = H(() => {
      const f = /* @__PURE__ */ new Set();
      return s.value.forEach((g) => {
        g.used_in_environments && g.used_in_environments.length > 0 && g.used_in_environments.forEach((n) => f.add(n.env_name));
      }), f.size;
    }), S = H(() => {
      if (!m.value.trim()) return s.value;
      const f = m.value.toLowerCase();
      return s.value.filter((g) => {
        const n = g, w = g.sha256 || n.sha256_hash || "";
        return g.filename.toLowerCase().includes(f) || w.toLowerCase().includes(f);
      });
    }), I = H(
      () => S.value.filter((f) => f.type === "checkpoints")
    ), v = H(
      () => S.value.filter((f) => f.type === "loras")
    ), D = H(
      () => S.value.filter((f) => f.type !== "checkpoints" && f.type !== "loras")
    );
    function V(f) {
      return f ? f >= 1024 ? `${(f / 1024).toFixed(1)} GB` : `${f.toFixed(0)} MB` : "Unknown";
    }
    function Q(f) {
      const g = f, n = f.used_in_workflows || g.used_by || [];
      return !n || n.length === 0 ? "Not used" : `${n.length} workflow(s)`;
    }
    function G(f) {
      navigator.clipboard.writeText(f), alert("Hash copied to clipboard");
    }
    function M(f) {
      prompt("Enter model source URL:", f.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function O(f) {
      const g = f, n = f.used_in_workflows || g.used_by || [], w = n && n.length > 0 ? `

⚠ WARNING: This model is used by ${n.length} workflow(s):
${n.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${f.filename}?${w}

This will free ${V(g.size_mb || f.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function Y() {
      alert("Scan for models not yet implemented");
    }
    function ee() {
      alert("Change directory not yet implemented");
    }
    function T() {
      alert("Download new model not yet implemented");
    }
    async function B() {
      l.value = !0, p.value = null;
      try {
        s.value = await i(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", I.value), console.log("Filtered loras:", v.value), console.log("Filtered other:", D.value);
      } catch (f) {
        p.value = f instanceof Error ? f.message : "Failed to load workspace models";
      } finally {
        l.value = !1;
      }
    }
    return de(B), (f, g) => (o(), a(W, null, [
      $(Pe, null, {
        header: d(() => [
          $(He, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: g[0] || (g[0] = (n) => h.value = !0)
          }, {
            actions: d(() => [
              $(te, {
                variant: "primary",
                size: "sm",
                onClick: Y
              }, {
                default: d(() => [...g[3] || (g[3] = [
                  b(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              $(te, {
                variant: "primary",
                size: "sm",
                onClick: ee
              }, {
                default: d(() => [...g[4] || (g[4] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              $(te, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: d(() => [...g[5] || (g[5] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  b(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          $(Ge, {
            modelValue: m.value,
            "onUpdate:modelValue": g[1] || (g[1] = (n) => m.value = n),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          l.value ? (o(), x(je, {
            key: 0,
            message: "Loading workspace models..."
          })) : p.value ? (o(), x(qe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), a(W, { key: 2 }, [
            s.value.length ? (o(), x(Fe, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                b(" Total: " + c(s.value.length) + " models • " + c(V(k.value)) + " • Used in " + c(y.value) + " environments ", 1)
              ]),
              _: 1
            })) : u("", !0),
            I.value.length ? (o(), x(ve, {
              key: 1,
              title: "CHECKPOINTS",
              count: I.value.length
            }, {
              default: d(() => [
                (o(!0), a(W, null, K(I.value, (n) => (o(), x(he, {
                  key: n.sha256 || n.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...g[6] || (g[6] = [
                    b("📦", -1)
                  ])]),
                  title: d(() => [
                    b(c(n.filename), 1)
                  ]),
                  subtitle: d(() => [
                    b(c(V(n.size_mb || n.size)), 1)
                  ]),
                  details: d(() => {
                    var w, _;
                    return [
                      n.sha256 || n.sha256_hash ? (o(), x(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (n.sha256 || n.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : u("", !0),
                      $(oe, {
                        label: "Used in:",
                        value: Q(n)
                      }, null, 8, ["value"]),
                      n.source_url || (w = n.sources) != null && w[0] ? (o(), x(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: n.source_url || ((_ = n.sources) == null ? void 0 : _[0])
                      }, null, 8, ["value"])) : (o(), x(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: d(() => [...g[7] || (g[7] = [
                          b("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: d(() => [
                    $(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => M(n)
                    }, {
                      default: d(() => [...g[8] || (g[8] = [
                        b(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    n.sha256 || n.sha256_hash ? (o(), x(te, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => G(n.sha256 || n.sha256_hash)
                    }, {
                      default: d(() => [...g[9] || (g[9] = [
                        b(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    $(te, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (w) => O(n)
                    }, {
                      default: d(() => [...g[10] || (g[10] = [
                        b(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            v.value.length ? (o(), x(ve, {
              key: 2,
              title: "LORAS",
              count: v.value.length
            }, {
              default: d(() => [
                (o(!0), a(W, null, K(v.value, (n) => (o(), x(he, {
                  key: n.sha256 || n.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...g[11] || (g[11] = [
                    b("📦", -1)
                  ])]),
                  title: d(() => [
                    b(c(n.filename), 1)
                  ]),
                  subtitle: d(() => [
                    b(c(V(n.size_mb || n.size)), 1)
                  ]),
                  details: d(() => {
                    var w, _;
                    return [
                      n.sha256 || n.sha256_hash ? (o(), x(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (n.sha256 || n.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : u("", !0),
                      $(oe, {
                        label: "Used in:",
                        value: Q(n)
                      }, null, 8, ["value"]),
                      n.source_url || (w = n.sources) != null && w[0] ? (o(), x(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: n.source_url || ((_ = n.sources) == null ? void 0 : _[0])
                      }, null, 8, ["value"])) : (o(), x(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: d(() => [...g[12] || (g[12] = [
                          b("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: d(() => [
                    $(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => M(n)
                    }, {
                      default: d(() => [...g[13] || (g[13] = [
                        b(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    n.sha256 || n.sha256_hash ? (o(), x(te, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => G(n.sha256 || n.sha256_hash)
                    }, {
                      default: d(() => [...g[14] || (g[14] = [
                        b(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    $(te, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (w) => O(n)
                    }, {
                      default: d(() => [...g[15] || (g[15] = [
                        b(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            D.value.length ? (o(), x(ve, {
              key: 3,
              title: "OTHER",
              count: D.value.length
            }, {
              default: d(() => [
                (o(!0), a(W, null, K(D.value, (n) => (o(), x(he, {
                  key: n.sha256 || n.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...g[16] || (g[16] = [
                    b("📦", -1)
                  ])]),
                  title: d(() => [
                    b(c(n.filename), 1)
                  ]),
                  subtitle: d(() => [
                    b(c(V(n.size_mb || n.size)), 1)
                  ]),
                  details: d(() => [
                    $(oe, {
                      label: "Type:",
                      value: n.type
                    }, null, 8, ["value"]),
                    n.sha256 || n.sha256_hash ? (o(), x(oe, {
                      key: 0,
                      label: "SHA256:",
                      value: (n.sha256 || n.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : u("", !0),
                    $(oe, {
                      label: "Used in:",
                      value: Q(n)
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    $(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => M(n)
                    }, {
                      default: d(() => [...g[17] || (g[17] = [
                        b(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    n.sha256 || n.sha256_hash ? (o(), x(te, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => G(n.sha256 || n.sha256_hash)
                    }, {
                      default: d(() => [...g[18] || (g[18] = [
                        b(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0),
                    $(te, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (w) => O(n)
                    }, {
                      default: d(() => [...g[19] || (g[19] = [
                        b(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            S.value.length ? u("", !0) : (o(), x(Ke, {
              key: 4,
              icon: "📭",
              message: m.value ? `No models match '${m.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      $(Ye, {
        show: h.value,
        title: "About Workspace Model Index",
        onClose: g[2] || (g[2] = (n) => h.value = !1)
      }, {
        content: d(() => [...g[20] || (g[20] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), nn = /* @__PURE__ */ A(sn, [["__scopeId", "data-v-5a24af01"]]), ln = { class: "header-info" }, rn = { class: "commit-hash" }, cn = {
  key: 0,
  class: "commit-refs"
}, dn = { class: "commit-message" }, un = { class: "commit-date" }, mn = {
  key: 0,
  class: "loading"
}, gn = {
  key: 1,
  class: "changes-section"
}, fn = { class: "stats-row" }, vn = { class: "stat" }, hn = { class: "stat insertions" }, pn = { class: "stat deletions" }, yn = {
  key: 0,
  class: "change-group"
}, bn = {
  key: 1,
  class: "change-group"
}, wn = {
  key: 0,
  class: "version"
}, kn = {
  key: 2,
  class: "change-group"
}, _n = { class: "change-item" }, xn = /* @__PURE__ */ U({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const i = e, { getCommitDetail: s } = me(), l = C(null), p = C(!0), m = H(() => {
      if (!l.value) return !1;
      const k = l.value.changes.workflows;
      return k.added.length > 0 || k.modified.length > 0 || k.deleted.length > 0;
    }), h = H(() => {
      if (!l.value) return !1;
      const k = l.value.changes.nodes;
      return k.added.length > 0 || k.removed.length > 0;
    });
    return de(async () => {
      try {
        l.value = await s(i.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (k, y) => (o(), x(Se, {
      size: "md",
      "show-close-button": !1,
      onClose: y[3] || (y[3] = (S) => k.$emit("close"))
    }, {
      header: d(() => {
        var S, I, v, D;
        return [
          t("div", ln, [
            y[4] || (y[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", rn, c(((S = l.value) == null ? void 0 : S.short_hash) || e.commit.short_hash || ((I = e.commit.hash) == null ? void 0 : I.slice(0, 7))), 1),
            (D = (v = l.value) == null ? void 0 : v.refs) != null && D.length ? (o(), a("span", cn, [
              (o(!0), a(W, null, K(l.value.refs, (V) => (o(), a("span", {
                key: V,
                class: "ref-badge"
              }, c(V), 1))), 128))
            ])) : u("", !0)
          ]),
          $(ne, {
            variant: "ghost",
            size: "sm",
            onClick: y[0] || (y[0] = (V) => k.$emit("close"))
          }, {
            default: d(() => [...y[5] || (y[5] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: d(() => {
        var S, I;
        return [
          t("div", dn, c(((S = l.value) == null ? void 0 : S.message) || e.commit.message), 1),
          t("div", un, c(((I = l.value) == null ? void 0 : I.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          p.value ? (o(), a("div", mn, "Loading details...")) : l.value ? (o(), a("div", gn, [
            t("div", fn, [
              t("span", vn, c(l.value.stats.files_changed) + " files", 1),
              t("span", hn, "+" + c(l.value.stats.insertions), 1),
              t("span", pn, "-" + c(l.value.stats.deletions), 1)
            ]),
            m.value ? (o(), a("div", yn, [
              $(ue, { variant: "section" }, {
                default: d(() => [...y[6] || (y[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), a(W, null, K(l.value.changes.workflows.added, (v) => (o(), a("div", {
                key: "add-" + v,
                class: "change-item added"
              }, [
                y[7] || (y[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, c(v), 1)
              ]))), 128)),
              (o(!0), a(W, null, K(l.value.changes.workflows.modified, (v) => (o(), a("div", {
                key: "mod-" + v,
                class: "change-item modified"
              }, [
                y[8] || (y[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, c(v), 1)
              ]))), 128)),
              (o(!0), a(W, null, K(l.value.changes.workflows.deleted, (v) => (o(), a("div", {
                key: "del-" + v,
                class: "change-item deleted"
              }, [
                y[9] || (y[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, c(v), 1)
              ]))), 128))
            ])) : u("", !0),
            h.value ? (o(), a("div", bn, [
              $(ue, { variant: "section" }, {
                default: d(() => [...y[10] || (y[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), a(W, null, K(l.value.changes.nodes.added, (v) => (o(), a("div", {
                key: "add-" + v.name,
                class: "change-item added"
              }, [
                y[11] || (y[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, c(v.name), 1),
                v.version ? (o(), a("span", wn, "(" + c(v.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), a(W, null, K(l.value.changes.nodes.removed, (v) => (o(), a("div", {
                key: "rem-" + v.name,
                class: "change-item deleted"
              }, [
                y[12] || (y[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, c(v.name), 1)
              ]))), 128))
            ])) : u("", !0),
            l.value.changes.models.resolved > 0 ? (o(), a("div", kn, [
              $(ue, { variant: "section" }, {
                default: d(() => [...y[13] || (y[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", _n, [
                y[14] || (y[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, c(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: d(() => [
        $(ne, {
          variant: "secondary",
          onClick: y[1] || (y[1] = (S) => k.$emit("createBranch", e.commit))
        }, {
          default: d(() => [...y[15] || (y[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        $(ne, {
          variant: "primary",
          onClick: y[2] || (y[2] = (S) => k.$emit("checkout", e.commit))
        }, {
          default: d(() => [...y[16] || (y[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), $n = /* @__PURE__ */ A(xn, [["__scopeId", "data-v-d256ff6d"]]), Cn = { class: "dialog-message" }, Sn = {
  key: 0,
  class: "dialog-details"
}, En = {
  key: 1,
  class: "dialog-warning"
}, In = /* @__PURE__ */ U({
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
  setup(e) {
    return (i, s) => (o(), x(Se, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (l) => i.$emit("cancel"))
    }, {
      body: d(() => [
        t("p", Cn, c(e.message), 1),
        e.details && e.details.length ? (o(), a("div", Sn, [
          (o(!0), a(W, null, K(e.details, (l, p) => (o(), a("div", {
            key: p,
            class: "detail-item"
          }, " • " + c(l), 1))), 128))
        ])) : u("", !0),
        e.warning ? (o(), a("p", En, [
          s[4] || (s[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + c(e.warning), 1)
        ])) : u("", !0)
      ]),
      footer: d(() => [
        $(ne, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (l) => i.$emit("cancel"))
        }, {
          default: d(() => [
            b(c(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), x(ne, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (l) => i.$emit("secondary"))
        }, {
          default: d(() => [
            b(c(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        $(ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (l) => i.$emit("confirm"))
        }, {
          default: d(() => [
            b(c(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), zn = /* @__PURE__ */ A(In, [["__scopeId", "data-v-3670b9f5"]]), Ln = { class: "comfygit-panel" }, Mn = { class: "panel-header" }, Bn = { class: "header-left" }, Tn = {
  key: 0,
  class: "header-info"
}, On = { class: "header-actions" }, Dn = { class: "env-switcher" }, Nn = {
  key: 0,
  class: "header-info"
}, Rn = { class: "branch-name" }, Wn = { class: "panel-main" }, Un = { class: "sidebar" }, An = { class: "sidebar-section" }, Vn = { class: "sidebar-section" }, Pn = { class: "sidebar-section" }, Hn = { class: "content-area" }, Gn = {
  key: 0,
  class: "error-message"
}, Fn = {
  key: 1,
  class: "loading"
}, Kn = {
  key: 5,
  class: "view-placeholder"
}, jn = {
  key: 6,
  class: "view-placeholder"
}, qn = {
  key: 7,
  class: "view-placeholder"
}, Yn = {
  key: 9,
  class: "view-placeholder"
}, Zn = {
  key: 10,
  class: "view-placeholder"
}, Xn = {
  key: 11,
  class: "view-placeholder"
}, Jn = {
  key: 12,
  class: "view-placeholder"
}, Qn = {
  key: 13,
  class: "view-placeholder"
}, el = { class: "dialog-content env-selector-dialog" }, tl = { class: "dialog-header" }, ol = { class: "dialog-body" }, al = { class: "env-list" }, sl = { class: "env-info" }, nl = { class: "env-name-row" }, ll = { class: "env-indicator" }, rl = { class: "env-name" }, il = {
  key: 0,
  class: "env-branch"
}, cl = {
  key: 1,
  class: "current-label"
}, dl = { class: "env-stats" }, ul = ["onClick"], ml = { class: "toast-container" }, gl = { class: "toast-icon" }, fl = { class: "toast-message" }, vl = /* @__PURE__ */ U({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: i }) {
    const s = i, {
      getStatus: l,
      getHistory: p,
      exportEnv: m,
      getBranches: h,
      checkout: k,
      createBranch: y,
      switchBranch: S,
      getEnvironments: I
    } = me(), v = C(null), D = C([]), V = C([]), Q = C([]), G = H(() => Q.value.find((z) => z.is_current)), M = C(!1), O = C(null), Y = C(null), ee = C(!1), T = C("status"), B = C("this-env");
    function f(z, r) {
      T.value = z, B.value = r;
    }
    function g(z) {
      const Z = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[z];
      Z && f(Z.view, Z.section);
    }
    const n = C(null), w = C([]);
    let _ = 0;
    function E(z, r = "info", Z = 3e3) {
      const se = ++_;
      return w.value.push({ id: se, message: z, type: r }), Z > 0 && setTimeout(() => {
        w.value = w.value.filter((ge) => ge.id !== se);
      }, Z), se;
    }
    function P(z) {
      w.value = w.value.filter((r) => r.id !== z);
    }
    function F(z) {
      switch (z) {
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
    const ie = H(() => {
      if (!v.value) return "neutral";
      const z = v.value.workflows, r = z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || v.value.has_changes;
      return v.value.comparison.is_synced ? r ? "warning" : "success" : "error";
    });
    H(() => v.value ? ie.value === "success" ? "All synced" : ie.value === "warning" ? "Uncommitted changes" : ie.value === "error" ? "Not synced" : "" : "");
    async function L() {
      M.value = !0, O.value = null;
      try {
        const [z, r, Z, se] = await Promise.all([
          l(),
          p(),
          h(),
          I()
        ]);
        v.value = z, D.value = r.commits, V.value = Z.branches, Q.value = se, s("statusUpdate", z);
      } catch (z) {
        O.value = z instanceof Error ? z.message : "Failed to load status", v.value = null, D.value = [], V.value = [];
      } finally {
        M.value = !1;
      }
    }
    function j(z) {
      Y.value = z;
    }
    async function ae(z) {
      var Z;
      Y.value = null;
      const r = v.value && (v.value.workflows.new.length > 0 || v.value.workflows.modified.length > 0 || v.value.workflows.deleted.length > 0 || v.value.has_changes);
      n.value = {
        title: r ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: r ? "You have uncommitted changes that will be lost." : `Checkout commit ${z.short_hash || ((Z = z.hash) == null ? void 0 : Z.slice(0, 7))}?`,
        details: r ? Te() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: r ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: r,
        onConfirm: async () => {
          var N;
          n.value = null;
          const se = E(`Checking out ${z.short_hash || ((N = z.hash) == null ? void 0 : N.slice(0, 7))}...`, "info", 0), ge = await k(z.hash, r);
          P(se), ge.status === "success" ? E("Restarting ComfyUI...", "success") : E(ge.message || "Checkout failed", "error");
        }
      };
    }
    async function _e(z) {
      const r = v.value && (v.value.workflows.new.length > 0 || v.value.workflows.modified.length > 0 || v.value.workflows.deleted.length > 0 || v.value.has_changes);
      n.value = {
        title: r ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: r ? "You have uncommitted changes." : `Switch to branch "${z}"?`,
        details: r ? Te() : void 0,
        warning: r ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: r ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          n.value = null;
          const Z = E(`Switching to ${z}...`, "info", 0), se = await S(z, r);
          P(Z), se.status === "success" ? E("Restarting ComfyUI...", "success") : E(se.message || "Branch switch failed", "error");
        }
      };
    }
    async function xe(z) {
      const r = E(`Creating branch ${z}...`, "info", 0), Z = await y(z);
      P(r), Z.status === "success" ? (E(`Branch "${z}" created`, "success"), await L()) : E(Z.message || "Failed to create branch", "error");
    }
    async function et(z) {
      Y.value = null;
      const r = prompt("Enter branch name:");
      if (r) {
        const Z = E(`Creating branch ${r}...`, "info", 0), se = await y(r, z.hash);
        P(Z), se.status === "success" ? (E(`Branch "${r}" created from ${z.short_hash}`, "success"), await L()) : E(se.message || "Failed to create branch", "error");
      }
    }
    async function tt(z) {
      ee.value = !1, E("Environment switching not yet implemented", "warning");
    }
    function Te() {
      if (!v.value) return [];
      const z = [], r = v.value.workflows;
      return r.new.length && z.push(`${r.new.length} new workflow(s)`), r.modified.length && z.push(`${r.modified.length} modified workflow(s)`), r.deleted.length && z.push(`${r.deleted.length} deleted workflow(s)`), z;
    }
    async function ot() {
      const z = E("Exporting environment...", "info", 0);
      try {
        const r = await m();
        P(z), r.status === "success" ? (E("Export complete", "success"), alert(`Export successful!

Saved to: ${r.path}

Models without sources: ${r.models_without_sources}`)) : (E("Export failed", "error"), alert(`Export failed: ${r.message}`));
      } catch (r) {
        P(z), E("Export error", "error"), alert(`Export error: ${r instanceof Error ? r.message : "Unknown error"}`);
      }
    }
    return de(L), (z, r) => {
      var Z, se, ge;
      return o(), a("div", Ln, [
        t("div", Mn, [
          t("div", Bn, [
            r[20] || (r[20] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            v.value ? (o(), a("div", Tn)) : u("", !0)
          ]),
          t("div", On, [
            t("button", {
              class: R(["icon-btn", { spinning: M.value }]),
              onClick: L,
              title: "Refresh"
            }, [...r[21] || (r[21] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            t("button", {
              class: "icon-btn",
              onClick: r[0] || (r[0] = (N) => s("close")),
              title: "Close"
            }, [...r[22] || (r[22] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        t("div", Dn, [
          r[24] || (r[24] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          t("button", {
            class: "env-switcher-btn",
            onClick: r[1] || (r[1] = (N) => ee.value = !0)
          }, [
            v.value ? (o(), a("div", Nn, [
              t("span", null, c(((Z = G.value) == null ? void 0 : Z.name) || ((se = v.value) == null ? void 0 : se.environment) || "Loading..."), 1),
              t("span", Rn, "(" + c(v.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            r[23] || (r[23] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", Wn, [
          t("div", Un, [
            t("div", An, [
              r[25] || (r[25] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "status" && B.value === "this-env" }]),
                onClick: r[2] || (r[2] = (N) => f("status", "this-env"))
              }, " STATUS ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "workflows" }]),
                onClick: r[3] || (r[3] = (N) => f("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "models-env" }]),
                onClick: r[4] || (r[4] = (N) => f("models-env", "this-env"))
              }, " MODELS ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "branches" }]),
                onClick: r[5] || (r[5] = (N) => f("branches", "this-env"))
              }, " BRANCHES ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "history" }]),
                onClick: r[6] || (r[6] = (N) => f("history", "this-env"))
              }, " HISTORY ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "nodes" }]),
                onClick: r[7] || (r[7] = (N) => f("nodes", "this-env"))
              }, " NODES ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "debug-env" }]),
                onClick: r[8] || (r[8] = (N) => f("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            r[28] || (r[28] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Vn, [
              r[26] || (r[26] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "environments" }]),
                onClick: r[9] || (r[9] = (N) => f("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "model-index" }]),
                onClick: r[10] || (r[10] = (N) => f("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "settings" }]),
                onClick: r[11] || (r[11] = (N) => f("settings", "all-envs"))
              }, " SETTINGS ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "debug-workspace" }]),
                onClick: r[12] || (r[12] = (N) => f("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            r[29] || (r[29] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Pn, [
              r[27] || (r[27] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "export" }]),
                onClick: r[13] || (r[13] = (N) => f("export", "sharing"))
              }, " EXPORT ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "import" }]),
                onClick: r[14] || (r[14] = (N) => f("import", "sharing"))
              }, " IMPORT ", 2),
              t("button", {
                class: R(["sidebar-item", { active: T.value === "remotes" }]),
                onClick: r[15] || (r[15] = (N) => f("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          t("div", Hn, [
            O.value ? (o(), a("div", Gn, c(O.value), 1)) : !v.value && T.value === "status" ? (o(), a("div", Fn, " Loading status... ")) : (o(), a(W, { key: 2 }, [
              T.value === "status" ? (o(), x(Et, {
                key: 0,
                status: v.value
              }, null, 8, ["status"])) : T.value === "workflows" ? (o(), x(Ka, {
                key: 1,
                onRefresh: L
              })) : T.value === "models-env" ? (o(), x(an, {
                key: 2,
                onNavigate: g
              })) : T.value === "branches" ? (o(), x(Ut, {
                key: 3,
                branches: V.value,
                current: ((ge = v.value) == null ? void 0 : ge.branch) || null,
                onSwitch: _e,
                onCreate: xe
              }, null, 8, ["branches", "current"])) : T.value === "history" ? (o(), x(Yt, {
                key: 4,
                commits: D.value,
                onSelect: j,
                onCheckout: ae
              }, null, 8, ["commits"])) : T.value === "nodes" ? (o(), a("div", Kn, [...r[30] || (r[30] = [
                t("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                t("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : T.value === "debug-env" ? (o(), a("div", jn, [...r[31] || (r[31] = [
                t("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                t("p", null, "Environment logs view coming soon...", -1)
              ])])) : T.value === "environments" ? (o(), a("div", qn, [...r[32] || (r[32] = [
                t("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                t("p", null, "Environment management UI coming soon...", -1)
              ])])) : T.value === "model-index" ? (o(), x(nn, { key: 8 })) : T.value === "settings" ? (o(), a("div", Yn, [...r[33] || (r[33] = [
                t("h3", { class: "view-title" }, "SETTINGS", -1),
                t("p", null, "Settings UI coming soon...", -1)
              ])])) : T.value === "debug-workspace" ? (o(), a("div", Zn, [...r[34] || (r[34] = [
                t("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                t("p", null, "Workspace logs view coming soon...", -1)
              ])])) : T.value === "export" ? (o(), a("div", Xn, [
                r[36] || (r[36] = t("h3", { class: "view-title" }, "EXPORT", -1)),
                t("button", {
                  class: "export-btn",
                  onClick: ot
                }, [...r[35] || (r[35] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  b(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : T.value === "import" ? (o(), a("div", Jn, [...r[37] || (r[37] = [
                t("h3", { class: "view-title" }, "IMPORT", -1),
                t("p", null, "Import UI coming soon...", -1)
              ])])) : T.value === "remotes" ? (o(), a("div", Qn, [...r[38] || (r[38] = [
                t("h3", { class: "view-title" }, "REMOTES", -1),
                t("p", null, "Git remotes UI coming soon...", -1)
              ])])) : u("", !0)
            ], 64))
          ])
        ]),
        Y.value ? (o(), x($n, {
          key: 0,
          commit: Y.value,
          onClose: r[16] || (r[16] = (N) => Y.value = null),
          onCheckout: ae,
          onCreateBranch: et
        }, null, 8, ["commit"])) : u("", !0),
        n.value ? (o(), x(zn, {
          key: 1,
          title: n.value.title,
          message: n.value.message,
          details: n.value.details,
          warning: n.value.warning,
          confirmLabel: n.value.confirmLabel,
          cancelLabel: n.value.cancelLabel,
          secondaryLabel: n.value.secondaryLabel,
          secondaryAction: n.value.secondaryAction,
          destructive: n.value.destructive,
          onConfirm: n.value.onConfirm,
          onCancel: r[17] || (r[17] = (N) => n.value = null),
          onSecondary: n.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        ee.value ? (o(), a("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: r[19] || (r[19] = ye((N) => ee.value = !1, ["self"]))
        }, [
          t("div", el, [
            t("div", tl, [
              r[40] || (r[40] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: r[18] || (r[18] = (N) => ee.value = !1)
              }, [...r[39] || (r[39] = [
                t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            t("div", ol, [
              r[41] || (r[41] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", al, [
                (o(!0), a(W, null, K(Q.value, (N) => (o(), a("div", {
                  key: N.name,
                  class: R(["env-item", { current: N.is_current }])
                }, [
                  t("div", sl, [
                    t("div", nl, [
                      t("span", ll, c(N.is_current ? "●" : "○"), 1),
                      t("span", rl, c(N.name), 1),
                      N.current_branch ? (o(), a("span", il, "(" + c(N.current_branch) + ")", 1)) : u("", !0),
                      N.is_current ? (o(), a("span", cl, "CURRENT")) : u("", !0)
                    ]),
                    t("div", dl, c(N.workflow_count) + " workflows • " + c(N.node_count) + " nodes ", 1)
                  ]),
                  N.is_current ? u("", !0) : (o(), a("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (jl) => tt(N.name)
                  }, " SWITCH ", 8, ul))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        t("div", ml, [
          $(nt, { name: "toast" }, {
            default: d(() => [
              (o(!0), a(W, null, K(w.value, (N) => (o(), a("div", {
                key: N.id,
                class: R(["toast", N.type])
              }, [
                t("span", gl, c(F(N.type)), 1),
                t("span", fl, c(N.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), hl = /* @__PURE__ */ A(vl, [["__scopeId", "data-v-315c8db1"]]), pl = { class: "base-textarea-wrapper" }, yl = ["value", "rows", "placeholder", "disabled", "maxlength"], bl = {
  key: 0,
  class: "base-textarea-count"
}, wl = /* @__PURE__ */ U({
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
  setup(e) {
    return (i, s) => (o(), a("div", pl, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (l) => i.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          s[1] || (s[1] = ke(ye((l) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = ke(ye((l) => i.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, yl),
      e.showCharCount && e.maxLength ? (o(), a("div", bl, c(e.modelValue.length) + " / " + c(e.maxLength), 1)) : u("", !0)
    ]));
  }
}), kl = /* @__PURE__ */ A(wl, [["__scopeId", "data-v-5516e6fc"]]), _l = { class: "commit-popover" }, xl = { class: "popover-header" }, $l = { class: "popover-body" }, Cl = {
  key: 0,
  class: "changes-summary"
}, Sl = {
  key: 0,
  class: "change-item"
}, El = {
  key: 1,
  class: "change-item"
}, Il = {
  key: 2,
  class: "change-item"
}, zl = {
  key: 3,
  class: "change-item"
}, Ll = {
  key: 4,
  class: "change-item"
}, Ml = {
  key: 1,
  class: "no-changes"
}, Bl = {
  key: 2,
  class: "loading"
}, Tl = { class: "message-section" }, Ol = { class: "popover-footer" }, Dl = /* @__PURE__ */ U({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: i }) {
    const s = e, l = i, { commit: p } = me(), m = C(""), h = C(!1), k = C(null), y = H(() => {
      if (!s.status) return !1;
      const I = s.status.workflows;
      return I.new.length > 0 || I.modified.length > 0 || I.deleted.length > 0 || s.status.has_changes;
    });
    async function S() {
      var I, v, D;
      if (!(!y.value || !m.value.trim() || h.value)) {
        h.value = !0, k.value = null;
        try {
          const V = await p(m.value.trim());
          V.status === "success" ? (k.value = {
            type: "success",
            message: `Committed: ${((I = V.summary) == null ? void 0 : I.new) || 0} new, ${((v = V.summary) == null ? void 0 : v.modified) || 0} modified, ${((D = V.summary) == null ? void 0 : D.deleted) || 0} deleted`
          }, m.value = "", setTimeout(() => l("committed"), 1e3)) : V.status === "no_changes" ? k.value = { type: "error", message: "No changes to commit" } : k.value = { type: "error", message: V.message || "Commit failed" };
        } catch (V) {
          k.value = { type: "error", message: V instanceof Error ? V.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (I, v) => (o(), a("div", _l, [
      t("div", xl, [
        v[4] || (v[4] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: v[0] || (v[0] = (D) => l("close"))
        }, [...v[3] || (v[3] = [
          t("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      t("div", $l, [
        e.status && y.value ? (o(), a("div", Cl, [
          e.status.workflows.new.length ? (o(), a("div", Sl, [
            v[5] || (v[5] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, c(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          e.status.workflows.modified.length ? (o(), a("div", El, [
            v[6] || (v[6] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, c(e.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          e.status.workflows.deleted.length ? (o(), a("div", Il, [
            v[7] || (v[7] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, c(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          e.status.git_changes.nodes_added.length ? (o(), a("div", zl, [
            v[8] || (v[8] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, c(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), a("div", Ll, [
            v[9] || (v[9] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, c(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : e.status ? (o(), a("div", Ml, " No changes to commit ")) : (o(), a("div", Bl, " Loading... ")),
        t("div", Tl, [
          $(kl, {
            modelValue: m.value,
            "onUpdate:modelValue": v[1] || (v[1] = (D) => m.value = D),
            placeholder: y.value ? "Describe your changes..." : "No changes",
            disabled: !y.value || h.value,
            rows: 3,
            onCtrlEnter: S
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        k.value ? (o(), a("div", {
          key: 3,
          class: R(["result", k.value.type])
        }, c(k.value.message), 3)) : u("", !0)
      ]),
      t("div", Ol, [
        $(ne, {
          variant: "secondary",
          onClick: v[2] || (v[2] = (D) => l("close"))
        }, {
          default: d(() => [...v[10] || (v[10] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $(ne, {
          variant: "primary",
          disabled: !y.value || !m.value.trim() || h.value,
          loading: h.value,
          onClick: S
        }, {
          default: d(() => [
            b(c(h.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Nl = /* @__PURE__ */ A(Dl, [["__scopeId", "data-v-4f587977"]]), Rl = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .commit-item{border-radius:var(--cg-radius-md);border-left:3px solid var(--cg-color-border-subtle);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', Wl = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Ul = {
  comfy: Rl,
  phosphor: Wl
}, Me = "comfy", Ze = "comfygit-theme";
let fe = null, Xe = Me;
function Al() {
  try {
    const e = localStorage.getItem(Ze);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Me;
}
function Je(e = Me) {
  fe && fe.remove(), fe = document.createElement("style"), fe.id = "comfygit-theme-styles", fe.setAttribute("data-theme", e), fe.textContent = Ul[e], document.head.appendChild(fe), document.body.setAttribute("data-comfygit-theme", e), Xe = e;
  try {
    localStorage.setItem(Ze, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function Vl() {
  return Xe;
}
function Pl(e) {
  Je(e);
}
const Be = document.createElement("link");
Be.rel = "stylesheet";
Be.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Be);
const Hl = Al();
Je(Hl);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), Pl(e);
  },
  getTheme: () => {
    const e = Vl();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let re = null, le = null, we = null;
const pe = C(null);
async function ze() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const i = await window.app.api.fetchApi("/v2/comfygit/status");
    i.ok && (pe.value = await i.json());
  } catch {
  }
}
function Gl() {
  if (!pe.value) return !1;
  const e = pe.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || pe.value.has_changes;
}
function Fl() {
  re && re.remove(), re = document.createElement("div"), re.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", re.appendChild(e), re.addEventListener("click", (l) => {
    l.target === re && Ie();
  });
  const i = (l) => {
    l.key === "Escape" && (Ie(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Ue({
    render: () => Ae(hl, {
      onClose: Ie,
      onStatusUpdate: (l) => {
        pe.value = l, Ce();
      }
    })
  }).mount(e), document.body.appendChild(re);
}
function Ie() {
  re && (re.remove(), re = null);
}
function Kl(e) {
  be(), le = document.createElement("div"), le.className = "comfygit-commit-popover-container";
  const i = e.getBoundingClientRect();
  le.style.position = "fixed", le.style.top = `${i.bottom + 8}px`, le.style.right = `${window.innerWidth - i.right}px`, le.style.zIndex = "10001";
  const s = (p) => {
    le && !le.contains(p.target) && p.target !== e && (be(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const l = (p) => {
    p.key === "Escape" && (be(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), we = Ue({
    render: () => Ae(Nl, {
      status: pe.value,
      onClose: be,
      onCommitted: () => {
        be(), ze().then(Ce);
      }
    })
  }), we.mount(le), document.body.appendChild(le);
}
function be() {
  we && (we.unmount(), we = null), le && (le.remove(), le = null);
}
let ce = null;
function Ce() {
  if (!ce) return;
  const e = ce.querySelector(".commit-indicator");
  e && (e.style.display = Gl() ? "block" : "none");
}
const Qe = document.createElement("style");
Qe.textContent = `
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
document.head.appendChild(Qe);
Ee.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, l;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const i = document.createElement("button");
    i.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", i.textContent = "ComfyGit", i.title = "ComfyGit Control Panel", i.onclick = Fl, ce = document.createElement("button"), ce.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ce.innerHTML = 'Commit <span class="commit-indicator"></span>', ce.title = "Quick Commit", ce.onclick = () => Kl(ce), e.appendChild(i), e.appendChild(ce), (l = (s = Ee.menu) == null ? void 0 : s.settingsGroup) != null && l.element && (Ee.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ze(), Ce(), setInterval(async () => {
      await ze(), Ce();
    }, 3e4);
  }
});
