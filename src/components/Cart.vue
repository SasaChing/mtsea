<template>
  <div>
    <Narbar />
    
    <div class="container my-5">
      <router-view></router-view>
    </div>

    <div class="wave"></div>
    <Footer />
  </div>
</template>
<script>
import Narbar from "./Narbar";
import Footer from "./Footer";
import Cartpage from "./pages/Cartpage";
import  Checkoutpage from "./pages/Checkoutpage"

export default {
  data() {
    return {
    };
  },
  components: {
    Narbar,
    Footer,
    Cartpage,
    Checkoutpage,
  }
};
</script>