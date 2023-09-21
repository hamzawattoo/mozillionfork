<template>
  <button @click="toggle">
    <span v-if="open">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
    <span v-if="!open">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path fill="black" d="M15 11.5a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1Z"></path>
        <path
          fill="#888888"
          d="M12 21.934A9.933 9.933 0 1 1 21.932 12A9.945 9.945 0 0 1 12 21.934Zm0-18.866A8.933 8.933 0 1 0 20.932 12A8.944 8.944 0 0 0 12 3.068Z"
        ></path>
      </svg>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
