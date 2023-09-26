<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import Switch from "./Switch.vue";

const features = [
  "Android phone",
  "Back to School",
  "Gaming Phone",
  "Large Screen Phone",
  "Premium Phone",
  "Small Screen Phone",
  "Tablet",
  "Waterproof Phone",
  "Budget Phone",
  "Camera Phone",
  "Foldable Phone",
  "iPhone",
  "Mid-Range Phone",
  "Same Day Delivery",
];
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
  <div class="hidden px-3 py-4 md:block !min-w-[300px]">
    <div class="text-sm text-gray-400">
      <a href="/">Home</a> > <a href="/buy">Buy</a> >
      <a href="/buy/apple" class="text-black">Apple</a>
    </div>

    <div class="flex flex-col w-full mt-3">
      <Disclosure>
        <DisclosureButton class="py-2">
          <div
            class="flex items-center justify-between w-full pb-1 border-b border-gray-300"
          >
            <span class="font-medium text-gray-800"> Features </span>
            <span class="pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </DisclosureButton>
        <DisclosurePanel class="space-y-3">
          <div class="px-4 text-sm font-light" v-for="feature in features">
            <a href="#">{{ feature }}</a>
          </div>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure>
        <DisclosureButton class="py-2">
          <div
            class="flex items-center justify-between w-full pb-1 border-b border-gray-300"
          >
            <span class="font-medium text-gray-800"> Brands </span>
            <span class="pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </DisclosureButton>
        <DisclosurePanel class="space-y-3">
          <div
            class="flex items-center gap-2 text-sm font-light"
            v-for="brand in brands"
          >
            <Switch />
            <span href="#">{{ brand }}</span>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton class="py-2">
          <div
            class="flex items-center justify-between w-full pb-1 border-b border-gray-300"
          >
            <span class="font-medium text-gray-800"> Models </span>
            <span class="pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </DisclosureButton>
        <DisclosurePanel class="space-y-3">
          <div
            class="flex items-center gap-2 text-sm font-light"
            v-for="brand in brands"
          >
            <Switch />
            <span href="#">{{ brand }}</span>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton class="py-2">
          <div
            class="flex items-center justify-between w-full pb-1 border-b border-gray-300"
          >
            <span class="font-medium text-gray-800"> Capacity </span>
            <span class="pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </DisclosureButton>
        <DisclosurePanel class="space-y-3">
          <div
            class="flex items-center gap-2 text-sm font-light"
            v-for="brand in brands"
          >
            <Switch />
            <span href="#">{{ brand }}</span>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton class="py-2">
          <div
            class="flex items-center justify-between w-full pb-1 border-b border-gray-300"
          >
            <span class="font-medium text-gray-800"> Colour </span>
            <span class="pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </DisclosureButton>
        <DisclosurePanel class="space-y-3">
          <div
            class="flex items-center gap-2 text-sm font-light"
            v-for="brand in brands"
          >
            <Switch />
            <span href="#">{{ brand }}</span>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton class="py-2">
          <div
            class="flex items-center justify-between w-full pb-1 border-b border-gray-300"
          >
            <span class="font-medium text-gray-800"> Price </span>
            <span class="pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </DisclosureButton>
        <DisclosurePanel class="space-y-3">
          <div
            class="flex items-center gap-2 text-sm font-light"
            v-for="brand in brands"
          >
            <Switch />
            <span href="#">{{ brand }}</span>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <div class="flex items-center gap-2 py-4 text-sm font-light">
        <Switch />
        <span class="text-base font-medium text-gray-800" href="#"
          >Show only 'Buy it now' prices</span
        >
      </div>
    </div>
  </div>
</template>

<style></style>
