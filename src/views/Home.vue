<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <owlCarsoual></owlCarsoual>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import OwlCarsoual from '../components/owlCarsoual.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    OwlCarsoual
  }
}
</script>
