(function($, undefined) {
  $(document).on('deck.beforeChange', function(){
    console.log("here");
  })

  var allowed = 0;
  $('.deck-status-current').click(function() {
    allowed++;
    $("#slide-" + allowed).addClass('slide').removeClass('deck-loading');
    $.deck('reinitSlides');
  });
})(jQuery, 'deck');
