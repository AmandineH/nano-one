<template>
  <div class="bg-black">
    <div
      class="mx-auto gap-24px max-w-1300px"
      :class="
        viewport.isLessThan('tablet') ? 'px-16px py-32px' : 'px-24px py-48px'
      "
    >
      <p class="text-2xl font-bold text-white mb-16px">What We Do</p>

      <UAccordion
        :ui="{
          wrapper: 'gap-16px',
          item: {
            padding: 'pt-4',
          },
        }"
        v-if="viewport.isLessThan('tablet')"
        color="gray"
        :items="items"
      >
        <template #default="{ item, index, open }">
          <div
            class="grid grid-cols-5 gap-16px w-full rounded-lg px-16px py-8px border-1 border-white"
            :class="[open ? '' : 'bg-black']"
          >
            <p
              class="text-lg font-semibold text-left"
              :class="[open ? 'text-primary-500' : 'text-white']"
            >
              0{{ index + 1 }}
            </p>
            <p
              class="text-lg font-semibold col-span-3 truncate text-left"
              :class="[open ? 'text-primary-500' : 'text-white']"
            >
              {{ item.label }}
            </p>

            <UIcon
              name="i-heroicons-chevron-down-20-solid"
              class="w-8 h-8 ms-auto transform transition-transform duration-200"
              :class="[
                open && '-rotate-180',
                open ? 'text-primary-500' : 'text-white',
              ]"
            />
          </div>
        </template>

        <template #influencer-posts="{ item }">
          <div class="flex flex-col rounded-lg gap-16px">
            <div v-html="item.content" />
          </div>
        </template>

        <template #ugc="{ item }">
          <div class="flex flex-col rounded-lg gap-16px">
            <div v-html="item.content" />
          </div>
        </template>

        <template #content-creation="{ item }">
          <div class="flex flex-col rounded-lg gap-16px">
            <div v-html="item.content" />
          </div>
        </template>
      </UAccordion>
      <UTabs
        v-else
        :ui="{
          wrapper: 'grid grid-cols-5 gap-4 space-y-0',
          container: 'col-span-3',
          list: {
            base: 'flex flex-col col-span-2',
            background: 'bg-black',
            padding: 'p-0',
            height: 'h-14',
            marker: {
              base: 'border-1 border-white',
              background: 'bg-white',
            },
            tab: {
              active: 'text-white',
              height: 'h-12',
            },
          },
        }"
        :items="items"
        orientation="vertical"
        class="w-full"
      >
        <template #default="{ item, index, selected }">
          <div class="grid grid-cols-5 gap-16px w-full">
            <p
              class="text-lg font-semibold text-left"
              :class="[selected && 'text-primary-500']"
            >
              0{{ index + 1 }}
            </p>
            <p
              class="text-lg font-semibold col-span-4 truncate text-left"
              :class="[selected && 'text-primary-500']"
            >
              {{ item.label }}
            </p>
          </div>
        </template>

        <template #influencer-posts="{ item }">
          <div class="grid grid-cols-3 gap-16px">
            <div v-html="item.content" class="col-span-2" />

            <div class="relative min-h-200px">
              <div
                class="border-1 border-white rounded-lg absolute top-0 right-0 h-full w-full"
              >
                <img
                  src="~/assets/pages/for-brands/influencer-post.png"
                  class="object-contain w-full h-full object-bottom"
                />
              </div>
            </div>
          </div>
        </template>

        <template #ugc="{ item }">
          <div class="grid grid-cols-3 gap-16px">
            <div v-html="item.content" class="col-span-2" />

            <div class="relative min-h-200px">
              <div
                class="border-1 border-white rounded-lg absolute top-0 right-0 h-full w-full"
              >
                <img
                  src="~/assets/pages/for-brands/ugc.png"
                  class="object-contain w-full h-full object-right-bottom"
                />
              </div>
            </div>
          </div>
        </template>

        <template #content-creation="{ item }">
          <div class="grid grid-cols-3 gap-16px">
            <div v-html="item.content" class="col-span-2" />

            <div class="relative min-h-200px">
              <div
                class="border-1 border-white rounded-lg absolute top-0 right-0 h-full w-full"
              >
                <img
                  src="~/assets/pages/for-brands/content-creation.png"
                  class="object-contain w-full h-full object-left-bottom"
                />
              </div>
            </div>
          </div>
        </template>
      </UTabs>
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();

let items = [
  {
    slot: "influencer-posts",
    label: "Influencer Posts",
    content: `<p class="text-white text-md font-medium mb-8px">
                Nano and micro influencers create and share content on their own
                social pages to showcase your brand.
              </p>

              <p class="text-white text-md font-bold">Creative Control</p>
              <p class="text-white text-md font-medium mb-8px">
                Influencers retain creative freedom to craft content that
                resonates with their audience.
              </p>

              <p class="text-white text-md font-bold">Content Rights</p>
              <p class="text-white text-md font-medium">
                Content remains influencers’ properties and requires a loading
                fees for brands to reuse it.
              </p>`,
  },
  {
    slot: "ugc",
    label: "User-Generated Content",
    content: `<p class="text-white text-md font-medium mb-8px">
                Video testimonials of your products and experiences that are
                ideal for video ads.
              </p>

              <p class="text-white text-md font-bold">Creative Control</p>
              <p class="text-white text-md font-medium mb-8px">
                Brands have control over content, working closely with creators
                through up to 2 revisions.
              </p>

              <p class="text-white text-md font-bold">Content Rights</p>
              <p class="text-white text-md font-medium">
                Brands have full rights to use content across campaigns and ads
                without additional fees.
              </p>`,
  },
  {
    slot: "content-creation",
    label: "Content Creation",
    content: `<p class="text-white text-md font-medium mb-8px">
                We handle everything from concept to execution, ensuring your
                brand stands out on social media.
              </p>

              <p class="text-white text-md font-medium mb-8px">
                Our team develops story-driven ideas, produces high-quality
                videos and photos, sources the right talent, and crafts
                compelling scripts and captions.
              </p>

              <p class="text-white text-md font-medium">
                Every piece of content is optimized for platforms like Instagram
                and TikTok, designed to engage your audience and drive results.
              </p>`,
  },
];
</script>
