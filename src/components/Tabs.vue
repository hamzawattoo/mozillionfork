<script setup></script>

<template>
  <div
    class="lg:flex hidden text-white items-center justify-around bg-[#102133] w-full"
  >
    <div class="relative h-full group">
      <button
        class="px-6 py-6 text-sm font-light border-b-2 border-transparent hover:border-white"
      >
        Phone
      </button>
      <div
        class="absolute hidden group-hover:block z-10 w-[900px] -left-20 bg-blue-500 h-[400px] top-[69px]"
      ></div>
    </div>
    <div class="relative h-full group">
      <button
        class="px-6 py-6 text-sm font-light border-b-2 border-transparent hover:border-white"
      >
        Tablets
      </button>
      <div
        class="absolute hidden group-hover:block z-10 w-[900px] -right-[500px] bg-blue-500 h-[400px] top-[69px]"
      ></div>
    </div>
    <div class="relative h-full group">
      <button
        class="px-6 py-6 text-sm font-light border-b-2 border-transparent hover:border-white"
      >
        Sell
      </button>
      <div
        class="absolute hidden lg:hidden group-hover:block z-10 w-[900px] -left-[600px] bg-blue-500 h-[400px] top-[69px]"
      ></div>
    </div>
    <div class="text-sm font-light">
      <h2 class="font-bold">Sales Line:</h2>
      <p>Mon-Fri 9am-6pm</p>
      <p>020 4516 3885</p>
    </div>
  </div>
</template>

<style scoped></style>
