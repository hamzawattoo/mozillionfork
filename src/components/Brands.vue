<template>
  <section>
    <div class="mt-12 bg-white border-t">
      <div class="container !p-5 text-lg">
        <h2 class="mb-4 font-bold">The brands we offer:</h2>
        <h3 class="mb-4 font-bold text-blue-500 my-5 text-sm md:text-base">
          <a href="#">Apple iPhones</a>
        </h3>
        <p class="text-sm md:text-base">
          The Apple iPhone is the most recognisable and popular brand on the
          market. Our marketplace offers all the latest new and second-hand
          iPhones to buy or sell, including the
          <a
            class="text-blue-500"
            href="https://www.mozillion.com/products/apple/iphone-14-pro-max"
            >iPhone 14 Pro Max</a
          >,
          <a
            class="text-blue-500"
            href="https://www.mozillion.com/products/apple/iphone-14-pro"
            >iPhone 14 Pro</a
          >,
          <a
            class="text-blue-500"
            href="https://www.mozillion.com/products/apple/iphone-14"
            >iPhone 14</a
          >
          and the
          <a
            class="text-blue-500"
            href="https://www.mozillion.com/products/apple/iphone-14-plus"
            >iPhone 14 Plus</a
          >. They’re all graded by their condition, so you can find one that's
          perfect for your needs and budget.
        </p>
        <div>
          <div v-if="open">
            <div
              class="py-2 text-sm md:text-base"
              v-for="(phoneBrand, index) in brands"
              :key="index"
            >
              <h3 class="mb-4 font-bold text-blue-500 my-5">
                <a class="" href="#">{{ phoneBrand.brand }}</a>
              </h3>
              <p>{{ phoneBrand.description }}</p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button @click="toggle" class="text-center text-blue-600">
            {{ open ? "Read Less" : "Read More" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
```
<script>
export default {
  data() {
    return {
      open: false,
      brands: [
        {
          brand: "Samsung Phones",
          description:
            "A market-leading innovator, Samsung offers cutting-edge technology at more affordable prices. Optimised to run Android instead of iOS, its versatile phones are consistently among the best performing out there. Samsung’s head-turning designs include the Galaxy S22 Ultra 5G, Galaxy S22 Plus 5G, or the Galaxy S22 5G.",
        },
        {
          brand: "Google Phones",
          description:
            "Google’s Android operating system gives it a massive footprint in the smartphone industry, but its phones are brilliant too. Catering to the upper mid-range, Google’s new and second-hand phones combine quality and function with regular OS and security updates. Highlights include the Google Pixel 6a, and the new Pixel 7 Pro.",
        },
        {
          brand: "Huawei Phones",
          description:
            "Huawei makes great phones without the high price tag - it’s known for combining good value with exceptionally high quality. However, blocked by Google from Android, Huawei’s latest P40 Pro Plus and P40 Pro phones miss out on the simplicity of the Google Play store, which could be a deal-breaker for some.",
        },
        {
          brand: "OnePlus Phones",
          description:
            "Launching its first phone in 2014, OnePlus is the (comparatively) new kid on the block. Under its ‘Never Settle’ tagline, the brand is focused on offering high quality design and features at a much more affordable price - it’s significantly cheaper than Samsung or Apple. If value is important, check out its latest phones like the OnePlus 10 Pro 5G.",
        },
        {
          brand: "Motorola Phones",
          description:
            "The classic flip phone is back with a vengeance! Motorola’s latest models, the Razr and Razr 5G, use a folding screen to redefine how a phone should function. Advanced, iconic and hotly anticipated, the reimagined Razr shows there’s life in the old giant yet.",
        },
        {
          brand: "Sony Phones",
          description:
            "It’s no surprise that Sony’s expertise in gaming, audio and visual hardware has found its way into its phones. Recent Sony mobile phones range from the widescreen Xperia 5, through to gaming powerhouses like the Xperia 1 II.",
        },
        {
          brand: "Nokia Phones",
          description:
            "Rumours of Nokia’s death proved greatly exaggerated. Today it makes a broad range of phones, usually built on Android ONE - an unadulterated version of the OS that guarantees long-term updates. Surprisingly affordable, and often built to last three years or more, Nokia’s latest models include the brilliant Nokia 9 PureView.",
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
