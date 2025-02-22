<template>
  <div>
    <div
      class="mx-auto max-w-1300px"
      :class="
        viewport.isLessThan('tablet')
          ? 'flex flex-col px-24px py-32px gap-24px'
          : 'grid grid-cols-2 px-24px py-48px gap-24px'
      "
    >
      <img
        v-if="viewport.isLessThan('tablet')"
        src="~/assets/pages/landing/hero-mobile.jpg"
      />

      <div class="flex flex-col justify-center">
        <p
          class="text-4xl font-bold mb-8px text-black"
          :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
        >
          Effortless
          <span class="text-primary-500">UGC & Influencer Marketing</span> for
          Startups & SMEs
        </p>

        <p
          class="text-lg mb-24px text-black"
          :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
        >
          We connect ambitious brands with creators to craft authentic,
          impactful content for meaningful products and experiences.
        </p>

        <div class="flex gap-8px flex-wrap">
          <UButton
            to="/new-campaign"
            color="black"
            :class="viewport.isLessThan('tablet') ? 'flex-grow' : ''"
          >
            <p
              :class="viewport.isLessThan('tablet') ? 'text-center w-full' : ''"
            >
              Start New Campaign
            </p>
          </UButton>

          <UButton
            to="https://forms.gle/DnWaexsMEWPAN5Pj7"
            target="_blank"
            variant="outline"
            color="black"
            :class="viewport.isLessThan('tablet') ? 'flex-grow' : ''"
          >
            <p
              :class="viewport.isLessThan('tablet') ? 'text-center w-full' : ''"
            >
              Join Creator Community
            </p>
          </UButton>
        </div>
      </div>

      <img
        v-if="!viewport.isLessThan('tablet')"
        src="~/assets/pages/landing/hero.png"
      />
    </div>

    <ForCreators />

    <ForBrandsWhat />

    <ForBrands />

    <ForBrandsWhy />

    <div
      class="mx-auto max-w-1300px"
      :class="
        viewport.isLessThan('tablet') ? 'px-24px py-32px' : 'px-24px py-48px'
      "
    >
      <p class="text-2xl font-bold mb-24px text-black">
        Why We Work With Nano & Micro Influencers
      </p>

      <UCarousel
        :ui="{ container: 'gap-16px', item: 'basis-full' }"
        v-if="viewport.isLessThan('tablet')"
        :items="stats"
        v-slot="{ item }"
        indicators
        class="pb-48px"
      >
        <div class="flex flex-col">
          <p class="text-lg font-semibold mb-24px text-primary-500">
            {{ item.description }}
          </p>

          <div class="flex flex-col flex-grow gap-16px">
            <div
              v-for="(number, key) in item.numbers"
              :key="key"
              class="flex-grow border-black rounded-md border-1 p-16px"
            >
              <p class="text-5xl font-bold text-primary-500">
                {{ number.num }}
              </p>

              <p v-html="number.description" class="text-md text-black" />
            </div>
          </div>
        </div>
      </UCarousel>
      <div v-else>
        <div class="grid grid-cols-3 gap-24px mb-24px">
          <div v-for="(stat, key) in stats" :key="key">
            <p class="text-lg font-semibold text-primary-500">
              {{ stat.description }}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-24px">
          <div
            v-for="(stat, key) in stats"
            :key="key"
            class="flex flex-col gap-16px"
          >
            <div
              v-for="(number, key) in stat.numbers"
              :key="key"
              class="flex-grow border-black rounded-md border-1 p-16px"
            >
              <p class="text-5xl font-bold text-primary-500">
                {{ number.num }}
              </p>

              <p v-html="number.description" class="text-md text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary-500">
      <div
        class="mx-auto max-w-1300px"
        :class="
          viewport.isLessThan('tablet')
            ? 'flex flex-col px-24px py-32px gap-24px'
            : 'grid grid-cols-4 px-24px py-48px gap-24px'
        "
      >
        <img
          v-if="viewport.isLessThan('tablet')"
          src="~/assets/pages/landing/question-mark-mobile.png"
        />

        <div
          class="flex flex-col justify-center"
          :class="viewport.isLessThan('tablet') ? '' : 'col-span-3'"
        >
          <p class="text-2xl font-bold text-white mb-24px">Did You Know?</p>

          <p class="text-white text-md mb-8px">
            As many as <span class="font-extrabold">HALF</span> of your
            competitors are already working with influencers and content
            creators to snatch up your market share.
          </p>

          <p class="font-semibold text-white text-md mb-16px">
            Stay ahead of the competition. Get started with your campaign now.
          </p>

          <div class="flex gap-8px">
            <UButton
              to="/new-campaign"
              color="black"
              :class="viewport.isLessThan('tablet') ? 'flex-grow' : ''"
            >
              <p
                :class="
                  viewport.isLessThan('tablet') ? 'text-center w-full' : ''
                "
              >
                Start New Campaign
              </p>
            </UButton>
          </div>
        </div>

        <img
          v-if="!viewport.isLessThan('tablet')"
          src="~/assets/pages/landing/question-mark.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();

useHead({
  title: "NanoOne Influencers",
  meta: [
    {
      name: "description",
      content:
        "We connect ambitious brands with creators to craft authentic, impactful content for meaningful products and experiences.",
    },
  ],
});

let stats = [
  {
    description: "They are abundant & more affordable ...",
    numbers: [
      {
        num: "65%",
        description: `of <span class="underline">all Instagram influencers</span> are nano influencers.`,
      },
      {
        num: "4 million",
        description: `nano influencers exist across various platforms, <span class="underline">spanning numerous niches</span> like fitness, travel, beauty, and more.`,
      },
    ],
  },
  {
    description: "... they have the attention of consumers who trust them ...",
    numbers: [
      {
        num: "72%",
        description: `of consumers <span class="underline">trust</span> advertising, opinions and product placements from influencers.`,
      },
      {
        num: "1 in 4",
        description: `consumers <span class="underline">bought</span> a product based on an influencer’s recommendation.`,
      },
    ],
  },
  {
    description:
      "... and your competitors are using them to reach your customers!",
    numbers: [
      {
        num: "51%",
        description: `of marketers <span class="underline">worked</span> with creators or influencers.`,
      },
      {
        num: "70%",
        description: `of them are <span class="underline">working</span> with Nano and Micro influencers.`,
      },
    ],
  },
];
</script>
