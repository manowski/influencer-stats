<template>
  <div class="text-left border-right">
    <h6>Menu</h6>
    <ul class="list-unstyled sidebar-menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <h6>Popular Area</h6>
    <ul class="list-unstyled sidebar-menu">
      <li>
        <router-link to="/top/country/us">United States</router-link>
      </li>
      <li>
        <router-link to="/top/country/gb">United Kingdom</router-link>
      </li>
      <li>
        <router-link to="/top/country/au">Australia</router-link>
      </li>
      <li>
        <router-link to="/top/country/ca">Canada</router-link>
      </li>
    </ul>
    <h6>Top 200 by Country</h6>
    <select
      onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);"
    >
      <option value>Select a Country</option>
      <option
        v-for="country in countries"
        :value="'/top/country/'+ country.cca2"
        v-bind:key="country.time"
      >{{country.name}}</option>
    </select>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Sidebar",

  data() {
    return {
      countries: this.$store.state.countries
    };
  }
};
</script>

<style>
.sidebar-menu li > a {
  color:#353535;
  position: relative;
  padding: 0 1.6rem 0 1rem;
}
.sidebar-menu a:hover {
  color: #da624a;
  background: #fcf1ef;
  border-left: 4px solid #da624a;
}

</style>