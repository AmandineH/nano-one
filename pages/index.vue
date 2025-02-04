<template>
  <div>
    <div
      class="p-24px gap-24px max-w-1300px mx-auto"
      :class="
        viewport.isLessThan('tablet') ? 'flex flex-col' : 'grid grid-cols-2'
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
          class="text-lg font-medium mb-16px"
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
            label=""
            to="/for-creators"
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
  </div>
</template>

<script setup>
const viewport = useViewport();
</script>