<template>
  <div class="flex flex-col min-h-full">
    <LayoutTopbar :theme="'light'" />

    <slot />

    <LayoutFooter />
  </div>
</template>

<script setup>
const colorMode = useColorMode();

onBeforeMount(() => {
  colorMode.preference = "light"
})
</script>
