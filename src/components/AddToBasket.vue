<template>
  <section>
    <div class="px-2 lg:!px-0 !py-2 container">
      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <a
                href="#"
                class="text-sm font-light text-gray-500 hover:text-gray-700"
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
                class="ml-2 text-sm font-light text-gray-500 hover:text-gray-700"
                >Buy with accessories</a
              >
            </div>
          </li>
        </ol>
      </nav>
      <h1 class="text-[26px] text-gray-800">Choose Your Discounted Accessories</h1>
    </div>
    <div class="px-4">
      <div
        class="bg-white lg:space-x-8 rounded-2xl shadow-lg !my-6 px-2 md:!px-8 !py-8 container"
      >
        <div>
          <div
            v-for="product in products"
            :key="product.id"
            class="grid grid-cols-1 gap-4 py-4 border-b sm:grid-cols-8"
          >
            <div
              class="max-w-xs col-span-1 p-1 mx-auto border rounded-lg sm:col-span-2 lg:col-span-1"
            >
              <img
                class="object-contain w-full h-full"
                :src="product.imageUrl"
                :alt="product.name"
              />
            </div>
            <div
              class="flex flex-col justify-start col-span-1 sm:col-span-6 lg:col-span-5 gap-y-8"
            >
              <p class="text-xl font-semibold">{{ product.name }}</p>
              <div>
                <p class="text-gray-700 text-[15px] font-medium pt-3 pb-1.5">
                  {{ product.description }}
                </p>
              </div>
            </div>
            <div class="col-span-1 sm:col-span-8 lg:col-span-2 text-end">
              <div>
                <span class="inline-block mb-3 text-2xl font-bold leading-none">
                  £{{ product.price }}
                </span>
                <del>
                  <span class="ml-3 text-base text-gray-500 align-middle">
                    £{{ product.originalPrice }}
                  </span>
                </del>
                <span
                  class="ml-3 text-base font-medium text-green-600 align-middle"
                >
                  {{ product.discount }}
                </span>
                <div class="col-span-2 text-end">
                  <div>
                    <span>
                      <img
                        v-show="product.showGif"
                        src="https://www.mozillion.com/img/ajax-loader.gif"
                        alt=""
                        class=""
                      />
                    </span>
                    <button
                      v-show="product.showAddButton"
                      @click="addToBasket(product)"
                      type="button"
                      :data-accid="product.id"
                      class="px-4 py-1 mt-6 mb-4 text-black bg-white border-2 border-blue-600 font-extralight rounded-3xl hover:bg-blue-600 hover:text-white"
                    >
                      Add to Basket
                    </button>
                    <button
                      v-show="product.showRemoveButton"
                      @click="removeFromBasket(product)"
                      type="button"
                      :data-accid="product.id"
                      class="px-4 py-1 mt-6 mb-4 text-white bg-blue-600 border-2 border-blue-600 hover:text-black hover:bg-white font-extralight rounded-3xl"
                    >
                      Remove from Basket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-end container">
        <button class="px-8 text-xl py-1.5 mt-6 mb-4 text-white bg-blue-600 border-2 border-blue-600 hover:text-black hover:bg-white font-normal rounded-3xl">
            Proceed to Checkout
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      phone: "", // Initialize phone with an appropriate value
      products: [
        {
          id: 1,
          name: "Official Apple USB-C to Lightning Cable (1 metre)",
          description:
            "Original Apple USB-C to Lightning Cable (1m) (A2561)\nCable for charging your iPhone or iPad with Lightning connector.\nCan be used with Apple 20W USB-C Power Adapter, USB-C enabled Mac or USB-C enabled iPad.",
          price: 15.99,
          originalPrice: 18.99,
          discount: "16% off",
          imageUrl:
            "https://res.cloudinary.com/mozillion/image/upload/v1687344228/cgqu5vbikfnumrcfuvyl.jpg",
          showGif: false,
          showAddButton: true,
          showRemoveButton: false,
        },
        {
          id: 2,
          name: "Official Apple USB-C to Lightning Cable (1 metre)",
          description:
            "Original Apple USB-C to Lightning Cable (1m) (A2561)\nCable for charging your iPhone or iPad with Lightning connector.\nCan be used with Apple 20W USB-C Power Adapter, USB-C enabled Mac or USB-C enabled iPad.",
          price: 15.99,
          originalPrice: 18.99,
          discount: "16% off",
          imageUrl:
            "https://res.cloudinary.com/mozillion/image/upload/v1662548391/rbrhfzbqwajwggfyed8s.jpg",
          showGif: false,
          showAddButton: true,
          showRemoveButton: false,
        },
        {
          id: 3,
          name: "Official Apple USB-C to Lightning Cable (1 metre)",
          description:
            "Original Apple USB-C to Lightning Cable (1m) (A2561)\nCable for charging your iPhone or iPad with Lightning connector.\nCan be used with Apple 20W USB-C Power Adapter, USB-C enabled Mac or USB-C enabled iPad.",
          price: 15.99,
          originalPrice: 18.99,
          discount: "16% off",
          imageUrl:
            "https://res.cloudinary.com/mozillion/image/upload/v1665390313/ri7e41yavx20cl9wjxyl.jpg",
          showGif: false,
          showAddButton: true,
          showRemoveButton: false,
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    addToBasket(product) {
      // Show the GIF and hide the "Add" button for the specific product
      product.showGif = true;
      product.showAddButton = false;

      // Simulate an asynchronous operation (e.g., an API request)
      setTimeout(() => {
        // After a delay, hide the GIF and show the "Remove" button for the specific product
        product.showGif = false;
        product.showRemoveButton = true;
      }, 2000); // Adjust the delay time as needed
    },

    removeFromBasket(product) {
      // Show the GIF and hide the "Remove" button for the specific product
      product.showGif = true;
      product.showRemoveButton = false;

      // Simulate an asynchronous operation (e.g., an API request)
      setTimeout(() => {
        // After a delay, hide the GIF and show the "Add" button for the specific product
        product.showGif = false;
        product.showAddButton = true;
      }, 2000); // Adjust the delay time as needed
    },
  },
};
</script>
