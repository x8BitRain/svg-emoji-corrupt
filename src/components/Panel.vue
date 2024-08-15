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
        />
      </div>
      <div class="panel__section">
        <span>Corruption mode</span>
        <div>
          <select v-model="selectedCorruptionMode" class="input__select">
            <option
              v-for="mode in corruptionModes"
              :key="mode.id"
              :value="mode.id"
            >
              {{ mode.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="panel__section">
        <span>Target Values</span>
        <div class="section__target-values">
          <label
            v-for="(_number, index) in targetValues"
            :for="'target-values-' + index"
          >
            <input
              :id="'target-values-' + index"
              type="checkbox"
              :value="targetValues[index]"
              v-model="targetValues[index]"
              @change="setTargetValues"
            />
            {{ index }}</label
          >
        </div>
      </div>
      <div class="panel__section">
        <label for="replace-value">Replace Value: {{ replaceValue }}</label>
        <input
          class="input__text"
          v-model="replaceValue"
          id="replace-value"
          step="1"
          max="100"
          min="0"
          type="range"
          @input="setReplaceValue"
        />
      </div>
      <div class="panel__section"></div>
      <div class="panel__section">
        <button @click="SVGService.corruptSvg()">Corrupt SVG</button>
      </div>
      <div class="panel__section">
        <button @click="SVGService.resetSvg()">Reset SVG</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { importSVG } from "../utils/file-select.ts";
import SVGService from "../services/SVGService.ts";
import { computed, ref, watch } from "vue";

const svgInput = ref("");
const targetValues = ref(new Array(10).fill(Boolean(false)));
const replaceValue = ref(0);
const corruptionModes = SVGService.corruptionModes;

// Methods

const uploadSVG = async () => {
  const uploadedSVG = await importSVG();
  await SVGService.loadFromString(uploadedSVG);
};

const setTargetValues = () => {
  SVGService.setTargetValues(targetValues.value);
  SVGService.corruptSvg();
};

const setReplaceValue = () => {
  console.log(replaceValue.value);
  SVGService.setReplaceValue(replaceValue.value);
  SVGService.corruptSvg();
};

// Computed

const selectedCorruptionMode = computed({
  get() {
    return SVGService.currentCorruptionMode.id;
  },
  set(id: string) {
    SVGService.setCorruptionMode(id);
  },
});

// Hooks

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

.panel__section {
  margin-bottom: 1rem;
}

.section__target-values {
  display: flex;
  justify-content: space-around;
  align-items: center;
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

.input__select {
  box-sizing: border-box;
  width: 100%;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
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
