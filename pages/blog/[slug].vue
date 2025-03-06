
<template>
  <div
    class="w-full mx-auto max-w-1300px"
    :class="
      viewport.isLessThan('tablet') ? 'px-24px py-32px' : 'px-24px py-48px'
    "
  >
    <ContentRenderer v-if="post" :value="post" />
    <div v-else>Post not found</div>
  </div>
</template>

<script setup>
const viewport = useViewport();
const route = useRoute();

const { data: post } = await useAsyncData(() => {
  return queryCollection("content").path(`/${route.params.slug}`).first();
});

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
});
</script>