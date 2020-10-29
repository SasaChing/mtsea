<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">數據分析</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
          <span data-feather="calendar"></span>
          月份
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">新預約數</h5>
            <p class="card-text display-4 text-center">
              <img src="https://i.imgur.com/oTOxXju.png" alt />
              122
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">待付款數</h5>
            <p class="card-text display-4 text-center">
              <img src="https://i.imgur.com/fHiQX11.png" alt />
              53
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">已完成預定</h5>
            <p class="card-text display-4 text-center">
              <img src="https://i.imgur.com/832Sj1f.png" alt />
              212
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">會員增加</h5>
            <p class="card-text display-4 text-center">
              <img src="https://i.imgur.com/TUCLboH.png" alt />
              13
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-md-7">
        <div class="card">
          <div class="card-header bg-white text-dark h5">本月課程預約比較進度圖</div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-2 align-self-center d-flex justify-content-center">
                <span class="progress-title">體驗課程</span>
              </div>
              <div class="col-md-10">
                <div class="progress my-3">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 43%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >43%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 align-self-center d-flex justify-content-center">
                <span class="progress-title">教學課程</span>
              </div>
              <div class="col-md-10">
                <div class="progress my-3">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    style="width: 20%"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >20%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 align-self-center d-flex justify-content-center">
                <span class="progress-title">水上活動</span>
              </div>
              <div class="col-md-10">
                <div class="progress my-3">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style="width: 67%"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >67%</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 align-self-center d-flex justify-content-center">
                <span class="progress-title">登山健行</span>
              </div>
              <div class="col-md-10">
                <div class="progress my-3">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style="width: 45%"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >45%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card">
          <div class="card-header bg-white text-dark h5">客戶來源</div>
          <div class="card-body">
            <canvas id="usersource"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var ctx2 = document.getElementById("usersource");
    var usersource = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: ["Instagram", "Facebook", "Twitter", "Officialweb"],
        datasets: [
          {
            label: "test1",
            backgroundColor: ["#c93097", "#3b5998", "#00acee", "#149f2f"],
            borderColor: "#fff",
            borderWidth: 2,
            data: [65, 59, 42, 81]
          }
        ]
      }
    });
  }
};
</script>