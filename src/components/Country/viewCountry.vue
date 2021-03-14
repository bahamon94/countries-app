<template>
    <div class="w-full max-w-full h-screen rounded bg-white dark:bg-gray-700  text-gray-800 md:text-justify">
      <div class="fixed md:flex items-center ">
        <div class="w-full md:w-1/2 px-10 mt-10">
          <div class="relative">
            <img :src="dataCountry.flag" class="h-60 ml-3" alt="">
          </div>
        </div>
        <div class="w-full px-10 justify-center">
          <div class="">
            <h1 class="font-bold uppercase text-2xl dark:text-white">{{dataCountry.name}}</h1>
            <div class="divs-description">

              <div class="section-l">
                <p class="item-section "><strong>Native Name :</strong> {{ dataCountry.nativeName }}</p>
                <p class="item-section "><strong>Population :</strong> {{ dataCountry.population }}</p>
                <p class="item-section "><strong>Region :</strong> {{ dataCountry.region }}</p>
                <p class="item-section "><strong>Sub Region :</strong> {{ dataCountry.subregion }}</p>
                <p class="item-section "><strong>Capital :</strong> {{ dataCountry.capital }}</p>
              </div>

              <div class="section-r">
                <p class="item-section"><strong class="mr-3">Top level Domain:</strong>
                  <small class="text-sm"
                         v-for="(domain, index) in dataCountry.topLevelDomain"
                         :key="index">
                    {{ domain }}
                  </small>
                </p>

                <p class="item-section"><strong class="mr-3">Curriencies:</strong>
                  <small class="text-sm mx-auto"
                         v-for="(currencie, index) in dataCountry.currencies"
                         :key="index">
                    {{ currencie.name }}
                  </small>
                </p>

                <p class="item-section"><strong class="mr-3">Languajes:</strong>
                  <small class="text-sm mx-auto"
                         v-for="(lang, index) in dataCountry.languages"
                         :key="index">
                    {{ lang.name }},
                  </small>
                </p>
              </div>

            </div>
            <div class="mt-12">
              <p class="item-section flex flex-grow w-1/5"><strong class="mr-3">Border Countries:</strong>
                <small @click="viewCountry(borde)"
                       class="text-sm border border-gray-600 shadow-lg cursor-pointer border-2 m-1 p-2 bg-gray-700"
                       v-for="(borde, index) in dataCountry.borders"
                       :key="index">
                  {{ borde }}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {onMounted, reactive, toRefs} from "vue";
import { useStore } from "vuex";
import {useRouter} from "vue-router";

export default {
  name: "viewCountry",
  setup(){
    const router = useRouter()
    const store = useStore()
    const data = reactive({
      dataCountry: []
    })

    onMounted( () => getStoreCountry() )

    async function getStoreCountry() {
      try {
        const dataResponse = await store.dispatch('getCountryData')
        data.dataCountry = dataResponse[0]
      }catch (e) {
        router.push(`/home`)
      }
    }




   async function viewCountry(borde) {
    await store.dispatch('searchCountryByName', { name : borde })
     router.push( `/${borde}`)
    getStoreCountry()
    }
    return {
      ...toRefs(data),
      viewCountry
    }
  }
}

</script>

<style>
.item-section {
  @apply text-sm dark:text-white;
}
.section-l{
  @apply px-3 mb-6 md:mb-0 md:w-10/12
}

.divs-description{
  @apply  md:flex flex-grow;
}
</style>