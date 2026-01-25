<script setup>
import { useI18n } from "vue-i18n";
import Card from "primevue/card";
import Image from "primevue/image";
import { onMounted, ref } from "vue";
import { useImage } from "../composables/useImage";

import ImageView from "../components/ImageView.vue";
import InfoContactView from "../components/Resume/InfoContactView.vue";
import EducationView from "../components/Resume/EducationView.vue";
import WorkExperienceView from "../components/Resume/WorkExperienceView.vue";
import SkillView from "../components/Resume/SkillView.vue";
import OtherView from "../components/Resume/OtherView.vue";
import AchievementView from "../components/Resume/AchievementView.vue";
import LanguageView from "../components/Resume/LanguageView.vue";

const { t } = useI18n();

const chibiImages = [
  "/chibi/chibi1_struggling.png",
  "/chibi/chibi1_thumbup.png",
  "/chibi/chibi1_working.png",
];

const chibiSrc = ref("");
const show = ref(false);

const props = defineProps({
  apiData: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const index = Math.floor(Math.random() * chibiImages.length);
  chibiSrc.value = chibiImages[index];

  requestAnimationFrame(() => {
    show.value = true;
  });
});
</script>

<template>
  <div class="flex flex-col gap-y-3 cz-padding-y">
    <Transition name="fade-only">
      <div
        v-if="show"
        class="grid grid-cols-[auto_1fr_90px] md:grid-cols-[auto_1fr_100px] [@media(max-width:385px)]:grid-cols-[auto_1fr] gap-x-3 items-center mx-2"
      >
        <ImageView
          :photo="props.apiData?.photo"
          class="border-2 border-(--cz-title) hover-enlarge cz-print-hide"
        />

        <Image
          class="self-end hover-enlarge w-[90px] h-[90px] md:w-[100px] md:h-[100px] cz-print-only [@media(max-width:385px)]:hidden!"
          :src="chibiSrc"
          alt="chibi"
          preview
        >
          <template #previewicon>
            <i class="pi pi-arrow-up-right-and-arrow-down-left-from-center" />
          </template>
        </Image>

        <div>
          <label class="cz-title">{{ props.apiData?.name }}</label>
          <label class="cz-highlight">{{ $t(props.apiData?.title) }}</label>
          <label class="cz-hint-coding cz-print-only">
            <a :href="props.apiData?.link"> {{ props.apiData?.link }} </a>
          </label>
        </div>

        <Image
          class="self-end hover-enlarge w-[90px] h-[90px] md:w-[100px] md:h-[100px] cz-print-hide [@media(max-width:385px)]:hidden!"
          :src="chibiSrc"
          alt="chibi"
          preview
        >
          <template #previewicon>
            <i class="pi pi-arrow-up-right-and-arrow-down-left-from-center" />
          </template>
        </Image>
      </div>
    </Transition>

    <div
      class="grid grid-cols-1 gap-y-3 [@media(min-width:900px)]:grid-cols-[360px_1fr] [@media(min-width:900px)]:gap-x-3"
    >
      <Transition name="slide-left">
        <div
          v-if="show"
          class="self-start flex flex-col gap-y-3 order-2 [@media(min-width:900px)]:order-1"
        >
          <!-- Info & Contact -->
          <div class="hidden [@media(min-width:900px)]:block">
            <Card class="flex-auto hover-enlarge">
              <template #content>
                <label class="cz-subtitle">{{ $t("info_and_contact") }}</label>
                <InfoContactView
                  :born="props.apiData?.born"
                  :city="props.apiData?.city"
                  :country="props.apiData?.country"
                  :email="props.apiData?.email"
                  :contact="props.apiData?.contact"
                  :url="props.apiData?.url"
                />
              </template>
            </Card>
          </div>

          <!-- Skill -->
          <Card class="flex-auto hover-enlarge">
            <template #content>
              <SkillView
                :advanced="props.apiData?.skill.advanced"
                :foundation="props.apiData?.skill.foundation"
                :familiar="props.apiData?.skill.familiar"
              />
            </template>
          </Card>

          <!-- Other -->
          <Card class="flex-auto hover-enlarge">
            <template #content>
              <OtherView :tools="props.apiData?.skill.tools" />
            </template>
          </Card>

          <!-- Language -->
          <Card class="flex-auto hover-enlarge">
            <template #content>
              <label class="cz-subtitle">{{ $t("language") }}</label>
              <LanguageView :language="props.apiData?.language" />
            </template>
          </Card>

          <!-- Achievement -->
          <Card class="flex-auto hover-enlarge">
            <template #content>
              <label class="cz-subtitle">{{ $t("achievement") }}</label>
              <AchievementView :data="props.apiData?.achievement" />
            </template>
          </Card>
        </div>
      </Transition>

      <Transition name="slide-right">
        <div
          v-if="show"
          class="self-start flex flex-col gap-y-3 order-1 [@media(min-width:900px)]:order-2"
        >
          <!-- Contact -->
          <div class="block [@media(min-width:900px)]:hidden">
            <Card class="flex-auto hover-enlarge">
              <template #content>
                <label class="cz-subtitle">{{ $t("contact") }}</label>
                <ContactView
                  :email="props.apiData?.email"
                  :contact="props.apiData?.contact"
                  :url="props.apiData?.url"
                />
              </template>
            </Card>
          </div>

          <!-- Description -->
          <Card class="flex-auto hover-enlarge">
            <template #content>
              <label class="cz-subtitle mb-2">{{ $t("description") }}</label>
              <div class="flex flex-col space-y-2 text-start">
                <label v-for="item in props.apiData?.description" :key="item">
                  <i18n-t :keypath="item" scope="global">
                    <template #dotnet_maui>
                      <strong class="text-(--cz-title)">{{ t("dotnet_maui") }}</strong>
                    </template>
                  </i18n-t>
                </label>

                <div class="flex flex-row justify-center items-center space-x-3">
                  <label class="cz-coding text-2xl md:text-3xl">{</label>
                  <Image
                    v-for="item in props.apiData?.expertise"
                    :key="item"
                    :src="useImage(item)"
                    :alt="item"
                    width="50"
                    height="50"
                    class="shrink-0"
                  />
                  <label class="cz-coding text-2xl md:text-3xl">}</label>
                </div>
              </div>
            </template>
          </Card>

          <!-- Technical Skill -->
          <Card class="flex-auto hover-enlarge">
            <template #content>
              <label class="cz-subtitle mb-2">{{ $t("technical_skill") }}</label>
              <div class="flex flex-col gap-y-2">
                <div
                  v-for="item in props.apiData?.technical_skill"
                  :key="item"
                  class="flex flex-row gap-x-2"
                >
                  <label>
                    <span class="cz-highlight">{{ $t(item) }}:</span>
                    {{ $t(`msg_${item}`) }}
                  </label>
                </div>
              </div>
            </template>
          </Card>

          <!-- Working Experience -->
          <Card class="flex-auto hover-enlarge">
            <template #content>
              <label class="cz-subtitle mb-5">{{ $t("work") }}</label>
              <WorkExperienceView :data="props.apiData?.work" />
            </template>
          </Card>

          <!-- Education -->
          <Card class="flex-auto hover-enlarge">
            <template #content>
              <label class="cz-subtitle mb-5">{{ $t("education") }}</label>
              <EducationView :data="props.apiData?.education" />
            </template>
          </Card>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped></style>
