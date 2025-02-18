<template>
  <div
    class="mx-auto max-w-1300px"
    :class="
      viewport.isLessThan('tablet') ? 'px-24px py-32px' : 'px-24px py-48px'
    "
  >
    <p class="text-2xl font-bold mb-24px">
      How We Helped Businesses Like Yours
    </p>

    <UCarousel
      :ui="{
        container: 'gap-16px',
        item: viewport.isLessThan('tablet') ? 'basis-full' : '',
        arrows: {
          wrapper: 'flex items-center justify-start gap-8px mt-8px',
        },
      }"
      :items="items"
      arrows
      class="mb-24px"
    >
      <template #default="{ item }">
        <div
          class="bg-black rounded-lg overflow-hidden h-full"
          :class="
            viewport.isLessThan('tablet')
              ? 'flex flex-col'
              : 'min-w-[600px] w-[40vw] grid grid-cols-3'
          "
        >
          <div class="bg-primary-500 flex flex-col justify-between">
            <div
              class="flex gap-8px justify-center"
              :class="viewport.isLessThan('tablet') ? 'p-16px' : 'p-24px'"
            >
              <img
                v-for="(item, key) in item.logos"
                :key="key"
                :src="item"
                :class="
                  viewport.isLessThan('tablet')
                    ? 'w-1/3 max-w-[100px]'
                    : 'w-1/2'
                "
              />
            </div>

            <img
              :src="item.bg"
              :class="
                viewport.isLessThan('tablet')
                  ? 'w-full h-[200px] object-cover object-top'
                  : ''
              "
            />
          </div>

          <div
            class="col-span-2"
            :class="viewport.isLessThan('tablet') ? 'p-16px' : 'p-24px'"
          >
            <p class="text-white text-2xl font-bold mb-24px">
              {{ item.title }}
            </p>
            <div v-html="item.description" class="text-white text-md" />
          </div>
        </div>
      </template>

      <template #prev="{ onClick, disabled }">
        <button :disabled="disabled" @click="onClick">
          <UIcon
            name="i-heroicons-arrow-left-circle"
            class="w-8 h-8 button"
            :class="disabled ? 'opacity-50' : ''"
          />
        </button>
      </template>

      <template #next="{ onClick, disabled }">
        <button :disabled="disabled" @click="onClick">
          <UIcon
            name="i-heroicons-arrow-right-circle"
            class="w-8 h-8 button"
            :class="disabled ? 'opacity-50' : ''"
          />
        </button>
      </template>
    </UCarousel>

    <div
      :class="
        viewport.isLessThan('tablet')
          ? 'grid grid-cols-3 gap-24px'
          : 'grid grid-cols-6 gap-32px'
      "
    >
      <div v-for="(brand, key) in brands" :key="key" class="group">
        <img
          :src="brand"
          class="object-contain w-full h-full group-hover:hidden grayscale max-h-32px object-center"
        />
        <img
          :src="brand"
          class="hidden object-contain w-full h-full group-hover:block max-h-32px object-center"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();

import nami from "~/assets/pages/for-brands/case-studies/nami.png";
import homeDawn from "~/assets/pages/for-brands/case-studies/home-dawn.png";
import namiBg from "~/assets/pages/for-brands/case-studies/nami-bg.png";
import bonback from "~/assets/pages/for-brands/case-studies/bonback.png";
import bonbackBg from "~/assets/pages/for-brands/case-studies/bonback-bg.png";
import smilefam from "~/assets/pages/for-brands/case-studies/smilefam.png";
import smilefamBg from "~/assets/pages/for-brands/case-studies/smilefam-bg.png";

let items = [
  {
    title: "Home Dawn & Nami Korean Grill House",
    description: `
    <p><span class="font-semibold">Experience:</span> Korean BBQ & Casual Dining</p>
    <p class="mb-16px"><span class="font-semibold">Deliverable Type:</span> Influencer Post</p>
    <p class="font-semibold mb-8px"><span class="text-3xl font-bold text-primary-500">2</span> brands</p>
    <p class="font-semibold mb-8px"><span class="text-3xl font-bold text-primary-500">10</span> nano influencers</p>
    <p class="font-semibold"><span class="text-3xl font-bold text-primary-500">21,700+</span> reached</p>`,
    logos: [nami, homeDawn],
    bg: namiBg,
  },
  {
    title: "Bonback Bird’s Next",
    description: `
    <p><span class="font-semibold">Product:</span> High-Concentration Cave Bird’s Nest</p>
    <p class="mb-16px"><span class="font-semibold">Deliverable Type:</span> Influencer Post</p>
    <p class="font-semibold mb-8px"><span class="text-3xl font-bold text-primary-500">3</span> months of daily posting</p>
    <p class="font-semibold mb-8px"><span class="text-3xl font-bold text-primary-500">90</span> nano influencers</p>
    <p class="font-semibold"><span class="text-3xl font-bold text-primary-500">200k+</span> reached</p>`,
    logos: [bonback],
    bg: bonbackBg,
  },
  {
    title: "SmileFam",
    description: `
    <p><span class="font-semibold">Product:</span> Toothbrush and Teeth Whitening Kit</p>
    <p class="mb-16px"><span class="font-semibold">Deliverable Type:</span> UGC content</p>
    <p class="font-semibold mb-8px"><span class="text-3xl font-bold text-primary-500">1</span> month</p>
    <p class="font-semibold mb-8px"><span class="text-3xl font-bold text-primary-500">2</span> products</p>
    <p class="font-semibold"><span class="text-3xl font-bold text-primary-500">13</span> videos by unique UGC Creators</p>`,
    logos: [smilefam],
    bg: smilefamBg,
  },
];

let brands = [
  "/brands/athena-scents.png",
  "/brands/averyday.png",
  "/brands/bonback.png",
  "/brands/charcoal-crab.png",
  "/brands/chicas.png",
  "/brands/four-start.png",
  "/brands/printvolution.png",
  "/brands/savoureux.png",
  "/brands/singapaw.png",
  "/brands/smilefam.png",
  "/brands/claypot-prawn.png",
  "/brands/work-store.png",
];
</script>
