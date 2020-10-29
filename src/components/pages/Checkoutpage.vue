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
            style="width: 100%;"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-md-2">
        <h1>
          <span class="badge badge-white text-impor">2</span>
        </h1>
        <h5 class="text-dark">結帳</h5>
      </div>
      <div class="col-md-3 align-self-center">
        <div class="progress" v-if="!order.is_paid" style="height: 2px;">
          <div
            class="progress-bar bg-impor"
            role="progressbar"
            style="width: 50%;"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="progress" v-else style="height: 2px;">
          <div
            class="progress-bar bg-impor"
            role="progressbar"
            style="width: 100%;"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="row d-flex align-items-center">
          <div class="col-md-12">
            <h1>
              <span v-if="!order.is_paid" class="badge badge-white text-secondary">3</span>
              <span v-else class="badge badge-white text-impor">3</span>
            </h1>
            <h5 class="text-dark">預定完成</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="payOrder">
            <div class="row">
              <div class="col-md-6 border-right pr-5">
                <h5 class="text-center py-3">預訂活動課程資訊</h5>
                <table class="table">
                  <thead>
                    <th width="500px">活動課程</th>
                    <th width="100px"></th>
                    <th>售價</th>
                  </thead>
                  <tbody>
                    <tr v-for="item in order.products" :key="item.id">
                      <td class="align-middle">{{ item.product.title }}</td>
                      <td class="align-middle">X {{ item.qty }}</td>
                      <td class="align-middle text-right">{{ item.final_total | currency}}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2" class="text-right">總計</td>
                      <td class="text-right">{{ order.total | currency}}</td>
                    </tr>
                  </tfoot>
                </table>
                <div>
                  預定訂單日期：
                  <span class="date-style">{{dateFormat(date)}}</span>
                </div>
              </div>
              <div class="col-md-6 pl-5">
                <h5 class="text-center py-3">預訂人資訊</h5>
                <table class="table">
                  <tbody>
                    <tr>
                      <th width="100">Email</th>
                      <td>{{ order.user.email }}</td>
                    </tr>
                    <tr>
                      <th>姓名</th>
                      <td>{{ order.user.name }}</td>
                    </tr>
                    <tr>
                      <th>收件人電話</th>
                      <td>{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                      <th>收件人地址</th>
                      <td>{{ order.user.address }}</td>
                    </tr>
                    <tr>
                      <th>付款狀態</th>
                      <td>
                        <span v-if="!order.is_paid">尚未付款</span>
                        <span v-else class="text-success">付款完成</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-right" v-if="order.is_paid === false">
                  <button class="btn btn-mount btn-block">確認付款</button>
                </div>
              </div>
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
export default {
  data() {
    return {
      order: {
        user: {}
      },
      orderId: "",
      date: new Date()
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/sasa/order/${vm.orderId}`;
      vm.$store.dispatch('updateLoading', true);
      this.$http.get(api).then(response => {
        vm.order = response.data.order;
        console.log(response);
        vm.$store.dispatch('updateLoading', false);
      });
    },
    payOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/sasa/pay/${vm.orderId}`;
      vm.$store.dispatch('updateLoading', true);
      this.$http.post(api).then(response => {
        console.log(response);
        if (response.data.success) {
          vm.getOrder();
        }
        vm.$store.dispatch('updateLoading', false);
      });
    },
    dateFormat(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是從0開始的，因此要加0
       * 使用三元表達式在小於10的前面加0，以達到格式統一  如 09:11:05
       * */
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      // 拼接
      return year + "-" + month + "-" + day + " ";
    }
  },
  mounted() {
    let _this = this; // 聲明一個變量指向Vue實例this，保證作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date(); // 修改數據date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue實例銷毀前，清除我們的定時器
    }
  },
  computed: {
    isLoading(){
      return this.$store.state.isLoading;
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
    console.log(this.orderId);
  }
};
</script>
