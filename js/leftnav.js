$(function () {
	var Accordion = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	};

	Accordion.prototype.dropdown = function (e) {
		var $el = e.data.el;
		$this = $(this);
		$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
	};

	var accordion = new Accordion($('#accordion'), false);
	$('.submenu li').click(function () {
		$(this).addClass('current').siblings('li').removeClass('current');
	});
});







$(function () {
	var Accordion01 = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link01');
		// Evento
		links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	};

	Accordion01.prototype.dropdown = function (e) {
		var $el = e.data.el;
		$this = $(this);
		$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open01');

		if (!e.data.multiple) {
			$el.find('.submenu01').not($next).slideUp().parent().removeClass('open01');
		}
	};

	var accordion = new Accordion01($('#accordion01'), false);
	$('.submenu01 li').click(function () {
		$(this).addClass('current').siblings('li').removeClass('current');
	});
});