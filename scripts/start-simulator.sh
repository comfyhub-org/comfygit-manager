#!/bin/bash
# Start the comfygit-manager server in simulator mode

set -e

SCRIPT_PATH="$(readlink -f "${BASH_SOURCE[0]}")"
SCRIPT_DIR="$(dirname "$SCRIPT_PATH")"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

RUNPOD_IMAGE="runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"

# Check if image exists, prompt to pull if not
if ! docker images "$RUNPOD_IMAGE" -q | grep -q .; then
    echo "RunPod base image not found locally."
    echo ""
    read -p "Pull image now? (~15GB) [y/N] " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        "$SCRIPT_DIR/pull-runpod-image.sh"
    else
        echo "Image will be pulled automatically on first deploy (may cause delay)"
    fi
fi

# Set simulator environment
export DEPLOY_BACKEND=local

# Detect GPU availability
if command -v nvidia-smi &> /dev/null && nvidia-smi &> /dev/null; then
    export SIMULATOR_GPU_MODE=${SIMULATOR_GPU_MODE:-gpu}
    echo "GPU detected - using GPU mode"
else
    export SIMULATOR_GPU_MODE=cpu
    echo "No GPU detected - using CPU mode"
fi

echo ""
echo "Starting in SIMULATOR mode"
echo "  DEPLOY_BACKEND=$DEPLOY_BACKEND"
echo "  SIMULATOR_GPU_MODE=$SIMULATOR_GPU_MODE"
echo "  RUNPOD_IMAGE=$RUNPOD_IMAGE"
echo ""
echo "Deploy operations will use local Docker instead of RunPod."
echo ""

# Start the dev server (passes through all args)
exec "$SCRIPT_DIR/comfygit-dev" "$@"
