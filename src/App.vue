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
  },

metaInfo: {
  title: 'TikTokBlade - Reliable and Smart TikTok Analytics Tools',
  titleTemplate: '%s',
    meta: [
      { name: 'description', content:  'TikTok Blade is a professional set a TikTok Analytics Tools for any influencer profile. Search the best TikTok creators and the most followers.'},
      { property: 'og:title', content: 'TikTok Analytics Tools.'},
      { property: 'og:site_name', content: 'TikTokBlade'},
      {property: 'og:type', content: 'website'},    
      {name: 'robots', content: 'index,follow'} 
    ],
  },
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
