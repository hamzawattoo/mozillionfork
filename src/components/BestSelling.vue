<script setup>
import phone from "../../images/glifakqdvbpbeyrsrnil.webp";
</script>
<template>
  <section>
    <div class="my-12 text-center text-gray-800 flex items-center justify-between container !py-14 px-4">
      <h1 class="block p-0 m-0 text-lg lg:text-2xl font-normal md:font-light flex-grow ml-6">Best-Selling Phones</h1>
      <a href="">
        <p class="text-sm lg:text-lg font-light ">View all</p>
      </a>
    </div>
    <div class="grid grid-cols-1 gap-6 px-5 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-center  px-8 container pb-12">
  
    <!-- Use v-for to create cards for each item in the cardsData array -->
    <div
      class="flex flex-col gap-y-7 px-4 py-4 text-center justify-between bg-white rounded-xl min-h-[30vh] "
      v-for="(card, index) in cardsData"
      :key="index"
    >
      <div class="block pb-5 text-lg lg:text-xl 2xl:text-2xl font-thin text-gray-800">
        <a href="#">{{ card.title }}</a>
      </div>
      <div class="flex items-center justify-center py-6">
        <a href="#">
          <!-- Use card.image as the src attribute -->
          <img class="w-28 md:w-36 2xl:w-48 max-h-[180px] 2xl:max-h-[250px] object-contain" :src="card.image" alt="img" />
        </a>
      </div>
      <div class="apple-tx-buy">
        <p class="text-sm">Buy from</p>
        <a
          class="block w-full px-0 py-2 text-sm md:text-base text-white bg-blue-700 rounded-full"
          :href="card.link"
          >£{{ card.price }}</a
        >
      </div>
    </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cardsData: [
        {
          title: 'Apple iPhone 13 Pro',
          image: 'https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1632495666/smmfbcc66ckifjybcxhm.png',
          price: 639,
          link: '#'
        },
        {
          title: 'Apple iPhone 13 Pro',
          image: 'https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1684141794/nc2op5gqq1rbmyc0wq8x.png',
          price: 539,
          link: '#'
        },
        {
          title: 'Apple iPhone 13 Pro',
          image: 'https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1662627859/rfzq0yaazxekewv96upt.png',
          price: 1639,
          link: '#'
        },
        {
          title: 'Apple iPhone 13 Pro',
          image: 'https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1676291732/xjotkbirjqyrzhk3xgrv.png',
          price: 239,
          link: '#'
        },
        {
          title: 'Apple iPhone 13 Pro',
          image: 'https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1684141493/egpjkzh7erckfyhx27yt.png',
          price: 639,
          link: '#'
        },
        {
          title: 'Apple iPhone 13 Pro',
          image: 'https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1662627859/rfzq0yaazxekewv96upt.png',
          price: 629,
          link: '#'
        },
        {
          title: 'Apple iPhone 13 Pro',
          image: 'https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1676291732/xjotkbirjqyrzhk3xgrv.png',
          price: 339,
          link: '#'
        },
        {
          title: 'Apple iPhone 13 Pro',
          image: 'https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1662627859/rfzq0yaazxekewv96upt.png',
          price: 939,
          link: '#'
        },
       
        // Add more card objects as needed
      ]
    };
  }
};
</script>
<style scoped></style>
