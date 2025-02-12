<template>
  <div class="bg-black relative">
    <div
      class="mx-auto gap-24px max-w-1300px"
      :class="
        viewport.isLessThan('tablet')
          ? 'px-16px py-32px pb-0 pr-0'
          : 'px-24px py-48px pb-0'
      "
    >
      <p class="text-2xl font-bold text-white mb-16px">How We Work Together</p>

      <UCarousel
        :ui="{ container: 'gap-16px', item: 'basis-full' }"
        v-if="viewport.isLessThan('tablet')"
        ref="carouselRef"
        :items="items"
        v-slot="{ item, index }"
        indicators
        class="w-full"
      >
        <div :class="viewport.isLessThan('tablet') ? 'flex flex-col' : ''">
          <div
            class="flex-grow"
            :class="viewport.isLessThan('tablet') ? 'pr-16px' : ''"
          >
            <div
              class="grid grid-cols-5 gap-16px w-full border-1 border-white rounded-md px-16px py-8px mb-24px"
            >
              <p class="text-lg font-semibold text-left text-white">
                0{{ index + 1 }}
              </p>
              <p
                class="text-lg font-semibold col-span-4 truncate text-left text-white"
              >
                {{ item.label }}
              </p>
            </div>

            <div v-html="item.content" />
          </div>

          <img
            :src="item.src"
            class="object-contain object-right-bottom w-full max-h-320px"
          />
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
        class="w-full"
      >
        <template #default="{ item, index, selected }">
          <div class="grid grid-cols-5 gap-16px w-full">
            <p
              class="text-lg font-semibold text-left"
              :class="[selected ? 'text-white' : 'text-gray-700']"
            >
              0{{ index + 1 }}
            </p>
            <p
              class="text-lg font-semibold col-span-4 truncate text-left"
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

import influencerPosts from "~/assets/pages/for-creators/influencer-posts.png";
import influencers from "~/assets/pages/for-creators/talent.png";
import contentCreation from "~/assets/pages/for-brands/content-creation.png";

let items = [
  {
    slot: "business-goal",
    label: "Tell Us About Your Business Goal",
    content: `<p class="text-white text-md font-medium mb-8px">
                Share with us about your target market, what you’re promoting, and what our influencers will receive in return.
              </p>`,
    src: influencerPosts,
  },
  {
    slot: "influencers",
    label: "Confirm Your Influencers",
    content: `<p class="text-white text-md font-medium mb-8px">
                We'll match you with a curated list from our network of over 450 nano and micro influencers and UGC creators.
              </p>`,
    src: influencers,
  },
  {
    slot: "content-creation",
    label: "Get Your Content",
    content: `<p class="text-white text-md font-medium mb-8px">
                Our creators and influencers will share their experiences with your product and experiences through short videos.
              </p>`,
    src: contentCreation,
  },
];
</script>
