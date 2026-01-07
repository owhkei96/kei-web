<script setup>
import { useI18n } from "vue-i18n";
import Timeline from "primevue/timeline";
import Chip from "primevue/chip";
import Image from "primevue/image";

const { t } = useI18n();

function formatMonthYear(dateStr) {
  const date = new Date(dateStr);

  const monthKey = date
    .toLocaleString("en-US", { month: "short" }) // Jan, Feb, Jul
    .slice(0, 3);

  const year = date.getFullYear();

  return `${t(`${monthKey}`)} ${year}`;
}

defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <Timeline :value="data" align="left">
    <template #content="{ item, index }">
      <div class="flex flex-col gap-2" :class="{ 'pb-5': index !== data.length - 1 }">
        <div class="flex flex-row gap-3">
          <Image
            :src="`/images/user0502/${item.icon}`"
            class="flex-none"
            image-class="w-[60px] h-[60px] rounded-md cz-image-border"
          />
          <div class="block">
            <label class="cz-subtitle">
              {{ item.company }}
            </label>
            <label class="cz-hint mt-0.5">
              {{ formatMonthYear(item.from) }} -
              {{ item.years > 0 ? item.years + $t("years") : "" }}
              {{ item.months > 0 ? item.months + $t("months") : "" }}
            </label>
          </div>
        </div>

        <ul role="list" class="space-y-2">
          <li
            v-for="item in item.responsibility"
            :key="item"
            class="relative pl-4 before:absolute before:left-0 before:content-['-']"
          >
            <label>{{ $t(item) }}</label>
          </li>
        </ul>
        <div class="space-x-2 space-y-2 mt-2">
          <Chip v-for="item in item.keyword" :key="item">
            <label class="cz-hint-coding">{{ item }}</label>
          </Chip>
        </div>
      </div>
    </template>
  </Timeline>
</template>

<style scoped>
::v-deep(.p-timeline-event-opposite) {
  display: none;
}
</style>
