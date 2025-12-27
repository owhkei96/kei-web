<script setup>
import Image from "primevue/image";

defineProps({
  photo: {
    type: String,
    required: true,
  },
});

const ThumbnailFileName = (fileName) => {
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex === -1) return fileName; // no extension case
  console.log(fileName.slice(0, dotIndex) + "_thumbnail" + fileName.slice(dotIndex));

  return fileName.slice(0, dotIndex) + "_thumbnail" + fileName.slice(dotIndex);
};
</script>

<template>
  <Image class="rounded-full overflow-hidden" preview>
    <!-- thumbnail -->
    <template #image>
      <img
        :src="`/images/user0502/` + ThumbnailFileName(photo)"
        alt="photo thumbnail"
        class="cz-photo-size object-cover rounded-full"
      />
    </template>

    <!-- preview -->
    <template #original="slotProps">
      <img
        :src="`/images/user0502/${photo}`"
        alt="photo full"
        :style="slotProps.style"
        @click="slotProps.onClick"
        class="max-h-[70vh] max-w-[80vw] mx-auto rounded-md border-2 object-contain"
      />
    </template>
  </Image>
</template>

<style scoped></style>
