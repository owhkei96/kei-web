<script setup>
import { onMounted } from 'vue'
import SpeedDial from 'primevue/speeddial'
import ResumeView from './views/ResumeView.vue'
import LoadingView from './components/LoadingView.vue'
import ErrorView from './components/ErrorView.vue'
import { useUserData } from './stores/userData'
import { useSleep } from './composables/useSleep'
import { useSetting } from './composables/useSetting'
import { storeToRefs } from 'pinia'

const store = useUserData()
const { data, errorMessage } = storeToRefs(store)
const { getResume, getLocalResume } = store

const { items } = useSetting()

onMounted(async () => {
  // get resume data
  await useSleep(Math.floor(Math.random() * 1000) + 500)
  await getResume()
  if (data.value.length === 0) {
    await useSleep(5000)
    getLocalResume()
  }
})
</script>

<template>
  <main class="flex w-full min-h-screen">
    <div class="flex w-full gap-y-3 justify-center p-5">
      <div
        v-if="data.length === 0"
        class="flex w-full lg:w-10/12 xl:w-8/12 justify-center min-h-[80vh]"
      >
        <LoadingView v-if="errorMessage.length === 0" />
        <ErrorView v-else :msg="errorMessage" />
      </div>

      <div v-else class="flex flex-col w-full lg:w-10/12 xl:w-8/12">
        <ResumeView :apiData="data" />
      </div>
    </div>

    <div class="fixed bottom-6 right-6 z-50">
      <SpeedDial
        :model="items"
        direction="up"
        showIcon="pi pi-plus"
        hideIcon="pi pi-times"
        :buttonProps="{
          rounded: true,
          class: 'w-14 h-14',
        }"
        class="fixed bottom-6 right-6 z-50"
      >
        <template #item="{ item, toggleCallback }">
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full bg-(--cz-box) shadow cursor-pointer text-base uppercase"
            @click="toggleCallback"
          >
            <span v-if="item.text">{{ item.text }}</span>
            <i v-else :class="item.icon" />
          </div>
        </template>
      </SpeedDial>
    </div>
  </main>
</template>

<style scoped></style>
