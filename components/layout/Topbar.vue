<template>
  <div :class="theme === 'dark' ? 'bg-primary-500' : 'bg-white'">
    <div class="max-w-1300px mx-auto flex items-center justify-between p-24px">
      <nuxt-link to="/">
        <img src="~/assets/nano-one/nano-one.png" class="h-48px" />
      </nuxt-link>

      <div class="flex gap-24px items-center">
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

        <UButton
          label="Start New Campaign"
          to="/new-campaign"
          :color="theme === 'dark' ? 'black' : 'primary'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { theme } = defineProps({
  theme: {
    type: String,
    default: "light",
  },
});
</script>