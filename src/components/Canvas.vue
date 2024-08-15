<template>
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
</script>

<style scoped>
.canvas {
  display: grid;
  place-items: center;
  margin-right: 30rem;
  height: 100%;
  width: 100%;
}
</style>
