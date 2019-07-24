// google maps

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(48.508742, 30.120850),
    zoom: 5
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}