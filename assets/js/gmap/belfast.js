var map;

var directionsDisplay;

var directionsService = new google.maps.DirectionsService();

var marker = null;

var geocoder = new google.maps.Geocoder();

var infowindow = new google.maps.InfoWindow();

var arr_markers = new Array();

arr_markers[0] = new Array();
arr_markers[0]['marker'] = "Titanic Experience";
arr_markers[0]['lat'] =54.60799898663466;
arr_markers[0]['lng'] = -5.909949788207996;
arr_markers[0]['info'] = '<div class="map-point-info"><img src="images/titanic-experience-belfast.jpg"><h5>Titanic Experience</h5>Discover the story of the Titanic in Belfast at the Titanic Experience Museum which opened in 2012 close to the site of the Harland and Wolff Shipyard on the 100 anniversary of the ship ill-fated maiden voyage. It has now become Belfast`s most popular visitor attraction.</div>';

arr_markers[1] = new Array();
arr_markers[1]['marker'] = "Belfast Zoo";
arr_markers[1]['lat'] = 54.6578239;
arr_markers[1]['lng'] = -5.9436306999999715;
arr_markers[1]['info'] = '<div class="map-point-info"><img src="images/belfast-zoo.jpg"><h5>Belfast Zoo</h5>Attracting more than 300,000 visitors annually, Belfast Zoo is one of the top tourist spots in Northern Ireland. Belfast Zoo is on a 55-acre site, located in North Belfast at the top of the Antrim Road, where more than 1,200 animals and over 140 different species have set up home.</div>';

arr_markers[2] = new Array();
arr_markers[2]['marker'] = "Ulster Folk and Transport Museum";
arr_markers[2]['lat'] = 54.6491625;
arr_markers[2]['lng'] = -5.798932000000036;
arr_markers[2]['info'] = '<div class="map-point-info"><img src="images/ulster-folk-transport-museum.jpg"><h5>Ulster Folk &amp; Transport Museum</h5>This museum is actually located in Holywood County Down but is just about a 10 minute drive from Belfast city centre so it`s well worth a visit. It features an outdoor folk museum and an indoor transport museum. The outdoor folk museum is open air and located on 170 acres of beautiful County Down countryside. This outdoor museum shows us what life was like in the North of Ireland around the early 20th century. The Transport Museum has one of the most impressive displays of transport and machinery in Europe. On display are ancient forms of transport once used in Ireland like the horse and trap to motor cars which were built in Ireland.</div>';


arr_markers[3] = new Array();
arr_markers[3]['marker'] = "W5 Interactive Discovery Centre";
arr_markers[3]['lat'] = 54.60413547887775;
arr_markers[3]['lng'] = -5.913919549707089;
arr_markers[3]['info'] = '<div class="map-point-info"><img src="images/w5-belfast.jpg"><h5>W5 Interactive Discovery Centre</h5>W5 is a world-class award winning interactive discovery centre. W5 stands for Who, What, Where, When and Why. You`ll get a fun, educational and interactive answers to these questions from over 160 interactive exhibitions. The discovery centre also has some science demonstrations held throughout the day. Visitors of all ages will enjoy a visit to W5 but give yourself no less than 2 hours here as there is just so much to see and do. </div>';

arr_markers[4] = new Array();
arr_markers[4]['marker'] = "Ormeau Baths Gallery";
arr_markers[4]['lat'] = 54.5928774;
arr_markers[4]['lng'] = -5.9287683000000015;
arr_markers[4]['info'] = '<div class="map-point-info"><img src="images/ormeau-baths-gallery-belfast.jpg"><h5>Ormeau Baths Gallery</h5>The Ormeau Baths Gallery is one of the top contemporary art galleries on the island of Ireland. It has free entry and is open from Tuesday to Saturday so it`s well worth a visit if you`re an art lover. The art gallery is located on the site of a Victorian Bath House, hence the name and has four gallery spaces over two floors. The Ormeau Baths Gallery is located on Ormeau Road close to the city centre, just a 10 minute walk from Victoria Station and Central Station.</div>';

arr_markers[5] = new Array();
arr_markers[5]['marker'] = "Linen Hall Library";
arr_markers[5]['lat'] = 54.5973797;
arr_markers[5]['lng'] = -5.931558600000017;
arr_markers[5]['info'] = '<div class="map-point-info"><img src="images/linen-hall-library-belfast.jpg"><h5>Linen Hall Library</h5>The Linen Hall Library dating from 1788 has a staggering 250,000 books and is located on Donegall Square in the heartbeat of Belfast. It`s ornate facade can be seen just opposite City Hall. The library is, in fact, located in a linen hall and so the library took the name `Linen Hall Library`. There is no admission cost to the library.</div>';

arr_markers[6] = new Array();
arr_markers[6]['marker'] = "Stormont Parliament Buildings";
arr_markers[6]['lat'] = 54.59994303259472;
arr_markers[6]['lng'] = -5.837079896972682;
arr_markers[6]['info'] = '<div class="map-point-info"><img src="images/stormont-parliament-belfast.jpg"><h5>Stormont Parliament Buildings</h5>The Stormont Parliament Building is the headquarters of the Northern Ireland Assembly and is inextricably linked with the peace process in Northern Ireland and in general the political history of Northern Ireland. It can be found in the Stormont area of east Belfast and although you`ll need prior arrangements to see the inside, it`s well worth take a stroll around the grounds and admire its Greek classical style exterior and surroundings.</div>';


arr_markers[7] = new Array();
arr_markers[7]['marker'] = "Queens University Belfast";
arr_markers[7]['lat'] = 54.58392629999999;
arr_markers[7]['lng'] = -5.932586899999933;
arr_markers[7]['info'] = '<div class="map-point-info"><img src="images/queens-university-belfast.jpg"><h5>Queens University Belfast</h5>Queen`s University is regarded as the seat of learning for this part of the world for a century and a half and has attracted (and still does) many famous students in the past. Founded in 1845 by Queen Victoria, and designed by Sir Charles Lanyon, the University is located within walking distance of the city centre.</div>';


arr_markers[8] = new Array();
arr_markers[8]['marker'] = "Grand Opera House Belfast";
arr_markers[8]['lat'] = 54.59542857033424;
arr_markers[8]['lng'] = -5.934960470886267;
arr_markers[8]['info'] = '<div class="map-point-info"><img src="images/grand-opera-house-belfast.jpg"><h5>Grand Opera House Belfast</h5>A listed building, this has undergone major renovations and extension to the concert venues since the early 1980`s. Originally designed by architect Frank Matcham, it was opened in December 1895. Why not catch a show here and enjoy the venue even more?</div>';


arr_markers[9] = new Array();
arr_markers[9]['marker'] = "Belfast City Hall";
arr_markers[9]['lat'] = 54.5966701;
arr_markers[9]['lng'] = -5.930203200000051;
arr_markers[9]['info'] = '<div class="map-point-info"><img src="images/belfast-city-hall.jpg"><h5>Belfast City Hall </h5>The City Hall is designed in a Renaissance style and was completed in 1906 after nearly 7 years in the making. Rectangular in shape and constructed with Portland stone, it`s located in the city centre. City Hall recently underwent an extensive restoration programme and re-opened in 2009.</div>';

arr_markers[10] = new Array();
arr_markers[10]['marker'] = "St. Anne`s Cathedral";
arr_markers[10]['lat'] = 54.6028567;
arr_markers[10]['lng'] = -5.9285308999999415;
arr_markers[10]['info'] = '<div class="map-point-info"><img src="images/st-annes-cathedral-belfast.jpg"><h5>St. Anne`s Cathedral</h5>Why not take a trip to the Cathedral Quarter of the city and view the impressive Church of Ireland St. Anne`s Cathedral. The whole quarter is a charming area with old cobbled streets, and stunning architecture. The area is pedestrianised so you can walk around in peaceful surroundings.</div>';


arr_markers[11] = new Array();
arr_markers[11]['marker'] = "Albert Memorial Clock";
arr_markers[11]['lat'] = 54.6008;
arr_markers[11]['lng'] = -5.9243999999999915;
arr_markers[11]['info'] = '<div class="map-point-info"><img src="images/albert-memorial-clock-belfast.jpg"><h5>Albert Memorial Clock</h5>The most alluring timepiece in the city, it was constructed over a 5 year period in Victorian style as a memorial to Queen Victoria`s husband Prince Albert. It`s known as Belfast`s own `leaning tower` as it veers slightly to the left.</div>';

arr_markers[12] = new Array();
arr_markers[12]['marker'] = "Crumlin Road Courthouse and Gaol";
arr_markers[12]['lat'] = 54.6085089;
arr_markers[12]['lng'] = -5.942541500000061;
arr_markers[12]['info'] = '<div class="map-point-info"><img src="images/crumlin-courthouse-gaol-belfast.jpg"><h5>Crumlin Road Courthouse &amp; Gaol</h5>Why not take a trip to the foreboding Victorian buildings where many prisoners have been housed since it`s opening in 1850. A monument to the scales of justice is atop the building. It closed its doors as a prison in 1996 and since then has been open for tours.</div>';


arr_markers[13] = new Array();
arr_markers[13]['marker'] = "Belfast Custom House";
arr_markers[13]['lat'] = 54.6015412;
arr_markers[13]['lng'] = -5.9236684999999625;
arr_markers[13]['info'] = '<div class="map-point-info"><img src="images/custom-house-belfast.jpg"><h5>Belfast Custom House</h5>Designed by the esteemed Sir Charles Lanyon, it was built 150 years ago in a Renaissance style. Take a stroll round the pedestrianised square and appreciate the full beauty of the building.</div>';


arr_markers[14] = new Array();
arr_markers[14]['marker'] = "Victoria Square Shopping Centre";
arr_markers[14]['lat'] = 54.5982156;
arr_markers[14]['lng'] = -5.930044599999974;
arr_markers[14]['info'] = '<div class="map-point-info"><img src="images/victoria-square-shopping-belfast.jpg"><h5>Victoria Square Shopping Centre</h5>Costing £400m to build, Victoria Square is the largest and one of the most expensive property developments ever undertaken in Northern Ireland.  The dazzling glass dome is also a viewing gallery where you can look across the Belfast rooftops, scenery and over at the Belfast Wheel. The bright new shopping centre has over 39 retailers.</div>';


arr_markers[15] = new Array();
arr_markers[15]['marker'] = "St. Georges Market";
arr_markers[15]['lat'] = 54.5958882;
arr_markers[15]['lng'] = -5.922021800000039;
arr_markers[15]['info'] = '<div class="map-point-info"><img src="images/st-georges-market-belfast.jpg"><h5>St. Georges Market</h5>St. Georges Market is one of Belfast`s oldest attractions and one of the best markets in the UK and Ireland.  The Friday Variety Market, with 23 fish stalls and on the St George`s Market site, dates back to 1604. The Saturday Market has tempting speciality foods from around the world as well as handmade crafts, flowers, plants and local artwork. The Sunday Market has a special emphasis on local arts and crafts. Live music from top local bands and solo artists also entertains shoppers on weekends.</div>';

arr_markers[16] = new Array();
arr_markers[16]['marker'] = "Belfast Botanic Gardens";
arr_markers[16]['lat'] = 54.5813209721173;
arr_markers[16]['lng'] = -5.9307168634766185;
arr_markers[16]['info'] = '<div class="map-point-info"><img src="images/belfast-botanic-gardens.jpg"><h5>Belfast Botanic Gardens</h5>One of the most popular parks in the city is the Belfast Botanic Gardens, which are located in the University district. It opened in 1828 and now occupies 28 acres of beautiful gardens, which are always busy with students, office workers, local people and visitors alike. The most prominent feature in the park is the cast iron glass Palm House which was completed in 1840. The Botanic Gardens can be accessed from Botanic Avenue, University District and Stranmills Embankment. The Metro bus number 7 or 8 will take you close to the park.</div>';

arr_markers[17] = new Array();
arr_markers[17]['marker'] = "Sir Thomas and Lady Dixon Park";
arr_markers[17]['lat'] = 54.541;
arr_markers[17]['lng'] = -5.980000000000018;
arr_markers[17]['info'] = '<div class="map-point-info"><img src="images/thomas-dixon-park-belfast.jpg"><h5>Sir Thomas &amp; Lady Dixon Park</h5>This park is located just off Upper Malone Road in the south of the city. It features 130 acres of breath-taking meadows, rose gardens, woodlands, a Japanese Gardens and some wetland habitats for wildlife. The park was left to the people of Belfast in 1959 by Lady Dixon who dedicated it to her dead husband Thomas. Each year this park is the venue for the City of Belfast International Rose Festival which draws thousand of visitors from far and wide.</div>';

arr_markers[18] = new Array();
arr_markers[18]['marker'] = "Ormeau Park";
arr_markers[18]['lat'] = 54.5849646;
arr_markers[18]['lng'] = -5.9148486000000275;
arr_markers[18]['info'] = '<div class="map-point-info"><img src="images/ormeau-park-belfast.jpg"><h5>Ormeau Park</h5>Ormeau Park is Belfast`s oldest city park having opened its gates to the public back in 1871. You`ll find the entrance to this park just off the Ormeau Road in the city centre. This city park is one of the largest in Belfast and features a basketball court, bowling greens, playing fields, an eco-trail, orienteering course, playgrounds, tennis courts and lots of walks.</div>';

arr_markers[19] = new Array();
arr_markers[19]['marker'] = "Woodvale Park";
arr_markers[19]['lat'] = 54.6075235;
arr_markers[19]['lng'] = -5.964757899999995;
arr_markers[19]['info'] = '<div class="map-point-info"><img src="images/woodvale-park-belfast.jpg"><h5>Woodvale Park</h5>Woodvale Park opened in 1888 and is a typical Victorian Park with a bandstand. It also has facilities like all weather soccer pitches, a bowling green, children`s playground and a wonderful scenic walking route.</div>';

arr_markers[20] = new Array();
arr_markers[20]['marker'] = "Odyssey Arena";
arr_markers[20]['lat'] = 54.60383718747331;
arr_markers[20]['lng'] = -5.9164944703613855;
arr_markers[20]['info'] = '<div class="map-point-info"><img src="images/odyssey-arena-belfast.jpg"><h5>Odyssey Arena</h5>Since opening in 2000 the arena has hosted some of the most famous bands and artists from around the world, and it is also home to the Belfast Giants.  The Odyssey Arena is easily accessible to all people and is superbly located in the heart of the city, close to three motorways, five minutes from the nearest airport and 15 minutes walk from Central station.</div>';

arr_markers[21] = new Array();
arr_markers[21]['marker'] = "Belfast Waterfront Hall";
arr_markers[21]['lat'] = 54.597285000000014;
arr_markers[21]['lng'] = -5.919734486694324;
arr_markers[21]['info'] = '<div class="map-point-info"><img src="images/waterfront-hall-belfast.jpg"><h5>Belfast Waterfront Hall</h5>Belfast Waterfront is a multi-purpose conference, arts and music entertainment venue and stages some of the most high profile conferences and events in Northern Ireland each year. First opened in 1997 it is one of the world`s leading conference centres and is a top destination for national and international performers.</div>';

function initialize() {
    //var latlng = new google.maps.LatLng(54.59728500000001,-5.930119999999988);
    //var latlng = new google.maps.LatLng(54.59728500000001,-5.930119999999988);
    //  var latlng = new google.maps.LatLng(54.59728500000001,-5.930119999999988);
    var latlng = new google.maps.LatLng(54.59728500000001,-5.930119999999988);
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