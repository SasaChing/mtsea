<template>
  <div class="bg-sea">
    <div class="container">
      <div class="row py-3 no-gutters">
        <div class="col-md-8">
          <div class="row no-gutters">
            <div class="col-md-4 align-self-center">
              <router-link to="/home">
                <img src="../assets/images/logo-footer.png" alt />
              </router-link>
            </div>
            <div class="col-md-4">
              <div class="serve text-white py-3" style="font-family: Noto Serif TC,serif;">
                <i class="fas fa-angle-double-right pr-1"></i>介紹給玩家
              </div>
              <div class="serve-list">
                <ul>
                  <li class="pt-1">
                    <router-link to="/outdoor/outdoorsea">探索山海</router-link>
                  </li>
                  <li class="pt-1">
                    <a href v-scroll-to="'#Newproduct'">最新活動</a>
                  </li>
                  <li class="pt-1">
                    <a href v-scroll-to="'#contactMap'">聯絡資訊</a>
                  </li>
                  <li class="pt-1">
                    <router-link to="/cart/cartpage">購物車</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="aboutus text-white py-3" style="font-family: Noto Serif TC,serif;">
                <i class="fas fa-angle-double-right pr-1"></i>我們在哪
              </div>
              <div class="aboutus-list">
                <ul>
                  <li>
                    <i class="fas fa-map-marker-alt pr-1"></i>
                    114 台北市內湖區
                  </li>
                  <li>
                    <i class="fas fa-mobile-alt pr-1"></i>
                    0912 345 678
                  </li>
                  <li>
                    <i class="far fa-envelope pr-1"></i>
                    jean66536028@gmail.com
                  </li>
                </ul>
                <div class="community-list">
                  <ul>
                    <li>
                      <a href>
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href>
                        <i class="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href>
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="payment text-center">
            <i class="fab fa-cc-visa fa-2x text-white pr-4"></i>
            <i class="fab fa-cc-mastercard fa-2x text-white pr-4"></i>
            <i class="fab fa-cc-paypal fa-2x text-white pb-4"></i>
            <p>| 資料、圖片來源皆來自網路，僅用來做為學習用途 |</p>
            <p>住海邊 ｜ by Sabrina</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>