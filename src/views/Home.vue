<template>
  <main
      class="min-h-screen
           bg-green-50 text-gray-700
           dark:bg-gray-900 dark:text-purple-50">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <slot />
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>
