<template>
  <div>
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ellipsis-v3ovrfpy1zr">
        <div class="ldio-amkq555pwtu">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </loading>
    <Narbar />
    <Benner />
    <Hotcake />
    <Porduct />
    <Contact />
    <Active />
    <div class="wave"></div>
    <Footer />
  </div>
</template>

<script>
import Narbar from "./Narbar";
import Benner from "./Benner";
import Star from "./Star";
import Hotcake from "./Hotcake";
import Porduct from "./Porduct";
import Contact from "./Contact";
import Active from "./Active";
import Footer from "./Footer";

export default {
  name: "home",
  data() {
    return {
      score: 2,
      isLoading: false
    };
  },
  components: {
    Narbar,
    Benner,
    Star,
    Hotcake,
    Porduct,
    Contact,
    Active,
    Footer
  },
  watch: {
    score() {
      console.log(this.score);
    }
  },
};
</script>
