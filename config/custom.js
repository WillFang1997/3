// JavaScript Document
$(function () {

	//给全局绑定touchstart事件，为了更兼容active替代hover在移动端中的效果	   
	//document.body.addEventListener('touchstart',function(){}); 	

	//设置整体比例
	/*10px = 0.1rem*/
	var scale = $("body").width() / 1920;
	$("html").css("font-size", 100 * scale + 'px');
	$(window).resize(function () {
		var scale = $("body").width() / 1920;
		$("html").css("font-size", 100 * scale + 'px');
	});

	//顶部--当小于768px时变成底部手机端
	wwHF();
	$(window).resize(function () {
		wwHF();
	});

	function wwHF() {
		var $ww = $(window).width();
		if ($ww > 980) {
			$(".Hmenu-btn.Hmenu-web, .H-nav .Hnav-menu, .H-srch .Hsrch-menu, .H-lang .Hlang-menu").removeClass("cur");
			$(".H-nav, .Hnav-sub, .Hsrch-box, .Hlang-box").removeAttr("style");
		}
		if ($ww > 768) {
			$(".F-nav dt").removeClass("cur");
			$(".F-nav dd").removeAttr("style");
		}
	}

	/*-- Header --*/
	$(".H-rMenu-btn").bind("click", function () {
		if ($(this).hasClass("cur")) {
			$(".header-container").animate({
				"left": 0
			}, 600);
			$("body").animate({
				"right": 0
			}, 600);
		} else {
			$(this).addClass("cur");
			$(".H-rMenu-wrap").animate({
				"right": 0
			}, 600);
			$(".header-container").animate({
				"left": -333
			}, 600);
			$("body").animate({
				"right": 333
			}, 600);
		}
	});

	$(window).resize(function () {
		if ($(window).width() <= 980) {
			$(".header-container").animate({
				"left": 0
			}, 600);
			$("body").animate({
				"right": 0
			}, 600);
		}
	});

	//srch
	$(".Hsrch-menu").bind("click", function () {
		$(".Header-wrapper").addClass("Header-searching");
		$(this).addClass("cur").siblings(".Hsrch-box").fadeIn(300);
		$(".Hsrch-block .text").focus();

		$(".Hmenu-btn.Hmenu-web").removeClass("cur").siblings(".H-nav").slideUp(200);
		if ($(window).width() >= 1000) {
			$('.Hlang-menu').slideUp(200);
		} else {
			$('.Hlang-menu').removeClass("cur").siblings(".Hlang-box").slideUp(200);
		}
	});
	$(".Hsrch-block .close").bind("click", function () {
		$(".Header-wrapper").removeClass("Header-searching");
		$(".Hsrch-menu").removeClass("cur").siblings(".Hsrch-box").fadeOut(300);

		if ($(window).width() >= 1000) {
			$('.Hmenu-btn.Hmenu-web').addClass("cur").siblings(".H-nav").slideDown(200);
			$('.Hlang-menu').slideDown(200);
		}
	});

	/*web*/
	$(".Hmenu-btn.Hmenu-web").bind("click", function () {
		if ($(this).hasClass("cur")) {
			$(this).removeClass("cur").siblings(".H-nav").slideUp(300);
		} else {
			$('.Hlang-menu').removeClass("cur").siblings(".Hlang-box").slideUp(200);
			$(".Header-wrapper").removeClass("Header-searching");
			$(".Hsrch-menu").removeClass("cur").siblings(".Hsrch-box").fadeOut(300);
			
			
			$(".H-nav").css("height", "auto");
			$(".H-nav")[0].scrollHeight > $(window).height() - $(".Header-cl").height() ? $(".H-nav").css("height", $(window).height() - $(".Header-cl").height()) : $(".H-nav").css("height", "auto");
			$(this).addClass("cur").siblings(".H-nav").slideDown(300);
		}
	});
	$(".Hnav-menu i").bind("click", function () {
		if ($(window).width() <= 980) {
			var $this = $(this).parent(".Hnav-menu");
			if ($this.siblings(".Hnav-sub").length > 0) {
				if ($this.hasClass("cur")) {
					$this.removeClass("cur").siblings(".Hnav-sub").slideUp(300);
				} else {
					$(".H-nav .Hnav-menu").removeClass("cur").siblings(".Hnav-sub").slideUp(300);
					$this.addClass("cur").siblings(".Hnav-sub").slideDown(300);
				}
				return false;
			}
		}
	});

	$(".Hlang-menu").bind("click", function () {
		if ($(window).width() > 980) return false;
		$(this).hasClass("cur") ? $(this).removeClass("cur").siblings(".Hlang-box").slideUp(300) : $(this).addClass("cur").siblings(".Hlang-box").slideDown(300);

		$(".Hmenu-btn.Hmenu-web").removeClass("cur").siblings(".H-nav").slideUp(200);
		$(".Header-wrapper").removeClass("Header-searching");
		$(".Hsrch-menu").removeClass("cur").siblings(".Hsrch-box").fadeOut(300);
	});

	/*-- 底部 --*/
	$(".F-nav dt i").bind("click", function () {
		if ($(window).width() <= 768) {
			var $this = $(this).parents("dt");
			if ($this.hasClass("cur")) {
				$this.removeClass("cur").siblings("dd").slideUp(300);
			} else {
				$(".F-nav dt").removeClass("cur").siblings("dd").slideUp(300);
				$this.addClass("cur").siblings("dd").slideDown(300);
			}
		}
	});

});


/*--判断是否为IE9及以下版本--*/
function IE(fn) {
	if (navigator.userAgent.indexOf("MSIE") > 0) {
		if ((navigator.userAgent.indexOf("MSIE 7.0") > 0) || (navigator.userAgent.indexOf("MSIE 8.0") > 0) || (navigator.userAgent.indexOf("MSIE 9.0") > 0 && !window.innerWidth) || (navigator.userAgent.indexOf("MSIE 9.0") > 0)) {
			fn();
			return true;
		}
	}
}
