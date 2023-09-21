<template>
  <div class="bg-blue-50">
    <div class="px-5 Iphone14-main lg:px-28">
      <div class="grid grid-cols-1 gap-6 py-12 lg:grid-cols-3">
        <div class="card-body">
          <p class="block p-0 m-0 text-2xl font-light">iPhone 14 Pro Max</p>

          <div class="relative flex items-center justify-center my-6">
            <img
              class="w-80"
              src="https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1632487722/glifakqdvbpbeyrsrnil.png"
              alt="Apple iPhone 13 Pro Silver Front View"
            />
            <div class="absolute top-0 right-0 flex justify-end">
              <button class="px-3 py-1 text-xs text-white rounded-full bg-aqua">
                New-Brand New
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="flex gap-10">
            <div class="flex gap-3">
              <i
                class="flex items-center justify-center w-5 h-5 border border-black rounded-full fa fa-plus font-extralight"
              ></i>
              <p class="font-light text-gray-600">View All asking Price</p>
            </div>
            <div class="flex gap-3">
              <i
                class="flex items-center justify-center w-5 h-5 border border-black rounded-full fa fa-plus font-extralight"
              ></i>
              <p class="font-light text-gray-600">View All Offers</p>
            </div>
          </div>
          <div
            class="border-y border-r border-l-[6px] border-red-700 inline-block p-2 rounded my-4"
          >
            <span class="text-gray-700"> 12 people viewing this phone </span>
          </div>
          <div class="mt-4">
            <p class="text-lg text-gray-800">Last sale price : £1,150</p>
            <ul class="grid pl-4 list-disc gap-y-2">
              <li class="text-lg text-gray-500 font-extralight">
                Colour: Deep Purple
              </li>
              <li class="text-lg text-gray-500 font-extralight">
                Network: Unlocked
              </li>
              <li class="text-lg text-gray-500 font-extralight">
                Condition: Brand New
              </li>
              <li class="text-lg text-gray-500 font-extralight">
                Capacity: 1TB
              </li>
            </ul>
          </div>
          <div class="">
            <p class="my-4 text-lg text-gray-800">Mozillion assurance.</p>
            <div class="flex gap-20">
              <div class="flex gap-6">
                <div class="flex items-center">
                  <img
                    src="https://res.cloudinary.com/mozillion/image/upload/v1623322553/secured_cu5u9x.svg"
                    alt="secured"
                  />
                </div>
                <div class="flex items-center">
                  <p class="text-gray-600 font-extralight">
                    30-day no quibble <br />
                    returns
                  </p>
                </div>
              </div>
              <div class="flex gap-6">
                <div class="flex items-center">
                  <img
                    src="https://res.cloudinary.com/mozillion/image/upload/v1623322296/covered_jkazef.svg"
                  />
                </div>
                <div class="flex items-center">
                  <p class="text-gray-600 font-extralight">
                    Fast free delivery on <br />
                    all orders
                  </p>
                </div>
              </div>
            </div>
            <div class="flex gap-20 mt-6">
              <div class="flex gap-6">
                <div class="flex items-center">
                  <img
                    src="https://res.cloudinary.com/mozillion/image/upload/v1623326827/warranty_bugqeo.svg"
                    alt="covered"
                  />
                </div>
                <div class="flex items-center">
                  <p class="text-gray-600 font-extralight">
                    30-day no quibble <br />
                    returns
                  </p>
                </div>
              </div>
              <div class="flex gap-6">
                <div class="flex items-center">
                  <img
                    src="https://res.cloudinary.com/mozillion/image/upload/v1623326827/warranty_bugqeo.svg"
                    width="60px"
                    alt="inspected"
                  />
                </div>
                <div class="flex items-center">
                  <p class="text-gray-600 font-extralight">
                    Fast free delivery on <br />
                    all orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="order-first card-body lg:order-last lg:col-span-2 xl:col-span-1"
        >
          <div class="pt-8 bg-white border shadow-lg rounded-xl">
            <div class="py-2 bg-blue-700">
              <div class="flex items-center justify-center gap-2 text-white">
                <div>
                  <p class="text-2xl">Make an offer</p>
                </div>
                <div>
                  <button
                    type="button"
                    class="relative inline-flex items-center justify-center flex-shrink-0 w-10 h-3 rounded-full cursor-pointer group focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                    role="switch"
                    aria-checked="false"
                  >
                    <span class="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      class="absolute w-full h-full rounded-md pointer-events-none"
                    ></span>
                    <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                    <span
                      aria-hidden="true"
                      class="absolute h-4 mx-auto transition-colors duration-200 ease-in-out bg-blue-500 rounded-full pointer-events-none w-9"
                    ></span>
                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                    <span
                      aria-hidden="true"
                      class="absolute left-0 inline-block w-5 h-5 transition-transform duration-200 ease-in-out transform translate-x-0 bg-blue-100 border border-gray-200 rounded-full shadow pointer-events-none ring-0"
                    ></span>
                  </button>
                </div>
                <div>
                  <p class="text-2xl">Buy Now</p>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center pt-6">
              <input
                class="max-w-xs px-4 py-3 text-2xl text-center rounded-full outline-none bg-blue-50 placeholder-middle"
                type="number"
                placeholder="£"
              />
            </div>
            <div>
              <div class="flex justify-center gap-6 pt-16 pb-20">
                <div>
                  <p class="font-extralight">Offer expire in (days)</p>
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    class="items-center bg-white border-none outline-none font-extralight"
                  >
                    <option value="">1 Day</option>
                    <option value="">3 Days</option>
                    <option value="">7 Days</option>
                    <option value="" selected>14 Days</option>
                    <option value="">30 Days</option>
                    <option value="">60 Days</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end mt-8">
            <button
              class="px-8 py-2 font-light text-white duration-300 ease-in-out bg-blue-700 rounded-full hover:bg-black"
            >
              Countinue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
