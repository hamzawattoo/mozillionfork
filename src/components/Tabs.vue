<script setup>
const brands = [
  "Apple",
  "Samsung",
  "Huawei",
  "Google",
  "OnePlus",
  "Sony",
  "Xiaomi",
  "Oppo",
  "Nokia",
  "Motorola",
  "LG",
  "HTC",
  "BlackBerry",
  "Lenovo",
  "Asus",
  "Microsoft",
  "ZTE",
  "Alcatel",
  "Vodafone",
  "Fairphone",
  "CAT",
  "Honor",
  "Razer",
  "Realme",
  "Tecno",
  "Meizu",
];
</script>

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
        class="absolute hidden group-hover:block z-10 w-[900px] -left-20 bg-blue-500 h-[700px] top-[69px]"
      >
        <div class="flex gap-4 p-4">
          <div>
            <h2 class="font-semibold text-white">Sell Phones</h2>

            <div class="flex flex-col">
              <div
                class="space-y-2"
                v-for="(brand, index) in brands"
                :key="index"
              >
                <a href="#" class="font-light border-b border-white">
                  {{ brand }}
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 class="font-semibold text-white">Sell Tablets</h2>
            <div>
              <a href="#" class="font-light border-b border-white"> Apple </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative h-full group">
      <button
        class="px-6 py-6 text-sm font-light border-b-2 border-transparent hover:border-white"
      >
        Tablets
      </button>
      <div
        class="absolute hidden group-hover:block z-10 w-[900px] -right-[500px] bg-blue-500 h-[700px] top-[69px]"
      >
        <div class="flex gap-4 p-4">
          <div>
            <h2 class="font-semibold text-white">Sell Phones</h2>

            <div class="flex flex-col">
              <div
                class="space-y-2"
                v-for="(brand, index) in brands"
                :key="index"
              >
                <a href="#" class="font-light border-b border-white">
                  {{ brand }}
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 class="font-semibold text-white">Sell Tablets</h2>
            <div>
              <a href="#" class="font-light border-b border-white"> Apple </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative h-full group">
      <button
        class="px-6 py-6 text-sm font-light border-b-2 border-transparent hover:border-white"
      >
        Sell
      </button>
      <div
        class="absolute hidden lg:hidden group-hover:block z-10 w-[900px] -left-[600px] bg-blue-500 h-[700px] top-[69px]"
      >
        <div class="flex gap-4 p-4">
          <div>
            <h2 class="font-semibold text-white">Sell Phones</h2>

            <div class="flex flex-col">
              <div
                class="space-y-2"
                v-for="(brand, index) in brands"
                :key="index"
              >
                <a href="#" class="font-light border-b border-white">
                  {{ brand }}
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 class="font-semibold text-white">Sell Tablets</h2>
            <div>
              <a href="#" class="font-light border-b border-white"> Apple </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-sm font-light">
      <h2 class="font-bold">Sales Line:</h2>
      <p>Mon-Fri 9am-6pm</p>
      <p>020 4516 3885</p>
    </div>
  </div>
</template>

<style scoped></style>
