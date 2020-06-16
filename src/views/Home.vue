<template>
<div>
<Section />

 <div class="container-fluid">
   <div class="row">
     
     <div class="col-lg-3 pt-5 sidebar">
       <Sidebar />
     </div>
     <div class="col-lg-9 pt-5 main">
       <Users />
     </div>
   </div>
 </div>
 </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Users from "@/components/Users.vue";
import Sidebar from "@/components/Sidebar.vue";
import Section from "@/components/Section.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Users,
    Sidebar,
    Section,
  }
};
</script>
<style>
#app {
  background-color: #eff3f6;
}
.container-fluid {
  width: 93% !important;
}
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 76rem;
}
.sidebar, .main {
  background-color: #fff;;
}
</style>