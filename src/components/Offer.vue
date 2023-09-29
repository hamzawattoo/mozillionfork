<template>
  <div class="bg-blue-50">
    <div class="container !px-0 !py-3">
      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <a
                href="#"
                class="ml-4 text-sm font-light text-gray-500 hover:text-gray-700"
                >Home</a
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
