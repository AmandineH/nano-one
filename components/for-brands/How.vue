<template>
  <div class="relative bg-black">
    <div
      class="mx-auto max-w-1300px"
      :class="
        viewport.isLessThan('tablet')
          ? 'px-24px py-32px pb-0 pr-0'
          : 'px-24px py-48px pb-0'
      "
    >
      <p class="text-2xl font-bold text-white mb-24px">How We Work Together</p>

      <UCarousel
        v-if="viewport.isLessThan('tablet')"
        :ui="{ container: 'gap-16px', item: 'basis-full' }"
        :items="items"
        v-slot="{ item, index }"
        indicators
      >
        <div
          class="flex-grow"
          :class="viewport.isLessThan('tablet') ? 'pr-24px' : ''"
        >
          <div
            class="h-full w-full border-white rounded-md gap-16px border-1 p-16px pb-0 flex flex-col"
          >
            <div class="grid-cols-5 grid mb-16px">
              <p class="text-lg font-bold text-left text-white">
                0{{ index + 1 }}
              </p>
              <p
                class="col-span-4 text-lg font-bold text-left text-white truncate"
              >
                {{ item.label }}
              </p>
            </div>

            <div v-html="item.content" class="flex-grow" />

            <img
              :src="item.src"
              class="object-contain object-right-bottom w-full max-h-320px"
            />
          </div>
        </div>
      </UCarousel>
      <UTabs
        v-else
        :ui="{
          wrapper: 'grid grid-cols-5 gap-4 space-y-0 static',
          container: 'col-span-3 static',
          list: {
            base: 'flex flex-col col-span-2 static pb-48px',
            background: 'bg-black',
            padding: 'p-0',
            height: 'h-14',
            marker: {
              base: 'border-1 border-white',
              background: 'bg-black',
            },
            tab: {
              active: 'text-white',
              height: 'h-12',
            },
          },
        }"
        :items="items"
        orientation="vertical"
      >
        <template #default="{ item, index, selected }">
          <div class="grid w-full grid-cols-5 gap-16px">
            <p
              class="text-lg font-bold text-left"
              :class="[selected ? 'text-white' : 'text-gray-700']"
            >
              0{{ index + 1 }}
            </p>
            <p
              class="col-span-4 text-lg font-bold text-left truncate"
              :class="[selected ? 'text-white' : 'text-gray-700']"
            >
              {{ item.label }}
            </p>
          </div>
        </template>

        <template #business-goal="{ item }">
          <div
            class="grid grid-cols-3 gap-16px"
            :class="viewport.isLessThan('tablet') ? '' : 'pb-48px'"
          >
            <div v-html="item.content" class="col-span-2" />

            <img
              :src="item.src"
              class="object-contain object-bottom"
              :class="
                viewport.isLessThan('tablet')
                  ? ''
                  : 'absolute bottom-0 right-0 h-full'
              "
            />
          </div>
        </template>

        <template #influencers="{ item }">
          <div
            class="grid grid-cols-3 gap-16px"
            :class="viewport.isLessThan('tablet') ? '' : 'pb-48px'"
          >
            <div v-html="item.content" class="col-span-2" />

            <img
              :src="item.src"
              class="object-contain object-bottom"
              :class="
                viewport.isLessThan('tablet')
                  ? ''
                  : 'absolute bottom-0 right-0 h-full'
              "
            />
          </div>
        </template>

        <template #content-creation="{ item }">
          <div
            class="grid grid-cols-3 gap-16px"
            :class="viewport.isLessThan('tablet') ? '' : 'pb-48px'"
          >
            <div v-html="item.content" class="col-span-2" />

            <img
              :src="item.src"
              class="object-contain object-bottom"
              :class="
                viewport.isLessThan('tablet')
                  ? ''
                  : 'absolute bottom-0 right-0 h-full'
              "
            />
          </div>
        </template>
      </UTabs>
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();

import businessGoal from "~/assets/pages/for-brands/business-goal.png";
import influencers from "~/assets/pages/for-creators/talent.png";
import contentCreation from "~/assets/pages/for-brands/content-creation.png";

let items = [
  {
    slot: "business-goal",
    label: "Tell Us About Your Business",
    content: `<p class="font-medium text-white text-md mb-8px">
                Share with us about your target market, what you’re promoting, and what our influencers will receive in return.
              </p>`,
    src: businessGoal,
  },
  {
    slot: "influencers",
    label: "Confirm Your Influencers",
    content: `<p class="font-medium text-white text-md mb-8px">
                We'll match you with a curated list from our network of over 450 nano and micro influencers and UGC creators.
              </p>`,
    src: influencers,
  },
  {
    slot: "content-creation",
    label: "Get Your Content",
    content: `<p class="font-medium text-white text-md mb-8px">
                Our creators and influencers will share their experiences with your product and experiences through short videos.
              </p>`,
    src: contentCreation,
  },
];
</script>
