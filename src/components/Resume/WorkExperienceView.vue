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
        <div class="flex flex-row gap-3 items-center">
          <Image
            :src="`/images/user0502/${item.icon}`"
            class="flex-none"
            image-class="w-[60px] h-[60px] rounded-md cz-image-border "
          />
          <div class="block">
            <label class="cz-subtitle">{{ item.position }} </label>
            <label class="cz-highlight">
              {{ item.company }}
            </label>
            <label class="cz-hint-coding mt-0.5">: {{ $t(item.description) }}</label>
          </div>
        </div>

        <label class="cz-subtitle">
          <i class="pi pi-trophy" /> {{ $t("promotion") }}:
          <template v-for="(item, index) in item.promotion" :key="item">
            <span v-if="index > 0"> &gt; </span>
            <span class="cz-highlight">{{ item }}</span>
          </template>
        </label>

        <div class="block">
          <label class="cz-hint">
            ( {{ formatMonthYear(item.from) }} -
            {{ item.years > 0 ? item.years + $t("years") : "" }}
            {{ item.months > 0 ? item.months + $t("months") : "" }} )
          </label>
        </div>

        <ul role="list" class="space-y-2">
          <li
            v-for="item in item.responsibility"
            :key="item"
            class="relative pl-4 before:absolute before:left-0 before:content-['-']"
          >
            <label>
              <i18n-t :keypath="item" scope="global">
                <template #timetec_modules>
                  <strong class="text-(--cz-title)">{{ t("timetec_modules") }}</strong>
                </template>
                <template #ai_tools>
                  <strong class="text-(--cz-title)">{{ t("ai_tools") }}</strong>
                </template>
                <template #timetec_award>
                  <strong class="text-(--cz-title)">{{ t("timetec_award") }}</strong>
                </template>
              </i18n-t>
            </label>
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
