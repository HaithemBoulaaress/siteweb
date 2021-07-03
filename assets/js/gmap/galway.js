var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var marker = null;
var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow();
var arr_markers = new Array();

arr_markers[0] = new Array();
arr_markers[0]['marker'] = "Galway Cathedral";
arr_markers[0]['lat'] =53.2753075;
arr_markers[0]['lng'] = -9.057407300000023;
arr_markers[0]['info'] = '<div class="map-point-info"><img src="images/Galway-Cathedral.jpg"><h5>Galway Cathedral</h5>Galway Cathedral, built on the site of the old city gaol, is one of Galway city’s largest buildings and its huge octagonal dome is a prominent feature on the Galway skyline.<br><b><a href="https://www.galwaytourism.ie/pgalway-city-landmarks.html" target="_blank">More Info</a></b></div>';

arr_markers[1] = new Array();
arr_markers[1]['marker'] = "Kirwans Lane";
arr_markers[1]['lat'] = 53.27140319999999;
arr_markers[1]['lng'] = -9.054503299999965;
arr_markers[1]['info'] = '<div class="map-point-info"><img src="images/kirwanslanegalway.jpg"><h5>Kirwans Lane</h5>Kirwan`s Lane features many relics of 16th and 17th century architecture making it Galway`s most important medieval street. The lane is were Wolfe Tone played in the little theatre founded by `Humanity` Dick Martin in the 18th century. Now home to cafes, restaurants and craft-shops, the lane captures the atmosphere of old Galway.<br><b><a href="https://www.galwaytourism.ie/pgalway-city-landmarks.html" target="_blank">More Info</a></b></div>';

arr_markers[2] = new Array();
arr_markers[2]['marker'] = "Lynch`s Castle";
arr_markers[2]['lat'] = 53.273146;
arr_markers[2]['lng'] = -9.052366000000006;
arr_markers[2]['info'] = '<div class="map-point-info"><img src="images/Lynchs-Castle.jpg"><h5>Lynch`s Castle</h5>Lynch`s Castle is of the finest examples of a town castle in Ireland and dates from the 15th century. Notable features of the castle include the quality of stone carving on the exterior including the Lynch coat of arms and a number of decorative windows.<br><b><a href="https://www.galwaytourism.ie/pgalway-city-landmarks.html" target="_blank">More Info</a></b></div>';


arr_markers[3] = new Array();
arr_markers[3]['marker'] = "Menlo Castle";
arr_markers[3]['lat'] = 53.29664593391345;
arr_markers[3]['lng'] = -9.073510351001005;
arr_markers[3]['info'] = '<div class="map-point-info"><img src="images/menlo-castle.jpg"><h5>Menlo Castle</h5>Menlo Castle was built in 1569, and was the main home of the Blake family, until it tragically burned down in 1910. It is a well known local landmark and this magnificent ivy covered ruin sits in a beautiful location on the banks of the River Corrib.<br><b><a href="https://www.galwaytourism.ie/pgalway-city-landmarks.html" target="_blank">More Info</a></b></div>';

arr_markers[4] = new Array();
arr_markers[4]['marker'] = "National University of Ireland, Galway";
arr_markers[4]['lat'] = 53.2785391;
arr_markers[4]['lng'] = -9.060459100000003;
arr_markers[4]['info'] = '<div class="map-point-info"><img src="images/university-galway.jpg"><h5>National University of Ireland, Galway</h5>Founded in 1845 as Queen`s College, Galway, and more recently known as University College, Galway, the university is located near the city centre and stretches along the left bank of the River Corrib. The oldest part of the university, the Quadrangle is a replica of Christ Church, one of the colleges at the University of Oxford.<br><b><a href="https://www.galwaytourism.ie/pgalway-city-landmarks.html" target="_blank">More Info</a></b></div>';

arr_markers[5] = new Array();
arr_markers[5]['marker'] = "Spanish Arch";
arr_markers[5]['lat'] = 53.2704028;
arr_markers[5]['lng'] = -9.054780199999982;
arr_markers[5]['info'] = '<div class="map-point-info"><img src="images/Spanish-Arch-Galway.jpg"><h5>Spanish Arch</h5>The Spanish Arch, located where the river Corrib flows into Galway Bay, was built in 1584. Originally an extension of the famous city walls, it was designed to protect the quays. It is a popular meeting point and location for festival events throughout the year.<br><b><a href="https://www.galwaytourism.ie/pgalway-city-landmarks.html" target="_blank">More Info</a></b></div>';

arr_markers[6] = new Array();
arr_markers[6]['marker'] = "St. Nicholas` Church";
arr_markers[6]['lat'] = 53.27272259999999;
arr_markers[6]['lng'] = -9.053777399999944;
arr_markers[6]['info'] = '<div class="map-point-info"><img src="images/St-Nicholas-church.jpg"><h5>St. Nicholas` Church</h5>Originally constructed in 1320, the current structure of St. Nicholas Church is the result of over 600 years of rebuilding and extension. These have resulted in creating one of the most historically interesting and aesthetically pleasing buildings in Galway city. It is said that Christopher Columbus prayed here before setting sail for America in 1492.<br><b><a href="https://www.galwaytourism.ie/pgalway-city-landmarks.html" target="_blank">More Info</a></b></div>';


arr_markers[7] = new Array();
arr_markers[7]['marker'] = "The Claddagh";
arr_markers[7]['lat'] = 53.2661975;
arr_markers[7]['lng'] = -9.057559399999946;
arr_markers[7]['info'] = '<div class="map-point-info"><img src="images/claddagh-galway.jpg"><h5>The Claddagh</h5>The area known as The Claddagh lies at the point where the River Corrib flows into Galway Bay. Traditionally a fishing village it is synonymous with the distinctive Galway Hooker boats which are recognised as the symbol of Galway.<br><b><a href="https://www.galwaytourism.ie/pgalway-city-landmarks.html" target="_blank">More Info</a></b></div>';


arr_markers[8] = new Array();
arr_markers[8]['marker'] = "Galway Market";
arr_markers[8]['lat'] = 53.27242746680838;
arr_markers[8]['lng'] = -9.054313841802923;
arr_markers[8]['info'] = '<div class="map-point-info"><img src="images/galway-market.jpg"><h5>Galway Market</h5>The weekend market, located in the laneway beside St. Nicholas Church is a wonderful place to visit when in Galway city. With a great selection of foods, novel goods and gift ideas, expect it to be bustling all day long each weekend, rain, hail or shine.<br><b><a href="https://www.galwaytourism.ie/pgalway-city-landmarks.html" target="_blank">More Info</a></b></div>';


arr_markers[9] = new Array();
arr_markers[9]['marker'] = "Salthill Promenade";
arr_markers[9]['lat'] = 53.258315937652654;
arr_markers[9]['lng'] = -9.080908711730899;
arr_markers[9]['info'] = '<div class="map-point-info"><img src="images/salthill-promenade.jpg"><h5>Salthill Promenade</h5>Galway`s Salthill Promenade is the longest seaside promenade in Ireland and a wonderful opportunity to enjoy the scenery of Galway Bay.  Approximately 4km long, it is very popular for walks, runs and those enjoying the beach or diving tower at Blackrock. <br><b><a href="https://www.galwaytourism.ie/ptop-5-beaches.html" target="_blank">More Info</a></b></div>';

arr_markers[10] = new Array();
arr_markers[10]['marker'] = "Galway Aquarium";
arr_markers[10]['lat'] = 53.25972789167818;
arr_markers[10]['lng'] = -9.073784764587344;
arr_markers[10]['info'] = '<div class="map-point-info"><img src="images/galway-aquarium.jpg"><h5>Galway Aquarium</h5>Galway Aquarium provides visitors with a vivid interpretation of the Irish aquatic landscape. There is a wealth of marine life to view, including salmon, sea horses, octopus, stingrays and a real 60ft whale skeleton. Children can explore the model submarine, feed fish and even hold starfish and giant spider crabs.<br><b><a href="https://www.galwaytourism.ie/places-to-visit-galway/tourist-information-galway/Atlantaquaria-Galway-Aquarium-l88.html" target="_blank">More Info</a></b></div>';


arr_markers[11] = new Array();
arr_markers[11]['marker'] = "Leisureland";
arr_markers[11]['lat'] = 53.2590604283116;
arr_markers[11]['lng'] = -9.082282002746524;
arr_markers[11]['info'] = '<div class="map-point-info"><img src="images/leisureland-galway.jpg"><h5>Leisureland</h5>Leisureland is a leisure facility with a 25m swimming pool, 65m waterslide, kiddies pool with a treasure cove with pirate ship, water cannons, serpents and bubbly pool.  Leisureland also has an Outdoor Amusement Park (Summer only) with mini-train.<br><b><a href="https://www.galwaytourism.ie/galway-things-to-do/galway-leisure-centre/Leisureland-l50.html" target="_blank">More Info</a></b></div>';

arr_markers[12] = new Array();
arr_markers[12]['marker'] = "Brigit`s Garden";
arr_markers[12]['lat'] = 53.38537950849353;
arr_markers[12]['lng'] = -9.212412708740203;
arr_markers[12]['info'] = '<div class="map-point-info"><img src="images/brigits-garden.jpg"><h5>Brigit`s Garden</h5>Brigit`s Garden is a unique attraction in the west of Ireland that takes you on a magical journey into the heart of Celtic heritage and mythology. Within 11 acres of native countryside, it features a nature trail, ogham trees, children`s discovery trail, living willow play area, woodland and wildflower meadows, an ancient fairy fort, roundhouse and calendar sundial.<br><b><a href="https://www.galwaytourism.ie/places-to-visit-galway/tourist-information-galway/Brigit-s-Garden-Experience-l222.html" target="_blank">More Info</a></b></div>';


arr_markers[13] = new Array();
arr_markers[13]['marker'] = "Loughwell Farm Park";
arr_markers[13]['lat'] = 53.30886003362186;
arr_markers[13]['lng'] = -9.227804714105218;
arr_markers[13]['info'] = '<div class="map-point-info"><img src="images/loughwell-farm-park.jpg"><h5>Loughwell Farm Park</h5>Loughwell Farm Park offers a great day out for young families with a wide variety of animals from pot-bellied pigs and miniature ponies to alpacas and reindeer. There are also indoor and outdoor play areas with large slides, sand pits, swings, zip wire, pedal go karts and much more.<br><b><a href="https://www.galwaytourism.ie/places-to-visit-galway/tourist-information-galway/Loughwell-Farm-Park-l502.html" target="_blank">More Info</a></b></div>';


arr_markers[14] = new Array();
arr_markers[14]['marker'] = "Galway City Museum";
arr_markers[14]['lat'] = 53.26981450950226;
arr_markers[14]['lng'] = -9.053706541247493;
arr_markers[14]['info'] = '<div class="map-point-info"><img src="images/galway-museum.jpg"><h5>Galway City Museum</h5>Galway City Museum is based in the spectacular location of the Spanish Arch in Galway City. The museum collects, preserves and displays material relating to the history and heritage of Galway City and houses collections of artefacts from Prehistoric and Medieval times. <br><b><a href="https://www.galwaytourism.ie/places-to-visit-galway/galway-museums/Galway-City-Museum-l14.html" target="_blank">More Info</a></b></div>';


arr_markers[15] = new Array();
arr_markers[15]['marker'] = "James Mitchell Geology Museum";
arr_markers[15]['lat'] = 53.27741079680834;
arr_markers[15]['lng'] = -9.061838998980647;
arr_markers[15]['info'] = '<div class="map-point-info"><img src="images/james-mitchell-museum.jpg"><h5>James Mitchell Geology Museum</h5>The James Mitchell Museum contains and displays a geological collection of rocks, minerals and fossils. The museum is a partial remnant of the now defunct National History Museum NUI, Galway and has been refurbished and restored in recent years.<br><b><a href="https://www.galwaytourism.ie/places-to-visit-galway/galway-museums/James-Mitchell-Geology-Museum-l1043.html" target="_blank">More Info</a></b></div>';

arr_markers[16] = new Array();
arr_markers[16]['marker'] = "Nora Barnacle House Museum";
arr_markers[16]['lat'] = 53.27315729885325;
arr_markers[16]['lng'] = -9.054452195353633;
arr_markers[16]['info'] = '<div class="map-point-info"><img src="images/nora-barnacle-galway.jpg"><h5>Nora Barnacle House Museum</h5>Wife of James Joyce, Nora Barnacle was born in an area of Galway called Bowling Green. Popular theory suggests that she provided the inspiration for the character Molly Bloom in James Joyce`s seminal work `Ulysses`. The house in which Nora Barnacle lived is now a small museum. <br><b><a href="https://www.galwaytourism.ie/places-to-visit-galway/historic-galway/Nora-Barnacle-House-Museum-l51.html" target="_blank">More Info</a></b></div>';

arr_markers[17] = new Array();
arr_markers[17]['marker'] = "Barna Woods";
arr_markers[17]['lat'] = 53.2603067;
arr_markers[17]['lng'] = -9.133844899999986;
arr_markers[17]['info'] = '<div class="map-point-info"><img src="images/barna-woods.jpg"><h5>Barna Woods</h5>Barna Woods is a popular woodland for nature walks and is adjacent to the Cappagh Park sports and recreational area. It has the last natural growing oaks in the west of Ireland and is an area of special conservation.<br><b><a href="https://www.galwaytourism.ie/psightseeing-galway.html" target="_blank">More Info</a></b></div>';

arr_markers[18] = new Array();
arr_markers[18]['marker'] = "Eyre Square";
arr_markers[18]['lat'] = 53.2740302;
arr_markers[18]['lng'] = -9.04964330000007;
arr_markers[18]['info'] = '<div class="map-point-info"><img src="images/eyre-square.jpg"><h5>Eyre Square</h5>The newly re-designed Eyre Square is the center point of Galway City. When the weather is good, it`s the perfect place to relax and watch the world pass you by. There are numerous sculptures and landmarks and with a genuine buzz and exuberance to it, it is usually the first stop off for visitors arriving to the city by bus or train.<br><b><a href="https://www.galwaytourism.ie/pgalway-city-landmarks.html" target="_blank">More Info</a></b></div>';

arr_markers[19] = new Array();
arr_markers[19]['marker'] = "Rinville Forest Park";
arr_markers[19]['lat'] = 53.2487893686616;
arr_markers[19]['lng'] = -8.962125196643001;
arr_markers[19]['info'] = '<div class="map-point-info"><img src="images/Rinville-Forest-Park.jpg"><h5>Rinville Forest Park</h5>Rinville Forest Park is situated around an ancient castle, a stately home and a fine estate demesne which dates from the 16th century. It has an extensive network of walks through woodland and open farmland and by sea along with picnic areas and a children`s adventure playground.<br><b><a href="https://www.galwaytourism.ie/psightseeing-galway.html" target="_blank">More Info</a></b></div>';

arr_markers[20] = new Array();
arr_markers[20]['marker'] = "Salthill Beach";
arr_markers[20]['lat'] = 53.257544681887516;
arr_markers[20]['lng'] = -9.085292234606868;
arr_markers[20]['info'] = '<div class="map-point-info"><img src="images/salthill-beach-galway.jpg"><h5>Salthill Beach</h5>Salthill Beach actually consists of several small beaches separated by stone outcrops with Blackrock diving located at the far end of the beach. Most of the beaches are sandy but some are pebbly. The beach is lifeguarded from mid-May to the end of September and is extremely popular in fine weather.<br><b><a href="https://www.galwaytourism.ie/ptop-5-beaches.html" target="_blank">More Info</a></b></div>';

arr_markers[21] = new Array();
arr_markers[21]['marker'] = "Silver Strand";
arr_markers[21]['lat'] = 53.25086923876118;
arr_markers[21]['lng'] = -9.12593306560052;
arr_markers[21]['info'] = '<div class="map-point-info"><img src="images/silver-strand-beach-galway.jpg"><h5>Silver Strand</h5>Silver Strand has a safe, shallow, sandy beach of approximately 0.25km bounded on one side by a cliff and the other by rocks. It is particularly popular with and suitable for young families. It faces directly into Galway Bay giving spectacular views. There is a promenade with parking capacity for about 60 vehicles. It is suitable for swimming at low tide but the beach is largely covered during high tides. It is lifeguarded during the summer months.<br><b><a href="https://www.galwaytourism.ie/ptop-5-beaches.html" target="_blank">More Info</a></b></div>';

arr_markers[22] = new Array();
arr_markers[22]['marker'] = "An Taibhdhearc";
arr_markers[22]['lat'] = 53.27191902156839;
arr_markers[22]['lng'] = -9.052714123911983;
arr_markers[22]['info'] = '<div class="map-point-info"><img src="images/antaibhdhearc-theatre.jpg"><h5>An Taibhdhearc</h5>Taibhdhearc na Gaillmhe is the National Irish Language Theatre and has been in existence since 1928.  The theatre promotes the Irish language and new Irish language drama and runs theatre workshops to encourage young people to take part in drama through the medium of the Irish language.  <br><b><a href="https://www.galwaytourism.ie/galway-entertainment/galway-theatres/Taibhdhearc-na-Gaillimhe-l318.html" target="_blank">More Info</a></b></div>';

arr_markers[23] = new Array();
arr_markers[23]['marker'] = "Black Box Theatre";
arr_markers[23]['lat'] = 53.28032320435542;
arr_markers[23]['lng'] = -9.052435174174434;
arr_markers[23]['info'] = '<div class="map-point-info"><img src="images/black-box-galway.jpg"><h5>Black Box Theatre</h5>The Black Box Theatre is one of Galway`s largest theatre spaces and plays host to many international and national performers. Located on Dyke Road, a short walk from Eyre Square the venue is one of the most adaptable in the county. <br><b><a href="https://www.galwaytourism.ie/galway-entertainment/galway-theatres/Black-Box-Theatre-l136.html" target="_blank">More Info</a></b></div>';

arr_markers[24] = new Array();
arr_markers[24]['marker'] = "Druid Theatre";
arr_markers[24]['lat'] = 53.27112671415556;
arr_markers[24]['lng'] = -9.053777386438696;
arr_markers[24]['info'] = '<div class="map-point-info"><img src="images/druid-theatre.jpg"><h5>Druid Theatre</h5>A night at the Druid is an enviable feast for anyone who appreciates good drama. This world renowned theatre group operates for the small theatre in Druid Lane and their shows are extremely popular. You are advised to book seats for any of their shows well in advance.<br><b><a href="https://www.galwaytourism.ie/galway-entertainment/galway-theatres/Druid-Theatre-l16.html" target="_blank">More Info</a></b></div>';

arr_markers[25] = new Array();
arr_markers[25]['marker'] = "Roisin Dubh";
arr_markers[25]['lat'] = 53.2701609911736;
arr_markers[25]['lng'] = -9.058142914958125;
arr_markers[25]['info'] = '<div class="map-point-info"><img src="images/roisin-dubh-galway.jpg"><h5>Roisin Dubh</h5>Roisin Dubh is firmly established as one of the finest music venues in Ireland and frequently hosts gigs for the finest Irish and International musicians and comedians. Open until 2am, 7 nights a week.  <br><b><a href="https://www.galwaytourism.ie/galway-entertainment/galway-pubs/Roisin-Dubh-l82.html" target="_blank">More Info</a></b></div>';

arr_markers[26] = new Array();
arr_markers[26]['marker'] = "Town Hall Theatre";
arr_markers[26]['lat'] = 53.276191888927166;
arr_markers[26]['lng'] = -9.053990855403072;
arr_markers[26]['info'] = '<div class="map-point-info"><img src="images/town-hall-theatre.jpg"><h5>Town Hall Theatre</h5>The Town Hall Theatre dates from the 1820`s but was extensively modernised in 1995. It is the major performance arts venue in Galway hosting drama, concerts, musicals and diverse events. It also serves as the main venue for annual festivals including the Galway Arts Festival, Galway Film Fleadh, Cúirt Literary Festival and Baboró Children`s Arts Festival.<br><b><a href="https://www.galwaytourism.ie/galway-entertainment/galway-theatres/Town-Hall-Theatre-l66.html" target="_blank">More Info</a></b></div>';

function initialize() {
    //var latlng = new google.maps.LatLng(53.28379987154209,-9.056839361376888);
    //var latlng = new google.maps.LatLng(53.28379987154209,-9.056839361376888);
    //  var latlng = new google.maps.LatLng(53.28379987154209,-9.056839361376888);
    var latlng = new google.maps.LatLng(53.28379987154209,-9.056839361376888);
    // set direction render options
    var rendererOptions = { draggable: true };
    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    var myOptions = {
        zoom: 13,
        scaleControl: true,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
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
        unitSystem: google.maps.UnitSystem.IMPERIAL,
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