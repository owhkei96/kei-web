<script setup>
defineProps({
  born: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
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
});
</script>

<template>
  <div class="flex flex-col h-full justify-center">
    <div class="flex items-center gap-3 p-2 cz-bottom-divider">
      <i class="pi pi-mars" />
      <label>{{ $t("born_in") }} {{ born }}</label>
    </div>

    <div class="flex items-center gap-3 p-2 cz-bottom-divider">
      <i class="pi pi-map-marker" />
      <label>{{ $t(city) }}, {{ $t(country) }}</label>
    </div>

    <div class="flex items-center gap-3 p-2 cz-bottom-divider">
      <i class="pi pi-envelope" />
      <a :href="`mailto:${email}`">
        <label class="cz-highlight cursor-pointer">{{ email }}</label>
      </a>
    </div>

    <div class="flex items-center gap-3 p-2 cz-bottom-divider">
      <i class="pi pi-whatsapp" />
      <a
        :href="'https://api.whatsapp.com/send?phone=' + contact.replace(/\D+/g, '')"
        target="_blank"
      >
        <label class="cz-highlight cursor-pointer">{{ contact }}</label>
      </a>
    </div>

    <div class="flex items-center gap-3 p-2">
      <i class="pi pi-linkedin" />
      <a :href="'https://www.linkedin.com/in/' + url?.LinkedIn" target="_blank">
        <label class="cz-highlight cursor-pointer"> {{ url?.LinkedIn }} </label>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
