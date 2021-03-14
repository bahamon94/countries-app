<template>
  <div class="mx-auto md:w-1/4 px-6 ">
    <div @click="viewCountrySelect(country)"
        class="bg-white dark:bg-gray-800 shadow-2xl rounded-lg dark:border-white mb-6 tracking-wide cursor-pointer" >
      <div class="md:flex-shrink-0">
        <img :src="country.flag"
             :alt="country.name"
             class="w-full h-36 rounded-lg rounded-b-none">
      </div>
      <div class="px-4 py-2 mt-2 text-left ">
        <h5 class="font-bold capitalize text-gray-800 text-left tracking-normal dark:text-white">
          {{ country.name }}
        </h5>
        <p class="description-card">
          <strong>Population :</strong> {{ country.population }}
        </p>
        <p class="description-card">
          <strong>region :</strong> {{ country.region }}
        </p>
        <p class="description-card">
          <strong>capital :</strong> {{ country.capital }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs} from "vue";
import {  useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "CardCountry",
    props: [ 'country' ],
  setup(){
    const data = reactive({
      countries : []
    })

    const router = useRouter()
    const store = useStore()

    function viewCountrySelect(country){
      store.dispatch('searchCountryByName', { name : country.alpha3Code })
      router.push( `/${country.name}`)

    }

    return {
      ...toRefs(data),
      viewCountrySelect
    }
  }
}

</script>
<style>
.description-card {
  @apply text-xs dark:text-gray-400 capitalize
}
</style>
