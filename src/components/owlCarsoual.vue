<template>
  <div class="owl-carousel owl-theme"
       id="time-slider">
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </div>
</template>



<script>
import $ from 'jquery'

export default {
  name: 'owlCarousel',
  mounted() {
    this.owl = $('#time-slider')
        .owlCarousel({
                       dots           : false,
                       items          : 3,
                       autoplay       : true,
                       loop           : true,
                       nav            : true,
                       smartSpeed     : 1000,
                       autoplayTimeout: 1000,
                       rewind         : true,

                     });


  },
  created() {
  }
}
</script>


// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
// }


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
