<template>
  <div id="nav">
    <router-link to="/contactus/contactwelcome">contact welcome</router-link> |
    <router-link to="/contactus/contactform">contact form</router-link>|

  </div>
  <router-view/>
</template>

<script>
export default {
  name: "ContactUs"
}
</script>

<style scoped>

</style>