$( "form" ).submit(function( event ) {
  if ( $("input[name=favfruit]:checked").val() && $("input[name=classstanding]:checked").val()) {
    return;
  }
  alert("You must pick values for class standing and fruit");
  event.preventDefault();
})
