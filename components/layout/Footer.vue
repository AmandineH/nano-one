<template>
  <footer class="relative">
    <div
      class="mx-auto max-w-1300px"
      :class="
        viewport.isLessThan('tablet') ? 'px-16px py-32px' : 'px-24px py-48px'
      "
    >
      <div
        class="mb-24px"
        :class="
          viewport.isLessThan('tablet') ? 'flex flex-col items-center' : ''
        "
      >
        <nuxt-link to="/">
          <img
            src="~/assets/nano-one/nano-one.svg"
            :class="viewport.isLessThan('tablet') ? 'h-48px' : 'h-48px'"
          />
        </nuxt-link>
      </div>

      <div
        :class="
          viewport.isLessThan('tablet')
            ? 'flex flex-col gap-24px'
            : 'grid grid-cols-4 gap-24px'
        "
        class="mb-24px"
      >
        <div
          class="flex flex-col gap-16px"
          :class="viewport.isLessThan('tablet') ? 'order-3' : 'order-1'"
        >
          <a
            href="mailto:info@one-each.com"
            class="text-sm font-medium"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            info@one-each.com
          </a>

          <a
            href="tel:info@one-each.com"
            class="text-sm font-medium"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            +65 8888 8888
          </a>

          <div
            class="text-sm font-medium"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            <p>SQ Collective</p>
            <p>65 Mohamed Sultan Rd</p>
            <p>Singapore 239003</p>
          </div>
        </div>

        <div
          class="flex flex-col"
          :class="
            viewport.isLessThan('tablet') ? 'order-2 items-center' : 'order-2'
          "
        >
          <UButton
            to="/for-creators"
            variant="link"
            color="black"
            class="text-sm font-medium underline"
          >
            For Creators
          </UButton>

          <UButton
            to="/for-brands"
            variant="link"
            color="black"
            class="text-sm font-medium underline"
          >
            For Brands
          </UButton>

          <UButton
            to="https://www.instagram.com/nano_0ne/"
            target="_blank"
            variant="link"
            color="black"
            class="text-sm font-medium underline"
          >
            Instagram
          </UButton>
        </div>

        <div
          v-if="!viewport.isLessThan('tablet')"
          :class="viewport.isLessThan('tablet') ? 'order-1' : 'order-3'"
        >
          <p
            class="text-lg font-bold mb-16px text-primary-500"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Reach your customers with result-driven content now
          </p>

          <UButton
            to="/new-campaign"
            :class="viewport.isLessThan('tablet') ? 'flex-grow' : ''"
          >
            <p
              :class="viewport.isLessThan('tablet') ? 'text-center w-full' : ''"
            >
              Get Started
            </p>
          </UButton>
        </div>
      </div>

      <div
        :class="
          viewport.isLessThan('tablet')
            ? 'flex flex-col gap-8px'
            : 'flex items-center gap-24px'
        "
      >
        <p
          class="text-xs font-medium"
          :class="
            viewport.isLessThan('tablet') ? 'order-2 text-center' : 'order-1'
          "
        >
          © 2025 NanoOne
        </p>

        <div
          class="flex items-center justify-center gap-24px"
          :class="viewport.isLessThan('tablet') ? 'order-1' : 'order-2'"
        >
          <UButton
            to="/privacy-policy"
            target="_blank"
            variant="link"
            color="black"
            class="text-xs font-medium underline"
          >
            Privacy Policy
          </UButton>

          <UButton
            to="/terms-of-use"
            target="_blank"
            variant="link"
            color="black"
            class="text-xs font-medium underline"
          >
            Terms of Use
          </UButton>
        </div>
      </div>
    </div>

    <img
      v-if="!viewport.isLessThan('tablet')"
      src="~/assets/nano-one/nano-one-logo.svg"
      class="absolute bottom-0 right-0 h-full"
    />
  </footer>
</template>

<script setup>
const viewport = useViewport();
</script>
