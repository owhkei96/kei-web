<script setup>
import Image from "primevue/image";
import Divider from "primevue/divider";
import { ref, onMounted } from "vue";

const chibiImages = ["/chibi/chibi1_error.png", "/chibi/chibi2_error.png"];

const chibiSrc = ref("");

onMounted(() => {
  const index = Math.floor(Math.random() * chibiImages.length);
  chibiSrc.value = chibiImages[index];
});

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="grid max-lg:grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-2 p-10 bg-(--cz-box) rounded-lg"
  >
    <Image class="flex justify-center" :src="chibiSrc" alt="chibi" width="200" />
    <Divider class="hidden! lg:block!" layout="vertical" />
    <Divider class="block! lg:hidden!" />
    <div class="flex flex-col justify-center text-center text-wrap">
      <label class="cz-title">{{ $t("error") }}:</label>
      <label v-for="message in msg" :key="message" class="cz-highlight">{{
        message
      }}</label>
      <br />
      <label class="cz-coding">{{ $t("msg_visit_later") }}</label>
    </div>
  </div>
</template>

<style scoped></style>
