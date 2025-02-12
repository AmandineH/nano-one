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
      <p class="text-2xl font-bold text-white mb-16px">What We Do</p>

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

import influencerPosts from "~/assets/pages/for-brands/influencer-posts.png";
import ugc from "~/assets/pages/for-brands/ugc.png";
import contentCreation from "~/assets/pages/for-brands/content-creation.png";

let items = [
  {
    slot: "influencer-posts",
    label: "Influencer Posts",
    content: `<p class="text-white text-md font-medium mb-8px">
                Nano and micro influencers create and share content on their own
                social pages to showcase your brand.
              </p>

              <p class="text-white text-md font-bold">Creative Control</p>
              <p class="text-white text-md font-medium mb-8px">
                Influencers retain creative freedom to craft content that
                resonates with their audience.
              </p>

              <p class="text-white text-md font-bold">Content Rights</p>
              <p class="text-white text-md font-medium">
                Content remains influencers’ properties and requires a loading
                fees for brands to reuse it.
              </p>`,
    src: influencerPosts,
  },
  {
    slot: "ugc",
    label: "User-Generated Content",
    content: `<p class="text-white text-md font-medium mb-8px">
                Video testimonials of your products and experiences that are
                ideal for video ads.
              </p>

              <p class="text-white text-md font-bold">Creative Control</p>
              <p class="text-white text-md font-medium mb-8px">
                Brands have control over content, working closely with creators
                through up to 2 revisions.
              </p>

              <p class="text-white text-md font-bold">Content Rights</p>
              <p class="text-white text-md font-medium">
                Brands have full rights to use content across campaigns and ads
                without additional fees.
              </p>`,
    src: ugc,
  },
  {
    slot: "content-creation",
    label: "Content Creation",
    content: `<p class="text-white text-md font-medium mb-8px">
                We handle everything from concept to execution, ensuring your
                brand stands out on social media.
              </p>

              <p class="text-white text-md font-medium mb-8px">
                Our team develops story-driven ideas, produces high-quality
                videos and photos, sources the right talent, and crafts
                compelling scripts and captions.
              </p>

              <p class="text-white text-md font-medium">
                Every piece of content is optimized for platforms like Instagram
                and TikTok, designed to engage your audience and drive results.
              </p>`,
    src: contentCreation,
  },
];
</script>
