<template>
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
        class="flex flex-col justify-center"
        :class="
          viewport.isLessThan('tablet') ? 'order-2' : 'col-span-2 order-1'
        "
      >
        <p class="text-2xl font-bold text-white mb-24px">
          Hear From Our Founders
        </p>

        <p class="text-white text-md mb-8px">
          We’re Daphne & Linhan, and we built NanoOne to help local brands
          connect with the right creators—easily, affordably, and effectively.
        </p>

        <p class="text-white text-md mb-8px">
          We started this to help creators like you land great brand deals and
          paid collaborations—while making influencer marketing more accessible
          for local brands. A win-win for everyone.
        </p>

        <p class="text-white text-md mb-8px">
          NanoOne isn’t just about free products or paid gigs—it’s a community.
          From Creator Meets to Masterclasses, we give you the tools and
          connections to grow.
        </p>

        <p class="text-white text-md mb-24px">
          And the best part? Signing up is risk-free. You’ll start receiving
          campaign invites soon—pick what fits you best and get rewarded. Join
          us today!
        </p>

        <div class="flex gap-8px">
          <UButton
            to="https://forms.gle/DnWaexsMEWPAN5Pj7"
            target="_blank"
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
