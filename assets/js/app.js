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
  $(".datepicker")
    .datepicker({
      format: "dd/mm/yyyy",
    })
    .on("changeDate", function (e) {
      $(this).datepicker("hide");
    });

  // select2
  $(".form-select").select2();

  // render mobile menu
  // mobileNavMenuRender();

  // open sub meu
  $(".side-menu__nav__item").on("click", function (event) {
    // debugger

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

function mobileNavMenuRender() {
  const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
  const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		رجوع
	</a>
</li>`;

  navExpand.forEach((item) => {
    item
      .querySelector(".nav-expand-content")
      .insertAdjacentHTML("afterbegin", backLink);
    item
      .querySelector(".nav-link")
      .addEventListener("click", () => item.classList.add("active"));
    item
      .querySelector(".nav-back-link")
      .addEventListener("click", () => item.classList.remove("active"));
  });

  // ---------------------------------------
  // not-so-important stuff starts here

  const openMenuBtn = document.getElementById("openSideMenu");
  const closeMenuBtn = document.getElementById("closeMenu");

  if (window.innerWidth < 1200) {
    openMenuBtn.addEventListener("click", function () {
      $(".header__mobile").fadeIn("slow");
      $("body").addClass("utl-opened");
    });

    closeMenuBtn.addEventListener("click", function () {
      $(".header__mobile").fadeOut("slow");
      $("body").removeClass("utl-opened");
    });
  }
}
