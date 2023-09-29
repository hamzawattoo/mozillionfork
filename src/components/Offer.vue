<script setup>
import login from "../components/login.vue";
</script>
<template>
  <login />
  <div class="bg-blue-50">
    <div class="container !px-0 !py-3">
      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <a
                href="#"
                class="ml-4 text-sm font-light text-gray-500 hover:text-gray-700"
                >Home</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
              <a
                href="#"
                class="ml-4 text-sm font-light text-gray-500 hover:text-gray-700"
                >Buy</a
              >
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
              <a
                href="#"
                class="ml-4 text-sm font-light text-gray-500 hover:text-gray-700"
                aria-current="page"
                >Apple</a
              >
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
              <a
                href="#"
                class="ml-4 text-sm font-light text-gray-500 hover:text-gray-700"
                aria-current="page"
                >iPhone 14 Pro Max</a
              >
            </div>
          </li>
        </ol>
      </nav>
    </div>
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
            <div class="absolute flex justify-end -top-5 right-5">
              <button
                class="px-6 py-1 font-medium text-white rounded-full bg-[#1F9FFF]"
              >
                New-Brand New
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="flex items-center gap-4">
            <div class="flex gap-3">
              <button
                @click="setIsOpen(true)"
                class="flex gap-2 px-2 py-1 rounded focus:ring items-cen2er"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="text-lg font-light text-left text-gray-600"
                  >View All asking Price</span
                >
              </button>
            </div>
            <TransitionRoot :show="isOpen" as="template">
              <Dialog as="div" class="relative z-10">
                <TransitionChild
                  as="template"
                  enter="duration-300 ease-out"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="duration-200 ease-in"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                  <div
                    class="flex items-center justify-center min-h-full p-4 text-center"
                  >
                    <TransitionChild
                      as="template"
                      enter="duration-300 ease-out"
                      enter-from="opacity-0 scale-95"
                      enter-to="opacity-100 scale-100"
                      leave="duration-200 ease-in"
                      leave-from="opacity-100 scale-100"
                      leave-to="opacity-0 scale-95"
                    >
                      <DialogPanel
                        class="z-10 w-full max-w-5xl px-6 py-5 overflow-hidden text-left align-middle transition-all transform bg-white rounded shadow-xl"
                      >
                        <DialogTitle
                          as="h3"
                          class="pb-5 text-2xl font-medium leading-6 text-gray-900"
                        >
                          Asking price
                        </DialogTitle>
                        <hr />
                        <div class="py-2">
                          Show
                          <select class="border rounded" name="" id="">
                            <option value="">10</option>
                            <option value="">25</option>
                            <option value="">100</option>
                          </select>
                          entries
                        </div>
                        <hr />

                        <div>
                          <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                              <div
                                class="inline-block min-w-full py-2 sm:px-6 lg:px-8"
                              >
                                <div class="overflow-hidden">
                                  <table
                                    class="min-w-full text-sm font-light text-left"
                                  >
                                    <thead
                                      class="font-medium border-b dark:border-neutral-500"
                                    >
                                      <tr>
                                        <th scope="col" class="px-6 py-4">#</th>
                                        <th scope="col" class="px-6 py-4">
                                          Device
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                          Asking Price
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                          Number
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        class="border-b dark:border-neutral-500"
                                      >
                                        <td
                                          class="px-6 py-4 font-medium whitespace-nowrap"
                                        >
                                          1
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                          IPhone 13 Pro Max
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                          £459
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                          2
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pt-2">
                          <div class="flex items-center justify-between px-3">
                            <div>
                              <h2>Showing 1 to 1 of 1 entries</h2>
                            </div>
                            <div>
                              <button class="p-3 rounded text-neutral-600">
                                First
                              </button>
                              <button class="p-3 rounded text-neutral-600">
                                Previous
                              </button>
                              <button
                                class="px-3 py-1 rounded text-neutral-600 bg-[#f0f0f0]"
                              >
                                1
                              </button>
                              <button class="p-3 rounded text-neutral-600">
                                Next
                              </button>
                              <button class="p-3 rounded text-neutral-600">
                                Last
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <button
                            type="button"
                            class="absolute top-0 right-0 flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-500 focus:outline-none"
                            @click="setIsOpen(false)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </DialogPanel>
                    </TransitionChild>
                  </div>
                </div>
              </Dialog>
            </TransitionRoot>
            <div class="flex gap-3">
              <button
                @click="setIsOpen(true)"
                class="flex items-center gap-2 px-2 py-1 rounded focus:ring"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="text-lg font-light text-left text-gray-600"
                  >View All offers</span
                >
              </button>
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
            <div
              class="flex items-center justify-center gap-4 py-2 bg-blue-700"
            >
              <span class="text-xl text-white">Make an offer</span>
              <Switch
                @click="changeEnable(!enabled)"
                v-model="enabled"
                :class="enabled ? 'bg-[#6383e4]' : 'bg-[#6383e4]'"
                class="relative inline-flex h-[26px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <span
                  aria-hidden="true"
                  :class="enabled ? 'translate-x-9' : 'translate-x-0'"
                  class="pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                />
              </Switch>
              <span class="text-xl text-white">Buy Now</span>
            </div>
            <div v-if="!enabled">
              <MakingOffer />
            </div>
            <div v-if="enabled">
              <BuyNow />
            </div>
            <div></div>
          </div>
          <div class="flex justify-end mt-8">
            <button @click="openModal"
              class="px-16 py-2 font-light text-white duration-300 ease-in-out bg-blue-700 rounded-full hover:bg-black"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
<transition name="fade">
  <div v-if="showModal" class="ease-in duration-800 relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hi dden rounded-lg bg-white px-4 pb-4 pt-6 sm:mx-4 text-left shadow-xl transition-all sm:my-8  w-full sm:max-w-7xl sm:py-8 sm:px-10">
                    <div>
                        <!-- start -->
                       <button @click="closeModal" class="bg-black w-8 h-8 rounded-full absolute -top-4 -right-3">
                        <span  class="close-button text-xl text-white ">&times;</span>
                       </button>
                        <div class="flex flex-col sm:flex-row max-w-4xl mx-auto space-y-2 sm:space-y-0 sm:space-x-4">
                            <button @click="activeTab = 'tab1'"
                                :class="{ 'bg-blue-600 text-white': activeTab === 'tab1', 'border border-blue-600 text-blue-600': activeTab !== 'tab1' }"
                                class="flex-grow py-2 rounded-full focus:outline-none">
                                Existing User?
                            </button>
                            <button @click="activeTab = 'tab2'"
                                :class="{ 'bg-blue-600 text-white': activeTab === 'tab2', 'border border-blue-600 text-blue-600': activeTab !== 'tab2' }"
                                class="flex-grow py-2  rounded-full focus:outline-none">
                                New User?
                            </button>
                        </div>

                        <div class="py-8 bg-white rounded-b-lg">
                            <div v-if="activeTab === 'tab1'">
                                <div class="space-y-5">
                                    <div class="headinphonesg text-center">
                                        <h1 class="text-[#102133] text-4xl font-light">Login</h1>
                                    </div>
                                    <div class="">
                                        <div class="tab-content">
                                            <div id="email" class="tab-pane active">
                                                <form class="space-y-5" method="POST">


                                                    <div class="search-col form-group ">
                                                        <label class="sr-only">Email Address</label>
                                                        <input class="py-3 w-full px-6 rounded-full border border-gray-300 text-gray-400"
                                                            placeholder="Enter Email Address" autofocus="" name="email"
                                                            type="text">
                                                    </div>
                                                    <div class=" relative">
                                                        <div class="search-col form-group ">
                                                            <label class="sr-only">Password</label>
                                                            <input
                                                                class="py-3 w-full px-6 rounded-full border border-gray-300 text-gray-400"
                                                                placeholder="Password" autofocus="" name="email"
                                                                type="text">
                                                        </div>
                                                        <label class="absolute right-0 containerEye">
                                                            <input type="checkbox" checked="checked">
                                                            <svg class="eye" xmlns="http://www.w3.org/2000/svg" height="1em"
                                                                viewBox="0 0 576 512">
                                                                <path
                                                                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z">
                                                                </path>
                                                            </svg>
                                                            <svg class="eye-slash" xmlns="http://www.w3.org/2000/svg"
                                                                height="1em" viewBox="0 0 640 512">
                                                                <path
                                                                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z">
                                                                </path>
                                                            </svg>
                                                        </label>
                                                    </div>

                                                    <div class="text-center">
                                                        <span class="text-md font-medium  text-gray-500"><a href="#">Forgot
                                                                Password?</a></span>
                                                        <!-- <button type="button" class="btn-custom" id="login_button">Log in</button> -->
                                                    </div>
                                                    <div class="">
                                                        <button
                                                            class="text-white font-extralight text-2xl bg-blue-600 max-w-[250px]  py-2.5 rounded-full  w-full ">Login</button>
                                                    </div>
                                                </form>
                                            </div>
                                           
                                        </div>
                                        <!-- Nav tabs -->

                                    </div>
                                </div>
                            </div>
                            <div v-else-if="activeTab === 'tab2'">
                                <div class="space-y-5">
                                    <div class="heading text-center">
                                        <h1 class="text-[#102133] text-4xl font-light">Guest Checkout</h1>
                                        <p class="text-gray-900 text-lg pt-5">You can create a free account after checkout for a faster experience next time.</p>
                                    </div>
                                    <div class="">
                                        <div class="tab-content">
                                            <div id="email" class="tab-pane active">
                                                <form class="space-y-5" method="POST">

                                                    <div class="search-col form-group ">
                                                        <label class="sr-only">First Name</label>
                                                        <input class="py-3.5 w-full px-6 rounded-full border border-gray-300 text-gray-500 text-lg"
                                                            placeholder="First Name" autofocus="" name="text"
                                                            type="text">
                                                    </div>
                                                    <div class="search-col form-group ">
                                                        <label class="sr-only">Surname</label>
                                                        <input class="py-3.5 w-full px-6 rounded-full border border-gray-300 text-gray-500 text-lg"
                                                            placeholder="Surname" autofocus="" name="text"
                                                            type="text">
                                                    </div>
                                                    <div class=" relative">
                                                        <div class="search-col form-group ">
                                                            <label class="sr-only">Email</label>
                                                            <input
                                                                class="py-3.5 w-full px-6 rounded-full border border-gray-300 text-gray-500 text-lg"
                                                                placeholder="Email" autofocus="" name="email"
                                                                type="text">
                                                        </div>
                                                        <label class="absolute right-0 containerEye">
                                                            <input type="checkbox" checked="checked">
                                                            <svg class="eye" xmlns="http://www.w3.org/2000/svg" height="1em"
                                                                viewBox="0 0 576 512">
                                                                <path
                                                                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z">
                                                                </path>
                                                            </svg>
                                                            <svg class="eye-slash" xmlns="http://www.w3.org/2000/svg"
                                                                height="1em" viewBox="0 0 640 512">
                                                                <path
                                                                    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z">
                                                                </path>
                                                            </svg>
                                                        </label>
                                                    </div>

                                                    <div class="text-center">
                                                        <span class="text-md font-medium  text-gray-500"><a href="#">Forgot
                                                                Password?</a></span>
                                                        <!-- <button type="button" class="btn-custom" id="login_button">Log in</button> -->
                                                    </div>
                                                    <div class="flex items-center mb-4">
                                                        <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 rounded-full text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500  ">
                                                        <label for="default-checkbox" class="ml-2 text-md font-medium text-gray-400">I agree to Mozillion's <span class="text-blue-500">Terms & condition</span></label>
                                                    </div>

                                                    <div class="flex items-center mb-4">
                                                        <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 rounded-full text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500  ">
                                                        <label for="default-checkbox" class="ml-2 text-md font-medium text-gray-400">Keep me up to speed with Mozillion’s offers, news and new phones as they launch</label>
                                                    </div>
                                                    <div class="">
                                                        <button
                                                            class="text-white font-extralight text-2xl bg-blue-600 max-w-[250px]  py-2.5 rounded-full  w-full">Next</button>
                                                    </div>
                                                </form>
                                            </div>
                                           
                                        </div>
                                        <!-- Nav tabs -->

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  </transition> 
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  Switch,
} from "@headlessui/vue";
import MakingOffer from "../components/MakingOffer.vue";
import BuyNow from "../components/BuyNow.vue";
export default {
  data() {
    return {
      isOpen: false,
      deliveryCost: 2.99,
      price: 0,
      totalPrice: 0,
      enabled: true,
      activeTab: 'tab1',
      showModal: false,
    };
  },
  methods: {
    setIsOpen(value) {
      this.isOpen = value;
    },
    setPrice(value) {
      this.price = value;
      this.totalPrice = Number(this.price) + Number(this.deliveryCost);
      this.totalPrice = this.totalPrice.toFixed(2);
    },
    changeEnable(value) {
      this.enabled = value;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    // Other methods can be defined here if needed
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    MakingOffer,
    Switch,
    BuyNow,
  },
};

</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.10s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

</style>