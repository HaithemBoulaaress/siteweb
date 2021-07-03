// this variable will collect the html which will eventualkly be placed in the side_bar
var side_bar_html = "";

// arrays to hold copies of the markers and html used by the side_bar
// because the function closure trick doesnt work there
var gmarkers = [];
var i = 0;


// A function to create the marker and set up the event window
function createMarker(point,name,html) {
    // use a custom icon with letter A - Z
    var letter = String.fromCharCode("A".charCodeAt(0) + i);
    var myIcon = new GIcon(G_DEFAULT_ICON, "http://www.google.com/mapfiles/marker" + letter + ".png");
    myIcon.printImage = "https://maps.google.com/mapfiles/marker"+letter+"ie.gif"
    myIcon.mozPrintImage = "https://maps.google.com/mapfiles/marker"+letter+"ff.gif"

    var marker = new GMarker(point, {icon:myIcon});
    GEvent.addListener(marker, "click", function() {
        marker.openInfoWindowHtml(html);
    });
    // save the info we need to use later for the side_bar
    gmarkers[i] = marker;
    // add a line to the side_bar html
    side_bar_html += '<div class="map-marker"><b>'+letter+'</b> <a href="javascript:myclick(' + i + ')">' + name + '</a></div>';
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
    map.setMapType(G_PHYSICAL_MAP);

    // add the points
    var point = new GLatLng(55.162985, -8.143272);
    var marker = createMarker(point, "Magheroarty, Co. Donegal<br>", "<div class=\"map-point-info\"><img src=\"images/magheroarty-donegal.jpg\"><B>SURFING MAGHEROARTY</b><br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND:</b> Southerly<br><b>BEST SWELL:</b> North westerly <br><b>BEST TIDE:</b> All <br><b>HAZARDS: </b>None <br> <b>GRADE:</b> Intermediate. </div>")
    map.addOverlay(marker);

    var point = new GLatLng(55.16073, -8.085937);
    var marker = createMarker(point, "Falcarragh, Co. Donegal <br>", "<div class=\"map-point-info\"><img src=\"images/falcarragh-donegal.jpg\"><b>SURFING FALCARRAGH</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND: </b>South westerly<br><b>BEST SWELL:</b> North easterly <br><b>BEST TIDE:</b> Mid-High  <br><b>HAZARDS:</b> None <br> <b>GRADE:</b> Novice.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(54.555689, -8.210135);
    var marker = createMarker(point, "Rossnowlagh, Co. Donegal<br>", "<div class=\"map-point-info\"><img src=\"images/rossnowlagh-donegal.jpg\"><b>SURFING ROSSNOWLAGH</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND: </b>Easterly<br><b>BEST SWELL:</b> Westerly <br><b>BEST TIDE: </b>High <br><b>HAZARDS: </b>None <br> <b>GRADE:</b> Novice.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(54.508327, -8.255281);
    var marker = createMarker(point, "Bundoran, Co. Donegal<br>", "<div class=\"map-point-info\"><img src=\"images/bundoran-donegal.jpg\"><b>SURFING BUNDORAN</b> <br><b>BREAK TYPE:</b> Reef<br><b>BEST WIND: </b>South easterly<br><b>BEST SWELL:</b> Westerly <br><b>BEST TIDE:</b> Low-mid <br><b>HAZARDS:</b> None <br> <b>GRADE:</b> Intermediate.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(54.295691, -8.98613);
    var marker = createMarker(point, "Easky, Co. Sligo <br>", "<div class=\"map-point-info\"><img src=\"images/easky-sligo.jpg\"><b>SURFING EASKY</b> <br><b>BREAK TYPE:</b> Reef / Point<br><b>BEST WIND:</b> Southerly<br><b>BEST SWELL:</b> Northerly <br><b>BEST TIDE:</b> Mid-high <br><b>HAZARDS: </b>Rocks / Rips <br> <b>GRADE:</b> Expert.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(54.211954, -9.102001);
    var marker = createMarker(point, "Inishcrone, Co. Sligo <br>", "<div class=\"map-point-info\"><img src=\"images/inishcrone-sligo.jpg\"><b>SURFING INISHCRONE</b> <br><b>BREAK TYPE:</b> Point<br><b>BEST WIND:</b> South easterly<br><b>BEST SWELL:</b> Northerly <br><b>BEST TIDE: </b>All <br><b>HAZARDS:</b> Rocks / Rips <br> <b>GRADE:</b> Intermediate.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(53.974364, -10.070858);
    var marker = createMarker(point, "Keel, Achill Island<br>", "<div class=\"map-point-info\"><img src=\"images/keel-achill-island.jpg\"><b>SURFING KEEL</b>- <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND: </b>North easterly <br><b>BEST SWELL:</b> South westerly <br><b>BEST TIDE:</b> All <br><b>HAZARDS:</b> None <br> <b>GRADE:</b> Novice.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(53.419968, -10.145874);
    var marker = createMarker(point, "Dun Loughan, Co. Galway <br>", "<div class=\"map-point-info\"><img src=\"images/dun-loughan-galway.jpg\"><b>SURFING DUN LOUGHAN</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND:</b> Easterly<br><b>BEST SWELL:</b> Westerly <br><b>BEST TIDE:</b> Mid-high <br><b>HAZARDS:</b> Rocks <br><b> GRADE:</b> Intermediate.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(52.942328, -9.368334);
    var marker = createMarker(point, "Lahinch, Co. Clare<br>", "<div class=\"map-point-info\"><img src=\"images/lahinch-clare.jpg\"><b>SURFING LAHINCH</b> <br><b>BREAK TYPE:</b> Beach / Reef<br><b>BEST WIND:</b> South easterly<br><b>BEST SWELL:</b> Westerly <br><b>BEST TIDE:</b> Mid-high <br><b>HAZARDS:</b> Rocks / Rips <br> <b>GRADE: </b>Intermediate.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(52.76445, -9.493389);
    var marker = createMarker(point, "Doonbeg, Co. Clare <br>", "<div class=\"map-point-info\"><img src=\"images/doonbeg-clare.jpg\"><b>SURFING DOONBEG</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND:</b> South easterly<br><b>BEST SWELL: </b>North westerly <br><b>BEST TIDE: </b>All <br><b>HAZARDS:</b> Rips <br> <b>GRADE: </b>Intermediate</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(52.276666, -10.037212);
    var marker = createMarker(point, "Castlegregory, Co. Kerry<br>", "<div class=\"map-point-info\"><img src=\"images/castlegregory-kerry.jpg\"><b>SURFING CASTLEGREGORY</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND: </b>South easterly<br><b>BEST SWELL:</b> North westerly <br><b>BEST TIDE:</b> Low-mid <br><b>HAZARDS:</b> Rocks <br> <b>GRADE:</b> Intermediate.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(52.128852, -9.955673);
    var marker = createMarker(point, "Inch Strand, Co. Kerry <br>", "<div class=\"map-point-info\"><img src=\"images/inch-strand-kerry.jpg\"><b>SURFING INCH STRAND</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND: </b>Easterly<br><b>BEST SWELL:</b> South westerly <br><b>BEST TIDE:</b> All <br><b>HAZARDS:</b> None <br> <b>GRADE:</b> Novice.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(51.469675, -9.775343);
    var marker = createMarker(point, "Barley Cove, Co. Cork <br>", "<div class=\"map-point-info\"><img src=\"images/barley-cove-cork.jpg\"><b>SURFING BARLEY COVE</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND: </b>North easterly<br><b>BEST SWELL:</b> Southerly <br><b>BEST TIDE: </b>Mid-high <br><b>HAZARDS:</b> None <br> <b>GRADE: </b>Novice.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(51.597281, -8.861418);
    var marker = createMarker(point, "Inchydoney, Co. Cork <br>", "<div class=\"map-point-info\"><img src=\"images/inchydoney-cork.jpg\"><b>SURFING INCHYDONEY</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND: </b>North easterly<br><b>BEST SWELL:</b> Southerly <br><b>BEST TIDE:</b> All <br><b>HAZARDS:</b> Rips <br> <b>GRADE:</b> Intermediate.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(51.557116, -8.966045);
    var marker = createMarker(point, "Castlefreake, Co. Cork <br>", "<div class=\"map-point-info\"><img src=\"images/castlefreke-cork.jpg\"><b>SURFING CASTLEFREAKE</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND: </b>South westerly<br><b>BEST SWELL:</b> Northerly <br><b>BEST TIDE:</b> Low-mid <br><b>HAZARDS:</b> Rocks <br> <b>GRADE:</b> Intermediate.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(51.640394, -8.564358);
    var marker = createMarker(point, "Garretstown, Co. Cork <br>", "<div class=\"map-point-info\"><img src=\"images/garretstown-cork.jpg\"><b>SURFING GARRETSTOWN</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND: </b>South westerly<br><b>BEST SWELL:</b> Northerly <br><b>BEST TIDE:</b> Low <br><b>HAZARDS:</b> Rips <br> <b>GRADE:</b> Novice.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(52.153083, -7.107811);
    var marker = createMarker(point, "Tramore, Co. Waterford <br>", "<div class=\"map-point-info\"><img src=\"images/tramore-waterford.jpg\"><b>SURFING TRAMORE</b> <br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND: </b>Easterly<br><b>BEST SWELL:</b> Southerly <br><b>BEST TIDE: </b>All <br><b>HAZARDS:</b> None <br><b> GRADE:</b> Novice.</div> ")
    map.addOverlay(marker);

    var point = new GLatLng(55.170241, -6.731873);
    var marker = createMarker(point, "Portrush, Co. Antrim  <br>", "<div class=\"map-point-info\"><img src=\"images/portrush-antrim.jpg\"><b>SURFING PORTRUSH</b><br><b>BREAK TYPE:</b> Beach<br><b>BEST WIND:</b> South easterly<br><b>BEST SWELL:</b> Northerly <br><b>BEST TIDE:</b> All <br><b>HAZARDS:</b> None <br> <b>GRADE:</b> Novice.</div> ")
    map.addOverlay(marker);

    // put the assembled side_bar_html contents into the side_bar div
    document.getElementById("side_bar").innerHTML = side_bar_html;
}