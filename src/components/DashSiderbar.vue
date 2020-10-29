<template>
  <div>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>
            <i class="fas fa-cog pr-1"></i>管理列表
          </span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/dashboard/dashData" class="nav-link">
              <span data-feather="file"></span>
              <i class="fas fa-chart-line pr-1"></i>數據分析
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/order" class="nav-link">
              <span data-feather="file"></span>
              <i class="fas fa-briefcase pr-1"></i>訂單管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/productList" class="nav-link">
              <span data-feather="file"></span>
              <i class="fas fa-list pr-1"></i>產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/client" class="nav-link">
              <span data-feather="file"></span>
              <i class="fas fa-user-friends pr-1"></i>客戶資料
            </router-link>
          </li>
        </ul>

        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>
            <i class="fas fa-cog pr-1"></i>活動列表
          </span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              <i class="fas fa-comments"></i>
              社群活動管理
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              <i class="fas fa-tags"></i>
              官網促銷活動
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>