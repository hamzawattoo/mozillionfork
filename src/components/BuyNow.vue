<template>
  <div>
    <div class="flex flex-col items-center justify-center py-4">
      <div
        class="w-56 max-w-xs px-4 py-3 text-2xl text-center rounded-full outline-none bg-blue-50 placeholder-middle"
      >
        £949
      </div>
      <div
        class="border-y border-r border-l-[6px] border-red-700 inline-block p-2 rounded my-4"
      >
        <span class="text-red-700"> Only 9 available at this price </span>
      </div>
      <div class="w-full px-5">
        <h2 class="py-2 text-lg text-gray-400">Delivery</h2>
        <hr />
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 py-4">
           <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path></svg>
           </span>
            <span class="text-base"><i>Fast, free delivery 2-4 working days</i></span>
          </div>
          <span class="px-2 text-md font-bold"> Free </span>
        </div>
      </div>
      <div class="w-full px-5 bg-gray-50">
        <h2 class="py-2 text-lg text-gray-400">Insurance</h2>
        <hr />
        <div class="flex items-start justify-between gap-5 py-2">
          <div class="flex items-start gap-2 py-2 max-w-xs">
            <Switch />
            <span class="text-base ">First 2-months free, click for T&Cs thereafter
            <span><i class="fa fa-info-circle text-blue-500"></i></span>  
            </span>
          </div>
          <div class="">
            <img src="https://www.mozillion.com/img/insurance-tip.png" alt="">
          </div>
          <span class="px-2 text-md font-bold"> £10.99 </span>
        </div>
      </div>
      <div class="w-full px-5 bg-gray-50">
        <h2 class="py-2 text-lg text-gray-400">Warranty and Returns</h2>
        <hr />
        <div class="flex items-center justify-between gap-2 py-4 bg-blue-50">
          <div class="flex items-center gap-2 py-2 ">
            <span class="text-md font-semibold"
              >Free 24-month warranty and 30-day <br> no quiddable returns</span
            >
          </div>
          <span class="px-2 text-xs font-semibold hidden"> £10.99 </span>
        </div>
      </div>
      <div class="flex items-center justify-between w-full px-5 py-2">
        <div>
          <p class="text-lg font-medium">Total Price</p>
        </div>
        <div>
          <p class="text-2xl font-light">£949.00</p>
        </div>
      </div>
      <div class="py-2 border-b"></div>
    </div>
  </div>
</template>
<script setup>
import Switch from "./Switch.vue";
</script>
