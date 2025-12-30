<script setup>
import Rating from 'primevue/rating'
import { computed } from 'vue'
import score_on from '../../images/score_blue.svg'
import score_off from '../../images/score_blue_light.svg'

const props = defineProps({
  language: {
    type: Object,
    required: true,
  },
})

const languageEntries = computed(() => Object.entries(props.language))
</script>

<template>
  <div class="space-y-1">
    <div v-for="[langKey, level] in languageEntries" :key="langKey">
      <div class="grid grid-cols-[75px_max-content] justify-start items-center gap-x-5">
        <!-- Language -->
        <label class="text-sm text-right"> {{ $t(langKey) }}: </label>

        <!-- RIGHT COLUMN -->
        <div class="grid grid-cols-[1fr_1fr] w-max">
          <!-- Rating spans both columns -->
          <div class="col-span-2">
            <Rating
              v-model="level.score"
              :stars="5"
              readonly
              :pt="{ root: { class: 'inline-flex w-auto' } }"
            >
              <template #onicon>
                <img :src="score_on" height="auto" class="star-size shrink-0" />
              </template>
              <template #officon>
                <img :src="score_off" height="auto" class="star-size shrink-0" />
              </template>
            </Rating>
          </div>

          <!-- Reading (left aligned with stars) -->
          <label class="cz-hint-coding text-left">
            {{ $t('reading') }}: {{ level.reading ?? 'N/A' }}
          </label>

          <!-- Listening (right aligned with stars) -->
          <label class="cz-hint-coding text-right">
            {{ $t('listening') }}: {{ level.listening ?? 'N/A' }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.star-size {
  width: 38px; /* default */
}

@media (max-width: 385px) {
  .star-size {
    width: 28px; /* override for small screens */
  }
}
</style>
