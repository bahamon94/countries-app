<template>
<div v-if="dataCountries.length" class="md:flex block md:flex-wrap">
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

import {reactive, onMounted, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  name: 'Home',
  components: {
    CardCountry,
    Loading
  },
  setup(){
    const  data = reactive({
      dataCountries: []
    })
    const store = useStore()

    onMounted(async () => {
      data.dataCountries = await store.dispatch('loadCountries')
    })

    return {
      ...toRefs(data)
    }
  }


}
</script>
