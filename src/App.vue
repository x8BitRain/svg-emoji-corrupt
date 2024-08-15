<template>
  <div class="root">
    <Canvas />
    <Panel />
  </div>
</template>

<script setup lang="ts">
import Panel from "./components/Panel.vue";
import Canvas from "./components/Canvas.vue";
import { onMounted } from "vue";
import SVGService from "./services/SVGService.ts";
import { CorruptionMode } from "./index";

// Hooks

onMounted(() => {
  window.getCorrupters = () => SVGService.corruptionModes.value;
  window.addCorrupter = (corrupter: CorruptionMode) =>
    SVGService.addCorrupter(corrupter);
});
</script>

<style scoped>
.root {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
