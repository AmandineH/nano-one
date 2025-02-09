<template>
  <div>
    <div class="bg-primary-500">
      <div
        class="mx-auto gap-24px max-w-1300px"
        :class="
          viewport.isLessThan('tablet')
            ? 'flex flex-col px-16px py-32px pb-0'
            : 'grid grid-cols-5 px-24px py-48px pb-0'
        "
      >
        <div
          class="flex flex-col justify-center col-span-3"
          :class="
            viewport.isLessThan('tablet')
              ? 'order-2 pb-32px'
              : 'order-1 pb-48px'
          "
        >
          <p
            class="text-4xl font-bold text-white"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Engage.
          </p>

          <p
            class="text-4xl font-bold text-white"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Influence.
          </p>

          <p
            class="text-4xl font-bold text-white mb-8px"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Grow Your Brand.
          </p>

          <p
            class="text-lg text-white mb-16px"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Connect with a network of trusted nano and micro-influencers who
            create authentic content that drives real engagement—affordable and
            hassle-free.
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
          src="~/assets/pages/for-creators/hero.png"
          :class="
            viewport.isLessThan('tablet') ? 'order-1' : 'order-2 col-span-2'
          "
        />
      </div>
    </div>


    <ForBrandsWhat />

    <div
      class="mx-auto gap-24px max-w-1300px"
      :class="
        viewport.isLessThan('tablet') ? 'px-16px py-32px' : 'px-24px py-48px'
      "
    >
      <p class="text-2xl font-bold mb-16px">
        How We Helped Businesses Like Yours
      </p>
    </div>

    <ForBrandsWhy />

    <div class="bg-black">
      <div
        class="mx-auto gap-24px max-w-1300px"
        :class="
          viewport.isLessThan('tablet') ? 'px-16px py-32px' : 'px-24px py-48px'
        "
      >
        <p class="text-2xl font-bold text-white mb-16px">
          How We Work Together
        </p>
      </div>
    </div>

    <ForBrandsTeamGreetings />
  </div>
</template>

<script setup>
const viewport = useViewport();

definePageMeta({
  layout: "dark",
});
</script>
