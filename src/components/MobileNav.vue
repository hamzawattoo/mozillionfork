<template>
  <div
    v-if="open"
    class="fixed inset-0 h-screen transition-opacity bg-gray-500 bg-opacity-75 w-96"
  >
    <div class="fixed inset-y-0 right-0 w-full bg-gray-900 shadow-lg">
      <button
        @click="toggleMobileNav"
        class="absolute p-2 bg-gray-200 rounded-full top-2 right-[50%] hover:bg-gray-300 focus:outline-none"
      >
        <svg
          class="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div class="h-screen overflow-y-auto w-full bg-[#102133]">
        <Disclosure>
          <DisclosureButton class="w-full">
            <div
              class="flex items-center text-white justify-between w-full px-4 bg-[#3e87ed] py-3 border-b border-gray-50"
            >
              <span class="font-medium text-white"> Buy Phones </span>
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
            </div>
          </DisclosureButton>
          <DisclosurePanel class="border-b-1 border-gray-50">
            <div
              class="flex items-center gap-2 px-4 bg-[#102133] border-b border-gray-50 py-3 text-sm font-light"
              v-for="brand in brands"
            >
              <span href="#" class="text-white">{{ brand }}</span>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton class="w-full">
            <div
              class="flex items-center text-white justify-between w-full px-4 bg-[#3e87ed] py-3 border-b border-gray-50"
            >
              <span class="font-medium text-white"> Buy Tablets </span>
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
          <DisclosurePanel class="border-b-1 border-gray-50">
            <div
              class="flex items-center gap-2 px-4 bg-[#102133] border-b border-gray-50 py-3 text-sm font-light"
              v-for="tablet in tablets"
            >
              <span href="#" class="text-white">{{ tablet }}</span>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton class="w-full">
            <div
              class="flex items-center text-white justify-between w-full px-4 bg-[#3e87ed] py-3 border-b border-gray-50"
            >
              <span class="font-medium text-white"> Sell Phones </span>
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
          <DisclosurePanel class="border-b-1 border-gray-50">
            <div
              class="flex items-center gap-2 px-4 bg-[#102133] border-b border-gray-50 py-3 text-sm font-light"
              v-for="brand in brands"
            >
              <span href="#" class="text-white">{{ brand }}</span>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton class="w-full">
            <div
              class="flex items-center text-white justify-between w-full px-4 bg-[#3e87ed] py-3 border-b border-gray-50"
            >
              <span class="font-medium text-white"> Sell Tablets </span>
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
            </div>
          </DisclosureButton>
          <DisclosurePanel class="border-b-1 border-gray-50">
            <div
              class="flex items-center gap-2 px-4 bg-[#102133] border-b border-gray-50 py-3 text-sm font-light"
              v-for="brand in brands"
            >
              <span href="#" class="text-white">{{ brand }}</span>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton class="w-full">
            <div
              class="flex items-center text-white justify-between w-full px-4 bg-[#3e87ed] py-3 border-b border-gray-50"
            >
              <span class="font-medium text-white"> How it works </span>
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
          <DisclosurePanel class="border-b-1 border-gray-50">
            <div
              class="flex items-center gap-2 px-4 bg-[#102133] border-b border-gray-50 py-3 text-sm font-light"
              v-for="link in howItWorks"
            >
              <span href="#" class="text-white">{{ link }}</span>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureButton class="w-full">
            <div
              class="flex items-center text-white justify-between w-full px-4 bg-[#3e87ed] py-3 border-b border-gray-50"
            >
              <span class="font-medium text-white"> Help & Resources</span>
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
          <DisclosurePanel class="border-b-1 border-gray-50">
            <div
              class="flex items-center gap-2 px-4 bg-[#102133] border-b border-gray-50 py-3 text-sm font-light"
              v-for="resource in resources"
            >
              <span href="#" class="text-white">{{ resource }}</span>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <div
          class="flex items-center justify-between w-full px-4 bg-[#3e87ed] py-3 border-b border-gray-50"
        >
          <a href="/"><span class="font-medium text-white">Register</span></a>
        </div>
        <div
          class="flex items-center justify-between w-full px-4 bg-[#3e87ed] py-3 border-b border-gray-50"
        >
          <a href="/"><span class="font-medium text-white">Sign In</span></a>
        </div>
        <div class="px-4 pt-12">
          <h2 class="text-lg font-bold text-white">Stay connected</h2>
          <div class="">
            <ul class="flex py-4 text-white md:gap-x-7 gap-x-4">
              <li
                class="flex items-center justify-center w-8 h-8 text-center bg-blue-600 rounded-full hover:bg-white hover:text-blue-600"
              >
                <a href="https://twitter.com/Mozilliondotcom" target="_blank"
                  ><i class="text-xl fab fa-twitter-square"></i
                ></a>
              </li>
              <li
                class="flex items-center justify-center w-8 h-8 text-center bg-blue-600 rounded-full hover:bg-white hover:text-blue-600"
              >
                <a
                  href="https://www.facebook.com/mozilliondotcom"
                  target="_blank"
                  ><i class="text-xl fab fa-facebook-square"></i
                ></a>
              </li>
              <li
                class="flex items-center justify-center w-8 h-8 text-center bg-blue-600 rounded-full hover:bg-white hover:text-blue-600"
              >
                <a href="https://www.instagram.com/Mozillion/" target="_blank"
                  ><i class="text-xl fab fa-instagram"></i
                ></a>
              </li>
              <li
                class="flex items-center justify-center w-8 h-8 text-center bg-blue-600 rounded-full hover:bg-white hover:text-blue-600"
              >
                <a
                  href="https://www.youtube.com/channel/UCKW3PucGhCVeOHG_lg1TSpQ"
                  target="_blank"
                  ><i class="text-xl fab fa-youtube-square"></i
                ></a>
              </li>
              <li
                class="flex items-center justify-center w-8 h-8 text-center bg-blue-600 rounded-full hover:bg-white hover:text-blue-600"
              >
                <a
                  href="https://www.tiktok.com/@mozilliondotcom"
                  target="_blank"
                  ><i class="fab fa-tiktok"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
export default {
  data() {
    return {
      brands: [
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
      ],
      tablets: ["Apple"],
      howItWorks: ["New to Mozillion", "How to buy", "How to sell", "About us"],
      resources: [
        "Guides",
        "Reviews",
        "Rumors",
        "App & Game Guides",
        "Latest News",
        "Help",
        "Order a SIM",
      ],
    };
  },
  props: {
    open: Boolean,
    toggleMobileNav: Function,
  },
  methods: {
    closeMobileNav() {
      this.$emit("close");
    },

    toggleMobileNav() {
      this.$emit("toggle-mobile-nav");
    },
  },
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
};
</script>
