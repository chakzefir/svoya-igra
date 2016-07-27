(function() {

    $('.final').on('click', function() {
        $(this).fadeOut();
    });

    $('.final-cell').on('click', function() {
      if($('.final-cell').length == 1){
        $('.game-question').removeClass('hide');
      };
      $(this).remove();
    });

    $('.game-question').on('click', function() {
      $('.game-board').remove();
    });


})();