new WOW().init();
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).width() < 768) {
      $("#navbarNav a").click(function () {
        $("#navbarNav").collapse('hide');
      });
      $(window).scroll(function () {
        $("#navbarNav").collapse('hide');
      });
    }
  })

  $('.nav-link,a').click(function () {
    var t = $(this).attr('href');
    var st = $(t).offset().top - 100;
    $('html,body').animate({
      scrollTop: st
    }, 500);
  });

  $('.submit').click(function () {
    $('#contact input, #contact textarea').val('');
  })

  $('.modal-footer .clearcart').click(function () {
    alert("感謝您的購買本農場會儘速送達！！！")
    location.reload();
  })

  $('#gotop').click(function () {
    $('html ,body').animate({
      scrollTop: 0
    })
    return false;
  })
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('#gotop').fadeIn();
    } else {
      $('#gotop').fadeOut();
    }
  })
});