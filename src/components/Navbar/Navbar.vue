<template>
  <!-- component -->
  <nav class="bg-white fixed top-0 border-b border-gray-100 dark:border-gray-700 dark:bg-gray-800">

    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">

          <div class="space-x-8 sm:-my-px sm:ml-10 sm:flex"><span
              class="inline-flex items-center px-1 pt-1 text-xl font-bold leading-5 text-gray-900 transition duration-150 ease-in-out dark:text-gray-200 focus:outline-none "
              >
            Where in the world ? </span>
          </div>
        </div>
        <ToggleButton/>
      </div>
    </div>

  </nav>
</template>

<script>
import ToggleButton from "../UI/ToggleButton";

export default {
  components:{
    ToggleButton
  }
}
</script>

<style scoped>

</style>