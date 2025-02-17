<template>
  <div
    class="w-full mx-auto max-w-1300px"
    :class="
      viewport.isLessThan('tablet') ? 'px-24px py-32px' : 'px-24px py-48px'
    "
  >
    <div class="mb-24px">
      <h1 class="text-4xl font-bold mb-8px">Privacy Policy</h1>
    </div>

    <p class="text-md-regular mb-24px">
      Thank you for visiting NanoOne (the \"Website\"). We are committed to
      protecting your privacy and ensuring that your personal information is
      handled securely and responsibly. This Privacy Policy explains how we
      collect, use, disclose, and safeguard your personal information when you
      use our Website. By accessing or using the Website, you consent to the
      practices described in this Privacy Policy.
    </p>

    <div class="flex flex-col gap-24px">
      <div v-for="(item, i) in items" :key="`${i}-${i}`">
        <h2 class="flex text-black mb-8px text-lg-semibold gap-8px">
          <span> {{ i + 1 }}.</span>
          <span v-html="item.title" />
        </h2>

        <div class="flex flex-col gap-5px">
          <div v-for="(subItem, j) in item.list" :key="j">
            <div class="flex text-black text-md-regular gap-8px">
              <p>{{ i + 1 }}.{{ j + 1 }}.</p>
              <div class="flex-grow">
                <span v-html="subItem.content" />
                <div
                  class="text-black my-8px text-md-regular"
                  v-if="subItem.list"
                  :key="`${j}-${j}`"
                >
                  <p
                    v-for="(sectionSecondary, k) in subItem.list"
                    :key="k"
                    v-html="sectionSecondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const viewport = useViewport();

useHead({
  title: "Privacy Policy | NanoOne",
});

let items = [
  {
    list: [
      {
        content:
          "Personal Information: We may collect personally identifiable information, such as your name, email address, postal address, and phone number when you voluntarily provide it to us. You may choose not to provide certain information, but this could limit your access to some features of the Website.",
      },
      {
        content:
          "Usage Information: We may collect non-personal information about your interactions with the Website, such as your IP address, browser type, operating system, pages visited, and referring URLs. This information is used to analyze trends, administer the Website, track user movements, and gather demographic information for aggregate use.",
      },
      {
        content:
          "Cookies and Similar Technologies: We may use cookies, web beacons, and other tracking technologies to enhance your experience on the Website. Cookies are small data files stored on your device that help us remember your preferences and recognize you on your next visit. You can control or disable cookies through your browser settings, but please note that certain features of the Website may not function properly if cookies are disabled.",
      },
    ],
    title: "Information We Collect",
  },
  {
    list: [
      {
        content:
          "Personal Information: We may use your personal information to:",
        list: [
          "(a) Provide, maintain, and improve the Website and its features.",
          "(b) Respond to your inquiries, comments, or questions.",
          "(c) Send you administrative information, such as updates, changes to our policies, and important notices.",
          "(d) Process transactions and send transaction-related communications.",
          "(e) Customize and personalize your experience on the Website.",
        ],
      },
      {
        content:
          "Usage Information: We use non-personal information to analyze Website usage, diagnose technical problems, and enhance our services.",
      },
    ],
    title: "How We Use Your Information",
  },
  {
    list: [
      {
        content:
          "Third-Party Service Providers: We may share your personal information with trusted third-party service providers who assist us in operating the Website, processing transactions, and providing services on our behalf. These third-party providers have access to your information solely to perform specific tasks and are obligated to keep it confidential.",
      },
      {
        content:
          "Legal Requirements: We may disclose your personal information if required by law or in good faith belief that such action is necessary to comply with legal obligations, protect our rights, or investigate fraud, security, or technical issues.",
      },
      {
        content:
          "Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to the acquiring entity.",
      },
    ],
    title: "How We Share Your Information",
  },
  {
    list: [
      {
        content:
          "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission or storage system can be guaranteed to be completely secure. Please be aware that any transmission of information is at your own risk.",
      },
    ],
    title: "Security",
  },
  {
    list: [
      {
        content:
          "Our Website may contain links to external sites that are not operated by us. We are not responsible for the privacy practices of these third-party websites. We encourage you to review their privacy policies before providing any personal information.",
      },
    ],
    title: "Links to Third-Party Websites",
  },
  {
    list: [
      {
        content:
          "The Website is not intended for children under the age of 18. We do not knowingly collect personal information from individuals under this age. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.",
      },
    ],
    title: "Children's Privacy",
  },
  {
    list: [
      {
        content:
          "You may update or correct your personal information by contacting us at <a href='mailto:info@one-each.com' class='hover:underline text-primary-500'>info@one-each.com</a>. You can also opt-out of receiving marketing communications by following the unsubscribe instructions included in our emails.",
      },
    ],
    title: "Your Choices",
  },
  {
    list: [
      {
        content:
          "We reserve the right to update or modify this Privacy Policy at any time without prior notice. The date of the last revision will be indicated at the beginning of the policy. Your continued use of the Website after any changes signifies your acceptance of the revised Privacy Policy.",
      },
    ],
    title: "Changes to this Privacy Policy",
  },
  {
    list: [
      {
        content:
          "If you have any questions or concerns regarding these Terms, please contact us at <a href='mailto:info@one-each.com' class='hover:underline text-primary-500'>info@one-each.com</a>.",
      },
    ],
    title: "Contact Us",
  },
];
</script>
