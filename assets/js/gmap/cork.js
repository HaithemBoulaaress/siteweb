var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var marker = null;
var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow();
var arr_markers = new Array();

arr_markers[0] = new Array();
arr_markers[0]['marker'] = "Beamish &amp; Crawford Brewery";
arr_markers[0]['lat'] =51.896034386482626;
arr_markers[0]['lng'] = -8.477281094195519;
arr_markers[0]['info'] = '<div class="map-point-info"><img src="images/Beamish-Crawford-Brewery-Cork.jpg"><h5>Beamish &amp; Crawford Brewery</h5>Beamish has been brewed in Cork since 1792, though there is some evidence that brewing could have been in operation here as early as the 15th century. The Beamish and Crawford Brewery is still in operation and tours of the Brewery run twice weekly. Over 18s can avail of the free drink after the tour.<br><b><a href="http://www.beamish.ie/" target="_blank">More Info</a></b></div>';

arr_markers[1] = new Array();
arr_markers[1]['marker'] = "Blackrock Castle Observatory";
arr_markers[1]['lat'] = 51.899853;
arr_markers[1]['lng'] = -8.402437999999961;
arr_markers[1]['info'] = '<div class="map-point-info"><img src="images/Blackrock-Castle-Observatory.jpg"><h5>Blackrock Castle Observatory</h5>Blackrock Castle Observatory is a fun and exciting place to learn about the Universe. Visitors can look into outer space at Cosmos at the Castle, discover the wonders of the night sky in the Planetarium Shows and play the Comet Chaser to save the Earth.<br><b><a href="http://www.bco.ie/" target="_blank">More Info</a></b></div>';

arr_markers[2] = new Array();
arr_markers[2]['marker'] = "Fota Wildlife Park";
arr_markers[2]['lat'] = 51.889524;
arr_markers[2]['lng'] = -8.311328000000003;
arr_markers[2]['info'] = '<div class="map-point-info"><img src="images/Fota-Wildlife-Park-Cork.jpg"><h5>Fota Wildlife Park</h5>Fota Wildlife Park one of Ireland`s most unique wildlife attractions. Animals are free to roam in open spaces with other animals and you the visitor. The new Tropical House is home to 3 reptile, 9 amphibian, 28 fish and 14 butterfly species all of which are new to Fota Wildlife Park.<br><b><a href="http://www.fotawildlife.ie/" target="_blank">More Info</a></b></div>';


arr_markers[3] = new Array();
arr_markers[3]['marker'] = "Lifetime Lab";
arr_markers[3]['lat'] = 51.895251036521906;
arr_markers[3]['lng'] = -8.509455017196615;
arr_markers[3]['info'] = '<div class="map-point-info"><img src="images/lifetime-lab-cork.jpg"><h5>Lifetime Lab</h5>Lifetime Lab at the Old Cork Waterworks offers interactive exhibitions in the old restored industrial buildings with original plant. The exhibits are aimed at all ages while there is also a themed playground for younger visitors.<br><b><a href="www.lifetimelab.ie/" target="_blank">More Info</a></b></div>';

arr_markers[4] = new Array();
arr_markers[4]['marker'] = "Cork City Gaol";
arr_markers[4]['lat'] = 51.8995105;
arr_markers[4]['lng'] = -8.499049799999966;
arr_markers[4]['info'] = '<div class="map-point-info"><img src="images/The-City-Gaol-Cork.jpg"><h5>Cork City Gaol</h5>Built in 1824, Cork City Gaol is a unique attraction for anyone looking to find out what life was like for those who ended up in its cells in the 19th and early 20th centuries. Women, men and children were imprisoned here for various crimes and some were held here before Transportation to Australia. Political prisoners were kept here during the Irish Civil War.<br><b><a href="http://corkcitygaol.com/" target="_blank">More Info</a></b></div>';

arr_markers[5] = new Array();
arr_markers[5]['marker'] = "The English Market";
arr_markers[5]['lat'] = 51.8976506;
arr_markers[5]['lng'] = -8.474743499999931;
arr_markers[5]['info'] = '<div class="map-point-info"><img src="images/The-English-Market-Cork.jpg"><h5>The English Market</h5>Trading as a market since 1788, The English Market in Cork is a wonderful place to visit when in the City. A foodie`s paradise, the market is a cornucopia of exotic fruits, vegetables and meats with foods to satisfy the most diverse tastes.<br><b><a href="http://www.englishmarket.ie/" target="_blank">More Info</a></b></div>';

arr_markers[6] = new Array();
arr_markers[6]['marker'] = "The Jameson Experience";
arr_markers[6]['lat'] = 51.9136512;
arr_markers[6]['lng'] = -8.168292800000017;
arr_markers[6]['info'] = '<div class="map-point-info"><img src="images/The-Jameson-Experience-Cork.jpg"><h5>The Jameson Experience</h5>Jameson Irish Whiskey is world renowned and the Jameson Heritage Centre in Midleton offers an informative tour of the Old Distillery which includes its Mills, Malting Houses, Corn Stores, Stillhouses and preserved Warehouses.<br><b><a href="http://www.jamesonwhiskey.com/ie/tours/jamesonexperience/" target="_blank">More Info</a></b></div>';


arr_markers[7] = new Array();
arr_markers[7]['marker'] = "Collins Barracks Military Museum";
arr_markers[7]['lat'] = 51.90793763811566;
arr_markers[7]['lng'] = -8.464817404893438;
arr_markers[7]['info'] = '<div class="map-point-info"><img src="images/Collins-Barracks-Museum-Cork.jpg"><h5>Collins Barracks Military Museum</h5>Collins Barracks Military Museum provides an interesting history of the Barracks and the Irish Army`s involvement in overseas Peacekeeping missions along with the Michael Collins era. A wide range of memorabilia, such as uniforms, weapons and historical photographs are on show.<br><b><a href="http://www.militaryheritage.ie/research/milmuseums/cork/cork.htm" target="_blank">More Info</a></b></div>';


arr_markers[8] = new Array();
arr_markers[8]['marker'] = "Cork Butter Museum";
arr_markers[8]['lat'] = 51.90291524530758;
arr_markers[8]['lng'] = -8.47678045529483;
arr_markers[8]['info'] = '<div class="map-point-info"><img src="images/Cork-Butter-Museum.jpg"><h5>Cork Butter Museum</h5>Cork Butter Museum presents the unique history of Cork`s Butter Exchange, which was the largest butter market in the world from the 1700`s onwards. Cargo ships travelled into Cork for butter which was exchanged for spices, tea, brandy, wine and other foreign commodities.<br><b><a href="http://www.corkbutter.museum/" target="_blank">More Info</a></b></div>';


arr_markers[9] = new Array();
arr_markers[9]['marker'] = "Cork Public Museum";
arr_markers[9]['lat'] = 51.8963348;
arr_markers[9]['lng'] = -8.494269499999973;
arr_markers[9]['info'] = '<div class="map-point-info"><img src="images/Cork-Public-Museum.jpg"><h5>Cork Public Museum</h5>Cork Public Museum is housed in a fine Georgian building in the beautiful setting of Fitzgerald Park, Cork City. An extension to the museum recently opened, which has enhanced the museums views of the River Lee and included a new café which provides a tranquil haven for visitors to enjoy a coffee and a snack.<br><b><a href="http://www.corkcity.ie/services/corporateandexternalaffairs/museum/" target="_blank">More Info</a></b></div>';

arr_markers[10] = new Array();
arr_markers[10]['marker'] = "Church of the Holy Trinity";
arr_markers[10]['lat'] = 51.8959266;
arr_markers[10]['lng'] = -8.470784999999978;
arr_markers[10]['info'] = '<div class="map-point-info"><img src="images/Church-of-Holy-Trinity-Cork.jpg"><h5>Church of the Holy Trinity</h5>The Holy Trinity Church was built in 1834 to a design by the Pain brothers. The church was dedicated to Father Theobald Mathew, one of Cork`s most prominent figures of the time and known as the `Apostle of Temperance` following his campaign against alcohol in the mid-1800`s.<br><b><a href="http://www.holytrinity.irishcapuchins.com/" target="_blank">More Info</a></b></div>';


arr_markers[11] = new Array();
arr_markers[11]['marker'] = "Desmond Castle";
arr_markers[11]['lat'] = 51.7072601;
arr_markers[11]['lng'] = -8.524691100000041;
arr_markers[11]['info'] = '<div class="map-point-info"><img src="images/Desmond-Castle-Cork.jpg"><h5>Desmond Castle</h5>Desmond Castle dates from the 15th century and is a fine example of an Irish urban tower house. It has a wide and varied history, having been occupied by the Spanish in 1601 during the Battle of Kinsale. It was used as a place of confinement for French and Spanish prisoners of war in several European wars and as a workhouse during the Great Irish Famine, (1845-1850). Today, Desmond Castle houses the International Museum of Wine.<br><b><a href="http://www.heritageireland.ie/en/south-west/DesmondCastle/" target="_blank">More Info</a></b></div>';

arr_markers[12] = new Array();
arr_markers[12]['marker'] = "St. Anne`s Church Shandon";
arr_markers[12]['lat'] = 51.9032792;
arr_markers[12]['lng'] = -8.475983499999984;
arr_markers[12]['info'] = '<div class="map-point-info"><img src="images/St-Annes-Church-Shandon.jpg"><h5>St. Anne`s Church Shandon</h5>St. Anne`s Church Shandon is famous for the Shandon Bells. These can be accessed by visitors by climbing the many steps to the church steeple, where you have the opportunity to choose a melody and play it on the bells. Other notable features include the golden fish weather vane and Cork county colours of white and red used in the limestone on the four sides of the steeple.<br><b><a href="http://www.shandonbells.ie/" target="_blank">More Info</a></b></div>';


arr_markers[13] = new Array();
arr_markers[13]['marker'] = "St. Fin Barre`s Cathedral";
arr_markers[13]['lat'] = 51.8943543;
arr_markers[13]['lng'] = -8.480043000000023;
arr_markers[13]['info'] = '<div class="map-point-info"><img src="images/St-FinBarres-Cathedral-Cork.jpg"><h5>St. Fin Barre`s Cathedral</h5>Tall spires, gargoyles and rich sculptural detail make St. Fin Barre`s Cathedral one of Cork city`s most unique buildings. The gothic features continue inside, with marble floor mosaics throughout, a colourful chancel ceiling and a large pulpit and bishop`s throne. A cannonball which was fired into the Cathedral during the Siege of Cork (1690) is also on show.<br><b><a href="http://cathedral.cork.anglican.org/" target="_blank">More Info</a></b></div>';


arr_markers[14] = new Array();
arr_markers[14]['marker'] = "Lewis Glucksman Gallery";
arr_markers[14]['lat'] = 51.8947888;
arr_markers[14]['lng'] = -8.490415600000006;
arr_markers[14]['info'] = '<div class="map-point-info"><img src="images/Cork-Lewis-Glucksman-Gallery.jpg"><h5>Lewis Glucksman Gallery</h5>The Lewis Glucksman Gallery promotes the research, creation and exploration of the visual arts and is located in an award-winning building on the University College Cork campus. The gallery includes display spaces, lecture facilities, a riverside restaurant and shop. <br><b><a href="http://www.glucksman.org/" target="_blank">More Info</a></b></div>';


arr_markers[15] = new Array();
arr_markers[15]['marker'] = "Crawford Art Gallery";
arr_markers[15]['lat'] = 51.89988484067992;
arr_markers[15]['lng'] = -8.473270977246102;
arr_markers[15]['info'] = '<div class="map-point-info"><img src="images/Crawford-Art-Gallery-Cork.jpg"><h5>Crawford Art Gallery</h5>Crawford Art Gallery hosts exhibitions of the visual arts in temporary exhibitions or as part of their permanent collection which includes both historic and contemporary pieces. The Crawford also has the Ballymaloe café and gallery bookshop and admission is free.<br><b><a href="http://www.crawfordartgallery.ie/" target="_blank">More Info</a></b></div>';

arr_markers[16] = new Array();
arr_markers[16]['marker'] = "Cork Opera House";
arr_markers[16]['lat'] = 51.90027542451133;
arr_markers[16]['lng'] = -8.472863281475838;
arr_markers[16]['info'] = '<div class="map-point-info"><img src="images/Cork-Opera-House.jpg"><h5>Cork Opera House</h5>Cork Opera House is a 1000-seat theatre with a world class programme of events including concerts, comedy, drama, musicals, contemporary and classical dance, family shows and opera. In addition to the main theatre, there is the 100-seat Half Moon theatre which hosts live music gigs and smaller dramatic shows.<br><b><a href="http://www.corkoperahouse.ie/" target="_blank">More Info</a></b></div>';

arr_markers[17] = new Array();
arr_markers[17]['marker'] = "Cork Vision Centre";
arr_markers[17]['lat'] = 51.899632335953285;
arr_markers[17]['lng'] = -8.478740715066579;
arr_markers[17]['info'] = '<div class="map-point-info"><img src="images/cork-vision-centre.jpg"><h5>Cork Vision Centre</h5>The Cork Vision Centre is a multi-purpose gallery located in the historic centre of Cork City. Incorporating ancient walls, vaulted ceilings and spacious interiors, the Vision Centre one of Cork`s most unique venues. <br><b><a href="www.corkvisioncentre.com" target="_blank">More Info</a></b></div>';

arr_markers[18] = new Array();
arr_markers[18]['marker'] = "Pairc Ui Chaoimh";
arr_markers[18]['lat'] = 51.90044585816697;
arr_markers[18]['lng'] = -8.43495015767212;
arr_markers[18]['info'] = '<div class="map-point-info"><img src="images/pairc-ui-chaoimh-cork.jpg"><h5>Pairc Ui Chaoimh</h5>Páirc Uí Chaoimh is the largest G.A.A. stadium in Cork, hosting major hurling and football matches. It has a capacity of 43,500 (currently being increased to 55,000) with one covered stand, an open-air stand and two terraces behind each goalpost. Concerts are also held here and U2, Prince and Michael Jackson have all played this venue.<br><b><a href="http://www.gaacork.ie/" target="_blank">More Info</a></b></div>';

arr_markers[19] = new Array();
arr_markers[19]['marker'] = "The Marina and the Atlantic Pond";
arr_markers[19]['lat'] = 51.8997894;
arr_markers[19]['lng'] = -8.430973600000016;
arr_markers[19]['info'] = '<div class="map-point-info"><img src="images/Marina-Atlantic-Pond-Cork.jpg"><h5>The Marina and the Atlantic Pond</h5>The Marina is a popular tree-lined, river side walking and cycling route just outside Cork City. Adjacent to The Marina is the Atlantic Pond, which is a haven birds and offers lovely walks around the pond area.<br></div>';

arr_markers[20] = new Array();
arr_markers[20]['marker'] = "Cork Heritage Park";
arr_markers[20]['lat'] = 51.8847779;
arr_markers[20]['lng'] = -8.41263760000004;
arr_markers[20]['info'] = '<div class="map-point-info"><img src="images/cork-heritage-park.jpg"><h5>Cork Heritage Park</h5>Cork Heritage Park lies in six acres of landscaped gardens which originally formed part of the 19th century Bessboro Estate. The Park offers a fascinating introduction to different aspects of Corks rich heritage with 5 sections covering themes of local environment, maritime history, the Pike family and the `Quakers` and the history of local railways.<br></div>';

function initialize() {
    //var latlng = new google.maps.LatLng(51.8968917,-8.486315699999977);
    //var latlng = new google.maps.LatLng(51.8968917,-8.486315699999977);
    //  var latlng = new google.maps.LatLng(51.8968917,-8.486315699999977);
    var latlng = new google.maps.LatLng(51.8968917,-8.486315699999977);
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