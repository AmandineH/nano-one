<template>
  <div class="bg-primary-500">
    <div
      class="mx-auto max-w-1300px"
      :class="
        viewport.isLessThan('tablet')
          ? 'flex flex-col px-16px py-32px'
          : 'grid grid-cols-5 gap-24px px-24px py-48px'
      "
    >
      <div
        class="flex flex-col justify-center"
        :class="
          viewport.isLessThan('tablet') ? 'order-2' : 'col-span-2 order-1'
        "
      >
        <p class="text-2xl font-bold text-white mb-16px">
          Greetings From The Team
        </p>

        <p class="text-white text-md mb-8px">
          We’re Daphne & Linhan, and we built NanoOne to help local brands
          connect with the right creators—easily, affordably, and effectively.
        </p>

        <p class="text-white text-md mb-8px">
          Finding the right influencers and managing collaborations shouldn’t be
          complicated or expensive. That’s why we make it simple, affordable,
          and effective—connecting you with passionate nano and
          micro-influencers and content creators who create authentic,
          high-impact content.
        </p>

        <p class="text-white text-md mb-24px">
          Ready to reach real, engaged audiences? Let’s make influencer
          marketing work for you.
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
        </div>
      </div>

      <img
        src="~/assets/nano-one/founders.png"
        class="object-contain object-center"
        :class="
          viewport.isLessThan('tablet') ? 'order-1' : 'order-2 col-span-3'
        "
      />
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();
</script>
