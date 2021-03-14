<template>
  <div class="flex flex-col fixed w-full bg-gray-50  dark:bg-gray-700">
    <header class=" justify-between items-center mt-10  px-10 ">
      <div class="items-center space-x-2 lg:space-x-0">
        <div class=" flex justify-between">
          <!--sub navbar -->
          <div class=" inline-flex justify-center">

            <div class="relative text-gray-600 focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center pr-2">
                  <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </span>
              <input
                  v-model="searchCountry"
                  type="text"
                  class="py-2 text-sm text-white border-2 border-gray-600  rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search..."
                  autocomplete="off">
            </div>


          </div>
          <div class="inline-flex w-1/5">
            <vue-select v-model:change="continentSelect" :values="continents"/>

          </div>
        </div>
      </div>

    </header>
  </div>
<div v-if="dataCountries.length" class="md:flex block pt-24 md:flex-wrap">
  <CardCountry v-for="(country, index) in dataCountries"
               :key="index"
               :country="country"
  />

</div>
  <loading v-else />
</template>

<script>
import CardCountry from "@/components/Country/CardCountry";
import Loading from "../components/UI/Loading";
import VueSelect from "../components/UI/Select.vue";
import {reactive, onMounted, toRefs,watch } from "vue";
import { useStore } from "vuex";

export default {
  name: 'Home',
  components: {
    CardCountry,
    Loading,
    VueSelect
  },
  setup(){
    const  data = reactive({
      dataCountries: [],
      continentSelect: 'All',
      searchCountry : '',
      continents : ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    })
    const store = useStore()

    onMounted( () => {
      getAllCountries()
    })
    async function getAllCountries() {
      data.dataCountries = await store.dispatch('loadCountries')
    }

    watch(
        () => data.continentSelect,
        () => {
          data.dataCountries = []
          getCountriesByContinent()
        },

    )
     async function getCountriesByContinent() {
        if (data.continentSelect.includes('All')){
          getAllCountries()
          return true
        }
        data.dataCountries = await  store.dispatch('loadByContinents', {value : data.continentSelect} )
      }

      watch(
          () => data.searchCountry,
          () => {
            data.dataCountries = [],
            data.searchCountry ? getCountriesBySearch(data.searchCountry)  : getAllCountries()
          }
      )

    async function getCountriesBySearch(value) {
      data.dataCountries = await  store.dispatch('getCountryBySearch', {value : value} )

    }

    return {
      ...toRefs(data)
    }
  }


}
</script>
