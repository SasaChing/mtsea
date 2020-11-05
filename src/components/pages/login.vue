<template>
  <div>
    <div class="container text-center d-flex justify-content-center">
      <form class="form-signin" @submit.prevent="signin">
        <img class="my-4" src="https://i.imgur.com/YqckAau.png" alt width="200px" />
        <h1 class="h3 mb-3 font-weight-normal">請登入管理者帳號</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control mb-3"
          placeholder="Email address"
          required
          autofocus
          v-model="user.username"
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control mb-3"
          placeholder="Password"
          required
          v-model="user.password"
        />
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> 記住帳號
          </label>
        </div>
        <button class="btn btn-lg btn-sea btn-block" type="submit">Sign in</button>
      </form>
    </div>
    <div class="wave"></div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../Footer";

export default {
  name: "HelloWorld",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    Footer
  },
  methods: {
    signin() {
      const api = "https://vue-course-api.hexschool.io/admin/signin";
      const vm = this;
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          const token = response.data.token;
          const expired = response.data.expires;
          console.log(token, expired)
          document.cookie = `mtseatoken=${ token }; expires=${ new Date(expired) };`;
          vm.$router.push("/dashboard/dashData");
        }
      });
    }
  }
};
</script>
