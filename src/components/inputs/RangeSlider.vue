<template>
  <div class="input-slider">
    <label :for="id"> {{ label }}: {{ modelValue }} </label>
    <input :id="id" v-bind="$attrs" :value="modelValue" @input="updateValue" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
  modelValue: string | number;
  label: string;
  id: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<style scoped>
.input-slider {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 0.8rem;
}
</style>
