$(document).ready(function () {

	$(function () {
		$("a[data-target^='anchor']").click(function () {
			var _href = $(this).attr("href");
			$("html, body").animate({
				scrollTop: $(_href).offset().top - 50 + "px"
			}, 1500);
			return false;
		});
	});
	$('.shop-wrap_device').hover(
		function () {
			// $( '.shop-feature-wrap_device').slideToggle().css("display", "flex");
			$('.shop-feature-wrap_device').css("display", "flex");
			$('.shop').css("margin-bottom", "0");

		},
		function () {
			// $( '.shop-feature-wrap_device').slideToggle();
			$('.shop-feature-wrap_device').css("display", "none");
			$('.shop').css("margin-bottom", "105px");
			if (window.matchMedia('(max-width: 768px)').matches) {
				$('.shop').css("margin-bottom", "20px");
			}
		});
	$('.shop-wrap_liquids').hover(
		function () {
			// $( '.shop-feature-wrap_liquids').slideToggle().css("display", "flex");
			$('.shop-feature-wrap_liquids').css("display", "flex");
			$('.shop').css("margin-bottom", "0");
		},
		function () {
			// $( '.shop-feature-wrap_liquids').slideToggle();
			$('.shop-feature-wrap_liquids').css("display", "none");
			$('.shop').css("margin-bottom", "105px");
			if (window.matchMedia('(max-width: 768px)').matches) {
				$('.shop').css("margin-bottom", "20px");
			}
		});
	$('.devices-slider').slick({
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		nextArrow: $('.devices-slider-arrow-next'),
		prevArrow: $('.devices-slider-arrow-prev'),
		responsive: [{
			breakpoint: 480,
			settings: {
				centerMode: false,
				variableWidth: false,
				dots: true,
				slidesToShow: 1
			}
		}]
	});
	$('.comments-slider').slick({
		dots: true,
		nextArrow: $('.comments-slider-arrow-next'),
		prevArrow: $('.comments-slider-arrow-prev')
	});
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true,
		mainClass: 'mfp-fade'
	});
	$('button.open-popup-link').magnificPopup({
		items: {
			src: '#request-popup',
			type: 'inline',
			mainClass: 'mfp-fade'
		}
	});



	$('#btn_result').click(function () {
		var value = $('input[name=quiz-radio]:checked').val();

		if (!!value) {
			$('#quiz-' + value).fadeIn();
			$('#quiz-' + value).css('display', 'flex');
		}


	});
	$('.btn_answer').click(function () {
		$('.quiz-answer').fadeOut();
		
	});





	//Логика калькулятора выгоды
	$('#calcStart').click(function () {
		$('#mask').fadeIn(200);
		document.body.style.overflow = 'hidden'; //показываем всплывающее окно
		$('#calc-popup1').fadeIn();
		$('#calc-popup1').css('display', 'flex');


	});
	$('#mask, .btn_sale').click(function () {
		$('#calc-popup1, #calc-popup2, .calc-popupFinal, #mask').fadeOut(200);
		document.body.style.overflow = 'visible'; //скрываем всплывающее окно
	});
	$('#firstStep').click(function () {
		var value = $('input[name=calc-popup-price]:checked').val();
		//Записываем выбранный вариант
		if (value) {
			
			$('#calc-popup2').fadeIn();
			$('#calc-popup2').css('display', 'flex');
		}
		$('#secondStep').click(function () {

			var value1 = $('input[name=calc-popup-pack]:checked').val(); //записываем выбранный вариант

			if (value == "1" && value1 == "4") {
				$('#result-calc1').fadeIn();
				$('#result-calc1').css('display', 'flex');
				$('#result-calc2').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "1" && value1 == "5") {
				$('#result-calc2').fadeIn();
				$('#result-calc2').css('display', 'flex');
				$('#result-calc1').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "1" && value1 == "6") {
				$('#result-calc3').fadeIn();
				$('#result-calc3').css('display', 'flex');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "2" && value1 == "4") {
				$('#result-calc4').fadeIn();
				$('#result-calc4').css('display', 'flex');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "2" && value1 == "5") {
				$('#result-calc5').fadeIn();
				$('#result-calc5').css('display', 'flex');
				$('#result-calc4').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "2" && value1 == "6") {
				$('#result-calc6').fadeIn();
				$('#result-calc6').css('display', 'flex');
				$('#result-calc5').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "3" && value1 == "4") {
				$('#result-calc7').fadeIn();
				$('#result-calc7').css('display', 'flex');
				$('#result-calc6').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "3" && value1 == "5") {
				$('#result-calc8').fadeIn();
				$('#result-calc8').css('display', 'flex');
				$('#result-calc7').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "3" && value1 == "6") {
				$('#result-calc9').fadeIn();
				$('#result-calc9').css('display', 'flex');
				$('#result-calc8').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');

				$('.btn_sale').click(function () {
					$('#result-calc9').fadeOut(200);
					$('#result-calc8').css('display', 'none');
					$('#result-calc7').css('display', 'none');
					$('#result-calc6').css('display', 'none');
					$('#result-calc5').css('display', 'none');
					$('#result-calc4').css('display', 'none');
					$('#result-calc3').css('display', 'none');
					$('#result-calc2').css('display', 'none');
					$('#result-calc1').css('display', 'none');
				})
			}
		})
	})


	$('#no').click(function () {
		
		$('#sorry').fadeIn();
		$('#sorry').css('display', 'flex');
	})

	$('#returnModal').click(function () {
		$('.arcticmodal-container').css('display', 'flex');
		$('#sorry').fadeOut();
		
	})

	//Анимация

	$('.advantage-card').hover(function(){
		$('.advantage-card').removeClass('animated', 'pulse')	
	}, function(){
		$('.advantage-card').addClass('animated', 'pulse')
	})

	$('.shop-wrap').hover(function(){
		$('.shop-wrap').removeClass('animated', 'pulse')	
	}, function(){
		$('.shop-wrap').addClass('animated', 'pulse')
	})

	// Закрытие меню-гамбургера
	$('#hmt').click(function(){
		if ($('#hmt').is(':checked')) {
			document.body.style.overflow = 'hidden';
		}else{
			document.body.style.overflow = 'visible';
		}
	})
	
	
});