$( ".header_image" ).hide().slideDown( "slow" );


// nav_menu

// login_menu

var $select = $( "<select></select>");
$(".nav_menu").append($select);

$(".nav_menu a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option>")

  if ($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  }
  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
});

var $button = $("<button>Go</button>");
$(".nav_menu").append($button);

$button.click(function(){
  window.location = $select.val();
});

// password confirmation feature
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $email = $("#email");
var $username = $("#username");

//Hide hints
$("form span").hide();

function isEmailValid(){
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  return filter.test($email.val())
}

// function isUsernameValid(){
//   return $username.val().length > 2
// }

// function isUsernameUnique(){

// }


function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isEmailValid();
}

function emailEvent(){
    //Find out if password is valid
    if(isEmailValid()) {
      //Hide hint if valid
      $email.next().hide();
    } else {
      //else show hint
      $email.next().show();
    }
}

function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$email.focus(emailEvent).keyup(emailEvent);


enableSubmitEvent();