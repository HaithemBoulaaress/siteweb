var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var marker = null;
var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow();
var arr_markers = new Array();

arr_markers[0] = new Array();
arr_markers[0]['marker'] = "Bishop`s Palace";
arr_markers[0]['lat'] =52.259581;
arr_markers[0]['lng'] = -7.107692000000043;
arr_markers[0]['info'] = '<div class="map-point-info"><img src="images/bishops-palace-waterford-ireland.jpg"><h5>Bishop`s Palace</h5>Bishop`s palace is one of the 3 museums that make up the Viking Triangle in Waterford city. Built in 1743 the museum presents artefacts from the 18th, 19th and 20th centuries. Open all year around 7 days per week, the museum is located opposite the House of Waterford Crystal.</div>';

arr_markers[1] = new Array();
arr_markers[1]['marker'] = "Dungarvan Castle";
arr_markers[1]['lat'] = 52.0889827;
arr_markers[1]['lng'] = -7.616245100000015;
arr_markers[1]['info'] = '<div class="map-point-info"><img src="images/dungarvan-castle-waterford.jpg"><h5>Dungarvan Castle</h5>Dungarvan Castle in has recently undergone a complete restoration and houses an exhibition on the history of the castle which dates from the 13th Century and overlooks Dungarvan Harbour. In recent times the castle was used as an Infantry Barracks in the 18th Century, a Republican barracks and later a police barracks for an Garda Siochana.</div>';

arr_markers[2] = new Array();
arr_markers[2]['marker'] = "Edmund Rice Heritage Centre";
arr_markers[2]['lat'] = 52.25700919891831;
arr_markers[2]['lng'] = -7.117057224159225;
arr_markers[2]['info'] = '<div class="map-point-info"><img src="images/Edmund-Rice-Heritage-Centre-Waterford.jpg"><h5>Edmund Rice Heritage Centre</h5>This heritage centre tells the story of Edmund Rice, a missionary and educationalist who began his educational mission among the poor of Waterford. The centre presents an interactive audio visual history of his work and its growth throughout the world.</div>';


arr_markers[3] = new Array();
arr_markers[3]['marker'] = "Lismore Heritage Centre";
arr_markers[3]['lat'] = 52.13693199999999;
arr_markers[3]['lng'] = -7.933558700000049;
arr_markers[3]['info'] = '<div class="map-point-info"><img src="images/lismore-heritage-centre-county-waterford.jpg"><h5>Lismore Heritage Centre</h5>Located in the centre of Lismore, Lismore Heritage Centre takes you through the history of Lismore Town, starting with the arrival of St. Carthage in 636 and bringing you right up to the present. You can stroll through the recently refurbished exhibition galleries and come face to face with the historic figures that influenced Lismore Town through the ages. There is also an exhibition space dedicated to the life and works of Robert Boyle `The Father Of Modern Chemistry` and author of `Boyles Law`. </div>';

arr_markers[4] = new Array();
arr_markers[4]['marker'] = "Reginald`s Tower";
arr_markers[4]['lat'] = 52.2604705;
arr_markers[4]['lng'] = -7.105407499999956;
arr_markers[4]['info'] = '<div class="map-point-info"><img src="images/Reginalds-Tower-Waterford-City.jpg"><h5>Reginald`s Tower</h5>Reginald`s tower, located on The Quays, is Waterford`s most famous landmark. The building is believed to be the oldest tower of mortared stone in Europe. It takes its name from Reginald Maclvor, a Danish Governor of Waterford who built the tower in 1003 A.D. Throughout it`s varied history it has been used as a fortress, a prison, a military stores depot, a mint, and an air raid shelter. It currently houses the City`s civic and maritime museum.</div>';

arr_markers[5] = new Array();
arr_markers[5]['marker'] = "Waterford &amp; Suir Valley Railway";
arr_markers[5]['lat'] = 52.23333;
arr_markers[5]['lng'] = -7.242809999999963;
arr_markers[5]['info'] = '<div class="map-point-info"><img src="images/Waterford-Suir-Valley-Railway.jpg"><h5>Waterford &amp; Suir Valley Railway</h5>The romance of railway`s golden age is brought to life by the Waterford & Suir Valley Railway which is based in Kilmeadan, County Waterford. Very much a family friendly visitor attraction, the railway travels along the scenic banks of the River Suir and provides wonderful views Mount Congreve Gardens. The train travels at 15 km per hour and has capacity for up to 90 passengers with journey times of about 50 mins.</div>';

arr_markers[6] = new Array();
arr_markers[6]['marker'] = "Waterford Crystal Visitor Centre";
arr_markers[6]['lat'] = 52.25950402246245;
arr_markers[6]['lng'] = -7.106679359619193;
arr_markers[6]['info'] = '<div class="map-point-info"><img src="images/Waterford-Crystal-Visitor-Centre.jpg"><h5>Waterford Crystal Visitor Centre</h5>Waterford is famous the world over as the home of excellence in crystal designs. The Waterford Crystal Visitor Centre, which is located 3km outside Waterford City, provides a highly interactive experience in which visitors get the opportunity to see crystal being made before their eyes. For this reason the Waterford Crystal tour is worthwhile, as it exposes visitors to a real working crystal factory, allowing you to walk among the various production stations, as crystal is being manufactured.</div>';


arr_markers[7] = new Array();
arr_markers[7]['marker'] = "Waterford Treasures at the Granary";
arr_markers[7]['lat'] = 52.25955399999999;
arr_markers[7]['lng'] = -7.1076739999999745;
arr_markers[7]['info'] = '<div class="map-point-info"><img src="images/Waterford-Museum-Treasures-Granary.jpg"><h5>Waterford Treasures at the Granary</h5>There is an impressive exhibition at the Waterford Museum of Treasures that will take you through 1000 years of the city`s history. You can avail of a sound guide to allow you to appreciate the history of the city at your own pace and marvel at the fascinating artefacts and explore them in depth through a series of interactives and audio-visual presentations. Some of the highlights include the The Waterford Kite Brooch dating from about 1100 AD and the Penrose decanter dating from c. 1790.</div>';


arr_markers[8] = new Array();
arr_markers[8]['marker'] = "Christ Church Cathedral";
arr_markers[8]['lat'] = 52.2601452;
arr_markers[8]['lng'] = -7.107845099999963;
arr_markers[8]['info'] = '<div class="map-point-info"><img src="images/Christ_Church_Cathedral_Waterford_City.jpg"><h5>Christ Church Cathedral</h5>Christ Church has a rich history dating from the 11th century when a Viking church stood on the same site. History records that the English knight Strongbow and Irish Princess Aoife married here 1170. During the 13th century Normans invaders took of Waterford and constructed a Gothic cathedral which was later replaced by the existing Christ Church Cathedral in 1773.  Although primarily a place of worship, the cathedral regularly hosts concerts, recitals and exhibitions.</div>';


arr_markers[9] = new Array();
arr_markers[9]['marker'] = "City Hall";
arr_markers[9]['lat'] = 52.26016597389332;
arr_markers[9]['lng'] = -7.105759924992412;
arr_markers[9]['info'] = '<div class="map-point-info"><img src="images/Waterford-City-Hall.jpg"><h5>City Hall </h5>Designed by John Roberts and built in 1783, the City Hall`s main feature is The Large Room, which has hosted figures of historical importance such as Daniel O`Connell, King Edward VII, Thomas Francis Meagher, Isaac Butt, Charles Stewart Parnell and John Redmond. William Van der Hagen`s painting “View of Waterford”, Ireland`s oldest landscape painting dating from 1736, is on display in the council chamber. </div>';

arr_markers[10] = new Array();
arr_markers[10]['marker'] = "City Walls";
arr_markers[10]['lat'] = 52.2604902;
arr_markers[10]['lng'] = -7.105304499999988;
arr_markers[10]['info'] = '<div class="map-point-info"><img src="images/City-Walls-Waterford.jpg"><h5>City Walls</h5>Waterford City was founded by Vikings in the 9th century and evidence of the early fortification of the early settlement is in evidence with the many historic walls and towers dotted throughout the city. Excavations as part of a building project recently uncovered the remains of a Viking age gateway which once stood at the top of Peter Street in the city centre.</div>';


arr_markers[11] = new Array();
arr_markers[11]['marker'] = "French Church and Greyfriars Abbey";
arr_markers[11]['lat'] = 52.260713253525374;
arr_markers[11]['lng'] = -7.106986902446806;
arr_markers[11]['info'] = '<div class="map-point-info"><img src="images/French-Church-Waterford-City.jpg"><h5>French Church and Greyfriars Abbey</h5>Ruins are all that remain of French Church, a 13th-century Franciscan abbey situated on Greyfriars Street. The church, also known as Greyfriars, was occupied by a group of Huguenot refugees in 1693 and this is where its “French” connection is derived from. A splendid east window remains amid the ruins and a sculpture of the famous Franciscan Monk and historian, Luke Wadding stands in front of the ruins on Greyfriars Street.</div>';

arr_markers[12] = new Array();
arr_markers[12]['marker'] = "The Clock Tower";
arr_markers[12]['lat'] = 52.26222897985352;
arr_markers[12]['lng'] = -7.111450789688092;
arr_markers[12]['info'] = '<div class="map-point-info"><img src="images/Clock-Tower-Waterford-City.jpg"><h5>The Clock Tower</h5>Built in 1862, The Clock Tower is one of the City`s most familiar landmarks and situated on Waterford`s sizable Quay. The clock was initially developed for the benefit of shipping and to assist seafarers coming and going from the harbour. </div>';


arr_markers[13] = new Array();
arr_markers[13]['marker'] = "Thomas Francis Meagher Statue";
arr_markers[13]['lat'] = 52.260272431271524;
arr_markers[13]['lng'] = -7.105218519504547;
arr_markers[13]['info'] = '<div class="map-point-info"><img src="images/Thomas-Francis-Meagher-Statue.JPG"><h5>Thomas Francis Meagher Statue</h5>Born in the building which now houses The Granville Hotel on the Quay in Waterford City, Thomas Francis Meagher had a long and distinguished life. Having joined the U.S. Army at an young age, he quickly rose to the rank of brigadier general. He was most notable for recruiting and leading the Irish Brigade, and generating support among Irish immigrants for the Union. After the Civil War, he was appointed as governor of the Montana Territory. Meagher tragically drowned in the swift-running Missouri River in 1867 after an accidental fall from a boat at Fort Benton.</div>';


arr_markers[14] = new Array();
arr_markers[14]['marker'] = "Waterford City Marina";
arr_markers[14]['lat'] = 52.258368001620546;
arr_markers[14]['lng'] = -7.101592172916412;
arr_markers[14]['info'] = '<div class="map-point-info"><img src="images/waterford_city_marina.jpg"><h5>Waterford City Marina</h5>Waterford City Marina in the centre of Waterford city at Custom House Parade is close to many shop, restaurants, pubs and other amenities.  The Marina has 100 fully serviced berths along with a wide range of other facilities for visitors and is open all year round.</div>';


arr_markers[15] = new Array();
arr_markers[15]['marker'] = "Mahon Falls";
arr_markers[15]['lat'] = 52.22370662997731;
arr_markers[15]['lng'] = -7.5415027120697005;
arr_markers[15]['info'] = '<div class="map-point-info"><img src="images/Mahon-Falls-Waterford.jpg"><h5>Mahon Falls</h5>Mahon Falls is an 80m waterfall located in the Comeragh Mountains near Lemybrien, County Waterford. The dramatic waterfall together with the stunning scenery of the surrounding area makes this excursion worthwhile. Parking is available near the falls which are only a short walk away.</div>';

arr_markers[16] = new Array();
arr_markers[16]['marker'] = "Mount Congreve House and Gardens";
arr_markers[16]['lat'] = 52.2376049;
arr_markers[16]['lng'] = -7.212446600000021;
arr_markers[16]['info'] = '<div class="map-point-info"><img src="images/mount-congreve-gardens-waterford.jpg"><h5>Mount Congreve House and Gardens</h5>Mount Congreve Estate and Gardens in the village of Kilmeaden was constructed circa 1760 by the famous local architect John Roberts. The estate is famous for its exceptional gardens with over 30 hectares of dense woodland garden and extensive walled garden. It was the home of the late Ambrose Congreve and the designs found much of their inspiration from Lionel de Rothschild`s wonderful gardens at Exbury in Hampshire, England.</div>';

arr_markers[17] = new Array();
arr_markers[17]['marker'] = "The Copper Coast Geopark Centre";
arr_markers[17]['lat'] = 52.142309;
arr_markers[17]['lng'] = -7.365009;
arr_markers[17]['info'] = '<div class="map-point-info"><img src="images/Copper-Coast-Geopark-Centre-Waterford.JPG"><h5>The Copper Coast Geopark Centre</h5>The Copper Coast name stems from the 19th century copper mines located at its centre and the area was designated a UNESCO Global Geopark in 2004 due to geologically diverse features of Palaeozoic volcanism and the last ice age. The park covers some 25 kms of scenic coastline with scalloped beaches and coves enclosed by rocky headlands. The Copper Coast Visitors Centre in Bunmahon provides detailed information about the park by providing trail cards and a visual displays.</div>';

arr_markers[18] = new Array();
arr_markers[18]['marker'] = "The People`s Park";
arr_markers[18]['lat'] = 52.256823;
arr_markers[18]['lng'] = -7.105404499999963;
arr_markers[18]['info'] = '<div class="map-point-info"><img src="images/Peoples-Park-Waterford-City.jpg"><h5>The People`s Park</h5>The People`s Park at William Street and Park Road, is a peaceful place to relax away from the hustle and bustle of Waterford City life. Built in the 19th century, the park has many quiet paths, water features, seating and green areas for picnics during fine weather and a bandstand which is used for occasional performances. There is also a children`s playground, café, and a skatepark onsite.</div>';

arr_markers[19] = new Array();
arr_markers[19]['marker'] = "Waterford Nature Park";
arr_markers[19]['lat'] = 52.24158978055774;
arr_markers[19]['lng'] = -7.124172347082549;
arr_markers[19]['info'] = '<div class="map-point-info"><img src="images/Waterford-Nature-Park.jpg"><h5>Waterford Nature Park</h5>Waterford Nature Park covers an area of about 150 acres and is very popular for leisure activities such as cycling, walking and jogging and family days out. The park is accessed at the Tramore Road at the Kingfisher Club and has many walkways to explore and get close to nature.</div>';

arr_markers[20] = new Array();
arr_markers[20]['marker'] = "Garter Lane Arts Centre";
arr_markers[20]['lat'] = 52.26262;
arr_markers[20]['lng'] = -7.116160000000036;
arr_markers[20]['info'] = '<div class="map-point-info"><img src="images/Garter-Lane-Arts-Centre-Waterford.jpg"><h5>Garter Lane Arts Centre</h5>Garter Lane Arts Centre is housed in two Georgian buildings in the centre of Waterford city and offers a vibrant and eclectic programme of theatre, dance, music, film, literature, visual art & children`s art throughout the year.</div>';

arr_markers[21] = new Array();
arr_markers[21]['marker'] = "Theatre Royal";
arr_markers[21]['lat'] = 52.2598423;
arr_markers[21]['lng'] = -7.1060205;
arr_markers[21]['info'] = '<div class="map-point-info"><img src="images/theatre-royal-waterford.jpg"><h5>Theatre Royal</h5>Theatre Royal Waterford is a beautifully renovated Victorian theatre in a landmark Georgian building and plays host to the best of local and national entertainment. The Theatre Royal is located within the Viking Triangle Waterford, directly across from Waterford Crystal Visitor Centre.</div>';

function initialize() {
    //var latlng = new google.maps.LatLng(52.256667,-7.129167000000052);
    //var latlng = new google.maps.LatLng(52.256667,-7.129167000000052);
    //  var latlng = new google.maps.LatLng(52.256667,-7.129167000000052);
    var latlng = new google.maps.LatLng(52.256667,-7.129167000000052);
    // set direction render options
    var rendererOptions = { draggable: true };
    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    var myOptions = {
        zoom: 12,
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