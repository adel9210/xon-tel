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

  $(document).on("click", function (event) {
    var $trigger = $("#openNotification");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $("#notificationWrapper").hide();
    }
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
    const hasSubMenu = $(this).next(".side-menu__nav__item__sub-menu");
    if (hasSubMenu.length) {
      event.preventDefault();
      hasSubMenu.toggle();
    }
  });

  // chart
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'معدل المكالمات التي تم الرد عليها',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        // legend: {
        //   position: "top",
        // },
        title: {
          // display: true,
          // text: "Chart.js Line Chart",
        },
      },
    },
  };

  var myChart = new Chart(document.getElementById("myChart"), config);

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
