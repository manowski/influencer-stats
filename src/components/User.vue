<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 pt-5 sidebar">
          <Sidebar />
        </div>
        <div class="col-md-9 pt-5 main">
          <div class="row">
            <div class="col-2">
              <img
                :src="image_url"
                v-bind:alt="user.full_name"
                class="rounded-circle img-fluid user-avatar"
              />
            </div>
            <div class="col-10">
              <h2 class="text-left">@{{ user.name }}</h2>
              <p class="text-left text-capitalize">{{ user.full_name }}</p>
              <p class="text-left">
                Country:
                <a :href="'/top/country/' + user.country.toLowerCase()">{{user.country}}</a>
                <img
                  :src="require(`../assets/img/flags/48x48/${user.country.toLowerCase().trim()}.png`)"
                  v-bind:alt="user.country"
                  class="flag ml-2"
                />
              </p>
              <p class="text-left">{{ user.signature }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-3 user-stats text-center">
              <p>
                <span>Followers</span>
              </p>
              <strong>{{ user.fans.toLocaleString('en-US') }}</strong>
            </div>
            <div class="col-sm-3 user-stats text-center">
              <p>
                <span>Likes</span>
              </p>
              <strong>{{ user.hearts.toLocaleString('en-US') }}</strong>
            </div>
            <div class="col-sm-3 user-stats text-center">
              <p>
                <span>Videos</span>
              </p>
              <strong>{{ user.video_count.toLocaleString('en-US') }}</strong>
            </div>
            <div class="col-sm-3 user-stats text-center">
              <p>
                <span>Digg</span>
              </p>
              <strong>{{ user.digg.toLocaleString('en-US') }}</strong>
            </div>
          </div>

          <div class="col-md-12 mt-5 user-stats-thead">
            <h3 class="text-left">TikTok Statistics Summary For @{{ user.name }}</h3>
          </div>
          <div class="col-md-12 mt-4">
            <h4 class="text-left">Total Followers</h4>
            <line-chart :chart-data="fansdatacollection" :options="options"></line-chart>
          </div>
          <div class="col-md-12 mt-5 user-stats-table-thead">
            <div class="row">
              <div class="col-md-2">Date</div>
              <div class="col-md-3">Followers</div>
              <div class="col-md-3">Likes</div>
              <div class="col-md-2">Videos</div>
            </div>
          </div>
          <div class="col-md-12 mt-3">
            <div class="row user-stats-table-tbody" v-for="(stat, index) in stats">
              <div class="col-md-2">{{ format_date(stat.updated_date) }}</div>
              <div class="col-md-3">{{ stat.fans.toLocaleString('en-US') }}
                <template v-if="stats[index-1]">
                  <strong v-if="stat.fans - stats[index-1].fans >= 0" class="text-success">+{{(stat.fans - stats[index-1].fans).toLocaleString('en-US')}}</strong>
                  <strong v-else class="text-danger">{{(stat.fans - stats[index-1].fans).toLocaleString('en-US')}}</strong>
                </template>
              </div>
              <div class="col-md-3">{{ stat.hearts.toLocaleString('en-US') }}</div>
              <div class="col-md-2">{{ stat.video_count.toLocaleString('en-US') }}
                <template v-if="stats[index-1]">
                  <strong v-if="stat.video_count - stats[index-1].video_count >= 0" class="text-success">{{(stat.video_count - stats[index-1].video_count).toLocaleString('en-US')}}</strong>
                  <strong v-else class="text-danger">{{(stat.video_count - stats[index-1].video_count).toLocaleString('en-US')}}</strong>
                </template>
              </div>
            
            </div>
          </div>
          <div class="col-md-12 mt-5">
            <h3 class="text-left">Total Likes</h3>
            <line-chart :chart-data="likesdatacollection" :options="options"></line-chart>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import axios from "axios";
import moment from "moment";
import LineChart from "./LineChart.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "User",
  components: {
    LineChart,
    Sidebar
  },

  data() {
    return {
      user: [],
      stats: [],
      image_url: "",
      fansdatacollection: "",
      likesdatacollection: "",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
      // myStyles: {
      //   height: "300px",
      //   width: "100%"
      // }
    };
  }, // data

  metaInfo() {
    return {
      title: this.user.name + ' TikTok Stats Summary Profile & Analytics Dashboard',
      titleTemplate: '%s',
      meta: [
        { name: 'description', content: 'Check how many followers does ' + this.user.name + ' and Real-Time subscriber count'},
      ],
  }},

  mounted() {
    this.getUser();
  }, //mounted

  methods: {
    getUser: function() {
      var userId = this.$route.params.name;

      axios
        .get("http://127.0.0.1:5000/users/" + userId)
        .then(result => {
          //console.log(result.data.user_info)
          this.user = result.data.user_info;
          this.stats = result.data.stats.stat_list;
          this.image_url = result.data.user_info.cover_medium;
          console.log(this.stats.map(item => item.fans));

          this.fansdatacollection = {
            labels: this.stats.map(item => this.format_date(item.updated_date)),
            datasets: [
              {
                label: "Followers",
                data: this.stats.map(item => item.fans),
                backgroundColor: "rgba(0, 231, 255, 0.25)",
                pointBackgroundColor: "rgba(0, 231, 255, 0.9)"
              }
            ]
          }; //this.fansdatacollection
          this.likesdatacollection = {
            labels: this.stats.map(item => this.format_date(item.updated_date)),
            datasets: [
              {
                label: "Likes",
                data: this.stats.map(item => item.hearts),
                backgroundColor: "rgba(235, 60, 159, 0.68)"
              }
            ]
          }; //this.likesdatacollection
        })
        .catch(error => {
          console.log(error);
        });
    }, //getUser

    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    } //format_date
  } //methods
};
</script>

<style>
canvas {
  height: 200px !important;
}
.user-stats {
  border-right: 2px solid #c3c3c3;
}
.user-avatar {
  max-width: 150px;
}
.user-stats-thead {
  background-color: #f5f5f5;
  padding: 1rem 0.5rem 1rem;
  border-radius: 3px;
}
.user-stats-table-thead {
  background-color: #4a25b1;
  color: #fff;
  border-radius: 3px;
  padding: 0.3rem;
}
.user-stats-table-tbody {
  padding: 0.3rem;
  border-bottom: 1px solid #f5f5f5;
}
</style>