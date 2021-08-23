<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <img src="../assets/logo.png" alt="" srcset="">
    </div>
    <div class="carousel-item">
      <img src="../assets/logo.png" alt="" srcset="">
    </div>
    <div class="carousel-item">
      <img src="../assets/logo.png" alt="" srcset="">
    </div>
  </div>
</div>
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

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
