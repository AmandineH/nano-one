<template>
  <div :class="theme === 'dark' ? 'bg-primary-500' : 'bg-white'">
    <div
      class="max-w-1300px mx-auto flex items-center justify-between p-24px"
      :class="viewport.isLessThan('tablet') ? 'p-16px' : 'p-24px'"
    >
      <nuxt-link to="/">
        <img
          src="~/assets/nano-one/nano-one.png"
          :class="viewport.isLessThan('tablet') ? 'h-28px' : 'h-48px'"
        />
      </nuxt-link>

      <div
        class="flex items-center"
        :class="viewport.isLessThan('tablet') ? 'gap-8px' : 'gap-24px'"
      >
        <div
          v-if="!viewport.isLessThan('tablet')"
          class="flex items-center gap-8px"
        >
          <nuxt-link to="/for-brands">
            <UButton
              :ui="{
                variant: {
                  solid: 'shadow-none',
                },
              }"
              label="For Brands"
              to="/for-brands"
              :variant="theme === 'dark' ? 'solid' : 'ghost'"
              color="primary"
            />
          </nuxt-link>

          <nuxt-link to="/for-creators">
            <UButton
              :ui="{
                variant: {
                  solid: 'shadow-none',
                },
              }"
              label="For Creators"
              to="/for-creators"
              :variant="theme === 'dark' ? 'solid' : 'ghost'"
              color="primary"
            />
          </nuxt-link>
        </div>

        <UButton
          label="Start New Campaign"
          to="/new-campaign"
          :color="theme === 'dark' ? 'black' : 'primary'"
        />

        <UButton
          :ui="{
            variant: {
              solid: 'shadow-none',
            },
          }"
          v-if="viewport.isLessThan('tablet')"
          :variant="theme === 'dark' ? 'solid' : 'ghost'"
          color="primary"
          @click="toggleMenu()"
        >
          <Icon
            :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'"
            class="w-4 h-4 mt-1"
          />
        </UButton>
      </div>

      <div
        v-if="isMenuOpen"
        class="flex flex-col absolute z-10 top-[80px] inset-0 p-16px items-center"
        :class="theme === 'dark' ? 'bg-primary-500' : 'bg-white'"
      >
        <div class="flex flex-col gap-8px">
          <nuxt-link to="/for-brands">
            <UButton
              :ui="{
                variant: {
                  solid: 'shadow-none',
                },
              }"
              label="For Brands"
              to="/for-brands"
              :variant="theme === 'dark' ? 'solid' : 'ghost'"
              color="primary"
            />
          </nuxt-link>

          <nuxt-link to="/for-creators">
            <UButton
              :ui="{
                variant: {
                  solid: 'shadow-none',
                },
              }"
              label="For Creators"
              to="/for-creators"
              :variant="theme === 'dark' ? 'solid' : 'ghost'"
              color="primary"
            />
          </nuxt-link>
        </div>
      </div>
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

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>