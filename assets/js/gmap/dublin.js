var map;

var directionsDisplay;

var directionsService = new google.maps.DirectionsService();

var marker = null;

var geocoder = new google.maps.Geocoder();

var infowindow = new google.maps.InfoWindow();

var arr_markers = new Array();


arr_markers[0] = new Array();

arr_markers[0]['marker'] = "Guinness Storehouse";

arr_markers[0]['lat'] = 53.341874;

arr_markers[0]['lng'] = -6.286709299999984;

arr_markers[0]['info'] = '<div class="map-point-info"><img src="images/guinness-storehouse.jpg"><h5>Guinness Storehouse</h5>Located in the heart of the St James’s Gate Brewery, which has been home to the black stuff since 1759, this massive seven-storey building, a former Guinness® fermentation plant, has been remodeled into the shape of a giant pint of Guinness®.<br><b><a href="http://www.guinness-storehouse.com" target="_blank">Website</a></b></div>';


arr_markers[1] = new Array();

arr_markers[1]['marker'] = "Dublin Zoo";

arr_markers[1]['lat'] = 53.3561935;

arr_markers[1]['lng'] = -6.305289799999969;

arr_markers[1]['info'] = '<div class="map-point-info"><img src="images/dublin-zoo.jpg"><h5>Dublin Zoo</h5>Founded in 1830, Dublin Zoo is one of the oldest Zoos in Europe. Stretching nearly 28 hectares across the Phoenix Park, it is home to over 400 animals representing over 100 species.<br><b><a href="http://www.dublinzoo.ie" target="_blank">Website</a></b></div>';


arr_markers[2] = new Array();

arr_markers[2]['marker'] = "National Aquatic Centre";

arr_markers[2]['lat'] = 53.39691053531965;

arr_markers[2]['lng'] = -6.370410331738299;

arr_markers[2]['info'] = '<div class="map-point-info"><img src="images/national-aquatic-centre.jpg"><h5>National Aquatic Centre</h5>The National Aquatic Centre is one of the world`s largest indoor water centres with 50m pool, 25m diving pool/warm up pool and extensive leisure pool with waves and rides.<br><b><a href="http://www.nationalaquaticcentre.ie" target="_blank">Website</a></b></div>';


arr_markers[3] = new Array();

arr_markers[3]['marker'] = "Book of Kells at Trinity College";

arr_markers[3]['lat'] = 53.3437935;

arr_markers[3]['lng'] = -6.254571599999963;

arr_markers[3]['info'] = '<div class="map-point-info"><img src="images/book-of-kells.jpg"><h5>Book of Kells</h5>The Book of Kells is one of the worlds finest examples of illuminated manuscript dating from 650-800 A.D. It has been on exhibition in Trinity College Dublin since the 17th century.<br><b><a href="http://www.tcd.ie/Library/bookofkells/book-of-kells/" target="_blank">Website</a></b></div>';


arr_markers[4] = new Array();

arr_markers[4]['marker'] = "Dublinia";

arr_markers[4]['lat'] = 53.34308249999999;

arr_markers[4]['lng'] = -6.271975500000053;

arr_markers[4]['info'] = '<div class="map-point-info"><img src="images/dublinia.jpg"><h5>Dublinia</h5>Dublinia consists of 3 exciting exhibitions, Viking Dublin, Medieval Dublin and History Hunters, located at the historic crossroads of old Dublin on Winetavern Street.<br><b><a href="http://www.dublinia.ie" target="_blank">Website</a></b></div>';


arr_markers[5] = new Array();

arr_markers[5]['marker'] = "St. Patrick's Cathedral";

arr_markers[5]['lat'] = 53.3395154;

arr_markers[5]['lng'] = -6.271476699999994;

arr_markers[5]['info'] = '<div class="map-point-info"><img src="images/st-patricks-cathedral.jpg"><h5>St. Patrick`s Cathedral</h5>St. Patrick`s is Irelands `National Cathedral` and largest Church and famous for supposedly being the where St. Patrick baptized the first local converts. Also Jonathan Swift of `Gulliver` fame was the dean and is buried in the cathedral.<br><b><a href="http://www.stpatrickscathedral.ie" target="_blank">Website</a></b></div>';


arr_markers[6] = new Array();

arr_markers[6]['marker'] = "Farmleigh House";

arr_markers[6]['lat'] = 53.36544398860521;

arr_markers[6]['lng'] = -6.359571819573944;

arr_markers[6]['info'] = '<div class="map-point-info"><img src="images/farmleigh-house.jpg"><h5>Farmleigh House</h5>Farmleigh is the official Irish State guest house and was formerly one of the Dublin residences of the Guinness family. It has extensive pleasure grounds which include a fine collection of Victorian and Edwardian ornamental features with walled and sunken gardens, scenic lakeside walks and a range of plants.<br><b><a href="http://www.farmleigh.ie" target="_blank">Website</a></b></div>';


arr_markers[7] = new Array();

arr_markers[7]['marker'] = "Kilmainham Gaol";

arr_markers[7]['lat'] = 53.34187009999999;

arr_markers[7]['lng'] = -6.309804799999938;

arr_markers[7]['info'] = '<div class="map-point-info"><img src="images/kilmainham-gaol.jpg"><h5>Kilmainham Gaol</h5>Dublin`s Kilmainham Gaol held some of the most famous political and military leaders in Irish history such as Robert Emmet, Charles Stewart Parnell, the 1916 Rising leaders and Eamon de Valera. Guided tours are provided along with a detailed exhibition.<br><b><a href="http://www.heritageireland.ie/en/dublin/kilmainhamgaol/" target="_blank">Website</a></b></div>';


arr_markers[8] = new Array();

arr_markers[8]['marker'] = "Old Jameson Distillery";

arr_markers[8]['lat'] = 53.3481943;

arr_markers[8]['lng'] = -6.2768125000000055;

arr_markers[8]['info'] = '<div class="map-point-info"><img src="images/old-jameson-distillery.jpg"><h5>Old Jameson Distillery</h5>The Old Jameson Distillery is located on the original site of John Jameson`s distillery in Bow Street in Dublin. Founded in 1780, it was Ireland`s most famous distillery for nearly 200 years. Guided tours provided at regular intervals daily.<br><b><a href="http://www.jamesonwhiskey.com" target="_blank">Website</a></b></div>';


arr_markers[9] = new Array();

arr_markers[9]['marker'] = "Christ Church Cathedral";

arr_markers[9]['lat'] = 53.34351299999999;

arr_markers[9]['lng'] = -6.271060199999965;

arr_markers[9]['info'] = '<div class="map-point-info"><img src="images/christ-church-cathedral.jpg"><h5>Christ Church Cathedral</h5>Christ Church Cathedral is the Church of Ireland Cathedral for Dublin and Glendalough. Its origins date to about 1038 when the Viking settlers constructed a cathedral on this site.<br><b><a href="http://www.christchurchdublin.ie" target="_blank">Website</a></b></div>';


arr_markers[10] = new Array();

arr_markers[10]['marker'] = "Dublin Castle";

arr_markers[10]['lat'] = 53.34288609999999;

arr_markers[10]['lng'] = -6.267428399999972;

arr_markers[10]['info'] = '<div class="map-point-info"><img src="images/dublin-castle.jpg"><h5>Dublin Castle</h5>Located off Dame Street in the centre of the city, Dublin Castle gives you a good taste of medieval Dublin. The river Poddle which flows under the castle formed the Black Pool (Dubh Linn) after which Dublin is named.<br><b><a href="http://www.dublincastle.ie" target="_blank">Website</a></b></div>';


arr_markers[11] = new Array();

arr_markers[11]['marker'] = "National Gallery of Ireland";

arr_markers[11]['lat'] = 53.34091038512774;

arr_markers[11]['lng'] = -6.252479562951635;

arr_markers[11]['info'] = '<div class="map-point-info"><img src="images/national-gallery-of-ireland.jpg"><h5>National Gallery of Ireland</h5>The National Gallery, centrally located opposite Trinity College, features fine examples of every major style of European painting, including selections by Italian Renaissance artists (notably Caravaggio`s The Taking of Christ), French Impressionists, and Dutch 17th-century masters. <br><b><a href="http://www.nationalgallery.ie" target="_blank">Website</a></b></div>';


arr_markers[12] = new Array();

arr_markers[12]['marker'] = "National Museum of Archaeology";

arr_markers[12]['lat'] = 53.34024418936001;

arr_markers[12]['lng'] = -6.254861364556859;

arr_markers[12]['info'] = '<div class="map-point-info"><img src="images/national-museum-of-archaeology-ireland.jpg"><h5>National Museum of Archaeology</h5>The National Museum of Ireland showcases items of Irish art, culture, and natural history including well known exhibits such as the Ardagh Chalice and the Tara Brooch. <br><b><a href="http://www.museum.ie/en/intro/archaeology-and-ethnography-museum.aspx" target="_blank">Website</a></b></div>';


arr_markers[13] = new Array();

arr_markers[13]['marker'] = "Science Gallery at Trinity College";

arr_markers[13]['lat'] = 53.34411536236673;

arr_markers[13]['lng'] = -6.250226421395837;

arr_markers[13]['info'] = '<div class="map-point-info"><img src="images/science-gallery-trinity.jpg"><h5>Science Gallery at Trinity College</h5>The Science Gallery takes a fresh, fun and lively look at the applications of science across a number of disciplines. Exhibitions last from a period of weeks to months and tackle different thought processes or ideas and never fails to impress and create wonderment for those who enter. <br><b><a href="https://dublin.sciencegallery.com" target="_blank">Website</a></b></div>';


arr_markers[14] = new Array();

arr_markers[14]['marker'] = "National Museum of Natural History";

arr_markers[14]['lat'] = 53.33989187008314;

arr_markers[14]['lng'] = -6.2533593275085195;

arr_markers[14]['info'] = '<div class="map-point-info"><img src="images/national-museum-of-natural-history-ireland.jpg"><h5>National Museum of Natural History</h5>The Natural History Museum has galleries of animals from Ireland and overseas, along with geological exhibits from a total collection of approximately 2 million scientific specimens. <br><b><a href="http://www.museum.ie/en/intro/natural-history.aspx" target="_blank">Website</a></b></div>';


arr_markers[15] = new Array();

arr_markers[15]['marker'] = "National Museum of Arts &amp; History";

arr_markers[15]['lat'] = 53.348261998144245;

arr_markers[15]['lng'] = -6.286441369836439;

arr_markers[15]['info'] = '<div class="map-point-info"><img src="images/national-museum-of-arts-history-ireland.jpg"><h5>National Museum of Arts &amp; History</h5>The Museum of Decorative Arts and History at Collins Barracks is home to a wide range of objects including weaponry, furniture, silver, ceramics and glassware, as well as examples of folklife and costume.<br><b><a href="http://www.museum.ie/en/intro/arts-and-history.aspx" target="_blank">Website</a></b></div>';


arr_markers[16] = new Array();

arr_markers[16]['marker'] = "Chester Beatty Library";

arr_markers[16]['lat'] = 53.3422531;

arr_markers[16]['lng'] = -6.267419199999949;

arr_markers[16]['info'] = '<div class="map-point-info"><img src="images/chester-beatty-library.jpg"><h5>Chester Beatty Library</h5>Located in the grounds of Dublin Castle, the Chester Beatty Library houses the collection of Sir Alfred Chester Beatty, bequeathed to the Irish State on his death. The collection includes more than 20,000 manuscripts, rare books, miniature paintings, clay tablets, costumes and other objects of artistic, historical and aesthetic importance.<br><b><a href="http://www.cbl.ie" target="_blank">Website</a></b></div>';


arr_markers[17] = new Array();

arr_markers[17]['marker'] = "The National Library of Ireland";

arr_markers[17]['lat'] = 53.341083338096496;

arr_markers[17]['lng'] = -6.254453668786596;

arr_markers[17]['info'] = '<div class="map-point-info"><img src="images/national-library-of-ireland.jpg"><h5>The National Library of Ireland</h5>The National Library of Ireland houses the largest collection of Irish printed, manuscript, and visual material in the world, and the collections span almost 1,000 years of Irish art, culture, history and literature.<br><b><a href="http://www.nli.ie" target="_blank">Website</a></b></div>';


arr_markers[18] = new Array();

arr_markers[18]['marker'] = "National Botanic Gardens";

arr_markers[18]['lat'] = 53.37236739999999;

arr_markers[18]['lng'] = -6.2727158000000145;

arr_markers[18]['info'] = '<div class="map-point-info"><img src="images/national-botanic-gardens.jpg"><h5>National Botanic Gardens</h5>The National Botanic Gardens collections has over 15,000 plant species and visitors can enjoy the Herbaceous borders, the rose garden, the alpine yard, the pond area, rock garden and arboretum. The gardens are home to over 300 endangered plant species from around the world including some species already extinct in the wild.<br><b><a href="http://www.botanicgardens.ie" target="_blank">Website</a></b></div>';


arr_markers[19] = new Array();

arr_markers[19]['marker'] = "Phoenix Park";

arr_markers[19]['lat'] = 53.3558823;

arr_markers[19]['lng'] = -6.329813300000069;

arr_markers[19]['info'] = '<div class="map-point-info"><img src="images/phoenix-park.jpg"><h5>Phoenix Park</h5>The largest urban enclosed park in Europe, with a circumference of 11km (7m), the Phoenix Park includes ornamental gardens, nature trails, avenues of trees, Red Deer roaming the forested areas, and equestrian sports on polo fields.<br><b><a href="http://www.phoenixpark.ie" target="_blank">Website</a></b></div>';


arr_markers[20] = new Array();

arr_markers[20]['marker'] = "Garden of Remembrance";

arr_markers[20]['lat'] = 53.353882462750775;

arr_markers[20]['lng'] = -6.264138806359824;

arr_markers[20]['info'] = '<div class="map-point-info"><img src="images/garden-of-rememberance.jpg"><h5>Garden of Remembrance</h5>A place of quiet reflection, the Garden of Remembrance is dedicated to the memory of all who gave their lives in the cause of Irish freedom. The beautiful memorial was designed by Daithí Hanly and the large sculpture by Oisin Kelly is based on the theme of the "Children of Lir".<br><b><a href="http://www.heritageireland.ie/en/Dublin/GardenofRemembrance/" target="_blank">Website</a></b></div>';


arr_markers[21] = new Array();

arr_markers[21]['marker'] = "St. Stephen`s Green";

arr_markers[21]['lat'] = 53.33823048567491;

arr_markers[21]['lng'] = -6.259164385180611;

arr_markers[21]['info'] = '<div class="map-point-info"><img src="images/st-stephens-green.jpg"><h5>St. Stephen`s Green</h5>St. Stephen`s Green is a popular 22 acre park in the centre of Dublin City landscaped with flowerbeds, trees, a fountain, a lake, and dotted with memorials to eminent Dubliners. The bandstand is still used for free daytime concerts in summer.<br><b><a href="http://www.heritageireland.ie/en/dublin/ststephensgreen/" target="_blank">Website</a></b></div>';


arr_markers[22] = new Array();

arr_markers[22]['marker'] = "The Iveagh Gardens";

arr_markers[22]['lat'] = 53.33531190000001;

arr_markers[22]['lng'] = -6.260869200000002;

arr_markers[22]['info'] = '<div class="map-point-info"><img src="images/the-iveagh-gardens.jpg"><h5>The Iveagh Gardens</h5>The Iveagh Gardens are among the finest and least known of Dublin’s parks and gardens, and an oasis of peace when visiting Dublin with its sculptures, sunken lawns, rockeries, a rose garden, a hedge maze and impressive waterfall. <br><b><a href="http://www.heritageireland.ie/en/dublin/theiveaghgardens/" target="_blank">Website</a></b></div>';


arr_markers[23] = new Array();

arr_markers[23]['marker'] = "Croke Park";

arr_markers[23]['lat'] = 53.360712;

arr_markers[23]['lng'] = -6.251209000000017;

arr_markers[23]['info'] = '<div class="map-point-info"><img src="images/croke-park.jpg"><h5>Croke Park</h5>Croke Park has been at the heart of Irish sporting life for more than 100 hundred years. The stadium boasts a capacity for 82,300 people, the is the home of Gaelic Games and the headquarters of the Gaelic Athletic Association (GAA). It also regularly plays hosts to major concerts and other sporting events. <br><b><a href="http://www.crokepark.ie" target="_blank">Website</a></b></div>';


arr_markers[24] = new Array();

arr_markers[24]['marker'] = "Aviva Stadium";

arr_markers[24]['lat'] = 53.3352311;

arr_markers[24]['lng'] = -6.228457100000014;

arr_markers[24]['info'] = '<div class="map-point-info"><img src="images/aviva-stadium.jpg"><h5>Aviva Stadium</h5>The Aviva Stadium is the home of Irish Rugby and Football. Located on the old grounds of Lansdowne Road Stadium it is an iconic feature on Dublin`s skyline hosting major sporting events and concerts with a capacity of  50,000 people. <br><b><a href="http://www.avivastadium.ie/" target="_blank">Website</a></b></div>';


function initialize() {

    //var latlng = new google.maps.LatLng(53.341874,-6.286709299999984);

    //var latlng = new google.maps.LatLng(53.341874,-6.286709299999984);

//  var latlng = new google.maps.LatLng(53.341874,-6.286709299999984);

    var latlng = new google.maps.LatLng(53.341874, -6.286709299999984);

    // set direction render options

    var rendererOptions = {draggable: true};

    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

    var myOptions = {

        zoom: 12,

        scaleControl: true,

        center: latlng,

        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: true

    };

    // add the map to the map placeholder

    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

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

    directionsService.route(request, function (response, status) {

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

                alert("There was an unknown error in your request. Requeststatus: nn" + status);

            }

        }

    });

}


function showMarker(marker_index) {

    // remove all markers

    remove_all_markers();


    marker = new google.maps.Marker({

        position: new google.maps.LatLng(arr_markers[marker_index]["lat"]

            , arr_markers[marker_index]["lng"]),

        map: map,

        title: arr_markers[marker_index]["name"]

    });


    infowindow.open(map, marker);

    infowindow.setContent(arr_markers[marker_index]["info"]);


    infowindow.open(map, marker);


}


function showAddress(address) {





//    var addressInfo = "<p style=\"text-transform: capitalize\">"+address+"</p>";


    geocoder.geocode({'address': address}, function (results, status) {


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

            infowindow.setContent(results[0].formatted_address);

            infowindow.open(map, marker);


            google.maps.event.addListener(marker, 'click', function () {



//                infowindow.setContent( addressInfo );

                infowindow.setContent(results[0].formatted_address);

                infowindow.open(map, marker);


            });


        } else {

            alert(address + " not found");

        }

    });


}


function remove_all_markers() {

    if (marker != null) {

        marker.setMap(null);

    }

}


// function autocomplete() {
//
//     var input = document.getElementById('street_address');
//
//
//     var autocomplete = new google.maps.places.Autocomplete(input);
//
// }
//
// google.maps.event.addDomListener(window, 'load', autocomplete);

$(document).ready(function () {
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

    $("#frm_search_address").submit(function () {

        var street_address = $("#street_address").val();

        if (street_address.length > 0) {

            // display code address

            showAddress(street_address);

        }


        return false;

    });


});