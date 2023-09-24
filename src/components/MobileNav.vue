  <template>
    <div v-if="open" class="h-screen w-screen fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div class="fixed inset-y-0 right-0 w-64 bg-white shadow-lg">
        <button @click="toggleMobileNav" class="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <!-- Your mobile navigation content goes here -->
        <!-- You can include links, menus, or any other mobile navigation items -->
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      open: Boolean,
      toggleMobileNav: Function,
    },
    methods: {
      closeMobileNav() {
        this.$emit('close');
      },

      toggleMobileNav() {
        this.$emit('toggle-mobile-nav');
      },
    },
  };
  </script>
