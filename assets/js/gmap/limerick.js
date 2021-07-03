var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var marker = null;
var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow();
var arr_markers = new Array();

arr_markers[0] = new Array();
arr_markers[0]['marker'] = "Bunratty Castle";
arr_markers[0]['lat'] =52.69956819999999;
arr_markers[0]['lng'] = -8.811922600000003;
arr_markers[0]['info'] = '<div class="map-point-info"><img src="/images/bunratty-castle.jpg"><h5>Bunratty Castle</h5>Located close to Shannon Airport, Bunratty Castle is one of Ireland`s finest examples of an Irish tower house. It has a beautifully preserved collection of Medieval furniture, artifacts and tapestries throughout and medieval banquets are hosted regularly to enable guests to experience the entertainment which existed in the castle`s heyday. The adjacent Folk Park is a living reconstruction of Irish society as it appeared over a century ago. Highlights include Ardcroney Church, moved stone by stone to the park from Co. Tipperary and the Vertical Mill, a classic example of a rural undershot watermill.</div>';

arr_markers[1] = new Array();
arr_markers[1]['marker'] = "King Johns Castle";
arr_markers[1]['lat'] = 52.669718;
arr_markers[1]['lng'] = -8.625522300000057;
arr_markers[1]['info'] = '<div class="map-point-info"><img src="/images/king-johns-caslte-limerick.jpg"><h5>King John`s Castle</h5>While you`re in the city, visit King John`s Castle.  Built between 1200 and 1210, it was refurbished and extended frequently in subsequent centuries. As befits a fortress, the castle enjoys commanding views over the city and its surroundings.  The visitors` centre uses a creative historical exhibition to tell the story of the castle, which has revealed evidence of pre-Norman settlements and the terrible siege of 1642. Costumed characters illustrate some of the trades and traditions of the 16th century.</div>';

arr_markers[2] = new Array();
arr_markers[2]['marker'] = "Lough Gur Neolithic Settlement";
arr_markers[2]['lat'] = 52.51803868986996;
arr_markers[2]['lng'] = -8.532030940197728;
arr_markers[2]['info'] = '<div class="map-point-info"><img src="/images/lough-gur-settlement-limerick.jpg"><h5>Lough Gur Neolithic Settlement</h5>Prepare to travel back to 3000 B.C. when you arrive at Lough Gur visitor centre. Here, you will discover the story of the area`s pre-Celtic settlers, who farmed in a pastoral valley, and left behind evidence of their dwellings, tools, rituals and burial sites.  An exhibition of artefacts, display panels, and an audio-visual show bring the whole era to life.</div>';


arr_markers[3] = new Array();
arr_markers[3]['marker'] = "The Treaty Stone";
arr_markers[3]['lat'] = 52.6693457;
arr_markers[3]['lng'] = -8.628004400000009;
arr_markers[3]['info'] = '<div class="map-point-info"><img src="/images/the-treaty-stone-limerick.jpg"><h5>The Treaty Stone</h5>You cannot leave Limerick without visiting the Treaty Stone.  This infamous slab commemorates the famous Treaty of Limerick signed in 1691. It is located on Clancys Strand, beside the river Shannon and opposite King Johns Castle in the city centre.</div>';

arr_markers[4] = new Array();
arr_markers[4]['marker'] = "De Valera Museum";
arr_markers[4]['lat'] = 52.424309;
arr_markers[4]['lng'] = -8.662719000000038;
arr_markers[4]['info'] = '<div class="map-point-info"><img src="/images/de-valera-museum-limerick.jpg"><h5>De Valera Museum</h5>A dedicated museum to Eamonn De Valera Museum, the museum incorporates audio-visual presentations, information stands , installations and displays of personal memorabilia to tell the story of Eamon de Valera and of the area where he spent much of his early life.</div>';

arr_markers[5] = new Array();
arr_markers[5]['marker'] = "Foynes Flying Boat Museum";
arr_markers[5]['lat'] = 52.6111;
arr_markers[5]['lng'] = -9.10839999999996;
arr_markers[5]['info'] = '<div class="map-point-info"><img src="/images/foynes-flying-boat-museum.jpg"><h5>Foynes Flying Boat Museum</h5>The port of Foynes was a pivotal location for air traffic between the United States and Europe in the war years of the 1930s and early 1940s. The famous flying boats transported passengers from the very famous to those displaced by war.  The museum at Foynes recreates the era and features a 1940s style cinema, the original terminal building through which many VIP`s passed, war years` radio, and the original weather room. The whiskey-infused beverage known as Irish coffee was first made here in 1943, and an annual festival celebrates the warming drink.</div>';

arr_markers[6] = new Array();
arr_markers[6]['marker'] = "Limerick City Museum";
arr_markers[6]['lat'] = 52.6677434;
arr_markers[6]['lng'] = -8.624962500000038;
arr_markers[6]['info'] = '<div class="map-point-info"><img src="/images/limerick-city-museum.jpg"><h5>Limerick City Museum</h5>Limerick City Museum`s collection provides a comprehensive record of the varied history of Limerick and its people. The old style warehouse setting includes displays of civic antiquities along with Stone Age, Bronze Ages and Medieval artefacts, fine examples of Limerick lace and much more.</div>';


arr_markers[7] = new Array();
arr_markers[7]['marker'] = "Limerick City Gallery of Art";
arr_markers[7]['lat'] = 52.658964;
arr_markers[7]['lng'] = -8.628472999999985;
arr_markers[7]['info'] = '<div class="map-point-info"><img src="/images/limerick-city-art-gallery.jpg"><h5>Limerick City Gallery of Art</h5>Limerick City Gallery of Art showcases a wide range of artworks by local, national and international artists. Visitor will experience the best of contemporary art through the exhibition programme and to enjoy the extensive collection of Irish art on show.</div>';


arr_markers[8] = new Array();
arr_markers[8]['marker'] = "The Frank McCourt Museum";
arr_markers[8]['lat'] = 52.658918;
arr_markers[8]['lng'] = -8.630661000000032;
arr_markers[8]['info'] = '<div class="map-point-info"><img src="/images/frank-mccourt-museum-limerick.jpg"><h5>The Frank McCourt Museum</h5>The Frank McCourt museum is located at Leamy House in the centre of Limerick City. The house is a Tudor style building dating from the 1840`s and was used as a primary school for over a century. The museum provided a vivid reconstruction of life in `the lanes` of Limerick and at the school, much of which was recorded by the Pulitzer prize winning author Frank McCourt, in his famous book `Angela`s Ashes`.</div>';


arr_markers[9] = new Array();
arr_markers[9]['marker'] = "The Hunt Museum";
arr_markers[9]['lat'] = 52.66619247741908;
arr_markers[9]['lng'] = -8.624185057672094;
arr_markers[9]['info'] = '<div class="map-point-info"><img src="/images/hunt-museum-limerick.jpg"><h5>The Hunt Museum</h5>Located on Rutland Street in Limerick city centre, the Hunt Museum is regarded as home to one of the most important private medieval collections in the world.  Your jaw will drop at antiquities ranging from pre-dynastic Egypt to Irish archaeological works to a drawing by Picasso and a rearing horse sculpture attributed to Leonardo de Vinci.</div>';

arr_markers[10] = new Array();
arr_markers[10]['marker'] = "Thomond Park Museum";
arr_markers[10]['lat'] = 52.674068;
arr_markers[10]['lng'] = -8.64299840000001;
arr_markers[10]['info'] = '<div class="map-point-info"><img src="/images/thomond-park-museum.jpg"><h5>Thomond Park Museum</h5>Thomond Park Museum explores the rich history and proud heritage of Munster Rugby at Thomond Park Stadium. The wonderful setting with informative interactive displays allows visitors to chart the rise of the Munster team over the past number of decades and look behind the scenes at this historic sporting venue.</div>';


arr_markers[11] = new Array();
arr_markers[11]['marker'] = "Limerick GAA Pairc na nGael";
arr_markers[11]['lat'] = 52.6700802;
arr_markers[11]['lng'] = -8.654260700000009;
arr_markers[11]['info'] = '<div class="map-point-info"><img src="/images/gaelic-grounds-limerick.jpg"><h5>Limerick GAA Pairc na nGael</h5>The Gaelic Grounds (Pairc na nGael) is the main stadium in Limerick City for GAA matches and events and is home to the Limerick hurling and football teams. The stadium has the largest capacity in Mid West Region of Ireland.</div>';

arr_markers[12] = new Array();
arr_markers[12]['marker'] = "Limerick Greyhound Stadium";
arr_markers[12]['lat'] = 52.6490852;
arr_markers[12]['lng'] = -8.65856389999999;
arr_markers[12]['info'] = '<div class="map-point-info"><img src="/images/limerick-greyhound-stadium.jpg"><h5>Limerick Greyhound Stadium</h5>Limerick Greyhound Stadium is a state of the art venue in Limerick City known or it’s great atmosphere, food, and fun with top class greyhound racing.</div>';


arr_markers[13] = new Array();
arr_markers[13]['marker'] = "Limerick Racecourse";
arr_markers[13]['lat'] = 52.5925927;
arr_markers[13]['lng'] = -8.6995048;
arr_markers[13]['info'] = '<div class="map-point-info"><img src="/images/limerick-racecourse.jpg"><h5>Limerick Racecourse</h5>Limerick Racecourse has a rich history of horseracing but has been significantly modernised over the years providing excellent racing facilities for steeplechase, hurdle and flat races throughout the year.</div>';


arr_markers[14] = new Array();
arr_markers[14]['marker'] = "Thomond Park";
arr_markers[14]['lat'] = 52.674068;
arr_markers[14]['lng'] = -8.64299840000001;
arr_markers[14]['info'] = '<div class="map-point-info"><img src="/images/thomond-park-limerick.jpg"><h5>Thomond Park</h5>Thomond Park Stadium is a world class stadium and home ground of Munster Rugby. The stadium also hosts large events for the limerick region including concerts during summer months.</div>';


arr_markers[15] = new Array();
arr_markers[15]['marker'] = "Dolans Warehouse";
arr_markers[15]['lat'] = 52.6592358;
arr_markers[15]['lng'] = -8.637772700000028;
arr_markers[15]['info'] = '<div class="map-point-info"><img src="/images/dolans-warehouse-limerick.jpg"><h5>Dolans Warehouse</h5>Dolans comprises of a traditional Irish pub, restaurant and two live music venues located on the Dock Road in Limerick.</div>';

arr_markers[16] = new Array();
arr_markers[16]['marker'] = "LIT Millennium Theatre";
arr_markers[16]['lat'] = 52.6743445;
arr_markers[16]['lng'] = -8.649413399999958;
arr_markers[16]['info'] = '<div class="map-point-info"><img src="/images/lit-millenium-theatre-limerick.jpg"><h5>LIT Millennium Theatre</h5>Limerick`s Millennium Theatre is an excellent theatre venue with a wonderful atmosphere for all visitors. It is renowned for producing some of the most cutting edge and diverse theatre programs in the Ireland including the very best small-scale professional theatre, dance and performance companies.</div>';

arr_markers[17] = new Array();
arr_markers[17]['marker'] = "University Concert Hall";
arr_markers[17]['lat'] = 52.66855690000001;
arr_markers[17]['lng'] = -8.574481500000047;
arr_markers[17]['info'] = '<div class="map-point-info"><img src="/images/university-concert-hall-limerick.jpg"><h5>University Concert Hall</h5>University Concert Hall (UCH) which is located in the University of Limerick is a 1,000 seat multi-purpose venue and the first purpose built concert hall in Ireland. It regularly hosts television and radio broadcasts and runs programs for local community music and performance groups.</div>';

arr_markers[18] = new Array();
arr_markers[18]['marker'] = "Broadford Arboretum";
arr_markers[18]['lat'] = 52.3459256;
arr_markers[18]['lng'] = -8.973627299999976;
arr_markers[18]['info'] = '<div class="map-point-info"><img src="/images/broadford-arboretum-limerick.jpg"><h5>Broadford Arboretum</h5>Broadford Arboretum is home to a wide variety of native trees and shrubs of Irish genetic provenance. This pristine woodland is wonderful for a peaceful forest walk to discover the many wild plants and animals.</div>';

arr_markers[19] = new Array();
arr_markers[19]['marker'] = "Curraghchase Forest Park";
arr_markers[19]['lat'] = 52.59705779999999;
arr_markers[19]['lng'] = -8.870179099999973;
arr_markers[19]['info'] = '<div class="map-point-info"><img src="/images/curraghchase-forest-park-limerick.jpg"><h5>Curraghchase Forest Park</h5>This large forest park is located in Kircornan, Co. Limerick, extending over 313 hectares of mixed woodlands, parkland, and lakes making it the ideal habitat for a large range of indigenous animals and plants.</div>';

arr_markers[20] = new Array();
arr_markers[20]['marker'] = "Galtee Castle Wood";
arr_markers[20]['lat'] = 52.3221;
arr_markers[20]['lng'] = -8.175870000000032;
arr_markers[20]['info'] = '<div class="map-point-info"><img src="/images/galtee-castle-wood-limerick.jpg"><h5>Galtee Castle Wood</h5>Galtee Castle Wood with a car park and picnic site and riverside seating areas is a popular Limerick recreation area for woodland and riverside walks.</div>';

arr_markers[21] = new Array();
arr_markers[21]['marker'] = "Georgian House and Garden";
arr_markers[21]['lat'] = 52.6582003;
arr_markers[21]['lng'] = -8.629712400000017;
arr_markers[21]['info'] = '<div class="map-point-info"><img src="/images/georgian-house-garden-limerick.jpg"><h5>Georgian House and Garden</h5>Dating from the 1830`s and built by the Pery Square Tontine Company, the Georgian House in Limerick city is one 6 houses in the same terrace that are considered to be the finest examples of late Georgian architecture in Ireland.</div>';

arr_markers[22] = new Array();
arr_markers[22]['marker'] = "Greenwood";
arr_markers[22]['lat'] = 52.310858543096366;
arr_markers[22]['lng'] = -8.494744520312452;
arr_markers[22]['info'] = '<div class="map-point-info"><img src="/images/greenwood-walking-limerick.jpg"><h5>Greenwood</h5>Greenwood has about 2.5 km of walking trails including a crossing over a footbridge over the ravine. Views of waterfall especially after heavy rain. Greenwood forms part of the O`Sullivan Bere Walk.</div>';

arr_markers[23] = new Array();
arr_markers[23]['marker'] = "Ryans Honey Farm";
arr_markers[23]['lat'] = 52.54911;
arr_markers[23]['lng'] = -8.352820000000065;
arr_markers[23]['info'] = '<div class="map-point-info"><img src="/images/ryans-honey-farm.jpg"><h5>Ryans Honey Farm</h5>Ryans Honey Farm is situated in Pallasgreen Co. Limerick. The bees are farmed in an area extending over 15 mile radius of the farm. The gardens are planted with a wide variety of plants and trees to provide the raw materials for bees to produce honey. </div>';

arr_markers[24] = new Array();
arr_markers[24]['marker'] = "Stonehall Visitor Farm";
arr_markers[24]['lat'] = 52.6178207574286;
arr_markers[24]['lng'] = -8.867330820007282;
arr_markers[24]['info'] = '<div class="map-point-info"><img src="/images/stonehall-pet-farm-limerick.jpg"><h5>Stonehall Visitor Farm</h5>Located in the peaceful and scenic rural setting of Kilcoran, Co. Limerick, this family pet farm allows the visitor to experience first hand the enjoyment and fun of a wide variety of animals in a secure and pleasant setting.</div>';

function initialize() {
    //var latlng = new google.maps.LatLng(52.6680204,-8.630497500000047);
    //var latlng = new google.maps.LatLng(52.6680204,-8.630497500000047);
    //  var latlng = new google.maps.LatLng(52.6680204,-8.630497500000047);
    var latlng = new google.maps.LatLng(52.6680204,-8.630497500000047);
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