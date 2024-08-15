<template>
  <div class="root">
    <Canvas />
    <Panel />
  </div>
</template>

<script setup lang="ts">
import Panel from "./components/Panel.vue";
import Canvas from "./components/Canvas.vue";
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
