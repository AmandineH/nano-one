<template>
  <video
    :src="videoSrc"
    ref="videoRef"
    @mouseover="playVideo"
    @mouseleave="pauseVideo"
    @click="togglePlay"
    class="h-full w-auto rounded-lg shadow-lg border-1 border-black"
    muted
    loop
    playsinline
  ></video>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const videoRef = ref(null);
const videoSrc = computed(() => `${props.src}`);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.load();
  }
});

const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play();
  }
};

const pauseVideo = () => {
  if (videoRef.value) {
    videoRef.value.pause();
    videoRef.value.currentTime = 0;
  }
};

const togglePlay = () => {
  if (videoRef.value) {
    if (videoRef.value.paused) {
      videoRef.value.play();
    } else {
      videoRef.value.pause();
    }
  }
};
</script>

<style scoped>
video {
  transition: transform 0.2s ease-in-out;
}
video:hover {
  transform: scale(1.05);
}
</style>
