<template>
<h1>{{i}}</h1>
  <ul><li v-for="i in e" v-bind:key="i">{{i}}</li></ul>
  <button v-on:click="incr"> incrument</button>
</template>

<script>
export default {
  name: 'ContactWelcome',
  data(){
return{
    i:1,
    e:[1,2,3,4,5]
}
  },
  methods:{
    incr() {

      console.log(this.i)
      this.i++

    }
  },
  beforeCreate(){
    console.log('befor create')
  },
  created(){
    console.log(' create')
  },
  beforeMount(){
    console.log(' before mount')
  },
  mounted() {
   console.log('mounted')
  },
  beforeUnmount(){
    console.log('before unmount')
  },
  unmounted(){
    console.log(' unmount')
  }


}
</script>