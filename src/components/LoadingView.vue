<script setup>
import Image from 'primevue/image'
import Divider from 'primevue/divider'
import Skeleton from 'primevue/skeleton'
import Card from 'primevue/card'
import { ref, onMounted, onUnmounted } from 'vue'

const chibiImages = ['/chibi/chibi1_loading.png', '/chibi/chibi2_loading.png']
const chibiSrc = ref('')
const dots = ref('')

let timer

onMounted(() => {
  const index = Math.floor(Math.random() * chibiImages.length)
  chibiSrc.value = chibiImages[index]

  timer = setInterval(() => {
    dots.value = dots.value.length >= 3 ? '' : dots.value + '.'
  }, 500)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="flex flex-col gap-y-3 cz-padding-y w-full">
    <div
      class="grid grid-cols-[auto_1fr_90px] md:grid-cols-[auto_1fr_100px] gap-x-3 items-center mx-2"
    >
      <Skeleton shape="circle" size="100px" />
      <div class="space-y-3">
        <Skeleton width="200px" height="20px" />
        <Skeleton width="150px" />
      </div>
    </div>

    <div class="flex w-full rounded-lg justify-center">
      <div class="self-center w-full lg:w-8/12 grid grid-rows-[auto_auto] items-center gap-2 p-10">
        <Image class="flex justify-center" :src="chibiSrc" alt="chibi" width="200" />
        <div class="flex flex-col justify-center text-center text-wrap">
          <label class="cz-exlarge">{{ $t('loading') }}{{ dots }}</label>
          <label class="cz-coding">{{ $t('msg_loading') }}</label>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 gap-y-3 [@media(min-width:900px)]:grid-cols-[350px_1fr] [@media(min-width:900px)]:gap-x-3"
    >
      <div class="self-start flex flex-col gap-y-3">
        <!-- Contact -->
        <Card class="flex-auto">
          <template #content>
            <div class="space-y-3">
              <Skeleton class="mb-5" width="150px" height="20px" />
              <Skeleton width="300px" />
              <Skeleton width="260px" />
              <Skeleton width="210px" />
            </div>
          </template>
        </Card>
      </div>

      <div class="self-start flex flex-col gap-y-3">
        <!-- Contact -->
        <Card class="flex-1">
          <template #content>
            <div class="space-y-3">
              <Skeleton class="mb-5" width="150px" height="20px" />
              <Skeleton width="100%" />
              <Skeleton width="80%" />
              <Skeleton width="60%" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
