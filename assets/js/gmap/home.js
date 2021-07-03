var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var marker = null;
var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow();
var arr_markers = new Array();

arr_markers[0] = new Array();
arr_markers[0]['marker'] = "Most Northerly Point";
arr_markers[0]['lat'] = 55.4356;
arr_markers[0]['lng'] = -7.2331;
arr_markers[0]['info'] = '<div class="map-point-info"><img src="images/Inishtrahull-Island.jpg" ><h5>Most Northerly Point</h5>Inishtrahull Island is Ireland`s most northerly point, situated in the Atlantic Ocean 7 km (4.3mi) north of Inishowen Peninsula in Co. Donegal.</div>';

arr_markers[1] = new Array();
arr_markers[1]['marker'] = "Most Easterly Point";
arr_markers[1]['lat'] = 54.4888;
arr_markers[1]['lng'] = -5.4269;
arr_markers[1]['info'] = '<div class="map-point-info"><img src="images/ards-peninsula-ireland.jpg"><h5>Most Easterly Point</h5>Ireland`s most easterly point is Big Bow Meel Island, situated 900 mts (2953 ft) off the Ards Peninsula in Co. Down.</div>';

arr_markers[2] = new Array();
arr_markers[2]['marker'] = "Most Southerly Point";
arr_markers[2]['lat'] = 51.232040;
arr_markers[2]['lng'] = -9.361440;
arr_markers[2]['info'] = '<div class="map-point-info"><img src="images/fastnet-rock.jpg"><h5>Most Southerly Point</h5>The most southerly point in Ireland is Fastnet Rock, which lies in the Atlantic Ocean 11.3 km (7 mi) south of mainland Co. Cork.</div>';


arr_markers[3] = new Array();
arr_markers[3]['marker'] = "Most Westerly Point";
arr_markers[3]['lat'] = 52.075;
arr_markers[3]['lng'] = -10.657;
arr_markers[3]['info'] = '<div class="map-point-info"><img src="images/Tearaght-Island.jpg"><h5>Most Westerly Point</h5>Tearaght Island, situated in the Atlantic Ocean 12.5 km (7.7 mi) west of Dingle Peninsula, Co. Kerry is Ireland`s most westerly point.</div>';

arr_markers[4] = new Array();
arr_markers[4]['marker'] = "Carrauntoohil, Co. Kerry";
arr_markers[4]['lat'] = 52.000;
arr_markers[4]['lng'] = -9.740;
arr_markers[4]['info'] = '<div class="map-point-info"><img src="images/Carrauntoohil-ireland.jpg"><h5>Carrauntoohil, Co. Kerry</h5>Ireland`s highest mountain is Carrantuohill which rises to 1,041 mts (3414 ft) above sea level and is part of the MacGillycuddy Reeks range in county Kerry.</div>';

arr_markers[5] = new Array();
arr_markers[5]['marker'] = "Beenkeragh, Co. Kerry";
arr_markers[5]['lat'] = 52.0055556;
arr_markers[5]['lng'] = -9.746388900000056;
arr_markers[5]['info'] = '<div class="map-point-info"><img src="images/beenkeragh-ireland.jpg"><h5>Beenkeragh, Co. Kerry</h5>Beenkeragh is Ireland`s second highest peak at 1010 mts (3314 ft) and is part of the MacGillycuddy Reeks range in county Kerry.</div>';

arr_markers[6] = new Array();
arr_markers[6]['marker'] = "Caher, Co. Kerry";
arr_markers[6]['lat'] = 51.9946;
arr_markers[6]['lng'] = -9.7585;
arr_markers[6]['info'] = '<div class="map-point-info"><img src="images/caher-mountain-ireland.jpg"><h5>Caher, Co. Kerry</h5>Caher mountain which is part of the MacGillycuddy Reeks range in county Kerry is Ireland`s third highest peak at 1001 mts (3284 ft).</div>';


arr_markers[7] = new Array();
arr_markers[7]['marker'] = "Mount Brandon, Co. Kerry";
arr_markers[7]['lat'] = 52.21527769999999;
arr_markers[7]['lng'] = -10.236111100000016;
arr_markers[7]['info'] = '<div class="map-point-info"><img src="images/mount-brandon-ireland.jpg"><h5>Mount Brandon, Co. Kerry</h5>Mount Brandon, on the Dingle Peninsula in County Kerry is part of the Slieve Mish Mountain range in county Kerry is Ireland`s fourth highest peak at 952 mts (3123 ft).</div>';


arr_markers[8] = new Array();
arr_markers[8]['marker'] = "River Shannon";
arr_markers[8]['lat'] = 53.8047;
arr_markers[8]['lng'] = -7.9115;
arr_markers[8]['info'] = '<div class="map-point-info"><img src="images/shannon-river-ireland.jpg"><h5>River Shannon</h5>Extending 386 km (240 mi), Ireland`s longest river rises in Shannon Pot, Co. Cavan and enters the Atlantic Ocean between counties Clare and Limerick.</div>';


arr_markers[9] = new Array();
arr_markers[9]['marker'] = "River Barrow";
arr_markers[9]['lat'] = 52.85211;
arr_markers[9]['lng'] = -6.934458800000016;
arr_markers[9]['info'] = '<div class="map-point-info"><img src="images/barrow-river-ireland.jpg"><h5>River Barrow</h5>The River Barrow is Ireland`s second longest river at 193 km (120 mi) in length. The source of the river is in county Laois and flows through Kildare, Kilkenny, Carlow, Wexford before entering the sea at Waterford harbour.</div>';

arr_markers[10] = new Array();
arr_markers[10]['marker'] = "River Suir";
arr_markers[10]['lat'] = 52.291056471086435;
arr_markers[10]['lng'] = -7.2837957695312525;
arr_markers[10]['info'] = '<div class="map-point-info"><img src="images/suir-river-ireland.jpg"><h5>River Suir</h5>The River Suir is Ireland`s third longest river at 185 km (115 mi) in length and flows through counties Tipperary and Waterford, entering the sea at Waterford harbour.</div>';


arr_markers[11] = new Array();
arr_markers[11]['marker'] = "River Blackwater";
arr_markers[11]['lat'] = 52.14324676199362;
arr_markers[11]['lng'] = -7.949638354614308;
arr_markers[11]['info'] = '<div class="map-point-info"><img src="images/blackwater-river-ireland.jpg"><h5>River Blackwater</h5>The Blackwater River (or Munster Blackwater) is Ireland`s fourth longest river at 169 Km (271 mi). It rises in county Kerry, flowing east through Cork and Waterford and enters the sea at Youghal Harbour.</div>';

arr_markers[12] = new Array();
arr_markers[12]['marker'] = "Lough Neagh";
arr_markers[12]['lat'] = 54.6206;
arr_markers[12]['lng'] = -6.4181;
arr_markers[12]['info'] = '<div class="map-point-info"><img src="images/lough-neagh-ireland.jpg"><h5>Lough Neagh</h5>Lough Neagh in Northern Ireland covers and area of 396 km² (153 mi²) and is larger than any other lake in the British Isles.</div>';


arr_markers[13] = new Array();
arr_markers[13]['marker'] = "Lough Corrib";
arr_markers[13]['lat'] = 53.45141468039123;
arr_markers[13]['lng'] = -9.246142897656227;
arr_markers[13]['info'] = '<div class="map-point-info"><img src="images/lough-corrib-ireland.jpg"><h5>Lough Corrib</h5>Lough Corrib is the second largest lake on the island of Ireland covering 176 km² (68 mi²) and lies mostly in County Galway in the west of Ireland.</div>';


arr_markers[14] = new Array();
arr_markers[14]['marker'] = "Lough Derg";
arr_markers[14]['lat'] = 52.95244400500615;
arr_markers[14]['lng'] = -8.322162126953117;
arr_markers[14]['info'] = '<div class="map-point-info"><img src="images/lough-derg.jpg"><h5>Lough Derg</h5>Lough Derg is the third largest lake on the island of Ireland covering 130 km2 (50 sq mi) and lies in counties Clare, Galway and Tipperary.</div>';


arr_markers[15] = new Array();
arr_markers[15]['marker'] = "Lough Erne";
arr_markers[15]['lat'] = 54.481057757964656;
arr_markers[15]['lng'] = -7.811079846679718;
arr_markers[15]['info'] = '<div class="map-point-info"><img src="images/lough-erne.jpg"><h5>Lough Erne</h5>Lough Erne is the fourth largest lake system on the island of Ireland covering 110 km2 (42 sq mi).  It consists of two connecting lakes situated in County Fermanagh in Northern Ireland.</div>';

arr_markers[16] = new Array();
arr_markers[16]['marker'] = "Centre of Ireland";
arr_markers[16]['lat'] = 53.3960;
arr_markers[16]['lng'] = -7.9417;
arr_markers[16]['info'] = '<div class="map-point-info"><img src="images/athlone-ireland.jpg"><h5>Centre of Ireland</h5>The geographical centre of Ireland is located in east Co. Roscommon, 3km south of Athlone town.</div>';

arr_markers[17] = new Array();
arr_markers[17]['marker'] = "Closest to Britain";
arr_markers[17]['lat'] = 55.1983;
arr_markers[17]['lng'] = -6.0620;
arr_markers[17]['info'] = '<div class="map-point-info"><img src="images/torr-head-antrim-ireland.jpg"><h5>Closest to Britain</h5>Torr Head in Co. Antrim is only 23 km (14 mi) from the Mull of Kintyre in Scotland.</div>';

arr_markers[18] = new Array();
arr_markers[18]['marker'] = "Highest Lake";
arr_markers[18]['lat'] = 52.00317951350961;
arr_markers[18]['lng'] = -9.744353417968796;
arr_markers[18]['info'] = '<div class="map-point-info"><img src="images/cummeenoughter-lake-ireland.jpg"><h5>Highest Lake</h5>Cummeenoughter Lake in County Kerry is Ireland`s highest lake at 707m (2319 ft) above sea level. It is located in the MacGillycuddy’s Reeks between Ireland’s two highest peaks (Carrauntoohil and Beenkeragh).</div>';

arr_markers[19] = new Array();
arr_markers[19]['marker'] = "Largest City";
arr_markers[19]['lat'] = 53.3498053;
arr_markers[19]['lng'] = -6.260309699999993;
arr_markers[19]['info'] = '<div class="map-point-info"><img src="images/dublin-city-ireland.jpg"><h5>Largest City</h5>Dublin is Ireland`s capital and largest city by head of population with over 500,000 people. Dublin is on Ireland`s east coast and located at the mouth of the River Liffey.</div>';

arr_markers[20] = new Array();
arr_markers[20]['marker'] = "Largest County";
arr_markers[20]['lat'] = 51.8968917;
arr_markers[20]['lng'] = -8.486315699999977;
arr_markers[20]['info'] = '<div class="map-point-info"><img src="images/cork-ireland.jpg"><h5>Largest County</h5>Cork is Ireland`s largest county covering 7,457 km² (2879 mls²).  The second largest is Co. Galway, at 6,148 km² (2374 mls²)</div>';

arr_markers[21] = new Array();
arr_markers[21]['marker'] = "Smallest County";
arr_markers[21]['lat'] = 53.8969758;
arr_markers[21]['lng'] = -6.467097100000046;
arr_markers[21]['info'] = '<div class="map-point-info"><img src="images/louth-ireland.jpg"><h5>Smallest County</h5>With a size is just 820 km² (317 mls²). The second smallest is Co. Carlow which is 896 km². (346 mls²)</div>';

arr_markers[22] = new Array();
arr_markers[22]['marker'] = "Largest Island";
arr_markers[22]['lat'] = 53.9100;
arr_markers[22]['lng'] = -9.8609;
arr_markers[22]['info'] = '<div class="map-point-info"><img src="images/achill-island-ireland.jpg"><h5>Largest Island</h5>Achill Island in Co. Mayo is Ireland`s largest island with an area of 148 km² (57 mls²).</div>';

arr_markers[23] = new Array();
arr_markers[23]['marker'] = "Largest Sea Inlet";
arr_markers[23]['lat'] = 54.46954096456599;
arr_markers[23]['lng'] = -5.606472196972618;
arr_markers[23]['info'] = '<div class="map-point-info"><img src="images/strangford-lough-ireland.jpg"><h5>Largest Sea Inlet</h5>Strangford Lough in County Down, which covers an area of 135 km² (52 mls²), is the largest sea inlet in Ireland and the entire British Isles.</div>';

arr_markers[24] = new Array();
arr_markers[24]['marker'] = "Longest Beach";
arr_markers[24]['lat'] = 52.5286807737864;
arr_markers[24]['lng'] = -6.218286726709039;
arr_markers[24]['info'] = '<div class="map-point-info"><img src="images/morriscastle-beach-ireland.jpg"><h5>Longest Beach</h5>A continuous 20km (12.5 mi) stretch of sand from Cahore Point to Raven Point in Co. Wexford is Ireland`s longest beach.</div>';

arr_markers[25] = new Array();
arr_markers[25]['marker'] = "Tallest Sea Cliffs";
arr_markers[25]['lat'] = 53.9488;
arr_markers[25]['lng'] = -10.0497;
arr_markers[25]['info'] = '<div class="map-point-info"><img src="images/achill-sea-cliffs.jpg"><h5>Tallest Sea Cliffs</h5>Croaghaun, Achill Island falls 668 mts (2,192 ft) into the Atlantic Ocean.</div>';


arr_markers[26] = new Array();
arr_markers[26]['marker'] = "Tallest Waterfall";
arr_markers[26]['lat'] = 53.1942;
arr_markers[26]['lng'] = -6.1682;
arr_markers[26]['info'] = '<div class="map-point-info"><img src="images/powerscourt-waterfall-ireland.jpg"><h5>Tallest Waterfall</h5>Ireland`s highest waterfall is Powerscourt Falls in Co. Wicklow, where the water drops 106 metres (348 feeet).</div>';


function initialize() {
    //var latlng = new google.maps.LatLng(53.396540795528246,-7.942222549768076);
    //var latlng = new google.maps.LatLng(53.396540795528246,-7.942222549768076);
//  var latlng = new google.maps.LatLng(53.396540795528246,-7.942222549768076);
    var latlng = new google.maps.LatLng(53.396540795528246,-7.942222549768076);
    // set direction render options
    var rendererOptions = { draggable: true };
    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    var myOptions = {
        zoom: 7,
        scaleControl: true,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        mapTypeControl: true
    };
    // add the map to the map placeholder
    map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    // Add a marker to the map for the end-point of the directions.
    /*
     var marker = new google.maps.Marker({
     position: latlng,
     map: map,
     title:"Rodderhof, Oss"
     });
     */
}
function calcRoute() {
    // get the travelmode, startpoint and via point from the form
    var travelMode = $('input[name="travelMode"]:checked').val();
    var start = $("#routeStart").val();
    var via = $("#routeVia").val();

    if (travelMode == 'TRANSIT') {
        via = ''; // if the travel mode is transit, don't use the via waypoint because that will not work
    }
    //var end = "51.764696,5.526042"; // endpoint is a geolocation
    var end = $("#routeEnd").val(); // endpoint is a geolocation
    var waypoints = []; // init an empty waypoints array
    if (via != '') {
        // if waypoints (via) are set, add them to the waypoints array
        waypoints.push({
            location: via,
            stopover: true
        });
    }
    var request = {
        origin: start,
        destination: end,
        waypoints: waypoints,
        unitSystem: google.maps.UnitSystem.METRIC,
        travelMode: google.maps.DirectionsTravelMode[travelMode]
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            $('#directionsPanel').empty(); // clear the directions panel before adding new directions
            directionsDisplay.setDirections(response);
        } else {
            // alert an error message when the route could nog be calculated.
            if (status == 'ZERO_RESULTS') {
                alert('No route could be found between the origin and destination.');
            } else if (status == 'UNKNOWN_ERROR') {
                alert('A directions request could not be processed due to a server error. The request may succeed if you try again.');
            } else if (status == 'REQUEST_DENIED') {
                alert('This webpage is not allowed to use the directions service.');
            } else if (status == 'OVER_QUERY_LIMIT') {
                alert('The webpage has gone over the requests limit in too short a period of time.');
            } else if (status == 'NOT_FOUND') {
                alert('At least one of the origin, destination, or waypoints could not be geocoded.');
            } else if (status == 'INVALID_REQUEST') {
                alert('The DirectionsRequest provided was invalid.');
            } else {
                alert("There was an unknown error in your request. Requeststatus: nn"+status);
            }
        }
    });
}

function showMarker(marker_index){
    // remove all markers
    remove_all_markers();

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(arr_markers[marker_index]["lat"]
            , arr_markers[marker_index]["lng"]),
        map: map,
        title: arr_markers[marker_index]["name"]
    });

    infowindow.open(map,marker);
    infowindow.setContent( arr_markers[marker_index]["info"] );

    infowindow.open(map,marker);

}

function showAddress(address) {


//    var addressInfo = "<p style=\"text-transform: capitalize\">"+address+"</p>";

    geocoder.geocode( { 'address': address}, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            // remove all markers
            remove_all_markers();

            map.setCenter(results[0].geometry.location);
            map.setZoom(13);

            marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });

//            infowindow.setContent( addressInfo );
            infowindow.setContent( results[0].formatted_address );
            infowindow.open(map,marker);


            google.maps.event.addListener(marker, 'click', function() {

//                infowindow.setContent( addressInfo );
                infowindow.setContent( results[0].formatted_address );
                infowindow.open(map,marker);

            });

        } else {
            alert(address + " not found");
        }
    });

}

function remove_all_markers(){
    if(marker != null){
        marker.setMap(null);
    }
}
$(document).ready(function() {
    var autocompleteLoaded = 0;
    var autocomplete;

    $('#street_address').keyup(function() {
        if (autocompleteLoaded==1 && this.value.length<7)
        {
            autocomplete.unbindAll();
            google.maps.event.clearInstanceListeners(document.getElementById('street_address'));
            $(".pac-container").hide();
            autocompleteLoaded=0;
        }
        if (autocompleteLoaded==0 && this.value.length>=7)
        {
            autocompleteLoaded=1;
            var input = document.getElementById('street_address');
            var options = {
            };
            autocomplete = new google.maps.places.Autocomplete(input, options);

            google.maps.event.addListener(autocomplete, 'place_changed', function() {});
        }
    });

    $("#frm_search_address").submit(function() {

        var street_address = $("#street_address").val();
        if(street_address.length > 0 ){
            // display code address
            showAddress(street_address);
        }

        return false;
    });

});