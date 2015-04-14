$( ".header_image" ).hide().show( "slow" );


// nav_menu

// login_menu

var $select = $( "<select></select>");
$(".nav_menu").append($select);

$(".nav_menu a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option>")

  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
});

var $button = $("<button>Go</button>");
$(".nav_menu").append($button);

$button.click(function(){
  window.location = $select.val();
});
