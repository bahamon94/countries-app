<template>
  <div class="p-4 px-6 pt-20 ">

    <div @click="backHome" class="btn-back w-28 fixed">

      <svg class="h-6 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      <div>
      <p class="ml-2.5">
        back
      </p>
      </div>

    </div>
  </div>
  <select-country class="mt-12"/>
</template>

<script>
import viewCountry from "../components/Country/viewCountry.vue";

export default {
  name: "ViewCountry",
  components: {
    'select-country' : viewCountry
  },
  methods: {
    backHome(){
      this.$router.push('/home')
    }
  }
}
</script>

<style>
.btn-back {
  @apply flex border border-gray-400 dark:border-gray-700 shadow-lg items-center text-gray-500 dark:text-white p-2 dark:hover:bg-gray-300 hover:bg-gray-400 rounded-lg cursor-pointer dark:bg-gray-500;
}
</style>