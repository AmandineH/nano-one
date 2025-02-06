<template>
  <div>
    <div
      class="mx-auto gap-24px max-w-1300px"
      :class="
        viewport.isLessThan('tablet')
          ? 'flex flex-col px-16px py-32px'
          : 'grid grid-cols-2 px-24px py-48px'
      "
    >
      <div
        class="flex flex-col justify-center"
        :class="viewport.isLessThan('tablet') ? 'order-2' : 'order-1'"
      >
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
            to="/creator-community"
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
        src="~/assets/pages/landing/influencer-marketing.png"
        :class="viewport.isLessThan('tablet') ? 'order-1' : 'order-2'"
      />
    </div>

    <ForBrandsWhy />

    <div class="bg-primary-500">
      <div
        class="mx-auto gap-24px max-w-1300px"
        :class="
          viewport.isLessThan('tablet')
            ? 'flex flex-col px-16px py-32px pb-0'
            : 'grid grid-cols-4 px-24px py-48px pb-0'
        "
      >
        <div
          class="flex flex-col justify-center"
          :class="
            viewport.isLessThan('tablet')
              ? 'pb-32px order-2'
              : 'pb-48px col-span-3 order-1'
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

        <div
          class="flex flex-col justify-end"
          :class="viewport.isLessThan('tablet') ? 'order-1' : 'order-2'"
        >
          <img src="~/assets/pages/landing/working-with-influencers.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();
</script>
