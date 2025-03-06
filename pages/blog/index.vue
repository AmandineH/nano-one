
<template>
  <div
    class="w-full mx-auto max-w-1300px"
    :class="
      viewport.isLessThan('tablet') ? 'px-24px py-32px' : 'px-24px py-48px'
    "
  >
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/blog${post.path}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const viewport = useViewport();

const { data: posts } = await useAsyncData(() =>
  queryCollection("content").all()
);
</script>
