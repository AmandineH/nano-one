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

let brands = [
  "/brands/athena-scents.png",
  "/brands/averyday.png",
  "/brands/bonback.png",
  "/brands/charcoal-crab.png",
  "/brands/chicas.png",
  "/brands/four-start.png",
  "/brands/clean-home.png",
  "/brands/printvolution.png",
  "/brands/savoureux.png",
  "/brands/singapaw.png",
  "/brands/smilefam.png",
  "/brands/claypot-prawn.png",
  "/brands/work-store.png",
];
</script>
