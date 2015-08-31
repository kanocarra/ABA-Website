/**
 * Created by Emily on 29/08/2015.
 */
// API KEY: AIzaSyD0F_2kiAs1YGgtBjaj7FM1cJYq6d38Gb4
var map;
var markers = [];
function initialiseMap() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        //center on Auckland
        center: {lat: -36.8325841, lng: 174.7982726},
        zoom: 12
    });
    addMarkers();
}

function drop() {
    for (var i =0; i < markerArray.length; i++) {
        setTimeout(function() {
            addMarker();
        }, i * 200);
    }
}

function addMarker() {
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: -36.8325841, lng: 174.7982726}
    });
    marker.addListener('click', toggleBounce);
}


function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
