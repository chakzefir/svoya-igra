(function() {

	var $questions = $('.question'),
	$eto,
	$gameTable = $('.game-table'),
	$gameQuestion = $('.game-question'),
	$gameQuestionContent = $('.game-question > p'),
	qst,
	$catCnt = $('.cat');
	catSound = "<embed src=\"cat.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
	questionsData = {
	   '1-1': 'Это слово говорят некоторым дизайнерам, когда они хорошо справляются со своей работой',
	   '1-2': 'С помощью этого инструмента программы Adobe Photoshop можно разгладить морщины и другие «рыхлости» на  фотографии',
	   '1-3': 'Это отрывок письменной речи, заключенный между двумя красными строками',
	   '1-4': 'По всеобщему мнению именно с этим любит играть каждый дизайнер',
	   '1-5': 'Это холодное, дребезжащее, мясосодержащее',
	   '2-1': 'Этот графический редактор компании Adobe используется для создания векторной графики',
	   '2-2': 'Это последовательность рисунков, которые служат вспомогательным средством при создании фильмов',
	   '2-3': 'Этот инструмент в программе Adobe Photoshop выделяет соседние пиксели, основываясь на тоне и цвете ',
	   '2-4': 'Это специальный инструмент, использующийся в масляной живописи для смешивания красок, очистки палитры или нанесения густой краски на холст',
	   '2-5': 'Это самое популярное средство передвижения в нашем офисе',
	   '3-1': 'По мотивам именно этой картины норвежского художника Эдварда Мунка был нарисован этот смайл <span class="smile">&#128561</span>',
	   '3-2': 'Этот архитектурный памятник был построен для Всемирной выставки в Париже',
	   '3-3': 'Именно этот художник прошагал пол Европы',
	   '3-4': 'Этот выдающийся сюрреалист нарисовал логотип для самого знаменитого леденца на палочке',
	   '3-5': 'В искусстве этого испанского художника был «голубой» период, приходившееся на начало 20 века',
	   '4-1': 'Этот член нашей команды был гномом 80 lvl в течении четырёх лет',
	   '4-2': 'Этот член нашей команды может угадать мелодию с трёх нот',
	   '4-3': 'Этот член нашей команды может скушать 15 крылышек KFC за 20 минут',
	   '4-4': 'У этого члена нашей команды партак на всю спину',
	   '4-5': 'Этот член нашей команды снимался в художественном кино. Его профиль можно найти на Кинопоиске и IMDb',
	};


	$questions.on('click', questionHandler());
	$catCnt.on('click', function() {
		$catCnt.removeClass('cat-1').removeClass('cat-2').removeClass('cat-3');
	});
	$gameQuestion.on('click', function() {
		$gameQuestion.addClass('hide');
		$gameTable.removeClass('hide');
	})


	function questionHandler() {
		return function() {
			$eto = $(this);
			if($eto.data('cat')) {
				$('.sound').html(catSound);
				setTimeout(function(){
					$catCnt.addClass('cat-'+$eto.data('cat'));
				} ,2000);
			}

			$eto.addClass('active');
			$eto.parent().find('.category').addClass('active');
			
			setTimeout(showQuestion($eto), 2000);
		}
	};

	function questionRemove($eto) {
		$eto.removeClass('active').addClass('finished');
		$eto.parent().find('.category').removeClass('active');
	};

	function showQuestion ($eto) {
		return function() {
			qst = $eto.data('qst');

			$gameTable.addClass('hide');
			$gameQuestionContent.html(questionsData[qst]);
			$gameQuestion.removeClass('hide');
			questionRemove($eto);
		}
	};



})();