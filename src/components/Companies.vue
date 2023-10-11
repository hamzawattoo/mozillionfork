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
    <div class="my-16 bg-white border">
      <div
        class="grid items-start justify-center grid-cols-2 px-5 py-6 mx-auto bg-white md:grid-cols-6 gap-y-5 md:space-y-0 space-x-0 md:space-x-5 max-w-[1400px]"
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
