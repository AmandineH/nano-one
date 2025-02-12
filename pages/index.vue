<template>
  <div>
    <div
      class="mx-auto max-w-1300px"
      :class="
        viewport.isLessThan('tablet')
          ? 'flex flex-col px-16px py-32px'
          : 'grid grid-cols-2 px-24px py-48px gap-24px'
      "
    >
      <img
        v-if="viewport.isLessThan('tablet')"
        src="~/assets/pages/landing/hero-mobile.jpg"
      />

      <div class="flex flex-col justify-center">
        <p
          class="text-4xl font-bold mb-8px"
          :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
        >
          Effortless
          <span class="text-primary-500">UGC & Influencer Marketing</span> for
          Startups & SMEs
        </p>

        <p
          class="text-lg mb-16px"
          :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
        >
          We connect ambitious brands with creators to craft authentic,
          impactful content for meaningful products and experiences.
        </p>

        <div class="flex gap-8px">
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

    <div class="bg-primary-500">
      <div
        class="mx-auto max-w-1300px"
        :class="viewport.isLessThan('tablet') ? 'py-32px' : 'py-48px'"
      >
        <p
          class="font-medium text-white text-md"
          :class="viewport.isLessThan('tablet') ? 'px-16px' : 'px-24px'"
        >
          It’s now easier than ever to build trust and connect with your
          customers because we’ve made creating impactful, attention-grabbing
          content effortless and affordable.
        </p>

        <UCarousel
          ref="carouselRef"
          :ui="{ container: 'gap-16px px-16px' }"
          :items="items"
          v-slot="{ item }"
          arrows
          @mouseover="play = false"
          @mouseleave="play = true"
        >
          <div class="h-320px py-24px">
            <LibraryVideoPlayer :src="item" />
          </div>
        </UCarousel>

        <p
          class="font-medium text-white text-md"
          :class="viewport.isLessThan('tablet') ? 'px-16px' : 'px-24px'"
        >
          Our creators are a diverse community of all ages, backgrounds, and
          ethnicities. Covering a vast range of niches, they craft engaging
          content that resonates with audiences across Instagram and TikTok,
          driving real impact where it matters most.
        </p>
      </div>
    </div>

    <ForBrandsWhat />

    <ForBrandsWhy />

    <div
      class="mx-auto max-w-1300px"
      :class="
        viewport.isLessThan('tablet') ? 'px-16px py-32px' : 'px-24px py-48px'
      "
    >
      <p class="text-2xl font-bold mb-16px">
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
        <div class="flex flex-col gap-16px">
          <p class="text-lg font-semibold mb-16px text-primary-500">
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

              <p v-html="number.description" class="text-md" />
            </div>
          </div>
        </div>
      </UCarousel>
      <div v-else>
        <div class="grid grid-cols-3 gap-24px mb-16px">
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

              <p v-html="number.description" class="text-md" />
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
            ? 'flex flex-col px-16px py-32px'
            : 'grid grid-cols-4 px-24px py-48px gap-24px'
        "
      >
        <div
          class="flex flex-col justify-center"
          :class="
            viewport.isLessThan('tablet') ? 'order-2' : 'col-span-3 order-1'
          "
        >
          <p class="text-2xl font-bold text-white mb-16px">Did You Know?</p>

          <p class="text-white text-md mb-8px">
            As many as <span class="font-extrabold">HALF</span> of your
            competitors are already working with influencers and content
            creators to snatch up your market share.
          </p>

          <p class="font-semibold text-white text-md mb-24px">
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
          src="~/assets/pages/landing/question-mark.png"
          class="object-contain object-center"
          :class="
            viewport.isLessThan('tablet') ? 'order-1 max-h-200px' : 'order-2'
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();

const items = [
  "highlight-1.mov",
  "highlight-2.mov",
  "highlight-3.mp4",
  "highlight-4.mp4",
  "highlight-5.mp4",
  "highlight-6.mp4",
  "highlight-7.mp4",
  "highlight-8.mp4",
  "highlight-9.mp4",
  "highlight-10.mp4",
  "highlight-11.mp4",
  "highlight-12.mp4",
  "highlight-13.mp4",
  "highlight-14.mp4",
  "highlight-15.mp4",
  "highlight-16.mp4",
  "highlight-17.mp4",
  "highlight-18.mov",
  "highlight-19.mov",
];

const carouselRef = ref();

let play = ref(true);

onMounted(() => {
  setInterval(() => {
    if (play.value) {
      if (!carouselRef.value) return;

      if (carouselRef.value.page >= carouselRef.value.pages) {
        return carouselRef.value.select(0);
      }

      carouselRef.value.next();
    }
  }, 3000);
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
