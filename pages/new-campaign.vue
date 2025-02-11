<template>
  <div>
    <div class="bg-primary-500 relative">
      <div
        class="mx-auto max-w-1300px min-h-[70vh]"
        :class="
          viewport.isLessThan('tablet')
            ? 'flex flex-col px-16px py-32px pr-0 pb-0'
            : 'grid grid-cols-5 px-24px py-48px pb-0 gap-24px'
        "
      >
        <div
          class="flex flex-col justify-center col-span-3"
          :class="viewport.isLessThan('tablet') ? 'pr-16px' : 'pb-48px'"
        >
          <p
            class="text-4xl font-bold text-white mb-8px"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Unlock Influencer and UGC Marketing—Risk-Free
          </p>

          <p
            class="text-lg text-white"
            :class="viewport.isLessThan('tablet') ? 'text-center' : ''"
          >
            Join hundreds of local brands tapping into nano and
            micro-influencers for authentic, high-impact content. Sign up to
            explore—no commitment, just opportunities.
          </p>
        </div>
        <img
          src="~/assets/pages/new-campaign/hero.png"
          :class="
            viewport.isLessThan('tablet')
              ? ''
              : 'absolute bottom-0 right-0 h-full'
          "
        />
      </div>
    </div>

    <div class="bg-black">
      <div
        class="mx-auto gap-24px max-w-1300px"
        :class="
          viewport.isLessThan('tablet')
            ? 'px-16px py-32px'
            : 'px-24px py-48px flex justify-center'
        "
      >
        <div
          class="border-1 border-white rounded-8px p-16px"
          :class="viewport.isLessThan('tablet') ? '' : 'w-1/2'"
        >
          <UForm :state="state" class="grid grid-cols-2 gap-16px">
            <UFormGroup
              :ui="{
                label: {
                  base: 'text-white',
                },
              }"
              label="First Name"
              name="firstName"
            >
              <UInput v-model="state.firstName" />
            </UFormGroup>

            <UFormGroup
              :ui="{
                label: {
                  base: 'text-white',
                },
              }"
              label="Last Name"
              name="lastName"
            >
              <UInput v-model="state.lastName" />
            </UFormGroup>

            <UFormGroup
              :ui="{
                label: {
                  base: 'text-white',
                },
              }"
              label="Email"
              name="email"
              class="col-span-2"
            >
              <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup
              :ui="{
                label: {
                  base: 'text-white',
                },
              }"
              label="Company Name"
              name="companyName"
              class="col-span-2"
            >
              <UInput v-model="state.companyName" />
            </UFormGroup>

            <LibraryFormInputPhone
              :name="'phoneNumber'"
              label="Phone Number"
              v-model="state.phoneNumber"
              class="col-span-2"
            />
          </UForm>

          <form
            name="contact"
            method="post"
            data-netlify="true"
            action="./success.html"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="firstName"
              :value="state.firstName"
              class="hidden"
            />
            <input
              type="text"
              name="lastName"
              :value="state.lastName"
              class="hidden"
            />
            <input
              type="email"
              name="email"
              :value="state.email"
              class="hidden"
            />
            <input
              type="text"
              name="companyName"
              :value="state.companyName"
              class="hidden"
            />
            <input
              type="text"
              name="phoneNumber"
              :value="state.phoneNumber"
              class="hidden"
            />

            <UButton type="submit" class="mt-16px" block> Submit </UButton>
          </form>
        </div>
      </div>
    </div>

    <iframe
      src="https://www.juicer.io/api/feeds/nano_0ne/iframe"
      frameborder="0"
      width="100%"
      height="400"
      style="display: block; margin: 0 auto"
    ></iframe>

    <div
      class="mx-auto gap-24px max-w-1300px"
      :class="
        viewport.isLessThan('tablet') ? 'px-16px py-32px' : 'px-24px py-48px'
      "
    >
      <p class="text-2xl font-bold mb-16px">Frequently Asked Questions</p>

      <UAccordion color="gray" :items="items" />
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();

definePageMeta({
  layout: "dark",
});

// form
const state = reactive({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  companyName: undefined,
  phoneNumber: undefined,
});

const items = [
  {
    label: "What is a nano or micro influencer?",
    content:
      "A nano or micro influencer is a content creator with between 3,000 to 50,000 followers. While their reach is smaller, their engagement rates often surpass those of mega influencers and celebrities, making them highly effective for targeted campaigns.",
  },
  {
    label: "Will you randomly assign the nano influencer?",
    content:
      "No, our team carefully shortlists influencers who are genuinely interested in working with your brand. We ensure these influencers align with your brand’s content style and can bring the most value to your campaign.",
  },
  {
    label:
      "Do we get to review their content in case they do not understand our product?",
    content:
      "Yes, you can opt to review the influencers' content before it goes live. However, major misalignments are unlikely as we provide detailed campaign requirements that clearly communicate your brand and product to the influencers.",
  },
  {
    label: "Are the deliverables going to be a story, reel, or post?",
    content:
      "The choice of social media platform and content type is entirely up to you. If you're unsure, our team will gladly provide recommendations based on your campaign goals.",
  },
  {
    label:
      "Will we be able to get insights and analytics to the content posted by influencers?",
    content:
      "Yes, we’ll provide a report at the end of your campaign, detailing the reach and engagement metrics. For full analytics access on Instagram, we can arrange for the influencers to collaborate with your official account on the posts.",
  },
  {
    label: "What kind of business best suits micro/nano influencer marketing?",
    content:
      "Businesses offering consumer-facing, low-involvement products or experiences—like food and beverages, fashion, beauty, hairdressing, photography, museums, and exhibitions—are ideal candidates for nano and micro influencer marketing.",
  },
  {
    label: "What happens after I fill out this form?",
    content:
      "You’ll receive a link to a welcome message from our team, along with another form to submit your campaign requirements. This is where you share details about your brand, product, or experience, and how you envision collaborating with our influencers.",
  },
  {
    label: "Will I get to speak with anyone from your team?",
    content:
      "Absolutely! Drop us a line via email at info@one-each.com, and we’ll be happy to answer any questions as soon as we can.",
  },
].map((element, key) => ({
  ...element,
  label: `${key + 1}. ${element.label}`,
}));
</script>

<style>
.referral {
  display: none !important;
}
</style>