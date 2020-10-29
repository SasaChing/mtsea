<template>
  <div>
    <DashNavbar />
    <div class="container-fluid">
      <div class="row">
        <DashSiderbar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import DashNavbar from "./DashNavbar"
import DashSiderbar from "./DashSiderbar";

export default {
  components: {
    DashNavbar,
    DashSiderbar
  }
};
</script>