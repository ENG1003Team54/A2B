var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -37.9120467, lng: 145.1343136},
    zoom: 12
  });
}