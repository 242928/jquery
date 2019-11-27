$( "form" ).submit(function(event) {

  var fullName = $( "#fullname" ).val();
  var streetAddress = $( "#streetaddr" ).val();
  var answered = true;

  if (fullName == 0) {
    $( "#nameerrormsg" ).css("display", "block");
    event.preventDefault();
    answered = false;
  }

  else {
    $( "#nameerrormsg" ).css("display", "none");
  }

  if (streetAddress == 0) {
    $( "#addrerrormsg" ).css("display", "block");
    event.preventDefault();
    answered = false;
  }

  else {
    $( "#addrerrormsg" ).css("display", "none");
  }

  return answered;
})
