/**
 * Created by Emily on 29/08/2015.
 */
// API KEY: AIzaSyD0F_2kiAs1YGgtBjaj7FM1cJYq6d38Gb4
var map;
function initialiseMap() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {lat: -36.8630231, lng: 174.8654693},
        zoom: 12
    });
}
