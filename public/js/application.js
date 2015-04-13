$( ".header_image" ).hide().show( "slow" );


var $select = $( "<select></select>");
$(".login_menu").append($select);

$(".login_menu a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option>")

  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
});

var $button = $("<button>Go</button>");
$(".login_menu").append($button);

$button.click(function(){
  window.location = $select.val();
});
