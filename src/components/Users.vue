<template>
  <div>
<h3 class="text-center">Top TikTok Profiles</h3>

      <div class="row">
        
        <div class="col-lg-12">
          <div class="row mb-2 user-table">
            <div class="col-sm-1">Rank</div>
            <div class="col-sm-4">Name</div>
            <div class="col-sm-1">Country</div>
            <div class="col-sm-2">Followers</div> 
            <div class="col-sm-2">Likes</div> 
            <div class="col-sm-2">Videos</div> 
          </div>
            <div class="row user-list mb-3" v-for="(user, index ) in users">
              <div class="col-sm-1">{{ index + 1 }}</div>
              <div class="col-sm-4 user">
                <img :src="user.cover_medium" v-bind:alt="user.full_name" class="avatar mt-1">
                <h6 class="text-capitalize">{{ user.full_name }}</h6>
                <p><router-link :to="{ name: 'user', params: { name: user.name} }">@{{ user.name }}</router-link></p>
              </div>
              <div class="col-sm-1 d-none d-sm-block d-sm-none d-md-block">
                {{ user.country }}
                <img :src="require(`../assets/img/flags/48x48/${user.country.toLowerCase().trim()}.png`)" v-bind:alt="user.country" class="flag">
                </div>
              <div class="col-sm-2"><span class="d-block d-sm-none">Followers:</span>{{ user.fans.toLocaleString('en-US') }}</div>
              <div class="col-sm-2 d-none d-sm-block d-sm-none d-md-block">{{ user.hearts.toLocaleString('en-US') }}</div>
              <div class="col-sm-2 d-none d-sm-block d-sm-none d-md-block">{{ user.video_count.toLocaleString('en-US') }}</div>
            </div>
        </div>
       
      </div>
 
  </div>
</template>

<script>

// @ is an alias to /src
import axios from "axios";
import store from '../store'

export default {
  name: "Users",

  data() {
    return {
      users: [],
      counter: 1,
      countries: this.$store.state.countries,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers: function() {
      axios
        .get("http://127.0.0.1:5000/users")
        .then(result => {
          this.users = result.data.users_list;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style>
table {
  text-align: left;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  float: left;
  border-radius: 50%;
  margin-right: 5px;;
}
.lead-fix {
  font-size: 1rem;
}
a:hover {
  text-decoration: none;
}
.user-table {
  background-color: #f8f8f8;
  padding: 1rem 0 1rem 0;
  font-weight: bold;
  color: #636363;
  border-radius: 10px;;
}
.user p {
  overflow: hidden;
}
.user-list {
border-bottom: 3px solid #f8f8f8;
transition: transform .2s;
}
.user-list:hover {
  transform: scale(1.03);
  background-color: #f8f8f8;
  border-left: 3px solid #da624a;
}
.flag {
  width: 20px;
}
</style>