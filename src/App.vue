<template>
  <div id="app">
	  <Nav />
    <router-view/>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";

export default {
components: {
    Nav,
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
#nav {
  background-image: url('../src/assets/img/back.jpg');
  content: '';
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0.5em 0 4em;
}
</style>
