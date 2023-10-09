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
 
  <div class="hid den py-4 md:b lock !min-w-[300px]">
   

    <div class="flex flex-col w-full mt-3 space-y-1.5">
      <Disclosure>
        <DisclosureButton class="">
          <div>
            <button @click="toggleRotation1" class=" w-full">
              <div class="flex items-center justify-between w-full pb-1 border-b border-gray-300">
                <span class="font-medium text-gray-800"> Features </span>
                <span :class="{ 'rotate-180': isRotated1 }" class="pt-1 transform transition-transform duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 transform transition-transform duration-300 ease-in-out"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </DisclosureButton>
        <DisclosurePanel class="space-y-3 transition delay-150 duration-300 ease-in-out">
          <div class="px-4 text-sm font-light" v-for="feature in features">
            <a href="#">{{ feature }}</a>
          </div>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure>
        <DisclosureButton class="">
          <div>
            <button @click="toggleRotation" class=" w-full">
              <div class="flex items-center justify-between w-full pb-1 border-b border-gray-300">
                <span class="font-medium text-gray-800"> Brands </span>
                <span :class="{ 'rotate-180': isRotated }" class="pt-1 transform transition-transform duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 transform transition-transform duration-300 ease-in-out"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </div>
            </button>
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
        <DisclosureButton class="">
          <div>
            <button @click="toggleRotation2" class=" w-full">
              <div class="flex items-center justify-between w-full pb-1 border-b border-gray-300">
                <span class="font-medium text-gray-800"> Models </span>
                <span :class="{ 'rotate-180': isRotated2 }" class="pt-1 transform transition-transform duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 transform transition-transform duration-300 ease-in-out"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </div>
            </button>
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
        <DisclosureButton class="">
          <div>
            <button @click="toggleRotation3" class=" w-full">
              <div class="flex items-center justify-between w-full pb-1 border-b border-gray-300">
                <span class="font-medium text-gray-800"> Capacity </span>
                <span :class="{ 'rotate-180': isRotated3 }" class="pt-1 transform transition-transform duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 transform transition-transform duration-300 ease-in-out"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </div>
            </button>
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
        <DisclosureButton class="">
          <div>
            <button @click="toggleRotation4" class=" w-full">
              <div class="flex items-center justify-between w-full pb-1 border-b border-gray-300">
                <span class="font-medium text-gray-800"> Color </span>
                <span :class="{ 'rotate-180': isRotated4 }" class="pt-1 transform transition-transform duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 transform transition-transform duration-300 ease-in-out"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </div>
            </button>
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
        <DisclosureButton class="">
          <div>
            <button @click="toggleRotation5" class=" w-full">
              <div class="flex items-center justify-between w-full pb-1 border-b border-gray-300">
                <span class="font-medium text-gray-800"> Price </span>
                <span :class="{ 'rotate-180': isRotated5 }" class="pt-1 transform transition-transform duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 transform transition-transform duration-300 ease-in-out"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </div>
            </button>
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
      <div class="flex items-center gap-2 py-3 text-sm font-light">
        <Switch />
        <span class="text-base font-medium text-gray-800" href="#"
          >Show only 'Buy it now' prices</span
        >
      </div>
      <div class="flex items-center gap-2  text-sm font-light">
        <Switch />
        <span class="text-base font-medium text-gray-800" href="#"
          >Show 'Deals' only</span
        >
      </div>
      <div class="">

      </div>
      <div class="">
        <button type="button" class="px-6 py-1 mt-6 mb-4 text-xl font-extralight rounded-3xl bg-blue-600 hover:bg-black text-white"> Filters </button>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRotated: false,
    };
  },
  methods: {
    toggleRotation() {
      this.isRotated = !this.isRotated;
    },
    toggleRotation1() {
      this.isRotated1 = !this.isRotated1;
    },
    toggleRotation2() {
      this.isRotated2 = !this.isRotated1;
    },
    toggleRotation3() {
      this.isRotated3 = !this.isRotated1;
    },
    toggleRotation4() {
      this.isRotated4 = !this.isRotated1;
    },
  },
};
</script>
<style>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
