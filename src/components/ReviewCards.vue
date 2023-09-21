<template>
  <div class="flex items-center justify-center max-w-5xl p-2 py-6 m-auto">
    <swiper
      :breakpoints="{
        300: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      }"
      :initial-slide="3"
      :space-between="12"
      :centeredSlides="true"
    >
      <swiper-slide>
        <div class="px-4 py-4 bg-white lg:lg:w-56 w-96 cursor-grab">
          <div class="flex items-center gap-1">
            <div class="">
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
            </div>
            <div class="flex items-center">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-800">Verified</p>
            </div>
          </div>
          <div class="">
            <p class="text-sm font-bold">Great</p>
            <p class="text-sm font-medium">
              Great phone, sent next day. Good condition 😊
            </p>
          </div>
          <div class="mt-6">
            <span class="text-xs font-semibold text-gray-600">customer,</span>
            <span class="text-xs text-gray-500">2 day ago</span>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="px-4 py-4 bg-white lg:w-56 w-96 cursor-grab">
          <div class="flex items-center gap-1">
            <div class="">
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
            </div>
            <div class="flex items-center">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-800">Verified</p>
            </div>
          </div>
          <div class="">
            <p class="text-sm font-bold">Great</p>
            <p class="text-sm font-medium">
              Great phone, sent next day. Good condition 😊
            </p>
          </div>
          <div class="mt-6">
            <span class="text-xs font-semibold text-gray-600">customer,</span>
            <span class="text-xs text-gray-500">2 day ago</span>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="px-4 py-4 bg-white lg:w-56 w-96 cursor-grab">
          <div class="flex items-center gap-1">
            <div class="">
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
            </div>
            <div class="flex items-center">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-800">Verified</p>
            </div>
          </div>
          <div class="">
            <p class="text-sm font-bold">Great</p>
            <p class="text-sm font-medium">
              Great phone, sent next day. Good condition 😊
            </p>
          </div>
          <div class="mt-6">
            <span class="text-xs font-semibold text-gray-600">customer,</span>
            <span class="text-xs text-gray-500">2 day ago</span>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="px-4 py-4 bg-white lg:w-56 w-96 cursor-grab">
          <div class="flex items-center gap-1">
            <div class="">
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
            </div>
            <div class="flex items-center">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-800">Verified</p>
            </div>
          </div>
          <div class="">
            <p class="text-sm font-bold">Great</p>
            <p class="text-sm font-medium">
              Great phone, sent next day. Good condition 😊
            </p>
          </div>
          <div class="mt-6">
            <span class="text-xs font-semibold text-gray-600">customer,</span>
            <span class="text-xs text-gray-500">2 day ago</span>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="px-4 py-4 bg-white lg:w-56 w-96 cursor-grab">
          <div class="flex items-center gap-1">
            <div class="">
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
            </div>
            <div class="flex items-center">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-800">Verified</p>
            </div>
          </div>
          <div class="">
            <p class="text-sm font-bold">Great</p>
            <p class="text-sm font-medium">
              Great phone, sent next day. Good condition 😊
            </p>
          </div>
          <div class="mt-6">
            <span class="text-xs font-semibold text-gray-600">customer,</span>
            <span class="text-xs text-gray-500">2 day ago</span>
          </div>
        </div></swiper-slide
      >
      <swiper-slide>
        <div class="px-4 py-4 bg-white lg:w-56 w-96 cursor-grab">
          <div class="flex items-center gap-1">
            <div class="">
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
            </div>
            <div class="flex items-center">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="text-sm text-gray-800">Verified</p>
            </div>
          </div>
          <div class="">
            <p class="text-sm font-bold">Great</p>
            <p class="text-sm font-medium">
              Great phone, sent next day. Good condition 😊
            </p>
          </div>
          <div class="mt-6">
            <span class="text-xs font-semibold text-gray-600">customer,</span>
            <span class="text-xs text-gray-500">2 day ago</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style></style>
<script>
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue"; // Import Swiper styles
import "swiper/css";
export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const swiper = useSwiper();
    console.log(swiper);
    return { swiper };
  },
};
</script>
```
