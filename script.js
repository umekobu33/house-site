// modal1
jQuery("#js-modal1--button").on("click", function () {
  jQuery(this).toggleClass("open");
  jQuery("#js-modal1")[0].showModal();
});
// モーダルの外側をクリックしたら閉じる処理
jQuery("#js-modal1").on("click", function (e) {
  if (!jQuery(e.target).closest(".modal__container").length) {
    jQuery("#js-modal1")[0].close();
    jQuery("#js-modal1--button").removeClass("open");
  }
});

// modal2
jQuery("#js-modal2--button").on("click", function () {
  jQuery(this).toggleClass("open");
  jQuery("#js-modal2")[0].showModal();
});
// モーダルの外側をクリックしたら閉じる処理
jQuery("#js-modal2").on("click", function (e) {
  if (!jQuery(e.target).closest(".modal__container").length) {
    jQuery("#js-modal2")[0].close();
    jQuery("#js-modal2--button").removeClass("open");
  }
});

// アコーディオン
jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();
  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});
