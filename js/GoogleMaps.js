/**
 * Created by Emily on 29/08/2015.
 */

var map;
var markers = [];
var marker;


var bands = [
    {
        name: "Whangarei District Brass",
        lat: -35.7550607,
        lng: 174.3124363,
        link: "https://www.facebook.com/whangareidistrictbrass/info?tab=page_info",
        address: "8A Dyer Street <br> Whangarei <br> Northland <br>"
    },
    {   name: "Kumeu Brass",
        lat: -36.7800327,
        lng: 174.5537317,
        link: "http://www.kumeubrass.org.nz/index.php",
        address: "Gate 7 Kumeu Showgrounds <br>  Waitakere Road <br> Kumeu <br>"
    },
    {   name: "Waitakere Auckland Brass",
        lat: -36.907943,
        lng: 174.69068,
        link: "http://www.waitakerebrass.com/",
        address: "36 Portage Rd <br> New Lynn <br> Auckland <br>"
    },
    {   name: "North Shore Brass",
        lat: -36.7871699,
        lng: 174.7602339,
        link: "http://www.northshorebrass.org.nz/",
        address: "13 Taharoto Road <br> Takapuna <br> Auckland <br> "

    },

    {
        name: "North Shore Youth Brass",
        lat: -36.7883307,
        lng: 174.7598231,
        link: "http://www.northshoreyouthbrassband.org/",
        address: "13 Taharoto Road <br> Takapuna <br> Auckland <br> "
    },
    {
        "name":"North Shore Brass Academy Band",
        lat: -36.7883200,
        lng: 174.7588231,
        linkhttps:"http://www.facebook.com/North-Shore-Brass-Academy-319603901472462/",
        address:"13 Taharoto Road <br> Takapuna <br> Auckland <br> "
    },
    {
        name: "Takapuna Grammar School Brass",
        lat: -36.8015774,
        lng: 174.7903275,
        link: "http://www.takapuna.school.nz/news/student-achievement/",
        address: "210 Lake Rd <br> Takapuna <br> Auckland <br>"
    },
    {   name: "Auckland City Brass",
        lat: -36.907635,
        lng: 174.757163,
        link: "http://www.aucklandcitybrass.co.nz/",
        address: "Grahame Breed Dr <br> Three Kings <br> Auckland <br>"
    },

    {
        "name":"Howick Brass",
        lat:-36.896983,
        lng:174.9049237,
        link:"https://www.facebook.com/howick.brassband",
        address: "Howick"
    },

    {
        "name":"Dalewool Auckland Brass",
        lat:-36.9269398,
        lng:174.8010153,
        link:"http://www.nzbrass.com/",
        address: "98 Captain Springs Road <br> Te Papapa <br> Auckland<br>"
    },
    {
        "name":"Dalewool Youth Brass",
        lat:-36.926983,
        lng:174.8,
        link:"http://www.dalewoolyouth.com/",
        address: "98 Captain Springs Road <br> Te Papapa <br> Auckland<br>"
    },
    {
        "name":"Papakura Brass",
        lat:-37.0554291,
        lng:174.9421477,
        link:"https://www.facebook.com/PapakuraBrass/",
        address:"104 Arimu Road <br> Papakura <br> Auckland <br>"
    },
    //{
    //    "name":"Royal Regiment NZ Artillery Band",
    //    lat:-36.8888645,
    //    lng:174.8453355,
    //    link:"https://www.facebook.com/PapakuraBrass/",
    //    address:" 66F Homestead Drive <br> Panmure <br> Auckland <br>"
    //},
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

    loadBands();
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setAllMap(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function setAllMap(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}


function addMarkers() {
    deleteMarkers();

    var image = {
        url: 'img/cornet_symbol.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(30,50),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base
        anchor: new google.maps.Point(0, 50)
    };

    bands.forEach(function (band) {
        var position = new google.maps.LatLng(band.lat, band.lng);

        marker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: position,
            title: "" + band.name,
            icon: image
        });
        attachMessage(marker, band);
        markers.push(marker);


        var bounds = new google.maps.LatLngBounds();
        for (i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }

        map.fitBounds(bounds);

    })
}

function attachMessage(marker, band) {
    var infowindow = new google.maps.InfoWindow({
        content: "<b>" + band.name + "</b><br>" + band.address +  "<br>Visit their <a href = " + band.link + " target = \"_blank\">website. </a>"
    });

    marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
    });
}


function loadBands() {
    var div = document.getElementById('bands');
    div.innerHTML += '<ul>';
    bands.forEach(function(band) {
        div.innerHTML = div.innerHTML + '<a style = "color: #333333" href = "#"><li style = "list-style: none; margin: 10px;" onClick="centerOnBand(\'' + band.name + '\')">' + band.name + '</li></a>';
    })
    div.innerHTML += '</ul>'




}

function centerOnBand(name) {
    var lat;
    var lng;
    console.log(name);
    bands.forEach(function(band) {
        if(band.name == name){
            lat = band.lat;
            lng = band.lng;

            var infowindow = new google.maps.InfoWindow({
                content: "<b>" + band.name + "</b><br>" + band.address +  "<br>Visit their <a href = " + band.link + " target = \"_blank\">website. </a>"
            });

            markers.forEach(function(marker){
                if(marker.getTitle() == name){
                    infowindow.open(marker.get('map'), marker);
                }
            })

        }
    })

    map.setCenter(new google.maps.LatLng(lat, lng));
    map.setZoom(15);
}
