<script setup>
import Timeline from 'primevue/timeline'
import Image from 'primevue/image'

defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <Timeline :value="data" align="left">
    <template #content="{ item, index }">
      <div class="flex flex-col gap-2" :class="{ 'pb-5': index !== data.length - 1 }">
        <div class="flex flex-row gap-3">
          <Image
            :src="`/images/user0502/${item.icon}`"
            class="flex-none"
            image-class="w-[60px] h-[60px] object-cover rounded-md cz-image-border"
          />
          <div class="flex-1 block">
            <label class="cz-subtitle">
              {{ item.title }}
            </label>
            <label class="italic">{{ item.institution }}</label>
            <label class="cz-hint my-0.5"> {{ item.from }} - {{ item.to }} </label>
            <label class="cz-highlight">{{ item.cgpa }} cgpa</label>
          </div>
        </div>
      </div>
    </template>
  </Timeline>
</template>

<style scoped>
::v-deep(.p-timeline-event-opposite) {
  display: contents;
}
</style>
