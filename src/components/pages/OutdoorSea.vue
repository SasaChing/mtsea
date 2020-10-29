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
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-3 mt-3">
          <div class="sticky-top">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header-outdoor-sidebar" id="headingOne">
                  <h2 class="mb-0">
                    <router-link
                      to="/outdoor/outdoorSea"
                      aria-controls="collapseOne"
                      aria-expanded="true"
                      data-target="#collapseOne"
                      data-toggle="collapse"
                      type="button"
                      class="btn btn-link btn-block text-left"
                    >＿課程活動列表＿</router-link>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li
                        class="list-group-item"
                        :key="item"
                        v-for="item in categories"
                        @click.prevent="searchText = item"
                      >
                        <a href="#">{{ item }}</a>
                      </li>
                      <li class="list-group-item">
                        <a href="#" @click.prevent="searchText = ''">所有商品</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9 no-gutters mt-3">
          <div class="row">
            <div class="col-md-6 mb-4" v-for="(item) in filterData" :key="item.id">
              <div class="card border-0 shadow-sm bg-sea-light">
                <div
                  style="height: 200px; background-size: cover; background-position: center"
                  :style="{backgroundImage:`url(${item.imageUrl})`}"
                ></div>
                <div class="card-body">
                  <span
                    class="badge badge-white text-secondary float-right ml-2"
                  >{{ item.category }}</span>
                  <h5 class="card-title mb-3">
                    <a href="#" class="text-dark">{{ item.title }}</a>
                  </h5>
                  <p class="card-text text-dark">[ {{ item.content }} ]</p>
                  <div class="d-flex justify-content-between align-items-baseline pt-2">
                    <del
                      class="h7 text-secondary"
                      v-if="item.price"
                    >原價 NT {{ item.origin_price | currency }}</del>
                    <div class="h6 text-pink" v-if="item.price">NT {{ item.price | currency }}</div>
                  </div>
                </div>
                <div class="card-footer-outdoorsea d-flex">
                  <button
                    type="button"
                    class="btn btn-outline-sea btn-sm"
                    @click="getProduct(item.id)"
                  >
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                    更多介紹
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-impor btn-sm ml-auto"
                    @click="addtoCart(item.id)"
                  >
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        class="d-flex justify-content-center pt-5"
        :pages="pagination"
        @getThisPage="getProducts"
        v-if="pagination.total_pages > 1"
      />
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-white" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img
              :src="product.imageUrl"
              class="img-fluid"
              alt
              style="width:500px; background-size: cover; background-position: center"
            />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del
                class="h7 text-secondary"
                v-if="product.price"
              >原價 NT$ {{ product.origin_price }} 元</del>
              <div class="h6 text-pink" v-if="product.price">NT$ {{ product.price }} 元</div>
            </div>
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">{{num}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              總計
              <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="addtoCart(product.id, product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Pagination from "../Pagination";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      status: {
        loadingItem: ""
      },
      searchText: ""
    };
  },
  components: {
    Pagination
  },
  methods: {
    ...mapActions("cartModules", ["getCart"]),
    getProducts(page = 1) {
      this.$store.dispatch("productsModules/getProducts", page);
    },
    getProduct(id) {
      this.$store.dispatch("productsModules/getProduct", id);
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch("cartModules/addtoCart", { id, qty });
    }
  },
  computed: {
    ...mapGetters("productsModules", [
      "products",
      "product",
      "categories",
      "pagination"
    ]),
    ...mapGetters("cartModules", ["cart"]),
    ...mapGetters(["isLoading", "messages"]),

    filterData() {
      const vm = this;
      if (vm.searchText) {
        return vm.products.filter(item => {
          const data = item.category
            .toLowerCase()
            .includes(vm.searchText.toLowerCase());
          return data;
        });
      }
      return this.products;
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>
