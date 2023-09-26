<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
const brands = [
  "All brand new phones",
  "All Refurbished Phones",
  "Current Best Buys",
  "Sell Your Phones",
  "Popular Searches:",
  "Sell Your Phones",
  "Sell Your Phones",
  "Sell Your Phones",
  "Sell Your Phones",
  "Sell Your Phones",
  "Sell Your Phones",
  "Sell Your Phones",
  "Sell Your Phones",
  "Sell Your Phones",
  "Sell Your Phones",
];
const brandv = [
  "Apples Phones",
  "Brand New Iphone",
  "Brand New Iphone",
  "Models:",
  "Brand New Iphone",
  "Brand New Iphone",
  "Brand New Iphone",
  "Brand New Iphone",
  "Brand New Iphone",
  "Brand New Iphone",
  "Brand New Iphone",
  "Brand New Iphone",
  "Brand New Iphone",
];
</script>

<template>
  <div class="bg-[#102133] w-full py-3 !px-4">
    <div
      class="container items-center justify-around hidden text-white lg:flex"
    >
      <div class="relative h-full group">
        <button
          class="px-6 py-6 text-xl border-b-2 border-transparent font-extralight hover:border-white"
        >
          Phone
        </button>
        <div
          class="absolute hidden group-hover:block z-50 min-w-[100vw] xl:min-w-[80vw] w-full -left-20 bg-blue-500 top-[69px]"
        >
          <div class="flex justify-between">
            <div class="px-8 py-2 min-w-fit">
              <div class="flex flex-col">
                <div
                  class="space-y-4 border-b py-1.5"
                  v-for="(brand, index) in brands"
                  :key="index"
                >
                  <a href="#" class="text-xl border-white font-extralight">
                    {{ brand }}
                  </a>
                </div>
              </div>
            </div>
            <carousel />
            <div class="px-5 py-4 w-96">
              <div
                class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[50vh]"
              >
                <div class="block pb-5 text-2xl font-thin text-gray-800">
                  <a href="#">Apple iPhone 13 Pro</a>
                </div>
                <div class="flex items-center justify-center my-12">
                  <a href="#">
                    <img class="h-56" :src="phone" alt="img" />
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
          </div>
        </div>
      </div>
      <div class="relative h-full group">
        <button
          class="px-6 py-6 text-xl border-b-2 border-transparent font-extralight hover:border-white"
        >
          Tablets
        </button>
        <div
          class="absolute hidden group-hover:block z-50 min-w-[60vw] -right-[500px] bg-blue-500 h-[700px] top-[69px]"
        >
          <div class="grid grid-cols-4 gap-6 p-4">
            <div>
              <h2 class="text-xl font-semibold text-white">Samsung Phones</h2>
              <div
                class="space-y-2 border-b py-1.5"
                v-for="(brand, index) in brandv"
                :key="index"
              >
                <a
                  href="#"
                  class="text-xl border-white font-extralight"
                  :class="{ 'apple-brand': brand === 'Models:' }"
                >
                  {{ brand }}
                </a>
              </div>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-white">Apple phones</h2>
              <div
                class="space-y-2 border-b py-1.5"
                v-for="(brand, index) in brandv"
                :key="index"
              >
                <a
                  href="#"
                  class="text-xl border-white font-extralight"
                  :class="{ 'apple-brand': brand === 'Models:' }"
                >
                  {{ brand }}
                </a>
              </div>
            </div>
            <div>
              <h2 class="font-semibold text-white">Google Phones</h2>
              <div
                class="space-y-2 border-b py-1.5"
                v-for="(brand, index) in brands"
                :key="index"
              >
                <a
                  href="#"
                  class="text-xl border-white font-extralight"
                  :class="{ 'apple-brand': brand === 'Models:' }"
                >
                  {{ brand }}
                </a>
              </div>
            </div>
            <div>
              <div
                class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[50vh]"
              >
                <div class="block pb-5 text-2xl font-thin text-gray-800">
                  <a href="#">Apple iPhone 13 Pro</a>
                </div>
                <div class="flex items-center justify-center my-12">
                  <a href="#">
                    <img class="h-56" :src="phone" alt="img" />
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
          </div>
        </div>
      </div>
      <div class="relative h-full group">
        <button
          class="px-6 py-6 text-xl border-b-2 border-transparent font-extralight hover:border-white"
        >
          Sell
        </button>
        <div
          class="absolute hidden lg:hidden group-hover:block z-50 w-[70vw] -left-[600px] bg-blue-500 h-[700px] top-[69px]"
        >
          <div class="grid grid-cols-3 gap-6 p-4">
            <div>
              <h2 class="text-xl font-semibold text-white">Samsung Phones</h2>
              <div
                class="space-y-2 border-b py-1.5"
                v-for="(brand, index) in brandv"
                :key="index"
              >
                <a
                  href="#"
                  class="text-xl border-white font-extralight"
                  :class="{ 'apple-brand': brand === 'Models:' }"
                >
                  {{ brand }}
                </a>
              </div>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-white">Apple phones</h2>
              <div
                class="space-y-2 border-b py-1.5"
                v-for="(brand, index) in brandv"
                :key="index"
              >
                <a
                  href="#"
                  class="text-xl border-white font-extralight"
                  :class="{ 'apple-brand': brand === 'Models:' }"
                >
                  {{ brand }}
                </a>
              </div>
            </div>

            <div>
              <div
                class="flex flex-col justify-between px-4 py-4 text-center bg-white rounded-xl min-h-[50vh]"
              >
                <div class="block pb-5 text-2xl font-thin text-gray-800">
                  <a href="#">Apple iPhone 13 Pro</a>
                </div>
                <div class="flex items-center justify-center my-12">
                  <a href="#">
                    <img class="h-64" :src="phone" alt="img" />
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
          </div>
        </div>
      </div>
      <div class="text-lg font-extralight">
        <h2 class="font-bold">Sales Line:</h2>
        <p>Mon-Fri 9am-6pm</p>
        <p>020 4516 3885</p>
      </div>
    </div>
  </div>
</template>
<script>
import phone from "../../images/glifakqdvbpbeyrsrnil.webp";
import Carousel from "./Carousel.vue";
</script>
<style scoped>
.apple-brand {
  font-weight: 500;
}
</style>
