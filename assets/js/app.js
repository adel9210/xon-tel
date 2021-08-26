jQuery(document).ready(function ($) {
  // REMOVE SPINNER
  setTimeout(() => {
    $(".loader").fadeOut("slow");
  }, 1000);

  // open side menu
  $("#openSideMenu").on("click", function () {
    if (window.innerWidth >= 1200) {
      $("#dashboardContainer").toggleClass("col-md-12");
      $("#sideMenu").toggle();
      $(this).toggleClass("menuPosition");
    } else {
      $("#sideMenu").addClass("mobile-menu");
    }
  });

  $("#menu-close-button").on("click", function () {
    $("#sideMenu").removeClass("mobile-menu");
  });

  // Notification
  $("#openNotification").on("click", function () {
    $("#notificationWrapper").toggle();
  });

  // date picker
  if ($(".datepicker").length) {
    $(".datepicker")
      .datepicker({
        format: "dd/mm/yyyy",
      })
      .on("changeDate", function (e) {
        $(this).datepicker("hide");
      });
  }

  // select2
  if ($(".form-select").length) {
    $(".form-select").select2();
  }

  // open sub meu
  $(".side-menu__nav__item").on("click", function (event) {
    event.preventDefault();
    $(this).next(".side-menu__nav__item__sub-menu").toggle();
  });

  // WOW JS
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
});
