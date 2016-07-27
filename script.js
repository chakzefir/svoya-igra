(function() {

	var questions = $('.question'),
	number;

	questions.on('click', showQuestion());

	function showQuestion() {
		return function() {
			$(this).addClass('active');
			$(this).parent().find('.category').addClass('active');
		};
	};

	function questionRemove() {
		return function() {
			$(this).removeClass('active').addClass('finished');
			$(this).parent().find('.category').removeClass('active');
		}
	};

})();