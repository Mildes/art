$(document).ready(function () {
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});
	$('.carousel').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.menuToggle').on('click', function () {
		$('.header__menu').slideToggle(200, function () {
			if ($(this).css('display') === "none") {
				$(this).removeAttr('style');
			}
		});
	});
	$('.header__menu a').on('click', function () {
		$('.header__menu').hide(100);
	});
	$('.header__close').on('click', function () {
		$('.header__menu').hide(100);
	});

	var button = document.getElementById("btn");
	button.addEventListener('click', function () {
		swal("Спасибо за заявку!", "Я отвечу Вам в ближайшее время.", "success");
	});
	server {
    listen       80;
    server_name  localhost;

    location / {
        root   html;
        index  index.html index.htm;
    }

    error_page  404     /404.html;
    error_page  403     /403.html;

    error_page  405     =200 $uri;

    # ...
}

});
