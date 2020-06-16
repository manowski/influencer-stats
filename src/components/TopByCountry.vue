<template>

  <div>
    <Section />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 pt-5 sidebar">
          <Sidebar />
        </div>
        <div class="col-lg-9 pt-5 main">
            
          <template>
            <div><h3>Most followed TikTok in {{countries}} sorted by followers</h3></div>
          </template>
        </div>
      </div>
    </div>

    <div class="test-list" v-for="user in users" :key="user.id">
      <p>cover: {{ user.cover_medium }}</p>
      <img :src="user.cover_medium" v-bind:alt="user.name" />
      <router-link :to="{ name: 'user', params: { name: user.name} }">{{ user.name }}</router-link>
      <p>fans: {{ user.fans }}</p>
      <p>hearts: {{ user.hearts }}</p>
      <p>video count: {{ user.video_count }}</p>
      <p>following: {{ user.following }}</p>
      <p>digg: {{ user.digg }}</p>
      <hr />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import store from "../store";
import Sidebar from "@/components/Sidebar.vue";
import Section from "@/components/Section.vue";

export default {
  name: "TopByCountry",
  components: {
    Sidebar,
    Section,
  },
  data() {
    return {
      users: [],
      countries: '',
      link: this.$route.params.name
    };
  },

  mounted() {
    this.getUsers();
  },
  computed: {
      isCountry: function() {
          return this.countries.find(country => country.cca2 === this.country)
      }
  },
  methods: {
    getUsers: function() {
      var country = this.$route.params.name;

      axios
        .get("http://127.0.0.1:5000/top/country/" + country)
        .then(result => {
          this.countries = result.data.country[0]['name']
          this.users = result.data.users_list;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
