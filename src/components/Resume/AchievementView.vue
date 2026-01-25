<script setup>
import { useDownload } from "../../composables/useDownload";

defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col h-full" v-for="item in data" :key="item" :value="item">
    <div class="flex items-center gap-3 p-2 cz-bottom-divider">
      <i class="pi pi-paperclip" />
      <a :href="item.preview" target="_blank">
        <label class="cz-highlight-small cursor-pointer text-start">
          {{ item.title }}
        </label>
      </a>

      <button @click="useDownload(item.link)">
        <i class="pi pi-download cursor-pointer" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
