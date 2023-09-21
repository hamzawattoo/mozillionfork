<script setup>
import apple from "../../images/apple_efaod1.webp";
import samsung from "../../images/samsung_cvkoko.webp";
import google from "../../images/google_toswgz.webp";
import oneplus from "../../images/oneplus_r4gd5i.webp";
import sony from "../../images/sony_qcsagl.webp";
import nokia from "../../images/nokia_acjr6e.webp";
</script>

<template>
  <section>
    <div class="mt-12 bg-white border">
      <div
        class="grid items-center justify-center grid-cols-2 px-5 py-4 mx-auto mt-5 bg-white md:grid-cols-6 md:space-x-5 max-w-7xl"
      >
        <div class="h-12 px-4 sell-mobile-logo w-30">
          <a href="#">
            <img class="object-contain w-full h-full" :src="apple" alt="img" />
          </a>
        </div>
        <div class="h-12 px-4 sell-mobile-logo w-30">
          <a href="#">
            <img
              class="object-contain w-full h-full"
              :src="samsung"
              alt="img"
            />
          </a>
        </div>
        <div class="h-12 px-4 sell-mobile-logo w-30">
          <a href="#">
            <img class="object-contain w-full h-full" :src="google" alt="img" />
          </a>
        </div>
        <div class="h-12 px-4 sell-mobile-logo w-30">
          <a href="#">
            <img
              class="object-contain w-full h-full"
              :src="oneplus"
              alt="img"
            />
          </a>
        </div>
        <div class="h-12 px-4 sell-mobile-logo w-30">
          <a href="#">
            <img class="object-contain w-full h-full" :src="sony" alt="img" />
          </a>
        </div>
        <div class="h-12 px-4 sell-mobile-logo w-30">
          <a href="#">
            <img class="object-contain w-full h-full" :src="nokia" alt="img" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
