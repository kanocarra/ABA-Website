/**
 * Created by Emily on 29/08/2015.
 */

var map;
var bands = [
    {
        name: "Whangarei District Brass",
        lat: -35.7550607,
        lng: 174.3124363,
        link: "https://www.facebook.com/whangareidistrictbrass/info?tab=page_info"
    },
    {   name: "Kumeu Brass",
        lat: -36.7800327,
        lng: 174.5537317,
        link: "http://www.kumeubrass.org.nz/index.php"
    },
    {   name: "Waitakere Auckland Brass",
        lat: -36.907943,
        lng: 174.69068,
        link: "http://www.waitakerebrass.com/"
    },
    {   name: "North Shore Brass",
        lat: -36.7871699,
        lng: 174.7602339,
        ink: "http://www.northshorebrass.org.nz/"},
    {
        name: "North Shore Youth Brass",
        lat: -36.7883307,
        lng: 174.7598231,
        link: "http://www.northshoreyouthbrassband.org/"
    },
    {
        name: "Takapuna Grammar School Brass",
        lat: -36.8015774,
        lng: 174.7903275,
        link: "http://www.takapuna.school.nz/news/student-achievement/"
    },
    {   name: "Auckland City Brass",
        lat: -36.907635,
        lng: 174.757163,
        link: "http://www.aucklandcitybrass.co.nz/"
    }
    //TODO: Add rest of bands in
    //{"name":"Howick Brass", lat:-36.907635, lng:174.757163, link:"http://www.aucklandcitybrass.co.nz/"},
    //{"name":"Auckland City Brass", lat:-36.907635, lng:174.757163, link:"http://www.aucklandcitybrass.co.nz/"},
    //{"name":"Auckland City Brass", lat:-36.907635, lng:174.757163, link:"http://www.aucklandcitybrass.co.nz/"},
    //{"name":"Auckland City Brass", lat:-36.907635, lng:174.757163, link:"http://www.aucklandcitybrass.co.nz/"},
];

function initialiseMap() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        //Center on Auckland
        center: {lat: -36.3325262, lng: 174.6057952},
        zoom: 9
    });

   //Delay dropping of markers until map is fully loaded
    setTimeout(function(){
        addMarkers();
    },700);

}



var currentBand;

function addMarkers() {
    var i;
    var markers = [];
    var marker;

    for(i=0; i < bands.length; i++) {
        currentBand = bands[i];
        marker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: {lat:currentBand.lat, lng: currentBand.lng},
            title: "Band"
        });

        var textContent = "Band: " + currentBand.name;

        var infoWindow = new google.maps.InfoWindow({
            content: textContent
        });
        //TODO: Add info window for all markers
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });
        markers.push(marker);
    }
}





