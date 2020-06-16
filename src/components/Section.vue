<template>
  <div class="container">
    <div class="row mt-3 mb-3">
      <div class="col-lg-3 d-none d-lg-block text-center">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Find Influencer</h4>
        <i class="fa-3x fas fa-search"></i>
          <p>Discover influencers</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 d-none d-lg-block text-center">
    <div class="card">
      <div class="card-body">
        <h4 class="text-center">Analyze Influencer</h4>
          <i class="fa-3x far fa-user"></i>
          <p>Analyze tiktok influencer</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 d-none d-lg-block text-center">
    <div class="card">
      <div class="card-body">
        <h4 class="text-center">Top TikTok List</h4>
          <i class="fa-3x fas fa-award"></i>
          <p>Top 200 tiktok profile</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 d-none d-lg-block text-center">
    <div class="card">
      <div class="card-body">
        <h4 class="text-center">Forecast Result</h4>
          <i class="fa-3x fas fa-chart-bar"></i>
          <p>Track account growth</p>
      </div>
    </div>
  </div>
  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Section"
};
</script>
<style>
.card-body i {
  color: #641ad2;
}
.card {
  box-shadow: none;
  border: 1px solid #da624a !important;
}
</style>