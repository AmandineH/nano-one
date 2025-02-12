<template>
  <div
    class="w-full mx-auto max-w-1300px"
    :class="
      viewport.isLessThan('tablet') ? 'px-16px py-32px' : 'px-24px py-48px'
    "
  >
    <div
      class="mb-24px"
      :class="
        viewport.isLessThan('tablet') ? '' : 'flex gap-16px justify-between'
      "
    >
      <h1 class="text-4xl font-bold">Terms Of Use</h1>
      <p class="text-xs">Last updated on March 1, 2025</p>
    </div>

    <p class="text-md-regular mb-24px">
      Welcome to NanoOne! These Terms of Service (\"Terms\") govern your access
      to and use of NanoOne (the \"Website\"), so please read them carefully. By
      accessing or using the Website, you agree to be bound by these Terms. If
      you do not agree with these Terms, please do not use the Website.
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

let items = [
  {
    list: [
      {
        content:
          "By accessing or using the Website, you acknowledge that you have read, understood, and agree to these Terms, including any updates or modifications that may occur from time to time. You also represent and warrant that you have the legal authority to accept these Terms on behalf of yourself or any entity you represent.",
      },
    ],
    title: "Acceptance of Terms",
  },
  {
    list: [
      {
        content:
          "We reserve the right to modify or update these Terms at any time, with or without prior notice. The date of the last revision will be indicated at the beginning of the Terms. Your continued use of the Website after any such changes constitutes your acceptance of the revised Terms.",
      },
    ],
    title: "Changes to the Terms",
  },
  {
    list: [
      {
        content:
          "The Website is intended for use by individuals who are of legal age to form a binding contract. By using the Website, you affirm that you are at least 18 years old. If you are using the Website on behalf of an organization, you represent and warrant that you have the necessary authority to bind the organization to these Terms.",
      },
    ],
    title: "User Eligibility",
  },
  {
    list: [
      {
        content:
          "Some features of the Website may require you to create a user account. When creating an account, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. If you believe there has been unauthorized access to your account, please notify us immediately.",
      },
    ],
    title: "User Accounts",
  },
  {
    list: [
      {
        content:
          'By using the Website, you may have the opportunity to submit, post, or share content, including but not limited to text, images, videos, and other materials ("User Content"). You retain ownership of your User Content, but by submitting it on the Website, you grant us a non-exclusive, worldwide, royalty-free, and perpetual license to use, reproduce, modify, adapt, publish, translate, distribute, and display the User Content for the purposes of providing, promoting, and improving the Website.',
      },
      {
        content:
          "You are solely responsible for the User Content you provide and agree not to submit any content that is illegal, infringing, defamatory, or violates any third-party rights. We reserve the right to remove or refuse to publish any User Content at our discretion.",
      },
      {
        content:
          "<p>Prohibited Activities</p><p>While using the Website, you agree not to engage in any of the following activities:</p>",
        list: [
          "(a) Violating any applicable laws or regulations.",
          "(b) Interfering with the security or integrity of the Website.",
          "(c) Accessing or using the Website in any way that could harm, disable, overburden, or impair its functionality.",
          "(d) Attempting to gain unauthorized access to any user accounts or computer systems connected to the Website.",
          "(e) Collecting or harvesting any information from the Website or other users without their consent.",
          "(f) Uploading or transmitting viruses, malware, or any other harmful code.",
          "(g) Engaging in any activity that disrupts or interferes with the proper functioning of the Website.",
        ],
      },
    ],
    title: "User Content",
  },
  {
    list: [
      {
        content:
          "The Website and its contents, including but not limited to text, graphics, logos, images, software, and design, are the property of NanoOne and are protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, and non-transferable license to access and use the Website for personal, non-commercial purposes.",
      },
    ],
    title: "Intellectual Property",
  },
  {
    list: [
      {
        content:
          "The Website may contain links to third-party websites or resources that are not owned or controlled by NanoOne. We are not responsible for the content or availability of these external sites and resources, and their inclusion does not imply endorsement or affiliation. Your interactions with third-party websites are solely at your own risk.",
      },
    ],
    title: "Third-Party Links",
  },
  {
    list: [
      {
        content:
          'The Website is provided "as is" and without any warranty or guarantee, express or implied. We make no representations or warranties regarding the accuracy, reliability, availability, or suitability of the Website for your particular purpose. Your use of the Website is at your own risk.',
      },
    ],
    title: "Disclaimer of Warranties",
  },
  {
    list: [
      {
        content:
          "In no event shall NanoOne, its officers, directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the Website or these Terms. This includes but is not limited to damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.",
      },
    ],
    title: "Limitation of Liability",
  },
  {
    list: [
      {
        content:
          "You agree to indemnify and hold harmless NanoOne, its officers, directors, employees, and affiliates from any claims, liabilities, damages, losses, or expenses (including attorney's fees) arising out of your use of the Website or violation of these Terms.",
      },
    ],
    title: "Indemnification",
  },
  {
    list: [
      {
        content:
          "We reserve the right to suspend or terminate your access to the Website at any time and for any reason, without prior notice or liability.",
      },
    ],
    title: "Termination",
  },
  {
    list: [
      {
        content:
          "These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law principles.",
      },
    ],
    title: "Governing Law",
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
