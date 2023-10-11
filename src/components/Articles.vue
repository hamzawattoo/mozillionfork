<script setup></script>

<template>
  <section>
    <div class="my-12 text-center">
      <h1 class="block p-0 m-0 text-lg lg:text-2xl font-normal md:font-light">latest articles</h1>
    </div>
    <div class="grid grid-cols-1 gap-3 2xl:gap-6 px-5 2xl:px-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <div
      class="flex flex-col items-center justify-between gap-5 p-4 bg-white rounded-xl"
      v-for="(card, index) in cardsData"
      :key="index"
    >
      <div>
        <a class="h-40 w-full " :href="card.imageLink">
          <img
            class="object-contain w-full h-full rounded-xl"
            :src="card.imageSrc"
            :alt="card.imageAlt"
          />
        </a>
      </div>
      <div class="text-center">
        <span class="block pb-5 md:text-sm lg:text-lg font-thin text-gray-800">
          <a :href="card.titleLink">{{ card.title }}</a>
        </span>
      </div>
      <div class="block w-full px-0 py-2 text-sm md:text-lg font-extralight text-center text-white bg-blue-700 rounded-full">
        <a :href="card.readMoreLink" class="btn-custom">Read More</a>
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
          imageSrc: 'https://www.mozillion.com/public/resources/wp-content/uploads/2023/09/iphone-15-vs-14-1.jpg',
          imageAlt: 'iPhone 15 vs iPhone 14: How do they compare?',
          imageLink: '#',
          title: 'Samsung Galaxy Z Fold 5 or Z Flip 5 | Which Foldable Should You Buy? ',
          titleLink: '#',
          readMoreLink: '#'
        },
        {
          imageSrc: 'https://www.mozillion.com/public/resources/wp-content/uploads/2023/09/iphone-15-pro-vs-14-pro.jpg',
          imageAlt: 'iPhone 15 vs iPhone 14: How do they compare?',
          imageLink: '#',
          title: 'iPhone 15 Pro vs iPhone 14 Pro: How do they compare?',
          titleLink: '#',
          readMoreLink: '#'
        },
        {
          imageSrc: 'https://www.mozillion.com/public/resources/wp-content/uploads/2023/09/iphone-15-vs-14-1.jpg',
          imageAlt: 'iPhone 15 vs iPhone 14: How do they compare?',
          imageLink: '#',
          title: 'iPhone 15 Pro vs iPhone 14 Pro: How do they compare?',
          titleLink: '#',
          readMoreLink: '#'
        },
        {
          imageSrc: 'https://www.mozillion.com/public/resources/wp-content/uploads/2023/09/z-fold-5-or-z-flip-5.jpg',
          imageAlt: 'iPhone 15 vs iPhone 14: How do they compare?',
          imageLink: '#',
          title: 'Apple announce new iPhone 15 and 15 Pro: Everything you need to know',
          titleLink: '#',
          readMoreLink: '#'
        },
        {
          imageSrc: 'https://www.mozillion.com/public/resources/wp-content/uploads/2023/09/iphone-15-colours.png',
          imageAlt: 'iPhone 15 vs iPhone 14: How do they compare?',
          imageLink: '#',
          title: 'The Apple September 2023 Event Recap: iPhone 15',
          titleLink: '#',
          readMoreLink: '#'
        },
        // Add more card objects as needed
      ]
    };
  }
};
</script>

<style scoped></style>
```
