<template>
  <div>
    <div class="my-3 text-center" data-spy="scroll">
      <h3 id="Newproduct">最新活動</h3>
      <p class="text-secondary">推薦給您最精選的活動體驗</p>
    </div>
    <div class="mount-bg">
      <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators text-impor">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item py-5 active">
              <div class="row">
                <div class="col-md-3">
                  <div class="card shadow-rounded">
                    <a href="" style="text-decoration: none;">
                      <div class="card-bg">
                        <div class="card-tag">
                          <div class="card-tag-text">人氣</div>
                        </div>
                        <img
                          src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/l1jbza3tz8c7qjeafczd/%E9%BE%9C%E5%B1%B1%E5%B3%B6%E7%89%9B%E5%A5%B6%E6%B5%B7SUP%E9%AB%94%E9%A9%97.jpg"
                          class="card-img-top"
                          height="150px"
                          alt
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-truncate">龜山島牛奶湖 SUP 立槳體驗</h5>
                        <p class="card-text">
                          <span class="text-secondary pb-2" style="font-size: 12px;">
                            <i class="fas fa-map-marker-alt"></i> 宜蘭, 龜山島
                            <br />
                            <i class="fas fa-plus-circle"></i> 體驗課程｜團體
                          </span>
                          <span class>
                            <Star :score="5" disabled />
                          </span>
                        </p>
                        <div class="d-flex justify-content-between pb-2">
                          <span class="text-secondary">
                            <s>
                              <small>NT$ 5,500</small>
                            </s>
                          </span>
                          <span class="text-pink">NT$ 3,500</span>
                        </div>
                        <router-link class="btn btn-outline-impor btn-block btn-sm" to="/outdoor/outdoorsea">立即預訂</router-link>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card shadow-rounded">
                    <a href style="text-decoration: none;">
                      <div class="card-bg">
                        <div class="card-tag">
                          <div class="card-tag-text">人氣</div>
                        </div>
                        <img
                          src="https://www.portisabelsouthpadre.com/wp-content/uploads/2012/08/skimboarding-pic-8-20-12.jpg"
                          class="card-img-top"
                          height="150px"
                          alt
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-truncate">沙板體驗教學班 Skimboarding</h5>
                        <p class="card-text">
                          <span class="text-secondary" style="font-size: 12px;">
                            <i class="fas fa-map-marker-alt"></i> 宜蘭, 烏石港
                            <br />
                            <i class="fas fa-plus-circle"></i> 教學課程｜個人＆團體
                          </span>
                          <span class>
                            <Star :score="3" disabled />
                          </span>
                        </p>
                        <div class="d-flex justify-content-between pb-2">
                          <span class="text-secondary">
                            <s>
                              <small>NT$ 850</small>
                            </s>
                          </span>
                          <span class="text-pink">NT$ 600</span>
                        </div>
                        <router-link class="btn btn-outline-impor btn-block btn-sm" to="/outdoor/outdoorsea">立即預訂</router-link>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card shadow-rounded">
                    <a href style="text-decoration: none;">
                      <div class="card-bg">
                        <div class="card-tag">
                          <div class="card-tag-text">人氣</div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1599042798330-ca59f1ef6afd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                          class="card-img-top"
                          height="150px"
                          alt
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-truncate">水上滑行快感寬版滑水 Wakeboarding</h5>
                        <p class="card-text">
                          <span class="text-secondary" style="font-size: 12px;">
                            <i class="fas fa-map-marker-alt"></i> 澎湖, 嵵裡沙灘
                            <br />
                            <i class="fas fa-plus-circle"></i> 水上活動｜個人
                          </span>
                          <span class>
                            <Star :score="5" disabled />
                          </span>
                        </p>
                        <div class="d-flex justify-content-between pb-2">
                          <span class="text-secondary">
                            <s>
                              <small>NT$ 3000</small>
                            </s>
                          </span>
                          <span class="text-pink">NT$ 2500</span>
                        </div>
                        <router-link class="btn btn-outline-impor btn-block btn-sm" to="/outdoor/outdoorsea">立即預訂</router-link>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card shadow-rounded">
                    <a href style="text-decoration: none;">
                      <div class="card-bg">
                        <div class="card-tag">
                          <div class="card-tag-text">人氣</div>
                        </div>
                        <img
                          src="https://i.ytimg.com/vi/OU4d3O_VZCk/maxresdefault.jpg"
                          class="card-img-top"
                          height="150px"
                          alt
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-truncate">衝浪基礎成人班 Surfing</h5>
                        <p class="card-text">
                          <span class="text-secondary" style="font-size: 12px;">
                            <i class="fas fa-map-marker-alt"></i> 宜蘭, 烏石港
                            <br />
                            <i class="fas fa-plus-circle"></i> 教學課程｜個人＆團體
                          </span>
                          <span class>
                            <Star :score="4" disabled />
                          </span>
                        </p>
                        <div class="d-flex justify-content-between pb-2">
                          <span class="text-secondary">
                            <s>
                              <small>NT$ 850</small>
                            </s>
                          </span>
                          <span class="text-pink">NT$ 600</span>
                        </div>
                        <router-link class="btn btn-outline-impor btn-block btn-sm" to="/outdoor/outdoorsea">立即預訂</router-link>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item py-5">
              <div class="row">
                <div class="col-md-3">
                  <div class="card shadow-rounded">
                    <a href style="text-decoration: none;">
                      <div class="card-bg">
                        <div class="card-tag">
                          <div class="card-tag-text">人氣</div>
                        </div>
                        <img
                          src="https://travelimg.yamedia.tw/20180811/20180812052234968.jpg"
                          class="card-img-top"
                          height="150px"
                          alt
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-truncate">火炎山 - 台版大峽谷小百岳</h5>
                        <p class="card-text">
                          <span class="text-secondary" style="font-size: 12px;">
                            <i class="fas fa-map-marker-alt"></i> 苗栗, 三義＆苑裡
                            <br />
                            <i class="fas fa-angle-double-up"></i> 海拔高度 602 公尺
                          </span>
                          <span class>
                            <Star :score="4" disabled />
                          </span>
                        </p>
                        <div class="d-flex justify-content-between pb-2">
                          <span class="text-secondary">
                            <s>
                              <small>NT$ 600</small>
                            </s>
                          </span>
                          <span class="text-pink">NT$ 250</span>
                        </div>
                        <router-link class="btn btn-outline-impor btn-block btn-sm" to="/outdoor/outdoorMount">立即預訂</router-link>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card shadow-rounded">
                    <a href style="text-decoration: none;">
                      <div class="card-bg">
                        <div class="card-tag">
                          <div class="card-tag-text">人氣</div>
                        </div>
                        <img
                          src="https://i.imgur.com/gGFzwCh.jpg"
                          class="card-img-top"
                          height="150px"
                          alt
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-truncate">抹茶山 - 聖母山莊國家步道</h5>
                        <p class="card-text">
                          <span class="text-secondary" style="font-size: 12px;">
                            <i class="fas fa-map-marker-alt"></i> 宜蘭, 礁溪
                            <br />
                            <i class="fas fa-angle-double-up"></i> 海拔高度 950 公尺
                          </span>
                          <span class>
                            <Star :score="5" disabled />
                          </span>
                        </p>
                        <div class="d-flex justify-content-between pb-2">
                          <span class="text-secondary">
                            <s>
                              <small>NT$ 700</small>
                            </s>
                          </span>
                          <span class="text-pink">NT$ 350</span>
                        </div>
                        <router-link class="btn btn-outline-impor btn-block btn-sm" to="/outdoor/outdoorMount">立即預訂</router-link>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card shadow-rounded">
                    <a href style="text-decoration: none;">
                      <div class="card-bg">
                        <div class="card-tag">
                          <div class="card-tag-text">人氣</div>
                        </div>
                        <img
                          src="https://newtalk.tw/resize_action2/s.newtalk.tw/album/news/357/5e252cd08f1b2.jpg?imgmax=300"
                          class="card-img-top"
                          height="150px"
                          alt
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-truncate">大坑二號步道 - 超陡好漢坡木棧道</h5>
                        <p class="card-text">
                          <span class="text-secondary" style="font-size: 12px;">
                            <i class="fas fa-map-marker-alt"></i> 台中, 北屯
                            <br />
                            <i class="fas fa-angle-double-up"></i> 海拔高度 445-745 公尺
                          </span>
                          <span class>
                            <Star :score="3" disabled />
                          </span>
                        </p>
                        <div class="d-flex justify-content-between pb-2">
                          <span class="text-secondary">
                            <s>
                              <small>NT$ 850</small>
                            </s>
                          </span>
                          <span class="text-pink">NT$ 600</span>
                        </div>
                        <router-link class="btn btn-outline-impor btn-block btn-sm" to="/outdoor/outdoorMount">立即預訂</router-link>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card shadow-rounded">
                    <a href style="text-decoration: none;">
                      <div class="card-bg">
                        <div class="card-tag">
                          <div class="card-tag-text">人氣</div>
                        </div>
                        <img
                          src="https://i.imgur.com/MqGF3z1.jpg"
                          class="card-img-top"
                          height="150px"
                          alt
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-truncate">桃源谷＆草嶺古道 - 北部最美遼闊草原</h5>
                        <p class="card-text">
                          <span class="text-secondary" style="font-size: 12px;">
                            <i class="fas fa-map-marker-alt"></i> 宜蘭, 大里
                            <br />
                            <i class="fas fa-angle-double-up"></i> 海拔高度 616 公尺
                          </span>
                          <span class>
                            <Star :score="3" disabled />
                          </span>
                        </p>
                        <div class="d-flex justify-content-between pb-2">
                          <span class="text-secondary">
                            <s>
                              <small>NT$ 750</small>
                            </s>
                          </span>
                          <span class="text-pink">NT$ 350</span>
                        </div>
                        <router-link class="btn btn-outline-impor btn-block btn-sm" to="/outdoor/outdoorMount">立即預訂</router-link>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "./Star";

export default {
  data() {
    return {
    
    };
  },
  components: {
    Star
  },
};
</script>
