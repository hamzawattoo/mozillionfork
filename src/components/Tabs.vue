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
  "Same Day Delivery",
  "Camera Phones",
  "Budget Phones",
  "Foldable Phones",
  "Android Phones",
  "Sale",
  "Premium Phone",
  "Large Screen Phone",

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
  <div class="bg-[#102133] w-full !px-4 flex  ">
    <div
      class="max-w-7xl w-full mx-auto items-center justify-between px-[190px] hidden text-white lg:flex pt-1"
    >
      <div class="relative h-full group">
        <button
          class="px-6 py-6 h-full text-[1.25] 2xl:text-[1vw] border-b-2 border-transparent font-extralight hover:border-white"
        >
          Phones
        </button>
        <div
          class="absolute hidden group-hover:block z-50 min-w-[90vw] 2xl:min-w-[80vw] h-[80vh] w-full  -left-40 bg-blue-500 top-[100%]"
        >
          <div class="flex justify-start xl:justify-between">
            <div class="flex items-start">
               <div class="px-8 py-2 min-w-fit">
              <div class="flex flex-col">
                <div
                  class="space-y-6 border-b py-4"
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
            </div>
           
            <div class="px-5 py-4 hidden xl:block bg-blue-500">
              <div
                class="flex flex-col justify-between px-8 py-4 text-center w-full max-w-xl bg-white rounded-xl  "
              >
                <div class="block pb-5 text-2xl font-thin text-gray-800">
                  <a href="#">Apple iPhone 13 Pro</a>
                </div>
                <div class="flex items-center justify-center my-3">
                  <a href="#">
                    <img class="w-56" :src="phone" alt="img" />
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
          class="px-6 py-6 h-full text-[1.25] 2xl:text-[1vw] border-b-2 border-transparent font-extralight hover:border-white"
        >
          Tablets
        </button>
        <div
          class="absolute hidden group-hover:block z-50 min-w-[90vw] xl:min-w-[55vw] min-h-[80vh] -left-[400px] xl:-left-[400px] bg-blue-500 h-[700px] top-[100%]"
        >
          <div class="grid grid-cols-3 gap-6 px-8 py-6">
            <div class="max-w-[200px]">
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
            <div class="max-w-[200px]">
              <h2 class="text-xl font-semibold text-white">Apple phones</h2>
              <div
                class="space-y-4 border-b py-3"
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
            <div class="max-w-[200px]">
              <h2 class="text-xl font-semibold text-white">Google Phones</h2>
              <div
                class="space-y-2 border-b py-3"
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
            <div class="col-span-2 px-5 py-4 hidden xl:bl ock">
              <div
                class="flex flex-col justify-between px-8 py-4 text-center w-full max-w-xs bg-white rounded-xl"
              >
                <div class="block pb-5 text-2xl font-thin text-gray-800">
                  <a href="#">Apple iPhone 13 Pro</a>
                </div>
                <div class="flex items-center justify-center my-3">
                  <a href="#">
                    <img class="w-56" :src="phone" alt="img" />
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
          class="px-6 py-6 h-full text-[1.25] 2xl:text-[1vw] border-b-2 border-transparent font-extralight hover:border-white"
        >
          Sell
        </button>
        <div
          class="absolute hidden lg:hidden group-hover:block z-50 w-[80vw] 2xl:w-[50vw] -right-[300px] 2xl:-left-[600px] bg-blue-500 h-[700px] top-[100%]"
        >
          <div class="flex items-start justify-between gap-6 px-8 py-6">
            <div class="flex items-start justify-start gap-x-12">
              <div class="max-w-[200px]">
              <h2 class="text-xl font-semibold text-white">Samsung Phones</h2>
              <div
                class="space-y-2 border-b py-3"
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
            <div class="max-w-[200px]">
              <h2 class="text-xl font-semibold text-white">Apple phones</h2>
              <div
                class="space-y-2 border-b py-3"
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
            </div>
          

            <div class="text-end">
              <div class="hidden xl:block bg-blue-500">
              <div
                class="flex flex-col justify-between px-8 py-4 text-center w-full max-w-xl bg-white rounded-xl  "
              >
                <div class="block pb-5 text-2xl font-thin text-gray-800">
                  <a href="#">Apple iPhone 13 Pro</a>
                </div>
                <div class="flex items-center justify-center my-3">
                  <a href="#">
                    <img class="w-56" :src="phone" alt="img" />
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
      </div>
     
    </div>
    <div class="xl:text-[0.875vw] font-extralight text-white w-[19vw] pt-3 hidden text-white lg:flex pt-1">
        <div class="">
            <h2 class="font-bold">Sales Line:</h2>
          <p class="font-medium">Mon-Fri 9am-6pm</p>
          <p class="font-medium">020 4516 3885</p>
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
