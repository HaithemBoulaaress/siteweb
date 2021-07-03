// this variable will collect the html which will eventualkly be placed in the side_bar
var side_bar_html = "";

// arrays to hold copies of the markers and html used by the side_bar
// because the function closure trick doesnt work there
var gmarkers = [];
var i = 0;


// A function to create the marker and set up the event window
function createMarker(point, name, html) {
    // use a custom icon with letter A - Z
    var letter = String.fromCharCode("A".charCodeAt(0) + i);
    var myIcon = new GIcon(G_DEFAULT_ICON, "http://www.google.com/mapfiles/marker" + letter + ".png");
    myIcon.printImage = "https://maps.google.com/mapfiles/marker" + letter + "ie.gif"
    myIcon.mozPrintImage = "https://maps.google.com/mapfiles/marker" + letter + "ff.gif"

    var marker = new GMarker(point, {icon: myIcon});
    GEvent.addListener(marker, "click", function () {
        marker.openInfoWindowHtml(html);
    });
    // save the info we need to use later for the side_bar
    gmarkers[i] = marker;
    // add a line to the side_bar html
    side_bar_html += '<div class="map-marker"><b>' + letter + '</b> <a href="javascript:myclick(' + i + ')">' + name + '</a></div>';
    i++;
    return marker;
}


// This function picks up the click and opens the corresponding info window
function myclick(i) {
    GEvent.trigger(gmarkers[i], "click");
}

function load() {
    // create the map
    var map = new GMap2(document.getElementById("map_canvas"));
    map.addControl(new GLargeMapControl());
    map.addControl(new GMapTypeControl());
    map.addMapType(G_PHYSICAL_MAP);
    map.addControl(new GScaleControl());
    map.addControl(new GOverviewMapControl());
    map.setCenter(new GLatLng(53.553363, -8.096924), 7);

    // add the points

    var point = new GLatLng(54.951991, -7.735834);
    var marker = createMarker(point, "Earagail Arts Festival<br>", "<div class=\"map-point-info\"><B>EARAGAIL ARTS FESTIVAL</b><br><b>Description:</b> Innovative international festival<br> of theatre, music and the visual arts.<br><b>Venue:</b> Throughout most towns and villages<br> of north west Co. Donegal.<br><b>Duration:</b> 2 weeks.<br><b>Date:</b> Mid July.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.972597, -8.304119);
    var marker = createMarker(point, "Boyle Arts Festival<br>", "<div class=\"map-point-info\"><B>BOYLE ARTS FESTIVAL</b><br><b>Description:</b> Diverse festival with comedy,<br> music and theatre.<br><b>Venue:</b> Various throughout Boyle town.<br><b>Duration:</b> 1 week.<br><b>Date:</b> Late July / Early August.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.801614, -9.522099);
    var marker = createMarker(point, "Westport Arts Festival<br>", "<div class=\"map-point-info\"><B>WESTPORT ARTS FESTIVAL</b><br><b>Description:</b> Showcase of local, national<br> and international music and art.<br><b>Venue:</b> Various throughout Westport town.<br><b>Duration:</b> 10 days.<br><b>Date:</b> Late August/ Early September.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.276813, -9.056833);
    var marker = createMarker(point, "Galway Arts Festival<br>", "<div class=\"map-point-info\"><B>GALWAY ARTS FESTIVAL</b><br><b>Description:</b> Ireland’s largest and most<br> renowned arts festival.<br><b>Venue:</b> Big Top and various throughout<br> Galway City.<br><b>Duration:</b> 2 weeks.<br><b>Date:</b> Mid July.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.276146, -9.054054);
    var marker = createMarker(point, "Cuirt Literary Festival<br>", "<div class=\"map-point-info\"><B>CUIRT LITERARY FESTIVAL</b><br><b>Description:</b> Ireland’s premier literary festival,<br> attracting global literary talent.<br><b>Venue:</b> Galway Arts Centre, Town Hall and more.<br><b>Duration:</b> 6 days.<br><b>Date:</b> Late April.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.279572, -9.050728);
    var marker = createMarker(point, "Galway Film Fleadh<br>", "<div class=\"map-point-info\"><B>GALWAY FILM FLEADH</b><br><b>Description:</b> Showcase for new and classic<br> Irish and World Cinema.<br><b>Venue:</b> Town Hall, Galway Omniplex.<br><b>Duration:</b> 5 days.<br><b>Date:</b> Early / Mid July.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.266451, -9.051833);
    var marker = createMarker(point, "Galway Oyster Festival<br>", "<div class=\"map-point-info\"><B>GALWAY OYSTER FESTIVAL</b><br><b>Description:</b> Gourmet seafood and live<br> music festival.<br><b>Venue:</b> Nimmo’s Pier marquee, Claddagh,<br> Galway City.<br><b>Duration:</b> 4 days.<br><b>Date:</b> Late September.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.229699, -8.880644);
    var marker = createMarker(point, "Clarenbridge Oyster<br>", "<div class=\"map-point-info\"><B>CLARENBRIDGE OYSTER FEST</b><br><b>Description:</b> Long running and popular<br> oyster festival.<br><b>Venue:</b> Various throughout Clarenbridge,<br>Co. Galway.<br><b>Duration:</b> 1 week.<br><b>Date:</b> Early September.</div>")
    map.addOverlay(marker);


    var point = new GLatLng(53.054061, -8.202753);
    var marker = createMarker(point, "Terryglass Arts Festival<br>", "<div class=\"map-point-info\"><B>TERRYGLASS ARTS FESTIVAL</b><br><b>Description:</b> Wide variety of craft<br> and performance workshops along with live<br> music and dance.<br><b>Venue:</b> Various throughout Terryglass,<br> North Tipperary.<br><b>Duration:</b> Weekend, 4 days.<br><b>Date:</b> Late August.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.438387, -9.500771);
    var marker = createMarker(point, "Cape Clear Storytelling<br>", "<div class=\"map-point-info\"><B>CAPE CLEAR STORYTELLING FESTIVAL</b><br><b>Description:</b> Unique festival renowned for attracting<br> the best story tellers from all over the world.<br><b>Venue:</b> Throughout Cape Clear Island, Co. Cork.<br><b>Duration:</b> Weekend, 3 nights.<br><b>Date:</b> Late August.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(51.549111, -9.266324);
    var marker = createMarker(point, "A Taste of West Cork<br>", "<div class=\"map-point-info\"><B>A TASTE OF WEST CORK</b><br><b>Description:</b> Showcase of great food<br> produced in the region.<br><b>Venue:</b> Markets, restaurants and hotels<br> in the selected west Cork town.<br><b>Duration:</b> Weekend, 4 days.<br><b>Date:</b> Mid / Late September.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(52.260541, -7.105494);
    var marker = createMarker(point, "Waterford Fringe Festival<br>", "<div class=\"map-point-info\"><B>WATERFORD FRINGE FESTIVAL</b><br><b>Description:</b> Multi-disciplinary Arts Festival<BR> including visual art, music and comedy.<br><b>Venue:</b> Various throughout Waterford City.<br><b>Duration:</b> 10 days.<br><b>Date:</b> Mid / Late September.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.290104, -6.128504);
    var marker = createMarker(point, "Festival of World Cultures<br>", "<div class=\"map-point-info\"><B>FESTIVAL OF WORLD CULTURES</b><br><b>Description:</b> Popular classical, traditional,<br> folk, electronic and tribal music<br> festival with many street events.<br><b>Venue:</b> Various along Dun Laoghaire<br> Seafront, promenade and in local theatres.<br><b>Duration:</b> Weekend, 3 nights.<br><b>Date:</b> Last weekend in August. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.348028, -6.278418);
    var marker = createMarker(point, "Dublin Fringe Festival<br>", "<div class=\"map-point-info\"><B>DUBLIN FRINGE FESTIVAL</b><br><b>Description:</b> Leading multi-disciplinary<br> festival of contemporary performing arts.<br><b>Venue:</b> Various theatres throughout Dublin city.<br><b>Duration:</b> 2 weeks.<br><b>Date:</b> Early / Mid September.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.336069, -6.261349);
    var marker = createMarker(point, "A Taste of Dublin <br>", "<div class=\"map-point-info\"><B>A TASTE OF DUBLIN</b><br><b>Description:</b> Leading Irish food<br> and drink festival.<br><b>Venue:</b> Iveagh Gardens and various<br> top Dublin restaurants.<br><b>Duration:</b> Weekend, 4 days.<br><b>Date:</b> Mid June.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.346209, -6.256757);
    var marker = createMarker(point, "Dublin Film Festival<br>", "<div class=\"map-point-info\"><B>DUBLIN FILM FESTIVAL</b><br><b>Description:</b> High profile Irish and<br> international film festival.<br><b>Venue:</b> Most cinemas in Dublin city centre.<br><b>Duration:</b> 1 week.<br><b>Date:</b> Early / Mid February.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.340239, -6.261563);
    var marker = createMarker(point, "Dublin Theatre Festival<br>", "<div class=\"map-point-info\"><B>DUBLIN THEATRE FESTIVAL</b><br><b>Description:</b> Highly regarded extensive festival,<br> drawing the best of world theatre talent.<br><b>Venue:</b> Various theatres throughout Dublin city centre.<br><b>Duration:</b> 2 weeks.<br><b>Date:</b> Late September - Mid October.</div>")
    map.addOverlay(marker);

    var point = new GLatLng(53.348028, -6.278418);
    var marker = createMarker(point, "Kilkenny Arts Festival<br>", "<div class=\"map-point-info\"><B>KILKENNY ARTS FESTIVAL</b><br><b>Description:</b> Top Irish theatre, music,<br> literature, visual arts festival.<br><b>Venue:</b> Various theatres, arts centres and<br> hotels throughout Kilkenny City.<br><b>Duration:</b> 10 days.<br><b>Date:</b> Mid August.</div>")
    map.addOverlay(marker);

    // put the assembled side_bar_html contents into the side_bar div
    document.getElementById("side_bar").innerHTML = side_bar_html;
}