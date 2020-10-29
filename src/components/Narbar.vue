<template>
  <div class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/home" class="navbar-brand logo">
          <img src="../assets/images/logo.png" alt="住海邊" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mr-3">
              <router-link to="/outdoor/outdoorsea" class="nav-link">探索山海</router-link>
            </li>
            <li class="nav-item mr-3" v-scroll-to="'#Newproduct'">
              <router-link class="nav-link" to="/home/#Newproduct">最新活動</router-link>
            </li>
            <li class="nav-item mr-3" v-scroll-to="'#contactMap'">
              <router-link class="nav-link" to="/home/#contactMap">聯絡資訊</router-link>
            </li>
            <li class="nav-item mr-3">
              <router-link to="/cart/cartpage" class="nav-link">購物車</router-link>
            </li>
          </ul>
          <router-link to="/login" class="btn btn-outline-success my-2 my-sm-0">Login</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>
