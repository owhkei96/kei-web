<script setup>
import ResumeView from './views/ResumeView.vue'
import ComponentView from './views/ComponentView.vue'

import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  // optional: initialize from current DOM or localStorage
  isDark.value = document.documentElement.classList.contains('app-dark')
})

// toggle function you can bind to a button
function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('app-dark', isDark.value)
}
</script>

<template>
  <div :class="isDark ? 'app-dark' : ''">
    <button @click="isDark = !isDark" class="px-3 py-1">
      Toggle: {{ isDark ? 'Dark' : 'Light' }}
    </button>

    <slot />
  </div>

  <div class="p-4">
    <czButton @click="toggleDark" class="px-3 py-1 rounded">
      Toggle dark (now: {{ isDark ? 'dark' : 'light' }})
    </czButton>
  </div>
  <ComponentView />
</template>

<style scoped></style>
