<template>
  <div class='w-full'>
    <div class="relative flex-shrink inline-block w-full">

      <select @change="event => $emit('update:change', event.target.value)"
              class="block w-full px-4 py-2 pr-8 text-gray-600 bg-white border border-gray-400 rounded shadow-inner appearance-none">
        <option value="All">All</option>
        <option v-for="value in values" :key="value" :value="value">
          {{ value }}
        </option>
      </select>

      <div class="absolute top-0 right-0 flex items-center px-2 mt-3 text-gray-600 pointer-events-none">
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: [ 'values' ]
}
</script>

<style scoped>

</style>