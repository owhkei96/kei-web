<script setup>
defineProps({
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  url: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col h-full justify-center">
    <div class="flex items-center gap-3 p-2 cz-bottom-divider">
      <i class="pi pi-envelope"></i>
      <a :href="`mailto:${email}`">
        <label class="cz-highlight cursor-pointer">{{ email }}</label>
      </a>
    </div>

    <div class="flex items-center gap-3 p-2 cz-bottom-divider">
      <i class="pi pi-phone"></i>
      <a
        :href="'https://api.whatsapp.com/send?phone=' + contact.replace(/\D+/g, '')"
        target="_blank"
      >
        <label class="cz-highlight cursor-pointer">{{ contact }}</label>
      </a>
    </div>

    <div class="flex items-center gap-3 p-2">
      <i class="pi pi-linkedin"></i>
      <a :href="'https://www.linkedin.com/in/' + url?.LinkedIn" target="_blank">
        <label class="cz-highlight cursor-pointer"> {{ url?.LinkedIn }} </label>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
