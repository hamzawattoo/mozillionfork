<template>
  <div>
    <Header />
    <Tabs />
    <div class="px-6 py-8 bg-[#1f9fff] flex items-center gap-12 text-white">
      <h2 class="text-2xl font-light">
        New and refurbished. Tested and guaranteed.
      </h2>
      <button class="hover:text-black">Clear all</button>
    </div>
    <div class="flex">
      <Filters />
      <div class="flex-1">
        <div class="flex flex-col items-center justify-center py-8 space-y-5">
          <h2 class="text-4xl font-light">Refurbished iPhones for sale</h2>
          <div v-if="open" class="p-4 space-y-5">
            <p>
              Looking for a high-quality iPhone at a fraction of the cost of a
              new one? Look no further than our selection of refurbished iPhones
              for sale. At Mozillion, we offer a variety of refurbished iPhones
              that have been restored to like-new condition by our team of
              experts.
            </p>
            <h2 class="text-2xl font-light">Why buy an iPhone from us?</h2>
            <p>
              At Mozillion, we take great care in refurbishing our iPhones. Each
              phone undergoes a rigorous inspection to ensure that it meets our
              high standards of quality. When you purchase a refurbished iPhone
              from us, you can be confident that you're getting a high-quality
              product. Plus, our prices are some of the most competitive in the
              industry, so you can save money without sacrificing quality. Our
              fast and reliable shipping ensures that you'll receive your
              refurbished iPhone as soon as possible, and all of our phones come
              with a 24-month warranty, giving you peace of mind knowing that
              your phone is covered in case of any defects.
            </p>
            <p>
              At Mozillion, we believe that everyone should have access to
              high-quality technology at an affordable price. Our selection of
              refurbished iPhones for sale allows you to get the latest iPhone
              at a fraction of the cost of a brand new one. With our rigorous
              testing process and 24-month warranty, you can trust that your
              refurbished iPhone will perform like new. Shop our selection of
              refurbished iPhones today and join the thousands of satisfied
              customers who have purchased from us.
            </p>
          </div>
          <button @click="toggle" class="text-blue-800">
            {{ open ? "Read less" : "Read more" }}
          </button>
          <hr class="my-4 border-t border-gray-300" />
          <div class="w-full py-2 border-t">
            <span class="px-5 text-sm text-gray-600">24 results</span>
          </div>
          <div class="grid grid-cols-1 gap-6 px-5 md:grid-cols-4 md:px-4">
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
            <div
              class="flex flex-col px-4 py-4 text-center bg-white rounded-xl"
            >
              <div class="block pb-5 text-2xl font-thin text-gray-800">
                <a href="#">Apple iPhone 13 Pro</a>
              </div>
              <div class="flex items-center justify-center my-12">
                <a href="#">
                  <img class="h-36" :src="phone" alt="img" />
                </a>
              </div>
              <div class="apple-tx-buy">
                <p>Buy from</p>
                <a
                  class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                  href="#"
                  >£639</a
                >
              </div>
            </div>
          </div>
          <div class="flex gap-4 px-4 py-4 item-center">
            <button class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <button
              class="w-8 h-8 text-sm text-black bg-gray-200 rounded-full hover:bg-black"
              v-for="page in [1, 2, 3]"
            >
              {{ page }}
            </button>
            <button class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Reviews />
    <PopularHandset />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Tabs from "../components/Tabs.vue";
import phone from "../../images/glifakqdvbpbeyrsrnil.webp";
import Reviews from "../components/Reviews.vue";
import PopularHandset from "../components/PopularHandset.vue";
import Filters from "../components/Filters.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      open: false,
      phone,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
  components: {
    Filters,
    Header,
    Tabs,
    Reviews,
    PopularHandset,
    Footer,
  },
};
</script>

<style></style>
