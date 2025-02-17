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
      <p class="text-2xl font-bold text-white mb-16px">
        How We Can Work Together
      </p>

      <UCarousel
        :ui="{ container: 'gap-16px', item: 'basis-full' }"
        v-if="viewport.isLessThan('tablet')"
        :items="items"
        v-slot="{ item, index }"
        indicators
      >
        <div :class="viewport.isLessThan('tablet') ? 'flex flex-col' : ''">
          <div
            class="flex-grow"
            :class="viewport.isLessThan('tablet') ? 'pr-24px' : ''"
          >
            <div
              class="grid w-full grid-cols-5 border-white rounded-md gap-16px border-1 px-24px py-8px mb-24px"
            >
              <p class="text-lg font-bold text-left text-white">
                0{{ index + 1 }}
              </p>
              <p
                class="col-span-4 text-lg font-bold text-left text-white truncate"
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

        <template #influencer-posts="{ item }">
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

        <template #ugc="{ item }">
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

        <template #talent-modeling="{ item }">
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
import ugc from "~/assets/pages/for-creators/ugc.png";
import talent from "~/assets/pages/for-creators/talent.png";

let items = [
  {
    slot: "influencer-posts",
    label: "Influencer Posts",
    content: `<p class="font-bold text-white text-md mb-8px">
                Leverage Your Influence & Get Rewarded
              </p>

              <p class="font-medium text-white text-md mb-8px">
                Brands are actively looking for creators like you to share their stories. Join a growing community of influencers who get exclusive access to paid collaborations, free products, and unique experiences. 
              </p>

              <p class="font-medium text-white text-md">
                Your content can shape buying decisions—don't miss your chance to be part of something bigger.
              </p>`,
    src: influencerPosts,
  },
  {
    slot: "ugc",
    label: "User-Generated Content",
    content: `<p class="font-bold text-white text-md mb-8px">
                Create. Earn. No Posting Required.
              </p>

              <p class="font-medium text-white text-md mb-8px">
                Love creating content but don’t want to post on your own feed? Brands need fresh, high-quality visuals for their ads, websites, and social media. 
              </p>

              <p class="font-medium text-white text-md">
                Many creators are already earning through UGC—why not you? It’s risk-free, flexible, and a great way to monetize your creativity.
              </p>`,
    src: ugc,
  },
  {
    slot: "talent-modeling",
    label: "Talent & Modeling",
    content: `<p class="font-bold text-white text-md mb-8px">
                Get Featured in Brand Campaigns
              </p>

              <p class="font-medium text-white text-md mb-8px">
                Work with top brands as a model or talent for product shoots, lifestyle visuals, and video campaigns. 
              </p>

              <p class="font-medium text-white text-md">
                Whether it's for fashion, beauty, food, or lifestyle brands, your look and presence can bring their vision to life.
              </p>`,
    src: talent,
  },
];
</script>
