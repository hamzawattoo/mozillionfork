<template>
  <div class="bg-[#1f9fff]">
    <div
      class="max-w-[1400px] mx-auto px-4 lg:px-12 2xl:px-4 2xl:max-w-[1700px] flex items-center justify-start gap-24 !py-5 text-white"
    >
      <h2 class="text-sm lg:text-xl font-light md:text-2xl">
        New and refurbished. Tested and guaranteed.
      </h2>
      <button class="text-xs lg:text-base text-white hover:text-black whitespace-nowrap">Clear all</button>
    </div>
  </div>
  <div class="max-w-[1400px] mx-auto px-4 lg:px-12 2xl:px-4 2xl:max-w-[1700px] text-sm text-gray-400 !mt-2">
      <a href="/">Home</a> > <a href="/buy">Buy</a> >
      <a href="/buy/apple" class="text-black">Apple</a>
    </div>
  <div class="flex items-center justify-between bg-[#1f9fff] py-3 px-4 text-white my-6 block md:hidden">
    <span class="font-bold">Filters</span>
    <button @click="toggleFilters"  class="">
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    </span>
    </button>
    
  </div>
  <div v-show="open" class="block md:hidden px-4">
      <Filters />
    </div>

  <div class="max-w-[1400px] mx-auto px-4 lg:px-12 2xl:px-4 2xl:max-w-[1700px] flex">
    <div class="hidden md:block">
      <Filters />
    </div>
    <div class="flex-1">
      <div class="flex flex-col items-center justify-center py-8 space-y-5">
        <h2 class="text-2xl 2xl:text-4xl font-medium">Refurbished iPhones for sale</h2>
        <div v-if="open" class="p-4 space-y-5">
          <p>
            Looking for a high-quality iPhone at a fraction of the cost of a new
            one? Look no further than our selection of refurbished iPhones for
            sale. At Mozillion, we offer a variety of refurbished iPhones that
            have been restored to like-new condition by our team of experts.
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
            with a 24-month warranty, giving you peace of mind knowing that your
            phone is covered in case of any defects.
          </p>
          <p>
            At Mozillion, we believe that everyone should have access to
            high-quality technology at an affordable price. Our selection of
            refurbished iPhones for sale allows you to get the latest iPhone at
            a fraction of the cost of a brand new one. With our rigorous testing
            process and 24-month warranty, you can trust that your refurbished
            iPhone will perform like new. Shop our selection of refurbished
            iPhones today and join the thousands of satisfied customers who have
            purchased from us.
          </p>
        </div>
        <button @click="toggle" class="text-blue-800">
          {{ open ? "Read less" : "Read more" }}
        </button>
        <hr class="my-4 border-t border-gray-300" />
        <div class="w-full py-2 border-t border-gray-300">
          <span class="px-5 text-sm text-gray-600">24 results</span>
        </div>
        <div
          class="grid min-w-full grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-4"
        > 
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" :src="phone" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" src="https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1662630218/mpm5oi5yzys61lazptzm.png" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-text-sm lg:text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" src="https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1662629153/pyouxn4cahqleboh7lqt.png" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" :src="phone" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" src="https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1662628004/m6zbd0dybnvvpxzaigap.png" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" src="https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1632465778/tgtbr8oblmiowfl9ptcm.png" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" :src="phone" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" :src="phone" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" :src="phone" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" :src="phone" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" :src="phone" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
          <div
            class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[40vh] 2xl:min-h-[50vh]"
          >
            <div class="block pb-5 text-md lg:text-xl 2xl:text-2xl font-thin text-gray-800">
              <a href="#">Apple iPhone 13 Pro</a>
            </div>
            <div class="flex items-center justify-center my-6 2xl:my-12">
              <a href="#">
                <img class="h-[12rem] 2xl:h-[14rem]" :src="phone" alt="img" />
              </a>
            </div>
            <div class="text-sm lg:text-base">
              <p>Buy from</p>
              <a
                class="block w-full px-0 py-2 text-base text-white bg-blue-700 rounded-full"
                href="#"
                >£639</a
              >
            </div>
          </div>
        </div>
        <div class="flex gap-4 px-4 py-4 item-center hidden">
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
</template>

<script>
import Filters from "../components/Filters.vue";
import phone from "../../images/glifakqdvbpbeyrsrnil.webp";
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
    toggleFilters() {
      this.open = !this.open;
    },
  },
  components: {
    Filters,
  },
};
</script>
