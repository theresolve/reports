$(function() {
  
  $('.tracking-kony-photos').hide();
  $('#tracking-kony-photo-1').show();

  $('#tracking-kony-break-1').waypoint(function(direction) {
    $('.tracking-kony-photos').hide();
    $('#tracking-kony-photo-1').show();
  });

  $('#tracking-kony-break-2').waypoint(function(direction) {
    $('.tracking-kony-photos').hide();
    $('#tracking-kony-photo-2').show();
  });
});