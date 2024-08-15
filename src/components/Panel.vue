<template>
  <div class="panel">
    <div class="panel__inner">
      <div class="panel__section">
        <div class="input">
          <div>
            <label for="svg-input">SVG string or URL</label>
          </div>
          <button class="input__file" @click="uploadSVG">Upload SVG</button>
        </div>
        <input
          class="input__text"
          v-model="svgInput"
          id="svg-input"
          type="text"
          @change="inputSVG"
          @paste="inputSVG"
        />
      </div>
      <div class="panel__section"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { importSVG } from "../utils/file-select.ts";
import SVGService from "../services/SVGService.ts";
import { nextTick, ref, watch } from "vue";

const svgInput = ref("");

const uploadSVG = async () => {
  const uploadedSVG = await importSVG();
  await SVGService.loadFromString(uploadedSVG);
};

watch(svgInput, () => {
  console.log(svgInput.value);
  SVGService.loadFromString(svgInput.value);
});
</script>

<style scoped>
.panel {
  position: absolute;
  background-color: #213547;
  height: 100%;
  width: 30rem;
  right: 0;
}

.panel__inner {
  display: grid;
  margin: 2rem;
}

.input {
  width: 100%;
  display: flex;
}

.input__text {
  box-sizing: border-box;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: #fff;
  color: #000;
}

.input__file {
  margin-left: auto;
}
</style>
