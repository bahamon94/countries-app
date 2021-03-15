<template>
  <NavbarApp class="fixed w-full z-50"/>
  <div class="bg-gray-50 dark:bg-gray-700 mt-10">
    <router-view/>
  </div>
</template>

<script>
import NavbarApp from "@/components/Navbar/Navbar.vue";
import {mapGetters} from "vuex";

export default {
  components: {
    NavbarApp
  },
  beforeMount() {
    this.$store.dispatch('initTheme')
  },
  computed: {
    ...mapGetters({ theme: 'getTheme'})
  },
  watch : {

    theme(newTheme){
      newTheme === 'light' ? document.querySelector('html').classList.remove('dark')
          : document.querySelector('html').classList.add('dark')
}
  }
}
</script>

<style scoped>

</style>