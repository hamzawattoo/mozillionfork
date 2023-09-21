<template>
  <div class="py-3 mt-12 bg-white">
    <div class="mt-14">
      <p class="text-2xl text-center">Popular Handset</p>
    </div>
    <div class="grid grid-cols-2 mt-10 md:grid-cols-6 justify-items-center">
      <div class="first-col">
        <div>
          <p class="block p-0 m-0 text-2xl font-light">Apple</p>
        </div>
        <div class="grid mt-4 gap-y-2">
          <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
          <p class="font-light text-gray-400 text-md">Iphone 14</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
          <p class="font-light text-gray-400 text-md">Iphone 13</p>
          <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
          <p class="font-light text-gray-400 text-md">Iphone 14</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>

          <!-- Other items -->
          <div v-if="!openMoreOne" class="flex gap-1" @click="addMoreFirst">
            <p>More</p>
            <i class="text-xl font-bold fa fa-angle-down"></i>
          </div>
          <div
            v-if="openMoreOne"
            class="grid mt-4 transition-all ease-in-out duration-600 delay-800 gap-y-2"
          >
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 13</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>

            <!-- Additional items -->
          </div>
          <div v-if="openMoreOne" class="flex gap-1" @click="addMoreFirst">
            <p>Less</p>
            <i class="text-xl fa fa-angle-up"></i>
          </div>
        </div>
      </div>
      <div class="second-col">
        <div>
          <p class="block p-0 m-0 text-2xl font-light">Apple</p>
        </div>
        <div class="grid mt-4 gap-y-2">
          <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
          <p class="font-light text-gray-400 text-md">Iphone 14</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
          <p class="font-light text-gray-400 text-md">Iphone 13</p>
          <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>

          <!-- Other items -->
          <div v-if="!openMoreTwo" class="flex gap-1" @click="addMoreSecond">
            <p>More2</p>
            <i class="text-xl font-bold fa fa-angle-down"></i>
          </div>
          <div
            v-if="openMoreTwo"
            class="grid mt-4 transition-all ease-in-out duration-600 delay-800 gap-y-2"
          >
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 13</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
          </div>
          <div v-if="openMoreTwo" class="flex gap-1" @click="addMoreSecond">
            <p>Less</p>
            <i class="text-xl fa fa-angle-up"></i>
          </div>
        </div>
      </div>
      <div class="third-col">
        <div>
          <p class="block p-0 m-0 text-2xl font-light">Samsunug</p>
        </div>
        <div class="grid mt-4 gap-y-2">
          <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
          <p class="font-light text-gray-400 text-md">Iphone 14</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>

          <!-- Other items -->
          <div v-if="!openMoreThree" class="flex gap-1" @click="addMoreThird">
            <p>More2</p>
            <i class="text-xl font-bold fa fa-angle-down"></i>
          </div>
          <div
            v-if="openMoreThree"
            class="grid mt-4 transition-all ease-in-out duration-600 delay-800 gap-y-2"
          >
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 13</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
          </div>
          <div v-if="openMoreThree" class="flex gap-1" @click="addMoreThird">
            <p>Less</p>
            <i class="text-xl fa fa-angle-up"></i>
          </div>
        </div>
      </div>
      <div class="fourth-col">
        <div>
          <p class="block p-0 m-0 text-2xl font-light">Google</p>
        </div>
        <div class="grid mt-4 gap-y-2">
          <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
          <p class="font-light text-gray-400 text-md">Iphone 14</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>

          <!-- Other items -->
          <div v-if="!openMoreFour" class="flex gap-1" @click="addMoreFourth">
            <p>More2</p>
            <i class="text-xl font-bold fa fa-angle-down"></i>
          </div>
          <div
            v-if="openMoreFour"
            class="grid mt-4 transition-all ease-in-out duration-600 delay-800 gap-y-2"
          >
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 13</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
          </div>
          <div v-if="openMoreFour" class="flex gap-1" @click="addMoreFourth">
            <p>Less</p>
            <i class="text-xl fa fa-angle-up"></i>
          </div>
        </div>
      </div>
      <div class="fifth-col">
        <div>
          <p class="block p-0 m-0 text-2xl font-light">OnePlus</p>
        </div>
        <div class="grid mt-4 gap-y-2">
          <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>

          <!-- Other items -->
          <div v-if="!openMoreFive" class="flex gap-1" @click="addMoreFifth">
            <p>More2</p>
            <i class="text-xl font-bold fa fa-angle-down"></i>
          </div>
          <div
            v-if="openMoreFive"
            class="grid mt-4 transition-all ease-in-out duration-600 delay-800 gap-y-2"
          >
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 13</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
          </div>
          <div v-if="openMoreFive" class="flex gap-1" @click="addMoreFifth">
            <p>Less</p>
            <i class="text-xl fa fa-angle-up"></i>
          </div>
        </div>
      </div>
      <div class="fifth-col">
        <div>
          <p class="block p-0 m-0 text-2xl font-light">Motorola</p>
        </div>
        <div class="grid mt-4 gap-y-2">
          <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
          <p class="font-light text-gray-400 text-md">Iphone 14</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
          <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>

          <!-- Other items -->
          <div v-if="!openMoreSix" class="flex gap-1" @click="addMoreSix">
            <p>More2</p>
            <i class="text-xl font-bold fa fa-angle-down"></i>
          </div>
          <div
            v-if="openMoreSix"
            class="grid mt-4 transition-all ease-in-out duration-600 delay-800 gap-y-2"
          >
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 13</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 14 pro</p>
            <p class="font-light text-gray-400 text-md">Iphone 14</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 Pro Max</p>
            <p class="font-light text-gray-400 text-md">Iphone 13 pro</p>
          </div>
          <div v-if="openMoreSix" class="flex gap-1" @click="addMoreSix">
            <p>Less</p>
            <i class="text-xl fa fa-angle-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openMoreOne: false,
      openMoreTwo: false,
      openMoreThree: false,
      openMoreFour: false,
      openMoreFive: false,
      openMoreSix: false,
    };
  },
  methods: {
    addMoreFirst() {
      this.openMoreOne = !this.openMoreOne;
    },
    addMoreSecond() {
      this.openMoreTwo = !this.openMoreTwo;
    },
    addMoreThird() {
      this.openMoreThree = !this.openMoreThree;
    },
    addMoreFourth() {
      this.openMoreFour = !this.openMoreFour;
    },
    addMoreFifth() {
      this.openMoreFive = !this.openMoreFive;
    },
    addMoreSix() {
      this.openMoreSix = !this.openMoreSix;
    },
  },
};
</script>
