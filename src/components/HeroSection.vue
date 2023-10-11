<script setup>
import removebg from "../../images/download-removebg-preview.png";
</script>

<template>
  <section>
    <div class="bg-purple-800 min-h-[300px] md:min-h-[400px] lg:min-h-[600px] relative">
      <div class="sm:pl-24 lg:pl-8 px-2 pt-12 mx-auto max-w-7xl">
        <div class="justify-between md:flex">
          <div class="">
            <h1
              class="block text-lg font-medium text-white lg:text-4xl 2xl:text-5xl leading-15"
            >
              Buying or Selling a Phone?
            </h1>
            <p
              class="pt-4 text-lg text-white sm:text-2xl lg:text-4xl 2xl:text-5xl leading-15 font-extralight"
            >
              Do it Risk free...
            </p>
            <p
              class="hidden pt-6 text-sm font-thin leading-9 text-white md:flex lg:text-lg 2xl:text-2xl"
            >
              Good-As-New Refurbished iPhones, plus a 24 month warranty - free
            </p>
          </div>
        </div>

        <div
          class="absolute lg:left-0 lg:right-0 z-10 flex items-center justify-center gap-x-4 bottom-5 lg:bottom-40"
        >
          <div
            class="px-3 py-1 font-thin text-white bg-blue-500 hover:!bg-transparent border-2 border-[#1f9fff] border-solid hover:border-white rounded-full text-uppercase lg:mr-10 lg:px-7 lg:py-2.5 text-xl 2xl:text-2xl"
          >
            <a class="" href=""
              >Buy a Phone</a
            >
          </div>
          <div
            class="px-3 py-1 font-thin text-white bg-[#26D369] hover:bg-transparent border-2 border-[#26D369] border-solid hover:border-white rounded-full lg:px-7 lg:py-2.5 text-xl 2xl:text-2xl"
          >
            <a class="" href="https://www.mozillion.com/search-brand-sale/apple"
              >Sell a Phone</a
            >
          </div>
        </div>
        <div class="absolute bottom-0 right-10">
          <img class=" h-[30vh] md:h-[40vh] lg:h-[60vh]" :src="removebg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
