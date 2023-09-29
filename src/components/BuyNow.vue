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
        <span class="text-gray-700"> Only 9 available at this price </span>
      </div>
      <div class="w-full px-3">
        <h2 class="py-2 text-lg text-gray-400">Delivery</h2>
        <hr />
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 py-2">
            <Switch />
            <span class="text-lg">Fast, free delivery 2-4 working days</span>
          </div>
          <span class="px-2 text-xs font-semibold"> Free </span>
        </div>
      </div>
      <div class="w-full px-3 bg-gray-50">
        <h2 class="py-2 text-lg text-gray-400">Insurance</h2>
        <hr />
        <div class="flex items-center justify-between gap-2 py-2">
          <div class="flex items-center gap-2 py-2">
            <Switch />
            <span class="text-lg">First two monts free</span>
          </div>
          <span class="px-2 text-xs font-semibold"> £10.99 </span>
        </div>
      </div>
      <div class="w-full px-3 bg-gray-50">
        <h2 class="py-2 text-lg text-gray-400">Warranty and Returns</h2>
        <hr />
        <div class="flex items-center justify-between gap-2 py-2">
          <div class="flex items-center gap-2 py-2">
            <span class="text-lg font-semibold"
              >Free 24-month warranty and 30-day no quiddable returns</span
            >
          </div>
          <span class="px-2 text-xs font-semibold"> £10.99 </span>
        </div>
      </div>
      <div class="flex items-center justify-between w-full px-3 py-2">
        <div>
          <p class="text-lg font-light">Total Price</p>
        </div>
        <div>
          <p class="text-lg font-light">£949.00</p>
        </div>
      </div>
      <div class="py-2 border-b"></div>
    </div>
  </div>
</template>
<script setup>
import Switch from "./Switch.vue";
</script>
