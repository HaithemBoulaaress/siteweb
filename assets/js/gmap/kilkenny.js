var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var marker = null;
var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow();
var arr_markers = new Array();

arr_markers[0] = new Array();
arr_markers[0]['marker'] = "Kilkenny Castle";
arr_markers[0]['lat'] =52.6504624;
arr_markers[0]['lng'] = -7.249297899999988;
arr_markers[0]['info'] = '<div class="map-point-info"><img src="images/kilkenny-castle.jpg"><h5>Kilkenny Castle</h5><a href="https://www.southeastireland.com/pkilkenny-castle.html" title="Kilkenny Castle">Kilkenny Castle</a> was originally built by bow in 1172, and rebuilt by William Marshall in 1192. It was the principal seat of the Butler family who were Earls, Marquesses and Dukes of Ormond. After the Butlers established their seat, Kilkenny became one of the most important towns in Ireland. Extensive restoration work was completed in early 1994 and the central block is now open to the public.</div>';

arr_markers[1] = new Array();
arr_markers[1]['marker'] = "Rothe House and Garden";
arr_markers[1]['lat'] = 52.6543296;
arr_markers[1]['lng'] = -7.254715199999964;
arr_markers[1]['info'] = '<div class="map-point-info"><img src="images/rothe-house-garden-kilkenny.jpg"><h5>Rothe House and Garden</h5><a href="https://www.southeastireland.com/prothehouse-kilkenny-ireland.html" title="Rothe House">Rothe House</a>, a fine sixteenth century Tudor town house is situated on Parliament Street. The house consists of three separate town houses with three interconnecting courtyards. It is the home of the Kilkenny Archaeological Society, and houses an extensive museum with many unique artifacts from the prehistoric times to those of modern times along with a wonderful collection of period costumes and paintings. Also within the museum is a Members Library containing books, newspapers, maps of local and of national interest and a genealogical centre.</div>';

arr_markers[2] = new Array();
arr_markers[2]['marker'] = "St. Canice`s Cathedral";
arr_markers[2]['lat'] = 52.6566761;
arr_markers[2]['lng'] = -7.2572254000000385;
arr_markers[2]['info'] = '<div class="map-point-info"><img src="images/st-canices-cathedral-kilkenny.jpg"><h5>St. Canice`s Cathedral</h5>The 13th century <a href="https://www.southeastireland.com/psaintcanicescathedral-kilkenny-ireland.html" title="Cathedral of St Canice">Cathedral of St Canice </a> is the second longest cathedral in Ireland. It is built on an ancient 6th century site of Christian worship. The architectural style is early Gothic and it is built of limestone. Beside the Cathedral stands the 9th century round tower. It may once have been a watchtower and a refuge and it can be climbed to give an unsurpassed vantage point to view the city of Kilkenny and the surrounding countryside.</div>';


arr_markers[3] = new Array();
arr_markers[3]['marker'] = "The Thosel";
arr_markers[3]['lat'] = 52.6518945;
arr_markers[3]['lng'] = -7.253080899999986;
arr_markers[3]['info'] = '<div class="map-point-info"><img src="images/the-thosel-kilkenny.jpg"><h5>The Thosel</h5>The Thosel, meaning marketplace was originally erected by Alderman William Colles and is a central landmark of Kilkenny City dating from 1761. The buildings design has a double length arcade with an impressive Georgian Council Chamber room positioned above the arcade. There is also an impressive clock tower on the steeply pitched roof, and the southern wall contains the Kilkenny coat of arms. It was badly damaged after a fire in 1987, but has since been completely restored, and now houses City Hall. </div>';

arr_markers[4] = new Array();
arr_markers[4]['marker'] = "The Black Abbey";
arr_markers[4]['lat'] = 52.65396519999999;
arr_markers[4]['lng'] = -7.2576440000000275;
arr_markers[4]['info'] = '<div class="map-point-info"><img src="images/black-abbey-kilkenny.jpg"><h5>The Black Abbey</h5>The Black Abbey is a Dominican Church founded in 1225 by William Marshall, Earl of Pembroke. It takes its name from the colour of the habits worn by its priests when it was part of the Dominican Priory. The church has been restored in recent times to its original magnificence with the installaton of a beautiful stained glass window. The Abbey was originally situated outside the walls of the city, but was connected to the rest of Kilkenny by an entrance gate.</div>';

arr_markers[5] = new Array();
arr_markers[5]['marker'] = "Jerpoint Abbey";
arr_markers[5]['lat'] = 52.5104;
arr_markers[5]['lng'] = -7.158080000000041;
arr_markers[5]['info'] = '<div class="map-point-info"><img src="images/jerpoint-abbey-kilkenny.jpg"><h5>Jerpoint Abbey</h5>Jerpoint Abbey is located close to Thomastown in County Kilkenny and was founded in 1158 by the King of Ossory.  The ruins provide a unique glimpse into the age when Cistercian monks once inhabited the site in medieval times. Visitors can explore the Romanesque church and view tombs dating from the 13th to 16th centuries, chief among them the final resting place of the abbey`s first abbot, Felix O`Dulany. There is a visitor centre onsite with an informative exhibition and where guided tours can be arranged.</div>';

arr_markers[6] = new Array();
arr_markers[6]['marker'] = "Kells Priory";
arr_markers[6]['lat'] = 52.5383832;
arr_markers[6]['lng'] = -7.267016699999999;
arr_markers[6]['info'] = '<div class="map-point-info"><img src="images/kells-priory-kilkenny.jpg"><h5>Kells Priory</h5>Kells Priory is located overlooking the King`s River near the village of Kells, 15km from Kilkenny City. Founded by Geoffrey FitzRobert in 1193, one of its most significant features of the site is a collection of medieval tower houses which gives the priory its local name of `Seven Castles` and the appearance a fortress rather than that of a place of worship. The existing ruins date from the 14th and 15th centuries and consists mainly of a church, a chapel, prior`s residence and a some domestic buildings. </div>';


arr_markers[7] = new Array();
arr_markers[7]['marker'] = "St. Mary`s Church";
arr_markers[7]['lat'] = 52.651331333074204;
arr_markers[7]['lng'] = -7.2509018609908935;
arr_markers[7]['info'] = '<div class="map-point-info"><img src="images/st-marys-church-kilkenny-city.jpg"><h5>St. Mary`s Church</h5>St. Mary`s church was built over 800 years ago in the late twelfth century, as a chapel for Kilkenny Castle, and circa 1205 a large church was established. It is centrally located in a prominent position within Kilkenny`s walled town and it a marked feature of the Kilkenny skyline when looking out over the town from Kilkenny Castle. </div>';


arr_markers[8] = new Array();
arr_markers[8]['marker'] = "Dunmore Cave";
arr_markers[8]['lat'] = 52.73326729999999;
arr_markers[8]['lng'] = -7.263921100000061;
arr_markers[8]['info'] = '<div class="map-point-info"><img src="images/dunmore-cave-kilkenny.jpg"><h5>Dunmore Cave</h5>Dunmore Cave has 3 main chambers formed over 300 million years ago and consists of almost 400 meters of passages up to 150 foot below the surface at its deepest point. Known for having some of the best examples of calcite formations of any Irish cav system, Dunmore Cave has been explored by man for many centuries and was first mentioned in the 9th century Irish Triads. The cave is situated 11 kilometres north of Kilkenny City and has stairs, walkways and an extensive lighting system but the cave is inaccessible for wheelchair users.</div>';


arr_markers[9] = new Array();
arr_markers[9]['marker'] = "Kilfane Glen and Waterfall";
arr_markers[9]['lat'] = 52.5525575;
arr_markers[9]['lng'] = -7.088587100000041;
arr_markers[9]['info'] = '<div class="map-point-info"><img src="images/kilfane-glen-waterfall-kilkenny.jpg"><h5>Kilfane Glen and Waterfall</h5>Kilfane Glen is a beautiful 15 acre garden which is open to visitors to explore during summer months (July and August). The rugged garden consists of a 30-foot waterfall, a rustic grotto and thatched summerhouse and wild fox-gloves, ferns and other plants used during the time of it`s original owners, the Power Family in the 1790`s. </div>';

arr_markers[10] = new Array();
arr_markers[10]['marker'] = "Nore Valley Park Open Farm";
arr_markers[10]['lat'] = 52.563236;
arr_markers[10]['lng'] = -7.198255000000017;
arr_markers[10]['info'] = '<div class="map-point-info"><img src="images/nore_valley_park_kilkenny.jpg"><h5>Nore Valley Park Open Farm</h5>Nore Valley Park is an award winning Campsite and Pet Farm in Bennettsbridge Co. Kilkenny. Children can get close and touch the animals or take a tour of the farm by tractor trailer.  There`s a children`s playground, sand pit, crazy golf and pedal go-karts. Indoors you`ll find further farm related activities, an indoor 3D maze and cafe and souvenir shop.</div>';


arr_markers[11] = new Array();
arr_markers[11]['marker'] = "Reptile Village Zoo";
arr_markers[11]['lat'] = 52.6310699;
arr_markers[11]['lng'] = -7.058967700000039;
arr_markers[11]['info'] = '<div class="map-point-info"><img src="images/reptile-village-zoo-kilkenny.jpg"><h5>Reptile Village Zoo</h5>Reptile Village Zoo in Gowran Co. Kilkenny is Ireland`s only reptile zoo with displays of over 100 animals from 50 different species. Alligators to Tortoises, Toads to Pythons, there is something for everyone including the option to touch  snakes, lizards, tarantulas if you are brave enough. Open 10am - 6pm seven days a week.  </div>';

arr_markers[12] = new Array();
arr_markers[12]['marker'] = "Kiltorcan Raceway Karting Circuit";
arr_markers[12]['lat'] = 52.462055236774866;
arr_markers[12]['lng'] = -7.181143471813925;
arr_markers[12]['info'] = '<div class="map-point-info"><img src="images/kiltorcan-karting-kilkenny.jpg"><h5>Kiltorcan Raceway Karting Circuit</h5>Kiltorcan Raceway is a smooth, all weather, floodlit karting racetrack 1 kilometer long and popular for anyone looking for a great day out in County Kilkenny. Kiltorcan Raceway offers a challenge for all ages and experience and safety is guaranteed. Ideal for parties, groups, hens/stags and corporate groups. Suitable for ages 10 and above. </div>';


arr_markers[13] = new Array();
arr_markers[13]['marker'] = "The Watershed Swimming Complex";
arr_markers[13]['lat'] = 52.63832311244489;
arr_markers[13]['lng'] = -7.236409402069057;
arr_markers[13]['info'] = '<div class="map-point-info"><img src="images/watershed-swimming-complex-kilkenny.jpg"><h5>The Watershed Swimming Complex</h5>The Watershed is a popular sports and leisure centre has a 25 metre, 6 lane swimming pool, 5 metre learners` pool, kids fun pool with slide, water fountain and Aqua umbrella, Heath Suite including sauna, steam room and Jacuzzi.</div>';


arr_markers[14] = new Array();
arr_markers[14]['marker'] = "Castlecomer Discovery Park";
arr_markers[14]['lat'] = 52.8065903;
arr_markers[14]['lng'] = -7.203715500000044;
arr_markers[14]['info'] = '<div class="map-point-info"><img src="images/castlecomer-discovery-park-kilkenny.jpg"><h5>Castlecomer Discovery Park</h5>Castlecomer Discovery Park offers a great day out for all the family. Situated north of the county, the wide variety of activities includes includes rainbow trout fishing and boating activities on beautiful lakes, interactive multimedia Footprints in Coal Experience, forest walks and nature trails, a childrens playground, and seasonal events and activities organised throughout the year.</div>';


arr_markers[15] = new Array();
arr_markers[15]['marker'] = "Countryside Activity Centre";
arr_markers[15]['lat'] = 52.67979909919834;
arr_markers[15]['lng'] = -7.2369247407837065;
arr_markers[15]['info'] = '<div class="map-point-info"><img src="images/countryside-activity-centre-kilkenny.jpg"><h5>Countryside Activity Centre</h5>Countryside Leisure Activity Centre provide a range of activities including clay pigeon shooting, indoor rifle target shooting, bocarts and archery. The centre is unique in offering an extensive bocarts (motorised go carts) circuit. Helmet is provided but suitable outdoor clothing and boots should be worn. THey also provide indoor rifle target shooting on their 10 meter range. </div>';

arr_markers[16] = new Array();
arr_markers[16]['marker'] = "Butler Gallery";
arr_markers[16]['lat'] = 52.6505851720675;
arr_markers[16]['lng'] = -7.248939959555059;
arr_markers[16]['info'] = '<div class="map-point-info"><img src="images/butler-gallery-kilkenny.jpg"><h5>Butler Gallery</h5>The Butler Gallery situated in the former castle kitchen of Kilkenny Castle. Gallery admission is free and is open 7 days a week, all year round. The gallery offers an eclectic programme of contemporary exhibitions, a fine collection in its permanent exhibition and regular initiatives that include speaking events, courses and workshops.</div>';

arr_markers[17] = new Array();
arr_markers[17]['marker'] = "Nore View Folk and Heritage Museum";
arr_markers[17]['lat'] = 52.58979;
arr_markers[17]['lng'] = -7.194510000000037;
arr_markers[17]['info'] = '<div class="map-point-info"><img src="images/noreview-folk-heritage-museum-kilkenny.jpg"><h5>Nore View Folk and Heritage Museum</h5>Situated on the outskirts of the scenic village of Bennettsbridge and overlooking the River Nore, the Nore View Folk and Heritage Museum displays a great collection of Irish Historical objects including a history of the Penal Times, the Great Famine, 1916 Rising and the War of Independence. With over 10,000 items ranging from old musical instruments, old church items, antique bicycles and old prams the lives and object of yesteryear in Ireland are preserved for all to explore.</div>';

arr_markers[18] = new Array();
arr_markers[18]['marker'] = "National Craft Gallery";
arr_markers[18]['lat'] = 52.649392810713;
arr_markers[18]['lng'] = -7.2500058846862885;
arr_markers[18]['info'] = '<div class="map-point-info"><img src="images/national-craft-gallery-kilkenny.jpg"><h5>National Craft Gallery</h5>Housed in the former stable yard of Kilkenny Castle, the National Craft Gallery is Ireland`s leading centre for contemporary craft and design. The centre runs regular exhibitions, events and education programmes promoting design and crafts culture in Ireland. </div>';

arr_markers[19] = new Array();
arr_markers[19]['marker'] = "Kilkenny Castle Park";
arr_markers[19]['lat'] = 52.649835426311874;
arr_markers[19]['lng'] = -7.246776505032358;
arr_markers[19]['info'] = '<div class="map-point-info"><img src="images/castle-park-kilkenny.jpg"><h5>Kilkenny Castle Park</h5>Although Kilkenny Castle Park is located in the centre of Kilkenny city, it offers a wonderfully relaxing escape from the bustling and vibrant activity on the streets of the city. The park extends over 50 acres and includes a mixture of mature trees and shrubs with an ornamental lake and a Rose Garden which has been arranged to form a Celtic High Cross with the castle as its backdrop. </div>';

arr_markers[20] = new Array();
arr_markers[20]['marker'] = "Ballykeeffe Woods and Nature Reserve";
arr_markers[20]['lat'] = 52.6102205;
arr_markers[20]['lng'] = -7.391680500000007;
arr_markers[20]['info'] = '<div class="map-point-info"><img src="images/ballykeeffe-woods-nature-reserve-kilkenny.jpg"><h5>Ballykeeffe Woods and Nature Reserve</h5>Ballykeeffe woods and nature reserve consists of young ash and oak trees with an extensive bramble and bluebells over and area of 54 hectares. A short drive of 12 km south-west of Kilkenny it is good leisure and picnic spot for families. The reserve is situated on a prominent limestone hill with an disused limestone quarry, the remains of which has resulted in Kilkenny`s very own outdoor auditorium beneath Ballykeefe woods that very popular with rock climbers. Within the woods themselves there are many walks and trails to explore, a historic Mass rock and lots of plants and wildlife to enjoy.</div>';

arr_markers[21] = new Array();
arr_markers[21]['marker'] = "Woodstock Gardens and Arboretum";
arr_markers[21]['lat'] = 52.475124558519624;
arr_markers[21]['lng'] = -7.0603455679535045;
arr_markers[21]['info'] = '<div class="map-point-info"><img src="images/woodstock-gardens-arboretum-kilkenny.jpg"><h5>Woodstock Gardens and Arboretum</h5>The restored Victorian Gardens and Arboretum at Woodstock overlooking the River Nore Valley, offer the visitor a wide variety of attractions and are a most relaxing and beautiful environment in which to spend a day. Woodstock, in Inistioge, Co. Kilkenny is steeped in history and a magical setting to enjoy a walk along the woodland trails or have an adventure with youngsters amongst specimen trees in the woods. The fine flora can be admired along the borders in the walled garden and tea is available at the Tea Rooms in the wonderfully restored arboretum. Open in Winter from 10.00-16.30 and in Summer from 09.00-19.00.</div>';

function initialize() {
    //var latlng = new google.maps.LatLng(52.6541454,-7.244787900000006);
    //var latlng = new google.maps.LatLng(52.6541454,-7.244787900000006);
    //  var latlng = new google.maps.LatLng(52.6541454,-7.244787900000006);
    var latlng = new google.maps.LatLng(52.6541454,-7.244787900000006);
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