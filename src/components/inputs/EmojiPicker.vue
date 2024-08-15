<template>
  <div v-if="emojiData && emojiData.length > 0">
    <label for="emoji-search">Search</label>
    <input v-model="emojiSearch" id="emoji-search" type="text" />
    <div>
      <div v-for="category in filteredEmojis">
        <h3>
          {{ category.title }}
        </h3>
        <div class="emoji-body">
          <div
            class="emoji-image"
            v-for="emojis in category.emojis"
            @click="onSelectEmoji(EMOJI_URL + emojis.u.u + '.svg')"
          >
            <img
              :src="EMOJI_URL + emojis.u.u + '.svg'"
              @click="onSelectEmoji(emojis)"
              loading="lazy"
              :alt="emojis.n?.join(', ')"
              onerror='this.style.display = "none"'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SVGService from "../../services/SVGService.ts";
import { computed, onMounted, ref } from "vue";
import { EmojiGroup, EmojiInfo } from "../../index";

// Data

const EMOJI_URL =
  "https://fastly.jsdelivr.net/gh/limin04551/vue3-twemoji-picker/public/img/svg/";
const emojiData = ref();
const emojiSearch = ref("");

// Methods

const onSelectEmoji = (emoji: string) => {
  SVGService.loadFromString(emoji);
};

// Computed

const filteredEmojis = computed(() => {
  if (!emojiSearch.value) {
    return emojiData.value;
  } else {
    const _emojiGroups: EmojiGroup[] = [];
    for (const group of emojiData.value) {
      const _emojiInfos: EmojiInfo[] = [];
      for (const emojiInfo of group.emojis) {
        if (
          emojiInfo.n.join("").includes(emojiSearch.value.toLocaleLowerCase())
        ) {
          let result = emojiInfo.u;

          _emojiInfos.push({
            ...emojiInfo,
            r: result,
          });
        }
      }
      if (_emojiInfos.length)
        _emojiGroups.push({ ...group, emojis: _emojiInfos });
    }

    return _emojiGroups;
  }
});

// Hooks

onMounted(async () => {
  const emojiImport = await import("../../config/emojis.json");
  emojiData.value = emojiImport.default;
});
</script>

<style scoped>
.emoji-body {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-bottom: 3rem;
}

.emoji-image {
  height: 18px;
  width: 18px;
  cursor: pointer;
}

.emoji-image:hover {
  transform: scale(2);
}
</style>
