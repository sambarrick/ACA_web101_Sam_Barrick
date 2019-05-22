$(function() {
  let $list = $("ul");
  let $newItemForm = $("#newItemForm");

  $newItemForm.on("submit", function(e) {
    e.preventDefault();
    let text = $('input[id="name"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[id="name"]').val("");
  });

  $list.on("click", "li", function() {
    let $this = $(this);
    $this.remove();
  });
});

var d = new Date();
document.getElementById("clock").innerHTML = d;

var x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}