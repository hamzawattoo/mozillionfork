<script setup>
import sun from "../../images/the_sun_iktjeb.webp";
import pocket from "../../images/pocket_game_tym7dx.webp";
import bbc from "../../images/bbc_g9rkhi.webp";
import indy from "../../images/the_indy_jfmjty.webp";
import whatMobile from "../../images/what_mobile_xy0l4k.webp";
</script>

<template>
  <section>
    <div class="my-12 text-center">
      <h1 class="text-xl md:text-3xl font-medium text-gray-800">As seen in...</h1>
    </div>

    <div class="px-5 py-4 mt-2 bg-white">
      <div
        class="flex flex-wrap items-center justify-center mx-auto space-x-5 max-w-7xl"
      >
        <div>
          <img class="h-20" :src="sun" alt="img" />
        </div>
        <div>
          <img class="h-20" :src="pocket" alt="img" />
        </div>
        <div><img class="h-20" :src="bbc" alt="img" /></div>
        <div>
          <img class="h-20" :src="indy" alt="img" />
        </div>
        <div>
          <img class="h-20" :src="whatMobile" alt="img" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
