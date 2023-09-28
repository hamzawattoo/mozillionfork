<template>
  <span id="top"></span>
  <div>
    <button
      id="scrollButton"
      :class="{ visible: isVisible }"
      @click="scrollToTop"
    >
      <a href="#top">
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
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </a>
    </button>
    <!-- Your page content goes here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
  },
};
</script>

<style scoped>
#scrollButton {
  position: fixed;
  bottom: 60px;
  right: 30px;
  padding: 10px;
  background-color: rgb(148, 148, 148);
  color: white;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: 0;
  z-index: 1000;
  border-radius: 100%;
}

#scrollButton.visible {
  opacity: 1;
}
</style>
