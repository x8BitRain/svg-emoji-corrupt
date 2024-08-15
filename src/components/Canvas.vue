<template>
  <div class="github">
    <a href="https://github.com/x8BitRain/svg-emoji-corrupt" target="_blank"
      >Github</a
    >
  </div>
  <div ref="canvas" class="canvas">
    <div ref="svg"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Panzoom from "@panzoom/panzoom";
import SVGService from "../services/SVGService.ts";

// Data

const canvas = ref();
const svg = ref();

onMounted(() => {
  const panzoom = Panzoom(canvas.value);
  canvas.value.addEventListener("wheel", (event: WheelEvent) => {
    panzoom.zoomWithWheel(event);
  });
  SVGService.init(svg, panzoom);
});

// Debug

import.meta.hot?.accept(() => window.location.reload());
</script>

<style scoped>
.canvas {
  display: grid;
  place-items: center;
  margin-right: 30rem;
  height: 100%;
  width: 100%;
}

.github {
  position: absolute;
  bottom: 0;
  margin: 1rem;
  color: #1e87f0;
  z-index: 99;
}

@media only screen and (max-width: 800px) {
  .canvas {
    margin-right: 0;
    margin-bottom: 20rem;
    height: calc(100% - 20rem);
  }

  .github {
    bottom: unset;
    top: 0;
    margin: 0.5rem;
    color: #000;
  }
}
</style>
