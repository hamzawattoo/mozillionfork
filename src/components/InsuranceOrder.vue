<template>
  <section>
    <div
      class="bg-white !grid grid-cols-1 lg:!grid-cols-8 lg:space-x-8 rounded-2xl shadow-lg !my-6 mx-2 px-2 md:!px-8 !py-8 container"
    >
      <div class="w-full h-auto max-w-sm mx-auto lg:col-span-2">
        <img
          class="object-contain w-full h-full"
          src="https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1662630258/rfge2gueoivcoreiti1p.png"
          alt=""
        />
      </div>
      <div class="lg:col-span-6">
        <div class="mb-10">
          <h3 class="text-xl text-gray-800 md:text-3xl">
            Protect your phone now and get the first
            <strong>2 Months' FREE</strong>
          </h3>
          <p class="my-2 text-xl text-gray-800">
            Piece of mind insurance from just <strong>35p</strong> a day
          </p>
          <p class="text-base text-gray-500">
            By clicking 'Add to order' you confirm you have read the relevant
            Insurance Product Information Document and the policy is suitable
            for your needs
          </p>
        </div>
        <div
          class="grid items-center justify-between grid-cols-1 px-6 py-3 space-y-4 border-2 border-black rounded-xl lg:grid-cols-5"
        >
          <div class="lg:col-span-4">
            <h4 class="text-xl text-gray-800 md:text-2xl">
              <strong>2 Months' FREE</strong> | Cover against Theft, Damage,
              &amp; Breakdown
            </h4>
            <p class="text-md md:text-lg text-gray-800 py-2.5">
              £10.99 per month thereafter, cancel at anytime
            </p>
            <p class="text-base text-gray-500">
              Please read the
              <a
                target="_blank"
                href="https://www.mozillion.com/WCS_theft_AD_scheme.pdf"
                class="text-blue-700"
                >insurance product information document</a
              >
            </p>
          </div>
          <div class="col-span-1 text-end">
            <div>
    <span>
      <!-- Loading GIF -->
      <img
        v-if="loading"
        src="https://www.mozillion.com/img/ajax-loader.gif"
        alt=""
        class=""
      />
    </span>
    <button
      v-if="!addedToBasket && !loading"
      type="button"
      @click="addToBasket"
      class="px-4 py-1 mt-6 mb-4 text-black   font-extralight rounded-3xl bg-blue-600 hover:bg-black text-white"
    >
      Add to Basket
    </button>
    <button
      v-if="addedToBasket && !loading"
      type="button"
      @click="removeFromBasket"
      class="px-4 py-1 mt-6 mb-4 text-white bg-blue-600 border-2 border-blue-600 hover:text-black hover:bg-white font-extralight rounded-3xl"
    >
      Remove from Basket
    </button>
  </div>
          </div>
        </div>
        <div class="why-choose-insurance">
          <h3 class="py-5 text-xl text-gray-800 md:text-3xl">
            Why choose our insurance?
          </h3>
        </div>
        <div class="">
          <div class="grid grid-cols-1 space-y-4 lg:grid-cols-4">
            <div class="flex items-center gap-2">
              <i class="h-20">
                <img
                  class="object-cover w-full h-full"
                  src="https://res.cloudinary.com/mozillion/image/upload/q_100/v1669253561/piggy-bank_qlr99n.svg"
                  alt="piggy bank icon"
                />
              </i>
              <span
                class="block text-gray-800 text-lg font-semibold leading-6 mx-auto w-[60%]"
                >A screen repair can cost up to £349 without insurance
              </span>
            </div>
            <div class="flex items-center gap-2">
              <i class="h-20"
                ><img class="object-cover w-full h-full"
                  src="https://res.cloudinary.com/mozillion/image/upload/q_100/v1669253561/globe_liinj1.svg"
                  alt="globe icon"
              /></i>
              <span
                class="block text-gray-800 text-lg font-semibold leading-6 mx-auto w-[60%]"
                >Worldwide cover</span
              >
            </div>
            <div class="flex items-center gap-2">
              <i class="h-20"
                ><img class="object-cover w-full h-full"
                  src="https://res.cloudinary.com/mozillion/image/upload/q_100/v1669253561/check-circle_afbzew.svg"
                  alt="tick icon"
              /></i>
              <span
                class="block text-gray-800 text-lg font-semibold leading-6 mx-auto w-[60%]"
              >
                90% claim acceptance
              </span>
            </div>
            <div class="flex items-center gap-2">
              <i class="h-20"
                ><img class="object-cover w-full h-full"
                  src="https://res.cloudinary.com/mozillion/image/upload/q_100/v1669253561/phone-iphone_jjq11n.svg"
                  alt="phone icon"
              /></i>
              <span
                class="block text-gray-800 text-lg font-semibold leading-6 mx-auto w-[60%]"
              >
                Fast phone replacement
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1 text-end container !px-0">
      <button
        class="px-6 py-2 text-xl text-white bg-blue-600 hover:bg-black rounded-full font-extralight"
      >
        Continue without adding cover
      </button>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Tabs from "../components/Tabs.vue";
import Perks from "../components/Perks.vue";
import PopularHandset from "../components/PopularHandset.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      open: false,
      phone: "", // Initialize phone with an appropriate value
      addedToBasket: false,
      loading: false,
    };

  },
  methods: {
    addToBasket() {
      // Simulate an API call or any asynchronous action
      this.loading = true;
      setTimeout(() => {
        this.addedToBasket = true;
        this.loading = false;
      }, 2000); // Simulate loading for 2 seconds
    },
    removeFromBasket() {
      this.loading = true;
      setTimeout(() => {
        this.addedToBasket = false;
        this.loading = false;
      }, 2000); // Simulate loading for 2 seconds
    },
  },

  components: {
    Header,
    Tabs,
    Perks,
    PopularHandset,
    Footer,
  },
};
</script>
