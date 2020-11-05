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
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">客戶訂單</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <a href class="btn btn-outline-success">下載報表</a>
      </div>
    </div>
    <div class="d-flex">
      <div class="form-inline">
        <div class="form-group">
          <label for="month" class="sr-only">月份</label>
          <select name id="month" class="form-contorl form-contorl-sm">
            <option value="9">9 月</option>
            <option value="10">10 月</option>
          </select>
        </div>
      </div>
    </div>
    <table class="table mt-4">
      <thead>
        <tr class="text-center">
          <th width="80">訂單日期</th>
          <th>Email</th>
          <th width="330">訂購項目</th>
          <th>備註</th>
          <th class="text-right">金額</th>
          <th width="100">狀態</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in sortOrder"
          :key="key"
          v-if="orders.length"
          :class="{'text-secondary': !item.is_paid}"
        >
          <td class="text-center">{{ item.create_at | date }}</td>
          <td class="text-center">
            <span v-text="item.user.email" v-if="item.user"></span>
          </td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} X {{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-center">{{ item.message }}</td>
          <td class="text-right">{{ item.total | currency }}</td>
          <td class="text-center">
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else class="text-danger">尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      class="d-flex justify-content-center"
      :pages="pagination"
      @getThisPage="getOrderlist"
      v-if="pagination.total_pages > 1"
    />
  </div>
</template>

<script>
import $ from "jquery";
import Pagination from "../Pagination";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
    };
  },
  components: {
    Pagination
  },
  methods: {
    getOrderlist(page = 1) {
      this.$store.dispatch("backgroundModules/getOrderlist", page);
    },
    openOrdertModal(item) {
      // const vm = this;
      // $("#delOrdertModal").modal("show");
      // vm.tempProduct = Object.assign({}, item);
      this.$store.dispatch("backgroundModules/openOrdertModal", item);
    }
  },
  computed: {
    ...mapGetters("backgroundModules", ["pagination", "orders", "tempProduct"]),
    ...mapGetters(["isLoading"]),

    sortOrder() {
      const vm = this;
      let newOrder = [];
      if (vm.orders.length) {
        newOrder = vm.orders.sort((a, b) => {
          const aIsPaid = a.is_paid ? 1 : 0;
          const bIsPaid = b.is_paid ? 1 : 0;
          return bIsPaid - aIsPaid;
        });
      }
      return newOrder;
    }
  },
  created() {
    this.getOrderlist();
  }
};
</script>
