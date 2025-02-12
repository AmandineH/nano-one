<template>
  <div
    class="mx-auto max-w-1300px relative"
    :class="
      viewport.isLessThan('tablet') ? 'px-16px py-32px' : 'px-24px py-48px'
    "
  >
    <div
      class="relative"
      :class="viewport.isLessThan('tablet') ? 'pt-16px' : ''"
    >
      <div class="bg-white absolute top-0 min-h-[27px] w-full right-0">
        <p class="text-2xl font-bold mb-16px">
          Join the Movement: See Our Creators in Action
        </p>
      </div>
      <iframe
        src="https://www.juicer.io/api/feeds/nano_0ne/iframe"
        frameborder="0"
        width="100%"
        height="400"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();
</script>