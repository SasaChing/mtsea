<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <!-- 回上頁鈕 -->
        <!-- <li class="page-item" :class="{'disabled': !pagination.has_pre}">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="thisPage(pages.current_page -1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li> -->
        <li
          class="page-item"
          v-for="page in pages.total_pages"
          :key="page"
          :class="{'active': pages.current_page === page}"
        >
          <a class="page-link" href="#" @click.prevent="thisPage(page)">{{ page }}</a>
        </li>
        
        <!-- 下一頁鈕 -->
        <li class="page-item" :class="{'disabled': !pages.has_next}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="thisPage(pages.current_page +1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagination: {},
    }
  },
  props: {
    pages: {
      type: Object
    }
  },
  methods: {
    thisPage(page) {
      this.$emit("getThisPage", page);
    }
  }
};
</script>