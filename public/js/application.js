$(function() { $( ".header_image" ).hide().show( "slow" )});

$(function() { $( ".welcome_video" ).hide()});

$(function() { $( ".header_image" ).click(function(){ $( ".welcome_video" ).show();
  $( ".header_image" ).hide();
});});