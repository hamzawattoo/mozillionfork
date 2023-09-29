<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-4 pt-6">
      <div class="px-3 py-1 rounded-full text-[#102133] bg-[#f5f9fc]">
        <p v-if="offer === 0">The highest offer price is £{{ highestPrice }}</p>
        <p v-if="offer > 0 && offer <= highestPrice">
          Your offer is £{{ offer }}
        </p>
        <p v-if="offer > highestPrice">Your offer is the highest</p>
        <p class="text-md font-medium text-red-500 px-4" v-if="offer === ''">
          The Offer must be in whole Pounds only.
        </p>
      </div>

      <input
        v-model="offer"
        class="max-w-xs px-4 py-3 text-2xl text-center rounded-full outline-none bg-blue-50 placeholder-middle"
        type="number"
        placeholder="£"
      />
    </div>
    <div>
      <div class="flex justify-center gap-6 pt-16 pb-20">
        <div>
          <p class="font-extralight text-lg">Offer expire in (days)</p>
        </div>
        <div>
          <select
            name=""
            id=""
            class="items-center bg-white border-none outline-none font-normal"
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

      <div v-if="offer !== 0" class="px-5">
        <div>
          <h2 class="py-2 text-lg text-gray-400">Delivery</h2>
          <hr />
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 py-2">
              <Switch />
              <span class="text-lg">Fast, free delivery 2-4 working days</span>
            </div>
            <span class="text-lg font-semibold"> Free </span>
          </div>
        </div>
        <div>
          <h2 class="py-2 text-lg text-gray-400">Warranty & Returns</h2>
          <hr />
          <div class="py-2 text-xl font-semibold">Free 20-months warranty</div>
        </div>
        <div class="flex items-center justify-between py-2">
          <div>
            <p class="text-lg font-medium">Total Price</p>
          </div>
          <div>
            <p class="text-2xl font-light">£ {{ offer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Switch from "../components/Switch.vue";
export default {
  data() {
    return {
      highestPrice: 10,
      offer: 0,
    };
  },
  components: {
    Switch,
  },
};
</script>
