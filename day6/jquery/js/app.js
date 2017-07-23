$(document).ready(function(){
  $('.button').click(function(){
    var currentMenuPos = parseInt($('.menu').css('top'));
    if(currentMenuPos==0){
      $('.menu').animate({'top':'-450px',},
                          'slow').css('background-color', 'navy');
    } else {
      $('.menu').animate({'top':'0',},
                          'slow').css('background-color', 'black');
    }
  });
});
