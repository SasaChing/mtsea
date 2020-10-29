<template>
  <div>
    <Narbar />
    <Alert />
    <router-view></router-view>
    <div class="wave"></div>
    <Footer />
  </div>
</template>

<script>
import Narbar from "./Narbar";
import Footer from "./Footer";
import OutdoorSea from "./pages/OutdoorSea";
import Alert from "./AlertMessage"

export default {
  data() {
    return {
    };
  },
  components: {
    Narbar,
    Footer,
    OutdoorSea,
    Alert
  }
};
</script>