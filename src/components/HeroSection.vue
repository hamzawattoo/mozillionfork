<script setup>
import removebg from "../../images/download-removebg-preview.png";
</script>

<template>
  <section>
    <div class="bg-purple-800 min-h-[300px] md:min-h-[65vh] relative">
      <div class="px-2 pt-12 mx-auto max-w-7xl">
        <div class="justify-between md:flex">
          <div class="">
            <h1
              class="block text-lg font-medium text-white sm:text-2xl lg:text-5xl leading-15"
            >
              Buying or Selling a Phone?
            </h1>
            <p
              class="pt-4 text-lg text-white sm:text-2xl lg:text-5xl leading-15 font-extralight"
            >
              Do it Risk free...
            </p>
            <p
              class="hidden pt-6 text-sm font-thin leading-9 text-white md:flex lg:text-2xl"
            >
              Good-As-New Refurbished iPhones, plus a 24 month warranty - free
            </p>
          </div>
        </div>

        <div
          class="absolute left-0 right-0 z-10 flex items-center justify-center gap-4 bottom-5 md:bottom-40"
        >
          <div
            class="px-3 py-1 font-thin text-white bg-blue-500 hover:bg-blue-900 border-2 border-blue-500 border-solid rounded-full text-uppercase md:mr-10 md:px-10 md:py-3 md:text-2xl"
          >
            <a class="" href=""
              >Buy a Phone</a
            >
          </div>
          <div
            class="px-3 py-1 font-thin text-white uppercase bg-green-600 hover:bg-green-800 border-2 border-white border-solid rounded-full md:border-3 md:px-10 md:py-3 md:text-2xl"
          >
            <a class="" href="https://www.mozillion.com/search-brand-sale/apple"
              >Sell a Phone</a
            >
          </div>
        </div>
        <div class="absolute bottom-0 right-10">
          <img class="h-72 md:h-auto" :src="removebg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
