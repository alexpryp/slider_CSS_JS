function slider(selector) {
	let slider = $(selector);
	let imgs = slider.children();

	slider
		.addClass('slider')
		.append('<a href="#" class="slider__arrow slider__arrow_left"></a>')
		.append('<div class="slider__slides"></div')
		.append('<div class="slider__dots"></div>')
		.append('<a href="#" class="slider__arrow slider__arrow_right"></a>')
		.on('click', '.slider__arrow, .slider__dot', function(e) {
			e.preventDefault();

			let a = $(this);
			let active = slider.find('.slider__slide_active');
			let current = active.index();
			let next = current;

			if (a.hasClass('slider__arrow_left')) {
				next = current - 1 >= 0 ? current - 1 : imgs.length - 1;
			} else if (a.hasClass('slider__arrow_right')) {
				next = (current + 1) % imgs.length;
			} else {
				next = a.index();
			}

			if (current == next) {
				return;
			}

			active.removeClass('slider__slide_active');
			slider
				.find('.slider__dot_active')
				.removeClass('slider__dot_active');
			imgs
				.eq(next)
				.addClass('slider__slide_active');
			slider
				.find('.slider__dot')
				.eq(next)
				.addClass('slider__dot_active');
		})

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