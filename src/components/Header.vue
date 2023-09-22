<script setup></script>

<template>
  <nav class="border-b bg-blue">
    <div class="flex items-baseline justify-between px-6 py-4">
      <div
        class="flex flex-col items-baseline justify-between xl:flex-row xl:gap-12"
      >
        <div class="">
          <a class="new-logo" href="https://www.mozillion.com/">
            <img
              class="h-5"
              src="https://res.cloudinary.com/mozillion/image/upload/v1623322043/logo_rvaicy.svg"
              alt="Mozillion Logo"
            />
          </a>
        </div>
        <div class="hidden text-sm font-thin text-white xl:block">
          Mobile's first marketplace
        </div>
        <div class="flex items-center gap-3 px-4 text-white">
          <span class="mt-0 ml-0 mr-3 text-base"> Excellent </span>
          <svg
            class="w-12"
            role="img"
            aria-labelledby="starRating-tl47thcoiih"
            viewBox="0 0 251 46"
            xmlns="http://www.w3.org/2000/svg"
            style="width: 100px"
          >
            <title id="starRating-tl47thcoiih" lang="en">
              4.8 out of five star rating on Trustpilot
            </title>
            <g class="tp-star">
              <path
                class="tp-star__canvas"
                fill="#00b67a"
                d="M0 46.330002h46.375586V0H0z"
              ></path>
              <path
                class="tp-star__shape"
                d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z"
                fill="#FFF"
              ></path>
            </g>
            <g class="tp-star">
              <path
                class="tp-star__canvas"
                fill="#00b67a"
                d="M51.24816 46.330002h46.375587V0H51.248161z"
              ></path>
              <path
                class="tp-star__canvas--half"
                fill="#00b67a"
                d="M51.24816 46.330002h23.187793V0H51.248161z"
              ></path>
              <path
                class="tp-star__shape"
                d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z"
                fill="#FFF"
              ></path>
            </g>
            <g class="tp-star">
              <path
                class="tp-star__canvas"
                fill="#00b67a"
                d="M102.532209 46.330002h46.375586V0h-46.375586z"
              ></path>
              <path
                class="tp-star__canvas--half"
                fill="#00b67a"
                d="M102.532209 46.330002h23.187793V0h-23.187793z"
              ></path>
              <path
                class="tp-star__shape"
                d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z"
                fill="#FFF"
              ></path>
            </g>
            <g class="tp-star">
              <path
                class="tp-star__canvas"
                fill="#00b67a"
                d="M153.815458 46.330002h46.375586V0h-46.375586z"
              ></path>
              <path
                class="tp-star__canvas--half"
                fill="#00b67a"
                d="M153.815458 46.330002h23.187793V0h-23.187793z"
              ></path>
              <path
                class="tp-star__shape"
                d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z"
                fill="#FFF"
              ></path>
            </g>
            <g class="tp-star">
              <path
                class=""
                fill="#00b67a"
                d="M205.064416 46.330002h46.375587V0h-46.375587z"
              ></path>
              <path
                class=""
                fill="#00b67a"
                d="M205.064416 46.330002h23.187793V0h-23.187793z"
              ></path>
              <path
                class=""
                d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z"
                fill="#FFF"
              ></path>
            </g>
          </svg>
          <!-- <span class="mt-0 mb-2 ml-0 mr-3 text-xs"> Trustpilot </span> -->
        </div>
      </div>
      <div
        class="flex items-end gap-3 lg:items-baseline justify-end lg:justify-between md:min-w-[50%]"
      >
        <div
          class="flex items-center justify-between hidden px-3 py-2 bg-white border lg:flex rounded-3xl"
        >
          <input
            class="px-2 bg-transparent focus:outline-none"
            type="search"
            placeholder="Search"
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="gray"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
        <div class="relative flex items-center hidden gap-3 lg:flex">
          <div class="group">
            <a
              class="relative flex items-center h-full py-6 text-white lg:text-xl font-extralight"
              href=""
            >
              How its works
            </a>
            <div
              class="absolute z-10 flex flex-col w-56 px-4 py-2 transition ease-out scale-0 bg-blue-500 group-hover:scale-100 top-14"
            >
              <a
                href="#"
                class="py-2 text-sm text-white border-b border-gray-300"
                >New to Mozillion</a
              >
              <a
                href="#"
                class="py-2 text-sm text-white border-b border-gray-300"
                >How to buy</a
              >
              <a
                href="#"
                class="py-2 text-sm text-white border-b border-gray-300"
                >How to sell</a
              >
              <a
                href="#"
                class="py-2 text-sm text-white border-b border-gray-300"
                >About us</a
              >
            </div>
          </div>
          <div class="group">
            <a
              class="relative flex items-center py-6 text-lg text-white lg:text-xl font-extralight"
              href=""
            >
              Help & Resources
            </a>
            <div
              class="absolute z-10 flex flex-col w-56 px-4 py-2 transition ease-out scale-0 bg-blue-500 group-hover:scale-100 top-14"
            >
              <a
                href="#"
                class="py-2 text-sm text-white border-b border-gray-300"
                >New to Mozillion</a
              >
              <a
                href="#"
                class="py-2 text-sm text-white border-b border-gray-300"
                >How to buy</a
              >
              <a
                href="#"
                class="py-2 text-sm text-white border-b border-gray-300"
                >How to sell</a
              >
              <a
                href="#"
                class="py-2 text-sm text-white border-b border-gray-300"
                >About us</a
              >
            </div>
          </div>
          <a
            class="relative flex items-center text-lg text-white lg:text-xl font-extralight"
            href=""
          >
            Sign Up
          </a>
          <a
            class="relative flex items-center text-2xl text-white font-extralight"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="currentColor"
              class="w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </a>
        </div>
        <div class="flex items-center gap-2 lg:hidden">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
