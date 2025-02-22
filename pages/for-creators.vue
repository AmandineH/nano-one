<template>
  <div>
    <div class="bg-primary-500">
      <div
        class="mx-auto max-w-1300px"
        :class="
          viewport.isLessThan('tablet')
            ? 'flex flex-col px-24px py-32px gap-24px'
            : 'grid grid-cols-5 px-24px py-48px gap-24px'
        "
      >
        <div
          class="flex flex-col justify-center col-span-3"
          :class="viewport.isLessThan('tablet') ? 'order-2' : 'order-1'"
        >
          <p
            class="text-4xl font-bold text-white"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Create.
          </p>

          <p
            class="text-4xl font-bold text-white"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Collaborate.
          </p>

          <p
            class="text-4xl font-bold text-white mb-8px"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Get Rewarded.
          </p>

          <p
            class="text-lg text-white mb-24px"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Join a network of creators and work with local brands. Earn free
            products, exclusive experiences, and paid opportunities—all while
            doing what you love.
          </p>

          <div class="flex gap-8px">
            <UButton
              to="https://forms.gle/DnWaexsMEWPAN5Pj7"
              target="_blank"
              color="black"
              :class="viewport.isLessThan('tablet') ? 'flex-grow' : ''"
            >
              <p
                :class="
                  viewport.isLessThan('tablet') ? 'text-center w-full' : ''
                "
              >
                Join Creator Community
              </p>
            </UButton>
          </div>
        </div>
        <img
          src="~/assets/pages/for-creators/hero.png"
          class="object-contain object-center w-full"
          :class="
            viewport.isLessThan('tablet')
              ? 'order-1 max-h-200px'
              : 'order-2 col-span-2 max-h-400px'
          "
        />
      </div>
    </div>

    <ForCreatorsHow />

    <ForCreators :theme="'white'" />

    <div class="bg-black">
      <div
        class="mx-auto max-w-1300px"
        :class="
          viewport.isLessThan('tablet') ? 'px-24px py-32px' : 'px-24px py-48px'
        "
      >
        <p class="text-2xl font-bold text-white mb-24px">Why Work With Us</p>

        <UCarousel
          v-if="viewport.isLessThan('tablet')"
          :ui="{ container: 'gap-16px', item: 'basis-full' }"
          :items="$manipulate.cutArray(reasons, 3)"
          v-slot="{ item }"
          indicators
          class="pb-48px"
        >
          <div class="flex flex-col gap-16px">
            <div
              v-for="(reason, key) in item"
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
                class="absolute bottom-0 right-0 object-contain object-bottom h-full w-1/3"
              />
            </div>
          </div>
        </UCarousel>
        <div
          v-else
          :class="
            viewport.isLessThan('tablet')
              ? 'flex flex-col gap-16px'
              : 'grid grid-cols-2 gap-16px'
          "
        >
          <div
            v-for="(reason, key) in reasons"
            :key="key"
            class="grid grid-cols-4 border-white border-1 rounded-8px relative"
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

    <ForCreatorsTeamGreetings />
  </div>
</template>

<script setup>
const viewport = useViewport();
const { $manipulate } = useNuxtApp();

definePageMeta({
  layout: "dark",
});

useHead({
  title: "For Creators | NanoOne Influencers",
  meta: [
    {
      name: "description",
      content:
        "Create. Collaborate. Get Rewarded. - Join a network of creators and work with local brands. Earn free products, exclusive experiences, and paid opportunities—all while doing what you love.",
    },
  ],
});

import relevant from "~/assets/pages/for-creators/relevant.png";
import productsAndExperiences from "~/assets/pages/for-creators/products-and-experiences.png";
import paidOpportunities from "~/assets/pages/for-creators/paid-opportunities.png";
import matching from "~/assets/pages/for-creators/matching.png";
import hassleFree from "~/assets/pages/for-creators/hassle-free.png";
import exposure from "~/assets/pages/for-creators/exposure.png";

let reasons = [
  {
    title: "Exciting & Relevant Campaigns",
    description:
      "Work on creative brand collaborations that let you showcase your unique style while keeping your audience engaged.",
    src: relevant,
  },
  {
    title: "Free Products & Experiences",
    description:
      "Receive premium products, dining, and lifestyle perks in exchange for creating authentic content.",
    src: productsAndExperiences,
  },
  {
    title: "Paid Opportunities",
    description:
      "Get access to paid collaborations with brands that value high-quality content and strong engagement.",
    src: paidOpportunities,
  },
  {
    title: "Personalized Matching",
    description:
      "We carefully match you with brands that align with your niche, audience, and content style for the best results.",
    src: matching,
  },
  {
    title: "Hassle-Free Experience",
    description:
      "No complicated contracts—just smooth, stress-free campaigns so you can focus on creating.",
    src: hassleFree,
  },
  {
    title: "Exposure & Growth",
    description:
      "Expand your reach and gain more followers through strategic brand partnerships and promotions.",
    src: exposure,
  },
];
</script>
