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
    <div class="row text-center no-gutters mb-5">
      <div class="col-md-2">
        <h1>
          <span class="badge badge-white text-impor">1</span>
        </h1>
        <h5 class="text-dark">預定資訊</h5>
      </div>
      <div class="col-md-3 align-self-center">
        <div class="progress" style="height: 2px;">
          <div
            class="progress-bar bg-impor"
            role="progressbar"
            style="width: 50%;"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-md-2">
        <h1>
          <span class="badge badge-white text-secondary">2</span>
        </h1>
        <h5 class="text-dark">結帳</h5>
      </div>
      <div class="col-md-3 align-self-center">
        <div class="progress" style="height: 2px;">
          <div
            class="progress-bar bg-impor"
            role="progressbar"
            style="width: 0%;"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="row d-flex align-items-center">
          <div class="col-md-12">
            <h1>
              <span class="badge badge-white text-secondary">3</span>
            </h1>
            <h5 class="text-dark">預定完成</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6 sea-bg">
        <h5 class="text-center py-5 border-bottom">預訂活動課程資訊</h5>
        <table class="table table-borderless">
          <thead>
            <th></th>
            <th class="text-center">活動課程</th>
            <th></th>
            <th class="text-right">售價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  @click="removeCartItem(item.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </td>
              <td class="align-middle">X {{ item.qty }}</td>
              <td class="align-middle text-right">{{ item.final_total | currency }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total | currency }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">套用優惠碼</button>
          </div>
        </div>
      </div>
      <div class="col-md-6 mount-bg">
        <div class="px-3">
          <h5 class="text-center py-5 border-bottom">預訂人資訊</h5>
          <form @submit.prevent="createOrder">
            <div class="form-group">
              <label for="useremail">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="useremail"
                v-model="form.user.email"
                placeholder="請輸入 Email"
                v-validate="'required|email'"
                :class="{ 'is-invalid': errors.has('email') }"
              />
              <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
            </div>

            <div class="form-group">
              <label for="username">預定人姓名</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="username"
                v-model="form.user.name"
                placeholder="輸入姓名"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('name') }"
              />
              <span class="text-danger" v-if="errors.has('name')">姓名 不能留空</span>
            </div>

            <div class="form-group">
              <label for="usertel">預定人聯絡電話</label>
              <input
                type="tel"
                name="tel"
                class="form-control"
                id="usertel"
                v-model="form.user.tel"
                placeholder="請輸入電話"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('tel') }"
              />
              <span class="text-danger" v-if="errors.has('tel')">聯絡電話 不能留空</span>
            </div>

            <div class="form-group">
              <label for="useraddress">預定人聯絡地址</label>
              <input
                type="text"
                class="form-control"
                name="address"
                id="useraddress"
                v-model="form.user.address"
                placeholder="請輸入地址"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('address') }"
              />
              <span class="text-danger" v-if="errors.has('address')">地址欄位 不得留空</span>
            </div>

            <div class="form-group">
              <label for="comment">備註</label>
              <textarea
                name
                id="comment"
                class="form-control"
                cols="15"
                rows="5"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-right pb-4">
              <button class="btn btn-outline-secondary mr-2">繼續選購</button>
              <button class="btn btn-mount">送出訂單</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container border-top mt-5">
      <div class="row">
        <div class="text-secondary">
          <h5 class="mt-2">注意事項</h5>
          <ul>
            <li>完成報名程序後，請於10分鐘內刷卡繳費，完成刷卡繳費方為報名成功，操作逾時請重新報名。</li>
            <li>不要逞強：進行登山、露營、溯溪、戲水、水岸等活動時，除需做好行前裝備檢查外，更應考量自身體能狀況能否負荷</li>
            <li>退費請持當期發票，至客服專線辦理，退費規定詳見官網。</li>
            <li>發票開立統編者，退費請持當期發票、原刷卡單、原信用卡及發票章，並至客服專線可辦理退費。</li>
            <li>在陸上颱風警報發佈後，請於原訂出發日起三日（含當日）內，以電子郵件或電話與客服人員聯絡，本公司將儘速與您確認更改或取消您的訂單。</li>
            <li>各類課程如因人數不足無法開團，得辦理轉團或全額退費，請至客服專線辦理。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      status: {
        loadingItem: ""
      },
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  methods: {
    ...mapActions("productsModules", ["getProducts"]),
    ...mapActions("cartModules", ["getCart"]),

    getProduct(id) {
      this.$store.dispatch("productsModules/getProduct", id);
    },
    removeCartItem(id) {
      this.$store.dispatch("cartModules/removeCartItem", id);
    },
    addCouponCode() {
      this.$store.dispatch("cartModules/addCouponCode");
    },
    createOrder() {
      const api = `https://vue-course-api.hexschool.io/api/sasa/order`;
      const vm = this;
      const order = vm.form;
      // vm.$store.dispatch('updateLoading', true);
      this.$validator.validate().then(result => {
        if (result) {
          this.$http.post(api, { data: order }).then(response => {
            console.log("訂單已建立", response);
            if (response.data.success) {
              vm.$router.push(`/cart/checkoutpage/${response.data.orderId}`);
            }
            // vm.getCart();
            vm.$store.dispatch("updateLoading", false);
          });
        } else {
          console.log("欄位不完整");
        }
      });
    }
  },
  computed: {
    ...mapGetters("productsModules", ["products", "product"]),
    ...mapGetters("cartModules", ["cart", "coupon_code"]),
    ...mapGetters(["isLoading", "messages"])
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>