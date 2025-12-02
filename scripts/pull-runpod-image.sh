#!/bin/bash
# Pull the RunPod base image used for local simulation
# This is the exact same image that RunPod uses in production

set -e

RUNPOD_IMAGE="runpod/pytorch:2.1.0-py3.10-cuda11.8.0-devel-ubuntu22.04"

echo "Pulling RunPod base image..."
echo "Image: $RUNPOD_IMAGE"
echo "Size: ~15GB - this may take a while on first pull"
echo ""

docker pull "$RUNPOD_IMAGE"

echo ""
echo "Done! Image ready for local simulation."
docker images "$RUNPOD_IMAGE"
