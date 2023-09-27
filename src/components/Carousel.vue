<script setup></script>

<template>
  <div class="carousel">
    <div
      class="flex items-center gap-2 overflow-x-scroll no-scrollbar w-[800px] carousel__container scroll-behavior: smooth; transition: all 0.5s ease-in-out;"
    >
      <div class="flex gap-2 carousel__item">
        <div class="">
          <div class="px-8 py-2 w-80">
            <h2 class="text-xl font-semibold text-white">Samsddfung Phones</h2>
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
        <div>
          <div class="px-8 py-2 w-80">
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
        </div>
      </div>
      <div class="flex gap-2">
        <div>
          <div class="px-8 py-2 w-80">
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
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-3 py-4">
      <button class="px-4 py-3 text-black bg-white rounded" @click="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        class="flex items-center gap-2 px-4 py-3 text-black bg-white rounded"
        @click="next"
      >
        <span class="font-medium">More Brands</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style>
.carousel__container {
  scroll-behavior: smooth;
}
</style>

<script>
import { ref } from "vue";

export default {
  setup() {
    const numberOfSlides = 2;
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
    ];
    return {
      numberOfSlides,
      brandv,
    };
  },
  methods: {
    next() {
      const carouselItem = document.querySelector(".carousel__item");
      const carouselItemWidth = carouselItem.offsetWidth;

      // scroll div on clicking
      const container = document.querySelector(".carousel__container");
      container.scrollLeft += carouselItemWidth;
    },
    prev() {
      const carouselItem = document.querySelector(".carousel__item");

      const carouselItemWidth = carouselItem.offsetWidth;
      // scroll div on clicking
      const container = document.querySelector(".carousel__container");
      container.scrollLeft -= carouselItemWidth;
    },
  },
};
</script>
