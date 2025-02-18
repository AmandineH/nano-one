<template>
  <div class="bg-black">
    <div
      class="mx-auto max-w-1300px"
      :class="
        viewport.isLessThan('tablet') ? 'px-24px py-32px' : 'px-24px py-48px'
      "
    >
      <p class="text-2xl font-bold text-white mb-24px">Why Work With Us</p>

      <div
        :class="
          viewport.isLessThan('tablet')
            ? 'flex flex-col gap-16px'
            : 'grid grid-cols-2 gap-16px'
        "
      >
        <div
          v-for="(reason, key) in reasons"
          :key="key"
          class="grid flex-grow grid-cols-4 border-white border-1 rounded-8px relative"
        >
          <p
            class="col-span-4 text-lg font-bold text-primary-500 px-16px pt-16px"
          >
            {{ reason.title }}
          </p>
          <p class="col-span-3 text-white text-md px-16px pb-16px">
            {{ reason.description }}
          </p>

          <img
            :src="reason.src"
            class="absolute bottom-0 right-0 object-contain object-bottom h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();
const { $manipulate } = useNuxtApp();

import costEffective from "~/assets/pages/for-brands/cost-effective.png";
import simple from "~/assets/pages/for-brands/simple.png";
import scalable from "~/assets/pages/for-brands/scalable.png";
import engagement from "~/assets/pages/for-brands/engagement.png";

let reasons = [
  {
    title: "Cost-Effective",
    description:
      "Work with multiple influencers at a fraction of the cost of one traditional paid collaboration.",
    src: costEffective,
  },
  {
    title: "Clear & Simple",
    description:
      "No complex contracts or unpredictable pricing. We manage entire campaigns",
    src: simple,
  },
  {
    title: "Scalable Impact",
    description:
      "Easily scale up your campaigns to align with your marketing budget.",
    src: scalable,
  },
  {
    title: "Authentic Engagement",
    description:
      "Nano and micro influencers drive higher engagement rates than larger influencers.",
    src: engagement,
  },
];
</script>
