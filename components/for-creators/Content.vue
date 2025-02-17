<template>
  <div :class="theme === 'white' ? '' : 'bg-primary-500'">
    <div
      class="mx-auto max-w-1300px"
      :class="viewport.isLessThan('tablet') ? 'py-32px' : 'py-48px'"
    >
      <p
        class="font-medium text-md px-24px"
        :class="theme === 'white' ? '' : 'text-white'"
      >
        It’s now easier than ever to build trust and connect with your customers
        because we’ve made creating impactful, attention-grabbing content
        effortless and affordable.
      </p>

      <UCarousel
        ref="carouselRef"
        :ui="{ container: 'gap-16px px-24px' }"
        :items="items"
        v-slot="{ item }"
        arrows
        @mouseover="play = false"
        @mouseleave="play = true"
      >
        <div class="h-[320px] w-[156.5px] py-24px">
          <LibraryVideoPlayer :src="item" />
        </div>
      </UCarousel>

      <p
        class="font-medium text-md px-24px"
        :class="theme === 'white' ? '' : 'text-white'"
      >
        Our creators are a diverse community of all ages, backgrounds, and
        ethnicities. Covering a vast range of niches, they craft engaging
        content that resonates with audiences across Instagram and TikTok,
        driving real impact where it matters most.
      </p>
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();

const { theme } = defineProps({
  theme: {
    type: String,
    default: "light",
  },
});

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
</script>
