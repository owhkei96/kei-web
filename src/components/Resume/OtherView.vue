<script setup>
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import Chip from "primevue/chip";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  tools: {
    type: Array,
    required: true,
  },
  ai: {
    type: Array,
    required: true,
  },
});
const selected = ref(["tools", "ai"]);

const itemGroups = Object.entries(props);

const getHint = (key) => {
  return `${t(`msg_${key}`)}`;
};
</script>

<template>
  <Accordion :value="selected" multiple>
    <AccordionPanel v-for="[name, items] in itemGroups" :key="name" :value="name">
      <AccordionHeader>
        <label class="cz-subtitle">{{ $t(name) }}</label>
      </AccordionHeader>
      <AccordionContent>
        <label class="cz-hint-coding mb-3">{{ getHint(name) }}</label>
        <div class="space-x-2 space-y-2 mt-2">
          <Chip v-for="item in items" :key="item">
            <label class="cz-highlight">{{ item }}</label>
          </Chip>
        </div>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<style scoped></style>
