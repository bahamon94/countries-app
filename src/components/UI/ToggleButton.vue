<template>
  <div class="sm:flex sm:items-center sm:ml-6">
    <button @click="toggleTheme"
        class="flex p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
      <svg v-show="isTheme.theme === 'light'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
           fill="currentColor">
        <path fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"></path>
      </svg>
      <svg v-show="isTheme.theme === 'dark'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>

    <span class="dark:text-white capitalize">{{ isTheme.theme}}</span>
    </button>

  </div>

</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";


export default {
  setup() {
    const  store = useStore()
    function toggleTheme() {
      store.dispatch('changeTheme')
    }


    return {
      toggleTheme,

      isTheme : computed(() => store.state.theme)
    }

  }

}
</script>

<style scoped>

</style>