"use sctrict"

function slider(selector) {
	let slider = $(selector);
	let imgs = slider.children();

	slider
		.addClass('slider')
		.append('<a href="#" class="slider__arrow slider__arrow_left"></a>')
		.append('<div class="slider__slides"></div')
		.append('<div class="slider__dots"></div>')
		.append('<a href="#" class="slider__arrow slider__arrow-right"></a>');

	let slides = slider.children('.slider__slides');
	let dots = slider.children('.slider__dots');

	imgs
		.prependTo(slides)
		.each(function (i) {
			if(!i) {
				dots.append('<a href="#" class="slider__dot slider__dot_active"></a>');
			} else {
				dots.append('<a href="#" class="slider__dot"></a>');
			}
		})
		.addClass('slider__slide')
		.eq(0)
		.addClass('slider__slide_active');
}

slider('#slider');