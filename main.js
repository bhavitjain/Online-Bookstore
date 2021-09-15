let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        duration: 3000,
        easing: "swing",

        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#main_navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});