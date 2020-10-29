<template>
  <div>
    <div class="my-3 text-center" data-spy="scroll">
      <h3 id="contactMap">預約諮詢</h3>
      <p class="text-secondary">對課程活動有疑惑嗎？ 歡迎提問</p>
    </div>
    <div class="sea-bg">
      <div class="container py-5">
        <div class="row no-gutters">
          <div class="col-md-6">
            <div class="contact-form-bg d-flex justify-content-center">
              <div class="contact-form-group">
                <form>
                  <div class="form-row">
                    <div class="col-md-6 pb-3">
                      <i class="fas fa-user-alt pr-1"></i>
                      <label for="name">姓名 *</label>
                      <input id="name" type="text" class="form-control" />
                    </div>
                    <div class="col-md-6 pb-3">
                      <i class="fas fa-phone pr-1"></i>
                      <label for="mobile">聯絡電話 *</label>
                      <input
                        id="mobile"
                        type="text"
                        class="form-control"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group pb-2">
                    <i class="fas fa-envelope pr-1"></i>
                    <label for="email">電子信箱 *</label>
                    <input type="text" class="form-control" id="eamil" />
                  </div>
                  <i class="fas fa-comment-dots pr-1"></i>
                  <label for="contact-text">留言給我們 *</label>
                  <textarea id="contact-text" class="form-input" spellcheck="false"></textarea>
                  <div class="text-right">
                    <button class="btn btn-mount mt-3 text-right">送出</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57816.67687642129!2d121.55535585437116!3d25.08349759085559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac8cce7a9b6d%3A0x377d7129bd402c63!2zMTE05Y-w5YyX5biC5YWn5rmW5Y2A!5e0!3m2!1szh-TW!2stw!4v1599480075850!5m2!1szh-TW!2stw"
              width="100%"
              height="496px"
              frameborder="0"
              style="border:0;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>