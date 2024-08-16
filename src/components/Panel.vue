<template>
  <div class="panel">
    <div class="panel__inner">
      <div class="panel__section">
        <div class="input">
          <div>
            <label for="svg-input">SVG string or URL</label>
          </div>
          <button class="file-select" @click="uploadSVG">Upload SVG</button>
        </div>
        <input v-model="svgInput" id="svg-input" type="text" />
      </div>
      <div class="panel__section">
        <span>Corruption mode</span>
        <div>
          <select v-model="selectedCorruptionModeId">
            <option
              v-for="mode in corruptionModes"
              :key="mode.id"
              :value="mode.id"
            >
              {{ mode.name }}
            </option>
          </select>
        </div>
        <small>
          {{ selectedCorruptionMode.description }}
        </small>
      </div>
      <div class="panel__section" v-if="!selectedCorruptionMode?.random">
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
        <RangeSlider
          v-model="replaceValue"
          :label="selectedCorruptionMode.name"
          id="replace-value"
          step="1"
          max="100"
          min="0"
          type="range"
          @input="setReplaceValue"
        />
      </div>
      <div class="panel__section">
        <div class="section__corrupt-buttons">
          <button class="corrupt" @click="SVGService.corruptSvg()">
            Corrupt SVG
          </button>
          <button class="reset" @click="SVGService.resetSvg()">
            Reset SVG
          </button>
          <button class="download" @click="SVGService.exportSvgToPng()">
            Download PNG
          </button>
          <button class="download" @click="SVGService.exportSVG()">
            Download SVG
          </button>
        </div>
      </div>
      <div class="panel__section">
        <EmojiPicker />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { importSVG } from "../utils/file-select.ts";
import SVGService from "../services/SVGService.ts";
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import RangeSlider from "./inputs/RangeSlider.vue";

// Data

const svgInput = ref("");
const targetValues = ref(new Array(10).fill(Boolean(false)));
const replaceValue = ref(0);
const corruptionModes = SVGService.corruptionModes;
const EmojiPicker = defineAsyncComponent(
  () => import("./inputs/EmojiPicker.vue"),
);

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
  SVGService.setReplaceValue(replaceValue.value);
  SVGService.corruptSvg();
};

// Computed

const selectedCorruptionModeId = computed({
  get() {
    return SVGService.currentCorruptionMode.id;
  },
  set(id: string) {
    SVGService.setCorruptionMode(id);
    SVGService.corruptSvg();
  },
});

const selectedCorruptionMode = computed(() => SVGService.currentCorruptionMode);

// Hooks

watch(svgInput, () => {
  SVGService.loadFromString(svgInput.value);
});

onMounted(() => {
  targetValues.value[8] = true;
  SVGService.setTargetValues(targetValues.value);
});
</script>

<style scoped>
.panel {
  position: absolute;
  background-color: #213547;
  height: 100%;
  width: 30rem;
  right: 0;
  overflow-y: scroll;
}

@media only screen and (max-width: 800px) {
  .panel {
    right: unset;
    bottom: 0;
    width: 100%;
    height: 20rem;
  }
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

.section__corrupt-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.section__corrupt-buttons > button {
  padding: 0.5rem;
  color: white;
  border: none;
  cursor: pointer;
}

.section__corrupt-buttons > button.corrupt {
  background-color: #f0506e;
}

.section__corrupt-buttons > button.reset {
  background-color: #1e87f0;
}

.input {
  width: 100%;
  display: flex;
}

.file-select {
  margin-left: auto;
}
</style>
