$(function(){
  $('.color').mouseenter(function(){
    $('#text').css({'color':this.id});
  });
  $('.color').mouseleave(function(){
    $('#text').css({'color':'black'});
  });
});
