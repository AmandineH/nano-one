<template>
  <div class="flex flex-col min-h-full">
    <LayoutTopbar :theme="'dark'" />

    <slot />

    <LayoutFooter />
  </div>
</template>

<script setup>
</script>
